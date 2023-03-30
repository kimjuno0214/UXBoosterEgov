(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmHome");
            this.set_titletext("메인_메인_메인화면");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1220,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoticePop", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPds", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTopImg","0","0",null,"380","391",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_background("#2d2f3b");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0","1351","380",null,null,null,null,null,null,this.divTopImg.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_mainBg01");
            obj.set_text("");
            obj.set_fittocontents("none");
            this.divTopImg.addChild(obj.name, obj);

            obj = new Div("divInfo","divTopImg:0","0",null,"380","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staInfoBg","0","0",null,"380","0",null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("3");
            obj.set_background("#2d2f3b");
            this.divInfo.addChild(obj.name, obj);

            obj = new Static("staUser","50","123","270","51",null,null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("0");
            obj.set_text("사용자\r\n<fs v=\'11\'>{0}</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divInfo.addChild(obj.name, obj);

            obj = new Static("staIP","50","293","270","50",null,null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("2");
            obj.set_text("마지막 로그인 IP\r\n<fs v=\'11\'>{0}</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divInfo.addChild(obj.name, obj);

            obj = new Static("staLoginDt","50","208","270","50",null,null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("1");
            obj.set_text("마지막 로그인 날짜\r\n<fs v=\'11\'>{0}</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divInfo.addChild(obj.name, obj);

            obj = new Static("staUniv","50","38","270","50",null,null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("4");
            obj.set_text("소속\r\n<fs v=\'11\'>{0}</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divInfo.addChild(obj.name, obj);

            obj = new Div("divNotice","0","392",null,null,"0","1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","30","7","150","33",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MF_Title");
            this.divNotice.addChild(obj.name, obj);

            obj = new Grid("grdNotice01","27","53","44%",null,null,"35",null,null,null,null,this.divNotice.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_WF_trans");
            obj.set_autofittype("col");
            obj.set_binddataset("dsNotice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.parent.parent.fnSetTitle( currow, dataset.getColumn(currow, &apos;BOARD_TITLE&apos;) )\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\" cssclass=\"expr:IMPORT_YN == &apos;Y&apos; ? &apos;import&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:REG_DT\" color=\"#555555\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btnNoticeMore","grdNotice01:-27","6","28","28",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_more");
            this.divNotice.addChild(obj.name, obj);

            obj = new Static("Static08_00","grdNotice01:61","7","150","33",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("3");
            obj.set_text("자유게시판");
            obj.set_cssclass("sta_MF_Title");
            this.divNotice.addChild(obj.name, obj);

            obj = new Grid("grdNotice00","grdNotice01:61","53","44%",null,null,"35",null,null,null,null,this.divNotice.form);
            obj.set_taborder("4");
            obj.set_cssclass("grd_WF_trans");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPds");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.parent.parent.fnSetTitle( currow, dataset.getColumn(currow, &apos;BOARD_TITLE&apos;) )\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\" cssclass=\"expr:IMPORT_YN == &apos;Y&apos; ? &apos;import&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:REG_DT\" color=\"#555555\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btnNoticeMore00","grdNotice00:-27","6","28","28",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_more");
            this.divNotice.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopImg.form
            obj = new Layout("default","",0,0,this.divTopImg.form,function(p){});
            this.divTopImg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divInfo.form
            obj = new Layout("default","",0,0,this.divInfo.form,function(p){});
            this.divInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divNotice.form
            obj = new Layout("default","",0,0,this.divNotice.form,function(p){});
            this.divNotice.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1220,660,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmHome.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = "M0028";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		this.fnTopBgCenter(this.divTopImg);
        		this.fnUserInfoSet(this.fv_objGdsUserInfo);
        		this.fnSearch();
           }
        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){
        	//검색조건
        	var objDivSearch = this.divSearch.form;
        }
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "SearchNotice";

            this.dsSearch.setColumn(0, "PROJECT_CD", this.fv_sProjectCd);
        	this.dsSearch.setColumn(0, "MENU_CD", "M0009");

        	this.dsNotice.clearData();
        	take.tranSelect(this,"SearchNotice1","BoardManagement.boardInfoList","dsSearch", "dsNotice","", "fnCallback");

        	this.dsSearch.setColumn(0, "MENU_CD", "M0037");
        	this.dsPds.clearData();
        	//take.tranSelect(this,"SearchNotice2","BoardManagement.boardInfoList","dsSearch", "dsPds", "PROJECT_CD="+this.fv_sProjectCd + " MENU_CD='M0037'", "fnCallback");
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //divTopImg_onsize : Main Img Div 사이즈 변경 이벤트
        this.divTopImg_onsize = function(obj,e)
        {
        	this.fnTopBgCenter(obj);
        };

        //공지사항 more버튼 클릭 이벤트
        this.divNotice_btnNoticeMore_onclick = function(obj,e)
        {
        	take.mdiOpenMenu(this, "M0028", "", "", true);
        };

        //자료실 more버튼 클릭 이벤트
        this.divNotice_btnNoticeMore00_onclick = function(obj,e)
        {
        	take.mdiOpenMenu(this, "M0037", "", "", true);
        };

        this.fnCallPopup = function(sBoardSeq, sBoardAttach, sUrl)
        {
        	var arrParam = {
        			sBoardSeq 	 : sBoardSeq
        		  , sBoardAttach : sBoardAttach
        		  , sProjectCd	 : this.fv_sProjectCd
        		  , sMenuCd		 : this.fv_sMenuCd
        	};

        	take.openPopup(this, sUrl, "frm::mod/"+sUrl+".xfdl", arrParam, "resizable=true",
        		function(){
        		}
        	);
        };

        //공지사항 글 클릭 이벤트
        this.divNotice_grdNotice01_oncellclick = function(obj,e)
        {
        	this.fv_sMenuCd 	= "M0009";
        	var objDs 			= obj.getBindDataset();
        	var sBoardSeq 		= objDs.getColumn( objDs.rowposition, "BOARD_SEQ" );
        	var sBoardAttach 	= objDs.getColumn( objDs.rowposition, "BOARD_ATTACH" );

        	this.fnCallPopup(sBoardSeq, sBoardAttach, "CM010P02");
        };

        //자료실 글 클릭 이벤트
        this.divNotice_grdNotice00_oncellclick = function(obj,e)
        {
        	this.fv_sMenuCd 	= "M0037";
        	var objDs 			= obj.getBindDataset();
        	var sBoardSeq 		= objDs.getColumn( objDs.rowposition, "BOARD_SEQ" );
        	var sBoardAttach 	= objDs.getColumn( objDs.rowposition, "BOARD_ATTACH" );

        	this.fnCallPopup(sBoardSeq, sBoardAttach, "BM010P02");
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserInfoSet : 사용자 정보 세팅
         * @param  {Object} objDs UserInfo Dataset
         * @return {N/A}    N/A
         * @example this.fnUserInfoSet(nexacro.getApplication().gdsUserInfo);
         */
        this.fnUserInfoSet = function(objDs)
        {
            var sUniv, sUserId, sUserNm, sLastLoginDt, sLastLoginIp;
            var objDiv;

            objDiv = this.divInfo.form;

            sDeptNm   	 = take.nvl(objDs.getColumn(0,"DEPT_NM")   ,"-");
            sUserId      = take.nvl(objDs.getColumn(0,"USER_ID")    ,"-");
            sUserNm      = take.nvl(objDs.getColumn(0,"USER_NM")    ,"-");
            sLastLoginDt = take.nvl(objDs.getColumn(0,"LAST_LOGIN_DT") ,"-");
            sLastLoginIp = take.nvl(objDs.getColumn(0,"LOGIN_IP")    ,"-");

        	objDiv.staUniv.set_text(take.replaceFormat(objDiv.staUniv.text, sDeptNm));
        	objDiv.staUser.set_text(take.replaceFormat(objDiv.staUser.text, sUserId + " (" + sUserNm + ")"));
        	objDiv.staLoginDt.set_text(take.replaceFormat(objDiv.staLoginDt.text, sLastLoginDt));
        	objDiv.staIP.set_text(take.replaceFormat(objDiv.staIP.text, sLastLoginIp));
        };

        /**
         * fnTopBgCenter : 리사이즈에 따라 탑 이미지 Left 좌표 변경
         * @param  {Object} objDiv Div
         * @return {N/A}    N/A
         * @example this.fnTopBgCenter(this.div00);
         */
        this.fnTopBgCenter = function(objDiv)
        {
            var objStaBg = objDiv.form.staBg;
            var nLeft = (objDiv.getOffsetWidth()-nexacro.toNumber(objStaBg.width))/2;
        	objStaBg.set_left(nLeft);
        };

        this.fnSetTitle = function( nRow, sTitle )
        {
        	var sImgUrl = "";
        	var sRegDt = take.nvl(this.dsNotice.getColumn(nRow, "REG_DT"), "");

        	if( "" != sRegDt )
        	{
        		sRegDt = sRegDt.replace(/-/gi, "");
        		sRegDt = sRegDt.substr(0, 8);
        		sRegDt = take.parseDate(sRegDt, "yyyyMMdd");
        		var sToday = take.parseDate(take.getTodayTime().date, "yyyyMMdd");
        		var sTerm = parseInt(take.getDateTerm(sRegDt, sToday));

        		if( 5 >= sTerm )
        		{
        			sImgUrl = "theme://images/img_icon_new.png";
        		}
        	}
        	return sImgUrl;
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
                case "SearchNotice1" :  //조회 콜백
                    //Script
                    break;
        		case "SearchNotice2" :  //조회 콜백
                    //Script
                    break;
                default :
                    break;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divTopImg.addEventHandler("onsize",this.divTopImg_onsize,this);
            this.divNotice.form.grdNotice01.addEventHandler("oncellclick",this.divNotice_grdNotice01_oncellclick,this);
            this.divNotice.form.btnNoticeMore.addEventHandler("onclick",this.divNotice_btnNoticeMore_onclick,this);
            this.divNotice.form.grdNotice00.addEventHandler("oncellclick",this.divNotice_grdNotice00_oncellclick,this);
            this.divNotice.form.btnNoticeMore00.addEventHandler("onclick",this.divNotice_btnNoticeMore00_onclick,this);
        };
        this.loadIncludeScript("frmHome.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
