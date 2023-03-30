package kr.co.takeit.exception;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.view.AbstractView;

import kr.co.takeit.nexacro.NexacroServiceManager;

/**
 *
 * Nexacro 전용 exception message 처리 view
 *
 * @author glorial
 *
 */
public class TakeBizErrorView extends AbstractView {
	private static final Logger LOGGER = LoggerFactory.getLogger(TakeBizErrorView.class);

	protected String exceptionMessage;

	public String getExceptionMessage() {
		return exceptionMessage;
	}

	public void setExceptionMessage(String exceptionMessage) {
		this.exceptionMessage = exceptionMessage;
	}

	@Override
	protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request, HttpServletResponse response) throws Exception {
		if(!response.isCommitted())	{

			LOGGER.debug("응답 데이터 렌더링 작업을 수행합니다.");

			NexacroServiceManager manager = new NexacroServiceManager();
			manager.error(response, "-1", this.exceptionMessage);

		}
	}

}
