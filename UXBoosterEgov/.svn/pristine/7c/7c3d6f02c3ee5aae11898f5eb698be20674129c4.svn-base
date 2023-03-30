package kr.co.company.framework.uxb.controller;

import java.util.ArrayList;
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

import kr.co.company.framework.uxb.service.CmService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.spring.service.TakeService;

@Controller
@RequestMapping("/cm/*")
public class CmController {

private static final Logger logger = LoggerFactory.getLogger(CmController.class);
 
	@Autowired
	private CmService cmService;

	@Autowired
	TakeService takeService;

	/**
	 * 게시판 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "boardSave.do", method = RequestMethod.POST)
	public void boardSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Cm boardSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		cmService.boardInfoSave(manager.getParamMap(), dsList);

		manager.success(response);
	}

	/**
	 * 게시판 삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "boardDelete.do", method = RequestMethod.POST)
	public void boardDelete(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Cm boardDelete");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		cmService.boardInfoDelete(request, manager.getParamMap());

		manager.success(response);
	}

	/**
	 * 게시판 상세
	 *
	 * @param request  HttpServletRequest 객체
	 * @param response HttpServletResponse 객체
	 *
	 */
	@RequestMapping(value = "boardSelect.do")
	public void noticeListDetail(HttpServletRequest request, HttpServletResponse response) throws TakeException{
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map<String, String> paramMap = manager.getParamMap();

		ArrayList<NexacroServiceInfo> list = new ArrayList<NexacroServiceInfo>();
		list.add( new NexacroServiceInfo("dsNotice", "BoardManagement.boardInfoDetail", paramMap) );
		list.add( new NexacroServiceInfo("dsFile", "SystemCommon.fileInfoList", paramMap) );
		list.add( new NexacroServiceInfo("dsReply", "BoardManagement.boardReplyList", paramMap) );

		//게시판 조회 수 증가
		cmService.readUser(paramMap);

		manager.response(response, takeService.multiSelect(list));
	}
	
	/**
	 * 댓글 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "replySave.do", method = RequestMethod.POST)
	public void replySave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Reply replySave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		cmService.replySave(dsList, manager.getParamMap());
		manager.success(response);
	}
	
	/**
	 * 메모 저장
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "memoSave.do", method = RequestMethod.POST)
	public void memoSave(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Memo memoSave");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		DataSetList dsList = manager.getDataSetList();

		cmService.memoSave(dsList, manager.getParamMap());
		manager.success(response);
	}
}
