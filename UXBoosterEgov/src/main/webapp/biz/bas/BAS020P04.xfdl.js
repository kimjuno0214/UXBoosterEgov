(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS020P04");
            this.set_titletext("적용일자 생성");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(493,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAplcnYmd", this);
            obj._setContents("<ColumnInfo><Column id=\"APLCN_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("적용일자 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","26","150",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.getSetter("takegrid").set("no,sort");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"0\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"적용일자\"/><Cell col=\"1\" text=\"Doc Key\"/></Band><Band id=\"body\"><Cell text=\"bind:APLCN_YMD\" textAlign=\"center\" edittype=\"none\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:CODE_KEY\" textAlign=\"left\" wordWrap=\"char\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calAplcnYmd","grdList:10","26",null,"294","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_usetrailingday("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staSystemNmTitle","160","330","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("신규 적용일자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static10","258","330",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskAplcnYmd","staSystemNmTitle:5","335",null,"21","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("msk_WF_essential");
            obj.set_textAlign("center");
            obj.set_maskchar("_");
            obj.set_format("@@@@-@@-@@");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","0","43",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreate",null,null,"57","23","btnCancel:3","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("생성");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",493,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divDetail.form.calAplcnYmd","value","dsAplcnYmd","APLCN_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.mskAplcnYmd","value","dsAplcnYmd","APLCN_YMD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAS020P04.xfdl", function() {
        /**
        *  위해정보코드등록
        *
        *  @MenuPath    기초정보관리 > 시험항목관리
        *  @FileName    BAS020P03.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.01.27
        *  @Version     1.0
        *  @Desction    공통코드 위해정보(HARM_INFO_CD) 등록
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
        this.fv_sDetailGdsId = take.nvl(this.parent.sDetailGdsId, "");
        this.fv_sTestId = take.nvl(this.parent.sTestId, "");
        this.fv_sTestDivCd = take.nvl(this.parent.sTestDivCd,"");

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
        		gFn_getDbValue(this, function(rtnValue) {
        			this.dsAplcnYmd.setColumn(0, "APLCN_YMD", (rtnValue.resultData));
        			this.fnSearch();
        		}, "Doore.selectToDay");
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

        	this.dsList.clearData();

        	if(this.fv_sTestDivCd == "01") this.fv_sDetailGdsId = "GDS9999999999"

        	this.dsSearch.setColumn(0, "DETAIL_GDS_ID", this.fv_sDetailGdsId);
        	this.dsSearch.setColumn(0, "TEST_ID", this.fv_sTestId);

            take.tranSelect(this, "Search", "basicInfo.aplcnRefe", "dsSearch", "dsList", "", "fnCallback");
        }

        /**
         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {

        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function()
        {

        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {N/A} N/A
         * @return {N/A} N/A
         */
        this.fnDelRow = function()
        {

        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 닫기 버튼 클릭 이벤트 */
        this.fnClose = function()
        {
        	this.close();
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

        this.btnCreate_onclick = function(obj,e)
        {
        	var makeYmd = this.dsAplcnYmd.getColumn(0, "APLCN_YMD");
        	if(!take.isValidDate(makeYmd))
        	{
        		alert("날짜형식을 확인하여 주십시오.");
        		return false;
        	}
        	//동일한 날짜인지 확인
        	var checkColumn = "APLCN_YMD=='" + makeYmd + "'";

        	if(this.dsList.getCaseCount(checkColumn) > 0)
        	{
        		take.alert(this, "error", "동일한 적용일자가 존재합니다."  );
        		return false;
        	}


        	// 적용일자 등록 후 조회
        	var sParam = "sNameSpace=basicInfo.mkAplcnYmd"
        		       + " APLCN_YMD=" + makeYmd
        			   + " TEST_ID=" + this.fv_sTestId
        			   + " DETAIL_GDS_ID=" + this.fv_sDetailGdsId;
        	take.transaction(this, "mkAplcnYmd", "SVC_LOC::doore/saveByParam.do", "","", sParam, function(){
        			alert("적용일자가 추가 되었습니다.");
        			this.fnClose();
        	});

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divDetail.form.grdList.addEventHandler("oncelldblclick",this.btnEnter_onclick,this);
            this.divDetail.form.calAplcnYmd.addEventHandler("onchanged",this.Calendar08_onchanged,this);
            this.btnCancel.addEventHandler("onclick",this.fnClose,this);
            this.btnCreate.addEventHandler("onclick",this.btnCreate_onclick,this);
        };
        this.loadIncludeScript("BAS020P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
