(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide009");
            this.set_titletext("Guide013");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">[0002]가나다라</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]가나다라_ABC</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]가나다라</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]가나다라_ABC</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]가나다라</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]가나다라_ABC</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]가나다라</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]가나다라_ABC</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]가나다라</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]가나다라_ABC</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]가나다라</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]가나다라_ABC</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">0002</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0002</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column2\">가나다라</Col><Col id=\"Column1\">0002</Col></Row><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column6\">사용</Col></Row></Rows>");
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

            obj = new Static("Static05","10",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.10%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1340",null,"700",null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","280","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button03","295","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_splitter");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","26",null,null,"Button03:5","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_fillareatype("linerow");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:Column1\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01","281","83","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_01","290","86","5","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_01_00","305","86","5","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01_00","296","83","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSub","Button03:5","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","0","26","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("0");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","56","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static05","0","86","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static06","0","116","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("3");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static10","118","26",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static11","118","56",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static12","118","116",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static13","118","86",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Edit("Edit00","127","31","416","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Edit("Edit01","127","61","416","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("9");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static07","0","146","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("10");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static08","0","176","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static09","118","176",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static14","118","146",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Edit("Edit02","127","91","416","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("14");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Combo("Combo01","127","151","416","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("15");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Edit("Edit03","127","121","416","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","127","181","148","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("17");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_essential");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static21","120","104","7","40",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("18");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static23","121","81","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("19");
            obj.set_text("7");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static24","129","57","57","4",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static25","120","48","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("21");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static21_00","543","104","7","40",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("22");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static23_00","543","81","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("23");
            obj.set_text("7");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static25_00","119","71","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("24");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static24_00","129","82","57","4",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("25");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","500","21",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("26");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static79","1666","18","134","72",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("모든 화면기준\r\ndivSearch = 검색조건영역\r\nbtnShowHide = 검색조건 접기버튼\r\ndivDetail   = 상세영역");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","0",null,"43","10",null,"1340",null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static00:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static05:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static01:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00","1310","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","Static01_00:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form.divSub.form
            obj = new Layout("default","",0,0,this.divDetail.form.divSub.form,function(p){});
            this.divDetail.form.divSub.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
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
        this.loadIncludeScript("Guide013.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
