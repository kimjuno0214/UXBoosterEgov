(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS020P01_1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01_00","0","0",null,"20","170",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"0","20",null,"170","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"40",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","170","40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","41",null,"5","170",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H5");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnProgramSearch",null,"20","50","21","190",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search03");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","46",null,"43","190",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staProgramNm","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","staProgramNm:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","295","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnSearch","345","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnSearch:10","10","201","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsUseYnAll");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","37.89%","89","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","119",null,null,"190","103",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("위해정보코드 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"500\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"0\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"인증분야\" cssclass=\"cellImport\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"1\" text=\"위해정보코드\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"부적합 유형\" cssclass=\"cellImport\"/><Cell col=\"3\" text=\"위해정보\" cssclass=\"cellImport\"/><Cell col=\"4\" text=\"정렬순번\" cssclass=\"cellImport\"/><Cell col=\"5\" text=\"사용여부\" cssclass=\"cellImport\"/><Cell col=\"6\" text=\"Doc Key\"/></Band><Band id=\"body\"><Cell text=\"bind:REF1\" textAlign=\"center\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"1\" text=\"bind:CODE_ID\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:CODE_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:REF2\" textAlign=\"left\" wordWrap=\"char\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:CODE_ORDER\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"5\" text=\"bind:USE_YN\" textAlign=\"center\" wordWrap=\"char\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsUseYn\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"6\" text=\"bind:CODE_KEY\" textAlign=\"left\" wordWrap=\"char\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDelHarmInfo",null,"0","110","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("  행삭제  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddHarmInfo",null,"0","110","21","btnDelHarmInfo:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("  행추가  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDownExcel",null,"0","110","21","btnAddHarmInfo:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("  엑셀다운로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUploadExcel",null,"0","110","21","btnDownExcel:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("  엑셀업로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","99",null,"20","170",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","170","83",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","190","60",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,null,"57","23","250","60",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staProgramNm.set_taborder("0");
                p.staProgramNm.set_text("인증분야");
                p.staProgramNm.set_cssclass("sta_WF_textR");
                p.staProgramNm.move("20","10","80","21",null,null);

                p.cboCertFldCd.set_taborder("1");
                p.cboCertFldCd.set_innerdataset("dsCertFldCd");
                p.cboCertFldCd.set_codecolumn("CODE");
                p.cboCertFldCd.set_datacolumn("NAME");
                p.cboCertFldCd.set_text("");
                p.cboCertFldCd.set_value("어린이");
                p.cboCertFldCd.set_index("0");
                p.cboCertFldCd.move("staProgramNm:10","10","195","21",null,null);

                p.Static07_00_01.set_taborder("2");
                p.Static07_00_01.set_text("50");
                p.Static07_00_01.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01.set_visible("false");
                p.Static07_00_01.set_color("#ff0000");
                p.Static07_00_01.set_textAlign("center");
                p.Static07_00_01.move("295","0","50",null,null,"0");

                p.staUseYnSearch.set_taborder("3");
                p.staUseYnSearch.set_text("사용여부");
                p.staUseYnSearch.set_cssclass("sta_WF_textR");
                p.staUseYnSearch.move("345","10","80","21",null,null);

                p.cboUseYn.set_taborder("4");
                p.cboUseYn.set_innerdataset("dsUseYnAll");
                p.cboUseYn.set_codecolumn("CODE");
                p.cboUseYn.set_datacolumn("NAME");
                p.cboUseYn.set_text("");
                p.cboUseYn.set_index("-1");
                p.cboUseYn.move("staUseYnSearch:10","10","201","21",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("default0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static24.set_taborder("1");
                p.Static24.set_text("위해정보코드 목록");
                p.Static24.set_cssclass("sta_WF_title02");
                p.Static24.move("0","0",null,"21","0",null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","26",null,null,"0","0");

                p.btnDelHarmInfo.set_taborder("2");
                p.btnDelHarmInfo.set_text("  행삭제  ");
                p.btnDelHarmInfo.set_cssclass("btn_WF_Custom");
                p.btnDelHarmInfo.set_fittocontents("width");
                p.btnDelHarmInfo.set_visible("true");
                p.btnDelHarmInfo.move(null,"0","110","21","0",null);

                p.btnAddHarmInfo.set_taborder("3");
                p.btnAddHarmInfo.set_text("  행추가  ");
                p.btnAddHarmInfo.set_cssclass("btn_WF_Custom");
                p.btnAddHarmInfo.set_fittocontents("width");
                p.btnAddHarmInfo.set_visible("true");
                p.btnAddHarmInfo.move(null,"0","110","21","btnDelHarmInfo:3",null);

                p.btnDownExcel.set_taborder("4");
                p.btnDownExcel.set_text("  엑셀다운로드  ");
                p.btnDownExcel.set_cssclass("btn_WF_Custom");
                p.btnDownExcel.set_fittocontents("width");
                p.btnDownExcel.set_visible("true");
                p.btnDownExcel.move(null,"0","110","21","btnAddHarmInfo:3",null);

                p.btnUploadExcel.set_taborder("5");
                p.btnUploadExcel.set_text("  엑셀업로드  ");
                p.btnUploadExcel.set_cssclass("btn_WF_Custom");
                p.btnUploadExcel.set_fittocontents("width");
                p.btnUploadExcel.set_visible("true");
                p.btnUploadExcel.move(null,"0","110","21","btnDownExcel:3",null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_autofittype("col");
                p.grdList.set_oncelldblclick("divSearch_grdList_oncelldblclick");
                p.grdList.set_binddataset("dsProgramCd");
                p.grdList.move("10","79",null,"350","10",null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboCertFldCd","value","dsSearch","REF1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnProgramSearch.addEventHandler("onclick",this.fnSearch,this);
            this.divSearch.form.cboCertFldCd.addEventHandler("onitemchanged",this.fnSearch,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.fnSearch,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.grdList.addEventHandler("oncelldblclick",this.btnEnter_onclick,this);
            this.divDetail.form.btnDelHarmInfo.addEventHandler("onclick",this.fnDelRow,this);
            this.divDetail.form.btnAddHarmInfo.addEventHandler("onclick",this.fnAddRow,this);
            this.divDetail.form.btnDownExcel.addEventHandler("onclick",this.btnExcelDownload_onclick,this);
            this.divDetail.form.btnUploadExcel.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.fnClose,this);
            this.btnEnter.addEventHandler("onclick",this.fnSave,this);
        };
        this.loadIncludeScript("BAS020P01_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
