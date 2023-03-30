(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Guide008");
            this.set_titletext("Guide014");
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
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","-45",null,"45","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0",null,null,"10","0","0",null,null,null,null,this);
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
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","814","0","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_splitter");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","0",null,null,"Button03:5","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01","1080","83","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_01","1089","86","5","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static21_01_00","1104","86","5","40",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01_01_00","421","729","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("3");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static23_01_00","1095","83","27","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSub","Button03:5","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button04",null,"0","27","27","1",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_tabNext");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Button("Button05",null,"0","27","27","30",null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_tabPrev");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Button("Button06","180","0","90","27",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("3");
            obj.set_text("tab03");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Button("Button01","90","0","90","27",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("4");
            obj.set_text("tab02");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","90","27",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("5");
            obj.set_text("tab01");
            obj.set_cssclass("btn_WF_tab02");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Div("Div02","0","27",null,null,"0","0",null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("6");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static00","0","5","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","0","35","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","0","65","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","0","95","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","0","125","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("5");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","0","155","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("6");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","0","185","120","31",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("7");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","118","5",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","118","35",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static12","118","95",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static13","118","65",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static14","118","155",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static15","118","125",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static17","118","185",null,"31","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","127","10","393","21",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("15");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","127","40","393","21",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","127","70","393","21",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("17");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo01","127","100","393","21",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("18");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02","127","130","369","21",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("19");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit03","127","160","393","21",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("20");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo04","127","190","393","21",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("21");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","Edit02:3","130","21","21",null,null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_search02");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static04",null,"0","100","5","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("5");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"717","100","3","0",null,null,null,null,null,this.divDetail.form.divSub.form.Div02.form);
            obj.set_taborder("23");
            obj.set_text("3");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divSub.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static23_01_01","421","15","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("0");
            obj.set_text("5");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static23_01_01_01","423","729","27","30",null,null,null,null,null,null,this.divDetail.form.divSub.form);
            obj.set_taborder("7");
            obj.set_text("3");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.divDetail.form.divSub.addChild(obj.name, obj);

            obj = new Static("Static79","1666","18","134","72",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("모든 화면기준\r\ndivSearch = 검색조건영역\r\nbtnShowHide = 검색조건 접기버튼\r\ndivDetail   = 상세영역");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","0",null,"43","10",null,"1340",null,null,null,this);
            obj.set_taborder("8");
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
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divSub.form.Div02.form
            obj = new Layout("default","",0,0,this.divDetail.form.divSub.form.Div02.form,function(p){});
            this.divDetail.form.divSub.form.Div02.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("Guide014.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
