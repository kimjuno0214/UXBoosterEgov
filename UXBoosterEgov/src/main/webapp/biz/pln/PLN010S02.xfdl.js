(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL020S01");
            this.set_background("#ffffff");
            this.set_titletext("계획_품목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1239,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEST_INST_CD\">KCL</Col></Row><Row><Col id=\"TEST_INST_CD\">KTL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrGdsInst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","0","10","500","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("품목 목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddGds",null,"10","105","21","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("  품목추가  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("gridGds","0","staProgDetailT00_00:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_selecttype("row");
            obj.set_selectscrollmode("default");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetPlanQy",null,"10","105","21","btnAddGds:3",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("  계획수량반영  ");
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
        this.registerScript("PLN010S02.xfdl", function() {
        /**
        *  안전성조사 계획 품목 관리
        *
        *  @MenuPath    안전성조사 > 안전성조사계획 > 품목
        *  @FileName    PLN010S02.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.02.07
        *  @Version     1.0
        *  @Desction    설명 : 안전성조사 계획 품목 관리 화면
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.02.07      doore               최초 생성
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
        this.fv_nSum = 0;

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
        		case "SearchInstList" :
        			this.fnSetGrid();
        			break;
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
        	var sSttusCd = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "PROGRS_STTUS_CD");

        	// 시험중 04 이후 readonly 처리
        	if(sSttusCd >= "04") this.gridGds.set_readonly(true);
        	else this.gridGds.set_readonly(false);

        	this.dsTemp.clearData();
        	//this.dsGds.clearData();
        	if(!take.isEmpty(this.fv_sOdrId))
        	{
        		this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        		take.tranSelect(this, "SearchOdrGds", "safety.odrGdsInstSelect", "dsSearch", "dsTemp", "",
        			function()
        			{
        				this.gridGds.set_binddataset("");
        				this.dsOdrGdsInst.clearData();
        				this.dsOdrGdsInst.set_enableevent("false");
        				var nRow = 0;
        				var sPreDetailGdsId = "";
        				var sPreGdsCd = "";
        				var sTestInstCd = "";
        				for(var i = 0; i < this.dsTemp.rowcount; i++)
        				{
        					sTestInstCd = this.dsTemp.getColumn(i, "TEST_INST_CD");
        					if(sPreDetailGdsId != this.dsTemp.getColumn(i, "DETAIL_GDS_ID"))
        					{
        						nRow = this.dsOdrGdsInst.addRow();
        						this.dsOdrGdsInst.copyRow(nRow, this.dsTemp, i);

        					}
        					if(sPreGdsCd != this.dsTemp.getColumn(i, "GDS_CD"))
        					{
        						this.dsOdrGdsInst.setColumn(nRow, "ROW_ODR", 1);
        					}

        					var sEditYnCol = this.dsTemp.getColumn(i, "COL_EDIT_YN");
        					var sEditYnVal = this.dsTemp.getColumn(i, "EDIT_YN");
        					var sPosblQyCol = this.dsTemp.getColumn(i, "COL_POSBL_QY");
        					var sPosblQyVal = this.dsTemp.getColumn(i, "DETAIL_POSBL_QY");
        					var sPlanQyCol = this.dsTemp.getColumn(i, "COL_PLAN_QY");
        					var sPlanQyVal = this.dsTemp.getColumn(i, "DETAIL_PLAN_QY");
        					this.dsOdrGdsInst.setColumn(nRow, sEditYnCol, sEditYnVal);
        					this.dsOdrGdsInst.setColumn(nRow, sPosblQyCol, sPosblQyVal);
        					this.dsOdrGdsInst.setColumn(nRow, sPlanQyCol, sPlanQyVal);

        					var nNvlPosblQyVal = take.nvl(sPosblQyVal, 0);
        					this.dsOdrGdsInst.setColumn(nRow, sTestInstCd + "_NVL_POSBL_QY", nNvlPosblQyVal);
        					var nNvlPlanQyVal = take.nvl(sPlanQyVal, 0);
        					this.dsOdrGdsInst.setColumn(nRow, sTestInstCd + "_NVL_PLAN_QY", nNvlPosblQyVal);

        					sPreGdsCd = this.dsTemp.getColumn(i, "GDS_CD");
        					sPreDetailGdsId = this.dsTemp.getColumn(i, "DETAIL_GDS_ID");
        				}
        				// 가능, 계획수량 null -> 0 처리
        				for(var i = 0; i < this.dsOdrGdsInst.rowcount; i++)
        				{
        					for(var j = 0; j < this.dsInstCd.rowcount; j++)
        					{
        						var nPosblQy = this.dsOdrGdsInst.getColumn(i, this.dsInstCd.getColumn(j, "TEST_INST_CD") +"_POSBL_QY");
        						if(take.isEmpty(nPosblQy)) this.dsOdrGdsInst.setColumn(i, this.dsInstCd.getColumn(j, "TEST_INST_CD") +"_NVL_POSBL_QY", 0);

        						var nPlanQy = this.dsOdrGdsInst.getColumn(i, this.dsInstCd.getColumn(j, "TEST_INST_CD") +"_PLAN_QY");
        						if(take.isEmpty(nPlanQy)) this.dsOdrGdsInst.setColumn(i, this.dsInstCd.getColumn(j, "TEST_INST_CD") +"_NVL_PLAN_QY", 0);
        					}
        				}
        				// 데이터셋 상태 normal 처리
        				this.dsOdrGdsInst.set_updatecontrol(false);
        				for(var i = 0; i < this.dsOdrGdsInst.rowcount; i++)
        				{
        					this.dsOdrGdsInst.setRowType(i, Dataset.ROWTYPE_NORMAL);
        				}
        				this.dsOdrGdsInst.set_updatecontrol(true);
        				this.dsOdrGdsInst.set_enableevent("true");
        				this.gridGds.set_binddataset("dsOdrGdsInst");
        				this.divDetail.form.gridGds.selectRow(0);
        			});
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

        /* 품목추가 버튼 Click 이벤트 처리 */
        this.btnAddGds_onclick = function(obj,e)
        {
        	var sOdrId = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID");
        	var sCertFldCd = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "CERT_FLD_CD");

        	var arrParam = {
        				sOdrId : sOdrId,
        				sCertFldCd : sCertFldCd
        				};

        	take.openPopup(this, "addSchdulCd", "biz::pln/PLN010P02.xfdl",arrParam, "resizable=true",
        		function(){
        			this.fnSetGdsInst();
        			// 기본정보/일정, 기관검토, 시험항목 조회
        			this.fv_parentForm.fnSearchSub();
        		}
        	);
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /* 품목시험가능 기관 조회  */
        this.fnSetGdsInst = function()
        {
        	this.dsInstCd.clearData();
        	this.dsOdrGdsInst.clear();
        	this.fv_sOdrId = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID");
        	this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        	take.tranSelect(this, "SearchInstList", "safety.odrGdsInstList", "dsSearch", "dsInstCd", "", "fnCallback");
        }

        /* 폼목 그리드 숨김 처리  */
        this.fnSetGrid = function()
        {
        	var sPosblQySumStr = "";
        	var sPlandQySumStr = "";
        	var sTestInstCd = "";
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
        	this.dsOdrGdsInst.addColumn( "ROW_ODR", "string" );				// 품목 순번 1일때만 품목계획수량 입력 가능
        	for(var i = 0; i < this.dsInstCd.rowcount; i++)
        	{
        		var sTestInstCol = this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_POSBL_QY";
        		this.dsOdrGdsInst.addColumn( sTestInstCol, "string" );		// 기관가능수량
        		sTestInstCol = this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_PLAN_QY";
        		this.dsOdrGdsInst.addColumn( sTestInstCol, "string" );		// 기관계획수량
        		sTestInstCol = this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_EDIT_YN";
        		this.dsOdrGdsInst.addColumn( sTestInstCol, "string" );		// 수정가능여부

        		// 가능, 계획 수량 sum 용 컬럼 처리
        		sTestInstCol = this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_NVL_POSBL_QY";
        		this.dsOdrGdsInst.addColumn(this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_NVL_POSBL_QY", "string" );		// 가능수량 NVL 처리
        		if(take.isEmpty(sPosblQySumStr)) sPosblQySumStr = "nexacro.toNumber(" + sTestInstCol + ")";
        		else sPosblQySumStr += " + " + "nexacro.toNumber(" + sTestInstCol + ")";

        		sTestInstCol = this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_NVL_PLAN_QY";
        		this.dsOdrGdsInst.addColumn(this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_NVL_PLAN_QY", "string" );		// 가능수량 NVL 처리
        		if(take.isEmpty(sPlandQySumStr)) sPlanQySumStr = "nexacro.toNumber(" + sTestInstCol + ")";
        		else sPlanQySumStr += " + " + "nexacro.toNumber(" + sTestInstCol + ")";
        	}

            var sAddColStr = "";
        	var sAddHeadStr1 = "";
        	var sAddHeadStr2 = "";
        	var sAddBodyStr = "";
        	var sAddSummStr = "";
        	var nStartCol = 8;

        	var sCol = 	'<Columns>' +
        				'<Column size="120"/>' +
        				'<Column size="200"/>' +
        				'<Column size="50"/>' +
        				'<Column size="200"/>' +
        				'<Column size="40"/>' +
        				'<Column size="50"/>' +
        				'<Column size="50"/>' +
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
        				'<Cell col="2" row="0" rowspan="3" text="품목&#13;&#10;계획&#13;&#10;수량"/>' +
        				'<Cell col="3" row="0" rowspan="3" text="세부품목명"/>' +
        				'<Cell col="4" row="0" rowspan="3" autosizecol="none" text="기관&#13;&#10;검토"/>' +
        				'<Cell col="5" row="0" colspan="3" rowspan="2" text="수량"/>' +
        				'sAddHeadStr1' +
        				'<Cell col="5" row="2" text="목표"/>' +
        				'<Cell col="6" row="2" text="가능"/>' +
        				'<Cell col="7" row="2" text="계획"/>' +
        				'sAddHeadStr2' +
        				'</Band>';

        	var sBody = '<Band id="body">' +
        				'<Cell col="0" row="0" text="bind:CERT_KND_NM" textAlign="left" suppress="1"/>' +
        				'<Cell col="1" row="0" text="bind:GDS_NM" textAlign="left" suppress="2"/>' +
        				'<Cell col="2" row="0" edittype="expr:ROW_ODR&#32;==&#32;&apos;1&apos;?&apos;normal&apos;:&apos;none&apos;" text="bind:GDS_PLAN_QY" textAlign="right" editinputtype="number" suppress="3"/>' +
        				'<Cell col="3" row="0" text="bind:DETAIL_GDS_NM" textAlign="left"/>' +
        				'<Cell col="4" row="0" cssclass="expr:POSBL_YN==&apos;N&apos;?&apos;grd_WF_note&apos;:&apos;&apos;" displaytype="expr:POSBL_YN==&apos;N&apos;?&apos;buttoncontrol&apos;:&apos;none&apos;" autosizecol="none" textAlign="center"/>' +
        				'<Cell col="5" row="0" edittype="normal" text="bind:GOAL_QY" textAlign="right"/>' +
        				'<Cell col="6" row="0" displaytype="number" text="expr:' + sPosblQySumStr + '" textAlign="right"/>' +
        				'<Cell col="7" row="0" displaytype="number" text="bind:PLAN_QY" textAlign="right"/>' +
        				'sAddBodyStr' +
        				'</Band>';

        	var sSumm = '<Band id="summary">' +
        				'<Cell col="0" row="0" colspan="2"/>' +
        				'<Cell col="2" row="0" text="expr:dataset.getSum(&quot;GOAL_QY==null?0:nexacro.toNumber(GOAL_QY)&quot;,&quot;GOAL_QY&quot;)"/>' +
        				'<Cell col="3" row="0"/>' +
        				'<Cell col="4" row="0"/>' +
        				'<Cell col="5" row="0" text="expr:dataset.getSum(&quot;GOAL_QY==null?0:nexacro.toNumber(GOAL_QY)&quot;,&quot;GOAL_QY&quot;)"/>' +
        				'<Cell col="6" row="0" text="expr:dataset.getSum(&quot;'+sPosblQySumStr +'&quot;)"/>' +
        				'<Cell col="7" row="0" text="expr:dataset.getSum(&quot;PLAN_QY==null?0:nexacro.toNumber(PLAN_QY)&quot;,&quot;PLAN_QY&quot;)"/>';

        	var nHeadSpan = this.dsInstCd.rowcount * 2;
        	for(var i = 0; i < this.dsInstCd.rowcount; i++)
        	{
        		sAddColStr += '<Column size="50"/>';	// 가능
        		sAddColStr += '<Column size="50"/>';	// 계획

        		if(i == 0) sAddHeadStr1 += '<Cell col="' + nStartCol + '" row="0" colspan="' + nHeadSpan + '" text="시험기관"/>';
        		var sTestInstCd = this.dsInstCd.getColumn(i, "TEST_INST_CD");
        		var sTestInstNm = this.dsInstCd.getColumn(i, "CODE_NM");
        		sAddHeadStr1 += '<Cell col="' + (nStartCol + (i * 2)) + '" row="1" colspan="2" text="' + sTestInstNm + '"/>';

        		sAddHeadStr2 += '<Cell col="' + (nStartCol + (i * 2)) + '" row="2" text="가능"/>';
        		sAddHeadStr2 += '<Cell col="' + (nStartCol + (i * 2) + 1) + '" row="2" text="계획"/>';

        		sAddBodyStr += '<Cell col="' + (nStartCol + (i * 2)) + '" text="bind:' + sTestInstCd + '_POSBL_QY" textAlign="right" displaytype="number" edittype="none"/>';
                sAddBodyStr += '<Cell col="' + (nStartCol + (i * 2) + 1) + '" text="bind:' + sTestInstCd + '_PLAN_QY" textAlign="right" editinputtype="number" displaytype="number" edittype="expr:' + sTestInstCd + '_EDIT_YN==&apos;Y&apos;?&apos;normal&apos;:&apos;none&apos;" cssclass="expr:' + sTestInstCd + '_EDIT_YN==&apos;Y&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;"/>';

        		sSumm += '<Cell col="' + (nStartCol + (i * 2)) + '" row="0" text="expr:dataset.getSum(&quot;'+ sTestInstCd + "_POSBL_QY" + '==null?0:nexacro.toNumber('+ sTestInstCd + "_POSBL_QY" + ')&quot;,&quot;'+ sTestInstCd + "_POSBL_QY" + '&quot;)"/>';
        		sSumm += '<Cell col="' + (nStartCol + (i * 2) + 1) + '" row="0" text="expr:dataset.getSum(&quot;'+ sTestInstCd + "_PLAN_QY" + '==null?0:nexacro.toNumber('+ sTestInstCd + "_PLAN_QY" + ')&quot;,&quot;'+ sTestInstCd + "_PLAN_QY" + '&quot;)"/>';
        	}

        	sCol = sCol.replace("sAddColStr", sAddColStr);
        	sHead = sHead.replace("sAddHeadStr1", sAddHeadStr1);
        	sHead = sHead.replace("sAddHeadStr2", sAddHeadStr2);
        	sBody = sBody.replace("sAddBodyStr", sAddBodyStr);
        	sSumm += '</Band>';

        	this.gridGds.set_formats("<Formats><Format id='default'>" + sCol + sRow + sHead + sBody + sSumm + "</Format></Formats>");

        	this.fnSearch();
        }

        /* 데이터 변경 시 이벤트 */
        this.dsOdrGdsInst_oncolumnchanged = function(obj,e)
        {
        	var nPlanCol = e.columnid.split("_PLAN_QY");

        	obj.set_enableevent("false");
        	// 품목 계획 수랸 변경 시
        	if(e.columnid == "GDS_PLAN_QY")
        	{
        		var sGdsCd = obj.getColumn(e.row, "GDS_CD");
        		var sArry = new Array();

        		for(var i = 0; i < obj.rowcount; i++)
        		{
        			gFnTrace("obj.getColumn(i, GDS_CD) = " + obj.getColumn(i, "GDS_CD") + " sGdsCd= " + sGdsCd);
        			if(obj.getColumn(i, "GDS_CD") == sGdsCd)
        			{
        				obj.setColumn(i, "GDS_PLAN_QY", e.newvalue);
        				sArry.push(i);
        			}
        		}
        		var nSum = 0;
        		// 세부품목별 목표수량
        		for(var i = 0; i < sArry.length; i++)
        		{
        			var nCalValue = nexacro.ceil(e.newvalue / sArry.length, 0);

        			if(i != (sArry.length - 1))
        			{
        				nSum += nCalValue;
        				obj.setColumn(sArry[i], "GOAL_QY", nCalValue);
        			}
        			else
        			{
        				obj.setColumn(sArry[i], "GOAL_QY", e.newvalue - nSum);
        			}
        		}
        	}
        	else if(e.columnid == "GOAL_QY")
        	{
        		// 목표수량 변경시 목료계획수량 변경
        		var sGdsCd = obj.getColumn(e.row, "GDS_CD");
        		var nSum = 0;
        		for(var i = 0; i < obj.rowcount; i++)
        		{
        			if(obj.getColumn(i, "GDS_CD") == sGdsCd) nSum += nexacro.toNumber(obj.getColumn(i, "GOAL_QY"));
        		}

        		for(var i = 0; i < obj.rowcount; i++)
        		{
        			if(obj.getColumn(i, "GDS_CD") == sGdsCd) obj.setColumn(i, "GDS_PLAN_QY", nSum);
        		}
        	}
        	else if(nPlanCol.length > 1)	// 기관 계획 수량 변경
        	{
        		var nPosblQy = this.dsOdrGdsInst.getColumn(e.row, nPlanCol[0] + "_POSBL_QY");	// 기관가능수량
        		if(take.isEmpty(nPosblQy)) nPosblQy = 0;

        		var nPlanQy = 0;
        		// 가능수량과 계획 수량 비교

        		if(!take.isEmpty(e.newvalue) && parseInt(nPosblQy) < parseInt(e.newvalue))
        		{
        			take.alert(this, "info", "계획수량은 가능수량보다 클수 없습니다.");
        			this.dsOdrGdsInst.setColumn(e.row, this.dsInstCd.getColumn(e.row, "TEST_INST_CD") + "_PLAN_QY", 0);
        		}

        		for(var i = 0; i < this.dsInstCd.rowcount; i++)
        		{
        			if(!take.isEmpty(this.dsOdrGdsInst.getColumn(e.row, this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_PLAN_QY")))
        			nPlanQy += parseInt(this.dsOdrGdsInst.getColumn(e.row, this.dsInstCd.getColumn(i, "TEST_INST_CD") + "_PLAN_QY"));
        		}
        		this.dsOdrGdsInst.setColumn(e.row, "PLAN_QY", nPlanQy);
        	}

        	obj.set_enableevent("true");
        };

        /* 기관검토 조회  */
        this.gridGds_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "control" && e.col == 4)	// 기관검토 클릭 시
        	{
        		var sOdrId = this.dsOdrGdsInst.getColumn(this.dsOdrGdsInst.rowposition, "ODR_ID");
        		var sDetailGdsId = this.dsOdrGdsInst.getColumn(this.dsOdrGdsInst.rowposition, "DETAIL_GDS_ID");

        		var arrParam = {
        					sOdrId : sOdrId,
        					sDetailGdsId : sDetailGdsId
        					};

        		take.openPopup(this, "searchRn", "biz::pln/PLN010P04.xfdl",arrParam, "resizable=true",
        			function(){
        			}
        		);
        	}
        };

        /* 계획수량반영 클릭 이벤트 */
        this.btnSetPlanQy_onclick = function(obj,e)
        {
        	this.dsOdrGdsInst.set_enableevent(false);
        	var nEditCnt = 0;
        	var nGoalQy  = 0;

        	for(var i = 0; i < this.dsOdrGdsInst.rowcount; i++)
        	{
        		nEditCnt = 0;
        		nGoalQy = this.dsOdrGdsInst.getColumn(i, "GOAL_QY");

        		this.fv_nSum = 0;
        		// 가능시험기관이 1개인 경우 목표수량으로 set
        		for(var j = 0; j < this.dsInstCd.rowcount; j++)
        		{
        			var sTestInstCd = this.dsInstCd.getColumn(j, "TEST_INST_CD");
        			if(this.dsOdrGdsInst.getColumn(i, sTestInstCd + "_EDIT_YN") == "Y")
        			{
        				nEditCnt += 1;
        				this.fv_nSum += parseInt(take.nvl(this.dsOdrGdsInst.getColumn(i, sTestInstCd + "_POSBL_QY"), 0));
        			}
        		}

        		// 가능시험기관이 1개인 경우 목표수량을 계획수량으로
        		if(nEditCnt == 1)
        		{
        			for(var j = 0; j < this.dsInstCd.rowcount; j++)
        			{
        				var sTestInstCd = this.dsInstCd.getColumn(j, "TEST_INST_CD");
        				if(this.dsOdrGdsInst.getColumn(i, sTestInstCd + "_EDIT_YN") == "Y")
        				{
        					// 목표수량과 가능수량중 작은 값으로
        					var nQy = nGoalQy > this.fv_nSum ? this.fv_nSum : nGoalQy;
        					this.dsOdrGdsInst.setColumn(i, sTestInstCd + "_PLAN_QY", nQy);
        				}
        			}
        		}
        		// 목표수량과 가능 수량이 같은 경우 기관가능수량을 계획 수량으로
        		if(nGoalQy == this.fv_nSum)
        		{
        			for(var j = 0; j < this.dsInstCd.rowcount; j++)
        			{
        				var sTestInstCd = this.dsInstCd.getColumn(j, "TEST_INST_CD");
        				if(this.dsOdrGdsInst.getColumn(i, sTestInstCd + "_EDIT_YN") == "Y")
        				{
        					this.dsOdrGdsInst.setColumn(i, sTestInstCd + "_PLAN_QY", this.dsOdrGdsInst.getColumn(i, sTestInstCd + "_POSBL_QY"));
        				}
        			}
        		}
        	}
        	this.dsOdrGdsInst.set_enableevent(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.staProgDetailT00_00.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.btnAddGds.addEventHandler("onclick",this.btnAddGds_onclick,this);
            this.gridGds.addEventHandler("oncellclick",this.gridGds_oncellclick,this);
            this.btnSetPlanQy.addEventHandler("onclick",this.btnSetPlanQy_onclick,this);
            this.dsOdrGdsInst.addEventHandler("oncolumnchanged",this.dsOdrGdsInst_oncolumnchanged,this);
        };
        this.loadIncludeScript("PLN010S02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
