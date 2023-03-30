(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MT010P01");
            this.set_titletext("회의록 작성");
            this.set_cssclass("fm_work");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMeeting", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_REQUIRED_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MEETING_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTimeHour", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">시간</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">07</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">08</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">09</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">17</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">18</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">19</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">20</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTimeMin", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">분</Col></Row><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">00</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"NAME\">20</Col><Col id=\"CODE\">20</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">25</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">30</Col></Row><Row><Col id=\"CODE\">35</Col><Col id=\"NAME\">35</Col></Row><Row><Col id=\"CODE\">40</Col><Col id=\"NAME\">40</Col></Row><Row><Col id=\"CODE\">45</Col><Col id=\"NAME\">45</Col></Row><Row><Col id=\"CODE\">50</Col><Col id=\"NAME\">50</Col></Row><Row><Col id=\"CODE\">55</Col><Col id=\"NAME\">55</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAttendee", this);
            obj._setContents("<ColumnInfo><Column id=\"NUM\" type=\"INT\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static22","0",null,null,"10","0","790",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staDateT","10","40","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staDate","staDateT:-1","40",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staAtt02","129","staDate:-1",null,"61","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","129","staAtt02:-1",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","129","Static07:-1",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev",null,"10","53","25","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","53","25","btnPrev:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("staAtt01","10","staDateT:-1","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("참석자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staPlaceT","390","40","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("장소");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPlace","staPlaceT:6","45",null,"21","16",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleT","10","staAtt01:-1","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staTimeT","600","130",null,"31","67",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("소요시간");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle","136","staAtt02:4",null,"21","staTimeT:6",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_displaynulltext("제목을 입력해 주세요.");
            this.addChild(obj.name, obj);

            obj = new Static("staMemoT","10","staTitleT:-1",null,null,"670","10",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("회의내용");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Div("divAttendee","staAtt01:6","staDate:-1",null,"61","16",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_formscrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Button("btnAttendee","0","5","21","21",null,null,null,null,null,null,this.divAttendee.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_search02");
            this.divAttendee.addChild(obj.name, obj);

            obj = new Static("staAttend0","btnAttendee:3","5","60","21",null,null,null,null,null,null,this.divAttendee.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_th01L");
            this.divAttendee.addChild(obj.name, obj);

            obj = new Calendar("calStartDate","staDateT:6","45","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Combo("cboStartHour","calStartDate:6","45","57","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsTimeHour");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","cboStartHour:-1","45","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cboStartMin","Static20:-1","45","57","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsTimeMin");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTime",null,"135","45","20","16",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_format("##:##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("btnEditer","10","10","70","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("내용확대");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Div("divWb","136","Static07:10",null,null,"16","20",null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","0","0",null,null,"0","0",null,null,null,null,this.divWb.form);
            obj.set_taborder("0");
            this.divWb.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAttendee.form
            obj = new Layout("default","",0,0,this.divAttendee.form,function(p){});
            this.divAttendee.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWb.form
            obj = new Layout("default","",0,0,this.divWb.form,function(p){});
            this.divWb.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,510,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MT010P01.xfdl", function() {
        /**
        *  회의록 작성
        *
        *  @MenuPath    회의록 > 회의록 작성
        *  @FileName    MT010P01.xfdl
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
        this.fv_sMenuCd         = take.nvl(this.parent.sMenuCd, "");
        this.fv_sBoardSeq       = take.nvl(this.parent.sBoardSeq, "");
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_sUserCd         = "";
        this.fv_sUserNm         = "";

        this.fv_nLastAtt = 0;       // 동적생성된 참석자 수
        this.fv_nAttRow = 1;        // 생성된 라인(기본 1)
        this.fv_nLastSum = 0;       // (생성된 마지막 위치 + 생성된 마지막 너비) 합
        this.fv_sAttRowChg = "N";   // 라인 변경 관련

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.MT010P01_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //에디터
        		var sBaseUrl = take.getSvcUrl();
        		this.divWb.form.wbWebEditor.set_url(sBaseUrl + "editor/SummerNote/summer.html");
        		this.setTimer(1,100);
           }
        }

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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	var sContents   = this.divWb.form.wbWebEditor.getProperty("window").callMethod("getContents", 1);
        	var sTitle      = this.edtTitle.value;
        	var sStartDate  = take.nvl(this.calStartDate.value, "");
            var sStartHour  = take.nvl(this.cboStartHour.value, "");
            var sStartMin   = take.nvl(this.cboStartMin.value, "");
            var sRequired   = take.nvl(this.mskTime.value, "");
            var sPlace      = take.nvl(this.edtPlace.text, "");
            var sTitle      = take.nvl(this.edtTitle.text, "");
            var objDsM      = this.dsMeeting;

        	objDsM.clearData();
            objDsM.addRow();

        	objDsM.setColumn(0, "PROJECT_CD",     this.fv_sProjectCd);
        	objDsM.setColumn(0, "MENU_CD",        this.opener.ProgId);
            objDsM.setColumn(0, "MEETING_START_DT",        sStartDate);
            objDsM.setColumn(0, "MEETING_START_TIME",        (sStartHour + ":" + sStartMin));
            objDsM.setColumn(0, "MEETING_PLACE",   sPlace);
        	objDsM.setColumn(0, "MEETING_TITLE",   sTitle);
        	objDsM.setColumn(0, "MEETING_TXT",     sContents);
            objDsM.setColumn(0, "MEETING_REQUIRED_TIME",   sRequired);


        	//take.transaction(this, sTranId, "SVC_LOC::mm/MeetingInfoSave.do", "dsMeeting=dsMeeting:U dsAttendee=dsAttendee:U", "", sParam, "fnCallback");
            take.transaction(this, sTranId, "SVC_LOC::mt/MeetingInfoSave.do", "dsMeeting=dsMeeting:U dsAttendee=dsAttendee:U", "", "", "fnCallback");
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.wbWebEditor_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("summer.html") != -1)
        	{
        		this.fv_bWebOnload = true;
        	}
        };

        this.AT010P01_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);
                    this.divWb.form.wbWebEditor.getProperty("window").callMethod("fnEditorReady", (this.divWb.form.wbWebEditor.getOffsetHeight()-65));

                    this.fnInit();

        		}
        	}
        };

        // 저장버튼
        this.btnSave_onclick = function(obj,e)
        {
        	if(this.fnCheckForm()) {
                // 본인 추가
                //var sUserCd         = this.fv_objGdsUserInfo.getColumn(0, "USER_CD");
                //var sUserNm         = this.fv_objGdsUserInfo.getColumn(0, "USER_NM");
                var objDs = this.dsAttendee;

                var nAddRow = objDs.addRow();
                objDs.setColumn(nAddRow, "USER_CD", this.fv_sUserCd);
                objDs.setColumn(nAddRow, "USER_NM", this.fv_sUserNm);

               this.fnSave("Save");
            }
        };

        //닫기 버튼
        this.btnPrev_onclick = function(obj,e)
        {
        	this.close();
        };

        //팝업 닫기
        this.fnGoList = function()
        {
        	this.opener.fnSearch();
        	this.close();
        }

        //참석자 찾기 버튼
        this.btnAttendee_onclick = function(obj,e)
        {
        	take.openPopup(this, "MT010P03", "biz::thr/MT010P03.xfdl", {sTitle:"회원 검색"}, "showtitlebar=true layered=true", "fnPopCallback", false);
        };

        //에디터 확장 축소 조절
        this.btnEditer_onclick = function(obj,e)
        {
        	var objDiv = this.divWb;
            var nDivLeft = objDiv.left;
            var nLeft = 0;
            var nTop = 0;
            var nRight = 0;
            var nBottom = 0;

            if(nDivLeft == 10) {
                trace("40일때");
                nLeft = 136;
                nTop = "Static07:10px";
                nRight = 16;
                nBottom = 20;
                this.btnEditer.set_text("내용확대");
            } else {
                trace("기존일때");
                nLeft = 10;
                nTop = 40;
                nRight = 10;
                nBottom = 10;
                this.btnEditer.set_text("내용축소");
            }

            objDiv.set_left(nLeft);
            objDiv.set_top(nTop);
            objDiv.set_right(nRight);
            objDiv.set_bottom(nBottom);
        };

        this.MaskEdit00_ontextchange = function(obj,  e)
        {
        	//trace(e.posttext);
        	var h1 = nexacro.toNumber(e.posttext.substr(0,2));
        	var m1 = nexacro.toNumber(e.posttext.substr(3,2));

        	// 최대 24 시
        	if(h1 > 24)
        	{
        		return false;
        	}
        	//최대 59분
        	if(m1 > 59)
        	{
        		return false;
        	}
        }
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){
            var sDate = take.getTodayTime().date;

            this.calStartDate.set_value(sDate);
            this.cboStartHour.set_index(0);
            this.cboStartMin.set_index(0);

        	//TO-BE 신규,수정 분기 필요.
            this.fnFormSet();
        }

        /**
         * fnFormSet : 화면 셋팅 함수
         * @return {N/A}    N/A
         * @example this.fnFormSet();
         */
        this.fnFormSet = function(){
        	this.fv_sUserCd = this.fv_objGdsUserInfo.getColumn(0, "USER_CD");
            this.fv_sUserNm = this.fv_objGdsUserInfo.getColumn(0, "USER_NM");

            var objStaAtt   = this.divAttendee.form.staAttend0;

            objStaAtt.set_text(this.fv_sUserNm);
            objStaAtt.set_fittocontents("width");

            this.fv_nLastSum = objStaAtt.getOffsetLeft() + objStaAtt.getOffsetWidth();          //합
        }

        this.fnMakeAtt = function()
        {
            var objStaAtt     = null;
        	var sStaAttId     = "staAttend";
        	//var nStaAttLeft   = 107;
        	var nStaAttTop    = 5;
        	var nStaAttWidth  = 30;
        	var nStaAttHeight = 21;
        	var nStaAttRight  = null;

            //var nDivWidth = 648;    // Div Width Max
            var nDivWidth = this.divAttendee.getOffsetWidth();    // Div Width Max
        	var n3  = 3;            // 동적 Top 간격
            var n12 = 12;           // 한글(1자) 크기
            var n16 = 16;           // 기본 static 너비
        	var s3px = ":3px";      // Left 3px
            var sNewLeft = "";      // 동적 Left 설정
            var nNewTop = 0;        // 동적 Top 설정
            var nNewWidth = 0;      // 비교 너비
            var sName = "";         // 참석자 이름
            var sNewStaId = "";
            var nLastPos    = 0;    // 생성된 마지막 위치
            var nLastWidth  = 0;    // 생성된 마지막 너비

            for(i=this.fv_nLastAtt; i<this.dsAttendee.rowcount; i++) {
                sName = this.dsAttendee.getColumn(i,"USER_NM");     // 참석자명

                nNewWidth = this.fv_nLastSum + (n3 + n16 + (n12 * sName.length));   // 동적생성 위치 비례 너비 합

                if(nDivWidth < nNewWidth){  // 부모 Div 크기 비례 동적 생성 높이 조절 위함.
                    this.fv_nAttRow += 1;
                    this.fv_sAttRowChg = "Y";
                }

                // Top 설정
                if(this.fv_nAttRow > 1){
                    // 변경된 top
                    nNewTop = nStaAttTop + ((this.fv_nAttRow-1) * (n3+ nStaAttHeight));  // 기본높이 + Static고정높이 + 로우 간격
                } else {
                    //기본 top
                    nNewTop = nStaAttTop;
                }

                // Left 설정
                if (this.fv_sAttRowChg == "N") {
                    // 일반 Left 정의
                    sNewLeft = sStaAttId + this.fv_nLastAtt + s3px;
                } else {
                    // 로우 변경 신규 Left 설정
                    sNewLeft = 0;
                    this.fv_sAttRowChg = "N";  //원복
                }

                this.fv_nLastAtt += 1;  //생성값 증가

                sNewStaId = sStaAttId + this.fv_nLastAtt;     // +1증가 Sta Id 지정.

                objStaAtt     = new Static();

                // 설정
                objStaAtt.init(sNewStaId, sNewLeft, nNewTop, nStaAttWidth, nStaAttHeight, nStaAttRight);

                // 생성
                this.divAttendee.form.addChild(sNewStaId, objStaAtt);

                // 컴포넌트 속성 set
                objStaAtt.set_cssclass("sta_WF_th01L");
                objStaAtt.set_text(sName);
                objStaAtt.set_fittocontents("width");
                objStaAtt.addEventHandler("onclick", this.divAttendee_Static_onclick, this);
                objStaAtt.show();

                nLastPos            = this.divAttendee.form.components[sNewStaId].getOffsetLeft();      //동적생성 Left
                nLastWidth          = this.divAttendee.form.components[sNewStaId].getOffsetWidth();     //동적생성 Width
                this.fv_nLastSum    = nLastPos + nLastWidth;                                            //합
            }

            this.divAttendee.form.resetScroll();
        }

        // divAttendee_Static_onclick : static 클릭시 삭제
        this.divAttendee_Static_onclick = function(obj,e)
        {
        	var sObjId  = obj.id;

            if(sObjId == "staAttend0") {
                alert("작성자 자신은 삭제할수 없습니다.");
                return;
            }

            var sStaId  = "staAttend";
        	var nRow    = parseInt(sObjId.substr(9));
            var objDivAtt = this.divAttendee.form;

            for(var i=1; i<=this.fv_nLastAtt; i++) {
                objDivAtt.components[sStaId+i].destroy();     // 생성된 Static 삭제
            }

            this.dsAttendee.deleteRow((nRow-1));            //해당건 DB 삭제

            this.fv_nLastAtt = 0;       // 동적생성된 참석자 수
            this.fv_nAttRow = 1;        // 생성된 라인(기본 1)
            this.fv_nLastSum = 0;       // (생성된 마지막 위치 + 생성된 마지막 너비) 합
            this.fv_sAttRowChg = "N";   // 라인 변경 관련

            this.fnMakeAtt();           // 재 설정
        };


        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var sStartDate  = take.nvl(this.calStartDate.value, "");
            var sStartHour  = take.nvl(this.cboStartHour.value, "");
            var sStartMin   = take.nvl(this.cboStartMin.value, "");
            var sPlace      = take.nvl(this.edtPlace.text, "");
            var sTitle      = take.nvl(this.edtTitle.text, "");

            if(sStartDate == ""){
                alert("회의 일자를 선택해주세요.");
                return false;
            }

            if(sStartHour == ""){
                alert("회의 시간을 선택해주세요.");
                return false;
            }

            if(sStartMin == ""){
                alert("회의 시간(분)을 선택해주세요.");
                return false;
            }

            if(sPlace == ""){
                alert("회의 장소를 작성해주세요.");
                this.edtPlace.setFocus();
                return false;
            }

            if(sTitle == ""){
                alert("회의 제목을 작성해주세요.");
                this.edtTitle.setFocus();
                return false;
            }

            return true;
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
                case "Save" : //저장 콜백
        			take.alert(this, "", "저장이 완료되었습니다.");
        			this.fnGoList();
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
                case "MT010P03" : // 주소록추가 콜백
                    var arrRtn = sRtn.split(',');
                    var nAddRow = 0;                        // AddRow
                    var objDs = this.dsAttendee;

                    for(var i=0; i<arrRtn.length; i+=2){
                        if(arrRtn[i] != this.fv_sUserCd && objDs.findRow("USER_CD", arrRtn[i]) == -1) {     // 임시 -> 세션 코드
                            nAddRow = objDs.addRow();
                            objDs.setColumn(nAddRow, "USER_CD", arrRtn[i]);
                            objDs.setColumn(nAddRow, "USER_NM", arrRtn[i+1]);
                        }
                    }

                    this.fnMakeAtt();
                    break;
                default :
                    break;
            }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MT010P01_onload,this);
            this.addEventHandler("ontimer",this.AT010P01_ontimer,this);
            this.btnPrev.addEventHandler("onclick",this.btnPrev_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divAttendee.form.btnAttendee.addEventHandler("onclick",this.btnAttendee_onclick,this);
            this.calStartDate.addEventHandler("onchanged",this.calStartDate_onchanged,this);
            this.cboStartHour.addEventHandler("onitemchanged",this.cboStartHour_onitemchanged,this);
            this.btnEditer.addEventHandler("onclick",this.btnEditer_onclick,this);
            this.divWb.form.wbWebEditor.addEventHandler("onloadcompleted",this.wbWebEditor_onloadcompleted,this);
        };
        this.loadIncludeScript("MT010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
