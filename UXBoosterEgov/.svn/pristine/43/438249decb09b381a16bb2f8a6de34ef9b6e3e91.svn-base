package kr.co.company.framework.uxb.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.company.framework.uxb.service.PmService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.spring.service.TakeService;

@Controller
@RequestMapping("/pm/*")
public class PmController {

	private static final Logger logger = LoggerFactory.getLogger(PmController.class);

	@Autowired
	private TakeService service;

	@Autowired
	private PmService pmService;

	/**
	 * 프로젝트 정보 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectSave.do", method = RequestMethod.POST)
	public void projectSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Project projectSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		pmService.projectInfoSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로젝트 정보 삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectInfoDelete.do", method = RequestMethod.POST)
	public void projectInfoDelete(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectInfoDelete");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		pmService.projectInfoDelete(dsList, manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 프로젝트 메뉴 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectMenuSave.do", method = RequestMethod.POST)
	public void projectMenuSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Project projectMenuSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		pmService.projectMenuInfoSave(dsList, manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 프로젝트 메뉴 삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectMenuDelete.do", method = RequestMethod.POST)
	public void projectMenuDelete(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectMenuDelete");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		pmService.projectMenuDelete(dsList, manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 프로젝트 사용자 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectUserSave.do", method = RequestMethod.POST)
	public void projectUserSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectUserSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		pmService.projectUserSave(dsList, manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 프로젝트 메뉴아이콘 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectMenuIconUpdate.do", method = RequestMethod.POST)
	public void projectMenuIconUpdate(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectMenuIconUpdate");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		service.update("ProjectManagement.projectMenuIconUpdate", manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 프로젝트 권한 삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectRoleAllDelete.do", method = RequestMethod.POST)
	public void projectRoleAllDelete(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectRoleDelete");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		pmService.projectRoleAllDelete(manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 프로젝트 사용자 권한 저장
	 * 9999건이 오버될 경우엔 문제가 발생할 수 있음
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectUserRoleSave.do", method = RequestMethod.POST)
	public void projectUserRoleSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectUserRoleSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		pmService.projectUserRoleSave(dsList, manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 대시보드 관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "dashInfoSave.do", method = RequestMethod.POST)
	public void dashInfoSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("dashInfoSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		pmService.dashInfoSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로젝트 권한 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectRoleListSave.do", method = RequestMethod.POST)
	public void projectRoleListSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Project projectRoleListSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();
		
		pmService.projectRoleListSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로젝트 권한 저장(메뉴)
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectRoleMenuSave.do", method = RequestMethod.POST)
	public void projectRoleMenuSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Project projectRoleMenuSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();
		
		pmService.projectRoleMenuSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로젝트 사용자(다중권한) 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectUserMultiSave.do", method = RequestMethod.POST)
	public void projectUserMultiSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectUserMultiSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		pmService.projectUserMultiSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로젝트 양식관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectTemplateSave.do", method = RequestMethod.POST)
	public void projectTemplateSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectTemplateSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();
		
		pmService.projectTemplateSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로젝트 휴일관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectHolidaySave.do", method = RequestMethod.POST)
	public void projectHolidaySave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("projectHolidaySave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();
		
		pmService.projectHolidaySave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로젝트 메뉴 기능버튼 사용자 추가,수정,삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "projectMenuButtonSave.do", method = RequestMethod.POST)
	public void userDashConfigSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("projectMenuButtonSave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = pmService.projectMenuButtonSave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
}
