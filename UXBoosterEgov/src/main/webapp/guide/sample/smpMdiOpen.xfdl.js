(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleMdiOpen");
            this.set_titletext("MDI 오픈 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnMenu","364","122","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴오픈");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","12","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("- MDI 오픈");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","122","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1. 메뉴 아이디로 오픈");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","30","170","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2. 폼 URL로 오픈");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenu","200","122","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("M0015");
            obj.set_text("M0015");
            this.addChild(obj.name, obj);

            obj = new Button("btnUrl","364","170","82","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("URL오픈");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUrl","200","170","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_value("biz::sys/GM010.xfdl");
            obj.set_text("biz::sys/GM010.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","50","430","60",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("--> 메뉴 또는 특정 Form을 오픈할때 사용합니다.\r\n     넘긴 파라메터는 \'this.parent.UserParam\' 으로 가져옵니다.\r\n     (주의: 파라메터는 String으로 넘겨야 합니다.)");
            obj.set_font("11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            obj.set_color("crimson");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","10","230","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("- MDI 공통 버튼 제어");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","277","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("1. 공통 버튼 전체 제어");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","355","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2. 공통 버튼 개별 제어");
            this.addChild(obj.name, obj);

            obj = new Button("btnRoleAll","40","310","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("take.comBtnRoleAll(this,\"YYYYN\")");
            this.addChild(obj.name, obj);

            obj = new Button("btnRoleOne","40","390","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("take.comBtnRoleOne(this, \"Print\", true)");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","170","277","550","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            obj.set_color("crimson");
            obj.set_text("--> 조회, 신규, 삭제, 저장, 출력 순으로5자리 \'Y\'or\'N\'으로 처리 (ex:\"YYYYN\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","170","355","660","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_font("11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            obj.set_color("crimson");
            obj.set_text("--> 버튼 아이디 등록 : \'Add\', 조회 : \'Search\', 수정 : \'Save\', 삭제 : \'Del\', 출력 : \'Report\'");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","10","450","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("- MDI Form 객체 가져오기");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","495","270","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("1. 메뉴 아이디로 MDI Form 객체 가져오기");
            this.addChild(obj.name, obj);

            obj = new Button("btnMdiForm","40","530","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("take.getMdiForm(this, \"M0015\")");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuPop","456","122","114","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("메뉴팝업오픈");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpMdiOpen.xfdl", function() {

        this.btnMenu_onclick = function(obj,e)
        {
            var sMenuId, sParam, sCallFunc;

            sMenuId = this.edtMenu.value;
            sParam = "test";
            sCallFunc = "fnTest";

        	take.mdiOpenMenu(this, sMenuId, sParam, sCallFunc);
        };

        this.btnUrl_onclick = function(obj,e)
        {
            var sUrl, sParam, sCallFunc;

            sUrl = this.edtUrl.value;
            sParam = "test";
            sCallFunc = "fnTest";

        	take.mdiOpenMenu(this, sUrl, sParam, sCallFunc);
        };

        this.btnRoleAll_onclick = function(obj,e)
        {
        	take.comBtnRoleAll(this,"YYYYN");
        };

        this.btnRoleOne_onclick = function(obj,e)
        {
        	take.comBtnRoleOne(this, "Print", true);
        };

        this.btnMdiForm_onclick = function(obj,e)
        {
        	var objForm = take.getMdiForm(this, "M0015")

            alert(objForm.name);
            //trace(objForm.name + " --> " + objForm.dsCCodeList.saveXML());

        };

        this.btnMenuPop_onclick = function(obj,e)
        {
        	var sMenuId = this.edtMenu.value;
        	var sUserParam="";
            var sCallBack="";
            var sOption="";

            take.openMenuPop(sMenuId, sUserParam, sOption, sCallBack);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.btnUrl.addEventHandler("onclick",this.btnUrl_onclick,this);
            this.btnRoleAll.addEventHandler("onclick",this.btnRoleAll_onclick,this);
            this.btnRoleOne.addEventHandler("onclick",this.btnRoleOne_onclick,this);
            this.btnMdiForm.addEventHandler("onclick",this.btnMdiForm_onclick,this);
            this.btnMenuPop.addEventHandler("onclick",this.btnMenuPop_onclick,this);
        };
        this.loadIncludeScript("smpMdiOpen.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
