package kr.co.doore.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.java.xapi.data.DataSetList;

import kr.co.doore.service.DooreService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceManager;

@Controller
@RequestMapping("/doore/*")
public class DooreController {

	//private static final Logger logger = LoggerFactory.getLogger(DooreController.class);

	@Autowired
	private DooreService dooreService;

	/**
	 * parameter map을 사용한 단건 insert update delete 처리
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "saveByParam.do", method = RequestMethod.POST)
	public void saveByParam(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		dooreService.saveByParam(manager.getParamMap());
		
		manager.success(response);						
	}
	
	/**
	 * dataset을 사용한 insert update delete 처리
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "saveList.do", method = RequestMethod.POST)
	public void saveList(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		dooreService.saveList(dsList, manager.getParamMap());

		manager.success(response);
		
	}
	
	/**
	 * 조회
	 *
	 * @param request  HttpServletRequest 객체
	 * @param response HttpServletResponse 객체
	 *
	 
	@RequestMapping(value = "select.do")
	public void select(HttpServletRequest request, HttpServletResponse response) throws TakeException{ 
		
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		NexacroServiceInfo rntInfo = new NexacroServiceInfo();

		Map<String, String> paramMap = manager.getParamMap();
		
		List<LinkedHashMap<String, Object>> rtnList = dooreService.selectList("UserManagement.deptInfoList", paramMap);
		
		rntInfo.setData(rtnList3);
		
		
	}
	*/
}
