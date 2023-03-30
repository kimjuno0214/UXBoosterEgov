(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing031");
            this.set_titletext("약관팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static16","10","80",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","0","10","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","10","0","220","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","16","86",null,"188","16",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","10","50",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("시스템 이용약관");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","10","279",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","16","284","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("동의합니다");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","339",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","16","345",null,"188","16",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","538",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","16","543","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("동의합니다");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","309",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("개인정보이용동의");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","196","578","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","303","578","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","10","580","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("팝업타이틀");
            obj.set_cssclass("sta_WF_popTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","550","10","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_popClose01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,650,this,function(p){});
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
        this.loadIncludeScript("publishing031.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
