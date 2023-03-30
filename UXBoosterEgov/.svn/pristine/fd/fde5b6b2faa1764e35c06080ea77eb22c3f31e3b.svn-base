package kr.co.doore.service;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.takeit.common.controller.FileController;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.util.TakeNexacroUtil;

@Service
public class DooreService {

	@Autowired
	TakeDAO takeDao;

	private String MARKER = "{}";
	private static final Logger logger = LoggerFactory.getLogger(DooreService.class);

	/**
	 * parameter map을 사용한 단건 insert update delete 처리
	 *
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void saveByParam(Map paramMap) {
		
		String sNameSpaceId = (String)paramMap.get("sNameSpace");
		
		takeDao.update(sNameSpaceId, paramMap);
	}
	
	/**
	 * dataset List insert update delete 처리
	 *
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void saveList(DataSetList dataSets, Map paramMap) {
		
		
		String sNameSpace[] = ((String)paramMap.get("sNameSpace")).split(",");
		String sDataset[] = ((String)paramMap.get("sDataset")).split("[|]");
		
		int roofCnt = sNameSpace.length;
		
		for(int i = 0; i < roofCnt;  i++) {
			
			DataSet dsList = dataSets.get((String)sDataset[i]);
			String queryId[] = sNameSpace[i].split("[|]");
			
			for(int j = 0; j < dsList.getRowCount(); j++) {
				
				Map data = TakeNexacroUtil.datasetToMap(dsList, j, paramMap);
				
				if (dsList.getRowType(j) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert(queryId[0], data);
				} else if (dsList.getRowType(j) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update(queryId[1], data);
				} else if (dsList.getRowType(j) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete(queryId[2], data);
				}
			}
			for(int k = 0; k < dsList.getRemovedRowCount(); k++ ){
				Map deleteData = TakeNexacroUtil.removeDatasetToMap(dsList, k);
				takeDao.delete(queryId[2], deleteData);
			}
		}
	}
}
