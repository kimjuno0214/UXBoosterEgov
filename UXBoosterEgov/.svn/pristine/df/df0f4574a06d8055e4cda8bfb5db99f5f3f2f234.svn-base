(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("srcMaker_SearchLayout");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearchLayout", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdSub00","0","46",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsSearchLayout");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Label ID\"/><Cell col=\"1\" text=\"Label Name\"/><Cell col=\"2\" text=\"Type\"/><Cell col=\"3\" text=\"Bind Dataset\"/><Cell col=\"4\" text=\"ETC1\"/><Cell col=\"5\" text=\"ETC2\"/><Cell col=\"6\" text=\"ETC3\"/></Band><Band id=\"body\"><Cell text=\"bind:LABEL_ID\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:LABEL_NAME\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:SEARCH_TYPE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsComponentType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:BIND_DATASET\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsDataset\" combocodecol=\"DATASET_NAME\" combodatacol=\"DATASET_NAME\"/><Cell col=\"4\" text=\"bind:ETC1\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:ETC2\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:ETC3\" edittype=\"text\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
            this.grdSub00.addEventHandler("onheadclick",this.grid_onheadclick,this);
        };
        this.loadIncludeScript("srcMaker_SearchLayout.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
