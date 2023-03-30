(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comUserCodePop");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemplate", this);
            obj._setContents("<ColumnInfo><Column id=\"type\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"type\">grid</Col><Col id=\"content\">&lt;Formats&gt;&#10;    &lt;Format id=&quot;default&quot;&gt;&#10;      &lt;Columns&gt;&#10;      $columns_&#10;      &lt;/Columns&gt;&#10;      &lt;Rows&gt;&#10; &lt;Row size=&quot;32&quot; band=&quot;head&quot;/&gt;&#10; &lt;Row size=&quot;30&quot;/&gt;&#10;      &lt;/Rows&gt;&#10;      &lt;Band id=&quot;head&quot;&gt;&#10;      $cells_&#10;      &lt;/Band&gt;&#10;      &lt;Band id=&quot;body&quot;&gt;&#10;      $bodies_&#10;      &lt;/Band&gt;&#10;    &lt;/Format&gt;&#10;  &lt;/Formats&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","46",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_textR");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCode","staCode:10","10",null,"21","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","45.00%","89","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_fold01");
            obj.set_tabstop("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("그리드");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"4\"/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","337",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","380",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"divDetail:20","57","23","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"divDetail:20","57","23","btnCancle:3",null,null,null,null,null,this);
            obj.set_taborder("7");
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
            obj = new Layout("default","",600,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtCode","value","dsSearch","CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comUserCodePop.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    com
         *  @FileName    comUserCodePop.xfdl
         *  @Creator     정해원
         *  @CreateDate  2019.12.19
         *  @Version     1.0
         *  @Desction    코드검색팝업
         *
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2019.12.19      정해원             최초 생성
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fvIsMultiSel = false;

        this.fvNamespace;
        this.fvGridOption;
        this.fvSearchTitle;

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
        		, this.fvNamespace
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
        	if(!take.isEmpty(this.getOwnerFrame().argInNamespace)){
        		this.fvNamespace = this.getOwnerFrame().argInNamespace;
        	}
        // 	if(this.fvNamespace == "ProjectManagement.userCopySelect") {
        // 		this.fvNamespace = "ProjectManagement.userCopySelect";
        // 	}
        	if(!take.isEmpty(this.getOwnerFrame().argInGridOption)){
        		this.fvGridOption = this.getOwnerFrame().argInGridOption;
        	}

        	if(!take.isEmpty(this.getOwnerFrame().argInSearchTitle)){
        		this.divSearch.form.staCode.set_text(this.getOwnerFrame().argInSearchTitle);
        	}

        	if(!take.isEmpty(this.getOwnerFrame().argInMultiSel)){
        		this.fvIsMultiSel = this.getOwnerFrame().argInMultiSel;
        	}

        	if(!take.isEmpty(this.getOwnerFrame().argInSearchText)){
        		this.dsSearch.setColumn(0, 'CODE', this.getOwnerFrame().argInSearchText);
        	}

        	if(!take.isEmpty(this.getOwnerFrame().argInSearchParam)){
        		//파라미터가 존재할 경우
        		var searchParam = this.getOwnerFrame().argInSearchParam;
        		for(var paramKey in searchParam){
        			this.dsSearch.addColumn(paramKey, "string", 256);
        			this.dsSearch.setColumn(0, paramKey, take.nvl(searchParam[paramKey], ""));
        		}
        	}

        	this.fnInitGrid();

        	//finttocontents를 위한 resetscroll 처리
        	this.divSearch.form.resetScroll();

        	this.fnSearch();
        };

        this.fnInitGrid = function(){
        	var content = this.dsTemplate.lookup('type', 'grid', 'content');

        	var columnCnt 	 = 0;
        	var headFormat 	 = "";
        	var bodyFormat 	 = "";
        	var columnFormat = "";

        	if(this.fvIsMultiSel){
        		columnFormat+= "<Column size=\"10\"/>\r\n";
        		headFormat 	+= "<Cell/>\r\n";
        		bodyFormat 	+= "<Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/>\r\n";
        		columnCnt++;
        	}

        	for(var i = 0 ; i < this.fvGridOption.length ; i++){
        		var gridOption = this.fvGridOption[i];

        		columnFormat+= "<Column size=\"" + gridOption.cellWidth + "\"/>\r\n";
        		headFormat 	+= "<Cell col=\"" + columnCnt + "\" text=\"" + gridOption.gridHeader + "\"/>\r\n";
        		bodyFormat 	+= "<Cell col=\"" + columnCnt + "\" text=\"bind:" + gridOption.gridColumn + "\" textAlign=\"" + take.nvl(gridOption.cellAlign, "left") + "\"/>\r\n";

        		columnCnt++;
        	}

        	content = content.replace('$columns_'	, columnFormat);
        	content = content.replace('$cells_'		, headFormat);
        	content = content.replace('$bodies_'	, bodyFormat);

        	this.divDetail.form.grdList.set_formats(content);
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
         * btnClose_onclick : 닫기
         */
        this.btnClose_onclick = function(obj,e)
        {
        	this.fnClose(this);
        };
        /**
         * divDetail_grdList_oncelldblclick : 그리드 더블클릭
         */
        this.divMain_grdList_oncelldblclick = function(obj,e)
        {
        	if(!this.fvIsMultiSel){
        		this.fnConfirm();
        	}
        };

        /**
         * divSearch_edtCode_onkeydown : 키입력
         */
        this.divSearch_edtCode_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.divDetail.form.grdList.setFocus();
        		obj.setFocus();
        		this.fnSearch();
        	}
        };

        this.divSearch_mskCorpNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.divDetail.form.grdList.setFocus();
        		obj.setFocus();
        		this.fnSearch();
        	}
        };

        this.divSearch_edtPresiName_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.divDetail.form.grdList.setFocus();
        		obj.setFocus();
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

        	if(!this.fvIsMultiSel){
        		//싱글
        		if(dsObj.rowposition > -1){
        			returnObj = this.fnDataset2Object(dsObj, dsObj.rowposition);
        		}
        	}else{
        		//멀티
        		returnObj	= new Array();

        		var arrChkRow = take.getChkRow(dsObj, "CHK");
        		for (var i=0; i<arrChkRow.length; i++){
        			// Dataset의 특정 Row 값을 JSON Object로 변환한다.
        			var objRtn = this.fnDataset2Object(dsObj, arrChkRow[i]);
        			returnObj.push(objRtn);
        		}
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
        		pThis.opener.oCodeInfo = variant;
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
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtCode.addEventHandler("onkeydown",this.divSearch_edtCode_onkeydown,this);
            this.divDetail.form.grdList.addEventHandler("oncelldblclick",this.divMain_grdList_oncelldblclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
        };
        this.loadIncludeScript("comUserCodePop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
