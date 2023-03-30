(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpKeyCopyPaste");
            this.set_titletext("복사 및 붙여넣기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"pstNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pstNo\">12345678</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","130",null,"47","0",null,"1355",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            obj.getSetter("keycomp").set("dsData");
            obj.getSetter("keyvalue").set("pstNo");
            this.addChild(obj.name, obj);

            obj = new Static("staUserIdT","30","10","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("Key");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtKey","staUserIdT:10","10","170","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("ID 입력");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","edtKey:30","10","120","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","170","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_accessibilitylabel("사용여부 선택");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_01",null,"0","183",null,"0","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("183 (공통버튼영역)");
            obj.set_background("RGBA(0,0,255,0.40)");
            obj.set_visible("false");
            obj.set_color("blue");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearch00","0","250",null,"47","0",null,"1355",null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_searchBox01");
            obj.getSetter("keycomp").set("edtTest");
            obj.getSetter("keyvalue").set("value");
            this.addChild(obj.name, obj);

            obj = new Static("staUserIdT","30","10","120","25",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_text("Key");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_01",null,"0","183",null,"0","0",null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_text("183 (공통버튼영역)");
            obj.set_background("RGBA(0,0,255,0.40)");
            obj.set_visible("false");
            obj.set_color("blue");
            obj.set_textAlign("center");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("edtTest","staUserIdT:10","10","170","25",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static52","15","85","231","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("※ Dataset 값을 Copy&Paste 적용 예");
            obj.set_usedecorate("true");
            obj.set_color("#e37a0c");
            this.addChild(obj.name, obj);

            obj = new Static("Static52_00","15","205","275","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("※ Edit Component 값을 Copy&Paste 설정한 예");
            obj.set_usedecorate("true");
            obj.set_color("#e37a0c");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","110",null,"20","1",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","0","230",null,"20","1",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","10","10","210","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("복사 및 붙여넣기");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch00.form
            obj = new Layout("default","",0,0,this.divSearch00.form,function(p){});
            this.divSearch00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtKey","value","dsData","pstNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpKeyCopyPaste.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divSearch.addEventHandler("onrbuttondown",this.divSearch_onrbuttondown,this);
            this.divSearch.form.edtKey.addEventHandler("onkeydown",this.divSearch_edtUserId_onkeydown,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_cboUseYn_onitemchanged,this);
        };
        this.loadIncludeScript("smpKeyCopyPaste.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
