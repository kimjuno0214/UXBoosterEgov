(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpAccordion");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">대1</Col></Row><Row><Col id=\"Column0\">대2</Col></Row><Row><Col id=\"Column0\">대3</Col></Row><Row><Col id=\"Column0\">대4</Col></Row><Row><Col id=\"Column0\">대5</Col></Row><Row><Col id=\"Column0\">대6</Col></Row><Row><Col id=\"Column0\">대7</Col></Row><Row><Col id=\"Column0\">대8</Col></Row><Row><Col id=\"Column0\">대9</Col></Row><Row><Col id=\"Column0\">대10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">중1</Col></Row><Row><Col id=\"Column0\">중2</Col></Row><Row><Col id=\"Column0\">중3</Col></Row><Row><Col id=\"Column0\">중4</Col></Row><Row><Col id=\"Column0\">중5</Col></Row><Row><Col id=\"Column0\">중6</Col></Row><Row><Col id=\"Column0\">중7</Col></Row><Row><Col id=\"Column0\">중8</Col></Row><Row><Col id=\"Column0\">중9</Col></Row><Row><Col id=\"Column0\">중10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">소1</Col></Row><Row><Col id=\"Column0\">소2</Col></Row><Row><Col id=\"Column0\">소3</Col></Row><Row><Col id=\"Column0\">소4</Col></Row><Row><Col id=\"Column0\">소5</Col></Row><Row><Col id=\"Column0\">소6</Col></Row><Row><Col id=\"Column0\">소7</Col></Row><Row><Col id=\"Column0\">소8</Col></Row><Row><Col id=\"Column0\">소9</Col></Row><Row><Col id=\"Column0\">소10</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","20","25","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","Button00:0","150","170",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","20","Grid00:0","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("중");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","20","Button01:0","150","0",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","20","Grid01:0","150","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("소");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","20","Button02:0","150","0",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("Dataset02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","250","25","20","105",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","250","130","20","105",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("중");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","250","235","20","105",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("소");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","270","25","150","315",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","460","25","20","315",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("대");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","630","25","20","315",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("중");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","650","25","20","315",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("소");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","480","25","150","315",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,640,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpAccordion.xfdl", function() {
        this.smpAccordion_onload = function(obj,e)
        {
        // 	this.Grid00.set_height(170);
        //     this.Grid01.set_height(1);
        //     this.Grid02.set_height(1);
        };

        this.Button00_onclick = function(obj,e)
        {
        // 	this.Grid00.set_height(170);
        //     this.Grid01.set_height(1);
        //     this.Grid02.set_height(1);
        };

        this.Button01_onclick = function(obj,e)
        {
        // 	this.Grid00.set_height(1);
        //     this.Grid01.set_height(170);
        //     this.Grid02.set_height(1);
        };

        this.Button02_onclick = function(obj,e)
        {
        // 	this.Grid00.set_height(1);
        //     this.Grid01.set_height(1);
        //     this.Grid02.set_height(170);
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.Grid00.set_height(1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpAccordion_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01_00_00.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02_00_00.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("smpAccordion.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
