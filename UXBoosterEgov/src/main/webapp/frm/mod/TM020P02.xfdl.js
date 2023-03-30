(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TM020P02");
            this.set_titletext("타임라인등록");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTimeLineInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTimeLineReg","10","10","460","110",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staDateT","10","36","100","31",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("3");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_th01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","46","21","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("Static01","108","36",null,"31","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("staTitleT","10","staDateT:-1","100","31",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("5");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("Static06","108","Static01:-1",null,"31","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Edit("edtTitle","115","Static01:4",null,"21","17",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("1");
            obj.set_maxlength("33");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Combo("cboClass","115","41","110","21",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboGrade");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divTimeLineReg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTimeLineReg.form
            obj = new Layout("default","",0,0,this.divTimeLineReg.form,function(p){});
            this.divTimeLineReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,130,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTimeLineReg.form.cboClass","value","dsTimeLineInfo","TIMELINE_GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divTimeLineReg.form.edtTitle","value","dsTimeLineInfo","TIMELINE_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TM020P02.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    tm > TM020P02
        *  @FileName    TM020P02.xfdl
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
        this.fv_sUserCd = "U000000007"; // 임시 유저코드 사용

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.TM020P02_onload = function(obj, e)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Transation id";
            take.tranSelect(this,sTranId,"Namespace","sInDataset", "sOutDataset", "sParam", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "TimeLineInfoSave";
        	switch(sTranId) {
        		case "TimeLineInfoSave":	// 타임라인 마스터 정보 저장
        			var sProjectCd   = take.nvl(this.parent.sProjectCd, "");
        			var sMenuCd	     = take.nvl(this.parent.sMenuCd, "");

        			this.dsTimeLineInfo.setColumn(0, "PROJECT_CD", sProjectCd);	// 프로젝트코드
        			this.dsTimeLineInfo.setColumn(0, "MENU_CD", sMenuCd);		// 메뉴코드
        			this.dsTimeLineInfo.setColumn(0, "TIMELINE_STATUS", "01");	// 진행상태 - 최초 값 '작성중'
        			this.dsTimeLineInfo.setColumn(0, "TIMELINE_ATTACH", "");	// 완료보고서???
        			this.dsTimeLineInfo.setColumn(0, "REG_CD", this.fv_sUserCd);	// 사용자

        			trace(this.dsTimeLineInfo.saveXML())

        			//tranSave -> transaction 변경 2021.05.17 전영찬
        			//take.tranSave(this,"TimeLineInfoSave","TimelineManagement.timelineInfo","dsTimeLineInfo","","","fnCallback");
        			take.transaction
        			(
        				this,
        				"TimeLineInfoSave",
        				"SVC_LOC::tm/timelineInfoSave.do",
        				"dsTimeLineInfo=dsTimeLineInfo:U",
        				"",
        				"",
        				"fnCallback"
        			);
        			break;

        		case "ProjectInfoDelete":
        			// 타임라인 삭제
        // 			take.transaction
        // 			(
        // 				this,
        // 				sTranId,
        // 				"SVC_LOC::tm/timelineInfoSave.do",
        // 				"dsTimeLineInfo=dsTimeLineInfo:U",
        // 				"",
        // 				"",
        // 				"fnCallback"
        // 			);
        			break;
        	}
        }


        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // divTimeLineReg_btnDel_onclick : 삭제 버튼 클릭
        this.divTimeLineReg_btnDel_onclick = function(obj,e)
        {

        };

        // divTimeLineReg_btnDel_onclick : 저장 버튼 클릭
        this.divTimeLineReg_btnSave_onclick = function(obj,e)
        {
        	this.fnSave("TimeLineInfoSave");
        };

        // divTimeLineReg_edtTitle_onkeyup : Edit 컴포넌트 Enter 값 처리
        this.divTimeLineReg_edtTitle_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.divTimeLineReg.form.btnSave.setFocus();
        	}
        };

        // divTimeLineReg_cboClass_onkeyup : Combo 컴포넌트 Enter 값 처리
        this.divTimeLineReg_cboClass_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.divTimeLineReg.form.edtTitle.setFocus();
        	}
        };

        // btnCancel_onclick : X 버튼 클릭 __ 팝업 창 닫기
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
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
        	this.dsTimeLineInfo.addRow();
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var arrGroupCodes = ["00016"];
        	var arrOutDs      = ["dsCboGrade"];
        	var arrHeaderType = [""];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        	function(sId, nErrCd, sErrMsg)
        	{
        		if (this.dsCboGrade.rowcount > 0){
        			this.divTimeLineReg.form.cboClass.set_index(0);
        		}
        	});
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
                case "TimeLineInfoSave" :   // 마스터 저장 콜백
                    this.close();
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
            this.addEventHandler("onload",this.TM020P02_onload,this);
            this.divTimeLineReg.form.btnSave.addEventHandler("onclick",this.divTimeLineReg_btnSave_onclick,this);
            this.divTimeLineReg.form.edtTitle.addEventHandler("onkeyup",this.divTimeLineReg_edtTitle_onkeyup,this);
            this.divTimeLineReg.form.cboClass.addEventHandler("onkeyup",this.divTimeLineReg_cboClass_onkeyup,this);
        };
        this.loadIncludeScript("TM020P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
