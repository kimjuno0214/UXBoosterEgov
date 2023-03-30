(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpForm06_01");
            this.set_titletext("Sample06_01 - CRUD");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn02", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboAgreeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Edit("edtDept","staDeptT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
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

            obj = new Static("staTitleR","261","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDetail","260","staTitleR:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.getSetter("takegrid").set("crud");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\" cssclass=\"cellImport\"/><Cell col=\"1\" text=\"성명\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"모바일\"/><Cell col=\"5\" text=\"유선전화\"/><Cell col=\"6\" text=\"팩스\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" text=\"주소\"/><Cell col=\"9\" text=\"부서코드\"/><Cell col=\"10\" text=\"상태\"/><Cell col=\"11\" text=\"사용유무\"/><Cell col=\"12\" text=\"동의유무\"/><Cell col=\"13\" text=\"로그인일자\"/><Cell col=\"14\" text=\"비밀번호 변경일자\"/><Cell col=\"15\" text=\"로그인 브라우저\"/><Cell col=\"16\" text=\"로그인 IP\"/><Cell col=\"17\" text=\"가입 일자\"/><Cell col=\"18\" text=\"유효시작일자\"/><Cell col=\"19\" text=\"유효종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_NM\" wordWrap=\"char\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_BIRTHDAY\" displaytype=\"expr:USER_BIRTHDAY == &apos;&apos; || USER_BIRTHDAY == null ? &apos;&apos; : &apos;calendarcontrol&apos;\" edittype=\"date\" autosizerow=\"limitmin\"/><Cell col=\"3\" text=\"bind:USER_EMAIL\" wordWrap=\"char\" edittype=\"text\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:USER_MOBILE\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:USER_TEL\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:USER_FAX\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:POST_CD\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:USER_ADDR\" wordWrap=\"char\" edittype=\"text\" autosizerow=\"limitmin\"/><Cell col=\"9\" text=\"bind:DEPT_CD\" autosizerow=\"limitmin\" edittype=\"combo\" combodataset=\"dsCboDept\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" comboautoselect=\"true\" textAlign=\"center\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:USER_STATUS\" edittype=\"combo\" combodataset=\"dsCboStatus\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" comboautoselect=\"true\" textAlign=\"center\" displaytype=\"combotext\"/><Cell col=\"11\" text=\"bind:USE_YN\" edittype=\"combo\" combodataset=\"dsCboUseYn02\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" comboautoselect=\"true\" textAlign=\"center\" displaytype=\"combotext\"/><Cell col=\"12\" text=\"bind:AGREE_YN\" edittype=\"combo\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsCboAgreeYn\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"13\" text=\"bind:LAST_LOGIN_DT\" wordWrap=\"char\" autosizerow=\"limitmin\" edittype=\"none\"/><Cell col=\"14\" text=\"bind:PW_CHANGE_DT\" wordWrap=\"char\" autosizerow=\"limitmin\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:LOGIN_BROWSER\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"16\" text=\"bind:LOGIN_IP\" autosizerow=\"limitmin\" edittype=\"none\"/><Cell col=\"17\" text=\"bind:JOIN_DATE\" displaytype=\"expr:JOIN_DATE == &apos;&apos; || JOIN_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"18\" text=\"bind:VALID_START_DATE\" displaytype=\"expr:VALID_START_DATE == &apos;&apos; || VALID_START_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"19\" text=\"bind:VALID_END_DATE\" displaytype=\"expr:VALID_END_DATE == &apos;&apos; || VALID_END_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" edittype=\"none\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitleL:5","250",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsDept");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_WF_Tree");
            obj.set_scrollbarsize("10");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"238\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" autosizerow=\"limitmin\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LEVEL\"/></Band></Format></Formats>");
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpForm06_01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    smpForm06_01.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.10.23
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.10.23      김대승             최초 생성
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
        	var objDsDept, objDsList, objDivSearch;
        	// Variable
        	var sDeptNm, sDeptCd, sUseYn;

        	objDivSearch = this.divSearch.form;
        	objDsDept    = this.dsDept;
        	objDsList    = this.dsList;

        	switch(sTranId) {
                case "deptSelect":
        			// 벨리데이션 체크
        			if(!takeval.check(this, "Search")) return;

                    sDeptNm = take.nvl(objDivSearch.edtDept.value, "");
                    sUseYn  = objDivSearch.cboUseYn.value;

        			objDsDept.clearData();

                    take.tranSelect
        			(
                        this,
                        sTranId,
                        "Sample.smpForm06DeptSelect",
                        "",
                        "dsDept",
                        "sDeptNm=" + sDeptNm + " sUseYn=" + sUseYn,
                        "fnCallBack",
                        false
                    );
                    break;

                case "userSelect":
                    sDeptCd = objDsDept.getColumn(objDsDept.rowposition, "DEPT_CD");

        			objDsList.clearData();

        			take.tranSelect
        			(
                        this,
                        sTranId,
                        "Sample.smpForm06Select",
                        "",
                        "dsList",
                        "sDeptCd=" + sDeptCd,
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
            if (!take.isDsModified(this.dsList))
            {
        		take.alert(this, "Info", "변경된 데이터가 없습니다.");
        		return false;
            }

        	//저장 전 벨리데이션 체크
        	var bRtn =
        		takeval.checkComp
        		(
        			this,                           	 //현재 Form Object
        			this.divDetail.form.grdDetail, 		 //벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
        			"cellImport",                    	 //필수 입력 css값
        			"fnValCallBack",                 	 //성공 Call Back 함수
        			true								 //동기 여부
        		);

        	//벨리데이션 체크 완료 후
        	if (bRtn)
        	{
        		//take.tranSave(this, sTranId, "Sample.smpForm06", "dsList", "", "", "fnCallBack");
                take.transaction(this, sTranId, "SVC_LOC::sample/smpForm06Save.do", "dsList=dsList:U", "", "", "fnCallBack");
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
        	var objDsList, objDsDept;
        	// Variable
        	var nAddRow, nRowPosition;

        	objDsDept    = this.dsDept;
        	nRowPosition = objDsDept.rowposition;

        	objDsList 	 = this.dsList;
        	nAddRow 	 = objDsList.addRow();

        	objDsList.setColumn(nAddRow, "DEPT_CD"	  	, objDsDept.getColumn(nRowPosition, "DEPT_CD"))
        	objDsList.setColumn(nAddRow, "USE_YN"	  	, "Y");
        	objDsList.setColumn(nAddRow, "AGREE_YN"	    , "Y");
        	objDsList.setColumn(nAddRow, "USER_STATUS"  , "01");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdDetail";

        	// Object
        	var objDs;
        	// Variable
        	var arrChk;

        	objDs  = this.dsList;
        	arrChk = take.getChkRow(objDs);

        	if(arrChk.length > 0) {
        		if (take.confirm(this, "Info", "삭제 하시겠습니까?"))
                {
                    objDs.deleteMultiRows(arrChk);
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

        //데이터셋 row 변경 이벤트 발생 전
        this.dsDept_canrowposchange = function(obj,e)
        {
        	// Object
        	var objDsDetailList;
        	// Variable
        	var nRowType;

        	objDsDetailList = this.dsList;

        	//데이터셋 수정 여부 확인
            if (take.isDsModified(objDsDetailList))
            {
        		nRowType = objDsDetailList.getRowType(0);
        		if(nRowType != 8) {
        			//행 변경 수행 여부 확인
        			if (!take.confirm(this, "Info", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?"))
        			{
        				return false;
        			}
        		}
            }
        };

        //데이터셋 row 변경 이벤트 발생 전
        this.dsList_canrowposchange = function(obj,e)
        {
        	// Object
        	var objDsMarster, objDsDetailLis;
        	// Variable
        	var nRowType;

        	objDsDetailList = this.dsList;
        	objDsMarster    = this.dsDept;

        	//데이터셋 수정 여부 확인_ 마스터row 변경없이 디테일 신규 row 추가시
            if (take.isDsModified(objDsDetailList) && !take.isDsModified(objDsMarster))
            {
        		nRowType = obj.getRowType(e.oldrow);
        		if(nRowType != 1) {
        			//행 변경 수행 여부 확인
        			if (!take.confirm(this, "Info", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?"))
        			{
        				obj.reset();
        				return false;
        			}
        		}
            }
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
        	var objDsCboUseYn, objDivSearch;

        	objDivSearch  = this.divSearch.form;
        	objDsCboUseYn = this.dsCboUseYn;

            var sOutDs      = ["dsCboUseYn", "dsCboUseYn02", "dsCboAgreeYn", "dsCboStatus"];
            var sGroupCodes = ["00009"	   , "00009"	   , "00031"	   , "00017"	  ];
            var sHeaderType = ["SEL"	   , ""	   		   , ""			   , ""			  ];

            take.tranCode
        	(
                this,
                sGroupCodes,
                sOutDs,
                sHeaderType,
                function(sId, nErrCd, sErrMsg) {
                    if (objDsCboUseYn.rowcount > 0) {
                        objDivSearch.cboUseYn.set_index(0);
        				take.tranSelect
        				(
        					this,
        					"smpForm04DeptSelect",
        					"Sample.smpForm04DeptSelect",
        					"",
        					"dsCboDept",
        					"",
        					function(sId, nErrCd, sErrMsg) {

        					}
        				);
                    }
                },
                false
        	);
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
        this.fnCallBack = function(sId, nErrCd, sErrMsg)
        {
        	var objDivDetail;
        	var objDsDept, objDsList;

        	objDivDetail = this.divDetail.form;
        	objDsDept    = this.dsDept;
        	objDsList    = this.dsList;

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
                case "deptSelect" :  //조회 콜백
        			this.fnSearch("userSelect");
                    break;

                case "userSelect" : //조회 콜백
                    objDivDetail.staTitleR.set_text("사용자 목록 (총 " + objDsList.rowcount + "건)");
                    break;

                case "userSave" :  //저장 콜백
                    this.fnSearch("userSelect");
                    break;

        		case "userDelete" :   //삭제 콜백
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
            this.divSearch.form.edtDept.addEventHandler("onkeydown",this.divSearch_edtDept_onkeydown,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_cboUseYn_onitemchanged,this);
            this.divDetail.form.grdList.addEventHandler("onselectchanged",this.divDetail_grdList_onselectchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsDept.addEventHandler("canrowposchange",this.dsDept_canrowposchange,this);
            this.dsCboDept.addEventHandler("canrowposchange",this.dsDept_canrowposchange,this);
        };
        this.loadIncludeScript("smpForm06_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
