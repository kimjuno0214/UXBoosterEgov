(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divLeft","0","40","230",null,null,"26",null,null,null,null,this);
            obj.set_url("frm::frmLeft.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divMdi","240","40",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("frm::frmMdi.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"26","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("frm::frmBottom.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","240","70",null,null,"0","26",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("frm::frmWork.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("frm::frmTop.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","divLeft:0","40","10",null,null,"26",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_conFold");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLeft
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMdi
            obj = new Layout("default","",0,0,this.divMdi.form,function(p){});
            this.divMdi.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::frmLeft.xfdl");
            this._addPreloadList("fdl","frm::frmMdi.xfdl");
            this._addPreloadList("fdl","frm::frmBottom.xfdl");
            this._addPreloadList("fdl","frm::frmWork.xfdl");
            this._addPreloadList("fdl","frm::frmTop.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frmAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
