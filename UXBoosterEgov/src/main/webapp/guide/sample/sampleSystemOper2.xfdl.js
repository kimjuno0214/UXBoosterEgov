(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleSystemOper");
            this.set_titletext("CPU정보");
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

            obj = new Div("divBlock","5","20","246",null,null,"5",null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_background("#FFFFFF");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staText","30",null,"62","20",null,"50",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("0");
            obj.set_color("green");
            obj.set_textAlign("center");
            obj.set_text("100 %");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock0","30",null,"62","10",null,"staText:0",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock1","30",null,"62","10",null,"82",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock2","30",null,"62","10",null,"94",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock3","30",null,"62","10",null,"106",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock4","30",null,"62","10",null,"118",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock5","30",null,"62","10",null,"130",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock6","30",null,"62","10",null,"142",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock7","30",null,"62","10",null,"154",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock8","30",null,"62","10",null,"166",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staBlock9","30",null,"62","10",null,"178",null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staAchieveRateTitle","110","53","120","30",null,null,null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("11");
            obj.set_text("물리적 코어");
            obj.set_cssclass("sta_MF_TitleS01");
            obj.set_textAlign("center");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staPCores","110","76","120","50",null,null,null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_MF_NumberB");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staAchieveRateTitle00","110","125","120","30",null,null,null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("13");
            obj.set_text("CPU 개수");
            obj.set_cssclass("sta_MF_TitleS01");
            obj.set_textAlign("center");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("staLCores","110","150","120","50",null,null,null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("14");
            obj.set_text("0");
            obj.set_cssclass("sta_MF_NumberB");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("Static09","127","125","85","1",null,null,null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("15");
            obj.set_text("Static03");
            obj.set_background("darkgray");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Static("Static18","5","0",null,"30","5",null,null,null,null,null,this.divMain.form.divBlock.form);
            obj.set_taborder("16");
            obj.set_text("CPU 사용률");
            obj.set_cssclass("sta_WF_title02");
            this.divMain.form.divBlock.addChild(obj.name, obj);

            obj = new Div("divBlock00",null,"20","333",null,"5","5",null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_background("#FFFFFF");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staText","40",null,"62","20",null,"50",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("0");
            obj.set_color("green");
            obj.set_textAlign("center");
            obj.set_text("100 %");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock0","40",null,"62","10",null,"70",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock1","40",null,"62","10",null,"82",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock2","40",null,"62","10",null,"94",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock3","40",null,"62","10",null,"106",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock4","40",null,"62","10",null,"118",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock5","40",null,"62","10",null,"130",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock6","40",null,"62","10",null,"142",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock7","40",null,"62","10",null,"154",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock8","40",null,"62","10",null,"166",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staBlock9","40",null,"62","10",null,"178",null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_background("green");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staAchieveRateTitle01","125","53","130","30",null,null,null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("11");
            obj.set_text("총 메모리 (GB)");
            obj.set_cssclass("sta_MF_TitleS01");
            obj.set_textAlign("left");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staTotal","125","76",null,"50","10",null,null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("12");
            obj.set_text("0");
            obj.set_cssclass("sta_MF_NumberB");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("Static09","125","125",null,"1","10",null,null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("13");
            obj.set_text("Static03");
            obj.set_background("darkgray");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staAchieveRateTitle01_00","125","123","130","30",null,null,null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("14");
            obj.set_text("사용량  (GB)");
            obj.set_cssclass("sta_MF_TitleS01");
            obj.set_textAlign("left");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("staUse","125","146",null,"50","10",null,null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("15");
            obj.set_text("0");
            obj.set_cssclass("sta_MF_NumberB");
            obj.set_usedecorate("true");
            obj.set_textAlign("left");
            this.divMain.form.divBlock00.addChild(obj.name, obj);

            obj = new Static("Static18","5","0",null,"30","5",null,null,null,null,null,this.divMain.form.divBlock00.form);
            obj.set_taborder("16");
            obj.set_text("메모리 사용현황");
            obj.set_cssclass("sta_WF_title02");
            this.divMain.form.divBlock00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divBlock.form
            obj = new Layout("default","",0,0,this.divMain.form.divBlock.form,function(p){});
            this.divMain.form.divBlock.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divBlock00.form
            obj = new Layout("default","",0,0,this.divMain.form.divBlock00.form,function(p){});
            this.divMain.form.divBlock00.form.addLayout(obj.name, obj);

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
        this.registerScript("sampleSystemOper2.xfdl", function() {
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
        		this.fnGetOperation();
        		this.fnGetSystem();

                this.setTimer(0, 1000);
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
        			var sCores = this.dsList.getColumn(0, "CPU_CORES");
        			var sLCores = this.dsList.getColumn(0, "CPU_CNT");
        			var sCpuUse = this.dsList.getColumn(0, "CPU_USE");
        			var sMemoryUseRate = this.dsList.getColumn(0, "MEMORY_USE_RATE");
        			var sMemoryUse = this.dsList.getColumn(0, "MEMORY_USE");
        			var sMemoryTotal = this.dsList.getColumn(0, "MEMORY_TOTAL");
        			var sMemoryFree = this.dsList.getColumn(0, "MEMORY_FREE");

        			this.divMain.form.divBlock.form.staPCores.set_text(sCores);
        			this.divMain.form.divBlock.form.staLCores.set_text(sLCores);

        			this.divMain.form.divBlock00.form.staTotal.set_text(sMemoryTotal);
        			this.divMain.form.divBlock00.form.staUse.set_text(sMemoryUse);

        			//CPU사용률 차트
        			this.setCpuChart(sCpuUse);

        			//메모리사용률 차트
        			this.setMemoryChart(sMemoryUseRate);

                    //this.setWaitCursor(true);
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

        	take.transaction(this, sTranId, "SVC_LOC::viewOperation.do", "dsSearch=dsSearch", "dsList=dsList", "", "fnCallback", false);
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
        //CPU 사용률 차트 생성
        this.setCpuChart = function(sCpuUse)
        {
        	var objDiv = this.divMain.form.divBlock.form;

        	//차트 초기화
        	for( var i=0; i<10; i++ )
        	{
        		var objBlock = objDiv.components["staBlock" + i];
        		objBlock.set_height(0);
        	}

        	var sCpuUse2 = sCpuUse.split(".")[0];
        	var nFirstBlock, nSecBlock;
        	var objLastBlock;

        	objDiv.staText.set_text(sCpuUse + "%");

        	nFirstBlock = parseInt(sCpuUse2.substring(0, 1));

        	var nCpuUse = parseInt(sCpuUse2);
        	if( nCpuUse < 10 )
        	{
        		objLastBlock = objDiv.components["staBlock0"];
        		nSecBlock = nFirstBlock;
        	}
        	else
        	{
        		nSecBlock = parseInt(sCpuUse2.substring(1, 2));
        		for( var i=0; i<10; i++ )
        		{
        			var objBlock = objDiv.components["staBlock" + i];
        			if( i < nFirstBlock )
        			{
        				objBlock.set_height(10);
        			}
        		}

        		objLastBlock = objDiv.components["staBlock"+(nFirstBlock)];
        	}
        	var nHeight = 10 * (nSecBlock * 10) / 100;
        	objLastBlock.set_height(nHeight);
        }

        //메모리 사용률 차트 생성
        this.setMemoryChart = function(sMemoryUse)
        {
        	var objDiv = this.divMain.form.divBlock00.form;

        	//차트 초기화
        	for( var i=0; i<10; i++ )
        	{
        		var objBlock = objDiv.components["staBlock" + i];
        		objBlock.set_height(0);
        	}

        	var sMemoryUse2 = sMemoryUse.split(".")[0];
        	var nFirstBlock, nSecBlock;
        	var objLastBlock;

        	objDiv.staText.set_text(sMemoryUse + "%");

        	nFirstBlock = parseInt(sMemoryUse2.substring(0, 1));

        	var nMemoryUse = parseInt(sMemoryUse2);
        	if( nMemoryUse < 10 )
        	{
        		objLastBlock = objDiv.components["staBlock0"];
        		nSecBlock = nFirstBlock;
        	}
        	else
        	{
        		nSecBlock = parseInt(sMemoryUse2.substring(1, 2));
        		for( var i=0; i<10; i++ )
        		{
        			var objBlock = objDiv.components["staBlock" + i];
        			if( i < nFirstBlock )
        			{
        				objBlock.set_height(10);
        			}
        		}

        		objLastBlock = objDiv.components["staBlock"+(nFirstBlock)];
        	}
        	var nHeight = 10 * (nSecBlock * 10) / 100;
        	objLastBlock.set_height(nHeight);
        }

        /*********************************************************
        * 5.1 TRANSACTION 서비스 호출 처리
         ********************************************************/

        /*********************************************************
         * 5.2 CALLBACK 콜백 처리부분
         ********************************************************/

        this.fnGetSystem = function()
        {
            this.setWaitCursor(false);
        	take.transaction(this, "Search", "SVC_LOC::viewSystem.do", "dsSearch=dsSearch", "dsList=dsList", "", "fnCallback", false);
        }

        this.fnGetOperation = function()
        {
            this.setWaitCursor(false);
        	take.transaction(this, "Search", "SVC_LOC::viewOperation.do", "dsSearch=dsSearch", "dsList=dsList", "", "fnCallback", false);
        }

        this.sampleSystemOper_ontimer = function(obj,e)
        {
        	if (e.timerid == 0)
        	{
        		this.fnGetOperation();
        	}
        };

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
        this.loadIncludeScript("sampleSystemOper2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
