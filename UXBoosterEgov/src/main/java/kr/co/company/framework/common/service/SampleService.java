package kr.co.company.framework.common.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.util.TakeNexacroUtil;

@Service
public class SampleService {

	private static final Logger logger = LoggerFactory.getLogger(SampleService.class);

	@Autowired
	private TakeDAO takeDao;
	
	//@Value("#{application['prop.key']}")
	//private String propKey;

	/**
	 * 엑셀 처리
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo saveExcel(DataSet dsExcel, Map paramMap) {
		logger.debug("saveExcel start");

		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();

		List<Map<String, String>> excelList = TakeNexacroUtil.datasetToList(dsExcel);
		for(Map<String, String> excelInfo : excelList) {
			//유효성 검증, DB저장 등 후속처리
			logger.debug("excelInfo : {} ", excelInfo);
			excelInfo.put("PRGRSTS", "업로드완료");
		}

		rtnInfo.setData(excelList);
		rtnInfo.setDatasetName("outDs");

		logger.debug("saveExcel end");

		return rtnInfo;
	}

	/**
	 * 샘플Form01 저장
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void smpForm01Save(DataSetList dataSetList, Map paramMap) {
		DataSet dsList = dataSetList.get("dsList");

		if( dsList != null ){
			for( int i=0; i<dsList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsList, i, paramMap);
				if (dsList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm01Insert", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm01Update", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm01Delete", data);
				}
			}

			for( int i=0; i<dsList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsList, i, paramMap);
				takeDao.delete("Sample.smpForm01Delete", data);
			}
		}

	}

	/**
	 * 샘플Form02 저장
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void smpForm02Save(DataSetList dataSetList, Map paramMap) {
		DataSet dsList = dataSetList.get("dsList");

		if( dsList != null ){
			for( int i=0; i<dsList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsList, i, paramMap);
				if (dsList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm02Insert", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm02Update", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm02Delete", data);
				}
			}

			for( int i=0; i<dsList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsList, i, paramMap);
				takeDao.delete("Sample.smpForm02Delete", data);
			}
		}

	}

	/**
	 * 샘플Form03 저장
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void smpForm03Save(DataSetList dataSetList, Map paramMap) {
		DataSet dsSubList = dataSetList.get("dsSubList");

		if( dsSubList != null ){
			for( int i=0; i<dsSubList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsSubList, i, paramMap);
				if (dsSubList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm03Insert", data);
				} else if (dsSubList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm03Update", data);
				} else if (dsSubList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm03Delete", data);
				}
			}

			for( int i=0; i<dsSubList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsSubList, i, paramMap);
				takeDao.delete("Sample.smpForm03Delete", data);
			}
		}
	}

	/**
	 * 샘플Form04 저장
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void smpForm04Save(DataSetList dataSetList, Map paramMap) {
		DataSet dsUserList = dataSetList.get("dsUserList");
		DataSet dsList = dataSetList.get("dsList");

		if( dsUserList != null ){
			for( int i=0; i<dsUserList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsUserList, i, paramMap);
				if (dsUserList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm04Insert", data);
				} else if (dsUserList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm04Update", data);
				} else if (dsUserList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm04Delete", data);
				}
			}

			for( int i=0; i<dsUserList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsUserList, i, paramMap);
				takeDao.delete("Sample.smpForm04Delete", data);
			}
		}

		if( dsList != null ){
			for( int i=0; i<dsList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsList, i, paramMap);
				if (dsList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm04Insert", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm04Update", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm04Delete", data);
				}
			}

			for( int i=0; i<dsList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsList, i, paramMap);
				takeDao.delete("Sample.smpForm04Delete", data);
			}
		}

	}

	/**
	 * 샘플Form05 저장
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void smpForm05Save(DataSetList dataSetList, Map paramMap) {
		DataSet dsList = dataSetList.get("dsList");

		if( dsList != null ){
			for( int i=0; i<dsList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsList, i, paramMap);
				if (dsList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm05Insert", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm05Update", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm05Delete", data);
				}
			}

			for( int i=0; i<dsList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsList, i, paramMap);
				takeDao.delete("Sample.smpForm05Delete", data);
			}
		}

	}

	/**
	 * 샘플Form06 저장
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void smpForm06Save(DataSetList dataSetList, Map paramMap) {
		DataSet dsList = dataSetList.get("dsList");

		if( dsList != null ){
			for( int i=0; i<dsList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsList, i, paramMap);
				if (dsList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm06Insert", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm06Update", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm06Delete", data);
				}
			}

			for( int i=0; i<dsList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsList, i, paramMap);
				takeDao.delete("Sample.smpForm06Delete", data);
			}
		}

	}

	/**
	 * 샘플Form07 저장
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void smpForm07Save(DataSetList dataSetList, Map paramMap) {
		DataSet dsUserList = dataSetList.get("dsUserList");
		DataSet dsList = dataSetList.get("dsList");

		if( dsUserList != null ){
			for( int i=0; i < dsUserList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsUserList, i, paramMap);
				if (dsUserList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm07Insert", data);
				} else if (dsUserList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm07Update", data);
				} else if (dsUserList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm07Delete", data);
				}
			}

			for( int i=0; i < dsUserList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsUserList, i, paramMap);
				takeDao.delete("Sample.smpForm07Delete", data);
			}
		}

		if( dsList != null ){
			for( int i=0; i<dsList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsList, i, paramMap);
				if (dsList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm07Insert", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm07Update", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm07Delete", data);
				}
			}

			for( int i=0; i<dsList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsList, i, paramMap);
				takeDao.delete("Sample.smpForm07Delete", data);
			}
		}
	}

	/**
	 * 멀티데이터소스 조회 
	 * 
	 * @param paramMap
	 * @return
	 */
	public ArrayList<NexacroServiceInfo> selectMultiDs(Map paramMap) {

		List<LinkedHashMap<String, Object>> oracleList = takeDao.select("mainOracle/Sample.sampleTableSelect", paramMap);
		List<LinkedHashMap<String, Object>> mariaList = takeDao.select("subMySQL/Sample.sampleTableSelect", paramMap);
		List<LinkedHashMap<String, Object>> postList = takeDao.select("subPostgreSQL/Sample.sampleTableSelect", paramMap);

		ArrayList<NexacroServiceInfo> list = new ArrayList<NexacroServiceInfo>();
		list.add(new NexacroServiceInfo("dsOracle", oracleList));
		list.add(new NexacroServiceInfo("dsMaria", mariaList));
		list.add(new NexacroServiceInfo("dsPost", postList));

		return list;
	}

	/**
	 * 멀티데이터소스 저장
	 * 
	 * @param dsList
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void saveMultiDs(DataSetList dsList) {
		DataSet dsOracle = dsList.get("dsOracle");
		if( dsOracle != null ){
			for( int i=0; i<dsOracle.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsOracle, i);
				if (dsOracle.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("mainOracle/Sample.sampleTableUpdate", data);
				}
			}
		}

		DataSet dsMaria = dsList.get("dsMaria");
		if( dsMaria != null ){
			for( int i=0; i<dsMaria.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsMaria, i);
				if (dsMaria.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("subMySQL/Sample.sampleTableUpdate", data);
				}
			}
		}

		DataSet dsPost = dsList.get("dsPost");
		if( dsPost != null ){
			for( int i=0; i<dsPost.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsPost, i);
				if (dsPost.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("subPostgreSQL/Sample.sampleTableUpdate", data);
				}
			}
		}
	}

	/**
	 * 멀티데이터소스 저장 오류
	 * 
	 * @param dsList
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void saveMultiDsError(DataSetList dsList) {
		DataSet dsOracle = dsList.get("dsOracle");
		if( dsOracle != null ){
			for( int i=0; i<dsOracle.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsOracle, i);
				if (dsOracle.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("mainOracle/Sample.sampleTableUpdate", data);
				}
			}
		}

		List<LinkedHashMap<String, Object>> mariaList = takeDao.select("subMySQL/Sample.sampleTableSelect", new HashMap());

		DataSet dsMaria = dsList.get("dsMaria");
		if( dsMaria != null ){
			for( int i=0; i<dsMaria.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsMaria, i);
				if (dsMaria.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("subMySQL/Sample.sampleTableUpdate", data);
				}
			}
		}

		List<LinkedHashMap<String, Object>> mariaListx = takeDao.select("subMySQL/Sample.sampleTableSelect", new HashMap());
		logger.debug("maria 전 : {}", mariaList);
		logger.debug("maria 후 : {}", mariaListx);


		DataSet dsPost = dsList.get("dsPost");
		if( dsPost != null ){
			for( int i=0; i<dsPost.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsPost, i);
				if (dsPost.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("subPostgreSQL/Sample.sampleTableUpdate", data);

					throw new RuntimeException();
				}
			}
		}
	}
	
	/**
	 * 샘플01 - List로 반환시
	 * 
	 * @param paramMap
	 * @return
	 */
	public ArrayList<NexacroServiceInfo> sample01(Map paramMap) {

		List<LinkedHashMap<String, Object>> data = takeDao.select("Sample.sampleTableSelect", paramMap);

		ArrayList<NexacroServiceInfo> list = new ArrayList<NexacroServiceInfo>();
		list.add(new NexacroServiceInfo("dsList", data));

		return list;
	}
	
	/**
	 * 샘플02 - 입력/수정/삭제시
	 *
	 * @param dataSets
	 * @param paramMap
	 * @return
	 */
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void sample02(DataSetList dataSetList, Map paramMap) {
		DataSet dsList = dataSetList.get("dsList");

		if( dsList != null ){
			for( int i=0; i<dsList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsList, i, paramMap);
				if (dsList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("Sample.smpForm06Insert", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("Sample.smpForm06Update", data);
				} else if (dsList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("Sample.smpForm06Delete", data);
				}
			}

			for( int i=0; i<dsList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsList, i, paramMap);
				takeDao.delete("Sample.smpForm06Delete", data);
			}
		}

	}
	
	/**
	 * 페이징 샘플
	 * 
	 * @param paramMap
	 * @return
	 */
	public ArrayList<NexacroServiceInfo> pageTestSelect(Map paramMap) {

		List<LinkedHashMap<String, Object>> data = takeDao.select("Sample.pageTestSelect", paramMap);

		ArrayList<NexacroServiceInfo> list = new ArrayList<NexacroServiceInfo>();
		list.add(new NexacroServiceInfo("dsList", data));

		return list;
	}
}
