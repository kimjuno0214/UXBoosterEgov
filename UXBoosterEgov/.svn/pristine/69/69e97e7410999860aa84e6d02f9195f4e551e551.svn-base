(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comOZViewer");
            this.set_titletext("OZReport");
            this.set_cssclass("frm_Popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("wbOZ","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comOZViewer.xfdl", function() {
        this.fv_bWebOnload = false;
        this.fv_objArg;

        this.comOZViewer_onload = function(obj,e)
        {
            var sBaseUrl = take.getSvcUrl();
            trace(sBaseUrl);
            this.wbOZ.set_url(sBaseUrl + "_webkit/OZReport/ozreport.html");
            //this.wbOZ.set_url(sBaseUrl + "jsp/OZReport/ozreport_test.html");

            try {
                this.fv_objArg = this.parent.arguments;
            } catch(e) {
                this.close("error : " + e);
            }

            this.setTimer(1,100);

        //     var objArg = this.parent.arguments;
        //     console.dir(objArg);
        };

        this.comOZViewer_ontimer = function(obj,e)
        {
            var objArg;

        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);
                    trace("objArg --> " + this.fv_objArg);
                    console.dir(this.fv_objArg);

                    this.wbOZ.getProperty("window").callMethod("SetOZParamters_OZViewer1", this.fv_objArg);
        		}
        	}
        };

        this.wbOZ_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("ozreport.html") != -1)
            //if (e.url.indexOf("ozreport_test.html") != -1)
        	{
        		this.fv_bWebOnload = true;
        	}
        };

        this.wbOZ_onusernotify = function(obj,e)
        {
            var sUserData = e.userdata;

            //넘어온 데이터가 detail인 경우
        	if (sUserData.indexOf("CallBack")>=0)
            {
                var sRtn = sUserData.substr(9);
                trace("Return --> " + sRtn);
                if(sRtn.substr(0,4)=="(-1)")
                {
                    trace("OZReport loading fail : " + sRtn);
                } else if (sRtn.substr(0,4)=="(00)"){
                    trace("OZReport loading success");
                }
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comOZViewer_onload,this);
            this.addEventHandler("ontimer",this.comOZViewer_ontimer,this);
            this.wbOZ.addEventHandler("onloadcompleted",this.wbOZ_onloadcompleted,this);
            this.wbOZ.addEventHandler("onusernotify",this.wbOZ_onusernotify,this);
        };
        this.loadIncludeScript("comOZViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
