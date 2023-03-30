(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM040");
            this.set_titletext("화면설계서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_PREFIX_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCapture", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE_URI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBind", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMP\" type=\"STRING\" size=\"256\"/><Column id=\"DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"COL\" type=\"STRING\" size=\"256\"/><Column id=\"DISC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COLSIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComp", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvent", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVENT\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVar", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtDoc", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPrefixT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("Prefix");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRoleT","354","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("Prefix명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRole","438","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","688","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","772","10","227","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPrefix","104","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboPrefix");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.63%","42","70","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","52",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","62",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdForm","0","30","450",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFormList");
            obj.set_cellclickbound("cell");
            obj.getSetter("takegrid").set("no,checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"230\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"프로그램ID\"/><Cell col=\"1\" text=\"프로그램명\"/></Band><Band id=\"body\"><Cell text=\"bind:PROGRAM_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PROGRAM_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staListT","10","0","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("화면목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRoleMapT","460","0",null,"30","100",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("화면 Viewer");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnFormDesign",null,"3","130","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("화면설계서 다운로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static45","450","30","10","200",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divForm","460","30",null,"1","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divForm","0","0",null,"800","0",null,null,null,null,null,this.divDetail.form.divForm.form);
            obj.set_taborder("0");
            obj.set_border("3px solid");
            this.divDetail.form.divForm.addChild(obj.name, obj);

            obj = new Button("btnData",null,"3","120","23","135",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("설계 정보 취합");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtInfo","460","31",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_font("bold 18px/normal \"Arial\",\"Noto Sans CJK KR\",\"Malgun Gothic\"");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staPrefixT.set_taborder("3");
                p.staPrefixT.set_text("Prefix");
                p.staPrefixT.set_cssclass("sta_WF_textRImport");
                p.staPrefixT.move("20","10","80","21",null,null);

                p.staRoleT.set_taborder("4");
                p.staRoleT.set_text("Prefix명");
                p.staRoleT.set_cssclass("sta_WF_textR");
                p.staRoleT.move("354","10","80","21",null,null);

                p.edtRole.set_taborder("1");
                p.edtRole.move("438","10","231","21",null,null);

                p.staUseYnT.set_taborder("5");
                p.staUseYnT.set_text("사용여부");
                p.staUseYnT.set_cssclass("sta_WF_textR");
                p.staUseYnT.move("688","10","80","21",null,null);

                p.cboUseYn.set_taborder("2");
                p.cboUseYn.set_innerdataset("dsCboUseYn");
                p.cboUseYn.set_codecolumn("CODE");
                p.cboUseYn.set_datacolumn("NAME");
                p.cboUseYn.set_text("Combo00");
                p.cboUseYn.move("772","10","227","21",null,null);

                p.cboPrefix.set_taborder("0");
                p.cboPrefix.set_innerdataset("dsCboPrefix");
                p.cboPrefix.set_codecolumn("CODE");
                p.cboPrefix.set_datacolumn("NAME");
                p.cboPrefix.set_text("Combo00");
                p.cboPrefix.move("104","10","231","21",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("default0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staPrefixT.set_taborder("2");
                p.staPrefixT.set_text("프로젝트");
                p.staPrefixT.set_cssclass("sta_WF_textRImport");
                p.staPrefixT.move("20","10","80","21",null,null);

                p.staRoleT.set_taborder("3");
                p.staRoleT.set_text("권한");
                p.staRoleT.set_cssclass("sta_WF_textR");
                p.staRoleT.move("354","10","80","21",null,null);

                p.edtRole.set_taborder("0");
                p.edtRole.move("438","10","231","21",null,null);

                p.staUseYnT.set_taborder("4");
                p.staUseYnT.set_text("사용여부");
                p.staUseYnT.set_cssclass("sta_WF_textR");
                p.staUseYnT.move("688","10","80","21",null,null);

                p.cboUseYn.set_taborder("1");
                p.cboUseYn.set_innerdataset("dsCboUseYn");
                p.cboUseYn.set_codecolumn("CODE");
                p.cboUseYn.set_datacolumn("NAME");
                p.cboUseYn.set_text("Combo00");
                p.cboUseYn.move("772","10","227","21",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form.divForm.form.divForm.form
            obj = new Layout("default","",0,0,this.divDetail.form.divForm.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divDetail.form.divForm.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form.divForm.form.divForm.form
            obj = new Layout("default0","",0,0,this.divDetail.form.divForm.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divDetail.form.divForm.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form.divForm.form
            obj = new Layout("default","",0,0,this.divDetail.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.set_taborder("0");
                p.divForm.set_border("3px solid");
                p.divForm.move("0","0",null,"800","0",null);
            	}
            );
            this.divDetail.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form.divForm.form
            obj = new Layout("default0","",0,0,this.divDetail.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divDetail.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdForm.set_taborder("0");
                p.grdForm.set_binddataset("dsFormList");
                p.grdForm.set_cellclickbound("cell");
                p.grdForm.getSetter("takegrid").set("no,checkbox");
                p.grdForm.move("0","30","450",null,null,"0");

                p.staListT.set_taborder("1");
                p.staListT.set_text("화면목록");
                p.staListT.set_cssclass("sta_WF_title02");
                p.staListT.move("10","0","450","30",null,null);

                p.staRoleMapT.set_taborder("2");
                p.staRoleMapT.set_text("화면 Viewer");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move("460","0",null,"30","100",null);

                p.btnFormDesign.set_taborder("3");
                p.btnFormDesign.set_text("화면설계서 다운로드");
                p.btnFormDesign.set_cssclass("btn_WF_basic01");
                p.btnFormDesign.move(null,"3","130","23","0",null);

                p.Static45.set_taborder("4");
                p.Static45.set_text("Static00");
                p.Static45.set_background("red");
                p.Static45.set_visible("false");
                p.Static45.move("450","30","10","200",null,null);

                p.divForm.set_taborder("5");
                p.divForm.move("460","30",null,"1","0",null);

                p.btnData.set_taborder("6");
                p.btnData.set_text("설계 정보 취합");
                p.btnData.set_cssclass("btn_WF_basic01");
                p.btnData.move(null,"3","120","23","135",null);

                p.txtInfo.set_taborder("7");
                p.txtInfo.set_readonly("true");
                p.txtInfo.set_wordWrap("char");
                p.txtInfo.set_textAlign("left");
                p.txtInfo.set_font("bold 18px/normal \"Arial\",\"Noto Sans CJK KR\",\"Malgun Gothic\"");
                p.txtInfo.move("460","31",null,null,"0","0");
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdForm.set_taborder("0");
                p.grdForm.set_binddataset("dsProjectRoleMenuList");
                p.grdForm.set_autofittype("col");
                p.grdForm.set_treeusecheckbox("false");
                p.grdForm.set_autosizingtype("col");
                p.grdForm.set_oncellclick("grdRoleMenu_oncellclick");
                p.grdForm.move("320","30",null,null,"8","10");

                p.staListT.set_taborder("1");
                p.staListT.set_text("권한 목록");
                p.staListT.set_cssclass("sta_WF_title02");
                p.staListT.move("0","0","450","30",null,null);

                p.staRoleMapT.set_taborder("2");
                p.staRoleMapT.set_text("권한 매핑");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move("318","0",null,"30","162",null);

                p.btnFormDesign.set_taborder("3");
                p.btnFormDesign.set_text("저장");
                p.btnFormDesign.set_cssclass("btn_WF_basic01");
                p.btnFormDesign.set_onclick("btnRoleSave_onclick");
                p.btnFormDesign.move(null,"3","46","23","8",null);

                p.Static45.set_taborder("4");
                p.Static45.set_text("Static00");
                p.Static45.set_background("red");
                p.Static45.set_visible("false");
                p.Static45.move("310","30","10","200",null,null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("화면설계서");

                p.divSearch.set_taborder("0");
                p.divSearch.set_cssclass("div_WF_searchBox01");
                p.divSearch.set_text("");
                p.divSearch.set_minwidth("1020");
                p.divSearch.set_maxwidth("");
                p.divSearch.move("10","0",null,"43","10",null);

                p.btnShowHide.set_taborder("2");
                p.btnShowHide.set_cssclass("btn_WF_fold01");
                p.btnShowHide.move("46.63%","42","70","10",null,null);

                p.Static09.set_taborder("3");
                p.Static09.set_text("Static03");
                p.Static09.set_background("red");
                p.Static09.set_visible("false");
                p.Static09.move("0","52",null,"10","0",null);

                p.Static23.set_taborder("4");
                p.Static23.set_text("Static23");
                p.Static23.set_background("blue");
                p.Static23.set_visible("false");
                p.Static23.move("1","-14","10","106",null,null);

                p.Static24.set_taborder("5");
                p.Static24.set_text("Static23");
                p.Static24.set_background("blue");
                p.Static24.set_visible("false");
                p.Static24.move("340","-14","10","106",null,null);

                p.Static25.set_taborder("6");
                p.Static25.set_text("Static23");
                p.Static25.set_background("blue");
                p.Static25.set_visible("false");
                p.Static25.move("679","-14","10","106",null,null);

                p.Static26.set_taborder("7");
                p.Static26.set_text("Static23");
                p.Static26.set_background("blue");
                p.Static26.set_visible("false");
                p.Static26.move("1018","-14","10","106",null,null);

                p.divDetail.set_taborder("1");
                p.divDetail.set_text("");
                p.divDetail.set_minwidth("1020");
                p.divDetail.set_maxwidth("");
                p.divDetail.move("10","62",null,null,"10","10");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",1040,659,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.set_taborder("0");
                p.divSearch.set_cssclass("div_WF_searchBox01");
                p.divSearch.set_text("");
                p.divSearch.move("10","0",null,"43","10",null);

                p.btnShowHide.set_taborder("1");
                p.btnShowHide.set_cssclass("btn_WF_fold01");
                p.btnShowHide.move("485","42","70","10",null,null);

                p.Static09.set_taborder("2");
                p.Static09.set_text("Static03");
                p.Static09.set_background("red");
                p.Static09.set_visible("false");
                p.Static09.move("0","52",null,"10","0",null);

                p.Static23.set_taborder("3");
                p.Static23.set_text("Static23");
                p.Static23.set_background("blue");
                p.Static23.set_visible("false");
                p.Static23.move("1","-14","10","106",null,null);

                p.Static24.set_taborder("4");
                p.Static24.set_text("Static23");
                p.Static24.set_background("blue");
                p.Static24.set_visible("false");
                p.Static24.move("340","-14","10","106",null,null);

                p.Static25.set_taborder("5");
                p.Static25.set_text("Static23");
                p.Static25.set_background("blue");
                p.Static25.set_visible("false");
                p.Static25.move("679","-14","10","106",null,null);

                p.Static26.set_taborder("6");
                p.Static26.set_text("Static23");
                p.Static26.set_background("blue");
                p.Static26.set_visible("false");
                p.Static26.move("1018","-14","10","106",null,null);

                p.divDetail.set_taborder("7");
                p.divDetail.set_text("");
                p.divDetail.move("0","62",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("modFormDesign.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    PM > PM040
        *  @FileNAME    PM040.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.08.16
        *  @Version     1.0
        *  @Desction    프로젝트 권한관리
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.16      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objForm = null;
        this.fv_arrChk = null;
        this.fv_nCurChk = null;
        this.fv_bStart = false;
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM040_onload = function(obj, e)
        {
            take.loadJs("script01",  "./_extlib_/Extend/html2canvas.min.js");
            take.loadJs("takeEcma6", "./_extlib_/Take/takeEcma6.js");

            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
                this.fv_objForm = this.divDetail.form.divForm.form.divForm.form;

        		// 초기화
                this.fnInit();
            }
        }

        //폼 타이머 이벤트
        this.PM040_ontimer = function(obj,e)
        {
        	if (e.timerid==1111)
            {
                var objDs, objTxt;
                var nRow;

                objDs = this.dsFormList;
                objTxt = this.divDetail.form.txtInfo;

                nRow = objDs.rowposition;

                sTxt = objTxt.value + "\n######" + objDs.getColumn(nRow ,"PROGRAM_NM") + "(" + objDs.getColumn(nRow,"PROGRAM_ID") + ") 화면 캡쳐 시작.";
                objTxt.set_value(sTxt);

                this.fnCaptueForm();
                //this.fnBindInfo();
                ////this.fnDatasetInfo();
                //this.fnTranInfo();
                //this.fnVarInfo();
                ////this.fnCompInfo();

                console.dir(this.dsCapture);
                //console.dir(this.dsBind);
                ////console.dir(this.dsColInfo);
                //console.dir(this.dsTranInfo);
                //console.dir(this.dsVar);
                ////console.dir(this.dsComp);
                ////console.dir(this.dsEvent);

                this.killTimer(1111);

                //trace("this.fv_nCurChk --> " + this.fv_nCurChk);


                if ((this.fv_nCurChk+1)==this.fv_arrChk.length)
                {
                    this.fv_bStart = false;
                    sTxt = objTxt.value + "\n\n######" + this.fv_arrChk.length + "개 화면의 설계 정보가 취합 되었습니다.";
                    objTxt.set_value(sTxt);

                    alert("설계 정보 취합이 완료되었습니다.");
                } else {

                    this.fv_nCurChk++;

                    objDs.set_rowposition(this.fv_arrChk[this.fv_nCurChk]);
                }
            }

        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @param  {N/A}    N/A
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	// 공통 코드조회 함수 호출
            this.fnCommonCode()
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
            if (take.nvl(sTranId, "")=="") sTranId = "formList";

            this.dsFormList.clearData();

            var sPrefix = this.divSearch.form.cboPrefix.value;

            take.tranSelect
            (
                this,
                "formList",
                "Main.prefixFormList",
                "",
                "dsFormList",
                "PREFIX='" + sPrefix + "'",
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

        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {

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

        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //리스트 셀 클릭 이벤트
        this.divDetail_grdForm_oncellclick = function(obj,e)
        {
        //     if (e.cell>0)
        //     {
        //         this.fnFormViewer(obj.getBindDataset(), e.row);
        //     }
        };

        //화면설계서 다운로드 버튼 클릭 이벤트
        this.divDetail_btnFormDesign_onclick = function(obj,e)
        {
            var objTxt = this.divDetail.form.txtInfo;
            var sTxt;

            if (this.dsCapture.rowcount>0)
            {
                sTxt = objTxt.value + "\n\n###### 설계서 다운로드 시작";
                objTxt.set_value(sTxt);

                this.fnFileDown();
            } else {
                alert("취합된 설계 정보가 없습니다. 설계 정보 취합 버튼을 클릭하여 설계 정보를 취합해 주세요.");
            }
        };

        //검색조건 프리픽스콤보 선택 변경 이베트
        this.divSearch_cboPrefix_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };


        //화면 리스트 행 변경 이벤트
        this.dsFormList_onrowposchanged = function(obj,e)
        {
            if (this.fv_bStart)
            {
                //trace("rowposchanged e.row --> " + e.newrow);
                var objDs, objTxt;
                var sChk, sTxt;

                objDs = this.dsFormList;
                objTxt = this.divDetail.form.txtInfo;

                sChk = objDs.getColumn(e.newrow ,"CHK");

                if (sChk=="1")
                {
                    sTxt = objTxt.value + "\n\n######" + objDs.getColumn(e.newrow ,"PROGRAM_NM") + "(" + objDs.getColumn(e.newrow ,"PROGRAM_ID") + ") 정보 가져오기";
                    objTxt.set_value(sTxt);

                    this.fnFormViewer(obj, e.newrow);
                }

                this.setTimer(1111,3000);
            }
        };

        //설계 정보 취합 버튼 클릭 이벤트
        this.divDetail_btnData_onclick = function(obj,e)
        {
        	var nRow;
            var objDs, objTxt;

            objDs = this.dsFormList;

            this.fv_arrChk = take.getChkRow(objDs, "CHK");
            this.fv_nCurChk = 0;

            if (this.fv_arrChk==null)
            {
                alert("선택된 행이 없습니다.");
                return
            }

            if (this.fv_arrChk.length<=0)
            {
                alert("선택된 행이 없습니다.");
                return
            }

            this.fv_arrChk.sort();

            nRow = this.fv_arrChk[this.fv_nCurChk];

            //trace("this.fv_arrChk --> " + this.fv_arrChk);
            objTxt = this.divDetail.form.txtInfo;

            objTxt.set_value("");

            objTxt.set_value("설계 정보 취합을 시작합니다.");

        	this.dsCapture.clearData();
            //this.dsBind.clearData();
            //this.dsColInfo.clearData();
            //this.dsTranInfo.clearData();
            //this.dsVar.clearData();
            //this.dsComp.clearData();
            //this.dsEvent.clearData();

            objDs.set_rowposition(-1);
            this.fv_bStart = true;
            objDs.set_rowposition(nRow);
        };

        //캡쳐 데이터셋 데이터 변경 이벤트
        this.dsCapture_onvaluechanged = function(obj,e)
        {
            if (obj.rowcount<=0) return;

        	if (e.columnid=="IMAGE_URI")
            {
                var objTxt = this.divDetail.form.txtInfo;
                var objDs = this.dsFormList;
                var nRow = objDs.rowposition;

                sTxt = objTxt.value + "\n######" + objDs.getColumn(nRow ,"PROGRAM_NM") + "(" + objDs.getColumn(nRow ,"PROGRAM_ID") + ") 화면 캡쳐 완료.";
                objTxt.set_value(sTxt);
            }
        };

        //파일다운로드트랜스퍼 다운로드 성공 이벤트
        this.fdtDoc_onsuccess = function(obj,e)
        {
        	var objTxt = this.divDetail.form.txtInfo;
            var sTxt;

            sTxt = objTxt.value + "\n###### 설계서 다운로드 완료";
            objTxt.set_value(sTxt);
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
        	take.tranCode(
                this,
                ["00009","00006"],
                ["dsCboUseYn","dsCboPrefix"],
                ["ALL","SEL"],
                function(sId, nErrCd, sErrMsg)
                {
                    if (this.dsCboUseYn.rowcount > 0){
                        this.divSearch.form.cboUseYn.set_index(0);
                    }

                    if (this.dsCboUseYn.rowcount > 0){
                        this.divSearch.form.cboPrefix.set_index(0);
                    }
                },
                false);

            return true
        };

        //파일 다운로드
        this.fnFileDown = function()
        {
            var sPrefix, sDownloadUrl;
        	var objFileDown, objCapDs;
            var nCnt;

            objDs = this.dsPrefixList;
            objFileDown = this.fdtDoc;
            objCapDs = this.dsCapture;

            sPrefix = this.divSearch.form.cboPrefix.text;

            sDownloadUrl = take.getSvcUrl() + "formDesignDownload.do";
        	sDownloadUrl += "?sPrefix="+sPrefix;

            objFileDown.set_url(sDownloadUrl);

            nCnt = objCapDs.rowcount;

            if (nCnt<=0) return

            //objFileDown.clearPostDataList();

            //for (var i=0; i<nCnt; i++)
            //{
            //    sProgId = objCapDs.getColumn(i, "PROGRAM_ID");
            //    objImg = objCapDs.getColumn(i, "IMAGE_URI");
            //
            //    objFileDown.setPostData( sProgId, objImg );
            //}

            //console.dir(objFileDown);

            take.transaction(
                this,
                "uploaddata",
                "SVC::formCapture.do",
                "dsCapture=dsCapture",
                "",
                "",
                function (sId, sErrCd, sMsg)
                {
                	objFileDown.download();
                },
                false);
        }

        //화면 불러오기
        this.fnFormViewer = function(objDs, nRow)
        {
            var objDiv, objCaptureDs, objTxt;
            var sUrl, sProgId, sProgNm;
            var nNRow, sTxt;

            objDiv = this.divDetail.form.divForm.form.divForm;
            sProgId = objDs.getColumn(nRow, "PROGRAM_ID");
            sProgNm = objDs.getColumn(nRow ,"PROGRAM_NM");
            sUrl = objDs.getColumn(nRow, "PROGRAM_PREFIX") + "::" + sProgId + ".xfdl";

            objCaptureDs = this.dsCapture;
            nNRow = objCaptureDs.addRow();
            objCaptureDs.setColumn(nNRow, "PROGRAM_ID", sProgId)

            objTxt = this.divDetail.form.txtInfo;
            sTxt = objTxt.value + "\n######" + sProgNm + "(" + sProgId + ") 화면을 로드합니다.";
            objTxt.set_value(sTxt);

            objDiv.set_url("");
            objDiv.set_url(sUrl);

            this.fv_objForm = this.divDetail.form.divForm.form.divForm.form;

            sTxt = objTxt.value + "\n######" + sProgNm + "(" + sProgId + ") 화면이 로드 되었습니다.";
            objTxt.set_value(sTxt);
        }

        //바인드 정보 가져오기
        this.fnBindInfo = function(sParent, objForm)
        {
            var arrBind, objBind, objItem, objBindDs;
            var sText = "", sProgId;
            var nCnt, nRow;

            objBindDs = this.dsBind;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm ;
            }
            objBind = objForm.binds;

            if (objBind==null) return;

            arrBind = objBind._idArray ;

            sProgId = this.dsFormList.getColumn(this.dsFormList.rowposition,"PROGRAM_ID");

            nCnt = arrBind.length;

            if (nCnt<=0) return;

            objBindDs.set_enableevent(false);

            for (var i=0; i<nCnt; i++)
            {
                objItem = objBind[arrBind[i]];

                nRow = objBindDs.addRow();

                objBindDs.setColumn(nRow, "PROGRAM_ID", sProgId);
                objBindDs.setColumn(nRow, "COMP"      , sParent + "." + objItem.compid + "." + objItem.propid);
                objBindDs.setColumn(nRow, "DATASET"   , objItem.datasetid);
                objBindDs.setColumn(nRow, "COL"       , objItem.columnid);
                //objBindDs.setColumn(nRow, "DISC"      , "");

                //sText += "this." + objItem.compid + "." + objItem.propid + "\t"
                //      +  objItem.datasetid + "." + objItem.columnid + "\t\n";
            }
            this.dsBind.getColumnInfo()
            //objBindDs.set_rowposition(0);

            //trace("바인드 정보 \n" + sText);
            objBindDs.set_enableevent(true);
        }

        //데이터셋 정보
        this.fnDatasetInfo = function(sParent, objForm)
        {
            var objInfo, objDataset, objDs, objColInfo, objApp, objAppDs, objDsColInfo;
            var arrInfo;
            var nCnt, nRow, nColCnt;
            var sProgId;

            objDs = this.dsColInfo;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm ;
            }

            objInfo = objForm.objects;

            if (objInfo==null) return ;

            arrInfo = objInfo._idArray;

            sProgId = this.dsFormList.getColumn(this.dsFormList.rowposition,"PROGRAM_ID");

            nCnt = arrInfo.length;

            if (nCnt<=0)
            {
                return;
            }

            objDs.set_enableevent(false);

            for (var i=0; i<nCnt; i++)
            {
                objDataset = objInfo[arrInfo[i]];

                if (objDataset._type_name=="Dataset")
                {
                    sDsName = sParent + "." + objDataset.name;

                    objColInfo = objDataset.colinfos;
                    arrColInfo = objColInfo._idArray;

                    nColCnt = arrColInfo.length;

                    if (nColCnt>0)
                    {
                        for ( var j=0; j<nColCnt; j++)
                        {
                            objDsColInfo = objColInfo[arrColInfo[j]]

                            nRow = objDs.addRow();
                            objDs.setColumn(nRow, "PROGRAM_ID", sProgId);
                            objDs.setColumn(nRow, "DSNAME"    , sDsName);
                            objDs.setColumn(nRow, "COLNAME"   , objDsColInfo.name);
                            objDs.setColumn(nRow, "COLTYPE"   , objDsColInfo.type);
                            objDs.setColumn(nRow, "COLSIZE"   , objDsColInfo.size);
                        }
                    }
                }
            }

            objDs.set_enableevent(true);
        }

        //폼 캡쳐
        this.fnCaptueForm = function()
        {
            var objDs;

            objDs = this.dsCapture;

            takeEcma6.formCapture(this.divDetail.form.divForm.form.divForm, objDs, "IMAGE_URI", objDs.rowposition);
        }

        //트랜젝션 정보
        this.fnTranInfo = function(sParent, objForm)
        {
            var objInfo, objTranDs, objTranInfo, objTranInfoId;
            var nRow;
            var sId, sProgId;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm ;
            }

            objTranDs = this.dsTranInfo;

            objTranInfo = objForm._objTranInfo;

            sProgId = this.dsFormList.getColumn(this.dsFormList.rowposition,"PROGRAM_ID");

            objTranDs.set_enableevent(false);

            for (var x in objTranInfo)
            {
                sId = sParent + "." + x;
                sId = sId.substr(sId.lastIndexOf(".")+1);

                objTranInfoId = objTranInfo[sId];

                for (var z in objTranInfoId)
                {
                    nRow = objTranDs.addRow()

                    objTranDs.setColumn(nRow, "PROGRAM_ID", sProgId);
                    objTranDs.setColumn(nRow, "TRAN_ID"   , sId);
                    objTranDs.setColumn(nRow, "TRAN_PARAM", z);
                    objTranDs.setColumn(nRow, "TRAN_VALUE", objTranInfoId[z]);
                }
            }

            objTranDs.set_enableevent(true);
        }

        //폼 변수 정보
        this.fnVarInfo = function(sParent, objForm)
        {
            var objDs, objProto, objApp, objAppVar;
            var sText = "", sKey, sProgId;
            var nRow;

            objDs = this.dsVar;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm ;
            }

            objProto = new nexacro.Form;

            sProgId = this.dsFormList.getColumn(this.dsFormList.rowposition,"PROGRAM_ID");

            objDs.set_enableevent(false);

            for (var x in objForm)
            {
                sKey = x.toString();
                if (!nexacro._isFunction(objForm[sKey]) && sKey.substr(0,1)!="_" && !(typeof(objForm[sKey]) === "object"))
                {
                    if (!("set_"+sKey in objProto)) //if (!(objProto.hasOwnProperty("set_"+sKey)))
                    {
                        if (sKey!="scrollbars")
                        {
                            nRow = objDs.addRow();

                            objDs.setColumn(nRow, "PROGRAM_ID", sProgId);
                            objDs.setColumn(nRow, "VAR"       , sParent + "." + sKey);
                        }
                    }
                }
            }

            //trace("바인드 정보 \n" + sText);
            objDs.set_enableevent(true);
        }

        //컴포넌트 정보
        this.fnCompInfo = function(sParent, objForm)
        {
            var arrComp = new Array();
            var objComp, objDs, objEventDs, objEventList, objEvent, objHandle;
            var nCnt, nRow, nNRow;
            var sType, sScope, sProgId;

            objDs = this.dsComp;
            objEventDs = this.dsEvent;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm;
            }

            sProgId = this.dsFormList.getColumn(this.dsFormList.rowposition,"PROGRAM_ID");

            if (objForm._type_name=="Tab")
            {
                arrComp = arrComp.concat(objForm.tabpages._idArray);
            } else {
                arrComp = arrComp.concat(objForm.components._idArray);
                arrComp = arrComp.concat(objForm.objects._idArray);
            }

            nCnt = arrComp.length;

            if (nCnt<=0) return;

            objDs.set_enableevent(false);
            objEventDs.set_enableevent(false);

            //Div에 연결된 폼일경우만 폼 객체의 정보를 삽입
            if (take.nvl(objForm.parent.url,"")!="")
            {
                //폼 객체
                nRow = objDs.addRow();

                objDs.setColumn(nRow, "PROGRAM_ID", sProgId);
                objDs.setColumn(nRow, "COMP_NM", sParent + (sParent=="this"?"":".form"));
                objDs.setColumn(nRow, "COMP_TYPE", "Form");
            }

            for (var i=0; i<nCnt; i++)
            {
                objComp = objForm[arrComp[i]];
                //trace(objForm.name + "(" + i +  ") --> " + objComp.name);
                nRow = objDs.addRow();

                sScope = sParent + "." + objComp.name;
                sType =  objComp._type_name;

                objDs.setColumn(nRow, "PROGRAM_ID", sProgId);
                objDs.setColumn(nRow, "COMP_NM", sScope);
                objDs.setColumn(nRow, "COMP_TYPE", sType);

                //objDs._objComp[nRow] = objComp;

                if (sType!="Grid.Cell")
                {
                    objEventList = objComp._event_list;

                    for (var x in objEventList)
                    {
                        objEvent = objComp[x];

                        if (typeof(objEvent) === "object")
                        {
                            objHandle = objEvent._user_handlers;

                            for (var z in objHandle)
                            {
                                nNRow = objEventDs.addRow();

                                objEventDs.setColumn(nNRow, "PROGRAM_ID", sProgId);
                                objEventDs.setColumn(nNRow, "COMP_NM", sScope);
                                objEventDs.setColumn(nNRow, "EVENT", x + "[" + z + "]");
                                objEventDs.setColumn(nNRow, "FUNC", objHandle[z].handler);
                            }
                        }
                    }
                }

                switch(sType)
                {
                    case "Tab":
                        this.fnCompInfo(sScope, objComp);
                        break;
                    case "Div":
                    case "TabpageControl":
                    case "PopupDiv":

                        this.fnCompInfo(sScope, objComp.form);

                        if (take.nvl(objComp.url,"")!="")
                        {
                            this.fnBindInfo(sScope, objComp.form);
                            this.fnTranInfo(sScope, objComp.form);
                            this.fnDatasetInfo(sScope, objComp.form);
                            this.fnVarInfo(sScope, objComp.form);
                        }
                        break;
                    case "Grid":
                        this.fnGridInfo(sScope, objComp, objDs, sProgId, "head");
                        this.fnGridInfo(sScope, objComp, objDs, sProgId, "body");
                        this.fnGridInfo(sScope, objComp, objDs, sProgId, "summary");
                        break;

                    default:
                }
            }

            objEventDs.set_enableevent(true);
            objDs.set_enableevent(true);
        }

        //그리드 정보
        this.fnGridInfo = function(sPScope, objComp, objDs, sProgId, sGbn)
        {
            var nCnt, nRow;

            nCnt = objComp.getCellCount(sGbn);

            for (var k=0;k<nCnt;k++)
            {
                nRow = objDs.addRow();

                sScope = sPScope + "." + sGbn + ".";
                sScope += k + "(";

                if (sGbn=="body") {
                    sScope += take.nvl(this.getBindColName(objComp, k),k) + " : ";
                    //body일때 텍스트는 head를 가져온다
                    sScope += objComp.getCellProperty("head", k, "text") + ")";
                } else {
                    sScope += objComp.getCellProperty(sGbn, k, "text") + ")";
                }

                objDs.setColumn(nRow, "PROGRAM_ID", sProgId);
                objDs.setColumn(nRow, "COMP_NM"   , sScope);
                objDs.setColumn(nRow, "COMP_TYPE" , "Grid.Cell");
                objDs.setColumn(nRow, "ETC"       , sGbn + "." + k);
            }
        }

        //바인드 된 컬럼 정보
        this.getBindColName = function(objGrid, nIdx)
        {
        	if (take.nvl(objGrid,"")=="" || take.nvl(nIdx,-1)<0) return "";

        	var sText, sColId;
        	var nSubCell;

        	sText  = "";
        	sColId = "";
        	nSubCell = objGrid.getCellProperty("body", nIdx, "subcell");

        	if ( nSubCell > 0 )
        	{
        		sText = objGrid.getSubCellProperty("body", nIdx, 0, "text");
        	} else {
        		sText = objGrid.getCellProperty("body", nIdx, "text");
        	}

        	if ( take.nvl(sText, "") != "")
        	{
        		if ( sText.search(/^BIND\(/) > -1 )
        		{
        			sColId = sText.replace(/^BIND\(/, "");
        			sColId = sColId.substr(0, sColId.length-1);
        		} else if ( sText.search(/^bind:/) > -1 ) {
        			sColId = sText.replace(/^bind:/, "");
        		}
        	}

        	return sColId;
        }
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
                case "formList" :		// 좌측목록 조회 콜백
        			var sText = "화면목록 (전체: " + this.dsFormList.rowcount +"건)";
                    this.divDetail.form.staListT.set_text(sText);
                    //this.fnFormViewer(this.dsFormList , 0);
                    break;

                default :
                    break;
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM040_onload,this);
            this.addEventHandler("ontimer",this.PM040_ontimer,this);
            this.divSearch.form.edtRole.addEventHandler("onkeyup",this.divSearch_edtRole_onkeyup,this);
            this.divSearch.form.cboPrefix.addEventHandler("onitemchanged",this.divSearch_cboPrefix_onitemchanged,this);
            this.divDetail.form.btnFormDesign.addEventHandler("onclick",this.divDetail_btnFormDesign_onclick,this);
            this.divDetail.form.btnData.addEventHandler("onclick",this.divDetail_btnData_onclick,this);
            this.dsFormList.addEventHandler("onrowposchanged",this.dsFormList_onrowposchanged,this);
            this.fdtDoc.addEventHandler("onsuccess",this.fdtDoc_onsuccess,this);
            this.dsCapture.addEventHandler("onvaluechanged",this.dsCapture_onvaluechanged,this);
            this.dsComp.addEventHandler("onrowposchanged",this.dsComp_onrowposchanged,this);
        };
        this.loadIncludeScript("modFormDesign.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
