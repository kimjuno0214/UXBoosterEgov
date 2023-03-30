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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row><Row><Col id=\"Column0\">사용자명</Col><Col id=\"Column1\">2019-08-15 16:27:38</Col><Col id=\"Column2\">제목제목제목제목제목제목제목제목제목</Col><Col id=\"Column3\">내용</Col><Col id=\"Column4\">이미지</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","0","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("타임라인 목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","30",null,"478","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_timeLineBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("2019-12-16");
            obj.set_cssclass("sta_WF_timeDate");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","18","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_timeIcon");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","45","50","120","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'#888888\'>16:41</fc> 홍길동");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","45","73","620","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("타이틀타이틀타이틀타이틀타이틀");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_timeLineTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","45","103","620","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_timeLineSub01");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","45","143","100","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","164","143","100","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","284","143","100","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","263","18","22",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_timeIcon");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","45","263","120","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("<fc v=\'#888888\'>16:41</fc> 홍길동");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","45","286","620","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("타이틀타이틀타이틀타이틀타이틀");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_timeLineTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static09","45","316","620","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_timeLineSub01");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","45","356","100","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04","164","356","100","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer05","284","356","100","100",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","10","508",null,"265","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_timeLineBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","120","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("2019-12-17");
            obj.set_cssclass("sta_WF_timeDate");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","18","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_timeIcon");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","45","50","120","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'#888888\'>16:41</fc> 홍길동");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","45","73","620","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("타이틀타이틀타이틀타이틀타이틀");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_timeLineTitle01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","45","103","620","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브서브");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_timeLineSub01");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","45","143","100","100",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","164","143","100","100",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div01.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","284","143","100","100",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("imv_WF_thumbnail01");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,800,this,function(p){});
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
        this.loadIncludeScript("sample_timeline02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
