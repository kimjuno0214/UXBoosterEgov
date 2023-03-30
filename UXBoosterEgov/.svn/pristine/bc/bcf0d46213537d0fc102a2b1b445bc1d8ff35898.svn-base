(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpLibJsLoad");
            this.set_titletext("(샘플)라이브러리 호출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnLoadLibJs","129","45","131","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("JS Load");
            this.addChild(obj.name, obj);

            obj = new Button("btnJsTest","129","100","131","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("JS 사용");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","820",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업무별 공통 Javasript 사용");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staLoadLibJsT","10","45","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Javascript Load");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","275","45","300","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("take.loadLibJs(라이브러리명.js) \r\nex) take.loadLibJs(\"example.js\");");
            this.addChild(obj.name, obj);

            obj = new Static("staJsTestT","10","100","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Javascript 사용");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","275","100","300","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("라이브러리명.함수명(인자); \r\nex) example.fnTest(this,\"test\");");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10","219",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("/***************************************************************************\n *  2021.07.19 made by take ymko                                           *\n *  UXBooster Example javascript Library                                           *\n ***************************************************************************/\n\n/***************************************************************************\n * 필수 작성 요소\n ***************************************************************************/\n// 중복 방지를 위해 호출\nvar example = createNS(\"example\");\n\n// 이름 명시 명시 (load 되었는지 여부 확인할때 사용)\nexample.name = \"EXAMPLE\";\n\n/****************************************************************************************\n * 각 업무단에서 사용할 script 작성 Start\n *\n * js에 함수 작성 --> example.함수아이디         \n * \tex: example.fnTest = function(...){...};\n *\n * 업무단 함수 사용 --> example.함수(인자)  \n * \tex: example.fnTest(this, \"test\");\n *****************************************************************************************/\n\n/**\n * 업무 라이브러리 테스트\n * @param {object}\tpThis\t폼\n * @param {string}    \tsText\t텍스트 \n * @return {boolean} \t성공 여부\n */\nexample.fnTest = function(pThis, sText)\n{\n    take.alert(pThis, \"Info\", sText);\n}\n\n/***************************************************************************\n * 각 업무별 script 작성 End\n ***************************************************************************/\n");
            obj.set_readonly("false");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("staJsTestT00","10","190","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Javascript 작성 법");
            this.addChild(obj.name, obj);

            obj = new Static("staJsLoc","10","150","670","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Javascript 위치 : \"UXBooster\\nexacro\\_extlib_\\lib\\라이브러리명.js\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpLibJsLoad.xfdl", function() {
        //폼 온로드 이벤트
        this.smpLibJsLoad_onload = function(obj,e)
        {
        	//js load
            //take.loadLibJs(현재폼, js, 콜백함수);
            //비동기로 동작하여 호출후 바로 스크립트를 실행해야 할 경우 콜백 지정
            take.loadLibJs(
                this,
                "example.js"
                //"fnTest",    //function을 string으로 지정한 경우
                //this.fnTest  //function을 지정한 경우
                //function()   //function을 바로 작성한 경우
                //{
                    //example.fnTest(this, "test");
                //}
            );
        };

        //js load 버튼 클릭
        this.btnLoadLibJs_onclick = function(obj,e)
        {
        	///js load
            //take.loadLibJs(현재폼, js, 콜백함수);
            //비동기로 동작하여 호출후 바로 스크립트를 실행해야 할 경우 콜백 지정
            take.loadLibJs(
                this,
                "example.js"
                //"fnTest",    //function을 string으로 지정한 경우
                //this.fnTest  //function을 지정한 경우
                //function()   //function을 바로 작성한 경우
                //{
                    //example.fnTest(this, "test");
                //}
            );
        };

        this.btnJsTest_onclick = function(obj,e)
        {
        	// 업무 Script 호출
        	example.fnTest(this,"test");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpLibJsLoad_onload,this);
            this.btnLoadLibJs.addEventHandler("onclick",this.btnLoadLibJs_onclick,this);
            this.btnJsTest.addEventHandler("onclick",this.btnJsTest_onclick,this);
        };
        this.loadIncludeScript("smpLibJsLoad.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
