package kr.co.takeit.exception;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import kr.co.takeit.util.MessageUtil;

/**
 *
 * 일반적인 비즈니스 예외를 던지는 경우 사용하는 예외 클래스
 *
 * @author glorial
 *
 */
@ResponseStatus(value = HttpStatus.OK)
public class TakeBizException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	protected String code;
	protected String defaultMessage;
	//protected Object[] arguments;
	protected Map messageParam;
	protected Exception exception;

	/**
	 * 업무 메세지 출력
	 *
	 * @param code
	 */
	public TakeBizException(String code) {
		this(code, code, null, null);
	}

	/**
	 * 업무 메세지 출력
	 *
	 * @param code
	 * @param defaultMessage
	 */
	public TakeBizException(String code, String defaultMessage) {
		this(code, defaultMessage, null, null);
	}

	/**
	 * 업무 메세지 출력
	 *
	 * @param code
	 * @param defaultMessage
	 * @param messageParam
	 */
	public TakeBizException(String code, String defaultMessage, Map messageParam) {
		this(code, defaultMessage, messageParam, null);
	}

	/**
	 * 업무 메세지 출력
	 *
	 * @param code message code
	 * @param defaultMessage message bundle에서 code에 해당되는 메세지를 찾지 못한 경우 표현되어야 할 기본 메세지
	 * @param arguments message bundle에 전달될 argument
	 * @param ex 예외
	 */
	public TakeBizException(String code, String defaultMessage, Map messageParam, Exception ex) {
		//super(code, ex);
		//super(MessageUtil.makeMessage(code, defaultMessage, ImmutableMapParameter.of("name", "1111", "text", "3333")), ex);
		super(MessageUtil.getMessage(code, defaultMessage), ex);

		this.code = code;
		this.defaultMessage = defaultMessage;
		this.messageParam = messageParam;
		this.exception = ex;
	}

	public String getCode() {
		return code;
	}

	public String getDefaultMessage() {
		return defaultMessage;
	}

	public Map getArguments() {
		return messageParam;
	}

	public Exception getException() {
		return exception;
	}
}
