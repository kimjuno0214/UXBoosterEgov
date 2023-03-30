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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">일정 제목</Col><Col id=\"Column1\">범주 영역</Col><Col id=\"Column2\">2019.08.25</Col><Col id=\"Column3\">시작시간</Col><Col id=\"Column4\">종료시간</Col><Col id=\"Column5\">참여자</Col></Row><Row><Col id=\"Column0\">일정 제목</Col><Col id=\"Column1\">범주 영역</Col><Col id=\"Column2\">2019.08.31</Col><Col id=\"Column3\">시작시간</Col><Col id=\"Column4\">종료시간</Col><Col id=\"Column5\">참여자</Col></Row></Rows>");
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
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","112","0","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주간일정");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","10","27",null,"420","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","359","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("범주");
            this.Div02.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","10","40","359","330",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_type("monthonly");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","379","10","629","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new ListView("ListView00","379","39","629","146",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_cssclass("lst_WF_schedule");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"72\"><Cell id=\"Cell01\" left=\"10\" top=\"36\" width=\"430\" height=\"24\" text=\"bind:Column0\" cssclass=\"cellTitle\"/><Cell id=\"Cell03\" top=\"36\" height=\"24\" text=\"bind:Column1\" width=\"159\" right=\"10\" cssclass=\"cellCategory03\"/><Cell id=\"Cell05\" left=\"10\" top=\"10\" width=\"100\" height=\"24\" text=\"bind:Column2\"/><Cell id=\"Cell07\" left=\"120\" top=\"10\" width=\"115\" height=\"24\" text=\"bind:Column3\" cssclass=\"cellTime\"/><Cell id=\"Cell09\" left=\"255\" top=\"10\" width=\"115\" height=\"24\" text=\"bind:Column4\" cssclass=\"cellTime\"/><Cell id=\"Cell11\" top=\"10\" width=\"159\" height=\"24\" text=\"bind:Column5\" right=\"10\"/><Cell id=\"Cell00\" left=\"235\" top=\"10\" width=\"15\" height=\"24\" text=\"~\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","459","10","140","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("2019.08.31");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","619","10","140","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("해당일정수");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","779","10","140","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("개인");
            obj.set_cssclass("sta_WF_icoGroup01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","379","195","629","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new ListView("ListView01","379","224","629","146",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_binddataset("Dataset00");
            obj.set_cssclass("lst_WF_schedule");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"72\"><Cell id=\"Cell01\" left=\"10\" top=\"36\" width=\"430\" height=\"24\" text=\"bind:Column0\" cssclass=\"cellTitle\"/><Cell id=\"Cell03\" top=\"36\" height=\"24\" text=\"bind:Column1\" width=\"159\" right=\"10\" cssclass=\"cellCategory03\"/><Cell id=\"Cell05\" left=\"10\" top=\"10\" width=\"100\" height=\"24\" text=\"bind:Column2\"/><Cell id=\"Cell11\" top=\"10\" width=\"159\" height=\"24\" text=\"bind:Column5\" right=\"10\"/><Cell id=\"Cell07\" left=\"120\" top=\"10\" width=\"115\" height=\"24\" text=\"bind:Column3\" cssclass=\"cellTime\"/><Cell id=\"Cell09\" left=\"255\" top=\"10\" width=\"115\" height=\"24\" text=\"bind:Column4\" cssclass=\"cellTime\"/><Cell id=\"Cell00\" left=\"235\" top=\"10\" width=\"15\" height=\"24\" text=\"~\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","459","195","140","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("2019.08.31");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","619","195","140","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("해당일정수");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","779","195","140","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("개인");
            obj.set_cssclass("sta_WF_icoGroup01");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("sample17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
