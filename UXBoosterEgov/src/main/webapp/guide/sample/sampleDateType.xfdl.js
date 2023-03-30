(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smapleDateType");
            this.set_titletext("날자 관련 함수 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staDateTitle","5","5","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("날짜 관련 기능");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnProto00","28","81","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("00.Date.isLeapYear()");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProto00","412","81","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","362","81","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnProto01","28","121","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("01.Date.getDaysInMonth()");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","362","121","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProto01","412","121","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnProto02","28","161","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("02.Date.getAddMonths(2)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","362","161","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProto02","412","161","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","28","51","470","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Date Prototype (Date=현재일자)");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs00","28","341","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("00.take.getConvertDate(\"20190101\")");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs00","412","341","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","362","341","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs01","28","381","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("01.take.getConvertDate(\"2019-01-01\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","362","381","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs01","412","381","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs02","28","421","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("02.take.getConvertDate(\"2019/01/01\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","362","421","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs02","412","421","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs03","28","461","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("03.take.toDateString(Date,\"yyyyMMdd\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs03","412","461","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","362","461","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs04","28","501","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("04.take.parseDate(\"20190101\", \"yyyyMMdd\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","362","501","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs04","412","501","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs05","611","81","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("05.take.getTodayTime()");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","945","81","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs05","995","81","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs06","611","121","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("06.take.getDbTime()");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","945","121","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs06","995","121","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","28","311","470","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("takeJs Date 관련 함수 Date 변환");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","611","51","470","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("takeJs Date 관련 함수 현재일자 가져오기");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","611","181","470","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("takeJs Date 관련 함수");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs07","611","211","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("07.take.getDateTerm(\"20190101\", \"20190130\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","945","211","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs07","995","211","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs08","611","251","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("08.take.getDaysInMonth(2019,1)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","945","251","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs08","995","251","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs09","611","291","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("09.take.getAddMonths(\"20190101\", 2)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","945","291","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs09","995","291","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","611","431","470","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("takeJs Date 관련 함수 날짜체크");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs10","611","461","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("10.take.isLeapYear(2019)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","945","461","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs10","995","461","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs11","611","501","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("11.take.isDate(\"20190101\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","945","501","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs11","995","501","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs12","611","541","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("12.take.isValidDate(\"20190101\", \"yyyyMMdd\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","945","541","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs12","995","541","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs13","611","581","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("13.take.isFromTo(\"20190101\", \"20190102\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","945","581","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs13","995","581","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs14","611","331","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("14.take.getDateWeek(\"20190201\")");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","945","331","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs14","995","331","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Button("btnProto03","28","201","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("03.Date.getDateWeek()");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","362","201","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProto03","412","201","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            this.addChild(obj.name, obj);

            obj = new Button("btnProto04","28","241","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("04.Date.getAddDays(2)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_00","362","241","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProto04","412","241","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Button("btnDateJs15","611","371","334","35",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("15.take.getAddDays(\"20190101\", 2)");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00","945","371","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("-->");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDateJs15","995","371","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleDateType.xfdl", function() {
        this.fv_objDate = new Date();

        this.btnProto00_onclick = function(obj,e)
        {
            //윤년여부
            this.edtProto00.set_value(this.fv_objDate.isLeapYear());
        };

        this.btnProto01_onclick = function(obj,e)
        {
            //해당일자의 월의 마지막 날
        	this.edtProto01.set_value(this.fv_objDate.getDaysInMonth());
        };

        this.btnProto02_onclick = function(obj,e)
        {
            //몇달 후 날짜 가져오기
        	this.edtProto02.set_value(this.fv_objDate.getAddMonths(2));
        };

        this.btnProto04_onclick = function(obj,e)
        {
        	//몇일 후 날짜 가져오기
        	this.edtProto04.set_value(this.fv_objDate.getAddDays(2));
        };

        this.btnDateJs00_onclick = function(obj,e)
        {
            //데이트 형으로 변환
        	this.edtDateJs00.set_value(take.getConvertDate("20190101"));
        };

        this.btnDateJs01_onclick = function(obj,e)
        {
            //데이트 형으로 변환
        	this.edtDateJs01.set_value(take.getConvertDate("2019-01-01"));
        };

        this.btnDateJs02_onclick = function(obj,e)
        {
            //데이트 형으로 변환
        	this.edtDateJs02.set_value(take.getConvertDate("2019/01/01"));
        };

        this.btnDateJs03_onclick = function(obj,e)
        {
            //데이트 형을 문자형으로 변환
        	this.edtDateJs03.set_value(take.toDateString(this.fv_objDate,"yyyyMMdd"));
        };

        this.btnDateJs04_onclick = function(obj,e)
        {
            //문자 형을 포멧에 맞는 데이트 형으로 변환
        	this.edtDateJs04.set_value(take.parseDate("20190101", "yyyyMMdd"));
        };

        this.btnDateJs05_onclick = function(obj,e)
        {
            var objToday = take.getTodayTime();
            //Clinet PC 기준 현재 일자 및 시간 가져오기
        	this.edtDateJs05.set_value(objToday.date + " " + objToday.time);
        };

        this.btnDateJs06_onclick = function(obj,e)
        {
            //DB 기준 현재 일자 및 시간 가져오기

        	var objToday = take.getDbTime();

        	this.edtDateJs06.set_value(objToday.date + " " + objToday.time);
        };

        this.btnDateJs07_onclick = function(obj,e)
        {
            //두개의 날자 기간(일) 구하기
        	this.edtDateJs07.set_value(take.getDateTerm("20190101", "20190130"));
        };

        this.btnDateJs08_onclick = function(obj,e)
        {
            //마지막 일자 구하기
        	this.edtDateJs08.set_value(take.getDaysInMonth(2019,1));
        };

        this.btnDateJs09_onclick = function(obj,e)
        {
            //입력한 일자에서 몇달 후 날짜 가져오기
        	this.edtDateJs09.set_value(take.getAddMonths("20190101", 2));
        };

        this.btnDateJs10_onclick = function(obj,e)
        {
            //윤년여부
        	this.edtDateJs10.set_value(take.isLeapYear(2019));
        };

        this.btnDateJs11_onclick = function(obj,e)
        {
            //날자 형식 여부 확인
        	this.edtDateJs11.set_value(take.isDate("20190101"));
        };

        this.btnDateJs12_onclick = function(obj,e)
        {
            //날짜 형식 여부 확인(포멧)
        	this.edtDateJs12.set_value(take.isValidDate("20190101", "yyyyMMdd"));
        };

        this.btnDateJs13_onclick = function(obj,e)
        {
            //from to 날짜 체크
        	this.edtDateJs13.set_value(take.isFromTo("20190101", "20190102"));
        };

        this.btnDateJs14_onclick = function(obj,e)
        {
            //요일 구하기
        	this.edtDateJs14.set_value(take.getDateWeek("20190201"));
        };

        this.btnProto03_onclick = function(obj,e)
        {
            //요일 구하기
        	this.edtProto03.set_value(this.fv_objDate.getDateWeek());
        };

        this.btnDateJs15_onclick = function(obj,e)
        {
            //입력한 일자에서 몇달 후 날짜 가져오기
        	this.edtDateJs15.set_value(take.getAddDays("20190101", 2));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnProto00.addEventHandler("onclick",this.btnProto00_onclick,this);
            this.btnProto01.addEventHandler("onclick",this.btnProto01_onclick,this);
            this.btnProto02.addEventHandler("onclick",this.btnProto02_onclick,this);
            this.btnDateJs00.addEventHandler("onclick",this.btnDateJs00_onclick,this);
            this.btnDateJs01.addEventHandler("onclick",this.btnDateJs01_onclick,this);
            this.btnDateJs02.addEventHandler("onclick",this.btnDateJs02_onclick,this);
            this.btnDateJs03.addEventHandler("onclick",this.btnDateJs03_onclick,this);
            this.btnDateJs04.addEventHandler("onclick",this.btnDateJs04_onclick,this);
            this.btnDateJs05.addEventHandler("onclick",this.btnDateJs05_onclick,this);
            this.btnDateJs06.addEventHandler("onclick",this.btnDateJs06_onclick,this);
            this.btnDateJs07.addEventHandler("onclick",this.btnDateJs07_onclick,this);
            this.btnDateJs08.addEventHandler("onclick",this.btnDateJs08_onclick,this);
            this.btnDateJs09.addEventHandler("onclick",this.btnDateJs09_onclick,this);
            this.btnDateJs10.addEventHandler("onclick",this.btnDateJs10_onclick,this);
            this.btnDateJs11.addEventHandler("onclick",this.btnDateJs11_onclick,this);
            this.btnDateJs12.addEventHandler("onclick",this.btnDateJs12_onclick,this);
            this.btnDateJs13.addEventHandler("onclick",this.btnDateJs13_onclick,this);
            this.btnDateJs14.addEventHandler("onclick",this.btnDateJs14_onclick,this);
            this.btnProto03.addEventHandler("onclick",this.btnProto03_onclick,this);
            this.btnProto04.addEventHandler("onclick",this.btnProto04_onclick,this);
            this.btnDateJs15.addEventHandler("onclick",this.btnDateJs15_onclick,this);
        };
        this.loadIncludeScript("sampleDateType.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
