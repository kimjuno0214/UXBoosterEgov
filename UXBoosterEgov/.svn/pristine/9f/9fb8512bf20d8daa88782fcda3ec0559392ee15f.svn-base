(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing019");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,556);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00",null,"25","84","25","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원등록");
            obj.set_cssclass("sta_WF_chgLoginBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","95","120","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_loginLogo");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","95","180","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("아이디");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","95","220","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("비밀번호");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","95","256","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("아이디 저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","95","282","231","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이 페이지는 <fc v=\'#0066ff\'>개인정보처리방침</fc> 및 <fc v=\'#0066ff\'>서비스 약관</fc>의 \r적용을 받습니다.\r");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","95","342","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("로그인");
            obj.set_cssclass("btn_WF_login");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","95","387","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("아이디/비밀먼호 찾기");
            obj.set_cssclass("btn_WF_findInfo");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,556,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Div00_Div01_Button00_onclick,this);
        };
        this.loadIncludeScript("publishing019.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
