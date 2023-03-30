package kr.co.takeit.logging;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import ch.qos.logback.classic.spi.CallerData;
import ch.qos.logback.classic.spi.ILoggingEvent;
import kr.co.takeit.logging.dialect.SQLDialectCode;
import kr.co.takeit.util.TakeStringUtil;

public class TakeDBAppender extends TakeDBAppenderBase<ILoggingEvent> {

    static final StackTraceElement EMPTY_CALLER_DATA = CallerData.naInstance();

	@Override
	protected Method getGeneratedKeysMethod() {
		return null;
	}

	@Override
	protected String getInsertSQL() {
		if( connectionSource.getSQLDialectCode().equals( SQLDialectCode.UNKNOWN_DIALECT )) {
			//210217 정해원 TIBERO등 이곳에 분기처리
			return null;
		}

		return buildInsertSQL(connectionSource.getSQLDialectCode());
	}

	@Override
	protected long selectEventId(PreparedStatement insertStatement, Connection connection) throws SQLException, InvocationTargetException {
		//return super.selectEventId(insertStatement, connection);
		//logging_event_id_seq.currval 시퀀스가 존재하지 않습니다.
		return 99998385;
	}

	@Override
	protected void secondarySubAppend(ILoggingEvent arg0, Connection arg1, long arg2) throws Throwable {
	}

	@Override
	protected void subAppend(ILoggingEvent event, Connection connection, PreparedStatement stmt) throws Throwable {
		//bindLoggingEventWithInsertStatement (insertStatement, event);
		//bindCallerDataWithPreparedStatement (insertStatement, event.getCallerData());

		//try {
			for(int i = 0 ; i < event.getArgumentArray().length ; i++) {
				String val = TakeStringUtil.nvl(event.getArgumentArray()[i], "");
				if(i == 7 && !val.equals("")) {
					//210217 정해원 Date로 변환하여 처리
					/*stmt.setString(i+1, TakeStringUtil.nvl(event.getArgumentArray()[i], ""));*/
					stmt.setTimestamp(i+1, java.sql.Timestamp.valueOf(val+":00"));
				} else {
					stmt.setString(i+1, val);
				}
			}
			int updateCount = stmt.executeUpdate();
			if (updateCount != 1) {
				addWarn("Failed to insert loggingEvent");
			}
		//} catch (Exception e) {
		//	e.printStackTrace();
		//	throw e;
		//}
	}

	void bindCallerDataWithPreparedStatement(PreparedStatement stmt, StackTraceElement[] callerDataArray) throws SQLException {
		/*
		StackTraceElement caller = extractFirstCaller (callerDataArray);

		stmt.setString (CALLER_CLASS_INDEX, caller.getClassName());
		stmt.setString (CALLER_METHOD_INDEX, caller.getMethodName());
		stmt.setString (CALLER_LINE_INDEX, Integer.toString (caller.getLineNumber()));
		*/
    }

    void bindLoggingEventWithInsertStatement (PreparedStatement stmt, ILoggingEvent event) throws SQLException {
		/*
    	stmt.setTimestamp (EVENTTIME_INDEX, new Timestamp (event.getTimeStamp()));
		stmt.setString (MESSAGE_INDEX, event.getFormattedMessage());
		stmt.setString (LOGGER_INDEX, event.getLoggerName());
		stmt.setString (LEVEL_INDEX, event.getLevel().toString());

		if (event.getThrowableProxy() != null && event.getThrowableProxy().getStackTraceElementProxyArray() != null)
			   stmt.setString (TRACE_INDEX, ThrowableProxyUtil.asString (event.getThrowableProxy()));
			else
			   stmt.setString (TRACE_INDEX, null);
		 */
    }

    private StackTraceElement extractFirstCaller(StackTraceElement[] callerDataArray) {
		StackTraceElement caller = EMPTY_CALLER_DATA;
		if (hasAtLeastOneNonNullElement(callerDataArray))
			caller = callerDataArray[0];

		return caller;
	}

	private boolean hasAtLeastOneNonNullElement(StackTraceElement[] callerDataArray) {
		return callerDataArray != null && callerDataArray.length > 0 && callerDataArray[0] != null;
	}

    private String buildInsertSQL(SQLDialectCode dialectCode) {
    	StringBuffer sql = new StringBuffer();
    	sql.append("INSERT INTO HISTORY_LOG (");
    	sql.append(" HISTORY_SEQ");
    	sql.append(",HISTORY_DT");
    	sql.append(",LOGIN_DEVICE");
    	sql.append(",LOGIN_BROWSER");
    	sql.append(",PROJECT_CD");
    	sql.append(",MENU_CD");
    	sql.append(",FORM_ID");
    	sql.append(",HISTORY_TYPE");
    	sql.append(",USER_CD");
    	sql.append(",LOGIN_DT");
    	sql.append(",HISTORY_DESC");
    	sql.append(",LOGIN_IP");
    	sql.append(") VALUES (");
    	sql.append(getTimeStamp(dialectCode)); 		// 시스템사용이력일련번호
    	sql.append("," + getSysdate(dialectCode));  // 이력일시
    	sql.append(",?");                 			// 접속기기 1
    	sql.append(",?");                 			// 접속환경 2
    	sql.append(",?");                 			// 프로젝트코드 3
    	sql.append(",?");                 			// 메뉴코드 4
    	sql.append(",?");                 			// 화면ID 5
    	sql.append(",?");                 			// 이력유형 6
    	sql.append(",?");                 			// 사용자코드7
    	sql.append(",?");                 			// 로그인일시 8
    	sql.append(",?");                 			// 이력내용 9
    	sql.append(",?");                 			// 로그인IP 10
    	sql.append(")");
    	return sql.toString();
    }

	private String getTimeStamp(SQLDialectCode dialectCode) {
		if (dialectCode.equals(SQLDialectCode.ORACLE_DIALECT))
			return "((TO_CHAR(SYSDATE, 'YYYYMMDDHH24MISS') || LPAD(TO_NUMBER(HIST_SEQ.NEXTVAL), 3, '0')))";
		else if (dialectCode.equals(SQLDialectCode.MSSQL_DIALECT))
			return "(FORMAT(GETDATE(), 'yyyyMMddHHmmssfff'))";
		else if (dialectCode.equals(SQLDialectCode.MYSQL_DIALECT))
			return "(SUBSTRING((DATE_FORMAT(NOW(3), '%Y%m%d%H%i%S%f')), 1, 17))";
		else if (dialectCode.equals(SQLDialectCode.POSTGRES_DIALECT))
			return "(TO_CHAR(NOW(), 'YYYYMMDDHH24MISS') || LPAD(NEXTVAL('HIST_SEQ')::VARCHAR, 3, '0'))";
		else
			return null;
	}

	private String getSysdate(SQLDialectCode dialectCode) {
		if (dialectCode.equals(SQLDialectCode.ORACLE_DIALECT))
			return "SYSDATE";
		else if (dialectCode.equals(SQLDialectCode.MSSQL_DIALECT))
			return "GETDATE()";
		else if (dialectCode.equals(SQLDialectCode.MYSQL_DIALECT))
			return "NOW()";
		else if (dialectCode.equals(SQLDialectCode.POSTGRES_DIALECT))
			return "NOW()";
		else
			return null;
	}
}
