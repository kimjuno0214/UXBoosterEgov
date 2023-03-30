package kr.co.takeit.web;

import java.util.concurrent.TimeUnit;

import org.apache.http.client.HttpClient;
import org.apache.http.impl.client.DefaultHttpRequestRetryHandler;
import org.apache.http.impl.client.HttpClientBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

@Configuration
public class TakeRestConfig {

	private static final Logger logger = LoggerFactory.getLogger(TakeRestConfig.class);

	private static final int TIMEOUT = 5 * 1000;
	private static final int MAXCONNECTION = 300;
	private static final int MAXPERIP = 200;
	private static final int EVICTTIMEOUT = 60 * 1000;

	@Bean
	public RestTemplate takeRestTemplate() {
		logger.info("RestTemplate 초기화");

		HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
		factory.setReadTimeout(TIMEOUT);		// 읽기시간초과
		factory.setConnectTimeout(TIMEOUT);		// 서버에 연결을 맺을 때의 타임아웃

		HttpClient httpClient = HttpClientBuilder.create()
				.setMaxConnTotal(MAXCONNECTION)												// 최대 커넥션 수
				.setMaxConnPerRoute(MAXPERIP)												// IP:포트 1쌍에 대해 수행 할 연결 수제한
				.evictIdleConnections(TakeRestConfig.EVICTTIMEOUT, TimeUnit.MILLISECONDS) 	// IDLE커넥션을 주기적으로 지움
				.setRetryHandler(new DefaultHttpRequestRetryHandler(0, false))				// 재시도 안함
				.build();

		factory.setHttpClient(httpClient);

		return new RestTemplate(factory);
	}

}
