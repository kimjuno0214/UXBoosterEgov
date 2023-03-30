(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMultiDs");
            this.set_titletext("멀티데이터소스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOracle", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"TITLE\" type=\"STRING\" size=\"255\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"255\"/><Column id=\"TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaria", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"TITLE\" type=\"STRING\" size=\"255\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"255\"/><Column id=\"TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPost", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"TITLE\" type=\"STRING\" size=\"255\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"255\"/><Column id=\"TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch","35","16","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("단순조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch00","161","16","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch00_00","287","16","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장-오류");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","36","153","724","125",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsOracle");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"173\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"TITLE\"/><Cell col=\"2\" text=\"CONTENTS\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"REG_CD\"/><Cell col=\"5\" text=\"REG_DT\"/><Cell col=\"6\" text=\"MOD_CD\"/><Cell col=\"7\" text=\"MOD_DT\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:CONTENTS\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:TYPE\"/><Cell col=\"4\" text=\"bind:REG_CD\"/><Cell col=\"5\" text=\"bind:REG_DT\"/><Cell col=\"6\" text=\"bind:MOD_CD\"/><Cell col=\"7\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","35","298","724","125",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaria");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"173\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"TITLE\"/><Cell col=\"2\" text=\"CONTENTS\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"REG_CD\"/><Cell col=\"5\" text=\"REG_DT\"/><Cell col=\"6\" text=\"MOD_CD\"/><Cell col=\"7\" text=\"MOD_DT\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:CONTENTS\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:TYPE\"/><Cell col=\"4\" text=\"bind:REG_CD\"/><Cell col=\"5\" text=\"bind:REG_DT\"/><Cell col=\"6\" text=\"bind:MOD_CD\"/><Cell col=\"7\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","35","448","724","125",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsPost");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"173\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SEQ\"/><Cell col=\"1\" text=\"TITLE\"/><Cell col=\"2\" text=\"CONTENTS\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"REG_CD\"/><Cell col=\"5\" text=\"REG_DT\"/><Cell col=\"6\" text=\"MOD_CD\"/><Cell col=\"7\" text=\"MOD_DT\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ\"/><Cell col=\"1\" text=\"bind:TITLE\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:CONTENTS\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:TYPE\"/><Cell col=\"4\" text=\"bind:REG_CD\"/><Cell col=\"5\" text=\"bind:REG_DT\"/><Cell col=\"6\" text=\"bind:MOD_CD\"/><Cell col=\"7\" text=\"bind:MOD_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnTranSearch","35","60","116","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("tranSelect");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,970,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("멀티데이터소스");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleMultiDs.xfdl", function() {
        /**
         *  sampleMultiDs
         *
         *  @MenuPath
         *  @FileName    sampleMultiDs.xfdl
         *  @Creator     정해원
         *  @CreateDate  2021.06.09
         *  @Version     1.0
         *  @Desction    설명
         *
         ************** 소스 수정 이력 *************************************************
         *    Date          Modifier            Description
         *******************************************************************************
         *  2021.06.09      정해원             최초 생성
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload등)
         ********************************************************/
        /**
         * Form_onload 최초 로드시 발생되는 이벤트 (필수)
         */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInit();
           }
        };

        /****************************************************************************************
         * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow, fnExcel, fnPrint)
         ****************************************************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        };

        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function()
        {
            this.dsOracle.clearData();
        	this.dsMaria.clearData();
        	this.dsPost.clearData();

        	var sTranId = "selectMultiDs";
        	var sUrl	= "SVC_LOC::sample/selectMultiDs.do";
        	var inDs	= "";
        	var outDs	= "dsOracle=dsOracle dsMaria=dsMaria dsPost=dsPost";
        	var params	= "";

        	take.transaction(
        		this, sTranId, sUrl, inDs, outDs, params,
        		function(sId, nErrCd, sErrMsg){
        		}
        	);
        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function()
        {
        	if ( !take.isDsModified(this.dsOracle) && !take.isDsModified(this.dsMaria) && !take.isDsModified(this.dsPost) )
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

            var sTranId = "saveMultiDs";
        	var sUrl	= "SVC_LOC::sample/saveMultiDs.do";
        	var inDs	= "dsOracle=dsOracle:U dsMaria=dsMaria:U dsPost=dsPost:U";
        	var outDs	= "";
        	var params	= "";

        	take.transaction(
        		this, sTranId, sUrl, inDs, outDs, params,
        		function(sId, nErrCd, sErrMsg){

        		}
        	);
        };

        this.fnSaveError = function()
        {
        	if ( !take.isDsModified(this.dsOracle) && !take.isDsModified(this.dsMaria) && !take.isDsModified(this.dsPost) )
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

            var sTranId = "saveMultiDsError";
        	var sUrl	= "SVC_LOC::sample/saveMultiDsError.do";
        	var inDs	= "dsOracle=dsOracle:U dsMaria=dsMaria:U dsPost=dsPost:U";
        	var outDs	= "";
        	var params	= "";

        	take.transaction(
        		this, sTranId, sUrl, inDs, outDs, params,
        		function(sId, nErrCd, sErrMsg){

        		}
        	);
        };

        this.fnTranSearch = function()
        {
        	this.dsOracle.clearData();
        	this.dsMaria.clearData();
        	this.dsPost.clearData();

        	var sTranId 	= "selectMultiDs";
        	var sNameSpaces;
        	var sOutDs;
        	var sInDs 		= "";
        	var sParams		= "";

        	sNameSpaces = ["mainOracle/Sample.sampleTableSelect", "subMySQL/Sample.sampleTableSelect", "subPostgreSQL/Sample.sampleTableSelect"];
        	sOutDs 		= ["dsOracle", "dsMaria", "dsPost"];

        	take.tranSelect(this, sTranId, sNameSpaces, sInDs, sOutDs, sParams, function(sId, nErrCd, sErrMsg){

        	});
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.btnSearch00_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.btnSearch00_00_onclick = function(obj,e)
        {
        	this.fnSaveError();
        };
        this.btnTranSearch_onclick = function(obj,e)
        {
        	this.fnTranSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnSearch00.addEventHandler("onclick",this.btnSearch00_onclick,this);
            this.btnSearch00_00.addEventHandler("onclick",this.btnSearch00_00_onclick,this);
            this.btnTranSearch.addEventHandler("onclick",this.btnTranSearch_onclick,this);
        };
        this.loadIncludeScript("sampleMultiDs.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
