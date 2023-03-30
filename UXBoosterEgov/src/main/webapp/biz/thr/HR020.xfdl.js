(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR020");
            this.set_titletext("휴가승인관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,932);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsVacationList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"DAT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReason", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVacationDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"255\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staPeriod","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDateFrom","103","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch01","calDateFrom:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDateTo","staMlGroupSearch01:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staReason","calDateTo:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("휴가사유");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboReason","staReason:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsReason");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUser","cboReason:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","staUser:10","10","174","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnUser","edtUserNm:2","10","21","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staApproval","btnUser:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("승인여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboApproval","staApproval:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsApproval");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserCd","855","10","78","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staVacation","0","0","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("휴가승인목록(00 건)");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staInfo","0","326",null,"30","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("휴가계획 상세");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdLeaveList","0","30",null,"286","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsVacationList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"등록일\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"기간\"/><Cell col=\"5\" text=\"일수\"/><Cell col=\"6\" text=\"휴가유형\"/><Cell col=\"7\" text=\"승인\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:REG_DATE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REG_DEPT_NM\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:REG_NM\"/><Cell col=\"4\" text=\"bind:VACATION_PERIOD\" textAlign=\"center\"/><Cell col=\"5\" text=\"expr:DAY_CNT + &quot;일&quot;\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"center\" text=\"bind:VACATION_TYPE_NM\"/><Cell col=\"7\" textAlign=\"center\" text=\"bind:APP_TYPE_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staReasonT","0","356","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("휴가유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staReason","staReasonT:-1","356","630","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLeaveMemoT","0","416","120",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static08","staLeaveMemoT:-1","416","630",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLeavePeriodT","0","386","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLeavePeriod","staLeavePeriodT:-1","386","630","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staApprovalMemoT","Static08:-1","476","120",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("반려사유");
            obj.set_cssclass("sta_WF_th01L");
            obj.getSetter("help").set("");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtLeaveMemo","staLeaveMemoT:6","423",null,null,"staApprovalMemoT:6","6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnApproval",null,"330","46","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_save02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staApproverNmT","Static08:-1","416","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("승인자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staApproverNm","staApproverNmT:-1","416",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staApprovalT","Static08:-1","446","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staApproval","staApprovalT:-1","446",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static17","staApprovalMemoT:-1","476",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtApprovalMemo","staApprovalMemoT:6","483",null,null,"6","6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRequestDateT","staReason:-1","356","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("요청일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRequestDate","staRequestDateT:-1","356",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRequestUserT","staLeavePeriod:-1","386","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRequestUser","staRequestUserT:-1","386",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static06","0","316",null,"10","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"0","46","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search02");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnReturn",null,"330","46","23","49",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_cancel02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,932,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divDetail.form.staRequestDate","text","dsVacationDetail","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.staLeavePeriod","text","dsVacationDetail","VACATION_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.staRequestUser","text","dsVacationDetail","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.staApproverNm","text","dsVacationDetail","APP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.txtLeaveMemo","value","dsVacationDetail","REMARK_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.txtApprovalMemo","value","dsVacationDetail","APP_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.staReason","text","dsVacationDetail","VACATION_TYPE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.staApproval","text","dsVacationDetail","APP_TYPE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboApproval","value","dsSearch","APP_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.calDateFrom","value","dsSearch","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.calDateTo","value","dsSearch","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cboReason","value","dsSearch","VACATION_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.edtUserCd","value","dsSearch","REG_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR020.xfdl", function() {
        /**
        *  휴가승인관리
        *
        *  @MenuPath    테이크 > 휴가 > 휴가승인관리
        *  @FileName    HR020.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.09.16
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.16      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;    // ProjectCd

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInit();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "VacationList";

            switch(sTranId) {
            case "VacationList":
                var objDsSc = this.dsSearch;
        		var sCalFrom = objDsSc.getColumn(0, "START_DATE");
        		var sCalTo	 = objDsSc.getColumn(0, "END_DATE");
        		if( !take.isEmpty(sCalFrom) && !take.isEmpty(sCalTo) ){
        			var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        			if( !bFromTo ){
        				take.alert(this, "", "기간이 잘못되었습니다.");
        				return;
        			}
        		}

        		objDsSc.setColumn(0, "PROJECT_CD", this.fv_sProjectCd);

                this.dsVacationList.clearData();

        		if(take.nvl(this.divSearch.form.edtUserNm.value, "") == "") objDsSc.setColumn(0, "REG_CD", "");

                take.tranSelect(this, sTranId, "HumanResourceManagement.vacationApprovalList", "dsSearch", "dsVacationList", "", "fnCallback");
            	break;

            case "VacationDetail":
                this.dsVacationDetail.clearData();

                take.tranSelect(this, sTranId, "HumanResourceManagement.vacationApprovalDetail", "dsSearch", "dsVacationDetail", "", "fnCallback");
            	break;
            default:
            }
        }

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        //this.fnSave = function(sTranId)
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	if(sTranId == "Update") {
        		//Update
        		var sInDs, sParam;
        		if(this.dsVacationDetail.getColumn(0, "APP_TYPE") == "02") {
        			this.fnSchedule();

        			sInDs		= "dsVacationDetail=dsVacationDetail:U dsSchedule=dsSchedule:U";
        			sParam		= "svcId='" + "Approval" + "'";
        		} else {
        			sInDs		= "dsVacationDetail=dsVacationDetail:U";
        			sParam		= "svcId='" + "Return" + "'";
        		}

        		take.transaction(this, sTranId, "SVC_LOC::hr/vacationApproval.do", sInDs, "", sParam, "fnCallback");
        		//take.tranSave(this, sTranId, sNameSpace, sInDs, "", "", "fnCallback");
        	}
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //조회버튼
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch("VacationList");
        };

        // 리스트변경 디테일 조회
        this.divDetail_grdLeaveList_onselectchanged = function(obj,e)
        {
        	var objDs = this.dsSearch;
            var objDsVl = this.dsVacationList;

            //objDs.clearData();
            //objDs.addRow();
            objDs.setColumn(0, "VACATION_SEQ", objDsVl.getColumn(e.row, "VACATION_SEQ"));
            objDs.setColumn(0, "REG_CD2", objDsVl.getColumn(e.row, "REG_CD"));

        //     if(this.dsVacationList.getColumn(e.row, "APP_TYPE") != '01') {
        //         this.divDetail.form.txtApprovalMemo.set_readonly(true);
        //     } else {
        //         this.divDetail.form.txtApprovalMemo.set_readonly(false);
        //     }

            this.fnSearch("VacationDetail");
        };

        //승인, 반려 버튼
        this.btn_onclick = function(obj,e)
        {
            var objDsDetail = this.dsVacationDetail;
            var sUserCd = nexacro.getApplication().gdsUserInfo.getColumn(0,"USER_CD");

            if(sUserCd != objDsDetail.getColumn(0, "APP_CD")) {
                alert("승인자 본인만 결재가 가능합니다.");
                return;
            }

            var nBtnNM = obj.text;
            var sConfirm = nBtnNM + " 처리가 완료됩니다.\n진행 하시겠습니까?";

            if(nBtnNM == "반려") {
        //		if (take.nvl(objDsDetail.getColumn(0, "APP_TYPE"), "")=="02") {
        //			objDsDetail.setColumn(0, "APP_DESC", "반려 처리.");
        //		} else {
        			//if (take.nvl(this.divDetail.form.txtApprovalMemo.value, "")=="") {
        			if (take.nvl(objDsDetail.getColumn(0, "APP_DESC"), "")=="") {
        				alert("반려사유를 입력해주세요.");
        				return false;
        			}
        //		}
        		objDsDetail.setColumn(0, "APP_TYPE", "03");
        	} else {    //승인
        		objDsDetail.setColumn(0, "APP_TYPE", "02");
        	}

        	if (objDsDetail.getRowType(0) == 4) {
                var bRowChange = take.confirm(this, "question", sConfirm);

                if (bRowChange){
        			this.fnSave("Update");
                }
            }
        };

        //사용자 선택 버튼 클릭.
        this.divSearch_btnUser_onclick = function(obj,e)
        {
            take.openPopup(this, "comUserPop", "frm::com/comUserPop.xfdl", "", "showtitlebar=true", "", false);
        };

        //사용자 이름 빈칸일때
        this.divSearch_edtUserNm_onchanged = function(obj,e)
        {
        	var sValue = take.nvl(obj.value, "");

            if (sValue == "")
        	{
        		this.divSearch.form.edtUserCd.set_value("");
        	}
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @param  {String} N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
            var objDivS = this.divSearch.form;
            var objDateTime = take.getTodayTime();
            //var sBegDay = objDateTime.year + (objDateTime.month-1) + objDateTime.day; // 시작일 한달전 셋팅
            var aBegDay = take.getAddMonths(objDateTime.date,-1); // 시작일 한달전 셋팅
            //var sLastDay = objDateTime.year + objDateTime.month + take.getDaysInMonth(objDateTime.year, objDateTime.month); //이번달 마지막일자

            var sBegDay = (take.getStrData(aBegDay)).date; // 시작일 한달전 셋팅


            objDivS.calDateFrom.set_value(sBegDay);                 // 시작일
            objDivS.calDateTo.set_value(objDateTime.date);// 종료일(현재일)

            this.fnCommonCode();
        }

        /**
         * fnCommonCode : 코드호출 함수
         * @param  {String} N/A
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
            var sOutDs      = ["dsReason", "dsApproval"];
            var sGroupCodes = ["00023", "00025"];
            var sHeaderType = ["ALL", "ALL"];

            take.tranCode(this, sGroupCodes, sOutDs, sHeaderType,
            function(sId, nErrCd, sErrMsg)
            {
                if (this.dsReason.rowcount > 0){
                    this.divSearch.form.cboReason.set_index(0);
                }

                if (this.dsApproval.rowcount > 0){
                    this.divSearch.form.cboApproval.set_index(0);
                }

                this.fnSearch("VacationList");
            });
        };

        /**
         * fnBtnVisible : 승인구분에 따른 버튼처리
         * @param  {String} N/A
         * @example this.fnBtnVisible();
         */
        this.fnBtnVisible = function()
        {
            // app_type -> A(승인), C(반려), R(기안)
            var sAppType = this.dsVacationDetail.getColumn(0, "APP_TYPE");
            var objDivDetail = this.divDetail.form;

            //objDivDetail.cboApproval.set_value(sAppType);

            switch(sAppType) {
                case "02":
                    objDivDetail.btnReturn.set_right(0);
                    objDivDetail.btnApproval.set_right(49);
                    //objDivDetail.btnReturn.set_visible(true);
                    objDivDetail.btnReturn.set_visible(true);
                    objDivDetail.btnApproval.set_visible(false);
                    break;
                case "03":
                    objDivDetail.btnReturn.set_right(49);
                    objDivDetail.btnApproval.set_right(0);
                    objDivDetail.btnReturn.set_visible(false);
                    //objDivDetail.btnApproval.set_visible(false);
                    objDivDetail.btnApproval.set_visible(true);
                    break;
                case "01":
                    objDivDetail.btnReturn.set_right(0);
                    objDivDetail.btnApproval.set_right(49);
                    objDivDetail.btnReturn.set_visible(true);
                    objDivDetail.btnApproval.set_visible(true);
                    break;
                default:
            }
        }

        this.fnSchedule = function()
        {
            var objDsVac	= this.dsVacationDetail;
        	var sDateType 	= objDsVac.getColumn(0, "VACATION_DATE_TYPE");
        	var sPeriod		= objDsVac.getColumn(0, "VACATION_PERIOD");
        		sPeriod 	= nexacro.replaceAll(sPeriod, " ", "");
        		//trace("sPeriod :: " +sPeriod);
        	var sStartDt	= sPeriod.split("~")[0];
        		sStartDt 	= nexacro.replaceAll(sStartDt, "-", "");
        		//trace("sStartDt :: " +sStartDt);
        	var sEndDt		= sPeriod.split("~")[1];
        		sEndDt 		= nexacro.replaceAll(sEndDt, "-", "");
        		//trace("sEndDt :: " +sEndDt);
        	var sTxt		= objDsVac.getColumn(0, "REMARK_TXT");
        	var sUserNm		= objDsVac.getColumn(0, "REG_NM");
        	var sVacaType	= objDsVac.getColumn(0, "VACATION_TYPE_NM");

        	var objDs 		= this.dsSchedule;
        	var nAddRow 	= objDs.addRow();
        	var sStartTime, sEndTime, sAllDay, sTitle;

        	//종일인 경우에는 99시 99분으로 셋팅
        	if(sDateType == "01"){
        		// 종일
        		sAllDay 	= "Y";
        		sStartTime 	= "9999";
        		sEndTime 	= "9999";
        		sTitle		= sUserNm + " " + sVacaType;
        	} else if(sDateType == "02"){
        		//반차 AM
        		sAllDay 	= "N";
        		sStartTime	= "0900";
        		sEndTime 	= "1200";
        		sTitle		= sUserNm + " " + sVacaType + "(오전)";
        	} else {
        		//반차 PM
        		sAllDay 	= "N";
        		sStartTime 	= "1300";
        		sEndTime 	= "1800";
        		sTitle		= sUserNm + " " + sVacaType + "(오후)";
        	}

        	objDs.setColumn(0, "SCHEDULE_START_TIME"	, sStartTime);
        	objDs.setColumn(0, "SCHEDULE_END_TIME"		, sEndTime);
        	objDs.setColumn(0, "ALLDAY_YN"				, sAllDay);
            objDs.setColumn(0, "CATEGORY_CD"			, "C");
        	objDs.setColumn(0, "SCHEDULE_START_DATE"	, sStartDt);
        	objDs.setColumn(0, "SCHEDULE_END_DATE"		, sEndDt);
        	objDs.setColumn(0, "SCHEDULE_TITLE"			, sTitle);
        	objDs.setColumn(0, "SCHEDULE_TXT"			, sTxt);
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : svcId   - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : errCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : errMsg   - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallback = function(sId, nErrCd, sErrMsg)
        {
            //Transaction 에러는 공통에서 처리

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

            switch(sId)
            {
                case "VacationList" : //조회 콜백
                    this.divDetail.form.staVacation.set_text("휴가승인목록 (" + this.dsVacationList.rowcount + "건)");

                    if(this.dsVacationList.rowcount <= 0) {
                        this.divDetail.form.btnReturn.set_visible(false);
                        this.divDetail.form.btnApproval.set_visible(false);
                    }
                    break;

                case "VacationDetail" : //조회 콜백
                    //Script
                    this.fnBtnVisible();
                    break;

                case "Update" :  //저장 콜백
        			this.dsSchedule.clearData();

                    this.fnSearch("VacationList");
                    break;

                default :
                    break;
            }
        }

        /**
        * fnPopCallback : popup callback
        * @param  : N/A
        * @return : N/A
        * @example :
        */
        this.fnPopCallback = function(sRtn)
        {
            var arrRtn = sRtn.split(',');
            this.divSearch.form.edtUserNm.set_value(arrRtn[1]);
            this.divSearch.form.edtUserCd.set_value(arrRtn[0]);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtUserNm.addEventHandler("onchanged",this.divSearch_edtUserNm_onchanged,this);
            this.divSearch.form.btnUser.addEventHandler("onclick",this.divSearch_btnUser_onclick,this);
            this.divDetail.form.grdLeaveList.addEventHandler("onselectchanged",this.divDetail_grdLeaveList_onselectchanged,this);
            this.divDetail.form.btnApproval.addEventHandler("onclick",this.btn_onclick,this);
            this.divDetail.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divDetail.form.btnReturn.addEventHandler("onclick",this.btn_onclick,this);
        };
        this.loadIncludeScript("HR020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
