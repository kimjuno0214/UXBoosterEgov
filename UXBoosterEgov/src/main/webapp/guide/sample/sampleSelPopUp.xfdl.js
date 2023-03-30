(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("팝업 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REF1\" type=\"STRING\" size=\"255\"/><Column id=\"REF2\" type=\"STRING\" size=\"255\"/><Column id=\"REF3\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"sParentKey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"DATA\">일번</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"DATA\">이번</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTypeT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사용자선택");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrdNoT","359","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtOrdNo","442","10","110","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","698","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","780","10","110","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTypeCd","103","10","100","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTypeNm","206","10","120","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnCodeFind","178","11","24","19",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("ㅇ");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","485","divSearch:0","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","57",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:9",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","30",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"CHK\"/><Cell col=\"1\" text=\"키코드\"/><Cell col=\"2\" text=\"GROUP_ID\"/><Cell col=\"3\" text=\"CODE_ID\"/><Cell col=\"4\" text=\"PARENT_KEY\"/><Cell col=\"5\" text=\"CODE_NM\"/><Cell col=\"6\" text=\"ML_CD\"/><Cell col=\"7\" text=\"REF1\"/><Cell col=\"8\" text=\"REF2\"/><Cell col=\"9\" text=\"REF3\"/><Cell col=\"10\" text=\"DESC_TXT\"/><Cell col=\"11\" text=\"CODE_ORDER\"/><Cell col=\"12\" text=\"USE_YN\"/><Cell col=\"13\" text=\"REG_DT\"/><Cell col=\"14\" text=\"REG_CD\"/><Cell col=\"15\" text=\"REG_NM\"/><Cell col=\"16\" text=\"MOD_DT\"/><Cell col=\"17\" text=\"MOD_CD\"/><Cell col=\"18\" text=\"MOD_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CODE_KEY\"/><Cell col=\"2\" text=\"bind:GROUP_ID\"/><Cell col=\"3\" text=\"bind:CODE_ID\"/><Cell col=\"4\" text=\"bind:PARENT_KEY\"/><Cell col=\"5\" text=\"bind:CODE_NM\"/><Cell col=\"6\" text=\"bind:ML_CD\"/><Cell col=\"7\" text=\"bind:REF1\"/><Cell col=\"8\" text=\"bind:REF2\"/><Cell col=\"9\" text=\"bind:REF3\"/><Cell col=\"10\" text=\"bind:DESC_TXT\"/><Cell col=\"11\" text=\"bind:CODE_ORDER\"/><Cell col=\"12\" text=\"bind:USE_YN\"/><Cell col=\"13\" text=\"bind:REG_DT\"/><Cell col=\"14\" text=\"bind:REG_CD\"/><Cell col=\"15\" text=\"bind:REG_NM\"/><Cell col=\"16\" text=\"bind:MOD_DT\"/><Cell col=\"17\" text=\"bind:MOD_CD\"/><Cell col=\"18\" text=\"bind:MOD_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtOrdNo","value","dsSearch","sParentKey");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleSelPopUp.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
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
                //Script
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
            if (take.nvl(sTranId, "")=="") sTranId = "codeSearch";
        	var sParam = "sParentKey='" + take.nvl(this.divSearch.form.edtOrdNo.value,"") + "'";
        	this.dsList.clearData();
        	this.divSearch.form.edtOrdNo.updateToDataset();
            take.tranSelect(this,sTranId,"SystemCommon.codeInfoList","dsSearch", "dsList", "", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save transation id";
            take.tranSave(this, sTranId, "NAMESPACE", "sInDs", "sOutDs", "sParam", "fnCallback");
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
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //유형 돋보기 찾기 버튼 클릭 이벤트
        this.divSearch_btnCodeFind_onclick = function(obj,e)
        {
            this.fnPopUpOpen();
        };

        //유형 코드 에디터 키 다운 버튼
        this.divSearch_edtTypeCd_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
                this.fnPopUpOpen();

            } else if (e.keycode==8) {
                if (take.nvl(this.divSearch.form.edtTypeNm.value, "")!="")
                {
                    this.divSearch.form.edtTypeCd.set_value("");
                    this.divSearch.form.edtTypeNm.set_value("");
                }
            }
        };

        //유형 코드명 변경 이벤트
        this.divSearch_edtTypeNm_onchanged = function(obj,e)
        {
        	if (take.nvl(obj.vale, "")!="")
            {
                this.parent.parent.getNextComponent(this.parent).setFocus();
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
                case "codeSearch" : //조회 콜백
                    trace(this.dsList.saveXML());
                    break;
                case "Transation id 02" :  //조회 콜백
                    //Script
                    break;
                case "Transation id 03" : //조회 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }

        this.fnPopUpOpen = function()
        {
            var sTitle  = "사용자 선택";
            var sSearchTxt = "";

            take.dataSelPopUp(
                this,
                "PopUp",
                sTitle,
                sSearchTxt,
                "",
                //"Main.codeSimpleSelect",
                "HumanResourceManagement.userList",
                "",
                "PROJECT_CD=" + nexacro.getApplication().av_sProjectCd,
                [["USER_CD", "ID", "40"],["USER_NM", "사용자명", "40"],["USER_POSITION_NM", "직책", "20"]],
                false,
                function(sId, sRtn) {
                    if (take.nvl(sRtn, "")!="")
                    {
                        var nIdx = sRtn.indexOf(",");
                        this.divSearch.form.edtTypeCd.set_value(sRtn.substr(0, nIdx));
                        this.divSearch.form.edtTypeNm.set_value(sRtn.substr(nIdx+1));

                    } else {
                        this.divSearch.form.edtTypeCd.set_value("");
                        this.divSearch.form.edtTypeNm.set_value("");
                    }
                }
            );
        }


        this.divSearch_edtTypeCd_onkeyup = function(obj,e)
        {
        	//var sCode = take.nvl(obj.value, "");

            this.divSearch.form.edtTypeNm.set_value("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtTypeCd.addEventHandler("onkeydown",this.divSearch_edtTypeCd_onkeydown,this);
            this.divSearch.form.edtTypeCd.addEventHandler("onkeyup",this.divSearch_edtTypeCd_onkeyup,this);
            this.divSearch.form.edtTypeNm.addEventHandler("onchanged",this.divSearch_edtTypeNm_onchanged,this);
            this.divSearch.form.btnCodeFind.addEventHandler("onclick",this.divSearch_btnCodeFind_onclick,this);
        };
        this.loadIncludeScript("sampleSelPopUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
