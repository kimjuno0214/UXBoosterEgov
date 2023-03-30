(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing052");
            this.set_titletext("주소록 등록/수정/상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">일정 제목</Col><Col id=\"Column1\">범주 영역</Col><Col id=\"Column2\">2019.08.25</Col><Col id=\"Column3\">시작시간</Col><Col id=\"Column4\">종료시간</Col><Col id=\"Column5\">참여자</Col></Row><Row><Col id=\"Column0\">일정 제목</Col><Col id=\"Column1\">범주 영역</Col><Col id=\"Column2\">2019.08.31</Col><Col id=\"Column3\">시작시간</Col><Col id=\"Column4\">종료시간</Col><Col id=\"Column5\">참여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div02","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","68","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","108","68","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","10","98","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","108","98","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","10","128","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","108","128","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01",null,"10","50","23","65",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02",null,"10","50","23","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","10","158","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","108","158","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","10","544","100","144",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","108","544","340","144",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","10","304","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","108","304","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static12","10","334","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("홈페이지");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static13","108","334","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","115","73","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit11","115","163","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","115","550","326","132",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","115","309","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","115","339","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static24","10","38","440","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static25","108","188","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02","115","193","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("23");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static26","10","188","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("24");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static27","108","218","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit03","115","223","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("26");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static28","10","218","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("27");
            obj.set_text("FAX");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit04","115","133","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("28");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit05","115","103","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("29");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static29","10","Static28:25","440","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("30");
            obj.set_text("추가 정보(선택사항)");
            obj.set_cssclass("sta_WF_title02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static31","10","484","100","61",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("32");
            obj.set_text("집주소");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static32","108","484","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit07","115","489","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("35");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static33","10","424","100","61",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("36");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static34","10","364","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("37");
            obj.set_text("생일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo01","115","369","174","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("38");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static35","108","364","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14","10","394","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("40");
            obj.set_text("기념일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static15","108","394","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","115","400","150","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("42");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static30","108","424","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit06","115","429","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("34");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static16","108","454","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit08","115","459","326","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("44");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static17","108","514","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit09","115","519","326","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("46");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"428","94","23","17",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("47");
            obj.set_text("우편번호찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button03",null,"488","94","23","16",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("48");
            obj.set_text("우편번호찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","116","371","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",460,700,this,function(p){});
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
        this.loadIncludeScript("publishing052.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
