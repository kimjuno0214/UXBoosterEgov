(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("publishing025");
            this.set_titletext("시스템사용이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHistoryTypeCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistoryLog", this);
            obj._setContents("<ColumnInfo><Column id=\"rownum\" type=\"STRING\" size=\"256\"/><Column id=\"history_seq\" type=\"STRING\" size=\"256\"/><Column id=\"history_date\" type=\"STRING\" size=\"256\"/><Column id=\"history_time\" type=\"STRING\" size=\"256\"/><Column id=\"login_device\" type=\"STRING\" size=\"256\"/><Column id=\"login_browser\" type=\"STRING\" size=\"256\"/><Column id=\"project_cd\" type=\"STRING\" size=\"256\"/><Column id=\"project_nm\" type=\"STRING\" size=\"256\"/><Column id=\"menu_cd\" type=\"STRING\" size=\"256\"/><Column id=\"menu_nm\" type=\"STRING\" size=\"256\"/><Column id=\"form_id\" type=\"STRING\" size=\"256\"/><Column id=\"history_type\" type=\"STRING\" size=\"256\"/><Column id=\"history_type_nm\" type=\"STRING\" size=\"256\"/><Column id=\"user_id\" type=\"STRING\" size=\"256\"/><Column id=\"user_nm\" type=\"STRING\" size=\"256\"/><Column id=\"login_dt\" type=\"STRING\" size=\"256\"/><Column id=\"history_desc\" type=\"STRING\" size=\"256\"/><Column id=\"login_ip\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","98","280","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("시스템사용이력");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdHistoryLog","10","128",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsHistoryLog");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"이력일자\"/><Cell col=\"2\" text=\"이력시간\"/><Cell col=\"3\" text=\"접속기기\"/><Cell col=\"4\" text=\"접속환경\"/><Cell col=\"5\" text=\"프로젝트명\"/><Cell col=\"6\" text=\"메뉴명\"/><Cell col=\"7\" text=\"화면ID\"/><Cell col=\"8\" text=\"이력유형\"/><Cell col=\"9\" text=\"사용자ID\"/><Cell col=\"10\" text=\"사용자명\"/><Cell col=\"11\" text=\"로그인일시\"/><Cell col=\"12\" text=\"상세내용\"/><Cell col=\"13\" text=\"접속IP\"/></Band><Band id=\"body\"><Cell text=\"bind:rownum\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:history_date\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:history_time\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:login_device\"/><Cell col=\"4\" text=\"bind:login_browser\"/><Cell col=\"5\" text=\"bind:project_nm\"/><Cell col=\"6\" text=\"bind:menu_nm\"/><Cell col=\"7\" text=\"bind:form_id\"/><Cell col=\"8\" text=\"bind:history_type_nm\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:user_id\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:user_nm\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:login_dt\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:history_desc\"/><Cell col=\"13\" text=\"bind:login_ip\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","10","0",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectInfoSearch","20","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textRImport");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staLoginInfoSearch","359","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("접속기기/환경");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staUserInfoSearch","698","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch00","19","40","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("이력일시");
            obj.set_cssclass("sta_WF_textRImport");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staProgramInfoSearch","359","40","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtProgramInfoSearch","443","40","226","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staHistoryTypeSearch","699","40","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("이력유형");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("cboHistoryTypeSearch","781","40","226","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsHistoryTypeCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtProjectInfoSearch","99","10","200","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtUserInfoSearch","781","10","200","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("calLoginDateFromSearch","101","40","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLoginTimeFromSearch","calLoginDateFromSearch:2","40","30","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("calLoginDateToSearch","226","40","70","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLoginTimeToSearch","calLoginDateToSearch:2","40","30","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnProjectSearch","edtProjectInfoSearch:4","10","21","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_search02");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnUserSarch","edtUserInfoSearch:4","10","21","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_search02");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch01","204","40","22","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","443","10","110","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edtLoginBrowserSearch","555","10","110","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","485","72","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","87",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("publishing025.xfdl", function() {
        /**
        *  시스템사용이력
        *
        *  @MenuPath    통계 > 시스템사용이력 > 시스템사용이력
        *  @FileName    ST010.xfdl
        *  @Creator     천우성
        *  @CreateDate  2019.08.18
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.18      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.formid_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                take.tranCode(this, "00019", "dsHistoryTypeCode", function (){
        			this.fnTran('List');
        		});
           }
        }

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "List";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "List" :
        			this.dsHistoryLog.clearData();

        			take.tranSelect(this, "List", "Statistics.historyLogList", "", "dsHistoryLog", "", sCallBack);

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
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
                case "List" : //조회 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "List";

            this.fnTran(sTranId);
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

            this.fnTran(sTranId);
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formid_onload,this);
        };
        this.loadIncludeScript("publishing025.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
