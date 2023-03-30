(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcExchangeRate");
            this.set_titletext("환율");
            if (Form == this.constructor)
            {
                this._setFormPosition(295,155);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExchangeRateL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExchangeRateR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExchangeRate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_DashboardTop");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp",null,"10","20","20","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_advice01");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,"10","20","20","30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_reset01");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divMain","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("bottom");
            obj.set_cssclass("div_MF_DashboardBot");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","272","450","6",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_GD_Square");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("Static09","147","32","1","76",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("Static03");
            obj.set_background("darkgray");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staExchangeRateL","5","80","140","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("1,115.5");
            obj.set_cssclass("sta_MF_CurrencyText");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staExchangeRateR","150","80","140","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_text("1,112.70");
            obj.set_cssclass("sta_MF_CurrencyText");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.divMain.addChild(obj.name, obj);

            obj = new Combo("cboExchangeRateL","5","20","140","20",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsExchangeRateL");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            obj.set_value("Asia/Seoul");
            obj.set_index("0");
            this.divMain.addChild(obj.name, obj);

            obj = new Combo("cboExchangeRateR","150","20","140","20",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsExchangeRateR");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("한국");
            obj.set_value("Asia/Seoul");
            obj.set_index("0");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staCountryNmR","210","45","80","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("6");
            obj.set_text("???");
            obj.set_cssclass("sta_MF_WeatherText01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("false");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staCurrencyUnitL","5","45","60","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("7");
            obj.set_text("KRW");
            obj.set_cssclass("sta_MF_WeatherText01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staCurrencyUnitR","150","45","60","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("8");
            obj.set_text("USD");
            obj.set_cssclass("sta_MF_WeatherText01");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staCountryNmL","65","45","80","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("9");
            obj.set_text("???");
            obj.set_cssclass("sta_MF_WeatherText01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_visible("false");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staDataTime",null,"0","90","15","5",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("10");
            obj.set_text("한국은행 기준율");
            obj.set_cssclass("sta_MF_Date");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staExchangeTitle","5","0",null,"40","55",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("환율");
            obj.set_cssclass("sta_MF_Title");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",295,155,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcExchangeRate.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    dashExchangeRate.xfdl
        *  @Creator     최규헌
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    비영업일의 데이터, 혹은 영업당일 11시 이전에 해당일의 데이터를 요청할 경우 null 값이 반환
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        this.fv_CurrencyCdL = "";
        this.fv_CurrencyCdR = "";
        this.fv_CurrencyCd = "";
        this.fv_SrchToday = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * dashExchangeRate_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.dashExchangeRate_onload = function(obj, e)
        {
        	//if (takeit.formOnLoad(this))
        	// {

        	// }

        	//takedomain.LangService(this); // 다국어 설정

        	// gdsUserInfo 정보
        	var objApp = nexacro.getApplication();
        	var user_id = objApp.gdsUserInfo.getColumn(0,"USER_ID");
        	var currency_cd = objApp.gdsUserInfo.getColumn(0,"CURRENCY_CD");

        	var split_cd = currency_cd.split(",");
        	this.fv_CurrencyCdL = split_cd[0];
        	this.fv_CurrencyCdR = split_cd[1];

        	var objDateTime = takeit.getTodayTime();
        	var sYear = takeit.getTodayTime().year;
        	var sMonth = takeit.getTodayTime().month;
        	var sDay = takeit.getTodayTime().day;
        	var sHour = objDateTime.hh;

        	var TodayCheck = sYear+"-"+sMonth+"-"+sDay;

        	// 날짜 테스트 용도
        	//var objDateTime2 = new nexacro.Date().getDate(); // << 일자 값만
        	//var test_Date = "2018-07-22";

        	// 요일 체크
        	var objDate = new Date(TodayCheck); // ex 2018-xx-xx
        	var DayOfWeek = objDate.getUTCDay();		// 0=일요일,1=월요일,2=화요일,3=수요일,4=목요일,5=금요일,6=토요일

        	var sTitleName = " 한국은행 최초 고시 기준";

        	// 금요일 날짜로 셋팅
        	var sFri = sDay-3;			// 월요일인 경우
        	var sFri_0 = sDay-2;		// 일요일인 경우
        	var sFri_6 = sDay-1;		// 토요일인 경우

        	var sYesterDay = sDay-1;	// 어제 날짜

        	// 영업일&시간 이전일 경우 fv_SrchToday에 날짜 셋팅
        	if (DayOfWeek == 6) {
        		//trace("## 토요일 ##");
        		//trace("토요일이면 금요일 데이터 수집");
        		this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sFri_6+ sTitleName);
        		this.fv_SrchToday = sYear+"-"+sMonth+"-"+sFri_6;

        	} else if (DayOfWeek == 0) {
        		//trace("## 일요일 ##");
        		//trace("일요일이면 금요일 데이터 수집");
        		this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sFri_0+ sTitleName);
        		this.fv_SrchToday = sYear+"-"+sMonth+"-"+sFri_0;

        	} else if (DayOfWeek == 1) {
        		//trace("## 월요일 ##");
        		if (sHour < 10) {
        			//trace("월요일 & 10시 이전 => 금요일 데이터 수집");
        			this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sFri+ sTitleName);
        			this.fv_SrchToday = sYear+"-"+sMonth+"-"+sFri;

        		} else {
        			//trace("월요일 & 10시 이후 => 정상영업");
        			this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sDay+ sTitleName);
        		}

        	} else {
        		//trace("화&수&목&금");
        		if (sHour < 10) {
        			//trace("## 영업시간 10시 이전 ##");
        			this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sYesterDay+ sTitleName);
        			this.fv_SrchToday = sYear+"-"+sMonth+"-"+sYesterDay;

        		} else {
        			//trace("## 영업일 ##");
        			this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sDay+ sTitleName);
        		}

        	}
        	/*
        	if (sHour < 10) {
        		trace("########## 10시 이전 입니다 ##########");
        		this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sYesterDay+ sTitleName);
        		this.fv_SrchToday = sYear+"-"+sMonth+"-"+sYesterDay;
        		// 일요일인 경우
        		if (DayOfWeek == 0) {
        			trace("########## 일요일 입니다 ##########");
        			this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sFri_0+ sTitleName);
        			this.fv_SrchToday = sYear+"-"+sMonth+"-"+sFri_0;
        		}
        		// 월요일인 경우
        		if (DayOfWeek == 1) {
        			trace("########## 월요일 입니다 ##########");
        			this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sFri+ sTitleName);
        			this.fv_SrchToday = sYear+"-"+sMonth+"-"+sFri;
        		}
        		// 토요일인 경우
        		if (DayOfWeek == 6) {
        			trace("########## 토요일 입니다 ##########");
        			this.divTop.form.staDataTime.set_text(sYear+"."+sMonth+"."+sFri_6+ sTitleName);
        			this.fv_SrchToday = sYear+"-"+sMonth+"-"+sFri_6;
        		}
        	}
        	*/

        	//this.fnInit();

        }

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
        	var sUrl, sInDs, sOutDs, sParam, sCallBack;

        	if (takeit.nvl(sTranId, "")=="") sTranId = "init";

        	// sTranID 값이 없을 경우 transaction을 수행하지 않아야함
        	if (takeit.nvl(sTranId, "")=="") return;

            switch(sTranId)
            {
        		// 환율이 있는 페이지 전환시 fnTran을 불러오는데 init 케이스로 시작.
        		case "init" :
        			trace("환율정보가져오기");
        			this.fnInit();

        			break;

        		// cbo left
                case "CurrencySelectL" :
        		    var reloadtime = this.parent.form.parent.reloadtime;
                    if( "" != reloadtime && null != reloadtime && "undefined" != reloadtime ){
                        var nMin = 60000;
                        var nTimeMin = nMin*parseInt(reloadtime);
                        this.setTimer(99,nTimeMin);
                    }
        			this.dsList.clearData();

        			//cur_unit : KRW, JPY, USD, EUR.....
        			var sToday = takeit.getTodayTime().date;

        			var SearchDay = sToday;
        			if (this.fv_SrchToday != "") {
        				SearchDay = this.fv_SrchToday;
        			}
        			var CountryCode = this.divMain.form.cboExchangeRateL.value;

        			sParam  = "";
        			sParam += "SearchDay =" + nexacro.wrapQuote(SearchDay);		// 오늘 날짜 param
        			sParam += "CountryCode =" + nexacro.wrapQuote(CountryCode);	// 선택한 국가 param

        			sUrl   = "SVC_LOC::dash/dashExchangeRateInfo.do",			// 서비스 URL
        			sInDs  = "",      											// 데이터셋을  검색조건으로 보낼경우 사용 -->선택
        			sOutDs = "dsList=dsList",      								// 데이터를 받아올 데이터셋 지정
        			sCallBack = "fnCallback";

                    break;

        		// cbo right
        		case "CurrencySelectR" :
        			this.dsList.clearData();

        			var sToday = takeit.getTodayTime().date;
        			var SearchDay = sToday;
        			if (this.fv_SrchToday != "") {
        				SearchDay = this.fv_SrchToday;
        			}
        			var CountryCode = this.divMain.form.cboExchangeRateR.value;
        			if(CountryCode == "undefined") {
        				CountryCode = "CNH";
        			}

        			sParam  = "";
        			sParam += "SearchDay =" + nexacro.wrapQuote(SearchDay);		// 오늘 날짜 param
        			sParam += "CountryCode =" + nexacro.wrapQuote(CountryCode);	// 선택한 국가 param

        			sUrl   = "SVC_LOC::dash/dashExchangeRateInfo.do",			// 서비스 URL
        			sInDs  = "",      											// 데이터셋을  검색조건으로 보낼경우 사용 -->선택
        			sOutDs = "dsList=dsList",      								// 데이터를 받아올 데이터셋 지정
        			sCallBack = "fnCallback";

                    break;

        		// user가 선택한 콤보박스 값 저장(개인화)
        		case "User_CurrencyCd" :
        			var sSaveCodeL = this.divMain.form.cboExchangeRateL.value;
        			var sSaveCodeR = this.divMain.form.cboExchangeRateR.value;
        			if(sSaveCodeR == "undefined") {
        				sSaveCodeR = "CNH"
        			}
        			var sSaveCurrencyCd = sSaveCodeL + "," + sSaveCodeR;

        			sUrl   = "SVC_LOC::comm/userConfigUpdate.do",     				//서비스 URL
        			sInDs  = "",													//데이터셋을 검색조건으로 보낼경우 사용 -->선택
        			sOutDs = "",     												//데이터를 받아올 데이터셋 지정
        			sParam =  "sCurrencyCd='"+sSaveCurrencyCd+"'";					//보내는 param
        			sCallBack = "fnCallback";
        			break;
            }

            //트랜젝션 공통함수 호출 -->필수(모든 트랜젝션을 공통으로 처리)
            takeit.transaction(this,sTranId, sUrl, sInDs, sOutDs, sParam, sCallBack);
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : svcId   - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : errCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : errMsg   - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallback = function(sId, nErrCd, sErrMsg)
        {
            //Transaction 에러는 공통에서 처리

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( nErrCd == "SUCC" )
            {
        		takeit.alert(this, "Info", "Transaction은 성공이나 실제 처리된게 없을 경우 처리");
            } else {
                //Etc Script
            }

            switch(sId)
            {
                case "CurrencySelectL" :
        			//trace(this.dsList.saveXML());

        			var sCur_Unit = this.dsList.getColumn(0, "CURRENCY_UNIT");				// 받아온 국가 화폐단위
        			var sCur_Name = this.dsList.getColumn(0, "CURRENCY_NAME");				// 받아온 국가명
        			var sCur_Rate = this.dsList.getColumn(0, "CURRENCY_RATE");				// 받아온 국가 환율
        			var sYesterDay = this.dsList.getColumn(0, "SEARCH_YDAY");

        // 			trace("####### 화폐단위 ==> " + sCur_Unit);
        // 			trace("####### 국가명 ==> " + sCur_Name);
        // 			trace("####### 환율 ==> " + sCur_Rate);
        // 			trace("####### sYesterDay ==> " + sYesterDay);

        			this.divMain.form.staExchangeRateL.set_text(sCur_Rate + " 원");		// 환율 set
        			this.divMain.form.staCurrencyUnitL.set_text(sCur_Name + " 기준");	// 화폐단위 set
        			this.divMain.form.staCountryNmL.set_text(sCur_Name);				// 국가명 set

        			this.fnTran("CurrencySelectR");

        			if (this.fv_CurrencyCdL != sCur_Unit)
        			{
        				// 개인화 저장하기 위해
        				var objApp = nexacro.getApplication();
        				this.fnTran("User_CurrencyCd");
        			}

                    break;

        		case "CurrencySelectR" :

        			var sCur_UnitR = this.dsList.getColumn(0, "CURRENCY_UNIT");				// 받아온 국가 화폐단위
        			var sCur_NameR = this.dsList.getColumn(0, "CURRENCY_NAME");				// 받아온 국가명
        			var sCur_RateR = this.dsList.getColumn(0, "CURRENCY_RATE");				// 받아온 국가 환율

        			this.divMain.form.staExchangeRateR.set_text(sCur_RateR+" 원");		// 환율 set
        			this.divMain.form.staCurrencyUnitR.set_text(sCur_NameR + " 기준");	// 화폐단위 set
        			this.divMain.form.staCountryNmR.set_text(sCur_NameR);				// 국가명 set


        			if (this.fv_CurrencyCdR != sCur_UnitR)
        			{
        				// 개인화 저장하기 위해
        				var objApp = nexacro.getApplication();
        				this.fnTran("User_CurrencyCd");
        			}


                    break;

        		case "User_CurrencyCd" :
        			//마지막 사용자의 정보 gdsUserInfo에 SetColumn
        			var objApp = nexacro.getApplication();
        			objApp.gdsUserInfo.setColumn(0, "CURRNECY_CD", this.fv_CurrencyCd);

        			break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (takeit.nvl(sTranId, "")=="") sTranId = "";

            this.fnTran(sTranId);
        }
        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (takeit.nvl(sTranId, "")=="") sTranId = "Save transation id";

            this.fnTran(sTranId);
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 국가 선택 Left
        this.divMain_cboExchangeRateL_onitemchanged = function(obj,e)
        {
        	this.fnTran("CurrencySelectL");
        };

        // 국가 선택 Right
        this.divMain_cboExchangeRateR_onitemchanged = function(obj,e)
        {
        	this.fnTran("CurrencySelectR");
        };

        // Refresh
        this.divTop_btnRefresh_onclick = function(obj,e)
        {
        	this.fnTran("CurrencySelectL");
        	this.fnTran("CurrencySelectR");
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */

        // 국가선택 Left
        this.fnInit = function()
        {
        	takeit.tranSelect(this, "LSearch", "Dash.dashExchangeRateSelect", "", "dsExchangeRateL", "", "fnCallback");
        	if (this.fv_CurrencyCdL == "") {
        		this.divMain.form.cboExchangeRateL.set_value("USD");
        	} else {
        		this.divMain.form.cboExchangeRateL.set_value(this.fv_CurrencyCdL);
        	}

        	this.fnTran("CurrencySelectL");

        	this.fnInit2();

        }
        // 국가선택 Right
        this.fnInit2 = function()
        {
        	takeit.tranSelect(this, "RSearch", "Dash.dashExchangeRateSelect", "", "dsExchangeRateR", "", "fnCallback");
        	if (this.fv_CurrencyCdR == "undefined") {
        		this.divMain.form.cboExchangeRateR.set_value("CNH");
        	} else {
        		this.divMain.form.cboExchangeRateR.set_value(this.fv_CurrencyCdR);
        	}

        	//this.fnTran("CurrencySelectR");
        };

        this.divTop_btnHelp_onclick = function(obj,e)
        {
        	// 메뉴얼 추가
        	var manualurl = this.parent.form.parent.manualurl;
            window.open(manualurl, "Popmanual", "height=700,width=600");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dashExchangeRate_onload,this);
            this.divTop.form.btnHelp.addEventHandler("onclick",this.divTop_btnHelp_onclick,this);
            this.divTop.form.btnRefresh.addEventHandler("onclick",this.divTop_btnRefresh_onclick,this);
            this.divMain.form.cboExchangeRateL.addEventHandler("onitemchanged",this.divMain_cboExchangeRateL_onitemchanged,this);
            this.divMain.form.cboExchangeRateR.addEventHandler("onitemchanged",this.divMain_cboExchangeRateR_onitemchanged,this);
        };
        this.loadIncludeScript("dbcExchangeRate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
