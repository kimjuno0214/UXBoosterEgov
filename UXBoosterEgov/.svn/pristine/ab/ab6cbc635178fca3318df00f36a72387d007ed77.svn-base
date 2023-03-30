(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMainP02S01");
            this.set_titletext("비밀번호변경");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(520,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW_OLD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoginPolicy", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"255\"/><Column id=\"POLICY_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"MIX_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MIN_LENGTH\" type=\"STRING\" size=\"255\"/><Column id=\"ERROR_CNT\" type=\"STRING\" size=\"255\"/><Column id=\"RECENT_USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"FIRST_CHANGE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"CHECK_CNT\" type=\"STRING\" size=\"255\"/><Column id=\"IMPOSSIBLE_TXT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegExp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"NAME\" type=\"STRING\" size=\"255\"/><Column id=\"REF1\" type=\"STRING\" size=\"255\"/><Column id=\"REF2\" type=\"STRING\" size=\"255\"/><Column id=\"REF3\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"policyCd\" type=\"STRING\" size=\"256\"/><Column id=\"policyName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"policyCd\">1</Col><Col id=\"policyName\">정책1</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"policyCd\">2</Col><Col id=\"policyName\">정책2</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"policyCd\">3</Col><Col id=\"policyName\">정책3</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"policyCd\">4</Col><Col id=\"policyName\">정책4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","10","10","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기존비밀번호");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","10","40","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("새비밀번호");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","128","10",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","128","40",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPwOld","136","15",null,"21","16",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_password("true");
            obj.set_maxlength("18");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPw","136","45",null,"21","16",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_password("true");
            obj.set_displaynulltext("최소 6자리");
            obj.set_maxlength("18");
            this.addChild(obj.name, obj);

            obj = new Button("btnChange","40.77%","111","46","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("변경");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnChange:3","111","46","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","70","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("새비밀번호확인");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","128","70",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPwChk","136","75",null,"21","16",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_password("true");
            obj.set_displaynulltext("최소 6자리");
            obj.set_maxlength("18");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pDivLoginPolicy","138","165","284","130",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("stcLoginPolicy","5","5",null,"25","5",null,null,null,null,null,this.pDivLoginPolicy.form);
            obj.set_taborder("1");
            obj.set_text("패스워드 정책");
            obj.set_cssclass("sta_WF_SubTitle2");
            obj.set_border("0px none,0px none,1px solid #e8e8e8");
            obj.set_background("#ffffff");
            this.pDivLoginPolicy.addChild(obj.name, obj);

            obj = new Grid("grdLoginPolicy","0","35",null,null,"0","10",null,null,null,null,this.pDivLoginPolicy.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCheck");
            obj.set_border("0px none");
            obj.set_useselcolor("false");
            obj.set_readonly("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"256\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:chk\" border=\"0px none\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:policyName\" border=\"0px none\"/></Band></Format></Formats>");
            this.pDivLoginPolicy.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pDivLoginPolicy.form
            obj = new Layout("default","",0,0,this.pDivLoginPolicy.form,function(p){});
            this.pDivLoginPolicy.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",520,140,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtUserPwOld","value","dsUserInfo","USER_PW_OLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtUserPw","value","dsUserInfo","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtUserPwChk","value","dsUserInfo","USER_PW_CHK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMainP02S01.xfdl", function() {
        /**
         *  비밀번호 변경
         *
         *  @MenuPath    메인로그인 > 비밀번호 변경
         *  @FileName    frmMainP02S01.xfdl
         *  @Creator     정해원
         *  @CreateDate  2020.05.08
         *  @Version     1.0
         *  @Desction    설명
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2020.05.08      정해원             최초 생성
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
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		this.edtUserPw.setFocus();
        		this.edtUserPwChk.setFocus();
        		this.edtUserPwOld.setFocus();
        		//Script
        		//공통코드(문자숫자혼합구분 00010)
        		take.tranCode(this
        					, "00010"
        					, "dsRegExp"
        					, ""
        					, function(sId, nErrCd, sErrMsg) {
        						this.fnTran("LoginPolicy");
        					}
        		);
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

        	take.transaction(this, sTranId, "SVC_LOC::mn/userPwChange.do", "dsUserInfo=dsUserInfo:U", "", "", "fnCallback");
        };

        /**
         * fnTran : 트랜잭션
         * @param  {String} sTranId 트랜젝션 아이디
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            if (take.nvl(sTranId, "")=="") sTranId = "LoginPolicy";

            switch(sTranId)
            {
        		case "LoginPolicy" :        //로그인 정책
        			var sParam = "SYSTEM_ID='" + this.fv_nSystemId + "'";
                    take.transaction(this, sTranId, "SVC_LOC::mn/loginpolicy.do", "", "dsLoginPolicy=dsLoginPolicy", sParam, "fnCallback");
                    break;
                default :
                    break;
            }
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        // 취소 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        // 비밀번호 변경 클릭
        this.btnChange_onclick = function(obj,e)
        {
        	var sUserPwOld 	= this.edtUserPwOld.value;
        	var sUserPw 	= this.edtUserPw.value;
        	var sUserPwChk 	= this.edtUserPwChk.value;

        	if(take.nvl(sUserPwOld, "") == ""){
                take.alert(this, "", "이전 비밀번호를 작성해주세요.");
                this.edtUserPwOld.setFocus();
                return;
            }

        	if(take.nvl(sUserPw, "") == ""){
                take.alert(this, "", "새 비밀번호를 작성해주세요.");
                this.edtUserPw.setFocus();
                return;
            }

            if(take.nvl(sUserPwChk, "") == ""){
                take.alert(this, "", "2차비밀번호를 작성해주세요.");
                this.edtUserPwChk.setFocus();
                return;
            }

            if (sUserPwChk != sUserPw)
            {
            	take.alert(this, "", "비밀번호를 확인해주세요.\n비밀번호가 같지않습니다.");
                this.edtUserPwChk.setFocus();
                return;
            }

        	if(this.dsCheck.getRowCount() > 0){
        		var chkRow = this.dsCheck.findRow("chk", "0");
        		if(chkRow > -1){
        			var policyCd = this.dsCheck.getColumn(chkRow, "policyCd");
        			var policyNm = this.dsCheck.getColumn(chkRow, "policyName");
        			if(policyCd == "IMPOSSIBLE_TXT"){
        				//비밀번호 사용불가 텍스트
        				var sImpossibleTxt 	 = take.nvl(this.dsLoginPolicy.getColumn(0, "IMPOSSIBLE_TXT"), "");
        				var arrImpossibleTxt = sImpossibleTxt.split('\n');
        				for(var i = 0 ; i < arrImpossibleTxt.length - 1 ; i++){	//뒤에 공백때문에 -1까지 loop
        					if(sUserPw.indexOf(arrImpossibleTxt[i]) > -1){
        						take.alert(this, "", arrImpossibleTxt[i] + " 은(는) 사용할 수 없는 비밀번호입니다.");
        						this.edtUserPw.setFocus();
        						return false;
        					}
        				}

        			}else if(policyCd == "MIX_CD"){
        				//비밀번호 혼합체크
        				var sMixCd = take.nvl(this.dsLoginPolicy.getColumn(0, "MIX_CD"), "");
        				if(!take.isEmpty(sMixCd)){
        					var sMixCdName 	= this.dsRegExp.lookup("CODE", sMixCd, "NAME");
        					take.alert(this, "", sMixCdName + " 하여 비밀번호를 입력해주시기 바랍니다.");
        					this.edtUserPw.setFocus();
        					return false;
        				}

        			}else if(policyCd == "MIN_LENGTH"){
        				//비밀번호 최소길이 체크
        				take.alert(this, "", policyNm + " 입력해주시기 바랍니다.");
        				this.edtUserPw.setFocus();
        				return false;
        			}
        		}
        	}

            if(take.confirm(this, "question", "비밀번호 변경 하시겠습니까?")) {
                this.fnSave("Modify");
            }
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

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
        		//저장 콜백
                case "Modify" :
                    take.alert(this, "", "비밀번호 변경이 완료되었습니다.");
                    this.close();
                    break;

        		//로그인정책
        		case "LoginPolicy":
        			if(this.dsLoginPolicy.getRowCount() > 0){
        				var nRow = -1;
        				this.dsCheck.clearData();

        				var nMinLength = take.nvl(this.dsLoginPolicy.getColumn(0, "MIN_LENGTH"), 6);
        				nRow = this.dsCheck.addRow();
        				this.dsCheck.setColumn(nRow, "chk"			, "0");
        				this.dsCheck.setColumn(nRow, "policyCd"		, "MIN_LENGTH");
        				this.dsCheck.setColumn(nRow, "policyName"	, "최소 " + nMinLength + "자리");

        				//비밀번호 사용불가 문자열
        				var sImpossibleTxt = take.nvl(this.dsLoginPolicy.getColumn(0, "IMPOSSIBLE_TXT"), "");
        				if(!take.isEmpty(sImpossibleTxt)){
        					var arrImpossibleTxt = sImpossibleTxt.split('\n');
        					arrImpossibleTxt.pop();

        					if(arrImpossibleTxt.length > 0){
        						nRow = this.dsCheck.addRow();
        						this.dsCheck.setColumn(nRow, "chk"			, "0");
        						this.dsCheck.setColumn(nRow, "policyCd"		, "IMPOSSIBLE_TXT");
        						this.dsCheck.setColumn(nRow, "policyName"	, "사용할 수 없는 비밀번호 : " + arrImpossibleTxt.toString());
        					}
        				}

        				//비밀번호 혼합체크
        				var sMixCd = take.nvl(this.dsLoginPolicy.getColumn(0, "MIX_CD"), "");
        				if(!take.isEmpty(sMixCd)){
        					var sMixCdName = this.dsRegExp.lookup("CODE", sMixCd, "NAME");

        					nRow = this.dsCheck.addRow();
        					this.dsCheck.setColumn(nRow, "chk"			, "0");
        					this.dsCheck.setColumn(nRow, "policyCd"		, "MIX_CD");
        					this.dsCheck.setColumn(nRow, "policyName"	, sMixCdName);
        				}

        				var nTop	= parseInt(this.pDivLoginPolicy.form.stcLoginPolicy.height) + 5;
        				var nBodyH 	= this.pDivLoginPolicy.form.grdLoginPolicy.getRealRowFullSize("body");
        				this.pDivLoginPolicy.form.grdLoginPolicy.set_height(nBodyH);
        				this.pDivLoginPolicy.set_height(nBodyH + nTop + 10);
        				//this.pDivLoginPolicy.set_width(this.edtUserPw.getOffsetWidth());
        			}
        			break;

                default :
                    break;
            }
        };

        this.edtUserPw_oninput = function(obj,e)
        {
        	if (!this.pDivLoginPolicy.isPopup()){
        		this.pDivLoginPolicy.trackPopupByComponent(obj, 10, parseInt(obj.height) + 3);
        	}
        	obj.setFocus();
        	obj.updateToDataset();
        };

        this.edtUserPw_onkeyup = function(obj,e)
        {
        	var sUserPw = obj.value;

        	var nMinLength = 6;
        	if(this.dsLoginPolicy.getRowCount() > 0){
        		//비밀번호 사용불가 텍스트
        		var sImpossibleTxt 	 = take.nvl(this.dsLoginPolicy.getColumn(0, "IMPOSSIBLE_TXT"), "");
        		var arrImpossibleTxt = sImpossibleTxt.split('\n');
        		for(var i = 0 ; i < arrImpossibleTxt.length - 1 ; i++){	//뒤에 공백때문에 -1까지 loop
        			if(sUserPw.indexOf(arrImpossibleTxt[i]) > -1){
        				this.dsCheck.setColumn(this.dsCheck.findRow("policyCd", "IMPOSSIBLE_TXT"), "chk", "0");
        				break;
        			}
        			this.dsCheck.setColumn(this.dsCheck.findRow("policyCd", "IMPOSSIBLE_TXT"), "chk", "1");
        		}

        		//비밀번호 혼합체크
        		var sMixCd = take.nvl(this.dsLoginPolicy.getColumn(0, "MIX_CD"), "");
        		if(!take.isEmpty(sMixCd)){
        			var sMixCdName 	= this.dsRegExp.lookup("CODE", sMixCd, "NAME");
        			var sMixCdExp 	= this.dsRegExp.lookup("CODE", sMixCd, "REF1");
        			var regExp		= new RegExp(sMixCdExp);

        			if(!regExp.test(sUserPw)){
        				this.dsCheck.setColumn(this.dsCheck.findRow("policyCd", "MIX_CD"), "chk", "0");
        			}else{
        				this.dsCheck.setColumn(this.dsCheck.findRow("policyCd", "MIX_CD"), "chk", "1");
        			}
        		}

        		//비밀번호 최소길이 체크
        		nMinLength = take.nvl(this.dsLoginPolicy.getColumn(0, "MIN_LENGTH")	, 6);
        	}

        	//비밀번호 최소길이 체크
        	if(sUserPw.length < nMinLength){
        		this.dsCheck.setColumn(this.dsCheck.findRow("policyCd", "MIN_LENGTH"), "chk", "0");
        	}else{
        		this.dsCheck.setColumn(this.dsCheck.findRow("policyCd", "MIN_LENGTH"), "chk", "1");
        	}
        };

        this.edtUserPwChk_onsetfocus = function(obj,e)
        {
        	if (this.pDivLoginPolicy.isPopup()){
        		this.pDivLoginPolicy.closePopup();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtUserPwOld.addEventHandler("onsetfocus",this.edtUserPwChk_onsetfocus,this);
            this.edtUserPw.addEventHandler("oninput",this.edtUserPw_oninput,this);
            this.edtUserPw.addEventHandler("onkeyup",this.edtUserPw_onkeyup,this);
            this.btnChange.addEventHandler("onclick",this.btnChange_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.edtUserPwChk.addEventHandler("onsetfocus",this.edtUserPwChk_onsetfocus,this);
        };
        this.loadIncludeScript("frmMainP02S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
