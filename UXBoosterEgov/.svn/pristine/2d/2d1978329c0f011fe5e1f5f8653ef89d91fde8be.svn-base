(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SM010");
            this.set_titletext("설문조사목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurveyList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANONNY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMarster", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ENC_USER_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("Static08",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","staTitleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserT","edtTitle:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUser","staUserT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRegDtT","edtUser:50","10","80","21",null,null,"80",null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("설문기간");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staStatusT","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calRegForm","staRegDtT:10","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static14","calRegForm:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calRegTo","Static14:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboStatus","staStatusT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsCboStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staSurveyListT","0","0","740","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("설문조사 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdSurvey","-9","staSurveyListT:0",null,null,"9","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsSurveyList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_timeLine");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"447\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"설문기간\"/><Cell col=\"4\" text=\"상태\"/><Cell col=\"5\" text=\"참여자\"/><Cell col=\"6\" text=\"결과보기\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TITLE\" displaytype=\"normal\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:REG_NM\"/><Cell col=\"3\" text=\"expr:SURVEY_START_DT + &apos; ~ &apos; + SURVEY_END_DT\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:STATUS_NM\" textAlign=\"center\"/><Cell col=\"5\" textAlign=\"center\" text=\"expr:RESULT_CNT + &apos; / &apos; + CNT\" displaytype=\"normal\" textDecoration=\"underline\" cursor=\"pointer\"/><Cell col=\"6\" textAlign=\"center\" text=\"expr:(SURVEY_STATUS == &apos;03&apos; &amp;&amp; OPEN_YN == &apos;Y&apos;) || (SURVEY_STATUS == &apos;03&apos; &amp;&amp; OPEN_YN == &apos;N&apos; &amp;&amp; (REG_CD == &apos;U000000001&apos; || REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(&apos;USER_CD&apos;))) ? &quot;결과보기&quot; : &quot;&quot;\" displaytype=\"expr:(SURVEY_STATUS == &apos;03&apos; &amp;&amp; OPEN_YN == &apos;Y&apos;) || (SURVEY_STATUS == &apos;03&apos; &amp;&amp; OPEN_YN == &apos;N&apos; &amp;&amp; (REG_CD == &apos;U000000001&apos; || REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(&apos;USER_CD&apos;))) ? &apos;buttoncontrol&apos; : &apos;none&apos;\" edittype=\"expr:(SURVEY_STATUS == &apos;03&apos; &amp;&amp; OPEN_YN == &apos;Y&apos;) || (SURVEY_STATUS == &apos;03&apos; &amp;&amp; OPEN_YN == &apos;N&apos; &amp;&amp; (REG_CD == &apos;U000000001&apos; || REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(&apos;USER_CD&apos;))) ? &apos;button&apos; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new ListView("lstTimeLine","0",null,null,"50","20","-61",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsTimelineList");
            obj.set_cssclass("lst_WF_timeLine");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"100\"><Cell id=\"cellImg\" left=\"10\" top=\"10\" width=\"100\" height=\"80\"/><Cell id=\"cellTitle\" left=\"120\" top=\"13\" width=\"870\" height=\"40\" text=\"bind:TIMELINE_TITLE\" cssclass=\"cellTitle01\"/><Cell id=\"cellUserNm\" left=\"120\" top=\"55\" width=\"200\" height=\"30\" text=\"bind:REG_NM\"/><Cell id=\"cellDate\" left=\"320\" top=\"55\" width=\"170\" height=\"30\" text=\"bind:REG_DT\"/><Cell id=\"Cell04\" left=\"495\" top=\"58\" width=\"50\" height=\"24\" text=\"조회수\" cssclass=\"cellBox01\"/><Cell id=\"Cell05\" left=\"550\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:COLUMN3\" displaytype=\"number\"/><Cell id=\"cellAttach\" left=\"615\" top=\"58\" width=\"50\" height=\"24\" text=\"첨부\" cssclass=\"cellBox01\"/><Cell id=\"cellAttachNum\" left=\"670\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:COLUMN4\" displaytype=\"number\"/><Cell id=\"cellComment\" left=\"735\" top=\"58\" width=\"60\" height=\"24\" text=\"타임라인\" cssclass=\"cellBox01\"/><Cell id=\"cellCommentNum\" left=\"800\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:TIMELINE_CNT\" displaytype=\"number\"/><Cell id=\"cellClass\" left=\"875\" top=\"58\" width=\"60\" height=\"24\" text=\"bind:GRADE_NM\" cssclass=\"cellGrade01\"/><Cell id=\"cellStatus\" left=\"940\" top=\"58\" width=\"60\" height=\"24\" text=\"bind:STATUS_NM\" cssclass=\"cellStatus01\"/></Band><Band id=\"detail\" width=\"100%\" height=\"5\"/></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtTitle","value","dsSearch","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtUser","value","dsSearch","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboStatus","value","dsSearch","STATUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calRegForm","value","dsSearch","REG_DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calRegTo","value","dsSearch","REG_DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SM010.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    sm > SM010
        *  @FileName    SM010.xfdl
        *  @Creator     김진표
        *  @CreateDate  2021.04.10
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2021.04.10      김진표             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_dsUesrInfo = nexacro.getApplication().gdsUserInfo;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.SM010_onload = function(obj, e)
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
            if (take.nvl(sTranId, "")=="") sTranId = "SurveySearch";

        	var sCalFrom = this.divSearch.form.calRegForm.value;
        	var sCalTo	 = this.divSearch.form.calRegTo.value;
        	if( !take.isEmpty(sCalFrom) && !take.isEmpty(sCalTo) ){
        		var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        		if( !bFromTo ){
        			take.alert(this, "", "작성일시 기간이 잘못되었습니다.");
        			return;
        		}
        	}

        	this.dsSurveyList.clearData();

        	var sProjectCd = nexacro.getApplication().av_sProjectCd;
        	var sTitle = this.divSearch.form.edtTitle.value;
        	var sUser = this.divSearch.form.edtUser.value;

        	this.dsSearch.setColumn(0, "TITLE", take.nvl(sTitle, ""));
        	this.dsSearch.setColumn(0, "REG_NM", take.nvl(sUser, ""));
        	this.dsSearch.setColumn(0, "REG_DT_FROM", take.nvl(sCalFrom, ""));
        	this.dsSearch.setColumn(0, "REG_DT_TO"  , take.nvl(sCalTo, ""));
        	this.dsSearch.setColumn(0, "PROJECT_CD"  , take.nvl(sProjectCd, ""));

        	var sUserCd = this.fv_dsUesrInfo.getColumn(0, "USER_CD");
        	var sEncUserCd = hex_sha512(sUserCd);

        	this.dsSearch.setColumn(0, "ENC_USER_CD", sEncUserCd);

        	take.tranSelect
        	(
        		this,
        		"SurveySearch",
        		"SurveyManagementMapper.surveyInfoList",
        		"dsSearch",
        		"dsSurveyList",
        		"",
        		"fnCallback"
        	)
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdSurvey";

        	var sParam = "";
        	var sUrl = "frm::mod/SM020.xfdl";
        	take.mdiOpenMenu(this, sUrl, sParam, "", true, "설문조사등록");

        	var objProg = take.getProgInfo(this);
        	take.mdiClose(this, objProg.ProgId);
        }

        /**

         * fnDelRow : 행 삭제 함수 (필수)--> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @example this.fnDelRow(sGrdId);
         */
        this.fnDelRow = function(sGrdId)
        {
        	var nRow = this.dsSurveyList.rowposition;
        	var sProjectCd = this.dsSurveyList.getColumn(nRow, "PROJECT_CD");
        	var sSurveySeq = this.dsSurveyList.getColumn(nRow, "SURVEY_SEQ");
        	take.transaction
        	(
        		this,
        		"SurveyDelete",
        		"SVC_LOC::sm/surveyDelete.do",
        		"",
        		"",
        		"sProjectCd='"+ sProjectCd + "' sSurveySeq='"+ sSurveySeq + "'",
        		"fnCallback"
        	);
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // divDetail_grdSurvey_oncelldblclick : 데이터라인 더블클릭 상세 페이지이동
        this.divDetail_grdSurvey_oncelldblclick = function(obj,e)
        {
        	var nSelRow = this.dsSurveyList.rowposition;
        	var sSelSeq = this.dsSurveyList.getColumn( nSelRow, "SURVEY_SEQ" );
        	var sSurveyStatus = this.dsSurveyList.getColumn( nSelRow, "SURVEY_STATUS" );
        	var sRegCd = this.dsSurveyList.getColumn( nSelRow, "REG_CD" );
        	var sIsTargetYn = this.dsSurveyList.getColumn( nSelRow, "TARGET_YN" );
        	var sIsResultYn = this.dsSurveyList.getColumn( nSelRow, "RESULT_YN" );
        	var sAnonnyYn = this.dsSurveyList.getColumn( nSelRow, "ANONNY_YN" );

        	var sTotalCnt = this.dsSurveyList.getColumn( nSelRow, "CNT" );
        	var sResultCnt = this.dsSurveyList.getColumn( nSelRow, "RESULT_CNT" );

        	var sParam = {
        					sSurveySeq:sSelSeq
        					, sRegCd:sRegCd
        					, sIsTargetYn:sIsTargetYn
        					, sIsResultYn:sIsResultYn
        					, sTotalCnt:sTotalCnt
        					, sResultCnt:sResultCnt
        					, sAnonnyYn:sAnonnyYn
        				};
        	var sUrl = "frm::mod/SM020.xfdl";
        	var sMenuNm = "설문조사등록";

        	if(e.cell != 6 && e.cell != 5){
        		if( "01" == sSurveyStatus)
        		{
        			take.mdiOpenMenu(this, sUrl, sParam, "", true, sMenuNm);

        			var objProg = take.getProgInfo(this);
        			take.mdiClose(this, objProg.ProgId);
        		}
        		else
        		{
        			var sFormId = ("Y" == sIsResultYn) ? "SM030P01" : "SM030";
        			sUrl = ("Y" == sIsResultYn) ? "frm::mod/SM030P01.xfdl" : "frm::mod/SM030.xfdl";
        			take.openPopup(this, sFormId, sUrl, sParam, "",
        				function(){
        					this.fnSearch("SurveySearch");
        				},
        			false);
        		}
        	}
        };

        // divDetail_grdSurvey_oncellclick : 결과보기 클릭시 상세결과 팝업 오픈
        this.divDetail_grdSurvey_oncellclick = function(obj,e)
        {
        	var objDsSurvey   = this.dsSurveyList;
        	var nSelRow       = objDsSurvey.rowposition;
        	var sSelSeq       = objDsSurvey.getColumn( nSelRow, "SURVEY_SEQ" );
        	var sRegCd 		  = objDsSurvey.getColumn( nSelRow, "REG_CD" );
        	var sAnonnyYn 	  = objDsSurvey.getColumn( nSelRow, "ANONNY_YN" );
        	var sParam 		  = {sSurveySeq:sSelSeq, sRegCd:sRegCd, sAnonnyYn:sAnonnyYn};

        	if(e.cell == 6 && e.fromobject =="[object ButtonControl]") {

        		take.openPopup(this, "SM030P01", "frm::mod/SM030P01.xfdl", sParam, "",
        			function(){

        			},
        		false);
        	}
        	else if(e.cell == 5) {
        		if( "Y" == sAnonnyYn )
        		{
        			take.alert(this, "Info", "익명 설문건입니다.");
        			return false;
        		}
        		take.openPopup(this, "SM020P02", "frm::mod/SM020P02.xfdl", sParam, "",
        			function(){

        			},
        		false);
        	}
        };

        // divSearch_Edit00_onkeyup : Edit 컴포넌트 Enter 값 처리
        this.divSearch_Edit00_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	// 검색조건 작성일시 셋팅 [오늘 날짜 기본 셋팅]
        	var objDate = take.getTodayTime();
        	var nToday  = objDate.date;

          	//this.divSearch.form.calRegForm.set_value(nToday);
          	//this.divSearch.form.calRegTo.set_value(nToday);

        	// 공통 코드조회 함수 호출
            this.fnCommonCode();
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var arrGroupCodes = ["00041"];
        	var arrOutDs      = ["dsCboStatus"];
        	var arrHeaderType = ["ALL"];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        	function(sId, nErrCd, sErrMsg)
        	{
        		if (this.dsCboStatus.rowcount > 0){
        			this.divSearch.form.cboStatus.set_index(0);
        		}
        		this.fnSearch("SurveySearch");
        	});
        };

        /**
         * fnSetTitle : 신규작성 new 표시
         * @example this.fnSetTitle(nRow, sTitle);
         */
        this.fnSetTitle = function(nRow, sTitle)
        {
        	var sImgUrl = "";
        	var sRegDt = take.nvl(this.dsSurveyList.getColumn(nRow, "REG_DT"), "");

        	if( "" != sRegDt )
        	{
        		sRegDt = sRegDt.replace(/-/gi, "");
        		sRegDt = sRegDt.substr(0, 8);
        		sRegDt = take.parseDate(sRegDt, "yyyymmdd");
        		var sToday = take.parseDate(take.getTodayTime().date, "yyyymmdd");
        		var sTerm = parseInt(take.getDateTerm(sRegDt, sToday));

        		if( 5 >= sTerm )
        		{
        			//trace("sTerm->"+sTerm)
        			sImgUrl = "theme://images/img_icon_new.png";
        		}
        	}
        	return sImgUrl;
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
                case "SurveyDelete" : 	// 설문조사 삭제 콜백
        			this.fnSearch("SurveySearch");

                    break;
                default :
                    break;
            }
        }

        this.fnTest = function(){
        	return "true";
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SM010_onload,this);
            this.divSearch.form.edtTitle.addEventHandler("onkeyup",this.divSearch_Edit00_onkeyup,this);
            this.divSearch.form.edtUser.addEventHandler("onkeyup",this.divSearch_Edit00_onkeyup,this);
            this.divDetail.form.grdSurvey.addEventHandler("oncelldblclick",this.divDetail_grdSurvey_oncelldblclick,this);
            this.divDetail.form.grdSurvey.addEventHandler("oncellclick",this.divDetail_grdSurvey_oncellclick,this);
            this.lstTimeLine.addEventHandler("oncellclick",this.divDetail_lstTimeLine_oncellclick,this);
        };
        this.loadIncludeScript("SM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
