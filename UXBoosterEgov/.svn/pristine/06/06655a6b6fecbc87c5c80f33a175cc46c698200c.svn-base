(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMdiPopUp");
            this.set_titletext("UXBooster");
            if (Form == this.constructor)
            {
                this._setFormPosition(1195,745);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_async("false");
            obj.set_visible("true");
            obj.set_url("frm::frmWork.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static11",null,"181","13","7","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_Guide_Width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static12",null,"168","13","12","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("13");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1195,745,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::frmWork.xfdl");
        };
        
        // User Script
        this.registerScript("frmMdiPopUp.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
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
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * frmMdiPopUp_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.frmMdiPopUp_onload = function(obj,e)
        {
            var sUrl = this.parent.Url;
            var sProgNm = this.parent.ProgNm;
            var sProgId = this.parent.ProgId;
            var sUserParam = this.parent.UserParam;
        	var objWorkDiv = this.divWork;

            objWorkDiv.UserParam = sUserParam;
            objWorkDiv.ProgId = sProgId;
        	//objWorkDiv.ManualUrl = sManualUrl;


            objWorkDiv.form.divForm.ProgId = sProgId;
            objWorkDiv.form.divForm.ProgNm = sProgNm;
            objWorkDiv.form.divForm.FormNm = sProgNm;
            objWorkDiv.form.divForm.UserParam = sUserParam;
            //trace("objWorkDiv.form.divForm.ProgId --> " + objWorkDiv.form.divForm.ProgId);
            //메뉴 Url 연결
            objWorkDiv.form.divForm.set_url(sUrl);

            objWorkDiv.form.divForm.form.ProgId = sProgId;
            objWorkDiv.form.divForm.form.ProgNm = sProgNm;
            objWorkDiv.form.divForm.form.FormNm = sProgNm;
            objWorkDiv.form.divForm.form.UserParam = sUserParam;
            //trace(" objWorkDiv.form.divForm.form.UserParam --> " + objWorkDiv.form.divForm.form.UserParam);

            objWorkDiv.form.ProgId = sProgId;

            //Work Form에 메뉴명 세팅
            objWorkDiv.form.staTitle.set_text(sProgNm + "(" + sProgId +")");

            objWorkDiv.form.fnBtnRole();
        };

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        //N/A

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        //N/A

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //N/A
        /**
        * divComBtn_button_onclick : 공통 버튼 클릭
        */

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam,nParam)
        {
            //Script
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmMdiPopUp_onload,this);
        };
        this.loadIncludeScript("frmMdiPopUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
