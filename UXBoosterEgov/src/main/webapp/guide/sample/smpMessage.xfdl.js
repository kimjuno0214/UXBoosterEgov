(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpMessage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static18","0","0",null,"30","1060",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공통 메세지 처리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","315","45","755","73",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("take.alert(현재폼, Alert Type[\"Error\", \"Info\", \"Warning\"], 메세지 코드, 메세지 파람, 팝업 아이디, 리턴받을 함수[생략가능])\r\n\r\nex) take.alert(this, \"Info\", \"ML001\", { name : \"test\", text : \"정의\"}, \"msgAlert\", \"fnMsgCallBack\");\r\n      take.alert(this, \"Info\", \"{name}가 {text}되지 않았습니다.\", { name : \"test\", text : \"정의\"}, \"msgAlert\", function(sId, bRtn){});");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert","100","45","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("take.alert()");
            this.addChild(obj.name, obj);

            obj = new Static("staAlertT","10","45","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Alert");
            this.addChild(obj.name, obj);

            obj = new Static("staConfirmT","10","140","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Confirm");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","100","140","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("take.confirm()");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","315","135","755","73",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("take.Confirm(현재폼, Confirm Type[\"Question\", \"Info\"], 메세지 코드, 메세지 파람, 팝업 아이디, 리턴받을 함수[생략불가])\r\n\r\nex) take.confirm(this, \"question\", \"ML001\", { name : \"test\", text : \"정의\"}, \"msgAlert\", \"fnMsgCallBack\");\r\n      take.confirm(this, \"question\", \"{name}가 {text}되지 않았습니다.\", { name : \"test\", text : \"정의\"}, \"msgAlert\", function(sId, bRtn){});");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("staWordT","10","230","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메세지 변환");
            this.addChild(obj.name, obj);

            obj = new Button("btnWord","100","230","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("take.getWord()");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","315","226","635","73",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("take.getWord(폼 오브젝트, 메세지아이디)\r\n\r\nex) take.getWord(this, \"MS00000063\");");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpMessage.xfdl", function() {

        this.smpMessage_onload = function(obj,e)
        {
        //     //샘플용으로 호출합니다.
        //     //실제 업무화면에서는 자동 호출됩니다.
        // 	take.transaction(
        //         this,
        //         "domainLangSvc",
        //         "SVC_LOC::/com/cmmn/loginOnLoad.do",
        //         "",
        //         "tgdsMsg=tgdsMsg",
        //         "",
        //         function (sId, nErr, sMsg)
        //         {
        //             //공통 메세지 가져오기
        //         },
        //         false);
        };

        //메세지 Alert 팝업
        this.btnAlert_onclick = function(obj,e)
        {
        	//메세지 Alert 팝업 사용 (중요 : * 팝업 아이디가 없을경우 시스템 Alert 발생)
            //take.alert(현재폼, Alert Type["Error", "Info", "Warning"], 메세지 코드, 메세지 파람, 팝업 아이디, 리턴받을 함수[생략가능])
        	take.alert(
                this,          //현재폼
                "Info",        //Alert Type["Error", "Info", "Warning"]
                "MS00000133",  //메세지 코드 //{0}을(를) 확인하시기 바랍니다.
                {0:"Alert"},     //메세지 파람
                "msgAlert",    //팝업 아이디
                "fnMsgAlertCallBack"     //리턴받을 함수 : 현재 폼에 있는 Funcion 명을 지정
                //function(sId, bRtn) { //리턴받을 함수 : Function 바로 선언
                //    //console.dir(this);
                //    trace("힘수 바로 지정\n" + sId + " --> " + bRtn + " (" + (typeof bRtn) + ")");
                //}
            );

            // 중요 : * Return 필수
            //       : * 팝업 (비동기)형태로 올라오기 때문에 하단 로직이 실행되지 않도록 Return은 필수 입니다.
            return;

            trace("test")
        };

        //메세지 Confirm 팝업
        this.btnConfirm_onclick = function(obj,e)
        {
        	//메세지 Confirm 팝업 사용 (중요 : * 팝업 아이디가 없을경우 시스템 Confirm 발생)
            //take.Confirm(현재폼, Confirm Type["Question", "Info"], 메세지 코드, 메세지 파람, 팝업 아이디, 리턴받을 함수[생략불가])
        	take.confirm(
                this,
                "question",    //Confirm Type["Question", "Info"]
                "MS00000017",  //메세지 코드 //{0}을(를) 진행하시겠습니까?
                {0:"Confirm"},   //메세지 파람
                "msgConfirm",  //팝업 아이디
                //"fnMsgConfirmCallBack"     //리턴받을 함수 : 현재 폼에 있는 Funcion 명을 지정
                function(sId, bRtn) { //리턴받을 함수 : Function 바로 선언
                    //console.dir(this);
                    trace("힘수 바로 지정\n" + sId + " --> " + bRtn + " (" + (typeof bRtn) + ")");

                    if (bRtn) //true
                    {
                        //true logic
                        trace("true logic입니다.");
                    } else { //false
                        //false logic
                        trace("false logic입니다.");
                    }
                }
            );

            // 중요 : * Return 필수
            //       : * 팝업 (비동기)형태로 올라오기 때문에 하단 로직이 실행되지 않도록 Return은 필수 입니다.
            return;

            trace("test")
        };

        //메세지 변환
        this.btnWord_onclick = function(obj,e)
        {
            var sMsg = take.getWord(this, "MS00000063");
        	take.alert(this, "Info", sMsg);
        };


        //메세지 Alert 팝업 콜백
        this.fnMsgAlertCallBack = function(sId, bRtn)
        {
            //console.dir(this);
            trace("string 함수 지정\n" + sId + " --> " + bRtn + " (" + (typeof bRtn) + ")");
        }

        //메세지 Confirm 팝업 콜백
        this.fnMsgConfirmCallBack = function(sId, bRtn)
        {
            //console.dir(this);
            trace("string 함수 지정\n" + sId + " --> " + bRtn + " (" + (typeof bRtn) + ")");

            if (bRtn) //true
            {
                //true logic
                trace("true logic입니다.");
            } else { //false
                //false logic
                trace("false logic입니다.");
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpMessage_onload,this);
            this.btnAlert.addEventHandler("onclick",this.btnAlert_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnWord.addEventHandler("onclick",this.btnWord_onclick,this);
        };
        this.loadIncludeScript("smpMessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
