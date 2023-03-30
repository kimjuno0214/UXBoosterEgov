(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ENG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"255\"/><Column id=\"LUNAR_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"255\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"USER_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AGREE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_FAIL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PW_CHANGE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ADMIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENC_USER_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("tgdsMsg", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("av_sProjectCd","PM00000001");
            this._addVariable("av_sProjectNm","관리자");
            this._addVariable("av_nMdiCnt","8");
            this._addVariable("av_sLangCd","");
            this._addVariable("av_sLocation","");
            this._addVariable("av_objDateTime","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("UXBooster");
            this.set_screenid("Desktop_screen");
            this.set_licenseurl("nexacro17_client_license.xml");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","800",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("UXBooster");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"frm::frmLogin.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("frm::frmLogin.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.addEventHandler("onloadforms",this.Application_onloadforms,this);
        };
        
        // script Compiler
        this.registerScript("UXBooster.xadl", function() {
        UXBooster = this;
        //시스템 기본 정보 세팅 (세팅 정보 없으면 기본 UXBooster)
        //take.setSystemInfo({systemFont:"12px 'NanumGothic'", systemId:"UXBooster", systemNm:"UXBooster"});

        /**
         * 폼에서 사용하는 공통 Onload (take.formOnLoad에서 호출함)
         * @param   {Object}  pThis      nexacro Form Object
         * @return  {boolean} true/false 성공 실패 여부
         * @example trace(this.formOnLoad(this)); //--> true
         */
        this.afnFormOnLoad = function(pThis)
        {
            //폼 온로드시에 사용할 공통 Script return

            //검색 조건 버튼 접기 펴기 처리
            if (take.nvl(pThis.btnShowHide, "")!="" && take.nvl(pThis.divSearch, "")!="" && take.nvl(pThis.divDetail, "")!="")
            {
                pThis.divSearch._tUserHeight = pThis.divSearch.height;

                pThis.divDetail.set_top("btnShowHide:20px");
                pThis.btnShowHide.set_top("divSearch:0px");

                pThis.resetScroll();

                nIdx = pThis.btnShowHide.addEventHandler("onclick", this.afnSearchShowHide, pThis);

                if (nIdx<0)
                {
                    take.error(pThis.name+".take.formOnLoad", "btnShowHide(검색조건 접기) Click Event 생성 실패 :: Error code : (" + e + ")" );
                }
            }

            return true;
        }

        /**
         * 검색조건 영역 숨기기/보이기 이벤트용 함수
         * @param  {N/A}  N/A
         * @return {N/A}  N/A
         */
        this.afnSearchShowHide = function (obj, e)
        {
        	var sCss, sShow, sHide;
            var nHeight;
            var objDivSearch;

            sHide = "btn_WF_fold01";
            sShow = "btn_WF_expand01";

            //현재 CSS가져오기
            sCss = obj.cssclass;

            //검색영역 DIV 컴포넌트
            objDivSearch = this.divSearch;

            if (sCss==sHide)
            {
                objDivSearch.set_height(1);
                obj.set_cssclass(sShow);

            } else {
                objDivSearch.set_height(objDivSearch._tUserHeight);
                obj.set_cssclass(sHide);
            }

            this.resetScroll();
        };

        /**
         * 스프리터 사용 함수
         * @param  {Object}  pThis nexacro Form
         * @param  {Object}  objBtn nexacro Button (스프리터로 사용할 버튼)
         * @param  {Object}  objComp00 nexacro component
         * @param  {Object}  objComp01 nexacro component
         * @return {boolean} true / false 성공 여부
         * @example trace(this.afnUseSpliter(this, this.btnSpliter)); //--> true
         */
        this.afnUseSpliter = function(pThis, objBtn, objComp00, objComp01)
        {
            var nIdx = 0;
            var objParent;

            if (take.nvl(pThis,"")=="")
            {
                take.error(pThis.name+".application.afnUseSpliter", "폼 객체는 필수 입니다.");
                return false;
            }
        //     //스프리터의 왼쪽 또는 위쪽에 위치
        //     if (take.nvl(objComp00, "") != "")
        //     {
        //         if (objBtn.getOffsetWidth()>10)
        //         {
        //             objComp00.set_bottom(objBtn.name + ":5px");
        //         } else {
        //             objComp00.set_right(objBtn.name + ":5px");
        //         }
        //     }
        //
        //     //스프리터의 오른쪽 또는 아래쪽에 위치
        //     if (take.nvl(objComp01, "") != "")
        //     {
        //         if (objBtn.getOffsetWidth()>10)
        //         {
        //             objComp01.set_top(objBtn.name + ":5px");
        //         } else {
        //             objComp01.set_left(objBtn.name + ":5px");
        //         }
        //     }

            if (take.nvl(objBtn, "")!="")
            {
                nIdx = objBtn.addEventHandler("ondrag", this.afnSpliterDrag, pThis);
            } else {
                take.debug(pThis, "Spliter가 존재하지 않습니다.");
                return false;
            }

            if (nIdx<0)
            {
                take.error(pThis.name+".application.afnUseSpliter", "Spliter drag event 생성 실패");
                return false;
            }

            objParent = objBtn.parent.parent || objBtn.parent;

            if (take.nvl(objParent, "")!="")
            {
                nIdx = objParent.addEventHandler("ondragmove", this.afnSpliterDragMove, pThis);
            } else {
                take.debug(pThis, "Spliter 부모 Form을 찾지 못하였습니다.");
                return false;
            }

            if (nIdx<0)
            {
                take.error(pThis.name+".application.afnUseSpliter", "Spliter Parent dragmove event 생성 실패" );
                return false;
            }

            //objParent.form.resetScroll();
            return true;
        }

        //afnSpliterDrag : 버튼 drag용 함수
        this.afnSpliterDrag = function(obj,e)
        {
            e.set_userdata(obj);
        	return true;
        };

        //afnSpliterDragMove : Form dragmove 용 함수
        this.afnSpliterDragMove = function(obj,e)
        {
        	var objBtn = e.userdata;

            //표준 Spliter button width로 가로형, 세로형 구분
            if (objBtn.getOffsetWidth()>10) //가로형
            {
                objBtn.set_top(e.clienty);
            } else { //세로형
                objBtn.set_left(e.clientx);
            }

            obj.form.resetScroll();
        };

        /**
         * 공통 트랜젝션 처리전 공통 처리 함수
         * @param  {Object} pThis     nexacro form object
         * @param  {String} sTranId   서비스아이디
         * @param  {String} sUrl      서비스 URL
         * @param  {String} sInDs     서버로 보낼 데이터셋
         * @param  {String} sOutDs    서버에서 받을 데이터셋
         * @param  {String} sParam    파라메터
         * @param  {String} sCallBack 트랜젝션 완료후 실행할 CallBack 함수
         * @param  {boolen} bAsync    동기 비동기 여부
         * @param  {boolen} bErrRtn   트랜잭션 에러를 화면단에서 받을지 여부
         * @return {boolen} true/false 성공/실패
         */
        this.afnBeforeTran = function (pThis, sTranId, sUrl, sInDs, sOutDs, sParam, sCallBack, bAsync, bErrRtn)
        {
            //트랜젝션 처리전 공통 처리
            return true;
        }

        /**
         * 트랜젝션 처리후(콜백시작시) 공통 처리 함수
         * @param  {Object} pThis    nexacro form object
         * @param  {String} sId      서비스아이디
         * @param  {Object} objInfo  Transaction 정보를 담고 있는 Object( url, inds, outds, param, callback, async, errrtn)
         * @param  {Number} nErrCd   에러코드 0보다 작을 경우 에러
         * @param  {String} sErrMsg  에러메세지
         * @return {N/A}  N/A
         */
        this.afnAfterTran = function (pThis, sId, objInfo, nErrCd, sErrMsg)
        {
            //트랜젝션 처리후(콜백시작시) 공통 처리
            return true;
        }

        /**
         * 시스템 로그아웃 함수
         * @param  {Object}  pThis nexacro Application/Form
         * @return {N/A}  N/A
         */
        this.afnLogOut = function(pThis)
        {
            var bSucc;
            //로그아웃 하시겠습니까.?
            bSucc = take.confirm(this, "question", "로그아웃 하시겠습니까?", {});

            if(bSucc)
        	{
        		if( nexacro._Browser != "Runtime" ){
        			window.onbeforeunload = null;
        		}

        		take.transaction(pThis  , "Logout", "SVC_LOC::logout.do", "", "", "",
        			function (sId, nErr, sMsg) //sCallBack
                    {
                        if( sMsg == "SUCC" )
        				{
                            nexacro.getApplication().gdsUserInfo.clearData();

        					//로그아웃 되었습니다. 로그인 화면으로 이동합니다.
        					this.getOwnerFrame().set_formurl("frm::frmLogin.xfdl");

        				} else {
        					//로그아웃에 실패하였습니다. 시스템 관리자에게 문의하여 주십시요.
        					take.alert(this, "Error", "로그아웃에 실패하였습니다. 시스템 관리자에게 문의하여 주십시요.", {})
        				}
                    }
        		);
        	}
        }
        });
        this.checkLicense("nexacro17_client_license.xml");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::NxPivot.xcss");
        this.loadIncludeScript("UXBooster.xadl");
    };
}
)();
