(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR030P02");
            this.set_titletext("휴가수기입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsVacation", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"APP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0","540",null,"320",null,this);
            obj.set_taborder("37");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","20",null,"20","20",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("휴가수기입력");
            obj.set_cssclass("sta_WF_title02");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staDateT","20","50","100","31",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staDate","staDateT:-1","50",null,"31","20",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staMemoT","20","staDateT:-1","100",null,null,"65",null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"57","25","20","20",null,null,null,null,this.divMain.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_save01");
            this.divMain.addChild(obj.name, obj);

            obj = new Calendar("calStartDate","staDateT:6","55","137","21",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("5");
            obj.set_editformat("yyyy-MM");
            obj.set_dateformat("yyyy-MM");
            obj.set_cssclass("cal_WF_essential");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staDayT","calStartDate:6","50","100","31",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("6");
            obj.set_text("일수");
            obj.set_cssclass("sta_WF_th01L");
            this.divMain.addChild(obj.name, obj);

            obj = new Edit("edtDayCnt","staDayT:6","55",null,"21","26",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("7");
            obj.set_maxlength("20");
            obj.set_inputtype("digit,dot");
            obj.set_cssclass("edt_WF_essential");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staAtt02","staMemoT:-1","staDayT:-1",null,null,"20","65",null,null,null,null,this.divMain.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divMain.addChild(obj.name, obj);

            obj = new TextArea("txtMemo","staMemoT:6","staDayT:5",null,null,"26","71",null,null,null,null,this.divMain.form);
            obj.set_taborder("9");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",540,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMain.form.txtMemo","value","dsVacation","REMARK_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divMain.form.edtDayCnt","value","dsVacation","VACATION_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR030P02.xfdl", function() {
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
        this.fv_objParent = null;

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
                this.fnInit();
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
        	this.dsVacation.addRow();

        	this.fv_objParent = this.parent;

        	var sDate = this.fv_objParent.YYYY + this.fv_objParent.MM + "01";	//임시 1일 세팅.

        	this.divMain.form.calStartDate.set_value(sDate);
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

        	var objDiv	= this.divMain.form;
        	var objDs 	= this.dsVacation;
        	var sDate 	= objDiv.calStartDate.value;
        	var sDayCnt = objDiv.edtDayCnt.value;
        	var sVType	= "";
        	var sVdType = "";

        	if(sDayCnt.indexOf(".") > 0) {
        		if(parseFloat(sDayCnt) < 1) {
        			sVType = "02";	// '02' 반차
        			sVdType = "03";	// '03' PM(오후)
        		} else {
        			sVType = "01";	// '01' 연차
        			sVdType = "01";	// '01' 종일
        		}

        		if(sDayCnt.split(".")[1] != "5") {
        			var sRealDay = sDayCnt.split(".")[0] + ".5";
        			objDs.setColumn(0, "VACATION_CNT"		, sRealDay);
        		}
        	} else {
        		sVType = "01";	// '01' 연차
        		sVdType = "01";	// '01' 종일
        	}

        	objDs.setColumn(0, "PROJECT_CD"			, this.fv_objParent.PROJECT_CD);
        	objDs.setColumn(0, "VACATION_START_DT"	, sDate);
        	objDs.setColumn(0, "VACATION_END_DT"	, sDate);
        	objDs.setColumn(0, "VACATION_TYPE"		, sVType);
        	objDs.setColumn(0, "VACATION_DATE_TYPE"	, sVdType);
        	objDs.setColumn(0, "APP_TYPE"			, "02");	// '02' 승인
        	objDs.setColumn(0, "REG_CD"				, this.fv_objParent.REG_CD);

        	if(take.nvl(objDiv.txtMemo.value, "") == "") {
        		var sTxt = "관리자 등록.";
        		objDs.setColumn(0, "REMARK_TXT" , sTxt);
        	}

            //take.tranSave(this, sTranId, "HumanResourceManagement.userVacation", "dsVacation", "", "", "fnCallback");
        	take.transaction(this, sTranId, "SVC_LOC::hr/userVacationManualSave.do", "dsVacation=dsVacation:U", "", "", "fnCallback");
        }
        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * btnSave_onclick : 버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
            if(this.fnChkVal()) {
        		this.fnSave();
        	}
        };

        //팝업 닫기(저장)
        this.fnGoList = function()
        {
        	this.opener.fnSearch();
        	this.close();
        }
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnChkVal = function(sParam, nParam)
        {
            var objDiv = this.divMain.form;
            var sDate  = take.nvl(objDiv.calStartDate.value, "");
        	var sDay   = take.nvl(objDiv.edtDayCnt.value, "");

        	if(sDate == ""){
        		take.alert(this, "Info", "일자를 선택해주세요.");
                return false;
            }

        	if(sDay == ""){
        		take.alert(this, "Info", "휴가 일수를 입력해주세요.");
                return false;
            }

        	return true;
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
                case "Save" :  //저장 콜백
                    this.fnGoList();
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
            this.divMain.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divMain.form.calStartDate.addEventHandler("onchanged",this.calStartDate_onchanged,this);
        };
        this.loadIncludeScript("HR030P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
