(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleRole");
            this.set_titletext("(샘플)권한체크");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
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

            obj = new Static("Static24_00","10","0",null,"10","-10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","15",null,"625","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_01_00_00","116","378",null,"175","2",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserIdT00","0","30","120","175",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("로그인사용자\r\n권한코드조회");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static33_01","118","30",null,"175","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRoleCd","263","35","70","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRoleCd","126","35","135","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("Sample.userSelect");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("권한조회");
            obj.set_cssclass("sta_WF_title02");
            this.divSearch.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","126","71","734","113",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("take.getUser(\"ROLE_CD\")");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static33_01_00","117","204",null,"175","1",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserIdT00_00","0","204","120","175",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("현재화면의\r\n공통버튼\r\n권한조회");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","120","35","6",null,null,"-13",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnInput","202","215","70","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("생성버튼");
            obj.set_cssclass("btn_WF_basic01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnRead","126","215","70","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("조회버튼");
            obj.set_cssclass("btn_WF_basic01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSave","276","215","70","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("저장버튼");
            obj.set_cssclass("btn_WF_basic01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelete","352","215","70","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("삭제버튼");
            obj.set_cssclass("btn_WF_basic01");
            this.divSearch.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","125","245","734","113",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_value("조회 take.getActiveForm(this).dsBtnRole.getColumn(0, \"R_READ\")\n생성 take.getActiveForm(this).dsBtnRole.getColumn(0, \"R_INPUT\")\n저장 take.getActiveForm(this).dsBtnRole.getColumn(0, \"R_SAVE\")\n삭제 take.getActiveForm(this).dsBtnRole.getColumn(0, \"R_DELETE\")");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divComBtn","140","410","484","43",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_url("frm::com/comBtn.xfdl");
            obj.set_border("1px solid");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserIdT00_00_00","0","378","120","175",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("공통버튼\r\ndiv");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divComBtn
            obj = new Layout("default","",0,0,this.divSearch.form.divComBtn.form,function(p){});
            this.divSearch.form.divComBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comBtn.xfdl");
        };
        
        // User Script
        this.registerScript("sampleRole.xfdl", function() {
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

        this.divSearch_btnRoleCd_onclick = function(obj,e)
        {
        	var sRoleCd = take.getUser("ROLE_CD");
        	this.divSearch.form.edtRoleCd.set_value(sRoleCd);
        };



        this.divSearch_btnInput_onclick = function(obj,e)
        {
        	this.alert(take.getActiveForm(this).dsBtnRole.getColumn(0, "R_INPUT"));
        };

        this.divSearch_btnRead_onclick = function(obj,e)
        {
        	this.alert(take.getActiveForm(this).dsBtnRole.getColumn(0, "R_READ"));
        };

        this.divSearch_btnSave_onclick = function(obj,e)
        {
        	this.alert(take.getActiveForm(this).dsBtnRole.getColumn(0, "R_SAVE"));
        };

        this.divSearch_btnDelete_onclick = function(obj,e)
        {
        	this.alert(take.getActiveForm(this).dsBtnRole.getColumn(0, "R_DELETE"));
        };

        this.fnSearch = function(){
        	this.alert("fnSearch호출!!");
        };

        this.fnAddRow = function(){
        	this.alert("fnAddRow호출!!");
        };

        this.fnSave = function(){
        	this.alert("fnSave호출!!");
        };

        this.fnDelRow = function(){
        	this.alert("fnDelRow호출!!");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnRoleCd.addEventHandler("onclick",this.divSearch_btnRoleCd_onclick,this);
            this.divSearch.form.btnInput.addEventHandler("onclick",this.divSearch_btnInput_onclick,this);
            this.divSearch.form.btnRead.addEventHandler("onclick",this.divSearch_btnRead_onclick,this);
            this.divSearch.form.btnSave.addEventHandler("onclick",this.divSearch_btnSave_onclick,this);
            this.divSearch.form.btnDelete.addEventHandler("onclick",this.divSearch_btnDelete_onclick,this);
        };
        this.loadIncludeScript("sampleRole.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
