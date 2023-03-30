package kr.co.company.framework.common.service;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeUtility;
import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.spring.service.TakeService;
import kr.co.takeit.util.TakeFileUtil;
import kr.co.takeit.util.TakeStringUtil;

@Service
public class CommonService {

	private static final Logger logger = LoggerFactory.getLogger(CommonService.class);

	@Autowired
	private TakeService service;

	@Autowired
	private TakeDAO dao;
	//1
	@Autowired
	ResourceLoader resourceLoader;

	/**
	 * 파일 업로드 경로
	 */
	@Value("#{application['file.upload.path']}")
	private String fileUploadPath;

	@Value("#{application['mail.smtp.host']}")
	private String mailSmtpHost;

	@Value("#{application['mail.smtp.port']}")
	private String mailSmtpPort;

	@Value("#{application['mail.send.user']}")
	private String mailSendUser;

	@Value("#{application['mail.send.password']}")
	private String mailSendPassword;

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public ArrayList uploadImage(DataSet dsFile, Map<String, String> paramMap){
		ArrayList<Map<String, String>> list = new ArrayList<Map<String, String>>();

		String sDeleteYn = TakeStringUtil.nvl(paramMap.get("sDeleteYn"), "");
		String sProjectCd = TakeStringUtil.nvl(paramMap.get("sProjectCd"), "");
		String sMenuCd = TakeStringUtil.nvl(paramMap.get("sMenuCd"), "");
		String sFilePath = TakeStringUtil.nvl(dsFile.getString(0,  "FILE_PATH"), "");
		String sFileType = TakeStringUtil.nvl(dsFile.getString(0,  "FILE_TYPE"), "");
		String sAttachCd = TakeStringUtil.nvl(dsFile.getString(0,  "ATTACH_CD"), "");

		Map data = new HashMap();
		data.put("FILE_PATH"		, sFilePath);
		data.put("ATTACH_TYPE"		, sFileType);
		data.put("ATTACH_CD"		, sAttachCd);
		data.put("_sessionUserCd"	, TakeStringUtil.nvl(paramMap.get("_sessionUserCd")));

		String fullFilePath = fileUploadPath + "/" + sProjectCd + "/" + sMenuCd + "/" + sAttachCd;
		for( int i=0; i<dsFile.getRowCount(); i++ ){
			String sFileDelYn= dsFile.getString(i,  "FILE_DEL_YN");
			if( "Y".equals(sFileDelYn) ){
				String sFileSaveNm = dsFile.getString(i,  "FILE_SAVE_NM");
				String sFileSeq = TakeStringUtil.nvl( dsFile.getString(i,  "FILE_SEQ"), "" );
				data.put("FILE_SEQ", sFileSeq);
				service.delete("SystemCommon.attachInfoFileDelete", data);

				File serverFile = new File(fullFilePath + "/" + sFileSaveNm);
				if( serverFile.exists() ){
					serverFile.delete();
				}
			}
		}

		//마스터 테이블 입력
		if("".equals(sAttachCd)){
			service.insert("SystemCommon.attachInfoInsert", data);
			sAttachCd = TakeStringUtil.nvl(data.get("ATTACH_CD"), "");
		}

		String sPath = "/" + sProjectCd + "/" + sMenuCd + "/" + sAttachCd;
		for( int i=0; i<dsFile.getRowCount(); i++ ){
			Map saveData = new HashMap();
			saveData.put("ATTACH_TYPE", sFileType);

			String sFileBlob = dsFile.getString(i,  "FILE_BLOB");
			String sFileSize = dsFile.getString(i,  "FILE_SIZE");
			String sOrigName = dsFile.getString(i,  "FILE_NM");

			//서브 테이블 입력
	    	String ext = "";
			// 내용을 가져와서
			ext = sOrigName.substring(sOrigName.lastIndexOf('.'));
			ext = ext.replace(".", "");

			saveData.put("ATTACH_CD", sAttachCd);
			saveData.put("FILE_PATH", sPath);
			saveData.put("FILE_NM", sOrigName);
			saveData.put("FILE_TYPE", ext);
			saveData.put("IMPORT_YN", "N");
			saveData.put("FILE_SIZE", sFileSize);
			saveData.put("FILE_BLOB", sFileBlob);
			saveData.put("DELETE_YN", "N");
			saveData.put("_sessionUserCd", TakeStringUtil.nvl(paramMap.get("_sessionUserCd")));

			service.insert("SystemCommon.attachInfoFileInsert", saveData);
			list.add(saveData);
		}

		return list;
	}

	public ArrayList uploadList(HttpServletRequest request){
		ArrayList<Map<String, String>> list = new ArrayList<Map<String, String>>();

		String fullFilePath		= null;
		String origName 		= null;
		String sProjectCd		= TakeStringUtil.nvl(request.getParameter("PROJECT_CD"), "");
		String sMenuCd			= TakeStringUtil.nvl(request.getParameter("MENU_CD"), "");
		String sAttachCd		= TakeStringUtil.nvl(request.getParameter("sAttachCd"), "");
		String sFilePath		= TakeStringUtil.nvl(request.getParameter("sFilePath"), "");
		String sFileSeq			= TakeStringUtil.nvl(request.getParameter("sFileSeq"), "");

		try{
			MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
	    	Iterator<String> iter = mhsr.getFileNames();
	    	MultipartFile mfile = null;
	    	String fieldName = "";

	    	Map map = null;
			// 값이 나올때까지
	    	int i = 0;
	    	while (iter.hasNext()) {
	    		Map<String, String> fileMap = new HashMap<String, String>();

				fieldName = (String)iter.next();
				// 내용을 가져와서
				mfile = mhsr.getFile(fieldName);
				origName = mfile.getOriginalFilename();
				// 파일명이 없다면
				if ("".equals(origName)) {
					continue;
				}

				// 파일 확장자
				String ext = origName.substring(origName.lastIndexOf('.'));
				ext = ext.replace(".", "");

				// 설정한 path에 파일저장
				if( "".equals(sProjectCd) ) {
					fullFilePath = fileUploadPath + "/" + sFilePath + "/" + sAttachCd;
				}
				else {
					fullFilePath = fileUploadPath + "/" + sProjectCd + "/" + sMenuCd + "/" + sAttachCd;
				}


				//sFileSeq = TakeStringUtil.nvl(request.getParameter(origName), "");


				if( !"".equals(sFileSeq) ) {
					String saveFileName = sAttachCd + "_" + sFileSeq + "." + ext;
					File serverFile = new File(fullFilePath + "/" + saveFileName);
					if( !serverFile.isDirectory() ){
						serverFile.mkdirs();
					}
					mfile.transferTo(serverFile);
				}
				list.add(fileMap);
	    	}
		}catch (Exception e) {
			// TODO: handle exception
			logger.error(e.getMessage());
		}

		return list;
	}

	public ArrayList uploadList2(HttpServletRequest request, Map sessionMap){
		ArrayList<Map<String, String>> list = new ArrayList<Map<String, String>>();

		String fullFilePath		= null;
		String origName 		= null;
		String sProjectCd		= TakeStringUtil.nvl(request.getParameter("sProjectCd"), "");
		String sMenuCd 			= TakeStringUtil.nvl(request.getParameter("sMenuCd"), "");
		String sAttachCd		= TakeStringUtil.nvl(request.getParameter("sAttachCd"), "");
		String sFilePath		= TakeStringUtil.nvl(request.getParameter("sFilePath"), "");
		String sDelFileNms		= TakeStringUtil.nvl(request.getParameter("sDelFileNms"), "");
		String sFileSeq			= "";
		String[] arrDelFileNm  = null;

		try{
			if( !"".equals(sDelFileNms) ) {
				arrDelFileNm = sDelFileNms.split(",");

				Map data = new HashMap();
				data.put("ATTACH_CD", sAttachCd);

				fullFilePath = fileUploadPath + "/" + sProjectCd + "/" + sMenuCd + "/" + sAttachCd;
				for( int i=0; i<arrDelFileNm.length; i++ ){
					String sFileSaveNm = arrDelFileNm[i];
					sFileSeq = sFileSaveNm.split("_")[1];
					sFileSeq = sFileSeq.substring(0, sFileSeq.indexOf("."));
					data.put("FILE_SEQ", sFileSeq);
					service.delete("SystemCommon.attachInfoFileDelete", data);

					File serverFile = new File(fullFilePath + "/" + sFileSaveNm);
					if( serverFile.exists() ){
						serverFile.delete();
					}
				}
			}

			MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
	    	Iterator<String> iter = mhsr.getFileNames();
	    	MultipartFile mfile = null;
	    	String fieldName = "";

	    	if( mhsr.getFileMap().size() > 0 && "".equals(sAttachCd) ) {
	    		Map masterMap = new HashMap();
	    		masterMap.put("ATTACH_TYPE", sFilePath);
	    		service.insert("SystemCommon.attachInfoInsert", masterMap);
	    		sAttachCd = TakeStringUtil.nvl(masterMap.get("ATTACH_CD"), "");
	    	}

	    	//sFilePath = "/" + sProjectCd + "/" + sMenuCd + "/" + sAttachCd;
	    	sFilePath = sAttachCd;

	    	Map<String, String> fileMap = new HashMap<String, String>();
	    	fileMap.put("ATTACH_CD", sAttachCd);

	    	while (iter.hasNext()) {

				fieldName = (String)iter.next();
				// 내용을 가져와서
				mfile = mhsr.getFile(fieldName);
				origName = mfile.getOriginalFilename();
				// 파일명이 없다면
				if ("".equals(origName)) {
					continue;
				}

				// 파일 확장자
				String ext = origName.substring(origName.lastIndexOf('.'));
				ext = ext.replace(".", "");

				//서브 테이블 입력
				sessionMap.put("ATTACH_CD", sAttachCd);
				sessionMap.put("FILE_PATH", sFilePath);
				sessionMap.put("PROJECT_CD", sProjectCd);
				sessionMap.put("MENU_CD", sMenuCd);
				sessionMap.put("FILE_NM", origName);
				sessionMap.put("FILE_TYPE", ext);
				sessionMap.put("IMPORT_YN", "N");
				sessionMap.put("FILE_SIZE", mfile.getSize());
				sessionMap.put("DELETE_YN", "N");

				service.insert("SystemCommon.attachInfoFileInsert", sessionMap);
				sFileSeq = TakeStringUtil.nvl(sessionMap.get("FILE_SEQ"), "");

				// 설정한 path에 파일저장
				fullFilePath = fileUploadPath + "/" + sProjectCd + "/" + sMenuCd + "/" + sFilePath;

				if( !"".equals(sFileSeq) ) {
					String saveFileName = sAttachCd + "_" + sFileSeq + "." + ext;
					File serverFile = new File(fullFilePath + "/" + saveFileName);
					if( !serverFile.isDirectory() ){
						serverFile.mkdirs();
					}
					mfile.transferTo(serverFile);
				}
	    	}
	    	list.add(fileMap);
		}catch (Exception e) {
			// TODO: handle exception
			logger.error(e.getMessage());
		}

		return list;
	}

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void fileAllDelete(Map fileMap) throws IOException {
		String sProjectCd = TakeStringUtil.nvl(fileMap.get("PROJECT_CD"), "");
		String sMenuCd = TakeStringUtil.nvl(fileMap.get("MENU_CD"), "");
		String sFileType = TakeStringUtil.nvl(fileMap.get("FILE_PATH"), "");
		String sAttachCd = TakeStringUtil.nvl(fileMap.get("ATTACH_CD"), "");

		if(!StringUtils.hasText(sProjectCd) || !StringUtils.hasText(sMenuCd) || !StringUtils.hasText(sAttachCd))
			return;

		Map data = new HashMap();
		data.put("ATTACH_TYPE", sFileType);
		data.put("ATTACH_CD", sAttachCd);
		service.delete("SystemCommon.attachInfoFileDelete", data);
		// service.delete("SystemCommon.attachInfoDelete", data);

		String fullFilePath = fileUploadPath + "/" + sProjectCd + "/" + sMenuCd + "/" + sAttachCd;
		FileUtils.cleanDirectory(new File(fullFilePath));
	}

	public ArrayList uploadListDB(HttpServletRequest request){
		ArrayList<Map<String, String>> list = new ArrayList<Map<String, String>>();

		String fullFilePath		= null;
		String origName 		= null;
		String sAttachCd		= TakeStringUtil.nvl(request.getParameter("sAttachCd"), "");
		String sFilePath		= TakeStringUtil.nvl(request.getParameter("sFilePath"), "");
		String sFileSeq			= "";

		try{
			MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
	    	Iterator<String> iter = mhsr.getFileNames();
	    	MultipartFile mfile = null;
	    	String fieldName = "";

	    	Map map = null;
			// 값이 나올때까지
	    	int i = 0;
	    	while (iter.hasNext()) {
	    		Map<String, String> fileMap = new HashMap<String, String>();

				fieldName = (String)iter.next();
				// 내용을 가져와서
				mfile = mhsr.getFile(fieldName);
				origName = mfile.getOriginalFilename();
				// 파일명이 없다면
				if ("".equals(origName)) {
					continue;
				}

				// 파일 확장자
				String ext = origName.substring(origName.lastIndexOf('.'));
				ext = ext.replace(".", "");

				// 설정한 path에 파일저장
				fullFilePath = fileUploadPath + "/" + sFilePath + "/" + sAttachCd;

				//파일서브 테이블 입력
				Map saveData = new HashMap();
				String sFileSize = String.valueOf(mfile.getSize());
				String sOrigName = origName;

				saveData.put("ATTACH_CD", sAttachCd);
				saveData.put("FILE_PATH", sFilePath);
				saveData.put("FILE_NM", sOrigName);
				saveData.put("FILE_TYPE", ext);
				saveData.put("IMPORT_YN", "N");
				saveData.put("FILE_SIZE", sFileSize);
				saveData.put("DELETE_YN", "N");

				service.insert("SystemCommon.attachInfoFileInsert", saveData);

				sFileSeq = (String)saveData.get("FILE_SEQ");

				String saveFileName = sAttachCd + "_" + sFileSeq + "." + ext;

				File serverFile = new File(fullFilePath + "/" + saveFileName);
				if( !serverFile.isDirectory() ){
					serverFile.mkdirs();
				}
				mfile.transferTo(serverFile);

				list.add(fileMap);
	    	}
		}catch (Exception e) {
			// TODO: handle exception
			logger.error(e.getMessage());
		}

		return list;
	}

	public void sendEmail(Map<String, String> emailInfo) {

		//final String sMailSendUser		= mailSendUser;
		//final String sMailSendPassword 	= mailSendPassword;

		String sTo		= (String)emailInfo.get("TO");
		String sSubject	= (String)emailInfo.get("SUBJECT");
		String sText	= (String)emailInfo.get("TEXT");

		Properties props = new Properties();
		props.put("mail.smtp.host"			, mailSmtpHost);
		props.put("mail.smtp.port"			, Integer.parseInt(mailSmtpPort));
		props.put("mail.smtp.auth"			, "true");
		props.put("mail.starttls.enable"	, "true");

		Session session = Session.getDefaultInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(mailSendUser, mailSendPassword);
			}
		});

		try {
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(mailSendUser));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(sTo));

			message.setSubject(MimeUtility.encodeText(sSubject, "UTF-8", "B"));	// 메일 제목
			message.setContent(sText, "text/html;charset=UTF-8");				// 메일 내용

			// send the message
			Transport.send(message);

			logger.info("Success Message Send");
		} catch (MessagingException e) {
			logger.error(e.getMessage());
		} catch (UnsupportedEncodingException e) {
			logger.error(e.getMessage());
		}
	}

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void dashSave(DataSetList dataSets, Map paramMap) {
		DataSet dsDash = dataSets.get("dsDash");
		
		//String sPageNo = (String)paramMap.get("sPageNo");
		if( dsDash != null ){
			for( int i=0; i<dsDash.getRemovedRowCount(); i++ ){
				dao.delete("Main.userDashDelete", paramMap);
			}

			for( int i=0; i<dsDash.getRowCount(); i++ ){
				int rowType = dsDash.getRowType(i);
				switch (rowType) {
				case DataSet.ROW_TYPE_INSERTED:
					dao.delete("Main.userDashInsert", paramMap);
					break;
				case DataSet.ROW_TYPE_DELETED:
					dao.delete("Main.userDashDelete", paramMap);
					break;
				}
			}
		}
	}

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void userConfigUpdate(Map paramMap ){

		String sProjectCd		= (String)paramMap.get("sProjectCd");
		String sPageNo			= (String)paramMap.get("sPageNo");
		String sGridNo			= (String)paramMap.get("sGridNo");
		String sDelYn			= (String)paramMap.get("sDelYn");
		String userCd			= (String)paramMap.get("_sessionUserCd");
		String sWorldTimeCd		= (String)paramMap.get("sWorldTimeCd");
		String sCurrencyCd		= (String)paramMap.get("sCurrencyCd");
		String sDistrictKey 	= (String)paramMap.get("sDistrictKey");
		String sGwDisplayYn		= (String)paramMap.get("sGwDisplayYn");
		String sDashCount		= (String)paramMap.get("sDashCount");
		String sWidgetTime		= (String)paramMap.get("sWidgetTime");

//		System.out.println("# sDistrictKey = " + sDistrictKey);
//		System.out.println("# sGwDisplayYn = " + sGwDisplayYn);
//		System.out.println("# sDashCount = " + sDashCount);
//		System.out.println("# sDelYn = " + sDelYn);
//		System.out.println("# sPageNo = " + sPageNo);
//		System.out.println("# sWidgetTime = " + sWidgetTime);

		if( "Y".equals(sDelYn) ){
			//Map<String, Object> dashDelInfo = new HashMap<String, Object>();
			//dashDelInfo.put("user_id"			, userId); _sessionUserId로 대체
			//dashDelInfo.put("page_no"			, sPageNo);
			Map map = new HashMap();
			map.put("PROJECT_CD", sProjectCd);
			map.put("USER_CD"	, userCd);
			map.put("GRID_NO"	, sGridNo);
			map.put("PAGE_NO"	, sPageNo);
			map.putAll(paramMap);
			dao.delete("Main.userDashDelete"		, map);

			dao.update("Main.userDashCountUpdate"	, map);
		}

		Map<String, Object> userInfo = new HashMap<String, Object>();
		userInfo.put("worldtime_cd"		, sWorldTimeCd);
		userInfo.put("currency_cd"		, sCurrencyCd);
		userInfo.put("district_Key"		, sDistrictKey);
		userInfo.put("gw_display_yn"	, sGwDisplayYn);
		userInfo.put("dash_count"		, sDashCount);
		userInfo.put("widget_time"		, sWidgetTime);
		//userInfo.put("user_id"			, userId); _sessionUserId로 대체
		//userInfo.put("mod_user"			, userId); _sessionUserId로 대체

		//dao.update("Main.userConfigUpdate", userInfo); -> 일단 주석처리
	}

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void mapperSave() throws Exception {
		Resource resource = resourceLoader.getResource("classpath:mappers");

		String path = resource.getURI().getPath();
		//System.out.println("path = " + path);

		ArrayList<String> files = TakeFileUtil.listAllFiles(TakeFileUtil.generalizePath(path), true);
		System.out.println(files);
		if( files != null ) {
			//System.out.println("files.size() ==> " + files.size());
			for(int i=0; i<files.size(); i++ ) {
				System.out.println("# " + files.get(i));

				if(files.get(i).indexOf("sql-mapper-config.xml") < 0 ) {
					getXmlData(new File(files.get(i)));
				}
			}
		}

		//String a = "C:/uxb_toolkit/workspace/UXBooster/build/classes/mappers/adm/DashManagementMapper.xml";

	}

	public void getXmlData(File xmlFile) throws Exception {
        DocumentBuilderFactory builderFactory = DocumentBuilderFactory.newInstance();

        DocumentBuilder builder = builderFactory.newDocumentBuilder();
        Document document = builder.parse(xmlFile);

        document.getDocumentElement().normalize();

        // XML 데이터 중 <person> 태그의 내용을 가져온다.
        NodeList list		= document.getElementsByTagName("mapper");
        NodeList listSelect = document.getElementsByTagName("select");
        NodeList listInsert = document.getElementsByTagName("insert");
        NodeList listUpdate = document.getElementsByTagName("update");
        NodeList listDelete = document.getElementsByTagName("delete");

        //System.out.println("# list = " + list.getLength());
        //System.out.println("# listSelect = " + listSelect.getLength());
        //System.out.println("# listInsert = " + listInsert.getLength());
        //System.out.println("# listUpdate = " + listUpdate.getLength());
        //System.out.println("# listDelete = " + listDelete.getLength());

        String sFileNm			= null;
        String sNamespace		= null;
        String sId 				= null;
        //String sParameterType 	= null;
    	//String sTimeout 		= null;
    	//String sResultType		= null;
    	//String sResultMap 		= null;
    	//String sUseCache 		= null;

    	sFileNm = xmlFile.getName();

    	//System.out.println("sFileNm = " + sFileNm);

    	NamedNodeMap rootNodeMap = list.item(0).getAttributes();
        Node nodeNamespace = rootNodeMap.getNamedItem("namespace");
        if( nodeNamespace != null ) sNamespace = nodeNamespace.getNodeValue();

        //System.out.println("# namespace = " + sNamespace);

        Map<String, String> map = new HashMap<String, String>();
    	// Select
        for (int i = 0; i < listSelect.getLength(); ++i) {
        	//<select id="dashInfoList" parameterType="map" timeout="0" resultMap="manualMap" useCache="false">
        	NamedNodeMap nodeMap = listSelect.item(i).getAttributes();

        	Node nodeId = nodeMap.getNamedItem("id");
        	if( nodeId != null ) sId = nodeId.getNodeValue();

        	//Node nodeParameterType = nodeMap.getNamedItem("parameterType");
        	//if( nodeParameterType != null ) sParameterType = nodeParameterType.getNodeValue();

        	//Node nodeTimeout = nodeMap.getNamedItem("timeout");
        	//if( nodeTimeout != null ) sTimeout = nodeTimeout.getNodeValue();

        	//Node nodeResultType = nodeMap.getNamedItem("resultType");
        	//if( nodeResultType != null ) sResultType = nodeResultType.getNodeValue();

        	//Node nodeResultMap = nodeMap.getNamedItem("resultMap");
        	//if( nodeResultMap != null ) sResultMap = nodeResultMap.getNodeValue();

        	//Node nodeUseCache = nodeMap.getNamedItem("useCache");
        	//if( nodeUseCache != null ) sUseCache = nodeUseCache.getNodeValue();

        	//System.out.println("id:" + sId +", parameterType:"+ sParameterType+", timeout:"+ sTimeout+", resultType:"+ sResultType+", resultMap:"+ sResultMap+", useCache:"+ sUseCache);
        	map.put("GROUP_ID"	, sNamespace);
        	map.put("QUERY_ID"	, sId);
        	map.put("FULL_ID"	, sNamespace+"."+sId);
        	map.put("FILE_NM"	, sFileNm);
        	map.put("QUERY_TYPE", "Select");

        	List<LinkedHashMap<String, Object>> queryInfo = dao.select("Main.queryInfoSelect", map);
        	if( queryInfo != null && queryInfo.size() > 0 ) {
        		String dbSeq 		= (String)queryInfo.get(0).get("SEQ");
        		String dbGroupId 	= (String)queryInfo.get(0).get("GROUP_ID");
        		String dbQueryId 	= (String)queryInfo.get(0).get("QUERY_ID");
        		String dbFileNm 	= (String)queryInfo.get(0).get("FILE_NM");
        		String dbQueryType 	= (String)queryInfo.get(0).get("QUERY_TYPE");

        		if( sNamespace.equals(dbGroupId) == false
        				|| sId.equals(dbQueryId) == false
        				|| sFileNm.equals(dbFileNm) == false
        				|| "Select".equals(dbQueryType) == false
        				) {
        			map.put("SEQ", dbSeq);
        			dao.update("Main.queryInfoUpdate", map);
        		}

        	}else {
        		dao.insert("Main.queryInfoInsert", map);
        	}
        }

        // Insert
        for (int i = 0; i < listInsert.getLength(); ++i) {
        	//<insert id="dashInfoSaveInsert" parameterType="map" timeout="0">
        	NamedNodeMap nodeMap = listInsert.item(i).getAttributes();

        	Node nodeId = nodeMap.getNamedItem("id");
        	if( nodeId != null ) sId = nodeId.getNodeValue();

        	//Node nodeParameterType = nodeMap.getNamedItem("parameterType");
        	//if( nodeParameterType != null ) sParameterType = nodeParameterType.getNodeValue();

        	//Node nodeTimeout = nodeMap.getNamedItem("timeout");
        	//if( nodeTimeout != null ) sTimeout = nodeTimeout.getNodeValue();

        	//System.out.println("id:" + sId +", parameterType:"+ sParameterType+", timeout:"+ sTimeout);
        	map.put("GROUP_ID"	, sNamespace);
        	map.put("QUERY_ID"	, sId);
        	map.put("FULL_ID"	, sNamespace+"."+sId);
        	map.put("FILE_NM"	, sFileNm);
        	map.put("QUERY_TYPE", "Insert");

        	List<LinkedHashMap<String, Object>> queryInfo = dao.select("Main.queryInfoSelect", map);
        	if( queryInfo != null && queryInfo.size() > 0 ) {
        		String dbSeq 		= (String)queryInfo.get(0).get("SEQ");
        		String dbGroupId 	= (String)queryInfo.get(0).get("GROUP_ID");
        		String dbQueryId 	= (String)queryInfo.get(0).get("QUERY_ID");
        		String dbFileNm 	= (String)queryInfo.get(0).get("FILE_NM");
        		String dbQueryType 	= (String)queryInfo.get(0).get("QUERY_TYPE");

        		if( sNamespace.equals(dbGroupId) == false
        				|| sId.equals(dbQueryId) == false
        				|| sFileNm.equals(dbFileNm) == false
        				|| "Insert".equals(dbQueryType) == false
        				) {
        			map.put("SEQ", dbSeq);
        			dao.update("Main.queryInfoUpdate", map);
        		}

        	}else {
        		dao.insert("Main.queryInfoInsert", map);
        	}
        }

        // Update
        for (int i = 0; i < listUpdate.getLength(); ++i) {
        	//<insert id="dashInfoSaveInsert" parameterType="map" timeout="0">
        	NamedNodeMap nodeMap = listUpdate.item(i).getAttributes();

        	Node nodeId = nodeMap.getNamedItem("id");
        	if( nodeId != null ) sId = nodeId.getNodeValue();

        	//Node nodeParameterType = nodeMap.getNamedItem("parameterType");
        	//if( nodeParameterType != null ) sParameterType = nodeParameterType.getNodeValue();

        	//Node nodeTimeout = nodeMap.getNamedItem("timeout");
        	//if( nodeTimeout != null ) sTimeout = nodeTimeout.getNodeValue();

        	//System.out.println("id:" + sId +", parameterType:"+ sParameterType+", timeout:"+ sTimeout);
        	map.put("GROUP_ID"	, sNamespace);
        	map.put("QUERY_ID"	, sId);
        	map.put("FULL_ID"	, sNamespace+"."+sId);
        	map.put("FILE_NM"	, sFileNm);
        	map.put("QUERY_TYPE", "Update");

        	List<LinkedHashMap<String, Object>> queryInfo = dao.select("Main.queryInfoSelect", map);
        	if( queryInfo != null && queryInfo.size() > 0 ) {
        		String dbSeq 		= (String)queryInfo.get(0).get("SEQ");
        		String dbGroupId 	= (String)queryInfo.get(0).get("GROUP_ID");
        		String dbQueryId 	= (String)queryInfo.get(0).get("QUERY_ID");
        		String dbFileNm 	= (String)queryInfo.get(0).get("FILE_NM");
        		String dbQueryType 	= (String)queryInfo.get(0).get("QUERY_TYPE");

        		if( sNamespace.equals(dbGroupId) == false
        				|| sId.equals(dbQueryId) == false
        				|| sFileNm.equals(dbFileNm) == false
        				|| "Update".equals(dbQueryType) == false
        				) {
        			map.put("SEQ", dbSeq);
        			dao.update("Main.queryInfoUpdate", map);
        		}

        	}else {
        		dao.insert("Main.queryInfoInsert", map);
        	}
        }

        // Delete
        for (int i = 0; i < listDelete.getLength(); ++i) {
        	//<insert id="dashInfoSaveInsert" parameterType="map" timeout="0">
        	NamedNodeMap nodeMap = listDelete.item(i).getAttributes();

        	Node nodeId = nodeMap.getNamedItem("id");
        	if( nodeId != null ) sId = nodeId.getNodeValue();

        	//Node nodeParameterType = nodeMap.getNamedItem("parameterType");
        	//if( nodeParameterType != null ) sParameterType = nodeParameterType.getNodeValue();

        	//Node nodeTimeout = nodeMap.getNamedItem("timeout");
        	//if( nodeTimeout != null ) sTimeout = nodeTimeout.getNodeValue();

        	//System.out.println("id:" + sId +", parameterType:"+ sParameterType+", timeout:"+ sTimeout);
        	map.put("GROUP_ID"	, sNamespace);
        	map.put("QUERY_ID"	, sId);
        	map.put("FULL_ID"	, sNamespace+"."+sId);
        	map.put("FILE_NM"	, sFileNm);
        	map.put("QUERY_TYPE", "Delete");

        	List<LinkedHashMap<String, Object>> queryInfo = dao.select("Main.queryInfoSelect", map);
        	if( queryInfo != null && queryInfo.size() > 0 ) {
        		String dbSeq 		= (String)queryInfo.get(0).get("SEQ");
        		String dbGroupId 	= (String)queryInfo.get(0).get("GROUP_ID");
        		String dbQueryId 	= (String)queryInfo.get(0).get("QUERY_ID");
        		String dbFileNm 	= (String)queryInfo.get(0).get("FILE_NM");
        		String dbQueryType 	= (String)queryInfo.get(0).get("QUERY_TYPE");

        		if( sNamespace.equals(dbGroupId) == false
        				|| sId.equals(dbQueryId) == false
        				|| sFileNm.equals(dbFileNm) == false
        				|| "Delete".equals(dbQueryType) == false
        				) {
        			map.put("SEQ", dbSeq);
        			dao.update("Main.queryInfoUpdate", map);
        		}

        	}else {
        		dao.insert("Main.queryInfoInsert", map);
        	}
        }

    }
	
	public static String getSHA512(String input){

		String toReturn = null;

		try {
			MessageDigest digest = MessageDigest.getInstance("SHA-512");
			digest.reset();
			digest.update(input.getBytes("utf8"));
			toReturn = String.format("%0128x", new BigInteger(1, digest.digest()));
		} catch (Exception e) {
			e.printStackTrace();
		}

		return toReturn;
		
	}
}
