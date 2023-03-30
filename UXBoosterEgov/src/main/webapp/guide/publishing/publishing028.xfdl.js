(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing027");
            this.set_titletext("메뉴관리");
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

            obj = new Static("Static45","290","120","10","200",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","0",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectInfoSearch","20","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textRImport");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staLoginInfoSearch","359","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staUserInfoSearch","698","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch00","19","40","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("디바이스");
            obj.set_cssclass("sta_WF_textRImport");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch","442","10","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","781","10","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staLoginInfoSearch00","359","40","80","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("메뉴유형");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtProjectInfoSearch","103","10","190","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnProjectSearch","297","10","21","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search02");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","442","40","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo02","103","40","158","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","485","72","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","87",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","318","98",null,"30","162",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","437","128",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","437","158",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","437","218",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","437","188",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","318","128","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("디바이스");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","318","188","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","445","163","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","318","158","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("메뉴유형");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","318","218","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("메뉴Level");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","445","193","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","445","223","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","128","300",null,null,"10",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"프로그램 명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","322","455",null,"30","158",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"458","100","23","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("다국어매핑");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","318","Static00:2",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_autofittype("col");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","382","445","220","10",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","445","133","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","795","163","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","668","158","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1050","200","712","196",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Div00");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","474","136",null,"31","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","119","136",null,"31","354",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","355","136","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","136","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","474","166",null,"31","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","119","166",null,"31","354",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","355","166","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","0","166","120","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("게시판\r\n기능설정");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","118","0",null,"61","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","135","7","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("파일첨부여부");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","295","7","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("댓글여부");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","455","7","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("푸쉬사용여부");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","135","34","150","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("양식사용여부");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edtProjectInfoSearch","231","34","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnProjectSearch","edtProjectInfoSearch:4","34","21","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static40","0","60","120","77",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static41","118","60",null,"77","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","126","65",null,"66","8",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","1050","0","712","196",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Div00");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","118","0",null,"137","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","126","6",null,"125","8",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","474","136",null,"31","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","119","136",null,"31","354",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","355","136","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","0","136","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","474","166",null,"31","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","119","166",null,"31","354",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","355","166","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","0","166","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static40","0","0","120","137",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","1050","600","712","196",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Div00");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","118","30",null,"107","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","126","35",null,"96","8",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","474","136",null,"31","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","119","136",null,"31","354",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","355","136","120","31",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","136","120","31",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","474","166",null,"31","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","119","166",null,"31","354",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","355","166","120","31",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","0","166","120","31",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","31",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_text("문서Root");
            obj.set_cssclass("sta_WF_th01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static09","119","0",null,"31","0",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static40","0","30","120","107",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch00","126","5","578","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","1050","400","712","196",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Div00");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","118","60",null,"77","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.Div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","126","65",null,"66","8",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static02","474","136",null,"31","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static04","119","136",null,"31","354",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","355","136","120","31",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static03","0","136","120","31",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static05","474","166",null,"31","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static06","119","166",null,"31","354",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static07","355","166","120","31",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("9");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static08","0","166","120","31",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("10");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","31",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("11");
            obj.set_text("일정시간");
            obj.set_cssclass("sta_WF_th01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static09","119","0",null,"31","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static12","474","30",null,"31","0",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static14","119","30",null,"31","354",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static15","0","30","120","31",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("16");
            obj.set_text("휴계시간");
            obj.set_cssclass("sta_WF_th01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static13","355","30","120","31",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("14");
            obj.set_text("집중근무");
            obj.set_cssclass("sta_WF_th01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("edtProjectInfoSearch","126","35","200","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("17");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static40","0","60","120","77",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("edtProjectInfoSearch00","481","35","200","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("18");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch00","126","5","100","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("19");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static10","226","5","20","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("20");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.Div04.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch01","246","5","100","21",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("21");
            this.Div04.addChild(obj.name, obj);

            obj = new Div("Div05","318","248","712","196",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Div00");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            obj.set_border("1px solid,1px solid, 1px solid, 1px solid");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form
            obj = new Layout("default","",0,0,this.Div05.form,function(p){});
            this.Div05.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("publishing028.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
