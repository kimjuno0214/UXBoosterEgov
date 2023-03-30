package kr.co.company.framework.uxb.controller;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.company.framework.uxb.service.MnService;
import kr.co.takeit.exception.TakeBizException;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.spring.service.TakeService;
import kr.co.takeit.util.TakeNexacroUtil;

@Controller
@RequestMapping("/mn/*")
public class MnController {

private static final Logger logger = LoggerFactory.getLogger(MnController.class);

	@Autowired
	private TakeService takeService;

	@Autowired
	private MnService mnService;

	/**
	 * 파일 업로드 경로
	 */
	@Value("#{application['file.upload.path']}")
	private String fileUploadPath;

	/**
	 * ID찾기 인증번호 받기
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "getAuth.do", method = RequestMethod.POST)
	public void idAuth(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Main idAuth");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		String sAuthType	= manager.getString("sAuthType");	// ID, PW
		String sUserId		= manager.getString("sUserId");		// ID찾기일 경우에는 이값은 넘기지 말것!
		String sUserNm 		= manager.getString("sUserNm");
		String sUserEmail	= manager.getString("sUserEmail");

		mnService.getAuth(sAuthType, sUserId, sUserNm, sUserEmail);
		manager.success(response);
	}

	/**
	 * 인증번호 확인
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "authConfirm.do", method = RequestMethod.POST)
	public void idAuthConfirm(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Main idAuthConfirm");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		// sAuthType, sUserId, sUserNm, sUserEmail, sAuthVal
		Map<String, String> paramMap = manager.getParamMap();
		List<LinkedHashMap<String, Object>> list = takeService.selectList("SystemCommon.authConfirm", paramMap);
		if( list == null || list.size() == 0 ) {
			throw new TakeBizException("인증번호를 확인해주시기 바랍니다.");
		}

		LinkedHashMap<String, Object> authInfo = list.get(0);
		NexacroServiceInfo rntInfo = new NexacroServiceInfo();
		rntInfo.setErrorCode(0);
		rntInfo.setErrorMsg((String)authInfo.get("USER_ID"));	// 성공시 사용자ID를 전송
		manager.response(response, rntInfo);
	}

	/**
	 * ID나 Email 중복 체크
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "dupCheck.do", method = RequestMethod.POST)
	public void dupCheck(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Main dupCheck");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		// ID Check일 경우 : sUserId를 Parameter로 넘김
		// Email Check일 경우: sUserEmail을 Parameter로 넘김
		String sResult = (String)takeService.selectObj("Main.dupCheck", manager.getParamMap());

		if( Integer.parseInt(sResult) > 0 ) {
			throw new TakeBizException("MS00000056", "이미 사용중입니다.");
		}

		manager.success(response);
	}

	/**
	 * 비밀번호 변경
     *  - userPwUpdate : 메인화면에서 비밀번호 찾기를 통한 변경
     *  - userPwChange : 로그인 후 비밀번호 변경
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = {"userPwUpdate.do", "userPwChange.do"}, method = RequestMethod.POST)
	public void passwordChange(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Main userPwUpdate");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		if(request.getServletPath().indexOf("userPwUpdate") > -1) {
			//비밀번호찾기
			mnService.resetPassword(manager.getParamMap());
		}else {
			//비밀번호변경
			DataSetList dsList = manager.getDataSetList();
			mnService.changePassword(dsList, manager.getParamMap());
		}

		manager.success(response);
	}

	/**
	 * 회원가입
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "userJoin.do", method = RequestMethod.POST)
	public void userJoin(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Main userJoin");

		NexacroServiceManager manager = new NexacroServiceManager();

		manager.setRequest(request);
		DataSet dsUserJoin = manager.getDataSet("dsUserJoin");

		Map map = TakeNexacroUtil.datasetToMap(dsUserJoin);
		map.put("USER_STATUS"	, "01");	// 사용자상태
		map.put("USE_YN"		, "Y");		// 사용여부
		map.put("AGREE_YN"		, "Y");		// 동의여부
		map.put("REG_TYPE"		, "JOIN");	// 등록자유형 (JOIN으로 넘기면 생성되는 코드로 업데이트 됨)

		int nResult = takeService.insert("UserManagement.userInfoInsert", map);
		if(nResult != 1) {
			throw new TakeBizException("오류가 발생하였습니다.");
		}
		manager.success(response);
	}

	/**
	 * 이용약관 조회
	 *
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@RequestMapping(value = "policy.do", method = RequestMethod.POST)
	public void policy(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Main policy");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		manager.response(response, new NexacroServiceInfo("dsPolicy", takeService.selectList("Main.policySelect", manager.getParamMap())));
	}

	/**
	 * 로그인 정책 조회
	 *
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@RequestMapping(value = "loginpolicy.do", method = RequestMethod.POST)
	public void loginpolicy(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("Main loginpolicy");

		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map paramMap = manager.getParamMap();
		paramMap.put("sGroupId", "00010");

		ArrayList<NexacroServiceInfo> list = new ArrayList<NexacroServiceInfo>();
		list.add(new NexacroServiceInfo("dsLoginPolicy", "SystemCommon.systemLoginPolicyDetail", paramMap));
		list.add(new NexacroServiceInfo("dsRegExp", "Main.codeSimpleSelect", paramMap));

		manager.response(response, takeService.multiSelect(list));
	}
	
	/**
	 * 유저 대시보드 메인화면 추가,수정,삭제
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 */
	@RequestMapping(value = "userDashConfigSave.do", method = RequestMethod.POST)
	public void userDashConfigSave(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("userDashConfigSave");
		
		NexacroServiceInfo rntInfo = null;
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		
		DataSetList dsList = manager.getDataSetList();

		rntInfo = mnService.userDashConfigSave(dsList, manager.getParamMap());

		manager.response(response, rntInfo);
	}
}