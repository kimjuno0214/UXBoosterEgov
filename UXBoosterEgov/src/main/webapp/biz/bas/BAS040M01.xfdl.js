(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS040M01");
            this.set_titletext("시험기관 수수료 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_DIV_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestItemCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestInstCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
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

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("staCertiFldCd","356","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","446","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("어린이");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTestInstCd","25","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("시험기관");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTestInstCd","115","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTestInstCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGdsNm","Static07_01:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("시험항목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTestItemNm","staGdsNm:0","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_02","965","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("시험항목 수수료 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","26","800",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"DOC_KEY\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"시험기관\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"3\" text=\"인증분야\"/><Cell col=\"4\" text=\"시험항목\"/><Cell col=\"5\" text=\"수수료\"/></Band><Band id=\"body\"><Cell text=\"bind:DETAIL_GDS_ID\" textAlign=\"left\" suppress=\"1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" textAlign=\"center\" suppress=\"0\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsCertFldCdGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:TEST_INST_CD\" textAlign=\"left\" suppress=\"0\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:CERT_FLD_CD\" textAlign=\"left\" suppress=\"0\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:TEST_ITEM_CD\" textAlign=\"left\" suppress=\"0\" edittype=\"none\" expandshow=\"hide\" expandsize=\"21\" displaytype=\"combotext\" combodataset=\"dsTestItemCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:FEE\" textAlign=\"right\" suppress=\"0\" edittype=\"normal\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddTestItem",null,"324","110","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("  시험항목선택  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain00","0","26","800",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_autoenter("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"DOC_KEY\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"시험기관\" suppress=\"1\" textAlign=\"center\"/><Cell col=\"3\" text=\"인증종류\"/><Cell col=\"4\" text=\"품목명\"/><Cell col=\"5\" text=\"수수료\"/></Band><Band id=\"body\"><Cell text=\"bind:DETAIL_GDS_ID\" textAlign=\"left\" suppress=\"1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" textAlign=\"center\" suppress=\"0\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsCertFldCdGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:TEST_INST_CD\" textAlign=\"left\" suppress=\"0\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:CERT_KND_CD\" textAlign=\"left\" suppress=\"0\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCertKndCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:GDS_CD\" textAlign=\"left\" suppress=\"0\" edittype=\"none\" expandshow=\"hide\" expandsize=\"21\" displaytype=\"combotext\" combodataset=\"dsGdsCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:FEE\" textAlign=\"right\" suppress=\"0\" edittype=\"normal\" editinputtype=\"number\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboCertFldCd","value","dsSearch","CERT_FLD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboTestInstCd","value","dsSearch","TEST_INST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtTestItemNm","value","dsSearch","TEST_ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAS040M01.xfdl", function() {
        /**
        *  수수료관리
        *
        *  @MenuPath    기초정보 > 수수료관리
        *  @FileName    BAS040M01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.03.09
        *  @Version     1.0
        *  @Desction    수수료관리 화면
        *
        ************** 소스 수정 이력 ***************************************************
        *    date          Modifier            Description
        ************** 소스 수정 이력 ***************************************************
        *  2023.03.09      doore               최초 생성
        ************** 소스 수정 이력 ***************************************************
        */

        //공통 라이브러리 호출
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo	= nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd		= nexacro.getApplication().av_sProjectCd;
        this.fv_gdsInfo 			= "";
        this.fv_sMenuCd 			= "";
        this.fv_sTestInstCd 	= this.fv_objGdsUserInfo.getColumn(0, "TEST_INST_CD");
        this.fv_sRoleCd 			= this.fv_objGdsUserInfo.getColumn(0, "ROLE_CD");

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
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter);
        		// 공통코드 조회
        		take.tranCode(this, ["CERT_FLD_CD"
        		                    ,"CERT_KND_CD"
        							,"TEST_ITEM_CD"
        							,"TEST_INST_CD"
        							,"GDS_CD"]
        		                  , ["dsCertFldCd"
        						    ,"dsCertKndCd"
        							,"dsTestItemCd"
        							,"dsTestInstCd"
        							,"dsGdsCd"]
        						  , ["","","","ALL",""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			// 시험기관
        			if(this.fv_sRoleCd == "R0004" || this.fv_sRoleCd == "R0005")
        			{
        				this.divSearch.form.cboTestInstCd.set_value(this.fv_sTestInstCd);
        				this.divSearch.form.cboTestInstCd.set_readonly(true);
        			}
        			else
        			{
        				this.divSearch.form.cboTestInstCd.set_index(0);
        			}

        			this.divSearch.form.cboCertFldCd.set_index(0);

        			if(this.divSearch.form.cboCertFldCd.text == "전기용품")
        			{
        				this.divDetail.form.gridMain.set_visible(false);
        				this.divDetail.form.gridMain00.set_visible(true);
        			}
        			else
        			{
        				this.divDetail.form.gridMain.set_visible(true);
        				this.divDetail.form.gridMain00.set_visible(false);
        			}

        			this.fnSearch();
        		});

           }
        }

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
        			if (this.dsList.rowcount > 0)
        			{
        				var nRowCount = this.dsList.rowcount.toLocaleString("ko-KR");
        				this.divDetail.form.staTitle01.set_text("시험항목 수수료 목록 ("+nRowCount+"건)");
        			}
        			else {
        				this.divDetail.form.staTitle01.set_text("시험항목 수수료 목록");
        			}

        			trace(this.dsList.saveXML());

        			break;
        		case "Save"	 :
        			take.alert(this, "", "저장 되었습니다.");
        			this.fnSearch();

        			break;
                case "Delete" :
        			take.alert(this, "", "삭제가 완료되었습니다.");
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
        	var sParam = "";
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

        	this.dsList.clearData();
        	this.dsSearch.setColumn(0, "TEST_DIV_CD", "02");	// 개별시험

        	if(this.divSearch.form.cboCertFldCd.text == "전기용품")
        	{
        		take.tranSelect(this, "Search", "basicInfo.testInstGdsFeeSelect", "dsSearch ", "dsList", "", "fnCallback");
        	}
        	else
        	{
        		take.tranSelect(this, "Search", "basicInfo.testInstFeeSelect", "dsSearch ", "dsList", "", "fnCallback");
        	}
        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
        	var sParam = "";
        	if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	//데이터셋 수정 여부 확인
        	if (!take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	// FEE_ID가 없는 경우 Insert 처리
        	this.dsList.set_updatecontrol(false);
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(take.isEmpty(this.dsList.getColumn(i, "FEE_ID"))) this.dsList.setRowType(i, "I");
        	}
        	this.dsList.set_updatecontrol(true);

        	var sParam = "sNameSpace=basicInfo.testInstFeeInsert|basicInfo.testInstFeeUpdate|basicInfo.testInstFeeDelete" +
        		         " sDataset=dsList";
        	take.transaction(this, "Save", "SVC_LOC::doore/saveList.do", "dsList=dsList:U","", sParam, "fnCallback");
        };

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
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {

        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/

        /*
        	코드그룹 검색조건 엔터 값 조회
        */
        this.divSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
        	}
        };

        /* 인증분야 변경 이벤트 */
        this.divSearch_cboCertFldCd_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        	if(this.divSearch.form.cboCertFldCd.text == "전기용품")
        	{
        		this.divDetail.form.gridMain.set_visible(false);
        		this.divDetail.form.gridMain00.set_visible(true);
        	}
        	else
        	{
        		this.divDetail.form.gridMain.set_visible(true);
        		this.divDetail.form.gridMain00.set_visible(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.cboCertFldCd.addEventHandler("onitemchanged",this.divSearch_cboCertFldCd_onitemchanged,this);
            this.divSearch.form.edtTestItemNm.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divDetail.form.gridMain.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.btnAddTestItem.addEventHandler("onclick",this.divDetail_btnAddTestItem_onclick,this);
            this.divDetail.form.gridMain00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS040M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
