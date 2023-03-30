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

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","10","0",null,"790","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_cssclass("lst_WF_timeLine");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"100\"><Cell id=\"Cell00\" left=\"10\" top=\"10\" width=\"100\" height=\"80\"/><Cell id=\"Cell01\" left=\"120\" top=\"13\" width=\"870\" height=\"40\" text=\"bind:Column0\" cssclass=\"cellTitle01\"/><Cell id=\"Cell02\" left=\"120\" top=\"55\" width=\"200\" height=\"30\" text=\"bind:Column1\"/><Cell id=\"Cell03\" left=\"320\" top=\"55\" width=\"170\" height=\"30\" text=\"bind:Column2\"/><Cell id=\"Cell04\" left=\"495\" top=\"58\" width=\"50\" height=\"24\" text=\"조회수\" cssclass=\"cellBox01\"/><Cell id=\"Cell05\" left=\"550\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:Column3\"/><Cell id=\"Cell06\" left=\"615\" top=\"58\" width=\"50\" height=\"24\" text=\"첨부\" cssclass=\"cellBox01\"/><Cell id=\"Cell07\" left=\"670\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:Column4\"/><Cell id=\"Cell08\" left=\"735\" top=\"58\" width=\"50\" height=\"24\" text=\"댓글\" cssclass=\"cellBox01\"/><Cell id=\"Cell09\" left=\"790\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:Column5\"/><Cell id=\"Cell10\" left=\"865\" top=\"58\" width=\"60\" height=\"24\" text=\"bind:Column6\" cssclass=\"cellGrade01\"/><Cell id=\"Cell11\" left=\"930\" top=\"58\" width=\"60\" height=\"24\" text=\"bind:Column7\" cssclass=\"cellStatus01\"/></Band><Band id=\"detail\" width=\"100%\" height=\"5\"/></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.loadIncludeScript("sample24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
