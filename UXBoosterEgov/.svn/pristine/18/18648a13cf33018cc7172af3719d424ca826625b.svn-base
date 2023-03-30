package kr.co.takeit.exception;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.nexacro.java.xapi.license.InvalidLicenseException;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class TakeBizExceptionAdvice {

	private static final Logger LOGGER = LoggerFactory.getLogger(TakeBizExceptionAdvice.class);

/*
	@ExceptionHandler(kr.co.takeit.exception.TakeException.class)
	public ModelAndView takeException(HttpServletRequest request, HttpServletResponse response, TakeBizException ex) {
		LOGGER.error("Request: " + request.getRequestURL(), ex);

		LOGGER.debug(this.getClass().getName() + ":::::::::" + "bizException");

		TakeBizErrorView takeBizErrorView = new TakeBizErrorView();
		takeBizErrorView.setExceptionMessage(buildExceptionMessage(ex));

		return new ModelAndView(takeBizErrorView);
	}

	@ExceptionHandler(kr.co.takeit.exception.TakeBizException.class)
	public ModelAndView bizException(HttpServletRequest request, HttpServletResponse response, TakeBizException ex) {
		LOGGER.error("Request: " + request.getRequestURL(), ex);

		LOGGER.debug(this.getClass().getName() + ":::::::::" + "bizException");

		TakeBizErrorView takeBizErrorView = new TakeBizErrorView();
		takeBizErrorView.setExceptionMessage(buildExceptionMessage(ex));

		return new ModelAndView(takeBizErrorView);
	}
 */

	@ExceptionHandler(TakeBizException.class)
	@Order(Ordered.HIGHEST_PRECEDENCE)
	public String bizException(HttpServletRequest request, HttpServletResponse response, TakeBizException ex) {
		LOGGER.error("Request: " + request.getRequestURL(), ex);
		//LOGGER.debug(this.getClass().getName() + ":::::::::" + "bizException");
		//String errorMessage = buildExceptionMessage(ex);

		request.setAttribute("errorCode", ex.getCode());
		request.setAttribute("errorMessage", ex.getMessage());
		request.setAttribute("errorArguments", ex.getArguments());

		return "forward:/error/bizexception.do";
	}

	@ExceptionHandler(SQLException.class)
	@Order(Ordered.HIGHEST_PRECEDENCE)
    public String sqlException(HttpServletRequest request, HttpServletResponse response, SQLException ex) {
		LOGGER.error("Request: " + request.getRequestURL(), ex);
		//LOGGER.debug(this.getClass().getName() + ":::::::::" + "sqlException");

		request.setAttribute("errorMessage", ex.getMessage());
		return "forward:/error/sqlexception.do";
    }

	@ExceptionHandler(InvalidLicenseException.class)
	@Order(Ordered.HIGHEST_PRECEDENCE)
    public String invalidLIcenseException(HttpServletRequest request, HttpServletResponse response, InvalidLicenseException ex) {
		request.setAttribute("errorMessage", ex.getMessage());
		return "forward:/error/invalidlicenseexception.do";
    }
/*
	private String buildExceptionMessage(TakeBizException ex) {
		String exceptionMessage = "";

		//우선 메세지 치환처리 해주자
		//org.springframework.context.support.MessageSourceAccessor 를 사용하던지 해서 처리하자
		exceptionMessage = ex.getMessage();
		return exceptionMessage;
	}*/
}
