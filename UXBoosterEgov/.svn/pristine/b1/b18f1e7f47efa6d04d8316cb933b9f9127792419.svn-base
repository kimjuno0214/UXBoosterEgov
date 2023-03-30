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
                this._setFormPosition(1040,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">타임라인 테스트 입니다.</Col><Col id=\"Column2\">2019-12-10 16:41</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">A등급</Col><Col id=\"Column5\">작성중</Col><Col id=\"Column6\">2</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">타임라인 테스트 입니다.</Col><Col id=\"Column2\">2019-12-10 16:41</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">B등급</Col><Col id=\"Column5\">작성중</Col><Col id=\"Column6\">1</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">타임라인 테스트 입니다.</Col><Col id=\"Column2\">2019-12-10 16:41</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">C등급</Col><Col id=\"Column5\">진행중</Col><Col id=\"Column6\">0</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">타임라인 테스트 입니다.</Col><Col id=\"Column2\">2019-12-10 16:41</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">C등급</Col><Col id=\"Column5\">진행중</Col><Col id=\"Column6\">0</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">타임라인 테스트 입니다.</Col><Col id=\"Column2\">2019-12-10 16:41</Col><Col id=\"Column3\">홍길동</Col><Col id=\"Column4\">C등급</Col><Col id=\"Column5\">진행중</Col><Col id=\"Column6\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("타임라인 목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","30",null,"184","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_timeLine");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"212\"/><Column size=\"109\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성일\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"등급\"/><Cell col=\"5\" text=\"상태\"/><Cell col=\"6\" text=\"타임라인\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"center\" cssclass=\"cellGrad02\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"center\" cssclass=\"cellGrad05\"/><Cell col=\"6\" text=\"bind:Column6\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,800,this,function(p){});
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
        this.loadIncludeScript("sample_timeline01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
