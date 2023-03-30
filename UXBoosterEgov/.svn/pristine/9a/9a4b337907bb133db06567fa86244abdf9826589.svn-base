(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NM010P03");
            this.set_titletext("일정관리목록");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(820,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN5\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN6\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN7\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN8\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COLUMN2\">tttttt</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDay", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"NAME\">회사</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"NAME\">팀</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">개인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static03","20","20","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("일시");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","Static03:-1","20","340","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","557","20",null,"31","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"Static00:10","94","21","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀 Download ");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static10:-1","20","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calStartDate","Static03:6","25","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","calStartDate:10","25","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCategory","Static01:6","25","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"Static00:10","46","21","btnExcel:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Grid("grdScheduleList","20","btnSearch:5",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_calendar");
            obj.set_binddataset("dsBizDay");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"108\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"시간\"/><Cell col=\"2\" text=\"범주\"/><Cell col=\"3\" text=\"일정\"/><Cell col=\"4\" text=\"내용\"/><Cell col=\"5\" text=\"참여자\"/><Cell col=\"6\" text=\"장소\"/><Cell col=\"7\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.fnSetSchedule(currow)\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:comp.parent.fnSetScheduleTime(currow)\" textAlign=\"center\"/><Cell col=\"2\" text=\"expr:CATEGORY_CD == &quot;C&quot;  ? &quot;회사&quot; : CATEGORY_CD == &quot;T&quot; ? &quot;팀&quot; : CATEGORY_CD == &quot;P&quot; ? &quot;개인&quot; : &quot;&quot;\" cssclass=\"expr:comp.parent.fn_setCssClass(currow)\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SCHEDULE_TITLE\" font=\"normal bold 12px/normal &quot;Arial&quot;,&quot;Noto Sans CJK KR&quot;,&quot;맑은 고딕&quot;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:SCHEDULE_TXT\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SCHEDULE_PARTICIPANT\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:SCHEDULE_PLACE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:REG_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,360,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("NM010P03.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    mod > NM010T02
        *  @FileName    NM010T03.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.10.21
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.10.21      이동건             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_nFirstDate = "";
        this.fv_nDay = "";
        this.fv_sCategory = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.NM010P03_onload = function(obj,e)
        {
        	if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		this.fnInit()
        	}
        };
        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){
        	var nYear = take.getTodayTime().year;
        	var nMonth = take.getTodayTime().month;
        	this.fv_nDay = take.getTodayTime().date;

        	var d = new Date();
        	var dayOfMonth = d.getDate()
        	d.setDate(dayOfMonth - 7)
        	var nFirstYear 	= d.getFullYear();
        	var nFirstMonth = d.getMonth()+1;
        	var nFirstDay 	= d.getDate();
        	this.fv_nFirstDate = nFirstYear.toString()+nFirstMonth.toString().lpad(2,"0")+nFirstDay.toString();
        	this.calStartDate.set_value(this.fv_nFirstDate);
        	this.calEndDate.set_value(this.fv_nDay);
        	this.fnSearch();

        }
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
        	var sProjectCd 	= UXBooster.av_sProjectCd;
        	//var sMenuCd 	= this.opener.ProgId;
        	this.dsBizDay.clearData();
        	var nYear = take.getTodayTime().year;
        	var nMonth = take.getTodayTime().month;
        	var sEndDate = nYear+nMonth;
        	take.tranSelect(this, "onLoad", "ScheduleManagement.scheduleInfoList", "", "dsBizDay",
        					"PROJECT_CD='"+sProjectCd
        					+"' SCHEDULE_START_DATE='"+this.fv_nFirstDate.toString()
        					+"' SCHEDULE_END_DATE='"+this.fv_nDay.toString()
        					+"' SCHEDULE_SEARCH_DATE='"+sEndDate
        					+"' CATEGORY_CD='"+this.fv_sCategory.toString() +"'", "fnCallback");
        	//this.fv_sYyyyMm = nYear.toString() + nMonth.toString();
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save transation id";
            take.tranSave(this, sTranId, "NAMESPACE", "sInDs", "sOutDs", "sParam", "fnCallback");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fv_nFirstDate 	= this.calStartDate.value;
        	this.fv_nDay 		= this.calEndDate.value;
        	this.fv_sCategory	= take.nvl(this.cboCategory.value, "");

        	if( !take.isEmpty(this.fv_nFirstDate) && !take.isEmpty(this.fv_nDay ) ){
        		var bFromTo = take.isFromTo(this.fv_nFirstDate , this.fv_nDay );
        		if( !bFromTo ){
        			take.alert(this, "", "일시 기간이 잘못되었습니다.");
        			return;
        		}
        	}

        	this.fnSearch();
        };

        this.btnExcel_onclick = function(obj,e)
        {
        	var sStartDate = this.calStartDate.value;
        	var sEndDate   = this.calEndDate.value;
        	var sTitle = sStartDate +"-"+sEndDate + "일정 목록";
        	this.grdScheduleList.ExportExcelGrid(sTitle, "Sheet1", "", "");
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }
        this.fnSetSchedule = function(currow)
        {
        	var sRtnVal = "";
        	var nStartDate = this.dsBizDay.getColumn(currow,"SCHEDULE_START_DATE");
        	var nYear = nStartDate.substr(2,2);
            var nMonth = nStartDate.substr(4,2);
            var nDay = nStartDate.substr(6,2);
            nStartDate = nYear + "." + nMonth + "." + nDay;
        	var nEndDate = this.dsBizDay.getColumn(currow, "SCHEDULE_END_DATE");
        	nYear = nEndDate.substr(2,2);
            Month = nEndDate.substr(4,2);
            nDay = nEndDate.substr(6,2);
            nEndDate = nYear + "." + nMonth + "." + nDay;

        	if(nStartDate == nEndDate){
        		sRtnVal = nStartDate;
        	}else{
        		sRtnVal = nStartDate +"~"+nEndDate;
        	}

        	return sRtnVal;
        }

        this.fn_setCssClass = function(currow)
        {
        	var sCategoryCd = this.dsBizDay.getColumn(currow, "CATEGORY_CD");
        	if(sCategoryCd == "C"){
        		return "cellCompany";
        	}else if(sCategoryCd == "T"){
        		return "cellTeam";
        	}else if (sCategoryCd == "P"){
        		return "celPrivate";
        	}
        }
        this.fnSetScheduleTime = function(currow)
        {
        	var bolAllday = this.dsBizDay.getColumn(currow, "ALLDAY_YN");
        	if(bolAllday == "Y"){
        		return "종일";
        	}else{
        		var nStartTime 	= this.dsBizDay.getColumn(currow, "SCHEDULE_START_TIME");
        		nStartTime	= nStartTime.replace(/(\d\d)(\d\d)/g, '$1:$2');
        		var nEndTime 	= this.dsBizDay.getColumn(currow, "SCHEDULE_END_TIME");
        		nEndTime	= nEndTime.replace(/(\d\d)(\d\d)/g, '$1:$2');
        		return nStartTime + "~" +nEndTime;
        	}
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
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
                case "onLoad" : //조회 콜백
                    this.dsBizDay.set_keystring("S:SCHEDULE_START_DATE");

                    break;
                case "Transation id 02" :  //조회 콜백
                    //Script
                    break;
                case "Transation id 03" : //조회 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NM010P03_onload,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("NM010P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
