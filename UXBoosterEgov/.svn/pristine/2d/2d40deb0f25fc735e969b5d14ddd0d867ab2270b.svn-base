(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleExcel");
            this.set_titletext("엑셀다운로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">2</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">한글테스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelData", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"PRGRSTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLUMN0\">1</Col><Col id=\"COLUMN1\">1</Col><Col id=\"COLUMN2\">1</Col><Col id=\"COLUMN3\">1</Col></Row><Row><Col id=\"COLUMN0\">2</Col><Col id=\"COLUMN1\">2</Col><Col id=\"COLUMN2\">2</Col><Col id=\"COLUMN3\">2</Col></Row><Row><Col id=\"COLUMN0\">3</Col><Col id=\"COLUMN1\">3</Col><Col id=\"COLUMN2\">3</Col><Col id=\"COLUMN3\">3</Col></Row><Row><Col id=\"COLUMN0\">4</Col><Col id=\"COLUMN1\">4</Col><Col id=\"COLUMN2\">4</Col><Col id=\"COLUMN3\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelDataImport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","0","10",null,null,"141",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","141",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","10","0",null,"10","-10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","10",null,"540","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload","10","4","120","51",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("대용량\r\n엑셀다운로드");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","145","20","235","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("SampleController.java - createExcel 참고");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdExcel","170","213","780","147",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsExcel");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGridExcel","10","213","140","39",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("그리드 엑셀\r\n(userProperty 필요없음)");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGridExcelRight","10","376","140","104",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("그리드 우클릭 엑셀\r\nuserProperty 필요\r\ntakegrid\r\ngridTitle\r\n\r\n권한-엑셀 필요");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdExcelRight","170","376","780","147",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsExcel");
            obj.getSetter("takegrid").set("popup,excel");
            obj.getSetter("gridTitle").set("그리드제목입니다");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"expr:Column2 == &quot;1&quot; ? &quot;ggg&quot; : &quot;aaaaaaaa&quot;\" cssclass=\"expr:Column2 == &quot;1&quot; ? &quot;ggg&quot; : &quot;aaaaaaaa&quot;\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDownloadCSV","10","58","120","51",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("대용량\r\nCSV 다운로드");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGridCsv","171","306","140","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("그리드 csv 다운로드");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGridCsvImport","171","330","140","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("그리드 csv 업로드");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGridPdf","10","254","140","39",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("그리드 PDF\r\n(userProperty 필요없음)");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divExcel","510","20","98","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_url("frm::com/comExcel.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divExcelUpDown","10","560",null,"280","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDownload","10","10","140","59",null,null,null,null,null,null,this.divExcelUpDown.form);
            obj.set_taborder("0");
            obj.set_text("엑셀템플릿\r\n다운로드");
            this.divExcelUpDown.addChild(obj.name, obj);

            obj = new Grid("grdTemplate","171","11","780","121",null,null,null,null,null,null,this.divExcelUpDown.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsExcelData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"COLUMN0\"/><Cell col=\"1\" text=\"COLUMN1\"/><Cell col=\"2\" text=\"COLUMN2\"/><Cell col=\"3\" text=\"COLUMN3\"/><Cell col=\"4\" text=\"PRGRSTS\"/></Band><Band id=\"body\"><Cell text=\"bind:COLUMN0\"/><Cell col=\"1\" text=\"bind:COLUMN1\"/><Cell col=\"2\" text=\"bind:COLUMN2\"/><Cell col=\"3\" text=\"bind:COLUMN3\"/><Cell col=\"4\" text=\"bind:PRGRSTS\"/></Band></Format></Formats>");
            this.divExcelUpDown.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload","10","71","140","59",null,null,null,null,null,null,this.divExcelUpDown.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            this.divExcelUpDown.addChild(obj.name, obj);

            obj = new Grid("grdUpload","180","700","780","121",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsExcelDataImport");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divExcel
            obj = new Layout("default","",0,0,this.divExcel.form,function(p){});
            this.divExcel.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divExcelUpDown.form
            obj = new Layout("default","",0,0,this.divExcelUpDown.form,function(p){});
            this.divExcelUpDown.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,970,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("(대용량)엑셀다운로드");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comExcel.xfdl");
        };
        
        // User Script
        this.registerScript("sampleExcel.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.form_onload = function(obj,e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        	}
        };

        this.divDetail_btnDownload_onclick = function(obj,e)
        {
        	this.divExcel.form.fnWebDownloadPost(
        		take.getSvcUrl() + "sample/createExcel.do"
        		, "한글테스트test.xlsx"
        		, {
        			  param1 : "test1"
        			, param2 : "test2"
        		}
        	);
        };

        this.divDetail_btnGridExcel_onclick = function(obj,e)
        {
        	//ExportExcelGrid 파일명, 시트명, 타이틀명
        	this.divDetail.form.grdExcel.ExportExcelGrid( "test"
        								, "test1시트"
        								, "제목입니다.");
        };


        this.divDetail_btnGridPdf_onclick = function(obj,e)
        {
        	//ExportPdfGrid
        	//this.divDetail.form.grdExcel.gridTitle = "sldfkjsldkfj";
        	this.divDetail.form.grdExcel.ExportPdfGrid("PDF제목");
        };

        this.divDetail_btnGridCsv_onclick = function(obj,e)
        {
        	this.setWaitCursor(true);

        	var fnBeforeUnload = (nexacro._Browser != "Runtime") ? window.onbeforeunload : null;

        	var sFileName = "CSV템플릿";
            var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";
        	var exportObj = new ExcelExportObject("XExport", this);

        	exportObj.addEventHandler("onsuccess",
        		function(obj, successEvent) {
        			//다운로드 성공
        			this.setWaitCursor(false);

        			if (fnBeforeUnload != "null"){
        				window.onbeforeunload = null;
        				nexacro._OnceCallbackTimer.callonce(
        					this,
        					function(){
        						window.onbeforeunload = fnBeforeUnload;
        					},
        					100
        				);
        			}
        		},
        	this);

        	exportObj.addEventHandler("onerror",
        		function (obj, errorEvent) {
        			//다운로드 실패
        			this.setWaitCursor(false);
        	   },
        	this);

        	exportObj.set_exporturl(sSvcUrl);
        	exportObj.set_exporttype(nexacro.ExportTypes.CSV);
        	exportObj.set_exportfilename(sFileName);
        	exportObj.set_exporteventtype("itemrecord");
        	exportObj.set_exportuitype("none");
        	exportObj.set_exportmessageprocess("%d[%d/%d]");

        	// 익스포트할 그리드 추가
        	exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divExcelUpDown.form.grdTemplate, "Sheet1!A1", "allband", "allrecord");
        	// 익스포트
        	var result = exportObj.exportData();
        };

        this.divDetail_btnGridCsvImport_onclick = function(obj,e)
        {
        	this.setWaitCursor(true);
        	this.dsExcelDataImport.clear();

        	if(this.all["XImport"])
        	{
        		var objDel = this.removeChild("XImport");
        			objDel.destroy();
        			objDel = null;
        	}
            var objImport = new nexacro.ExcelImportObject("XImport", this);
            var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";

            objImport.set_importtype(nexacro.ImportTypes.CSV);
            objImport.addEventHandler("onsuccess",
        		function(obj, successEvent) {
        			this.setWaitCursor(false);
        			take.alert(this, "Info", "CSV 업로드 성공");
        		},
        	this);

            objImport.addEventHandler("onerror",
        		function(obj, errorEvent) {
        			this.setWaitCursor(false);
        			take.alert(this, "Info", "CSV 업로드 실패" + errorEvent.errormsg);
        		},
        	this);

        	objImport.set_importurl(sSvcUrl);
        	this.alert('Import 할 파일의 형식이 CSV 인 경우 Import 할 영역이 적용되지 않습니다.');
        	//objImport.importData("", "Sheet1!A2", "dsExcel=output1");
        	objImport.importData("", "[command=getsheetdata;output=outDs;body=Sheet1!A2;]", "[dsExcel=outDs]");
        	objImport = null;
        };


        this.divDetail_btnDownloadCSV_onclick = function(obj,e)
        {
        	//쿼리명, 파일명, 파라미터
        	this.divExcel.form.fnWebDownloadPost(
        		  take.getSvcUrl() + "sample/csv.do"
        		, "한글테스트test.csv"
        		, {
        		      namespace : "Sample.sampleTableSelect"
        			, param1 : "test1"
        			, param2 : "test2"
        		}
        	);
        };

        this.divExcelUpDown_btnExcelDownload_onclick = function(obj,e)
        {
        	this.setWaitCursor(true);

        	var fnBeforeUnload = (nexacro._Browser != "Runtime") ? window.onbeforeunload : null;

        	var sFileName = "엑셀템플릿";
            var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";
        	var exportObj = new ExcelExportObject("XExport", this);

        	exportObj.addEventHandler("onsuccess",
        		function(obj, successEvent) {
        			//다운로드 성공
        			this.setWaitCursor(false);
        			if (fnBeforeUnload != "null"){
        				window.onbeforeunload = null;
        				nexacro._OnceCallbackTimer.callonce(
        					this,
        					function(){
        						window.onbeforeunload = fnBeforeUnload;
        					},
        					100
        				);
        			}
        		},
        	this);

        	exportObj.addEventHandler("onerror",
        		function (obj, errorEvent) {
        			//다운로드 실패
        			this.setWaitCursor(false);
        	   },
        	this);

        	exportObj.set_exporturl(sSvcUrl);
        	exportObj.set_exporttype(nexacro.ExportTypes.EXCEL);
        	exportObj.set_exportfilename(sFileName);
        	exportObj.set_exporteventtype("itemrecord");
        	exportObj.set_exportuitype("none");
        	exportObj.set_exportmessageprocess("%d[%d/%d]");

        	// 익스포트할 그리드 추가
        	exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.divExcelUpDown.form.grdTemplate, "Sheet1!A1", "allband", "allrecord");
        	// 익스포트
        	var result = exportObj.exportData();
        };


        this.divExcelUpDown_btnExcelUpload_onclick = function(obj,e)
        {
        	this.dsExcelDataImport.clear();

        	if(this.all["XImport"])
        	{
        		var objDel = this.removeChild("XImport");
        			objDel.destroy();
        			objDel = null;
        	}
            var objImport = new nexacro.ExcelImportObject("XImport", this);
            var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";

            objImport.set_importtype(nexacro.ImportTypes.EXCEL);
            objImport.addEventHandler("onsuccess",
        		function(obj, successEvent) {
        			take.alert(this, "Info", "엑셀 업로드 성공\n서버로 전송합니다.");

        			this.grdUpload.createFormat();

        			//서버로 전송
        			take.transaction
        			(
        				this
        				, "saveExcel"
        				, "SVC_LOC::sample/saveExcel.do"
        				, "dsExcelDataImport=dsExcelDataImport"
        				, "dsExcelData=outDs"
        				, "PARAMETER1='1' PARAMETER2='2'"
        				, function(sId, nErrCd, sErrMsg){
        					if( sErrMsg == "SUCC" )
        					{
        						take.alert(this, "Info", "완료");
        					} else {
        						take.alert(this, "Error", sErrMsg);
        					}
        				}
        			);
        		},
        	this);

            objImport.addEventHandler("onerror",
        		function(obj, errorEvent) {
        			take.alert(this, "Info", "엑셀 업로드 실패" + errorEvent.errormsg);
        		},
        	this);

        	objImport.set_importurl(sSvcUrl);
        	objImport.importData("", "[Command=getsheetdata;head=Sheet1!A1:E1;body=Sheet1!A2]", "dsExcelDataImport");
        	objImport = null;
        };
        this.divDetail_btnGridExcelRight_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divDetail.form.btnDownload.addEventHandler("onclick",this.divDetail_btnDownload_onclick,this);
            this.divDetail.form.btnGridExcel.addEventHandler("onclick",this.divDetail_btnGridExcel_onclick,this);
            this.divDetail.form.btnDownloadCSV.addEventHandler("onclick",this.divDetail_btnDownloadCSV_onclick,this);
            this.divDetail.form.btnGridCsv.addEventHandler("onclick",this.divDetail_btnGridCsv_onclick,this);
            this.divDetail.form.btnGridCsvImport.addEventHandler("onclick",this.divDetail_btnGridCsvImport_onclick,this);
            this.divDetail.form.btnGridPdf.addEventHandler("onclick",this.divDetail_btnGridPdf_onclick,this);
            this.divExcelUpDown.form.btnExcelDownload.addEventHandler("onclick",this.divExcelUpDown_btnExcelDownload_onclick,this);
            this.divExcelUpDown.form.btnExcelUpload.addEventHandler("onclick",this.divExcelUpDown_btnExcelUpload_onclick,this);
        };
        this.loadIncludeScript("sampleExcel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
