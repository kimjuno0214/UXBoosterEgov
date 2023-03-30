package kr.co.company;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class InitContext {

	private static final Logger logger = LoggerFactory.getLogger(InitContext.class);

	@Value("#{application['system.name']}")
	private String systemName;

	@PostConstruct
	public void init() throws Exception {
		logger.info("##########################################################################");
		logger.info("############### {} InitContext Start ###############", systemName);
		logger.info("##########################################################################");
		logger.info(" ※ 여기에는 시스템에 시작될때 필요한 기능들을 추가합니다.");

		try {

		} catch (Exception e) {
			logger.error(e.getMessage());
		}

		logger.info("##########################################################################");
		logger.info("###############  {} InitContext End  ###############", systemName);
		logger.info("##########################################################################");
	}
}
