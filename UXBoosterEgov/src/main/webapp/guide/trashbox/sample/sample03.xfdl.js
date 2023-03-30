(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample3");
            this.set_titletext("Layout3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/><Column id=\"col6\" type=\"STRING\" size=\"256\"/><Column id=\"col7\" type=\"STRING\" size=\"256\"/><Column id=\"col8\" type=\"STRING\" size=\"256\"/><Column id=\"col9\" type=\"STRING\" size=\"256\"/><Column id=\"col10\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/><Column id=\"col6\" type=\"STRING\" size=\"256\"/><Column id=\"col7\" type=\"STRING\" size=\"256\"/><Column id=\"col8\" type=\"STRING\" size=\"256\"/><Column id=\"col9\" type=\"STRING\" size=\"256\"/><Column id=\"col10\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">Data01</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data02</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data03</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data04</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data05</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data06</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data07</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data08</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data09</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">Data10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail00", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"Column1\">Data01</Col><Col id=\"Column2\">Data01</Col><Col id=\"Column3\">Data01</Col><Col id=\"Column4\">Data01</Col><Col id=\"Column5\">Data01</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column1\">Data02</Col><Col id=\"Column2\">Data02</Col><Col id=\"Column3\">Data02</Col><Col id=\"Column4\">Data02</Col><Col id=\"Column5\">Data02</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column1\">Data03</Col><Col id=\"Column2\">Data03</Col><Col id=\"Column3\">Data03</Col><Col id=\"Column4\">Data03</Col><Col id=\"Column5\">Data03</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column1\">Data04</Col><Col id=\"Column2\">Data04</Col><Col id=\"Column3\">Data04</Col><Col id=\"Column4\">Data04</Col><Col id=\"Column5\">Data04</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column1\">Data05</Col><Col id=\"Column2\">Data05</Col><Col id=\"Column3\">Data05</Col><Col id=\"Column4\">Data05</Col><Col id=\"Column5\">Data05</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"Column1\">Data06</Col><Col id=\"Column2\">Data06</Col><Col id=\"Column3\">Data06</Col><Col id=\"Column4\">Data06</Col><Col id=\"Column5\">Data06</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staLable01","19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("키값");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtKey","staLable01:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLable02","edtKey:19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("데이터1");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtText01","staLable02:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYn","edtText01:19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYn:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.08%","divSearch:0","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","866",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("리스트타이틀");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","staTitle:0","250",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("3");
            obj.set_binddataset("dsList00");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_cssclass("gid_WF_Noborder");
            obj.set_treeusebutton("noclick");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column1\" treelevel=\"bind:Column0\" displaytype=\"treeitemcontrol\" edittype=\"tree\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static27","grdMain:0","0","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable06","Static27:0","0",null,"30","90",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("디테일타이틀");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDetail","260","staLable06:0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsDetail00");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("checkbox,readonly");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"270\"/><Column size=\"100\"/><Column size=\"69\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"키값\" cssclass=\"CellEssential\"/><Cell col=\"1\" text=\"데이터1\"/><Cell col=\"2\" text=\"데이터2\"/><Cell col=\"3\" text=\"데이터3\"/><Cell col=\"4\" text=\"데이터4\" cssclass=\"CellEssential\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:Column2\" textAlign=\"left\"/><Cell col=\"2\" edittype=\"text\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:Column4\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:Column5\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCboUseYn\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1030","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtText01","value","dsSearch","col2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboUseYn","value","dsSearch","use_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtKey","value","dsSearch","col2");
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
            this.addEventHandler("onload",this.Form_onload,this);
            this.dsList00.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("sample03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
