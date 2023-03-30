(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLoginP02");
            this.set_titletext("로그인 개인정보처리약관 팝업");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPolicy", this);
            obj._setContents("<ColumnInfo><Column id=\"POLICY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSystem","10","40",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","0","10","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","10","0","220","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSystem","16","46",null,"188","16",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","10",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("시스템 이용약관");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staAgree1","10","239",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAgree1","16","244","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("동의합니다");
            obj.set_falsevalue("X");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("staPersonalInfo","10","299",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtPersonalInfo","16","305",null,"188","16",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staAgree2","10","498",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAgree2","16","503","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("동의합니다");
            obj.set_falsevalue("X");
            obj.set_truevalue("Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","269",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("개인정보이용동의");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Button("btnAgree","196","538","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","303","538","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txtSystem","value","dsPolicy","POLICY_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txtPersonalInfo","value","dsPolicy","PRIVACY_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLoginP02.xfdl", function() {
        /**
        *  개인정보처리인증
        *
        *  @MenuPath    메인로그인 > 개인정보처리인증
        *  @FileName    MN020PT01.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.10.21
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.10.21      전영찬             최초 생성
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
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInit();
           }
        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        this.btnAgree_onclick = function(obj,e)
        {
        	if(this.chkAgree1.value == "X") {
                alert("시스템이용약관에 대해 동의해주세요.");
                return;
            }

            if(this.chkAgree2.value == "X") {
                alert("개인정보이용동의 대해 동의해주세요.");
                return;
            }

        //     if (take.confirm(this, "question", "동의확인, 회원가입을 진행하시겠습니까?"))
        //     {
        //     	//
        //         this.close();
        //     }
            var sRtn = this.chkAgree1.value +','+ this.chkAgree1.value;
            this.close(sRtn);
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @param  {String} N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
            if(this.parent.sFlag == "Info") {
                this.chkAgree1.set_visible(false);
                this.staAgree1.set_visible(false);
                this.txtSystem.set_height(219);
                this.staSystem.set_height(231);

                this.chkAgree2.set_visible(false);
                this.staAgree2.set_visible(false);
                this.txtPersonalInfo.set_height(259);
                this.staPersonalInfo.set_height(271);

                this.btnAgree.set_visible(false);
                this.btnCancel.set_visible(false);
            } else {
                this.chkAgree1.set_value(this.parent.sChk1);
                this.chkAgree2.set_value(this.parent.sChk2);
            }

        	take.transaction(this, "Search", "SVC_LOC::/mn/policy.do", "", "dsPolicy=dsPolicy", "SYSTEM_ID=S000000001", "fnCallback");
        };

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
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

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

            switch(sId)
            {
                case "Search" : //조회 콜백
                    //Script
                    break;
                default :
                    break;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnAgree.addEventHandler("onclick",this.btnAgree_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("frmLoginP02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
