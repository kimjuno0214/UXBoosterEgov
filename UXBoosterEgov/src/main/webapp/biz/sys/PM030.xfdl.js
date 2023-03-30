(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM030");
            this.set_titletext("프로젝트관리_메뉴관리_메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDeviceType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMenuType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiLanguageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_LANG_TXT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMenuYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ICON\" type=\"STRING\" size=\"255\"/><Column id=\"DEVICE_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROOT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ICON\" type=\"STRING\" size=\"255\"/><Column id=\"DEVICE_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"BREAKING_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"CONCENT_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REPLY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"TEMPLATE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DOCUMENT_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ROOT_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDetailUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMenuT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeviceT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("디바이스");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenu","staMenuT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDevice","staDeviceT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboDeviceType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("프로젝트");
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
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static07_00_00_02","355","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
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

            obj = new Static("Static07_00_00_02_00","690","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_02_00_00","1025","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","btnShowHide:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static03");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","0","0","10",null,null,"40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static23");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","0","26","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_binddataset("dsProjectMenuList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"181\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"메뉴유형\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" treelevel=\"bind:MENU_LEVEL\" edittype=\"tree\" border=\"1px solid #d7d7d7, 0px solid #d7d7d7, 1px solid #d7d7d7, 1px solid #d7d7d7\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","451","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34","449","56",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static36","449","116",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staParentMenu","449","26","216","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeviceT","staParentMenu:-1","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("디바이스");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuNmT","330","116","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuTypeT","330","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("메뉴유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","457","121","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_maxlength("12");
            obj.set_inputfilter("symbol");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","449","342","216","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","330","373",null,"20","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("47");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static02","310","0","20",null,null,"30",null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("Static03");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMultiLanguageT","330","393",null,"21","149",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("다국어 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","staModNm:-1","342","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","staModDtT:-1","342",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMultiLanguage",null,"393","100","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("다국어매핑");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboDevice","staDeviceT:7","31","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboDeviceType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboMenuType","457","61","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsCboMenuType");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","449","86",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staScreenT","330","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","449","146",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboMenuMark","456","151","201","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCboMenuYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuListT","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("메뉴 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","330","419",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMultiLanguageInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:LANG_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ML_LANG_TXT\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuDetailT","330","0",null,"21","149",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("메뉴 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staParentMenuT","330","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("상위메뉴");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staManualT","cboMenuMark:7","146","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("매뉴얼");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuMarkT","330","146","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("메뉴표시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staManualLink","staManualT:7","146","105","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("미등록");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtScreen","457","91","176","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnScreen","edtScreen:3","91","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDescT","330","206","120","107",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDesc","449","206",null,"107","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNmT","330","312","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","449","312","216","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","staRegNm:-1","312","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","staRegDtT:-1","312",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNmT","330","342","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","457","211",null,"97","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","btnScreen:7","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:7","91","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCboDetailUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuIconT","cboMenuType:7","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("42");
            obj.set_text("메뉴아이콘");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuIcon","staMenuIconT:7","56","105","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("43");
            obj.set_text("미등록");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuParamT","330","176","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("44");
            obj.set_text("파라미터");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","449","176",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuParam","519","176",null,"31","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("46");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnParam","456","181","51","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_plus01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staScreenCd","609","96","37","15",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuOrderT","664","116","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("48");
            obj.set_text("메뉴정렬");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuOrder","874","116","150","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("49");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Spin("spnSort","791","121","80","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("50");
            obj.set_min("1");
            obj.set_max("999");
            obj.set_value("");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.staParentMenu","text","dsProjectMenuList","PARENT_MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.cboDevice","value","dsProjectMenuList","DEVICE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.cboMenuType","value","dsProjectMenuList","MENU_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.cboUseYn","value","dsProjectMenuList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtScreen","value","dsProjectMenuList","PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtMenuNm","value","dsProjectMenuList","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.cboMenuMark","value","dsProjectMenuList","DISPLAY_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.txtDesc","value","dsProjectMenuList","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.staRegNm","text","dsProjectMenuList","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.staRegDt","text","dsProjectMenuList","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.staModNm","text","dsProjectMenuList","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.staModDt","text","dsProjectMenuList","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.staMenuParam","text","dsProjectMenuList","MENU_PARAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.staScreenCd","text","dsProjectMenuList","PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.staMenuOrder","text","dsProjectMenuList","MENU_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM030.xfdl", function() {
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
        //this.fv_nFormVal = null;     //용도
        this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	 // gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;							 // 글로변 변수_프로젝트코드
        this.fv_bMenuType     = false;										     // 메뉴유형 변경시 '메뉴','화면' 구분 값
        this.fv_nSaveBeforeRowType = 1;										     // 최소 RowType값 초기 행의 상태 Dataset.ROWTYPE_NORMAL
        this.fv_objTree = this.divDetail.form.grdMenuList;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM030_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                // 초기화
        		this.fnInIt();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnAdd, fnSave, fnDel, fnExcel...)
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectMenuAllList";

            var sMenuCd, sProjectCd, sDeviceType, sUseYn;
        	var objDivSearch;
        	var arrValGrp;
            var nCnt = 0;

            objDivSearch = this.divSearch.form;
            this.dsProjectMenuList.clearData();

            // 벨리데이션

            arrValGrp = takeval.getGroupArray(this, "Search");

            if (take.isArray(arrValGrp))
            {
                nCnt = arrValGrp.length;
            }

            if (nCnt<=0)
            {
                takeval.add(this, "Search", objDivSearch.cboProjectNm, "프로젝트", "value", true, "string", [0,100], "");
                takeval.add(this, "Search", objDivSearch.cboDevice,    "디바이스", "value", true, "string", "", "");
            }

            if(!takeval.check(this, "Search")) return;

            sMenuCd		= take.nvl(objDivSearch.edtMenu.value, "");		  // 메뉴명
            sProjectCd  = take.nvl(objDivSearch.cboProjectNm.value, "");  // 프로젝트명
            sDeviceType	= take.nvl(objDivSearch.cboDevice.value, "");	  // 디바이스유형
            sUseYn	    = take.nvl(objDivSearch.cboUseYn.value, "");	  // 사용여부

            take.tranSelect
            (
                this,
                "projectMenuAllList",
                "ProjectManagement.projectMenuAllList",
                "",
                "dsProjectMenuList",
                "MENU_CD='"       + sMenuCd     +
                "' PROJECT_CD ='" + sProjectCd  +
                "' DEVICE_TYPE='" + sDeviceType +
                "' USE_YN='" 	  + sUseYn 		+ "'",
                "fnCallback"
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectMenuSave";

        	if (   !take.isDsModified(this.dsFile)
        		&& !take.isDsModified(this.dsMultiLanguageInfo)
        		&& !take.isDsModified(this.dsProjectMenuList)
        		&& !take.isDsModified(this.dsDummy)
        		)
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	var objDs;
        	var objDivDetail;
        	var nRow, nCnt = 0;
        	var sProjectCd, sEditMenuNm;
        	var bRowChange;
        	var arrValGrp;

        	objDivDetail = this.divDetail.form;
        	sEditMenuNm  = take.nvl(objDivDetail.edtMenuNm.value, "");
        	bRowChange   = take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sEditMenuNm, text : "저장"});

        	if(bRowChange)
        	{
        		// 벨리데이션
        		arrValGrp = takeval.getGroupArray(this, "Save");

        		if (take.isArray(arrValGrp))
        		{
        			nCnt = arrValGrp.length;
        		}

        		if (nCnt<=0)
        		{
        			takeval.add(this, "Save", objDivDetail.edtMenuNm, "메뉴유형", "value", true, "string", [0,12], "");

        			// 프로그램은 메뉴 유형이 화면인 경우 벨리데이션 체크
        			if(this.fv_bMenuType){
        				//takeval.add(this, "Save", objDivDetail.edtScreen,   "프로그램", "value", true, "string", "", "");
        			}

        		}

        		if(!takeval.check(this, "Save")) return;

        		objDs  	   = this.dsProjectMenuList;
        		nRow       = objDs.rowposition;
        		sProjectCd = this.divSearch.form.cboProjectNm.value;

        		objDs.setColumn(nRow, "PROJECT_CD", sProjectCd);
        		this.fv_nSaveBeforeRowType = objDs.getRowType(nRow);
        		take.transaction
        		(
        			this,
        			"projectMenuSave",
        			"SVC_LOC::pm/projectMenuSave.do",
        			"dsProjectMenuList=dsProjectMenuList:U dsFile=dsFile:U",
        			"",
        			"sProjectCd='"+sProjectCd+"''",
        			"fnCallback"
        		);
        	}
        }

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAdd(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMenuList";

        	var nRowType, nRow, nMenuType;
        	var objGrid, objDs;

        	objGrid = this.divDetail.form.grdMenuList;
        	objDs     = this.dsProjectMenuList;
        	nRow      = objDs.rowposition;
        	nRowType  = objDs.getRowType(nRow);
        	nMenuType = objDs.getColumn(nRow, "MENU_TYPE");

        	if(nMenuType=="03"){
        		return false;
        	}
        	if(nRowType!=2){
        		if(nRow == -1) {
        			this.divDetail.form.grdMenuList._takeTreeAdd(this,0);
        		} else{
        			this.divDetail.form.grdMenuList._takeTreeAddChild(this,0);
        		}
        	}
        }

        /**
         * fnDel : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDel(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMenuList";

        	var objDs;
        	var nRow;
        	var sNm;
        	var bRowChange;

        	objDs = this.dsProjectMenuList;
        	nRow  = objDs.rowposition;
        	sNm   = objDs.getColumn(nRow, "MENU_NM");

        	if(objDs.rowcount <= 0){
        		take.alert(this, "info", "메뉴 목록이 없습니다.");
        		return;
        	}

        	var nRow     = this.dsProjectMenuList.rowposition;
        	var nSelProj = this.dsProjectMenuList.getColumn(nRow, "MENU_NM");

        	bRowChange = take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sNm, text : "삭제"});
        	if(bRowChange){
        		// 삭제 함수 호출
        		this.fnDataDelete();
        	}
        }

        /**
         * fnExcel : 엑셀 export 함수 (필수) --> 공통 Excel download에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnExcel = function(fnExcel)
        {
            //공통 Excel download에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //메뉴데이터셋 onrowposchanged 이벤트
        this.dsProjectMenuList_onrowposchanged = function(obj,e)
        {
        	this.fnLagnSearch();

        	var objDs, objStaMaual, objDivForm;
        	var nRow, nIdx, nSort;
        	var sManualTxt, sMenuTypeCd, sMenuOrder, sChildRow, sMenuLevel;

        	objDs 		= this.dsProjectMenuList;

            objDivForm  = this.divDetail.form;
        	nRow  		= objDs.rowposition;
        	objStaMaual = objDivForm.staManualLink;
        	objStaIcon  = objDivForm.staMenuIcon;

        	sManualTxt  = take.nvl(objDs.getColumn(nRow, "MANUAL_TXT"), "");
        	sMenuTypeCd = take.nvl(objDs.getColumn(nRow, "MENU_TYPE"), "");
        	sMenuIcon   = take.nvl(objDs.getColumn(nRow, "MENU_ICON"), "");

            sMenuLevel  = take.nvl(objDs.getColumn(nRow, "MENU_LEVEL"));
            sMenuOrder  = take.nvl(objDs.getColumn(nRow, "MENU_ORDER"));


        	this.fnSetCboMenuType(sMenuTypeCd);


            objStaMaual.set_text(take.isEmpty(sManualTxt) ? "미등록" : "등록됨");

            objStaIcon.set_text(take.isEmpty(sMenuIcon) ? "미등록" : "등록됨");

        	objStaIcon.set_visible(sMenuLevel == "0");

        	sChildRow = take.getTreeChildRows(this.divDetail.form.grdMenuList, 0, nRow);
        	objDivForm.cboMenuType.set_readonly(sChildRow != -1);



            objDivForm.spnSort.set_readonly(sMenuLevel == "0");



        	if (sMenuOrder!="")

        	{

        		nIdx = sMenuOrder.lastIndexOf(".");

        		if (nIdx>=0)

        		{

        			sMenuOrder = take.nvl(sMenuOrder.substr(nIdx+1),"");



        			if (sMenuOrder!="")

        			{

        				nSort = parseInt(sMenuOrder);

        				objDivForm.spnSort.set_value(nSort);

        			}

        		}

        	}
        };

        //
        // this.fv_nEventStaus=0;
        // this.fv_nEventRow=null;
        // //메뉴데이터셋 onrowsetchanged 이벤트
        // this.dsProjectMenuList_onrowsetchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSRowsetChangeEventInfo)
        // {
        //     //Dataset.REASON_APPEND      12  Dataset이 추가되었 때
        //     //Dataset.REASON_DELETE      20 Dataset의 Row가 삭제되었을 때
        //     //Dataset.REASON_MOVE        32 Dataset의 Row가 다른 위치로 이동되었을 때
        //     //Dataset.REASON_ENABLEEVENT 41 Dataset의 enableevent 속성이 'true'가 되었을 때
        // trace("e.reason --> " + e.reason + " / this.fv_nEventStaus --> " + this.fv_nEventStaus);
        //     switch(this.fv_nEventStaus)
        //     {
        //         case 12: //추가
        //             this.fnAddMenu(obj, this.fv_nEventRow);
        //             break;
        //         case 20: //삭제
        //             break;
        //         case 32: //이동
        //             break;
        //         case 41: //enableevent발생
        //             break;
        //         default:
        //     }
        //
        //     this.fv_nEventStaus = e.reason;
        //     this.fv_nEventRow = e.row;
        // };

        //다국어 맵핑 버튼 클릭 이벤트
        this.divDetail_btnMultiLanguage_onclick = function(obj,e)
        {
        	var sCompName = this.dsProjectMenuList.getColumn(this.dsProjectMenuList.rowposition, "MENU_NM");
        	take.openPopup(this, "addMultiLanguage", "biz::sys/OM010P06.xfdl", {argInSearchText:sCompName}, "", "fnPopCallback", false);
        };

        //프로그램 선택 팝업 오픈 이벤트
        this.btnDirector_onclick = function(obj,e)
        {
        	// 프로그램선택 팝업 오픈 PM030P03
        	take.openPopup(this, "PM030P03", "biz::sys/PM030P03.xfdl", "", "",
        		function(sId, sRtn){
        			if (take.nvl(sRtn, "")!="")
        			{
        				var objDs = this.dsProjectMenuList;

        				var sCd = sRtn.split(",")[0];
        				var sNm = sRtn.split(",")[1];
        				var sId = sRtn.split(",")[2];

        				this.fv_sProgramCd = sCd;

        				objDs.setColumn(objDs.rowposition, "PROGRAM_CD", sCd);
        				objDs.setColumn(objDs.rowposition, "PROGRAM_NM", sNm);

        				this.divDetail.form.edtScreen.set_value(sNm + "(" + sId + ")");
        				this.divDetail.form.staScreenCd.set_text(sCd);
        			}
        		},
        	false);
        };

        //매뉴얼 팝업 '등록','미등록' 링크 클릭시 팝업 오픈
        this.divDetail_staManualLink_onclick = function(obj,e)
        {
        	var objDs 		= this.dsProjectMenuList;
        	var nRow		= objDs.rowposition
        	var sProjectCd  = this.divSearch.form.cboProjectNm.value;
         	var sTemplateCd = "";
        	var sManualTxt  = take.nvl(objDs.getColumn(nRow, "MANUAL_TXT"), "");
        	var sStaLink    = this.divDetail.form.staManualLink;

         	AgrKey = {sProjectCd:sProjectCd, sManualTxt:sManualTxt};

        	take.openPopup(this, "OM010P07", "biz::sys/OM010P07.xfdl", AgrKey, "",
        		function(sId, sRtn){
        			if(take.nvl(sRtn, "")!=""){
        				objDs.setColumn(nRow, "MANUAL_TXT", sRtn);
        				sStaLink.set_text("등록됨");
        			} else {
        				objDs.setColumn(nRow, "MANUAL_TXT", sRtn);
        				sStaLink.set_text("미등록");
        			}
        		},
        	false);
        };

        // 메뉴유형 선택에 따라 프로그램 팝업 오픈 여부
        this.divDetail_cboMenuType_onitemchanged = function(obj,e)
        {
        	this.fnSetCboMenuType(obj.value);
        };

        // 메뉴 아이콘 등록 팝업 오픈
        this.divDetail_staMenuIcon_onclick = function(obj,e)
        {
        	var objDs = this.dsProjectMenuList;
        	var nRow  = objDs.rowposition;

        	var sProjectCd = objDs.getColumn(nRow, "PROJECT_CD");
        	var sMenuCd    = objDs.getColumn(nRow, "MENU_CD");

        	AgrKey = {sProjectCd:sProjectCd, sMenuCd:sMenuCd};

        	take.openPopup(this, "PM030P01", "biz::sys/PM030P01.xfdl", AgrKey, "",
        		function(sId, sCloseGubun){
        			if (sCloseGubun == "save")
        			{
        				this.fnSearch("projectMenuList");
        			}else {
        				return false;
        			}
        		});
        };



        this.divDetail_btnParam_onclick = function(obj,e)

        {

        	var sProgramCd;

        	var objDs = this.dsProjectMenuList;

        	sProgramCd = take.nvl(this.divDetail.form.staScreenCd.text, "");



        	AgrKey = {sProgramCd:sProgramCd};

        	// 파라메터 팝업 오픈 PM030P04

        	take.openPopup(this, "PM030P04", "biz::sys/PM030P04.xfdl", AgrKey, "",

        		function(sId, sRtn){

        			if (take.nvl(sRtn, "")!="")

        			{

        				objDs.setColumn(objDs.rowposition, "MENU_PARAM", sRtn);

        			}

        		}

        	);

        };







        this.dsProjectMenuList_canrowposchange = function(obj,e)

        {

        	var bRowChange;

        	var nRowType;

        	var nRow;

        	var nPreRow;



        	nRow     = obj.rowposition;

        	nPreRow  = e.oldrow;

        	nRowType = obj.getRowType(nRow);



        	if (nRowType != Dataset.ROWTYPE_NORMAL && nRowType != Dataset.ROWTYPE_EMPTY) {

        		bRowChange = take.confirm(this, "String", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?");



        		if(!bRowChange){

        			return false;

        		}else {

        			obj.reset();

        		}

        	}

        };





        // 메뉴명 검색 엔터값 조회

        this.Edit_onkeyup = function(obj,e)

        {

        	if (e.keycode == 13) {

        		this.fnSearch("projectMenuAllList");

        	}

        };



        this.divDetail_grdMenuList_ondrag = function(obj,e)

        {

        	var objDs = this.dsProjectMenuList;

        	if( take.isDsModified(objDs) )

        	{

        		if (take.confirm(this, "info", "변경된 내역이 있습니다. 변경전 내용으로 복구 하시겠습니까?"))

        		{

        			objDs.reset();

        		} else {

        			obj.iscellmove = false;

        		}



        		return false;

        	} else {

        		obj.iscellmove = true;

         	}

        };





        this.divDetail_spnSort_onchanged = function(obj,e)

        {

        	var sMenuOrder, sNewOrder;

        	var objDs;

        	var nIdx, nSort, nOldSort;



        	nSort = obj.value;



        	if (nSort>0)

        	{

        		objDs = this.dsProjectMenuList;

        		nRow = objDs.rowposition;



        		sMenuOrder  = take.nvl(objDs.getColumn(nRow, "MENU_ORDER"));



        		if (sMenuOrder!="")

        		{

        			nIdx = sMenuOrder.lastIndexOf(".");



        			if (nIdx>=0)

        			{

        				nOldSort = parseInt(sMenuOrder.substr(nIdx+1));



        				if (nSort==nOldSort) return;

        				if (nSort>nOldSort) nSort++;

        				if (nSort<nOldSort) nSort--;



        				sNewOrder = sMenuOrder.substring(0,nIdx+1) + nSort.toString().lpad(3,"0");

        				this.fnSetOrder(objDs, nRow, sNewOrder);

        			}

        		}

        	}

        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInIt : 초기화 함수
         * @example this.fnInIt();
         */
        this.fnInIt = function()
        {
            var sTreeOpt = '{"use":"all", "treeindex":0, "parentcolid":"PARENT_MENU", "ordercolid":"MENU_ORDER", "treecallback":"fnTreeCallBack", "codecolid":"MENU_CD"}';
            this.fv_objTree.setTakeTree(this,sTreeOpt);

        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

            var objCbo = this.divSearch.form.cboProjectNm;

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	objCbo.set_value(this.fv_sGdsProjectCd);
        	if(this.fv_sGdsAdminYn == "Y"){
        		objCbo.set_readonly(false);
        	}
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var arrGroupCodes = ["00003", "00009", "00005", "00009", "00009"];
        	var arrOutDs 	  = ["dsCboDeviceType", "dsCboUseYn", "dsCboMenuType", "dsCboMenuYn", "dsCboDetailUseYn"];
        	var arrHeaderType = ["", "ALL", "", "", ""];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        	function(sId, nErrCd, sErrMsg)
        	{
                var objDiv = this.divSearch.form;
        		if (this.dsCboDeviceType.rowcount > 0){
        			objDiv.cboDevice.set_index(0);
        		}
        		if (this.dsCboUseYn.rowcount > 0){
        			objDiv.cboUseYn.set_index(0);
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
        					objDs.setColumn(nRow, "NAME", "선택");
        				}

                        this.fnSearch("projectMenuAllList");
        			}
        		)
        	});
        };

        /**
         * fnLagnSearch : 다국어 정보 조회
         * @example this.fnLagnSearch();
         */
        this.fnLagnSearch = function()
        {
            var objDs;
            var sMlCd, sMenuCd, sProjectCd;
            var nRow;

            objDs = this.dsProjectMenuList;

            // 하단 그리드 '다국어 정보' 조회
            this.dsMultiLanguageInfo.clearData();
            nRow = objDs.rowposition;

            sMenuCd		= take.nvl(objDs.getColumn(nRow, "MENU_CD"), "");	 // 메뉴명
            sProjectCd  = take.nvl(objDs.getColumn(nRow, "PROJECT_CD"), ""); // 프로젝트명
            sMlCd       = take.nvl(objDs.getColumn(nRow, "ML_CD"), "");		 // 다국어 코드

            take.tranSelect
            (
                this,
                "multilanguageDetailList",
                "ProjectManagement.projectMenuLanguageList",
                "",
                "dsMultiLanguageInfo",
                "sProjectCd='" + sProjectCd + "' sMenuCd='" + sMenuCd + "' sMlCd='" + sMlCd + "'",
                "fnCallback"
            )
        }

        /**
         * fnTreeCallBack : 트리공통 콜백 함수
         * @example this.fnTreeCallBack(sGrdId, sGbn, nRow);
         */
        this.fnTreeCallBack = function(sGrdId, sGbn, nRow)
        {
            //alert("gubun --> " + sGbn + " / Row --> " + nRow)
            switch(sGbn)
            {
                case "add":
        			//trace("add콜백 :: "+ nRow)
                    this.fnAddMenu(this.dsProjectMenuList, nRow);
                    break;

                case "del":
                    break;

                case "move":
        			var objDiv = this.divDetail.form;
        			var objDs  = this.dsProjectMenuList;
        			var nRow   = objDs.rowposition;
        			var nRootRow;

        			//20210120 정해원
        			//PARENT_MENU 누락 방지
        			var nParentRow   = objDiv.grdMenuList.getTreeParentRow(nRow);
        			//var nP_ParentRow = objDiv.grdMenuList.getTreeParentRow(nParentRow);

        			//if(nP_ParentRow > -1) nRootRow = nP_ParentRow;
        			//else nRootRow = nParentRow;
        			objDs.setColumn(nRow, "ROOT_MENU", objDs.getColumn(nParentRow, "ROOT_MENU"));
        			objDs.setColumn(nRow, "PARENT_MENU", take.nvl(objDs.getColumn(nParentRow, "MENU_CD"), "0"));

        			if (this.divDetail.form.grdMenuList.iscellmove==false) return;

        			var sProjectCd = this.divSearch.form.cboProjectNm.value;
        			objDs.setColumn(nRow, "PROJECT_CD", sProjectCd);
        			//this.fv_nSaveBeforeRowType = objDs.getRowType(nRow);

        			this.divDetail.form.grdMenuList.ismovecomplete = false;

        			take.transaction
        			(
        				this,
        				"projectMenuSave",
        				"SVC_LOC::pm/projectMenuSave.do",
        				"dsProjectMenuList=dsProjectMenuList:U dsFile=dsFile:U",
        				"",
        				"sProjectCd='"+sProjectCd+"''",
        				"fnCallback"
        			);
                    break;

                default:
            }
        }

        /**
         * fnAddMenu : 트리 메뉴 추가 함수
         * @example this.fnAddMenu(objDs, nRow);
         */
        this.fnAddMenu = function(objDs, nRow)
        {
            var sPMenuCd, sPMenuNm, sPMenuType, sParentRootMenuCd, s;
            var objDetail, objGrid;
            var nPRow, nTreeParentRow, nTreeParentRow2;

            objDetail = this.divDetail.form;
            objGrid = objDetail.grdMenuList;

            //this.divDetail.form.grdMenuList.getTreeParentRow()

            nPRow = objGrid.getTreeParentRow(nRow, true);

            //if (nPRow<0) return;

            sPMenuType = objDs.getColumn(nPRow, "MENU_TYPE");

        	nTreeParentRow    = objDetail.grdMenuList.getTreeParentRow(nRow);
        	sParentRootMenuCd = objDs.getColumn(nTreeParentRow, "MENU_CD");
        	nTreeParentRow2   = objDetail.grdMenuList.getTreeParentRow(nTreeParentRow);

        	if(nTreeParentRow2 >= 0){
        		sParentRootMenuCd = objDs.getColumn(nTreeParentRow2, "MENU_CD");
        	}

            sPMenuCd = objDs.getColumn(nPRow, "MENU_CD");
            sPMenuNm = objDs.getColumn(nPRow, "MENU_NM");

        	if (nPRow<0){
        		objDs.setColumn(nRow, "MENU_LEVEL", "0");
        	}

        	// 최상위 대메뉴인 경우에는 부모메뉴 0 저장
        	if(nTreeParentRow < 0){
        		objDs.setColumn(nRow, "PARENT_MENU", "0");
        	} else {
        		objDs.setColumn(nRow, "PARENT_MENU", sPMenuCd);
        	}

        	objDs.setColumn(nRow, "ROOT_MENU", sParentRootMenuCd);
        	objDs.setColumn(nRow, "PARENT_MENU_NM", sPMenuNm);
        	objDs.setColumn(nRow, "MENU_TYPE", "02");
        	objDs.setColumn(nRow, "DEVICE_TYPE", "01");
        	objDs.setColumn(nRow, "USE_YN", "Y");
        	objDs.setColumn(nRow, "DISPLAY_YN", "Y");

        	if (sPMenuType=="03")
            {
                objDs.set_enableevent(false);
                objDs.deleteRow(nRow);
                objDs.set_enableevent(true);
                return;
            }

            this.divDetail.form.edtMenuNm.setFocus();
            this.divDetail.form.edtMenuNm.setSelect(0,20);
        }

        /**
         * fnDataDelete : 트리 데이터 삭제
         * @example this.fnDataDelete();
         */
        this.fnDataDelete = function ()
        {
        	var objDs, objGrid;
        	var sProjectCd, sMenuCd;
        	var nRow;
        	var arrFamilyRows;

        	objGrid = this.divDetail.form.grdMenuList;
        	objDs   = this.dsProjectMenuList;
        	nRow    = objDs.rowposition;

        	arrFamilyRows = take.getTreeFamilyRows(objGrid, 0, nRow, true);
        	arrFamilyRows[arrFamilyRows.length] = nRow;

        	objDs.set_enableevent(false);
        	objDs.set_updatecontrol(false);

        	for(var i=0; i<arrFamilyRows.length; i++){
        		objDs.setRowType(arrFamilyRows[i], "U");
        	}

        	objDs.set_updatecontrol(true);
        	objDs.set_enableevent(true);

        	sProjectCd = objDs.getColumn(nRow, "PROJECT_CD");
        	take.transaction
        	(
        		this,
        		"projectMenuDelete",
        		"SVC_LOC::pm/projectMenuDelete.do",
        		"dsProjectMenuList=dsProjectMenuList:U",
        		"",
        		"PROJECT_CD='" + sProjectCd + "'",
        		"fnCallback"
        	)

        };

        /**
         * fnSetCboMenuType : 메뉴유형 '메뉴' 선택시 화면유형 선택 불가
         * @example this.fnSetCboMenuType();
         */
        this.fnSetCboMenuType = function (sMenuTypeCd)
        {
        	var objDiv;
        	var sMenyType;

        	objDiv    = this.divDetail.form;
        	sMenyType = take.nvl(objDiv.cboMenuType.value, "");

        	if(sMenuTypeCd == "02"){
        		objDiv.btnScreen.set_enable(false);
        		this.fv_bMenuType = false;
        	}
        	if(sMenuTypeCd == "03" || sMenuTypeCd == "06"){
        		objDiv.btnScreen.set_enable(true);
        		this.fv_bMenuType = true;
        	}
        };


        this.fnSetOrder = function(objDs, nRow, sChangeOrder)

        {

        	var arrRows, arrSort = new Array(), arrChildRow;

        	var sNewOrder, sSort;

        	var nArrLen, nNodeSort;



        	arrRows = take.getTreeNodeRows(this.divDetail.form.grdMenuList, 0, nRow);



        	if (arrRows!=-1)

        	{

        		nArrLen = arrRows.length;



        		for (var i=0; i<nArrLen; i++)

        		{

        			if (arrRows[i]==nRow)

        			{

        				sMenuOrder = sChangeOrder;

        			} else {

        				sMenuOrder = take.nvl(objDs.getColumn(arrRows[i], "MENU_ORDER"),"");

        			}



        			if (sMenuOrder!="")

        			{

        				nIdx = sMenuOrder.lastIndexOf(".");

        				if (nIdx>=0)

        				{

        					sSort = take.nvl(sMenuOrder.substr(nIdx+1),"");

        					arrSort.push([sSort,arrRows[i]]);

        				}

        			}



        		}

        	}



        	arrSort = arrSort.sort();



        	objDs.set_enableevent(false);



        	for (var j=0; j<nArrLen; j++)

        	{

        		nSubRow = arrSort[j][1];

        		sMenuOrder = take.nvl(objDs.getColumn(nSubRow, "MENU_ORDER"),"");

        		if (sMenuOrder!="")

        		{

        			sMenuNewOrder = sMenuOrder.substring(0,nIdx+1) + (j+1).toString().lpad(3,"0");

        		}



        		objDs.setColumn(nSubRow,"MENU_ORDER",sMenuNewOrder);



        		arrChildRow = take.getTreeChildRows(this.divDetail.form.grdMenuList, 0, nSubRow);



        		if (arrChildRow!=-1) this.fnChildOrder(objDs, arrChildRow[0], sMenuOrder, sMenuNewOrder);

        	}



        	objDs.set_enableevent(true);

        };



        this.fnChildOrder = function(objDs, nSubRow, sMenuOrder, sMenuNewOrder)

        {

        	var nLens, nRow, nIdx;

        	var sOrder, sNewOrder;

        	var arrRow, arrSubRow;



        	arrRow = take.getTreeNodeRows(this.divDetail.form.grdMenuList, 0, nSubRow);



        	if (arrRow!=-1)

        	{

        		nLens = arrRow.length;

        		nIdx = sMenuOrder.length;

        		for (var i=0; i<nLens; i++)

        		{

        			nRow = arrRow[i];

        			sOrder = take.nvl(objDs.getColumn(nRow,"MENU_ORDER"),"");



        			if (sOrder.substring(0,nIdx)==sMenuOrder)

        			{

        				sNewOrder = sMenuNewOrder + "." + sOrder.substr(nIdx+1);



        				objDs.setColumn(nRow,"MENU_ORDER",sNewOrder);



        				arrChildRow = take.getTreeChildRows(this.divDetail.form.grdMenuList, 0, nRow);

        				if (arrChildRow!=-1)

        				{

        					this.fnChildOrder(objDs, arrChildRow[0], sOrder, sNewOrder);

        				}

        			}

        		}

        	}

        };


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
                case "projectMenuAllList" : //메뉴리스트 조회
        			var objDs 		= this.dsProjectMenuList;
        			var nRow  		= objDs.rowposition;
        			var objStaMaual = this.divDetail.form.staManualLink;
        			var sManualTxt  = take.nvl(objDs.getColumn(nRow, "MANUAL_TXT"), "");

                    if(sManualTxt != ""){
        				objStaMaual.set_enable(true);
        				objStaMaual.set_cursor("pointer");
        				objStaMaual.set_text("등록됨");
        			}else {
        				objStaMaual.set_text("미등록");
        			}

        			var sChildRow = "";
        			sChildRow = take.getTreeChildRows(this.divDetail.form.grdMenuList, 0, nRow);
        			if(sChildRow != -1){
        				this.divDetail.form.cboMenuType.set_readonly(true);
        			}else{
        				this.divDetail.form.cboMenuType.set_readonly(false);
        			}

        			break;

                case "multilanguageDetailList" :  //조회 콜백
                    //trace("this.dsMultiLanguageInfo.rowcount --> " + this.dsMultiLanguageInfo.rowcount);
                    break;

                case "projectMenuDelete" : 		//메뉴 삭제
        			this.fnSearch("projectMenuAllList");
                    break;

                case "projectMenuSave" : 	   //메뉴 저장
        			var objDs = this.dsProjectMenuList;
        			var nMenuNm  = objDs.getColumn(objDs.rowposition, "MENU_NM");

        			// RowType 값이 신규 추가된 Row의 상태 라면 권한 관리 이동 여부 메시지 표시
        			if(this.fv_nSaveBeforeRowType == 2)
        			{
        				var bRowChange = take.confirm(this, "question", "{name} 권한관리 화면으로 {text}하시겠습니까?", { name : nMenuNm, text : "이동"});
        				if(bRowChange)
        				{
        					// 권한관리 화면 이동 코드 작성		M0009		PM040
        					take.mdiOpenMenu(this, "M0011", "", "", true);
        				}
        			}
                    this.fnSearch("projectMenuAllList");
                    break;

                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }

        /**

         * fnPopCallback : 다국어팝업 콜백

         * @example this.fnPopCallback();

         */

        this.fnPopCallback = function (sId, nReturnVal)

        {

        	if(sId == "addMultiLanguage"){

        		var nRow = this.dsProjectMenuList.rowposition;



        		if(take.nvl(nReturnVal, "") != "") {

        			nReturnVal = nReturnVal.split(",")[0];

        			this.dsProjectMenuList.setColumn(nRow, "ML_CD", nReturnVal);

        		} else return;



        		this.dsMultiLanguageInfo.clearData();

        		take.tranSelect(this, "multilanguageDetailList", "SystemCommon.multilanguageDetailList", "", "dsMultiLanguageInfo", "sMlCd='" + nReturnVal + "'", "fnCallback");

        	}

        };

        this.fnDropCheck = function(sName, sGbn, objUserData, objInfo)
        {
        	console.dir(objUserData);
        	console.dir(objInfo);

        	if (sGbn=="drop")
        	{
        		if (objInfo.gubun=="child")
        		{
        			if (this.dsProjectMenuList.getColumn(objInfo.row,"MENU_TYPE")=="03")
        			{
        				return false;
        			}
        		}
        	}
        }

        //트리 그리드 세팅
        this.fv_objTree._setTakeTreeGrid = function()
        {
            var pThis, opjTreeProp;
            var sTreeProp;
            var nCnt;

            sTreeProp = take.nvl(this.taketree,"");
            // taketree 항목
            // {
            //     use : {  //필수 기능 사용 옵션 all일 경우 전부 true로 인식
            //               add  : true  //(boolean) true or false 노드 추가 여부
            //               del  : true  //(boolean) true or false 노드 삭제 여부
            //               move : false //(boolean) true or false 노드 이동 여부
            //           }
            //   , treeindex    : 0               //(number) 옵션 : 트리 컬럼 인덱스 생략시 그리드의 첫번째 treeitemcontrol 컬럼 index
            //   , codecolid    : "MENU_CD"
            //   , parentcolid  : "PARENT_MENU"  //(string) 필수 : 트리 부모 컬럼 아이디
            //   , ordercolid   : "MENU_ORDER"   //(string) 옵션 : 트리 정렬 컬럼 아이디
            //   , treecallback : "fnTreeCallBack"  //(string) 옵션 : callback 함수명
            //}
            //
            //예제 1 :  {parentcolid:"parent_menu", ordercolid:"menu_order"}
            //예제 2 :  {use:"all", treeindex:0, parentcolid:"parent_menu", ordercolid:"menu_order"}
            //예제 3 :  {use:{add:true,del:true,move:false}, treeindex:0, treekeycolid:"MENU_CD", parentcolid:"parent_menu", ordercolid:"menu_order"}

            //parentform이 없을 경우 부모폼 세팅
            if (take.nvl(this.parentform,"")=="")
            {
                this.parentform = take.getParentForm(this,true);
                pThis = this.parentform;
            }

            //taketree에 값이 있는지 여부 확인
            if (sTreeProp=="")
            {
                take.debug(pThis, "taketree 프로퍼티에 값 없어 기능을 사용 할 수 없습니다.");
                return;
            }

            //taketree값이 Object인지 여부 확인후 Object화
            if (take.isObject(sTreeProp))
            {
                objTreeProp = sTreeProp;
            } else {
                objTreeProp = take.StringToObject(sTreeProp);
                this.taketree = objTreeProp;
            }

            //taketree가 정상적으로 Object화 가 안된경우 ""
            if (objTreeProp=="")
            {
                take.debug(pThis, "taketree 프로퍼티가 Object 형이 아닙니다. ex) {'key0':'value0', 'key1':'value1'...}");
                return;
            }

            //use 가 있는지 여부
            if (objTreeProp.hasOwnProperty("use")) //있을경우
            {
                //all 또는 "" 없을 경우 전체 true
                if (take.nvl(objTreeProp.use,"")=="all" || take.nvl(objTreeProp.use,"")=="")
                {
                    //objTreeProp.use = {add:true, del:true, move:true};
                    objTreeProp.use = {add:true, del:true};
                }
            } else { //없을경우 전체 true
                //objTreeProp["use"] = {add:true, del:true, move:true};
                objTreeProp["use"] = {add:true, del:true};
            }

            //use add, del 가 있는지 여부
            if (!objTreeProp.use.hasOwnProperty("add")) objTreeProp.use["add"] = true;
            if (!objTreeProp.use.hasOwnProperty("del")) objTreeProp.use["del"] = true;
        	//if (!objTreeProp.use.hasOwnProperty("move")) objTreeProp.use["move"] = true;

            //treeindex 가 있는지 여부
            if (!objTreeProp.hasOwnProperty("treeindex"))
            {
                //tree index 찾기
                nCnt = this.getCellCount("Body");

                if (nCnt>0)
                {
                    for (var i=0;i<nCnt;i++)
                    {
                        if (this.getCellProperty( "body", i, "displaytype" )=="treeitemcontrol")
                        {
                            this.treeindex = i;
                            break;
                        }
                    }
                } else {
                    take.debug(pThis, "트리형 그리드가 아닙니다.");
                }
            } else {
                this.treeindex = nexacro.toNumber(objTreeProp.treeindex);
            }

            //parentcolid 가 있는지 여부
            if (objTreeProp.hasOwnProperty("codecolid"))
            {
                this.codecolid = objTreeProp.codecolid;
            }

            //parentcolid 가 있는지 여부
            if (objTreeProp.hasOwnProperty("parentcolid"))
            {
                this.parentcolid = objTreeProp.parentcolid;
            }

            //ordercolid 가 있는지 여부
            if (objTreeProp.hasOwnProperty("ordercolid"))
            {
                this.ordercolid = objTreeProp.ordercolid;
            }

            //treekeycolid 가 있는지 여부
            //if (objTreeProp.hasOwnProperty("trrekeycolid"))
            //{
            //    this.treekeycolid = objTreeProp.treekeycolid;
            //}


            //treecallback 가 있는지 여부
            if (objTreeProp.hasOwnProperty("treecallback"))
            {
                this.treecallback = objTreeProp.treecallback;
            }

        	//treeprecheck 가 있는지 여부
            if (objTreeProp.hasOwnProperty("treeprecheck"))
            {
                this.treeprecheck = objTreeProp.treeprecheck;
            }

            // 추가, 삭제 기능 활성화
            if (objTreeProp.use.add==true || objTreeProp.use.del==true)
            {
                this.addEventHandler("onrbuttondown",  this.treeShowMenu,     pThis);
            }

            //이동 기능 활성화
            if (objTreeProp.use.move)
            {
                this.addEventHandler("ondrag",         this.treeOnDrag,       pThis);
                this.addEventHandler("ondragmove",     this.treeOnDragMove,   pThis);
                this.addEventHandler("ondrop",         this.treeOnDrop,       pThis);
                this.addEventHandler("ondragleave",    this.treeOnDragLeave,  pThis);
            }

        };

        //트리 그리드 스크립트 세팅
        this.fv_objTree.setTakeTree = function(pThis, sOption)
        {
            this.taketree = sOption;
            this.parentform = pThis;
            this._setTakeTreeGrid();
        };

        this.fv_objTree.treeShowMenu = function(obj, e)
        {
            var pThis, objTreePopMenu, objTreePopMenuDs, objTreeProp;
            var nFRow;
            var bShow;

            pThis = obj.parentform;
            objTreePopMenuDs = take.nvl(pThis.objects["_tdsTreePopMenu"],"");
            objTreeProp = obj.taketree;

            obj.getBindDataset().set_rowposition(e.row);

            if (objTreePopMenuDs == "")
            {
        		objTreePopMenuDs = new Dataset;
        		objTreePopMenuDs.load();
        		pThis.addChild("_tdsTreePopMenu", objTreePopMenuDs);

        		var sDsXml =  "<Dataset id=\"_tdsTreePopMenu\">                                  \n";
        			sDsXml += "  <ColumnInfo>                                                    \n";
        			sDsXml += "    <Column id=\"captioncolumn\"  type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"idcolumn\"       type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"levelcolumn\"    type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"enablecolumn\"   type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"userdatacolumn\" type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"visible\"        type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "  </ColumnInfo>                                                   \n";
        			sDsXml += "  <Rows>                                                          \n";

                    if (objTreeProp.use.add)
                    {
                        sDsXml += "    <Row>                                                         \n";
                        sDsXml += "      <Col id=\"captioncolumn\">동일그룹(노드) 추가</Col>       \n";
                        sDsXml += "      <Col id=\"idcolumn\">addlevel</Col>                         \n";
                        sDsXml += "      <Col id=\"levelcolumn\">0</Col>                             \n";
                        sDsXml += "    </Row>                                                        \n";
                        sDsXml += "    <Row>                                                         \n";
                        sDsXml += "      <Col id=\"captioncolumn\">하위그룹(노드) 추가</Col>       \n";
                        sDsXml += "      <Col id=\"idcolumn\">addchildlevel</Col>                    \n";
                        sDsXml += "      <Col id=\"levelcolumn\">0</Col>                             \n";
                        sDsXml += "    </Row>                                                        \n";
                    }

                    if (objTreeProp.use.del)
                    {
                        sDsXml += "    <Row>                                                         \n";
                        sDsXml += "      <Col id=\"captioncolumn\">삭제</Col>                       \n";
                        sDsXml += "      <Col id=\"idcolumn\">deltree</Col>                         \n";
                        sDsXml += "      <Col id=\"levelcolumn\">0</Col>                            \n";
                        sDsXml += "    </Row>	                                                    \n";
                    }

                    sDsXml += "</Rows>                                                          \n";
        			sDsXml += "</Dataset>                                                       \n";

        		objTreePopMenuDs.loadXML(sDsXml);
        	}

            objTreePopMenu = take.nvl(pThis.components["pmTreePop"],"");

            if (objTreePopMenu=="")
        	{
        		objTreePopMenu = new PopupMenu();
        		objTreePopMenu.init("pmTreePop", "absolute", 0, 0, 60, 60, null, null);
        		pThis.addChild("pmTreePop", objTreePopMenu);

        		// Tree Grid 마우스 우측 메뉴 onmenuclickHandler Event
        		objTreePopMenu.addEventHandler("onmenuclick", obj.treeShowPopUp, pThis);

        		objTreePopMenu.set_innerdataset(objTreePopMenuDs.name);
        		objTreePopMenu.set_captioncolumn("captioncolumn");
        		objTreePopMenu.set_idcolumn("idcolumn");
        		objTreePopMenu.set_levelcolumn("levelcolumn");
        		objTreePopMenu.set_enablecolumn("enablecolumn");
        		objTreePopMenu.set_userdatacolumn("userdatacolumn");

                objTreePopMenu.set_itemheight(25);

        		objTreePopMenu.show();
        	}

            //head일 경우 동일노드 추가만 제공
            if (e.row<0)
            {
               bShow = false;
               if (e.row<-1) return false;
            } else { //body일경우 동일노드 추가, 하위노드 추가, 삭제 기능 제공
                bShow = true;
            }

            nFRow = objTreePopMenuDs.findRow(objTreePopMenu.idcolumn, "addchildlevel");
            if (nFRow >= 0) objTreePopMenuDs.setColumn(nFRow, objTreePopMenu.enablecolumn, bShow);
            nFRow = objTreePopMenuDs.findRow(objTreePopMenu.idcolumn, "deltree");
            if (nFRow >= 0) objTreePopMenuDs.setColumn(nFRow, objTreePopMenu.enablecolumn, bShow);

            objTreePopMenu.taketree = obj;
            //objTreePopMenu.trackPopupByComponent(obj, e.canvasx - 60, e.canvasy - 20);
            objTreePopMenu.trackPopupByComponent(obj, e.canvasx, e.canvasy);
        };

        //트리 팝업
        this.fv_objTree.treeShowPopUp = function(obj, e)
        {
            var objGrid, pThis;

            objGrid = obj.taketree;
            pThis = objGrid.parentform;

            switch(e.id)
            {
                case "addlevel" :
                    objGrid._takeTreeAdd(pThis);
                    break;

                case "addchildlevel" :
                    objGrid._takeTreeAddChild(pThis);
                    break;

                case "deltree" :
                    objGrid._takeTreeDel(pThis);
                    break;
            }
        };

        //트리 드래그 이벤트
        this.fv_objTree.treeOnDrag = function(obj, e)
        {
        	e.userdata = e.row;

        	if(e.cell != obj.treeindex) return false;

        	this.fv_objTree.treeDragInfo(obj, e.row, e.cell);
        	//this.fv_nMoveRow= e.row;
        	return true;
        };

        //트리 데이터
        this.fv_objTree.treeDragInfo = function(objGrid, nRow, nIdx)
        {
        	var pThis, objDs, objStaInfo, objStaPos, objStaLine, objRect;
            var sColumn, sText;

            objDs = objGrid.getBindDataset();
            sColumn = objGrid.getCellProperty("body", nIdx, "text");
            sColumn = sColumn.replace("bind:","");
            sText = objDs.getColumn(objGrid.getDatasetRow(nRow), sColumn);
            pThis = objGrid.parentform;
            objRect = objGrid.getCellRect(nRow, nIdx);

            objStaInfo = take.nvl(pThis["_staTreeItemInfo"], "");
            if (objStaInfo=="")
            {
                objStaInfo = new Static("_staTreeItemInfo", objGrid.getOffsetLeft(), objGrid.getOffsetTop(), objRect.width, objRect.height, null, null);
                pThis.addChild("_staTreeItemInfo", objStaInfo);
                objStaInfo.show();
                objStaInfo.set_background("#eeeeee");
                objStaInfo.set_border("2px dotted #bbbbbb");
                objStaInfo.set_usedecorate(true);
            }

            objStaInfo.set_text(sText);
            objStaInfo.treeitemtext = sText;
            objStaInfo.set_visible(true);
            objStaInfo.set_enable(true);

            objStaPos = take.nvl(pThis["_staTreeItemPos"], "");
            if (objStaPos=="")
            {
                objStaPos = new Static("_staTreeItemPos", objGrid.getOffsetLeft(), objGrid.getOffsetTop(), 10, 10, null, null);
                pThis.addChild("_staTreeItemPos", objStaPos);
                objStaPos.show();
                objStaPos.set_background("url('theme://images/ico_WF_group01.png') no-repeat left center");
                objStaPos.set_border("0px solid");
            }

            objStaPos.set_visible(true);
            objStaPos.set_enable(true);

            objStaLine = take.nvl(pThis["_staTreeItemLine"], "");
            if (objStaLine=="")
            {
                objStaLine = new Static("_staTreeItemLine", objGrid.getOffsetLeft(), objGrid.getOffsetTop(), 25, 1, null, null);
                pThis.addChild("_staTreeItemLine", objStaLine);
                objStaLine.show();
                objStaLine.set_border("1px solid #e55723");
                objStaLine.set_enableevent(true);
            }

            objStaLine.set_visible(true);
            objStaLine.set_enable(true);

        }

        //트리 드래그 무브 이벤트
        this.fv_objTree.treeOnDragMove = function(obj, e)
        {
            var nX, nTop, nGap, nHeadCnt, nDiff, nItemTop;
            var sNewGbn;
            var objItemInfo, objRect, objHeadInfo, pThis, objParentXY;

            pThis = obj.parentform;
            nGap = 15;
            objParentXY = take.getParentXY(obj);
            ////this._staTreeItemInfo.move(e.canvasx, e.canvasy + nexacro.toNumber(obj.getFormatRowProperty(0,"size")));
            //nTop = nexacro.toNumber(obj.top); //_getWindowPosition().y==>top, _getWindowPosition().x==>left
            nTop = objParentXY.y;
            objHeadInfo = take.getGridHeadInfo(obj);
            objRect = obj.getCellRect(e.row, 0);

            nX = objParentXY.x + e.canvasx;
            //nDiff = e.canvasy-(nexacro.toNumber(obj.top)+objRect.top);
            nDiff = e.canvasy-objRect.top;
            //trace("e.row --> " + e.row + " / diff --> " + nDiff + " / e.canvasy -->" + e.canvasy + " / nTop --> " + nTop + " / objRect.top --> " + objRect.top);

            if (nDiff<=(objRect.height*0.25))
            {
                nItemTop = objRect.top+nTop+2;
                //trace("Up --> " + nItemTop);
                sNewGbn = "prev";
                sText = "<fc v='#e55723'>(▲)</fc> ";
            } else if (nDiff>=(objRect.height*0.5)) {
                nItemTop = objRect.top+nTop+objRect.height-3;
                //trace("Down --> " + nItemTop);
                sNewGbn = "next";
                sText = "<fc v='#e55723'>(▼)</fc> ";
            } else {
                //nItemTop = e.canvasy;
                nItemTop = objRect.top+nTop+(objRect.height/2);
                //trace("Normal --> " + nItemTop);
                sNewGbn = "child";
                sText = "<fc v='#e55723'>(◆)</fc> ";
            }

            this._staTreeItemPos.move(objParentXY.x, nItemTop-4);
            this._staTreeItemLine.move(objParentXY.x, nItemTop);

            objItemInfo = this._staTreeItemInfo;

            objItemInfo.set_text(sText + objItemInfo.treeitemtext);
            //objItemInfo.move(nX+nGap, e.canvasy+nexacro.toNumber(obj.top)+nGap);
            objItemInfo.move(nX+nGap, e.canvasy+nTop+nGap);
            objItemInfo.treeinsinfo = {gubun:sNewGbn, row:e.row};

        };

        //트리 드롭 이벤트
        this.fv_objTree.treeOnDrop = function(obj, e)
        {
            var objInfo;
            var pThis = obj.parentform;
        	var bRtn;

            this._staTreeItemInfo.set_visible(false);
            this._staTreeItemInfo.set_enable(false);

            this._staTreeItemPos.set_visible(false);
            this._staTreeItemPos.set_enable(false);

            this._staTreeItemLine.set_visible(false);
            this._staTreeItemLine.set_visible(false);

            objInfo = this._staTreeItemInfo.treeinsinfo;

        	if (take.nvl(obj.treeprecheck, "")!="")
        	{
                if (take.isFunction(pThis[obj.treeprecheck]))
                {
                    bRtn =pThis[obj.treeprecheck].call(pThis, this.name, "drop", e.userdata, objInfo);
                } else {
                    take.debug(pThis.name + "." + this.name + ".treeprecheck(" + obj.treeprecheck + ")", "Tree pre check 함수가 없습니다.");
        		}
            }

        	if (bRtn==false) return false;

        	if (obj.iscellmove==true)
        	{
        		this.fv_objTree.treeDataMove(obj, {gubun:objInfo.gubun, beforerow:e.userdata, newrow:objInfo.row});
        		//obj.ismovecomplete= true;
            }
            objInfo = null;
        }

        //트리 드래그 리브 이벤트
        this.fv_objTree.treeOnDragLeave = function(obj, e)
        {
            //trace("dragleave");
        	this._staTreeItemInfo.set_visible(false);
            this._staTreeItemInfo.set_enable(false);

            this._staTreeItemPos.set_visible(false);
            this._staTreeItemPos.set_enable(false);

            this._staTreeItemLine.set_visible(false);
            this._staTreeItemLine.set_visible(false);

            this._staTreeItemInfo.treeinsinfo = null;

        }

        //트리데이터무브이벤트
        this.fv_objTree.treeDataMove = function(obj, objInfo)
        {
            var nNRow, nBRow, nIdx, nCurLev, nCnt, nDeffLev;
            var sGbn, sColumn, sPCode, sPKeyCode;
            var objDs;
            var arrChild;

            pThis = obj.parentform;
            objDs = obj.getBindDataset();
            nIdx = obj.treeindex;
            nNRow = objInfo.newrow;
            nBRow = objInfo.beforerow;
            sGbn = objInfo.gubun;
            sColumn = obj.getCellProperty("body", nIdx, "treelevel");
            sColumn = sColumn.replace("bind:","");
            nCurLev = nexacro.toNumber(objDs.getColumn(nNRow, sColumn));

            //sPCode = objDs.getColumn(nNRow, obj.parentcolid);

            if (sGbn=="child")
            {
                nCurLev++;
                if (nNRow<nBRow)
                {
                    nNRow++;
                }

                if (nNRow==nBRow) return false;

                sPCode = objDs.getColumn(nNRow, take.getBindColName(obj, nIdx));
                sPKeyCode = objDs.getColumn(nNRow, obj.parentcolid);

            } else if (sGbn=="prev") {
                if (nNRow>nBRow)
                {
                    nNRow--;
                }

                if (nNRow==nBRow) return false;

            } else if (sGbn=="next") {
                if (nCurLev != nexacro.toNumber(objDs.getColumn(nBRow, sColumn)))
                {
                    //take.debug(pThis, "동일 레벨만 이동 할 수있습니다.");
                    take.alert(pThis, "Info", "동일 레벨만 이동 할 수있습니다.");
                    return false;
                } else {
                    if(take.getTreeChildRows(obj, nIdx, nNRow)!=-1)
                    {
                        take.alert(pThis, "Info", "해당 위치로 이동 할 없습니다.");
                        return false;
                    }
                }

                if (nNRow<nBRow)
                {
                    nNRow++;
                }

                if (nNRow==nBRow) return false;
            }

            arrChild = take.getTreeFamilyRows(obj, nIdx, nBRow);

            if (arrChild!=-1)
            {
                if (arrChild.indexOf(nNRow)>=0)
                {
                    //take.debug(pThis, "선택한 그룹의 하위로 이동할 수 없습니다.");
                    take.alert(pThis, "Info", "선택한 그룹의 하위로 이동할 수 없습니다.");
                    return false;
                }
            }

            //trace("sGbn --> " + sGbn + " / before row --> " + nBRow + " / new row --> " + nNRow);
            nNRow = objDs.moveRow(nBRow, nNRow);

            if (nNRow>=0)
            {
                //nDeffLev = nexacro.toNumber(objDs.getColumn(nNRow, sColumn))-nCurLev;
                nDeffLev = nCurLev - nexacro.toNumber(objDs.getColumn(nNRow, sColumn));

        //        sPKeyCode = objDs.getColumn(obj.getTreeParentRow(nNRow), obj.codecolid);
        		objDs.setColumn(nNRow, sColumn, nCurLev);
                //sPKeyCode = objDs.getColumn(nNRow, obj.parentcolid);
                objDs.setColumn(nNRow, obj.parentcolid, sPKeyCode);
            } else {
                //take.debug(pThis, "이동 실패");
                take.alert(pThis, "Info", "이동 실패");
                return false;
            }

            if (arrChild!=-1)
            {
                nCnt = arrChild.length;
                if (nCnt>0)
                {
                    //nNRow++;
                    //nCurLev++;

                    for (var i=nCnt-1; i>=0; i--)
                    {
                        if (nNRow>arrChild[i]){
                            nBRow = arrChild[i]-1;
                        } else if (nNRow<arrChild[i]) {
                            nBRow = arrChild[i] + ((nCnt-1)-i);
                            if (nCnt-1==i)
                            {
                                nNRow++;
                            } else {
                                nNRow;
                            }
                        }

                        nNRow = objDs.moveRow(nBRow, nNRow);

                        if (nNRow>=0)
                        {
                            objDs.setColumn(nNRow, sColumn, nexacro.toNumber(objDs.getColumn(nNRow, sColumn)) + nDeffLev);
                            //objDs.setColumn(nNRow, obj.parentcolid, sPCode);
                        } else {
                            take.debug(pThis, "이동 실패");
                            return false;
                        }
                    }
                }
            }

            //obj.treeInitOrder(nCurLev);
            obj.treeInitOrder();

            if (take.nvl(obj.treecallback, "")!="")
        	{
                if (take.isFunction(pThis[obj.treecallback]))
                {
                    pThis[obj.treecallback].call(pThis, this.name, "move", "");
                } else {
                    take.debug(pThis.name + "." + this.name + ".treecallback(" + sCallBack + ")", "Tree CallBack 함수가 없습니다.");
        		}
            }

            return true;
        }

        //트리에 동일 레벨 추가
        this.fv_objTree._takeTreeAdd = function(pThis, nIdx)
        {
            var nRow, nNRow, nCurLev, nTRow, nRowType;
            var objDs, pThis;
            var arrRows;
            var sColumn;

            pThis = this.parentform;
            objDs = this.getBindDataset();
            nIdx = take.nvl(nIdx, this.treeindex);
            nRow = objDs.rowposition;
            nTRow = this.getTreeRow(nRow);
        	nRowType = objDs.getRowType(nRow);

        	//20210120 정해원
        	//노드추가 -> 노드추가 하면 저장 할 때
        	//상위노드의 MENU_CD가 생성되기 전이라 오류발생
        	//메세지 처리 추가 (저장 후 진행해주세요)
        	if (nRowType != Dataset.ROWTYPE_NORMAL && nRowType != Dataset.ROWTYPE_EMPTY) {
        		take.alert(pThis, "info", "저장 후 진행해주시기 바랍니다.");
        		return;
        	}

            this.selectRow(nTRow, false);

            arrRows = take.getTreeNodeRows(this, nIdx, nRow);
            if (arrRows!=-1)
            {
                nNRow = Math.max.apply(null, arrRows);
            }

            arrRows = take.getTreeFamilyRows(this, nIdx, nNRow);
            if (arrRows!=-1)
            {
                nNRow = Math.max.apply(null, arrRows);
            }

            nNRow = objDs.insertRow(nNRow+1);

            if (nNRow>=0)
            {
                sColumn = this.getCellProperty("body", nIdx, "treelevel");
                sColumn = sColumn.replace("bind:","");

                nCurLev = nexacro.toNumber(objDs.getColumn(nRow, sColumn), 0);

                objDs.setColumn(nNRow, sColumn, nCurLev);
                objDs.setColumn(nNRow, take.getBindColName(this, nIdx), "new item");
                objDs.setColumn(nNRow, this.parentcolid, objDs.getColumn(nRow, this.parentcolid));

                //this.treeInitOrder(nCurLev);
            }

            objDs.set_rowposition(nNRow);

            nTRow = this.getTreeRow(nNRow)
            this.selectRow(nTRow);

            this.treeInitOrder();

            if (take.nvl(this.treecallback, "")!="")
        	{
                if (take.isFunction(pThis[this.treecallback]))
                {
                    pThis[this.treecallback].call(pThis, this.name, "add", nNRow);
                } else {
                    take.debug(pThis.name + "." + this.name + ".treecallback(" + sCallBack + ")", "Tree CallBack 함수가 없습니다.");
        		}
            }

            return nNRow;
        };

        //트리에 하위 레벨 추가
        this.fv_objTree._takeTreeAddChild = function(pThis, nIdx)
        {
            var nRow, nNRow, nCurLev, nTRow, nRowType;
            var objDs, pThis;
            var sColumn;

            pThis = this.parentform;
            objDs = this.getBindDataset();
            nRow = objDs.rowposition;
            nIdx = take.nvl(nIdx, this.treeindex);
            nTRow = this.getTreeRow(nRow);
        	nRowType = objDs.getRowType(nRow);

        	//20210120 정해원
        	//노드추가 -> 노드추가 하면 저장 할 때
        	//상위노드의 MENU_CD가 생성되기 전이라 오류발생
        	//메세지 처리 추가 (저장 후 진행해주세요)
        	if (nRowType != Dataset.ROWTYPE_NORMAL && nRowType != Dataset.ROWTYPE_EMPTY) {
        		take.alert(pThis, "info", "저장 후 진행해주시기 바랍니다.");
        		return;
        	}

            this.selectRow(nTRow, false);

            if (this.isTreeLeafRow(nTRow, true))
            {
                nNRow = objDs.insertRow(nRow+1);
            } else {
                nNRow = objDs.insertRow(Math.max.apply(null, take.getTreeFamilyRows(this, nIdx, nRow))+1);
            }

            if (nNRow>=0)
            {
                sColumn = this.getCellProperty("body", nIdx, "treelevel");
                sColumn = sColumn.replace("bind:","");

                nCurLev = nexacro.toNumber(objDs.getColumn(nRow, sColumn), 0)+1;

                objDs.setColumn(nNRow,sColumn,nCurLev);
                objDs.setColumn(nNRow, take.getBindColName(this, nIdx), "new item");
                objDs.setColumn(nNRow, this.parentcolid, objDs.getColumn(nRow, this.parentcolid));

                //this.treeInitOrder(nCurLev);
            }

            nTRow = this.getTreeRow(nNRow);
            this.selectRow(nTRow);

            this.treeInitOrder();

            if (take.nvl(this.treecallback, "")!="")
        	{
                if (take.isFunction(pThis[this.treecallback]))
                {
                    pThis[this.treecallback].call(pThis, this.name, "add", nNRow);
                } else {
                    take.debug(pThis.name + "." + this.name + ".treecallback(" + sCallBack + ")", "Tree CallBack 함수가 없습니다.");
        		}
            }

            return nNRow;
        };

        //트리 아이템 삭제
        this.fv_objTree._takeTreeDel = function(pThis, nIdx)
        {
            var nCnt, nRow, nCurLev;
            var objDs, pThis;
            var arrRows;
            var sColumn;

            objDs = this.getBindDataset();
            nRow = objDs.rowposition;
            nIdx = take.nvl(nIdx, this.treeindex);
            //sColumn = obj.getCellProperty("body", nIdx, "treelevel");
            //sColumn = sColumn.replace("bind:","");
            //nCurLev = nexacro.toNumber(objDs.getColumn(nRow, sColumn));

            if (this.isTreeLeafRow(nRow, true))
            {
                objDs.deleteRow(nRow);
            } else {

                arrRows = take.getTreeFamilyRows(this, nIdx, nRow);

                nCnt = arrRows.length-1;

                //trace("arrRows --> " + arrRows);

                //반복 필요
                for (var i=nCnt; i>=0; i--)
                {
                    //trace("arrRows["+i+"] --> " + arrRows[i]);
                    objDs.deleteRow(arrRows[i]);
                }

                //trace("nRow --> " + nRow);
                objDs.deleteRow(nRow);
            }

            if (nRow==objDs.rowcount) nRow = nRow-1;
            this.selectRow(this.getTreeRow(nRow));

            //this.treeInitOrder(nCurLev);
            this.treeInitOrder();

            if (take.nvl(this.treecallback, "")!="")
        	{
                if (take.isFunction(pThis[this.treecallback]))
                {
                    pThis[this.treecallback].call(pThis, this.name, "del", "");
                } else {
                    take.debug(pThis.name + "." + this.name + ".treecallback(" + sCallBack + ")", "Tree CallBack 함수가 없습니다.");
        		}
            }
        };

        //this.fv_objTree.treeInitOrder = function(sLvl)
        //{
        //    this._setTreeOrder(sLvl);
        //}

        this.fv_objTree.treeInitOrder = function()
        {
            var objLvlInfo;

            objLvlInfo = take.getTreeLevelInfo(this, this.treeindex);

            for (var i=objLvlInfo.min;i<=objLvlInfo.max;i++)
            {
                this._setTreeOrder(i);
            }
        }

        this.fv_objTree._setTreeOrder = function(nLvl)
        {
            var arrRows;
            var nIdx, nCnt, nPRow, nNo=1;
            var objDs;
            var sColId, sPOrder, sOrder;

            nIdx = this.treeindex;
            arrRows = take.getTreeLevRows(this, nIdx, nLvl);
            nCnt = arrRows.length;

            if (nCnt<=0) return false;

            objDs = this.getBindDataset();
            sColId = this.ordercolid;

            objDs.set_enableevent(false);

            for (var i=0; i<nCnt; i++)
            {
                nPRow = this.getTreeParentRow(arrRows[i]);

                if (nPRow>=0)
                {
                    sPOrder = objDs.getColumn(nPRow,sColId);
                } else {
                    sPOrder ="";
                }

                if (nPRow!=this.getTreeParentRow(arrRows[i-1])) nNo=1;

                sOrder = (sPOrder==""?"": sPOrder+".") + nNo.toString().padLeft(3,"0");

                objDs.setColumn(arrRows[i],sColId,sOrder);

                nNo++;
            }

            objDs.set_enableevent(true);

        }

        // this.fv_objTree._setTreeOrder = function(nLvl)
        // {
        //     var arrRows;
        //     var nIdx, nCnt, nPRow, nNo=1;
        //     var objDs;
        //     var sColId, sPOrder, sOrder;
        //
        //     nIdx = this.treeindex;
        //     arrRows = take.getTreeLevRows(this, nIdx, nLvl);
        //     nCnt = arrRows.length;
        //
        //     if (nCnt<=0) return false;
        //
        //     objDs = this.getBindDataset();
        //     sColId = this.ordercolid;
        //
        //     objDs.set_enableevent(false);
        //
        //     for (var i=0; i<nCnt; i++)
        //     {
        //         nPRow = this.getTreeParentRow(arrRows[i]);
        //
        //         if (nPRow>=0)
        //         {
        //             sPOrder = objDs.getColumn(nPRow,sColId);
        //         } else {
        //             sPOrder ="";
        //         }
        //
        //         if (nPRow!=this.getTreeParentRow(arrRows[i-1])) nNo=1;
        //
        //         sOrder = (sPOrder==""?"": sPOrder+".") + nNo.toString().padLeft(3,"0");
        //
        //         objDs.setColumn(arrRows[i],sColId,sOrder);
        //
        //         nNo++;
        //     }
        //
        //     objDs.set_enableevent(true);
        //
        // }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM030_onload,this);
            this.divSearch.form.edtMenu.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divDetail.form.grdMenuList.addEventHandler("onselectchanged",this.grdMenuList_onselectchanged,this);
            this.divDetail.form.grdMenuList.addEventHandler("oncellclick",this.divDetail_grdMenuList_oncellclick,this);
            this.divDetail.form.grdMenuList.addEventHandler("ondrag",this.divDetail_grdMenuList_ondrag,this);
            this.divDetail.form.edtMenuNm.addEventHandler("onchanged",this.divDetail_edtMenuNm_onchanged,this);
            this.divDetail.form.btnMultiLanguage.addEventHandler("onclick",this.divDetail_btnMultiLanguage_onclick,this);
            this.divDetail.form.cboMenuType.addEventHandler("onitemchanged",this.divDetail_cboMenuType_onitemchanged,this);
            this.divDetail.form.staMenuListT.addEventHandler("onclick",this.divDetail_staMenuListT_onclick,this);
            this.divDetail.form.staManualLink.addEventHandler("onclick",this.divDetail_staManualLink_onclick,this);
            this.divDetail.form.edtScreen.addEventHandler("onchanged",this.divDetail_edtScreen_onchanged,this);
            this.divDetail.form.btnScreen.addEventHandler("onclick",this.btnDirector_onclick,this);
            this.divDetail.form.staMenuIcon.addEventHandler("onclick",this.divDetail_staMenuIcon_onclick,this);
            this.divDetail.form.staMenuParam.addEventHandler("onclick",this.divDetail_staMenuParam_onclick,this);
            this.divDetail.form.btnParam.addEventHandler("onclick",this.divDetail_btnParam_onclick,this);
            this.divDetail.form.spnSort.addEventHandler("onchanged",this.divDetail_spnSort_onchanged,this);
            this.dsProjectMenuList.addEventHandler("onrowposchanged",this.dsProjectMenuList_onrowposchanged,this);
            this.dsProjectMenuList.addEventHandler("canrowposchange",this.dsProjectMenuList_canrowposchange,this);
        };
        this.loadIncludeScript("PM030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
