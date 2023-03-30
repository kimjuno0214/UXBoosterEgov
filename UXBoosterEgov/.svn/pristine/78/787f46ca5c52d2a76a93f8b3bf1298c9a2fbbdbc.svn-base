(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcUniversalTime");
            this.set_titletext("세계시간");
            if (Form == this.constructor)
            {
                this._setFormPosition(295,155);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCountry", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCountry2", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_DashboardTop");
            this.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,"10","20","20","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_reset01");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staWeatherT","5","0",null,"40","30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("세계시간");
            obj.set_cssclass("sta_MF_Title");
            obj.set_verticalAlign("middle");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divMain","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_cssclass("sta_MF_Vline");
            obj.set_background("darkgray");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staCountryDate1","5",null,"140","25",null,"5",null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("2018년07월02일 목요일");
            obj.set_cssclass("sta_MF_WeatherText01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staSecL","100","50","45","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("8");
            obj.set_text("00");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_MF_UnivesalTime");
            obj.set_visible("true");
            obj.set_font("16px/normal \"Verdana\",\"Arial\"");
            obj.set_verticalAlign("middle");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staTimeHourL","5","40","45","40",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_text("00");
            obj.set_cssclass("sta_MF_NumberN");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staSecR","245","50","45","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("9");
            obj.set_text("00");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_MF_UnivesalTime");
            obj.set_visible("true");
            obj.set_font("16px/normal \"Verdana\",\"Arial\"");
            obj.set_verticalAlign("middle");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staTimeHourR","155","40","45","40",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("4");
            obj.set_text("00");
            obj.set_cssclass("sta_MF_NumberN");
            obj.set_usedecorate("true");
            this.divMain.addChild(obj.name, obj);

            obj = new Combo("cboCountry","5","20","140","20",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCountry");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("Asia/Seoul");
            obj.set_text("");
            obj.set_value("Asia/Seoul");
            obj.set_index("0");
            this.divMain.addChild(obj.name, obj);

            obj = new Combo("cboCountry2","150","20","140","20",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCountry2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("Europe/Paris");
            obj.set_text("한국");
            obj.set_value("Asia/Seoul");
            obj.set_index("0");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staCountryDate2","150",null,"140","25",null,"5",null,null,null,null,this.divMain.form);
            obj.set_taborder("7");
            obj.set_text("2018년07월01일 수요일");
            obj.set_cssclass("sta_MF_WeatherText01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staTimeMinR","200","40","45","40",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("10");
            obj.set_text("00");
            obj.set_cssclass("sta_MF_NumberN");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staTimeMinL","50","40","45","40",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("11");
            obj.set_text("00");
            obj.set_cssclass("sta_MF_NumberN");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staDataTime",null,"0","80","15","5",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("12");
            obj.set_text("UTC/GMT 기준");
            obj.set_cssclass("sta_MF_Date");
            obj.set_visible("false");
            this.divMain.addChild(obj.name, obj);
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
        this.registerScript("dbcUniversalTime.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    dashUniversalTime.xfdl
        *  @Creator     최규헌
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        //sta_MF_NumberB

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        var WorldTimeL = "";
        var WorldTimeR = "";
        this.fv_WorldTimeL = "";
        this.fv_WorldTimeR = "";
        var gdsWorldTime = "";
        this.CodeL = "";
        this.CodeR = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * dashUniversalTime_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.dashUniversalTime_onload = function(obj, e)
        {
        //   if (takeit.formOnLoad(this))
        //   {
        		//takedomain.LangService(this); // 다국어 설정

        		this.setTimer(0, 1000); //
         		//this.setTimer(1,1000);//
         		this.setTimer(2,500);	//

        		var objApp = nexacro.getApplication();
         		var user_id = objApp.gdsUserInfo.getColumn(0,"USER_ID");
        		var worldtime_cd = objApp.gdsUserInfo.getColumn(0,"WORLDTIME_CD");

        		//trace(objApp.gdsUserInfo.saveXML());

        		var split_cd = worldtime_cd.split(",");
        		this.fv_WorldTimeL = split_cd[0];
        		this.fv_WorldTimeR = split_cd[1];

        		this.CodeL = split_cd[0];
        		this.CodeR = split_cd[1];

        //   		trace("### WorldTimeL ==> " + this.fv_WorldTimeL);
        //   		trace("### WorldTimeR ==> " + this.fv_WorldTimeR);
        // 		trace("### this.CodeL ==> " + this.CodeL);
        //   		trace("### this.CodeR ==> " + this.CodeR);

        		//this.fnInit();

        //   }
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
        	var country1, country2;

        	if (takeit.nvl(sTranId, "")=="") sTranId = "init";

        	if (takeit.nvl(sTranId, "")=="") return;

            switch(sTranId)
            {
        		// 세계시간이 있는 페이지 전환시 fnTran을 불러오는데 case : init 시작.
        		case "init" :
        				this.fnInit();
        			break;

                case "CountrySearchL" :
        			this.dsList.clearData();

        			var country1 = this.divMain.form.cboCountry.value;
        			this.fv_WorldTimeL = country1;

        			sParam  = "";
        			sParam += "country1 =" + nexacro.wrapQuote(country1);

        			sUrl   = "SVC_LOC::dash/dashUniversalTime.do",	//서비스 URL
        			sInDs  = "",      								//데이터셋을  검색조건으로 보낼경우 사용 -->선택
        			sOutDs = "dsList=dsList",      					//데이터를 받아올 데이터셋 지정
        			sCallBack = "fnCallback";

                    break;

        		case "CountrySearchR" :
        			this.dsList.clearData();

        			country2 = this.divMain.form.cboCountry2.value;
        			this.fv_WorldTimeR = country2;

        			sParam  = "";
        			sParam += "country1 =" + nexacro.wrapQuote(country2);

        			sUrl   = "SVC_LOC::dash/dashUniversalTime.do",	//서비스 URL
        			sInDs  = "",      								//데이터셋을  검색조건으로 보낼경우 사용 -->선택
        			sOutDs = "dsList=dsList",      					//데이터를 받아올 데이터셋 지정
        			sCallBack = "fnCallback";

                    break;

        		// user가 선택한 정보 저장(개인화)
        		case "User_WorldTime" :
        			var sSaveCodeL = this.divMain.form.cboCountry.value;
        			var sSaveCodeR = this.divMain.form.cboCountry2.value;
        			if(takeit.nvl(this.divMain.form.cboCountry2.value, "") =="") sSaveCodeR = "Europe/Paris";

        			var sSaveWorldTimeCd = sSaveCodeL + "," + sSaveCodeR;

        			sUrl   = "SVC_LOC::comm/userConfigUpdate.do",     				//서비스 URL
        			sInDs  = "",													//데이터셋을 검색조건으로 보낼경우 사용 -->선택
        			sOutDs = "",     												//데이터를 받아올 데이터셋 지정
        			sParam =  "sWorldTimeCd='"+sSaveWorldTimeCd+"'";				//보낼 param
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

            } else {
                //Etc Script
            }

            switch(sId)
            {
                case "CountrySearchL" : //왼쪽

        			var select_country = this.dsList.getColumn(0, "COUNTRY");		// 2018-06-27 11:33:59 (GMT+0900)
        			var select_country_nm = this.dsList.getColumn(0, "COUNTRY_NM");	// 한국 표준시

        			var country_nm = select_country_nm;								// 선택한 지역의 표준시
        			var select_country_time = select_country.substr(11,8);			// 선택한 지역의 시간
        			var select_country_date = select_country.substr(0,10);			// 선택한 지역의 날짜

        			var objDate = new Date(select_country_date);
        			var nDay = objDate.getUTCDay();
        			var sConvertDay = "";

        			if (nDay == 0) {
        				sConvertDay = "일";
        			} else if (nDay == 1) {
        				sConvertDay = "월";
        			} else if (nDay == 2) {
        				sConvertDay = "화";
        			} else if (nDay == 3) {
        				sConvertDay = "수";
        			} else if (nDay == 4) {
        				sConvertDay = "목";
        			} else if (nDay == 5) {
        				sConvertDay = "금";
        			} else if (nDay == 6) {
        				sConvertDay = "토";
        			}

        			var YearL = select_country_date.substr(0,4);
        			var MonthL = select_country_date.substr(5,2);
        			var DayL = select_country_date.substr(8,2);

        			var DDateL = YearL+"년 "+MonthL+"월 "+DayL+"일 "+sConvertDay+"요일"

        			//this.divMain.form.staTime1.set_text(select_country_time);		// 11:33:55
        			//this.divMain.form.staCountryNm.set_text(country_nm);			// ex) 한국표준시
        			//this.divMain.form.staCountryDate1.set_text(select_country_date);	// 2018-07-07
        			this.divMain.form.staCountryDate1.set_text(DDateL); // 년 월 일 요일

        			WorldTimeL = select_country;
        			this.fnTimeGet();

        			// 왼쪽 세계시간 변경
        			if (this.CodeL != this.divMain.form.cboCountry.value)
        			{
        				var objApp = nexacro.getApplication();
        				this.fnTran("User_WorldTime");
        			}

                    break;

        		case "CountrySearchR" : //오른쪽

        			var select_country = this.dsList.getColumn(0, "COUNTRY");
        			var select_country_nm = this.dsList.getColumn(0, "COUNTRY_NM");	// 표준시

        			var country_nm = select_country_nm;
        			var select_country_time = select_country.substr(11,8);
        			var select_country_date = select_country.substr(0,10);

        			var objDate = new Date(select_country_date);
        			var nDay = objDate.getUTCDay();
        			var sConvertDay = "";

        			if (nDay == 0) {
        				sConvertDay = "일";
        			} else if (nDay == 1) {
        				sConvertDay = "월";
        			} else if (nDay == 2) {
        				sConvertDay = "화";
        			} else if (nDay == 3) {
        				sConvertDay = "수";
        			} else if (nDay == 4) {
        				sConvertDay = "목";
        			} else if (nDay == 5) {
        				sConvertDay = "금";
        			} else if (nDay == 6) {
        				sConvertDay = "토";
        			}

        			var YearR = select_country_date.substr(0,4);
        			var MonthR = select_country_date.substr(5,2);
        			var DayR = select_country_date.substr(8,2);

        			var DDateR = YearR+"년 "+MonthR+"월 "+DayR+"일 "+sConvertDay+"요일"

        			//this.divMain.form.staTime2.set_text(select_country_time);
        			//this.divMain.form.staCountryNm2.set_text(country_nm);
        			this.divMain.form.staCountryDate2.set_text(DDateR);


        			WorldTimeR = select_country;
        			this.fnTimeGet();

        			// 오른쪽 세계시간 변경
        			if (this.CodeR != this.divMain.form.cboCountry2.value)
        			{
        				var objApp = nexacro.getApplication();
        				this.fnTran("User_WorldTime");
        			}

                    break;

        		case "User_WorldTime" :
        			//마지막 사용자의 정보 gdsUserInfo에 SetColumn
        			var objApp = nexacro.getApplication();
        			objApp.gdsUserInfo.setColumn(0, "WORLDTIME_CD", gdsWorldTime);

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
        // 지역/도시 선택 Left
        this.divMain_cboCountry_onitemchanged = function(obj,e)
        {
        	this.fnTran("CountrySearchL");
        };
        // 지역/도시 선택 Right
        this.divMain_cboCountry2_onitemchanged = function(obj,e)
        {
        	this.fnTran("CountrySearchR");
        };

        // Refresh
        this.divTop_btnRefresh_onclick = function(obj,e)
        {
        	this.fnTran("CountrySearchL");
        	this.fnTran("CountrySearchR");
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
        	takeit.tranSelect(this, "LSearch", "Dash.dashUniversalTimeSelect", "", "dsCountry", "", "fnCallback");
        	if (this.fv_WorldTimeL == "") {
        		this.divMain.form.cboCountry.set_value("Asia/Seoul");
        	} else {
        		this.divMain.form.cboCountry.set_value(this.fv_WorldTimeL);
        	}

        	this.fnTran("CountrySearchL");

        	this.fnInit2();
        }
        // 국가선택 Right
        this.fnInit2 = function ()
        {
        	takeit.tranSelect(this, "RSearch", "Dash.dashUniversalTimeSelect", "",   "dsCountry2", "", "fnCallback");
        	if (this.fv_WorldTimeR == "undefined") {
        		this.divMain.form.cboCountry2.set_value("Europe/Paris");
        	} else {
        		this.divMain.form.cboCountry2.set_value(this.fv_WorldTimeR);
        	}

        	this.fnTran("CountrySearchR");
        };

        /************************************************************************
         * 시간계산
         ************************************************************************/
        this.fnTimeGet = function ()
        {
        	//ex 2018-06-29 14:37:37 (CEST +0200)
        	var WorldTimeGapL, WorldTimeGapR;

        	WorldTimeGapL = WorldTimeL.substr(25,3);
        	WorldTimeGapR = WorldTimeR.substr(25,3);

        	//this.divMain.form.staTime1.set_text(this.getWorldTime(WorldTimeGapL));
        	//this.divMain.form.staTime2.set_text(this.getWorldTime(WorldTimeGapR));

        	this.divMain.form.staTimeHourL.set_text(this.getWorldTime(WorldTimeGapL));
        	this.divMain.form.staTimeMinL.set_text(this.getWorldTimeMin(WorldTimeGapL));
        	this.divMain.form.staSecL.set_text(this.getWorldTimeSec(WorldTimeGapL));

        	this.divMain.form.staTimeHourR.set_text(this.getWorldTime(WorldTimeGapR));
        	this.divMain.form.staTimeMinR.set_text(this.getWorldTimeMin(WorldTimeGapR));
        	this.divMain.form.staSecR.set_text(this.getWorldTimeSec(WorldTimeGapR));
        };

        this.dashUniversalTime_ontimer = function(obj,e)
        {
        	if (e.timerid == 0)
        	{
        		this.fnTimeGet();
        	}
        	else if (e.timerid == 2)
        	{
        		this.test();
        	}

        };
        this.test = function()
        {
        	if( this.divMain.form.staColL.text != "" ) {

        		this.divMain.form.staColL.set_text("");
        	}
        	else {
        		this.divMain.form.staColL.set_text(":");
        	}
        	if( this.divMain.form.staColR.text != "" ) {
        		this.divMain.form.staColR.set_text("");
        	}
        	else {
        		this.divMain.form.staColR.set_text(":");
        	}
        }

        this.getWorldTime = function(offSet)
        {
        	var objDate = new Date();
        	var nTime = objDate.getTime() + (objDate.getTimezoneOffset() * 60000) + (offSet * 3600000);

        	objDate.setTime(nTime);

         	var s =
         			this.fn_getDate(objDate.getHours(), 2);
        //			+ ':' +
        // 			this.fn_getDate(objDate.getMinutes(), 2);
        // 			+ ':' +
        //  			this.fn_getDate(objDate.getSeconds(), 2);
        //			this.fn_getDate(objDate.getSeconds(), 2);

         	return s;
        }
        this.getWorldTimeSec = function(offSet)
        {
        	var objDate = new Date();
        	var nTime = objDate.getTime() + (objDate.getTimezoneOffset() * 60000) + (offSet * 3600000);

        	objDate.setTime(nTime);

         	var s =
        			this.fn_getDate(objDate.getSeconds(), 2);
          	return s;
        }
        this.getWorldTimeMin = function(offSet)
        {
        	var objDate = new Date();
        	var nTime = objDate.getTime() + (objDate.getTimezoneOffset() * 60000) + (offSet * 3600000);

        	objDate.setTime(nTime);

         	var s =
        			this.fn_getDate(objDate.getMinutes(), 2);
          	return s;
        }

        this.fn_getDate = function(n, digits)
        {
          var zero = '';
          n = n.toString();

          if (n.length < digits) {
            for (i = 0; i < digits - n.length; i++)
              zero += '0';
          }
          return zero + n;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dashUniversalTime_onload,this);
            this.addEventHandler("ontimer",this.dashUniversalTime_ontimer,this);
            this.divTop.form.btnRefresh.addEventHandler("onclick",this.divTop_btnRefresh_onclick,this);
            this.divMain.form.cboCountry.addEventHandler("onitemchanged",this.divMain_cboCountry_onitemchanged,this);
            this.divMain.form.cboCountry2.addEventHandler("onitemchanged",this.divMain_cboCountry2_onitemchanged,this);
        };
        this.loadIncludeScript("dbcUniversalTime.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
