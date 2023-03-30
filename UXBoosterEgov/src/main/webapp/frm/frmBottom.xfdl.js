(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmBottom");
            this.set_titletext("메인 하단 저작권안내");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,25);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"25","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("(07348)서울시 영등포구 도산로54길 6 (주)테이크 copyright (c)2019 Take CSS Corp. All rights reserved");
            obj.set_cssclass("sta_btm_bg");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,25,this,function(p){});
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
        this.loadIncludeScript("frmBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
