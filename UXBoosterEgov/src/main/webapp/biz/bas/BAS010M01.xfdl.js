(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS010M01");
            this.set_titletext("품목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"CERT_KND_CD\" type=\"STRING\" size=\"255\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_GDS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"STTY_PRDUCT_CL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STTY_PRDUCT_CL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TEST_INST_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertFldCdGrid", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCdGrid", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnGrid", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestItemList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestItemCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRefe", this);
            obj._setContents("<ColumnInfo><Column id=\"APLCN_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"TEST_ID\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REFE\" type=\"STRING\" size=\"255\"/><Column id=\"INEQ_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFaulDivCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIneqCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestPosblInst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestInstCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailGds", this);
            obj._setContents("<ColumnInfo><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"CERT_KND_CD\" type=\"STRING\" size=\"255\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_GDS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSecrInst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCdGrid", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
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

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staCertiFldCd","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","110","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("어린이");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCertFndCd","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("인증종류");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertKndCd","445","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCertKndCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGdsNm","Static07_01:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("세부픔목명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGdsNm","staGdsNm:0","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_02","965","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCertFndCd00","1015","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","1105","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsUseYn");
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

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("세부품목 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSpliter","795","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","26",null,null,"btnSpliter:10","10",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"DOC_KEY\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"인증분야\" cssclass=\"cellImport\"/><Cell col=\"3\" text=\"인증종류\" cssclass=\"cellImport\"/><Cell col=\"4\" text=\"품목명\" cssclass=\"cellImport\"/><Cell col=\"5\" text=\"간사기관\"/><Cell col=\"6\" text=\"세부품목명\" cssclass=\"cellImport\"/><Cell col=\"7\" text=\"법정분류코드\"/><Cell col=\"8\" text=\"정렬순번\" cssclass=\"cellImport\"/><Cell col=\"9\" text=\"사용여부\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell text=\"bind:DETAIL_GDS_ID\" textAlign=\"left\" suppress=\"1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" textAlign=\"center\" suppress=\"0\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsCertFldCdGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:CERT_FLD_CD\" textAlign=\"left\" suppress=\"0\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;combo&apos;:&apos;none&apos;\" combodataset=\"dsCertFldCdGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:CERT_KND_CD\" textAlign=\"left\" suppress=\"0\" combodataset=\"dsCertKndCdGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;combo&apos;:&apos;none&apos;\"/><Cell col=\"4\" text=\"bind:GDS_CD\" textAlign=\"left\" suppress=\"0\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;combo&apos;:&apos;none&apos;\" expandshow=\"hide\" expandsize=\"21\" displaytype=\"combotext\" combodataset=\"dsGdsCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltext=\"bind:GDS_NM\" combodisplaynulltype=\"nulltext\"/><Cell col=\"5\" text=\"bind:REF3\" textAlign=\"left\" suppress=\"0\" edittype=\"combo\" expandshow=\"hide\" expandsize=\"21\" displaytype=\"combotext\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltext=\"bind:REF3_NM\" combodisplaynulltype=\"nulltext\"/><Cell col=\"6\" text=\"bind:DETAIL_GDS_NM\" textAlign=\"left\" suppress=\"0\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:STTY_PRDUCT_CL_CD\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"8\" text=\"bind:SN\" textAlign=\"right\" suppress=\"0\" edittype=\"normal\" textareainputtype=\"digit,dot\"/><Cell col=\"9\" textAlign=\"center\" text=\"bind:USE_YN\" combodataset=\"dsUseYnGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"combo\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridTestItem","btnSpliter:10","350",null,null,"0","10",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTestItemList");
            obj.set_selecttype("row");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시험항목\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"분류1\"/><Cell col=\"3\" text=\"분류2\"/><Cell col=\"4\" text=\"분류3\"/><Cell col=\"5\" text=\"분류4\"/><Cell col=\"6\" text=\"분류5\"/><Cell col=\"7\" text=\"결함구분\"/><Cell col=\"8\" text=\"검출한계\"/><Cell col=\"9\" text=\"단위\"/></Band><Band id=\"body\"><Cell text=\"bind:TEST_ITEM_CD\" textAlign=\"left\" combodataset=\"dsTestItemCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:TEST_DIV\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CL_1\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CL_2\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CL_3\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CL_4\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CL_5\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:FAUL_DIV_CD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsFaulDivCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" text=\"bind:DETC_LIMIT\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"9\" text=\"bind:UNIT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddTestItem",null,"324","110","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("  시험항목선택  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdRefe",null,"26","359",null,"0","btnAddTestItem:15",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRefe");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"삭제\"/><Cell col=\"1\" text=\"적용일자\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"기준치\" cssclass=\"cellImport\"/><Cell col=\"3\" text=\"부등호\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:APLCN_YMD\" textAlign=\"center\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"2\" text=\"bind:REFE\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:INEQ_CD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsIneqCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" edittype=\"combo\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","btnSpliter:10",null,"150","21",null,"gridTestItem:5",null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("시험항목 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridInst","btnSpliter:10","26","220",null,null,"staTitle02:15",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTestPosblInst");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"선택\"/><Cell col=\"1\" text=\"시험기관\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:TEST_INST_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgListTitle00_01",null,"0","150",null,"206","grdRefe:5",null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("기준치");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgListTitle00","btnSpliter:10","0","150","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("시험가능 기관");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddGds",null,"0","105","21","btnSpliter:10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("  품목코드등록  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDownExcel",null,"0","110","21","btnAddGds:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("  엑셀다운로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUploadExcel",null,"0","110","21","btnDownExcel:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("  엑셀업로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddRefe",null,"0","105","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("  행추가  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);
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

            obj = new BindItem("item1","divSearch.form.cboCertKndCd","value","dsSearch","CERT_KND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtGdsNm","value","dsSearch","GDS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAS010M01.xfdl", function() {
        /**
        *  품목관리
        *
        *  @MenuPath    기초정보 > 품목관리
        *  @FileName    BAS010M01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.01.28
        *  @Version     1.0
        *  @Desction    품목관리 화면
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.01.28      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_gdsInfo = "";
        this.fv_sMenuCd = "";
        this.fv_nWorkRow = 0;
        this.fv_nTetRow = 0;
        this.fv_sWorkDetailGdsNm ="";
        this.fv_sWorkCertFldCd ="";

        var objProgInfo = take.getProgInfo(this);
        this.fv_sMenuCd = objProgInfo.ProgId;			// M0027 관리자 품목관리, M0042 간사기관 기준치관리

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
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter);

        		// this.fv_sMenuCd M0042 간사기관 권한 처리
        		if(this.fv_sMenuCd == "M0042")
        		{
        			this.divDetail.form.gridMain.set_readonly(true);
        			this.divDetail.form.gridInst.set_readonly(true);
        			this.divDetail.form.gridTestItem.set_readonly(true);
        		}
        		else
        		{
        			this.divDetail.form.btnUploadExcel.set_visible(true);
        			this.divDetail.form.btnDownExcel.set_visible(true);
        			this.divDetail.form.btnAddGds.set_visible(true);
        			this.divDetail.form.btnAddTestItem.set_visible(true);
        		}

        		// 공통코드 조회
        		take.tranCode(this, ["CERT_FLD_CD"
        		                    ,"CERT_FLD_CD"
        							,"YN"
        							,"YN"
        							,"CERT_KND_CD"
        							,"CERT_KND_CD"
        							,"TEST_ITEM_CD"
        							,"FAUL_DIV_CD"
        							,"INEQ_CD"
        							,"GDS_CD"
        							,"GDS_CD"
        							,"TEST_INST_CD"]
        		                  , ["dsCertFldCd"
        						    ,"dsCertFldCdGrid"
        							,"dsUseYn"
        							,"dsUseYnGrid"
        							,"dsCertKndCd"
        							,"dsCertKndCdGrid"
        							,"dsTestItemCd"
        							,"dsFaulDivCd"
        							,"dsIneqCd"
        							,"dsGdsCd"
        							,"dsGdsCdGrid"
        							,"dsTestInstCd"]
        						  , ["ALL","","ALL","","ALL","","","","","",""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			this.divSearch.form.cboCertFldCd.set_index(0);
        			this.divSearch.form.cboCertKndCd.set_index(0);
        			this.divSearch.form.cboUseYn.set_index(1);

        			this.fnSearch();
        		});
           }
        }

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
        				this.divDetail.form.staTitle01.set_text("세부품목 목록 ("+nRowCount+"건)");
        			}
        			else this.divDetail.form.staTitle01.set_text("세부품목 목록");

        			var nRow = this.dsList.findRow("DETAIL_GDS_NM", this.fv_sWorkDetailGdsNm);
        			//dsList 데이터셋의 rowposition을 찾을 때, 세부품목명 일치하는게 여러 개일 경우 인증분야로 구분해서 찾도록 처리
        			if(nRow != -1)
        			{
        				for(var i= nRow; i<this.dsList.getRowCount(); i++)
        				{
        					if(this.dsList.getColumn(i, "CERT_FLD_CD") == this.fv_sWorkCertFldCd){
        						nRow = i;
        						break;
        					}
        				}
        			}else nRow = 0;

        			this.dsList.set_rowposition(nRow);

        			this.fv_sWorkDetailGdsNm ="";
        			this.fv_sWorkCertFldCd = "";

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
        	this.dsList.set_enableevent(false);
        	this.dsList.clearData();
        	this.dsList.set_enableevent(true);

        	//기간기관인 경우 조회조건 세팅
        	if(this.fv_sMenuCd == "M0042")
        	{
        		var sTestInstCd = this.fv_objGdsUserInfo.getColumn(0, "TEST_INST_CD");
        		this.dsSearch.setColumn(0, "SEARCH_TEST_INST_CD", sTestInstCd);
        	}

        	if(take.isEmpty(this.dsList.getColumn(0,"GDS_CD"))) this.divDetail.form.staTitle02.set_text("시험항목 목록");

        	take.tranSelect(this, "Search", "basicInfo.gdsSelect", "dsSearch ", "dsList", "", "fnCallback");
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
        	if (!take.isDsModified(this.dsList) && !take.isDsModified(this.dsTestPosblInst) && !take.isDsModified(this.dsRefe))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	//품목정보 저장 전 벨리데이션 체크
            var bRtn = takeval.checkComp(
        						this,                          		 //현재 Form Object
        						this.divDetail.form.gridMain,  //벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
        						"cellImport",                 		 //필수 입력 css값
        						"",                						 //성공 Call Back 함수
        						true);                          		 //동기 여부

        	if(!bRtn) return false;

        	//기준치 저장 전 벨리데이션 체크
        	bRtn = takeval.checkComp(
        				  this,                           			//현재 Form Object
        				  this.divDetail.form.grdRefe,  	//벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
        				  "cellImport",                   		//필수 입력 css값
        				  "",                						//성공 Call Back 함수
        				  true);                          		//동기 여부

        	if(!bRtn) return false;

        	//입력인 경우 동일한 기준치의 날짜가 존재하는지 확인
        	for(var i = 0; i < this.dsRefe.rowcount; i++)
        	{
        		var strAplcnYmd = this.dsRefe.getColumn(i, "APLCN_YMD");
        		var checkColumn = "APLCN_YMD=='" + strAplcnYmd + "'";

        		if(this.dsRefe.getCaseCount(checkColumn) > 1)
        		{
        			take.alert(this, "info", "동일한 날짜 정보가 존재합니다."  );

        			this.dsRefe.set_rowposition(i);
        			//해당 컬럼에 위치시키기
        			this.divDetail.form.grdRefe.setCellPos(1);
        			this.divDetail.form.grdRefe.showEditor(true);

        			return false;
        		}
        	}

        	// 시험가능기관 처리
        	if (take.isDsModified(this.dsTestPosblInst))
        	{
        		for(var i = (this.dsTestPosblInst.rowcount-1); i >= 0; i--)
        		{
        			if(this.dsTestPosblInst.getColumn(i, "CHK") == "0") this.dsTestPosblInst.deleteRow(i);
        		}
        	}

        	//기준치 처리
        	if (take.isDsModified(this.dsRefe))
        	{
        		for(var i = (this.dsRefe.rowcount-1); i >= 0; i--)
        		{
        			if(this.dsRefe.getColumn(i, "CHK") == "1") this.dsRefe.deleteRow(i);
        		}
        	}

        	this.dsSecrInst = this.dsList;

        	var sParam = "sNameSpace=basicInfo.gdsInsert|basicInfo.gdsUpdate|basicInfo.gdsDelete," +
        											"basicInfo.secrInstUpdate|basicInfo.secrInstUpdate|basicInfo.secrInstUpdate," +
        											"basicInfo.testPosblInstInsert|basicInfo.testPosblInstInsert|basicInfo.testPosblInstDelete," +
        											"basicInfo.aplcnRefeInsert|basicInfo.aplcnRefeUpdate|basicInfo.aplcnRefeDelete" +
        						" sDataset=dsList|dsSecrInst|dsTestPosblInst|dsRefe";

        	// 세부품목 정보 현재 행- 세부품목명 값/인증분야 값
        	this.fv_sWorkDetailGdsNm	= this.dsList.getColumn(this.dsList.rowposition, "DETAIL_GDS_NM");
        	this.fv_sWorkCertFldCd 		= this.dsList.getColumn(this.dsList.rowposition, "CERT_FLD_CD");
        	// 가능시험항목 정보 현재 행
        	this.fv_nTetRow = this.dsTestItemList.rowposition;

        	this.dsTestItemList.set_enableevent(false);

        	take.transaction(this, "Save", "SVC_LOC::doore/saveList.do", "dsList=dsList:U dsSecrInst=dsSecrInst:U dsTestPosblInst=dsTestPosblInst:U dsRefe=dsRefe:U","", sParam, "fnCallback");
        };

        /**
         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
        	var strCertFldCd = this.divSearch.form.cboCertFldCd.value;

        	this.fv_gdsInfo = "";

        	var arrParam = {
        			sCertFldCd : strCertFldCd
        				};

        	take.openPopup(this, "addGdsCd", "biz::bas/BAS010P03.xfdl", arrParam, "resizable=true",
        		function(){
        			if(!take.isEmpty(this.fv_gdsInfo.CODE_ID))
        			{
        				var objDs = this.dsList;       //행 추가할 데이터셋
        				var nRow = 0;
        				//넘어온 Row값이 없으면 : 공통 등록 버튼을 통해 호출된 경우
        				if(this.divDetail.form.gridMain.currentrow > -1) nRow = objDs.insertRow(this.divDetail.form.gridMain.currentrow + 1);
        				else nRow = objDs.addRow();

        				this.dsList.setColumn(nRow, "GDS_CD", this.fv_gdsInfo.CODE_ID);
        				this.dsList.setColumn(nRow, "CERT_FLD_CD", this.fv_gdsInfo.REF1);
        				this.dsList.setColumn(nRow, "CERT_KND_CD", this.fv_gdsInfo.REF2);
        				this.dsList.setColumn(nRow, "REF3", this.fv_gdsInfo.REF3);
        				this.dsList.setColumn(nRow, "USE_YN", this.fv_gdsInfo.USE_YN);
        			}
        		}
        	);
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
            var delRow = this.dsList.rowposition;

            if(delRow < 0)
        	{
                alert("선택된 항목이 없습니다.");
                return;
            }

        	// row 상태가 insert 인경우만 삭제 가능
        	if(this.dsList.getRowType(delRow) == 2) this.dsList.deleteRow(delRow);
        	else
        	{
        		take.alert(this, "Info", "저장된 행은 삭제 할 수 없습니다.\n\n사용여부를 'N'으로 변경하여 주십시오.");
        		return false;
        	}
        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/

        /**
         * 인증종류 combo 세팅
         */
        this.divDetail_gridMain_oncellclick = function(obj,e)
        {
        	var strColNm 		= this.divDetail.form.gridMain.getCellProperty("head", e.col, "text");
        	var strCertFldCd 	= this.dsList.getColumn(e.row,"CERT_FLD_CD");

        	if(strColNm == "인증종류")
        	{
        		this.dsCertKndCdGrid.filter("");
        		// 전기용품 : 01, 생활용품 : 02, 어린이제품 : 03
        		if(strCertFldCd == "03") this.dsCertKndCdGrid.filter("REF1 == '" + strCertFldCd + "'" );
        		else if(strCertFldCd == "02") this.dsCertKndCdGrid.filter("REF2 == '" + strCertFldCd + "'" );
        		else if(strCertFldCd == "01") this.dsCertKndCdGrid.filter("REF3 == '" + strCertFldCd + "'" );
        	}
        	else if(strColNm == "품목명")
        	{
        		this.dsGdsCd.filter("REF1 == '" + this.dsList.getColumn(e.row,"CERT_FLD_CD") + "' && REF2=='" + this.dsList.getColumn(e.row,"CERT_KND_CD") + "'");
        	}
        };

        /**
         * 엑셀다운로드 버튼 클릭 이벤트
         */
        this.btnExcelDownload_onclick = function(obj,e)
        {
        	gFnExcelDown (this, this.divDetail.form.gridMain, "세부품목_" + this.divSearch.form.cboCertFldCd.text);
        };

        /* 엑셀 업로드 클릭 이벤트 */
        this.btnExcelUpload_onclick = function(obj,e)
        {
        	gFnExcelUpload(this, this.dsExcelUpload, 2, this.fnExcelImport_onsuccess, this.fnExcelImport_onerror);
        };

        /* 시험항목 선택 클릭 이벤트 */
        this.divDetail_btnAddTestItem_onclick = function(obj,e)
        {
        	// 품목정보에 수정중인 내용이 있는지 체크
        	if (take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "품목정보를 저장 후 작업하여 주십시오.");
                return false;
            }

        	var sCertFldCd 	= this.dsList.getColumn(this.dsList.rowposition, "CERT_FLD_CD");
        	var sCertKndCd 	= this.dsList.getColumn(this.dsList.rowposition, "CERT_KND_CD");
        	var sGdsCd 		= this.dsList.getColumn(this.dsList.rowposition, "GDS_CD");
        	var sDetailGdsId = this.dsList.getColumn(this.dsList.rowposition, "DETAIL_GDS_ID");

        	var arrParam = {
        				sCertFldCd 		: sCertFldCd,
        				sCertKndCd 		: sCertKndCd,
        				sGdsCd				: sGdsCd,
        				sDetailGdsId    	: sDetailGdsId
        				};

        	take.openPopup(this, "addTestItemCd", "biz::bas/BAS010P01.xfdl", arrParam, "resizable=true",
        		function(){
        			// 시험항목 조회
        			this.dsTestItemList.clearData();
        			var sGdsId = this.dsList.getColumn(this.dsList.rowposition, "DETAIL_GDS_ID");
        			this.dsSearch.setColumn(0, "SEARCH_DETAIL_GDS_ID", sGdsId);

        			take.tranSelect(this, "SearchTestItemList"+sGdsId, "basicInfo.detailGdsTestSelect", "dsSearch", "dsTestItemList", "", function(){});
        		}
        	);
        };

        /* 품목코드 등록 */
        this.divDetail_btnAddGds_onclick = function(obj,e)
        {
        	var sCertFldCd = this.divSearch.form.cboCertFldCd.value;

        	var arrParam = {
        				sCertFldCd : sCertFldCd
        				};

        	take.openPopup(this, "addGdsCd", "biz::bas/BAS010P02.xfdl", arrParam, "resizable=true", function(){});
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /*
        	excel 업로드 성공 후처리
        */
        this.fnExcelImport_onsuccess = function(obj,  e)
        {
        	var nCnt = this.dsExcelUpload.rowcount;
            this.dsList.clearData();

        	var strMapp =  gFnGetMappingString(this.divDetail.form.gridMain);

        	for(var i = 0; i < nCnt; i++)
        	{
        		var nRow = this.dsList.addRow();
        		this.dsList.copyRow(nRow, this.dsExcelUpload, i, strMapp);

        		var sGdsCd 		= this.dsList.getColumn(nRow, "GDS_CD");
        		var sCertFldCd 	= gFnGetCodeId(this.dsCertFldCd, this.dsList.getColumn(nRow, "CERT_FLD_CD"));
        		var sCertKndCd 	= gFnGetCodeId(this.dsCertKndCd, this.dsList.getColumn(nRow, "CERT_KND_CD"));

        		//품목코드 세팅 : CODE = GDS_CD, REF1 = CERT_FLD_CD, REF2 = CERT_KND_CD
        		this.dsGdsCdGrid.filter("");
        		this.dsGdsCdGrid.filter("REF1 == '" + sCertFldCd + "' && REF2 == '" + sCertKndCd + "' && NAME == '" + sGdsCd + "'");
        		if(this.dsGdsCdGrid.rowcount == 1)
        		{
        			this.dsList.setColumn(nRow, "CERT_FLD_CD", this.dsGdsCdGrid.getColumn(0, "REF1"));
        			this.dsList.setColumn(nRow, "CERT_KND_CD", this.dsGdsCdGrid.getColumn(0, "REF2"));
        			this.dsList.setColumn(nRow, "GDS_CD", this.dsGdsCdGrid.getColumn(0, "CODE"));
        		}
        		else
        		{
        			this.dsList.setColumn(nRow, "GDS_CD", "");
        			this.dsList.setColumn(nRow, "CERT_FLD_CD", "");
        			this.dsList.setColumn(nRow, "CERT_KND_CD", "");
        		}
        		this.dsGdsCdGrid.filter("");
        	}
        	// 데이터셋 처리 : CODE_KEY가 있는 경우 update, 없는 경우 insert
        	this.dsList.set_updatecontrol(false);
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(take.isEmpty(this.dsList.getColumn(i, "DETAIL_GDS_ID"))) this.dsList.setRowType(i, "I");
        		else this.dsList.setRowType(i, "U");
        	}
        	this.divDetail.form.gridMain.selectRow(0);
        }

        /*
        	excel 업로드 실패 후처리
        */
        this.fnExcelImport_onerror = function(obj,  e)
        {
        	take.alert(this, "info", "Excel 업로드에 실패 하였습니다.");
        }

        /*
        	세부품목정보 rowposchaged 이벤트
        */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	gFnTrace("dsList_onrowposchanged : this.fv_nWorkRow = " + this.fv_nWorkRow + "  this.dsList.rowposition = " + this.dsList.rowposition + "  this.fv_nTetRow = " + this.fv_nTetRow) ;

        	var sGdsId	= this.dsList.getColumn(e.newrow, "DETAIL_GDS_ID");
        	var sGdsCd	= this.dsList.getColumn(e.newrow, "GDS_CD");
        	this.dsSearch.setColumn(0, "SEARCH_DETAIL_GDS_ID", sGdsId);
        	this.dsSearch.setColumn(0, "SEARCH_GDS_CD", sGdsCd);

        	if(take.isEmpty(sGdsId))
        	{
        		this.dsTestPosblInst.clearData();
        		this.dsTestItemList.clearData();
        		this.dsRefe.clearData();
        		return false;
        	}
        	//시험가능기관 조회
        	this.dsTestPosblInst.clearData();
        	take.tranSelect(this, "SearchTestPosblInst"+sGdsId, "basicInfo.testPosblInstSelect", "dsSearch", "dsTestPosblInst", "", "fnCallback");

        	// 시험항목 조회
        	this.dsTestItemList.clearData();
        	this.dsRefe.clearData();
        	take.tranSelect(this, "SearchTestItemList"+sGdsId, "basicInfo.detailGdsTestSelect", "dsSearch", "dsTestItemList", "",
        		function()
        		{
        			this.dsTestItemList.set_enableevent(true);
        			this.dsTestItemList.set_rowposition(this.fv_nTetRow);
        			this.fv_nWorkRow = 0;
        			this.fv_nTetRow = 0;

        			if(take.isEmpty(this.dsTestItemList.getColumn(this.dsTestItemList.rowposition,"TEST_ID")))
        			{
        				this.dsRefe.clearData();
        				return false;
        			}

        			if (this.dsTestItemList.rowcount > 0)
        			{
        				var nRowCount = this.dsTestItemList.rowcount.toLocaleString("ko-KR");
        				this.divDetail.form.staTitle02.set_text("시험항목 목록 ("+nRowCount+"건)");

        				//기준치 조회
        				this.dsRefe.clearData();
        				take.tranSelect(this, "SearchRefe"+sGdsId, "basicInfo.aplcnRefeSelect", "dsSearch", "dsRefe", "", "fnCallback");
        			}
        			else {
        				this.divDetail.form.staTitle02.set_text("시험항목 목록");
        			}
        		});
        };

        /*
        	가능시험항목 onrowposchanged 이벤트
        */
        this.dsTestItemList_onrowposchanged = function(obj,e)
        {
        	this.fnSearchRefe();
        };

        /*
        	기준치 조회
        */
        this.fnSearchRefe = function()
        {
        	this.dsRefe.clearData();

        	this.dsSearch.setColumn(0, "TEST_ID", this.dsTestItemList.getColumn(this.dsTestItemList.rowposition, "TEST_ID"));
        	this.dsSearch.setColumn(0, "DETAIL_GDS_ID", this.dsTestItemList.getColumn(this.dsTestItemList.rowposition, "DETAIL_GDS_ID"));

        	if(this.dsTestItemList.rowcount == 0) return false;

        	take.tranSelect(this, "SearchREFE", "basicInfo.aplcnRefeSelect", "dsSearch", "dsRefe", "", "fnCallback");
        }

        /*
        	코드그룹 검색조건 엔터 값 조회
        */
        this.divSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
        	}
        };

        /*
        	기준치 행 추가
        */
        this.divDetail_btnAddRefe_onclick = function(obj,e)
        {
        	if(this.dsList.rowcount == 0)
        	{
        		take.alert(this,"Info","기준치를 적용할 세부품목이 없습니다.");
        		return false;
        	}

        	if(this.dsTestItemList.rowcount == 0)
        	{
        		take.alert(this,"Info","기준치를 적용할 시험항목이 없습니다.");
        		return false;
        	}

        	var nRow 			= 0;
        	var sTestId 		= this.dsTestItemList.getColumn(this.dsTestItemList.rowposition, "TEST_ID");
        	var sDetailGdsId = this.dsList.getColumn(this.dsList.rowposition, "DETAIL_GDS_ID");

        	nRow = this.dsRefe.insertRow(nRow);
        	gFn_getDbValue(this, function(rtnValue) {this.dsRefe.setColumn(0, "APLCN_YMD", (rtnValue.resultData));}, "Doore.selectToDay");

        //  	if(this.divDetail.form.grdRefe.currentrow > -1)
        // 	{
        // 		nRow = this.dsRefe.insertRow(nRow);
        // 		gFn_getDbValue(this, function(rtnValue) {this.dsRefe.setColumn(0, "APLCN_YMD", (rtnValue.resultData));}, "Doore.selectToDay");
        // 	}
        // 	else
        // 	{
        // 		nRow = this.dsRefe.addRow();
        // 		gFn_getDbValue(this, function(rtnValue) {this.dsRefe.setColumn(0, "APLCN_YMD", (rtnValue.resultData));}, "Doore.selectToDay");
        // 	}

        	this.dsRefe.setColumn(nRow, "TEST_ID", sTestId);
        	this.dsRefe.setColumn(nRow, "DETAIL_GDS_ID", sDetailGdsId);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtGdsNm.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divDetail.form.btnSpliter.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.gridMain.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.gridMain.addEventHandler("oncellclick",this.divDetail_gridMain_oncellclick,this);
            this.divDetail.form.gridTestItem.addEventHandler("oncellclick",this.fnSearchRefe,this);
            this.divDetail.form.btnAddTestItem.addEventHandler("onclick",this.divDetail_btnAddTestItem_onclick,this);
            this.divDetail.form.gridInst.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.btnAddGds.addEventHandler("onclick",this.divDetail_btnAddGds_onclick,this);
            this.divDetail.form.btnDownExcel.addEventHandler("onclick",this.btnExcelDownload_onclick,this);
            this.divDetail.form.btnUploadExcel.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.divDetail.form.btnAddRefe.addEventHandler("onclick",this.divDetail_btnAddRefe_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsTestItemList.addEventHandler("onrowposchanged",this.dsTestItemList_onrowposchanged,this);
            this.dsDetailGds.addEventHandler("onrowposchanged",this.dsDetailGds_onrowposchanged,this);
            this.dsSecrInst.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSecrInst.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
        };
        this.loadIncludeScript("BAS010M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
