(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SM030P01");
            this.set_titletext("설문조사상세결과");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1060,690);
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


            obj = new Dataset("dsNotiTarget", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ENC_USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ANONNY_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_LEGEND_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM AS REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM AS MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLegendTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"LEGEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_PER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSumResult1", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSumResult2", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_LEGEND_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("divDetail","20","20",null,"100","20",null,null,null,null,null,this);
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
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calRegForm","115","71","90","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            obj.set_readonly("true");
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
            obj.set_readonly("true");
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
            obj.set_taborder("0");
            obj.set_text("설문조사정보");
            obj.set_cssclass("sta_WF_title02");
            this.divTitle.addChild(obj.name, obj);

            obj = new Button("btnList",null,"0","0","25","10",null,null,null,null,null,this.divTitle.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_visible("false");
            this.divTitle.addChild(obj.name, obj);

            obj = new Div("divDetailItem","20","divDetail:45",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTotal","30","divDetail:10","430","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("총 응답률");
            this.addChild(obj.name, obj);

            obj = new Div("divLine","30","staTotal:5",null,"1","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("2px solid #e8e9ec,0px solid,0px solid");
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
            obj = new Layout("default","",1060,690,this,function(p){});
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SM030P01.xfdl", function() {
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
        take.loadJs(this, "sha512", "./_extlib_/Extend/sha512.js");
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_dsUesrInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sParentProjectCd   = nexacro.getApplication().av_sProjectCd;
        this.fv_sParentSurveySeq   = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.SM030_onload = function(obj, e)
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
        	this.dsSearch.setColumn(nRow, "ANONNY_YN", this.parent.sAnonnyYn);

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
        	var objProgInfo = take.getProgInfo(this);
        	var objUserParam = objProgInfo.UserParam;

        	var sLoginUserCd = this.fv_dsUesrInfo.getColumn(0, "USER_CD");
        	var sRegUserCd = this.parent.sRegCd; //objUserParam.sRegCd;

        	this.resetScroll();

        	// 조회
        	this.fv_sParentSurveySeq = take.nvl(this.parent.sSurveySeq, "");	//take.nvl(objUserParam.sSurveySeq, "");
        	this.fnSearch("SurveyDetailSearch");

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

        	if( nRow > 0 )
        	{
        		nDivTop = "divItem"+(nRow-1) + ":5";
        	}

        	objDiv.init(sDivNm, nDivLeft, nDivTop, null, nDivHeight, nDivRight, null);

        	this.divDetailItem.form.addChild(sDivNm, objDiv);
        	objDiv.show();
        	objDiv.set_border("0px solid,0px solid,2px solid #e8e9ec,0px solid");

        	//staticTitle생성
        	var sTitle = this.dsSurveyItemInfo.getColumn(nRow, "ITEM_TITLE");
        	var objStatic = new Static();
        	var sTitleNm = "staTitle"+nRow;
        	var nTitleTop = 10;
        	var nTitleHeight = 30;
        	objStatic.init(sTitleNm, 10, nTitleTop, 420, nTitleHeight, null, null);

        	objDiv.addChild(sTitleNm, objStatic);
        	objStatic.show();
        	//objStatic.set_text( (nRow+1) + ". " + sTitle);


        	var sItemType = this.dsSurveyItemInfo.getColumn(nRow, "ITEM_TYPE");
        	var sSurveyItemSeq = this.dsSurveyItemInfo.getColumn(nRow, "SURVEY_ITEM_SEQ");
        	var sNecessaryYn = this.dsSurveyItemInfo.getColumn(nRow, "NECESSARY_YN");
        	var sDuplYn = this.dsSurveyItemInfo.getColumn(nRow, "DUPL_YN");
        	var sTitleTxt = (nRow+1) + ". " + sTitle;

        	if( "Y" == sNecessaryYn && "Y" == sDuplYn )
        	{
        		sTitleTxt = sTitleTxt + " (필수, 복수선택 가능)";
        	}
        	else if( "Y" == sNecessaryYn && "Y" != sDuplYn )
        	{
        		sTitleTxt = sTitleTxt + " (필수)";
        	}
        	else if( "Y" != sNecessaryYn && "Y" == sDuplYn )
        	{
        		sTitleTxt = sTitleTxt + " (복수선택 가능)";
        	}
        	objStatic.set_text( sTitleTxt );
        	objStatic.set_font("bold 14px NanumGothic");

        	if( "01" == sItemType )//radio보기영역 생성(객관식일경우)
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

        		var nChkLeft = 10;
        		var nChkRight = 50;
        		var nChkHeght = 25;
         		var nChkInterval = 25;

        		var arrLength = new Array();
        		var arrResultPer = new Array();
        		for( var i=0; i<objLegendDs.rowcount; i++ )
        		{
        			var sLegendNm = objLegendDs.getColumn(i, "LEGEND_NM");
        			var sResultPer = parseInt( take.nvl(objLegendDs.getColumn(i, "RESULT_PER"), "0"));
        			arrLength.push(sLegendNm.length);
        			arrResultPer.push(sResultPer);
        		}

        		var nMaxLength = Math.max.apply(null, arrLength);
        		var nMaxResultPer = Math.max.apply(null, arrResultPer);
        		for( var i=0; i<objLegendDs.rowcount; i++ )
        		{
        			var sLegendSeq = objLegendDs.getColumn(i, "LEGEND_SEQ");
        			var sLegendNm = objLegendDs.getColumn(i, "LEGEND_NM");

        			var objStaLegend = new Static();
        			var sChkNm = "staLegend" + nRow + "_" + i;
        			var sChkTop = ( 0 == i ) ? sTitleNm + ":5" : "staLegend" + nRow + "_" + (i-1) + ":5";
        			var sChkWidth = (sLegendNm.length * 15) + 20;
        			objStaLegend.init(sChkNm, nChkLeft, sChkTop, sChkWidth, nChkHeght, null, null);
        			objDiv.addChild(sChkNm, objStaLegend);
        			objStaLegend.show();
        			objStaLegend.set_text(sLegendNm);

        			var objRstStatic = new Static();
        			var sStaRstNm = "staResult" + nRow + "_" + i;
        			var sStaRstTop = ( 0 == i ) ? sTitleNm + ":5" : "staResult" + nRow + "_" + (i-1) + ":5";
        			var nStaRstLeft = (nMaxLength * 15) + 40;
        			objRstStatic.init(sStaRstNm, nStaRstLeft, sStaRstTop, 70, 25, null, null);
        			objDiv.addChild(sStaRstNm, objRstStatic);
        			objRstStatic.show();

        			var sResultCnt = objLegendDs.getColumn(i, "RESULT_CNT");
        			var sTotalCnt = objLegendDs.getColumn(i, "TOTAL_CNT");
        			var sResultPer = objLegendDs.getColumn(i, "RESULT_PER");
        			var sRstTxt = sResultPer + "%" + "\t(" + sResultCnt + "/" + sTotalCnt + ")";

        			objRstStatic.set_text(sRstTxt);
        			objRstStatic.addEventHandler( "onclick", this.staResult_onclick, this);
        			objRstStatic.set_cursor("pointer");
        			objRstStatic.set_textAlign("center");
        			if( nMaxResultPer == parseInt(sResultPer) )
        			{
        				objRstStatic.set_background("#e2fc8c");
        				objRstStatic.set_borderRadius("8px");
        			}
        		}

        		var sEtcYn = this.dsSurveyItemInfo.getColumn(nRow, "LEGEND_ETC_YN");
        		if( "Y" == sEtcYn )
        		{
        			var objEtcButton = new Button();
        			var sEtcBtnNm = "btnEtcRst"+nRow;
         			var sLastChkNm = "staLegend" + nRow + "_" + (objLegendDs.rowcount-2);
         			var nEtcTop = sLastChkNm + ":7";
        			var nEtcLeft = (nMaxLength * 15) + 120
        			objEtcButton.init(sEtcBtnNm, nEtcLeft, nEtcTop, 110, 25, null, null);
        			objDiv.addChild(sEtcBtnNm, objEtcButton);
        			objEtcButton.show();
        			objEtcButton.set_text( "기타의견보기" );
        			objEtcButton.addEventHandler( "onclick", this.btn02_onclick, this);
        		}

        		var nRadioHeght = (nChkHeght * objLegendDs.rowcount) + (5*(objLegendDs.rowcount-1))
         		nDivHeight = (nDivHeight + nRadioHeght) - 30;
         		objDiv.set_height(nDivHeight);
        	}
        	else //주관식
        	{
        		//staticTitle생성
        		var objStatic01 = new Button();
        		var sTitleNm01 = "staTitle01"+nRow;
        		objStatic01.init(sTitleNm01, 20, sTitleNm + ":5", 110, 30, null, null);
        		objDiv.addChild(sTitleNm01, objStatic01);
        		objStatic01.show();
        		objStatic01.set_text( "주관식 답변보기" );
        		objStatic01.addEventHandler( "onclick", this.btn01_onclick, this);
        	}

        	this.divDetailItem.form.resetScroll();
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
        			var nCnt1 = parseInt(take.nvl(this.dsSurvey.getColumn(0, "CNT"), ""));	// 총 설문 참여자
        			var nCnt2 = parseInt(take.nvl(this.dsSurvey.getColumn(0, "RESULT_CNT"), ""));	// 답변 등록자

        			// 답변률 퍼센트 계산 값
        			var sPercent = nexacro.round((nCnt2/nCnt1*100));

        			this.staTotal.set_text("총 응답률 " + sPercent + "%" + "( " + nCnt2 + "/" + nCnt1 + " )");

        			this.fnSetItemCompInit();

                    break;
        		case "SurveySave" : //저장 콜백


        			break;
                default :
                    break;
            }
        }

        // 주관식 답변보기 팝업
        this.btn01_onclick = function(obj,e)
        {
        	var sName = obj.name;
        	var nItemRow = parseInt(sName.replace("staTitle01", ""));
        	this.fnOpenAnswerPop(nItemRow, "01");
        };

        // 기타의견보기 팝업
        this.btn02_onclick = function(obj,e)
        {
        	var sName = obj.name;
        	var nItemRow = parseInt(sName.replace("btnEtcRst", ""));
        	this.fnOpenAnswerPop(nItemRow, "02");
        };

        this.staResult_onclick = function(obj,e)
        {
        	var sName = obj.name;
        	var nItemRow = 0;
        	sName = sName.replace("staResult", "");
        	nItemRow = parseInt(sName.split("_")[0]);
        	this.fnOpenAnswerPop(nItemRow, "03");
        };

        this.fnOpenAnswerPop = function( nItemRow, sPopGbn )
        {
        	var sSurveyItemSeq = this.dsSurveyItemInfo.getColumn( nItemRow, "SURVEY_ITEM_SEQ" );
        	var AgrKey = {
        		sProjectCd : this.fv_sParentProjectCd, 		// 최상위 부모폼 프로젝트 코드
        		sSurveySeq : this.fv_sParentSurveySeq,		// 최상위 부모폼 설문조사 일련번호
        		sSurveyItemSeq : sSurveyItemSeq,			// 최상위 부모폼 설문조사 문항 일련번호
        		sPopGbn : sPopGbn							// 팝업구분
        	};
        	var sFormId = "";
        	sFormId = ( "03" == sPopGbn ) ? "SM030P04" : "SM030P03";
        	take.openPopup(this, sFormId, "frm::mod/"+sFormId+".xfdl", AgrKey, "",
        		function(){
        			// 콜백
        		},
        	false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SM030_onload,this);
            this.divDetail.form.edtTitle.addEventHandler("onkeyup",this.divTimeLineReg_edtTitle_onkeyup,this);
            this.divTitle.form.btnList.addEventHandler("onclick",this.divTitle_btnList_onclick,this);
        };
        this.loadIncludeScript("SM030P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
