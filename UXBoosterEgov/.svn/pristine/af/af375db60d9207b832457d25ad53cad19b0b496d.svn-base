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
                this._setFormPosition(1040,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column4\">버튼</Col></Row><Row><Col id=\"Column4\">버튼</Col></Row><Row><Col id=\"Column4\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">작성자</Col><Col id=\"Column1\">작성일</Col><Col id=\"Column2\">댓글내용</Col><Col id=\"Column3\">수정버튼</Col><Col id=\"Column4\">삭제버튼</Col></Row><Row><Col id=\"Column0\">작성자</Col><Col id=\"Column1\">작성일</Col><Col id=\"Column2\">댓글내용</Col><Col id=\"Column3\">수정버튼</Col><Col id=\"Column4\">삭제버튼</Col></Row></Rows>");
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

            obj = new Button("Button00",null,"0","60","23","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","60","23","75",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","60","23","140",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"0","60","23","205",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","28",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","17","33","823","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","865","33","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("공지사항으로 지정하기");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","58",null,"261","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","17","68",null,"242","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","376","1020","200",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_replyBox02");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","10",null,"89","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_replyBox03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","90","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","110","10","90","25",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("2019.08.09");
            obj.set_cssclass("sta_WF_replyDate");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","35","968","43",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용");
            obj.set_cssclass("sta_WF_replyText");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button03",null,"11","60","23","10",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"11","60","23","75",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","10","99",null,"89","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_replyBox03");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","90","25",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","110","10","90","25",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("2019.08.09");
            obj.set_cssclass("sta_WF_replyDate");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","20","35","968","43",null,null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용댓글내용내용");
            obj.set_cssclass("sta_WF_replyText");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button03",null,"11","60","23","10",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"11","60","23","75",null,null,null,null,null,this.Div00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.form.Div01.addChild(obj.name, obj);

            obj = new ListView("ListView00","10","587","1020","178",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("Dataset01");
            obj.set_cssclass("lst_WF_reply");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"89\"><Cell id=\"Cell00\" left=\"10\" top=\"10\" width=\"80\" height=\"23\" text=\"bind:Column0\"/><Cell id=\"Cell01\" left=\"89\" top=\"10\" width=\"110\" height=\"23\" text=\"bind:Column1\"/><Cell id=\"Cell02\" left=\"10\" top=\"33\" height=\"43\" text=\"bind:Column2\" right=\"10\"/><Cell id=\"Cell03\" top=\"10\" width=\"60\" height=\"23\" text=\"bind:Column4\" right=\"10\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell id=\"Cell04\" top=\"10\" width=\"60\" height=\"23\" text=\"bind:Column3\" right=\"75\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","775","1020","80",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_replyBox01");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10","10",null,"60","100",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","928","10","80","60",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic01");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","10","324","1020","47",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WF_replyBox01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","928","10","80","25",null,null,null,null,null,null,this.Div02.form);
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
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div01.form,function(p){});
            this.Div00.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,1080,this,function(p){});
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
        this.loadIncludeScript("sample15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
