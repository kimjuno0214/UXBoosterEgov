(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample01");
            this.set_titletext("팝업샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,685);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">Common Code</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0002]언어코드</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">[0003]다국어_대분류</Col><Col id=\"Column1\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">0002</Col><Col id=\"Column2\">언어코드</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">다국어대분류</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">시스템</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">화면유형</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0002</Col><Col id=\"Column2\">언어코드</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">다국어대분류</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">시스템</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">화면유형</Col><Col id=\"Column6\">사용</Col></Row><Row/><Row><Col id=\"Column1\">0003</Col><Col id=\"Column2\">다국어대분류</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0004</Col><Col id=\"Column2\">시스템</Col><Col id=\"Column6\">사용</Col></Row><Row><Col id=\"Column1\">0005</Col><Col id=\"Column2\">화면유형</Col><Col id=\"Column6\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div02","10","10","800","409",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","10","778","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("시스템이용약관");
            obj.set_cssclass("sta_WF_th01C");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10","41","778","121",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","10","162","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("동의합니다.");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","10","193","778","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("개인정보이용동의");
            obj.set_cssclass("sta_WF_th01C");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","10","224","778","121",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","10","345","150","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("동의합니다.");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02","334","376","60","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("동의");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00","399","376","60","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,685,this,function(p){});
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
        this.loadIncludeScript("sample13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
