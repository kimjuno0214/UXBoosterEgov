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
            this.set_titletext("엑셀 업/다운로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1779,894);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList_BAK", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_NO\">1</Col><Col id=\"DEPT_NM\">a</Col><Col id=\"EMPLOYEE\">ㄱ</Col><Col id=\"TELNO\">!</Col></Row><Row><Col id=\"DEPT_NO\">2</Col><Col id=\"DEPT_NM\">b</Col><Col id=\"EMPLOYEE\">ㄴ</Col><Col id=\"TELNO\">@</Col></Row><Row><Col id=\"DEPT_NO\">3</Col><Col id=\"DEPT_NM\">c</Col><Col id=\"EMPLOYEE\">ㄷ</Col><Col id=\"TELNO\">#</Col></Row><Row><Col id=\"DEPT_NO\">4</Col><Col id=\"DEPT_NM\">d</Col><Col id=\"EMPLOYEE\">ㄹ</Col><Col id=\"TELNO\">$</Col></Row><Row><Col id=\"DEPT_NO\">5</Col><Col id=\"DEPT_NM\">e</Col><Col id=\"EMPLOYEE\">ㅁ</Col><Col id=\"TELNO\">%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"file_path\" type=\"STRING\" size=\"256\"/><Column id=\"file_nm\" type=\"STRING\" size=\"256\"/><Column id=\"file_save_nm\" type=\"STRING\" size=\"256\"/><Column id=\"import_yn\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/><Column id=\"user_cd\" type=\"STRING\" size=\"256\"/><Column id=\"file_del_yn\" type=\"STRING\" size=\"256\"/><Column id=\"attach_cd\" type=\"STRING\" size=\"256\"/><Column id=\"file_seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"col0\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col0\">1</Col><Col id=\"col1\">a</Col><Col id=\"col2\">ㄱ</Col><Col id=\"col3\">!</Col></Row><Row><Col id=\"col0\">2</Col><Col id=\"col1\">b</Col><Col id=\"col2\">ㄴ</Col><Col id=\"col3\">@</Col></Row><Row><Col id=\"col0\">3</Col><Col id=\"col1\">c</Col><Col id=\"col2\">ㄷ</Col><Col id=\"col3\">#</Col></Row><Row><Col id=\"col0\">4</Col><Col id=\"col1\">d</Col><Col id=\"col2\">ㄹ</Col><Col id=\"col3\">$</Col></Row><Row><Col id=\"col0\">5</Col><Col id=\"col1\">e</Col><Col id=\"col2\">ㅁ</Col><Col id=\"col3\">%</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnGridExport",null,"43","169","23","1141",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드(그리드기능)");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","btnGridExport:5","628","198",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("sort,find,filter,move,hide,excel,fix,reset,readonly,visible,personal");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"컬럼0\"/><Cell col=\"1\" rowspan=\"2\" text=\"컬럼1\"/><Cell col=\"2\" colspan=\"2\" text=\"컬럼\"/><Cell row=\"1\" col=\"2\" text=\"컬럼2\"/><Cell row=\"1\" col=\"3\" text=\"컬럼3\"/></Band><Band id=\"body\"><Cell text=\"bind:col0\"/><Cell col=\"1\" text=\"bind:col1\"/><Cell col=\"2\" text=\"bind:col2\"/><Cell col=\"3\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridExport00","330","Grid00:20","165","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드(그리드기능)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","330","btnGridExport00:5","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("sort,find,filter,move,hide,excel,fix,reset,readonly,visible,personal");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"29\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"컬럼0\"/><Cell col=\"1\" text=\"컬럼1\"/><Cell col=\"2\" text=\"컬럼\"/><Cell col=\"3\" text=\"컬럼\"/><Cell row=\"1\" text=\"컬럼0\"/><Cell row=\"1\" col=\"1\" text=\"컬럼1\"/><Cell row=\"1\" col=\"2\" text=\"컬럼2\"/><Cell row=\"1\" col=\"3\" text=\"컬럼3\"/></Band><Band id=\"body\"><Cell text=\"bind:col0\"/><Cell col=\"1\" text=\"bind:col1\"/><Cell col=\"2\" text=\"bind:col2\"/><Cell col=\"3\" text=\"bind:col3\"/><Cell row=\"1\" text=\"bind:col0\"/><Cell row=\"1\" col=\"1\" text=\"bind:col1\"/><Cell row=\"1\" col=\"2\" text=\"bind:col2\"/><Cell row=\"1\" col=\"3\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridExport00_00","10","Grid00:20","165","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀다운로드(그리드기능)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","btnGridExport00_00:5","300","200",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("sort,find,filter,move,hide,excel,fix,reset,readonly,visible,personal");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"29\"/><Row size=\"29\"/></Rows><Band id=\"body\"><Cell text=\"bind:col0\"/><Cell col=\"1\" text=\"bind:col1\"/><Cell col=\"2\" text=\"bind:col2\"/><Cell col=\"3\" text=\"bind:col3\"/><Cell row=\"1\" text=\"bind:col0\"/><Cell row=\"1\" col=\"1\" text=\"bind:col1\"/><Cell row=\"1\" col=\"2\" text=\"bind:col2\"/><Cell row=\"1\" col=\"3\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport",null,"43","105","23","btnGridExport:3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnGridUpload",null,"43","155","23","btnExport:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("엑셀업로드(그리드기능)");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload",null,"43","95","23","btnGridUpload:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelSampleDownload","415","533","215","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀샘플다운로드(서버엑셀파일)");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","28","616","462","174",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("Tabpage1");
            this.tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("sort,find,filter,move,hide,excel,fix,reset,readonly,visible,personal");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"컬럼0\"/><Cell col=\"1\" rowspan=\"2\" text=\"컬럼1\"/><Cell col=\"2\" colspan=\"2\" text=\"컬럼\"/><Cell row=\"1\" col=\"2\" text=\"컬럼2\"/><Cell row=\"1\" col=\"3\" text=\"컬럼3\"/></Band><Band id=\"body\"><Cell text=\"bind:col0\"/><Cell col=\"1\" text=\"bind:col1\"/><Cell col=\"2\" text=\"bind:col2\"/><Cell col=\"3\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("Tabpage2");
            this.tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("sort,find,filter,move,hide,excel,fix,reset,readonly,visible,personal");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"29\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"컬럼0\"/><Cell col=\"1\" text=\"컬럼1\"/><Cell col=\"2\" text=\"컬럼\"/><Cell col=\"3\" text=\"컬럼\"/><Cell row=\"1\" text=\"컬럼0\"/><Cell row=\"1\" col=\"1\" text=\"컬럼1\"/><Cell row=\"1\" col=\"2\" text=\"컬럼2\"/><Cell row=\"1\" col=\"3\" text=\"컬럼3\"/></Band><Band id=\"body\"><Cell text=\"bind:col0\"/><Cell col=\"1\" text=\"bind:col1\"/><Cell col=\"2\" text=\"bind:col2\"/><Cell col=\"3\" text=\"bind:col3\"/><Cell row=\"1\" text=\"bind:col0\"/><Cell row=\"1\" col=\"1\" text=\"bind:col1\"/><Cell row=\"1\" col=\"2\" text=\"bind:col2\"/><Cell row=\"1\" col=\"3\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnExport_ms",null,"611","161","23","1294",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("엑셀다운로드-다중시트");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","500","611","162","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("tabpage url 연결 시, \r\ntab.preload=true 설정 필요");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage1.form,function(p){});
            this.tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab00.Tabpage2.form
            obj = new Layout("default","",0,0,this.tab00.Tabpage2.form,function(p){});
            this.tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1779,894,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpExcel.xfdl", function() {
        /**
        *  Menu Name
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.sampleFile_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {

           }
        }

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
            switch(sId)
            {
                case "Search" : //조회 콜백
                    //Script

                    break;
                case "Save" : //조회 콜백
                    //Script

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";
        }

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {N/A}    N/A
         * @return {N/A}    N/A
         * @example this.fnSave();
         */
        this.fnSave = function()
        {
            this.fnTran("Save")
        }

        /**
         * fnDel : 삭제 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {N/A}    N/A
         * @return {N/A}    N/A
         * @example this.fnDel();
         */
        this.fnDel = function()
        {
            this.fnTran("Del")
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 엑셀업로드 버튼 클릭
        this.btnUpload_onclick = function(obj,e)
        {
            //ExcelImportObject 컴포넌트를 이용하여 엑셀 업로드
            this.dsList.clearData();
        	var sUrl = nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC")].url;//take.getSvcUrl();
            var sSvcUrl = sUrl + "XImport.do";

        	if(this.importObj == null){
        		this.importObj = new nexacro.ExcelImportObject("ExcelImportsample",this);
        		this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
                //this.importObj.set_importtype(nexacro.ImportTypes.CSV);
        		this.importObj.addEventHandler("onsuccess", this.ExcelImport_onsuccess, this);
        		this.importObj.addEventHandler("onerror", this.ExcelImport_onerror, this);
        	}
        	this.importObj.set_importurl(sSvcUrl);
            //this.importObj.importData("", "[Command=getsheetlist;Output=sheetlist][Command=getsheetdata;Output=output1;Head=!A1:K1;Body=!A2:K15][Output=output2; Body=Sheet1!B7:Z207]", "ds_list=sheetlist, ds_Data1=output1, ds_Data2=output2");

            //지정한 헤더대로 들어옴
            //this.importObj.importData("","Sheet1!A1:F?","dsList");
            this.importObj.importData("","Command=getsheetdata;Output=output1;Head=Sheet1!A1:F1;Body=Sheet1!A2:F?","dsList");

            //컬럼럼 순서대로 들어옴
            //this.importObj.importData("","Command=getsheetdata;Output=output1;Body=Sheet1!A2:F?","dsList");

        };

        this.btnGridUpload_onclick = function(obj,e)
        {
            //take grid 기능을 이용하여 엑셀 업로드
            var arrColInfo = ""; //[]
            var sType = "EXCEL"; //EXCEL, CSV
            var objOption = {     //* CSV 인 경우 적용되지 않습니다.
                Sheet    : "",    //import sheet (없으면 첫번째 시트)
                Body     : "",    //import 데이터의 엑셀 시작위치 : ex) "A2:?" (없으면 A1이 헤더라 가정하고 A2부터 import)
                Argument : "" };  //ExcelImportObject.importData의 strArgument와 동일

            //arrColInfo = ""  //없을경우 순서대로 맵핑
            arrColInfo = ["col3", "col2", "col1", "col0"]; //배열 순서대로 맵핑

        	this.Grid00.ImportExcelGrid(
                this,
                sType,
                arrColInfo,
                objOption,
                function (obj, e, sRtnMsg) //콜백 함수 (import object, event info, return message)
                {
                    trace(sRtnMsg);
                });
        };

        // 엑셀다운로드 그리드 버튼 클릭
        this.btnExport_onclick = function(obj,e)
        {
            //nexacro ExcelExportObject를 이용하여 엑셀 다운로드
            var objGrid, objExport, objExportType, objExportItemTypes, objExportItem;
            var sUrl, sFileNm;
            var nImgIdx, nExportedItem, nCnt;

            objGrid = this.Grid00;
            sFileNm = "testExcel";

            objExport = take.nvl(this["ExcelExport"],"");

            if (objExport=="")
            {
                objExport = new ExcelExportObject("ExcelExport", this);
            }

            sUrl = take.getSvcUrl() + "XExportImport.do";
            objExportType = nexacro.ExportTypes.EXCEL2007;
            objExportItemTypes = nexacro.ExportItemTypes.GRID;

        	objExport.set_exportfilename(sFileNm);
        	objExport.set_exporttype(objExportType);
        	objExport.set_exporturl(sUrl);

        	objExport.addExportItem(
                objExportItemTypes,
                objGrid,
                "Sheet1!A1",  //시작 시트 및 컬럼
                "allband",    //밴드 선택(allband,nohead,nosumm) ","로 중복 선택가능
                "allrecord",  //allrecord : 모든레코드,selectrecord : 선택된레코드
                "suppress",   //suppress, nosuppress, merge
                "allstyle",   //value, format, calendardateformat, font, color, background(color), -nexa-text-aign, -nexa-vertical-align, -nexa-border(style,color) 속성이 Export 됩니다.
                "image",      //none,url,image
                "none",
                "both",
                null );

            //objExportItem = objExport.getExportItem(objExportItemTypes, 0);
            //objExportItem.set_exportimage("image");
            //objExport.setExportItem(objExportItemTypes, 0, objExportItem);

        	objExport.addEventHandler("onsuccess", this.ExcelExport_onsuccess, this);
        	objExport.addEventHandler("onerror", this.ExcelExport_onerror, this);

        	nExportedItem = objExport.exportData();
        	trace("Number of Exported Item: " + nExportedItem);
        };

        // 엑셀다운로드 데이터셋 버튼 클릭
        // this.btnExportDs_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var objGrid, objExport, objExportType, objExportItemTypes, objExportItem;
        //     var sUrl, sFileNm;
        //     var nImgIdx, nExportedItem, nCnt;
        //
        //     objGrid = this.Grid00;
        //     sFileNm = "testExcel";
        //
        //     objExport = take.nvl(this["ExcelExport"],"");
        //
        //     if (objExport=="")
        //     {
        //         objExport = new ExcelExportObject("ExcelExport", this);
        //     }
        //
        //     sUrl = take.getSvcUrl() + "XExportImport.do";
        //     objExportType = nexacro.ExportTypes.EXCEL2007;
        //     objExportItemTypes = nexacro.ExportItemTypes.GRID;
        //
        // 	objExport.set_exportfilename(sFileNm);
        // 	objExport.set_exporttype(objExportType);
        // 	objExport.set_exporturl(sUrl);
        //
        // 	objExport.addExportItem(
        //         objExportItemTypes,
        //         objGrid,
        //         "Sheet1!A1",  //시작 시트 및 컬럼
        //         "allband",    //밴드 선택(allband,nohead,nosumm) ","로 중복 선택가능
        //         "allrecord",  //allrecord : 모든레코드,selectrecord : 선택된레코드
        //         "suppress",   //suppress, nosuppress, merge
        //         "allstyle",   //value, format, calendardateformat, font, color, background(color), -nexa-text-aign, -nexa-vertical-align, -nexa-border(style,color) 속성이 Export 됩니다.
        //         "image",      //none,url,image
        //         "none",
        //         "both",
        //         null );
        //
        //     //objExportItem = objExport.getExportItem(objExportItemTypes, 0);
        //     //objExportItem.set_exportimage("image");
        //     //objExport.setExportItem(objExportItemTypes, 0, objExportItem);
        //
        // 	objExport.addEventHandler("onsuccess", this.ExcelExport_onsuccess, this);
        // 	objExport.addEventHandler("onerror", this.ExcelExport_onerror, this);
        //
        // 	nExportedItem = objExport.exportData();
        // 	trace("Number of Exported Item: " + nExportedItem);
        // };

        // 그리드 기능으로 다운로드
        this.btnGridExport_onclick = function(obj,e)
        {
            //take grid 기능을 이용하여 엑셀 다운로드
        	this.Grid00.ExportExcelGrid(
        		"sampleTempleat",
        		"Sheet1",
        		"TEST EXCEL",
        		"");
        };

        this.btnGridExport00_onclick = function(obj,e)
        {
            //take grid 기능을 이용하여 엑셀 다운로드 (다중행 테스트)
            this.Grid00_00.ExportExcelGrid("sampleTempleat", "Sheet1", "TEST EXCEL", "");
        };

        this.btnGridExport00_00_onclick = function(obj,e)
        {
            //take grid 기능을 이용하여 엑셀 다운로드 (머지 테스트)
        	this.Grid01.ExportExcelGrid("sampleTempleat", "Sheet1", "TEST EXCEL", "");
        };

        //onsuccess Event
        this.ExcelImport_onsuccess = function(obj,  e)
        {
        	this.importObj = null;
        	trace("\n=========== onsuccess event start=============");
        	trace("\ne.eventid: " 				+ e.eventid			);
        	trace("\ne.fromobject: " 			+ e.fromobject		);
        	trace("\ne.fromreferenceobject: " 	+ e.fromreferenceobject);
        	trace("\ne.url: " 					+  e.url			);
        };

        //onerror Event
        this.ExcelImport_onerror = function(obj,  e)
        {
        	trace("\n=========== onerror event start===============");
        	trace("\ne.eventid: " 				+ e.eventid			);
        	trace("\ne.fromobject: " 			+ e.fromobject		);
        	trace("\ne.fromreferenceobject: " 	+ e.fromreferenceobject);
        	trace("\ne.errorcode: " 			+  e.errorcode		);
        	trace("\ne.errormsg: " 				+ e.errormsg		);
        };

        //Excel export onsuccess
        this.ExcelExport_onsuccess = function(obj, e)
        {
        	trace("ExcelExport_onsuccess");

            //***페이지를 벗어나지 않도록 필히 세팅 필요
            take.setBeforeUnload(this);
        }

        //Excel export onerror
        this.ExcelExport_onerror = function(obj, e)
        {
        	trace("ExcelExport_onerror --> "  );
        }

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        /*********************************************************
        * 5.1 TRANSACTION 서비스 호출 처리
         ********************************************************/

        /*********************************************************
         * 5.2 CALLBACK 콜백 처리부분
         ********************************************************/



        //엑셀 샘플 파일 다운로드
        this.btnExcelSampleDownload_onclick = function(obj,e)
        {
        /*
        	//기존 마이플랫폼의 엑셀 샘플 다운로드

        	var real_name = "Style PO_Global Excel Upload_Sample(CSC).xlsx";
        	var file_name = "Style PO_Global Excel Upload_Sample(CSC).xlsx";

        	var args = "?fileName="+ real_name;
        		args +="&uppath=ETOKEN_DRIVER" ;
        		args +="&realName="+ file_name;

        	WebBrowser0.PageUrl = G_baseURL+'FileDnCmd.do'+args;
        	WebBrowser0.Run();
        */

        	if(take.isNull(this.FileDownTransfer)){
        		var objFileDownTransfer = new nexacro.FileDownTransfer();
        		this.addChild("FileDownTransfer", objFileDownTransfer);
        	}

        	var real_name = "Style PO_Global Excel Upload_Sample(CSC).xlsx";
        	var file_name = "Style PO_Global Excel Upload_Sample(CSC).xlsx";

        	var SERVER_PATH = nexacro.getEnvironment().services["SVC_LOC"].url;
        	this.FileDownTransfer.setPostData("fileName"	, real_name);
        	this.FileDownTransfer.setPostData("uppath"		, "ETOKEN_DRIVER");
        	this.FileDownTransfer.setPostData("realName"	, file_name);
        	this.FileDownTransfer.set_url(SERVER_PATH + "FileDnCmd.do");
        	this.FileDownTransfer.download();
        };

        this.btnExport_ms_onclick = function(obj,e)
        {
        	var objExport = take.nvl(this["ExcelExport"],"");
            if (objExport=="")
            {
                objExport = new ExcelExportObject("ExcelExport", this);
            }

        	objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	objExport.set_exportfilename("sample_"+take.getTodayTime().date);
        	objExport.set_exporturl(take.getSvcUrl() + "XExportImport.do");

        	objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.tab00.tabpages[0].form.Grid00, "메인!A1");
        	objExport.addExportItem(nexacro.ExportItemTypes.GRID, this.tab00.tabpages[1].form.Grid00_00, "위탁사업!A1");

        	objExport.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleFile_onload,this);
            this.btnGridExport.addEventHandler("onclick",this.btnGridExport_onclick,this);
            this.Grid00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.btnGridExport00.addEventHandler("onclick",this.btnGridExport00_onclick,this);
            this.Grid00_00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.btnGridExport00_00.addEventHandler("onclick",this.btnGridExport00_00_onclick,this);
            this.Grid01.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
            this.btnGridUpload.addEventHandler("onclick",this.btnGridUpload_onclick,this);
            this.btnUpload.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.btnExcelSampleDownload.addEventHandler("onclick",this.btnExcelSampleDownload_onclick,this);
            this.tab00.Tabpage1.form.Grid00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.tab00.Tabpage2.form.Grid00_00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.btnExport_ms.addEventHandler("onclick",this.btnExport_ms_onclick,this);
        };
        this.loadIncludeScript("smpExcel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
