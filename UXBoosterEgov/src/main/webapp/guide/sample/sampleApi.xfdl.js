(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleApi");
            this.set_titletext("(샘플)대시보드 Api");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","590","207","410","130",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("frm::dbc/dbcWeather.xfdl");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","590","183","410","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("날씨 Api");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","39","549","299",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_url("frm::dbc/dbcNews.xfdl");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","15","410",null,null,"Div01:9",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("네이버 뉴스 검색 Api");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","275","15","220",null,null,"Div01:9",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색박스 활성화 CTRL + B");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","590","15","410","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("환율 Api");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","590","39","410","130",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_url("frm::dbc/dbcExchange.xfdl");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","590","360","410","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("현재시간 Api");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_01","590","384","410","130",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_url("frm::dbc/dbcTime.xfdl");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_00
            obj = new Layout("default","",0,0,this.Div00_00.form,function(p){});
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00_01
            obj = new Layout("default","",0,0,this.Div00_01.form,function(p){});
            this.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,970,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::dbc/dbcWeather.xfdl");
            this._addPreloadList("fdl","frm::dbc/dbcNews.xfdl");
            this._addPreloadList("fdl","frm::dbc/dbcExchange.xfdl");
            this._addPreloadList("fdl","frm::dbc/dbcTime.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("sampleApi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
