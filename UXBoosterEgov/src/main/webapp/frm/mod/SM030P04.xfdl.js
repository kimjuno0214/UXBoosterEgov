(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SM030P04");
            this.set_titletext("설문참여자 결과 팝업");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_LEGEND_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LEGEND_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVEY_ITEM_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSurveyItemReg","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLegend","0","0",null,null,"0","0",null,null,null,null,this.divSurveyItemReg.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"보기\"/></Band><Band id=\"body\"><Cell edittype=\"none\" displaytype=\"normal\" text=\"bind:LEGEND_NM\"/></Band></Format></Formats>");
            this.divSurveyItemReg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSurveyItemReg.form
            obj = new Layout("default","",0,0,this.divSurveyItemReg.form,function(p){});
            this.divSurveyItemReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",510,230,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SM030P04.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    SM030P04.xfdl
        *  @Creator     김진표
        *  @CreateDate  2021.04.13
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2021.04.13      김진표             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = take.nvl(this.parent.sProjectCd, "");
        this.fv_sSurveySeq = take.nvl(this.parent.sSurveySeq, "");
        this.fv_sSurveyItemSeq = take.nvl(this.parent.sSurveyItemSeq, "");

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInit();
           }
        }

        /****************************************************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow, fnExcel, fnPrint)
        ****************************************************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	this.fnSearch();
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
            if (take.nvl(sTranId, "")=="") sTranId = "surveyResultUser";

        	var sParam = "";
        	var sNamespace = "SurveyManagementMapper.surveyUserResultList";

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "PROJECT_CD", this.fv_sProjectCd);
        	this.dsSearch.setColumn(0, "SURVEY_SEQ", this.fv_sSurveySeq);
        	this.dsSearch.setColumn(0, "SURVEY_ITEM_SEQ", this.fv_sSurveyItemSeq);

            take.tranSelect
        	(
        		this,
        		sTranId,
        		sNamespace,
        		"dsSearch",
        		"dsList",
        		sParam,
        		"fnCallBack"
        	);
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
            //take.tranSave(this, sTranId, "NAMESPACE", "sInDs", "sOutDs", "sParam", "fnCallBack");
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

        /**
         * fnExcel : 엑셀 다운로드 함수 (필수) --> 공통 엑셀 다운로드에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @return {N/A} N/A
         * @example this.fnExcel(sGrdId, nRow);
         */
        this.fnExcel = function(sGrdId)
        {
            //ExportExcelGrid 파일명, 시트명, 타이틀명
        	//this.Grid00.ExportExcelGrid("testExcelFile", "userList", "");
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
        //component_onclick : ~ 버튼 클릭

        this.component_onclick = function(obj,e)
        {
            //Script
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
        * fnCallback : transaction callBack
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
                case "surveyResultUser" : //조회 콜백
                    //trace(this.dsList.saveXML());
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSurveyItemReg.form.grdLegend.addEventHandler("oncellclick",this.divTimeLineReg_grdFile_oncellclick,this);
        };
        this.loadIncludeScript("SM030P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
