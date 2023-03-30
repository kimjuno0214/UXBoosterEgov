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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">ㄱ</Col><Col id=\"Column3\">!</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">ㄴ</Col><Col id=\"Column3\">@</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">ㄷ</Col><Col id=\"Column3\">#</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">d</Col><Col id=\"Column2\">ㄹ</Col><Col id=\"Column3\">$</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">e</Col><Col id=\"Column2\">ㅁ</Col><Col id=\"Column3\">%</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","45","82","558","198",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("sort,find,filter,move,hide,excel,fix,reset,readonly,visible,personal");
            obj.getSetter("gridTitle").set("sampleFile,1");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼0\"/><Cell col=\"1\" text=\"컬럼1\"/><Cell col=\"2\" text=\"컬럼2\"/><Cell col=\"3\" text=\"컬럼3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","45","33","95","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","145","33","95","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("sampleExcel2.xfdl", function() {
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
        this.Button03_onclick = function(obj,e)
        {
        	this.dsList.clearData();
        	var sUrl = nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC_LOC")].url;//take.getSvcUrl();
            var sSvcUrl = sUrl + "XImport.do";

        	if(this.importObj == null){
        		this.importObj = new nexacro.ExcelImportObject("Import00",this);
        		this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        		this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        		this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
        	}
        	this.importObj.set_importurl(sSvcUrl);
            //this.importObj.importData("", "[Command=getsheetlist;Output=sheetlist][Command=getsheetdata;Output=output1;Head=!A1:K1;Body=!A2:K15][Output=output2; Body=Sheet1!B7:Z207]", "ds_list=sheetlist, ds_Data1=output1, ds_Data2=output2");

            //지정한 헤더대로 들어옴
            //this.importObj.importData("","Sheet1!A1:F?","dsList");
            this.importObj.importData("","Command=getsheetdata;Output=output1;Head=Sheet1!A1:F1;Body=Sheet1!A2:F?","dsList");

            //컬럼럼 순서대로 들어옴
            //this.importObj.importData("","Command=getsheetdata;Output=output1;Body=Sheet1!A2:F?","dsList");

        };

        // 엑셀다운로드 버튼 클릭
        this.Button04_onclick = function(obj,e)
        {
        	this.Grid00.ExportExcelGrid("sampleTempleat", "Sheet1", "TEST EXCEL", "");
        };

        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	this.importObj = null;
        	trace("\n=========== onsuccess event start=============");
        	trace("\ne.eventid: " 				+ e.eventid			);
        	trace("\ne.fromobject: " 			+ e.fromobject		);
        	trace("\ne.fromreferenceobject: " 	+ e.fromreferenceobject);
        	trace("\ne.url: " 					+  e.url			);
        };

        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	trace("\n=========== onerror event start===============");
        	trace("\ne.eventid: " 				+ e.eventid			);
        	trace("\ne.fromobject: " 			+ e.fromobject		);
        	trace("\ne.fromreferenceobject: " 	+ e.fromreferenceobject);
        	trace("\ne.errorcode: " 			+  e.errorcode		);
        	trace("\ne.errormsg: " 				+ e.errormsg		);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        /*********************************************************
        * 5.1 TRANSACTION 서비스 호출 처리
         ********************************************************/

        /*********************************************************
         * 5.2 CALLBACK 콜백 처리부분
         ********************************************************/





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleFile_onload,this);
            this.Grid00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
        };
        this.loadIncludeScript("sampleExcel2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
