(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BM010P02");
            this.set_titletext("게시판상세조회");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReply", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","46",null,"31","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle","27","51",null,"21","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","76",null,null,"20","304",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","20","0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Static("Static16",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Div("divFile","20",null,null,"47","20","297",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_replyBox01");
            obj.set_formscrollbartype("auto none");
            obj.set_formscrolltype("horizontal");
            this.addChild(obj.name, obj);

            obj = new Button("btnAllDown",null,"19","70",null,"10","5",null,null,null,null,this.divFile.form);
            obj.set_taborder("1");
            obj.set_text("일괄다운");
            obj.set_cssclass("btn_WF_Download");
            this.divFile.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","27","87",null,null,"31","354",null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_cancel02");
            this.addChild(obj.name, obj);

            obj = new Button("btnModify",null,"20","46","21","btnDelete:3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_save02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ListView("livReply","20",null,null,"160","20","127",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsReply");
            obj.set_cssclass("lst_WF_reply");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"79\"><Cell id=\"liv_staRegNm\" left=\"10\" top=\"10\" width=\"80\" height=\"23\" text=\"bind:REG_NM\"/><Cell id=\"liv_staRegDt\" left=\"89\" top=\"10\" width=\"110\" height=\"23\" text=\"bind:REG_DT\"/><Cell id=\"liv_txtReply\" left=\"10\" top=\"35\" height=\"37\" text=\"bind:REPLY_TXT\" right=\"10\" displaytype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;textareacontrol&apos; : &apos;normal&apos; \" edittype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;textarea&apos; : &apos;none&apos; \"/><Cell id=\"liv_btnDel\" top=\"10\" width=\"60\" height=\"23\" text=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;삭제&apos; : &apos;&apos;\" right=\"10\" displaytype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;buttoncontrol&apos; : &apos;none&apos;\" edittype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;button&apos; : &apos;none&apos;\"/><Cell id=\"liv_btnMod\" top=\"10\" width=\"60\" height=\"23\" text=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;수정&apos; : &apos;&apos;\" right=\"75\" displaytype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;buttoncontrol&apos; : &apos;none&apos; \" edittype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;button&apos; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divReplyReg","20",null,null,"59","20","63",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_replyBox01");
            this.addChild(obj.name, obj);

            obj = new TextArea("taReplyTxt","10","10",null,null,"83","10",null,null,null,null,this.divReplyReg.form);
            obj.set_taborder("0");
            this.divReplyReg.addChild(obj.name, obj);

            obj = new Button("btnReplyReg",null,"10","70",null,"10","10",null,null,null,null,this.divReplyReg.form);
            obj.set_taborder("1");
            obj.set_text("댓글등록");
            this.divReplyReg.addChild(obj.name, obj);

            obj = new Static("Static04","20","296",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"58","23","20","20",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","20","630",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","20","587",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("20");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","20","353",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_opacity("0.3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReplyReg.form
            obj = new Layout("default","",0,0,this.divReplyReg.form,function(p){});
            this.divReplyReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",850,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtTitle","value","dsNotice","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BM010P02.xfdl", function() {
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
        *  2021.05.17      신준민             tranSave -> transaction 변경
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_bWebOnload = false;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = take.nvl(this.parent.sMenuCd, this.opener.fv_sMenuCd);
        this.fv_sBoardSeq = take.nvl(this.parent.sBoardSeq, "");
        this.fv_sAttachCd = take.nvl(this.parent.sBoardAttach, "");

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.BM010P02_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		var sBaseUrl = take.getSvcUrl();
        		this.wbWebEditor.set_url(sBaseUrl + "editor/SummerNote/boardDetail.html");
        		this.setTimer(1,100);
                //Script
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
        	this.dsSearch.setColumn(0, "PROJECT_CD", this.fv_sProjectCd);
        	this.dsSearch.setColumn(0, "MENU_CD", this.fv_sMenuCd);
        	this.dsSearch.setColumn(0, "BOARD_SEQ", this.fv_sBoardSeq);
        	this.dsSearch.setColumn(0, "ATTACH_CD", this.fv_sAttachCd);

        	//Script
        	take.transaction(this, sTranId, "SVC_LOC::cm/boardSelect.do", "dsSearch=dsSearch", "dsNotice=dsNotice dsReply=dsReply dsFile=dsFile", "", "fnCallback");
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
        	var sAttachCd = this.dsNotice.getColumn(0, "BOARD_ATTACH");
        	var sParam = "";
        		sParam += "sProjectCd="	+ this.fv_sProjectCd+"";
        		sParam += " sMenuCd="	+ this.fv_sMenuCd+"";
        		sParam += " sBoardSeq="	+ this.fv_sBoardSeq+"";
        		sParam += " sAttachCd="	+ sAttachCd+"";

        	take.transaction(this, "Delete", "SVC_LOC::cm/boardDelete.do", "dsNotice=dsNotice", "", sParam, "fnCallback");
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.wbWebEditor_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("boardDetail.html") != -1)
        	{
        		this.fv_bWebOnload = true;
        	}
        };

        this.BM010P02_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);
                    this.fnSearch();
        		}
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnModify_onclick = function(obj,e)
        {
        	this.opener.fnCallPopup(this.fv_sBoardSeq, this.fv_sAttachCd, "BM010P03");
        	this.close();
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	var bConfirm = take.confirm(this, "", "해당 글을 삭제하시겠습니까?");
        	if( !bConfirm ) return;

        	this.fnDelRow();
        };

        // 댓글등록 버튼 클릭
        this.divReplyReg_btnReplyReg_onclick = function(obj,e)
        {
        	var nRow = this.dsReply.addRow();
        	var sUserCd = take.getUser("USER_CD");
        	this.dsReply.setColumn(nRow, "PROJECT_CD", this.fv_sProjectCd);
        	this.dsReply.setColumn(nRow, "MENU_CD", this.fv_sMenuCd);
        	this.dsReply.setColumn(nRow, "BOARD_SEQ", this.fv_sBoardSeq);
        	this.dsReply.setColumn(nRow, "REG_CD", sUserCd);
        	this.dsReply.setColumn(nRow, "REPLY_TXT", this.divReplyReg.form.taReplyTxt.text);
        	//take.tranSave(this, "ReplySave", "BoardManagement.boardReply", "dsReply", "", "", "fnCallback");
            take.transaction(this, "ReplySave", "SVC_LOC::cm/replySave.do", "dsReply=dsReply:U", "", "", "fnCallback", false);
        };

        this.livReply_oncellclick = function(obj,e)
        {
        	var nRow = obj.getSelectedRows();
        	var sCellTxt = obj.getCellText(nRow, "body", e.cellid);
        	if(sCellTxt == "삭제")
        	{
        		//trace(nRow + "  삭제");
        		var bDel = take.confirm(this, "", "해당 댓글을 삭제하시겠습니까?");
        		if(bDel)
        		{
        			this.dsReply.deleteRow(nRow);
        			//take.tranSave(this, "ReplyDelete", "BoardManagement.boardReply", "dsReply", "", "", "fnCallback");
                    take.transaction(this, "ReplyDelete", "SVC_LOC::cm/replySave.do", "dsReply=dsReply:U", "", "", "fnCallback", false);
        		}
        	}
        	else if(sCellTxt == "수정")
        	{
        		//trace(nRow + "  수정");
                //take.tranSave(this, "ReplyModify", "BoardManagement.boardReply", "dsReply", "", "", "fnCallback");
                take.transaction(this, "ReplyModify", "SVC_LOC::cm/replySave.do", "dsReply=dsReply:U", "", "", "fnCallback", false);
        	}
        };

        // 일괄다운버튼 클릭
        this.divFile_btnAllDown_onclick = function(obj,e)
        {
        	var downloadUrl = take.getSvcUrl() + "zipDownload.do";
        		downloadUrl += "?sAttachCd="+this.fv_sAttachCd;

        	this.FileDownTransfer00.set_url(downloadUrl);
        	this.FileDownTransfer00.download();
        };

        // 파일 개별 다운
        this.staFile_onclick = function(obj,e)
        {
        	var downloadUrl = take.getSvcUrl() + "file/downloadAtchFile.do";
        	this.FileDownTransfer00.setPostData("atchFileId"	, obj.attachCd);
        	this.FileDownTransfer00.setPostData("fileSeq"		, obj.fileSeq);
        	this.FileDownTransfer00.setPostData("isDirect"		, "N");
        	this.FileDownTransfer00.set_url(downloadUrl);
        	this.FileDownTransfer00.download();
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        // 초기 ui 세팅
        this.fnUISetting = function(arrUserParam)
        {
        	var sReplyYn = "Y";
        	var sAttachYn = "Y";

        	if(arrUserParam){
        		if(arrUserParam.reply_yn)
        			sReplyYn = take.nvl(arrUserParam.reply_yn, "Y");
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

        	if( "N" == sReplyYn )
        	{
        		var nLivReplyHegit = this.livReply.getOffsetHeight();
        		nFormHeight = nFormHeight - nLivReplyHegit;
        		this.livReply.set_height(0);

        		var nDivReplyRegHegit = this.divReplyReg.getOffsetHeight();
        		nFormHeight = nFormHeight - nDivReplyRegHegit;
        		this.divReplyReg.set_height(0);
        	}
        	this.set_height(nFormHeight);
        	this.resetScroll();
        };

        this.fnGoList = function()
        {
        	this.opener.fnSearch();
        	this.close();
        };

        this.fnReplySearch = function()
        {
        	var sParam = "PROJECT_CD="	+ this.fv_sProjectCd;
        		sParam += " MENU_CD="	+ this.fv_sMenuCd;
        		sParam += " BOARD_SEQ="	+ this.fv_sBoardSeq;

        	take.tranSelect(this, "ReplySearch", "BoardManagement.boardReplyList", "dsSearch", "dsReply", sParam, "fnCallback");
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
                case "Search" : //조회 콜백
                    //Script
        			var sLoginUserCd = take.getUser("USER_CD");
        			var sRegUserCd = this.dsNotice.getColumn(0, "REG_CD");

        			if( sLoginUserCd == sRegUserCd )
        			{
        				this.btnModify.set_visible(true);
        				this.btnDelete.set_visible(true);
        			}

        			var sContents = this.dsNotice.getColumn(0, "BOARD_TXT");

        			//20210118 정해원 게시판 내용 조회 불가
        			//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        			//this.wbWebEditor.getProperty("window").callMethod("fn_setHtml", sContents);
        			var docWeb = this.wbWebEditor.getProperty("document").getProperty("all");
        				docWeb.getProperty("inputData").setProperty("value", take.nvl(sContents, ""));

        			this.wbWebEditor.getProperty("window").callMethod("fn_setHtml");

        			var nLeft = 10, nTop = 10, nWidth = 125, nHeight = 25, nInterval = 10;
        			for( var i=0; i<this.dsFile.getRowCount(); i++ )
        			{
        				var sFileNm 	= this.dsFile.getColumn(i, "FILE_NM");
        				var sAttachCd 	= this.dsFile.getColumn(i, "ATTACH_CD");
        				var sFileSeq 	= this.dsFile.getColumn(i, "FILE_SEQ");
        				var objStatic 	= new Static();
        				var sId 		= "sta" + sAttachCd + "_" + sFileSeq;

        				objStatic.init(sId, nLeft, nTop, nWidth, nHeight, null, null);
        				objStatic.set_cssclass("sta_WF_fileData01");
        				objStatic.set_text( take.textLengthOverCut(sFileNm, 15, "...") );
        				objStatic.set_tooltiptext(sFileNm);
        				objStatic.attachCd = sAttachCd;
        				objStatic.fileSeq = sFileSeq;

        				this.divFile.addChild(sId, objStatic);

        				objStatic.addEventHandler( "onclick", this.staFile_onclick, this);
        				objStatic.show();

        				nLeft = nLeft + nWidth + nInterval;
        			}

        			// 마지막에 padding효과를 위해 공백 static추가
        			var objStatic = new Static();
        			var sId = "staBlank";
        			objStatic.init(sId, nLeft, nTop, 90, nHeight, null, null);
        			objStatic.set_text("");
        			this.divFile.addChild(sId, objStatic);
        			objStatic.show();

        			this.divFile.form.resetScroll();

                    break;
        		case "Delete" : //삭제 콜백
        			take.alert(this, "Info", "삭제가 완료되었습니다.");
        			this.fnGoList();

        			break;
        		case "ReplySave" : //댓글 등록 콜백
        			take.alert(this, "Info", "댓글 등록이 완료되었습니다.");

        			this.divReplyReg.form.taReplyTxt.set_value("");
        			this.fnReplySearch();

        			break;
        		case "ReplyDelete" : //댓글 삭제 콜백
        			take.alert(this, "", "댓글 삭제가 완료되었습니다.");
        			this.fnReplySearch();

        			break;
        		case "ReplyModify" : //댓글 수정 콜백
        			take.alert(this, "Info", "댓글 수정이 완료되었습니다.");
        			this.fnReplySearch();

        			break;
                default :
                    break;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.BM010P02_onload,this);
            this.addEventHandler("ontimer",this.BM010P02_ontimer,this);
            this.divFile.form.btnAllDown.addEventHandler("onclick",this.divFile_btnAllDown_onclick,this);
            this.wbWebEditor.addEventHandler("onloadcompleted",this.wbWebEditor_onloadcompleted,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnModify.addEventHandler("onclick",this.btnModify_onclick,this);
            this.livReply.addEventHandler("oncellclick",this.livReply_oncellclick,this);
            this.divReplyReg.form.btnReplyReg.addEventHandler("onclick",this.divReplyReg_btnReplyReg_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("BM010P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
