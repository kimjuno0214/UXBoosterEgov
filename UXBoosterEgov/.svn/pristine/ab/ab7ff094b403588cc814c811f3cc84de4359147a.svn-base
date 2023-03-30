package kr.co.company.util;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import kr.co.takeit.exception.TakeBizException;
import kr.co.takeit.util.SessionManager;

public class SessionInterceptor extends HandlerInterceptorAdapter{

	private static final Logger logger = LoggerFactory.getLogger(SessionInterceptor.class);

	@Autowired
	private SessionManager sessionMgr;

	@SuppressWarnings("rawtypes")
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
		Map userInfo = sessionMgr.getUserInfo(request);
		if (userInfo == null || userInfo.get("USER_CD") == null) {
			logger.info("##################################################");
			logger.info("# ssnUserInfo is null.");
			logger.info("##################################################");

			/*세션이 만료 되었습니다. 로그인 페이지로 이동합니다.*/
			throw new TakeBizException("sessionEnd");

		}
		
		return true;
	}
}
