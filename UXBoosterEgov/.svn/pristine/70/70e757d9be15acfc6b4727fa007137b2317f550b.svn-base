package kr.co.takeit.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;

@Controller
public class PushUtil {

	private static final Logger logger = LoggerFactory.getLogger(PushUtil.class);

	public Map<String, String> send(String pushUrl, String serverKey, String to, String title, String body, String seq, String projectCd, String sMenuCd){
		/*
		 *
		 * SEND() ===>> SENDJSON()으로 변경 예정
		 *
		 *
		 */
		Map<String, String> sendMap = new HashMap<String, String>();
		System.out.println("# Send URL" + pushUrl);
		System.out.println("# Send TITLE" + title);
		System.out.println("# Send SEQ" + seq);
		System.out.println("# Send PROJECTCD" + projectCd);
		logger.info("# " + new java.util.Date());

		StringBuffer result = new StringBuffer();
        URL url 			= null;
        OutputStream os 	= null;
        BufferedReader in	= null;

        try{
	        url = new URL( pushUrl );
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setDoOutput(true);
	        conn.setRequestMethod("POST");
	        conn.setRequestProperty("Content-Type", "application/json");
	        conn.setRequestProperty("Authorization", "key=" + serverKey);

	        conn.setDoOutput(true);

	        String input = "";
	        // ### 안드로이드와 IOS는 푸시 보내는 메세지가 다름
	        JSONObject dataJson = new JSONObject();
			dataJson.put("title"	, title);
			dataJson.put("body"		, body);
			dataJson.put("projectCd"	, projectCd);
			dataJson.put("menuCd", sMenuCd);

			//일반 푸쉬 or 공지사항 푸쉬 분기처리
	        switch (sMenuCd) {
			case "M":
				dataJson.put("seq"	, seq);
				break;
			case "normal":

			default:
				break;
			}

			JSONObject pushJson = new JSONObject();
			pushJson.put("to"				, to);
			pushJson.put("content_available", true);
			pushJson.put("priority"			, "high");
			pushJson.put("data"				, dataJson);

			input = pushJson.toJSONString();

	        os = conn.getOutputStream();

	        // 서버에서 날려서 한글 깨지는 사람은 아래처럼  UTF-8로 인코딩해서 날려주자
	        os.write(input.getBytes("UTF-8"));
	        os.flush();

	        int responseCode = conn.getResponseCode();

	        logger.info("\nSending 'POST' request to URL : " + url);
	        logger.info("Post parameters : " + input);
	        logger.info("Response Code : " + responseCode);

	        in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        String inputLine;

	        while ((inputLine = in.readLine()) != null) {
	        	result.append(inputLine);
	        }

	        if( responseCode == 200 ){	// 성공
	        	JSONParser parser = new JSONParser();
	    		JSONObject jsonObj = (JSONObject)parser.parse(result.toString());

	    		if( ((Long)jsonObj.get("success")).longValue() == 1 ){
	    			logger.info("# 성공");

	    			sendMap.put("SEND_STATUS"	, "SUCC");
	    			sendMap.put("SEND_MSG"	, "");
	    		}else{
	    			JSONArray arr = (JSONArray)jsonObj.get("results");
	    			JSONObject jsonResult = (JSONObject)arr.get(0);
	    			logger.info("# 에러:" + jsonResult.get("error"));

	    			sendMap.put("SEND_STATUS"	, "ERR");
	    			sendMap.put("SEND_MSG"	, (String)jsonResult.get("error"));
	    		}
	        }else{	// 실패
	        	logger.info("# 실패");

	        	sendMap.put("SEND_STATUS"	, "ERR");
    			sendMap.put("SEND_MSG"	, String.valueOf(responseCode));
	        }

        }catch(MalformedURLException ex){
        	sendMap.put("SEND_STATUS"	, "ERR");
			sendMap.put("SEND_MSG"	, ex.getMessage());

        	logger.error(ex.getMessage());
        }catch(IOException ex){
        	sendMap.put("SEND_STATUS"	, "ERR");
			sendMap.put("SEND_MSG"	, ex.getMessage());

        	logger.error(ex.getMessage());
        }catch(Exception ex){
        	sendMap.put("SEND_STATUS"	, "ERR");
			sendMap.put("SEND_MSG"	, ex.getMessage());

        	logger.error(ex.getMessage());
        }finally{
        	if( in != null ) try{ in.close(); }catch(IOException ex){}
        	if( os != null ) try{ os.close(); }catch(IOException ex){}
        }

        return sendMap;
	}

public Map<String, String> sendJson(String pushUrl, String serverKey, String to, JSONObject jsonData){

		Map<String, String> sendMap = new HashMap<String, String>();

		System.out.println("# Send URL" + pushUrl);
		System.out.println("# Send TITLE" + jsonData.get("title"));
		System.out.println("# Send PROJECTCD" + jsonData.get("projectCd"));
		logger.info("# " + new java.util.Date());

		StringBuffer result = new StringBuffer();
        URL url 			= null;
        OutputStream os 	= null;
        BufferedReader in	= null;

        try{
	        url = new URL( pushUrl );
	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	        conn.setDoOutput(true);
	        conn.setRequestMethod("POST");
	        conn.setRequestProperty("Content-Type", "application/json");
	        conn.setRequestProperty("Authorization", "key=" + serverKey);

	        conn.setDoOutput(true);

	        String input = "";
	        // ### 안드로이드와 IOS는 푸시 보내는 메세지가 다름

			JSONObject pushJson = new JSONObject();
			pushJson.put("to"				, to);
			pushJson.put("content_available", true);
			pushJson.put("priority"			, "high");
			pushJson.put("data"				, jsonData);

			input = pushJson.toJSONString();

	        os = conn.getOutputStream();

	        // 서버에서 날려서 한글 깨지는 사람은 아래처럼  UTF-8로 인코딩해서 날려주자
	        os.write(input.getBytes("UTF-8"));
	        os.flush();

	        int responseCode = conn.getResponseCode();

	        logger.info("\nSending 'POST' request to URL : " + url);
	        logger.info("Post parameters : " + input);
	        logger.info("Response Code : " + responseCode);

	        in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        String inputLine;

	        while ((inputLine = in.readLine()) != null) {
	        	result.append(inputLine);
	        }

	        if( responseCode == 200 ){	// 성공
	        	JSONParser parser = new JSONParser();
	    		JSONObject jsonObj = (JSONObject)parser.parse(result.toString());

	    		if( ((Long)jsonObj.get("success")).longValue() == 1 ){
	    			logger.info("# 성공");

	    			sendMap.put("SEND_STATUS"	, "SUCC");
	    			sendMap.put("SEND_MSG"	, "");
	    		}else{
	    			JSONArray arr = (JSONArray)jsonObj.get("results");
	    			JSONObject jsonResult = (JSONObject)arr.get(0);
	    			logger.info("# 에러:" + jsonResult.get("error"));

	    			sendMap.put("SEND_STATUS"	, "ERR");
	    			sendMap.put("SEND_MSG"	, (String)jsonResult.get("error"));
	    		}
	        }else{	// 실패
	        	logger.info("# 실패");

	        	sendMap.put("SEND_STATUS"	, "ERR");
    			sendMap.put("SEND_MSG"	, String.valueOf(responseCode));
	        }

        }catch(MalformedURLException ex){
        	sendMap.put("SEND_STATUS"	, "ERR");
			sendMap.put("SEND_MSG"	, ex.getMessage());

        	logger.error(ex.getMessage());
        }catch(IOException ex){
        	sendMap.put("SEND_STATUS"	, "ERR");
			sendMap.put("SEND_MSG"	, ex.getMessage());

        	logger.error(ex.getMessage());
        }catch(Exception ex){
        	sendMap.put("SEND_STATUS"	, "ERR");
			sendMap.put("SEND_MSG"	, ex.getMessage());

        	logger.error(ex.getMessage());
        }finally{
        	if( in != null ) try{ in.close(); }catch(IOException ex){}
        	if( os != null ) try{ os.close(); }catch(IOException ex){}
        }

        return sendMap;
	}

}
