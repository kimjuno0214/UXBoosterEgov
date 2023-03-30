package kr.co.takeit.common.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.nexacro.java.xapi.data.DataSet;

import kr.co.takeit.exception.TakeException;
import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.util.SessionManager;
import kr.co.takeit.util.TakeFileUtil;
import kr.co.takeit.util.TakeStringUtil;

/**
 * @author glorial
 *
 */
@Service
public class FileService {

	private static final Logger logger = LoggerFactory.getLogger(FileService.class);

	@Autowired
	TakeDAO takeDao;

	@Autowired
	SessionManager sessionMgr;

	/**
	 * 파일 업로드 경로
	 */
	@Value("#{application['file.upload.path']}")
	private String fileUploadPath;

	/**
	 * 서버 임시 경로
	 */
	@Value("#{application['tmp.upload.path']}")
	private String tmpUploadPath;

	/**
	 * 파일 전체삭제
	 *
	 * @param filelist
	 * @throws IOException
	 */
	@Transactional (value="ChainedTxManager")
	public void deleteAll(String attachCd) throws Exception {
		Map<String, String> fileParams = new HashMap<String, String>();
		fileParams.put("ATTACH_CD", attachCd);

		List<LinkedHashMap<String, Object>> filelist = takeDao.select("File.attachInfoSelect", fileParams);
		this.deleteAll(filelist);
	}

	/**
	 * 파일 전체삭제
	 *
	 * @param filelist
	 * @throws Exception
	 */
	@Transactional (value="ChainedTxManager")
	public void deleteAll(List<LinkedHashMap<String, Object>> filelist) throws Exception {
		ServletRequestAttributes attr = (ServletRequestAttributes)RequestContextHolder.currentRequestAttributes();
		String sessionUserCd = sessionMgr.getUserCd(attr.getRequest());

		for(Map<String, Object> fileInfo : filelist) {
			fileInfo.put("_sessionUserCd", sessionUserCd);

			takeDao.update("File.attachInfoFileDelete", fileInfo);

			//첨부파일 삭제
			try {
				deletePhysicalFile(fileInfo);
			} catch (Exception e) {
				//에러 방지
				logger.error("첨부파일 삭제 오류", e);
			}
		}
	}

	/**
	 * 물리 파일 삭제
	 *
	 * @param fileInfo
	 * @throws TakeException
	 */
	private void deletePhysicalFile(Map<String, Object> fileInfo) throws Exception {
		String filePath = fileUploadPath + File.separator + (String)fileInfo.get("FILE_PATH") + File.separator;
			   filePath = TakeFileUtil.generalizePath(filePath);
			   filePath = filePathReplaceAll(filePath);
		String fileName = (String)fileInfo.get("FILE_SAVE_NM");
			   fileName = filePathReplaceAll(fileName);

		File deleteFile = new File(FilenameUtils.getFullPath(filePath), FilenameUtils.getName(fileName));
		if(deleteFile.exists() && deleteFile.isFile()) {
			TakeFileUtil.deleteFile(deleteFile);
		}
	}

	/**
	 * ATTACH_INFO 신규첨부파일코드 생성 후 조회
	 *
	 * @param params
	 * @return
	 */
	public Map<String, String> getAtchFileId(Map<String, String> params) {
		int result = takeDao.commitInsert("File.attachInfoInsert", params);
		if(result > 0) {
			Map<String, String> atchFileInfo = new HashMap<>();
			atchFileInfo.put("ATCHFILEID", TakeStringUtil.nvl(params.get("maxCd")));
			return atchFileInfo;
		}

		return null;
	}

	/**
	 * ATTACH_INFO 파일 목록 조회
	 *
	 * @param params
	 * @return
	 */
	public List<LinkedHashMap<String, Object>> getAtchFileList(Map<String, Object> params) {
		return takeDao.select("File.attachInfoSelect", params);
	}

	/**
	 * ATTACH_INFO 파일 업로드
	 *
	 * @param request
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> uploadAtchFile(HttpServletRequest request) throws Exception {
		String projectCd		= TakeStringUtil.nvl(request.getParameter("projectCd"));
		String menuCd			= TakeStringUtil.nvl(request.getParameter("menuCd"));
		String atchFileId		= TakeStringUtil.nvl(request.getParameter("atchFileId"));

		MultipartHttpServletRequest mreq = (MultipartHttpServletRequest) request;

		String projectDirPath = File.separator + projectCd + File.separator + menuCd + File.separator + atchFileId;
			   projectDirPath = filePathReplaceAll(projectDirPath);

		String saveDirPath = fileUploadPath + projectDirPath + File.separator;
			   saveDirPath = TakeFileUtil.generalizePath(saveDirPath);
			   saveDirPath = FilenameUtils.getFullPath(saveDirPath);

		TakeFileUtil.ensureDirectory(saveDirPath);
		logger.debug("upload경로:{}", saveDirPath);

		List<Map<String, Object>> fileList = new ArrayList<Map<String,Object>>();

		Iterator<String> iter = mreq.getFileNames();
		while(iter.hasNext()) {
			String fileInputName	= iter.next();	//XSS 필터 하지 않아야 함
			String fileSaveName 	= TakeFileUtil.getUuid() + "." + FilenameUtils.getExtension(fileInputName);	//파일명 - 서버 저장용

			MultipartFile mFile = mreq.getFile(fileInputName);
			mFile.transferTo(new File(saveDirPath, fileSaveName));

			String fileOrgName = filePathReplaceAll(mFile.getOriginalFilename());	//파일명 - 원본
			logger.debug(fileInputName + "::::::::" + fileOrgName);

			Map<String, Object> fileInfo = new HashMap<String, Object>();
			fileInfo.put("FILE_INPUT_NM"	, fileInputName);
			fileInfo.put("FILE_SAVE_NM"		, fileSaveName);
			fileInfo.put("FILE_NM"			, fileOrgName);
			fileInfo.put("FILE_PATH"		, projectDirPath);

			fileList.add(fileInfo);
		}

		return fileList;
	}

	/**
	 * 상대경로가 포함된 파일명 필터링
	 *
	 * @param value
	 * @return
	 */
	public static String filePathReplaceAll(String value) {
		if (!StringUtils.hasText(value)) return "";
		return value.replaceAll("\\.\\.", "");
	}

	/**
	 * ATTACH_INFO 파일 추가/삭제
	 *
	 * @param filelist
	 * @throws TakeException
	 */
	@Transactional (value="ChainedTxManager")
	public void saveAtchFile(List<Map<String, Object>> filelist){
		for(Map<String, Object> fileInfo : filelist) {
			int rowType = (int)fileInfo.get("_rowtype_");

			if(rowType == DataSet.ROW_TYPE_INSERTED) {
				takeDao.insert("File.attachInfoFileInsert", fileInfo);
			}else if(rowType == DataSet.ROW_TYPE_UPDATED) {
				takeDao.update("File.attachInfoFileUpdate", fileInfo);
			}else if(rowType == DataSet.ROW_TYPE_DELETED) {
				takeDao.update("File.attachInfoFileDelete", fileInfo);

				//첨부파일 삭제
				try {
					deletePhysicalFile(fileInfo);
				} catch (Exception e) {
					//에러 방지
					logger.error("첨부파일 삭제 오류", e);
				}
			}
		}
	}

	/**
	 * 다운로드 처리
	 *
	 * @param response
	 * @param filePath
	 * @param downName
	 * @throws IOException
	 */
	public void download(HttpServletResponse response, String filePath, String downName, boolean isInline) throws IOException{
		response.reset();
		File f = new File(FilenameUtils.getFullPath(filePathReplaceAll(filePath)), FilenameUtils.getName(filePathReplaceAll(filePath)));
		long len = f.length();

		/*String browser = request.getHeader("User-Agent"); //파일 인코딩
		if(browser.contains("MSIE") || browser.contains("Trident") || browser.contains("Chrome")){
			downName = URLEncoder.encode(downName, StandardCharsets.UTF_8.name());
		}else{
			downName = new String(downName.getBytes(StandardCharsets.UTF_8.name()), StandardCharsets.ISO_8859_1.name());
		}
		downName = downName.replaceAll("\\+", " ");
		response.setContentType("application/octet-stream");
		response.setContentLength((int) len);
		response.setHeader("content-disposition","attachment;filename=\""+downName+ "\"");*/

		if(!isInline) {
    		downName = URLEncoder.encode(downName,"UTF-8").replace("+", "%20");
    		response.setContentType("application/octet-stream");
    		response.setHeader("Content-Disposition", "attachment;fileName=" + downName + ";filename*= UTF-8''" + downName);
		} else {
			response.setContentType("application/pdf");
			response.setHeader("Content-Disposition", "inline;");
    	}

		response.setContentLength((int) len);

		try(
			FileInputStream fis = new FileInputStream(f);
			ServletOutputStream os = response.getOutputStream()
		){
			FileCopyUtils.copy(fis, os);
			os.flush();
		} catch (IOException ioe) {
			throw ioe;
		}
	}

	/**
	 * ZIP 다운로드 처리
	 *
	 * @param response
	 * @param list
	 * @param downName
	 * @throws IOException
	 */
	public void downloadZip(HttpServletResponse response, List<LinkedHashMap<String, Object>> list, String downName) throws IOException {

		response.reset();
		response.setContentType("application/zip");
		response.setHeader("Content-Disposition", "attachment;fileName=" + downName);
		//response.setContentLength((int) len);

		try (
			ServletOutputStream os = response.getOutputStream();
		    ZipOutputStream zout = new ZipOutputStream(os, Charset.forName("UTF-8"));
		) {

			for(LinkedHashMap<String, Object> fileInfo : list) {
				String filePath		= fileInfo.get("FILE_PATH").toString();
				String fileSaveNm	= fileInfo.get("FILE_SAVE_NM").toString();
				String fileNm		= fileInfo.get("FILE_NM").toString();

				File file = new File(
						FilenameUtils.getFullPath(filePathReplaceAll(TakeFileUtil.generalizePath(fileUploadPath + filePath + File.separator)))
						, FilenameUtils.getName(filePathReplaceAll(fileSaveNm)));

				ZipEntry zipEntry = new ZipEntry(fileNm);
		        zout.putNextEntry(zipEntry);

	        	FileInputStream fin = new FileInputStream( file );
	        	int length;
	        	byte[] buffer = new byte[1024];
	            // input file을 1024바이트로 읽음, zip stream에 읽은 바이트를 씀
	            while((length = fin.read(buffer)) > 0){
	                zout.write(buffer, 0, length);
	            }
	            zout.closeEntry();
	            fin.close();
			}
		} finally {
			response.flushBuffer();
		}
	}

	/**
	 * 파일삭제 스케쥴러
	 * 매일 새벽 1시에 7일 경과한(지난주) 임시파일 삭제
	 */
	//@Scheduled(cron = "0 0 1 * * *")
	public void deleteScheduledJob() {
		logger.info("temporary path deleteScheduledJob start : {}", tmpUploadPath);
		try {
			deleteFile(60 * 60 * 24 * 5, tmpUploadPath);
		} catch (Exception e) {
		}
		logger.info("deleteScheduledJob finished");
	}

	/**
	 * 폴더안의 파일 삭제 후 폴더 삭제여부 판단
	 * @param dir
	 * @param directoryDelete
	 * @throws IOException
	 */
	public void deleteFile( int sec, String dir) throws IOException {
		File f = new File(TakeFileUtil.generalizePath(filePathReplaceAll(dir)));

		if (f != null && f.isDirectory()) {
			File[] list = f.listFiles();
			if (list != null) {
				for (int i = 0; i < list.length; i++) {
					if (list[i].isDirectory()) {
						// 재귀호출
						deleteFile(sec, dir + File.separator + list[i].getName());
					} else {
						long fModify = getModifiedTime(list[i]);
						if (fModify > sec) {
							list[i].delete();
							logger.info("temp file delete : {},  modify time(s) : ", new Object[] { list[i].getName(), fModify });
						}
					}
				}
			}
		}
	}

	/**
	 * 파일 수정일자 조회
	 * @param f
	 * @return
	 * @throws IOException
	 */
	private long getModifiedTime(File f) throws IOException {
		Path attribPath = f.toPath();
		BasicFileAttributes basicAttribs = Files.readAttributes(attribPath, BasicFileAttributes.class);
		return (System.currentTimeMillis() - basicAttribs.lastModifiedTime().to(TimeUnit.MILLISECONDS)) / 1000;
	}
}