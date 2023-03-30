(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM010");
            this.set_titletext("프로젝트관리_프로젝트관리_프로젝트관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProjectInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MANAGER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiLanguageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_LANG_TXT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PROJECT_TYPE\"/><Col id=\"PROJECT_CD\"/><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectInfoDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MANAGER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_IMG\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_BLOB\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"COMP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDetailUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjComp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTypeT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboType","staTypeT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("PROJECT_CD");
            obj.set_datacolumn("PROJECT_NM");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
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

            obj = new Div("divDetail","10","73",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staDetailDescT","686","116","120","153",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static41","805","116",null,"153","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDetailDesc","813","123",null,"139","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_maxlength("600");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21","330","26","357","303",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgPm","361","52","294","251",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_text("+");
            obj.set_font("normal 30pt/normal \"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","330","375",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsMultiLanguageInfo");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:LANG_NM\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ML_LANG_TXT\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMultiLanguageT","330","349",null,"21","150",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("다국어 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMultiLanguage",null,"349","100","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("다국어매핑");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegT","686","268","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staReg","805","268",null,"31","688",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","staReg:-1","268","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","staRegDtT:-1","268",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModT","686","298","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMod","805","298",null,"31","688",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProjectDetailT","340","0",null,"21","142",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("프로젝트 상세");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProjectInfoT","0","0","312","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("프로젝트 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdProjectInfo","0","26","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_binddataset("dsProjectInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"프로젝트 명\"/></Band><Band id=\"body\"><Cell text=\"bind:PROJECT_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PROJECT_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","staMod:-1","298","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","staModDtT:-1","298",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProjectId00","805","56",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboProjectComp","813","61","130","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsCboProjComp");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProjectCompT","686","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDirectorT","950","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDirector","1077","62","110","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_essential");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDirector","edtDirector:3","62","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34_00","805","86",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTypeT","686","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","1077","91","110","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboType","813","91","130","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","950","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","310","26","20",null,null,"4",null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","330","329",null,"20","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProjectId","805","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProjectNm","885","31","130","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","686","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("프로젝트 ID / 명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","818",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","1649","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","staRegDt","text","dsProjectInfoDetail","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","staModDt","text","dsProjectInfoDetail","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.cboUseYn","value","dsProjectInfoDetail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.cboType","value","dsProjectInfoDetail","PROJECT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtDirector","value","dsProjectInfoDetail","MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.edtProjectNm","value","dsProjectInfoDetail","PROJECT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.txtDetailDesc","value","dsProjectInfoDetail","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.staReg","text","dsProjectInfoDetail","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.staRegDt","text","dsProjectInfoDetail","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.staMod","text","dsProjectInfoDetail","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.staModDt","text","dsProjectInfoDetail","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.imgPm","image","dsProjectInfoDetail","PROJECT_BLOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.staProjectId","text","dsProjectInfoDetail","PROJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboType","value","dsSearch","PROJECT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboProjectNm","value","dsSearch","PROJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.staProjectId00","text","dsProjectInfoDetail","PROJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.cboProjectComp","value","dsProjectInfoDetail","COMP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM010.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    pm > PM010
        *  @FileName    PM010.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.08.14
        *  @Version     1.0
        *  @Desction    프로젝트관리
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.14      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	// gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;  						// 글로변 변수_프로젝트코드

        // 파일 업로드 관련
        this.fv_sFileSize  = "";
        this.fv_bData 	   = null;
        this.fv_sFileSize  = "";
        this.fv_sFileType  = "PJT";

        this.fv_sSelectRow = "";
        this.fv_sProjectCd = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM010_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		// 초기화
        		this.fnInit();
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
            if (take.nvl(sTranId, "")=="") sTranId = "ProjectInfo";

        	this.dsProjectInfo.clearData();
        	this.dsProjectInfoDetail.clearData();

        	take.tranSelect
        	(
        		this,
        		"ProjectInfo",
        		"ProjectManagement.projectInfoList",
        		"dsSearch",
        		"dsProjectInfo",
        		"",
        		"fnCallback"
        	)
        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "ProjectDetailSave";

        	if (   !take.isDsModified(this.dsFile)
        		&& !take.isDsModified(this.dsMultiLanguageInfo)
        		&& !take.isDsModified(this.dsProjectInfo)
        		&& !take.isDsModified(this.dsProjectInfoDetail)
        		)
        	{
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        	var bRowChange = take.confirm(this, "question", "MS00000072");
        	//take.confirm(this, "question", "저장 하시겠습니까?");
        	if (bRowChange)
        	{
        		var objDivDetail = this.divDetail.form;

        		var objDsProjDetail = this.dsProjectInfoDetail;
        		var objDsProjInfo 	= this.dsProjectInfo;

        		// 프로젝트 상세정보 저장
        		if(sTranId == "ProjectDetailSave")
        		{
        			if(!takeval.check(this, "Save")) return;

        			if (objDsProjInfo.rowcount>0)
        			{
        				// 우측 그리드 '프로젝트 상세' 저장
        				this.fv_sProjectCd = take.nvl(objDsProjDetail.getColumn(0, "PROJECT_CD"), "");
        				this.dsProjectInfoDetail.setColumn(0, "PROJECT_NM", take.nvl(this.divDetail.form.edtProjectNm.value, ""));
        				this.dsProjectInfoDetail.setColumn(0, "DESC_TXT", take.nvl(this.divDetail.form.txtDetailDesc.value, ""));
        				take.transaction
        				(
        					this,
        					"ProjectDetailSave",
        					"SVC_LOC::pm/projectSave.do",
        					"dsProjectInfoDetail=dsProjectInfoDetail:U dsFile=dsFile:U",
        					"",
        					"sProjectCd='"+this.fv_sProjectCd+"' sMenuCd='" + take.getProgInfo(this).ProgId + "'",
        					"fnCallback"
        				);
        			}
        		}
        	}

        	if(sTranId == "ProjectInfoDelete")
        	{
        		var nRow 	   = objDsProjInfo.rowposition;
        		var sProjectCd = take.nvl(objDsProjInfo.getColumn(nRow, "PROJECT_CD"), "");

        		// 프로젝트 상세정보 삭제
        		take.tranSave
        		(
        			this,
        			"ProjectInfoDelete",
        			"ProjectManagement.projectInfo",
        			"dsProjectInfoDetail",
        			"",
        			"PROJECT_CD='" + sProjectCd + "'",
        			"fnCallback"
        		)
        	}
        };

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdProjectInfo";

            switch(sGrdId) {
        		case "grdProjectInfo":
        			var objDivDetail    = this.divDetail.form;			// Main Div
        			var objDsProjDetail = this.dsProjectInfoDetail;		// Right Detail Dataset

        			objDsProjDetail.clearData();
        			objDsProjDetail.addRow();

        			if(take.nvl(objDivDetail.staProjectId, "") != ""){
        				objDivDetail.staProjectId.set_text(take.getWord(this, "ML00001513"));
        			}

        			objDivDetail.cboType.set_index(0);
        			objDivDetail.cboUseYn.set_value("Y");

        			this.fv_sSelectRow = "-1";
        			objDivDetail.grdProjectInfo.selectRow(-1);
        		break;
            }
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdProjectInfo";

        	if(this.dsProjectInfo.rowcount <= 0) {
        		//take.alert(this, "info", "프로젝트 목록이 없습니다.");
        		take.alert(this, "Info", "MS00000011", {text:this.divDetail.form.staProjectInfoT.text});
        		return;
        	}

        	var nRow     = this.dsProjectInfo.rowposition;
        	var nSelProj = this.dsProjectInfo.getColumn(nRow, "PROJECT_NM");
        	var bRowChange = take.confirm(this, "question", "MS00000071");
        	//take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : nSelProj, text : "삭제"});

        	if (bRowChange)
        	{
        		// 삭제 되어야 하는 항목 RowType 'DELETE' <- 바꿔줌
        		var objDsProjDetail = this.dsProjectInfoDetail;
        		objDsProjDetail.set_enableevent(false);
        		objDsProjDetail.set_updatecontrol(false);

        		objDsProjDetail.setRowType(0, "D");

        		objDsProjDetail.set_updatecontrol(true);
        		objDsProjDetail.set_enableevent(true);

        		this.fnSave("ProjectInfoDelete");
        	}
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        // grdProjectInfo_onselectchanged : 좌측 프로젝트목록 선택 값 변경시 선택된 row의 프로젝트 상세 정보 조회
        this.grdProjectInfo_onselectchanged = function(obj,e)
        {
        	var objDivDetail = this.divDetail.form;
        	var nPreSelRow  = parseInt(take.nvl(this.fv_sSelectRow, "-1"));
        	var nCurrSelRow = parseInt(take.nvl(objDivDetail.grdProjectInfo.getSelectedRows(), "-1"));

        	if( nCurrSelRow != -1 && (nPreSelRow != nCurrSelRow))
        	{
        		var sRowType = this.dsProjectInfoDetail.getRowType(0);
        		var bRowChange = true;
        		if( "2" == sRowType || "4" == sRowType )
        		{
        			bRowChange = take.confirm(this, "question", "MS00000074");
        			//take.confirm(this, "Info", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?");
        		}

        		if(bRowChange)
        		{
        			this.fnDetailSearch();
        		}
        		else
        		{
        			nPreSelRow = ( "2" == sRowType ) ? -1 : nPreSelRow;
        			objDivDetail.grdProjectInfo.selectRow(nPreSelRow);
        		}
        	}
        	if (nPreSelRow == 0 && (nPreSelRow == nCurrSelRow) && this.fv_sProjectCd != "")
        	{
        		this.fnDetailSearch();
        	}
        };

        // btnDirector_onclick : 담장자 돋보기 버튼 클릭 _ 관리자를 선택하는 Popup Open
        this.btnDirector_onclick = function(obj,e)
        {
        	// 담당자 팝업 소스 작성
        	take.openPopup(this, "PM010P01", "biz::sys/PM010P01.xfdl", "", "",
        		function(sId, sCd){
        			if (take.nvl(sCd, "")!="")
        			{
        				var arrRtn = sCd.split(',');
        				this.dsProjectInfoDetail.setColumn(0, "MANAGER_CD", arrRtn[0]);
        				this.dsProjectInfoDetail.setColumn(0, "MANAGER_NM", arrRtn[1]);
        				this.divDetail.form.edtDirector.set_value(arrRtn[1]);
        			}
        		},
        	false);
        };

        // 이미지뷰어 + 클릭
        this.divDetail_imgPm_onclick = function(obj,e)
        {
        	// 업로드 소스 작성
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        // FileDialog00_onclose : 파일 다이얼로그 닫힐 때 발생
        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        // 파일추가 후처리 성공이벤트
        this.FileList_onsuccess = function(obj, e)
        {
        	var objDsFile = this.dsFile;
        	switch (e.reason)
        	{
        		case 1:
        			this.divDetail.form.imgPm.set_text("");
        			this.fv_sFileSize = obj.getFileSize();

        			break;
        		case 3: // read() 실행시 추가 실행
        			this.divDetail.form.imgPm.set_image(e.binarydata);
        			this.fv_bData = e.binarydata;

        			this.dsFile.clearData();
        			var addidx = objDsFile.addRow();
        			objDsFile.setColumn(addidx, "FILE_NM", nexacro.trim(obj.filename));
        			objDsFile.setColumn(addidx, "FILE_BLOB", this.fv_bData);
        			objDsFile.setColumn(addidx, "IMPORT_YN", "N");
        			objDsFile.setColumn(addidx, "FILE_TYPE", this.fv_sFileType);
        			objDsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);

        			break;
        		case 9:	// getFileSize() 실행시 추가 실행
        			if( nexacro._Browser == "Runtime" )
        			{
        				//파일 바이너리데이터 생성
        				obj.read();
        			}
        			else
        			{
        				var objIframe    	  = window.document.getElementsByTagName('iframe');
        				var objInput     	  = objIframe[0].contentWindow.document.getElementsByTagName("input");
        				var objImageView 	  = this.divDetail.form.imgPm;
        				//var objDsFile    	  = this.dsFile;

        				for (var i = 0; i < objInput.length; i++) {
        					if (objInput[i].type == "file") {
        						if( objInput[i].files.length > 0 )
        						{
        							var reader  = new FileReader();
        							reader.addEventListener("load", function(){
        								objImageView.set_image(reader.result);

        								objDsFile.setColumn(addidx, "FILE_BLOB", reader.result);
        								objDsFile.setColumn(addidx, "IMPORT_YN", "N");
        							});

        							reader.readAsDataURL(objInput[i].files[0], "EUC-KR");
        							objDsFile.clearData();
        							var addidx = objDsFile.addRow();
        							objDsFile.setColumn(addidx, "FILE_NM", nexacro.trim(objInput[i].files[0].name));
        							objDsFile.setColumn(addidx, "FILE_TYPE", this.fv_sFileType);
        							objDsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);
        						}
        					}
        				}
        			}
        			break;
        		default :
        			break;
        	}
        }

        // 파일추가 후처리 실패이벤트
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        // btnMultiLanguage_onclick : 다국어 버튼 클릭 _ 다국어관리에서 등록한 다국어 정보를 선택하는 Popup화면 Open
        this.btnMultiLanguage_onclick = function(obj,e)
        {
        	take.openPopup(this, "addMultiLanguage", "biz::sys/OM010P06.xfdl", "", "", "fnPopCallback", false);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        // 	this.divSearch.form.cboProjectNm.set_value(this.fv_sGdsProjectCd);
        // 	if(this.fv_sGdsAdminYn == "Y"){
        // 		this.divSearch.form.cboProjectNm.set_readonly(false);
        // 	}

        	//벨리데이션
        	takeval.add(this, "Save", this.divDetail.form.edtProjectNm, 	this.divDetail.form.staProjectNmT.text		,  "value", true, "string", [0,20], "");
        	takeval.add(this, "Save", this.divDetail.form.cboType, 	    	this.divDetail.form.staTypeT.text 		 	,  "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.cboProjectComp,	this.divDetail.form.staProjectCompT.text  	,  "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.cboUseYn, 		this.divDetail.form.staUseYnT.text  		,  "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.edtDirector,  	this.divDetail.form.staDirectorT.text	 	,  "value", true, "string", [0,20], "");
        };

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var objDivSearch = this.divSearch.form;

        	var arrGroupCodes = ["00002", "00009", "00009"];
        	var arrOutDs      = ["dsCboType", "dsCboUseYn", "dsCboDetailUseYn"];
        	var arrHeaderType = ["", "ALL", ""];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        		function(sId, nErrCd, sErrMsg)
        		{
        			take.tranSelect
        			(
        				this,
        				"projectCompList",
        				"ProjectManagement.projectCompList",
        				"",
        				"dsCboProjComp",
        				"",
        				function(sId, nErrCd, sErrMsg)
        				{
        					if (this.dsCboProjComp.rowcount > 0)
        					{
        						this.divDetail.form.cboProjectComp.set_index(0);
        					}
        					if (this.dsCboType.rowcount > 0)
        					{
        						objDivSearch.cboType.set_index(0);
        					}
        					if (this.dsCboUseYn.rowcount > 0)
        					{
        						objDivSearch.cboUseYn.set_index(1);
        					}
        					this.fnSearch("ProjectInfo");
        				}
        			);
        		}
        	);
        };

        /**
         * fnDetailSearch : 좌측 그리드 메뉴목록 선택시 우측 디테일 데이터 조회 트랜잭션
         * @example this.fnDetailSearch();
         */
        this.fnDetailSearch = function ()
        {
        	var objDsProjInfo = this.dsProjectInfo;
        	var nRow 		  = objDsProjInfo.rowposition;

        	this.dsProjectInfoDetail.clearData();
        	this.fv_sSelectRow = this.divDetail.form.grdProjectInfo.getSelectedRows();

        	// 선택된 row의 프로젝트 상세 정보 조회
        	var sProjectCd = take.nvl(objDsProjInfo.getColumn(nRow, "PROJECT_CD"), "");
        	take.tranSelect
        	(
        		this,
        		"projectInfoDetail",
        		"ProjectManagement.projectInfoDetail",
        		"",
        		"dsProjectInfoDetail",
        		"PROJECT_CD='" + sProjectCd + "'",
        		function(sId, nErrCd, sErrMsg){
        			// 선택된 row의 다국어 정보 조회
        			this.dsMultiLanguageInfo.clearData();

        			var sProjectCd = take.nvl(this.dsProjectInfoDetail.getColumn(0, "PROJECT_CD"), "");		// 선택한 row 다국어 코드
        			var sMlCd = take.nvl(this.dsProjectInfoDetail.getColumn(0, "ML_CD"), "");		// 선택한 row 다국어 코드

        			take.tranSelect
        			(
        				this,
        				"multilanguageDetailList",
        				"ProjectManagement.projectLanguageList",
        				"",
        				"dsMultiLanguageInfo",
        				"sProjectCd='" + sProjectCd + "' sMlCd='" + sMlCd + "'",
        				"fnCallback"
        			);

        			if(this.dsProjectInfoDetail.rowcount <= 0){
        				this.dsProjectInfoDetail.addRow();
        			}

        			if(take.isEmpty(this.dsProjectInfoDetail.getColumn(0, "PROJECT_BLOB"))){
        				this.divDetail.form.imgPm.set_text("+");
        			}else{
        				this.divDetail.form.imgPm.set_text("")
        			}
        		}
        	);
        }

        /**
         * addFileList : 멀티 파일 추가
         * @example this.addFileList();
         */
        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
         		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
         		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, nexacro.VirtualFile.openBinary);
        	}
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId   	 - 서비스 아이디 (공통 콜백에서 넘어옴)
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
                case "ProjectInfo" : 		// 프로젝트 정보 조회 콜백
        			var nRowCount = this.dsProjectInfo.rowcount;
        			var objDiv    = this.divDetail.form;
        			if (nRowCount > 0){
        				//objDiv.staProjectInfoT.set_text("프로젝트 목록 ("+nRowCount+"건)");
        				objDiv.imgPm.set_visible(true);
        				this.fnDetailSearch();
        			} else {
        				//objDiv.staProjectInfoT.set_text("프로젝트 목록 (0건)");
        				objDiv.imgPm.set_visible(false);
        			}
        			take.tranSelect
        			(
        				this,
        				"projectInfoCode",
        				"ProjectManagement.projectInfoList",
        				"",
        				"dsCboProjectCd",
        				"",
        				function(sId, nErrCd, sErrMsg)
        				{
        					var objDsCboProj = this.dsCboProjectCd;
        					if (objDsCboProj.rowcount>0)
        					{
        						var addInsertRow = objDsCboProj.insertRow(0);
        						objDsCboProj.setColumn(addInsertRow, "PROJECT_CD", "");
        						objDsCboProj.setColumn(addInsertRow, "PROJECT_NM", take.getWord(this, "MS00000078"));
        					}
        				}
        			)
                    break;

                case "projectInfoDetail" :  // 프로젝트 상세 조회 콜백
        			//this.fv_sSelectRow = this.divDetail.form.grdProjectInfo.getSelectedRows();
                    break;

                case "multilanguageDetailList" : // 다국어 정보 조회 콜백
                    break;

                case "ProjectDetailSave" :  // 프로젝트 상세정보 저장 콜백
        			this.fnSearch("ProjectInfo");
                    break;

        		 case "ProjectInfoDelete" :  // 프로젝트 상세정보 삭제 콜백
        			this.dsSearch.setColumn(0, "PROJECT_CD", "");
        			this.fnSearch("ProjectInfo");
                    break;
            }
        }

        this.fnPopCallback = function (sId, nReturnVal)
        {
        	switch(sId) {
        	case "addMultiLanguage":
        		//팝업이 닫히면서 nReturnVal을 통해 값을 받을 수 있습니다
        		if(take.nvl(nReturnVal, "") != "") {
        			nReturnVal = nReturnVal.split(",")[0];
        			this.dsProjectInfoDetail.setColumn(0, "ML_CD", nReturnVal);
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
            this.addEventHandler("onload",this.PM010_onload,this);
            this.divDetail.form.imgPm.addEventHandler("onclick",this.divDetail_imgPm_onclick,this);
            this.divDetail.form.btnMultiLanguage.addEventHandler("onclick",this.btnMultiLanguage_onclick,this);
            this.divDetail.form.grdProjectInfo.addEventHandler("onselectchanged",this.grdProjectInfo_onselectchanged,this);
            this.divDetail.form.btnDirector.addEventHandler("onclick",this.btnDirector_onclick,this);
            this.dsProjectInfo.addEventHandler("canrowposchange",this.dsProjectInfo_canrowposchange,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("PM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
