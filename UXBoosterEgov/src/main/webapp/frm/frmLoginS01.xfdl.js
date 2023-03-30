(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLoginS01");
            this.set_titletext("로그인용 서브화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,556);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"LUNAR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"USER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_FAIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHANGE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_DEVICE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("tgdsLang", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDomain", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staUserJoin",null,"25","84","25","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회원등록");
            obj.set_cssclass("sta_WF_chgLoginBox");
            this.addChild(obj.name, obj);

            obj = new Static("staLoginLogo","95","80","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","95","180","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("아이디");
            obj.set_maxlength("18");
            obj.set_value("admin");
            obj.set_text("admin");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPw","95","220","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("비밀번호");
            obj.set_password("true");
            obj.set_maxlength("18");
            obj.set_autoselect("true");
            obj.set_value("admin!@#$");
            obj.set_text("admin!@#$");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkIdSave","95","256","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("아이디 저장");
            this.addChild(obj.name, obj);

            obj = new Static("staPrivacy","95","282","231","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이 페이지는 <fc v=\'#0066ff\'>개인정보처리방침</fc> 및 <fc v=\'#0066ff\'>서비스 \r\n약관</fc>의 적용을 받습니다.\r\n");
            obj.set_usedecorate("true");
            obj.set_cursor("pointer");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogin","95","342","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("로그인");
            obj.set_cssclass("btn_WF_login");
            this.addChild(obj.name, obj);

            obj = new Button("btnFindIdPw","95","387","231","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("아이디/비밀번호 찾기");
            obj.set_cssclass("btn_WF_findInfo");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbLang","95","140","231","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsDomain");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("한국어");
            obj.set_value("ko_KR");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staCapsLock","168","224",null,null,"167","311",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Caps Lock On");
            obj.set_visible("false");
            obj.set_cssclass("sta_Login_on");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,556,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLoginS01.xfdl", function() {
        /**
        *  로그인
        *
        *  @MenuPath    메인 > 로그인 > 로그인
        *  @FileName    MN070.xfdl
        *  @Creator     천우성
        *  @CreateDate  2019.08.19
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.19      천우성             최초 생성
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
        this.take_onload = function(obj, e)
        {
        	//세션이 있다면 강제 제거
        	if(take.getActiveForm(this).name == "frmLogin"){
        		take.transaction(this, "logout", "SVC_LOC::logout.do", "", "", "", "", false);
        	}

            this.ProgId="GM00000002";
            this.ProgNm="로그인";

            //로그인 이후 로그아웃했을경우 기존에 사용한 다국어 코드 세팅
            if (take.nvl(nexacro.getApplication().av_sLangCd,"")=="")
            {
                //로그인 이후 로그아웃했을경우 기존에 사용한 다국어 코드 세팅
        		if (take.nvl(nexacro.getApplication().av_sLangCd,"")=="")
        		{
        			var sLocale = system.locale;	//nexacro.getEnvironment().locale
        			if (sLocale.indexOf("-") >= 0) {
        				sLocale = sLocale.replace(/-/g, "_");
        			}
        			if (sLocale == "" || sLocale == "ko") {
        				sLocale = "ko_KR";
        			}
        			if (sLocale == "en") {
        				sLocale = "en_US";
        			}
        			nexacro.getApplication().av_sLangCd = sLocale;
        			nexacro.getEnvironment().set_locale(nexacro.getApplication().av_sLangCd);
        		}
            }

            if (take.bDomain)
            {
                //다국어 코드 가져오기
                this.fnGetDomainCode();
                this.fnGetLang();
            }

            //if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            //{
        		var sUrl, sDateTime;
                var objDateTime = take.getTodayTime();

        		sUrl = take.getSvcUrl();
                sDateTime = objDateTime.date + objDateTime.time;

        		var sImg = "imgTakeLogin.png";
        		this.staLoginLogo.set_background('url("'+sUrl+'images/logo/'+ sImg + '?' + sDateTime + '") no-repeat left center');

        		var objId, objChk
        		var sId;

        		objId = this.edtUserId;            //아이디
        		obkChk = this.chkIdSave;

        		//this.edtUserPw.setFocus();
        		this.edtUserId.setFocus();

        		obkChk.set_value(take.nvl(nexacro.getPrivateProfile(obkChk.name), 0));

        		if (this.chkIdSave.value==1)
        		{
        			sId = take.nvl(nexacro.getPrivateProfile(objId.name), "");
        			if (sId!="")
        			{
        				objId.set_value(sId);
        				//this.edtUserPw.setFocus();
        				//this.Edit00.setFocus();
        				//this.edtUserPw.set_password(true);
        			}
        		}
            //}

            if (nexacro._Browser!="Runtime")
        	{
                var objStaCapsLock, objEditPw, objEdtPwEle;
                var sEleId;

                objStaCapsLock = this.staCapsLock;
                objEditPw = this.edtUserPw;

                sEleId = nexacro.replaceAll("#"+objEditPw._unique_id, ".", "\\.")+"\\:input";

                objEdtPwEle = document.querySelector(sEleId);

                //console.dir(objEdtPwEle);
                //window.addEventListener(
                objEdtPwEle.addEventListener(
                    'keydown',
                    function(e){
                        objStaCapsLock.set_visible(e.getModifierState('CapsLock'));
                    });
            }
        };

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
            if (take.nvl(sTranId, "")=="") sTranId = "Group";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "Login" :
        			var objDs = nexacro.getApplication().gdsUserInfo;
        			objDs.clearData();

        			var sUserId = this.edtUserId.value;
        			var sUserPw = this.edtUserPw.value;

        			sParam = "sUserId='"+sUserId+"' sUserPw='"+sUserPw+"' sLoginDevice='" + nexacro._OS + "' sLoginBrowser='" + nexacro._Browser + "'";
        			take.transaction(this, sTranId, "SVC_LOC::login.do", "", "gdsUserInfo=gdsUserInfo", sParam, sCallBack);

                    break;
                default :
                    break;
            }
        };

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
                case "Login" : //조회 콜백
        			var objDs = nexacro.getApplication().gdsUserInfo;

        			if(objDs.getRowCount() > 0){
        				var sInitYn = take.nvl(objDs.getColumn(0, "INIT_YN"), "Y");
        				if(sInitYn == "N"){
        					take.alert(this, "", "비밀번호를 초기화 해주시기 바랍니다.");
                            take.openPopup(this, "frmMainP02S01", "frm::frmMainP02S01.xfdl", "", "", "fnPopCallback");
        					return;
        				}
        			}

        			//로컬디비에 로그인 정보 저장
                    this.fnProFile();


        			//천우성 임시 추가 2019-10-12
        			if( sErrMsg == "SUCC")
                    {
        				UXBooster.av_sProjectCd = objDs.getColumn(0, "PROJECT_CD");
        				UXBooster.av_sProjectNm = objDs.getColumn(0, "PROJECT_NM");
        				this.getOwnerFrame().set_formurl("frm::frmMain.xfdl");
        			}
        			else
        			{
        				take.alert(this, "", sErrMsg);
        				return;
        			}
        		    break;
                default :
                    break;
            }
        };

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        //N/A

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //btnLogin_onclick : 로그인 버튼 클릭 이벤트
        this.btnLogin_onclick = function(obj,e)
        {
        	this.fnTran('Login');
        };

        //staUserJoin_onclick : 회원등록클릭이벤트
        this.staUserJoin_onclick = function(obj,e)
        {
            this.getOwnerFrame().parent.frame.form.divCenter.form.divLogIn.set_url("frm::frmLoginS02.xfdl");
        };

        //edtUserPw_onkeydown : 패스워드 키다운 이벤트
        this.edtUserPw_onkeydown = function(obj,e)
        {
        	if (e.keycode==13)
            {
                try{
                    this.fnTran("Login");
                } catch(e) {
                    trace("Login error (" + e + ")");
                }
            }
        };

        //btnFindIdPw_onclick : ID / PW 찾기 클릭이벤트
        this.btnFindIdPw_onclick = function(obj,e)
        {
        	take.openPopup(this, "frmLoginP01", "frm::frmLoginP01.xfdl", "", "", "fnPopCallback", false);
        };

        //staPrivacy_onclick : 개인정보처리방침 안내 클릭 이벤트
        this.staPrivacy_onclick = function(obj,e)
        {
        	//임시 개인정보동의약관팝업 오픈
            var aAgrKey = {sTitle:"개인정보처리방침", sFlag:"Info"};
            take.openPopup(this, "frmLoginP02", "frm::frmLoginP02.xfdl", aAgrKey, "", "fnPopCallback", false);
        };

        //edtUserPw_oninput : 패스워드 크롬에서 버그에 따른 처리
        this.edtUserPw_oninput = function(obj,e)
        {
        	// chrome78버전부터 password type이 뚫려 보이는 현상에 대한 가이드 코드
        	// 해당 현상에 대해서는 연구소 검토 진행중
        	if ( obj.password == true )
        	{
        		obj.set_password(false);
        		obj.set_password(true);
        	}

        };

        //cmbLang_onitemchanged : 다국어 콤보 변경 이벤트
        this.cmbLang_onitemchanged = function(obj,e)
        {
            nexacro.getApplication().av_sLangCd = take.nvl(obj.value, "ko_KR");
            nexacro.getEnvironment().set_locale(nexacro.getApplication().av_sLangCd);

        	this.fnGetLang();
        };

        //패스워드컴포넌트에서 포커스가 나갈때
        this.edtUserPw_onkillfocus = function(obj,e)
        {
        	this.staCapsLock.set_visible(false);
        };
        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
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
                "SVC_LOC::loginOnLoad.do?language=" + nexacro.getApplication().av_sLangCd,
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
        /**
        * fnGetDomainCode : 도메인코드 가져오기
        * @param  : N/A
        * @return : N/A
        * @example : this.fnGetDomainCode()
        */
        this.fnGetDomainCode = function()
        {
        	take.transaction(
                this,
                "domainCode",
                "SVC_LOC::langCd.do",
                "",
                "dsDomain=dsDomain",
                "",
                function (sId, nErr, sMsg)
                {
                    //trace(this.dsDomain.saveXML());
                    this.cmbLang.set_value(nexacro.getApplication().av_sLangCd);
                });
        };

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
                case "frmLoginP01" : // 콜백
                    this.edtUserId.set_value(sRtn);
                    this.edtUserPw.setFocus();
                    break;
                default :
                    break;
            }
        };

        /**
         * fnProFile : 로컬디비에 아이디등 저장
         * @param  {N/A} N/A
         * @example this.fnProFile();
         */
        this.fnProFile = function()
        {
        	//변수 선언 및 값 세팅
        	var objComCode, objId, objChk;
        	var sComp, sId, sChk;

        	try
            {
                objId = this.edtUserId;          //아이디
                objChk = this.chkIdSave;         //아이디 저장 여부

                sId = take.nvl(nexacro.getPrivateProfile(objId.name), "");
                sChk = take.nvl(nexacro.getPrivateProfile(objChk.name), "0");

        		if( objChk.value == 0 ) sId = "";

                //로컬디비에 각컴포넌트별 데이터 저장
        		nexacro.setPrivateProfile(objId.name, objId.value);
                nexacro.setPrivateProfile(objChk.name, objChk.value);
                //nexacro.setPrivateProfile(objPw.name, objPw.value);

                return true;
        	} catch(e) {
        		//세팅 중 오류 발생시
                take.trace("System", "ERROR", "Profile 저장 실패.(" + e +")");
                return false;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.take_onload,this);
            this.staUserJoin.addEventHandler("onclick",this.staUserJoin_onclick,this);
            this.edtUserPw.addEventHandler("onkeydown",this.edtUserPw_onkeydown,this);
            this.edtUserPw.addEventHandler("oninput",this.edtUserPw_oninput,this);
            this.edtUserPw.addEventHandler("onkillfocus",this.edtUserPw_onkillfocus,this);
            this.staPrivacy.addEventHandler("onclick",this.staPrivacy_onclick,this);
            this.btnLogin.addEventHandler("onclick",this.btnLogin_onclick,this);
            this.btnFindIdPw.addEventHandler("onclick",this.btnFindIdPw_onclick,this);
            this.cmbLang.addEventHandler("onitemchanged",this.cmbLang_onitemchanged,this);
        };
        this.loadIncludeScript("frmLoginS01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
