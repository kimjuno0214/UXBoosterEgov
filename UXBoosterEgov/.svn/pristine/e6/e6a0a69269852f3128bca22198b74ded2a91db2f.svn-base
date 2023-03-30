(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM051P01");
            this.set_background("#ffffff");
            this.set_titletext("프로젝트관리_사용자권한관리_메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"LEV\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09_00","0","41",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"-45",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"20","-100",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0",null,null,"20","0","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","46",null,"31","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","0","0","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","98","0",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCode","104","4",null,"23","6",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","42.50%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","0","87",null,"20","-80",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("그리드");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_autosizingtype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_autosizebandtype("allband");
            obj.set_cellclickbound("cell");
            obj.set_cellsizingtype("col");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"316\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"메뉴\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" autosizecol=\"limitmin\" treelevel=\"bind:LEV\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","70",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("메뉴 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"57","23","80","20",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,490,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtCode","value","dsSearch","MENU_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM051P01.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    pm > PM050
         *  @FileName    PM051P01.xfdl
         *  @Creator     정해원
         *  @CreateDate  2020.04.27
         *  @Version     1.0
         *  @Desction    프로젝트 사용자권한관리 메뉴추가
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

        	this.dsList.clearData();

            take.tranSelect
        	(
        		  this
        		, sTranId
        		, "ProjectManagement.selectProjectMenuList"
        		, "dsSearch"
        		, "dsList"
        		, ""
        		, "fnCallback"
        	);
        };

        /**
         * fnInit : 초기화
         * @example this.fnInit();
         */
        this.fnInit = function(){
        	if(!take.isEmpty(this.getOwnerFrame().argInProjectCd)){
        		this.dsSearch.setColumn(0, 'PROJECT_CD', this.getOwnerFrame().argInProjectCd);
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
         * btnSearch_onclick : 조회
         */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };
        /**
         * btnConfirm_onclick : 확인
         */
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fnConfirm();
        };
        /**
        * btnCancel_onclick : 닫기 버튼 클릭
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };
        /**
         * divMain_grdList_oncelldblclick : 그리드 더블클릭
         */
        this.divMain_grdList_oncelldblclick = function(obj,e)
        {
        	this.fnConfirm();
        };

        /**
         * divSearch_edtCode_onkeyup : 키입력
         */
        this.divSearch_edtCode_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		//this.divMain.form.grdList.setFocus();
        		//obj.setFocus();
        		this.fnSearch();
        	}
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        this.fnConfirm = function()
        {
        	var dsObj = this.dsList;
        	var returnObj;

        	if(dsObj.rowposition == -1 || dsObj.getRowCount() == 0){
        		return;
        	}

        	//멀티
        	var returnObj = new Array();
        	var arrChkRow = new Array(); /*상위메뉴코드까지 같이 이동하도록 처리*/;

        	var menuCd 			= this.dsList.getColumn(this.dsList.rowposition, "MENU_CD");
        	var parentMenuCd 	= this.dsList.getColumn(this.dsList.rowposition, "PARENT_MENU");
        	var lev 			= this.dsList.getColumn(this.dsList.rowposition, "LEV");
        	var menuType		= this.dsList.getColumn(this.dsList.rowposition, "MENU_TYPE");
        	if(menuType == "02"){
        		return;
        	}

        	var nRow = 0;
        	var findRow = this.dsList.rowposition;
        	while(findRow != -1){
        		arrChkRow[nRow++] = findRow;

        		findRow = this.dsList.findRowExpr("MENU_CD=='" + parentMenuCd + "'", 0, findRow );
        		if(findRow != -1){
        			parentMenuCd = this.dsList.getColumn(findRow, "PARENT_MENU");
        		}
        	}

        	for (var i=0; i<arrChkRow.length; i++){
        		// Dataset의 특정 Row 값을 JSON Object로 변환한다.
        		var objRtn = this.fnDataset2Object(dsObj, arrChkRow[i]);
        		returnObj.push(objRtn);
        	}

        	this.fnClose(this, returnObj);
        };

        /**
         * fnDataset2Object : dataset 특정행을 object로 변환
         */
        this.fnDataset2Object = function(obj, nRow)
        {
        	var objRtn	= {};

        	for (var i=0; i<obj.getColCount(); i++)
        	{
        		var strColId	 = obj.getColID(i);
        		objRtn[strColId] = obj.getColumn(nRow, strColId);
        	}
        	return objRtn;
        };

        /**
         * fnClose : 부모창으로 변수 전달
         */
        this.fnClose = function(o, variant)
        {
        	var pThis  = o;

        	if (pThis.opener && typeof variant != "string") {
        		variant = take.nvl(variant, "");
        		pThis.opener.oMenuInfo = variant;
        		pThis.close();
        	}else{
        		pThis.close(variant);
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
            if( sErrMsg != "SUCC" )
        	{
                //Etc Script
            }

            switch(sId)
            {
                case "search" :
        			// 조회 콜백
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
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.edtCode.addEventHandler("onkeyup",this.divSearch_edtCode_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.grdList.addEventHandler("oncelldblclick",this.divMain_grdList_oncelldblclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
        };
        this.loadIncludeScript("PM051P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
