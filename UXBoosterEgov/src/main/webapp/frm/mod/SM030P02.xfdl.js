(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SM030P01");
            this.set_titletext("설문조사 참여공지팝업");
            this.set_background("#ffffff");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANONNY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ENC_USER_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurveyItemInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NECESSARY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DUPL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TEMP_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLegend", this);
            obj._setContents("<ColumnInfo><Column id=\"LEGEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLegendTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"LEGEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANONNY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_LEGEND_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM AS REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM AS MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain00","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleT","0","30","100","31",null,null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("0");
            obj.set_text("설문제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain00.addChild(obj.name, obj);

            obj = new Static("Static01","staTitleT:0","30",null,"31","0",null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divMain00.addChild(obj.name, obj);

            obj = new Static("staDateT","0","staTitleT:-1","100","31",null,null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("2");
            obj.set_text("설문기간");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain00.addChild(obj.name, obj);

            obj = new Static("Static02","staDateT:0","Static01:-1",null,"31","0",null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divMain00.addChild(obj.name, obj);

            obj = new Edit("edtTitle","109","35",null,"21","10",null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("4");
            obj.set_maxlength("33");
            obj.set_readonly("true");
            this.divMain00.addChild(obj.name, obj);

            obj = new Calendar("calRegForm","109","65","90","21",null,null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            obj.set_readonly("true");
            this.divMain00.addChild(obj.name, obj);

            obj = new Static("Static14","199","65","15","21",null,null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divMain00.addChild(obj.name, obj);

            obj = new Calendar("calRegTo","214","65","90","21",null,null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            obj.set_readonly("true");
            this.divMain00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","100","430","21",null,null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("8");
            obj.set_text("문항정보");
            obj.set_cssclass("sta_WF_title02");
            this.divMain00.addChild(obj.name, obj);

            obj = new Div("divLine","0","126",null,"1","0",null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("9");
            obj.set_border("2px solid #e8e9ec,0px solid,0px solid");
            this.divMain00.addChild(obj.name, obj);

            obj = new Div("divDetailItem","0","divLine:5",null,null,"0","45",null,null,null,null,this.divMain00.form);
            obj.set_taborder("10");
            obj.set_text("");
            this.divMain00.addChild(obj.name, obj);

            obj = new Button("btnSave00",null,"0","46","25","0",null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_save02");
            this.divMain00.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"5",null,null,null,null,this.divMain00.form);
            obj.set_taborder("12");
            obj.set_text("오늘하루그만보기");
            this.divMain00.addChild(obj.name, obj);

            obj = new Div("divMain01","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","30",null,"31","0",null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain01.addChild(obj.name, obj);

            obj = new Static("staTitleT","0","30","100","31",null,null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("1");
            obj.set_text("설문제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain01.addChild(obj.name, obj);

            obj = new Static("Static01_00","100","30",null,"31","0",null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divMain01.addChild(obj.name, obj);

            obj = new Static("staDateT","0","staTitleT:-1","100","31",null,null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("3");
            obj.set_text("설문기간");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain01.addChild(obj.name, obj);

            obj = new Static("Static02","100","Static01_00:-1",null,"31","0",null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divMain01.addChild(obj.name, obj);

            obj = new Edit("edtTitle","109","35",null,"21","10",null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("5");
            obj.set_maxlength("33");
            obj.set_readonly("true");
            this.divMain01.addChild(obj.name, obj);

            obj = new Calendar("calRegForm","109","65","90","21",null,null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            obj.set_readonly("true");
            this.divMain01.addChild(obj.name, obj);

            obj = new Static("Static14","199","65","15","21",null,null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divMain01.addChild(obj.name, obj);

            obj = new Calendar("calRegTo","214","65","90","21",null,null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            obj.set_readonly("true");
            this.divMain01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","100","430","21",null,null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("9");
            obj.set_text("문항정보");
            obj.set_cssclass("sta_WF_title02");
            this.divMain01.addChild(obj.name, obj);

            obj = new Div("divLine","0","126",null,"1","0",null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("10");
            obj.set_border("2px solid #e8e9ec,0px solid,0px solid");
            this.divMain01.addChild(obj.name, obj);

            obj = new Div("divDetailItem","0","divLine:5",null,null,"0","45",null,null,null,null,this.divMain01.form);
            obj.set_taborder("11");
            obj.set_text("");
            this.divMain01.addChild(obj.name, obj);

            obj = new Button("btnSave01",null,"0","46","25","0",null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_save02");
            this.divMain01.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"5",null,null,null,null,this.divMain01.form);
            obj.set_taborder("13");
            obj.set_text("오늘하루그만보기");
            this.divMain01.addChild(obj.name, obj);

            obj = new Div("divMain02","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain02.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain02.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain02.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,null,"0","99",null,null,null,null,this.divMain02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain02.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain02.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain02.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain02.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain02.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain02.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain02.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10","40",null,null,"10","108",null,null,null,null,this.divMain02.form);
            obj.set_taborder("5");
            this.divMain02.addChild(obj.name, obj);

            obj = new Div("divMain03","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_positionstep("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain03.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain03.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain03.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,null,"0","99",null,null,null,null,this.divMain03.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain03.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain03.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain03.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain03.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain03.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain03.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain03.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10","40",null,null,"10","108",null,null,null,null,this.divMain03.form);
            obj.set_taborder("5");
            this.divMain03.addChild(obj.name, obj);

            obj = new Div("divMain04","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_positionstep("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain04.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain04.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain04.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain04.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,null,"0","99",null,null,null,null,this.divMain04.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain04.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain04.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain04.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain04.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain04.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain04.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain04.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10","40",null,null,"10","108",null,null,null,null,this.divMain04.form);
            obj.set_taborder("5");
            this.divMain04.addChild(obj.name, obj);

            obj = new Div("divMain05","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_positionstep("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain05.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain05.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain05.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain05.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,null,"0","99",null,null,null,null,this.divMain05.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain05.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain05.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain05.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain05.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain05.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain05.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain05.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10","40",null,null,"10","108",null,null,null,null,this.divMain05.form);
            obj.set_taborder("5");
            this.divMain05.addChild(obj.name, obj);

            obj = new Div("divMain06","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_positionstep("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain06.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain06.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain06.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain06.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,null,"0","99",null,null,null,null,this.divMain06.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain06.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain06.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain06.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain06.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain06.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain06.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain06.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10","40",null,null,"10","108",null,null,null,null,this.divMain06.form);
            obj.set_taborder("5");
            this.divMain06.addChild(obj.name, obj);

            obj = new Div("divMain07","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_positionstep("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain07.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain07.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain07.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain07.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,null,"261","0","99",null,null,null,null,this.divMain07.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain07.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain07.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain07.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain07.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain07.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain07.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain07.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10",null,null,"242","10","108",null,null,null,null,this.divMain07.form);
            obj.set_taborder("5");
            this.divMain07.addChild(obj.name, obj);

            obj = new Div("divMain08","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_positionstep("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain08.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain08.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain08.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain08.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,null,"261","0","99",null,null,null,null,this.divMain08.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain08.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain08.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain08.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain08.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain08.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain08.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain08.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10",null,null,"242","10","108",null,null,null,null,this.divMain08.form);
            obj.set_taborder("5");
            this.divMain08.addChild(obj.name, obj);

            obj = new Div("divMain09","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_positionstep("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain09.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain09.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain09.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain09.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,null,"261","0","99",null,null,null,null,this.divMain09.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain09.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain09.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain09.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain09.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain09.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain09.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain09.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10",null,null,"242","10","108",null,null,null,null,this.divMain09.form);
            obj.set_taborder("5");
            this.divMain09.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain00.form.divLine
            obj = new Layout("default","",0,0,this.divMain00.form.divLine.form,function(p){});
            this.divMain00.form.divLine.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain00.form.divDetailItem.form
            obj = new Layout("default","",0,0,this.divMain00.form.divDetailItem.form,function(p){});
            this.divMain00.form.divDetailItem.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain00.form
            obj = new Layout("default","",0,0,this.divMain00.form,function(p){});
            this.divMain00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain01.form.divLine
            obj = new Layout("default","",0,0,this.divMain01.form.divLine.form,function(p){});
            this.divMain01.form.divLine.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain01.form.divDetailItem.form
            obj = new Layout("default","",0,0,this.divMain01.form.divDetailItem.form,function(p){});
            this.divMain01.form.divDetailItem.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain01.form
            obj = new Layout("default","",0,0,this.divMain01.form,function(p){});
            this.divMain01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain02.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain02.form.divFile.form,function(p){});
            this.divMain02.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain02.form
            obj = new Layout("default","",0,0,this.divMain02.form,function(p){});
            this.divMain02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain03.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain03.form.divFile.form,function(p){});
            this.divMain03.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain03.form
            obj = new Layout("default","",0,0,this.divMain03.form,function(p){});
            this.divMain03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain04.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain04.form.divFile.form,function(p){});
            this.divMain04.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain04.form
            obj = new Layout("default","",0,0,this.divMain04.form,function(p){});
            this.divMain04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain05.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain05.form.divFile.form,function(p){});
            this.divMain05.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain05.form
            obj = new Layout("default","",0,0,this.divMain05.form,function(p){});
            this.divMain05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain06.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain06.form.divFile.form,function(p){});
            this.divMain06.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain06.form
            obj = new Layout("default","",0,0,this.divMain06.form,function(p){});
            this.divMain06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain07.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain07.form.divFile.form,function(p){});
            this.divMain07.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain07.form
            obj = new Layout("default","",0,0,this.divMain07.form,function(p){});
            this.divMain07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain08.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain08.form.divFile.form,function(p){});
            this.divMain08.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain08.form
            obj = new Layout("default","",0,0,this.divMain08.form,function(p){});
            this.divMain08.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain09.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain09.form.divFile.form,function(p){});
            this.divMain09.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain09.form
            obj = new Layout("default","",0,0,this.divMain09.form,function(p){});
            this.divMain09.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("10");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SM030P02.xfdl", function() {
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

        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_objDsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_objDsSurvey = null;
        this.fv_nStepIdx = "";

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
                //Script
        		this.fv_objDsSurvey = this.opener.dsSurveyPop;

        		var nDsCnt = this.fv_objDsSurvey.rowcount;
        		var nStepCnt = this.getStepCount();

        		if( nStepCnt > nDsCnt )
        		{
        			this.stepselector.set_stepcount(nDsCnt);
        		}

        		this.fv_nStepIdx = 0;

        		this.fnSearch("SurveyDetailSearch");
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
        this.fnInit = function(){
        	//검색조건
        	//var objDivSearch = this.divSearch.form;
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
            if (take.nvl(sTranId, "")=="") sTranId = "SurveyDetailSearch";

        	var arrNamespace = ["SurveyManagementMapper.surveyItemInfoList"
        							, "SurveyManagementMapper.surveyLegendInfoList"
        							];
        	var arrOutDs = ["dsSurveyItemInfo", "dsLegend"];

        	var sProjectCd = this.fv_objDsSurvey.getColumn(this.fv_nStepIdx, "PROJECT_CD");
        	var sSurveySeq = this.fv_objDsSurvey.getColumn(this.fv_nStepIdx, "SURVEY_SEQ");
        	var sAnonnyYn = this.fv_objDsSurvey.getColumn(this.fv_nStepIdx, "ANONNY_YN");

        	this.dsSearch.clearData();
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "PROJECT_CD", sProjectCd);
        	this.dsSearch.setColumn(nRow, "SURVEY_SEQ", sSurveySeq);

        	this.dsSurveyItemInfo.clearData();
        	this.dsLegend.clearData();

        	take.tranSelect
        	(
        		this,
        		"SurveyDetailSearch",
        		arrNamespace,
        		["dsSearch"],
        		arrOutDs,
        		"",
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
            if (take.nvl(sTranId, "")=="") sTranId = "SurveyResultSave";

        	var sSurveySeq = this.opener.dsSurveyPop.getColumn(this.fv_nStepIdx, "SURVEY_SEQ");
        	var sAnonnyYn = this.opener.dsSurveyPop.getColumn(this.fv_nStepIdx, "ANONNY_YN");
        	take.transaction
        	(
        		this,
        		"SurveyResultSave",
        		"SVC_LOC::sm/SurveyResultSave.do",
        		"dsSurvey=dsSurvey:U dsResult=dsResult:U",
        		"",
        		"sAnonnyYn="+sAnonnyYn + " sSurveySeq="+sSurveySeq,
        		"fnCallback"
        	);
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }

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
                case "SurveyDetailSearch" :  //조회 콜백
                    //Script
        			var nStepIdx = this.fv_nStepIdx;
        			nStepIdx = nStepIdx.toString().lpad(2, "0");

        			var objMain = this.components["divMain" + nStepIdx];
        			var sTitle = this.opener.dsSurveyPop.getColumn( this.fv_nStepIdx, "TITLE" );
        			var sStartDt = this.opener.dsSurveyPop.getColumn( this.fv_nStepIdx, "SURVEY_START_DT" );
        			var sEndDt = this.opener.dsSurveyPop.getColumn( this.fv_nStepIdx, "SURVEY_END_DT" );

        			objMain.form.edtTitle.set_value(sTitle);
        			objMain.form.calRegForm.set_value(sStartDt);
        			objMain.form.calRegTo.set_value(sEndDt);

        			for( var i=0; i<this.dsSurveyItemInfo.rowcount; i++ )
        			{
        				this.fnSetItemComp(this.fv_nStepIdx, i, "INIT");
        			}

                    break;
        		case "SurveyResultSave"	 : //저장 콜백
        			take.alert(this, "Info", "저장이 완료되었습니다.");
        			this.close();

        			break;
                default :
                    break;
            }
        }

        this.CM040P01_onstepchanged = function(obj,e)
        {
        	var nStepIdx = this.getStepIndex();

        	this.fv_nStepIdx = nStepIdx;

        	this.fnSearch("SurveyDetailSearch");
        };

        this.chkClose_onclick = function(obj,e)
        {
        	var sUserId = this.fv_objDsUserInfo.getColumn(0, "USER_ID");
        	var sSurveySeq = this.opener.dsSurveyPop.getColumn( this.fv_nStepIdx, "SURVEY_SEQ" );
        	var sKey = sUserId + "_" + sSurveySeq;

        	//20210107 정해원 cookie 정책에 따른 수정
        	//take.setCookie('notiPop'+sKey, 'Y' , 1 );
        	take.setCookie('surveyPop'+sKey, take.toDateString(new Date(), "yyyyMMdd"));
        	this.close();
        };

        // 문항 보기 체크박스 클릭
        this.chkLegend_onclick = function(obj,e){
        	var sId = obj.name.replace("chkLegend", "");
        	var arrId = sId.split("_");
        	var nRow1 = parseInt(arrId[0]);
        	var nRow2 = parseInt(arrId[1]);

        	var sDuplYn = this.dsSurveyItemInfo.getColumn(nRow1, "DUPL_YN");

        	if( "Y" != sDuplYn ) //복수선택여부 Y일경우
        	{
        		var sVal = obj.value;
        		if( "Y" == sVal )
        		{
        			var nStepIdx = parseInt(this.fv_nStepIdx);
        			var sStepIdx = nStepIdx.toString().lpad(2, "0");
        			var objDs = this.objects["dsLegendTemp" + nStepIdx + "_" + nRow1];
        			for( var i=0; i<objDs.rowcount; i++ )
        			{
        				if( i != nRow2 )
        				{
        					var objMainDiv = this.components["divMain"+sStepIdx];
        					var objDetailDiv = objMainDiv.form.divDetailItem;
        					var objDivItem = objDetailDiv.form.components["divItem" + nRow1];
        					var objChk = objDivItem.form.components["chkLegend" + nRow1 + "_" + i];

        					objChk.set_value("N");
        				}

        			}
        		}
        	}
        };

        /**
         * fnSetItemComp : 문항정보 동적 생성
         * @example this.fnSetItemComp();
         */
        this.fnSetItemComp = function ( nStepIdx, nRow, sGbn )
        {
        	var nDivLeft = 10;
        	var nDivTop = 0;
        	var nDivWidth = 10;
        	var nDivHeight = 100;
        	var nDivRight = 10;
        	var sStepIdx = "";

        	if( 10 > nStepIdx )
        	{
        		sStepIdx = "0"+ nStepIdx.toString();
        	}

        	var objMainDiv = this.components["divMain"+sStepIdx];
        	var objDetailDiv = objMainDiv.form.divDetailItem;


        	//div생성
        	var objDiv = new Div();
        	var sDivNm = "divItem"+nRow;

        	var objDivItem = objDetailDiv.form.components[sDivNm];

        	if( null != take.nvl(objDivItem) )
        	{
        		//trace("컴포넌트 존재함");
        		return false;
        	}

        	if( nRow > 0 )
        	{
        		nDivTop = "divItem"+(nRow-1) + ":5";
        	}

        	objDiv.init(sDivNm, nDivLeft, nDivTop, null, nDivHeight, nDivRight, null);
        	objDetailDiv.form.addChild(sDivNm, objDiv);
        	objDiv.show();
        	objDiv.set_border("0px solid,0px solid,2px solid #e8e9ec,0px solid");

        	//staticTitle생성
        	var sTitle = this.dsSurveyItemInfo.getColumn(nRow, "ITEM_TITLE");
        	var objStatic = new Static();
        	var sTitleNm = "staTitle"+nRow;
        	var nTitleTop = 10;
        	var nTitleHeight = 30;
        	objStatic.init(sTitleNm, 10, nTitleTop, 420, nTitleHeight, null, null);

        	objDiv.addChild(sTitleNm, objStatic);
        	objStatic.show();

        	var sItemType = this.dsSurveyItemInfo.getColumn(nRow, "ITEM_TYPE");
        	var sSurveyItemSeq = this.dsSurveyItemInfo.getColumn(nRow, "SURVEY_ITEM_SEQ");
        	var sNecessaryYn = this.dsSurveyItemInfo.getColumn(nRow, "NECESSARY_YN");
        	var sDuplYn = this.dsSurveyItemInfo.getColumn(nRow, "DUPL_YN");
        	var sTitleTxt = (nRow+1) + ". " + sTitle;

        	if( "Y" == sNecessaryYn && "Y" == sDuplYn )
        	{
        		sTitleTxt = sTitleTxt + " (필수, 복수선택 가능)";
        	}
        	else if( "Y" == sNecessaryYn && "Y" != sDuplYn )
        	{
        		sTitleTxt = sTitleTxt + " (필수)";
        	}
        	else if( "Y" != sNecessaryYn && "Y" == sDuplYn )
        	{
        		sTitleTxt = sTitleTxt + " (복수선택 가능)";
        	}

        	objStatic.set_text( sTitleTxt );
        	objStatic.set_font("bold 14px NanumGothic");

        	if( "01" == sItemType )//radio보기영역 생성(객관식일경우)
        	{

        		this.dsLegendTemp.clearData();
        		for( var i=0; i<this.dsLegend.rowcount; i++ )
        		{
        			var sSurveyItemSeq2 = this.dsLegend.getColumn(i, "SURVEY_ITEM_SEQ");
        			if( sSurveyItemSeq == sSurveyItemSeq2 )
        			{
        				var nTempRow = this.dsLegendTemp.addRow();
        				this.dsLegendTemp.copyRow(nTempRow, this.dsLegend, i);
        			}
        		}

        		var sDatasetId = "dsLegendTemp"+ nStepIdx + "_" +nRow;
        		var objLegendDs = new Dataset;
        		objLegendDs.set_name(sDatasetId);
        		this.addChild(sDatasetId, objLegendDs);

        		objLegendDs.set_enableevent(false);
        		var nColId, sColInfo,sColSize,sColType;
        		var objDs = this.dsLegendTemp;
        		var nColCnt = this.dsLegendTemp.getColCount();
        		for(var i=0; i<nColCnt; i++)
        		{
        			nColId	 = objDs.getColID(i);
        			sColInfo = objDs.getColumnInfo(i);
        			sColSize = sColInfo.size;
        			sColType = sColInfo.type;
        			objLegendDs.addColumn(nColId,sColType,sColSize);
        		}
        		objLegendDs.set_enableevent(true);
        		objLegendDs.appendData(this.dsLegendTemp);

        		var nChkLeft = 10;
        		var nChkRight = 50;
        		var nChkHeght = 25;
         		var nChkInterval = 25;
        		for( var i=0; i<objLegendDs.rowcount; i++ )
        		{
        			var objCheckBox = new CheckBox();
        			var sChkNm = "chkLegend" + nRow + "_" + i;
        			var sChkTop = ( 0 == i ) ? sTitleNm + ":5" : "chkLegend" + nRow + "_" + (i-1) + ":5";
        			objCheckBox.init(sChkNm, nChkLeft, sChkTop, null, nChkHeght, nChkRight, null);
        			objDiv.addChild(sChkNm, objCheckBox);
        			objCheckBox.show();

        			var sLegendSeq = objLegendDs.getColumn(i, "LEGEND_SEQ");
        			var sLegendNm = objLegendDs.getColumn(i, "LEGEND_NM");
        			objCheckBox.set_text(sLegendNm);
        			objCheckBox.set_falsevalue("N");
        			objCheckBox.set_truevalue("Y");
        			objCheckBox.set_value("N");

        			objCheckBox.addEventHandler( "onclick", this.chkLegend_onclick, this);
        		}

        		//this.removeChild(sDatasetId);

        		var sEtcYn = this.dsSurveyItemInfo.getColumn(nRow, "LEGEND_ETC_YN");
        		if( "Y" == sEtcYn )
        		{
        			//editbox 기타의견 생성
        			var sLastChkNm = "chkLegend" + nRow + "_" + (objLegendDs.rowcount-2);
        			var nEtcTop = sLastChkNm + ":5";
        			var objEtcEdit = new Edit();
        			var sEtcEditNm = "edtEtcAnswer"+nRow;
        			objEtcEdit.init(sEtcEditNm, 100, nEtcTop, null, 25, 100, null);
        			objDiv.addChild(sEtcEditNm, objEtcEdit);
        			objEtcEdit.show();
        		}

        		var nRadioHeght = (nChkHeght * objLegendDs.rowcount) + (5*(objLegendDs.rowcount-1))
         		nDivHeight = (nDivHeight + nRadioHeght) - 30;
         		objDiv.set_height(nDivHeight);
        	}
        	else //주관식
        	{
        		//staticTitle생성
        		var objStatic01 = new Static();
        		var sTitleNm01 = "staTitle01"+nRow;
        		objStatic01.init(sTitleNm01, 20, sTitleNm + ":5", 50, 30, null, null);
        		objDiv.addChild(sTitleNm01, objStatic01);
        		objStatic01.show();
        		objStatic01.set_text( "답변" );

        		//editbox생성
        		var objEdit = new Edit();
        		var sEditNm = "edtAnswer"+nRow;
        		objEdit.init(sEditNm, sTitleNm01 + ":10", sTitleNm + ":10", null, 30, 100, null);
        		objDiv.addChild(sEditNm, objEdit);
        		objEdit.show();
        	}

        	objDetailDiv.form.resetScroll();
        };

        this.btnSave_onclick = function(obj,e)
        {
        	var bValid = false;
        	for( var i=0; i<this.dsSurveyItemInfo.rowcount; i++ )
        	{
        		this.dsLegendTemp.clearData();
        		var sItemType = this.dsSurveyItemInfo.getColumn(i, "ITEM_TYPE");
        		var sSurveySeq = this.dsSurveyItemInfo.getColumn(i, "SURVEY_SEQ");
        		var sItemSeq = this.dsSurveyItemInfo.getColumn(i, "SURVEY_ITEM_SEQ");
        		var sNecessaryYn = this.dsSurveyItemInfo.getColumn(i, "NECESSARY_YN");
        		var nChkCnt = 0;

        		var arrLegendIdxs = take.getFindRows(this.dsLegend, "SURVEY_ITEM_SEQ", sItemSeq);

        		for( var j=0; j<arrLegendIdxs.length; j++ )
        		{
        			var nTempRow = this.dsLegendTemp.addRow();
        			this.dsLegendTemp.copyRow(nTempRow, this.dsLegend, arrLegendIdxs[j]);
        		}

        		var sStepIdx = this.fv_nStepIdx;
        		sStepIdx = sStepIdx.toString().lpad(2, "0");

        		var objMainDiv = this.components["divMain"+sStepIdx];
        		var objDetailDiv = objMainDiv.form.divDetailItem;
        		var objDivItem = objDetailDiv.form.components["divItem" + i];
        		var objAnswer = objDivItem.form.components["edtAnswer" + i];

        		if( "01" == sItemType )
        		{
        			for( var k=0; k<this.dsLegendTemp.rowcount; k++ )
        			{
        				var objChk = objDivItem.form.components["chkLegend" + i + "_" + k];
        				var sLegenChk = objChk.value;
        				if( "Y" == sLegenChk )
        				{
        					var nRow = this.dsResult.addRow();
        					var sResultLegendSeq = this.dsLegendTemp.getColumn(k, "LEGEND_SEQ");
        					var sResultLegendNm = this.dsLegendTemp.getColumn(k, "LEGEND_NM");
        					var sEtcYn = this.dsLegendTemp.getColumn(k, "LEGEND_ETC_YN");

        					this.dsResult.setColumn(nRow, "SURVEY_SEQ", sSurveySeq);
        					this.dsResult.setColumn(nRow, "SURVEY_ITEM_SEQ", sItemSeq);
        					this.dsResult.setColumn(nRow, "ITEM_LEGEND_RESULT", sResultLegendSeq);

         					if( "Y" == sEtcYn )
         					{
        						var objEtcAnswer = objDivItem.form.components["edtEtcAnswer" + i];
        						this.dsResult.setColumn(nRow, "ITEM_RESULT", objEtcAnswer.value);
         					}
        					nChkCnt++;
        				}
        			}
        		}
        		else
        		{
        			objAnswer = objDivItem.form.components["edtAnswer" + i];
        			var nRow = this.dsResult.addRow();

        			this.dsResult.setColumn(nRow, "SURVEY_SEQ", sSurveySeq);
        			this.dsResult.setColumn(nRow, "SURVEY_ITEM_SEQ", sItemSeq);
        			this.dsResult.setColumn(nRow, "ITEM_RESULT", objAnswer.value);
        		}

        		if( "Y" == sNecessaryYn )
        		{
        			var nResultFindRow = this.dsResult.findRowAsNF("SURVEY_ITEM_SEQ", sItemSeq);
        			bValid = ( nResultFindRow < 0 ) ? true : false;
        			bValid = ("01" == sItemType && nChkCnt < 1) ? true : false;

        			if( "02" == sItemType && null != objAnswer )
        			{
        				bValid = ("" == take.nvl(objAnswer.value, "")) ? true : false;
        			}

        			if( bValid )
        			{
        				take.alert(this, "Info", "필수 답변인 문항을 확인해주세요.");
        				return false;
        			}
        		}
        	}

        	trace(this.fv_objDsSurvey.saveXML());
        	var nTotalCnt = parseInt(this.fv_objDsSurvey.getColumn(this.fv_nStepIdx, "CNT"));
        	var nResultCnt = parseInt(this.fv_objDsSurvey.getColumn(this.fv_nStepIdx, "RESULT_CNT"));

        	trace( "!@!@>> nTotalCnt:   " + nTotalCnt + "     !@!@>> nResultCnt:   " + nResultCnt );

        	if( (nResultCnt + 1) == nTotalCnt )
        	{
        		this.dsSurvey.clearData();
        		this.dsSurvey.addRow();
        		this.dsSurvey.copyRow(0, this.fv_objDsSurvey, this.fv_nStepIdx);
        		this.dsSurvey.setColumn(0, "SURVEY_STATUS", "03");

        		this.dsSurvey.set_updatecontrol(false);
        		this.dsSurvey.setRowType(0, Dataset.ROWTYPE_UPDATE);
        		this.dsSurvey.set_updatecontrol(true);
        	}

        	trace("!@!@>> RowType:  " + this.dsSurvey.getRowType());

        	this.fnSave("SurveyResultSave");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("onstepchanged",this.CM040P01_onstepchanged,this);
            this.addEventHandler("ontimer",this.CM040P01_ontimer,this);
            this.divMain00.form.edtTitle.addEventHandler("onkeyup",this.divTimeLineReg_edtTitle_onkeyup,this);
            this.divMain00.form.btnSave00.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divMain00.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain01.form.edtTitle.addEventHandler("onkeyup",this.divTimeLineReg_edtTitle_onkeyup,this);
            this.divMain01.form.btnSave01.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divMain01.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain02.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain02.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain03.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain03.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain04.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain04.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain05.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain05.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain06.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain06.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain07.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain07.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain08.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain08.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain09.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain09.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
        };
        this.loadIncludeScript("SM030P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
