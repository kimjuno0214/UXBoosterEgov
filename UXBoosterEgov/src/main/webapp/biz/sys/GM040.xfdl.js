(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GM040");
            this.set_titletext("프로그램_프로그램관리_NONMENU");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProgList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/><Col id=\"PROGRAM_PREFIX\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgDetailPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staPrefixT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("Prefix");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPrefix","staPrefixT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsProgPrefix");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgNmT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("프로그램 ID");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgNm","staProgNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","11",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","690","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","449","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegBack","449","Static34:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModBak","449","staRegBack:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgListT","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("메뉴 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdProgList","0","26","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsProgList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"240\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"프로그램 ID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PROGRAM_ID\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","330","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("메뉴 상세");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgIdT","664","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("프로그램 ID(폼명)");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProgId","staProgIdT:7","31","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staPrefixT","330","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("Prefix");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboPrefix","457","31","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsProgDetailPrefix");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNmT","330","staPrefixT:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNmT","330","staRegNmT:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","edtProgId:3","31","77","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text(".xfdl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","664","staProgIdT:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","664","staRegDtT:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","459","cboPrefix:9","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","459","staRegNm:9","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","staRegDtT:7","edtProgId:9","210","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","staModDtT:7","staRegDt:9","210","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_00","310","0","20",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","649",null,"10","0",null,null,null,null,null,this);
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
            obj = new Layout("default","",1659,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divDetail.form.edtProgId","value","dsProgDetail","PROGRAM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.cboPrefix","value","dsProgDetail","PROGRAM_PREFIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboPrefix","value","dsSearch","PROGRAM_PREFIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtProgNm","value","dsSearch","PROGRAM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.staRegNm","text","dsProgDetail","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.staRegDt","text","dsProgDetail","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.staModDt","text","dsProgDetail","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.staModNm","text","dsProgDetail","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GM040.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    GM040.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2021.06.01
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2021.06.01      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_sProgId = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * GM010_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.GM010_onload = function(obj,e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
              this.fnInit();
           }
        }

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
           //onload 공통 코드
           take.tranCode(this, ["00006"], ["dsProgPrefix"], "ALL", "fnCallback");

           var objDivDetail = this.divDetail.form;
           takeval.add(this, "Save", objDivDetail.cboPrefix,    this.divDetail.form.staPrefixT.text,       	"value", true, "string", "", "");
           takeval.add(this, "Save", objDivDetail.edtProgId,    this.divDetail.form.staProgIdT.text,    	"value", true, "string", "", "");
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
            if (take.nvl(sTranId, "")=="") sTranId = "progList";

        	this.dsProgList.clearData();
            take.tranSelect(this, sTranId, "ProgramManagement.nonMenuList" ,"dsSearch" ,"dsProgList" ,"" ,"fnCallback");
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
           if (take.nvl(sTranId, "")=="") sTranId = "progDetailUpdate";
           var objProgGrd = this.divDetail.form.grdProgList;
           var objProgDs = this.dsProgList;
           var objDivDetail = this.divDetail.form;

        	var sRegExp = take.nvl(objDivDetail.edtProgId.value, "");
        	var sRegPattern= /[^A-Za-z0-9_]/g;
        	if(sRegExp.match(sRegPattern)){
        		take.alert(this, "info", "영어, 숫자, 언더바만 가능합니다.", "");
        		return;
        	}

           if(!takeval.check(this, "Save")) return;

           var bolConfirm 	= take.confirm(this, "question", "저장하시겠습니까?");

           if(bolConfirm) take.transaction(this, sTranId, "SVC_LOC::gm/nonMenuSave.do", "dsProgDetail=dsProgDetail:U", "", "PROGRAM_ID_U='"+this.fv_sProgId+"'", "fnCallback");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdProgList";

           this.dsProgDetail.clearData();
           this.dsProgDetail.addRow();

           this.dsProgDetail.setColumn(0, "USE_YN", "Y");

           //take.tranSave(this, sTranId, "ProgramManagement.programInfo", "dsProgSave", "", "", "fnCallback");
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
           if (take.nvl(sGrdId, "")=="") sGrdId = "grdProgList";

           //var nRow 			= this.dsProgList.rowposition;
           //var nSelProg 		= this.dsProgList.getColumn(nRow, "PROGRAM_NM");
           var objDsProgDetail 	= this.dsProgDetail;

           var bolConfirm 		= take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : nSelProg, text : "삭제"});
           if(bolConfirm){
        		objDsProgDetail.set_enableevent(false);
        		objDsProgDetail.set_updatecontrol(false);
        		objDsProgDetail.setRowType(0, 8);
        		objDsProgDetail.set_enableevent(true);
        		objDsProgDetail.set_updatecontrol(true);

        		//take.transaction(this, "progDelete", "SVC_LOC::gm/programInfoDelete.do", "dsProgDetail=dsProgDetail:U", "", "PROGRAM_ID='"+this.fv_sProgId+"'", "fnCallback");
        		take.transaction(this, "progDelete", "SVC_LOC::gm/nonMenuSave.do", "dsProgDetail=dsProgDetail:U", "", "", "fnCallback");
           }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */

        this.grdProgList_onselectchanged = function(obj,e)
        {
           var nRow = e.row;
           if(nRow == -1) return;
           this.fv_sProgId = this.dsProgList.getColumn(nRow, "PROGRAM_ID");
           take.tranSelect(this, "progDetail", "ProgramManagement.nonMenuDetail", "", "dsProgDetail", "PROGRAM_ID='"+this.fv_sProgId+"'", "fnCallback");
        };

        this.divSearch_edtProgNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch("progList");
        	}
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
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

              case "progList" :  //저장 콜백
                 var nCnt = this.dsProgList.rowcount;
                    //this.divDetail.form.staProgListT.set_text("프로그램 목록 ("+nCnt+"건)");
                    break;

                case "progDetail" :  //조회 콜백
                    break;

                case "codetran.multi" : //조회 콜백
        			this.dsProgDetailPrefix.copyData(this.dsProgPrefix);
        			this.dsProgDetailPrefix.deleteRow(0);
        			this.fnSearch();
                    break;

                case "progDetailUpdate" :  //저장 콜백
                    this.fnSearch();
                    break;

                case "progDelete":
        			//alert("progDelete");
        			this.fnSearch();
        			break;

                default :
                    break;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GM010_onload,this);
            this.divSearch.form.edtProgNm.addEventHandler("onkeyup",this.divSearch_edtProgNm_onkeyup,this);
            this.divDetail.form.grdProgList.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
        };
        this.loadIncludeScript("GM040.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
