package kr.co.takeit.common.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import kr.co.takeit.nexacro.NexacroServiceManager;
import kr.co.takeit.util.TakeStringUtil;

@Controller
public class ExceptionController {

	@RequestMapping(value = "/403", method = {RequestMethod.GET, RequestMethod.POST})
    public String forBiddenPage() {
        return "/403";
    }

    @RequestMapping(value = "/404", method = {RequestMethod.GET, RequestMethod.POST})
    public String notFoundPage() {
        return "/404";
    }

    @RequestMapping(value = "/405", method = {RequestMethod.GET, RequestMethod.POST})
    public String internalServerErrorPage() {
        return "/405";
    }

    @RequestMapping(value = "/error/bizexception.do", produces = "text/html; charset=utf8", method = {RequestMethod.GET, RequestMethod.POST})
    public void bizexception(HttpServletRequest request, HttpServletResponse response) {
		String errorCode 	= TakeStringUtil.nvl(request.getAttribute("errorCode"));
        String errorMessage = TakeStringUtil.nvl(request.getAttribute("errorMessage"));

        if(!response.isCommitted()) {
        	NexacroServiceManager manager = new NexacroServiceManager();
        	manager.error(response, "-1", errorCode);
        }
    }

    @RequestMapping(value = "/error/sqlexception.do", produces = "text/html; charset=utf8", method = {RequestMethod.GET, RequestMethod.POST})
	public void sqlexception(HttpServletRequest request, HttpServletResponse response) {
		String errorMessage = (String) request.getAttribute("errorMessage");

		if(!response.isCommitted()) {
        	NexacroServiceManager manager = new NexacroServiceManager();
        	//manager.error(response, "-1", errorMessage);
        	manager.error(response, "-1", "오류가 발생했습니다.");
        }
	}

    @RequestMapping(value = "/error/invalidlicenseexception", produces = "text/html; charset=utf8", method = {RequestMethod.GET, RequestMethod.POST})
	public ResponseEntity<String> invalidlicenseexception(HttpServletRequest request) {
    	String errorMessage = (String) request.getAttribute("errorMessage");
    	String msg = "SSV:utf-8ErrorCode=-99ErrorMsg=" + errorMessage + "";
    	return ResponseEntity.ok(msg);
    }

    @RequestMapping(value = "/error/exception.do", produces = "text/html; charset=utf8", method = {RequestMethod.GET, RequestMethod.POST})
	public void anyexception(HttpServletRequest request, HttpServletResponse response) {
		String errorMessage = (String) request.getAttribute("errorMessage");

		if(!response.isCommitted()) {
        	NexacroServiceManager manager = new NexacroServiceManager();
        	//manager.error(response, "-1", errorMessage);
        	manager.error(response, "-1", "오류가 발생했습니다.");
        }
	}
/*
	@RequestMapping(value = "/error/bizexception", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_JSON_UTF8_VALUE})
    @ResponseBody
    public ResponseEntity<String> bizexceptionJson(HttpServletRequest request) {
        String msg =  (String) request.getAttribute("msg");
        return new ResponseEntity<String>(msg, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

	@RequestMapping(value = "/error/sqlexception", produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_JSON_UTF8_VALUE})
	@ResponseBody
	public ResponseEntity<String> sqlexceptionJson(HttpServletRequest request) {
		String msg =  (String) request.getAttribute("msg");
		return new ResponseEntity<String>(msg, new HttpHeaders(), HttpStatus.INTERNAL_SERVER_ERROR);
	}
	*/
}
