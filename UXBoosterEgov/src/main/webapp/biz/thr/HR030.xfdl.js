(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HR030");
            this.set_titletext("휴가관리대장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserVacation", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"VACATION_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT01\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT02\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT03\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT04\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT05\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT06\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT07\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT08\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT09\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT10\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT11\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CNT12\" type=\"STRING\" size=\"256\"/><Column id=\"REM_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYear","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYear","staYear:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYear");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("cmb_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUser","cboYear:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","staUser:10","10","174","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnUser","edtUserNm:3","10","21","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserCd","549","10",null,"21","btnUser:13",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staVacation","0","0","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("휴가관리대장(00 건)");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdVacationManage","0","30",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsUserVacation");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"순번\"/><Cell col=\"1\" rowspan=\"2\" text=\"부서\"/><Cell col=\"2\" rowspan=\"2\" text=\"성명\"/><Cell col=\"3\" rowspan=\"2\" text=\"입사일\"/><Cell col=\"4\" rowspan=\"2\" text=\"휴가일수\"/><Cell col=\"5\" colspan=\"12\" text=\"월별휴가사용내역\"/><Cell col=\"17\" rowspan=\"2\" text=\"잔여일수\"/><Cell row=\"1\" col=\"5\" text=\"1\"/><Cell row=\"1\" col=\"6\" text=\"2\"/><Cell row=\"1\" col=\"7\" text=\"3\"/><Cell row=\"1\" col=\"8\" text=\"4\"/><Cell row=\"1\" col=\"9\" text=\"5\"/><Cell row=\"1\" col=\"10\" text=\"6\"/><Cell row=\"1\" col=\"11\" text=\"7\"/><Cell row=\"1\" col=\"12\" text=\"8\"/><Cell row=\"1\" col=\"13\" text=\"9\"/><Cell row=\"1\" col=\"14\" text=\"10\"/><Cell row=\"1\" col=\"15\" text=\"11\"/><Cell row=\"1\" col=\"16\" text=\"12\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_NM\" textAlign=\"center\" textDecoration=\"underline\"/><Cell col=\"3\" text=\"bind:JOIN_DATE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:VACATION_CNT\" textAlign=\"center\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:MONTH_CNT01\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:MONTH_CNT02\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:MONTH_CNT03\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MONTH_CNT04\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:MONTH_CNT05\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:MONTH_CNT06\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:MONTH_CNT07\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:MONTH_CNT08\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:MONTH_CNT09\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:MONTH_CNT10\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:MONTH_CNT11\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:MONTH_CNT12\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:REM_CNT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"0","94","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("엑셀 다운로드");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staToday",null,"0","200","23","btnDownload:5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_textR");
            obj.set_textAlign("right");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
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
            obj = new BindItem("item1","divSearch.form.edtUserCd","value","dsSearch","USER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboYear","value","dsSearch","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtUserNm","value","dsSearch","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HR030.xfdl", function() {
        /**
        *  휴가승인관리
        *
        *  @MenuPath    테이크 > 휴가 > 휴가관리대장
        *  @FileName    HR030.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.09.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.17      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_sToday = null;     //용도

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
            if (take.nvl(sTranId, "")=="") sTranId = "UserVacation";

            this.dsSearch.setColumn(0, "PROJECT_CD",  this.fv_sProjectCd);

            this.dsUserVacation.clearData();

            take.tranSelect(this, sTranId, "HumanResourceManagement.vacationUserList", "dsSearch", "dsUserVacation", "", "fnCallback");
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

            var sRegYear = this.divSearch.form.cboYear.value;

            //Insert / Update
            //take.tranSave(this, sTranId, "HumanResourceManagement.vacationUser", "dsUserVacation", "", "REG_YEAR='" + sRegYear + "'", "fnCallback");
        	take.transaction(this, sTranId, "SVC_LOC::hr/vacationUserSave.do", "dsUserVacation=dsUserVacation:U", "", "REG_YEAR='" + sRegYear + "'", "fnCallback");
        }

        this.fnAddRow = function (nRow)
        {

        };
        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 사용자 선택 버튼 클릭 이벤트
        this.divSearch_btnUser_onclick = function(obj,e)
        {
        	//take.openPopup(this, "comUserPop", "frm::com/comUserPop.xfdl", {sTitle:"회원 검색"}, "showtitlebar=true layered=true", "fnPopCallback", false);
            take.openPopup(this, "comUserPop", "frm::com/comUserPop.xfdl", "", "showtitlebar=true", "", false);
        };

        //엑셀 다운로드 클릭
        this.divDetail_btnDownload_onclick = function(obj,e)
        {
            var sTitle = "vacation_" + (this.fv_sToday).replace(/-/gi,"");

        	//this.divDetail.form.grdVacationManage.ExportExcelGrid(sTitle, "Sheet1", "TEST EXCEL", "ORG");
        	this.divDetail.form.grdVacationManage.ExportExcelGrid(sTitle, "Sheet1", "", "");
        };

        //사용자이름 빈값일때
        this.divSearch_edtUserNm_onchanged = function(obj,e)
        {
        	var sValue = take.nvl(obj.value, "");

            if (sValue == "")
        	{
        		this.divSearch.form.edtUserCd.set_value("");
        	}
        };
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
            var objDateTime = take.getTodayTime();

            this.fv_sToday = objDateTime.year + "-" + objDateTime.month + "-" + objDateTime.day;    //기준일자 셋팅

            this.fnYear();

            this.fnSearch("UserVacation");
        }

        /**
         * fnYear : 해당년도 전후 5년
         * @param  {String} N/A
         * @example this.fnYear();
         */
        this.fnYear = function()
        {
            var nAddRow, nThisRow;
            var objDsYear = this.dsYear;
            var nThisYear = Number(take.getTodayTime().year);

            //전 5년
            for(var i=5; i>=1; i--) {
                nAddRow = this.dsYear.addRow();
                objDsYear.setColumn(nAddRow, "CODE", (nThisYear-i));
                objDsYear.setColumn(nAddRow, "NAME", (nThisYear-i));
            }
            //현재
            nThisRow = this.dsYear.addRow();
            objDsYear.setColumn(nThisRow, "CODE", nThisYear);
            objDsYear.setColumn(nThisRow, "NAME", nThisYear);
            //현재 후 5년
            for(var i=1; i<=5; i++) {
                nAddRow = this.dsYear.addRow();
                objDsYear.setColumn(nAddRow, "CODE", (nThisYear+i));
                objDsYear.setColumn(nAddRow, "NAME", (nThisYear+i));
            }

            this.divSearch.form.cboYear.set_index(nThisRow);
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
                case "UserVacation" : //조회 콜백
                    this.divDetail.form.staVacation.set_text("휴가관리대장 (" + this.dsUserVacation.rowcount + "건)");
                    this.divDetail.form.staToday.set_text("기준일자 : " + this.fv_sToday);
                    break;
                case "Save" :  //저장 콜백
                    this.fnSearch("UserVacation");
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
        this.fnPopCallback = function(sRtn)
        {
            var arrRtn = sRtn.split(',');
            this.divSearch.form.edtUserNm.set_value(arrRtn[1]);
            //this.divSearch.form.edtUserCd.set_value(arrRtn[0]);
        }

        this.divDetail_grdVacationManage_oncelldblclick = function(obj,e)
        {
        	var nCol = e.col;
        	var objDs = this.dsUserVacation;
        	var nRowPos = objDs.rowposition;

        	switch(nCol) {
        		case 2:
        			var sUserCd = objDs.getColumn(nRowPos, "USER_CD");
        			var sUserNm = objDs.getColumn(nRowPos, "USER_NM");
        			var sRegYear = this.divSearch.form.cboYear.value;
        			var objParam = {PROJECT_CD:this.fv_sProjectCd, USER_CD:sUserCd, YYYY:sRegYear};
        			var sOptions = "showtitlebar=true titletext=" + sUserNm;
        			take.openPopup(this, "HR030P01", "biz::thr/HR030P01.xfdl", objParam, sOptions, "", false);
        			break;
        		case 5:
        		case 6:
        		case 7:
        		case 8:
        		case 9:
        		case 10:
        		case 11:
        		case 12:
        		case 13:
        		case 14:
        		case 15:
        		case 16:
        			var sMonth 		= String(nCol - 4);
        				sMonth		= sMonth.lpad(2,"0");
        			var sUserCd 	= objDs.getColumn(nRowPos, "USER_CD");
        			var sUserNm 	= objDs.getColumn(nRowPos, "USER_NM");
        			var sRegYear 	= this.divSearch.form.cboYear.value;
        			var objParam 	= {PROJECT_CD:this.fv_sProjectCd, REG_CD:sUserCd, YYYY:sRegYear, MM:sMonth};
        			var sOptions 	= "showtitlebar=true titletext=" + sUserNm;
        			take.openPopup(this, "HR030P02", "biz::thr/HR030P02.xfdl", objParam, sOptions, "", false);
        			break;
        		default:
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtUserNm.addEventHandler("onchanged",this.divSearch_edtUserNm_onchanged,this);
            this.divSearch.form.btnUser.addEventHandler("onclick",this.divSearch_btnUser_onclick,this);
            this.divDetail.form.grdVacationManage.addEventHandler("oncellclick",this.divDetail_grdVacationManage_oncellclick,this);
            this.divDetail.form.grdVacationManage.addEventHandler("oncelldblclick",this.divDetail_grdVacationManage_oncelldblclick,this);
            this.divDetail.form.btnDownload.addEventHandler("onclick",this.divDetail_btnDownload_onclick,this);
        };
        this.loadIncludeScript("HR030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
