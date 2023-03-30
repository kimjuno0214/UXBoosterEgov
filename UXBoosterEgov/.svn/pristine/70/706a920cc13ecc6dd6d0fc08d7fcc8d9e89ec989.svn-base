(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmHome");
            this.set_titletext("메인컨텐츠화면");
            this.set_stepalign("center bottom");
            this.set_stepshowtype("always");
            this.set_stepitemgap("13");
            this.set_stepitemsize("13");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1220,660);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnLeft","0","44.87%","30","80",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_positionstep("-1");
            obj.set_cssclass("btn_nav_tabPrev");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnRight",null,"44.87%","30","80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_nav_tabNext");
            obj.set_positionstep("-1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1220,660,this,function(p){});
            obj.set_stepcount("5");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmHome_new.xfdl", function() {
        /**
        *  메인화면
        *
        *  @MenuPath    Home> Main
        *  @FileName    frmHome.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.11.25
        *  @Version     1.0
        *  @Desction    메인 화면
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.11.25      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_arrDivComp = new Array();  //각 스텝 페이지별 Div 컴포넌트
        this.fv_objDashData = null;        //Top에 개인설정에서 넘어온 데쉬보드 정보
        this.fv_bEditMode = false;         //데쉬 보드 Edit 여부
        this.fv_objTimer = null;
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * frmHome_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.frmHome_onload = function(obj, e)
        {
            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
                this.ProgNm = "UXBooster dashboard main";
                //페이지 초기화 함수
                this.fnInit();

                UXBooster.av_objDateTime = take.getDbTime();
            }
        }

        /**
        * frmHome_onstepchanged 폼 스탭 변경 이벤트
        */
        this.frmHome_onstepchanged = function(obj,e)
        {
            var nIdx = e.postindex;
            var objDiv;

            if (nIdx==0)
            {
                this.btnLeft.set_enable(false);
                this.btnLeft.set_visible(false);
            } else {
                this.btnLeft.set_enable(true);
                this.btnLeft.set_visible(true);
            }

            if (nIdx== nexacro.toNumber(this.stepselector.stepcount)-1)
            {
                this.btnRight.set_enable(false);
                this.btnRight.set_visible(false);
            } else {
                this.btnRight.set_enable(true);
                this.btnRight.set_visible(true);
            }

            objDiv = take.nvl(this.fv_arrDivComp[nIdx],"");

            if (objDiv!="")
            {
                if (take.nvl(objDiv.url,"")=="")
                {
                    //objDiv.set_url("frm::frmDash.xfdl");
                    this.fnSetDivUrl(objDiv);
                } else {
                    //변경된 대시보드 페이지의 트랜젝션이 가능하도록 설정
                    this.fv_arrDivComp[nIdx].form.fnSetTran(true);

                    this.fnCallDashData(nIdx);
                }
            }
        };

        /**
        * frmHome_onsize 폼 사이즈 변경 이벤트
        */
        this.frmHome_onsize = function(obj,e)
        {
            //if (take.sysType()!="phone")
            //{
            //    this.fnAllCenter();
            //}
        };

        this.frmHome_onkeydown = function(obj,e)
        {
        	//ESC버튼 클릭시 에디트 모드 해제
        	if (e.keycode==27)
            {
                this.fnEditEsc();
            }
        };
        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        //N/A

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        //N/A

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * btnArrow_onclick : 좌우 스텝 이동 버튼 클릭
        */
        this.btnArrow_onclick = function(obj,e)
        {
            var nIdx = this.getStepIndex();

            if (obj.name.substr(3)=="Left")
            {
                if (nIdx<=0) return;
                nIdx--;
            } else {
                if (nIdx>= nexacro.toNumber(this.stepselector.stepcount)-1) return;
                nIdx++;
            }

        	this.setStepIndex(nIdx);
        };

        /**
        * Button00_onclick : 스탭 테스트 버튼 클릭
        */
        this.Button00_onclick = function(obj,e)
        {
            var nCnt = this.fv_arrDivComp.length;

            for (var i=1;i<nCnt;i++)
            {
                //trace("left : " + this.fv_arrDivComp[i].left + " / top : " + this.fv_arrDivComp[i].top);

                var objDiv = this.fv_arrDivComp[i]
                var sWebId = objDiv.name.replace("div","web");
                var objWeb = objDiv.form.components[sWebId];
                alert(objWeb.name + "(" + i + ") --> " + objWeb.url);
            }

            /**
            var nIdx = nexacro.toNumber(this.getStepIndex());
            var objDiv = this.fv_arrDivComp[nIdx]
            var sWebId = objDiv.name.replace("div","web");
            var objWeb = objDiv.form.components[sWebId]
            trace(objWeb.name);
        	alert(objWeb.name + nIdx + " --> " + objWeb.url);
            **/
        };
        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화
         * @param   {N/A} N/A
         * @return  {N/A} N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
            //변수 선언
            var objDsUser, objDiv, objWeb, objApp;
            var nDashCnt;
            var sDivId;

            //변수에 값 대입
            objApp = nexacro.getApplication();
            objDsUser = objApp.gdsUserInfo;  //사용자정보 (User Info) Groval Dataset
            nDashCnt = nexacro.toNumber(take.nvl(objDsUser.getColumn(0,"DASH_COUNT"), "1")) + 1; //데쉬보드 카운트

            //step 동적 생성이 안됨 스텝버튼에 대한 카운트만 제어
            //스탭버튼 카운트 세팅
            this.stepselector.set_stepcount(nDashCnt);

            //데쉬보드 카운트 만큼 반복
            for (var i=0;i<nDashCnt;i++)
            {
                //데쉬보드 페이지별로 Div 컴포넌트 생성
                this.fnNewPage(i, false);
            }

            //if (take.sysType()=="phone") this.fnAllSizeChange();
            this.btnLeft.set_enable(false);
            this.btnLeft.set_visible(false);

            if (nDashCnt>1)
            {
                this.btnRight.set_enable(true);
                this.btnRight.set_visible(true);
            } else {
                this.btnRight.set_enable(false);
                this.btnRight.set_visible(false);
            }

            if (objApp.gvProgId!="" && objApp.gvKey!="")
            {
                //ToDo 확인 필요
        		//this.setTimer(999, 100);
            }

            //this.fnAllCenter();
        }

        this.fnNewPage = function(nPage, bChkBtn)
        {
            var objDiv;
            var sDivId;

            //데쉬보드 페이지별로 Div 컴포넌트 생성
            sDivId = "divDash" +  nPage.toString().lpad(2,"0");
            //리사이즈 없음
            //objDiv = this.fnNewDiv(this, sDivId, "", [0, 0, 1220, 660, null, null]);
            //리사이즈
            objDiv = this.fnNewDiv(this, sDivId, "", [20, 20, null, null, 20, 20]);
            objDiv.bringToFront();
            objDiv.bTran = false;
            //폼 변수에 생성된 Div 컴포넌트를 담는다.
            this.fv_arrDivComp[nPage]=objDiv;

            objDiv.set_positionstep(nPage);

            //this.fnSetDivUrl(objDiv);
            if (nPage==0) this.fnSetDivUrl(objDiv);

            if (take.nvl(bChkBtn,false))
            {
                if ( this.stepselector.getStepCount()>1)
                {
                    this.btnRight.set_enable(true);
                    this.btnRight.set_visible(true);
                } else {
                    this.btnRight.set_enable(false);
                    this.btnRight.set_visible(false);
                }
            }
        }

        this.fnRemovePage = function(nPage, bChkBtn)
        {
            this.fv_arrDivComp[nPage] = null;
            this.fv_arrDivComp.splice(nPage);

            if (take.nvl(bChkBtn,false))
            {
                if ( this.stepselector.getStepCount()>1)
                {
                    this.btnRight.set_enable(true);
                    this.btnRight.set_visible(true);
                } else {
                    this.btnRight.set_enable(false);
                    this.btnRight.set_visible(false);
                }
            }
        }

        this.frmHome_ontimer = function(obj,e)
        {
        	var objDivLeft, objApp;

        	if (e.timerid==999)
        	{
        		objDivLeft = this.getOwnerFrame().form.divLeft;
        		objApp = nexacro.getApplication();
        		if (objDivLeft.form.dsMenu.rowcount>0)
        		{
        			objDivLeft.form.fnProgMenu(objApp.gvProgId, objApp.gvKey);
        			this.killTimer(999);
        		}
        	}
        };

        /**
         * fnSetDivUrl : 데쉬보드 form url을 세팅
         * @param   {Object} objDiv 해당 Div 컴포넌트
         * @return  {N/A}
         * @example this.fnSetDivUrl(objDiv);
         */
        this.fnSetDivUrl = function(objDiv)
        {
            //변수 선언 및 세팅
        //     var objEnv, objSrv, objWeb, objDoc;
        //     var sUrl, sCompId
        //     var nPageNo;

            this.fv_objTimer =
                nexacro._OnceCallbackTimer.callonce
                (
                    this,
                    function ()
                    {
                        try {
                            objDiv.set_url("frm::frmDash.xfdl");
                        } catch(e) {
                            trace("fnTimer call error : " + e);
                            if(this.fv_objTimer ) this.fv_objTimer.stop();
                            objDiv.set_url("frm::frmDash.xfdl");
                        }
                    },
                    5
                );
        }

        /**
         * fnNewDiv : Div Component 동적 생성
         * @param  {String} sScope  생성 위치
         * @param  {String} sDivId  Div Component Id
         * @param  {String} sUrl    Div Component Url
         * @param  {Array}  arrRect Div Component 생성 위치
         * @return {Object} objDiv  생성된 DIV Object
         * @example this.fnNewDivthis.fnNewDiv(objScope, sDivId, sUrl, arrRect);
         */
        this.fnNewDiv = function(objScope, sDivId, sUrl, arrRect)
        {
        	//변수 선언 및 값 세팅
        	var objDiv = new Div();
            //trace(sDivId + " --> " + arrRect)
        	objDiv.init(sDivId, arrRect[0], arrRect[1], arrRect[2], arrRect[3], arrRect[4], arrRect[5]);
        	objScope.addChild(sDivId, objDiv);
        	objDiv.show();  //보이기

        	//기본 값 세팅
        	objDiv.set_async(false);
            objDiv.form.set_scrollbartype("none");
        	objDiv.set_background("#ffffff");
            //objDiv.set_border("1px solid red");
            if (take.nvl(sUrl, "")!="") objDiv.set_url(sUrl);

        	return objDiv;
        };

        /**
         * fnDashMenu : 데쉬보드 상세 오픈
         * @param  {String} sParam 파라메터 ('&'을 구분으로 앞에는 프로그램 아이디, 뒤에는 화면에 전달할 파라메터)
         * @return {N/A}    N/A
         * @example this.fnDashMenu("001001");
         */
        this.fnDashMenu = function(sParam)
        {
            //변수 선언
            var nFRow;
            var objLeft, objDs;
            var sProgId, sUserParam;
            var arrParam;

            //변수 세팅
            objLeft = this.getOwnerFrame().form.divLeft.form;
            objDs = objLeft.dsDashMenu;
            arrParam = sParam.split("&");
            sProgId = arrParam[0];
            sUserParam = arrParam[1];

            //메뉴에서 해당 프로그램아이디 찾기
            nFRow = objDs.findRowAs("PROG_ID", sProgId);

            sUserParam+="&"+objDs.getColumn(nFRow, "PROG_NM");

            //해당 아이디의 메뉴가 있을경우
            if (nFRow>=0)
            {
                //메뉴Div에 메뉴 선택 함수 호출
                objLeft.fnMenuSelect("DashMenu", nFRow, sUserParam);
            } else {
                //안내
                nFRow = objLeft.dsMenu.findRowAs("PROG_ID", sProgId);

                if (nFRow>=0)
                {
                    objLeft.fnMenuSelect("Menu", nFRow, arrParam[1]);
                } else {
                    //상세화면이 없습니다.
                    //take.alert(this, "Info", "S0009", {name:"E0011"});
                    take.alert(this, "Info", "{name}이 없습니다.", {name:"상세화면"});
                }
            }
        };

        /**
         * fnAllCenter : 모든 Div 중앙배치
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnAllCenter();
         */
        this.fnAllCenter = function()
        {
            //사이즈 변경시 각 데쉬보드 Div 컴포넌트를 중앙 배치
            var nCnt = this.fv_arrDivComp.length; //폼변수에 저장된 div 컴포넌트 갯수

            //하나 이상일 경우만 실행
            if (nCnt>0)
            {
                //갯수 만큼 반복
                for (var i=0;i<nCnt;i++)
                {
                    //중앙배치 함수 호출
                    this.fnCenter(this.fv_arrDivComp[i]);
                }
            }
        }

        /**
         * fnCenter : Div 중앙배치
         * @param  {Object} 대상 Div
         * @return {N/A} N/A
         * @example this.fnCenter();
         */
        this.fnCenter = function(objDiv)
        {
            //변수선언 및 값 세팅
        	var nTop = (this.getOffsetHeight() - objDiv.getOffsetHeight())/2;
        	var nLeft = (this.getOffsetWidth() - objDiv.getOffsetWidth())/2;

            //0보다 작을 경우 0으로 세팅
        	if (nTop<0) nTop=0;
        	if (nLeft<0) nLeft=0;

            //중앙배치
        	objDiv.move(nLeft, nTop);
        }

        /**
         * fnAllSizeChange :
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnAllSizeChange();
         */
        this.fnAllSizeChange = function()
        {
            var objDiv;
            var nCnt = this.fv_arrDivComp.length; //폼변수에 저장된 div 컴포넌트 갯수

            //하나 이상일 경우만 실행

            //하나 이상일 경우만 실행
            if (nCnt>0)
            {
                //갯수 만큼 반복
                for (var i=1;i<nCnt;i++)
                {
                    //중앙배치 함수 호출
                    objDiv = this.fv_arrDivComp[i];
                    objDiv.set_border("1px solid");
                    objDiv.set_bottom(20);
                    objDiv.set_right(20);
                    //objDiv.form.set_scrollbartype("indicator indicator");
                    //objDiv.form.set_scrollbartype("fixed fixed");
                }
            }
        }

        /**
         * fnEditMode : 에디터 모드 (Top 프레임에서 호출)
         * @param  {Object} objDashData 데쉬보드 컨텐츠 정보
         * @return {N/A} N/A
         * @example this.fnEditMode(objDashData);
         */
        this.fnEditMode = function(objDashData)
        {
            var nIdx;
            var objDiv;

            nIdx = this.getStepIndex();

            this.fv_objDashData = objDashData;

            objDiv = this.fv_arrDivComp[nIdx];

            //20210126 고영민 에딧 취소후 기존 컨텐츠 남아있는 버그 수정
            objDiv.form.fnEditDash("", false);

            //this.getOwnerFrame().form.divMain.form.fv_bEditMode=false;

            this.fv_bEditMode = true;

            this.getOwnerFrame().form.divTop.form.pDivDashEdit.closePopup();

            objDiv.setFocus();

            objDiv.form.fnEditDash(objDashData,  this.fv_bEditMode);

        }

        /**
         * fnEditEsc : 에디터 모드 취소
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnEditEsc();
         */
        this.fnEditEsc = function()
        {
            var nIdx;
            var objDiv, objWeb, objWindow, objApp, objMainframe, objChildframe, objForm;
            var sWebId;

            if (this.fv_bEditMode==true)
            {
                nIdx = this.getStepIndex();

                objDiv = this.fv_arrDivComp[nIdx];

                this.fv_bEditMode=false;

                objDiv.form.fnEditDash("", this.fv_bEditMode);
            }
        }

        /**
         * fnCallDashData : 데이터 새로 고침
         * @param  {Number} nIdx 데쉬보드 페이지 인덱스
         * @return {N/A} N/A
         * @example this.fnCallDashData(1);
         */
        this.fnCallDashData = function(nIdx)
        {
            var objDiv;
            var sWebId;

            //trace("fnCallDashData -->" + nIdx);
            objDiv = this.fv_arrDivComp[nIdx];

            try {
                if (objDiv.bTran)
                {
                    objDiv.form.fnReDraw();
                    if (take.nvl(this.fv_objDashData, "")!="") objDiv.form.fnEditDash(this.fv_objDashData, this.fv_bEditMode);

                } else {
                    objDiv.form.fnDashData();

                    if (take.nvl(this.fv_objDashData, "")!="") objDiv.form.fnEditDash(this.fv_objDashData, this.fv_bEditMode);

                    objDiv.bTran = true;
                }
             } catch(e) {

                //console.dir(objDiv.form);
                //신규 생성으로 form URL이 안 올라온 경우 리턴
                if (take.nvl(objDiv.form.fnDashData,"")=="") return;

                objDiv.form.fnDashData();

                if (take.nvl(this.fv_objDashData, "")!="") objDiv.form.fnEditDash(this.fv_objDashData, this.fv_bEditMode);

                objDiv.bTran = true;
             }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmHome_onload,this);
            this.addEventHandler("onsize",this.frmHome_onsize,this);
            this.addEventHandler("onstepchanged",this.frmHome_onstepchanged,this);
            this.addEventHandler("onkeydown",this.frmHome_onkeydown,this);
            this.addEventHandler("ontimer",this.frmHome_ontimer,this);
            this.btnLeft.addEventHandler("onclick",this.btnArrow_onclick,this);
            this.btnRight.addEventHandler("onclick",this.btnArrow_onclick,this);
        };
        this.loadIncludeScript("frmHome_new.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
