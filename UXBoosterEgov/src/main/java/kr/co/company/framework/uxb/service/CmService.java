package kr.co.company.framework.uxb.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.takeit.common.service.FileService;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.util.TakeNexacroUtil;
import kr.co.takeit.util.TakeStringUtil;

@Service
public class CmService {

	private static final Logger logger = LoggerFactory.getLogger(CmService.class);

	@Autowired
	FileService fileService;

	@Autowired
	private TakeDAO dao;

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void boardInfoSave(Map params, DataSetList dataSets) {
		DataSet dsNotice 	 = dataSets.get("dsNotice");
		DataSet dsNotiTarget = dataSets.get("dsNotiTarget");

		boolean isDelete = false;
		Map noticeInfo = null;
		if(dsNotice.getRowCount() > 0) {
			noticeInfo = TakeNexacroUtil.datasetToMap(dsNotice, 0, params);

			if (dsNotice.getRowCount() != 0) {
				if (dsNotice.getRowType(0) == DataSet.ROW_TYPE_INSERTED) {
					dao.insert("BoardManagement.boardInfoInsert", noticeInfo);
				} else if (dsNotice.getRowType(0) == DataSet.ROW_TYPE_UPDATED) {
					dao.update("BoardManagement.boardInfoUpdate", noticeInfo);
				} else {
					isDelete = true;
					dao.delete("BoardManagement.boardReplyDelete"	, noticeInfo); // 댓글정보 삭제
					dao.delete("BoardManagement.boardReaduserDelete", noticeInfo); // 조회사용자 삭제
					dao.delete("BoardManagement.boardTargetDelete"	, noticeInfo);	// 게시판공지대상 삭제
					dao.delete("BoardManagement.boardInfoDelete"	, noticeInfo);	// 게시판 삭제

					// 첨부파일 삭제
					try {
						fileService.deleteAll(TakeStringUtil.nvl(noticeInfo.get("BOARD_ATTACH")));
					} catch (Exception e) {
						//에러 방지
						logger.error("첨부파일 삭제 오류", e);
					}
				}
			}
		}

		List<Map<String, String>> targetList = TakeNexacroUtil.datasetToList(dsNotiTarget);
		if (!isDelete && dsNotiTarget != null ) {
			for (int i = 0; i < dsNotiTarget.getRemovedRowCount(); i++) {
				Map targetInfo = TakeNexacroUtil.removeDatasetToMap(dsNotiTarget, i, params);
				dao.delete("BoardManagement.boardTargetDelete", targetInfo);
			}

			for(int i = 0 ; i < dsNotiTarget.getRowCount() ; i++) {
				Map targetInfo = TakeNexacroUtil.datasetToMap(dsNotiTarget, i, params);

				if(noticeInfo != null) {
					targetInfo.put("BOARD_SEQ", TakeStringUtil.nvl(noticeInfo.get("BOARD_SEQ")));
				}

				dao.insert("BoardManagement.boardTargetInsert", targetInfo);
			}
		}
	}


	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void  boardInfoDelete(HttpServletRequest request, Map<String, String> paramMap) {
		String sProjectCd = TakeStringUtil.nvl(paramMap.get("sProjectCd"));
		String sMenuCd = TakeStringUtil.nvl(paramMap.get("sMenuCd"));
		String sBoardSeq = TakeStringUtil.nvl(paramMap.get("sBoardSeq"));
		String sFileType = TakeStringUtil.nvl(paramMap.get("sFileType"));
		String sAttachCd = TakeStringUtil.nvl(paramMap.get("sAttachCd"));

		Map data = new HashMap();
		data.put("PROJECT_CD", sProjectCd);
		data.put("MENU_CD", sMenuCd);
		data.put("FILE_PATH", sFileType);
		data.put("ATTACH_CD", sAttachCd);
		data.put("BOARD_SEQ", sBoardSeq);

		dao.delete("BoardManagement.boardReplyDelete", data);		// 댓글정보 삭제
		dao.delete("BoardManagement.boardReaduserDelete", data); 	// 조회사용자 삭제
		dao.delete("BoardManagement.boardTargetDelete", data);		// 게시판공지대상 삭제
		dao.delete("BoardManagement.boardInfoDelete", data);		// 게시판 삭제

		//첨부파일 삭제
		try {
			fileService.deleteAll(sAttachCd);
		} catch (Exception e) {
			//에러 방지
			logger.error("첨부파일 삭제 오류", e);
		}
	}

	/**
	 * 조회수 증가
	 *
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void readUser(Map<String, String> paramMap) {
		if(dao.update("BoardManagement.boardReaduserUpdate", paramMap)==0) {
			dao.insert("BoardManagement.boardReaduserInsert", paramMap);
		}
	}

	/**
	 * 댓글 추가, 수정, 삭제
	 *
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void replySave(DataSetList dsList, Map paramMap) {
		DataSet dsReply = dsList.get("dsReply");

		if( dsReply != null ){
			for( int i=0; i<dsReply.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsReply, i, paramMap);
				if (dsReply.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					dao.insert("BoardManagement.boardReplyInsert", data);
				} else if (dsReply.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					dao.update("BoardManagement.boardReplyUpdate", data);
				}
			}

			for( int i=0; i< dsReply.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsReply, i, paramMap);
				dao.delete("BoardManagement.boardReplyDelete", data);
			}
		}
	}


	/**
	 * 메모 추가, 수정, 삭제
	 *
	 * @param paramMap
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void memoSave(DataSetList dsList, Map paramMap) {
		DataSet dsMemo = dsList.get("dsMemo");

		if( dsMemo != null ){
			for( int i=0; i<dsMemo.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsMemo, i, paramMap);
				if (dsMemo.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					dao.insert("BoardManagement.memoInsert", data);
				} else if (dsMemo.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					dao.update("BoardManagement.memoUpdate", data);
				}
			}

			for( int i=0; i< dsMemo.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsMemo, i, paramMap);
				dao.delete("BoardManagement.memoDelete", data);
			}
		}
	}
}
