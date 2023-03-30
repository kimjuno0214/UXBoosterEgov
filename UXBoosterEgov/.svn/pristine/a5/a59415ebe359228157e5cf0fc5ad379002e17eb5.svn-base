(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TM010");
            this.set_titletext("타임라인목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTimelineList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMarster", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_FROM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
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

            obj = new Static("Static08",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","staTitleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staStatusT","edtTitle:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboStatus","staStatusT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCboStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staClassT","cboStatus:50","10","80","21",null,null,"80",null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboClass","staClassT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCboGrade");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRegDtT","cboClass:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작성일시");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calRegForm","staRegDtT:10","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static14","calRegForm:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calRegTo","Static14:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staTimeLineListT","0","0","740","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("타임라인 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdTimeLine","0","staTimeLineListT:0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsTimelineList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_timeLine");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"22\"/><Column size=\"447\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성일\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"타임라인\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" colspan=\"2\"><Cell text=\"expr:comp.parent.parent.parent.fnSetTitle( currow, dataset.getColumn(currow, &apos;BOARD_TITLE&apos;) )\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:TIMELINE_TITLE\"/></Cell><Cell col=\"3\" text=\"bind:REG_DT\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:REG_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TIMELINE_CNT\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:GRADE_NM\" textAlign=\"center\" cssclass=\"expr:(dataset.getColumn( currow, &apos;TIMELINE_GRADE&apos; ) == &quot;A&quot;) ? &quot;cellGrad01&quot; : (dataset.getColumn( currow, &apos;TIMELINE_GRADE&apos; ) == &quot;B&quot;) ? &quot;cellGrad02&quot; : &quot;cellGrad03&quot;\" border=\"0px solid\" padding=\"5px\"/><Cell col=\"7\" text=\"bind:STATUS_NM\" textAlign=\"center\" cssclass=\"expr:(dataset.getColumn( currow, &apos;TIMELINE_STATUS&apos; ) == &apos;01&apos;) ? &apos;cellGrad04&apos; : &apos;cellGrad05&apos; \" border=\"0px solid\" padding=\"5px\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new ListView("lstTimeLine","0",null,null,"50","20","-61",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsTimelineList");
            obj.set_cssclass("lst_WF_timeLine");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"100\"><Cell id=\"cellImg\" left=\"10\" top=\"10\" width=\"100\" height=\"80\"/><Cell id=\"cellTitle\" left=\"120\" top=\"13\" width=\"870\" height=\"40\" text=\"bind:TIMELINE_TITLE\" cssclass=\"cellTitle01\"/><Cell id=\"cellUserNm\" left=\"120\" top=\"55\" width=\"200\" height=\"30\" text=\"bind:REG_NM\"/><Cell id=\"cellDate\" left=\"320\" top=\"55\" width=\"170\" height=\"30\" text=\"bind:REG_DT\"/><Cell id=\"Cell04\" left=\"495\" top=\"58\" width=\"50\" height=\"24\" text=\"조회수\" cssclass=\"cellBox01\"/><Cell id=\"Cell05\" left=\"550\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:COLUMN3\" displaytype=\"number\"/><Cell id=\"cellAttach\" left=\"615\" top=\"58\" width=\"50\" height=\"24\" text=\"첨부\" cssclass=\"cellBox01\"/><Cell id=\"cellAttachNum\" left=\"670\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:COLUMN4\" displaytype=\"number\"/><Cell id=\"cellComment\" left=\"735\" top=\"58\" width=\"60\" height=\"24\" text=\"타임라인\" cssclass=\"cellBox01\"/><Cell id=\"cellCommentNum\" left=\"800\" top=\"55\" width=\"60\" height=\"30\" text=\"bind:TIMELINE_CNT\" displaytype=\"number\"/><Cell id=\"cellClass\" left=\"875\" top=\"58\" width=\"60\" height=\"24\" text=\"bind:GRADE_NM\" cssclass=\"cellGrade01\"/><Cell id=\"cellStatus\" left=\"940\" top=\"58\" width=\"60\" height=\"24\" text=\"bind:STATUS_NM\" cssclass=\"cellStatus01\"/></Band><Band id=\"detail\" width=\"100%\" height=\"5\"/></Format></Formats>");
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
            obj = new BindItem("item0","divSearch.form.edtTitle","value","dsSearch","TIMELINE_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboStatus","value","dsSearch","STATUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboClass","value","dsSearch","GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TM010.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    tm > TM010
        *  @FileName    TM010.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.09.18
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.18      김대승             최초 생성
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
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.TM010_onload = function(obj, e)
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
            if (take.nvl(sTranId, "")=="") sTranId = "TimeLineSearch";

        	var sCalFrom = this.divSearch.form.calRegForm.value;
        	var sCalTo	 = this.divSearch.form.calRegTo.value;
        	if( !take.isEmpty(sCalFrom) && !take.isEmpty(sCalTo) ){
        		var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        		if( !bFromTo ){
        			take.alert(this, "", "작성일시 기간이 잘못되었습니다.");
        			return;
        		}
        	}

        	this.dsTimelineList.clearData();

            // 벨리데이션
        // 	takeval.add(this, "Search", this.divSearch.form.cboType, "유형", "value", true, "string", "", "");
        // 	if(!takeval.check(this, "Search")) return;

        	//var sProjectCd = take.nvl(this.divSearch.form.edtProjectNm.value, "");
        	//var sMenuCd	   = take.nvl(this.divSearch.form.cboUseYn.value, "");

        	// 임시사용 코드
        	var sProjectCd = "PM00000002";
        	var sMenuCd	   = "M0018";

        	this.dsSearch.setColumn(0, "REG_DT_FROM", take.nvl(sCalFrom, ""));
        	this.dsSearch.setColumn(0, "REG_DT_TO"  , take.nvl(sCalTo, ""));
        	take.tranSelect
        	(
        		this,
        		"TimeLineSearch",
        		"TimelineManagement.timelineInfoList",
        		"dsSearch",
        		"dsTimelineList",
        		"sProjectCd='" + sProjectCd + "' sMenuCd='" + sMenuCd + "'",
        		"fnCallback"
        	)
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdTimeLine";

        	// 타입라인등록 팝업 오픈 TM020P02
        	AgrKey = {sProjectCd:"PM00000002", sMenuCd:"M0018", sTimelineSeq:"0000000001"};
        	take.openPopup(this, "TM020P02", "frm::mod/TM020P02.xfdl", AgrKey, "",
        		function(){
        			this.fnSearch("TimeLineSearch");
        		},
        	false);
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // divDetail_grdTimeLine_oncelldblclick : 데이터라인 더블클릭 상세 팝업 오픈
        this.divDetail_grdTimeLine_oncelldblclick = function(obj,e)
        {
        	var objDsTimeLineList = this.dsTimelineList;
        	var objDsMarster	  = this.dsMarster;

        	var nSelectProj = objDsTimeLineList.getColumn(e.row, "PROJECT_CD");
        	var nSelectMenu = objDsTimeLineList.getColumn(e.row, "MENU_CD");
        	var nSelectSeq  = objDsTimeLineList.getColumn(e.row, "TIMELINE_SEQ");
        	objDsMarster.clearData();
        	objDsMarster.copyRow(objDsMarster.addRow(), objDsTimeLineList, objDsTimeLineList.rowposition);

        	// 타입라인상세 팝업 오픈 TM020
        	AgrKey = {sProjectCd:nSelectProj, sMenuCd:nSelectMenu, sTimelineSeq:nSelectSeq, objDs:objDsMarster};
        	take.openPopup(this, "TM020", "frm::mod/TM020.xfdl", AgrKey, "",
        		function(){
        			this.fnSearch("TimeLineSearch");
        		},
        	false);
        };

        // divSearch_Edit00_onkeyup : Edit 컴포넌트 Enter 값 처리
        this.divSearch_Edit00_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

        	// 검색조건 작성일시 셋팅 [오늘 날짜 기본 셋팅]
        	var objDate = take.getTodayTime();
        	var nToday  = objDate.date;

          	this.divSearch.form.calRegForm.set_value(nToday);
          	this.divSearch.form.calRegTo.set_value(nToday);
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var arrGroupCodes = ["00022", "00016"];
        	var arrOutDs      = ["dsCboStatus", "dsCboGrade"];
        	var arrHeaderType = ["ALL", "ALL"];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        	function(sId, nErrCd, sErrMsg)
        	{
        		if (this.dsCboStatus.rowcount > 0){
        			this.divSearch.form.cboStatus.set_index(0);
        		}
        		if (this.dsCboGrade.rowcount > 0){
        			this.divSearch.form.cboClass.set_index(0);
        		}
        		this.fnSearch("TimeLineSearch");
        	});
        };

        /**
         * fnSetTitle : 신규작성 타임라인 new 표시
         * @example this.fnSetTitle(nRow, sTitle);
         */
        this.fnSetTitle = function(nRow, sTitle)
        {
        	var sImgUrl = "";
        	var sRegDt = take.nvl(this.dsTimelineList.getColumn(nRow, "REG_DT"), "");

        	if( "" != sRegDt )
        	{
        		sRegDt = sRegDt.replace(/-/gi, "");
        		sRegDt = sRegDt.substr(0, 8);
        		sRegDt = take.parseDate(sRegDt, "yyyymmdd");
        		var sToday = take.parseDate(take.getTodayTime().date, "yyyymmdd");
        		var sTerm = parseInt(take.getDateTerm(sRegDt, sToday));

        		if( 5 >= sTerm )
        		{
        			//trace("sTerm->"+sTerm)
        			sImgUrl = "theme://images/img_icon_new.png";
        		}
        	}
        	return sImgUrl;
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
                case "TimeLineSearch" : 	// 타임라인 조회 콜백
                    //trace(this.dsTimelineList.saveXML());
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

        // 임시 조회
        this.Button00_onclick = function(obj,e)
        {
        	this.fnSearch("TimeLineSearch");
        };

        // 임시 저장
        this.Button02_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        // 임시 추가
        this.Button03_onclick = function(obj,e)
        {
        	this.fnAddRow("grdTimeLine");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TM010_onload,this);
            this.divSearch.form.edtTitle.addEventHandler("onkeyup",this.divSearch_Edit00_onkeyup,this);
            this.divDetail.form.grdTimeLine.addEventHandler("oncelldblclick",this.divDetail_grdTimeLine_oncelldblclick,this);
            this.lstTimeLine.addEventHandler("oncellclick",this.divDetail_lstTimeLine_oncellclick,this);
        };
        this.loadIncludeScript("TM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
