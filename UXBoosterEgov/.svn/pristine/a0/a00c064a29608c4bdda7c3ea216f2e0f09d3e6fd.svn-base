(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UbiReport");
            this.set_titletext("Common PrintForm");
            this.set_background("#ffffff");
            this.getSetter("classname").set("UbiReport");
            if (Form == this.constructor)
            {
                this._setFormPosition(895,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new UbiReport("UbiViewer","7","12",null,null,"10","10",null,null,null,null,this);
            obj.getSetter("taborder").set("0");
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
        this.registerScript("comUbiViewer.xfdl", function() {
        /************************************************************************************
        * UbiViewer 컴포넌트가 그려질 때 필요한 정보로 최상단에 선언
        ************************************************************************************/
        // 리소스를 가져올 URL (툴바 js, image..)
        this.UbiViewer.resource = take.getSvcUrl() + "ubi4/js";
        // HTML 뷰어의 리포트 통신을 담당할 URL
        this.UbiViewer.ubiserverurl = take.getSvcUrl() + "UbiServer";
        // ubiservice.xml에 등록되어 있는 리소스ID
        this.UbiViewer.key = "";
        // 기본출력일 경우에는 UBIHTML, TMS, CTMS 시스템별로 구분하여(kys)
        this.UbiViewer.resid = "UBIHTML";
        this.UbiViewer.isStreaming = false;
        // 언어 설정
        //this.UbiViewer.language = "english";
        //this.UbiViewer.usepluginsave = "true";
        // UbiViewer - Runtime 에서 이용
        // Data 통신 URL
        //this.UbiViewer.dataurl = "http://localhost:8888/newubi/UbiServer";
        // 리포트 파일 URL : 리포트 파일명을 제외한 디렉토리까지 정의
        //html일 경우에는 ubiservice.xml를 사용함 시스템별로 구분하여 폴더구성예정(kys)
        //런타임인경우만 사용함(kys)
        //this.UbiViewer.reporturl = svcurl + "/ubi4/work/";
        // DB연결정보. WAS에 등록된 JNDI명 작성.
        this.UbiViewer.datasource = "";

        this.UbiViewer.toolbar = "true";
        this.UbiViewer.scrollpage = "true";
        this.UbiViewer.scale = "100";

        this.UbiViewer.pluginprogress = true;

        this.UbiViewer.gatewayProtocolType = "1";	// Default : 1
        this.UbiViewer.isRunThread = "true";

        //멀티리포트 설정
        this.UbiViewer.multicount = 1;
        this.UbiViewer.ismultireport = false;

        this.UbiViewer.excelSkipMasterItem = true;

        /************************************************************************************
        * 기타 API
        this.UbiViewer.setUserSaveList('Image,Pdf,Docx,Xls,Pptx,Hml,Cell');
        this.UbiViewer.setUserPrintList('Ubi,Html,Pdf');
        this.UbiViewer.setHmlExtension("HWP");
        this.UbiViewer.addEventHandler('PrintEnd', this.UbiPrintEnd, this);
        this.UbiViewer.addEventHandler('ExportEnd', this.UbiExportEnd, this);
        this.UbiViewer.addEventHandler('LinkButtonDown', this.UbiLinkButtonDown, this);
        this.UbiViewer.printHTML();		// HTML PrintSet
        this.UbiViewer.printPDF();		// PDF PrintSet
        this.UbiViewer.export('PDF');	// PDF/EXCEL/EXCEL_NO/HWP/PPTX/HML/DOCX/CELL/IMAGE
        this.UbiViewer.print();			// Direct Print(전용뷰어)
        this.UbiViewer.printSet();		// PrintSet(전용뷰어)
        ***********************************************************************************/

        //폼 온로드 이벤트
        this.ComUbiViewer_onload = function(obj, e)
        {
            try {
                var sReport;
                var objReport, objParent;

                objParent = this.parent;

                var ubiIsRuntime     = take.nvl(this.parent.ubiIsRuntime,true);
        		var ubiSvcUrl    	 = take.nvl(this.parent.ubiSvcUrl,"");
                var ubiReportFile    = take.nvl(this.parent.ubiReportFile,"");
                var ubiLocalDs       = take.nvl(this.parent.ubiLocalDs,"");
                var ubiGridObj       = take.nvl(this.parent.ubiGridObj,"");
                var ubiArg           = take.nvl(this.parent.ubiArg,"");
                var ubiDirectPrint   = take.nvl(this.parent.ubiDirectPrint,"");
                var ubiDatasource    = take.nvl(this.parent.ubiDatasource,"");
                var ubiIsmultireport = take.nvl(this.parent.ubiIsmultireport,false);
                var ubiMulticount    = take.nvl(this.parent.ubiMulticount,1)
                var ubiIsVertical    = take.nvl(this.parent.ubiIsVertical, false); //세로 여부

                if(objParent instanceof Div)
                {
                    sReport = take.nvl(this.parent.report,"");

                    if (sReport=="")
                    {
        				this.sta_error.set_visible(true);
                        take.debug(this, "report 프로퍼티가 없습니다.");
                        return;
                    }

                    //report가 Object인지 여부 확인후 Object화
                    if (take.isObject(sReport))
                    {
                        objReport = sReport;
                    } else {
                        objReport = take.StringToObject(sReport);
                    }

                    //report 정상적으로 Object화 가 안된경우 ""
                    if (objReport=="")
                    {
                        take.debug(this, "report 프로퍼티가 Object 형이 아닙니다. ex) {'key0':'value0', 'key1':'value1'...}");
                        return;
                    }

                    if (objReport.hasOwnProperty("ubiIsRuntime"))     ubiIsRuntime     = take.nvl(objReport.ubiIsRuntime, true);
        			if (objReport.hasOwnProperty("ubiSvcUrl"))     	  ubiSvcUrl        = take.nvl(objReport.ubiSvcUrl, "");
                    if (objReport.hasOwnProperty("ubiReportFile"))    ubiReportFile    = take.nvl(objReport.ubiReportFile,"");
                    if (objReport.hasOwnProperty("ubiLocalDs"))       ubiLocalDs       = take.nvl(objReport.ubiLocalDs,"");
                    if (objReport.hasOwnProperty("ubiGridObj"))       ubiGridObj       = take.nvl(objReport.ubiGridObj,"");
                    if (objReport.hasOwnProperty("ubiArg"))           ubiArg           = take.nvl(objReport.ubiArg,"");
                    if (objReport.hasOwnProperty("ubiDirectPrint"))   ubiDirectPrint   = take.nvl(objReport.ubiDirectPrint,"");
                    if (objReport.hasOwnProperty("ubiDatasource"))    ubiDatasource    = take.nvl(objReport.ubiDatasource,"");
                    if (objReport.hasOwnProperty("ubiIsmultireport")) ubiIsmultireport = take.nvl(objReport.ubiIsmultireport,false);
                    if (objReport.hasOwnProperty("ubiMulticount"))    ubiMulticount    = take.nvl(objReport.ubiMulticount,1);
                    if (objReport.hasOwnProperty("ubiIsVertical"))    ubiIsVertical    = take.nvl(objReport.ubiIsVertical,false);
                }

        		// ubiservice.xml에 등록되어 있는 리소스ID
        		this.UbiViewer.key = this.fnGetRandomKey();
                this.UbiViewer.multicount = ubiMulticount;
                this.UbiViewer.ismultireport = ubiIsmultireport;

        		this.UbiViewer.reporttitle = take.getTodayTime().date + take.getTodayTime().time;
                //trace(this.parent.ubiLocalDs.saveXML());

                // 리포트가 정의되지 않았을 경우 리턴
                if (ubiIsRuntime == false)
                {
                    if( ubiReportFile == undefined )
                    {
                        take.alert(this, "Info","리포트 파일명이 정의되지 않았습니다.");
                        return;
                    }
                } else {
                    //리포트 파일이 없을때 기본 리프트 파일 설정
                    if (ubiReportFile=="")
                    {
                        if (ubiIsVertical)
                        {
                            ubiReportFile = "template/gridreport_A4V.jrf";		//리포트 파일 명 (세로)
                        } else {
                            ubiReportFile = "template/gridreport_A4H.jrf";		//리포트 파일 명 (가로)
                        }
                    }
                }
                // ---------------------------------------
                // 리포트 파라미터 설정
                // ---------------------------------------
                this.UbiViewer.jrffile = ubiReportFile;
                this.UbiViewer.arg = ubiArg;

                //현재 Form 상의 UbiViewer에서 자동 출력물(Runtime Report) 조회
                if( ubiIsRuntime == true )
                {
                    this.fnRuntimeReport(ubiGridObj, ubiDirectPrint);

                } else {
                    var data;
                    this.UbiViewer.runtimedata = "";

        			if(!take.isEmpty(ubiSvcUrl))
                    {
                        //database와 연동하여 데이터 출력
                        for( var i = 0; i < ubiSvcUrl.length; i++ )
                        {
                            data = ubiSvcUrl[i];

                            if( data.length > 7 )
                            {
                                this.UbiViewer.addTransaction2(data[7], data[0], data[1], data[2], data[3], data[4], data[5], data[6]);
                            } else {
                                this.UbiViewer.addTransaction(data[6], data[0], data[1], data[2], data[3], data[4], data[5]);
                            }
                        }
                    } else if(!take.isEmpty(ubiLocalDs)) {
                        //dataset을 넘겨서 데이터 출력
                        for( var i = 0; i < ubiLocalDs.length; i++)
                        {
                            data = ubiLocalDs[i];
                            this.UbiViewer.setDataset(data[0], data[1]);
                            //trace(this.UbiViewer.setDataset.saveXML());
                        }
                    } else {
                    }

                    if (ubiDirectPrint == "PDF")
                    {
                        this.UbiViewer.retrieve(this, "UbiPreviewEndPdf");
                    } else {
                        this.UbiViewer.retrieve(this, "UbiPreviewEnd");
                    }
                }

                //this.sta_error.set_visible(true);

        	} catch (e) {
                trace("report error : " + e);
        		this.sta_error.set_visible(true);
            }
        };

        /**
         * fnRuntimeReport : 현재 Form 상의 UbiViewer에서 자동 출력물(Runtime Report) 조회
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnRuntimeReport();
         */
        this.fnRuntimeReport = function(ubiGridObj, ubiDirectPrint)
        {
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
            for( i = 0; i < formatColCount; i++ ) {
                widthArray[i] = ubiGridObj.getRealColSize(i);
            }

            var cellcount = 0;
            var rowcount = 0;

            // ------------------------------------------------------------
            // 디자인정보를 담고있는 Dataset 생성
            // ------------------------------------------------------------
            var designDataset = this.UbiViewer.getDesignDataset(this);

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

                    for( j = 0; j < cellcount; j++ ) {
                        rowidx = ubiGridObj.getCellProperty(bandtype, j, "row");
                        colidx = ubiGridObj.getCellProperty(bandtype, j, "col");
                        rowspan = ubiGridObj.getCellProperty(bandtype, j, "rowspan");
                        colspan = ubiGridObj.getCellProperty(bandtype, j, "colspan");

                        nRow = designDataset.addRow();
                        designDataset.setColumn(nRow, "type", bandtype);
                        designDataset.setColumn(nRow, "row", rowidx);
                        designDataset.setColumn(nRow, "col", colidx);
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
            this.addChild(designDataset.name, designDataset);

            // ------------------------------------------------------------
            // 그리드의 텍스트를 Dataset으로 생성
            // ------------------------------------------------------------
            cellcount = ubiGridObj.getCellCount("Body");
            rowcount = ubiGridObj.rowcount;

            var gridDataset = new Dataset("dsGrid", this);
            this.addChild(gridDataset.name, gridDataset);

            // column 생성
            for( i = 0; i < cellcount; i++ ) {
                gridDataset.addColumn("column" + i, "string");
            }

            // 그리드 데이터 입력
            for( j = 0; j < rowcount; j++ ) {
                gridDataset.addRow();
                for( k = 0; k < cellcount; k++ ) {
                    gridDataset.setColumn(j, k, ubiGridObj.getCellText(j, k));
                }
            }
            // ------------------------------------------------------------

            // dataset SSV 전송에 필요한 정보 생성
            this.UbiViewer.setRuntimeData(designDataset, gridDataset);

            // 동적으로 생성된 Dataset 제거
            this.removeChild(designDataset.name);
            this.removeChild(gridDataset.name);

            if (ubiDirectPrint == "PDF")
            {
                this.UbiViewer.retrieve(this, "retrieveEndPdf");
            } else {
                this.UbiViewer.retrieve(this, "retrieveEnd");
            }
        };

        // 리포트 조회 후 수행
        this.UbiPreviewEnd = function()
        {
        	/*
        	// 넥사크로 런타임 사용 시 툴바의 Export 제어
        	this.UbiViewer.setVisibleToolbar("EXPORT_PDF", false); // SAVE 버튼
        	this.UbiViewer.setVisibleToolbar("EXPORT_EXCEL", false); // PRINT 버튼
        	this.UbiViewer.setVisibleToolbar("EXPORT_HWP", false); // PRINTSET 버튼
            */

            // 전용뷰어 사용 기준 페이지 : 50페이지 이상이면 전용뷰어 인쇄만 활성화 됩니다.
        	var basePageNum = 50;
        	var totalPageNum = this.UbiViewer.getTotalPage();

            try {

                if( basePageNum <= totalPageNum )
                {
                    this.UbiViewer.setEnableToolbar("PRINT_PDF", false);
                    this.UbiViewer.setEnableToolbar("PRINT_HTML", false);
                    this.UbiViewer.setEnableToolbar("PRINT_UBI", true);
                    this.UbiViewer.setPluginProgress(true);
                } else {
                    this.UbiViewer.setEnableToolbar("PRINT_PDF", true);
                    this.UbiViewer.setEnableToolbar("PRINT_HTML", true);
                    this.UbiViewer.setEnableToolbar("PRINT_UBI", true);
                    this.UbiViewer.setPluginProgress(false);
                }

                //if (ubiDirectPrint == "PDF")
                //{
                //    this.UbiViewer.exportPdf();
                //}

                //this.UbiViewer.print();
                //this.UbiViewer.aboutBox();
                //this.UbiViewer.exportPdf();
                //this.UbiViewer.printSet();

                //if(nexacro.Browser == 'Runtime') this.UbiViewer.setPluginProgress(true);

            } catch (e) {
                trace("report error= " + e);
            }
        };

        // 리포트 조회 후 수행
        this.UbiPreviewEndPdf = function()
        {
        	this.UbiViewer.exportPdf();
        };

        this.retrieveEnd = function()
        {
        	// this.UbiViewer.print();
        	//	this.UbiViewer.aboutBox();
        	//	this.UbiViewer.exportPdf();
        	//	this.UbiViewer.printSet();
        };

        this.retrieveEndPdf = function()
        {
        	this.UbiViewer.exportPdf();
        	//this.UbiViewer.print();

            //this.UbiViewer.aboutBox();
            //this.UbiViewer.exportPdf();
            //this.UbiViewer.printSet();
        };

        /************************************************************************************
        * UbiViewer에서 사용되는 key 생성 함수
        ************************************************************************************/
        this.fnGetRandomKey = function()
        {
        	var key = "";
        	var nowdate = new Date();
        	var year  = nowdate.getFullYear();
        	var month = nowdate.getMonth() + 1;
        	var day   = nowdate.getDate();
        	var hour  = nowdate.getHours();
        	var min   = nowdate.getMinutes();
        	var sec   = nowdate.getSeconds();
        	var milsec = nowdate.getMilliseconds();

        	if (("" + month).length == 1) { month = "0" + month; }
        	if (("" + day).length   == 1) { day   = "0" + day;   }
        	if (("" + hour).length  == 1) { hour  = "0" + hour;  }
        	if (("" + min).length   == 1) { min   = "0" + min;   }
        	if (("" + sec).length   == 1) { sec   = "0" + sec;   }

        	key = ('' + year + month + day + hour + min + sec + milsec) + '_' + ((Math.random() * (1 << 30)).toString(16).replace('.', ''));

        	return key;
        };

        this.fnClose = function(sRtn)
        {
            sRtn = take.nvl(sRtn,"Close");
            this.close(sRtn);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ComUbiViewer_onload,this);
        };
        this.loadIncludeScript("comUbiViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
