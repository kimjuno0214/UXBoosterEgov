(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OM010");
            this.set_titletext("오더목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STYLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STAT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrder", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STYLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MATR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MATR_INPUT_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"MATR_INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_KNIT_QC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_PROC_QC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_PLANT_KNIT_QC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_PLANT_PROC_QC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_KNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_PROC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_ACCT_QC\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_LOAD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_LOAD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DELI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_ACT_DELI\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_LOAD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOAD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELI_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"OVER_SHORT\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"72","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staFileNoT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("파일번호");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBrandNmT","353","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("브랜드");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staStyleNoT","686","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("Style No");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrderDtT","20","40","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("오더등록일");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staChargeNmT","353","40","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrderStatT","686","40","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("진행현황");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFileNo","103","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBrandNm","436","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtChargeNm","436","40","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtStyleNo","769","10","230","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calOrderForm","103","40","103","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static14","215","40","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AlignC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calOrderTo","231","40","103","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboStatus","769","40","230","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsCboStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","82",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.08%","divSearch:0","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","Static01:0","Static24:0",null,null,"Static00:0","Static22:0",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOrder","0","30",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsOrder");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" rowspan=\"2\" text=\"파일순번\"/><Cell col=\"2\" rowspan=\"2\" text=\"오더 등록일\"/><Cell col=\"3\" rowspan=\"2\" text=\"브랜드\"/><Cell col=\"4\" rowspan=\"2\" text=\"Style No\"/><Cell col=\"5\" rowspan=\"2\" text=\"수량\"/><Cell col=\"6\" rowspan=\"2\" text=\"원사사종\"/><Cell col=\"7\" rowspan=\"2\" text=\"GG\"/><Cell col=\"8\" rowspan=\"2\" text=\"입고처\"/><Cell col=\"9\" rowspan=\"2\" text=\"편직\"/><Cell col=\"10\" rowspan=\"2\" text=\"가공\"/><Cell col=\"11\" colspan=\"2\" text=\"원사입고\"/><Cell col=\"13\" colspan=\"7\" text=\"진행현황\"/><Cell col=\"20\" rowspan=\"2\" text=\"업체&#13;&#10;선적&#13;&#10;일자\"/><Cell col=\"21\" rowspan=\"2\" text=\"생산&#13;&#10;선적&#13;&#10;일자\"/><Cell col=\"22\" rowspan=\"2\" text=\"납품일자\"/><Cell col=\"23\" rowspan=\"2\" text=\"비고\"/><Cell col=\"24\" rowspan=\"2\" text=\"브랜드&#13;&#10;Actual&#13;&#10;납기\"/><Cell col=\"25\" rowspan=\"2\" text=\"잔여&#13;&#10;생산&#13;&#10;기간\"/><Cell col=\"26\" rowspan=\"2\" text=\"실&#13;&#10;선적&#13;&#10;일자\"/><Cell col=\"27\" rowspan=\"2\" text=\"선적&#13;&#10;수량\"/><Cell col=\"28\" rowspan=\"2\" text=\"납품&#13;&#10;수량\"/><Cell col=\"29\" rowspan=\"2\" text=\"과부족\"/><Cell col=\"30\" rowspan=\"2\" text=\"진행&#13;&#10;현황\"/><Cell row=\"1\" col=\"11\" text=\"예정일\"/><Cell row=\"1\" col=\"12\" text=\"입고일\"/><Cell row=\"1\" col=\"13\" text=\"편직QC\"/><Cell row=\"1\" col=\"14\" text=\"가공QC\"/><Cell row=\"1\" col=\"15\" text=\"공장편직&#13;&#10;QC\"/><Cell row=\"1\" col=\"16\" text=\"공장가공&#13;&#10;QC\"/><Cell row=\"1\" col=\"17\" text=\"편직\"/><Cell row=\"1\" col=\"18\" text=\"가공\"/><Cell row=\"1\" col=\"19\" text=\"수납QC\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:FILE_NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ORDER_DT\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:BRAND_CD\" textAlign=\"center\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:STYLE_NO\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:QTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:MATR_TYPE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:GG_CD\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:INPUT_CD\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:KNIT_CD\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:PROC_CD\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:MATR_INPUT_EDT\" textAlign=\"center\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"date\"/><Cell col=\"12\" text=\"bind:MATR_INPUT_DT\" textAlign=\"center\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" text=\"bind:STAT_KNIT_QC\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:STAT_PROC_QC\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:STAT_PLANT_KNIT_QC\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:STAT_PLANT_PROC_QC\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:STAT_KNIT\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:STAT_PROC\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:STAT_ACCT_QC\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:CORP_LOAD_DT\" edittype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"21\" text=\"bind:PROD_LOAD_DT\" edittype=\"date\" textAlign=\"center\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"22\" text=\"bind:DELI_DT\" textAlign=\"center\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"23\" text=\"bind:REMARK\" displaytype=\"text\"/><Cell col=\"24\" text=\"bind:BRAND_ACT_DELI\" edittype=\"text\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"25\" edittype=\"text\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"26\" text=\"bind:REAL_LOAD_DT\" edittype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"27\" text=\"bind:LOAD_QTY\" edittype=\"mask\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"28\" text=\"bind:DELI_QTY\" edittype=\"mask\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"29\" text=\"bind:OVER_SHORT\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"30\" text=\"bind:ORDER_STAT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staOrderListT","0","0","280","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("오더목록 (총 0건)");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnQCSave",null,"3","70","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("QC저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddOrder",null,"3","70","23","btnQCSave:5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("오더등록");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtFileNo","value","dsSearch","FILE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtBrandNm","value","dsSearch","BRAND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtStyleNo","value","dsSearch","STYLE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calOrderForm","value","dsSearch","ORDER_DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calOrderTo","value","dsSearch","ORDER_DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtChargeNm","value","dsSearch","CHARGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboStatus","value","dsSearch","ORDER_STAT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OM010.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    오더목록 > 오더목록
        *  @FileName    OM010.xfdl
        *  @Creator     신준민
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      신준민             최초 생성
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
        this.OM010_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		this.fnInit();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){

        	// 코드값 셋팅
            this.fnCommonCode();

        }
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "search";

        	this.dsOrder.clearData();

        	this.divDetail.form.staOrderListT.set_text("오더목록");

            take.tranSelect(this, sTranId, "Order.orderList", "dsSearch", "dsOrder", "", "fnCallback");

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

        	//업데이트 된 행 저장
        	take.tranSave(this, sTranId, "Order.order", "dsOrder", "", "", "fnCallback");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
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

        	var arrChk;
        	var sFileNo = "";
            var nCnt;
            var objDs;

            objDs = this.dsOrder;
        	arrChk = take.getChkRow(objDs);

            nCnt = arrChk.length;
        	if(nCnt == 0){
        		alert("삭제할 오더 목록을 선택해 주세요.");
                return false;
        	}else{
        		var bRowDel = take.confirm(this, "question", "선택된 오더 목록을 삭제하시겠습니까?");

        		if(bRowDel){
        			for(var i=0; i<nCnt; i++)
        			{
        				sFileNo += "/" + objDs.getColumn(arrChk[i], "FILE_NO");	// 파일 번호
        			}
        			//AddInfo - Detail - Master 순으로 삭제
        			take.transaction
        			(
        				this
        				, "delete"
        				, "SVC_LOC::or/orderInfoDelete.do"
        				, ""
        				, ""
        				, "FILE_NO='" + sFileNo + "'"
        				, "fnCallback"
        			);
        		}

        	}

        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //btn_onClick : 버튼 클릭 이벤트
        this.btn_onClick = function(obj,e)
        {
        	var sName = obj.name.substring(3);

        	switch(sName) {
        	case "AddOrder" : //오더등록 버튼

        		// 오더 등록 팝업 오픈 OM010P01
        		//var AgrKey;
        		//AgrKey = {sProjectCd:this.fv_sParentProjectCd, sMenuCd:this.fv_sParentMenuCd};
        		take.openPopup
        		(
        			this,
        			"OM010P01",
        			"biz::thr/OM010P01.xfdl",
        			"",
        			"",
        			"",
        			false
        		);

        		break;

        	case "QCSave" : //QC저장 버튼

        		this.fnSave();

        		break;
        	}

        };

        //divDetail_grdOrder_onheadclick : 오더목록 그리드 헤드 클릭 이벤트
        this.divDetail_grdOrder_onheadclick = function(obj,e)
        {
        	if(e.col == 0){
                take.fnGridCheckAll(obj, e.cell, "CHK");
        	}
        };

        //divDetail_grdOrder_oncelldblclick : 오더목록 그리드 더블 클릭 이벤트
        this.divDetail_grdOrder_oncelldblclick = function(obj,e)
        {
        	//오더작성 팝업에 저장된 정보 불러오기
        	var sFileNo, sAttachNo;
            var objDs, objKey;
            var nRow;

        	obj.getCellProperty("body", e.cell, "edittype");

            objDs = this.dsOrder;

        	sFileNo = objDs.getColumn(objDs.rowposition, "FILE_NO");
        	sAttachNo = objDs.getColumn(objDs.rowposition, "ATTACH_CD");
        	objKey = {sFileNo:sFileNo, sAttachNo:sAttachNo};

        	take.openPopup
        		(
        			this,
        			"OM010P01",
        			"biz::thr/OM010P01.xfdl",
        			objKey,
        			"",
        			"",
        			false
        		);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnCommonCode = function()
        {
        	var sOutDs      = ["dsCboStatus"];
            var sGroupCodes = ["00027"];		//추후 CODE_INFO에 진행현황 코드 입력 후 변경예정
            var sHeaderType = ["ALL"];

            take.tranCode(this, sGroupCodes, sOutDs, sHeaderType,
                function(sId, nErrCd, sErrMsg)
        		{
        			this.divSearch.form.cboStatus.set_index(0);

        			this.fnSearch("search");

        		});
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

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

            switch(sId)
            {
                case "search" : //조회 콜백
                    this.divDetail.form.staOrderListT.set_text("오더목록 (총 " + this.dsOrder.rowcount + "건)");
                    //Script
                    break;
                case "save" :  //조회 콜백
                    //Script
                    break;
                case "delete" : //조회 콜백
                    //Script
        			this.fnSearch();
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OM010_onload,this);
            this.divDetail.form.grdOrder.addEventHandler("onheadclick",this.divDetail_grdOrder_onheadclick,this);
            this.divDetail.form.grdOrder.addEventHandler("oncelldblclick",this.divDetail_grdOrder_oncelldblclick,this);
            this.divDetail.form.btnQCSave.addEventHandler("onclick",this.btn_onClick,this);
            this.divDetail.form.btnAddOrder.addEventHandler("onclick",this.btn_onClick,this);
        };
        this.loadIncludeScript("OM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
