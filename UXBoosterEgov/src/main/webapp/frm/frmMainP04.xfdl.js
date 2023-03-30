(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMainP04");
            this.set_titletext("메인 마이메뉴 설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLUMN0\">Common Code</Col><Col id=\"COLUMN1\">0</Col></Row><Row><Col id=\"COLUMN0\">[0002]언어코드</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0003]다국어_대분류</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0002]언어코드</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0003]다국어_대분류</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0002]언어코드</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0003]다국어_대분류</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0002]언어코드</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0003]다국어_대분류</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0002]언어코드</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0003]다국어_대분류</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0002]언어코드</Col><Col id=\"COLUMN1\">1</Col></Row><Row><Col id=\"COLUMN0\">[0003]다국어_대분류</Col><Col id=\"COLUMN1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button01",null,"239","46","23","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","10",null,"213","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:COLUMN0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:COLUMN1\"/><Cell col=\"2\" text=\"bind:COLUMN2\"/><Cell col=\"3\" text=\"bind:COLUMN3\"/><Cell col=\"4\" text=\"bind:COLUMN4\"/><Cell col=\"5\" text=\"bind:COLUMN5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","10","265",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:COLUMN0\"/><Cell col=\"1\" text=\"bind:COLUMN1\"/><Cell col=\"2\" text=\"bind:COLUMN2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","233",null,"30","470",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전체메뉴목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"-45",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","223",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
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
        this.loadIncludeScript("frmMainP04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
