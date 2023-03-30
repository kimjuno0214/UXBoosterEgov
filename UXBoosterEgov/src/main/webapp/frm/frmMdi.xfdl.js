(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMdi");
            this.set_titletext("Main Mdi");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOpenMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_nav_bg");
            this.addChild(obj.name, obj);

            obj = new Static("staHome","5","7","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_nav_home");
            this.addChild(obj.name, obj);

            obj = new Button("btnAllClose",null,"5","24","24","13",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_nav_mdiClose");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuList",null,"5","24","24","37",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_nav_mdiMenu");
            this.addChild(obj.name, obj);

            obj = new Button("btnRight",null,"5","24","24","61",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_nav_tabNext");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeft",null,"5","24","24","85",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_nav_tabPrev");
            this.addChild(obj.name, obj);

            obj = new Div("divTab","34","0",null,null,"123","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new Static("staLineMdi","0",null,null,"1","0","0",null,null,null,null,this.divTab.form);
            obj.set_taborder("0");
            obj.set_background("#c6c9d4");
            this.divTab.addChild(obj.name, obj);

            obj = new PopupDiv("pdivOpenMenu",null,"35","180","284","0",null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_border("1px solid #005f96");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOpenMenu","0","0",null,null,"0","0",null,null,null,null,this.pdivOpenMenu.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsOpenMenu");
            obj.set_scrollbartype("none autoindicator");
            obj.set_nodatatext("No data.");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"50\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" border=\"0px none\" padding=\"0px 0px 2px 10px\"/><Cell col=\"1\" text=\"닫기\" displaytype=\"buttoncontrol\" border=\"0px none\"/></Band></Format></Formats>");
            this.pdivOpenMenu.addChild(obj.name, obj);

            obj = new Static("staLineLeft","0",null,"34","1",null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#c6c9d4");
            this.addChild(obj.name, obj);

            obj = new Static("staLineRight",null,null,"123","1","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#c6c9d4");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTab.form
            obj = new Layout("default","",0,0,this.divTab.form,function(p){});
            this.divTab.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdivOpenMenu.form
            obj = new Layout("default","",0,0,this.pdivOpenMenu.form,function(p){});
            this.pdivOpenMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,35,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMdi.xfdl", function() {
        /**
        *  Mdi Tab
        *
        *  @MenuPath    MainFrame > Mdi Tab
        *  @FileName    frmMdi.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.09.10
        *  @Version     1.0
        *  @Desction    MDI Tab
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.10      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.frmMdi_onload = function(obj,e)
        {
        	trace("frmMdi.onload.success");
        };

        /*********************************************************
         * 2 필수 FUNCTION 영역
         ********************************************************/
        //N/A

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //MDI 스크롤 이동 버튼 클릭 이벤트
        this.btnLR_onclick = function(obj,e)
        {
            var nTabWidth = UXBooster.mainframe.WorkFrame.form.fv_nTabWidth;
            if (obj.name.substr(3)=="Left")
            {
                //trace("<");
                this.divTab.form.scrollBy((nTabWidth*-1),0);
            } else {
                //trace(">");
                this.divTab.form.scrollBy(nTabWidth,0);
            }
        };

        //MDI전체 닫기 버튼 클릭 이벤트
        this.btnAllClose_onclick = function(obj,e)
        {
        	this.getOwnerFrame().form.fnResetMdi();
        };

        //오픈 메뉴 리스트 버튼 클릭 이벤트
        this.btnMenuList_onclick = function(obj,e)
        {
        	this.fnOpenMenuPop();
        };

        //메뉴 오픈 팝업 그리드 클릭 이벤트
        this.pdivOpenMenu_grdOpenMenu_oncellclick = function(obj,e)
        {
        	var objDs, objWorkDiv, objWorkForm;
            var sDivId;
            var nFRow;

            objDs = obj.getBindDataset();
            objWorkForm = this.getOwnerFrame().form;

        	if (e.cell==0)
            {
                objWorkForm.fnActiveMenu(objDs, e.row);

            } else if (e.cell==1) {

                sDivId = "divWork_" + objDs.getColumn(e.row, "PROGRAM_PREFIX") + "_" + objDs.getColumn(e.row, "MENU_CD");
                objWorkDiv = objWorkForm.components[sDivId];
                //trace("objWorkDiv.name--->" + objWorkDiv.name);
                if (objWorkDiv)
                {
                    if (!objWorkForm.fnMdiDestroy(objWorkDiv))
                    {
                        take.trace("System", "ERROR", "MDI 제거 실패");
                    }
                }
            }

            this.pdivOpenMenu.closePopup();
        };

        //홈 클릭 이벤트
        this.staHome_onclick = function(obj,e)
        {
        	//20210202 정해원 이미 열어놓은 페이지가 있을 경우
        	this.divTab.objActiveWork = null;

        	UXBooster.WorkFrame.set_visible(true);
            UXBooster.WorkFrame.set_enable(true);

        	//20210202 정해원 메인화면이 대시보드로 변경되면서 주석처리
        	//objFrameForm.fnSearch("SearchNotice");
        	//objFrameForm.divMain.set_url("");
        	//objFrameForm.divMain.set_url("frm::frmHome.xfdl");
        	this.getOwnerFrame().form.fnDisableMenu();

        	UXBooster.WorkFrame.bringToFront();

        };

        //20210205 정해원
        //화면리사이즈 시 staLineMdi의 너비가 스크롤할 수 있는 너비까지 확장되도록 처리
        this.divTab_onsize = function(obj,e)
        {
        	this.divTab.form.staLineMdi.set_right("0px");
        	this.divTab.form.resetScroll();
        	if(this.divTab.form.hscrollbar.max > 0)
        	{
        		var nPos = this.divTab.form.hscrollbar.max;
        		this.divTab.form.staLineMdi.set_right("-" + nPos + "px");
        	}
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnOpenMenuPop : 열려 잇는 메뉴 리스트 팝업
         * @param  {N/A} N/A
         * @example this.fnMenuFind();
         */
        this.fnOpenMenuPop = function()
        {
            var objPdiv = this.pdivOpenMenu;
            var nLeft = objPdiv.getOffsetLeft();
            var objTabList = this.btnMenuList;

            if (!objPdiv.isPopup())
            {
                //objTabList.set_cssclass("btn_MDI_PopClose");
                objPdiv.trackPopupByComponent(objTabList, -100, 30 );
            } else {
                //objTabList.set_cssclass("btn_MDI_Menu");
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmMdi_onload,this);
            this.staHome.addEventHandler("onclick",this.staHome_onclick,this);
            this.btnAllClose.addEventHandler("onclick",this.btnAllClose_onclick,this);
            this.btnMenuList.addEventHandler("onclick",this.btnMenuList_onclick,this);
            this.btnRight.addEventHandler("onclick",this.btnLR_onclick,this);
            this.btnLeft.addEventHandler("onclick",this.btnLR_onclick,this);
            this.divTab.addEventHandler("onsize",this.divTab_onsize,this);
            this.pdivOpenMenu.addEventHandler("oncloseup",this.pdivOpenMenu_oncloseup,this);
            this.pdivOpenMenu.form.grdOpenMenu.addEventHandler("oncellclick",this.pdivOpenMenu_grdOpenMenu_oncellclick,this);
        };
        this.loadIncludeScript("frmMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
