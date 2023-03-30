package kr.co.company.framework.common.controller;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import java.lang.management.ThreadInfo;
import java.lang.management.ThreadMXBean;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.sun.management.OperatingSystemMXBean;

import kr.co.company.framework.common.service.CommonService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.spring.service.TakeService;
import kr.co.takeit.util.PdfUtil;
import kr.co.takeit.util.SessionManager;
import kr.co.takeit.util.TakeFileUtil;
import kr.co.takeit.util.TakeStringUtil;
import kr.co.takeit.web.listener.SessionCountListener;

@Controller
public class CommonController {

private static final Logger logger = LoggerFactory.getLogger(CommonController.class);

	@Autowired
	private SessionManager sessionMgr;

	@Autowired
	private TakeService service;

	@Autowired
	private CommonService cmService;

	/**
	 * 파일 업로드 경로
	 */
	@Value("#{application['file.upload.path']}")
	private String fileUploadPath;

	/**
	 * 서버 임시 경로
	 */
	@Value("#{application['tmp.upload.path']}")
	private String tmpUploadPath;

	/**
	 * 로그인 체크
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
//	@RequestMapping(value = "loginCheck.do", method = RequestMethod.POST)
	@RequestMapping(value = "loginCheck.do")
	public void loginCheck(HttpServletRequest request, HttpServletResponse response){
		logger.info("Common Login Check");

		NexacroServiceManager manager = new NexacroServiceManager();
		try {
			manager.setRequest(request);

			// Reflection TEST
			/*
			try {
				Object beforeObj = ((Class.forName("kr.co.company.Before"))
										.getConstructor(HttpServletRequest.class, HttpServletResponse.class, NexacroServiceManager.class))
										.newInstance(request, response, manager);
				//Method method1 = (Method)beforeObj.getClass().getMethod("returnString", String.class);
				//method1.invoke(beforeObj, "a123456A");

				Method method2 = (Method)beforeObj.getClass().getMethod("forLoop", String.class);
				method2.invoke(beforeObj, "5");
			}catch(Exception ex) {
				ex.printStackTrace();
			}
			*/

			if (sessionMgr.existSession(request)) {
				Map userInfo = sessionMgr.getUserInfo(request);
				List<Map> data = new ArrayList<Map>();
				data.add(userInfo);

				manager.response(response, new NexacroServiceInfo("gdsUserInfo", data));
			} else {
				manager.error(response, "-1", "로그인 정보가 없습니다.");
			}
		} catch (TakeException ex) {
			logger.error("로그인 체크", ex);
			manager.error(response, "-1", "에러가 발생하였습니다.");
		}
	}

	/**
	 * 접속한 세션정보 목록을 전달
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "loginUser.do", produces = "text/html; charset=utf8")
	public void sessionList(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Common Login User");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map<String, Object> loginUserMap = SessionCountListener.getSessionUserList();

		Map<String, Object> paramMap = manager.getParamMap();
		String sProjectCd 	= (String)paramMap.get("PROJECT_CD");
		String sLoginInfo 	= (String)paramMap.get("LOGIN_INFO");
		String sUserNm 		= (String)paramMap.get("USER_NM");

		List<Map> list = new ArrayList<Map>();
		if( loginUserMap != null ){
			Iterator<String> keys 	= loginUserMap.keySet().iterator();

			while( keys.hasNext() ){
				String key = keys.next();
				Map loginUser = (Map)loginUserMap.get(key);

				String dataProjectCd 	= (String)loginUser.get("PROJECT_CD");
				String dataLoginDevice 	= (String)loginUser.get("LOGIN_DEVICE");
				String dataLoginBrowser	= (String)loginUser.get("LOGIN_BROWSER");
				String dataUserId 		= (String)loginUser.get("USER_ID");
				String dataUserNm 		= (String)loginUser.get("USER_NM");

				boolean isAddProjectCd 	= false;
				boolean isAddLoginInfo 	= false;
				boolean isAddUserCd 	= false;

				if( sProjectCd != null && sProjectCd.trim().length() > 0 ) {
					if( dataProjectCd.indexOf(sProjectCd) >= 0 ) {
						isAddProjectCd = true;
					}
				}else {
					isAddProjectCd = true;
				}

				if( sLoginInfo != null && sLoginInfo.trim().length() > 0 ) {
					if( dataLoginDevice.indexOf(sLoginInfo) >= 0 || dataLoginBrowser.indexOf(sLoginInfo) >= 0 ) {
						isAddLoginInfo = true;
					}
				}else {
					isAddLoginInfo = true;
				}

				if( sUserNm != null && sUserNm.trim().length() > 0 ) {
					if( dataUserId.indexOf(sUserNm) >= 0 || dataUserNm.indexOf(sUserNm) >= 0 ) {
						isAddUserCd = true;
					}
				}else {
					isAddUserCd = true;
				}

				if ( isAddProjectCd && isAddLoginInfo && isAddUserCd ) {
					list.add( loginUser );
				}
			}
		}

		manager.response(response, new NexacroServiceInfo("dsList", list));
	}

	/**
	 * 클릭한 메뉴를 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 * @throws TakeException
	 */
	@RequestMapping(value = "menuClick.do", produces = "text/html; charset=utf8")
	public void menuClick(HttpServletRequest request, HttpServletResponse response) throws TakeException{
		logger.info("menuClick TEST");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map paramMap = manager.getParamMap();

		// 1) 해당 사용자의 Count와 해당 메뉴 있는지 여부를 가져온다. ==> Main.userRecentmenuCheck
		String sMenuCnt 	= null;
		String sClickMenuYn	= null;

		List<LinkedHashMap<String, Object>> checkList = service.selectList("Main.userRecentmenuCheck", paramMap);
		if( checkList != null && checkList.size() > 0) {
			LinkedHashMap<String, Object> checkMap = checkList.get(0);

			sMenuCnt 		= TakeStringUtil.nvl(checkMap.get("MENU_CNT"), "0");
			sClickMenuYn	= TakeStringUtil.nvl(checkMap.get("CLICK_MENU_YN"), "");
		}

		if( "0".equals(sClickMenuYn)) {
			// 2-2) 없는 경우(sClickMenuYn==0) 마지막 접속한 메뉴 삭제 처리후 Insert 처리 ==> Main.userRecentmenuLastDelete -> Main.userRecentmenuInsert
			if( Integer.parseInt(sMenuCnt) >= 10 ) {
				service.delete("Main.userRecentmenuLastDelete", paramMap);
			}
			service.insert("Main.userRecentmenuInsert", paramMap);
		}else {
			// 2-1) 해당 메뉴가 있는 경우(sClickMenuYn==1) Update 처리	==> Main.userRecentmenuUpdate
			service.update("Main.userRecentmenuUpdate", paramMap);
		}

		manager.success(response);
	}

	/**
	 * 사용자관리 imgUpload
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "fileUpload.do", produces = "text/html; charset=utf8")
	public void fileUpload(HttpServletRequest request, HttpServletResponse response){
		logger.info("common fileUpload");

		response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        NexacroServiceManager manager = new NexacroServiceManager();
		try{
			manager.setRequest(request);
			DataSet dsFile = null;
			ArrayList list		= cmService.uploadList(request);

			NexacroServiceInfo info = new NexacroServiceInfo();
			manager.responseXML(response, "0", "SUCC", info);
		}catch(TakeException ex){
			logger.error(ex.getMessage());
		}catch(Exception ex){
	        logger.error(ex.getMessage());
	    }
	}

	@RequestMapping(value = "zipDownload.do", produces = "text/html; charset=utf8")
	public void zipDownload(HttpServletRequest request, HttpServletResponse response){
		logger.info("Common zipDownload");
		NexacroServiceManager manager = new NexacroServiceManager();

		/*DB에서 검색하여 경로및 파일명을 가져온다.*/
		String sAttachCd= TakeStringUtil.nvl(request.getParameter("sAttachCd"), "");
		String sFileSeq	= TakeStringUtil.nvl(request.getParameter("sFileSeq"), "");

		List resultList = new ArrayList();
		Map reqParamMap = new HashMap();
		reqParamMap.put("ATTACH_CD", sAttachCd);

		if( sFileSeq != null && sFileSeq.trim().length() > 0 ) {

			List listFileSeq = new ArrayList();

			String[] arrFileSeq = sFileSeq.split("/");

			if( arrFileSeq != null && arrFileSeq.length > 0 ) {
				for(int i=0; i < arrFileSeq.length; i++) {
					Map<String, String> fileSeqMap = new HashMap<String, String>();
					fileSeqMap.put("FILE_SEQ", arrFileSeq[i]);
					listFileSeq.add(fileSeqMap);
				}

				reqParamMap.put("LIST_FILE_SEQ", listFileSeq);
			}
		}

		resultList = service.selectList("SystemCommon.fileInfoList", reqParamMap);

		Map zipMap = (Map)resultList.get(0);
		String sZipFilePath = TakeStringUtil.nvl(zipMap.get("FILE_PATH"));
		String sZipAttachCd = TakeStringUtil.nvl(zipMap.get("ATTACH_CD"));

		String zipFileNm	= TakeStringUtil.format("yyyyMMddHHmm", new java.util.Date());
		String zipFile 		= fileUploadPath + "/temp/" + zipFileNm + ".zip";

		List<String> sourceFiles = new ArrayList<String>();
		for( int i=0; i<resultList.size(); i++ ){
			Map fileMap = (Map)resultList.get(i);
			String sProjectCd 		= TakeStringUtil.nvl(fileMap.get("PROJECT_CD"), "");
			String sMenuCd 			= TakeStringUtil.nvl(fileMap.get("MENU_CD"), "");
			String sFilePath 		= TakeStringUtil.nvl(fileMap.get("FILE_PATH"));
			String sFileSaveNm 		= TakeStringUtil.nvl(fileMap.get("FILE_SAVE_NM"));
			String sFileNm 			= TakeStringUtil.nvl(fileMap.get("FILE_NM"));

			try {
				TakeFileUtil.ensureDirectory(fileUploadPath + "/temp");
				TakeFileUtil.ensureDirectory(fileUploadPath + "/temp/" + zipFileNm);

				File file 	= new File(fileUploadPath + "/" + sProjectCd + "/" + sMenuCd + "/" + sFilePath + "/" + sFileSaveNm);
				File mfile	= new File(fileUploadPath + "/temp/" + zipFileNm + "/" + sFileNm);

				TakeFileUtil.copyFile(file, mfile);

				sourceFiles.add(fileUploadPath + "/temp/" + zipFileNm + "/" + sFileNm);
			}catch(IOException ex) {
				logger.error(ex.getMessage());
			}
		}

		try{
			FileOutputStream fout = new FileOutputStream(zipFile);
		    ZipOutputStream zout = new ZipOutputStream(fout);

		    for(int i=0; i < sourceFiles.size(); i++){

		        //본래 파일명 유지, 경로제외 파일압축을 위해 new File로
		        ZipEntry zipEntry = new ZipEntry(new File(sourceFiles.get(i)).getName());
		        zout.putNextEntry(zipEntry);

		        //경로포함 압축
		        //zout.putNextEntry(new ZipEntry(sourceFiles.get(i)));

		        FileInputStream fin = new FileInputStream(sourceFiles.get(i));
		        byte[] buffer = new byte[1024];
		        int length;

		        // input file을 1024바이트로 읽음, zip stream에 읽은 바이트를 씀
		        while((length = fin.read(buffer)) > 0){
		            zout.write(buffer, 0, length);
		        }

		        zout.closeEntry();
		        fin.close();
		    }

		    zout.close();

		    response.setContentType("application/zip");
		    response.addHeader("Content-Disposition", "attachment; filename=" + zipFileNm + ".zip");

		    FileInputStream fis=new FileInputStream(zipFile);
		    BufferedInputStream bis=new BufferedInputStream(fis);
		    ServletOutputStream so=response.getOutputStream();
		    BufferedOutputStream bos=new BufferedOutputStream(so);

		    byte[] data=new byte[2048];
		    int input=0;

		    while((input=bis.read(data))!=-1){
		        bos.write(data,0,input);
		        bos.flush();
		    }
		    if(bos!=null) bos.close();
		    if(bis!=null) bis.close();
		    if(so!=null) so.close();
		    if(fis!=null) fis.close();

		    manager.success(response);
		} catch (Exception ex) {
			logger.error(ex.getCause().getMessage());
		} finally {
			try {
				TakeFileUtil.deleteFile(new File(zipFile));
				TakeFileUtil.deleteDirectory(fileUploadPath + "/temp/" + zipFileNm);
			} catch (IOException ex) {
			}
		}
	}

	@RequestMapping(value = "emailTest.do", produces = "text/html; charset=utf8")
	public void emailTest(HttpServletRequest request, HttpServletResponse response) {
		Map<String, String> emailInfo = new HashMap<String, String>();
		emailInfo.put("TO"		, "glorial@take-it.co.kr");
		emailInfo.put("SUBJECT"	, "메일 전송 테스트");
		emailInfo.put("TEXT"	, "<a href='http://www.coresoft.co.kr/'>테스트입니다...</a>");

		cmService.sendEmail(emailInfo);
	}

	/**
	 * 레포트 출력
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "report.do", produces = "text/html; charset=utf8")
	public void report(HttpServletRequest request, HttpServletResponse response){

		response.setContentType("application/pdf");
	    response.addHeader("Content-Disposition", "inline; filename=test.pdf");

	    java.util.Map reqMap = request.getParameterMap();
	    java.util.Map paramMap = new HashMap();
	    String sPdfType 		= null;
	    String sNamespace 		= null;
	    String arrNamespace[]	= null;

	    Iterator<String> keys = reqMap.keySet().iterator();
	    while( keys.hasNext() ){
			String key = keys.next();
			String val = null;

			if("sPdfType".equals(key)) {
				sPdfType = ((String[])reqMap.get(key))[0];
			} else if("sNamespace".equals(key)) {
				sNamespace = ((String[])reqMap.get(key))[0];
			} else {
				val = ((String[])reqMap.get(key))[0];

				paramMap.put(key, val);
			}
		}
	    //System.out.println("sPdfType="+sPdfType+", sNamespace="+ sNamespace);

	    String sReportPath = request.getRealPath("/WEB-INF") + "/report";

		OutputStream os = null;
		try {
			List dataList = new ArrayList();
			arrNamespace = sNamespace.split(",");

			if( arrNamespace != null && arrNamespace.length > 0 ) {
				for(int i=0; i<arrNamespace.length; i++) {
					dataList.add( service.selectList(arrNamespace[i], paramMap) );

				}
			}
			os = (OutputStream)response.getOutputStream();

			PdfUtil pdf = new PdfUtil();
			pdf.crate(sReportPath, os, sPdfType, dataList);

			os.flush();
		} catch (Exception ex) {
			logger.error(ex.getMessage());
		} finally {
			if (os != null)
				try {
					os.close();
				} catch (Exception ex) {
				}
		}
	}

	/**
	 * 사용자 마이메뉴 입력
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 * @throws TakeException
	 */
	@RequestMapping(value = "myMenuInsert.do", method = RequestMethod.POST)
	public void myMenuInsert(HttpServletRequest request, HttpServletResponse response) throws TakeException{
		logger.info("myMenuInsert");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		List<LinkedHashMap<String, Object>> list = service.selectList("Main.userMymenuGroupList", manager.getParamMap());
		if( list == null || list.size() == 0 ) {
			service.insert("Main.userMymenuGroupInsert", manager.getParamMap());
		}
		service.insert("Main.userMymenuInsert", manager.getParamMap());

		manager.success(response);
	}


	/**
	 * 사용자 마이메뉴 입력
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 * @throws TakeException
	 */
	@RequestMapping(value = "myMenuDelete.do", method = RequestMethod.POST)
	public void myMenuDelete(HttpServletRequest request, HttpServletResponse response) throws TakeException{
		logger.info("myMenuDelete");

		NexacroServiceManager manager 	= new NexacroServiceManager();
		manager.setRequest(request);

		service.delete("Main.userMymenuDelete", manager.getParamMap());
		manager.success(response);
	}


	/**
	 * 화면설계서 다운로드
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "formCapture.do", produces = "text/html; charset=utf8")
	public void formCapture(HttpServletRequest request, HttpServletResponse response){

		NexacroServiceManager manager = new NexacroServiceManager();
		try{
			manager.setRequest(request);

			DataSet dsCapture = manager.getDataSet("dsCapture");
			//System.out.println(dsCapture.saveXml());
			sessionMgr.createSession(request, "__TAKE_CAPTURE__", dsCapture);

			manager.success(response);
		} catch(TakeException ex){
			logger.error(ex.getMessage());
		}
	}

	/**
	 * 사용자관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "viewWasLog.do", method = RequestMethod.POST)
	public void viewWasLog(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("SC viewWasLog");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		NexacroServiceInfo rntInfo = new NexacroServiceInfo();

		File file = new File("/data/logs/PSMS.log");
	    List<String> lines = FileUtils.readLines(file, "EUC-KR");

		int nLine = 1;
		StringBuilder sbLine = new StringBuilder();
		for(String line : lines) {
			sbLine.append(nLine + ". " + line + "\n");
		    nLine++;
		}

		Map rtnMap = new HashMap();
		rtnMap.put("LOG_TXT", sbLine);
		List rtnList = new ArrayList();
		rtnList.add(rtnMap);

		rntInfo.setData(rtnList);
		rntInfo.setDatasetName("dsList");

		manager.response(response, rntInfo);
	}

	/**
	 * cpu 및 메모리 사용률 조회
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "viewOperation.do", method = RequestMethod.POST)
	public void viewOperation(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Common viewOperation");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map paramMap = manager.getParamMap();

		NexacroServiceInfo rntInfo = new NexacroServiceInfo();

		OperatingSystemMXBean osBean = ManagementFactory.getPlatformMXBean(OperatingSystemMXBean.class);
		MemoryMXBean memoryMXBean = ManagementFactory.getMemoryMXBean();
		MemoryUsage memoryUsage = memoryMXBean.getHeapMemoryUsage();

	    System.out.println("***********************************************************");
	    StringBuilder sb = new StringBuilder();

	    String sCpuUse = String.format("%.2f", osBean.getSystemCpuLoad() * 100);
	    double dTotalMemory = (double)osBean.getTotalPhysicalMemorySize()/1024/1024/1024;
	    dTotalMemory = Math.round(dTotalMemory);

	    double dFreeMemory = (double)osBean.getFreePhysicalMemorySize()/1024/1024/1024;
	    dFreeMemory = Math.round(dFreeMemory);

	    double dUseMemory = dTotalMemory - dFreeMemory;
	    dUseMemory = Math.round(dUseMemory);

	    double nMemoryUseRate = Math.round((dUseMemory / dTotalMemory) * 100);

	    int nTotalMemory = (int)dTotalMemory;
	    int nFreeMemory = (int)dFreeMemory;
	    int nUseMemory = (int)dUseMemory;

	    sb.append("CPU Usage : " + sCpuUse);

        Process cpuInfo, cpuInfo2;
        cpuInfo = Runtime.getRuntime().exec("WMIC CPU GET /Format:List");
        cpuInfo2 = Runtime.getRuntime().exec("WMIC CPU GET DEVICEID");

        String wmicOutput = "";
        List wmicOutputList = new ArrayList();

        InputStream in = null;
        InputStream in2 = null;

        try {

        	in = cpuInfo.getInputStream();
        	in2 = cpuInfo2.getInputStream();

            wmicOutput = readToString(in, Charset.forName("US-ASCII"));
            wmicOutputList = readToString2(in2, Charset.forName("US-ASCII"));

        } catch (UnsupportedEncodingException e) {
            // Java implementations are required to support US-ASCII, so this can't happen
            throw new RuntimeException(e);
        } catch (SecurityException | IOException e) {
        	System.out.println("Error while reading WMIC output file");
        } finally {

        	if( null != in ) in.close();
        	if( null != cpuInfo ) cpuInfo.destroy();

        	if( null != in2 ) in2.close();
        	if( null != cpuInfo2 ) cpuInfo2.destroy();
		}

        String sNumberOfCores = parseWmicOutput(wmicOutput, "NumberOfCores");
        String sNumberOfLogicalProcessors = parseWmicOutput(wmicOutput, "NumberOfLogicalProcessors");
        String sDeviceID = parseWmicOutput(wmicOutput, "DeviceID");

        int nCpuCnt = 0;
        for( int i=0; i<wmicOutputList.size(); i++ ) {
        	String sOut = TakeStringUtil.nvl(wmicOutputList.get(i), "");
        	sOut = sOut.toUpperCase();
        	if( !"".equals(sOut) && !"DEVICEID".equals(sOut) && sOut.length() > 0 ) {
        		nCpuCnt++;
        	}
        }

	    Map rtnMap = new HashMap();
		rtnMap.put("LOG_TXT", sb.toString());
		rtnMap.put("CPU_CNT", nCpuCnt);
	    rtnMap.put("CPU_USE", sCpuUse);
	    rtnMap.put("CPU_CORES", sNumberOfCores);
	    rtnMap.put("CPU_LCORES", sNumberOfLogicalProcessors);
	    rtnMap.put("MEMORY_TOTAL", nTotalMemory);
	    rtnMap.put("MEMORY_FREE", nFreeMemory);
	    rtnMap.put("MEMORY_USE", nUseMemory);
	    rtnMap.put("MEMORY_USE_RATE", nMemoryUseRate);

		List rtnList = new ArrayList();
		rtnList.add(rtnMap);

		rntInfo.setData(rtnList);
		rntInfo.setDatasetName("dsList");

		manager.response(response, rntInfo);
	}


	/**
	 * 사용자관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "getCommandData.do", method = RequestMethod.POST)
	public void getCommandData(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Common getCommandData");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map paramMap = manager.getParamMap();

		NexacroServiceInfo rntInfo = new NexacroServiceInfo();

	    System.out.println("***********************************************************");

	    String sCmd = TakeStringUtil.nvl(paramMap.get("CMD_TXT"), "");

        Process cpuInfo;
        cpuInfo = Runtime.getRuntime().exec(sCmd);

        String wmicOutput = "";
        InputStream in = null;
        try {
        	in = cpuInfo.getInputStream();
            wmicOutput = readToString(in, Charset.forName("EUC-KR"));
        } catch (UnsupportedEncodingException e) {
            // Java implementations are required to support US-ASCII, so this can't happen
            throw new RuntimeException(e);
        } catch (SecurityException | IOException e) {
        	System.out.println("Error while reading WMIC output file");
        } finally {

        	if( null != in ) in.close();
        	if( null != cpuInfo ) cpuInfo.destroy();
		}

	    Map rtnMap = new HashMap();
		rtnMap.put("LOG_TXT", wmicOutput);

		List rtnList = new ArrayList();
		rtnList.add(rtnMap);

		rntInfo.setData(rtnList);
		rntInfo.setDatasetName("dsList");

		manager.response(response, rntInfo);
	}

	@ResponseBody
	@RequestMapping(value = "operationTest.do", method = RequestMethod.POST)
	public List<Object> operationTest(HttpServletRequest request, HttpServletResponse response, ModelMap model) throws TakeException{
		logger.info("Common operationTest");
		List rtnList = new ArrayList();

		ProcessBuilder pb = new ProcessBuilder("WMIC", "/OUTPUT:STDOUT", "CPU", "Get", "/Format:List");
        pb.redirectErrorStream(true);
        Process wmicProc;
        try {
            wmicProc = pb.start();
            wmicProc.getOutputStream().close();
        } catch (IOException | SecurityException e) {
            System.out.println("Failed to spawn WMIC process. Will not be able to provide physical core count.");
            return null;
        }
        waitFor(wmicProc);
        try (InputStream in = wmicProc.getInputStream()) {
            String wmicOutput = readToString(in, Charset.forName("US-ASCII"));
            System.out.println( "!@!@>> NumberOfCores:  " + parseWmicOutput(wmicOutput, "NumberOfCores") ); ;
        } catch (UnsupportedEncodingException e) {
            // Java implementations are required to support US-ASCII, so this can't happen
            throw new RuntimeException(e);
        } catch (SecurityException | IOException e) {
        	System.out.println("Error while reading WMIC output file");
            return null;
        }

		return rtnList;
	}


	private static String parseWmicOutput(String wmicOutput, String sCmd) {
        String[] rows = wmicOutput.split("\n");
        String rtnData = "";
        for (String row : rows) {
            if (row.startsWith(sCmd)) {
                String data = row.split("=")[1].trim();
                rtnData = data;
            }
        }
        return rtnData;
    }

	private static String readToString(InputStream in, Charset charset) throws IOException {
		StringWriter sw = new StringWriter();

		if (in != null) {
			try (InputStreamReader reader = new InputStreamReader(in, charset)) {
				char[] buf = new char[10000];
				while (reader.read(buf) != -1) {
					sw.write(buf);
				}
			}
		}

		return sw.toString();
    }

	private static List readToString2(InputStream in, Charset charset) throws IOException {
		List rtnList = new ArrayList();

		if (in != null) {
			try (BufferedReader reader = new BufferedReader(new InputStreamReader(in, charset))) {
				String line = reader.readLine();
				while (line != null) {
					line = line.replaceAll(" ", "");
					if (!"".equals(line)) {
						rtnList.add(line);
					}
					line = reader.readLine();
				}
			}
		}

		return rtnList;
    }

    private static int waitFor(Process proc) {
        try {
            return proc.waitFor();
        } catch (InterruptedException e) {
        	e.getMessage();
            return 1;
        }
    }

//	public String executeCommand( String command ) throws Exception
//    {
//		Connection connection = null;
//		Session session = null;
//		InputStream stdout = null;
//        try
//        {
//            // 세션 생성
//        	connection = new Connection( sshIp );
//            connection.connect();
//
//            // 인증
//            boolean result = connection.authenticateWithPassword( sshUserId, sshUserPw );
//
//            System.out.println( "연결 성공 여부 : " + result );
//
//            session = connection.openSession();
//
//            // command 실행
//            session.execCommand( command );
//
//            // 결과 확인
//            StringBuilder sb = new StringBuilder();
//            stdout = new StreamGobbler( session.getStdout() );
//            BufferedReader br = new BufferedReader(new InputStreamReader(stdout, "EUC-KR"));
//
//            String line = br.readLine();
//            while( line != null )
//            {
//                sb.append( line + "\n" );
//                line = br.readLine();
//            }
//
//            System.out.println("!@!@>> " + sb.toString());
//
//            // DEBUG : exit 코드 덤프
//            System.out.println( "ExitCode : " + session.getExitStatus() );
//
//            // 세션 종료
//            if(null != stdout) stdout.close();
//            if(null != session) session.close();
//            if(null != connection) connection.close();
//
//            // 호출자에게 결과를 반환
//            return sb.toString();
//        }
//        catch( Exception e )
//        {
//            if(null != session) session.close();
//            if(null != connection) connection.close();
//
//            try {
//            	if(null != stdout) stdout.close();
//			} catch (IOException e2) {
//				// TODO: handle exception
//
//			}
//
//            throw new Exception( "다음 명령을 실행하는 동안 예외가 발생하였습니다. : " + command + ". Exception = " + e.getMessage(), e );
//        }
//    }

    @RequestMapping(value = "userDashSave.do", method = RequestMethod.POST)
	public void userDashSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("SC viewWasLog");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map paramMap 	= manager.getParamMap();
		DataSetList dsList = manager.getDataSetList();
		//String sPageNo = manager.getString("sPageNo");

		cmService.dashSave(dsList, paramMap);

		manager.success(response);
	}

    @RequestMapping(value = "comm/userConfigUpdate.do", method = RequestMethod.POST)
	public void userConfigUpdate(HttpServletRequest request, HttpServletResponse response) throws TakeException{

    	NexacroServiceManager manager = new NexacroServiceManager();
    	manager.setRequest(request);

    	Map paramMap		= manager.getParamMap();

    	cmService.userConfigUpdate(paramMap);

    	manager.success(response);
	}

    @RequestMapping(value = "/sampleJsp.do", method = RequestMethod.GET)
    public String sampleJsp(Model model) {
    	model.addAttribute("msg", "test");
    	return "sample";
    }

    /**
	 * Query Namespace DB저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "mapperSave.do", produces = "text/html; charset=utf8")
	public void mapperSave(HttpServletRequest request, HttpServletResponse response) throws Exception{

		NexacroServiceManager manager = new NexacroServiceManager();
		try{
			manager.setRequest(request);

			cmService.mapperSave();

			manager.success(response);
		} catch(TakeException ex){
			logger.error(ex.getMessage());
		}
	}


	@RequestMapping(value = "outlookMailTest.do", produces = "text/html; charset=utf8")
	public void outlookMailTest(HttpServletRequest request, HttpServletResponse response) throws Exception{
		this.sendMailBatch();
	}


	/**
	 * 리포트메일 배치 JOB
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	public void sendMailBatch(){
		logger.info("!!Batch sendMailBatch START");

		NexacroServiceInfo rntInfo = new NexacroServiceInfo();
		NexacroServiceManager manager = new NexacroServiceManager();

		String sErrCd = "";
		String sErrMsg = "";

		try{
			String sSendId = "kjp3904@take-it.co.kr";//mailBatchSendUser;

			String sReceiveMail = sSendId;//TakeStringUtil.nvl(paramMap.get("USER_EMAIL"), "");

			String sSText = "";

			Properties prop = new Properties();
			prop.put("mail.smtp.host", "smtp.gmail.com");
			prop.put("mail.smtp.port", "465");
			prop.put("mail.smtp.auth"			, "true");
			prop.put("mail.smtp.ssl.enable"	, "true");
			prop.put("mail.smtp.ssl.trust"	, "smtp.gmail.com");

			Session session = Session.getDefaultInstance(prop, new javax.mail.Authenticator() {
				protected PasswordAuthentication getPasswordAuthentication() {
					return new PasswordAuthentication("takeeasybam@gmail.com", "easybam1!@");
				}
			});

//			javax.mail.Session session = javax.mail.Session.getInstance(prop);

			MimeMessage message = new MimeMessage(session);

			message.setFrom(new InternetAddress(sSendId));

	        //수신자메일주소
	        message.addRecipient(Message.RecipientType.TO, new InternetAddress(sReceiveMail));

	        // Subject
	        message.setSubject("[ITBPS] 일일 백업 리포트"); //메일 제목을 입력


	        // Text
	        StringBuilder sb = new StringBuilder();

	        sb.append("<div>                                                                                        ");
	        sb.append("<p style='font-size: 12px;'>해당 메일은 발신 전용 메일입니다.</p>										");
	        sb.append("<table style='height: 55px; width: 100%;'>																	");
	        sb.append("	<tr>											");
	        sb.append("	<td align='left'>											");
	        sb.append("	<h3>		                                                                        		");
	        sb.append("	<span>일일 백업 현황</span>																		");
	        sb.append("	<a href='http://itbps.skhynix.com/' target='_blank'><span style='font-size: 9pt;'>(itbps.skhynix.com)</span></a>");
	        sb.append("	</h3></td>		                                                                        		");

	        sb.append("	<td align='right'>														");
	        sb.append("	<img style='margin-left: 66%; width: 120px; height: 55px;' src='http://localhost:8080/UXBooster/images/logo/imgTakeLogin.png' />");
	        sb.append("	<img style='margin-left: 66%; width: 120px; height: 55px;' src='data:image/png;base64,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' />");
	        sb.append("	</td>");
	        sb.append("	</tr></table>");

	        sb.append("	<div style='text-align: right; padding-right:20px; font-size: 14px; font-weight: bold;'> ");
		    sb.append("		<p>기준시간: "+"2021-03-18"+" ~ "+"2021-03-19"+"</p>                             	");
		    sb.append("		<p>담당자 사번 : "+"X0115697"+"</p>                                                            	");
		    sb.append("	</div>                                                                                     	");

	        sb.append("	<table style='width: 100%; border-collapse: collapse; border-spacing: 0;'>                  ");
	        sb.append("		<thead>                                                                                 ");
	        sb.append("		<tr>                                                                                    ");
	        sb.append("			<td style='font-size:15px; font-weight: bold; background-color: #ebe9ed; width: 200px; height: 40px; text-align: center; border: 1.5px solid black;'>백업대상</td>                                                  	");
	        sb.append("			<td style='font-size:15px; font-weight: bold; background-color: #ebe9ed; width: 200px; height: 40px; text-align: center; border: 1.5px solid black;'>성공</td>                                                      	");
	        sb.append("			<td style='font-size:15px; font-weight: bold; background-color: #ebe9ed; width: 200px; height: 40px; text-align: center; border: 1.5px solid black;'>실패</td>                                                      	");
	        sb.append("			<td style='font-size:15px; font-weight: bold; background-color: #ebe9ed; width: 200px; height: 40px; text-align: center; border: 1.5px solid black;'>진행</td>                                                      	");
	        sb.append("		</tr>                                                                                   ");
	        sb.append("		<thead>                                                                                 ");
	        sb.append("		<tbody>                                                                                 ");
	        sb.append("		<tr>                                                                                    ");
	        sb.append("			<td style='background-color: #dee5ed; font-size:13px; width: 200px; height: 30px; text-align: center; border: 1.5px solid black; '>"+"102"+"</td> 	");
	        sb.append("			<td style='background-color: #dee5ed; font-size:13px; width: 200px; height: 30px; text-align: center; border: 1.5px solid black; '>"+"100"+"</td>    ");
	        sb.append("			<td style='background-color: #dee5ed; font-size:13px; width: 200px; height: 30px; text-align: center; border: 1.5px solid black; '>"+"1"+"</td>    ");
	        sb.append("			<td style='background-color: #dee5ed; font-size:13px; width: 200px; height: 30px; text-align: center; border: 1.5px solid black; '>"+"1"+"</td>   	");
	        sb.append("		</tr>                                                                                   ");
	        sb.append("		</tbody>                                                                                ");
	        sb.append("	</table>                                                                                    ");
	        sb.append("	<br/><br/>                                                                                  ");

	        sSText = sb.toString();

	        Multipart mp = new MimeMultipart();

	        MimeBodyPart content_MimeBodyPart = new MimeBodyPart();
	        content_MimeBodyPart.setContent(sSText, "text/html; charset=EUC-KR");

	        content_MimeBodyPart.setHeader("Content-Transfer-Encoding", "base64");

	        mp.addBodyPart(content_MimeBodyPart);

	        message.setContent(mp);

	        // send the message
	        Transport.send(message);

	        sErrCd = "0";
			sErrMsg = "SUCC";

		}catch(Exception ex){
			sErrCd = "99";
			sErrMsg = TakeStringUtil.nvl(ex.getCause(), "");
			logger.error(ex.getMessage());
		}
	}
}
