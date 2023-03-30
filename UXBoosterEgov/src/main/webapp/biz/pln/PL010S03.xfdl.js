(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL010S03");
            this.set_titletext("계획_기관검토");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrGds", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_YR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시험기관");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList00","0","staProgDetailT00_00:5","200",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("takegrid").set("no");
            obj.set_autofittype("col");
            obj.set_binddataset("dsInstCd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시험기관\"/></Band><Band id=\"body\"><Cell text=\"bind:TEST_INST_CD\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00","grdProgList00:10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("계획검토");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdPlanGds","grdProgList00:10","36",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOdrGds");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"94\"/><Column size=\"94\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"인증종류\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"2\" rowspan=\"2\" text=\"세부품목명\" autosizecol=\"limitmin\"/><Cell col=\"3\" rowspan=\"2\" text=\"가능여부\" autosizecol=\"limitmin\"/><Cell col=\"4\" rowspan=\"2\" text=\"최대가능수량\" autosizecol=\"limitmin\"/><Cell col=\"5\" colspan=\"2\" text=\"시험 불가 기간\" autosizecol=\"limitmin\"/><Cell col=\"7\" rowspan=\"2\" text=\"비고\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"5\" text=\"시작일\"/><Cell row=\"1\" col=\"6\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:CERT_KND_NM\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:GDS_NM\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:DETAIL_GDS_NM\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:KCL_POSBL_YN_CD\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"center\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltext=\"Y\" combodisplaynulltype=\"nulltext\"/><Cell col=\"4\" text=\"bind:KCL_POSBL_QY\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:KCL_IMPRTY_BGNDE\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:KCL_IMPRTY_ENDDE\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:KCL_RM\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"left\"/></Band></Format></Formats>");
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
        this.registerScript("PL010S03.xfdl", function() {
        /**
        *  안전성조사 계획관리 기관검토
        *
        *  @MenuPath    안정성조사 > 계획관리 > 안전성조사계획 > 기관검토
        *  @FileName    PL010S03.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.03.06
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.03.06      doore             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_parentForm;
        this.fv_sOdrId="";
        this.fv_sTestCd="";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj,e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		// 공통코드 조회
        		take.tranCode(this,["YN","CERT_KND_CD"], ["dsYn","dsCertKndCd"],["",""],
        							function(sId, nErrCd, sErrMsg){
        							});
           }
        }
        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sOdrId 차수ID
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function()
        {
        	this.fv_sOdrId = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID");
        	var sTestInstCd = this.dsInstCd.getColumn(this.dsInstCd.rowposition, "TEST_INST_CD");
        	var sYear = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_YR");

        	this.dsOdrGds.clearData();
        	this.dsInstCd.clearData();

        	if(!take.isEmpty(this.fv_sOdrId))
        	{
        		this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        		this.dsSearch.setColumn(0, "TEST_INST_CD", this.fv_sTestCd);
        		this.dsSearch.setColumn(0, "ODR_YR", sYear);

        		// 기관별 시험가능기관 조회
        		take.tranSelect(this, "SearchInstPosblList", "safety.odrGdsInstList", "dsSearch", "dsInstCd", "", "fnCallback");

        		trace(this.dsSearch.saveXML());
        		// 기관별 대상 품목 조회
        		take.tranSelect(this, "SearchOdrGds", "safety.odrGdsSelect", "dsSearch", "dsOdrGds", "", "fnCallback");
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

        };

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
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
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        //2023.03.06 김준오_ 기관별 안전성조사계획검토 조회
        this.dsInstCd_onrowposchanged = function(obj,e)
        {
        	var sTestInstCd = this.dsInstCd.getColumn(this.dsInstCd.rowposition, "TEST_INST_CD");
        	this.fv_sTestCd = sTestInstCd;
        	alert(sTestInstCd);
        	alert(this.fv_sTestCd);
        	// 바인딩 변경
        	this.grdPlanGds.setCellProperty("body", 3, "text", "bind:" + sTestInstCd + "_POSBL_YN_CD");		// 가능여부
        	this.grdPlanGds.setCellProperty("body", 4, "text", "bind:" + sTestInstCd + "_POSBL_QY");			// 최대가능수량
        	this.grdPlanGds.setCellProperty("body", 5, "text", "bind:" + sTestInstCd + "_IMPRTY_BGNDE");		// 불가시작일
        	this.grdPlanGds.setCellProperty("body", 6, "text", "bind:" + sTestInstCd + "_IMPRTY_ENDDE");		// 불가종료일
        	this.grdPlanGds.setCellProperty("body", 7, "text", "bind:" + sTestInstCd + "_RM");						// 비고
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.staProgDetailT00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.staProgDetailT00_00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.dsInstCd.addEventHandler("onrowposchanged",this.dsInstCd_onrowposchanged,this);
        };
        this.loadIncludeScript("PL010S03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
