(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM040P01");
            this.set_background("#ffffff");
            this.set_titletext("프로젝트관리_권한관리_권한관리_기능버튼");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_URL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsButton", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPONENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENT_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserY", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserN", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMenu","20","20",null,"91","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","0","30","120","31",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_th01L");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static10","119","30",null,"31","0",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divMenu.addChild(obj.name, obj);

            obj = new Edit("edtMenuCd","126","34","84","23",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staCode00","0","60","120","31",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("3");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_th01L");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static10_00","119","60",null,"31","0",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divMenu.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","213","34",null,"23","6",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divMenu.addChild(obj.name, obj);

            obj = new Edit("edtProgramCd","126","64","84","23",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divMenu.addChild(obj.name, obj);

            obj = new Edit("edtProgramNm","213","64",null,"23","6",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","0","0",null,"30","340",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("8");
            obj.set_text("화면정보");
            obj.set_cssclass("sta_WF_title02");
            this.divMenu.addChild(obj.name, obj);

            obj = new Div("divButton","20","divMenu:5",null,"236","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","0","0",null,"30","340",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("1");
            obj.set_text("기능버튼목록");
            obj.set_cssclass("sta_WF_title02");
            this.divButton.addChild(obj.name, obj);

            obj = new Grid("grdButton","0","30",null,null,"0","0",null,null,null,null,this.divButton.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsButton");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"버튼ID\"/><Cell col=\"1\" text=\"버튼명\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPONENT_ID\"/><Cell col=\"1\" text=\"bind:COMPONENT_NM\"/></Band></Format></Formats>");
            this.divButton.addChild(obj.name, obj);

            obj = new Div("divProgram","126","210","49","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가상폼");
            obj.set_async("false");
            obj.set_visible("false");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Div("divUser","20","divButton:5",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","0","0",null,"30","540",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("0");
            obj.set_text("접근 가능 사용자");
            obj.set_cssclass("sta_WF_title02");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btnRight","47.50%","70","10","50",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_next");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("Static03_00","btnRight:0","30","5","206",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.5");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00","Static03_00:0","0",null,"30","149",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("1");
            obj.set_text("접근 불가 사용자");
            obj.set_cssclass("sta_WF_title02");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("Static03",null,"30","5","206","btnRight:0",null,null,null,null,null,this.divUser.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.5");
            this.divUser.addChild(obj.name, obj);

            obj = new Grid("grdUserY","0","30",null,null,"Static03:0","0",null,null,null,null,this.divUser.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsUserY");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사용자코드\"/><Cell col=\"1\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CD\" cssclass=\"cellC\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:USER_NM\" cssclass=\"cellC\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.divUser.addChild(obj.name, obj);

            obj = new Grid("grdUserN","Static03_00:0","30",null,null,"0","0",null,null,null,null,this.divUser.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsUserN");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사용자코드\"/><Cell col=\"1\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CD\" cssclass=\"cellC\" cursor=\"pointer\"/><Cell col=\"1\" text=\"bind:USER_NM\" cssclass=\"cellC\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.divUser.addChild(obj.name, obj);

            obj = new Button("btnLeft","47.50%","146","10","50",null,null,null,null,null,null,this.divUser.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_prev");
            this.divUser.addChild(obj.name, obj);

            obj = new Static("Static09_00_01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20",null,null,"20","20","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","567",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"57","23","80","20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_save01");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divButton.form
            obj = new Layout("default","",0,0,this.divButton.form,function(p){});
            this.divButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divProgram
            obj = new Layout("default","",0,0,this.divProgram.form,function(p){});
            this.divProgram.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUser.form
            obj = new Layout("default","",0,0,this.divUser.form,function(p){});
            this.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",760,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMenu.form.edtMenuCd","value","dsProjectMenu","MENU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMenu.form.edtMenuNm","value","dsProjectMenu","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divMenu.form.edtProgramCd","value","dsProjectMenu","PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMenu.form.edtProgramNm","value","dsProjectMenu","PROGRAM_URL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM040P01.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    pm > PM040
         *  @FileName    PM040P01.xfdl
         *  @Creator     정해원
         *  @CreateDate  2020.04.27
         *  @Version     1.0
         *  @Desction    프로젝트 권한관리 기능버튼 추가
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2020.04.27      정해원             최초 생성(사용자에 화면 매핑)
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload)
         ********************************************************/
        this.form_onload = function(obj, e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
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
            if (take.nvl(sTranId, "")=="") sTranId = "search";

        	var sNameSpaces;
        	var sOutDs;
        	var sInDs 		= "";
        	var sParams		= "";

        	if(sTranId == "search"){
        		this.dsProjectMenu.clearData();
        		this.dsButton.clearData();

        		sNameSpaces = "ProjectManagement.projectMenuProgramDetail";
        		sInDs		= "dsSearch";
        		sOutDs 		= "dsProjectMenu";

        	}else if(sTranId == "searchUser"){
        		this.dsUserY.clearData();
        		this.dsUserN.clearData();

        		sNameSpaces = ["ProjectManagement.projectMenuButtonSelectY", "ProjectManagement.projectMenuButtonSelectN"];
        		sOutDs 		= ["dsUserY", "dsUserN"];
        		sParams		+= "PROJECT_CD='" + this.dsSearch.getColumn(0, 'PROJECT_CD') + "'";
        		sParams		+= " MENU_CD='" + this.dsSearch.getColumn(0, 'MENU_CD') + "'";
        		sParams		+= " ROLE_CD='" + this.dsSearch.getColumn(0, 'ROLE_CD') + "'";
        		sParams		+= " BTN_ID='" + this.dsButton.getColumn(this.dsButton.rowposition, 'COMPONENT_PATH') + "'";
        	}

        	take.tranSelect(this, sTranId, sNameSpaces, sInDs, sOutDs, sParams, "fnCallback");
        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(){
        	//this.dsUserN 만 저장
        	if ( !take.isDsModified(this.dsUserY) && !take.isDsModified(this.dsUserN) )
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	take.transaction
        	(
        		this,
        		"save",
        		"SVC_LOC::pm/projectMenuButtonSave.do",
        		"dsUserN=dsUserN:U",
        		"",
        		"",
        		"fnCallback"
        	);

        // 	take.tranSave
        // 	(
        // 		this,
        // 		"save",
        // 		"ProjectManagement.projectMenuButton",
        // 		"dsUserN",
        // 		"",
        // 		"",
        // 		"fnCallback"
        // 	)
        };

        /**
         * fnInit : 초기화
         * @example this.fnInit();
         */
        this.fnInit = function(){
        	if(!take.isEmpty(this.getOwnerFrame().argInProjectCd)){
        		this.dsSearch.setColumn(0, 'PROJECT_CD', this.getOwnerFrame().argInProjectCd);
        	}

        	if(!take.isEmpty(this.getOwnerFrame().argInRoleCd)){
        		this.dsSearch.setColumn(0, 'ROLE_CD', this.getOwnerFrame().argInRoleCd);
        	}

        	if(!take.isEmpty(this.getOwnerFrame().argInMenuCd)){
        		this.dsSearch.setColumn(0, 'MENU_CD', this.getOwnerFrame().argInMenuCd);
        	}

        	this.fnSearch();
        };


        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        /**
         * btnSave_onclick : 저장
         */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        /**
        * btnCancel_onclick : 닫기 버튼 클릭
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        /**
         * divUser_btnRight_onclick : 접근불가 사용자 추가 버튼
         */
        this.divUser_btnRight_onclick = function(obj,e)
        {
        	this.fnSwitchingUser("grdUserY");
        };

        /**
         * divUser_btnLeft_onclick : 접근가능 사용자 추가 버튼
         */
        this.divUser_btnLeft_onclick = function(obj,e)
        {
        	this.fnSwitchingUser("grdUserN");
        };

        /**
         * dsButton_canrowposchange : 기능버튼 선택 전
         */
        this.dsButton_canrowposchange = function(obj,e)
        {
        	if ( take.isDsModified(this.dsUserN) ){
        		var ret = take.confirm(this, "question", "작성중인 데이터는 유지되지 않습니다.\r\n계속 진행하시겠습니까?");
        		if(!ret){
        			return false;
        		}
        	}

        	return true;
        };

        /**
         * dsButton_onrowposchanged : 기능버튼 선택 후
         */
        this.dsButton_onrowposchanged = function(obj,e)
        {
        	if(e.newrow == -1){
        		return;
        	}

        	this.fnSearch("searchUser");
        };

        /**
         * divUser_grdUser_oncelldblclick : 그리드 더블클릭
         */
        this.divUser_grdUser_oncelldblclick = function(obj,e)
        {
        	this.fnSwitchingUser(obj.name);
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnSetForm : 화면페이지 로드
         */
        this.fnSetForm = function(){
        	this.divProgram.set_url("");

        	var sProgramUrl = this.dsProjectMenu.getColumn(0, "PROGRAM_URL");
        	try{
        		this.divProgram.set_url(sProgramUrl);
        	}catch(e){
        		this.divProgram.set_url("");
        		return;
        	}

        	this.fnGetButton();

        	if(this.dsButton.getRowCount() > 0){
        		this.dsButton.set_rowposition(-1);
        		this.dsButton.set_rowposition(0);
        	}
        };

        /**
         * fnGetButton : 버튼 컴퍼넌트 로드
         */
        this.fnGetButton = function(){
        	var objForm = this.divProgram.form;
        	var arrComp = take.getCompObjects(objForm, "button");

        	//컴포넌트 갯수 만큼 반복
        	this.dsButton.set_enableevent(false);
            for (var i = 0 ; i < arrComp.length ; i++){
        		var objFullPath 	= take.ObjectPath(arrComp[i]);
        		var objParentPath 	= objForm._unique_id;
        		var objPath 		= objFullPath.substr(objFullPath.indexOf(objParentPath) + objParentPath.length + 1);

        		//trace('objParentPath===>' + objParentPath);	===>mainframe.WorkFrame.PM040P01.form.divProgram.form
        		//trace('objFullPath===>' + objFullPath);		===>_application.mainframe.WorkFrame.PM040P01.form.divProgram.form.divDetail.form.btnAddRow
        		//trace('objPath===>' + objPath);				===>divDetail.form.btnAddRow

        		if(	!arrComp[i]
        			|| arrComp[i].id == 'btnShowHide'
        			|| arrComp[i].cssclass == 'btn_WF_tab02' || arrComp[i].cssclass == 'btn_WF_tab01'
        			|| arrComp[i].cssclass == 'btn_WF_search02' || arrComp[i].cssclass == 'btn_WF_search01'
        		){
        			continue;
        		}

        		var nRow = this.dsButton.addRow();
        		this.dsButton.setColumn(nRow, "PROJECT_CD"		, this.dsProjectMenu.getColumn(0, "PROJECT_CD"));
        		this.dsButton.setColumn(nRow, "ROLE_CD"			, this.dsProjectMenu.getColumn(0, "ROLE_CD"));
        		this.dsButton.setColumn(nRow, "MENU_CD"			, this.dsProjectMenu.getColumn(0, "MENU_CD"));

        		this.dsButton.setColumn(nRow, "COMPONENT_ID"	, arrComp[i].id);
        		this.dsButton.setColumn(nRow, "COMPONENT_NM"	, arrComp[i].text);
        		this.dsButton.setColumn(nRow, "COMPONENT_PATH"	, objPath);
            }
        	this.dsButton.set_enableevent(true);
        };

        /**
         * fnSwitchingUser : 사용자전환
         */
        this.fnSwitchingUser = function(sGridName){
        	var insertDs = this.dsUserY;
        	var removeDs = this.dsUserN;
        	var useYn	 = "Y";

        	if (sGridName == "grdUserY" ){
        		insertDs = this.dsUserN;
        		removeDs = this.dsUserY;
        		useYn	 = "N";
        	}

        	var nRow = removeDs.rowposition;
        	if (nRow < 0) return;

        	var newRow 	= insertDs.addRow();
        	insertDs.copyRow(newRow, removeDs, nRow);
        	insertDs.setColumn(newRow, "USE_YN", "N");
        	removeDs.deleteRow(nRow);
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
            if( sErrMsg != "SUCC" )
        	{
                //Etc Script
            }

            switch(sId)
            {
                case "search" :
        			// 조회 콜백
        			this.fnSetForm();
                    break;
                case "save" :
        			// 저장 콜백
        			this.fnSearch("searchUser");
                    break;
                default :
                    break;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divMenu.form.edtMenuCd.addEventHandler("onkeyup",this.divSearch_edtCode_onkeyup,this);
            this.divMenu.form.edtMenuNm.addEventHandler("onkeyup",this.divSearch_edtCode_onkeyup,this);
            this.divMenu.form.edtProgramCd.addEventHandler("onkeyup",this.divSearch_edtCode_onkeyup,this);
            this.divMenu.form.edtProgramNm.addEventHandler("onkeyup",this.divSearch_edtCode_onkeyup,this);
            this.divUser.form.btnRight.addEventHandler("onclick",this.divUser_btnRight_onclick,this);
            this.divUser.form.grdUserY.addEventHandler("oncelldblclick",this.divUser_grdUser_oncelldblclick,this);
            this.divUser.form.grdUserN.addEventHandler("oncelldblclick",this.divUser_grdUser_oncelldblclick,this);
            this.divUser.form.btnLeft.addEventHandler("onclick",this.divUser_btnLeft_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsButton.addEventHandler("onrowposchanged",this.dsButton_onrowposchanged,this);
            this.dsButton.addEventHandler("canrowposchange",this.dsButton_canrowposchange,this);
        };
        this.loadIncludeScript("PM040P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
