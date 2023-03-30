(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BM010P03");
            this.set_titletext("게시판 작성");
            this.set_cssclass("fm_work");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(870,615);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static22","0",null,null,"10","0","790",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev",null,"20","46","21","118",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("이전");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","btnPrev:5",null,"31","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle","27","btnPrev:10",null,"21","127",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("제목을 입력해 주세요.");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","btnPrev:35",null,null,"20","203",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkImportYn","edtTitle:10","51","94","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("중요공지 여부");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","27","btnPrev:46",null,null,"27","213",null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_save02");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"20","46","21","btnSave:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_cancel02");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","20",null,null,"20","20","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Div("divFile","20","Static02:0",null,"146","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_url("frm::com/comFileSYS.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","20",null,null,"20","20","43",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"divFile:14","58","23","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","850","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFile
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",870,615,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtTitle","value","dsNotice","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","chkImportYn","value","dsNotice","IMPORT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comFileSYS.xfdl");
        };
        
        // User Script
        this.registerScript("BM010P03.xfdl", function() {
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
        this.fv_bWebOnload = false;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = take.nvl(this.parent.sMenuCd, "");
        this.fv_sBoardSeq = take.nvl(this.parent.sBoardSeq, "");
        this.fv_sAttachCd = take.nvl(this.parent.sBoardAttach, "");
        this.fv_divFile;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.BM010P03_onload = function(obj, e)
        {
        	this.ProgId = "GM00000042";
        	this.ProgNm = "GM00000042";

        	if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		//Script
        		this.wbWebEditor.set_url(take.getSvcUrl() + "editor/SummerNote/summer.html");
        		this.setTimer(1,100);

        		if( "" != this.fv_sBoardSeq )
        		{
        			this.btnPrev.set_visible(true);
        			this.btnDelete.set_visible(true);
        		}

        		// 첨부파일 활성화
        		this.fv_divFile = this.divFile.form;
        		this.fv_divFile.fn_setSaveBtnEnable(false);
        		this.fv_divFile.fn_setAtchFileTypeCd("04");
        		this.fv_divFile.fnInitComponent(this);

        		this.fnUISetting(this.opener.fv_arrUserParam);
        	}
        };

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

            this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "PROJECT_CD"	, this.fv_sProjectCd);
        	this.dsSearch.setColumn(0, "MENU_CD"	, this.fv_sMenuCd);
        	this.dsSearch.setColumn(0, "BOARD_SEQ"	, this.fv_sBoardSeq);

        	//Script
        	take.tranSelect(this, "Search", "BoardManagement.boardInfoDetail", "dsSearch", "dsNotice", "", "fnCallback");
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

        	var sContents = this.wbWebEditor.getProperty("window").callMethod("getContents", 1);

        	this.dsNotice.setColumn(0, "PROJECT_CD"	, this.fv_sProjectCd);
        	this.dsNotice.setColumn(0, "MENU_CD"	, this.fv_sMenuCd);
         	this.dsNotice.setColumn(0, "BOARD_TXT"	, sContents);

        	//데이터변경 / 파일 수정 여부
        	if (!take.isDsModified(this.dsNotice) && !this.fv_divFile.fn_isUpdate()){
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        	//파일 업로드 / 저장
        	this.fv_divFile.fnUploadSaveFileList(function(rtnValue){
        		if(rtnValue.result){
        			take.transaction(this, "Save", "SVC_LOC::cm/boardSave.do", "dsNotice=dsNotice:U", "", "", "fnCallback");
        		}
        	});
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "";

        	take.transaction(this, "Delete", "SVC_LOC::cm/boardSave.do", "dsNotice=dsNotice", "", "", "fnCallback");
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.wbWebEditor_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("summer.html") != -1){
        		this.fv_bWebOnload = true;
        	}
        };

        this.wbWebEditor_onsize = function(obj,e)
        {
        	this.wbWebEditor.getProperty("window").callMethod("setHeight", (this.wbWebEditor.getOffsetHeight()-85));
        };

        this.BM010P03_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);
                    this.wbWebEditor.getProperty("window").callMethod("fnEditorReady", (this.wbWebEditor.getOffsetHeight()-65));

        			if(this.opener.dsTemplate){
        				var objDs = this.opener.dsTemplate;
        				var sContents = take.nvl(objDs.getColumn(0, "TEMPLATE_TXT"), "");
        				if( "" != sContents ){
        					this.wbWebEditor.getProperty("window").callMethod("setContents", sContents);
        				}
        			}

        			if(!take.isEmpty(this.fv_sBoardSeq)){
        				this.fnSearch();
        			}else{
        				this.dsNotice.addRow();

        				//첨부파일 코드가 없을시 기준에 맞게 코드 생성
        				this.fv_divFile.fnSearchAtchFileId(function(rtnValue){
        					this.dsNotice.setColumn(0, 'BOARD_ATTACH', rtnValue.resultData);
        					this.fv_divFile.fn_setAtchFileId(rtnValue.resultData);
        					this.fv_divFile.fnSearchFileList();
        				});
        			}
        		}
        	}
        };

        this.btnSave_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	//var bRowDel = take.confirm(this, "question", "삭제 하시겠습니까?");
        	var bRowDel = take.confirm(this, "question", "MS00000071");
        	if (!bRowDel) return;

        	this.fnDelRow();
        };

        this.btnPrev_onclick = function(obj,e)
        {
        	this.opener.fnCallPopup(this.fv_sBoardSeq, this.fv_sAttachCd, "BM010P02");
        	this.close();
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        //목록 이동
        this.fnGoList = function()
        {
        	this.opener.fnSearch();
        	this.close();
        };

        // 초기 ui 세팅
        this.fnUISetting = function(arrUserParam)
        {
        	var sAttachYn = "Y";

        	if(arrUserParam){
        		if(arrUserParam.attach_yn)
        			sAttachYn = take.nvl(arrUserParam.attach_yn, "Y");
        	}

        	var nFormHeight = this.getOffsetHeight();
        	if( "N" == sAttachYn )
        	{
        		var nFileHegit = this.divFile.getOffsetHeight();
        		nFormHeight = nFormHeight - nFileHegit;

        		this.divFile.set_height(0);
        	}

        	this.set_height(nFormHeight);
        	this.resetScroll();
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
        			//take.alert(this, "", "저장이 완료되었습니다.");
        			take.alert(this, "Info", "MS00000002");
        			this.fnGoList();

                    break;
        		case "Delete" : //삭제 콜백
        			//take.alert(this, "", "삭제가 완료되었습니다.");
        			take.alert(this, "Info", "MS00000003");
        			this.fnGoList();

        			break;
                case "Search" :  //조회 콜백
                    //Script
        			var sContents = this.dsNotice.getColumn(0, "BOARD_TXT");
        			this.wbWebEditor.getProperty("window").callMethod("setContents", sContents);

        			//첨부파일 조회
        			var atchFileId = this.dsNotice.getColumn(0, 'BOARD_ATTACH');
        			this.fv_divFile.fn_setAtchFileId(atchFileId);
        			this.fv_divFile.fnSearchFileList();

                    break;
                default :
                    break;
            }
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.BM010P03_onload,this);
            this.addEventHandler("ontimer",this.BM010P03_ontimer,this);
            this.btnPrev.addEventHandler("onclick",this.btnPrev_onclick,this);
            this.wbWebEditor.addEventHandler("onloadcompleted",this.wbWebEditor_onloadcompleted,this);
            this.wbWebEditor.addEventHandler("onsize",this.wbWebEditor_onsize,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("BM010P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
