(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frame01");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("LF_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">관리자1</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">코드관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">프로그램관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">권한관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">사용자관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">관리자2</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">코드관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">프로그램관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">권한관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">사용자관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">공지사항관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">품질보증서 LOG 관리</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">접속자 현황</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">시스템사용이력</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">DB테이블/쿼리질의</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">컨텐츠관리</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","1280","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_top_bg01");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","40","240",null,null,"26",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","60","734",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_iconBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","60","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_mymenu");
            obj.set_text("마이메뉴");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","0","60","60","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("최근메뉴");
            obj.set_cssclass("btn_LF_recent");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","0","120","60","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_icon01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","0","180","60","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_icon02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button04","0","240","60","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_LF_icon03");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button05","0","300","60","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_icon04");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button06","0","360","60","61",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_LF_icon05");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","60","0","170",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_LF_menuBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","60","34","170",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("grd_LF_menu");
            obj.set_binddataset("LF_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_treeusebutton("no");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:Column1\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button07","1","142","58","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("메뉴\r\r\n두줄");
            obj.set_cssclass("btn_LF_text");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button08","1","202","58","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("시스템");
            obj.set_cssclass("btn_LF_text");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button09","1","262","58","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("프로그램\r\n관리");
            obj.set_cssclass("btn_LF_text");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button10","1","322","58","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("사용자\r\n관리");
            obj.set_cssclass("btn_LF_text");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button11","1","382","58","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("게시판");
            obj.set_cssclass("btn_LF_text");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","68","5","156","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("ed_LF_search01");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button12","230","0","10",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_LF_conFold");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","240","40",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","1040","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_nav_bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","31","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_nav_home");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","30","2","160","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("mdi tab 01");
            obj.set_cssclass("btn_nav_tabSel");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","160","2","30","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_nav_extra02");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03","194","2","160","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("mdi tab 02");
            obj.set_cssclass("btn_nav_tab");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","324","2","30","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_nav_extra");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button06","358","2","160","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("mdi tab 03");
            obj.set_cssclass("btn_nav_tab");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button08","488","2","30","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_nav_extra");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button09",null,"0","31","30","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_nav_mdiClose");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button10",null,"0","30","30","30",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_nav_mdiMenu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button11",null,"0","31","30","70",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_nav_tabNext");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button12",null,"0","30","30","100",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_nav_tabPrev");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","30","2","30","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_nav_icon");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button04","194","2","30","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_nav_icon");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button07","358","2","30","24",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_nav_icon");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","170","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_top_logo");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","240","0","610","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("긴급공지사항긴급공지사항긴급공지사항긴급공지사항긴급공지사항긴급공지사항긴급공지사항긴...");
            obj.set_cssclass("sta_top_notice");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","40","40","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_top_icon04");
            this.addChild(obj.name, obj);

            obj = new Static("Static04",null,"0","40","40","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_top_icon03");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","40","40","80",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_top_icon02");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"0","40","40","120",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_top_icon01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"0","280","40","165",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_top_admin");
            obj.set_text("XXXXX 시스템 IT 기획팀 김태규(관리자)");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0",null,null,"26","0","0",null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"26","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("(07348)서울시 영등포구 도산로54길 6 (주)테이크 copyright (c)2019 Take CSS Corp. All rights reserved");
            obj.set_cssclass("sta_btm_bg");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","240","115","1040","659",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("guide::form/smpForm01.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","250","70","1030","45",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","13","610","19",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("코드관리");
            obj.set_cssclass("sta_WF_title01");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","58","25","316",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search01");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button01",null,"10","58","25","253",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("2");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_new01");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button02",null,"10","58","25","190",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_delete01");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button03",null,"10","58","25","127",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save01");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button04",null,"10","58","25","64",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("5");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_print01");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button05",null,"10","22","24","10",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_advice01");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","86","13","250","19",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("7");
            obj.set_text("시스템관리 > 코드관리");
            obj.set_cssclass("sta_WF_navi");
            this.Div04.addChild(obj.name, obj);

            obj = new Button("Button06",null,"10","22","24","37",null,null,null,null,null,this.Div04.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_reset01");
            this.Div04.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","guide::form/smpForm01.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frame01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
