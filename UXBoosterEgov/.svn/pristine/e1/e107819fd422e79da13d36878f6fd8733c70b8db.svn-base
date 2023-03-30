(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpTakeTab");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","30","42","660","385",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab00","-1","2","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("tab00");
            obj.set_cssclass("btn_WF_tab02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnTab01","119","2","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("tab01");
            obj.set_cssclass("btn_WF_tab01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnTab02","239","2","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("tab02");
            obj.set_cssclass("btn_WF_tab01");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divTab00","-1","52","580","325",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("tab00");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divTab01","-1","382","580","325",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("tab01");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("false");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divTab02","-1","712","580","325",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("tab02");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_enable("false");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.divTab00.form
            obj = new Layout("default","",0,0,this.Div00.form.divTab00.form,function(p){});
            this.Div00.form.divTab00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.divTab01.form
            obj = new Layout("default","",0,0,this.Div00.form.divTab01.form,function(p){});
            this.Div00.form.divTab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.divTab02.form
            obj = new Layout("default","",0,0,this.Div00.form.divTab02.form,function(p){});
            this.Div00.form.divTab02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1024,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpTakeTab.xfdl", function() {

        this.smpTakeTab_onload = function(obj,e)
        {
        	take.TabSetting(
                this,
                "testtab",
                {"this.Div00.form.btnTab00" : this.Div00.form.divTab00 ,
                 "this.Div00.form.btnTab01" : this.Div00.form.divTab01 ,
                 "this.Div00.form.btnTab02" : this.Div00.form.divTab02},
        //          [[this.Div00.form.btnTab00,this.Div00.form.divTab00],
        //          [this.Div00.form.btnTab01,this.Div00.form.divTab01],
        //          [this.Div00.form.btnTab02,this.Div00.form.divTab02]],
        //         [{"button":this.Div00.form.btnTab00,"div":this.Div00.form.divTab00},
        //          {"button":this.Div00.form.btnTab01,"div":this.Div00.form.divTab01},
        //          {"button":this.Div00.form.btnTab02,"div":this.Div00.form.divTab02}],
                this.Div00.form.btnTab00);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpTakeTab_onload,this);
        };
        this.loadIncludeScript("smpTakeTab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
