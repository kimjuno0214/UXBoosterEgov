(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDoc");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBind", this);
            obj._setContents("<ColumnInfo><Column id=\"comp\" type=\"STRING\" size=\"256\"/><Column id=\"dataset\" type=\"STRING\" size=\"256\"/><Column id=\"col\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataset", this);
            obj._setContents("<ColumnInfo><Column id=\"dsname\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"colname\" type=\"STRING\" size=\"256\"/><Column id=\"coltype\" type=\"STRING\" size=\"256\"/><Column id=\"colsize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComp", this);
            obj._setContents("<ColumnInfo><Column id=\"compnm\" type=\"STRING\" size=\"256\"/><Column id=\"comptype\" type=\"STRING\" size=\"256\"/><Column id=\"etc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPropInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"property\" type=\"STRING\" size=\"256\"/><Column id=\"propvalue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvent", this);
            obj._setContents("<ColumnInfo><Column id=\"eventnm\" type=\"STRING\" size=\"256\"/><Column id=\"func\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTran", this);
            obj._setContents("<ColumnInfo><Column id=\"tranid\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"tranparam\" type=\"STRING\" size=\"256\"/><Column id=\"tranvalue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVar", this);
            obj._setContents("<ColumnInfo><Column id=\"variable\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnInfo",null,"9","80","27","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("  Reroad");
            obj.set_cssclass("btn_WF_reset01");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnBind","10","13","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Bind");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("btnDataset","111","13","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Dataset");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Div("divBind","10","40",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBind","0","0",null,null,"0","0",null,null,null,null,this.divBind.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsBind");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"291\"/><Column size=\"160\"/><Column size=\"144\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Component\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"Dataset\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"Column\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:comp\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:dataset\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:col\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.divBind.addChild(obj.name, obj);

            obj = new Button("btnTran","313","13","80","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Transaction");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnComp","212","13","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Comp");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Div("divDataset","1045","40","619",null,null,"10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDataset","0","0","200",null,null,"0",null,null,null,null,this.divDataset.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDataset");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"135\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Dataset\" padding=\"0px\"/><Cell col=\"1\" text=\"Data\"/></Band><Band id=\"body\"><Cell text=\"bind:dsname\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" text=\"View\" padding=\"0px\" font=\"12px/normal &quot;Helvetica&quot;\"/></Band></Format></Formats>");
            this.divDataset.addChild(obj.name, obj);

            obj = new Grid("grdDatasetCol","205","0",null,null,"0","0",null,null,null,null,this.divDataset.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsColInfo");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column\"/><Cell col=\"1\" text=\"Type\"/><Cell col=\"2\" text=\"Size\"/></Band><Band id=\"body\"><Cell text=\"bind:colname\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:coltype\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:colsize\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\"/></Band></Format></Formats>");
            this.divDataset.addChild(obj.name, obj);

            obj = new Div("divComp","1685","40","619",null,null,"10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdComp","0","0","370",null,null,"0",null,null,null,null,this.divComp.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsComp");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"358\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Component\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:compnm\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" tooltiptext=\"bind:comptype\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.divComp.addChild(obj.name, obj);

            obj = new Grid("grdProp","375","0",null,"300","0",null,null,null,null,null,this.divComp.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsPropInfo");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"149\"/><Column size=\"89\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Property\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"Value\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:property\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:propvalue\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.divComp.addChild(obj.name, obj);

            obj = new Grid("grdEvent","375","300",null,null,"0","0",null,null,null,null,this.divComp.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsEvent");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"234\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Event\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:eventnm\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.divComp.addChild(obj.name, obj);

            obj = new PopupDiv("pDivFunck","3644","70","220","530",null,null,null,null,null,null,this);
            obj.set_border("1px solid");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtFunc","5","36",null,null,"5","5",null,null,null,null,this.pDivFunck.form);
            obj.set_taborder("0");
            obj.set_font("12px/normal \"Helvetica\"");
            obj.set_readonly("true");
            this.pDivFunck.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"5","50","27","5",null,null,null,null,null,this.pDivFunck.form);
            obj.set_taborder("1");
            obj.set_text("Close");
            obj.set_font("12px/normal \"Helvetica\"");
            this.pDivFunck.addChild(obj.name, obj);

            obj = new Static("staText","5","5",null,"30","80",null,null,null,null,null,this.pDivFunck.form);
            obj.set_taborder("2");
            obj.set_text("- Event");
            obj.set_font("bold 12px/normal \"Helvetica\"");
            this.pDivFunck.addChild(obj.name, obj);

            obj = new Div("divTran","2325","40","619",null,null,"10",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#ffffff");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTran","0","0","350",null,null,"0",null,null,null,null,this.divTran.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTran");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"329\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Transaction id\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:tranid\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.divTran.addChild(obj.name, obj);

            obj = new Grid("grdTranVal","355","0",null,null,"0","0",null,null,null,null,this.divTran.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsTranInfo");
            obj.set_autosizebandtype("allband");
            obj.set_autosizingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"146\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Param\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"Value\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:tranparam\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:tranvalue\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\" tooltiptext=\"bind:tranvalue\"/></Band></Format></Formats>");
            this.divTran.addChild(obj.name, obj);

            obj = new PopupDiv("pDivDataset","3894","70","400","530",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtXML","5","63",null,null,"5","5",null,null,null,null,this.pDivDataset.form);
            obj.set_taborder("0");
            obj.set_font("12px/normal \"Helvetica\"");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_enable("false");
            this.pDivDataset.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"5","50","27","5",null,null,null,null,null,this.pDivDataset.form);
            obj.set_taborder("1");
            obj.set_text("Close");
            obj.set_font("12px/normal \"Helvetica\"");
            this.pDivDataset.addChild(obj.name, obj);

            obj = new Static("staText","5","5",null,"30","80",null,null,null,null,null,this.pDivDataset.form);
            obj.set_taborder("2");
            obj.set_text("- Dataset");
            obj.set_font("bold 12px/normal \"Helvetica\"");
            this.pDivDataset.addChild(obj.name, obj);

            obj = new Button("btnData","5","36",null,"27","50.00%",null,null,null,null,null,this.pDivDataset.form);
            obj.set_taborder("3");
            obj.set_text("Data");
            obj.set_cssclass("btn_WF_tab02");
            this.pDivDataset.addChild(obj.name, obj);

            obj = new Button("btnXML","btnData:1","36",null,"27","5",null,null,null,null,null,this.pDivDataset.form);
            obj.set_taborder("4");
            obj.set_text("XML(all)");
            obj.set_cssclass("btn_WF_tab01");
            this.pDivDataset.addChild(obj.name, obj);

            obj = new Grid("grdData","5","63",null,null,"5","5",null,null,null,null,this.pDivDataset.form);
            obj.set_taborder("5");
            obj.set_scrollbartype("fixed fixed");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("col");
            obj._setContents("");
            this.pDivDataset.addChild(obj.name, obj);

            obj = new Button("btnVar","394","13","80","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Variables");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Div("divVar","2985","40",null,null,"-2580","10",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdVar","0","0",null,null,"0","0",null,null,null,null,this.divVar.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsVar");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"291\"/><Column size=\"160\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Variable\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"Value\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:variable\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:value\" font=\"12px/normal &quot;Helvetica&quot;\" padding=\"0px\" autosizecol=\"limitmin\"/></Band></Format></Formats>");
            this.divVar.addChild(obj.name, obj);

            obj = new Static("Static22","863","36","57","4",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFormId","480","16",null,"20","96",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBind.form
            obj = new Layout("default","",0,0,this.divBind.form,function(p){});
            this.divBind.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDataset.form
            obj = new Layout("default","",0,0,this.divDataset.form,function(p){});
            this.divDataset.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divComp.form
            obj = new Layout("default","",0,0,this.divComp.form,function(p){});
            this.divComp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDivFunck.form
            obj = new Layout("default","",0,0,this.pDivFunck.form,function(p){});
            this.pDivFunck.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTran.form
            obj = new Layout("default","",0,0,this.divTran.form,function(p){});
            this.divTran.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDivDataset.form
            obj = new Layout("default","",0,0,this.pDivDataset.form,function(p){});
            this.pDivDataset.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divVar.form
            obj = new Layout("default","",0,0,this.divVar.form,function(p){});
            this.divVar.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1024,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comDebugNew.xfdl", function() {
        this.fv_objForm = null;

        this.sampleDoc_onload = function(obj,e)
        {
        	this.fv_objForm = this.opener;
            this.edtFormId.set_value("application." + this.opener._unique_id);
            this.btnInfo.click();
        };

        //form에 대한 프러퍼티 및 이벤트 처리 필요
        this.btnInfo_onclick = function(obj,e)
        {
            //console.dir(this);
        //     this.alert("Data조회 후 가져오기 하셔야 정확한 정보를 가져올 수 있습니다.");
            this.fnBindInfo();
        //     this.fnDatasetInfo();
        //     this.fnTranInfo();
        //     this.fnCompInfo();
        //     this.fnVarInfo();
        };

        this.btnTab_onclick = function(obj,e)
        {
            var objDiv = this.components[obj.name.replace("btn","div")];
            this.fnDivSetTab(obj, objDiv);

            //var sFn = "fn"+obj.name.substr(3)+"Info";

            //this[sFn].call(this);
        };

        this.fnDivSetTab = function(objBtn, objDiv)
        {
            var sGbn;

            this.divBind.set_visible(false);
            this.divComp.set_visible(false);
            this.divDataset.set_visible(false);
            this.divTran.set_visible(false);
            this.divVar.set_visible(false);

            this.divBind.set_enable(false);
            this.divComp.set_enable(false);
            this.divDataset.set_enable(false);
            this.divTran.set_enable(false);
            this.divVar.set_enable(false);

            this.btnBind.set_cssclass("btn_WF_tab01");
            this.btnComp.set_cssclass("btn_WF_tab01");
            this.btnDataset.set_cssclass("btn_WF_tab01");
            this.btnTran.set_cssclass("btn_WF_tab01");
            this.btnVar.set_cssclass("btn_WF_tab01");

            objDiv.set_visible(true);
            objDiv.set_enable(true);
            objDiv.set_top(40);
            objDiv.set_bottom(10);
            objDiv.set_left(10);
            objDiv.set_right(10);
            objBtn.set_cssclass("btn_WF_tab02");

            sGbn = objDiv.name.substr(3);

            switch(sGbn)
            {
                case "Bind":
                    this.fnBindInfo();
                    break;
                case "Comp":
                    this.fnCompInfo();
                    break;
                case "Dataset":
                    this.fnDatasetInfo();
                    break;
                case "Tran":
                    this.fnTranInfo();
                    break;
                case "Var":
                    this.fnVarInfo();
                    break;
            }

        }


        this.divComp_grdEvent_oncellclick = function(obj,e)
        {
            var objPdiv, objDiv, objCompDs, objDs;
            var sFunc, sEvent, sCompNm;

            objDiv = this.divComp;
            objPdiv = this.pDivFunck;
            objCompDs = this.dsComp;
            objDs = this.dsEvent;

            sCompNm = objCompDs.getColumn(objCompDs.rowposition,"compnm")
            sFunc = objDs.getColumn(e.row, "func");
            sEvent = sCompNm + " : " + objDs.getColumn(e.row, "eventnm");

            objPdiv.form.staText.set_text(sEvent);
            objPdiv.form.txtFunc.set_value(sFunc);

            objPdiv.form.txtFunc.scrollTo(0,0);

        	objPdiv.trackPopup(objDiv.getOffsetLeft(), objDiv.getOffsetTop()+30, objDiv.getOffsetWidth(), objDiv.getOffsetHeight()-30);
        };


        this.pDivFunck_btnClose_onclick = function(obj,e)
        {
        	this.pDivFunck.closePopup();
        };

        this.pDivDataset_btnClose_onclick = function(obj,e)
        {
        	this.pDivDataset.closePopup();
        };

        this.divDataset_grdDataset_oncellclick = function(obj,e)
        {
            if (e.cell==1)
            {
                this.fnDataView(e.row);
            } else {
                this.fnColInfo(e.row);
            }
        };

        this.divComp_grdComp_oncellclick = function(obj,e)
        {
        	if (this.dsComp.getColumn(e.row, "comptype")!="Grid.Cell")
            {
                this.fnPropInfo(e.row);
                this.fnEventInfo(e.row);
            } else {
                this.fnCellInfo(e.row);
                this.dsEvent.clearData();
            }
        };

        this.divTran_grdTran_oncellclick = function(obj,e)
        {
        	this.fnTranParam(e.row);
        };


        this.grid_onkeydown = function(obj,e)
        {
            if (e.ctrlkey)
        	{
                if (e.keycode==67)
                {
                    this.fnCopy(obj, e);
                    e.stopPropagation();
                }
            }
        };

        this.pDivDataset_btnTab_onclick = function(obj,e)
        {
        	var sName;
            var objPDiv, objBtnXml, objBtnData, objGrid, objTxt;

            objPDiv = this.pDivDataset.form;
            objBtnXml = objPDiv.btnXML;
            objBtnData = objPDiv.btnData;
            objGrid = objPDiv.grdData;
            objTxt = objPDiv.txtXML;

            objBtnData.set_cssclass("btn_WF_tab01");
            objGrid.set_visible(false);
            objGrid.set_enable(false);

            objBtnXml.set_cssclass("btn_WF_tab01");
            objTxt.set_visible(false);
            objTxt.set_enable(false);

            obj.set_visible(true);
            obj.set_enable(true);
            obj.set_cssclass("btn_WF_tab02");

            sName = obj.name.replace("btn","");

            if (sName == "Data")
            {
                objGrid.set_visible(true);
                objGrid.set_enable(true);
            } else {
                objTxt.set_visible(true);
                objTxt.set_enable(true);
            }
        };

        this.dsComp_onrowposchanged = function(obj,e)
        {
        	if (this.dsComp.getColumn(e.newrow, "comptype")!="Grid.Cell")
            {
                this.fnPropInfo(e.newrow);
                this.fnEventInfo(e.newrow);
            } else {
                this.fnCellInfo(e.newrow);
                this.dsEvent.clearData();
            }
        };

        this.dsDataset_onrowposchanged = function(obj,e)
        {
        	this.fnColInfo(e.newrow);
        };

        this.dsTran_onrowposchanged = function(obj,e)
        {
        	this.fnTranParam(e.newrow);
        };

        this.fnCompInfo = function(sParent, objForm)
        {
            var arrComp = new Array();
            var objComp, objDs;
            var nCnt, nRow;
            var sType, sScope;

            objDs = this.dsComp;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objDs.clearData();
                objForm = this.fv_objForm;
            }

            if (!objDs.hasOwnProperty("_objComp"))
            {
                objDs["_objComp"] = new Object();
            }

            if (objForm._type_name=="Tab")
            {
                arrComp = arrComp.concat(objForm.tabpages._idArray);
            } else {
                arrComp = arrComp.concat(objForm.components._idArray);
                arrComp = arrComp.concat(objForm.objects._idArray);
            }

            nCnt = arrComp.length;

            if (nCnt<=0) return;

            objDs.set_enableevent(false);

            //Div에 연결된 폼일경우만 폼 객체의 정보를 삽입
            if (take.nvl(objForm.parent.url,"")!="")
            {
                //폼 객체
                nRow = objDs.addRow();

                objDs.setColumn(nRow, "compnm", sParent + (sParent=="this"?"":".form"));
                objDs.setColumn(nRow, "comptype", "Form");
                //objDs._objComp[nRow] = (sParent=="this"?this.fv_objForm :objForm);
                objDs._objComp[nRow] = objForm;
            }

            for (var i=0; i<nCnt; i++)
            {
                objComp = objForm[arrComp[i]];
                nRow = objDs.addRow();

                sScope = sParent + "." + objComp.name;
                sType =  objComp._type_name;
                objDs.setColumn(nRow, "compnm", sScope);
                objDs.setColumn(nRow, "comptype", sType);

                objDs._objComp[nRow] = objComp;

                switch(sType)
                {
                    case "Tab":
                        this.fnCompInfo(sScope, objComp);
                        break;
                    case "Div":
                    case "TabpageControl":
                    case "PopupDiv":

                        this.fnCompInfo(sScope, objComp.form);

                        if (take.nvl(objComp.url,"")!="")
                        {
                            this.fnBindInfo(sScope, objComp.form);
                            this.fnTranInfo(sScope, objComp.form);
                            this.fnDatasetInfo(sScope, objComp.form);
                            this.fnVarInfo(sScope, objComp.form);
                        }
                        break;
                    case "Grid":
                        this.fnGridInfo(sScope, objComp, objDs, "head");
                        this.fnGridInfo(sScope, objComp, objDs, "body");
                        this.fnGridInfo(sScope, objComp, objDs, "summary");
                        break;

                    default:
                }
            }

            objDs.set_rowposition(0);

            objDs.set_enableevent(true);

            if (objDs.getColumn(0, "comptype")!="Grid.Cell")
            {
                this.fnPropInfo(0);
                this.fnEventInfo(0);
            } else {
                this.fnCellInfo(0);
            }
        }

        this.fnBindInfo = function(sParent, objForm)
        {
            var arrBind, objBind, objItem, objBindDs;
            var sText = "";
            var nCnt, nRow;

            objBindDs = this.dsBind;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm ;
                objBindDs.clearData()
            }
            objBind = objForm.binds;
            arrBind = objBind._idArray ;

            nCnt = arrBind.length;

            if (nCnt<=0) return;

             objBindDs.set_enableevent(false);

            for (var i=0; i<nCnt; i++)
            {
                objItem = objBind[arrBind[i]];

                nRow = objBindDs.addRow();

                objBindDs.setColumn(nRow, "comp"   , sParent + "." + objItem.compid + "." + objItem.propid);
                objBindDs.setColumn(nRow, "dataset", objItem.datasetid);
                objBindDs.setColumn(nRow, "col"    , objItem.columnid);

                //sText += "this." + objItem.compid + "." + objItem.propid + "\t"
                //      +  objItem.datasetid + "." + objItem.columnid + "\t\n";
            }

            objBindDs.set_rowposition(0);

            //trace("바인드 정보 \n" + sText);
            objBindDs.set_enableevent(true);


        }

        this.fnDatasetInfo = function(sParent, objForm)
        {
            var objInfo, objDataset, objDs, objColInfo, objApp, objAppDs;
            var arrInfo;
            var nCnt, nRow;

            objDs = this.dsDataset;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm ;
                objDs.clearData();
            }

            if (!objDs.hasOwnProperty("_objForm"))
            {
                objDs["_objForm"] = new Object();
            }

            objDs.set_enableevent(false);

            //Application dataset
            if (sParent=="this")
            {
                objApp = nexacro.getApplication();

                objAppDs =objApp._datasets;

                for (var x in objAppDs)
                {
                    nRow = objDs.addRow();
                    objDs.setColumn(nRow, "dsname", "application." + objAppDs[x].name);

                    objDs._objForm[nRow] = objApp;
                }
            }

            objInfo = objForm.objects;
            arrInfo = objInfo._idArray;

            nCnt = arrInfo.length;

            if (nCnt<=0)
            {
                objDs.set_enableevent(true);
                return;
            }


            for (var i=0; i<nCnt; i++)
            {

                objDataset = objInfo[arrInfo[i]];

                if (objDataset._type_name=="Dataset")
                {
                    nRow = objDs.addRow();
                    objDs.setColumn(nRow, "dsname", sParent + "." + objDataset.name);

                    objDs._objForm[nRow] = objForm;
                }
            }

            objDs.set_rowposition(0);

            objDs.set_enableevent(true);

            this.fnColInfo(0);
        }

        this.fnColInfo = function(nCRow)
        {
            var objForm, objDataset, objColInfo, objDs, objInfo;
            var nRow, nCnt;
            var arrColInfo
            var sDsNm;

            objForm = take.nvl(this.dsDataset._objForm[nCRow],"");

            if (objForm=="") return;

            sDsNm = this.dsDataset.getColumn(nCRow, "dsname")

            sDsNm = sDsNm.substr(sDsNm.lastIndexOf(".")+1);

            if (objForm._type_name == "Application")
            {
                objDataset = objForm[sDsNm];
            } else {
                objDataset = objForm.objects[sDsNm];
            }

            if (objDataset._type_name != "Dataset") return;

            objColInfo = objDataset.colinfos;
            arrColInfo = objColInfo._idArray;
            objDs = this.dsColInfo;

            nCnt = arrColInfo.length;

            if (nCnt<=0) return;

            objDs.set_enableevent(false);

            objDs.clearData();

            for ( var i=0; i<nCnt; i++)
            {
                objInfo = objColInfo[arrColInfo[i]]

                nRow = objDs.addRow();
                objDs.setColumn(nRow, "colname", objInfo.name);
                objDs.setColumn(nRow, "coltype", objInfo.type);
                objDs.setColumn(nRow, "colsize", objInfo.size);
            }

            objDs.set_rowposition(0);

            objDs.set_enableevent(true);

        }

        this.fnDataView = function(nCRow)
        {
            var objForm, objDataset, objPdiv, objDiv;
            var sDsNm, sXML;

            objForm = take.nvl(this.dsDataset._objForm[nCRow],"");

            if (objForm=="") return;

            sDsNm = this.dsDataset.getColumn(nCRow, "dsname")
            sDsNm = sDsNm.substr(sDsNm.lastIndexOf(".")+1);

            if (objForm._type_name == "Application")
            {
                objDataset = objForm[sDsNm];
            } else {
                objDataset = objForm.objects[sDsNm];
            }

            objDiv = this.divDataset;
            objPdiv = this.pDivDataset;

            objPdiv.form.staText.set_text("- " + sDsNm);
            if (objForm._type_name == "Application")
            {
                objPdiv.form.grdData.set_binddataset(objDataset.name);
            } else {
                console.dir(objDataset);
                this.dsTemp.loadXML(objDataset.saveXML("dsTemp", "all"));
                //objPdiv.form.grdData.setBindDataset(objDataset);
                objPdiv.form.grdData.setBindDataset(this.dsTemp);
            }

            objPdiv.form.grdData.createFormat();

            objPdiv.form.txtXML.set_value(objDataset.saveXML(sDsNm, "all"));
            objPdiv.form.txtXML.scrollTo(0,0);

        	objPdiv.trackPopup(objDiv.getOffsetLeft(), objDiv.getOffsetTop()+30, objDiv.getOffsetWidth(), objDiv.getOffsetHeight()-30);
        }

        this.fnGridInfo = function(sPScope, objComp, objDs, sGbn)
        {
            var nCnt, nRow;

            nCnt = objComp.getCellCount(sGbn);

            for (var k=0;k<nCnt;k++)
            {
                nRow = objDs.addRow();

                 objDs._objComp[nRow] = objComp;

                sScope = sPScope + "." + sGbn + ".";
                sScope += k + "(";

                if (sGbn=="body") {
                    sScope += take.nvl(this.getBindColName(objComp, k),k) + " : ";
                    //body일때 텍스트는 head를 가져온다
                    sScope += objComp.getCellProperty("head", k, "text") + ")";
                } else {
                    sScope += objComp.getCellProperty(sGbn, k, "text") + ")";
                }

                objDs.setColumn(nRow, "compnm", sScope);
                objDs.setColumn(nRow, "comptype", "Grid.Cell");
                objDs.setColumn(nRow, "etc", sGbn + "." + k);
            }
        }

        this.fnPropInfo = function(nCRow)
        {
            var objComp, objProto, objPropDs;
            var nRow, nCnt;

            objComp = take.nvl(this.dsComp._objComp[nCRow], "");

            if (objComp=="") return;

            objProto = eval("new nexacro." + objComp._type_name);
            objPropDs = this.dsPropInfo;

            objPropDs.clearData();

            objPropDs.set_enableevent(false);

            for (var x in objComp)
            {
                if (!nexacro._isFunction(objComp[x]) && x.substr(0,1)!="_" && !(typeof(objComp[x]) === "object"))
                {
                    if (objProto[x]!=objComp[x] && x!="name")
                    {
                        nRow = objPropDs.addRow()
                        objPropDs.setColumn(nRow, "property", x);
                        objPropDs.setColumn(nRow, "propvalue", objComp[x]);
                        //trace("\t", x + "-->" + objComp[x]);
                    }
                }
            }

            objPropDs.set_rowposition(0);

            objPropDs.set_enableevent(true);

        }

        this.fnCellInfo = function(nCRow)
        {
            var objComp, objProto, objCell, objPropDs, objDsComp;
            var nRow, nCell;
            var sGbn;
            var arrInfo;
            var aCellVal, aProtoVal;

            objDsComp = this.dsComp;
            objComp = take.nvl(objDsComp._objComp[nCRow], "");

            if (objComp=="") return;

            objFormat  = objComp.body.parent;
            objProto = new nexacro.GridCellInfo;

            arrInfo = objDsComp.getColumn(nCRow, "etc").split(".");
            sGbn = arrInfo[0];
            nCell = nexacro.toNumber(arrInfo[1]);

            if (sGbn=="head")
            {
                objCell =  objFormat._headcells[nCell];
            } else if (sGbn=="body") {
                objCell =  objFormat._bodycells[nCell];
            } else {
                objCell =  objFormat._summcells[nCell];
            }

            objPropDs = this.dsPropInfo;

            objPropDs.clearData();

            objPropDs.set_enableevent(false);

            for (var z in objCell)
            {
                if (!nexacro._isFunction(objCell[z]) && z.substr(0,1)!="_")
                {

                     if (typeof(objCell[z]) === "object")
                     {
                         try {
                             aCellVal = objCell[z]._value;
                             aProtoVal = objProto[z]._value;
                         } catch (e) {
                            //trace(z + " --> " + e);
                            aCellVal = take.nvl(objCell[z],"");
                            aProtoVal = take.nvl(objProto[z],"");
                         }
                     } else {
                         aCellVal = take.nvl(objCell[z],"");
                         aProtoVal = take.nvl(objProto[z],"");
                     }

                    if (aCellVal!=aProtoVal && z!="name" && z!="id" && z!="parent")
                    {
                        //trace("\t" + z + "\t --> \t" + objCell[z] + "\t" + typeof(objCell[z]) + "\t" + objProto[z] + "\t" + typeof(objProto[z]));
                        //console.dir(objCell[z]);
                        nRow = objPropDs.addRow()
                        objPropDs.setColumn(nRow, "property", z);
                        objPropDs.setColumn(nRow, "propvalue", objCell[z]);
                    }
                }
            }

            objPropDs.set_rowposition(0);

            objPropDs.set_enableevent(true);

        }

        this.fnEventInfo = function(nCRow)
        {
            var objComp, objEventList, objEvent, objHandle, objEventDs;
            var nRow;

            objComp = take.nvl(this.dsComp._objComp[nCRow], "");

            if (objComp=="") return;

            objEventList = objComp._event_list;

            objEventDs = this.dsEvent;
            objEventDs.clearData();

            objEventDs.set_enableevent(false);

            for (var x in objEventList)
            {
                objEvent = objComp[x];

                if (typeof(objEvent) === "object")
                {
                    objHandle = objEvent._user_handlers;

                    for (var z in objHandle)
                    {
                        nRow = objEventDs.addRow();
                        objEventDs.setColumn(nRow, "eventnm", x + "[" + z + "]");
                        objEventDs.setColumn(nRow, "func", objHandle[z].handler);
                    }
                }
            }

            objEventDs.set_rowposition(0);

            objEventDs.set_enableevent(true);

        }

        this.fnTranInfo = function(sParent, objForm)
        {
            var objTranInfo, objInfo, objTranDs;
            var nRow;

            objTranDs = this.dsTran;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm ;
                objTranDs.clearData();
            }

            if (!objTranDs.hasOwnProperty("_objForm"))
            {
                objTranDs["_objForm"] = new Object();
            }

            objTranInfo = objForm._objTranInfo;

            objTranDs.set_enableevent(false);

            for (var x in objTranInfo)
            {
                nRow = objTranDs.addRow()

                objTranDs.setColumn(nRow, "tranid", sParent + "." + x);

                objTranDs._objForm[nRow] = objForm;
            }

            objTranDs.set_rowposition(0);

            objTranDs.set_enableevent(true);

            this.fnTranParam(0);
        }

        this.fnTranParam = function(nCRow)
        {
            var objForm, objTranInfo, objTranDs;
            var nRow;
            var sId;

            objForm = take.nvl(this.dsTran._objForm[nCRow],"");

            if (objForm=="") return;

            sId = this.dsTran.getColumn(nCRow, "tranid");
            sId = sId.substr(sId.lastIndexOf(".")+1);

            objTranInfo = objForm._objTranInfo[sId];
            objTranDs = this.dsTranInfo;

            objTranDs.clearData();

            objTranDs.set_enableevent(false);

            for (var x in objTranInfo)
            {
                nRow = objTranDs.addRow()

                objTranDs.setColumn(nRow, "tranparam", x);
                objTranDs.setColumn(nRow, "tranvalue", objTranInfo[x]);
            }

            objTranDs.set_rowposition(0);

            objTranDs.set_enableevent(true);

        }

        this.fnVarInfo = function(sParent, objForm)
        {
            var objDs, objProto, objApp, objAppVar;
            var sText = "", sKey;
            var nRow;

            objDs = this.dsVar;

            if (take.nvl(sParent,"")=="") sParent = "this";
            if (take.nvl(objForm,"")=="")
            {
                objForm = this.fv_objForm ;
                objDs.clearData()
            }

            objProto = new nexacro.Form;

            objDs.set_enableevent(false);

            if (sParent=="this")
            {
                objApp = nexacro.getApplication();
                objAppVar = objApp._variables;
                for (var z in objAppVar)
                {
                    nRow = objDs.addRow();
                    objDs.setColumn(nRow, "variable"   , "application." + objAppVar[z]);
                    objDs.setColumn(nRow, "value", objApp[objAppVar[z]]);
                }
            }

            for (var x in objForm)
            {
                sKey = x.toString();
                if (!nexacro._isFunction(objForm[sKey]) && sKey.substr(0,1)!="_" && !(typeof(objForm[sKey]) === "object"))
                {
                    if (!("set_"+sKey in objProto)) //if (!(objProto.hasOwnProperty("set_"+sKey)))
                    {
                        if (sKey!="scrollbars")
                        {
                            nRow = objDs.addRow();

                            objDs.setColumn(nRow, "variable"   , sParent + "." + sKey);
                            objDs.setColumn(nRow, "value", objForm[sKey]);
                        }
                    }
                }
            }

            objDs.set_rowposition(0);

            //trace("바인드 정보 \n" + sText);
            objDs.set_enableevent(true);
        }

        this.getBindColName = function(objGrid, nIdx)
        {
        	if (take.nvl(objGrid,"")=="" || take.nvl(nIdx,-1)<0) return "";

        	var sText, sColId;
        	var nSubCell;

        	sText  = "";
        	sColId = "";
        	nSubCell = objGrid.getCellProperty("body", nIdx, "subcell");

        	if ( nSubCell > 0 )
        	{
        		sText = objGrid.getSubCellProperty("body", nIdx, 0, "text");
        	} else {
        		sText = objGrid.getCellProperty("body", nIdx, "text");
        	}

        	if ( take.nvl(sText, "") != "")
        	{
        		if ( sText.search(/^BIND\(/) > -1 )
        		{
        			sColId = sText.replace(/^BIND\(/, "");
        			sColId = sColId.substr(0, sColId.length-1);
        		} else if ( sText.search(/^bind:/) > -1 ) {
        			sColId = sText.replace(/^bind:/, "");
        		}
        	}

        	return sColId;
        }

        this.fnCopy = function(objGrid, objInfo)
        {
            var sSelType, sBroserType, sCopyData;
            var objDs, objDataArea;
            var nSRow, nERow, nSCol, nECol;

            objDs = objGrid.getBindDataset();

            nSRow = nexacro.toNumber(objGrid.selectstartrow);
        	nERow = nexacro.toNumber(objGrid.selectendrow);
        	nSCol = nexacro.toNumber(objGrid.selectstartcol);
        	nECol = nexacro.toNumber(objGrid.selectendcol);

            sSelType = objGrid.selecttype;

            if (sSelType=="row" || sSelType=="multirow" )
            {
        		//nSCol = objGrid.getCellPos();
                nSCol = 0;
        		nECol = nexacro.toNumber(objGrid.getCellCount("body") -1);
        	}

            sCopyData = "";

            //멀티 head row 는 확인 필요(?)
            for (var k=nSCol;k<=nECol;k++)
            {
                sCopyData += objGrid.getCellProperty("head", k, "text") + (k==nECol?"\n":"\t");
            }

            for(var i=nSRow;i<=nERow;i++)
            {
                for(var j=nSCol; j<=nECol; j++)
                {
                    //trace("objGrid.getCellValue("+i+","+j+")"  + objGrid.getCellValue(i,j) );

                    sCopyData += objGrid.getCellValue(i,j);
                    if (j<nECol) sCopyData += "\t";
                }

                if (i<nERow) sCopyData += "\n";
            }

            //trace(sCopyData);
            //if (nSRow==nERow && nSCol==nECol) //그리드 데이터 1개만 복사하는 경우
            //{
            //    //sCopyData = objGrid.getCellValue(objGrid.currentrow,objGrid.currentcol);
            //    sCopyData = objGrid.getCellValue(nSRow,nSCol);
            //} else {
            //    for(var i=nSRow;i<=nERow;i++)
            //    {
            //        for(var j=nSCol; j<=nECol; j++)
            //        {
            //            sCopyData += objGrid.getCellValue(i,j) + (j<nECol?"\t":"\n");
            //        }
            //    }
            //}

            sBroserType = nexacro._BrowserType.substring(0, 2);

            if(system.navigatorname == "nexacro EmbedRuntime"
               || system.navigatorname == "nexacro"
               || nexacro._Browser == "Runtime"
               || (system.navigatorname == "IE" && sBroserType == "IE")) // IE,Runtime인 경우
            {
                system.clearClipboard();
        		system.setClipboard("CF_TEXT", sCopyData);
        	} else {
                objDataArea = this.fnCreateTextArea(sCopyData);
        		nexacro._OnceCallbackTimer.callonce(
                    this,
                    function(){
                        document.body.removeChild(objDataArea);
                    }, 100);
        	}
        }

        this.fnCreateTextArea = function(sData)
        {
        	var objTextArea = document.createElement("TEXTAREA");

        	objTextArea.style.position = 'absolute';
        	objTextArea.value = sData;
        	document.body.appendChild(objTextArea);
        	objTextArea.style.left = '-1000px';
        	objTextArea.select();

        	return objTextArea;
        };

        this.Button00_onclick = function(obj,e)
        {
            var objAppVar = nexacro.getApplication()._variables;

            for (var x in objAppVar)
            {
                trace( x + " --> " + objAppVar[x]);
            }

        //     var objComp, objProto;
        //
        //     objComp = this.fv_objForm ;
        //     objProto = new nexacro.Form;
        //
        //     for (var x in objComp)
        //     {
        //         if (!nexacro._isFunction(objComp[x]) && x.substr(0,1)!="_" && !(typeof(objComp[x]) === "object"))
        //         {
        //             if (objProto[x]!=objComp[x] && x!="name")
        //             {
        //                 trace("\t" + x + "\t-->\t" + objComp[x]);
        //             }
        //         }
        //     }

        //     for (var x in objTranInfo)
        //     {
        //         if (!nexacro._isFunction(objTranInfo[x]))
        //         {
        //             trace("\t" + x + "\t-->\t" + objTranInfo[x]);
        //         }
        //
        // //         objInfo = objTranInfo[x];
        // //
        // //         for (var z in objInfo)
        // //         {
        // //             trace("\t" + z + "\t-->\t" + objInfo[z]);
        // //         }
        //     }

        //     var objFormat  = this.Grid00.body.parent;
        //
        //     var objProto = new nexacro.GridCellInfo;
        //     var objHeadCell  = objFormat._headcells;
        //     //var objBodyCell  = objFormat._bodycells;
        //     //var objSummCell  = objFormat._summcells ;
        //
        //     objComp = objHeadCell;
        //
        //     for (var x in objHeadCell)
        //     {
        //         objCell = objHeadCell[x];
        //         trace(objCell);
        //         for (var z in objCell)
        //         {
        //             if (!nexacro._isFunction(objCell[z]) && z.substr(0,1)!="_" && !(typeof(objCell[z]) === "object"))
        //             {
        //                 if (objProto[z]!=objCell[z] && z!="name")
        //                 {
        //                     trace(x + " / " + z + " --> " + objCell[z]);
        //                 }
        //             }
        //         }
        //     }
        //GridBandInfo
        //_bodyBand
        //_headBand
        //_summBand

        //body
        //head
        //summery

        //     var objComp, objProto;
        //
        // 	objComp = this.Static00._event_list;
        // //     objProto = eval("new nexacro." + objComp._type_name);
        // //
        //      for (var x in objComp)
        //      {
        // //         //if (!nexacro._isFunction(objComp[x]) && x.substr(0,1)!="_" && !(typeof(objComp[x]) === "object"))
        //         if (!nexacro._isFunction(objComp[x]))
        // //         if (!nexacro._isFunction(objComp[x]) && !(typeof(objComp[x]) === "object"))
        //          {
        // //             if (objProto[x]!=objComp[x] && x!="name")
        // //             {
        //                  trace("\t", x + "-->" + objComp[x]);
        //
        //
        //                  for ( var z in objComp[x])
        //                  {
        //                     trace("\t 2222222222222 ", z + "-->" + objComp[x][z]);
        //                  }
        // //             }
        //          }
        //      }

        };


        this.fnObjectTrace = function(obj, sGbn, sOpt)
        {
            sGbn = take.nvl(sGbn, "").toLowerCase();
            sOpt = take.nvl(sOpt, "");

            if (sGbn=="")
            {
                for (var x in obj)
                {
                    if (!nexacro._isFunction(obj[x]))
                    {
                        if (x.substr(0,1)!=sOpt)
                        {
                            trace(x.toString() + "-->" + obj[x.toString()]);
                        }
                    }
                }
                return;
            }

            if (sGbn=="all")
            {
                for (var x in obj)
                {
                    if (x.substr(0,1)!=sOpt)
                    {
                        trace(x.toString() + "-->" + obj[x.toString()]);
                    }
                }
                return;
            }

            if (sGbn=="function")
            {
                for (var x in obj)
                {
                    if (nexacro._isFunction(obj[x.toString()]))
                    {
                        if (x.substr(0,1)!=sOpt)
                        {
                            trace(x.toString() + "-->" + obj[x.toString()]);
                        }
                    }
                }
                return;
            }

            if (sGbn=="object")
            {
                for (var x in obj)
                {
                    if (typeof(obj[x.toString()]) === "object")
                    {
                        if (x.substr(0,1)!=sOpt)
                        {
                            trace(x.toString() + "-->" + obj[x.toString()]);
                        }
                    }
                }
                return;
            }
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleDoc_onload,this);
            this.btnInfo.addEventHandler("onclick",this.btnInfo_onclick,this);
            this.btnBind.addEventHandler("onclick",this.btnTab_onclick,this);
            this.btnDataset.addEventHandler("onclick",this.btnTab_onclick,this);
            this.divBind.form.grdBind.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.btnTran.addEventHandler("onclick",this.btnTab_onclick,this);
            this.btnComp.addEventHandler("onclick",this.btnTab_onclick,this);
            this.divDataset.form.grdDataset.addEventHandler("oncellclick",this.divDataset_grdDataset_oncellclick,this);
            this.divDataset.form.grdDataset.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.divDataset.form.grdDatasetCol.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.divComp.form.grdComp.addEventHandler("oncellclick",this.divComp_grdComp_oncellclick,this);
            this.divComp.form.grdComp.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.divComp.form.grdProp.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.divComp.form.grdEvent.addEventHandler("oncellclick",this.divComp_grdEvent_oncellclick,this);
            this.pDivFunck.form.btnClose.addEventHandler("onclick",this.pDivFunck_btnClose_onclick,this);
            this.divTran.form.grdTran.addEventHandler("oncellclick",this.divTran_grdTran_oncellclick,this);
            this.divTran.form.grdTran.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.divTran.form.grdTranVal.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.pDivDataset.form.btnClose.addEventHandler("onclick",this.pDivDataset_btnClose_onclick,this);
            this.pDivDataset.form.btnData.addEventHandler("onclick",this.pDivDataset_btnTab_onclick,this);
            this.pDivDataset.form.btnXML.addEventHandler("onclick",this.pDivDataset_btnTab_onclick,this);
            this.pDivDataset.form.grdData.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.btnVar.addEventHandler("onclick",this.btnTab_onclick,this);
            this.divVar.form.grdVar.addEventHandler("onkeydown",this.grid_onkeydown,this);
            this.dsDataset.addEventHandler("onrowposchanged",this.dsDataset_onrowposchanged,this);
            this.dsComp.addEventHandler("onrowposchanged",this.dsComp_onrowposchanged,this);
            this.dsTran.addEventHandler("onrowposchanged",this.dsTran_onrowposchanged,this);
        };
        this.loadIncludeScript("comDebugNew.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
