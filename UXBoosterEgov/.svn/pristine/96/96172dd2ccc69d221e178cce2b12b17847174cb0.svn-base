package kr.co.company.framework.uxb.service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
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
public class UmService {

	private static final Logger logger = LoggerFactory.getLogger(UmService.class);

	@Autowired
	private TakeService service;

	@Autowired
	private TakeDAO takeDao;
	
	@Autowired
	private CommonService commonService;

	@Autowired
	FileService fileService;

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void deptDelSave(DataSetList dataSets, Map<String, String> paramMap) {
		DataSet dsDeptList = dataSets.get("dsDeptList");
		
		service.delete("UserManagement.deptInfoDelete", paramMap);

		List<Map<String, String>> list = TakeNexacroUtil.datasetToList(dsDeptList);
		for(Map<String, String> info : list) {
			service.insert("UserManagement.deptInfoInsertByCd", info);
		}
	}

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public NexacroServiceInfo userInfoSave(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {

		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
//		try {
			DataSet dsUserDetail = dataSets.get("dsUserDetail");
			DataSet dsFile       = dataSets.get("dsFile");
			
			String sUserCd = TakeStringUtil.nvl(paramMap.get("sUserCd"), "");

			NexacroServiceInfo saveInfo = new NexacroServiceInfo();
			saveInfo.setDataset(dsUserDetail);
			saveInfo.setDatasetName("dsUserDetail");
			saveInfo.setServiceNamespace("UserManagement.userInfo");

			ArrayList saveList = new ArrayList();
			saveList.add(saveInfo);

//			String sBImg = dsFile.getString(0, "FILE_BLOB");

			/* Base64형태의 문자열을 이미지파일 객체로 변환 */
//			binaryToFile(sBImg, "D:\\Upload\\", "test.png");

//			File imgFile = new File("D:\\Upload\\test.png");

			/* 이미지파일객체를 Base64형태의 문자열로 변환 */
//			String sBinaryFile = fileToBinary(imgFile);
//			sBinaryFile = "data:image/png;base64," + sBinaryFile;

//			System.out.println("!@!@>> file_blob:   " + dsFile.getString(0, "file_blob"));
//			System.out.println("!@!@>> sBinaryFile:   " + sBinaryFile);

			ArrayList<NexacroServiceInfo> result = service.multiSave(saveList, paramMap);
			if( result != null && result.size() > 0 ) {
				NexacroServiceInfo resultInfo = result.get(0);
				List<Map> rtnList = resultInfo.getData();

				Map rtnMap = null;
				if( null != rtnList && rtnList.size() > 0 ){
					rtnMap = rtnList.get(0);
					rtnInfo = resultInfo;
					sUserCd = ( "".equals(sUserCd) ) ? TakeStringUtil.nvl(rtnMap.get("USER_CD"), "") : sUserCd;
				}
			}

			//ArrayList<Map> rtnList = service.multiSave(saveList, false, null, paramMap);
			//Map rtnMap = null;
			//if( null != rtnList && rtnList.size() > 0 ){
			//	rtnMap = rtnList.get(0);
			//	sUserCd = ( "".equals(sUserCd) ) ? TakeStringUtil.nvl(rtnMap.get("USER_CD"), "") : sUserCd;
			//}

			//ArrayList<Map> rtnList2 = TakeNexacroUtil.getRtnDataset(rtnList, dsUserDetail);

			//rtnInfo.setData(rtnList2);
			rtnInfo.setDatasetName("dsUserDetail");

			if( dsFile != null && dsFile.getRowCount() > 0 ){
				ArrayList<Map> rtnFileList = commonService.uploadImage(dsFile, paramMap);
				Map rtnfileMap = rtnFileList.get(0);

				Map userMap = paramMap;
				userMap.put("USER_CD", sUserCd);
				userMap.put("USER_IMG"		, TakeStringUtil.nvl(rtnfileMap.get("ATTACH_CD")));
				userMap.put("_sessionUserCd", TakeStringUtil.nvl(paramMap.get("_sessionUserCd")));
				service.update("UserManagement.userInfoImageUpdate", userMap);
			}
//		} catch (Exception e) {
//			// TODO: handle exception
//			e.printStackTrace();
//		}
		return rtnInfo;
	}

	/* base64로 되있는 이미지를 파일로변환 후 업로드 실행 */
	public static File binaryToFile(String binaryFile, String filePath, String fileName) throws Exception {
		binaryFile = binaryFile.replace("data:image/png;base64,", "");

	    if ((binaryFile == null || "".equals(binaryFile)) || (filePath == null || "".equals(filePath))
	            || (fileName == null || "".equals(fileName))) { return null; }

	    FileOutputStream fos = null;

	    File fileDir = new File(filePath);
	    if (!fileDir.exists()) {
	        fileDir.mkdirs();
	    }

	    File destFile = new File(filePath + fileName);

//	    if(true) {
//	    	throw new TakeException("에러!!!");
//	    }

	    byte[] buff = binaryFile.getBytes();
	    String toStr = new String(buff);
	    byte[] b64dec = Base64.decodeBase64(toStr);

	    try {
	        fos = new FileOutputStream(destFile);
	        fos.write(b64dec);
	        fos.close();
	    } catch (IOException e) {
	    	logger.error(e.getMessage());
	    } finally {
			if( fos != null ) {
				try {
					fos.close();
				} catch (Exception e2) {
				}
			}
		}

	    return destFile;
	}

	public static String fileToBinary(File file) {
		try {
			byte[] fileArray = FileUtils.readFileToByteArray(file);
			return Base64Utils.encodeToUrlSafeString(fileArray);
		} catch (IOException ie) {
			logger.error(ie.getMessage());
		}

		return null;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void userInfoDelete(DataSetList dataSets, Map<String, String> paramMap) throws TakeException {
		DataSet dsUserDetail = dataSets.get("dsUserDetail");
		
		NexacroServiceInfo saveInfo = new NexacroServiceInfo();
		saveInfo.setDataset(dsUserDetail);
		saveInfo.setDatasetName("dsUserDetail");
		saveInfo.setServiceNamespace("UserManagement.userInfo");

		ArrayList saveList = new ArrayList();
		saveList.add(saveInfo);

		service.multiSave(saveList);

		Map data = new HashMap();
		data.put("ATTACH_CD", dsUserDetail.getString(0, "USER_IMG"));
		data.put("_sessionUserCd", TakeStringUtil.nvl(paramMap.get("_sessionUserCd")));

		service.delete("SystemCommon.attachInfoFileDelete", data);
		service.delete("SystemCommon.attachInfoDelete", data);
//		String fullFilePath = fileUploadPath + File.separator + sFileType;
//		File serverFile = new File(fullFilePath + File.separator + sFileSaveNm);
//		if( serverFile.exists() ){
//			serverFile.delete();
//		}
	}

	@Transactional (value="ChainedTxManager", rollbackFor = { Exception.class })
	public void deptInfoSave(DataSetList dsList, Map paramMap) {
		
		DataSet dsDeptList = dsList.get("dsDeptList");
		
		if( dsDeptList != null ){
			for( int i=0; i<dsDeptList.getRowCount(); i++ ){
				Map data = TakeNexacroUtil.datasetToMap(dsDeptList, i, paramMap);
				if (dsDeptList.getRowType(i) == DataSet.ROW_TYPE_INSERTED) {
					takeDao.insert("UserManagement.deptInfoInsert", data);
				} else if (dsDeptList.getRowType(i) == DataSet.ROW_TYPE_UPDATED) {
					takeDao.update("UserManagement.deptInfoUpdate", data);
				} else if (dsDeptList.getRowType(i) == DataSet.ROW_TYPE_DELETED) {
					takeDao.delete("UserManagement.deptInfoDelete", data);
				}
			}

			for( int i=0; i<dsDeptList.getRemovedRowCount(); i++ ){
				Map data = TakeNexacroUtil.removeDatasetToMap(dsDeptList, i, paramMap);
				takeDao.delete("UserManagement.deptInfoDelete", data);
			}
		}
	}
}
