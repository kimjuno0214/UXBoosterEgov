(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcTime");
            this.set_titletext("현재시간");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(354,109);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTime", this);
            obj._setContents("<ColumnInfo><Column id=\"WEEK_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"UTC_OFFSET\" type=\"STRING\" size=\"256\"/><Column id=\"UTC_DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIXTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TIMEZONE\" type=\"STRING\" size=\"256\"/><Column id=\"RAW_OFFSET\" type=\"STRING\" size=\"256\"/><Column id=\"DST_UNTIL\" type=\"STRING\" size=\"256\"/><Column id=\"DST_OFFSET\" type=\"STRING\" size=\"256\"/><Column id=\"DST_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DST\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_OF_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_OF_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ABBREVIATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRawOffset", this);
            obj._setContents("<ColumnInfo><Column id=\"DSTOFFSET\" type=\"STRING\" size=\"256\"/><Column id=\"RAWOFFSET\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"TIMEZONEID\" type=\"STRING\" size=\"256\"/><Column id=\"TIMEZONENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApiInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LATITUDE\" type=\"STRING\" size=\"256\"/><Column id=\"LONGITUDE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staUnit",null,"0","110","15","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Unit");
            obj.set_textAlign("right");
            obj.set_text("출처 : worldtimeapi.org");
            this.addChild(obj.name, obj);

            obj = new Static("staToday","5","0",null,"15","110",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Time");
            this.addChild(obj.name, obj);

            obj = new Static("staTime","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_NumberB");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",354,109,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcTime.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    dbcTime.xfdl
        *  @Creator     신준민
        *  @CreateDate  2019.12.27
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.12.27      신준민             최초 생성
        *  2020.09.28      김대승             개발표준 및 로직수정
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        var pForm = this;		// 비동기일 때 this 대신 쓰는 변수
        this.fv_nSeconds = 0; 	// 타이머가 진행되는 초

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload등)
         ********************************************************/
        //Form_onload 최초 로드시 발생되는 이벤트 (필수)
        this.dbcTime_onload = function(obj, e)
        {
        	var bTran;

        	bTran = this.parent.btran;

        	if (bTran) this.fnInit();

        	//this.fnInit();
        }

        //Form 타이머 이벤트
        this.dbcTime_ontimer = function(obj,e)
        {
        	var sTextTime, sKTime;
        	var objDate;
        	var nYear, nMonth, nDate, nsetHours, nMin, nSec;

        	if (e.timerid==9999)
        	{
        		//타이머 시간이 1분이 되었을 때 다시한번 트랜잭션 처리
        		this.fv_nSeconds++;

        		if(this.fv_nSeconds==60)
        		{
        			this.killTimer(9999);
        			this.fnTime();
        			this.fv_nSeconds = 0;
        		}

        		objDate = new Date();

        		sTextTime = objDate.getSeconds();

        		sTextTime++;
        		objDate.setSeconds(sTextTime);

        		//년,월,일,시,분 값 받아오기
        		nYear 	  = objDate.getFullYear();
        		nMonth 	  = objDate.getMonth()+1;
        		nDate 	  = objDate.getDate();
        		nsetHours = objDate.getHours();
        		nMin 	  = objDate.getMinutes();
        		nSec 	  = objDate.getSeconds();

        		sKTime = nsetHours.toString().lpad(2,"0") + ":" +
        				 nMin.toString().lpad(2,"0")      + ":" +
        				 nSec.toString().lpad(2,"0");

        		this.staTime.set_text(sKTime);
        	}
        };

        /*********************************************************
         * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
         ********************************************************/
        //N/A

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        // divTop_btnReload_onclick : 새로고침 이벤트
        this.divTop_btnReload_onclick = function(obj,e)
        {
        	this.killTimer(9999);
        	this.fnTime();
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnTimeZone : 시간 기준 위치정보 조회
         * @example this.fnTimeZone();
         */
        this.fnTimeZone = function()
        {
        	take.transaction
        	(
        		this,								//pThis		: nexacro form object
        		"getTimeZone",						//sTranId	: 서비스아이디
        		"SVC_LOC::dash/Timezone.do",		//sUrl		: 서비스 URL
        		"dsApiInfo=dsApiInfo",				//sInDs		: 서버로 보낼 데이터셋
        		"dsRawOffset=dsRawOffset",			//sOutDs	: 서버에서 받을 데이터셋
        		"",									//sParam	: 파라메터
        		"fnCallback",						//sCallBack	: 트랜젝션 완료후 실행할 CallBack 함수
        		true,								//bAsync	: 동기 비동기 여부
        		true								//bErrRtn	: 트랜잭션 에러를 화면단에서 받을지 여부
        	);
        }

        /**
         * fnTime : 시간 Api 받아와서 Date 객체에 넣기
         * @example this.fnTime();
         */
        this.fnTime = function()
        {
        	take.transaction
        	(
        		this,								//pThis		: nexacro form object
        		"currentDateTime",					//sTranId	: 서비스아이디
        		"SVC_LOC::dash/worldTimezone.do",	//sUrl		: 서비스 URL
        		"dsRawOffset=dsRawOffset",			//sInDs		: 서버로 보낼 데이터셋
        		"dsTime=dsTime",					//sOutDs	: 서버에서 받을 데이터셋
        		"",									//sParam	: 파라메터
        		"fnCallback",						//sCallBack	: 트랜젝션 완료후 실행할 CallBack 함수
        		false,								//bAsync	: 동기 비동기 여부
        		true								//bErrRtn	: 트랜잭션 에러를 화면단에서 받을지 여부
        	);
        }

        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	var objApiInfo   = this.dsApiInfo;
        	var av_sLocation = take.nvl(_application.av_sLocation, "");
        	var sLatitude, sLongitude;

        	// 로케이션 정보를 이미 가지고 있다면 새로 받지 않음.
        	if(av_sLocation != ""){
        		sLatitude  = av_sLocation.split(",")[0];
        		sLongitude = av_sLocation.split(",")[1];
        		objApiInfo.addRow();
        		objApiInfo.setColumn(0,"LATITUDE" , sLatitude);
        		objApiInfo.setColumn(0,"LONGITUDE", sLongitude);
        		trace("sLatitude >> "+sLatitude);
        		trace("sLongitude >> "+sLongitude);
        		this.fnTimeZone();
        	} else {
        		// navigator를 지원하지 않음
        		if (typeof(navigator) != "object")
        		{
        			objApiInfo.addRow();
        			objApiInfo.setColumn(0,"LATITUDE" , "");
        			objApiInfo.setColumn(0,"LONGITUDE", "");
        			this.fnTimeZone();
        		}

        		if (typeof(navigator.geolocation) == "object")
        		{
        			if(take.isFunction(navigator.geolocation.getCurrentPosition)){
        				navigator.geolocation.getCurrentPosition(
        				function(position) {
        					pForm.dsApiInfo.addRow();
        					pForm.dsApiInfo.setColumn(0,"LATITUDE" ,position.coords.latitude);
        					pForm.dsApiInfo.setColumn(0,"LONGITUDE",position.coords.longitude);
        					pForm.fnTimeZone();

        					_application.av_sLocation = position.coords.latitude+","+position.coords.longitude;
        				}, function(error) {
        					take.debug(_application, "현재 위치 값을 가져오지 못했습니다. \n브라우저 설정을 확인 해주세요. (error.code ->   "+error.code+")");
        					objApiInfo.addRow();
        					objApiInfo.setColumn(0,"LATITUDE" , "");
        					objApiInfo.setColumn(0,"LONGITUDE", "");
        					pForm.fnTimeZone();
        				});
        			}
        		} else {
        			objApiInfo.addRow();
        			objApiInfo.setColumn(0,"LATITUDE" , "");
        			objApiInfo.setColumn(0,"LONGITUDE", "");
        			this.fnTimeZone();
        		}
        	}
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallback = function(sId, nErrCd, sErrMsg)
        {
        	var nDatetime, nWeek, nYear, nMonth, nDate, nHours, nMin, nSec;
        	var arrDate;
        	var sDay, sContry, sKTime;
        	var objDsRawOffset, objDsTime;

        	objDsRawOffset = this.dsRawOffset;
        	objDsTime 	   = this.dsTime;

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

        	switch(sId) {
        		case "getTimeZone" :
        			this.fnTime();
        			break;

        		case "currentDateTime" :
        			//데이터셋에서 트랜잭션처리한 한국 표준시 받아오기
        			nDatetime = objDsTime.getColumn(0,"DATETIME");

        			//데이터셋에서 day_of_week 값 받아오기
        			nWeek = objDsTime.getColumn(0,"DAY_OF_WEEK");

        			arrDate = ["일","월","화","수","목","금","토"];

        			//년,월,일 시분초 값 자르기
        			nYear 	= nDatetime.substring(0,4);
        			nMonth 	= nDatetime.substring(5,7);
        			nDate 	= nDatetime.substring(8,10);
        			nHours 	= nDatetime.substring(11,13);
        			nMin 	= nDatetime.substring(14,16);
        			nSec 	= nDatetime.substring(17,19);

        			//staToday에 들어갈 text ==> ex)기준날짜(2019년 12월 26일)
        			sDay = nYear.toString()  + "년 " +
        				   nMonth.toString() + "월 " +
        				   nDate.toString()  + "일";// +
        				   //arrDate[nWeek]    + "요일";

        			//staLocation에 들어갈 text ==> ex)Korean(Asia/Seoul)
        			sContry = objDsRawOffset.getColumn(0, "TIMEZONENAME").replace(" Standard Time", "");

        			//staTime에 들어갈 text ==> ex)15:19:50
        			sKTime = nHours.toString().lpad(2,"0")	+ ":" +
        					 nMin.toString().lpad(2,"0") 	+ ":" +
        					 nSec.toString().lpad(2,"0");

        			//static에 글자 삽입
        			this.staToday.set_text(sDay + " / " +sContry + "(" +	objDsRawOffset.getColumn(0, "TIMEZONEID") + ")");

        			this.staTime.set_text(sKTime);
        			this.setTimer(9999,1000);

        			break;
        		default:
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.dbcTime_ontimer,this);
            this.addEventHandler("onload",this.dbcTime_onload,this);
        };
        this.loadIncludeScript("dbcTime.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
