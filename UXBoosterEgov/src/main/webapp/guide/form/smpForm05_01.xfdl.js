(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpForm05_01");
            this.set_titletext("Sample05_01 - CRUD");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"USER_STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn02", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboAgreeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPosition", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staDeptT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDept","staDeptT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.12%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleL","0","0",null,"21","770",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("부서 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleR","270","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitleL:5","250",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsDept");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.set_scrollbarsize("10");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"138\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDetail","grdList:20","staTitleR:5",null,null,"0","407",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.getSetter("takegrid").set("crud");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사용자 ID\"/><Cell col=\"1\" text=\"사용자명\"/><Cell col=\"2\" text=\"사용자 영문명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"휴대폰번호\"/><Cell col=\"7\" text=\"전화번호\"/><Cell col=\"8\" text=\"팩스\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_NM\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:USER_ENG_NM\" autosizerow=\"limitmin\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USER_POSITION_NM\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:USER_EMAIL\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"bind:USER_MOBILE\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:USER_TEL\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:USER_FAX\" autosizerow=\"limitmin\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSubDetail","grdList:20","grdDetail:10",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleSub","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("0");
            obj.set_text("사용자 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staBirDayY","0","86","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("1");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10","118","86",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staStatusT","394","86","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","0","116","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00","118","116",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staJoinDtT","0","146","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("6");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","118","146",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPwChangeT","0","176","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("8");
            obj.set_text("비밀번호변경일시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","118","176",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staDescTxtT","0","206","120","131",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("10");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","118","206",null,"131","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","0","336","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("12");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00","118","336",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","0","366","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("14");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00_00","118","366",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staAgreeYnT","394","116","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("16");
            obj.set_text("동의여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginIpT","394","146","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("17");
            obj.set_text("접속IP");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginBrowserT","394","176","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("18");
            obj.set_text("접속환경");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staRegNmT","394","336","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("19");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staModNmT","394","366","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("20");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginIp","521","146","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("21");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staJoinDt","127","146","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("22");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginBrowser","521","176","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("23");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPwChange","127","176","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("24");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","521","336","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("25");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","127","336","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("26");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","521","366","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("27");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","127","366","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("28");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDescTxt","127","214",null,"115","7",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Calendar("calBirDay","127","91","260","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("30");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Combo("Combo00","521","91","260","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsCboStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Combo("cmbAgreeYn","521","121","260","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsCboAgreeYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Combo("cmbUseYn","127","121","260","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsCboUseYn02");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_01","118","56",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Combo("edtPosition","521","61","260","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("35");
            obj.set_innerdataset("dsCboPosition");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPositionT","394","56","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("36");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staUserEngNmT","0","56","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("37");
            obj.set_text("사용자 영문명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_01_00","118","26",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staUserNmT","394","26","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("39");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staUserIdT","0","26","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("40");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserId","127","31","260","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("41");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","521","31","260","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("42");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserEngNm","127","61","260","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("43");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","822",null,null,"0","0",null,null,null,null,this);
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

            //-- Default Layout : this.divDetail.form.divSubDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form.divSubDetail.form,function(p){});
            this.divDetail.form.divSubDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.divSubDetail.form.staLoginIp","text","dsList","LOGIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.divSubDetail.form.staJoinDt","text","dsList","JOIN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.divSubDetail.form.staLoginBrowser","text","dsList","LOGIN_BROWSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.divSubDetail.form.staPwChange","text","dsList","PW_CHANGE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.divSubDetail.form.staRegNm","text","dsList","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.divSubDetail.form.staRegDt","text","dsList","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.divSubDetail.form.staModNm","text","dsList","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.divSubDetail.form.staModDt","text","dsList","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.divSubDetail.form.txtDescTxt","value","dsList","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.divSubDetail.form.calBirDay","value","dsList","USER_BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.divSubDetail.form.Combo00","value","dsList","USER_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.divSubDetail.form.cmbAgreeYn","value","dsList","AGREE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.divSubDetail.form.cmbUseYn","value","dsList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.divSubDetail.form.edtPosition","value","dsList","USER_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.divSubDetail.form.edtUserId","value","dsList","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.divSubDetail.form.edtUserNm","value","dsList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.divSubDetail.form.edtUserEngNm","value","dsList","USER_ENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpForm05_01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    smpForm05_01.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.10.22
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.10.22      김대승             최초 생성
        *  2021.05.18      신준민             tranSave -> transaction 변경
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
                //초기화
                this.fnInit();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow, fnExcel, fnPrint)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	var objDivSearch;

        	objDivSearch = this.divSearch.form;

        	//공통코드
        	this.fnCommonCode();

        	//벨리데이션 등록
        	takeval.add(this, "Search", objDivSearch.cboUseYn, objDivSearch.staUseYnT.text, "value", true, "string", "", "");
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
            if (take.nvl(sTranId, "")=="") sTranId = "deptSelect";

        	// Object
        	var objDsDept, objDsList, objDivSearch;
        	// Variable
        	var sDeptCd, sDeptNm, sUserCd, sUseYn;

        	objDsDept 	 = this.dsDept;
        	objDsList 	 = this.dsList;

        	objDivSearch = this.divSearch.form;

        	switch(sTranId) {
                case "deptSelect":
        			// 벨리데이션 체크
        			if(!takeval.check(this, "Search")) return;

                    objDsDept.clearData();
        			objDsList.clearData();

                    sDeptNm = take.nvl(objDivSearch.edtDept.value, "");
                    sUseYn  = objDivSearch.cboUseYn.value;

                    take.tranSelect
        			(
                        this,
                        sTranId,
                        "Sample.smpForm05DeptSelect",
                        "",
                        "dsDept",
                        "sDeptNm=" + sDeptNm + " sUseYn=" + sUseYn,
                        "fnCallBack",
                        false
                    );
                    break;

                case "userSelect":
        			objDsList.clearData();

                    sDeptCd = objDsDept.getColumn(objDsDept.rowposition, "DEPT_CD");

        			take.tranSelect
        			(
                        this,
                        sTranId,
                        "Sample.smpForm05Select",
                        "",
                        "dsList",
                        "sDeptCd=" + sDeptCd,
                        "fnCallBack"
        			);
                    break;

                default:
            }
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
            if (take.nvl(sTranId, "")=="") sTranId = "userSave";

        	//데이터셋 수정 여부 확인
            if (!take.isDsModified(this.dsList))
            {
        		take.alert(this, "Info", "변경된 데이터가 없습니다.");
        		return false;
            }

        	if(this.dsList.rowcount > 0){
        		//저장 전 벨리데이션 체크
        		var bRtn =
        			takeval.checkComp
        			(
        				this,                           	 //현재 Form Object
        				this.divDetail.form.divSubDetail,	 //벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
        				"essential",                    	 //필수 입력 css값
        				"fnValCallBack",                 	 //성공 Call Back 함수
        				true								 //동기 여부
        			);
        	}

        	//벨리데이션 체크 완료 후
        	if (bRtn)
        	{
        		//take.tranSave(this, sTranId, "Sample.smpForm05", "dsList", "", "", "fnCallBack");
                take.transaction(this, sTranId, "SVC_LOC::sample/smpForm05Save.do", "dsList=dsList:U", "", "", "fnCallBack");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdDetail";

        	// Object
        	var objDsList, objDsDept;
        	// Variable
        	var nAddRow, nRowPosition;

        	objDsDept    = this.dsDept;
        	nRowPosition = objDsDept.rowposition;

        	objDsList 	 = this.dsList;
        	nAddRow 	 = objDsList.addRow();

        	objDsList.setColumn(nAddRow, "DEPT_CD"	  	, objDsDept.getColumn(nRowPosition, "DEPT_CD"))
        	objDsList.setColumn(nAddRow, "DEPT_NM"	  	, objDsDept.getColumn(nRowPosition, "DEPT_NM"))
        	objDsList.setColumn(nAddRow, "USE_YN"	  	, "Y");
        	objDsList.setColumn(nAddRow, "AGREE_YN"	    , "Y");
        	objDsList.setColumn(nAddRow, "USER_STATUS"  , "01");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdDetail";

        	// Object
        	var objDs;
        	// Variable
        	var arrChk;

        	objDs  = this.dsList;
        	arrChk = take.getChkRow(objDs);

        	if(arrChk.length > 0) {
        		if (take.confirm(this, "Info", "삭제 하시겠습니까?"))
                {
        			objDs.set_enableevent(false);
                    objDs.deleteMultiRows(arrChk);
        			objDs.set_rowposition(0);
        			objDs.set_enableevent(true);
                }
        	} else {
        		take.alert(this, "Info", "선택된 행이 없습니다.");
                return;
        	}
        }

        /**
         * fnExcel : 엑셀 다운로드 함수 (필수) --> 공통 엑셀 다운로드에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @return {N/A} N/A
         * @example this.fnExcel(sGrdId, nRow);
         */
        this.fnExcel = function(sGrdId)
        {
            return false;
        }

        /**
         * fnPrint : 출력 함수 (필수)
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnPrint();
         */
        this.fnPrint = function()
        {
            return false;
        }
        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //부서 목록 선택 변경이벤트
        this.divDetail_grdList_onselectchanged = function(obj,e)
        {
            this.fnSearch("userSelect");
        };

        //사용유무 콤보 변경 이벤트
        this.divSearch_cboUseYn_onitemchanged = function(obj,e)
        {
        	this.fnSearch("deptSelect");
        };

        //부서명 입력창 키 다운 이벤트
        this.divSearch_edtDept_onkeydown = function(obj,e)
        {
            if (e.keycode==13)
            {
                this.fnSearch("deptSelect");
            }
        };

        //데이터셋 row 변경 이벤트 발생 전
        this.dsDept_canrowposchange = function(obj,e)
        {
        	// Object
        	var objDsDetailList;
        	// Variable
        	var nRowType;

        	objDsDetailList = this.dsList;

        	//데이터셋 수정 여부 확인
            if (take.isDsModified(objDsDetailList))
            {
        		nRowType = objDsDetailList.getRowType(0);
        		if(nRowType != 8) {
        			//행 변경 수행 여부 확인
        			if (!take.confirm(this, "Info", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?"))
        			{
        				objDsDetailList.reset();
        				return false;
        			}
        		}
            }
        };

        //데이터셋 row 변경 이벤트 발생 전
        this.dsList_canrowposchange = function(obj,e)
        {
        	// Object
        	var objDsMarster, objDsDetailLis;
        	// Variable
        	var nRowType;

        	objDsDetailList = this.dsList;
        	objDsMarster    = this.dsDept;

        	//데이터셋 수정 여부 확인_ 마스터row 변경없이 디테일 신규 row 추가시
            if (take.isDsModified(objDsDetailList) && !take.isDsModified(objDsMarster))
            {
        		nRowType = obj.getRowType(e.oldrow);
        		if(nRowType != 1) {
        			//행 변경 수행 여부 확인
        			if (!take.confirm(this, "Info", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?"))
        			{
        				obj.reset();
        				return false;
        			} else {
        				if(nRowType == 2) {
        					obj.reset();
        				}
        			}
        		}
            }
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCommonCode : 코드호출 함수
         * @param  {String} N/A
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	// Object
        	var objDsCboUseYn, objDivSearch;

        	objDivSearch  = this.divSearch.form;
        	objDsCboUseYn = this.dsCboUseYn;

            var sOutDs      = ["dsCboUseYn"	, "dsCboUseYn02", "dsCboAgreeYn", "dsCboStatus"	, "dsCboPosition"];
            var sGroupCodes = ["00009"		, "00009"		, "00031"		, "00017"		, "00015"		 ];
            var sHeaderType = ["SEL"		, ""			, ""			, ""			, ""			 ];

            take.tranCode
        	(
                this,
                sGroupCodes,
                sOutDs,
                sHeaderType,
                function(sId, nErrCd, sErrMsg)
                {
                    if (objDsCboUseYn.rowcount > 0){
                        objDivSearch.cboUseYn.set_index(0);
                    }
                },
        		false
        	);
        };

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

            // Object
        	var objDsDept, objDsList, objDivDetail;

        	objDivDetail = this.divDetail.form;
        	objDsDept 	 = this.dsDept;
        	objDsList 	 = this.dsList;

            switch(sId)
            {
                case "deptSelect" :  //마스터 조회 콜백
                    objDivDetail.staTitleL.set_text("부서목록 (총 " + objDsDept.rowcount + "건)");
        			this.fnSearch("userSelect");
                    break;

                case "userSelect" : //디테일 조회 콜백
                    objDivDetail.staTitleR.set_text("사용자 목록 (총 " + objDsList.rowcount + "건)");
                    break;

        		case "userDelete" : //삭제 콜백
                    this.fnSearch("userSelect");
                    break;

                default :
                    break;
            }
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_cboUseYn_onitemchanged,this);
            this.divSearch.form.edtDept.addEventHandler("onkeydown",this.divSearch_edtDept_onkeydown,this);
            this.divDetail.form.grdList.addEventHandler("onselectchanged",this.divDetail_grdList_onselectchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsDept.addEventHandler("canrowposchange",this.dsDept_canrowposchange,this);
        };
        this.loadIncludeScript("smpForm05_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
