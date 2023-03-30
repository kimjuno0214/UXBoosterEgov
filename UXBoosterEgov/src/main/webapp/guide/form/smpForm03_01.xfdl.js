(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpForm03_01");
            this.set_titletext("Sample03_01 - CRUD");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"USER_STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPushYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staDeptT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDept","staDeptT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","47.12%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleL","0","0",null,"21","770",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("부서 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleR","270","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitleL:5","250",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsDept");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_scrollbarsize("10");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"138\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CD\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDetail","grdList:20","staTitleR:5",null,null,"0","430",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("col");
            obj.getSetter("takegrid").set("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사용자 ID\"/><Cell col=\"1\" text=\"사용자명\"/><Cell col=\"2\" text=\"사용자 영문명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"직위\"/><Cell col=\"5\" text=\"이메일\"/><Cell col=\"6\" text=\"휴대폰번호\"/><Cell col=\"7\" text=\"전화번호\"/><Cell col=\"8\" text=\"팩스\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_NM\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:USER_ENG_NM\" autosizerow=\"limitmin\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USER_POSITION_NM\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:USER_EMAIL\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"bind:USER_MOBILE\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:USER_TEL\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:USER_FAX\" autosizerow=\"limitmin\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleSub","270","grdDetail:20",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("사용자 일정 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdSubDetail","270","staTitleSub:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsSubList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_autoupdatetype("comboselect");
            obj.getSetter("takegrid").set("crud");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사용자명\" cssclass=\"cellImport\"/><Cell col=\"1\" text=\"일정 일련번호\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"일정시작일자\" cssclass=\"cellImport\"/><Cell col=\"3\" text=\"일정시작시간\"/><Cell col=\"4\" text=\"일정종료일자\" cssclass=\"cellImport\"/><Cell col=\"5\" text=\"일정종료시간\"/><Cell col=\"6\" text=\"일정제목\"/><Cell col=\"7\" text=\"일정내용\"/><Cell col=\"8\" text=\"일정장소\"/><Cell col=\"9\" text=\"푸쉬사용여부\"/><Cell col=\"10\" text=\"등록일시\"/><Cell col=\"11\" text=\"등록자\"/><Cell col=\"12\" text=\"수정일시\"/><Cell col=\"13\" text=\"수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_NM\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"bind:SCHEDULE_SEQ\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:SCHEDULE_START_DATE\" edittype=\"date\" textAlign=\"center\" autosizerow=\"limitmin\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"3\" text=\"bind:SCHEDULE_START_TIME\" edittype=\"text\" maskeditformat=\"##:##\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" editinputtype=\"number\" autosizerow=\"limitmin\" editmaxlength=\"4\"/><Cell col=\"4\" text=\"bind:SCHEDULE_END_DATE\" edittype=\"date\" textAlign=\"center\" autosizerow=\"limitmin\" calendardateformat=\"yyyy-MM-dd \" calendardisplayinvalidtext=\" \"/><Cell col=\"5\" text=\"bind:SCHEDULE_END_TIME\" edittype=\"text\" maskeditformat=\"##:##\" textAlign=\"center\" displaytype=\"mask\" maskedittype=\"string\" editinputtype=\"number\" autosizerow=\"limitmin\" editmaxlength=\"4\"/><Cell col=\"6\" text=\"bind:SCHEDULE_TITLE\" edittype=\"text\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:SCHEDULE_TXT\" edittype=\"text\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"8\" text=\"bind:SCHEDULE_PLACE\" textAlign=\"center\" edittype=\"text\" autosizerow=\"limitmin\"/><Cell col=\"9\" text=\"bind:PUSH_YN\" textAlign=\"center\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsCboPushYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\"/><Cell col=\"10\" text=\"bind:REG_DT\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"11\" text=\"bind:REG_NM\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"12\" text=\"bind:MOD_DT\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"13\" text=\"bind:MOD_NM\" textAlign=\"center\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
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

            obj = new Static("Static00_00","10","822",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","1649","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
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
        this.registerScript("smpForm03_01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    smpForm03_01.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.10.20
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.10.20      김대승             최초 생성
        *  2021.05.18      신준민             tranSave -> transaction 변경
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
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //초기화
                this.fnInit();
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
        	var objDivSearch;

        	objDivSearch = this.divSearch.form;

        	//공통코드
        	this.fnCommonCode();

        	//벨리데이션 등록
        	takeval.add(this, "Search", objDivSearch.cboUseYn, objDivSearch.staUseYnT.text, "value", true, "string", "", "");
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
            if (take.nvl(sTranId, "")=="") sTranId = "deptSelect";

        	// Object
        	var objDsDept, objDsList, objDsSubList, objDivSearch;
        	// Variable
        	var sDeptCd, sDeptNm, sUserCd, sUseYn;

        	objDsDept 	 = this.dsDept;
        	objDsList 	 = this.dsList;
        	objDsSubList = this.dsSubList;
        	objDivSearch = this.divSearch.form;

        	switch(sTranId) {
                case "deptSelect":
        			// 벨리데이션 체크
        			if(!takeval.check(this, "Search")) return;

                    objDsDept.clearData();
        			objDsList.clearData();
        			objDsSubList.clearData();

                    sDeptNm = take.nvl(objDivSearch.edtDept.value, "");
                    sUseYn  = objDivSearch.cboUseYn.value;

                    take.tranSelect
        			(
                        this,
                        sTranId,
                        "Sample.smpForm03DeptSelect",
                        "",
                        "dsDept",
                        "sDeptNm=" + sDeptNm + " sUseYn=" + sUseYn,
                        "fnCallBack",
                        false
                    );
                    break;

                case "userSelect":
        			objDsList.clearData();
        			objDsSubList.clearData();

                    sDeptCd = objDsDept.getColumn(objDsDept.rowposition, "DEPT_CD");

        			take.tranSelect
        			(
                        this,
                        sTranId,
                        "Sample.smpForm03Select",
                        "",
                        "dsList",
                        "sDeptCd=" + sDeptCd,
                        "fnCallBack"
        			);
                    break;

        		case "SubSelect":
        			objDsSubList.clearData();

        			sUserCd = objDsList.getColumn(objDsList.rowposition, "USER_CD");

        			take.tranSelect
        			(
        				this,
        				sTranId,
        				"Sample.smpForm03SubSelect",
        				"",
        				"dsSubList",
        				"sUserCd=" + sUserCd,
        				"fnCallBack"
        			);
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
            if (take.nvl(sTranId, "")=="") sTranId = "userSave";

            //데이터셋 수정 여부 확인
            if (!take.isDsModified(this.dsSubList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	//저장 전 벨리데이션 체크
        	var bRtn =
        		takeval.checkComp
        		(
        			this,                           	 //현재 Form Object
        			this.divDetail.form.grdSubDetail,    //벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
        			"cellImport",                    	 //필수 입력 css값
        			"fnValCallBack",                 	 //성공 Call Back 함수
        			true								 //동기 여부
        		);

        	//벨리데이션 체크 완료 후
        	if (bRtn)
        	{
        		//take.tranSave(this, sTranId, "Sample.smpForm03", "dsSubList", "", "", "fnCallBack");
                take.transaction(this, sTranId, "SVC_LOC::sample/smpForm03Save.do", "dsSubList=dsSubList:U", "", "", "fnCallBack");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdDetail";

        	// Object
        	var objDsSub, objDsList;
        	// Variable
        	var nAddRow, nRowPosition;
        	var sDeptCd;

        	objDsSub   = this.dsSubList;
        	objDsList  = this.dsList;

        	nRowPosition = objDsList.rowposition;
        	nAddSubRow   = objDsSub.addRow();

        	// 마스터 KEY
        	objDsSub.setColumn(nAddSubRow, "USER_CD", objDsList.getColumn(nRowPosition, "USER_CD"));
        	objDsSub.setColumn(nAddSubRow, "USER_NM", objDsList.getColumn(nRowPosition, "USER_NM"));

        	// 쿼리 - 자동 채번
        	objDsSub.setColumn(nAddSubRow, "SCHEDULE_SEQ", "-자동입력-");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdSubDetail";

        	// Object
        	var objDsSubList;
        	// Variable
        	var arrChk;

        	objDsSubList = this.dsSubList;
        	arrChk 	     = take.getChkRow(objDsSubList);

        	if(arrChk.length > 0) {
        		if (take.confirm(this, "Info", "삭제 하시겠습니까?."))
                {
                    objDsSubList.deleteMultiRows(arrChk);
                }
        	} else {
        		take.alert(this, "Info", "선택된 행이 없습니다.");
                return;
        	}
        }

        /**
         * fnExcel : 엑셀 다운로드 함수 (필수) --> 공통 엑셀 다운로드에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @return {N/A} N/A
         * @example this.fnExcel(sGrdId, nRow);
         */
        this.fnExcel = function(sGrdId)
        {
            return false;
        }

        /**
         * fnPrint : 출력 함수 (필수)
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnPrint();
         */
        this.fnPrint = function()
        {
            return false;
        }
        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //부서 목록 선택 변경이벤트
        this.divDetail_grdList_onselectchanged = function(obj,e)
        {
            this.fnSearch("userSelect");
        };

        //데이터셋 row 변경 이벤트 발생 전
        this.dsDept_canrowposchange = function(obj,e)
        {
        	//데이터셋 수정 여부 확인
            if (take.isDsModified(this.dsSubList))
            {
                //행 변경 수행 여부 확인
                if (!take.confirm(this, "Info", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?"))
                {
                    return false;
                }
            }
        };

        this.dsList_canrowposchange = function(obj,e)
        {
        	//데이터셋 수정 여부 확인
            if (take.isDsModified(this.dsSubList))
            {
                //행 변경 수행 여부 확인
                if (!take.confirm(this, "Info", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?"))
                {
                    return false;
                }
            }
        };

        //사용유무 콤보 변경 이벤트
        this.divSearch_cboUseYn_onitemchanged = function(obj,e)
        {
        	this.fnSearch("deptSelect");
        };

        //부서명 입력창 키 다운 이벤트
        this.divSearch_edtDept_onkeydown = function(obj,e)
        {
            if (e.keycode==13)
            {
                this.fnSearch("deptSelect");
            }
        };

        //사용자정보 목록 선택 변경이벤트
        this.divDetail_grdDetail_onselectchanged = function(obj,e)
        {
        	this.fnSearch("SubSelect");
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCommonCode : 코드호출 함수
         * @param  {String} N/A
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	// Object
        	var objDivSearch;
        	// DataSet
        	var objDsCboUseYn;

        	objDivSearch  = this.divSearch.form;
        	objDsCboUseYn = this.dsCboUseYn;

            var sOutDs      = ["dsCboUseYn"];
            var sGroupCodes = ["00009"];
            var sHeaderType = ["SEL"];

            take.tranCode
        	(
                this,
                sGroupCodes,
                sOutDs,
                sHeaderType,
                function(sId, nErrCd, sErrMsg)
                {
                    if (objDsCboUseYn.rowcount > 0){
                        objDivSearch.cboUseYn.set_index(0);
                    }
                },
        		false
        	);
        };

        /**
        * fnValCallBack : validation callback
        * @param  : objComp      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnValCallBack = function(objComp)
        {
            //벨리데이션 성공 후 스크립트
            return;
        }
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
        this.fnCallBack = function(sId, nErrCd, sErrMsg)
        {
            //Transaction 에러는 공통에서 처리

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

        	// Object
        	var objDsDept, objDsList, objDsSubList, objDivDetail;

        	objDivDetail = this.divDetail.form;
        	objDsDept 	 = this.dsDept;
        	objDsList 	 = this.dsList;
        	objDsSubList = this.dsSubList;

            switch(sId)
            {
                case "deptSelect" :  //마스터 조회 콜백
                    objDivDetail.staTitleL.set_text("부서목록 (총 " + objDsDept.rowcount + "건)");
        			this.fnSearch("userSelect");
                    break;

                case "userSelect" : //디테일 조회 콜백
                    objDivDetail.staTitleR.set_text("사용자 목록 (총 " + objDsList.rowcount + "건)");
        			if(objDsList.rowcount <= 0){
        				objDivDetail.staTitleSub.set_text("사용자 정보 상세 (총 " + objDsSubList.rowcount + "건)");
        			}
                    break;

        		case "SubSelect" : //서브 디테일 조회 콜백
                    objDivDetail.staTitleSub.set_text("사용자 일정 목록 (총 " + objDsSubList.rowcount + "건)");
                    break;

                case "userSave" :  //저장 콜백
                    this.fnSearch("SubSelect");
                    break;

        		case "userDelete" :  //삭제 콜백
                    this.fnSearch("userSelect");
                    break;


                default :
                    break;
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_cboUseYn_onitemchanged,this);
            this.divSearch.form.edtDept.addEventHandler("onkeydown",this.divSearch_edtDept_onkeydown,this);
            this.divDetail.form.grdList.addEventHandler("onselectchanged",this.divDetail_grdList_onselectchanged,this);
            this.divDetail.form.grdDetail.addEventHandler("onselectchanged",this.divDetail_grdDetail_onselectchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsDept.addEventHandler("canrowposchange",this.dsDept_canrowposchange,this);
        };
        this.loadIncludeScript("smpForm03_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
