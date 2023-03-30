(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comPdf");
            this.set_titletext("Report");
            this.set_background("#ffffff");
            this.set_border("1px solid #c0c0c0");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUbiReport", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"ubiReportFile\" type=\"STRING\" size=\"256\"/><Column id=\"ubiFileName\" type=\"STRING\" size=\"256\"/><Column id=\"ubiArg\" type=\"STRING\" size=\"256\"/><Column id=\"ubiResid\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDesign", this);
            obj.set_updatecontrol("false");
            obj._setContents("<ColumnInfo><Column id=\"type\" type=\"string\" size=\"256\"/><Column id=\"row\" type=\"string\" size=\"256\"/><Column id=\"col\" type=\"string\" size=\"256\"/><Column id=\"rowspan\" type=\"string\" size=\"256\"/><Column id=\"colspan\" type=\"string\" size=\"256\"/><Column id=\"align\" type=\"string\" size=\"256\"/><Column id=\"halignexpr\" type=\"string\" size=\"256\"/><Column id=\"valignexpr\" type=\"string\" size=\"256\"/><Column id=\"value\" type=\"string\" size=\"256\"/><Column id=\"valueexpr\" type=\"string\" size=\"256\"/><Column id=\"text\" type=\"string\" size=\"256\"/><Column id=\"background\" type=\"string\" size=\"256\"/><Column id=\"backgroundexpr\" type=\"string\" size=\"256\"/><Column id=\"bgcolor\" type=\"string\" size=\"256\"/><Column id=\"foreground\" type=\"string\" size=\"256\"/><Column id=\"foregroundexpr\" type=\"string\" size=\"256\"/><Column id=\"font\" type=\"string\" size=\"256\"/><Column id=\"fontexpr\" type=\"string\" size=\"256\"/><Column id=\"merge\" type=\"string\" size=\"256\"/><Column id=\"autosize\" type=\"string\" size=\"256\"/><Column id=\"autosizeexpr\" type=\"string\" size=\"256\"/><Column id=\"autofont\" type=\"string\" size=\"256\"/><Column id=\"autofontexpr\" type=\"string\" size=\"256\"/><Column id=\"linespace\" type=\"string\" size=\"256\"/><Column id=\"suppressing\" type=\"string\" size=\"256\"/><Column id=\"leftmargin\" type=\"string\" size=\"256\"/><Column id=\"topmargin\" type=\"string\" size=\"256\"/><Column id=\"rightmargin\" type=\"string\" size=\"256\"/><Column id=\"bottommargin\" type=\"string\" size=\"256\"/><Column id=\"leftborder\" type=\"string\" size=\"256\"/><Column id=\"leftborderstyle\" type=\"string\" size=\"256\"/><Column id=\"leftborderthickness\" type=\"string\" size=\"256\"/><Column id=\"leftbordercolor\" type=\"string\" size=\"256\"/><Column id=\"leftborderstyleexpr\" type=\"string\" size=\"256\"/><Column id=\"leftborderthicknessexpr\" type=\"string\" size=\"256\"/><Column id=\"leftbordercolorexpr\" type=\"string\" size=\"256\"/><Column id=\"rightborder\" type=\"string\" size=\"256\"/><Column id=\"rightborderstyle\" type=\"string\" size=\"256\"/><Column id=\"rightborderthickness\" type=\"string\" size=\"256\"/><Column id=\"rightbordercolor\" type=\"string\" size=\"256\"/><Column id=\"rightborderstyleexpr\" type=\"string\" size=\"256\"/><Column id=\"rightborderthicknessexpr\" type=\"string\" size=\"256\"/><Column id=\"rightbordercolorexpr\" type=\"string\" size=\"256\"/><Column id=\"topborder\" type=\"string\" size=\"256\"/><Column id=\"topborderstyle\" type=\"string\" size=\"256\"/><Column id=\"topborderthickness\" type=\"string\" size=\"256\"/><Column id=\"topbordercolor\" type=\"string\" size=\"256\"/><Column id=\"topborderstyleexpr\" type=\"string\" size=\"256\"/><Column id=\"topborderthicknessexpr\" type=\"string\" size=\"256\"/><Column id=\"topbordercolorexpr\" type=\"string\" size=\"256\"/><Column id=\"bottomborder\" type=\"string\" size=\"256\"/><Column id=\"bottomborderstyle\" type=\"string\" size=\"256\"/><Column id=\"bottomborderthickness\" type=\"string\" size=\"256\"/><Column id=\"bottombordercolor\" type=\"string\" size=\"256\"/><Column id=\"bottomborderstyleexpr\" type=\"string\" size=\"256\"/><Column id=\"bottomborderthicknessexpr\" type=\"string\" size=\"256\"/><Column id=\"bottombordercolorexpr\" type=\"string\" size=\"256\"/><Column id=\"updiagonalborder\" type=\"string\" size=\"256\"/><Column id=\"updiagonalborderstyle\" type=\"string\" size=\"256\"/><Column id=\"updiagonalborderthickness\" type=\"string\" size=\"256\"/><Column id=\"updiagonalbordercolor\" type=\"string\" size=\"256\"/><Column id=\"updiagonalborderstyleexpr\" type=\"string\" size=\"256\"/><Column id=\"updiagonalborderthicknessexpr\" type=\"string\" size=\"256\"/><Column id=\"updiagonalbordercolorexpr\" type=\"string\" size=\"256\"/><Column id=\"downdiagonalborder\" type=\"string\" size=\"256\"/><Column id=\"downdiagonalborderstyle\" type=\"string\" size=\"256\"/><Column id=\"downdiagonalborderthickness\" type=\"string\" size=\"256\"/><Column id=\"downdiagonalbordercolor\" type=\"string\" size=\"256\"/><Column id=\"downdiagonalborderstyleexpr\" type=\"string\" size=\"256\"/><Column id=\"downdiagonalborderthicknessexpr\" type=\"string\" size=\"256\"/><Column id=\"downdiagonalbordercolorexpr\" type=\"string\" size=\"256\"/><Column id=\"topleftpointexpr\" type=\"string\" size=\"256\"/><Column id=\"widthexpr\" type=\"string\" size=\"256\"/><Column id=\"heightexpr\" type=\"string\" size=\"256\"/><Column id=\"visibleexpr\" type=\"string\" size=\"256\"/><Column id=\"transperentexpr\" type=\"string\" size=\"256\"/><Column id=\"underlineexpr\" type=\"string\" size=\"256\"/><Column id=\"formatexpr\" type=\"string\" size=\"256\"/><Column id=\"maskexpr\" type=\"string\" size=\"256\"/><Column id=\"htmlconversionexpr\" type=\"string\" size=\"256\"/><Column id=\"mergeexpr\" type=\"string\" size=\"256\"/><Column id=\"summarytype\" type=\"string\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj.set_updatecontrol("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdt", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnCancel","44%",null,"57","23",null,"5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_cancel01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01","0","0","400","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","0","0","10","240",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00",null,"10","10","240","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","0",null,null,"5","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","0",null,null,"5","0","btnCancel:0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("UbiDiv","280","10","140",null,null,"45",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("");
            obj.set_visible("false");
            obj.set_border("1px solid");
            obj.set_text("comUbiViewer");
            this.addChild(obj.name, obj);

            obj = new Static("stcVertical","10","10","113","149",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("A4 세로");
            obj.set_border("1px solid");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stcHorizon","140","47","130","74",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("A4 가로");
            obj.set_border("1px solid");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.UbiDiv
            obj = new Layout("default","",0,0,this.UbiDiv.form,function(p){});
            this.UbiDiv.form.addLayout(obj.name, obj);

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
        this.registerScript("comPdf.xfdl", function() {
        /**
        *  @MenuPath    PDF, EXCEL (UBIReport)
        *  @FileName    comPdf.xfdl
        *  @Creator     glorial
        *  @CreateDate  2020.05.11
        *  @Version     1.0
        *  @Desction    UBIReport를 활용한 PDF, EXCEL 다운로드.
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.05.11      glorial	           최초 생성
        *******************************************************************************
        */

        /***************************************************************************************************
         *	FORM 변수 선언 영역
         ***************************************************************************************************/
        this.fvGrd, this.fvDst, this.fvGbn;

        /***************************************************************************************************
         *	FORM EVENT 영역 (onload)
         ***************************************************************************************************/
        this.comPdf_onload = function(obj, e)
        {
        	this.ProgId="GM00000104";
            this.ProgNm="GM00000104";

        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		var objParamInfo= this.parent.gridInfo;
                var sGubun = take.nvl(this.parent.gubun, "PDF");

        		// 대상그리드에 대한 컬럼정보 수집
        		this.fvGrd	= objParamInfo["grid"];
        		this.fvDst	= this.fvGrd.getBindDataset();
                this.fvGbn  = sGubun;
        	}
        };

        /**
         *	comPdf_onkeydown	: onkeydown Event
         *	@ return 			: N/A
         *	@ example 			: N/A
         */
        this.comPdf_onkeydown = function(obj, e)
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
        this.reportServer_onclick = function(obj,e)
        {
        	var sTitle = take.nvl(this.fvGrd.gridTitle, "");

        	this.dsUbiReport.clearData();
        	this.dsUbiReport.addRow();
        	this.dsUbiReport.setColumn(0, "ubiResid"		, "UBIHTML");
        	this.dsUbiReport.setColumn(0, "ubiArg"			, "copyright#CLEANWRAP#title#" + sTitle + "#");

            if (this.fvGbn=="PDF") {
        		this.dsUbiReport.setColumn(0, "ubiReportFile"	, (obj.name == "stcVertical") ? "template/gridreport_A4V.jrf" : "template/gridreport_A4H.jrf");
                this.dsUbiReport.setColumn(0, "ubiFileName"		, sTitle + "_" + this.fvGrd._xfnGetDate() + ".pdf");
        	} else if (this.fvGbn=="EXCEL") {
        		this.dsUbiReport.setColumn(0, "ubiReportFile"	, (obj.name == "stcVertical") ? "template/gridreport_excel_A4V.jrf" : "template/gridreport_excel_A4H.jrf");
                this.dsUbiReport.setColumn(0, "ubiFileName"		, sTitle + "_" + this.fvGrd._xfnGetDate() + ".xls");
            }

        	this.dsDesign.clearData();
        	this.dsGrid.clear();

        	var ubiGridObj	   = this.fvGrd;
        	var formatRowCount = ubiGridObj.getFormatRowCount();
        	var formatColCount = ubiGridObj.getFormatColCount();

        	var widthArray = new Array;
        	var heightArray = new Array;

        	var headBgColor = "230.230.230";	// 헤더 배경색
        	var summBgColor = "240.240.240";	// 합계 배경색
        	var i = 0;
        	var j = 0;
        	var k = 0;

        	// Grid의 Row의 높이를 도출
        	var subidx = 0;
        	var bandtype = "";
        	var prebandtype = "";
        	var bodyStartRow = 0;
        	var summStartRow = 0;

        	for( i = 0; i < formatRowCount; i++ ) {
        		bandtype = ubiGridObj.getFormatRowProperty(i, "band");
        		if( bandtype == prebandtype ) {
        			subidx++;
        		} else {
        			subidx = 0;
        		}
        		heightArray[i] = ubiGridObj.getRealRowSize(i, subidx, false);
        		prebandtype = bandtype;
        	}

        	// Grid의 Column 넓이 도출
        	var nChkIdx = ubiGridObj.getBindCellIndex("body", "CHK");
        	var nWidthArrayCnt = 0;
        	for( i = 0; i < formatColCount; i++ ) {
        		var nColSize = ubiGridObj.getRealColSize(i);
        		if(nColSize == 0 || i == nChkIdx){
        			continue;
        		}

        		widthArray[nWidthArrayCnt++] = nColSize;
        	}

        	var cellcount = 0;
        	var rowcount = 0;

        	// ------------------------------------------------------------
        	// 디자인정보를 담고있는 Dataset 생성
        	// ------------------------------------------------------------
        	var designDataset = this.dsDesign;

        	prebandtype = "";
        	var bandRow = 0;
        	var nRow = 0;
        	var rowidx = 0;
        	var colidx = 0;
        	var colspan = 0;
        	var rowspan = 0;
        	var colwidth = 0;
        	var colheight = 0;
        	var startIdx = 0;
        	var endIdx = 0;
        	var bgcolor = "";
        	var designDatasetColCnt = 0;

        	// 전체 높이와 넒이를 담은 Row 생성
        	nRow = designDataset.addRow();
        	designDataset.setColumn(nRow, "type", "widths");
        	designDataset.setColumn(nRow, "text", widthArray);
        	nRow = designDataset.addRow();
        	designDataset.setColumn(nRow, "type", "heights");
        	designDataset.setColumn(nRow, "text", heightArray);
        	designDataset.setColumn(nRow, "summarytype", ubiGridObj.summarytype);

        	for( i = 0; i < formatRowCount; i++ ) {
        		bandtype = ubiGridObj.getFormatRowProperty(i, "band");
        		if( bandtype != prebandtype ) {
        			if( bandtype == "head" ) {
        				bandRow = -1;
        				bgcolor = headBgColor;
        			} else if( bandtype == "body" ) {
        				bandRow = 0;
        				bgcolor = "";
        			} else if( bandtype == "summ" ) {
        				bandRow = -2;
        				bgcolor = summBgColor;
        			}

        			cellcount = ubiGridObj.getCellCount(bandtype);
        			designDatasetColCnt = 0;
        			for( j = 0; j < cellcount; j++ ) {
        				var nColSize = ubiGridObj.getRealColSize(j);
        				if(nColSize == 0 || nChkIdx == j){
        					continue;
        				}

        				rowidx = ubiGridObj.getCellProperty(bandtype, j, "row");
        				colidx = ubiGridObj.getCellProperty(bandtype, j, "col");
        				rowspan = ubiGridObj.getCellProperty(bandtype, j, "rowspan");
        				colspan = ubiGridObj.getCellProperty(bandtype, j, "colspan");

        				nRow = designDataset.addRow();
        				designDataset.setColumn(nRow, "type", bandtype);
        				designDataset.setColumn(nRow, "row", rowidx);
        				designDataset.setColumn(nRow, "col", (designDatasetColCnt++));
        				designDataset.setColumn(nRow, "rowspan", rowspan);
        				designDataset.setColumn(nRow, "colspan", colspan);
        				designDataset.setColumn(nRow, "align", ubiGridObj.getCellProperty(bandtype, j, "align"));

        				if( bandRow != 0 ) {
        					designDataset.setColumn(nRow, "text", ubiGridObj.getCellText(bandRow, j));
        				}
        				designDataset.setColumn(nRow, "bgcolor", bgcolor);
        				designDataset.setColumn(nRow, "leftmargin", "2");
        				designDataset.setColumn(nRow, "rightmargin", "2");
        			}
        		}
        		prebandtype = bandtype;
        	}

        	// ------------------------------------------------------------
        	// 그리드의 텍스트를 Dataset으로 생성
        	// ------------------------------------------------------------
        	cellcount = ubiGridObj.getCellCount("Body");
        	rowcount = ubiGridObj.rowcount;
        	var gridDataset = this.dsGrid;

        	// column 생성
        	var gridDatasetColCnt = 0;
        	for( i = 0; i < cellcount; i++ ) {
        		var nColSize = ubiGridObj.getRealColSize(i);
        		if(nColSize == 0 || i == nChkIdx){
        			continue;
        		}
        		gridDataset.addColumn("column" + (gridDatasetColCnt++), "string");
        	}

        	// 그리드 데이터 입력
        	for( j = 0; j < rowcount; j++ ) {
        		gridDatasetColCnt = 0;
        		gridDataset.addRow();
        		for( k = 0; k < cellcount; k++ ) {
        			var nColSize = ubiGridObj.getRealColSize(k);
        			if(nColSize == 0 || nChkIdx == k){
        				continue;
        			}
        			gridDataset.setColumn(j, (gridDatasetColCnt++), ubiGridObj.getCellText(j, k));
        		}
        	}

        	var sTranId, sUrl;

            if (this.fvGbn=="PDF")
            {
                sTranId = "exportPdf";
                sUrl	= "SVC_LOC::report/pdf.do";
            }

            if (this.fvGbn=="EXCEL")
            {
                sTranId = "exportExcel";
                sUrl	= "SVC_LOC::report/excel.do";
            }

        	var inDs	= "dsUbiReport=dsUbiReport dsDesign=dsDesign dsGrid=dsGrid";
        	var outDs	= "";
        	var params	= "";

        	take.transaction(
        		this, sTranId, sUrl, inDs, outDs, params,
        		function(sId, nErrCd, sErrMsg){
                    this.fnDownloadFdt(take.getSvcUrl() + "report/pdfdownload.do", this.dsUbiReport.getColumn(0, "ubiFileName"));
        			this.fvGrd._xfnClose(this);
        		}
        	);
        };

        //FILEDOWNTRANSFER 다운로드
        this.fnDownloadFdt = function(downloadUrl, filename){
        	this.fdt.set_url( downloadUrl);
        	this.fdt.clearPostDataList();
        	this.fdt.setPostData("ubiFileName", filename);
        	this.fdt.download();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.fvGrd._xfnClose(this);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comPdf_onload,this);
            this.btnCancel.addEventHandler("onclick",this.btnClose_onclick,this);
            this.stcVertical.addEventHandler("onclick",this.reportServer_onclick,this);
            this.stcHorizon.addEventHandler("onclick",this.reportServer_onclick,this);
        };
        this.loadIncludeScript("comPdf.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
