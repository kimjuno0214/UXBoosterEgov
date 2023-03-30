(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcDirectorAtten");
            this.set_titletext("부재현황");
            this.set_scrollbartype("none none");
            this.set_border("0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(295,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_eng\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESTINATION\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NO\">0</Col><Col id=\"SABUN\">01</Col><Col id=\"NAME\">천우성</Col><Col id=\"POSITION\">대표이사</Col><Col id=\"DESTINATION\">세아네트웍스</Col></Row><Row><Col id=\"NO\">1</Col><Col id=\"SABUN\">02</Col><Col id=\"POSITION\">수석</Col><Col id=\"NAME\">김태규</Col><Col id=\"DESTINATION\"/></Row><Row><Col id=\"NO\">2</Col><Col id=\"SABUN\">03</Col><Col id=\"POSITION\">수석</Col><Col id=\"NAME\">고영민</Col><Col id=\"DESTINATION\"/></Row><Row><Col id=\"NO\">3</Col><Col id=\"SABUN\">04</Col><Col id=\"POSITION\">수석</Col><Col id=\"NAME\">김진표</Col><Col id=\"DESTINATION\">동방엔디에스</Col></Row><Row><Col id=\"NO\">4</Col><Col id=\"SABUN\">05</Col><Col id=\"POSITION\">선임</Col><Col id=\"NAME\">이동건</Col></Row><Row><Col id=\"NO\">5</Col><Col id=\"SABUN\">06</Col><Col id=\"POSITION\">선임</Col><Col id=\"NAME\">김대승</Col></Row><Row><Col id=\"NO\">6</Col><Col id=\"SABUN\">07</Col><Col id=\"POSITION\">선임</Col><Col id=\"NAME\">전영찬</Col><Col id=\"DESTINATION\">동방엔디에스</Col></Row><Row><Col id=\"NO\">7</Col><Col id=\"SABUN\">08</Col><Col id=\"POSITION\">선임</Col><Col id=\"NAME\">신준민</Col></Row><Row><Col id=\"NO\">8</Col><Col id=\"SABUN\">09</Col><Col id=\"POSITION\">수석</Col><Col id=\"NAME\">정해원</Col><Col id=\"DESTINATION\">세아네트웍스</Col></Row><Row><Col id=\"NO\">9</Col><Col id=\"SABUN\">10</Col><Col id=\"POSITION\">수석</Col><Col id=\"NAME\">디자이너</Col><Col id=\"DESTINATION\">외부</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_DashboardTop");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"40","30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("재실 현황");
            obj.set_cssclass("sta_MF_Title");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnReload",null,"10","20","20","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_reset01");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divMain","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("bottom");
            obj.set_cssclass("div_MF_DashboardBot");
            this.addChild(obj.name, obj);

            obj = new Static("staToday","5","0","100","15",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("기준시");
            obj.set_cssclass("sta_MF_Date");
            this.divMain.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","468","10","285","50",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Member");
            obj.set_visible("true");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button02","145","10","60","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("부재중");
            obj.set_cssclass("btn_MF_MemberIcon03");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button01","80","10","60","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("회의중");
            obj.set_cssclass("btn_MF_MemberIcon02");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","15","10","60","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("재실");
            obj.set_cssclass("btn_MF_MemberIcon01");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button02_00","210","10","60","28",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("4");
            obj.set_text("외근중");
            obj.set_cssclass("btn_MF_MemberIcon03");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Div("divItem01","465","70",null,"50","-455",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this.divItem01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Member");
            this.divItem01.addChild(obj.name, obj);

            obj = new Button("Button02",null,"11","60","28","15",null,null,null,null,null,this.divItem01.form);
            obj.set_taborder("1");
            obj.set_text("부재중");
            obj.set_cssclass("btn_MF_MemberIcon03");
            obj.set_visible("true");
            this.divItem01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divItem01.form
            obj = new Layout("default","",0,0,this.divItem01.form,function(p){});
            this.divItem01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",295,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcDirectorAtten.xfdl", function() {
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
        * dashDirectorAtten_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.dashDirectorAtten_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnAddRow, fnSave, fnDelRow, fnExcel...)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Transation id";
            take.tranSelect(this,sTranId,"Namespace","sInDataset", "sOutDataset", "sParam", "fnCallback");
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

        /**
         * fnExcel : 엑셀 export 함수 (필수) --> 공통 Excel download에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnExcel = function(fnExcel)
        {
            //공통 Excel download에서 호출할 디폴트값 세팅
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
            this.addEventHandler("onload",this.dashDirectorAtten_onload,this);
            this.divTop.form.btnReload.addEventHandler("onclick",this.divTop_divHead_btnReload_onclick,this);
            this.PopupDiv00.addEventHandler("oncloseup",this.PopupDiv00_oncloseup,this);
        };
        this.loadIncludeScript("dbcDirectorAtten.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
