(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM050");
            this.set_titletext("프로젝트관리_사용자권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRole", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"CHK\" type=\"STRING\" size=\"255\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoleTarget", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"CHK\" type=\"STRING\" size=\"255\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"R_ALL\" type=\"STRING\" size=\"255\"/><Column id=\"R_READ\" type=\"STRING\" size=\"255\"/><Column id=\"R_INPUT\" type=\"STRING\" size=\"255\"/><Column id=\"R_DELETE\" type=\"STRING\" size=\"255\"/><Column id=\"R_SAVE\" type=\"STRING\" size=\"255\"/><Column id=\"R_PRINT\" type=\"STRING\" size=\"255\"/><Column id=\"R_EXCEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuTarget", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"R_ALL\" type=\"STRING\" size=\"255\"/><Column id=\"R_READ\" type=\"STRING\" size=\"255\"/><Column id=\"R_INPUT\" type=\"STRING\" size=\"255\"/><Column id=\"R_DELETE\" type=\"STRING\" size=\"255\"/><Column id=\"R_SAVE\" type=\"STRING\" size=\"255\"/><Column id=\"R_PRINT\" type=\"STRING\" size=\"255\"/><Column id=\"R_EXCEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRoleT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUser","staRoleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnSpliter","559","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdUserList","0","28",null,null,"btnSpliter:5","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사용자코드\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CD\" cssclass=\"cellC\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\" cssclass=\"cellC\"/><Cell col=\"3\" text=\"bind:USER_EMAIL\"/><Cell col=\"4\" text=\"bind:USER_MOBILE\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserListT","0","0",null,"21","btnSpliter:5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSpliter00","btnSpliter:5","424",null,"10","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_splitter2");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdUserRoleList","btnSpliter:5","28",null,null,"0","btnSpliter00:5",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autosizingtype("col");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsRole");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"100\"/><Column size=\"251\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"권한코드\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"권한명\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:ROLE_CD\" cssclass=\"cellC\"/><Cell col=\"2\" text=\"bind:ROLE_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserListT00","btnSpliter:5","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserListT00_00","btnSpliter:5","btnSpliter00:5",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("화면 권한");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdRoleMenu","btnSpliter:5","staUserListT00_00:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_autosizingtype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_autosizebandtype("allband");
            obj.set_binddataset("dsMenu");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"316\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"메뉴명\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"전체\" edittype=\"none\" displaytype=\"normal\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"조회\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"입력\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"삭제\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"저장\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"인쇄\" edittype=\"checkbox\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"엑셀\" edittype=\"checkbox\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" autosizecol=\"limitmin\" treelevel=\"bind:LEV\"/><Cell col=\"1\" text=\"bind:R_ALL\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:R_READ\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:R_INPUT\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:R_DELETE\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"bind:R_SAVE\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"bind:R_PRINT\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"bind:R_EXCEL\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnRoleCopy",null,"0","86","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("권한가져오기");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDelRow",null,"btnSpliter00:5","46","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_cancel02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"btnSpliter00:5","46","21","btnDelRow:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_plus01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","10",null,null,"10","10","-2",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","10","53",null,"20","10",null,null,null,null,null,this);
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtUser","value","dsSearch","USER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboProjectNm","value","dsSearch","PROJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM051.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    pm > PM050
         *  @FileName    PM051.xfdl
         *  @Creator     정해원
         *  @CreateDate  2019.08.23
         *  @Version     1.0
         *  @Desction    프로젝트 사용자권한관리
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2020.04.27      정해원             최초 생성(사용자:권한 1:N 매핑)
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;  		 				// 글로변 변수_프로젝트코드
        this.oMenuInfo = null;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM050_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter);
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter00);
                this.fnInit();
           }
        };

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
            if (take.nvl(sTranId, "")=="") sTranId = "projectUserList";
        	if(!takeval.check(this, "Search")) return;

        	if ( take.isDsModified(this.dsRole) || take.isDsModified(this.dsMenu)){
        		var ret = take.confirm(this, "question", "MS00000074");
        		//take.confirm(this, "question", "작성중인 데이터는 유지되지 않습니다.\r\n계속 진행하시겠습니까?");
        		if(!ret){
        			return;
        		}
        	}

            this.dsUser.clearData();
        	this.dsRole.clearData();
        	this.dsRoleTarget.clearData();
        	this.dsMenu.clearData();
        	this.dsMenuTarget.clearData();

        	take.tranSelect
        	(
        		this,
        		sTranId,
        		"UserManagement.userInfoList",
        		"dsSearch",
        		"dsUser",
        		"",
        		"fnCallback"
        	)
        };

        //사용자 권한 조회
        this.fnSearchRole = function(isCopy, targetUserCd){
        	var sUserCd 	= isCopy ? targetUserCd : this.dsUser.getColumn(this.dsUser.rowposition, 'USER_CD');
        	var sInDs 		= "";
        	var sNameSpaces = ["ProjectManagement.roleList", "ProjectManagement.userMenuList"];
        	var sParams		= "PROJECT_CD='" + this.dsSearch.getColumn(0, 'PROJECT_CD') + "' USER_CD='" + sUserCd + "'";

        	if(isCopy){
        		this.dsRoleTarget.clearData();
        		this.dsMenuTarget.clearData();

        		var sOutDs 		= ["dsRoleTarget", "dsMenuTarget"];
        		take.tranSelect(this, "projectRoleCopyList", sNameSpaces, sInDs, sOutDs, sParams, "fnCallback");
        	}else{
        		this.dsRole.clearData();
        		this.dsMenu.clearData();

        		var sOutDs 		= ["dsRole", "dsMenu"];
        		take.tranSelect(this, "projectRoleList", sNameSpaces, sInDs, sOutDs, sParams, "fnCallback");
        	}
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectUserSave";

        	if ( !take.isDsModified(this.dsRole) && !take.isDsModified(this.dsMenu) )
        	{
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        	take.transaction
        	(
        		this
        		, sTranId
        		, "SVC_LOC::pm/projectUserRoleSave.do"
        		, "dsRole=dsRole:U dsMenu=dsMenu:U"
        		, ""
        		, "PROJECT_CD='" + this.dsSearch.getColumn(0, 'PROJECT_CD')
        		+ "' USER_CD='"  + this.dsUser.getColumn(this.dsUser.rowposition, 'USER_CD') + "'"
        		, "fnCallback"
        	);
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.divSearch_edtUser_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch();
        	}
        };

        this.dsUser_onrowposchanged = function(obj,e)
        {
        	if(e.newrow != -1){
        		this.fnSearchRole();
        	}
        };

        this.dsUser_canrowposchange = function(obj,e)
        {
        	if ( take.isDsModified(this.dsRole) || take.isDsModified(this.dsMenu)){
        		var ret = take.confirm(this, "question", "MS00000074");
        		//take.confirm(this, "question", "작성중인 데이터는 유지되지 않습니다.\r\n계속 진행하시겠습니까?");
        		if(!ret){
        			return false;
        		}
        	}

        	return true;
        };

        this.divSearch_cboProjectNm_canitemchange = function(obj,e)
        {
        	if ( take.isDsModified(this.dsRole) || take.isDsModified(this.dsMenu)){
        		var ret = take.confirm(this, "question", "MS00000074");
        		//take.confirm(this, "question", "작성중인 데이터는 유지되지 않습니다.\r\n계속 진행하시겠습니까?");
        		if(!ret){
        			return false;
        		}
        	}

        	return true;
        };

        //권한 복사
        this.oCodeInfo = null;
        this.divDetail_btnRoleCopy_onclick = function(obj,e)
        {
        	//a사용자 권한 -> b사용자 권한
        	this.oCodeInfo = null;
        	var sOpt = "titletext=권한복사대상";
        	var oArg = {
        	      argInNamespace 	: "ProjectManagement.userCopySelect"
        		, argInGridOption	: [
        								  {gridHeader:"사용자코드"		, gridColumn:"CODE"			, cellWidth:50	, cellAlign:"center"}
        								, {gridHeader:"사용자명"		, gridColumn:"NAME"			, cellWidth:50	, cellAlign:"center"}
        							]
        		, argInSearchTitle 	: "권한복사대상"
        		, argInSearchText 	: ""
        		, argInSearchParam 	: {PROJECT_CD : this.dsSearch.getColumn(0, 'PROJECT_CD')}
        		, argInMultiSel 	: false
        	};

        	var randomCd = take.getUniqueId("comUserCodePop");
        	take.openPopup(this, randomCd, "frm::com/comUserCodePop.xfdl", oArg, sOpt,
        		function(sId){
        			if(!take.isNull(this.oCodeInfo)){
        				var bReturn = take.confirm(this, "question", "ML00001384", {target:this.oCodeInfo.NAME, dest:this.dsUser.getColumn(this.dsUser.rowposition, "USER_NM")});
        				//take.confirm(this, "Info", "{target}의 권한을 {dest}에게 복사하시겠습니까?", {target:this.oCodeInfo.NAME, dest:this.dsUser.getColumn(this.dsUser.rowposition, "USER_NM")});
        				if(!bReturn){
        					return;
        				}else{
        					this.fnSearchRole(true, this.oCodeInfo.CODE);
        				}
        			}
        		}
        	);
        };

        //메뉴추가
        this.divDetail_btnAddRow_onclick = function(obj,e)
        {
        	var findRoleRow = this.dsRole.findRow("CHK", "1");
        	if(findRoleRow == -1){
        		//take.alert(this, "info", "권한을 선택해 주시기 바랍니다.");
        		take.alert(this, "Info", "MS00000011", {text:this.divDetail.form.staUserListT00.text});
        		return;
        	}

        	this.oMenuInfo = null;

        	var sOpt = "";
        	var oArg = {
        		  argInProjectCd : this.dsSearch.getColumn(0, "PROJECT_CD")
        	};

        	take.openPopup(this, "PM051P01", "biz::sys/PM051P01.xfdl", oArg, sOpt,
        		function(sId, oArgs){
        			if(this.oMenuInfo == null){
        				return;
        			}

        			this.dsMenu.set_enableevent(false);
        			for(var i = this.oMenuInfo.length-1 ; i >= 0 ; i--){
        				var objMenu = this.oMenuInfo[i];
        				var findCurRow = this.dsMenu.findRow("MENU_CD", objMenu.MENU_CD);
        				var findParRow = this.dsMenu.findRow("MENU_CD", objMenu.PARENT_MENU);
        				var findChdRow = this.dsMenu.findRow("PARENT_MENU", objMenu.MENU_CD);

        				if(findCurRow == -1){
        					var nRow = -1;
        					if(findChdRow != -1){
        						if(findChdRow==0) findChdRow = 1;
        						nRow = this.dsMenu.insertRow(findChdRow-1);
        					}else if(findParRow != -1){
        						nRow = this.dsMenu.insertRow(findParRow+1);
        					}else{
        						nRow = this.dsMenu.addRow();
        					}

        					this.dsMenu.setColumn(nRow, "PROJECT_CD"	, objMenu.PROJECT_CD);
        					this.dsMenu.setColumn(nRow, "USER_CD"		, this.dsUser.getColumn(this.dsUser.rowposition, 'USER_CD'));
        					this.dsMenu.setColumn(nRow, "ROLE_CD"		, this.dsMenu.getMax("ROLE_CD"));
        					this.dsMenu.setColumn(nRow, "MENU_CD"		, objMenu.MENU_CD);
        					this.dsMenu.setColumn(nRow, "MENU_NM"		, objMenu.MENU_NM);
        					this.dsMenu.setColumn(nRow, "PARENT_MENU"	, objMenu.PARENT_MENU);
        					this.dsMenu.setColumn(nRow, "MENU_ORDER"	, objMenu.MENU_ORDER);
        					this.dsMenu.setColumn(nRow, "LEV"			, objMenu.LEV);
        					this.dsMenu.setColumn(nRow, "PARENT_MENU"	, objMenu.PARENT_MENU);

        					this.dsMenu.setColumn(nRow, "R_READ"	,	"N");
        					this.dsMenu.setColumn(nRow, "R_INPUT"	,	"N");
        					this.dsMenu.setColumn(nRow, "R_DELETE"	,	"N");
        					this.dsMenu.setColumn(nRow, "R_SAVE"	,	"N");
        					this.dsMenu.setColumn(nRow, "R_PRINT"	,	"N");
        					this.dsMenu.setColumn(nRow, "R_EXCEL"	,	"N");
        				}else{
        					continue;
        				}
        				//ROLE_CD
        			}
        			this.dsMenu.set_enableevent(true);
        		}
        	);
        };

        //메뉴삭제
        this.divDetail_btnDelRow_onclick = function(obj,e)
        {
        	this.dsMenu.deleteRow(this.dsMenu.rowposition);
        };

        //권한선택
        this.dsMenu_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "R_ALL"){
        		obj.setColumn(e.row, "R_READ"	,	e.newvalue);
        		obj.setColumn(e.row, "R_INPUT"	,	e.newvalue);
        		obj.setColumn(e.row, "R_DELETE"	,	e.newvalue);
        		obj.setColumn(e.row, "R_SAVE"	,	e.newvalue);
        		obj.setColumn(e.row, "R_PRINT"	,	e.newvalue);
        		obj.setColumn(e.row, "R_EXCEL"	,	e.newvalue);
        	}else{
        		var sYn = obj.getColumn(e.row, "R_READ") 	+ obj.getColumn(e.row, "R_INPUT")
        				+ obj.getColumn(e.row, "R_DELETE") 	+ obj.getColumn(e.row, "R_SAVE")
        				+ obj.getColumn(e.row, "R_PRINT") 	+ obj.getColumn(e.row, "R_EXCEL");

        		if(sYn == "YYYYYY" || sYn == "NNNNNN"){
        			obj.setColumn(e.row, "R_ALL", "Y");
        		}else{
        			obj.setColumn(e.row, "R_ALL", "N");
        		}
        	}
        };

        //권한 그리드 해드 셀 클릭 이벤트
        this.divDetail_grdUserRoleList_onheadclick = function(obj,e)
        {
        	var sType = obj.getCellProperty("head", e.cell, "displaytype");
            if (sType == "checkboxcontrol") take.fnGridCheckAll(obj, e.cell, "CHK");
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
        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	if(take.getUser("ADMIN_YN") == "Y"){
        		this.divSearch.form.cboProjectNm.set_readonly(false);
        	}

        	takeval.add(this, "Search", this.divSearch.form.cboProjectNm, "프로젝트", "value", true, "string", "", "");

        	// 공통 코드조회 함수 호출
            this.fnCommonCode();
        };

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	// 프로젝트 코드, 권한 코드 멀티 셀렉트
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
        			if (objDsCboProj.rowcount > 0)
        			{
        				var addInsertRow = objDsCboProj.insertRow(0)
        				objDsCboProj.setColumn(addInsertRow, "CODE", "");
        				objDsCboProj.setColumn(addInsertRow, "NAME", take.getWord(this, "MS00000079"));
        			}

        			this.divSearch.form.cboProjectNm.set_value(this.fv_sGdsProjectCd);

        			//사용자목록 조회
        			this.fnSearch();
        		}
        	)
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
                case "projectUserList" : //조회 콜백
                    break;

        		case "projectRoleList" : //조회 콜백
                    break;

                case "projectUserSave" : // 저장 콜백
        			this.fnSearchRole();
                    break;

        		case "projectRoleCopyList" : // 복사 콜백
        			if(this.dsRoleTarget.getRowCount() > 0){
        				for(var i = 0 ; i < this.dsRoleTarget.getRowCount() ; i++){
        					var chk = this.dsRoleTarget.getColumn(i, 'CHK');
        					if(chk == '1'){
        						this.dsRole.setColumn(i, 'CHK', '1');
        					}
        				}
        			}

        			if(this.dsMenuTarget.getRowCount() > 0){
        				this.dsMenu.set_enableevent(false);

        				var objMenus = take.getChartData(this.dsMenuTarget);
        				for(var i = 0 ; i < objMenus.length ; i++){
        					var objMenu = objMenus[i];
        					var findCurRow = this.dsMenu.findRow("MENU_CD", objMenu.MENU_CD);
        					var findParRow = this.dsMenu.findRow("MENU_CD", objMenu.PARENT_MENU);
        					var findChdRow = this.dsMenu.findRow("PARENT_MENU", objMenu.MENU_CD);

        					if(findCurRow == -1){
        						var nRow = -1;
        						if(findChdRow != -1){
        							if(findChdRow==0) findChdRow = 1;
        							nRow = this.dsMenu.insertRow(findChdRow-1);
        						}else if(findParRow != -1){
        							nRow = this.dsMenu.insertRow(findParRow+1);
        						}else{
        							nRow = this.dsMenu.addRow();
        						}

        						this.dsMenu.setColumn(nRow, "PROJECT_CD"	, objMenu.PROJECT_CD);
        						this.dsMenu.setColumn(nRow, "USER_CD"		, this.dsUser.getColumn(this.dsUser.rowposition, 'USER_CD'));
        						this.dsMenu.setColumn(nRow, "ROLE_CD"		, this.dsMenu.getMax("ROLE_CD"));
        						this.dsMenu.setColumn(nRow, "MENU_CD"		, objMenu.MENU_CD);
        						this.dsMenu.setColumn(nRow, "MENU_NM"		, objMenu.MENU_NM);
        						this.dsMenu.setColumn(nRow, "PARENT_MENU"	, objMenu.PARENT_MENU);
        						this.dsMenu.setColumn(nRow, "MENU_ORDER"	, objMenu.MENU_ORDER);
        						this.dsMenu.setColumn(nRow, "LEV"			, objMenu.LEV);
        						this.dsMenu.setColumn(nRow, "PARENT_MENU"	, objMenu.PARENT_MENU);
        						this.dsMenu.setColumn(nRow, "R_ALL"			, objMenu.R_ALL);
        						this.dsMenu.setColumn(nRow, "R_READ"		, objMenu.R_READ);
        						this.dsMenu.setColumn(nRow, "R_INPUT"		, objMenu.R_INPUT);
        						this.dsMenu.setColumn(nRow, "R_DELETE"		, objMenu.R_DELETE);
        						this.dsMenu.setColumn(nRow, "R_SAVE"		, objMenu.R_SAVE);
        						this.dsMenu.setColumn(nRow, "R_PRINT"		, objMenu.R_PRINT);
        						this.dsMenu.setColumn(nRow, "R_EXCEL"		, objMenu.R_EXCEL);
        					}else{
        						continue;
        					}
        				}
        				this.dsMenu.set_enableevent(true);
        			}
                    break;
            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM050_onload,this);
            this.divSearch.form.edtUser.addEventHandler("onkeyup",this.divSearch_edtUser_onkeyup,this);
            this.divSearch.form.cboProjectNm.addEventHandler("canitemchange",this.divSearch_cboProjectNm_canitemchange,this);
            this.divDetail.form.btnSpliter.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.btnSpliter00.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.grdUserRoleList.addEventHandler("onheadclick",this.divDetail_grdUserRoleList_onheadclick,this);
            this.divDetail.form.btnRoleCopy.addEventHandler("onclick",this.divDetail_btnRoleCopy_onclick,this);
            this.divDetail.form.btnDelRow.addEventHandler("onclick",this.divDetail_btnDelRow_onclick,this);
            this.divDetail.form.btnAddRow.addEventHandler("onclick",this.divDetail_btnAddRow_onclick,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
            this.dsUser.addEventHandler("canrowposchange",this.dsUser_canrowposchange,this);
            this.dsMenu.addEventHandler("oncolumnchanged",this.dsMenu_oncolumnchanged,this);
            this.dsMenuTarget.addEventHandler("oncolumnchanged",this.dsMenu_oncolumnchanged,this);
        };
        this.loadIncludeScript("PM051.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
