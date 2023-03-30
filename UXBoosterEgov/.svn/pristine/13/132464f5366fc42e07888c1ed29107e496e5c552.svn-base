(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UM030");
            this.set_titletext("프로젝트관리_사용자권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPhone", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"255\"/><Column id=\"HP_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"RMK\" type=\"STRING\" size=\"255\"/><Column id=\"USIM\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staRoleT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUser","staRoleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","355","11","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","11","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsSchUseYn");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDirector","1208","62","21","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_search02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","554","21","20",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdUserList","0","26",null,null,"Static27:0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사용자코드\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CD\" cssclass=\"cellC\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\" cssclass=\"cellC\"/><Cell col=\"3\" text=\"bind:USER_EMAIL\"/><Cell col=\"4\" text=\"bind:USER_MOBILE\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUserListT","0","0","450","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdUserPhoneList","574","26",null,"262","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsPhone");
            obj.getSetter("takegrid").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"251\"/><Column size=\"251\"/><Column size=\"251\"/><Column size=\"251\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사용자ID\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"사원명\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"단말기타입\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"휴대폰번호\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"비고\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" cssclass=\"cellC\"/><Cell col=\"1\" text=\"bind:USER_NM\"/><Cell col=\"2\" text=\"bind:HP_TYPE\"/><Cell col=\"3\" text=\"bind:HP_NO\"/><Cell col=\"4\" text=\"bind:RMK\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDelRow",null,"0","46","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_cancel02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
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
            obj = new BindItem("item0","divSearch.form.edtUser","value","dsSearch","USER_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UM030.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    sys > UM030
         *  @FileName    UM030.xfdl
         *  @Creator     김서현
         *  @CreateDate  2020.07.19
         *  @Version     1.0
         *  @Desction    사용자 > 모바일단말기관리
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2020.07.19      김서현             최초 생성
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;  		 				// 글로변 변수_프로젝트코드
        //this.oMenuInfo = null;
        this.fv_sUserCd = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/

        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.UM030_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInit();
           }
        };

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

        	if ( take.isDsModified(this.dsPhone)){
        		var ret = take.confirm(this, "question", "MS00000074");
        		//take.confirm(this, "question", "작성중인 데이터는 유지되지 않습니다.\r\n계속 진행하시겠습니까?");
        		if(!ret){
        			return;
        		}
        	}

            this.dsUser.clearData();
        	this.dsPhone.clearData();
        	this.dsSearch.setColumn(0, "USE_YN", this.divSearch.form.cboUseYn.value);

        	take.tranSelect
        	(
        		this,
        		sTranId,
        		"UserManagement.userInfoList",
        		"dsSearch",
        		"dsUser",
        		"",
        		"fnCallback"
        	)
        };

        //사용자 단말기정보 조회
        this.grdUserList_onselectchanged = function(obj,e)
        {
           var nRow = e.row;
           if(nRow == -1) return;
           this.fv_sUserCd = this.dsUser.getColumn(nRow, "USER_ID");
           this.dsPhone.clearData();
           take.tranSelect(this, "userPhoneList", "UserManagement.userPhoneList", "", "dsPhone", "USER_ID='"+this.fv_sUserCd+"'", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectUserSave";

        	if ( !take.isDsModified(this.dsPhone))
        	{
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        // 		take.transaction( this
        // 						, "Save"
        // 						, "SVC_LOC::um/userPhoneSave.do"
        // 						, "dsPhone=dsPhone:U"
        // 						, "" //dsMainTran=outDs
        // 						, ""
        // 						, "fnCallback"
        // 						);

        	take.transaction(this, "Delete", "SVC_LOC::um/userPhoneDelete.do", "dsPhone=dsPhone:U", "", "", "fnCallback");




        	//삭제된 행만 데이더셋 타입을
        /*	this.dsPhone.set_enableevent(false);
        	this.dsPhone.set_updatecontrol(false);

        	var arrChkRow = take.getChkRow(this.dsPhone, "CHK");

        	for(var i=0; i<arrChkRow.length; i++){
        		this.dsPhone.setRowType(arrChk[i], "U");
        	}
        	this.dsPhone.set_updatecontrol(true);
        	this.dsPhone.set_enableevent(true);

        	alert(this.dsPhone.saveXML());

        	take.transaction
        	(
        		this
        		, sTranId
        		, "SVC_LOC::um/userPhoneSave.do"
        		, "dsPhone=dsPhone:U"
        		, ""
        		, "USER_ID='" + this.dsPhone.getColumn(0, 'USER_ID') + "'"
        		, "fnCallback"
        	);*/

        // 	take.transaction
        // 	(
        // 		this
        // 		, sTranId
        // 		, "SVC_LOC::um/userSave.do"
        // 		, "dsPhone=dsPhone:U"
        // 		, ""
        // 		, "USER_ID='" + this.dsPhone.getColumn(0, 'USER_ID') + "'"
        // 		, "fnCallback"
        // 	);
        //
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.divSearch_edtUser_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch();
        	}
        };

        this.dsUser_canrowposchange = function(obj,e)
        {
        	if ( take.isDsModified(this.dsPhone)){
        		var ret = take.confirm(this, "question", "MS00000074");
        		if(!ret){
        			return false;
        		}
        	}
        	return true;
        };

        //행삭제
        this.divDetail_btnDelRow_onclick = function(obj,e)
        {
        	if( this.dsPhone.findRow("CHK","1") < 0 ) {
        		take.alert(this, "info", "체크된 항목이 없습니다.");
        		return;
        	}
        	this.divDetail.form.grdUserPhoneList.set_enableredraw(false);
        	for( var i=(this.dsPhone.rowcount-1); i>-1 ; i-- ) {
        		if( this.dsPhone.getColumn(i,"CHK")=="1" ) {
        			this.dsPhone.deleteRow(i);
        		}
        	}
        	this.divDetail.form.grdUserPhoneList.set_enableredraw(true);

        	// 그리드 헤더 체크박스 체크 초기화
        	var iCell = takeEtc.getCellFromColId(this.divDetail.form.grdUserPhoneList, "CHK");
        	this.divDetail.form.grdUserPhoneList.setCellProperty("head",iCell,"text","0");
        };


        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnUserFunction();
         */
        this.fnInit = function()
        {
        	//Script
        	var sOutDs = ["dsSchUseYn"];
            var sGroupCodes = ["00009"];
        	var sHearderTypes = ["ALL"];

            take.tranCode(this, sGroupCodes, sOutDs, sHearderTypes,
            function(sId, nErrCd, sErrMsg){
        		//callback
        		this.divSearch.form.cboUseYn.set_value("Y");
        		this.fnSearch();
        	});

        	//this.divSearch.form.cboUseYn.set_value("Y");
        	// 공통 코드조회 함수 호출
            this.fnCommonCode();
        };

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	//사용자목록 조회
        	this.fnSearch();
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
                    break;
        		case "userPhoneList" : //단말기조회 콜백
                    break;
                case "Delete" : // 저장 콜백
        			// 저장완료 메세지.
        			take.alert(this, "info", "저장이 완료되었습니다.");
                    break;
            }
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.UM030_onload,this);
            this.divSearch.form.edtUser.addEventHandler("onkeyup",this.divSearch_edtUser_onkeyup,this);
            this.divSearch.form.btnDirector.addEventHandler("onclick",this.btnDirector_onclick,this);
            this.divDetail.form.grdUserList.addEventHandler("onselectchanged",this.grdUserList_onselectchanged,this);
            this.divDetail.form.btnDelRow.addEventHandler("onclick",this.divDetail_btnDelRow_onclick,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
            this.dsUser.addEventHandler("canrowposchange",this.dsUser_canrowposchange,this);
            this.dsSchUseYn.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
        };
        this.loadIncludeScript("UM030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
