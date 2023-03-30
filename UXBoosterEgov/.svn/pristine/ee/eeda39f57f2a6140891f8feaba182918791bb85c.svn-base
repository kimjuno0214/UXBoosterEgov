(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing024");
            this.set_titletext("주소록목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Common Code</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static18","10","98","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","300","98",null,"30","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","290","120","10","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","128","280",null,null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","300","163",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"130","40","23","690",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","300","153","220","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","0",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectInfoSearch","20","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("그룹");
            obj.set_cssclass("sta_WF_textRImport");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staLoginInfoSearch","359","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staUserInfoSearch","698","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch00","19","40","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_textRImport");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staProgramInfoSearch","359","40","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtProgramInfoSearch","443","40","50","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_value("010");
            obj.set_text("010");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch","443","10","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","99","10","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","781","10","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtProgramInfoSearch00","99","40","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtProgramInfoSearch01","edtProgramInfoSearch:4","40","50","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_value("1234");
            obj.set_text("1234");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtProgramInfoSearch02","edtProgramInfoSearch01:4","40","50","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_value("2925");
            obj.set_text("2925");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","485","72","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","87",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","353","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("ㄱ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","386","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("ㄴ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","419","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("ㄷ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","485","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("ㅁ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","551","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("ㅅ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","584","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("ㅇ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","650","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("ㅊ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","518","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("ㅂ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","716","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("ㅊ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","749","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("ㅍ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","815","130","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("A - Z");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","683","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("ㅋ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","858","130","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("숫자");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","782","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("ㅎ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button20","617","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("ㅈ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button21","452","130","30","23",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("ㄹ");
            obj.set_cssclass("btn_WF_addressPick");
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
        this.loadIncludeScript("publishing024.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
