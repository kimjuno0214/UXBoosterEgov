(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLoginS03");
            this.set_titletext("로그인 베너 서브화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,556);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBanner00","0","0","580","556",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staBanner02","0","0","580","556",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("staBanner01","0","0","580","556",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",580,556,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLoginS03.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    Login > Banner
        *  @FileName    MN090.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.10.22
        *  @Version     1.0
        *  @Desction    로그인 베너
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.10.22      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        //N/A

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //N/A

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload등)
         ********************************************************/
        /**
        * form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.loginBanner_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		//var sUrl = nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC_LOC")].url;
                var sUrl, sDateTime;
                var objDateTime = take.getTodayTime();

                sUrl = take.getSvcUrl();
                sDateTime = objDateTime.date + objDateTime.time;

        		for( var i=0; i<3; i++ ){
        			var sImg = "imgTakeBanner0"+(i+1)+".png";
        			this.components["staBanner0"+i].set_background('url("'+sUrl+'/images/banner/'+ sImg + '?' + sDateTime + '") no-repeat center center');
        		}

                this.setTimer(999,5000);
           }
        }

        /**
        * loginBanner_ontimer 타이머 이벤트
        */
        this.loginBanner_ontimer = function(obj,e)
        {
            if (e.timerid==999)
            {
                var nStep = this.getStepIndex();

                if (nStep>=this.getStepCount()-1)
                {
                    this.setStepIndex(0);
                } else {
                    this.setStepIndex(nStep+1);
                }
            }
        };

        /**
        * loginBanner_onclose 폼 닫기 이벤트
        */
        this.loginBanner_onclose = function(obj,e)
        {
        	this.killTimer(999);
        };
        /*********************************************************
         * 2 필수 FUNCTION 영역 (fnSearch, fnAddRow, fnSave, fnDelRow, fnExcel...)
         ********************************************************/
        //N/A

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //N/A

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.loginBanner_onload,this);
            this.addEventHandler("ontimer",this.loginBanner_ontimer,this);
            this.addEventHandler("onclose",this.loginBanner_onclose,this);
        };
        this.loadIncludeScript("frmLoginS03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
