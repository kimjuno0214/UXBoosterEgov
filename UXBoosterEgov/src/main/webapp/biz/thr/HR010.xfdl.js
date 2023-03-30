(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR010");
            this.set_titletext("휴가관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRemaining", this);
            obj._setContents("<ColumnInfo><Column id=\"VAC_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REM_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReason", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">- 선택 -</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">개인연차(월차)</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">반차(오전)</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">반차(오후)</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">1</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">2</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">3</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 선택 -</Col><Col id=\"CODE\">00</Col></Row><Row><Col id=\"NAME\">승인</Col><Col id=\"CODE\">01</Col></Row><Row><Col id=\"NAME\">반려</Col><Col id=\"CODE\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">신청</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTime", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">오전(AM)</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">오후(PM)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVacaList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVacaDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYear","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYear","staYear:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYear");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staReason","cboYear:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("휴가유형");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboReason","staReason:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsReason");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staApproval","cboReason:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("승인여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboApproval","staApproval:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsApproval");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staLeave","0","162","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("휴가목록 (00 건)");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRemainTitle","0","0","500","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("년도별 잔여 휴가 확인");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdLeaveList","0","192","500",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsVacaList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"70\"/><Column size=\"160\"/><Column size=\"69\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"일수\"/><Cell col=\"2\" text=\"휴가유형\"/><Cell col=\"3\" text=\"승인\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_DT\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DAY_CNT\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:VACATION_TYPE_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:APP_TYPE_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staReasonT","520","30","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("휴가유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static10","staReasonT:-1","30",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staApproverT","520","90","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("승인자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static11","staApproverT:-1","90",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staPeriodT","520","60","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("휴가기간");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static12","staPeriodT:-1","60",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMemoT","520","120","120","298",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static15","staMemoT:-1","120",null,"298","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtMemo","staMemoT:6","127",null,"284","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDateT","520","417","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDate","staRegDateT:-1","417",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staApprovalT","520","447","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staApproval","staApprovalT:-1","447",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staInfoTitle","520","0","200","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("휴가계획 상세");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboReason","staReasonT:6","35","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsReason");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtApprover","staApproverT:6","95","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnApprover","edtApprover:5","95","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_search02");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("txtCancelT","520","477","120",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static02","txtCancelT:-1","477",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtCancel","txtCancelT:6","483",null,null,"6","6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staOccurT","0","30","167","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("발생일수");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Noto Sans CJK KR\",\"맑은 고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseT","staOccurT:-1","30","168","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("사용일수");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Noto Sans CJK KR\",\"맑은 고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRemainT","staUseT:-1","30","167","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("잔여일수");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Noto Sans CJK KR\",\"맑은 고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staOccur","0","60","167","92",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_textAlign("center");
            obj.set_font("24px/normal \"Arial\",\"Noto Sans CJK KR\",\"맑은 고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUse","staOccur:-1","60","168","92",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_textAlign("center");
            obj.set_font("24px/normal \"Arial\",\"Noto Sans CJK KR\",\"맑은 고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRemain","staUse:-1","60","167","92",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_textAlign("center");
            obj.set_font("24px/normal \"Arial\",\"Noto Sans CJK KR\",\"맑은 고딕\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static27","500","0","20",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static06","0","152","500","10",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divReriod","staPeriodT:6","65","420","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calDateFrom","0","0","200","21",null,null,null,null,null,null,this.divDetail.form.divReriod.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("cal_WF_essential");
            this.divDetail.form.divReriod.addChild(obj.name, obj);

            obj = new Div("divCbo","calDateFrom:0","0",null,"21","0",null,null,null,null,null,this.divDetail.form.divReriod.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            this.divDetail.form.divReriod.addChild(obj.name, obj);

            obj = new Combo("cboTime","10","0",null,"21","10",null,null,null,null,null,this.divDetail.form.divReriod.form.divCbo.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTime");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_essential");
            this.divDetail.form.divReriod.form.divCbo.addChild(obj.name, obj);

            obj = new Div("divCal","calDateFrom:0","0",null,"21","0",null,null,null,null,null,this.divDetail.form.divReriod.form);
            obj.set_taborder("0");
            this.divDetail.form.divReriod.addChild(obj.name, obj);

            obj = new Static("staPeriod","0","0","20","21",null,null,null,null,null,null,this.divDetail.form.divReriod.form.divCal.form);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divDetail.form.divReriod.form.divCal.addChild(obj.name, obj);

            obj = new Calendar("calDateTo","staPeriod:0","0",null,"21","0",null,null,null,null,null,this.divDetail.form.divReriod.form.divCal.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("cal_WF_essential");
            this.divDetail.form.divReriod.form.divCal.addChild(obj.name, obj);

            obj = new Edit("edtAppCd",null,"95","80","21","btnApprover:10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
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
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divReriod.form.divCbo.form
            obj = new Layout("default","",0,0,this.divDetail.form.divReriod.form.divCbo.form,function(p){});
            this.divDetail.form.divReriod.form.divCbo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divReriod.form.divCal.form
            obj = new Layout("default","",0,0,this.divDetail.form.divReriod.form.divCal.form,function(p){});
            this.divDetail.form.divReriod.form.divCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divReriod.form
            obj = new Layout("default","",0,0,this.divDetail.form.divReriod.form,function(p){});
            this.divDetail.form.divReriod.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.edtApprover","value","dsVacaDetail","APP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.cboReason","value","dsVacaDetail","VACATION_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.txtMemo","value","dsVacaDetail","REMARK_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.staRegDate","text","dsVacaDetail","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.staApproval","text","dsVacaDetail","APP_TYPE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.txtCancel","value","dsVacaDetail","APP_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.staOccur","text","dsRemaining","VAC_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.staUse","text","dsRemaining","USE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.staRemain","text","dsRemaining","REM_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.divReriod.form.divCbo.form.cboTime","value","dsVacaDetail","VACATION_DATE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.divReriod.form.divCal.form.calDateTo","value","dsVacaDetail","VACATION_END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.divReriod.form.calDateFrom","value","dsVacaDetail","VACATION_START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtAppCd","value","dsVacaDetail","APP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYear","value","dsSearch","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR010.xfdl", function() {
        /**
        *  휴가관리
        *
        *  @MenuPath    테이크 > 휴가 > 휴가관리
        *  @FileName    HR010.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.09.04
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.04      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_sUserCd         = "";
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
            if (take.nvl(sTranId, "")=="") sTranId = "remainList";

            switch(sTranId) {
                case "remainList":
                    var objDsSearch = this.dsSearch;
                    var sType    = take.nvl(this.divSearch.form.cboReason.value, "");
                    var sApproval= take.nvl(this.divSearch.form.cboApproval.value, "");

                    objDsSearch.setColumn(0, "PROJECT_CD",      this.fv_sProjectCd);
                    objDsSearch.setColumn(0, "VACATION_TYPE",   sType);
                    objDsSearch.setColumn(0, "APP_TYPE",        sApproval);
        			objDsSearch.setColumn(0, "USER_CD",        	this.fv_sUserCd);

                    this.dsRemaining.clearData();
                    take.tranSelect(this, sTranId, "HumanResourceManagement.vacationUseSelect", "dsSearch", "dsRemaining", "", "fnCallback");
                    break;

                case "vacaList":
                    this.dsVacaList.clearData();
                    this.dsVacaDetail.clearData();
                    take.tranSelect(this, sTranId, "HumanResourceManagement.vacationInfoList", "dsSearch", "dsVacaList", "", "fnCallback");
                    break;

                case "vacaDetail":
                    this.dsVacaDetail.clearData();

                    take.tranSelect(this, sTranId, "HumanResourceManagement.vacationInfoDetail", "dsSearch", "dsVacaDetail", "", "fnCallback");
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
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

            if(this.dsVacaList.rowcount <= 0) {
                take.alert(this, "Info", "휴가신청이 없습니다.");
                return;
            }

            var sApproval = take.nvl(this.dsVacaDetail.getColumn(0, "APP_TYPE"), "");

            if(sApproval != '01') {
                alert("이미 결재가 완료된 건입니다.\n저장할수 없습니다. 확인해주세요.");
                return false;
            }

            if(this.fnCheckForm()) {
                var objDsVacaDetail = this.dsVacaDetail;
                //trace(this.dsVacaDetail.getRowType(0));
                if(this.dsVacaDetail.getRowType(0) == 2) {
                    //신규작성 신청
                    this.fnDetailSet();

                    var bRowChange = take.confirm(this, "question", "휴가신청 하시겠습니까?");
                    if (bRowChange){
                        //take.tranSave(this, "Save", "HumanResourceManagement.vacationInfo", "dsVacaDetail", "", "", "fnCallback");
                        this.fnTran("Save"); // 신청 Insert
                    }
                } else {
        			alert("이미 기안(반려)처리 되었습니다. 확인해주세요.");
        			return false;
        //             if(this.dsVacaDetail.getRowType(0) == 1) {
        //                 alert("선택한 신청건의 수정사항이 없습니다.");
        //             } else {
        //                 // 리스트 (수정 -> 저장)
        //                 this.fnDetailSet();
        //
        //                 if (take.confirm(this, "question", "선택한 신청건을 수정 하시겠습니까?")){
        //                     //take.tranSave(this, "Modify", "HumanResourceManagement.vacationInfo", "dsVacaDetail", "", "", "fnCallback");
        //                     this.fnTran("Modify"); // 신청 Update
        //                 }
        //             }
                }
            }
        }

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            //if (take.nvl(sGrdId, "")=="") sGrdId = "grdLeaveList";

            if(this.dsVacaList.getRowType(this.dsVacaList.rowposition) == 2) {
                alert("이미 신청 작성중입니다.");
                return false;
            }else{
                //this.fnAddRow("grdLeaveList", this.dsVacaList.addRow());
                this.dsVacaList.addRow()

                var objDsDetail = this.dsVacaDetail;
                var objToday = take.getTodayTime();
                //var sRegDt = (objToday.year + "-" + objToday.month + "-" + objToday.day + " " + objToday.hh + ":" + objToday.mm + ":" + objToday.ss);
                //this.divDetail.form.cboReason.set_index(1);

                objDsDetail.clearData();
                objDsDetail.addRow();

                objDsDetail.setColumn(0, "PROJECT_CD", this.fv_sProjectCd);
                objDsDetail.setColumn(0, "VACATION_TYPE", "01");
                objDsDetail.setColumn(0, "VACATION_START_DT", objToday.date);
                objDsDetail.setColumn(0, "VACATION_END_DT", objToday.date);
                objDsDetail.setColumn(0, "APP_TYPE", "01");              //신청 (R)
                objDsDetail.setColumn(0, "APP_TYPE_NM", "기안신청");
                objDsDetail.setColumn(0, "APP_CD", "U000000020");        //신청 (R)
                objDsDetail.setColumn(0, "APP_NM", "김태규");

                //상세내역에서 휴가기간 캘린더/콤보 변경
                if (this.divDetail.form.divReriod.form.divCbo.visible) {
                    this.divDetail.form.divReriod.form.divCbo.set_visible(false);
                    this.divDetail.form.divReriod.form.divCal.set_visible(true);
                }
            }
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
            //공통 행추가에서 호출할 디폴트값 세팅
            //if (take.nvl(sGrdId, "")=="") sGrdId = "LeaveList";
            if(this.dsVacaList.rowcount <= 0) {
                take.alert(this, "Info", "휴가신청이 없습니다.");
                return;
            }

            var sApproval = this.dsVacaList.getColumn(this.dsVacaList.rowposition, "APP_TYPE");

            if(take.nvl(sApproval, "") == "") {
                if (take.confirm(this, "question", "신청중인 기안서를 삭제하시겠습니까?")){
                    this.fnDelete('new');
                }
            } else if(sApproval == "01"){
                if (take.confirm(this, "question", "선택한 신청건을 삭제하시겠습니까?")){
                    this.fnDelete('LeaveList');
                }
            } else {
                // 승인(02) , 취소(03)
                alert("이미 결재가 완료된 건입니다.\n삭제가 불가합니다.");
            }
        }

        this.fnPrint = function()
        {
        	var agrKey = {
        					sPdfType:"thr/HR010"
        					, sNamespace:"HumanResourceManagement.vacationInfoDetailRp"
        				};
        	take.openPopup(this, "comPrintPop", "frm::com/comPrintPop.xfdl", agrKey, "",
        		function(sId, sRtn){
        		},
        	false);
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 리스트그리드 클릭-> 데이터셋 로우 변경 이벤트.(dsVacaList_onrowposchanged)
        this.dsVacaList_onrowposchanged = function(obj,e)
        {
            var nRowType = obj.getRowType(e.oldrow);

        	if (nRowType == 2 || nRowType == 4)
        	{
        		if (e.oldrow != e.newrow)
        		{
        			var bRowChange = take.confirm(this, "question", "작성중인 데이터는 유지되지 않습니다.");
        			if (!bRowChange){
                        //trace("취소");
                        obj.set_rowposition(e.oldrow);  //신규 로우 유지
        				return false;
        			}else {
                        //trace("확인");
                        if (nRowType==2) obj.deleteRow(e.oldrow);
        				return true;
        			}
        		}
        	}
        };

        //휴가유형 콤보 변경 이벤트
        this.div_detail_cboReason_onitemchanged = function(obj,e)
        {
            var objDivReriod = this.divDetail.form.divReriod.form;

            if (obj.value == "02") { //반차.
                objDivReriod.divCal.set_visible(false);
                objDivReriod.divCbo.set_visible(true);
                objDivReriod.divCbo.form.cboTime.set_index(1);
            } else {
                objDivReriod.divCbo.set_visible(false);
                objDivReriod.divCal.set_visible(true);
            }
        };

        // 결재자 선택 버튼
        this.btnApprover_onclick = function(obj,e)
        {
            take.openPopup(this, "comUserPop", "frm::com/comUserPop.xfdl",  {sTitle:"승인자 검색"}, "showtitlebar=true", "", false);
        };

        // 휴가목록 그리드 선택 이벤트
        this.div_detail_grdLeaveList_onselectchanged = function(obj,e)
        {
            var nRow = e.row;
            var nRowType = this.dsVacaList.getRowType(nRow);
            var objDsV = this.dsVacaList;

            if (e.oldrow != nRow) {
                if (nRowType == 1) {
                    //if (objDsV.getColumn(nRow, "APP_TYPE") == '01') {
                    //	this.fnReadOnly("N");
                    //} else {
                    	this.fnReadOnly("Y");
                    //}

                    this.dsSearch.setColumn(0, "VACATION_SEQ", objDsV.getColumn(nRow, "VACATION_SEQ"));
                    this.fnSearch("vacaDetail");
                } else {
                    //trace("신규");
                    this.fnReadOnly("N");
                }
            }
        };

        //캘린더 변경시 추가변경
        this.calDate_onchanged = function(obj,e)
        {
            var sCalId = obj.name.substr(7);
            var objDivPeriod = this.divDetail.form.divReriod.form;
            var sDateFrom   = take.nvl(objDivPeriod.calDateFrom.value, "");
            var sDateTo     = take.nvl(objDivPeriod.divCal.form.calDateTo.value, "");

            if(sCalId == "From"){
                if(sDateFrom > sDateTo){
                    objDivPeriod.divCal.form.calDateTo.set_value(sDateFrom);
                }
            } else {
                if(sDateTo < sDateFrom){
                    objDivPeriod.calDateFrom.set_value(sDateTo);
                }
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
            this.fv_sUserCd = this.fv_objGdsUserInfo.getColumn(0, "USER_CD");
        	//년도 셋팅
            this.fnYear();
            // 코드값 셋팅
            this.fnCommonCode();
        }

        /**
         * fnYear : 해당년도 전후 5년
         * @param  {String} N/A
         * @example this.fnYear();
         */
        this.fnYear = function()
        {
            var nAddRow, nThisRow;
            var objDsYear = this.dsYear;
            var nThisYear = Number(take.getTodayTime().year);

            //전 5년
            for(var i=5; i>=1; i--) {
                nAddRow = this.dsYear.addRow();
                objDsYear.setColumn(nAddRow, "CODE", (nThisYear-i));
                objDsYear.setColumn(nAddRow, "NAME", (nThisYear-i));
            }
            //현재
            nThisRow = this.dsYear.addRow();
            objDsYear.setColumn(nThisRow, "CODE", nThisYear);
            objDsYear.setColumn(nThisRow, "NAME", nThisYear);
            //현재 후 5년
            for(var i=1; i<=5; i++) {
                nAddRow = this.dsYear.addRow();
                objDsYear.setColumn(nAddRow, "CODE", (nThisYear+i));
                objDsYear.setColumn(nAddRow, "NAME", (nThisYear+i));
            }

            this.divSearch.form.cboYear.set_index(nThisRow);
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

                this.fnSearch("remainList");
            });
        };

        /**
         * fnReadOnly : 코드값 tran 함수
         * @param  {String} sParam N/A
         * @example this.fnReadOnly();
         */
        this.fnReadOnly = function(sFlag)
        {
            var objDivDetail = this.divDetail.form;
            var objDivReriod = objDivDetail.divReriod.form;

            if (sFlag == "N") {
            	objDivDetail.cboReason.set_readonly(false);
                objDivReriod.calDateFrom.set_readonly(false);
                objDivReriod.divCal.form.calDateTo.set_readonly(false);
                objDivReriod.divCbo.form.cboTime.set_readonly(false);
                //objDivDetail.edtApprover.set_readonly(false);
                objDivDetail.txtMemo.set_readonly(false);
                objDivDetail.btnApprover.set_enable(true);
            } else {
            	//Y
                objDivDetail.cboReason.set_readonly(true);
                objDivReriod.calDateFrom.set_readonly(true);
                objDivReriod.divCal.form.calDateTo.set_readonly(true);
                objDivReriod.divCbo.form.cboTime.set_readonly(true);
                //objDivDetail.edtApprover.set_readonly(true);
                objDivDetail.txtMemo.set_readonly(true);
                objDivDetail.btnApprover.set_enable(false);
            }
        }

        /**
         * fnPeriodVisi : 휴가유형 -> 반차
         * @param  {String} sParam N/A
         * @example this.fnPeriodVisi();
         */
        this.fnPeriodVisi = function()
        {
            var objDivReriod = this.divDetail.form.divReriod.form;

            // this.dsVacaDetail.getColumn(0,"VACATION_TYPE") 휴가유형(반차)일때 시간 콤보 보이게
            if (this.dsVacaDetail.getColumn(0,"VACATION_TYPE") == "02") {
                objDivReriod.divCal.set_visible(false);
                objDivReriod.divCbo.set_visible(true);
            } else {
                objDivReriod.divCbo.set_visible(false);
                objDivReriod.divCal.set_visible(true);
            }
        }

        /**
         * fnDelete : 삭제
         * @param  {String} sParam N/A
         * @example this.fnDelete('grdLeaveList');
         */
        this.fnDelete = function(sGubun)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGubun, "")=="") sGubun = "grdLeaveList";
            var objDsV = this.dsVacaList;

            if(sGubun == "new") {
                objDsV.deleteRow(objDsV.rowposition);
            } else {
                objDsV.set_enableevent(false);
                objDsV.set_updatecontrol(false);
                objDsV.setRowType(objDsV.rowposition, "D");
                objDsV.set_updatecontrol(true);
                objDsV.set_enableevent(true);

                //take.tranSave(this, "Delete", "HumanResourceManagement.vacationInfo", "dsVacaList", "", "", "fnCallback");
        		take.transaction(this, "Delete", "SVC_LOC::hr/vacationInfoDelete.do", "dsVacaList=dsVacaList:U", "", "", "fnCallback");
            }
        }

        /**
         * fnTran : 트랜잭션(저장/수정)
         * @param  : svcId   - 서비스 아이디(저장:Save / 수정 : Modify)
         * @example this.fnTran(svcId);
         */
        this.fnTran = function(svcId)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(svcId, "")=="") svcId = "Save";

            var sParam = "svcId='" + svcId + "'";
            take.transaction(this, svcId, "SVC_LOC::hr/vacationInfoSave.do", "dsVacaDetail=dsVacaDetail:U", "", sParam, "fnCallback");
        }

        /**
         * fnDetailSet : 저장 로직
         * @param  {String} sParam N/A
         * @example this.fnDetailSet();
         */
        this.fnDetailSet = function()
        {
            var sVal        = take.nvl(this.divDetail.form.cboReason.value, "");

            if (sVal == "02") {
                this.dsVacaDetail.setColumn(0, "VACATION_END_DT", this.divDetail.form.divReriod.form.calDateFrom.value);
            } else {
                this.dsVacaDetail.setColumn(0, "VACATION_DATE_TYPE", "01");
            }
        }

        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var objDivDetail = this.divDetail.form;
            var objDivPeriod = this.divDetail.form.divReriod.form;
            var sReasonVal  = take.nvl(objDivDetail.cboReason.value, "");
            var sDateFrom   = take.nvl(objDivPeriod.calDateFrom.value, "");
            var sDateTo     = take.nvl(objDivPeriod.divCal.form.calDateTo.value, "");
            var sTime       = take.nvl(objDivPeriod.divCbo.form.cboTime.value, "");
            var sApprover   = take.nvl(objDivDetail.edtApprover.text, "");
            var nDay        = take.getDateTerm(sDateFrom, sDateTo);

            //takeval.add(this, "Save", this.divDetail.form.edtDirector,  "담당자"	 ,  "value", true, "string", [0,20], "");
            //if(!takeval.check(this, "Save")) return;

            if(sReasonVal == ""){
                alert("휴가유형을 선택해주세요.");
                return false;
            }

            if (sReasonVal != "02") { //휴가유형 반차 아닐 때
                if(sDateFrom == ""){
                    alert("시작 일자를 선택해주세요.");
                    return false;
                }
                if(sDateTo == ""){
                    alert("마지막 일자를 선택해주세요.");
                    return false;
                }
                if(sDateFrom > sDateTo){
                    alert("시작일과 마지막일을 확인해주세요.\n(시작일이 마지막일보다 큽니다.)");
                    return false;
                }
            } else {    //휴가유형 반차일 때
                if(sTime == ""){
                    alert("오전/오후 선택해주세요.");
                    return false;
                }
            }

            if(sApprover == ""){
                alert("결재자(승인자)를 선택해주세요.");
                return false;
            }

        //     if(nDay > this.dsRemaining.getColumn(0, "REM_CNT")){
        //         alert("휴가신청이 불가능합니다.\n(휴가신청 가능한 잔여일수 확인.)");
        //         return false;
        //     }

            return true;
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
                case "remainList" :  // 휴가 잔여일수 조회 콜백
                    //use_cnt, rem_cnt
        //             var objDs = this.dsRemaining;
        //             var sUseCnt = take.nvl(objDs.getColumn(0,"USE_CNT"), "");
        //
        //             if (sUseCnt!="") {
        //                 var nIndex = sUseCnt.indexOf(".0");
        //
        //                 if(nIndex == 1) {
        //                     objDs.setColumn(0,"USE_CNT", parseInt(sUseCnt));
        //                     objDs.setColumn(0,"REM_CNT", parseInt(objDs.getColumn(0,"REM_CNT")));
        //                 }
        //             }

                    this.fnSearch("vacaList");
                    break;

                case "vacaList" : //휴가 리스트 조회 콜백
                    this.divDetail.form.staLeave.set_text("휴가목록 (" + this.dsVacaList.rowcount + "건)");
                    break;

                case "vacaDetail" : //디테일 조회 콜백
                    this.fnPeriodVisi();   // 휴가유형에 따른 휴가기간 컴포넌트 셋팅.
                    break;

                case "Save" :  //저장 콜백trace("start");
                    alert("휴가신청이 정상 처리 되었습니다.");

                    this.fnSearch("vacaList");
                    break;

                case "Modify" :  //저장 콜백trace("start");
                    alert("선택한 신청건이 정상 수정 되었습니다.");

                    this.fnSearch("vacaList");
                    //this.fnSearch("vacaDetail");
                    break;

                case "Delete" :  //저장 콜백
                    alert("삭제가 정상 처리 되었습니다.");

                    this.fnSearch("vacaList");
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
            this.divDetail.form.edtAppCd.set_value(arrRtn[0]);
            this.divDetail.form.edtApprover.set_value(arrRtn[1]);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divDetail.form.grdLeaveList.addEventHandler("onselectchanged",this.div_detail_grdLeaveList_onselectchanged,this);
            this.divDetail.form.cboReason.addEventHandler("onitemchanged",this.div_detail_cboReason_onitemchanged,this);
            this.divDetail.form.btnApprover.addEventHandler("onclick",this.btnApprover_onclick,this);
            this.divDetail.form.divReriod.form.calDateFrom.addEventHandler("onchanged",this.calDate_onchanged,this);
            this.divDetail.form.divReriod.form.divCal.form.calDateTo.addEventHandler("onchanged",this.calDate_onchanged,this);
            this.dsVacaList.addEventHandler("onrowposchanged",this.dsVacaList_onrowposchanged,this);
        };
        this.loadIncludeScript("HR010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
