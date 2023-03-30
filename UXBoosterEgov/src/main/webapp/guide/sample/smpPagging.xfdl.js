(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpPagging");
            this.set_titletext("페이징 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"TOTALCNT\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"CURPAGE\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"ROWCNT\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"255\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"255\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"255\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"255\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDept", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"44","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","435","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeptT","19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용자 부서");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDept","staDeptT:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCboDept");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserIdT","cboDept:19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("ID");
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

            obj = new Static("staUseYnT","685","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","768","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.08%","divSearch:0","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","90",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0","staTitle:0",null,null,"0","30",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"이메일\"/><Cell col=\"5\" text=\"모바일\"/><Cell col=\"6\" text=\"유선전화\"/><Cell col=\"7\" text=\"팩스\"/><Cell col=\"8\" text=\"우편번호\"/><Cell col=\"9\" text=\"주소\"/><Cell col=\"10\" text=\"부서코드\"/><Cell col=\"11\" text=\"상태\"/><Cell col=\"12\" text=\"사용유무\"/><Cell col=\"13\" text=\"동의유무\"/><Cell col=\"14\" text=\"로그인일자\"/><Cell col=\"15\" text=\"비밀번호 변경일자\"/><Cell col=\"16\" text=\"로그인 브라우저\"/><Cell col=\"17\" text=\"로그인 IP\"/><Cell col=\"18\" text=\"가입 일자\"/><Cell col=\"19\" text=\"유효시작일자\"/><Cell col=\"20\" text=\"유효종료일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:USER_ID\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:USER_NM\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:USER_BIRTHDAY\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:USER_EMAIL\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"5\" text=\"bind:USER_MOBILE\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:USER_TEL\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:USER_FAX\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"8\" text=\"bind:POST_CD\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"9\" text=\"bind:USER_ADDR\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"10\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\" combodataset=\"dsCboDeptGrid\" combodatacol=\"NAME\" combocodecol=\"CODE\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"11\" text=\"bind:USER_STATUS_NM\" combodataset=\"dsCboStatus\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"12\" text=\"bind:USE_YN_NM\" combodataset=\"dsCboUseYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"13\" text=\"bind:AGREE_YN\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"14\" text=\"bind:LAST_LOGIN_DT\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"15\" text=\"bind:PW_CHANGE_DT\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"16\" text=\"bind:LOGIN_BROWSER\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:LOGIN_IP\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"18\" text=\"bind:JOIN_DATE\" displaytype=\"expr:JOIN_DATE == &apos;&apos; || JOIN_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"19\" text=\"bind:VALID_START_DATE\" displaytype=\"expr:VALID_START_DATE == &apos;&apos; || VALID_START_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"20\" text=\"bind:VALID_END_DATE\" displaytype=\"expr:VALID_END_DATE == &apos;&apos; || VALID_END_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divPagging","0","grdDetail:0",null,null,"0","0","550",null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_url("frm::com/comGridPagging.xfdl");
            obj.set_border("1px solid darkgray");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","btnShowHide:0",null,"10","0",null,null,null,null,null,this);
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

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1030","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","1045","1",null,"699","-520",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("- Pagging 공통 사용 (샘플 스크립트 참조)\r\n  \r\n  1. 그리드 하단데 페이징 용 Div 생성\r\n\r\n  2. 페이징 div url 프로퍼티에 페이지 공통 연결 \r\n     Url --> frm::com/comGridPagging.xfdl\r\n\r\n  3. 페이징 div에 스크립트로 대상 그리드와 페이지 변경시 호출할 함수 지정\r\n     ex)//페이지에 연결할 그리드 지정\r\n          this.divDetail.form.divPagging.pagegrid = this.divDetail.form.grdDetail;\r\n          //페이지 변경시 호출할 함수 지정 (transaction을 호출해 주는 함수)\r\n          this.divDetail.form.divPagging.pagefunction = this.fnPagging;  //함수 바로 지정\r\n          // or //  this.divDetail.form.divPagging.pagefunction = \"fnPagging\"; //함수명 지정\r\n          //페이지 초기화\r\n          this.divDetail.form.divPagging.fnPageInit();\r\n      * 연결할 그리드는 절대 스크립트로 연결 필요(프로퍼티로 설정시 오브젝트 연결이 안됨)\r\n\r\n  4.트랜젝션 콜백 처리\r\n     * 조회시 마다 전체 행 수가 변경 될 수 있기 때문에 세팅 필요\r\n        전체 행 수에 맞추어 전체 페이지수 등을 처리한다.\r\n     ex) //변수 선언\r\n            var sNewTotalCnt;\r\n            var objDiv, objGrid, objDs;\r\n            var nCnt;\r\n            \r\n            objDs = this.dsList;\r\n            \r\n            nCnt = objDs.rowcount;\r\n            \r\n            //조회 된 데이터가 있으면\r\n            if (nCnt>0)\r\n            {\r\n                objDiv = this.divDetail.form.divPagging;\r\n                objGrid = objDiv.pagegrid;\r\n                \r\n                //전체 row수 \r\n                sNewTotalCnt = take.nvl(objDs.getConstColumn(\"TOTALCNT\"), \"\")\r\n                \r\n                //transaction 전 row수와 완료 후 row수가 다를경우\r\n                if (take.nvl(objDiv.paggingtotalcount,\"\")!=sNewTotalCnt)\r\n                {\r\n                    //변경된 row수 세팅\r\n                    objDiv.paggingtotalcount = sNewTotalCnt;\r\n                    \r\n                    //페이징 다시 설정\r\n                    objDiv.form.fnSetting();\r\n                }\r\n            }");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divPagging
            obj = new Layout("default","",0,0,this.divDetail.form.divPagging.form,function(p){});
            this.divDetail.form.divPagging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divSearch.form.edtUserId","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboDept","value","dsSearch","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comGridPagging.xfdl");
        };
        
        // User Script
        this.registerScript("smpPagging.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    smpForm01.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2020.08.24
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.08.24      전영찬             최초 생성
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
            //변수 선언
            var objDivForm, objDivDetail, objDivPagging;

        	//공통코드
        	this.fnCommonCode();

            objDivForm = this.divSearch.form;
            objDivDetail = this.divDetail.form;
            objDivPagging = objDivDetail.divPagging;

            //필수 검색조건 추가
        	takeval.add(
                this,
                "Search",                 //벨리데이션 그룹 아이디(그룹별로 추가할 수 있음)
                objDivForm.cboUseYn,      //체크 대상 컴포넌트
                objDivForm.staUseYnT.text, //체크할 명칭(ex:"사용여부")
                "value",                  //체크대상 (컴포넌트:Properti, Grid:Cell, Dataset:Column 명)
                true,                     //null check
                "string",                 //타입(string, number, date등)체크
                "",                       //체크수(문자는 자릿수, 숫자는 구간[form,to])
                "");                      //체크 완료후 Call Back function 명(생략가능)

            //페이지에 연결할 그리드 지정
            objDivPagging.pagegrid = objDivDetail.grdDetail;
            //페이지 변경시 호출할 함수 지정
            objDivPagging.pagefunction = this.fnPagging;  // or //  objDivPagging.pagefunction = "fnPagging";
            //페이지 초기화
            objDivPagging.fnPageInit();
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
            if (take.nvl(sTranId, "")=="") sTranId = "userList";

        	switch(sTranId) {
                case "userList":

                    //변수 선언
                    var sParam;
                    var objDivForm;

                    //벨리데이션 체크
                    if(!takeval.check(this, "Search")) return;

                    //검색조건 영역
                    objDivForm = this.divSearch.form;

                    //검색 파라메터 세팅
                    //sParam =   "sDeptCd="  + take.nvl(objDivForm.cboDept.value,"");   //부서코드
                    //sParam +=  " sUserId=" + take.nvl(objDivForm.edtUserId.value,""); //사용자 아이디
                    //sParam +=  " sUseYn="  + take.nvl(objDivForm.cboUseYn.value,"");  //사용 여부

                    //데이터셋 비우기
        			this.dsList.clearData();

                    //타이틀 초기화
                    this.divDetail.form.staTitle.set_text("사용자 목록");

                    //조회
        			take.tranSelectPage(
                        this,                              //현재 Form 객체
                        sTranId,                           //Transaction Id
                        "Sample.smpForm01JoinSelectCount",       //count sqlMapperId
                        "Sample.smpForm01JoinSelectPage",  //list sqlMapperId
                        "",                                //Indataset(서버로 보낼 dataset)
                        "dsList",                          //Outdataset(서버에서 받을 dataset)
                        sParam,                            //Parameter
                        "fnCallBack");                     //Call Back 함수명 (함수를 바로 사용 가능)

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
            //저장없음
            return false;
        }

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //추가 없음
            return false;
        }

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Anonymous} aRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, aRow)
        {
            //삭제 없음
            return false;
        }

        /**
         * fnExcel : 엑셀 다운로드 함수 (필수) --> 공통 엑셀 다운로드에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @return {N/A} N/A
         * @example this.fnExcel(sGrdId, nRow);
         */
        this.fnExcel = function(sGrdId)
        {
            //ExportExcelGrid 파일명, 시트명, 타이틀명
        	this.divDetail.form.grdDetail.ExportExcelGrid(
                "userList",
        		"userList",
        		"사용자 목록");
        }

        /**
         * fnPrint : 출력 함수 (필수)
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnPrint();
         */
        this.fnPrint = function()
        {
            //출력없음
            return false;
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //부서 검색조건 콤보 변경 이벤트
        this.divSearch_cboDept_onitemchanged = function(obj,e)
        {
            //사용자 목록 조회
        	this.fnSearch("userList");
        };

        //사용여부 검색조건 콤보 변경 이벤트
        this.divSearch_cboUseYn_onitemchanged = function(obj,e)
        {
        	//사용자 목록 조회
        	this.fnSearch("userList");
        };

        //사용자 아이디 입력창 키 다운 이벤트
        this.divSearch_edtUserId_onkeydown = function(obj,e)
        {
            //엔터키 다운
        	if (e.keycode==13)
            {
                //사용자 목록 조회
                this.fnSearch("userList");
            }
        };

        //데이터셋 온 로드 이벤트
        this.dsList_onload = function(obj,e)
        {
        	//변수 선언
            var sNewTotalCnt;
            var objDiv, objGrid, objDs;

            objDs = obj;

            //조회 된 데이터가 있으면
            if (objDs.rowcount>0)
            {
                objDiv = this.divDetail.form.divPagging;
                objGrid = objDiv.pagegrid;

                //전체 row수
                sNewTotalCnt = take.nvl(objDs.getConstColumn("TOTALCNT"), "")

                //transaction 전 row수와 완료 후 row수가 다를경우
                if (take.nvl(objDiv.paggingtotalcount,"")!=sNewTotalCnt)
                {
                    //변경된 row수 세팅
                    objDiv.paggingtotalcount = sNewTotalCnt;

                    //페이징 다시 설정
                    objDiv.form.fnSetting();
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
            take.tranCode(
                this,                           //현재 Form 객체
                ["00009"],                      //CODE_INFO TABLE의 그룹키 값 (배열로 여러개 가능)
                ["dsCboUseYn"],                 //Indataset : 서버에서 받을 데이터셋 (배열로 여러개 가능 그룹키 값과 배열갯수가 동일해야함)
                ["SEL"],                        //콤보등에 사용될 경우 첫번째 세팅 값("ALL":전체, "SEL":선택, "":사용안함)(배열로 여러개 가능 그룹키 값과 배열갯수가 동일해야함)
                function(sId, nErrCd, sErrMsg)  //Call Back 함수(함수 명으로도 사용 가능 ex:"fnCallBack")
                {
                    //sId     : Transaction Id
                    //nErrCd  : Return Code (0보다 작으면 오류)
                    //sErrMsg : Return Message

                    //사용여부 공통코드 데이터가 있는지 여부
                    if (this.dsCboUseYn.rowcount > 0)
                    {
                        //사용여부 검색조건 콤보에 첫번째 값 세팅
                        this.divSearch.form.cboUseYn.set_index(0);
                    }

                    //부서 데이터셋 데이터 비우기
                    this.dsCboDept.clearData();

                    //부서 데이터 조회
                    take.tranSelect(
                        this,                          //현재 Form 객체
                        "deptList",                    //Transaction Id
                        "Sample.smpForm01DeptSelect",  //sqlMapperId
                        "",                            //Indataset(서버로 보낼 dataset)
                        "dsCboDept",                   //Outdataset(서버에서 받을 dataset)
                        "",                            //Parameter
                        "fnCallBack");                 //Call Back 함수명 (함수를 바로 사용 가능)
                },
                false                            //동기(false),비동기(true) 여부 기본값은 비동기
            );
        }

        //페이징 변경에 따른 함수
        this.fnPagging = function()
        {
            //alert(this.dsList.getConstColumn("CURPAGE"));
            this.fnSearch("userList");
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallBack : transaction callback
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

            switch(sId)
            {
                case "deptList" :  //부서 검색조건 조회 콜백

                    //변수 선언
                    var objDs;

                    //부서 검색조건 데이터셋
                    objDs = this.dsCboDept;

                    //부서 검색조건 데이터가 있으면
        			if (objDs.rowcount > 0)
                    {
                        //부서 검색조건 콤보 첫번데 데이터 셋팅
        				this.divSearch.form.cboDept.set_index(0);
        			}

                    break;

                case "userList" : //조회 콜백
                    //변수 선언
                    var sNewTotalCnt;
                    var objDiv, objGrid, objDs;
                    var nCnt;

                    objDs = this.dsList;

                    nCnt = objDs.rowcount;

                    //조회 된 데이터가 있으면
                    if (nCnt>0)
                    {
                        objDiv = this.divDetail.form.divPagging;
                        objGrid = objDiv.pagegrid;

                        //전체 row수
                        sNewTotalCnt = take.nvl(objDs.getConstColumn("TOTALCNT"), "")

                        //transaction 전 row수와 완료 후 row수가 다를경우
                        if (take.nvl(objDiv.paggingtotalcount,"")!=sNewTotalCnt)
                        {
                            //변경된 row수 세팅
                            objDiv.paggingtotalcount = sNewTotalCnt;

                            //페이징 다시 설정
                            objDiv.form.fnSetting();
                        }
                    }

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
            this.divSearch.form.edtUserId.addEventHandler("onkeydown",this.divSearch_edtUserId_onkeydown,this);
            this.divSearch.form.cboDept.addEventHandler("onitemchanged",this.divSearch_cboDept_onitemchanged,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_cboUseYn_onitemchanged,this);
        };
        this.loadIncludeScript("smpPagging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
