(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM010");
            this.set_titletext("공지사항목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","Static00:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRegUser","Static05:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTermT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFrom","staTermT:10","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","calFrom:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTo","Static10:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("공지사항 목록조회");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsNotice");
            obj.getSetter("takegrid").set("sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"69\"/><Column size=\"25\"/><Column size=\"403\"/><Column size=\"138\"/><Column size=\"132\"/><Column size=\"109\"/><Column size=\"114\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" colspan=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일자\"/><Cell col=\"5\" text=\"조회 수\"/><Cell col=\"6\" text=\"파일 수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"imagecontrol\" text=\"expr:NEW_YN == &apos;Y&apos; ? &apos;theme://images/img_icon_new.png&apos; : &apos;&apos;\" border=\"1px solid #d7d7d7,0px solid #d7d7d7,1px solid #d7d7d7,1px solid #d7d7d7\"/><Cell col=\"2\" text=\"bind:BOARD_TITLE\" textAlign=\"left\" displaytype=\"normal\" cssclass=\"expr:IMPORT_YN == &apos;Y&apos; ? &apos;import&apos; : &apos;&apos;\" padding=\"0px 0px 0px 0px\"/><Cell col=\"3\" text=\"bind:REG_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:REG_DT\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:READ_CNT\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ATTACH_CNT\" textAlign=\"center\" cursor=\"pointer\"/></Band></Format></Formats>");
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
            obj = new BindItem("item0","divSearch.form.edtTitle","value","dsSearch","BOARD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtRegUser","value","dsSearch","REG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calFrom","value","dsSearch","REG_DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calTo","value","dsSearch","REG_DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CM010.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = "";

        this.fv_objUserParam = null;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.CM010_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		var objProgInfo = take.getProgInfo(this);
        		this.fv_sMenuCd = objProgInfo.ProgId;
        		this.fv_objUserParam = objProgInfo.UserParam;

        		this.fnSearch();
           }
        };

        /*********************************************************
         * 2.1 CALLBACK 콜백 처리부분
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
        		case "Search" :
        			break;
                case "Delete" : //삭제 콜백
                    //Script
        			//take.alert(this, "", "삭제가 완료되었습니다.");
        			take.alert(this, "Info", "MS00000003");
        			this.fnSearch();
                    break;
                default :
                    break;
            }
        };

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAdd, fnDelRow)
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

        	var sCalFrom = this.dsSearch.getColumn(0, "REG_DT_FROM");
        	var sCalTo	 = this.dsSearch.getColumn(0, "REG_DT_TO");
        	if( !take.isEmpty(sCalFrom) && !take.isEmpty(sCalTo) ){
        		var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        		if( !bFromTo ){
        			//take.alert(this, "", "작성일이 잘못되었습니다.");
        			take.alert(this, "Info", "MS00000023", {text:sCalFrom, date:sCalTo});
        			return;
        		}
        	}

        	this.dsSearch.setColumn(0, "PROJECT_CD"		, this.fv_sProjectCd);
        	this.dsSearch.setColumn(0, "MENU_CD"		, this.fv_sMenuCd);

        	this.dsNotice.clearData();
            take.tranSelect(this, "Search", "BoardManagement.boardInfoList", "dsSearch", "dsNotice", "", "fnCallback");
        };

        /**
         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //Script
        	this.fnCallPopup("", "", "CM010P03");
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
            //Script
        	//var bConfirm = take.confirm(this, "", "해당 글을 삭제하시겠습니까?");
        	var bConfirm = take.confirm(this, "question", "MS00000071");
        	if( !bConfirm )
        	{
        		return false;
        	}

        	var sAttachCd = this.dsNotice.getColumn(this.dsNotice.rowposition, "BOARD_ATTACH");
        	var sBoardSeq = this.dsNotice.getColumn(this.dsNotice.rowposition, "BOARD_SEQ");

        	var sParam = "";
        	sParam += "sProjectCd="+this.fv_sProjectCd+"";
        	sParam += " sMenuCd="+this.fv_sMenuCd+"";
        	sParam += " sBoardSeq="+sBoardSeq+"";
        	sParam += " sAttachCd="+sAttachCd+"";
        	take.transaction(this, "Delete", "SVC_LOC::cm/boardDelete.do", "dsNotice=dsNotice:U dsFile=dsFile:U", "", sParam, "fnCallback");
        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        /**
         * divDetail_gridMain_oncelldblclick : 메인 그리드 cell 더블클릭
         */
        this.divDetail_gridMain_oncelldblclick = function(obj,e)
        {
        	var bindName = take.getBindColName(obj, e.cell);
        	if(bindName == "BOARD_TITLE"){
        		var sBoardSeq 		= this.dsNotice.getColumn( e.row, "BOARD_SEQ" );
        		var sBoardAttach 	= this.dsNotice.getColumn( e.row, "BOARD_ATTACH" );

        		this.fnCallPopup(sBoardSeq, sBoardAttach, "CM010P02");
        	}
        };

        /**
        * gridMain_oncellclick : 메인 그리드 cell 클릭
        */
        this.gridMain_oncellclick = function(obj,e)
        {
        	var bindName = take.getBindColName(obj, e.cell);
        	if(bindName == "ATTACH_CNT"){
        		// 파일 일괄 다운로드
        		var sAttachCd = this.dsNotice.getColumn(e.row, "BOARD_ATTACH");
        		var downloadUrl = take.getSvcUrl() + "zipDownload.do";
        			downloadUrl += "?sAttachCd="+sAttachCd;

        		this.FileDownTransfer00.set_url(downloadUrl);
        		this.FileDownTransfer00.download();
        	}else if(bindName == "READ_CNT"){
        		var sBoardSeq = this.dsNotice.getColumn(e.row, "BOARD_SEQ" );
        		this.fnCallPopup(sBoardSeq, "", "CM010P01");
        	}
        };

        this.divSearch_edtTitle_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fnSearch();
        	}
        };


        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        this.fnCallPopup = function(sBoardSeq, sBoardAttach, sPopForm)
        {
        	var arrParam = {
        					sBoardSeq 	 : sBoardSeq
        				  , sBoardAttach : sBoardAttach
        				  , sProjectCd	 : this.fv_sProjectCd
        				  , sMenuCd		 : this.fv_sMenuCd
        				  };

        	take.openPopup(this, sPopForm, "frm::mod/"+sPopForm+".xfdl", arrParam, "resizable=true",
        		function(){
        			this.fnSearch();
        		}
        	);

        	//take.openMenuPop("M0072",arrParam);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CM010_onload,this);
            this.divSearch.form.edtTitle.addEventHandler("onkeyup",this.divSearch_edtTitle_onkeyup,this);
            this.divSearch.form.edtRegUser.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divDetail.form.gridMain.addEventHandler("oncellclick",this.gridMain_oncellclick,this);
            this.divDetail.form.gridMain.addEventHandler("oncelldblclick",this.divDetail_gridMain_oncelldblclick,this);
        };
        this.loadIncludeScript("CM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
