package kr.co.company.framework.common.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.util.TakeStringUtil;

@Service
public class LoginService {
	private static final Logger logger = LoggerFactory.getLogger(LoginService.class);

	@Autowired
	private TakeDAO dao;

	public NexacroServiceInfo login(Map paramMap) throws TakeException{
		NexacroServiceInfo result = null;

		String sUserCd		= null;
		String sUserId		= (String)paramMap.get("sUserId");
		String sUserPw		= (String)paramMap.get("sUserPw");
		String sLastLoginDt	= TakeStringUtil.format("yyyy-MM-dd HH:mm", new Date());
		String sLoginDevice	= (String)paramMap.get("sLoginDevice");
		String sLoginBrowser= (String)paramMap.get("sLoginBrowser");
		String sLoginIp		= (String)paramMap.get("sLoginIp");

		// 시스템ID 세팅
		paramMap.put("SYSTEM_ID", "S000000001");
		//2020.04.09 로그인정책 추가반영.
		List<LinkedHashMap<String, Object>> loginPolicyList = dao.select("SystemCommon.systemLoginPolicyDetail", paramMap);
		LinkedHashMap<String, Object> loginPolicyMap = null;

		if (!CollectionUtils.isEmpty(loginPolicyList)) {
			loginPolicyMap = loginPolicyList.get(0);
			if (!ObjectUtils.isEmpty(loginPolicyMap)) {
				int nMinLength		= Integer.parseInt( TakeStringUtil.nvl(loginPolicyMap.get("MIN_LENGTH"), "0") );	// 최소길이

				if( nMinLength > sUserPw.length() ) {		// 비밀번호 최소길이보다 작을경우
					result = new NexacroServiceInfo(-93, "비밀번호를 "+ nMinLength + "자 이상 작성해주세요.");
					return result;
				}

//				String sMIX_CD	= TakeStringUtil.nvl(loginPolicyMap.get("MIX_CD"), "");	// 문자형식
//				String pattern 	= "^(?=.*[a-zA-Z])(?=.*[0-9]).{1,30}$"; // 문자,숫자,길이제한
//				Boolean bPattern = Pattern.matches(pattern, sUserPw);
//				if(!sMIX_CD.equals("")) {
//					if(sMIX_CD.equals("01")) {
//						//System.out.println("========================");
//						//System.out.println("========================");
//						//System.out.println("sUserPw >> " + sUserPw);
//						//System.out.println("bPattern >> " + bPattern);
//						//System.out.println("========================");
//						//System.out.println("========================");
//						/*if(!bPattern){
//							result = new NexacroServiceInfo(-93, "비밀번호를 문자,숫자를 혼합해서 작성해주세요.");
//							return result;
//						}*/
//					}
//				}
			}
		}

		List<LinkedHashMap<String, Object>> userList = dao.select("Main.userLogin", paramMap);

		if( userList != null && userList.size() > 0 ) {	// �α��� ����
			LinkedHashMap<String, Object> userMap = userList.get(0);


			sUserCd	= (String)userMap.get("USER_CD");
			String sUserStatus		= (String)userMap.get("USER_STATUS");
			String sValidYn			= (String)userMap.get("VALID_YN");
			String sValidDtYn		= (String)userMap.get("VALID_DT_YN");
			String sProjectCd		= (String)userMap.get("PROJECT_CD");
			String sLoginFailCnt 	= TakeStringUtil.nvl(userMap.get("LOGIN_FAIL_CNT"), "0");
			String sPwChangeCnt		= TakeStringUtil.nvl(userMap.get("PW_CHANGE_CNT"), "0");

			if( "02".equals(sUserStatus) == false ) {
				result = new NexacroServiceInfo(-80, "사용자 승인이 이루어지지 않았습니다. 관리자에게 문의하세요.");//사용자 승인이 이루어지지 않았습니다. 관리자에게 문의하세요.
			}else if( "Y".equals(sValidYn) && "N".equals(sValidDtYn) ) {
				result = new NexacroServiceInfo(-80, "사용기간이 만료되었습니다.관리자에게 문의하세요.");
			}else {
				// 시스템ID 세팅
				//paramMap.put("SYSTEM_ID", "S000000001");
				//List<LinkedHashMap<String, String>> loginPolicyList = dao.select("SystemCommon.systemLoginPolicyDetail", paramMap);
				//LinkedHashMap loginPolicyMap = loginPolicyList.get(0);

				if(!ObjectUtils.isEmpty(loginPolicyMap) ) {
					int nErrorCnt		= Integer.parseInt( TakeStringUtil.nvl(loginPolicyMap.get("ERROR_CNT"), "0") );	// 오류 입력수MIX_CD
					int nCheckCnt		= Integer.parseInt( TakeStringUtil.nvl(loginPolicyMap.get("CHECK_CNT"), "0") );	// 비밀번호 체크일 수

					logger.debug("# nCheckCnt="+ nCheckCnt);
					logger.debug("# sPwChangeCnt="+ Integer.parseInt(sPwChangeCnt));

					if( nErrorCnt < Integer.parseInt(sLoginFailCnt) ) {		// 오류 입력수를 넘은 경우
						result = new NexacroServiceInfo(-90, "비밀번호 입력 오류수를 초과하였습니다.");
					}else if( nCheckCnt!= 0 && nCheckCnt < Integer.parseInt(sPwChangeCnt) ) {	// 비밀번호 체크일 수를 넘은 경우
						result = new NexacroServiceInfo(-91, "비밀번호 변경일수를 초과하였습니다.");
					}else if( sProjectCd == null || sProjectCd.trim().length() == 0  ) {	// 메인현장이 없을 경우
						result = new NexacroServiceInfo(-92, "지정된 메인현장이 없습니다.");
					}
				}
				
				// 사용자정보 Update
				Map userUpdateMap = new HashMap();
				userUpdateMap.put("LAST_LOGIN_DT"	, sLastLoginDt);
				userUpdateMap.put("LOGIN_DEVICE"	, sLoginDevice);
				userUpdateMap.put("LOGIN_BROWSER"	, sLoginBrowser);
				userUpdateMap.put("LOGIN_IP"		, sLoginIp);
				userUpdateMap.put("USER_CD"			, sUserCd);

				dao.update("Main.loginSuccessUpdate", userUpdateMap);

				// 사용자 추가정보
				result = new NexacroServiceInfo(0, "SUCC");
				List<LinkedHashMap<String, Object>> returnList = new ArrayList<LinkedHashMap<String,Object>>();
				userMap.put("LAST_LOGIN_DT"	, sLastLoginDt);
				userMap.put("LOGIN_DEVICE"	, sLoginDevice);
				userMap.put("LOGIN_BROWSER"	, sLoginBrowser);
				userMap.put("LOGIN_IP"		, sLoginIp);
				returnList.add(userMap);

				result.setDatasetName("gdsUserInfo");
				result.setData(returnList);
			}
		}else {	// 로그인 실패
			// 오류 체크일 수 update
			Map userUpdateMap = new HashMap();
			userUpdateMap.put("USER_ID", sUserId);

			dao.update("Main.loginFailUpdate", userUpdateMap);

			result = new NexacroServiceInfo(-99, "로그인 정보를 다시 확인하시기 바랍니다."); //로그인 정보를 다시 확인하시기 바랍니다.
		}

		return result;
	}
}