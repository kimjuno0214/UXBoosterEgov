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
                this._setFormPosition(455,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnAdd","10","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_comm");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","83","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_comm");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","156","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_comm");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","229","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_comm");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","302","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_comm");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint","375","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_comm");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEtcFunc","84","43","286","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staEtcT","10","43","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("그외 함수명");
            this.addChild(obj.name, obj);

            obj = new Button("btnEtc","375","43","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_comm");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",455,80,this,function(p){});
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
                    objDivWork.fnAdd();
                    break;

                case "Search" :   //조회
                    objDivWork.fnSearch();
                    break;

                case "Save" :     //수정
                    objDivWork.fnSave();
                    break;

                case "Del" :      //삭제
                    objDivWork.fnDel();
                    break;

                case "Excel" :   //엑셀
                    objDivWork.fnExcel();
                    break;

                case "Print" :   //레포트
                    objDivWork.fnPrint();
                    break;

                case "Etc" : //실행
                    objDivWork[this.edtEtcFunc.value]();
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
            this.btnPrint.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnEtc.addEventHandler("onclick",this.commonbtn_onclick,this);
        };
        this.loadIncludeScript("comBtnTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
