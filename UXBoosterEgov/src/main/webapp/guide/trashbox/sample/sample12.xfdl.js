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
            this.set_titletext("팝업샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,685);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">static</Col></Row><Row><Col id=\"Column1\">static</Col></Row><Row><Col id=\"Column1\">static</Col></Row><Row><Col id=\"Column1\">static</Col></Row><Row><Col id=\"Column1\">static</Col></Row><Row><Col id=\"Column1\">static</Col></Row><Row><Col id=\"Column1\">static</Col></Row><Row><Col id=\"Column1\">static</Col></Row><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div02","10","10","460","600",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","10","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","128","10","320","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","128","40","320","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","10","70","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("로그인일시");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","128","70","320","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","10","100","438","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","94","104","86","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("내정보수정");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01","185","104","86","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02","276","104","86","23",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("마이메뉴설정");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","10","130","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("대시보드설정");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","128","130","320","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","10","160","120","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("대시보드검색");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","128","160","320","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit11","135","165","190","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","10","201","290","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_text("카테고리 예시");
            obj.set_cssclass("sta_WF_title02");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","231","438","270",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"202\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static12","255","205","25","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_icoCategory01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static13","283","205","25","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_icoCategory02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static14","311","205","25","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_icoCategory03");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static15","339","205","25","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_icoCategory04");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static16","367","205","25","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_icoCategory05");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static17","395","205","25","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_icoCategory06");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static18","423","205","25","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_icoCategory07");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("sample12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
