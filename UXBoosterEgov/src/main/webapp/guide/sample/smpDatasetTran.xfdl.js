(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpDatasetTran");
            this.set_titletext("Dataset take select/save");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeInfo", this);
            obj.set_url("SystemCommon.codeInfoList");
            obj.getSetter("saveurl").set("SystemCommon.codeInfo");
            obj.getSetter("saveparam").set("");
            obj.set_serverdatasetid("dsSearch");
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF1\" type=\"STRING\" size=\"256\"/><Column id=\"REF2\" type=\"STRING\" size=\"256\"/><Column id=\"REF3\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"sParentKey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sParentKey\">0000000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdCodeInfo","10","80",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsCodeInfo");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"코드ID\"/><Cell col=\"1\" text=\"코드명\"/><Cell col=\"2\" text=\"Ref.1\"/><Cell col=\"3\" text=\"Ref.2\"/><Cell col=\"4\" text=\"Ref.3\"/><Cell col=\"5\" text=\"상세설명\"/><Cell col=\"6\" text=\"정렬순서\"/><Cell col=\"7\" text=\"사용\"/><Cell col=\"8\" text=\"등록자\"/><Cell col=\"9\" text=\"등록일\"/><Cell col=\"10\" text=\"수정자\"/><Cell col=\"11\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE_ID\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:CODE_NM\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:REF1\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:REF2\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:REF3\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:DESC_TXT\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:CODE_ORDER\" textAlign=\"right\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:USE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:REG_NM\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:REG_DT\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:MOD_NM\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:MOD_DT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","9","610","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Dataset take select, save 샘플입니다.");
            obj.set_font("normal 30px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpDatasetTran.xfdl", function() {
        this.smpDatasetTran_onload = function(obj,e)
        {
        	if (take.formOnLoad(this))
            {
                this.fnSearch();
            }
        };

        this.fnSearch = function()
        {
            //var sParentKey = "0000000000" ;
            //this.dsCodeInfo.set_arguments("sParentKey="+sParentKey);

        	this.dsCodeInfo.takeselect
            (
                function(sId, nErrCd, sErrMsg)
                {
                    //take.alert(this, "Error", sId + " : 조회성공");
                },
                false
            );
        };

        this.fnSave = function()
        {
        	this.dsCodeInfo.takesave
            (
                function (sId, sCd, sMsg)
                {
                    take.alert(this, "Info", sId + " : 저장성공");
                    //this.dsCodeInfo.takeselect();
                },
                false
            );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpDatasetTran_onload,this);
        };
        this.loadIncludeScript("smpDatasetTran.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
