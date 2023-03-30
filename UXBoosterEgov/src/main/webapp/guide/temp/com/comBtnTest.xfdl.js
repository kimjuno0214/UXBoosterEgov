(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comBtnTest");
            this.set_titletext("공통버튼 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(455,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnAdd","10","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_check01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","83","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","156","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_new01");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","229","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_delete01");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","302","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_save01");
            this.addChild(obj.name, obj);

            obj = new Button("btnReport","375","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_print01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",455,50,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comBtnTest.xfdl", function() {
        /**
        * commonbtn_onclick : ~ 공통 버튼 클릭
        */
        this.commonbtn_onclick = function(obj,e)
        {
        	var sBtnGbn;
            var objDivWork;

            sBtnGbn = obj.name.substr(3);
            objDivWork = this.opener;

            switch(sBtnGbn)
            {
                case "Add" :      //등록
                    objDivWork.fnAddRow();
                    break;

                case "Search" :   //조회
                    objDivWork.fnSearch();
                    break;

                case "Save" :     //수정
                    objDivWork.fnSave();
                    break;

                case "Del" :      //삭제
                    objDivWork.fnDelRow();
                    break;

                case "Excel" :   //엑셀
                    objDivWork.fnExcel();
                    break;

                case "Report" :   //레포트
                    objDivWork.fnReport();
                    break;

                default :
                    break;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnAdd.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnSave.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnDel.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnReport.addEventHandler("onclick",this.commonbtn_onclick,this);
        };
        this.loadIncludeScript("comBtnTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
