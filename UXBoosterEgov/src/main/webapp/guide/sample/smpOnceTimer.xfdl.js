(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpOnceTimer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","56","25","206","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpOnceTimer.xfdl", function() {
        this.fv_objTimer1 = null;
        this.fv_objTimer2 = null;

        this.Button00_onclick = function(obj,e)
        {
        	this.fv_objTimer1 =
                    nexacro._OnceCallbackTimer.callonce
                    (
                        this,
                        function ()
                        {
                            try {
                                this.fnTimer(1);
                            } catch(e) {
                                trace("fnTimer call error : " + e);
                                if(this.fv_objTimer1 ) this.fv_objTimer1.stop();
                                this.fnTimer(1);
                            }
        				},
                        1
                    );
            this.fv_objTimer2 =
                    nexacro._OnceCallbackTimer.callonce
                    (
                        this,
                        function ()
                        {
                            try {
                                this.fnTimer(2);
                            } catch(e) {
                                trace("fnTimer call error : " + e);
                                if(this.fv_objTimer2 ) this.fv_objTimer2.stop();
                                this.fnTimer(2);
                            }
        				},
                        1
                    );
            this.fnTimer(3);
        };

        this.fnTimer = function(nId)
        {
            trace("fnTimer --> " + nId);
        }



        // nexacro._OnceCallbackTimer.callonce
        //             (
        //                 this,
        //                 function ()
        //                 {
        //                     //function
        // 				},
        //                 1
        //             );
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("smpOnceTimer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
