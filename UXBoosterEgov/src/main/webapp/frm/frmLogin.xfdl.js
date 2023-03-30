(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divCenter","140","90","1000","556",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divBanner","0","0","580","556",null,null,null,null,null,null,this.divCenter.form);
            obj.set_taborder("0");
            obj.set_url("frm::frmLoginS03.xfdl");
            this.divCenter.addChild(obj.name, obj);

            obj = new Div("divLogIn","580","0","420","556",null,null,null,null,null,null,this.divCenter.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_loginBg");
            obj.set_url("frm::frmLoginS01.xfdl");
            this.divCenter.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCenter.form.divBanner
            obj = new Layout("default","",0,0,this.divCenter.form.divBanner.form,function(p){});
            this.divCenter.form.divBanner.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCenter.form.divLogIn
            obj = new Layout("default","",0,0,this.divCenter.form.divLogIn.form,function(p){});
            this.divCenter.form.divLogIn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCenter.form
            obj = new Layout("default","",0,0,this.divCenter.form,function(p){});
            this.divCenter.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::frmLoginS03.xfdl");
            this._addPreloadList("fdl","frm::frmLoginS01.xfdl");
        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    Login Page
        *  @FileName    MN010.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.10.22
        *  @Version     1.0
        *  @Desction    Login Page
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
        this.MN010_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnCenter(this.divCenter);
           }
        }

        //폼 리사이즈 이벤트
        this.MN010_onsize = function(obj,e)
        {
        	this.fnCenter(this.divCenter);
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
         * fnCenter : 리사이즈에 따라 탑 이미지 Left 좌표 변경
         * @param  {Object} objDiv Div
         * @return {N/A}    N/A
         * @example this.fnCenter(this.div00);
         */
        this.fnCenter = function(objDiv)
        {
            var nLeft, nTop;
        	var nFormWidth, nFormHeight, nCompWidth, nCompHeight;

            nFormWidth = this.getOffsetWidth();
            nFormHeight = this.getOffsetHeight();

            nCompWidth = nexacro.toNumber(objDiv.width);
            nCompHeight = nexacro.toNumber(objDiv.height);

            if (nFormWidth>=nCompWidth)
            {
                nLeft = (nFormWidth - nCompWidth)/2;
                objDiv.set_left(nLeft);
            }

            if (nFormHeight>=nCompHeight)
            {
                nTop = (nFormHeight - nCompHeight)/2;
                objDiv.set_top(nTop);
            }
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MN010_onload,this);
            this.addEventHandler("onsize",this.MN010_onsize,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
