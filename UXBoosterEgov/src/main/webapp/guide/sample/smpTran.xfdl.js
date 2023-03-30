(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpTran");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DASH_TYPE\">22</Col><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"SVC_NAMESPACE\" type=\"STRING\" size=\"255\"/><Column id=\"DASH_PARAM\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"255\"/><Column id=\"RELOAD_CNT\" type=\"STRING\" size=\"255\"/><Column id=\"MINIMUM_YN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_PROG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"DASH_CONTENTS\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REFERENCE\" type=\"STRING\" size=\"255\"/><Column id=\"MANUAL_URL\" type=\"STRING\" size=\"255\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"UNIT\" type=\"STRING\" size=\"255\"/><Column id=\"DASH_TYPE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"DASH_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_PROG\" type=\"STRING\" size=\"255\"/><Column id=\"TITLEBAR_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"DASH_OPTION\" type=\"STRING\" size=\"255\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","71","47","342","101",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","557","40","555","358",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MOD_CD\"/><Cell col=\"1\" text=\"SVC_NAMESPACE\"/><Cell col=\"2\" text=\"DASH_PARAM\"/><Cell col=\"3\" text=\"PROGRAM_CD\"/><Cell col=\"4\" text=\"DASH_NM\"/><Cell col=\"5\" text=\"RELOAD_CNT\"/><Cell col=\"6\" text=\"MINIMUM_YN\"/><Cell col=\"7\" text=\"USE_YN\"/><Cell col=\"8\" text=\"MOD_DT\"/><Cell col=\"9\" text=\"DETAIL_PROG_NM\"/><Cell col=\"10\" text=\"DASH_CONTENTS\"/><Cell col=\"11\" text=\"REG_CD\"/><Cell col=\"12\" text=\"PROJECT_CD\"/><Cell col=\"13\" text=\"REFERENCE\"/><Cell col=\"14\" text=\"MANUAL_URL\"/><Cell col=\"15\" text=\"MANUAL_TXT\"/><Cell col=\"16\" text=\"ML_CD\"/><Cell col=\"17\" text=\"REG_DT\"/><Cell col=\"18\" text=\"PROGRAM_NM\"/><Cell col=\"19\" text=\"MOD_NM\"/><Cell col=\"20\" text=\"UNIT\"/><Cell col=\"21\" text=\"DASH_TYPE_NM\"/><Cell col=\"22\" text=\"DASH_CD\"/><Cell col=\"23\" text=\"DETAIL_PROG\"/><Cell col=\"24\" text=\"TITLEBAR_YN\"/><Cell col=\"25\" text=\"REG_NM\"/><Cell col=\"26\" text=\"DASH_OPTION\"/><Cell col=\"27\" text=\"DASH_TYPE\"/><Cell col=\"28\" text=\"DESC_TXT\"/></Band><Band id=\"body\"><Cell text=\"bind:MOD_CD\"/><Cell col=\"1\" text=\"bind:SVC_NAMESPACE\"/><Cell col=\"2\" text=\"bind:DASH_PARAM\"/><Cell col=\"3\" text=\"bind:PROGRAM_CD\"/><Cell col=\"4\" text=\"bind:DASH_NM\"/><Cell col=\"5\" text=\"bind:RELOAD_CNT\"/><Cell col=\"6\" text=\"bind:MINIMUM_YN\"/><Cell col=\"7\" text=\"bind:USE_YN\"/><Cell col=\"8\" text=\"bind:MOD_DT\"/><Cell col=\"9\" text=\"bind:DETAIL_PROG_NM\"/><Cell col=\"10\" text=\"bind:DASH_CONTENTS\"/><Cell col=\"11\" text=\"bind:REG_CD\"/><Cell col=\"12\" text=\"bind:PROJECT_CD\"/><Cell col=\"13\" text=\"bind:REFERENCE\"/><Cell col=\"14\" text=\"bind:MANUAL_URL\"/><Cell col=\"15\" text=\"bind:MANUAL_TXT\"/><Cell col=\"16\" text=\"bind:ML_CD\"/><Cell col=\"17\" text=\"bind:REG_DT\"/><Cell col=\"18\" text=\"bind:PROGRAM_NM\"/><Cell col=\"19\" text=\"bind:MOD_NM\"/><Cell col=\"20\" text=\"bind:UNIT\"/><Cell col=\"21\" text=\"bind:DASH_TYPE_NM\"/><Cell col=\"22\" text=\"bind:DASH_CD\"/><Cell col=\"23\" text=\"bind:DETAIL_PROG\"/><Cell col=\"24\" text=\"bind:TITLEBAR_YN\"/><Cell col=\"25\" text=\"bind:REG_NM\"/><Cell col=\"26\" text=\"bind:DASH_OPTION\"/><Cell col=\"27\" text=\"bind:DASH_TYPE\"/><Cell col=\"28\" text=\"bind:DESC_TXT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("smpTran.xfdl", function() {

        this.smpTran_onload = function(obj,e)
        {
        	if (take.formOnLoad(this))
            {

            }
        };

        this.Button00_onclick = function(obj,e)
        {
            this.dsList.clearData();

        	take.tranSelect
        	(
        	    this,
        	    "tranid",
        	    "DashManagement.dashInfoList",
        	    "dsTest",
        	    "dsList",
        	    "",
        	    function(sId, nErrCd, sMsg)
                {
        	        //trace(this.dsList.saveXML());
        	    },
                true,
                "dsTest"
        	);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpTran_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("smpTran.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
