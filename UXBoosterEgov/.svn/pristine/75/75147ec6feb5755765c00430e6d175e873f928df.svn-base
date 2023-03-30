package kr.co.company.framework.uxb.service;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.takeit.exception.TakeBizException;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.util.TakeFileUtil;
import kr.co.takeit.util.TakeNexacroUtil;

@Service
public class ScService {

	private static final Logger logger = LoggerFactory.getLogger(ScService.class);

	@Autowired
	private TakeDAO dao;

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void sysImageSave(HttpServletRequest request) throws Exception {
		ArrayList<Map<String, String>> list = new ArrayList<Map<String, String>>();

		String fullFilePath		= null;
		String origName 		= null;

		MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
    	Iterator<String> iter = mhsr.getFileNames();
    	MultipartFile mfile = null;
    	String fieldName = "";

    	Map map = null;
		// 값이 나올때까지
    	int i = 0;
    	while (iter.hasNext()) {
    		Map<String, String> fileMap = new HashMap<String, String>();

			fieldName = (String)iter.next();
			// 내용을 가져와서
			mfile = mhsr.getFile(fieldName);
			origName = mfile.getName();
			// 파일명이 없다면
			if ("".equals(origName)) {
				continue;
			}

			// 파일 확장자
			String ext = origName.substring(origName.lastIndexOf('.'));
			ext = ext.replace(".", "");

			// 설정한 path에 파일저장
			WebApplicationContext appContext = ContextLoader.getCurrentWebApplicationContext();
			ServletContext sc = appContext.getServletContext();
            String realPath = sc.getRealPath("/");

            String sSubPath = "";
            if( origName.indexOf("Login") != -1 || origName.indexOf("Top") != -1 ){
            	sSubPath = "logo";
            }
            else {
            	sSubPath = "banner";
            }

			fullFilePath = TakeFileUtil.generalizePath(realPath + "images" + File.separator + sSubPath);

			String saveFileName = origName;
			File serverFile = new File(fullFilePath + File.separator + saveFileName);
			if( !serverFile.isDirectory() ){
				serverFile.mkdirs();
			}
			mfile.transferTo(serverFile);

			list.add(fileMap);
    	}
	}

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void demoUserCreate(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsDemoUser = dataSets.get("dsDemoUser");
		
		if( dsDemoUser != null ){
			Map data = TakeNexacroUtil.datasetToMap(dsDemoUser, 0, paramMap);

			String sUserCd = (String)dao.selectObj("SystemCommon.maxUserCdSelect", new HashMap());
			data.put("USER_CD", sUserCd);

			dao.insert("SystemCommon.demoUserInsert", data);
			dao.insert("SystemCommon.demoProjectUserInsert", data);
			dao.insert("SystemCommon.demoProjectUserRoleInsert", data);
		} else {
			// 변경된 내역이 존재하지 않음
			throw new TakeBizException("변경된 내역이 존재하지 않음");
		}
	}
	
	/**
	 * 시스템관리 기본정보 저장
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo systemInfoMainSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsSystemInfo = dataSets.get("dsSystemInfo");
		Map data = TakeNexacroUtil.datasetToMap(dsSystemInfo);
		dao.update("SystemCommon.systemInfoMainUpdate", data);
				
		return rtnInfo;
	}
	
	/**
	 * 시스템관리 배포이력 추가,수정,삭제
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo systemDeploySave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsSystemDeploy = dataSets.get("dsSystemDeploy");
		
		if( dsSystemDeploy != null ){
			for( int i=0; i<dsSystemDeploy.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsSystemDeploy, i, paramMap);
				
				if (dsSystemDeploy.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					
					dao.insert("SystemCommon.systemDeployInsert", data);
					
				} else if (dsSystemDeploy.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					
					dao.update("SystemCommon.systemDeployUpdate", data);
					
				} else if (dsSystemDeploy.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					
					dao.delete("SystemCommon.systemDeployDelete", data);
					
				}
			}
			
			for( int i=0; i<dsSystemDeploy.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsSystemDeploy, i, paramMap);
				dao.delete("SystemCommon.systemDeployDelete", data);
			}	
		}
				
		return rtnInfo;
	}
	
	/**
	 * 시스템관리 이용약관 저장
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo systemInfoPolicySave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsSystemPolicy = dataSets.get("dsSystemPolicy");
		Map data = TakeNexacroUtil.datasetToMap(dsSystemPolicy);
		dao.update("SystemCommon.systemInfoPolicyUpdate", data);
				
		return rtnInfo;
	}
	
	/**
	 * 시스템관리 로그인정책 저장
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo systemLoginPolicySave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsSystemLoginPolicy = dataSets.get("dsSystemLoginPolicy");
		Map data = TakeNexacroUtil.datasetToMap(dsSystemLoginPolicy);
		dao.insert("SystemCommon.systemLoginPolicyInsert", data);
				
		return rtnInfo;
	}
	
	/**
	 * 시스템관리 이용약관 저장
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo systemInfoButtonSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsSystemButton = dataSets.get("dsSystemButton");
		Map data = TakeNexacroUtil.datasetToMap(dsSystemButton);
		dao.update("SystemCommon.systemInfoButtonUpdate", data);
				
		return rtnInfo;
	}
	
	/**
	 * 다국어 목록 추가,수정,삭제
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo multilanguageInfoSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsMultilanguageInfo = dataSets.get("dsMultilanguageInfo");
		
		if( dsMultilanguageInfo != null ){
			for( int i=0; i<dsMultilanguageInfo.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsMultilanguageInfo, i, paramMap);
				
				if (dsMultilanguageInfo.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					
					dao.insert("SystemCommon.multilanguageInfoInsert", data);
					
				} else if (dsMultilanguageInfo.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					
					dao.update("SystemCommon.multilanguageInfoUpdate", data);
					
				} else if (dsMultilanguageInfo.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					
					// 자식 테이블_다국어정보 먼저 삭제
					dao.delete("SystemCommon.multilanguageDetailDelete", data);
					dao.delete("SystemCommon.multilanguageInfoDelete", data);
					
				}
			}
			
			for( int i=0; i<dsMultilanguageInfo.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsMultilanguageInfo, i, paramMap);
				// 자식 테이블_다국어정보 먼저 삭제
				dao.delete("SystemCommon.multilanguageDetailDelete", data);
				dao.delete("SystemCommon.multilanguageInfoDelete", data);
			}	
		}
				
		return rtnInfo;
	}
	
	/**
	 * 다국어 정보 추가,수정
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo multilanguageDetailSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsMultiLanguageDetail = dataSets.get("dsMultiLanguageDetail");
		
		if( dsMultiLanguageDetail != null ){
			for( int i=0; i<dsMultiLanguageDetail.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsMultiLanguageDetail, i, paramMap);
				
				if (dsMultiLanguageDetail.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					
					dao.insert("SystemCommon.multilanguageDetailInsert", data);
					
				} else if (dsMultiLanguageDetail.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					
					dao.update("SystemCommon.multilanguageDetailUpdate", data);
					
				} 
			}
		}
				
		return rtnInfo;
	}
	
	/**
	 * 코드정보 추가,수정,삭제
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo codeInfoSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		
		DataSet dsCodeInfo = dataSets.get("dsCodeInfo");
		
		if( dsCodeInfo != null ){
			for( int i=0; i<dsCodeInfo.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsCodeInfo, i, paramMap);
				
				if (dsCodeInfo.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					
					dao.insert("SystemCommon.codeInfoInsert", data);
					
				} else if (dsCodeInfo.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					
					dao.update("SystemCommon.codeInfoUpdate", data);
					
				} else if (dsCodeInfo.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					
					dao.delete("SystemCommon.codeInfoDelete", data);
					
				}
			}
			
			for( int i=0; i<dsCodeInfo.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsCodeInfo, i, paramMap);
				dao.delete("SystemCommon.codeInfoDelete", data);
			}	
		}
				
		return rtnInfo;
	}

	/**
	 * 파일상세정보 추가,수정,삭제
	 * @param dataSets
	 * @param paramMap
	 * @return
	 * @throws TakeException
	 */
	public void attachInfoFileSave(DataSetList dsList, Map paramMap) {
		DataSet dsFolder = dsList.get("dsFolder");
		
		if( dsFolder != null ){
			for( int i=0; i<dsFolder.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsFolder, i, paramMap);
				if (dsFolder.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					dao.insert("SystemCommon.attachInfoFileInsert", data);
				} else if (dsFolder.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					dao.delete("SystemCommon.attachInfoFileDelete", data);
				}
			}

			for( int i=0; i< dsFolder.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsFolder, i, paramMap);
				dao.delete("SystemCommon.attachInfoFileDelete", data);
			}
		}
		
	}
}