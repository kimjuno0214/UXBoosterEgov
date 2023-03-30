(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM030P02");
            this.set_titletext("코드조회");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","45",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staName","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("코드명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","staName:10","10",null,"21","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","0","43",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,null,"57","23","80","20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","95",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","80",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("Query 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCodeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"255\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",450,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AM030P02.xfdl", function() {
        /**
        *  Query 조회
        *
        *  @MenuPath    화면생성 > Query조회
        *  @FileName    AM030P01.xfdl
        *  @Creator     천우성
        *  @CreateDate  2021.06.21
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2021.06.21      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
        	this.ProgId="AM030P02";
            this.ProgNm="코드 조회";

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
            if (take.nvl(sTranId, "")=="") sTranId = "select";
            this.dsCodeList.clearData();

        	var sParam;
        	sParam = "CODE_NM='" + take.nvl(this.divSearch.form.edtName.value, "") + "'";

        	take.tranSelect(
                        this,                      //현재 Form 객체
                        sTranId,                   //Transaction Id
                        "SystemCommon.codeInfoGroup",  //sqlMapperId
                        "",                        //Indataset(서버로 보낼 dataset)
                        "dsCodeList",                  //Outdataset(서버에서 받을 dataset)
                        sParam,                    //Parameter
                        "fnCallBack");             //Call Back 함수명 (함수를 바로 사용 가능)
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 조회버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
            this.fnSearch();
        };

        //확인버튼 클릭 이벤트
        this.btnEnter_onclick = function(obj,e)
        {
            this.fnSendData();
        };

        // 그리드 더블버튼 클릭 이벤트
        this.divSearch_grdList_oncelldblclick = function(obj,e)
        {
        	this.fnSendData();
        };

        // Enter 값 처리
        this.divSearch_edtCode_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fnSearch();
        	}
        };

        // 닫기 버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @param  {String} N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	//if(!take.isEmpty(this.getOwnerFrame().argInSearchText)){
        		//this.divSearch.form.edtCode.set_value(this.getOwnerFrame().argInSearchText);
        		this.fnSearch('initSearch');
        	//}
        };

        /**
         * fnSendData : 그리드의 선택된 데이터 값 넘기기
         * @param  {String} N/A
         * @example this.fnSendData();
         */
        this.fnSendData = function()
        {
        	var dsObj = this.dsCodeList;
        	var returnObj;

        	if(dsObj.rowposition > -1){
        		returnObj = this.fnDataset2Object(dsObj, dsObj.rowposition);
        	}

        	this.fnClose(this, returnObj);
        };

        /**
         * fnDataset2Object : dataset 특정행을 object로 변환
         */
        this.fnDataset2Object = function(obj, nRow)
        {
        	var objRtn	= {};

        	for (var i=0; i<obj.getColCount(); i++)
        	{
        		var strColId	 = obj.getColID(i);
        		objRtn[strColId] = obj.getColumn(nRow, strColId);
        	}
        	return objRtn;
        };

        /**
         * fnClose : 부모창으로 변수 전달
         */
        this.fnClose = function(o, variant)
        {
        	var pThis  = o;

        	if (pThis.opener && typeof variant != "string") {
        		variant = take.nvl(variant, "");
        		pThis.opener.objRtn = variant;
        		pThis.close();
        	}else{
        		pThis.close(variant);
        	}
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
        		case "initSearch" :
        			if(this.dsCodeList.getRowCount() == 1){
        				//this.fnSendData();
        			}
                    break;
                case "select" :
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
            this.divSearch.form.edtName.addEventHandler("onkeyup",this.divSearch_edtCode_onkeyup,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnEnter.addEventHandler("onclick",this.btnEnter_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divDetail.form.grdList.addEventHandler("oncelldblclick",this.divSearch_grdList_oncelldblclick,this);
            this.dsCodeList.addEventHandler("onrowposchanged",this.dsQueryList_onrowposchanged,this);
        };
        this.loadIncludeScript("AM030P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
