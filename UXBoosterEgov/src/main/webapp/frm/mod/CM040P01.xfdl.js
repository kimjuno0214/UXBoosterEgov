(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM040P01");
            this.set_titletext("공지사항상세팝업");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain00","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain00.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain00.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,null,"0","99",null,null,null,null,this.divMain00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain00.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain00.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain00.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain00.form.divFile.form);
            obj.set_taborder("1");
            obj.set_text("일괄다운로드");
            this.divMain00.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain00.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain00.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10","40",null,null,"10","108",null,null,null,null,this.divMain00.form);
            obj.set_taborder("5");
            this.divMain00.addChild(obj.name, obj);

            obj = new Div("divMain01","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain01.addChild(obj.name, obj);

            obj = new Edit("edtTitle","10","5",null,"21","10",null,null,null,null,null,this.divMain01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMain01.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,null,"0","99",null,null,null,null,this.divMain01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain01.addChild(obj.name, obj);

            obj = new Div("divFile","0",null,null,"57","0","33",null,null,null,null,this.divMain01.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            this.divMain01.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"16","90","21","8",null,null,null,null,null,this.divMain01.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("일괄다운로드");
            this.divMain01.form.divFile.addChild(obj.name, obj);

            obj = new CheckBox("chkClose","0",null,"114","20",null,"13",null,null,null,null,this.divMain01.form);
            obj.set_taborder("4");
            obj.set_text("오늘하루그만보기");
            this.divMain01.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","10","40",null,null,"10","108",null,null,null,null,this.divMain01.form);
            obj.set_taborder("5");
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
            //-- Default Layout : this.divMain00.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain00.form.divFile.form,function(p){});
            this.divMain00.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain00.form
            obj = new Layout("default","",0,0,this.divMain00.form,function(p){});
            this.divMain00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain01.form.divFile.form
            obj = new Layout("default","",0,0,this.divMain01.form.divFile.form,function(p){});
            this.divMain01.form.divFile.form.addLayout(obj.name, obj);

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
            obj = new Layout("default","",800,410,this,function(p){});
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
        this.registerScript("CM040P01.xfdl", function() {
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
        this.fv_bWebOnload = false;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_objDsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sMenuCd = "M0028";
        this.fv_objDsNotice = null;
        this.fv_sBoardSeq = "";

        this.fileConfig = {
                host         	: take.getSvcUrl(),
                zipDownloadUrl  : "zipDownload.do",
        		downloadUrl  	: "fileDownload.do"
            };
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
        		this.fv_objDsNotice = this.opener.dsNoticePop;

        		var nDsCnt = this.fv_objDsNotice.rowcount;
        		var nStepCnt = this.getStepCount();

        		if( nStepCnt > nDsCnt )
        		{
        			this.stepselector.set_stepcount(nDsCnt);
        		}

        		var sBaseUrl = take.getSvcUrl();
        		var objDivMain = this.components["divMain00"];
        		objDivMain.form.wbWebEditor.set_url(sBaseUrl + "editor/SummerNote/boardDetail.html");

        		this.setTimer(1,100);
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
        	var objDivSearch = this.divSearch.form;
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "PROJECT_CD", this.fv_sProjectCd);
        	this.dsSearch.setColumn(nRow, "MENU_CD", this.fv_sMenuCd);
        	this.dsSearch.setColumn(nRow, "POPUP_YN", "Y");

            take.tranSelect(this,sTranId,"BoardManagement.boardInfoDetail","dsSearch", "dsNotice", "", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save transation id";
            take.tranSave(this, sTranId, "NAMESPACE", "sInDs", "sOutDs", "sParam", "fnCallback");
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
                case "Search" :  //조회 콜백
                    //Script

                    break;
        		case "SearchFile" : //파일조회 콜백
        			this.fnSetFileList();

        			break;
                default :
                    break;
            }
        }

        this.CM040P01_onstepchanged = function(obj,e)
        {
        	var nStepIdx = this.getStepIndex();

        	this.fnSetBoardData(nStepIdx);

        	this.fv_sBoardSeq = this.fv_objDsNotice.getColumn(nStepIdx, "BOARD_SEQ");
        	var sAttachCd = this.fv_objDsNotice.getColumn(nStepIdx, "BOARD_ATTACH");

        	if( nStepIdx < 10 )
        	{
        		nStepIdx = "0"+ nStepIdx.toString();
        	}

        	var objDivMain = this.components["divMain"+nStepIdx];
        	var nCompLength = objDivMain.form.divFile.form.components.length - 1;

        	if( nCompLength <= 0 )
        	{
        		this.dsSearch.clearData();
        		var nRow = this.dsSearch.addRow();
        		this.dsSearch.setColumn(nRow, "ATTACH_CD", sAttachCd);
        		this.dsFile.clearData();
        		take.tranSelect(this,"SearchFile","SystemCommon.fileInfoList","dsSearch", "dsFile", "", "fnCallback");
        	}
        };

        this.fnSetBoardData = function( nIdx )
        {
        	if( nIdx < 10 )
        	{
        		nIdx = "0"+nIdx.toString();
        	}

        	var objDiv = this.components["divMain"+nIdx];
        	objDiv.form.edtTitle.set_value(this.fv_objDsNotice.getColumn(nIdx, "BOARD_TITLE"));

        	var sContents = this.fv_objDsNotice.getColumn(nIdx, "BOARD_TXT");
        	//20210118 정해원 게시판 내용 조회 불가
        	//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        	//objDiv.form.wbWebEditor.getProperty("window").callMethod("fn_setHtml", sContents);
        	var docWeb = objDiv.form.wbWebEditor.getProperty("document").getProperty("all");
        		docWeb.getProperty("inputData").setProperty("value", take.nvl(sContents, ""));

        	objDiv.form.wbWebEditor.getProperty("window").callMethod("fn_setHtml");
        }

        this.fnSetFileList = function()
        {
        	var nStepIdx = this.getStepIndex();
        	if( nStepIdx < 10 )
        	{
        		nStepIdx = "0"+nStepIdx.toString();
        	}

        	var objDivMain = this.components["divMain"+nStepIdx];
        	var nLeft = 10, nTop = 10, nWidth = 155, nHeight = 25, nInterval = 10;
        	for( var i=0; i<this.dsFile.rowcount; i++ )
        	{
        		var sFileNm = this.dsFile.getColumn(i, "FILE_NM");
        		var sAttachCd = this.dsFile.getColumn(i, "ATTACH_CD");
        		var sFileSeq = this.dsFile.getColumn(i, "FILE_SEQ");

        		var objStatic = new Static();
        		var sId = "sta" + sAttachCd + "_" + sFileSeq;
        		objStatic.init(sId, nLeft, nTop, nWidth, nHeight, null, null);
        		nLeft = nLeft + nWidth + nInterval;
        		objStatic.set_cssclass("sta_WF_fileData01");
        		objStatic.set_text( take.textLengthOverCut(sFileNm, 20, "...") );
        		objStatic.set_tooltiptext(sFileNm);

        		objDivMain.form.divFile.removeChild(sId);
        		objDivMain.form.divFile.addChild(sId, objStatic);

        		objStatic.addEventHandler( "onclick", this.staFile_onclick, this);
        		objStatic.show();
        	}

        	// 마지막에 padding효과를 위해 공백 static추가
        	var objStatic = new Static();
        	var sId = "staBlank";
        	objStatic.init(sId, nLeft, nTop, 95, nHeight, null, null);
        	objStatic.set_text("");
        	objDivMain.form.divFile.addChild(sId, objStatic);
        	objStatic.show();

        	objDivMain.form.divFile.form.resetScroll();
        }

        // 파일 개별 다운
        this.staFile_onclick = function(obj,e)
        {
        	var sId = obj.id.substring(3);
        	var arrId = sId.split("_");

        	var sAttachCd = arrId[0];
        	var sFileSeq = arrId[1];
        	var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl;
        	downloadUrl += "?sAttachCd="+sAttachCd + "&sFileSeq="+sFileSeq;

        	this.FileDownTransfer00.set_url(downloadUrl);
        	this.FileDownTransfer00.download();
        }

        this.CM040P01_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
        		if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);

        			var nDsCnt = this.fv_objDsNotice.rowcount;
        			var sBaseUrl = take.getSvcUrl();

        			this.fv_sBoardSeq = take.nvl(this.fv_objDsNotice.getColumn(0, "BOARD_SEQ"), "");

        			for( var i=0; i<nDsCnt; i++ )
        			{
        				if( i > 0 )
        				{
        					var nIdx = i;
        					nIdx = ( nIdx < 10 ) ? "0" + nIdx.toString() : nIdx;

        					var objDivMain = this.components["divMain"+nIdx];
        					objDivMain.form.wbWebEditor.set_url(sBaseUrl + "editor/SummerNote/boardDetail.html");
        				}
        			}
        			this.fnSetBoardData(0);

        			this.dsSearch.clearData();
        			var nRow = this.dsSearch.addRow();
        			var sAttachCd = this.fv_objDsNotice.getColumn(0, "BOARD_ATTACH");
        			this.dsSearch.setColumn(nRow, "ATTACH_CD", sAttachCd);
        			take.tranSelect(this,"SearchFile","SystemCommon.fileInfoList","dsSearch", "dsFile", "", "fnCallback");
        		}
        	}
        };

        this.wbWebEditor_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("boardDetail.html") != -1)
        	{
        		this.fv_bWebOnload = true;
        	}
        };

        this.divFile_btnAllDown_onclick = function(obj,e)
        {
        	var sAttachCd = this.fv_objDsNotice.getColumn(this.getStepIndex(), "BOARD_ATTACH");
        	var downloadUrl = this.fileConfig.host + this.fileConfig.zipDownloadUrl;
        	downloadUrl += "?sAttachCd="+sAttachCd;

        	this.FileDownTransfer00.set_url(downloadUrl);
        	this.FileDownTransfer00.download();
        };

        this.chkClose_onclick = function(obj,e)
        {
        	var sUserId = this.fv_objDsUserInfo.getColumn(0, "USER_ID");
        	var sKey = sUserId + "_" + this.fv_sBoardSeq;

        	//20210107 정해원 cookie 정책에 따른 수정
        	//take.setCookie('notiPop'+sKey, 'Y' , 1 );
        	take.setCookie('notiPop'+sKey, take.toDateString(new Date(), "yyyyMMdd"));
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("onstepchanged",this.CM040P01_onstepchanged,this);
            this.addEventHandler("ontimer",this.CM040P01_ontimer,this);
            this.divMain00.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.divMain00.form.chkClose.addEventHandler("onclick",this.chkClose_onclick,this);
            this.divMain00.form.wbWebEditor.addEventHandler("onloadcompleted",this.wbWebEditor_onloadcompleted,this);
            this.divMain01.form.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
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
        this.loadIncludeScript("CM040P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
