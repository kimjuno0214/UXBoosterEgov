(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing039");
            this.set_titletext("공지사항상세팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column4\">버튼</Col></Row><Row><Col id=\"Column4\">버튼</Col></Row><Row><Col id=\"Column4\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">작성자</Col><Col id=\"Column1\">작성일</Col><Col id=\"Column2\">댓글내용</Col><Col id=\"Column3\">수정버튼</Col><Col id=\"Column4\">삭제버튼</Col></Row><Row><Col id=\"Column0\">작성자</Col><Col id=\"Column1\">작성일</Col><Col id=\"Column2\">댓글내용</Col><Col id=\"Column3\">수정버튼</Col><Col id=\"Column4\">삭제버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div02","10","10",null,"360","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit11","10","5",null,"21","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","0","30",null,"261","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10","40",null,"242","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div02","10","300",null,"47","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("none none");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","80","25","10",null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("일괄다운");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","133","25",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_fileData01");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","153","10","133","25",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_fileData01");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","296","10","133","25",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_fileData01");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","439","10","133","25",null,null,null,null,null,null,this.Div02.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_fileData01");
            this.Div02.form.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","9",null,"114","20",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("오늘하루그만보기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form.Div02.form,function(p){});
            this.Div02.form.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,410,this,function(p){});
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
        this.loadIncludeScript("publishing039.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
