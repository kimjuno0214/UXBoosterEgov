(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PLN010S04");
            this.set_titletext("계획_시험항목");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_DIV_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestItemList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestItem", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","0","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("gridGds","0","36","430",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"인증종류\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"세부품목명\"/></Band><Band id=\"body\"><Cell text=\"bind:CERT_KND_NM\" suppress=\"1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:GDS_NM\" textAlign=\"left\" suppress=\"1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:DETAIL_GDS_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("gridTestItem","gridGds:10","36","240",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTestItemList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"시험항목\"/></Band><Band id=\"body\"><Cell text=\"bind:TEST_DIV_NM\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:TEST_ITEM_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("gridTestDetail","gridTestItem:10","36",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTestItem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"분류1\"/><Cell col=\"1\" text=\"분류2\"/><Cell col=\"2\" text=\"분류3\"/><Cell col=\"3\" text=\"분류4\"/><Cell col=\"4\" text=\"분류5\"/><Cell col=\"5\" text=\"결함구분\"/><Cell col=\"6\" text=\"검출한계\"/><Cell col=\"7\" text=\"단위\"/></Band><Band id=\"body\"><Cell text=\"bind:CL_1\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CL_2\" textAlign=\"left\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:CL_3\" textAlign=\"left\" suppress=\"3\"/><Cell col=\"3\" text=\"bind:CL_4\" textAlign=\"left\" suppress=\"4\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:CL_5\"/><Cell col=\"5\" text=\"bind:FAUL_DIV_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:DETC_LIMIT\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:UNIT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00","gridGds:10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시험항목");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00_00","gridTestItem:10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시험세부항목");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddTestItem",null,"10","105","21","gridTestDetail:10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("  시험항목선택  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PLN010S04.xfdl", function() {
        /**
        *  안전성조사 계획 시험항목 관리
        *
        *  @MenuPath    안전성조사 > 안전성조사계획 > 시험항목
        *  @FileName    PLN010S04.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.03.06
        *  @Version     1.0
        *  @Desction    설명 : 안전성조사 계획 시험항목 관리 화면
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.03.06      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_parentForm;
        this.fv_sOdrId;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this))
           {

           }
        };

        /*********************************************************
         * 2.1 CALLBACK 콜백 처리부분
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
                default :
                    break;
            }
        };

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAdd, fnDelRow)
        ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function()
        {

        	this.fv_sOdrId = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID");
        	this.dsList.clearData();
        	if(!take.isEmpty(this.fv_sOdrId))
        	{
        		this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        		take.tranSelect(this, "Search", "safety.odrGdsSelect", "dsSearch", "dsList", "", "fnCallback");
        	}
        };

        /**
         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
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
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/

        /* 시험항목 추가 버튼 클릭 이벤트 */
        this.btnAddTestItem_onclick = function(obj,e)
        {
        	var sOdrId = this.dsList.getColumn(this.dsList.rowposition, "ODR_ID");
        	var sDetailGdsId = this.dsList.getColumn(this.dsList.rowposition, "DETAIL_GDS_ID");
        	var sTitle = this.dsList.getColumn(this.dsList.rowposition, "GDS_NM") + " > " + this.dsList.getColumn(this.dsList.rowposition, "DETAIL_GDS_NM");

        	if(take.isEmpty(sOdrId)) return false;

        	var arrParam = {
        				sOdrId : sOdrId,
        				sDetailGdsId : sDetailGdsId,
        				sTitle : sTitle
        				};

        	take.openPopup(this, "AddTestItem", "biz::pln/PLN010P03.xfdl",arrParam, "resizable=true",
        		function(){

        			this.dsTestItemList.clearData();
        			var sDetailGdsId = this.dsList.getColumn(this.dsList.rowposition, "DETAIL_GDS_ID");
        			this.dsSearch.setColumn(0, "DETAIL_GDS_ID", sDetailGdsId);

        			take.tranSelect(this, "SearchTestItemCd", "safety.odrTestGrpSelect", "dsSearch", "dsTestItemList", "", "fnCallback");
        		}
        	);
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/

        /* 품목정보 onrowposchanged 이벤트 */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.dsTestItemList.clearData();
        	var sDetailGdsId = this.dsList.getColumn(e.newrow, "DETAIL_GDS_ID");
        	this.dsSearch.setColumn(0, "DETAIL_GDS_ID", sDetailGdsId);

        	take.tranSelect(this, "SearchTestItemCd", "safety.odrTestGrpSelect", "dsSearch", "dsTestItemList", "", "fnCallback");
        };

        /* 시험항목 onrowposchanged 이벤트 */
        this.dsTestItemList_onrowposchanged = function(obj,e)
        {
        	this.dsTestItem.clearData();
        	var sTestItemCd = this.dsTestItemList.getColumn(e.newrow, "TEST_ITEM_CD");
        	var sTestDivCd = this.dsTestItemList.getColumn(e.newrow, "TEST_DIV_CD");
        	take.trace(this.dsSearch.saveXML());
        	if(take.isEmpty(sTestItemCd)) return false;

        	this.dsSearch.setColumn(0, "TEST_ITEM_CD", sTestItemCd);
        	this.dsSearch.setColumn(0, "TEST_DIV_CD", sTestDivCd);
        	take.tranSelect(this, "SearchTestItem", "safety.odrTestSelect", "dsSearch", "dsTestItem", "", "fnCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.staProgDetailT00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.gridGds.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.gridTestDetail.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.staProgDetailT00_00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.staProgDetailT00_00_00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.btnAddTestItem.addEventHandler("onclick",this.btnAddTestItem_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsTestItemList.addEventHandler("onrowposchanged",this.dsTestItemList_onrowposchanged,this);
        };
        this.loadIncludeScript("PLN010S04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
