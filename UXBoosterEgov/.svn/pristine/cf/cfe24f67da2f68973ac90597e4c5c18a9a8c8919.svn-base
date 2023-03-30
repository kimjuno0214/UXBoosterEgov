(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleComFile");
            this.set_titletext("(샘플)파일업로드 공통");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,1590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PROJECT_CD\">PM00000001</Col><Col id=\"MENU_CD\">M0028</Col><Col id=\"BOARD_SEQ\">0000000001</Col><Col id=\"ATTACH_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"BLOB\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"BLOB\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPopup", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"BLOB\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"COL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL\">1111</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","0","10",null,null,"141",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divBasic","10","180",null,"249","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("divComFile","8","79","770",null,null,"0",null,null,null,null,this.divBasic.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("frm::com/comFileSYS.xfdl");
            obj.getSetter("takefile").set("{\"isSingle\":true,\"isVisibleTypeCd\":true,\"addDelBtnEnable\":true,\"saveBtnEnable\":true,\"atchFileTypeCd\":\"06\"}");
            this.divBasic.addChild(obj.name, obj);

            obj = new Button("btnInit","636","15","70","23",null,null,null,null,null,null,this.divBasic.form);
            obj.set_taborder("1");
            obj.set_text(" 초기화");
            obj.set_cssclass("btn_WF_basic01");
            obj.getSetter("takefile").set("");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divBasic.addChild(obj.name, obj);

            obj = new Button("btnNew","616","48","90","23",null,null,null,null,null,null,this.divBasic.form);
            obj.set_taborder("2");
            obj.set_text("신규파일ID생성");
            obj.set_cssclass("btn_WF_basic01");
            this.divBasic.addChild(obj.name, obj);

            obj = new Edit("edtAtchFileId","469","48","140","23",null,null,null,null,null,null,this.divBasic.form);
            obj.set_taborder("3");
            obj.getSetter("takefile").set("{isSingle : true,isVisibleTypeCd : false,addDelBtnEnable : true,saveBtnEnable : true,atchFileTypeCd : \'\'}");
            obj.set_text("{isSingle:\"true\",isVisibleTypeCd:\"true\",addDelBtnEnable:\"true\",saveBtnEnable:\"true\",atchFileTypeCd:\"06\"}");
            this.divBasic.addChild(obj.name, obj);

            obj = new Button("btnSearch","708","48","70","23",null,null,null,null,null,null,this.divBasic.form);
            obj.set_taborder("4");
            obj.set_text("파일조회");
            obj.set_cssclass("btn_WF_basic01");
            this.divBasic.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","30",null,null,null,null,null,null,this.divBasic.form);
            obj.set_taborder("5");
            obj.set_text("단순 첨부파일(복수)");
            obj.set_cssclass("sta_WF_title02");
            this.divBasic.addChild(obj.name, obj);

            obj = new Edit("edtTakeFile","228","15","406","23",null,null,null,null,null,null,this.divBasic.form);
            obj.set_taborder("6");
            obj.getSetter("takefile").set("{\"isSingle\":true,\"isVisibleTypeCd\":true,\"addDelBtnEnable\":true,\"saveBtnEnable\":true,\"atchFileTypeCd\":\"06\"}");
            obj.set_value("{\"isSingle\":true,\"isVisibleTypeCd\":true,\"addDelBtnEnable\":true,\"saveBtnEnable\":true,\"atchFileTypeCd\":\"06\"}");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_text("{\"isSingle\":true,\"isVisibleTypeCd\":true,\"addDelBtnEnable\":true,\"saveBtnEnable\":true,\"atchFileTypeCd\":\"06\"}");
            this.divBasic.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","786","48",null,"192","0",null,null,null,null,null,this.divBasic.form);
            obj.set_taborder("7");
            obj.set_value("takefile userproperty\n\n{\n  \"isSingle\": true, //탐색기 단건선택 여부(default:false)\n  \"isVisibleTypeCd\": true, //파일구분 컬럼 표시 여부(default:false)\n  \"addDelBtnEnable\": true, //파일추가/삭제 버튼 표시 여부(default:true)\n  \"saveBtnEnable\": true, //저장 버튼 표시 여부(default:true)\n  \"atchFileTypeCd\": \"06\" //파일구분공통코드(default:기타(06) -> 첨부유형코드(00007) 참조)\n}");
            obj.set_readonly("true");
            this.divBasic.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","141",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","259",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","10","0",null,"10","-10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divMasterFile","10","489","780","251",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","30",null,null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("0");
            obj.set_text("마스터정보 첨부파일 예제");
            obj.set_cssclass("sta_WF_title02");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("staUserIdT","0","30","120","31",null,null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("Static33","119","30",null,"31","0",null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Edit("edtUserId","126","35",null,"21","6",null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("staUserNmT","0","60","120","31",null,null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("Static34","119","60",null,"31","0",null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","126","65",null,"21","6",null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("Static34_00","119","90",null,null,"0","0",null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("staUserNmT00","0","90","120",null,null,"0",null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("7");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Div("divComFile","126","90",null,null,"6","0",null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_url("frm::com/comFileSYS.xfdl");
            obj.getSetter("takefile").set("{\"isSingle\":false,\"isVisibleTypeCd\":false,\"addDelBtnEnable\":true,\"saveBtnEnable\":false,\"atchFileTypeCd\":\"04\"}");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","120","342","6","250",null,null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("Static01","120","10","6",null,null,"113",null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("11");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("Static01_00","587","268","6",null,null,"-535",null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("12");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Static("Static01_01",null,"120","6",null,"0","53",null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("13");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"4","70","23","144",null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("14");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"4","70","23","72",null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("15");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"4","70","23","0",null,null,null,null,null,this.divMasterFile.form);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.divMasterFile.addChild(obj.name, obj);

            obj = new Div("divListFile","10","794","778","236",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00","526","90",null,null,"0","15",null,null,null,null,this.divListFile.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divListFile.addChild(obj.name, obj);

            obj = new Grid("grdList","0","30","396","192",null,null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"435\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"BOARD_TITLE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\"/></Band></Format></Formats>");
            this.divListFile.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","30",null,null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("1");
            obj.set_text("리스트 첨부파일 예제");
            obj.set_cssclass("sta_WF_title02");
            this.divListFile.addChild(obj.name, obj);

            obj = new Static("Static01","396","0","10",null,null,"-593",null,null,null,null,this.divListFile.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divListFile.addChild(obj.name, obj);

            obj = new Static("staUserIdT","406","30","120","31",null,null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divListFile.addChild(obj.name, obj);

            obj = new Static("Static33","525","30",null,"31","0",null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divListFile.addChild(obj.name, obj);

            obj = new Static("Static33_00","525","60",null,"31","0",null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divListFile.addChild(obj.name, obj);

            obj = new Static("staUserNmT","406","60","120","31",null,null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divListFile.addChild(obj.name, obj);

            obj = new Edit("edtUserId","532","35",null,"21","6",null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divListFile.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","532","65",null,"21","6",null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divListFile.addChild(obj.name, obj);

            obj = new Static("Static01_00","526","11","6",null,null,"97",null,null,null,null,this.divListFile.form);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divListFile.addChild(obj.name, obj);

            obj = new Div("divComFile","532","90",null,null,"6","15",null,null,null,null,this.divListFile.form);
            obj.set_taborder("11");
            obj.set_text("Div00");
            obj.set_url("frm::com/comFileSYS.xfdl");
            obj.getSetter("takefile").set("{\"isSingle\":false,\"isVisibleTypeCd\":false,\"addDelBtnEnable\":true,\"saveBtnEnable\":false,\"atchFileTypeCd\":\"04\"}");
            this.divListFile.addChild(obj.name, obj);

            obj = new Static("staUserNmT00","406","90","120",null,null,"15",null,null,null,null,this.divListFile.form);
            obj.set_taborder("10");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divListFile.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"4","70","23","144",null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("13");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_basic01");
            this.divListFile.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"4","70","23","72",null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divListFile.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"4","70","23","0",null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("15");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.divListFile.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"4","70","23","216",null,null,null,null,null,this.divListFile.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.divListFile.addChild(obj.name, obj);

            obj = new Div("divPopup","10","1056","780","194",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","30",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_text("팝업 첨부파일 예제");
            obj.set_cssclass("sta_WF_title02");
            this.divPopup.addChild(obj.name, obj);

            obj = new Grid("grdList","0","30",null,null,"0","0",null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsPopup");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"435\"/><Column size=\"178\"/><Column size=\"48\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"BOARD_TITLE\"/><Cell col=\"2\" text=\"BOARD_ATTACH\"/><Cell col=\"3\" text=\"첨부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\"/><Cell col=\"2\" text=\"bind:BOARD_ATTACH\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" text=\"첨부\" cursor=\"pointer\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"4","70","23","216",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"4","70","23","72",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_basic01");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"4","70","23","144",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"4","70","23","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.divPopup.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","798","489",null,"251","8",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("takefile userproperty\n\n{\n  \"isSingle\": false,//탐색기 단건선택 여부(default:false)\n  \"isVisibleTypeCd\": false, //파일구분 컬럼 표시 여부(default:false)\n  \"addDelBtnEnable\": true, //파일추가/삭제 버튼 표시 여부(default:true)\n  \"saveBtnEnable\": false, //저장 버튼 표시 여부(default:true)\n  \"atchFileTypeCd\": \"04\" //파일구분공통코드(default:기타(06) -> 첨부유형코드(00007) 참조)\n}");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","797","794",null,"222","9",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("takefile userproperty\n\n{\n  \"isSingle\": false,//탐색기 단건선택 여부(default:false)\n  \"isVisibleTypeCd\": false, //파일구분 컬럼 표시 여부(default:false)\n  \"addDelBtnEnable\": true, //파일추가/삭제 버튼 표시 여부(default:true)\n  \"saveBtnEnable\": false, //저장 버튼 표시 여부(default:true)\n  \"atchFileTypeCd\": \"04\" //파일구분공통코드(default:기타(06) -> 첨부유형코드(00007) 참조)\n}\n\nDataset onrowposchanged 연동");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00_00","797","1055",null,"195","9",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_value("  var oArg = {\n      argInDsPopup        : this.dsPopup //목록 Dataset\n    , argInColIdPopup     : \'BOARD_ATTACH\' //목록 Dataset의 첨부파일ID컬럼\n    , argInAtchFileTypeCd : this.FILETYPE_BOARD //파일유형코드\n    , argInAtchFileId     : this.dsPopup.getColumn(e.row, \'BOARD_ATTACH\') //첨부파일ID\n    , argInIsReadOnly     : false  //읽기전용여부\n  };\n\ntake.openPopup(this, \"comFilePop\", \"frm::com/comFilePop.xfdl\", oArg, sOpt);");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSingle","10","10",null,"159","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","160","48","90","23",null,null,null,null,null,null,this.divSingle.form);
            obj.set_taborder("0");
            obj.set_text("신규파일ID생성");
            obj.set_cssclass("btn_WF_basic01");
            this.divSingle.addChild(obj.name, obj);

            obj = new Edit("edtAtchFileId","13","48","140","23",null,null,null,null,null,null,this.divSingle.form);
            obj.set_taborder("1");
            obj.getSetter("takefile").set("{isSingle : true,isVisibleTypeCd : false,addDelBtnEnable : true,saveBtnEnable : true,atchFileTypeCd : \'\'}");
            obj.set_text("{isSingle:\"true\",isVisibleTypeCd:\"true\",addDelBtnEnable:\"true\",saveBtnEnable:\"true\",atchFileTypeCd:\"06\"}");
            this.divSingle.addChild(obj.name, obj);

            obj = new Button("btnSearch","252","48","70","23",null,null,null,null,null,null,this.divSingle.form);
            obj.set_taborder("2");
            obj.set_text("파일조회");
            obj.set_cssclass("btn_WF_basic01");
            this.divSingle.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","30",null,null,null,null,null,null,this.divSingle.form);
            obj.set_taborder("3");
            obj.set_text("단순 첨부파일(단건)");
            obj.set_cssclass("sta_WF_title02");
            this.divSingle.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","786","8",null,"142","0",null,null,null,null,null,this.divSingle.form);
            obj.set_taborder("4");
            obj.set_value("takefile userproperty\n\n{\n  \"addDelBtnEnable\": true, //파일추가/삭제 버튼 표시 여부(default:true)\n  \"atchFileTypeCd\": \"06\" //파일구분공통코드(default:기타(06) -> 첨부유형코드(00007) 참조)\n  \"maxLength\": 1024 //Kbyte\n}");
            obj.set_readonly("true");
            this.divSingle.addChild(obj.name, obj);

            obj = new Div("divComFileSingle","13","81","527","25",null,null,null,null,null,null,this.divSingle.form);
            obj.set_taborder("5");
            obj.set_url("frm::com/comFileSingle.xfdl");
            obj.getSetter("takefile").set("{\"addDelBtnEnable\":true,\"atchFileTypeCd\":\"06\",\"maxLength\":1024}");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divSingle.addChild(obj.name, obj);

            obj = new Button("btnSave","330","48","70","23",null,null,null,null,null,null,this.divSingle.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divSingle.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBasic.form.divComFile
            obj = new Layout("default","",0,0,this.divBasic.form.divComFile.form,function(p){});
            this.divBasic.form.divComFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBasic.form
            obj = new Layout("default","",0,0,this.divBasic.form,function(p){});
            this.divBasic.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMasterFile.form.divComFile
            obj = new Layout("default","",0,0,this.divMasterFile.form.divComFile.form,function(p){});
            this.divMasterFile.form.divComFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMasterFile.form
            obj = new Layout("default","",0,0,this.divMasterFile.form,function(p){});
            this.divMasterFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divListFile.form.divComFile
            obj = new Layout("default","",0,0,this.divListFile.form.divComFile.form,function(p){});
            this.divListFile.form.divComFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divListFile.form
            obj = new Layout("default","",0,0,this.divListFile.form,function(p){});
            this.divListFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSingle.form.divComFileSingle
            obj = new Layout("default","",0,0,this.divSingle.form.divComFileSingle.form,function(p){});
            this.divSingle.form.divComFileSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSingle.form
            obj = new Layout("default","",0,0,this.divSingle.form,function(p){});
            this.divSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,1590,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divMasterFile.form.edtUserId","value","dsMaster","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divMasterFile.form.edtUserNm","value","dsMaster","BOARD_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divListFile.form.edtUserId","value","dsList","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divListFile.form.edtUserNm","value","dsList","BOARD_TXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comFileSYS.xfdl");
            this._addPreloadList("fdl","frm::com/comFileSingle.xfdl");
        };
        
        // User Script
        this.registerScript("sampleComFile.xfdl", function() {
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
        this.fvMasterFile;
        this.FILETYPE_BOARD = "04";

        this.fvListFile;
        this.fv_divFile;
        this.fv_divSingleFile;
        this.FILETYPE_ETC = "06";

        this.form_onload = function(obj,e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{

        		// 단순 첨부파일 활성화
        		this.fv_divSingleFile = this.divSingle.form.divComFileSingle.form;
        		this.fv_divFile = this.divBasic.form.divComFile.form;

        		// 마스터정보 첨부파일 예제 활성화
        		this.fvMasterFile = this.divMasterFile.form.divComFile.form;
        // 		this.fvMasterFile.fn_setAddDelBtnEnable(true);					//추가,삭제버튼 보이기(default:true)
        // 		this.fvMasterFile.fn_setSaveBtnEnable(false);					//저장버튼 보이기(default:true)
        // 		this.fvMasterFile.fn_setVisibleTypeCd(false);					//파일구분 보이기(default:false)
        // 		this.fvMasterFile.fn_setAtchFileTypeCd(this.FILETYPE_BOARD);	//파일타입(공통코드사용)
        // 		this.fvMasterFile.fnInitComponent(this);

        		// 리스트정보 첨부파일 예제 활성화
        		this.fvListFile = this.divListFile.form.divComFile.form;
        // 		this.fvListFile.fn_setAddDelBtnEnable(true);				//추가,삭제버튼 보이기(default:true)
        // 		this.fvListFile.fn_setSaveBtnEnable(false);					//저장버튼 보이기(default:true)
        // 		this.fvListFile.fn_setVisibleTypeCd(false);					//파일구분 보이기(default:false)
        // 		this.fvListFile.fn_setAtchFileTypeCd(this.FILETYPE_BOARD);	//파일타입(공통코드사용)
        // 		this.fvListFile.fnInitComponent(this);
        	}
        };



        this.btnInit_onclick = function(obj,e)
        {
        	this.fv_divFile.fnInitTakefile(this.divBasic.form.edtTakeFile.value);
        };

        this.divSingle_btnNew_onclick = function(obj,e)
        {
        	this.fv_divSingleFile.fnSearchAtchFileId(this, function(rtnValue){
        		this.divSingle.form.edtAtchFileId.set_value(rtnValue.resultData);
        		this.fv_divSingleFile.fn_setAtchFileId(rtnValue.resultData);
        	});
        };

        this.divSingle_btnSearch_onclick = function(obj,e)
        {
        	this.fv_divSingleFile.fn_setAtchFileId(this.divSingle.form.edtAtchFileId.value);
        	this.fv_divSingleFile.fnSearchFileList(this);
        };

        this.divSingle_btnSave_onclick = function(obj,e)
        {
        	//데이터변경 / 파일 수정 여부
        	if (!this.fv_divSingleFile.fn_isUpdate()){
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	//파일 업로드 / 저장
        	this.fv_divSingleFile.fnUploadSaveFileList(this,
        		function(rtnValue){
        			if(rtnValue.result){
        				//reload하기
        			}
        		}
        	);
        };

        this.btnNew_onclick = function(obj,e)
        {
        	//첨부파일 ID생성
        	this.fv_divFile.fnSearchAtchFileId(this, function(rtnValue){
        		this.divBasic.form.edtAtchFileId.set_value(rtnValue.resultData);
        		this.fv_divFile.fn_setAtchFileId(rtnValue.resultData);
        	});
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fv_divFile.fn_setAtchFileId(this.divBasic.form.edtAtchFileId.value);
        	this.fv_divFile.fnSearchFileList(this);
        };



        //마스터정보 첨부파일 예제
        //조회
        this.divMasterFile_btnSearch_onclick = function(obj,e)
        {
        	this.dsMaster.clearData();

            take.tranSelect
        	(
        		  this
        		, "boardInfoDetail"
        		, "BoardManagement.boardInfoDetail"
        		, "dsSearch"
        		, "dsMaster"
        		, ""
        		, function(sId, nErrCd, sErrMsg){
        			var atchFileId = this.dsMaster.getColumn(0, 'BOARD_ATTACH');
        			if(take.isEmpty(atchFileId)){
        				//첨부파일 코드가 없을시 기준에 맞게 코드 생성
        				this.fvMasterFile.fnSearchAtchFileId(this, function(rtnValue){
        					this.dsMaster.setColumn(0, 'BOARD_ATTACH', rtnValue.resultData);
        					this.fvMasterFile.fn_setAtchFileId(rtnValue.resultData);
        					this.fvMasterFile.fnSearchFileList(this);
        				});
        			}else{
        				this.fvMasterFile.fn_setAtchFileId(atchFileId);
        				this.fvMasterFile.fnSearchFileList(this);
        			}
        		}
        	);
        };

        //저장
        this.divMasterFile_btnSave_onclick = function(obj,e)
        {
        	//데이터변경 / 파일 수정 여부
        	if (!take.isDsModified(this.dsMaster) && !this.fvMasterFile.fn_isUpdate()){
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	//파일 업로드 / 저장
        	this.fvMasterFile.fnUploadSaveFileList(this, function(rtnValue){
        		if(rtnValue.result){
        			//마스터 정보 저장
        			take.alert(this, "info", "마스터정보 save하기");
        		}
        	});
        };

        //삭제
        this.divMasterFile_btnDelete_onclick = function(obj,e)
        {
        	take.alert(this, "info", "서버에서 삭제");
        };





        //리스트정보 첨부파일 예제
        //조회
        this.divListFile_btnSearch_onclick = function(obj,e)
        {
        	this.dsList.clearData();

        	take.tranSelect
        	(
        		  this
        		, "boardInfoList"
        		, "BoardManagement.boardInfoList"
        		, ""
        		, "dsList"
        		, "PROJECT_CD=PM00000001 MENU_CD=M0028"
        		, function(sId, nErrCd, sErrMsg){

        		}
        	);
        };

        /*
         * dsList_canrowposchange : 행 이동 전
         */
        this.dsList_canrowposchange = function(obj,e)
        {
        	//현재row의 첨부파일 수정여부 확인
        	var isUpdate = this.fvListFile.fn_isUpdate();
        	if(isUpdate){
        		return take.confirm(this, "question", "첨부파일이 저장되지 않습니다.\r\n계속 진행하시겠습니까?");
        	}

        	return true;
        };

        /*
         * dsList_onrowposchanged : 행 이동 후
         */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	//첨부파일 reload
        	var atchFileId = this.dsList.getColumn(e.newrow, 'BOARD_ATTACH');
        	if(take.isEmpty(atchFileId)){
        		//첨부파일 코드가 없을시 기준에 맞게 코드 생성
        		this.fvListFile.fnSearchAtchFileId(this, function(rtnValue){
        			this.dsList.setColumn(e.newrow, 'BOARD_ATTACH', rtnValue.resultData);
        			this.fvListFile.fn_setAtchFileId(rtnValue.resultData);
        			this.fvListFile.fnSearchFileList(this);
        		});
        	}else{
        		this.fvListFile.fn_setAtchFileId(atchFileId);
        		this.fvListFile.fnSearchFileList(this);
        	}
        };

        //신규
        this.divListFile_btnAddRow_onclick = function(obj,e)
        {
        	if(take.isDsModified(this.dsList)){
        		take.alert(this, "info", "저장 후 진행해주시기 바랍니다.");
        		return;
        	}else{
        		var nRow = this.dsList.addRow();
        		this.dsList.setColumn(nRow, 'BOARD_TITLE', "테스트");
        		this.fvListFile.fnSearchAtchFileId(this, function(rtnValue){
        			this.dsList.setColumn(nRow, 'BOARD_ATTACH', rtnValue.resultData);
        			this.fvListFile.fn_setAtchFileId(rtnValue.resultData);
        			this.fvListFile.fnSearchFileList(this);
        		});
        	}
        };

        //저장
        this.divListFile_btnSave_onclick = function(obj,e)
        {
        	//데이터변경 / 파일 수정 여부
        	if (!take.isDsModified(this.dsList) && !this.fvListFile.fn_isUpdate()){
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	//파일 업로드 / 저장
        	this.fvListFile.fnUploadSaveFileList(this, function(rtnValue){
        		if(rtnValue.result){
        			//리스트 정보 저장
        			take.alert(this, "info", "리스트정보 save하기");
        		}
        	});
        };

        //삭제
        this.divListFile_btnDelete_onclick = function(obj,e)
        {
        	take.alert(this, "info", "서버에서 삭제");
        };




        //팝업 첨부파일 예제
        //조회
        this.divPopup_btnSearch_onclick = function(obj,e)
        {
        	this.dsPopup.clearData();

        	take.tranSelect
        	(
        		  this
        		, "boardInfoList"
        		, "BoardManagement.boardInfoList"
        		, ""
        		, "dsPopup"
        		, "PROJECT_CD=PM00000001 MENU_CD=M0028"
        		, function(sId, nErrCd, sErrMsg){

        		}
        	);
        };

        this.divPopup_grdList_oncellclick = function(obj,e)
        {
        	var sType = obj.getCellProperty("body", e.cell, "displaytype");
        	if(sType.indexOf('button') == -1){
        		return;
        	}

        	var sOpt = "";
        	var oArg = {
        		  argInDsPopup			: this.dsPopup
        		, argInColIdPopup		: 'BOARD_ATTACH'
        		, argInAtchFileTypeCd	: this.FILETYPE_BOARD
        		, argInAtchFileId		: this.dsPopup.getColumn(e.row, 'BOARD_ATTACH')
        		, argInIsReadOnly		: false	//읽기전용여부
        	};

        	take.openPopup(this, "comFilePop", "frm::com/comFilePop.xfdl", oArg, sOpt,
        		function(sId, oArgs){

        		}
        	);
        };

        //행추가
        this.divPopup_btnAddRow_onclick = function(obj,e)
        {
        	this.dsPopup.addRow();
        };

        //행삭제
        this.divPopup_btnDelete_onclick = function(obj,e)
        {
        	take.alert(this, "info", "행삭제");
        };

        //저장
        this.divPopup_btnSave_onclick = function(obj,e)
        {
        	take.alert(this, "info", "저장");
        };



        this.Button00_onclick = function(obj,e)
        {

        	take.transaction
        	(
        		this,
        		"Save",
        		"SVC_LOC::tm/test.do",
        		"dsTest=dsTest dsFile=dsFile",
        		"",
        		"",
        		"fnCallback"
        	);
        };

        this.Button01_onclick = function(obj,e)
        {
        	var objDsFile = this.fv_divFile.fn_getFileListDs();
        	this.dsFile.copyData(objDsFile);
        	trace(this.dsFile.saveXML());
        };









        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBasic.form.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.divBasic.form.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.divBasic.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divMasterFile.form.edtUserId.addEventHandler("onchanged",this.divDetail_edtUserId_onchanged,this);
            this.divMasterFile.form.edtUserNm.addEventHandler("onchanged",this.divDetail_edtUserId_onchanged,this);
            this.divMasterFile.form.btnSearch.addEventHandler("onclick",this.divMasterFile_btnSearch_onclick,this);
            this.divMasterFile.form.btnSave.addEventHandler("onclick",this.divMasterFile_btnSave_onclick,this);
            this.divMasterFile.form.btnDelete.addEventHandler("onclick",this.divMasterFile_btnDelete_onclick,this);
            this.divListFile.form.edtUserId.addEventHandler("onchanged",this.divDetail_edtUserId_onchanged,this);
            this.divListFile.form.edtUserNm.addEventHandler("onchanged",this.divDetail_edtUserId_onchanged,this);
            this.divListFile.form.btnAddRow.addEventHandler("onclick",this.divListFile_btnAddRow_onclick,this);
            this.divListFile.form.btnSave.addEventHandler("onclick",this.divListFile_btnSave_onclick,this);
            this.divListFile.form.btnDelete.addEventHandler("onclick",this.divListFile_btnDelete_onclick,this);
            this.divListFile.form.btnSearch.addEventHandler("onclick",this.divListFile_btnSearch_onclick,this);
            this.divPopup.form.grdList.addEventHandler("oncellclick",this.divPopup_grdList_oncellclick,this);
            this.divPopup.form.btnSearch.addEventHandler("onclick",this.divPopup_btnSearch_onclick,this);
            this.divPopup.form.btnAddRow.addEventHandler("onclick",this.divPopup_btnAddRow_onclick,this);
            this.divPopup.form.btnSave.addEventHandler("onclick",this.divPopup_btnSave_onclick,this);
            this.divPopup.form.btnDelete.addEventHandler("onclick",this.divPopup_btnDelete_onclick,this);
            this.divSingle.form.btnNew.addEventHandler("onclick",this.divSingle_btnNew_onclick,this);
            this.divSingle.form.btnSearch.addEventHandler("onclick",this.divSingle_btnSearch_onclick,this);
            this.divSingle.form.btnSave.addEventHandler("onclick",this.divSingle_btnSave_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
        };
        this.loadIncludeScript("sampleComFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
