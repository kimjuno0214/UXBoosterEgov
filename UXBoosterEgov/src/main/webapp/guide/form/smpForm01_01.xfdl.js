(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpForm01_01");
            this.set_titletext("Sample01_01 - CRUD");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"255\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"255\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"255\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"255\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDept", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboAgreeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staUserIdT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","staUserIdT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeptT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사용자 부서");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDept","staDeptT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCboDept");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static07_00_00_01_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","44","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","74",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj.getSetter("takegrid").set("crud");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\" cssclass=\"cellImport\"/><Cell col=\"1\" text=\"성명\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"모바일\"/><Cell col=\"5\" text=\"유선전화\"/><Cell col=\"6\" text=\"팩스\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" text=\"주소\"/><Cell col=\"9\" text=\"부서명\" cssclass=\"cellImport\"/><Cell col=\"10\" text=\"상태\"/><Cell col=\"11\" text=\"사용유무\"/><Cell col=\"12\" text=\"동의유무\"/><Cell col=\"13\" text=\"로그인일자\"/><Cell col=\"14\" text=\"비밀번호 변경일자\"/><Cell col=\"15\" text=\"로그인 브라우저\"/><Cell col=\"16\" text=\"로그인 IP\"/><Cell col=\"17\" text=\"가입 일자\"/><Cell col=\"18\" text=\"유효시작일자\"/><Cell col=\"19\" text=\"유효종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:USER_NM\" wordWrap=\"char\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_BIRTHDAY\" displaytype=\"expr:USER_BIRTHDAY == &apos;&apos; || USER_BIRTHDAY == null ? &apos;&apos; : &apos;calendarcontrol&apos;\" edittype=\"date\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:USER_EMAIL\" wordWrap=\"char\" edittype=\"text\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:USER_MOBILE\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:USER_TEL\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:USER_FAX\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:POST_CD\" edittype=\"text\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"8\" text=\"bind:USER_ADDR\" wordWrap=\"char\" edittype=\"text\" autosizerow=\"limitmin\"/><Cell col=\"9\" text=\"bind:DEPT_CD\" autosizerow=\"limitmin\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsCboDept\" combodatacol=\"NAME\" combocodecol=\"CODE\" wordWrap=\"char\"/><Cell col=\"10\" text=\"bind:USER_STATUS\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsStatus\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"11\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"expr:USE_YN == &apos;&apos; || USE_YN == null ? &apos;&apos; : &apos;combotext&apos;\" combodataset=\"dsUseYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"12\" text=\"bind:AGREE_YN\" edittype=\"combo\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\" combodataset=\"dsCboAgreeYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"13\" text=\"bind:LAST_LOGIN_DT\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"14\" text=\"bind:PW_CHANGE_DT\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"15\" text=\"bind:LOGIN_BROWSER\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:LOGIN_IP\" autosizerow=\"limitmin\"/><Cell col=\"17\" text=\"bind:JOIN_DATE\" displaytype=\"expr:JOIN_DATE == &apos;&apos; || JOIN_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:VALID_START_DATE\" displaytype=\"expr:VALID_START_DATE == &apos;&apos; || VALID_START_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:VALID_END_DATE\" displaytype=\"expr:VALID_END_DATE == &apos;&apos; || VALID_END_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00_01","1649","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","822",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","54",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
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

        };
        
        // User Script
        this.registerScript("smpForm01_01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    smpForm01_01.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2020.08.24
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.08.24      전영찬             최초 생성
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
        	//변수 선언
            var objDivForm;

        	//공통코드
        	this.fnCommonCode();

            objDivForm = this.divSearch.form;

            //벨리데이션 등록
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

                    //에디터형 컴포넌트 데이터셋 업데이트
                    objDivForm.edtUserId.updateToDataset(); //사용자 아이디

                    //검색 파라메터 세팅
                    sParam =   "sDeptCd="  + take.nvl(objDivForm.cboDept.value,"");   //부서코드
                    sParam +=  " sUserId=" + take.nvl(objDivForm.edtUserId.value,""); //사용자 아이디
                    sParam +=  " sUseYn="  + take.nvl(objDivForm.cboUseYn.value,"");  //사용 여부

                    //데이터셋 비우기
        			this.dsList.clearData();

                    //타이틀 초기화
                    this.divDetail.form.staTitle.set_text("사용자 목록");

                    //조회
        			take.tranSelect(
                        this,                      //현재 Form 객체
                        sTranId,                   //Transaction Id
                        "Sample.smpForm01Select",  //sqlMapperId
                        "",                        //Indataset(서버로 보낼 dataset)
                        "dsList",                  //Outdataset(서버에서 받을 dataset)
                        sParam,                    //Parameter
                        "fnCallBack");             //Call Back 함수명 (함수를 바로 사용 가능)

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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

            //데이터셋 수정 여부 확인
            if (!take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

            //저장 전 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,                            //현재 Form Object
                    this.divDetail.form.grdDetail,   //벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    "cellImport",                    //필수 입력 css값
                    "fnValCallBack",                 //성공 Call Back 함수
                    true);                           //동기 여부

            //벨리데이션 체크 완료 후
            if (bRtn)
        	{
                //데이터 저장
        //         take.tranSave(
        //             this,                //현재 Form 객체
        //             sTranId,             //Transaction Id
        //             "Sample.smpForm01",  //sqlMapperId (smpForm01Insert, smpForm01Delete, smpForm01Update 3개가 있어야 하고 뒤에 insert, delete, update는 자동으로 호출됨)
        //             "dsList",            //Indataset(서버로 보낼 dataset)
        //             "",                  //Outdataset(서버에서 받을 dataset)
        //             "",                  //Parameter
        //             "fnCallBack"         //Call Back 함수명 (함수를 바로 사용 가능)
        //         );

                take.transaction(this, sTranId, "SVC_LOC::sample/smpForm01Save.do", "dsList=dsList:U", "", "", "fnCallBack");

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

            //변수 선언
        	var objDs;
        	var nAddRow;

            //변수에 값 세팅
            objDs = this.dsList;       //행 추가할 데이터셋

            //넘어온 Row값이 없으면 : 공통 등록 버튼을 통해 호출된 경우
            if (take.nvl(nRow,"")=="")
            {
                nRow = objDs.addRow();
            }

            //행 추가
            if (nRow>=0)
            {
                //행 추가 성공 후 추가 로직 있을 경우

                //첫번째 컬럼으로 이동
                this.divDetail.form.grdDetail.setCellPos(2);

                //사용 유무를 기본 사용으로 세팅
                objDs.setColumn(nRow,"USE_YN","Y");

            } else { //행 추가 실패
                take.alert(this, "Info", "행 추가에 실패하였습니다.", "");
                return;
            }
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
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdDetail";

            //변수 선언
        	var objDs;
        	var bRtn = true;
            var nCnt, nRow;

            //변수에 값 세팅
            objDs = this.dsList;       //행 삭제할 데이터셋

            //그리드 기능에서 행 삭제시 삭제된 행이 넘어온다
            if (take.nvl(aRow, "")!="")
            {
                //삭제 성공후 추가 로직 있을경우
                bRtn = true;
            } else if(aRow==false) {
                bRtn = false;
                nRow = objDs.rowposition;

            } else { //null이면 공통 버튼에서 삭제 처리를 요청한 것임

                //현재 체크된 row, 체크된 row가 없으면 현재 위치
                aRow = take.nvl(take.getChkRow(objDs, "CHK"), objDs.rowposition);

                //배열의 갯수
                nCnt = aRow.length;

                //배열 수 만큼 반복
                for (var i=0; i<nCnt; i++)
                {
                    //행
                    nRow = aRow[i];

                    //행 삭제
                    bRtn = objDs.deleteRow(nRow);

                    //행 삭제 실패시 for문 중지
                    if (bRtn==false) break;
                }
            }

            //행 삭제 성공
            if (bRtn)
            {
                //삭제 성공후 추가 로직 있을경우
            } else { //삭제 실패
                take.alert(this, "Info", nRow + "행 삭제에 실패하였습니다.", "");
                //삭제 실패 행으로 이동
                objDs.set_rowposition(nRow);

                return false;
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
                this,                                          			//현재 Form 객체
                ["00017", "00009", "00009", "00031"],                   //CODE_INFO TABLE의 그룹키 값 (배열로 여러개 가능)
                ["dsStatus", "dsCboUseYn", "dsUseYn", "dsCboAgreeYn"],  //Indataset : 서버에서 받을 데이터셋 (배열로 여러개 가능 그룹키 값과 배열갯수가 동일해야함)
                ["", "SEL", "", ""],                                   	//콤보등에 사용될 경우 첫번째 세팅 값("ALL":전체, "SEL":선택, "":사용안함)(배열로 여러개 가능 그룹키 값과 배열갯수가 동일해야함)
                function(sId, nErrCd, sErrMsg)  						//Call Back 함수(함수 명으로도 사용 가능 ex:"fnCallBack")
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
                false                                  //동기(false),비동기(true) 여부 기본값은 비동기
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
                case "deptList" :  //조회 콜백

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

                    //타이틀에 조회 건수 표기
                    this.divDetail.form.staTitle.set_text("사용자 목록 (총 " + this.dsList.rowcount + "건)");

                    break;

                case "Save" :  //저장 콜백

                    //성공 메세지
                    take.alert(this, "Info", "저장 성공하였습니다.", "");

                    //데이터 초기화
                    this.dsList.clearData();

                    //저장 후 데이터 조회
                    this.fnSearch("userList");

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
        this.loadIncludeScript("smpForm01_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
