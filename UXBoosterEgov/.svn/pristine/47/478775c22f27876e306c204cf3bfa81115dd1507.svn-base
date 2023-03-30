(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM040");
            this.set_titletext("화면설계서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSetSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TEMPLETE\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"255\"/><Column id=\"NAME\" type=\"STRING\" size=\"255\"/><Column id=\"DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BINDDATASET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEMPLETE\">smpFrom01</Col><Col id=\"GUBUN\">11</Col><Col id=\"NAME\">사용자부서</Col><Col id=\"DATASET\">dsSearch</Col><Col id=\"COLUMN\">DEPT_CD</Col><Col id=\"TYPE\">combo</Col></Row><Row><Col id=\"TEMPLETE\">smpFrom01</Col><Col id=\"GUBUN\">12</Col><Col id=\"NAME\">아이디</Col><Col id=\"DATASET\">dsSearch</Col><Col id=\"COLUMN\">USER_ID</Col><Col id=\"TYPE\">edit</Col></Row><Row><Col id=\"TEMPLETE\">smpFrom01</Col><Col id=\"GUBUN\">13</Col><Col id=\"NAME\">성명</Col><Col id=\"DATASET\">dsSearch</Col><Col id=\"COLUMN\">USER_NM</Col><Col id=\"TYPE\">edit</Col></Row><Row><Col id=\"TEMPLETE\">smpFrom01</Col><Col id=\"GUBUN\">21_1</Col><Col id=\"NAME\">로그인일시</Col><Col id=\"DATASET\">dsSearch</Col><Col id=\"COLUMN\">FROM_DATE</Col><Col id=\"TYPE\">calendar</Col></Row><Row><Col id=\"TEMPLETE\">smpFrom01</Col><Col id=\"GUBUN\">21_2</Col><Col id=\"NAME\">~</Col><Col id=\"DATASET\">dsSearch</Col><Col id=\"COLUMN\">TO_DATE</Col><Col id=\"TYPE\">calendar</Col></Row><Row><Col id=\"TEMPLETE\">smpFrom01</Col><Col id=\"GUBUN\">22</Col><Col id=\"NAME\">상태</Col><Col id=\"DATASET\">dsSearch</Col><Col id=\"COLUMN\">STATUS</Col><Col id=\"TYPE\">combo</Col></Row><Row><Col id=\"TEMPLETE\">smpFrom01</Col><Col id=\"GUBUN\">23</Col><Col id=\"NAME\">사용여부</Col><Col id=\"DATASET\">dsSearch</Col><Col id=\"COLUMN\">USE_YN</Col><Col id=\"TYPE\">combo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">선택</Col></Row><Row><Col id=\"CODE\">smpForm01</Col><Col id=\"NAME\">리스트 조회</Col></Row><Row><Col id=\"CODE\">smpForm01_01</Col><Col id=\"NAME\">리스트 CRUD</Col></Row><Row><Col id=\"CODE\">sample01</Col><Col id=\"NAME\">리스트 상세 CRUD</Col></Row><Row><Col id=\"CODE\">sample02</Col><Col id=\"NAME\">리스트 상세 서브리스트 CRUD</Col></Row><Row><Col id=\"CODE\">sample03</Col><Col id=\"NAME\">리스트 상세리스트 </Col></Row><Row><Col id=\"CODE\">sample04</Col><Col id=\"NAME\">리스트 CRUD 2</Col></Row><Row><Col id=\"CODE\">sample05</Col><Col id=\"NAME\">리스트 상세리스트 CRUD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSetTran", this);
            obj._setContents("<ColumnInfo><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTempT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("템플릿");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTemplete","104","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboTemp");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("선택");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.63%","42","70","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","52",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","62",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staListT","0","0","540","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("템플릿 Viewer");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divForm","0","30",null,null,"610","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_border("5px solid");
            obj.set_text("화면 템플릿");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRoleMapT",null,"0","470","30","130",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("검색조건 설정 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnFormDesign",null,"3","130","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("화면설계서 다운로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static45","410","30","10","200",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnData",null,"3","120","23","135",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("설계 정보 취합");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdInfo",null,"26","600","42.59%","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsSetSearch");
            obj.set_scrollbarbaroutsize("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"위치\"/><Cell col=\"1\" text=\"타이틀\"/><Cell col=\"2\" text=\"바인드 데이터셋\"/><Cell col=\"3\" text=\"바인드 컬럼\"/><Cell col=\"4\" text=\"컴포넌트\"/><Cell col=\"5\" text=\"참조데이터셋\"/></Band><Band id=\"body\"><Cell text=\"bind:GUBUN\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DATASET\"/><Cell col=\"3\" text=\"bind:COLUMN\"/><Cell col=\"4\" text=\"bind:TYPE\"/><Cell col=\"5\" text=\"bind:BINDDATASET\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRoleMapT00",null,"grdInfo:10","470","30","130",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("검색조건 설정 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdSearch",null,"staRoleMapT00:0","600",null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsSetSearch");
            obj.set_scrollbarbaroutsize("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"위치\"/><Cell col=\"1\" text=\"타이틀\"/><Cell col=\"2\" text=\"바인드 데이터셋\"/><Cell col=\"3\" text=\"바인드 컬럼\"/><Cell col=\"4\" text=\"컴포넌트\"/><Cell col=\"5\" text=\"참조데이터셋\"/></Band><Band id=\"body\"><Cell text=\"bind:GUBUN\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:DATASET\"/><Cell col=\"3\" text=\"bind:COLUMN\"/><Cell col=\"4\" text=\"bind:TYPE\"/><Cell col=\"5\" text=\"bind:BINDDATASET\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTempT.set_taborder("1");
                p.staTempT.set_text("템플릿");
                p.staTempT.set_cssclass("sta_WF_textRImport");
                p.staTempT.move("20","10","80","21",null,null);

                p.cboTemplete.set_taborder("0");
                p.cboTemplete.set_innerdataset("dsCboTemp");
                p.cboTemplete.set_codecolumn("CODE");
                p.cboTemplete.set_datacolumn("NAME");
                p.cboTemplete.set_text("");
                p.cboTemplete.set_value("선택");
                p.cboTemplete.set_index("0");
                p.cboTemplete.move("104","10","231","21",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("default0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTempT.set_taborder("1");
                p.staTempT.set_text("프로젝트");
                p.staTempT.set_cssclass("sta_WF_textRImport");
                p.staTempT.move("20","10","80","21",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form.divForm.form
            obj = new Layout("default","",0,0,this.divDetail.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divDetail.form.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form.divForm.form
            obj = new Layout("default0","",0,0,this.divDetail.form.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divDetail.form.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staListT.set_taborder("0");
                p.staListT.set_text("템플릿 Viewer");
                p.staListT.set_cssclass("sta_WF_title02");
                p.staListT.move("0","0","540","30",null,null);

                p.divForm.set_taborder("4");
                p.divForm.set_border("5px solid");
                p.divForm.set_text("화면 템플릿");
                p.divForm.move("0","30",null,null,"610","0");

                p.staRoleMapT.set_taborder("1");
                p.staRoleMapT.set_text("검색조건 설정 정보");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move(null,"0","470","30","130",null);

                p.btnFormDesign.set_taborder("2");
                p.btnFormDesign.set_text("화면설계서 다운로드");
                p.btnFormDesign.set_cssclass("btn_WF_basic01");
                p.btnFormDesign.move(null,"3","130","23","0",null);

                p.Static45.set_taborder("3");
                p.Static45.set_text("Static00");
                p.Static45.set_background("red");
                p.Static45.set_visible("false");
                p.Static45.move("410","30","10","200",null,null);

                p.btnData.set_taborder("5");
                p.btnData.set_text("설계 정보 취합");
                p.btnData.set_cssclass("btn_WF_basic01");
                p.btnData.move(null,"3","120","23","135",null);

                p.grdInfo.set_taborder("6");
                p.grdInfo.set_binddataset("dsSetSearch");
                p.grdInfo.set_scrollbarbaroutsize("5");
                p.grdInfo.move(null,"26","600","42.59%","5",null);

                p.staRoleMapT00.set_taborder("7");
                p.staRoleMapT00.set_text("검색조건 설정 정보");
                p.staRoleMapT00.set_cssclass("sta_WF_title02");
                p.staRoleMapT00.move(null,"grdInfo:10","470","30","130",null);

                p.grdSearch.set_taborder("8");
                p.grdSearch.set_binddataset("dsSetSearch");
                p.grdSearch.set_scrollbarbaroutsize("5");
                p.grdSearch.move(null,"staRoleMapT00:0","600",null,"0","0");
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staListT.set_taborder("0");
                p.staListT.set_text("권한 목록");
                p.staListT.set_cssclass("sta_WF_title02");
                p.staListT.move("0","0","450","30",null,null);

                p.staRoleMapT.set_taborder("1");
                p.staRoleMapT.set_text("권한 매핑");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move("318","0",null,"30","162",null);

                p.btnFormDesign.set_taborder("2");
                p.btnFormDesign.set_text("저장");
                p.btnFormDesign.set_cssclass("btn_WF_basic01");
                p.btnFormDesign.set_onclick("btnRoleSave_onclick");
                p.btnFormDesign.move(null,"3","46","23","8",null);

                p.Static45.set_taborder("3");
                p.Static45.set_text("Static00");
                p.Static45.set_background("red");
                p.Static45.set_visible("false");
                p.Static45.move("310","30","10","200",null,null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("화면설계서");

                p.divSearch.set_taborder("0");
                p.divSearch.set_cssclass("div_WF_searchBox01");
                p.divSearch.set_text("");
                p.divSearch.set_minwidth("1020");
                p.divSearch.set_maxwidth("");
                p.divSearch.move("10","0",null,"43","10",null);

                p.btnShowHide.set_taborder("2");
                p.btnShowHide.set_cssclass("btn_WF_fold01");
                p.btnShowHide.move("46.63%","42","70","10",null,null);

                p.Static09.set_taborder("3");
                p.Static09.set_text("Static03");
                p.Static09.set_background("red");
                p.Static09.set_visible("false");
                p.Static09.move("0","52",null,"10","0",null);

                p.Static23.set_taborder("4");
                p.Static23.set_text("Static23");
                p.Static23.set_background("blue");
                p.Static23.set_visible("false");
                p.Static23.move("1","-14","10","106",null,null);

                p.Static24.set_taborder("5");
                p.Static24.set_text("Static23");
                p.Static24.set_background("blue");
                p.Static24.set_visible("false");
                p.Static24.move("340","-14","10","106",null,null);

                p.Static25.set_taborder("6");
                p.Static25.set_text("Static23");
                p.Static25.set_background("blue");
                p.Static25.set_visible("false");
                p.Static25.move("679","-14","10","106",null,null);

                p.Static26.set_taborder("7");
                p.Static26.set_text("Static23");
                p.Static26.set_background("blue");
                p.Static26.set_visible("false");
                p.Static26.move("1018","-14","10","106",null,null);

                p.divDetail.set_taborder("1");
                p.divDetail.set_text("");
                p.divDetail.set_minwidth("1020");
                p.divDetail.set_maxwidth("");
                p.divDetail.move("10","62",null,null,"10","10");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",1040,659,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.set_taborder("0");
                p.divSearch.set_cssclass("div_WF_searchBox01");
                p.divSearch.set_text("");
                p.divSearch.move("10","0",null,"43","10",null);

                p.btnShowHide.set_taborder("1");
                p.btnShowHide.set_cssclass("btn_WF_fold01");
                p.btnShowHide.move("485","42","70","10",null,null);

                p.Static09.set_taborder("2");
                p.Static09.set_text("Static03");
                p.Static09.set_background("red");
                p.Static09.set_visible("false");
                p.Static09.move("0","52",null,"10","0",null);

                p.Static23.set_taborder("3");
                p.Static23.set_text("Static23");
                p.Static23.set_background("blue");
                p.Static23.set_visible("false");
                p.Static23.move("1","-14","10","106",null,null);

                p.Static24.set_taborder("4");
                p.Static24.set_text("Static23");
                p.Static24.set_background("blue");
                p.Static24.set_visible("false");
                p.Static24.move("340","-14","10","106",null,null);

                p.Static25.set_taborder("5");
                p.Static25.set_text("Static23");
                p.Static25.set_background("blue");
                p.Static25.set_visible("false");
                p.Static25.move("679","-14","10","106",null,null);

                p.Static26.set_taborder("6");
                p.Static26.set_text("Static23");
                p.Static26.set_background("blue");
                p.Static26.set_visible("false");
                p.Static26.move("1018","-14","10","106",null,null);

                p.divDetail.set_taborder("7");
                p.divDetail.set_text("");
                p.divDetail.move("0","62",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("modFormCreate.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath
        *  @FileNAME    FormCreate.xfdl
        *  @Creator     고영민
        *  @CreateDate  2020.08.25
        *  @Version     1.0
        *  @Desction    화면 설계서
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.25      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM040_onload = function(obj, e)
        {
            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
        		// 초기화
                this.fnInit();
            }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @param  {N/A}    N/A
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	// 공통 코드조회 함수 호출
            //this.fnCommonCode()
            this.divSearch.form.cboTemplete.set_index(0);
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
            if (take.nvl(sTranId, "")=="") sTranId = "formList";

            this.dsFormList.clearData();

            var sPrefix = this.divSearch.form.cboPrefix.value;

            take.tranSelect
            (
                this,
                "formList",
                "Main.prefixFormList",
                "",
                "dsFormList",
                "PREFIX='" + sPrefix + "'",
                "fnCallback"
            )
        }
        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {

        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {

        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {

        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
         this.divSearch_cboTemplete_onitemchanged = function(obj,e)
        {
        	var sFileUrl;
            var objCbo;

            objCbo = this.divSearch.form.cboTemplete;

            sFileUrl = "guide::form/" + objCbo.value + ".xfdl";

            this.divDetail.form.divForm.set_url("");

            this.divDetail.form.divForm.set_url(sFileUrl);
        };

        //화면설계서 다운로드 버튼 클릭 이벤트
        this.divDetail_btnFormDesign_onclick = function(obj,e)
        {

        };

        //설계 정보 취합 버튼 클릭 이벤트
        this.divDetail_btnData_onclick = function(obj,e)
        {

        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        // this.fnCommonCode = function ()
        // {
        // 	take.tranCode(
        //         this,
        //         ["00009","00006"],
        //         ["dsCboUseYn","dsCboPrefix"],
        //         ["ALL","SEL"],
        //         function(sId, nErrCd, sErrMsg)
        //         {
        //             if (this.dsCboUseYn.rowcount > 0){
        //                 this.divSearch.form.cboUseYn.set_index(0);
        //             }
        //
        //             if (this.dsCboUseYn.rowcount > 0){
        //                 this.divSearch.form.cboPrefix.set_index(0);
        //             }
        //         },
        //         false);
        //
        //     return true
        // };

        //파일 다운로드
        this.fnFileDown = function()
        {
            var sPrefix, sDownloadUrl;
        	var objFileDown, objCapDs;
            var nCnt;

            objDs = this.dsPrefixList;
            objFileDown = this.fdtDoc;
            objCapDs = this.dsCapture;

            sPrefix = this.divSearch.form.cboPrefix.text;

            sDownloadUrl = take.getSvcUrl() + "formDesignDownload.do";
        	sDownloadUrl += "?sPrefix="+sPrefix;

            objFileDown.set_url(sDownloadUrl);

            nCnt = objCapDs.rowcount;

            if (nCnt<=0) return

            take.transaction(
                this,
                "uploaddata",
                "SVC::formCapture.do",
                "dsCapture=dsCapture",
                "",
                "",
                function (sId, sErrCd, sMsg)
                {
                	objFileDown.download();
                },
                false);
        }

        //화면 불러오기
        this.fnFormViewer = function(objDs, nRow)
        {
            var objDiv, objCaptureDs, objTxt;
            var sUrl, sProgId, sProgNm;
            var nNRow, sTxt;

            objDiv = this.divDetail.form.divForm.form.divForm;
            sProgId = objDs.getColumn(nRow, "PROGRAM_ID");
            sProgNm = objDs.getColumn(nRow ,"PROGRAM_NM");
            sUrl = objDs.getColumn(nRow, "PROGRAM_PREFIX") + "::" + sProgId + ".xfdl";

            objCaptureDs = this.dsCapture;
            nNRow = objCaptureDs.addRow();
            objCaptureDs.setColumn(nNRow, "PROGRAM_ID", sProgId)

            objTxt = this.divDetail.form.txtInfo;
            sTxt = objTxt.value + "\n######" + sProgNm + "(" + sProgId + ") 화면을 로드합니다.";
            objTxt.set_value(sTxt);

            objDiv.set_url("");
            objDiv.set_url(sUrl);

            this.fv_objForm = this.divDetail.form.divForm.form.divForm.form;

            sTxt = objTxt.value + "\n######" + sProgNm + "(" + sProgId + ") 화면이 로드 되었습니다.";
            objTxt.set_value(sTxt);
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        //

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM040_onload,this);
            this.addEventHandler("ontimer",this.PM040_ontimer,this);
            this.divSearch.form.cboTemplete.addEventHandler("onitemchanged",this.divSearch_cboTemplete_onitemchanged,this);
        };
        this.loadIncludeScript("modFormCreate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
