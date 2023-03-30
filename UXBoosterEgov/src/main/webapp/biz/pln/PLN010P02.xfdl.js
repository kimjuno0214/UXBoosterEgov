(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PLN010P02");
            this.set_background("#ffffff");
            this.set_titletext("품목 선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(1090,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REF1\" type=\"STRING\" size=\"255\"/><Column id=\"REF2\" type=\"STRING\" size=\"255\"/><Column id=\"REF3\" type=\"STRING\" size=\"255\"/><Column id=\"REF4\" type=\"STRING\" size=\"255\"/><Column id=\"REF5\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdr", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrTest", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("Static01_00_01","0","41",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H5");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnProgramSearch",null,"20","50","21","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search03");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","46",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGdsNm","85","9","195","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","edtGdsNm:0","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","611","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnSearch","Static07_00_01:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("세부품목명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgramNm00","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDetailGdsNm","416","9","195","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","43.75%","89","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("세부품목 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.getSetter("takegrid").set("no,sort");
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"230\"/><Column size=\"230\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"인증분야\"/><Cell col=\"2\" text=\"인증종류\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"세부품목명\"/><Cell col=\"5\" text=\"법정분류코드\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" suppress=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:CERT_FLD_CD\" textAlign=\"left\" suppress=\"0\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" text=\"bind:CERT_KND_CD\" textAlign=\"left\" suppress=\"0\" combodataset=\"dsCertKndCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:GDS_CD\" textAlign=\"left\" suppress=\"0\" edittype=\"none\" expandshow=\"hide\" expandsize=\"21\" displaytype=\"combotext\" combodataset=\"dsGdsCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltext=\"bind:GDS_NM\" combodisplaynulltype=\"nulltext\"/><Cell col=\"4\" text=\"bind:DETAIL_GDS_NM\" textAlign=\"left\" suppress=\"0\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:STTY_PRDUCT_CL_CD\" edittype=\"none\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","99",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","0","43",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,null,"57","23","btnCancel:3","20",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("선택");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtGdsNm.set_taborder("3");
                p.edtGdsNm.move("85","9","195","20",null,null);

                p.Static07_00_01.set_taborder("0");
                p.Static07_00_01.set_text("50");
                p.Static07_00_01.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01.set_visible("false");
                p.Static07_00_01.set_color("#ff0000");
                p.Static07_00_01.set_textAlign("center");
                p.Static07_00_01.move("edtGdsNm:0","0","50",null,null,"0");

                p.Static07_00_01_00.set_taborder("4");
                p.Static07_00_01_00.set_text("50");
                p.Static07_00_01_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01_00.set_visible("false");
                p.Static07_00_01_00.set_color("#ff0000");
                p.Static07_00_01_00.set_textAlign("center");
                p.Static07_00_01_00.move("611","0","50",null,null,"0");

                p.staUseYnSearch.set_taborder("1");
                p.staUseYnSearch.set_text("세부품목명");
                p.staUseYnSearch.set_cssclass("sta_WF_textR");
                p.staUseYnSearch.move("Static07_00_01:0","10","80","21",null,null);

                p.staProgramNm00.set_taborder("2");
                p.staProgramNm00.set_text("품목명");
                p.staProgramNm00.set_cssclass("sta_WF_textR");
                p.staProgramNm00.move("10","10","80","21",null,null);

                p.edtDetailGdsNm.set_taborder("5");
                p.edtDetailGdsNm.move("416","9","195","20",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("default0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static24.set_taborder("0");
                p.Static24.set_text("세부품목 목록");
                p.Static24.set_cssclass("sta_WF_title02");
                p.Static24.move("0","0",null,"21","0",null);

                p.gridMain.getSetter("takegrid").set("no,sort");
                p.gridMain.set_taborder("1");
                p.gridMain.set_autofittype("col");
                p.gridMain.set_binddataset("dsList");
                p.gridMain.set_autoenter("none");
                p.gridMain.move("0","26",null,null,"0","0");
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_autofittype("col");
                p.grdList.set_oncelldblclick("divSearch_grdList_oncelldblclick");
                p.grdList.set_binddataset("dsProgramCd");
                p.grdList.move("10","79",null,"350","10",null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1090,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtGdsNm","value","dsSearch","GDS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtDetailGdsNm","value","dsSearch","DETAIL_GDS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PLN010P02.xfdl", function() {
        /**
        *  일정코드등록
        *
        *  @MenuPath    안전성조사 > 계획관리 > 안전성조사계획 > 품목등록 팝업
        *  @FileName    PLN010P01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.02.08
        *  @Version     1.0
        *  @Desction    공통코드 일정코드(SCHDUL_CD) 등록
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.02.08      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_sOdrId = take.nvl(this.parent.sOdrId, "");
        this.fv_sCertFldCd = take.nvl(this.parent.sCertFldCd, "");

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
        		// 공통코드 조회
        		take.tranCode(this, ["CERT_FLD_CD", "CERT_KND_CD", "GDS_CD"]
        		                  , ["dsCertFldCd", "dsCertKndCd", "dsGdsCd"]
        						  , ["", "", ""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			this.fnSearch();
        		});

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
        	this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        	this.dsSearch.setColumn(0, "CERT_FLD_CD", this.fv_sCertFldCd);
        	this.dsSearch.setColumn(0, "USE_YN", "Y");

            take.tranSelect(this, "Search", "safety.odrGdsList", "dsSearch", "dsList", "", "fnCallback");
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
        	var sTranId = "Save";
        	this.dsOdr.setColumn(0, "ODR_ID", this.fv_sOdrId);
        	this.dsOdrTest.setColumn(0, "ODR_ID", this.fv_sOdrId);
        	//데이터셋 수정 여부 확인
        	if (!take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	this.dsList.set_updatecontrol(false);
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getRowType(i) == 4)
        		{
        			if(this.dsList.getColumn(i, "CHK")) this.dsList.setRowType(i, "I");
        			else this.dsList.setRowType(i, "D");
        		}
        	}
        	this.dsList.set_updatecontrol(true);

        	var sParam = "sNameSpace=safety.odrGdsMerge|safety.odrGdsMerge|safety.odrGdsDelete,"
        			   + "safety.mkOdrTest|safety.mkOdrTest|safety.mkOdrTest,"
        			   + "safety.mkInstDdln|safety.mkInstDdln|safety.mkInstDdln"
        	           + " sDataset=dsList|dsOdrTest|dsOdr";

        		take.transaction(this, sTranId, "SVC_LOC::doore/saveList.do", "dsList=dsList:U dsOdrTest=dsOdrTest:U dsOdr=dsOdr:U", "", sParam, "fnCallback");
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
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        // 검색조건 엔터 값 조회
        this.divSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
        	}
        };

        // 그리드 해더 클릭 이벤트 처리
        this.divDetail_gridMain_onheadclick = function(obj,e)
        {
        	if (e.col == 1) {
        		gFnClickHeadCheckBox(obj, "CHK");
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
                case "Save" : //저장 콜백
        			take.alert(this, "", "저장 되었습니다.");
        			this.fnClose();
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
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnProgramSearch.addEventHandler("onclick",this.fnSearch,this);
            this.divSearch.form.edtGdsNm.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.edtDetailGdsNm.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.gridMain.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.gridMain.addEventHandler("oncellclick",this.divDetail_gridMain_oncellclick,this);
            this.divDetail.form.gridMain.addEventHandler("onheadclick",this.divDetail_gridMain_onheadclick,this);
            this.btnCancel.addEventHandler("onclick",this.fnClose,this);
            this.btnEnter.addEventHandler("onclick",this.fnSave,this);
        };
        this.loadIncludeScript("PLN010P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
