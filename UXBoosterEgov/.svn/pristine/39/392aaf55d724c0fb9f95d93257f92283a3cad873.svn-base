(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comHide");
            this.set_titletext("컬럼 보이기/숨기기");
            this.set_border("1px solid #c0c0c0");
            this.getSetter("bUserGridOption").set("false");
            if (Form == this.constructor)
            {
                this._setFormPosition(581,469);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsItem", this);
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"INDEX\" type=\"INT\" size=\"256\"/><Column id=\"COLID\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"HEADCELL\" type=\"INT\" size=\"256\"/><Column id=\"WIDTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"45","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_pop_btnbg");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","10","10",null,"20","73",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_Help");
            obj.set_textAlign("left");
            obj.set_text("그리드 속성(autosizingtype)이 지정 되어 있을 경우 개인화 처리가 불가합니다.");
            obj.set_verticalAlign("top");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdItem","10","35",null,null,"10","36",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsItem");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("false");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"컬럼\" border=\"1px solid #c7c7c7,0px none\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:COLNM\" textAlign=\"left\" border=\"1px solid #e3e3e3,0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","21","10","5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_cancel01");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"57","21","btnCancel:3","5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_tabstop("true");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_check01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","10",null,"360","5",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00",null,"10","10","240","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01","0","0","400","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","0","0","10","240",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n1\r\n0");
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
        this.registerScript("comHide.xfdl", function() {
        /***************************************************************************************************
         * 업무구분		: 포탈(대시보드) 시스템 구축
         * 화 면 명		: comHide.xfdl
         * 화면설명		: 그리드 공통 컬럼숨기기/보이기 팝업
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
        this.fvGrd, this.fvDst;

        this.comHide_onload = function(obj, e)
        {
        	this.ProgId="GM00000103";
            this.ProgNm="GM00000103";

        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		var objParamInfo= this.parent.gridInfo;

        		/* 대상그리드에 대한 컬럼정보 수집 */
        		this.fvGrd	= objParamInfo["grid"];
        		this.fvDst	= this.fvGrd.getBindDataset();

        		var objGrid = new Grid();
        			objGrid.init("_Grid", 100, 120, 196, 46, null, null);
        		this.addChild("_Grid", objGrid);

        		objGrid.set_visible(false);
        		objGrid.set_formats("<Formats>" + objParamInfo["grid"]._orgFormat + "</Formats>");
        		objGrid.show();

        		if(take.nvl(this.fvGrd.autosizingtype, "none") != "none"){
        			this.staPopupTitle.set_visible(true);
        		}

        		objGrid["_hideInfo"] = objParamInfo["grid"]["_hideInfo"];

        		/* 대상그리드에 대한 컬럼정보 수집 parameter:pv_argList[0] */
        		this.fnGatherColInfo(this.fvGrd);

        		this.fvGrd = objGrid;

        		if (this.fvGrd._xfnIsArray(this.fvGrd["_hideInfo"]))
        		{
        			var arrHideInfo	= this.fvGrd["_hideInfo"];

        			for (var i=0; i<arrHideInfo.length; i++)
        			{
        				var nCell		= arrHideInfo[i].cell;
        				var bShowHide	= arrHideInfo[i].showHide;
        				var strColId	= arrHideInfo[i].colid;

        				var strExpr	= "";
        					strExpr	+= "COLID=='" 	+ strColId + "'";
        					strExpr	+= "&&";
        					strExpr	+= "HEADCELL==" + nCell;

        				var nRow  = this.dsItem.findRowExpr(strExpr);
        				if (nRow >= 0)
        					this.fnAddHideInfo(nRow, bShowHide);
        			}
        		}

        		var nCnt = this.dsItem.getCaseCount("CHK==1") == 0 ? 0 : 1;
        		this.grdItem.setCellProperty("head", 0, "text", nCnt);
        	}
        };

        /**
         *	commFind_onkeydown	: onkeydown Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.comHide_onkeydown = function(obj, e)
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
         *	dsItem_oncolumnchanged	: oncolumnchanged Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.dsItem_oncolumnchanged = function(obj, e)
        {
        	obj.set_keystring("");
        	obj.set_keystring("S:INDEX");
        }

         /**
         *	dsItem_oncolumnchanged	: oncolumnchanged Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.grdItem_onheadclick = function(obj,e)
        {
        	this.fvGrd._xfnHeadCheckSelectAll(obj, e.cell);
        };

         /**
         *	btnConfirm_onclick	: onclick Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.btnConfirm_onclick = function(obj,  e)
        {
        	this.fnSetShowHide();
        }

         /**
         *	btnClose_onclick	: onclick Event
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
         *	fnGatherColInfo 	: 대상컬럼 Dataset 생성
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnGatherColInfo = function ()
        {
        	this.dsItem.set_enableevent(false);

            trace("!@!@>> CellCount:   " + this.fvGrd.getCellCount("body"));
        	for (var i=0; i<this.fvGrd.getCellCount("body"); i++)
        	{
        		/* head와 body의 column index가 다른경우 확인해야함 */
        		var sCellText	= this.fvGrd._xfnTrim(this.fvGrd.getCellProperty("body", i, "text"));
        		var nCellRow	= parseInt(this.fvGrd._xfnTrim(this.fvGrd.getCellProperty("body", i, "row")));
        		var nCellCol	= parseInt(this.fvGrd._xfnTrim(this.fvGrd.getCellProperty("body", i, "col")));

        		if (sCellText.toLowerCase().indexOf("bind:") < 0) continue;
        			sCellText = sCellText.substr(5);

        		var objColInfo	= this.fvDst.getColumnInfo(sCellText);

        		if (this.fvGrd._xfnIsEmpty(objColInfo)) continue;
        		if (objColInfo.type.toUpperCase() == "BLOB") continue;

        		var objHeadInfo	= this.fvGrd._xfnGetHeadInfo(this.fvGrd, nCellCol, nCellRow);
        		if (this.fvGrd._xfnIsEmpty(objHeadInfo)) continue;

        		var sHeadText	= this.fvGrd._xfnNvl(objHeadInfo["text"], sCellText);
        		var nHeadCell	= this.fvGrd._xfnNvl(objHeadInfo["cell"], i		   );
                var sColIdx = this.fvGrd.getBindCellIndex("body", sCellText);
        		var nCellSize 	= this.fvGrd._xfnNvl(this.fvGrd.getFormatColProperty(sColIdx, "size"), "0"	   );

        		var strType = this.fvGrd.getCellProperty("head", nHeadCell, "displaytype");
        		if (strType == "treeitemcontrol" || strType == "checkboxcontrol" || strType == "combocontrol") continue;

        		var nAddRow = this.dsItem.addRow();

        		this.dsItem.setColumn(nAddRow, "CHK"	  , 1		   );
        		this.dsItem.setColumn(nAddRow, "INDEX"	  , nAddRow	   );
        		this.dsItem.setColumn(nAddRow, "COLID"	  , sCellText  );
        		this.dsItem.setColumn(nAddRow, "COLNM"	  , sHeadText  );
        		this.dsItem.setColumn(nAddRow, "HEADCELL" , nHeadCell  );
        		this.dsItem.setColumn(nAddRow, "WIDTH" 	  , nCellSize  );
        	}

        	this.dsItem.set_enableevent(true);
        	this.dsItem.set_rowposition(0);
        }

        /**
         *	fnSetSortInfo 		: 대상 그리드 숨김정보 셋팅 후 닫기
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnSetShowHide = function()
        {
        	var arrHideInfo	= new Array();

        	for (var i=0; i<this.dsItem.getRowCount(); i++)
        	{
        		var nIndex      = this.dsItem.getColumn(i, "INDEX");
                var strColId	= this.dsItem.getColumn(i, "COLID");
        		var bShowHide	= this.dsItem.getColumn(i, "CHK"  ) == "1" ? true : false;

        		var nHeadCell	= parseInt(this.dsItem.getColumn(i, "HEADCELL"));
        		var nSize       = this.dsItem.getColumn(i, "WIDTH");

        		arrHideInfo[arrHideInfo.length]	= {colid : strColId, showHide : bShowHide, cell : nHeadCell, size : nSize};
        	}

        	this.fvGrd._xfnClose(this, arrHideInfo);
        }

        /**
         *	fnAddHideInfo 		: 대상 그리드 숨김컬럼 체크
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.fnAddHideInfo = function(nRow, bShowHide)
        {
            var nIdx   = this.dsItem.getColumn(nRow, "INDEX");
        	var nRow   = this.dsItem.findRow("INDEX", nIdx);

        	this.dsItem.setColumn(nRow, "CHK", (bShowHide == false ? "0" : "1"));
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comHide_onload,this);
            this.addEventHandler("onkeydown",this.comHide_onkeydown,this);
            this.grdItem.addEventHandler("onheadclick",this.grdItem_onheadclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.dsItem.addEventHandler("oncolumnchanged",this.dsItem_oncolumnchanged,this);
        };
        this.loadIncludeScript("comHide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
