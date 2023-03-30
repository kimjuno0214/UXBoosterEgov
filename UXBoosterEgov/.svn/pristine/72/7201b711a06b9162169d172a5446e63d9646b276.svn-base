(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleSystemInfo");
            this.set_titletext("시스템정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOG_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"CPU_USE\" type=\"STRING\" size=\"256\"/><Column id=\"CPU_CORES\" type=\"STRING\" size=\"256\"/><Column id=\"CPU_LCORES\" type=\"STRING\" size=\"256\"/><Column id=\"MEMORY_USE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMORY_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"MEMORY_FREE\" type=\"STRING\" size=\"256\"/><Column id=\"MEMORY_USE_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"CPU_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CMD_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"40","80",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("시스템정보");
            obj.set_cssclass("sta_MF_Title");
            obj.set_verticalAlign("middle");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnReload",null,"10","20","20","55",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_reset01");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnHelp",null,"10","20","20","30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_advice01");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnView",null,"10","20","20","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_more");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divMain","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staToday","5","0","100","15",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Date");
            obj.set_text("기준날짜(년,월,일)");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staUnit",null,"0","100","15","5",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("기준(단위, 출처등)");
            obj.set_cssclass("sta_MF_Unit");
            obj.set_textAlign("right");
            this.divMain.addChild(obj.name, obj);

            obj = new TextArea("taData","5","34",null,null,"5","5",null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleSystemInfo.xfdl", function() {
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
        this.sampleSystemOper_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		this.fnGetInfo();
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
        			var sTxt = this.dsList.getColumn(0, "LOG_TXT");
        			this.divMain.form.taData.set_value(sTxt);

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

        	this.fnGetInfo();
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

        this.fnGetInfo = function()
        {
        	take.transaction(this, "Search", "SVC_LOC::viewOperation2.do", "dsSearch=dsSearch", "dsList=dsList", "", "fnCallback");
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleSystemOper_onload,this);
            this.addEventHandler("ontimer",this.sampleSystemOper_ontimer,this);
            this.divTop.form.btnReload.addEventHandler("onclick",this.divTop_btnReload_onclick,this);
            this.divTop.form.btnHelp.addEventHandler("onclick",this.divTop_btnHelp_onclick,this);
            this.divTop.form.btnView.addEventHandler("onclick",this.divTop_btnView_onclick,this);
        };
        this.loadIncludeScript("sampleSystemInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
