(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpSweetAlert");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","99","44","298","87",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","510","49","272","86",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpSweetAlert.xfdl", function() {

        this.smpSweetAlert_onload = function(obj,e)
        {
        // 	try {
        //         trace("jquery version --> " +  $.fn.jquery);
        //     } catch(e) {
        //         take.loadJs("jquery", "./_extlib_/Extend/sweetalert.min.js");
        //     }

            window.alert = function (str)
                {
                    console.dir(window.event);
                    console.log("alert:", str);
                }

            var objIframe = document.body.appendChild(document.createElement("iframe"));
            console.dir(objIframe);
            objIframe.src="";

            blert = objIframe.contentWindow.alert;

        };

        this.Button00_onclick = function(obj,e)
        {
        	swal("Good job!", "You clicked the button!", "success");
        };

        this.Button01_onclick = function(obj,e)
        {
        	alert("foo");

            blert("bar")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpSweetAlert_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("smpSweetAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
