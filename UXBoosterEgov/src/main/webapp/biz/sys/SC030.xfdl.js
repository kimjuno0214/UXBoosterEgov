(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC030");
            this.set_titletext("시스템관리_코드관리_코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYnCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"C_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"REF1\" type=\"STRING\" size=\"256\"/><Column id=\"REF2\" type=\"STRING\" size=\"256\"/><Column id=\"REF3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REF1\" type=\"STRING\" size=\"256\"/><Column id=\"REF2\" type=\"STRING\" size=\"256\"/><Column id=\"REF3\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDER\" type=\"INT\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF4\" type=\"STRING\" size=\"256\"/><Column id=\"REF5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiLanguageDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"ML_LANG_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCodeInfoSearch","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("코드그룹");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCodeInfoSearch","staCodeInfoSearch:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnSearch","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYnSearch","staUseYnSearch:3","10","201","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsUseYnCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","355","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","279","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("코드그룹");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static20","300","0",null,"21","160",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("코드목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdCodeGroup","0","26","280",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("dsCodeGroup");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:CODE_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdCodeInfo","300","26",null,"303","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsCodeInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.getSetter("takegrid").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"코드ID\" cssclass=\"cellImport\"/><Cell col=\"1\" text=\"코드명\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"Ref.1\"/><Cell col=\"3\" text=\"Ref.2\"/><Cell col=\"4\" text=\"Ref.3\"/><Cell col=\"5\" text=\"Ref.4\"/><Cell col=\"6\" text=\"Ref.5\"/><Cell col=\"7\" text=\"상세설명\"/><Cell col=\"8\" text=\"정렬순서\" cssclass=\"cellImport\"/><Cell col=\"9\" text=\"사용\"/><Cell col=\"10\" text=\"등록자\"/><Cell col=\"11\" text=\"등록일\"/><Cell col=\"12\" text=\"수정자\"/><Cell col=\"13\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE_ID\" textAlign=\"center\" edittype=\"expr:PARENT_KEY == &apos;0000000000&apos; ? &apos;none&apos; : &apos;text&apos;\"/><Cell col=\"1\" text=\"bind:CODE_NM\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:REF1\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:REF2\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:REF3\" edittype=\"text\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:REF4\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:REF5\"/><Cell col=\"7\" text=\"bind:DESC_TXT\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:CODE_ORDER\" textAlign=\"right\" edittype=\"text\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:USE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"10\" text=\"bind:REG_NM\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:REG_DT\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:MOD_NM\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:MOD_DT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","300","349",null,"21","170",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("다국어정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button03",null,"349","100","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("다국어매핑");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultiLanguageDetail","300","375",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMultiLanguageDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:LANG_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ML_LANG_TXT\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static27","280","0","20",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static06","300","329",null,"20","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
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
            obj = new BindItem("item0","divSearch.form.edtCodeInfoSearch","value","dsSearch","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SC030.xfdl", function() {
        /**
        *  코드관리
        *
        *  @MenuPath    시스템관리 > 코드관리 > 코드관리
        *  @FileName    SC030.xfdl
        *  @Creator     천우성
        *  @CreateDate  2019.08.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.17      천우성             최초 생성
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
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.take_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		take.tranCode(this, "00009", "dsUseYnCode", "ALL",
        			function (){
        				this.divSearch.form.cboUseYnSearch.set_index(0);
        				this.fnTran('Group');
        			}
        		);
           }
        };

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Group";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "Group" :
        			this.dsCodeGroup.clearData();
        			var sCodeNm = take.nvl(this.divSearch.form.edtCodeInfoSearch.value, "");
        			var sUseYn = take.nvl(this.divSearch.form.cboUseYnSearch.value, "");

        			this.dsSearch.setColumn(0, "CODE_NM", sCodeNm);
        			this.dsSearch.setColumn(0, "USE_YN", sUseYn);

        			take.tranSelect(this, "Group", "SystemCommon.codeInfoGroup", "dsSearch", "dsCodeGroup", "", sCallBack);

                    break;
        		case "List" :
        			this.dsCodeInfo.clearData();
        			this.dsMultiLanguageDetail.clearData();

        			var nRow = this.dsCodeGroup.rowposition;
        			var sParentKey = this.dsCodeGroup.getColumn(nRow, "CODE_KEY");

        			var sParam = "PARENT_KEY='" + sParentKey + "'";

                    take.tranSelect(this, "List", "SystemCommon.codeInfoList", "", "dsCodeInfo", sParam, sCallBack);

        			break;
        		case "Language" :
        			this.dsMultiLanguageDetail.clearData();

        			var nRow  = this.dsCodeInfo.rowposition;
        			var sMlCd = take.nvl(this.dsCodeInfo.getColumn(nRow, "ML_CD"), "");

        			take.tranSelect(this, "Language", "SystemCommon.multilanguageDetailList", "", "dsMultiLanguageDetail", "sMlCd='" + sMlCd + "'", sCallBack);

                    break;
        		case "Save" :
        			take.transaction(this, "Save", "SVC_LOC::sc/codeInfoSave.do", "dsCodeInfo=dsCodeInfo:U", "", "", sCallBack);

        			break;
                default :
                    break;
            }
        };

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
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
                case "Group" : //코드그룹 콜백
        			var sCodeNm = this.divSearch.form.edtCodeInfoSearch.value;
        			var sUseYn = this.divSearch.form.cboUseYnSearch.value;

        			if(!take.isEmpty(sCodeNm) || !take.isEmpty(sUseYn)){
        				//this.divDetail.form.grdCodeGroup.selectRow(1);

        			}
        			this.fnTran('List');

                    break;
                case "List" :  //코드목록 콜백
                    this.fnTran('Language');
                    break;
                case "Save" : //저장 콜백
        			this.reload();
                    //this.fnTran('List');
                    break;
                default :
                    break;
            }
        };

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Group";

            this.fnTran(sTranId);
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	var objDs = this.dsCodeInfo;

        	// 벨리데이션
        	var arrFindNm    = take.nvl(take.getFindRows(objDs, "CODE_NM", ""), "");
        	var arrFindOrder = take.nvl(take.getFindRows(objDs, "CODE_ORDER", ""), "");
        	var arrFindId = take.nvl(take.getFindRows(objDs, "CODE_ID", ""), "");

        	if(arrFindId.length > 0) {
        		take.alert(this, "info", "코드ID를 입력해주세요.");
        		return;
        	}
        	if(arrFindNm.length > 0) {
        		take.alert(this, "info", "코드명을 입력해주세요.");
        		return;
        	}
        	if(arrFindOrder.length > 0) {
        		take.alert(this, "info", "정렬순서를 입력해주세요.");
        		return;
        	}

            this.fnTran(sTranId);
        };

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
        	var sParentKey, sGroupId;

            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdCodeInfo";

            if( sGrdId == "grdCodeInfo" )
        	{
        		//현재 리스트에 데이터가 있으면
                if ( this.dsCodeInfo.rowcount > 0 )
                {
                    //같은 레벨임으로 같은 그룹 아이디를 가져다 씀
                    sParentKey = this.dsCodeInfo.getColumn(0, "PARENT_KEY");
                    sGroupId   = this.dsCodeInfo.getColumn(0, "GROUP_ID");
                } else {
                    //없을경우 코드그룹 리스트에서 현재 선택된 Row의 코드 아이디를 가져옴
                    sParentKey = this.dsCodeGroup.getColumn(this.dsCodeGroup.rowposition, "CODE_KEY");
        			//sGroupId   = sParentKey.substring(5, 10);
        			sGroupId = this.dsCodeGroup.getColumn(this.dsCodeGroup.rowposition, "CODE_ID");
                }

                //공통에서 호출이 아닐경우 기본 세팅
                if (take.nvl(nRow, "")=="") nRow = this.dsCodeInfo.addRow();

        		if( sParentKey == "0000000000" ){
        			this.dsCodeInfo.setColumn(nRow, "CODE_ID", "자동생성");
        			//this.divDisplay.form.grdCDetail.setCellPos(2);
        			//this.divDisplay.form.grdCDetail.setFocus();
        		}else{
        			this.dsCodeInfo.setColumn(nRow, "CODE_ID", "");
        			//this.divDisplay.form.grdCDetail.setCellPos(1);
        			//this.divDisplay.form.grdCDetail.setFocus();
        		}

                //기본 값 세팅(그룹아이디, 사용여부)
        		var nMaxOrder = parseInt(this.dsCodeInfo.getMax("CODE_ORDER")+1);

        		this.dsCodeInfo.setColumn(nRow, "CODE_ORDER", take.nvl(nMaxOrder, "99"));
        		this.dsCodeInfo.setColumn(nRow, "CODE_NM", "");
                this.dsCodeInfo.setColumn(nRow, "PARENT_KEY", sParentKey);
                this.dsCodeInfo.setColumn(nRow, "GROUP_ID", sGroupId);
                this.dsCodeInfo.setColumn(nRow, "USE_YN", "Y");

                //신규 코드임으로 다국어 데이터 Clear
                this.dsMultiLanguageDetail.clearData();
        	}
        };


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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdCodeInfo";

            var objDataset = this.dsCodeInfo;
            var arrChkRow = take.getChkRow(objDataset);

            if(arrChkRow.length == 0)
        	{
                alert("선택된 항목이 없습니다.");
                return;
            }

            var bRowDel = take.confirm(this, "question", "선택된 항목(들)을 삭제 하시겠습니까?");
            if (bRowDel)
        	{
                for(var i=0; i<arrChkRow.length; i++)
        		{
                    objDataset.deleteRow(arrChkRow[i]);
                }

                this.fnTran("Save");
            }
        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //그룹 리스트 클릭이벤트
        this.divDetail_grdCodeGroup_oncellclick = function(obj,e)
        {
        	if(e.clickitem == "")
            {
                var objGrid, objDs;
                var sRef1, sRef2, sRef3, sRef4, sRef5;
                var nIdx;

                objGrid = this.divDetail.form.grdCodeInfo;
                objDs = this.dsCodeGroup;

                sRef1 = take.nvl(objDs.getColumn(e.row,"REF1"), "Ref.1");
                sRef2 = take.nvl(objDs.getColumn(e.row,"REF2"), "Ref.2");
                sRef3 = take.nvl(objDs.getColumn(e.row,"REF3"), "Ref.3");
                sRef4 = take.nvl(objDs.getColumn(e.row,"REF4"), "Ref.4");
        		sRef5 = take.nvl(objDs.getColumn(e.row,"REF5"), "Ref.5");

                nIdx = objGrid.getBindCellIndex("body","REF1");

                objGrid.setCellProperty("head",nIdx,"text",sRef1);
                objGrid.setCellProperty("head",nIdx+1,"text",sRef2);
                objGrid.setCellProperty("head",nIdx+2,"text",sRef3);
        		objGrid.setCellProperty("head",nIdx+3,"text",sRef4);
        		objGrid.setCellProperty("head",nIdx+4,"text",sRef5);

                this.fnSearch('List');
            }
        };

        // 코드목록 이벤트
        this.divDetail_grdCodeInfo_onselectchanged = function(obj,e)
        {
        	if(e.col != 0){
                this.fnTran('Language');
        	}
        };

        // 다국어매핑
        this.divDetail_Button03_onclick = function(obj,e)
        {
        	var sCompName = this.dsCodeInfo.getColumn(this.dsCodeInfo.rowposition, "CODE_NM");
        	take.openPopup(this, "addMultiLanguage", "biz::sys/OM010P06.xfdl", {argInSearchText:sCompName}, "", "fnPopCallback", false);
        };

        // 엔터 입력시 다음 편집 셀로 이동
        this.divDetail_grdCodeInfo_onenterdown = function(obj,e)
        {
        	obj.moveToNextCell();
        };

        // 코드그룹 검색조건 엔터 값 조회
        this.divSearch_edtCodeInfoSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnTran("Group");
        	}
        };
        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnPopCallback : 다국어팝업 콜백
         * @example this.fnPopCallback();
         */
        this.fnPopCallback = function (sId, nReturnVal)
        {
        	//팝업이 닫히면서 nReturnVal을 통해 값을 받을 수 있습니다
        	var nRow = this.dsCodeInfo.rowposition;
        	if(take.nvl(nReturnVal, "") != "") {
        		nReturnVal = nReturnVal.split(",")[0];
        		this.dsCodeInfo.setColumn(nRow, "ML_CD", nReturnVal);
        	} else return;

        	this.fnTran("Language");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.take_onload,this);
            this.divSearch.form.edtCodeInfoSearch.addEventHandler("onkeyup",this.divSearch_edtCodeInfoSearch_onkeyup,this);
            this.divDetail.form.grdCodeGroup.addEventHandler("oncellclick",this.divDetail_grdCodeGroup_oncellclick,this);
            this.divDetail.form.grdCodeInfo.addEventHandler("onselectchanged",this.divDetail_grdCodeInfo_onselectchanged,this);
            this.divDetail.form.grdCodeInfo.addEventHandler("onenterdown",this.divDetail_grdCodeInfo_onenterdown,this);
            this.divDetail.form.Button03.addEventHandler("onclick",this.divDetail_Button03_onclick,this);
        };
        this.loadIncludeScript("SC030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
