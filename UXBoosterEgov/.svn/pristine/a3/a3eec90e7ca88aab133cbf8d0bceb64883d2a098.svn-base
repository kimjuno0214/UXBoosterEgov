(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMenuPop");
            this.set_titletext("(샘플)메뉴팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMenuPop","10","15",null,"95","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","-10",null,"30","0",null,null,null,null,null,this.divMenuPop.form);
            obj.set_taborder("2");
            obj.set_text("메뉴팝업");
            obj.set_cssclass("sta_WF_title02");
            this.divMenuPop.addChild(obj.name, obj);

            obj = new Static("staTypeT","20","34","80","21",null,null,null,null,null,null,this.divMenuPop.form);
            obj.set_taborder("3");
            obj.set_text("메뉴코드");
            obj.set_cssclass("sta_WF_textRImport");
            this.divMenuPop.addChild(obj.name, obj);

            obj = new Edit("edtMenuCd","103","34","100","21",null,null,null,null,null,null,this.divMenuPop.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_value("M0015");
            obj.set_text("M0015");
            this.divMenuPop.addChild(obj.name, obj);

            obj = new Button("btnMenuOpen","208","34","100","21",null,null,null,null,null,null,this.divMenuPop.form);
            obj.set_taborder("1");
            obj.set_text("OPEN");
            obj.set_cssclass("btn_WF_basic01");
            this.divMenuPop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenuPop.form
            obj = new Layout("default","",0,0,this.divMenuPop.form,function(p){});
            this.divMenuPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleMenuPop.xfdl", function() {

        this.divCodePopup_Button00_onclick = function(obj,e)
        {
        	var sMenuId = this.divMenuPop.form.edtMenuCd.value;
        	var sUserParam="";
            var sCallBack="";
            var sOption="";

            take.openMenuPop(sMenuId, sUserParam, sOption, sCallBack);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divMenuPop.form.edtMenuCd.addEventHandler("onkeyup",this.divCodePopup_edtMenuCd_onkeyup,this);
            this.divMenuPop.form.btnMenuOpen.addEventHandler("onclick",this.divCodePopup_Button00_onclick,this);
        };
        this.loadIncludeScript("sampleMenuPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
