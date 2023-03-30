package kr.co.company.framework.common.controller;

import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Row;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.company.framework.common.service.SampleService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.spring.service.TakeService;
import kr.co.takeit.util.ExcelUtil;
import kr.co.takeit.util.SessionManager;
import kr.co.takeit.util.TakeStringUtil;

/**
 *
 * 샘플용
 *
 */
@Controller
@RequestMapping("/sample/*")
public class SampleController {

	private static final Logger logger = LoggerFactory.getLogger(SampleController.class);
	
	@Autowired
	private SessionManager sessionMgr;

	@Autowired
	private TakeService takeService;

	@Autowired
	private SampleService sampleService;
	
	//@Value("#{application['prop.key']}")
	//private String propKey;

	/**
	 * 엑셀 다운로드
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping("createExcel.do")
	public void createExcel(HttpServletRequest request, HttpServletResponse response) throws Exception {
		//데이터조회
		Map paramMap = new HashMap();
		for (String name : Collections.<String>list(request.getParameterNames())) {
		    paramMap.put(name, request.getParameter(name));
		}

		List<LinkedHashMap<String, Object>> list = takeService.selectList("Sample.sampleTableSelect", paramMap);

		//WORKBOOK 생성
		logger.debug("엑셀시작 ----" + System.currentTimeMillis());

		int nRow = 0;
		ExcelUtil excel = new ExcelUtil("샘플예제시트제목");

		//제목
		Row titleRow = excel.createRow(nRow++, 30f);
		excel.appendCell(titleRow, "header_title_c", "제목 : 샘플예제");
		excel.setColumnWidth(0, 10);
		excel.setMerge(0, 0, 0, 10);

		//빈줄
		excel.createRow(nRow++);

		//헤더
		Row headerRow = excel.createRow(nRow++, 23f);
		excel.appendCell(headerRow, "header", "순번"			, 10);
		excel.appendCell(headerRow, "header", "제목"			, 60);
		excel.appendCell(headerRow, "header", "내용"			, 60);
		excel.appendCell(headerRow, "header", "구분"			, 20);
		excel.appendCell(headerRow, "header", "등록자"			, 20);
		excel.appendCell(headerRow, "header", "등록일자"		, 40);
		excel.appendCell(headerRow, "header", "수정자"			, 20);
		excel.appendCell(headerRow, "header", "수정일자"		, 40);

		//바디
		for(LinkedHashMap<String, Object> info : list) {
			Row bodyRow = excel.createRow(nRow++, 19f);

			excel.appendCell(bodyRow, "header"				, TakeStringUtil.nvl(info.get("SEQ"))		);
			excel.appendCell(bodyRow, "cell_normal_centered", TakeStringUtil.nvl(info.get("TITLE"))		);
			excel.appendCell(bodyRow, "cell_normal_centered", TakeStringUtil.nvl(info.get("CONTENTS"))	);
			excel.appendCell(bodyRow, "cell_normal"			, TakeStringUtil.nvl(info.get("TYPE"))		);
			excel.appendCell(bodyRow, "cell_normal"			, TakeStringUtil.nvl(info.get("REG_CD"))	);
			excel.appendCell(bodyRow, "cell_normal_date"	, (Date)info.get("REG_DT")	);
			excel.appendCell(bodyRow, "cell_normal"			, TakeStringUtil.nvl(info.get("MOD_CD"))	);
			excel.appendCell(bodyRow, "cell_normal_date"	, (Date)info.get("MOD_DT")	);

			excel.appendRow(bodyRow);
		}
		logger.debug("엑셀종료 ----" + System.currentTimeMillis());

        //다운로드
		excel.download(response, request.getParameter("filename"));
	}

	@RequestMapping( "csv.do" )
	public ResponseEntity<String> csv(HttpServletRequest request, HttpServletResponse response) throws Exception {
		Map paramMap = new HashMap();
		for (String name : Collections.<String>list(request.getParameterNames())) {
			paramMap.put(name, request.getParameter(name));
		}

		List<LinkedHashMap<String, Object>> list = takeService.selectList(TakeStringUtil.nvl(paramMap.get("namespace")), paramMap);

		boolean isHeader = true;
		StringBuffer headerSb = new StringBuffer();
		headerSb.append("\uFEFF");	//UTF-8 처리

		StringBuffer sb = new StringBuffer();
		for(LinkedHashMap<String, Object> info : list) {

			for( String key : info.keySet() ){
				if(isHeader) {
					headerSb.append(key + ",");
				}
				sb.append(info.get(key) + ",");
			}

			sb.append("\r\n");

			if(isHeader) {
				sb.insert(0, headerSb.toString() + "\r\n");
				isHeader = false;
			}
		}

		HttpHeaders header = new HttpHeaders();
		header.add("Content-Type", "text/csv; charset=UTF-8");
		//header.setContentDispositionFormData("attachment", TakeStringUtil.nvl(paramMap.get("filename")), StandardCharsets.UTF_8);
		header.setContentDispositionFormData("attachment", URLEncoder.encode(TakeStringUtil.nvl(paramMap.get("filename")), "UTF-8").replaceAll("\\+", "%20"));
		return new ResponseEntity<String>(sb.toString(), header, HttpStatus.CREATED);
	}

	/**
	 * 엑셀 데이터 수신
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping("saveExcel.do")
	public void saveExcel(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map paramMap = manager.getParamMap();

		DataSet dsExcel = manager.getDataSet("dsExcelDataImport");

		NexacroServiceInfo rtnInfo = sampleService.saveExcel(dsExcel, paramMap);
		manager.response(response, rtnInfo);
	}


	/**
	 * 엑셀 데이터 수신
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping("testApi.do")
	public void testApi(HttpServletRequest request, HttpServletResponse response) throws TakeException {

		try {
			System.out.println("testApi.do Start ========");

			String ssv = request.getParameter("ssv");
			System.out.println("ssv ===> " + ssv);

			java.net.URL url = new java.net.URL("http://localhost:8080/UXBooster/codeSelect.do"); // 호출할 url
			java.net.HttpURLConnection con = (java.net.HttpURLConnection)url.openConnection();

			con.setDoOutput(true); 				// xml내용을 전달하기 위해서 출력 스트림을 사용
			con.setInstanceFollowRedirects(false);  //Redirect처리 하지 않음
			con.setRequestMethod("POST");
			con.setRequestProperty("Content-Type", "text/xml");

			java.io.OutputStream os= con.getOutputStream();
			os.write(ssv.getBytes());
			os.flush();
			System.out.println("Location: " + con.getHeaderField("Location"));

			java.io.BufferedReader br = new java.io.BufferedReader(new java.io.InputStreamReader((con.getInputStream())));

			String output;
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				System.out.println(output);
			}
			con.disconnect();
		}catch(Exception ex) {
			ex.printStackTrace();
		}
	}

	/**
	 * 샘플Form01 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "smpForm01Save.do", method = RequestMethod.POST)
	public void smpForm01Save(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("smpForm01 smpForm01Save");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		sampleService.smpForm01Save(dsList, manager.getParamMap());
		manager.success(response);
	}

	/**
	 * 샘플Form02 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "smpForm02Save.do", method = RequestMethod.POST)
	public void smpForm02Save(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("smpForm02 smpForm02Save");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		sampleService.smpForm02Save(dsList, manager.getParamMap());
		manager.success(response);
	}

	/**
	 * 샘플Form03 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "smpForm03Save.do", method = RequestMethod.POST)
	public void smpForm03Save(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("smpForm03 smpForm03Save");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		sampleService.smpForm03Save(dsList, manager.getParamMap());
		manager.success(response);
	}

	/**
	 * 샘플Form04 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "smpForm04Save.do", method = RequestMethod.POST)
	public void smpForm04Save(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("smpForm04 smpForm04Save");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		sampleService.smpForm04Save(dsList, manager.getParamMap());
		manager.success(response);
	}

	/**
	 * 샘플Form05 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "smpForm05Save.do", method = RequestMethod.POST)
	public void smpForm05Save(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("smpForm05 smpForm05Save");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		sampleService.smpForm05Save(dsList, manager.getParamMap());
		manager.success(response);
	}

	/**
	 * 샘플Form06 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "smpForm06Save.do", method = RequestMethod.POST)
	public void smpForm06Save(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("smpForm06 smpForm06Save");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		sampleService.smpForm06Save(dsList, manager.getParamMap());
		manager.success(response);
	}

	/**
	 * 샘플Form07 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "smpForm07Save.do", method = RequestMethod.POST)
	public void smpForm07Save(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("smpForm07 smpForm07Save");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		sampleService.smpForm07Save(dsList, manager.getParamMap());
		manager.success(response);
	}

	/**
	 * 멀티데이터소스 조회
	 *
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@RequestMapping("selectMultiDs.do")
	public void selectMultiDs(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		ArrayList<NexacroServiceInfo> rtnList = sampleService.selectMultiDs(manager.getParamMap());
		manager.response(response, rtnList);
	}

	/**
	 * 멀티데이터소스 저장
	 *
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@RequestMapping("saveMultiDs.do")
	public void saveMultiDs(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		sampleService.saveMultiDs(manager.getDataSetList());

		manager.success(response);
	}

	/**
	 * 멀티데이터소스 저장 오류
	 *
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@RequestMapping("saveMultiDsError.do")
	public void saveMultiDsError(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		sampleService.saveMultiDsError(manager.getDataSetList());
	}
	
	/**
	 * 샘플01 - List로 반환시
	 * 
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@RequestMapping("sample01.do")
	public void sample01(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		// manager를 통한 nexacro Request 값을 가져옴
		DataSetList datasetList = manager.getDataSetList();
		DataSet dsList			= manager.getDataSet("dsList");
		Map paramMap			= manager.getParamMap();
		String sParam			= manager.getString("sParam");
		
		// Session 정보 세팅
		Map userInfo			= sessionMgr.getUserInfo(request);
		String sUserCd1			= (String)userInfo.get("USER_CD");
		String sUserCd2			= sessionMgr.getUserCd(request);
		
		// Property값 세팅
		//String sPropertyVal		= propKey;

		ArrayList<NexacroServiceInfo> rtnList = sampleService.sample01(paramMap);
		
		manager.response(response, rtnList);
	}
	
	/**
	 * 샘플02 - 입력/수정/삭제시
	 * 
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@RequestMapping("sample02.do")
	public void sample02(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		// manager를 통한 nexacro Request 값을 가져옴
		DataSetList datasetList = manager.getDataSetList();
		DataSet dsList			= manager.getDataSet("dsList");
		Map paramMap			= manager.getParamMap();
		String sParam			= manager.getString("sParam");
		
		// Session 정보 세팅
		Map userInfo			= sessionMgr.getUserInfo(request);
		String sUserCd1			= (String)userInfo.get("USER_CD");
		String sUserCd2			= sessionMgr.getUserCd(request);
		
		// Property값 세팅
		//String sPropertyVal		= propKey;

		sampleService.sample02(datasetList, paramMap);
		
		manager.success(response);
	}
	
	/**
	 * 페이징 샘플
	 * 
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@RequestMapping("pageTestSelect.do")
	public void pageTestSelect(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		Map paramMap			= manager.getParamMap();

		ArrayList<NexacroServiceInfo> rtnList = sampleService.pageTestSelect(paramMap);
		
		manager.response(response, rtnList);
	}
}
