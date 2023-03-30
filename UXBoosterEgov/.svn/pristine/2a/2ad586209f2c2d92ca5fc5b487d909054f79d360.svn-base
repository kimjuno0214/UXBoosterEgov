(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpCalCustom");
            this.set_titletext("(샘플)커스텀 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","28","41","340","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>- 월 달력 컴포넌트</b>\r\n\r\n   <fc v=\'red\'>\'calendartype\'</fc> user property 추가 후 <fc v=\'red\'>\'Month\'</fc> 입력");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDateTitle","5","5","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("달력 컴포넌트 관련 기능");
            obj.set_font("normal 700 11px \"SpoqaHanSansNeo \",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calMonth","40","111","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("calendartype").set("Month");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","28","181","340","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("<b v=\'true\'>- 커스텀 달력 컴포넌트</b>\r\n\r\n   <fc v=\'red\'>\'calendartype\'</fc> user property 추가 후 <fc v=\'red\'>\'Day\'</fc> 입력");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDay","40","251","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.getSetter("calendartype").set("Day");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","163","251","77","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("날짜 세팅");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("smpCalCustom.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.calDay.set_value("20200101");
        };

        this.smpCalCustom_onload = function(obj,e)
        {
        	if (take.formOnLoad(this)){

        	};
        };

        this.calMonth_onchanged = function(obj,e)
        {

        };

        this.calDay_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpCalCustom_onload,this);
            this.calMonth.addEventHandler("onchanged",this.calMonth_onchanged,this);
            this.calDay.addEventHandler("onchanged",this.calDay_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("smpCalCustom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
