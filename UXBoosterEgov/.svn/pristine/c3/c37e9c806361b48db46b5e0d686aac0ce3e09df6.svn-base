package kr.co.takeit.common.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.nexacro.java.xapi.data.DataSet;

import kr.co.takeit.common.service.FileService;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.util.SessionManager;
import kr.co.takeit.util.TakeFileUtil;
import kr.co.takeit.util.TakeStringUtil;

/**
 * 첨부파일 공통
 * @filename kr.co.takeit.common.controller.FileController.java
 * @author Takeit
 * @since 2020.04.13
 * @version 1.0
 * @see
 *
 */
@Controller
@RequestMapping("/file/*")
public class FileController {

	private static final Logger logger = LoggerFactory.getLogger(FileController.class);

	@Autowired
	SessionManager sessionMgr;

	@Autowired
	FileService service;

	/**
	 * 파일 업로드 경로
	 */
	@Value("#{application['file.upload.path']}")
	private String fileUploadPath;

	@PostMapping( "/uploadMulti" )
	public String uploadMulti(
			/* @RequestParam("email") String email */
			/* , @RequestParam("file1") MultipartFile file */
			/* @RequestParam(required=false) List<MultipartFile> file */
			/* @RequestParam("file") MultipartFile file */
			@RequestPart(required = false) List<MultipartFile> file) {
		/*
		 * String url = fileUploadService.restore(file);
		 */
		return "result";
	}

	/**
	 * Mime-Type 조회
	 *
	 * @param fileName
	 * @return Mimetype
	 */
	public String getMimeType(String fileName) {
		String extName = TakeFileUtil.getFileExtension(fileName).toLowerCase();

		if (extName.equals(".pdf")) {
			return "application/pdf";
		} else if (extName.equals(".xlsx")) {
			return "application/vnd.ms-excel";
		} else if (extName.equals(".xls")) {
			return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
		} else if (extName.equals(".ppt")) {
			return "application/vnd.ms-powerpoint";
		} else if (extName.equals(".pptx")) {
			return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
		} else if (extName.equals(".gif")) {
			return "image/gif";
		} else if (extName.equals(".png")) {
			return "image/png";
		} else if (extName.equals(".bmp")) {
			return "image/bmp";
		} else if (extName.equals(".jpg")) {
			return "image/jpeg";
		} else if (extName.equals(".jpeg")) {
			return "image/jpeg";
		} else if (extName.equals(".tif")) {
			return "image/tiff";
		} else if (extName.equals(".doc")) {
			return "application/msword";
		} else if (extName.equals(".docx")) {
			return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
		} else {
			return "application/octet-stream";
		}
	}

	/**
	 * ATTACH_INFO 신규첨부파일코드 생성 후 조회
	 *
	 * @param request
	 * @param response
	 */
	@PostMapping("getAtchFileId.do")
	public void getAtchFileId(HttpServletRequest request, HttpServletResponse response) throws Exception {
		NexacroServiceManager manager = new NexacroServiceManager();

		manager.setRequest(request);

		Map<String, String> fileParams = new HashMap<String, String>();
		fileParams.put("ATTACH_TYPE"	, TakeStringUtil.nvl(manager.getParamMap().get("atchFileTypeCd")));
		fileParams.put("_sessionUserCd"	, TakeStringUtil.nvl(sessionMgr.getUserCd(request)));

		Map<String, String> atchFileId = service.getAtchFileId(fileParams);

		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		rtnInfo.setData(Collections.singletonList(atchFileId));
		rtnInfo.setDatasetName("dsAtchFileId");

		manager.response(response, rtnInfo);
	}

	/**
	 * ATTACH_INFO 첨부파일 목록 조회
	 *
	 * @param request
	 * @param response
	 */
	@PostMapping("getAtchFileList.do")
	public void getAtchFileList(HttpServletRequest request, HttpServletResponse response) throws Exception {
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		Map<String, Object> fileParams = new HashMap<String, Object>();
		fileParams.put("ATTACH_CD"	, TakeStringUtil.nvl(manager.getParamMap().get("atchFileId")));

		List<LinkedHashMap<String, Object>> list = service.getAtchFileList(fileParams);

		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		rtnInfo.setData(list);
		rtnInfo.setDatasetName("dsFile");

		manager.response(response, rtnInfo);
	}

	/**
	 * ATTACH_INFO 파일 업로드
	 *
	 * @param request
	 * @param response
	 */
	@PostMapping("uploadAtchFile.do")
	public void uploadAtchFile(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("common uploadAtchFile");

        NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);

		List<Map<String, Object>> fileList = service.uploadAtchFile(request);

		NexacroServiceInfo info = new NexacroServiceInfo();
		info.setData(fileList);
		info.setDatasetName("dsFileResult");

		manager.response(response, info);
	}

	/**
	 * ATTACH_INFO 파일 추가/삭제 정보 DB저장
	 *
	 * @param request
	 * @param response
	 * @throws TakeException
	 */
	@PostMapping("saveAtchFile.do")
	public void saveAtchFile(HttpServletRequest request, HttpServletResponse response) throws TakeException {
		logger.info("common saveAtchFile");

		NexacroServiceManager manager = new NexacroServiceManager();

		manager.setRequest(request);
		DataSet ds = manager.getDataSet("dsFile");


		List<Map<String, Object>> dsFileList = getDataSetRows(request, ds);
		service.saveAtchFile(dsFileList);

		Map<String, Object> fileParams = new HashMap<String, Object>();
		fileParams.put("ATTACH_CD", TakeStringUtil.nvl(dsFileList.get(0).get("ATTACH_CD")));

		List<LinkedHashMap<String, Object>> list = service.getAtchFileList(fileParams);
		NexacroServiceInfo rtnInfo = new NexacroServiceInfo();
		rtnInfo.setData(list);
		rtnInfo.setDatasetName("dsFile");

		manager.response(response, rtnInfo);
	}

	/**
	 * ATTACH_INFO 파일 다운로드
	 *
	 * @param request
	 * @param response
	 * @param atchFileId
	 * @param fileSeq
	 * @throws TakeException
	 */
	@RequestMapping(value = "downloadAtchFile.do", produces = "text/html; charset=utf8")
	public void downloadAtchFile(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "atchFileId") String atchFileId,
			@RequestParam(value = "fileSeq") String fileSeq,
			@RequestParam(value = "isDirect", required = false) String isDirect) throws IOException {

		logger.info("common downloadAtchFile");

		Map<String, Object> fileParams = new HashMap<String, Object>();
		fileParams.put("ATTACH_CD"	, atchFileId);
		fileParams.put("FILE_SEQ"	, fileSeq);

		List<LinkedHashMap<String, Object>> list = service.getAtchFileList(fileParams);
		for(LinkedHashMap<String, Object> fileInfo : list) {
			String filePath		= fileInfo.get("FILE_PATH").toString();
			String fileSaveNm	= fileInfo.get("FILE_SAVE_NM").toString();
			String fileNm		= fileInfo.get("FILE_NM").toString();

			String saveDirPath = TakeFileUtil.generalizePath(fileUploadPath + filePath + File.separator + fileSaveNm);

			logger.debug(saveDirPath);

			service.download(response, saveDirPath, fileNm, "Y".equals(isDirect));
		}
	}

	/**
	 * ATTACH_INFO 파일 압축 다운로드
	 *
	 * @param request
	 * @param response
	 * @param atchFileId
	 * @param fileSeq
	 * @throws TakeException
	 */
	@PostMapping(value = "downloadZipAtchFile.do", produces = "text/html; charset=utf8")
	public void downloadZipAtchFile(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam(value = "atchFileId") String atchFileId,
			@RequestParam(value = "fileSeq") String fileSeq) throws IOException {

		logger.info("common downloadAtchFile");

		Map<String, Object> fileParams = new HashMap<String, Object>();
		fileParams.put("ATTACH_CD"		, atchFileId);
		fileParams.put("FILE_SEQ_LIST"	, fileSeq);

		List<LinkedHashMap<String, Object>> list = service.getAtchFileList(fileParams);
		service.downloadZip(response, list, atchFileId + ".zip");
	}

	public List<Map<String, Object>> getDataSetRows(HttpServletRequest request, DataSet dataSet) {
		List<Map<String, Object>> rows = new ArrayList<Map<String, Object>>();

		for (int i = 0; i < dataSet.getRemovedRowCount(); i++) {
			Map<String, Object> dataSetRow = new HashMap<String, Object>();

			for (int j = 0; j < dataSet.getColumnCount(); j++) {
				dataSetRow.put(dataSet.getColumn(j).getName(), dataSet.getRemovedData(i, dataSet.getColumn(j).getName()));
			}

			//세션 추가
			dataSetRow.put("_sessionUserCd"	, TakeStringUtil.nvl(sessionMgr.getUserCd(request)));
			dataSetRow.put("_rowtype_", DataSet.ROW_TYPE_DELETED);

			rows.add(dataSetRow);
		}

		for (int i = 0; i < dataSet.getRowCount(); i++) {
			Map<String, Object> dataSetRow = new HashMap<String, Object>();

			for (int j = 0; j < dataSet.getColumnCount(); j++) {
				dataSetRow.put(dataSet.getColumn(j).getName(), dataSet.getObject(i, dataSet.getColumn(j).getName()));
			}

			//세션 추가
			dataSetRow.put("_sessionUserCd"	, TakeStringUtil.nvl(sessionMgr.getUserCd(request)));
			dataSetRow.put("_rowtype_", dataSet.getRowType(i));
			rows.add(dataSetRow);
		}

		return rows;
	}
}
