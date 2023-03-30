(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL020S01");
            this.set_titletext("데이터셋만들기");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1249,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","10","10","500","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("데이터");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList00","10","staProgDetailT00_00:5",null,null,"10","255",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"3\" text=\"Column1\"/><Cell col=\"2\" rowspan=\"3\" text=\"Column2\"/><Cell col=\"3\" rowspan=\"3\" text=\"Column3\"/><Cell col=\"4\" rowspan=\"3\" text=\"Column4\"/><Cell col=\"5\" rowspan=\"3\" text=\"Column5\"/><Cell col=\"6\" rowspan=\"3\" text=\"Column6\"/><Cell col=\"7\" rowspan=\"3\" text=\"Column7\"/><Cell col=\"8\" rowspan=\"3\" text=\"Column8\"/><Cell col=\"9\" rowspan=\"3\" text=\"Column9\"/><Cell col=\"10\" rowspan=\"3\" text=\"Column10\"/><Cell col=\"11\" rowspan=\"3\" text=\"Column11\"/><Cell col=\"12\" rowspan=\"3\" text=\"Column12\"/><Cell col=\"13\" rowspan=\"3\" text=\"Column13\"/><Cell col=\"14\" rowspan=\"3\" text=\"Column14\"/><Cell col=\"15\" rowspan=\"3\" text=\"Column15\"/><Cell col=\"16\" rowspan=\"3\" text=\"Column16\"/><Cell col=\"17\" rowspan=\"3\" text=\"Column17\"/><Cell col=\"18\" rowspan=\"3\" text=\"Column18\"/><Cell col=\"19\" rowspan=\"3\" text=\"Column19\"/><Cell col=\"20\" rowspan=\"3\" text=\"Column20\"/><Cell col=\"21\" rowspan=\"3\" text=\"Column21\"/><Cell col=\"22\" rowspan=\"3\" text=\"Column22\"/><Cell col=\"23\" rowspan=\"3\" text=\"Column23\"/><Cell col=\"24\" rowspan=\"3\" text=\"Column24\"/><Cell col=\"25\" rowspan=\"3\" text=\"Column25\"/><Cell col=\"26\" rowspan=\"3\" text=\"Column26\"/><Cell col=\"27\" rowspan=\"3\" text=\"Column27\"/><Cell col=\"28\" rowspan=\"3\" text=\"Column28\"/><Cell col=\"29\" rowspan=\"3\" text=\"Column29\"/><Cell col=\"30\" rowspan=\"3\" text=\"Column30\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:Column6\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:Column7\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:Column8\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:Column9\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:Column10\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"11\" text=\"bind:Column11\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"12\" text=\"bind:Column12\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"13\" text=\"bind:Column13\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"14\" text=\"bind:Column14\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"15\" text=\"bind:Column15\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"16\" text=\"bind:Column16\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"17\" text=\"bind:Column17\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"18\" text=\"bind:Column18\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"19\" text=\"bind:Column19\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"20\" text=\"bind:Column20\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"21\" text=\"bind:Column20\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"22\" text=\"bind:Column21\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"23\" text=\"bind:Column22\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"24\" text=\"bind:Column23\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"25\" text=\"bind:Column24\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"26\" text=\"bind:Column25\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"27\" text=\"bind:Column26\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"28\" text=\"bind:Column27\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"29\" text=\"bind:Column28\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"30\" text=\"bind:Column29\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeployAdd",null,"9","90","23","9",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MkDataSet.xfdl", function() {
        /*
        	excel 업로드
        */
        this.btnExcelUpload_onclick = function(obj,e)
        {
        	if(this.all["XImport"])
        	{
        		var objDel = this.removeChild("XImport");
        			objDel.destroy();
        			objDel = null;
        	}
            var objImport = new nexacro.ExcelImportObject("XImport", this);
            var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";

            objImport.set_importtype(nexacro.ImportTypes.EXCEL);
        	objImport.addEventHandler("onsuccess", this.fnExcelImport_onsuccess, this);
        	objImport.addEventHandler("onerror", this.fnExcelImport_onerror, this);

        	objImport.set_importurl(sSvcUrl);
        	objImport.importData("", "[Command=getsheetdata;body=!A2]", "dsExcelUpload");
        	objImport = null;

        };

        /*
        	excel 업로드 성공
        */
        this.fnExcelImport_onsuccess = function(obj,  e)
        {
        	var nCnt = this.dsExcelUpload.rowcount;
            this.dsList.clearData();
        	var startCol = 0;

        	for(var i = 0; i <= 50; i++) {
        		if(i == 0) {
        			this.fv_mpaStr = "Column0=Column0";
        		} else {
        			this.fv_mpaStr = this.fv_mpaStr + ",Column" + (i) + "=" + "Column" + (i);
        		}
        	}

        	for(var i = 0; i < nCnt; i++) {
        		var nRow = this.dsList.addRow();
        		this.dsList.copyRow(nRow,this.dsExcelUpload, i, this.fv_mpaStr);
        	}

        	trace(this.dsList.saveXML());

        }

        /*
        	excel 업로드 실패
        */
        this.fnExcelImport_onerror = function(obj,  e)
        {
        	alert("excel upload 실패");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OM010P05_onload,this);
            this.grdProgList00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.btnDeployAdd.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
        };
        this.loadIncludeScript("MkDataSet.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
