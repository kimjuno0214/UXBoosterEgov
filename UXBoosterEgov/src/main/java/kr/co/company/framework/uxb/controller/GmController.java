package kr.co.company.framework.uxb.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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

import kr.co.company.framework.uxb.service.GmService;
import kr.co.company.framework.uxb.service.UmService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.spring.service.TakeService;
import kr.co.takeit.util.TakeStringUtil;

@Controller
@RequestMapping("/gm/*")
public class GmController {

private static final Logger logger = LoggerFactory.getLogger(GmController.class);

	@Autowired
	private TakeService service;

	@Autowired
	private GmService gmService;

	/**
	 * 프로그램 관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "programInfoSave.do", method = RequestMethod.POST)
	public void programInfoSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("programInfoSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();
		
		gmService.programInfoSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로그램 컴포넌트관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "programComponentSave.do", method = RequestMethod.POST)
	public void programComponentSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("programComponentSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();
		
		gmService.programComponentSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로그램 메시지관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "programMessageSave.do", method = RequestMethod.POST)
	public void programMessageSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("programMessageSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();
		
		gmService.programMessageSave(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * 프로그램 관리 삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "programInfoDelete.do", method = RequestMethod.POST)
	public void programInfoDelete(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("programInfoDelete");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();
		
		gmService.programInfoDelete(dsList, manager.getParamMap());

		manager.success(response);
	}
	
	/**
	 * nonMenu 관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "nonMenuSave.do", method = RequestMethod.POST)
	public void nonMenuSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("nonMenuSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		gmService.nonMenuSave(dsList, manager.getParamMap());

		manager.success(response);
	}
}
