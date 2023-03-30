package kr.co.takeit.util;

import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;

import kr.co.takeit.common.service.MessageService;

public class MessageUtil {

	/**
	 * 단순 메세지 반환
	 *
	 * @param messageId
	 * @param defaultMessage
	 * @return
	 */
	public static String getMessage(String messageId, String defaultMessage) {
		WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
		MessageService messageService = (MessageService)context.getBean("messageService");

		return messageService.getMessage(messageId, defaultMessage);
	}

	/**
	 * 메세지 변환
	 *
	 * @param messageId
	 * @param defaultMessage
	 * @param messageParams
	 * @return
	 */
	/*사용하지 않음
	public static String makeMessage(String messageId, String defaultMessage, Map messageParams) {
		WebApplicationContext context = ContextLoader.getCurrentWebApplicationContext();
		MessageService messageService = (MessageService)context.getBean("messageService");

		return messageService.makeMessage(messageId, defaultMessage, messageParams);
	}*/
}
