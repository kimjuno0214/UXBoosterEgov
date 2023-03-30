(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing037");
            this.set_titletext("휴가승인관리");
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
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_textRImport");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","359","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("휴가사유");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","698","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","442","10","120","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","781","10","120","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","Edit01:6","9","46","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_basic01");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("calLoginDateFromSearch","103","10","102","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("calLoginDateToSearch","228","10","102","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch01","206","10","22","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static18","10","67","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("휴가승인목록(00 건)");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","485","42","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","57",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","10","423",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("휴가계획 상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","97",null,"316","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"발생일수\"/><Cell col=\"2\" text=\"사용일수\"/><Cell col=\"3\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-1","413",null,"10","1",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","129","453",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","129","483",null,"31","530",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","128","543",null,"106","531",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","136","549","367","95",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","10","483","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","10","543","120","106",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","10","453","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("휴가명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"427","46","23","10",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","513","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("휴가유형/기간");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","129","513",null,"31","530",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","627","483",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","627","513",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","508","513","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","635","518","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","508","483","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("승인자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","626","543",null,"106","10",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","634","549",null,"95","16",null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","508","543","120","106",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("승인내용");
            obj.set_cssclass("sta_WF_th01L");
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
        this.loadIncludeScript("publishing037.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
