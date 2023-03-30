(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLoginP01");
            this.set_titletext("로그인 아이디/비밀번호찾기 팝업");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(520,364);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW\" size=\"256\" type=\"STRING\"/><Column id=\"USER_EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"PW_CHG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"sAuthVal\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divId","10","36","500",null,null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","129","40",null,"31","10",null,null,null,null,null,this.divId.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divId.addChild(obj.name, obj);

            obj = new Static("Static59","129","70",null,"31","10",null,null,null,null,null,this.divId.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divId.addChild(obj.name, obj);

            obj = new Static("Static61","129","99",null,"31","10",null,null,null,null,null,this.divId.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divId.addChild(obj.name, obj);

            obj = new Static("Static63","10","40","120","31",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("4");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divId.addChild(obj.name, obj);

            obj = new Edit("edtEmail","137","75",null,"21","142",null,null,null,null,null,this.divId.form);
            obj.set_taborder("1");
            this.divId.addChild(obj.name, obj);

            obj = new Static("Static65","10","70","120","31",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("5");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divId.addChild(obj.name, obj);

            obj = new Static("staUserId","129","185",null,"31","10",null,null,null,null,null,this.divId.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.divId.addChild(obj.name, obj);

            obj = new Static("Static70","10","185","120","31",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("13");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_th01L");
            this.divId.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","137","45",null,"21","142",null,null,null,null,null,this.divId.form);
            obj.set_taborder("0");
            this.divId.addChild(obj.name, obj);

            obj = new Edit("edtAuth","137","104",null,"21","142",null,null,null,null,null,this.divId.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.divId.addChild(obj.name, obj);

            obj = new Button("btnGetNum","edtEmail:7","73","86","23",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("10");
            obj.set_text("인증코드받기");
            obj.set_cssclass("btn_WF_basic02");
            this.divId.addChild(obj.name, obj);

            obj = new Static("Static18","10","155","450","30",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("12");
            obj.set_text("아이디 검색결과");
            obj.set_cssclass("sta_WF_title02");
            this.divId.addChild(obj.name, obj);

            obj = new Button("btnNumCheck","edtAuth:7","103","86","23",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("11");
            obj.set_text("인증코드확인");
            obj.set_cssclass("btn_WF_basic02");
            this.divId.addChild(obj.name, obj);

            obj = new Button("btnLogin","112","221","86","23",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("15");
            obj.set_text("로그인");
            obj.set_cssclass("btn_WF_basic02");
            this.divId.addChild(obj.name, obj);

            obj = new Static("Static02","10","99","120","31",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("6");
            obj.set_text("인증번호");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divId.addChild(obj.name, obj);

            obj = new Button("btnFindPw","btnLogin:7","221","86","23",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("16");
            obj.set_text("비밀번호찾기");
            obj.set_cssclass("btn_WF_basic02");
            this.divId.addChild(obj.name, obj);

            obj = new Button("btnExit","btnFindPw:7","221","86","23",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("26");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic02");
            this.divId.addChild(obj.name, obj);

            obj = new Static("Static05","10","10","440","20",null,null,null,null,null,null,this.divId.form);
            obj.set_taborder("3");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divId.addChild(obj.name, obj);

            obj = new Div("divPw","520","36","500",null,null,"10",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","129","70",null,"31","10",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static59","129","100",null,"31","10",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static61","129","129",null,"31","10",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static63","10","70","120","31",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("9");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divPw.addChild(obj.name, obj);

            obj = new Edit("edtEmail","137","105",null,"21","142",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("2");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static65","10","100","120","31",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("11");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static69","129","215",null,"31","10",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static70","10","215","120","31",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("18");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divPw.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","137","75",null,"21","142",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("1");
            this.divPw.addChild(obj.name, obj);

            obj = new Edit("edtAuth","137","134",null,"21","142",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divPw.addChild(obj.name, obj);

            obj = new Button("btnGetNum","363","103","86","23",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("13");
            obj.set_text("인증코드받기");
            obj.set_cssclass("btn_WF_basic02");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static18","10","185","450","30",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("17");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_title02");
            this.divPw.addChild(obj.name, obj);

            obj = new Button("btnNumCheck","363","133","86","23",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("16");
            obj.set_text("인증코드확인");
            obj.set_cssclass("btn_WF_basic02");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static02","10","129","120","31",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("14");
            obj.set_text("인증번호");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divPw.addChild(obj.name, obj);

            obj = new Button("btnChgPw","159","281","86","23",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("22");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("btn_WF_basic02");
            this.divPw.addChild(obj.name, obj);

            obj = new Button("btnExit","btnChgPw:7","281","86","23",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("46");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic02");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","120","31",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("7");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static03","129","40",null,"31","10",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divPw.addChild(obj.name, obj);

            obj = new Edit("edtUserId","137","45",null,"21","142",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("0");
            this.divPw.addChild(obj.name, obj);

            obj = new Edit("edtNewPw","137","220",null,"21","142",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("4");
            obj.set_password("true");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static04","129","245",null,"31","10",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td01L");
            this.divPw.addChild(obj.name, obj);

            obj = new Edit("edtPwCheck","137","250",null,"21","142",null,null,null,null,null,this.divPw.form);
            obj.set_taborder("5");
            obj.set_password("true");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static05","10","245","120","31",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("20");
            obj.set_text("비밀번호 확인");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static06","10","10","440","20",null,null,null,null,null,null,this.divPw.form);
            obj.set_taborder("6");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divPw.addChild(obj.name, obj);

            obj = new Static("Static01","10","10","440","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자 정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnFindId","10","10","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("아이디찾기");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("btnFindPw","112","10","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("비밀번호찾기");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divId.form
            obj = new Layout("default","",0,0,this.divId.form,function(p){});
            this.divId.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPw.form
            obj = new Layout("default","",0,0,this.divPw.form,function(p){});
            this.divPw.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",520,364,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPw.form.edtUserId","value","dsParam","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPw.form.edtUserNm","value","dsParam","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPw.form.edtEmail","value","dsParam","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPw.form.edtAuth","value","dsParam","sAuthVal");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPw.form.edtPwCheck","value","dsParam","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLoginP01.xfdl", function() {
        /**
        *  아이디/비밀번호찾기
        *
        *  @MenuPath    메인로그인 > 아이디/비밀번호찾기
        *  @FileName    MN010PT01.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.10.21
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.10.21      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_sAuthChk = "N";     //인증번호받기 확인
        this.fv_sAuthYn = "N";     //인증번호확인 완료
        this.fv_nSystemId = 'S000000001';     //시스템ID

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
        		//Script
        	}
        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Modify";

            var sParam = "sUserId='" + this.divPw.form.edtUserId.value + "' sUserPw='" + this.divPw.form.edtPwCheck.value
                        + "' sUserNm='" + this.divPw.form.edtUserNm.value + "' sUserEmail='" + this.divPw.form.edtEmail.value + "' PW_CHG_YN='" + "Y" + "'";

            take.transaction(this, sTranId, "SVC_LOC::mn/userPwUpdate.do", "", "", sParam, "fnCallback");
        }

        /**
         * fnTran : 트랜잭션
         * @param  {String} sTranId 트랜젝션 아이디
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            if (take.nvl(sTranId, "")=="") sTranId = "getAuth";

            var sParam;
            if (this.divId.visible) {
                if(sTranId == "getAuth") {
                    sParam = "sAuthType='" + "ID" + "' sUserNm='" + this.divId.form.edtUserNm.value + "' sUserEmail='" + this.divId.form.edtEmail.value + "'";
                } else {
                    sParam = "sAuthType='" + "ID" + "' sUserNm='" + this.divId.form.edtUserNm.value
                            + "' sUserEmail='" + this.divId.form.edtEmail.value + "' sAuthVal='" + this.divId.form.edtAuth.value + "'";
                }
            } else {
                if(sTranId == "getAuth") {
                    sParam = "sAuthType='" + "PW" + "' sUserId='" + this.divPw.form.edtUserId.value
                            + "' sUserNm='" + this.divPw.form.edtUserNm.value + "' sUserEmail='" + this.divPw.form.edtEmail.value + "'";
                } else {
                    sParam = "sAuthType='" + "PW" + "' sUserId='" + this.divPw.form.edtUserId.value + "' sUserNm='" + this.divPw.form.edtUserNm.value
                            + "' sUserEmail='" + this.divPw.form.edtEmail.value + "' sAuthVal='" + this.divPw.form.edtAuth.value + "'";
                }
            }

            switch(sTranId)
            {
                case "getAuth" :        //인증번호 받기 확인
                    take.transaction(this, sTranId, "SVC_LOC::mn/getAuth.do", "", "", sParam, "fnCallback");
                    break;
                case "authConfirm" :    //인증번호 확인
                    take.transaction(this, sTranId, "SVC_LOC::mn/authConfirm.do", "", "", sParam, "fnCallback");
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //상단 ID찾기 버튼 클릭이벤트
        this.btnFindId_onclick = function(obj,e)
        {
        	this.btnFindId.set_cssclass("btn_WF_tab02");
            this.btnFindPw.set_cssclass("btn_WF_tab01");

            this.divId.set_visible(true);
            this.divPw.set_visible(false);

            this.divId.set_left(10);
            this.divPw.set_left(500);

            this.fv_sAuthChk = "N";
            this.fv_sAuthYn = "N";
        };

        //상단 PW찾기 버튼 클릭이벤트
        this.btnFindPw_onclick = function(obj,e)
        {
        	this.btnFindId.set_cssclass("btn_WF_tab01");
            this.btnFindPw.set_cssclass("btn_WF_tab02");

            this.divId.set_visible(false);
            this.divPw.set_visible(true);

            this.divId.set_left(500);
            this.divPw.set_left(10);

            this.fv_sAuthChk = "N";
            this.fv_sAuthYn = "N";
        };

        //하단 로그인/취소 버튼 클릭이벤트
        this.btnExit_onclick = function(obj,e)
        {
        	var sBtnGbn = obj.name.substr(3);

            if (sBtnGbn == "Login") {
            	var sRtn = this.divId.form.staUserId.text;
                this.close(sRtn);
            } else {
                this.close();
            }
        };

        //Id탭 비밀번호찾기 버튼 클릭이벤트
        this.divId_btnFindPw_onclick = function(obj,e)
        {
        	if(this.fnCheckForm()) {
                this.btnFindId.set_cssclass("btn_WF_tab01");
                this.btnFindPw.set_cssclass("btn_WF_tab02");

                this.divId.set_visible(false);
                this.divPw.set_visible(true);

                this.divId.set_left(500);
                this.divPw.set_left(10);

                this.fv_sAuthChk = "N";
                this.fv_sAuthYn = "N";

                this.divPw.form.edtUserId.set_value(this.divId.form.staUserId.text);
                this.divPw.form.edtUserNm.set_value(this.divId.form.edtUserNm.value);
                this.divPw.form.edtEmail.set_value(this.divId.form.edtEmail.value);
            }
        };

        //인증번호받기 버튼 클릭 이벤트
        this.btnGetNum_onclick = function(obj,e)
        {
        	var bDivVisible = this.divId.visible;
            var objDivId, objDivPw;
            var sUserId, sUserNm, sEmail;

            //this.divId.form.edtEmail.value

            if (bDivVisible) {
                objDivId    = this.divId.form;
                sUserNm     = take.nvl(objDivId.edtUserNm.value, "");
                sEmail      = take.nvl(objDivId.edtEmail.value, "");
            } else {
            	objDivPw    = this.divPw.form;
                sUserId     = take.nvl(objDivPw.edtUserId.value, "");
                sUserNm     = take.nvl(objDivPw.edtUserNm.value, "");
                sEmail      = take.nvl(objDivPw.edtEmail.value, "");
            }

            if(!bDivVisible && sUserId == ""){
                alert("ID를 작성해주세요.");
                return false;
            }

            if(sUserNm == ""){
                alert("이름을 작성해주세요.");
                return false;
            }

            if(sEmail == ""){
                alert("이메일을 작성해주세요.");
                return false;
            }

            if(!take.isEmail(sEmail)){
                alert("이메일을 형식에 맞춰 주세요.");
                return false;
            }

            this.fv_sAuthChk = "Y";

            this.fnTran("getAuth");
        };

        // 인증번호 확인 버튼 클릭
        this.btnNumCheck_onclick = function(obj,e)
        {
            if(this.fv_sAuthChk != "Y") {
                alert("인증번호받기를 먼저 진행해주세요.");
                return;
            }
            var bDivId = this.divId.visible;
            if (bDivId) {
            	var sAuth = take.nvl(this.divId.form.edtAuth.value, "");
            } else {
            	var sAuth = take.nvl(this.divPw.form.edtAuth.value, "");
            }

            if(sAuth == ""){
                alert("인증번호를 작성해주세요.");
                return false;
            }

            this.fnTran("authConfirm");
        };

        // 비밀번호 변경 클릭
        this.divPw_btnChgPw_onclick = function(obj,e)
        {
        	if(this.fv_sAuthYn != "Y") {
                alert("인증번호받기를 먼저 진행해주세요.");
                return;
            }

            if(take.nvl(this.divPw.form.edtNewPw.value, "") == ""){
                alert("새 비밀번호를 작성해주세요.");
                this.divPw.form.edtNewPw.setFocus();
                return;
            }

            if(take.nvl(this.divPw.form.edtPwCheck.value, "") == ""){
                alert("2차비밀번호를 작성해주세요.");
                this.divPw.form.edtPwCheck.setFocus();
                return;
            }

            if (this.divPw.form.edtPwCheck.value != this.divPw.form.edtNewPw.value)
            {
            	alert("비밀번호를 확인해주세요.\n비밀번호가 같지않습니다.");
                this.divPw.form.edtPwCheck.setFocus();
                return;
            }

            if(take.confirm(this, "question", "비밀번호 변경 하시겠습니까?")) {
                this.fnSave("Modify");
            }
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var objDivId = this.divId.form;
            var sUserId   = take.nvl(objDivId.staUserId.text, "");
            //var sCode   = take.nvl(objDivSearch.edtCode.text, "");
            //this.divId.form.staID.

            //if(sUserId == ""){
            if(sUserId == "test"){
                alert("ID찾기를 먼저 진행해주세요.");
                return false;
            }

            return true;
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
            var bDivId = this.divId.visible;
            switch(sId)
            {
                case "getAuth" : //조회 콜백
                    alert("인증번호를 입력한 메일로 전송하였습니다.");
                    if (bDivId) {
                        this.divId.form.edtAuth.set_enable(true);
                        this.divId.form.edtAuth.setFocus();
                    } else {
                        this.divPw.form.edtAuth.set_enable(true);
                        this.divPw.form.edtAuth.setFocus();
                    }
                    break;
                case "authConfirm" : //조회 콜백
                    if (bDivId) {
                        alert("인증 되었습니다.\n아이디는 '" + sErrMsg + "' 입니다.");
                        this.divId.form.staUserId.set_text(sErrMsg);
                    } else {
                        alert("인증되었습니다.\n비밀번호를 변경해주세요.");
                        this.fv_sAuthYn = "Y";
                    }
                    break;
                case "Modify" :  //저장 콜백
                    alert("비밀번호 변경이 완료되었습니다.");
                    this.close();
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
            this.divId.form.btnGetNum.addEventHandler("onclick",this.btnGetNum_onclick,this);
            this.divId.form.btnNumCheck.addEventHandler("onclick",this.btnNumCheck_onclick,this);
            this.divId.form.btnLogin.addEventHandler("onclick",this.btnExit_onclick,this);
            this.divId.form.btnFindPw.addEventHandler("onclick",this.divId_btnFindPw_onclick,this);
            this.divId.form.btnExit.addEventHandler("onclick",this.btnExit_onclick,this);
            this.divPw.form.btnGetNum.addEventHandler("onclick",this.btnGetNum_onclick,this);
            this.divPw.form.btnNumCheck.addEventHandler("onclick",this.btnNumCheck_onclick,this);
            this.divPw.form.btnChgPw.addEventHandler("onclick",this.divPw_btnChgPw_onclick,this);
            this.divPw.form.btnExit.addEventHandler("onclick",this.btnExit_onclick,this);
            this.btnFindId.addEventHandler("onclick",this.btnFindId_onclick,this);
            this.btnFindPw.addEventHandler("onclick",this.btnFindPw_onclick,this);
        };
        this.loadIncludeScript("frmLoginP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
