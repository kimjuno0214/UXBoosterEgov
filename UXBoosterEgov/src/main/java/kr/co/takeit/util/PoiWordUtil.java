package kr.co.takeit.util;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;

import org.apache.poi.xwpf.usermodel.BreakType;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.apache.poi.xwpf.usermodel.XWPFTableCell;
import org.apache.poi.xwpf.usermodel.XWPFTableRow;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTJc;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTShd;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTbl;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTblWidth;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTc;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.CTTcPr;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STJc;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STMerge;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STTblWidth;
import org.openxmlformats.schemas.wordprocessingml.x2006.main.STVerticalJc;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PoiWordUtil {
	
	private static final Logger logger = LoggerFactory.getLogger(PoiWordUtil.class);
	
	public PoiWordUtil() {
		
	}
	
	public  void fillTable(XWPFTable table) {  
		for (int rowIndex = 0; rowIndex < table.getNumberOfRows(); rowIndex++) {  
			XWPFTableRow row = table.getRow(rowIndex);  
			row.setHeight(380);  
			
			for (int colIndex = 0; colIndex < row.getTableCells().size(); colIndex++) {  
				XWPFTableCell cell = row.getCell(colIndex);  
		
				if(rowIndex%2==0){  
					setCellText(cell, " cell " + rowIndex + colIndex + " ", "D4DBED", 1000, 10, false, "CENTER");  
				}else{  
					setCellText(cell, " cell " + rowIndex + colIndex + " ", "AEDE72", 1000, 10, false, "CENTER");  
				}
			}
		}
	}
	
	public  void setCellText(XWPFTableCell cell,String text, String bgcolor, int width, int fontSize, boolean bold, String align) {  
		CTTc cttc = cell.getCTTc(); 
		CTTcPr cellPr = cttc.addNewTcPr();  
		cellPr.addNewTcW().setW(BigInteger.valueOf(width));  
		//cell.setColor(bgcolor);  
		CTTcPr ctPr = cttc.addNewTcPr();  
		CTShd ctshd = ctPr.addNewShd();  
		ctshd.setFill(bgcolor);  
		
		ctPr.addNewVAlign().setVal(STVerticalJc.CENTER);  
		if( "LEFT".equals(align) ) {
			cttc.getPList().get(0).addNewPPr().addNewJc().setVal(STJc.LEFT); 
		}else if ("RIGHT".equals(align)) {
			cttc.getPList().get(0).addNewPPr().addNewJc().setVal(STJc.RIGHT); 
		}else if( "CENTER".equals(align) ) {
			cttc.getPList().get(0).addNewPPr().addNewJc().setVal(STJc.CENTER); 
		}else {
			cttc.getPList().get(0).addNewPPr().addNewJc().setVal(STJc.CENTER); 
		}
		// get 1st paragraph in cell's paragraph list
		
		if( text != null && text.trim().length() > 0 ) {
			String texts[] = text.split("\n");
	        XWPFParagraph para = cell.getParagraphs().get(0);
	        for(int i=0; i<texts.length; i++) {
	        	XWPFRun rh = para.createRun();
	        	rh.setBold(bold);
	        	rh.setFontSize(fontSize);
	        	rh.setText(texts[i]);
	        	
	        	if( i < texts.length-1)
	        		rh.addBreak();
	        }
		}
	}
	
	public  void mergeCellsHorizontal(XWPFTable table, int row, int fromCell, int toCell) {  
		for (int cellIndex = fromCell; cellIndex <= toCell; cellIndex++) {  
			XWPFTableCell cell = table.getRow(row).getCell(cellIndex);  
		
			if ( cellIndex == fromCell ) {  
				// The first merged cell is set with RESTART merge value  
				cell.getCTTc().addNewTcPr().addNewHMerge().setVal(STMerge.RESTART);  
			} else {  
				// Cells which join (merge) the first one, are set with CONTINUE  
				cell.getCTTc().addNewTcPr().addNewHMerge().setVal(STMerge.CONTINUE);  
			}  
		}
	}
	
	public  void mergeCellsVertically(XWPFTable table, int col, int fromRow, int toRow) {  
		for (int rowIndex = fromRow; rowIndex <= toRow; rowIndex++) {  
			XWPFTableCell cell = table.getRow(rowIndex).getCell(col);  
			if ( rowIndex == fromRow ) {  
				// The first merged cell is set with RESTART merge value  
				cell.getCTTc().addNewTcPr().addNewVMerge().setVal(STMerge.RESTART);  
			} else {  
				// Cells which join (merge) the first one, are set with CONTINUE  
				cell.getCTTc().addNewTcPr().addNewVMerge().setVal(STMerge.CONTINUE);  
			}  
		}  
	}
	
	public void setTableWidth(XWPFTable table,String width){  
		CTTbl ttbl = table.getCTTbl();  
		CTTblPr tblPr = ttbl.getTblPr() == null ? ttbl.addNewTblPr() : ttbl.getTblPr();  
		CTTblWidth tblWidth = tblPr.isSetTblW() ? tblPr.getTblW() : tblPr.addNewTblW();  
		CTJc cTJc=tblPr.addNewJc();  
		cTJc.setVal(STJc.Enum.forString("center"));
		tblWidth.setW(new BigInteger(width));  
		tblWidth.setType(STTblWidth.DXA);  
	}
	
	public void blank(XWPFDocument document) {
		XWPFParagraph xwpf = document.createParagraph(); 
		xwpf.setAlignment(ParagraphAlignment.LEFT); 
		XWPFRun xwpfRun = xwpf.createRun(); 
		xwpfRun.setBold(false); 
		xwpfRun.setFontSize(10); 
		xwpfRun.setText( "" );
	}
	
	public void page(XWPFDocument document) {
		XWPFParagraph xwpf = document.createParagraph(); 
		xwpf.setAlignment(ParagraphAlignment.LEFT); 
		XWPFRun xwpfRun = xwpf.createRun();
		xwpfRun.addBreak(BreakType.PAGE); 
	}
	
	public void saveDocument(XWPFDocument document, String savePath) {
		FileOutputStream fos = null;
		try {
			fos = new FileOutputStream(savePath);  
			document.write(fos);  
		}catch(FileNotFoundException ffe) {
			logger.error("PoiWordUtil.saveDocument", ffe);
		}catch(IOException ioe) {
			logger.error("PoiWordUtil.saveDocument", ioe);
		}finally {
			try {
				fos.close();
			}catch(IOException ioe) {
				logger.error("PoiWordUtil.saveDocument", ioe);
			}
		}
	}
}
