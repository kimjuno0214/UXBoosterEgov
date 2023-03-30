(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide007");
            this.set_titletext("Guide007");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column4\">Text Center</Col><Col id=\"Column3\">버튼</Col><Col id=\"Column5\">Text Right</Col></Row><Row><Col id=\"Column3\">버튼</Col><Col id=\"Column4\">Text Center</Col><Col id=\"Column5\">Text Right</Col></Row></Rows>");
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

            obj = new Static("Static08",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","72","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","82",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","102",null,null,"10","10","1340",null,"700",null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","740","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button00","0","26","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("tab01");
            obj.set_cssclass("btn_WF_tab02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button01","Button00:0","26","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("tab02");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("Div02","0","53",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","5",null,null,"0","3",null,null,null,null,this.divDetail.form.Div02.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"54\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"4\" text=\"bind:Column4\" cssclass=\"cellC\"/><Cell col=\"5\" text=\"bind:Column5\" cssclass=\"cellR\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.divDetail.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static04",null,"0","100","5","1109",null,null,null,null,null,this.divDetail.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("5");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,null,"100","3","1109","0",null,null,null,null,this.divDetail.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("3");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button05",null,"28","27","27","30",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_tabPrev");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button04",null,"28","27","27","1",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_tabNext");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","90","17","2","50",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.3)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("#ff0000");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static29","97","11","27","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button06","Button01:0","26","90","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("tab03");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static29_00","417","42","27","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static29_00_00","417","702","27","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("3");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","1666","18","134","72",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("모든 화면기준\r\ndivSearch = 검색조건영역\r\nbtnShowHide = 검색조건 접기버튼\r\ndivDetail   = 상세영역");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","0",null,"72","10",null,"1340",null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","690","10","80","21",null,null,"80",null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static30:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","690","39","80","21",null,null,"80",null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static01:10","39","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static05:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","355","39","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static06:10","39","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static00:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","20","39","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","Static02:10","39","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","1310","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static30_00","1025","10","80","21",null,null,"80",null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","1025","39","80","21",null,null,"80",null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit02_00","Static01_00:10","39","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","Static30_00:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form.Div02.form
            obj = new Layout("default","",0,0,this.divDetail.form.Div02.form,function(p){});
            this.divDetail.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
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
        this.loadIncludeScript("Guide007.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
