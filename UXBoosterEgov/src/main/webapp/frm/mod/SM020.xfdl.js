(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SM020");
            this.set_titletext("설문조사등록");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1060,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANONNY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurveyItemInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NECESSARY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DUPL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TEMP_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLegend", this);
            obj._setContents("<ColumnInfo><Column id=\"LEGEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLegendTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"LEGEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotiTarget", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static08",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","20",null,"180","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleT","10","36","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("설문제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","108","36",null,"31","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDateT","10","66","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("설문기간");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static02","108","66",null,"31","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtTitle","115","41",null,"21","20",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_maxlength("33");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calRegForm","115","71","90","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static14","205","71","15","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calRegTo","220","71","90","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTargetT","10","96","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("설문대상자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","108","96",null,"31","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtTarget","115","101","141","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSchTarget","266","101","46","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("찾기");
            obj.set_cssclass("btn_WF_search03");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staOptionT","10","staTargetT:-1","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("옵션 설정");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static04","108","Static03:-1",null,"31","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkPopYn","115","132","104","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("설문 팝업여부");
            obj.set_readonly("false");
            obj.set_value("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkAnonnyYn","chkPopYn:10","132","104","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("설문 익명여부");
            obj.set_value("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkOpenYn","chkAnonnyYn:10","132","104","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("결과 공개여부");
            obj.set_value("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divTitle","20","20",null,"27","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","430","21",null,null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_text("설문조사정보");
            obj.set_cssclass("sta_WF_title02");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","46","25","10",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("3");
            obj.set_text("목록");
            obj.set_visible("true");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btnCompl",null,"0","66","25","btnList:3",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("4");
            obj.set_text("작성완료");
            obj.set_visible("true");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","66","25","btnCompl:3",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("2");
            obj.set_text("임시저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_save02");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","46","25","btnSave:3",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_cancel02");
            this.divTitle.addChild(obj.name, obj);

            obj = new Div("divDetailItem","20","divDetail:25",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divLine","30","215",null,"1","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("2px solid #e8e9ec,0px solid,0px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddItem",null,"190","84","21","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("문항추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","190","430","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("문항정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTitle.form
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetailItem.form
            obj = new Layout("default","",0,0,this.divDetailItem.form,function(p){});
            this.divDetailItem.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLine
            obj = new Layout("default","",0,0,this.divLine.form,function(p){});
            this.divLine.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1060,890,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divDetail.form.edtTitle","value","dsSurvey","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.calRegForm","value","dsSurvey","SURVEY_START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.calRegTo","value","dsSurvey","SURVEY_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.chkPopYn","value","dsSurvey","POPUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.chkAnonnyYn","value","dsSurvey","ANONNY_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.chkOpenYn","value","dsSurvey","OPEN_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SM020.xfdl", function() {

        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    sm > SM020
        *  @FileName    SM020.xfdl
        *  @Creator     김진표
        *  @CreateDate  2021.03.31
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2021.03.31      김진표             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sParentProjectCd   = nexacro.getApplication().av_sProjectCd;
        this.fv_sParentSurveySeq   = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.SM020_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInit();
           }
        }

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
            if (take.nvl(sTranId, "")=="") sTranId = "SurveyDetailSearch";

        	var arrNamespace = ["SurveyManagementMapper.surveyInfoList"
        						, "SurveyManagementMapper.surveyItemInfoList"
        						, "SurveyManagementMapper.surveyLegendInfoList"
        						, "SurveyManagementMapper.surveyTargetInfoList"];
        	var arrOutDs = ["dsSurvey", "dsSurveyItemInfo", "dsLegend", "dsNotiTarget"];

        	this.dsSearch.clearData();
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "PROJECT_CD", this.fv_sParentProjectCd);
        	this.dsSearch.setColumn(nRow, "SURVEY_SEQ", this.fv_sParentSurveySeq);

        	take.tranSelect
        	(
        		this,
        		"SurveyDetailSearch",
        		arrNamespace,
        		["dsSearch"],
        		arrOutDs,
        		"",
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
            if (take.nvl(sTranId, "")=="") sTranId = "SurveySave";

        	if( !takeval.check(this, "Save") ){
        		return false;
        	}

        	//신규 문항 로우타입 수정
        	this.dsSurveyItemInfo.set_updatecontrol(false);
        	for( var i=0; i<this.dsSurveyItemInfo.rowcount; i++ )
        	{
        		var sItemSeq = take.nvl(this.dsSurveyItemInfo.getColumn(i, "SURVEY_ITEM_SEQ"), "");
        		if( "" == sItemSeq )
        		{
        			this.dsSurveyItemInfo.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        	}
        	this.dsSurveyItemInfo.set_updatecontrol(true);

        	//신규 보기 로우타입 수정
        	this.dsLegend.set_updatecontrol(false);
        	for( var i=0; i<this.dsLegend.rowcount; i++ )
        	{
        		var sLegSeq = take.nvl(this.dsLegend.getColumn(i, "LEGEND_SEQ"), "");
        		if( "" == sLegSeq )
        		{
        			this.dsLegend.setRowType(i, Dataset.ROWTYPE_INSERT);
        		}
        	}
        	this.dsLegend.set_updatecontrol(true);

        	var sCalFrom = this.divDetail.form.calRegForm.value;
        	sCalFrom = sCalFrom.replace(/-/gi, "");
        	var sCalTo = this.divDetail.form.calRegTo.value;
        	sCalTo = sCalTo.replace(/-/gi, "");

        	var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        	if( !bFromTo ){
        		take.alert(this, "", "설문기간이 잘못되었습니다.");
        		return;
        	}

        	switch(sTranId) {
        	case "SurveySave":	// 설문조사 저장

        		take.transaction
        		(
        			this,
        			"SurveySave",
        			"SVC_LOC::sm/surveySave.do",
        			"dsSurvey=dsSurvey:U dsSurveyItemInfo=dsSurveyItemInfo:U dsLegend=dsLegend:U dsNotiTarget=dsNotiTarget:U",
        			"",
        			"sProjectCd='"+ this.fv_sParentProjectCd + "' sSurveySeq='"+ this.fv_sParentSurveySeq + "'",
        			"fnCallback"
        		);
        		break;
        	}
        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "";
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        // btnCancel_onclick : X 버튼 클릭 __ 팝업 창 닫기
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	// 조회
        	var objProgInfo = take.getProgInfo(this);
        	var objUserParam = objProgInfo.UserParam;
        	this.fv_sParentSurveySeq = take.nvl(objUserParam.sSurveySeq, "");

        	this.dsSurvey.clearData();
        	var nRow = this.dsSurvey.addRow();
        	this.dsSurvey.setColumn(nRow, "PROJECT_CD", this.fv_sParentProjectCd);
        	this.dsSurvey.setColumn(nRow, "OPEN_YN", "Y");

        	// 최초 저장 벨리데이션 추가
        	takeval.add(this, "Save", this.divDetail.form.edtTitle, this.divDetail.form.staTitleT.text, "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.calRegForm, "설문기간 시작일", "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.calRegTo, "설문기간 종료일", "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divDetail.form.edtTarget, this.divDetail.form.staTargetT.text, "value", true, "string", "", "");

        	if( "" != this.fv_sParentSurveySeq )
        	{
        		this.fnSearch("SurveyDetailSearch");
        	}
        }

        /**
         * fnSetItemCompInit : 문항 초기 정보 동적 생성
         * @example this.fnSetItemCompInit();
         */
        this.fnSetItemCompInit = function ()
        {
        	for( var i=0; i<this.dsSurveyItemInfo.rowcount; i++ )
        	{
        		this.fnSetItemComp(i, "INIT");
        	}
        }

        /**
         * fnSetItemComp : 문항정보 동적 생성
         * @example this.fnSetItemComp();
         */
        this.fnSetItemComp = function ( nRow, sGbn )
        {
        	var nDivLeft = 10;
        	var nDivTop = 0;
        	var nDivWidth = 10;
        	var nDivHeight = 100;
        	var nDivRight = 10;

        	//div생성
        	var objDiv = new Div();
        	var sDivNm = "divItem"+nRow;

        	if( "MOD" == sGbn )
        	{
        		var objItem = this.divDetailItem.form.components[sDivNm];
        		var objItemComp = objItem.form.components;
        		var arrCompId = new Array();

        		for( var i=0; i<objItemComp.length; i++ )
        		{
        			var sCompId = objItemComp[i].id;
        			arrCompId.push(sCompId);
        		}

        		for( var j=0; j<arrCompId.length; j++ )
        		{
        			objItem.form.removeChild(arrCompId[j]);
        		}

        		this.removeChild("dsLegendTemp"+nRow);

        		objDiv = objItem;
        	}
        	else
        	{
        		if( nRow > 0 )
        		{
        			nDivTop = "divItem"+(nRow-1) + ":5";
        		}

        		objDiv.init(sDivNm, nDivLeft, nDivTop, null, nDivHeight, nDivRight, null);

        		this.divDetailItem.form.addChild(sDivNm, objDiv);
        		objDiv.show();
        		objDiv.set_border("0px solid,0px solid,2px solid #e8e9ec,0px solid");
        	}

        	//staticTitle생성
        	var sTitle = this.dsSurveyItemInfo.getColumn(nRow, "ITEM_TITLE");
        	var objStatic = new Static();
        	var sTitleNm = "staTitle"+nRow;
        	var nTitleTop = 10;
        	var nTitleHeight = 30;
        	objStatic.init(sTitleNm, 10, nTitleTop, 420, nTitleHeight, null, null);

        	objDiv.addChild(sTitleNm, objStatic);
        	objStatic.show();
        	objStatic.set_text( (nRow+1) + ". " + sTitle);

        	var sItemType = this.dsSurveyItemInfo.getColumn(nRow, "ITEM_TYPE");
        	var sSurveyItemSeq = this.dsSurveyItemInfo.getColumn(nRow, "SURVEY_ITEM_SEQ");

        	if( "01" == sItemType )//radio보기영역 생성(객관식일경우)
        	{
        		if( "INIT" == sGbn )
        		{
        			this.dsLegendTemp.clearData();
        			for( var i=0; i<this.dsLegend.rowcount; i++ )
        			{
        				var sSurveyItemSeq2 = this.dsLegend.getColumn(i, "SURVEY_ITEM_SEQ");
        				if( sSurveyItemSeq == sSurveyItemSeq2 )
        				{
        					var nTempRow = this.dsLegendTemp.addRow();
        					this.dsLegendTemp.copyRow(nTempRow, this.dsLegend, i);
        				}
        			}
        		}

        		var sDatasetId = "dsLegendTemp"+nRow;
        		var objLegendDs = new Dataset;
        		objLegendDs.set_name(sDatasetId);
        		this.addChild(sDatasetId, objLegendDs);

        		objLegendDs.set_enableevent(false);
        		var nColId, sColInfo,sColSize,sColType;
        		var objDs = this.dsLegendTemp;
        		var nColCnt = this.dsLegendTemp.getColCount();
        		for(var i=0; i<nColCnt; i++)
        		{
        			nColId	 = objDs.getColID(i);
        			sColInfo = objDs.getColumnInfo(i);
        			sColSize = sColInfo.size;
        			sColType = sColInfo.type;
        			objLegendDs.addColumn(nColId,sColType,sColSize);
        		}
        		objLegendDs.set_enableevent(true);
        		objLegendDs.appendData(this.dsLegendTemp);

        		var sEtcYn = this.dsSurveyItemInfo.getColumn(nRow, "LEGEND_ETC_YN");
        		var sItemSeq = this.dsSurveyItemInfo.getColumn(nRow, "SURVEY_ITEM_SEQ");
        // 		if( "Y" == sEtcYn && "NEW" == sGbn )
        // 		{
        // 			var nLegendRow = this.dsLegend.addRow();
        // 			this.dsLegend.setColumn(nLegendRow, "LEGEND_NM", "기타의견");
        // 			this.dsLegend.setColumn(nLegendRow, "SURVEY_ITEM_SEQ", sItemSeq);
        //
        // 			var nLegendTempRow = objLegendDs.addRow();
        // 			objLegendDs.copyRow(nLegendTempRow, this.dsLegend, nLegendRow);
        // 		}

        		var nChkLeft = 10;
        		var nChkRight = 50;
        		var nChkHeght = 25;
         		var nChkInterval = 25;
        		for( var i=0; i<objLegendDs.rowcount; i++ )
        		{
        			var objCheckBox = new CheckBox();
        			var sChkNm = "chkLegend" + nRow + "_" + i;
        			var sChkTop = ( 0 == i ) ? sTitleNm + ":5" : "chkLegend" + nRow + "_" + (i-1) + ":5";
        			objCheckBox.init(sChkNm, nChkLeft, sChkTop, null, nChkHeght, nChkRight, null);
        			objDiv.addChild(sChkNm, objCheckBox);
        			objCheckBox.show();

        			var sLegendNm = objLegendDs.getColumn(i, "LEGEND_NM");
        			objCheckBox.set_text(sLegendNm);
        			objCheckBox.set_falsevalue("N");
        			objCheckBox.set_truevalue("Y");
        			objCheckBox.set_value("N");

        			objCheckBox.addEventHandler( "onclick", this.chkLegend_onclick, this);
        		}


        // 		var objRadio = new Radio();
        // 		var sRadioNm = "rdoLegend"+nRow;
        // 		var nRadioHeght = 45;
        // 		var nRadioInterval = 25;
        // 		if( objLegendDs.rowcount > 2 )
        // 		{
        // 			nRadioHeght = nRadioHeght + ((objLegendDs.rowcount -2) * nRadioInterval);
        // 		}
        //
        // 		objRadio.init(sRadioNm, 10, sTitleNm + ":5", 689, nRadioHeght, null, null);
        // 		objDiv.addChild(sRadioNm, objRadio);
        // 		objRadio.show();
        //
        // 		objRadio.set_innerdataset(objLegendDs);
        // 		objRadio.set_codecolumn( "LEGEND_SEQ" );
        // 		objRadio.set_datacolumn( "LEGEND_NM" );
        // 		objRadio.set_direction( "horizontal" );

        		if( "Y" == sEtcYn )
        		{
        			//editbox 기타의견 생성
        			var sLastChkNm = "chkLegend" + nRow + "_" + (objLegendDs.rowcount-2);
        			var nEtcTop = sLastChkNm + ":5";//(( nTitleTop + nTitleHeight + 5 ) + nRadioHeght) - nChkInterval;
        			var objEtcEdit = new Edit();
        			var sEtcEditNm = "edtEtcAnswer"+nRow;
        			objEtcEdit.init(sEtcEditNm, 100, nEtcTop, null, 25, 100, null);
        			objDiv.addChild(sEtcEditNm, objEtcEdit);
        			objEtcEdit.show();
        		}

        		var nRadioHeght = (nChkHeght * objLegendDs.rowcount) + (5*(objLegendDs.rowcount-1))
         		nDivHeight = (nDivHeight + nRadioHeght) - 30;
         		objDiv.set_height(nDivHeight);
        	}
        	else //주관식
        	{
        		//staticTitle생성
        		var objStatic01 = new Static();
        		var sTitleNm01 = "staTitle01"+nRow;
        		objStatic01.init(sTitleNm01, 20, sTitleNm + ":5", 50, 30, null, null);
        		objDiv.addChild(sTitleNm01, objStatic01);
        		objStatic01.show();
        		objStatic01.set_text( "답변" );

        		//editbox생성
        		var objEdit = new Edit();
        		var sEditNm = "edtAnswer"+nRow;
        		objEdit.init(sEditNm, sTitleNm01 + ":10", sTitleNm + ":10", null, 30, 100, null);
        		objDiv.addChild(sEditNm, objEdit);
        		objEdit.show();

        		objDiv.set_height(nDivHeight);
        	}

        	//수정버튼생성
        	var objButton01 = new Button();
        	var sBtnNm01 = "btnMod"+nRow;
        	objButton01.init(sBtnNm01, null, 10, 46, 25, 10, null);

        	objDiv.addChild(sBtnNm01, objButton01);
        	objButton01.show();
        	objButton01.set_text( "수정" );

        	objButton01.addEventHandler( "onclick", this.btnMod_onclick, this);

        	//삭제버튼생성
        	var objButton02 = new Button();
        	var sBtnNm02 = "btnDel"+nRow;
        	objButton02.init(sBtnNm02, null, 40, 46, 25, 10, null);

        	objDiv.addChild(sBtnNm02, objButton02);
        	objButton02.show();
        	objButton02.set_text( "삭제" );

        	objButton02.addEventHandler( "onclick", this.btnDel_onclick, this);

        	this.divDetailItem.form.resetScroll();
        };

        this.fnGoList = function(){
        	var sParam = {};
        	var sUrl = "M0094";
        	take.mdiOpenMenu(this, sUrl, sParam, "", true);

        	var objProg = take.getProgInfo(this);
        	take.mdiClose(this, objProg.ProgId);
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
                case "SurveyDetailSearch" : //조회 콜백
        			this.fnSetItemCompInit();

        			var sTargets = "";
        			for( var i=0; i<this.dsNotiTarget.rowcount; i++ )
        			{
        				var sTargetNm = this.dsNotiTarget.getColumn(i, "TARGET_NM");
        				sTargets += "," + sTargetNm;
        			}
        			this.divDetail.form.edtTarget.set_value(sTargets.substring(1));

                    break;
        		case "SurveySave" : //저장 콜백
        			this.fnGoList();

        			break;
                default :
                    break;
            }
        }

        // 문항추가 버튼 클릭
        this.divDetail_btnAddItem_onclick = function(obj,e)
        {
        	var AgrKey = {
        		sProjectCd:this.fv_sParentProjectCd, 		// 최상위 부모폼 프로젝트 코드
        		sSurveySeq:this.fv_sParentSurveySeq,		// 최상위 부모폼 타임라인 일련번호
        	};
        	take.openPopup(this, "SM020P01", "frm::mod/SM020P01.xfdl", AgrKey, "",
        		function(){
        			// 콜백
        		},
        	false);
        };

        // 목록 버튼 클릭
        this.divTitle_btnList_onclick = function(obj,e)
        {
        	this.fnGoList();
        };

        // 임시저장 버튼 클릭
        this.btnSave_onclick = function(obj,e)
        {
        	this.dsSurvey.setColumn(0, "SURVEY_STATUS", "01"); // 임시저장
        	this.fnSave("SurveySave");
        };

        // 삭제 버튼 클릭
        this.btnDelete_onclick = function(obj,e)
        {
        	take.transaction
        		(
        			this,
        			"SurveyDelete",
        			"SVC_LOC::sm/surveyDelete.do",
        			"",
        			"",
        			"sProjectCd='"+ this.fv_sParentProjectCd + "' sSurveySeq='"+ this.fv_sParentSurveySeq + "'",
        			"fnCallback"
        		);
        };

        // 설문대상자 찾기 버튼 클릭
        this.divDetail_btnSchTarget_onclick = function(obj,e)
        {
        	var arrParam = {};
        	take.openPopup(this, "CM050P01", "frm::mod/CM050P01.xfdl", arrParam, "resizable=false", "fnPopCallback", false);
        };

        this.fnPopCallback = function(sPopId, sRtn)
        {
            switch(sPopId)
            {
                case "CM050P01" : // 공지대상추가 콜백
        			if( "" == take.nvl(sRtn, "") ) return false;

        			this.dsNotiTarget.deleteAll();
        			this.divDetail.form.edtTarget.set_value("");

        			var arrTarget = sRtn.split("::");
        			var nTargetCnt = arrTarget.length;
        			var sPopTargets = take.nvl(this.divDetail.form.edtTarget.value, "");

        			for( var i=0; i<nTargetCnt; i++ )
        			{
        				var arrInfo = arrTarget[i].split(",");
        				var sTargetCd = arrInfo[0];
        				var sTargetNm = arrInfo[1];
        				var sTargetType = arrInfo[2];

        				if( i > 0 ) sPopTargets += ",";

        				sPopTargets += sTargetNm;

        				var nRow = this.dsNotiTarget.addRow();
        				this.dsNotiTarget.setColumn(nRow, "TARGET_CD", sTargetCd);
        				this.dsNotiTarget.setColumn(nRow, "TARGET_NM", sTargetNm);
        				this.dsNotiTarget.setColumn(nRow, "TARGET_TYPE", sTargetType);
        				this.dsNotiTarget.setColumn(nRow, "PROJECT_CD", this.fv_sParentProjectCd);
        				this.dsNotiTarget.setColumn(nRow, "SURVEY_SEQ", this.fv_sParentSurveySeq);
        			}

        			this.divDetail.form.edtTarget.set_value(sPopTargets);

        			trace(this.dsTarget.saveXML());

                    break;
                default :
                    break;
            }
        };

        // 문항 수정 버튼 클릭
        this.btnMod_onclick = function(obj,e){
        	var nRow = parseInt( obj.name.replace("btnMod", "") );

        	var sSurveyItemSeq = take.nvl(this.dsSurveyItemInfo.getColumn(nRow, "SURVEY_ITEM_SEQ"), "");
        	var sSurveyItemTempSeq = this.dsSurveyItemInfo.getColumn(nRow, "ITEM_TEMP_SEQ");
        	sSurveyItemSeq = ( "" == sSurveyItemSeq ) ? sSurveyItemTempSeq : sSurveyItemSeq;

        	var AgrKey = {
        		sProjectCd:this.fv_sParentProjectCd, 		// 최상위 부모폼 프로젝트 코드
        		sSurveySeq:this.fv_sParentSurveySeq,		// 최상위 부모폼 설문 일련번호
        		sSurveyItemSeq:sSurveyItemSeq,				// 부모폼 설문 문항 일련번호
        	};
        	take.openPopup(this, "SM020P01", "frm::mod/SM020P01.xfdl", AgrKey, "",
        		function(){
        			// 콜백
        		},
        	false);
        };

        // 문항 삭제 버튼 클릭
        this.btnDel_onclick = function(obj,e){
        	var nRow = parseInt( obj.name.replace("btnDel", "") );
        	var sSurveyItemSeq = this.dsSurveyItemInfo.getColumn(nRow, "SURVEY_ITEM_SEQ");

        	this.dsSurveyItemInfo.deleteRow(nRow);

        	var arrDelRows = take.getFindRows(this.dsLegend, "SURVEY_ITEM_SEQ", sSurveyItemSeq);
        	this.dsLegend.deleteMultiRows(arrDelRows);

        	this.divDetailItem.form.removeChild("divItem"+nRow);
        	this.removeChild("dsLegendTemp"+nRow);
        };

        // 문항 보기 체크박스 클릭
        this.chkLegend_onclick = function(obj,e){
        	var sId = obj.name.replace("chkLegend", "");
        	var arrId = sId.split("_");
        	var nRow1 = parseInt(arrId[0]);
        	var nRow2 = parseInt(arrId[1]);

        	var sDuplYn = this.dsSurveyItemInfo.getColumn(nRow1, "DUPL_YN");

        	if( "Y" != sDuplYn ) //복수선택여부 Y일경우
        	{
        		var sVal = obj.value;
        		if( "Y" == sVal )
        		{
        			var objDs = this.objects["dsLegendTemp"+nRow1];
        			for( var i=0; i<objDs.rowcount; i++ )
        			{
        				if( i != nRow2 )
        				{
        					var objDivItem = this.divDetailItem.form.components["divItem" + nRow1];
        					var objChk = objDivItem.form.components["chkLegend" + nRow1 + "_" + i];

        					objChk.set_value("N");
        				}

        			}
        		}
        	}

        }

        //작성완료 버튼 클릭
        this.divTitle_btnCompl_onclick = function(obj,e)
        {
        	if(this.dsSurveyItemInfo.rowcount <= 0)
        	{
        		take.alert(this, "Info", "설문 문항은 1개이상 필수입니다.");
        		return false;
        	}

        	this.dsSurvey.setColumn(0, "SURVEY_STATUS", "02");
        	this.fnSave("SurveySave");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SM020_onload,this);
            this.divDetail.form.edtTitle.addEventHandler("onkeyup",this.divTimeLineReg_edtTitle_onkeyup,this);
            this.divDetail.form.btnSchTarget.addEventHandler("onclick",this.divDetail_btnSchTarget_onclick,this);
            this.divTitle.form.btnList.addEventHandler("onclick",this.divTitle_btnList_onclick,this);
            this.divTitle.form.btnCompl.addEventHandler("onclick",this.divTitle_btnCompl_onclick,this);
            this.divTitle.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divTitle.form.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnAddItem.addEventHandler("onclick",this.divDetail_btnAddItem_onclick,this);
        };
        this.loadIncludeScript("SM020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
