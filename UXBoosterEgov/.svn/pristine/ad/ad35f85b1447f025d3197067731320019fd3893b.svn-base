(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SM020P01");
            this.set_titletext("설문조사 문항등록");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(680,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurveyItemInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NECESSARY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DUPL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TEMP_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLegend", this);
            obj._setContents("<ColumnInfo><Column id=\"LEGEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_ETC_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSurveyItemReg","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleT","10","36","100","31",null,null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("2");
            obj.set_text("질문");
            obj.set_cssclass("sta_WF_th01L");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","46","21","10",null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Static("Static01","108","36",null,"31","10",null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Static("staTypeT","10","staTitleT:-1","100","31",null,null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("4");
            obj.set_text("문항타입");
            obj.set_cssclass("sta_WF_th01L");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Static("Static02","108","Static01:-1",null,"31","10",null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Edit("edtTitle","115","41",null,"21","17",null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("0");
            obj.set_maxlength("33");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Static("staLegendT","10","staTypeT:-1","100",null,null,"10",null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("6");
            obj.set_text("보기");
            obj.set_cssclass("sta_WF_th01L");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Static("Static03","108","Static02:-1",null,null,"10","10",null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Combo("cboItemType","115","Static01:4","125","21",null,null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsItemType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new CheckBox("chkMultiYn","cboItemType:10","Static01:4","104","21",null,null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("8");
            obj.set_text("복수선택 여부");
            obj.set_value("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new CheckBox("chkNecessaryYn","chkMultiYn:10","Static01:4","104","21",null,null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("9");
            obj.set_text("필수답변 여부");
            obj.set_value("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new CheckBox("chkAddEtcYn","chkNecessaryYn:10","Static01:4","104","21",null,null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("10");
            obj.set_text("기타의견 추가");
            obj.set_value("false");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Grid("grdLegend","115","Static02:34",null,null,"20","20",null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsLegend");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"299\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"보기\"/></Band><Band id=\"body\"><Cell text=\"bind:LEGEND_NM\" edittype=\"text\"/></Band></Format></Formats>");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"Static02:4","46","25","20",null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_cancel02");
            this.divSurveyItemReg.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"Static02:4","46","25","btnDelete:5",null,null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("13");
            obj.set_text("추가");
            obj.set_visible("false");
            this.divSurveyItemReg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSurveyItemReg.form
            obj = new Layout("default","",0,0,this.divSurveyItemReg.form,function(p){});
            this.divSurveyItemReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",680,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSurveyItemReg.form.edtTitle","value","dsSurveyItemInfo","ITEM_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSurveyItemReg.form.cboItemType","value","dsSurveyItemInfo","ITEM_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSurveyItemReg.form.chkMultiYn","value","dsSurveyItemInfo","DUPL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSurveyItemReg.form.chkNecessaryYn","value","dsSurveyItemInfo","NECESSARY_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSurveyItemReg.form.chkAddEtcYn","value","dsSurveyItemInfo","LEGEND_ETC_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SM020P01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    sm > SM020P01
        *  @FileName    SM020P01.xfdl
        *  @Creator     김진표
        *  @CreateDate  2021.03.25
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2021.03.25      김진표             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/

        this.fv_sProjectCd = "";
        this.fv_sSurveySeq = "";
        this.fv_sSurveyItemSeq = "";
        this.fv_sGbn = "NEW";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.SM020P01_onload = function(obj, e)
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
             //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "SurveyDetailSearch";
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
            if (take.nvl(sTranId, "")=="") sTranId = "save";

        }


        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.divSurveyItemReg_btnAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsLegend.addRow();
        	this.dsLegend.setColumn(nRow, "SURVEY_ITEM_SEQ", this.fv_sSurveyItemSeq);
        };

        this.divSurveyItemReg_btnDelete_onclick = function(obj,e)
        {
        	var arrDelRows = new Array();
        	for( var i=0; i<this.dsLegend.rowcount; i++ )
        	{
        		var sChkVal = this.dsLegend.getColumn(i, "CHK");
        		if( 1 == sChkVal )
        		{
        			arrDelRows.push(i);
        		}
        	}

        	this.dsLegend.deleteMultiRows(arrDelRows);
        };

        this.divSurveyItemReg_btnSave_onclick = function(obj,e)
        {
        	if( !takeval.check(this, "Save") ){
        		return false;
        	}

        	var sItemType = this.divSurveyItemReg.form.cboItemType.value;
        	if( "01" == sItemType && this.dsLegend.rowcount <= 0 )
        	{
        		take.alert(this, "Info", "객관식일 경우 보기는 1개이상 필수입니다.");
        		return false;
        	}

        	var nAddRow;
        	if( "MOD" == this.fv_sGbn )
        	{
        		var sFindColId = ( this.fv_sSurveyItemSeq.indexOf("NEW") != -1 ) ? "ITEM_TEMP_SEQ" : "SURVEY_ITEM_SEQ";

        		var nRow = this.opener.dsSurveyItemInfo.findRowAs(sFindColId, this.fv_sSurveyItemSeq);
        		this.opener.dsSurveyItemInfo.copyRow(nRow, this.dsSurveyItemInfo, 0);

        		nAddRow = nRow;
        	}
        	else
        	{
        		this.opener.dsSurveyItemInfo.appendData(this.dsSurveyItemInfo, true);
        		nAddRow = this.opener.dsSurveyItemInfo.rowcount-1;
        	}

        	var sEtcYn = this.divSurveyItemReg.form.chkAddEtcYn.value;
        	if( "Y" == sEtcYn )
        	{
        		var nRow = this.dsLegend.addRow();
        		this.dsLegend.setColumn(nRow, "SURVEY_ITEM_SEQ", this.fv_sSurveyItemSeq);
        		this.dsLegend.setColumn(nRow, "LEGEND_ETC_YN", "Y");
        		this.dsLegend.setColumn(nRow, "LEGEND_NM", "기타의견");
        	}

        	var objOpenerLegend = this.opener.dsLegend;
        	var arrDelRows = new Array();
        	for( var i=0; i<objOpenerLegend.rowcount; i++ )
        	{
        		var sOpenerSeq = objOpenerLegend.getColumn(i, "SURVEY_ITEM_SEQ");
        		if( this.fv_sSurveyItemSeq == sOpenerSeq )
        		{
        			arrDelRows.push(i);
        		}
        	}

        	objOpenerLegend.deleteMultiRows(arrDelRows);

        	if( "02" == sItemType )
        	{
        		this.dsLegend.clearData();
        	}

        	this.opener.dsLegendTemp.clearData();
        	this.opener.dsLegendTemp.appendData(this.dsLegend, true);
        	this.opener.dsLegend.appendData(this.dsLegend, true);

        	trace("!@!@>> 1:   " + this.opener.dsSurveyItemInfo.saveXML());
        	trace("!@!@>> 2:   " + this.opener.dsLegendTemp.saveXML());
        	trace("!@!@>> 3:   " + this.opener.dsLegend.saveXML());

        	this.opener.fnSetItemComp(nAddRow, this.fv_sGbn);

        	this.close();
        };

        this.divSurveyItemReg_cboItemType_onitemchanged = function(obj,e)
        {
        	this.fnBtnSetting();
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
        	this.fv_sProjectCd = this.parent.sProjectCd;
        	this.fv_sSurveySeq = this.parent.sSurveySeq;
        	this.fv_sSurveyItemSeq = take.nvl(this.parent.sSurveyItemSeq, "");
        	this.fv_sGbn = ( "" != this.fv_sSurveyItemSeq ) ? "MOD" : "NEW";

        	// 공통 코드조회 함수 호출
        	this.dsSurveyItemInfo.clearData();
        	var nRow = this.dsSurveyItemInfo.addRow();
        	this.fv_sSurveyItemSeq = ( "" != this.fv_sSurveyItemSeq ) ? this.fv_sSurveyItemSeq : "NEW" + (this.opener.dsSurveyItemInfo.rowcount).toString().lpad(3,"0");
        	this.dsSurveyItemInfo.setColumn(nRow, "ITEM_TEMP_SEQ", this.fv_sSurveyItemSeq);
        	this.dsSurveyItemInfo.setColumn(nRow, "NECESSARY_YN", "Y");

        	// 최초 저장 벨리데이션 추가
        	takeval.add(this, "Save", this.divSurveyItemReg.form.edtTitle, this.divSurveyItemReg.form.staTitleT.text, "value", true, "string", "", "");
        	takeval.add(this, "Save", this.divSurveyItemReg.form.cboItemType, "문항타입 선택", "value", true, "string", "", "");

            this.fnCommonCode();
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var arrGroupCodes = ["00042"];
        	var arrOutDs      = ["dsItemType"];
        	var arrHeaderType = ["SEL"];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        	function(sId, nErrCd, sErrMsg)
        	{
        		if (this.dsItemType.rowcount > 0){
        			this.divSurveyItemReg.form.cboItemType.set_index(0);
        		}

        		if( "MOD" == this.fv_sGbn )
        		{
        			this.dsSurveyItemInfo.clearData();
        			this.dsLegend.clearData();

        			var sFindColId = ( this.fv_sSurveyItemSeq.indexOf("NEW") != -1 ) ? "ITEM_TEMP_SEQ" : "SURVEY_ITEM_SEQ";

        			var nItemRow = this.dsSurveyItemInfo.addRow();
        			var nItemFindRow = this.opener.dsSurveyItemInfo.findRowNF(sFindColId, this.fv_sSurveyItemSeq);
        			this.dsSurveyItemInfo.copyRow(nItemRow, this.opener.dsSurveyItemInfo, nItemFindRow);

        			var objOpenerLegend = this.opener.dsLegend;
        			for( var i=0; i<objOpenerLegend.rowcount; i++ )
        			{
        				var sOpenerSeq = objOpenerLegend.getColumn(i, "SURVEY_ITEM_SEQ");
        				if( this.fv_sSurveyItemSeq == sOpenerSeq )
        				{
        					var nLegendRow = this.dsLegend.addRow();
        					this.dsLegend.copyRow( nLegendRow, objOpenerLegend, i );
        					this.dsLegend.setColumn(nLegendRow, "LEGEND_SEQ", "");
        				}
        			}

        			var nFindRow = this.dsLegend.findRowAsNF("LEGEND_ETC_YN", "Y");
        			this.dsLegend.deleteRow(nFindRow);

        			// 객관식 관련버튼 세팅
        			this.fnBtnSetting();
        		}
        	});
        };

        this.fnBtnSetting = function(){
        	var sItemType = this.divSurveyItemReg.form.cboItemType.value;
        	var bBtnVisible = false;
        	bBtnVisible = ( "01" == sItemType ) ? true : false;

        	this.divSurveyItemReg.form.btnAdd.set_visible(bBtnVisible);
        	this.divSurveyItemReg.form.btnDelete.set_visible(bBtnVisible);
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
                default :
                    break;
            }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SM020P01_onload,this);
            this.divSurveyItemReg.form.btnSave.addEventHandler("onclick",this.divSurveyItemReg_btnSave_onclick,this);
            this.divSurveyItemReg.form.edtTitle.addEventHandler("onkeyup",this.divTimeLineReg_edtTitle_onkeyup,this);
            this.divSurveyItemReg.form.cboItemType.addEventHandler("onitemchanged",this.divSurveyItemReg_cboItemType_onitemchanged,this);
            this.divSurveyItemReg.form.grdLegend.addEventHandler("oncellclick",this.divTimeLineReg_grdFile_oncellclick,this);
            this.divSurveyItemReg.form.btnDelete.addEventHandler("onclick",this.divSurveyItemReg_btnDelete_onclick,this);
            this.divSurveyItemReg.form.btnAdd.addEventHandler("onclick",this.divSurveyItemReg_btnAdd_onclick,this);
        };
        this.loadIncludeScript("SM020P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
