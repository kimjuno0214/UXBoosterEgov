package kr.co.company.framework.uxb.service;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.company.framework.common.service.CommonService;
import kr.co.takeit.exception.TakeBizException;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.util.TakeNexacroUtil;
import kr.co.takeit.util.TakeStringUtil;

@Service
public class MnService {

	@Autowired
	private TakeDAO takeDao;

	@Autowired
	private CommonService commonService;

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void getAuth(String sAuthType, String sUserId, String sUserNm, String sUserEmail) {
		// 이름과 이메일로 Select
		Map<String, String> searchMap = new HashMap<String, String>();
		searchMap.put("USE_YN"		, "Y");
		searchMap.put("sUserId"		, sUserId);
		searchMap.put("sUserNm"		, sUserNm);
		searchMap.put("sUserEmail"	, sUserEmail);
		List<LinkedHashMap<String, Object>> list = takeDao.select("UserManagement.userInfoList", searchMap);


		Map<String, String> authMap = new HashMap<String, String>();
		authMap.put("AUTH_TYPE"		, sAuthType);
		authMap.put("USER_NM"		, sUserNm);
		authMap.put("USER_EMAIL"	, sUserEmail);

		if( "PW".equals(sAuthType)) {
			authMap.put("USER_ID"		, sUserId);
		}

		if( list != null && list.size() > 0 ) {
			LinkedHashMap<String, Object> userInfo = list.get(0);
			// Random 문자 생성
			String authKey = TakeStringUtil.makeRnd2();

			authMap.put("USER_CD"		, (String)userInfo.get("USER_CD"));
			authMap.put("USER_ID"		, (String)userInfo.get("USER_ID"));
			authMap.put("AUTH_VAL"		, authKey);
			authMap.put("AUTH_RESULT"	, "SUCC");

			// 이메일 전송
			Map<String, String> emailInfo = new HashMap<String, String>();
			emailInfo.put("TO"		, sUserEmail);

			if( "ID".equals(sAuthType)) {
				emailInfo.put("SUBJECT"	, "[Take] ID찾기에 대한 인증코드입니다.");
				emailInfo.put("TEXT"	, "ID찾기에 대한 인증코드입니다.<br /> - 인증코드: " + authKey);
			}else {
				emailInfo.put("SUBJECT"	, "[Take] 비밀번호 변경에 대한 인증코드입니다.");
				emailInfo.put("TEXT"	, "비밀번호 변경에 대한 인증코드입니다.<br /> - 인증코드: " + authKey);
			}
			commonService.sendEmail(emailInfo);

			// DB저장
			takeDao.insert("SystemCommon.authHistoryInsert", authMap);
		}else {
			/*
			// 해당 사용자가 없음
			authMap.put("USER_CD"		, "");
			authMap.put("USER_ID"		, ("PW".equals(sAuthType)?sUserId:""));
			authMap.put("AUTH_VAL"		, "");
			authMap.put("AUTH_RESULT"	, "ERR:사용자정보가 존재하지 않습니다.");

			// DB저장
			takeDao.insert("SystemCommon.authHistoryInsert", authMap);
			*/
			throw new TakeBizException("MS00000057", "사용자정보가 존재하지 않습니다.\\n다시 시도해 주세요.");
		}
	}

	/**
	 * 비밀번호변경
	 *  - 로그인 전 비밀번호 찾기
	 * @param paramMap
	 */
	@SuppressWarnings("unchecked")
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void resetPassword(Map paramMap){
		//최근사용한 비번 사용불가처리
		paramMap.put("SYSTEM_ID", "S000000001");

		List<LinkedHashMap<String, Object>> loginPolicyList = takeDao.select("SystemCommon.systemLoginPolicyDetail", paramMap);

		if (!CollectionUtils.isEmpty(loginPolicyList)) {
			LinkedHashMap<String, Object> loginPolicyMap = loginPolicyList.get(0);
			if (!ObjectUtils.isEmpty(loginPolicyMap)) {
				String recentUseYn = TakeStringUtil.nvl(loginPolicyMap.get("RECENT_USE_YN"), "N");
				if (recentUseYn.equals("Y")) {
					String userPw = TakeStringUtil.nvl(takeDao.selectObj("Main.userPwRecentUse", paramMap));
					if (userPw.equals(paramMap.get("sUserPw"))) {
						throw new TakeBizException("ML00000048", "최근에 사용한 비밀번호는 사용할 수 없습니다.");
					}
				}
			}
		}

		int nResult = takeDao.update("Main.userPwUpdate", paramMap);
		if(nResult != 1) {
			throw new TakeBizException("에러가 발생하였습니다");
		}
	}

	/**
	 * 비밀번호변경
	 *  - 로그인 후 비밀번호 변경
	 * @param paramMap
	 */
	@SuppressWarnings("unchecked")
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void changePassword(DataSetList dataSets, Map paramMap) {
		DataSet dsUserInfo = dataSets.get("dsUserInfo");
		
		Map userInfo = TakeNexacroUtil.datasetToMap(dsUserInfo, 0, paramMap);

		//화면에서 입력한 비밀번호와 현재비밀번호 비교
		String userPwOld = TakeStringUtil.nvl(userInfo.get("USER_PW_OLD"));
		String userPw = TakeStringUtil.nvl(takeDao.selectObj("Main.userPwRecentUse", userInfo));
		if (!userPw.equals(userPwOld)) {
			throw new TakeBizException("기존비밀번호가 일치하지 않습니다.");
		}

		//최근사용한 비번 사용불가처리
		paramMap.put("SYSTEM_ID", "S000000001");
		List<LinkedHashMap<String, Object>> loginPolicyList = takeDao.select("SystemCommon.systemLoginPolicyDetail", paramMap);

		if (!CollectionUtils.isEmpty(loginPolicyList)) {
			LinkedHashMap<String, Object> loginPolicyMap = loginPolicyList.get(0);
			if (!ObjectUtils.isEmpty(loginPolicyMap)) {
				String recentUseYn = TakeStringUtil.nvl(loginPolicyMap.get("RECENT_USE_YN"), "N");
				if (recentUseYn.equals("Y")) {
					if (userPw.equals(userInfo.get("USER_PW"))) {
						throw new TakeBizException("ML00000048", "최근에 사용한 비밀번호는 사용할 수 없습니다.");
					}
				}
			}
		}

		int nResult = takeDao.update("Main.userPwChange", userInfo);
		if (nResult != 1) {
			throw new TakeBizException("에러가 발생하였습니다");
		}
	}
	
	/**
	 * 유저 대시보드 메인화면 추가,수정,삭제
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo userDashConfigSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsDash = dataSets.get("dsDash");
		
		if( dsDash != null ){
			for( int i=0; i<dsDash.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsDash, i, paramMap);
				data.putAll(paramMap);
				if (dsDash.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					
					takeDao.insert("Main.userDashConfigInsert", data);
					
				} else if (dsDash.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					
					takeDao.update("Main.userDashConfigUpdate", data);
					
				} else if (dsDash.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					
					takeDao.delete("Main.userDashConfigDelete", data);
					
				}
			}
			
			for( int i=0; i<dsDash.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsDash, i, paramMap);
				data.putAll(paramMap);
				takeDao.delete("Main.userDashConfigDelete", data);
			}	
		}
				
		return rtnInfo;
	}
}