(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing044");
            this.set_titletext("일정관리_주간일정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column2\">일정타이틀</Col><Col id=\"Column0\">12:00</Col></Row><Row><Col id=\"Column0\">13:00</Col></Row><Row><Col id=\"Column0\">14:00</Col></Row><Row/><Row/><Row/><Row/><Row/></Rows>");
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

            obj = new Static("Static03",null,"0","10",null,"0","-141",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"2","60","23","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"2","60","23","75",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("일정추가");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","10","0","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("월간일정");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","112","0","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주간일정");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","10","27",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10",null,"70","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01C");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","140","998","97",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj.set_cssclass("grd_WF_monthly01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/></Columns><Rows><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"body\"><Cell background=\"#f7f7f7\"/><Cell col=\"1\" text=\"SUN\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"2\" text=\"MON\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"3\" text=\"TUE\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"4\" text=\"WED\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"5\" text=\"THU\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"6\" text=\"FRI\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"7\" text=\"SAT\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell row=\"1\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"1\" text=\"1일차\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"2\" text=\"2일차\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"3\" text=\"3일차\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"4\" text=\"4일차\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"5\" text=\"5일차\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"6\" text=\"6일차\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"7\" text=\"7일차\" background=\"#f7f7f7\"/><Cell row=\"2\" text=\"종일\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"1\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"2\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"3\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"4\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"5\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"6\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"7\" background=\"#f7f7f7\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new ListView("ListView00","10","236","998",null,null,"10",null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj.set_cssclass("lst_WF_monthly");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"47\"><Cell id=\"Cell10\" left=\"241\" top=\"0\" width=\"127\" height=\"47\" text=\"\"/><Cell id=\"Cell00\" left=\"0\" top=\"0\" width=\"116\" height=\"47\" cssclass=\"cellTime\" text=\"bind:Column0\"/><Cell id=\"Cell01\" left=\"115\" top=\"0\" width=\"127\" height=\"47\"/><Cell id=\"Cell02\" left=\"247\" top=\"1\" width=\"115\" height=\"15\" cssclass=\"cellTeam\" text=\"bind:Column2\"/><Cell id=\"Cell03\" left=\"367\" top=\"0\" width=\"127\" height=\"47\"/><Cell id=\"Cell04\" left=\"493\" top=\"0\" width=\"127\" height=\"47\"/><Cell id=\"Cell05\" left=\"619\" top=\"0\" width=\"127\" height=\"47\"/><Cell id=\"Cell06\" left=\"745\" top=\"0\" width=\"127\" height=\"47\"/><Cell id=\"Cell07\" left=\"871\" top=\"0\" width=\"127\" height=\"47\"/><Cell id=\"Cell08\" left=\"247\" top=\"15\" width=\"115\" height=\"15\" cssclass=\"cellPrivate\" text=\"bind:Column2\"/><Cell id=\"Cell09\" left=\"247\" top=\"29\" width=\"115\" height=\"15\" cssclass=\"cellCompany\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","10","90","998","40",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("2017. 07 4째주");
            obj.set_cssclass("sta_WF_monthlyTitle");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","588","95","30","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_next");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","400","95","30","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_prev");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","30","20","140","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("2019년 9월 2째 주 일정");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","284","19","100","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("범주1");
            obj.set_cssclass("sta_WF_cellCategoryText03");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","459","19","100","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("범주1");
            obj.set_cssclass("sta_WF_cellCategoryText03");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","634","19","100","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("범주1");
            obj.set_cssclass("sta_WF_cellCategoryText03");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","420","20","1","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_th01C");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","600","20","1","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_th01C");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","244","39","90","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("123");
            obj.set_cssclass("sta_WF_cellCategoryText01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","419","39","90","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("123");
            obj.set_cssclass("sta_WF_cellCategoryText01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","594","39","90","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("123");
            obj.set_cssclass("sta_WF_cellCategoryText01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","339","39","50","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_cellCategoryText02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static12","514","39","50","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_cellCategoryText02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static13","689","39","50","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_cellCategoryText02");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("publishing044.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
