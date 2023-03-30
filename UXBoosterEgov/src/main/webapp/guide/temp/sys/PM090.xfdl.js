(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM090");
            this.set_titletext("대시보드_대시보드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiLanguageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_LANG_TXT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDetailUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDashType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDashList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MINIMUM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RELOAD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_PROG\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_PROG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NAMESPACE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REFERENCE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLEBAR_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDetailDashType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDashTypeT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("대시보드 유형");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDashNameT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("대시보드명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_visible("true");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDashType","staDashTypeT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCboDashType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDashName","staDashNameT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_01","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00","1025","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDashList","0","26","320",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_binddataset("dsDashList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"101\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"대시보드 ID\"/><Cell col=\"2\" text=\"대시보드명\"/><Cell col=\"3\" text=\"유형\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:DASH_CD\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:DASH_NM\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:DASH_TYPE_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","459","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34","459","56",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static36","459","116",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleBarT","741","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("타이틀바 생성여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDetailMenu","340","116","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("상세화면 메뉴");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDashTypeT","340","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("대시보드 유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","459","312","283","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMultiLanguageT","340","353",null,"21","151",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("다국어 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","860","312",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMultiLanguage",null,"353","100","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("다국어매핑");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboDashType","467","61","168","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboDetailDashType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","459","86",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgramT","340","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuListT","0","0","320","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("대시보드 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static02","320","26","20",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("20");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_opacity("0.3");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","340","379",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMultiLanguageInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:LANG_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ML_LANG_TXT\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDetailTitleT","340","0",null,"21","139",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("대시보드 상세");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDashNmT","340","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("대시보드명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProgram","467","91","139","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnProgram","edtProgram:3","91","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search04");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDescT","340","176","120","107",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static41","459","176",null,"107","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNmT","340","282","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","459","282","283","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","741","282","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","860","282",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNmT","340","312","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","741","312","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","467","183",null,"93","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staReloadCntT","741","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("새로고침 주기");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","868","31","169","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboDetailUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","741","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuParamT","340","146","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("파라메터");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","459","146",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuParam","529","146",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnParam","467","151","46","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_plus01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgramCd","533","96","37","15",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDetailMenu","467","121","139","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDetailMenu","edtDetailMenu:3","121","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_search04");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuCd","533","126","37","15",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMakeDash","btnProgram:3","91","91","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_text("대시보드 생성");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staManual","741","116","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("42");
            obj.set_text("메뉴얼");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staManualLink","868","116","105","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("43");
            obj.set_text("미등록");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkMinimumYn","cboDashType:3","61","91","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("44");
            obj.set_text("최소화여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtReloadCnt","868","91","142","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("45");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","edtReloadCnt:3","91","16","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("46");
            obj.set_text("초");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDashNm","467","31","267","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("47");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkTitleBarYn","868","61","91","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("48");
            obj.set_text("타이틀바 생성");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
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
            obj = new BindItem("item0","divSearch.form.cboProjectNm","value","dsSearch","PROJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboDashType","value","dsSearch","DASH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtDashName","value","dsSearch","DASH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.cboDashType","value","dsDashList","DASH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.cboUseYn","value","dsDashList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.edtReloadCnt","value","dsDashList","RELOAD_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.txtDesc","value","dsDashList","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.staRegNm","text","dsDashList","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.staRegDt","text","dsDashList","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.staModNm","text","dsDashList","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.staModDt","text","dsDashList","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtDashNm","value","dsDashList","DASH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.staProgramCd","text","dsDashList","PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.edtProgram","value","dsDashList","PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.staMenuCd","text","dsDashList","DETAIL_PROG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.edtDetailMenu","value","dsDashList","DETAIL_PROG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.chkMinimumYn","value","dsDashList","MINIMUM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.chkTitleBarYn","value","dsDashList","TITLEBAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM090.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    sys > pm090
        *  @FileName    pm090.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.09.07
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.09.07      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sGdsAdminYn   = null; 	 // gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = null;	 // gds _ 프로젝트코드

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM090_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	 // gds _ 관리자권한 여부
        		this.fv_sGdsProjectCd = UXBooster.gdsUserInfo.getColumn(0, "PROJECT_CD");	 // gds _ 프로젝트코드

                this.fnInit();
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
        this.fnInit = function()
        {
        	var objDiv;
        	this.dsDashList.clearData();

        	objDiv = this.divSearch.form;

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	objDiv.cboProjectNm.set_value(this.fv_sGdsProjectCd);
        	if(this.fv_sGdsAdminYn == "Y"){
        		objDiv.cboProjectNm.set_readonly(false);
        	}

        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

        	//필수 검색조건 추가
        	takeval.add
        	(
                this,
                "Search",                  //벨리데이션 그룹 아이디(그룹별로 추가할 수 있음)
                objDiv.cboProjectNm,       //체크 대상 컴포넌트
                objDiv.staProjectNmT.text, //체크할 명칭(ex:"사용여부")
                "value",                   //체크대상 (컴포넌트:Properti, Grid:Cell, Dataset:Column 명)
                true,                      //null check
                "string",                  //타입(string, number, date등)체크
                "",                        //체크수(문자는 자릿수, 숫자는 구간[form,to])
                ""
        	);                      	   //체크 완료후 Call Back function 명(생략가능)

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
            if (take.nvl(sTranId, "")=="") sTranId = "dashInfoList";

        	//벨리데이션 체크
        	if(!takeval.check(this, "Search")) return;

        	this.dsDashList.clearData();
        	//this.divDetail.form.staMenuListT.set_text("대시보드 목록");
            take.tranSelect
            (
                this,
                "dashInfoList",
                "DashManagement.dashInfoList",
                "dsSearch",
                "dsDashList",
                "",
                "fnCallBack"
            )
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
            if (take.nvl(sTranId, "")=="") sTranId = "dashInfoSave";
            var bRowChange;

        	if (   !take.isDsModified(this.dsDashList)
        		&& !take.isDsModified(this.dsMultiLanguageInfo)
        		)
        	{
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        	if(!this.fnValidation()) return;

        	//bRowChange = take.confirm(this, "question", "저장 하시겠습니까?");
        	bRowChange = take.confirm(this, "question", "MS00000072");
        	if (bRowChange)
        	{
        		take.tranSave
        		(
        			this,
        			"dashInfoSave",
        			"DashManagement.dashInfoSave",
        			"dsDashList",
        			"",
        			"PROJECT_CD='"+this.fv_sGdsProjectCd+"'",
        			"fnCallBack"
        		);
        	}
        }

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMenuList";

        	var addRow;

        	addRow = this.dsDashList.addRow();
        	this.dsDashList.setColumn(addRow, "USE_YN", "Y");
            this.dsDashList.setColumn(addRow, "TITLEBAR_YN", "Y");
        	this.divDetail.form.cboDashType.set_index(0);

        }

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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdDashList";

            var objDs;
        	var nRow;
        	var sNm;
        	var bRowChange;

        	objDs = this.dsDashList;
        	nRow  = objDs.rowposition;
        	sNm   = objDs.getColumn(nRow, "DASH_NM");

        	if(objDs.rowcount <= 0){
        		take.alert(this, "Info", "MS00000011", {text:this.divDetail.form.staMenuListT.text});
        		//take.alert(this, "info", "메뉴 목록이 없습니다.");
        		return;
        	}
        	bRowChange = take.confirm(this, "question", "MS00000071");
        	//bRowChange = take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sNm, text : "삭제"});
        	if(bRowChange)
        	{
        		this.fnDashInfoDelete();
        	}
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /*
        * divDetail_btnProgram_onclick : 프로그램선택 팝업 오픈
        */
        this.divDetail_btnProgram_onclick = function(obj,e)
        {
        	var objDs;
        	var nRow;
        	var sCd, sNm;

        	objDs = this.dsDashList;
        	nRow  = objDs.rowposition;

        	// 프로그램선택 팝업 오픈
        	take.openPopup(this, "PM090P01", "biz::sys/PM090P01.xfdl", "", "",
        		function(sId, sRtn)
        		{
        			if (take.nvl(sRtn, "")!="")
        			{
        				sCd = sRtn.split(",")[0];
        				sNm = sRtn.split(",")[1];

        				this.fv_sProgramCd = sCd;

        				objDs.setColumn(nRow, "PROGRAM_CD", sCd);
        				objDs.setColumn(nRow, "PROGRAM_NM", sNm);
        			}
        		},
        	false);
        };

        /*
        * divDetail_btnParam_onclick : 파라메터 팝업 오픈
        */
        this.divDetail_btnParam_onclick = function(obj,e)
        {
        	var sProgramCd;
        	var objDs;
        	var nRow;

        	objDs = this.dsDashList;
        	nRow  = objDs.rowposition;
        	sProgramCd = take.nvl(this.divDetail.form.staProgramCd.text, "");

        	AgrKey = {sProgramCd:sProgramCd};
        	// 파라메터 팝업 오픈 PM030P04
        	take.openPopup(this, "PM030P04", "biz::sys/PM030P04.xfdl", AgrKey, "",
        		function(sId, sRtn)
        		{
        			if (take.nvl(sRtn, "")!="")
        			{
        				objDs.setColumn(nRow, "DASH_PARAM", sRtn);
        			}
        		}
        	);
        };

        /*
        * divDetail_btnDetailMenu_onclick : 상세연결 메뉴 팝업 오픈
        */
        this.divDetail_btnDetailMenu_onclick = function(obj,e)
        {
        	var objDs;
        	var sCd, sNm;
        	var nRow;

        	objDs = this.dsDashList;
        	nRow  = objDs.rowposition;
        	// 상세 메뉴 선택 팝업 오픈
        	take.openPopup(this, "PM090P02", "biz::sys/PM090P02.xfdl", "", "",
        		function(sId, sRtn)
        		{
        			if (take.nvl(sRtn, "")!="")
        			{
        				sCd = sRtn.split(",")[0];
        				sNm = sRtn.split(",")[1];

        				objDs.setColumn(nRow, "DETAIL_PROG"   , sCd);
        				objDs.setColumn(nRow, "DETAIL_PROG_NM", sNm);
        			}
        		},
        	false);
        };

        /*
        * divDetail_btnMultiLanguage_onclick : 다국어매팅 버튼 클릭
        */
        this.divDetail_btnMultiLanguage_onclick = function(obj,e)
        {
        	take.openPopup(this, "addMultiLanguage", "biz::sys/OM010P06.xfdl", "", "", "fnPopCallback", false);
        };

        /*
        * divDetail_btnMakeDash_onclick : 대시보드 생성 버튼 클릭
        */
        this.divDetail_btnMakeDash_onclick = function(obj,e)
        {

        };

        /*
        * divDetail_staManualLink_onclick : 메뉴얼 버튼 클릭
        */
        this.divDetail_staManualLink_onclick = function(obj,e)
        {
        	var objDs;
        	var nRow;
        	var sProjectCd, sTemplateCd, sManualTxt;

        	objDs 		= this.dsDashList;
        	nRow		= objDs.rowposition
        	sProjectCd  = this.divSearch.form.cboProjectNm.value;
         	sTemplateCd = "";
        	sManualTxt  = take.nvl(objDs.getColumn(nRow, "MANUAL_TXT"), "");

         	AgrKey = {sProjectCd:sProjectCd, sManualTxt:sManualTxt};

        	take.openPopup(this, "OM010P07", "biz::sys/OM010P07.xfdl", AgrKey, "",
        		function(sId, sRtn)
        		{
        			if(take.nvl(sRtn, "")!="")
        			{
        				objDs.setColumn(nRow, "MANUAL_TXT", sRtn);
        				this.divDetail.form.staManualLink.set_text(take.getWord(this, "ML00000026"));
        			}
        		},
        	false);
        };

        /*
        * divDetail_grdDashList_onselectchanged : 메인 그리드 ROW 변경 이벤트
        */
        this.divDetail_grdDashList_onselectchanged = function(obj,e)
        {
        	var objDs, objDivDetail;
        	var nRow;
        	var sMnualTxt;

        	objDivDetail = this.divDetail.form;
        	objDs        = this.dsDashList;
        	nRow         = objDs.rowposition;
        	sMnualTxt    = take.nvl(objDs.getColumn(nRow, "MANUAL_TXT"), "");

        	if(sMnualTxt == ""){
        		objDivDetail.staManualLink.set_text(take.getWord(this, "ML00000027"));
        	} else {
        		objDivDetail.staManualLink.set_text(take.getWord(this, "ML00000026"));
        	}
        };

        /*
        * divSearch_edtDashName_onkeyup : 검색조건 대시보드명 엔터 값
        */
        this.divSearch_edtDashName_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch("dashMenuList");
        	}
        };

        /*
        * divSearch_Combo_onitemchanged : 검색조건 콤보 아이템 변경시 조회
        */
        this.divSearch_Combo_onitemchanged = function(obj,e)
        {
        	this.fnSearch("dashMenuList");
        };

        /*
        * dsDashList_canrowposchange : 마스터 데이터셋 로우 변경될 때 이벤트
        */
        this.dsDashList_canrowposchange = function(obj,e)
        {
        	var bRowChange;
        	var nRowType;
        	var nRow;
        	var nPreRow;

        	nRow     = obj.rowposition;
        	nPreRow  = e.oldrow;
        	nRowType = obj.getRowType(nRow);

        	if(nRowType!=1 && nRowType!=0){
        		bRowChange = take.confirm(this, "question", "MS00000074");
        		//take.confirm(this, "String", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?");

        		if(!bRowChange){
        			return false;
        		}else {
        			obj.reset();
        		}
        	}
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	// 00009 검색조건  사용유무 	   (dsCboUseYn)
        	// 00009 디테일    사용유무 	   (dsCboDetailUseYn)
        	// 00018 검색조건  대시보드유형 (dsCboDashType)
        	// 00018 디테일    대시보드유형 (dsCboDetailDashType)

        	var arrGroupCodes = ["00009", "00009", "00018", "00018"];
        	var arrOutDs 	  = ["dsCboUseYn", "dsCboDetailUseYn", "dsCboDashType", "dsCboDetailDashType"];
        	var arrHeaderType = ["ALL", "", "ALL", ""];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        		function(sId, nErrCd, sErrMsg)
        		{
        			var objDiv = this.divSearch.form;
        			if (this.dsCboUseYn.rowcount > 0){
        				objDiv.cboUseYn.set_index(0);
        			}
        			if (this.dsCboDashType.rowcount > 0){
        				objDiv.cboDashType.set_index(0);
        			}

        			// 프로젝트 코드셀렉트
        			take.tranSelect
        			(
        				this,
        				"projectInfoCode",
        				"ProjectManagement.projectInfoCode",
        				"",
        				"dsCboProjectCd",
        				"",
        				function(sId, nErrCd, sErrMsg)
        				{
        					var objDs = this.dsCboProjectCd;
        					if (objDs.rowcount>0)
        					{
        						var nRow = objDs.insertRow(0)
        						objDs.setColumn(nRow, "CODE", "");
        						objDs.setColumn(nRow, "NAME", take.getWord(this, "MS00000079"));
        					}

        					this.fnSearch("dashInfoList");
        				}
        			)
        		});
        };

        /**
         * fnValidation : 벨리데이션
         * @example this.fnValidation();
         */
        this.fnValidation = function ()
        {
        	var objDiv     = this.divDetail.form;
        	var sDashNm    = take.nvl(objDiv.edtDashNm.value, "");
        	var sDashType  = take.nvl(objDiv.cboDashType.value, "");
        	var sProgramCd = take.nvl(objDiv.staProgramCd.text, "");
        	var sUseYn     = take.nvl(objDiv.cboUseYn.value, "");

        	if(sDashNm == ""){
        		take.alert(this, "Info", "MS00000014", {text:this.divDetail.form.staDashNmT.text});
        		//take.alert(this, "info", "대시보드명을 입력해주세요.");
        		objDiv.edtDashNm.setFocus();
        		return false;
        	}

        	if(sDashType == ""){
        		take.alert(this, "Info", "MS00000014", {text:this.divDetail.form.staDashTypeT.text});
        		//take.alert(this, "info", "대시보드를 입력해주세요.");
        		objDiv.sDashType.setFocus();
        		return false;
        	}

        	if(sProgramCd == ""){
        		take.alert(this, "Info", "MS00000014", {text:this.divDetail.form.staProgramT.text});
        		//take.alert(this, "info", "프로그램을 입력해주세요.");
        		return false;
        	}

        	if(sUseYn == ""){
        		take.alert(this, "Info", "MS00000014", {text:this.divDetail.form.staUseYnT.text});
        		//take.alert(this, "info", "사용여부를 입력해주세요.");
        		objDiv.sUseYn.setFocus();
        		return false;
        	}

        	return true;
        }

        /**
         * fnDashInfoDelete : 대시보드 삭제
         * @example this.fnDashInfoDelete();
         */
        this.fnDashInfoDelete = function ()
        {
        	var objDs = this.dsDashList;
        	var nRow  = objDs.rowposition;
        	objDs.set_enableevent(false);
        	objDs.set_updatecontrol(false);
        	objDs.setRowType(nRow, "D");
        	objDs.set_updatecontrol(true);
        	objDs.set_enableevent(true);

        	take.tranSave
        	(
        		this,
        		"dashInfoListDelete",
        		"DashManagement.dashInfoList",
        		"dsDashList",
        		"",
        		"PROJECT_CD='"+this.fv_sGdsProjectCd+"'",
        		"fnCallBack"
        	);
        };

        /**
        * fnValCallBack : validation callback
        * @param  : objComp      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnValCallBack = function(objComp)
        {
            //벨리데이션 성공 후 스크립트
            return;
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallBack : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallBack = function(sId, nErrCd, sErrMsg)
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
                case "dashMenuList" : 		//조회 콜백
        			var objDs 	     = this.dsDashList;
        			var objDivDetail = this.divDetail.form;
        			var nRowCount    = objDs.rowcount;

        			if (nRowCount > 0){
        				//objDivDetail.staMenuListT.set_text("대시보드 목록 ("+nRowCount+"건)");
        				objDivDetail.grdDashList.selectRow(0);
        			} else {
        				//objDivDetail.staMenuListT.set_text("대시보드 목록 (0건)");
        			}
                    break;

                case "dashInfoSave" :  		//저장 콜백
        			this.fnInit();
                    break;

                case "dashInfoListDelete" : //삭제 콜백
                    this.fnInit();
                    break;

                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }

        this.fnPopCallback = function (sId, nReturnVal)
        {
        	switch(sId) {
        		case "addMultiLanguage":
        			var objDs = this.dsDashList;
        			var nRow  = objDs.rowposition;

        			//팝업이 닫히면서 nReturnVal을 통해 값을 받을 수 있습니다
        			if(take.nvl(nReturnVal, "") != "") {
        				nReturnVal = nReturnVal.split(",")[0];
        				objDs.setColumn(nRow, "ML_CD", nReturnVal);
        			} else return;

        			// 선택된 row의 다국어 정보 조회
        			this.dsMultiLanguageInfo.clearData();
        			take.tranSelect(this, "multilanguageDetailList", "SystemCommon.multilanguageDetailList", "", "dsMultiLanguageInfo", "sMlCd='" + nReturnVal + "'", "fnCallback");

        			break;
        		default:
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM090_onload,this);
            this.divSearch.form.cboProjectNm.addEventHandler("onitemchanged",this.divSearch_Combo_onitemchanged,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_Combo_onitemchanged,this);
            this.divSearch.form.cboDashType.addEventHandler("onitemchanged",this.divSearch_Combo_onitemchanged,this);
            this.divSearch.form.edtDashName.addEventHandler("onkeyup",this.divSearch_edtDashName_onkeyup,this);
            this.divDetail.form.grdDashList.addEventHandler("oncellclick",this.divDetail_grdMenuList_oncellclick,this);
            this.divDetail.form.grdDashList.addEventHandler("onselectchanged",this.divDetail_grdDashList_onselectchanged,this);
            this.divDetail.form.btnMultiLanguage.addEventHandler("onclick",this.divDetail_btnMultiLanguage_onclick,this);
            this.divDetail.form.cboDashType.addEventHandler("onitemchanged",this.divDetail_cboMenuType_onitemchanged,this);
            this.divDetail.form.staMenuListT.addEventHandler("onclick",this.divDetail_staMenuListT_onclick,this);
            this.divDetail.form.btnProgram.addEventHandler("onclick",this.divDetail_btnProgram_onclick,this);
            this.divDetail.form.btnParam.addEventHandler("onclick",this.divDetail_btnParam_onclick,this);
            this.divDetail.form.btnDetailMenu.addEventHandler("onclick",this.divDetail_btnDetailMenu_onclick,this);
            this.divDetail.form.btnMakeDash.addEventHandler("onclick",this.divDetail_btnMakeDash_onclick,this);
            this.divDetail.form.staManualLink.addEventHandler("onclick",this.divDetail_staManualLink_onclick,this);
            this.dsDashList.addEventHandler("canrowposchange",this.dsDashList_canrowposchange,this);
        };
        this.loadIncludeScript("PM090.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
