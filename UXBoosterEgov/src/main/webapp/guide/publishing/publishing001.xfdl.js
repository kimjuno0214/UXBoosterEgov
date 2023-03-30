(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing001");
            this.set_titletext("시스템관리 Main");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03","10","10","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시스템 명");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Version");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","70","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("License 정보");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","10","100","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("JDK 경로");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10","130","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("WAS 경로");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","10","160","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("WebRoot 경로");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","190","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Log 경로");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","128","10",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","128","40",null,"31","529",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","128","100",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("JDK 경로");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","128","70",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("License 정보");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","128","160",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("WebRoot 경로");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","128","130",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("WAS 경로");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","128","190",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("Log 경로");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","510","10","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","136","15","354","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","136","45",null,"21","550",null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","220","120","54",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","128","220",null,"54","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","636","15","332","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"14","46","23","20",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","510","40","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("최종배포일시");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","629","40",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("최종배포일시");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","138","225",null,"44","20",null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","284",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("배포이력");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("이미지등록");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("약관등록");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("로그인정책");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("공통버튼단축키관리");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.Tab00);
            obj.set_text("Tabpage6");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage5.form,function(p){});
            this.Tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage6.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage6.form,function(p){});
            this.Tab00.Tabpage6.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("publishing001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
