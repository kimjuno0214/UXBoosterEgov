(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PLN020M01");
            this.set_titletext("안전성조사계획검토");
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
            obj._setContents("<ColumnInfo><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_YR\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRS_STTUS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgrsSttusCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckKey", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchdul", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrGds", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestInstCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOgdpCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrGdsQy", this);
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

            obj = new Static("Static07_01_00","954","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTestInstCd","Static07_01_00:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("시험기관");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTestInstCd","staTestInstCd:0","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsTestInstCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("어린이");
            obj.set_value("어린이");
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

            obj = new Button("btnSpliter00","400","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridOdr","0","26",null,null,"btnSpliter00:10","173",null,null,null,null,this.divDetail.form);
            obj.getSetter("takegrid").set("sort");
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOdr");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"년도\" cssclass=\"cellImport\"/><Cell col=\"1\" text=\"정기/수시\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"차수\" cssclass=\"cellImport\"/><Cell col=\"3\" text=\"인증분야\" cssclass=\"cellImport\"/><Cell col=\"4\" text=\"진행상태\" cssclass=\"cellImport\"/><Cell col=\"5\" text=\"시작일자\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell text=\"bind:ODR_YR\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ODR_DIV_CD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsOrdDivCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" text=\"bind:ODR\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CERT_FLD_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:INST_PROGRS_STTUS_CD\" textAlign=\"left\" combodataset=\"dsProgrsSttusCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:BGNG_YMD\" textAlign=\"left\" cssclass=\"expr:PROGRS_STTUS_CD == &apos;01&apos;?&apos;grd_WF_green&apos;:Column4 == &apos;03&apos;?&apos;grd_WF_sky&apos;:&apos;&apos;\" combodataset=\"dsProgrsSttusCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("DivRight","btnSpliter00:10","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","0","0",null,"21","-30",null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Grid("gridGds","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOdrGds");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"94\"/><Column size=\"200\"/><Column size=\"94\"/><Column size=\"94\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"인증종류\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목계획수량\" autosizecol=\"limitmin\"/><Cell col=\"3\" rowspan=\"2\" text=\"세부품목명\" autosizecol=\"limitmin\"/><Cell col=\"4\" rowspan=\"2\" text=\"가능여부\" autosizecol=\"limitmin\"/><Cell col=\"5\" rowspan=\"2\" text=\"최대가능수량\" autosizecol=\"limitmin\" cssclass=\"cellImport\"/><Cell col=\"6\" colspan=\"2\" text=\"시험 불가 기간\" autosizecol=\"limitmin\"/><Cell col=\"8\" rowspan=\"2\" text=\"비고\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"6\" text=\"시작일\"/><Cell row=\"1\" col=\"7\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:CERT_KND_CD\" suppress=\"1\" displaytype=\"combotext\" combodataset=\"dsCertKndCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:GDS_CD\" suppress=\"2\" combodataset=\"dsGdsCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"combotext\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:GDS_PLAN_QY\" autosizecol=\"limitmin\" textAlign=\"center\" edittype=\"none\" displaytype=\"number\" suppress=\"3\"/><Cell col=\"3\" text=\"bind:DETAIL_GDS_NM\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:POSBL_YN_CD\" edittype=\"combo\" autosizecol=\"limitmin\" textAlign=\"center\" combodataset=\"dsYn\" combodisplaynulltext=\"Y\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltype=\"nulltext\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:POSBL_QY\" autosizecol=\"limitmin\" textAlign=\"center\" edittype=\"expr:POSBL_YN_CD == &apos;Y&apos;?&apos;normal&apos;:&apos;none&apos;\" editinputtype=\"number\"/><Cell col=\"6\" text=\"bind:IMPRTY_BGNDE\" edittype=\"expr:POSBL_YN_CD == &apos;N&apos;?&apos;date&apos;:&apos;none&apos;\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:IMPRTY_ENDDE\" edittype=\"expr:POSBL_YN_CD == &apos;N&apos;?&apos;date&apos;:&apos;none&apos;\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:RM\" autosizecol=\"limitmin\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Button("btnReviewCom",null,"0","105","21","0",null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("2");
            obj.set_text("  검토완료  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
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

            obj = new BindItem("item3","divSearch.form.cboTestInstCd","value","dsSearch","TEST_INST_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PLN020M01.xfdl", function() {
        /**
        *  안전성조사 계획관리
        *
        *  @MenuPath    안정성조사 > 계획관리 > 안전성조사계획검토
        *  @FileName    PLN020M01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.02.28
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.02.28      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sTestInstCd = "";
        this.fv_nWorkRow = 0;

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
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter00);

        		// 공통코드 조회
        		take.tranCode(this, ["YEAR"
        		                    ,"ODR_DIV_CD"
        							,"CERT_FLD_CD"
        							,"TEST_INST_CD"
        							,"YN"
        							,"CERT_KND_CD"
        							,"GDS_CD"
        							,"PROGRS_STTUS_CD"
        							,"OGDP_CD"]
        		                  , ["dsYear"
        						    ,"dsOrdDivCd"
        							,"dsCertFldCd"
        							,"dsTestInstCd"
        							,"dsYn"
        							,"dsCertKndCd"
        							,"dsGdsCd"
        							,"dsProgrsSttusCd"
        							,"dsOgdpCd"]
        						  , ["","ALL","ALL","","","","","",""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			this.divSearch.form.cboOrdDivCd.set_index(0);
        			this.divSearch.form.cboCertFldCd.set_index(0);

        			gFn_getDbValue(this, function(rtnValue) {
        				this.divSearch.form.cboOrdYr.set_value(rtnValue.resultData.substr(0, 4));
        				// 권한별 시험기관 세팅
        				//2023.03.02 김준오 _ 시스템관리자('99')와 국가표준원('01')을 제외한 나머지 기관들은 시험기관 선택값을 고정
        				if(this.fv_objGdsUserInfo.getColumn(0,"OGDP_CD") != '99' && this.fv_objGdsUserInfo.getColumn(0,"OGDP_CD") != '01' )
        				{
        					this.divSearch.form.cboTestInstCd.set_enable(false);
        					this.divSearch.form.cboTestInstCd.set_value(this.dsSearch.getColumn(0,"TEST_INST_CD"));
        				}
        				else
        				{
        					this.divSearch.form.cboTestInstCd.set_enable(true);
        					this.divSearch.form.cboTestInstCd.set_index(0);
        				}
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

        	//데이터셋 수정 여부 확인
        	if (!take.isDsModified(this.dsOdrGds))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	for(var i = 0; i < this.dsOdrGds.rowcount; i++)
        	{
        		if(this.dsOdrGds.getColumn(i, "POSBL_YN_CD") == 'N')
        		{
        			if(this.dsOdrGds.getColumn(i, "IMPRTY_BGNDE")=="")
        			{
        				take.alert(this,"info","가능여부가 'N'인 경우 시험불가기간 시작일은 필수 입력항목 입니다.");
        				this.dsOdrGds.set_rowposition(i);
                        //해당 컬럼에 위치시키기
                        this.divDetail.form.DivRight.form.gridGds.setCellPos(6);
        				this.divDetail.form.DivRight.form.gridGds.showEditor(true);
        				return false;
        			}
        			if(this.dsOdrGds.getColumn(i, "IMPRTY_ENDDE")=="")
        			{
        				take.alert(this,"info","가능여부가 'N'인 경우 시험불가기간 종료일은 필수 입력항목 입니다.");
        				this.dsOdrGds.set_rowposition(i);
                        //해당 컬럼에 위치시키기
                        this.divDetail.form.DivRight.form.gridGds.setCellPos(7);
        				this.divDetail.form.DivRight.form.gridGds.showEditor(true);
        				return false;
        			}
        			if(this.dsOdrGds.getColumn(i, "RM")=="")
        			{
        				take.alert(this,"info","가능여부가 'N'인 경우 시험불가기간 비고는 필수 입력항목 입니다.");
        				this.dsOdrGds.set_rowposition(i);
                        //해당 컬럼에 위치시키기
                        this.divDetail.form.DivRight.form.gridGds.setCellPos(8);
        				this.divDetail.form.DivRight.form.gridGds.showEditor(true);
        				return false;
        			}
        		}
        	}

        	this.dsOdrGdsQy = this.dsOdrGds;

        	var sParam = "sNameSpace=safety.odrGdsInstMerge|safety.odrGdsInstMerge|safety.odrGdsInstDelete"
        					+ " sDataset=dsOdrGds";

        	take.transaction(this, sTranId, "SVC_LOC::doore/saveList.do", "dsOdrGds=dsOdrGds:U", "", sParam, "fnCallback", false);

        };

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
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
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 안전성조사 차수 dsOdr_onrowposchanged 이벤트 */
        this.dsOdr_onrowposchanged = function(obj,e)
        {
        	this.dsSearch.setColumn(0, "ODR_ID", this.dsOdr.getColumn(e.newrow, "ODR_ID"));
        	this.dsOdrGds.clearData();

        	// 검포완료 버튼 VISIBLE & 그리드 edit 처리
        	var sSttusCd = this.dsOdr.getColumn(e.newrow, "INST_PROGRS_STTUS_CD");
        	if(sSttusCd == "02") {
        		this.divDetail.form.DivRight.form.btnReviewCom.set_visible(true);
        		this.divDetail.form.DivRight.form.gridGds.set_readonly(false);

        	}
        	else
        	{
        		this.divDetail.form.DivRight.form.btnReviewCom.set_visible(false);
        		this.divDetail.form.DivRight.form.gridGds.set_readonly(true);
        	}

        	if(this.dsOdr.rowposition <0) return false;

        	// 기관별 대상 품목 조회
        	take.tranSelect(this, "SearchOdrGds", "safety.odrGdsInstuUpdateSelect", "dsSearch", "dsOdrGds", "", "fnCallback");
        };


        /* 시험기관 콤보 변경 이벤트 */
        this.divSearch_cboTestInstCd_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
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
        			this.dsOdr.set_enableevent(true);
        			this.dsOdr.set_rowposition(this.fv_nWorkRow);
                    break;
                case "Save" :  //저장 콜백
        			take.alert(this, "", "저장 되었습니다.");
        			this.fnSearch();

                    break;
                default :
                    break;
            }
        };

        //2023.03.02 김준오 _ dsOdrGds 데이터셋에서 가능여부를 변경할 때 다른 컬럼의 데이터값을 clear해주는 이벤트
        this.dsOdrGds_oncolumnchanged = function(obj,e)
        {
        	var sTestInstCd = this.divSearch.form.cboTestInstCd.value;

        	var sYnResult = this.dsOdrGds.getColumn(this.dsOdrGds.rowposition, "POSBL_YN_CD");

        	if(sYnResult =='Y')
        	{
        		this.dsOdrGds.setColumn(this.dsOdrGds.rowposition, "IMPRTY_BGNDE", "");
        		this.dsOdrGds.setColumn(this.dsOdrGds.rowposition, "IMPRTY_ENDDE", "");
        		this.dsOdrGds.setColumn(this.dsOdrGds.rowposition, "RM", "");
        	}
        	else if(sYnResult =='N')
        	{
        		this.dsOdrGds.setColumn(this.dsOdrGds.rowposition, "POSBL_QY", "0");
        	}
        };

        // 검토완료 처리
        this.divDetail_DivRight_btnReviewCom_onclick = function(obj,e)
        {
        	//데이터셋 수정 여부 확인
        	if (take.isDsModified(this.dsOdrGds))
            {
                take.alert(this, "Info", "변경된 데이터가 있습니다. 저장 후 작업하여 주십시오.");
                return false;
            }

        	if(!take.confirm(this, "Info", "검토완료시 가능수량을 수정할 수 없습니다.\n\n검토완료 하시겠습니까?")) return false;

        	var sTestInstCd = this.divSearch.form.cboTestInstCd.value;
        	// 최대가능수량 입력 확인
        	for(var i = 0; i < this.dsOdrGds.rowcount; i++)
        	{
        		var sCnt = this.dsOdrGds.getColumn(i, "POSBL_QY");
        		if(take.isEmpty(sCnt))
        		{
        			take.alert(this,"info","최대가능수량을 입력후 완료하여 주십시오.");
        			this.dsOdrGds.set_rowposition(i);
        			//해당 컬럼에 위치시키기
        			this.divDetail.form.DivRight.form.gridGds.setCellPos(5);
        			this.divDetail.form.DivRight.form.gridGds.showEditor(true);
        			return false;
        		}
        	}

        	var sParam = "sNameSpace=safety.mngProgrsSttus|safety.mngProgrsSttus|safety.mngProgrsSttus"
        					+ " sDataset=dsSearch";

        	this.dsSearch.set_updatecontrol(false);
        	this.dsSearch.setRowType(0, "U");
        	this.dsSearch.set_updatecontrol(true);
        	this.dsSearch.setColumn(0, "PROGRS_STTUS_CD", "03");
        	take.transaction(this, "updateSttus", "SVC_LOC::doore/saveList.do", "dsSearch=dsSearch:A", "", sParam, function(){
        		this.dsSearch.setColumn(0, "PROGRS_STTUS_CD", "");
        		this.fnSearch();
        	});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.cboOrdYr.addEventHandler("onitemchanged",this.divSearch_cboPrefix_onitemchanged,this);
            this.divSearch.form.cboTestInstCd.addEventHandler("onitemchanged",this.divSearch_cboTestInstCd_onitemchanged,this);
            this.divDetail.form.btnSpliter00.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.btnSpliter00.addEventHandler("onclick",this.divDetail_btnSpliter00_onclick,this);
            this.divDetail.form.gridOdr.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.DivRight.form.btnReviewCom.addEventHandler("onclick",this.divDetail_DivRight_btnReviewCom_onclick,this);
            this.dsOdr.addEventHandler("onrowposchanged",this.dsOdr_onrowposchanged,this);
            this.dsCheckKey.addEventHandler("onrowposchanged",this.dsOdr_onrowposchanged,this);
            this.dsOdrGds.addEventHandler("oncolumnchanged",this.dsOdrGds_oncolumnchanged,this);
            this.dsOdrGdsQy.addEventHandler("oncolumnchanged",this.dsOdrGds_oncolumnchanged,this);
        };
        this.loadIncludeScript("PLN020M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
