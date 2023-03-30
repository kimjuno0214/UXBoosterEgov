package kr.co.takeit.exception;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Order(Ordered.LOWEST_PRECEDENCE)
public class TakeExceptionAdvice {

	private static final Logger LOGGER = LoggerFactory.getLogger(TakeExceptionAdvice.class);

    @ExceptionHandler({ Exception.class })
    public String handleAnyException(HttpServletRequest request, HttpServletResponse response, Exception ex) {
    	LOGGER.error("Request: " + request.getRequestURL(), ex);
		//LOGGER.debug(this.getClass().getName() + ":::::::::" + "Exception");
		request.setAttribute("errorMessage", ex.getMessage());
		return "forward:/error/exception.do";
    }
}
