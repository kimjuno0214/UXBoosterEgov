(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing008");
            this.set_titletext("프로그램관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Prefix");
            obj.set_cssclass("sta_WF_textRImport");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","359","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit11","442","10","110","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","103","10","110","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","698","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","780","10","110","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","10","67","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","318","67",null,"30","162",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","97","300",null,null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"프로그램 명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","437","97",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","437","127",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","437","187",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","437","157",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","757","187",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","318","217","120","137",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","436","217",null,"137","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","318","97","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("프로그램코드");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","318","157","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("프로그램 명");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","445","132","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","444","223",null,"125","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","308","89","10","200",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","318","127","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("프로그램 ID");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","318","187","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Prefix");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","668","187","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","485","42","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","445","162","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","445","192","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","795","192","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","57",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","792","353",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","437","353",null,"31","366",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","673","353","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","318","353","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","792","383",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","437","383",null,"31","366",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","673","383","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","318","383","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
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
        this.loadIncludeScript("publishing008.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
