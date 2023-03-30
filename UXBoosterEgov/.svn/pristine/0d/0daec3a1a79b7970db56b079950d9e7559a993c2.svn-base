(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpSpliter");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1830,849);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divDetail","10","10","600","400",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnSpliter","255","0","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divLeft","0","0",null,null,"btnSpliter:5","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("Left");
            obj.set_background("yellow");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSpliter00","btnSpliter:5","205",null,"10","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_splitter2");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divRight01","btnSpliter:5","0",null,null,"0","btnSpliter00:5",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Right01");
            obj.set_background("chartreuse");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divRight02","btnSpliter:5","btnSpliter00:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("Right02");
            obj.set_background("chartreuse");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDone","630","10","241","102",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("스프리터 적용");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form.divLeft
            obj = new Layout("default","",0,0,this.divDetail.form.divLeft.form,function(p){});
            this.divDetail.form.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divRight01.form
            obj = new Layout("default","",0,0,this.divDetail.form.divRight01.form,function(p){});
            this.divDetail.form.divRight01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divRight02
            obj = new Layout("default","",0,0,this.divDetail.form.divRight02.form,function(p){});
            this.divDetail.form.divRight02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1830,849,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpSpliter.xfdl", function() {
        this.btnDone_onclick = function(obj,e)
        {
        	trace("세로 --> " + UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter));
            trace("가로 --> " + UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter00));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divDetail.addEventHandler("ondragmove",this.divDetail_ondragmove,this);
            this.divDetail.form.btnSpliter.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.btnSpliter00.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.btnDone.addEventHandler("onclick",this.btnDone_onclick,this);
        };
        this.loadIncludeScript("smpSpliter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
