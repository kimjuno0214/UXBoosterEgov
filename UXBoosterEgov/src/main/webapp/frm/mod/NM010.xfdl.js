(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NM010");
            this.set_titletext("일정관리 Main");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN5\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN6\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN5\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN6\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLUMN2\">일정타이틀</Col><Col id=\"COLUMN0\">12:00</Col></Row><Row><Col id=\"COLUMN0\">13:00</Col></Row><Row><Col id=\"COLUMN0\">14:00</Col></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"2","46","23","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"2","70","23","59",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("일정추가");
            obj.set_cssclass("btn_WF_plus01");
            this.addChild(obj.name, obj);

            obj = new Button("btnMonthly","10","1","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("월간일정");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("btnWeekly","btnMonthly:0","1","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주간일정");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Div("divDisplay","10","27",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_url("frm::mod/NM010T01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","1600","3","3","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDisplay
            obj = new Layout("default","",0,0,this.divDisplay.form,function(p){});
            this.divDisplay.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::mod/NM010T01.xfdl");
        };
        
        // User Script
        this.registerScript("NM010.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.09.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.09.17      이동건             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){
        	//검색조건
        	var objDivSearch = this.divSearch.form;
        }
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Transation id";
        	this.divDisplay.form.fnInit();
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.btnMonthly_onclick = function(obj,e)
        {
        	this.btnMonthly.set_cssclass("btn_WF_tab02");
        	this.btnWeekly.set_cssclass("btn_WF_tab01");
        	this.divDisplay.set_url("frm::mod/NM010T01.xfdl");
        };

        this.btnWeekly_onclick = function(obj,e)
        {
        	this.btnMonthly.set_cssclass("btn_WF_tab01");
        	this.btnWeekly.set_cssclass("btn_WF_tab02");
        	this.divDisplay.set_url("frm::mod/NM010T02.xfdl");
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	take.openPopup(this, "addPopUp", "frm::mod/NM010P01.xfdl", "", "", "fnPopCallback", false);
        };

        this.btnList_onclick = function(obj,e)
        {
        	take.openPopup(this, "addPopUp", "frm::mod/NM010P03.xfdl", "", "", "fnPopCallback", false);
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }
        this.fnPopCallback = function (sId)
        {
        	this.divDisplay.form.reload();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnList.addEventHandler("onclick",this.btnList_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnMonthly.addEventHandler("onclick",this.btnMonthly_onclick,this);
            this.btnWeekly.addEventHandler("onclick",this.btnWeekly_onclick,this);
        };
        this.loadIncludeScript("NM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
