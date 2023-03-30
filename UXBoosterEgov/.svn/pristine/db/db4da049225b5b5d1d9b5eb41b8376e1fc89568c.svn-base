(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM020");
            this.set_titletext("쿼리생성기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboQueryType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQueryInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"QUERY_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"QUERY_ID\" type=\"STRING\" size=\"255\"/><Column id=\"QUERY_DESC\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQueryList", this);
            obj._setContents("<ColumnInfo><Column id=\"QUERY_NM\" type=\"STRING\" size=\"255\"/><Column id=\"QUERY_LEVEL\" type=\"STRING\" size=\"255\"/><Column id=\"FOLDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QUERY_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("파일명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_02","355","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_02_00","690","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_02_00_00","1025","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","btnShowHide:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static03");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","0","0","10",null,null,"40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static23");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","0","26","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.set_binddataset("dsQueryList");
            obj.getSetter("taketree").set("{use:\"all\", treeindex:0, parentcolid:\"PARENT_MENU\", ordercolid:\"MENU_ORDER\", treecallback:\"fnTreeCallBack\", codecolid:\"MENU_CD\"}");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"181\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"src/main/resources/mappers\"/></Band><Band id=\"body\"><Cell text=\"bind:QUERY_NM\" displaytype=\"treeitemcontrol\" treelevel=\"bind:QUERY_LEVEL\" edittype=\"tree\" border=\"1px solid #d7d7d7, 0px solid #d7d7d7, 1px solid #d7d7d7, 1px solid #d7d7d7\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","451","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staParentMenu","449","26","216","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeviceT","staParentMenu:-1","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("Query ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static02","310","0","20",null,null,"30",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("Static03");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboMenuType","457","31","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsCboQueryType");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuListT","0","0","100","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("쿼리 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuDetailT","330","0",null,"21","149",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("Query 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staParentMenuT","330","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("Query유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDesc","330","57",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","335","67",null,null,"7","10",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","staDeviceT:7","31","400","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_maxlength("12");
            obj.set_inputfilter("symbol");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSave02","229","2","80","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("CRUD생성");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSave01","146","2","80","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("Mapper생성");
            this.divDetail.addChild(obj.name, obj);
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
            obj = new BindItem("item3","divDetail.form.cboMenuType","value","dsQueryInfo","QUERY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.edtMenuNm","value","dsQueryInfo","QUERY_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.txtDesc","value","dsQueryInfo","QUERY_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AM020.xfdl", function() {
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
        this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	 // gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;							 // 글로변 변수_프로젝트코드
        this.fv_bMenuType     = false;										     // 메뉴유형 변경시 '메뉴','화면' 구분 값
        this.fv_nSaveBeforeRowType = 1;										     // 최소 RowType값 초기 행의 상태 Dataset.ROWTYPE_NORMAL
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.AM020_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                // 초기화
        		this.fnInIt();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnAddRow, fnSave, fnDelRow, fnExcel...)
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectMenuAllList";

            var sMenuCd, sProjectCd, sDeviceType, sUseYn;
        	var objDivSearch;
        	var arrValGrp;
            var nCnt = 0;

            objDivSearch = this.divSearch.form;
            this.dsProjectMenuList.clearData();

            // 벨리데이션

            arrValGrp = takeval.getGroupArray(this, "Search");

            if (take.isArray(arrValGrp))
            {
                nCnt = arrValGrp.length;
            }

            if (nCnt<=0)
            {
                takeval.add(this, "Search", objDivSearch.cboProjectNm, "프로젝트", "value", true, "string", [0,100], "");
                takeval.add(this, "Search", objDivSearch.cboDevice,    "디바이스", "value", true, "string", "", "");
            }

            if(!takeval.check(this, "Search")) return;

            sMenuCd		= take.nvl(objDivSearch.edtMenu.value, "");		  // 메뉴명
            sProjectCd  = take.nvl(objDivSearch.cboProjectNm.value, "");  // 프로젝트명
            sDeviceType	= take.nvl(objDivSearch.cboDevice.value, "");	  // 디바이스유형
            sUseYn	    = take.nvl(objDivSearch.cboUseYn.value, "");	  // 사용여부

            take.tranSelect
            (
                this,
                "projectMenuAllList",
                "ProjectManagement.projectMenuAllList",
                "",
                "dsProjectMenuList",
                "MENU_CD='"       + sMenuCd     +
                "' PROJECT_CD ='" + sProjectCd  +
                "' DEVICE_TYPE='" + sDeviceType +
                "' USE_YN='" 	  + sUseYn 		+ "'",
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectMenuSave";

        	if (   !take.isDsModified(this.dsFile)
        		&& !take.isDsModified(this.dsMultiLanguageInfo)
        		&& !take.isDsModified(this.dsProjectMenuList)
        		&& !take.isDsModified(this.dsDummy)
        		)
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	var objDs;
        	var objDivDetail;
        	var nRow, nCnt = 0;
        	var sProjectCd, sEditMenuNm;
        	var bRowChange;
        	var arrValGrp;

        	objDivDetail = this.divDetail.form;
        	sEditMenuNm  = take.nvl(objDivDetail.edtMenuNm.value, "");
        	bRowChange   = take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sEditMenuNm, text : "저장"});

        	if(bRowChange)
        	{
        		// 벨리데이션
        		arrValGrp = takeval.getGroupArray(this, "Save");

        		if (take.isArray(arrValGrp))
        		{
        			nCnt = arrValGrp.length;
        		}

        		if (nCnt<=0)
        		{
        			takeval.add(this, "Save", objDivDetail.edtMenuNm, "메뉴유형", "value", true, "string", [0,12], "");

        			// 프로그램은 메뉴 유형이 화면인 경우 벨리데이션 체크
        			if(this.fv_bMenuType){
        				//takeval.add(this, "Save", objDivDetail.edtScreen,   "프로그램", "value", true, "string", "", "");
        			}

        		}

        		if(!takeval.check(this, "Save")) return;

        		objDs  	   = this.dsProjectMenuList;
        		nRow       = objDs.rowposition;
        		sProjectCd = this.divSearch.form.cboProjectNm.value;

        		objDs.setColumn(nRow, "PROJECT_CD", sProjectCd);
        		this.fv_nSaveBeforeRowType = objDs.getRowType(nRow);
        		take.transaction
        		(
        			this,
        			"projectMenuSave",
        			"SVC_LOC::pm/projectMenuSave.do",
        			"dsProjectMenuList=dsProjectMenuList:U dsFile=dsFile:U",
        			"",
        			"sProjectCd='"+sProjectCd+"''",
        			"fnCallback"
        		);
        	}
        }

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMenuList";

        	var nRowType, nRow, nMenuType;
        	var objDs;

        	objDs     = this.dsProjectMenuList;
        	nRow      = objDs.rowposition;
        	nRowType  = objDs.getRowType(nRow);
        	nMenuType = objDs.getColumn(nRow, "MENU_TYPE");

        	if(nMenuType=="03"){
        		return false;
        	}
        	if(nRowType!=2){
        		this.divDetail.form.grdMenuList._takeTreeAddChild(this,0);
        	}

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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMenuList";

        	var objDs;
        	var nRow;
        	var sNm;
        	var bRowChange;

        	objDs = this.dsProjectMenuList;
        	nRow  = objDs.rowposition;
        	sNm   = objDs.getColumn(nRow, "MENU_NM");

        	if(objDs.rowcount <= 0){
        		take.alert(this, "info", "메뉴 목록이 없습니다.");
        		return;
        	}

        	var nRow     = this.dsProjectMenuList.rowposition;
        	var nSelProj = this.dsProjectMenuList.getColumn(nRow, "MENU_NM");

        	bRowChange = take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sNm, text : "삭제"});
        	if(bRowChange){
        		// 삭제 함수 호출
        		this.fnDataDelete();
        	}
        }

        /**
         * fnExcel : 엑셀 export 함수 (필수) --> 공통 Excel download에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnExcel = function(fnExcel)
        {
            //공통 Excel download에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //메뉴데이터셋 onrowposchanged 이벤트


        //다국어 맵핑 버튼 클릭 이벤트
        this.divDetail_btnMultiLanguage_onclick = function(obj,e)
        {
        	var sCompName = this.dsProjectMenuList.getColumn(this.dsProjectMenuList.rowposition, "MENU_NM");
        	take.openPopup(this, "addMultiLanguage", "biz::sys/OM010P06.xfdl", {argInSearchText:sCompName}, "", "fnPopCallback", false);
        };

        //프로그램 선택 팝업 오픈 이벤트
        this.btnDirector_onclick = function(obj,e)
        {
        	// 프로그램선택 팝업 오픈 AM020P03
        	take.openPopup(this, "PM030P03", "biz::sys/PM030P03.xfdl", "", "",
        		function(sId, sRtn){
        			if (take.nvl(sRtn, "")!="")
        			{
        				var objDs = this.dsProjectMenuList;

        				var sCd = sRtn.split(",")[0];
        				var sNm = sRtn.split(",")[1];
        				var sId = sRtn.split(",")[2];

        				this.fv_sProgramCd = sCd;

        				objDs.setColumn(objDs.rowposition, "PROGRAM_CD", sCd);
        				objDs.setColumn(objDs.rowposition, "PROGRAM_NM", sNm);

        				this.divDetail.form.edtScreen.set_value(sNm + "(" + sId + ")");
        				this.divDetail.form.staScreenCd.set_text(sCd);
        			}
        		},
        	false);
        };

        //메뉴얼 팝업 '등록','미등록' 링크 클릭시 팝업 오픈
        this.divDetail_staManualLink_onclick = function(obj,e)
        {
        	var objDs 		= this.dsProjectMenuList;
        	var nRow		= objDs.rowposition
        	var sProjectCd  = this.divSearch.form.cboProjectNm.value;
         	var sTemplateCd = "";
        	var sManualTxt  = take.nvl(objDs.getColumn(nRow, "MANUAL_TXT"), "");
        	var sStaLink    = this.divDetail.form.staManualLink;

         	AgrKey = {sProjectCd:sProjectCd, sManualTxt:sManualTxt};

        	take.openPopup(this, "OM010P07", "biz::sys/OM010P07.xfdl", AgrKey, "",
        		function(sId, sRtn){
        			if(take.nvl(sRtn, "")!=""){
        				objDs.setColumn(nRow, "MANUAL_TXT", sRtn);
        				sStaLink.set_text("등록됨");
        			} else {
        				objDs.setColumn(nRow, "MANUAL_TXT", sRtn);
        				sStaLink.set_text("미등록");
        			}
        		},
        	false);
        };

        // 메뉴유형 선택에 따라 프로그램 팝업 오픈 여부
        this.divDetail_cboMenuType_onitemchanged = function(obj,e)
        {
        	this.fnSetCboMenuType(obj.value);
        };

        // 메뉴 아이콘 등록 팝업 오픈
        this.divDetail_staMenuIcon_onclick = function(obj,e)
        {
        	var objDs = this.dsProjectMenuList;
        	var nRow  = objDs.rowposition;

        	var sProjectCd = objDs.getColumn(nRow, "PROJECT_CD");
        	var sMenuCd    = objDs.getColumn(nRow, "MENU_CD");

        	AgrKey = {sProjectCd:sProjectCd, sMenuCd:sMenuCd};

        	take.openPopup(this, "PM030P01", "biz::sys/PM030P01.xfdl", AgrKey, "",
        		function(sId, sCloseGubun){
        			if (sCloseGubun == "save")
        			{
        				this.fnSearch("projectMenuList");
        			}else {
        				return false;
        			}
        		});
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInIt : 초기화 함수
         * @example this.fnInIt();
         */
        this.fnInIt = function()
        {
        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

            var objCbo = this.divSearch.form.cboProjectNm;

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	objCbo.set_value(this.fv_sGdsProjectCd);
        	if(this.fv_sGdsAdminYn == "Y"){
        		objCbo.set_readonly(false);
        	}
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var arrGroupCodes = ["00043"];
        	var arrOutDs 	  = ["dsCboQueryType"];
        	var arrHeaderType = ["SEL"];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        		function(sId, nErrCd, sErrMsg)
        		{
        			//take.transaction
        			take.transaction(
        				this,
        				"QueryList",
        				"SVC_LOC::asm/AM020List.do",
        				"",
        				"dsQueryList=dsQueryList",
        				"",
        				"fnCallback");
        		});
        };

        /**
         * fnLagnSearch : 다국어 정보 조회
         * @example this.fnLagnSearch();
         */
        this.fnLagnSearch = function()
        {
            var objDs;
            var sMlCd, sMenuCd, sProjectCd;
            var nRow;

            objDs = this.dsProjectMenuList;

            // 하단 그리드 '다국어 정보' 조회
            this.dsMultiLanguageInfo.clearData();
            nRow = objDs.rowposition;

            sMenuCd		= take.nvl(objDs.getColumn(nRow, "MENU_CD"), "");	 // 메뉴명
            sProjectCd  = take.nvl(objDs.getColumn(nRow, "PROJECT_CD"), ""); // 프로젝트명
            sMlCd       = take.nvl(objDs.getColumn(nRow, "ML_CD"), "");		 // 다국어 코드

            take.tranSelect
            (
                this,
                "multilanguageDetailList",
                "ProjectManagement.projectMenuLanguageList",
                "",
                "dsMultiLanguageInfo",
                "sProjectCd='" + sProjectCd + "' sMenuCd='" + sMenuCd + "' sMlCd='" + sMlCd + "'",
                "fnCallback"
            )
        }

        /**
         * fnTreeCallBack : 트리공통 콜백 함수
         * @example this.fnTreeCallBack(sGrdId, sGbn, nRow);
         */
        this.fnTreeCallBack = function(sGrdId, sGbn, nRow)
        {
            //alert("gubun --> " + sGbn + " / Row --> " + nRow)
            switch(sGbn)
            {
                case "add":
        			//trace("add콜백 :: "+ nRow)
                    this.fnAddMenu(this.dsProjectMenuList, nRow);
                    break;

                case "del":
                    break;

                case "move":
        			var objDiv = this.divDetail.form;
        			var objDs  = this.dsProjectMenuList;
        			var nRow   = objDs.rowposition;
        			var nRootRow;

        			//20210120 정해원
        			//PARENT_MENU 누락 방지
        			var nParentRow   = objDiv.grdMenuList.getTreeParentRow(nRow);
        			//var nP_ParentRow = objDiv.grdMenuList.getTreeParentRow(nParentRow);

        			//if(nP_ParentRow > -1) nRootRow = nP_ParentRow;
        			//else nRootRow = nParentRow;
        			objDs.setColumn(nRow, "ROOT_MENU", objDs.getColumn(nParentRow, "ROOT_MENU"));
        			objDs.setColumn(nRow, "PARENT_MENU", take.nvl(objDs.getColumn(nParentRow, "MENU_CD"), "0"));

        			if (this.divDetail.form.grdMenuList.iscellmove==false) return;

        			var sProjectCd = this.divSearch.form.cboProjectNm.value;
        			objDs.setColumn(nRow, "PROJECT_CD", sProjectCd);
        			//this.fv_nSaveBeforeRowType = objDs.getRowType(nRow);

        			this.divDetail.form.grdMenuList.ismovecomplete = false;

        			take.transaction
        			(
        				this,
        				"projectMenuSave",
        				"SVC_LOC::pm/projectMenuSave.do",
        				"dsProjectMenuList=dsProjectMenuList:U dsFile=dsFile:U",
        				"",
        				"sProjectCd='"+sProjectCd+"''",
        				"fnCallback"
        			);
                    break;

                default:
            }
        }

        /**
         * fnAddMenu : 트리 메뉴 추가 함수
         * @example this.fnAddMenu(objDs, nRow);
         */
        this.fnAddMenu = function(objDs, nRow)
        {
            var sPMenuCd, sPMenuNm, sPMenuType, sParentRootMenuCd, s;
            var objDetail, objGrid;
            var nPRow, nTreeParentRow, nTreeParentRow2;

            objDetail = this.divDetail.form;
            objGrid = objDetail.grdMenuList;

            //this.divDetail.form.grdMenuList.getTreeParentRow()

            nPRow = objGrid.getTreeParentRow(nRow, true);

            //if (nPRow<0) return;

            sPMenuType = objDs.getColumn(nPRow, "MENU_TYPE");

        	nTreeParentRow    = objDetail.grdMenuList.getTreeParentRow(nRow);
        	sParentRootMenuCd = objDs.getColumn(nTreeParentRow, "MENU_CD");
        	nTreeParentRow2   = objDetail.grdMenuList.getTreeParentRow(nTreeParentRow);

        	if(nTreeParentRow2 >= 0){
        		sParentRootMenuCd = objDs.getColumn(nTreeParentRow2, "MENU_CD");
        	}

            sPMenuCd = objDs.getColumn(nPRow, "MENU_CD");
            sPMenuNm = objDs.getColumn(nPRow, "MENU_NM");

        	if (nPRow<0){
        		objDs.setColumn(nRow, "MENU_LEVEL", "0");
        	}

        	// 최상위 대메뉴인 경우에는 부모메뉴 0 저장
        	if(nTreeParentRow < 0){
        		objDs.setColumn(nRow, "PARENT_MENU", "0");
        	} else {
        		objDs.setColumn(nRow, "PARENT_MENU", sPMenuCd);
        	}

        	objDs.setColumn(nRow, "ROOT_MENU", sParentRootMenuCd);
        	objDs.setColumn(nRow, "PARENT_MENU_NM", sPMenuNm);
        	objDs.setColumn(nRow, "MENU_TYPE", "02");
        	objDs.setColumn(nRow, "DEVICE_TYPE", "01");
        	objDs.setColumn(nRow, "USE_YN", "Y");
        	objDs.setColumn(nRow, "DISPLAY_YN", "Y");

        	if (sPMenuType=="03")
            {
                objDs.set_enableevent(false);
                objDs.deleteRow(nRow);
                objDs.set_enableevent(true);
                return;
            }

            this.divDetail.form.edtMenuNm.setFocus();
            this.divDetail.form.edtMenuNm.setSelect(0,20);
        }

        /**
         * fnDataDelete : 트리 데이터 삭제
         * @example this.fnDataDelete();
         */
        this.fnDataDelete = function ()
        {
        	var objDs, objGrid;
        	var sProjectCd, sMenuCd;
        	var nRow;
        	var arrFamilyRows;

        	objGrid = this.divDetail.form.grdMenuList;
        	objDs   = this.dsProjectMenuList;
        	nRow    = objDs.rowposition;

        	arrFamilyRows = take.getTreeFamilyRows(objGrid, 0, nRow, true);
        	arrFamilyRows[arrFamilyRows.length] = nRow;

        	objDs.set_enableevent(false);
        	objDs.set_updatecontrol(false);

        	for(var i=0; i<arrFamilyRows.length; i++){
        		objDs.setRowType(arrFamilyRows[i], "U");
        	}

        	objDs.set_updatecontrol(true);
        	objDs.set_enableevent(true);

        	sProjectCd = objDs.getColumn(nRow, "PROJECT_CD");
        	take.transaction
        	(
        		this,
        		"projectMenuDelete",
        		"SVC_LOC::pm/projectMenuDelete.do",
        		"dsProjectMenuList=dsProjectMenuList:U",
        		"",
        		"PROJECT_CD='" + sProjectCd + "'",
        		"fnCallback"
        	)

        };

        /**
         * fnSetCboMenuType : 메뉴유형 '메뉴' 선택시 화면유형 선택 불가
         * @example this.fnSetCboMenuType();
         */
        this.fnSetCboMenuType = function (sMenuTypeCd)
        {
        	var objDiv;
        	var sMenyType;

        	objDiv    = this.divDetail.form;
        	sMenyType = take.nvl(objDiv.cboMenuType.value, "");

        	if(sMenuTypeCd == "02"){
        		objDiv.btnScreen.set_enable(false);
        		this.fv_bMenuType = false;
        	}
        	if(sMenuTypeCd == "03" || sMenuTypeCd == "06"){
        		objDiv.btnScreen.set_enable(true);
        		this.fv_bMenuType = true;
        	}
        };

        /**
         * fnPopCallback : 다국어팝업 콜백
         * @example this.fnPopCallback();
         */
        this.fnPopCallback = function (sId, nReturnVal)
        {
        	if(sId == "addMultiLanguage"){
        		var nRow = this.dsProjectMenuList.rowposition;

        		if(take.nvl(nReturnVal, "") != "") {
        			nReturnVal = nReturnVal.split(",")[0];
        			this.dsProjectMenuList.setColumn(nRow, "ML_CD", nReturnVal);
        		} else return;

        		this.dsMultiLanguageInfo.clearData();
        		take.tranSelect(this, "multilanguageDetailList", "SystemCommon.multilanguageDetailList", "", "dsMultiLanguageInfo", "sMlCd='" + nReturnVal + "'", "fnCallback");
        	}
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
                case "QueryList" : //메뉴리스트 조회
        			trace(this.dsQueryList.saveXML());

        			break;

                case "multilanguageDetailList" :  //조회 콜백
                    //trace("this.dsMultiLanguageInfo.rowcount --> " + this.dsMultiLanguageInfo.rowcount);
                    break;

                case "projectMenuDelete" : 		//메뉴 삭제
        			this.fnSearch("projectMenuAllList");
                    break;

                case "projectMenuSave" : 	   //메뉴 저장
        			var objDs = this.dsProjectMenuList;
        			var nMenuNm  = objDs.getColumn(objDs.rowposition, "MENU_NM");

        			// RowType 값이 신규 추가된 Row의 상태 라면 권한 관리 이동 여부 메시지 표시
        			if(this.fv_nSaveBeforeRowType == 2)
        			{
        				var bRowChange = take.confirm(this, "question", "{name} 권한관리 화면으로 {text}하시겠습니까?", { name : nMenuNm, text : "이동"});
        				if(bRowChange)
        				{
        					// 권한관리 화면 이동 코드 작성		M0009		PM040
        					take.mdiOpenMenu(this, "M0009", "", "", true);
        				}
        			}
                    this.fnSearch("projectMenuAllList");
                    break;

                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }



        this.divDetail_btnParam_onclick = function(obj,e)
        {
        	var sProgramCd;
        	var objDs = this.dsProjectMenuList;
        	sProgramCd = take.nvl(this.divDetail.form.staScreenCd.text, "");

        	AgrKey = {sProgramCd:sProgramCd};
        	// 파라메터 팝업 오픈 PM030P04
        	take.openPopup(this, "PM030P04", "biz::sys/PM030P04.xfdl", AgrKey, "",
        		function(sId, sRtn){
        			if (take.nvl(sRtn, "")!="")
        			{
        				objDs.setColumn(objDs.rowposition, "MENU_PARAM", sRtn);
        			}
        		}
        	);
        };


        // 메뉴명 검색 엔터값 조회
        this.Edit_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch("projectMenuAllList");
        	}
        };

        this.fnDropCheck = function(sName, sGbn, objUserData, objInfo)
        {
        	console.dir(objUserData);
        	console.dir(objInfo);

        	if (sGbn=="drop")
        	{
        		if (objInfo.gubun=="child")
        		{
        			if (this.dsProjectMenuList.getColumn(objInfo.row,"MENU_TYPE")=="03")
        			{
        				return false;
        			}
        		}
        	}
        }
        this.dsQueryList_onrowposchanged = function(obj,e)
        {
        	var nRow		= obj.rowposition;
        	var sQueryId	= obj.getColumn(nRow, "QUERY_NM");
        	var sQueryLevel	= obj.getColumn(nRow, "QUERY_LEVEL");
        	var sFolderNm	= obj.getColumn(nRow, "FOLDER_NM");
        	var sFileNm		= obj.getColumn(nRow, "FILE_NM");
        	var sQueryType	= obj.getColumn(nRow, "QUERY_TYPE");

        	if( sQueryLevel == "2" ){
        		this.dsQueryInfo.clearData();
        		take.transaction(
        				this,
        				"QueryInfo",
        				"SVC_LOC::asm/AM020View.do",
        				"",
        				"dsQueryInfo=dsQueryInfo",
        				"sQueryId='"+sQueryId+"' sFolderNm='"+sFolderNm+"' sFileNm='"+sFileNm+"' sQueryType='"+sQueryType+"'",
        				"fnCallback");
        	}
        };

        this.divDetail_btnSave01_onclick = function(obj,e)
        {
        	// 파라메터 팝업 오픈 AM020P01
        	take.openPopup(this, "AM020P01", "biz::asm/AM020P01.xfdl", "", "",
        		function(sId, sRtn){
        			if (take.nvl(sRtn, "")!="")
        			{

        			}
        		}
        	);
        };

        this.divDetail_btnSave02_onclick = function(obj,e)
        {
        	// 파라메터 팝업 오픈 AM020P02
        	take.openPopup(this, "AM020P02", "biz::asm/AM020P02.xfdl", "", "",
        		function(sId, sRtn){
        			if (take.nvl(sRtn, "")!="")
        			{

        			}
        		}
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AM020_onload,this);
            this.divDetail.form.grdMenuList.addEventHandler("onselectchanged",this.grdMenuList_onselectchanged,this);
            this.divDetail.form.cboMenuType.addEventHandler("onitemchanged",this.divDetail_cboMenuType_onitemchanged,this);
            this.divDetail.form.staMenuListT.addEventHandler("onclick",this.divDetail_staMenuListT_onclick,this);
            this.divDetail.form.edtMenuNm.addEventHandler("onchanged",this.divDetail_edtMenuNm_onchanged,this);
            this.divDetail.form.btnSave02.addEventHandler("onclick",this.divDetail_btnSave02_onclick,this);
            this.divDetail.form.btnSave01.addEventHandler("onclick",this.divDetail_btnSave01_onclick,this);
            this.dsQueryList.addEventHandler("onrowposchanged",this.dsQueryList_onrowposchanged,this);
        };
        this.loadIncludeScript("AM020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
