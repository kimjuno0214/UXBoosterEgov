(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comUserCode");
            this.set_titletext("코드");
            if (Form == this.constructor)
            {
                this._setFormPosition(207,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReturn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCode","0","0","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnCodeSearch","edtCode:3","0","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search04");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeName","btnCodeSearch:3","0",null,"21","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",207,21,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comUserCode.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    com
         *  @FileName    comUserCode.xfdl
         *  @Creator     정해원
         *  @CreateDate  2019.12.19
         *  @Version     1.0
         *  @Desction    코드검색
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
        this.fvObjForm 	= null;
        this.fvDataset 	= null;
        this.fvCodeId 	= null;
        this.fvCodeNm 	= null;

        this.fvCodeId_bak 	= null;
        this.fvCodeNm_bak 	= null;

        this.fvIsSearch = false;
        this.fvFnCodeCallBack = null;
        this.fvNamespace = null;
        this.fvSearchTitle = null;
        this.fvGridOption = null;
        this.fvSearchPopUrl = null;

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload)
         ********************************************************/
        this.form_onload = function(obj, e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
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
            if (take.nvl(sTranId, "")=="") sTranId = "searchcomcode";

        	this.dsReturn.clearData();
        	this.dsList.clearData();
        	this.dsSearch.clearData();

        	var sInDs 		= "dsSearch";
            var sOutDs 		= "dsList";
        	var sNameSpaces = this.fnGetNamespace();

        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, 'CODE', this.edtCode.value);

        	take.tranSelect(this, sTranId, sNameSpaces, sInDs, sOutDs, "", "fnCallback", true, "dsSearch");
        };

        this.oCodeInfo = null;
        this.fnSearchPop = function()
        {
        	this.oCodeInfo = null;
        	var sOpt = "titletext=" + this.fnGetSearchTitle();
        	var oArg = {
        	      argInNamespace 	: this.fnGetNamespace()
        		, argInGridOption	: this.fnGetGridOption()
        		, argInSearchTitle 	: this.fnGetSearchTitle()
        		, argInSearchText 	: this.edtCode.value
        		, argInMultiSel 	: false
        	};

        	var sPopupUrl = take.nvl(this.fnGetSearchPopUrl(), "frm::com/comUserCodePop.xfdl");
        	var randomCd = take.getUniqueId("comUserCodePop");
        	take.openPopup(this, randomCd, sPopupUrl, oArg, sOpt,
        		function(sId){
        			this.edtCode.set_enableevent(true);

        			if(!take.isNull(this.oCodeInfo)){
        				for(var key in this.oCodeInfo){
        					this.fnAddSetColumn(this.dsReturn, key, this.oCodeInfo[key]);
        				}

        				//단건 조회 후 콜백
        				this.fnCallback('searchresult');
        			}
        		}
        	);
        };


        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        this.edtCode_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		obj.set_enableevent(false);
        		this.fnSearch();
        	}
        };

        /**
         * edtCode_onsetfocus : focus 시 backup
         */
        this.edtCode_onsetfocus = function(obj,e)
        {
        	this.fnBackup();
        };

        /**
         * edtCode_onkillfocus : focus 이동시 조회
         */
        this.edtCode_onkillfocus = function(obj,e)
        {
        	if(take.isEmpty(this.fnGetCode())){
        		this.fnReset();
        		return;
        	}

        	if(this.fnGetCode() == this.fvCodeId_bak){
        		return;
        	}

        	this.fnSearch();
        };

        /**
         * btnCodeSearch_onclick : 조회
         */
        this.btnCodeSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        //초기화용 백업
        this.fnSetWidth = function(nWidth){
        	this.edtCode.set_width(nWidth);
        	this.btnCodeSearch.set_left("edtCode:3px");
        	this.edtCodeName.set_left("btnCodeSearch:3px");
        };

        //초기화용 백업
        this.fnBackup = function(){
        	this.fvCodeId_bak = this.edtCode.value;
        	this.fvCodeNm_bak = this.edtCodeName.value;
        };

        //초기화
        this.fnReset = function(){
        	if(this.fvIsSearch){
        		//검색조건
        		this.edtCode.set_value("");
        		this.edtCodeName.set_value("");
        		this.dsReturn.clearData();
        	}else{
        		//상세용
        		this.edtCode.set_value(this.fvCodeId_bak);
        		this.edtCodeName.set_value(this.fvCodeNm_bak);
        	}

        	//값이 변경되었다면 업무callback호출
        	if(this.fvCodeId_bak != this.fnGetCode()){
        		this.fnBackup();
        		this.fnCallback("CodeCallBack");
        	}

        	this.fnBackup();
        };

        //코드 리턴
        this.fnGetCode = function(){
        	return this.edtCode.value;
        };

        //명 리턴
        this.fnGetCodeName = function(){
        	return this.edtCodeName.value;
        };

        //코드정보 리턴
        this.fnGetCodeInfo = function(){
        	return take.getChartData(this.dsReturn)[0];
        };

        //코드 set
        this.fnSetCode = function(sCode){
        	this.edtCode.set_value(sCode);
        	this.fnSearch();
        };

        //코드 set
        this.fnSetReadOnly = function(isReadOnly){
        	this.btnCodeSearch.set_enable(!isReadOnly);
        	this.edtCode.set_readonly(isReadOnly);
        };

        /**
         * fnInitSearchComponent : 검색조건용 초기화
         * @example this.fnInitSearchComponent();
         */
        this.fnInitSearchComponent = function(objForm, objDataset, sCodeId, sCodeNm)
        {
        	this.fnInitComponent(objForm, objDataset, sCodeId, sCodeNm, true);
        };

        /**
         * fnInitComponent : 초기화
         * @example this.fnInitComponent();
         */
        this.fnInitComponent = function(objForm, objDataset, sCodeId, sCodeNm, isSearch)
        {
        	this.dsList.clearData();
        	this.dsSearch.clearData();

        	this.fvObjForm	= objForm;
        	this.fvDataset 	= objDataset;
        	this.fvCodeId 	= sCodeId;
        	this.fvCodeNm 	= sCodeNm;

        	var randomCd 	= take.getUniqueId("edtCode_");
        	var randomNm 	= take.getUniqueId("edtCodeName_");

        	var objBindItem = new BindItem();
        	objBindItem.init(randomCd, "edtCode", "value", this.fvDataset.id, this.fvCodeId);
        	this.addChild(randomCd, objBindItem);
        	objBindItem.bind();

        	if(!take.isEmpty(this.fvCodeNm)){
        		var objBindItemName = new BindItem();
        		objBindItemName.init(randomNm, "edtCodeName", "value", this.fvDataset.id, this.fvCodeNm);
        		this.addChild(randomNm, objBindItemName);
        		objBindItemName.bind();
        	}

        	if(!take.isEmpty(this.edtCode.value)){
        		this.fnSearch();
        	}

        	this.fvIsSearch = isSearch;
        	if(isSearch){
        		//dataset에 column이 없다면 동적으로 추가 함
        		if(!take.isEmpty(sCodeId))
        		this.fnAddSetColumn(objDataset, sCodeId, "");
        		if(!take.isEmpty(sCodeNm))
        		this.fnAddSetColumn(objDataset, sCodeNm, "");
        	}

        	this.fnBackup();
        };

        /**
         * fnSetCallBack : 업무영역 콜백 세팅
         */
        this.fnSetCallBack = function(fnCallBack){
        	if(!take.isNull(fnCallBack)){
        		this.fvFnCodeCallBack = fnCallBack;
        	}
        };

        /**
         * fnSetNamespace : 조회쿼리 SET
         */
        this.fnSetNamespace = function(sNamespace){
        	if(!take.isNull(sNamespace)){
        		this.fvNamespace = sNamespace;
        	}
        };

        /**
         * fnGetNamespace : 조회쿼리 GET
         */
        this.fnGetNamespace = function(){
        	return this.fvNamespace;
        };

        /**
         * fnSetSearchTitle : 검색조건명 SET
         */
        this.fnSetSearchTitle = function(sSearchTitle){
        	if(!take.isNull(sSearchTitle)){
        		this.fvSearchTitle = sSearchTitle;
        	}
        };

        /**
         * fnGetSearchTitle : 검색조건명 GET
         */
        this.fnGetSearchTitle = function(){
        	return this.fvSearchTitle;
        };

        /**
         * fnSetGridOption : 그리드설정 SET
         */
        this.fnSetGridOption = function(oGridOption){
        	if(!take.isNull(oGridOption)){
        		this.fvGridOption = oGridOption;
        	}
        };

        /**
         * fnGetGridOption : 그리드설정 GET
         */
        this.fnGetGridOption = function(){
        	return this.fvGridOption;
        };

        // Dataset에 column이 없으면 column 생성
        this.fnAddSetColumn = function(objDs, strColId, strValue)
        {
        	this.fnAddColumn(objDs, strColId, "string");
        	var nRow = 0;
        	if (objDs.getRowCount() <= 0) {
        		nRow = objDs.addRow();
        	}
        	objDs.setColumn(nRow, strColId, strValue);
        };

        this.fnAddColumn = function(objDs, strColId, strColType, nColSize)
        {
        	if (objDs.getColumnInfo(strColId) == null) {
        		strColType	= take.nvl(strColType, "string");
        		nColSize	= take.nvl(nColSize, 256);
        		objDs.addColumn(strColId, strColType, nColSize);
        	}
        };

        this.fnSetSearchPopUrl = function(sPopupUrl){
        	this.fvSearchPopUrl = sPopupUrl;
        };

        this.fnGetSearchPopUrl = function(){
        	return this.fvSearchPopUrl;
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
                case "searchcomcode" :
        			// 조회 콜백
        			// 리턴값이 1건일 경우 팝업창 오픈하지 않고 값 리턴.
        			if(this.dsList.getRowCount() == 1) {
        				this.edtCode.set_enableevent(true);
        				this.dsReturn.copyData(this.dsList);

        				//단건 조회 후 콜백
        				this.fnCallback('searchresult');
        			}else{
        				//팝업 오픈
        				this.fnSearchPop();
        			}

                    break;

        		case "searchresult" :
        			//단건 조회 후 콜백
        			if(this.dsReturn.getRowCount() > 0){
        				this.edtCode.set_value(this.dsReturn.getColumn(0, 'CODE'));
        				this.edtCodeName.set_value(this.dsReturn.getColumn(0, 'NAME'));

        				this.fnBackup();
        				this.fnCallback("CodeCallBack");
        			}
        			break;

        		case "CodeCallBack" :
        			//업무영역 콜백
        			if(!take.isNull(this.fvFnCodeCallBack)){
        				var oRtn = take.getChartData(this.dsReturn)[0];

        				var objForm = this.fvObjForm;
        				var strCallback = this.fvFnCodeCallBack;

        				try {
        					if (typeof strCallback == "function") {
        						strCallback.call(objForm, oRtn);
        					} else if(typeof strCallback == "string") {
        						if (!take.isFunction(objForm[strCallback])){
        							return;
        						} else {
        							objForm[strCallback].call(objForm, oRtn);
        						}
        					}
        				} catch(e) {
        					console.dir(e);
        				}
        			}

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
            this.edtCode.addEventHandler("onsetfocus",this.edtCode_onsetfocus,this);
            this.edtCode.addEventHandler("onkillfocus",this.edtCode_onkillfocus,this);
            this.edtCode.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.btnCodeSearch.addEventHandler("onclick",this.btnCodeSearch_onclick,this);
        };
        this.loadIncludeScript("comUserCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
