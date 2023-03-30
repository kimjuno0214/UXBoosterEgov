(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide004");
            this.set_titletext("Guide016");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static23",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","1666","18","134","72",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("모든 화면기준\r\ndivSearch = 검색조건영역\r\nbtnShowHide = 검색조건 접기버튼\r\ndivDetail   = 상세영역");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","824","0","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_splitter");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","10","0",null,null,"Button03:5","10","670",null,"800",null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"72","0",null,"670",null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static00:10","10","195","21",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","305","0","50",null,null,"0",null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","355","10","80","21",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static05:10","10","195","21",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("2");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00","640","0","20",null,null,"0",null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","39","80","21",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","110","39","195","21",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05_00","355","39","80","21",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit11_00","445","39","195","21",null,null,null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("12");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divLeft.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divLeft.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.23%","72","60","10",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.divLeft.addChild(obj.name, obj);

            obj = new Div("divDetail","0","102",null,null,"0","0",null,null,null,null,this.divLeft.form);
            obj.set_taborder("2");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","450","21",null,null,null,null,null,null,this.divLeft.form.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divLeft.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static32","19","21","47","5",null,null,null,null,null,null,this.divLeft.form.divDetail.form);
            obj.set_taborder("1");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divLeft.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static38","70","6","27","32",null,null,null,null,null,null,this.divLeft.form.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divLeft.form.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","26",null,null,"0","0",null,null,null,null,this.divLeft.form.divDetail.form);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.divLeft.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","82",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_01_00","833","139","27","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_01_00","834","106","5","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_01_00_00","818","139","27","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static21_01_00_00","819","106","5","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divRight","Button03:5","0",null,null,"10","10","670",null,"800",null,this);
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"72","0",null,"670",null,null,null,this.divRight.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static00:10","10","195","21",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","305","0","50",null,null,"0",null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","355","10","80","21",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static05:10","10","195","21",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("2");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00","640","0","20",null,null,"0",null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","39","80","21",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","110","39","195","21",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05_00","355","39","80","21",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit11_00","445","39","195","21",null,null,null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("12");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divRight.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divRight.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.23%","72","60","10",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.divRight.addChild(obj.name, obj);

            obj = new Div("divDetail","0","102",null,"207","0",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static10_00","118","56",null,"31","0",null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_td01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","450","21",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static32","19","21","47","5",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("1");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static38","70","6","27","32",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static10","118","26",null,"31","0",null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static13","118","86",null,"31","0",null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12","118","116",null,"31","0",null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static14","118","146",null,"31","0",null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static09","118","176",null,"31","0",null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","127","181","148","21",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("CheckBox00");
            obj.set_cssclass("chk_WF_essential");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Combo("Combo01","127","151","416","21",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit03","127","121","416","21",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("edt_WF_essential");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit02","127","91","416","21",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_essential");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit01","127","61","416","21",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("edt_WF_essential");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00","127","31","416","21",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("edt_WF_essential");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","0","26","120","31",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","56","120","31",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static05","0","86","120","31",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static06","0","116","120","31",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static07","0","146","120","31",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08","0","176","120","31",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24_00","129","82","57","4",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","129","57","57","4",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("21");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static25","120","48","27","30",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_00","543","104","7","40",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("23");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21","120","104","7","40",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("24");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static25_00","120","69","27","30",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static25_00_00","110","99","27","30",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("7");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static25_00_00_00","554","99","27","30",null,null,null,null,null,null,this.divRight.form.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("7");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divRight.form.divDetail.addChild(obj.name, obj);

            obj = new Button("Button04","0","314",null,"10","0",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_splitter2");
            this.divRight.addChild(obj.name, obj);

            obj = new Div("divSub","0","Button04:5",null,null,"0","0",null,null,null,null,this.divRight.form);
            obj.set_taborder("3");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","450","21",null,null,null,null,null,null,this.divRight.form.divSub.form);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divRight.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static32","19","21","47","5",null,null,null,null,null,null,this.divRight.form.divSub.form);
            obj.set_taborder("1");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static38","70","6","27","32",null,null,null,null,null,null,this.divRight.form.divSub.form);
            obj.set_taborder("2");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divRight.form.divSub.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","26",null,null,"0","0",null,null,null,null,this.divRight.form.divSub.form);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.divRight.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static22_00_01","662","309","57","5",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("5");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static16_00_00","654","294","27","30",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static22_00_01_00","662","324","57","5",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("7");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static16_00_00_00","654","309","27","30",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLeft.form.divSearch.form
            obj = new Layout("default","",0,0,this.divLeft.form.divSearch.form,function(p){});
            this.divLeft.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft.form.divDetail.form
            obj = new Layout("default","",0,0,this.divLeft.form.divDetail.form,function(p){});
            this.divLeft.form.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft.form
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divSearch.form
            obj = new Layout("default","",0,0,this.divRight.form.divSearch.form,function(p){});
            this.divRight.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divDetail.form
            obj = new Layout("default","",0,0,this.divRight.form.divDetail.form,function(p){});
            this.divRight.form.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divSub.form
            obj = new Layout("default","",0,0,this.divRight.form.divSub.form,function(p){});
            this.divRight.form.divSub.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form
            obj = new Layout("default","",0,0,this.divRight.form,function(p){});
            this.divRight.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("Guide016.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
