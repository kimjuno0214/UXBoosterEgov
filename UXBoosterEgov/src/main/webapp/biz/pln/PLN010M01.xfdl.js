(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PLN010M01");
            this.set_titletext("안전성조사계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOdr", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_YR\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DIV_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ODR\" type=\"STRING\" size=\"255\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"THEMA\" type=\"STRING\" size=\"255\"/><Column id=\"TOTQY\" type=\"STRING\" size=\"255\"/><Column id=\"BGNG_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRS_STTUS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdDivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_YR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DIV_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgrsSttusCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckKey", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchdul", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrSchdul", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrGds", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_PLAN_QY\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL_QY\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_QY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstDdln", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRS_STTUS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrGdsInst", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_QY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrGdsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_PLAN_QY\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL_QY\" type=\"STRING\" size=\"256\"/><Column id=\"PLAN_QY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrdYr","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staPrefixT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조사연도");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboOrdYr","110","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("2022");
            obj.set_value("2022");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","630","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCertFldCd","Static07_01:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","staCertFldCd:0","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("어린이");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrdDivCd","Static07:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("정시/수시");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboOrdDivCd","staOrdDivCd:0","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsOrdDivCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProgListTitle","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("안전성조사 차수");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSpliter00","400","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridOdr","0","26",null,null,"btnSpliter00:10","173",null,null,null,null,this.divDetail.form);
            obj.getSetter("takegrid").set("sort");
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOdr");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"년도\" cssclass=\"cellImport\"/><Cell col=\"1\" text=\"정기/수시\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"차수\" cssclass=\"cellImport\"/><Cell col=\"3\" text=\"인증분야\" cssclass=\"cellImport\"/><Cell col=\"4\" text=\"진행상태\" cssclass=\"cellImport\"/><Cell col=\"5\" text=\"시작일자\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR_YR\" textAlign=\"center\" cssclass=\"expr:PROGRS_STTUS_CD == &apos;01&apos;?&apos;grd_WF_green&apos;:PROGRS_STTUS_CD == &apos;03&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:ODR_DIV_CD\" textAlign=\"center\" cssclass=\"expr:PROGRS_STTUS_CD == &apos;01&apos;?&apos;grd_WF_green&apos;:PROGRS_STTUS_CD == &apos;03&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;\" displaytype=\"combotext\" combodataset=\"dsOrdDivCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" text=\"bind:ODR\" textAlign=\"center\" cssclass=\"expr:PROGRS_STTUS_CD == &apos;01&apos;?&apos;grd_WF_green&apos;:PROGRS_STTUS_CD == &apos;03&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:CERT_FLD_CD\" textAlign=\"left\" cssclass=\"expr:PROGRS_STTUS_CD == &apos;01&apos;?&apos;grd_WF_green&apos;:PROGRS_STTUS_CD == &apos;03&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;\" displaytype=\"combotext\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:PROGRS_STTUS_CD\" textAlign=\"left\" cssclass=\"expr:PROGRS_STTUS_CD == &apos;01&apos;?&apos;grd_WF_green&apos;:PROGRS_STTUS_CD == &apos;03&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;\" combodataset=\"dsProgrsSttusCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:BGNG_YMD\" textAlign=\"left\" cssclass=\"expr:PROGRS_STTUS_CD == &apos;01&apos;?&apos;grd_WF_green&apos;:Column4 == &apos;03&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;\" combodataset=\"dsProgrsSttusCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("DivRight","btnSpliter00:10","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnTab00","0","0","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("5");
            obj.set_text("기본정보/일정");
            obj.set_cssclass("btn_WF_tab02");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Button("btnTab01","btnTab00:-1","0","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Button("btnTab02","btnTab01:-1","0","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("1");
            obj.set_text("기관검토");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab00","0","btnTab00:-1",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("true");
            obj.set_async("false");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab01","0","btnTab00:-1",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("3");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("true");
            obj.set_async("false");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Button("btnTab03","btnTab02:-1","0","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("4");
            obj.set_text("시험항목");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab02","10","btnTab00:-1",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("true");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab03","0","btnTab00:-1",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("true");
            obj.set_async("false");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab00.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab00.form,function(p){});
            this.divDetail.form.DivRight.form.divTab00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab01.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab01.form,function(p){});
            this.divDetail.form.DivRight.form.divTab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab02.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab02.form,function(p){});
            this.divDetail.form.DivRight.form.divTab02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab03.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab03.form,function(p){});
            this.divDetail.form.DivRight.form.divTab03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form,function(p){});
            this.divDetail.form.DivRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboOrdYr","value","dsSearch","ODR_YR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboOrdDivCd","value","dsSearch","ODR_DIV_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboCertFldCd","value","dsSearch","CERT_FLD_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PLN010M01.xfdl", function() {
        /**
        *  안전성조사 계획관리
        *
        *  @MenuPath    안정성조사 > 계획관리 > 안전성조사계획
        *  @FileName    PLN010M01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.02.08
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.02.08      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_divTab0;
        this.fv_divTab1;
        this.fv_divTab2;
        this.fv_divTab3;
        this.fv_sOdrId;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj,e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter00);

        		this.divDetail.form.DivRight.form.divTab00.set_url("biz::pln/PLN010S01.xfdl");
        		this.divDetail.form.DivRight.form.divTab01.set_url("biz::pln/PLN010S02.xfdl");
        		this.divDetail.form.DivRight.form.divTab02.set_url("biz::pln/PLN010S03.xfdl");
        		this.divDetail.form.DivRight.form.divTab03.set_url("biz::pln/PLN010S04.xfdl");

        		// sub form과 parent form 연결
        		this.fv_divTab0 = this.divDetail.form.DivRight.form.divTab00.form;
        		this.fv_divTab0.fv_parentForm = this;
        		this.fv_divTab1 = this.divDetail.form.DivRight.form.divTab01.form;
        		this.fv_divTab1.fv_parentForm = this;
        		this.fv_divTab2 = this.divDetail.form.DivRight.form.divTab02.form;
        		this.fv_divTab2.fv_parentForm = this;
        		this.fv_divTab3 = this.divDetail.form.DivRight.form.divTab03.form;
        		this.fv_divTab3.fv_parentForm = this;

        		var objList = {"this.divDetail.form.DivRight.form.btnTab00" : this.divDetail.form.DivRight.form.divTab00,
        	                   "this.divDetail.form.DivRight.form.btnTab01" : this.divDetail.form.DivRight.form.divTab01,
        					   "this.divDetail.form.DivRight.form.btnTab02" : this.divDetail.form.DivRight.form.divTab02,
        					   "this.divDetail.form.DivRight.form.btnTab03" : this.divDetail.form.DivRight.form.divTab03};
                var sTabId = "tab01";
                var objFirstLoad = this.divDetail.form.DivRight.form.btnTab00;

                take.TabSetting(this, sTabId, objList, objFirstLoad);

        		// 공통코드 조회
        		take.tranCode(this, ["YEAR"
        		                    ,"ODR_DIV_CD"
        							,"CERT_FLD_CD"
        							,"TEST_INST_CD"
        							,"PROGRS_STTUS_CD"]
        		                  , ["dsYear"
        						    ,"dsOrdDivCd"
        							,"dsCertFldCd"
        							,"dsTestInstCd"
        							,"dsProgrsSttusCd"]
        						  , ["","ALL","ALL",'',""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			this.divSearch.form.cboOrdDivCd.set_index(0);
        			this.divSearch.form.cboCertFldCd.set_index(0);

        			// 중복값 체크용 dataset 생성
        			take.tranSelect(this, "odrCheckKey", "safety.odrCheckKey", "", "dsCheckKey", "", "fnCallback");

        			gFn_getDbValue(this, function(rtnValue) {

        				this.divSearch.form.cboOrdYr.set_value(rtnValue.resultData.substr(0, 4));
        				this.fnSearch();
        			}, "Doore.selectToDay");
        		});

           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";
        	this.dsOdr.set_enableevent(false);
        	this.dsOdr.clearData();
        	take.tranSelect(this, "Search", "safety.odrSelect", "dsSearch", "dsOdr", "", "fnCallback");
        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
        	if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	// 일정 grid, dataset 설정
        	var objSchdulGrid	= this.fv_divTab0.gridSchdul;
        	var objSchulDs  		= this.fv_divTab0.dsSchdul;
        	this.dsInstDdln  		= this.fv_divTab0.dsInstDdln;
        	this.dsOdrGdsTemp = this.fv_divTab1.dsOdrGdsInst;
        	this.dsInstCd     		= this.fv_divTab1.dsInstCd;

            //데이터셋 수정 여부 확인
            if (!take.isDsModified(this.dsOdr) && !take.isDsModified(objSchulDs) && !take.isDsModified(this.dsOdrGdsTemp) && !take.isDsModified(this.dsInstDdln))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	//저장 전 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,                           //현재 Form Object
                    this.divDetail.form.gridOdr,  	//벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    "cellImport",                   //필수 입력 css값
                    "",                				//성공 Call Back 함수
                    true);                          //동기 여부

        	if(!bRtn) return false;

        	//저장 전 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,                           //현재 Form Object
                    objSchdulGrid,  				//벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    "cellImport",                   //필수 입력 css값
                    "",                				//성공 Call Back 함수
                    true);                          //동기 여부

        	if(!bRtn) return false;

        	//입력인 경우 동일한 차수가 존제하는지 확인
        	for(var i = 0; i < this.dsOdr.rowcount; i++)
        	{
        		var strOdrYr 		= this.dsOdr.getColumn(i, "ODR_YR");
        		var strOdrDivCd 	= this.dsOdr.getColumn(i, "ODR_DIV_CD");
        		var strOdr 			= this.dsOdr.getColumn(i, "ODR");
        		var strCertFldCd 	= this.dsOdr.getColumn(i, "CERT_FLD_CD");

        		var checkColumn = "ODR_YR=='" + strOdrYr + "'"
        								+ "&& ODR_DIV_CD=='" + strOdrDivCd + "'"
        								+ "&& ODR=='" + strOdr + "'"
        								+ "&& CERT_FLD_CD=='" + strCertFldCd + "'";

        		// 기존 등록된 데이터 확인
        		if(this.dsOdr.getRowType(i) == 2)
        		{
        			if(this.dsCheckKey.getCaseCount(checkColumn) > 0)
        			{
        				take.alert(this, "error", "동일한 차수 정보가 존재합니다."  );
        				return false;
        			}

        			// 입력인 경우 세부일정 데이터 생성 데이터셋 처리
        			var nRow = this.dsOdrSchdul.addRow();
        			this.dsOdrSchdul.setColumn(nRow, "ODR_ID", this.dsOdr.getColumn(i, "ODR_ID"));
        		}

        		// 현재 데이터셋 확인
        		if(this.dsOdr.getCaseCount(checkColumn) > 1)
        		{
        			take.alert(this, "error", "동일한 차수 정보가 존재합니다."  );
        			return false;
        		}
        	}

        	// null 값 세팅을 위해 type을 string으로 변경
        	for (var i = 0; i < this.dsOdrGds.getColCount(); i++) {
        		var objColInfo = this.dsOdrGds.getColumnInfo(i);
        		objColInfo.set_type("STRING");
        	}

        	// 일정 데이터셋 복사 & rowType 처리
        	this.dsSchdul = objSchulDs;

        	// 품목 dataset 처리
        	this.dsOdrGds.clearData();
        	this.dsOdrGdsInst.clearData();

        	var nRow = 0;
        	var nRowInst = 0;
        	for(var i = 0; i < this.dsOdrGdsTemp.rowcount; i++)
        	{
        		if(this.dsOdrGdsTemp.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			nRow = this.dsOdrGds.addRow();

        			var sOdrId = this.dsOdrGdsTemp.getColumn(i, "ODR_ID");
        			var sDetailGdsId = this.dsOdrGdsTemp.getColumn(i, "DETAIL_GDS_ID");
        			var nDdsPlanQy = this.dsOdrGdsTemp.getColumn(i, "GDS_PLAN_QY");
        			var nGoalQy = this.dsOdrGdsTemp.getColumn(i, "GOAL_QY");
        			var nPlanQy = this.dsOdrGdsTemp.getColumn(i, "PLAN_QY");

        			this.dsOdrGds.setColumn(nRow, "ODR_ID", sOdrId);
        			this.dsOdrGds.setColumn(nRow, "DETAIL_GDS_ID", sDetailGdsId);
        			this.dsOdrGds.setColumn(nRow, "GDS_PLAN_QY", nDdsPlanQy);
        			this.dsOdrGds.setColumn(nRow, "GOAL_QY", nGoalQy);
        			this.dsOdrGds.setColumn(nRow, "PLAN_QY", nPlanQy);

        			// 시험기관별 계획 수량 update
        			for(var j = 0; j < this.dsInstCd.rowcount; j++)
        			{
        				var sTestInstCd = this.dsInstCd.getColumn(j, "TEST_INST_CD");
        				var sEditYn = this.dsOdrGdsTemp.getColumn(i, sTestInstCd + "_EDIT_YN");

        				if(sEditYn == "Y")
        				{
        					nRowInst = this.dsOdrGdsInst.addRow();
        					var sTestInstCd = this.dsInstCd.getColumn(j, "TEST_INST_CD");
        					var nPlanQy = this.dsOdrGdsTemp.getColumn(i, sTestInstCd + "_PLAN_QY");
        					this.dsOdrGdsInst.setColumn(nRowInst, "ODR_ID", sOdrId);
        					this.dsOdrGdsInst.setColumn(nRowInst, "DETAIL_GDS_ID", sDetailGdsId);
        					this.dsOdrGdsInst.setColumn(nRowInst, "TEST_INST_CD", sTestInstCd);
        					this.dsOdrGdsInst.setColumn(nRowInst, "PLAN_QY", nPlanQy);
        				}
        			}
        		}
        	}

        	// 작업중인 차수id
        	this.fv_sOdrId = this.dsOdr.getColumn(this.dsOdr.rowposition, "ODR_ID");

        	var sParam = "sNameSpace=safety.odrInsert|safety.odrUpdate|safety.odrDelete," +						// 차수(TB_ODR) 등록, 수정, 삭제
        						"safety.schdulInsert|safety.schdulUpdate|safety.schdulDelete," +								// 차수일정(TB_SCHDUL) 등록, 수정, 삭제
        						"safety.schdulSelectInsert|safety.schdulSelectInsert|safety.schdulSelectInsert," +		// 공통코드에 등록되어 있는 일정코드로 차수일정(TB_SCHDUL) 생성
        						"safety.odrGdsInstMerge|safety.odrGdsInstMerge|safety.odrGdsInstDelete," +			// 차수품목기관(TB_ODR_GDS_INST) 등록, 수정, 삭제 (PLAN_QY 계획수량만 update)
        						"safety.odrGdsMerge|safety.odrGdsMerge|safety.odrGdsDelete," +								// 차수품목(TB_ODR_GDS) 등록, 수정, 삭제
        						"safety.instDdlnUpdate|safety.instDdlnUpdate|safety.instDdlnUpdate," +					// 차수기관마감(TB_INST_DDLN) 수정
        						" sDataset=dsOdr|dsSchdul|dsOdrSchdul|dsOdrGdsInst|dsOdrGds|dsInstDdln";

        	take.transaction(this, "Save", "SVC_LOC::doore/saveList.do", "dsOdr=dsOdr:U dsSchdul=dsSchdul:U dsOdrSchdul=dsOdrSchdul:U dsOdrGdsInst=dsOdrGdsInst:U dsOdrGds=dsOdrGds:U dsInstDdln=dsInstDdln:U", "", sParam, "fnCallback");
        };

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
        	// 기초 데이터 세팅
        	gFn_getDbValue(this, function(rtnValue) {
        		var nRow = this.dsOdr.insertRow(0);

        		this.dsOdr.setColumn(nRow, "ODR_ID", rtnValue.resultData);						//차수ID
        		this.dsOdr.setColumn(nRow, "ODR_YR", this.divSearch.form.cboOrdYr.value);	//차수연도

        		if(!take.isEmpty(this.divSearch.form.cboOrdDivCd.value)) this.dsOdr.setColumn(nRow, "ODR_DIV_CD", this.divSearch.form.cboOrdDivCd.value);	//차수구분
        		if(!take.isEmpty(this.divSearch.form.cboCertFldCd.value)) this.dsOdr.setColumn(nRow, "CERT_FLD_CD", this.divSearch.form.cboCertFldCd.value); //인증분야

        		this.dsOdr.setColumn(nRow, "PROGRS_STTUS_CD", "01");								//계획작성중
        	}, "safety.selectId", "TB_ODR", "ODR");
        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {
        	//공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            var nSelRow= this.dsOdr.rowposition;

        	var sProgrsSttus = this.dsOdr.getColumn(nSelRow,"PROGRS_STTUS_CD");

        	if(sProgrsSttus != "01")
        	{
        		take.alert(this,"","진행상태가 [계획작성 중]일 때만 삭제 가능합니다.");
        		return false;
        	}

        	var bRowDel = take.confirm(this, "question", "선택된 항목을 삭제 하시겠습니까?");
            if (bRowDel) this.dsOdr.deleteRow(nSelRow);
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 안전성조사 차수 dsOdr_onrowposchanged 이벤트 */
        this.dsOdr_onrowposchanged = function(obj,e)
        {
        	//기본정보 일정 조회
        	this.fv_divTab0.fnSearch();

        	var nRow =  e.newrow;
        	var sSttusCd = this.dsOdr.getColumn(e.newrow, "PROGRS_STTUS_CD");
        	var sRowType = this.dsOdr.getRowType(nRow);
        	// 입력 상태가 아니면 필수항목 disable 처리
        	if(sRowType != 2)
        	{
        		// 기본정보/일정 DIV 세팅
        		this.fv_divTab0.cboOdrYr.set_readonly(true);
        		this.fv_divTab0.edtOdr.set_readonly(true);
        		this.fv_divTab0.cboOdrDivCd.set_readonly(true);
        		this.fv_divTab0.cboCertFldCd.set_readonly(true);

        		// 세부일정 행추가, 행삭제 enable 처리
        		this.fv_divTab0.btnAddSchedul.set_enable(true);
        		this.fv_divTab0.btnDelSchedul.set_enable(true);

        		// 품목 DIV 세팅
        		// 진행상태가 01 계획작성중인 경우 품목추가 버튼 enable true
        		if(sSttusCd == "01") this.fv_divTab1.btnAddGds.set_enable(true);
        		else this.fv_divTab1.btnAddGds.set_enable(false);
        		// 진행상태가 03 시험기관검토완료인 경우 계획수량반영 버튼 enable true
        		if(sSttusCd == "03") this.fv_divTab1.btnSetPlanQy.set_enable(true);
        		else this.fv_divTab1.btnSetPlanQy.set_enable(false);

        		// 시험항목 DIV 세팅
        		// 진행상태가 시험중 or 완료 시 disable
        		if(sSttusCd == "04" || sSttusCd == "05") this.fv_divTab3.btnAddTestItem.set_enable(false);
        		else this.fv_divTab3.btnAddTestItem.set_enable(true);
        	}
        	else if(sRowType == 2)	// 입력 상태
        	{
        		this.fv_divTab0.cboOdrYr.set_readonly(false);
        		this.fv_divTab0.edtOdr.set_readonly(false);
        		this.fv_divTab0.cboOdrDivCd.set_readonly(false);
        		this.fv_divTab0.cboCertFldCd.set_readonly(false);

        		// 세부일정 행추가, 행삭제 enable 처리
        		this.fv_divTab0.btnAddSchedul.set_enable(false);
        		this.fv_divTab0.btnDelSchedul.set_enable(false);

        		// 품목 DIV 세팅
        		this.fv_divTab1.btnAddGds.set_enable(false);
        		this.fv_divTab1.btnSetPlanQy.set_enable(false);

        		// 시험항목 DIV 세팅
        		this.fv_divTab3.btnAddTestItem.set_enable(false);

        	}

        	//기본정보 일정 조회
        	this.fv_divTab0.fnSearch();
        	// 품목 조회
        	this.fv_divTab1.fnSetGdsInst();
        	// 기관검토 조회
        	this.fv_divTab2.fnSearch();
        	// 시험항목 조회
        	this.fv_divTab3.fnSearch();
        };

        /* 품목 변경 시 기본정보/일정 시험기관, 기관검토, 시험항목 조회 처리*/
        this.fnSearchSub = function()
        {
        	this.fv_divTab0.fnSearch();
        	this.fv_divTab2.fnSearch();
        	this.fv_divTab3.fnSearch();
        }

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

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
            //Transaction 에러는 공통에서 처리

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

            switch(sId)
            {
                case "Search" : //조회 콜백
        			this.dsOdr.set_rowposition(99999);
        			this.dsOdr.set_enableevent(true);
        			var nRow = this.dsOdr.findRow("ODR_ID", this.fv_sOdrId);
        			if(nRow < 0) nRow = 0;
        			this.dsOdr.set_rowposition(nRow);
                    break;
                case "Save" :  //저장 콜백
        			take.alert(this, "", "저장 되었습니다.");
        			this.fnSearch();
                    break;
                default :
                    break;
            }
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.cboOrdYr.addEventHandler("onitemchanged",this.divSearch_cboPrefix_onitemchanged,this);
            this.divDetail.form.btnSpliter00.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.gridOdr.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.DivRight.form.btnTab00.addEventHandler("onclick",this.btnTab00_onclick,this);
            this.divDetail.form.DivRight.form.btnTab01.addEventHandler("onclick",this.btnTab01_onclick,this);
            this.divDetail.form.DivRight.form.btnTab02.addEventHandler("onclick",this.btnTab02_onclick,this);
            this.divDetail.form.DivRight.form.btnTab03.addEventHandler("onclick",this.divDetail_DivRight_btnTab03_onclick,this);
            this.dsOdr.addEventHandler("onrowposchanged",this.dsOdr_onrowposchanged,this);
        };
        this.loadIncludeScript("PLN010M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
