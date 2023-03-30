(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NM010T02");
            this.set_titletext("일정관리_주간일정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,632);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWeekSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUN\" type=\"STRING\" size=\"256\"/><Column id=\"SUN_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"SUN1\" type=\"STRING\" size=\"256\"/><Column id=\"SUN2\" type=\"STRING\" size=\"256\"/><Column id=\"SUN3\" type=\"STRING\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"MON_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"MON1\" type=\"STRING\" size=\"256\"/><Column id=\"MON2\" type=\"STRING\" size=\"256\"/><Column id=\"MON3\" type=\"STRING\" size=\"256\"/><Column id=\"TUE\" type=\"STRING\" size=\"256\"/><Column id=\"TUE_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"TUE1\" type=\"STRING\" size=\"256\"/><Column id=\"TUE2\" type=\"STRING\" size=\"256\"/><Column id=\"TUE3\" type=\"STRING\" size=\"256\"/><Column id=\"WED\" type=\"STRING\" size=\"256\"/><Column id=\"WED_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"WED1\" type=\"STRING\" size=\"256\"/><Column id=\"WED2\" type=\"STRING\" size=\"256\"/><Column id=\"WED3\" type=\"STRING\" size=\"256\"/><Column id=\"THU\" type=\"STRING\" size=\"256\"/><Column id=\"THU_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"THU1\" type=\"STRING\" size=\"256\"/><Column id=\"THU2\" type=\"STRING\" size=\"256\"/><Column id=\"THU3\" type=\"STRING\" size=\"256\"/><Column id=\"FRI\" type=\"STRING\" size=\"256\"/><Column id=\"FRI_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"FRI1\" type=\"STRING\" size=\"256\"/><Column id=\"FRI2\" type=\"STRING\" size=\"256\"/><Column id=\"FRI3\" type=\"STRING\" size=\"256\"/><Column id=\"SAT\" type=\"STRING\" size=\"256\"/><Column id=\"SAT_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"SAT1\" type=\"STRING\" size=\"256\"/><Column id=\"SAT2\" type=\"STRING\" size=\"256\"/><Column id=\"SAT3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWeekDays", this);
            obj._setContents("<ColumnInfo><Column id=\"WEEKNDAY\" type=\"STRING\" size=\"256\"/><Column id=\"SUN\" type=\"STRING\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"TUE\" type=\"STRING\" size=\"256\"/><Column id=\"WED\" type=\"STRING\" size=\"256\"/><Column id=\"THU\" type=\"STRING\" size=\"256\"/><Column id=\"FRI\" type=\"STRING\" size=\"256\"/><Column id=\"SAT\" type=\"STRING\" size=\"256\"/><Column id=\"SUN_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"MON_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"TUE_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"WED_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"THU_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"FRI_ALL\" type=\"STRING\" size=\"256\"/><Column id=\"SAT_ALL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WEEKNDAY\">2017.07 4째주</Col><Col id=\"SUN\"/><Col id=\"MON\"/><Col id=\"TUE\"/><Col id=\"WED\"/><Col id=\"THU\"/><Col id=\"FRI\"/><Col id=\"SAT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDay", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFullDay", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_ORIGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_HOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHour", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">00:00</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">01:00</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">02:00</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">03:00</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">04:00</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">05:00</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">06:00</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">07:00</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">08:00</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">09:00</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10:00</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11:00</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12:00</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">13:00</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">14:00</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15:00</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">16:00</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">17:00</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">18:00</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">19:00</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">20:00</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21:00</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">22:00</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">23:00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTimezone", this);
            obj._setContents("<ColumnInfo><Column id=\"ISDAYLIGHTSAVINGSTIME\" type=\"STRING\" size=\"256\"/><Column id=\"UTCOFFSET\" type=\"STRING\" size=\"256\"/><Column id=\"TIMEZONENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDINALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DAYOFTHEWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICERESPONSE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTDATETIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staYearNWeek","10","10",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_monthlyTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"15","30","30","39.22%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_next");
            this.addChild(obj.name, obj);

            obj = new Button("btnBack",null,"15","30","30","57.75%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_prev");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"9","100","20","85.00%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_cellCategoryText03");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"9","100","20","73.04%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("팀");
            obj.set_cssclass("sta_WF_cellCategoryText03");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"9","100","20","60.78%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("개인");
            obj.set_cssclass("sta_WF_cellCategoryText03");
            this.addChild(obj.name, obj);

            obj = new Static("staCompCnt",null,"29","90","30","90.00%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_cellCategoryText01");
            this.addChild(obj.name, obj);

            obj = new Static("staTeamCnt",null,"29","90","30","78.04%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_cellCategoryText01");
            this.addChild(obj.name, obj);

            obj = new Static("staPrivCnt",null,"29","90","30","65.29%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_cellCategoryText01");
            this.addChild(obj.name, obj);

            obj = new Static("Static13",null,"29","50","30","84.51%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_cellCategoryText02");
            this.addChild(obj.name, obj);

            obj = new Static("Static14",null,"29","50","30","72.55%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_cellCategoryText02");
            this.addChild(obj.name, obj);

            obj = new Static("Static15",null,"29","50","30","60.29%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("건");
            obj.set_cssclass("sta_WF_cellCategoryText02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1050","160",null,"97","-1030",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("dsWeekDays");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj.set_cssclass("grd_WF_monthly01");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/></Columns><Rows><Row size=\"32\"/><Row size=\"32\"/><Row size=\"32\"/></Rows><Band id=\"body\"><Cell background=\"#f7f7f7\"/><Cell col=\"1\" text=\"SUN\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"2\" text=\"MON\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"3\" text=\"TUE\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"4\" text=\"WED\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"5\" text=\"THU\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"6\" text=\"FRI\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell col=\"7\" text=\"SAT\" background=\"#f7f7f7\" font=\"bold 12px &quot;Arial&quot;\"/><Cell row=\"1\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"1\" text=\"bind:SUN\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"2\" text=\"bind:MON\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"3\" text=\"bind:TUE\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"4\" text=\"bind:WED\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"5\" text=\"bind:THU\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"6\" text=\"bind:FRI\" background=\"#f7f7f7\"/><Cell row=\"1\" col=\"7\" text=\"bind:SAT\" background=\"#f7f7f7\"/><Cell row=\"2\" text=\"종일\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"1\" background=\"#f7f7f7\" text=\"bind:SUN_ALL\" autosizerow=\"default\"/><Cell row=\"2\" col=\"2\" background=\"#f7f7f7\" text=\"bind:MON_ALL\" autosizerow=\"default\"/><Cell row=\"2\" col=\"3\" background=\"#f7f7f7\" text=\"bind:TUE_ALL\" autosizerow=\"default\"/><Cell row=\"2\" col=\"4\" background=\"#f7f7f7\" text=\"bind:WED_ALL\" autosizerow=\"default\"/><Cell row=\"2\" col=\"5\" background=\"#f7f7f7\" text=\"bind:THU_ALL\" autosizerow=\"default\"/><Cell row=\"2\" col=\"6\" background=\"#f7f7f7\" text=\"bind:FRI_ALL\" autosizerow=\"default\"/><Cell row=\"2\" col=\"7\" background=\"#f7f7f7\" text=\"bind:SAT_ALL\" autosizerow=\"default\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","70",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsWeekSchedule");
            obj.set_autosizingtype("row");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"일요일\" color=\"#f4553b\"/><Cell col=\"2\" text=\"월요일\"/><Cell col=\"3\" text=\"화요일\"/><Cell col=\"4\" text=\"수요일\"/><Cell col=\"5\" text=\"목요일\"/><Cell col=\"6\" text=\"금요일\"/><Cell col=\"7\" text=\"토요일\" color=\"#0066ff\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"expr:comp.parent.fnSetGridDate(&quot;SUN&quot;)\" color=\"#f4553b\"/><Cell row=\"1\" col=\"2\" text=\"expr:comp.parent.fnSetGridDate(&quot;MON&quot;)\"/><Cell row=\"1\" col=\"3\" text=\"expr:comp.parent.fnSetGridDate(&quot;TUE&quot;)\"/><Cell row=\"1\" col=\"4\" text=\"expr:comp.parent.fnSetGridDate(&quot;WED&quot;)\"/><Cell row=\"1\" col=\"5\" text=\"expr:comp.parent.fnSetGridDate(&quot;THU&quot;)\"/><Cell row=\"1\" col=\"6\" text=\"expr:comp.parent.fnSetGridDate(&quot;FRI&quot;)\"/><Cell row=\"1\" col=\"7\" text=\"expr:comp.parent.fnSetGridDate(&quot;SAT&quot;)\" color=\"#0066ff\"/><Cell row=\"2\" text=\"종일\"/><Cell row=\"2\" col=\"1\" text=\"expr:comp.parent.fnSetAllDay(&quot;SUN&quot;)\"/><Cell row=\"2\" col=\"2\" text=\"expr:comp.parent.fnSetAllDay(&quot;MON&quot;)\"/><Cell row=\"2\" col=\"3\" text=\"expr:comp.parent.fnSetAllDay(&quot;TUE&quot;)\"/><Cell row=\"2\" col=\"4\" text=\"expr:comp.parent.fnSetAllDay(&quot;WED&quot;)\"/><Cell row=\"2\" col=\"5\" text=\"expr:comp.parent.fnSetAllDay(&quot;THU&quot;)\"/><Cell row=\"2\" col=\"6\" text=\"expr:comp.parent.fnSetAllDay(&quot;FRI&quot;)\"/><Cell row=\"2\" col=\"7\" text=\"expr:comp.parent.fnSetAllDay(&quot;SAT&quot;)\"/></Band><Band id=\"body\"><Cell text=\"bind:TIME\" textAlign=\"center\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"expr:comp.parent.fn_SetSchedule(currow, &quot;SUN&quot;)\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"expr:comp.parent.fn_SetSchedule(currow, &quot;MON&quot;)\" autosizerow=\"limitmin\"/><Cell col=\"3\" text=\"expr:comp.parent.fn_SetSchedule(currow, &quot;TUE&quot;)\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_SetSchedule(currow, &quot;WED&quot;)\" autosizerow=\"limitmin\"/><Cell col=\"5\" text=\"expr:comp.parent.fn_SetSchedule(currow, &quot;THU&quot;)\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"expr:comp.parent.fn_SetSchedule(currow, &quot;FRI&quot;)\" autosizerow=\"limitmin\"/><Cell col=\"7\" text=\"expr:comp.parent.fn_SetSchedule(currow, &quot;SAT&quot;)\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staBreakConcent",null,"10","370","50","15",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","825","220","171","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("일정 없는 시간대는 줄이기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,632,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("NM010T02.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    mod > NM010T02
        *  @FileName    NM010T02.xfdl
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
        this.fv_nYear 			= "";     //용도
        this.fv_nMonth 			= "";
        this.fv_nDay 			= "";
        this.fv_nDate 			= "";
        this.fv_nWeek 			= "";
        this.fv_sStartDate 		= "";
        this.fv_sEndDate 		= "";
        this.fv_objDate 		= "";
        this.fv_sStartTime 		= "00:00";
        this.fv_sLastTime 		= "00:00";
        this.fv_arrTime 		= new Array();
        this.fv_sRowCntBizFull 	= 0;
        this.fv_arrDays 		= new Array();
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.NM010T02_onload = function(obj,e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		this.fnInit();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	this.dsBizDay.clearData();
        	this.dsBizFullDay.clearData();

        	this.fv_nYear 	= take.getTodayTime().year;
        	this.fv_nMonth 	= take.getTodayTime().month;
        	this.fv_nDay	= take.getTodayTime().day;
        	this.fv_nDate	= take.getTodayTime().date;
        	this.fv_nHour 	= take.getTodayTime().hh;
        	this.fv_objDate = new Date(this.fv_nYear+"-"+this.fv_nMonth+"-"+this.fv_nDay);
        	this.fv_nWeek 	= this.fv_objDate.getDay();

        	var sProjectCd 	= UXBooster.av_sProjectCd;
        	//일정표의 시간범위 셋팅
        	this.fnSetFullTime();
        	//이번 주 계산
        	this.fnSetDayNWeek(this.fv_nYear, this.fv_nMonth, this.fv_nDay, this.fv_nWeek);

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
        	this.dsBizDay.clearData();
        	this.dsBizFullDay.clearData();

            if (take.nvl(sTranId, "")=="") sTranId = "scheduleInfoList";
        	var sProjectCd 	= UXBooster.av_sProjectCd;
        	var sStartMMDD 	= this.fv_sStartDate.substr(4,4);
        	var sEndMMDD	= this.fv_sEndDate.substr(4,4);
        	var nYear = take.getTodayTime().year;
        	var nMonth = take.getTodayTime().month;
        	var sEndDate = nYear+nMonth;
        	take.tranSelect(this, "scheduleInfoList", "ScheduleManagement.scheduleInfoList", "", "dsBizDay",
        				"PROJECT_CD='"+sProjectCd
        				+"' SCHEDULE_START_DATE='"+this.fv_sStartDate
        				+"' SCHEDULE_END_DATE='"+this.fv_sEndDate
        				+"' SCHEDULE_START_MMDD='"+sStartMMDD
        				+"' SCHEDULE_END_MMDD='"+sEndMMDD
        				+"' SCHEDULE_SEARCH_DATE='"+sEndDate
        				+"' WEEK_CALENDAR ='"+"week_calendar"+"'"
        				, "fnCallback");
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

        this.btnBack_onclick = function(obj,e)
        {
        	var dayOfMonth = this.fv_objDate.getDate();
        	//여기에 분기처리를 해줘야할듯
        	//ex) 2020년 1월 31일이 안나오고 이상해짐.. 반대로도 이상할듯
        	this.fv_objDate.setDate(dayOfMonth - 7);
        	this.fnSetWeekPrvNext();
        };
        this.btnNext_onclick = function(obj,e)
        {
        	var dayOfMonth = this.fv_objDate.getDate();
        	dayOfMonth = parseInt(dayOfMonth);
        	//여기에 분기처리를 해줘야할듯
        	//ex) 2020년 1월 31일이 안나오고 이상해짐..
        	this.fv_objDate.setDate(dayOfMonth + 7);

        	var testDate = this.fv_objDate.getDate();
        	var testMonth = this.fv_objDate.getMonth()+1;
        	// 12월 30일 ==>

        	/////////////////
        	this.fnSetWeekPrvNext();
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
         /**
         * fnSetFullTime 	:  일정관리(주간) 달력에 시간 값 셋팅
         * @example this.fnSetFullTime();
         */
        this.fnSetFullTime = function ()
        {
        	var objDs = this.dsWeekSchedule;
        	var nRow, sColId, arrRow;
        	var objProgInfo = take.getProgInfo(this.parent.parent);

        	//메뉴관리에서 설정한 시작과 종료시간을 통해 시간 구간을 설정
        	var arrUserParam = objProgInfo.UserParam;
        	var nStartTime = arrUserParam.schedule_start_time;
        	var nEndTime = arrUserParam.schedule_end_time;
        	nStartTime = "09";
        	nEndTime = "18";

        	this.fv_sStartTime = nStartTime+":00";
        	var nStartRow  = this.dsHour.findRowExpr("CODE=='" + nStartTime+"'");
        	var nEndRow    = this.dsHour.findRowExpr("CODE=='" + nEndTime+"'");
        	arrRow = 0;

        	for(var t = nStartRow ; t <= nEndRow ; t++){
        		this.fv_arrTime[arrRow] = this.dsHour.getColumn(t,"NAME");
        		arrRow++;
        		this.fv_sLastTime = this.dsHour.getColumn(t,"NAME");
        	}

        	objDs.clearData();
        	for(var i = 0; i < this.fv_arrTime.length ; i++){
        		nRow = objDs.addRow();
        		objDs.setColumn(nRow, "TIME", this.fv_arrTime[i]);
        	}
        };

        /**
         * fnSetWeekPrvNext : 달력의 화살표(전, 차주)를 눌렀을 때 해당 주의 일자를 구하는 함수
         * @example this.fnSetWeekPrvNext();
         */
        this.fnSetWeekPrvNext = function()
        {
        	this.fv_nYear 	= this.fv_objDate.getFullYear();
        	this.fv_nMonth 	= (this.fv_objDate.getMonth() + 1).toString().padLeft(2,"0");
        	this.fv_nDay	= this.fv_objDate.getDate().toString().padLeft(2,"0");
        	this.fv_objDate = new Date(this.fv_nYear+"-"+this.fv_nMonth+"-"+this.fv_nDay);
        	this.fv_nDate	= this.fv_objDate.getFullYear()+(this.fv_objDate.getMonth() + 1).toString().padLeft(2,"0")+this.fv_objDate.getDate().toString().padLeft(2,"0");
        	this.fv_nWeek 	= this.fv_objDate.getDay();
        	//연, 월, 일, 요일을 구해서

        	this.fnSetDayNWeek(this.fv_nYear, this.fv_nMonth, this.fv_nDay, this.fv_nWeek);

        }

        /**
         * fnSetWeekPrvNext 	: 달력의 화살표(전, 차주)를 눌렀을 때 해당 주의 일자를 구하는 함수
         * @param 	nSelYear	: 선택한 주의 년(연)도
         * @param 	nSelMonth	: 선택한 주의 월
         * @param 	nSelDay		: 선택한 주의 일
         * @param 	nDayOfWeek	: 선택한 주의 요일
         * @example this.fnSetWeekPrvNext(nSelYear, nSelMonth, nSelDay, nDayOfWeek);
         */
        this.fnSetDayNWeek = function(nSelYear, nSelMonth, nSelDay, nDayOfWeek)
        {
        	this.dsWeekDays.clearData();
        	this.dsWeekDays.addRow();
        	var thisDay = new Array();
        	var nStartDay;
        	var objStartDate;
        	//주차 계산 (= n주차)
        	objStartDate = new Date(nSelYear, nexacro.toNumber(nSelMonth)-1, 1);
        	nStartDay = objStartDate.getDay();
            nEndDay = new Date(nSelYear, nexacro.toNumber(nSelMonth), nSelDay).getDate();
        	nWeekCnt = Math.ceil((nStartDay + nEndDay)/7);

        	nSelYear 	= parseInt(nSelYear);
        	nSelMonth	= parseInt(nSelMonth);
        	nSelDay 	= parseInt(nSelDay);

        	var resultDay, yyyy, mm, dd;
        	for(var i=0; i<7; i++) {
        		resultDay = new Date(nSelYear, nSelMonth, nSelDay + (i - nDayOfWeek));
        		yyyy = resultDay.getFullYear();
        		mm = Number(resultDay.getMonth());
        		dd = resultDay.getDate();

        		mm = String(mm).length === 1 ? '0' + mm : mm;
        		dd = String(dd).length === 1 ? '0' + dd : dd;
        		thisDay[i] = dd;
        	}
        	this.dsWeekDays.setColumn(0,"WEEKNDAY", nSelYear+"년"+this.fn_lpad(nSelMonth,2)+"월 "+nWeekCnt+"째주");
        	this.dsWeekDays.setColumn(0,"SUN", thisDay[0]);
        	this.dsWeekDays.setColumn(0,"MON", thisDay[1]);
        	this.dsWeekDays.setColumn(0,"TUE", thisDay[2]);
        	this.dsWeekDays.setColumn(0,"WED", thisDay[3]);
        	this.dsWeekDays.setColumn(0,"THU", thisDay[4]);
        	this.dsWeekDays.setColumn(0,"FRI", thisDay[5]);
        	this.dsWeekDays.setColumn(0,"SAT", thisDay[6]);
        	this.staYearNWeek.set_text(this.dsWeekDays.getColumn(0,"WEEKNDAY"));

        	this.fv_arrDays = thisDay;

        	this.fv_objDate = new Date(nSelYear+"-"+this.fv_nMonth+"-"+this.fv_nDay);
        	if(parseInt(thisDay[0]) > 27){
        		this.fv_sStartDate = this.fv_objDate.getFullYear()+(this.fv_objDate.getMonth()).toString().padLeft(2,"0")+thisDay[0];
        		//this.fv_sStartDate = this.fv_objDate.getFullYear()+(this.fv_objDate.getMonth() + 1).toString().padLeft(2,"0")+thisDay[0];

        		if((this.fv_objDate.getMonth()+2) > 12){
        			this.fv_objDate.addMonth(1);
        			this.fv_sEndDate = this.fv_objDate.getFullYear()+(this.fv_objDate.getMonth() + 1).toString().padLeft(2,"0")+thisDay[6];

        		}else{
        			this.fv_sEndDate = this.fv_objDate.getFullYear()+(this.fv_objDate.getMonth() + 1).toString().padLeft(2,"0")+thisDay[6];
        		}
        	}else{
        		this.fv_sStartDate = this.fv_objDate.getFullYear()+(this.fv_objDate.getMonth() + 1).toString().padLeft(2,"0")+thisDay[0];
        		this.fv_sEndDate = this.fv_objDate.getFullYear()+(this.fv_objDate.getMonth() + 1).toString().padLeft(2,"0")+thisDay[6];
        	}

        	//날짜 계산 후 해당 날짜의 데이터(일정) 검색
        	this.fnSearch("scheduleInfoList");
        }


        this.fnScheduleCss = function(currow, sCol)
        {
        	var sSchedule = this.dsWeekSchedule.getColumn(currow,sCol);

        	if(sSchedule == "" || sSchedule == null){

        		return;
        	}else{
        		var nNum = sCol.substr(3,1);
        		switch(nNum) {
        			case "1":
        				return "cellCompany"
        				break;
        			case "2":
        				return "cellTeam"
        				break;
        			case "3":
        				return "cellPrivate"
        				break;
        			default:
        		}
        	}
        }

        //회사, 팀, 개인의 일정 카운트 수 체크 & 표시 함수
        this.fnGetCategory = function(objDs)
        {
        	this.staCompCnt.set_text("");
        	this.staTeamCnt.set_text("");
        	this.staPrivCnt.set_text("");
        	var sCompCnt = objDs.getCaseCount("CATEGORY_CD == 'C'");
        	var sTeamCnt = objDs.getCaseCount("CATEGORY_CD == 'T'");
        	var sPrivCnt = objDs.getCaseCount("CATEGORY_CD == 'P'");
        	this.staCompCnt.set_text(sCompCnt);
        	this.staTeamCnt.set_text(sTeamCnt);
        	this.staPrivCnt.set_text(sPrivCnt);
        }

        this.fnSetFullSchedule = function ()
        {
        	//메뉴관리에서 설정한 시작과 종료시간을 통해 시간 구간을 설정
        	this.fnSetFullTime();

        	var sStartDate, sEndDate, sDaySpace, nAddRow, originDate;
        	var objDsBizDay = this.dsBizDay;
        	//검색 된 데이터의 개수만큼 반복문을 실행
        	for(var i = 0 ; i < objDsBizDay.rowcount; i++){
        		sStartDate 	= objDsBizDay.getColumn(i, "SCHEDULE_START_DATE");
        		sEndDate 	= objDsBizDay.getColumn(i, "SCHEDULE_END_DATE");
        		//시작과 종료일이 다른경우
        		if(sStartDate != sEndDate){
        			originDate = sStartDate;
        			sStartDate	= sStartDate.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
        			sEndDate	= sEndDate.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
        			//시작과 종료일의 일자의 차이를 구한다.
        			sDaySpace 	= this.fnDateDiff(sStartDate, sEndDate);
        			//일자의 차이만큼 반복문을 통해 데이터
        			for(var y= 0 ; y <= sDaySpace ; y++){
        				// sStartDate + y  == sEndDate까지
        				sStartDate = sStartDate.toString();
        				var sDate = new Date(sStartDate);
        				//차이값을 더하여 setting
        				sDate.setDate(sDate.getDate() + y);
        				var year = sDate.getFullYear();
        				var month = sDate.getMonth() + 1;
        				month = month.toString().lpad(2,"0");
        				var day = sDate.getDate();
        				day = day.toString().lpad(2,"0");

        				//전체적으로 데이터를 넣어놔야 함
        				this.fnSelectSetColumn(false, i, originDate ,year,month,day);
        			}
        		}else{
        			this.fnSelectSetColumn(true, i, sStartDate);
        		}
        	}
        };

        //날짜간 차이 구하기
        this.fnDateDiff = function dateDiff(_date1, _date2) {
        	var sdt = new Date(_date1);
        	var edt = new Date(_date2);
        	var dateDiff = Math.ceil((edt.getTime()-sdt.getTime())/(1000*3600*24));
        	return dateDiff;
        }

        this.fnSelectSetColumn = function (bolDuplicate, searchRow, originDate, year,month,day)
        {
        	this.fv_sRowCntBizFull = this.dsBizFullDay.rowcount;

        	var objBizFull 			= this.dsBizFullDay;
        	var objBizDay 			= this.dsBizDay;
        	var sDayCount 			= year+month+day;
        	var sStarDate 			= objBizDay.getColumn(searchRow,"SCHEDULE_START_DATE");
        	var nCompareDate		= parseInt(this.fv_sEndDate);
        	//늘어나는 일정이 셋팅된 날짜보다 큰 경우에는 막아야 한다.
        	// ex) 20200112이 5~ 11일 사이보다 더 큰 날짜이기 때문에 11보다 크기때문에 막아야 한다.
        	//fnSetFullSchedule에서 시작과 종료일이 같은 경우에는 year, month, day 파라미터값이 넘어오지 않기때문에 분기처리
        	if(!bolDuplicate){
        		var sDayCountDay 	= sDayCount.substr(6,2);
        		sDayCountDay 		= parseInt(sDayCountDay);
        		var bolIncludes 	= this.fv_arrDays.includes(sDayCountDay);
        		if(!bolIncludes) {
        			return;
        			trace("FALSE")
        		}else{
        			trace("True")
        		}
        	}

        	sDayCount = parseInt(sDayCount);
        	if(sDayCount > nCompareDate) return;

        	var nAddRow 			= this.dsBizFullDay.addRow();
        	objBizFull.setColumn(nAddRow, "SCHEDULE_SEQ", 			objBizDay.getColumn(searchRow,"SCHEDULE_SEQ"));
        	objBizFull.setColumn(nAddRow, "ALLDAY_YN",				objBizDay.getColumn(searchRow,"ALLDAY_YN"));
        	objBizFull.setColumn(nAddRow, "CATEGORY_CD",			objBizDay.getColumn(searchRow,"CATEGORY_CD"));
        	objBizFull.setColumn(nAddRow, "DIVISION_CD",			objBizDay.getColumn(searchRow,"DIVISION_CD"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_ORIGIN_DATE",	originDate);
        	if(bolDuplicate) {
        		if(sStarDate.substr(0,4) == "9999"){
        			sCurrentYear = this.fv_nYear;
        			sStarDate = sStarDate.replace("9999",sCurrentYear);
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_DATE",	sStarDate);
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_TIME",	objBizDay.getColumn(searchRow,"SCHEDULE_START_TIME"));
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_DATE",		sStarDate);
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_TIME",		objBizDay.getColumn(searchRow,"SCHEDULE_END_TIME"));
        		}else{
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_DATE",	objBizDay.getColumn(searchRow,"SCHEDULE_START_DATE"));
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_TIME",	objBizDay.getColumn(searchRow,"SCHEDULE_START_TIME"));
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_DATE",		objBizDay.getColumn(searchRow,"SCHEDULE_END_DATE"));
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_TIME",		objBizDay.getColumn(searchRow,"SCHEDULE_END_TIME"));
        		}
        	}else{
        		//시작과 종료일이 다른경우
        		//여기서부터 다시 해야함 objBizFull 이게
        		objBizFull.setColumn(nAddRow, "SCHEDULE_START_DATE",	sDayCount);
        		objBizFull.setColumn(nAddRow, "SCHEDULE_END_DATE",		objBizDay.getColumn(searchRow,"SCHEDULE_END_DATE"));
        		//일정 시작일과 종료일이 같은경우 (첫째 날) 둘째 날부터는 분기처리 되어 else쪽으로
        		if(originDate == sDayCount){
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_TIME",	objBizDay.getColumn(searchRow,"SCHEDULE_START_TIME"));
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_TIME",		this.fv_sLastTime);
        		}else{
        			//다음날 시간도 당일 최소 시간으로 셋팅해줘야함
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_TIME",	this.fv_sStartTime);
        			//종료시간도 당일 시간 마지막으로 셋팅해줘야함
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_TIME",		objBizDay.getColumn(searchRow,"SCHEDULE_END_TIME"));
        		}
        	}

        	objBizFull.setColumn(nAddRow, "SCHEDULE_TITLE",			objBizDay.getColumn(searchRow,"SCHEDULE_TITLE"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_TXT",			objBizDay.getColumn(searchRow,"SCHEDULE_TXT"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_PLACE",			objBizDay.getColumn(searchRow,"SCHEDULE_PLACE"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_PARTICIPANT",	objBizDay.getColumn(searchRow,"SCHEDULE_PARTICIPANT"));

        	////계산로직을 추가해서 SUN1과 같이 비슷하게 넣어야 함 FULL --> schedule로 옮겨야 함
        	//1. 날짜값을 기준으로 1~7까지 + 요일 값 구해서 dsWeekSchedule 넣기
        	//2. 시간값을 구해서 해당 값 시간을 기준으로 해당 로우에 넣기
        	this.fnCalculWeek();

        };

        //데이터의 각 요일 및 일정 시작, 종료 시간을 구해서 다시 셋팅
        this.fnCalculWeek = function ()
        {
        	var objDs = this.dsBizFullDay;
        	var sStartDate, sScheduleDay, sStartTime, sEndTime;
        	var nCnt = objDs.rowcount;
        	for(var i = 0 ; i < nCnt ; i++){
        		sStartDate 		= objDs.getColumn(i, "SCHEDULE_START_DATE");
        		sScheduleDay 	= take.getDateWeek(sStartDate, false);
        		sStartTime 		= objDs.getColumn(i, "SCHEDULE_START_TIME");
        		sEndTime 		= objDs.getColumn(i, "SCHEDULE_END_TIME");
        		sStartTime		= sStartTime.substr(0,2)+":00";
        		sEndTime		= sEndTime.substr(0,2)+":00";
        		objDs.setColumn(i,"SCHEDULE_DAY",		sScheduleDay);
        		objDs.setColumn(i,"SCHEDULE_START_HOUR",sStartTime);
        		objDs.setColumn(i,"SCHEDULE_END_HOUR", 	sEndTime);
        	}

        	this.fnSetScheduleData();
        };

        this.fnSetScheduleData = function ()
        {
        	var sScheduleSeq, sStartDate, sStartHour, sEndDate, sEndHour, sStartTime, sEndTime, sScheduleDay, sCategory, sTargetColId, bolAllday;
        	var sScheduleTitle, sScheduleAllday, sExistVal;
        	var nIdxdiff = 0;
        	var nTargetRow;
        	var arrTime = new Array();
        	arrTime = this.fv_arrTime;
        	var nCnt = this.dsBizFullDay.rowcount;
        	var objDsBizFull 		= this.dsBizFullDay;
        	var objDsWeekDays 		= this.dsWeekDays;
        	var objDsWeekSchedule	= this.dsWeekSchedule;

        	//for(var i = 0 ; i < objDsBizFull.rowcount; i++){
        	this.fv_sRowCntBizFull = parseInt(this.fv_sRowCntBizFull);
        	for(var i = this.fv_sRowCntBizFull ; i < objDsBizFull.rowcount; i++){
        		//dsBizFull에서 시간대를 먼저 찾고 해당로우에서 ex)SUN + 1 컬럼을 찾아 title 옮겨주기
        		sScheduleSeq	= objDsBizFull.getColumn(i,"SCHEDULE_SEQ");
        		sStartDate		= objDsBizFull.getColumn(i,"SCHEDULE_START_DATE");
        		sStartHour 		= objDsBizFull.getColumn(i,"SCHEDULE_START_HOUR");
        		sEndDate		= objDsBizFull.getColumn(i,"SCHEDULE_END_DATE");
        		sEndHour 		= objDsBizFull.getColumn(i,"SCHEDULE_END_HOUR");
        		sScheduleDay	= objDsBizFull.getColumn(i,"SCHEDULE_DAY");
        		sCategory		= objDsBizFull.getColumn(i,"CATEGORY_CD");
        		sCategory 		= sCategory=="C"?"1":(sCategory=="T"?"2":(sCategory=="P"?"3":""));
        		sTargetColId 	= sScheduleDay+sCategory;
        		bolAllday		= objDsBizFull.getColumn(i,"ALLDAY_YN");
        		sIdxStartTime 	= arrTime.indexOf(sStartHour);
        		sIdxEndTime		= arrTime.indexOf(sEndHour);
        		sScheduleTitle	= objDsBizFull.getColumn(i,"SCHEDULE_TITLE");
        		sOrigialTitle 	= sScheduleTitle;
        		sSingleTitle 	= sScheduleTitle;
        		nIdxdiff		= 0;

        		// 시간대로 쪼개서 데이터 넣어야 할듯 TIME 컬럼만 빼고서 나머지 똑같이 넣어야 함
        		//일정 시작 시간과 종료 시간이 다른 경우에는 시간차이를 계산해야 한다.
        		if(sIdxStartTime != sIdxEndTime){
        			//일정부부 시간 계산 다시 수정해야 함
        			sIdxStartTime 	= parseInt(sIdxStartTime);
        			sIdxEndTime 	= parseInt(sIdxEndTime);
        			nIdxdiff		= sIdxEndTime - sIdxStartTime;
        			nIdxdiff 		= parseInt(nIdxdiff);
        		}

        		//종일 일정인 경우에는 따로 setColumn
        		if(bolAllday == "Y"){
        			var sExistVal = objDsWeekSchedule.getColumn(0, sScheduleDay+"_ALL");
        			if(sExistVal == null || sExistVal == ""){
        				objDsWeekSchedule.setColumn(0,sScheduleDay+"_ALL", sScheduleTitle);
        			}else{
        				//이미 값이 존재한다면 추가해서 넣어야 함 (동일한 값은 제외)
        				if(sScheduleTitle != sExistVal && sExistVal.indexOf(sScheduleTitle) == -1) {
        					sScheduleTitle += "\n" +	sExistVal;
        					objDsWeekSchedule.setColumn(0,sScheduleDay+"_ALL", sScheduleTitle);
        				}else{
        					objDsWeekSchedule.setColumn(0,sScheduleDay+"_ALL", sScheduleTitle);
        				}
        			}
        			continue;
        		}

        		if(nIdxdiff != 0){
        			//시간 차이가 있는 경우
        			if(sIdxStartTime != -1 && sIdxEndTime == -1){
        				for(var z = sIdxStartTime; z < arrTime.length; z++){
        					sStartHour = arrTime[z];
        					nTargetRow = objDsWeekSchedule.findRowExpr("TIME=='" + sStartHour+"'");
        					sExistVal 	= take.nvl(objDsWeekSchedule.getColumn(nTargetRow, sTargetColId), "");

        					if(sExistVal == null || sExistVal == ""){
        						objDsWeekSchedule.setColumn(nTargetRow,sTargetColId, take.nvl(sOrigialTitle, ""));
        					}else{
        						if(sExistVal != sOrigialTitle && sExistVal.indexOf(sOrigialTitle) == -1 && sOrigialTitle.indexOf(sExistVal) == -1) {
        						//if(sExistVal != sOrigialTitle) {
        							sOrigialTitle += "\n" +	sExistVal;
        							objDsWeekSchedule.setColumn(nTargetRow, sTargetColId, take.nvl(sOrigialTitle, ""));
        						}
        					}
        				}
        			continue;
        			//시간 테이블 내에 스케줄이 존재할 때
        			}else if(sIdxStartTime != -1 && sIdxEndTime != -1){
        				sIdxEndTime = parseInt(sIdxEndTime);
        				for(var y = sIdxStartTime; y <= sIdxEndTime; y++){
        					sStartHour 	= arrTime[y];
        					nTargetRow 	= objDsWeekSchedule.findRowExpr("TIME=='" + sStartHour+"'");
        					sExistVal 	= take.nvl(objDsWeekSchedule.getColumn(nTargetRow, sTargetColId), "");

        					if(sExistVal == null || sExistVal == ""){
        						objDsWeekSchedule.setColumn(nTargetRow,sTargetColId, take.nvl(sSingleTitle, ""));
        					}else{
        						if(sExistVal != sOrigialTitle && sExistVal.indexOf(sOrigialTitle) == -1 && sOrigialTitle.indexOf(sExistVal) == -1) {
        						//if(sExistVal != sOrigialTitle) {
        							sOrigialTitle += "\n" +	sExistVal;
        							objDsWeekSchedule.setColumn(nTargetRow, sTargetColId, take.nvl(sOrigialTitle, ""));
        						}else{
        							objDsWeekSchedule.setColumn(nTargetRow, sTargetColId, take.nvl(sOrigialTitle, ""));
        						}
        					}
        				}
        			continue;
        			//시작 시간이 테이블 보다 이전이고 시간 테이블안에 일정이 끝나는 경우
        			}else if(sIdxStartTime == -1 && sIdxEndTime != -1){
        				for(var z = sIdxStartTime; z <= sIdxEndTime; z++){
        					sStartHour = arrTime[z];
        					nTargetRow = objDsWeekSchedule.findRowExpr("TIME=='" + sStartHour+"'");
        					sExistVal 	= take.nvl(objDsWeekSchedule.getColumn(nTargetRow, sTargetColId), "");
        					if(sExistVal == null || sExistVal == ""){
        						objDsWeekSchedule.setColumn(nTargetRow,sTargetColId, take.nvl(sOrigialTitle, ""));
        					}else{
        						if(sExistVal != sOrigialTitle && sExistVal.indexOf(sOrigialTitle) == -1 && sOrigialTitle.indexOf(sExistVal) == -1) {
        						//if(sExistVal != sOrigialTitle) {
        							sOrigialTitle += "\n" +	sExistVal;
        							objDsWeekSchedule.setColumn(nTargetRow, sTargetColId, take.nvl(sOrigialTitle, ""));
        						}
        					}
        				}
        			}
        		}else{
        			nTargetRow = objDsWeekSchedule.findRowExpr("TIME=='" + sStartHour+"'");
        			sExistVal = take.nvl(objDsWeekSchedule.getColumn(nTargetRow, sTargetColId), "");

        			if(sExistVal == null || sExistVal == ""){
        				objDsWeekSchedule.setColumn(nTargetRow,sTargetColId, take.nvl(sOrigialTitle, ""));
        			}else{
        // 				if(sExistVal == null || sExistVal == ""){
        				if(sExistVal != sOrigialTitle){
        					sOrigialTitle += "\n" +	sExistVal;
        					objDsWeekSchedule.setColumn(nTargetRow, sTargetColId, take.nvl(sOrigialTitle, ""));
        				}
        			}
        		}
        	}

        	//현재 시간대의 로우에 포커스해주기

        };

        this.fnSetAllDay = function(sDay)
        {
        	var sResult = take.nvl(this.dsWeekSchedule.getColumn(0,sDay+"_ALL"), "");
        	return sResult;
        }

        this.fnSetGridDate = function(sColId)
        {
        	var sDateVal = this.dsWeekDays.getColumn(0,sColId);
        	return sDateVal;
        }
        this.fn_lpad = function(nNum, nCnt){
        	var nNum = nNum +'';

        	return nNum.length >= nCnt ? nNum : new Array(nCnt - nNum.length + 1).join('0') + nNum;
        }

        this.fn_SetSchedule = function(nRow, sDay){
        	var sTotalValue, sValue1, sValue2, sValue3;
        	sValue  = "";
        	sValue1 = take.nvl(this.dsWeekSchedule.getColumn(nRow, sDay+"1"), "");
        	sValue2 = take.nvl(this.dsWeekSchedule.getColumn(nRow, sDay+"2"), "");
        	sValue3 = take.nvl(this.dsWeekSchedule.getColumn(nRow, sDay+"3"), "");

        	if(sValue1 != ""){
        		sValue += sValue1 +"\n"
        	}

        	if(sValue2 != ""){
        		sValue += sValue2 +"\n"
        	}

        	if(sValue3 != ""){
        		sValue += sValue3;
        	}

        	return sValue;
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
                case "scheduleInfoList" : //조회 콜백
        			var objProgInfo = take.getProgInfo(this.parent.parent);
        			console.dir("this.parent.parent ==> " + this.parent.parent.id);
        			console.dir("objProgInfo ==> " + objProgInfo);
        			trace(objProgInfo);

        			var arrUserParam = objProgInfo.UserParam;
        			var sBreakingTime  = arrUserParam.breaking_txt;
        			var sConcnetTime   = arrUserParam.concent_txt;

        			this.staBreakConcent.set_text(sBreakingTime+"\n"+sConcnetTime);
        			//회사, 팀, 개인의 일정 카운트 계산 및 표시
        			this.fnGetCategory(this.dsBizDay);
        			//전체 스케줄 셋팅
        			this.fnSetFullSchedule();
                    break;

        //         case "scheduleTotalTime" :  //조회 콜백
        // 			this.fnSetDayNWeek(this.fv_nYear, this.fv_nMonth, this.fv_nDay, this.fv_nWeek);
        // 			this.fnSetFullTime();
        //             break;

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

        this.Grid00_oncellclick = function(obj,e)
        {
        	var nCell = e.cell;
        	var test = this.Grid00.getCellValue(0,nCell);
        };

        this.dsWeekSchedule_cancolumnchange = function(obj,e)
        {
        	if (e.newvalue == -1)
           {
              obj.setColumn(e.row, e.columnid, "");
           }
        };

        this.staCompCnt_onclick = function(obj,e)
        {
        	//take.openPopup(this, "addPopUp", "frm::mod/NM010P01.xfdl", "", "", "fnPopCallback", false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NM010T02_onload,this);
            this.btnNext.addEventHandler("onclick",this.btnNext_onclick,this);
            this.btnBack.addEventHandler("onclick",this.btnBack_onclick,this);
            this.staCompCnt.addEventHandler("onclick",this.staCompCnt_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.dsWeekSchedule.addEventHandler("cancolumnchange",this.dsWeekSchedule_cancolumnchange,this);
        };
        this.loadIncludeScript("NM010T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
