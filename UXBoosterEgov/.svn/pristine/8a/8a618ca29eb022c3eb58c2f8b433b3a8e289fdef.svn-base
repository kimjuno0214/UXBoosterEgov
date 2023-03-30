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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row></Rows>");
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

            obj = new Static("Static01","10","0","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("타임라인 상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","10","30",null,"710","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("lst_WF_timeLineDetail");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"240\"><Cell id=\"Cell05\" left=\"0\" top=\"0\" height=\"110\" border=\"0px solid #c7c7c7\" right=\"0\" background=\"#ececec\" borderRadius=\"0px\"/><Cell id=\"Cell06\" left=\"0\" top=\"109\" border=\"1px solid #c7c7c7\" right=\"0\" background=\"#ffffff\" bottom=\"0\"/><Cell id=\"Cell00\" left=\"10\" top=\"6\" width=\"120\" height=\"30\" cssclass=\"cellBox01\" text=\"bind:Column0\"/><Cell id=\"Cell01\" left=\"135\" top=\"6\" width=\"180\" height=\"30\" text=\"bind:Column1\" cssclass=\"cellBox01\"/><Cell id=\"Cell02\" left=\"320\" top=\"6\" height=\"30\" right=\"10\" cssclass=\"cellBox02\" text=\"bind:Column2\"/><Cell id=\"Cell03\" left=\"10\" top=\"42\" height=\"60\" text=\"bind:Column3\" cssclass=\"cellBox03\" right=\"10\"/><Cell id=\"Cell04\" left=\"10\" top=\"114\" height=\"120\" text=\"bind:Column4\" right=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"750","90","23","120",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("타임라인추가");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"750","50","23","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"750","50","23","65",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("완료");
            obj.set_cssclass("btn_WF_basic01");
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
        this.loadIncludeScript("sample21.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
