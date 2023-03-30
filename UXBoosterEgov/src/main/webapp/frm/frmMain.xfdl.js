(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("메인 화면");
            this.set_background("#f2f7fa");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,969);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoticePop", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROVIDER\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"MSGTIME\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANONNY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurveyPop", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANONNY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0",null,null,"25","0","-25",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("frm::frmBottom.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","0","divTop:0","60",null,null,"0",null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnFold","divLeft:0","divTop:0","0",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_LF_contExpand");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divMdi","btnFold:10","divTop:0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","btnFold:10","divMdi:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_MF_bg");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pDivMsg",null,null,"300","180","0","0",null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMsg","0","0",null,null,"0","0",null,null,null,null,this.pDivMsg.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMsg");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_scrollbartype("none");
            obj.set_scrolltype("none");
            obj.set_cssclass("grd_MF_msg");
            obj.set_nodatatext("no data message.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"2\"/><Column size=\"40\"/><Column size=\"218\"/><Column size=\"35\"/><Column size=\"2\"/></Columns><Rows><Row size=\"5\"/><Row size=\"40\"/><Row size=\"74\"/><Row size=\"2\"/><Row size=\"2\"/></Rows><Band id=\"body\"><Cell colspan=\"5\" autosizerow=\"limitmax\" border=\"0px none,1px #158df2\" borderRadius=\"5px 5px 0px 0px\" background=\"#158df2\"/><Cell row=\"1\" rowspan=\"2\" background=\"#158df2\"/><Cell row=\"1\" col=\"1\" autosizerow=\"limitmin\" cssclass=\"expr:&apos;grd_WF_ico&apos; + TYPE\"/><Cell row=\"1\" col=\"2\" text=\"bind:PROVIDER\" autosizerow=\"limitmin\"/><Cell row=\"1\" col=\"3\" displaytype=\"buttoncontrol\" autosizerow=\"limitmin\" cssclass=\"grd_WF_close\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" background=\"#158df2\"/><Cell row=\"2\" col=\"1\" colspan=\"3\" text=\"bind:MSG\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell row=\"3\" colspan=\"5\" background=\"#158df2\" autosizerow=\"limitmax\"/><Cell row=\"4\" colspan=\"5\" autosizerow=\"limitmax\"/></Band></Format></Formats>");
            this.pDivMsg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLeft
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMdi
            obj = new Layout("default","",0,0,this.divMdi.form,function(p){});
            this.divMdi.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDivMsg.form
            obj = new Layout("default","",0,0,this.pDivMsg.form,function(p){});
            this.pDivMsg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,969,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::frmBottom.xfdl");
        };
        
        // User Script
        this.registerScript("frmMain.xfdl", function() {
        /**
        *  Main Frame
        *
        *  @MenuPath    Main Frame
        *  @FileName    frmMain.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.09.09
        *  @Version     1.0
        *  @Desction    메인 프레임
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        take.loadJs(this, "sha512", "./_extlib_/Extend/sha512.js");
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //Left
        this.fv_nFoldMin   = 60;     //Left 메뉴 접기/펴기 최소 사이즈
        this.fv_nFoldMax   = 250;    //Left 메뉴 접기/펴기 최대 사이즈

        //MDI
        this.fv_sTabCss        = "btn_nav_tab";     //Mdi Tab Css
        this.fv_sTabSelCss     = "btn_nav_tabSel";  //Mdi Tab Select Css
        this.fv_nTabWidth      = 160;               //Mdi Tab Width
        this.fv_nTabHeight     = 28;                //Mdi Tab Height
        this.fv_sTabWinCss     = "btn_nav_icon";    //Mdi Tab Window Icon Css
        this.fv_nTabWinHeight  = 28;                //Mdi Tab Window Icon Height
        this.fv_nTabWinWidth   = 30;                //Mdi Tab Window Icon Width
        this.fv_sTabExitCss    = "btn_nav_extra";   //Mdi Tab Exit Css
        this.fv_sTabExitSelCss = "btn_nav_extra02"; //Mdi Tab Exit Select Css
        this.fv_nTabExitHeight = 28;                //Mdi Tab Exit Height
        this.fv_nTabExitWidth  = 30;                //Mdi Tab Exit Width
        this.fv_nTabTopGap     = 7;                 //Mdi Tab Top
        this.fv_nTabLeftGap    = 1;                 //Mdi Tab Left Gap

        //Work
        this.fv_nWorkWidthMin = 1920;
        this.fv_nWorkHeightMin = 969;

        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = "M0028";
        this.fv_objTimer = null;
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.formid_onload = function(obj, e)
        {
            if (nexacro._Browser!="Runtime")
        	{
        		window.onbeforeunload=function(e)
        		{
        			e = e || window.event;
        			//메세지가 필요한 경우
        			var sMsg = 'Do you want to stop window unload?';

        			// For IE and Firefox prior to version 4
        			if (e) {
        				e.returnValue = sMsg;
        			} else {
        				//capture stack trace (NOTE: FF captures full stack, IE captures stack but doesn't include 'onbeforeunload' function in stack, CHROME doesn't show stack)
        				var oTrace = printStackTrace();
        				alert('window.onbeforeunload\nSTACKTRACE: ' + oTrace.join('\n;'));

        				// For Safari
        				return sMsg;
        			}
        		};
        	}

        	this.fnInitFrame();

            //this.setTimer(99999, 60000);
        };

        this.frmMain_ontimer = function(obj,e)
        {
        	if (e.timerid==99999)
            {
                this.fnSearch("SearchNoticeTimer");
                this.killTimer(99999);
            }
        };

        /*********************************************************
         * 2 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //메세지 데이터셋 변경 이벤트
        this.dsMsg_onrowposchanged = function(obj,e)
        {
            //this.fnOpenMsgPop();
        };

        //메세지 팝업 그리드 셀 클릭 이벤트
        this.pDivMsg_grdMsg_oncellclick = function(obj,e)
        {
            var objDs, objDsNoti;
            var sBrdSeq, sBrdAttach;
            objDs = obj.getBindDataset();

            //메세지 닫기 버튼
        	if (e.cell==4)
            {
                objDs.deleteRow(obj.getDatasetRow(e.row));
                this.pDivMsg.closePopup();

                if (objDs.rowcount>0)
                {
                    nexacro._OnceCallbackTimer.callonce
                    (
                        this,
                        function ()
                        {
                            this.fnOpenMsgPop();
                        },
                        1
                    );
                }

            } else if (e.cell==6) { //공지사항 조회
                nRow = obj.getDatasetRow(e.row);
                if (objDs.getColumn(nRow,"TYPE")=="noti")
                {
                    objDsNoti = this.dsNotice;
                    sBrdSeq = objDs.getColumn(nRow, "BOARD_SEQ" );
                    nFRow = objDsNoti.findRow("BOARD_SEQ", sBrdSeq);
                    sBrdAttach = "";

                    if (nFRow>=0)
                    {
                        sBrdAttach = take.nvl(objDsNoti.getColumn(nFRow, "BOARD_ATTACH" ),"");
                    }

                    var arrParam = {
        					sBoardSeq 	 : sBrdSeq
        				  , sBoardAttach : sBrdAttach
        				  , sProjectCd	 : nexacro.getApplication().av_sProjectCd
        				  , sMenuCd		 : this.fv_sMenuCd //프로젝트에 사용하는 공지 메뉴 아이디가 필요
        				  };

                    take.openPopup(this, "CM010P02", "frm::mod/CM010P02.xfdl", arrParam, "resizable=true", "");
                }
            }
        };

        //btnFold_onclick : Left 메뉴 접고/펴기 버튼 클릭
        this.btnFold_onclick = function(obj,e)
        {
            //Left 메뉴 접고/펴기 기능
            obj.fnShowHide();
        };

        //공지사항 더보기 버튼 클릭 이벤트
        this.btnNoticeMore_onclick = function(obj,e)
        {
        	//this.getOwnerFrame().form.divLeft.form.fnProgMenu(this.fv_objNotiProg);
        };

        //fnBtnTab_onclick : ~ MDI Tab 버튼 클릭
        this.fnBtnTab_onclick = function(obj,e)
        {
            //var sCss = "btn_MDI";
            var objExit, objWin, objWork;

            this.fnDisableMenu();
            this.divMain.set_visible(false);
        	this.divMain.set_enable(false);

            objExit = obj.objWorkDiv.objTabExit;
            objWin = obj.objWorkDiv.objTabWin;
            objWork = obj.objWorkDiv;

            //obj.set_cssclass(sCss); //btn_MDI_Tab
            obj.set_cssclass(this.fv_sTabSelCss);
            objExit.set_cssclass(this.fv_sTabExitSelCss);
            objWork.set_enable(true);
            objWork.set_visible(true);

            obj.bringToFront();
            objWin.bringToFront();
            objExit.bringToFront();

            this.divMdi.form.divTab.objActiveWork = objWork;
            obj.setFocus();
            this.divMain.set_enable(false);
            this.divMain.set_visible(false);

        };

        //fnBtnTabExit_onclick : ~ MDI Tab 닫기 버튼 클릭
        this.fnBtnTabExit_onclick = function(obj,e)
        {
            if (!this.fnMdiDestroy(obj.objWorkDiv))
            {
                take.trace("System", "ERROR", "MDI 제거 실패");
            }
        };

        // fnBtnTabWin_onclick : ~ MDI Tab 창띄기 버튼 클릭
        this.fnBtnTabWin_onclick = function(obj,e)
        {
            var objDiv;
            var sUrl, sProgNm, sProgId, sPopId;
            var bSucc;

            objDiv  = obj.objWorkDiv;
            sUrl    = objDiv.form.divForm.url;
            sProgNm = objDiv.form.divForm.ProgNm;
            sParam  = objDiv.form.divForm.UserParam;
            sProgId = objDiv.form.divForm.ProgId;

            //trace("objDivForm" + objDivForm);
            //trace("objDivFormURL" + objDivForm.url);
            //trace("sProgNm        ---> " + sProgNm);

            bSucc = take.confirm(this, "question", "창뜨기 실행하시면 현 화면의 Data가 초기화 됩니다. 실행   하시겠습니까?");

            if (bSucc)
            {
                if (this.fnMdiDestroy(objDiv))
                {
                    sPopId = (objDiv.name).replace("divWork", "popWork");

                    nexacro.open(sPopId, "frm::frmMdiPopUp.xfdl", this.getOwnerFrame(), {Url : sUrl, ProgNm : sProgNm, ProgId : sProgId, UserParam : sParam}, "showtitlebar=true showstatusbar=true resizable=true autosize=true", 0, 0, 1100, 700, this);
                } else {
                    take.trace("System", "ERROR", "MDI 제거 실패");
                }
            }
        };
        /*********************************************************
        * 3 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInitFrame : 프레임 초기화
         * @param  {} N/A
         * @example this.fnInitFrame();
         */
        this.fnInitFrame = function()
        {
        	UXBooster.MainFrame   = UXBooster.mainframe.WorkFrame;
            UXBooster.TopFrame    = this.divTop;
            UXBooster.MdiFrame    = this.divMdi;
        	UXBooster.LeftFrame   = this.divLeft;
            UXBooster.FoldButton  = this.btnFold;
            UXBooster.WorkFrame   = this.divMain;
            UXBooster.BottomFrame = this.divBottom;

            var sMainUrl = take.nvl(UXBooster.gdsUserInfo.getColumn(0,"MAIN_URL"), "");

            this.divLeft.set_url("frm::frmLeft.xfdl");
            this.divTop.set_url("frm::frmTop.xfdl");
            this.divMdi.set_url("frm::frmMdi.xfdl");

            if (sMainUrl=="")
            {
                this.divMain.set_url("frm::frmHome.xfdl");
            } else {
                this.divMain.set_url(sMainUrl);
            }

        	this.fnSearch("SearchNoticeTimer");
        };

        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "SearchNoticeTimer";

            this.dsNotice.clearData();
        	this.dsSurvey.clearData();

            //take.tranSelect(this, sTranId ,"BoardManagement.boardInfoDetail" ,"dsSearch", "dsNotice", sParam, "fnCallback");

        // 	var arrNamespace = ["SurveyManagementMapper.surveyInfoList"
        // 						, "BoardManagement.boardInfoDetail"];
        // 	var arrOutDs = ["dsSurvey", "dsNotice"];
        //
        // 	this.dsSearch.clearData();
        // 	var nRow = this.dsSearch.addRow();
        // 	this.dsSearch.setColumn(nRow, "PROJECT_CD", this.fv_sProjectCd);
        // 	this.dsSearch.setColumn(nRow, "MENU_CD", this.fv_sMenuCd);
        // 	this.dsSearch.setColumn(nRow, "POPUP_YN", "Y");
        //
        // 	take.tranSelect
        // 	(
        // 		this,
        // 		sTranId,
        // 		arrNamespace,
        // 		["dsSearch"],
        // 		arrOutDs,
        // 		"",
        // 		"fnCallback"
        // 	)
        };

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
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
                case "SearchNotice" :  //공지사항 조회 콜백
                case "SearchNoticeTimer" :  //공지사항타이머 조회 콜백
                    //Script
        			var sUserId, sBoardSeq, sName, sRtnCookie, sDate, sPopYn, sImpoYn;
                    var objDsNotice, objDsNotiPop, objDsMsg;
                    var nCnt, nNRow;

        			sUserId = this.fv_objGdsUserInfo.getColumn(0, "USER_ID");

        			//20200701 정해원 eSCM수정요청 사항
        			//1 page - 오늘하루 그만보기 버그 수정
        			sDate = take.toDateString(new Date(), "yyyyMMdd");

                    objDsNotice = this.dsNotice;
                    objDsNotiPop = this.dsNoticePop;
                    objDsMsg = this.dsMsg;

        			nCnt = objDsNotice.rowcount;

                    objDsNotiPop.clearData();

                    objDsMsg.set_enableevent(false);
                    objDsMsg.clearData();
                    objDsMsg.set_enableevent(true);

                    for( var i=0; i<nCnt; i++ )
                    {
                        if (sId=="SearchNoticeTimer")
                        {
                            //TODO : 공지 메세지 노출 조건에 따라 수정 필요 (현재는 중요 공지만 처리)
                            sImpoYn = take.nvl(objDsNotice.getColumn(i, "IMPORT_YN"), "");
                            if( sImpoYn == "Y")
                            {
                                nNRow = objDsMsg.addRow();
                                objDsMsg.setColumn(nNRow, "TYPE",     "noti");
                                objDsMsg.setColumn(nNRow, "PROVIDER", take.systemNm + " 공지사항");
                                objDsMsg.setColumn(nNRow, "MSG",      take.nvl(objDsNotice.getColumn(i, "BOARD_TITLE"), ""));
                                objDsMsg.setColumn(nNRow, "MSGTIME",  take.nvl(objDsNotice.getColumn(i, "REG_DT"), ""));
                                objDsMsg.setColumn(nNRow, "BOARD_SEQ", take.nvl(objDsNotice.getColumn(i, "BOARD_SEQ"), ""));
                            }
                        } else {
                            sPopYn = take.nvl(objDsNotice.getColumn(i, "POPUP_YN"), "");
                            if( "Y" == sPopYn )
                            {
                                sBoardSeq = take.nvl(objDsNotice.getColumn(i, "BOARD_SEQ"), "");
                                sName = "notiPop" + sUserId + "_" + sBoardSeq;
                                sRtnCookie = take.getCookie(sName);

                                if(take.isEmpty(sRtnCookie) || sDate != sRtnCookie)
                                {
                                    nNRow = objDsNotiPop.addRow();
                                    objDsNotiPop.copyRow(nNRow, objDsNotice, i);
                                }
                            }
                        }
                    }

                    //공지 메세지 팝업 호출
                    if(take.nvl(objDsMsg.rowcount, 0) > 0){
                        this.fnOpenMsgPop();
                    }

                    //공지 메세지 타이머 재 시작
                    if (sId=="SearchNoticeTimer")
                    {
                        //this.setTimer(99999, 60000);
                    } else {
                        //공지 팝업 데이터 존재여부 확인
                        if( this.dsNoticePop.rowcount <= 0 )
                        {
                            return false;
                        } else {
                            this.fv_objTimer = nexacro._OnceCallbackTimer.callonce
                            (
                                this,
                                function ()
                                {
                                    try {
                                        take.openPopup(this, "CM040P01", "frm::mod/CM040P01.xfdl", {}, "resizable=true width=810 height=410", "", true);
                                    } catch(e) {
                                        //trace("fnTimer call error : " + e);
                                        if(this.fv_objTimer ) this.fv_objTimer.stop();
                                        take.openPopup(this, "CM040P01", "frm::mod/CM040P01.xfdl", {}, "resizable=true width=810 height=410", "", true);
                                    }
                                },
                                1
                            );
                        }


                    }

        			this.dsSurveyPop.clearData();

        			var sDate2 = take.toDateString(new Date(), "yyyyMMdd");
        			for( var i=0; i<this.dsSurvey.rowcount; i++ )
        			{
        				var sSurveySeq = this.dsSurvey.getColumn(i, "SURVEY_SEQ");
        				var sSurveyName = "surveyPop" + sUserId + "_" + sSurveySeq;
                        var sRtnCookie2 = take.getCookie(sSurveyName);

                        if(take.isEmpty(sRtnCookie2) || sDate2 != sRtnCookie2)
                        {
        					var nNRow = this.dsSurveyPop.addRow();
                            this.dsSurveyPop.copyRow(nNRow, this.dsSurvey, i);
        				}
        			}

        			if( this.dsSurveyPop.rowcount > 0 )
                    {
        				var sParam = {};
        				take.openPopup(this, "SM030P02", "frm::mod/SM030P02.xfdl", sParam, "",
        					function(){
        					},
        				true);
        			}

                    break;
                default :
                    break;
            }
        };

        /**
         * btnFold.fnShowHide : Left 메뉴 접고/펴기 기능
         * @param  {}
         * @example this.btnFold.fnShowHide();
         */
        this.btnFold.fnShowHide = function(bShow)
        {
            var objForm, objDiv, objBtn, objMain;
            var nMin, nMax;

            objForm = this.parent;
            objDiv = objForm.divLeft;
            objMain = objForm.divMain;
        	//20210120 정해원
        	//접기버튼 위치변경으로 인한 스크립트/CSS 수정
        	//objBtn = this;
            objBtn = UXBooster.TopFrame.form.btnMenuShowHide;

            nMin=objForm.fv_nFoldMin;
            nMax=objForm.fv_nFoldMax;

            if (objDiv.getOffsetWidth()==nMin || bShow)
            {
                objBtn.set_cssclass("btn_TF_hide");
                //objDiv.setOffsetWidth(nMax);
                objDiv.set_width(nMax);
            } else if (objDiv.getOffsetWidth()==nMax || !bShow) {
                objBtn.set_cssclass("btn_TF_show");
                //objDiv.setOffsetWidth(nMin);
                objDiv.set_width(nMin);
            }

            objForm.resetScroll();
        };

        /**
         * fnMenuOpen : 메뉴오픈
         * @param  {Object} objDs Dataset Object
         * @param  {String} sType 메뉴 타입
         * @param  {Number} nRow  Dataset Row
         * @param  {String} sUserParam  해당 메뉴화면에 넘길 파라메터
         * @example this.fnMenuOpen(this.dsOpenMenu, "01", 1, "test|01");
         */
        this.fnMenuOpen = function(objDs, sType, nRow, sUserParam) //56
        {
            //변수선언
        	var sMdiId, sProgId, sProgNm, sPrefix, sUrl;
            var objScope, objWorkDiv, objDivMain;
            var arrWorkRect = new Array(), arrMdiRect = new Array(); //left, top, width, height, right, bottom

            objDivMain = this.divMain;

            //메뉴정보 : 메뉴아이디, 메뉴명
            sPrefix = objDs.getColumn(nRow, "PROGRAM_PREFIX");
            sProgId = objDs.getColumn(nRow, "MENU_CD");
            sProgNm = objDs.getColumn(nRow, "MENU_NM");

            //MDI 아이디 생성
            sMdiId = sPrefix + "_" + sProgId;
            sUrl = sPrefix + "::" + objDs.getColumn(nRow, "MENU_URL") + ".xfdl";

            //trace("sUrl-->" + sUrl);

            this.fnDisableMenu();

            //Work Div 생성 위치
            objScope = this.divMdi.form.divTab;

            //Work Div 생성 좌표
            arrWorkRect[0] = "btnFold:10";
            //arrWorkRect[1] = this.divMdi.getOffsetTop() + this.divMdi.getOffsetHeight();
            arrWorkRect[1] = objDivMain.top;
            arrWorkRect[2] = objDivMain.width;
            arrWorkRect[3] = objDivMain.height;
            arrWorkRect[4] = objDivMain.right;
            arrWorkRect[5] = objDivMain.bottom;

            //Work Div 생성
            objWorkDiv = this.fnNewWork(this, "divWork_" + sMdiId, sType, sUrl, arrWorkRect, sProgNm, sUserParam);

            //Work Div 생성 완료시
            if (take.nvl(objWorkDiv, "")!="")
            {
                objWorkDiv.set_cssclass(objDivMain.cssclass);
                objWorkDiv.setFocus();
                //MDI 버튼 좌표 세팅
                arrMdiRect[2] = this.fv_nTabWidth, arrMdiRect[0] = nRow*(arrMdiRect[2] + this.fv_nTabLeftGap), arrMdiRect[1] = this.fv_nTabTopGap, arrMdiRect[3] = this.fv_nTabHeight;

                //MDI 버튼 생성
                this.fnNewTab(this.divMdi.form.divTab, sMdiId, sProgNm, arrMdiRect, objWorkDiv);

                objWorkDiv.objTab.set_cssclass(this.fv_sTabSelCss);
                objWorkDiv.objTabExit.set_cssclass(this.fv_sTabExitSelCss);

                objWorkDiv.objTab.bringToFront();
                objWorkDiv.objTabWin.bringToFront();
                objWorkDiv.objTabExit.bringToFront();

                if (sProgId.indexOf("::")<0)
                {
                    this.fnMenuLog(sProgId);
                } else {
                    take.debug(this, "메뉴 로그를 호출하지 않습니다.");
                }

            } else {
                take.error(this, "메뉴를 오픈하지 못하였습니다.(MDI생성 실패)");
                return;
            }

            this.divMdi.form.divTab.form.set_scrollbarsize(0);
        	this.divMdi.form.divTab.form.staLineMdi.set_right("0px");
        	this.divMdi.form.divTab.form.resetScroll();

        	if(this.divMdi.form.divTab.form.hscrollbar.max > 0)
        	{
        		var nPos = this.divMdi.form.divTab.form.hscrollbar.max;
        		this.divMdi.form.divTab.form.scrollBy(nPos, 0);

        		//20210127 정해원 하단 보더 확장
        		//화면리사이즈 시 staLineMdi의 너비가 스크롤할 수 있는 너비까지 확장되도록 처리
        		this.divMdi.form.divTab.form.staLineMdi.set_right("-" + nPos + "px");
        	}
        };

        /**
         * fnMenuLog : 메뉴오픈
         * @param  {String} sProgId 메뉴아이디
         * @example this.fnMenuLog(sProgId);
         */
        this.fnMenuLog = function(sProgId)
        {
            take.transaction
            (
                this,
                "menuOpenLog",
                "SVC_LOC::menuClick.do",
                "",
                "",
                "sProjectCd='" + UXBooster.av_sProjectCd + "' sMenuId='" + sProgId + "'",
                function(sId, nErr, sMsg)
                {
                    if (sId=="menuOpenLog")
                    {
                        take.debug(this, "메뉴 로그등록 서비스 호출 성공");
                    }
                }
            )
        };

        /**
         * fnMenuOpenPopUp : 메뉴 팝업 오픈
          * @param  {Object} objMenuInfo 메뉴정보
         * @param  {String} sUserParam 메뉴에 넘길 파라메터
         * @param  {String} sCallFunc  메뉴 오픈후 콜백
         * @param  {String} sOption  팝업 오픈 옵션
         * @example this.fnMenuOpenPopUp(this.dsMenu, 1, "1|1");
         */
        this.fnMenuOpenPopUp = function(objMenuInfo, sUserParam, sCallFunc, sOption)
        {
            var sPrefix, sProgId, sProgNm, sMdiId, sUrl;
            var objInfo;

            //메뉴정보 : 메뉴아이디, 메뉴명
            sPrefix = objMenuInfo.prefix;
            sProgId = objMenuInfo.progId;
            sProgNm = objMenuInfo.progNm;

            //MDI 아이디 생성
            sMdiId = sPrefix + "_" + sProgId;
            sUrl = sPrefix + "::" + objMenuInfo.menuUrl + ".xfdl";

            objInfo = {Url : sUrl, ProgNm : sProgNm, ProgId : sProgId, UserParam : sUserParam};

            sOption = take.nvl(sOption,"");
            sOption = "showtitlebar=true showstatusbar=true resizable=true autosize=true" + (sOption==""?"":" ") + sOption;

            bSucc = nexacro.open("popWork_" + sMdiId, "frm::frmMdiPopUp.xfdl", this.getOwnerFrame(), objInfo, sOption, 0, 0, 1100, 700, this);

            //팝업 오픈 성공일 경우 메뉴 로그 트랜 젝션 호출
            if (bSucc)
            {
                this.fnMenuLog(sProgId);
            }
        };

        /**
         * fnNewWork : Work Div 생성
         * @param  {Object} objScope    컴포넌트를 생성할 오브젝트
         * @param  {String} sDivId      Work Div Id
         * @param  {String} sType       메뉴 타입
         * @param  {String} sUrl        Work Div Url / Web Url
         * @param  {Array}  arrRect     Work Div 생성위치
         * @param  {String} sProgNm     Work Div 명
         * @param  {String} sUserParam  Work Div 전달 파라메터
         * @return {Object}             Work Div Object
         * @example this.fnNewWork(this, "divWork" + "_" + sMdiId, sFUrl, arrWorkRect); //--> [Object Div]
         */
        this.fnNewWork = function(objScope, sDivId, sType, sUrl, arrRect, sProgNm, sUserParam)
        {
            //Div 컴포넌트 생성
            var objWorkDiv, objWeb, objInfo, objMenuDs;
            var sCompId, sProgId, sPMenuCd, sMenuNavigator;
            var arrTemp;
            var nPMenuRow;

            //프로그램 아이디 확인
            if (sDivId.indexOf("_")>=0)
            {
                arrTemp = sDivId.split("_");
                sProgId = arrTemp[2];
            } else {
                take.error(this, "프로그램 아이디를 알 수 없습니다.")
                return "";
            }

            objWorkDiv = this.fnNewDiv(objScope, sDivId, "frm::frmWork.xfdl", arrRect, sProgId);
            //take.StringToObject(sUserParam);
            //trace("!@!@>> sType:  " + sType);
            //trace("!@!@>> sUserParam4:   " + sUserParam);
            objWorkDiv.UserParam = sUserParam;
            objWorkDiv.ProgId = sProgId;
            objWorkDiv.ProgNm = sProgNm;
            //objWorkDiv.ManualUrl = sManualUrl;

            if (sType == "05") //Web Open Menu
            {
                sCompId = sDivId.replace("divWork", "webWork");
                objWeb = new WebBrowser(sCompId, 0, 0, null, null, 0, 0);

                objWorkDiv.form.divForm.form.addChild(sCompId, objWeb);

        		objWorkDiv.form.divForm.ProgId = sProgId;
        		objWorkDiv.form.divForm.FormNm = sProgNm;
        		objWorkDiv.form.divForm.ProgNm = sProgNm;
        		objWorkDiv.form.divForm.UserParam = sUserParam;

        		objWeb.set_url(sUrl);

        		//Work Form에 메뉴명 세팅
                objWorkDiv.form.staTitle.set_text(sProgNm + "(" + sProgId +")");

                objWeb.show();

            } else if (sType=="03") { //nexacro Form일 경우 (Dash보드포함)

        		objWorkDiv.form.divForm.ProgId = sProgId;
        		objWorkDiv.form.divForm.FormNm = sProgNm;
                objWorkDiv.form.divForm.ProgNm = sProgNm;
        		objWorkDiv.form.divForm.UserParam = sUserParam;
        		//trace("!@!@>> sUserParam3-1:   " + objWorkDiv.form.divForm.UserParam);
                //메뉴 Url 연결
                objWorkDiv.form.divForm.set_url(sUrl);

                //20200511 정해원
        		//MENU NAVIGATOR 추가
        		objMenuDs = UXBooster.LeftFrame.form.dsMenu;
        		sPMenuCd  = objMenuDs.lookup("MENU_CD", sProgId, "PARENT_MENU");
        		nPMenuRow = objMenuDs.findRowNF("MENU_CD", sPMenuCd);
        		sMenuNavigator	= "<fc v='#0c1438'><u v='true'>" + sProgNm +  "(" + sProgId +")</u></fc>";

        		while(nPMenuRow != -1)
                {
        			sMenuNavigator  = objMenuDs.getColumnNF(nPMenuRow, "MENU_NM") + " > " + sMenuNavigator;
        			sPMenuCd	= objMenuDs.getColumnNF(nPMenuRow, "PARENT_MENU");
        			nPMenuRow	= objMenuDs.findRowNF("MENU_CD", sPMenuCd);
        		}

        		//Work Form에 메뉴명 세팅
                objWorkDiv.form.staTitle.set_text(sMenuNavigator);

                objWorkDiv.form.divForm.form.ProgId = sProgId;
                objWorkDiv.form.divForm.form.FormNm = sProgNm;
                objWorkDiv.form.divForm.form.ProgNm = sProgNm;
                objWorkDiv.form.divForm.form.UserParam = sUserParam;
        		//trace("!@!@>> sUserParam3-2:   " + objWorkDiv.form.divForm.form.UserParam);
            }

            //take.alert(this, "Info", "해당 {text}이 없습니다.", {text:" Url File"})

            //Work Div Object Return
            return objWorkDiv;
        };

        this.fnNewTab = function(objScope, sTabId, sProgNm, arrRect, objWorkDiv)
        {
             //변수 선언
            var objTab, objTabExit, objTabWin, objOpenMenuDs, objOpenMenuTab;
            var sBtnId, sTabCss, sOpenMenuPrefix, sOpenMenuCd, sOpenMenuTabId;
            var arrExitRect = new Array(), arrWinRect = new Array();
            var nTxtSize, nGap, nOpenMenuRow;

            //MDI Button 생성
            //trace("arrRect-->" + arrRect);
            sBtnId = "btnTab_"+sTabId;
            sTabCss = this.fv_sTabCss;

            //nTxtSize = nexacro.getTextSize(sProgNm).ny+10+15+20; //텍스트크기 + 닫기버튼크기 + 왼쪽여백 + 오른쪽여백 + 기타 여백
            //alert(nTxtSize);
            //arrRect[2] = nTxtSize;

            objOpenMenuDs = UXBooster.MdiFrame.form.dsOpenMenu;
            nCnt = objOpenMenuDs.rowcount;

            //이전 탭의 Right 좌표 + gap이 left좌표
        	if (nCnt > 1)
            {
        		nOpenMenuRow = nCnt - 2;
        		sOpenMenuPrefix = objOpenMenuDs.getColumn(nOpenMenuRow, 'PROGRAM_PREFIX');
        		sOpenMenuCd = objOpenMenuDs.getColumn(nOpenMenuRow, 'MENU_CD');
        		sOpenMenuTabId = "btnTab_" + sOpenMenuPrefix + "_" + sOpenMenuCd;
        		objOpenMenuTab = this.divMdi.form.divTab.form.components[sOpenMenuTabId];

        		arrRect[0] = objOpenMenuTab.getOffsetRight() + this.fv_nTabLeftGap;
        	}

            objTab = this.fnNewBtn(objScope, sBtnId, sTabCss, sProgNm, this.fnBtnTab_onclick, arrRect);

            if (take.nvl(objTab)!="")
            {
                objTab.objWorkDiv = objWorkDiv;
                objWorkDiv.objTab = objTab;
            }

            //objTab.set_text(sProgNm);
            //텍스트 사이즈가 클경우 ...표시
            nGap = this.fv_nTabWinWidth + this.fv_nTabExitWidth - 15;
            //objTab.set_text(take.getTextlimitTo(sProgNm, "", arrRect[2]-nGap));
            objTab.set_fittocontents('width');

            //MDI Window icon Button 생성
            sBtnId = "btnTabWin_"+sTabId;
            sTabCss = this.fv_sTabWinCss;

            arrWinRect[0] = arrRect[0], arrWinRect[1] = arrRect[1], arrWinRect[2] = this.fv_nTabWinWidth, arrWinRect[3]=this.fv_nTabWinHeight, arrWinRect[4] = arrRect[4], arrWinRect[5] = arrRect[5] ;

            objTabWin = this.fnNewBtn(objScope, sBtnId, sTabCss, "", this.fnBtnTabWin_onclick, arrWinRect);
            if (take.nvl(objTabWin)!="")
            {
                objTabWin.objWorkDiv = objWorkDiv;
                objWorkDiv.objTabWin = objTabWin;
            }

            //MDI Exit Button 생성(닫기)
            sBtnId = "btnTabExit_"+sTabId;
            sTabCss = this.fv_sTabExitCss;

            //arrExitRect[0] = arrRect[0]+(this.fv_nTabWidth-this.fv_nTabExitWidth), arrExitRect[1] = arrRect[1]-1, arrExitRect[2] = this.fv_nTabExitWidth, arrExitRect[3] = this.fv_nTabExitHeight, arrExitRect[4] = arrRect[4], arrExitRect[5] = arrRect[5];
            arrExitRect[0] = objTab.getOffsetRight() - this.fv_nTabExitWidth, arrExitRect[1] = arrRect[1]-1, arrExitRect[2] = this.fv_nTabExitWidth, arrExitRect[3] = this.fv_nTabExitHeight, arrExitRect[4] = arrRect[4], arrExitRect[5] = arrRect[5];

            objTabExit = this.fnNewBtn(objScope, sBtnId, sTabCss, "", this.fnBtnTabExit_onclick, arrExitRect);
            if (take.nvl(objTabExit)!="")
            {
                objTabExit.objWorkDiv = objWorkDiv;
                objWorkDiv.objTabExit = objTabExit;
            }

            this.divMdi.form.divTab.objActiveWork = objWorkDiv;

            this.divMain.set_enable(false);
            this.divMain.set_visible(false);
        };

        /**
         * fnNewDiv : Div Component 동적 생성
         * @param  {String} sScope  생성 위치
         * @param  {String} sDivId  Div Component Id
         * @param  {String} sUrl    Div Component Url
         * @param  {Array}  arrRect Div Component 생성 위치
         * @return {Object} objDiv  생성된 DIV Object
         * @example this.fnNewDivthis.fnNewDiv(objScope, sDivId, sUrl, arrRect);
         */
        this.fnNewDiv = function(objScope, sDivId, sUrl, arrRect, sProgId)
        {
        	//변수 선언 및 값 세팅
        	var objDiv = new Div();
        	objDiv.init(sDivId, arrRect[0], arrRect[1], arrRect[2], arrRect[3], arrRect[4], arrRect[5]);
        	objScope.addChild(sDivId, objDiv);

        	//objDiv.set_minwidth(this.fv_nWorkWidthMin);
        	//objDiv.set_minheight(this.fv_nWorkHeightMin);

        	objDiv.show();  //보이기

        	//기본 값 세팅
        	objDiv.set_async(false);
        	objDiv.set_background("#ffffff");
        	objDiv.ProgId = sProgId;
        	objDiv.set_url(sUrl);

        	return objDiv;
        };

        /**
         * fnNewBtn : Button Component 동적 생성
         * @param  {String} sScope  생성 위치
         * @param  {String} sBtnId  버튼 아이디
         * @param  {String} sCss    CSS클래스
         * @param  {String} sBtnTxt 버튼 TEXT
         * @param  {String} sEvent  버튼 이벤트
         * @param  {Array}  nRect   버튼 생성 좌표
         * @return {Object} objBtn  생성된 버튼 Object
         * @example this.fnNewBtn(sParam, nParam);
         */
        this.fnNewBtn = function(objScope, sBtnId, sCss, sBtnTxt, sEvent, arrRect)
        {
        	//변수 선언 및 값 세팅
        	var objBtn = new Button();
        	objBtn.init(sBtnId, arrRect[0], arrRect[1], arrRect[2], arrRect[3], arrRect[4], arrRect[5]);

        	objScope.addChild(sBtnId, objBtn);
        	objBtn.addEventHandler("onclick", sEvent, this); //버튼에 부여할 이벤트
        	objBtn.show();

        	//CSS 클래스가 있을경우만 세팅
        	if (sCss!="") objBtn.set_cssclass(sCss);

        	//버튼 text 및 기본 값 세팅
        	objBtn.set_tooltiptext(sBtnTxt);
        	objBtn.set_tooltiptype("hover");
        	objBtn.set_enable(true);
        	objBtn.set_text(sBtnTxt);
        	objBtn.set_visible(true);

        	//보이기
        	return objBtn;
        };
        /**
         * fnMdiDestroy : MDI 삭제
         * @param  {Object} objComp WORK DIV 컴포넌트
         * @return {Boolean} true / false
         * @example this.fnMdiDestroy(objcomp); //--> true/false
         */
        this.fnMdiDestroy = function(objComp)
        {
            //변수 선언;
            var nFRow, nCnt;
            var objDs, objRtn;
            var bActive;

            //오픈메뉴데이터셋에서 해당 Row 찾기
            nFRow = this.getFindMenuRow(objComp.name);

            //해당 데이터(Row)가 있으면
            if (nFRow>=0)
            {
                //오픈메뉴데이터셋
                objDs = this.divMdi.form.dsOpenMenu;

                nCnt = objDs.rowcount-1;

        		//20210127 정해원 objActiveWork 가 null로 초기화 될 수 있음
        		if(this.divMdi.form.divTab.objActiveWork != null){
        			bActive = this.divMdi.form.divTab.objActiveWork.name==objComp.name?(nFRow==0?false:true):false;
        		}else{
        			bActive = false;
        		}

                //오픈메뉴데이터셋에서 데이터 삭제
                if (objDs.deleteRow(nFRow))
                {
                    //MDI TAB 컴포넌트 제거
                    objRtn = objComp.objTab.destroy();
                    objRtn = null;
                    objComp.objTab=null;

                    //MDI TAB EXIT 컴포넌트 제거
                    objRtn = objComp.objTabExit.destroy();
                    objRtn = null;
                    objComp.objTabExit=null;

                    //MDI TAB Window 컴포넌트 제거
                    objRtn = objComp.objTabWin.destroy();
                    objRtn = null;
                    objComp.objTabWin=null;

        			objComp.form.divForm.form._on_close();

                    //MDI DIV 컴포넌트 제거
                    objRtn = objComp.destroy();
                    objRtn = null
                    objComp=null;

                    //현재 Div가 엑티브 상태일때
                    if (bActive ||  (nFRow == 0 && nFRow<nCnt))
        			{
        				var nRow;
        				if(nFRow == 0)
        				{
        					nRow = 0;
        				}else
        				{
        					nRow = nFRow-1;
        				}
        				this.fnActiveMenu(objDs, nRow);
        			}

                    //Mdi Tab 재정렬
                    if (nFRow<nCnt) {

        				this.fnMdiSort(nFRow);
        			}

                    //MDI Tab이 없을경우
                    if (nCnt==0)
                    {
                        this.divMain.set_visible(true);
                        this.divMain.set_enable(true);
                    }

        			//20210205 정해원
        			//화면리사이즈 시 staLineMdi의 너비가 스크롤할 수 있는 너비까지 확장되도록 처리
        			this.divMdi.form.divTab.form.staLineMdi.set_right("0px");
        			this.divMdi.form.divTab.form.resetScroll();
        			if(this.divMdi.form.divTab.form.hscrollbar.max > 0)
        			{
        				var nPos = this.divMdi.form.divTab.form.hscrollbar.max;
        				this.divMdi.form.divTab.form.staLineMdi.set_right("-" + nPos + "px");
        			}

                } else {
                    return false;
                }
            } else {
                return false;
            }
            return true;
        };

        /**
         * getFindMenuRow : 오픈메뉴데이터셋에서 해당 프로그램 아이디 데이터 찾기
         * @param  {String} sMdiCompNm Mdi컴포넌트 명
         * @return {Number} 해당 데이터의 Row
         * @example this.getFindMenuRow(sMdiCompNm); //--> -1:실패, 0이상:성공
         */
        this.getFindMenuRow = function(sMdiCompNm)
        {
            //변수 선언
            var arrTemp;
            var sProgId;
            var objDs;

            //프로그램 아이디 확인
            if (sMdiCompNm.indexOf("_")>=0)
            {
                arrTemp = sMdiCompNm.split("_");
                sProgId = arrTemp[2];
            } else {
                sProgId = sMdiCompNm;
            }

            //오픈메뉴데이터셋
            objDs = this.divMdi.form.dsOpenMenu;

            //해당 Row Return
            return objDs.findRow("MENU_CD", sProgId);
        };

        /**
         * fnActiveMenu : 메뉴화면 올리기
         * @param  {Object} objDs Dataset Object
         * @param  {Number} nFRow 오픈된 Row
         * @return {N/A}          N/A
         * @example this.fnActiveMenu(objDs, nFRow);
         */
        this.fnActiveMenu = function(objDs, nFRow)
        {
            //변수 선언
            var sTabExitId;
            var objWorkDiv;

            //텝 닫기 버튼에 연결된 Work div
            sTabExitId = "btnTabExit_" + objDs.getColumn(nFRow, "PROGRAM_PREFIX") + "_" + objDs.getColumn(nFRow, "MENU_CD");
            objWorkDiv = this.divMdi.form.divTab.form.components[sTabExitId].objWorkDiv;

            //Work div Disable 처리
            this.fnDisableMenu();

        	//20210126 정해원 추가
        	this.divMain.set_visible(false);
        	this.divMain.set_enable(false);

            //워크 영역 활성화
            objWorkDiv.objTab.set_cssclass(this.fv_sTabSelCss);
            objWorkDiv.objTabExit.set_cssclass(this.fv_sTabExitSelCss);
            objWorkDiv.set_enable(true);
            objWorkDiv.set_visible(true);

            //현재 Active된 Work Div를 세팅
            this.divMdi.form.divTab.objActiveWork = objWorkDiv;

        	//20210126 정해원 맨위로 보이기
        	objWorkDiv.objTab.bringToFront();
        	objWorkDiv.objTabWin.bringToFront();
        	objWorkDiv.objTabExit.bringToFront();
        	objWorkDiv.bringToFront();

        	objWorkDiv.objTab.setFocus();

            return objWorkDiv;
        };

        /**
         * fnDisableMenu : 열려있는 MDI 모두 Disable
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnDisableMenu();
         */
        this.fnDisableMenu = function()
        {
            //변수 선언
            var arrMdiComp;
            var objComp;
            var nCnt;

            //MDI Tab에 있는 컴포넌트 가져오기
            objComp = this.divMdi.form.divTab.form.components;
            arrMdiComp = objComp._idArray;
            nCnt = arrMdiComp.length;
            //trace("complist--> " + arrMdiComp);
            //컴포넌트 갯수만큼 반복 실행
            for (var i=0;i<nCnt;i++)
            {
                //Tab버튼일 경우 Tab 버튼에 연결된 Work form Div Disable 시키기
                if (objComp[arrMdiComp[i]].name.substr(0,7)=="btnTab_")
                {
                    objComp[arrMdiComp[i]].set_cssclass("btn_nav_tab");
                    objComp[arrMdiComp[i]].objWorkDiv.objTabExit.set_cssclass("btn_nav_extra");
                    objComp[arrMdiComp[i]].objWorkDiv.set_visible(false);
                    objComp[arrMdiComp[i]].objWorkDiv.set_enable(false);
                }
            }

            this.divMdi.form.divTab.form.staLineMdi.bringToFront();
        };

        /**
         * fnMdiSort : MDI정렬
         * @param  {Number} nFRow 삭제된 Row
         * @return {Boolean} True / False
         * @example this.fnSample(sParam, nParam); //--> true/false
         */
        this.fnMdiSort = function(nFRow)
        {
            //변수선언
            var nCnt, nWidth, nLeft;
            var sBtnTabId;
            var objDs, objWorkDiv;

            //오픈메뉴데이터셋
            objDs = this.divMdi.form.dsOpenMenu;

            //오픈메뉴 갯수
            nCnt = objDs.rowcount;
            if (nCnt<0) return;
            nWidth = this.fv_nTabWidth;

            //MDI버튼을 정렬
            for (var i=nFRow;i<nCnt;i++)
            {
        		//Tab 버튼에 연결된 Work form Div에 확인
        		var openBtnTabId = "btnTab_" + objDs.getColumn(i - 1, "PROGRAM_PREFIX") + "_" + objDs.getColumn(i - 1, "MENU_CD");
                var openBtnTab = this.divMdi.form.divTab.form.components[openBtnTabId];

                //Tab 버튼에 연결된 Work form Div에 확인
                sBtnTabId = "btnTab_" + objDs.getColumn(i, "PROGRAM_PREFIX") + "_" + objDs.getColumn(i, "MENU_CD");
                objWorkDiv = this.divMdi.form.divTab.form.components[sBtnTabId].objWorkDiv;

        		//trace("objWorkDiv = "+objWorkDiv);

                //있을경우
                if (take.nvl(objWorkDiv, "")!="") {
                    //해당 MDI버튼들의 위치를 조정
        			//20210127 정해원 tab 간격 버그 수정
                    //nLeft = i * (nWidth + 2);
        			nLeft = !openBtnTab ? 0 : openBtnTab.getOffsetRight() + this.fv_nTabLeftGap;

                    //trace(sTabExitId + "/" + i + "/" + nLeft);
                    objWorkDiv.objTab.set_left(nLeft);
                    objWorkDiv.objTabWin.set_left(nLeft);

                    nLeft = objWorkDiv.objTab.getOffsetRight() - this.fv_nTabExitWidth;
                    objWorkDiv.objTabExit.set_left(nLeft);
                } else {
                    take.trace("System", "ERROR", "해당컴포넌트를 찾지못하였습니다.")
                }
            }
        }

        /**
         * fnResetMdi : MDI 전체 지우기
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnResetMdi();
         */
        this.fnResetMdi = function()
        {
        	var objWorkDiv, objDs, objForm;
            var sDivId;
            var nCnt;

        	objDs = UXBooster.MdiFrame.form.dsOpenMenu;
            nCnt = objDs.rowcount;

            objForm = this;

            for (var i=0;i<nCnt;i++)
            {
                sDivId = "divWork_" + objDs.getColumn(i, "PROGRAM_PREFIX") + "_" + objDs.getColumn(i, "MENU_CD");
                objWorkDiv = objForm.components[sDivId];

                objWorkDiv.objTab.destroy();
                objWorkDiv.objTab = null;

                objWorkDiv.objTabExit.destroy();
                objWorkDiv.objTabExit = null;

                objWorkDiv.objTabWin.destroy();
                objWorkDiv.objTabWin = null;

                objWorkDiv.destroy();
                objWorkDiv = null;
            }

            objDs.clearData();

           objForm.divMain.set_enable(true);
           objForm.divMain.set_visible(true);
        };

        /**
         * fnMdiMenuOpen : 메뉴가 있는 화면 오픈
         * @param  {String}  sMenuId   메뉴 아이디
         * @param  {String}  sParam    파라메터
         * @param  {Boolean} bNewOpen  기존화면 있을경우 닫고 오픈 여부
         * @param  {Boolean} bPopUp     팝업 오픈 여부(true면 팝업으로 오픈)
         * @return {N/A} N/A
         * @example this.fnMdiMenuOpen(sMenuId, sParam, bNewOpen);
         */
        this.fnMdiMenuOpen = function(sMenuId, sParam, sCallFunc, bNewOpen, bPopUp)
        {
            //메뉴 신규 오픈 여부에 대한 값이 없을경우 기본으로 닫고 오픈
            bNewOpen = take.nvl(bNewOpen,true);
            bPopUp = take.nvl(bPopUp,false);

            this.divLeft.form.fnProgMenu(sMenuId, sParam, sCallFunc, bNewOpen, bPopUp);
        };

        /**
         * fnMenuPopOpen : 메뉴가 있는 화면 팝업 오픈
         * @param  {String}  sMenuId   메뉴 아이디
         * @param  {String}  sUserParam   파라메터
         * @param  {String}  sOption      팝업옵션
         * @param  {String}  sCallBack    콜백함수
         * @return {N/A} N/A
         * @example this.fnMenuPopOpen(sMenuId, sUserParam, sOption, sCallBack);
         */
        this.fnMenuPopOpen = function(sMenuId, sUserParam, sOption, sCallBack)
        {
            var objDsMenu = UXBooster.LeftFrame.form.dsMenu;
            //this.divLeft.form.fnMenuSelect(objDsMenu, sMenuId, sUserParam, "", true);
            this.divLeft.form.fnMenuSelect(objDsMenu, sMenuId, sUserParam, sCallBack, true, sOption);
        };


        /**
         * fnMdiMenuOpen : 메뉴가 없는 화면 오픈
         * @param  {String} sMenuId   메뉴 아이디
         * @param  {String} sParam    파라메터
         * @param  {String} sCallFunc 콜백
         * @return {N/A} N/A
         * @example this.fnMdiMenuOpen(sMenuId, sParam, sCallFunc);
         */
        this.fnNexaFormOpen = function(sFormUrl, sParam, sCallFunc, bNewOpen, sMenuNm)
        {
            //수정 필요
            var objDs, objMenuDs, objColInfo, objWorkForm, objMdiForm;
            var arrMenu;
            var nCnt, nFRow, nNRow, nMdiCnt, nIdx, nOrgFRow;
            var sMenuId, sMenuCd;
            var bOpen;

            nMdiCnt = parseInt(nexacro.getApplication().av_nMdiCnt);

            //오픈 메뉴 데이터 셋
        	objMenuDs = UXBooster.LeftFrame.form.dsMenu;
            objDs = UXBooster.MdiFrame.form.dsOpenMenu;

            //이미 열려잇는 화면이 있는지 확인
            sMenuId = sFormUrl.replace(".xfdl", "");
        	arrMenu = sMenuId.split("::");
            nFRow = objDs.findRowAsNF("MENU_URL", arrMenu[1]);

        	nOrgFRow = objMenuDs.findRowAsNF("MENU_URL", arrMenu[1]);
        	sMenuCd = objMenuDs.getColumnNF(nOrgFRow, "MENU_CD");
        	sMenuNm = take.nvl(sMenuNm, objMenuDs.getColumnNF(nOrgFRow, "MENU_NM"));

            //이미 열려있는 화면이 있을경우 해당 화면을 Active
            if (nFRow>=0)
            {
                objMdiForm = this.fnActiveMenu(objDs, nFRow);
                objWorkForm = objMdiForm.form.divForm;

                if (bNewOpen)
                {
                    if (this.getOwnerFrame().form.fnMdiDestroy(objMdiForm))
                    {
                        bOpen = true;
                    } else {
                        take.trace("System", "ERROR", "MDI 제거 실패");
                        bOpen = false;
                        return;
                    }
                } else {
                    objWorkForm.UserParam = sParam;
                    objWorkForm.form.UserParam = sParam;

                    if (take.nvl(sCallFunc,"")!="")
                    {
                        if (take.isFunction(objWorkForm.form[sCallFunc]))
                        {
                            objWorkForm.form[sCallFunc].call(objWorkForm.form,sParam);
                        }
                    }
                    bOpen = false;
                    return;
                }

            } else {
                bOpen = true;
            }

            if (bOpen)
            {
                if (objDs.rowcount>=nMdiCnt)
                {
                    //MDI Tab은 {count}개 까지만 생성이 가능합니다. 열려있는 Tab을 닫고 오픈해 주세요.
                    take.alert(this, "Info", "MDI Tab은 "+nMdiCnt+"개 까지만 생성이 가능합니다. 열려있는 Tab을 닫고 오픈해 주세요.");	//0081: MDI Tab은 8개 까지만 생성이 가능합니다. 열려있는 Tab을 닫고 오픈해 주세요.
                    return;
                } else {
                    //오픈 메뉴 데이터셋에 행 추가
        			nNRow = objDs.addRow();
                    nIdx = sFormUrl.indexOf("::");

                    //메뉴에 컬럼 추가시 하드코딩 필요
        			var sProgId = sMenuId.substr(nIdx+2);
        			var sPrefix = sMenuId.substr(0,nIdx);
        			sMenuNm = take.nvl(sMenuNm, sProgId);
                    objDs.setColumn(nNRow, "MENU_NM", sMenuNm);
                    objDs.setColumn(nNRow, "MENU_CD", sProgId);
                    objDs.setColumn(nNRow, "MENU_URL", sProgId);
                    objDs.setColumn(nNRow, "PROGRAM_PREFIX", sPrefix);

                    //비동기라 오픈시점에서는 파라메터 못 넘김
                    this.fnMenuOpen(objDs, "03", nNRow, sParam);
                }
            }
        };

        /**
         * fnMdiClose : Mdi 화면 닫기
         * @param  {String}  sMenuId   메뉴 아이디
         * @return {N/A} N/A
         * @example this.fnMdiClose(sMenuId);
         */
        this.fnMdiClose = function(sMenuId)
        {
            var objDs, objWorkDiv, objWorkForm;
            var arrMenu;
            var sDivId, sMdiName;
            var nFRow;

            objDs = UXBooster.MdiFrame.form.dsOpenMenu;
        	objWorkForm = this.getOwnerFrame().form;

            //이미 열려잇는 화면이 있는지 확인

            if (sMenuId.indexOf(".xfdl")>=0)
            {
                sMenuId = sMenuId.replace(".xfdl", "");

                if (sMenuId.indexOf("::")>=0)
                {
                    arrMenu = sMenuId.split("::");
                    nFRow = objDs.findRowAsNF("MENU_URL", arrMenu[1]);
                } else {
                    nFRow = objDs.findRowAsNF("MENU_URL", sMenuId);
                }

            } else {
                nFRow = objDs.findRowAsNF("MENU_CD", sMenuId);
            }

            if (nFRow>=0)
            {
                sDivId = "divWork_" + objDs.getColumn(nFRow, "PROGRAM_PREFIX") + "_" + objDs.getColumn(nFRow, "MENU_CD");
                sMdiName = objDs.getColumn(nFRow, "MENU_NM")
                objWorkDiv = objWorkForm.components[sDivId];

                if (objWorkDiv)
                {
                    if (!objWorkForm.fnMdiDestroy(objWorkDiv))
                    {
                        take.trace("System", "ERROR", "MDI 제거 실패");
                    } else {
                        take.trace("System", "Info", sMdiName + " MDI 제거 성공");
                    }
                }
            } else {
                take.trace("System", "ERROR", "Open된 메뉴 또는 Form이 없습니다.");
            }
        }

        //메세지 팝업 오픈
        this.fnOpenMsgPop = function()
        {
            var objGrid, objDivMain, objPDiv;
            var nCnt, nHeight=0;
            var arrRowSize;

            objPDiv = this.pDivMsg;

            if (objPDiv.isPopup()==false)
            {
                trace("objPDiv.isPopup() == false");
                objDivMain = this.divMain;
                objGrid = this.pDivMsg.form.grdMsg;
                arrRowSize = objGrid._rowSizeList;
                nCnt = arrRowSize.length;

                for (var i=0; i<nCnt; i++)
                {
                    nHeight += arrRowSize[i];
                }

                objPDiv.trackPopupByComponent(objDivMain, objDivMain.getOffsetWidth()-300 , objDivMain.getOffsetHeight()-nHeight, 300, nHeight);
            }
        };

        /**
         * fnCallPopup : 공지사항 팝업 오픈
         * @param  {String}  sBoardSeq      공지사항 일련번호
         * @param  {String}  sBoardAttach   공지사항 첨부파일 코드
         * @param  {String}  sPopForm       폼 아이디
         * @return {N/A} N/A
         * @example this.fnCallPopup(sBoardSeq, sBoardAttach, "CM010P03");
         */
        this.fnCallPopup = function(sBoardSeq, sBoardAttach, sPopForm)
        {
        	var arrParam = {
        					sBoardSeq 	 : sBoardSeq
        				  , sBoardAttach : sBoardAttach
        				  , sProjectCd	 : this.fv_sProjectCd
        				  , sMenuCd		 : this.fv_sMenuCd
        				  };

        	take.openPopup(this, sPopForm, "frm::mod/"+sPopForm+".xfdl", arrParam, "resizable=true",
        		function(){
        		}
        	);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formid_onload,this);
            this.addEventHandler("ontimer",this.frmMain_ontimer,this);
            this.btnFold.addEventHandler("onclick",this.btnFold_onclick,this);
            this.pDivMsg.addEventHandler("onpopup",this.pDivMsg_onpopup,this);
            this.pDivMsg.form.grdMsg.addEventHandler("oncellclick",this.pDivMsg_grdMsg_oncellclick,this);
            this.dsMsg.addEventHandler("onrowposchanged",this.dsMsg_onrowposchanged,this);
        };
        this.loadIncludeScript("frmMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
