(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing026");
            this.set_titletext("접속자현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLoginLog", this);
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"history_time\" type=\"STRING\" size=\"256\"/><Column id=\"login_device\" type=\"STRING\" size=\"256\"/><Column id=\"login_browser\" type=\"STRING\" size=\"256\"/><Column id=\"project_cd\" type=\"STRING\" size=\"256\"/><Column id=\"project_nm\" type=\"STRING\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"user_nm\" type=\"STRING\" size=\"256\"/><Column id=\"login_dt\" type=\"STRING\" size=\"256\"/><Column id=\"login_ip\" type=\"STRING\" size=\"256\"/><Column id=\"dept_nm\" type=\"STRING\" size=\"256\"/><Column id=\"user_position\" type=\"STRING\" size=\"256\"/><Column id=\"user_email\" type=\"STRING\" size=\"256\"/><Column id=\"user_mobile\" type=\"STRING\" size=\"256\"/><Column id=\"user_tel\" type=\"STRING\" size=\"256\"/><Column id=\"user_tax\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","98","280","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("시스템사용이력");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","128",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsLoginLog");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"이력시간\"/><Cell col=\"2\" text=\"접속기기\"/><Cell col=\"3\" text=\"접속환경\"/><Cell col=\"4\" text=\"프로젝트명\"/><Cell col=\"5\" text=\"사용자ID\"/><Cell col=\"6\" text=\"사용자명\"/><Cell col=\"7\" text=\"로그인일시\"/><Cell col=\"8\" text=\"접속IP\"/><Cell col=\"9\" text=\"부서\"/><Cell col=\"10\" text=\"직책\"/><Cell col=\"11\" text=\"E-mail\"/><Cell col=\"12\" text=\"휴대전화\"/><Cell col=\"13\" text=\"전화번호\"/><Cell col=\"14\" text=\"FAX\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:history_time\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:login_device\"/><Cell col=\"3\" text=\"bind:login_browser\"/><Cell col=\"4\" text=\"bind:project_nm\"/><Cell col=\"5\" text=\"bind:user_cd\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:user_nm\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:login_dt\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:login_ip\" textAlign=\"center\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:dept_nm\"/><Cell col=\"10\" textAlign=\"center\" text=\"bind:user_position\"/><Cell col=\"11\" textAlign=\"center\" text=\"bind:user_email\"/><Cell col=\"12\" textAlign=\"center\" text=\"bind:user_mobile\"/><Cell col=\"13\" textAlign=\"center\" text=\"bind:user_tel\"/><Cell col=\"14\" textAlign=\"center\" text=\"bind:user_tax\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","0",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("3");
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
            obj.set_text("접속기기/환경");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","443","10","110","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch","Combo00:2","10","110","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staUserInfoSearch","698","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch00","19","40","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("시간");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtProjectInfoSearch","103","10","190","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtUserInfoSearch","781","10","200","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnProjectSearch","edtProjectInfoSearch:4","10","21","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_search02");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnUserSarch","edtUserInfoSearch:4","9","21","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search02");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","203","40","20","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch00","103","40","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch01","223","40","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","485","72","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","87",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("publishing026.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
