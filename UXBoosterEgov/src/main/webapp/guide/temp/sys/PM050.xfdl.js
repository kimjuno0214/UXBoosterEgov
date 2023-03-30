(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM050");
            this.set_titletext("프로젝트관리_사용자관리_사용자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProjectUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboRole", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboRoleUser", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRoleT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboRole","staRoleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCboRole");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUser","staUserT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserList","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsProjectUserList");
            obj.set_autosizingtype("col");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"사용자코드\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"사용자ID\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"사용자명\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"영문명\" autosizecol=\"limitmin\"/><Cell col=\"5\" text=\"권한\" autosizecol=\"limitmin\" cssclass=\"cellImport\"/><Cell col=\"6\" text=\"부서\" autosizecol=\"limitmin\"/><Cell col=\"7\" text=\"직책\" autosizecol=\"limitmin\"/><Cell col=\"8\" text=\"이메일\" autosizecol=\"limitmin\"/><Cell col=\"9\" text=\"휴대폰번호\" autosizecol=\"limitmin\"/><Cell col=\"10\" text=\"전화번호\" autosizecol=\"limitmin\"/><Cell col=\"11\" text=\"FAX\" autosizecol=\"limitmin\"/><Cell col=\"12\" text=\"최종로그인\" autosizecol=\"limitmin\"/><Cell col=\"13\" text=\"등록자\" autosizecol=\"limitmin\"/><Cell col=\"14\" text=\"등록일\" autosizecol=\"limitmin\"/><Cell col=\"15\" text=\"수정자\" autosizecol=\"limitmin\"/><Cell col=\"16\" text=\"수정일\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:USER_CD\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_ID\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:USER_NM\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USER_ENG_NM\" autosizecol=\"limitmin\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsCboRole\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"combo\" combodisplayrowcount=\"5\" text=\"bind:ROLE_CD\" combodataset=\"dsCboRoleUser\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizecol=\"limitmin\"/><Cell col=\"6\" text=\"bind:DEPT_NM\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:USER_POSITION_NM\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:USER_EMAIL\" autosizecol=\"limitmin\"/><Cell col=\"9\" text=\"bind:USER_MOBILE\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:USER_TEL\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:USER_FAX\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:LAST_LOGIN_DT\" autosizecol=\"limitmin\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:REG_NM\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:REG_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" autosizecol=\"limitmin\" calendardisplaynulltype=\"none\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:MOD_NM\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:MOD_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" calendareditformat=\"yyyy-MM-dd HH:mm\" autosizecol=\"limitmin\" calendardisplaynulltype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserListT","10","0",null,"21","1179",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM050.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    pm > PM050
        *  @FileName    PM050.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.08.23
        *  @Version     1.0
        *  @Desction    프로젝트 사용자관리
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.23      김대승             최초 생성
        *  2020.04.03      고영민             사용자 여럿 저장시 프로젝트코드 넣도록 수정
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;  		 				// 글로변 변수_프로젝트코드
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM050_onload = function(obj, e)
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectUserList";

        	takeval.add(this, "Search", this.divSearch.form.cboProjectNm, "프로젝트", "value", true, "string", "", "");
        	if(!takeval.check(this, "Search")) return;

        	var objDivSearch = this.divSearch.form;
            switch(sTranId) {
        		case "projectUserList":
        			this.dsProjectUserList.clearData();
        			var sProjectCd = take.nvl(objDivSearch.cboProjectNm.value, "");	// 프로젝트명
        			var sRoleCd    = take.nvl(objDivSearch.cboRole.value, "");		// 권한
        			var sUserCd    = take.nvl(objDivSearch.edtUser.value, "");		// 사용자
        			take.tranSelect
        			(
        				this,
        				"projectUserList",
        				"ProjectManagement.projectUserList",
        				"",
        				"dsProjectUserList",
        				"PROJECT_CD='" + sProjectCd + "' ROLE_CD='" + sRoleCd + "' USER_CD='" + sUserCd + "'",
        				"fnCallback"
        			)
        		break;
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectUserSave";

        	if ( !take.isDsModified(this.dsProjectUserList) )
        	{
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        	switch(sTranId) {
        		// 저장
        		case "projectUserSave":
        			var sProjectCd 	= take.nvl(this.divSearch.form.cboProjectNm.value, "");
        			var objDs = this.dsProjectUserList;
        			var nCnt  = objDs.rowcount;

        			// 권한 선택 메시지
        			for(var i=0; i<nCnt; i++)
        			{
        				if ( take.nvl(objDs.getColumn(i, "ROLE_CD"), "") == "" )
        				{
        					//take.alert(this, "info", "권한을 선택해 주시기 바랍니다.");
        					take.alert(this, "Info", "MS00000011", {text:this.divSearch.form.staRoleT.text});
        					return;
        				}
        			}

        			//this.dsProjectUserList.setColumn(this.dsProjectUserList.rowposition, "PROJECT_CD", sProjectCd)
        			//take.tranSave
        			//(
        			//	this,
        			//	"projectUserSave",
        			//	"ProjectManagement.projectUser",
        			//	"dsProjectUserList",
        			//	"",
        			//	"",
        			//	"fnCallback"
        			//)
        			break;

        		// 삭제
        		case "projectUserDelete":
        			//take.tranSave
        			//(
        			//	this,
        			//	"projectUserDelete",
        			//	"ProjectManagement.projectUser",
        			//	"dsProjectUserList",
        			//	"",
        			//	"",
        			//	"fnCallback"
        			//)
        			break;
        		default:
        	}

        	take.transaction
        	(
        		this
        		, sTranId
        		, "SVC_LOC::pm/projectUserSave.do"
        		, "dsProjectUserList=dsProjectUserList:U"
        		, ""
        		, ""
        		, "fnCallback"
        	);
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdUserList";

        	var sProjectCd = this.divSearch.form.cboProjectNm.value;
            // 담당자 팝업 소스 작성
        	take.openPopup(this, "PM010P01", "biz::sys/PM010P01.xfdl", {sProjectCd:sProjectCd}, "",
        		function(sId, sCd){
        			var objDs = this.dsProjectUserList;
        			objDs.setColumn(objDs.rowposition, "PROJECT_CD", sProjectCd)
        		},
        	false);
        	//this.dsProjectUserList.addRow();
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdUserList";

        	var objDsProjUserList = this.dsProjectUserList;

        	if(objDsProjUserList.rowcount <= 0){
        		//take.alert(this, "info", "사용자가 없습니다.");
        		take.alert(this, "Info", "MS00000011", {text:this.divSearch.form.staUserT.text});
        		return;
        	}

        	var nRow     = objDsProjUserList.rowposition;
        	var nSelProj = objDsProjUserList.getColumn(nRow, "USER_NM");
        	var bRowChange = take.confirm(this, "question", "MS00000071");
        	//take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : nSelProj, text : "삭제"});

        	if (bRowChange)
        	{
        		objDsProjUserList.set_enableevent(false);
        		objDsProjUserList.set_updatecontrol(false);

        		objDsProjUserList.setRowType(objDsProjUserList.rowposition, "D");

        		objDsProjUserList.set_updatecontrol(true);
        		objDsProjUserList.set_enableevent(true);

        		this.fnSave("projectUserDelete");
        	}
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * divSearch_btnProjectSearch_onclick : 프로젝트 검색 팝업 오픈
        */
        this.divSearch_btnProjectSearch_onclick = function(obj,e)
        {

        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnUserFunction();
         */
        this.fnInit = function()
        {
        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

        	var sAdminYn = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	// gds _ 관리자권한 여부

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	this.divSearch.form.cboProjectNm.set_value(this.fv_sGdsProjectCd);

        	if(sAdminYn == "Y"){
        		this.divSearch.form.cboProjectNm.set_readonly(false);
        	}
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	// 프로젝트 코드, 권한 코드 멀티 셀렉트
        	var arrSelectCodes  = ["projectInfoCode", "ProjectManagement.projectUserRole"];
        	var arrSelectNameSp = ["ProjectManagement.projectInfoCode", "ProjectManagement.projectUserRole"];
        	var arrSelectOutDs  = ["dsCboProjectCd", "dsCboRole"];
        	take.tranSelect
        	(
        		this,
        		arrSelectCodes,
        		arrSelectNameSp,
        		"",
        		arrSelectOutDs,
        		"PROJECT_CD='"+this.fv_sGdsProjectCd+"'",
        		function(sId, nErrCd, sErrMsg)
        		{
        			var objDsCboProj = this.dsCboProjectCd;
        			if (objDsCboProj.rowcount>0)
        			{
        				var addInsertRow = objDsCboProj.insertRow(0)
        				objDsCboProj.setColumn(addInsertRow, "CODE", "");
        				objDsCboProj.setColumn(addInsertRow, "NAME", take.getWord(this, "MS00000079"));
        			}

        			var objDsCboRole = this.dsCboRole;
        			if (objDsCboRole.rowcount>0)
        			{
        				var addInsertRow1 = objDsCboRole.insertRow(0)
        				objDsCboRole.setColumn(addInsertRow1, "CODE", "");
        				objDsCboRole.setColumn(addInsertRow1, "NAME", take.getWord(this, "MS00000078"));
        				this.divSearch.form.cboRole.set_index(0);

        				this.dsCboRoleUser.copyData(objDsCboRole);
        				this.dsCboRoleUser.setColumn(0, "NAME", take.getWord(this, "MS00000079"));
        			}
        			this.fnSearch("projectUserList");
        		}
        	)

        };

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
                case "projectUserList" : //조회 콜백
        			if (this.dsProjectUserList.rowcount > 0){
        				var nRowCount = this.dsProjectUserList.rowcount;
        				this.divDetail.form.staUserListT.set_text("사용자 목록 ("+nRowCount+"건)");
        			}else {
        				this.divDetail.form.staUserListT.set_text("사용자 목록 (0건)");
        			}
                    //trace(this.dsProjectUserList.saveXML());
                    break;

                case "projectUserSave" :   // 저장 콜백
        			this.fnSearch("projectUserList");
                    break;

                case "projectUserDelete" : // 삭제 콜백
                    this.fnSearch("projectUserList");
                    break;
            }
        }

        this.divSearch_cboProjectNm_onitemchanged = function(obj,e)
        {
        	this.fv_sGdsProjectCd = take.nvl(this.divSearch.form.cboProjectNm.value, "");
        	this.fnCommonCode();
        };

        this.divSearch_edtUser_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch("projectUserList");
        	}
        };

        this.Static24_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM050_onload,this);
            this.divSearch.form.edtUser.addEventHandler("onkeyup",this.divSearch_edtUser_onkeyup,this);
            this.divSearch.form.cboProjectNm.addEventHandler("onitemchanged",this.divSearch_cboProjectNm_onitemchanged,this);
        };
        this.loadIncludeScript("PM050.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
