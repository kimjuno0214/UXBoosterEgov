(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SPL010S01");
            this.set_background("#ffffff");
            this.set_titletext("시료등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1239,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdDivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstDdln", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRS_STTUS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgrsSttusCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchdul", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHDUL_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"SCHDUL_CD\" type=\"STRING\" size=\"255\"/><Column id=\"SCHDUL_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PLAN_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"RM\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static24","0","0",null,"10","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","0","10",null,"21","510",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("시료 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnSpliterSub","0","440",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_splitter2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00","1","btnSpliterSub:10","300","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시료 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList00","2","30",null,null,"-1","btnSpliterSub:10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"폼목명\"/><Cell col=\"1\" rowspan=\"3\" text=\"세부품목명\"/><Cell col=\"2\" rowspan=\"3\" text=\"계획수량\"/><Cell col=\"3\" rowspan=\"3\" text=\"우선인계\"/><Cell col=\"4\" colspan=\"14\" text=\"시험기관\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"KCL\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"KTR\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" text=\"KTC\"/><Cell row=\"1\" col=\"10\" colspan=\"2\" text=\"KATRI\"/><Cell row=\"1\" col=\"12\" colspan=\"2\" text=\"FITI\"/><Cell row=\"1\" col=\"14\" colspan=\"2\" text=\"KOTITI\"/><Cell row=\"1\" col=\"16\" colspan=\"2\" text=\"KTL\"/><Cell row=\"2\" col=\"4\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"5\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"6\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"7\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"8\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"9\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"10\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"11\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"12\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"13\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"14\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"15\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"16\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"17\" text=\"배부&#13;&#10;수량\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"expr:dataset.getRowLevel(currow)==1 ? &apos;소계&apos; : Column1\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"center\" edittype=\"checkbox\" text=\"bind:Column3\" displaytype=\"expr:dataset.getRowLevel(currow) == 0 ? &apos;checkboxcontrol&apos; :&apos;none&apos;\"/><Cell col=\"4\" text=\"bind:Column5\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Column6\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:Column8\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:Column9\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:Column11\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:Column12\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:Column14\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:Column15\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:Column17\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:Column18\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:Column20\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:Column21\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:Column23\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:Column24\" textAlign=\"center\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"normal\" text=\"expr:dataset.getSum(&quot;Column2&quot;)\" textAlign=\"center\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;Column5&quot;)\" textAlign=\"center\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;Column6&quot;)\" textAlign=\"center\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;Column8&quot;)\" textAlign=\"center\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;Column9&quot;)\" textAlign=\"center\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;Column11&quot;)\" textAlign=\"center\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;Column12&quot;)\" textAlign=\"center\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;Column14&quot;)\" textAlign=\"center\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;Column15&quot;)\" textAlign=\"center\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;Column17&quot;)\" textAlign=\"center\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;Column18&quot;)\" textAlign=\"center\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;Column20&quot;)\" textAlign=\"center\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;Column21&quot;)\" textAlign=\"center\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;Column23&quot;)\" textAlign=\"center\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;Column24&quot;)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("gridSplore00","80","943",null,null,"-80","-712",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList00_00_00_00");
            obj.set_extendsizetype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"품목명\"/><Cell col=\"1\" text=\"세부품목명\"/><Cell col=\"2\" text=\"세세부품목명\"/><Cell col=\"3\" text=\"등록번호\"/><Cell col=\"4\" text=\"시료번호\"/><Cell col=\"5\" text=\"제조업체\"/><Cell col=\"6\" text=\"수입업체\"/><Cell col=\"7\" text=\"판매업체\"/><Cell col=\"8\" text=\"인증번호\"/><Cell col=\"9\" text=\"모델명\"/><Cell col=\"10\" text=\"인증일자\"/><Cell col=\"11\" text=\"조사대상모델명\"/><Cell col=\"12\" text=\"브랜드\"/><Cell col=\"13\" text=\"구입일자\"/><Cell col=\"14\" text=\"구입가격\"/><Cell col=\"15\" text=\"수량\"/><Cell col=\"16\" text=\"구입처\"/><Cell col=\"17\" text=\"구입자\"/><Cell col=\"18\" text=\"제조국가\"/><Cell col=\"19\" text=\"유통구분\"/><Cell col=\"20\" text=\"구입지역\"/><Cell col=\"21\" text=\"배송상태\"/><Cell col=\"22\" text=\"제조사주소\"/><Cell col=\"23\" text=\"제조사연락처\"/><Cell col=\"24\" text=\"구입처주소\"/><Cell col=\"25\" text=\"구입처연락처\"/><Cell col=\"26\" text=\"수입자주소\"/><Cell col=\"27\" text=\"수입자연락처\"/><Cell col=\"28\" text=\"판매자주소\"/><Cell col=\"29\" text=\"판매자연락처\"/><Cell col=\"30\" text=\"방사능측정\"/><Cell col=\"31\" text=\"바코드번호\"/><Cell col=\"32\" text=\"상품번호\"/><Cell col=\"33\" text=\"URL\"/><Cell col=\"34\" text=\"구분\"/><Cell col=\"35\" text=\"인계기관\"/><Cell col=\"36\" text=\"인증기관\"/><Cell col=\"37\" text=\"상품번호\"/><Cell col=\"38\" text=\"인계일자\"/><Cell col=\"39\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:GDS_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DETAIL_GDS_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SESE_GDS_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REG_SPLORE_NO\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SPLORE_NO\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:MFBIZ\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:INCM_ENTRPS\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:NTSL_ENTRPS\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:CERT_NO\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:MODEL_NM\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:CERT_YMD\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:EXMN_TRGT_MODEL_NM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:BRND\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:PURC_YMD\" textAlign=\"center\" displaytype=\"calendarcontrol\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" text=\"bind:PURC_PC\" textAlign=\"left\" edittype=\"normal\" displaytype=\"number\" editinputtype=\"number\"/><Cell col=\"15\" text=\"bind:QY\" textAlign=\"left\" edittype=\"normal\" displaytype=\"number\" editinputtype=\"number\"/><Cell col=\"16\" text=\"bind:PURC_OFFIC\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:PURC_MAN\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:MNFCTUR_NTN\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:DSTR_DIV\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:PURC_AREA\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:DLVY_STTUS\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:MKR_ADDR\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:MKR_CTTPC\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:PURC_OFFIC_ADDR\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:PURC_OFFIC_CTTPC\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:CNT_PARTCL_ADDR\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:CNT_PARTCL_CTTPC\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:SELER_ADDR\" textAlign=\"left\"/><Cell col=\"29\" text=\"bind:SELER_CTTPC\" textAlign=\"left\"/><Cell col=\"30\" text=\"bind:RADI_MEAS\" textAlign=\"left\"/><Cell col=\"31\" text=\"bind:BRCD_NO\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:GDS_NO\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:URL\" textAlign=\"left\"/><Cell col=\"34\" text=\"bind:DIV\" textAlign=\"left\"/><Cell col=\"35\" text=\"bind:TRSF_INST_CD\" textAlign=\"left\"/><Cell col=\"36\" text=\"bind:CERT_INST_CD\" textAlign=\"left\"/><Cell col=\"37\" text=\"bind:GDS_NO\" textAlign=\"left\"/><Cell col=\"38\" text=\"bind:TRSF_YMD\" textAlign=\"center\" displaytype=\"calendarcontrol\" calendardisplaynulltype=\"none\"/><Cell col=\"39\" text=\"bind:RM\" textAlign=\"left\"/></Band></Format></Formats>");
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
        this.registerScript("SPL010S01_copy0.xfdl", function() {
        /**
        *  안전성조사 계획관리 기본정보/일정
        *
        *  @MenuPath    안정성조사 > 계획관리 > 안전성조사계획 > 기본정비/일정
        *  @FileName    PLN010S01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.02.08
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.02.08      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_parentForm;
        this.fv_sOdrId;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj,e)
        {
        	UXBooster.afnUseSpliter(this, this.btnSpliterSub);

           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		// 공통코드 조회
        		take.tranCode(this, ["YEAR"
        		                    ,"ODR_DIV_CD"
        							,"CERT_FLD_CD"
        							,"PROGRS_STTUS_CD"]
        		                  , ["dsYear"
        						    ,"dsOrdDivCd"
        							,"dsCertFldCd"
        							,"dsProgrsSttusCd"]
        						  , ["","","",""],
        		function(sId, nErrCd, sErrMsg)
        		{

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

        	this.dsSchdul.clearData();
        	this.dsInstDdln.clearData();
        	if(!take.isEmpty(this.fv_sOdrId))
        	{
        		this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        		// 일정조회
        		take.tranSelect(this, "Search", "safety.schdulSelect", "dsSearch", "dsSchdul", "", "fnCallback");

        		// 시험기관 진행상태 조회
        		take.tranSelect(this, "SearchInstDdln", "safety.instDdlnSelect", "dsSearch", "dsInstDdln", "", "fnCallback");

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
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 일정코드 등록 Click 이벤트 */
        this.btnAddSchedulCd_onclick = function(obj,e)
        {
        	var sOdrId = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID");

        	var arrParam = {
        				sOdrId : sOdrId
        				};

        	take.openPopup(this, "addSchdulCd", "biz::pln/PLN010P01.xfdl",arrParam, "resizable=true",
        		function(){

        		}
        	);
        };

        /* 일정 행추가 버튼 Click 이벤트 */
        this.btnAddSchedul_onclick = function(obj,e)
        {
        	var nRow = 0;

        	if(this.gridSchdul.currentrow > -1) nRow = this.dsSchdul.insertRow(this.gridSchdul.currentrow + 1);
        	else nRow = this.dsSchdul.addRow();

        	// 순번 업데이트
        	for(var i = 0; i < this.dsSchdul.rowcount; i++)
        	{
        		this.dsSchdul.setColumn(i, "SN", i);
        	}

        	this.dsSchdul.setColumn(nRow, "ODR_ID", this.edtOdrId.value);
        	this.dsSchdul.setColumn(nRow, "SCHDUL_CD", "00000");
        };

        /* 일정 행삭제 버튼 Click 이벤트 */
        this.btnDelSchedul_onclick = function(obj,e)
        {
        	var nRow = this.dsSchdul.rowposition;

        	if(nRow > -1) this.dsSchdul.deleteRow(nRow);
        };

        /* 진행상태 변경 이벤트 처리  */
        this.cboProgrsSttusCd_onitemchanged = function(obj,e)
        {
        	var sProgrsSttusCd = e.postvalue;

        	for(var i = 0; i < this.dsInstDdln.rowcount; i++)
        	{
        		this.dsInstDdln.setColumn(i, "PROGRS_STTUS_CD", sProgrsSttusCd);
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/


        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallback = function(sId, nErrCd, sErrMsg)
        {
            //Transaction 에러는 공통에서 처리
        	return;
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnSpliterSub.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.grdProgList00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.gridSplore00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
        };
        this.loadIncludeScript("SPL010S01_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
