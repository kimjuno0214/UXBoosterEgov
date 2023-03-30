(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS010P01");
            this.set_titletext("시험항목 선택");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1450,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REF1\" type=\"STRING\" size=\"255\"/><Column id=\"REF2\" type=\"STRING\" size=\"255\"/><Column id=\"REF3\" type=\"STRING\" size=\"255\"/><Column id=\"REF4\" type=\"STRING\" size=\"255\"/><Column id=\"REF5\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestItemCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","41",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H5");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnProgramSearch",null,"20","50","21","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search03");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","46",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staProgramNm","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","staProgramNm:10","10","155","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","255","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00","825","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTestItemCd","Static07_00_01_00_00:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("시험항목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgramNm00","305","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("인증종류");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertKndCd","staProgramNm00:0","10","155","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCertKndCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","540","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTestItemCd","staTestItemCd:0","10","155","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGdsCd","Static07_00_01_00:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGdsCd","staGdsCd:0","10","155","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsGdsCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00_00","1109","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTestDiv","1159","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTestDiv","1239","10","155","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","43.75%","89","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("시험항목 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("takegrid").set("no,sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"인증분야\"/><Cell col=\"2\" text=\"인증종류\"/><Cell col=\"3\" text=\"시험항목\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"분류1\"/><Cell col=\"6\" text=\"분류2\"/><Cell col=\"7\" text=\"분류3\"/><Cell col=\"8\" text=\"분류4\"/><Cell col=\"9\" text=\"분류5\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"center\" edittype=\"checkbox\" suppress=\"0\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:CERT_FLD_CD\" textAlign=\"left\" edittype=\"none\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" suppress=\"0\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:CERT_KND_CD\" textAlign=\"left\" edittype=\"none\" combodataset=\"dsCertKndCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" suppress=\"0\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:TEST_ITEM_CD\" textAlign=\"left\" edittype=\"none\" combodataset=\"dsTestItemCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" suppress=\"0\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:TEST_DIV\" textAlign=\"left\" suppress=\"0\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:CL_1\" textAlign=\"left\" suppress=\"0\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:CL_2\" textAlign=\"left\" edittype=\"none\" suppress=\"0\"/><Cell col=\"7\" text=\"bind:CL_3\" textAlign=\"left\" edittype=\"none\" suppress=\"0\"/><Cell col=\"8\" text=\"bind:CL_4\" textAlign=\"left\" edittype=\"none\" suppress=\"0\"/><Cell col=\"9\" text=\"bind:CL_5\" textAlign=\"left\" edittype=\"none\" suppress=\"0\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","99",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","0","43",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,null,"57","23","btnCancel:3","20",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staProgramNm.set_taborder("0");
                p.staProgramNm.set_text("인증분야");
                p.staProgramNm.set_cssclass("sta_WF_textR");
                p.staProgramNm.move("10","10","80","21",null,null);

                p.cboCertFldCd.set_taborder("1");
                p.cboCertFldCd.set_innerdataset("dsCertFldCd");
                p.cboCertFldCd.set_codecolumn("CODE");
                p.cboCertFldCd.set_datacolumn("NAME");
                p.cboCertFldCd.set_text("");
                p.cboCertFldCd.set_value("어린이");
                p.cboCertFldCd.set_index("0");
                p.cboCertFldCd.move("staProgramNm:10","10","155","21",null,null);

                p.Static07_00_01.set_taborder("2");
                p.Static07_00_01.set_text("50");
                p.Static07_00_01.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01.set_visible("false");
                p.Static07_00_01.set_color("#ff0000");
                p.Static07_00_01.set_textAlign("center");
                p.Static07_00_01.move("255","0","50",null,null,"0");

                p.Static07_00_01_00_00.set_taborder("9");
                p.Static07_00_01_00_00.set_text("50");
                p.Static07_00_01_00_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01_00_00.set_visible("false");
                p.Static07_00_01_00_00.set_color("#ff0000");
                p.Static07_00_01_00_00.set_textAlign("center");
                p.Static07_00_01_00_00.move("825","0","50",null,null,"0");

                p.staTestItemCd.set_taborder("3");
                p.staTestItemCd.set_text("시험항목");
                p.staTestItemCd.set_cssclass("sta_WF_textR");
                p.staTestItemCd.move("Static07_00_01_00_00:0","10","80","21",null,null);

                p.staProgramNm00.set_taborder("4");
                p.staProgramNm00.set_text("인증종류");
                p.staProgramNm00.set_cssclass("sta_WF_textR");
                p.staProgramNm00.move("305","10","80","21",null,null);

                p.cboCertKndCd.set_taborder("5");
                p.cboCertKndCd.set_innerdataset("dsCertKndCd");
                p.cboCertKndCd.set_codecolumn("CODE");
                p.cboCertKndCd.set_datacolumn("NAME");
                p.cboCertKndCd.set_text("");
                p.cboCertKndCd.set_value("어린이");
                p.cboCertKndCd.set_index("0");
                p.cboCertKndCd.move("staProgramNm00:0","10","155","21",null,null);

                p.Static07_00_01_00.set_taborder("6");
                p.Static07_00_01_00.set_text("50");
                p.Static07_00_01_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01_00.set_visible("false");
                p.Static07_00_01_00.set_color("#ff0000");
                p.Static07_00_01_00.set_textAlign("center");
                p.Static07_00_01_00.move("540","0","50",null,null,"0");

                p.edtTestItemCd.set_taborder("7");
                p.edtTestItemCd.move("staTestItemCd:0","10","155","21",null,null);

                p.staGdsCd.set_taborder("8");
                p.staGdsCd.set_text("품목");
                p.staGdsCd.set_cssclass("sta_WF_textR");
                p.staGdsCd.move("Static07_00_01_00:0","10","80","21",null,null);

                p.cboGdsCd.set_taborder("10");
                p.cboGdsCd.set_innerdataset("dsGdsCd");
                p.cboGdsCd.set_codecolumn("CODE");
                p.cboGdsCd.set_datacolumn("NAME");
                p.cboGdsCd.set_text("");
                p.cboGdsCd.set_value("어린이");
                p.cboGdsCd.set_index("0");
                p.cboGdsCd.move("staGdsCd:0","10","155","21",null,null);

                p.Static07_00_01_00_00_00.set_taborder("11");
                p.Static07_00_01_00_00_00.set_text("50");
                p.Static07_00_01_00_00_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01_00_00_00.set_visible("false");
                p.Static07_00_01_00_00_00.set_color("#ff0000");
                p.Static07_00_01_00_00_00.set_textAlign("center");
                p.Static07_00_01_00_00_00.move("1109","0","50",null,null,"0");

                p.staTestDiv.set_taborder("12");
                p.staTestDiv.set_text("구분");
                p.staTestDiv.set_cssclass("sta_WF_textR");
                p.staTestDiv.move("1159","10","80","21",null,null);

                p.edtTestDiv.set_taborder("13");
                p.edtTestDiv.move("1239","10","155","21",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("default0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static24.set_taborder("1");
                p.Static24.set_text("시험항목 목록");
                p.Static24.set_cssclass("sta_WF_title02");
                p.Static24.move("0","0",null,"21","0",null);

                p.gridMain.set_taborder("1");
                p.gridMain.set_autofittype("col");
                p.gridMain.set_binddataset("dsList");
                p.gridMain.getSetter("takegrid").set("no,sort");
                p.gridMain.move("0","26",null,null,"0","0");
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_autofittype("col");
                p.grdList.set_oncelldblclick("divSearch_grdList_oncelldblclick");
                p.grdList.set_binddataset("dsProgramCd");
                p.grdList.move("10","79",null,"350","10",null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1450,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboCertFldCd","value","dsSearch","CERT_FLD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboCertKndCd","value","dsSearch","CERT_KND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtTestItemCd","value","dsSearch","TEST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboGdsCd","value","dsSearch","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtTestDiv","value","dsSearch","TEST_DIV");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAS010P01.xfdl", function() {
        /**
        *  위해정보코드등록
        *
        *  @MenuPath    기초정보관리 > 품목관리 > 시험항목선택 팝업
        *  @FileName    BAS010P01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.01.27
        *  @Version     1.0
        *  @Desction    품목 시험항목 등록 / 삭제
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.01.27      doore              최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_sCertFldCd = take.nvl(this.parent.sCertFldCd, "");
        this.fv_sCertKndCd = take.nvl(this.parent.sCertKndCd, "");
        this.fv_sGdsCd = take.nvl(this.parent.sGdsCd, "");
        this.fv_sDetailGdsId = take.nvl(this.parent.sDetailGdsId, "");

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		// 공통코드 조회
        		take.tranCode(this, ["CERT_FLD_CD", "CERT_KND_CD", "TEST_ITEM_CD", "GDS_CD"]
        		                  , ["dsCertFldCd", "dsCertKndCd", "dsTestItemCd" , "dsGdsCd"]
        						  , ["","","",""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			this.divSearch.form.cboCertFldCd.set_value(this.fv_sCertFldCd);
        			this.divSearch.form.cboCertFldCd.set_enable(false);

        			this.divSearch.form.cboCertKndCd.set_value(this.fv_sCertKndCd);
        			this.divSearch.form.cboCertKndCd.set_enable(false);

        			this.divSearch.form.cboGdsCd.set_value(this.fv_sGdsCd);
        			this.divSearch.form.cboGdsCd.set_enable(false);

        			// 적용일자 조회 :
        			this.fnSearch();
        		});
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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

        	this.dsSearch.setColumn(0, "DETAIL_GDS_ID", this.fv_sDetailGdsId);
        	this.dsList.clearData();

        	trace(this.dsSearch.saveXML());

            take.tranSelect(this, "Search", "basicInfo.gdsTestSelect", "dsSearch", "dsList", "", "fnCallback");
        }

        /**

         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {

        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function()
        {
        	var sTranId = "Save";
        	//데이터셋 수정 여부 확인
        	if (!take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	this.dsList.set_updatecontrol(false);
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getRowType(i) == 4)
        		{
        			if(this.dsList.getColumn(i, "CHK")) this.dsList.setRowType(i, "I");
        			else this.dsList.setRowType(i, "D");
        		}
        	}
        	this.dsList.set_updatecontrol(true);

        	var sParam = "sNameSpace=basicInfo.gdsTestInsert|basicInfo.gdsTestUpdate|basicInfo.gdsTestDelete"
        			   + " sDataset=dsList";

        	take.transaction(this, sTranId, "SVC_LOC::doore/saveList.do", "dsList=dsList:U", "", sParam, "fnCallback");
        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {N/A} N/A
         * @return {N/A} N/A
         */
        this.fnDelRow = function()
        {

        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 닫기 버튼 클릭 이벤트 */
        this.fnClose = function()
        {
        	this.close();
        }

        /* 그리드 해더 클릭 시 전체선택, 전체해제 처리 */
        this.divDetail_gridMain_onheadclick = function(obj,e)
        {
        	if (e.col == 1) {
        		gFnClickHeadCheckBox(obj, "CHK");
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/


        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
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
                case "Save" : //저장 콜백
        			alert("저장되었습니다.");
        			this.fnClose();
        			break;
                case "Search" :  //조회 콜백
                    break;
                default :
                    break;
            }
        };

        this.divSearch_edtTestItemCd_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnProgramSearch.addEventHandler("onclick",this.fnSearch,this);
            this.divSearch.form.cboCertFldCd.addEventHandler("onitemchanged",this.fnSearch,this);
            this.divSearch.form.cboCertKndCd.addEventHandler("onitemchanged",this.fnSearch,this);
            this.divSearch.form.edtTestItemCd.addEventHandler("onkeyup",this.divSearch_edtTestItemCd_onkeyup,this);
            this.divSearch.form.cboGdsCd.addEventHandler("onitemchanged",this.fnSearch,this);
            this.divSearch.form.edtTestDiv.addEventHandler("onkeyup",this.divSearch_edtTestItemCd_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.gridMain.addEventHandler("onexpandup",this.divDetail_gridMain_onexpandup,this);
            this.divDetail.form.gridMain.addEventHandler("onheadclick",this.divDetail_gridMain_onheadclick,this);
            this.btnCancel.addEventHandler("onclick",this.fnClose,this);
            this.btnEnter.addEventHandler("onclick",this.fnSave,this);
        };
        this.loadIncludeScript("BAS010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
