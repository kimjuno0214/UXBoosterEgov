(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing034");
            this.set_titletext("내정보수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","10","10","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기존비밀번호");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","128","10",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","136","15",null,"21","66",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"14","46","23","16",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","51",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","474","517",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","119","517",null,"31","663",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","517","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","356","517","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static58","439","30",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static59","439","60",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static60","439","120",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static61","439","90",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static62","439","150",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static63","356","30","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static64","356","90","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("이름(영문)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit08","482","155",null,"21","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit11","483","65",null,"21","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static65","356","60","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("이름(한글)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static66","356","120","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static67","356","150","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static68","0","30","357","211",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","67","42","235","163",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_text("ImageViewer00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03",null,"212","69","23","805",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static69","439","180",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit12","482","185",null,"21","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static70","356","180","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static71","439","210",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit13","482","215",null,"21","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static72","356","210","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static73","439","240",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo05","483","245","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static74","356","240","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtID","483","35",null,"21","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit15","483","125",null,"21","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit16","483","95",null,"21","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static75","84","270",null,"56","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static76","84","240",null,"31","663",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo10","127","245","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static77","0","240","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05",null,"298","70","23","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_text("주소찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit17","127","275",null,"21","408",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static79","0","270","120","56",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit18","127","300",null,"21","408",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static80","0","367",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_text("회사정보");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static81","84","397",null,"31","663",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static82","439","397",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo11","483","402","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("42");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static83","356","397","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("43");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static84","0","397","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("44");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static85","84","427",null,"31","663",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static86","439","427",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo12","483","432","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("47");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static87","356","427","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("48");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static88","0","427","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("49");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static89","84","457",null,"31","663",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static90","439","457",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo13","483","462","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static91","356","457","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("53");
            obj.set_text("부서(영문)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo14","127","462","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static92","0","457","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("55");
            obj.set_text("부서(한글)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static93","84","487",null,"31","663",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo15","127","492","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("57");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static94","0","487","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("58");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static95","439","487",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo16","483","492","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("60");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static96","356","487","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("61");
            obj.set_text("국가");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static97","84","325",null,"43","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static98","0","325","120","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("63");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_th01Limport");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","127","329",null,"33","318",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("64");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit19","127","432",null,"21","673",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("65");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit20","127","403","160","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("66");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button06","291","402","55","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("67");
            obj.set_text("조직도");
            obj.set_cssclass("btn_WF_basic01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static99","0","0",null,"31","308",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("68");
            obj.set_text("개인정보");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("publishing034.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
