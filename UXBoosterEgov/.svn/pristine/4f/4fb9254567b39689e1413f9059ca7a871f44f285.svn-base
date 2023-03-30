(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MT010");
            this.set_titletext("회의록목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMeeting", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDEE_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMeeting_bak", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_REQUIRED_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDEE_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 선택 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","staTitleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRegNmT","edtTitle:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRegNm","staRegNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTermT","edtRegNm:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회의일");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFrom","staTermT:10","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","calFrom:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTo","Static10:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staApproval","calTo:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staApproval:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsUseYnCode");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staList","0","0","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("회의록 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","30",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMeeting");
            obj.getSetter("takegrid").set("checkbox,readonly");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"360\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"회의시간\"/><Cell col=\"3\" text=\"회의장소\"/><Cell col=\"4\" text=\"작성부서\"/><Cell col=\"5\" text=\"작성자\"/><Cell col=\"6\" text=\"작성일자\"/><Cell col=\"7\" text=\"참석인원\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MEETING_TITLE\" textAlign=\"left\" displaytype=\"normal\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:MEETING_TIME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:MEETING_PLACE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:REG_DEPT_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:REG_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:REG_DT\" maskedittype=\"string\" maskeditformat=\"####-##-##\" textAlign=\"center\"/><Cell col=\"7\" textAlign=\"center\" text=\"bind:ATTENDEE_CNT\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","divSearch:10",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtTitle","value","dsSearch","MEETING_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtRegNm","value","dsSearch","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calFrom","value","dsSearch","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calTo","value","dsSearch","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MT010.xfdl", function() {
        /**
        *  회의록 목록
        *
        *  @MenuPath    회의록 목록
        *  @FileName    MT010.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.11.18
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.11.18      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_sUserCd         = "";

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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

            var sParam = "PROJECT_CD='" + this.fv_sProjectCd + "' MENU_CD='" + this.ProgId + "'";

            take.tranSelect(this, sTranId, "MeetingMinutesManagement.meetingInfoList", "dsSearch", "dsMeeting", sParam, "fnCallback");
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
            //if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            take.openPopup(this, "MT010P01", "biz::thr/MT010P01.xfdl", "", "resizable=false", "fnPopCallback", false);
            //take.openPopup(this, "MT010P01", "biz::thr/MT010P01.xfdl", "", "", "fnPopCallback", false);
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
            //if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";
            var objDsMeeting = this.dsMeeting;
            var arrChkRow = take.getChkRow(objDsMeeting,"chk");
            if(arrChkRow.length == 0){
                alert("선택된 항목이 없습니다.");
                return;
            }

            var sRegCd = "";
            for(var i=0; i<arrChkRow.length; i++) {
                sRegCd = objDsMeeting.getColumn(arrChkRow[i], "REG_CD");
                if(sRegCd != this.fv_sUserCd) {
                    alert("삭제 권한이 없는 항목이 포함되어 있습니다.\n(작성자 본인만 삭제 가능.)");
                    return;
                }
            }

            var bRowDel = take.confirm(this, "question", "선택된 회의록을 삭제 하시겠습니까?");
            if (bRowDel){
                objDsMeeting.set_enableevent(false);
                objDsMeeting.set_updatecontrol(false);
                for(var i=0; i<arrChkRow.length; i++) {
                    //this.dsMeeting.deleteRow(arrChkRow[i]);
                    // 삭제 되어야 하는 항목 RowType 'DELETE' <- 바꿔줌 ---------> 삭제X 사용여부 N
                    objDsMeeting.setRowType(arrChkRow[i], "U");
                }
                objDsMeeting.set_updatecontrol(true);
                objDsMeeting.set_enableevent(true);

                take.tranSave(this, "Delete", "MeetingMinutesManagement.meetingDel", "dsMeeting", "", "", "fnCallback");
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 그리드(목록) 더블클릭
        this.divDetail_gridMain_oncelldblclick = function(obj,e)
        {
        	var sRegCd = this.dsMeeting.getColumn(this.dsMeeting.rowposition, "REG_CD");
            if(sRegCd == this.fv_sUserCd) {
                var sRegYn = "Y";
            } else {
                var sRegYn = "N";
            }
            var argParam = {sMtSeq:this.dsMeeting.getColumn(this.dsMeeting.rowposition, "MEETING_SEQ"), sRegYn:sRegYn}

            //take.openPopup(this, "MT010P02", "biz::thr/MT010P02.xfdl", argParam, "", "fnPopCallback", false);
            take.openPopup(this, "MT010P02", "biz::thr/MT010P02.xfdl", argParam, "resizable=false", "fnPopCallback", false);
        };

        // 캘린더 조정
        this.Calendar_onchanged = function(obj,e)
        {
        	var objDivSearch = this.divSearch.form;
            var sDateFrom   = take.nvl(objDivSearch.calFrom.value, "");
            var sDateTo     = take.nvl(objDivSearch.calTo.value, "");

        	if(sDateFrom > sDateTo){
                objDivSearch.calTo.set_value(sDateFrom);
            }
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){
            this.fv_sUserCd = this.fv_objGdsUserInfo.getColumn(0, "USER_CD");

            this.divSearch.form.cboUseYn.set_index(1);

        	// 최초 조회 일자 셋팅
        	var objDate   = take.getTodayTime();
        	var sToday    = objDate.date;
        	var sPreMonth = this.fnChangeDate(-1);

        	this.dsSearch.setColumn(0, "FROM_DATE", sPreMonth);
        	this.dsSearch.setColumn(0, "TO_DATE"  , sToday);

            this.fnSearch();
        }

        /**
         * fnChangeDate : 원하는 날짜로 캘린더 셋팅
         * @param  : nNum  - 양수,음수
         * @return : sRtn  - 전달된 인수로 계산된 일자
         * @example this.fnChangeDate(nNum, sGnb);
         */
        this.fnChangeDate = function (nNum)
        {
        	var objDate    = new Date();
        	var objNewDate = new Date(objDate.getFullYear(),objDate.getMonth(),objDate.getDate());
        	var nMs 	   = objNewDate.addMonth(nNum);

        	var sRtn 	= ( new Date(nMs) ).getFullYear()
        				+ ((new Date(nMs) ).getMonth()+1).toString().padLeft(2, "0")
        				+ ((new Date(nMs) ).getDate()).toString().padLeft(2, "0");

        	return sRtn;
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
                case "Search" : //조회 콜백
                    this.divDetail.form.staList.set_text("회의록 목록 (" + this.dsMeeting.rowcount + "건)");
                    break;
                case "Delete" :  //삭제 콜백
                    this.fnSearch();
                    break;
                default :
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
                case "MT010P01" : // 작성 콜백
                    //this.fnSearch();
                    break;
                case "MT010P02" : // 수정 콜백
                    //this.fnSearch();
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
            this.divSearch.form.calFrom.addEventHandler("onchanged",this.Calendar_onchanged,this);
            this.divSearch.form.calTo.addEventHandler("onchanged",this.Calendar_onchanged,this);
            this.divDetail.form.gridMain.addEventHandler("oncelldblclick",this.divDetail_gridMain_oncelldblclick,this);
        };
        this.loadIncludeScript("MT010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
