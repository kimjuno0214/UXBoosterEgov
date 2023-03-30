(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PLN010M01");
            this.set_titletext("시료관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOdr", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_YR\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DIV_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ODR\" type=\"STRING\" size=\"255\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"THEMA\" type=\"STRING\" size=\"255\"/><Column id=\"TOTQY\" type=\"STRING\" size=\"255\"/><Column id=\"BGNG_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRS_STTUS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdDivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_YR\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DIV_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgrsSttusCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSplore", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrdYr","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staPrefixT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조사연도");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboOrdYr","110","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("2022");
            obj.set_value("2022");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","630","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCertFldCd","Static07_01:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","staCertFldCd:0","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("어린이");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrdDivCd","Static07:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("정시/수시");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboOrdDivCd","staOrdDivCd:0","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsOrdDivCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProgListTitle","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("안전성조사 차수");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridOdr","0","staProgListTitle:5","390",null,null,"6",null,null,null,null,this.divDetail.form);
            obj.getSetter("takegrid").set("sort");
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOdr");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"정기/수시\"/><Cell col=\"2\" text=\"차수\"/><Cell col=\"3\" text=\"인증분야\"/><Cell col=\"4\" text=\"진행상태\"/><Cell col=\"5\" text=\"시작일자\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR_YR\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ODR_DIV_CD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsOrdDivCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" text=\"bind:ODR\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CERT_FLD_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:PROGRS_STTUS_CD\" textAlign=\"left\" combodataset=\"dsProgrsSttusCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:BGNG_YMD\" textAlign=\"left\" cssclass=\"expr:PROGRS_STTUS_CD == &apos;01&apos;?&apos;grd_WF_green&apos;:Column4 == &apos;03&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;\" combodataset=\"dsProgrsSttusCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("DivRight","gridOdr:10","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnTab00","0","0","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("4");
            obj.set_text("시료등록");
            obj.set_cssclass("btn_WF_tab02");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Button("btnTab01","btnTab00:-1","0","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("0");
            obj.set_text("시료관리");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Button("btnTab02","btnTab01:-1","0","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("1");
            obj.set_text("시료인계");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab00","0","btnTab00:-1",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("true");
            obj.set_async("false");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab01","0","btnTab00:-1",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("3");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("true");
            obj.set_async("false");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab02","10","btnTab00:-1",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("5");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("true");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","10",null,null,"0",null,null,null,null,this);
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

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab00.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab00.form,function(p){});
            this.divDetail.form.DivRight.form.divTab00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab01.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab01.form,function(p){});
            this.divDetail.form.DivRight.form.divTab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab02.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab02.form,function(p){});
            this.divDetail.form.DivRight.form.divTab02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form,function(p){});
            this.divDetail.form.DivRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboOrdYr","value","dsSearch","ODR_YR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboOrdDivCd","value","dsSearch","ODR_DIV_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboCertFldCd","value","dsSearch","CERT_FLD_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SPL010M01.xfdl", function() {
        /**
        *  안전성조사 시료관리
        *
        *  @MenuPath    안정성조사 > 시료관리 > 시료관리
        *  @FileName    SPL010M01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.03.23
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.03.23      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_divTab0;
        this.fv_divTab1;
        this.fv_divTab2;
        this.fv_sOdrId;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj,e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {

        		this.divDetail.form.DivRight.form.divTab00.set_url("biz::spl/SPL010S01.xfdl");
        		//this.divDetail.form.DivRight.form.divTab01.set_url("biz::pln/PLN010S02.xfdl");
        		//this.divDetail.form.DivRight.form.divTab02.set_url("biz::pln/PLN010S03.xfdl");

        		// sub form과 parent form 연결
        		this.fv_divTab0 = this.divDetail.form.DivRight.form.divTab00.form;
        		this.fv_divTab0.fv_parentForm = this;
        		/*
        		this.fv_divTab1 = this.divDetail.form.DivRight.form.divTab01.form;
        		this.fv_divTab1.fv_parentForm = this;
        		this.fv_divTab2 = this.divDetail.form.DivRight.form.divTab02.form;
        		this.fv_divTab2.fv_parentForm = this;
        		this.fv_divTab3 = this.divDetail.form.DivRight.form.divTab03.form;
        		this.fv_divTab3.fv_parentForm = this;
        		*/
        		var objList = {"this.divDetail.form.DivRight.form.btnTab00" : this.divDetail.form.DivRight.form.divTab00,
        	                   "this.divDetail.form.DivRight.form.btnTab01" : this.divDetail.form.DivRight.form.divTab01,
        					   "this.divDetail.form.DivRight.form.btnTab02" : this.divDetail.form.DivRight.form.divTab02};
                var sTabId = "tab01";
                var objFirstLoad = this.divDetail.form.DivRight.form.btnTab00;

                take.TabSetting(this, sTabId, objList, objFirstLoad);

        		// 공통코드 조회
        		take.tranCode(this, ["YEAR"
        		                    ,"ODR_DIV_CD"
        							,"CERT_FLD_CD"
        							,"PROGRS_STTUS_CD"]
        		                  , ["dsYear"
        						    ,"dsOrdDivCd"
        							,"dsCertFldCd"
        							,"dsProgrsSttusCd"]
        						  , ["","ALL","ALL",""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			this.divSearch.form.cboOrdDivCd.set_index(0);
        			this.divSearch.form.cboCertFldCd.set_index(0);

        			gFn_getDbValue(this, function(rtnValue) {

        				this.divSearch.form.cboOrdYr.set_value(rtnValue.resultData.substr(0, 4));
        				this.fnSearch();
        			}, "Doore.selectToDay");
        		});

           }
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

        	this.dsOdr.clearData();
        	// 시험기관검토 이후 자료 조회
        	take.tranSelect(this, "Search", "safety.odrSelect", "dsSearch", "dsOdr", "", "fnCallback");

        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
        	if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	this.dsSplore = this.fv_divTab0.dsSplore;

        	//데이터셋 수정 여부 확인
            if (!take.isDsModified(this.dsSplore))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	// dateaset 상태가 수정 중이고 등록번호가 없는 경우 rowtype insert 처리
        	this.dsSplore.set_updatecontrol(false);
        	for(var i = 0; i < this.dsSplore.rowcount; i++)
        	{
        		if(this.dsSplore.getRowType(i) == "4" && take.isEmpty(this.dsSplore.getColumn(i, "REG_SPLORE_NO")))
        		{
        			this.dsSplore.setRowType(i, "I");
        		}
        	}
        	this.dsSplore.set_updatecontrol(true);
        	this.dsOdr.set_enableevent(false);
        	// 작업중인 차수id
        	this.fv_sOdrId = this.dsOdr.getColumn(this.dsOdr.rowposition, "ODR_ID");

        	var sParam = "sNameSpace=splore.sploreInsert|splore.sploreUpdate|splore.sploreDelete" +							// 시료(TB_SPLORE) 등록, 수정, 삭제
        			     " sDataset=dsSplore";

        	take.transaction(this, "Save", "SVC_LOC::doore/saveList.do", "dsSplore=dsSplore:U", "", sParam, "fnCallback");

        };

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
        	if(this.divDetail.form.DivRight.form.divTab00.enable)
        	{
        		this.fv_divTab0.fnAddRow();
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
        	if(this.divDetail.form.DivRight.form.divTab00.enable)
        	{
        		this.fv_divTab0.fnDelRow();
        	}
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 안전성조사 차수 dsOdr_onrowposchanged 이벤트 */
        this.dsOdr_onrowposchanged = function(obj,e)
        {
        	//시료등록 조회
        	this.fv_divTab0.fnSearch();
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

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
        			this.dsOdr.set_rowposition(99999);
        			this.dsOdr.set_enableevent(true);
        			var nRow = this.dsOdr.findRow("ODR_ID", this.fv_sOdrId);
        			if(nRow < 0) nRow = 0;
        			this.dsOdr.set_rowposition(nRow);
                    break;
                case "Save" :  //저장 콜백
        			take.alert(this, "", "저장 되었습니다.");
        			this.fnSearch();
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
            this.divDetail.form.gridOdr.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.DivRight.form.btnTab00.addEventHandler("onclick",this.btnTab00_onclick,this);
            this.divDetail.form.DivRight.form.btnTab01.addEventHandler("onclick",this.btnTab01_onclick,this);
            this.divDetail.form.DivRight.form.btnTab02.addEventHandler("onclick",this.btnTab02_onclick,this);
            this.dsOdr.addEventHandler("onrowposchanged",this.dsOdr_onrowposchanged,this);
        };
        this.loadIncludeScript("SPL010M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
