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
            this.set_titletext("Guide004");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1340",null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
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

            obj = new Static("Static08","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
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

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","Static01_00:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","1310","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static23",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1340",null,"700",null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","450","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button03","814","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","26",null,null,"Button03:5","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divEdit","Button03:5","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","0","26","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("0");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static04","0","56","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static05","0","86","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static06","0","116","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("3");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static07","0","146","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("4");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static08","0","176","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("5");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static09","0","206","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("6");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static10","118","26",null,"31","0",null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static11","118","56",null,"31","0",null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static12","118","116",null,"31","0",null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static13","118","86",null,"31","0",null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static14","118","176",null,"31","0",null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static15","118","146",null,"31","0",null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static17","118","206",null,"31","0",null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static18","0","236","120",null,null,"0",null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("14");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static16","118","236",null,null,"0","0",null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static19","283","26","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("16");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static20","283","86","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("17");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static21","282","206","120","31",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("18");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Edit("Edit00","128","31","148","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Edit("Edit01","127","61","431","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Combo("Combo00","127","91","148","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("21");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Combo("Combo01","127","121","431","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("22");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Combo("Combo02","410","31","148","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("23");
            obj.set_text("Combo00");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Combo("Combo03","410","91","148","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("24");
            obj.set_text("Combo00");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Edit("Edit02","127","151","407","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("25");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Edit("Edit03","127","181","431","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("26");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Combo("Combo04","127","211","148","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("27");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Edit("Edit04","410","211","148","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("28");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","126","241",null,null,"7","4",null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("29");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Button("Button00","537","151","21","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_search02");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static30","120","28","7","100",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("31");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static32","159","27","47","4",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("32");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static25","534","150","3","30",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("33");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static26","533","128","27","32",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("34");
            obj.set_text("3");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static28","328","224","27","32",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("35");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static29","119","237","200","4",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("36");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static37","119","745","200","4",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("38");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static39","558","28","7","100",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("39");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static36","327","729","27","32",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("37");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","810","21",null,null,null,null,null,null,this.divDetail.form.divEdit.form);
            obj.set_taborder("40");
            obj.set_text("Test");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.form.divEdit.addChild(obj.name, obj);

            obj = new Static("Static32","19","21","47","5",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static38","70","6","27","32",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01","800","83","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_01","809","86","5","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_01_00","824","86","5","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01_00","815","83","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static79","1666","18","134","72",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("모든 화면기준\r\ndivSearch = 검색조건영역\r\nbtnShowHide = 검색조건 접기버튼\r\ndivDetail   = 상세영역");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","1054","112","27","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("4");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38_00","944","122","27","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static38_00_00","1404","122","27","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("7");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divEdit.form
            obj = new Layout("default","",0,0,this.divDetail.form.divEdit.form,function(p){});
            this.divDetail.form.divEdit.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("Guide004.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
