(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM020P02");
            this.set_titletext("쿼리생성기");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTimeHour", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">00</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">07</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">08</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">09</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">17</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">18</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">19</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">20</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">22</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">23</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">99</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTimeMin", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">00</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"NAME\">20</Col><Col id=\"CODE\">20</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">25</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">30</Col></Row><Row><Col id=\"CODE\">35</Col><Col id=\"NAME\">35</Col></Row><Row><Col id=\"CODE\">40</Col><Col id=\"NAME\">40</Col></Row><Row><Col id=\"CODE\">45</Col><Col id=\"NAME\">45</Col></Row><Row><Col id=\"CODE\">50</Col><Col id=\"NAME\">50</Col></Row><Row><Col id=\"CODE\">55</Col><Col id=\"NAME\">55</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">99</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">C</Col><Col id=\"NAME\">회사</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"NAME\">팀</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">개인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScheduleDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"255\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"255\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTableList", this);
            obj._setContents("<ColumnInfo><Column id=\"TABLE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTableInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SESSION_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"3","46","21","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","280","30","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Query ID");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","378","30",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","280","330",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle","385","35","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maxlength("25");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtContent","290","340",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maxlength("666");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","10","26","260",null,null,"10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.getSetter("taketree").set("{use:\"all\", treeindex:0, parentcolid:\"PARENT_MENU\", ordercolid:\"MENU_ORDER\", treecallback:\"fnTreeCallBack\", codecolid:\"MENU_CD\"}");
            obj.set_binddataset("dsTableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"181\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"테이블목록\"/></Band><Band id=\"body\"><Cell text=\"bind:TABLE_NM\" border=\"1px solid #d7d7d7, 0px solid #d7d7d7, 1px solid #d7d7d7, 1px solid #d7d7d7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab00","280","304","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("SELECT");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","371","304","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("INSERT");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab02","462","304","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("UPDATE");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab03","553","304","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("DELETE");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","280","100",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsTableInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"컬럼ID\"/><Cell col=\"2\" text=\"컬럼명\"/><Cell col=\"3\" text=\"데이터유형\"/><Cell col=\"4\" text=\"길이\"/><Cell col=\"5\" text=\"CODE여부\"/><Cell col=\"6\" text=\"코드그룹\"/><Cell col=\"7\" text=\"세션정보\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:COL_ID\"/><Cell col=\"2\" text=\"bind:COL_NM\"/><Cell col=\"3\" text=\"bind:DATA_TYPE\"/><Cell col=\"4\" text=\"bind:DATA_LENGTH\"/><Cell col=\"5\" text=\"bind:CODE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"6\" text=\"bind:GROUP_ID\"/><Cell col=\"7\" text=\"bind:SESSION_VAL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","290","80",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("테이블 정보");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave02","1110","75",null,"21","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("쿼리미리보기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","edtTitle:10","35",null,"21","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("※Select, Insert, Update, Delete없는 Query ID입력");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,850,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AM020P02.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.09.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.09.17      이동건             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_bolSave = true;
        this.fv_nSelRow;
        this.fv_nNowHour;
        this.fv_nNowMin;
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.AM020P02_onload = function(obj,e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		//if(this.parent.bolSearch) this.fv_bolSave = false;
        		//this.fv_nSelRow = this.parent.nSelRow;
        		//if(this.fv_bolSave){
        			this.fnInit();
        		//}else{
        		//	this.fnSearch();
        		//}
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
        this.fnInit = function(){
        	take.transaction(
        	    this,
        	    "TableList",
        	    "SVC_LOC::asm/AM020P01List.do",
        	    "",
        	    "dsTableList=dsTableList",
        	    "",
        	    "fnCallback");
        };
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
            var nScheduleSeq = this.opener.dsBizSelect.getColumn(this.fv_nSelRow, "SCHEDULE_SEQ");
        	var sProjectCd 	= UXBooster.av_sProjectCd;

        	take.tranSelect(this,"ScheduleDetail","ScheduleManagement.scheduleInfoList","", "dsScheduleDetail",
        								"PROJECT_CD='"+sProjectCd
        								+"' SCHEDULE_SEQ='"+nScheduleSeq+"'", "fnCallback");
        };

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

        	//처음기준에서 this.dsSearch랑  dsScheduleDetail이랑
        	var objDs = this.dsSearch;
        	var objInDs = "dsSearch";
        	if(this.dsSearch.rowcount == 0) {
        		this.dsSearch.addRow();
        		this.dsSearch.setColumn(0,"PROJECT_CD",take.nvl(UXBooster.av_sProjectCd, ""));
        		this.dsSearch.setColumn(0,"SCHEDULE_SEQ", this.dsScheduleDetail.getColumn(0,"SCHEDULE_SEQ"));
        	}
        	if(this.dsScheduleDetail.rowcount > 0 ) {
        		objDs = this.dsScheduleDetail;
        		objInDs = "dsScheduleDetail";
        	}

        	var nStartTime 	= this.cboStartHour.value+this.cboStartMin.value;
        	var nEndTime	= this.cboEndHour.value+this.cboEndMin.value;
        	var nStartDate 	= this.calStartDate.value;
        	var nEndDate 	= this.calEndDate.value;

        	takeval.add(this, "Save", this.cboStartHour,  	"시작시간/분",		"value", true, "string", "", "");
        	takeval.add(this, "Save", this.cboStartMin,  	"시작시간/분",		"value", true, "string", "", "");
        	takeval.add(this, "Save", this.cboEndHour,  	"종료시간/분",		"value", true, "string", "", "");
        	takeval.add(this, "Save", this.cboEndMin,  		"종료시간/분",		"value", true, "string", "", "");
        	takeval.add(this, "Save", this.edtTitle,  		"일정 타이틀",		"value", true, "string", "", "");
        	if(!takeval.check(this, "Save")) return;

        	//시작시간이 종료시간보다 더 큰 경우
        	if(nStartTime > nEndTime){
        		//일정 시작시간이 더 크더라도 종료날짜가 시작날짜보다 크다면 가능하게 변경해야한다.
        		if(nStartDate >= nEndDate){
        			take.alert(this, "info", "일정 시간을 확인해주세요", "");
        			return;
        		}
        	}

        	//종일인 경우에는 99시 99분으로 셋팅
        	if(this.chkAllDay.value == "Y"){
        		objDs.setColumn(0,"SCHEDULE_START_TIME"	,take.nvl("9999", ""));
        		objDs.setColumn(0,"SCHEDULE_END_TIME"	,take.nvl("9999", ""));
        	}else{
        		objDs.setColumn(0,"SCHEDULE_START_TIME"	,take.nvl(nStartTime, ""));
        		objDs.setColumn(0,"SCHEDULE_END_TIME"	,take.nvl(nEndTime, ""));
        	}

        	objDs.setColumn(0,"ALLDAY_YN"			,take.nvl(this.chkAllDay.value, ""));
            objDs.setColumn(0,"CATEGORY_CD"			,take.nvl(this.cboCategory.value, ""));
        	objDs.setColumn(0,"SCHEDULE_START_DATE"	,take.nvl(this.calStartDate.value, ""));
        	objDs.setColumn(0,"SCHEDULE_END_DATE"	,take.nvl(this.calEndDate.value, ""));
        	objDs.setColumn(0,"SCHEDULE_TITLE"		,take.nvl(this.edtTitle.value, ""));
        	objDs.setColumn(0,"SCHEDULE_TXT"		,take.nvl(this.txtContent.value, ""));
        	objDs.setColumn(0,"SCHEDULE_PLACE"		,take.nvl(this.edtPlace.value, ""));
        	objDs.setColumn(0,"SCHEDULE_PARTICIPANT",take.nvl(this.edtParticipant.value, ""));

        	//tranSave -> transaction 변경 2021.05.17 전영찬
        	//take.tranSave(this, "scheduleSave", "ScheduleManagement.scheduleInfo", objInDs, "", "sParam", "fnCallback");
        	take.transaction
        	(
        		this,
        		"scheduleSave",
        		"SVC_LOC::sd/scheduleInfoSave.do",
        		"dsScheduleDetail=" + objInDs + ":U",
        		"",
        		"sParam",
        		"fnCallback"
        	);
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
           var nScheduleSeq 	= this.dsScheduleDetail.getColumn(0, "SCHEDULE_SEQ");
           var sScheduleNm 		= this.dsScheduleDetail.getColumn(0, "SCHEDULE_TITLE");
           var sProjectCd 		= this.dsScheduleDetail.getColumn(0, "PROJECT_CD");
           var bolConfirm 		= take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sScheduleNm, text : "삭제"});
           if(bolConfirm){
        		//tranSave -> transaction 변경 2021.05.17 전영찬
        		//take.tranSave(this, "scheduleDelete", "ScheduleManagement.scheduleInfo", "", "",
        		//"SCHEDULE_SEQ='"+take.nvl(nScheduleSeq, "")+" PROJECT_CD='" + sProjectCd+ "'", "fnCallback");
        		take.transaction
        		(
        			this,
        			"scheduleDelete",
        			"SVC_LOC::sd/scheduleInfoSave.do",
        			"dsScheduleDetail=dsScheduleDetail:U",
        			"",
        			"SCHEDULE_SEQ='"+take.nvl(nScheduleSeq, "")+" PROJECT_CD='" + sProjectCd+ "'",
        			"fnCallback"
        		);
           }

        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.calStartDate_onchanged = function(obj,e)
        {
        	var sChangedVal = e.postvalue
        	this.calEndDate.set_value(sChangedVal);
        };
        this.calEndDate_onchanged = function(obj,e)
        {
        	var sChangedVal = e.postvalue;
        	var sStartDate  = this.calStartDate.value;

        	if(sStartDate > sChangedVal){
        		take.alert(this, "info", "종료일이 시작일보다 빠릅니다.", "");
        		this.calEndDate.set_value(e.prevalue);
        	}else if(sStartDate < sChangedVal){
        		//종일 일정으로 변경해줘야한다. 시작일과 종료일이 다른경우에는 종일 일정으로 변경해주기
        			this.chkAllDay.set_value("Y");
        			this.chkAllDay.set_enable(false);
        	}else if(sStartDate == sChangedVal){
        			this.chkAllDay.set_value("N");
        			this.chkAllDay.set_enable(true);
        	}
        };

        this.btnSave_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.cboStartHour_onitemchanged = function(obj,e)
        {
        	var sChangedVal = e.postvalue
        	var sEndHour  	= this.cboEndHour.value;
        	if(sChangedVal > sEndHour){
        		this.cboEndHour.set_value(e.postvalue);
        	}
        };

        this.btnMod_onclick = function(obj,e)
        {
        	var objDs = this.dsSearch;
        	if(objDs.rowcount < 0){
        		objDs.addRow();
        	}else{
        		//this.fnCompSetEnable(true);
        		this.fnCompSetReadonly(false)
        	}
        	objDs.set_enableevent(false);
        	objDs.set_updatecontrol(false);
        	objDs.clearData();
        	objDs.addRow();
        	objDs.setRowType(0, "u");
        	objDs.set_enableevent(true);
        	objDs.set_updatecontrol(true);
        };

        this.btnDel_onclick = function(obj,e)
        {
        	var objDs = this.dsSearch;
        	var objFromDs = this.dsScheduleDetail;
        	//2021.05.17 전영찬 등록전 삭제불가 처리 추가.
        	if(this.dsScheduleDetail.rowcount <= 0) {
        		take.alert(this, "Info", "저장하지 않은 일정은 삭제할 수 없습니다.");
        		return;
        	}

        	objDs.set_enableevent(false);
        	objDs.set_updatecontrol(false);
        	objDs.clearData();
        	objDs.addRow();
        	objDs.setRowType(0, "d");
        	objDs.set_enableevent(true);
        	objDs.set_updatecontrol(true);
        	var nScheduleSeq 	= objFromDs.getColumn(0, "SCHEDULE_SEQ");
        	var sScheduleNm 		= objFromDs.getColumn(0, "SCHEDULE_TITLE");
        	var sProjectCd 		= objFromDs.getColumn(0, "PROJECT_CD");
        	var bolConfirm 		= take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sScheduleNm, text : "삭제"});
        	if(bolConfirm){
        		//tranSave -> transaction 변경 2021.05.17 전영찬
        		//take.tranSave(this, "scheduleDelete", "ScheduleManagement.scheduleInfo", "dsSearch", "",
        		//"SCHEDULE_SEQ='"+take.nvl(nScheduleSeq, "")+"' PROJECT_CD='"+take.nvl(sProjectCd, "")+"'" , "fnCallback");
        		take.transaction
        		(
        			this,
        			"scheduleDelete",
        			"SVC_LOC::sd/scheduleInfoSave.do",
        			"dsScheduleDetail=dsSearch:U",
        			"",
        			"SCHEDULE_SEQ='"+take.nvl(nScheduleSeq, "")+"' PROJECT_CD='"+take.nvl(sProjectCd, "")+"'",
        			"fnCallback"
        		);
        	}
        };

        this.chkAllDay_onchanged = function(obj,e)
        {
        	this.fnSetAllDayChk(e.postvalue);
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCompSetEnable : 컴포넌트 Enable True/False 처리 함수
         * @param  {Boolean} sParam true/false
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnCompSetEnable = function (bolCompEnable)
        {
        	this.chkAllDay.set_enable(bolCompEnable);
        	this.cboCategory.set_enable(bolCompEnable);
        	this.calStartDate.set_enable(bolCompEnable);
        	this.cboStartHour.set_enable(bolCompEnable);
        	this.cboStartMin.set_enable(bolCompEnable);
        	this.calEndDate.set_enable(bolCompEnable);
        	this.cboEndHour.set_enable(bolCompEnable);
        	this.cboEndMin.set_enable(bolCompEnable);
        	this.edtTitle.set_enable(bolCompEnable);
        	this.txtContent.set_enable(bolCompEnable);
        	this.edtPlace.set_enable(bolCompEnable);
        	this.edtParticipant.set_enable(bolCompEnable);
        };

        this.fnCompSetReadonly = function (bolCompEnable)
        {
        		this.chkAllDay.set_readonly(bolCompEnable);
        		this.cboCategory.set_readonly(bolCompEnable);
        		this.calStartDate.set_readonly(bolCompEnable);
        		this.cboStartHour.set_readonly(bolCompEnable);
        		this.cboStartMin.set_readonly(bolCompEnable);
        		this.calEndDate.set_readonly(bolCompEnable);
        		this.cboEndHour.set_readonly(bolCompEnable);
        		this.cboEndMin.set_readonly(bolCompEnable);
        		this.edtTitle.set_readonly(bolCompEnable);
        		this.txtContent.set_readonly(bolCompEnable);
        		this.edtPlace.set_readonly(bolCompEnable);
        		this.edtParticipant.set_readonly(bolCompEnable);
        };

        this.fnSetAllDayChk = function (sChkYn)
        {
        	if(sChkYn == "Y"){
        		this.dsTimeHour.filter("");
        		this.dsTimeMin.filter("");
        		this.cboStartHour.set_value("99");
        		this.cboStartHour.set_enable(false);
        		this.cboStartMin.set_value("99");
        		this.cboStartMin.set_enable(false);
        		this.cboEndHour.set_value("99");
        		this.cboEndHour.set_enable(false);
        		this.cboEndMin.set_value("99");
        		this.cboEndMin.set_enable(false);

        	}else{
        		this.dsTimeHour.filter("CODE != '99'");
        		this.dsTimeMin.filter("CODE != '99'");
        		this.cboStartHour.set_value(this.fv_nNowHour);
        		this.cboStartHour.set_enable(true);
        		this.cboStartMin.set_value(this.fv_nNowMin);
        		this.cboStartMin.set_enable(true);
        		this.cboEndHour.set_value(this.fv_nNowHour);
        		this.cboEndHour.set_enable(true);
        		this.cboEndMin.set_value(this.fv_nNowMin);
        		this.cboEndMin.set_enable(true);
        	}
        };

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
                case "scheduleSave" : //조회 콜백
                    this.close();
                    break;
                case "ScheduleDetail" :  //조회 콜백
                    var objDs = this.dsScheduleDetail;
        			var nStartTime, nStartHour, nStartMin, nEndTime, nEndHour, nEndMin;
        			var bolAllday   = objDs.getColumn(0,"ALLDAY_YN");

        			this.chkAllDay.set_value(bolAllday);
        			this.cboCategory.set_value(objDs.getColumn(0,"CATEGORY_CD")=="C"?"C":(objDs.getColumn(0,"CATEGORY_CD")=="T"?"T":"P"))
        			this.calStartDate.set_value(objDs.getColumn(0,"SCHEDULE_START_DATE"));
        			this.calEndDate.set_value(objDs.getColumn(0,"SCHEDULE_START_DATE"));
        			nStartTime 	= objDs.getColumn(0,"SCHEDULE_START_TIME");
        			nStartHour 	= nStartTime.substr(0,2);
        			nStartMin	= nStartTime.substr(2,2);
        			nEndTime	= objDs.getColumn(0,"SCHEDULE_END_TIME");
        			nEndHour 	= nEndTime.substr(0,2);
        			nEndMin		= nEndTime.substr(2,2);
        			this.cboStartHour.set_value(nStartHour);
        			this.cboStartMin.set_value(nStartMin);
        			this.cboEndHour.set_value(nEndHour);
        			this.cboEndMin.set_value(nEndMin);

        			this.edtTitle.set_value(take.nvl(objDs.getColumn(0,"SCHEDULE_TITLE"), ""));
        			this.txtContent.set_value(take.nvl(objDs.getColumn(0,"SCHEDULE_TXT"), ""));
        			this.edtPlace.set_value(take.nvl(objDs.getColumn(0,"SCHEDULE_PLACE"), ""));
        			this.edtParticipant.set_value(take.nvl(objDs.getColumn(0,"SCHEDULE_PARTICIPANT"), ""));
        			this.staRegNm.set_text(take.nvl(objDs.getColumn(0,"REG_NM"), ""));
        			this.staRegDt.set_text(take.nvl(objDs.getColumn(0,"REG_DT"), ""));
        			this.staModNm.set_text(take.nvl(objDs.getColumn(0,"MOD_NM"), ""));
        			this.staModDt.set_text(take.nvl(objDs.getColumn(0,"MOD_DT"), ""));

        			//컴포넌트 enable false처리
        			this.fnCompSetReadonly(true);
        			//this.fnCompSetEnable(false);
                    break;
               case "scheduleDelete":
        			this.close()
        			break;
                default :
                    break;
            }
        }

        this.dsTableList_onrowposchanged = function(obj,e)
        {
        	var sTableNm = obj.getColumn(obj.rowposition, "TABLE_NM");
        	this.dsTableInfo.clearData();
        	take.transaction(
        	    this,
        	    "TableList",
        	    "SVC_LOC::asm/AM020P01View.do",
        	    "",
        	    "dsTableInfo=dsTableInfo",
        	    "sTableNm='"+sTableNm+"'",
        	    "fnCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AM020P02_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.grdMenuList.addEventHandler("onselectchanged",this.grdMenuList_onselectchanged,this);
            this.btnTab00.addEventHandler("onclick",this.btnTab00_onclick,this);
            this.btnTab01.addEventHandler("onclick",this.btnTab01_onclick,this);
            this.btnTab02.addEventHandler("onclick",this.btnTab02_onclick,this);
            this.btnSave02.addEventHandler("onclick",this.divDetail_btnSave02_onclick,this);
            this.dsTableList.addEventHandler("onrowposchanged",this.dsTableList_onrowposchanged,this);
        };
        this.loadIncludeScript("AM020P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
