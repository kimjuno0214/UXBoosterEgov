(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("srcMaker_ViewLayout");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsViewLayout", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"KEY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdSub01","0","46",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsViewLayout");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Display\"/><Cell col=\"1\" text=\"Key\"/><Cell col=\"2\" text=\"Col ID\"/><Cell col=\"3\" text=\"Col Name\"/><Cell col=\"4\" text=\"Display Order\"/><Cell col=\"5\" text=\"Display Type\"/><Cell col=\"6\" text=\"Size\"/><Cell col=\"7\" text=\"Align\"/><Cell col=\"8\" text=\"Edit Y/N\"/><Cell col=\"9\" text=\"Edit Type\"/><Cell col=\"10\" text=\"필수입력 Y/N\"/><Cell col=\"11\" text=\"Bind Dataset\"/><Cell col=\"12\" text=\"ETC1\"/><Cell col=\"13\" text=\"ETC2\"/><Cell col=\"14\" text=\"ETC3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:DISPLAY_YN\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:KEY_YN\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_ID\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_NAME\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:DISPLAY_ORDER\"/><Cell col=\"5\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:DISPLAY_TYPE\" combodataset=\"dsDisplayType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:SIZE\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:ALIGN\" combodataset=\"dsCboAlign\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:EDIT_YN\"/><Cell col=\"9\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:EDIT_TYPE\" combodataset=\"dsEditType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:INPUT_YN\"/><Cell col=\"11\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:BIND_DATASET\" combodataset=\"dsDataset\" combocodecol=\"DATASET_NAME\" combodatacol=\"DATASET_NAME\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:ETC1\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:ETC2\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:ETC3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoad",null,"14","60","25","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Load");
            obj.set_cssclass("btn_cm_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"15","100","22","170",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("* Dataset : ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("srcMaker_ViewLayout.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
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
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.takeit_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {

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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

            //변수선언
            var sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "Load" :  // Query Load
        			this.dsViewLayout.clearData();

        			var sQueryId = this.parent.parent.divDetail.form.cboViewDataset1.value;
        			this.alert(sQueryId);
                    take.transaction(this, sTranId, "SVC_LOC::srcmaker/load.do", "", "dsViewLayout=dsViewLayout", "sQueryId='"+sQueryId+"'", sCallBack);
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
                case "Load" :  //Sub 저장 콜백
                    trace(this.dsViewLayout.saveXML());
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
            if (take.nvl(sTranId, "")=="") sTranId = "Transation id";

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
            if (take.nvl(sTranId, "")=="") sTranId = "Save transation id";

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

        /**
        * divDetail_btnLoad_onclick : Load 버튼 클릭
        */
        this.divDetail_btnLoad_onclick = function(obj,e)
        {
        	//this.alert(this.divDetail.form.cboViewDataset1.value);
        	this.fnTran('Load');
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

        this.fnSubBtnRole = function(objDs)
        {
           return;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.takeit_onload,this);
            this.grdSub01.addEventHandler("onheadclick",this.grid_onheadclick,this);
            this.btnLoad.addEventHandler("onclick",this.divDetail_btnLoad_onclick,this);
        };
        this.loadIncludeScript("srcMaker_ViewLayout.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
