package kr.co.takeit.web;

import java.util.Collection;
import java.util.Enumeration;
import java.util.Hashtable;
import java.util.Map;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 중복로그인 시 기존에 접속한 세션 처리를 위한 클래스
 * 기존 로그인 세션을 삭제 함
 *
 * @author glorial
 *
 */
//@WebListener
public class SessionCheckListener implements HttpSessionBindingListener {

	private static final String LOGIN_IP = "LOGIN_IP";

	private static final String USER_CD = "USER_CD";

	private static final String SESSION_USERDATA = "__SESSION_USERDATA__";

	private static final Logger logger = LoggerFactory.getLogger(SessionCheckListener.class);

    private static Hashtable<HttpSession, String> _LOGIN_USERS = new Hashtable<HttpSession, String>();

/*
	private volatile static SessionCheckListener sessionListener = null;
	public static SessionCheckListener getInstance() {
        if(sessionListener == null) {
        	synchronized (SessionCheckListener.class) {
        		if(sessionListener == null) {
        			sessionListener = new SessionCheckListener();
        		}
        	}
        }
        return sessionListener;
    }
*/

    private static class SessionCheckHolder {
        public static final SessionCheckListener INSTANCE = new SessionCheckListener();
    }

    public static SessionCheckListener getInstance() {
        return SessionCheckHolder.INSTANCE;
    }

	/**
	 * 세션 생성 시 호출 : 접속자 저장
	 * @param event
	 */
	@Override
	public void valueBound(HttpSessionBindingEvent event) {
		_LOGIN_USERS.put(event.getSession(), event.getName());

        logger.info(event.getName() + " 로그인");
        logger.info("====> {} 세션생성, 접속자수 : {}, TIME : {}", new Object[]{event.getSession().getId(), getLoginUserCount(), event.getSession().getMaxInactiveInterval()});
	}

	/**
	 * 세션 해제 시 호출
	 * @param event
	 */
	@Override
	public void valueUnbound(HttpSessionBindingEvent event) {
		_LOGIN_USERS.remove(event.getSession());

        logger.info(event.getName() + " 로그아웃");
        logger.info("====> 접속자수 : {}", getLoginUserCount());
	}

	/**
	 * Session에 자기자신을 집어넣는다.
	 * valueBound가 호출이 됨.
	 *
	 * @param session
	 * @param userCd
	 */
	public void setSession(HttpSession session, String userCd) {
		if(isCheckUserCd(session, userCd)) {
			session.setAttribute(userCd, this);
		}
	}

	/**
	 * USER_CD 여부 확인
	 *
	 * @param session
	 * @param userCd
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public boolean isCheckUserCd(HttpSession session, String userCd) {
		//session.getAttribute(name)
		Map<String, Object> userInfo = (Map<String, Object>)session.getAttribute(SESSION_USERDATA);
		if(userInfo != null) return ((String)userInfo.get(USER_CD)).equals(userCd);

		return false;
	}

	/**
	 * 세션제거
	 * @param session
	 * @param userCd
	 */
	public void removeSession(HttpSession session) {
		session.invalidate();
	}

	/**
	 * 세션제거
	 * @param session
	 * @param userCd
	 */
	@SuppressWarnings("unchecked")
	public void removeExistSession(String userCd, String sLoginIp) {
		//IP가 다를경우 기존에 저장된 세션을 제거
		Enumeration<HttpSession> e = _LOGIN_USERS.keys();
		while (e.hasMoreElements()) {
			HttpSession existSession = (HttpSession)e.nextElement();
			Map<String, Object> userInfo = (Map<String, Object>)existSession.getAttribute(SESSION_USERDATA);
			if(userCd.equals(userInfo.get(USER_CD)) && !sLoginIp.equals(userInfo.get(LOGIN_IP))){
				logger.info("====> 기존 접속 사용자 세션 종료 : {}, {}", new Object[]{userCd, existSession.getId()});
				existSession.invalidate();
			}
		}
	}

	/**
	 * 로그인 중인 세션
	 * @return int 접속자수
	 */
	public int getLoginUserCount() {
		return _LOGIN_USERS.size();
	}

	/**
	 * 현재 접속중인 모든 사용자 아이디를 출력
	 * @return void
	 */
	@SuppressWarnings("unchecked")
	public void printLoginUsers() {
		Enumeration<HttpSession> e = _LOGIN_USERS.keys();
		logger.info("===========================================");
		int i = 0;
		while (e.hasMoreElements()) {
			HttpSession session = e.nextElement();
			Map<String, Object> userInfo = (Map<String, Object>)session.getAttribute(SESSION_USERDATA);
			logger.info("{}. 접속자 : {} === {} === {}", new Object[]{(++i), (String)userInfo.get(USER_CD), (String)userInfo.get(LOGIN_IP), session.getId()});
		}
		logger.info("===========================================");
	}

	/**
	 * 현재 접속중인 모든 사용자리스트를 리턴
	 *
	 * @return list
	 */
	public Enumeration<HttpSession> getLoginUsers() {
		return _LOGIN_USERS.keys();
	}

}
