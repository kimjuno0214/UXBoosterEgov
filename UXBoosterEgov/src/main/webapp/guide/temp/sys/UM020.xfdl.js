(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UM020");
            this.set_titletext("사용자관리_사용자관리_사용자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserDetail", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"rtnUserCd\" type=\"STRING\" size=\"30\"/><Column id=\"USER_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW\" size=\"256\" type=\"STRING\"/><Column id=\"USER_IMG\" size=\"256\" type=\"STRING\"/><Column id=\"USER_BLOB\" size=\"256\" type=\"STRING\"/><Column id=\"USER_BIRTHDAY\" size=\"256\" type=\"STRING\"/><Column id=\"LUNAR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"USER_MOBILE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"USER_FAX\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION\" size=\"256\" type=\"STRING\"/><Column id=\"USER_GRADE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_STATUS\" size=\"256\" type=\"STRING\"/><Column id=\"DESC_TXT\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"AGREE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"AGREE_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_FAIL_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_LOGIN_DT\" size=\"256\" type=\"STRING\"/><Column id=\"PW_CHANGE_DT\" size=\"256\" type=\"DATE\"/><Column id=\"INIT_YN\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_DEVICE\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_BROWSER\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_IP\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_DT\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_NM\" size=\"256\" type=\"STRING\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PROJECT\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PROJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_YN\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_DIV\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SHOP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SHOP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"sProjectCd\" type=\"STRING\" size=\"256\"/><Column id=\"sUserCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPosition", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileResult", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserDetailResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW\" size=\"256\" type=\"STRING\"/><Column id=\"USER_IMG\" size=\"256\" type=\"STRING\"/><Column id=\"USER_BLOB\" size=\"256\" type=\"STRING\"/><Column id=\"USER_BIRTHDAY\" size=\"256\" type=\"STRING\"/><Column id=\"LUNAR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"USER_MOBILE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"USER_FAX\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_POSITION\" size=\"256\" type=\"STRING\"/><Column id=\"USER_GRADE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_STATUS\" size=\"256\" type=\"STRING\"/><Column id=\"DESC_TXT\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"AGREE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"AGREE_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_FAIL_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_LOGIN_DT\" size=\"256\" type=\"STRING\"/><Column id=\"PW_CHANGE_DT\" size=\"256\" type=\"DATE\"/><Column id=\"INIT_YN\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_DEVICE\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_BROWSER\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_IP\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_DT\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_NM\" size=\"256\" type=\"STRING\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserYnChk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ENG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW\" size=\"256\" type=\"STRING\"/><Column id=\"USER_IMG\" size=\"256\" type=\"STRING\"/><Column id=\"USER_BLOB\" size=\"256\" type=\"STRING\"/><Column id=\"USER_BIRTHDAY\" size=\"256\" type=\"STRING\"/><Column id=\"LUNAR_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"USER_MOBILE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_TEL\" size=\"256\" type=\"STRING\"/><Column id=\"USER_FAX\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION\" size=\"256\" type=\"STRING\"/><Column id=\"USER_GRADE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_STATUS\" size=\"256\" type=\"STRING\"/><Column id=\"DESC_TXT\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"AGREE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"AGREE_DT\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_FAIL_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"LAST_LOGIN_DT\" size=\"256\" type=\"STRING\"/><Column id=\"PW_CHANGE_DT\" size=\"256\" type=\"DATE\"/><Column id=\"INIT_YN\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_DEVICE\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_BROWSER\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_IP\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_DT\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MOD_NM\" size=\"256\" type=\"STRING\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainProject", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserDiv", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBranCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserClass", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staIdT","19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTermT","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtId","staIdT:10","10","196","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNmT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNm","staNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFrom","staTermT:10","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch01","calFrom:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTo","staMlGroupSearch01:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSchUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_00_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_01","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00","1025","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.08%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("사용자목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static20","320","0",null,"21","18",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("개인정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","26","300",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("sort");
            obj.set_binddataset("dsUserList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"86\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사용자코드\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CD\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"0","100","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("비밀번호초기화");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","556","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserNmT","438","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34","556","56",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserTelT","438","116","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("55");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static35","556","116",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserBirthdayT","438","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static36","556","86",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserIdT","438","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserBirthday","staUserBirthdayT:6","91","164","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_inputtype("digit");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserMobileT","edtUserBirthday:6","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserMobile","staUserMobileT:7","91","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_maxlength("13");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","staUserNmT:6","61","164","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserEngNmT","edtUserNm:6","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("56");
            obj.set_text("이름(영문)");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserTel","staUserTelT:6","121","164","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserEmailT","edtUserTel:6","116","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserEmail","staUserEmailT:7","121","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserId","564","31","164","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_inputfilter("comma,dot,sign,space,symbol");
            obj.set_maxlength("18");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static22","434","176",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPostCd","447","181","110","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static56","434","235",null,null,"0","312",null,null,null,null,this.divDetail.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","320","437",null,"20","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("87");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staCompInfoT","320","Static56:20",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("선택정보");
            obj.set_cssclass("sta_WF_title02");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static40","439","staCompInfoT:60",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptEngNmT","703","staCompInfoT:60","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptNmT","320","staCompInfoT:60","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_text("부서정보");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static46","439","staCompInfoT:90",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUserGrade","829","staCompInfoT:95",null,"21","590",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsGrade");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserGradeT","703","staCompInfoT:90","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserPositionT","320","staCompInfoT:90","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("직위");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static50","439","staCompInfoT:210",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","703","staCompInfoT:210","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("등록일");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNmT","320","staCompInfoT:210","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("등록자");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNmT","320","staCompInfoT:240","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("44");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static28","439","staCompInfoT:240",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","703","staCompInfoT:240","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("수정일");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDescTxtT","320","235","120",null,null,"312",null,null,null,null,this.divDetail.form);
            obj.set_taborder("47");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("taDescTxt","447","239",null,null,"6","317",null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtAddr1","edtPostCd:2","181","524","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnPost","edtAddr1:3","181","73","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("주소찾기");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUserPosition","447","staCompInfoT:95","225","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsPosition");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","434","205",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","446","210","637","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserAddrT","320","176","120","60",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("50");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","447","staCompInfoT:216","210","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("51");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","447","staCompInfoT:246","210","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("52");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","829","staCompInfoT:216","210","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("53");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","829","staCompInfoT:246","210","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("54");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptCd","388","staCompInfoT:65","38","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("85");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","edtDeptCd:21","staCompInfoT:65","224","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDept","edtDeptNm:3","staCompInfoT:65","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calJoinDate","829","staCompInfoT:65",null,"21","590",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnIdChk","edtUserId:3","31","82","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("ID중복체크");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserEngNm","staUserEngNmT:7","61","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_inputtype("alpha,english,space");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","438","146","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("58");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static38","556","146",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:6","151","164","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserStatusT","cboUseYn:6","146","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("59");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUserStatus","staUserStatusT:7","151","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21","320","26","120","151",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("ivUser","330","46","98","114",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("61");
            obj.set_stretch("fit");
            obj.set_text("+");
            obj.set_font("normal 30pt/normal \"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static27","300","0","20",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("62");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMainProjectT","320","staCompInfoT:0","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("메인현장");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","439","staCompInfoT:0",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static02","439","staCompInfoT:30",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staValidDtT","703","staCompInfoT:30","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("유효기간");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staValidYnT","320","staCompInfoT:30","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("사용자유형");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboValidYn","447","staCompInfoT:35","225","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("68");
            obj.set_innerdataset("dsUserClass");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calJoinDate00","829","staCompInfoT:35","100","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("69");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calJoinDate01","calJoinDate00:27","staCompInfoT:35","100","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("70");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt00","932","staCompInfoT:36","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("71");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserDiv","320","staCompInfoT:120","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("사용자구분");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static46_00","439","staCompInfoT:120",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserBran","320","staCompInfoT:150","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("지점");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static46_00_00","439","staCompInfoT:150",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserShop","320","staCompInfoT:180","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("대리점");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static46_00_00_00","439","staCompInfoT:180",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUserDiv","447","staCompInfoT:125","225","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("78");
            obj.set_innerdataset("dsUserDiv");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboBranCd","447","staCompInfoT:155","225","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("79");
            obj.set_innerdataset("dsBranCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtShopCd","447","staCompInfoT:185","67","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("80");
            obj.set_autoselect("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnShopCd","edtShopCd:3","staCompInfoT:185","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtShopNm","btnShopCd:3","staCompInfoT:185","131","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("82");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProjectCd","387","staCompInfoT:5","38","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("86");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProjectNm","edtProjectCd:22","staCompInfoT:5","224","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("83");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnProject","edtProjectNm:3","staCompInfoT:5","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("84");
            obj.set_cssclass("btn_WF_search02");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
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
            obj = new BindItem("item0","divDetail.form.edtUserMobile","value","dsUserDetail","USER_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtUserNm","value","dsUserDetail","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.edtUserTel","value","dsUserDetail","USER_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtUserEmail","value","dsUserDetail","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtUserId","value","dsUserDetail","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.edtUserBirthday","value","dsUserDetail","USER_BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.edtPostCd","value","dsUserDetail","POST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.cboUserGrade","value","dsUserDetail","USER_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.taDescTxt","value","dsUserDetail","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.edtAddr1","value","dsUserDetail","USER_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.cboUserPosition","value","dsUserDetail","USER_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.edtAddr2","value","dsUserDetail","USER_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.staRegNm","text","dsUserDetail","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.staModNm","text","dsUserDetail","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.staRegDt","text","dsUserDetail","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDetail.form.staModDt","text","dsUserDetail","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDetail.form.calJoinDate","value","dsUserDetail","JOIN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.edtDeptNm","value","dsUserDetail","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.edtUserEngNm","value","dsUserDetail","USER_ENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.cboUserStatus","value","dsUserDetail","USER_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.ivUser","image","dsUserDetail","USER_BLOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDetail.form.cboUseYn","value","dsUserDetail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDetail.form.cboValidYn","value","dsUserDetail","VALID_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divDetail.form.calJoinDate00","value","dsUserDetail","VALID_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divDetail.form.calJoinDate01","value","dsUserDetail","VALID_END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDetail.form.cboUserDiv","value","dsUserDetail","USER_DIV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDetail.form.cboBranCd","value","dsUserDetail","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDetail.form.edtShopCd","value","dsUserDetail","SHOP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDetail.form.edtShopNm","value","dsUserDetail","SHOP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.edtProjectNm","value","dsUserDetail","MAIN_PROJECT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divDetail.form.edtDeptCd","value","dsUserDetail","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divDetail.form.edtProjectCd","value","dsUserDetail","MAIN_PROJECT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UM020.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_nUploadIdx = 0;
        this.fv_nUpFileCnt = 0;
        this.fv_vFile = null;
        this.fv_bData = null;
        this.fv_sFileDelYn = "N";
        this.fv_sFileSize = "";
        this.fv_sFileType = "USER";
        this.fv_sSelectRow = "";
        this.fv_bIdChk = true;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = "";
        this.fv_sSelUserCd = "";
        this.fv_sSaveUserCd = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.UM020_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		this.fnInit();
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
                case "Search" : //조회 콜백
                    //Script
        			var nFRow = this.dsUserList.findRowAsNF("USER_CD", this.fv_sSaveUserCd);
        			if( nFRow != -1 ) {
        				this.fv_sSaveUserCd = "";
        				this.divDetail.form.grdMain.selectRow(nFRow);
        			} else {
        				this.fv_sSaveUserCd = "";
        				this.divDetail.form.grdMain.selectRow(-1);
        				if(this.dsUserList.getRowCount() > 0){
        					this.divDetail.form.grdMain.selectRow(0);
        				}
        			}

                    break;
                case "Save" :  //저장 콜백
                    //Script
        			this.fv_sSaveUserCd = this.dsUserDetail.getColumn(0, "USER_CD");

        			if( sErrMsg == "SUCC" )
        			{
        				//Success Script
        				//take.alert(this, "", "저장이 완료되었습니다.");
        				take.alert(this, "Info", "MS00000002");
        				this.fnSearch();
        			} else {
        				//Etc Script
        				//take.alert(this, "", "저장처리중 문제가 발생하였습니다.");
        				take.alert(this, "Info", "MS00000012");
        			}

                    break;
        		case "Delete" :
        			if( sErrMsg == "SUCC" )
        			{
        				//Success Script
        				//take.alert(this, "", "삭제가 완료되었습니다.");
        				take.alert(this, "Info", "MS00000003");
        				this.fnSearch();
        			} else {
        				//Etc Script
        				//take.alert(this, "", "삭제처리중 문제가 발생하였습니다.");
        				take.alert(this, "Info", "MS00000012");
        			}

        			break;
        		case "MainProjectSearch" :
        			break;
        		case "DetailSearch"	:
        				this.divDetail.form.edtUserId.set_readonly(true);
        				this.divDetail.form.btnIdChk.set_visible(false);

        				var sUserBlob = take.nvl(this.dsUserDetail.getColumn(0, "USER_BLOB"), "");
        				var sIvUserTxt = ( "" == sUserBlob ) ? "+" : "";

        				this.divDetail.form.ivUser.set_text(sIvUserTxt);

        				//20200416 정해원 크린랲 사용자구분 변경
        				this.fnChangeUserDiv();
        			break;
        		case "IdCheck" :
        			if( this.dsUserYnChk.rowcount > 0 )
        			{
        				//take.alert(this, "", "이미 존재하는 ID입니다.");
        				take.alert(this, "Info", "MS00000010", {text:this.divDetail.form.staUserIdT.text});
        				this.fv_bIdChk = false; // ID중복체크 여부
        			}
        			else
        			{
        				//take.alert(this, "", "사용가능한 ID입니다.");
        				take.alert(this, "Info", "MS00000030", {text:this.divDetail.form.staUserIdT.text});
        				this.fv_bIdChk = true; // ID중복체크 여부
        			}
        			break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "USER_ID", this.divSearch.form.edtId.value);
        	this.dsSearch.setColumn(0, "USER_NM", this.divSearch.form.edtNm.value);
        	this.dsSearch.setColumn(0, "USE_YN", this.divSearch.form.cboUseYn.value);
        	this.dsSearch.setColumn(0, "REG_DT_FROM", this.divSearch.form.calFrom.value);
        	this.dsSearch.setColumn(0, "REG_DT_TO", this.divSearch.form.calTo.value);

        	this.dsUserList.clearData();
        	this.dsUserDetail.clearData();
            take.tranSelect(this, "Search", "UserManagement.userInfoList", "dsSearch", "dsUserList", "", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	if( !takeval.check(this, "Save") ){
        		return false;
        	}

        	//20200416 정해원 크린랲 사용자구분
        	var sUserDiv = this.dsUserDetail.getColumn(0, "USER_DIV");
        	var sBranCd = this.dsUserDetail.getColumn(0, "BRAN_CD");
        	var sShopCd = this.dsUserDetail.getColumn(0, "SHOP_CD");
        	if(take.isEmpty(sUserDiv)){
        		this.divDetail.form.cboUserDiv.setFocus();
        		//take.alert(this, "Error", this.divDetail.form.staUserDiv.text + "을 선택해 주시기 바랍니다.");
        		take.alert(this, "Error", "MS00000011", {text:this.divDetail.form.staUserDiv.text});
        		return;
        	}else if(sUserDiv == "2"){
        		if(take.isEmpty(sBranCd)){
        			this.divDetail.form.cboBranCd.setFocus();
        			//take.alert(this, "Error", this.divDetail.form.staUserBran.text + "을 선택해 주시기 바랍니다.");
        			take.alert(this, "Error", "MS00000011", {text:this.divDetail.form.staUserBran.text});
        			return;
        		}
        	}else if(sUserDiv == "3"){
        		if(take.isEmpty(sShopCd)){
        			this.divDetail.form.edtShopCd.setFocus();
        			//take.alert(this, "Error", this.divDetail.form.staUserShop.text + "을 선택해 주시기 바랍니다.");
        			take.alert(this, "Error", "MS00000011", {text:this.divDetail.form.staUserShop.text});
        			return;
        		}
        	}

        	var nRowType = this.dsUserDetail.getRowType(0);
        	if(Dataset.ROWTYPE_INSERT == nRowType){
        		if( !this.fv_bIdChk )
        		{
        			//take.alert(this, "", "ID중복체크가 되지 않았습니다.");
        			take.alert(this, "Info", "ML00001382");
        			return false;
        		}

        		if ((new RegExp(/[^(a-zA-Z0-9)]/gi)).test(this.divDetail.form.edtUserId.value)) {
        			//아이디는 영어, 숫자만 가능합니다.
        			take.alert(this, "Info", "ML00001548");
        			return false;
        		}
        	}

        	var sUserCd = take.nvl(this.dsUserDetail.getColumn(0, "USER_CD"), "");
        	var sParam = "sProjectCd='"+this.fv_sProjectCd+"' sMenuCd='" + take.getProgInfo(this).ProgId + "' sUserCd='" + sUserCd + "'";
        	take.transaction(this, "Save", "SVC_LOC::um/userSave.do", "dsUserDetail=dsUserDetail:U dsFile=dsFile:U", "dsUserDetail=dsUserDetail", sParam, "fnCallback");
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

        	this.fv_bIdChk = false; // ID중복체크 여부

        	this.divDetail.form.edtUserId.set_readonly(false);
        	this.divDetail.form.btnIdChk.set_visible(true);

        	this.dsUserDetail.clearData();
        	var nDetailRow = this.dsUserDetail.addRow();
        	this.divDetail.form.ivUser.set_text("+");
        	this.dsUserDetail.setColumn(nDetailRow, "USER_PW", "123456");

        	//20200417 정해원 일반사용자로 지정
        	this.dsUserDetail.setColumn(nDetailRow, "VALID_YN", "N");

        	this.divDetail.form.cboUseYn.set_index(0);
        	this.divDetail.form.cboUserStatus.set_index(0);
        	this.divDetail.form.cboUserPosition.set_index(0);
        	this.divDetail.form.cboUserGrade.set_index(0);

        	//20200416 정해원 크린랲 사용자구분 변경 처리
        	this.divDetail.form.cboUserDiv.set_index(0);
        	this.fnChangeUserDiv();

        	this.divDetail.form.grdMain.selectRow(-1);
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
            var nRow = this.dsUserDetail.rowposition;
        	var sUserCd = take.nvl(this.dsUserDetail.getColumn(nRow, "USER_CD"), "");

        	if( "" == sUserCd )
        	{
        		//take.alert(this, "Info", "삭제할 사용자가 존재하지않습니다.");
        		take.alert(this, "Info", "MS00000008");
        		return false;
        	}

        	var bConfirm = take.confirm(this, "question", "MS00000071");
        	//take.confirm(this, "", "해당사용자를 삭제 하시겠습니까?");
        	if(bConfirm)
        	{
        		this.dsUserDetail.setColumn(nRow, "USE_YN", "N");
        		take.transaction(this, "Delete", "SVC_LOC::um/userDelete.do", "dsUserDetail=dsUserDetail:U", "", "", "fnCallback");
        	}
        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //grdMain_onselectchanged : 메인그리드 행 선택 시 이벤트
        this.grdMain_onselectchanged = function(obj,e)
        {
        	if(e.row == -1){
        		return;
        	}

        	if(take.isDsModified(this.dsUserDetail)){
        		//var bRowChange = take.confirm(this, "String", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?");
        		var bRowChange = take.confirm(this, "question", "MS00000074");
        		if(!bRowChange){
        			this.divDetail.form.grdMain.selectRow(e.oldrow);
        			return;
        		}
        	}

        	//상세검색
        	if(take.isEmpty(this.fv_sSaveUserCd)){
        		this.fnDetailSearch();
        	}

        };

        //btnReset_onclick : 비밀번호 초기화 버튼 클릭 이벤트
        this.btnReset_onclick = function(obj,e)
        {
        	//비밀번호를 초기화 하시겠습니까?
        	if(!take.confirm(this, "question", "ML00001546")){
        		return;
        	}

        	var nRow = this.dsUserDetail.rowposition;
        	this.dsUserDetail.setColumn(nRow, "USER_PW", "123456");
        	this.dsUserDetail.setColumn(nRow, "PW_CHG_YN", "Y");
        	this.dsUserDetail.setColumn(nRow, "INIT_YN", "N");

        	//20200701 정해원 eSCM수정요청 사항
        	//6 page - 로그인 실패회수 초기화
        	this.dsUserDetail.setColumn(nRow, "LOGIN_FAIL_CNT", 0);

            take.tranSave(this, "Save", "UserManagement.userInfo", "dsUserDetail", "", "", "fnCallback");
        };

        //btnPost_onclick : 주소찾기 버튼 클릭 이벤트
        this.btnPost_onclick = function(obj,e)
        {
        	var sSearchAddress = this.divDetail.form.edtAddr1.value;
        	take.openPopup (this, "postPopUp" , "frm::com/comPostPop.xfdl"
        									, {Title:"우편번호", Dataset:this.dsUserDetail, sSvcId:take.SvcId, sAddress:sSearchAddress}
        									, ""
        									, "fnPostPopupCallback", true);
        };

        //btnPost_onclick : 주소찾기 버튼 클릭 콜백 이벤트
        this.fnPostPopupCallback = function (sPopId, sArg)
        {
        	if (take.nvl(sArg, "")=="") return;

        	var aArg = sArg.split("#");
         	this.divDetail.form.edtPostCd.set_value(aArg[3]);	// 신규우편번호

         	var sAddrType = aArg[7];
         	var sAddr = ("J" == sAddrType) ? aArg[5] : aArg[4];
         	this.divDetail.form.edtAddr1.set_value(sAddr);
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        //
        this.fnInit = function(sParam, nParam)
        {
            //Script
        	var objProgInfo = take.getProgInfo(this);
        	this.fv_sMenuCd = objProgInfo.ProgId;

        	var sOutDs = ["dsStatus", "dsGrade", "dsPosition", "dsUseYn", "dsSchUseYn", "dsUserClass", "dsUserDiv"];
            var sGroupCodes = ["00017", "00016", "00015", "00009", "00009", "00037", "00027"];
        	var sHearderTypes = "NO,SEL,SEL,NO,ALL,NO,SEL";

            take.tranCode(this, sGroupCodes, sOutDs, sHearderTypes,
            function(sId, nErrCd, sErrMsg){
        		//callback
        		this.divSearch.form.cboUseYn.set_value("Y");
        		this.fnSearch();

        		//20200416 정해원 크린랲 지점조회
        		take.tranSelect(this, "selectBranCd", "Com.branList", "", "dsBranCd", "",
        			function(sId, nErrCd, sErrMsg){
        				this.dsBranCd.insertRow(0);
        				this.dsBranCd.setColumn(0, 'CODE', '');
        				this.dsBranCd.setColumn(0, 'NAME', take.getWord(this, "MS00000079"));
        			}
        		);
        	});

        	// 최초 저장 벨리데이션 추가
        	takeval.add(this, "Save", this.divDetail.form.edtUserId, this.divDetail.form.staUserIdT.text, "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.edtUserNm, this.divDetail.form.staUserNmT.text, "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.edtUserBirthday, this.divDetail.form.staUserBirthdayT.text, "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.edtUserMobile, this.divDetail.form.staUserMobileT.text, "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.edtUserEmail, this.divDetail.form.staUserEmailT.text, "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.edtPostCd, this.divDetail.form.staUserAddrT.text, "value", true, "string", "", "");
        	//takeval.add(this, "Save", this.divDetail.form.edtDeptCd, this.divDetail.form.staDeptNmT.text, "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.edtProjectCd, this.divDetail.form.staMainProjectT.text, "value", true, "string", "", "");

        	//20200416 정해원 크린랲 사용자구분
        	takeval.add(this, 'Save', this.divDetail.form.cboUserDiv, this.divDetail.form.staUserDiv.text, 'value', true, 'string', null , null, true);
        };

        // 상세정보 조회
        this.fnDetailSearch = function()
        {
        	var nRow = this.divDetail.form.grdMain.getSelectedRows();
        	var sSelUserCd = this.dsUserList.getColumn(nRow, "USER_CD");

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "USER_CD", sSelUserCd);

        	take.tranSelect(this, "DetailSearch", "UserManagement.userInfoDetail", "dsSearch", "dsUserDetail", "", "fnCallback");
        };

        //파일추가 후처리 이벤트
        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
         		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
         		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, nexacro.VirtualFile.openBinary);
        	}
        };

        //파일추가 후처리 성공이벤트
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			this.divDetail.form.ivUser.set_text("");
        			obj.getFileSize();

        			break;
        		case 3: // read() 실행시 추가 실행
        			this.divDetail.form.ivUser.set_image("data:image/png;base64," + e.binarydata);
        			this.fv_bData = e.binarydata;

        			this.dsFile.clearData();
        			var addidx = this.dsFile.addRow();
        			this.dsFile.setColumn(addidx, "FILE_NM", nexacro.trim(obj.filename));
        			this.dsFile.setColumn(addidx, "FILE_BLOB", this.fv_bData);
        			this.dsFile.setColumn(addidx, "IMPORT_YN", "N");
        			this.dsFile.setColumn(addidx, "FILE_TYPE", this.fv_sFileType);
        			this.dsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);

        			break;
        		case 9:	// getFileSize() 실행시 추가 실행
        			if( nexacro._Browser == "Runtime" )
        			{
        				//파일 바이너리데이터 생성
        				obj.read("utf-8");
        			}
        			else
        			{
        				var objIframe = window.document.getElementsByTagName('iframe');
        				var nIframeCnt = (objIframe.length - 1);
        				var objInput = objIframe[nIframeCnt].contentWindow.document.getElementsByTagName("input");
        				var objImageView = this.divDetail.form.ivUser;
        				var objDsFile = this.dsFile;

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

        							objFileUpTransfer.addFile(obj.filename, obj);
        						}
        					}
        				}
        			}

        			break;
        		default :
        			break;
        	}
        };

        //파일추가 후처리 실패이벤트
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        };

        this.divDetail_btnProject_onclick = function(obj,e)
        {
        	this.fnProjectPopup();
        };

        this.divDetail_edtProjectNm_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13){
        		this.fnProjectPopup();
        	}
        };

        this.divDetail_btnDept_onclick = function(obj,e)
        {
        	take.openPopup(this, "OM010O05", "frm::com/comDeptPop.xfdl", {}, "resizable=false", "", false);
        };

        this.divDetail_btnIdChk_onclick = function(obj,e)
        {
        	this.dsUserYnChk.clearData();
        	var sUserId = take.nvl(this.divDetail.form.edtUserId.value, "");

        	if("" == sUserId)
        	{
        		//take.alert(this, "", "아이디를 입력해 주세요.");
        		take.alert(this, "Info", "MS00000014", {text:this.divDetail.form.staUserIdT.text});
        		return false;
        	}

        	take.tranSelect(this, "IdCheck", "UserManagement.userInfoList", "", "dsUserYnChk", "sUserId='"+sUserId+"'", "fnCallback");
        };

        this.divDetail_ivUser_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        this.divDetail_edtUserId_onchanged = function(obj,e)
        {
        	this.fv_bIdChk = false;
        };

        this.divSearch_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fnSearch();
        	}
        };

        this.divDetail_edtUserMobile_onkillfocus = function(obj,e)
        {
        	if(take.nvl(obj.value, "") != ""){
        		//var temp = obj.value;
        		//obj.set_value(temp.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3"));
        	}
        // 	var sTel = obj.value;
        // 	sTel = take.getTelMask(sTel, false);
        // 	obj.set_value(sTel);
        };

        //===========================================
        //  대리점코드 변경시
        //===========================================
        this.divDetail_edtShopCd_onchanged = function(obj,e)
        {
        	if( take.isEmpty(obj.value) == true ) {
        		obj.set_value("");
        		this.divDetail.form.edtShopNm.set_value("");
        	}
        	else {
        		this.dsTemp.clearData();
        		var sPara = "shopNm=" + nexacro.wrapQuote(take.nvl(obj.value, ""));
        		take.tranSelect(  this
        						, "shopList"
        						, "Com.shopList"
        						, ""
        						, "dsTemp"
        						, sPara
        						, function(sId, nErrCd, sErrMsg) {
        							if( this.dsTemp.rowcount == 0 ) {
        								this.divDetail.form.edtShopCd.set_value("");
        								this.divDetail.form.edtShopNm.set_value("");
        							}
        							else if( this.dsTemp.rowcount == 1 ) {
        								this.divDetail.form.edtShopCd.set_value(this.dsTemp.getColumn(0,"SHOP_CD"));
        								this.divDetail.form.edtShopNm.set_value(this.dsTemp.getColumn(0,"SHOP_NM"));
        							}
        							else {
        								this.divDetail_btnShopCd_onclick(nexacro.Button,nexacro.ClickEventInfo)
        							}
        						}
        						);
        	}
        };

        this.divDetail_btnShopCd_onclick = function(obj,e)
        {
        	var sShopNm = (obj.name=="btnShopCd") ? "":this.divDetail.form.edtShopCd.value;

        	take.openPopup(   this
        					, "comShopPop"
        					, "frm::com/comShopPop.xfdl"
        					, {shopNm:sShopNm}
        					, ""
        					, 	function(sId, sRtn) {
        							if( take.isEmpty(sRtn) == true ) {
        								this.divDetail.form.edtShopCd.set_value("");
        								this.divDetail.form.edtShopNm.set_value("");
        							}
        							else {
        								var sRtn = sRtn.split(",");
        								this.divDetail.form.edtShopCd.set_value(sRtn[0]);
        								this.divDetail.form.edtShopNm.set_value(sRtn[1]);
        							}
        						}
        					, false
        					);
        };

        //20200416 정해원 크린랲 사용자구분 변경
        this.divDetail_cboUserDiv_onitemchanged = function(obj,e)
        {
        	this.fnChangeUserDiv();
        };

        //20200416 정해원 크린랲 사용자구분 변경 처리
        this.fnChangeUserDiv = function(){
        	var sUserDiv = take.nvl(this.dsUserDetail.getColumn(0, "USER_DIV"), "1");
        	if(sUserDiv == "1"){
        		this.dsUserDetail.setColumn(0, "BRAN_CD", "");
        		this.dsUserDetail.setColumn(0, "SHOP_CD", "");
        		this.dsUserDetail.setColumn(0, "SHOP_NM", "");

        		this.divDetail.form.cboBranCd.set_readonly(true);
        		this.divDetail.form.edtShopCd.set_readonly(true);
        		//this.divDetail.form.edtShopNm.set_readonly(true);
        		this.divDetail.form.btnShopCd.set_enable(false);
        	}else if(sUserDiv == "2"){
        		this.dsUserDetail.setColumn(0, "SHOP_CD", "");
        		this.dsUserDetail.setColumn(0, "SHOP_NM", "");

        		this.divDetail.form.cboBranCd.set_readonly(false);
        		this.divDetail.form.edtShopCd.set_readonly(true);
        		//this.divDetail.form.edtShopNm.set_readonly(true);
        		this.divDetail.form.btnShopCd.set_enable(false);
        	}else if(sUserDiv == "3"){
        		this.dsUserDetail.setColumn(0, "BRAN_CD", "");

        		this.divDetail.form.cboBranCd.set_readonly(true);
        		this.divDetail.form.edtShopCd.set_readonly(false);
        		//this.divDetail.form.edtShopNm.set_readonly(true);
        		this.divDetail.form.btnShopCd.set_enable(true);
        	}
        };

        //20200522 정해원 프로젝트 검색 팝업 추가
        this.oProjectInfo = null;
        this.fnProjectPopup = function(){
        	this.oProjectInfo = null;
        	take.openPopup(this, "PM010P02", "biz::sys/PM010P02.xfdl", {argInSearchText : this.divDetail.form.edtProjectNm.value}, "resizable=false",
        		function(sId, sRtn) {
        			if(!take.isEmpty(this.oProjectInfo)){
        				this.dsUserDetail.setColumn(0, "MAIN_PROJECT", this.oProjectInfo.CODE);
        				this.dsUserDetail.setColumn(0, "MAIN_PROJECT_NM", this.oProjectInfo.NAME);
        			}
        		}
        	);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.UM020_onload,this);
            this.divSearch.form.edtId.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.edtNm.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divDetail.form.grdMain.addEventHandler("onselectchanged",this.grdMain_onselectchanged,this);
            this.divDetail.form.btnReset.addEventHandler("onclick",this.btnReset_onclick,this);
            this.divDetail.form.edtUserMobile.addEventHandler("onkillfocus",this.divDetail_edtUserMobile_onkillfocus,this);
            this.divDetail.form.edtUserId.addEventHandler("onchanged",this.divDetail_edtUserId_onchanged,this);
            this.divDetail.form.taDescTxt.addEventHandler("onchanged",this.taDescTxt_onchanged,this);
            this.divDetail.form.btnPost.addEventHandler("onclick",this.btnPost_onclick,this);
            this.divDetail.form.btnDept.addEventHandler("onclick",this.divDetail_btnDept_onclick,this);
            this.divDetail.form.btnIdChk.addEventHandler("onclick",this.divDetail_btnIdChk_onclick,this);
            this.divDetail.form.ivUser.addEventHandler("onclick",this.divDetail_ivUser_onclick,this);
            this.divDetail.form.cboUserDiv.addEventHandler("onitemchanged",this.divDetail_cboUserDiv_onitemchanged,this);
            this.divDetail.form.edtShopCd.addEventHandler("onchanged",this.divDetail_edtShopCd_onchanged,this);
            this.divDetail.form.btnShopCd.addEventHandler("onclick",this.divDetail_btnShopCd_onclick,this);
            this.divDetail.form.edtProjectCd.addEventHandler("onkeyup",this.divDetail_edtProjectNm_onkeyup,this);
            this.divDetail.form.edtProjectNm.addEventHandler("onkeyup",this.divDetail_edtProjectNm_onkeyup,this);
            this.divDetail.form.btnProject.addEventHandler("onclick",this.divDetail_btnProject_onclick,this);
            this.dsUseYn.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
            this.dsStatus.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
            this.dsPosition.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
            this.dsGrade.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.dsSchUseYn.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
            this.dsMainProject.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
            this.dsUserDiv.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
            this.dsBranCd.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
        };
        this.loadIncludeScript("UM020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
