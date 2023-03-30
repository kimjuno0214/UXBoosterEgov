(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GM020");
            this.set_titletext("프로그램관리_프로그램컴포넌트관리_프로그램컴포넌트관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProgList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgMultiLang", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgMultiLangDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_LANG_TXT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">영</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">하나</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

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
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgNm","staProgNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
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

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
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

            obj = new Static("staProgListT","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("프로그램 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staCompDetailT","330","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("컴포넌트 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSpliter","330","333",null,"10","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_splitter2");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdCompDetail","330","staCompDetailT:5",null,null,"0","btnSpliter:5","32",null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsCompList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"59\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"컴포넌트ID\"/><Cell col=\"3\" text=\"컴포넌트명\"/><Cell col=\"4\" text=\"상세설명\"/><Cell col=\"5\" text=\"다국어코드\" tooltiptext=\"bind:ML_CD\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:COMPONENT_SEQ\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:COMPONENT_ID\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:COMPONENT_NM\" edittype=\"text\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:DESC_TXT\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:ML_CD\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultiLang","330","btnSpliter:31",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsProgMultiLangDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:LANG_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ML_LANG_TXT\" edittype=\"none\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdProgList","0","staProgListT:5","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsProgList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"프로그램 명\"/></Band><Band id=\"body\"><Cell text=\"bind:PROGRAM_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PROGRAM_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divProgForm","860","1","63","29",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_enableevent("false");
            obj.set_async("false");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_00","310","30","20",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnCompDetail",null,"0","100","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("ID가져오기");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMultiLang",null,"btnSpliter:5","100","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("다국어매핑");
            this.divDetail.addChild(obj.name, obj);

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

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
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

            //-- Default Layout : this.divDetail.form.divProgForm
            obj = new Layout("default","",0,0,this.divDetail.form.divProgForm.form,function(p){});
            this.divDetail.form.divProgForm.form.addLayout(obj.name, obj);

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
        this.registerScript("GM020.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    GM020.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.08.16
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.16      이동건             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_nCompCnt;
        this.fv_bolUrlYn;
        this.fv_nOldRow="";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * GM020_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.GM020_onload = function(obj,e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter);
        		this.fnInit();
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
        this.fnInit = function()
        {
        	//조회 시 prefix를 가져와서 프로그램 선택 시 비교해야 함
        	take.tranCode(this, ["00006"], ["dsProgPrefix"], "ALL", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "progOnload";

        	var objDivSearch = this.divSearch.form;
        	this.dsProgList.clearData();
        	this.dsCompList.clearData();

        	take.tranSelect(this
        		, "progOnload"
        		, "ProgramManagement.programInfoList"
        		, ""
        		, "dsProgList"
        		,"PROGRAM_PREFIX='"+take.nvl(objDivSearch.cboPrefix.value, "")
        		+"' PROGRAM_CD='"+take.nvl(objDivSearch.edtProgNm.value, "")
        		+"' USE_YN='Y'"
        	, "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "compSave";

        	var nRow 		= this.dsProgList.rowposition;
        	var sProgType 	= this.dsProgList.getColumn(nRow, "PROGRAM_TYPE");	//프로그램 타입
        	//var sMl_cd 	= this.dsProgList.getColumn(nRow, "PROGRAM_TYPE");	//다국어
        	var sProgCd 	= take.nvl(this.dsProgList.getColumn(nRow, "PROGRAM_CD"), "");	//프로그램 코드

        	var bolConfirm 	= take.confirm(this, "question", "{text}하시겠습니까?", {text : "저장"});

        	//if(bolConfirm) take.tranSave(this, sTranId, "ProgramManagement.programComponent", "dsCompList", "", "PROGRAM_CD='"+sProgCd+"'", "fnCallback");
            if(bolConfirm) take.transaction(this, sTranId, "SVC_LOC::gm/programComponentSave.do", "dsCompList=dsCompList:U", "", "PROGRAM_CD='"+sProgCd+"'", "fnCallback");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdCompDetail";

            switch(sGrdId) {
        		case "grdCompDetail":
        			var objDivDetail  = this.divDetail.form;		// Main Div
        			var objDsCompList = this.dsCompList;			// Right Detail Dataset

        			objDsCompList.addRow();

        		break;
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdCompDetail";

        	var objDsCompList = this.dsCompList;

        	var nSelRow = objDsCompList.rowposition;
        	var arrChk  = take.getChkRow(objDsCompList, "CHK");

        	var bConfirm;
        	var sCompName, sCompId;

        	if(arrChk.length > 0){
        		if(arrChk.length == 1){
        			// 단건 삭제
        			sCompName   = objDsCompList.getColumn(nSelRow, "COMPONENT_NM");
        			sCompId   	= objDsCompList.getColumn(nSelRow, "COMPONENT_ID");
        			bConfirm  = take.confirm(this, "question", "삭제하시겠습니까?");
        		} else {
        			// 다중 삭제
        			bConfirm  = take.confirm(this, "question", "삭제하시겠습니까?");
        		}
        		if(bConfirm){
        			objDsCompList.deleteMultiRows(arrChk);
        		}
        	} else {
        		take.alert(this, "info", "선택된 컴포넌트가 없습니다.");
        	}
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.grdProgList_onselectchanged = function(obj,e)
        {
        	this.dsCompList.clearData();
        	this.dsProgMultiLangDetail.clearData();

        	var nRow = this.dsProgList.rowposition;
        	var sProgCd = this.dsProgList.getColumn(nRow,"PROGRAM_CD");
        	take.tranSelect(this, "compSelect", "ProgramManagement.programComponentList", "", "dsCompList", "PROGRAM_CD ='"+sProgCd+"'", "fnCallback");
        };


        this.btnCompDetail_onclick = function(obj,e)
        {
        	//변수 선언
            var objForm, objDsProLang;
            var arrComp;
            var sProgId, sCompId, sCompNm;
            var nRow, nFRow, nStaCnt;
        	//var sStatic = "Static";
        	var sStatic = "TEST";

        	if(!this.fv_bolUrlYn){
        		take.alert(this, "info", "화면 컴포넌트 정보를 가져올수 없습니다", "");
        		this.divDetail.form.divProgForm.set_url("");
        		return;
        	}

            //해당 폼
            objForm = this.divDetail.form.divProgForm.form
            //다국어 맵핑 데이터셋
            objDsProLang = this.dsProLang;

            //해당 폼의 컴포넌트 리스트 가져오기
            arrComp = take.CompList(objForm);
        	if(arrComp == null || arrComp == ""){
        		take.alert(this, "info", "화면 컴포넌트 정보를 가져올수 없습니다", "");
        		this.divDetail.form.divProgForm.set_url("");
        		return;
        	}

            //정렬
            arrComp.sort();
            //컴포넌트 갯수
            nCnt = arrComp.length;

            //프로그램 아이디 세팅
            sProgId = this.dsProgList.getColumn(this.dsProgList.rowposition, "PROGRAM_ID");
        	var nRowCnt = 0;

            //컴포넌트 갯수 만큼 반복
        	this.dsCompList.set_enableevent(false);
            for (var i=0;i<nCnt;i++)
            {
        		if( arrComp[i] != null )
        		{
        			sCompId = arrComp[i].split("|")[0];
        			sCompNm = take.nvl(arrComp[i].split("|")[1], "");
        			nStaCnt = sCompId.indexOf(sStatic);
        			var nRow = this.dsCompList.findRowExpr("COMPONENT_ID=='" + sCompId +"'");

        			//DB에서 불러온 결과와 컴포넌트가 중복되지 않는 경우
        			if(nRow < 0){
        				//"Static 으로 시작하는 id는 포함되지 않음"
        				if(nStaCnt == -1){

        					nRow = this.dsCompList.addRow();
        					this.dsCompList.setColumn(nRow, "COMPONENT_ID", sCompId);
        					this.dsCompList.setColumn(nRow, "COMPONENT_NM", sCompNm);

        					nRowCnt++;
        				}
        			}
        		}
            }
        	this.dsCompList.set_enableevent(true);

        	this.fv_nCompCnt = this.fv_nCompCnt + nRowCnt;
        	//this.divDetail.form.staCompDetailT.set_text("컴포넌트 목록 (총 " +this.fv_nCompCnt+"건)");
        };

        this.grdCompDetail_oncellclick = function(obj,e)
        {
        // 	if(e.cell != 0 ){
        // 		this.dsProgMultiLangDetail.clearData();
        // 		var nRow = this.dsCompList.rowposition;
        // 		var sProgramCd = this.dsCompList.getColumn(nRow, "PROGRAM_CD");
        // 		var sMlCd = this.dsCompList.getColumn(nRow, "ML_CD");
        // 		take.tranSelect(this, "Language", "ProgramManagement.programComponentLanguageList", "", "dsProgMultiLangDetail", "sProgramCd='" + sProgramCd + "' sMlCd='" + sMlCd + "'", "fnCallback");
        // 	}

        };

        this.divDetail_btnMultiLang_onclick = function(obj,e)
        {
        	var objCompList = this.dsCompList;
        	var nSelRow		= objCompList.rowposition;
        	var sCompName   = this.dsCompList.getColumn(nSelRow,"COMPONENT_NM");
        	//take.openPopup(this, "addMultiLanguage", "biz::sys/GM030P01.xfdl", {openDataset: this.dsProgMultiLangDetail, test: this.dsTest}, "", "fnPopCallback", false);
        	take.openPopup(this, "addMultiLanguage", "biz::sys/OM010P06.xfdl", {argInSearchText:sCompName}, "", "fnPopCallback", false);
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
        this.fnSetForm = function()
        {
        	//변수 선언
            var objDiv, objDsProg, objDsLang;
            var sFormUrl, sPrefix, sMenuUrl;
            var bRtn = true;
            var nRow;

            try
            {
        		//변수에 값 세팅
                objDiv = this.divDetail.form.divProgForm;
                objDsProg = this.dsProgList;
                objDsLang = this.dsProgMultiLang;
                objGrdProg = this.divDetail.form.grdProgList;
                objDiv.set_url("");

                //현재 선택된 행(프로그램 리스트)
                nRow = objDsProg.rowposition;

                //프리픽스, 폼 URL 정보 세팅
                sPrefix = take.nvl(objDsProg.getColumn(nRow, "PROGRAM_PREFIX"), "");

        		//sPrefix = this.fnPrefixVal(sPrefix);

                sMenuUrl = take.nvl(objDsProg.getColumn(nRow, "PROGRAM_ID")+".xfdl.js", "");
                //없을 경우 false
                if (sPrefix=="" || sMenuUrl=="")
                {
        			//trace(this.fv_bolUrlYn);
        			this.fv_bolUrlYn = false;
                } else {
        			//프리픽스 및 폼 URL정보가 있을경우 폼 Load
                    sFormUrl = sPrefix + "::" + sMenuUrl;
                    objDiv.set_url(sFormUrl);
        			this.fv_bolUrlYn = true;
                }
            } catch (e) {
                //오류 발생시 false
                //bRtn = false;
        		//20200605 정해원 오류가 나도 폼 로드가 완료 되도록 처리
        		//this.fv_bolUrlYn = false;
            }
            //false 일 경우 폼 로드 초기화
            //if (!bRtn) objDiv.set_url("");
        	if (!this.fv_bolUrlYn) objDiv.set_url("");
            return bRtn;
        };

        this.fnPrefixVal = function (sPrefix)
        {
        	var nRow = this.dsProgPrefix.findRowExpr("CODE=='" + sPrefix +"'");
        	var sPrefixVal = this.dsProgPrefix.getColumn(nRow, "NAME");
        	return sPrefixVal;
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
                case "progOnload" : //조회 콜백
        			var nRow = 0;
        			var sProgCd = this.dsProgList.getColumn(nRow,"PROGRAM_CD");
        			take.tranSelect(this, "compSelect", "ProgramManagement.programComponentList", "", "dsCompList", "PROGRAM_CD ='"+sProgCd+"'", "fnCallback");
                    break;
                case "compSelect" :  //조회 콜백
        			this.fv_nCompCnt = 0;
        			this.fv_nCompCnt = this.dsCompList.rowcount;
        			//this.divDetail.form.staCompDetailT.set_text("컴포넌트 목록 (총 "+this.fv_nCompCnt+"건)");
        			if(this.fv_nOldRow != ""){
        				this.dsProgList.set_rowposition(this.fv_nOldRow);
        				this.fv_nOldRow = "";
        			}
        			this.fnSetForm();

                    break;
                case "codetran.multi" : //조회 콜백
        			this.divSearch.form.cboPrefix.set_index(0);
        			this.fnSearch();
                    break;

        		case "compSave" :  //저장 콜백
        			this.fv_nOldRow = this.dsProgList.rowposition;
        			this.fnSearch();
                    break;

                default :
                    break;
            }
        }

        this.fnPopCallback = function (sId, nReturnVal)
        {
        	switch(sId) {
        	case "addMultiLanguage":
        		//팝업이 닫히면서 nReturnVal을 통해 값을 받을 수 있습니다
        		var objDs = this.dsCompList;
        		var nRow  = this.dsCompList.rowposition;

        		if(take.nvl(nReturnVal, "") != "") {
        			nReturnVal = nReturnVal.split(",")[0];
        			objDs.setColumn(nRow, "ML_CD", nReturnVal);
        		}

        		var sMlCd = take.nvl(objDs.getColumn(nRow, "ML_CD"), "");
        		if(sMlCd != ""){
        			this.dsProgMultiLangDetail.clearData();
        			take.tranSelect(this, "Language", "SystemCommon.multilanguageDetailList", "", "dsProgMultiLangDetail", "sMlCd='" + sMlCd + "'", "fnCallback");

        		}
        		break;
        	default:
        	}
        };

        this.divSearch_edtProgNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch("progOnload");
        	}
        };

        this.divDetail_grdCompDetail_onselectchanged = function(obj,e)
        {
        	this.dsProgMultiLangDetail.clearData();
        	var nRow 		  = this.dsCompList.rowposition;
        	var sProgramCd    = this.dsCompList.getColumn(nRow, "PROGRAM_CD");
        	var sMlCd 		  = this.dsCompList.getColumn(nRow, "ML_CD");
        	var sComponentSeq = this.dsCompList.getColumn(nRow, "COMPONENT_SEQ");

        	take.tranSelect
        	(
        		this,
        		"Language",
        		"ProgramManagement.programComponentLanguageList",
        		"",
        		"dsProgMultiLangDetail",
        		"sProgramCd='" + sProgramCd + "' sMlCd='" + sMlCd + "' sComponentSeq='" + sComponentSeq + "'",
        		"fnCallback"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GM020_onload,this);
            this.divSearch.form.edtProgNm.addEventHandler("onkeyup",this.divSearch_edtProgNm_onkeyup,this);
            this.divDetail.form.btnSpliter.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.grdCompDetail.addEventHandler("oncellclick",this.grdCompDetail_oncellclick,this);
            this.divDetail.form.grdCompDetail.addEventHandler("onselectchanged",this.divDetail_grdCompDetail_onselectchanged,this);
            this.divDetail.form.grdProgList.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.btnCompDetail.addEventHandler("onclick",this.btnCompDetail_onclick,this);
            this.divDetail.form.btnMultiLang.addEventHandler("onclick",this.divDetail_btnMultiLang_onclick,this);
        };
        this.loadIncludeScript("GM020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
