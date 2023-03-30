(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFind");
            this.set_titletext("찾기");
            this.set_border("1px solid #c0c0c0");
            this.set_background("#ffffff");
            this.getSetter("classname").set("comFind");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,214);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsColInfo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COLID\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDirect", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static10_00_00_00","129","100",null,"81","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","129","70",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","129","10",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkEqual","134","150","211","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("전체문자일치");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkCheckCase","134","128","211","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("대소문자구분");
            obj.set_value("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCode00_00","10","70","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("검색방향");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","0","181",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,null,"80","23","179","5",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("다음찾기");
            obj.set_cssclass("btn_WF_search01");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"58","23","118","5",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel01");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","10","10","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색범위");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSchCol","134","15",null,"21","16",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsColInfo");
            obj.set_codecolumn("COLID");
            obj.set_datacolumn("COLNM");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkRepeat","134","106","211","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("반복검색");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01","0","0","400","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","0","0","10","240",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00",null,"10","10","240","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","129","40",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCode00","10","40","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("검색문자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSchVal","134","45",null,"21","16",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCode00_00_00","10","100","120","81",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("검색옵션");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","10",null,null,"5","0","0",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDirection","134","74",null,"23","16",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("dsDirect");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_autoselect("true");
            obj.set_text("아래로");
            obj.set_value("DOWN");
            obj.set_index("0");
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
        this.registerScript("comGridFind.xfdl", function() {
        /***************************************************************************************************
         * 업무구분		: 포탈(대시보드) 시스템 구축
         * 화 면 명		: comFind.xfdl
         * 화면설명		: 그리드 공통 찾기 팝업
         * 작 성 자		: TOBESOFT
         * 작 성 일		:
         * 수정이력
         ***************************************************************************************************
         *	수 정 일		수 정 자		수정 내용
         ***************************************************************************************************
         *									내부팝업입니다. 직접 사용하지 마세요.
         ***************************************************************************************************/

        /***************************************************************************************************
         *	FORM 변수 선언 영역
         ***************************************************************************************************/
        this.fvGrd,this.fvDst,this.fvRow;

        /***************************************************************************************************
         *	FORM EVENT 영역 (onload)
         ***************************************************************************************************/
        /**
         *	comFind_onload		: onload Event
         *	@ return 			: N/A
         */
        this.comFind_onload = function(obj, e)
        {
        	var objParamInfo = this.parent.gridInfo;

        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		take.tranCode(this, ["00040"], ["dsDirect"], "NONE",
        			function(){
        				this.cboDirection.set_value("DOWN");
        			}
        		);

        		var objParamInfo = this.parent.gridInfo;

        		/* 대상그리드에 대한 컬럼정보 수집 */
        		this.fvGrd	 = objParamInfo["grid"];
        		this.fvDst	 = this.fvGrd.getBindDataset();
        		this.fvRow	 = this.fnInitFind();

        		var nRow	 = objParamInfo["row" ];
        		var nCell	 = objParamInfo["cell"];
        		var nCol	 = objParamInfo["col" ];
        		var nComboIdx=  0;
        		var nFindRow = -1;

        		/* 찾기 및 바꾸기 컬럼정보 설정 */
        		this.fnGatherColInfo();

        		if (nRow == -1)
        		{
        			// Head를 선택했을때
        			var sCellTxt = this.fvGrd._xfnTrim(this.fvGrd.getCellProperty("head", nCell, "text"));
        				sCellTxt = this.fvGrd._xfnRemoveSortMarkText(sCellTxt);

        				nFindRow = this.dsColInfo.findRow("COLNM", sCellTxt );
        		}
        		else if (nRow >= 0)
        		{
        			// Body를 선택했을때
        			var sCellTxt = this.fvGrd._xfnTrim(this.fvGrd.getCellProperty("body", nCell, "text"));

        			if (sCellTxt.toLowerCase().indexOf("bind:") >= 0)
        			{
        				sCellTxt = sCellTxt.substr(5);
        				nFindRow = this.dsColInfo.findRow("COLID", sCellTxt);
        			}
        		}

        		if (nFindRow >= 0)
        		{
        			nComboIdx = nFindRow;
        			this.edtSchVal.setFocus();
        		}
        		this.fv_nComboIdx = nComboIdx;
        		this.cboSchCol.set_index(nComboIdx);
        	}
        };

        /**
         *	comFind_onkeydown	: onkeydown Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.comFind_onkeydown = function(obj, e)
        {
        	if (e.keycode == 27) this.fvGrd._xfnClose(this, "");
        }

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
         *	edtSchVal_onkeydown	: onkeydown Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.edtSchVal_onkeydown = function(obj, e)
        {
        	if (e.keycode == "13") this.btnNext.click();
        }

        /**
         *	edtSchVal_onchanged	: onchanged Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.edtSchVal_onchanged = function(obj, e)
        {
        	this.fnInitFind();
        }

        /**
         *	cboSchCol_onitemchanged	: onitemchanged Event
         *	@ return 				: N/A
         *	@ example 				: N/A
         */
        this.cboSchCol_onitemchanged = function(obj, e)
        {
        	this.fnInitFind();
        	this.fv_nComboIdx = e.postindex;
        	trace("this.fv_nComboIdx >>>  "+this.fv_nComboIdx);
        }

        /**
         *	chkCommon_onchanged	: onchanged  Event
         *	@ return 				: N/A
         *	@ example 				: N/A
         */
        this.chkCommon_onchanged = function(obj, e)
        {
        	this.fnInitFind();
        }

        /**
         *	btnNext_onclick	: onclick Event
         *	@ return 		: N/A
         *	@ example 		: N/A
         */
        this.btnNext_onclick = function(obj,  e)
        {
        	var nOldFindRow	= this.fvRow;			// 기존 찾은 값
        	var nNewFindRow	= this.fnGetFindData();	// 현재 찾은 값
            var nCell;

        	// 기존에 찾는 Row가 지금 찾은 Row와 같으면
        	if (nOldFindRow >= 0 && nOldFindRow == nNewFindRow)
        	{
        		this.alert("현재 찾은 데이터 외 더 이상 찾는 데이터가 없습니다.");
        		this.edtSchVal.setFocus();
        		return;
        	}

        	this.fvRow	= nNewFindRow;

        	if (nNewFindRow < 0)
        	{
        		if (nOldFindRow >= 0)
        			this.alert("더 이상 찾는 데이터가 없습니다.");
        		else
        			this.alert("찾는 데이터가 없습니다."			);

        		this.edtSchVal.setFocus();
        		return;
        	}
        	else
        	{
                //nCell = this.parent.gridInfo["cell"];
                nCell = this.fvGrd.getBindCellIndex( "body", this.fvGrd._xfnTrim(this.cboSchCol.value));

        		this.fvDst.set_rowposition(nNewFindRow);
        		this.fvGrd.setCellPos(nCell);

                if (this.fvGrd.selecttype.indexOf("area")>=0)
                {
                    this.fvGrd.selectArea( nNewFindRow, nCell, nNewFindRow, nCell );
                }

        // 		if (this.fvGrd.selecttype != "row")
        // 		{
        // 			this.fvGrd.clearSelect();
        // 			this.fvGrd.selectRow(nNewFindRow, true);
        // 		}
        	}
        }

        /**
         *	btnClose_onclick 	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnClose_onclick = function(obj,  e)
        {
        	this.fvGrd._xfnClose(this, "");
        }

        /***************************************************************************************************
         *	사용자 FUNCTION 영역
         ***************************************************************************************************/
         /**
         *	fnInitFind 	: 검색 Row 값 초기화
         *	@ return 	: N/A
         *	@ example 	: N/A
         */
        this.fnInitFind = function()
        {
        	this.fvRow	= -1;
            this.fvDst.set_rowposition(0);
        }

        /**
         *	fnGatherColInfo	: 검색범위 Dataset 생성
         *	@ return 		: N/A
         *	@ example 		: N/A
         */
        this.fnGatherColInfo = function()
        {
        	this.dsColInfo.set_enableevent(false);

        	for (var i=0; i<this.fvGrd.getCellCount("body"); i++)
        	{
        		if (this.fvGrd.getCellProperty("body", i, "displaytype") != "image")
        		{
        			/* head와 body의 column index가 다른경우 확인해야함 */
        			var sCellTxt	= this.fvGrd._xfnTrim(this.fvGrd.getCellProperty("body", i, "text"));

        			var nCellRow	= parseInt(this.fvGrd._xfnTrim(this.fvGrd.getCellProperty("body", i, "row")));
        			var nCellCol	= parseInt(this.fvGrd._xfnTrim(this.fvGrd.getCellProperty("body", i, "col")));

        			if (sCellTxt.toLowerCase().indexOf("bind:") < 0) continue;
        				sCellTxt = sCellTxt.substr(5);

        			var objColInfo	= this.fvDst.getColumnInfo(sCellTxt);

        			if (this.fvGrd._xfnIsEmpty(objColInfo)) continue;

        			 // 공통체크박스 제외
        			if (sCellTxt == "chk") continue;

        			/* 마지막 Row에 대한 명칭을 가져온다 */
        			var sHeadTxt		= this.fnGetHeadText(this.fvGrd, nCellCol, nCellRow);
        				sHeadTxt		= this.fvGrd._xfnNvl(sHeadTxt, sCellTxt);

        			var nRow	= this.dsColInfo.addRow();
        			this.dsColInfo.setColumn(nRow, "COLID", sCellTxt);
        			this.dsColInfo.setColumn(nRow, "COLNM", sHeadTxt);
        		}
        	}

        	this.dsColInfo.set_enableevent(true);
        }

        /**
         *	fnGetHeadText	: 대상 그리드 Head 정보 추출
         *	@ return 		: N/A
         *	@ example 		: N/A
         */
        this.fnGetHeadText = function(objGrid, nBodyCol, nBodyRow)
        {
        	var sHeadTxt	= "";
        	var nHeadCnt	= objGrid.getCellCount("head");
        	var nBodyCnt	= objGrid.getCellCount("body");
        	var nHeadRowCnt = parseInt(objGrid.getCellProperty("head", nHeadCnt-1, "row"));
        	var nBodyRowCnt = parseInt(objGrid.getCellProperty("body", nBodyCnt-1, "row"));

        	for(var i=0; i<nHeadCnt; i++)
        	{
        		var nHeadCol = objGrid.getCellProperty("head", i, "col");
        		var nHeadRow = objGrid.getCellProperty("head", i, "row");

        		// Head, Body라인이 동일한 경우
        		if (nHeadRowCnt == nBodyRowCnt)
        		{
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
        			sHeadTxt	= objGrid._xfnRemoveSortMarkText(objGrid.getCellProperty("head", i, "text"));
        	}

        	return sHeadTxt;
        }

        /**
         *	fnGetFindData	: 대상 그리드에서 일치하는 값 찾기
         *	@ return 		: N/A
         *	@ example 		: N/A
         */
        this.fnGetFindData = function()
        {
        	var strSearchColId	= this.fvGrd._xfnTrim(this.cboSchCol.value);
        	var strSearchString	= this.fvGrd._xfnNullToEmpty(this.edtSchVal.value); // String

        	if (this.fvGrd._xfnIsEmpty(strSearchColId))
        	{
        		this.alert("검색범위를 선택하세요.");
        		this.cboSchCol.setFocus();
        		return;
        	}

        	if (this.fvGrd._xfnIsEmptyTrim(strSearchString))
        	{
        		this.alert("검색문자를 입력하세요." );
        		this.edtSchVal.setFocus();
        		return;
        	}

        	var nCurrow			= Math.max(this.fvDst.rowposition, 0);

        	var nFindRow		= -1; //초기화
        	var bEqualSearch	= this.chkEqual.isChecked();
        	var bCheckCase		= this.chkCheckCase.isChecked();
        	var bRepeat			= this.chkRepeat.isChecked();
        	var strDirection	= this.cboDirection.value;
        	var strColType		= this.fvDst.getColumnInfo(strSearchColId).type.toUpperCase();

        	// STRING 으로 취급하여 처리하며 INT,FLOAT,BIGDECIMAL,DATE 의 경우 전체일치 검색으로 처리
        	switch(strColType)
        	{
        		case "INT" 		  :
        		case "FLOAT" 	  :
        		case "BIGDECIMAL" :
        			if (!this.fvGrd._xfnIsDigit(strSearchString	   )) return false;	// 숫자는 무조건 일치
        		break;

        		case "DATE" :
        			if (!this.fvGrd._xfnIsStringDate(strSearchString)) return false;	// 날짜는 무조건 일치
        		break;
        	}

        	var nStartRow  = nCurrow;

        	// 순차검색
        	if (strDirection == "DOWN")
        	{
        		if (nCurrow == this.fvRow) nStartRow++;

        		for (var i=nStartRow; i<this.fvDst.getRowCount(); i++)
        		{
        			var strColData	= String(this.fvDst.getColumn(i, strSearchColId)); 		// String

        			if (this.fnIsMatching(strColData, strSearchString, bEqualSearch, bCheckCase))
        			{
        				nFindRow	= i;
        				break;
        			}
        		}

        		if (bRepeat && nFindRow < 0)
        		{
        			for (var i=0; i<nStartRow; i++)
        			{
        				var strColData	= String(this.fvDst.getColumn(i, strSearchColId)); // String

        				if (this.fnIsMatching(strColData, strSearchString, bEqualSearch, bCheckCase))
        				{
        					nFindRow	= i;
        					break;
        				}
        			}
        		}
        	}
        	else
        	{
        		// 역순검색
        		if (nCurrow == this.fvRow) nStartRow--;

        		for (var i=nStartRow; i>=0; i--)
        		{
        			var strColData	= String(this.fvDst.getColumn(i, strSearchColId));

        			if (this.fnIsMatching(strColData, strSearchString, bEqualSearch, bCheckCase))
        			{
        				nFindRow	= i;
        				break;
        			}
        		}
        		if (bRepeat && nFindRow < 0)
        		{
        			for (var i=this.fvDst.getRowCount()-1; i>nStartRow; i--)
        			{
        				var strColData	= String(this.fvDst.getColumn(i, strSearchColId));

        				if (this.fnIsMatching(strColData, strSearchString, bEqualSearch, bCheckCase))
        				{
        					nFindRow	= i;
        					break;
        				}
        			}
        		}
        	}
        	return nFindRow;
        }

        /**
         *	fnGetFindData	: 대상 그리드에서 일치하는 값 여부
         *	@ return 		: N/A
         *	@ example 		: N/A
         */
        this.fnIsMatching = function(strTarget, strSubString, bEqual, bCheckCase)
        {
        	if (!bCheckCase)
        	{
        		strTarget		= strTarget.toUpperCase();
        		strSubString	= strSubString.toUpperCase();
        	}

        	if (strTarget == strSubString)
        	{
        		return true;
        	}
        	else if (!bEqual && strTarget.indexOf(strSubString) >= 0)
        	{
        		return true;
        	}

        	return false;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comFind_onload,this);
            this.addEventHandler("onkeydown",this.comFind_onkeydown,this);
            this.chkEqual.addEventHandler("onchanged",this.chkCommon_onchanged,this);
            this.chkCheckCase.addEventHandler("onchanged",this.chkCommon_onchanged,this);
            this.btnNext.addEventHandler("onclick",this.btnNext_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.cboSchCol.addEventHandler("onitemchanged",this.cboSchCol_onitemchanged,this);
            this.chkRepeat.addEventHandler("onchanged",this.chkCommon_onchanged,this);
            this.edtSchVal.addEventHandler("onkeydown",this.edtSchVal_onkeydown,this);
            this.edtSchVal.addEventHandler("onchanged",this.edtSchVal_onchanged,this);
            this.cboDirection.addEventHandler("onitemchanged",this.cboSchCol_onitemchanged,this);
        };
        this.loadIncludeScript("comGridFind.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
