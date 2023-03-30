(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC010P02");
            this.set_titletext("데모ID 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,232);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDemoUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_YN\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","20",null,"21","20",null,null,null,null,null,this.divSearch.form);
            obj.set_text("데모ID 생성");
            obj.set_cssclass("sta_WF_title02");
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserId","20","46","120","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","139","46",null,"31","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserNm","20","76","120","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","139","76",null,"31","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","147","50",null,"23","27",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_value("take");
            obj.set_text("take");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","147","80",null,"23","27",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_password("false");
            obj.set_value("테이크");
            obj.set_text("테이크");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserPwOk","20","106","120","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","139","106",null,"31","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserPw","147","110",null,"23","27",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_password("false");
            obj.set_value("take1234");
            obj.set_text("take1234");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staValidDt","20","136","120","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("유효기간");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","139","136",null,"31","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calValidDtFr","147","141","91","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","calValidDtFr:0","139","21","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calValidDtTo","Static03:4","141","91","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","167",null,"20","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnCreate",null,"Static01_01:0","57","23","80",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_save01");
            obj.set_text("생성");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"Static01_01:0","57","23","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","0",null,null,"20","0","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",380,232,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SC010P02.xfdl", function() {
        /**
        *  데모ID 생성
        *
        *  @MenuPath    시스템관리 > 데모ID 생성
        *  @FileName    SC010P02.xfdl
        *  @Creator     천우성
        *  @CreateDate  2020.01.26
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.01.26      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
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

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @param  {String} N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	var today = new Date();
        	var st = take.getTodayTime().date.substr(0, 8);
        	var ed = take.toDateString(take.getAddMonths(take.getTodayTime().date, +1), "yyyyMMdd");

        	this.divSearch.form.calValidDtFr.set_value(st);
        	this.divSearch.form.calValidDtTo.set_value(ed);
        	this.divSearch.form.edtUserId.setFocus();

        	var userIdString = nexacro.round((Math.random()*10000)).toString().padLeft(5,"0");
        	this.divSearch.form.edtUserId.set_value( this.divSearch.form.edtUserId.value + (userIdString) );
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
                case "Save" :  //저장 콜백
                    this.alert("데모용 ID가 생성되었습니다.");
        			this.close();
                    break;
                default :
                    break;
            }
        }

        this.divSearch_btnCreate_onclick = function(obj,e)
        {
        	this.dsDemoUser.clearData();

        	var sUserId 	= take.nvl( this.divSearch.form.edtUserId.value, "" );
        	var sUserNm		= take.nvl( this.divSearch.form.edtUserNm.value, "" );
        	var sUserPw		= take.nvl( this.divSearch.form.edtUserPw.value, "" );
        	var sValidDtFr	= take.nvl( this.divSearch.form.calValidDtFr.value, "" );
        	var sValidDtTo	= take.nvl( this.divSearch.form.calValidDtTo.value, "" );

        	if( sUserId == "" )		take.alert(this, "Info", "사용자ID를 입력해 주세요.");
        	if( sUserNm == "" )		take.alert(this, "Info", "사용자명을 입력해 주세요.");
        	if( sUserPw == "" )		take.alert(this, "Info", "비밀번호를 입력해 주세요.");
        	if( sValidDtFr == "" )	take.alert(this, "Info", "유효기간 시작일을 입력해 주세요.");
        	if( sValidDtTo == "" )	take.alert(this, "Info", "유효기간 종료일을 입력해 주세요.");

        	var nRow = this.dsDemoUser.addRow();
        	this.dsDemoUser.setColumn(nRow, "USER_ID", sUserId);
        	this.dsDemoUser.setColumn(nRow, "USER_NM", sUserNm);
        	this.dsDemoUser.setColumn(nRow, "USER_PW", sUserPw);
        	this.dsDemoUser.setColumn(nRow, "VALID_YN", "Y");
        	this.dsDemoUser.setColumn(nRow, "VALID_START_DATE", sValidDtFr);
        	this.dsDemoUser.setColumn(nRow, "VALID_END_DATE", sValidDtTo);

        	take.transaction(this, "Save"
        					, "SVC_LOC::sc/demoUserCreate.do"
        					, "dsDemoUser=dsDemoUser"
        					, ""
        					, ""
        					, "fnCallback"
        					);
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
            this.divSearch.form.btnCreate.addEventHandler("onclick",this.divSearch_btnCreate_onclick,this);
            this.divSearch.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("SC010P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
