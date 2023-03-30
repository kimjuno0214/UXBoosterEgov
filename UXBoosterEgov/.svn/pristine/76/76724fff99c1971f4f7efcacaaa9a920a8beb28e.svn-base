(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpMultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">일</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">이</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">삼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdCode01","60","187",null,"211","818",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsCode01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"name\"/></Band><Band id=\"body\"><Cell text=\"bind:code\"/><Cell col=\"1\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbCode01","170","62","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCode01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","170","110","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("search");
            obj.set_innerdataset("dsCode01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.getSetter("multicombo").set("true");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetCode","331","110","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("멀티콤보값 가져오기");
            this.addChild(obj.name, obj);

            obj = new Static("staCombo","60","62","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("- 일반 콤보");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staCombo00","60","110","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("- 멀티 콤보");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","600","110","370","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("--> \'multicombo\' User Property 추가 후 \'true\'로 세팅");
            obj.set_font("11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            obj.set_color("crimson");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetting","464","110","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("멀티콤보값 세팅");
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
        this.registerScript("smpMultiCombo.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
            alert("text --> " + this.Combo00.text +" / value --> " + this.Combo00.multivalue);
        };

        this.Combo00_onitemchanged = function(obj,e)
        {
            var sTxt =  "prevalue --> " + e.prevalue + " / postvalue --> " + e.postvalue +"\n";
                sTxt += "pretext --> " + e.pretext + " / posttext --> " + e.posttext;

            trace("Combo00_onitemchanged\n" + sTxt);

        };

        this.btnSetting_onclick = function(obj,e)
        {
        	this.Combo00.set_Multivalue("01,02,03");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.btnGetCode.addEventHandler("onclick",this.Button00_onclick,this);
            this.btnSetting.addEventHandler("onclick",this.btnSetting_onclick,this);
        };
        this.loadIncludeScript("smpMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
