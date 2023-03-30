(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFilter");
            this.set_titletext("그리드 필터");
            this.set_border("1px solid #c0c0c0");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,327);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOperator", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REF1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"45","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_pop_btnbg");
            this.addChild(obj.name, obj);

            obj = new Combo("cboOperator","20","20","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("dsOperator");
            obj.set_codecolumn("REF1");
            obj.set_datacolumn("NAME");
            obj.set_autoselect("true");
            obj.set_text("항목선택");
            obj.set_value("check");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOperator","165","20",null,"25","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdItem","20","55",null,null,"20","65",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsItem");
            obj.set_scrollbartype("none auto");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"360\"/><Column size=\"0\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" text=\"1\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"모두선택\" border=\"1px solid #c7c7c7,0px none\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:NAME\" textAlign=\"left\" border=\"1px solid #e3e3e3,0px none\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","25","223","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_tabstop("true");
            obj.set_cssclass("btn_WF_check01");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","25","168","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel01");
            this.addChild(obj.name, obj);

            obj = new Static("stcLabel","22","290","100","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("필터방법");
            obj.set_visible("false");
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
        this.registerScript("comGridFilter.xfdl", function() {
        /***************************************************************************************************
         * 업무구분		: UXBooster
         * 화 면 명		: comFilter.xfdl
         * 화면설명		: 그리드 공통 필터 팝업
         * 작 성 자		: 테이크
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
        this.fvGrd, this.fvDst, this.fvCol, this.fvFilterType;

        /***************************************************************************************************
         *	FORM EVENT 영역 (onload)
         ***************************************************************************************************/
        this.comFilter_onload = function(obj, e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		take.tranCode(this, ["00039"], ["dsOperator"], "",
        			function(){
        				this.cboOperator.set_index(0);

        				var objParamInfo= this.parent.gridInfo;
        				this.fnLoadFilterInfo(objParamInfo);
        			}
        		);
        	}
        };

        /**
         *	comFilter_onkeydown	: onkeydown Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.comFilter_onkeydown = function(obj, e)
        {
        	if (e.keycode == 27) this.fvGrd._xfnClose(this, "");

            if (this.parent._type_name=="PopupDiv")
            {
                this.parent.closePopup();
            }
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
         *	btnConfirm_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnConfirm_onclick = function(obj,  e)
        {
        	this.fnApplyFilterInfo();
        	//this.fvGrd._xfnClose(this, "");
        }

        /**
         *	btnClose_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnClose_onclick = function(obj,  e)
        {
            var objComp;

        	this.fvGrd._xfnClose(this, "");

            objComp = take.nvl(this.parent,"");

            if (objComp!="")
            {
                if (objComp.hasOwnProperty("_type_name"))
                {
                    if (objComp._type_name=="PopupDiv")
                    {
                        objComp.closePopup();
                    }
                }
            }
        }

        /**
         *	grdItem_onheadclick	: onheadclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.grdItem_onheadclick = function(obj,e)
        {
        	this.fvGrd._xfnHeadCheckSelectAll(obj, e.cell);
        };

        /**
         *	cboOperator_onitemchanged	: onitemchanged Event
         *	@ return 					: N/A
         *	@ example 					: N/A
         */
        this.cboOperator_onitemchanged = function(obj,e)
        {
        	var oGrd  = this.grdItem;
        	var oDst  = this.grdItem.getBindDataset();

        	if (e.postindex==0)
        	{
        		this.edtOperator.set_readonly(true);
        		this.edtOperator.set_value("");

        		this.grdItem.set_readonly(false);
        	}
        	else
        	{
        		this.edtOperator.set_readonly(false);
        		this.grdItem.set_readonly(true);
        	}

        	oGrd.setCellProperty("head", 0, "text", 1);

        	oDst.set_enableevent(false);
        	for (var i=0; i<oDst.rowcount; i++)
        		 oDst.setColumn(i, "CHK", 1);
        	oDst.set_enableevent(true);
        };

        /**
         *	grdItem_onkeydown		: onclick Event
         *	@ return 				: N/A
         *	@ example 				: N/A
         */
        this.grdItem_onkeydown = function(obj,e)
        {
        	if (e.keycode == 27) this.fvGrd._xfnClose(this, "");

            var objComp = take.nvl(this.parent,"");

            if (objComp!="")
            {
                if (objComp.hasOwnProperty("_type_name"))
                {
                    if (objComp._type_name=="PopupDiv")
                    {
                        objComp.closePopup();
                    }
                }
            }
        };

        /**
         *	btnFilterListClose_onclick	: onclick Event
         *	@ return 					: N/A
         *	@ example 					: N/A
         */
        this.btnFilterListClose_onclick = function(obj,e)
        {
        	this.divFilter.set_visible(false);
        };

        /**
         *	edtOperator_onkeydown	: onkeydown Event
         *	@ return 				: N/A
         *	@ example 				: N/A
         */
        this.edtOperator_onkeydown = function(obj,e)
        {
        	if (e.keycode != "13") return;

        	this.fnApplyFilterInfo();
         	this.fvGrd._xfnClose(this, "");
        };

        /***************************************************************************************************
         *	사용자 FUNCTION 영역
         ***************************************************************************************************/
        /**
         *	fnLoadFilterInfo	: 필터정보를 화면에 표시
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnLoadFilterInfo = function(objGridInfo)
        {
        	var objParamInfo = objGridInfo;

        	// 대상그리드에 대한 컬럼정보 수집
        	this.fvGrd		  = objParamInfo["grid"];
        	this.fvDst		  = this.fvGrd.getBindDataset();
        	this.fvCol  	  = objParamInfo["cell"];
        	this.fvFilterType = objParamInfo["filtertype"];

        	var nRow;

        	var nCellHead	 	 = this.fvCol;
        	var arrGridFilterData= this.fvGrd["_filterData"];
        	var arrGridFilterInfo= this.fvGrd["_filterInfo"];

        	var nHeadCell	 	 = arrGridFilterInfo[nCellHead].headcell;
        	var nBodyCell	 	 = arrGridFilterInfo[nCellHead].cell;
        	var sColType	 	 = arrGridFilterInfo[nCellHead].coltype;
        	var sCellId         = arrGridFilterInfo[nCellHead].colid;
            var sCellTxt         = this.fvGrd.getCellProperty("head", nHeadCell, "text");

           this.grdItem.setCellProperty("head", 1, "text", sCellTxt);

        	// 필터 정보가 있다면 표시하고 아니면 기본값 지정
        	if (this.fvFilterType == "combocontrol" || this.fvFilterType == "combotext")
        	{
        		var sComboDs	= this.fvGrd.getCellProperty("body", nBodyCell, "combodataset");
        		var sCodeCol	= this.fvGrd.getCellProperty("body", nBodyCell, "combocodecol");
        		var sDataCol	= this.fvGrd.getCellProperty("body", nBodyCell, "combodatacol");

        		var objComboDs	= this.fvGrd._xfnLookup(this.fvGrd.parent, sComboDs);

        		// 콤보 목록 생성
        		this.dsItem.set_enableevent(false);
        		this.dsItem.clearData();

        		this.grdItem.set_binddataset();

        		for (var i=0; i<objComboDs.getRowCount(); i++)
        		{
        			var nRow	= this.dsItem.addRow();
        			this.dsItem.setColumn(nRow, "CHK" , 1);
        			this.dsItem.setColumn(nRow, "CODE", objComboDs.getColumn(i, sCodeCol));
        			this.dsItem.setColumn(nRow, "NAME", objComboDs.getColumn(i, sDataCol));
        		}

        		this.grdItem.set_binddataset(this.dsItem);
        		this.dsItem.set_enableevent(true);
        	}
         	else
         	{
         		//선택된 컬럼으로 그리드 리스트에서 컬럼 인덱스 구하기
         		sColIdx = this.fvDst.getColIndex(sCellId);

          		var arrData = this.fvDst._rawRecords;
          		arrData = take.ArrayPluck(arrData,sColIdx);	// 선택된 컬럼의 데이터만 축출한다
                arrData = take.ArrayUnique(arrData);   	// 축출한 데이터의 중복을 제거한다

          		this.grdItem.set_binddataset(null);

        		// 부모창 데이터셋의 해당 항목 중복값 제거
          		this.dsItem.set_enableevent(false);
          		this.dsItem.clearData();

         		for (var i=0; i<arrData.length; i++)
         		{
         			var sColName = arrData[i];
        			var sColCode = this.fvGrd._xfnIsEmpty(sColName) ? "empty" : null;
         				sColName = this.fvGrd._xfnIsEmpty(sColName) ? "" : sColName;

        			if (sColCode == "empty")
        			if (this.dsItem.findRow("CODE", "empty")>-1) continue;

        			var nRow = this.dsItem.addRow();
        			this.dsItem.setColumn(nRow, "CHK" , 1		);
        			this.dsItem.setColumn(nRow, "CODE", sColCode);
        			this.dsItem.setColumn(nRow, "NAME", sColName);
        		}

        		this.dsItem.set_keystring("S:NAME");

          		// 데이터가 보여지도록 첫번째 Row 세팅
          		this.dsItem.set_rowposition(0);
          		this.dsItem.set_enableevent(true);

        		// 그리드에 데이터셋 바인딩
          		this.grdItem.set_binddataset(this.dsItem);
         	}

        	var arrCellFilterData=arrGridFilterData[this.fvCol];

        	// 마지막 값 셋팅
        	if (!this.fvGrd._xfnIsEmpty(arrCellFilterData))
        	{
        		for (var j=0; j<arrCellFilterData.length; j++)
        		{
        			var objFilterData= arrCellFilterData[j];

        	 		var sOperatorCd	 = objFilterData.operatorcode;
        			if (this._xfnIsEmpty(sOperatorCd)) sOperatorCd = "";
        	 		var sOperatorNm  = objFilterData.operatorname;
        			if (this._xfnIsEmpty(sOperatorNm)) sOperatorNm = "";
        	 		var sGridCode	 = objFilterData.code;
        	 		var sGridName	 = objFilterData.name;

        			if (sOperatorCd == "check")
        			{
        				var nRow;

        				  if (sGridCode == "empty") nRow = this.dsItem.findRowExpr("CODE=='" + sGridCode + "'");
        				else 						nRow = this.dsItem.findRowExpr("NAME=='" + sGridName + "'");

        				if (nRow>-1)
        					this.dsItem.setColumn(nRow, "CHK", 0);
        			}
        			else
        			{
        				if (this.fvFilterType == "combocontrol" || this.fvFilterType == "combotext")
        				{
        					var nFndRow = this.dsItem.findRowExpr("CODE=='" + sOperatorNm + "'");
        					if (nFndRow>-1)
        						sOperatorNm = this.dsItem.getColumn(nFndRow, "NAME");
        				}
        			}

        			this.cboOperator.set_value(sOperatorCd);
        			this.edtOperator.set_value(sOperatorNm);
        		}
        	}

        	// 상단 콤보박스가 항목선택인 경우에는 하단 그리드에서 제어
        	if (this.cboOperator.index==0)
        	{
        		this.edtOperator.set_readonly(true);
        		this.grdItem.set_readonly(false);
        	}
        	else
        	{
        		this.edtOperator.set_readonly(false);
        		this.grdItem.set_readonly(true);
        	}
        }

        /**
         * combo type 을 제외한 필터 적용
         * @param {Dataset} 필터 항목 Dataset
         */
        this.fnApplyFilterInfo = function()
        {
            var sOperatorCd, sOperatorNm, sChk, sCode, sName;
            var arrGridFilterData, arrCellFilterData, arrCellSelectData;
            var objDs, objFilterData, objComp, objForm;
            var aFnCallBack;
            var nCnt, nFndRow;
            var bFilter;

            objDs = this.dsItem;

         	arrGridFilterData = this.fvGrd["_filterData"];
        	arrCellFilterData = new Array();		// 필터 정보 생성
            arrCellSelectData = new Array();		// 필터 정보 생성

         	sOperatorCd	= this.cboOperator.value;	// 조건
         	sOperatorNm	= this.edtOperator.value;	// 조건값

        	switch (sOperatorCd)
        	{
        		// 항목선택 / 그리드 항목을 체크해서 필터링한다.
        		case "check" :
                    nCnt = objDs.getRowCount();

        			for (var i=0; i<nCnt; i++)
        			{
        				// 선택제외한 대상만 관리한다.
        				sChk	= objDs.getColumn(i, "CHK" );
        				sCode	= objDs.getColumn(i, "CODE");
        				sName	= objDs.getColumn(i, "NAME");

                        objFilterData = { "operatorcode": sOperatorCd,
        								  "operatorname": sOperatorNm,
        								  "code"		: sCode,
        								  "name"		: sName	};

        				if (sChk=="0")
        				{
        					arrCellFilterData.push(objFilterData);
        				} else {
                            arrCellSelectData.push(objFilterData);
                        }
        			}

        		break;

        		default :

        			if (!this.fvGrd._xfnIsEmpty(sOperatorNm))
        			{
        				if (this.fvFilterType == "combocontrol")
        				{
        					nFndRow = objDs.findRowExpr("NAME=='" + sOperatorNm + "'");
        					if (nFndRow>-1)
        						sOperatorNm = objDs.getColumn(nFndRow, "CODE");
        				}

        				objFilterData = { "operatorcode": sOperatorCd,
        								  "operatorname": sOperatorNm,
        								  "code"		: null,
        								  "name"		: null };

        				arrCellFilterData.push(objFilterData);
                        arrCellSelectData.push(objFilterData);
        			}

        		break;
        	}

        	if (arrCellFilterData.length == 0)
            {
         		this.fnClrFilterInfo();							// 필터 제거
                this.fnClrSelectInfo();
                bFilter=false;
            } else {
         		this.fnSetFilterInfo(arrCellFilterData);		// 필터 지정
                this.fnSetSelectInfo(arrCellSelectData);		// 필터 지정
                bFilter=true;
         	}

            aFnCallBack = take.nvl(this.fvGrd.callbackfunction,"");

            // 필터 실행
            if (aFnCallBack=="") this.fnExcFilterInfo();

            if (bFilter)
            {
                this.fvGrd._xfnSetCellFilterImage(this.fvGrd, this.fvCol, "setting");
            } else {
                this.fvGrd._xfnSetCellFilterImage(this.fvGrd, this.fvCol, "default");
            }

            objComp = take.nvl(this.parent,"");

            if (objComp!="")
            {
                if (objComp.hasOwnProperty("_type_name"))
                {
                    if (objComp._type_name=="PopupDiv")
                    {
                        objForm = take.nvl(this.parent.gridInfo.parentform,"");

                        if (objForm=="")
                        {
                            take.debug("comFilter.fnApplyFilterInfo", "parentform을 지정해야 Callback 함수를 호출할 수 있습니다.");
                        }

                        if (aFnCallBack!="")
                        {
                            //function형일 경우
                            if (take.isFunction(aFnCallBack))
                            {
                                //aFnCallBack.call(objForm, this.fvGrd.name, {"data" : this.fvGrd["_filterData"], "info" : this.fvGrd["_filterInfo"]});
                                aFnCallBack.call(objForm, this.fvGrd.name, {"data" : this.fvGrd["_selectData"], "info" : this.fvGrd["_filterInfo"]});

                            } else {
                                //해당 함수가 있는지 여부 체크
                                if (objForm.hasOwnProperty(aFnCallBack))
                                {
                                    //함수 인지 여부 체크
                                    if (take.isFunction(objForm[aFnCallBack]))
                                    {
                                        //해당 함수 호출

                                        //objForm[aFnCallBack].call(objForm, this.fvGrd.name, {"data" : this.fvGrd["_filterData"], "info" : this.fvGrd["_filterInfo"]});
                                        objForm[aFnCallBack].call(objForm, this.fvGrd.name, {"data" : this.fvGrd["_selectData"], "info" : this.fvGrd["_filterInfo"]});
                                    } else {
                                        take.debug("comFilter.fnApplyFilterInfo", objForm.name + "에 " + aFnCallBack + "는 Function이 아닙니다.");
                                        return false;
                                    }
                                } else {
                                    take.debug("comFilter.fnApplyFilterInfo", objForm.name + "에 " + aFnCallBack + " Function이 존재하지 않습니다.");
                                    return false;
                                }
                            }
                        }

                        objComp.closePopup();
                    }
                }
            }

            //닫기
        	this.fvGrd._xfnClose(this, "");
        }

        /**
         * 대상 그리드에 주어진 컬럼에 해당하는 필터 데이터를 제거한다.
         */
        this.fnClrFilterInfo = function()
        {
        	var arrGridFilterData	= this.fvGrd["_filterData"];
        	var arrCellFilterData	= arrGridFilterData[this.fvCol];

        	if (!this.fvGrd._xfnIsUndefined(arrCellFilterData))
        	{
        		arrCellFilterData = null;
        		arrGridFilterData[this.fvCol]	= arrCellFilterData;
        		this.fvGrd["_filterData"]		= arrGridFilterData;
        	}
        }

        /**
         * 대상 그리드에 주어진 컬럼에 해당하는 필터 정보를 지정한다.
         * @param {array} arrData 필터 데이터로 {logic, operator, value} 형태의 object 배열이다.
         */
        this.fnSetFilterInfo = function(arrData)
        {
        	var arrGridFilterData			  = this.fvGrd["_filterData"];
        		arrGridFilterData[this.fvCol] = arrData;

        	this.fvGrd["_filterData"]		  = arrGridFilterData;
        }

        /**
         * 대상 그리드에 주어진 컬럼에 해당하는 필터 데이터를 제거한다.
         */
        this.fnClrSelectInfo = function()
        {
        	var arrGridFilterData
            var arrCellFilterData;

            if (this.fvGrd.hasOwnProperty("_selectData"))
            {
                arrGridFilterData	= this.fvGrd["_selectData"];
                arrCellFilterData	= arrGridFilterData[this.fvCol];
            } else {
                arrGridFilterData = null;
                arrCellFilterData = null;
            }

        	if (!this.fvGrd._xfnIsUndefined(arrCellFilterData))
        	{
        		arrCellFilterData = null;

                if (take.nvl(arrGridFilterData,"")!="")
                {
                    if (arrGridFilterData.hasOwnProperty(this.fvCol))
                    {
                        arrGridFilterData[this.fvCol]	= arrCellFilterData;
                        this.fvGrd["_selectData"]		= arrGridFilterData;
                    }
                }
        	}
        }

        /**
         * 대상 그리드에 주어진 컬럼에 해당하는 필터 정보를 지정한다.
         * @param {array} arrData 필터 데이터로 {logic, operator, value} 형태의 object 배열이다.
         */
        this.fnSetSelectInfo = function(arrData)
        {
        	var arrGridFilterData, arrGridFilterData;

            if (this.fvGrd.hasOwnProperty("_selectData"))
            {
                arrGridFilterData			  = this.fvGrd["_selectData"];
        		arrGridFilterData[this.fvCol] = arrData;

                this.fvGrd["_selectData"]		  = arrGridFilterData;
            }
        }



        /**
         * 대상 그리드 필터 실행
         * @param {Grid} grid 대상 Grid Component
         */
        this.fnExcFilterInfo = function()
        {
        	this.fvGrd._xfnProcFilterGrid(this.fvGrd);
        }

        /**
        * this.gfnPluck : 배열의 특정 위치의 값을 축출
        * @param   : arrData(Array) - 배열값
        *            key(Number)    - 축출할 배열 인덱스
        * @return  : Array
        * @example : arrData = new Array();
        *            this.fnPluck(arrData, 1);
        **/
        this.fnPluck = function(arrData, key)
        {
            return arrData.map (function(object) {return object[key];});
        };

        /**
        * this.fnUniqueDs : 배열의 중복 제거후 2차원 배열로 리턴
        * @param   : arrData(Array) - 배열값
        * @return  : Array
        * @example : arrData = new Array();
        *            this.fnUniqueDs.(arrData);
        **/
        this.fnUniqueDs = function(arrData)
        {
            var nCnt    = arrData.length;
            var arrTemp = new Array();
            var arrRtn  = new Array();

            for (var i=0; i<nCnt; i++)
        		arrTemp[arrData[i]] = arrData[i];

        	for (var i in arrTemp)
        	{
        		if (typeof arrTemp[i] == "function") continue;
        		arrRtn.push(new Array(1,arrTemp[i]));
        	}

            return arrRtn;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comFilter_onload,this);
            this.addEventHandler("onkeydown",this.comFilter_onkeydown,this);
            this.cboOperator.addEventHandler("onitemchanged",this.cboOperator_onitemchanged,this);
            this.edtOperator.addEventHandler("onkeydown",this.edtOperator_onkeydown,this);
            this.grdItem.addEventHandler("onheadclick",this.grdItem_onheadclick,this);
            this.grdItem.addEventHandler("onkeydown",this.grdItem_onkeydown,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("comGridFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
