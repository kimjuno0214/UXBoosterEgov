(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comSort");
            this.set_titletext("정렬");
            this.set_border("1px solid #c0c0c0");
            if (Form == this.constructor)
            {
                this._setFormPosition(502,335);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSort", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"INDEX\" type=\"INT\" size=\"256\"/><Column id=\"COLID\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"HEADCELL\" type=\"INT\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"INDEX\" type=\"INT\" size=\"256\"/><Column id=\"COLID\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"HEADCELL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdItem","20","48","151",null,null,"63",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsItem");
            obj.set_scrollbartype("autoindicator default");
            obj.getSetter("extendgridoption").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"149\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"정렬대상항목\" border=\"1px solid #c7c7c7,0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:COLNM\" textAlign=\"left\" border=\"1px solid #e3e3e3,0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSort","191","48",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSort");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"35\"/>\n      <Row band=\"body\" size=\"35\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"colnm\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"ordering\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:COLNM\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:ORDERING\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_scrolltype("both");
            obj.set_scrollbartype("autoindicator default");
            obj.getSetter("extendgridoption").set("false");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"163\"/><Column size=\"93\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"정렬항목\"/><Cell col=\"1\" text=\"정렬유형\" border=\"1px solid #c7c7c7,0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:COLNM\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:TYPE\" combodataset=\"dsOrdType\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplay=\"display\" border=\"1px solid #e3e3e3,0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddItem","176","123","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_next");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelItem","176","161","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_prev");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpItem",null,"20","23","23","48",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ShuttleT");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownItem",null,"20","23","23","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ShuttleB");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","425",null,"57","23",null,"20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_cancel01");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","365",null,null,"23","btnCancel:3","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_tabstop("true");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_check01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01","0","0","500","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("w\r\n20");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("w\r\n20");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01_00","20","315",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01_00_00","20","272",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01_01","20","43",null,"5","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_01","171","48","5",null,null,"63",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("w\r\n20");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_01_00","186","48","5",null,null,"63",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("w\r\n20");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
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
        this.registerScript("comSort.xfdl", function() {
        /***************************************************************************************************
         * 업무구분		: 포탈(대시보드) 시스템 구축
         * 화 면 명		: comSort.xfdl
         * 화면설명		: 그리드 공통 정렬 팝업
         * 작 성 자		: TOBESOFT
         * 작 성 일		:
         * 수정이력
         ***************************************************************************************************
         *	수 정 일		수 정 자		수정 내용
         ***************************************************************************************************
         *
         ***************************************************************************************************/

        /***************************************************************************************************
         *	FORM 변수 선언 영역
         ***************************************************************************************************/
        this.fvGrd, this.fvDst;

        /***************************************************************************************************
         *	FORM EVENT 영역 (onload)
         ***************************************************************************************************/
        this.comSort_onload = function(obj, e)
        {
        	this.ProgId="GM00000100";
            this.ProgNm="GM00000100";

        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		take.tranCode(this, ["00038"], ["dsOrdType"], "NONE",
        			function(){
        			}
        		);

        		var objParamInfo= this.parent.gridInfo;

        		// 대상그리드에 대한 컬럼정보 수집
        		this.fvGrd	= objParamInfo["grid"];
        		this.fvDst	= this.fvGrd.getBindDataset();

        		// 대상그리드에 대한 컬럼정보 수집
        		this.fnGatherColInfo(this.fvGrd);

        		var sortInfos = this.fvGrd["_sortInfo"];
        		var sortItems = this.fvGrd["_sortItem"];

        		// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
        		// 정렬대상컬럼 (순서중요)
        		if (this.fvGrd._xfnIsEmpty(sortInfos)) sortInfos = {};
        		if (this.fvGrd._xfnIsEmpty(sortItems)) sortItems = [];

        		// keystring 조합
        		for (var i=0; i<sortItems.length; i++)
        		{
        			sColumnName = sortItems[i];
        			oSortInfo   = sortInfos[sColumnName];
        			nStatus 	= oSortInfo.status;
        			nCell 	    = oSortInfo.refCell;

        			var strExpr	= "";
        				strExpr	+= "COLID=='" 	+ sColumnName + "'";
        				strExpr	+= "&&";
        				strExpr	+= "HEADCELL==" + nCell._cellidx;

        			if (nStatus==0) continue;
        			var bAsc	= nStatus == 1 ? true : false;

        			var nRow	= this.dsItem.findRowExpr(strExpr);
        			if (nRow >= 0)
        				this.fnAddSortInfo(nRow, bAsc);
        		}
        	}
        };

        /**
         *	commFind_onkeydown	: onkeydown Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.comSort_onkeydown = function(obj, e)
        {
        	if (e.keycode == 27) this.fvGrd._xfnClose(this, "");
        };

        /***************************************************************************************************
         *	TRANSACTION 서비스 호출 처리
         ***************************************************************************************************/

        /***************************************************************************************************
         *	CALLBACK 콜백 호출 처리
         ***************************************************************************************************/

        /***************************************************************************************************
         *	각 COMPONENT 별 EVENT 영역
         ***************************************************************************************************/
        /**
         *	grdItem_oncelldblclick	: oncelldblclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.grdItem_oncelldblclick = function(obj, e)
        {
        	var nRow = e.row;

        	if (nRow < 0) return;

        	switch (obj.name)
        	{
        		case "grdItem" :
        			this.fnAddSortInfo(nRow, true);
        		break;

        		case "grdSort" :
        			if (e.cell == 2) return;
        			this.fnDelSortInfo(nRow);
        		break;
        	}
        };

        /**
         *	dsItem_oncolumnchanged	: oncolumnchanged Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.dsItem_oncolumnchanged = function(obj, e)
        {
        	obj.set_keystring("");
        	obj.set_keystring("S:INDEX");
        };

        /**
         *	btnAddItem_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnAddItem_onclick = function(obj,  e)
        {
        	var nRow	= this.dsItem.rowposition;
        	if (nRow < 0) return;

        	this.fnAddSortInfo(nRow, true);
        };

        /**
         *	btnDelItem_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnDelItem_onclick = function(obj,  e)
        {
        	var nRow	= this.dsSort.rowposition;
        	if (nRow < 0) return;

        	this.fnDelSortInfo(nRow);
        };

        /**
         *	btnUpItem_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnUpItem_onclick = function(obj,  e)
        {
        	var nRow	= this.dsSort.rowposition;
        	if (nRow <= 0) return;

        	this.dsSort.moveRow(nRow, nRow-1);
        };

        /**
         *	btnDownItem_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnDownItem_onclick = function(obj,  e)
        {
        	var nRow	= this.dsSort.rowposition;
        	if (nRow >= this.dsSort.getRowCount()-1) return;

        	this.dsSort.moveRow(nRow, nRow+1);
        };

        /**
         *	btn_confirm_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnConfirm_onclick = function(obj,  e)
        {
        	this.fnSetSortInfo();
        };

        /**
         *	btn_close_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnClose_onclick = function(obj,  e)
        {
        	this.fvGrd._xfnClose(this, "");
        };

        /***************************************************************************************************
         *	사용자 FUNCTION 영역
         ***************************************************************************************************/
        /**
         *	fnGatherColInfo 	: 정렬대상 Dataset 생성
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnGatherColInfo = function(objGrid)
        {
        	this.dsItem.set_enableevent(false);

        	for (var i=0; i<objGrid.getCellCount("body"); i++)
        	{
        		/* head와 body의 column index가 다른경우 확인해야함 */
        		var sCellText	= this.fvGrd._xfnTrim(objGrid.getCellProperty("body", i, "text"));
        		var nCellRow	= parseInt(this.fvGrd._xfnTrim(objGrid.getCellProperty("body", i, "row")));
        		var nCellCol	= parseInt(this.fvGrd._xfnTrim(objGrid.getCellProperty("body", i, "col")));

        		if (sCellText.toLowerCase().indexOf("bind:") < 0) continue;
        			sCellText = sCellText.substr(5);

        		var objColInfo	= this.fvDst.getColumnInfo(sCellText);

        		if (this.fvGrd._xfnIsEmpty(objColInfo)) continue;

        		if (objGrid.getCellProperty("head", i, "displaytype") != "checkboxcontrol")
        		{
                    var objHeadInfo	= this.fnGetHeadInfo(objGrid, nCellCol, nCellRow);
                    if (this.fvGrd._xfnIsEmpty(objHeadInfo)) continue;
                }  else {
                    continue;
                }

        		var sHeadText	= this.fvGrd._xfnNvl(objHeadInfo["text"], sCellText);
        		var nHeadCell	= this.fvGrd._xfnNvl(objHeadInfo["cell"], i		  );

        		var strType = objGrid.getCellProperty("head", nHeadCell, "displaytype");
        		if (strType == "treeitemcontrol" || strType == "checkboxcontrol" || strType == "combocontrol") continue;

        		var nAddRow = this.dsItem.addRow();
        		this.dsItem.setColumn(nAddRow, "INDEX"	  , nAddRow	 );
        		this.dsItem.setColumn(nAddRow, "COLID"	  , sCellText);
        		this.dsItem.setColumn(nAddRow, "COLNM"	  , sHeadText);
        		this.dsItem.setColumn(nAddRow, "HEADCELL" , nHeadCell);
        	}

        	this.dsItem.set_enableevent(true);
        	this.dsItem.set_rowposition(0); // Rowposition reset
        };

        /**
         *	fnGetHeadInfo 		: 대상 그리드 Head 정보 가져오기
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnGetHeadInfo = function(objGrid, nBodyCol, nBodyRow)
        {
        	var objHeadInfo	= {text : "", cell : -1};
        	var nHeadCnt	= objGrid.getCellCount("head");
        	var nBodyCnt	= objGrid.getCellCount("body");
        	var nHeadRowCnt = parseInt(objGrid.getCellProperty("head", nHeadCnt-1, "row"));
        	var nBodyRowCnt = parseInt(objGrid.getCellProperty("body", nBodyCnt-1, "row"));

        	for (var i=0; i<nHeadCnt; i++)
        	{
        		var nHeadCol = objGrid.getCellProperty("head", i, "col");
        		var nHeadRow = objGrid.getCellProperty("head", i, "row");

        		if (nHeadRowCnt == nBodyRowCnt)
        		{
        			// Head, Body라인이 동일한 경우
        			if (nHeadRow > nBodyRow) break;
        		}
        		else if (nHeadRowCnt > nBodyRowCnt)
        		{
        			// Head가 Body라인보다 많은경우
        			/* 전체Head라인 - 현재검색중인 Body라인 < 현재Head라인 */
        			if (nHeadRowCnt - (nBodyRowCnt - nBodyRow) < nHeadRow) break;
        		}
        		else
        		{
        			//해당경우가 발생할 경우 제한사항 추가해야함
        		}

        		if (nHeadCol == nBodyCol)
        		{
        			objHeadInfo["text"]	= this.fvGrd._xfnRemoveSortMarkText(objGrid.getCellProperty("head", i, "text"));
        			objHeadInfo["cell"]	= i;
        		}
        	}
        	return objHeadInfo;
        };

        /**
         *	fnSetSortInfo 		: 대상 그리드 정렬정보 셋팅 후 닫기
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnSetSortInfo = function()
        {
        	if (this.dsSort.getRowCount() <= 0)
        	{
        		var sMsg	 = "";
        			sMsg	+= "정렬항목이 선택되어 있지 않아 초기화 됩니다.";
        			sMsg	+= "\r\n";
        			sMsg	+= "그래도 계속하시겠습니까?";

        		if (!take.confirm(this, "question", "MS00000076")) return;
        	}

        	this.fvGrd._xfnRemoveSortMarkGrid(this.fvGrd);

        	// 정렬정보 초기화
        	this.fvGrd["_sortInfo"] = {};
        	this.fvGrd["_sortItem"] = [];

        	var bMultiple  = false;

        	var   sortInfos = this.fvGrd["_sortInfo"]
        		, sortItems = this.fvGrd["_sortItem"]
        		, sortInfo, sortItem , status;

        	for (var i=0; i<this.dsSort.getRowCount(); i++)
        	{
        		var nHeadCell  = parseInt(this.dsSort.getColumn(i, "HEADCELL"));
        		var nBodyCell  = this.fvGrd._xfnGridGetBodyCellIndex(this.fvGrd, nHeadCell);
        		var sColumnName= this.fvGrd._xfnGridGetBindColumnNameByIndex(this.fvGrd, nBodyCell);
        		var sortStatus = this.dsSort.getColumn(i, "TYPE") == "0" ? 2 : 1;

        		sortInfo = sortInfos[sColumnName];

        		if (i>0) bMultiple = true;

        		if (this.fvGrd._xfnIsEmpty(sortInfo))
        		{
        			var headText = this.fvGrd.getCellText(-1, nHeadCell);

        			// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
        			// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다.
        			var refCell = this.fvGrd._xfnGridGetGridCellObject(this.fvGrd, "head", nHeadCell  );
        			sortInfo = sortInfos[sColumnName] = {status: 0, text : headText, refCell : refCell};
        		}

        		// set sort status
        		if (bMultiple)
        		{
        			status = sortInfo.status;

        			if (sortStatus == -1)
        			{
        					 if (status == 0) sortInfo.status = 1;
        				else if (status == 1) sortInfo.status = 2;
        				else if (status == 2) sortInfo.status = (this.fvGrd.sortToggleCancel ? 0 : 1);
        			}
        			else
        				sortInfo.status = sortStatus;
        		}
        		else
        		{
        			for (var p in sortInfos)
        			{
        				if (sortInfos.hasOwnProperty(p))
        				{
        					sortInfo = sortInfos[p];

        					// 해당 컬럼은 정렬 상태를 변경 아니면 초기화
        					if (p == sColumnName)
        					{
        						status = sortInfo.status;
        						if (sortStatus == -1)
        						{
        								 if (status == 0) sortInfo.status = 1;
        							else if (status == 1) sortInfo.status = 2;
        							else if (status == 2) sortInfo.status = (this.fvGrd.sortToggleCancel ? 0 : 1);
        						}
        						else
        						{
        							sortInfo.status = sortStatus;
        						}
        					}
        					else
        						sortInfo.status = 0;

        					// 초기화 하면서 sortItem 에서 컬럼제거
        					if (sortInfo.status == 0)
        					{
        						for (var j=0, len2=sortItems.length; j<len2; j++)
        						{
        							if (sortItems[j] !== sColumnName)
        							{
        								sortItems.splice(j, 1);
        								break;
        							}
        						}
        					}
        				}
        			}
        		}

        		// 정렬대상컬럼 (순서중요)
        		var bHasItem = false;
        		for (var i=0, len=sortItems.length; i<len; i++)
        		{
        			if (sortItems[i] == sColumnName)
        			{
        				bHasItem = true;
        				break;
        			}
        		}

        		if (!bHasItem)
        			sortItems.push(sColumnName);
        	}

        	this.fvGrd._xfnClose(this);
        };

        /**
         *	fnAddSortInfo 		: 정렬대상 그리드 이동
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnAddSortInfo = function(nRow, bAsc)
        {
        	var nIdx = this.dsItem.getColumn(nRow, "INDEX");
        		bAsc = (bAsc == false ? "0" : "1");

        	if (this.dsSort.findRow("INDEX", nIdx) < 0)
        	{
        		var nAddRow = this.dsSort.addRow();

        		this.dsSort.setColumn(nAddRow, "INDEX"	 	, nIdx								 	  );
        		this.dsSort.setColumn(nAddRow, "COLID"	  	, this.dsItem.getColumn(nRow, "COLID"	 ));
        		this.dsSort.setColumn(nAddRow, "COLNM"	  	, this.dsItem.getColumn(nRow, "COLNM"	 ));
        		this.dsSort.setColumn(nAddRow, "HEADCELL"	, this.dsItem.getColumn(nRow, "HEADCELL" ));
        		this.dsSort.setColumn(nAddRow, "TYPE"		, bAsc									  );

        		this.dsItem.deleteRow(nRow);
        	}
        };

        /**
         *	fnDelSortInfo 		: 정렬대상 그리드 제외
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnDelSortInfo = function(nRow)
        {
        	var nAddRow	= this.dsItem.addRow();

        	if (this.dsItem.copyRow(nAddRow, this.dsSort, nRow))
        		this.dsSort.deleteRow(nRow);
        };

        this.grdSort_oncellclick = function(obj,e)
        {
        	obj.dropdownCombo();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comSort_onload,this);
            this.addEventHandler("onkeydown",this.comSort_onkeydown,this);
            this.grdItem.addEventHandler("oncelldblclick",this.grdItem_oncelldblclick,this);
            this.grdSort.addEventHandler("oncelldblclick",this.grdItem_oncelldblclick,this);
            this.grdSort.addEventHandler("oncellclick",this.grdSort_oncellclick,this);
            this.btnAddItem.addEventHandler("onclick",this.btnAddItem_onclick,this);
            this.btnDelItem.addEventHandler("onclick",this.btnDelItem_onclick,this);
            this.btnUpItem.addEventHandler("onclick",this.btnUpItem_onclick,this);
            this.btnDownItem.addEventHandler("onclick",this.btnDownItem_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.dsItem.addEventHandler("oncolumnchanged",this.dsItem_oncolumnchanged,this);
        };
        this.loadIncludeScript("comSort.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
