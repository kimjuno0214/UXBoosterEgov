package kr.co.doore.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;

import kr.co.takeit.util.JsonUtil;
import kr.co.takeit.exception.TakeException;
import kr.co.takeit.nexacro.NexacroServiceInfo;
import kr.co.takeit.nexacro.NexacroServiceManager;

@Controller
@RequestMapping("/doore/*")
public class OpenApiController {

	private static final Logger logger = LoggerFactory.getLogger(OpenApiController.class);
	
	/**
	 * parameter map을 사용한 단건 insert update delete 처리
	 *
	 * @param request	HttpServletRequest 객체
	 * @param response	HttpServletResponse 객체
	 * @throws IOException 
	 * @throws ParseException 
	 * @throws TakeException 
	 * @throws ClientProtocolException 
	 */
	@RequestMapping(value = "openApi.do", method = RequestMethod.POST)
	public void openApi(HttpServletRequest request, HttpServletResponse response) throws IOException, ParseException, TakeException {
		
		// 파라이터 세팅
		NexacroServiceManager manager = new NexacroServiceManager();
		manager.setRequest(request);
		Map paramMap = manager.getParamMap();
		String conditionKey = (String)paramMap.get("conditionKey");
		String conditionValue = (String)paramMap.get("conditionValue");
		String apiType = (String)paramMap.get("apiType");
		
		 System.out.println(conditionKey);
		 System.out.println(conditionValue);
		 System.out.println(apiType);
		
		 StringBuilder urlBuilder = null;
		 
		 // 인증정보 조회
		 if(apiType.equals("main"))
		 {	 
			 // 1. URL을 만들기 위한 StringBuilder.
			 urlBuilder = new StringBuilder("http://www.safetykorea.kr/openapi/api/cert/certificationList.json"); /*URL*/
			 // 2. 오픈 API의요청 규격에 맞는 파라미터 생성, 발급받은 인증키.
			 urlBuilder.append("?" + URLEncoder.encode("conditionKey") + "=" + URLEncoder.encode(conditionKey));
		     urlBuilder.append("&" + URLEncoder.encode("conditionValue") + "=" + URLEncoder.encode(conditionValue));
		 }
		 // 인증세부정보 조회
		 else 
		 {
			 // 1. URL을 만들기 위한 StringBuilder.			 
			 urlBuilder = new StringBuilder("http://www.safetykorea.kr/openapi/api/cert/certificationDetail.json"); /*URL*/
			// 2. 오픈 API의요청 규격에 맞는 파라미터 생성, 발급받은 인증키.
			 urlBuilder.append("?" + URLEncoder.encode("certNum") + "=" + URLEncoder.encode(conditionValue));
		 }
			 
        // 3. URL 객체 생성.
        URL url = new URL(urlBuilder.toString());
        // 4. 요청하고자 하는 URL과 통신하기 위한 Connection 객체 생성.
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestProperty("AuthKey", "21ddaf52-32fd-41dc-9dad-5fc2f6493275");
        // 5. 통신을 위한 메소드 SET.
        conn.setRequestMethod("GET");
        // 6. 통신을 위한 Content-type SET. 
        conn.setRequestProperty("Content-type", "application/json");
        // 7. 통신 응답 코드 확인.
        System.out.println("Response code: " + conn.getResponseCode());
        // 8. 전달받은 데이터를 BufferedReader 객체로 저장.

        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream(),"UTF-8"));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream(),"UTF-8"));
        }
        // 9. 저장된 데이터를 라인별로 읽어 StringBuilder 객체로 저장.
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        // 10. 객체 해제.
        rd.close();
        conn.disconnect();
        // 11. 전달받은 데이터 확인.
        System.out.println(sb);
        JSONParser jsonParser = null;
        JSONObject jsonObj = null;
        JSONArray mapObj = null;
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        Map<String, Object> map = null;
        
		ArrayList<NexacroServiceInfo> dataSetList = new ArrayList<NexacroServiceInfo>();
		
        if(apiType.equals("main"))
        {
        	jsonParser = new JSONParser();
        	jsonObj = (JSONObject)jsonParser.parse(sb.toString());
        	mapObj = (JSONArray)jsonObj.get("resultData");
        	if( mapObj != null )
            {
            	int jsonSize = mapObj.size();
    	        for( int i = 0; i < jsonSize; i++ )
    	        {
    	            map = JsonUtil.getMapFromJsonObject( ( JSONObject ) mapObj.get(i) );
    	            list.add( map );
    	        }
        	}
        	dataSetList.add(new NexacroServiceInfo("dsApiMain", list));
        }  
        else 
        {
        	jsonParser = new JSONParser();
        	jsonObj = (JSONObject)jsonParser.parse(sb.toString());
        	
        	JSONObject resultData = (JSONObject)jsonObj.get("resultData");
        	
        	map = JsonUtil.getMapFromJsonObject( ( JSONObject )resultData);
        	
            list.add( map );
        	 
        	dataSetList.add(new NexacroServiceInfo("dsApiDetail", list));
        	
        	JSONArray  similarCertifications = (JSONArray)resultData.get("similarCertifications");
        	
        	if( similarCertifications != null )
            {
            	int jsonSize = similarCertifications.size();
            	list = new ArrayList<Map<String, Object>>();
            	
    	        for( int i = 0; i < jsonSize; i++ )
    	        {
    	            list.add(JsonUtil.getMapFromJsonObject( ( JSONObject ) similarCertifications.get(i)));
    	        }
        	}
        	dataSetList.add(new NexacroServiceInfo("dsApiSim", list));
        	
        	//JSONArray jobj7 = (JSONArray) jobj4.get("keyword");
        	
        	/*
        	mapObj = (JSONArray)jsonObj.get("resultData");
        	if( mapObj != null )
            {
            	int jsonSize = mapObj.size();
    	        for( int i = 0; i < jsonSize; i++ )
    	        {
    	            Map<String, Object> map = JsonUtil.getMapFromJsonObject( ( JSONObject ) mapObj.get(i) );
    	            list.add( map );
    	        }
        	}
        	dataSetList.add(new NexacroServiceInfo("dsApiDetail", list));
        	*/
        }
				
		manager.response(response, dataSetList);
            
    }
}
