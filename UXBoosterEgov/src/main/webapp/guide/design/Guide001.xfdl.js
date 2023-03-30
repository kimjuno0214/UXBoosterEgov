(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide001");
            this.set_titletext("Guide001");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Common Code</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">0002</Col><Col id=\"Column2\">언어코드</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">다국어대분류</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">시스템</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">화면유형</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0002</Col><Col id=\"Column2\">언어코드</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">다국어대분류</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">시스템</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">화면유형</Col><Col id=\"Column6\">사용</Col></Row><Row/><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">다국어대분류</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">시스템</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">화면유형</Col><Col id=\"Column6\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","10","0",null,null,"10","10","1340",null,"700",null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","1084","0","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"Button03:5","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_fillareatype("linerow");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01","1070","83","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_01","1079","86","5","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_01_00","1094","86","5","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01_00","1085","83","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button04","Grid00:20","186",null,"10","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_splitter2");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSub","Button03:5","0",null,null,"0","Button04:5",null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("0");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static04","0","30","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static05","0","60","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static06","0","90","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("3");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static10","118","0",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static11","118","30",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static12","118","90",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static13","118","60",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Edit("Edit00","127","5","406","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Edit("Edit01","127","35","406","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static07","0","120","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("10");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static08","0","150","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static09","118","150",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static14","118","120",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Edit("Edit02","127","65","406","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Combo("Combo01","127","125","406","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("15");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Edit("Edit03","127","95","406","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","127","155","150","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("17");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static21","120","76","7","40",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("18");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static23","111","73","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("19");
            obj.set_text("7");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static24","129","31","57","4",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static25","119","20","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("21");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static21_00","533","76","7","40",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("22");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static23_00","524","75","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("23");
            obj.set_text("7");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static24_00","129","56","57","4",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("24");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static25_00","119","45","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("25");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static22_00_00","1492","196","57","5",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","1484","181","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static16_00","1484","166","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static22_00","1492","181","57","5",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSub2","Button03:5","Button04:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button01",null,"0","46","21","0",null,null,null,null,null,this.divDetail.form.divSub2.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.divDetail.form.divSub2.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","46","21","49",null,null,null,null,null,this.divDetail.form.divSub2.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_cancel02");
            this.divDetail.form.divSub2.addChild(obj.name, obj);

            obj = new Button("Button02",null,"0","46","21","98",null,null,null,null,null,this.divDetail.form.divSub2.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_plus01");
            this.divDetail.form.divSub2.addChild(obj.name, obj);

            obj = new Static("Static16","375","6","27","30",null,null,null,null,null,null,this.divDetail.form.divSub2.form);
            obj.set_taborder("3");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub2.addChild(obj.name, obj);

            obj = new Static("Static22","383","21","57","5",null,null,null,null,null,null,this.divDetail.form.divSub2.form);
            obj.set_taborder("4");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub2.addChild(obj.name, obj);

            obj = new Static("Static26","491","-5","3","40",null,null,null,null,null,null,this.divDetail.form.divSub2.form);
            obj.set_taborder("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub2.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form.divSub2.form);
            obj.set_taborder("7");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.divDetail.form.divSub2.addChild(obj.name, obj);

            obj = new Static("Static27","484","18","27","30",null,null,null,null,null,null,this.divDetail.form.divSub2.form);
            obj.set_taborder("5");
            obj.set_text("3");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub2.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static28",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","1666","18","134","72",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("모든 화면기준\r\ndivSearch = 검색조건영역\r\nbtnShowHide = 검색조건 접기버튼\r\ndivDetail   = 상세영역");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form.divSub.form
            obj = new Layout("default","",0,0,this.divDetail.form.divSub.form,function(p){});
            this.divDetail.form.divSub.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divSub2.form
            obj = new Layout("default","",0,0,this.divDetail.form.divSub2.form,function(p){});
            this.divDetail.form.divSub2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
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
        this.loadIncludeScript("Guide001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
