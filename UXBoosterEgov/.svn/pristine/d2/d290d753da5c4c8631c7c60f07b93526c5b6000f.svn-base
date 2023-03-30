(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("타임라인 상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","30",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","69",null,"60","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20","35","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_timeLine01");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","115","35","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2019-08-15 16:27:38");
            obj.set_cssclass("sta_WF_timeLine01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","270","35","750","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("제목제목제목제목제목제목제목제목제목");
            obj.set_cssclass("sta_WF_timeLine02");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","76",null,"46","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_subscript01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","128",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","20","138","120","150",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","10","297",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","336",null,"60","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","302","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_timeLine01");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","115","302","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2019-08-15 16:27:38");
            obj.set_cssclass("sta_WF_timeLine01");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","270","302","750","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("제목제목제목제목제목제목제목제목제목");
            obj.set_cssclass("sta_WF_timeLine02");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20","343",null,"46","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_subscript01");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","10","395",null,"170","10",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","20","405","1000","150",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"570","90","23","120",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("타임라인추가");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"570","50","23","10",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"570","50","23","65",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("완료");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","150","138","120","150",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","275","138","120","150",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04","400","138","120","150",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample21_1.xfdl", function() {

        this.ImageViewer00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.ImageViewer02.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.ImageViewer03.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.ImageViewer04.addEventHandler("onclick",this.ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("sample21_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
