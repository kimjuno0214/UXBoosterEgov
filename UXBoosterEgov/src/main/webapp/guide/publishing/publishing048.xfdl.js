(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing048");
            this.set_titletext("타임라인목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">2019-09-15 13:25</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">1</Col><Col id=\"Column6\">C등급</Col><Col id=\"Column7\">진행중</Col><Col id=\"Column0\">[테스트]사고접수테스트</Col></Row><Row><Col id=\"Column0\">[테스트]사고접수테스트</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">2019-09-15 13:25</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">1</Col><Col id=\"Column6\">C등급</Col><Col id=\"Column7\">진행중</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">2019-09-15 13:25</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">1</Col><Col id=\"Column6\">C등급</Col><Col id=\"Column7\">진행중</Col><Col id=\"Column0\">[테스트]사고접수테스트사고접수테스트사고접수테스트사고접수테스트사고접수테스트사고접수테스트사고접수테스트사고접수테스트사고접수테스트사고접수테스트사고접수테스트</Col></Row><Row><Col id=\"Column0\">[테스트]사고접수테스트</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">2019-09-15 13:25</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">1</Col><Col id=\"Column6\">C등급</Col><Col id=\"Column7\">진행중</Col></Row><Row><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">2019-09-15 13:25</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">1</Col><Col id=\"Column6\">C등급</Col><Col id=\"Column7\">진행중</Col><Col id=\"Column0\">[테스트]사고접수테스트</Col></Row><Row><Col id=\"Column0\">[테스트]사고접수테스트</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">2019-09-15 13:25</Col><Col id=\"Column3\">2</Col><Col id=\"Column4\">2</Col><Col id=\"Column5\">1</Col><Col id=\"Column6\">C등급</Col><Col id=\"Column7\">진행중</Col></Row></Rows>");
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

            obj = new Div("divSearch","10","0",null,"71","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","769","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit02","769","38",null,"21","18",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static30","686","10","80","21",null,null,"80",null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit11","436","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit01","436","38","230","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","353","38","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","353","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","103","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","103","38","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","20","38","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","686","38","80","21",null,null,"80",null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","500","divSearch:0","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","81",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","90",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","740","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new ListView("ListView00","0","Static01:0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_cssclass("lst_WF_timeLine");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"100\"><Cell id=\"Cell00\" left=\"10\" top=\"10\" width=\"100\" height=\"80\"/><Cell id=\"Cell01\" left=\"120\" top=\"13\" width=\"870\" height=\"40\" text=\"bind:Column0\" cssclass=\"cellTitle01\"/><Cell id=\"Cell02\" left=\"120\" top=\"55\" width=\"200\" height=\"30\" text=\"bind:Column1\"/><Cell id=\"Cell03\" left=\"320\" top=\"55\" width=\"170\" height=\"30\" text=\"bind:Column2\"/><Cell id=\"Cell04\" left=\"495\" top=\"58\" width=\"50\" height=\"24\" text=\"조회수\" cssclass=\"cellBox01\"/><Cell id=\"Cell05\" left=\"550\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:Column3\"/><Cell id=\"Cell06\" left=\"615\" top=\"58\" width=\"50\" height=\"24\" text=\"첨부\" cssclass=\"cellBox01\"/><Cell id=\"Cell07\" left=\"670\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:Column4\"/><Cell id=\"Cell08\" left=\"735\" top=\"58\" width=\"50\" height=\"24\" text=\"댓글\" cssclass=\"cellBox01\"/><Cell id=\"Cell09\" left=\"790\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:Column5\"/><Cell id=\"Cell10\" left=\"865\" top=\"58\" width=\"60\" height=\"24\" text=\"bind:Column6\" cssclass=\"cellGrade01\"/><Cell id=\"Cell11\" left=\"930\" top=\"58\" width=\"60\" height=\"24\" text=\"bind:Column7\" cssclass=\"cellStatus01\"/></Band><Band id=\"detail\" width=\"100%\" height=\"5\"/></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("publishing048.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
