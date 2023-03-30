(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comExcel");
            this.set_titletext("엑셀다운로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(140,90);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new FileDownTransfer("fdt", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드용");
            obj.set_background("#7a7a7a");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("excelBrowser","84","21",null,null,"13","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",140,90,this,function(p){});
            obj.set_description("엑셀다운로드");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comExcel.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.excelBrowser.set_url(take.getSvcUrl() + "post.html?" + nexacro.round((Math.random()*1000)));
        };

        //파라미터세팅
        this.fnGetParameter = function(arrParams){
        	var webUrlParam = "";
        	for (var paramKey in arrParams){
        		webUrlParam += "&" + paramKey + "=" + take.nvl(arrParams[paramKey], "");
        	}

        	return webUrlParam;
        };

        //GET방식 다운로드
        this.fnWebDownloadGet = function(downloadUrl, sFilename, arrParams){
        	//웹페이지 호출
        	window.open(downloadUrl + "?filename=" + sFilename + this.fnGetParameter(arrParams));

        	//webbrowser로 해도 첨부파일이 다운로드 되는경우 onloadcompleted가 먹질 않음(도움말 참조)
        	//nexacro.getEnvironment().set_usewaitcursor(true);
        	//this.excelBrowser.set_url(downloadUrl + "?filename=" + filename + this.fnGetParameter(arrParams));
        };

        //POST방식 다운로드
        this.fnWebDownloadPost = function(downloadUrl, sFilename, arrParams){
        	this.setWaitCursor(true);

        	var params = {filename:sFilename};
        	if(!take.isEmpty(arrParams)){
        		params = Object.assign(params, arrParams);
        	}

        	this.excelBrowser.callMethod("requestDownloadFile", {
        		url: downloadUrl,
        		method: 'POST',
        		data: params
        	});
        };

        //FILEDOWNTRANSFER 다운로드
        this.fnDownloadFdt = function(downloadUrl, filename, arrParams){
        	this.fdt.set_url( downloadUrl);
        	this.fdt.clearPostDataList();
        	this.fdt.setPostData("filename", filename);
        	for (var paramKey in arrParams){
        		this.fdt.setPostData(paramKey, take.nvl(arrParams[paramKey], ""));
        	}
        	this.fdt.download();
        };

        this.excelBrowser_onloadcompleted = function(obj,e)
        {
        	//trace("completed-------" + e.eventid);
        };

        this.excelBrowser_onusernotify = function(obj,e)
        {
        	if(take.isNull(e.userdata)){
        		return;
        	}else{
        		if(e.userdata != 'load'){
        			this.setWaitCursor(false);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.excelBrowser.addEventHandler("onloadcompleted",this.excelBrowser_onloadcompleted,this);
            this.excelBrowser.addEventHandler("onusernotify",this.excelBrowser_onusernotify,this);
        };
        this.loadIncludeScript("comExcel.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
