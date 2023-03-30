(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing050");
            this.set_titletext("타임라인등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,496);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div02","0","0","460","496",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","43","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("일시");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","108","43","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","10","73","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","108","73","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button01",null,"10","50","23","65",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button02",null,"10","50","23","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","10","103","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","108","103","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","10","133","100","201",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","108","133","340","201",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","10","333","100","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("파일");
            obj.set_cssclass("sta_WF_th01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","108","333","340","31",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.Div02.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","115","48","110","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit11","115","108","326","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            this.Div02.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","115","139","326","189",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","115","78","110","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"337","50","23","294",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_text("첨부");
            obj.set_cssclass("btn_WF_basic01");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","Calendar00:3","48","64","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",460,496,this,function(p){});
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
        this.loadIncludeScript("publishing050.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
