package kr.co.takeit.common.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.text.StrSubstitutor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.takeit.spring.dao.TakeDAO;
import kr.co.takeit.util.TakeStringUtil;

@Service
public class MessageService {

	@Autowired
	TakeDAO takeDAO;

	private String MARKER = "{}";

	/**
	 * 메세지를 조회한다
	 *
	 * @param messageId
	 * @param defaultMessage
	 * @return
	 */
	public String getMessage(String messageId, String defaultMessage) {
		return TakeStringUtil.nvl(takeDAO.selectObj("Message.messageSelect", messageId), defaultMessage);
	}

	/**
	 * 메세지 변환(변수가 없을 경우 공백으로 변환)
	 * There's an incorrect value {name} in column {test} {blank} -> There's an incorrect value 1111 in column 3333
	 * ex) ImmutableMapParameter.of("name", "1111", "test", "3333")
	 *
	 * @param messageId
	 * @param defaultMessage
	 * @param messageParams
	 * @return
	 */
	public String makeMessage(String messageId, String defaultMessage, Map messageParams) {
		String message = getMessage(messageId, defaultMessage);

	    StringBuilder formatter = new StringBuilder(message);
	    List<Object> valueList = new ArrayList<Object>();

	    Matcher matcher = Pattern.compile("\\{(\\w+)}").matcher(message);

	    while (matcher.find()) {
	        String key = matcher.group(1);

	        String formatKey = String.format("{%s}", key);
	        int index = formatter.indexOf(formatKey);

	        if (index != -1) {
	            formatter.replace(index, index + formatKey.length(), "%s");
	            valueList.add(messageParams.get(key));
	        }
	    }

	    return String.format(formatter.toString(), valueList.toArray());
	}

	/**
	 * 메세지 변환(변수가 없을 경우 공백으로 변환하지 않음)
	 * There's an incorrect value {name} in column {test} {blank} -> There's an incorrect value 1111 in column 3333 {blank}
	 * ex) ImmutableMapParameter.of("name", "1111", "test", "3333")
	 *
	 * @param messageId
	 * @param defaultMessage
	 * @param messageParams
	 * @return
	 */
	public String makeMessageNotBlank(String messageId, String defaultMessage, Map messageParams) {
		String message = getMessage(messageId, defaultMessage);
		return StrSubstitutor.replace(message, messageParams, "{", "}");
	}

	/**
	 * 메세지 변환(messageParams에 순차적으로 대입해야 함)
	 * There's an incorrect value {} in column {}
	 *
	 * @param messageId
	 * @param defaultMessage
	 * @param messageParams
	 * @return
	 */
	public String makeMessageOrdered(String messageId, String defaultMessage, Object[] messageParams) {
		String message = getMessage(messageId, defaultMessage);
		int markCount = StringUtils.countMatches(message, MARKER);
		if(markCount == 0 || messageParams == null || messageParams.length == 0) {
			return message;
		}

		if(message.indexOf(MARKER) > -1) {
			message = message.replaceAll(Pattern.quote(MARKER), "%s");
		}

		Object[] cleanParams = new Object[markCount];

		if(messageParams.length > markCount) {
			System.arraycopy(messageParams, 0, cleanParams, 0, markCount);
		} else if(messageParams.length < markCount) {
			System.arraycopy(messageParams, 0, cleanParams, 0, messageParams.length);
		} else {
			cleanParams = messageParams;
		}

		//null인경우 공백으로 치환
		for(int index = 0; index < cleanParams.length; index++) {
			if(cleanParams[index] == null) {
				cleanParams[index] = "";
			}
		}

		return String.format(message, cleanParams);
	}
}
