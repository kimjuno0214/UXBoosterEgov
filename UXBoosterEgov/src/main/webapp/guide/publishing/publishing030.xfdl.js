(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing030");
            this.set_titletext("아이디/비밀번호 찾기");
            if (Form == this.constructor)
            {
                this._setFormPosition(520,364);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div02","10","36",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","0","10","200",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","300","10",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.3)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("#ff0000");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static58","129","40",null,"31","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static59","129","70",null,"31","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static61","129","100",null,"31","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static63","10","40","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit11","137","75",null,"21","142",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static65","10","70","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static69","129","185",null,"31","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static70","10","185","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("edtID","137","45",null,"21","142",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit16","137","105",null,"21","142",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button05","Edit11:7","73","86","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("인증번호받기");
            obj.set_cssclass("btn_WF_basic02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static18","10","155","450","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("아이디 검색결과");
            obj.set_cssclass("sta_WF_title02");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","Edit16:7","104","86","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("인증번호확인");
            obj.set_cssclass("btn_WF_basic02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static22","0","30",null,"10","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","112","221","86","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_text("로그인");
            obj.set_cssclass("btn_WF_basic02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","10","99","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_text("인증번호");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02","Button01:7","221","86","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_text("비밀번호찾기");
            obj.set_cssclass("btn_WF_basic02");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button03","Button02:7","221","86","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","0","130",null,"25","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_text("25");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","10","10","440","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","0","0","300","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.3)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("#ff0000");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","520","38",null,null,"-500","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","129","70",null,"31","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","129","100",null,"31","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static61","129","130",null,"31","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static63","10","70","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit11","137","105",null,"21","142",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","10","100","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static69","129","215",null,"31","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static70","10","215","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtID","137","75",null,"21","142",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit16","137","135",null,"21","142",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05","363","103","86","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("인증번호받기");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static18","10","185","450","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","363","134","86","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("인증번호확인");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","10","129","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("인증번호");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","159","281","86","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","Button02:7","281","86","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static45","0","0","10","200",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","300","10",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.3)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("#ff0000");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","129","40",null,"31","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtID00","137","45",null,"21","142",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtID01","137","220",null,"21","142",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","129","245",null,"31","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtID02","137","250",null,"21","142",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","10","245","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","440","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","0","30",null,"10","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","0","160",null,"25","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("25");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","10","10","440","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","10","10","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("아이디찾기");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","112","10","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("비밀번호찾기");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","Button00:-27","10","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_tabExtra");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","Button01:-27","10","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_tabExtra");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",520,364,this,function(p){});
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
        this.loadIncludeScript("publishing030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
