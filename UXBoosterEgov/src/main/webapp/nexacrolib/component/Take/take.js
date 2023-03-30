/***************************************************************************
 *  2019.07.01 made by take ymko                                           *
 *  take javascript Library                                                *
 *  www.take.co.kr                                                       *
 ***************************************************************************/

/**
 * @namespace
 * @name create the root namespace and making sure we're not overwriting it
 * @memberof! <global>
 */
var createNS = createNS || function namespace(namespace) {
	var object = this, tokens = namespace.split("."), token;
	while (tokens.length > 0) {
		token = tokens.shift();
		if (typeof object[token] === "undefined") {
			object[token] = {};
		}
		object = object[token];
	}
	return object;
};

var take = createNS("take");

////////////////////////////////////////////////////////////////////////////
// START                   시스템 기능 변수 모음                       //
////////////////////////////////////////////////////////////////////////////
UXBooster = nexacro.getApplication();
take.bDomain = false; //다국어 사용 여부
take.bSysEmail = false; //시스템 에러로그 이메일 전송 여부
take.bTrace = true;     //시스템 Trace 기능 사용 여부
take.separator = String.fromCharCode(31);     //시스템 공통 구분자
//take.systemFont = "normal 9pt/normal 'Noto Sans CJK KR DemiLight','나눔 고딕'"; //시스템 기본 폰트
take.systemFont = "12px 'NanumGothic'"; //시스템 기본 폰트
take.systemId = "UXBooster"
take.systemNm = "Take UXBooster";
take.systemThemeId = null;
take.systemParam = {};
take.isNetwork = null;
take.codePopUrl = "frm::com/comSelPopUp.xfdl";
take.report = "UBI";
take.Crypto = {};
//민트, 다홍, 살색, 어두운 회색, 살몬, 하늘, 진하늘, 분홍, 살구, 헤이즐넛, 파랑, 보라, 어두운 초록, 남색, 청록, 회색, 빨강, 갈색, 연분홍, 주황
take.chartcolorinfo = ["#81ddc6", "#f35e58", "#edc683", "#434348", "#fe8c68", "#7cb5ec", "#8085e9", "#f15c80", "#f7a35c", "#d1af94", "#515edf", "#bc51df", "#88b14b", "#45436c", "#007db6", "#8c8c91", "#f82e19", "#694e23", "#fe9ab2", "#ff7314"];
take.SvcId = null;
////////////////////////////////////////////////////////////////////////////
// START                      공통 함수 모음                            //
////////////////////////////////////////////////////////////////////////////
/**
 * setSystemInfo 시스템 기본 정보 세팅
 * @param  {Object}  objSys 시스템 정보
 * @return {Boolean} 성공/실패
 */
take.setSystemInfo = function(objSys)
{
    if(take.nvl(objSys.systemFont,"")!="") take.systemFont = objSys.systemFont;
    if(take.nvl(objSys.systemId,"")!="")   take.systemId = objSys.systemId;        //시스템아이디(프로젝트아이디)
    if(take.nvl(objSys.systemNm,"")!="")   take.systemNm = objSys.systemNm;        //시스템명
    if(take.nvl(objSys.domain,"")!="")   take.bDomain = objSys.domain;        //다국어 사용 여부
    if(take.nvl(objSys.report,"")!="")   take.report = objSys.report;        //리포트 타입

	//현재 서비스 되는 URL 확인
	var sSvc = take.svcFindReplace();

    if (sSvc=="SVC_REAL") take.bTrace=false; //리얼 환경에서는 트레이스 사용안함

	return true;
};

/**
 * User 정보 가져오기
 * @param {String}  sCol 컬럼명
 * @return {String} 데이터
 */
take.getUser = function(sCol)
{
    return nexacro.getApplication().gdsUserInfo.getColumn(0,sCol);
};

/**
 * 폼 컴포넌트 리스트
 * @param {object} pThis 폼
 * @return {array} arrList 컴포넌트 Array
 */
take.ComponentList = function(pThis)
{
	var arrRtn = pThis.components._idArray.slice();

	return arrRtn;
};

/**
 * 퀵뷰 실행 여부
 * @return {boolean} true/false
 */
take.isQuickView = function()
{
	var rtn = false;

	if (take.nvl(_application.mainframe.WorkFrame,"")!="")
	{
		rtn = false;
	} else {
		if (take.nvl(_application.mainframe.QuickViewFrame,"")!="") rtn = true;
	}

	return rtn;
};

/**
 * 개발툴 실행 여부
 * @return {boolean} true/false
 */
take.isStudio = function()
{
    if (nexacro._project_url.indexOf("file://")>=0)
    {
        if (nexacro._Browser=="Runtime")
        {
            return true;
        }
   }

   return false;
};

/**
 * 컴포넌트 전체 경로
 * @param {object} obj 컴포넌트
 * @return {string} Path 전체 PATH
 */
take.ObjectPath = function(obj)
{
    if (take.nvl(obj,"")!="")
    {
        return "_application." + obj._unique_id;
    } else {
        return "";
    }
};

/**
 * 최상위 폼 찾기
 * @param {object} obj 컴포넌트
 * @return {object} object Form
 */
take.getOwnerForm = function(objComp)
{
    var sType = objComp.parent._type_name;
   // trace(objComp.name + " --> " + objComp._unique_id);

    if (sType=="ChildFrame")
    {
        return objComp;
    } else {
        //현재 프레임 구조에 맞게 설정
        if (objComp.name.substring(0,8) =="divWork_")
        {
            return objComp.form.divForm.form;
        } else {
            return arguments.callee(objComp.parent);
        }
    }
};

/**
 * 현재 선택된 탭의 폼 찾기
 * @param {object} obj 컴포넌트
 * @return {object} object Form
 */
take.getActiveForm = function(objComp)
{
    var objForm = nexacro._findParentFrame(objComp).form;
	if( objForm.name == "frmMain" ){
		objForm = objForm.getOwnerFrame().form.divMdi.form.divTab.objActiveWork.form;
	}

    return objForm;
};

/**
 * 해당 메뉴의 탭 폼 찾기
 * @param {object}  nexacro Form object
 * @return {object} object Form
 */
take.getMdiForm = function(pThis, sMenuCd)
{
    var objMainForm, objDs;
    var sPrefix, sMdiId;
    var nFRow;

    objMainForm = pThis.getOwnerFrame().form;
    objDs = objMainForm.divMdi.form.dsOpenMenu;
    nFRow = objDs.findRow("MENU_CD", sMenuCd);

    if (nFRow<0)
    {
        take.debug(pThis, "해당 메뉴가 오픈되지 않았습니다.");
        return false;
    }

    sPrefix = objDs.getColumn(nFRow, "PROGRAM_PREFIX");

    //MDI 아이디 생성
    sMdiId = "divWork_" + sPrefix + "_" + sMenuCd;

    return objMainForm[sMdiId].form.divForm.form;
};

/**
 * 부모 폼 찾기
 * @param {object} obj 컴포넌트
 * @return {object} object Form
 */
take.getParentForm = function(objComp, bCallee)
{
    var sType, sPtype, sUrl;

    try {
        bCallee = take.nvl(bCallee,false);
        sType = objComp._type_name;
        sUrl = take.nvl(objComp.url,"");
        //trace(objComp._unique_id + " --> sType : " + sType + " / sUrl : " + sUrl);

        if (sType!="Form")
        {
            if (sType=="Div" || sType=="Tab" || sType=="Tabpage")
            {
                if (sUrl!="" && bCallee ) return objComp.form;
            }
        } else {
            sPtype = objComp.parent._type_name;

            if (sPtype!="Div" && sPtype!="Tab" && sType!="Tabpage")
            {
                return objComp;
            }
        }

        return arguments.callee(objComp.parent, true);

    } catch (e) {
        take.trace("take.getParentForm", "Info", "부모폼 찾기 실패 : " + e);
        //trace("부모폼 찾기 실패 : " + e);
    }
};

/**
 * 부모 폼 에너 내 xy 찾기
 * @param {object} obj 컴포넌트
 * @return {object} [x,y]
 */
take.getParentXY = function(objComp, bCallee, nX, nY)
{
    var sType;

    var sType, sPtype, sUrl;

    try {
        bCallee = take.nvl(bCallee,false);

        if (!take.isNumber(nX)) nX = objComp.getOffsetLeft();
        if (!take.isNumber(nY)) nY = objComp.getOffsetTop();

        sType = objComp._type_name;
        sUrl = take.nvl(objComp.url,"");
        //trace(objComp._unique_id + " --> sType : " + sType + " / sUrl : " + sUrl);

        if (sType!="Form")
        {
            if (sType=="Div" || sType=="Tab" || sType=="Tabpage")
            {
                if (sUrl!="" && bCallee )
                {
                    return {x:nX, y:nY};
                } else {
                    nX += objComp.getOffsetLeft();
                    nY += objComp.getOffsetTop();
                }
            }
        } else {
            sPtype = objComp.parent._type_name;

            if (sPtype!="Div" && sPtype!="Tab" && sType!="Tabpage")
            {
                return {x:nX, y:nY};
            }
        }

        return arguments.callee(objComp.parent, true, nX, nY);

    } catch (e) {
        take.trace("take.getParentXY", "Info", "부모폼 찾기 실패 : " + e);
        //trace("부모폼 찾기 실패 : " + e);
    }
};

/**
 * Null Check
 * @param {*} val 체크할 값.
 * @return {boolean} null 여부
 */
take.isNull = function(val)
{
	return nexacro._isNull(val);
};

/**
 * empty값인 경우 대체 값으로 치환
 * @param {*} Val 치환대상.
 * @param {*} rtnValue 치환값.
 * @return {string} 치환값.
 */
take.nvl = function(val, rtnVal)
{
	if (rtnVal === undefined || rtnVal === null) {
		rtnVal = '';
	}
	if( "null" == val || null == val || "undefined" == val ){
		val = rtnVal;
	}
	return nexacro._nvl(val, rtnVal);
};

/**
 * value의 Function 여부 반환.
 * @param {*} val 확인할 value.
 * @return {boolean} Function 여부.
 */
take.isFunction = function(val)
{
	return nexacro._isFunction(val);
};

/**
 * value의 Array 여부 반환.
 * @param {*} aVal 확인할 value.
 * @return {boolean} Array 여부.
 */
take.isArray = function(aVal)
 {
    return aVal.constructor === Array;
 };
 
/**
 * 날자 형식을 Object로 반환
 * @param {Anonymous} aDate 날자
 * @return {Object} 날자형 오브젝트 반환 (실패시 null)
 */
take.getConvertDate = function(aDate)
{
    var objDate;
    var sTemp;
    var nYear, nMonth, nDay;

    if (take.nvl(aDate,"")=="")
    {
        return null;
    }

    if (typeof aDate === "string")
    {
        if (aDate.indexOf("/") >=0  || aDate.indexOf("-") >=0)
        {
            sTemp = nexacro.replaceAll(aDate,"/","");
            sTemp = nexacro.replaceAll(sTemp,"-","");

            if (take.isDate(sTemp))
            {
                objDate = new Date(aDate);
            } else {
                return null;
            }
        } else {

            if (take.isDate(aDate))
            {
                nYear = nexacro.toNumber(aDate.substr(0,4));
                nMonth = nexacro.toNumber(aDate.substr(4,2))-1; //월은 0부터 시작
                nDay = nexacro.toNumber(aDate.substr(6,2));

                objDate = new Date(nYear, nMonth, nDay);
            } else {
                return null;
            }
        }
    } else if (aDate instanceof Date) {
        objDate = aDate;
    }

    return objDate;
};

/**
 * 요일 구하기
 * @param   {Object}  objDate
 * @param   {Boolean} bKor
 * @return  {String} '일', '월', '화', '수', '목', '금', '토'
 * @example take.getDateWeek("20180101")
 */
take.getDateWeek = function(aDate, bKor)
{
    var arrWeek = new Array('일', '월', '화', '수', '목', '금', '토');

    aDate = take.getConvertDate(aDate);
    if (aDate==null) return false;

    bKor = take.nvl(bKor,true);

    if (!bKor)
    {
        arrWeek = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    }

    return arrWeek[aDate.getDay()];
};

/**
 * 두개의 날자 기간 일로 반환
 * @param   {Anonymous}  aSDate 날자 1
 * @param   {Anonymous}  aEDate 날자 2
 * @return  {Number} 일수
 * @example take.getDateTerm("20180101","20180131")
 */
take.getDateTerm = function (aSDate, aEDate)
{
    var objSDate, objEDate;
    var nTimeDiff, nDiffDays;

    objSDate = take.getConvertDate(aSDate);
    if (objSDate==null) return false;

    objEDate = take.getConvertDate(aEDate);
    if (objEDate==null) return false;

    nTimeDiff = Math.abs(objSDate.getTime() - objEDate.getTime());
    nDiffDays = Math.ceil(nTimeDiff / (1000 * 3600 * 24));

    return nDiffDays+1;
};

/**
 * 윤년여부
 * @param   {Number}  년도
 * @return  {Boolean} true/false
 * @example take.isLeapYear(2010)
 */
take.isLeapYear = function (nYear)
{
    if (!take.isNumber(nYear))
    {
        nYear = nexacro.toNumber(nYear);
    }

    return (((nYear % 4 === 0) && (nYear % 100 !== 0)) || (nYear % 400 === 0));
};

/**
 * 해당 월의 마지막 날 리턴
 * @param   {Number} nYear  년도
 * @param   {Number} nMonth 월
 * @return  {Number} 마지막 일자
 * @example take.getDaysInMonth(2010,1)
 */
take.getDaysInMonth = function (nYear, nMonth, bGbn)
{
    bGbn = take.nvl(bGbn,false);

    if (take.isNumber(nYear))
    {
        nYear = nexacro.toNumber(nYear);
    }

    if (take.isNumber(nMonth))
    {
        nMonth = nexacro.toNumber(nMonth);

        if (!bGbn) nMonth = nMonth-1;
    }

    var arrLastDay = [31, (take.isLeapYear(nYear) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return arrLastDay[nMonth];
};

/**
 * 월 더하기
 * @param   {Anonymous} aDate  Date
 * @param   {Number} nVal 더할수
 * @return  {Number} 일을 더한 date
 * @example take.getAddDays("20180101",1)
 */
take.getAddDays = function (aDate, nVal)
{
    aDate = take.getConvertDate(aDate);

    if (aDate==null) return false;

    if (take.isNumber(nVal))
    {
        nVal = nexacro.toNumber(nVal);
    }

    //aDate.setTime(new Date().getTime() + (nVal * 24 * 60 * 60 * 1000));
    aDate.setTime(aDate.getTime() + (nVal * 24 * 60 * 60 * 1000));

    return aDate;
};

/**
 * 월 더하기
 * @param   {Anonymous} aDate  Date
 * @param   {Number} nVal 더할수
 * @return  {Number} 월을 더한 date
 * @example take.getAddMonths("20180101",1)
 */
take.getAddMonths = function (aDate, nVal)
{
    var nDate;

    aDate = take.getConvertDate(aDate);

    if (aDate==null) return false;

    if (take.isNumber(nVal))
    {
        nVal = nexacro.toNumber(nVal);
    }

    nDate = aDate.getDate();

    aDate.setDate(1);
    aDate.setMonth(aDate.getMonth() + nVal);
    aDate.setDate(Math.min(nDate, aDate.getDaysInMonth()));

    return aDate;
};

/**
 * 날짜 구하기
 * @param  {N/A} 없음
 * @return {Object} objDateTime
 *                  objDateTime.year  년
 *                  objDateTime.month 월
 *                  objDateTime.day   일
 *                  objDateTime.date  년월일
 *                  objDateTime.hh    시
 *                  objDateTime.mm    분
 *                  objDateTime.ss    초
 *                  objDateTime.ms    밀리초
 *                  objDateTime.time  시분초
 */
take.getTodayTime = function()
{
	var objDate = new Date();
	var objDateTime = new Object();

	//date
	objDateTime.year  = (objDate.getFullYear()).toString();
	objDateTime.month = (objDate.getMonth() + 1).toString().padLeft(2,"0");
	objDateTime.day   = (objDate.getDate()).toString().padLeft(2,"0");
	objDateTime.date = objDateTime.year + objDateTime.month + objDateTime.day;

	//Time
	objDateTime.hh = (objDate.getHours()).toString().padLeft(2,"0");
	objDateTime.mm = (objDate.getMinutes()).toString().padLeft(2,"0");
	objDateTime.ss = (objDate.getSeconds()).toString().padLeft(2,"0");
    objDateTime.ms = (objDate.getMilliseconds()).toString();
	objDateTime.time = objDateTime.hh + objDateTime.mm + objDateTime.ss;

    objDateTime.datetime = objDateTime.date + objDateTime.time;
    objDateTime.datetimems = objDateTime.datetime + objDateTime.ms;
    
	return objDateTime;
};

/**
 * 날짜 구하기
 * @param  {N/A} 없음
 * @return {Object} objDateTime
 *                  objDateTime.year  년
 *                  objDateTime.month 월
 *                  objDateTime.day   일
 *                  objDateTime.date  년월일
 */
take.getStrData = function(objDate)
{
    var objStrDate = new Object();

	//date
	objStrDate.year  = (objDate.getFullYear()).toString();
	objStrDate.month = (objDate.getMonth() + 1).toString().padLeft(2,"0");
	objStrDate.day   = (objDate.getDate()).toString().padLeft(2,"0");
	objStrDate.date = objStrDate.year + objStrDate.month + objStrDate.day;

	return objStrDate;
};

/**
 * 날짜 구하기
 * @param  {N/A} 없음
 * @return {Object} objDateTime
 *                  objDateTime.year  년
 *                  objDateTime.month 월
 *                  objDateTime.day   일
 *                  objDateTime.date  년월일
 *                  objDateTime.hh    시
 *                  objDateTime.mm    분
 *                  objDateTime.ss    초
 *                  objDateTime.time  시분초
 */
take.getDbTime = function()
{
    var objDateTime = new Object(), objDs, objApp;
    var sDateTime, sDsNm;

    objApp = nexacro.getApplication();
    sDsNm = "_sdsDateTime";

    objDs = take.nvl(objApp[sDsNm],"");

    if (objDs=="")
    {
        objDs = new Dataset;
        objApp._addDataset(sDsNm, objDs);
    }
    //DB에 맞게 수정 필요
    take.tranSelect(
        objApp,
        "dbtime",
        "Main.dbdatetime",
        "",
        sDsNm,
        "",
        function(sId, sErr, sMsg)
        {
			//N/A
        },
        false
    );
    //비동 기로 동작 하여 처리 가능
    sDateTime = take.nvl(objDs.getColumn(0,"DBDATE"), "");
    if (sDateTime!="")
    {
        //date
        objDateTime.year  = sDateTime.substr(0,4);
        objDateTime.month = sDateTime.substr(4,2);
        objDateTime.day   = sDateTime.substr(6,2);
        objDateTime.date  = objDateTime.year + objDateTime.month + objDateTime.day;
        //Time
        objDateTime.hh = sDateTime.substr(9,2);
        objDateTime.mm = sDateTime.substr(11,2);
        objDateTime.ss = sDateTime.substr(13,2);
        objDateTime.time = objDateTime.hh + objDateTime.mm + objDateTime.ss;
    } else {
        objDateTime = "";
    }
    return objDateTime;
};

/**
 * 오브젝트의 타입을 스트링으로 반
 * @param  {Object} obj 오브젝트
 * @return {String}     오브젝트 타입
 */
take.ObjectType = function(obj)
{
	var rtn, sTypeName;

	if( obj === null ) return "null";

	sTypeName = typeof(obj);

	if( sTypeName === "object")
	{
		if( obj instanceof Array)
		{
			sTypeName = "array";
		} else if( obj instanceof Date) {
			sTypeName = "date";
		} else {
			var tmp = new String(obj);
			var start = tmp.indexOf("[object ");	// [object Grid]
			if( start > -1)
			{
				sTypeName = take.CompTypeName(obj);
			}
		}
	}

    if (sTypeName!="")
    {
        rtn = sTypeName.toLowerCase();
    } else {
        rtn = "";
    }

	return rtn;
};

/**
 * 컴포넌트 타입을 문자열로 반환
 * @param  {Object} objComp 넥사크로 컴포넌트
 * @return {String} 컴포넌트 타입 명
 * @example trace(take.compTypeName(this)) //--> Form
 */
take.CompTypeName = function(objComp)
{
    var sRtn;

	try {
        sRtn = objComp._type_name;
    }catch(e) {
        sRtn = "";
    }

	return sRtn;
};

/**
 * 컴포넌트 유형 반환.
 * @param  {Object} pThis    현재폼
 * @param  {String} sCompTxt 컴포넌트 경로 this.btnTest
 * @return {Object} objRtn
 *                  objRtn.type {String} 컴포넌트 타입
 *                  objRtn.comp {Component Object} 컴포넌트 오브젝트
 */
take.CompType = function(pThis, sCompTxt)
{
	//trace("sCompTxt--->" + sCompTxt);
	var bPComp = false, bError = false;
	var nIdx;
	var sErr = "", sType, sComp;
	var objComp, objRtn  = new Object();

    //divBody.form.grdList

    sComp = sCompTxt.indexOf(".")<0?sCompTxt:sCompTxt.substr(0,sCompTxt.indexOf("."));
	//trace("sComp--->" + sComp);
	//trace("compList--->" + take.ComponentList(pThis));

	try {
		objComp = pThis.components[sComp];
	} catch(e) {
        bError = true;
        sErr = e;
	}

    if (take.nvl(objComp, "")=="")
    {
        bError = true;
        sErr = sCompTxt;
    }

    if (bError==true)
    {
        take.error(pThis, "해당 컴포넌트가 존재하지 않습니다.(" + sErr + ")");
		objRtn = "";
		return objRtn;
    }

	sType = objComp._type_name;
	//trace("objComp.sType --> "+ sType);

	if (objComp instanceof nexacro.Div || objComp instanceof nexacro.Tabpage || objComp instanceof nexacro.Tab || objComp instanceof nexacro.PopupDiv)
	{
		sComp = sComp+".";
        sComp = sCompTxt.replace(sComp, "");

        if (sComp.substr(0,5)=="form.")
        {
            sComp = sComp.substr(5);
        }
        //trace("sComp --> " + sComp);

		return arguments.callee(objComp.form, sComp);
	} else {
		//if (objComp instanceof nexacro.Grid) sType = "Grid";
		//if (objComp instanceof nexacro.Edit) sType = "Edit";
		//if (objComp instanceof nexacro.Button) sType = "Button";
		//if (objComp instanceof nexacro.WebBrowser) sType = "WebBrowser";

		objRtn.type = sType;
		objRtn.comp = objComp;

		if (sType == "Grid")
		{
			nIdx = sCompTxt.indexOf(".");

			if (nIdx>=0)
			{
				objRtn.type = "Cell";
			}
		}

		//for (var x in objRtn)
		//{
		//	trace(x + "--->" + objRtn[x]);
		//}
		return objRtn;
	}
};

/**
 * 숫자 또는 문자에 콤마 표시
 * @param  {String, Number} data 숫자인 문자형 또는 숫자형
 * @return {String} 콤마가 표시된 값
 * @example trace(take.setComma(123456.12)); // --> 123,456.12
 */
take.setComma = function (data)
{
   // 정규표현식 : (+- 존재하거나 존재 안함, 숫자가 1개 이상), (숫자가 3개씩 반복)
   var reg = /(^[+-]?\d+)(\d{3})/;

   // 스트링변환
   data += '';
   while (reg.test(data))
   {
      // replace 정규표현식으로 3자리씩 콤마 처리
      data = data.replace(reg,'$1'+','+'$2');
   }

   return data;
};

/**
 * 문자열의 바이트 길이를 반환한다. 한글의 경우 "utf-8"로 인코딩되면 3 bytes로 처리한다.
 * @param   {String/Number} sVal     체크할 문자열
 * @param   {String} sCharset 인코딩 [default utf-8]
 * @return  Number
 * @example trace(take.getByteLength("1234")); // --> 4
 */
take.getByteLength = function(sVal, sCharset)
{
	var nHanSize, nTotal;

    if (take.nvl(sVal,"")=="") return 0;

	sCharset = take.nvl(sCharset, "utf-8").toLowerCase();
	nHanSize = ("utf-8" == sCharset ? 3 : 2);
	nTotal = 0;

	for(var i = 0; i < sVal.length; i++)
	{
		nTotal += sVal.charCodeAt(i) > 127 ? nHanSize : 1;
	}

	return nTotal;
};

/**
 * 문자열을 바이트로 substring 한다.
 * @param   {String} sVal     문자열
 * @param   {Number} nStart   시작위치
 * @param   {Number} nLength  길이
 * @param   {String} sUnit    인코딩 값 utf8,ascii 만 가능
 * @return  {String}
 * @example trace(take.substrByte("1234",0,4)); // --> 1234
 */
take.substrByte = function(sVal, nStart, nLength, sUnit)
{
    var sRtn;

    if (take.nvl(sUnit, "")=="")
    {
        sRtn = nexacro._substrByUnit(sVal, nStart, nLength, "utf8");
    } else {
        sRtn = nexacro._substrByUnit(sVal, nStart, nLength, sUnit);
    }

    return sRtn;
};

/**
 * 이메일 형식 확인.
 * @param  {String}   sEmail 이메일
 * @return {Boolean} 값이 존재할 경우에 체크한다.
 * @example   trace(take.isEmail("aaa.test.com"));  //--> true/false
 */
take.isEmail = function(sEmail)
{
	if( take.nvl(sEmail, "")=="" ) return false;

	var format = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/;
	if( sEmail.search(format) == -1) {
		return false;
	}
	return true;
};

/**
 * Date 형식 확인
 * @param  {String} sValue 날자
 * @param  {Boolean} bAlert Alert 제공 여부 true / false (기본값 true)
 * @return {Boolean} true / false
 * @example take.isDate("20180328") //--> true/false
 */
take.isDate = function(sValue, bAlert)
{
	var bRtn = false, bLeapYear;
    var nDay, nMonth, nYear;
    var sGbn;
    var dateFormat = /(^\d{4}\d{2}\d{2})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/; //8자리 숫자만 인정

    sGbn = "YYYYMMDD";
	bRtn = dateFormat.test(sValue);

    if (bRtn)
    {
        nDay   = nexacro.toNumber(sValue.rightstr(2));
        nMonth = nexacro.toNumber(sValue.substring(4,6));
        nYear  = nexacro.toNumber(sValue.substring(0,4));

        //if (nYear < nexacro.toNumber(new Date().getFullYear())) //과거년도 입력 불가처리시
        if (nYear >= 1900) //java date 기준 년도 적용
        {
            if (nMonth <= 12 && nMonth > 0)
            {
                sGbn = "Day";

                bLeapYear = (((nYear % 4) == 0) && ((nYear % 100) != 0) || ((nYear % 400) == 0));

                if(nDay > 0)
                {
                    if (nMonth == 2)
                    {
                        bRtn = bLeapYear ? nDay <= 29 : nDay <= 28;
                    } else {
                        if ((nMonth == 4) || (nMonth == 6) || (nMonth == 9) || (nMonth == 11))
                        {
                            bRtn = nDay <= 30;
                        } else {
                            bRtn = nDay <= 31;
                        }
                    }
                } else {
                    bRtn = false;
                }

            } else {
                sGbn = "Month";
                bRtn = false;
            }
        } else {
            sGbn = "Year";
            bRtn = false;
        }
    }

    if (bRtn==false)
    {
        switch(sGbn)
        {
            case "Year":
                sGbn = "년(1900년 미만)";
                break;
            case "Month":
                sGbn = "월";
                break;
            case "Day":
                sGbn = "일";
                break;
            default:
        }

        bAlert = take.nvl(bAlert,true);

        if (bAlert)
        {
            take.alert(take.getActiveMdiForm(), "Error", "유효하지 않은 {name}({detaile})형식입니다.", {name:"날자", detaile:sGbn}, "takeIsDateAlert");
            return;
         }
    }

	return bRtn;
};

/**
 * 날짜(시간)를 파싱해서 DateTime 객체를 생성
 * @param  {String} sDate    일자
 * @param  {String} sFormat  데이터 포멧 (yyyyMMdd, yyyy/MM/dd, yyyyMMddhhmmss, hhmmss)
 * @return {DateTime} 데이터 객체 실패시 null
 * @example trace(take.parseDate("20150101", "yyyyMMdd"));
 */
take.parseDate = function(sValue, sFormat)
{
	if( take.isEmpty(sValue) || take.isEmpty(sFormat) ) {
		return null;
	}

	var sValueUse  = "", sFormatUse = "";
	var nLength;

	// 날짜에서 숫자이외의 문자를 제거한다.
	nLength = sValue.length;
	for(var i = 0; i < nLength; i++) {
		if( take.isNumber(sValue.charAt(i)) )  {
			sValueUse += sValue.charAt(i);
		}
	}

	// 포멧에서 yyyyMMddhhmmss 이외의 문자를 제거한다.
	nLength = sFormat.length;
	for(var i = 0; i < nLength; i++) {
		switch(sFormat.charAt(i) ) {
		case 'y':
		case 'M':
		case 'd':
		case 'h':
		case 'H':
		case 'm':
		case 's':
			sFormatUse += sFormat.charAt(i);
			break;
		}
	}
	// 날짜와 포맷의 길이가 다르면 Invalid.
	if( sValueUse.length != sFormatUse.length ) {
		return null;
	}

	// 포맷에 따라서 년월일시분초를 분리한다.
	var nYear=0, nMonth=0, nDay=0, nHour=0, nMin=0, nSec=0, nOldIdx=0;
	var sOldChar = sFormatUse.charAt(0);

	sFormatUse += "#";	//end of char
	nLength = sFormatUse.length;
	for(var i = 1; i < nLength; i++) {
		if( sFormatUse.charAt(i) != sOldChar ) {
			switch(sOldChar) {
			case 'y':
				nYear = nexacro.toNumber(sValueUse.substr(nOldIdx, i-nOldIdx));
                break;
			case 'M':
				nMonth = nexacro.toNumber(sValueUse.substr(nOldIdx, i-nOldIdx));
                break;
			case 'd':
				nDay = nexacro.toNumber(sValueUse.substr(nOldIdx, i-nOldIdx));
                break;
			case 'h':
			case 'H':
				nHour = nexacro.toNumber(sValueUse.substr(nOldIdx, i-nOldIdx));
                break;
			case 'm':
				nMin = nexacro.toNumber(sValueUse.substr(nOldIdx, i-nOldIdx));
                break;
			case 's':
				nSec = nexacro.toNumber(sValueUse.substr(nOldIdx, i-nOldIdx));
                break;
			}
			sOldChar = sFormatUse.charAt(i);
			nOldIdx = i;
		}
	}
	// DateTime 객체로 변환
	if( nYear  == 0) nYear = 1970;
	if( nMonth == 0) nMonth= 1;
	if( nDay   == 0) nDay  = 1;

    nMonth = nMonth-1;
	return new Date(nYear,nMonth,nDay,nHour,nMin,nSec);
};

/**
 * 날짜포멧이 맞는지 체크한다
 * @param  {String} sDate    일자
 * @param  {String} sFormat  데이터 포멧 (yyyyMMdd, yyyy/MM/dd, yyyyMMddhhmmss, hhmmss)
 * @return {Boolean}
 * @example trace(take.isValidDate("20150101", "yyyyMMdd"));  // --> true/false
 */
take.isValidDate = function(sDate, sFormat)
{
	if(take.nvl(sDate,"")=="" ) return false;

	sFormat = take.nvl(sFormat, "yyyyMMdd");

	var dtTest = take.parseDate(sDate, sFormat);

	return sDate == take.toDateString(dtTest, sFormat);
};

/**
 * DateTime 객체를 지정된 날짜(시간) 포맷 문자열로 변환한다.
 * @param  {DateTime} dtValue    일자
 * @param  {String} sFormat  데이터 포멧 (yyyyMMdd, yyyy/MM/dd, yyyyMMddhhmmss, hhmmss)
 * @return {String}
 * @example trace(take.toDateString(datetime, "yyyyMMdd"));  // --> true/false
 */
take.toDateString = function(objDate, sFormat)
{
	var sRtnDate = "";
	var nLength = sFormat.length;
    var sYear="", sMonth="", sDay="", sHour="", sMin="", sSec="";

    if (!(objDate instanceof Date))
    {
        take.trace("take.toDateString", "Info", "날자 Object가 아닙니다.");
        //trace("날자 Object가 아닙니다.");
        return "";
    }

    sFormat = take.nvl(sFormat,"yyyyMMdd");
	nLength = sFormat.length;

	for(var i = 0; i < nLength; i++) {
		var ch = sFormat.charAt(i);

		switch(ch) {
		case 'y':
            if (sYear=="")
            {
                sYear = (objDate.getFullYear()).toString();
                sRtnDate += sYear;
            } else {
                continue;
            }

            break;
		case 'M':
            if (sMonth=="")
            {
                sMonth = (objDate.getMonth() + 1).toString().padLeft(2,"0");
                sRtnDate += sMonth;
            } else {
                continue;
            }

            break;
		case 'd':
            if (sDay=="")
            {
                sDay = (objDate.getDate()).toString().padLeft(2,"0");
                sRtnDate += sDay;
            } else {
                continue;
            }

            break;
		case 'h':
        case 'H':
            if (sHour=="")
            {
                sHour = (objDate.getHours()).toString().padLeft(2,"0");
                sRtnDate += sHour;
            } else {
                continue;
            }

            break;
		case 'm':
            if (sMin=="")
            {
                sMin = (objDate.getMinutes()).toString().padLeft(2,"0");
                sRtnDate += sMin;
            } else {
                continue;
            }

            break;
		case 's':
			if (sSec=="")
            {
                sSec = (objDate.getSeconds()).toString().padLeft(2,"0");
                sRtnDate += sSec;
            } else {
                continue;
            }

			break;
		default:
			sRtnDate += ch;
			break;
		}
	}

	return sRtnDate;
};

/**
 * 시작일과 종료일을 체크한다.
 * @param  {String} sFDate    시작일자
 * @param  {String} sTDate    종료일자
 * @return {Boolean}
 * @example trace(take.isFromTo("20150101", "20150101"));  // --> true/false
 */
take.isFromTo = function (sFDate, sTDate)
{
	if( take.nvl(sFDate,"")=="" || take.nvl(sTDate, "")=="" ) {
		return false;
	} else if( sFDate.length != sTDate.length ) {
		return false;
	}

	if( !take.isDate(sFDate) || !take.isDate(sTDate) ) {
		return false;
	}
    
	return nexacro.toNumber(sFDate) <= nexacro.toNumber(sTDate);
};

/**
 * 사업자등록번호 형식체크
 * @param  {String, Number} nCustNo 사업자등록번호
 * @return {Boolean}
 * @example trace(take.isCustNo("0123456789"));     // --> true/false
 */
take.isCustNo = function(nCustNo)
{
	if( take.nvl(nCustNo, "") == "")	return false;

	//숫자타입이 아닐경우 숫자타입으로 변환
	if ( !nexacro.isNumeric(nCustNo) )
	{
		nCustNo = nexacro.toNumber(nCustNo.replace(/-/gi,""));
	}

	if ( take.getByteLength(nCustNo) != 10 ) return false;

	var arrCheckID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
	var i, nChkSum=0, c2, nRemander;

	for (i=0; i<=7; i++) nChkSum += arrCheckID[i] * nCustNo.charAt(i);
	c2 = "0" + (arrCheckID[8] * nCustNo.charAt(8));
	c2 = c2.substring(c2.length - 2, c2.length);
	nChkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
	nRemander = (10 - (nChkSum % 10)) % 10 ;

	if (Math.floor(nCustNo.charAt(9)) == nRemander)
	{
		 return true; // OK!
	} else {
		return false;
	}

	return true;
};

/**
 * 주민등록번호를 체크한다.
 * @param  {String/Number} sVal 주민등록번호
 * @return {boolean}
 * @example trace(take.isJuminNo(""));    // --> true/false
 */
take.isJuminNo = function (sVal)
{
	if( take.nvl(sVal, "")=="" ) return false;

	var sJuminNo, sYY;
	var arrJuminChkDgt = [2,3,4,5,6,7,8,9,2,3,4,5];
	var nFNum, nLNum, nISum = new Number();

	sJuminNo = sVal.replace(/-/gi,"");

	if(sJuminNo.length != 13) return false;

	nFNum = sJuminNo.substr(0, 6).toString();
	nLNum = sJuminNo.substr(6).toString();

	if (nLNum.substr(0,1) == '1' ||  nLNum.substr(0,1) == '2') {
		sYY  = '19';
	} else if (nLNum.substr(0,1) == '3' ||  nLNum.substr(0,1) == '4') {
		sYY  = '20';
	} else {
		return false;
	}

	if( !take.isDate(sYY + nFNum) ) {
		return false;
	} else if ( !nexacro.isNumeric(sJuminNo) ) {
		return false;
	}

	for ( ix = 0; ix < 12 ; ix++) {
		nISum += (parseInt(sJuminNo.substr(ix, 1)) * arrJuminChkDgt[ix]);
	}
	nISum = 11 - (nISum%11);
	nISum = nISum % 10;
	if (nISum != (parseInt(sJuminNo.substr(12, 1)))) {
		return false;
	}
	return true;
};

/**
 * 전화번호 마스킹
 * @param  {String}  sTel  전화번호
 * @param  {Boolean} bMask * 처리 여부
 * @return {String}  마스킹 된 전화번호
 * @example trace(take.getTelMask("01012345678"));    // --> 010-1234-****
 */
take.getTelMask = function(sTel, bMask)
{
    if (typeof(sTel)=="number")
    {
        take.trace("take.getTelMask", "Info", "문자열이 아닙니다. 문자열만 치환 가능합니다.");
        //trace("문자열이 아닙니다. 문자열만 치환 가능합니다.")
        return null;
    }

    bMask = take.nvl(bMask,true);

    //trace("sTel --> " + sTel);
    //trace("bMask --> " + bMask);
    if (bMask)
    {
        return sTel.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-****");
    } else {
        return sTel.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
    }
};

/**
 * 문자열에서 포맷된 부분를 파라메타로 치환한다.
 * @param  {String} 포멧 문자열
 * @param  {String} 파라메터 값 "," 구분된 연속 값
 * @return  변환된 문자열
 * @example
 *      trace( take.replaceFormat("Hello {0}!",     "take")); -> "Hello teke!"
 *      trace( take.replaceFormat("Hello {0}!{1}!", "take", "test")); -> "Hello take!test!"
 *      trace( take.replaceFormat("{} Hello {}!",   "take", "test")); -> "take Hello test!"
 */
take.replaceFormat = function()
{
	var arrVal = new Array(), arrFormat;
	var sFormat;

	for(var i = 0; i < arguments.length; i++) {

		if( arguments[i] instanceof Array ) {
			for(var j = 0; j < arguments[i].length; j++ )
				arrVal.push(arguments[i][j]);
		} else {
			arrVal.push(arguments[i]);
		}
	}

	sFormat = new String(arrVal.shift());
	arrFormat = sFormat.splitEmpty("{}");

	if( arrFormat.length > 1) {
		sFormat = "";
		for(var i = 0; i < arrFormat.length; i++) {
			sFormat += arrFormat[i] + (i < arrVal.length ? arrVal[i] : "");
		}
	} else {
		for(var i = 0; i < arrVal.length; i++){
			sFormat = sFormat.replace("\{" + i + "\}", arrVal[i]);
		}
	}
	// 치환되지 않은 포맷이 있으면 빈 값으로 치환한다.
	sFormat = sFormat.replace(/\{[0-9]*\}/g, "");
	return sFormat;
};

/**
 * [description]
 * @param  {String/Number}  decode 조건 값
 * @return {[type]}         decode 결과값
 * @example trace(take.decode("1", "1", "One", "2", "Two", "Default")); // --> output : One
 *          trace(take.decode(100, 1, "일", 10, "십", 100, "백"));	   // --> output : 백
 */
take.decode = function()
{
	if (take.nvl(arguments, "")=="") return "";

	var i, nCnt;

	nCnt = arguments.length;

	if (nCnt<3) return "";

	for( i = 1 ; i < nCnt ; i+=2 )
	{
		if( arguments[0] === arguments[i] ) return arguments[i+1];
	}

	return arguments[i-2];
};

/**
 * @class  유일한 ID 를 반환
 * @param {String} prefix id 앞에 붙일 문자열
 * @param {String} separator id 생성시 구분용 문자(default: '-' ).
 * @return {String} id
 * @example
 * trace(take.getUniqueId());                 // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
 * trace(take.getUniqueId("Button_"));        // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
 * trace(take.getUniqueId("", "_"));          // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
 * trace(take.getUniqueId("Button_", "_"));  // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
*/
take.getUniqueId = function(prefix, separator)
{

	prefix = take.nvl(prefix, "");

	if ( take.nvl(separator, "")=="" ) {
		separator = 45;
	} else {
		separator = separator.charCodeAt(0);
	}

	var charcode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102],
		math = Math;
	var seq = 0;
	var seq0;
	var tmpArray = new Array(36);
	var idx = -1;

	while (seq < 8)
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	seq = 0;
	while (seq < 3)
	{
		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
		seq0 = 0;
		while (seq0 < 4)
		{
			tmpArray[++idx] = charcode[math.random() * 16  | 0];
			seq0++;
		}
		seq++;
	}
	tmpArray[++idx] = separator; //45 => "-", 95=> "_"

	var tmpStr = (new Date()).getTime();
	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
	seq = 0;
	while (seq < 8)
	{
		tmpArray[++idx] = tmpStr.charCodeAt(seq);
		seq++;
	}
	seq = 0;
	while (seq < 4)
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	return prefix + String.fromCharCode.apply(null, tmpArray);
};

/**
 * Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
 * @param {Object} prefix 순번 앞에 붙일 문자열
 * @param {String} prefix 순번 앞에 붙일 문자열
 * @return {String} id
 * @example
 * trace(take.getSequenceId(this, "Button")); // output : Button0
 * trace(take.getSequenceId(this, "Button")); // output : Button1
 * trace(take.getSequenceId(this, "chk_")); // output : chk_0
 * trace(take.getSequenceId(this, "chk_")); // output : chk_1
*/
take.getSequenceId = function(form, prefix)
{
	if ( take.nvl(form, "")=="" )
	{
        take.trace("take.getSequenceId", "Info", "1st argument doesn't exist !!");
		//trace("getSequenceId :: 1st argument doesn't exist !!");
		return null;
	}

	if ( take.nvl(prefix, "")=="" )
	{
        take.trace("take.getSequenceId", "Info", "2st argument doesn't exist !!");
		//trace("getSequenceId :: 2nd argument doesn't exist !!");
		return null;
	}

	if ( !(form instanceof Form) )
	{
        take.trace("take.getSequenceId", "Info", "1st argument must be a Form !!");
		//trace("getSequenceId :: 1st argument must be a Form !!");
		return null;
	}

	var cache = form._sequenceIdCache;
	if ( take.nvl(cache, "")=="" )
	{
		cache = form._sequenceIdCache = {};
	}

	var sequence = cache[prefix];
	if ( take.nvl(sequence, "")=="" )
	{
		sequence = -1;
	}
	sequence++;

	cache[prefix] = sequence;

	return prefix + sequence;
};

/**
 * 배열의 특정 위치의 값을 축출
 * @param  {Array} arrData  배열
 * @param  {Number} key     축출할 배열 인덱스
 * @return {Array}          배열
 * @example : arrData = new Array();
 *            take.ArrayPluck(arrData, 1);
 */
take.ArrayPluck = function(arrData, key)
{
    return arrData.map(function(object) { return object[key]; });
};

/**
* 배열에 중복제거
* @param {Array} arrData  배열
* @return {Array} 중복 제거된 배열
* @example arrData = ["a", "b", "b", "c"]
*          take.ArrayUnique(arrData); //--> a,b,c
**/
take.ArrayUnique = function(arrData)
{
   var o = {}, i, r = [];
   var l = arrData.length;

   for (i = 0; i < l; i++)
   {
      o[arrData[i]] = arrData[i];
   }

   for (i in o)
   {
      r.push(o[i]);
   }

   return r;
};

/**
* 배열에 빈값 제거
* @param  {Array} arrData  배열
* @return {Array} 진값 제거된 배열
* @example arrData = ["a", "", "", "c"];
*          take.ArrayTrim(arrData); //--> a,c
**/
take.ArrayTrim = function(arrData)
{
   var i, r = [];
   var l = arrData.length;

   for (i = 0; i < l; i++)
   {
	  if (!nexacro._isNull(arrData[i]))
	  {
		r.push(arrData[i]);
	  }
   }

   return r;
};

/**
 * @class  지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 뒤에서부터 찾아 반환한다.<br>
 * 배열의 각 항목은 하나 이상의 속성을 가진 객체이다.<br>
 * @param {Array} arrData  배열
 * @param {String} prop 기준 속성.
 * @param {String} item 기준 값.
 * @param {Number} from 검색 시작 위치(default: 0).
 * @param {Boolean} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {Number} 검색된 배열 위치. 없다면 -1 리턴.
 * @example
 * var users = [];
 * users[0] = {id:"milk", name:"park", age:33};
 * users[1] = {id:"apple", name:"kim"};
 * users[2] = {id:"oops", name:"joo", age:44};
 * users[3] = {id:"beans", name:"lee", age:50};
 * users[4] = {id:"zoo", age:65};
 * users[5] = {id:"milk", name:"", age:33};
 * users[6] = {id:"milk", name:"lee", age:33};
 * var index = take.ArrayLastindexOfProp(users, "name", "lee");
 * trace("index==>" + index);	// output : index==>6
 * var index = take.ArrayLastindexOfProp(users,"name", "lee", 5);
 * trace("index==>" + index);	// output : index==>3
*/
take.ArrayLastindexOfProp = function(arrData, prop, item, from, strict)
{
	var i, obj,
		propValue;

	if (from == null)
	{
		from = arrData.length - 1;
	}
	else if (from < 0)
	{
		from = Math.max(0, arrData.length + from);
	}

	var strict = strict || false;

	if (strict)
	{
		for (i=from; i>=0; i--)
		{
			if (i in arrData && arrData[i])
			{
				obj = arrData[i],
				propValue = obj[prop];

				if (propValue === item)
				{
					return i;
				}
			}
		}
	}
	else
	{
		for (i=from; i>=0; i--)
		{
			if (i in arrData && arrData[i])
			{
				obj = arrData[i],
				propValue = obj[prop];

				if (propValue == item)
				{
					return i;
				}
			}
		}
	}

	return -1;
};

/**
 * @class 지정된 항목이 처음 나오는 배열 위치를 반환한다.
 * @param {Array} arrData  배열
 * @param {Object} item 찾고자 하는 Item.
 * @param {Number} from 검색의 시작 위치 (default: 0).
 * @param {Booleans} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
 * @return {Number} 검색된 배열 위치. 없다면 -1 리턴.
 * @example
 * var mon = ["Jan","Feb","Mar","Apr"];
 * var index = take.ArrayIndexOf(mon, "Mar"); // trace("index==>" + index);	// output : index==>2
 * var index = take.ArrayIndexOf(mon, "May"); // trace("index==>" + index);	// output : index==>-1
*/
take.ArrayIndexOf = function(arrData, item, from, strict)
{
	var len = arrData.length;
	if ( from == null ) from = 0;
	strict == !!strict;
	from = (from < 0) ? Math.ceil(from) : Math.floor(from);
	if (from < 0)
	{
		from += len;
	}

	if (strict)
	{
		for (; from < len; from++)
		{
			if ( arrData[from] === item)
			{
				return from;
			}
		}
	}
	else
	{
		for (; from < len; from++)
		{
			if ( arrData[from] == item)
			{
				return from;
			}
		}
	}

	return -1;
};

/**
 * 텍스트의 Width를 구한다
 * @param   {String}    sText       해당 텍스트
 * @param   {Anonymous} aFont       폰트
 * @return  {Number}    텍스트의 width
 * @example take.getTextSize("텍스트", "11px Gulim"); //--> 100
 */
take.getTextSize = function(sText, aFont)
{
    var nCnt, nSize = 0;

    // 파라메터 체크
    if (take.nvl(sText, "")=="") return sText;
    if (take.nvl(aFont, "")=="") aFont = take.systemFont;

    //"..." 사이즈, 한글 한 자 사이즈 만큼 제한 사이즈 줄이기
    nCnt = sText.length;

    for (var i=0; i<nCnt; i++)
    {
        nSize += nexacro.getTextSize(sText[i], aFont).nx;
    }

    return nSize;
};

/**
 * 텍스트의 길이수를 체크하여 "..."반환
 * @param   {String}    sText       변환할 텍스트
 * @param   {Anonymous} aFont       폰트
 * @param   {Number}    nLimitSize  제한 사이즈
 * @return  {String}    sRtn
 * @example take.getTextlimitTo("텍스트", "11px Gulim", 20); //텍...
 */
take.getTextlimitTo = function(sText, aFont, nLimitSize)
{
    //변수 선언
    var arrTemp;
    var nCnt, nTempSize;
    var sRtn;

    // 파라메터 체크
    if (take.nvl(sText, "")=="") return sText;
    if (take.nvl(nLimitSize, "")==""&&nLimitSize<=0) return sText;
    if (take.nvl(aFont, "")=="") aFont = take.systemFont;

    //"..." 사이즈, 한글 한 자 사이즈 만큼 제한 사이즈 줄이기
    //nLimitSize = nLimitSize - (nexacro.getTextSize(".", aFont).nx*4) - nexacro.getTextSize("가", aFont).nx;

    //"..." 사이즈 줄이기
    nLimitSize = nLimitSize - (nexacro.getTextSize("...", aFont).nx);

	if (nLimitSize<=0) return "..." ;

    //텍스트 길이
    nCnt = sText.length;

    //trace("nCnt" + nCnt);
    //텍스트 사이즈가 제한 사이즈 보다 크면
    if (nexacro.getTextSize(sText, aFont).nx > nLimitSize)
    {
        //텍스트 길이만큼 반복하여 사이즈 체크
        for (var i=1; i<nCnt; i++)
        {
            sRtn=sText.substr(0,i);
            nTempSize = nexacro.getTextSize(sRtn, aFont).nx;

            //제한 사이즈보다 크면 반복 나가기
            if (nTempSize>=nLimitSize) break;
        }
        //"..." 붙이기
        sRtn+="...";
    } else {
        //텍스트 사이즈가 제한 사이즈와 같거나 작을 경우 그대로 리턴
        sRtn = sText;
    }

    return sRtn;
};

/**
 * 폼에서 정의한 사용자 함수의 이름 반환
 * @param  {Object}   pThis  nexacro form object
 * @return {String}   함수명
 * @example take.getFunctionName(this)
 */
take.getFunctionName = function(pThis, caller, nRtnCnt)
{
    var arrUserFnList = new Array();
    var nCnt;
    var sRtn = "";
    var sFunc = caller || arguments.callee.caller;

	nRtnCnt = take.nvl(nRtnCnt, 0);
    sFunc = sFunc.toString();

    for (var x in pThis)
    {
        if (x=="constructor") break;
        if (x=="on_initEvent") nCnt=0;
        if (nCnt>=1)
        {
            if (typeof(pThis[x]) == "function")
            {
                //arrUserFnList.push(x);

                if (pThis[x].toString()==sFunc)
				{
					//trace(pThis.name + "." + x);
					sRtn = x ;
					break;
				}
            }
        }
        if (nCnt>=0) nCnt++;
    }

	if (take.nvl(sRtn, "")=="")
	{
		nRtnCnt++;

		if (nRtnCnt<4)
		{
			switch (nRtnCnt)
			{
				case 3:
					caller = arguments.callee.caller.caller;
					break;
				case 2:
					caller = arguments.callee.caller.caller.caller;
					break;
				case 1:
					caller = arguments.callee.caller.caller.caller.caller;
					break;
				default:

			}

			return arguments.callee(pThis, nRtnCnt, caller);
		}
	}
    /**
    nCnt = arrUserFnList.length;

    for (var i=0;i<nCnt;i++)
    {
        if (this[arrUserFnList[i]].toString() == arguments.callee.caller.toString())
        {
            sRtn = arrUserFnList[i];
        }
    }
    **/
    return pThis.name  + "." + sRtn;
};

/**
 * debug를 출력한다.
 * @param  {Object/String} pThis FormObject또는 시스템 아이디
 * @param  {String}       sMsg  디버그메세지
 * @return {N/A}          N/A
 * @example take.debug(this, "디버그입니다.");
 */
take.debug = function(pThis, sMsg)
{
	if (take.bTrace ==false) return false;
	if (take.nvl(sMsg, "")=="") return false;

	var sId, sProgNm;

	if (take.CompTypeName(pThis) == "Form")
	{
		sId =  take.getFunctionName(pThis);
	} else {
		sId =  pThis;
	}

	sProgNm = take.getProgInfo(pThis).ProgNm;

	sId =  take.nvl(sId,"System");
	sMsg = "(" + sProgNm +") " + sMsg;

	take.trace(sId, "DEBUG", sMsg);
};

/**
 * error log를 출력한다.
 * @param  {Object/String} pThis FormObject또는 시스템 아이디
 * @param  {String}       sMsg  에러메세지
 * @return {N/A}          N/A
 * @example take.error(this, "에러입니다.");
 */
take.error = function(pThis, sMsg)
{
	if (take.bTrace ==false) return false;
	if (take.nvl(sMsg, "")=="") return false;

	var sId, sProgNm;

	if (take.CompTypeName(pThis) == "Form")
	{
		sId =  take.getFunctionName(pThis);
	} else {
		sId =  pThis;
	}

	sId =  take.nvl(sId,"System");
	sProgNm = take.getProgInfo(pThis).ProgNm;
	sMsg = "(" + sProgNm +") " + sMsg;

	take.trace(sId, "ERROR", sMsg);
};

/**
 * Trace를 찍는다
 * @param  {String} sId  시스템아이디
 * @param  {String} sGbn 구분
 * @param  {String} sMsg 메세지
 * @return {[type]} take.trace("System", "ERROR", "메세지입니다.");
 */
take.trace = function(sId, sGbn, sMsg)
{
    if (take.bTrace ==false) return false;
    
	var sDateTime = take.getTodayTime().date + take.getTodayTime().time;
	var sTraceMsg = sDateTime + " [ " + sGbn + " : "+ sId + " ] "+ sMsg;

	trace(sTraceMsg);
};

/**
 * 다국어용 메세지를 찾는다.
 * @param  {Object} pThis   폼 오브젝트
 * @param  {String} sMsgId 메세지아이디
 * @return {[type]} take.getWord(this, "ML000000001");
 */
 take.getWord = function(pThis, sMsgId)
{
	var objDs, objOutDs;

    //기본값 리턴값으로 받아온 메세지 아이디 세팅
	var sMsg=sMsgId;

    objDs = nexacro.getApplication().tgdsMsg;
    sMsg=sMsgId;

    nFRow = objDs.findRow("MSG_ID", sMsgId);

    if (nFRow>=0)
    {
        sMsg = objDs.getColumn(nFRow, "MSG_NM");
    } else {

        objOutDs = take.nvl(pThis.objects["__tdsMsg"],"");

        if(objOutDs=="")
        {
            //다국어용 데이터셋 생성
            objOutDs = new Dataset;
            objOutDs.set_name("__tdsMsg"); //데이터 셋 명

            //해당 폼에 추가
            pThis.addChild(objOutDs.name, objOutDs);
        }

        objOutDs.clearData();

        take.tranSelect(
            pThis,
            "selectMsg",
            "Main.selectMsgOne",
            "",
            "__tdsMsg",
            "sMsgId='" + sMsgId + "'",
            function(sId, nCd, sErrMsg)
            {
                if(nCd<0)
                {
                    take.alert(pThis, "Error", "["+nCd+"]"+sErrMsg, "");
                    return;
                } else  {
                    take.debug(pThis, "메세지 [" + sId + "] 데이터 가져오기 성공");

                    var nBRow, nFCRow;
                    var objFormMsgDs, objAppDs;
                    var sBasicMsg;
                    var bRtn;

                    objFormMsgDs = this.__tdsMsg;
                    objAppDs = nexacro.getApplication().tgdsMsg;

                    //nBrow = objAppDs.findRow("MSG_ID", "MS00000031"); //메세지 없을경우 기본 메세지
                    //if (nBrow>=0)
                    //{
                    //    sBasicMsg = sMsgId + "는 " + objAppDs.getColumn(nBrow,"MSG_NM");
                    //} else {
                        sBasicMsg = sMsgId + "는 등록되지 않은 용어 또는 메시지입니다.";
                    //}

                    if (objFormMsgDs.rowcount>0)
                    {
                        nFCRow = objFormMsgDs.findRow("MSG_ID", sMsgId);

                        if (nFCRow<0)
                        {
                            sMsg = "";
                        } else {
                            sMsg = take.nvl(objFormMsgDs.getColumn(nFCRow, "MSG_NM"), "");
                        }

                        if (sMsg!="")
                        {
                            bRtn = objAppDs.copyRow(objAppDs.addRow(), objFormMsgDs, nFCRow);
                            take.debug(pThis, "take.getWord(application.tgdsMsg.copyrow) return : " + bRtn);
                        } else {
                            sMsg = sBasicMsg;
                        }
                    } else {
                        take.debug(pThis, "take.alert : " + sBasicMsg);
                        sMsg = sBasicMsg;
                    }
                }
            },
            false
        );
    }

	return sMsg;
};
// take.getWord = function(pThis, sMsgId)
// {
// 	var objDs = null;
// 	if(pThis.tgdsMsg){
// 		objDs = pThis.tgdsMsg;
// 	}
// 
// 	if(objDs == null || objDs.getRowCount() == 0){
// 		if(take.getActiveForm(pThis).divForm){
// 			if(take.getActiveForm(pThis).divForm.form.tgdsMsg){
// 				objDs = take.getActiveForm(pThis).divForm.form.tgdsMsg;
// 			}
// 		} else {
// 			objDs = nexacro.getApplication().tgdsMsg;
// 		}
// 	}
// 
//     //기본값 리턴값으로 받아온 메세지 아이디 세팅
// 	var sMsg=sMsgId;
// 
//     //다국어 메세지 데이터셋이 없거나 데이터가 있을경우 찾아서 세팅
// 	if (take.nvl(objDs, "")!="" && objDs.rowcount>0)
// 	{
// 		nFRow = objDs.findRow("MSG_ID", take.nvl(sMsgId, "S0001"));
// 		if (nFRow>=0)
// 		{
// 			sMsg = objDs.getColumn(nFRow, "MSG_NM");
// 		} else {
// 			take.debug(pThis, "take.alert : 다국어 메세지 데이터셋(tgdsMsg)에서 메세지를 찾을수 없습니다.-->" + take.nvl(sMsgId, "S0001"));
//             sMsg = sMsgId;
// 		}
// 	}
// 
// 	return sMsg;
// };

/**
 * 다국어용 메세지를 찾는다.
 * @param  {Object} pThis   폼 오브젝트
 * @param  {String} sMsgId 메세지아이디
 * @return {[type]} take.getWord(this, "ML000000001");

take.getWord = function(pThis, sMsgId)
{
	var objDs, objOutDs;

    //기본값 리턴값으로 받아온 메세지 아이디 세팅
	var sMsg=sMsgId;

    objDs = nexacro.getApplication().tgdsMsg;
    sMsg=sMsgId;

    nFRow = objDs.findRow("MSG_ID", sMsgId);

    if (nFRow>=0)
    {
        sMsg = objDs.getColumn(nFRow, "MSG_NM");
    } else {

        objOutDs = take.nvl(pThis.objects["__tdsMsg"],"");

        if(objOutDs=="")
        {
            //다국어용 데이터셋 생성
            objOutDs = new Dataset;
            objOutDs.set_name("__tdsMsg"); //데이터 셋 명

            //해당 폼에 추가
            pThis.addChild(objOutDs.name, objOutDs);
        }

        objOutDs.clearData();

        take.transaction(
            pThis,
            "LANG",
            //"SVC_REAL::/com/cmmn/selectMessageOne.do",
            "SVC_REAL::/com/syst/selectMessageList.do",
            "",
            "__tdsMsg=tgdsMsg",
            "sMsgId='" + sMsgId ,
            function(sId, nCd, sErrMsg)
            {
                if(nCd<0)
                {
                    take.alert(pThis, "Error", "["+nCd+"]"+sErrMsg);
                } else  {
                    take.debug(pThis, "메세지 [" + sId + "] 데이터 가져오기 성공");

                    var nBRow, nFCRow;
                    var objFormMsgDs, objAppDs;
                    var sBasicMsg;
                    var bRtn;

                    objFormMsgDs = this.__tdsMsg;
                    objAppDs = nexacro.getApplication().tgdsMsg;

                    nBrow = objAppDs.findRow("msgId", "MS00000167"); //메세지 없을경우 기본 메세지
                    if (nBrow>=0)
                    {
                        sBasicMsg = sMsgId + "는 " + objAppDs.getColumn(nBrow,"msgNm");
                    } else {
                        sBasicMsg = sMsgId + "는 등록되지 않은 용어 또는 메시지입니다.";
                    }

                    if (objFormMsgDs.rowcount>0)
                    {
                        nFCRow = objFormMsgDs.findRow("msgId", sMsgId);

                        if (nFCRow<0)
                        {
                            sMsg = "";
                        } else {
                            sMsg = take.nvl(objFormMsgDs.getColumn(nFCRow, "msgNm"), "");
                        }

                        if (sMsg!="")
                        {
                            //var nRow = objAppDs.addRow();
                            //objAppDs.setColumn(nRow, "msgNm", sMsg);
                            //objAppDs.setColumn(nRow, "msgId", objFormMsgDs.getColumn(0, "msgId"));
                            bRtn = objAppDs.copyRow(objAppDs.addRow(), objFormMsgDs, nFCRow);

                            take.debug(pThis, "take.getWord(application.tgdsMsg.copyrow) return : " + bRtn);
                        } else {
                            sMsg = sBasicMsg;
                        }
                    } else {
                        take.debug(pThis, "take.alert : " + sBasicMsg);
                        sMsg = sBasicMsg;
                    }
                }
            },
            false
        );
    }

	return sMsg;
};	**/

/**
 * 공통 Alert Error시에만 별도 로직이 추가됨
 * @param  {Object}     pThis     폼 오브젝트
 * @param  {String}     sType     메세지 타입 (Error, Info, Warning등)
 * @param  {String}     sMsgId    다국어 메세지 아이디
 * @param  {Array}      arrParam  파라메터
 * @param  {String}     sPopId    파라메터   팝업아이디 (아이디가 있을경우만 메세지 Alert실행, 없으면 시스템 alert발생
 * @param  {Anonymous}  aCallBack 파라메터   function명 또는 function (생략가능)
 * @example take.alert(this, "Info", "ML001", { name : "test", text : "정의"}, "msgAlert", "fnMsgCallBack");
 *          take.alert(this, "Info", "{name}가 {text}되지 않았습니다.", { name : "test", text : "정의"}, "msgAlert", function(sId, bRtn){});
 * @return {N/A}   alert
 */
take.alert = function(pThis, sType, sMsgId, arrParam, sPopId, aCallBack, nWid, nHeight)
{
    //TODO 20190104 ymko 향후 다국어 처리 필요
	var objDs, objRtnCallBack;
	var nFRow;
	var sMsg = "", sProgNm, sOption;

    pThis = take.nvl(pThis,take.getStackForm());
    
    if (take.nvl(pThis,"")!="")
    {
        if (!take.isOnLoad(pThis)) return false;
    } else {
        pThis = _application;
    }

    sMsg = take.nvl(sMsgId,"");

    if (sType=="Info") sType = "Information";

    if (sMsg!="")
    {
        // 다국어 관련 추가     //////////
        if (sMsgId[0] == "M")
        {
            sMsg = take.getWord(pThis, sMsgId);
        }
    }
	///////////////////////////////////

	//if (take.nvl(arrParam, "")!="") sMsg = sMsg.replaceMulti(arrParam);

    //개행 처리
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));

    //용어 파람 처리
	sMsg = sMsg.replace(/(\{)(\w+)(\})/ig,
		function() {
			if (take.nvl(arrParam, "")!="") {
				if (arrParam[arguments[2]] == undefined)
                {
                    return "";
                } else {
                    if (arrParam[arguments[2]][0] == "M")
                    {
                        return take.getWord(pThis, arrParam[arguments[2]]);
                    } else {
                        return arrParam[arguments[2]];
                    }
                }
			} else {
				return "";
			}
		}
	);

	sProgNm = take.getProgInfo(pThis).ProgNm;

//     if (take.nvl(sPopId,"")=="")
//     {
//         sPopId = "msgAlertPop";
//     }
	if (take.nvl(sPopId,"")=="")
    {
        if (take.nvl(pThis,"")!="")
        {
            if (take.CompTypeName(pThis) == "Form")
            {
                pThis.alert(sMsg, take.systemNm + " " + sType , sType.toLowerCase());
            } else {
                _application.alert(sMsg, take.systemNm + " " + sType , sType.toLowerCase());
            }
        } else {
            alert(sMsg, take.systemNm + " " + sType , sType.toLowerCase());
        }
    } else {
        if (take.nvl(aCallBack,"")=="")
        {
            objRtnCallBack = function(sId, sRtn) {take.trace(sId, "Info", "sRtn"); return;};
        } else {
            if (typeof aCallBack === "string")
            {
                objRtnCallBack = function(sId, sRtn) {pThis[aCallBack].call(pThis, sId, sRtn=="true"?true:false);}
            } else {
                objRtnCallBack = function(sId, sRtn) {aCallBack.call(pThis, sId, sRtn=="true"?true:false);}
            }
        }

        if (take.nvl(nWid,"")=="" || take.nvl(nHeight,"")=="")
        {
            sOption = "showtitlebar=false resizable=false dragmovetype=none" ;
        } else {
            sOption = "showtitlebar=false autosize=false resizable=false dragmovetype=none width=" + nWid + " height="+ nHeight;
        }

        take.openPopup(
            pThis,
            sPopId,
            "frm::com/comMsg.xfdl",
            {argGbn:"alert", argTitle:take.systemNm, argMsg:sMsg, argType:sType.toLowerCase()},
            sOption,
            objRtnCallBack);
    }

	if (sType=="Error")
	{
		take.error(pThis, sMsg);
	}
};

 /**
  * 공통 Confirm
  * @param  {Object}    pThis   폼 오브젝트
  * @param  {String}    sType   컨펌 타입 (error", "question", "warning", "information")
  * @param  {String}    sMsgId  다국어 메세지 아이디
  * @param  {Array}     arrParam 파라메터
 * @param  {String}     sPopId    파라메터   팝업아이디 (아이디가 있을경우만 메세지 Alert실행, 없으면 시스템 alert발생
 * @param  {Anonymous}  aCallBack 파라메터   function명 또는 function (생략불가)
  * @example take.confirm(this, "question", "ML001", { name : "test", text : "정의"}, "msgAlert", "fnMsgCallBack");
  *          take.confirm(this, "question", "{name}가 {text}되지 않았습니다.", { name : "test", text : "정의"}, "msgAlert", function(sId, bRtn){});
  * @return {N/A}
  */
take.confirm = function(pThis, sType, sMsgId, arrParam, sPopId, aCallBack)
{
	var objDs, objRtnCallBack;
	var sMsg, sProgNm;
	var nFRow;
	var bRtn;

    if (!take.isOnLoad(pThis)) return false;

    sMsg = sMsgId;

	// 다국어 관련 추가     //////////
	if (sMsgId[0] == "M")
	{
		sMsg = take.getWord(pThis, sMsgId);
	}
	///////////////////////////////////

	//if (take.nvl(arrParam, "")!="") sMsg = sMsg.replaceMulti(arrParam);
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));

	sMsg = sMsg.replace(/(\{)(\w+)(\})/ig,
		function() {
			if (take.nvl(arrParam, "")!="") {
				if (arrParam[arguments[2]] == undefined)
                {
                    return "";
                } else {
                    if (arrParam[arguments[2]][0] == "M")
                    {
                        return take.getWord(pThis, arrParam[arguments[2]]);
                    } else {
                        return arrParam[arguments[2]];
                    }
                }
			} else {
				return "";
			}
		}
	);

	sProgNm = take.getProgInfo(pThis).ProgNm;


    //sMsg = "[" + sProgNm +"]\n--------------------------------------------\n" + sMsg;
	//sMsg += "\n--------------------------------------------";
    if (take.nvl(sPopId,"")=="")
    {
        take.trace(pThis.name +"(" + sProgNm +").take.confirm.Start", "INFO", sMsg);
        bRtn = pThis.confirm(sMsg, take.systemNm, sType);
        take.trace(pThis.name +"(" + sProgNm +").take.confirm.End", "INFO", sMsg);

        return bRtn;
    } else {
        if (take.nvl(aCallBack,"")=="")
        {
            if (take.CompTypeName(pThis) == "Form")
            {
                pThis.alert("메세지 팝업은 콜백 함수가 필수 입니다.!!", take.systemNm + " Error", "error");
            } else {
                _application.alert("메세지 팝업은 콜백 함수가 필수 입니다.!!", take.systemNm + " Error", "error");
            }
        } else {
            if (typeof aCallBack === "string")
            {
                objRtnCallBack = function(sId, sRtn) {pThis[aCallBack].call(pThis, sId, sRtn=="true"?true:false);}
            } else {
                objRtnCallBack = function(sId, sRtn) {aCallBack.call(pThis, sId, sRtn=="true"?true:false);}
            }

            take.openPopup(
                pThis,
                sPopId,
                "frm::com/comMsg.xfdl",
                {argGbn:"confirm", argTitle:take.systemNm, argMsg:sMsg, argType:sType.toLowerCase()},
                "showtitlebar=false",
                objRtnCallBack);
        }
    }
};

/**
* 공통 Message
* @param  {Object} pThis   폼 오브젝트
* @param  {String} sType   컨펌 타입 (error", "question", "warning", "information")
* @param  {String} sMsgId  다국어 메세지 아이디
* @param  {Array} arrParam 파라메터
* @example take.msg(this, "question", "ML001", { name : "test", text : "정의"});
*          take.msg(this, "question", "{name}가 {text}되지 않았습니다.", { name : "test", text : "정의"});
* @return {N/A}   하단 message
*/
take.msg = function(pThis, sType, sMsgId, arrParam)
{
    var objDs, objDate;
	var nFRow, nRow;
	var sMsg = "", sProgNm, sDateTime;

    sMsg = sMsgId;

    if (sType=="Info") sType = "Information";

	// 다국어 관련 추가     //////////
	if (sMsgId[0] == "M")
	{
		sMsg = take.getWord(pThis, sMsgId);
	}
	///////////////////////////////////

	//if (take.nvl(arrParam, "")!="") sMsg = sMsg.replaceMulti(arrParam);

    //개행 처리
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));

    //용어 파람 처리
	sMsg = sMsg.replace(/(\{)(\w+)(\})/ig,
		function() {
			if (take.nvl(arrParam, "")!="") {
				if (arrParam[arguments[2]] == undefined)
                {
                    return "";
                } else {
                    if (arrParam[arguments[2]][0] == "M")
                    {
                        return take.getWord(pThis, arrParam[arguments[2]]);
                    } else {
                        return arrParam[arguments[2]];
                    }
                }
			} else {
				return "";
			}
		}
	);

    objDs = pThis.getOwnerFrame().form.dsMsg;

    objDate = new Date();
    sDateTime = (objDate.getFullYear()).toString() + "-"
              + (objDate.getMonth() + 1).toString().padLeft(2,"0")  + "-"
              + (objDate.getDate()).toString().padLeft(2,"0") + " "
              + (objDate.getHours()).toString().padLeft(2,"0") + ":"
              + (objDate.getMinutes()).toString().padLeft(2,"0") + ":"
              + (objDate.getSeconds()).toString().padLeft(2,"0") + ":"
              + (objDate.getMilliseconds()).toString().padLeft(2,"0");

    sProgNm = take.getProgInfo(pThis).ProgNm;

    nRow = objDs.addRow();
    objDs.setColumn(nRow, "TYPE",     "msg");
    objDs.setColumn(nRow, "PROVIDER", take.systemNm + " " + sProgNm + " " + sType.toLowerCase());
    objDs.setColumn(nRow, "MSG",      sMsg);
    objDs.setColumn(nRow, "MSGTIME",  sDateTime);

    //this.fnOpenMsgPop();
};
// End 폼 관련 공통함수

// Start nexacro Grid/Dataset 관련 공통함수

/**
 * 로컬스토리지에 데이터셋을 저장
 * @param  {Dataset Object} objDs 로컬스토리에 저장할 데이터셋
 * @return {boolean}       성공/실패 여부
 * @example trace(take.setLocalData(this.dsData)); --> true/false
 */
take.setLocalData = function(objDs)
{
   //변수 선언 및 세팅
   var sOrderList, sId;
   var bSucc;

   //데이터셋 아이디
   sId = objDs.id;

   //데이터셋을 CSV로 가져온다
   sOrderList = objDs.saveCSV();

   //데이터셋 아이디를 키로하여 로컬스토리지에서 데이터를 넣는다.
   bSucc = nexacro.setPrivateProfile(sId, sOrderList);

   //성공 여부 체크
   take.debug(objDs.parent, "[" + sId + (bSucc==true?"] 데이터 저장 성공":"] 데이터 저장 실패"));

   return bSucc;
};

/**
 * 로컬스토리지에 데이터셋을 저장
 * @param  {Dataset Object} objDs 로컬스토리에서 가져온 데이터를 담을 데이터셋
 * @return {boolean}       성공/실패 여부
 * @example trace(take.getLocalData(this.dsData)); --> true/false
 */
take.getLocalData = function(objDs)
{
	//변수 선언 및 세팅
	var sOrderList, sId;
	var bRtn = false;

	//데이터셋 아이디를 키로하여 로컬스토리지에서 데이터를 가져온다
	sId = objDs.id; //데이터셋 아이디

	sOrderList = nexacro.getPrivateProfile(sId); //로컬스토리지의 해당 데이터

	//데이터가 없을 경우
	if (take.nvl(sOrderList, "")=="")
	{
		take.debug(objDs.parent, "로컬 스토리지에 해당 데이터셋이 없습니다.");
		bRtn = false;
	} else {	 //데이터가 있을 경우

		//데이터 셋에 데이터 로드하고 가져온 데이터수 확인
		if (objDs.loadCSV(sOrderList)>0)
		{
			take.debug(objDs.parent, "[" + sId + "] 데이터 가져오기 성공");
		} else {
			take.debug(objDs.parent, "[" + sId + "] 데이터 가져오기 실패");
		}
		bRtn = true;
	}

	return bRtn;
};

/**
 * 데이터셋의 삭제, 수정, 추가등의 변경을 체크한다.
 * @param   {Object} objComp   넥사크로 데이터셋/그리드 컴포넌트
 * @param   {Number} nRow 검사할 ROW 검색 표현식 [값이 없으면 전체]
 * @return  {Boolean}
 * @example trace(take.isDsModified(this.dsList,0)); //--> true/false
 */
take.isDsModified = function(objComp, nRow)
{
	var nRowType = 0;
	var arrType;
    var objDs;
	var nDelCnt, nDelIdx, nModIdx, nInsIdx;

    if (objComp._type_name=="Grid")
    {
        objDs = objComp.getBindDataset();
    } else if (objComp._type_name=="Dataset") {
        objDs = objComp;
    } else {
        take.debug("take.isDsModified", "Grid 또는 Dataset 컴포넌트만 지원하는 기능입니다.");
        return false;
    }

	if( take.nvl(nRow,"")!="")
	{
    //TODO 20190103 ymko 해당 로우의 삭제 여부 체크 필요
		nRowType = objDs.getRowType(nRow);
		if (nRowType == Dataset.ROWTYPE_INSERT || nRowType == Dataset.ROWTYPE_UPDATE) return true;
	} else {

		if( objDs.getDeletedRowCount() > 0) return true;

		//데이터셋의 상태만 축출
		arrType = take.ArrayPluck(objDs._rawRecords,"_rtype");

		//데이터 상태 확인 (수정, 삭제, 추가)
		nDelCnt = objDs._deletedRecords.length;
		nDelIdx = arrType.indexOf(8);
		nModIdx = arrType.indexOf(2);
		nInsIdx = arrType.indexOf(4);

		//수정, 삭제, 추가 데이터가 있을경우 메세지
		if (nDelCnt>0 || nDelIdx>=0 || nModIdx>=0 || nInsIdx>=0) return true;
	}

	return false;
};

/**
 * 체크박스(CHK컬럼)가 체크된 Row를 배열로 반환
 * @param  {Object} objDs   Dataset
 * @param  {String} sChkCol 체크컬럼명 (기본값 CHK)
 * @return {Array}          컬럼아이디
 * @example take.getChkRow(this.dsList);
 */
take.getChkRow = function(objDs, sChkCol, bNF)
{
    //dataset이 들어오지 않으면 return
    if (take.nvl(objDs,"")=="")
    {
        take.debug(objDs.parent, "dataset은 필수입니다.");
        return "";
    }

    //변수 선언
    var sChkCol, sChkRow;
    var arrData, arrRtn;
    var nIdx, nCnt;
    
    //원본데이터 여부 null 처리
    if (take.isEmpty(bNF)) bNF=false;
    
    //체크컬럼명이 없으면 기본값 세팅
    if (take.nvl(sChkCol,"")=="") sChkCol = "CHK";

    //컬럼 Index구하기
    nIdx = objDs.getColIndex(sChkCol);

    //해당 컬럼이 없으면 return
    if (nIdx<0)
    {
        take.debug(objDs.parent, sChkCol + " 컬럼이 없습니다.");
        return "";
    }

    //원본 데이터 여부
    if (bNF)
    {
        //체크 컬럼 데이터
        arrData = take.ArrayPluck(objDs._rawRecords,nIdx);
    } else {
        if (take.nvl(objDs.keystring,"")!="" || take.nvl(objDs.filterstr,"")!="")
        {
            //체크 컬럼 데이터
            arrData = take.ArrayPluck(objDs._viewRecords,nIdx);
        } else {
            //체크 컬럼 데이터
            arrData = take.ArrayPluck(objDs._rawRecords,nIdx);
        }
    }

    //데이터 수 만큼 반복
    sChkRow=""; //초기화
    nCnt = arrData.length-1;
    for (var i=nCnt;i>=0;i--)
    {
        //체크된 값이 있으면
        if (arrData[i]=="1" || arrData[i]==true)
        {
            sChkRow += (sChkRow==""?"":",")+i;
        }
    }

    //체크된 Row가 있는지 여부
    if (take.nvl(sChkRow,"")=="")
    {
        take.debug(objDs.parent, "체크된 Row가 없습니다.");
        return "";
    } else {

        if(sChkRow.indexOf(",")<0) //체크된  Row가 1개일 경우 배열로 리턴
        {
            arrRtn=[sChkRow];
        } else { //체크된 Row가 여러개인 경우 split하여 배열로 리턴
            arrRtn = sChkRow.split(",");
        }
    }

    return arrRtn;
};

/**
 * 체크컬럼 전체 체크
 * @param  {Object}  objGrid  nexacro platform Grid
 * @param  {String}  nCell    그리드 컬럼 index
 * @param  {String}  sColNm   데이터셋 컬럼명
 * @return {N/A}     N/A
 * @example take.gridCheckAll(this.grdList, 0, "CHK");
 */
take.gridCheckAll = function(objGrid, nCell, sColNm)
{
    var sColId;
    var objDs;
    var nValue, nCnt;

    sColId = objGrid.getCellProperty("body", nCell, "text").substr(5);   // 바인드된 컬럼 "bind:CHK"

    objDs = objGrid.getBindDataset();

    if(sColId == sColNm)
    {
        nValue = objGrid.getCellProperty("head", nCell, "text");
        nValue = (nValue == "1" ? "0" : "1");

        nCnt = objDs.rowcount;

        for(var i=0; i < nCnt; i++)
        {
            if ( objDs.getColumn(i, sColId) != '2')
            {
                objDs.setColumn(i, sColId, nValue);
            }
        }

        objGrid.setCellProperty("Head", nCell, "text", nValue);
    }
};

/**
 * 데이터 셋의 해당 컬럼에 일치하는 Row를 배열로 반환
 * @param  {Object}  objDs   Dataset
 * @param  {String}  aCol    컬럼명 / 컬럼 index
 * @param  {String}  sVal    찾을 값
 * @param  {boolean} bFilter 필터링 기준으로 처리 여부 (기본값 false)
 * @return {Array}          일치하는 Row를 배열로 반환
 * @example take.getChkRow(this.dsList);
 */
take.getFindRows = function(objDs, aCol, sVal, bFilter)
{
    var arrRows = new Array();

    //dataset이 들어오지 않으면 return
    if (take.nvl(objDs,"")=="")
    {
        take.debug(objDs.parent, "dataset은 필수입니다.");
        return "";
    }

    if (take.isNumber(aCol))
    {
        nIdx = aCol;
    } else {
        //컬럼 Index구하기
        nIdx = objDs.getColIndex(aCol);
    }

    //해당 컬럼이 없으면 return
    if (nIdx<0)
    {
        take.debug(objDs.parent, aCol + " 컬럼이 없습니다.");
        return "";
    }

    //필터링된 데이터에서 가져올지 여부 확인
    if (take.nvl(bFilter,false))
    {
        //필터링 된 해당 컬럼 데이터
        arrData = take.ArrayPluck(objDs._viewRecords,nIdx);
    } else {
        //필터링 되지 않은 해당 컬럼 데이터
        arrData = take.ArrayPluck(objDs._rawRecords,nIdx);
    }

    //데이터 수 만큼 반복
    nCnt = arrData.length;
    for (var i=0;i<nCnt;i++)
    {
        //체크된 값이 있으면
        if (arrData[i]==sVal)
        {
            arrRows.push(i);
        }
    }

    //체크된 Row가 있는지 여부
    if (arrRows.length<=0)
    {
        //take.debug(objDs.parent, "일치하는 Row가 없습니다.");
        return "";
    }

    return arrRows;
};

/**
 * 데이터 셋의 해당 컬럼에 일치하는 Row를 배열로 반환
 * @param  {Object}  objDs   Dataset
 * @param  {String}  sExpr   Expr
 * @param  {boolean} bFilter 필터링 기준으로 처리 여부 (기본값 false)
 * @return {Array}           일치하는 Row를 배열로 반환
 * @example take.getFindRowsExpr(this.dsList, "COLUMN00=='01', false);
 */
take.getFindRowsExpr = function(objDs, sExpr, bFilter)
{
    var arrRows = new Array();
    var objRecords;
    var fnExpr;

    //dataset이 들어오지 않으면 return
    if (take.nvl(objDs,"")=="")
    {
        take.debug(objDs.parent, "dataset은 필수입니다.");
        return "";
    }

    //trace("_viewRecords --> " + objDs._viewRecords);
    //trace("_rawRecords --> " + objDs._rawRecords);

    //필터링된 데이터에서 가져올지 여부 확인
    if (take.nvl(bFilter,false))
    {
        //필터링 된 해당 컬럼 데이터
        objRecords = objDs._viewRecords;
    } else {
        //필터링 되지 않은 해당 컬럼 데이터
        objRecords = objDs._rawRecords;
    }

    fnExpr = objDs._createExprFunc(sExpr);

    //데이터 수 만큼 반복
    nCnt = objRecords.length;

    for (var i=0;i<nCnt;i++)
    {
        //일치하는 값이 있으면
        if (fnExpr.call(null, null, null, null, null, null, objRecords[i], null))
        {
            arrRows.push(i);
        }
    }

    //일치하는 Row가 있는지 여부
    if (arrRows.length<=0)
    {
        //take.debug(objDs.parent, "일치하는 Row가 없습니다.");
        return "";
    }

    return arrRows;
};

/**
 * body cell index로 binding 된 컬럼명을 얻어온다.
 * @param  {Object} objGrid Grid Component
 * @param  {Number} nIdx    Grid body Cell index
 * @return {String}         컬럼아이디
 * @example take.getBindColName(this.Grid00, 1);
 */
take.getBindColName = function(objGrid, nIdx)
{
	if (take.nvl(objGrid,"")=="" || take.nvl(nIdx,-1)<0) return "";

	var sText, sColId;
	var nSubCell;

	sText  = "";
	sColId = "";

	nSubCell = objGrid.getCellProperty("body", nIdx, "subcell");

	if ( nSubCell > 0 )
	{
		sText = objGrid.getSubCellProperty("body", nIdx, 0, "text");
	} else {
		sText = objGrid.getCellProperty("body", nIdx, "text");
	}

	if ( take.nvl(sText, "") != "")
	{
		if ( sText.search(/^BIND\(/) > -1 )
		{
			sColId = sText.replace(/^BIND\(/, "");
			sColId = sColId.substr(0, sColId.length-1);
		} else if ( sText.search(/^bind:/) > -1 ) {
			sColId = sText.replace(/^bind:/, "");
		}
	}

	return sColId;
};

/**
 * 트리 컬럼의 자식 노드를 배열로 리턴
 * @param  {Object} objGrid Grid Component
 * @param  {Number} nIdx    Grid body Tree Cell index
 * @param  {Number} nRow    Grid body Tree Row index
 * @return {Array}          Dataset Rows 해당하는 자식 노드 배열
 * @example take.getTreeChildRows(this.Grid00, 1, 1);
 */
take.getTreeChildRows = function(objGrid, nIdx, nRow)
{
    var sColumn;
    var nCnt, nRowRev, nCurLev;
    var objDs;
    var arrRtn = new Array();

    sColumn = objGrid.getCellProperty("body", nIdx, "treelevel");
    sColumn = sColumn.replace("bind:","");

    objDs = objGrid.getBindDataset();

    //데이터셋 row가 넘어옴
//    nRow = objGrid.getDatasetRow(nRow);
//     nDRow = objGrid.getDatasetRow(nRow);
//     nRow = (nDRow<0?nRow:nDRow);
    nCnt = objDs.rowcount;

    nCurLev = nexacro.toNumber(objDs.getColumn(nRow,sColumn));

    for (var i=nRow+1;i<nCnt;i++)
    {
        nRowRev = nexacro.toNumber(objDs.getColumn(i,sColumn));

        if (nRowRev==nCurLev+1)
        {
            arrRtn.push(i);
        } else {
            if (nCurLev==nRowRev) break;
        }
    }

    //해당하는 자식 노드가 없을경우 -1 리턴
    return arrRtn.length<=0?-1:arrRtn;
};

/**
 * 트리 컬럼의 하위 자손들의 노드를 배열로 리턴
 * @param  {Object}  objGrid Grid Component
 * @param  {Number}  nIdx    Grid body Tree Cell index
 * @param  {Number}  nRow    Grid body Tree Row index
 * @param  {Boolean} bCallee 재귀호출여부 사용자 호출시 제외
 * @return {Array}           Dataset Rows 해당하는 자식 노드 배열
 * @example take.getTreeFamilyRows(this.Grid00, 1, 1);
 */
take.getTreeFamilyRows = function(objGrid, nIdx, nRow, bCallee)
{
    var sColumn, sCurLev;
    var nCnt;
    var objDs;
    var arrChild, arrRtn = new Array();

    //처음 호출 세팅
    bCallee = take.nvl(bCallee,false);

    sColumn = objGrid.getCellProperty("body", nIdx, "treelevel");
    sColumn = sColumn.replace("bind:","");

    //데이터셋 row가 넘어옴
//     nDRow = objGrid.getDatasetRow(nRow);
//     nRow = (nDRow<0?nRow:nDRow);

    objDs = objGrid.getBindDataset();

    if (!objGrid.isTreeLeafRow(nRow, true))
    {
        arrChild = take.getTreeChildRows(objGrid, nIdx, nRow);
        nCnt = arrChild.length;

        if (nCnt>0)
        {
            for (var i=0;i<nCnt;i++)
            {
                arrRtn.push(arrChild[i]);
                arrRtn = arrRtn.concat(take.getTreeFamilyRows(objGrid, nIdx, arrChild[i], true));
            }
        }
    } else {
        if (!bCallee) //처음 호출이 아닐경우 row추가
        {
        //    arrRtn.push(nRow);
        //} else { //처음 호출일 경우 자식이 없으므로 -1 리턴
            arrRtn = -1;
        }
    }

    //해당하는 자식 노드가 없을경우 -1 리턴
    return arrRtn;
};

/**
 * 트리 컬럼의 형재 노드를 배열로 리턴
 * @param  {Object} objGrid Grid Component
 * @param  {Number} nIdx    Grid body Tree Cell index
 * @param  {Number} nRow    Grid body Tree Row index
 * @return {Array}          Dataset Rows 해당하는 형재 노드 배열
 * @example take.getBindColName(this.Grid00, 1, 1);
 */
take.getTreeNodeRows = function(objGrid, nIdx, nRow)
{
    var sColumn, sCurLev;
    var nCnt, nPRow;
    var objDs;
    var arrRtn = new Array();

    sColumn = objGrid.getCellProperty("body", nIdx, "treelevel");
    sColumn = sColumn.replace("bind:","");

    nPRow = objGrid.getTreeParentRow(nRow);

    //데이터셋 row가 넘어옴
//     nDRow = objGrid.getDatasetRow(nRow);
//     nRow = (nDRow<0?nRow:nDRow);
    objDs = objGrid.getBindDataset();
    nCnt = objDs.rowcount;

    sCurLev = objDs.getColumn(nRow,sColumn);

    for (var i=0;i<nCnt;i++)
    {
        if (objDs.getColumn(i,sColumn)==sCurLev)
        {
            //테이터셋 row가 넘어옴
            //if (objGrid.getTreeParentRow(objGrid.getTreeRow(i))==nPRow)
            if (objGrid.getTreeParentRow(i)==nPRow)
            {
                arrRtn.push(i);
            }
        }
    }

    //해당하는 형재 노드가 없을경우 -1 리턴
    return arrRtn.length<=0?-1:arrRtn;
};

/**
 * 해당하는 레벨의 노드를 배열로 반환
 * @param  {Object} objGrid 그리드 Object
 * @param  {Number} nIdx    tree 컬럼 인덱스
 * @param  {Number} nLev    tree Level 값
 * @return {Array}          Dataset Rows 해당하는 노드 배열
 * @example take.getTreeLevRows(objGrid, 1, 1);
 */
take.getTreeLevRows = function(objGrid, nIdx, nLev)
{
    //변수 선언
    var objDs, pThis;
	var arrRow;
    var sLevel;

    sLevel = objGrid.getCellProperty("body", nIdx, "treelevel");
    sLevel = sLevel.replace("bind:","");

    if (take.nvl(sLevel,"")=="")
    {
        if (take.nvl(pThis,"")=="") pThis = take.getParentForm(objGrid, true);
        take.debug(pThis, "해당 컬럼이 없습니다.");
        return false;
    }

    objDs = objGrid.getBindDataset();

    nIdx = objDs.getColIndex(sLevel);

    if (nIdx<0)
    {
        if (take.nvl(pThis,"")=="") pThis = take.getParentForm(objGrid, true);
        take.debug(pThis, "해당하는 레벨(" + sLevel + ") 컬럼이 없습니다.");
        return false;
    }

    //데이터셋을 맵으로 가져와서 처리
	arrRow = objDs._rawRecords.map(
			function(object) {
                //level column이 해달 레벨 일때
                if (object[nIdx]==nLev)
				{
                    //해당 row를 리턴
                    return object["_rawidx"];
				}
			});

    //빈 값을 제거후 리턴
	return take.ArrayTrim(arrRow);
};

/**
 * Tree level 정보
 * @param  {Object} objGrid 그리드 Object
 * @param  {Number} nIdx    tree 컬럼 인덱스
 * @return {Object}         min 최소, max 최대 레벨 값을 Object로리턴
 * @example take.getTreeLevelInfo(objGrid, 1);
 */
take.getTreeLevelInfo = function(objGrid, nIdx)
{
    var sLevel;
    var objDs, pThis;

    sLevel = objGrid.getCellProperty("body", nIdx, "treelevel");
    sLevel = sLevel.replace("bind:","");

    if (take.nvl(sLevel,"")=="")
    {
        if (take.nvl(pThis,"")=="") pThis = take.getParentForm(objGrid, true);
        take.debug(pThis, "해당 컬럼이 없습니다.");
        return false;
    }

    objDs = objGrid.getBindDataset();

    return {min:objDs.getMinNF(sLevel), max:objDs.getMaxNF(sLevel)};
};

/**
 * Grid Head 정보
 * @param  {Object} objGrid 그리드 Object
 * @return {Object}         cellcount : Head 셀 수, rowcount : head 로우 수, height : Head 높이 합을 Object로리턴
 * @example take.getGridHeadInfo(objGrid);
 */
take.getGridHeadInfo = function(objGrid)
{
    var nCnt, nRowCnt, nHeight = 0;

    nCnt	= objGrid.getCellCount("head");
    nRowCnt = parseInt(objGrid.getCellProperty("head", nCnt-1, "row")+1);

    for(var i=0; i<nRowCnt; i++)
	{
        nHeight += nexacro.toNumber(objGrid.getFormatRowProperty(i, "size"));
    }

    return {cellcount:nCnt, rowcount:nRowCnt, height:nHeight};

};
// End nexacro Grid/Dataset 관련 공통함수

/**
 * 숫자 여부 확인
 * @param  {Anonymous}  aVal 확인 대상 값
 * @return {boolean}    true/false 숫자 여부
 */
take.isNumber = function(aVal)
{
    //문자형 숫자, 숫자 패턴
    var objReg = /^-?\d+\.?\d*$/;

    return objReg.test(aVal);
};

/**
 * MDI 프로그램 정보
 * @param  {Object} pThis       nexacro Form
 * @return {Object} objProgInfo (ProgId, ProgNm)
 */
take.getProgInfo = function(pThis)
{
	var sProgId, sProgNm, aUserParam;
	var objProgInfo = new Object();

	objProgInfo.ProgId = "";
	objProgInfo.ProgNm = take.systemId;

	if (take.nvl(pThis,"")=="") return objProgInfo;

	if( typeof(pThis) === "object")
	{
		if (take.CompTypeName(pThis) == "Form")
		{
			try
			{
				//sProgId = pThis.ProgId || pThis.parent.parent.parent.ProgId || "";
				//sProgNm = pThis.ProgNm || pThis.parent.parent.parent.ProgNm || pThis.titletext || take.systemId;
                sProgId = pThis.ProgId || pThis.parent.ProgId || "";
				sProgNm = pThis.ProgNm || pThis.parent.ProgNm || pThis.titletext || take.systemId;
				aUserParam = pThis.UserParam || pThis.parent.UserParam || "";
			} catch(e) {
				//오류 방지용
				sProgId = "";
				sProgNm = take.systemId;
			}

			objProgInfo.ProgId = sProgId;
			objProgInfo.ProgNm = sProgNm;
			objProgInfo.UserParam = aUserParam;
		}
	}

	return objProgInfo;
};

/**
 * Empty 체크
 * @param  {String}  sValue 값
 * @return {Boolean}        Empty 여부
 * @example take.isEmpty("test"); //--> true
 */
take.isEmpty = function(sValue)
{
    sValue = take.getTrim(sValue);
	if (sValue == null) return true;
    if (sValue == "") return true;
	if (new String(sValue).valueOf() == "null"	   ) return true;
	if (new String(sValue).valueOf() == "undefined") return true;

	// String, Array ==> length == 0
	if (typeof sValue === 'string' || sValue.constructor === Array)
    {
		return sValue.length == 0 ? true : false;
    } else if (take.isObject(sValue)) {
		for (var p in sValue)
			if (sValue.hasOwnProperty(p)) return false;

		return true;
	}

	return false;
};

/**
 * null 체크후 trim
 * @param  {String}  sValue 값
 * @return {String}  trim된 값
 * @example take.getTrim("te st"); //--> test
 */
take.getTrim = function(sValue)
{
	if (sValue == null							   ) return "";
	if (new String(sValue).valueOf() == "undefined") return "";
	if (new String(sValue) == null				   ) return "";

	return (new String(sValue)).replace(/^\s+|\s+$/g, '');
};

/**
 * Object 체크
 * @param  {String}  sValue 값
 * @return {Boolean} Object 여부
 * @example take.isObject(objTest); //--> true
 */
take.isObject = function(objVal)
{
	if (objVal === null || objVal === undefined) return false;

	// nexacro Component
	if (objVal instanceof nexacro.Component) return false;

	// nexacro Object (e.g. Dataset)
	if (objVal instanceof nexacro.Object) return false;

	return typeof objVal == "object" && 'constructor' in objVal && objVal.constructor === Object;
};

/**
 * Object를 합쳐서 리턴
 * @param  {Object} objMain 리턴할 Object
 * @param  {Object} objCopy 복사할 Object
 * @return {Object} 합쳐진 Object
 * @example take.getFileExt("C:\\abcd.exe"); //--> exe
 */
take.getObjectAssign = function(objMain, objCopy)
{
    for (var x in objCopy)
    {
        objMain[x] = objCopy[x];
    }
    //console.dir(objMain)
    return objMain;
};

/**
 * 파일 확장자 확인
 * @param  {String} sFileName 파일 네임(풀)
 * @return {String} 확장자
 * @example take.getFileExt("C:\\abcd.exe"); //--> exe
 */
take.getFileExt = function(sFileName)
{
	var arrRtn = new Array(), arrFileName;
    var nPos, nLen;

	if( take.isEmpty(sFileName) ) {
		return arrRtn;
	}

	sFileName = sFileName.replace( "\\", "/");
	arrFileName = sFileName.split("/");


	//1) 파일경로 & 파일명
	if( sFileName.charAt(sFileName.length-1) == '/' ) {
		for(var i = 0; i < arrFileName.length; i++) {
			if( i == 0) arrRtn[0] = arrFileName[i];
			else        arrRtn[0] = arrRtn[0] + "/" + arrFileName[i];
		}
		arrRtn[1] = "";
	} else {
		for(var i = 0; i < arrFileName.length-1; i++) {
			if( i == 0) arrRtn[0] = arrFileName[i];
			else        arrRtn[0] = arrRtn[0] + "/" + arrFileName[i];
		}

		arrRtn[1] = arrFileName[arrFileName.length-1];
	}

	//2) 파일명(확장자 제외) & 확장자
	if( !take.isEmpty(arrRtn[1]) ) {
		nPos = -1;
        nLen = arrRtn[1].length;

		for(var i=-1;i>=0;i--)
        {
			if( charAt(arrRtn[1], i) == '.')
            {
				nPos = i;
				break;
			}
		}

		if( nPos > 0)
        {
			arrRtn[2] = arrRtn[1].substr(0, nPos);
			arrRtn[3] = arrRtn[1].substr(nPos+1);
		} else {
			arrRtn[2] = arrRtn[1];
			arrRtn[3] = "";
		}
	}
	return arrRtn;
};

/**
 * 데이타셋 스키마정보를 복사
 * @param  {Object} objRtnDs  대상(리턴할) 데이터셋
 * @param  {Object} objCopyDs 카피할 데이터셋
 * @return {Object} Dataset   리턴 데이터셋
 * @example take.gf_copyLayout(Dataset00, Dataset01); //--> Dataset00
 */
take.copyDsLayout = function(objRtnDs, objCopyDs)
{
    var objCol, objColInfo;
    var arrColId;
    var nCnt;
    var sColId;

    objCol = take.nvl(objCopyDs.colinfos,"");

    if (objCol != "")
    {
        arrColId = objCol._idArray;
        nCnt = arrColId.length;
    } else {
        take.trace("System", "Info", "복사 할 데이터셋(" + objCopyDs.name + ")에 컬럼 정보가 없습니다.");
        return false;
    }

    if (nCnt>0)
    {
        objRtnDs.set_enableevent(false);
        objRtnDs.clear();

        for(var i=0;i<nCnt;i++)
        {
            sColId = arrColId[i];
            objColInfo = objCopyDs.getColumnInfo(sColId);
            objRtnDs.addColumn(sColId, objColInfo.type, objColInfo.size);
        }

        objRtnDs.set_enableevent(true);
    }

	return objRtnDs;
};

/**
 * 공통 Onload
 * @param   {Object}  pThis      nexacro Form Object
 * @return  {boolean} true/false 성공 실패 여부
 * @example trace(take.formOnLoad(this)); //--> true
 */
take.formOnLoad = function(pThis)
{
    try
    {
        var bRtn;
        var sTxt;

        //다국어 사용시 처리
        //if(take.bDomain) takedomain.LangService(pThis);

        if(!take.isEmpty(pThis.parent.ProgId)){
			pThis.ProgId = pThis.parent.ProgId;
		}
		if(!take.isEmpty(pThis.parent.ProgNm)){
			pThis.ProgNm = pThis.parent.ProgNm;
		}

        if(nexacro.getApplication().gdsUserInfo.getRowCount() > 0){
			//로그인 세션이 존재 할 경우만 처리
            //버튼 권한 체크
            take.formBtnRole(pThis);

            //개인화 옵션 사용시만 적용
			//pThis._xfnGridPersonalizeSearch();
		}

        if (take.nvl(_application["afnFormOnLoad"], "")!="")
        {
            bRtn = take.nvl(_application.afnFormOnLoad(pThis),true);

            if (bRtn)
            {
                sTxt = "FormOnLoad Success";
            } else {
                sTxt = "application afnFormOnLoad Return false";
            }
		} else {
            sTxt = "application에 afnFormOnLoad 함수가 존재하지 않습니다.";
            bRtn = false;
        }

		//if(nexacro.getApplication().gdsUserInfo.getRowCount() > 0){
		//	//로그인 세션이 존재 할 경우만 처리
        //    //개인화 옵션 사용시만 적용
		//	//pThis._xfnGridPersonalizeSearch();
		//}

		if (take.isQuickView())
        {
            // Take Common Button
            pThis.addEventHandler("onkeydown", take.ComBtnShow, pThis);
        }

        // Take Debug
        pThis.addEventHandler("onkeydown" , take.debugWindow, pThis);

        if (bRtn) take.debug(pThis.name+".take.formOnLoad", sTxt);

        return bRtn;

    } catch(e) {
        take.alert(pThis, "Error", "FormOnLoad Error :: Error code : ({errcode}) {form}하지 못하였습니다. /n {sysmgr}에게 문의하여 주십시요.", {errcode : e, form: "해당 화면을 오픈", sysmgr : "시스템 관리자"});
        return false;
    }
};

/**
 * 퀵뷰일경우 Ctrl+Q 단축키로 공통 디버그 팝업 오픈
 * @param  {Object}  Form object
 * @return {Object}  e
 */
take.debugWindow = function (obj, e)
{
    if (e.ctrlkey)
    {
        // 디버그 창 : Ctrl + Q
        if (e.keycode==81)
        {
            //take.openPopup(this, "comDebug" , "frm::com/comDebug.xfdl", {Title:"디버그 창"}, "width=419 height=740", "", true);
            take.openPopup(this, "comDebug" , "frm::com/comDebugNew.xfdl", {Title:"뉴 디버그 창"}, "width=1000 height=800", "", true);
        }
    }
};

/**
 * 퀵뷰일경우 Ctrl+Alt+T 단축키로 공통 버튼 팝업 오픈
 * @param  {Object}  Form object
 * @return {Object}  e
 */
take.ComBtnShow = function(obj, e)
{
    if (e.ctrlkey && e.altkey && e.keycode==84)
    {
        take.openPopup(this, "comBtnPop", "frm::com/comBtnTest.xfdl", {}, "showtitlebar=true showstatusbar=false layered=false width=550 height=100", "fnPopCallBack", true);
    }
};

/**
 * 컴포넌트를 폼에 중앙 정렬(Width)
 * @param   {Object}  objComp      nexacro Component Object
 * @param   {Number}  nFormWidth   Form Width
 * @param   {Number}  nMinWidth    최소 Width
 * @return  {boolean} true/false 성공 실패 여부
 * @example take.formCenter(this.div, 500, 300);
 */
take.formCenter = function(objComp, nFormWidth, nMinWidth)
{
    var nLeft, nCnt;

    if (take.nvl(objComp, "")=="") return;

    if (nFormWidth>=nMinWidth)
    {

        if (objComp.constructor === Array)
        {
            nCnt = objComp.length;

            if (nCnt<=0) return;

            for (var i=0; i<nCnt; i++)
            {
                nLeft = (nFormWidth - objComp[i].getOffsetWidth())/2;

                objComp[i].set_left(nLeft);
            }
        } else {
            nLeft = (nFormWidth - objComp.getOffsetWidth())/2;

            objComp.set_left(nLeft);
        }
    }
};

/**
 * 현재 서비스중인 URL 가져오기 (typedefinition에서 가져오기)
 * @param  N/A
 * @example take.getSvcUrl();
 */
take.getSvcUrl = function()
{
	if (take.nvl(take.SvcId, "") == "") take.svcFindReplace();

    var sUrl, sSvcId = take.nvl(take.SvcId, "");
    var objEnv, objSrv;

    objEnv = nexacro.getEnvironment();
    objSrv = objEnv.services;

    if (sSvcId=="" || sSvcId=="SVC_LOC") {
        sUrl = objSrv["SVC_LOC"].url;
    } else {
        sUrl = objSrv[sSvcId].url;
        //sUrl = sUrl.replace(take.systemId+"/", "");
    }

    return sUrl;
};

/**
 * 현재 서비스중인 호스트 가져오기 (typedefinition에서 가져오기)
 * @param  N/A
 * @example take.getSvcUrl();
 */
take.getHostUrl = function()
{
    var sUrl;
    var nIdx;

    sUrl = take.getSvcUrl();

    nIdx = sUrl.indexOf("/",7);

    sUrl = sUrl.substr(0,nIdx);

    return sUrl;
};

/**
 * [description]
 * @param  {Object} pThis           Object Form
 * @param  {String} sFrameId        프레임 아이디
 * @param  {String} sFormUrl        Form URL
 * @param  {Object} objArgList      팝업에 넘길 인자값
 * @param  {String} sOptions        옵션
 * @param  {String} sPopupCallback  콜백 함수
 * @param  {boolean} bModeless      모달리스 여부
 * @return {N/A}                    팝업
 * @example take.openPopup(this, "PopUp", "guide::sample/samplePop.xfdl", {param1: "param1"}, "showtitlebar=false layered=true", "fnCallBack", false);
 */
take.openPopup = function(pThis, sFrameId, sFormUrl, objArgList, sOptions, sPopupCallback, bModeless)
{
	var nLeft = -1;
	var nTop = -1;
	var nWidth = 1;
	var nHeight = 1;
	var bShowTitle = true;
	var bShowStatus = false;
	var bLayered = false;
	var nOpacity = 100;
	var bAutoSize = true;
	var bResizable = true;
	var bRound = false;
	var bReload = false; //열려진 화면 일 때 reload 처리 유무
	var sOpenstatus = "";
	var sDragMoveType = "all";
	var sTitleText = "";
	var objParentFrame = null;

	if (pThis)
	{
        if (pThis==_application)
        {
            objParentFrame = nexacro.getApplication().mainframe;
        } else {
            objParentFrame = pThis.getOwnerFrame();
        }
	} else {
		objParentFrame = nexacro.getApplication().mainframe;
	}

	//objParentFrame.QuickViewFrame.cust.titlebar.style.height = "40";

	sOptions += "";
	var aVal = sOptions.trim().split(" ");
	for (var i = 0; i < aVal.length; i++)
	{
		var aVal2 = aVal[i].trim().split("=");
		switch (aVal2[0])
		{
			case "top":
				nTop = parseInt(aVal2[1]);
				break;
			case "left":
				nLeft = parseInt(aVal2[1]);
				break;
			case "width":
				nWidth = parseInt(aVal2[1]);
				break;
			case "height":
				nHeight = parseInt(aVal2[1]);
				break;
			case "title":
			case "titlebar":
			case "showtitlebar":
				bShowTitle = aVal2[1];
				break;
			case "titletext":
				sTitleText = aVal2[1];
				break;
			case "status":
			case "statusbar":
			case "showstatusbar":
				bShowStatus = aVal2[1];
				break;
			case "layered":
				bLayered = aVal2[1];
				break;
			case "opacity":
				nOpacity = aVal2[1];
				break;
			case "autosize":
				bAutoSize = aVal2[1];
				break;
			case "resizable":
				bResizable = aVal2[1];
				break;
			case "round":
				bRound = aVal2[1];
				break;
			case "reload":
				bReload = aVal2[1];
				break;
            case "dragmovetype":
                sDragMoveType = aVal2[1];
				break;
			case "openstatus":
				sOpenstatus = aVal2[1];
				break;
		}
	}
	var sOpenalign = "";
	sOpenalign = "center middle";

	if (nWidth == 1) nWidth = 600;
	if (nHeight == 1) nHeight = 500;

	if (nLeft == -1)
	{
		nLeft = (nexacro.getApplication().mainframe.width - nWidth) / 2;
		if (bModeless) nLeft += system.clientToScreenX(nexacro.getApplication().mainframe, 0);
	}
	if (nTop == -1)
	{
		nTop = (nexacro.getApplication().mainframe.height - nHeight) / 2;
		if (bModeless) nTop += system.clientToScreenY(nexacro.getApplication().mainframe, 0);
	}

	if (bModeless)
	{
		//열린 modeless 팝업 화면이 존재하면 focus 처리 후 리턴.
		var objPopFrams = take.nvl(nexacro.getApplication().popupframes, "");
		var objPopFrame = objPopFrams!=""?objPopFrams[sFrameId]:false;

		if (objPopFrame)
		{
			objPopFrame.setFocus();
			if (bReload == "true")
			{
				//arguments 셋팅
				//if (!Eco.isEmpty(objArgList))
				if (take.nvl(objArgList, "")!="")
				{
					if (!objPopFrame.arguments) objPopFrame.arguments = {};

					for (var key in objArgList)
					{
						if (objArgList.hasOwnProperty(key))
						{
							objPopFrame.arguments[key] = objArgList[key];
						}
					}
				}
				objPopFrame.pThis.reload();
			}
			return;
		}

		//modeless callback 값 setting
		objArgList._close_callback = sPopupCallback;
        take.trace("take.openPopup", "Info", "Modeless 팝업은 콜백을 허용하지 않습니다.");
        //trace("Modeless 팝업은 콜백을 허용하지 않습니다.");
		//var sOpenStyle = "cssclass=Popup";
		var sOpenStyle = "";

		if (bShowTitle == "false") sOpenStyle += "showtitlebar=false";
		if (bShowStatus == "true") sOpenStyle += " showstatusbar=true";
		if (bAutoSize == "false") sOpenStyle += " autosize=false";
		if (bResizable == "false")
		{
			sOpenStyle += " resizable=false";
		}
		else
		{
			sOpenStyle += " resizable=true";
		}

		nexacro.open(sFrameId, sFormUrl, objParentFrame, objArgList, sOpenStyle, nLeft, nTop, nWidth, nHeight, pThis);
        
	}
	else
	{
		gFnTrace("1");
		newChild = new ChildFrame(); 

		newChild.init(sFrameId, nLeft, nTop, nWidth, nHeight, null, null, sFormUrl);

		newChild.set_background("transparent");
		newChild.set_dragmovetype(sDragMoveType);
		newChild.set_showtitlebar(bShowTitle);
		newChild.set_autosize(bAutoSize);
		newChild.set_resizable(bResizable);
		newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_titlebarheight(40);
		newChild.set_opacity(nOpacity);
		newChild.set_openstatus(sOpenstatus);
		
		if (take.nvl(objArgList, "")!="")
		{
			for (var key in objArgList)
			{
				if (objArgList.hasOwnProperty(key))
				{
					gFnTrace(key);
					gFnTrace(objArgList[key]);
				}
			}
		}
		         
		
		gFnTrace("22");
		
		//arguments 셋팅
		//if (!Eco.isEmpty(objArgList))
		if (take.nvl(objArgList, "")!="")
		{
			if (!newChild.arguments) newChild.arguments = {};
			for (var key in objArgList)
			{
				if (objArgList.hasOwnProperty(key)) newChild.arguments[key] = objArgList[key];
			}
		}

        //callback rtn value를 Object로 받을수 있도록 처리
        pThis["_tv_objRtn"] = {};
        pThis["_tv_objRtn"][sFrameId] =  null;
        gFnTrace("3");
        newChild.showModal(
            objParentFrame, 
            objArgList, 
            pThis, 
            function (sPopId, sRtn)
            {
                var aRtn = take.nvl(pThis["_tv_objRtn"][sPopId],"");                

                if (aRtn=="")
                {
                    //Return Object가 없는 경우 기존 대로 text 리턴
                    take.callFunction(pThis, sPopupCallback, sPopId, sRtn);
                } else {                 
                    take.callFunction(pThis, sPopupCallback, sPopId, aRtn);
                }
            });
        newChild._tbModal = bModeless;
        //_application.mainframe.WorkFrame._frames[sFrameId]._tbModal = bModeless;
		//newChild.showModal(objParentFrame, objArgList, pThis, sPopupCallback);
	}
};

/**
 * 공통 데이터 팝업
 * @param  {Object}  pThis       nexacro form object
 * @param  {String}  sPopId      팝업아이디
 * @param  {String}  sTitle      팝업타이틀
 * @param  {String}  sTxt        검색어
 * @param  {Object}  objDs       데이터셋
 * @param  {String}  sNameSpace  네임스페이스
 * @param  {Object}  objDsIn     검색조건 데이터셋
 * @param  {Array}   arrColInfo  대상 컬럼  (컬럼id, 컬럼명, 컬럼 사이즈)
 * @param  {Boolean} bMulti      멀티 선택 여부
 * @param  {String}  sCallBack   완료후 실행할 CallBack 함수
 * @return {Function} CallBack Function
 * @example take.dataSelPopUp(this, "test", "테스트팝업", "테스트", this.dsCode, "", null, "", [["Column1", "컬럼이번", "30"],["Column0", "컬럼일번", "20"]], true, "fnCallBack");
 */
take.dataSelPopUp = function(pThis, sPopId, sTitle, sTxt, objDs, sNameSpace, objDsIn, sParam, arrColInfo, bMulti, sCallBack)
{
	/**
	take.objCallBack[pThis.name+"_popup_"+sPopId] = "";
	take.objCallBack[pThis.name+"_popup"] = "";

	if (take.nvl(sCallBack, "")!="")
	{
		if (take.isFunction(sCallBack))
		{
			//최종 폼에서 처리할 콜백함수를 변수에 담는다.
			take.objCallBack[pThis.name+"_popup_"+sPopId] = sCallBack;

		} else {
			//최종 폼에서 처리할 콜백함수를 변수에 담는다.
			take.objCallBack[pThis.name+"_popup"] = sCallBack;
		}
	}
	**/
	take.debug(pThis.name + ".take.dataSelPopUp", "dataSelPopUp(" + sPopId + ") 팝업 호출");

	//PopUpOpen
	take.openPopup(pThis, sPopId, take.codePopUrl, {Title:sTitle, Text:sTxt, Dataset: objDs, NameSpace: sNameSpace, InDataset: objDsIn, Param: sParam, ColInfo:arrColInfo, Multi:bMulti}, "showtitlebar=true layered=false", sCallBack, false);
};

/**
 * 공통 데이터 팝업
 * @param  {Object}  pThis       nexacro form object
 * @param  {String}  sPopId      팝업아이디
 * @param  {String}  sTitle      팝업타이틀
 * @param  {String}  sTxt        검색어
 * @param  {Object}  objDs       데이터셋
 * @param  {Object}  objDsIn     검색조건 데이터셋
 * @param  {String}  sCode       그룹코드
 * @param  {Array}   arrColInfo  대상 컬럼  (컬럼id, 컬럼명, 컬럼 사이즈)
 * @param  {Boolean} bMulti      멀티 선택 여부
 * @param  {String}  sCallBack   완료후 실행할 CallBack 함수
 * @return {Function} CallBack Function
 * @example take.dataSelPopUp(this, "test", "테스트팝업", "테스트", this.dsCode, "", null, "", [["Column1", "컬럼이번", "30"],["Column0", "컬럼일번", "20"]], true, "fnCallBack");
 */
take.codePopUp = function(pThis, sPopId, sTitle, sTxt, objDs, objDsIn, sCode, arrColInfo, bMulti, aCallBack, sUserParam)
{
	var sParam, sUrl;

	take.debug(pThis.name + ".take.codePopUp", "codePopUp(" + sPopId + ") 팝업 호출");

    //sParam = "clCd='" + sCode +"'";

    sUrl = "SVC_LOC::com/syst/selectMultiCodeList.do";

	//PopUpOpen
	take.openPopup(pThis, sPopId, take.codePopUrl, {Title:sTitle, Text:sTxt, Dataset: objDs, NameSpace: sUrl, InDataset: objDsIn, Param: sUserParam, ColInfo:arrColInfo, Multi:bMulti, clCd:sCode}, "showtitlebar=true layered=false", aCallBack, false);
};

/**
 * 공통 쿼리 조회 팝업
 * @param  {Object}  pThis       nexacro form object
 * @param  {String}  sPopId      팝업아이디
 * @param  {Object}  objArgList  팝업에 넘길 인자값
 * @param  {String}  sCallBack   완료후 실행할 CallBack 함수
 * @return {Function} CallBack Function
 * @example take.sqlPopUp(this, "test", { SQL : "strQuery_Team", CODE: "TM_CD", CODENAME : "TM_NM", CODE_DSP : "팀 코드", CODENAME_DSP : "팀명"} , "fnCallBack");
 */
take.sqlPopUp = function(pThis, sPopId, objArgList, aCallback)
{
    // 변수 선언 및 세팅
    var sFormUrl, sOptions;
    var bModelss;
    
    sFormUrl = "frm::com/comCodePop.xfdl"
    sOptions = ""; 
    bModelss = false;
    
    if(take.nvl(pThis, "") == ""){
        take.debug("", "폼 인자값은 필수입니다.");
        return false;
    }
    
    take.openPopup(pThis, sPopId, sFormUrl, objArgList, sOptions, aCallback, bModelss);
};

/**
 * openReport 공통 리포트 팝업
 * @param  {Object}   pThis        nexacro form object
 * @param  {String}   sPopId       Report popup id
 * @param  {String}   sTitle       Report Title
 * @param  {Object}   objInfo      Report agument
 * @param  {String}   fnCallBack   완료후 실행할 CallBack 함수
 * @param  {String}   sType        Reprot 구분 (UBI, OZ, RD...)
 * @return {Function} CallBack Function
 * @example take.openReport(this, "popid", "OZTitle", objInfo, "fnCallBack", "UBI");
 */
take.openReport = function(pThis, sPopId, sTitle, objInfo, fnCallBack, sType)
{
    var sLayout, sPopUpOpt;
    var nH, nW;

    if(take.nvl(pThis,"")=="")
	{
        take.debug(pThis, "Form 객체는 필수입니다.");
		return false;
	}

    if (take.nvl(sPopId, "")=="")
    {
        take.debug(pThis, "팝업 아이디(sPopId)는 필수입니다.");
        return false;
    }

    sTitle = take.nvl(sTitle,"")

    sType = take.nvl(sType, take.report);

    if (sType == "UBI")
    {
        if (take.nvl(objInfo,"")=="")
        {
            objInfo = new Object();
        }

        objInfo["Title"] = sTitle;

        sPopUpOpt = "showtitlebar=true layered=false autosize=false";

        take.openPopup(pThis, sPopId, "frm::com/comUbiViewer.xfdl", objInfo, sPopUpOpt, fnCallBack , false);

    } else if (sType == "OZ") {

        if (!take.isObject(objInfo))
        {
            take.debug(pThis, "Agument는 Object만 가능합니다.");
            return false;
        }

        sLayout = objInfo["layout"];

        if (sLayout.toUpperCase() == "V")
        {
            nH = 786;  //600pt->800px->팝업최대height 786
            nW = 960; //850pt
        } else {
            nH = 786;  //850pt->1140px->팝업최대height 786
            nW = 1140;  //600pt->800px ->팝업최소width 960
        }

        sPopUpOpt = "autosize=false showtitlebar=true layered=false height=" + nH + " width=" + nW + " titletext=" + sTitle;

        take.openPopup(pThis, sPopId, "frm::com/comOZPopup.xfdl", objInfo, sPopUpOpt, fnCallBack , false);
    }
};

/**
 * OZXml OZReport XML 만들기
 * @param  {Object}  arrDs    nexacro Dataset object
 * @return {N/A}     N/A
 * @example take.OZXml([this.dsTest0, this.dsTest1]);
 *
 *  - return example
 *    <dataset id="dsTest0">
 *    <colinfo id="RNUM" size="256" summ="default" type="STRING"/>
 *    <colinfo id="UNIT" size="256" summ="default" type="STRING"/>
 *    <colinfo id="CUST_NAME" size="256" summ="default" type="STRING"/>
 *    <colinfo id="QTY" size="256" summ="default" type="STRING"/>
 *    <colinfo id="PRICE" size="256" summ="default" type="STRING"/>
 *    <colinfo id="SUMPRICE" size="256" summ="default" type="STRING"/>
 *    <record>
 *      <RNUM>1</RNUM>
 *      <UNIT>EA</UNIT>
 *      <CUST_NAME>4000</CUST_NAME>
 *      <QTY>4</QTY>
 *      <PRICE>11000</PRICE>
 *      <SUMPRICE>44000</SUMPRICE>
 *    </record>
 */
take.OZXml = function(arrDs)
{
    var objDs, objColInfo, objCol;
    var nDsCnt, nColCnt, nRowCnt;
    var sRtnXml, sVal, sCol;

    if (take.nvl(arrDs,"")=="")
    {
        take.debug(pThis, "대상 Dataset이 없습니다.");
        return false;
    }

    if (!take.isArray(arrDs))
    {
        if (take.isObject(arrDs))
        {
            if (arrDs._type_name!="Dataset")
            {
                take.debug(pThis, "대상 Dataset이 없습니다.(Dataset component가 아닙니다.)");
                return false;
            }
        } else {
            take.debug(pThis, "대상 Dataset이 없습니다.(Object가 아닙니다.)");
            return false;
        }
    }

    nDsCnt = arrDs.length;

    if (nDsCnt<=0) return false ;


    sRtnXml = 'xmlData=<?xml version="1.0" encoding="euc-kr"?>'; // + '\n';
    sRtnXml += '<DATASETLIST>'; // + '\n';

    for (var x=0;x<nDsCnt;x++)
    {
        objDs = arrDs[x];

        sRtnXml += '<dataset id="' + objDs.name + '">';

        objColInfo = objDs.colinfos;
        nColCnt = objColInfo.length;

        //colinfo
        for (var i=0;i<nColCnt;i++)
        {
            objCol = objColInfo[i];
            sRtnXml += '<colinfo id="' + objCol.name + '" size="'+ objCol.size + '" summ="default" type="' + objCol.type + '"/>';
        }

        nRowCnt = objDs.rowcount;

        //record
        for (var j=0;j<nRowCnt;j++)
        {
            sRtnXml += '<record>';

            for (var k=0;k<nColCnt;k++)
            {
                sCol = objColInfo[k].name;
                sVal = take.nvl(objDs.getColumn(j, sCol), "");

                if (sVal=="")
                {
                    sRtnXml += '<'+ sCol +'/>';
                } else {
                    sRtnXml += '<'+ sCol +'>' + sVal + '</' + sCol + '>';
                }
            }

            sRtnXml += '</record>';
        }

        sRtnXml += '</dataset>';
    }

    sRtnXml += '</DATASETLIST>';

    return sRtnXml;
};

/**
 * openMenuPop 메뉴 팝업
 * @param  {String}   sMenuId       메뉴아이디
 * @param  {String}   sUserParam    파라메터
 * @param  {String}   sOption       팝업옵션
 * @param  {String}   sCallBack     콜백함수명
 * @param  {Boolean}  bModal        모달여부
 * @param  {Object}   pThis         해당 폼
 * @return {N/A}      N/A
 * @example take.openMenuPop("M0001", "", "", "fnCallBack", true, this);
 */
take.openMenuPop = function(sMenuId, sUserParam, sOption, sCallBack, bModal, pThis)
{
    var objMainForm;
    objMainForm = _application.mainframe.WorkFrame.form;
    
    bModal = take.nvl(bModal, false);
    
    if(take.nvl(pThis, "") == ""){
        take.debug("", "폼 인자값은 필수입니다.");
        return false;
    }
    
    objMainForm.fnMenuPopOpen(sMenuId, sUserParam, sOption, sCallBack, bModal, pThis);
};

/**
 * getDate : 날짜 조회
 * @param : {baseDate:yyyyMMdd, addYear:int, addMonth:int, addDate:int}
 * @return : {year:yyyy, month:MM, day:dd, date:yyyyMMdd}
 */
take.getDate = function(objOption) 
{
    var objDate = new Date();
	var objDateTime = new Object();

    if (objOption) 
    {
        if (objOption.baseDate != undefined && !isNaN( parseInt(objOption.baseDate))) 
        {
            var vBaseDate = parseInt(objOption.baseDate) + "";
            var vYear = parseInt( vBaseDate.substr(0, 4) );
            var vMonth = parseInt( vBaseDate.substr(4, 2) );
            var vDay = parseInt( vBaseDate.substr(6, 2) );
            objDate = new Date(vYear, vMonth-1, vDay);
        }
        
        if (!isNaN(parseInt(objOption.addYear))) 
        {
            objDate.addYear(parseInt(objOption.addYear));
        }
        
        if (!isNaN(parseInt(objOption.addMonth)))
        {
            objDate.addMonth(parseInt(objOption.addMonth));
        }
        
        if (!isNaN(parseInt(objOption.addDate))) 
        {
            objDate.addDate(parseInt(objOption.addDate));
        }
    }

	objDateTime.year  = (objDate.getFullYear()).toString();
	objDateTime.month = (objDate.getMonth() + 1).toString().padLeft(2,"0");
	objDateTime.day   = (objDate.getDate()).toString().padLeft(2,"0");
	objDateTime.date = objDateTime.year + objDateTime.month + objDateTime.day;
	objDateTime.lastDay = take.getDaysInMonth( objDateTime.year, objDateTime.month );

	return objDateTime;
};

/**
 * 문자형 Object를 Object로 반환
 * @param  {String} sObj   문자형 Object {key0:value0, "key1":"value1"...}
 * @return {Object}        Object
 * @example take.StringToObject("{key0:value0, 'key1':'value1', key2:'value2'}");
 */
take.StringToObject = function(sObj)
{
    if (take.nvl(sObj, "")=="") return "";

    try
    {
        //sObj = sObj.replace(/(\w+:)|(\w+ :)/g, function(s) {
        //  return '"' + s.substring(0, s.length-1) + '":';
        //});
        //sObj = sObj.replace(/\r/ig, "\\r").replace(/\n/ig, "\\n").replace(/\t/ig, "\\t");
		
		sObj = sObj.replace(/\'/ig, "\"").replace(/\r/ig, "\\r").replace(/\n/ig, "\\n").replace(/\t/ig, "\\t");
		sObj = sObj.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, "$1\"$3\":");

        return JSON.parse(sObj);
    } catch(e) {
        if (take.isQuickView())
        {
            pThis = _application.mainframe.QuickViewFrame.form;
        } else {
            pThis = _application.mainframe.WorkFrame.form;
        }

        take.debug(pThis, "take.StringToObject Error : "+e);

        return "";
    }
};


/**
 * JSON Object를 문자형 Object text로 반환
 * @param  {Object} objJson   JSON Object {key0:value0, "key1":"value1"...}
 * @return {String} 문자형 Object text
 * @example take.JsonToString({key0:'value0', key1:'value1', key2:'value2'});
 */
take.JsonToString = function(objJson)
{
    return JSON.stringify(objJson);
};

/**
 * Object를 복사하여 반환 (1depth object만 처리가 됨)
 * @param  {Object} objVal 복사 대상 Object
 * @param  {Object} objRtn 리턴 받을 Object (리턴받을 Object가 있을경우 Add)
 * @return {Object}        복사한 Object
 * @example take.CopyObject({key0:value0, 'key1':'value1', key2:'value2'});
 */
take.getCopyObject = function(objVal, objRtn)
{
    var objCopy = {};

    if (typeof objRtn === "object" && objRtn !== null)
    {
        objCopy = objRtn;
    }

    if (typeof objVal === "object" && objVal !== null)
    {
        for (var x in objVal)
        {
            if (objVal.hasOwnProperty(x))
            {
                objCopy[x] = objVal[x];
            }
        }
    } else {
        objCopy = objVal;
    }

    return objCopy;
};

/**
 * Object를 복사하여 반환
 * @param  {Object} objVal 복사 대상 Object
 * @param  {Object} objRtn 리턴 받을 Object (리턴받을 Object가 있을경우 Add)
 * @return {Object}        복사한 Object
 * @example take.copyObject({key0:value0, 'key1':'value1', key2:'value2'});
 */
take.copyObject = function(objVal, objRtn)
{
    if (typeof objVal === "object" && objVal !== null)
    {
        objRtn = JSON.parse(JSON.stringify(objVal))
    } else {
        objRtn = null;
    }
    
    return objRtn;
};

/**
 * 차트 데이터 생성 : 데이터셋 데이터를 Json Object로 변환
 * @param  {Object} objDs  넥사크로 Dataset 컴포넌트
 * @param  {Array}  arrKey 대상 컬럼 리스트(배열)
 * @return {Object}        Json Object
 * @example take.getChartData(dataset, arraykey);
 */
take.getChartData = function (objDs, arrKey)
{
    //변수 선언
    var objArr, objRtn, objTmp;
    var nCnt;
    var bKeys;

    //리턴값 타입 설정
    objRtn = [];

    //특정 컬럼만 변환 여부 확인후 컬럼수 세팅
    bKeys = arrKey?true:false;
    nCnt = bKeys?arrKey.length:objDs.colcount;

    //데이터셋 원본 데이터 가져오기
    objArr = objDs._rawRecords;

    //데이터셋의 Row수 만큼 반복
    for (var x in objArr)
    {
        //row마다 object 생성
        objRtn[x] = new Object;

        //컬럼수 만큼 반복
        for (var i=0;i<nCnt;i++)
        {
            //특정 컬럼만 변환시
            if (bKeys)
            {
                objRtn[x][arrKey[i]] = objDs.getColumn(x, objDs.getColIndex(arrKey[i]));
            } else {  //모든 컬럼 변환시
                objRtn[x][objDs.getColID(i)] = objDs.getColumn(x,i);
            }
        }
    }

    //Object 리턴
    return objRtn;
};

/*
* 파라메터 가져오기
* @param {Object} pThis
* @return {String} 파라메터
* @example take.getParam(this);
*/
take.getParam = function(pThis)
{
    var sMenuId;
    var objDs;
    var nFRow;

    sMenuId = pThis.parent.ProgId;
    //trace("sMenuId --> " + sMenuId);
    objDs = nexacro.getApplication().gds_param;

    nFRow = objDs.findRow("MENU_ID", sMenuId);
    //trace("objDs.getColumn(nFRow, 'PARAM') --> " + objDs.getColumn(nFRow, "PARAM"));
    return take.nvl(objDs.getColumn(nFRow, "PARAM"), "");
};

/*
* 하이브리드 실행 여부
* @param {N/A} N/A
* @return {Boolean} true/false
* @example take.isHybrid(); --> true/false
*/
take.isHybrid = function()
{
    if (nexacro._OS!="Windows")
    {
        if (nexacro._Browser == "Runtime" && nexacro._OS=="Android")
        {
            return true;
        } else if (nexacro._OS=="iOS") {
            //iOS이면 브라우저일때 하이브리드(Webview)일때 구분 필요함
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

/*
* 네트워크 체크
* @param {Object}    pThis 현재폼
* @param {Anonymous} aFnCallback 콜백 함수
* @return {N/A} N/A
* @example take.getNetwork(this, "fnCallBack"); --> true/false
*/
take.getNetwork = function(pThis, aFnCallback)
{
    take.isNetwork = null;
    if (take.isHybrid())
    {
        take.getHybridNetwork(pThis, aFnCallback);
    } else {
        if (nexacro._Browser == "Runtime")
        {
            take.getRuntimeNetwork(pThis, aFnCallback);
        } else { //브라우저
            take.getHtml5Network(aFnCallback);
        }
    }
};

/*
* 런타임 네트워크 체크
* @param {Object}    pThis 현재폼
* @param {Anonymous} aFnCallback 콜백 함수
* @return {N/A} N/A
* @example take.getRuntimeNetwork(this, "fnCallBack"); --> true/false
*/
take.getRuntimeNetwork = function(pThis, aFnCallback)
{
    var sUrl, sName = "__tWebBrowser";
    var objWb;
    var objTime = take.getTodayTime();

    objWb = take.nvl(pThis[sName],"");
    sUrl = take.getSvcUrl() + "?timestamp=" + objTime.date + objTime.time;

    if (objWb!="")
    {
        objWb = pThis.removeChild("__tWebBrowser");
        objWb.destroy();
    }

    objWb = new WebBrowser(sName, 0, 0 , 0, 0);
    pThis.addChild(sName, objWb);
    objWb.set_url(sUrl);
    var nHandle = objWb.addEventHandler("onusernotify", take.__tWebBrowser_UserNotify);
    //take.debug(pThis, "nHandle --> " + nHandle);
    objWb.__fnCallback = aFnCallback;
    objWb.show();

    //take.debug(pThis, "Url : " + objWb.url);
};

/*
* 네트워크 체크용 내부 함수
* @param {Object} obj 웹브라우저 컴포넌트
* @param {Object} e   UserNotify event info
* @return {N/A} N/A
* @example take.__tWebBrowser_UserNotify(); --> 
*/
take.__tWebBrowser_UserNotify = function(obj,e)
{
    //사이트 타이틀 (로그인 페이지가 처음 올라오기때문에 로그인 페이지 타이틀임)
	var sFormTitle = _application.mainframe.WorkFrame.form.titletext;

	take.debug(obj.parent, "e.userdata --> " + e.userdata + " / system title --> " + sFormTitle);
// 	if(e.userdata == "End"){
// 		var testArg = "Network";
// 		obj.callMethod("drawVisualization", testArg);
// 	} else if()
    if (e.userdata=="탐색이 취소됨")
    {
        take.isNetwork = false;
        obj.parent[obj.__fnCallback](take.isNetwork);
        return;
    } else if (e.userdata==sFormTitle) {
        take.isNetwork = true;
        obj.parent[obj.__fnCallback](take.isNetwork);
    }
};

/*
* 하이브리드 네트워크 체크
* @param {Object}    pThis 현재폼
* @param {Anonymous} aFnCallback 콜백 함수
* @return {N/A} N/A
* @example take.getHybridNetwork(this, "fnCallBack"); --> true/false
*/
take.getHybridNetwork = function(pThis, aFnCallback)
{
    var objNetWork = new Network;
    var sId = "__tNetwork";

 //   objNetWork = take.nvl(pThis[sId],"");

//     if (objNetWork=="")
//     {
        pThis.addChild(sId, objNetWork);
//     } else {
//         objNetWork.watchStop();
//     }

    objNetWork.addEventHandler
        ( "onrecverror",
          function(obj, e) {
              take.debug(obj.parent, "["+ e.errortype +" "+ e.statuscode +"] "+ e.errormsg);
              take.isNetwork = false;
              obj.watchStop();
              aFnCallback(take.isNetwork);
              fnDestroy(this, obj);
          }, pThis);

    objNetWork.addEventHandler
        ( "onrecvsuccess",
          function(obj, e) {
              if (!(obj.availabletype==1 || obj.availabletype==2)) //LTE/3G, Wifi가 아니면 Offline으로 간주
              {
                  take.isNetwork = false;
              } else {
                  take.isNetwork = true;
              }
              obj.watchStop();
              aFnCallback(take.isNetwork);
              fnDestroy(this, obj);
          }, pThis);

    function fnDestroy(pThis ,obj)
    {
        var objChild = pThis.removeChild(obj);
        objChild.destroy();
    }

    objNetWork.watchStart(1000);
};

/*
* HTML5 네트워크 체크
* @param {Anonymous} aFnCallback 콜백 함수
* @return {N/A} N/A
* @example take.getHtml5Network("fnCallBack"); --> true/false
*/
take.getHtml5Network = function(aFnCallback)
{
    var xhr = new XMLHttpRequest();
    var objTime = take.getTodayTime();
    var sUrl = take.getSvcUrl() + "?timestamp=" + objTime.date + objTime.time;
    xhr.addEventListener(
        'readystatechange',
        function ()
        {
            if(xhr.readyState == 4) {
                console.log(xhr.status);
                if(xhr.status == 200) {
                    take.debug(this,'worked');
                    take.isNetwork = true;
                } else if(xhr.status == 0) {
                    take.debug(this,'no internet');
                    take.isNetwork = false;
                } else {
                    // Some other error
                }
                aFnCallback(take.isNetwork);
            }
        }
		//210210 정해원 불필요 argument
		//,false
	);
    //210210 정해원 비동기로 변경(deprecated)
    //xhr.open("GET", sUrl, true);
	xhr.open("GET", sUrl);
    xhr.send(null);
};

/**
 * Url에서 파라메터 축출후 리턴
 * @param  {String} Url
 * @return {Object} 파라메터 Object
 * @example take.getUrlParams("http://www.test.co.kr/?test=1")
 */
take.getUrlParams = function (sUrl)
{
    var objUrlParams = {};
    var aMatch, objReg, sQuery;
    var nIdx

    if (take.nvl(sUrl,"")=="") return;

    nIdx = sUrl.indexOf("?");

    if (nIdx<0) return;

    objReg = /([^&=]+)=?([^&]*)/g;
    sQuery  = sUrl.substring(nIdx+1);

    while (aMatch = objReg.exec(sQuery))
    {
        //objUrlParams[fnDecode(aMatch[1])] = fnDecode(aMatch[2]);
        objUrlParams[decodeURIComponent(aMatch[1].replace(/\+/g, " "))] = decodeURIComponent(aMatch[2].replace(/\+/g, " "));
    }

    return objUrlParams;
};

////////////////////////////////////////////////////////////////////////////
// START                      prototype                                   //
////////////////////////////////////////////////////////////////////////////

/**
 * n개 이상의 데이터를 변환
 * @param  {object} hash 변환 대상
 * @return {String}      변환한 값
 * @example sTxt = '  <Form id="{Form_Id}" left="0" top="0" width="{Form_Width}" height="{Form_Height}" titletext="{Form_Title}">';
 *          sTxt.replaceMulti({ Form_Id: "test", Form_Title: "테스트", Form_Width: "100", Form_Height: "200"})
 *          trace("결과 ==> " + sTxt); // 결과 ==> <Form id="test" left="0" top="0" width="100" height="200" titletext="테스트">
 */
String.prototype.replaceMulti = function (hash)
{
   var string = this, key;
   for (key in hash) string = string.replace(new RegExp('\\{' + key + '\\}', 'gm'), hash[key]);

   return string;
};

/**
 * 문자형 숫자에서 '0'을 제거
 * @param {N/A}
 * @return {String} '0'이 제거된 값
 * @example trace("001234".ltrimzero()); //--> 1234
 */
String.prototype.ltrimzero = function()
{
   return this.replace(/(^0+)/, "");
};

/**
 * 문자열에서 nByte만큼 잘라서 반환한다.
 * @param {number} nByteLen  바이트 길이
 * @return {string} 문자열
 * @example   trace("안녕하세요".cutbytes(4)); --> "안녕..."
 */
String.prototype.cutbytes = function(nByte)
{
	var nTotal = 0;
	for (var i = 0; i < this.length; i++)
	{
			nTotal += (this.charCodeAt(i) > 128) ? 2 : 1;
			if (nTotal > nByte) return this.substring(0,i) + "...";
	}
	return this;
};

/**
 * 왼쪽에 특정 문자를 채운다. (채울 자리수-현재 자리수 만큼 채운다 )
 * @param  {Number} nlan  채울 자리수
 * @param  {String} sChar 채울 문자
 * @return {String}       채운 값
 * @example trace("123".lpad(6,"0")); //--> 000123
 */
String.prototype.lpad = function(nlan, sChar)
{
	var sVal=this;
    while(sVal.length < nlan)
        sVal = sChar + sVal;
    return sVal;
};

/**
 * 오른쪽에 특정 문자를 채운다. (채울 자리수-현재 자리수 만큼 채운다 )
 * @param  {Number} nlan  채울 자리수
 * @param  {String} sChar 채울 문자
 * @return {String}       채운 값
 * @example trace("123".rpad(6,"0")); //--> 123000
 */
String.prototype.rpad = function(nlan, sChar)
{
	var sVal=this;
    while(sVal.length < nlan)
        sVal += sChar;
    return sVal;
};

/**
 * Right로 String을 잘라서 반환.
 * @param  {number} nSize 자릿수
 * @return {string} rtnVal 리턴값
 * @example trace("123456".rightstr(3)); //--> 456
 */
String.prototype.rightstr = function (nSize)
{
	var nStart = this.length;
	var nEnd = Number(nStart) - Number(nSize);
	var rtnVal = this.substring(nStart, nEnd);

	return rtnVal;
};

/**
 * 문자열을 나누어 배열로 리턴
 * @param   {String} str 구분자
 * @return  {Array}  문자열을 나눈 배열
 * @example string.splitEmpty()
 */
String.prototype.splitEmpty = function(str)
{
	var retVals = new Array(0);
	if( nexacro._nvl(this, "")=="" )
	{
		return retVals;
	} else {
		return this.split(str);
	}
};

/**
 * 윤년여부
 * @param   {N/A}     N/A
 * @return  {Boolean} true/false
 * @example Date.isLeapYear()
 */
Date.prototype.isLeapYear = function ()
{
    return take.isLeapYear(this.getFullYear());
};

/**
 * 해당 월의 마지막 날자 구하기
 * @param   {N/A}     N/A
 * @return  {Number} 해당 월의 마지막 날자(일)
 * @example Date.getDaysInMonth()
 */
Date.prototype.getDaysInMonth = function ()
{
   return take.getDaysInMonth(this.getFullYear(), this.getMonth(), true);
};

/**
 * 날짜에서 일을 더하기
 * @param   {Number} 추가할 수
 * @return  {Object} 더한 날짜
 * @example Date.getAddDays()
 */
Date.prototype.getAddDays = function (nVal)
{
    return take.getAddDays(this,nVal);
};

/**
 * 날짜에서 월 더하기
 * @param   {Number} 추가할 수
 * @return  {Object} 더한 날짜
 * @example Date.getAddMonths()
 */
Date.prototype.getAddMonths = function (nVal)
{
    return take.getAddMonths(this,nVal);
};

/**
 * 요일 구하기
 * @param   {N/A}    N/A
 * @return  {String} '일', '월', '화', '수', '목', '금', '토'
 * @example Date.getDateWeek()
 */
Date.prototype.getDateWeek = function ()
{
    return take.getDateWeek(this);
};

////////////////////////////////////////////////////////////////////////////
// END                        prototype                                   //
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
//START                        사용자추가                                  				  //
////////////////////////////////////////////////////////////////////////////
/**
 * 모바일 / PC 여부 반환.
 * @param {N/A} 없음
 * @return {boolean} 모바일 여부.
 * @example take.isMobile(); //-->true
 */
take.isMobile = function()
{
	var bRtn = false;
	var bMobile, bDesktop;

	bDesktop = take.nvl(nexacro._isDesktop(), false);

	bRtn = (bDesktop==false?true:false);

 	return bRtn;
};

/**
 * 시스템 타입
 * @param  {N/A} 없음
 * @return {String} 시스템 타입 반환. desktop, phone, tablet
 * @example take.sysType(); //-->desktop
 */
take.sysType = function()
{
   var cur_type = "desktop";

   switch (nexacro._SystemType.toLowerCase())
   {
      case "win32":
      case "win64":
      case "mac":
      case "linux":
         cur_type = "desktop";
         break;
      case "ipad":
         cur_type = "tablet";
         break;
      case "iphone":
      case "winphone":
         cur_type = "phone";
         break;
      case "android":
         if (nexacro._Browser == "Runtime")
         {
            cur_type = "tablet";
            if (nexacro.__isPhone && nexacro.__isPhone())
            {
               cur_type = "phone";
            }
         }   else {
            cur_type = "tablet";
            if (nexacro._isMobile())
            {
               cur_type = "phone";
            }
         }
         break;
   }

  return cur_type;
};

/**
 * 컴포넌트 리스트 가져오기
 * @param  {Object} objForm From Object
 * @param  {Boolean} bHidden 감춰진 것 까지 가져올 때 true, default false
 * @return {Array}  배열값(컴포넌트 정보)
 * @example takeit.CompList(this) //--> Grid00.0|순번,Grid00.1|선택,Div.Static00|검색조건,Button00|조회
 */
take.CompList = function(objForm, bHidden)
{
	//변수 선언
    var sCompNm;
    var arrComp, arrTemp, arrRtn = new Array(), arrList = new Array(), arrGridHead = new Array();
    var objComp;
    var nCnt, nLength, nGridHeadCnt;
    
	//해당 폼의 컴포넌트 정보를 배열로 가져온다.
    arrComp = objForm.components._idArray.slice();
    
	//컴포넌트 수 확인
    nCnt = arrComp.length;
    
	//컴포넌트 수 만큼 반복
    for (var i=0;i<nCnt;i++)
    {
		//컴포넌트
        objComp = objForm[arrComp[i]];

  	    if (objComp.visible || bHidden)   // 컴포넌트가 Visible인경우만 수행
  	    {
            //컴포넌트가 Form형일 경우 함수 재 호출
		        if (objComp instanceof nexacro.Div || objComp instanceof nexacro.Tabpage || objComp instanceof nexacro.Tab || objComp instanceof nexacro.PopupDiv)
		        {
					//컴포넌트 명
		            sCompNm = objComp.name;
					//함수 재 호출을 통해 받아온 컴포넌트 정보
		            arrTemp =  arguments.callee(objComp.form);
					//컴포넌트 갯수
		            nLength = arrTemp.length;
					//컴포넌트 수 만큼 반복
		            for (var j=0;j<nLength;j++)
		            {
						//컴포넌트 정보에 상위 컴포넌트의 이름을 붙여서 다시 세팅
		                arrTemp[j] = sCompNm + "." + arrTemp[j];
		            }
					//배열 합하기
		            arrList = arrList.concat(arrTemp);
		        } else if (objComp instanceof nexacro.Grid) { //그리드형 컴포넌트
					//그리드 헤더 카운트 가져오기
		            nGridHeadCnt = objComp.getCellCount("head");
					//헤더수만큼 반복
		            for (var k=0;k<nGridHeadCnt;k++)
		            {
						//그리드 정보 세팅
		            	//arrGridHead.push(objComp.name + "." + takeit.nvl(takeit.getBindColName(objComp, k),k) + "|" + objComp.getCellProperty("head", k, "text") + "(" + takeit.getBindColName(objComp, k) +")");
		            	arrGridHead.push(objComp.name + "." + take.nvl(take.getBindColName(objComp, k),k) + "|" + objComp.getCellProperty("head", k, "text") );
		            }

		        } else { //그외 컴포넌트 종류
					//컴포넌트 아이디와 텍스트 세팅
				arrComp[i] = arrComp[i] + "|" + take.nvl(objComp.displaynulltext, objComp.text);
			}
  	    }else{
			if(objComp instanceof nexacro.PopupDiv){
				//컴포넌트 명
				sCompNm = objComp.name;
				//함수 재 호출을 통해 받아온 컴포넌트 정보
				arrTemp =  arguments.callee(objComp.form);
				//컴포넌트 갯수
				nLength = arrTemp.length;
				//컴포넌트 수 만큼 반복
				for (var j=0;j<nLength;j++)
				{
					//컴포넌트 정보에 상위 컴포넌트의 이름을 붙여서 다시 세팅
					arrTemp[j] = sCompNm + "." + arrTemp[j];
				}
				//배열 합하기
				arrList = arrList.concat(arrTemp);
		        }
  	    	}
    }
	//최종으로 그리드 정보, 컴포넌트 정보, 하위 컴포넌트 정보를 합한다.
    arrRtn = arrRtn.concat(arrComp, arrList, arrGridHead);

    return arrRtn;
};

/**
 * 타입별 컴포넌트 리스트 가져오기
 * @param  {Object} objForm   From Object
 * @param  {String} sCompType 컴포넌트 타입
 * @return {Array}  배열값(컴포넌트 정보)
 * @example takeit.getCompObjects(this, "Grid") //--> [Grid00,Grid01]
 */
take.getCompObjects = function(pThis, sCompType)
{
	var arrRtn = new Array(), arrComp;
	var nCnt;
	var objComp;

	if(take.nvl(pThis,"")=="")
	{
		take.trace("take.getCompObjects", "Info", "Form 객체는 필수입니다.");
		return false;
	}

	if(take.nvl(sCompType,"")=="") return pThis.components;

	if(take.nvl(pThis.components, "") == "")
	{
		//take.debug(pThis, "현재 form에 컴포넌트들이 존재하지 않습니다.");
		return false;
	}

	arrComp = pThis.components._idArray.slice();
	sCompType = sCompType.toLowerCase();
	nCnt = arrComp.length;

	for(var i=0; i<nCnt; i++)
	{
		objComp = pThis[arrComp[i]];

		if (objComp instanceof nexacro.Div || objComp instanceof nexacro.Tabpage || objComp instanceof nexacro.Tab || objComp instanceof nexacro.PopupDiv)
        {
			arrRtn = arrRtn.concat(take.getCompObjects(objComp.form,sCompType));
		} else {
            if (objComp._type_name.toLowerCase() == sCompType)
            {
        	    arrRtn.push(pThis[arrComp[i]]);
            }
		}
	}

	return arrRtn;
};

/**
 * MDI창 오픈
 * @param  {Form Object} pThis     대상 폼
 * @param  {String}      sMenuId   메뉴아이디
 * @param  {String}      sParam    파라메터
 * @param  {String}      sCallFunc 콜백 함수
 * @param  {Boolean}     bNewOpen  새로 오픈 여부
 * @param  {String}      sMenuNm   메뉴명 (메뉴에 등록되지 않은 form을 열경우 사용)
 * @return {N/A}         N/A
 * @example take.mdiOpenMenu(this, "MI2030", "test|test1|test2", "fnTest", true, "테스트 폼");
 */
take.mdiOpenMenu = function(pThis, sMenuId, sParam, sCallFunc, bNewOpen, sMenuNm)
{
    var objMainForm;

    //objMainForm = pThis.getOwnerFrame().form;
    objMainForm = _application.mainframe.WorkFrame.form;

    if (sMenuId.indexOf(".xfdl")>=0)
    {
        objMainForm.fnNexaFormOpen(sMenuId, sParam, sCallFunc, bNewOpen, sMenuNm);
    } else {
        objMainForm.fnMdiMenuOpen(sMenuId, sParam, sCallFunc, bNewOpen);
    }
};

/**
 * MDI창 닫기
 * @param  {Form Object} pThis     대상 폼
 * @param  {String}      sMenuId   메뉴아이디
 * @return {N/A}         N/A
 * @example take.mdiClose(this, "MI2030");
 */
take.mdiClose = function(pThis, sMenuId)
{
    var objMainForm; 

    objMainForm = _application.mainframe.WorkFrame.form;

    objMainForm.fnMdiClose(sMenuId)
};

/**
 * 버튼 롤 세팅
 * @param  {Form Object} pThis     대상 폼
 * @param  {String}      sBtnRole   버튼 권한 5자리 'YYYYN' 조회, 신규, 삭제, 저장, 출력
 * @return {Boolean}     true:성공/false:실패
 * @example take.comBtnRole(this, "YYYYNN");
 */
take.comBtnRoleAll = function(pThis, sBtnRole)
{
    if (take.nvl(sBtnRole, "")=="")
    {
        take.trace("take.comBtnRoleAll", "Info", "버튼 권한 데이터가 없습니다.");
        return false;
    }

//     if (sBtnRole.length!=6)
//     {
//         trace("6자리 형식이 아닙니다. ex)'YYYYNN' ");
//         return false;
//     }
//
    var objWorkForm = take.getActiveForm(pThis);
    //trace("objWorkForm --> " + objWorkForm.name);

    return objWorkForm.fnBtnRoleSettingAll(sBtnRole);
};

/**
 * 버튼 롤 세팅
 * @param  {Form Object} pThis   대상 폼
 * @param  {String}      sBtnId  버튼 아이디 (등록:Add,수정:Save,삭제:Del,엑셀:Excel,출력:Report)
 * @param  {Boolean}     bRole   권한 여부
 * @return {Boolean}     true:성공/false:실패
 * @example take.comBtnRoleOne(this, "Excel", true);
 */
take.comBtnRoleOne = function(pThis, sBtnId, bRole)
{
    if (take.nvl(sBtnId, "")=="")
    {
        take.trace("take.comBtnRoleOne","Info", "버튼 아이디가 없습니다.");
        return false;
    }

    var objWorkForm = take.getActiveForm(pThis);

    bRole = take.nvl(bRole,true);

    return objWorkForm.fnBtnRoleSettingOne(sBtnId, bRole);
};

/**
 * 버튼 타입 세팅
 * @param  {Form Object} pThis   대상 폼
 * @param  {String}      sType   버튼 타입 (grid : 그리드형, default : 기본형);
 * @return {Boolean}     true:성공/false:실패
 * @example take.comBtnType(this, "grid", true);
 */
take.comBtnType = function(pThis, sType)
{
    var objWork = take.getActiveForm(pThis);
    
    objWork.fnBtnTypeSetting(sType);
};

/**
 * 모바일 리스트 띄우기
 * @param {Object} 리스트가 있는 Div 컴포넌트
 * @return 없음
 * @example
 */
take.viewList = function(objDiv)
{
    objDiv.move(0,0);
    objDiv.set_left(0);
    objDiv.set_right(0);
    objDiv.set_enable(true);
    objDiv.set_visible(true);
};

/**
 * take Button Tab 세팅
 * @param  {Object} this        현재 폼
 * @param  {String} sTabId      Tab 그룹 아이디
 * @param  {Object} objList     Tab 정보
 * @param  {Object} objLoadTab  최초 로드 되는 탭 (없으면 첫번째)
 * @param  {String} sTabOnCss   On Css (클릭 되었을때)
 * @param  {String} sTabOffCss  Off Css (클릭 안되었을때)
 * @return {Boolean} true/false 성공/실패
 * @example take.TabSetting(this, {this.btnTab:this.divTab,....}, "", "btn_WF_tab02", btn_WF_tab01");
 */
take.TabSetting = function(pForm, sTabId, objTabList, objLoadTab, sTabOnCss, sTabOffCss)
{
    var objComp;

    for (var x in objTabList)
    {

        //objComp = pForm._xfnGetCompByPathName(x.replace("this.",""), pForm);
        objComp = take.getFormCompByPathName(pForm, x.replace("this.",""));

        objComp.taketabid = "taketab_" + sTabId;
        objComp.taketabdiv = objTabList[x];
        objTabList[x].taketabbtn = objComp;
        objComp.taketabform = pForm;
        objComp.taketabprefunc = take.nvl(objComp.preFunction,"")!=""?pForm[objComp.preFunction]:"";
        if (take.nvl(objLoadTab, "")=="") objLoadTab = objComp;

        objComp.addEventHandler("onclick", take.TabClick, pForm);

        objComp.set_cssclass(take.nvl(sTabOffCss, "btn_WF_tab01"));
        objTabList[x].set_cssclass("div_WF_tabBox01");
    }

    objTabId = pForm["taketab_" + sTabId] = new Object();
    objTabId["tablist"] = objTabList;
    objTabId["tabload"] = objLoadTab.taketabdiv;
    objTabId["taboncss"] = take.nvl(sTabOnCss,"btn_WF_tab02");
    objTabId["taboffcss"] = take.nvl(sTabOffCss, "btn_WF_tab01");
    objTabId["tabselect"] = objLoadTab;
    objLoadTab.set_cssclass(objTabId["taboncss"]);

    objLoadTab.click();

    return true;
};

/**
 * take Button Tab 클릭 이벤트
 * @param  {Object} pThis   현재폼(탭 세팅시 세팅한 현재 폼)
 * @param  {String} sTabId  Tab Id
 * @example take.getSelectTab(this, "testtab");
 */
take.getSelectTab = function(pThis, sTabId)
{
    var objTabGrp, objSelTeb;

    objTabGrp = take.nvl(pThis["taketab_" + sTabId],"");

    objSelTeb = take.nvl(objTabGrp["tabselect"],"");

    return {"Tabbutton" : objSelTeb, "Tabdiv":objSelTeb.taketabdiv};
};

/**
 * take Button Tab 클릭 이벤트
 * @param  {Object} objComp 버튼 컴포넌트
 * @param  {Object} e   nexacro.ClickEventInfo
 * @example take.TabClick(obj, e);
 */
take.TabClick = function(obj, e)
{
    var sName, sTabId, sOnCss, sOffCss;
    var pForm, objTakeTab, objTabList, objComp, objDivComp, objInitComp, objFunc;
    var bRtn;

//     if (obj.onclick.length>1)
//     {
//         bRtn = take.nvl(obj.onclick._user_handlers[0].handler.apply(this,arguments),true);
//
//         if (!bRtn) return false;
//     }

    sName = obj.name;
    sTabId = obj.taketabid;
    pForm = obj.taketabform;
    objTakeTab = pForm[sTabId];
    objTabList = objTakeTab.tablist;
    sOnCss = take.nvl(objTakeTab.taboncss,"btn_WF_tab02");
    sOffCss = take.nvl(objTakeTab.taboffcss,"btn_WF_tab01");
    objInitComp = obj.tabload;
    objFunc = take.nvl(obj.taketabprefunc,"");


    if (objFunc!="")
    {
        if (take.isFunction(objFunc))
        {
            bRtn = objFunc.call(pForm, obj, e);

            if (take.nvl(bRtn,true)==false) return false;
        }
    }

    for (var x in objTabList)
    {
        objComp = objTabList[x].taketabbtn;

        if (take.nvl(objInitComp,"")=="") objInitComp = objTabList[x];

        objComp.set_cssclass(sOffCss);

        objTabList[x].set_visible(false);
        objTabList[x].set_enable(false);
    }

    obj.set_cssclass(sOnCss);

    objTabId["tabselect"] = obj;

    objDivComp = obj.taketabdiv;
    objDivComp.set_visible(true);
    objDivComp.set_enable(true);
    objDivComp.bringToFront();

    objDivComp.set_left(objInitComp.left);
    objDivComp.set_top(objInitComp.top);
    objDivComp.set_width(objInitComp.width);
    objDivComp.set_height(objInitComp.height);
    objDivComp.set_right(objInitComp.right);
    objDivComp.set_bottom(objInitComp.bottom);

    pForm.resetScroll();
};

/**
 * 문자열을 특정 길이만큼 자르고 대체 문자열을 이어 붙힌다.
 * @param  {Object} sText 원본 문자열
 * @param  {Object} nCnt  문자열 최대 길이 수
 * @param  {Object} sVal  대체 문자열
 * @example take.textLengthOverCut(sText, nCnt, sVal);
 */
take.textLengthOverCut = function(sText, nCnt, sVal)
{
	if( sText.length > nCnt ){
		sText = sText.substring(0,nCnt) + "" + sVal
	}
	return sText;
};

/**
 * 쿠키설정
 * @param  {Object} name 쿠키명
 * @param  {Object} value  쿠키값
 * @param  {Object} expiredays  소멸일자
 * @return {N/A} N/A
 * @example take.setCookie(name, value, expiredays);
 */
take.setCookie = function( name, value, expiredays )
{
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );	

	nexacro.setPrivateProfile( name, value );
};

/**
 * 쿠키 불러오기
 * @param  {Object} name 쿠키명
 * @return {N/A} N/A
 * @example take.getCookie(sText);
 */
take.getCookie = function(name)
{
	var oVal = nexacro.getPrivateProfile(name);
	if(!take.isEmpty(oVal)){
		return oVal;
	}
	return "";
};

/**
 * css 로드
 * @param  {String} sId       아이디
 * @param  {String} sFilename 파일명
 * @return {N/A}    N/A
 * @example  take.loadCss("css01", "mystyle.css", "css") ////dynamically load and add this .css file
 */
take.loadCss = function(sId, sFilename)
{
    if (!document.getElementById(sId))
    {
        var fileref=document.createElement("link");
        //fileref.setAttribute("rel", "stylesheet")
        //fileref.setAttribute("type", "text/css")
        //fileref.setAttribute("href", sFilename)

        fileref.id   = sId;
        fileref.rel  = 'stylesheet';
        fileref.type = 'text/css';
        fileref.href = sFilename;  //'http://website.com/css/stylesheet.css';
        fileref.media = 'all';

    }

    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref);
};

/**
 * Dataset을 Object String형으로 리턴
 * @param  {Object} objDs      Dataset
 * @return {String} Object String형
 * @example  take.getDsObjString(this.dsData)
 */
take.getDsObjString = function(objDs)
{
    //변수 선언
    var nRowCnt, nColCnt;
    var sColId, sRtn='{', sData='';

    //필수 파라메터 체크
    if (take.nvl(objDs,"")=="")
    {
        take.debug(this, "데이터셋은 필수입니다.");
        return "";
    }

    //데이터 행 수
    nRowCnt = objDs.rowcount;

    if (nRowCnt<=0)
    {
        take.debug(this, "데이터가 없습니다.");
        return "";
    }

    //데이터 Column수
    nColCnt = objDs.colcount;

    //컬럼수 만큼 반복
    for (var i=0; i<nColCnt; i++)
    {
        //컬럼 아이디
        sColId = objDs.getColID(i);

        //컬럼 아이디를 키로
        sRtn += (i==0?'"':',"') + sColId +'":[';

        //행수 만큼 반복
        for (var j=0; j<nRowCnt; j++)
        {
            //데이터
            sData = objDs.getColumn(j, sColId);

            //데이터를 배열 벨류로
            sRtn += (j==0?'"':',"') + sData +'"';
        }
        sRtn +=']';
    }

    sRtn +='}';

    //RETURN
    return sRtn;
};

/**
 * 차트 표준 색상 20가지 리턴
 * @param  {N/A}    N/A
 * @return {Array}  Color Array
 * @example  take.getChartColor();
 */
take.getChartColor = function()
{
    return take.chartcolorinfo;
};

/**
 * 웨이트커서 사용 여부
 * @param  {Boolean} bUse 사용여부
 * @return {N/A}  N/A
 * @example  take.setUseWaitCursor();
 */
take.setUseWaitCursor = function (bUse)
{
    nexacro.getEnvironment().set_usewaitcursor(bUse);
};

/**
 * 버튼 권한 세팅하기
 * @param  {Object} pThis 현재폼
 * @return {N/A}  N/A
 * @example  take.formBtnRole(this);
 */
take.formBtnRole = function(pThis)
{
	if (take.nvl(pThis,"")=="") return;

	var objGridDs, objRoleDs;
	var sProgId = take.nvl(pThis.ProgId, "");

	//sProgId = "M0036"; //테스트 아이디
	//trace("ProgId-->" + sProgId);

	if (sProgId=="") return; //최상위 부모폼에만 프로그램 아이디가 존재하여 리턴 처리

	if(!pThis.objects["_tdsBtnRole"])
	{
		//버튼권한 데이터셋 생성
		objRoleDs = new Dataset;
		objRoleDs.set_name("_tdsBtnRole"); //데이터 셋 명

		//해당 폼에 추가
		pThis.addChild(objRoleDs.name, objRoleDs);

	} else {
		take.trace(pThis.name + "take.formBtnRole.DatasetCreate(_tdsBtnRole)", "INFO", "버튼 권한 데이터셋이 존재합니다.");
		objRoleDs = pThis.objects["_tdsBtnRole"];
	}

	take.tranSelect(
	    pThis,
        "selectUserFormRoleBtn",
        "Main.selectUserFormRoleBtn",
        "",
        "_tdsBtnRole",
		"sMenuId='" + sProgId +"'",
		function(sId, nCd, sMsg)
		{
            take.debug(this, "프로그램 사용자 정보 및 권한 [" + sId + "] 데이터 가져오기 성공");
            //trace(this._tdsBtnRole.saveXML());

            var sFormBtn, sCompNm, sCompType;
            var arrFormBtn;
            var nCnt;
            var objRtn, objComp, objDs;

            objDs = take.nvl(this._tdsBtnRole,"");

            if (objDs=="") return;

            nCnt = objDs.rowcount;

            if (nCnt > 0)
            {
                for (var i=0; i<nCnt; i++)
                {
                    sCompNm = objDs.getColumn(i,"BTN_ID");

                    objRtn = take.nvl(take.CompType(this, sCompNm), "");

                    if (objRtn=="")
                    {
                        take.debug(this, this.name + "폼에 "+  sCompNm + " 컴포넌트가 존재하지 않음.");
                        return;
                    }

                    sCompType = objRtn.type;
                    objComp = objRtn.comp;

                    //if (sCompType!="Button")
                    //{
                    //    take.debug(this, "버튼이 아닙니다. 버튼만 적용됩니다.");
                    //    return;
                    //}

                    objComp.set_enable(false);
                    //objComp.set_tooltiptext("권한이 없습니다.");
                }
            }
		}, false);
};

/*
* 공통버튼 셋팅
* @param  {Object} pThis
* @return {N/A} N/A
* @example take.setComBtn(this);
*/
take.setComBtn = function(pThis)
{
	//TODO : UXBooster에 맞게 수정 필요
    //var sType;

    //sType = pThis._type_name;

    //if (sType!="Form")
    //{
    //    if (sType=="Div" || sType=="Tab" || sType=="Tabpage")
    //    {
    //        pThis = pThis.form;
    //    }
    //}
	//_application.afnSetComBtn(pThis,true);
};

/*
* 데이터셋에 바인드된 그리드 가져오기
* @param {Object} pThis object Form
* @param {String} sDsNm DataSetName
* @return  {Array} Grid List
* @example take.getBindGrid(this, this.DataSet00);
*/
take.getBindGrid = function(pThis, aDsNm)
{
    var arrCompList, arrRtn = new Array();
    var objDs, objGrid;
    var sBindNm, sDsNm;

    if (typeof aDsNm === "string")
    {
        sDsNm = aDsNm;
    } else if (typeof aDsNm === "object") {
        if (aDsNm instanceof nexacro.Object)
        {
            sDsNm = aDsNm.name;
        } else {
            return null;
        }
    } else {
        return null;
    }

    arrCompList = take.getCompObjects(pThis, "grid");

    nCnt = arrCompList.length;

    if (nCnt>0)
    {
        for (var i=0; i<nCnt; i++)
        {
            objGrid = arrCompList[i];
            sBindNm = objGrid.binddataset;

            if (sBindNm == sDsNm)
            {
                arrRtn.push(objGrid);
            }
        }
    }

    if (arrRtn.length>0)
    {
        return arrRtn;
    } else {
        return null;
    }

};

/*
* 해당 데이터셋에 컬럼 추가
* @param {Object}	objDs
* @param {String}	sColNm  컬럼 이름
* @param {String}	sType	컬럼 타입
* @param {String}	sSize	컬럼 사이즈
* @return {Number} nIdx	데이터셋 컬럼 인덱스
* @example take.addDsColumn(this.dataSet00, "column00", "string", "120");
*/
take.addDsColumn = function(objDs, sColNm, sType, sSize)
{
    var nIdx, nColCount;

    nIdx=-1;
    nColCount = objDs.getColCount();

    for (var i=0; i<nColCount; i++)
    {
        if (objDs.getColID(i) == sColNm)
        {
            nIdx = i;
            break;
        }
    }

    if (nIdx < 0)
    {
        objDs.set_enableevent(false);
        nIdx = objDs.addColumn(sColNm, sType, sSize);
        objDs.set_enableevent(true);
    }

    return nIdx;
};

/*
* 데이터셋의 컬럼 복사하여 생성
* @param  {Object} objCopyDs  복사할 대상 데이터셋
* @param  {String} sColId     복사할 컬럼 아이디
* @param  {Object} objDs	  컬럼을 생성할 데이터셋
* @param  {String} sChgColId  변경할 컬럼 아이디(변경할 경우)
* @return {Number} nIdx	      생성된 데이터셋 컬럼 인덱스
* @example take.copyDsCol(this.dsCopy, "column00", this.dsList, "col00");
*/
take.copyDsCol = function(objCopyDs, sColId, objDs, sChgColId)
{
    var objCol, objColInfo;
    var nIdx;

    if (take.nvl(objCopyDs,"") == "")
    {
        take.trace("System", "Info", "복사 할 데이터셋은 필수입니다.");
        return false;
    }
    
    if (take.nvl(sColId,"") == "")
    {
        take.trace("System", "Info", "복사 할 컬럼아이디는 필수입니다.");
        return false;
    }
    
    if (take.nvl(objDs,"") == "")
    {
        take.trace("System", "Info", "생성 할 데이터셋은 필수입니다.");
        return false;
    }
    
    //변경 정보가 없을경우 원래 컬럼 명으로 처리
    sChgColId = take.nvl(sChgColId, sColId);
    
    objColInfo = take.nvl(objCopyDs.colinfos,"");

    if (objColInfo == "")
    {
        take.trace("System", "Info", "복사 할 데이터셋(" + objCopyDs.name + ")에 컬럼 정보가 없습니다.");
        return false;
    }

    objCol = objColInfo[sColId];    
    nIdx = take.addDsColumn(objDs, sChgColId, objCol.type, objCol.size);

	return nIdx;
};

/**
 * 현재 엑티브된 MDI Form
 * @param   {N/A}     N/A
 * @return  {Object} object Form
 * @example take.getActiveMdiForm();
 */
take.getActiveMdiForm = function ()
{
    var objForm;

    if (take.isQuickView())
    {
        objForm = _application.mainframe.QuickViewFrame.form;
    } else {
        //UXBooster 기준
        objForm = _application.mainframe.WorkFrame.form.divMdi.form.divTab.objActiveWork.form.divForm.form;
    }

	return objForm;
};

/**
 * 트리 컬럼의 상위 선조 노드를 배열로 리턴
 * @param  {Object}  objGrid Grid Component
 * @param  {Number}  nIdx    Grid body Tree Cell index
 * @param  {Number}  nRow    Grid body Tree Row index
 * @param  {Boolean} bCallee 재귀호출여부 사용자 호출시 제외
 * @return {Array}           Dataset Rows 해당하는 자식 노드 배열
 * @example take.getTreeAncestorRows(this.Grid00, 1, 1);
 */
take.getTreeAncestorRows = function(objGrid, nIdx, nRow, bCallee)
{
    var sColumn, sCurLev;
    var nCnt, nPRow;
    var objDs;
    var arrRtn = new Array();

    //처음 호출 세팅
    bCallee = take.nvl(bCallee,false);

    sColumn = objGrid.getCellProperty("body", nIdx, "treelevel");
    sColumn = sColumn.replace("bind:","");
    //그리드에서 데이터셋 row를 반환 함
//     nDRow = objGrid.getDatasetRow(nRow);
//     nRow = (nDRow<0?nRow:nDRow);
    objDs = objGrid.getBindDataset();

    if (!objGrid.isTreeRootRow(nRow, true))
    {
        nPRow = objGrid.getTreeParentRow(nRow, true);

        if (nPRow<0)
        {
            return arrRtn;
        }

        arrRtn.push(nPRow);
        arrRtn = arrRtn.concat(take.getTreeAncestorRows(objGrid, nIdx, nPRow, true));

    } else {
        if (!bCallee) //처음 호출이 아닐경우 row추가
        {
            arrRtn = -1;
        }
    }

    //해당하는 조상 노드가 없을 경우 -1 리턴
    return arrRtn;
};

/**
 * 데이터셋을 json string으로 변환
 * @param  {Object}  objDs Dataset
 * @return {Object}  Json object
 * @example take.getDatasetToObject(objDs);
 */
take.getDatasetToObject = function(objDs)
{
    var objRtn = new Object();
    var arrColData = new Array(), arrRawData;
    var sColNm;

    if (take.nvl(objDs,"")=="")
    {
        take.debug("take.getDatasetToObject : ", "대상 Dataset이 없습니다.");
        return false;
    }

    //데이터셋 컬럼 아디 배열 복사
    arrColInfo = objDs.colinfos._idArray.slice();
    arrRawData = objDs._rawRecords;

    //배열수 만큼 반복해서 필요없는 컬럼 제거
    nColCnt = arrColInfo.length;
    nRowCnt = objDs.rowcount;

    for (var x=nColCnt-1; x>=0; x--)
    {
        sColNm = arrColInfo[x];
        if (sColNm=="rnum")
        {
            arrColInfo.splice(x);
        } else if (sColNm=="totalrecordcount")   {
            arrColInfo.splice(x);
        } else if (sColNm=="currentPageNo")      {
            arrColInfo.splice(x);
        } else if (sColNm=="recordCountPerPage") {
            arrColInfo.splice(x);
        } else if (sColNm=="TCNT") {
            arrColInfo.splice(x);
        } else {
            nColIdx = objDs.getColIndex(sColNm);
            objRtn[sColNm] = take.ArrayPluck(arrRawData,nColIdx);
        }
    }

    return objRtn;
};

/**
 * 공통 버튼 권한을 Object로 반환
 * @param  {Object} pThis  form object
 * @return {Object} objRtn 권한
 * @example take.getBtnRole(this);
 */
take.getBtnRole = function(pThis)
{
    //TODO : UXBooster에 맞게 수정 필요
    var objWorkForm, objDsBtnRole;
    var objRtn = "";
    
    objWorkForm = pThis.parent.parent; // mdi WorkForm
    objDsBtnRole = objWorkForm.dsBtnRole; // 버튼 권한 데이터셋
    
    if(take.nvl(objDsBtnRole, "")!="")
    {
        objRtn = take.getDatasetToObject(objDsBtnRole);
    }
    
    return objRtn;
};

/**
 * 그리드 Body Cell Object
 * @param  {Object} objGrid Grid Object
 * @param  {Object} nRow    Grid Row
 * @param  {Object} nCell   Grid Cell
 * @return {Object} Cell object
 * @example take.getBodyCellItem(objGrid, nRow, nCell);
 */
take.getBodyCellItem = function(objGrid, nRow, nCell)
{
    var objRtn="";

    if (take.nvl(objGrid,"")!="")
    {
        if ( !take.isEmpty(nRow) && !take.isEmpty(nCell))
        {
            objRtn = objGrid._getBodyCellItem(nRow, nCell);
        }
    }

    return objRtn;
};

/**
 * 데이터셋의 특정 컬럼의 값을 모든 Row에 적용
 * @param  {Object} objDs   Dataset Object
 * @param  {Object} sColNm  Dataset Row
 * @param  {Object} sVal    Dataset Cell
 * @return {Boolean} 성공 여부
 * @example take.allSetColumn(objDs, sColNm, sVal); //--> true/false
 */
take.allSetColumn = function (objDs, sColNm, sVal)
{
    try {
        var nCnt = objDs.rowcount;

        objDs.set_enableevent(false);

        for(var i=0; i < nCnt; i++)
        {
            objDs.setColumn(i, sColNm, sVal);
        }

        objDs.set_enableevent(true);
        return true;
    } catch(e) {
        take.debug("take.allSetColumn(" + objDs.name + "," + sColNm + "," + sVal + ") : ", e);
        return false;
    }
};

/**
 * 데이터셋을 CSV형태로 변환하여 리턴
 * @param  {Object} objDs    Dataset object
 * @return {String}          CSV형태의 String
 * @example take.getDsCsv(objDs);
 */
take.getDsCsv = function(objDs)
{
    var sCsv;
    var objRegExpr;

    if (take.nvl(objDs,"")=="")
    {
        return "";
    }

    sCsv = objDs.saveCSV(" ", "include", "include", "include" );

    sCsv = sCsv.replace("Dataset: ","");

    //trace("sCsv --> " + sCsv);

    //objRegExpr = /:[^,]*\)/gi;
    objRegExpr = /:[^,]*\(\d{0,3}\)/gi;

    sCsv = sCsv.replace(objRegExpr,"");

    //','를 탭으로 변경시 처리
    // sCsv = nexacro.replaceAll(sCsv, ",","\t")

    return sCsv;
};

/**
 * nexacro 컴포넌트 Unique Id로 컴포넌트 객체 가져오기
 * @param  {String}  sId     component의 unique Id
 * @return {Object}  nexacro component 객체
 * @example take.getUniqueIdByComponent("mainframe.QuickViewFrame.form.btnTest");
 */
take.getUniqueIdByComponent = function(sId)
{
    var arrId;
    var nCnt;
    var objComp;

    if (take.nvl(sId,"")=="") return "";

    arrId = sId.split(".");
    objComp = _application;

    nCnt = arrId.length;

    for (var i=0; i<nCnt; i++)
    {
        objComp = objComp[arrId[i]];
    }

    return objComp;
};

/**
 * Excel, Csv 데이터 Import
 * @param  {Object}  pThis        form object
 * @param  {Object}  objDs        dataset object
 * @param  {String}  sType        import 타입 (EXCEL,CSV)
 * @param  {Array}   arrColInfo   import할 컬럼 정보 ["col1","col2",...]
 * @param  {Object}  objOption    import data 옵션
 * @return {N/A}     N/A
 * @example take.importData(this, this.dsList, "EXCEL", ["col1","col2"], objOption);
 */
take.importData = function(pThis, objDs, sType, arrColInfo, objOption, aCallBack)
{
    //변수 선언
    var sUrl, sSvcUrl, sRange="", sSheet, sBody;
    var objImport;
    var bOption, bSheet, bBody;

    //서비스 URL 확인
    take.svcFindReplace();
    
    //Import url
    if (take.nvl(take.SvcId, "") == "") take.svcFindReplace();
	sUrl = nexacro.getEnvironment().services[take.SvcId].url;
    sSvcUrl = sUrl + "XImport.do";

    //ExcelImportObject 컴포넌트 존재 여부 확인
    objImport = take.nvl(pThis["_tExcelImportObject"],"");
    
    //콜백처리
    aCallBack = take.nvl(aCallBack,"");

    //해당 컴포넌트가 없으면
	if(objImport == "")
    {
        //ExcelImportObject 컴포넌트 동적 생성
		objImport = new nexacro.ExcelImportObject("_tExcelImportObject", pThis);

        //성공 이벤트 추가
		objImport.addEventHandler(
            "onsuccess",
            function(obj,e)
            {
                //변수 선언
                var arrCol;
                var objDsTemp, objDs;
                var sColInfo="", sRtnMsg;
                var nCnt, nRow, nRowCnt;

                take.debug("take.importData."+obj.parent.name+".ExcelImportObject.success", e.url );

                //임시 데이터셋
                objDsTemp = take.nvl(obj._tdsImportTemp,"");
                //원본 데이터셋
                objDs = obj._tdsImportOrg;

                //import한 데이터의 Row수
                nRowCnt = objDsTemp.rowcount;

                //데이터가 없으면 리턴
                if (nRowCnt<=0)
                {
                    sRtnMsg = "import할 데이터가 없습니다.";
                    take.debug("take.importData."+obj.parent.name+".ExcelImportObject.success.info", sRtnMsg );
                    take.callFunction(pThis, aCallBack, obj, e, sRtnMsg);
                    return;
                }

                //import 컬럼 정보 여부
                if (obj._tArrColInfo=="") //없으면 순서대로 넣을수 있도록 데이터셋의 컬럼 정보 가져와 세팅
                {
                    arrCol = objDs.colinfos._idArray;
                } else { //있을 경우 입력된 컬럼 정보 세팅
                    arrCol = obj._tArrColInfo;
                }

                //컬럼 정보 수
                nCnt = arrCol.length;

                //컬럼 수 만큼 copyrow 컬럼 정보 세팅
                for (var i=0; i<nCnt; i++)
                {
                    sColInfo += (i==0?"":",") + arrCol[i]+"="+"Column"+i;
                }

                //데이터셋 이벤트 중지
                objDs.set_enableevent(false);

                //import 데이터 숫 만큼 반복
                for (var j=0; j<nRowCnt; j++)
                {
                    //원본 데이터셋에 행 추가
                    nRow = objDs.addRow();
                    //원본 데이터셋에 데이터 추가
                    objDs.copyRow(nRow,objDsTemp,j,sColInfo);
                }

                //데이터셋 이벤트 실행
                objDs.set_enableevent(true);
                
                sRtnMsg = "import data 컬럼맵핑 성공";
                take.debug("take.importData."+obj.parent.name+".ExcelImportObject.success.info", sRtnMsg);
                take.callFunction(pThis, aCallBack, obj, e, sRtnMsg);
            },
            pThis);

        //실패 이벤트 추가
		objImport.addEventHandler(
            "onerror",
            function(obj,e)
            {
                //실패 안내
                sRtnMsg = "Data import에 실패하였습니다.";
                take.debug("take.importData."+obj.parent.name+".ExcelImportObject.error",  e.errorcode + ":" + e.errormsg );
                take.alert(obj.parent, "Error", sRtnMsg);
                take.callFunction(pThis, aCallBack, obj, e, sRtnMsg);
                return;
            },
            pThis);
	}

    //import 타입 세팅 CSV,EXCEL
    if (sType =="CSV")
    {
        objImport.set_importtype(nexacro.ImportTypes.CSV);

        //버전업 후 사용 가능
        //if (take.nvl(objOption.Body,  "")=="") //없으면
        //{
        //    //첫번째 Row를 헤더로 전제하고 두번째 Row부터 import하도록 세팅
        //    sRange += "Body=1,1";
        //} else {
        //    //body 정보가 있을경우 해당 정보 세팅
        //    sRange += "Body=" + objOption.Body;
        //}
    } else {
        objImport.set_importtype(nexacro.ImportTypes.EXCEL);

        //옵션 정보가 있는지 확인 후 세팅        
        bOption = take.nvl(objOption,"")!=""?true:false;
        
        if (bOption) //옵션에 Sheet, body 정보가 있는지 확인
        {
            bSheet = take.nvl(objOption.Sheet, "")==""?false:true; 
            bBody = take.nvl(objOption.Body, "")==""?false:true;
        } else {
            bSheet = false;
            bBody = false;
        }        
        
        //시트 정보가 있을 경우 : 해당 정보 세팅
        //시트 정보가 없는 경우 : 첫번째 시트에서 import 하도록 세팅
        sRange += bSheet?(objOption.Sheet + "!"):"Command=getsheetdata;";
        
        if (bOption)
        {
            if (bSheet)
            {
                //body 세팅 : 시트가 있는경우 (시트여부에 따라 상이함)
                //body 정보가 있을경우 : 해당 정보 세팅
                //Body 정보가 없을경우 : 첫번째 Row를 헤더로 전제하고 두번째 Row부터 import하도록 세팅
                sRange += bBody?objOption.Body:"A2";
            }  else {
                //body 세팅 : 시트가 없는경우 (시트여부에 따라 상이함)
                //body 정보가 있을경우 : 해당 정보 세팅
                //Body 정보가 없을경우 : 첫번째 Row를 헤더로 전제하고 두번째 Row부터 import하도록 세팅
                sRange += bBody?("Body=!" + objOption.Body):"Body=!A2";
            }
        } else {
            //첫번째 Row를 헤더로 전제하고 두번째 Row부터 import하도록 세팅
            sRange += "Body=!A2";
        } 

        take.debug("take.importData."+pThis.name, "Range정보 : " + sRange);
    }

    //타입 정보 세팅
    objImport._tType = sType;

    //Import Url 세팅 (xeni import 호출 url)
    //trace("sSvcUrl --> "+ sSvcUrl);
	objImport.set_importurl(sSvcUrl);

    //성공시 컬럼 순서대로 나오도록 컬럼 정보 세팅
    objImport._tArrColInfo = arrColInfo;

    if (take.nvl(arrColInfo,"")=="")
    {
        objImport._tArrColInfo = "";
    } else {
        if (take.isArray(arrColInfo))
        {
            if (arrColInfo.length>0)
            {
                objImport._tArrColInfo = arrColInfo;
            } else {
                objImport._tArrColInfo = "";
            }
        } else {
            objImport._tArrColInfo = "";
        }
    }

    //nexacro에서 컬럼 순서대로 import를 지원하지 않아 임의 데이터셋을 생성후 순서대로 넣어주도록 추가 개발
    //임시 데이터셋 생성
    if (take.nvl(pThis.objects["_tdsImportTemp"],"")=="")
    {
        pThis.addChild("_tdsImportTemp", new Dataset);
    }

    //기본 정보 세팅(임시 데이터셋, 원본 데이터셋등)
    objImport._tdsImportTemp = pThis.objects["_tdsImportTemp"];
    objImport._tdsImportOrg = objDs;

    //데이터 초기화
    objDs.clearData();

    //Import
    objImport.importData(
        "",
        sRange,
        "_tdsImportTemp=output1",
        bOption?take.nvl(objOption.Argument,""):"");

};

/**
 * before unload 이벤트 잠시 중지처리(엑셀등 export시 페이지 벋어나지 않도록 하기 위한 처리)
 * @param  {Object}  pThis        form object
 * @return {N/A}     N/A
 * @example take.setBeforeUnload(this);
 */
take.setBeforeUnload = function (pThis)
{
    var fnBeforeUnload = (nexacro._Browser != "Runtime") ? window.onbeforeunload : null;

    if(fnBeforeUnload != null)
    {
        //if (bUse==false)
        //{
            window.onbeforeunload = null;
        //} else {
            nexacro._OnceCallbackTimer.callonce(
                pThis,
                function(){
                    window.onbeforeunload = fnBeforeUnload;
                },
                100
            );
        //}
    }
};

/**
 * 메세지명을 가지고 메세지 아이디 찾기
 * @param  {String}  sText 메세지명(키)
 * @return {String}  메세지 아이디
 * @example take.getFindMsgId("찾아주세요.");
 */
take.getFindMsgId = function(sText)
{
    var objDs;
    var nRow;

    objDs = take.nvl(nexacro.getApplication().tgdsMsg,"");

    if (objDs!="")
    {
        //nRow = objDs.findRowExpr("take.nvl(MSG_KEY,'').indexOf("+sText+")>=0");
        nRow = objDs.findRow("msgDtlCn",sText);
    }

    sText = take.nvl(objDs.getColumn(nRow, "msgId"),sText);

    return sText;
};

/**
 * 404 Not found client 체크 (webbrowser only)
 * @param  {String}  sUrl 체크할 URL
 * @return {N/A}     N/A
 * @example take.isUrlNotFound("http://localhost:8080/UXBooster/test.js");
 */
take.isUrlNotFound = function(sUrl)
{
    if (take.isHybrid()==false)
    {
        if (nexacro._Browser!="Runtime")
        {
            if (take.getUrlStatus(sUrl)>=400)
            {
                return true;
            }
        }
    }

    return false;
};

/**
 * ajax send (webbrowser only)
 * @param  {String}  sUrl 체크할 URL
 * @return {N/A}     N/A
 * @example take.getUrlStatus("http://localhost:8080/UXBooster/test.js");
 */
take.getUrlStatus = function(sUrl)
{
    var objHttp;

    if (sUrl.indexOf("::")>=0)
    {
        sUrl = nexacro._getFDLLocation(sUrl, nexacro._project_absolutepath);
    } else if (sUrl.substr(0,2)=="..") {
        sUrl = nexacro._project_absolutepath + sUrl.substr(3);
    } else if (sUrl.substr(0,2)=="./") {
        sUrl = nexacro._project_absolutepath + sUrl.substr(1);
    }

    objHttp = new XMLHttpRequest();

    //웹서버(web.xml에 httprequest method head를 사용할 수 있을 경우 사용 가능
    //objHttp.open('HEAD', sUrl, false);

    objHttp.open("GET", sUrl, false);
    objHttp.send();

    take.debug("take.getUrlStatus", sUrl + " --> " + objHttp.status);

    return objHttp.status;
};

/**
 * 계칭정보에 해당하는 컴포넌트 얻기
 * @param  {Object}  objForm 시작폼
 * @param  {String}  sPath   패스
 * @return {Object}  래당 컴포넌트 Object
 * @example take.getFormCompByPathName(this, "this.btnTest");
 */
take.getFormCompByPathName = function(objForm, sPath)
{
	var arrComps = [];
    var nLen;
	var sCompId;
    var objComp;

    objForm = take.nvl(objForm, nexacro.getApplication());

    objComp = objForm;

    sPath = take.nvl(sPath,"");

    if (sPath=="") return null;

	arrComps = sPath.split(".");
    nLen = arrComps.length;

	for (var i = 0; i < nLen ; i++ )
	{
		sCompId = arrComps[i];
		objComp = objComp[sCompId];
		if (!objComp) break;
	}

	return objComp;
};

/**
 * 데이터셋의 삭제, 수정, 추가등의 변경을 체크한다.
 * @param   {Array} arrList   넥사크로 데이터셋/그리드 컴포넌트
 * @return  {Boolean}
 * @example trace(take.isDsModifiedArray([this.dsList,this.dsList01])); //--> true/false
 */
take.isDsModifiedArray = function(arrList)
{
    var nCnt;

    arrList = take.nvl(arrList,"");

    if (arrList=="")
    {
        take.debug("take.isDsModifiedArray", "대상 컴포넌트가 없습니다.");
        return;
    }

    if (take.isArray(arrList))
    {
        nCnt = arrList.length;

        for (var i=0; i<nCnt; i++)
        {
            if (take.isDsModified(arrList[i]))
            {
                return true;
                break;
            }
        }

    } else {
        return take.isDsModified(arrList);
    }

    return false;
};

/**
 * 컴포넌트에 이벤트가 있는지 여부 확인후 이벤트 추가
 * @param   {Object} objComp    컴포넌트
 * @param   {String} sEvtId     이벤트명
 * @param   {String, Function}  function 명 또는 function
 * @param   {Object} objTarget  폼 Object
 * @return  {Number} Event index
 * @example take.addEventHandler(this.Button01, "onclick", function(obj,e){return true;}, this);
 */
take.addEventHandler = function(objComp, sEvtId, fFunc, objTarget)
{
    var objHandle, objEvent
    var nCnt, nRtn, nIdx;

    if (take.nvl(objComp,"")=="") return -1;
    if (take.nvl(sEvtId,"")=="") return -1;
    if (take.nvl(fFunc,"")=="") return -1;
    if (take.nvl(objTarget,"")=="") return -1;

    objEvent = objComp[sEvtId];

    if (objEvent)
    {
        objHandle = objEvent._user_handlers;
        nCnt = objHandle.length;

        for (var i = 0; i < nCnt; i++)
        {
            if (objHandle[i].handler.toString() == fFunc.toString())
            {
                return i;
            }
        }
    }

    return objComp.addEventHandler(sEvtId, fFunc, objTarget);
};

/**
  * 공통 User Confirm
  * @param  {Object} pThis      폼 오브젝트
  * @param  {String} sId        메세지 아이디
  * @param  {String} sType      컨펌 타입 (error", "question", "warning", "information")
  * @param  {String} sMsgId     다국어 메세지 아이디
  * @param  {Array}  arrParam   파라메터
  * @param  {Array}  arrBtnText 버튼 텍스트 [0,1,2]
  * @param  {String} sCallBack  다국어 메세지 아이디
  * @return {N/A}    메세지 팝업
  * @example take.userConfirm(this, "msgpop", "question", "ML001", { name : "test", text : "정의"}, null, "fnMsgCallBack");
  *          take.userConfirm(this, "msgpop", "question", "{name}가 {text}되지 않았습니다.", { name : "test", text : "정의"}, ["text1", "text2", "text3"],"fnMsgCallBack");
  */
take.userConfirm = function(pThis, sId, sType, sMsgId, arrParam, arrBtnText, sCallBack)
{
    //TODO 20190104 ymko 향후 다국어 처리 필요

	var objDs;
	var sMsg, sProgNm;
	var nFRow;
	var bRtn;

    sMsg = sMsgId;

    if (sMsg!="")
    {
        if (sMsgId[0] == "M")
        {
            sMsg = take.getWord(pThis, sMsgId);
        }
    }

    //개행 처리
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));

    //용어 파람 처리
	sMsg = sMsg.replace(/(\{)(\w+)(\})/ig,
		function() {
			if (take.nvl(arrParam, "")!="") {
				if (arrParam[arguments[2]] == undefined)
                {
                    return "";
                } else {
                    if (arrParam[arguments[2]][0] == "M")
                    {
                        return take.getWord(pThis, arrParam[arguments[2]]);
                    } else {
                        return arrParam[arguments[2]];
                    }
                }
			} else {
				return "";
			}
		}
	);

	sProgNm = take.getProgInfo(pThis).ProgNm;

	take.trace(pThis.name +"(" + sProgNm +").take.confirm.Start", "INFO", sMsg);

    take.openPopup(pThis, sId, "frm::com/comMsg.xfdl", {argGbn:"confirm", argTitle:"확인", argType:sType ,argMsg:sMsg, argBtnText:arrBtnText, argProgInfo:pThis.name + "(" + sProgNm + ")"}, "width=360 height=330 showtitlebar=false", sCallBack, false);

	return bRtn;
};

/**
 * 파일 정보 (파일명, 확장자)
 * @param   {String} sFileName 파일 네임
 * @return  {Array}  파일명, 확장자
 * @example take.getFileExt("abcd.exe"); //--> ["abcd", "exe"]
 */
take.getFileInfo = function(sFileName)
{
    var nIdx;
    var sRtn = ["",""];

    if (take.nvl(sFileName, "")!="")
    {
        nIdx = sFileName.lastIndexOf(".");

        if (nIdx>=0)
        {
            sExtName  = take.nvl(sFileName.substr(nIdx+1),"");
            sFileName = take.nvl(sFileName.substring(0,nIdx),"");

            if (sExtName !="")
            {
                sExtName = sExtName.toLowerCase();
            }

            sRtn = [sFileName, sExtName];
        } else {
            sRtn = [sFileName, ""];
        }
    }

    return sRtn;
};

/**
 * 최상위 폼 찾기
 * @param  {object} objComp 컴포넌트
 * @return {object} object Form
 */
take.getOwnerWorkForm = function(objComp)
{
    var sType;

    try {
        sType = objComp.parent._type_name;
        //trace(objComp.name + " --> " + objComp._unique_id);

        if (sType=="ChildFrame")
        {
            return objComp;
        } else {
            //현재 프레임 구조에 맞게 설정
            if (objComp.name.substring(0,8) == "divWork_")
            {
                return objComp;
            } else {
                return arguments.callee(objComp.parent);
            }
        }
    } catch(e) {
        return "";
    }
};

/**
 * Alert, Confirm, Transaction 실행 여부
 * @param  {object}  pThis 폼
 * @return {boolean} true/false
 */
take.isOnLoad = function(pThis)
{
	if(pThis.parent) if(pThis.parent.hasOwnProperty('_bOnLoad')) return pThis.parent._bOnload;
	return true;
};

/**
 * 함수를 호출한 폼 찾기
 * @param  {N/A}     N/A
 * @return {Object}  Form object
 */
take.getStackForm = function()
{
    try {
        throw new Error("getStackForm");
    } catch(e) {
        var objStack = e.stack;
        var sPath = "";

        for (var x in objStack)
        {
            //console.dir(objStack[x]);
            //console.dir(objStack[x].getthis());
            //console.dir(objStack[x].getFunction().toString());
            //console.dir(objStack[x].getFunctionName());
            //console.dir(objStack[x].getMethodName());
            //console.dir(objStack[x].getPosition());
            //console.dir(objStack[x].getLineNumber());
            //console.dir(objStack[x].getColumnNumber());
            //console.dir(objStack[x].getTypeName());

            sPath = objStack[x].getFunctionName() + (sPath==""?"":".") + sPath;

            if (objStack[x].getTypeName() == "nexacro.Form")
            {
                sPath = objStack[x].getThis().name + "." + sPath + "(" + objStack[x].getLineNumber() + ")";
                //trace(sPath);
                return objStack[x].getThis();
                //break;
            }
        }
        return null;
    }
};

/**
 * 메세지 파라메터 처리
 * @param   {String} sMsg  wait cursor 실행 여부 (true/false)
 * @param   {Array}  arrParam  wait cursor 실행 여부 (true/false)
 * @return  {String} 메세지
 * @example take.getParamMsg("{0} 입니다.", ["저장"]) // 저장 입니다.
 */ 
take.getParamMsg = function(sMsg, arrParam)
{
    //개행 처리
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
    
    //용어 파람 처리
	sMsg = sMsg.replace(/(\{)(\w+)(\})/ig, 
		function() {
			if (take.nvl(arrParam, "")!="") {
				if (arrParam[arguments[2]] == undefined)
                {
                    return "";
                } else {
                    if (arrParam[arguments[2]][0] == "M")
                    {
                        return arrParam[arguments[2]];
                    } else {
                        return arrParam[arguments[2]];
                    }
                }
			} else {
				return "";
			}
		}
	);
    
    return sMsg;
};

/**
 * 팝업 폼 여부
 * @param   {Object}  objForm  대상 폼
 * @return  {Boolean} 팝업 폼 여부
 * @example take.isPopUpForm(this); //--> true/false
 */ 
take.isPopUpForm = function(objForm)
{
    return take.nvl(objForm.opener,"")==""?false:true;;
};

/**
 * 함수 호출
 * @param  {Object}    objForm  대상 폼
 * @param  {Anonymous} aFunc 함수(String/Function)
 * @return {N/A}       N/A
 * @example take.callFunction(this, "fnTest"); //
 */ 
take.callFunction = function(pThis, aFunc)
{
    var arrArg;
    
    arrArg = Array.prototype.slice.call(arguments);
    arrArg = [].slice.call(arguments);
    
    arrArg = arrArg.slice(2);
        
    aFunc = take.nvl(aFunc,"");
    
    if (take.isFunction(aFunc))
    {
        //aFunc.call(pThis, sPopId, sRtn, objRtn);
        aFunc.apply(pThis, arrArg);
    } else if (take.isFunction(pThis[aFunc])) {
        //pThis[aFunc].call(pThis, sPopId, sRtn, objRtn);
        pThis[aFunc].apply(pThis, arrArg);
    } else if (aFunc=="") {
        //콜백 없음
        return null;
    } else {
        take.debug(pThis, "해당 함수를 찾을 수 없습니다.");
    }
};

/**
 * client 기준 현재 시간을 ms까지 반환
 * @param  {N/A}    N/A
 * @return {N/A}    현재 시간을 ms까지 반환
 * @example take.getTimeStamp(); //2020042810041113
 */ 
take.getTimeStamp = function()
{
    return take.getTodayTime().datetimems;
}
/////////////////////////////////////////////////////////////////////////////
//                       CryptoJs 암호화 function                         //
////////////////////////////////////////////////////////////////////////////
/**
 * cryptojs 암호화
 * @param   {String} sVal         평문
 * @param   {String} sPassphrase  Base64 Encrypt된 Key
 * @return  {String} 암호화 된 Base64 Encrypt된 text
 * @example take.Crypto.getDataEncrypt("test", "bmV4aW512349qc0tleQ==") //--> 0
 */
take.Crypto.getDataEncrypt = function(sVal, sPassphrase)
{
    var objEncryptData;
    var sBase64Data;

    //CryptojsKey를 base64로 변환한 값 > bmV4aW5DcnlwdG9qc0tleQ==
    sPassphrase  = take.nvl(sPassphrase,"");    
    if (sPassphrase=="") return "";
    
    objEncryptData = take.Crypto.getEncryptAES(sVal, sPassphrase);
    sBase64Data  = take.Crypto.getEncodeBase64(objEncryptData);

    return sBase64Data;
};

/**
 * cryptojs 복호화
 * @param   {String} sVal         암호화된 문장
 * @param   {String} sPassphrase  Base64 Encrypt된 Key
 * @return  {String} 암호화 된 Base64 Encrypt된 text
 * @example take.Crypto.getDataDecrypt("ahahfafshasdaq", "bmV4aW512349qc0tleQ==") //--> 0
 */
take.Crypto.getDataDecrypt = function(sBase64Data, sPassphrase)
{
    var objData;
    var sVal, sData;

    sPassphrase  = take.nvl(sPassphrase, "");
    
    if (sPassphrase=="") return "";
    
    sData = take.Crypto.getDecodeBase64(sBase64Data);
    objData = take.Crypto.getDecryptAES(sData, sPassphrase);
    sVal = objData.toString(CryptoJS.enc.Utf8);

    return sVal;
};

/**
 * cryptojs AES 암호화
 * @param   {String} sVal  평문
 * @param   {String} sKey  Base64 Encrypt된 Key
 * @return  {String} 암호화 된 text
 * @example take.Crypto.getDataEcrypt("test", "bmV4aW512349qc0tleQ==") //agaklghd241==
 */
take.Crypto.getEncryptAES = function (sVal, sKey)
{
    var objBase64Key, objEncryptedData;

	//objBase64Key = CryptoJS.enc.Base64.parse(sKey);    
    //objEncryptedData = CryptoJS.AES.encrypt(sVal, objBase64Key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
	objEncryptedData = CryptoJS.AES.encrypt(sVal, sKey, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });

	return objEncryptedData;
};

/**
 * cryptojs AES 복호화
 * @param   {String} sVal  암호화된 문장
 * @param   {String} sKey  Base64 Encrypt된 Key
 * @return  {String} 평문
 * @example take.Crypto.getDecryptAES("agaklghd241==", "bmV4aW512349qc0tleQ==") //test
 */
take.Crypto.getDecryptAES = function (sVal, sKey)
{
    var objBase64Key, objDecryptedData;
    
	//objBase64Key = CryptoJS.enc.Base64.parse(sKey);
	//objDecryptedData = CryptoJS.AES.decrypt(sVal, objBase64Key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 } );
    objDecryptedData = CryptoJS.AES.decrypt(sVal, sKey, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 } );

	return objDecryptedData;
};

/**
 * cryptojs base64 암호화
 * @param   {Anonymous} aVal  평문 또는 암호화된 객체
 * @return  {String} Base64로 암호화된 문장
 * @example take.Crypto.getEncodeBase64("teste") //ahfhasdhah
 */
take.Crypto.getEncodeBase64 = function(aVal)
{
	return btoa(aVal);
};

/**
 * cryptojs base64 복호화
 * @param   {Anonymous} aVal  Base64로 암호화된 문장
 * @return  {String}       평문
 * @example take.Crypto.getDecodeBase64("ahfhasdhah") //test
 */
take.Crypto.getDecodeBase64 = function(aVal)
{
	return atob(aVal);
};


//nexacro console 오류를 alert로 처리
var onNexacroSystemError = nexacro._onSystemError;

nexacro._onSystemError = function(obj, errortype, errormsg) 
{
    // 기존 스크립트 실행
	onNexacroSystemError.apply(this, arguments);
        
    if (take.bTrace)
    {
        take.trace("System", "Info", "오직 테스트용도로 console 오류를 alert창에 띄우도록 처리");
        take.alert("", "Info", errortype + "\n\n" + errormsg);
    }
}

// nexacro.EventListener.prototype._fireEvent = function (obj, evt) {
// 	var i, ret;
// 	var h;
// 	var handlers = this._user_handlers;
// 	var len = handlers.length;
// 
// 	try {
// 		var retrtl = false;
// 		if (len > 0 && evt._xposConvertToRtl) {
// 			retrtl = evt._xposConvertToRtl(obj, evt.fromreferenceobject);
// 		}
// 
// 		for (i = 0; i < len; i++) {
// 			h = handlers[i];
// 			if (obj._is_alive !== false && obj.enableevent !== false) {
// 				ret = h.handler.call(h.target, obj, evt);
// 			}
// 			if (evt) {
// 				this.defaultprevented = evt._prevented;
// 				this.stoppropagation = evt._stoppropagation;
// 			}
// 		}
// 
// 		if (retrtl) {
// 			evt._xposConvertToLtr(obj);
// 		}
// 	}
// 	catch (e) {
// 		if (e.obj) {
// 			nexacro._onSystemError(e.obj, e.name, e.message);
// 			take._takeDebug(e.name, e.message);
// 		}
// 		else {
// 			var msg = nexacro._getExceptionMessage(e);
// 
// 			var environment = nexacro.getEnvironment();
// 			if (environment) {
// 				nexacro._onSystemError(environment, e.name, msg);
// 				take._takeDebug(e.name, msg);
// 			}
// 		}
// 	}
// 
// 	handlers = this._sys_handlers;
// 	len = handlers.length;
// 
// 	for (i = 0; i < len; i++) {
// 		h = handlers[i];
// 		if (obj._is_alive !== false && obj.enableevent !== false) {
// 			ret = h.handler.call(h.target, obj, evt);
// 		}
// 		if (evt) {
// 			this.defaultprevented = evt._prevented;
// 			this.stoppropagation = evt._stoppropagation;
// 		}
// 	}
// 
// 	return ret;
// };