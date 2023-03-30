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
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSplore", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEST_INST_CD\">KCL</Col></Row><Row><Col id=\"TEST_INST_CD\">KTL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrGdsInst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static24","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staRegTitle","0","10","500","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("시료 등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnSpliter","0","400",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_splitter2");
            this.addChild(obj.name, obj);

            obj = new Grid("gridSplore","0","staRegTitle:6",null,null,"0","btnSpliter:9",null,null,null,null,this);
            obj.getSetter("takegrid").set("sort,checkbox");
            obj.set_taborder("2");
            obj.set_autofittype("none");
            obj.set_binddataset("dsSplore");
            obj.set_extendsizetype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시료ID\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"세부품목명\"/><Cell col=\"3\" text=\"계획&#13;&#10;수량\"/><Cell col=\"4\" text=\"구입&#13;&#10;수량\"/><Cell col=\"5\" text=\"세세부품목명\"/><Cell col=\"6\" text=\"등록번호\"/><Cell col=\"7\" text=\"시료번호\"/><Cell col=\"8\" text=\"제조업체\"/><Cell col=\"9\" text=\"수입업체\"/><Cell col=\"10\" text=\"판매업체\"/><Cell col=\"11\" text=\"인증번호\"/><Cell col=\"12\" text=\"모델명\"/><Cell col=\"13\" text=\"인증일자\"/><Cell col=\"14\" text=\"조사대상모델명\"/><Cell col=\"15\" text=\"브랜드\"/><Cell col=\"16\" text=\"구입일자\"/><Cell col=\"17\" text=\"구입가격\"/><Cell col=\"18\" text=\"수량\"/><Cell col=\"19\" text=\"구입처\"/><Cell col=\"20\" text=\"구입자\"/><Cell col=\"21\" text=\"제조국가\"/><Cell col=\"22\" text=\"유통구분\"/><Cell col=\"23\" text=\"구입지역\"/><Cell col=\"24\" text=\"배송상태\"/><Cell col=\"25\" text=\"제조사주소\"/><Cell col=\"26\" text=\"제조사연락처\"/><Cell col=\"27\" text=\"구입처주소\"/><Cell col=\"28\" text=\"구입처연락처\"/><Cell col=\"29\" text=\"수입자주소\"/><Cell col=\"30\" text=\"수입자연락처\"/><Cell col=\"31\" text=\"판매자주소\"/><Cell col=\"32\" text=\"판매자연락처\"/><Cell col=\"33\" text=\"방사능측정\"/><Cell col=\"34\" text=\"바코드번호\"/><Cell col=\"35\" text=\"상품번호\"/><Cell col=\"36\" text=\"URL\"/><Cell col=\"37\" text=\"구분\"/><Cell col=\"38\" text=\"인계기관\"/><Cell col=\"39\" text=\"인증기관\"/><Cell col=\"40\" text=\"상품번호\"/><Cell col=\"41\" text=\"인계일자\"/><Cell col=\"42\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SPLORE_ID\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"1\" text=\"bind:GDS_NM\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:DETAIL_GDS_NM\" textAlign=\"left\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:PLAN_QY\" textAlign=\"right\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:PURC_QY\" textAlign=\"right\" suppress=\"3\"/><Cell col=\"5\" text=\"bind:SESE_GDS_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:REG_SPLORE_NO\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:SPLORE_NO\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MFBIZ\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:INCM_ENTRPS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:NTSL_ENTRPS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"11\" text=\"bind:CERT_NO\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"12\" text=\"bind:MODEL_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"13\" text=\"bind:CERT_YMD\" textAlign=\"center\" edittype=\"date\" displaytype=\"calendarcontrol\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" text=\"bind:EXMN_TRGT_MODEL_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"15\" text=\"bind:BRND\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"16\" text=\"bind:PURC_YMD\" textAlign=\"center\" displaytype=\"calendarcontrol\" calendardisplaynulltype=\"none\" edittype=\"date\"/><Cell col=\"17\" text=\"bind:PURC_PC\" textAlign=\"left\" edittype=\"normal\" displaytype=\"number\" editinputtype=\"number\"/><Cell col=\"18\" text=\"bind:QY\" textAlign=\"left\" edittype=\"normal\" displaytype=\"number\" editinputtype=\"number\"/><Cell col=\"19\" text=\"bind:PURC_OFFIC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"20\" text=\"bind:PURC_MAN\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"21\" text=\"bind:MNFCTUR_NTN\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"22\" text=\"bind:DSTR_DIV\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"23\" text=\"bind:PURC_AREA\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"24\" text=\"bind:DLVY_STTUS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"25\" text=\"bind:MKR_ADDR\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"26\" text=\"bind:MKR_CTTPC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"27\" text=\"bind:PURC_OFFIC_ADDR\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"28\" text=\"bind:PURC_OFFIC_CTTPC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"29\" text=\"bind:CNT_PARTCL_ADDR\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"30\" text=\"bind:CNT_PARTCL_CTTPC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"31\" text=\"bind:SELER_ADDR\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"32\" text=\"bind:SELER_CTTPC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"33\" text=\"bind:RADI_MEAS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"34\" text=\"bind:BRCD_NO\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"35\" text=\"bind:GDS_NO\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"36\" text=\"bind:URL\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"37\" text=\"bind:DIV_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"38\" text=\"bind:TRSF_INST_CD\" textAlign=\"left\" edittype=\"combo\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltext=\"bind:TRSF_INST_NM\" combodisplaynulltype=\"nulltext\"/><Cell col=\"39\" text=\"bind:CERT_INST_CD\" textAlign=\"left\" edittype=\"combo\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" combodisplaynulltext=\"bind:CERT_INST_NM\" combodisplaynulltype=\"nulltext\"/><Cell col=\"40\" text=\"bind:GDS_NO\" textAlign=\"left\"/><Cell col=\"41\" text=\"bind:TRSF_YMD\" textAlign=\"center\" displaytype=\"calendarcontrol\" calendardisplaynulltype=\"none\"/><Cell col=\"42\" text=\"bind:RM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staSploreTitle","0","btnSpliter:10","500","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("시료 인계 현황");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("gridGdsInst","0","staSploreTitle:6",null,null,"0","-1",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_binddataset("dsOdrGdsInst");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddGds",null,"10","105","21","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("  시료번호생성  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownExcel",null,"10","110","21","btnAddGds:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("  엑셀다운로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnUploadExcel",null,"10","110","21","btnDownExcel:3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("  엑셀업로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("gridSploreExcel","1","670",null,null,"-1","-399",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("none");
            obj.set_binddataset("dsSplore");
            obj.set_extendsizetype("none");
            obj.set_autosizingtype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시료ID\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"세부품목명\"/><Cell col=\"3\" text=\"계획&#13;&#10;수량\"/><Cell col=\"4\" text=\"구입&#13;&#10;수량\"/><Cell col=\"5\" text=\"세세부품목명\"/><Cell col=\"6\" text=\"등록번호\"/><Cell col=\"7\" text=\"시료번호\"/><Cell col=\"8\" text=\"제조업체\"/><Cell col=\"9\" text=\"수입업체\"/><Cell col=\"10\" text=\"판매업체\"/><Cell col=\"11\" text=\"인증번호\"/><Cell col=\"12\" text=\"모델명\"/><Cell col=\"13\" text=\"인증일자\"/><Cell col=\"14\" text=\"조사대상모델명\"/><Cell col=\"15\" text=\"브랜드\"/><Cell col=\"16\" text=\"구입일자\"/><Cell col=\"17\" text=\"구입가격\"/><Cell col=\"18\" text=\"수량\"/><Cell col=\"19\" text=\"구입처\"/><Cell col=\"20\" text=\"구입자\"/><Cell col=\"21\" text=\"제조국가\"/><Cell col=\"22\" text=\"유통구분\"/><Cell col=\"23\" text=\"구입지역\"/><Cell col=\"24\" text=\"배송상태\"/><Cell col=\"25\" text=\"제조사주소\"/><Cell col=\"26\" text=\"제조사연락처\"/><Cell col=\"27\" text=\"구입처주소\"/><Cell col=\"28\" text=\"구입처연락처\"/><Cell col=\"29\" text=\"수입자주소\"/><Cell col=\"30\" text=\"수입자연락처\"/><Cell col=\"31\" text=\"판매자주소\"/><Cell col=\"32\" text=\"판매자연락처\"/><Cell col=\"33\" text=\"방사능측정\"/><Cell col=\"34\" text=\"바코드번호\"/><Cell col=\"35\" text=\"상품번호\"/><Cell col=\"36\" text=\"URL\"/><Cell col=\"37\" text=\"구분\"/><Cell col=\"38\" text=\"인계기관\"/><Cell col=\"39\" text=\"인증기관\"/><Cell col=\"40\" text=\"상품번호\"/><Cell col=\"41\" text=\"인계일자\"/><Cell col=\"42\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SPLORE_ID\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"1\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DETAIL_GDS_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLAN_QY\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:PURC_QY\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SESE_GDS_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:REG_SPLORE_NO\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:SPLORE_NO\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MFBIZ\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:INCM_ENTRPS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:NTSL_ENTRPS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"11\" text=\"bind:CERT_NO\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"12\" text=\"bind:MODEL_NM\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"13\" text=\"bind:CERT_YMD\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"14\" text=\"bind:EXMN_TRGT_MODEL_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"15\" text=\"bind:BRND\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"16\" text=\"bind:PURC_YMD\" textAlign=\"center\" displaytype=\"calendarcontrol\" calendardisplaynulltype=\"none\" edittype=\"date\"/><Cell col=\"17\" text=\"bind:PURC_PC\" textAlign=\"left\" edittype=\"normal\" displaytype=\"number\" editinputtype=\"number\"/><Cell col=\"18\" text=\"bind:QY\" textAlign=\"left\" edittype=\"normal\" displaytype=\"number\" editinputtype=\"number\"/><Cell col=\"19\" text=\"bind:PURC_OFFIC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"20\" text=\"bind:PURC_MAN\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"21\" text=\"bind:MNFCTUR_NTN\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"22\" text=\"bind:DSTR_DIV\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"23\" text=\"bind:PURC_AREA\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"24\" text=\"bind:DLVY_STTUS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"25\" text=\"bind:MKR_ADDR\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"26\" text=\"bind:MKR_CTTPC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"27\" text=\"bind:PURC_OFFIC_ADDR\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"28\" text=\"bind:PURC_OFFIC_CTTPC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"29\" text=\"bind:CNT_PARTCL_ADDR\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"30\" text=\"bind:CNT_PARTCL_CTTPC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"31\" text=\"bind:SELER_ADDR\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"32\" text=\"bind:SELER_CTTPC\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"33\" text=\"bind:RADI_MEAS\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"34\" text=\"bind:BRCD_NO\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"35\" text=\"bind:GDS_NO\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"36\" text=\"bind:URL\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"37\" text=\"bind:DIV_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"38\" text=\"bind:TRSF_INST_CD\" textAlign=\"left\" edittype=\"combo\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltext=\"bind:TRSF_INST_NM\" combodisplaynulltype=\"nulltext\"/><Cell col=\"39\" text=\"bind:CERT_INST_CD\" textAlign=\"left\" edittype=\"combo\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" combodisplaynulltext=\"bind:CERT_INST_NM\" combodisplaynulltype=\"nulltext\"/><Cell col=\"40\" text=\"bind:GDS_NO\" textAlign=\"left\"/><Cell col=\"41\" text=\"bind:TRSF_YMD\" textAlign=\"center\" displaytype=\"calendarcontrol\" calendardisplaynulltype=\"none\"/><Cell col=\"42\" text=\"bind:RM\" textAlign=\"left\"/></Band></Format></Formats>");
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
        this.registerScript("SPL010S01.xfdl", function() {
        /**
        *  안전성조사 시료관리
        *
        *  @MenuPath    안정성조사 > 시료관리 > 시료관리
        *  @FileName    SPL010S01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.03.23
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.03.23      doore               최초 생성
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
        	UXBooster.afnUseSpliter(this, this.btnSpliter);

           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        	// 공통코드 조회
        		take.tranCode(this, ["TEST_INST_CD"]
        		                  , ["dsTestInstCd"]
        						  , [""],
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
        	this.dsSplore.clearData();
        	if(!take.isEmpty(this.fv_sOdrId))
        	{
        		this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        		// 시료조회
        		take.tranSelect(this, "Search", "splore.sploreSelect", "dsSearch", "dsSplore", "", "fnCallback");
        		// 시료인계현환 조회
        		this.fnSetGdsInst();

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
        	var nRow = this.dsSplore.rowposition;

        	if(nRow < 0)
        	{
        		take.alert(this, "info", "품목을 선택 후 작업하여 주십시오.");
        		return false;
        	}

        	var sOdrId = this.dsSplore.getColumn(nRow, "ODR_ID");
        	var sDetailGdsId = this.dsSplore.getColumn(nRow, "DETAIL_GDS_ID");
        	var sGdsNm = this.dsSplore.getColumn(nRow, "GDS_NM");
        	var sDetailGdsNm = this.dsSplore.getColumn(nRow, "DETAIL_GDS_NM");
        	var nPlanQy = this.dsSplore.getColumn(nRow, "PLAN_QY");

        	nRow += 1;
        	this.dsSplore.insertRow(nRow);

        	this.dsSplore.setColumn(nRow, "ODR_ID", sOdrId);
        	this.dsSplore.setColumn(nRow, "DETAIL_GDS_ID", sDetailGdsId);
        	this.dsSplore.setColumn(nRow, "GDS_NM", sGdsNm);
        	this.dsSplore.setColumn(nRow, "DETAIL_GDS_NM", sDetailGdsNm);
        	this.dsSplore.setColumn(nRow, "PLAN_QY", nPlanQy);
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
        	var objDataset = this.dsSplore;
            var arrChkRow = take.getChkRow(objDataset);

            if(arrChkRow.length == 0){
                alert("선택된 항목이 없습니다.");
                return;
            }

            var bRowDel = take.confirm(this, "question", "선택된 항목(들)을 삭제 하시겠습니까?");
            if (bRowDel){
                for(var i=0; i<arrChkRow.length; i++) {
                    objDataset.deleteRow(arrChkRow[i]);
                }
            }
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /**
         * 엑셀다운로드 버튼 클릭 이벤트
         */
        this.btnExcelDownload_onclick = function(obj,e)
        {
        	// 등록번호가 없는 데이터 삭제
        	for(var i = (this.dsSplore.rowcount -1); i >= 0; i--)
        	{
        		if(take.isEmpty(this.dsSplore.getColumn(i, "REG_SPLORE_NO")))
        		{
        			this.dsSplore.deleteRow(i);
        		}
        	}
        	//엑셀파일명 조회

        	gFn_getDbValue(this, function(rtnValue) {
        		gFnExcelDown (this, this.gridSploreExcel, rtnValue.resultData + " 시료등록");
        		this.fnSearch();
        	}, "Doore.selectExcelFileNm", "REG_SPLORE", this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID"));

        };

        /* 엑셀 업로드 클릭 이벤트 */
        this.btnExcelUpload_onclick = function(obj,e)
        {
        	gFnExcelUpload(this, this.dsExcelUpload, 2, this.fnExcelImport_onsuccess, this.fnExcelImport_onerror);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /*
        	excel 업로드 성공 후처리
        */
        this.fnExcelImport_onsuccess = function(obj,  e)
        {
        	var nCnt = this.dsExcelUpload.rowcount;
            this.dsSplore.clearData();
        	trace(this.dsExcelUpload.saveXML());
        	var strMapp =  gFnGetMappingString(this.gridSploreExcel);

        	for(var i = 0; i < nCnt; i++)
        	{
        		var nRow = this.dsSplore.addRow();
        		this.dsSplore.copyRow(nRow, this.dsExcelUpload, i, strMapp);
        		var sTrsfInstCd = gFnGetCodeId(this.dsTestInstCd, this.dsSplore.getColumn(nRow, "TRSF_INST_CD"));
        		var sCertInstCd = gFnGetCodeId(this.dsTestInstCd, this.dsSplore.getColumn(nRow, "CERT_INST_CD"));

        		this.dsSplore.setColumn(nRow, "TRSF_INST_CD", sTrsfInstCd);
        		this.dsSplore.setColumn(nRow, "CERT_INST_CD", sCertInstCd);

        		//날짜 형식 체크
        		var checkDate = this.dsSplore.getColumn(nRow, "CERT_YMD");
        		checkDate = gFnReplace(checkDate, /[^0-9]/g, "");
        		if(!take.isValidDate(checkDate)) this.dsSplore.setColumn(nRow, "CERT_YMD", "");
        		else this.dsSplore.setColumn(nRow, "CERT_YMD", checkDate);

        		checkDate = this.dsSplore.getColumn(nRow, "PURC_YMD");
        		checkDate = gFnReplace(checkDate, /[^0-9]/g, "");
        		if(!take.isValidDate(checkDate)) this.dsSplore.setColumn(nRow, "PURC_YMD", "");
        		else this.dsSplore.setColumn(nRow, "PURC_YMD", checkDate);

        		checkDate = this.dsSplore.getColumn(nRow, "TRSF_YMD");
        		checkDate = gFnReplace(checkDate, /[^0-9]/g, "");
        		if(!take.isValidDate(checkDate)) this.dsSplore.setColumn(nRow, "TRSF_YMD", "");
        		else this.dsSplore.setColumn(nRow, "TRSF_YMD", checkDate);
        	}

        	// 데이터셋 처리 : CODE_KEY가 있는 경우 update, 없는 경우 insert
        	this.dsSplore.set_updatecontrol(false);
        	for(var i = 0; i < this.dsSplore.rowcount; i++)
        	{
        		this.dsSplore.setRowType(i, "U");
        	}
        	this.gridSplore.selectRow(0);
        	this.dsSplore.set_updatecontrol(true);
        }

        /*
        	excel 업로드 실패 후처리
        */
        this.fnExcelImport_onerror = function(obj,  e)
        {
        	take.alert(this, "info", "Excel 업로드에 실패 하였습니다.");
        }

        /* 품목시험가능 기관 조회  */
        this.fnSetGdsInst = function()
        {
        	var sTestInstCd = "";

        	this.dsInstCd.clearData();
        	this.dsOdrGdsInst.clear();
        	this.fv_sOdrId = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID");
        	this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        	take.tranSelect(this, "SearchInstList", "safety.odrGdsInstListForGrid", "dsSearch", "dsInstCd", "",
        		function()
        		{
        			// 데이터셋 생성
        			this.dsOdrGdsInst.addColumn( "ODR_ID", "string" );
        			this.dsOdrGdsInst.addColumn( "DETAIL_GDS_ID", "string" );
        			this.dsOdrGdsInst.addColumn( "CERT_KND_NM", "string" );			// 인증종류
        			this.dsOdrGdsInst.addColumn( "GDS_CD", "string" );				// 품목코드
        			this.dsOdrGdsInst.addColumn( "GDS_NM", "string" );				// 품목명
        			this.dsOdrGdsInst.addColumn( "GDS_PLAN_QY", "string" );			// 품목계획수량
        			this.dsOdrGdsInst.addColumn( "DETAIL_GDS_NM", "string" );		// 세부품목명
        			this.dsOdrGdsInst.addColumn( "POSBL_YN", "string" );			// 기관검토
        			this.dsOdrGdsInst.addColumn( "GOAL_QY", "string" );				// 세부품목 목표수량
        			this.dsOdrGdsInst.addColumn( "PLAN_QY", "string" );				// 세부품목 계획수량
        			for(var i = 0; i < this.dsInstCd.rowcount; i++)
        			{
        				sTestInstCol = this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_PLAN_QY";
        				this.dsOdrGdsInst.addColumn( sTestInstCol, "string" );		// 기관계획수량
        				sTestInstCol = this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_TRSF_QY";
        				this.dsOdrGdsInst.addColumn( sTestInstCol, "string" );		// 기관인계수량

        			}
        			// 그리드 format 세팅
        			var sAddColStr = "";
        			var sAddHeadStr1 = "";
        			var sAddHeadStr2 = "";
        			var sAddBodyStr = "";
        			var sAddSummStr = "";
        			var nStartCol = 6;

        			var sCol = 	'<Columns>' +
        						'<Column size="120"/>' +
        						'<Column size="200"/>' +
        						'<Column size="50"/>' +
        						'<Column size="50"/>' +
        						'<Column size="200"/>' +
        						'<Column size="50"/>' +
        						'sAddColStr' +
        						'</Columns>';

        			var sRow =	'<Rows>' +
        						'<Row band="head" size="32"/>' +
        						'<Row band="head" size="24"/>' +
        						'<Row band="head" size="24"/>' +
        						'<Row band="body" size="30"/>' +
        						'<Row band="summ" size="24"/>' +
        						'</Rows>';

        			var sHead = '<Band id="head">' +
        						'<Cell col="0" row="0" rowspan="3" text="인증종류"/>' +
        						'<Cell col="1" row="0" rowspan="3" text="폼목명"/>' +
        						'<Cell col="2" row="0" rowspan="3" text="우선&#13;&#10;계획&#13;&#10;인계"/>' +
        						'<Cell col="3" row="0" rowspan="3" text="품목&#13;&#10;계획&#13;&#10;수량"/>' +
        						'<Cell col="4" row="0" rowspan="3" text="세부품목명"/>' +
        						'<Cell col="5" row="0" rowspan="3" text="계획&#13;&#10;계획&#13;&#10;수량"/>' +
        						'sAddHeadStr1' +
        						'sAddHeadStr2' +
        						'</Band>';

        			var sBody = '<Band id="body">' +
        						'<Cell col="0" row="0" text="bind:CERT_KND_NM" textAlign="left" suppress="1"/>' +
        						'<Cell col="1" row="0" text="bind:GDS_NM" textAlign="left" suppress="2"/>' +
        						'<Cell col="2" row="0" text="bind:PRIOR_TRSF" displaytype="checkboxcontrol" checkboxfalsevalue="N" checkboxtruevalue="Y" suppress="3"/>' +
        						'<Cell col="3" row="0" text="bind:GDS_PLAN_QY" textAlign="right" suppress="4"/>' +
        						'<Cell col="4" row="0" text="bind:DETAIL_GDS_NM" textAlign="left"/>' +
        						'<Cell col="5" row="0" edittype="normal" text="bind:PLAN_QY" textAlign="right"/>' +
        						'sAddBodyStr' +
        						'</Band>';

        			var sSumm = '<Band id="summary">' +
        						'<Cell col="0" row="0" colspan="3"/>' +
        						'<Cell col="4" row="0" text="expr:dataset.getSum(&quot;GOAL_QY==null?0:nexacro.toNumber(GOAL_QY)&quot;,&quot;GOAL_QY&quot;)"/>' +
        						'<Cell col="5" row="0"/>' +
        						'<Cell col="6" row="0" text="expr:dataset.getSum(&quot;GOAL_QY==null?0:nexacro.toNumber(GOAL_QY)&quot;,&quot;GOAL_QY&quot;)"/>';

        			var nHeadSpan = this.dsInstCd.rowcount * 3;
        			for(var i = 0; i < this.dsInstCd.rowcount; i++)
        			{
        				sAddColStr += '<Column size="50"/>';	// 계획
        				sAddColStr += '<Column size="50"/>';	// 구입
        				sAddColStr += '<Column size="50"/>';	// 인계
        				gFnTrace("!");
        				if(i == 0) sAddHeadStr1 += '<Cell col="' + nStartCol + '" row="0" colspan="' + nHeadSpan + '" text="시험기관"/>';
        				var sTestInstCd = this.dsInstCd.getColumn(i, "TEST_INST_CD");
        				var sTestInstNm = this.dsInstCd.getColumn(i, "CODE_NM");
        				sAddHeadStr1 += '<Cell col="' + (nStartCol + (i * 3)) + '" row="1" colspan="3" text="' + sTestInstNm + '"/>';
        				gFnTrace("2");
        				sAddHeadStr2 += '<Cell col="' + (nStartCol + (i * 3)) + '" row="2" text="계획"/>';
        				sAddHeadStr2 += '<Cell col="' + (nStartCol + (i * 3) + 1) + '" row="2" text="구입"/>';
        				sAddHeadStr2 += '<Cell col="' + (nStartCol + (i * 3) + 2) + '" row="2" text="인계"/>';
        				gFnTrace("4");
        				sAddBodyStr += '<Cell col="' + (nStartCol + (i * 3)) + '" text="bind:' + sTestInstCd + '_PLAN_QY" textAlign="right" displaytype="number" edittype="none"/>';
        				sAddBodyStr += '<Cell col="' + (nStartCol + (i * 3) + 1) + '" text="bind:' + sTestInstCd + '_PURC_QY" textAlign="right" displaytype="number" edittype="none"/>';
        				sAddBodyStr += '<Cell col="' + (nStartCol + (i * 3) + 2) + '" text="bind:' + sTestInstCd + '_TRSF_QY" textAlign="right" displaytype="number" edittype="none"/>';
        				gFnTrace("5");
        				sSumm += '<Cell col="' + (nStartCol + (i * 3)) + '" row="0" text="expr:dataset.getSum(&quot;'+ sTestInstCd + "_PLAN_QY" + '==null?0:nexacro.toNumber('+ sTestInstCd + "_PLAN_QY" + ')&quot;,&quot;'+ sTestInstCd + "_PLAN_QY" + '&quot;)"/>';
        				sSumm += '<Cell col="' + (nStartCol + (i * 3) + 1) + '" row="0" text="expr:dataset.getSum(&quot;'+ sTestInstCd + "_PURC_QY" + '==null?0:nexacro.toNumber('+ sTestInstCd + "_PURC_QY" + ')&quot;,&quot;'+ sTestInstCd + "_PURC_QY" + '&quot;)"/>';
        				sSumm += '<Cell col="' + (nStartCol + (i * 3) + 2) + '" row="0" text="expr:dataset.getSum(&quot;'+ sTestInstCd + "_TRSF_QY" + '==null?0:nexacro.toNumber('+ sTestInstCd + "_TRSF_QY" + ')&quot;,&quot;'+ sTestInstCd + "_TRSF_QY" + '&quot;)"/>';
        			}

        			sCol = sCol.replace("sAddColStr", sAddColStr);
        			sHead = sHead.replace("sAddHeadStr1", sAddHeadStr1);
        			sHead = sHead.replace("sAddHeadStr2", sAddHeadStr2);
        			sBody = sBody.replace("sAddBodyStr", sAddBodyStr);
        			sSumm += '</Band>';
        			trace("<Formats><Format id='default'>" + sCol + sRow + sHead + sBody + sSumm + "</Format></Formats>");
        			this.gridGdsInst.set_formats("<Formats><Format id='default'>" + sCol + sRow + sHead + sBody + sSumm + "</Format></Formats>");

        			trace(this.gridGdsInst.getCurFormatString());
        			trace(this.Grid00.getCurFormatString());
        		}
        	);
        }


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
            this.btnSpliter.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.gridSplore.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.gridGdsInst.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.btnAddGds.addEventHandler("onclick",this.divDetail_btnAddGds_onclick,this);
            this.btnDownExcel.addEventHandler("onclick",this.btnExcelDownload_onclick,this);
            this.btnUploadExcel.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.gridSploreExcel.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.dsOdrGdsInst.addEventHandler("oncolumnchanged",this.dsOdrGdsInst_oncolumnchanged,this);
        };
        this.loadIncludeScript("SPL010S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
