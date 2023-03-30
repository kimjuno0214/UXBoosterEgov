(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpForm07_01");
            this.set_titletext("Sample07_01 - CRUD");
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


            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsCboDept", this);
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

            obj = new Combo("cmbDept","staDeptT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.12%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleL","0","0","310","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitleL:5","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsUserList");
            obj.set_autosizingtype("row");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"298\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell text=\"bind:USER_NM\" autosizerow=\"limitmin\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LEVEL\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSubDetail","grdList:20","0",null,"327","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleR","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("0");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staIdT","0","26","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("1");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10","118","26",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staNameT","334","26","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staBirthDayT","0","56","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("4");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00","118","56",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staMobileT","0","86","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("6");
            obj.set_text("모바일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","118","86",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staFaxT","0","116","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("8");
            obj.set_text("팩스");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","118","116",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staAddressT","0","146","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("10");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","118","146",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staDeptNmT","0","176","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("12");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","118","176",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","0","206","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("14");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00","118","206",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginDateT","0","236","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("16");
            obj.set_text("로그인일자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00_00","118","236",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginBrowserT","0","266","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("18");
            obj.set_text("로그인 브라우저");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00_00_00","118","266",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staJoinDateT","0","296","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("20");
            obj.set_text("가입일자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00_00_00_00","118","296",null,"31","0",null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staEmailT","334","56","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("22");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staTelT","334","86","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("23");
            obj.set_text("유선전화");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPostNoT","334","116","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("24");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staStatusT","334","176","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("25");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staAgreeYnT","334","206","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("26");
            obj.set_text("동의유무");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPwChangeDateT","334","236","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("27");
            obj.set_text("비밀번호 변경일자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginIpT","334","266","120","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("28");
            obj.set_text("로그인 IP");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staAddress","127","146","533","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("29");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staPwChangeDate","461","236","200","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("30");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginDate","127","236","200","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("31");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginIp","461","266","200","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("32");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staLoginBrowser","127","266","200","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("33");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Static("staJoinDate","127","296","200","31",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("34");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtId","127","31","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("35");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtName","461","31","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("36");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Calendar("calBirthDay","126","61","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("37");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmail","461","61","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("38");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtTel","461","91","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("39");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtPostNo","461","121","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("40");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtMobile","127","91","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("41");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtFax","127","121","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("42");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Edit("edtAddress","127","151","535","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("43");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Combo("cboDeptNm","127","181","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("44");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_innerdataset("dsCboDept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Combo("cmbStatus","461","181","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("45");
            obj.set_innerdataset("dsCboStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Combo("cmbUseYn","127","211","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("46");
            obj.set_innerdataset("dsCboUseYn02");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divDetail.form.divSubDetail.addChild(obj.name, obj);

            obj = new Combo("cmbAgreeYn","461","211","200","21",null,null,null,null,null,null,this.divDetail.form.divSubDetail.form);
            obj.set_taborder("47");
            obj.set_innerdataset("dsCboAgreeYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
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
            obj = new BindItem("item0","divDetail.form.divSubDetail.form.staPwChangeDate","text","dsList","PW_CHANGE_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.divSubDetail.form.staLoginDate","text","dsList","LAST_LOGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.divSubDetail.form.staLoginIp","text","dsList","LOGIN_IP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.divSubDetail.form.staLoginBrowser","text","dsList","LOGIN_BROWSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.divSubDetail.form.staJoinDate","text","dsList","JOIN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.divSubDetail.form.edtId","value","dsList","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.divSubDetail.form.edtName","value","dsList","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.divSubDetail.form.calBirthDay","value","dsList","USER_BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.divSubDetail.form.edtEmail","value","dsList","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.divSubDetail.form.edtTel","value","dsList","USER_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.divSubDetail.form.edtPostNo","value","dsList","POST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.divSubDetail.form.edtMobile","value","dsList","USER_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.divSubDetail.form.edtFax","value","dsList","USER_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.divSubDetail.form.edtAddress","value","dsList","USER_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.divSubDetail.form.cboDeptNm","value","dsList","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.divSubDetail.form.cmbStatus","value","dsList","USER_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.divSubDetail.form.cmbUseYn","value","dsList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.divSubDetail.form.cmbAgreeYn","value","dsList","AGREE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpForm07_01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    smpForm07_01.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.10.26
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.10.26      김대승             최초 생성
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
        	var objDsUserList, objDsList, objDsDept, objDivSearch;
        	// Variable
        	var sDeptCd, sUserCd, sUseYn;

        	objDsUserList = this.dsUserList;
        	objDsList 	  = this.dsList;
        	objDsDept     = this.dsDept;
        	objDivSearch  = this.divSearch.form;

        	switch(sTranId) {
        		case "UserListSelect":
        			// 벨리데이션 체크
        			if(!takeval.check(this, "Search")) return;

        			objDsUserList.clearData();
        			objDsList.clearData();

        			sDeptCd = take.nvl(objDivSearch.cmbDept.value, "");
        			sUseYn  = take.nvl(objDivSearch.cboUseYn.value, "");

        			take.tranSelect
        			(
        				this,
        				"UserListSelect",
        				"Sample.smpForm07UserListSelect",
        				"",
        				"dsUserList",
        				"sDeptCd=" + sDeptCd + " sUseYn=" + sUseYn,
        				"fnCallBack",
        				false
        			);
        			break;

                case "deptSelect":
                    objDsUserList.clearData();
        			objDsList.clearData();

                    sUseYn  = objDivSearch.cboUseYn.value;

                    take.tranSelect
        			(
                        this,
                        sTranId,
                        "Sample.smpForm07DeptSelect",
                        "",
                        "dsDept",
        				"sUseYn=" + sUseYn,
                        "fnCallBack"
                    );
                    break;

                case "userSelect":
        			objDsList.clearData();

                    sUserCd = objDsUserList.getColumn(objDsUserList.rowposition, "USER_CD");

        			take.tranSelect
        			(
                        this,
                        sTranId,
                        "Sample.smpForm07Select",
                        "",
                        "dsList",
                        "sUserCd=" + sUserCd,
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
        		if (!take.isDsModified(this.dsUserList))
        		{
        			take.alert(this, "Info", "변경된 데이터가 없습니다.");
        			return false;
        		}
            }

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

        	//벨리데이션 체크 완료 후
        	if (bRtn)
        	{
        // 		if(take.isDsModified(this.dsUserList)){
        // 			take.tranSave(this, "userDelete", "Sample.smpForm07", "dsUserList", "", "", "fnCallBack");
        // 		}
        		//take.tranSave(this, sTranId, "Sample.smpForm07", "dsList", "", "", "fnCallBack");
                take.transaction(this, sTranId, "SVC_LOC::sample/smpForm07Save.do", "dsUserList=dsUserList:U dsList=dsList:U", "", "", "fnCallBack");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdList";

        	// Object
        	var objDivSearch, objDsList, objDsUserList;;
        	// Variable
        	var nAddRow, nRowPosition;

        	objDivSearch  = this.divSearch.form;
        	objDsUserList = this.dsUserList;	// 마스터
        	objDsList     = this.dsList;		// 디테일

        	nRowPosition = objDsUserList.rowposition;
        	nAddRow 	 = objDsList.addRow();

        	objDsList.setColumn(nAddRow, "USER_CD"	  , objDsUserList.getColumn(nRowPosition, "USER_CD"));
        	objDsList.setColumn(nAddRow, "DEPT_CD"	  , objDsUserList.getColumn(nRowPosition, "DEPT_CD"));
        	objDsList.setColumn(nAddRow, "USE_YN"	  , "Y");
        	objDsList.setColumn(nAddRow, "AGREE_YN"	  , "Y");
        	objDsList.setColumn(nAddRow, "USER_STATUS", "01");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdList";

        	// Object
        	var objDsUserList;
        	// Variable
        	var nRowPosition;

        	objDsUserList = this.dsUserList;
        	nRowPosition  = objDsUserList.rowposition;

        	// 행 삭제 수행 여부 확인
        	if (take.confirm(this, "Info", "삭제 하시겠습니까?"))
        	{
        		objDsUserList.deleteRow(nRowPosition);
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
        //사용자 목록 선택 변경이벤트
        this.divDetail_grdList_onselectchanged = function(obj,e)
        {
            this.fnSearch("userSelect");
        };

        //사용유무 콤보 변경 이벤트
        this.divSearch_cboUseYn_onitemchanged = function(obj,e)
        {
        	this.fnSearch("UserListSelect");
        };

        //부서 콤보 변경 이벤트
        this.divSearch_cmbDept_onitemchanged = function(obj,e)
        {
        	this.fnSearch("UserListSelect");
        };

        //데이터셋 row 변경 이벤트 발생 전
        this.dsUserList_canrowposchange = function(obj,e)
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
        				return false;
        			}
        		}
            }
        };

        //데이터셋 row 변경 이벤트 발생 전
        this.dsList_canrowposchange = function(obj,e)
        {
        	// Object
        	var objDsMarsterList, objDsDetailList
        	// Variable
        	var nRowType;

        	objDsDetailList  = this.dsList;
        	objDsMarsterList = this.dsUserList;

        	//데이터셋 수정 여부 확인_ 마스터row 변경없이 디테일 신규 row 추가시
            if (take.isDsModified(objDsDetailList) && !take.isDsModified(objDsMarsterList))
            {
        		nRowType = obj.getRowType(0);
        		if(nRowType != 1) {
        			//행 변경 수행 여부 확인
        			if (!take.confirm(this, "Info", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?"))
        			{
        				return false;
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
        	// Variable
        	var sDeptCd

        	objDsCboUseYn = this.dsCboUseYn;
        	objDivSearch  = this.divSearch.form;

            var sOutDs      = ["dsCboUseYn", "dsCboUseYn02", "dsCboAgreeYn", "dsCboStatus"];
            var sGroupCodes = ["00009"	   , "00009"	   , "00031"	   , "00017"	  ];
            var sHeaderType = ["SEL"	   , ""			   , ""			   , ""			  ];

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
        				take.tranSelect
        				(
        					this,
        					"smpForm07DeptSelect",
        					"Sample.smpForm07DeptSelect",
        					"",
        					"dsCboDept",
        					"",
        					"fnCallBack"
        				);
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
        	var objDsDept, objDsUserList, objDivDetail, objDivSearch;
        	// Variable
        	var nInsertRow;

        	objDivSearch  = this.divSearch.form;
        	objDivDetail  = this.divDetail.form;
        	objDsDept 	  = this.dsDept;
        	objDsUserList = this.dsUserList;

            switch(sId)
            {
        		case "deptSelect" : // 검색조건 부서코드 조회 콜백
                    if(objDsDept.rowcount > 0){
        				nInsertRow = objDsDept.insertRow(0)
        				objDsDept.setColumn(nInsertRow, "DEPT_CD", "");
        				objDsDept.setColumn(nInsertRow, "DEPT_NM", "전체");
        				objDivSearch.cmbDept.set_index(0);
        				this.fnSearch("UserListSelect");
        			}
                    break;

                case "UserListSelect" :  //마스터 조회 콜백
        			this.fnSearch("userSelect");
                    break;

                case "userSelect" : //디테일 조회 콜백
                    break;

        		case "userSave" :  //저장 콜백
                    this.fnSearch("UserListSelect");
                    break;

        		case "userDelete" :   //삭제 콜백
                    this.fnSearch("UserListSelect");
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
            this.divSearch.form.cmbDept.addEventHandler("onitemchanged",this.divSearch_cmbDept_onitemchanged,this);
            this.divDetail.form.grdList.addEventHandler("onselectchanged",this.divDetail_grdList_onselectchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsDept.addEventHandler("canrowposchange",this.dsDept_canrowposchange,this);
            this.dsUserList.addEventHandler("canrowposchange",this.dsUserList_canrowposchange,this);
            this.dsCboDept.addEventHandler("canrowposchange",this.dsDept_canrowposchange,this);
        };
        this.loadIncludeScript("smpForm07_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
