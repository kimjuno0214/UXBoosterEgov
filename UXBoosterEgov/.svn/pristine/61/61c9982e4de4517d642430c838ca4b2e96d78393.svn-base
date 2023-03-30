package kr.co.company.framework.uxb.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.company.framework.common.service.CommonService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.spring.service.TakeService;
import kr.co.takeit.util.TakeNexacroUtil;
import kr.co.takeit.util.TakeStringUtil;

@Service
public class PmService {

	private static final Logger logger = LoggerFactory.getLogger(PmService.class);

	@Autowired
	private TakeService service;

	@Autowired
	private CommonService commonService;

	@Autowired
	private TakeDAO takeDao;

	/**
	 * @param dataSets
	 * @param paramMap
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectInfoSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		DataSet dsProjectInfoDetail = dataSets.get("dsProjectInfoDetail");
		DataSet dsFile 			    = dataSets.get("dsFile");
		
		String sProjectCd = TakeStringUtil.nvl(paramMap.get("sProjectCd"), "");
		ArrayList saveList = new ArrayList();

		NexacroServiceInfo saveInfo = new NexacroServiceInfo();
		saveInfo.setDataset(dsProjectInfoDetail);
		saveInfo.setDatasetName("dsProjectInfoDetail");
		saveInfo.setServiceNamespace("ProjectManagement.projectInfo");

		saveList.add(saveInfo);
		ArrayList<NexacroServiceInfo> result = service.multiSave(saveList, paramMap);

		if( result != null && result.size() > 0 ) {
			NexacroServiceInfo resultInfo = result.get(0);
			List<Map> rtnList = resultInfo.getData();

			Map rtnMap = null;
			if( null != rtnList && rtnList.size() > 0 ){
				rtnMap = rtnList.get(0);
				sProjectCd = ( "".equals(sProjectCd) ) ? TakeStringUtil.nvl(rtnMap.get("PROJECT_CD"), "") : sProjectCd;
			}
		}


		if( dsFile.getRowCount() > 0 ){
			ArrayList<Map> rtnFileList = commonService.uploadImage(dsFile, paramMap);
			Map rtnfileMap = rtnFileList.get(0);
			String sAttachCd = TakeStringUtil.nvl(rtnfileMap.get("ATTACH_CD"));

			Map pjMap = new HashMap();
			pjMap.put("PROJECT_CD", sProjectCd);
			pjMap.put("PROJECT_IMG", sAttachCd);
			service.update("ProjectManagement.projectInfoUpdate", pjMap);
		}
	}
	
	/**
	 * 프로젝트 정보 삭제
	 * @param dataSet
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectInfoDelete(DataSetList dataSet, Map<String, String> paramMap) {
		DataSet dsProjectInfoDetail = dataSet.get("dsProjectInfoDetail");
		
		//for( int i=0; i<dsProjectInfoDetail.getRowCount(); i++ ){
		for( int i=0; i<dsProjectInfoDetail.getRemovedRowCount(); i++ ){
			Map dataMap = TakeNexacroUtil.datasetToMap(dsProjectInfoDetail, i, paramMap);

			takeDao.delete("ProjectManagement.projectInfoDelete", dataMap);
		}
	}

	/**
	 * @param dataSets
	 * @param paramMap
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectMenuInfoSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		DataSet dsProjectMenuList = dataSets.get("dsProjectMenuList");
		DataSet dsFile 			  = dataSets.get("dsFile");
		
		String sProjectCd = TakeStringUtil.nvl(paramMap.get("sProjectCd"), "");
		String sMenuCd = TakeStringUtil.nvl(paramMap.get("MENU_CD"));
		ArrayList saveList = new ArrayList();

		NexacroServiceInfo saveInfo = new NexacroServiceInfo();
		saveInfo.setDataset(dsProjectMenuList);
		saveInfo.setDatasetName("dsProjectMenuList");
		saveInfo.setServiceNamespace("ProjectManagement.projectMenu");

		saveList.add(saveInfo);

		ArrayList<NexacroServiceInfo> result = service.multiSave(saveList, paramMap);

		if( result != null && result.size() > 0 ) {
			NexacroServiceInfo resultInfo = result.get(0);
			List<Map> rtnList = resultInfo.getData();

			Map rtnMap = null;
			if( null != rtnList && rtnList.size() > 0 ){
				rtnMap = rtnList.get(0);
				sProjectCd = ( "".equals(sProjectCd) ) ? TakeStringUtil.nvl(rtnMap.get("PROJECT_CD"), "") : sProjectCd;
			}
		}

		if( dsFile.getRowCount() > 0 ){
			ArrayList<Map> rtnFileList = commonService.uploadImage(dsFile, paramMap);
			Map rtnfileMap = rtnFileList.get(0);
			String sAttachCd = TakeStringUtil.nvl(rtnfileMap.get("ATTACH_CD"));

			Map pjMap = new HashMap();
			pjMap.put("PROJECT_CD", sProjectCd);
			pjMap.put("MENU_ICON", sAttachCd);
			pjMap.put("MENU_CD", sMenuCd);
			service.update("ProjectManagement.projectMenuUpdate", pjMap);
		}
	}

	/**
	 * 프로젝트 메뉴 삭제시 자식 로우까지 전부 삭제, 파일 삭제
	 * @param dataSet
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectMenuDelete(DataSetList dataSet, Map<String, String> paramMap) {
		DataSet dsProjectMenuList = dataSet.get("dsProjectMenuList");
		//String sRoleCd       = TakeStringUtil.nvl(paramMap.get("sRoleCd"), "");
		String sMenuIcon  	 = "";
		String sFilePath  	 = "";
		
		//2021.05.27 전영찬 프로젝트 메뉴 삭제 관련 추가 START
		List<LinkedHashMap<String, Object>> list = null;
		int nMyMnCnt = 0;		//USER_MYMENU CNT
		int nRecentMnCnt = 0;	//USER_RECENTMENU CNT
		int nGridCnt = 0;		//USER_GRID_CONFIG CNT
		int nBoardCnt = 0;		//BOARD_INFO CNT
		
		String sMenuType  	 = "";
		//2021.05.27 전영찬 프로젝트 메뉴 삭제 관련 추가 END
		
		for( int i=0; i<dsProjectMenuList.getRowCount(); i++ ){
			Map dataMap = TakeNexacroUtil.datasetToMap(dsProjectMenuList, i, paramMap);

            // 파일 삭제시 키 값 받아서 현재 반복문 안에 이중반복문 사용해서 파일 삭제 쿼리 태워야 할 것으로 판단 ___  개발중
			//sMenuIcon = TakeStringUtil.nvl(dsProjectMenuList.getString(i, "MENU_ICON"), "");
			//sFilePath = TakeStringUtil.nvl(dataMap.get("sFilePath"), "");
			
			//2021.05.27 전영찬 프로젝트 메뉴 삭제 관련 추가 START
			sMenuType = TakeStringUtil.nvl(dataMap.get("MENU_TYPE"), "");	//메뉴 타입 
			if("03".equals(sMenuType)) {
				//메뉴 타입 '03' 화면일 때
				list = takeDao.select("ProjectManagement.projectMenuInUseCnt", dataMap);
				
				nMyMnCnt 	= Integer.parseInt(TakeStringUtil.nvl(list.get(0).get("MY_CNT")));
				nRecentMnCnt= Integer.parseInt(TakeStringUtil.nvl(list.get(0).get("RE_CNT")));
				//nGridCnt 	= Integer.parseInt(TakeStringUtil.nvl(list.get(0).get("GRID_CNT")));	//USER_GRID_CONFIG 관련 주석
				nBoardCnt 	= Integer.parseInt(TakeStringUtil.nvl(list.get(0).get("BOARD_CNT")));
				
				if(nMyMnCnt > 0) {
					// 마이메뉴 있을 때
					takeDao.delete("ProjectManagement.myMenuDelete", dataMap);	//USER_MYMENU
				}
				if(nRecentMnCnt > 0) {
					// 최근메뉴 있을 때
					takeDao.delete("ProjectManagement.recentMenuDelete", dataMap);	//USER_RECENTMENU
				}
//				if(nGridCnt > 0) {
//					// 그리드 구성 있을 때
//					takeDao.delete("ProjectManagement.userGridDelete", dataMap);	//USER_GRID_CONFIG
//				} //USER_GRID_CONFIG 관련 주석
				if(nBoardCnt > 0) {
					// 게시판(공지) 있을 때
					takeDao.delete("ProjectManagement.boardReaduserDelete", dataMap);	//BOARD_READUSER
					takeDao.delete("ProjectManagement.boardTargetDelete", dataMap);		//BOARD_TARGET
					takeDao.delete("ProjectManagement.boardReplyDelete", dataMap);		//BOARD_REPLY
					takeDao.delete("ProjectManagement.boardInfoDelete", dataMap);		//BOARD_INFO
				}
			}
			
			takeDao.delete("ProjectManagement.projectMenuButtonDelete", dataMap);	//PROJECT_ROLE_MENU_BUTTON
			//2021.05.27 전영찬 프로젝트 메뉴 삭제 관련 추가 END
			
			takeDao.delete("ProjectManagement.projectRoleMenuDelete", dataMap);
			takeDao.delete("ProjectManagement.projectMenuDelete", dataMap);
		}
	}

	/**
	 * 프로젝트 권한 저장,삭제
	 * @param dsProjectUserList
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectUserSave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsProjectUserList = dataSets.get("dsProjectUserList");
		
		if( dsProjectUserList != null ){
			for( int i=0; i<dsProjectUserList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsProjectUserList, i, paramMap);
				if (dsProjectUserList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					data.put("USE_YN", "Y");
					takeDao.insert("ProjectManagement.projectUserInsert", data);
					// 권한도 같이 Insert
					takeDao.update("ProjectManagement.projectUserRoleInsert", data);
				} else if (dsProjectUserList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProjectManagement.projectUserUpdate", data);
					// 권한도 같이 Insert
					takeDao.update("ProjectManagement.projectUserRoleUpdate", data);
				} else if (dsProjectUserList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					// 권한부터 삭제
					takeDao.delete("ProjectManagement.projectUserRoleDelete", data);
					takeDao.delete("ProjectManagement.projectUserDelete", data);
				}
			}

			for( int i=0; i<dsProjectUserList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsProjectUserList, i, paramMap);
				takeDao.delete("ProjectManagement.projectUserRoleDelete", data);
				takeDao.delete("ProjectManagement.projectUserDelete", data);
			}
		}
	}

	/**
	 * 프로젝트 권한 삭제
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectRoleAllDelete(Map<String, String> paramMap) {
		takeDao.delete("ProjectManagement.projectRoleMenuRoleDelete", paramMap);
		takeDao.delete("ProjectManagement.projectRoleDelete"	    , paramMap);

		//PROJECT_USER_ROLE 사용자에게 부여한 권한을 제거
		takeDao.delete("ProjectManagement.projectUserRoleDelete"	, paramMap);
		//PROJECT_ROLE_MENU_BUTTON 기능버튼 권한을 제거
		takeDao.delete("ProjectManagement.projectMenuButtonDelete"	, paramMap);
	}

	/**
	 * 프로젝트 사용자 권한 저장
	 * 9999건이 오버될 경우엔 문제가 발생할 수 있음
	 * @param dsUserRole
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectUserRoleSave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsUserRole = dataSets.get("dsRole");
		DataSet dsUserMenu = dataSets.get("dsMenu");
		
		//프로젝트 사용자정보가 없다면 생성
		paramMap.put("USE_YN", "Y");
		int result = takeDao.update("ProjectManagement.projectUserUpdate", paramMap);
		if (result == 0) {
			//프로젝트 사용자 정보 입력
			takeDao.insert("ProjectManagement.projectUserInsert", paramMap);
		}

		//프로젝트사용자권한 저장
		List<Map<String, String>> userRoleList = TakeNexacroUtil.datasetToList(dsUserRole);
		if (userRoleList != null) {
			for (int i = 0; i < dsUserRole.getRowCount(); i++) {
				Map roleInfo = TakeNexacroUtil.datasetToMap(dsUserRole, i, paramMap);

				String chk = TakeStringUtil.nvl(roleInfo.get("CHK"));
				if (chk.equals("0")) {
					//DELETE
					takeDao.delete("ProjectManagement.projectUserRoleDelete", roleInfo);
				} else {
					//INSERT
					takeDao.update("ProjectManagement.projectUserRoleInsert", roleInfo);
				}
			}
		}

		//사용자화면용 프로젝트권한/메뉴/사용자권한 저장
		List<Map<String, String>> userMenuList = TakeNexacroUtil.datasetToList(dsUserMenu);
		if (userMenuList != null) {
			String userRoleCd = "";
			for (int i = 0; i < dsUserMenu.getRowCount(); i++) {
				Map userMenuInfo = TakeNexacroUtil.datasetToMap(dsUserMenu, i, paramMap);
				if (i == 0) {
					userRoleCd = TakeStringUtil.nvl(userMenuInfo.get("ROLE_CD"));

					//PROJECT_ROLE, PROJECT_USER_ROLE 프로젝트권한 / 프로젝트사용자권한 생성
					if (userRoleCd.equals("")) {
						takeDao.insert("ProjectManagement.projectUserScreenRoleInsert", userMenuInfo);

						paramMap.put("ROLE_CD", TakeStringUtil.nvl(userMenuInfo.get("maxCd")));
						userMenuInfo.put("ROLE_CD", TakeStringUtil.nvl(userMenuInfo.get("maxCd")));
						takeDao.insert("ProjectManagement.projectUserRoleInsert", userMenuInfo);
					}
				}

				//PROJECT_ROLE_MENU 프로젝트권한 메뉴 생성/수정(MERGE 쿼리임)
				takeDao.update("ProjectManagement.projectRoleMenuUpdate", userMenuInfo);
			}
		}

		//PROJECT_ROLE_MENU 프로젝트권한 메뉴 삭제
		if (dsUserMenu != null) {
			for (int i = 0; i < dsUserMenu.getRemovedRowCount(); i++) {
				Map userMenuInfo = TakeNexacroUtil.removeDatasetToMap(dsUserMenu, i, paramMap);
				takeDao.delete("ProjectManagement.projectRoleMenuDelete", userMenuInfo);
			}
		}

		//PROJECT_USER_ROLE 프로젝트사용자권한이 사용되지 않을 경우 삭제처리
		//PROJECT_ROLE 프로젝트권한이 사용되지 않을 경우 삭제처리
		//해도되고 안해도됨(어차피 max+1)

		//프로젝트사용자에게 매핑된 권한이 없을 경우 프로젝트사용자 정보 삭제
		takeDao.delete("ProjectManagement.projectUserDeleteNotUsed", paramMap);
	}


	/**
	 * 대시보드 저장
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void dashInfoSave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsDashList = dataSets.get("dsDashList");
		
		if( dsDashList != null ){
			for( int i=0; i<dsDashList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsDashList, i, paramMap);
				if (dsDashList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("DashManagement.dashInfoSaveInsert", data);
				} else if (dsDashList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("DashManagement.dashInfoSaveUpdate", data);

					String useYn = TakeStringUtil.nvl(data.get("USE_YN"));
					if(useYn.equals("N")) {
						//대시보드 사용안함 시 사용자에 추가된 대시보드 전체 삭제
						deleteUserDashConfigByDashCd(data);
						//대시보드 사용안함 시 대시보드 권한에서 제거
						updateRoleDashNotUsedByDashCd(data);
					}

				} else if (dsDashList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("DashManagement.dashInfoSaveDelete", data);

					//대시보드 사용안함 시 사용자에 추가된 대시보드 전체 삭제
					deleteUserDashConfigByDashCd(data);

					//대시보드 사용안함 시 대시보드 권한에서 제거
					updateRoleDashNotUsedByDashCd(data);
				}
			}

			for( int i=0; i<dsDashList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsDashList, i, paramMap);
				takeDao.delete("DashManagement.dashInfoSaveDelete", data);

				//대시보드 사용안함 시 사용자에 추가된 대시보드 전체 삭제
				deleteUserDashConfigByDashCd(data);

				//대시보드 사용안함 시 대시보드 권한에서 제거
				updateRoleDashNotUsedByDashCd(data);
			}
		}
	}

	/**
	 * 대시보드 삭제 시 대시보드 권한에서 제거
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void updateRoleDashNotUsedByDashCd(Map<String, String> data) {
		takeDao.update("DashManagement.updateRoleDashNotUsedByDashCd", data);
	}

	/**
	 * 대시보드 권한 삭제 시 대시보드 사용자 설정에서 제거
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void deleteUserDashConfigByDashCd(Map<String, String> data) {
		takeDao.delete("DashManagement.deleteUserDashConfigByDashCd", data);
	}
	
	/**
	 * 프로젝트 권한 저장,삭제
	 * @param dsProjectRoleList
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectRoleListSave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsProjectRoleList = dataSets.get("dsProjectRoleList");
		
		if( dsProjectRoleList != null ){
			for( int i=0; i<dsProjectRoleList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsProjectRoleList, i, paramMap);
				if (dsProjectRoleList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("ProjectManagement.projectRoleInsert", data);
				} else if (dsProjectRoleList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProjectManagement.projectRoleUpdate", data);
				} else if (dsProjectRoleList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("ProjectManagement.projectRoleDelete", data);
				}
			}

			for( int i=0; i<dsProjectRoleList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsProjectRoleList, i, paramMap);
				takeDao.delete("ProjectManagement.projectRoleDelete", data);
			}
		}
	}
	
	/**
	 * 프로젝트 권한 메뉴 저장,삭제
	 * @param dsProjectRoleMenuList
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectRoleMenuSave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsProjectRoleMenuList = dataSets.get("dsProjectRoleMenuList");
		
		if( dsProjectRoleMenuList != null ){
			for( int i=0; i<dsProjectRoleMenuList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsProjectRoleMenuList, i, paramMap);
				if (dsProjectRoleMenuList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("ProjectManagement.projectRoleMenuInsert", data);
				} else if (dsProjectRoleMenuList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProjectManagement.projectRoleMenuUpdate", data);
				} else if (dsProjectRoleMenuList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("ProjectManagement.projectRoleMenuDelete", data);
				}
			}

			for( int i=0; i<dsProjectRoleMenuList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsProjectRoleMenuList, i, paramMap);
				takeDao.delete("ProjectManagement.projectRoleMenuDelete", data);
			}
		}
	}
	
	/**
	 * 프로젝트 사용자(다중권한) 저장,삭제
	 * @param dsUser
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectUserMultiSave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsUser = dataSets.get("dsUser");
		
		if( dsUser != null ){
			for( int i=0; i<dsUser.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsUser, i, paramMap);
				if (dsUser.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					data.put("USE_YN", "Y");
					takeDao.insert("ProjectManagement.projectUserInsert", data);
					// 권한도 같이 Insert
					//takeDao.update("ProjectManagement.projectUserRoleInsert", data);
				} else if (dsUser.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProjectManagement.projectUserUpdate", data);
					// 권한도 같이 Insert
					//takeDao.update("ProjectManagement.projectUserRoleUpdate", data);
				} else if (dsUser.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					// 권한부터 삭제
					//takeDao.delete("ProjectManagement.projectUserRoleDelete", data);
					takeDao.delete("ProjectManagement.projectUserDelete", data);
				}
			}

			for( int i=0; i<dsUser.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsUser, i, paramMap);
				//takeDao.delete("ProjectManagement.projectUserRoleDelete", data);
				takeDao.delete("ProjectManagement.projectUserDelete", data);
			}
		}
	}
	
	/**
	 * 프로젝트 권한 저장,삭제
	 * @param dsTemplateDetail
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectTemplateSave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsTemplateDetail = dataSets.get("dsTemplateDetail");
		
		if( dsTemplateDetail != null ){
			for( int i=0; i<dsTemplateDetail.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsTemplateDetail, i, paramMap);
				if (dsTemplateDetail.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("ProjectManagement.projectTemplateInsert", data);
				} else if (dsTemplateDetail.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProjectManagement.projectTemplateUpdate", data);
				} else if (dsTemplateDetail.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("ProjectManagement.projectTemplateDelete", data);
				}
			}

			for( int i=0; i<dsTemplateDetail.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsTemplateDetail, i, paramMap);
				takeDao.delete("ProjectManagement.projectTemplateDelete", data);
			}
		}
	}
	
	/**
	 * 프로젝트 휴일관리 저장
	 * @param dsHolidayDetail
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void projectHolidaySave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsHolidayDetail = dataSets.get("dsHolidayDetail");
		
		if( dsHolidayDetail != null ){
			for( int i=0; i<dsHolidayDetail.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsHolidayDetail, i, paramMap);
				if (dsHolidayDetail.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("ProjectManagement.projectHolidayInsert", data);
				} else if (dsHolidayDetail.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProjectManagement.projectHolidayUpdate", data);
				} else if (dsHolidayDetail.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("ProjectManagement.projectHolidayDelete", data);
				}
			}

			for( int i=0; i<dsHolidayDetail.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsHolidayDetail, i, paramMap);
				takeDao.delete("ProjectManagement.projectHolidayDelete", data);
			}
		}
	}
	
	/**
	 * 프로젝트 메뉴 기능버튼 사용자 추가,수정,삭제
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo projectMenuButtonSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsUserN = dataSets.get("dsUserN");
		
		if( dsUserN != null ){
			for( int i=0; i<dsUserN.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsUserN, i, paramMap);
				data.putAll(paramMap);
				if (dsUserN.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					
					takeDao.insert("ProjectManagement.projectMenuButtonInsert", data);
					
				} else if (dsUserN.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					
					takeDao.update("ProjectManagement.projectMenuButtonUpdate", data);
					
				} else if (dsUserN.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					
					takeDao.delete("ProjectManagement.projectMenuButtonDelete", data);
					
				}
			}
			
			for( int i=0; i<dsUserN.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsUserN, i, paramMap);
				data.putAll(paramMap);
				takeDao.delete("ProjectManagement.projectMenuButtonDelete", data);
			}	
		}
				
		return rtnInfo;
	}
}
