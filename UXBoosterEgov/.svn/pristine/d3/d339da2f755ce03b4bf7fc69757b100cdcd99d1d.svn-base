(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("메인 탑");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProjectList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SELECT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContent", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MINIMUM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RELOAD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_PROG\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_YN\" TYPE=\"STRING\" SIZE=\"256\" type=\"STRING\" size=\"256\"/><Column id=\"TITLEBAR_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDashCount", this);
            obj._setContents("<ColumnInfo><Column id=\"DASH_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_top_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("staTopLogo","46","0","190","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("staLogout",null,"0","40","40","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_top_icon04");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectList",null,"0","40","40","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_top_icon02");
            this.addChild(obj.name, obj);

            obj = new Static("staUserInfo",null,"0","280","40","90",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_top_admin");
            obj.set_text("XXXXX 시스템 IT 기획팀 XXX(관리자)");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pDivUserInfo",null,"40","270","174","0",null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #f4553b");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","0","10",null,null,"0",null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("Static22","10","0","220","10",null,null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("staUserNm","99","40",null,"31","10",null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("staLoginDt","99","70",null,"31","10",null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("staUserNmT","10","40","90","31",null,null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("4");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_th01L");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("staLoginDtT","10","70","90","31",null,null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("5");
            obj.set_text("로그인 일시");
            obj.set_cssclass("sta_WF_th01L");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Button("btnUserModify","85","141","100","23",null,null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("btn_WF_basic01");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"10","0",null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.3)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("#ff0000");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","10","10","90","31",null,null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("8");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_th01L");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("staProjectNm","99","10",null,"31","10",null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("Static04","0","131",null,"10","2",null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("staLoginIpT","10","100","90","31",null,null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("11");
            obj.set_text("로그인 IP");
            obj.set_cssclass("sta_WF_th01L");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("staLoginIp","99","100",null,"31","10",null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new Static("Static06","0","164",null,"10","2",null,null,null,null,null,this.pDivUserInfo.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.pDivUserInfo.addChild(obj.name, obj);

            obj = new PopupDiv("pDivProjectList",null,"222","180","280","0",null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #f4553b");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProjectList","0","0",null,null,"0","0",null,null,null,null,this.pDivProjectList.form);
            obj.set_taborder("0");
            obj.set_scrollbartype("none autoindicator");
            obj.set_nodatatext("No data.");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_binddataset("dsProjectList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"50\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell text=\"bind:PROJECT_NM\" border=\"0px none\" padding=\"0px 0px 2px 10px\"/><Cell col=\"1\" text=\"expr:SELECT_YN==&quot;Y&quot;?&quot;&quot;:&quot;이동&quot;\" displaytype=\"expr:SELECT_YN==&quot;Y&quot;?&quot;normal&quot;:&quot;buttoncontrol&quot;\" border=\"0px none\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.pDivProjectList.addChild(obj.name, obj);

            obj = new PopupDiv("pDivDashEdit",null,"42","235","400","-250",null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #f4553b");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdContents","5","105",null,null,"5","5",null,null,null,null,this.pDivDashEdit.form);
            obj.set_taborder("0");
            obj.set_scrollbartype("none autoindicator");
            obj.set_nodatatext("No data.");
            obj.set_autofittype("col");
            obj.set_binddataset("dsContent");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\" band=\"left\"/><Column size=\"48\"/><Column size=\"134\"/></Columns><Rows><Row size=\"35\"/></Rows><Band id=\"body\"><Cell text=\"bind:SEL_YN\" displaytype=\"checkboxcontrol\" border=\"1px solid #d7d7d7,1px none #d7d7d7,1px solid #d7d7d7,1px solid #d7d7d7\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"1\" border=\"1px solid #d7d7d7,0px solid #d7d7d7\" text=\"bind:DASH_TYPE_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DASH_NM\" border=\"1px solid #d7d7d7, 1px none #d7d7d7, 1px solid #d7d7d7, 1px solid #d7d7d7\"/></Band></Format></Formats>");
            this.pDivDashEdit.addChild(obj.name, obj);

            obj = new Button("btnAdd","5","40","110","30",null,null,null,null,null,null,this.pDivDashEdit.form);
            obj.set_taborder("1");
            obj.set_text("페이지추가");
            obj.set_cssclass("btn_WF_basic01");
            this.pDivDashEdit.addChild(obj.name, obj);

            obj = new Button("btnDel","119","40","110","30",null,null,null,null,null,null,this.pDivDashEdit.form);
            obj.set_taborder("2");
            obj.set_text("페이지삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.pDivDashEdit.addChild(obj.name, obj);

            obj = new Edit("edtContents","5","75",null,"25","5",null,null,null,null,null,this.pDivDashEdit.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("컨텐츠를 검색하세요.!!");
            this.pDivDashEdit.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"40","5",null,null,null,null,null,this.pDivDashEdit.form);
            obj.set_taborder("4");
            obj.set_text("대시보드 설정");
            obj.set_cssclass("sta_MF_Title");
            this.pDivDashEdit.addChild(obj.name, obj);

            obj = new Button("btnMenuShowHide","7","5","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_TF_show");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pDivUserInfo.form
            obj = new Layout("default","",0,0,this.pDivUserInfo.form,function(p){});
            this.pDivUserInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDivProjectList.form
            obj = new Layout("default","",0,0,this.pDivProjectList.form,function(p){});
            this.pDivProjectList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDivDashEdit.form
            obj = new Layout("default","",0,0,this.pDivDashEdit.form,function(p){});
            this.pDivDashEdit.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sProjectNm = nexacro.getApplication().av_sProjectNm;
        this.fv_sRoleCd	   = nexacro.getApplication().av_sRoleCd;
        this.fv_sDashCount = "";     //대시보드 추가/삭제
        this.fv_sDelYn = "N";        //대시보드 추가/삭제

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload)
         ********************************************************/
        //formid_onload 최초 로드시 발생되는 이벤트 (필수)
        this.frmTop_onload = function(obj, e)
        {
        	//this.ProgId = "GM00000096";
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		//var sUrl = nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC_LOC")].url;
        		var sUrl, sDateTime;
                var objDateTime = take.getTodayTime();

        		sUrl = take.getSvcUrl();
                sDateTime = objDateTime.date + objDateTime.time;

        		var sImg = "imgTakeTop.png";
        		this.staTopLogo.set_background('url("'+sUrl+'/images/logo/'+ sImg + '?' + sDateTime + '") no-repeat left center');

        		this.fnUserInfoSet(this.fv_objGdsUserInfo);

        		this.fnSetDashList();
           }
        }

        /*********************************************************
         * 2 필수 Function 영역
         ********************************************************/
        //N/A

        /*********************************************************
         * 3 Component EVENT 영역
         ********************************************************/
        //사용자 정보 스테틱 클릭 이벤트
        this.staUserInfo_onclick = function(obj,e)
        {
        	var objPdiv, objApp;

            objPdiv = this.pDivUserInfo;
            objApp = nexacro.getApplication();

            if (objPdiv.isPopup()==false)
            {
                objPdiv.trackPopupByComponent(obj, 100, 40, 270, 174);
            }
        };

        //대시보드 컨텐츠 클릭 이벤트
        this.staDashEdit_onclick = function(obj,e)
        {
        	var objPdiv, objApp;

            objPdiv = this.pDivDashEdit;
            objApp = nexacro.getApplication();

            if (objPdiv.isPopup()==false)
            {
                objPdiv.trackPopupByComponent(obj, 0, 40, 235, 400);
            }
        };

        //대시보드 컨텐츠 클릭 이벤트
        this.staProjectList_onclick = function(obj,e)
        {
        	var objPdiv, objApp;

            objPdiv = this.pDivProjectList;
            objApp = nexacro.getApplication();

            if (objPdiv.isPopup()==false)
            {
                objPdiv.trackPopupByComponent(obj, 0, 40, 180, 280);
            }
        };

        //프로젝트 리스트 팝업 그리드 셀 클릭 이벤트
        this.pDivProjectList_grdProjectList_oncellclick = function(obj,e)
        {
         	if (e.cell == 1)
        	{
        		if( obj.getCellPropertyValue(obj.getSelectedRows(), 1, "displaytype") == "buttoncontrol")
        		{
        			UXBooster.av_sProjectCd = this.dsProjectList.getColumn(this.dsProjectList.rowposition, "PROJECT_CD");
        			UXBooster.av_sProjectNm = this.dsProjectList.getColumn(this.dsProjectList.rowposition, "PROJECT_NM");

        			//20210127 고영민 프로젝트 변경시 프로젝트명, 프로젝트 코드, 데시보드 카운트 갱신 처리
                    var objGdsUser = UXBooster.gdsUserInfo;
        			objGdsUser.setColumn(0,"PROJECT_CD",UXBooster.av_sProjectCd);
                    objGdsUser.setColumn(0,"PROJECT_NM",UXBooster.av_sProjectNm);

        			//20210129 정해원 프로젝트코드 변경 시 대시보드 카운트 리로드
        			this.fnGetDashCountAsync(this,
        				function(){
        					var nDashCount = this.dsDashCount.getColumn(0, "DASH_COUNT");
        					this.fnSetGdsDashCount(nDashCount);
        					this.getOwnerFrame().form.reload();
        				}
        			);
        		}
         	}
        };

        //사용자 정보 팝업 내 정보 수정 버튼 클릭 이벤트
        this.pDivUserInfo_btnUserModify_onclick = function(obj,e)
        {
        	//20210115 정해원 주석처리
        	//개발이 안되어 있음 -> 비밀번호 변경창으로 대체
        	/*
        	var sParam = {sId:"kjp3904", sValue:"test"};
        	var sUrl = "frm::frmMainP02.xfdl";
        	take.mdiOpenMenu(this, sUrl, sParam, "", true, "내정보수정");

        	this.pDivUserInfo.closePopup();
        	*/
        	take.openPopup(this, "frmMainP02S01", "frm::frmMainP02S01.xfdl", "", "", "fnPopCallback");
        	this.pDivUserInfo.closePopup();
        };


        //탑 로고 클릭 이벤트
        this.staTopLogo_onclick = function(obj,e)
        {
        	var objFrameForm;

            objFrameForm = this.getOwnerFrame().form;

        	objFrameForm.divMain.set_visible(true);
            objFrameForm.divMain.set_enable(true);

        	objFrameForm.fnSearch("SearchNoticeTimer");
        // 	objFrameForm.divMain.set_url("");
        // 	objFrameForm.divMain.set_url("frm::frmHome.xfdl");

        	objFrameForm.divMain.bringToFront();
        };


        //로그아웃 클릭 이벤트
        this.staLogout_onclick = function(obj,e)
        {
        	nexacro.getApplication().afnLogOut(this);
        };

        //대시보드 컨텐츠 팝업 그리드 셀 클릭 이벤트
        this.pDivDashEdit_grdContents_oncellclick = function(obj,e)
        {
        	//20210126 정해원 대시보드 맨위로
        	if(!this.fnBringToFront()){
        		return;
        	}

        	var objDs, objDashData;
            var sMinimumYn, sType, sGbn;
            var bSucc;
            var nIdx;

            nIdx = this.getOwnerFrame().form.divMain.form.getStepIndex();

            objDs = obj.getBindDataset();
            objDashData = new Object();

        	//20210127 정해원 이미 선택 된 경우 return
        	if(objDs.getColumn(e.row, "SEL_YN") == 'Y'){
        		return;
        	}

            sMinimumYn = objDs.getColumn(e.row, "MINIMUM_YN");
            sType = objDs.getColumn(e.row, "DASH_TYPE");

            sGbn = take.nvl(objDs.filterstr, "");

            objDashData.dash_type = sType;

            if (sGbn=="")
            {
                if (sMinimumYn=="Y")
                {
                    //작은 컨텐츠가 있는 대쉬보드입니다. 작은 컨텐츠로 보시겠습니까.?
                    //bSucc = take.confirm(this, "question", "S0023", {text1:"E0025", text2:"E0009"});
                    bSucc = take.confirm(this, "question", "{text1}가 있는 {text2}입니다. {text1}로 보시겠습니까.?", {text1:"작은 컨텐츠", text2:"대쉬보드"});

                    if (bSucc) objDashData.dash_type = "11";
                }
            } else {
                //'' 안에 있는 데이터를 가져온다.
                sGbn = sGbn.match(/[\'][^\']+[\']/)[0];

                if (sGbn=="'Y'") objDashData.dash_type = "11";
            }

            objDashData.dash_id = objDs.getColumn(e.row, "DASH_CD");
            objDashData.dash_nm = objDs.getColumn(e.row, "DASH_NM");
            objDashData.reload_cnt = objDs.getColumn(e.row, "RELOAD_CNT");
            objDashData.dash_url = objDs.getColumn(e.row, "DASH_URL");
            objDashData.detail_prog = objDs.getColumn(e.row, "DETAIL_PROG");
            objDashData.reloadtime = objDs.getColumn(e.row, "RELOAD_CNT");
            //objDashData.criterion_type = objDs.getColumn(e.row, "CRITERION_TYPE");
            objDashData.dash_prefix = objDs.getColumn(e.row, "DASH_PREFIX");
            objDashData.titlebar_yn = objDs.getColumn(e.row, "TITLEBAR_YN");
            objDashData.dash_param = objDs.getColumn(e.row, "DASH_PARAM");
            //trace(nIdx);
            //this.getOwnerFrame().form.divMain.form.fv_arrDivComp[nIdx].form.fnEditDash(objDashData);
            //~(대쉬보드)을 선택하셨습니다. \n원하는 위치에 아이콘을 마우스로 클릭해주세요. \n'ESC'키를 누루면 취소됩니다.
            //take.alert(this, "Info", "S0018", {text1:objDashData.dash_nm});
            take.alert(this, "Info", "{text1}(대쉬보드)을 선택하셨습니다. \n원하는 위치에 아이콘을 마우스로 클릭해주세요. \n'ESC'키를 누루면 취소됩니다.", {text1:objDashData.dash_nm});

            this.getOwnerFrame().form.divMain.form.fnEditMode(objDashData);
        };

        //대시보드 컨텐츠 팝업 컨텐츠 검색 에디터 키 업 이벤트
        this.pDivDashEdit_edtContents_onkeyup = function(obj,e)
        {
            if (take.nvl(obj.value,"")=="")
            {
                this.dsContent.filter("");
            } else {
                this.dsContent.filter("DASH_NM.match('"+ obj.value +"')");
            }
        };

        //+1을 해줘야 함
        //DASH_COUNT는 페이지 개수라기보단 0부터 시작하고 있으니 LAST INDEX를 의미함
        this.fnGetGdsDashCount = function(){
        	return nexacro.toNumber(take.nvl(nexacro.getApplication().gdsUserInfo.getColumn(0,"DASH_COUNT"),0)) + 1;
        };

        this.fnSetGdsDashCount = function(nDashCount){
        	nexacro.getApplication().gdsUserInfo.setColumn(0,"DASH_COUNT", nexacro.toNumber(take.nvl(nDashCount, 0)));
        };

        //대시보드 컨텐츠를 삭제하거나 페이지를 삭제 할 경우 gdsUserInfo의 dash_count를 다시 로드 해야 함
        //사용자의 현재 project_cd로 대시보드 카운트를 조회 해야 함
        //프로젝트 변경 시 gdsUserInfo의 dash_count또한 reload 할 수 있을까?
        //대입할 위치 : 컨텐츠 추가, 컨텐츠 삭제, 페이지 추가, 페이지 삭제
        //동기
        this.fnGetDashCountAsync = function(pThis, fnCallBack){
        	this.dsDashCount.clearData();
        	take.tranSelect(this, "dashCountSelect", "Main.userDashCount", "", "dsDashCount", "",
        		function(){
        			try {
        				if (typeof fnCallBack == "function") {
        					fnCallBack.call(pThis);
        				} else if(typeof fnCallBack == "string") {
        					if (!take.isFunction(pThis[fnCallBack])){
        						return;
        					} else {
        						this[fnCallBack].call(objForm);
        					}
        				}
        			} catch(e) {
        				console.dir(e);
        			}
        		}
        	);
        };

        //대시보드 맨위로
        this.fnBringToFront = function(){
        	if(UXBooster.MdiFrame.form.divTab.objActiveWork){
        		//이미 열어놓은 페이지가 있을 경우
        		UXBooster.MdiFrame.form.divTab.objActiveWork = null;

        		if(take.confirm(this, "question", "MS00000051", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?")){
        			UXBooster.WorkFrame.set_visible(true);
        			UXBooster.WorkFrame.set_enable(true);

        			this.getOwnerFrame().form.fnDisableMenu();

        			UXBooster.WorkFrame.bringToFront();

        			return true;
        		}

        	}else{
        		return true;
        	}

        	return false;
        };

        //삭제저장
        this.fnSaveDashBoard = function(nPage, fnCallback){
        	var sParam = "sProjectCd='" + this.fv_sProjectCd + "' sDelYn='Y' sPageNo='" + nPage + "'";

        	take.transaction(
        		this,
        		"delPage",
        		"SVC_LOC::comm/userConfigUpdate.do",
        		"",
        		"",
        		sParam,
        		fnCallback
        	);
        };

        //대시보드 컨텐츠 팝업 설정 추가 삭제 버튼 클릭이벤트
        this.pDivDashEdit_btnDash_onclick = function(obj,e)
        {
        	//20210126 정해원 대시보드 맨위로
        	if(!this.fnBringToFront()){
        		return;
        	}

            var nPage, nCnt, nMaxCnt;
            var bSucc;
            var objForm;
            var sParam;

            nMaxCnt = 5;
            nCnt = this.fnGetGdsDashCount();

        	//CASE1) 기존에 페이지가 하나 있고 페이지 추가 후 기존페이지를 삭제하려 할 경우
        	//CASE2) 기존에 페이지가 하나 있고 페이지 추가 후 추가한 페이지를 삭제하려 할 경우
        	//CASE3) 이미 컨텐츠가 있는 상태에서 추가/삭제는 이상없어 보임

        	//추가했는데 이미 있는경우?
        	objForm = this.getOwnerFrame().form.divMain.form;

            if (obj.name.substr(3)=="Add")
            {
        		//20210126 정해원 이미 추가한 페이지가 있을 경우(대시보드 컨텐츠 추가 전)
        		if(objForm.stepselector.stepcount == (nCnt+1)){
        			take.alert(this, "Info", "편집중인 페이지가 있습니다.");
        			objForm.setStepIndex(nCnt);	//추가한 페이지로 이동
        			return;
        		}

                if (nCnt<nMaxCnt)
                {
                    nCnt++;
                    this.fv_sDelYn = "N";
                } else {
                    //대시보드는 최대 5개까지만 추가할 수 있습니다.
                    //take.alert(this, "Info", "S0015", {name:"E0009"});
                    take.alert(this, "Info", "{name}는 최대 {count}개까지만 추가할 수 있습니다.", {name:"대시보드 페이지", count:nMaxCnt});
                    return;
                }
            } else {
                if (nCnt>0)
                {
                    //현재 페이지를 삭제 하시겠습니까?
                    //bSucc = take.confirm(this, "Info", "S0019", {text:"E0024"});
                    bSucc = take.confirm(this, "Info", "{text}를 삭제 하시겠습니까?", {text:"현재 페이지"});

                    if (bSucc)
                    {
                        nCnt--;
                        this.fv_sDelYn = "Y";
                    } else {
                        return;
                    }

                } else {
                    //삭제할 대시보드 페이지가 업습니다.
                    //take.alert(this, "Info", "S0016", {name:"E0009"});
                    take.alert(this, "Info", "{name}할 {text}가 없습니다.", {name:"삭제",text:"대시보드 페이지"});
                    return;
                }
            }

            if (this.fv_sDelYn=="Y")
            {
                nPage = objForm.getStepIndex();
                objForm.fnRemovePage(nPage,true);

                objForm.stepselector.set_stepcount(nCnt);
                objForm.setStepIndex(0);

        		//페이지추가하고 컨텐츠 추가 없이 삭제했을 경우 transaction 불필요
        		//if (take.nvl(nexacro.getApplication().gdsUserInfo.getColumn(0,"DASH_COUNT"), "")==this.fv_sDashCount) return;
        		//DB의 DASH_COUNT와 현재 DASH_COUNT가 동일하다면 RETURN
        		this.fnGetDashCountAsync(this,
        			function(){
        				var nDashCount = this.dsDashCount.getColumn(0, "DASH_COUNT");
        				if(nDashCount == (nCnt-1)){
        					return;
        				}

        				this.fnSaveDashBoard(nPage,
        					function(){
        						this.fnGetDashCountAsync(this,
        							function(){
        								var nDashCount = this.dsDashCount.getColumn(0, "DASH_COUNT");
        								this.fnSetGdsDashCount(nDashCount);
        								this.getOwnerFrame().form.divMain.form.reload();

        								//대시보드 목록 재조회
        								this.fnSetDashList();
        							}
        						);
        					}
        				);
        			}
        		);
            } else {
                objForm.stepselector.set_stepcount(nCnt);
                objForm.fnNewPage((nCnt-1),true);
                objForm.setStepIndex((nCnt-1));
            }
        };

        this.btnShowHide_onclick = function(obj,e)
        {
            var sCss;
            var objMain;

            objMain = this.getOwnerFrame().form;

            sCss = obj.cssclass;

            if (sCss=="btn_TF_show")
            {
                obj.set_cssclass("btn_TF_hide");
                objMain.btnFold.fnShowHide(true);
            } else {
                obj.set_cssclass("btn_TF_show");
                objMain.btnFold.fnShowHide(false);
            }
        };
        /*********************************************************
         * 4 User Function 영역
         ********************************************************/
        /**
         * fnUserInfoSet : 사용자 정보 세팅
         * @param  {Object} objDs UserInfo Dataset
         * @return {N/A}    N/A
         * @example this.fnUserInfoSet(nexacro.getApplication().gdsUserInfo);
         */
        this.fnUserInfoSet = function(objDs)
        {
        	// 프로젝트 리스트
        	take.tranSelect(this, "ProjectList", "Main.userProjectSelect", "", "dsProjectList", "sProjectCd='" + UXBooster.av_sProjectCd + "'",
        				function(sId, nErrCd, sErrMsg){

        				});

        	var sDeptNm   	 = take.nvl(objDs.getColumn(0,"DEPT_NM")   ,"");
            var sUserId      = take.nvl(objDs.getColumn(0,"USER_ID")    ,"");
            var sUserNm      = take.nvl(objDs.getColumn(0,"USER_NM")    ,"");
        	var sLastLoginDt = take.nvl(objDs.getColumn(0,"LAST_LOGIN_DT") ,"");
            var sLastLoginIp = take.nvl(objDs.getColumn(0,"LOGIN_IP")    ,"");

        	//var sUserInfo = this.fv_sProjectNm + " " + sDeptNm + " " + sUserNm + " ( "+sUserId+" )";
        	var sUserInfo = sUserNm + " ( "+sUserId+" )";
        	this.staUserInfo.set_text(sUserInfo);

        	this.pDivUserInfo.form.staProjectNm.set_text(this.fv_sProjectNm);
        	this.pDivUserInfo.form.staUserNm.set_text(sUserNm);
        	this.pDivUserInfo.form.staLoginDt.set_text(sLastLoginDt);
        	this.pDivUserInfo.form.staLoginIp.set_text(sLastLoginIp);
        }

        /**
         * fnSetDashList : 대시보드 컨텐츠 목록 가져오기
         * @param  {N/A}    N/A
         * @return {N/A}    N/A
         * @example this.fnSetDashList();
         */
        this.fnSetDashList = function ()
        {
        	var sProjectCd = take.nvl(this.fv_objGdsUserInfo.getColumn(0, "PROJECT_CD"), "");
        	//210216 정해원 다중권한을 갖고 있을 수 있으므로
        	//권한코드를 넘기지 않고 쿼리에서 권한테이블 JOIN하도록 변경
        	//var sRoleCd    = take.nvl(this.fv_objGdsUserInfo.getColumn(0, "ROLE_CD"), "");

        	//trace(sProjectCd)
        	//trace(sRoleCd)

        	//take.tranSelect
        	//(
        	//	this,
        	//	"dashTopListSearch",
        	//	"DashManagement.dashTopListSearch",
        	//	"",
        	//	"dsContent",
        	//	"PROJECT_CD='" + sProjectCd + "'"/* ROLE_CD='" + sRoleCd + "'"*/,
        	//	function(sId, nErrCd, sErrMsg)
        	//	{
        	//		//trace(this.dsContent.saveXML());
        	//	}
         	//);
        };

        /**
         * fnDashCheck : 대시보드 체크
         * @param  {Boolean} bCheck  체크 여부
         * @param  {String}  sDashId 대시보드 아이디
         * @example this.fnDashCheck(true, "D000000001");
        */
        this.fnDashCheck = function(bCheck, sDashId)
        {
            //변수 선언
            var nFRow, nFCnt;
            var objDs = this.dsContent;

            //해당 대쉬보드 갯수 확인
            nFCnt = objDs.getCaseCount( "DASH_CD == '"+ sDashId +"'" );

            //2개인상인 경우 리턴
            if (nFCnt>1) return;

            //대쉬보드 아이디로 해당 Row 찾기
            nFRow = objDs.findRow("DASH_CD", sDashId);

            //해당 조건의 대시보드 아이디가 있을경우
            if (nFRow>=0)
            {
                //체크값 세팅
                if (!objDs.setColumn(nFRow, "SEL_YN", (bCheck?"Y":"N")))
                {
                    //take.trace("System", "ERROR", "대시보드리스트 체크 실패");
                    take.trace("System", "Info", sDashId + "(" + nFRow + ")대시보드리스트 체크 실패");
                }
            } else {
                //take.trace("System", "ERROR", "대시보드리스트 체크 실패");
                take.trace("System", "Info", sDashId + "(" + nFRow + ")대시보드리스트 체크 실패");
            }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmTop_onload,this);
            this.staTopLogo.addEventHandler("onclick",this.staTopLogo_onclick,this);
            this.staLogout.addEventHandler("onclick",this.staLogout_onclick,this);
            this.staProjectList.addEventHandler("onclick",this.staProjectList_onclick,this);
            this.staUserInfo.addEventHandler("onclick",this.staUserInfo_onclick,this);
            this.pDivUserInfo.form.btnUserModify.addEventHandler("onclick",this.pDivUserInfo_btnUserModify_onclick,this);
            this.pDivProjectList.form.grdProjectList.addEventHandler("oncellclick",this.pDivProjectList_grdProjectList_oncellclick,this);
            this.pDivDashEdit.form.grdContents.addEventHandler("oncellclick",this.pDivDashEdit_grdContents_oncellclick,this);
            this.pDivDashEdit.form.btnAdd.addEventHandler("onclick",this.pDivDashEdit_btnDash_onclick,this);
            this.pDivDashEdit.form.btnDel.addEventHandler("onclick",this.pDivDashEdit_btnDash_onclick,this);
            this.pDivDashEdit.form.edtContents.addEventHandler("onkeyup",this.pDivDashEdit_edtContents_onkeyup,this);
            this.btnMenuShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
