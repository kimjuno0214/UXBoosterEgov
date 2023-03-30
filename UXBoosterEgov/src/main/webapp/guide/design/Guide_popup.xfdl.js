(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide_popup");
            this.set_titletext("popup");
            this.set_cssclass("frm_POP_bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,678);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","0","45",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","20","800","593",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","20","0","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button58_00","734","0","46","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divSearch","20","26","760","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("staCodeInfoSearch","20","10","80","21",null,null,null,null,null,null,this.Div00.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("담당자코드");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCodeInfoSearch","90","10","231","21",null,null,null,null,null,null,this.Div00.form.divSearch.form);
            obj.set_taborder("1");
            this.Div00.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnSearch","371","10","80","21",null,null,null,null,null,null,this.Div00.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCodeInfoSearch00","430","10","231","21",null,null,null,null,null,null,this.Div00.form.divSearch.form);
            obj.set_taborder("3");
            this.Div00.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.25%","69","60","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_fold01");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","99","760","494",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"성명\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button06_01_00","663","633","57","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_save01");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_01_00_00","723","633","57","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","0","2",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.divSearch.form
            obj = new Layout("default","",0,0,this.Div00.form.divSearch.form,function(p){});
            this.Div00.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,678,this,function(p){});
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
            this.Div00.form.divSearch.form.edtCodeInfoSearch.addEventHandler("onkeyup",this.divSearch_edtCodeInfoSearch_onkeyup,this);
            this.Div00.form.divSearch.form.edtCodeInfoSearch00.addEventHandler("onkeyup",this.divSearch_edtCodeInfoSearch_onkeyup,this);
        };
        this.loadIncludeScript("Guide_popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
