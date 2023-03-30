(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpComComponent");
            this.set_titletext("공통 컴포넌트");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,1350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSelPop", this);
            obj._setContents("<ColumnInfo><Column id=\"UPJANG\" type=\"STRING\" size=\"256\"/><Column id=\"UPJANGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","10","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divComPop","10","10",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","760","49","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("0");
            obj.set_text("점포검색(SCC::SCC00044P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button03","760","80","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("1");
            obj.set_text("팀 검색(SCC::SCC00045P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button04","760","111","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("2");
            obj.set_text("사용자 검색(SCC::SCC00100P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button05","760","142","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("3");
            obj.set_text("점포 검색 2(SCC::SCC00101P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button06","760","173","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("4");
            obj.set_text("인사정보 검색(SCC::SCC00200P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button07","760","204","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("5");
            obj.set_text("발령대상 인사정보 검색(SCC::SCC00300P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button08","760","235","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("6");
            obj.set_text("e-HR 파일업로드 팝업(SCC::SCC00400P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button09","760","266","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("7");
            obj.set_text("코드조회(SCC::SCC90000P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button10","760","297","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("8");
            obj.set_text("이미지뷰어(SCC::SCC91000P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button11","760","328","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("9");
            obj.set_text("이미지뷰어_1(SCC::SCC91000P_1.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button12","760","359","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("10");
            obj.set_text("공지1(SCC::SCC91001P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button13","760","390","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("11");
            obj.set_text("공지2(SCC::SCC91002P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button14","760","421","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("12");
            obj.set_text("공지3(SCC::SCC91003P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button15","1010","19","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("13");
            obj.set_text("공지5(SCC::SCC91005P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button16","1010","50","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("14");
            obj.set_text("공지6(SCC::SCC91006P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button17","1010","81","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("15");
            obj.set_text("공지7(SCC::SCC91007P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button18","1010","112","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("16");
            obj.set_text("위생관리(SCC::SCC91008P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button19","1010","143","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("17");
            obj.set_text("데이터찾기(SCC::SCC92000P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button21","1010","204","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("18");
            obj.set_text("공통코드(SCC::SCCPOPUP1.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button22","1010","235","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("19");
            obj.set_text("공통sql POPUP(SCC::SCCPOPUP2.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button23","1010","266","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("20");
            obj.set_text("리포트 출력공통(SCC::SCCREPORT1.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button19_00","1010","174","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("21");
            obj.set_text("다중소트(SCC::SCC93000P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("Static61","0","0","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("22");
            obj.set_text("공통팝업");
            obj.set_cssclass("sta_WF_title02");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staSawonT","10","41","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("23");
            obj.set_text("사원검색");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtSawon","123","41","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("24");
            obj.getSetter("poptype").set("sawon");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staJumpoT","10","72","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("25");
            obj.set_text("점포검색");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtJumpo","123","72","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("26");
            obj.getSetter("poptype").set("jumpo");
            obj.getSetter("userparam").set("{\"P_USER_GROUP\":\"홈푸드\"}");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staTeamT","10","103","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("27");
            obj.set_text("팀검색");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtTeam","123","103","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("28");
            obj.getSetter("poptype").set("team");
            obj.getSetter("userparam").set("{\"P_USER_GROUP\":\"홈푸드\"}");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staJumpoT02","10","165","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("29");
            obj.set_text("점포검색2");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtJumpo02","123","165","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("30");
            obj.getSetter("poptype").set("jumpo2");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staInsaT","10","196","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("31");
            obj.set_text("인사정보검색");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtInsa","123","196","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("32");
            obj.getSetter("poptype").set("insa");
            obj.getSetter("userparam").set("{\"P_USER_GROUP\":\"3102\"}");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staTginsaT","10","227","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("33");
            obj.set_text("발령대상인사정보");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtTginsa","123","227","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("34");
            obj.getSetter("poptype").set("tginsa");
            obj.getSetter("userparam").set("{\"P_USER_GROUP\":\"3102\", \"P_APPOINT_CODE\":\"0090\"}");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staEhrT","10","258","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("35");
            obj.set_text("e-HR 파일업로드");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtEhr","123","258","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("36");
            obj.getSetter("poptype").set("ehr");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staCodeT","10","289","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("37");
            obj.set_text("코드조회");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtCode","123","289","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("38");
            obj.getSetter("poptype").set("code");
            obj.getSetter("userparam").set("{ \"SQL\" : \"scc.strQuery_Team\", \"CODE\" : \"\", \"CODENAME\" : \"\", \"CODE_DSP\" : \"팀 코드\", \"CODENAME_DSP\" : \"팀명\", \"CODE_VAL\" : \"\", \"CODENAME_VAL\" : \"\", \"ADDWHERE\" : \"\", \"CAPTION\" : \"\", \"ALLFIELD\" : \"\", \"ORDERBY\" : \"\" }");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staImageT01","10","320","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("39");
            obj.set_text("이미지뷰어");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtImage01","123","320","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("40");
            obj.getSetter("poptype").set("image1");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staImageT02","10","351","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("41");
            obj.set_text("이미지뷰어_1");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtImage02","123","351","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("42");
            obj.getSetter("poptype").set("image2");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("Static00","300","21","450","175",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("43");
            obj.set_text(" - 공통팝업 사용법\r\n\r\n1. edit 컴포넌트에 userproperty \'poptype\' 등록\r\n2. 파라메터가 있는경우 \r\n    userproperty \'userparam\' 등록(key, value 형식)\r\n    ex) {\"Text\":\"SMILE\"}");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_fittocontents("both");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staUserT","10","134","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("44");
            obj.set_text("사용자검색");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtUser","123","134","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("45");
            obj.getSetter("poptype").set("user");
            obj.getSetter("userparam").set("{\"P_USER_GROUP\":\"3102\"}");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staSawonT00","250","41","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("46");
            obj.set_text("sawon");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staJumpoT00","250","72","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("47");
            obj.set_text("jumpo");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staTeamT00","250","103","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("48");
            obj.set_text("team");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staUserT00","250","134","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("49");
            obj.set_text("user");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staJumpoT02_00","250","165","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("50");
            obj.set_text("jumpo2");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staInsaT00","250","196","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("51");
            obj.set_text("insa");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staTginsaT00","250","227","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("52");
            obj.set_text("tginsa");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staEhrT00","250","258","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("53");
            obj.set_text("ehr");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staCodeT00","250","289","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("54");
            obj.set_text("code");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staImageT01_00","250","320","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("55");
            obj.set_text("image1");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staImageT02_00","250","351","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("56");
            obj.set_text("image2");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button01","760","19","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("57");
            obj.set_text("사원검색(SCC::SCC00043P.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staHygieneT","323","196","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("58");
            obj.set_text("위생관리");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtHygiene","426","196","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("59");
            obj.getSetter("poptype").set("hygiene");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staDataT","323","227","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("60");
            obj.set_text("데이터찾기");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtData","426","227","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("61");
            obj.getSetter("poptype").set("data");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staMultisortT","323","258","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("62");
            obj.set_text("다중소트");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtMultisort","426","258","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("63");
            obj.getSetter("poptype").set("multisort");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staComcodeT","323","289","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("64");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtComcode","426","289","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("65");
            obj.getSetter("poptype").set("comcode");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staComsqlT","323","320","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("66");
            obj.set_text("공통 SQL");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtComsql","426","320","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("67");
            obj.getSetter("poptype").set("comsql");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staReportT","323","351","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("68");
            obj.set_text("리포트 출력");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtReport","426","351","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("69");
            obj.getSetter("poptype").set("report");
            obj.set_displaynulltext("작업중");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staHygieneT00","553","196","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("70");
            obj.set_text("hygiene");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staDataT00","553","227","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("71");
            obj.set_text("data");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staMultisortT00","553","258","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("72");
            obj.set_text("multisort");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staComcodeT00","553","289","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("73");
            obj.set_text("comcode");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staComsqlT00","553","320","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("74");
            obj.set_text("comsql");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staReportT00","553","351","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("75");
            obj.set_text("report");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("Static00_00","1265","19","374","392",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("76");
            obj.set_text(" - 점포 검색 팝업 예시\r\n\r\ntake.openPopup(\r\n    this,\r\n    \"TestPopJumpo\",\r\n    \"SCC::SCC00044P.xfdl\",\r\n    {P_USER_GROUP : nexacro.getApplication().g_Upjang},\r\n    \"\",\r\n    function(sId, sRtn){\r\n        trace(\"sRtn : \" + sRtn);\r\n    }, \r\n    false);");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_fittocontents("both");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staSelPopT","10","382","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("77");
            obj.set_text("데이터 선택 팝업");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtSelPop","123","382","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("78");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("btnDataSelPop","222","382","21","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("79");
            obj.set_cssclass("btn_WF_search04");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staCustT","323","382","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("80");
            obj.set_text("거래처검색");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtCust","426","382","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("81");
            obj.getSetter("poptype").set("cust");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staCustT00","553","382","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("82");
            obj.set_text("cust");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button23_00","1010","297","240","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("83");
            obj.set_text("거래처 검색(FSZ::CUST_SEARCH.xfdl)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("Static61_00","0","470","150","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("84");
            obj.set_text("코드 조회 팝업 ");
            obj.set_cssclass("sta_WF_title02");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staCodeT01","10","499","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("85");
            obj.set_text("코드조회");
            obj.set_cssclass("sta_WF_title03");
            this.divComPop.addChild(obj.name, obj);

            obj = new Edit("edtCode00","123","499","120","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("86");
            obj.getSetter("poptype").set("code");
            obj.getSetter("userparam").set("{ \"SQL\" : \"strQuery_Team\", \"CODE\" : \"\", \"CODENAME\" : \"TM_NM\", \"CODE_DSP\" : \"팀 코드\", \"CODENAME_DSP\" : \"팀명\", \"CODE_VAL\" : \"100\", \"CODENAME_VAL\" : \"\", \"ADDWHERE\" : \"USE_YN=\'Y\'\", \"CAPTION\" : \"\", \"ALLFIELD\" : \"TM_CD;TM_NM\", \"ORDERBY\" : \"\" }");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("staCodeT00_00","250","499","100","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("87");
            obj.set_text("code");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("btnCodeSelect","300","499","160","21",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("88");
            obj.set_text("코드조회(take.sqlPopUp)");
            this.divComPop.addChild(obj.name, obj);

            obj = new Static("Static00_01","10","530","1629","740",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("89");
            obj.set_text("- 기존 AS-IS 소스에서 fn_sql_common_setup 함수 호출시 오픈되는 팝업\r\n\r\n 1. 변경 방법\r\n\r\n fn_sql_common_setup 함수안의 파라메터를 사용하여 Edit 컴포넌트의 userproperty \'userparam\'에 추가\r\n 또는 take.sqlPopUp 함수 사용\r\n\r\n 2. 파라메터 설명(AS-IS 파라메터 : TOBE 파라메터(설명))\r\n\r\n _sql : SQL (SQL ID)\r\n _code : CODE (WHERE 절의 추가 조건(KEY))\r\n _name : CODENAME (WHERE 절의 추가 조건(KEY))\r\n _val_code : CODE_VAL (CODE 값(VALUE))\r\n _val_name : CODENAME_VAL (CODENAME 값(VALUE))\r\n _code_dsp : CODE_DSP (그리드 헤드 CODE 값)\r\n _name_dsp : CODENAME_DSP (그리드 헤드 CODENAME 값)\r\n _add_where : ADDWHERE (추가할 WHERE 절)\r\n _caption : CAPTION (팝업의 titletext)\r\n _allfield : ALLFIELD (바인딩 되는 컬럼 정보)\r\n _orderby : ORDERBY (ORDER BY문)\r\n _chkIRIS \r\n _flag : FLAG(자동조회 여부)\r\n\r\n 예시 \r\n\r\n * Edit 컴포넌트 사용시 \r\n : 해당 컴포넌트의 user Property에 \'userparam\' 등록\r\n { \"SQL\" : \"scc.strQuery_Team\", \"CODE\": \"TM_CD\", \"CODENAME\" : \"TM_NM\", \"CODE_DSP\" : \"팀 코드\", \"CODENAME_DSP\" : \"팀명\", \"CODE_VAL\" : \"\", \"CODENAME_VAL\" : \"\", \"ADDWHERE\" : \"\", \"CAPTION\" : \"\", \"ALLFIELD\" : \"\", \"ORDERBY\" : \"\" }\r\n\r\n * Button 컴포넌트 사용시\r\n : take.sqlPopUp의 파라메터 입력 칸에 추가\r\n   take.sqlPopUp\r\n   ( \r\n       this,\r\n       \"codeSelect\",\r\n       { SQL : \"strQuery_Team\", CODE: \"TM_CD\", CODENAME : \"TM_NM\", CODE_DSP : \"팀 코드\", CODENAME_DSP : \"팀명\", CODE_VAL : \"\", CODENAME_VAL : \"\", ADDWHERE : \"\", CAPTION : \"\", ALLFIELD : \"\", ORDERBY : \"\" },\r\n       \"fnPopUpCallBack\"\r\n    );\r\n ");
            obj.set_font("normal 12pt/normal \"Arial\"");
            obj.set_fittocontents("both");
            this.divComPop.addChild(obj.name, obj);

            obj = new Button("Button00","239","77","586","242",null,null,null,null,null,null,this.divComPop.form);
            obj.set_taborder("90");
            obj.set_text("커스터마이징 필요");
            this.divComPop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divComPop.form
            obj = new Layout("default","",0,0,this.divComPop.form,function(p){});
            this.divComPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,1350,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpComComponent.xfdl", function() {
        this.smpComComponent_onload = function(obj,e)
        {

        };

        this.Button00_onclick = function(obj,e)
        {
            var arrName;
            var sName = obj.text;

            var objArgList;
            var sFormUrl;

            arrName = sName.split("(");

            switch(arrName[0]) {
            case "사원검색":
                objArgList = {};
                sFormUrl = "SCC::SCC00043P.xfdl";
            	break;
            case "점포검색":
                objArgList = {P_USER_GROUP : nexacro.getApplication().g_Upjang};
                sFormUrl = "SCC::SCC00044P.xfdl";
            	break;
            case "팀 검색":
                objArgList = {};
                sFormUrl = "SCC::SCC00045P.xfdl";
            	break;
            case "사용자 검색":
                objArgList = {P_USER_GROUP : nexacro.getApplication().g_Upjang};
                sFormUrl = "SCC::SCC00100P.xfdl";
            	break;
            case "점포 검색 2":
                objArgList = {};
                sFormUrl = "SCC::SCC00101P.xfdl";
            	break;
            case "인사정보 검색":
                objArgList = {P_USER_GROUP : nexacro.getApplication().g_Upjang, ed_sUpjang : ""};
                sFormUrl = "SCC::SCC00200P.xfdl";
            	break;
            case "발령대상 인사정보 검색":
                objArgList = {P_USER_GROUP : nexacro.getApplication().g_Upjang, P_APPOINT_CODE : "0090"};
                sFormUrl = "SCC::SCC00300P.xfdl";
            	break;
            case "e-HR 파일업로드 팝업":
                objArgList = {P_USER_GROUP : nexacro.getApplication().g_Upjang, P_APPOINT_CODE : "0090"};
                sFormUrl = "SCC::SCC00400P.xfdl";
            	break;
            case "코드조회":
                objArgList = { SQL : "strQuery_Team", CODE: "TM_CD", CODENAME : "TM_NM", CODE_DSP : "팀 코드", CODENAME_DSP : "팀명", CODE_VAL : "", CODENAME_VAL : "", ADDWHERE : "", CAPTION : "", ALLFIELD : "", ORDERBY : "" };
                sFormUrl = "SCC::SCC90000P.xfdl";
            	break;
            case "이미지뷰어":
                objArgList = {};
                sFormUrl = "SCC::SCC91000P.xfdl";
            	break;
            case "이미지뷰어_1":
                objArgList = {};
                sFormUrl = "SCC::SCC91000P_1.xfdl";
            	break;
            case "공지1":
                objArgList = {};
                sFormUrl = "SCC::SCC91001P.xfdl";
            	break;
            case "공지2":
                objArgList = {};
                sFormUrl = "SCC::SCC91002P.xfdl";
            	break;
            case "공지3":
                objArgList = {};
                sFormUrl = "SCC::SCC91003P.xfdl";
            	break;
            case "공지5":
                objArgList = {};
                sFormUrl = "SCC::SCC91005P.xfdl";
            	break;
            case "공지6":
                objArgList = {};
                sFormUrl = "SCC::SCC91006P.xfdl";
            	break;
            case "공지7":
                objArgList = {};
                sFormUrl = "SCC::SCC91007P.xfdl";
            	break;
            case "위생관리":
                objArgList = {};
                sFormUrl = "SCC::SCC91008P.xfdl";
            	break;
            case "데이터찾기":
                objArgList = {};
                sFormUrl = "SCC::SCC92000P.xfdl";
            	break;
            case "다중소트":
                objArgList = {};
                sFormUrl = "SCC::SCC93000P.xfdl";
            	break;
            case "출력화면":
                objArgList = {};
                sFormUrl = "SCC::SCC95000P.xfdl";
            	break;
            case "공통코드":
                objArgList = {};
                sFormUrl = "SCC::SCCPOPUP1.xfdl";
            	break;
            case "공통sql POPUP":
                objArgList = {};
                sFormUrl = "SCC::SCCPOPUP2.xfdl";
            	break;
            case "리포트 출력공통":
                objArgList = {};
                sFormUrl = "SCC::SCCREPORT1.xfdl";
            	break;
            case "거래처 검색":
                objArgList = {};
                sFormUrl = "FSZ::CUST_SEARCH.xfdl";
            	break;
            default:
            }

            take.openPopup(
                this,
                "TestPop"+obj.id,
                sFormUrl,   // sFormUrl
                objArgList, // objArgList
                "",         // sOptions
                "fnPopupCallBack",         // sPopupCallback
                false);
        };

        // divComPop_btnCodeSelect_onclick : 코드조회 팝업 버튼 클릭 이벤트
        this.divComPop_btnCodeSelect_onclick = function(obj,e)
        {
            var sAddWhere, sUseYn;

            // CODE, CODENAME 외에 추가할 파라메터
            sUseYn = "Y";
            sAddWhere = "USE_YN="+ sUseYn +"";

            take.sqlPopUp(
                this,
                "codeSelect",
                { SQL : "strQuery_Team",
                CODE: "TM_CD", CODENAME : "TM_NM",
                CODE_DSP : "팀 코드", CODENAME_DSP : "팀명",
                CODE_VAL : "", CODENAME_VAL : "",
                ADDWHERE : "", CAPTION : "",
                ALLFIELD : "", ORDERBY : "" },
                "fnPopupCallBack");
        };

        /**
        * fnPopupCallBack : 팝업 콜백
        * @param  {string} sId  서비스 아이디
        * @param  {string} sRtn 리턴값
        */
        this.fnPopupCallBack = function(sId, sRtn)
        {
            trace("sId ---------> " + sId);

            if(take.nvl(sRtn, "") != ""){
                console.dir(sRtn);
                trace(sRtn.CODE);
                trace(sRtn.CODENAME);
            }
        }

        this.fn_AlertMsg = function(cd)
        {
        	var v_Msg="";
        	switch(cd)
        	{
        		case "000":
        			v_Msg= "이(가) 저장되었습니다.";
        			break;
        		case "001":
        			v_Msg= "버튼이 정의 되어 있지않습니다.";
        			break;
        		case "002":
        			v_Msg="서비스 오류:시스템 관리자에게 문의하십시오";
        			break;
        		case "003":
        			v_Msg="필수항목은 반드시 선택하시기 바랍니다.";
        			break;
        		case "004":
        			v_Msg="작업대상 본사를 선택하세요.";
        			break;
        		case "005":
        			v_Msg="을(를) 입력하세요";
        			break;
        		case "006":
        			v_Msg="삭제할 데이터가 없습니다.";
        			break;
        		case "007":
        			v_Msg="변경된 데이터가 없습니다.";
        			break;
        		case "008":
        			v_Msg="시스템ID가 없습니다.";
        			break;
        /*
        		case "":
        			v_Msg="";
        			break;
        */
        		default:
        			break;
        	}
        	return v_Msg;
        }

        // edt_onchanged 이벤트
        this.edt_onchanged = function(obj,e)
        {
        	var sData;
            var sName = obj.name.substr(3);

            if(obj.hasOwnProperty("resultdata")){
                trace(sName + "의 리턴값");
                console.dir(obj.resultdata);
                console.dir(obj.codevalue);
                console.dir(obj.value);
                console.dir(obj.userdata);
            }
        };

        this.divComPop_btnDataSelPop_onclick = function(obj,e)
        {
        	var objForm    = this;
            var sPopId     = "PopUp";
        	var sTitle     = "일반 업무 팝업";
            var sSearchTxt = "";
            var objDs      = "";
            var sSvcUrl    = "scc.strQuery_ScRole";
            var objInDs    = "";
            var sParam     = "sUseYn='Y' sSysType='식재영업'";
            var bMulti     = true;
            var arrColInfo = [["ROLE",        "권한", "50"],
                             ["ROLE_NAME", "권한명", "50"]];

            //팝업 오픈
            take.dataSelPopUp(
                this,       //팝업을 오픈할 현재 폼
                sPopId,     //팝업 아이디
                sTitle,     //팝업 타이틀
                sSearchTxt, //검색어
                objDs,      //폼에 넘길 데이터셋 (데이터셋이 있을경우 해당 데이터셋 데이터를 보여준다)
                sSvcUrl,    //transation URL (데이터셋이 없을경우만 transaction 발생)
                objInDs,    //검색조건이 되는 데이터셋 (검색조건을 데이터 셋으로 넘길 경우)
                sParam,     //transaction으로 넘길 파라메터
                arrColInfo, //컬럼 정보를 배열로 설정([[컬럼1, 컬럼1헤더표기명, 컬럼1사이즈], [컬럼2, 컬럼2헤더표기명, 컬럼2사이즈],...])
                bMulti,     //멀티 여부
                function(sId, sRtn) {  //팝업 콜백

                    var objRtn;
                    var aCode, aName;

                    if (take.nvl(sRtn, "")!="" && take.nvl(sRtn, "")!="cancel" )
                    {
                        //String으로 넘어온 팝업 Return값을 Object로 변환
                        objRtn = take.StringToObject(sRtn);

                        //필요한 컬럼 가져오기
                        aCode = take.nvl(objRtn.ROLE,""); //코드컬럼
                        aName = take.nvl(objRtn.ROLE_NAME,""); //명칭컬럼

                        if (aCode!="") aCode.toString(); //코드 값
                        if (aName!="") aName.toString(); //명칭 값

                        this.divComPop.form.edtSelPop.set_value(aName);

                    } else { }
                }
            );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpComComponent_onload,this);
            this.divComPop.form.Button02.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button03.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button04.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button05.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button06.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button07.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button08.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button09.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button10.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button11.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button12.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button13.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button14.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button15.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button16.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button17.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button18.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button19.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button21.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button22.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button23.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.Button19_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.edtSawon.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtJumpo.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtTeam.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtJumpo02.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtInsa.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtTginsa.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtEhr.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtCode.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtImage01.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtImage02.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtUser.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.Button01.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.edtHygiene.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtData.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtMultisort.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtComcode.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtComsql.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtReport.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.edtSelPop.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.btnDataSelPop.addEventHandler("onclick",this.divComPop_btnDataSelPop_onclick,this);
            this.divComPop.form.edtCust.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.Button23_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.divComPop.form.edtCode00.addEventHandler("onchanged",this.edt_onchanged,this);
            this.divComPop.form.btnCodeSelect.addEventHandler("onclick",this.divComPop_btnCodeSelect_onclick,this);
        };
        this.loadIncludeScript("smpComComponent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
