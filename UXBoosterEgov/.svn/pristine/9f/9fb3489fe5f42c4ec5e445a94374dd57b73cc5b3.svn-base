(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing041");
            this.set_titletext("공지사항상세조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column4\">버튼</Col></Row><Row><Col id=\"Column4\">버튼</Col></Row><Row><Col id=\"Column4\">버튼</Col></Row><Row><Col id=\"Column4\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">작성자</Col><Col id=\"Column1\">작성일</Col><Col id=\"Column2\">댓글내용</Col><Col id=\"Column3\">수정버튼</Col><Col id=\"Column4\">삭제버튼</Col></Row><Row><Col id=\"Column0\">작성자</Col><Col id=\"Column1\">작성일</Col><Col id=\"Column2\">댓글내용</Col><Col id=\"Column3\">수정버튼</Col><Col id=\"Column4\">삭제버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","10",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","17","15",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","40",null,"388","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","17","50",null,"368","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","427","10","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(0,0,255,0.4)");
            obj.set_visible("false");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","649",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","1030","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"10","0","222",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","1050","40","400","300",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","10","436",null,"47","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","80","25","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("일괄다운");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","133","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_fileData01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","153","10","133","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_fileData01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","296","10","133","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_fileData01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","439","10","133","25",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_fileData01");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("publishing041.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
