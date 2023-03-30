(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS020M01");
            this.set_titletext("공통시험항목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_ID\" type=\"STRING\" size=\"255\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"TEST_ITEM_CD\" type=\"STRING\" size=\"255\"/><Column id=\"TEST_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"CERT_KND_CD\" type=\"STRING\" size=\"255\"/><Column id=\"CL_1\" type=\"STRING\" size=\"255\"/><Column id=\"CL_2\" type=\"STRING\" size=\"255\"/><Column id=\"CL_3\" type=\"STRING\" size=\"255\"/><Column id=\"CL_4\" type=\"STRING\" size=\"255\"/><Column id=\"CL_5\" type=\"STRING\" size=\"255\"/><Column id=\"ATACH_DOC\" type=\"STRING\" size=\"255\"/><Column id=\"FAUL_DIV_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DETC_LIMIT\" type=\"STRING\" size=\"255\"/><Column id=\"UNIT\" type=\"STRING\" size=\"255\"/><Column id=\"CALC_MTH_CD\" type=\"STRING\" size=\"255\"/><Column id=\"HARM_INFO_CD\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"TEST_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"FEE\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_DIV_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcnYmd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestDivCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnGrid", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFaulDivCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestItemCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIneqCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalcMthCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHarmInfoCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestItemCdGrid", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRefe", this);
            obj._setContents("<ColumnInfo><Column id=\"APLCN_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"TEST_ID\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REFE\" type=\"STRING\" size=\"255\"/><Column id=\"INEQ_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCdGrid", this);
            obj._setContents("");
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

            obj = new Static("Static07_00_00","20","0","250","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","250","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","270","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","320","0","240","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","320","31","240","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","560","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","1140","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00","850","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","610","0","240","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","610","31","240","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00","900","31","240","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00","900","0","240","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTestItemCd00","30","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("시험항목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTestItemCd","110","10","160","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYn00_00","320","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","400","10","160","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("공통 시험항목 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridRefe",null,"26","264",null,"0","2",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRefe");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"적용일자\"/><Cell col=\"1\" text=\"기준치\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"부등호\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell text=\"bind:APLCN_YMD\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:REFE\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:INEQ_CD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsIneqCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" edittype=\"combo\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","26",null,null,"gridRefe:10","2",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("sort");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"170\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시험ID\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"시험항목\" cssclass=\"cellImport\"/><Cell col=\"3\" text=\"시험구분\"/><Cell col=\"4\" text=\"분류1\"/><Cell col=\"5\" text=\"분류2\"/><Cell col=\"6\" text=\"분류3\"/><Cell col=\"7\" text=\"분류4\"/><Cell col=\"8\" text=\"분류5\"/><Cell col=\"9\" text=\"부속문서\"/><Cell col=\"10\" text=\"결함구분\"/><Cell col=\"11\" text=\"검출한계\"/><Cell col=\"12\" text=\"단위\"/><Cell col=\"13\" text=\"계산방법\"/><Cell col=\"14\" text=\"위해정보코드\"/><Cell col=\"15\" text=\"수수료\"/><Cell col=\"16\" text=\"순번\"/><Cell col=\"17\" text=\"사용여부\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell text=\"bind:TEST_ID\"/><Cell col=\"1\" textAlign=\"center\" suppress=\"0\" edittype=\"none\" text=\"expr:currow + 1\"/><Cell col=\"2\" text=\"bind:TEST_ITEM_NM\" textAlign=\"left\" edittype=\"none\" combodataset=\"dsTestItemCdGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\" suppress=\"0\" displaytype=\"normal\" expandimage=\"url(&apos;theme://images/btn_GridExpand_N.png&apos;)\" expandshow=\"show\" expandsize=\"21\"/><Cell col=\"3\" text=\"bind:TEST_DIV\" textAlign=\"left\" suppress=\"0\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:CL_1\" textAlign=\"left\" suppress=\"0\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:CL_2\" textAlign=\"left\" edittype=\"normal\" suppress=\"0\"/><Cell col=\"6\" text=\"bind:CL_3\" textAlign=\"left\" edittype=\"normal\" suppress=\"0\"/><Cell col=\"7\" text=\"bind:CL_4\" textAlign=\"left\" edittype=\"normal\" suppress=\"0\"/><Cell col=\"8\" textAlign=\"left\" edittype=\"normal\" text=\"bind:CL_5\" suppress=\"0\"/><Cell col=\"9\" textAlign=\"left\" edittype=\"normal\" text=\"bind:ATACH_DOC\" suppress=\"0\"/><Cell col=\"10\" text=\"bind:FAUL_DIV_CD\" textAlign=\"left\" edittype=\"combo\" combodataset=\"dsFaulDivCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" suppress=\"0\"/><Cell col=\"11\" text=\"bind:DETC_LIMIT\" textAlign=\"left\" edittype=\"normal\" suppress=\"0\"/><Cell col=\"12\" text=\"bind:UNIT\" textAlign=\"left\" edittype=\"normal\" suppress=\"0\"/><Cell col=\"13\" text=\"bind:CALC_MTH_CD\" textAlign=\"left\" edittype=\"combo\" combodataset=\"dsCalcMthCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" suppress=\"0\"/><Cell col=\"14\" text=\"bind:HARM_INFO_CD\" textAlign=\"center\" edittype=\"none\" suppress=\"0\" displaytype=\"normal\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/btn_GridExpand_N.png&apos;)\" tooltiptext=\"bind:HARM_INFO_NM\" expandsize=\"21\"/><Cell col=\"15\" text=\"bind:FEE\" edittype=\"normal\"/><Cell col=\"16\" text=\"bind:SN\" textAlign=\"center\" edittype=\"normal\" suppress=\"0\" editinputtype=\"dot,digit\"/><Cell col=\"17\" text=\"bind:USE_YN\" textAlign=\"center\" edittype=\"combo\" suppress=\"0\" editinputtype=\"dot,digit\" displaytype=\"combotext\" combodataset=\"dsUseYnGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddHarmInfo",null,"0","110","21","gridRefe:13",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("  위해정보코드등록  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDownExcel",null,"0","110","21","btnAddHarmInfo:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("  엑셀다운로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUploadExcel",null,"0","110","21","btnDownExcel:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("  엑셀업로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgListTitle00_01",null,null,"150","21","110","gridRefe:5",null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("기준치");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddRefe",null,"0","105","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("  행추가  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

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

            obj = new Static("Static01_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboCertFldCd","value","dsSearch","CERT_FLD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboCertKndCd","value","dsSearch","CERT_KND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboGdsCd","value","dsSearch","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtTestItemCd","value","dsSearch","TEST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtTestItemCd","value","dsSearch","TEST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAS020M02.xfdl", function() {
        /**
        *  공통시험항목관리 화면
        *
        *  @MenuPath    안전성조사 > 기초정보관리 > 공통시험항목관리
        *  @FileName    BAS020M02.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.02.17
        *  @Version     1.0
        *  @Desction    설명 : 시험항목관리
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.02.17      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = "";
        this.fv_objProgInfo;
        this.fv_harmInfo = "";
        this.fv_testItem = "";
        this.fv_sAplcnYmd = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this))
           {
        		// 공통코드 세팅
        		take.tranCode(this,
        							[
        							"YN"
        							,"YN"
        							,"FAUL_DIV_CD"
        							,"TEST_ITEM_CD"
        							,"TEST_ITEM_CD"
        							,"CALC_MTH_CD"
        							,"HARM_INFO_CD"
        							,"FAUL_DIV_CD"
        							,"INEQ_CD"
        							,"GDS_CD"
        							]
        		                  , [
        							"dsUseYn"
        							,"dsUseYnGrid"
        							,"dsFaulDivCd"
        							,"dsTestItemCd"
        							,"dsTestItemCdGrid"
        							,"dsCalcMthCd"
        							,"dsHarmInfoCd"
        							,"dsFaulDivCd"
        							,"dsIneqCd"
        							,"dsGdsCdGrid"
        							]
        						  , ["ALL","","","","","","","","",""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			this.divSearch.form.cboUseYn.set_index(1);
        			this.fnSearch();
        		});
        	}
        };

        /*********************************************************
         * 2.1 CALLBACK 콜백 처리부분
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
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

            switch(sId)
            {
        		case "Search" :
        			if (this.dsList.rowcount > 0)
        			{
        				var nRowCount = this.dsList.rowcount.toLocaleString("ko-KR");
        				this.divDetail.form.staTitle.set_text("공통시험항목 목록 ("+nRowCount+"건)");
        			}
        			else {
        				this.divDetail.form.staTitle.set_text("공통시험항목 목록");
        			}

        			break;
        		case "Save"	 :
        			take.alert(this, "", "저장 되었습니다.");
        			this.fnSearch();

        			break;
                case "Delete" :
        			take.alert(this, "", "삭제가 완료되었습니다.");
        			this.fnSearch();

                    break;
                default :
                    break;
            }
        };
        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAdd, fnDelRow)
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

        	this.dsList.clearData();

        	//2023.03.06 김준오_ '공통','어린이제품' 호출
        	this.dsSearch.setColumn(0, "TEST_DIV_CD", "01");
        	this.dsSearch.setColumn(0, "CERT_FLD_CD", "03");

            take.tranSelect(this, "Search", "basicInfo.commonTestItemSelect", "dsSearch", "dsList", "", "fnCallback");
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

        	//데이터셋 수정 여부 확인
        	if (!take.isDsModified(this.dsList) && !take.isDsModified(this.dsRefe))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	//저장 전 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,                          			//현재 Form Object
                    this.divDetail.form.gridMain,  	//벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    "cellImport",                  			 //필수 입력 css값
                    "",                							//성공 Call Back 함수
                    true);                        			  //동기 여부

        	if(bRtn)
        	{
        		var sParam = "sNameSpace=basicInfo.testItemInsert|basicInfo.testItemUpdate|basicInfo.testItemDelete,"
        											+"basicInfo.aplcnRefeInsert|basicInfo.aplcnRefeUpdate|basicInfo.aplcnRefeDelete"
        											+" sDataset=dsList|dsRefe";

        		take.transaction(this, sTranId, "SVC_LOC::doore/saveList.do", "dsList=dsList:U dsRefe=dsRefe:U", "", sParam, "fnCallback", false);
        	}
        };

        /**
         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //변수에 값 세팅
            var objDs = this.dsList;       //행 추가할 데이터셋

            //넘어온 Row값이 없으면 : 공통 등록 버튼을 통해 호출된 경우
            if (take.nvl(nRow,"")=="") {
        		if(this.divDetail.form.gridMain.currentrow > -1) nRow = objDs.insertRow(this.divDetail.form.gridMain.currentrow + 1);
        		else nRow = objDs.addRow();
            }

        	// 기본정보 세팅
        	this.dsList.setColumn(nRow, "TEST_DIV_CD","01")
        	this.dsList.setColumn(nRow, "CERT_FLD_CD", "03");
        	this.dsList.setColumn(nRow, "USE_YN", "Y");
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
        	// row 상태가 insert 인경우만 삭제 가능
        	if(this.dsList.getRowType(this.dsList.rowposition) == 2) this.dsList.deleteRow();
        	else
        	{
        		take.alert(this, "Info", "저장된 행은 삭제 할 수 없습니다.\n\n사용여부를 'N'으로 변경하여 주십시오.");
        		return false;
        	}
        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        /*
        	시험항목 검색조건 엔터 값 조회
        */
        this.divSearch_edtTestItemCd_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
        	}
        };

        /**
         * 2023.03. 07 김준오_ 기준치 행추가
         */
         this.divDetail_btnAddRefe_onclick = function(obj,e)
        {
        	if (take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "풍목 정보를 저장후 작업하여 주십시오.");
                return false;
            }

        	var nRow = 0;
        	var sTestId = this.dsList.getColumn(this.dsList.rowposition, "TEST_ID");

         	if(this.divDetail.form.gridRefe.currentrow > -1)
        	{
        		if(this.dsRefe.getColumn(this.dsRefe.rowposition,"APLCN_YMD")== this.fv_sAplcnYmd){
        			take.alert(this,"","동일한 날짜의 기준치가 이미 존재합니다.");
        			return false;
        		}
        		nRow = this.dsRefe.insertRow(nRow);
        		this.fv_sAplcnYmd = gFn_getDbValue(this, function(rtnValue) {this.dsRefe.setColumn(0, "APLCN_YMD", (rtnValue.resultData));}, "Doore.selectToDay");
        	}
        	else
        	{
        		nRow = this.dsRefe.addRow();
        		gFn_getDbValue(this, function(rtnValue) {
        			this.dsRefe.setColumn(0, "APLCN_YMD", (rtnValue.resultData));
        			this.fv_sAplcnYmd = rtnValue.resultData;
        			}, "Doore.selectToDay");
        	}

        	this.dsRefe.setColumn(nRow, "TEST_ID", sTestId);
        };

        /**
         *  위해정보코드 등록 팝업 호출
         */
        this.divDetail_btnAddHarmInfo_onclick = function(obj,e)
        {
        	//인증분야 코드세팅 : '03'(어린이제품)
        	var sCertFldCd = "03";

        	var arrParam = {
        					sCertFldCd : sCertFldCd
        				  };

        	take.openPopup(this, "addTestItemCd", "biz::bas/BAS020P03.xfdl",arrParam, "resizable=true",
        		function(){
        			this.fnSearch();
        		}
        	);
        };

        /**
         * 위해정보코드 조회 버튼 클릭 event,
         * 시험항목 조회 버튼 클릭 event
         */
        this.divDetail_gridMain_onexpandup = function(obj,e)
        {
        	if(take.getBindColName(obj, e.cell) == "HARM_INFO_CD")
        	{
        		this.fv_harmInfo = "";

        		var sCertFldCd = this.dsList.getColumn(this.dsList.rowposition, "CERT_FLD_CD");

        		if(take.isEmpty(sCertFldCd))
        		{
        			alert("인증분야를 선택 후 작업하여 주십시오.");
        			return false;
        		}
        		var arrParam = {
        					sCertFldCd : sCertFldCd
        				  };

        		take.openPopup(this, "addTestItemCd", "biz::bas/BAS020P02.xfdl", arrParam, "", function(){
        				if(!take.isEmpty(this.fv_harmInfo.CODE_ID))
        				{
        					this.dsList.setColumn(e.row, "HARM_INFO_CD", this.fv_harmInfo.CODE_ID);
        					this.dsList.setColumn(e.row, "HARM_INFO_NM", this.fv_harmInfo.REF2);
        				}
        			});
        	}

        	if(take.getBindColName(obj, e.cell) == "TEST_ITEM_NM")
        	{
        		this.fv_testItem = "";

        		var sCertFldCd = this.dsList.getColumn(this.dsList.rowposition, "CERT_FLD_CD");

        		var arrParam = {
        					sCertFldCd : sCertFldCd
        					};

        		take.openPopup(this, "selectTestItemCd", "biz::bas/BAS020P05.xfdl", arrParam, "", function(){
        				if(!take.isEmpty(this.fv_testItem.CODE_ID))
        				{
        					this.dsList.setColumn(e.row, "TEST_ITEM_NM", this.fv_testItem.CODE_NM);
        					this.dsList.setColumn(e.row, "TEST_ITEM_CD", this.fv_testItem.CODE_ID);
        				}
        			});
        	}
        };

        /**
         * 엑셀다운로드 버튼 클릭 이벤트
         */
        this.btnExcelDownload_onclick = function(obj,e)
        {
        	gFnExcelDown (this, this.divDetail.form.gridMain, "시험항목_" + this.divSearch.form.edtTestItemCd.text);
        };

        /* 엑셀 업로드 클릭 이벤트 */
        this.btnExcelUpload_onclick = function(obj,e)
        {
        	gFnExcelUpload(this, this.dsExcelUpload, 2, this.fnExcelImport_onsuccess, this.fnExcelImport_onerror);
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /*
        	excel 업로드 성공
        */
        this.fnExcelImport_onsuccess = function(obj,  e)
        {
        	var nCnt = this.dsExcelUpload.rowcount;
            this.dsList.clearData();
        	var strMapp =  gFnGetMappingString(this.divDetail.form.gridMain);

        	this.dsList.set_enableevent(false);
        	for(var i = 0; i < nCnt; i++) {
        		var nRow = this.dsList.addRow();
        		this.dsList.copyRow(nRow, this.dsExcelUpload, i, strMapp);

        		var sTestItemNm = this.dsList.getColumn(nRow, "TEST_ITEM_NM");

        		//품목코드 세팅 : CODE = GDS_CD, REF1 = CERT_FLD_CD, REF2 = CERT_KND_CD
        		this.dsGdsCdGrid.filter("");
        		//this.dsGdsCdGrid.filter("NAME == '" + sGdsCd + "'");

        		if(this.dsGdsCdGrid.rowcount == 1)
        		{
        			this.dsList.setColumn(nRow, "GDS_CD", this.dsGdsCdGrid.getColumn(0, "CODE"));
        			this.dsList.setColumn(nRow, "TEST_DIV_CD", "01");
        			this.dsList.setColumn(nRow, "CERT_FLD_CD", "03");
        			this.dsList.setColumn(nRow, "TEST_ITEM_CD", gFnGetCodeId(this.dsTestItemCdGrid, sTestItemNm));
        		}
        		else
        		{
        			this.dsList.setColumn(nRow, "GDS_CD", "");
        			this.dsList.setColumn(nRow, "TEST_DIV_CD", "01");
        			this.dsList.setColumn(nRow, "CERT_FLD_CD", "03");
        			this.dsList.setColumn(nRow, "TEST_ITEM_CD", gFnGetCodeId(this.dsTestItemCdGrid, sTestItemNm));
        		}
        		this.dsGdsCdGrid.filter("");
        	}
        	this.dsList.set_enableevent(true);

        	// 데이터셋 처리 : TEST_ID가 있는 경우 update, 없는 경우 insert
        	this.dsList.set_updatecontrol(false);
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(take.isEmpty(this.dsList.getColumn(i, "TEST_ID"))) this.dsList.setRowType(i, "I");
        		else this.dsList.setRowType(i, "U");
        	}
        	this.dsList.set_updatecontrol(true);

        	this.divDetail.form.gridMain.selectRow(0);
        }

        /*
        	기준치 조회
        */
        this.fnSearchRefe = function()
        {
        	this.dsRefe.clearData();

        	this.dsSearch.setColumn(0, "TEST_ID", this.dsList.getColumn(this.dsList.rowposition, "TEST_ID"));
        	this.dsSearch.setColumn(0, "DETAIL_GDS_ID", "GDS9999999999");

        	if(take.isEmpty(this.dsList.getColumn(this.dsList.rowposition, "TEST_ID"))) return false;

        	take.tranSelect(this, "SearchREFE", "basicInfo.aplcnRefeSelect", "dsSearch", "dsRefe", "", "fnCallback");
        }


        /*
        	데이터셋의 변경에 따른 기준치 조회
        */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.fnSearchRefe();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtTestItemCd.addEventHandler("onkeyup",this.divSearch_edtTestItemCd_onkeyup,this);
            this.divDetail.form.gridMain.addEventHandler("onexpandup",this.divDetail_gridMain_onexpandup,this);
            this.divDetail.form.gridMain.addEventHandler("oncellclick",this.divDetail_gridMain_oncellclick,this);
            this.divDetail.form.btnAddHarmInfo.addEventHandler("onclick",this.divDetail_btnAddHarmInfo_onclick,this);
            this.divDetail.form.btnDownExcel.addEventHandler("onclick",this.btnExcelDownload_onclick,this);
            this.divDetail.form.btnUploadExcel.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.divDetail.form.btnAddRefe.addEventHandler("onclick",this.divDetail_btnAddRefe_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS020M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
