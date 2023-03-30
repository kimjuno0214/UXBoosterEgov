(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comJusoGovPopup");
            this.set_titletext("행자부 주소 팝업");
            this.set_cssclass("form_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(570,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj._setContents("<ColumnInfo><Column id=\"zipNo\" type=\"STRING\" size=\"256\"/><Column id=\"roadAddr\" type=\"STRING\" size=\"256\"/><Column id=\"roadAddrPart1\" type=\"STRING\" size=\"256\"/><Column id=\"roadAddrPart2\" type=\"STRING\" size=\"256\"/><Column id=\"jibunAddr\" type=\"STRING\" size=\"256\"/><Column id=\"detBdNmList\" type=\"STRING\" size=\"256\"/><Column id=\"engAddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Search", this);
            obj._setContents("<ColumnInfo><Column id=\"jusonm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"jusonm\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Search",null,"5","66","28","15",null,"60",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","15","112",null,null,"15","69",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_List");
            obj.set_autofittype("col");
            obj.set_nodatatext("no results found");
            obj.getSetter("griduserproperty").set("filter");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"410\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"주소\"/><Cell col=\"2\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:roadAddr\"/><Cell col=\"2\" rowspan=\"3\" text=\"bind:zipNo\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"bind:jibunAddr\"/><Cell row=\"2\" col=\"1\" text=\"bind:detBdNmList\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","84","220","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("도로명주소 검색 결과");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_PopButton","39.12%",null,"125","32",null,"7",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Ok","6","0","55","25",null,null,null,null,null,null,this.div_PopButton.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_ok");
            this.div_PopButton.addChild(obj.name, obj);

            obj = new Button("btn_Cancle","63","0","55","25",null,null,null,null,null,null,this.div_PopButton.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_ok");
            this.div_PopButton.addChild(obj.name, obj);

            obj = new Div("div_Search","15","38",null,"41","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_Search");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Label01","15","9","100","21",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_searchTitle");
            obj.set_text("주소입력");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_Search","sta_Label01:10","9",null,"21","15",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("도로명주소, 건물명 또는 지번입력");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static19","0","0","15","471",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("W15");
            obj.set_background("HSLA(0,100%,50%,0.27)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","555","0","15","471",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("W15");
            obj.set_background("HSLA(0,100%,50%,0.27)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","308","79","35","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H33");
            obj.set_background("HSLA(0,100%,50%,0.27)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_Page","15",null,null,"20","15","49",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_GrdCnt","15",null,null,"20","15","50",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_Total");
            this.addChild(obj.name, obj);

            obj = new Static("Static13",null,"0","60","18","59",null,null,null,null,null,this.div_GrdCnt.form);
            obj.set_taborder("1");
            obj.set_text("Total");
            obj.set_cssclass("sta_Total");
            this.div_GrdCnt.addChild(obj.name, obj);

            obj = new Static("sta_Count","Static13:13","0","41","18",null,null,null,null,null,null,this.div_GrdCnt.form);
            obj.set_text("0");
            obj.set_taborder("0");
            obj.set_cssclass("sta_Total2");
            this.div_GrdCnt.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_PopButton.form
            obj = new Layout("default","",0,0,this.div_PopButton.form,function(p){});
            this.div_PopButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Page.form
            obj = new Layout("default","",0,0,this.div_Page.form,function(p){});
            this.div_Page.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_GrdCnt.form
            obj = new Layout("default","",0,0,this.div_GrdCnt.form,function(p){});
            this.div_GrdCnt.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",570,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Search.form.edt_Search","value","ds_Search","jusonm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comJusoGovPopup.xfdl", function() {
        /******************************************************************************
        * Name     	: comJusoGovPopup.xfdl
        * Title    	: 행자부 주소 팝업
        * Desc     	:
        * 작성자	: 공통팀
        * 작성일	: 2018-11-07
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.11.07     	    공통팀	            	최초 생성
        *******************************************************************************
        */
        var wv_objJusoFrame = this.getOwnerFrame(); //현재 Child Frame
        this.fv_nPos = 0;     //그리드 스크롤 위치
        this.fv_nPageNo = 0;  //현재 페이지
        this.fv_sKeyword="";  //검색문자
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /***************************************************************************
         * Even   : form_onload
         * Desc   : 초기화 영역
         ****************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//N/A
        };

        /************************************************************************************************
         * Load 후 초기설정 및 Data Setting
         ************************************************************************************************/
        //N/A

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // /***************************************************************************
        //  * Even   : btn_Close_onclick
        //  * Desc   : 상단의 닫기버튼 클릭 이벤트
        //  ****************************************************************************/
        // this.btn_Close_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	this.close("NO");
        // };

        /***************************************************************************
         * Even   : div_PopButton_btn_Cancle_onclick
         * Desc   : 하단의 닫기버튼 클릭 이벤트
         ****************************************************************************/
        this.div_PopButton_btn_Cancle_onclick = function(obj,e)
        {
        	this.close("NO");
        };

        /***************************************************************************
         * Even   : div_PopButton_btn_Ok_onclick
         * Desc   : 확인버튼 클릭 이벤트
         ****************************************************************************/
        this.div_PopButton_btn_Ok_onclick = function(obj,e)
        {
        	this.close("OK");
        };

        /***************************************************************************
         * Even   : btn_Search_onclick
         * Desc   : 조회버튼 클릭 이벤트
         ****************************************************************************/
        this.btn_Search_onclick = function(obj,e)
        {
        	//변수 선언
        	var sKeyWord; //검색 키워드

        	//에티터의 입력된 텍스트를 데이터셋에 반영
        	this.div_Search.form.edt_Search.updateToDataset();
        	//입력된 검색 키워드
        	sKeyWord = this.ds_Search.getColumn(0,"jusonm");

        	//검색 키워드 벨리데이션 체크
        	if (!this.fn_CheckSearchedWord(sKeyWord))
        	{
        		return;
        	}

        	//우편번호 검색을 위한 기본 값 세팅
        	this.fv_sKeyword = sKeyWord;  //검색 키워드
        	this.fv_nPageNo=1;            //페이지 초기화

        	//데이터 초기화
        	this.ds_List.clearData();

        	//우편번호 검색
        	this.fn_Search();
        };

        /***************************************************************************
         * Even   : div_Search_edit_onkeyup
         * Desc   : 검색조건 키업 이벤트.
         ****************************************************************************/
        this.div_Search_edit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) this.btn_Search.click();
        };

        /***************************************************************************
         * Even   : grd_List_onvscroll
         * Desc   : 수직 스크롤 이벤트.
         ****************************************************************************/
        this.grd_List_onvscroll = function(obj,e)
        {
        	//현재 스크롤 위치가 마지막 이면 데이터 조회
        	if (e.pos==obj.vscrollbar.max)
        	{
        		//trace("vscroll max --> " + this.fv_pageno);
        		//전체 검색 가능한 수 보다 작을 경우 조회
        		if (nexacro.toNumber(this.div_GrdCnt.form.sta_Count.text)!=this.ds_List.rowcount)
        		{
        			//에티터의 입력된 텍스트를 데이터셋에 반영
        			this.div_Search.form.edt_Search.updateToDataset();
        			//trace("this.fv_sKeyword --> " + this.fv_sKeyword + " / this.ds_Search.getColumn(0,jusonm) --> " + this.ds_Search.getColumn(0,"jusonm"));
        			//현재 키워드와 이전 키워드 비교해서 같은 경우만 재 검색
        			if (this.fv_sKeyword == this.ds_Search.getColumn(0,"jusonm"))
        			{
        				this.fv_nPageNo++;
        				this.fn_Search();
        			} else { //키워드가 틀릴 경우 초기화 후 조회
        				this.btn_Search.click();
        			}
        		}
        	}
        };

        /***************************************************************************
         * Even   : grd_List_oncelldblclick
         * Desc   : Cell 더블 클릭 이벤트.
         ****************************************************************************/
        this.grd_List_oncelldblclick = function(obj,e)
        {
        	//선택후 닫기 함수 호출
        	this.fn_Close();
        };
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /***************************************************************************
         * Even   : fn_UserFunction
         * Desc   : 모든 데이터 초기화
         ****************************************************************************/
        this.fn_Close = function()
        {
        	//변수 선언 및 세팅
        	var arrRtnJuso = new Array();
        	var objDs = this.ds_List;
        	var nRow = objDs.rowposition;
        	var sRtn;

        // 	arrRtnJuso[0] = objDs.getColumn(nRow, "zipNo"); // 우편번호(도로명 기준)
        // 	arrRtnJuso[1] = objDs.getColumn(nRow, "roadAddrPart1"); // 도로명주소1
        // 	arrRtnJuso[2] = objDs.getColumn(nRow, "roadAddrPart2"); // 도로명주소2
        // 	arrRtnJuso[3] = objDs.getColumn(nRow, "jibunAddr");	// 지번주소
        // 	arrRtnJuso[4] = "";	// 상세주소
        //
        // 	var objRtn = new Object();
        //
        // 	objRtn[0] = objDs.getColumn(nRow, "zipNo"); // 우편번호(도로명 기준)
        // 	objRtn[1] = objDs.getColumn(nRow, "roadAddrPart1"); // 도로명주소1
        // 	objRtn[2] = objDs.getColumn(nRow, "roadAddrPart2"); // 도로명주소2
        // 	objRtn[3] = objDs.getColumn(nRow, "jibunAddr");	// 지번주소
        // 	objRtn[4] = "";	// 상세주소

        	//선택한 데이터를 String으로 전달 (구분자로 전각특수문자 사용:"　")
        	sRtn = objDs.getColumn(nRow, "zipNo")                // 우편번호(도로명 기준)
        	     + "　" + objDs.getColumn(nRow, "roadAddrPart1") // 도로명주소1
        		 + "　" + objDs.getColumn(nRow, "roadAddrPart2") // 도로명주소2
        		 + "　" + objDs.getColumn(nRow, "jibunAddr");	 // 지번주소
        		 + "　";                                         // 상세주소
        	//trace("arrRtnJuso --> " + arrRtnJuso);
        	//팝업 닫기
        	this.close(sRtn);
        }

         /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /***************************************************************************
         * Even   : fn_Search
         * Desc   : 조회 함수.
         ****************************************************************************/
        this.fn_Search = function()
        {
        	//변수 선언 및 세팅
        	var objXHR;
        	var nCurrentPage, nCountPerPage ;
        	var sKeyword, sConfmKey, sApiUrl, sResultType;


        	//전용브라우저일경우 기능 사용 안됨
        	if (nexacro._Browser=="Runtime")
        	{
        		trace("전용브라우저에서는 사용할 수 없는 기능입니다.");
        		return false;

        	} else {
        		//Ajax 통신을 위해 http request 세팅
        		if (window.XMLHttpRequest) { // 모질라, 사파리, IE7+ ...
        			objXHR = new XMLHttpRequest();
        		//} else if (window.ActiveXObject) { // IE 6 이하
        		} else {
        			objXHR = new ActiveXObject("Microsoft.XMLHTTP");
        		}
        	}

        	//그리드 페이지 처리
        	//이미 조회된 데이터가 있을경우 현재 스크롤 위치를 가져온다.
        	if (this.ds_List.rowcount>0)
        	{
        		this.fv_nPos = this.grd_List.getVScrollPos();
        	} else { //처음 조회인 경우 스크롤 위치를 최 상단으로 세팅
        		this.fv_nPos = 0;
        	}
        	//프로그래스바 실행
        	this.setWaitCursor(true);

        	//Ajax 통신 콜백 세팅
        	objXHR.onreadystatechange = function()
        								{
        									if (objXHR.readyState === 4) {
        										if (objXHR.status === 200) {
        											//성공일 경우 폼에 콜백 호출
        											wv_objJusoFrame.form.fnXHRCallBack(objXHR.responseText);
        											//프로그래스바 실행 중지
        											wv_objJusoFrame.form.setWaitCursor(false);
        										}
        									}
        								};

        	//기본 파라메터 세팅
        	nCurrentPage  = this.fv_nPageNo;                                   //현재 페이지 번호
        	nCountPerPage = 10;                                                //페이지당 출력할 결과 Row 수
        	sKeyword      = encodeURI( this.ds_Search.getColumn(0,"jusonm") ); //주소 검색어
        	sConfmKey     = "U01TX0FVVEgyMDE4MTEwMjEzNTU1NzEwODI3NDg=";        //신청시 발급받은 승인키 (검색용API 키)
        	sResultType   = 'json';                                            //검색결과형식 설정(xml, json)

        	//Get 방식 Url 세팅
        	sApiUrl = "http://www.juso.go.kr/addrlink/addrLinkApiJsonp.do?"
        	        + "currentPage="   + nCurrentPage
        			+ "&countPerPage=" + nCountPerPage
        			+ "&keyword="      + sKeyword
        			+ "&confmKey="     + sConfmKey
        			+ "&resultType="   + sResultType;

        	//오픈 및 전송
        	objXHR.open("GET", sApiUrl, "true");
        	objXHR.send(null);
        }

        /**************************************************************************************
         * Even   : fn_CheckSearchedWord
         * Desc   : 특수문자, 특정문자열(sql예약어의 앞뒤공백포함) 제거
         *          도로명주소 API 호출시 검색어에 특수문자 또는 OR, INSERT, UNION 등
         *          SQL예약어가 포함될 경우 보안장비가 SQL INJECTION공격으로 간주하여
         *          해당 IP를 차단시킬 수 있으므로 해당 함수에서 체크 필요
         ***************************************************************************************/
        this.fn_CheckSearchedWord = function(sKeyWord)
        {
        	//변수 선언
        	var sExpText;
        	var arrSqlText;
        	var objRegEx;

        	//검색어 자리수 체크 : 2자 이상만 검색 가능
        	if (sKeyWord.length<2)
        	{
        		take.alert(this, "info","2자 이상 주소를 입력하셔야합니다.");
        		return false;
        	}

        	//특수문자 유무 확인
        	sExpText = /[%=><]/ ;
        	if(sExpText.test(sKeyWord) == true)
        	{
        		take.alert(this, "info","특수문자를 입력 할수 없습니다.") ;
        		return false;
        	}

        	//Sql 예약어 세팅
        	arrSqlText = new Array("OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC","UNION",  "FETCH", "DECLARE", "TRUNCATE");

        	//Sql 예약어 유무 확인
        	for(var i=0; i<arrSqlText.length; i++)
        	{
        		//해당 예약어가 포함되어 있는지 1차 체크
        		objRegEx = new RegExp(arrSqlText[i],"gi") ;
        		if (objRegEx.test(sKeyWord))
        		{
        			take.alert(this, "info",arrSqlText[i] + "와(과) 같은 특정문자로 검색할 수 없습니다.");
        			return false;
        		}

        		//해당 예약어가 포함되어 있는지2차 체크
        		objRegEx = new RegExp("\\s" + arrSqlText[i] + "\\s","gi") ;
        		if (objRegEx.test(sKeyWord)) {
        			take.alert(this, "info",arrSqlText[i] + "와(과) 같은 특정문자로 검색할 수 없습니다.");
        			return false;
        		}

        		//해당 예약어가 포함되어 있는지 3차 체크
        		objRegEx = new RegExp("\\+" + arrSqlText[i] + "\\+","gi") ;
        		if (objRegEx.test(sKeyWord))
        		{
        			take.alert(this, "info",arrSqlText[i] + "와(과) 같은 특정문자로 검색할 수 없습니다.");
        			return false;
        		}
        	}

        	return true ;
        }
        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        /***************************************************************************
         * Even   : fnXHRCallBack
         * Desc   : 로직처리 callback
         ****************************************************************************/
        this.fnXHRCallBack = function(sText)
        {
        	//변수 선언
        	var objJson, objHeader, objJuso, objDs, objGrid;
        	var arrJuso;
        	var nCnt, nTotal;

        	//받아온 데이터가 Json 타입이므로 Object 형태로 변환
        	objJson = eval(sText);

        	//Header 정보
        	//Desc) countPerPage : "10"    (한페이지에 표현할 행 수)
        	//      currentPage  : "1"     (현재페이지)
        	//      errorCode    : "0"     (에러코드)
        	//      errorMessage : "정상" (에러코드내용)
        	//      totalCount   : "334"   (전체행수)
        	objHeader = objJson.results.common;

        	//에러 발생시
        	if (objHeader.errorCode!=0)
        	{
        		trace("주소조회 Error");
        		return;
        	}

        	//전체 데이터 수
        	nTotal = nexacro.toNumber(objHeader.totalCount);

        	//전체 데이터 수 표현
        	this.div_GrdCnt.form.sta_Count.set_text(nTotal);

        	//주소 데이터
        	//Desc) admCd         : "1138010900"                                   (관리자코드)
        	//      bdKdcd        : "0"                                            (건물종코드)
        	//      bdMgtSn       : "1138010900100210020015414"                    (건물관리번호)
        	//      bdNm          : "두원빌딩"                                    (건물명)
        	//      buldMnnm      : "46"                                           (건물번호중)
        	//      buldSlno      : "0"                                            (건물번호소)
        	//      detBdNmList   : ""                                             (건물리스트)
        	//      emdNm         : "신사동"                                      (동명)
        	//      emdNo         : "04"                                           (동번호)
        	//      engAddr       : "46, Eunpyeong-ro, Eunpyeong-gu, Seoul"        (영문주소)
        	//      jibunAddr     : "서울특별시 은평구 신사동 21-20 두원빌딩"  (지번주소)
        	//      liNm          : ""                                             (리명)
        	//      lnbrMnnm      : "21"                                           (지번중)
        	//      lnbrSlno      : "20"                                           (지번소)
        	//      mtYn          : "0"                                            (?)
        	//      rn            : "은평로"                                      (도로명)
        	//      rnMgtSn       : "113803111007"                                 (도로관리번호)
        	//      roadAddr      : "서울특별시 은평구 은평로 46 (신사동)"     (도로명주소)
        	//      roadAddrPart1 : "서울특별시 은평구 은평로 46"               (도로명주소1)
        	//      roadAddrPart2 : " (신사동)"                                   (도로명주소2)
        	//      sggNm         : "은평구"                                      (시/구)
        	//      siNm          : "서울특별시"                                 (도/시)
        	//      udrtYn        : "0"                                            (?)
        	//      zipNo         : "03449"                                        (우편번호)
        	arrJuso = objJson.results.juso;

        	//리스트 데이터셋
        	objDs = this.ds_List;

        	//리스트 그리드
        	objGrid = this.grd_List;

        	//주소데이터 수
        	nCnt = arrJuso.length;

        	//그리드와 데이터셋에 이벤트가 발생하지 않도록 세팅
        	objGrid.set_enableevent(false);
        	objDs.set_enableevent(false);

        	//데이터 수 만큼 반복
        	for (var i=0;i<nCnt;i++)
        	{
        		//주소 데이터 Object
        		objJuso = arrJuso[i];
        		//데이터 셋에 행 추가
        		nRow = objDs.addRow();
        		//주소 정보 세팅
        		objDs.setColumn(nRow, "zipNo"         ,objJuso.zipNo);         //우편번호
        		objDs.setColumn(nRow, "jibunAddr"     ,objJuso.jibunAddr);     //지번주소
        		objDs.setColumn(nRow, "roadAddr"      ,objJuso.roadAddr);      //도로명주소
        		objDs.setColumn(nRow, "roadAddrPart1" ,objJuso.roadAddrPart1); //도로명주소1 (도로명주소)
        		objDs.setColumn(nRow, "roadAddrPart2" ,objJuso.roadAddrPart2); //도로명주소2 (동정보)
        		objDs.setColumn(nRow, "detBdNmList"   ,objJuso.detBdNmList);   //건물명리스트
        	}
        	//그리드와 데이터셋에 이벤트가 발생하도록 세팅
        	objDs.set_enableevent(true);
        	objGrid.set_enableevent(true);

        	//그리드 스크롤 세팅
        	objGrid.vscrollbar.set_pos(this.fv_nPos);
        }

        /***************************************************************************
         * Even   : static drag
         * Desc   : 타이틀 static 마우스 이동
         ****************************************************************************/
        this.sta_Title_onlbuttondown = function(obj,e)
        {
        	down_x = e.canvasx;
        	down_y = e.canvasy;
        	//trace("objFrame ::" + objFrame);
        	window.onmousemove = this.logMouseMove;
        };

        this.sta_Title_onlbuttonup = function(obj,e)
        {
        	window.onmousemove = "";
        };

        this.logMouseMove = function(e) {
        	e = event || window.event;
        	mousePos = { x: e.clientX, y: e.clientY };
        	objFrame.move(mousePos.x - down_x, mousePos.y - down_y);
        	//trace(mousePos.x - down_x);
        	//trace(mousePos.y - down_y);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_Search.addEventHandler("onclick",this.btn_Search_onclick,this);
            this.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.grd_List.addEventHandler("onvscroll",this.grd_List_onvscroll,this);
            this.div_PopButton.form.btn_Ok.addEventHandler("onclick",this.div_PopButton_btn_Ok_onclick,this);
            this.div_PopButton.form.btn_Cancle.addEventHandler("onclick",this.div_PopButton_btn_Cancle_onclick,this);
            this.div_Search.form.edt_Search.addEventHandler("onkeyup",this.div_Search_edit_onkeyup,this);
            this.div_Search.form.edt_Search.addEventHandler("oninput",this.div_Search_edit_oninput,this);
        };
        this.loadIncludeScript("comJusoGovPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
