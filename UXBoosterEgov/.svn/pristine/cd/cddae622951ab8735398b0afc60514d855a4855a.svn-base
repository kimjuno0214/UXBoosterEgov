//XJS=smpForm01.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
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
            var objDivForm;

        	//공통코드
        	this.fnCommonCode();

            objDivForm = this.divSearch.form;

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
                    sParam =   "sDeptCd="  + take.nvl(objDivForm.cboDept.value,"");   //부서코드
                    sParam +=  " sUserId=" + take.nvl(objDivForm.edtUserId.value,""); //사용자 아이디
                    sParam +=  " sUseYn="  + take.nvl(objDivForm.cboUseYn.value,"");  //사용 여부

                    //데이터셋 비우기
        			this.dsList.clearData();

                    //타이틀 초기화
                    this.divDetail.form.staTitle.set_text("사용자 목록");

                    //조회
        			take.tranSelect(
                        this,                          //현재 Form 객체
                        sTranId,                       //Transaction Id
                        "Sample.smpForm01JoinSelect",  //sqlMapperId
                        "",                    //Indataset(서버로 보낼 dataset)
                        "dsList",                      //Outdataset(서버에서 받을 dataset)
                        sParam,                            //Parameter
                        "fnCallBack");                 //Call Back 함수명 (함수를 바로 사용 가능)

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

                    //타이틀에 조회 건수 표기
                    this.divDetail.form.staTitle.set_text("사용자 목록 (총 " + this.dsList.rowcount + "건)");

                    break;

                default :
                    break;
            }
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
