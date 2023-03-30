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
            this.set_titletext("프로젝트관리_권한관리_권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProjectRoleMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"R_ALL\" type=\"STRING\" size=\"255\"/><Column id=\"R_READ\" type=\"STRING\" size=\"255\"/><Column id=\"R_INPUT\" type=\"STRING\" size=\"255\"/><Column id=\"R_DELETE\" type=\"STRING\" size=\"255\"/><Column id=\"R_SAVE\" type=\"STRING\" size=\"255\"/><Column id=\"R_PRINT\" type=\"STRING\" size=\"255\"/><Column id=\"R_EXCEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"LEV\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"r_p_row\" type=\"string\" size=\"256\"/><Column id=\"r_pp_row\" type=\"string\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectRoleList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_ENG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MAIN_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRoleT","Static07_00_01:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRole","staRoleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","Static07_00_01_00:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","355","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","690","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","0","btnShowHide:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staRoleListT","0","0","450","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("권한 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdRoleList","0","26","440",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("dsProjectRoleList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"99\"/><Column size=\"100\"/><Column size=\"99\"/><Column size=\"40\"/><Column size=\"99\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"권한코드\" autosizecol=\"default\"/><Cell col=\"1\" text=\"권한명\" displaytype=\"normal\" autosizecol=\"default\"/><Cell col=\"2\" text=\"권한영문명\" autosizecol=\"default\"/><Cell col=\"3\" text=\"메인URL\"/><Cell col=\"4\" text=\"사용\" autosizecol=\"default\"/><Cell col=\"5\" text=\"등록자\" autosizecol=\"default\"/></Band><Band id=\"body\"><Cell text=\"bind:ROLE_CD\" autosizecol=\"default\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ROLE_NM\" displaytype=\"text\" edittype=\"text\" autosizecol=\"default\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:ROLE_ENG_NM\" autosizecol=\"default\" editmaxlength=\"15\"/><Cell col=\"3\" text=\"bind:MAIN_URL\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:USE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"default\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" text=\"bind:REG_NM\" autosizecol=\"default\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRoleMapT","460","0",null,"21","100",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("권한 매핑");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static45","440","0","20",null,null,"10",null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("Static00");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdRoleMenu","460","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsProjectRoleMenuList");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_autosizingtype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_autosizebandtype("allband");
            obj.set_cellclickbound("cell");
            obj.set_autoupdatetype("itemselect");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"316\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"메뉴명\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"전체\" edittype=\"none\" displaytype=\"normal\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"조회\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"입력\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"삭제\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"저장\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"인쇄\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"엑셀\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"기능버튼\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" autosizecol=\"limitmin\" treelevel=\"bind:LEV\"/><Cell col=\"1\" text=\"bind:R_ALL\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:R_READ\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:R_INPUT\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:R_DELETE\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"bind:R_SAVE\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"bind:R_PRINT\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"bind:R_EXCEL\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"expr:MENU_TYPE==&apos;03&apos; || MENU_TYPE==&apos;06&apos; ? &apos;권한&apos; : &apos;&apos;\" edittype=\"expr:MENU_TYPE==&apos;03&apos; || MENU_TYPE==&apos;06&apos; ? &apos;button&apos; : &apos;none&apos;\" autosizecol=\"limitmin\" cursor=\"pointer\" displaytype=\"expr:MENU_TYPE==&apos;03&apos; || MENU_TYPE==&apos;06&apos; ? &apos;buttoncontrol&apos; : &apos;normal&apos;\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnRoleSave",null,"0","46","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23","0","0","10",null,null,"40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static23");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM040.xfdl", function() {
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectRoleList";

        	// 벨리데이션
        	takeval.add(this, "Search", this.divSearch.form.cboProjectNm, "프로젝트", "value", true, "string", "", "");
        	if(!takeval.check(this, "Search")) return;

        	this.dsProjectRoleList.clearData();
        	this.dsProjectRoleMenuList.clearData();

            var objDivSearch = this.divSearch.form;

        	var sProjectCd = take.nvl(objDivSearch.cboProjectNm.value, "");	// 프로젝트명
        	var sRoleCd    = take.nvl(objDivSearch.edtRole.value, "");		// 권한
        	var sUseYn     = take.nvl(objDivSearch.cboUseYn.value, "");		// 사용여부

        	this.fv_sProjectCd = sProjectCd;
        	take.tranSelect
        	(
        		this,
        		"projectRoleList",
        		"ProjectManagement.projectRoleList",
        		"",
        		"dsProjectRoleList",
        		"PROJECT_CD='" + sProjectCd + "' ROLE_CD='" + sRoleCd + "' USE_YN='" + sUseYn + "'",
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectRoleListSave";

        	if (   !take.isDsModified(this.dsProjectRoleList)
        		/*&& !take.isDsModified(this.dsProjectRoleMenuList)*/
        		)
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	var objDsRoleList = this.dsProjectRoleList;
        	switch(sTranId) {
        		case "projectRoleListSave":	// 좌측 그리드 권한정보 저장,수정
        			//tranSave -> transaction 변경 2021.05.17 전영찬
        			take.transaction
        			(
        				this,
        				"projectRoleListSave",
        				"SVC_LOC::pm/projectRoleListSave.do",
        				"dsProjectRoleList=dsProjectRoleList:U",
        				"",
        				"",
        				"fnCallback"
        			);
        // 			take.tranSave
        // 			(
        // 				this,
        // 				"projectRoleListSave",
        // 				"ProjectManagement.projectRole",
        // 				"dsProjectRoleList",
        // 				"",
        // 				"",
        // 				"fnCallback"
        // 			)
        			break;

        		case "projectRoleAllDelete":	// 권한,권한메뉴 전부 삭제
        			var sProjectCd = take.nvl(this.dsProjectRoleMenuList.getColumn(0, "PROJECT_CD"), "");
        			var sRoleCd    = take.nvl(this.dsProjectRoleMenuList.getColumn(0, "ROLE_CD"), "");
        			take.transaction
        			(
        				this,
        				"projectRoleAllDelete",
        				"SVC_LOC::pm/projectRoleAllDelete.do",
        				"",
        				"",
        				"PROJECT_CD='" + sProjectCd + "' ROLE_CD ='" + sRoleCd + "'",
        				"fnCallback"
        			);
        			break;
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdRoleList";

        	switch(sGrdId) {
        		case "grdRoleList":
        			nRow = this.dsProjectRoleList.addRow();
        			this.dsProjectRoleList.setColumn(nRow, "PROJECT_CD", this.divSearch.form.cboProjectNm.value);
        			this.dsProjectRoleList.setColumn(nRow, "USE_YN", "Y");
        			this.fv_sSelectRow = "-1";

        			this.divDetail.form.grdRoleList.setFocus();
        			this.divDetail.form.grdRoleList.setCellPos(1, nRow);
        			//this.divDetail.form.grdRoleList.selectCell(nRow, 1);
        			//this.divDetail.form.grdRoleList.selectRow(-1);
        			break;
        	}
            //Script
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
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdRoleMenu";

            var objDsProjRoleMenu = this.dsProjectRoleMenuList;
        	var objDsProjRoleList = this.dsProjectRoleList

        	if(objDsProjRoleList.rowcount <= 0) {
        		take.alert(this, "info", "권한 목록이 없습니다.");
        		return;
        	}

        	var nRow     = objDsProjRoleList.rowposition;
        	var nSelProj = objDsProjRoleList.getColumn(nRow, "ROLE_NM");
        	var bRowChange = take.confirm(this, "question", "{NAME}을(를) {text}하시겠습니까?", { NAME : nSelProj, text : "삭제"});

        	if (bRowChange)
        	{
        		objDsProjRoleList.set_enableevent(false);
        		objDsProjRoleList.set_updatecontrol(false);
        		objDsProjRoleList.setRowType(nRow, "D");
        		objDsProjRoleList.set_updatecontrol(true);
        		objDsProjRoleList.set_enableevent(true);

        		this.fnSave("projectRoleAllDelete");
        	}
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // grdRoleList_onselectchanged : 좌측 프로젝트목록 선택 값 변경시 선택된 row의 프로젝트 상세 정보 조회
        this.grdRoleList_onselectchanged = function(obj,e)
        {
        	var nPreSelRow  = parseInt(take.nvl(this.fv_sSelectRow, "-1"));
        	var nCurrSelRow = parseInt(take.nvl(this.divDetail.form.grdRoleList.getSelectedRows(), "-1"));

        	if( nCurrSelRow != -1 && (nPreSelRow != nCurrSelRow) )
        	{
        		var sRowType = this.dsProjectRoleList.getRowType(nPreSelRow);
        		var bRowChange = true;

        		trace("로우타입:"+sRowType);
        		trace("이전로우:"+nPreSelRow);
        		if( "2" == sRowType || "4" == sRowType )
        		{
        			bRowChange = take.confirm(this, "String", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?");
        		}

        		if(bRowChange)
        		{
        			this.fnDetailSearch();
        		}
        		else
        		{
        			//nPreSelRow = ( "2" == sRowType ) ? -1 : nPreSelRow;
        			this.divDetail.form.grdRoleList.selectRow(nPreSelRow);
        		}
        	}
        	if (nPreSelRow == 0 && (nPreSelRow == nCurrSelRow) && this.fv_sProjectCd != "")
        	{
        		this.fnDetailSearch();
        	}
        };

        // dsProjectRoleList_onrowposchanged : 우측 그리드 권한메뉴목록 데이터셋 row 변경된 후 발생
        this.dsProjectRoleMenuList_oncolumnchanged = function(obj,e)
        {
        	var nLev	    = obj.getColumn(e.row, "LEV");			// 레벨
        	var sChkAll     = obj.getColumn(e.row, "R_ALL");		// 전체
        	var sChkRead    = obj.getColumn(e.row, "R_READ");		// 조회
        	var sChkInput   = obj.getColumn(e.row, "R_INPUT");		// 입력
        	var sChkDelete  = obj.getColumn(e.row, "R_DELETE");		// 삭제
        	var sChkSave    = obj.getColumn(e.row, "R_SAVE");		// 저장
        	var sChkPrint   = obj.getColumn(e.row, "R_PRINT");		// 인쇄
        	var sChkExcel   = obj.getColumn(e.row, "R_EXCEL");		// 엑셀
        	var sMenuCd     = obj.getColumn(e.row, "MENU_CD");		// 메뉴코드
        	var sParentMenu = obj.getColumn(e.row, "PARENT_MENU");	// 메뉴코드

        	var objGrdRollMenu = this.divDetail.form.grdRoleMenu;
        	var sEditType 	   = objGrdRollMenu.getCurEditType();
        	var nCellPos  	   = objGrdRollMenu.getCellPos();
        	var sHeadText 	   = objGrdRollMenu.getCellProperty("head", nCellPos, "text");
        	var nForCount 	   = obj.getColCount();
        	var sBindCellId;
        	var sChkBox;
        	var arrFindRows = new Array();

        	for(var x=0; x<objGrdRollMenu.getTreeChildCount(e.row); x++){
        		//trace(">>>>"+objGrdRollMenu.getTreeChildRow(e.row, x, true));
        	}

        // 	if (nLev=="0")
        // 	{
        // 		for(var i=0; i<obj.rowcount; i++)
        // 		{
        // 			if (obj.getColumn(i, "PARENT_MENU") == sMenuCd)
        // 			{
        // 				if (obj.getColID(e.col) == "r_all") {
        // 					arrFindRows = take.getFindRowsExpr(obj, "PARENT_MENU ='"+sParentMenu+"'", false);
        // 					for (var j=0; j<arrFindRows.length; j++)
        // 					{
        // 						if (obj.getColumn(e.row, obj.getColID(e.col)) == "Y") {
        // 							obj.setColumn(i, obj.getColID(e.col), "Y");
        // 						} else{
        // 							obj.setColumn(i, obj.getColID(e.col), "N");
        // 						}
        // 					}
        // 				}
        //
        // 				if (obj.getColumn(e.row, obj.getColID(e.col)) == "Y") {
        // 					obj.setColumn(i, obj.getColID(e.col), "Y");
        // 				} else{
        // 					obj.setColumn(i, obj.getColID(e.col), "N");
        // 				}
        // 			}
        // 		}
        // 	}

        	if (e.columnid == "R_ALL")
        	{
        		if (sChkAll == "Y" || sChkAll == "1" ){
        			// 전체 체크시 같은 row 전부 체크
        			for(var i=0; i<nForCount; i++){
        				sChkBox = objGrdRollMenu.getCellProperty("body", i, "edittype");
        				if (sChkBox == "checkbox"){
        					sBindCellId = objGrdRollMenu.getCellProperty("body", i, "text");
        					sBindCellId = sBindCellId.replace(/bind:/gi,"");
        					obj.setColumn(e.row, sBindCellId, "Y");
        				}
        			}
        		}else {
        			// 전체 체크해제시 같은 row 전부 체크해제
        			for(var i=0; i<nForCount; i++){
        				 sChkBox = objGrdRollMenu.getCellProperty("body", i, "edittype");
        				if (sChkBox == "checkbox"){
        					sBindCellId = objGrdRollMenu.getCellProperty("body", i, "text");
        					sBindCellId = sBindCellId.replace(/bind:/gi,"");
        					obj.setColumn(e.row, sBindCellId, "N");
        				}
        			}
        		}
        	}

        	if (e.columnid == "R_READ" || e.columnid == "R_INPUT" || e.columnid == "R_DELETE"||
        	    e.columnid == "R_SAVE" || e.columnid == "R_PRINT" || e.columnid == "R_EXCEL")
        	{
        		var sChkYn = obj.getColumn(e.row, e.columnid);
        		if (sChkYn == "N"){
        			obj.setColumn(e.row, "R_ALL", "N");
        		} else if (sChkRead == "Y" && sChkInput == "Y" && sChkDelete == "Y" && sChkSave == "Y" && sChkPrint == "Y" && sChkExcel == "Y"){
        			obj.setColumn(e.row, "R_ALL", "Y");
        		}
        	}
        };

        // btnRoleSave_onclick : 권한메뉴목록 저장 버튼
        this.btnRoleSave_onclick = function(obj,e)
        {
        	if (!take.isDsModified(this.dsProjectRoleMenuList))
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	// 우측 그리드 권한메뉴목록 저장,수정
        	//tranSave -> transaction 변경 2021.05.17 전영찬
        	take.transaction
        	(
        		this,
        		"projectRoleMenu",
        		"SVC_LOC::pm/projectRoleMenuSave.do",
        		"dsProjectRoleMenuList=dsProjectRoleMenuList:U",
        		"",
        		"",
        		"fnCallback"
        	);
        // 	take.tranSave
        // 	(
        // 		this,
        // 		"projectRoleMenu",
        // 		"ProjectManagement.projectRoleMenu",
        // 		"dsProjectRoleMenuList",
        // 		"",
        // 		"",
        // 		"fnCallback"
        // 	)
        };

        // dsProjectRoleList_oncolumnchanged : 좌측 그리드 권한메뉴목록 데이터셋 row 변경된 후 발생
        this.dsProjectRoleList_oncolumnchanged = function(obj,e)
        {
        	var nChkUseYn = obj.getColumn(e.row, "USE_YN");
        	if (e.columnid == "USE_YN"){
        		if (nChkUseYn == "Y" || nChkUseYn == "1"){
        			obj.setColumn(e.row, "USE_YN", "Y");
        		}else {
        			obj.setColumn(e.row, "USE_YN", "N");
        		}
        	}
        };

        this.divSearch_edtRole_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch("projectRoleList");
        	}
        };

        // grdRoleMenu_oncellclick : 기능버튼 권한 선택 팝업
        this.grdRoleMenu_oncellclick = function(obj,e)
        {
        	var sType = obj.getCellProperty("body", e.cell, "displaytype");
        	if(sType.indexOf('button') == -1 || e.clickitem != 'control'){
        		return;
        	}

        	if(take.isDsModified(this.dsProjectRoleList)){
        		take.alert(this, "info", "저장 후 진행해주시기 바랍니다.");
        		return;
        	}

        	var objDsRoleList 	= this.dsProjectRoleList;
        	var nRow 	   	  	= objDsRoleList.rowposition;
        	var sProjectCd 	  	= take.nvl(objDsRoleList.getColumn(nRow, "PROJECT_CD"), "");	// 프로젝트코드
        	var sRoleCd    	  	= take.nvl(objDsRoleList.getColumn(nRow, "ROLE_CD"), "");		// 권한코드
        	var sMenuCd			= this.dsProjectRoleMenuList.getColumn(this.dsProjectRoleMenuList.rowposition, "MENU_CD");	//메뉴코드

        	var sOpt = "";
        	var oArg = {
        		    argInProjectCd 	: sProjectCd
        		  , argInRoleCd 	: sRoleCd
        		  , argInMenuCd 	: sMenuCd
        	};

        	take.openPopup(this, "PM040P01", "biz::sys/PM040P01.xfdl", oArg, sOpt,
        		function(sId, oArgs){

        		}
        	);
        };

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
        	this.divSearch.form.cboProjectNm.set_value(this.fv_sGdsProjectCd);
        	if(this.fv_sGdsAdminYn == "Y"){
        		this.divSearch.form.cboProjectNm.set_readonly(false);
        	}
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
        				//this.divSearch.form.cboProjectNm.set_index(0);
        			}
        		);

        		this.fnSearch("projectRoleList");
        	});
        };

        /**
         * fnDetailSearch : 좌측 그리드 메뉴목록 선택시 우측 디테일 데이터 조회 트랜잭션
         * @example this.fnDetailSearch();
         */
        this.fnDetailSearch = function ()
        {
        	this.dsProjectRoleMenuList.clearData();
        	this.fv_sSelectRow = this.divDetail.form.grdRoleList.getSelectedRows();

        	var objDsRoleList = this.dsProjectRoleList;
        	var nRow 	   	  = objDsRoleList.rowposition;
        	var sProjectCd 	  = take.nvl(objDsRoleList.getColumn(nRow, "PROJECT_CD"), "");	// 프로젝트명
        	var sRoleCd    	  = take.nvl(objDsRoleList.getColumn(nRow, "ROLE_CD"), "");		// 사용자코드

        	take.tranSelect
        	(
        		this,
        		"projectRoleMenuList",
        		"ProjectManagement.projectRoleMenuList",
        		"",
        		"dsProjectRoleMenuList",
        		"PROJECT_CD='" + sProjectCd + "' ROLE_CD='" + sRoleCd + "'",
        		"fnCallback"
        	)
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
                case "projectRoleList" :		// 좌측 권한목록 조회 콜백

        			if (this.dsProjectRoleList.rowcount > 0){
        				var nRowCount = this.dsProjectRoleList.rowcount;
        				this.divDetail.form.staRoleListT.set_text("권한 목록 ("+nRowCount+"건)");
        				this.divDetail.form.grdRoleList.selectRow(0);
        			} else {
        				this.divDetail.form.staRoleListT.set_text("권한 목록 (0건)");
        			}
                    break;

        		case "projectRoleListSave" :  	// 좌측 권한목록 저장 콜백
        			this.fnSearch("projectRoleList");
                    break;

                case "projectRoleMenuList" :	// 우측 권한메뉴목록 조회 콜백
        			var objDsRoleMune = this.dsProjectRoleMenuList;
        			var objGrdMenu    = this.divDetail.form.grdRoleMenu;
        			this.dsProjectRoleMenuList.addColumn("R_P_ROW", "string");
        			this.dsProjectRoleMenuList.addColumn("R_PP_ROW", "string");

        // 			trace("->> dsSAVE:"+this.dsProjectRoleMenuList.saveXML());
        // 			for(var i=0; i<this.dsProjectRoleMenuList.rowcount; i++){
        // 				trace("path->>>>>> "+this.dsProjectRoleMenuList.getColumn(i, "M_PATH")+"     info->>>"+this.dsProjectRoleMenuList.getColumnInfo("PROJECT_CD"));
        //
        // 			}

        // 			for (var i=0; i<objDsRoleMune.rowcount; i++)
        // 			{
        // 				var nLev = objDsRoleMune.getColumn(i, "LEV");	// 레벨
        // 				if (nLev == "0")
        // 				{
        // 					var nChildRowCount = this.divDetail.form.grdRoleMenu.getTreeChildCount(i);
        //
        //
        // 					var nChildRow = this.divDetail.form.grdRoleMenu.getTreeChildRow(i, i, true);
        // 					this.dsProjectRoleMenuList.setColumn(i, "R_P_ROW", nChildRow);
        //
        //
        //
        // 					for(var x=0; x<nChildRowCount; x++)
        // 					{
        // 						var nChildRow2 = this.divDetail.form.grdRoleMenu.getTreeChildRow(nChildRow, x, true);
        // 						this.dsProjectRoleMenuList.setColumn(i, "R_PP_ROW", nChildRow);
        // 					}
        //
        // 				}
        // 			}
                    break;

                case "projectRoleMenu" : 		// 우측 권한메뉴목록 저장 콜백
        			take.alert(this, "Info", "메뉴 권한을 저장 완료하였습니다.");
                    break;

                case "projectRoleAllDelete" :  	// 삭제 콜백
                    this.fnSearch("projectRoleList");
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
            this.divSearch.form.edtRole.addEventHandler("onkeyup",this.divSearch_edtRole_onkeyup,this);
            this.divDetail.form.grdRoleList.addEventHandler("onselectchanged",this.grdRoleList_onselectchanged,this);
            this.divDetail.form.grdRoleMenu.addEventHandler("oncellclick",this.grdRoleMenu_oncellclick,this);
            this.divDetail.form.btnRoleSave.addEventHandler("onclick",this.btnRoleSave_onclick,this);
            this.dsProjectRoleMenuList.addEventHandler("oncolumnchanged",this.dsProjectRoleMenuList_oncolumnchanged,this);
            this.dsProjectRoleList.addEventHandler("onrowposchanged",this.dsProjectRoleList_onrowposchanged,this);
            this.dsProjectRoleList.addEventHandler("oncolumnchanged",this.dsProjectRoleList_oncolumnchanged,this);
        };
        this.loadIncludeScript("PM040.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
