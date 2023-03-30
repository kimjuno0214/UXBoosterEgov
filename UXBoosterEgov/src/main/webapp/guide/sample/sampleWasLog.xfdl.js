(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleWasLog");
            this.set_titletext("WAS로그확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1779,894);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">a</Col><Col id=\"Column2\">ㄱ</Col><Col id=\"Column3\">!</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">b</Col><Col id=\"Column2\">ㄴ</Col><Col id=\"Column3\">@</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">c</Col><Col id=\"Column2\">ㄷ</Col><Col id=\"Column3\">#</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">d</Col><Col id=\"Column2\">ㄹ</Col><Col id=\"Column3\">$</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">e</Col><Col id=\"Column2\">ㅁ</Col><Col id=\"Column3\">%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CMD_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","152","15","124","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10","66",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCmd","284","12","390","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","12","15","124","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("시스템");
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
        this.registerScript("sampleWasLog.xfdl", function() {
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
        		//this.fnGetOperation();

                //this.setTimer(0, (60000*5));
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
        			this.TextArea00.set_value(this.dsList.getColumn(0, "LOG_TXT"));

                    break;
                case "System" : //조회 콜백
                    //Script
        			this.TextArea00.set_value(this.dsList.getColumn(0, "LOG_TXT"));

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

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "CMD_TXT", this.edtCmd.value);

        	take.transaction(this, sTranId, "SVC_LOC::getCommandData.do", "dsSearch=dsSearch", "dsList=dsList", "", "fnCallback");
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


        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        /*********************************************************
        * 5.1 TRANSACTION 서비스 호출 처리
         ********************************************************/

        /*********************************************************
         * 5.2 CALLBACK 콜백 처리부분
         ********************************************************/





        this.Button00_onclick = function(obj,e)
        {
        	this.fnSearch("Search");
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	take.transaction(this, "System", "SVC_LOC::viewOperation.do", "dsSearch=dsSearch", "dsList=dsList", "", "fnCallback");
        };

        this.sampleWasLog_ontimer = function(obj,e)
        {
        	if (e.timerid == 0)
        	{
        		this.fnGetOperation();
        	}
        };

        this.fnGetOperation = function()
        {
        	take.transaction(this, "System", "SVC_LOC::viewOperation.do", "dsSearch=dsSearch", "dsList=dsList", "", "fnCallback");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleFile_onload,this);
            this.addEventHandler("ontimer",this.sampleWasLog_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("sampleWasLog.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
