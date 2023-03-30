(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM010P03");
            this.set_titletext("시험결과 일괄등록");
            this.set_cssclass("fm_work");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1370,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">SMP0001</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0001</Col><Col id=\"Column4\">DEHP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0002</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0002</Col><Col id=\"Column4\">DBP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0003</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0003</Col><Col id=\"Column4\">DINP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0004</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0004</Col><Col id=\"Column4\">DIDP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0005</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0005</Col><Col id=\"Column4\">DnOP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0006</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0006</Col><Col id=\"Column4\">DIBP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0007</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0007</Col><Col id=\"Column4\">금속 기질 재료(총 납 함유량)</Col><Col id=\"Column5\">10 미만</Col></Row><Row><Col id=\"Column0\">SMP0008</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0008</Col><Col id=\"Column4\">금속 기질 재료(총 카드뮴 함유량)</Col><Col id=\"Column5\">10 미만</Col></Row><Row><Col id=\"Column0\">SMP0009</Col><Col id=\"Column1\">PAT0001</Col><Col id=\"Column2\">부위1</Col><Col id=\"Column3\">TST0009</Col><Col id=\"Column4\">표시사항</Col></Row><Row><Col id=\"Column0\">SMP0010</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0010</Col><Col id=\"Column4\">DEHP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0011</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0011</Col><Col id=\"Column4\">DBP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0012</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0012</Col><Col id=\"Column4\">DINP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0013</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0013</Col><Col id=\"Column4\">DIDP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0014</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0014</Col><Col id=\"Column4\">DnOP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0015</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0015</Col><Col id=\"Column4\">DIBP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0016</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0016</Col><Col id=\"Column4\">페인트나 유사코팅(총 납 함유량)</Col><Col id=\"Column5\">10 미만</Col></Row><Row><Col id=\"Column0\">SMP0017</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0017</Col><Col id=\"Column4\">페인트나 유사코팅(총 카드뮴 함유량)</Col><Col id=\"Column5\">10 미만</Col></Row><Row><Col id=\"Column0\">SMP0018</Col><Col id=\"Column1\">PAT0002</Col><Col id=\"Column2\">부위2</Col><Col id=\"Column3\">TST0018</Col><Col id=\"Column4\">표시사항</Col></Row><Row><Col id=\"Column0\">SMP0019</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0019</Col><Col id=\"Column4\">DEHP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0020</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0020</Col><Col id=\"Column4\">DBP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0021</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0021</Col><Col id=\"Column4\">DINP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0022</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0022</Col><Col id=\"Column4\">DIDP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0023</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0023</Col><Col id=\"Column4\">DnOP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0024</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0024</Col><Col id=\"Column4\">DIBP(프탈레이트계 가소제)</Col><Col id=\"Column5\">0.01 미만</Col></Row><Row><Col id=\"Column0\">SMP0025</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0025</Col><Col id=\"Column4\">금속 기질 재료(총 납 함유량)</Col><Col id=\"Column5\">10 미만</Col></Row><Row><Col id=\"Column0\">SMP0026</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0026</Col><Col id=\"Column4\">금속 기질 재료(총 카드뮴 함유량)</Col><Col id=\"Column5\">10 미만</Col></Row><Row><Col id=\"Column0\">SMP0027</Col><Col id=\"Column1\">PAT0003</Col><Col id=\"Column2\">부위3</Col><Col id=\"Column3\">TST0027</Col><Col id=\"Column4\">표시사항</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">공통</Col><Col id=\"Column1\">유해원소 용출</Col><Col id=\"Column2\">최중결함</Col><Col id=\"Column3\">N</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">20230102</Col><Col id=\"Column6\">20231010</Col></Row><Row><Col id=\"Column0\">공통</Col><Col id=\"Column1\">총 납 함유량</Col><Col id=\"Column2\">최중결함</Col><Col id=\"Column3\">N</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">20230102</Col><Col id=\"Column6\">20230910</Col></Row><Row><Col id=\"Column0\">공통</Col><Col id=\"Column1\">총 카드뮴 함유량</Col><Col id=\"Column2\">최중결함</Col><Col id=\"Column3\">N</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">20230102</Col><Col id=\"Column6\">20230310</Col></Row><Row><Col id=\"Column0\">공통</Col><Col id=\"Column1\">프탈레이트계 가소제</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">공통</Col><Col id=\"Column1\">니트로사민류(경구용)</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column1\">폼알데하이드</Col><Col id=\"Column0\">공통</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column1\">표시사항</Col><Col id=\"Column0\">공통</Col><Col id=\"Column2\">경결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">5.2.1 기구의 부양특성</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">5.2.2 잔존부력</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">5.2.3 앚는 부분의 안전성</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">5.4.1 가장자리, 모서리부분 및 끝부분</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">5.4.2 작은 부품</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">유해원소 용출</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">총 납 함유량</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">총 카드뮴 함유량</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column0\">개별</Col><Col id=\"Column1\">프탈레이트계 가소제</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column1\">5.5 조립 및 부품</Col><Col id=\"Column0\">개별</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column1\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column0\">개별</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column1\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column0\">개별</Col><Col id=\"Column2\">최중결함</Col></Row><Row><Col id=\"Column1\">표시사항</Col><Col id=\"Column0\">개별</Col><Col id=\"Column2\">경결함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">DEHP</Col><Col id=\"Column2\">0.2</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column3\"/><Col id=\"Column4\">최중결함</Col><Col id=\"Column6\">20220429</Col><Col id=\"Column8\">SK22-00059K</Col><Col id=\"Column10\">Y</Col><Col id=\"Column5\"/><Col id=\"Column7\">2</Col><Col id=\"Column9\">1000000</Col></Row><Row><Col id=\"Column0\">DBP</Col><Col id=\"Column2\">0.1</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column3\"/><Col id=\"Column4\">최중결함</Col><Col id=\"Column5\"/><Col id=\"Column6\">20220429</Col><Col id=\"Column7\">2</Col><Col id=\"Column8\">SK22-00060K</Col><Col id=\"Column9\">1000000</Col></Row><Row><Col id=\"Column0\">BBP</Col><Col id=\"Column2\">0.008</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column3\"/><Col id=\"Column6\">20220429</Col><Col id=\"Column7\">2</Col><Col id=\"Column8\">SK22-00061K</Col><Col id=\"Column4\">합격</Col><Col id=\"Column5\"/><Col id=\"Column9\">1000000</Col></Row><Row><Col id=\"Column0\">DINP</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column2\">0.008</Col><Col id=\"Column4\">합격</Col></Row><Row><Col id=\"Column0\">DIDP</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column2\">0.008</Col><Col id=\"Column4\">합격</Col></Row><Row><Col id=\"Column0\">DnOP</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column2\">0.008</Col><Col id=\"Column4\">합격</Col></Row><Row><Col id=\"Column0\">DIBP</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column2\">0.008</Col><Col id=\"Column4\">합격</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시험결과 일괄등록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","10","36",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("takegrid").set("checkbox");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"시료번호\"/><Cell col=\"1\" text=\"부위ID\"/><Cell col=\"2\" text=\"부위명\"/><Cell col=\"3\" text=\"사험ID\"/><Cell col=\"4\" text=\"시험명\"/><Cell col=\"5\" text=\"기준값\"/><Cell col=\"6\" text=\"측정값\"/><Cell col=\"7\" text=\"판정\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"57","23","69","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","9","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("Button18_00_00",null,"9","110","21","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("  엑셀다운로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button18_00",null,"9","110","21","Button18_00_00:3",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("  엑셀업로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1370,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PL010P010.xfdl", function() {
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
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_divFile;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.CM010P03_onload = function(obj, e)
        {

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

        	var sNamespaces = new Array();
        		sNamespaces.push("BoardManagement.boardInfoDetail");
        		sNamespaces.push("BoardManagement.boardTargetList");

        	var sInDs = ["dsSearch"];

        	var sOutDs = new Array();
        		sOutDs.push("dsNotice");
        		sOutDs.push("dsNotiTarget");

        	//Script
        	take.tranSelect(this, "Search", sNamespaces, sInDs, sOutDs, "", "fnCallback");
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

        	this.dsPushInfo.setColumn(0, "BOARD_TITLE", this.edtTitle.value);
        	this.dsPushInfo.setColumn(0, "PROJECT_CD"	, this.fv_sProjectCd);
        	this.dsPushInfo.setColumn(0, "MENU_CD"		, this.fv_sMenuCd);
        	this.dsPushInfo.setColumn(0, "USER_NM"		, this.fv_objGdsUserInfo.getColumn(0,"USER_NM"));
        	this.dsPushInfo.setColumn(0, "TOKEN_VAL"	, "1");

        	var sCalFrom = this.divPopOption.form.calPopStartDt.value;
        	var sCalTo	 = this.divPopOption.form.calPopEndDt.value;
        	if( !take.isEmpty(sCalFrom) && !take.isEmpty(sCalTo) ){
        		var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        		if( !bFromTo ){
        			take.alert(this, "", "팝업공지일이 잘못되었습니다.");
        			return;
        		}
        	}

        	//공지사항에 "title" 글이 새로 올라왔습니다. (공지사항은 우선 하드코딩 --> 추후에 menu코드 가져와서 변경)
        	//작성자 : 이동건

        	//데이터변경 / 파일 수정 여부
        	if (!take.isDsModified(this.dsNotice)
        		&& !take.isDsModified(this.dsNotiTarget)
        		&& !this.fv_divFile.fn_isUpdate())
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	//파일 업로드 / 저장
        	this.fv_divFile.fnUploadSaveFileList(this,
        		function(rtnValue){
        			if(rtnValue.result){
        				take.transaction(this, "Save", "SVC_LOC::cm/boardSave.do", "dsNotice=dsNotice:U dsNotiTarget=dsNotiTarget:U dsPushInfo=dsPushInfo:U", "", "", "fnCallback");
        			}
        		}
        	);
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

        this.CM010P03_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);
                    this.wbWebEditor.getProperty("window").callMethod("fnEditorReady", (this.wbWebEditor.getOffsetHeight()-65));

        			if(!take.isEmpty(this.fv_sBoardSeq)){
        				this.fnSearch();
        			}else{
        				this.dsNotice.addRow();

        				//첨부파일 코드가 없을시 기준에 맞게 코드 생성
        				this.fv_divFile.fnSearchAtchFileId(this,
        					function(rtnValue){
        						this.dsNotice.setColumn(0, 'BOARD_ATTACH', rtnValue.resultData);
        						this.fv_divFile.fn_setAtchFileId(rtnValue.resultData);
        						this.fv_divFile.fnSearchFileList(this);
        					}
        				);
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
        	var bRowDel = take.confirm(this, "question", "삭제 하시겠습니까?");
        	if (!bRowDel) return;

        	this.fnDelRow();
        };

        this.btnPrev_onclick = function(obj,e)
        {
        	this.opener.fnCallPopup(this.fv_sBoardSeq, this.fv_sAttachCd, "CM010P02");
        	this.close();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        // 팝업공지대상자 조회
        this.divPopOption_btnSchPopTarget_onclick = function(obj,e)
        {
        	var arrParam = {};
        	take.openPopup(this, "CM050P01", "frm::mod/CM050P01.xfdl", arrParam, "resizable=false", "fnPopCallback", false);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        this.fnGoList = function()
        {
        	this.opener.fnSearch();
        	this.close();
        };

        // 초기 ui 세팅
        this.fnUISetting = function(objUserParam)
        {
        	var sAttachYn = "Y";

        	if(objUserParam){
        		if(objUserParam.attach_yn)
        			sAttachYn = take.nvl(objUserParam.attach_yn, "Y");
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
        			take.alert(this, "", "저장이 완료되었습니다.");
        			this.fnGoList();
                    break;
        		case "Delete" : //삭제 콜백
        			take.alert(this, "", "삭제가 완료되었습니다.");
        			this.fnGoList();

        			break;
                case "Search" :  //조회 콜백
                    //Script
        			var sContents = this.dsNotice.getColumn(0, "BOARD_TXT");
        			//20210118 정해원 게시판 내용 조회 불가
        			//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        			//this.wbWebEditor.getProperty("window").callMethod("setContents", sContents);
        			var docWeb = this.wbWebEditor.getProperty("document").getProperty("all");
        				docWeb.getProperty("inputData").setProperty("value", take.nvl(sContents, ""));

        			this.wbWebEditor.getProperty("window").callMethod("setContents");

        			//첨부파일 조회
        			var atchFileId = this.dsNotice.getColumn(0, 'BOARD_ATTACH');
        			this.fv_divFile.fn_setAtchFileId(atchFileId);
        			this.fv_divFile.fnSearchFileList();

        			var sTargets = "";
        			for( var i=0; i<this.dsNotiTarget.rowcount; i++ )
        			{
        				var sTargetNm = this.dsNotiTarget.getColumn(i, "TARGET_NM");
        				sTargets += "," + sTargetNm;
        			}
        			this.divPopOption.form.edtPopTarget.set_value(sTargets.substring(1));

                    break;
                default :
                    break;
            }
        };

        this.fnPopCallback = function(sPopId, sRtn)
        {
            switch(sPopId)
            {
                case "CM050P01" : // 공지대상추가 콜백
        			if( "" == take.nvl(sRtn, "") ) return false;

        			this.dsNotiTarget.deleteAll();
        			this.divPopOption.form.edtPopTarget.set_value("");

        			var arrTarget = sRtn.split("::");
        			var nTargetCnt = arrTarget.length;
        			var sPopTargets = take.nvl(this.divPopOption.form.edtPopTarget.value, "");

        			for( var i=0; i<nTargetCnt; i++ )
        			{
        				var arrInfo = arrTarget[i].split(",");
        				var sTargetCd = arrInfo[0];
        				var sTargetNm = arrInfo[1];
        				var sTargetType = arrInfo[2];

        				if( i > 0 ) sPopTargets += ",";

        				sPopTargets += sTargetNm;

        				var nRow = this.dsNotiTarget.addRow();
        				this.dsNotiTarget.setColumn(nRow, "TARGET_CD", sTargetCd);
        				this.dsNotiTarget.setColumn(nRow, "TARGET_NM", sTargetNm);
        				this.dsNotiTarget.setColumn(nRow, "TARGET_TYPE", sTargetType);
        				this.dsNotiTarget.setColumn(nRow, "PROJECT_CD", this.fv_sProjectCd);
        				this.dsNotiTarget.setColumn(nRow, "MENU_CD", this.fv_sMenuCd);
        				this.dsNotiTarget.setColumn(nRow, "BOARD_SEQ", this.dsNotice.getColumn(0, "BOARD_SEQ"));
        			}

        			this.divPopOption.form.edtPopTarget.set_value(sPopTargets);

                    break;
                default :
                    break;
            }
        };


        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnExcelUpload_onclick = function(obj,e)
        {
        	if(this.all["XImport"])
        	{
        		var objDel = this.removeChild("XImport");
        			objDel.destroy();
        			objDel = null;
        	}
            var objImport = new nexacro.ExcelImportObject("XImport", this);
            var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";

            objImport.set_importtype(nexacro.ImportTypes.EXCEL);
        	objImport.addEventHandler("onsuccess", this.fnExcelImport_onsuccess, this);
        	objImport.addEventHandler("onerror", this.fnExcelImport_onerror, this);

        	objImport.set_importurl(sSvcUrl);
        	objImport.importData("", "[Command=getsheetdata;body=!A3]", "dsExcelUpload");
        	objImport = null;

        };


        /*
        	excel 업로드 성공
        */
        this.fnExcelImport_onsuccess = function(obj,  e)
        {
        	var nCnt = this.dsExcelUpload.rowcount;
            this.dsList.clearData();
        	var startCol = 2;

        	for(var i = 0; i <= 50; i++) {
        		if(i == 0) {
        			this.fv_mpaStr = "Column0=Column1";
        		} else {
        			this.fv_mpaStr = this.fv_mpaStr + ",Column" + (i) + "=" + "Column" + (i+1);
        		}
        	}

        	for(var i = 0; i < nCnt; i++) {
        		var nRow = this.dsList.addRow();
        		this.dsList.copyRow(nRow,this.dsExcelUpload, i, this.fv_mpaStr);
        	}

        	this.grdMultilanguageInfo.selectRow(0);
        }

        /*
        	excel 업로드 실패
        */
        this.fnExcelImport_onerror = function(obj,  e)
        {
        	alert("excel upload 실패");
        }

        this.btnExport_onclick = function(obj,e)
        {
            //스크립트로 엑셀 Export --> (파일명, 시트명, 타이틀명)
            this.grdMultilanguageInfo.ExportExcelGrid("시험결과", "sheet01", "시험결과");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CM010P03_onload,this);
            this.addEventHandler("ontimer",this.CM010P03_ontimer,this);
            this.staProgDetailT00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.Button18_00_00.addEventHandler("onclick",this.btnExport_onclick,this);
            this.Button18_00.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
        };
        this.loadIncludeScript("PL010P010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
