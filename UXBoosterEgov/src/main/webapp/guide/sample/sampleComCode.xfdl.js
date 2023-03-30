(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleComCode");
            this.set_titletext("(샘플)코드검색+팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataUserCode", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataDeptInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CODE\">D0004</Col><Col id=\"DEPT_NAME\">사업부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEdit", this);
            obj._setContents("<ColumnInfo><Column id=\"COLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"COLDATA\" type=\"STRING\" size=\"256\"/><Column id=\"COLNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","0","10",null,null,"141",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","141",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","10","0",null,"10","-10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","245",null,"215","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_01","118","35",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33_00","119","93",null,"117","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserIdT","0","63","120","147",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("코드+명 바인딩\r\n(상세화면용)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","119","63",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","120","30","6",null,null,"-8",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divCode","126","68","231","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("frm::com/comUserCode.xfdl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnInit","362","68","70","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtNamespace","126","40","475","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_value("Sample.deptSelect");
            obj.set_text("Sample.deptSelect");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","126","126",null,"51","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsDataDeptInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"DEPT_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserIdT00","0","35","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("검색쿼리");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("상세항목용 동적팝업생성");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSearch","10","15",null,"205","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staUserIdT00","0","30","120","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("검색쿼리");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static33_01","118","30",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static33_00","119","88",null,"117","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserIdT","0","58","120","147",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("코드만 바인딩\r\n(검색조건용)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static33","119","58",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","120","35","6",null,null,"-13",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCode","126","63","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("frm::com/comUserCode.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnInit","362","63","70","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNamespace","126","35","475","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("Sample.userSelect");
            obj.set_text("Sample.userSelect");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("Grid00","126","121",null,"51","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsDataUserCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"USER_CODE\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CODE\"/></Band></Format></Formats>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("검색조건용 동적팝업생성");
            obj.set_cssclass("sta_WF_title02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divDetailCustom","10","475",null,"265","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_01","118","35",null,"31","0",null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Static("Static33_00","119","124",null,"117","0",null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Static("staUserIdT","0","94","120","147",null,null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("0");
            obj.set_text("코드+명 바인딩\r\n(상세화면용)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Static("Static33","119","94",null,"31","0",null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Div("divCode","126","99","231","21",null,null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_url("frm::com/comUserCode.xfdl");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Button("btnInit","362","99","70","21",null,null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("5");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Edit("edtNamespace","126","40","475","21",null,null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("6");
            obj.set_value("Sample.deptSelect");
            obj.set_text("Sample.deptSelect");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Grid("Grid00","126","159",null,"51","0",null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsDataDeptInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEPT_CODE\"/><Cell col=\"1\" text=\"DEPT_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Static("staUserIdT00","0","35","120","31",null,null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("8");
            obj.set_text("검색쿼리");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Static("staUserIdT00_00","0","65","120","31",null,null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("10");
            obj.set_text("임의팝업");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Static("Static33_01_00","119","65",null,"31","0",null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Static("Static01","120","10","6",null,null,"12",null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("1");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Edit("edtPopup","125","70","475","21",null,null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("12");
            obj.set_value("guide::sample/sampleComCodePop.xfdl");
            obj.set_text("guide::sample/sampleComCodePop.xfdl");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","0",null,null,null,null,null,this.divDetailCustom.form);
            obj.set_taborder("13");
            obj.set_text("상세항목용 임의팝업 연동");
            obj.set_cssclass("sta_WF_title02");
            this.divDetailCustom.addChild(obj.name, obj);

            obj = new Div("divCodePopup","10","735",null,"219","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00","119","44",null,"117","0",null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Static("staUserIdT00_00","0","15","120","31",null,null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("6");
            obj.set_text("임의컴퍼넌트");
            obj.set_cssclass("sta_WF_th01Limport");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Static("Static33_01_00","119","15",null,"31","0",null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Static("Static18","0","-10",null,"30","0",null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("0");
            obj.set_text("공통컴퍼넌트");
            obj.set_cssclass("sta_WF_title02");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Edit("edtTypeCd","126","21","100","21",null,null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Button("btnCodeFind","201","22","24","19",null,null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("3");
            obj.set_text("ㅇ");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Edit("edtTypeNm","229","21","120","21",null,null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Static("Static00","354","20","240","23",null,null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("4");
            obj.set_text("taborder 주의!!!!");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Grid("grdPopUp","126","57","475","91",null,null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_wheelscrollrow("1");
            obj.set_binddataset("dsEdit");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"129\"/><Column size=\"80\"/><Column size=\"122\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"값\"/><Cell col=\"2\" text=\"컬럼\"/></Band><Band id=\"body\"><Cell text=\"bind:COLCODE\" edittype=\"text\" editautoselect=\"true\" expandshow=\"show\" expandsize=\"30\"/><Cell col=\"1\" text=\"bind:COLDATA\"/><Cell col=\"2\" text=\"bind:COLNEXT\" edittype=\"text\"/></Band></Format></Formats>");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Static("Static01","120","10","6",null,null,"-74",null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Static("staUserIdT","0","44","120","117",null,null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("9");
            obj.set_text("그리드");
            obj.set_cssclass("sta_WF_th01Limport");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);

            obj = new Static("Static02","197","28","366","75",null,null,null,null,null,null,this.divCodePopup.form);
            obj.set_taborder("11");
            obj.set_text("버그많음");
            obj.set_font("normal 25pt/normal \"Arial\"");
            obj.set_background("#80d16a");
            obj.set_visible("false");
            this.divCodePopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form.divCode
            obj = new Layout("default","",0,0,this.divDetail.form.divCode.form,function(p){});
            this.divDetail.form.divCode.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form.divCode
            obj = new Layout("default","",0,0,this.divSearch.form.divCode.form,function(p){});
            this.divSearch.form.divCode.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetailCustom.form.divCode
            obj = new Layout("default","",0,0,this.divDetailCustom.form.divCode.form,function(p){});
            this.divDetailCustom.form.divCode.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetailCustom.form
            obj = new Layout("default","",0,0,this.divDetailCustom.form,function(p){});
            this.divDetailCustom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCodePopup.form
            obj = new Layout("default","",0,0,this.divCodePopup.form,function(p){});
            this.divCodePopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,970,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("코드검색");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comUserCode.xfdl");
        };
        
        // User Script
        this.registerScript("sampleComCode.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.form_onload = function(obj,e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        	}
        };

        this.divSearch_btnInit_onclick = function(obj,e)
        {
        	this.divSearch.form.divCode.form.fnInitSearchComponent(this, this.dsDataUserCode, "USER_CODE");
        	this.divSearch.form.divCode.form.fnSetNamespace(this.divSearch.form.edtNamespace.value);
        	this.divSearch.form.divCode.form.fnSetSearchTitle("사용자 코드/명");
        	this.divSearch.form.divCode.form.fnSetGridOption(
        		[
        			  {gridHeader:"사용자코드"		, gridColumn:"CODE"			, cellWidth:20	, cellAlign:"center"}
        			, {gridHeader:"사용자명"		, gridColumn:"NAME"			, cellWidth:50	, cellAlign:"left"}
        			, {gridHeader:"사용자ID"		, gridColumn:"USER_ID"		, cellWidth:20	, cellAlign:"left"}
        		]
        	);
        };


        this.divDetail_btnInit_onclick = function(obj,e)
        {
        	this.divDetail.form.divCode.form.fnInitComponent(this, this.dsDataDeptInfo, "DEPT_CODE", "DEPT_NAME", false);
        	this.divDetail.form.divCode.form.fnSetNamespace(this.divDetail.form.edtNamespace.value);
        	this.divDetail.form.divCode.form.fnSetSearchTitle("부서정보");
        	this.divDetail.form.divCode.form.fnSetGridOption(
        		[
        			  {gridHeader:"부서코드"		, gridColumn:"CODE"			, cellWidth:20	, cellAlign:"center"}
        			, {gridHeader:"부서명"			, gridColumn:"NAME"			, cellWidth:50	, cellAlign:"left"}
        			, {gridHeader:"상위부서"		, gridColumn:"PARENT_DEPT"	, cellWidth:20	, cellAlign:"center"}
        			, {gridHeader:"정렬순서"		, gridColumn:"DEPT_ORDER"	, cellWidth:20	, cellAlign:"center"}
        		]
        	);
        };

        this.divDetailCustom_btnInit_onclick = function(obj,e)
        {
        	this.divDetailCustom.form.divCode.form.fnInitComponent(this, this.dsDataDeptInfo, "DEPT_CODE", "DEPT_NAME");
        	this.divDetailCustom.form.divCode.form.fnSetNamespace(this.divDetailCustom.form.edtNamespace.value);
        	this.divDetailCustom.form.divCode.form.fnSetSearchTitle("부서정보 코드/명");
        	this.divDetailCustom.form.divCode.form.fnSetSearchPopUrl(this.divDetailCustom.form.edtPopup.value);
        };

        this.divCodePopup_edtTypeCd_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
                this.fnPopupOpen();

            } else if (e.keycode==8) {
                if (take.nvl(this.divCodePopup.form.edtTypeNm.value, "")!="")
                {
                    this.divCodePopup.form.edtTypeCd.set_value("");
                    this.divCodePopup.form.edtTypeNm.set_value("");
                }
            }
        };

        this.divCodePopup_edtTypeCd_onkeyup = function(obj,e)
        {
        	this.divCodePopup.form.edtTypeNm.set_value("");
        };

        this.divCodePopup_edtTypeNm_onchanged = function(obj,e)
        {
        	if (take.nvl(obj.vale, "")!="")
            {
                this.parent.parent.getNextComponent(this.parent).setFocus();
            }
        };

        this.divCodePopup_btnCodeFind_onclick = function(obj,e)
        {
        	this.fnPopupOpen();
        };

        this.fnPopupOpen = function(){
        	var sTitle  = "사용자 선택";
            var sSearchTxt = "";

            take.dataSelPopUp(
                this,
                "PopUp",
                sTitle,
                sSearchTxt,
                "",
                "HumanResourceManagement.userList",
                "",
                "PROJECT_CD=" + nexacro.getApplication().av_sProjectCd,
                [["USER_CD", "ID", "40"],["USER_NM", "사용자명", "40"]],
                false,
                function(sId, sRtn) {
                    if (take.nvl(sRtn, "")!="")
                    {
                        var nIdx = sRtn.indexOf(",");
                        this.divCodePopup.form.edtTypeCd.set_value(sRtn.substr(0, nIdx));
                        this.divCodePopup.form.edtTypeNm.set_value(sRtn.substr(nIdx+1));

                    } else {
                        this.divCodePopup.form.edtTypeCd.set_value("");
                        this.divCodePopup.form.edtTypeNm.set_value("");
                    }
                }
            );
        };

        this.divCodePopup_grdPopUp_onexpandup = function(obj,e)
        {
            if (take.getBindColName(obj, e.cell)=="COLCODE")
            {
                this.fnPopupOpenGrid();
            }

        };

        this.divCodePopup_grdPopUp_onkeydown = function(obj,e)
        {
            var objDs;
            var nRow;

            if (e.keycode==13)
            {
                if (take.getBindColName(obj, obj.getCellPos())=="COLCODE")
                {
                    this.fnPopupOpenGrid();
                }
            } else if (e.keycode==8) {

                if (take.getBindColName(obj, obj.getCellPos())=="COLCODE")
                {
                    objDs = this.dsEdit;
                    nRow = objDs.rowposition;
                    if (take.nvl(objDs.getColumn(nRow,"COLDATA"), "")!="")
                    {
                        objDs.setColumn(nRow,"COLCODE", "");
                        objDs.setColumn(nRow,"COLDATA", "");
                    }
                }
            }
        };

        this.divCodePopup_grdPopUp_onkeyup = function(obj,e)
        {

        	if (take.getBindColName(obj, obj.getCellPos())=="COLCODE")
            {
                objDs = this.dsEdit;
                nRow = objDs.rowposition;

                objDs.setColumn(nRow,"COLDATA", "");
            }
        };


        this.fnPopupOpenGrid = function(){
        	var sTitle  = "사용자 선택";
            var sSearchTxt = this.dsEdit.getColumn(this.dsEdit.rowposition, "COLCODE");

            take.dataSelPopUp(
                this,
                "PopUp",
                sTitle,
                sSearchTxt,
                "",
                "HumanResourceManagement.userList",
                "",
                "PROJECT_CD=" + nexacro.getApplication().av_sProjectCd,
                [["USER_CD", "ID", "40"],["USER_NM", "사용자명", "40"]],
                false,
                function(sId, sRtn) {
                    var objDs, objGrid;
                    var nIdx, nRow, nPos;

                    objDs = this.dsEdit;
                    objGrid = this.divCodePopup.form.grdPopUp;
                    nRow = objDs.rowposition;

                    if (take.nvl(sRtn, "")!="")
                    {
                        nIdx = sRtn.indexOf(",");

                        objDs.setColumn(nRow,"COLCODE", sRtn.substr(0, nIdx));
                        objDs.setColumn(nRow,"COLDATA", sRtn.substr(nIdx+1));

                        objGrid.moveToNextCell();
                        objGrid.moveToNextCell();

                    } else {
                        objDs.setColumn(nRow,"COLCODE", "");
                        objDs.setColumn(nRow,"COLDATA", "");
                    }
                }
            );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divDetail.form.btnInit.addEventHandler("onclick",this.divDetail_btnInit_onclick,this);
            this.divSearch.form.btnInit.addEventHandler("onclick",this.divSearch_btnInit_onclick,this);
            this.divDetailCustom.form.btnInit.addEventHandler("onclick",this.divDetailCustom_btnInit_onclick,this);
            this.divCodePopup.form.edtTypeCd.addEventHandler("onkeydown",this.divCodePopup_edtTypeCd_onkeydown,this);
            this.divCodePopup.form.edtTypeCd.addEventHandler("onkeyup",this.divCodePopup_edtTypeCd_onkeyup,this);
            this.divCodePopup.form.btnCodeFind.addEventHandler("onclick",this.divCodePopup_btnCodeFind_onclick,this);
            this.divCodePopup.form.edtTypeNm.addEventHandler("onchanged",this.divCodePopup_edtTypeNm_onchanged,this);
            this.divCodePopup.form.grdPopUp.addEventHandler("onexpandup",this.divCodePopup_grdPopUp_onexpandup,this);
            this.divCodePopup.form.grdPopUp.addEventHandler("onkeydown",this.divCodePopup_grdPopUp_onkeydown,this);
            this.divCodePopup.form.grdPopUp.addEventHandler("onkeyup",this.divCodePopup_grdPopUp_onkeyup,this);
        };
        this.loadIncludeScript("sampleComCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
