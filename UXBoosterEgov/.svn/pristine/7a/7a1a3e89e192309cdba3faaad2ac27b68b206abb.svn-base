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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">이미지파일001</Col></Row><Row><Col id=\"Column0\">이미지파일002</Col></Row><Row><Col id=\"Column0\">이미지파일003</Col></Row><Row><Col id=\"Column0\">이미지파일004</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div02","10","10","500","430",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","10","10",null,"280","10",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("ImageViewer00");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div00","10","300","478","118",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_replyBox02");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","9","9","100","100",null,null,null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("이미지");
            obj.set_cssclass("sta_WF_imgBox01");
            this.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","119","9","100","100",null,null,null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("이미지");
            obj.set_cssclass("sta_WF_imgBox01");
            this.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","229","9","100","100",null,null,null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이미지");
            obj.set_cssclass("sta_WF_imgBox01");
            this.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","339","9","100","100",null,null,null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("이미지");
            obj.set_cssclass("sta_WF_imgBox01");
            this.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","449","9","100","100",null,null,null,null,null,null,this.Div02.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("이미지");
            obj.set_cssclass("sta_WF_imgBox01");
            this.Div02.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02.form.Div00.form
            obj = new Layout("default","",0,0,this.Div02.form.Div00.form,function(p){});
            this.Div02.form.Div00.form.addLayout(obj.name, obj);

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
        this.loadIncludeScript("sample22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
