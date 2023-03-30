(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM010P01");
            this.set_titletext("조회사용자 팝업");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(505,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReadUser", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_READ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_READ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("gridMain","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsReadUser");
            obj.getSetter("extendgridoption").set("sort,find,filter,move,hide,excel,fix,reset,readonly,visible,personal");
            obj.getSetter("gridTitle").set("공지사항,1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"0\"/><Column size=\"132\"/><Column size=\"68\"/><Column size=\"0\"/><Column size=\"114\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"조회 수\"/><Cell col=\"4\" text=\"\"/><Cell col=\"5\" text=\"최근 조회일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:USER_NM\" textAlign=\"left\" displaytype=\"normal\" cssclass=\"expr:dataset.getColumn( currow, &apos;IMPORT_YN&apos; ) == &apos;Y&apos; ? &apos;import&apos; : &apos;&apos;\" padding=\"0px 0px 0px 0px\"/><Cell col=\"3\" text=\"bind:READ_CNT\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USER_ID\"/><Cell col=\"5\" text=\"bind:LAST_READ_DT\" textAlign=\"center\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CM010P01.xfdl", function() {
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
        this.fv_sSearch = null;
        this.fv_arrColInfo = null;
        this.fv_sProjectCd = take.nvl(this.parent.sProjectCd, "");
        this.fv_sMenuCd = take.nvl(this.parent.sMenuCd, "");
        this.fv_sBoardSeq = take.nvl(this.parent.sBoardSeq, "");

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.CM010P01_onload = function(obj, e)
        {
            this.fnInit();
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
        	//변수 선언
            var objDs, objDsIn;
            var sTitle, sSearch, sNameSpace, sInDs;

            //팝업 타이틀 세팅
            sTitle = "조회사용자 목록";
            this.set_titletext(sTitle);

        	this.fnSearch("Search");
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

            var sParam = "PROJECT_CD="+this.fv_sProjectCd;
        	sParam += " MENU_CD="+this.fv_sMenuCd;
        	sParam += " BOARD_SEQ="+this.fv_sBoardSeq;

            take.tranSelect(this, sTranId, "BoardManagement.boardReaduserList", "dsSearch", "dsReadUser", sParam, "fnCallback");
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
        /**
        * component_onclick : ~ 버튼 클릭
        */
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
                case "Search" : //조회 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }

        this.grdMain_oncelldblclick = function(obj,e)
        {
        	var arrRowidx = parseInt(obj.getSelectedRows());
        	var sDeptCd = take.nvl(this.dsDeptList.getColumn(arrRowidx, "DEPT_CD"), "");
        	var sDeptNm = take.nvl(this.dsDeptList.getColumn(arrRowidx, "DEPT_NM"), "");

        	this.opener.dsUserDetail.setColumn(0, "DEPT_CD", sDeptCd);
        	this.opener.dsUserDetail.setColumn(0, "DEPT_NM", sDeptNm);

        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CM010P01_onload,this);
            this.gridMain.addEventHandler("onselectchanged",this.gridMain_onselectchanged,this);
            this.gridMain.addEventHandler("oncellclick",this.gridMain_oncellclick,this);
            this.gridMain.addEventHandler("oncelldblclick",this.divDetail_gridMain_oncelldblclick,this);
        };
        this.loadIncludeScript("CM010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
