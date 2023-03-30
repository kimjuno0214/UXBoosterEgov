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

import kr.co.company.framework.uxb.service.UmService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.spring.service.TakeService;
import kr.co.takeit.util.TakeStringUtil;

@Controller
@RequestMapping("/um/*")
public class UmController {

private static final Logger logger = LoggerFactory.getLogger(UmController.class);

	@Autowired
	private TakeService service;

	@Autowired
	private UmService umService;

	/**
	 * 부서관리 엑셀업로드 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "deptDelSave.do", method = RequestMethod.POST)
	public void deptDelSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("User deptDelSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		umService.deptDelSave(dsList, manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 사용자관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "userSave.do", method = RequestMethod.POST)
	public void userSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("User userSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		NexacroServiceInfo rntInfo = umService.userInfoSave(dsList, manager.getParamMap());
		manager.response(response, rntInfo);
	}

	/**
	 * 사용자관리 삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "userDelete.do", method = RequestMethod.POST)
	public void userDelete(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("User userDelete");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();
		
		umService.userInfoDelete(dsList, manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 부서관리 deptSelect
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "deptSelect.do", method = RequestMethod.POST)
	public void deptSelect(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("User deptSelect");

		NexacroServiceInfo rntInfo = new NexacroServiceInfo();
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		List<HashMap> rtnList2 = new ArrayList<HashMap>();
		List<HashMap> rtnList3 = new ArrayList<HashMap>();
		Map paramMap = manager.getParamMap();
		String sDeptCd = TakeStringUtil.nvl(paramMap.get("DEPT_CD"), "");
		String sDeptNm = TakeStringUtil.nvl(paramMap.get("DEPT_NM"), "");
		List<LinkedHashMap<String, Object>> rtnList = service.selectList("UserManagement.deptInfoList", paramMap);

		if( ( !sDeptCd.equals("") || !sDeptNm.equals("") ) && rtnList != null ){
			for( int j=0; j<rtnList.size(); j++ ){
				paramMap.remove("DEPT_NM");
				rtnList2.add(rtnList.get(j));
				String sDeptOrder = (String)rtnList.get(j).get("DEPT_ORDER");
				String[] arrDeptOrder = sDeptOrder.split("\\.");
				String sParentDept = (String)rtnList.get(j).get("PARENT_DEPT");
				String sSubParentDept = sParentDept;
				for( int i=0; i<arrDeptOrder.length-1; i++ ){
					if( !sSubParentDept.equals("0") ) {
						paramMap.put("DEPT_CD", sSubParentDept);
						List<LinkedHashMap<String, Object>> rtnSubList = service.selectList("UserManagement.deptInfoList", paramMap);
						sSubParentDept = (String)rtnSubList.get(0).get("PARENT_DEPT");
						rtnList2.add(rtnSubList.get(0));
					}
				}
			}

			for( int k=0; k<rtnList2.size(); k++ ){
				if(!rtnList3.contains(rtnList2.get(k))){
					rtnList3.add(rtnList2.get(k));
				}
			}

			rntInfo.setData(rtnList3);
		}
		else {
			rntInfo.setData(rtnList);
		}

		rntInfo.setDatasetName("dsDeptList");
		manager.response(response, rntInfo);
	}
	
	/**
	 * 부서관리 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "deptInfoSave.do", method = RequestMethod.POST)
	public void deptInfoSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Dept deptSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		umService.deptInfoSave(dsList, manager.getParamMap());
		manager.success(response);
	}
}
