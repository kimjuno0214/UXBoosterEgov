(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ST010");
            this.set_titletext("통계_시스템사용이력_시스템사용이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHistoryTypeCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistoryLog", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_DEVICE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProject", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_TIME_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_TIME_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HISTORY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"72","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectInfoSearch","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","305","0","50",null,null,"-1",null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLoginInfoSearch","Static07_00_01:00","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("접속기기/환경");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","640","0","50",null,null,"-1",null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserInfoSearch","Static07_00_01_00:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch00","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("이력일시");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calLoginDateFromSearch","staMlGroupSearch00:3","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLoginTimeFromSearch","calLoginDateFromSearch:2","10","30","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_maxlength("5");
            obj.set_inputtype("number");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch01","edtLoginTimeFromSearch:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calLoginDateToSearch","staMlGroupSearch01:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("cal_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLoginTimeToSearch","calLoginDateToSearch:2","10","30","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_maxlength("5");
            obj.set_inputtype("number");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"-1",null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgramInfoSearch","Static07_00:0","39","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgramInfoSearch","staProgramInfoSearch:10","39","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staHistoryTypeSearch","355","39","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("이력유형");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboHistoryTypeSearch","staHistoryTypeSearch:10","39","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsHistoryTypeCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserInfoSearch","staUserInfoSearch:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProject","staProjectInfoSearch:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsProject");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtLoginInfoSearch","staLoginInfoSearch:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","60","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","20","31","285","8",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","60","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","355","31","285","8",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("8");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00","690","31","285","8",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("8");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01_00","690","60","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00_00","975","0","50",null,null,"-1",null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00_00","1025","31","285","8",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("8");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","82",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","Static24:0",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","280","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("시스템사용이력");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdHistoryLog","0","Static01:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsHistoryLog");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"이력일자\"/><Cell col=\"2\" text=\"이력시간\"/><Cell col=\"3\" text=\"프로젝트명\"/><Cell col=\"4\" text=\"접속기기\"/><Cell col=\"5\" text=\"접속환경\"/><Cell col=\"6\" text=\"메뉴명\"/><Cell col=\"7\" text=\"화면ID\"/><Cell col=\"8\" text=\"이력유형\"/><Cell col=\"9\" text=\"사용자ID\"/><Cell col=\"10\" text=\"사용자명\"/><Cell col=\"11\" text=\"상세내용\"/><Cell col=\"12\" text=\"접속IP\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:HISTORY_DATE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:HISTORY_TIME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PROJECT_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:LOGIN_DEVICE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:LOGIN_BROWSER\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:MENU_NM\"/><Cell col=\"7\" text=\"bind:FORM_ID\"/><Cell col=\"8\" text=\"bind:HISTORY_TYPE_NM\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:USER_ID\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:USER_NM\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:HISTORY_DESC\"/><Cell col=\"12\" text=\"bind:LOGIN_IP\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
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
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboProject","value","dsSearch","PROJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtLoginInfoSearch","value","dsSearch","LOGIN_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtUserInfoSearch","value","dsSearch","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtProgramInfoSearch","value","dsSearch","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboHistoryTypeSearch","value","dsSearch","HISTORY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calLoginDateFromSearch","value","dsSearch","HISTORY_DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtLoginTimeFromSearch","value","dsSearch","HISTORY_TIME_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.calLoginDateToSearch","value","dsSearch","HISTORY_DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtLoginTimeToSearch","value","dsSearch","HISTORY_TIME_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ST010.xfdl", function() {
        /**
        *  시스템사용이력
        *
        *  @MenuPath    통계 > 시스템사용이력 > 시스템사용이력
        *  @FileName    ST010.xfdl
        *  @Creator     천우성
        *  @CreateDate  2019.08.18
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.18      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.formid_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                var sOutDs 		= ["dsProject"];
        		var sNameSpaces = ["ProjectManagement.projectInfoCode"];
        		var sParam = "";

        		take.tranSelect(this, "ProjectSearch", sNameSpaces, "", sOutDs, sParam,
        			function(sId, nErrCd, sErrMsg){
        				//callback
        				this.divSearch.form.cboProject.set_value(this.fv_sProjectCd);

        				//이력 유형 콤보 세팅
        				var arrGroupCodes = ["00019"];
        				var arrOutDs 	  = ["dsHistoryTypeCode"];
        				var arrHeaderType = [""];

        				take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        					function(){
        						this.dsHistoryTypeCode.insertRow(0);
        						this.dsHistoryTypeCode.setColumn(0, "CODE", "");
        						this.dsHistoryTypeCode.setColumn(0, "NAME", "전체");
        						this.divSearch.form.cboHistoryTypeSearch.set_index(0);
        					}
        				);

        				// PM00000001 관리자 아닐시 콤보 변경 X 처리
        				if(this.fv_sProjectCd != "PM00000001") {
        					this.divSearch.form.cboProject.set_readonly();
        				}

        				var objDivSearch = this.divSearch.form;
        				var objDate = take.getTodayTime();
        				var nToday  = objDate.date;

        				//var nDay = new Date("2020-04-16 14:38");
        				this.divSearch.form.calLoginDateFromSearch.set_value(nToday);
        				//this.divSearch.form.edtLoginTimeFromSearch.set_value("00:00");
        				this.divSearch.form.calLoginDateToSearch.set_value(nToday);
        				//this.divSearch.form.edtLoginTimeToSearch.set_value("23:59");

        				this.fnSearch();
        			}
        		);
           }
        };

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "List";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "List" :
        			//from
        			var sDateFr = this.divSearch.form.calLoginDateFromSearch.text;
        			sDateFr = sDateFr.substring(0, 10);
        			this.dsSearch.setColumn(0, "HISTORY_DT_FROM", sDateFr);
        			sTimeFr = take.nvl(this.divSearch.form.edtLoginTimeFromSearch.text, "0000");

        			sTimeFr = sTimeFr.replace(":", "");

        			if(sTimeFr.length==3){

        				sTimeFr = "0" + sTimeFr;

        			}
        			var sHour 	= sTimeFr.substring(0,2).lpad(2,"0");
        			var sMin 	= sTimeFr.substring(2,4).rpad(2,"0");

        			sTimeFr = sHour + ":" + sMin  + ":00";

        			var sDayFr = sDateFr + " " + sTimeFr;

        			this.dsSearch.setColumn(0, "DATE_FROM", sDayFr);

        			this.divSearch.form.edtLoginTimeFromSearch.set_value(sTimeFr);
        			this.dsSearch.setColumn(0, "HISTORY_TIME_FROM", sTimeFr);

        			//to
        			var sDateTo = this.divSearch.form.calLoginDateToSearch.text;
        			sDateTo = sDateTo.substring(0, 10);
        			this.dsSearch.setColumn(0, "HISTORY_DT_TO", sDateTo);
        			sTimeTo = take.nvl(this.divSearch.form.edtLoginTimeToSearch.text, "2359");


        			sTimeTo = sTimeTo.replace(":", "");

        			if(sTimeTo.length==3){

        				sTimeTo = "0" + sTimeTo;

        			}

        			var sHour 	= sTimeTo.substring(0,2).lpad(2,"0");
        			var sMin 	= sTimeTo.substring(2,4).rpad(2,"0");

        			sTimeTo = sHour + ":" + sMin  + ":59";

        			var sDayTo = sDateTo + " " + sTimeTo;

        			this.dsSearch.setColumn(0, "DATE_TO", sDayTo);

        			this.divSearch.form.edtLoginTimeToSearch.set_value(sTimeTo);
        			this.dsSearch.setColumn(0, "HISTORY_TIME_TO", sTimeTo);

        			var sCalFrom = nexacro.replaceAll(sDateFr, "-", "");
        			var sCalTo	 = nexacro.replaceAll(sDateTo, "-", "");

        			if( !take.isEmpty(sCalFrom) && !take.isEmpty(sCalTo) ){
        				var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        				if( !bFromTo ){
        					take.alert(this, "", "이력일이 잘못되었습니다.");
        					return;
        				}
        			}

        			this.dsHistoryLog.clearData();

        			take.tranSelect(this, "List", "Statistics.historyLogList", "dsSearch", "dsHistoryLog", "", sCallBack);

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
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
                case "List" : //조회 콜백
                    //Script

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "List";

            this.fnTran(sTranId);
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

            this.fnTran(sTranId);
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formid_onload,this);
        };
        this.loadIncludeScript("ST010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
