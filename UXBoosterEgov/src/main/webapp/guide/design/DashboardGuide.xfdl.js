(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DashboardGuide");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1245,737);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGuide", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"DATA\">선택</Col></Row><Row><Col id=\"CODE\">DashboardGuide_11_295_155</Col><Col id=\"DATA\">1X1 컨텐츠 (W295 X H155)</Col></Row><Row><Col id=\"DATA\">1X2 컨텐츠 (W295 X H320)</Col><Col id=\"CODE\">DashboardGuide_12_295_320</Col></Row><Row><Col id=\"DATA\">1X2 차트 (W295 X H320)</Col><Col id=\"CODE\">DashboardGuide_12_295_320_chart_01</Col></Row><Row><Col id=\"DATA\">1X2 차트&amp;컨텐츠 (W295 X H320)</Col><Col id=\"CODE\">DashboardGuide_12_295_320_chart_02</Col></Row><Row><Col id=\"DATA\">1X3 컨텐츠 (W295 X H485)</Col><Col id=\"CODE\">DashboardGuide_13_295_485</Col></Row><Row><Col id=\"CODE\">DashboardGuide_13_295_485_chart_01</Col><Col id=\"DATA\">1X3 차트 (W295 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_13_295_485_chart_02</Col><Col id=\"DATA\">1X3 차트&amp;컨텐츠 (W295 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_14_295_650</Col><Col id=\"DATA\">1X4 컨텐츠 (W295 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_14_295_650_chart_01</Col><Col id=\"DATA\">1X4 차트 (W295 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_14_295_650_chart_02</Col><Col id=\"DATA\">1X4 차트&amp;컨텐츠 (W295 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_21_600_155</Col><Col id=\"DATA\">2X1 컨텐츠 (W600 X H155)</Col></Row><Row><Col id=\"DATA\">2X2 컨텐츠 (W600 X H320)</Col><Col id=\"CODE\">DashboardGuide_22_600_320</Col></Row><Row><Col id=\"DATA\">2X2 차트 (W600 X H320)</Col><Col id=\"CODE\">DashboardGuide_22_600_320_chart_01</Col></Row><Row><Col id=\"DATA\">2X2 차트&amp;컨텐츠 (W600 X H320)</Col><Col id=\"CODE\">DashboardGuide_22_600_320_chart_02</Col></Row><Row><Col id=\"DATA\">2X3 컨텐츠 (W600 X H485)</Col><Col id=\"CODE\">DashboardGuide_23_600_485</Col></Row><Row><Col id=\"CODE\">DashboardGuide_23_600_485_chart_01</Col><Col id=\"DATA\">2X3 차트 (W600 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_23_600_485_chart_02</Col><Col id=\"DATA\">2X3 차트&amp;컨텐츠(W600 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_24_600_650</Col><Col id=\"DATA\">2X4 컨텐츠 (W600 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_24_600_650_chart_01</Col><Col id=\"DATA\">2X4 차트(W600 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_24_600_650_chart_02</Col><Col id=\"DATA\">2X4 차트&amp;컨텐츠(W600 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_31_905_155</Col><Col id=\"DATA\">3X1 컨텐츠 (W905 X H155)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_32_905_320</Col><Col id=\"DATA\">3X2 컨텐츠 (W905 X H320)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_32_905_320_chart_01</Col><Col id=\"DATA\">3X2 차트 (W905 X H320)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_32_905_320_chart_02</Col><Col id=\"DATA\">3X2 차트&amp;컨텐츠 (W905 X H320)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_33_905_485</Col><Col id=\"DATA\">3X3 컨텐츠 (W905 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_33_905_485_chart_01</Col><Col id=\"DATA\">3X3 차트 (W905 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_33_905_485_chart_02</Col><Col id=\"DATA\">3X3 차트&amp;컨텐츠 (W905 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_13_295_650</Col><Col id=\"DATA\">3X4 컨텐츠 (W905 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_34_905_650_chart_01</Col><Col id=\"DATA\">3X4 차트 (W905 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_34_905_650_chart_02</Col><Col id=\"DATA\">3X4 차트&amp;컨텐츠 (W905 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_41_1210_155</Col><Col id=\"DATA\">4X1 컨텐츠 (W1210 X H155)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_42_1210_320</Col><Col id=\"DATA\">4X2 컨텐츠 (W1210 X H320)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_42_1210_320_chart_01</Col><Col id=\"DATA\">4X2 차트 (W1210 X H320)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_42_1210_320_chart_02</Col><Col id=\"DATA\">4X2 차트&amp;컨텐츠 (W1210 X H320)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_43_600_485</Col><Col id=\"DATA\">4X3 컨텐츠 (W1210 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_43_1210_485_chart_01</Col><Col id=\"DATA\">4X3 차트 (W1210 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_43_1210_485_chart_02</Col><Col id=\"DATA\">4X3 차트&amp;컨텐츠(W1210 X H485)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_44_1210_650</Col><Col id=\"DATA\">4X4 컨텐츠 (W1210 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_44_1210_650_chart_01</Col><Col id=\"DATA\">4X4 차트(W1210 X H650)</Col></Row><Row><Col id=\"CODE\">DashboardGuide_44_1210_650_chart_02</Col><Col id=\"DATA\">4X4 차트&amp;컨텐츠(W1210 X H650)</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPrefixT","20","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("대시보드 가이드");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGuide","114","10","221","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsGuide");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","cboGuide:19","10","100","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("화면 사이즈(W*H)");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtW","Static00:4","10","60","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("434");
            obj.set_textAlign("center");
            obj.set_text("434");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","edtW:0","10","20","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("X");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Noto Sans CJK KR\",\"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtH","Static00_00:0","10","60","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("197");
            obj.set_textAlign("center");
            obj.set_text("197");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_01","609","10",null,"21","299",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("Drag 또는 사이즈를 입력해서 리사이즈 해보세요.");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.15%","42","70","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","52",null,"10","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","0","-10","10",null,null,"-10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","0",null,null,"10","10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","62",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_formscrollbarsize("5");
            obj.set_formscrollbartype("indicator indicator");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnW","295","0","5","320",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cursor("w-resize");
            obj.set_background("#ffffff");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnH","0","320",null,"5","btnW:0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cursor("n-resize");
            obj.set_background("#ffffff");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDashView","0","0",null,null,"btnW:0","btnH:0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("대시보드 가이드 보기");
            obj.set_border("1px solid");
            obj.set_background("#ffffff");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnWH","btnH:0","btnW:0","5","5",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cursor("move");
            obj.set_background("#ffffff");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24_00",null,"-10","10",null,"0","-10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-10","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staPrefixT.set_taborder("1");
                p.staPrefixT.set_text("대시보드 가이드");
                p.staPrefixT.set_cssclass("sta_WF_textR");
                p.staPrefixT.move("20","10","90","21",null,null);

                p.cboGuide.set_taborder("0");
                p.cboGuide.set_innerdataset("dsGuide");
                p.cboGuide.set_codecolumn("CODE");
                p.cboGuide.set_datacolumn("DATA");
                p.cboGuide.set_text("선택");
                p.cboGuide.set_value("");
                p.cboGuide.set_index("0");
                p.cboGuide.move("114","10","221","21",null,null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("화면 사이즈(W*H)");
                p.Static00.set_cssclass("sta_WF_textR");
                p.Static00.move("cboGuide:19","10","100","21",null,null);

                p.edtW.set_taborder("3");
                p.edtW.set_value("434");
                p.edtW.set_textAlign("center");
                p.edtW.move("Static00:4","10","60","21",null,null);

                p.Static00_00.set_taborder("4");
                p.Static00_00.set_text("X");
                p.Static00_00.set_textAlign("center");
                p.Static00_00.set_font("bold 12px/normal \"Arial\",\"Noto Sans CJK KR\",\"Malgun Gothic\"");
                p.Static00_00.move("edtW:0","10","20","21",null,null);

                p.edtH.set_taborder("5");
                p.edtH.set_value("197");
                p.edtH.set_textAlign("center");
                p.edtH.move("Static00_00:0","10","60","21",null,null);

                p.Static00_01.set_taborder("6");
                p.Static00_01.set_text("Drag 또는 사이즈를 입력해서 리사이즈 해보세요.");
                p.Static00_01.move("609","10",null,"21","299",null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("default0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staPrefixT.set_taborder("2");
                p.staPrefixT.set_text("프로젝트");
                p.staPrefixT.set_cssclass("sta_WF_textRImport");
                p.staPrefixT.move("20","10","80","21",null,null);

                p.staRoleT.set_taborder("3");
                p.staRoleT.set_text("권한");
                p.staRoleT.set_cssclass("sta_WF_textR");
                p.staRoleT.move("354","10","80","21",null,null);

                p.edtRole.set_taborder("0");
                p.edtRole.move("438","10","231","21",null,null);

                p.staUseYnT.set_taborder("4");
                p.staUseYnT.set_text("사용여부");
                p.staUseYnT.set_cssclass("sta_WF_textR");
                p.staUseYnT.move("688","10","80","21",null,null);

                p.cboUseYn.set_taborder("1");
                p.cboUseYn.set_innerdataset("dsCboUseYn");
                p.cboUseYn.set_codecolumn("CODE");
                p.cboUseYn.set_datacolumn("NAME");
                p.cboUseYn.set_text("Combo00");
                p.cboUseYn.move("772","10","227","21",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form.divDashView
            obj = new Layout("default","",0,0,this.divDetail.form.divDashView.form,function(p){});
            this.divDetail.form.divDashView.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnW.set_taborder("0");
                p.btnW.set_cursor("w-resize");
                p.btnW.set_background("#ffffff");
                p.btnW.move("295","0","5","320",null,null);

                p.btnH.set_taborder("1");
                p.btnH.set_cursor("n-resize");
                p.btnH.set_background("#ffffff");
                p.btnH.move("0","320",null,"5","btnW:0",null);

                p.divDashView.set_taborder("2");
                p.divDashView.set_text("대시보드 가이드 보기");
                p.divDashView.set_border("1px solid");
                p.divDashView.set_background("#ffffff");
                p.divDashView.move("0","0",null,null,"btnW:0","btnH:0");

                p.btnWH.set_taborder("3");
                p.btnWH.set_cursor("move");
                p.btnWH.set_background("#ffffff");
                p.btnWH.move("btnH:0","btnW:0","5","5",null,null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdForm.set_taborder("0");
                p.grdForm.set_binddataset("dsProjectRoleMenuList");
                p.grdForm.set_autofittype("col");
                p.grdForm.set_treeusecheckbox("false");
                p.grdForm.set_autosizingtype("col");
                p.grdForm.set_oncellclick("grdRoleMenu_oncellclick");
                p.grdForm.move("320","30",null,null,"8","10");

                p.staListT.set_taborder("1");
                p.staListT.set_text("권한 목록");
                p.staListT.set_cssclass("sta_WF_title02");
                p.staListT.move("0","0","450","30",null,null);

                p.staRoleMapT.set_taborder("2");
                p.staRoleMapT.set_text("권한 매핑");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move("318","0",null,"30","162",null);

                p.btnFormDesign.set_taborder("3");
                p.btnFormDesign.set_text("저장");
                p.btnFormDesign.set_cssclass("btn_WF_basic01");
                p.btnFormDesign.set_onclick("btnRoleSave_onclick");
                p.btnFormDesign.move(null,"3","46","23","8",null);

                p.Static45.set_taborder("4");
                p.Static45.set_text("Static00");
                p.Static45.set_background("red");
                p.Static45.set_visible("false");
                p.Static45.move("310","30","10","200",null,null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1245,737,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DashboardGuide.xfdl", function() {
        /**
        *  DashboardGuide
        *
        *  @MenuPath    Guide > DashboardGuide
        *  @FileName    DashboardGuide.xfdl
        *  @Creator     고영민
        *  @CreateDate  2020.09.01
        *  @Version     1.0
        *  @Desction    대시보드 가이드
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.09.01      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
                //Script
            }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow, fnExcel, fnPrint)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	return true;
        }

        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            return true;
        }

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            return true;
        }

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            return true;
        }

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {
            return true;
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //버튼 드래그
        this.divDetail_btn_ondrag = function(obj,e)
        {
            //컴포넌트 아이디
        	var sGbn = obj.name.substr(3);

            //userdata 세팅
            e.set_userdata(sGbn);

            //드래그 시작을 위한 리턴
            return true;
        };

        //폼 드래그 무브
        this.divDetail_ondragmove = function(obj,e)
        {
            //변수 선언
        	var sGbn;
            var objBase;

            //drag시 세팅됀 userdata
            sGbn = e.userdata;

            //베이스가 되는 div Form
            objBase = this.divDetail.form;

            //Width 변경 버튼이 drag되었을 경우
            if (sGbn=="W")
            {
                objBase.btnW.set_left(e.clientx);

            } else if (sGbn=="H") { //Height 변경 버튼이 drag되었을 경우

                objBase.btnH.set_top(e.clienty);
                objBase.btnW.set_height(e.clienty);

            } else { //Width, Height 동시 변경 버튼이 drag되었을 경우

                objBase.btnW.set_left(e.clientx);
                objBase.btnH.set_top(e.clienty);
                objBase.btnW.set_height(e.clienty);

            }

            //reset scroll
            objBase.resetScroll();

            //대시보드 view div
            objDashView = this.divDetail.form.divDashView;

            //상단 검색 조건 height, width값 변경 적용
            this.divSearch.form.edtW.set_value(objDashView.getOffsetWidth());
            this.divSearch.form.edtH.set_value(objDashView.getOffsetHeight());
        };

        //상단 검색 조건 height, width edit 포커스가 나갔을 때 이벤트
        this.edt_onkillfocus = function(obj,e)
        {
            //대시보드 view div 사이즈 변경 함수 호출
        	this.fnDashViewResize();
        };

        //상단 검색 조건 height, width edit 키 다운 이벤트
        this.edt_onkeydown = function(obj,e)
        {
            //엔터일 경우 대시보드 view div 사이즈 변경 함수 호출
            if (e.keycode==13) this.fnDashViewResize();
        };

        //검색조건 가이드 콤보 변경 이벤트
        this.divSearch_cboGuide_onitemchanged = function(obj,e)
        {
            //변수 선언
        	var sUrl, sVal;
            var arrInfo;
            var nW, nH;

            //변경된 값
            sVal = e.postvalue;

            //Guide Form URL 구하기
            sUrl = "guide::design/";
            sUrl+=sVal + ".xfdl";

            //DashboardGuide_12_295_320_chart_01
            arrInfo = sVal.split("_");

            //trace("arrInfo --> " + arrInfo);

            //변경된 width, height값
            nW = arrInfo[2];
            nH = arrInfo[3];

            //변경된 값 적용하기
            this.divSearch.form.edtW.set_value(nW);
            this.divSearch.form.edtH.set_value(nH);

            //URL 초기화
            this.divDetail.form.divDashView.dashurl="";
            this.divDetail.form.divDashView.set_url("");

            //URL 세팅
            this.divDetail.form.divDashView.dashurl=sUrl;
            this.divDetail.form.divDashView.set_url("frm::dbc/dbcComDash.xfdl");

            //변경된 값에 맞게 대시보드 뷰 사이즈 변경
            this.fnDashViewResize();

        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnDashViewResize : view div 사이즈 변경 함수 호출
         * @param  {N/A} N/A
         * @example this.fnDashViewResize();
         */
        this.fnDashViewResize = function()
        {
            //변수 선언
            var objDiv, objBase;
            var nW, nH, nMaxW, nMaxH;

            //변수값 세팅
            objDiv = this.divDetail; //Detail Div
            objBase = objDiv.form;   //Detail Div Form

            nW = nexacro.toNumber(this.divSearch.form.edtW.value); //width 값
            nH = nexacro.toNumber(this.divSearch.form.edtH.value); //height 값
            //nMaxW = objDiv.getOffsetWidth()-nexacro.toNumber(objBase.btnW.width); //최대 width 값
            //nMaxH = objDiv.getOffsetHeight()-nexacro.toNumber(objBase.btnH.height); //최대 height 값
            nMaxW = 1220; //최대 width 값
            nMaxH = 660; //최대 height 값

            //width 사이즈가 너무 작거나 최대값을 넘어선 경우
            if (nW>nMaxW)
            {
                //alert("현재 가능한 Width는 1 ~ "+ nMaxW+" 입니다.");
                take.alert(this, "Info", "현재 가능한 Width는 1 ~ {text} 입니다.", {text:nMaxW});

                nW = nMaxW;
                this.divSearch.form.edtW.set_value(nW);
            } else if (nW<1) {

                take.alert(this, "Info", "현재 가능한 Width는 1 ~ {text} 입니다.", {text:nMaxW});

                nW = 1;
                this.divSearch.form.edtW.set_value(nW);
            }

            //변경된 width 적용
            objBase.btnW.set_left(nW);

            //height 사이즈가 너무 작거나 최대값을 넘어선 경우
            if (nH>nMaxH)
            {
                //alert("현재 가능한 Height는 1 ~ "+ nMaxH+" 입니다.");
                take.alert(this, "Info", "현재 가능한 Height는 1 ~ {text} 입니다.", {text:nMaxH});

                nH = nMaxH;
                this.divSearch.form.edtH.set_value(nH);
            } else if (nH<1) {

                take.alert(this, "Info", "현재 가능한 Height는 1 ~ {text} 입니다.", {text:nMaxH});

                nH = 1;
                this.divSearch.form.edtH.set_value(1);
            }

            //변경된 height 적용
            objBase.btnH.set_top(nH);
            objBase.btnW.set_height(nH);

            //resetScroll
            objBase.resetScroll();
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.cboGuide.addEventHandler("onitemchanged",this.divSearch_cboGuide_onitemchanged,this);
            this.divSearch.form.edtW.addEventHandler("onkillfocus",this.edt_onkillfocus,this);
            this.divSearch.form.edtW.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.divSearch.form.edtH.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.divSearch.form.edtH.addEventHandler("onkillfocus",this.edt_onkillfocus,this);
            this.divDetail.addEventHandler("ondragmove",this.divDetail_ondragmove,this);
            this.divDetail.form.btnW.addEventHandler("ondrag",this.divDetail_btn_ondrag,this);
            this.divDetail.form.btnH.addEventHandler("ondrag",this.divDetail_btn_ondrag,this);
            this.divDetail.form.btnWH.addEventHandler("ondrag",this.divDetail_btn_ondrag,this);
        };
        this.loadIncludeScript("DashboardGuide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
