(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dashWeather");
            this.set_titletext("날씨");
            if (Form == this.constructor)
            {
                this._setFormPosition(354,113);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"LATITUDE\" type=\"STRING\" size=\"256\"/><Column id=\"LONGITUDE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLocation", this);
            obj._setContents("<ColumnInfo><Column id=\"LOCATION_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"STEP_1\" type=\"STRING\" size=\"255\"/><Column id=\"STEP_2\" type=\"STRING\" size=\"255\"/><Column id=\"STEP_3\" type=\"STRING\" size=\"255\"/><Column id=\"N_X\" type=\"STRING\" size=\"255\"/><Column id=\"N_Y\" type=\"STRING\" size=\"255\"/><Column id=\"ARDD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsToday", this);
            obj._setContents("<ColumnInfo><Column id=\"baseDate\" type=\"STRING\" size=\"255\"/><Column id=\"baseTime\" type=\"STRING\" size=\"255\"/><Column id=\"category\" type=\"STRING\" size=\"255\"/><Column id=\"nx\" type=\"STRING\" size=\"255\"/><Column id=\"ny\" type=\"STRING\" size=\"255\"/><Column id=\"obsrValue\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodayMax", this);
            obj._setContents("<ColumnInfo><Column id=\"baseDate\" type=\"STRING\" size=\"255\"/><Column id=\"baseTime\" type=\"STRING\" size=\"255\"/><Column id=\"category\" type=\"STRING\" size=\"255\"/><Column id=\"fcstDate\" type=\"STRING\" size=\"255\"/><Column id=\"fcstTime\" type=\"STRING\" size=\"255\"/><Column id=\"fcstValue\" type=\"STRING\" size=\"255\"/><Column id=\"nx\" type=\"STRING\" size=\"255\"/><Column id=\"ny\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTomorrow", this);
            obj._setContents("<ColumnInfo><Column id=\"baseDate\" type=\"STRING\" size=\"255\"/><Column id=\"baseTime\" type=\"STRING\" size=\"255\"/><Column id=\"category\" type=\"STRING\" size=\"255\"/><Column id=\"fcstDate\" type=\"STRING\" size=\"255\"/><Column id=\"fcstTime\" type=\"STRING\" size=\"255\"/><Column id=\"fcstValue\" type=\"STRING\" size=\"255\"/><Column id=\"nx\" type=\"STRING\" size=\"255\"/><Column id=\"ny\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divToday","0","20","50%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_DashboardBot");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","15",null,null,"15",null,null,null,null,this.divToday.form);
            obj.set_taborder("3");
            obj.set_text("오\r\n늘");
            obj.set_cssclass("sta_MF_WeatherText01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divToday.addChild(obj.name, obj);

            obj = new Static("staTemperature",null,"0","80",null,"0","15",null,null,null,null,this.divToday.form);
            obj.set_taborder("1");
            obj.set_text("<fs v=\'12\'><fc v=\'#333333\'>℃ </fc></fs>");
            obj.set_cssclass("sta_MF_WeatherText02");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_usedecorate("true");
            this.divToday.addChild(obj.name, obj);

            obj = new Static("staWeatherIcon","20","0",null,null,"80","15",null,null,null,null,this.divToday.form);
            obj.set_taborder("0");
            obj.set_background("url(\"theme://images/img_MF_Weather01.png\") no-repeat center center");
            obj.set_text("");
            this.divToday.addChild(obj.name, obj);

            obj = new Static("staMaxTemp",null,null,"80","15","0","0",null,null,null,null,this.divToday.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MF_WeatherText03");
            obj.set_usedecorate("true");
            obj.set_text("<fc v=\'blue\'>℃</fc> / <fc v=\'red\'>℃</fc>");
            this.divToday.addChild(obj.name, obj);

            obj = new Static("staWeatherText","20",null,null,"15","80","0",null,null,null,null,this.divToday.form);
            obj.set_taborder("2");
            obj.set_text("맑음");
            obj.set_cssclass("sta_MF_WeatherText03");
            this.divToday.addChild(obj.name, obj);

            obj = new Static("stInfo","0","0",null,"20","70",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stUnit",null,"0","70","20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Unit");
            obj.set_text("출처 : 기상청");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","divToday:1","20","1",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("darkgray");
            this.addChild(obj.name, obj);

            obj = new Div("divTomorrow","divToday:0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_MF_DashboardBot");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","0","15",null,null,"15",null,null,null,null,this.divTomorrow.form);
            obj.set_taborder("0");
            obj.set_text("내\r\n일");
            obj.set_cssclass("sta_MF_WeatherText01");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divTomorrow.addChild(obj.name, obj);

            obj = new Static("staTemperature",null,"0","70",null,"0","15",null,null,null,null,this.divTomorrow.form);
            obj.set_taborder("2");
            obj.set_text("<fs v=\'12\'><fc v=\'#333333\'>℃ </fc></fs>");
            obj.set_cssclass("sta_MF_WeatherText02");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divTomorrow.addChild(obj.name, obj);

            obj = new Static("staWeatherIcon","20","0",null,null,"70","15",null,null,null,null,this.divTomorrow.form);
            obj.set_taborder("1");
            obj.set_background("url(\"theme://images/img_MF_Weather01.png\") no-repeat center center");
            this.divTomorrow.addChild(obj.name, obj);

            obj = new Static("staMaxTemp",null,null,"80","15","0","0",null,null,null,null,this.divTomorrow.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\'blue\'>℃</fc> / <fc v=\'red\'>℃</fc>");
            obj.set_cssclass("sta_MF_WeatherText03");
            obj.set_usedecorate("true");
            this.divTomorrow.addChild(obj.name, obj);

            obj = new Static("staWeatherText","20",null,null,"15","70","0",null,null,null,null,this.divTomorrow.form);
            obj.set_taborder("3");
            obj.set_text("맑음");
            obj.set_cssclass("sta_MF_WeatherText03");
            this.divTomorrow.addChild(obj.name, obj);

            obj = new Static("staTemperatureTemplate",null,"120","30",null,"299","-46",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("<fs v=\'12\'><fc v=\'#333333\'>℃ </fc></fs>");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMinTempTemplate",null,null,"40","15","254","-25",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MF_WeatherText03");
            obj.set_usedecorate("true");
            obj.set_text("<fc v=\'blue\'>℃</fc>");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMaxTemplate",null,null,"40","15","254","-42",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_MF_WeatherText03");
            obj.set_usedecorate("true");
            obj.set_text("<fc v=\'red\'>℃</fc>");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divToday.form
            obj = new Layout("default","",0,0,this.divToday.form,function(p){});
            this.divToday.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTomorrow.form
            obj = new Layout("default","",0,0,this.divTomorrow.form,function(p){});
            this.divTomorrow.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",354,113,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcWeather.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    dash > dashWeather
        *  @FileName    dashWeather.xfdl
        *  @Creator
        *  @CreateDate  2018.05.18
        *  @Version     1.0
        *  @Desction
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2018.05.18      이동건             최초 생성
        *  2020.09.22      김대승             날씨 api 스펙 변경으로 서비스 변경 및 로직 수정
        *  2021.01.29      정해원             최적화
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_nReload = 0;       //재 조회 주기
        this.fvTodayYmd = "";
        this.fvTomorrowYmd = "";
        this.fvTodayHH = "";

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload)
         ********************************************************/
        /**
        * dashWeather_onload : 최초 로드시 발생되는 이벤트 (필수)
        */
        this.dashWeather_onload = function(obj, e)
        {
            var bTran;

            bTran = this.parent.btran;

            if (bTran) this.fnInit();
        };

        this.dashWeather_ontimer = function(obj,e)
        {
        	if (e.timerid == 9999) {
                this.killTimer(9999);
                this.fnSearch();
            }
        };

        //리사이즈 처리
        this.dashWeather_onsize = function(obj,e)
        {
        	this.resetScroll();
        };

        /*********************************************************
         * 2 각 COMPONENT 별 EVENT 영역
         ********************************************************/


        /*********************************************************
         * 3 Dashboard 필수 FUNCTION 영역 (fnSearch)
         ********************************************************/

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        this.fnSetCoordinates = function(sLatitude, sLongitude){
        	this.dsSearch.clearData();
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "LATITUDE" , sLatitude);
        	this.dsSearch.setColumn(nRow, "LONGITUDE", sLongitude);
        };

        this.fnSetStaInfo = function(){
        	if(this.dsLocation.rowcount == 0){
        		return;
        	}

        	var sAddr = take.nvl(this.dsLocation.getColumn(0, "ARDD"), "");
        	var sFirstTime = take.nvl(this.dsToday.getColumn(0, "baseTime"), "");
        	if(!take.isEmpty(sFirstTime)){
        		sFirstTime = sFirstTime.substring(0,2) + "시 기준";
        	}

        	if(!take.isEmpty(sAddr)){
        		var sStep1 = take.nvl(this.dsLocation.getColumn(0, "STEP_1"), "");
        		var sStep2 = take.nvl(this.dsLocation.getColumn(0, "STEP_2"), "");
        		var sStep3 = take.nvl(this.dsLocation.getColumn(0, "STEP_3"), "");
        		sAddr = sStep1 + " " + sStep2 + " " + sStep3;
        	}

        	this.stInfo.set_text(sAddr + " (금일 " + sFirstTime + ")");
        };

        // 초기화
        this.fnInit = function() {
            var sLocation 	= take.nvl(_application.av_sLocation, "");
        	var pThis		= this;

        	// 로케이션 정보를 이미 가지고 있다면 새로 받지 않음.
        	if(!take.isEmpty(sLocation)){
        		this.fnSetCoordinates(sLocation.split(",")[0], sLocation.split(",")[1]);
        		this.fnSearch();
        	} else {
        		//navigator를 지원하지 않음
        		if (typeof(navigator) != "object" || typeof(navigator.geolocation) != "object") {
        			this.fnSetCoordinates("", "");
        			this.fnSearch();
        		}else{
        			if(take.isFunction(navigator.geolocation.getCurrentPosition)){
        				navigator.geolocation.getCurrentPosition(
        					function(position) {
        						_application.av_sLocation = position.coords.latitude+","+position.coords.longitude;
        						pThis.fnSetCoordinates(position.coords.latitude, position.coords.longitude);
        						pThis.fnSearch();
        					},
        					function(error) {
        						take.debug(_application, "현재 위치 값을 가져오지 못했습니다. \n브라우저 설정을 확인 해주세요. (error.code ->   "+error.code+")");
        						this.fnSetCoordinates("", "");
        						pThis.fnSearch();
        					}
        				);
        			}
        		}
        	}

        	//오늘/내일 날짜 계산
        	var today = take.getDbTime();
        	this.fvTodayYmd = today.date;
        	this.fvTodayHH = ((parseInt(parseInt(today.hh)/3) * 3) + "00").lpad(4, "0");
        	var tomorrow = take.getConvertDate(today.date);
        	tomorrow.addDate(1);
        	this.fvTomorrowYmd = take.toDateString(tomorrow, "yyyyMMdd");
        };

        // 로케이션 정보, 날씨api 조회
        this.fnSearch = function()
        {
        	this.dsLocation.clearData();
        	this.dsToday.clearData();
        	this.dsTomorrow.clearData();
        	this.dsTodayMax.clearData();

        	take.setUseWaitCursor(false);

        	// 로케이션, 초단기실황(내일예보), 오늘동네예보, 초단기실황(오늘예보)
        	take.transaction
        	(
        		this,
        		"locationInfo",
        		"SVC_LOC::dash/getWeather.do",
        		"dsSearch=dsSearch",
        		"dsLocation=dsLocation dsToday=dsToday dsTomorrow=dsTomorrow dsTodayMax=dsTodayMax",
        		"",
        		function (sId, nErr, sMsg) {
        			//기준시간 표시
        			this.fnSetStaInfo();

        			//오늘날씨 표시
        			this.fnSetToday();

        			//내일날씨 표시
        			this.fnSetTomorrow();

        			var nReloadn = parseInt(take.nvl(this.parent.reloadtime,"0"));
        			if (nReloadn > 0) {
                        nReloadn = nReloadn * 1000;
                        this.setTimer(9999, nReloadn);
                    }

        			take.setUseWaitCursor(true);
        		}
        	);
        };

        //내일날씨 표시
        this.fnSetTomorrow = function(){
        	if(this.dsTomorrow.getRowCount() > 0){
        		this.fnSetTomorrowTemperature();
        		this.fnSetTomorrowMinMax();
        		this.fnSetTomorrowWeatherIcon();
        	}
        };

        //현재기온 표시 "category" : "T3H"
        this.fnSetTomorrowTemperature = function(){
        	var fcstDate = this.fvTomorrowYmd;
        	var fcstTime = this.fvTodayHH;
        	var nRow = this.dsTomorrow.findRowExpr("fcstDate=='" + fcstDate + "' && fcstTime=='" + fcstTime + "' && category=='T3H'");
        	var T3H = this.dsTomorrow.getColumn(nRow, "fcstValue");
        	this.divTomorrow.form.staTemperature.set_text(T3H + this.staTemperatureTemplate.text);
        };

        //최저/최대기온 표시
        this.fnSetTomorrowMinMax = function(){
        	var fcstDate = this.fvTomorrowYmd;
        	var fcstTime = this.fvTodayHH;
        	var nRow = this.dsTomorrow.findRowExpr("fcstDate=='" + fcstDate + "' && category=='TMN'");
        	var TMN = this.dsTomorrow.getColumn(nRow, "fcstValue");	//최저

        		nRow = this.dsTomorrow.findRowExpr("fcstDate=='" + fcstDate + "' && category=='TMX'");
        	var TMX = this.dsTomorrow.getColumn(nRow, "fcstValue");	//최고

        	this.divTomorrow.form.staMaxTemp.set_text(TMN + this.staMinTempTemplate.text + " / " + TMX + this.staMaxTemplate.text);
        };

        //내일 날씨아이콘 세팅
        this.fnSetTomorrowWeatherIcon = function(){
        	var fcstDate = this.fvTomorrowYmd;
        	var fcstTime = this.fvTodayHH;
        	var nRow = this.dsTomorrow.findRowExpr("fcstDate=='" + fcstDate + "' && fcstTime=='" + fcstTime + "' && category=='PTY'");
        	var pty = this.dsTomorrow.getColumn(nRow, "fcstValue");
        	var sSky = "";

        	if(pty == "0"){
        		//비가 오지 않을경우 하늘 상태를 내일 예보 데이터중 금일 데이터를 가져온다.
        		//예보에서 오늘 하늘 상태 가져오기

        		nRow = this.dsTomorrow.findRowExpr( "category=='SKY' && fcstDate=='" + fcstDate + "' && fcstTime=='" + fcstTime + "'");
        		sSky = this.dsTomorrow.getColumn(nRow, 'fcstValue');

        		this.divTomorrow.form.staWeatherIcon.set_background('url("theme://images/img_MF_Weather0' + sSky +'.png") no-repeat center center');

        		if (sSky=="1") 		sSky = "맑음";
        		else if (sSky=="2") sSky = "구름조금";
        		else if (sSky=="3") sSky = "구름많음";
        		else if (sSky=="4") sSky = "흐림";

        		this.divTomorrow.form.staWeatherText.set_text(sSky);

        	}else{
        		//비,눈 올 경우 강수량 가져오기
        		var r06s06 = 0;
        		if (pty == "1") {
        			//비
        			sSky = "비";
        			this.divTomorrow.form.staCloudNextDay.set_background('url("theme://images/img_MF_Weather05.png") no-repeat center center');

        			//강수량 가져오기
        			nRow = this.dsTomorrow.findRowExpr("category=='R06' && fcstDate=='" + sTomorrow + "' && fcstTime=='" + fcstTime + "'");
        			r06s06 = this.dsTomorrow.getColumn(nFRow, "fcstValue");

        			//강수량이 100일 경우 70mm이상으로 세팅
        			if (r06s06 == "100") r06s06 = "70mm 이상";
        			else r06s06 += "mm 미만";

        		} else if (pty == "2") {
        			//비,눈
        			sSky = "비/눈";
        			this.divTomorrow.form.staCloudNextDay.set_background('url("theme://images/img_MF_Weather09.png") no-repeat center center');

        			//적설량 가져오기
        			nRow = this.dsTomorrow.findRowExpr("category=='S06' && fcstDate=='" + sTomorrow + "' && fcstTime=='" + fcstTime + "'");
        			r06s06 = this.dsTomorrow.getColumn(nFRow, "fcstValue");

        			//적설량이 100일 경우 20cm이상으로 세팅
        			if (r06s06 == "100") r06s06 = "20cm 이상";
        			else r06s06 += "cm 미만";

        		} else if (pty == "3") {
        			//눈
        			sSky = "비/눈";
        			this.divTomorrow.form.staCloudNextDay.set_background('url("theme://images/img_MF_Weather06.png") no-repeat center center');

        			//적설량 가져오기
        			nRow = this.dsTomorrow.findRowExpr("category=='S06' && fcstDate=='" + sTomorrow + "' && fcstTime=='" + fcstTime + "'");
        			r06s06 = this.dsTomorrow.getColumn(nFRow, "fcstValue");

        			//적설량이 100일 경우 20cm이상으로 세팅
        			if (r06s06 == "100") r06s06 = "20cm 이상";
        			else r06s06 += "cm 미만";
        		}

        		this.divTomorrow.form.staWeatherText.set_text(sSky + "(" + r06s06 + ")");
        	}
        };

        //오늘날씨 표시
        this.fnSetToday = function(){
        	if(this.dsToday.getRowCount() > 0){
        		this.fnSetTodayTemperature();
        		this.fnSetTodayWeatherIcon();
        		this.fnSetTodayMinMax();
        	}
        };

        //현재기온 표시 "category" : "T1H"
        this.fnSetTodayTemperature = function(objDiv, objWeather){
        	var t1h = this.dsToday.lookup("category", "T1H", "obsrValue");
        	this.divToday.form.staTemperature.set_text(t1h + this.staTemperatureTemplate.text);
        };

        //최저/최대기온 표시
        this.fnSetTodayMinMax = function(){
        	var nRow  = this.dsTodayMax.findRowExpr("fcstDate=='" + this.fvTodayYmd + "' && category=='TMN'");
        	var TMN = this.dsTodayMax.getColumn(nRow, "fcstValue"); //최저
        		nRow  = this.dsTodayMax.findRowExpr("fcstDate=='" + this.fvTodayYmd + "' && category=='TMX'");
        	var TMX = this.dsTodayMax.getColumn(nRow, "fcstValue"); //최고

        	this.divToday.form.staMaxTemp.set_text(TMN + this.staMinTempTemplate.text + " / " + TMX + this.staMaxTemplate.text);
        };

        //오늘 날씨아이콘 세팅
        this.fnSetTodayWeatherIcon = function(){
        	//강수형태(PTY) 코드 : 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4), 빗방울(5), 빗방울/눈날림(6), 눈날림(7)
        	var pty = this.dsToday.lookup("category", "PTY", "obsrValue");
        	var sSky = "";

        	if(pty == "0"){
        		//비가 오지 않을경우 하늘 상태를 내일 예보 데이터중 금일 데이터를 가져온다.
        		//예보에서 오늘 하늘 상태 가져오기
        		var nRow = this.dsTomorrow.findRowExpr("fcstDate=='" + this.fvTodayYmd + "' && category=='SKY'");
        		if (nRow != -1) {
        			sSky = this.dsTomorrow.getColumn(nRow, "fcstValue");
        			this.divToday.form.staWeatherIcon.set_background('url("theme://images/img_MF_Weather0' + sSky +'.png") no-repeat center center');

        			if (sSky=="1") 		sSky = "맑음";
                    else if (sSky=="2") sSky = "구름조금";
                    else if (sSky=="3") sSky = "구름많음";
                    else if (sSky=="4") sSky = "흐림";

        			this.divToday.form.staWeatherText.set_text(sSky);
        		}
        	}else{
        		//비,눈 올 경우 강수량 가져오기
        		if (pty == "1") {
        			sSky = "비";
        			this.divToday.form.staWeatherIcon.set_background('url("theme://images/img_MF_Weather05.png") no-repeat center center');
        		} else if (pty == "2") {
        			sSky = "비/눈";
        			this.divToday.form.staWeatherIcon.set_background('url("theme://images/img_MF_Weather09.png") no-repeat center center');
        		} else if (pty == "3") {
        			sSky = "눈";
        			this.divToday.form.staWeatherIcon.set_background('url("theme://images/img_MF_Weather06.png") no-repeat center center');
        		}

        		var rn1 = this.dsToday.lookup("category", "RN1", "obsrValue");
        		this.divToday.form.staWeatherText.set_text(sSky + "(" + rn1 + "mm)");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dashWeather_onload,this);
            this.addEventHandler("onsize",this.dashWeather_onsize,this);
            this.addEventHandler("ontimer",this.dashWeather_ontimer,this);
        };
        this.loadIncludeScript("dbcWeather.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
