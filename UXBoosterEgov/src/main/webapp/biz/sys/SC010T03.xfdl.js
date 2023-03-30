(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC010T03");
            this.set_titletext("시스템공통_시스템관리_약관등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1018,318);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSystemPolicy", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POLICY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static17","798","28","220","10",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tabPolicy","10","12",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpgPolicyInfo",this.tabPolicy);
            obj.set_text("시스템이용약관");
            this.tabPolicy.addChild(obj.name, obj);

            obj = new TextArea("txtPolicyInfo","10","10",null,null,"10","10",null,null,null,null,this.tabPolicy.tpgPolicyInfo.form);
            obj.set_taborder("0");
            this.tabPolicy.tpgPolicyInfo.addChild(obj.name, obj);

            obj = new Tabpage("tpgPrivacyInfo",this.tabPolicy);
            obj.set_text("개인정보처리방침");
            this.tabPolicy.addChild(obj.name, obj);

            obj = new TextArea("txtPrivacyInfo","10","10",null,null,"10","10",null,null,null,null,this.tabPolicy.tpgPrivacyInfo.form);
            obj.set_taborder("0");
            this.tabPolicy.tpgPrivacyInfo.addChild(obj.name, obj);

            obj = new Button("btnSaveSub",null,"5","46","23","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabPolicy.tpgPolicyInfo.form
            obj = new Layout("default","",0,0,this.tabPolicy.tpgPolicyInfo.form,function(p){});
            this.tabPolicy.tpgPolicyInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabPolicy.tpgPrivacyInfo.form
            obj = new Layout("default","",0,0,this.tabPolicy.tpgPrivacyInfo.form,function(p){});
            this.tabPolicy.tpgPrivacyInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1018,318,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabPolicy.tpgPolicyInfo.form.txtPolicyInfo","value","dsSystemPolicy","POLICY_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tabPolicy.tpgPrivacyInfo.form.txtPrivacyInfo","value","dsSystemPolicy","PRIVACY_INFO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SC010T03.xfdl", function() {
        /**
        *  약관등록
        *
        *  @MenuPath    시스템공통 > 시스템관리 > 약관등록
        *  @FileName    SC010T03.xfdl
        *  @Creator     천우성
        *  @CreateDate  2019.08.16
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.16      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_nSystemId = 'S000000001';     //시스템ID

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.take_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnTran('Detail');
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
            if (take.nvl(sTranId, "")=="") sTranId = "Detail";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "Detail" :
        			this.dsSystemPolicy.clearData();

        			take.tranSelect(this, "Detail", "SystemCommon.systemInfoDetail", "", "dsSystemPolicy", "SYSTEM_ID='" + this.fv_nSystemId + "'", sCallBack);

                    break;
        		case "Save" :

        			take.tranSave(this, "Save", "SystemCommon.systemInfoPolicy", "dsSystemPolicy", "", "", sCallBack);

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
                case "Detail" : //조회 콜백
                    //Script
                    break;
                case "Save" :  //저장 콜백
                    this.fnTran('Detail');
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

        this.btnSaveSub_onclick = function(obj,e)
        {
        	this.fnTran('Save');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.take_onload,this);
            this.btnSaveSub.addEventHandler("onclick",this.btnSaveSub_onclick,this);
        };
        this.loadIncludeScript("SC010T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
