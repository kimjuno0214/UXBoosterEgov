(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PLN010P04");
            this.set_titletext("기관 검토 조회");
            this.set_cssclass("fm_work");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","0","42",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","20","20",null,"21","160",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기관 검토 목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("gridGds","20","Static24:5",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"인증분야\"/><Cell col=\"1\" rowspan=\"2\" text=\"인증종류\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"3\" rowspan=\"2\" text=\"세부품목명\" autosizecol=\"limitmin\"/><Cell col=\"4\" rowspan=\"2\" text=\"시험기관\"/><Cell col=\"5\" rowspan=\"2\" text=\"가능여부\" autosizecol=\"limitmin\"/><Cell col=\"6\" colspan=\"2\" text=\"시험 불가 기간\" autosizecol=\"limitmin\"/><Cell col=\"8\" rowspan=\"2\" text=\"비고\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"6\" text=\"시작일\"/><Cell row=\"1\" col=\"7\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:CERT_FLD_NM\" displaytype=\"normal\" combodataset=\"dsCertKndCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CERT_KND_NM\" displaytype=\"normal\" combodataset=\"dsCertKndCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:GDS_NM\" combodataset=\"dsGdsCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"normal\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:DETAIL_GDS_NM\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"4\" text=\"bind:TEST_INST_NM\" suppress=\"1\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:POSBL_YN_CD\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"center\" combodataset=\"dsYn\" combodisplaynulltext=\"Y\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltype=\"nulltext\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:IMPRTY_BGNDE\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:IMPRTY_ENDDE\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"8\" text=\"bind:RM\" edittype=\"normal\" autosizecol=\"limitmin\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PLN010P04.xfdl", function() {
        /**
        *  위해정보코드 선택
        *
        *  @MenuPath    기초정보관리 > 시험항목관리
        *  @FileName    BAS020P02.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.01.26
        *  @Version     1.0
        *  @Desction    시험항목관리 화면에서 위해정보코드 선택 화면
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2023.01.26      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_bWebOnload = false;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_sOdrId = take.nvl(this.parent.sOdrId, "");
        this.fv_sDetailGdsId = take.nvl(this.parent.sDetailGdsId, "");

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           this.fnSearch();
        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

        	this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        	this.dsSearch.setColumn(0, "DETAIL_GDS_ID", this.fv_sDetailGdsId);
        	trace(this.dsSearch.saveXML());
        	take.tranSelect(this, "Search", "safety.imposibleTestInstSelect", "dsSearch", "dsList", "", "fnCallback");

        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
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

        /* 닫기 버튼 클릭 이벤트 */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/


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
                case "Save" : //저장 콜백
                    break;
        		case "Delete" : //삭제 콜백
        			break;
                case "Search" :  //조회 콜백
                    break;
                default :
                    break;
            }
        };

        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.CM010P03_ontimer,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("PLN010P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
