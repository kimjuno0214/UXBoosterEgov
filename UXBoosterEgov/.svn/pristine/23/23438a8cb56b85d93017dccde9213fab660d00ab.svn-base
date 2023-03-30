(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLoginS02");
            this.set_titletext("로그인 회원등록 서브화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,556);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserJoin", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" SIZE=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" SIZE=\"256\" type=\"STRING\"/><Column id=\"USER_PW\" SIZE=\"256\" type=\"STRING\"/><Column id=\"USER_EMAIL\" SIZe=\"256\" type=\"STRING\"/><Column id=\"USER_MOBILE\" TYpe=\"STRING\" size=\"256\"/><Column id=\"AGREE_SYS\" TYPE=\"STRING\" size=\"256\"/><Column id=\"AGREE_PERSON\" Type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("tgdsLang", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staLogin",null,"25","84","25","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_cssclass("sta_WF_chgLoginBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","95","79","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_loginLogo");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","95","129","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("이름");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","95","169","168","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("아이디");
            obj.set_inputfilter("comma,dot,sign,space,symbol");
            obj.set_inputtype("alpha,english,digit");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSystem","95","365","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("UXBooster 시스템 이용약관에 동의함.");
            obj.set_truevalue("Y");
            obj.set_falsevalue("X");
            this.addChild(obj.name, obj);

            obj = new Button("btnJoin","95","421","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_WF_login");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","95","466","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_findInfo");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPw1","95","209","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("비밀번호");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPw2","95","249","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("비밀번호확인");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","95","289","168","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("이메일");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMobile","95","329","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_displaynulltext("핸드폰");
            obj.set_inputfilter("sign,space,symbol,dot,comma,alpha");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkPersonalInfo","95","385","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("개인정보처리 동의");
            obj.set_truevalue("Y");
            obj.set_falsevalue("X");
            this.addChild(obj.name, obj);

            obj = new Button("btnChkId","edtUserId:3","169","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("중복체크");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnChkMail","edtEmail:3","289","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("중복체크");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("staChkId","95","509","231","10",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_color("red");
            obj.set_font("8px/normal \"Arial\",\"Noto Sans CJK KR\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,556,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtUserNm","value","dsUserJoin","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtUserId","value","dsUserJoin","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtUserPw1","value","dsUserJoin","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtEmail","value","dsUserJoin","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtMobile","value","dsUserJoin","USER_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","chkSystem","value","dsUserJoin","AGREE_SYS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","chkPersonalInfo","value","dsUserJoin","AGREE_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLoginS02.xfdl", function() {
        /**
        *  로그인
        *
        *  @MenuPath    메인 > 로그인 > 회원가입
        *  @FileName    MN080.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.10.22
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.10.22      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sChkId = "N";     //ID 중복 확인
        this.fv_sChkMail = "N";   //Mail 중복 확인
        this.fv_nSystemId = 'S000000001';     //시스템ID

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
        	this.ProgId="GM00000003";
            this.ProgNm="GM00000003";

        	//로그인 이후 로그아웃했을경우 기존에 사용한 다국어 코드 세팅
            if (take.nvl(nexacro.getApplication().av_sLangCd,"")=="")
            {
                nexacro.getApplication().av_sLangCd = take.nvl(nexacro.getEnvironment().locale, "ko_KR");
            }

            if (take.bDomain)
            {
                //다국어 코드 가져오기
                this.fnGetLang();
            }

           //if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           //{
                //Script
        		//take.tranSelect(this,"PolicySearch","Main.policySelect","dsSearch", "dsPolicy", "", "fnCallback");
        		take.transaction(this, "PolicySearch", "SVC_LOC::mn/policy.do", "dsSearch=dsSearch", "dsPolicy", "", "fnCallback");
           //}
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

            //take.tranSave(this, sTranId, "UserManagement.userInfo", "dsUserJoin", "", "", "fnCallback");
        }

        /**
         * fnTran : 트랜잭션
         * @param  {String} sTranId 트랜젝션 아이디
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            if (take.nvl(sTranId, "")=="") sTranId = "ChkId";

            var sParam;

            switch(sTranId)
            {
                case "ChkId" :        //아이디확인
                    sParam = "sUserId='" + this.edtUserId.value + "'";
                    take.transaction(this, sTranId, "SVC_LOC::mn/dupCheck.do", "", "", sParam, "fnCallback");
                    break;
                case "ChkMail" :    //메일중복확인
                    sParam = "sUserEmail='" + this.edtEmail.value + "'";
                    take.transaction(this, sTranId, "SVC_LOC::mn/dupCheck.do", "", "", sParam, "fnCallback");
                    break;
                case "Join" :    // 회원가입
                    take.transaction(this, sTranId, "SVC_LOC::mn/userJoin.do", "dsUserJoin=dsUserJoin:U", "", "", "fnCallback");
                    break;
                default :
                    //ID 동적 구현
        //             sParam = "sUserId='" + this.edtUserId.value + "'";
        //             take.tranSelect(this, sTranId, "Main.dupCheck2", "", "dsResult", sParam, "fnCallback");
                    break;
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //상단 로그인 클릭
        this.staLogin_onclick = function(obj,e)
        {
        	this.getOwnerFrame().parent.frame.form.divCenter.form.divLogIn.set_url("frm::frmLoginS01.xfdl");
        };

        //동의 체크박스 선택
        this.CheckBox_onchanged = function(obj,e)
        {
        	if(obj.value != "X") {
                obj.set_value("X");
                var aAgrKey = {sTitle:"개인정보처리동의/시스템약관", sFlag:"Agree", sChk1:this.chkSystem.value, sChk2:this.chkPersonalInfo.value};
                take.openPopup(this, "MN020PT01", "frm::frmLoginP02.xfdl", aAgrKey, "", "fnPopCallback", false);
            }
        };

        // 회원가입버튼
        this.btnJoin_onclick = function(obj,e)
        {
        	if(this.fnCheckForm()) {
                if(take.confirm(this, "question", "회원가입을 진행하시겠습니까?")) {
                    this.fnTran("Join");
                }
            }
        };

        // 취소버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getOwnerFrame().parent.frame.form.divCenter.form.divLogIn.set_url("frm::frmLoginS01.xfdl");
        };

        //폼 클릭 이벤트 포커스아웃
        this.MN010PT02_onclick = function(obj,e)
        {
        	this.btnJoin.setFocus();
        };

        //중복체크 버튼 클릭 이벤트
        this.btnChk_onclick = function(obj,e)
        {
        	var sBtnGbn = obj.name.substr(3);

            if (sBtnGbn == "ChkId") {
                if(take.nvl(this.edtUserId.value, "") == ""){
                    take.alert(this, "", "ID를 작성해주세요.");
                    this.edtUserId.setFocus();
                    return;
                }

            	this.fnTran("ChkId");
            } else {
                if(take.nvl(this.edtEmail.value, "") == ""){
                    take.alert(this, "", "이메일을 작성해주세요.");
                    this.edtEmail.setFocus();
                    return;
                }
        		else if( !take.isEmail(this.edtEmail.value) ){
        			take.alert(this, "", "이메일 형식이 잘못되었습니다.");
                    this.edtEmail.setFocus();
                    return;
        		}

                this.fnTran("ChkMail");
            }
        };

        // 모바일 번호 형식 체크
        this.edtMobile_oninput = function(obj,e)
        {
        	var sVal = obj.value;
            var sMobile = '';
            sVal = sVal.replace(/[^0-9]/g, '');

            if( sVal.length < 4){
                return sVal;
            }else if(sVal.length < 7){
                sMobile += sVal.substr(0, 3);
                sMobile += '-';
                sMobile += sVal.substr(3);
            }else if(sVal.length < 11){
                sMobile += sVal.substr(0, 3);
                sMobile += '-';
                sMobile += sVal.substr(3, 3);
                sMobile += '-';
                sMobile += sVal.substr(6);
            }else{
                sMobile += sVal.substr(0, 3);
                sMobile += '-';
                sMobile += sVal.substr(3, 4);
                sMobile += '-';
                sMobile += sVal.substr(7);
            }

            this.edtMobile.set_value(sMobile);
        };

        //ID,Email 중복체크 동적
        // this.edtUserId_onkillfocus = function(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo)
        // {
        //     if (take.nvl(this.edtUserId.value, "") != "") {
        //     	if ((this.edtUserId.value).length < 2)
        //     	{
        //     		alert("ID를 두자 이상 작성해주세요.");
        //             return;
        //     	}
        //         this.fnTran("IdTest");
        //     }
        // };

        // Edit_onkeyup : 엔터로 강제 포커스아웃
        this.Edit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
                var sBtnId = obj.name.substr(3);

                switch(sBtnId) {
                case "UserNm":
                    this.edtUserId.setFocus();
                	break;
                case "UserId":
                    this.edtUserPw1.setFocus();
                	break;
                case "UserPw1":
                    this.edtUserPw2.setFocus();
                	break;
                case "UserPw2":
                    this.edtEmail.setFocus();
                	break;
                case "Email":
                    this.edtMobile.setFocus();
                	break;
                default:
                    this.btnJoin.setFocus();
                    break;
                }
            }
        };

        // dsUserJoin_oncolumnchanged : 회원가입정보 변경
        this.dsUserJoin_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'USER_ID'){
        		this.fv_sChkId = "N";
        	}else if(e.columnid == 'USER_EMAIL'){
        		this.fv_sChkMail = "N";
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
            var sUserId     = take.nvl(this.edtUserId.value, "");
            var sUserNm     = take.nvl(this.edtUserNm.value, "");
            var sUserPw1    = take.nvl(this.edtUserPw1.value, "");
            var sUserPw2    = take.nvl(this.edtUserPw2.value, "");
            var sEmail      = take.nvl(this.edtEmail.value, "");
            var sMobile     = take.nvl(this.edtMobile.value, "");

            if(sUserNm == ""){
                take.alert(this, "Info", "이름을 작성해주세요.");
                this.edtUserNm.setFocus();
                return false;
            }

            if(sUserId == ""){
                take.alert(this, "Info", "ID를 작성해주세요.");
                this.edtUserId.setFocus();
                return false;
            }

            if(sUserPw1 == ""){
                take.alert(this, "Info", "비밀번호를 작성해주세요.");
                this.edtUserPw1.setFocus();
                return false;
            }

            if(sUserPw2 == ""){
                take.alert(this, "Info", "비밀번호확인란을 작성해주세요.");
                this.edtUserPw2.setFocus();
                return false;
            }

            if (sUserPw1 != sUserPw2)
            {
            	take.alert(this, "Info", "비밀번호를 확인해주세요.\n비밀번호가 같지않습니다.");
                this.edtUserPw2.setFocus();
                return false;
            }

            if(sEmail == ""){
                take.alert(this, "Info", "이메일을 작성해주세요.");
                this.edtEmail.setFocus();
                return false;
            }

            if(!take.isEmail(sEmail)){
                take.alert(this, "Info", "이메일을 형식에 맞춰 주세요.");
                this.edtEmail.setFocus();
                return false;
            }

        //     if(sMobile == ""){
        //         alert("핸드폰번호를 작성해주세요.");
        //         this.edtMobile.setFocus();
        //         return false;
        //     }

            if( sMobile != "" && !this.fnMobileChk(sMobile) ){
                take.alert(this, "Info", "핸드폰번호를 확인해주세요.");
                this.edtMobile.setFocus();
                return false;
            }

            if(this.fv_sChkId == "N"){
                take.alert(this, "Info", "ID 중복체크를 완료해주세요.");
                return false;
            }

            if(this.fv_sChkMail == "N"){
                take.alert(this, "Info", "이메일 중복체크를 완료해주세요.");
                return false;
            }

            if(this.chkSystem.value == "X"){
                take.alert(this, "Info", "서비스약관에 대해 동의해주세요.");
                this.chkSystem.setFocus();
                return false;
            }

            if(this.chkPersonalInfo.value == "X"){
                take.alert(this, "Info", "개인정보처리방침에 대해 동의해주세요.");
                this.chkPersonalInfo.setFocus();
                return false;
            }

            return true;
        };

        /**
         * fnMobileChk : 폰번호 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnMobileChk = function(sMobile)
        {
            var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
            if (!regExp.test(sMobile))
            {
                return false;
            }

            return true;
        };

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
                case "ChkId" : //조회 콜백
                    take.alert(this, "Info", "사용할수 있는 ID 입니다.");
                    this.fv_sChkId = "Y";
                    this.edtUserPw1.setFocus();
                    break;
                case "ChkMail" : //조회 콜백
                    take.alert(this, "Info", "사용할수 있는 이메일 입니다.");
                    this.fv_sChkMail = "Y";
                    this.edtMobile.setFocus();
                    break;
                case "Join" :  //저장 콜백
                    take.alert(this, "Info", "회원가입이 정상적으로 완료되었습니다.");

                    this.getOwnerFrame().parent.frame.form.divCenter.form.divLogIn.set_url("frm::frmLoginS01.xfdl");
                    break;
                default :
        //             if(this.dsResult.getColumn(0,"CNT") != "0") {
        //                 this.edtUserId.set_cssclass("ed_LF_idchk");
        //                 this.staChkId.set_text("사용중인 ID입니다.");
        //             } else {
        //                 this.edtUserId.set_cssclass("ed_LF_idchk");
        //                 this.staChkId.set_text("");
        //             }
                    break;
            }
        }

        /**
        * fnPopCallback : popup callback
        * @param  : N/A
        * @return : N/A
        * @example :
        */
        this.fnPopCallback = function(sPopId, sRtn)
        {
            switch(sPopId)
            {
                case "MN020PT01" : // 동의팝업 콜백
                    var arrRtn = sRtn.split(',');
                    this.chkSystem.set_value(arrRtn[0]);
                    this.chkPersonalInfo.set_value(arrRtn[1]);
                    break;
                default :
                    break;
            }
        }

        /**
        * fnGetLang : 도메인코드 가져오기
        * @param  : N/A
        * @return : true/false
        * @example : this.fnGetLang()
        */
        this.fnGetLang = function()
        {
            take.transaction(
                this,
                "domainLangSvc",
                "SVC_LOC::loginOnLoad.do",
                "",
                "tgdsLang=tgdsLang tgdsMsg=tgdsMsg",
                "",
                function (sId, nErr, sMsg)
                {
                    //다국어 동적 바인딩
                    takedomain.SetLang(this, this.tgdsLang);
                },
                false);

            return true;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.MN010PT02_onclick,this);
            this.addEventHandler("onload",this.Form_onload,this);
            this.staLogin.addEventHandler("onclick",this.staLogin_onclick,this);
            this.edtUserNm.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.edtUserId.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.chkSystem.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.btnJoin.addEventHandler("onclick",this.btnJoin_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.edtUserPw1.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.edtUserPw2.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.edtEmail.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.edtMobile.addEventHandler("oninput",this.edtMobile_oninput,this);
            this.edtMobile.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.chkPersonalInfo.addEventHandler("onchanged",this.CheckBox_onchanged,this);
            this.btnChkId.addEventHandler("onclick",this.btnChk_onclick,this);
            this.btnChkMail.addEventHandler("onclick",this.btnChk_onclick,this);
            this.dsUserJoin.addEventHandler("oncolumnchanged",this.dsUserJoin_oncolumnchanged,this);
        };
        this.loadIncludeScript("frmLoginS02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
