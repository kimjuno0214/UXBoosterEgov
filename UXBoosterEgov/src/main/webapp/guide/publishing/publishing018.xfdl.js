(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing018");
            this.set_titletext("로그인 Main");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","150","72","1000","556",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","580","556",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_url("guide::publishing/loginBanner.xfdl");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","580","0","420","556",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_loginBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00",null,"25","84","25","25",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("회원등록");
            obj.set_cssclass("sta_WF_chgLoginBox");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","95","120","231","40",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_loginLogo");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","95","180","231","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("아이디");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","95","220","231","30",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("비밀번호");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","95","256","150","20",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("아이디 저장");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","95","282","231","50",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("이 페이지는 <fc v=\'#0066ff\'>개인정보처리방침</fc> 및 <fc v=\'#0066ff\'>서비스 약관</fc>의 \r적용을 받습니다.\r");
            obj.set_usedecorate("true");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","95","342","231","40",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("로그인");
            obj.set_cssclass("btn_WF_login");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","95","387","231","40",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("아이디/비밀먼호 찾기");
            obj.set_cssclass("btn_WF_findInfo");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","10","249","37","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_loginLeft");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"249","37","66","440",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_loginRight");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","1200","70","420","556",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_loginBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"25","84","25","25",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_cssclass("sta_WF_chgLoginBox");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","95","79","231","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_loginLogo");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","95","129","231","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_displaynulltext("이름");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","95","169","231","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("아이디");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","95","365","220","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("UXBooster 시스템 이용약관에 동의함.");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","95","421","231","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_WF_login");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","95","466","231","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_findInfo");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","95","209","231","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("비밀번호");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","95","249","231","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("비밀번호확인");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit04","95","289","231","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("정보1");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05","95","329","231","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_displaynulltext("정보2");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","95","385","220","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("개인정보처리 동의");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","guide::publishing/loginBanner.xfdl");
        };
        
        // User Script
        this.registerScript("publishing018.xfdl", function() {

        this.Div00_Div01_Button00_onclick = function(obj,e)
        {
        	//
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Div01.form.Button00.addEventHandler("onclick",this.Div00_Div01_Button00_onclick,this);
        };
        this.loadIncludeScript("publishing018.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
