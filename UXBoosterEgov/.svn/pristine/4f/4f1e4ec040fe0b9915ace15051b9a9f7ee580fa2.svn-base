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
                this._setFormPosition(1040,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("Static01","10","71","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그룹");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","270","71","760","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주소록 목록 (총 00건)");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","101","250",null,null,"79",null,null,null,null,this);
            obj.set_taborder("4");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","270","131","760",null,null,"79",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"그룹\"/><Cell col=\"3\" text=\"회사명\"/><Cell col=\"4\" text=\"이름\"/><Cell col=\"5\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","0","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("그룹");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","108","0","243","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","350","0","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","448","0","243","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","690","0","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","788","0","242","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","115","5","225","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","795","5","225","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","455","5","225","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","10","30","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","108","30","243","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","350","30","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","448","30","243","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","690","30","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","788","30","242","31",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","455","35","225","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","115","35","225","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","270","106","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("전체");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","313","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("ㄱ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","346","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("ㄴ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","379","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("ㄷ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","478","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("ㅂ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","445","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("ㅁ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","412","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("ㄹ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","676","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("ㅌ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","643","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("ㅋ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","610","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("ㅊ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","577","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("ㅈ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","544","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("ㅇ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","511","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("ㅅ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","742","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("ㅎ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","709","106","30","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("ㅍ");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","775","106","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("A-Z");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","818","106","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("숫자");
            obj.set_cssclass("btn_WF_addressPick");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,800,this,function(p){});
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
        this.loadIncludeScript("sample23.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
