(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing003");
            this.set_titletext("이미지 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1018,318);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static05","408","68",null,null,"410","10",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","607","68",null,null,"211","10",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","806","68",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"5","46","23","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","798","28","220","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","38","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("LOGIN LOGO");
            obj.set_cssclass("sta_WF_th01Limport");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","209","38","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("TOP LOGO");
            obj.set_cssclass("sta_WF_th01Limport");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","408","38",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("LOGIN 베너");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","68",null,null,"808","10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","209","68",null,null,"609","10",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","25","80","169","144",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","226","80","169","144",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","422","80","169","144",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","623","80","169","144",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04","822","80","169","144",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"279","69","23","874",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"279","69","23","674",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"280","69","23","272",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"280","69","23","475",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"280","69","23","75",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1018,318,this,function(p){});
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
        this.loadIncludeScript("publishing003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
