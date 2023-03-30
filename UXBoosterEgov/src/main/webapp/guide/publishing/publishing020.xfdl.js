(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing020");
            this.set_titletext("회원등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,556);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","95","79","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_loginLogo");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","95","129","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("이름");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","95","169","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("아이디");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","95","365","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("UXBooster 시스템 이용약관에 동의함.");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","95","421","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_WF_login");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","95","466","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_findInfo");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","95","209","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("비밀번호");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","95","249","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaynulltext("비밀번호확인");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","95","289","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("정보1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","95","329","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_displaynulltext("정보2");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","95","385","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("개인정보처리 동의");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"25","84","25","25",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("로그인");
            obj.set_cssclass("sta_WF_chgLoginBox");
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

        };
        this.loadIncludeScript("publishing020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
