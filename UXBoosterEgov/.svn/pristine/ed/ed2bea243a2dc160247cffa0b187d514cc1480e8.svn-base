(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR030P01");
            this.set_titletext("휴가승인목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"APP_TYPE\">02</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVacaList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APP_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APP_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","20",null,"20","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("휴가승인목록");
            obj.set_cssclass("sta_WF_title02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdLeaveList","20","staTitle:10",null,null,"20","20",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsVacaList");
            obj.set_autofittype("col");
            obj.set_nodatatext("휴가 승인건이 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"70\"/><Column size=\"160\"/><Column size=\"69\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"신청일\"/><Cell col=\"1\" text=\"일수\"/><Cell col=\"2\" text=\"휴가유형\"/><Cell col=\"3\" text=\"승인\"/></Band><Band id=\"body\"><Cell text=\"bind:REG_DT\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DAY_CNT\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:VACATION_TYPE_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:APP_TYPE_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",540,370,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR030P01.xfdl", function() {
        /**
        *  사원찾기팝업
        *
        *  @MenuPath    공통 > 사원찾기팝업
        *  @FileName    comUserPop.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.12.03
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.12.03      전영찬             최초 생성
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
            if (take.nvl(sTranId, "")=="") sTranId = "userList";

            this.dsVacaList.clearData();
            this.dsSearch.setColumn(0,"PROJECT_CD", this.parent.PROJECT_CD);
        	this.dsSearch.setColumn(0,"USER_CD", this.parent.USER_CD);
        	this.dsSearch.setColumn(0,"YYYY", this.parent.YYYY);

        	take.tranSelect(this, sTranId, "HumanResourceManagement.userVacationList", "dsSearch", "dsVacaList", "", "fnCallback");
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //N/A

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
            this.fnSearch();
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
                case "userList" :  //저장 콜백
                    this.divSearch.form.staTitle.set_text("휴가승인목록 (" + this.dsVacaList.rowcount + "건)");
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
            this.divSearch.form.grdLeaveList.addEventHandler("onselectchanged",this.div_detail_grdLeaveList_onselectchanged,this);
            this.dsVacaList.addEventHandler("onrowposchanged",this.dsVacaList_onrowposchanged,this);
        };
        this.loadIncludeScript("HR030P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
