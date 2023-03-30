package kr.co.takeit.util;

import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.StringReader;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.lowagie.text.Document;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.html.HtmlParser;
import com.lowagie.text.html.StyleSheet;
import com.lowagie.text.pdf.BaseFont;
import com.lowagie.text.pdf.PdfWriter;

public class PdfUtil {

	static Pattern PATTERN_INPUT = Pattern.compile("\\<input[^\\>]+name\\='([a-zA-Z0-9_]+)[^\\>]*\\>", Pattern.CASE_INSENSITIVE);
	static Pattern PATTERN_ROW = Pattern.compile("\\<\\!\\-\\-\\srowstart\\s--\\>(.*?)\\<\\!\\-\\- rowend \\-\\-\\>", Pattern.DOTALL);

	/**
	 * input 태그를 값으로 치환
	 *
	 * @param template
	 * @param targetString
	 * @param destString
	 * @return
	 */
	public static String setTagColumn(String template, String targetString, String destString) {
		StringBuffer sb = new StringBuffer();

		Matcher matcher = PATTERN_INPUT.matcher(template);
	    int endIndex = 0;
	    while(matcher.find()) {
	    	sb.append(template.substring(endIndex, matcher.start(0)));

	    	if(matcher.group(1).equals(targetString)){
	    		sb.append(destString);
	    	}else{
        		sb.append(matcher.group(0));
        	}

	    	//찾은문자열의 제일 마지막 index
	    	endIndex = matcher.end(0);
	    }

	    if( endIndex == 0 ){
        	sb.append(template);
        }else{
        	sb = sb.append(template.substring(endIndex));
        }

	    return sb.toString();
	}

	/**
	 * map의 key와 일치하는 input태그를 map의 value로 치환
	 *
	 * @param template
	 * @param columnInfo
	 * @return
	 */
	public static String setTagColumns(String template, Map<String, ?> columnInfo) {
		for (String key : columnInfo.keySet()) {
			template = setTagColumn(template, key, TakeStringUtil.nvl(columnInfo.get(key)));
		}

		return template;
	}

	/**
	 * template의 반복되는 행 부분을 list로 치환
	 *
	 * @param template
	 * @param list
	 * @return
	 */
	@SuppressWarnings({"unchecked", "rawtypes" })
	public static String setTagRows(String template, List<? extends Map> list) {
		int endIndex = 0;
		StringBuffer sb = new StringBuffer();
		Matcher matcher = PATTERN_ROW.matcher(template);
		while(matcher.find()) {
			sb.append(template.substring(endIndex, matcher.start(0)));
			String partTemplate = matcher.group(1);

			//rowtempalte시작입니다.
			for(Map item : list) {
				sb.append(PdfUtil.setTagColumns(partTemplate, item));
			}

			endIndex = matcher.end(0);
		}

		if( endIndex == 0 ){
        	sb.append(template);
        }else{
        	sb = sb.append(template.substring(endIndex));
        }

		return sb.toString();
	}

	/**
	 * HTML을 PDF로 변환
	 *
	 * @param template
	 * @param css
	 * @param fontPath
	 * @param pdfFileName
	 * @throws Exception
	 */
	public static void makePDF(String template, String css, String fontPath, String pdfFileName) throws Exception{
		Document document = new Document(PageSize.A4, 36, 36, 36, 10);
		try {
			String sTemplateCss = TakeFileUtil.readText(css, "UTF-8");

		    FontFactory.register(fontPath);
		    StyleSheet style = new StyleSheet(sTemplateCss);
		    style.addStyle("body", "face"		, "NanumGothic");
		    style.addStyle("body", "encoding"	, BaseFont.IDENTITY_H);

		    PdfWriter.getInstance(document, new FileOutputStream(pdfFileName));
			document.open();

			HtmlParser parser = new HtmlParser(document);
			parser.setEncoding(BaseFont.IDENTITY_H);
		    parser.setStyleSheet(style);
		    parser.parse(new StringReader(template));
		} catch (Exception e) {
			throw e;
		} finally {
			document.close();
		}
	}

	/**
	 * HTML을 PDF로 변환
	 *
	 * @param sReportPath
	 * @param os
	 * @param sPdfType
	 * @param dataList
	 * @throws Exception
	 */
	public void crate(String sReportPath, OutputStream os, String sPdfType, List dataList) throws Exception{
		String sTemplateDoc = TakeFileUtil.readText(sReportPath + "/template/" + sPdfType + ".t", "utf-8");
		int nHorizontal		= sTemplateDoc.lastIndexOf("<!--Horizontal-->");

		if( dataList != null && dataList.size() > 0 ) {

			for(int i=0; i<dataList.size(); i++) {
				StringBuffer sListDoc = new StringBuffer();

				int nTrStart 		= sTemplateDoc.lastIndexOf("<!--trstart" + TakeStringUtil.padZero(i+1, 2));
				int nTrEnd 			= sTemplateDoc.lastIndexOf("trend"+TakeStringUtil.padZero(i+1, 2)+"-->");

				String sListTemp	= sTemplateDoc.substring(nTrStart+13, nTrEnd);

				List<LinkedHashMap<String, String>> data = (List<LinkedHashMap<String, String>>)dataList.get(i);

				if( data != null && data.size() > 0 ) {
					for( int xx=0; xx<data.size(); xx++ ) {
						Map<String, String> map = data.get(xx);

						String str = sListTemp;
						Iterator<String> keys = map.keySet().iterator();
						while( keys.hasNext() ){
							String key = keys.next();

							str = TakeStringUtil.replace(str, "_$"+key+"$_", TakeStringUtil.nvl(map.get(key)));

							if( xx == data.size() - 1 ) {
								str = TakeStringUtil.replace(str, "<td class='tc", "<td class='tb");
							}
						}

						sListDoc.append(str);
					}
				}

				sTemplateDoc = TakeStringUtil.replace(sTemplateDoc, "<!--_$data"+TakeStringUtil.padZero(i+1, 2)+"$_-->", sListDoc.toString());
			}
		}

		// Document 생성
		Document document = null;
		if( nHorizontal == -1 ) {
			document = new Document(PageSize.A4, 50, 50, 50, 50);	// 세로
		}else {
			document = new Document(PageSize.A4.rotate(), 50, 50, 50, 50);	// 가로
		}

		try {
			String sTemplateCss = TakeFileUtil.readText(sReportPath + "/css/pdf.css", "UTF-8");
			String fontPath = sReportPath + "/css/NanumGothic.ttf";

		    FontFactory.register(fontPath);
		    StyleSheet style = new StyleSheet(sTemplateCss);
		    style.addStyle("body", "face"		, "NanumGothic");
		    style.addStyle("body", "encoding"	, BaseFont.IDENTITY_H);

		    PdfWriter.getInstance(document, os);
			document.open();

			HtmlParser parser = new HtmlParser(document);
			parser.setEncoding(BaseFont.IDENTITY_H);
		    parser.setStyleSheet(style);
		    parser.parse(new StringReader(sTemplateDoc));
		} catch (Exception e) {
			throw e;
		} finally {
			document.close();
		}
	}
}
