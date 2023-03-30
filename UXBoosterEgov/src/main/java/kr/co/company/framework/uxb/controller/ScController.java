package kr.co.company.framework.uxb.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.company.framework.uxb.service.ScService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;

@Controller
@RequestMapping("/sc/*")
public class ScController {

private static final Logger logger = LoggerFactory.getLogger(ScController.class);

	@Autowired
	private ScService scService;

	/**
	 * 시스템 이미지 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 * @throws TakeException
	 */
	@RequestMapping(value = "sysImageSave.do", method = RequestMethod.POST)
	public void boardSave2(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sc sysImageSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		scService.sysImageSave(request);
		manager.success(response);
	}

	/**
	 * 데모 사용자 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "demoUserCreate.do", method = RequestMethod.POST)
	public void projectUserSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("demoUserCreate");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();
		
		scService.demoUserCreate(dsList, manager.getParamMap());

		manager.success(response);
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
	 * 시스템관리 기본정보 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "systemInfoMainSave.do", method = RequestMethod.POST)
	public void systemInfoMainSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sm systemInfoMainSave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = scService.systemInfoMainSave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
	
	/**
	 * 시스템관리 배포이력 추가,수정,삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "systemDeploySave.do", method = RequestMethod.POST)
	public void systemDeploySave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sm systemDeploySave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = scService.systemDeploySave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
	
	/**
	 * 시스템관리 이용약관 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "systemInfoPolicySave.do", method = RequestMethod.POST)
	public void systemInfoPolicySave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sm systemInfoPolicySave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = scService.systemInfoPolicySave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
	
	/**
	 * 시스템관리 로그인정책 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "systemLoginPolicySave.do", method = RequestMethod.POST)
	public void systemLoginPolicySave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sm systemLoginPolicySave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = scService.systemLoginPolicySave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
	
	/**
	 * 시스템관리 공통버튼 관리
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "systemInfoButtonSave.do", method = RequestMethod.POST)
	public void systemInfoButtonSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sm systemInfoButtonSave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = scService.systemInfoButtonSave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
	
	/**
	 * 다국어 목록 추가,수정,삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "multilanguageInfoSave.do", method = RequestMethod.POST)
	public void multilanguageInfoSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sm multilanguageInfoSave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = scService.multilanguageInfoSave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
	
	/**
	 * 다국어 정보 추가,수정
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "multilanguageDetailSave.do", method = RequestMethod.POST)
	public void multilanguageDetailSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sm multilanguageDetailSave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = scService.multilanguageDetailSave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
	
	/**
	 * 코드정보 추가,수정,삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "codeInfoSave.do", method = RequestMethod.POST)
	public void codeInfoSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("Sm codeInfoSave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = scService.codeInfoSave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
	
	/**
	 * 파일상세정보 추가,수정,삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "attachInfoFileSave.do", method = RequestMethod.POST)
	public void attachInfoFileSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("sc attachInfoFileSave");
		
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		scService.attachInfoFileSave(dsList, manager.getParamMap());

		manager.success(response);
	}
}
