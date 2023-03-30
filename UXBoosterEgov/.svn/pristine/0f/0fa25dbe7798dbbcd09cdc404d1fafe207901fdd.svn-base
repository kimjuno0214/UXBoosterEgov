(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PU010P01");
            this.set_titletext("푸시알림 작성");
            this.set_cssclass("fm_work");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,407);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_USER\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPushInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOKEN_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTimeHour", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">00</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">07</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">08</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">09</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">17</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">18</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">19</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">20</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">22</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">23</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">99</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTimeMin", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">00</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"NAME\">20</Col><Col id=\"CODE\">20</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">25</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">30</Col></Row><Row><Col id=\"CODE\">35</Col><Col id=\"NAME\">35</Col></Row><Row><Col id=\"CODE\">40</Col><Col id=\"NAME\">40</Col></Row><Row><Col id=\"CODE\">45</Col><Col id=\"NAME\">45</Col></Row><Row><Col id=\"CODE\">50</Col><Col id=\"NAME\">50</Col></Row><Row><Col id=\"CODE\">55</Col><Col id=\"NAME\">55</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"NAME\">99</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MANAGER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","127",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle","17","132",null,"20","19",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("제목을 입력해 주세요.");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","157",null,"240","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","790",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
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

            obj = new Div("divPopOption","10","35",null,"41","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_replyBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staPopTarget","365","8","74","25",null,null,null,null,null,null,this.divPopOption.form);
            obj.set_taborder("0");
            obj.set_text("요청 시간");
            obj.set_textAlign("right");
            this.divPopOption.addChild(obj.name, obj);

            obj = new Static("Static01","9","9","100","22",null,null,null,null,null,null,this.divPopOption.form);
            obj.set_taborder("5");
            obj.set_text("프로젝트");
            obj.set_textAlign("right");
            this.divPopOption.addChild(obj.name, obj);

            obj = new Combo("cboProject","Static01:10","8","207","25",null,null,null,null,null,null,this.divPopOption.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsProjectInfo");
            obj.set_codecolumn("PROJECT_CD");
            obj.set_datacolumn("PROJECT_NM");
            this.divPopOption.addChild(obj.name, obj);

            obj = new Calendar("calPushStartDate","520","7","103","25",null,null,null,null,null,null,this.divPopOption.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divPopOption.addChild(obj.name, obj);

            obj = new Combo("cboPushHour","628","7","60","25",null,null,null,null,null,null,this.divPopOption.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTimeHour");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divPopOption.addChild(obj.name, obj);

            obj = new Static("Static20_00","688","7","25","25",null,null,null,null,null,null,this.divPopOption.form);
            obj.set_taborder("6");
            obj.set_text(":");
            obj.set_textAlign("center");
            this.divPopOption.addChild(obj.name, obj);

            obj = new Combo("cboPushMin","713","7","60","25",null,null,null,null,null,null,this.divPopOption.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTimeMin");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divPopOption.addChild(obj.name, obj);

            obj = new CheckBox("chkSendNow","455","7","55","25",null,null,null,null,null,null,this.divPopOption.form);
            obj.set_taborder("7");
            obj.set_text("즉시");
            this.divPopOption.addChild(obj.name, obj);

            obj = new Button("btnSave","690","10","101","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전송");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","117",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"10","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divPopOption00","10","76",null,"41","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_replyBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staPopTarget","365","8","74","25",null,null,null,null,null,null,this.divPopOption00.form);
            obj.set_taborder("0");
            obj.set_text("사용자");
            obj.set_textAlign("right");
            this.divPopOption00.addChild(obj.name, obj);

            obj = new Edit("edtPopTarget","506","8","141","25",null,null,null,null,null,null,this.divPopOption00.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.divPopOption00.addChild(obj.name, obj);

            obj = new Button("btnSchPopTarget","654","8","53","25",null,null,null,null,null,null,this.divPopOption00.form);
            obj.set_taborder("2");
            obj.set_text("찾기");
            obj.set_cssclass("btn_WF_search01");
            obj.set_enable("false");
            this.divPopOption00.addChild(obj.name, obj);

            obj = new Static("Static01","9","9","100","22",null,null,null,null,null,null,this.divPopOption00.form);
            obj.set_taborder("3");
            obj.set_text("권한");
            obj.set_textAlign("right");
            this.divPopOption00.addChild(obj.name, obj);

            obj = new Combo("cboProject","119","8","207","25",null,null,null,null,null,null,this.divPopOption00.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.divPopOption00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","449","8","57","25",null,null,null,null,null,null,this.divPopOption00.form);
            obj.set_taborder("4");
            obj.set_text("모두");
            obj.set_value("true");
            obj.set_enable("false");
            this.divPopOption00.addChild(obj.name, obj);

            obj = new Edit("edtBody","17","162",null,"228","19",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("내용을 입력해 주세요.");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","-9",null,null,"10","9","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","10","10","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("푸쉬알림 작성");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopOption.form
            obj = new Layout("default","",0,0,this.divPopOption.form,function(p){});
            this.divPopOption.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopOption00.form
            obj = new Layout("default","",0,0,this.divPopOption00.form,function(p){});
            this.divPopOption00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,407,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtTitle","value","dsNotice","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtBody","value","dsNotice","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopOption.form.calPushStartDate","value","dsNotice","POPUP_START_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PU010P01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = take.nvl(this.parent.sMenuCd, "");
        this.fv_nNowMin = "";
        this.fv_nNowHour = "";
        this.fv_nToday = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.form_onload = function(obj, e)
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
        this.fnInit = function(){
        	//검색조건

        	var objForm = this.divPopOption.form;
        	this.dsProjectInfo.clearData();
        	take.tranSelect
        	(
        		this,
        		"ProjectInfo",
        		"ProjectManagement.projectInfoList",
        		"",
        		"dsProjectInfo",
        		"",
        		function ()
        		{
        			objForm.cboProject.set_index(7);
        		}
        	);

        	this.fnGetDBnowTime();

        	objForm.chkSendNow.set_value(true);
        	objForm.calPushStartDate.set_enable(false);
        	objForm.cboPushHour.set_enable(false);
        	objForm.cboPushMin.set_enable(false);
        }

        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Save";
        	var sProjectCd = this.divPopOption.form.cboProject.value;
        	var objPushDs = this.dsPushInfo;
        	var objSearchDs = this.dsSearch;
        	objPushDs.clearData();
        	objPushDs.addRow();
        	objSearchDs.clearData();
        	objSearchDs.addRow();


        	objPushDs.setColumn(0, "PROJECT_CD"	, sProjectCd);
        	objPushDs.setColumn(0, "MENU_CD"		, "");
        	objPushDs.setColumn(0, "TOKEN_VAL"	, "1");

        	objSearchDs.setColumn(0, "PROJECT_CD", sProjectCd);
        	objSearchDs.setColumn(0, "PUSH_TIME", "");
        	objSearchDs.setColumn(0, "PUSH_AUTH", "");
        	objSearchDs.setColumn(0, "PUSH_USER", "");
        	objSearchDs.setColumn(0, "BOARD_SEQ", "");
        	objSearchDs.setColumn(0, "BOARD_TITLE", this.edtTitle.value);
        	objSearchDs.setColumn(0, "BOARD_TXT", this.edtBody.value);

        	take.transaction(this, "Save", "SVC_LOC::push/pushSend.do", "dsSearch=dsSearch dsPushInfo=dsPushInfo:U", "", "", "fnCallback");
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.btnPrev_onclick = function(obj,e)
        {
        	this.close();
        };
        this.divPopOption_chkSendNow_onchanged = function(obj,e)
        {
        	var objForm = this.divPopOption.form;
        	this.fnGetDBnowTime();

        	if(obj.value){
        		objForm.calPushStartDate.set_enable(false);
        		objForm.cboPushHour.set_enable(false);
        		objForm.cboPushMin.set_enable(false);
        	}else{

        		objForm.calPushStartDate.set_enable(true);
        		objForm.cboPushHour.set_enable(true);
        		objForm.cboPushMin.set_enable(true);
        	}
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	var bolConfirm = take.confirm(this, "info", "알림을 전송하시겠습니까?", "");
        	if(bolConfirm) this.fnSave("Save");
        };
        this.fnGetDBnowTime = function ()
        {
        	var objDiv = this.divPopOption.form;

        	this.fv_nToday = take.getTodayTime().date;
        	this.fv_nNowHour = take.getTodayTime().hh;
        	this.fv_nNowMin  = take.getTodayTime().mm;
        	var nTempNowMin  = this.fv_nNowMin;
        	this.fv_nNowMin	 = nTempNowMin.lpad(2,"0");

        	if(this.fv_nNowMin > 54) this.fv_nNowMin = 50;
        	nTempNowMin = Math.round(nTempNowMin/10)*10;
        	nTempNowMin = nTempNowMin.toString();
        	this.fv_nNowMin = nTempNowMin.lpad(2,"0");

        	objDiv.calPushStartDate.set_value(this.fv_nToday);

        	var nHourRow 	= this.dsTimeHour.findRowExpr("CODE=='" + this.fv_nNowHour +"'");
        	var nMinRow 	= this.dsTimeMin.findRowExpr("CODE=='" + this.fv_nNowMin +"'");
        	var nHourCode 	= this.dsTimeHour.getColumn(nHourRow, "CODE");
        	var nMinCode 	= this.dsTimeMin.getColumn(nMinRow, "CODE");

        	objDiv.cboPushHour.set_value(nHourCode);
        	objDiv.cboPushMin.set_value(nMinCode);

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
                case "Save" : //저장 콜백
                    //Script
        			take.alert(this, "", "전송이 완료되었습니다.");
        			this.close();
                    break;

                case "Search" :  //조회 콜백
                    break;
                default :
                    break;
            }
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPopOption.form.cboPushHour.addEventHandler("onitemchanged",this.cboStartHour_onitemchanged,this);
            this.divPopOption.form.chkSendNow.addEventHandler("onchanged",this.divPopOption_chkSendNow_onchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divPopOption00.form.btnSchPopTarget.addEventHandler("onclick",this.divPopOption_btnSchPopTarget_onclick,this);
            this.dsProjectInfo.addEventHandler("canrowposchange",this.dsProjectInfo_canrowposchange,this);
        };
        this.loadIncludeScript("PU010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
