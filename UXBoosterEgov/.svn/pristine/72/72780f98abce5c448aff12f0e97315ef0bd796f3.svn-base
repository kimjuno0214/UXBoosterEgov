(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpForm05");
            this.set_titletext("Sample05");
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
            obj.set_autosizingtype("row");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.set_scrollbarsize("10");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"138\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDetail","grdList:20","staTitleR:5",null,null,"0","352",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj.getSetter("takegrid").set("select");
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

            obj = new Static("staIdT","0","26","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("1");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10","118","26",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staNameT","394","26","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("3");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staBirthDayT","0","56","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00","118","56",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staMobileT","0","86","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("6");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","118","86",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staFaxT","0","116","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("8");
            obj.set_text("비밀번호변경일시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","118","116",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staDeptNmT","0","146","120","131",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("10");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","118","146",null,"131","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","0","276","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("12");
            obj.set_text("등록일시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00","118","276",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginDateT","0","306","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("14");
            obj.set_text("수정일시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00_00","118","306",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staEmailT","394","56","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("16");
            obj.set_text("동의여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staTelT","394","86","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("17");
            obj.set_text("접속IP");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPostNoT","394","116","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("18");
            obj.set_text("접속환경");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staAgreeYnT","394","276","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("19");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPwChangeDateT","394","306","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("20");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staId","127","26","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("21");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staName","521","26","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("22");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staEmail","521","56","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("23");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staBirthDay","127","56","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("24");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staTel","521","86","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("25");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staMobile","127","86","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("26");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPostNo","521","116","200","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("27");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staFax","127","116","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("28");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staAgreeYn","521","276","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("29");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staUseYn","127","276","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("30");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPwChangeDate","521","306","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("31");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginDate","127","306","260","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("32");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","127","154",null,"115","7",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.divSubDetail.form.staId","text","dsList","USER_BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.divSubDetail.form.staName","text","dsList","USER_STATUS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.divSubDetail.form.staEmail","text","dsList","AGREE_YN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.divSubDetail.form.staBirthDay","text","dsList","USE_YN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.divSubDetail.form.staTel","text","dsList","LOGIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.divSubDetail.form.staMobile","text","dsList","JOIN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.divSubDetail.form.staPostNo","text","dsList","LOGIN_BROWSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.divSubDetail.form.staFax","text","dsList","PW_CHANGE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.divSubDetail.form.staAgreeYn","text","dsList","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.divSubDetail.form.staUseYn","text","dsList","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.divSubDetail.form.staPwChangeDate","text","dsList","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.divSubDetail.form.staLoginDate","text","dsList","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.divSubDetail.form.TextArea00","value","dsList","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpForm05.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    smpForm05.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.10.21
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.10.21      김대승             최초 생성
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
                    sUseYn = objDivSearch.cboUseYn.value;

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
                    break

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
            if (take.nvl(sTranId, "")=="") sTranId = "";
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "";
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "";
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

            var sOutDs      = ["dsCboUseYn"];
            var sGroupCodes = ["00009"];
            var sHeaderType = ["SEL"];

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
            this.dsDept.addEventHandler("canrowposchange",this.dsDept_canrowposchange,this);
        };
        this.loadIncludeScript("smpForm05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
