(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("uses_intro");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"column0\" type=\"STRING\" size=\"256\"/><Column id=\"column1\" type=\"STRING\" size=\"256\"/><Column id=\"column2\" type=\"STRING\" size=\"256\"/><Column id=\"column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stTitle","0","0",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("활용");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("stSubTitle","0","42",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자주 사용하는 Pivot 컴포넌트를 활용 예시");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img01","0","96","452","287",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_stretch("fixaspectratio");
            obj.set_image("URL(\"imagerc::uses_sort_04.png\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","70","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Sort 설정");
            obj.set_cssclass("sta_WF_notice01");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img02","470","96","452","287",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_stretch("fixaspectratio");
            obj.set_image("URL(\"imagerc::uses_filter_06.png\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","470","70","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Filter 설정");
            obj.set_cssclass("sta_WF_notice01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","400","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("집계 설정");
            obj.set_cssclass("sta_WF_notice01");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img03","0","426","452","287",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_stretch("fixaspectratio");
            obj.set_image("URL(\"imagerc::uses_aggregator_04.png\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","470","400","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사용자 집계 설정");
            obj.set_cssclass("sta_WF_notice01");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img04","470","426","452","287",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_stretch("fixaspectratio");
            obj.set_image("URL(\"imagerc::uses_custom_aggregator_06.png\")");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","51","0","274","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("transparent");
            obj.set_readonly("true");
            obj.set_value("https://www.playnexacro.com/#list:opensource:1");
            obj.set_border("0px solid");
            obj.set_text("https://www.playnexacro.com/#list:opensource:1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","336","0","331","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("https://www.playnexacro.com/nexacropivot/indexPivot.html");
            obj.set_readonly("true");
            obj.set_background("transparent");
            obj.set_border("0px solid");
            obj.set_text("https://www.playnexacro.com/nexacropivot/indexPivot.html");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1070,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("uses_intro.xfdl", function() {

        this.img01_onclick = function(obj,e)
        {
        	this.parent.set_url("guide::sample/nexapivot_사용안함/uses_sort.xfdl");
        };

        this.img02_onclick = function(obj,e)
        {
        	this.parent.set_url("guide::sample/nexapivot_사용안함/uses_filter.xfdl");
        };

        this.img03_onclick = function(obj,e)
        {
        	this.parent.set_url("guide::sample/nexapivot_사용안함/uses_aggregator.xfdl");
        };

        this.img04_onclick = function(obj,e)
        {
        	this.parent.set_url("guide::sample/nexapivot_사용안함/uses_custom_aggregator.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.img01.addEventHandler("onclick",this.img01_onclick,this);
            this.img02.addEventHandler("onclick",this.img02_onclick,this);
            this.img03.addEventHandler("onclick",this.img03_onclick,this);
            this.img04.addEventHandler("onclick",this.img04_onclick,this);
        };
        this.loadIncludeScript("uses_intro.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
