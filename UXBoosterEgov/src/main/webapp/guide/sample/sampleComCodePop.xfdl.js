(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleComCodePop");
            this.set_background("#ffffff");
            this.set_titletext("부서검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static09_00_00",null,"0","10","420","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01_00","0",null,"610","10",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","0","0","10","420",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01","0","0","610","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","0","0","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","98","0",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCode","104","4",null,"23","6",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09_00","0","divSearch:0",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","10","Static09_00:0",null,"23","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_02","0","btnSearch:0",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","10",null,null,"23","10","10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_02_00","0",null,null,"5","0","btnConfirm:0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","10","Static09_00_02:0",null,null,"10","Static09_00_02_00:0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("그리드");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","0",null,null,"0","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"NAME\"/><Cell col=\"2\" text=\"USE_YN\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",620,490,this,function(p){});
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
        this.registerScript("sampleComCodePop.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    com
         *  @FileName    sampleComCodePop.xfdl
         *  @Creator     정해원
         *  @CreateDate  2019.12.19
         *  @Version     1.0
         *  @Desction    코드검색팝업(샘플)
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
        		, "Sample.deptSelect"
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
        	if(!take.isEmpty(this.getOwnerFrame().argInSearchText)){
        		this.dsSearch.setColumn(0, 'CODE', this.getOwnerFrame().argInSearchText);
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
         * btnClose_onclick : 닫기
         */
        this.btnClose_onclick = function(obj,e)
        {
        	this.fnClose(this);
        };
        /**
         * divMain_grdList_oncelldblclick : 그리드 더블클릭
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
        		this.divMain.form.grdList.setFocus();
        		obj.setFocus();
        		this.fnSearch();
        	}
        };

        this.divSearch_mskCorpNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.divMain.form.grdList.setFocus();
        		obj.setFocus();
        		this.fnSearch();
        	}
        };

        this.divSearch_edtPresiName_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.divMain.form.grdList.setFocus();
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtCode.addEventHandler("onkeydown",this.divSearch_edtCode_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.divMain.form.grdList.addEventHandler("oncelldblclick",this.divMain_grdList_oncelldblclick,this);
        };
        this.loadIncludeScript("sampleComCodePop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
