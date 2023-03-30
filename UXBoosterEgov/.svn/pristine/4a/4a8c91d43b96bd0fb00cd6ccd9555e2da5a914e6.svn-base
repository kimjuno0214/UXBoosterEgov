(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM090P01");
            this.set_titletext("대시보드_대시보드관리_프로그램선택팝업");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProgramCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","46",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staProgramNm","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로그램명/ID");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgramNm","staProgramNm:10","10",null,"21","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","43.75%","89","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","119",null,null,"0","63",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","20","10",null,"21","20",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("프로그램 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","20","Static24:5",null,null,"20","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsProgramCd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"143\"/><Column size=\"143\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"프로그램코드\"/><Cell col=\"1\" text=\"프로그램명\"/><Cell col=\"2\" text=\"프로그램ID\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:NAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROGRAM_ID\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnProgramSearch",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_search03");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","99",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","0","41",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("H5");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","407",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"divDetail:20","57","23","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend00",null,"divDetail:20","57","23","btnCancle:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staProgramNm.set_taborder("0");
                p.staProgramNm.set_text("프로그램명/ID");
                p.staProgramNm.set_cssclass("sta_WF_textR");
                p.staProgramNm.move("10","10","80","21",null,null);

                p.edtProgramNm.set_taborder("1");
                p.edtProgramNm.move("staProgramNm:10","10",null,"21","7",null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("default0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static24.set_taborder("1");
                p.Static24.set_text("프로그램 목록");
                p.Static24.set_cssclass("sta_WF_title02");
                p.Static24.move("20","10",null,"21","20",null);

                p.grdList.set_taborder("0");
                p.grdList.set_autofittype("col");
                p.grdList.set_binddataset("dsProgramCd");
                p.grdList.move("20","Static24:5",null,null,"20","0");
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static24.set_taborder("0");
                p.Static24.set_text("검색 정보");
                p.Static24.set_cssclass("sta_WF_title02");
                p.Static24.move("10","10",null,"20","10",null);

                p.grdList.set_taborder("1");
                p.grdList.set_autofittype("col");
                p.grdList.set_oncelldblclick("divSearch_grdList_oncelldblclick");
                p.grdList.set_binddataset("dsProgramCd");
                p.grdList.move("10","79",null,"350","10",null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",480,470,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("대시보드_대시보드관리_프로그램선택팝업");
                p.set_background("#ffffff");

                p.divSearch.set_taborder("1");
                p.divSearch.set_cssclass("div_WF_searchBox01");
                p.divSearch.move("20","46",null,"43","20",null);

                p.btnShowHide.set_taborder("2");
                p.btnShowHide.set_cssclass("btn_WF_fold01");
                p.btnShowHide.move("43.75%","89","60","10",null,null);

                p.divDetail.set_taborder("0");
                p.divDetail.set_text("");
                p.divDetail.move("0","119",null,null,"0","63");

                p.btnProgramSearch.set_taborder("3");
                p.btnProgramSearch.set_cssclass("btn_WF_search03");
                p.btnProgramSearch.set_text("조회");
                p.btnProgramSearch.move(null,"20","46","21","20",null);

                p.Static01_00.set_taborder("4");
                p.Static01_00.set_text("H20");
                p.Static01_00.set_background("#fd9da0");
                p.Static01_00.set_opacity("0.5");
                p.Static01_00.set_textAlign("center");
                p.Static01_00.set_visible("false");
                p.Static01_00.move("0","0",null,"20","0",null);

                p.Static01_00_00.set_taborder("5");
                p.Static01_00_00.set_text("H20");
                p.Static01_00_00.set_background("#fd9da0");
                p.Static01_00_00.set_opacity("0.5");
                p.Static01_00_00.set_textAlign("center");
                p.Static01_00_00.set_visible("false");
                p.Static01_00_00.move("0","99",null,"20","0",null);

                p.Static01_00_01.set_taborder("6");
                p.Static01_00_01.set_text("H5");
                p.Static01_00_01.set_background("#fd9da0");
                p.Static01_00_01.set_opacity("0.5");
                p.Static01_00_01.set_textAlign("center");
                p.Static01_00_01.set_visible("false");
                p.Static01_00_01.move("0","41",null,"5","0",null);

                p.Static01_01.set_taborder("7");
                p.Static01_01.set_text("H20");
                p.Static01_01.set_background("#fd9da0");
                p.Static01_01.set_opacity("0.5");
                p.Static01_01.set_textAlign("center");
                p.Static01_01.set_visible("false");
                p.Static01_01.move("0","407",null,"20","0",null);

                p.Static01.set_taborder("8");
                p.Static01.set_text("H20");
                p.Static01.set_background("#fd9da0");
                p.Static01.set_opacity("0.5");
                p.Static01.set_textAlign("center");
                p.Static01.set_visible("false");
                p.Static01.move("0",null,null,"20","0","0");

                p.btnCancle.set_taborder("10");
                p.btnCancle.set_cssclass("btn_WF_cancel01");
                p.btnCancle.set_text("닫기");
                p.btnCancle.move(null,"divDetail:20","57","23","20",null);

                p.btnSend00.set_taborder("9");
                p.btnSend00.set_cssclass("btn_WF_check01");
                p.btnSend00.set_text("확인");
                p.btnSend00.move(null,"divDetail:20","57","23","btnCancle:3",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",380,470,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divDetail.set_taborder("37");
                p.divDetail.set_cssclass("dvi_WF_tabBox01");
                p.divDetail.set_text("");
                p.divDetail.move("0","0",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtProgramNm","value","dsSearch","USER_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM090P01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    PM > PM090P01
        *  @FileName    PM090P01.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.09.07
        *  @Version     1.0
        *  @Desction    프로젝트메뉴관리 - 프로그램선택 팝업
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.09.07       홍길동             최초 생성
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
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInIt();
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
            if (take.nvl(sTranId, "")=="") sTranId = "programInfoCode";

            // 프로그램 코드 조회
        	take.tranSelect
        	(
        		this,
        		"programInfoCode",
        		"ProjectManagement.programInfoCode",
        		"",
        		"dsProgramCd",
        		"",
        		function(sId, nErrCd, sErrMsg)
        		{

        		}
        	)
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * divSearch_btnProgramSearch_onclick : 메뉴 검색 버튼 클릭_fileter like
        */
        this.divSearch_btnProgramSearch_onclick = function(obj,e)
        {
        	var objDs = this.dsProgramCd;
        	var sStr  = take.nvl(this.divSearch.form.edtProgramNm.value, "");

        	if (sStr == ""){
        		objDs.set_filterstr("");
        	}else {
        		sStr = "String(NAME).indexOf('" + sStr + "') >= 0 || String(PROGRAM_ID).indexOf('" + sStr + "') >= 0";
        		objDs.filter(sStr);
        	}
        };

        /**
        * divSearch_edtProgramNm_onkeyup : 검색조건 Edit 엔터 값
        */
        this.divSearch_edtProgramNm_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.btnProgramSearch.click();
        	}
        };

        /**
        * divSearch_grdList_oncelldblclick : 그리드 데이터라인 더블클릭 이벤트
        */
        this.divSearch_grdList_oncelldblclick = function(obj,e)
        {
        	this.fnSendData();
        };

        /**
        * divSearch_btnSend_onclick : 확인 버튼 클릭
        */
        this.divSearch_btnSend_onclick = function(obj,e)
        {
        	this.fnSendData();
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInIt : 초기화 함수
         * @example this.fnInIt();
         */
        this.fnInIt = function()
        {
        	// 공통 코드조회 함수 호출
        	this.fnSearch();
        }

        /**
         * fnSendData : 그리드의 선택된 데이터 값 넘기기
         * @param  {String} N/A
         * @example this.fnSendData();
         */
        this.fnSendData = function()
        {
        	var objDsProgram = this.dsProgramCd;
        	var nRow		 = objDsProgram.rowposition;

        	var sRtn 	 = objDsProgram.getColumn(nRow, "CODE");
        		sRtn	+= ','+ objDsProgram.getColumn(nRow, "NAME");
        		sRtn	+= ','+ objDsProgram.getColumn(nRow, "PROGRAM_ID");
        	this.close(sRtn);
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallBack : transaction callback
        * @param  : svcId   - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : errCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : errMsg   - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallBack = function(sId, nErrCd, sErrMsg)
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
                case "Transation id 01" : //조회 콜백
                    //Script
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
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtProgramNm.addEventHandler("onkeyup",this.divSearch_edtProgramNm_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.grdList.addEventHandler("oncelldblclick",this.divSearch_grdList_oncelldblclick,this);
            this.btnProgramSearch.addEventHandler("onclick",this.divSearch_btnProgramSearch_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnSend00.addEventHandler("onclick",this.divSearch_btnSend_onclick,this);
        };
        this.loadIncludeScript("PM090P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
