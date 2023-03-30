package kr.co.company.framework.uxb.service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Base64Utils;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.company.framework.common.service.CommonService;
import kr.co.takeit.common.service.FileService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.spring.service.TakeService;
import kr.co.takeit.util.TakeNexacroUtil;
import kr.co.takeit.util.TakeStringUtil;

@Service
public class GmService {

	private static final Logger logger = LoggerFactory.getLogger(GmService.class);

	@Autowired
	private TakeService service;

	@Autowired
	private TakeDAO takeDao;
	
	@Autowired
	private CommonService commonService;

	@Autowired
	FileService fileService;

	/**
	 * 프로그램 관리 저장
	 * @param dsProgDetail
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void programInfoSave(DataSetList dataSets, Map paramMap) {
		DataSet dsProgDetail = dataSets.get("dsProgDetail");
		
		if( dsProgDetail != null ){
			for( int i=0; i<dsProgDetail.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsProgDetail, i, paramMap);
				if (dsProgDetail.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("ProgramManagement.programInfoInsert", data);
				} else if (dsProgDetail.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProgramManagement.programInfoUpdate", data);
				} else if (dsProgDetail.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("ProgramManagement.programInfoDelete", data);
				}
			}

			for( int i=0; i<dsProgDetail.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsProgDetail, i, paramMap);
				takeDao.delete("ProgramManagement.programInfoDelete", data);
			}
		}
		
	}
	
	/**
	 * 프로그램 컴포넌트관리 저장
	 * @param dsCompList
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void programComponentSave(DataSetList dataSets, Map paramMap) {
		DataSet dsCompList = dataSets.get("dsCompList");

		if( dsCompList != null ){
			for( int i=0; i<dsCompList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsCompList, i, paramMap);
				if (dsCompList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("ProgramManagement.programComponentInsert", data);
				} else if (dsCompList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProgramManagement.programComponentUpdate", data);
				} else if (dsCompList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("ProgramManagement.programComponentDelete", data);
				}
			}

			for( int i=0; i<dsCompList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsCompList, i, paramMap);
				takeDao.delete("ProgramManagement.programComponentDelete", data);
			}
		}
		
	}
	
	/**
	 * 프로그램 메시지관리 저장
	 * @param dsMsgList
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void programMessageSave(DataSetList dataSets, Map paramMap) {
		DataSet dsMsgList = dataSets.get("dsMsgList");
		
		if( dsMsgList != null ){
			for( int i=0; i<dsMsgList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsMsgList, i, paramMap);
				if (dsMsgList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("ProgramManagement.programMessageInsert", data);
				} else if (dsMsgList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProgramManagement.programMessageUpdate", data);
				} else if (dsMsgList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("ProgramManagement.programMessageDelete", data);
				}
			}

			for( int i=0; i<dsMsgList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsMsgList, i, paramMap);
				takeDao.delete("ProgramManagement.programMessageDelete", data);
			}
		}
		
	}
	
	/**
	 * 프로그램 관리 삭제
	 * @param dsProgDetail
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void programInfoDelete(DataSetList dataSets, Map paramMap) {
		DataSet dsProgDetail = dataSets.get("dsProgDetail");
		
		if( dsProgDetail != null ){
			List<LinkedHashMap<String, Object>> list = null;
			int nMenuCnt = 0;
			int nDashCnt = 0;
			
			list = takeDao.select("ProjectManagement.projectMenuDashSearch", paramMap);
			
			nMenuCnt = Integer.parseInt(TakeStringUtil.nvl(list.get(0).get("MENU_CNT")));
			nDashCnt = Integer.parseInt(TakeStringUtil.nvl(list.get(0).get("DASH_CNT")));
			
			if(nMenuCnt > 0 || nDashCnt > 0) {
				// 프로그램 사용유무 
				takeDao.update("ProgramManagement.programInfoDisable", paramMap);	//PROGRAM_INFO USE_YN = 'N'
				
				if(nMenuCnt > 0) {
					// 사용중인 메뉴 있을 때
					takeDao.update("ProjectManagement.projectMenuDisable", paramMap);	//PROJECT_MENU USE_YN = 'N'
				}
				if(nDashCnt > 0) {
					// 사용중인 대시보드 있을 때
					takeDao.update("DashManagement.dashInfoDisable", paramMap);	//DASH_INFO USE_YN = 'N'
				}
			} else if(nMenuCnt <= 0 && nDashCnt <= 0) {
				// 사용중인 메뉴 없을 때
				takeDao.delete("ProgramManagement.programComponentDelete", 	paramMap);	//PROGRAM_COMPONENT Delete
				takeDao.delete("ProgramManagement.programMessageDelete", 	paramMap);	//PROGRAM_MESSAGE Delete
				takeDao.delete("ProgramManagement.programInfoDelete", 		paramMap);	//PROGRAM_INFO Delete
			}
		}
	}
	
	/**
	 * nonMenu 관리 저장
	 * @param dsProgDetail
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void nonMenuSave(DataSetList dataSets, Map paramMap) {
		DataSet dsProgDetail = dataSets.get("dsProgDetail");
		
		if( dsProgDetail != null ){
			for( int i=0; i<dsProgDetail.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsProgDetail, i, paramMap);
				if (dsProgDetail.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("ProgramManagement.nonMenuInsert", data);
				} else if (dsProgDetail.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("ProgramManagement.nonMenuUpdate", data);
				} else if (dsProgDetail.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("ProgramManagement.nonMenuDelete", data);
				}
			}

			for( int i=0; i<dsProgDetail.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsProgDetail, i, paramMap);
				takeDao.delete("ProgramManagement.nonMenuDelete", data);
			}
		}
		
	}
}
