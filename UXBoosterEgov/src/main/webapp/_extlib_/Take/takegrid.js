/***************************************************************************************************
 * 업무구분		: UXBooster
 * 화 면 명		:
 * 화면설명		:
 * 작 성 자		: (주)테이크
 * 작 성 일		:
 * 수정이력
 ***************************************************************************************************
 *	수 정 일		수 정 자		수정 내용
 ***************************************************************************************************
 *	
 ***************************************************************************************************/

var _xExtendGrid = nexacro.Grid.prototype;

	_xExtendGrid.constAscMark	= "▲";	// 헤더 클릭시 정렬 선언
	_xExtendGrid.constDescMark	= "▼";	// 헤더 클릭시 정렬 선언

	// 헤더 클릭시 정렬 false : 오름/내림 true : 오름/내림/없음
	_xExtendGrid.sortToggleCancel= true;
	//_xExtendGrid.popupmenulist   ="checkbox,no,status,movetocell,sort,find,filter,move,hide,excel,fix,reset,total,readonly,visible,enable,personal,addrow,delrow"; //개인화 적용
    _xExtendGrid.popupmenulist   ="checkbox,no,status,sort,find,filter,move,hide,excel,fix,reset,rowcount,rowcopy"; //개인화 제거, total 제거, readonly제거, visible제거, enable제거, movetocell제거
//var _xExtendForm 				 = nexacro.Form.prototype;
var onGridCreatedContents 		 = nexacro.Grid.prototype.on_created_contents;
var onGridAttachContentsHandle 	 = nexacro.Grid.prototype.on_attach_contents_handle;
var _xSvcId						 = "SVC_LOC::";

_xExtendGrid.on_created_contents = function()
{
	// 기존 스크립트 실행
	onGridCreatedContents.apply(this, arguments);

    //그리드 공통 세팅
    this._xfnAllSetting(this);
    
    //Take grid 체크
    this._xfnTakeGrid(this);
	
};

//html5
_xExtendGrid.on_attach_contents_handle = function()
{
	onGridAttachContentsHandle.apply(this, arguments);

    //그리드 공통 세팅
    this._xfnAllSetting(this);
    
    //Take grid 체크
    this._xfnTakeGrid(this);	
};

//take grid 기능체크
_xExtendGrid._xfnTakeGrid = function(objGrid)
{
    try
    {
        if (take.nvl(this.takegrid,"") != "")
        {
            this._xfnSetUseGridSetting(this);
            this._xfnRowCount(this);
            
            //온로드시 리사이즈 오류부분 예외 처리를 위해 적용 
			nexacro._OnceCallbackTimer.callonce
            (
                this,
                function () 
                {
                    this._xfnSetUseGridFunction(this);
                    trace("Grid Components Override Success !!" + this.name);    
				},
                100
            );
        }
    } catch (e) {
        trace("takegrid.on_attach_contents_handle error");
        trace("error name : " + e.name);
        trace("error message : " + e.message);
        trace(e.stack);
    }
}

//스크립트로 그리드 기능 적용
_xExtendGrid.setTakeGrid = function(sOption)
{
    this.takegrid = sOption;
    //this._xfnTakeGrid(this);
    this._xfnAllSetting(this);
    this._xfnSetUseGridSetting(this);
    this._xfnRowCount(this);
    this._xfnSetUseGridFunction(this);
    //this._xfnSetUseGridFunction(this);
}

//그리드 공통 세팅
_xExtendGrid._xfnAllSetting = function(objGrid)
{
    var objFormat, objBodyCells;
    var nCnt;
    
    //그리드 스크롤바 제어
    //objGrid.set_scrollbardecbuttonsize(0);
    //objGrid.set_scrollbarincbuttonsize(0);
    objGrid.set_scrollbarsize(15);
    
    //objGrid.set_nodataimage("theme://images/img_WF_noData.png");
    objGrid.set_nodataimage("theme://images/Alert_nodataimage.png");    
    
    //셀 사이즈 변경 가능하도록 설정 (기본값이 아닐 경우는 변경 안함)
    if (take.nvl(objGrid.cellsizingtype,"none")=="none")
    {
        objGrid.set_cellsizingtype("col");
    }
    
    //autoenter 옵션 부여
    if (take.nvl(objGrid.autoenter,"none")=="none")
    {
        objGrid.set_autoenter("select");
    }

    if (take.nvl(this.takegrid,"") != "")
    {
        if (this.takegrid.indexOf("wordwrap")>=0)
        {
            take.trace("System", "Info", "wordwrap 기능 설정시 그리드 성능이 느려질수 있습니다.");
            
            //그리드 행 높이를 자동으로 지정 (기본값이 아닐 경우는 변경 안함)
            if (take.nvl(objGrid.autosizingtype,"none")=="none")
            {
                objGrid.set_autosizingtype("row");
            }    
            
            if (take.nvl(objGrid.extendsizetype,"none")=="none")
            {
                objGrid.set_extendsizetype("row");
            }
        
            //그리드 포멧
            objFormat = take.nvl(objGrid._curFormat,"");
            
            if (objFormat!="")
            {
                //auto row size 옵션 및 개행 처리 옵션 제어    
                objBodyCells = take.nvl(objFormat._bodycells,"");
                
                if (objBodyCells!="")
                {
                    nCnt = objBodyCells.length;
                    
                    for (var i=0; i<nCnt; i++)
                    {
                        if (take.nvl(objBodyCells[i].autosizerow,"default")=="default")
                        {
                            objBodyCells[i].autosizerow = "limitmin";
                        }
                        
                        if (take.nvl(objBodyCells[i].wordWrap._value,"")=="")
                        {
                            objBodyCells[i].wordWrap._value = "char";
                        }
                    }
                }
                
    //             //body row 사이즈 제어
    //             objBodyRows = take.nvl(objFormat._bodyrows,"");
    //             
    //             if (objBodyRows!="")
    //             {
    //                 nCnt = objBodyRows.length;
    //                 nAddH = 0;
    //                 
    //                 for (var j=0; j<nCnt; j++)
    //                 {
    //                     if (objBodyRows[j].size==20)
    //                     {
    //                         objBodyRows[j].bottom    = 26+nAddH;
    //                         objBodyRows[j].orgbottom = 26+nAddH;
    //                         objBodyRows[j].orgsize   = 26;
    //                         objBodyRows[j].orgtop    = nAddH;
    //                         objBodyRows[j].size      = 26;
    //                         objBodyRows[j].top       = nAddH;                    
    //                         nAddH += 26;
    //                     } else {
    //                         nAddH += objBodyRows[j].size;
    //                     }
    //                 }
    //             }
    //             
    //             //head row 사이즈 제어
    //             objHeadRows = take.nvl(objFormat._headrows,"");
    //             
    //             if (objHeadRows!="")
    //             {
    //                 nCnt = objHeadRows.length;
    //                 nAddH = 0;
    //                 
    //                 for (var k=0; k<nCnt; k++)
    //                 {
    //                     if (objHeadRows[k].size==20 || objHeadRows[k].size==22 || objHeadRows[k].size==25)
    //                     {
    //                         objHeadRows[k].bottom    = 34+nAddH;
    //                         objHeadRows[k].orgbottom = 34+nAddH;
    //                         objHeadRows[k].orgsize   = 34;
    //                         objHeadRows[k].orgtop    = nAddH;
    //                         objHeadRows[k].size      = 34;
    //                         objHeadRows[k].top       = nAddH;                    
    //                         nAddH += 34;
    //                     } else {
    //                         nAddH += objHeadRows[k].size;
    //                     }
    //                 }
    //             }            
            }
        }
    }
    
    //콤보, 달력 cell component들 클릭 제어
    //Grid oncellclick Event
	objGrid.addEventHandler(
        "oncellclick",  
        function (obj, e) {
            obj.dropdownCombo();
            
            if (!(obj.isdropdowncalendar=="false" || obj.isdropdowncalendar == false))
            {
                obj.dropdownCalendar();
            }
        },
        this);
}

_xExtendGrid._xfnSetUseGridSetting = function(obj)
{
    var sUserFunction = obj.takegrid;
    var oTarget = obj;
    var objBindDs = take.nvl(obj.getBindDataset(),"");
    var objParent = obj.parent;
    
	if (this._xfnIsEmpty(sUserFunction)) sUserFunction = "false";

	if (sUserFunction == "false") return;
	var arrFunc	      = (sUserFunction).split(',');

    //초기화
    this["_usePopMenu"]    = "N";
    this["_useSort"]       = "N";
    this["_useFind"]       = "N";
    this["_useFilter"]     = "N";
    this["_useMove"]       = "N";
    this["_useHide"]       = "N";
    this["_useExcel"]      = "N";
    this["_useFix"]        = "N";
    this["_usePersonal"]   = "N";
    this["_useReset"]      = "N";
    this["_useChkbox"]     = "N";
    this["_useNo"]         = "N";
    this["_useStatus"]     = "N";
    this["_useMoveToCell"] = "N";
    this["_useTotal"]      = "N";
    this["_useReadonly"]   = "N";
    this["_useVisible"]    = "N";
    this["_useEnable"]     = "N";
    this["_useAddrow"]     = "N";
    this["_useDelrow"]     = "N";
    this["_usePagging"]    = "N";
    this["_useScroll"]     = "N";
    this["_useRowcount"]   = "N";
    this["_useRowCopy"]    = "N";

	for (var i=0; i<arrFunc.length; i++)
	{
		var strFunc		= this._xfnTrim(arrFunc[i]);

		if (this._xfnIsEmpty(strFunc  )) continue;

		var arrTmp		= strFunc.split(':');
		var strFuncId	= this._xfnTrim(arrTmp[0]).toLowerCase();

		if (this._xfnIsEmpty(strFuncId)) continue;

		var strUseYn	= this._xfnNvl(arrTmp[1], "Y");

			 if (strUseYn == "true" || strUseYn == "Y" || strUseYn == "y")
				 strUseYn	= "Y";
		else if (strUseYn == "false"|| strUseYn == "N" || strUseYn == "n")
				 strUseYn	= "N";

		if (strFuncId == "all")
		{
			this["_usePopMenu" ]	= strUseYn;
			this["_useSort"	   ]	= strUseYn;
			this["_useFind"	   ]	= strUseYn;
			this["_useFilter"  ]	= strUseYn;
			this["_useExcel"   ]	= strUseYn;
			this["_useFix"	   ]	= strUseYn;
//			this["_usePersonal"]	= strUseYn;
			this["_useHide"	   ]	= strUseYn;
			this["_useMove"    ]	= strUseYn;
			this["_useReset"   ]	= strUseYn;
			this["_useChkbox"  ]	= strUseYn;
			this["_useNo"	   ]	= strUseYn;
			this["_useStatus"  ]	= strUseYn;
			this["_useMoveToCell"]	= strUseYn;
//			this["_useTotal"   ]	= strUseYn;
			this["_useReadonly"]	= "N";
			this["_useVisible" ]	= strUseYn;
			this["_useEnable"  ]	= strUseYn;
			this["_useAddrow"  ]	= strUseYn;
			this["_useDelrow"  ]	= strUseYn;
            this["_useRowcount"]	= strUseYn;
            this["_useRowCopy"]     = strUseYn;
            
			// All을 만나면 Loop 끝...
			//break;
		} else if (strFuncId == "select") {
        
            this["_usePopMenu" ]	= strUseYn;
            this["_useNo"	   ]	= strUseYn;
            //this["_useMoveToCell"]	= strUseYn;
            this["_useSort"	   ]	= strUseYn;
            this["_useFind"	   ]	= strUseYn;
            this["_useFilter"  ]	= strUseYn;
            this["_useMove"    ]	= strUseYn;
            this["_useHide"	   ]	= strUseYn;
            this["_useExcel"   ]	= strUseYn;
            this["_useFix"	   ]	= strUseYn;
            this["_useReset"   ]	= strUseYn;            
			this["_useReadonly"]	= "N";
            this["_useRowcount"  ]	= strUseYn;
            
        } else if (strFuncId == "crud") {
            
            this["_usePopMenu" ]	= strUseYn;
            this["_useChkbox"  ]	= strUseYn;
            this["_useNo"	   ]	= strUseYn;
            this["_useStatus"  ]	= strUseYn;
            //this["_useMoveToCell"]	= strUseYn;
            this["_useSort"	   ]	= strUseYn;
            this["_useFind"	   ]	= strUseYn;
            this["_useFilter"  ]	= strUseYn;
            this["_useMove"    ]	= strUseYn;
            this["_useHide"	   ]	= strUseYn;
            this["_useExcel"   ]	= strUseYn;
            this["_useFix"	   ]	= strUseYn;
            this["_useReset"   ]	= strUseYn;
			this["_useReadonly"]	= "N";
            this["_useRowcount"  ]	= strUseYn;
            this["_useRowCopy"]     = strUseYn;
            
        } else if (strFuncId == "paggingall") {
        
            this["_usePopMenu" ]	= strUseYn;
			//this["_useSort"	   ]	= strUseYn;
			//this["_useFind"	   ]	= strUseYn;
			//this["_useFilter"  ]	= strUseYn;
			this["_useExcel"   ]	= strUseYn;
			this["_useFix"	   ]	= strUseYn;
            //this["_usePersonal"]	= strUseYn;
			this["_useHide"	   ]	= strUseYn;
			this["_useMove"    ]	= strUseYn;
			this["_useReset"   ]	= strUseYn;
			this["_useChkbox"  ]	= strUseYn;
			this["_useNo"	   ]	= strUseYn;
			this["_useStatus"  ]	= strUseYn;
			//this["_useMoveToCell"]	= strUseYn;
            this["_usePagging"]	    = strUseYn;
            this["_useRowcount"  ]	= strUseYn;
            this["_useRowCopy"]     = strUseYn;
            
        } else if (strFuncId == "paggingselect") {
        
            this["_usePopMenu" ]	= strUseYn;
            this["_useNo"	   ]	= strUseYn;
            //this["_useMoveToCell"]	= strUseYn;
            //this["_useSort"	   ]	= strUseYn;
            //this["_useFilter"  ]	= strUseYn;
            this["_useMove"    ]	= strUseYn;
            this["_useHide"	   ]	= strUseYn;
            this["_useExcel"   ]	= strUseYn;
            this["_useFix"	   ]	= strUseYn;
            this["_useReset"   ]	= strUseYn;            
			this["_useReadonly"]	= "N";
            this["_usePagging"]	    = strUseYn;
            this["_useRowcount"  ]	= strUseYn;
            
        } else if (strFuncId == "paggingcrud") {      
        
            this["_usePopMenu" ]	= strUseYn;
            this["_useChkbox"  ]	= strUseYn;
            this["_useNo"	   ]	= strUseYn;
            this["_useStatus"  ]	= strUseYn;
            //this["_useMoveToCell"]	= strUseYn;
            //this["_useSort"	   ]	= strUseYn;
            //this["_useFilter"  ]	= strUseYn;
            this["_useMove"    ]	= strUseYn;
            this["_useHide"	   ]	= strUseYn;
            this["_useExcel"   ]	= strUseYn;
            this["_useFix"	   ]	= strUseYn;
            this["_useReset"   ]	= strUseYn;
			this["_useReadonly"]	= "N";
            this["_usePagging"]	    = strUseYn;
            this["_useRowcount"  ]	= strUseYn;
            this["_useRowCopy"]     = strUseYn;
            
        } else if (strFuncId == "scrollall") {
        
            this["_usePopMenu" ]	= strUseYn;
			//this["_useSort"	   ]	= strUseYn;
			//this["_useFind"	   ]	= strUseYn;
			//this["_useFilter"  ]	= strUseYn;
			this["_useExcel"   ]	= strUseYn;
			this["_useFix"	   ]	= strUseYn;
            //this["_usePersonal"]	= strUseYn;
			this["_useHide"	   ]	= strUseYn;
			this["_useMove"    ]	= strUseYn;
			this["_useReset"   ]	= strUseYn;
			this["_useChkbox"  ]	= strUseYn;
			this["_useNo"	   ]	= strUseYn;
			this["_useStatus"  ]	= strUseYn;
			//this["_useMoveToCell"]	= strUseYn;   
            this["_useScroll"  ]    = strUseYn;
            this["_useRowcount"  ]	= strUseYn;
            this["_useRowCopy"]     = strUseYn;
            
        } else if (strFuncId == "scrollselect") {
        
            this["_usePopMenu" ]	= strUseYn;
            this["_useNo"	   ]	= strUseYn;
            //this["_useMoveToCell"]	= strUseYn;
            //this["_useSort"	   ]	= strUseYn;
            //this["_useFilter"  ]	= strUseYn;
            this["_useMove"    ]	= strUseYn;
            this["_useHide"	   ]	= strUseYn;
            this["_useExcel"   ]	= strUseYn;
            this["_useFix"	   ]	= strUseYn;
            this["_useReset"   ]	= strUseYn;            
			this["_useReadonly"]	= "N";
            this["_useScroll"  ]    = strUseYn;
            this["_useRowcount"  ]	= strUseYn;
            
        } else if (strFuncId == "scrollcrud") {      
        
            this["_usePopMenu" ]	= strUseYn;
            this["_useChkbox"  ]	= strUseYn;
            this["_useNo"	   ]	= strUseYn;
            this["_useStatus"  ]	= strUseYn;
            //this["_useMoveToCell"]	= strUseYn;
            //this["_useSort"	   ]	= strUseYn;
            //this["_useFilter"  ]	= strUseYn;
            this["_useMove"    ]	= strUseYn;
            this["_useHide"	   ]	= strUseYn;
            this["_useExcel"   ]	= strUseYn;
            this["_useFix"	   ]	= strUseYn;
            this["_useReset"   ]	= strUseYn;
			this["_useReadonly"]	= "N";
            this["_useScroll"  ]    = strUseYn;
            this["_useRowcount"  ]	= strUseYn;
            this["_useRowCopy"]     = strUseYn;
        }

		else if (strFuncId == "popup" 	  )  this["_usePopMenu"	] = strUseYn;
		else if (strFuncId == "sort"  	  )  this["_useSort"	] = strUseYn;
		else if (strFuncId == "find"	  )  this["_useFind"	] = strUseYn;
		else if (strFuncId == "filter"	  )  this["_useFilter" 	] = strUseYn;
		else if (strFuncId == "move"	  )  this["_useMove"	] = strUseYn;
		else if (strFuncId == "hide"	  )  this["_useHide"	] = strUseYn;
		else if (strFuncId == "excel"	  )  this["_useExcel"	] = strUseYn;
		else if (strFuncId == "fix"		  )  this["_useFix"		] = strUseYn;
//		else if (strFuncId == "personal"  )  this["_usePersonal"] = strUseYn;
		else if (strFuncId == "reset"	  )  this["_useReset"	] = strUseYn;
		else if (strFuncId == "checkbox"  )  this["_useChkbox"	] = strUseYn;
		else if (strFuncId == "no"		  )  this["_useNo"		] = strUseYn;
		else if (strFuncId == "status"	  )  this["_useStatus"	] = strUseYn;
		else if (strFuncId == "movetocell")  this["_useMoveToCell"] = strUseYn;
//		else if (strFuncId == "total"	  )  this["_useTotal"	] = strUseYn;
		else if (strFuncId == "readonly"  )  this["_useReadonly"] = strUseYn;
//		else if (strFuncId == "visible"   )  this["_useVisible"	] = strUseYn;
//		else if (strFuncId == "enable"    )  this["_useEnable"	] = strUseYn;
//		else if (strFuncId == "addrow"    )  this["_useAddrow"	] = strUseYn;
//		else if (strFuncId == "delrow"    )  this["_useDelrow"	] = strUseYn;
//        else if (strFuncId == "pagging"   )  this["_usePagging"	] = strUseYn;
//        else if (strFuncId == "scroll"    )  this["_useScroll"	] = strUseYn;
        else if (strFuncId == "rowcount"  )  this["_useRowcount"] = strUseYn;
        else if (strFuncId == "rowcopy"  )   this["_useRowCopy"] = strUseYn;
	}
// 
    //바인드된 데이터셋에 그리드 주입;
    if (objBindDs!="") objBindDs._tObjTakeGrid = oTarget;
//     
//     this._xfnaddDsOnLoad(objParent, oTarget, objBindDs);
}

// Grid 마우스 우측 버튼 기능을 활성화 우측
_xExtendGrid._xfnSetUseGridFunction = function (obj)
{   
    var oTarget = obj;
    var objBindDs = take.nvl(obj.getBindDataset(),"");
    var objParent = obj.parent;
    
    //바인드된 데이터셋에 그리드 주입;
    if (objBindDs!="") objBindDs._tObjTakeGrid = oTarget;
    
    //autofittype 설정시 오류 회피
    if (take.nvl(this.autofittype,"")!="")
    {
        this._tOrgAutoFitType = this.autofittype;
        this.set_autofittype("none");
    }
            
//	// readonly 인 경우에는 버튼을 사용하지 않음, 조회용
//	if (!this._xfnIsPossibleGrid("readonly"	))
//	 	 this._xfnModifyRowInfoCommonButtonForGrid();

	// 그리드 체크박스, 상태컬럼, 순번컬럼 생성	
    //trace("순번 기능 start");
	if (this._xfnIsPossibleGrid("no"		)) 
    {
        this._xfnGridCheckboxNoStatusAdd("no"		);
    } else {
        if (this._xfnIsPossibleGrid("status"		)) this._xfnGridCheckboxNoStatusAdd("status"		);
    }
    
    //trace("순번 기능 End / 체크 기능 start");
	if (this._xfnIsPossibleGrid("checkbox"	)) this._xfnGridCheckboxNoStatusAdd("checkbox"  );
    //trace("체크 기능 End");

	if (this._xfnIsPossibleGrid("move"	 	)) this.set_cellmovingtype("col");
    
//  // 그리드 하단 합계바 생성
//	if (this._xfnIsPossibleGrid("total"		)) this._xfnGridTotalInfoAdd("total");

	// 그리드 열행고정 STATIC 생성
	if (this._xfnIsPossibleGrid("fix"		))
	{
        //nexacro._OnceCallbackTimer.callonce
        //(
        //   objParent,
        //   function () 
        //   {
               oTarget._xfnSetFixGrid(objParent, oTarget, objBindDs);
        //   },
        //   1
        //); 
	}

	if (this._xfnIsPossibleGrid("checkbox"	))
	{
        var oDst = objBindDs;
        
        // Grid onheadclick Event
        //obj.addEventHandler("onheadclick"	  , function (obj, e)
        take.addEventHandler(oTarget, "onheadclick"	  , function (obj, e)
                                                {
                                                    // Head display type 이 checkbox일 경우 전체체크/해제
                                                    if (take.getBindColName(obj, e.cell) == "CHK")
                                                    {
                                                        var sType = obj.getCellProperty("head", e.cell, "displaytype");
                                                        if (sType == "checkboxcontrol")
                                                            obj._xfnHeadCheckSelectAll(obj, e.cell);
                                                    }

                                                 }, this);
        
        // dataset can changed event
        //oDst.addEventHandler("cancolumnchange"	  , function (obj, e)
        take.addEventHandler(oDst, "cancolumnchange"	  , function (obj, e)
                                                {
                                                    // checkbox일 경우 체크/해제
                                                    if (e.columnid == "CHK")
                                                    {
                                                            var sVal = obj.getColumn(e.row, "CHK");                                                        
                                                            var sChk;
                                                            
                                                            if (obj.getRowCount() < 1) return;
                                                            
                                                            obj.set_enableevent(false);    
                                                            obj.set_updatecontrol(false);
                                                            
                                                            if (sVal == "1")
                                                            {
                                                                sChk = "0";
                                                            } else {
                                                                sChk = "1";
                                                            }
                                                            
                                                            obj.setColumn(e.row, "CHK", sChk=="1" ? sChk : (obj.getOrgColumn(e.row, "CHK")=="1"
                                                            ? sChk : obj.getOrgColumn(e.row, "CHK")));
                                                            
                                                            obj.set_enableevent(true);    
                                                            obj.set_updatecontrol(true);
                                                    }

                                                 }, this);
                                             
	}

	// Grid onkeydown Event
	//obj.addEventHandler("onkeydown" 	  ,  function (obj, e)
    take.addEventHandler(oTarget, "onkeydown" 	  ,  function (obj, e)
											 {
												//var keycode  = e.keycode;
												//var sBrowser = system.navigatorname;

												if (this._xfnIsPossibleGrid("movetocell"))
												{
													// Grid NextToCell
													if (e.shiftkey)
													{
														if (e.keycode == 13) obj._moveToCell("prev", true, false, undefined, undefined, true);
													} else {
														if (e.keycode == 13) obj._moveToCell("next", true, false, undefined, undefined, true);
													}
												}

												//if (e.ctrlkey)
												//{
												//	if (keycode == 67)
												//	{
												//		// Grid Copy
												//		if (sBrowser == "nexacro" || sBrowser == "IE")
												//			this._xfnGridCopyEventForRuntime(obj, e);
												//		else
												//			this._xfnGridCopyEventForChrome (obj, e);
												//	}
												//	else if (keycode == 86)
												//	{
												//		// Grid Paste
												//		this._xfnProcGridPasteEvent(obj, e);
												//	}
                                                var objDataset, objDataArea, objRef;
                                                var sBroserType, sCopyData, sPasteData, sNavi;
                                                var nStartrow, nEndrow, nStartCol, nEndCol, 
                                                
                                                nStartrow = parseInt(obj.selectstartrow);
                                                nEndrow = parseInt(obj.selectendrow);
                                                nStartCol = parseInt(obj.selectstartcol);
                                                nEndCol = parseInt(obj.selectendcol);
                                                objDataset = obj.getBindDataset();
                                                sBroserType = nexacro._BrowserType.substring(0, 2);
                                                
                                                if(e.ctrlkey)
                                                {
                                                    sCopyData="";   
                                                    objRef = e.fromreferenceobject;
                                                    
                                                    if(e.keycode == 67)
                                                    {   
                                                        if (   objRef._type_name=="EditControl" 
                                                            || objRef._type_name=="MaskEditControl" 
                                                            || objRef._type_name=="TextAreaControl")  //objRef.useime==true 
                                                        {
                                                            return;
                                                        }
                                                        
                                                        if(obj.selecttype == "row" || obj.selecttype == "multirow" )
                                                        {
                                                            //nStartCol = obj.getCellPos();
                                                            if (this._xfnIsPossibleGrid("checkbox"))
                                                            {
                                                                nStartCol = 1;
                                                            } else {
                                                                nStartCol = 0;
                                                            }
                                                            
                                                            nEndCol = parseInt(obj.getCellCount("body") -1);
                                                        }
                                                        
                                                        trace("Copy Info --> startrow : " + nStartrow + " / endrow : "+nEndrow+", startcol : "+nStartCol+" / endrow : "+nEndCol);
                                                        
                                                        if((nStartrow == nEndrow) && (nStartCol == nEndCol)) //그리드 데이터 1개만 복사하는 경우
                                                        {
                                                            sCopyData = obj.getCellValue(obj.currentrow, obj.currentcol);
                                                        } else {
                                                            for(var i=nStartrow; i<=nEndrow; i++)
                                                            {
                                                                for(var j=nStartCol; j<=nEndCol; j++)
                                                                {
                                                                    if(j < nEndCol)
                                                                    {
                                                                        sCopyData += obj.getCellValue(i,j) + "\t";
                                                                    } else {
                                                                        sCopyData += obj.getCellValue(i,j) + "\n";//row 바뀌면 개행처리
                                                                    }
                                                                }
                                                            }
                                                        }
                                                        
                                                        sNavi = system.navigatorname ;
                                                        
                                                        if(sNavi == "nexacro" || (sNavi == "IE" && sBroserType == "IE"))// IE,Runtime인 경우
                                                        {
                                                            system.clearClipboard();
                                                            system.setClipboard("CF_TEXT", sCopyData);
                                                        } else {
                                                        
                                                            objDataArea = this._xfnCreateTextarea(sCopyData);
                                                            
                                                            nexacro._OnceCallbackTimer.callonce(
                                                                this, 
                                                                function() {
                                                                    document.body.removeChild(objDataArea);
                                                                }, 
                                                                100);
                                                        }
                                                        
                                                        e.stopPropagation();
                                                        
                                                    } else if (e.keycode == 86) {
                                                        //에딧 컨트롤 상태에서 붙여넣기 할경우 OS기본 붙혀넣기 사용
                                                        //TODO 사용 후 검토 필요
                                                        if (   objRef._type_name=="EditControl" 
                                                            || objRef._type_name=="MaskEditControl" 
                                                            || objRef._type_name=="TextAreaControl")  //objRef.useime==true 
                                                        {
                                                            return;
                                                        }
                                                            
                                                        if(obj.selecttype == "row" || obj.selecttype == "multirow" )
                                                        {
                                                            if (this._xfnIsPossibleGrid("checkbox"))
                                                            {
                                                                if (this._xfnIsPossibleGrid("no") || this._xfnIsPossibleGrid("status"))
                                                                {
                                                                    nStartCol = 2;
                                                                } else {                                                            
                                                                    nStartCol = 1;
                                                                }
                                                            } else {
                                                                if (this._xfnIsPossibleGrid("no") || this._xfnIsPossibleGrid("status"))
                                                                {
                                                                    nStartCol = 1;
                                                                } else {
                                                                    nStartCol = 0;
                                                                }
                                                            }
                                                            
                                                            nEndCol = parseInt(obj.getCellCount("body") -1);
                                                        }
                                                        
                                                        trace("Paste Info --> startrow : " + nStartrow + " / endrow : "+nEndrow+", startcol : "+nStartCol+" / endrow : "+nEndCol);
                                                        
                                                        if (nStartrow == -9) return;
                                                        
                                                        sPasteData = "";
                                                        
                                                        sNavi = system.navigatorname ;
                                                        
                                                        if(sNavi == "nexacro" || (sNavi == "IE" && sBroserType == "IE"))
                                                        {
                                                        
                                                            sPasteData = system.getClipboard("CF_TEXT");
                                                            this._xfnPasteData(obj, sPasteData, objDataset ,nStartrow, nEndrow, nStartCol, nEndCol);
                                                            
                                                        } else {
                                                        
                                                            objDataArea = this._xfnCreateTextarea('');
                                                            
                                                            nexacro._OnceCallbackTimer.callonce(
                                                                this,
                                                                function() {
                                                                    sPasteData = objDataArea.value;
                                                                    document.body.removeChild(objDataArea);
                                                                    this._xfnPasteData(obj, sPasteData, objDataset ,nStartrow, nEndrow, nStartCol, nEndCol);
                                                                }, 
                                                                100
                                                            );
                                                        }
                                                    }
                                                }
                                                
                                                //// 디버그 창 : Ctrl + Q
                                                //if (keycode == 81)
                                                //{
                                                //    var objForm = this._xfnGetActiveForm();
                                                //    take.openPopup (objForm, "comDebug"  , "frm::com/comDebug.xfdl"
                                                //                    , {Title:"디버그 창"}, "width=419 height=740", "", true);
                                                //}

											}, this);

// 	if (this._xfnIsPossibleGrid("total") == true)
// 	{
// 	// Grid onselectchanged Event
// 	obj.addEventHandler("onselectchanged",  function (obj, e)
// 											{
// 												// Grid 하단 합계/평균/갯수
// 												this._xfnProcGridTotalEvent(obj, e);
// 
// 											}, this);
// 	}

	if (this._xfnIsPossibleGrid("sort") == true)
	{
	// 화면단 KeyString Backup
	var oDst = objBindDs;
		oDst._keystring = oDst.keystring;

	// Grid onheaddblclick Event
	obj.addEventHandler("onheaddblclick" , function (obj, e)
	//obj.addEventHandler("onheadclick" , function (obj, e)
										   {
												// Expand 영역을 클릭하면 리턴
												if (this._xfnIsExpandClick(obj, e) == true)
													return;

												if (obj.getCellProperty("head", e.cell, "displaytype") != "checkboxcontrol")
												{
													if (this._xfnIsPossibleGrid("sort") == true)
													{
														var multiple = false;
														if (e.ctrlkey) multiple = true;	// Ctrl Key

														// 정렬 상태 변경이 성공하면 정렬을 실행한다.
														var rtn = this._xfnGridSetSortStatus(obj, e.cell, multiple);
														trace("rtn : " + rtn);
														if (rtn)
															this._xfnProcSortGrid();
													}
												}

										   }, this);
	}

	if (this._xfnIsPossibleGrid("popup") == true)
	{
		// Grid onrbuttondown Event
		obj.addEventHandler("onrbuttondown"  ,  function(obj, e)
												{
													if (this._xfnIsPossibleGrid("popup") == true)
														this._xfnShowGridPopupMenu(obj, e);

												}, this);
	}

	if (this._xfnIsPossibleGrid("filter") == true)
	{
		obj.addEventHandler("onexpanddown"	 ,  function(obj, e)
												{
													// 210224 정해원 expand와 충돌되지 않게 처리
													if(e.row != -1){
														return true;
													}
													
													// 필터 사용가능 그리드만 처리되게
													if (this._xfnIsEmpty(obj["_filterInfo"]))
														return;
                                                        
                                                    if (obj.isFilterPop) return;
                                                    
													var arrGridFilterInfo	= obj["_filterInfo"];
													var objCellFilterInfo	= arrGridFilterInfo[e.cell];

													if (!obj._xfnIsEmpty(objCellFilterInfo))
													{
														var nBodyCell		= objCellFilterInfo["cell" ];
														var sDisplayType	= obj.getCellProperty("body", nBodyCell, "displaytype");
														var sColId			= objCellFilterInfo["colid"];

														var sFilterType;

															 if (sDisplayType == "combocontrol")  sFilterType	= "combocontrol";
														else if (sDisplayType == "combotext"   )  sFilterType	= "combotext";
														else if (sDisplayType == "date"		   )  sFilterType	= "date";
														else if (sDisplayType == "number"
															 || sDisplayType == "currency"	   )  sFilterType	= "number";
														else
														{
															// 데이터셋 자료형에 맞게 필터타입 지정
															var objDs	= obj.getBindDataset();															
															var colType	= objDs.getColumnInfo(sColId).type;

															if (colType == "INT" || colType == "FLOAT" || colType == "BIGDECIMAL")
																sFilterType	= "number" ;
															else
																sFilterType	= "default";
														}

														var objForm = this._xfnGetActiveForm();
														var objData	=  {popupid			: "comFilter"
																	, 	sFormUrl		: "frm::com/comGridFilter.xfdl"
																	, 	sOverlayColor	: "#0000000f"
																	,   bShowTitlebar	: true
																	,   bResizable		: true	// 필터는 리사이징 되게 처리한다.
																	, 	oArgs			: {"gridInfo" : {"grid" : obj, "cell" : e.cell, "filtertype" : sFilterType}}};

 														this._xfnShowModal(objForm, objData, function(sPopId, bFilter){trace("close!!!!");  obj.isFilterPop=false;});
                                                        obj.isFilterPop = true;                                                        
                                                    }
												}, this);
                                                
	    //팝업허용이 아닌상태에서 필터 사용시 헤더에 필터버튼 표시
        if (this._xfnIsPossibleGrid("popup") !=true)
        { 
            this._xfnSetUserProperty(this, "_target", {form : obj.parent, grid : obj});
            this._xfnPopupGridFltr(this._xfnGetUserProperty(obj , "_target"));
        }
	}

	/*
	 * 20200605 정해원 업무화면에서 지정한 cssclass가 적용되지 않는 버그 때문에 주석 처리
	 *
	 *
	// 공통 CSS 적용을 위한 가공처리
 	for (var i=0; i<obj.getCellCount("body"); i++)
 	{
		var sExpr 	 = obj.getCellProperty("body", i, "cssclass");
			sExpr 	 = sExpr.replace(" " , "" ); // 공백제거
			sExpr 	 = nexacro.replaceAll(sExpr,"\"", "'"); // 쌍따음표 홑따음표로 치환
		var sExprBak = sExpr;

		// 조건식이 존재하지 않다면
		if (this._xfnIsEmpty(sExpr))
		{
			var sColumn   = "''";
			var sChgTxt   = "expr"
						  + ":dataset.getRowType(currow)==2?'Cellinput'"
						  + ":dataset.getRowType(currow)==4?'CellModi'"
						  + ":dataset.getRowType(currow)==8?'CellDel'"
						  + ":" + sColumn;

			obj.set_enableredraw(false);
			obj.setCellProperty("body", i, "cssclass", sChgTxt);
			obj.set_enableredraw(true );
		}
		else
		{
			var aColumn	  = new Array();

			//  EXPR로 기술한게 아니라 하나만 지정한 경우
			//  업무화면에 설정된CSS를 우선순위로 한다.
			if (sExpr.indexOf("'")<0)
			{
				// 후에 치환하기 쉽도록 expr로 변경
				obj.set_enableredraw(false);
				obj.setCellProperty("body", i, "cssclass", "expr:'" + sExpr + "'");
				obj.set_enableredraw(true );
				continue;
			}

			// 텍스트 사이즈 만큼 돌면서 치환한다.
			for (var j=0; j<sExpr.length; j++)
			{
				// 홑따음표가 아니면 넘어간다.
				if (sExpr.substring(j,j+1)!="'")
					continue;
				else
				{
					var nStrQuote = j;
					var nEndQuote = sExpr.indexOf("'", j+1);
					var sColumn	  = sExpr.substring(nStrQuote,nEndQuote+1);
					var sChgTxt   = sColumn;

					if (aColumn.join(",").indexOf(sColumn)>0)
						continue;
					else
						aColumn.push(sColumn);

					j = nEndQuote+1;
				}
			}

			for (var j=0; j<aColumn.length; j++)
			{
				// 업무화면단에 이미 설정된 CSS를 우선순위로 둔다.
				if (aColumn[j] != "''") continue;

				sChgTxt   = "(dataset.getRowType(currow)==2?'Cellinput'"
						  + ":dataset.getRowType(currow)==4?'CellModi'"
						  + ":dataset.getRowType(currow)==8?'CellDel'"
						  + ":" + sColumn + ")";
				sExprBak  = sExprBak.replace(aColumn[j], sChgTxt);
			}

			obj.set_enableredraw(false);
			obj.setCellProperty("body", i, "cssclass", sExprBak);
			obj.set_enableredraw(true );

			// 초기화
			aColumn=null;
		}
 	}
	*/
    
    if (this._xfnIsPossibleGrid("scroll") == true)  //그리드 스크롤 페이징 처리
    {
        this.addEventHandler(
                "onvscroll",
                function (obj, e)
                {
                    if ((e.type == "lastover") || (e.type == "tracklastover") || (e.type == "wheellastover") || (e.type == "selectlastover")) 
                    {
                        var objDs, objScrollDs, objForm;
                        var sFunc;
                        var nRowCnt, nMaxRow, nNewRowCnt;
                        
                        //그리드 최대 Rows수 지정
                        //nMaxRow = 20000;
                        
                        objDs = objBindDs;
                        objScrollDs = objDs.scrolldataset;
                        
                        //그리드 높이에 따라 가변적으로 설정시
                        //그리드 사이즈가 변경될때 한 페이지에 표시할 Row수가 변경최어 초기화해야하는 이슈가 있음
                        //if (this.getOffsetHeight()==take.nvl(this._xfnGetUserProperty(obj, "beforeheight"),""))
                        //{
                        //    nNewMaxRow = this.getMaxRowCount();
                        //    
                        //    if (nNewMaxRow>objDs.rowcnt )
                        //    {
                        //        take.debug("takegrid.scroll.onvscroll", " 그리드 사이즈가 변경되어 초기화됩니다.");
                                
                        //        objDs.rowcnt  = nNewRowCnt;                                
                        //        objScrollDs.rowcnt  = objDs.rowcnt ;
                        //        objDs.curpage=0;
                        //        objScrollDs.curpage = 0;
                        //        objDs.clearData();                                
                                
                        //        //변경된 row수 세팅
                        //        this._xfnSetUserProperty(this, "beforeheight", this.getOffsetHeight());
                        //    }                            
                        //}
                        
                        nRowCnt = objDs.getConstColumn("TOTALCNT");
                        
                        if (objDs.rowcount==nRowCnt)
                        {
                            take.alert(objForm, "Info", "더이상 조회할 데이터가 없습니다.");
                            take.debug("takegrid.scroll.onvscroll", " 더이상 조회할 데이터가 없습니다.");
                            return;
                        }
                        
                        //if (nRowCnt>nMaxRow) //그리드 최대 처리 Rows 초과시 초기화
                        //{
                        //    take.debug("takegrid.scroll.onvscroll", " 그리드 최대 처리 로우수를 초가하여 초기화됩니다.");
                        //    objDs.curpage=0;
                        //    objScrollDs.curpage = 0;
                        //    objDs.clearData();                            
                        //}
                        
                        objForm = obj._xfnGetActiveForm();
                        
                        objDs.curpage++;
                        objScrollDs.curpage++;
                        
                        sFunc = obj.searchfunction;
                        
                        //function형일 경우
                        if (take.isFunction(sFunc))
                        {
                            sFunc.call(objForm);
                            take.debug("takegrid.scroll", " Function명을 지정해 주세요.");
                            return false;
                            
                        } else { //String일 경우:함수명을 세팅한 경우
                        
                            //해당 함수가 있는지 여부 체크
                            if (objForm.hasOwnProperty(sFunc))
                            {
                                //함수 인지 여부 체크
                                if (take.isFunction(objForm[sFunc])) 
                                {
                                    //해당 함수 호출
                                    objForm[sFunc].call(objForm);
                                } else {
                                    take.debug("takegrid._xfnSetUseGridFunction(scroll)", objForm.name + "에 " + sFunc + "는 Function이 아닙니다.");
                                    return false;
                                }
                            } else {
                                take.debug("takegrid._xfnSetUseGridFunction(scroll)", objForm.name + "에 " + sFunc + " Function이 존재하지 않습니다.");
                                return false;
                            }
                        }    
                    }
                },
                this);
    }
    
    //rowcount 기능 사용시 resetscroll을 나중에 실행 (오류 회피)
    if (this._xfnIsPossibleGrid("rowcount") == true)
    {
        var objStaCnt;
        
        objStaCnt = take.nvl(oTarget._tObjTakeCnt,"");
            
        if (objStaCnt!="")
        {
            if (take.CompTypeName(objStaCnt.parent)=="Form")
            {
                objStaCnt.parent.resetScroll();
            } else if (take.CompTypeName(objStaCnt.parent)=="Div") {
                objStaCnt.parent.form.resetScroll();
            } else if (take.CompTypeName(objStaCnt.parent)=="PopupDiv") {
                objStaCnt.parent.form.resetScroll();
            }
        }
    
    }
    ////바인드된 데이터셋에 그리드 주입;
    //objBindDs._tObjTakeGrid = oTarget;
    
    //페이징용 데이터셋 이벤트 추가
    this._xfnaddDsOnLoad(objParent, oTarget, objBindDs);
    
    //그리드 포멧 저장
    this._orgFormat = this.getCurFormatString(false);
        
    //autofittype 설정시 오류 회피
    this.set_autofittype(this._tOrgAutoFitType);
    
    if (take.CompTypeName(objParent)=="Form")
    {
        objParent.resetScroll();
    } else if (take.CompTypeName(objParent)=="Div") {
        objParent.form.resetScroll();
    } else if (take.CompTypeName(objParent)=="PopupDiv") {
        objParent.form.resetScroll();
    }
};

_xExtendGrid._xfnRowCount = function(oTarget)
{
    //그리드 row count 표시
    if (this._xfnIsPossibleGrid("rowcount") == true)
    {
        
        var sStaId, sCntTxt;
        var objParent, objStaCnt; //objBindDs,            
        
        //objBindDs = obj.getBindDataset();
        objParent = oTarget.parent;

        sStaId = take.nvl(oTarget.countcomp,"");
        if (sStaId=="")
        {
            sStaId = oTarget.name.replace("grd","sta") + "Title";
        }
        
        objStaCnt = take.nvl(objParent[sStaId],"");
        
        if (objStaCnt=="")
        {
            take.debug("takegrid._xfnSetUseGridFunction.rowcount : ", "조회 건수를 표기할 컴포넌트가 존재하지 않습니다.");
            //return false;
        } else {
            //기본 프로퍼티 설정
            objStaCnt.set_usedecorate(true);
            objStaCnt.set_fittocontents("width");
            
            if (take.nvl(objStaCnt.text,"")=="")
            {
                if (take.nvl(objStaCnt._tTitleTxt,"")=="")
                {
                    objStaCnt._tTitleTxt = "{0}";
                }
            } else {
                if (take.nvl(objStaCnt._tTitleTxt,"")=="")
                {
                    objStaCnt._tTitleTxt = objStaCnt.text + " {0}";
                }
            }
            
            sCntTxt = objStaCnt._tTitleTxt;
            if (this._xfnIsPossibleGrid("pagging") || this._xfnIsPossibleGrid("scroll"))
            {
                sCntTxt = take.getParamMsg(sCntTxt, ["[ TOTAL <fc v='#ed0e1e'>0 / 0</fc> ]"]);
            } else {
                sCntTxt = take.getParamMsg(sCntTxt, ["[ TOTAL <fc v='#ed0e1e'>0</fc> ]"]);
            }
            
            objStaCnt.set_text(sCntTxt);
            //objStaCnt.parent.resetScroll();
        }
        
        oTarget._tObjTakeCnt = objStaCnt;
    }
}

_xExtendGrid._xfnaddDsOnLoad = function (objParent, oTarget, objBindDs)
{
    //그리드 페이징 처리
    if (this._xfnIsPossibleGrid("pagging") == true)
 	{
        //페이징 transaction 호출을 위한 콜백함수 지정 여부 체크
        if (take.nvl(this.pagefunction,"")=="" && take.nvl(this.searchfunction,"")=="")
        {
            take.debug("takegrid._xfnSetUseGridFunction(pagging)", "Pagging 처리를 위한 함수가 없어 pagging기능을 사용할 수 없습니다.\nGrid에'searchfunction' userproperty를 추가 후 페이징 처리를 위한 함수명을 지정해 주세요.");
        } else {
        
            if(take.nvl(this.searchfunction,"")=="")
            {
                this.searchfunction = this.pagefunction;
            }
            
            if (take.nvl(this.rowcnt,"")=="")
            {
                this.rowcnt = 10;
            } else {
                this.rowcnt = nexacro.toNumber(this.rowcnt);
            }
            
            //그리드 페이징 적용
            this._xfnGridPaggingAdd();
            
            //변수 설정            
            var objDs = objBindDs; //바인드된 데이터셋
            
            if (take.nvl(objDs["totalcnt"], "")=="")
            {
                objDs["totalcnt"] = "";
            }
            
            //기본값 세팅
            this._xfnSetUserProperty(this,"_takegridpaggingtotalcount", objDs["totalcnt"]);
                        
            objDs["rowcnt"] = this.rowcnt;
            
            //total 카운트 값 변경 체크를 위헤 바인드된 데이터 셋 onload 이벤트 동적 추가
			objDs.addEventHandler(
                "onload", 
                function (objDs, e)
                {
                    if (e.reason==0)
                    {
                        //변수 선언
                        var sNewTotalCnt;
                        var objSta, objGrid;
                        
                        objGrid = take.nvl(objDs._tObjTakeGrid,"");
                        
                        //조회 된 데이터가 있으면
                        if (objDs.rowcount>0)
                        {
                            //전체 row수 
                            sNewTotalCnt = take.nvl(objDs.getConstColumn("TOTALCNT"), "");
                            objDs["totalcnt"] = sNewTotalCnt;
                            
                            if (objGrid=="") return;
                            
                            //transaction 전 row수와 완료 후 row수가 다를경우
                            if (objGrid._xfnGetUserProperty(objGrid, "_takegridpaggingtotalcount")!=sNewTotalCnt)
                            {
                                //변경된 row수 세팅
                                objGrid._xfnSetUserProperty(objGrid, "_takegridpaggingtotalcount",sNewTotalCnt);
                                
                                try {
                                    //페이징 다시 설정
                                    objGrid._xfnGetUserProperty(objGrid, "_takegridpaggingdiv").form.fnSetting();
                                } catch(e) {
                                    take.debug(this, "takegrid 그리드 페이징 설정 중 오류가 발생하였습니다. (" + e + ")");                                    
                                    trace("error name : " + e.name);
                                    trace("error message : " + e.message);
                                    trace(e.stack);
                                }
                            }
                        }
                    }
                }, 
                this);
        }
    } else if (this._xfnIsPossibleGrid("scroll") == true) { //그리드 스크롤 페이징 처리

        //페이징 transaction 호출을 위한 콜백함수 지정 여부 체크
        if (take.nvl(this.pagefunction,"")=="" && take.nvl(this.searchfunction,"")=="")
        {
            take.debug("takegrid._xfnSetUseGridFunction(scroll)", "Scroll Page 처리를 위한 함수가 없어 Scroll Page 기능을 사용할 수 없습니다.\nGrid에'searchfunction' userproperty를 추가 후 페이징 처리를 위한 함수명을 지정해 주세요.");
        } else {
        
            if(take.nvl(this.searchfunction,"")=="")
            {
                this.searchfunction = this.pagefunction;
            }
            
            var objTempDs, objPForm;
            var sTempDsId;
            var nMaxRow = 50; //한 페이지에 표시할 Row 수
                        
            if (take.nvl(objBindDs["rowcnt"], "")=="")
            {
                objBindDs["rowcnt"] = nMaxRow;
            }
            
            //그리드 높이에 따라 가변적으로 설정시
            //그리드 사이즈가 변경될때 한 페이지에 표시할 Row수가 변경최어 초기화해야하는 이슈가 있음
            //objBindDs.rowcnt  = this.getMaxRowCount();
            
            //objPForm = this._xfnGetActiveForm();
            
            //objPForm = take.getActiveMdiForm();
            objPForm = objBindDs.parent;
            
            sTempDsId = "_t"+ objBindDs.name + "Temp";
            objTempDs = take.nvl(objPForm.objects[sTempDsId], "");
            
            if (objTempDs=="")
            {
                objTempDs = new Dataset();
                objPForm.addChild(sTempDsId, objTempDs);
                objTempDs.copyData(objBindDs, true);
                objTempDs.clearData();
                
                objBindDs.scrolldataset = objTempDs;
                objTempDs.orgdataset = objBindDs;                    
                objTempDs.rowcnt  = objBindDs.rowcnt ;
                
                //변경된 row수 세팅
                //그리드 높이에 따라 가변적으로 설정시
                //그리드 사이즈가 변경될때 한 페이지에 표시할 Row수가 변경최어 초기화해야하는 이슈가 있음
                //this._xfnSetUserProperty(this, "beforeheight", this.getOffsetHeight());

                //이벤트 추가
                objTempDs.addEventHandler(
                    "onload", 
                    function (objDatset, e)
                    {
                        if (e.reason==0)
                        {
                            if (objDatset.rowcount>0)
                            {
                                var objOrgDs, objGrid, objSta;
                                var sNewTotalCnt;
                                
                                objOrgDs = take.nvl(objDatset.orgdataset,"");
                                
                                if (objOrgDs!="") 
                                {
                                    objOrgDs.appendData(objDatset, true);                                
                                }
                            }
                        }
                    }, 
                    this);
            }
        }
    }
}

_xExtendGrid._xfnSetFixGrid = function(objParent, objGrid, objBindDs)
{
    var objStaticRow, objStaticCol;
    var sStaticRow, sStaticCol;
    
    objBindDs = take.nvl(objBindDs,"");
    
    // 열고정 Static
    sStaticRow   = "_staRow_"+objGrid.name;
    objStaticRow = take.nvl(objParent[sStaticRow],"");
    
    if (objStaticRow=="")
    {
        objStaticRow = new Static(sStaticRow, objGrid.left, objGrid.top, objGrid.width, 1, objGrid.right, objGrid.bottom);
        objStaticRow.set_border("0px none, 0px none, 1px solid #333333");
        objStaticRow.set_visible(false);

        objParent.addChild(sStaticRow, objStaticRow);
        objStaticRow.show();
    }
    
    // 행고정 Static
    sStaticCol   = "_staCol_"+objGrid.name;
    objStaticCol = take.nvl(objParent[sStaticCol],"");
    
    if (objStaticCol=="")
    {
        objStaticCol = new Static(sStaticCol, objGrid.left, objGrid.top,1, objGrid.height, objGrid.right, objGrid.bottom);
        objStaticCol.set_border("0px none, 1px solid #333333, 0px none, 0px none");
        objStaticCol.set_visible(false);

        objParent.addChild(sStaticCol, objStaticCol);
        objStaticCol.show();
    }
    
    if (objBindDs=="")
    {
        take.debug("takegrid._xfnSetUseGridFunction.fix.info", "그리드에 바인드된 데이터셋이 없습니다.");
        return;
    }
        
    objBindDs.addEventHandler(
        "onrowsetchanged", 
        function (objDatset, e)
        {
            if (objDatset.rowcount==0)
            {
                trace("takegrid BindDataset onrowsetchanged Event");
                // 초기화
                //nexacro._OnceCallbackTimer.callonce
                //(
                //    objParent,
                //    function () 
                //    {
                //        objGrid._xfnInitFixedGrid({grid:objGrid});
                //    },
                //    1
                //); 
                
                //nexacro._OnceCallbackTimer.callonce
                //(
                //    objParent,
                //    function () 
                //    {
                //        objGrid._xfnColFixedFreeGrid({grid:objGrid});
                //    },
                //    1
                //);
                
                nexacro._OnceCallbackTimer.callonce
                (
                    objParent,
                    function () 
                    {
                        objGrid._xfnRowFixedFreeGrid({grid:objGrid});
                    },
                    1
                ); 
                
                //objGrid._xfnColFixedFreeGrid({grid:objGrid});
                //objGrid._xfnRowFixedFreeGrid({grid:objGrid});
            }
        }, 
        objParent);

    objGrid.addEventHandler(
        "onsize", 
        function (obj, e)
        {
            obj.set_enableevent(false);

            try {
                obj._xfnProcColFixedGrid(obj);
                obj._xfnProcRowFixedGrid(obj);
            } catch (e) {
                trace("takegrid.grid.onsize.event : error");
                trace("error name : " + e.name);
                trace("error message : " + e.message);
                trace(e.stack);
            };

            obj.set_enableevent(true);

        }, 
        objParent);
}

//그리드 상단 토탈 카운트 내용을 제어하기 위한 함수 [ TOTAL 10 / 100 ]
// ex : Grid00.setTotalText();
_xExtendGrid.setTotalText = function(aRowCnt)
{
    var objDs, objGrid;
    var sCntTxt;
    
    //바인드된 데이터셋 (dataset onload 이벤트 추가에 필요)
    objGrid = this;
    objDs = take.nvl(objGrid.getBindDataset(),"");
    
    if (objDs=="") return false;
    
    if (take.nvl(objGrid._tObjTakeCnt,"")!="")
    {
        sCntTxt = take.nvl(objGrid._tObjTakeCnt._tTitleTxt,"");
        
        if (sCntTxt!="")
        {
            if (take.nvl(aRowCnt,"")=="")
            {
                if (objGrid._xfnIsPossibleGrid("pagging"))
                {
                    sCntTxt = take.getParamMsg(sCntTxt, ["[ TOTAL <fc v='#ed0e1e'>" + take.setComma((objDs.recordCountPerPage * (objDs.currentPageNo-1))+ objDs.rowcount) + " / " + take.setComma(take.nvl(objDs.getColumn(0,take.nvl(objGrid.countcolumn,"totalRecordCount")), 0)) + "</fc> ]"]);
                } else if (objGrid._xfnIsPossibleGrid("scroll")) {
                    sCntTxt = take.getParamMsg(sCntTxt, ["[ TOTAL <fc v='#ed0e1e'>" + take.setComma(objDs.rowcount) + " / "+ take.setComma(take.nvl(objDs.scrolldataset.getColumn(0,take.nvl(objGrid.countcolumn,"totalRecordCount")),0)) +"</fc> ]"]);
                } else {
                    sCntTxt = take.getParamMsg(sCntTxt, ["[ TOTAL <fc v='#ed0e1e'>" + take.setComma(objDs.rowcount) +"</fc> ]"]);
                }
            } else {
                sCntTxt = take.getParamMsg(sCntTxt, ["[ TOTAL <fc v='#ed0e1e'>" + aRowCnt +"</fc> ]"]);
            }
            
            objGrid._tObjTakeCnt.set_text(sCntTxt);
            objGrid._tObjTakeCnt.parent.resetScroll();
        }
    }
}

// Grid 공통 PopupMenu 띄우기
_xExtendGrid._xfnShowGridPopupMenu = function (obj, e)
{
	var objDs 		= obj.getBindDataset();	
	if( !this._xfnIsPossibleGrid("addrow") && objDs.getRowCount() <= 0 ){
		return false;
	}
	
	var objApp 		= nexacro.getApplication();

	// Excel[ORG] 권한체크, 내부사용자인 경우에만 메뉴 사용가능
//	var sIOFlag 	= objApp.gdsUserInfo.getColumn(0, "io_class");
//		sIOFlag 	= this._xfnNvl(sIOFlag, "O");
    var objForm;
    
    if (take.nvl(this._tActiveForm,"")=="")
    {
        objForm	= this._xfnGetActiveForm();
        this._tActiveForm = objForm;
    } else {
        objForm	= this._tActiveForm;
    }    
    
	//trace( "!@!@>> _xfnIsPossibleGrid(addrow):   " + this._xfnIsPossibleGrid("addrow") );
	// Excel      권한체크 r_excel 정보가 'Y'인 경우에만 메뉴 사용가능
 	var objRoleDs  = objForm.objects["dsBtnRole"];
    
    //Excel 사용 여부 체크 * 순서 중요 *
	//Excel 1차 체크 : takegrid에서 excel 사용 여부
    var sExcelFlag = ( this._xfnIsPossibleGrid("excel") ) ? "Y" : "N";
    
    //Excel 2차 체크 : 권한에서 사용 여부
    if (this._xfnNvl(objRoleDs,"")!="")
 		sExcelFlag = this._xfnNvl(objRoleDs.getColumn(0, "R_EXCEL"), "Y");
    
    //Excel 3차 체크 : 개발 코드에서 권한에 부여한 사용 여부 
    if (this._xfnNvl(this._tExcelFlag,"")!="") sExcelFlag = this._tExcelFlag;
    
//	trace("sExcelFlag : " + sExcelFlag + " | sIOFlag : " + sIOFlag);

	var sEditFlag = ( this._xfnIsPossibleGrid("addrow") ) ? "Y" : "N";

	//var strPmenuId	= "_pmn_" + obj.name;
    var strPmenuId	= "_pmn_" + nexacro.replaceAll(obj._unique_id,".","_");
	var objPmenu	= this._xfnLookup(objForm, strPmenuId);

	var objPmnuDs	= objForm.lookup("_xdsPopupMenu");
	if (objPmnuDs instanceof nexacro.Dataset)
		objPmnuDs   = objForm.lookup("_xdsPopupMenu");
	else
	{
		objPmnuDs   = new Dataset;
		objPmnuDs.load();
		objForm.addChild("_xdsPopupMenu", objPmnuDs);

		var sDsataset   =  "<Dataset id=\"_xdsPopupMenu\">									\n";
			sDsataset   += "  <ColumnInfo>													\n";
			sDsataset   += "    <Column id=\"captioncolumn\" type=\"STRING\" size=\"256\"/>	\n";
			sDsataset   += "    <Column id=\"idcolumn\" 	 type=\"STRING\" size=\"256\"/>	\n";
			sDsataset   += "    <Column id=\"levelcolumn\" 	 type=\"STRING\" size=\"256\"/>	\n";
			sDsataset   += "    <Column id=\"enablecolumn\"  type=\"STRING\" size=\"256\"/>	\n";
			sDsataset   += "    <Column id=\"userdatacolumn\"type=\"STRING\" size=\"256\"/>	\n";
			sDsataset   += "    <Column id=\"visible\" 		 type=\"STRING\" size=\"256\"/>	\n";
			sDsataset   += "  </ColumnInfo>													\n";
			sDsataset   += "  <Rows>														\n";
        
        //찾기
        if (this._xfnIsPossibleGrid("find"))
        {
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">찾기</Col>						\n";
			sDsataset   += "      <Col id=\"idcolumn\">find</Col>							\n";
			sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
			sDsataset   += "    </Row>														\n";
        }
        
        //정렬
        if (this._xfnIsPossibleGrid("sort"))
        {
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">정렬</Col>						\n";
			sDsataset   += "      <Col id=\"idcolumn\">sort</Col>							\n";
			sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
			sDsataset   += "    </Row>														\n";
        }
        
        //필터
        if (this._xfnIsPossibleGrid("filter"))
        {
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">필터</Col>						\n";
			sDsataset   += "      <Col id=\"idcolumn\">filter</Col>							\n";
			sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
			sDsataset   += "    </Row>														\n";
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">필터</Col>						\n";
			sDsataset   += "      <Col id=\"idcolumn\">setFilter</Col>						\n";
			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
			sDsataset   += "    </Row>														\n";
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">필터 해제</Col>						\n";
			sDsataset   += "      <Col id=\"idcolumn\">removeFilter</Col>					\n";
			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
			sDsataset   += "    </Row>														\n";
        }
        
        //컬럼 숨기기 보이기
        if (this._xfnIsPossibleGrid("hide"))
        {
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">컬럼 숨기기/보이기</Col>		\n";
			sDsataset   += "      <Col id=\"idcolumn\">hide</Col>							\n";
			sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
			sDsataset   += "    </Row>														\n";
        }
        
        //틀고정
        if (this._xfnIsPossibleGrid("fix"))
        {
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">틀고정</Col>					\n";
			sDsataset   += "      <Col id=\"idcolumn\">fix</Col>							\n";
			sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
			sDsataset   += "    </Row>														\n";
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
			sDsataset   += "      <Col id=\"captioncolumn\">열고정</Col>					\n";
			sDsataset   += "      <Col id=\"idcolumn\">colfix</Col>							\n";
			sDsataset   += "   </Row>														\n";
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">열고정 해제</Col>				\n";
			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
			sDsataset   += "      <Col id=\"idcolumn\">colfixfree</Col>						\n";
			sDsataset   += "    </Row>														\n";
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">행고정</Col>					\n";
			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
			sDsataset   += "      <Col id=\"idcolumn\">rowfix</Col>							\n";
			sDsataset   += "    </Row>														\n";
			sDsataset   += "    <Row>														\n";
			sDsataset   += "      <Col id=\"captioncolumn\">행고정 해제</Col>				\n";
			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
			sDsataset   += "      <Col id=\"idcolumn\">rowfixfree</Col>						\n";
			sDsataset   += "      <Col id=\"enablecolumn\"/>								\n";
			sDsataset   += "    </Row>														\n";
        }   
        
        //엑셀 권한 여부 체크
        if (sExcelFlag=="Y")
        {
            sDsataset   += "    <Row>														\n";
            sDsataset   += "      <Col id=\"captioncolumn\">엑셀 내보내기</Col>			\n";
            sDsataset   += "      <Col id=\"idcolumn\">excel</Col>							\n";
            sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
            sDsataset   += "    </Row>														\n";
        }
        
        //}
        // 내부사용자는 권한 상관없이 모두 사용, 아니면 엑셀 권한자만 메뉴 생성
        //if (sEditFlag=="Y")
        //{
        //	sDsataset   += "    <Row>														\n";
        //	sDsataset   += "      <Col id=\"captioncolumn\">행추가</Col>						\n";
        //	sDsataset   += "      <Col id=\"idcolumn\">addrow</Col>							\n";
        //	sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
        //	sDsataset   += "    </Row>														\n";
        //	sDsataset   += "    <Row>														\n";
        //	sDsataset   += "      <Col id=\"captioncolumn\">행삭제</Col>						\n";
        //	sDsataset   += "      <Col id=\"idcolumn\">delrow</Col>							\n";
        //	sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
        //	sDsataset   += "    </Row>														\n";
        //}
			
//			sDsataset   += "    <Row>														\n";
//			sDsataset   += "      <Col id=\"captioncolumn\">내보내기</Col>					\n";
//			sDsataset   += "      <Col id=\"idcolumn\">excelxls</Col>						\n";
//			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
//			sDsataset   += "    </Row>														\n";
//			if (sIOFlag=="I") // 내부사용자만 팝업 메뉴를 생성한다.
//			{
//			sDsataset   += "    <Row>														\n";
//			sDsataset   += "      <Col id=\"captioncolumn\">내보내기[ORG]</Col>				\n";
//			sDsataset   += "      <Col id=\"idcolumn\">excelorg</Col>						\n";
//			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
//			sDsataset   += "    </Row>														\n";
//			}
//			}

// 			sDsataset   += "    <Row>														\n";
// 			sDsataset   += "      <Col id=\"captioncolumn\">그리드개인화</Col>				\n";
// 			sDsataset   += "      <Col id=\"idcolumn\">personal</Col>						\n";
// 			sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
// 			sDsataset   += "    </Row>														\n";
// 			sDsataset   += "    <Row>														\n";
// 			sDsataset   += "      <Col id=\"captioncolumn\">개인화 저장</Col>				\n";
// 			sDsataset   += "      <Col id=\"idcolumn\">personalexcute</Col>					\n";
// 			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
// 			sDsataset   += "    </Row>														\n";
// 			sDsataset   += "    <Row>														\n";
// 			sDsataset   += "      <Col id=\"captioncolumn\">개인화 삭제</Col>				\n";
// 			sDsataset   += "      <Col id=\"idcolumn\">personaldelete</Col>					\n";
// 			sDsataset   += "      <Col id=\"levelcolumn\">1</Col>							\n";
// 			sDsataset   += "    </Row>														\n";

        //행복사
        if (this._xfnIsPossibleGrid("rowcopy"))
        {
            sDsataset   += "    <Row>														\n";
 			sDsataset   += "      <Col id=\"captioncolumn\">행복사</Col>					\n";
 			sDsataset   += "      <Col id=\"idcolumn\">rowcopy</Col>						\n";
 			sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
 			sDsataset   += "    </Row>														\n";
        }    
        
        //초기화
        if (this._xfnIsPossibleGrid("reset"))
        {
 			sDsataset   += "    <Row>														\n";
 			sDsataset   += "      <Col id=\"captioncolumn\">초기화</Col>					\n";
 			sDsataset   += "      <Col id=\"idcolumn\">reset</Col>							\n";
 			sDsataset   += "      <Col id=\"levelcolumn\">0</Col>							\n";
 			sDsataset   += "    </Row>														\n";
        }
			sDsataset   += "  </Rows>														\n";
			sDsataset   += "</Dataset>														\n";
        
		objPmnuDs.loadXML(sDsataset);
	}

	if (this._xfnIsEmpty (objPmenu))
	{
		objPmenu	= new PopupMenu();
		objPmenu.init(strPmenuId, "absolute", 0, 0, 60, 60, null, null);
		objForm.addChild(strPmenuId, objPmenu);

		// Grid 공통 마우스 우측 메뉴 onmenuclickHandler Event
		objPmenu.addEventHandler("onmenuclick", function (obj, e)
												{
													var objTarget = this._xfnGetUserProperty(obj, "_target");

													switch(e.id)
													{
 														case "find" 	 	  : this._xfnPopupGridFind(objTarget); 			break;
 														case "sort" 	 	  : this._xfnPopupGridSort(objTarget); 			break;
 														case "filter" 	  	  : this._xfnPopupGridFltr(objTarget); 			break;
 														case "setFilter" 	  : this._xfnPopupGridFltr(objTarget); 			break;
														case "removeFilter"	  : this._xfnPopupGridFltrRemove(objTarget); 	break;
// 														case "excelorg"  	  : this._xfnExportExcelGrid("ORG");			break;
														case "excel"  	  	  : this._xfnExportExcelGrid("XLS");			break;
														case "hide" 	 	  : this._xfnPopupHideColGrid(objTarget);		break;
														case "colfix" 	 	  : this._xfnColFixedGrid (objTarget); 			break;
 														case "rowfix" 	 	  : this._xfnRowFixedGrid (objTarget); 			break;
														case "colfixfree"	  : this._xfnColFixedFreeGrid(objTarget); 		break;
 														case "rowfixfree"	  : this._xfnRowFixedFreeGrid(objTarget); 		break;
// 														case "personalexcute" : this._xfnGridPersonalizeExcute(objTarget);  break;
// 														case "personaldelete" : this._xfnGridPersonalizeDelete(objTarget);  break;
                                                        case "rowcopy" 	 	  : this._xfnPopupGridRowCopy(objTarget);   	break;
 														case "reset" 	 	  : this._xfnPopMenuGridReset(objTarget);   	break;
 														case "addrow" 	 	  : this._xfnPopupGridAddrow(objTarget);   		break;
 														case "delrow" 	 	  : this._xfnPopupGridDelrow(objTarget);   		break;
													}

												}, this);

		objPmenu.set_innerdataset(objPmnuDs.name);
		objPmenu.set_captioncolumn("captioncolumn");
		objPmenu.set_idcolumn("idcolumn");
		objPmenu.set_levelcolumn("levelcolumn");
		objPmenu.set_enablecolumn("enablecolumn");
		objPmenu.set_userdatacolumn("userdatacolumn");

        objPmenu.set_itemheight(25);
    
		objPmenu.show();
	}

	var objTarget	= {
						  form   : objForm
						, grid	 : obj
						, row	 : e.row
						, cell	 : e.cell
						, col	 : e.col
					  };

	this._xfnSetUserProperty(objPmenu, "_target", objTarget);

	objPmnuDs.set_enableevent(false);
	objPmnuDs.filter("");

	// 일단 모두 비활성화
	for (var i=0; i<objPmnuDs.getRowCount(); i++)
		 objPmnuDs.setColumn(i, objPmenu.enablecolumn, false);

	var nFindRow;

	// ## Grid 오른쪽 마우스 클릭 시 나타나는 메뉴 제어

	// Sort 활성화
	if (this._xfnIsPossibleGrid("sort") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "sort");
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}

	// 필터 활성화
	if (this._xfnIsPossibleGrid("filter") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "filter");
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
		
        if (this["_tIsFilter"]!=true)
        {
                nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "setFilter");
            if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
            
                nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "removeFilter");
            if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, false);
            
		} else {        
                nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "setFilter");
            if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, false);
            
                nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "removeFilter");
            if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
        }
	}

	// 찾기 활성화
	if (this._xfnIsPossibleGrid("find") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "find");
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}

	// 컬럼숨기기/보이기
	if (this._xfnIsPossibleGrid("hide") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "hide");
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}

	// 틀고정 활성화
	if (this._xfnIsPossibleGrid("fix") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "fix"				);
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);

			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "colfix"			);
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);

			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "colfixfree"		);
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);

			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "rowfix"			);
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);

			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "rowfixfree"		);
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}

	// 그리드 개인화 활성화
// 	if (this._xfnIsPossibleGrid("personal") == true)
// 	{
// 			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "personal"		    );
// 		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
// 
// 			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "personalexcute" 	);
// 		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
// 
// 			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "personaldelete" 	);
// 		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
// 	}

	// 초기화
	if (this._xfnIsPossibleGrid("reset") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "reset");
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}

	// 엑셀 다운로드 활성화
	if (this._xfnIsPossibleGrid("excel") == true)
	{
        nFindRow = 		objPmnuDs.findRow(objPmenu.idcolumn, "excel"			 );
		if (nFindRow >= 0)
        {
            objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
            objPmenu._tExcelRow = nFindRow;
        }
        
		nFindRow = 		objPmnuDs.findRow(objPmenu.idcolumn, "excelorg"			 );
		if (nFindRow >= 0)  objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);

		nFindRow = 		objPmnuDs.findRow(objPmenu.idcolumn, "excelxls"			 );
		if (nFindRow >= 0)  objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}
   
	// 필터/정렬 초기화 활성화
	if (!this._xfnIsEmpty(obj["_sortInfo"]) || !this._xfnIsEmpty(obj["_filterInfo"]))
	{
		nFindRow	= objPmnuDs.findRow(objPmenu.idcolumn, "reset");

		if (nFindRow >= 0)
			objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}
	
	// addrow 활성화
	if (this._xfnIsPossibleGrid("addrow") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "addrow");
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}
	
	// delrow 활성화
	if (this._xfnIsPossibleGrid("delrow") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "delrow");
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}

	// delrow 활성화
	if (this._xfnIsPossibleGrid("rowcopy") == true)
	{
			nFindRow = 	   objPmnuDs.findRow(objPmenu.idcolumn, "rowcopy");
		if (nFindRow >= 0) objPmnuDs.setColumn(nFindRow, objPmenu.enablecolumn, true);
	}
    
	var strExpr	= "";
		strExpr	+= objPmenu.enablecolumn + "!='false'";
		strExpr	+= " || ";
		strExpr	+= "visible!='false'";

	objPmnuDs.filter(strExpr);
	objPmnuDs.set_enableevent(true);

	objPmenu.trackPopupByComponent(obj, e.canvasx - 60, e.canvasy - 20);
}

_xExtendGrid._xfnIsPossibleGrid = function (sFunction)
{
	var bPossible = false;

	switch (sFunction)
	{
		case "popup" :
              //팝업 옵션이 N이 아니면 무조건 허용 (옵션이 없어도 무조건 허용조건)
              //if (this._xfnIsUndefined(this["_usePopMenu"]) || this["_usePopMenu"] != "N") bPossible = true;


              //팝업 옵션이 없으면 허용안함
              bPossible = this._xfnIsPossibleFunc("_usePopMenu");

              break;

		case "sort"   	 : bPossible	= this._xfnIsPossibleFunc("_useSort"	  ); break;
		case "find"   	 : bPossible	= this._xfnIsPossibleFunc("_useFind"	  ); break;
		case "filter" 	 : bPossible	= this._xfnIsPossibleFunc("_useFilter"	  ); break;
		case "hide" 	 : bPossible	= this._xfnIsPossibleFunc("_useHide"	  ); break;
		case "move" 	 : bPossible	= this._xfnIsPossibleFunc("_useMove"	  ); break;
		case "fix" 	  	 : bPossible	= this._xfnIsPossibleFunc("_useFix"		  ); break;
//		case "personal"	 : bPossible	= this._xfnIsPossibleFunc("_usePersonal"  ); break;
		case "reset"  	 : bPossible	= this._xfnIsPossibleFunc("_useReset"	  ); break;
		case "excel"  	 : bPossible	= this._xfnIsPossibleFunc("_useExcel"	  ); break;
		case "checkbox"	 : bPossible	= this._xfnIsPossibleFunc("_useChkbox"	  ); break;
		case "no" 	  	 : bPossible	= this._xfnIsPossibleFunc("_useNo"		  ); break;
		case "status"  	 : bPossible	= this._xfnIsPossibleFunc("_useStatus"	  ); break;
		case "movetocell": bPossible	= this._xfnIsPossibleFunc("_useMoveToCell"); break;
//		case "total"  	 : bPossible	= this._xfnIsPossibleFunc("_useTotal"	  ); break;
		case "readonly"	 : bPossible	= this._xfnIsPossibleFunc("_useReadonly"  ); break;
		case "addrow"	 : bPossible	= this._xfnIsPossibleFunc("_useAddrow"    ); break;
		case "delrow"	 : bPossible	= this._xfnIsPossibleFunc("_useDelrow"    ); break;
        case "rowcopy"	 : bPossible	= this._xfnIsPossibleFunc("_useRowCopy"    ); break;
        case "pagging"	 : bPossible	= this._xfnIsPossibleFunc("_usePagging"   ); break;
        case "scroll"	 : bPossible	= this._xfnIsPossibleFunc("_useScroll"    ); break;
        case "rowcount"	 : bPossible	= this._xfnIsPossibleFunc("_useRowcount"  ); break;
	}

	return bPossible;
}

/**
 * Grid 마우스 우측 버튼 기능 가능 여부를 체크 한다.
 * @param  {Object} objGrid
 * @param  {String} strFunc 체크하려는 활성화 Function 기능
 * @return boolean
 */
_xExtendGrid._xfnIsPossibleFunc = function (sFunction)
{
	var bPossible	= false;

	if (!this._xfnIsUndefined(this[sFunction]) && this[sFunction] == "Y")
		bPossible	= true;

	return bPossible;
}

_xExtendGrid._xfnModifyRowInfoCommonButtonForGrid = function ()
{
	//if (!this.visible) return;

	this._orgFormat = this.getCurFormatString(false);

	var aPosition = new Array(this.left,this.top,this.width,this.height,this.right,this.bottom);

	// width,height 값이 0 이면 return
	if (aPosition[2]==0 || aPosition[3]==0) return;

	var aVsblOption,aEnblOption;

	// Visible Button
		 if (this["_useVisible"] == "Y") aVsblOption = new Array("1","1","1");
	else if (this["_useVisible"] == "N") aVsblOption = new Array("0","0","0");
	else
		aVsblOption = this._xfnRpad(new String(this["_useVisible"]).substring(0, 3), 3, "1").split("");

	// Enable Button
		 if (this["_useEnable"] == "Y") aEnblOption = new Array("1","1","1");
	else if (this["_useEnable"] == "N") aEnblOption = new Array("0","0","0");
	else
		aEnblOption = this._xfnRpad(new String(this["_useEnable" ]).substring(0, 3), 3, "1").split("");

	// Visible 옵션이 000이면 생성 X
	if (aVsblOption.join("")=="000") return false;

	var oForm	  = this.parent;
	var aButton   = new Array("_btnAddRow_"   ,"_btnDelRow_"	  ,"_btnSavRow_");	// 그리드 버튼 정보
	var aButtonCss= new Array("btn_WF_AddCell","btn_WF_DeleteCell","btn_WF_Save");	// 그리드 버튼 Style 정보

	var sButtonAdd= aButton[0] + this._xfnGetUniqueId();
	var sButtonDel= aButton[1] + this._xfnGetUniqueId();
	var sButtonSav= aButton[2] + this._xfnGetUniqueId();

	// 현재 포지션 설정 방법 구분
	var sPostionType1 = "";
	if (this._xfnIsEmpty(aPosition[0])) sPostionType1 = "rightwidth"  ;
	if (this._xfnIsEmpty(aPosition[2])) sPostionType1 = "leftright"   ;
	if (this._xfnIsEmpty(aPosition[4]))	sPostionType1 = "leftwidth"

	var sPostionType2 = "";
	if (this._xfnIsEmpty(aPosition[3])) sPostionType2 = "topbottom"   ;
	if (this._xfnIsEmpty(aPosition[5])) sPostionType2 = "topheight"   ;
	if (this._xfnIsEmpty(aPosition[1]))	sPostionType2 = "heightbottom";

	var _nGap	  =  3;	// Button 간격
	var nBtnWidth = 57;	// Button Width
	var nBtnHeight= 21;	// Button Height

	var nLeft, nTop, nWidth, nRight, nBottom;

	var nTop      = aPosition[1];
	var nBottom   = aPosition[5];

	switch (sPostionType1)
	{
		case "leftright" :
		case "rightwidth":
			 nRight = aPosition[4];
		break;

		case "leftwidth" :
			nLeft = parseInt(aPosition[0]) + parseInt(aPosition[2])-nBtnWidth;
		break;
	}

	switch (sPostionType2)
	{
		case "topbottom" :
		case "topheight" :
			 nTop   = aPosition[1];
		break;

		case "heightbottom" :
			nBottom = parseInt(aPosition[3])+parseInt(nBottom)-nBtnHeight;
		break;
	}

	var objButtonSav = new Button(sButtonSav, nLeft, nTop, nBtnWidth, nBtnHeight, nRight, nBottom);
		objButtonSav.set_cssclass(aButtonCss[2]);
		objButtonSav.set_text("저장");
		objButtonSav.grid = this;

		// Grid onclick Event
		objButtonSav.addEventHandler("onclick"	, function (obj, e)
												  {
														var objGrid 	= objButtonSav.grid;
														var objForm 	= objGrid._xfnGetActiveForm();

														var fnCallback 	= "fnSave";

														// callback in string 일경우
														if (!objGrid._xfnIsFunction(objForm[fnCallback]))
														{
															trace("fnSave : Callback 함수가 존재하지 않습니다.");
															return;
														}

														var aDsRowIdx = objGrid.getSelectedDatasetRows();
														objForm[fnCallback].call(objForm, objGrid, aDsRowIdx);

												  }, objButtonSav);

	if (sPostionType1=="leftwidth") nLeft = nLeft-nBtnWidth-_nGap;

	var objButtonDel = new Button(sButtonDel, nLeft, nTop, nBtnWidth, nBtnHeight, nRight, nBottom);
		objButtonDel.set_cssclass(aButtonCss[1]);
		objButtonDel.set_text("삭제");
		objButtonDel.grid = this;

	if (sPostionType1!="leftwidth")
		objButtonDel.set_right(objButtonSav.name+":"+_nGap);

		// Grid onclick Event
		objButtonDel.addEventHandler("onclick"	, function (obj, e)
												  {
														var objGrid 	= objButtonSav.grid;
														var objForm 	= objGrid._xfnGetActiveForm();
														var objDtst  	= objGrid.getBindDataset();

														objGrid.set_enableevent(false);
														objDtst.set_enableevent(false);

														var aDsRowIdx = objGrid.getSelectedDatasetRows();

														for (var i=aDsRowIdx.length-1; i>=0; i--)
														{
															  if (objDtst.getRowType(aDsRowIdx[i])== Dataset.ROWTYPE_INSERT)
																  objDtst.deleteRow (aDsRowIdx[i]);
															else
															{
																  objDtst.set_updatecontrol(false);
																  objDtst.setRowType(aDsRowIdx[i], Dataset.ROWTYPE_DELETE);
																  objDtst.set_updatecontrol(true);
															}
														}
														objDtst.set_enableevent(true);
														objGrid.set_enableevent(true);

														var fnCallback 	= "fnDelRow";

														// callback in string 일경우
														if (!objGrid._xfnIsFunction(objForm[fnCallback]))
														{
															trace("fnDelRow : Callback 함수가 존재하지 않습니다.");
															return;
														}

														objForm[fnCallback].call(objForm, objGrid, aDsRowIdx);

												  }, objButtonDel);

	if (sPostionType1=="leftwidth") nLeft = nLeft-nBtnWidth-_nGap;

	var objButtonAdd = new Button(sButtonAdd, nLeft, nTop, nBtnWidth, nBtnHeight, nRight, nBottom);
		objButtonAdd.set_cssclass(aButtonCss[0]);
		objButtonAdd.set_text("추가");
		objButtonAdd.grid = this;

	if (sPostionType1!="leftwidth")
		objButtonAdd.set_right(objButtonDel.name+":"+_nGap);

		// Grid onclick Event
		objButtonAdd.addEventHandler("onclick"	, function (obj, e)
												  {
														var objGrid 	= objButtonAdd.grid;
															slctType	= objGrid.selecttype;

														var objForm 	= objGrid._xfnGetActiveForm();
														var objDtst  	= objGrid.getBindDataset();
														var nAddRow		= objDtst.addRow();

														var aDsRowIdx 	= new Array();
															aDsRowIdx.push(nAddRow);

														objGrid.set_enableevent(false);
														objDtst.set_enableevent(false);

														switch (slctType)
														{
															case "row" 		:
															case "multirow" :

																objGrid.clearSelect();
																objGrid.selectRow(nAddRow);

															break;

															default :  objGrid.setCellPos(0);
															break;
														}

														objDtst.set_enableevent(true);
														objGrid.set_enableevent(true);

														var fnCallback 	= "fnAddRow";

															// callback in string 일경우
															if (!objGrid._xfnIsFunction(objForm[fnCallback]))
															{
																trace("fnAddRow : Callback 함수가 존재하지 않습니다.");
																return;
															}
															objForm[fnCallback].call(objForm, objGrid, aDsRowIdx);

												  }, objButtonAdd);

	switch (sPostionType2)
	{
		case "topbottom":
			this.set_top   (parseInt(this.top	 )+26);
		break;
		case "topheight":
			 this.set_top   (parseInt(this.top	 )+26);
			 this.set_height(parseInt(this.height)-26);
		break;

		case "heightbottom" :
			this.set_height(parseInt(this.height )-26);
		break;
	}

	oForm.addChild(sButtonSav,objButtonSav);
	oForm.addChild(sButtonDel,objButtonDel);
	oForm.addChild(sButtonAdd,objButtonAdd);

	objButtonSav.show();
	objButtonDel.show();
	objButtonAdd.show();

	var aButton = new Array(objButtonAdd,objButtonDel,objButtonSav);

	// ADD, DEL, SAVE
	for (var i=aVsblOption.length-1; i>=0; i--)
	{
		if  (aVsblOption[i]=="0")
		{
			if (sPostionType1=="leftwidth")
			for (var j=i-1; j>=0; j--) aButton[j].set_left(parseInt(aButton[j].left			)
														  +parseInt(aButton[j].width)+_nGap	);

			aButton[i].setOffsetWidth(0);
			aButton[i].set_visible(false);

			aButton[i].setOffsetRight(aButton[i].getOffsetRight()-_nGap);
		}
	}

	// ADD, DEL, SAVE
	for (var i=0; i<aEnblOption.length; i++)
	if  (aEnblOption[i]=="0") aButton[i].set_enable (false);
}

//그리드에 페이징 기능 추가
_xExtendGrid._xfnGridPaggingAdd = function()
{
    //변수 선언
    var objForm, objDivPagging, objTarget, objDs, objActiveForm;
    var sId, sFormUrl;
    var nLeft, nWidth, nright, nBottom, ntop, nHeight, nNewBottom, nNewHeight, nNewTop, nIdx;
    
    //부모폼
    objForm = this.parent;
    objDs = take.nvl(this.getBindDataset(),"");
        
    //unique 아이디 생성
    sId = "_divPagging_" + this.name;
    
    if (take.nvl(objForm[sId],"")!="") return;
    
    if (objDs!="")
    {
        objActiveForm = objDs.parent;
    } else {
        objActiveForm = this._xfnGetActiveForm();
    }
    
    //그리드의 현재 좌표값을 페이징을 위한 div의 좌표에 적용하기 위해 세팅
    nLeft   = this.left;
    nWidth  = this.width;
    nRight  = this.right;
    nBottom = this.bottom;
    nTop    = this.top;
    nHeight = 31;
    
    //페이징 div로 생성된 높이 만큼 그리드 좌표 변경 (bottom, height)
    if (!this._xfnIsEmpty(this.bottom))
    {
        
        if (this.bottom.toString().indexOf("%")>=0)
        {
            nNewBottom = (parseInt(this.bottom)+((nHeight/this.parent._init_height)*100))+"%";
        } else if (this.bottom.toString().indexOf(":")>=0) {
            nIdx = this.bottom.toString().indexOf(":");
            nNewBottom = this.bottom.toString().substr(0,nIdx) + (parseInt(this.bottom.toString().substr(nIdx))+nHeight);
        } else {
            nNewBottom = parseInt(this.bottom)+nHeight;
        }
        
        nNewBottom+=1;
        
        this.set_bottom(nNewBottom);
    }
    
    if (!this._xfnIsEmpty(this.height)) 
    {
        if (this.height.toString().indexOf("%")>=0)
        {
            nNewHeight = (parseInt(this.height)-((nHeight/this.parent._init_height)*100))+"%";
        } else {
            nNewHeight = parseInt(this.height)-nHeight;
        }
        
        nNewHeight-=1;
        
        this.set_height(nNewHeight);
    }
 
//     if (!this._xfnIsEmpty(this.top))
//     {
//         if (this.top.indexOf("%")>=0)
//         {
//             //nNewTop = (parseInt(this.top)+((nHeight/this.parent._init_height)*100))+"%";
//         } else if (this.top.indexOf(":")>=0) {
//             nIdx = this.top.indexOf(":");
//             nNewTop = this.top.substr(0,nIdx) + (parseInt(this.top.substr(nIdx))+nHeight);
//             this.set_top(nNewTop);
//         } else {
//             //nNewTop = parseInt(this.bottom)+nHeight;
//         }
//    }

    //그리드 리사이즈 변경사항 폼에 적용을 위해 호출
    objForm.resetScroll();
        
    //div 생성
    objDivPagging = new Div(sId, nLeft, nTop, nWidth, nHeight+1, nRight, null);
    
    //폼에 페이징 div 추가
    objForm.addChild(sId, objDivPagging);
    objDivPagging.show();
    objDivPagging.bringToFront();
    this.bringToFront();
    
    objDivPagging.set_top(this.name+":-1");
    
    // Style 정의
    //objDivPagging.set_border ("1px solid #cccccc");
    objDivPagging.set_border ("0px none");    
    objDivPagging.set_formscrollbartype("none none");
    objDivPagging.set_formscrolltype("none");
    objDivPagging.set_minwidth(550);

    //기본값 세팅(user property)
    objDivPagging._takegridform = objActiveForm; //현재 폼
    objDivPagging._takegrid = this;                         //그리드
    objDivPagging._takegridpagefunc = (take.nvl(this.searchfunction,"")==""?this.pagefunction:this.searchfunction);    //페이징 처리를 위한 트랜잭션 호출 함수
                
    //공통 페이징 폼 페이징 div에 연결
    sFormUrl = "frm::com/comGridPagging.xfdl";
    //objDivPagging.set_url("");
    objDivPagging.set_url(sFormUrl);
    
    //페이징 div 객체를 그리드에 세팅
    this._xfnSetUserProperty(this, "_takegridpaggingdiv", objDivPagging);
        
    //Pagging Div 좌표 설정을 위해 호출
    objForm.resetScroll();
}

//페이징 리로드 함수(외부에서 호출용)
_xExtendGrid.setPagging = function()
{
    //페이징 기능 사용 여부 체크
    if (this._xfnIsPossibleGrid("pagging") == true)
 	{
        //페이징 처리를 위한 트랜젝션 호출용 함수 세팅 여부 체크
        if (take.nvl(this.pagefunction,"")=="" && take.nvl(this.searchfunction,"")=="")
        {
            take.debug("takegrid.setPagging(pagging)", "Pagging 처리를 위한 함수가 없어 pagging기능을 사용할 수 없습니다.\n'searchfunction' userproperty를 추가 후 페이징 처리를 위한 함수명을 지정해 주세요.");
        } else {            
            if(take.nvl(this.searchfunction,"")=="")
            {
                this.searchfunction = this.pagefunction;
            }
            //페이징 div 객체
            var objDivPagging = take.nvl(this._xfnGetUserProperty(this, "_takegridpaggingdiv"), "");
            
            if (objDivPagging=="")
            {
                take.debug("takegrid.setPagging(pagging)", "페이징 div를 새로 생성합니다.");
                
                //페이징 추가 함수 호출
                this._xfnGridPaggingAdd();
            } else {
                //페이징 div form reload
                objDivPagging.form.relaod();
            }
        }
    }
}

// Grid 에 공통기능 추가
_xExtendGrid._xfnGridTotalInfoAdd = function (sAddProp)
{
	//if (!this.visible) return;

	// Grid TotalBar 생성
	if (sAddProp == "total")
	{
		var nLeft	  = this.left;
		var nWidth	  = this.width;
		var nRight	  = this.right;
		var nBottom	  = this.bottom;
		var nTop	  = this.top;
		var nHeight	  = 31;

		var sStatic   = "_staTotal_" + this._xfnGetUniqueId();
		var objStatic = new Static(sStatic, nLeft, nTop, nWidth, nHeight+1, nRight, nBottom);
			objStatic.set_top(this.name+":-1");

 		if (!this._xfnIsEmpty(nBottom))
 			 this.set_bottom(parseInt(this.bottom)+nHeight);

 		if (!this._xfnIsEmpty(this.height))
 			 this.set_height(parseInt(this.height)-nHeight);

		var objForm	  = this.parent;
			objForm.addChild(sStatic, objStatic);

			objForm.resetScroll();

		// Style 정의 필요
		objStatic.bringToFront();
		objStatic.set_background("#ffffff"		  );
		objStatic.set_border ("1px solid darkgray");
		objStatic.set_padding("0px 10px 0px 0px"  );
		objStatic.set_textAlign("right"			  );

		objStatic.set_text("AVERAGE : 0 | TOTAL : 0 | COUNT : 0");
		objStatic.show();

		var objTarget	=
		{
			"static" : objStatic
		};

		this._xfnSetUserProperty(this, "_target", objTarget);
	}
}

// Grid 에 공통기능 추가
_xExtendGrid._xfnGridCheckboxNoStatusAdd = function (sAddProp)
{
	//if (!this.visible) return;

	// Grid TotalBar 생성
	if (sAddProp == "total")
	{
		var nLeft	  = this.left;
		var nWidth	  = this.width;
		var nRight	  = this.right;
		var nBottom	  = this.bottom;
		var nTop	  = this.top;
		var nHeight	  = 31;

		var sStatic   = "_staTotal_" + this._xfnGetUniqueId();
		var objStatic = new Static(sStatic, nLeft, nTop, nWidth, nHeight+1, nRight, nBottom);
			objStatic.set_top(this.name+":-1");

 		if (!this._xfnIsEmpty(nBottom))
 			 this.set_bottom(parseInt(this.bottom)+nHeight);

 		if (!this._xfnIsEmpty(this.height))
 			 this.set_height(parseInt(this.height)-nHeight);

		var objForm	  = this.parent;
			objForm.addChild(sStatic, objStatic);

			objForm.resetScroll();

		// Style 정의 필요
		objStatic.bringToFront();
		objStatic.set_background("#ffffff"		  );
		objStatic.set_border ("1px solid darkgray");
		objStatic.set_padding("0px 10px 0px 0px"  );
		objStatic.set_textAlign("right"			  );

		objStatic.set_text("AVERAGE : 0 | TOTAL : 0 | COUNT : 0");
		objStatic.show();

		var objTarget	=
		{
			"static" : objStatic
		};

		this._xfnSetUserProperty(this, "_target", objTarget);
		return;
	}

	var objDs = take.nvl(this.getBindDataset(),"");

    if (objDs=="")
    {
        take.debug("takegrid._xfnGridCheckboxNoStatusAdd.info", "그리드에 바인드된 데이터셋이 없습니다.");
        return;
    }
    
	var nHeadColIndex, nBodyColIndex;

	  if (this._xfnIsEmpty(objDs.insertheadcell)) nHeadColIndex = 0;
	else 										  nHeadColIndex = objDs.insertheadcell;

	  if (this._xfnIsEmpty(objDs.insertbodycell)) nBodyColIndex = 0;
	else				 						  nBodyColIndex = objDs.insertbodycell;

	var nFormatRowCount = this.getFormatRowCount();
	var nHeadCount		= -1;
	var nBodyCount		= -1;

	for (var i=0; i<nFormatRowCount; i++)
	{
		if (this.getFormatRowProperty(i, "band") == "head") nHeadCount++;
		if (this.getFormatRowProperty(i, "band") == "body") nBodyCount++;
	}

	//var sNo 	= "순번";	// 순번
    var sNo 	= "No.";	// 순번
	var sStatus = "상태";	// 상태

	// 해당컬럼 동적으로 추가전 band 정보를 가져온다.
	var sOriBand= this.getFormatColProperty(0, "band");

    var nColCount, nRowCount, nCellHeadCount, nCellHeadCnt;
    var sCellTxt, sColId, sExpr;
    
	// 체크박스
	if (sAddProp == "checkbox")
	{
		objDs.set_enableevent(false);
        this.set_enableevent(false);
		this.set_enableredraw(false);

		take.addDsColumn(objDs, "CHK", "STRING", 1);

        nRowCount = objDs.getRowCount();
        //속도 오래 걸리는 부분
// 		for (var i=0; i<nRowCount; i++)
//         {
// 			if (idx < 0)
//            {
// 				objDs.setColumn(i, "CHK", "0");
// 			}
// 		}

        nCellHeadCount = this.getCellCount("head");
        
        var bodyCellIndex;
        
		for (var i=0; i<nCellHeadCount; i++)
		{
			//헤드텍스트
			if (this.getCellProperty("head" , i, "text") == "0")
			{
				// head cell index 에 해당하는 body cell index
				bodyCellIndex 	= this._xfnGridGetBodyCellIndex(this, i);

				// body cell index 에 해당하는 바인드 컬럼명
				if (this._xfnGridGetBindColumnNameByIndex(this, bodyCellIndex) == "CHK")
                {
					this.deleteContentsCol("body", i);
                }
			}
		}
		
		this.insertContentsCol(nBodyColIndex);
		this.setFormatColProperty(nBodyColIndex, "size", "40"	 );
		this.setFormatColProperty(nBodyColIndex, "band", "left"  );

		this.setCellProperty("head", nHeadColIndex, "displaytype", "checkboxcontrol"  );
		this.setCellProperty("head", nHeadColIndex, "edittype"	 , "checkbox"		  );
		this.setCellProperty("head", nHeadColIndex, "text"		 , "0"				  );
		this.setCellProperty("body", nBodyColIndex, "displaytype", "checkboxcontrol"  );
		this.setCellProperty("body", nBodyColIndex, "edittype"	 , "checkbox"		  );
		this.setCellProperty("body", nBodyColIndex, "text"		 , "bind:CHK"		  );
        //this.setCellProperty("body", nBodyColIndex, "text"		 , "expr:CHK=='1'?'1':'0'"    );

		this.mergeContentsCell("head", 0, nBodyColIndex, nHeadCount, nBodyColIndex, nHeadColIndex, false);
		this.mergeContentsCell("body", 0, nBodyColIndex, nBodyCount, nBodyColIndex, nBodyColIndex, false);

		nHeadColIndex++;
 		nBodyColIndex++;

		objDs.set_enableevent(true);
        this.set_enableevent(true);
		this.set_enableredraw(true);
        
		objDs.applyChange();
		
		//trace("!@!@>> format1:  " + this.getCurFormatString(false));
	}
	
	// 번호
	if (sAddProp == "no")
	{
        objDs.set_enableevent(false);
        this.set_enableevent(false);
		this.set_enableredraw(false);
        
        nCellHeadCnt = this.getCellCount("head");
        
		for (var i=0; i<nCellHeadCnt; i++)
		{
			sCellTxt = this.getCellProperty("head" , i, "text");
			if (sCellTxt == "NO" || sCellTxt == "순번" || sCellTxt == "No.")
            {
				this.deleteContentsCol("body", i);
            }
		}

		this.insertContentsCol(nBodyColIndex);
		this.setFormatColProperty(nBodyColIndex, "size", "50"  );
		this.setFormatColProperty(nBodyColIndex, "band", "left");

 		this.setCellProperty("head", nHeadColIndex, "text"	   , sNo			  );
		this.setCellProperty("head", nHeadColIndex, "textAlign","center"		  );

		// 순번컬럼과 함께 사용 2018.05.17
		if (this._xfnIsPossibleGrid("status"))
        {
            
            sExpr = "expr"
                  + ":dataset.getRowType(currow)==2?"+nexacro.wrapQuote("I")
                  + ":dataset.getRowType(currow)==4?"+nexacro.wrapQuote("U")
                  + ":dataset.getRowType(currow)==8?"+nexacro.wrapQuote("D");
                  
            if (this._xfnIsPossibleGrid("pagging"))
            {
                sExpr += ":rnum";
            } else {
                sExpr += ":currow+1";
            }
            
            this["_tsNoStatusExpr"] = sExpr;
            this.setCellProperty("body", nBodyColIndex, "text",sExpr);
            //this.setCellProperty("body", nBodyColIndex, "textAlign","center"		  );
		} else {
            if (this._xfnIsPossibleGrid("pagging"))
            {
                sExpr = "expr:rnum";
            } else {
                sExpr = "expr:currow+1";
            }
            
            this["_tsNoStatusExpr"] = sExpr;
            this.setCellProperty("body", nBodyColIndex, "text", sExpr);
            //this.setCellProperty("body", nBodyColIndex, "textAlign","center"		  );
        }
        
        this.setCellProperty("body", nBodyColIndex, "textAlign","center"		  );        
        this.setCellProperty("body", nBodyColIndex, "background","#f3f5fb"		  );
        
		this.mergeContentsCell("head", 0, nBodyColIndex, nHeadCount, nBodyColIndex, nHeadColIndex, false);
		this.mergeContentsCell("body", 0, nBodyColIndex, nBodyCount, nBodyColIndex, nBodyColIndex, false);

		nHeadColIndex++;
 		nBodyColIndex++; 	
        
        objDs.set_enableevent(true);
        this.set_enableevent(true);
		this.set_enableredraw(true);
	}
    
    //상태
	if (sAddProp == "status")
	{
        if (this._xfnIsPossibleGrid("status"))
        {
            if (this._xfnIsPossibleGrid("no")) return; //순번과 상태를 같이 사용할 경우 순번에 상태 표기
            
            objDs.set_enableevent(false);
            this.set_enableevent(false);
            this.set_enableredraw(false);
            
            nCellHeadCnt = this.getCellCount("head");
            
            for (var i=0; i<nCellHeadCnt; i++)
            {
                sCellTxt = this.getCellProperty("head" , i, "text");
                if (sCellTxt == sStatus)
                {
                    this.deleteContentsCol("body", i);
                }
            }
            
            this.insertContentsCol(nBodyColIndex );
            this.setFormatColProperty(nBodyColIndex, "size", "50"  );
            this.setFormatColProperty(nBodyColIndex, "band", "left"); 

            this.setCellProperty("head", nHeadColIndex, "text"	   , sStatus		  );
            this.setCellProperty("head", nHeadColIndex, "textAlign","center"		  );

            sExpr = "expr"
                  + ":dataset.getRowType(currow)==2?"+nexacro.wrapQuote("I")
                  + ":dataset.getRowType(currow)==4?"+nexacro.wrapQuote("U")
                  + ":dataset.getRowType(currow)==8?"+nexacro.wrapQuote("D")
                  + ":" + nexacro.wrapQuote("N");

            this["_tsNoStatusExpr"] = sExpr;
            this.setCellProperty("body", nBodyColIndex, "text"	   ,sExpr			  );
            this.setCellProperty("body", nBodyColIndex, "textAlign","center"		  );
                
            this.mergeContentsCell("head", 0, nBodyColIndex, nHeadCount, nBodyColIndex, nHeadColIndex, false);
            this.mergeContentsCell("body", 0, nBodyColIndex, nBodyCount, nBodyColIndex, nBodyColIndex, false);

            nHeadColIndex++;
            nBodyColIndex++; 	
            
            objDs.set_enableevent(true);
            this.set_enableevent(true);
            this.set_enableredraw(true);            
        }
    }
	//this._orgFormat = this.getCurFormatString(false);
	//trace("!@!@>> format2:  " + this.getCurFormatString(false));
};

/***************************************************************************************************
 *	Grid 개인화
 **************************************************************************************************/
// Grid 개인화 저장
_xExtendGrid._xfnGridPersonalizeExcute = function (objGridInfo)
{
    var objGrid, objDs, objForm, objPersonalDs;
 	var sFormat, sOrderCfg, sFilterCfg, sFitCfg, sColumn, sDataInfo, sRowInfo, sColInfo, sGridId, sProgId, sGridFormat, sUserId, sProjectCd, sUrl, sInDs, sOtDs, sParam;
    var aOrderCfg, aInfo, aData, aFilterData, aFilterInfo, aFitCfg;
    var nRow;
    
 	objGrid		= objGridInfo.grid;
	objDs       = objGrid.getBindDataset();
	objForm 	= objGrid._xfnGetActiveForm();
 	sFormat 	= objGrid.getCurFormatString(false);

	// 그리드에 바인딩된 데이터셋 설정정보 저장
	sOrderCfg  = ""; // 정렬정보
	sFilterCfg = ""; // 필터정보
	sFitCfg    = ""; // 고정정보

	// 정렬정보 가공
	if (!this._xfnIsEmpty(objGrid["_sortItem"]))
	{
		aOrderCfg = new Array();
		for (var i=0; i<objGrid["_sortItem"].length; i++)
		{
			sColumn = objGrid["_sortItem"][i];
			aOrderCfg[aOrderCfg.length] = sColumn + ","
										+ objGrid["_sortInfo"][sColumn].status   + ","
										+ objGrid["_sortInfo"][sColumn].text 	 + ","
										+ objGrid["_sortInfo"][sColumn].refCell._cellidx;
		}
		sOrderCfg   = aOrderCfg.join("#");
		trace("objGrid[\"_sortItem\"] 정보가 존재합니다. " + sOrderCfg);
	}

	// 필터정보 가공
	if (!this._xfnIsEmpty(objGrid["_filterInfo"]))
	{
		aInfo = objGrid["_filterInfo"];
		aData = objGrid["_filterData"];

		aFilterData = new Array(aData.length);
		aFilterInfo = new Array(aInfo.length);

		for (var i=0; i<aInfo.length; i++)
		{
			if (this._xfnIsEmpty(aInfo[i])) continue;

			aFilterInfo[i] = aInfo[i].headcell 	+ ","
						   + aInfo[i].cell     	+ ","
						   + aInfo[i].coltype  	+ ","
						   + aInfo[i].colid    	;

			if (this._xfnIsEmpty(aData[i])) continue;

			for (var j=0; j<aData[i].length; j++)
			{
				sDataInfo  = aData[i][j].operatorcode + ","
						   + aData[i][j].operatorname + ","
						   + aData[i][j].code		  + ","
						   + aData[i][j].name		  ;

				if (!this._xfnIsEmpty(aFilterData[i]))
					aFilterData[i] = aFilterData[i] + "@" + sDataInfo;
				else
					aFilterData[i] = sDataInfo;
			}
		}

		sFilterCfg = aFilterInfo.join("#") + "%" + aFilterData.join("#");
		trace("objGrid[\"_filterInfo\"] 정보가 존재합니다. " + sFilterCfg);
	}

	// 고정정보 가공
	if (!this._xfnIsEmpty(objGrid["_rowfixInfo"]) || !this._xfnIsEmpty(objGrid["_colfixInfo"]))
	{
		sRowInfo= -1;
		sColInfo= "";

		aFitCfg = new Array();

		if (!this._xfnIsEmpty(objGrid["_rowfixInfo"]))
			sRowInfo = objGrid["_rowfixInfo"].row;

		if (!this._xfnIsEmpty(objGrid["_colfixInfo"]))
		{
			sColInfo = objGrid["_colfixInfo"].col     + ","
					 + objGrid["_colfixInfo"].colSpan + ","
					 + objGrid["_colfixInfo"].rowSpan ;
		}

		aFitCfg.push(sRowInfo);
		aFitCfg.push(sColInfo);

		sFitCfg = aFitCfg.join("#");
		trace("objGrid[\"_rowfixInfo\"] 정보가 존재합니다. " + sFitCfg);
	}

 	// 개인화정보 조회용 공통 데이터셋 생성
	objPersonalDs= objForm.lookup("_xdsGridPersonal");
    
	if (objPersonalDs instanceof nexacro.Dataset == false)
	{
		objPersonalDs = new Dataset;
        objPersonalDs.addColumn("PROJECT_CD"	 , "string");
		objPersonalDs.addColumn("USER_CD"	 , "string");
		objPersonalDs.addColumn("MENU_CD"	 , "string");
		objPersonalDs.addColumn("GRID_NO"	 , "string");
		objPersonalDs.addColumn("GRID_FORMAT", "string");
		objPersonalDs.addColumn("ORDER_CONFIG"  , "string");
		objPersonalDs.addColumn("FILTER_CONFIG" , "string");
		objPersonalDs.addColumn("FIT_CONFIG" 	 , "string");
		
		objForm.addChild("_xdsGridPersonal", objPersonalDs);
	}
	
	sGridId 	= objForm._xfnGetPathName(objGrid, objForm);
	sProgId 	= objForm._xfnGetActiveProcId();
		
	sGridFormat = sFormat;
	
	objPersonalDs.clearData();
	nRow = objPersonalDs.addRow();

	// SERVER에서 저장구분 체크
	sUserId = nexacro.getApplication().gdsUserInfo.getColumn(0, "USER_CD");
    sProjectCd = nexacro.getApplication().gdsUserInfo.getColumn(0, "PROJECT_CD");
	
	//trace("!@!@>> 저장:  " + sProgId + ",   " + sUserId);
	objPersonalDs.setColumn(nRow, "PROJECT_CD"    , sProjectCd );
	objPersonalDs.setColumn(nRow, "USER_CD"	      , sUserId    );
	objPersonalDs.setColumn(nRow, "MENU_CD"	      , sProgId    );
	objPersonalDs.setColumn(nRow, "GRID_NO"	      , sGridId    );
	objPersonalDs.setColumn(nRow, "GRID_FORMAT"   , sGridFormat);
	objPersonalDs.setColumn(nRow, "ORDER_CONFIG"  , sOrderCfg  );
	objPersonalDs.setColumn(nRow, "FILTER_CONFIG" , sFilterCfg );
	objPersonalDs.setColumn(nRow, "FIT_CONFIG"    , sFitCfg    );
	
    
	// 변수선언
	sUrl   	 = _xSvcId + "comm/userGridInsert.do";    						// 서비스   ID
	sInDs  	 = "tgdsUserGrid=_xdsGridPersonal:U" ;							// 조회조건 Dataset
	sOtDs 	 = "";    														// 조회결과 Dataset
	sParam 	 = "";

	// 조회조건 Arguments
	var sCallBack= "_xfnGridPersonalizeCallback"; 				// 콜백함수

	take.transaction(objForm, "_excute", sUrl, sInDs, sOtDs, sParam, sCallBack);

	// 초기 포멧으로 설정
	this._perFormat = sFormat   ;
	this._perOrdCfg = sOrderCfg ;
	this._perFltCfg = sFilterCfg;
	this._perFitCfg = sFitCfg	;
}

/**
// Grid 개인화 삭제
_xExtendGrid._xfnGridPersonalizeDelete = function (objGridInfo)
{
	var objGrid		= objGridInfo.grid;
	var objForm 	= objGrid._xfnGetActiveForm();
	var sFullpath   = objForm._xfnGetPathName(objGrid, objForm);
	var sGridId 	= sFullpath;
	var sProgId 	= objForm._xfnGetActiveProcId();	
	var sUserId 	= nexacro.getApplication().gdsUserInfo.getColumn(0, "USER_CD");
    var sProjectCd  = nexacro.getApplication().gdsUserInfo.getColumn(0, "PROJECT_CD");
	
	//trace("!@!@>> 삭제:  " + sProgId);
	
	// 변수선언
	var sUrl   	 = _xSvcId + "comm/userGridDelete.do";  		// 서비스   ID
	var sInDs  	 = "";											// 조회조건 Dataset
	var sOtDs 	 = "";    										// 조회결과 Dataset
	var sParam 	 = "PROJECT_CD='" + sProjectCd + "'";
        sParam 	+= " USER_CD='"   + sUserId + "'";
		sParam	+= " MENU_CD='"   + sProgId + "'";
		sParam	+= " GRID_NO='"   + sGridId + "'";

	// 조회조건 Arguments
	var sCallBack= "_xfnGridPersonalizeCallback"; 				// 콜백함수

	take.transaction(objForm, "_delete", sUrl, sInDs, sOtDs, sParam, sCallBack);

	// 초기 포멧으로 설정
	objGrid.set_formats("<Formats>" + this._orgFormat + "</Formats>");
	objGrid._perFormat = "";

	objGrid._perOrdCfg	= "";
	objGrid._perFltCfg = "";
	objGrid._perFitCfg = "";

	// ## 그리드 정렬 초기화
	objGrid._xfnInitSortGrid(objGrid);
	// ## 그리드 필터 초기화
	objGrid._xfnInitFltrGrid(objGrid);
	// ## 그리드 컬럼 숨기기,보이기 초기화
	objGrid._xfnInitHideGrid(objGrid);
	// ## 그리드 행,열고정 초기화
	objGrid._xfnInitFixedGrid({grid : objGrid});
}

// Grid 개인화 조회, 주기능에 영향 미치지 않도록 예외처리
<!-- _xExtendForm._xfnGridPersonalizeSearch = function ()
{
    var pThis = this;

    try
    {
        var objPersonalDs;
        var arrCompList;
        var nCnt;
        var sTakeGrid, sPopUpMenuList;
        var bPersonal=false;
        
        //그리드 개인화 기능 사용 여부 체크 스타트
        arrCompList = take.nvl(take.getCompObjects(pThis, "grid"),"");
        
        if (arrCompList=="")
        {
            take.debug(pThis.name + ".takegrid._xfnGridPersonalizeSearch", "폼에 개인화 할 그리드가 없습니다.");
            return false;
        } else {
            nCnt = arrCompList.length;
            
            for (var i=0; i<nCnt; i++)
            {
                if (i==0)
                    {
                    sPopUpMenuList = take.nvl(arrCompList[i].popupmenulist,"")
                    
                    if (sPopUpMenuList=="")
                    {
                        take.debug(pThis.name + ".takegrid._xfnGridPersonalizeSearch", "해당 프로젝트는 takegrid 기능을 사용하지 않습니다.");
                        return false;
                        //break;
                    } else {
                        if (sPopUpMenuList.indexOf("personal")<0)
                        {
                            take.debug(pThis.name + ".takegrid._xfnGridPersonalizeSearch", "takegrid에 개인화 기능을 사용하지 않습니다.");
                            return false;
                        }
                    }
                }
                
                sTakeGrid = take.nvl(arrCompList[i].takegrid,"");
                
                if (sTakeGrid=="all" || sTakeGrid.indexOf("personal")>=0)
                {
                    bPersonal = true;
                }
            }
        }
        
        if (!bPersonal)
        {
            take.debug(pThis.name + ".takegrid._xfnGridPersonalizeSearch", "개인화 기능을 사용하는 takegrid가 없습니다.");
            return false;
        }
        //그리드 개인화 기능 사용 여부 체크 끝
        
        // 개인화 정보 조회용 공통 데이터셋 생성
        var objPersonalDs= pThis.lookup("_xdsGridPersonal");
        if (objPersonalDs instanceof nexacro.Dataset == false)
        {
            objPersonalDs = new Dataset;
            objPersonalDs.addColumn("PROJECT_CD"    , "string");
            objPersonalDs.addColumn("USER_CD"       , "string");
            objPersonalDs.addColumn("MENU_CD"       , "string");
            objPersonalDs.addColumn("GRID_NO"       , "string");
            objPersonalDs.addColumn("GRID_FORMAT"   , "string");
            objPersonalDs.addColumn("ORDER_CONFIG"  , "string");
            objPersonalDs.addColumn("FILTER_CONFIG" , "string");
            objPersonalDs.addColumn("FIT_CONFIG"    , "string");

            pThis.addChild("_xdsGridPersonal", objPersonalDs);
        }

        // 데이터셋 초기화
        objPersonalDs.clearData();
        
        var sProgId  = pThis._xfnGetActiveProcId();     
        //trace( "!@!@>> 조회_sProgId:  " + sProgId );
        
        var sUserId = nexacro.getApplication().gdsUserInfo.getColumn(0, "USER_CD");
        var sProjectCd = nexacro.getApplication().gdsUserInfo.getColumn(0, "PROJECT_CD");

        // 변수선언
        var sUrl     = _xSvcId + "comm/userGridSelect.do";  // 서비스   ID
        var sInDs    = "";                                      // 조회조건 Dataset
        var sOtDs    = "_xdsGridPersonal=tgdsUserGrid";         // 조회결과 Dataset
        var sParam   = "sProjectCd='" + sProjectCd + "' sMenuCd='" + sProgId + "' sUserCd='" + sUserId + "'";// 조회조건 Arguments

        if (take.nvl(take.SvcId,"")!="")
        {
            //서비스 id 변경
            sUrl = sUrl.replace(/\w*::/,take.SvcId+"::");
            take.debug(pThis.name + ".take.transaction", "변경 서비스 아이디 URL" + sUrl);
        }

        //callback 처리
        nexacro.Form.prototype._xfnGridPersonalizeSearchCallback = function (sSvcId, nErrCd, sErrMsg)
        {
            trace("그리드 개인화 정보를 정상적으로 조회하였습니다.");
            if (sSvcId != "_search") return;

            try
            {
                var objPersonalDs= pThis.lookup("_xdsGridPersonal");                
                var nCnt    = objPersonalDs.getRowCount();
                var objGrid,sFormat;

                if (nCnt==0)
                {
                    trace("그리드 개인화 저장 정보가 존재하지 않습니다.")
                    return;
                }

                // 개인화 정보가 있다면 변경처리
                for (var i=0; i<nCnt; i++)
                {
                    objGrid = objPersonalDs.getColumn(i, "GRID_NO");
                    //objGrid = objGrid.substring( objGrid.lastIndexOf(".") + 1 );
                    
                    if (this._xfnIsEmpty(objGrid))
                    {
                        trace("그리드 컴포넌트 정보가 존재하지 않습니다.");
                        continue;
                    }

                    sFormat = "<Formats>" + objPersonalDs.getColumn(i, "GRID_FORMAT") + "</Formats>";
                    
                    objGrid = pThis._xfnGetCompByPathName(objGrid, pThis);
                    objGrid.set_formats(sFormat);
                    objGrid._perFormat = objPersonalDs.getColumn(i, "GRID_FORMAT");
                    objGrid._perOrdCfg = objPersonalDs.getColumn(i, "ORDER_CONFIG"  );
                    objGrid._perFltCfg = objPersonalDs.getColumn(i, "FILTER_CONFIG" );
                    objGrid._perFitCfg = objPersonalDs.getColumn(i, "FIT_CONFIG"     );

                    // ## 그리드 정렬 초기화
                    objGrid._xfnInitSortGrid(objGrid);
                    // ## 그리드 필터 초기화
                    objGrid._xfnInitFltrGrid(objGrid);
                    // ## 그리드 컬럼 숨기기,보이기 초기화
                    objGrid._xfnInitHideGrid(objGrid);
                    // ## 그리드 행,열고정 초기화
                    objGrid._xfnInitFixedGrid({grid : objGrid});
                }
            }
            catch (e) {trace("Exception : " + e)};
        }

        pThis.transaction("_search", sUrl, sInDs, sOtDs, sParam, "_xfnGridPersonalizeSearchCallback", false);       
    } catch(e) {
        trace("takegrid._xExtendForm._xfnGridPersonalizeSearch : 개인화 저장 error");
         trace("error name : " + e.name);
         trace("error message : " + e.message);
         trace(e.stack);
    }
}

// 후처리
_xExtendForm._xfnGridPersonalizeCallback = function (sId, nErrCd, sErrMsg)
{
    switch (sId)
    {
        case "_excute"  :
            trace("그리드 개인화 정보를 정상적으로 저장하였습니다.");
        break;
        case "_delete"  :
            trace("그리드 개인화 정보를 정상적으로 삭제하였습니다.");

        break;
    }
} -->
**/
/***************************************************************************************************
 *	Grid 초기화
 **************************************************************************************************/

_xExtendGrid._xfnPopMenuGridReset = function (objGridInfo)
{
	var objGrid = objGridInfo.grid;

	// 행,열고정 초기화
 	this._xfnInitFixedGrid(objGridInfo);

	// 정렬/필터/ 숨기기/보이기 초기화
	this._xfnInitSortGrid(objGrid);
 	this._xfnInitFltrGrid(objGrid);
	this._xfnInitHideGrid(objGrid);
}

/***************************************************************************************************
 *	Grid 찾기
 **************************************************************************************************/

// 그리드 찾기 팝업을 띄운다.
_xExtendGrid._xfnPopupGridFind = function (objGridInfo)
{
	var objForm = objGridInfo.form;
	var objData	= {
						popupid			: "comFind"
					, 	sFormUrl		: "frm::com/comGridFind.xfdl"
					, 	sOverlayColor	: "#0000000f"
					,   bShowTitlebar	: true
					, 	oArgs			: {"gridInfo" : objGridInfo}

				  };

	this._xfnShowModal(objForm, objData, "");
};

/***************************************************************************************************
 *	Grid 컬럼숨기기/보이기
 **************************************************************************************************/
/**
 * 그리드 컬럼보이기/숨기기를 초기화 한다
 * @param {object} obj Grid
 * @return
 * @example
 */


/**
 * 그리드 컬럼보이기/숨기기를 개인화정보로 초기화 한다
 * @param {object} obj Grid
 * @return
 * @example
 */
_xExtendGrid._xfnInitHideGrid = function (obj)
{
	this["_hideInfo"] = null;
	var objDst  = this.getBindDataset();
	var sFormat = "";

	if (!this._xfnIsEmpty(this._perFormat))
	{
		//trace("개인화정보 존재"  );
		sFormat = "<Formats>" + this._perFormat + "</Formats>";
		this.set_formats(sFormat);
	}
	else
	{
		//trace("개인화정보 미존재");
		sFormat = "<Formats>" + this._orgFormat + "</Formats>";
		this.set_formats(sFormat);
	}

	// ## 오리지널 그리드 정보를 사용하기 위한 더비 그리드
	var objGrid = new Grid();
		objGrid.init("_Grid", 100, 120, 196, 46, null, null);
		objGrid.set_formats(sFormat);

	var arrHideInfo	= new Array();
	for (var i=0; i<objGrid.getCellCount("body"); i++)
	{
		/* head와 body의 column index가 다른경우 확인해야함 */
		var sCellText	= objGrid._xfnTrim(objGrid.getCellProperty("body", i, "text"));
		var nCellRow	= parseInt(objGrid._xfnTrim(objGrid.getCellProperty("body", i, "row")));
		var nCellCol	= parseInt(objGrid._xfnTrim(objGrid.getCellProperty("body", i, "col")));

		if (sCellText.toLowerCase().indexOf("bind:") < 0) continue;
			sCellText = sCellText.substr(5);

		var objColInfo	= objDst.getColumnInfo(sCellText);

		if (objGrid._xfnIsEmpty(objColInfo)) continue;
		if (objColInfo.type.toUpperCase() == "BLOB") continue;

		var objHeadInfo	= this._xfnGetHeadInfo(objGrid, nCellCol, nCellRow);

		if (objGrid._xfnIsEmpty(objHeadInfo)) continue;

		var sHeadText	= objGrid._xfnNvl(objHeadInfo["text"], sCellText);
		var nHeadCell	= objGrid._xfnNvl(objHeadInfo["cell"], i		);
		var nCellSize 	= objGrid._xfnNvl(objHeadInfo["size"], "0"		);

		var strType = objGrid.getCellProperty("head", nHeadCell, "displaytype");
		if (strType == "treeitemcontrol" || strType == "checkboxcontrol" || strType == "combocontrol") continue;

		var bShowHide = true;
		if (this.getFormatColProperty(nHeadCell, "size") == 0) bShowHide = false;

		arrHideInfo[arrHideInfo.length]	= {colid : sCellText, showHide : bShowHide, cell : nHeadCell, size : nCellSize};
	}

	this["_hideInfo"] = arrHideInfo;
	this._xfnProcHideColGrid(objGrid);

	objGrid.destroy();
	objGrid = null;
};

/**
 * objGridInfo 의 그리드 정보로 그리드 컬럼숨기기/보이기
 * @param {object} objGridInfo
 * @return
 * @example
 */
_xExtendGrid._xfnPopupHideColGrid = function(objGridInfo)
{
	var objForm = objGridInfo.form;
	var objData	= {
						popupid			: "comHide"
					, 	sFormUrl		: "frm::com/comGridHide.xfdl"
					, 	sOverlayColor	: "#0000000f"
					,   bShowTitlebar	: true
					, 	oArgs			: {"gridInfo" : objGridInfo}
				  };

	this._xfnShowModal(objForm, objData,  function(sPopId, varHide)
										  {
											if (sPopId != objData["popupid"] ) return;
											var objGrid	= objGridInfo.grid;

											if ( objGrid._xfnIsEmpty(varHide)) return;
											if (!objGrid._xfnIsArray(varHide)) return;

											var arrHideInfo	= varHide;

											// 그리드 컬럼숨기기/보이기 적용
											objGrid["_hideInfo"] = arrHideInfo;
											objGrid._xfnProcHideColGrid(objGrid);

											// 그리드 컬럼숨기기/보이기 적용 후 다시 고정바 재적용
											try
											{
												objGrid._xfnProcColFixedGrid(objGrid);
											} catch(e) {
                                                trace("takegrid._xExtendGrid._xfnPopupHideColGrid : 그리드 정보로 그리드 컬럼숨기기/보이기 error");
                                                trace("error name : " + e.name);
                                                trace("error message : " + e.message);
                                                trace(e.stack);
											}

										  });
};

// 그리드에 설정된 _hideInfo 값으로 컬럼숨기기/보이기 처리 한다
_xExtendGrid._xfnProcHideColGrid = function(objGrid)
{
	if (this._xfnIsArray(objGrid["_hideInfo"]))
	{
		var arrHideInfo	= objGrid["_hideInfo"];
		
		for (var i=0; i<arrHideInfo.length; i++)
		{
			var nSize   = 0;
			var bHide	= arrHideInfo[i].showHide;
			var sColId	= arrHideInfo[i].colid;
			var nCell	= objGrid.getBindCellIndex("body", sColId);

			// 디자인시 그린 사이즈로 복원
			if (bHide==true)
				nSize = arrHideInfo[i].size;
				

			objGrid.setFormatColProperty(nCell, "size", nSize);
		}
	}
};

/***************************************************************************************************
 *	Grid 틀고정
 **************************************************************************************************/

/**
 * 그리드 틀고정을 초기화 한다
 * @param {object} objGridInfo
 * @return
 * @example
 */
_xExtendGrid._xfnInitFixedGrid = function(objGridInfo, sGbn)
{
	this._xfnColFixedFreeGrid(objGridInfo);
	this._xfnRowFixedFreeGrid(objGridInfo);

// 	var objGrid = objGridInfo.grid;
// 	var sFitCfg = objGrid._perFitCfg;
// 
// 	if (!this._xfnIsEmpty(sFitCfg))
// 	{
// 		//trace("if _perFitCfg : "   + sFitCfg);
// 		var aFigCfg = sFitCfg.split("#");
// 
// 		objGrid["_rowfixInfo"] = {row 	  : parseInt(aFigCfg[0])};
// 		objGrid["_colfixInfo"] = {col 	  : aFigCfg[1].split(",")[0]
// 								, colSpan : aFigCfg[1].split(",")[1]
// 								, rowSpan : aFigCfg[1].split(",")[2]};
// 
// 		objGrid._xfnProcRowFixedGrid(objGrid);
// 		objGrid._xfnProcColFixedGrid(objGrid);
// 	}
}

/**
 * objGridInfo 의 그리드 정보로 그리드 행 고정을 실행한다.
 * @param {object} obj Grid
 * @return
 * @example
 */
_xExtendGrid._xfnColFixedGrid = function(objGridInfo)
{
	var sBandType;

	var objGrid  = objGridInfo.grid;
	var nRowIdx  = objGridInfo.row ;
	var nColIdx  = objGridInfo.cell;

		 if (nRowIdx == -1) sBandType = "Head";
	else if (nRowIdx == -2) sBandType = "Summary";
	else 					sBandType = "Body";

	if (nColIdx == -1)
	{
		trace("정보가 존재하지 않아 열고정 처리 할 수 없습니다.");
		return;
	}

	var nCol 	 = nexacro.toNumber(objGrid.getCellProperty(sBandType, nColIdx, "col"	 ));
	var nColSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nColIdx, "colspan"));
	var nRowSpan = nexacro.toNumber(objGrid.getCellProperty(sBandType, nColIdx, "rowspan"));

	objGrid["_colfixInfo"] = {col : nCol, colSpan : nColSpan, rowSpan : nRowSpan};

	this._xfnProcColFixedGrid(objGrid);
}

// 그리드에 설정된 _colfixInfo 값으로틀고정 처리한다
_xExtendGrid._xfnProcColFixedGrid = function(obj)
{
	var objFixInfo	= take.nvl(obj["_colfixInfo"],"");

    if (objFixInfo=="") return;
    
	var nCol 	 = objFixInfo.col;
	var nColSpan = objFixInfo.colSpan;
	var nRowSpan = objFixInfo.rowSpan;

	var nRealCol;
	var nRealColSpn;
	var nRealColEnd;
	var sOrgBandType;

	obj.set_enableredraw(false);
	sOrgBandType = obj.getFormatColProperty(0, "band");
	obj.setFormatColProperty(0, "band", "body");

	for (var i=0; i<obj.getCellCount("Head"); i++)
	{
		nRealCol 	= nexacro.toNumber(obj.getCellProperty("Head", i, "col"	   ));
		nRealColSpn = nexacro.toNumber(obj.getCellProperty("Head", i, "colspan"));
		nRealColEnd = nRealCol+nRealColSpn-1;

		if (nRealCol==nCol || nRealColEnd==nCol)
		{
			  if (nRealColSpn>1) nCol = nRealColEnd;
			else 				 nCol = nRealColEnd;
		}
	}

	var nLeft = 0;
	for (var i=0; i<obj.getCellCount("body"); i++)
 	{
		  if (parseInt(nCol) >= i)
			  nLeft += obj.getRealColSize(i);
		else  break;
	}

	obj.parent.resetScroll();
	var objParent = obj.parent;
	var objStaticCol = objParent["_staCol_"+obj.name];
	if(objStaticCol){
		if (obj.hscrollbar.trackbar.getOffsetWidth()>0)
			objStaticCol.setOffsetHeight(obj.getOffsetHeight()-15);
		else
			objStaticCol.setOffsetHeight(obj.getOffsetHeight()   );

		objStaticCol.setOffsetLeft(parseInt(obj.getOffsetLeft())+nLeft);

		if (nCol==-1)
			objStaticCol.set_visible(false);
		else
			objStaticCol.set_visible(true );
	}
	
	if(nCol > 0){
		obj.setFormatColProperty(nCol, "band", "left");
	} else {
		obj.setFormatColProperty(0, "band", sOrgBandType);
		
	}
	obj.set_enableredraw(true);
}

/**
 * objGridInfo 의 그리드 정보로 그리드 행 고정을 해제한다.
 * @param {object} objGridInfo
 * @return
 * @example
 */
_xExtendGrid._xfnColFixedFreeGrid = function(objGridInfo)
{
	var objGrid;
    var sFitCfg;
    var aFigCfg;
    
    objGrid  = objGridInfo.grid;
	if (this._xfnIsEmpty(objGrid)) return;

	sFitCfg = objGrid._perFitCfg;

    objGrid["_colfixInfo"] = {col : -1};
	this._xfnProcColFixedGrid(objGrid);
    
	if (!this._xfnIsEmpty(sFitCfg))
	{
		//trace("if _perFitCfg : "   + sFitCfg);
		aFigCfg = sFitCfg.split("#");

		objGrid["_colfixInfo"] = {col 	  : aFigCfg[1].split(",")[0]
								, colSpan : aFigCfg[1].split(",")[1]
								, rowSpan : aFigCfg[1].split(",")[2]};

		objGrid._xfnProcColFixedGrid(objGrid);
	}
};

/**
 * objGridInfo 의 그리드 정보로 그리드 행 고정을 실행한다.
 * @param {object} objGridInfo
 * @return
 * @example
 */
_xExtendGrid._xfnRowFixedGrid = function(objGridInfo)
{
 	var objGrid  = objGridInfo.grid;
		objGrid["_rowfixInfo"] = {row : objGridInfo.row};

	this._xfnProcRowFixedGrid(objGrid);
}

_xExtendGrid._xfnProcRowFixedGrid = function (obj)
{
    var objRowFixInfo = take.nvl(obj["_rowfixInfo"],"");
    
    if (objRowFixInfo=="") return;
    
	var nRowIdx = objRowFixInfo.row;

	var nColIdx = -1;
	var sExpr   = "";

	if (!this._xfnIsEmpty(obj["_colfixInfo"]))
		nColIdx = obj["_colfixInfo"].col;

	// 초기화 후 재적용
	obj.setFixedRow(-1);

	var objParent = obj.parent;
	var objStaticRow = objParent["_staRow_"+obj.name];
	if(objStaticRow){
		if (nRowIdx==-1)
		{
			objStaticRow.set_visible(false);
			objStaticRow.setOffsetTop(obj.getOffsetTop());
			objStaticRow.setOffsetWidth(obj.getOffsetWidth());
		}
		else
		{
			var objRect = obj.getCellRect(nRowIdx,0);
			var nHead	= parseInt(obj.getRealRowSize(-1));
			var nBody	= parseInt(obj.getRealRowSize( 0));
			var nCell	= (parseInt(objRect.top))-nHead;
				nCell   = Math.ceil(nCell/nBody);

			if (obj.vscrollbar.trackbar.getOffsetHeight()>0)
				objStaticRow.setOffsetWidth(obj.getOffsetWidth()-15);
			else
				objStaticRow.setOffsetWidth(obj.getOffsetWidth()	 );

			objStaticRow.set_visible(true );
			objStaticRow.setOffsetTop(parseInt(obj.getOffsetTop()) + nHead + parseInt(nBody*nCell) + nBody);
		}
	}

	obj.setFixedRow(nRowIdx);
}

/**
 * objGridInfo 의 그리드 정보로 그리드 행 고정을 해제한다.
 * @param {object} obj Grid
 * @return
 * @example
 */
_xExtendGrid._xfnRowFixedFreeGrid = function(objGridInfo)
{
	var objGrid;
    var sFitCfg;
    var aFigCfg;
    
    objGrid  = objGridInfo.grid;
	if (this._xfnIsEmpty(objGrid)) return;

	objGrid["_rowfixInfo"] = {row : -1};
 	this._xfnProcRowFixedGrid(objGrid);
    
    sFitCfg = objGrid._perFitCfg;

	if (!this._xfnIsEmpty(sFitCfg))
	{
		//trace("if _perFitCfg : "   + sFitCfg);
		aFigCfg = sFitCfg.split("#");
		objGrid["_rowfixInfo"] = {row 	  : parseInt(aFigCfg[0])};
		objGrid._xfnProcRowFixedGrid(objGrid);
	}
}

/***************************************************************************************************
 *	Grid Filter
 **************************************************************************************************/
 _xExtendGrid._xfnInitFltrGrid = function(objGrid)
{
    this._xfnExpandShowGridFilter(objGrid, false);
	
    objGrid["_filterInfo"]	= null;
	objGrid["_filterData"]	= null;
	
	this._xfnProcFilterGrid(objGrid);

	var sFilterCfg = objGrid._perFltCfg;
	if (!this._xfnIsEmpty(sFilterCfg))
	{
		var aFilterInfo = sFilterCfg.split("%")[0].split("#");
 		var aFilterData = sFilterCfg.split("%")[1].split("#");

 		var aFilterCellInfo = new Array(aFilterInfo.length);
 		var aFilterCellData = new Array(aFilterData.length);
 		for (var i=0; i<aFilterInfo.length; i++)
 		{
			if (this._xfnIsEmpty(aFilterInfo[i])) continue;

 			aFilterCellInfo[i] = { headcell : aFilterInfo[i].split(",")[0]
								 , cell		: aFilterInfo[i].split(",")[1]
								 , coltype	: aFilterInfo[i].split(",")[2]
								 , colid    : aFilterInfo[i].split(",")[3]};

 			if (this._xfnIsEmpty(aFilterData[i])) continue;

			var aSplitValue = aFilterData[i].split("@");

			var aSplitResult = new Array();
 			for (var j=0; j<aSplitValue.length; j++)
 			{
				aSplitResult.push({ operatorcode : aSplitValue[j].split(",")[0]
								  ,	operatorname : aSplitValue[j].split(",")[1]
								  ,	code 		 : aSplitValue[j].split(",")[2]
								  ,	name 		 : aSplitValue[j].split(",")[3]
								  });
 			}

			aFilterCellData[i] = aSplitResult;
 		}

 		objGrid["_filterInfo"] = aFilterCellInfo;
		objGrid["_filterData"] = aFilterCellData;

		this._xfnProcFilterGrid(objGrid);
		this._xfnSetGridFilterImage(objGrid);
	}
}

 _xExtendGrid._xfnPopupGridFltr = function (objGridInfo)
{
	var objForm = objGridInfo.form;
	var objGrid	= objGridInfo.grid;
	var objDs	= objGrid.getBindDataset();

	var arrGridFilterInfo = new Array();

	for (var i=0; i<objGrid.getCellCount("body"); i++)
	{
		/* head와 body의 column index가 다른경우 확인해야함 */
		var sCellText	= this._xfnTrim(objGrid.getCellProperty("body", i, "text"));		
		var nCellRow	= parseInt(this._xfnTrim(objGrid.getCellProperty("body", i, "row")));
		var nCellCol	= parseInt(this._xfnTrim(objGrid.getCellProperty("body", i, "col")));

		if (sCellText.toLowerCase().indexOf("bind:") < 0) continue;
			sCellText = sCellText.substr(5);

		var objColInfo= objDs.getColumnInfo(sCellText);

		if (this._xfnIsEmpty(objColInfo)) continue;

		var sColType	= objColInfo.type.toUpperCase();

		var nHeadCell	= this._xfnGetHeadCell(objGrid, nCellCol, nCellRow);
		
        if (sCellText=="CHK" && this._xfnIsPossibleGrid("checkbox"	)) continue;
        if ((sCellText==this["_tsNoStatusExpr"] && this._xfnIsPossibleGrid("no")) || (sCellText==this["_tsNoStatusExpr"] && this._xfnIsPossibleGrid("status"))) continue;
        
		if (nHeadCell < 0) continue;

		nHeadCell	= this._xfnNvl(nHeadCell, i);

		var strType = objGrid.getCellProperty("head", nHeadCell, "displaytype");
		//if (strType == "treeitemcontrol" || strType == "checkboxcontrol" || strType == "combocontrol") continue;
        if (strType == "treeitemcontrol" || strType == "combocontrol") continue;

		var objCellFilterInfo	= {
									  headcell	: nHeadCell
									, cell		: i
									, colid		: sCellText
									, coltype	: sColType
								  };

		arrGridFilterInfo[nHeadCell] = objCellFilterInfo;
	}

	if (arrGridFilterInfo.length > 0)
	{
		objGrid["_filterInfo"]	= arrGridFilterInfo;
		objGrid["_filterData"]	= new Array(arrGridFilterInfo.length);

		objGrid._xfnExpandShowGridFilter(objGrid, true);
	}
}
 
 /* 그리드 필터 제거 */ 
 _xExtendGrid._xfnPopupGridFltrRemove = function (objGridInfo)
 {
	 var objGrid = objGridInfo.grid;
	 this._xfnInitFltrGrid(objGrid);
 }

/* Head 정보 가져오기 */
_xExtendGrid._xfnGetHeadCell = function(obj, nBodyCol, nBodyRow)
{
	var nCell		= -1;
	var nHeadCnt	= obj.getCellCount("head");
	var nBodyCnt	= obj.getCellCount("body");
	var nHeadRowCnt = parseInt(obj.getCellProperty("head", nHeadCnt-1, "row"));
	var nBodyRowCnt = parseInt(obj.getCellProperty("body", nBodyCnt-1, "row"));

	for(var i=0; i<nHeadCnt; i++)
	{
		var nHeadCol = obj.getCellProperty("head", i, "col");
		var nHeadRow = obj.getCellProperty("head", i, "row");

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
			nCell	= i;
	}
	return nCell;
}

_xExtendGrid._xfnExpandShowGridFilter = function(obj, bShow)
{
	var nExpandSize	= 20, nCnt, nSize;
    var objRect;

    obj.set_enableevent(false);
    
	if (bShow == true)
	{
		var arrGridFilterInfo	= obj["_filterInfo"];

        if (this["_tIsFilter"] == true)
        {
            obj.set_enableevent(true);
            return;
        }
        
		if (this._xfnIsEmpty(arrGridFilterInfo))
        {
            obj.set_enableevent(true);
            return;
        }

        nCnt = arrGridFilterInfo.length;
        
		for (var i=0; i<nCnt; i++)
		{
			var objCellFilterInfo	= arrGridFilterInfo[i];
			if (this._xfnIsEmpty(objCellFilterInfo)) continue;

			var nHeadCell = objCellFilterInfo["headcell"];

			obj.setCellProperty("head", nHeadCell, "expandshow" , "show"		);
			obj.setCellProperty("head", nHeadCell, "expandsize" , nExpandSize	);
			obj.setCellProperty("head", nHeadCell, "expandimage", "theme://images/img_WF_Filter_S.png"		);	// default style 이 나타나지 않도록
            
            //nSize = obj.getRealColSize(nHeadCell);
            objRect = obj.getCellRect(-1,nHeadCell);
            
            if (objRect.hasOwnProperty("width"))
            {
                nSize = objRect.width;
            } else {
                nSize = obj.getRealColSize(nHeadCell);
            }
            
            if (nSize>0)
            {
                obj.setFormatColProperty(nHeadCell,"size",nSize+nExpandSize);
            }
            
			this._xfnSetCellFilterImage(obj, nHeadCell, "default");
		}
        
        this["_tIsFilter"] = true;
	}
	else
	{
        if (this["_tIsFilter"] == true)
        {
            var arrGridFilterInfo	= obj["_filterInfo"];

            if (this._xfnIsEmpty(arrGridFilterInfo))
            {
                obj.set_enableevent(true);
                return;
            }

            nCnt = arrGridFilterInfo.length;
            
            for (var i=0; i<nCnt; i++)
            {
                var objCellFilterInfo	= arrGridFilterInfo[i];
                if (this._xfnIsEmpty(objCellFilterInfo)) continue;

                var nHeadCell = objCellFilterInfo["headcell"];
            
                obj.setCellProperty("head", nHeadCell, "expandshow", "hide");
                obj._xfnSetCellFilterImage(obj, nHeadCell, "hide");
                
                objRect = obj.getCellRect(-1,nHeadCell);
            
                if (objRect.hasOwnProperty("width"))
                {
                    nSize = objRect.width;
                } else {
                    nSize = obj.getRealColSize(nHeadCell);
                }
                
                if (nSize>0)
                {
                    obj.setFormatColProperty(nHeadCell,"size",nSize-nExpandSize);
                }
            }
            
            this["_tIsFilter"] = false;
        }
	}
    
    obj.set_enableevent(true);
}

_xExtendGrid._xfnSetGridFilterImage = function(obj)
{
	var arrGridFilterData	= obj["_filterData"];
	var arrGridFilterInfo	= obj["_filterInfo"];

	if (this._xfnIsEmpty(arrGridFilterData)) return;

	for (var i=0; i<arrGridFilterData.length; i++)
	{
		if (this._xfnIsEmpty(arrGridFilterInfo[i])) continue;
		var arrCellFilterData = arrGridFilterData[i];

		if (!this._xfnIsEmpty(arrCellFilterData) && arrCellFilterData.length > 0)
			this._xfnSetCellFilterImage(obj, i, "setting");
		else
			this._xfnSetCellFilterImage(obj, i, "default");
	}
}

_xExtendGrid._xfnSetCellFilterImage = function(obj, nHeadCell, sType)
{
    //     if (sType == "setting") obj.setCellProperty("head", nHeadCell, "expandimage", "url('theme://images/img_WF_Filter_O.png') no-repeat right bottom #5f5f5f");
    //else if (sType == "default") obj.setCellProperty("head", nHeadCell, "expandimage", "url('theme://images/img_WF_Filter_S.png') no-repeat right bottom #5f5f5f");
    //else                         obj.setCellProperty("head", nHeadCell, "expandimage", "");
    if (sType == "setting")
    {
        obj.setCellProperty("head", nHeadCell, "expandimage", "url('theme://images/img_WF_Filter_O.png') no-repeat right bottom #5f5f5f");
    } else if(sType == "default") {
        obj.setCellProperty("head", nHeadCell, "expandimage", "url('theme://images/img_WF_Filter_S.png') no-repeat right bottom #5f5f5f");
    } else {
        obj.setCellProperty("head", nHeadCell, "expandimage", "");
    }
}

/**
 * 대상 그리드 필터 실행
 * @param {Grid} grid 대상 Grid Component
 */
_xExtendGrid._xfnProcFilterGrid = function(obj)
{
	var arrGridFilterData	= this["_filterData"];
	var arrGridFilterInfo	= this["_filterInfo"];

	var sGridFilterExpr = "";

	if (!this._xfnIsEmpty(arrGridFilterData) && !this._xfnIsEmpty(arrGridFilterInfo))
	{
		for (var i=0; i<arrGridFilterData.length; i++)
		{
			var arrCellFilterData	= arrGridFilterData[i];
			var objCellFilterInfo	= arrGridFilterInfo[i];

			if (this._xfnIsEmpty(arrCellFilterData)) continue;

			if (!this._xfnIsEmpty(sGridFilterExpr))
				 sGridFilterExpr	+= " && ";
				 sGridFilterExpr	+= "("   ;

			var sCellFilterExpr	= "";
			for (var j=0; j<arrCellFilterData.length; j++)
			{
				var objFilterData= arrCellFilterData[j];

				var sOperatorCd	 = objFilterData.operatorcode;
				var sOperatorNm  = objFilterData.operatorname;
				var sGridCode	 = objFilterData.code;
				var sGridName	 = (sGridCode!="empty" && !this._xfnIsEmpty(sGridCode)) ? objFilterData.code : objFilterData.name;

				if (!this._xfnIsEmpty(sCellFilterExpr))
					sCellFilterExpr	+= " && ";

				if (sOperatorCd=="check")
					sCellFilterExpr += this._xfnMakeFilterExpr(objCellFilterInfo["colid"], objCellFilterInfo["coltype"], (sGridCode=="empty" ? sGridCode : "notEqual"), sGridName);
				else
					sCellFilterExpr += this._xfnMakeFilterExpr(objCellFilterInfo["colid"], objCellFilterInfo["coltype"], sOperatorCd, sOperatorNm);
			}

			sGridFilterExpr	+= sCellFilterExpr;
			sGridFilterExpr	+= ")";
		}
	}

	var objDs = this.getBindDataset();
 		objDs.filter(sGridFilterExpr);	// 필터 적용
}

/**
 * 필터 조건문 문자열을 반환
 * @param {string} sColId 필터 대상 데이터셋 컬럼명
 * @param {string} sColType 필터 대상 데이터셋 컬럼형
 * @param {string} strOperator 연산자
 * @param {*} value 피연산자 값
 * @return
 * @example
 * @memberOf AP.Util
 */
_xExtendGrid._xfnMakeFilterExpr = function(sColId, sColType, sOperatorCd, sOperatorNm)
{
	var sFilterExpr	= "";

// 	switch (sOperatorCd)
//  	{
// 		case "empty" 				: sFilterExpr	+= "!this.parent._xfnIsEmpty(" + sColId + ")"; 	  	  			  						  break;
//  		case "equal" 				: sFilterExpr	+= sColId + "==" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
//  		case "notEqual" 			: sFilterExpr	+= sColId + "!=" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
//  		case "greaterThan" 			: sFilterExpr	+= sColId + ">"  + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
//  		case "greaterThanOrEqual" 	: sFilterExpr	+= sColId + ">=" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
// 		case "lessThan" 			: sFilterExpr	+= sColId + "<"  + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
// 		case "lessThanOrEqual" 		: sFilterExpr	+= sColId + "<=" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
// 		case "like" 				: sFilterExpr	+= "new String("+ sColId + ").indexOf('" + sOperatorNm + "') != -1"; break;
// 		case "notLike" 				: sFilterExpr	+= "new String("+ sColId + ").indexOf('" + sOperatorNm + "') == -1"; break;
// 	}

    switch (sOperatorCd)
 	{
		case "empty" 				: sFilterExpr	+= "!this.parent._xfnIsEmpty(" + sColId + ")"; 	  	  			  						  break;
 		case "equal" 				: sFilterExpr	+= sColId + "==" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
 		case "notEqual" 			: sFilterExpr	+= sColId + "!=" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
 		case "greaterThan" 			: sFilterExpr	+= sColId + ">"  + sOperatorNm; break;
 		case "greaterThanOrEqual" 	: sFilterExpr	+= sColId + ">=" + sOperatorNm; break;
		case "lessThan" 			: sFilterExpr	+= sColId + "<"  + sOperatorNm; break;
		case "lessThanOrEqual" 		: sFilterExpr	+= sColId + "<=" + sOperatorNm; break;
		case "like" 				: sFilterExpr	+= "new String("+ sColId + ").indexOf('" + sOperatorNm + "') != -1"; break;
		case "notLike" 				: sFilterExpr	+= "new String("+ sColId + ").indexOf('" + sOperatorNm + "') == -1"; break;
	}
    
	return sFilterExpr;
}

 /***************************************************************************************************
  *	Grid 행추가
  **************************************************************************************************/

// 그리드 신규 행을 추가한다.
_xExtendGrid._xfnPopupGridAddrow = function (objGridInfo)
{
    var nRow = this.getBindDataset().addRow();
    var objForm = objGridInfo.form;
    objForm.fnAddRow(this.name, nRow);
}; 

/***************************************************************************************************
*	Grid 행삭제
**************************************************************************************************/

// 그리드 선택된 행을 삭제한다.
_xExtendGrid._xfnPopupGridDelrow = function (objGridInfo)
{
    var nRow   = this.getBindDataset().rowposition;
    var objForm = objGridInfo.form;
    this.getBindDataset().deleteRow(nRow);
    
    objForm.fnDelRow(this.name, nRow);
};

/***************************************************************************************************
*	Grid 행복사
**************************************************************************************************/

// 그리드 선택된 행을 복사한다.
_xExtendGrid._xfnPopupGridRowCopy = function(objGridInfo)
{
    var objDs, objGrid;
    var nRow, nNRow;
    
    if (take.nvl(objGridInfo,"")=="")
    {
        objGridInfo = {grid:this, row:this.getBindDataset().rowposition};
    }
    
    objGrid = take.nvl(objGridInfo.grid,this);
    objDs   = objGrid.getBindDataset();
    nRow    = take.nvl(objGridInfo.row,objDs.rowposition);
    nNRow   = objDs.insertRow(nRow+1);
    
    nNRow = objDs.copyRow(nNRow, objDs, nRow);
    
    take.debug("takegrid._xfnPopupGridRowCopy", "행복사 return : " + nNRow);
};

//////////////////////////////////////////////////////////////////////////////////////////////
// UTIL
//////////////////////////////////////////////////////////////////////////////////////////////
_xExtendGrid._toString = (Object.prototype.toString);

/**
 * _xfnIsString : value의 string 여부 반환
 * @ return  	: {boolean}
 * @ example 	: objGrid._xfnIsString("test string!!!") // true
 *   			  objGrid._xfnIsString(1234			   ) // false
 */
_xExtendGrid._xfnIsString = function(sValue)
{
	return typeof sValue === 'string';
};

/**
 * _xfnIsStringDate : yyyyMMdd 형태의 날짜 문자열 여부
 * @ param	 		: {string } value 확인할 value
 * @ return  		: {boolean}
 * @ example 		: var a = "20130501";
 *					  objGrid._xfnIsStringDate(a) // true
 */
_xExtendGrid._xfnIsStringDate = function(value)
{
	var stringWrapper = new String(value);

	value = stringWrapper.toString();

	if( value.length !== 8 ) return false;

	var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
	var iDate   = Math.floor(stringWrapper.slice(6,8), 10);

	if( iMonth < 1 || iMonth > 12 ) return false;

	if( iDate < 1 || iDate > this.getLastDayOfMonth(value) ) return false;

	return true;
};

/**
 * _xfnIsNumber : 문자열이 숫자형식에 맞는지 여부 체크
 * @ param	 	: {string } value 확인할 value
 * @ return  	: {boolean}
 * @ example 	: var value = "120101";
 *				  objGrid._xfnIsNumber(value);
 */
_xExtendGrid._xfnIsNumber = function (sNum)
{
	var c;
	var point_cnt = 0;
	var ret 	  = true;

	if (this._xfnIsEmpty(sNum)) return false;

	for (var i=0; i<sNum.length; i++)
	{
		c = sNum.charAt(i);
			 if (i == 0 && (c == "+" || c == "-"));
		else if (c >= "0" && c <= "9");
		else if (c == ".")
		{
			point_cnt++;
			if (point_cnt > 1)
			{
				ret = false;
				break;
			}
		}
		else
		{
			ret = false;
			break;
		}
	}

	return ret;
}

/**
 * _xfnIsNumber : 문자열이 숫자로만 구성되었는지 체크
 * @ param	 	: {string } 숫자로만 구성되었는지 체크할 문자열
 * @ return  	: {boolean} true 숫자로만 구성, false 숫자외 문자 포함
 * @ example 	: objGrid._xfnIsDigit(val);
 */
_xExtendGrid._xfnIsDigit = function(val)
{
	var lvNum;
	var lvFlag 	 = "No";
	var lvRetVal = false;
	var lvLength;
	var i;

	if (this._xfnIsEmpty(val) == true)
	{
		lvFlag 	 = "Yes";
		lvRetVal = false;
		return lvRetVal;
	}

	lvLength = val.length;

	if ((val.toString().split(".").length > 2) && lvFlag == "No")
	{
		lvFlag 	 = "Yes";
		lvRetVal = false;
	}

	if (lvFlag == "No")
	{
		for (i = 0; i < lvLength ; i++)
		{
			lvNum = val.substr(i,1);
			if (i == 0)
			{
				if(nexacro.isNumeric(lvNum) || (lvNum == "-" && val.substr(1, 1) != ".")
						|| (lvNum == "+"  && val.substr(1, 1) != "."))
				{
					lvRetVal = true;
				} else {
					lvRetVal = false;
					break;
				}
			} else {
				if(nexacro.isNumeric(lvNum) || (lvNum == "." && val.substr(i+1, 1).length != 0))
				{
					lvRetVal = true;
				} else {
					lvRetVal = false;
					break;
				}
			}
		}
	}

	return lvRetVal;
}

/**
 * _xfnIsObject : value의 Object 여부 반환
 * @ param	 	: {string }
 * @ return  	: {boolean} Object 여부
 * @ example 	: objGrid._xfnIsObject(new Object());
 */
_xExtendGrid._xfnIsObject = function(sValue)
{
	if (sValue === null || sValue === undefined) return false;

	// nexacro Component
	if (this._xfnIsXComponent(sValue    )) return false;

	// nexacro Object (e.g. Dataset)
	if (sValue instanceof nexacro.Object) return false;

	return typeof sValue == "object" && 'constructor' in sValue && sValue.constructor === Object;
}

/**
 * _xfnIsXComponent : nexacro component 여부 반환
 * @ param	 		: {string }
 * @ return  		: {boolean} nexacro component 여부
 * @ examle 		: objGrid._xfnIsXComponent(new Button());
 */
_xExtendGrid._xfnIsXComponent = function(sValue)
{
	if (sValue === null || sValue === undefined) return false;

	return sValue instanceof nexacro.Component;
}

/**
 * _xfnIsArray	: Array 여부 반환
 * @ param	 	: {*	  }
 * @ return  	: {boolean} Array 여부
 * @ example 	: objGrid._xfnIsArray(new Array());
 */
_xExtendGrid._xfnIsArray = Array.isArray ? function(sValue) { return Array.isArray(sValue); 						   }
										 : function(sValue) { return this._toString.call(sValue) === '[object Array]'; } ;

/**
 * _xfnIsUndefined	: undefined 여부 반환
 * @ param	 		: {*	  }
 * @ return  		: {boolean} undefined 여부
 * @ examle 		: var a;
 *					  objGrid._xfnIsUndefined(a);
 */
_xExtendGrid._xfnIsUndefined = function(sValue)
{
	return sValue === undefined;
},

_xExtendGrid._xfnIsFunction = function(value)
{
	return this._toString.call(value) === '[object Function]';
},

/**
 * _xfnIsExpandClick : Expand 버튼 영역을 클릭했는지 여부 반환
 * @ param	 		 : {Grid   } Target Grid
 *					 : {event  } nexacro.GridClickEventInfo
 * @ return  		 : {boolean} Expand영역 클릭 여부
 * @ examle
 */
_xExtendGrid._xfnIsExpandClick = function(obj, e)
{
	var nCell = e.cell;
	if (nCell < 0) return false;

	var nRow	= e.row;
	var strBand	= "body";

		 if (nRow == -1) strBand	= "head";
	else if (nRow == -2) strBand	= "summ";

	if (obj.getCellProperty(strBand, nCell, "expandshow") != "show") return false;

	var nCol		= obj.getCellProperty(strBand, nCell, "col");
	var objRect		= obj.getCellRect(nRow, nCell);
	var nRectLeft	= objRect.left;
	var nRectRight	= objRect.right;
	var nClickX		= e.canvasX;
	var nExpandSize	= 0;

	if (obj.getCellProperty(strBand, nCell, "expandshow") == "show")
		nExpandSize	= obj.getCellProperty(strBand, nCell, "expandsize");

	var scrollBar   	= obj.vscrollbar;
	var nVScroll   		=(scrollBar && scrollBar.visible ? scrollBar.getOffsetWidth() : 0);
	var nGridAvailRight	= obj.getOffsetWidth() - nVScroll;

	var nExpandLeft = -1;

	if (nRectLeft < nGridAvailRight)
	{
		if (nRectRight > nGridAvailRight)
			nRectRight = nGridAvailRight;

		nExpandLeft	= nRectLeft + ((nRectRight-nRectLeft) - nExpandSize);
	}

	  if (nClickX >= nExpandLeft)  return true ;
	else 						   return false;
},

/**
 * _xfnAppendComma : Number에 컴마를 추가
 * @ param	 	   : {string} Target String
 *				   : {string} 출력시 소숫점 이하의 자릿수 (반올림 함)
 * @ return  	   : {string} (Comma 를 포함하고 있는 숫자)
 * @ examle
 */
_xExtendGrid._xfnAppendComma = function(nNumber, nDetail)
{
	if ( this._xfnIsEmpty(nNumber)) return "";
	if (!this._xfnIsEmpty(nDetail)) nDetail = 0;

	nNumber				= parseFloat(nNumber);
	nNumber				= Math.round(nNumber, nDetail);

	var strNumber		= new String(nNumber);
	var arrNumber		= strNumber.split(".");
	var strFormatNum	= "";
	var j = 0;

	for (var i=arrNumber[0].length-1; i>=0; i--)
	{
		if (i != strNumber.length && j == 3)
		{
			strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
			j = 0;
		}
		else
		{
			strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
		}
		j++;
	}

	if (arrNumber.length > 1)	strFormatNum = strFormatNum + "." + arrNumber[1];
	return strFormatNum;
},

/**
 * _xfnTrim 	: 공백제거
 * @ param	    : {string} Target String
 * @ return     : {string}
 * @ examle
 */
_xExtendGrid._xfnTrim = function(sValue)
{
	if (sValue == null							   ) return "";
	if (new String(sValue).valueOf() == "undefined") return "";
	if (new String(sValue) == null				   ) return "";

	return (new String(sValue)).replace(/^\s+|\s+$/g, '');
}

/**
 * _xfnIsEmpty 	: 빈값 여부 반환
 * @ param	    : {string } Target String
 * @ return     : {boolean}
 * @ examle
 */
_xExtendGrid._xfnIsEmpty = function(sValue)
{
	sValue = this._xfnTrim(sValue);

	if (sValue == null) return true;
	if (new String(sValue).valueOf() == "null"	   ) return true;
	if (new String(sValue).valueOf() == "undefined") return true;

	// String, Array ==> length == 0
	if (this._xfnIsString(sValue) || this._xfnIsArray(sValue))
		return sValue.length == 0 ? true : false;
	else if (this._xfnIsObject(sValue))
	{
		for (var p in sValue)
			 if (sValue.hasOwnProperty(p)) return false;

		return true;
	}

	return false;
}

// _xExtendForm._xfnIsEmpty = function(sValue)
// {
// 	return _xExtendGrid._xfnIsEmpty(sValue);
// }

_xExtendGrid._xfnNvl = function(sValue, sValue2)
{
	return this._xfnIsEmpty(sValue) ? sValue2 : sValue;
}

/**
 * _xfnNullToEmpty 	: 빈값이면 empty String으로 대체
 * @ param	    	: {string } Target String
 * @ return     	: {string}
 * @ examle
 */
_xExtendGrid._xfnNullToEmpty = function(value)
{
	return this._xfnNvl(value, "");
}

/**
 * _xfnIsEmptyTrim 	: 좌우 공백을 제거한 값이 빈값인지 체크
 * @ param	    	: {string } Target String
 * @ return     	: {boolean}
 * @ examle
 */
_xExtendGrid._xfnIsEmptyTrim = function(value)
{
	return this._xfnIsEmpty(this._xfnTrim(value));
}

/**
 * _xfnDecode 		: Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능
 * @ param	    	:
 * @ return     	:
 * @ examle
 */
_xExtendGrid._xfnDecode = function ()
{
	var varRtnValue = null;

	var arrArgument = this._xfnDecode.arguments;
	var varValue 	= arrArgument[0];
	var bIsDefault  = false;
	var nCount 		= 0;

	if ((arrArgument.length % 2) == 0)
	{
		nCount = arrArgument.length - 1;
		bIsDefault = true;
	}
	else
	{
		nCount = arrArgument.length;
		bIsDefault = false;
	}

	for (var i = 1; i < nCount; i += 2)
	{
		if (varValue == arrArgument[i])
		{
			varRtnValue = arrArgument[i + 1];
			i = nCount;
		}
	}

	if (varRtnValue == null && bIsDefault)
		varRtnValue = arrArgument[arrArgument.length - 1];

	return varRtnValue;
};

/**
 * _xfnLookup 	: 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
 * @ param	   	: {object } Target component
 *				: {string } name 찾을 대상 이름
 * @ return    	: {object }
 * @ examle
 */
_xExtendGrid._xfnLookup = function(p, name)
{
	var o;
	while (p)
	{
		o = p.components;
		if (o && o[name]) return o[name];

		o = p.objects;
		if (o && o[name]) return o[name];

		p = p.parent;
	}
	return null;
}

/**
 * _xfnGetDate 	: 현재일자 반환
 * @ param	   	: {String} [sGubn] - date/null : 일자, time : 일자+시간, milli : Milliseconds
 * @ return    	: {String} 8자리 날짜(YYYYMMMDD) 문자열
 * @ examle
 */
_xExtendGrid._xfnGetDate = function(sGubn)
{
	if (this._xfnIsEmpty(sGubn)) sGubn = "date";

	var d = new Date();
	var s;

	switch (sGubn)
	{
		case "date" :

			s = d.getFullYear()
			  + ((d.getMonth() + 1) + "").padLeft(2, '0')
			  + (d.getDate()   + ""		).padLeft(2, '0');

		break;

		case "time" :

			s = d.getFullYear()
			  + ((d.getMonth() 	+ 1) + "").padLeft(2, '0')
			  + (d.getDate() 	+ ""	 ).padLeft(2, '0')
			  + (d.getHours() 	+ ""	 ).padLeft(2, '0')
			  + (d.getMinutes() + ""	 ).padLeft(2, '0')
			  + (d.getSeconds() + ""	 ).padLeft(2, '0');

		break;

		case "milli" :

			s = d.getFullYear()
			  + ((d.getMonth() 		 + 1) + "").padLeft(2, '0')
			  + (d.getDate() 		 + ""	  ).padLeft(2, '0')
			  + (d.getHours() 		 + ""	  ).padLeft(2, '0')
			  + (d.getMinutes() 	 + ""	  ).padLeft(2, '0')
			  + (d.getSeconds() 	 + ""	  ).padLeft(2, '0')
			  + (d.getMilliseconds() + ""	  ).padLeft(3, '0');

		break;
	}

	return (s);
};

// alphabet character code
// charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
_xExtendGrid._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102]

/**
 * _xfnGetUniqueId 	: 유일한 ID 를 반환
 * @ param	   		: {String} Target String
 *				  	  {String} separator id 생성시 구분용 문자(default: '-' )
 * @ return    		: {String}
 * @ examle			: objGrid._xfnGetUniqueId("Button_", "_")
 */
_xExtendGrid._xfnGetUniqueId = function(prefix, separator)
{
	if (this._xfnIsEmpty(prefix	  )) prefix = "";
	if (this._xfnIsEmpty(separator))
		separator = 45;
	else
		separator = separator.charCodeAt(0);

	var pThis 	 = this,
		charcode = this._ALPHA_CHAR_CODES,
		math 	 = Math;

	var seq 	 = 0;
	var seq0;
	var tmpArray = new Array(36);
	var idx = -1;

	while (seq < 8)
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	seq = 0;
	while (seq < 3)
	{
		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
		seq0 = 0;
		while (seq0 < 4)
		{
			tmpArray[++idx] = charcode[math.random() * 16  | 0];
			seq0++;
		}
		seq++;
	}
	tmpArray[++idx] = separator; //45 => "-", 95=> "_"

	var tmpStr = (new Date()).getTime();
		tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
	seq = 0;
	while (seq < 8)
	{
		tmpArray[++idx] = tmpStr.charCodeAt(seq);
		seq++;
	}
	seq = 0;
	while (seq < 4)
	{
		tmpArray[++idx] = charcode[math.random() * 16 | 0];
		seq++;
	}
	return prefix + String.fromCharCode.apply(null, tmpArray);
};

// 사용자 정의 속성에 추가할 prefix 명
_xExtendGrid._userPropertyPrefix = _xExtendGrid._xfnGetUniqueId();

/**
 * _xfnSetUserProperty 	: 주어진 nexacro Component, object 에 사용자 속성을 추가
 * @ param	   			: {*     } Target nexacro Component, object
 *				  	  	  {String} name 사용자 정의 속성 명
 * @ return    			: {*	 } 속성 값
 * @ examle				: objGrid._xfnSetUserProperty("Button_", "_")
 */
 _xExtendGrid._xfnSetUserProperty = function(oTarget, sName, sValue)
 {
	 var propName  = this._userPropertyPrefix;
		 propName += "_" + sName;

	 oTarget[propName] = sValue;
 }

/**
 * _xfnGetUserProperty 	: 주어진 nexacro Component, object 에서 사용자 정의 속성값을 얻어온다
 * @ param	   		: {String} Target nexacro Component, object
 *				  	  {String} name 사용자 정의 속성 명
 * @ return    		: {*	 } 속성 값
 * @ examle
 */
 _xExtendGrid._xfnGetUserProperty = function(oTarget, sName)
 {
	 var propName = this._userPropertyPrefix;
		 propName += "_" + sName;

	 return oTarget[propName];
 }

//////////////////////////////////////////////////////////////////////////////////////////////

/**
 * _xfnHeadCheckSelectAll : 그리드 헤드 클릭이벤트 내부함수 (헤드클릭시 체크)
 * @ param	   		: {object} Target Grid
 *				  	  {nIdex } Cell  Index
 * @ return
 * @ examle
 */
 _xExtendGrid._xfnHeadCheckSelectAll = function (objGrid, nCellIdx)
{
	if (objGrid.readonly == true) return;

	var sType,sChk,sChkVal ;
	var nHeadCell = nCellIdx;
	var nBodyCell ;

	  if (objGrid.getCellCount("body") != objGrid.getCellCount("head"))
		  nBodyCell = parseInt(objGrid.getCellProperty("head", nHeadCell, "col"));
	else
		  nBodyCell = nCellIdx;

	sChkVal = objGrid.getCellProperty("body", nBodyCell, "text");
	sChkVal = sChkVal.toString().replace("bind:", "");
	sType   = objGrid.getCellProperty("head", nHeadCell, "displaytype");

	if (sType != "checkboxcontrol")
		return;

	// Head 셋팅
	var sVal = objGrid.getCellProperty("head", nHeadCell, "text");

	if (sVal == "1")
	{
		sChk="0";
		objGrid.setCellProperty("head", nHeadCell, "text", sChk);
	}
	else
	{
		sChk="1";
		objGrid.setCellProperty("head", nHeadCell, "text", sChk);
	}

	var oDsObj = objGrid.getBindDataset();
	if (oDsObj.getRowCount() < 1) return;

	// Body셋팅
    
	oDsObj.set_enableevent(false);    
    oDsObj.set_updatecontrol(false);
    
	for (var i=0 ; i<oDsObj.rowcount; i++)
	{
		 oDsObj.setColumn(i, sChkVal, sChk=="1" ? sChk : (oDsObj.getOrgColumn(i, sChkVal)=="1"
														? sChk : oDsObj.getOrgColumn(i, sChkVal)));
	}
    
    oDsObj.set_updatecontrol(true);
	oDsObj.set_enableevent(true);
};

// _xExtendForm.gfnHeadCheckSelectAll = function (objGrid, nCellIdx)
// {
// 	objGrid._xfnHeadCheckSelectAll(objGrid, nCellIdx);
// }

/**
 * _xfnGridGetBodyCellIndex : head cell에 match되는 body cell을 얻어온다
 * @ param {Object} 	    : target Grid Component
 * @ param {Number} 	    : eadCellIndex head cell index
 * @ return{Number} 	    : body cell index
 * @ examle
 */
_xExtendGrid._xfnGridGetBodyCellIndex = function(grid, headCellIndex, useColspan)
{
	if (this._xfnIsEmpty(useColspan)) useColspan = false;

	// Max Head Row Index
	var maxHeadRow = 0;

	for (var i=0, len=grid.getCellCount("head"); i<len; i++)
	{
		var row = grid.getCellProperty("head", i, "row");
		if (maxHeadRow < row)
			maxHeadRow = row;
	}

	// Max Body Row Index
	var maxBodyRow = 0;
	for (var i=0, len=grid.getCellCount("body"); i<len; i++)
	{
		var row = grid.getCellProperty("body", i, "row");
		if (maxBodyRow < row)
			maxBodyRow = row;
	}

	if (maxHeadRow == 0 && maxBodyRow == 0)
		useColspan = true;

	// Body Row 가 1개 이상일 경우
	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
	var cellIndex = -1;
	var sRow 	  = -1;
	var nRow 	  = parseInt(grid.getCellProperty("head", headCellIndex, "row"	  ));
	var nCol 	  = parseInt(grid.getCellProperty("head", headCellIndex, "col"	  ));
	var nColspan  = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));

	if (maxHeadRow > maxBodyRow)
	{
		sRow = nRow - (maxHeadRow - maxBodyRow);
		sRow = (sRow < 0 ? 0 : sRow);
	}
	else
	{
		sRow = nRow;
	}

	var cRow, cCol, cColspan, cRowspan;
	for (var i=0, len=grid.getCellCount("body"); i<len; i++)
	{
		cRow 	 = parseInt(grid.getCellProperty("body", i, "row"	 ));
		cCol 	 = parseInt(grid.getCellProperty("body", i, "col"	 ));
		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));
		cRowspan = parseInt(grid.getCellProperty("body", i, "rowspan"));

		if (cRowspan > 1)
		{
			if (useColspan)
			{
				if (sRow >= cRow && nCol <= cCol && cCol < (nCol + nColspan))
				{
					cellIndex = i;
					break;
				}
			}
			else
			{
				if (sRow >= cRow && nCol == cCol && nColspan == cColspan)
				{
					cellIndex = i;
					break;
				}
			}
		}
		else
		{
			if (useColspan)
			{
				if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan))
				{
					cellIndex = i;
					break;
				}
			}
			else
			{
				if (sRow == cRow && nCol == cCol && nColspan == cColspan)
				{
					cellIndex = i;
					break;
				}
			}
		}
	}

	return cellIndex;
};

/**
 * @class body cell index로 binding 된 컬럼명을 얻어온다.
 * @param {Object}  grid 대상 Grid Component
 * @param {Number} eadCellIndex head cell index
 * @return{String} column id
 * @example
 * this._xfnGridGetBindColumnNameByIndex(obj, e.cell);
 */
_xExtendGrid._xfnGridGetBindColumnNameByIndex = function(grid, index)
{
	var text 	 = "";
	var columnid = "";
	var subCell  = grid.getCellProperty("body", index, "subcell");

	if (subCell > 0)
	{
		text = grid.getSubCellProperty("body", index, 0, "text");
	}
	else
	{
		text = grid.getCellProperty("body", index, "text");
	}

	if (!this._xfnIsEmpty(text))
	{
		if (text.search(/^BIND\(/) > -1)
		{
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		}
		else if (text.search(/^bind:/) > -1)
		{
			columnid = text.replace(/^bind:/, "");
		}
	}
	return columnid;
};


/**
 * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
 * @param  {Grid  } grid 대상 Grid Component
 * @param  {string} band  얻고자 하는 cell 의 band (head/body/summ);
 * @param  {number} index 얻고자 하는 cell 의 index
 * @return {object} cell object
 */
_xExtendGrid._xfnGridGetGridCellObject = function(grid, band, index)
{
	// 내부속성을 통해 얻어온다.
	var refCell;
	var format = grid._curFormat;
	if (format)
	{
		if (band == "head")
		{
			refCell = format._headcells[index];
		}
		else if (band == "body")
		{
			refCell = format._bodycells[index];
		}
		else if (band == "summ" || band == "summary")
		{
			refCell = format._summcells[index];
		}
	}
	return refCell;
};

/**
 * 왼쪽 채우기 함수
 * @param  {string} sValue  대상문자열
 * @param  {string} nLength 자리수
 * @param  {string} Char    채울 문자
 * @return {string} 왼쪽이 채워진 문자열
 * @example
 * _xfnLpad(sValue, nLength, Char);
 */
_xExtendGrid._xfnLpad = function(sValue, nLength, sChar)
{
	if (this._xfnIsEmpty(sValue)) sValue = "";

	var strRetVal 	= new String(sValue);
	var strChar 	= "";
	var nIteration 	= nLength - this._xfnGetLengB(strRetVal);

	for (var i=0; i<nIteration; i++)
		 strChar = sChar + strChar;

	return (strChar + strRetVal);
};

/**
 * 오른쪽 채우기 함수
 * @param {string} sValue 	- 대상문자열
 * @param {string} nLength 	- 자리수
 * @param {string} Char 		- 채울 문자
 * @return {string} 오른쪽이 채워진 문자열
 * @example
 * AP.Util.rpad(sValue, nLength, Char);

 */
_xExtendGrid._xfnRpad = function(sValue, nLength, Char)
{
	if (this._xfnIsEmpty(sValue)) sValue = "";

	var strRetVal  = new String(sValue);
	var nIteration = nLength - this._xfnGetLengB(strRetVal);

	for (var i = 0; i < nIteration; i++)
		 strRetVal = strRetVal + Char;

	return strRetVal;
}

/**
 * 문자열 길이를 Byte로 계산한다
 *			  	  문자,숫자,특수문자 : 1 로 Count
 * 			  	  그 외 한글/한자 : 2 로 count
 * @param {string} sValue 길이를 체크할 문자열
 * @return {Number} 문자열 길이 Byte 수
 * @memberOf AP.Util
 */
_xExtendGrid._xfnGetLengB = function(sValue)
{
	var vChkStr = sValue.toString();
	var vCnt    = 0;

	for (var i=0; i<vChkStr.length; i++)
	{
		  if (vChkStr.charCodeAt(i) > 127) 	vCnt += 2;
		else 								vCnt += 1;
	}

	return vCnt;
}

/***************************************************************************************************
 *	내부함수 Grid Copy & Paste
 **************************************************************************************************/
//  /**
//  * @class paste event
//  * @param {Object} obj- 대상그리드
//  * @param {Event}  e  - key down event
//  * @return N/A
//  * @example
//  * this._xfnProcGridPasteEvent(obj, e);
// */
// _xExtendGrid._xfnProcGridPasteEvent = function (obj, e)
// {
// 	var sBrowser  = system.navigatorname;
// 	var sCopyData = this._xfnGirdGetPasteData(sBrowser);
// 
// 	if (this._xfnIsEmpty(sCopyData)) return;
// 
// 	var sColSeperator = "\t";
// 	var aRowData  	  = "";
// 
// 	if (sBrowser == "nexacro" || sBrowser =="IE")
// 	{
// 		aRowData = sCopyData.split("\r\n");
// 
// 		if (aRowData < 1)
// 		{
// 			e.stopPropagation();
// 			return;
// 		}
// 	}
// 	else
// 		aRowData = sCopyData.split(/[\n\f\r]/);
// 
// 	var nRowDataCount = aRowData.length - 1;
// 
// 	obj.set_enableevent(false);
// 	obj.set_enableredraw(false);
// 
// 	var objDs = obj.getBindDataset();
// 		objDs.set_enableevent(false);
// 
// 	var nGrdCellCount = obj.getCellCount("body");
// 	var nRowCount     = objDs.getRowCount();
// 
// 	var nStrRow = nexacro.toNumber(obj.selectstartrow);
// 	if (nStrRow == -9) return;
// 
// 	var nEndrow = nexacro.toNumber(obj.selectendrow);
// 	if (nEndrow == -9) return;
// 
// 	var nStrCol = 0;
// 	var nEndCol = 0;
// 
// 	if (obj.selecttype == "row" || obj.selecttype == "multirow")
// 	{
// 		nStrCol = 0;
// 		nEndCol = obj.getCellCount("body")-1;
// 	}
// 	else
// 	{
// 		nStrCol = nexacro.toNumber(obj.selectstartcol);
// 		nEndCol = nexacro.toNumber(obj.selectendcol  );
// 	}
// 
// 	var nCurrRow 	   = nStrRow;
// 	var nCellIdx 	   = nStrCol;
// 	var nMaxColumnCount= 0;
// 
// 	for (var i = 0; i < nRowDataCount; i++)
// 	{
// 		if (nRowCount <= nCurrRow)
// 			objDs.addRow();
// 
// 		var aColumnData 	= aRowData[i].split(sColSeperator);
// 		var nColumnLoopCount= nCellIdx + aColumnData.length;
// 
// 		if (nColumnLoopCount > nGrdCellCount)
// 			nColumnLoopCount = nGrdCellCount;
// 
// 		if (nMaxColumnCount < nColumnLoopCount)
// 			nMaxColumnCount = nColumnLoopCount;
// 
// 		var k = 0;
// 		for (var j = nCellIdx; j < nColumnLoopCount; j++)
// 		{
// 			var sColTemp = obj.getCellProperty("body", j, "text");
// 			var sColid;
// 
// 			if (this._xfnIsEmpty(sColTemp))
// 				sColid = sColTemp;
// 			else
// 				sColid = sColTemp.substr(5);
// 
// 			var sTempValue = aColumnData[k];
// 			if (!this._xfnIsEmpty(sTempValue))
// 				objDs.setColumn(nCurrRow, sColid, sTempValue);
// 			k++;
// 		}
// 		nCurrRow++;
// 	}
// 
// 	objDs.rowposition = nCurrRow;
// 
// 	nEndrow = nEndrow + nRowDataCount - 1;
// 	nEndCol = nMaxColumnCount - 1;
// 
// 	system.clearClipboard();
// 
// 	obj.set_enableredraw(true);
// 	obj.set_enableevent(true);
// 	objDs.set_enableevent(true);
// 
// 	obj.selectArea(nStrRow, nStrCol, nEndrow, nEndCol);
// 
// 	var areaInfo = {"startrow": nStrRow, "startcol": nStrCol, "endrow": nEndrow, "endcol": nEndCol};
// 	e.stopPropagation();
// }
// 
// /**
//  * @class copy event(nexacro, ie)
//  * @param {Object} obj- 대상그리드
//  * @param {Event}  e - key down event
//  * @return N/A
//  * @example
//  * this._xfnGridCopyEventForRuntime(obj, e);
// */
// _xExtendGrid._xfnGridCopyEventForRuntime = function (obj, e)
// {
// 	var nStrRow = nexacro.toNumber(obj.selectstartrow);
// 	if (nStrRow == -9) return;
// 
// 	var nEndRow = nexacro.toNumber(obj.selectendrow	 );
// 	if (nEndRow == -9) return;
// 
// 	var nStrCol = 0;
// 	var nEndCol = 0;
// 
// 	if (obj.selecttype == "row" || obj.selecttype == "multirow")
// 	{
// 		nStrCol = 0;
// 		nEndCol = obj.getCellCount("body")-1;
// 	}
// 	else
// 	{
// 		nStrCol = nexacro.toNumber(obj.selectstartcol);
// 		nEndCol = nexacro.toNumber(obj.selectendcol  );
// 	}
// 
// 	var sColSeperator = "\t";
// 	var sCopyData     = "";
// 
// 	for (var i=nStrRow; i<=nEndRow; i++)
// 	{
// 		for (var j=nStrCol; j<=nEndCol; j++)
// 		{
// 			var sValue = obj.getCellValue(i,j);
// 
// 			if (!this._xfnIsEmpty(sValue))
// 			{
// 				  if (j<nEndCol) sCopyData += sValue + sColSeperator;
// 				else             sCopyData += sValue;
// 			}
// 		}
// 
// 		if (i<obj.selectendrow) sCopyData += "\r\n";
// 	}
// 
// 	sCopyData += "\r\n";
// 
// 	system.clearClipboard();
// 	system.setClipboard("CF_TEXT", sCopyData);
// 
// 	var areaInfo = {"startrow": nStrRow, "startcol": nStrCol, "endrow": nEndRow, "endcol": nEndCol};
// };
// 
// /**
//  * @class copy event(chrome)
//  * @param {Object} obj- 대상그리드
//  * @param {Event}  e - key down event
//  * @return N/A
//  * @example
//  * this._xfnGridCopyEventForChrome(obj, e);
// */
// _xExtendGrid._xfnGridCopyEventForChrome = function (obj, e)
// {
// 	var nStrRow = nexacro.toNumber(obj.selectstartrow);
// 	if (nStrRow == -9) return;
// 
// 	var sEndRow = nexacro.toNumber(obj.selectendrow  );
// 	if (sEndRow == -9) return;
// 
// 	var nStrCol = 0;
// 	var nEndCol = 0;
// 
// 	if (obj.selecttype == "row" || obj.selecttype == "multirow")
// 	{
// 		nStrCol = 0;
// 		nEndCol = obj.getCellCount("body")-1;
// 	}
// 	else
// 	{
// 		nStrCol = nexacro.toNumber(obj.selectstartcol);
// 		nEndCol = nexacro.toNumber(obj.selectendcol  );
// 	}
// 
// 	var sColSeperator = "\t";
// 	var sCopyData     = "";
// 
// 	for (var i=nStrRow; i<= sEndRow; i++)
// 	{
// 		for (var j=nStrCol; j<=nEndCol; j++)
// 		{
// 			var sValue = obj.getCellValue(i,j);
// 
// 			if (!this._xfnIsEmpty(sValue))
// 			{
// 				  if (j<nEndCol) sCopyData += sValue + sColSeperator;
// 				else             sCopyData += sValue;
// 			}
// 		}
// 
// 		if (i<obj.selectendrow) sCopyData += "\r\n";
// 	}
// 
// 	sCopyData += "\r\n";
// 
// 	var oTarget = this._xfnCreateTextarea(sCopyData);
// 	this.tragetGrid = obj;
// 	this.tragetGrid["ta"] = oTarget;
// 
// 	var areaInfo = {"startrow": nStrRow, "startcol": nStrCol, "endrow": sEndRow, "endcol": nEndCol};
// 
// 	e.stopPropagation();
// };
// 
// /**
//  * @class paste 데이터생성
//  * @param {String} browser - 브라우저
//  * @return paste데이터
//  * @example
//  * this._xfnGirdGetPasteData("nexacro");
// */
// _xExtendGrid._xfnGirdGetPasteData = function (sBrowser)
// {
// 	var sCopyData = "";
// 	if (sBrowser == "nexacro" || sBrowser == "IE")
// 	{
// 		sCopyData = system.getClipboard("CF_TEXT");
// 		sCopyData = new String(sCopyData);
// 	}
// 	else
// 	{
// 		var oTarget = this.tragetGrid["ta"];
// 		if (!oTarget) return;
// 
// 		sCopyData = oTarget.value;
// 		document.body.removeChild(oTarget);
// 
// 		//this.tragetGrid["ta"] = undefined;
// 	}
// 	return sCopyData;
// };

_xExtendGrid._xfnPasteData = function (obj, sPasteData, objDataset, nStartrow, nEndrow, nStartCol, nEndCol)
{
    var arrText, arrText2;
    var sColumnId, sColNm, sCellEditType, sDrmTxt = "[경고! ", sText;
    var bRtn;
    var nCnt, nRowCnt, nBodyCnt, nLoopCnt, nArrIdx, nIdx;
    
    //210224 정해원 그리드 붙여넣기 수정
	objDataset.set_enableevent(false);
	
	//DRM 걸린 문서 복사할 때
	if(sPasteData.indexOf(sDrmTxt) > -1)
    {
		
		sColNm = obj.getCellProperty("body", nStartCol, "text" )
		
		if (take.nvl(sColNm, "")=="")
		{
			trace("바인드된 데이터셋이 없습니다.");
			//210224 정해원 그리드 붙여넣기 수정
			objDataset.set_enableevent(true);
			return;
		}
		
		sColNm = sColNm.replace("bind:","");
		bRtn = objDataset.setColumn(nStartrow, sColNm, sPasteData);
		
		trace("sPasteData --> " + sPasteData);
		//210224 정해원 그리드 붙여넣기 수정
		objDataset.set_enableevent(true);
		return;
	}
    
	arrText = new Array();
    
	arrText = sPasteData.split("\n");//행 별로 배열 만들기
    
	arrText2 = new Array();

	if(take.nvl(sPasteData.substr(sPasteData.lastIndexOf("\n")+1),"")=="")
    {
		arrText.pop();
	}
    
	nCnt = arrText.length;
    
	nRowCnt = objDataset.getRowCount();
	nBodyCnt = obj.getCellCount("body");
    
	for(var i=0; i<nCnt; i++)
	{
		arrText2 = arrText[i].split("\t");
		//Dataset Row와 붙여넣기하는 Data Row가 불일치하는경우
		if(nRowCnt <= nStartrow)
        {
			objDataset.addRow();
		}
        
		nLoopCnt = nStartCol + arrText2.length - 1;
        
		if(nBodyCnt < nLoopCnt) nLoopCnt = nBodyCnt;
        
		nArrIdx=0;
        
		for(var j=nStartCol; j<=nLoopCnt; j++)
        {
            
            sColumnId = obj.getCellProperty("body", j, "text");
            sColumnId = sColumnId.replace("bind:","");
            
            //해당 그리드 컬럼이 readonly라면 붙여넣기 안함
            sCellEditType =  obj.getCellProperty("body", j, "edittype");
            
            if (sCellEditType != "none" && sCellEditType != "readonly" && !this._xfnIsEmpty(sCellEditType))
            { 
                sText = take.nvl(arrText2[nArrIdx],"");
                
                if (sText!="")
                {
                    nIdx = sText.lastIndexOf("\n")
                    if (nIdx>=0)
                    {
                        sText = sText.substr(0,nIdx);
                    }
                }
                
                objDataset.setColumn(nStartrow, sColumnId, sText);
            } else {
                trace(nStartrow + "행 " + j + "컬럼(" + sColumnId +")은 " + sCellEditType + "(으)로 복사되지 않습니다.(readonly, none, Empty는 복사 안됨.)");
            }
            
			nArrIdx++;
        }
        
		nStartrow++;
	}
	
	//210224 정해원 그리드 붙여넣기 수정
	objDataset.set_enableevent(true);
};

/**
 * @class cell copy and paste (크롬용 텍스트에어리어생성)
 * @param {String} innerText - value
 * @return{Object} 텍스트에어리어 오브젝트
 * @example
 * this._createTextarea("텍스트");
*/
_xExtendGrid._xfnCreateTextarea = function(sInnerText)
{
	var oTarget;
    
    oTarget			  		= document.createElement('textarea');
    oTarget.id 			  	= "textAreabyCopyAndPaste";
    oTarget.style.position 	= 'absolute';
    oTarget.style.left 	  	= '-1000px';
    oTarget.style.top 	  	= document.body.scrollTop + 'px';
    oTarget.value 		  	= sInnerText;

	document.body.appendChild(oTarget);
	oTarget.select();

	return oTarget;
};

_xExtendGrid._xfnProcGridTotalEvent = function (obj, e)
{
	var objTarget   = this._xfnGetUserProperty(this, "_target");

	var objStatic   = objTarget.static;
	var sSelectType = obj.selecttype;

	var nStrRow = nexacro.toNumber(e.selectstartrow);
	if (nStrRow == -9) return;

	var nEndRow = nexacro.toNumber(e.selectendrow  );
	if (nEndRow == -9) return;

	var aStrRow = e.selectstartrow;
	var aEndRow = e.selectendrow;

	var nStrCol = 0;
	var nEndCol = 0;

	var aStrCol = new Array();
	var aEndCol = new Array();

	if (sSelectType == "row" || sSelectType == "multirow")
	{
		for (var i=0; i<aStrRow.length; i++)
		{
			aStrCol.push(0);
			aEndCol.push(obj.getCellCount("body")-1);
		}
	}
	else
	{
		aStrCol = obj.selectstartcol;
		aEndCol = obj.selectendcol  ;
	}

	var nTotalCnt 	  = 0;	// 선택된 Cell의 Count
	var nTotalSum	  = 0;
	var nTotalAvg	  = 0;
	var nTotalAvgCnt  = 0;

	for (var i=0; i<aStrRow.length; i++)
	{
		for (var j=aStrRow[i]; j<=aEndRow[i]; j++)
		{
			for (var l=aStrCol[i]; l<=aEndCol[i]; l++)
			{
				var sValue = obj.getCellValue(j,l);

				nTotalCnt++;

				var sCellType = obj.getCellProperty("body", l, "displaytype");
				var sCellText = obj.getCellProperty("body", l, "text"		);
				var sValue 	  = obj.getCellValue(j,l);

				if (sCellText.indexOf("bind:")<0) continue;

				if (sCellType == "date" 		 	|| sCellType == "treeitemcontrol"
				||  sCellType == "checkboxcontrol" 	|| sCellType == "combocontrol"	) continue;

				if (this._xfnIsNumber(sValue))
				{
					nTotalSum  +=  parseInt(sValue);
					nTotalAvgCnt++;
				}
			}
		}
	}

	if (nTotalSum > 0)
		nTotalAvg = nTotalSum / nTotalAvgCnt;

	var sTotInfo = "AVERAGE : " + this._xfnAppendComma(nTotalAvg) + " | "
				 + "TOTAL : "   + this._xfnAppendComma(nTotalSum) + " | "
				 + "COUNT : "   + this._xfnAppendComma(nTotalCnt) ;

	objStatic.set_text(sTotInfo);
};

/***************************************************************************************************
 *	Grid Sort
 **************************************************************************************************/
/**
 * @class 정렬가능여부리턴
 * @param {Object} grid - 대상그리드
 * @param {Number} headCellIndex - 대상셀INDEX
 * @param {Boolean}multiple - 멀티소트여부
 * @param {Number} sortStatus - 소트상태
 * @return{Boolean} sort 가능/불가능 여부
 * @example
 * this._xfnGridSetSortStatus(obj, e.cell, multiple);
 */
_xExtendGrid._xfnGridSetSortStatus = function(grid, headCellIndex, isMultiple, sortStatus, bodyCellIndex)
{
	// Head cell index 에 해당하는 body cell index
	if (this._xfnIsEmpty(bodyCellIndex))
		bodyCellIndex = this._xfnGridGetBodyCellIndex(grid, headCellIndex);

	if (bodyCellIndex < 0) return false;

	// body cell index 에 해당하는 바인드 컬럼명
	var columnName = this._xfnGridGetBindColumnNameByIndex(grid, bodyCellIndex);

	if (this._xfnIsEmpty(columnName))
		return false;

	if (this._xfnIsEmpty(isMultiple)) isMultiple = false;
	if (this._xfnIsEmpty(sortStatus)) sortStatus = -1;

	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
	if (this._xfnIsEmpty(grid["_sortInfo"]))
		grid["_sortInfo"] = {};

	// 정렬대상컬럼 (순서중요)
	if (this._xfnIsEmpty(grid["_sortItem"]))
	{
		grid["_sortItem"] = [];
	}

	var   sortInfos = grid["_sortInfo"]
		, sortItems = grid["_sortItem"]
		, sortInfo  = sortInfos[columnName]
		, sortItem , status;

	if (this._xfnIsEmpty(sortInfo))
	{
		var headText = grid.getCellText(-1, headCellIndex);

		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다.
		var refCell = this._xfnGridGetGridCellObject(grid, "head", headCellIndex);

		sortInfo = sortInfos[columnName] = {status: 0, text: headText, refCell : refCell};
	}

	// set sort status
	if (isMultiple)
	{
		status = sortInfo.status;

		if (sortStatus == -1)
		{
				 if (status == 0) sortInfo.status = 1;
			else if (status == 1) sortInfo.status = 2;
			else if (status == 2) sortInfo.status = (this.sortToggleCancel ? 0 : 1);
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
				if (p == columnName)
				{
					status = sortInfo.status;
					if (sortStatus == -1)
					{
							 if (status == 0) sortInfo.status = 1;
						else if (status == 1) sortInfo.status = 2;
						else if (status == 2) sortInfo.status = (this.sortToggleCancel ? 0 : 1);
					}
					else
					{
						sortInfo.status = sortStatus;
					}
				}
				else
				{
					sortInfo.status = 0;
				}

				// 초기화 하면서 sortItem 에서 컬럼제거
				if (sortInfo.status == 0)
				{
					for (var j=0, len2=sortItems.length; j<len2; j++)
					{
						if (sortItems[j] !== columnName)
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
		if (sortItems[i] == columnName)
		{
			bHasItem = true;
			break;
		}
	}

	if (!bHasItem)
		sortItems.push(columnName);

	return true;
};

// 소트를 실행한다.
_xExtendGrid._xfnProcSortGrid = function ()
{
	var sortInfo, sortItem,	columnName,	status,	cell, sortString = ""
	  ,	sortInfos = this["_sortInfo"]
	  ,	sortItems = this["_sortItem"];
    var nCnt;
    
	if (this._xfnIsEmpty(sortInfos) || this._xfnIsEmpty(sortItems)) return;

    nCnt = sortItems.length;
    
	// keystring 조합
	for (var i=0; i<nCnt; i++)
	{
		columnName = sortItems[i];
		sortInfo   = sortInfos[columnName];
		status 	   = sortInfo.status;
		cell 	   = sortInfo.refCell;

		// 컬럼삭제 등으로 제거될 수 있으므로 실제 Column 이 존재하는지
		// 확인하여 없으면 제거해 준다.
		if (this._xfnIsEmpty(cell) || this.getBindCellIndex("body", columnName) < 0)
		{
			// 컬럼정보제거
			sortItems.splice(i, 1);
			sortInfos[columnName] = null;
			delete sortInfos[columnName];

			i--;
		}
		else if (status > 0)
			sortString += (status == 1 ? "+" : "-") + columnName;
	}

	var ds 	= this.getBindDataset();

	// keystring 확인
	var curKeyString 	= ds.keystring;
	var groupKeyString 	= "";

	// 하나의 KEYSTRING 정보만 있다면
	if (curKeyString.length > 0 && curKeyString.indexOf(",") < 0)
	{
		var sIndex = curKeyString.indexOf("S:");
		var gIndex = curKeyString.indexOf("G:");

		// 둘중에 하나만 존재
		if (sIndex > -1)
			groupKeyString = "";
		else
		{
 			if (gIndex > -1)
 				groupKeyString = curKeyString;
		}
	}
	else
	{
		var temps = curKeyString.split(",");
		var temp;

		for (var i=0,len=temps.length; i<len; i++)
		{
			temp = temps[i];
			if (temp.length > 0 && temp.indexOf("S:") < 0)
			{
				if (temp.indexOf("G:") < 0)
					groupKeyString = "G:"+temp;
				else
					groupKeyString = temp;
			}
		}
	}

	if (sortString.length > 0)
	{
		var sortKeyString = "S:"+sortString;

		  if (groupKeyString.length > 0) ds.set_keystring(sortKeyString + "," + groupKeyString);
		else 							 ds.set_keystring(sortKeyString);

		this.sortKeyString = sortKeyString;
	}
	else
	{
		ds.set_keystring(groupKeyString);
		this.sortKeyString = "";
	}

	// 정렬표시
	var index, marker;
	for (var p in sortInfos)
	{
		if (sortInfos.hasOwnProperty(p))
		{
			sortInfo = sortInfos[p];
			cell 	 = sortInfo.refCell;
			if (cell)
			{
				index  = cell._cellidx;
				marker = this._xfnDecode(sortInfo.status, 1, this.constAscMark, 2, this.constDescMark, "");
				this.setCellProperty("head", index, "text", sortInfo.text + marker);
			}
		}
	}
    
    // 정렬 작업 이후 그리드 rowposition 0 으로 변경
    //ds.set_rowposition(0);
};

// 그리드의 Sort 정보를 제거하고 Grid/Dataset의 Sort 관련 정보를 초기화 한다
_xExtendGrid._xfnInitSortGrid = function (obj)
{
	this["_sortInfo"]  = {};
	this["_sortItem"]  = [];

	this._xfnRemoveSortMarkGrid(obj);

	// 데이터셋 초기화 (최초 사용자 설정 단계로 초기화한다.)
	var objBindDs = obj.getBindDataset();
		objBindDs.set_keystring(objBindDs._keystring);

	var sOrderCfg = obj._perOrdCfg;
	if (!this._xfnIsEmpty(sOrderCfg))
	{
		var aOrderCfg = sOrderCfg.split("#");

		var sortInfos = this["_sortInfo"];
		var sortItems = this["_sortItem"];
		var sortInfo  ;

		for (var i=0; i<aOrderCfg.length; i++)
		{
			var aOrderCfgInfo = aOrderCfg[i].split(",");
			var sColumn = aOrderCfgInfo[0];

			// 컬럼정보 셋팅
			sortItems.push(sColumn);
			sortInfos[sColumn] = {status  : aOrderCfgInfo[1]
							   ,  text    : aOrderCfgInfo[2]
							   ,  refCell : {_cellidx : aOrderCfgInfo[3]}};
		}

		this._xfnProcSortGrid();
	}
}

// 그리드 정렬 팝업을 띄운다.
_xExtendGrid._xfnPopupGridSort = function (objGridInfo)
{
	var objForm = objGridInfo.form;
	var objData	= {
						popupid			: "comSort"
					, 	sFormUrl		: "frm::com/comGridSort.xfdl"
					, 	sOverlayColor	: "#0000000f"
					,   bShowTitlebar	: true
					, 	oArgs			: {"gridInfo" : objGridInfo}
				  };

	this._xfnShowModal(objForm, objData, function(sPopId, bSort)
										 {
											if (sPopId != objData["popupid"]) return;

											var objGrid	= objGridInfo.grid;
											if (!objGrid._xfnIsEmpty(objGrid["_sortInfo"]))
												 objGrid._xfnProcSortGrid();
										 });
};

// 그리드 Header의 Sort 기호를 모두 제거한다.
_xExtendGrid._xfnRemoveSortMarkGrid = function (objGrid)
{
    var strHeadText;

	for (var i=0; i<objGrid.getCellCount("head"); i++)
	{
		if (objGrid.getCellProperty("head", i, "displaytype") != "checkboxcontrol")
		{
			strHeadText	= take.nvl(objGrid.getCellProperty("head", i, "text"),"");
			if (strHeadText!="")
			{
				objGrid.setCellProperty("head", i, "text", this._xfnRemoveSortMarkText(strHeadText));
			}
		}
	}
};

/**
 * 문자열에서 정렬문자를 제거한다.
 * @param
 * @return
 * @example
 */
_xExtendGrid._xfnRemoveSortMarkText = function (strHeadText)
{
	if (this._xfnIsEmpty(strHeadText)) return;

	return strHeadText.replace(this.constAscMark, "").replace(this.constDescMark, "");
};

/**
 * 문자열에 정렬문자를 추가한다.
 * @param
 * @return
 * @example
 */
_xExtendGrid._xfnApendSortMarkText = function(strHeadText, bAsc)
{
	return this._xfnRemoveSortMarkText(strHeadText) + ((bAsc == false) ? this.constDescMark : this.constAscMark);
};

/***************************************************************************************************
 *	Excel
 **************************************************************************************************/
 _xExtendGrid._xfnMakeExcelGridFormats = function(sExcelType)
{
	if (this._xfnIsEmpty(sExcelType))
		sExcelType = "XLS";

	var sCurFormat   = this.getCurFormatString();
	var objGridExcel = null;

	//var sNo 		 = "순번";	// 순번
    var sNo 		 = "No.";	// 순번
	var sStatus 	 = "상태";	// 상태

	if (sExcelType == "XLS")
	{
		objGridExcel = new Grid();
		objGridExcel.set_formats("<Formats>" + sCurFormat + "</Formats>");

		var oForm = this.parent;

		oForm.addChild("_grdExcelXls", objGridExcel);
		objGridExcel.show();

		var nCellCount = this.getCellCount("head");

		for (var i=nCellCount-1; i>=0; i--)
		{
			var strType = objGridExcel.getCellProperty("head", i, "displaytype"	);
			if (strType == "treeitemcontrol" || strType == "checkboxcontrol" || strType == "combocontrol")
				objGridExcel.deleteContentsCol(i);
			var strText = objGridExcel.getCellProperty("head", i, "text"		);
			if (strText == sStatus)
				objGridExcel.deleteContentsCol(i);

			if (this.getFormatColSize(i)==0)
				objGridExcel.deleteContentsCol(i);
		}
	}
	else
	{
		objGridExcel = new Grid();
		objGridExcel.set_formats("<Formats>" + this._orgFormat + "</Formats>");

		var nCellCount = this.getCellCount("head");

		for (var i=nCellCount-1; i>=0; i--)
		{
			var strType = objGridExcel.getCellProperty("head", i, "displaytype");
			if (strType == "treeitemcontrol" || strType == "checkboxcontrol" || strType == "combocontrol")
				objGridExcel.deleteContentsCol(i);
			var strText = objGridExcel.getCellProperty("head", i, "text"	   );
			if (strText == sStatus)
				objGridExcel.deleteContentsCol(i);
		}

		var oForm = this.parent;

		oForm.addChild("_grdExcelOrg", objGridExcel);
		objGridExcel.show();
	}

	objGridExcel.set_binddataset(this.getBindDataset());

	return objGridExcel;
}

/***************************************************************************************************
 *	Popup
 **************************************************************************************************/
// _xExtendGrid.gfnShowModal  = function(oData, fnCallback)
// {
// 	var objForm = this._xfnGetActiveForm();
// 	this._xfnShowModal(objForm, oData, fnCallback);
// }
// 
// _xExtendForm.gfnShowModal  = function(oData, fnCallback)
// {
// 	var objForm = this._xfnGetActiveForm();
// 	_xExtendGrid._xfnShowModal(objForm, oData, fnCallback);
// }

_xExtendGrid._xfnShowModal = function(objForm, oData, fnCallback)
{
	var objApp 			= nexacro.getApplication();

	var pThis			= objForm;
	var strOrgPopupId	= oData.popupid;
	var strPopupId		= oData.popupid + "_" + Math.random();
	var bShowTitlebar	= this._xfnNvl(oData.bShowTitlebar , true );			//showtitlebar
	var bAutoSize		= this._xfnNvl(oData.bAutoSize	   , false);			//autosize
	var bResizable		= this._xfnNvl(oData.bResizable	   , false);			//resize
	var bShowStatusbar	= this._xfnNvl(oData.bShowStatusbar, false);			//statusbar
	var sOpenAlign		= this._xfnNvl(oData.sOpenAlign	   , "center middle");
	var sBackground		= this._xfnNvl(oData.sBackground   , ""	  );
	var sOverlayColor	= this._xfnNvl(oData.sOverlayColor , ""	  );
	var sTitleText		= this._xfnNvl(oData.sTitleText	   , ""	  );

	var nTop			= this._xfnNvl(oData.nTop	   	   , -1	  );
	var nLeft			= this._xfnNvl(oData.nLeft	   	   , -1	  );
	var nWidth			= this._xfnNvl(oData.nWidth	   	   , -1	  );
	var nHeight			= this._xfnNvl(oData.nHeight   	   , -1	  );

	var sOpenalign 	    = "";

	if (nLeft == -1 && nTop == -1)
	{
		sOpenalign = "center middle";

		if (system.navigatorname == "nexacro")
		{
			var curX = objApp.mainframe.left;
			var curY = objApp.mainframe.top;
		}
		else
		{
			var curX = window.screenLeft;
			var curY = window.screenTop;
		}

        nLeft   =  curX + (objApp.mainframe.width  / 2) - Math.round(nWidth  / 2);
	    nTop    =  curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2);
	}
	else
	{
		nLeft   =  this.getOffsetLeft() + nLeft;
		nTop    =  this.getOffsetTop()  + nTop ;
	}

	if (nWidth == -1 || nHeight == -1)
	{
	    bAutoSize = true;
	}

	var objChild	= new ChildFrame;
		objChild.init(strPopupId, nLeft, nTop, nWidth, nHeight, null, null);
		objChild.set_formurl(oData.sFormUrl);
		objChild.set_showtitlebar(bShowTitlebar);
		objChild.set_showtitleicon(false);
		objChild.set_layered(false);
		objChild.set_autosize(bAutoSize);
		objChild.set_resizable(bResizable);
		objChild.set_showstatusbar(bShowStatusbar);
		objChild.set_openalign(sOpenAlign);
		objChild.set_dragmovetype("all");
		objChild.set_background(sBackground);
		objChild.set_overlaycolor(sOverlayColor);
		objChild.set_titletext(sTitleText);
		objChild.set_titlebarheight(25);

		objChild.showModal(strPopupId, pThis.getOwnerFrame(), oData.oArgs, pThis,   function (svcid, variant)
																					{
																						var p_variant = _xExtendGrid._xfnIsEmpty(this.variant) ? variant : this.variant;
																						this.variant  = "";

																						if (_xExtendGrid._xfnIsEmpty(fnCallback)) return;

																						if (typeof fnCallback == "function")
																						{
																							// check callback function
																							fnCallback.call(pThis, strOrgPopupId, p_variant);
																						}
																						else if (typeof fnCallback == "string")
																						{
																							// callback in string 일경우
																							if (!this._xfnIsFunction(objForm[fnCallback])) return;
																							objForm[fnCallback].call(pThis, strOrgPopupId, p_variant);
																						}
																					});
};

// 공통 팝업 CLOSE
_xExtendGrid._xfnClose = function(oForm, variant)
{
	var pThis  = oForm;

	if (pThis.opener && typeof variant != "string")
	{
		variant = this._xfnIsEmpty(variant) ? "" : variant;
		pThis.opener.variant = variant;
		pThis.close();
	}
	else
	{
		pThis.close(variant);
	}
};

// 현재 Active 된 Form Object
_xExtendGrid._xfnGetActiveForm = function ()
{
	var objForm = nexacro._findParentFrame(this).form;
	if( objForm.name == "frmMain" ){
		objForm = objForm.getOwnerFrame().form.divMdi.form.divTab.objActiveWork.form.divForm.form;
	}

	return objForm;
};

// // 현재 Active 된 Form Object
// _xExtendForm._xfnGetActiveForm = function ()
// {
// 	var objForm = this.getOwnerFrame().form.divMdi.form.divTab.objActiveWork.form.divForm.form;
// 	return objForm;
// };

// 현재 Active 된 Form의 프로그램 ID
// _xExtendForm._xfnGetActiveProcId = function ()
// {
// 	var sProcId = this.parent.parent.parent.ProgId
//     sProcId = take.nvl(sProcId, take.getProgInfo(this).ProgId);
// 	sProcId = take.nvl(sProcId, this.name);
//     
// 	return sProcId;
// }

// 해당 컴포넌트 계층정보로 얻기
// _xExtendForm._xfnGetPathName = function(obj, refParent)
// {
// 	var c = obj, arr = [];
// 	while ( c )
// 	{
// 		if (refParent && c === refParent) break;
// 		arr.push(c.name);
// 		c = c.parent;
// 	}
// 	arr = arr.reverse();
// 
// 	return arr.join(".");
// }

// // 계칭정보에 해당하는 컴포넌트 얻기
// _xExtendForm._xfnGetCompByPathName = function(pathName, p)
// {
// 	var comps = [],
// 		i, len,
// 		comp;
// 
// 	comps = pathName.split(".");
// 
// 	for (i = 0, len = comps.length; i < len ; i++ )
// 	{
// 		comp = comps[i];
// 		p = p[comp];
// 		if (!p) break;
// 	}
// 
// 	return p;
// }

/**
 *	fnSetSortInfo 		: 대상 그리드 Head 정보 가져오기
 *	@ return 			: N/A
 *	@ example 			: N/A
 */
_xExtendGrid._xfnGetHeadInfo = function(objGrid, nBodyCol, nBodyRow)
{
	var objHeadInfo	= {text : "", cell : -1, size : "0"};
	var nHeadCnt	= objGrid.getCellCount("head");
	var nBodyCnt	= objGrid.getCellCount("body");
	var nHeadRowCnt = parseInt(objGrid.getCellProperty("head", nHeadCnt-1, "row"));
	var nBodyRowCnt = parseInt(objGrid.getCellProperty("body", nBodyCnt-1, "row"));

	for(var i=0; i<nHeadCnt; i++)
	{
		var nHeadCol = objGrid.getCellProperty("head", i, "col");
		var nHeadRow = objGrid.getCellProperty("head", i, "row");

		if (nHeadRowCnt == nBodyRowCnt)
		{
			// Head == Body
			if (nHeadRow > nBodyRow) break;
		}
		else if (nHeadRowCnt > nBodyRowCnt)
		{
			// Head > Body
			/* 전체Head라인 - 현재검색중인 Body라인 < 현재Head라인 */
			if (nHeadRowCnt - (nBodyRowCnt - nBodyRow) < nHeadRow) break;
		}
		else
		{
			// 해당경우가 발생할 경우 제한사항 추가해야 함
		}

		if (nHeadCol == nBodyCol)
		{
			objHeadInfo["text"]	= objGrid._xfnRemoveSortMarkText(objGrid.getCellProperty("head", i, "text"));
			objHeadInfo["cell"]	= i;
			objHeadInfo["size"]	= objGrid.getFormatColProperty(i, "size");
		}
	}

	return objHeadInfo;
}


///////////////////////////////////////////////////////
// take grid excel export / import
//////////////////////////////////////////////////////


/***************************************************************************************************
 *	Grid Excel
 **************************************************************************************************/
 //그리드에 Excel, Csv Export
_xExtendGrid._xfnExportExcelGrid = function (sExcelType)
{
    var objFormComp = this.parent.components;
    var objExcelGrid = objFormComp[this.name + "Excel"];
    objExcelGrid = ( objExcelGrid == null ) ? this : objExcelGrid;
    
    var objDs = this.getBindDataset();
    var objForm = objDs.parent;
    var objFormNm = objForm.ProgNm.replace(/[<>\:\*\"\/\\\?\|]/gi, ""); //파일명, sheet명 특수문자 제거

	var objExcelInfo= {
						  grid	 	 : objExcelGrid   //this
						, sheetname	 : objFormNm
						, filename	 : objFormNm
						, exceltype	 : sExcelType
						, dataset	 : objDs
						, gridTitle  : take.nvl(objExcelGrid.gridTitle, "")

					  };

	this._xfnExcelExport(objExcelInfo);
}

//데이터셋 데이터를 Excel, Csv로 Export
_xExtendGrid._xfnExportExcelGrid2 = function (objGrid, sExcelType, objDataset)
{
    var objExcelInfo= {
						  grid	 	 : objGrid
						, sheetname	 : null
						, filename	 : null
						, exceltype	 : sExcelType
						, dataset	 : objDataset

					  };

	objGrid._xfnExcelExport(objExcelInfo);
}

//그리드에 Excel, Csv Export
_xExtendGrid.ExportExcelGrid = function(sFileNm, sSheetNm, sTitle, sExceltype)
{
    var objExcelInfo = {
              grid	 	 : this
            , sheetname	 : sSheetNm
            , filename	 : sFileNm
            , exceltype	 : sExceltype
            , dataset	 : this.getBindDataset()
            , gridTitle  : sTitle                         
            };

    this._xfnExcelExport(objExcelInfo);
}

//그리드에 데이터 import (Excel, Csv)
_xExtendGrid.ImportExcelGrid = function(pThis, sType, arrColInfo, objOption, aCallBack)
{
    take.importData(pThis, this.getBindDataset(), sType, arrColInfo, objOption, aCallBack);
}

// // Form에서 직접 Excel 다운로드를 하고자 할 경우
// _xExtendForm.gfnExcelExport = function(objExcelInfo)
// {
// 	var objGrid = objExcelInfo.grid;	
// 		objGrid._xfnExcelExport(objExcelInfo);
// };

 /**
 * @class excel export <br>
 * @param {Object} objGridInfo
 * @return N/A
 * @example
 * this._xfnExcelExport(objExcelInfo);
 */
_xExtendGrid._xfnExcelExport = function(objExcelInfo)
{
	var objGrid 	 = objExcelInfo.grid;
	var objForm 	 = objGrid.parent;
	var objDtst		 = objExcelInfo.dataset;//objGrid.getBindDataset();
    var objExportItem;
	
	try
	{
		var sSheetName 	 = objExcelInfo.sheetname;
		var sFileName 	 = objExcelInfo.filename ;
			sFileType    = nexacro.ExportTypes.EXCEL;
		
		//엑셀 갯수 제한시 사용
        //var nRowCnt = objDtst.getRowCount();
        
        //if (nRowCnt>10000) //10,000건 이상 데이터 엑셀 export 안되도록 수정
        //{
        //    take.alert(this, "Info", "10,000건 이상의 데이터는 엑셀 다운로드 할 수 없습니다.");
        //    return;
        //}
        
// 		var nChkCnt = 0;
// 		for( var i=0; i<nRowCnt; i++ )
// 		{
// 			var isChk = objDtst.getColumn(i, "CHK");
// 			if( "1" == isChk )
// 	        {
// 				nChkCnt++;
// 	        }
// 		}
		
		var objBindDtst = objDtst;
// 		if( objExcelInfo.exceltype != "BTN" && nChkCnt > 0 )
// 		{
// 			var objExcelDtst = new Dataset;//objForm.dsExcelList;
// 			
// 			for( var j=0; j<objDtst.getColCount(); j++ )
// 			{
// 				var sColId = objDtst.getColID(j);			
// 				var objColInfo = objDtst.getColumnInfo(sColId);
// 				objExcelDtst.addColumnInfo(sColId, objColInfo);
// 			}
// 
// 			objExcelDtst.clearData();
// 			
// 			for( var i=0; i<objDtst.getRowCount(); i++ ){
// 				var isChk = objDtst.getColumn(i, "CHK");
// 				if( "1" == isChk )
// 		        {
// 					objExcelDtst.addRow();
// 		            var toRowIdx = objExcelDtst.getRowCount();
// 		            objExcelDtst.copyRow(toRowIdx-1, objDtst, i);       
// 		        }
// 			}
// 			
// 			objBindDtst = objExcelDtst
// 		}
		
		var sGridId 	 = "gridExcel" + objGrid._xfnGetUniqueId();		
		var sOrgFormat	 = objGrid.getCurFormatString(false);
	
		var nChkIdx = objGrid.getBindCellIndex("body", "CHK");
		objGrid.setFormatColProperty(nChkIdx, "size", "0");
		
		var sFormat	     = objGrid.getCurFormatString(false);
		
		objGrid.set_formats("<Formats>" + sOrgFormat + "</Formats>");
		
		var sGridTitle	= take.nvl(objGrid.gridTitle, objExcelInfo.gridTitle);
		var sTitle 		 = sGridTitle.split(",")[0];
        
		if( objExcelInfo.exceltype != "BTN" && sGridTitle != "" )
        {
			//var nCellCount   = objGrid.getCellCount("body");
            var nCellCount;
            
            try {
                if (take.nvl(objGrid.head,"") != "")
                {
                    nCellCount = objGrid.head._bandctrl._matrix._rows[0]._format_cols.length;
                } else {
                    if (take.nvl(objGrid.body,"") != "")
                    {
                        nCellCount   = objGrid.body._bandctrl._matrix._rows[0]._format_cols.length;
                    }
                }
            } catch(e) {
                take.debug("takeGrid._xfnExcelExport.error : ", "그리드 포멧정보가 없어 엑셀을 Export할 수 없습니다.");
                take.debug("error name : " + e.name);
                take.debug("error message : " + e.message);
                take.debug(e.stack);
            }
			
			var nHeadCnt	 = take.nvl(sGridTitle.split(",")[1],"");
            if (nHeadCnt=="")
            {
                nHeadCnt = objGrid._rowHeadListSub.length-1;
            } else {
                nHeadCnt = nexacro.toNumber(nHeadCnt);
            }
			
			var sHeadFormat  = sFormat.split( '<Band id="body">' );
			var sHeadFormat1 = sHeadFormat[0];
			
			for( var i=nHeadCnt; i>=0; i-- ){
				var preRow = '/' + 'row="'+i+'"' + '/gi';
				var chgRow = 'row="'+(i+1)+'"'
				sHeadFormat1 = sHeadFormat1.replace(eval(preRow), chgRow);
			}
			
			sFormat = sHeadFormat1 + '<Band id="body">' + sHeadFormat[1];
			sFormat = sFormat.replace(/<Rows>/gi, '<Rows>\n<Row band="head" size="28"/>');
			sFormat = sFormat.replace(/band="left"/gi, '');
            
			if(nHeadCnt <= 0 ){
				var preTxt = '</Rows>';
				var chgTxt = '</Rows>\n';
				chgTxt += '<Band id="head">\n';
				chgTxt += '<Cell colspan="'+nCellCount+'" background="#ffffff" color="#101010" text="'+sTitle+'" cssclass="CellTitle"/>\n';
				chgTxt += '</Band>';
				sFormat = sFormat.replace(preTxt, chgTxt);
			} else{
				sFormat = sFormat.replace(/<Band id="head">/gi, '<Band id="head">\n<Cell colspan="'+nCellCount+'" background="#ffffff" color="#101010" text="'+sTitle+'" cssclass="CellTitle"/>');
			}
		} 
		
		var objGridExcel = objGrid;	
		var objGridExcel = new Grid(sGridId, objGrid.left, objGrid.top, objGrid.width, objGrid.height, objGrid.right, objGrid.bottom);		
		
		if( objExcelInfo.exceltype == "BTN" )
		{
			objGridExcel.set_summarytype( "top" );
		}
	   
		objForm.addChild(sGridId, objGridExcel);
		objGridExcel.show();
		
		if (objExcelInfo.exceltype=="ORG")
		{
			// 자동으로 사이즈 늘리면 속도가 느려져서
// 			objGridExcel.set_autosizebandtype("allband");
// 			objGridExcel.set_autosizingtype("col");

			objGridExcel.appendContentsRow("head");
			objGridExcel.appendContentsRow("body");
				
				var nCol = 0;
				objGridExcel.setCellProperty("head", nCol, "text"		, ""+objDtst.getColID(0)+""	);
				objGridExcel.setCellProperty("body", nCol, "text"		, "bind:"+objDtst.getColID(nCol));
				objGridExcel.setFormatColProperty(0,"size", 200);
	//			objGridExcel.setCellProperty("head", nCol, "autosizecol", "default"						);		
			
			for (var i=1; i<objDtst.getColCount(); i++)
			{
				var nCol = objGridExcel.appendContentsCol("head");
				objGridExcel.setCellProperty("head", nCol, "text"		, ""+objDtst.getColID(nCol)+"");
				objGridExcel.setCellProperty("head", nCol, "autosizecol", "default"						);
				objGridExcel.setCellProperty("body", nCol, "text"		, "bind:"+objDtst.getColID(nCol));
//				objGridExcel.setCellProperty("body", nCol, "autosizecol", "default"						);

				objGridExcel.setFormatColProperty(nCol,"size", 200);
			}
		}
		else
		{
			objGridExcel.set_formats("<Formats>" + sFormat + "</Formats>");
		}
		
		objGridExcel.setBindDataset(objBindDtst);
		objGridExcel.set_visible(false);

// 		// cssclass 초기화
// 		var nCellCount = 0;
// //			nCellCount = objGridExcel.getCellCount("head");	
// //		for (var i=0; i<nCellCount; i++)
// //			 objGridExcel.setCellProperty("head"	, i, "cssclass", "CellExportExcel");
// 
// 			nCellCount   = objGridExcel.getCellCount("body");	
// 		for (var i=0; i<nCellCount; i++)
// 			 objGridExcel.setCellProperty("body"	, i, "cssclass", "CellExportExcel");	 
// 			 
// 			nCellCount   = objGridExcel.getCellCount("summary");	
// 		for (var i=0; i<nCellCount; i++)
// 			 objGridExcel.setCellProperty("summary"	, i, "cssclass", "CellExportExcel");		 
			
		objForm.setWaitCursor(true);
		
		var regExp = /[?*:\/\[\]]/g;  				// (엑셀에서 지원하지 않는 모든 문자)
		
		// FileName  Null Check
		//sFileName = this._xfnIsEmpty(sFileName  ) ? "ExcelFile" +"_"+ objForm.name + "_" + objGrid.name + "_" + this._xfnGetDate() : sFileName;
		sFileName = this._xfnIsEmpty(sFileName  ) ? sTitle + "_" + this._xfnGetDate() : sFileName;
		
		// SheetName Null Check
		sSheetName = this._xfnIsEmpty(sSheetName) ? "sheet1" : sSheetName;
		
		sFileName  =  sFileName.replace(regExp,"");	// 파일명에 특수문자 제거
		sSheetName = sSheetName.replace(regExp,""); // 시트명에 특수문자 제거
		
		if (String(sSheetName).length > 30)
			sSheetName  	= "sheet1";
		
		var sUrl			= _xSvcId;
		if (take.nvl(take.SvcId,"")!="")
		{
			//서비스 id 변경
			sUrl = sUrl.replace(/\w*::/,take.SvcId+"::");
			trace("take.transaction 변경 서비스 아이디 URL -->" + sUrl);
		}
		
		trace(sUrl + "XExportImport.do");	
		var sSvcUrl 		= sUrl + "XExportImport.do";
		trace(sSvcUrl);	
        
		objForm.objExport 	= null;
		objForm.objExport 	= new ExcelExportObject();
		
		objForm.objExport.objgrid = objGridExcel;
		objForm.objExport.set_exporturl(sSvcUrl);
        objForm.objExport.set_exportfilename(sFileName);	
		//objForm.objExport.set_exporteventtype("itemrecord"); //프로그레스바 형식
		//objForm.objExport.set_exportuitype("none");          //Export 완료 시 프로그레스바에 표시될 텍스트를 설정합니다.
		//objForm.objExport.set_exportactivemode("active");  //자동으로 Open여부
		objForm.objExport.set_exporttype(sFileType);         // EXCEL, CSV
		//objForm.objExport.set_exportmessageprocess("%d[%d/%d]");
        
        //objForm.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGridExcel, sSheetName+"!A1", "allband", "allrecord", null, null, null, null);
        objForm.objExport.addExportItem(
            nexacro.ExportItemTypes.GRID, 
            objGridExcel, 
            sSheetName+"!A1",  //시작 시트 및 컬럼
            "allband",    //밴드 선택(allband,nohead,nosumm) ","로 중복 선택가능
            "allrecord",  //allrecord : 모든레코드,selectrecord : 선택된레코드
            "suppress",   //suppress, nosuppress, merge
            "allstyle",   //value, format, calendardateformat, font, color, background(color), -nexa-text-aign, -nexa-vertical-align, -nexa-border(style,color) 속성이 Export 됩니다.
            "image",      //none,url,image 이미지 보이도록 설정
            "none",       //제외할 스타일
            "both", 
            null );
    
		//objExportItem = objForm.objExport.getExportItem(nexacro.ExportItemTypes.GRID, 0); //이미지 포함되도록 추가
        //objExportItem.set_exportimage("image");	
        //objExportItem.set_exceptstyle("none");
        
		//20200422 정해원 beforeunload 백업
		var fnBeforeUnload = (nexacro._Browser != "Runtime") ? window.onbeforeunload : null;
	
		objForm.objExport.addEventHandler("onsuccess", function (obj, successEvent)
													   {
															objForm.setWaitCursor(false);															
															objForm.removeChild(sGridId);
	
															objGridExcel.destroy();
															objGridExcel = null;
															
															//20200422 정해원 beforeunload 초기화 후 1초 뒤 재할당
															if(fnBeforeUnload != null){
																window.onbeforeunload = null;

																nexacro._OnceCallbackTimer.callonce(
																	objForm,
																	function(){
																		window.onbeforeunload = fnBeforeUnload;
																	},
																	100
																);
															}
															
													   }, objForm);
													   
		objForm.objExport.addEventHandler("onerror"  , function (obj, e)
													   {
															objForm.setWaitCursor(false);
															objForm.removeChild(sGridId);
		
															objGridExcel.destroy();
															objGridExcel = null;
																		
															trace(" =========== Excel Export onerror event Start =================================");
															trace(" =========== e.eventid			  : " + e.eventid 	 		  + " ============");
															trace(" =========== e.fromobject 		  : " + e.fromobject 		  + " ============");
															trace(" =========== e.fromreferenceobject : " + e.fromreferenceobject + " ============");
															trace(" =========== e.errorcode 		  : " + e.errorcode 		  + " ============");
															trace(" =========== e.errormsg) 		  : " + e.errormsg 			  + " ============");
															
													   }, objForm);	
			
		var result = objForm.objExport.exportData();
	} catch (e) {
		trace("takegrid._xExtendGrid._xfnExcelExport : Excel export error");
        trace("error name : " + e.name);
        trace("error message : " + e.message);
        trace(e.stack);
	}
};

//엑셀 메뉴 활성화
_xExtendGrid.setExcelPopMenu = function(bShow)
{
    var nFRow, nRow;
    var objPopMenu, objActiveForm;

    if (take.nvl(this._tActiveForm,"")=="")
    {
        objActiveForm	= this._xfnGetActiveForm();
        this._tActiveForm = objActiveForm;
    } else {
        objActiveForm	= this._tActiveForm;
    }      
    
    objPopMenu = take.nvl(objActiveForm["_xdsPopupMenu"],"");
    
    //팝업 메뉴 데이터 셋이 구성이 안된 경우
    if (objPopMenu=="")
    {
        //엑셀 내려받기 메뉴가 구성 되지 않도록 플레그만 처리
        this._tExcelFlag = (bShow?"Y":"N");
        return true;
    }
    
    nFRow = objPopMenu.findRow("idcolumn", "excel");

    if (nFRow>=0)
    {
        objPopMenu._tExcelRow = nFRow;
    }
        
    if (bShow)
    {
        if (nFRow<0)
        {
            if (take.isEmpty(objPopMenu._tExcelRow))
            {
                if (this._xfnIsPossibleGrid("reset")) //초기화는 항 상 마지막에 위치함
                {
                    nRow = objPopMenu.insertRow(objPopMenu.findRow("idcolumn", "reset"));
                } else {
                    nRow = objPopMenu.addRow();
                }
            } else {
                nRow = objPopMenu.insertRow(objPopMenu._tExcelRow);
            }
            
            if (nRow<0) return false;
            
            objPopMenu.setColumn(nRow, "captioncolumn", "엑셀 내보내기");
            objPopMenu.setColumn(nRow, "idcolumn", "excel");
            objPopMenu.setColumn(nRow, "levelcolumn", "0");
        }
        return true;
    } else {
        if (nFRow>=0)
        {
            return objPopMenu.deleteRow(nFRow);
        }
        return true
    }
    
}
////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////
_xExtendGrid.initPage = function(nPage)
{
    //변경된 row수 세팅
    try {
    
        var objDs = this.getBindDataset();
        
        if (take.nvl(nPage,"")=="")
        {
            objDs.curpage=0;
        } else {
            objDs.curpage=nPage;
        }
            
        //페이징 다시 설정
        this._xfnGetUserProperty(this, "_takegridpaggingdiv").form.fnSetting();
    } catch(e) {
        take.debug(this, "takegrid 그리드 페이징 설정 중 오류가 발생하였습니다. (" + e + ")");                                    
        trace("error name : " + e.name);
        trace("error message : " + e.message);
        trace(e.stack);
    }
}

_xExtendGrid.initScrollPage = function(nPage)
{
    var objDs, objScrollDs;
    
    try {
        objDs = this.getBindDataset();
        objScrollDs = take.nvl(objDs.scrolldataset,"");
        
        if (objScrollDs=="")
        {
            return false;
        } else {
            objDs.clearData();
            
            nPage = take.nvl(nPage,"");
            
            if (nPage=="")
            {
                objDs.curpage=0;
            } else {
                objDs.curpage=nPage;
            }
            
            objScrollDs.curpage = objDs.curpage;
            
            objDs.rowcnt  = 50;
            objScrollDs.rowcnt  = 50;
            
            return true;
        }
    } catch(e) {
        take.debug("takeGrid._xExtendGrid.initScrollPage : error ", e);
        trace("error name : " + e.name);
        trace("error message : " + e.message);
        trace(e.stack);
        
        return false;
    }
}

_xExtendGrid.allPage = function()
{
    var objDs, objScrollDs;
    var sFunc;
    var nRowCnt;
    
    try {
        objDs = this.getBindDataset();
        objScrollDs = take.nvl(objDs.scrolldataset,"");
        
        if (objScrollDs=="")
        {
            return false;
        } else {
            nRowCnt = objScrollDs.getConstColumn("TOTALCNT");
            
            if (nRowCnt>20000) //10,000건 이상 데이터 엑셀 export 안되도록 수정
            {
                take.alert(this, "Info", "10,000건 이상의 데이터는 엑셀 다운로드 할 수 없습니다.");
                return false;
            }
            
            objDs.clearData();
            objDs.curpage = 0;
            objScrollDs.curpage = 0;            
            objDs.rowcnt  = nRowCnt;            
            objScrollDs.rowcnt  = objDs.rowcnt ;
            
            return true;
        }
    } catch(e) {
        take.debug("takeGrid._xExtendGrid.allScrollPage : error ", e);
        trace("error name : " + e.name);
        trace("error message : " + e.message);
        trace(e.stack);
        
        return false;
    }
}

_xExtendGrid.getPageTotalRows = function()
{
    var objDs, objScrollDs;
    var nCnt = -1;
    
    objDs = this.getBindDataset();
    
    if (this._xfnIsPossibleGrid("scroll"))
    {
        objScrollDs = take.nvl(objDs.scrolldataset,"");
        
        if (objScrollDs!="")
        {
            nCnt = objScrollDs.getConstColumn("TOTALCNT");
        }        
    } else if (this._xfnIsPossibleGrid("pagging")) {
        nCnt = objDs.getConstColumn("TOTALCNT");
    }
    
    return nCnt;
}

_xExtendGrid.getMaxRowCount = function()
{
    var objGrid;
    var nRowMax, nHeight, nHead, nBody, nSumm, nTotal;
    
    objGrid = this;
    
    nHeight = objGrid.getOffsetHeight();
    nHead = take.nvl(objGrid.getRealRowFullSize("head"),0);
    nBody = 0;
    nSumm = take.nvl(objGrid.getRealRowFullSize("summary"),0);
    
    nTotal = objGrid.getFormatRowCount();
    
    for (var i=0; i<nTotal; i++)
    {
        if (objGrid.getFormatRowProperty(i, "band") == "body") nBody+= take.nvl(objGrid.getFormatRowSize(i),0) ;
    }
    
    nRowMax = nexacro.round((nHeight- nHead - nSumm)/nBody);
    nRowMax += nexacro.round(nRowMax/2)
    return nRowMax;
}

///////////////////////////////////////////////////////////////////////////////////////
//                        그리드 공통 컴포넌트(달력, 콤보)
///////////////////////////////////////////////////////////////////////////////////////
/**
 * openTakeGridComp : 그리드용 Take component
 * @param   {Object} pThis     현재폼
 * @param   {Object} objGrid   그리드
 * @param   {String} sCompType 컴포넌트 타입
 * @param   {String} sGubun    컴포넌트 세부 구분
 * @param   {Object} objParam  파라메터
 * @example this.Grid00.openTakeGridComp(this, obj, "calendar", "month", {row:e.row, cell:e.cell});
 */
_xExtendGrid.openTakeGridComp = function(pThis, objGrid, sCompType, sGubun, objParam)
{
    //변수에 기본 값 세팅
    var objPopupDiv, objDs, objRect; 
    var sUrl;
    var arrPopSize;
    var nWidth, nHeight, nDisplayCnt, nRowHeight=30;

    if (take.nvl(objGrid,"")=="")
    {
        take.debug("TakeGridComp.error", "objGrid(그리드컴포넌트)는 필수 입니다.");
        return;
    }
    
    if (take.nvl(sCompType,"")=="")
    {
        take.debug("TakeGridComp.error", "sCompType(컴포넌트 유형)은 필수 입니다.\nEx)calendar,combo");
        return;
    }
    
    if (take.nvl(sGubun,"")=="")
    {
        if (sCompType=="calendar")
        {
            take.debug("TakeGridComp.error", "sGubun(컴포넌트 구분)은 필수 입니다.\nEx)month,fromto,date");
        } else if (sCompType=="combo") {
            take.debug("TakeGridComp.error", "sGubun(컴포넌트 구분)은 필수 입니다.\nEx)multi,tree");
        }
        return;
    }
            
    if (take.nvl(objParam, "")=="")
    {   
        take.debug("TakeGridComp.error", "objParam(파라메터)는 필수 입니다.");
        return;
    } else {
        if (!objParam.hasOwnProperty("row")) 
        {
            take.debug("TakeGridComp.error", "objParam(파라메터)에 row(선택된 행)은 필수 입니다.");
            return;
        }
        
        if (!objParam.hasOwnProperty("cell")) 
        {
            take.debug("TakeGridComp.error", "objParam(파라메터)에 cell(선택된 컬럼)은 필수 입니다.");
            return;
        }
    }
    
    objDs = objGrid.getBindDataset();
    
    //PopupDiv 컴포넌트 체크
    objPopupDiv = take.nvl(pThis.pDivGridcomp, "");
    
    //PopupDiv가 생성이 안된경우 생성
    if (objPopupDiv=="")  
    {
        //PopupDiv 동적 생성
        objPopupDiv = new PopupDiv();  
        objPopupDiv.init("pDivGridcomp", 0, 0, 197, 191, null, null);

        pThis.addChild("pDivGridcomp", objPopupDiv); 

        //PopupDiv closeup 이벤트 생성
        objPopupDiv.addEventHandler("oncloseup", function(obj ,e) {
                                                    objGrid._tfnPopupDivGridcomp_oncloseup(obj, e);
                                                }, this);
        
        //PopupDiv Show Object  
        objPopupDiv.show(); 
        objPopupDiv.set_border("1px solid #dddddd");
        objPopupDiv.set_async(false);
    }

    //팝업세팅
    objPopupDiv.objComp = objGrid;
    objPopupDiv.objDataset = objDs;
    objPopupDiv.objParam = objParam;    
        
    if (sCompType=="calendar")
    {
        if (sCompType=="calendar" && sGubun=="fromto")
        {
            if (!objParam.hasOwnProperty("fromcol")) 
            {
                take.debug("TakeGridComp.error", "기간 달력 타입은 objParam(파라메터)에 fromcol(from 컬럼명)은 필수 입니다.");
                return;
            }
            
            if (!objParam.hasOwnProperty("tocol"))
            {
                take.debug("TakeGridComp.error", "기간 달력 타입은 objParam(파라메터)에 tocol(to 컬럼명)은 필수 입니다.");
                return;
            }
        }
        
        //달력컴포넌트에 입력된 값 가져오기
        sColNm = take.getBindColName(objGrid, objParam.cell);
        objPopupDiv.data = objDs.getColumn(objParam.row, sColNm);
        
        if (sGubun=="fromto")
        {
            sUrl = "frm::com/comCalDayFT.xfdl";
            //popupdiv size
            objPopupDiv.set_height(302);
            objPopupDiv.set_width(400);
        } else if (sGubun=="month") {
            sUrl = "frm::com/comCalMonth.xfdl";
            //popupdiv size
            objPopupDiv.set_height(185);
            objPopupDiv.set_width(200);
        } else if (sGubun=="date") {
        	//sUrl = "frm::com/comCalDate.xfdl";
            //popupdiv size
            //objPopupDiv.set_height(181);
            //objPopupDiv.set_width(200);
        }
    
    } else if (sCompType=="combo") {

//         //달력컴포넌트에 입력된 값 가져오기
//         sColNm = take.getBindColName(objGrid, objParam.cell);
//         objPopupDiv.objParam["colnm"] = sColNm
//         objPopupDiv.objParam["data"]  = objDs.getColumn(objParam.row, sColNm);        
//         objPopupDiv.objParam["gubun"] = sGubun;
//         
//         sUrl = "frm::com/comGridCellCombo.xfdl";
//         
//         //컴포넌트에 세팅된 팝업 사이즈 확인
//         arrPopSize = take.nvl(objGrid.getCellProperty( "body", objParam.cell, "combopopupsize" ), "");
//         if (arrPopSize!="") //사이즈가 세팅 되어 있을경우 값을 세팅
//         {
//             arrPopSize = arrPopSize.split(" ");
//             nWidth = arrPopSize[0];
//             nHeight = arrPopSize[1];
//         } else {
//             //사이즈가 세팅 안 되어 있을경우 기본 값 세팅
//             nWidth = objGrid.getRealColSize(objParam.cell);
//             
//             nDisplayCnt = nexacro.toNumber(take.nvl(objGrid.getCellProperty( "body", objParam.cell, "combodisplayrowcount" ),10));
//             
//             if (nDisplayCnt>0)
//             {
//                 nDisplayCnt++; //헤더 높이 만큼 추가
//                 nHeight = nDisplayCnt*nRowHeight; //디스플레이 로우 수만큼 Height 설정
//             } else {
//                 nCnt++; //헤더 높이 만큼 추가
//                 nHeight = 20*nRowHeight; //기본값으로 20행수 만큼 Height 설정
//                 //nHeight = nCnt*nRowHeight; //행수만큼 Height 설정
//             }
//         }
//         
//         //PopupDiv Url 세팅
//         objPopupDiv.set_url(sUrl);
//         
//         //popupdiv size
//         objPopupDiv.set_height(nHeight);
//         objPopupDiv.set_width(nWidth);
    }

    //PopupDiv Url 세팅
    objPopupDiv.set_url(sUrl);

    objRect = objGrid.getCellRect(objParam.row, objParam.cell);
    
    //월 달력 PopupDiv 띄우기
    objPopupDiv.trackPopupByComponent( objGrid, objRect.left, objRect.top + objGrid.getRealRowSize(objParam.row));
}

/**
 * take grid용 내부 팝업 디비전 닫기 이벤트
 * @param  {Object} obj PopupDiv 컴포넌트
 * @param  {String} e   Event info
 * @example this._tfnPopupDivGridcomp_oncloseup();
 */
_xExtendGrid._tfnPopupDivGridcomp_oncloseup = function(obj, e)
{
    ////PopupDiv 초기화
	obj.set_url("");
    obj.data = null;
    //obj.sFData = null;
    //obj.sTData = null;
    obj.objComp = null;
    obj.objDataset = null;
    obj.objFComp = null;
    obj.objTComp = null;
    obj.objParam = null;
}