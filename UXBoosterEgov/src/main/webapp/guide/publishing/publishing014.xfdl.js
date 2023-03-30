(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing014");
            this.set_titletext("사용자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,685);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row><Row><Col id=\"Column1\">test</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static18","10","97","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","318","97",null,"30","162",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","127","300",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"프로젝트 명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","308","119","10","200",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","485","72","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","792","644",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","437","644",null,"31","365",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","318","644","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
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

            obj = new Div("Div00","10","0",null,"72","22",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WF_searchBox03");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","10","80","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","38","80","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","363","10","80","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","665","38","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("%");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","722","10","90","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","104","10","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","446","10","216","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","115","40","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","225","40","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","245","40","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","826","5","114","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"101","100","23","10",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("비밀번호초기화");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","674","644","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","757","157",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","757","187",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","757","247",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","757","217",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","757","277",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","674","157","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","674","217","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("이름(영문)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","800","282",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","801","192",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","674","187","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("이름(한글)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","674","247","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","674","277","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","318","157","357","211",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","385","169","235","163",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"339","69","23","507",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","757","307",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","800","312",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","674","307","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","757","337",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","800","342",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","674","337","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","757","367",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","801","372","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","674","367","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID","801","162",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","801","252",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","801","222",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","402","397",null,"56","10",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","402","367",null,"31","365",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo10","445","372","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","318","367","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"425","70","23","20",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("주소찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit17","445","402",null,"21","110",null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","318","397","120","56",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit18","445","427",null,"21","110",null,null,null,null,null,this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","318","494",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("회사정보");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","402","524",null,"31","365",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","757","524",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo11","801","529","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","674","524","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static84","318","524","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","402","554",null,"31","365",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static86","757","554",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo12","801","559","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","674","554","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static88","318","554","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static89","402","584",null,"31","365",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","757","584",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo13","801","589","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","674","584","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("부서(영문)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo14","445","589","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","318","584","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("부서(한글)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","402","614",null,"31","365",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo15","445","619","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static94","318","614","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static95","757","614",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo16","801","619","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static96","674","614","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("국가");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static97","402","452",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static98","318","452","120","43",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","445","456",null,"33","20",null,null,null,null,null,this);
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit19","445","559",null,"21","375",null,null,null,null,null,this);
            obj.set_taborder("81");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit20","445","530","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","609","529","55","23",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("조직도");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","318","127",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("개인정보");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,685,this,function(p){});
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
        this.loadIncludeScript("publishing014.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
