(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcNews");
            this.set_titletext("뉴스");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNews", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"255\"/><Column id=\"ORIGINALLINK\" type=\"STRING\" size=\"255\"/><Column id=\"LINK\" type=\"STRING\" size=\"255\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"255\"/><Column id=\"PUBDATE\" type=\"STRING\" size=\"255\"/><Column id=\"NEWSID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdNewsMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsNews");
            obj.set_cssclass("grd_MF_content");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"200\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:TITLE\" wordWrap=\"char\" displaytype=\"text\" textAlign=\"left\" autosizerow=\"limitmin\" textDecoration=\"underline\"/><Cell col=\"2\" displaytype=\"date\" text=\"bind:PUBDATE\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" autosizerow=\"limitmin\" wordWrap=\"char\" cssclass=\"grd_WF_date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchBox","16","130","174","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("넥사크로");
            obj.set_visible("false");
            obj.set_text("넥사크로");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtSearchBox:10","130","64","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcNews.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    dbc > dbcNews
        *  @FileName    dbcNews.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.09.28
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.09.28      김대승             최초 생성
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
        this.dbcNews_onload = function(obj, e)
        {
        	var bTran;

        	bTran = this.parent.btran;

        	if (bTran) this.fnInit();
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
        	this.fnSearch("sendNews");
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
            if (take.nvl(sTranId, "")=="") sTranId = "sendNews";

        	var objSearchBox = this.edtSearchBox;
        	var sVal 		 = take.nvl(objSearchBox.value, "");
        	if(sVal=="") return;

        	var sSearchWord = sVal;
        	take.transaction
        	(
        		this,
        		"sendNews",
        		"SVC_LOC::dash/sendNews.do",
        		"",
        		"dsNews=dsNews",
        		"sSearchWord='"+sSearchWord+"'",
        		function (sId, nErr, sMsg) //sCallBack
        		{

        		},
        		false
        	);
        	objSearchBox.set_visible(false);
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
        //btnSearch_onclick : 검색 버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch("sendNews");
        };

        //edtSearchBox_onkeyup : 검색어 입력 박스 엔터 값 조회
        this.edtSearchBox_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch("sendNews");
        	}
        };

        //dbcNews_onkeyup : 폼 F2 버튼 수정 모드 전환
        this.dbcNews_onkeyup = function(obj,e)
        {
        	var objSearchBox = this.edtSearchBox;

        	// F2 수정모드
        	if(e.ctrlkey && e.keycode == 66){
        		objSearchBox.set_visible(true);
        		objSearchBox.setFocus();
        	}
        };

        this.grdNewsMain_oncelldblclick = function(obj,e)
        {
        	var objDs;
        	var nRow;
        	var sBindName, sLink;

        	objDs 	  = this.dsNews;
        	nRow  	  = objDs.rowposition;
        	sBindName = take.getBindColName(obj, e.cell);

        	// 제목 데이터 더블클릭시 링크 연결
        	if(sBindName == "TITLE"){
        		sLink = take.nvl(objDs.getColumn(nRow, "LINK"), "");
        		system.execBrowser(sLink);
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
                case "Transation id 01" : //조회 콜백
                    //Script
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
            this.addEventHandler("onkeyup",this.dbcNews_onkeyup,this);
            this.addEventHandler("onload",this.dbcNews_onload,this);
            this.grdNewsMain.addEventHandler("oncelldblclick",this.grdNewsMain_oncelldblclick,this);
            this.edtSearchBox.addEventHandler("onkeyup",this.edtSearchBox_onkeyup,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("dbcNews.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
