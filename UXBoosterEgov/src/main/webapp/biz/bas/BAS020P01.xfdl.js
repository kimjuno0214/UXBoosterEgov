(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS020P01");
            this.set_titletext("시험항목코드 등록");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,617);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REF1\" type=\"STRING\" size=\"255\"/><Column id=\"REF2\" type=\"STRING\" size=\"255\"/><Column id=\"REF3\" type=\"STRING\" size=\"255\"/><Column id=\"REF4\" type=\"STRING\" size=\"255\"/><Column id=\"REF5\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_ORDER\" type=\"INT\" size=\"100\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REF1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GROUP_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","20","103",null,"21","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시험선택");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","20","130",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"148\"/><Column size=\"485\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"CODE KEY\"/><Cell col=\"1\" text=\"인증분야\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"시험항목\" cssclass=\"cellImport\"/><Cell col=\"3\" text=\"정렬순번\" cssclass=\"cellImport\"/><Cell col=\"4\" text=\"사용여부\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE_KEY\"/><Cell col=\"1\" text=\"bind:REF1\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" text=\"bind:CODE_NM\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:CODE_ORDER\" edittype=\"text\" displaytype=\"number\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" textAlign=\"center\" text=\"bind:USE_YN\" combodataset=\"dsUseYn\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"57","23","btnCancel:3","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","50","21","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"100","57","21","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("  행삭제  ");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"100","57","21","btnDelete:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("  행추가  ");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","46",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","297","11","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("시험항목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode00","641","11","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTestIdCd","staCode:1","10","160","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode01","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","staCode01:1","10","100","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staCode00:1","10","100","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","194","0","100",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","538","0","100",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnUploadExcel00",null,"100","100","21","btnAddRow:3",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("  엑셀다운로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnUploadExcel",null,"100","100","21","btnUploadExcel00:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("  엑셀 업로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0",null,null,"20","0","42",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",880,617,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.edtTestIdCd","value","dsSearch","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboCertFldCd","value","dsSearch","REF1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAS020P01.xfdl", function() {
        /**
        *  시험항목등록코드
        *
        *  @MenuPath    기초정보관리 > 시험항목관리
        *  @FileName    BAS020P01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.01.27
        *  @Version     1.0
        *  @Desction    공통코드 시험항목코드(TEST_ITEM_CD) 등록
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.01.27      doore              최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_sCertFldCd = take.nvl(this.parent.sCertFldCd, "");

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */

        this.BAS020P01_onload = function(obj, e)
        {
        	if(take.formOnLoad(this)){//공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수

        			// 공통코드 조회
        			take.tranCode(
        				this,
        				["CERT_FLD_CD", "YN"],
        				["dsCertFldCd", "dsUseYn"],
        				["", "ALL"],
        				function (sId, nErrCd, sErrMsg){
        					if(!take.isEmpty(this.fv_sCertFldCd)) this.divSearch.form.cboCertFldCd.set_value(this.fv_sCertFldCd);
        					else this.divSearch.form.cboCertFldCd.set_index(0);
        					this.divSearch.form.cboUseYn.set_index(1);
        					this.fnSearch();}
        			);}
        }
        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
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

        	this.dsList.clearData();
        	this.dsSearch.setColumn(0,"GROUP_ID","TEST_ITEM_CD");
        	take.tranSelect(this, "Search", "SystemCommon.codeInfoList", "dsSearch", "dsList", "", "fnCallback");
        };

        /**
         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
        	var strCertFldCd = this.divSearch.form.cboCertFldCd.value;

        	var objDs = this.dsList;

            //변수에 값 세팅
        	nRow = this.dsList.addRow();

        	// 기본정보 세팅
        	this.dsList.setColumn(nRow, "REF1", strCertFldCd);
        	this.dsList.setColumn(nRow, "GROUP_ID",   "TEST_ITEM_CD");
        	this.dsList.setColumn(nRow, "PARENT_KEY", "0004400040");
        	this.dsList.setColumn(nRow, "USE_YN", "Y");
        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function()
        {
        	 //공통 조회에서 호출할 디폴트값 세팅 필요
        	var sTranId = "Save";

        	//데이터셋 수정 여부 확인
        	if (!take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	//저장 전 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,                           //현재 Form Object
                    this.grdMain,  	//벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    "cellImport",                   //필수 입력 css값
                    "",                				//성공 Call Back 함수
                    true);                          //동기 여부

        	if(bRtn)
        	{
        		var sParam = "sNameSpace=basicInfo.codeInfoInsert|SystemCommon.codeInfoUpdate|SystemCommon.codeInfoDelete"
        				   + " sDataset=dsList";

        		take.transaction(this, sTranId, "SVC_LOC::doore/saveList.do", "dsList=dsList:U", "", sParam, "fnCallback", false);
        	}
        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function()
        {
        	//공통 행추가에서 호출할 디폴트값 세팅
            var delRow = this.dsList.rowposition;

            if(delRow < 0)
        	{
                alert("선택된 항목이 없습니다.");
                return;
            }

        	// row 상태가 insert 인경우만 삭제 가능
        	if(this.dsList.getRowType(delRow) == 2) this.dsList.deleteRow(delRow);
        	else
        	{
        		alert("저장된 행은 삭제 할 수 없습니다. 사용여부를 'N'으로 변경하여 주십시오.");
        		return false;
        	}
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 닫기 버튼 클릭 이벤트 */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };


        /* 엑셀 다운로드 클릭 이벤트 */
        this.btnExcelDownload_onclick = function(obj,e)
        {
        	gFnExcelDown (this, this.grdMain, "시험항목코드_" + this.divSearch.form.cboCertFldCd.value);
        };

        /* 엑셀 업로드 클릭 이벤트 */
        this.btnExcelUpload_onclick = function(obj,e)
        {
        	gFnExcelUpload(this, this.dsExcelUpload, 2, this.fnExcelImport_onsuccess, this.fnExcelImport_onerror);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        /*
        	excel 업로드 성공
        */
        this.fnExcelImport_onsuccess = function(obj,  e)
        {
        	var nCnt = this.dsExcelUpload.rowcount;
            this.dsList.clearData();
        	var strMapp = gFnGetMappingString(this.grdMain);
        	gFnTrace(strMapp);
        	for(var i = 0; i < nCnt; i++) {
        		var nRow = this.dsList.addRow();
        		this.dsList.copyRow(nRow,this.dsExcelUpload, i, strMapp);
        		this.dsList.setColumn(nRow, "GROUP_ID", "TEST_ITEM_CD");
        		this.dsList.setColumn(nRow, "PARENT_KEY", "0004400040");

        		// 인증분류명 -> 인증분류코드 처리
        		var sCertFldCd = gFnGetCodeId(this.dsCertFldCd, this.dsList.getColumn(nRow, "REF1"));
        		this.dsList.setColumn(nRow, "REF1", sCertFldCd);
        	}

        	// 데이터셋 처리 : CODE_KEY가 있는 경우 update, 없는 경우 insert
        	this.dsList.set_updatecontrol(false);
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(take.isEmpty(this.dsList.getColumn(i, "CODE_KEY")))
        		{
        			this.dsList.setRowType(i, "I");
        			//this.dsList.setColumn(i, "CODE_ID", this.dsList.getColumn(i, "CODE_NM").replace(/\s/g,""));
        		}
        		else  this.dsList.setRowType(i, "U");
        	}

        	this.dsList.set_updatecontrol(true);
        	this.grdMain.selectRow(0);

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
                case "Save" : //저장 콜백
        		    alert("저장되었습니다.");
        			this.fnSearch();
        			break;
                case "Search" :  //조회 콜백
        			break;
                default :
                    break;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.BAS020P01_onload,this);
            this.addEventHandler("ontimer",this.CM010P03_ontimer,this);
            this.staProgDetailT00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.fnSave,this);
            this.btnSearch.addEventHandler("onclick",this.fnSearch,this);
            this.btnDelete.addEventHandler("onclick",this.fnDelRow,this);
            this.btnAddRow.addEventHandler("onclick",this.fnAddRow,this);
            this.divSearch.form.edtTestIdCd.addEventHandler("onkeyup",this.edtMlInfoSearch_onkeyup,this);
            this.divSearch.form.cboCertFldCd.addEventHandler("onitemchanged",this.cboCertFldCd_onitemchanged,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.cboCertFldCd_onitemchanged,this);
            this.btnUploadExcel00.addEventHandler("onclick",this.btnExcelDownload_onclick,this);
            this.btnUploadExcel.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
        };
        this.loadIncludeScript("BAS020P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
