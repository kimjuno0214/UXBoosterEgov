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
            obj = new Dataset("dsPrefixList", this);
            obj._setContents("<ColumnInfo><Column id=\"PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"PREFIX_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_PREFIX_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Combo("cboProjectNm","104","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
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

            obj = new Div("divDetail","0","62",null,null,"0","0","1020",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPrefixList","10","30","440",null,null,"10",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("dsPrefixList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"293\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"PREFIX\"/><Cell col=\"1\" text=\"PREFIX명\"/></Band><Band id=\"body\"><Cell text=\"bind:PREFIX\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PREFIX_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdForm","460","30",null,null,"10","10",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsFormList");
            obj.set_autofittype("col");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_cellclickbound("cell");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"401\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"프로그램ID\"/><Cell col=\"1\" text=\"프로그램명\"/></Band><Band id=\"body\"><Cell text=\"bind:PROGRAM_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PROGRAM_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRoleListT","10","0","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Prefix");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRoleMapT","460","0",null,"30","100",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("화면목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnFormDesign",null,"3","134","23","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("화면설계서 다운로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static45","450","30","10","200",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staProjectNmT.set_taborder("3");
                p.staProjectNmT.set_text("Prefix");
                p.staProjectNmT.set_cssclass("sta_WF_textRImport");
                p.staProjectNmT.move("20","10","80","21",null,null);

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

                p.cboProjectNm.set_taborder("0");
                p.cboProjectNm.set_innerdataset("dsCboProjectCd");
                p.cboProjectNm.set_codecolumn("CODE");
                p.cboProjectNm.set_datacolumn("NAME");
                p.cboProjectNm.set_readonly("true");
                p.cboProjectNm.set_text("Combo00");
                p.cboProjectNm.move("104","10","231","21",null,null);
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
                p.staProjectNmT.set_taborder("2");
                p.staProjectNmT.set_text("프로젝트");
                p.staProjectNmT.set_cssclass("sta_WF_textRImport");
                p.staProjectNmT.move("20","10","80","21",null,null);

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
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdPrefixList.set_taborder("0");
                p.grdPrefixList.set_autoenter("select");
                p.grdPrefixList.set_binddataset("dsPrefixList");
                p.grdPrefixList.move("10","30","440",null,null,"10");

                p.grdForm.set_taborder("1");
                p.grdForm.set_binddataset("dsFormList");
                p.grdForm.set_autofittype("col");
                p.grdForm.set_autosizingtype("col");
                p.grdForm.set_autosizebandtype("allband");
                p.grdForm.set_cellclickbound("cell");
                p.grdForm.set_autoupdatetype("itemselect");
                p.grdForm.move("460","30",null,null,"10","10");

                p.staRoleListT.set_taborder("2");
                p.staRoleListT.set_text("Prefix");
                p.staRoleListT.set_cssclass("sta_WF_title02");
                p.staRoleListT.move("10","0","450","30",null,null);

                p.staRoleMapT.set_taborder("3");
                p.staRoleMapT.set_text("화면목록");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move("460","0",null,"30","100",null);

                p.btnFormDesign.set_taborder("4");
                p.btnFormDesign.set_text("화면설계서 다운로드");
                p.btnFormDesign.set_cssclass("btn_WF_basic01");
                p.btnFormDesign.move(null,"3","134","23","10",null);

                p.Static45.set_taborder("5");
                p.Static45.set_text("Static00");
                p.Static45.set_background("red");
                p.Static45.set_visible("false");
                p.Static45.move("450","30","10","200",null,null);
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

                p.staRoleListT.set_taborder("1");
                p.staRoleListT.set_text("권한 목록");
                p.staRoleListT.set_cssclass("sta_WF_title02");
                p.staRoleListT.move("0","0","450","30",null,null);

                p.grdPrefixList.set_taborder("2");
                p.grdPrefixList.set_binddataset("dsProjectRoleList");
                p.grdPrefixList.set_autosizingtype("col");
                p.grdPrefixList.set_onselectchanged("grdRoleList_onselectchanged");
                p.grdPrefixList.move("10","30","300",null,null,"10");

                p.staRoleMapT.set_taborder("3");
                p.staRoleMapT.set_text("권한 매핑");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move("318","0",null,"30","162",null);

                p.btnFormDesign.set_taborder("4");
                p.btnFormDesign.set_text("저장");
                p.btnFormDesign.set_cssclass("btn_WF_basic01");
                p.btnFormDesign.set_onclick("btnRoleSave_onclick");
                p.btnFormDesign.move(null,"3","46","23","8",null);

                p.Static45.set_taborder("5");
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
                p.divDetail.move("0","62",null,null,"0","0");
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
        this.registerScript("modFormDesign_bak.xfdl", function() {
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
        this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	// gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;  		 // 글로변 변수_프로젝트코드

        this.fv_sProjectCd = "";// 권한 목록의 선택된 row 프로젝트코드
        this.fv_sRoleCd = "";	// 권한 목록의 선택된 row 권한코드
        this.fv_sRoleCd = "";	// 권한 목록의 선택된 row 메뉴코드

        this.fv_nRAllIndex;

        this.fv_sSelectRow = "";
        this.fv_sProjectCd = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM040_onload = function(obj, e)
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
            if (take.nvl(sTranId, "")=="") sTranId = "prefixList";

        	if( sTranId == 'formList' ){
        		this.dsFormList.clearData();

        		var sPrefix = this.dsPrefixList.getColumn(this.dsPrefixList.rowposition, "PREFIX");
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
        	}else{
        		this.dsPrefixList.clearData();

        		var objDivSearch = this.divSearch.form;
        		var sProjectCd = take.nvl(objDivSearch.cboProjectNm.value, "");	// 프로젝트명
        		var sRoleCd    = take.nvl(objDivSearch.edtRole.value, "");		// 권한
        		var sUseYn     = take.nvl(objDivSearch.cboUseYn.value, "");		// 사용여부

        		this.fv_sProjectCd = sProjectCd;
        		take.tranSelect
        		(
        			this,
        			"prefixList",
        			"Main.prefixSelect",
        			"",
        			"dsPrefixList",
        			"PROJECT_CD='" + sProjectCd + "' ROLE_CD='" + sRoleCd + "' USE_YN='" + sUseYn + "'",
        			"fnCallback"
        		)
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

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnUserFunction();
         */
        this.fnInit = function()
        {
        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	this.divSearch.form.cboProjectNm.set_readonly(false);
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	take.tranCode(this, "00009", "dsCboUseYn", "ALL",
        	function(sId, nErrCd, sErrMsg)
        	{
        		if (this.dsCboUseYn.rowcount > 0){
        			this.divSearch.form.cboUseYn.set_value("Y");
        		}
        		// 프로젝트 코드
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
        				var objDsCboProj = this.dsCboProjectCd;
        				if (objDsCboProj.rowcount>0)
        				{
        					var addInsertRow = objDsCboProj.insertRow(0)
        					objDsCboProj.setColumn(addInsertRow, "CODE", "");
        					objDsCboProj.setColumn(addInsertRow, "NAME", "선택");
        				}
        			}
        		);

        		this.fnSearch("prefixList");
        	});
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
                case "prefixList" :		// 좌측 권한목록 조회 콜백
        			this.fnSearch('formList');
                    break;

                default :
                    break;
            }
        };

        this.dsPrefixList_canrowposchange = function(obj,e)
        {
        	this.fnSearch('formList');
        };

        this.divDetail_btnFormDesign_onclick = function(obj,e)
        {
        	var sPrefix = this.dsPrefixList.getColumn(this.dsPrefixList.rowposition, "PREFIX");
        	var downloadUrl = take.getSvcUrl() + "formDesignDownload.do";
        	downloadUrl += "?sPrefix="+sPrefix;

        	this.FileDownTransfer00.set_url(downloadUrl);
        	this.FileDownTransfer00.download();
        };

        this.divDetail_grdPrefixList_oncellclick = function(obj,e)
        {
        	this.fnSearch('formList');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM040_onload,this);
            this.divSearch.form.edtRole.addEventHandler("onkeyup",this.divSearch_edtRole_onkeyup,this);
            this.divDetail.form.grdPrefixList.addEventHandler("oncellclick",this.divDetail_grdPrefixList_oncellclick,this);
            this.divDetail.form.btnFormDesign.addEventHandler("onclick",this.divDetail_btnFormDesign_onclick,this);
            this.dsFormList.addEventHandler("onrowposchanged",this.dsFormList_onrowposchanged,this);
            this.dsFormList.addEventHandler("oncolumnchanged",this.dsFormList_oncolumnchanged,this);
        };
        this.loadIncludeScript("modFormDesign_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
