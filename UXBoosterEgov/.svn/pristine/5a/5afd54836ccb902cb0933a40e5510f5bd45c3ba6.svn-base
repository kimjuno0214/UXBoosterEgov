<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import = "java.net.URLDecoder" %>

<%
	String sArg = URLDecoder.decode(request.getParameter("sAddress"), "UTF-8");
	String sLocale = request.getParameter("sLocale");
	if(sLocale == null){
		sLocale = "";
	}
%>
<div id="wrap" style="display:none;border:1px solid; width:100%;height:100%;margin:0;padding:0;position:absolute;"></div>
<div id="map"  style="width:0px;height:0px;"></div>
<input id="Close" type="hidden" onclick="pageClose()" value="창 종료">

<style>
	body
	{
		overflow  :hidden;
		padding   :0 0 0 0;
		margin    :0 0 0 0;
	}
</style>

<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<script>

	// window.NEXACROHTML 객체 초기화
    if (! window.NEXACROHTML)
	{
		window.NEXACROHTML = {};
	}

	// Nexacro 부모창 객체 생성(가져오기)
	var oParent = window.NEXACROWEBBROWSER;

	// 우편번호 찾기 화면을 넣을 element
    var element_wrap = document.getElementById('wrap');

    // 검색창 출력.
    PostcodeSearch();

    function foldDaumPostcode()
    {
        // iframe을 넣은 element를 안보이게 한다.
        element_wrap.style.display = 'none';
    }

    function PostcodeSearch()
    {
        new daum.Postcode({
        	<%if(!sLocale.equals("ko_KR")){%>
        	alwaysShowEngAddr:true,
        	<%}%>
            oncomplete: function(data)
            {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullAddr  = data.address; 	// 최종    주소 변수
                var extraAddr = ''; 			// 조합형 주소 변수

                // 기본 주소가 도로명 타입일때 조합한다.
                if (data.addressType === 'R')
                {
                    //법정동명이 있을 경우 추가한다.
                    if (data.bname !== '')
                    {
                        extraAddr += data.bname;
                    }
                    // 건물명이 있을 경우 추가한다.
                    if(data.buildingName !== '')
                    {
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }

                    // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
                    fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                }

             	// 주소로 상세 정보를 검색
                var sJusoInfo  = "OK!!!:::" + data.postcode1 + ":::" + data.postcode2 + ":::" + data.zonecode + ":::" + data.roadAddress + ":::" + data.jibunAddress + ":::" + fullAddr;
                sJusoInfo += ":::" + data.userSelectedType;
            	callNexacro(sJusoInfo);

                // iframe을 넣은 element를 안보이게 한다.
                element_wrap.style.display = 'none';
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
            onresize : function(size)
            {
            	element_wrap.style.width  = "100%";
                element_wrap.style.height = "100%";
            },
            width  : '100%',
            height : '100%'
        }).embed(element_wrap

        			<% if (sArg != null && sArg != "")
        			{
        			%>
	        			,{
				        	q : <%= "'" + sArg + "'" %>
				       	 }
        		   <%
        		   }
        		   %>
        		);

        // iframe을 넣은 element를 보이게 한다.
        element_wrap.style.display = 'block';
    }

	// Nexacro객체-도로명주소 호출 화면에 있는 onusernotify 이벤트 함수(=도로명주소 정보들 리턴 함수)
	function callNexacro(userdata)
	{
		var wb = window.NEXACROWEBBROWSER;
		if (wb)
		{
			// HTML
			wb.on_fire_onusernotify(wb, userdata);
		}
		else
		{
			// Runtime
			window.document.title = userdata;
		}

		pageClose();
	}

    // 종료확인창을 출력하지않고 종료.
    function pageClose()
    {
    	//window.open("change","_self").close();
    	//window.close();
    }
</script>