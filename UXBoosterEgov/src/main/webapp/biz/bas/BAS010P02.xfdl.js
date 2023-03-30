(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS010P02");
            this.set_titletext("품목코드 등록");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"REF1\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_REF1\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_REF2\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_REF3\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_REF4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REF1\" type=\"STRING\" size=\"255\"/><Column id=\"REF2\" type=\"STRING\" size=\"255\"/><Column id=\"REF3\" type=\"STRING\" size=\"255\"/><Column id=\"REF4\" type=\"STRING\" size=\"255\"/><Column id=\"REF5\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnGrid", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertKndCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTestInstCd", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"CODE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
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

            obj = new Static("staProgramNm","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","staProgramNm:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","295","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","619","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnSearch","Static07_00_01_00:5","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnSearch:0","10","201","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgramNm00","Static07_00_01:0","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGdsNm","staProgramNm00:0","9","195","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
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
            obj.set_taborder("1");
            obj.set_text("품목코드 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"DOC_KEY\"/><Cell col=\"1\" text=\"인증분야\" cssclass=\"cellImport\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"2\" text=\"인증종류\" cssclass=\"cellImport\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"3\" text=\"품목명\" cssclass=\"cellImport\"/><Cell col=\"4\" text=\"간사기관\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"5\" text=\"우선인계여부\"/><Cell col=\"6\" text=\"정렬순번\" cssclass=\"cellImport\"/><Cell col=\"7\" text=\"사용여부\" cssclass=\"cellImport\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE_KEY\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:REF1\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;combo&apos;:&apos;none&apos;\" displaytype=\"combotext\" combodataset=\"dsCertFldCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltype=\"nulltext\" combodisplaynulltext=\"bind:REF1_NM\"/><Cell col=\"2\" text=\"bind:REF2\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;combo&apos;:&apos;none&apos;\" displaytype=\"combotext\" combodataset=\"dsCertKndCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltype=\"nulltext\" combodisplaynulltext=\"bind:REF2_NM\"/><Cell col=\"3\" text=\"bind:CODE_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:REF3\" textAlign=\"left\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsTestInstCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltype=\"nulltext\" combodisplaynulltext=\"bind:REF3_NM\"/><Cell col=\"5\" edittype=\"combo\" text=\"bind:REF4\" displaytype=\"combotext\" combodataset=\"dsUseYnGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"6\" text=\"bind:CODE_ORDER\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"7\" text=\"bind:USE_YN\" textAlign=\"center\" wordWrap=\"char\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsUseYnGrid\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDelHarmInfo",null,"0","110","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("  행삭제  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAddHarmInfo",null,"0","110","21","btnDelHarmInfo:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("  행추가  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDownExcel",null,"0","110","21","btnAddHarmInfo:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("  엑셀다운로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUploadExcel",null,"0","110","21","btnDownExcel:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("  엑셀업로드  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
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
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staProgramNm.set_taborder("0");
                p.staProgramNm.set_text("인증분야");
                p.staProgramNm.set_cssclass("sta_WF_textR");
                p.staProgramNm.move("10","10","80","21",null,null);

                p.cboCertFldCd.set_taborder("1");
                p.cboCertFldCd.set_innerdataset("dsCertFldCd");
                p.cboCertFldCd.set_codecolumn("CODE");
                p.cboCertFldCd.set_datacolumn("NAME");
                p.cboCertFldCd.set_text("");
                p.cboCertFldCd.set_value("어린이");
                p.cboCertFldCd.set_index("0");
                p.cboCertFldCd.move("staProgramNm:10","10","195","21",null,null);

                p.Static07_00_01.set_taborder("2");
                p.Static07_00_01.set_text("50");
                p.Static07_00_01.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01.set_visible("false");
                p.Static07_00_01.set_color("#ff0000");
                p.Static07_00_01.set_textAlign("center");
                p.Static07_00_01.move("295","0","50",null,null,"0");

                p.Static07_00_01_00.set_taborder("7");
                p.Static07_00_01_00.set_text("50");
                p.Static07_00_01_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_01_00.set_visible("false");
                p.Static07_00_01_00.set_color("#ff0000");
                p.Static07_00_01_00.set_textAlign("center");
                p.Static07_00_01_00.move("619","0","50",null,null,"0");

                p.staUseYnSearch.set_taborder("3");
                p.staUseYnSearch.set_text("사용여부");
                p.staUseYnSearch.set_cssclass("sta_WF_textR");
                p.staUseYnSearch.move("Static07_00_01_00:5","10","80","21",null,null);

                p.cboUseYn.set_taborder("4");
                p.cboUseYn.set_innerdataset("dsUseYn");
                p.cboUseYn.set_codecolumn("CODE");
                p.cboUseYn.set_datacolumn("NAME");
                p.cboUseYn.set_text("");
                p.cboUseYn.set_index("-1");
                p.cboUseYn.move("staUseYnSearch:0","10","201","21",null,null);

                p.staProgramNm00.set_taborder("5");
                p.staProgramNm00.set_text("품목명");
                p.staProgramNm00.set_cssclass("sta_WF_textR");
                p.staProgramNm00.move("Static07_00_01:0","10","80","21",null,null);

                p.edtGdsNm.set_taborder("6");
                p.edtGdsNm.move("staProgramNm00:0","9","195","20",null,null);
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
                p.Static24.set_taborder("1");
                p.Static24.set_text("품목코드 목록");
                p.Static24.set_cssclass("sta_WF_title02");
                p.Static24.move("0","0",null,"21","0",null);

                p.grdList.set_taborder("1");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autofittype("col");
                p.grdList.move("0","26",null,null,"0","0");

                p.btnDelHarmInfo.set_taborder("2");
                p.btnDelHarmInfo.set_text("  행삭제  ");
                p.btnDelHarmInfo.set_cssclass("btn_WF_Custom");
                p.btnDelHarmInfo.set_fittocontents("width");
                p.btnDelHarmInfo.set_visible("true");
                p.btnDelHarmInfo.move(null,"0","110","21","0",null);

                p.btnAddHarmInfo.set_taborder("3");
                p.btnAddHarmInfo.set_text("  행추가  ");
                p.btnAddHarmInfo.set_cssclass("btn_WF_Custom");
                p.btnAddHarmInfo.set_fittocontents("width");
                p.btnAddHarmInfo.set_visible("true");
                p.btnAddHarmInfo.move(null,"0","110","21","btnDelHarmInfo:3",null);

                p.btnDownExcel.set_taborder("4");
                p.btnDownExcel.set_text("  엑셀다운로드  ");
                p.btnDownExcel.set_cssclass("btn_WF_Custom");
                p.btnDownExcel.set_fittocontents("width");
                p.btnDownExcel.set_visible("true");
                p.btnDownExcel.move(null,"0","110","21","btnAddHarmInfo:3",null);

                p.btnUploadExcel.set_taborder("5");
                p.btnUploadExcel.set_text("  엑셀업로드  ");
                p.btnUploadExcel.set_cssclass("btn_WF_Custom");
                p.btnUploadExcel.set_fittocontents("width");
                p.btnUploadExcel.set_visible("true");
                p.btnUploadExcel.move(null,"0","110","21","btnDownExcel:3",null);
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
            obj = new Layout("default","",1000,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboCertFldCd","value","dsSearch","REF1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtGdsNm","value","dsSearch","CODE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAS010P02.xfdl", function() {
        /**
        *  품목코드등록
        *
        *  @MenuPath    기초정보관리 > 품목관리 > 품목코드등록
        *  @FileName    BAS010P02.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.02.06
        *  @Version     1.0
        *  @Desction    공통코드 품목코드(GDS_CD) 등록
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.02.06      doore              최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
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
        		take.tranCode(this, ["CERT_FLD_CD", "CERT_KND_CD", "TEST_INST_CD", "YN", "YN"]
        		                  , ["dsCertFldCd", "dsCertKndCd", "dsTestInstCd", "dsUseYn", "dsUseYnGrid"]
        						  , ["","","", "ALL",""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			if(!take.isEmpty(this.fv_sCertFldCd)) this.divSearch.form.cboCertFldCd.set_value(this.fv_sCertFldCd);
        			else this.divSearch.form.cboCertFldCd.set_index(0);

        			this.divSearch.form.cboUseYn.set_index(1);

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
        	this.dsSearch.setColumn(0, "GROUP_ID", "GDS_CD");
        	this.dsSearch.setColumn(0, "GROUP_REF1", "CERT_FLD_CD");
        	this.dsSearch.setColumn(0, "GROUP_REF2", "CERT_KND_CD");
        	this.dsSearch.setColumn(0, "GROUP_REF3", "TEST_INST_CD");

            take.tranSelect(this, "Search", "Doore.codeInfoList", "dsSearch", "dsList", "", "fnCallback");
        }

        /**
         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
        	var strCertFldCd = this.divSearch.form.cboCertFldCd.value;

        	var objDs;

            //변수에 값 세팅
        	nRow = this.dsList.addRow();

        	// 기본정보 세팅
        	this.dsList.setColumn(nRow, "REF1", strCertFldCd);
        	this.dsList.setColumn(nRow, "GROUP_ID",   "GDS_CD");
        	this.dsList.setColumn(nRow, "PARENT_KEY", "0004400172");
        	this.dsList.setColumn(nRow, "USE_YN", "Y");

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

        	//데이터셋 수정 여부 확인
        	if (!take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	//저장 전 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,                           //현재 Form Object
                    this.divDetail.form.grdList,  	//벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    "cellImport",                   //필수 입력 css값
                    "",                				//성공 Call Back 함수
                    true);                          //동기 여부

        	if(bRtn)
        	{
        		var sParam = "sNameSpace=basicInfo.codeInfoInsert|SystemCommon.codeInfoUpdate|SystemCommon.codeInfoDelete"
        				   + " sDataset=dsList";

        		take.transaction(this, sTranId, "SVC_LOC::doore/saveList.do", "dsList=dsList:U", "", sParam, "fnCallback");
        	}
        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {N/A} N/A
         * @return {N/A} N/A
         */
        this.fnDelRow = function()
        {
        	//공통 행추가에서 호출할 디폴트값 세팅
            var delRow = this.dsList.rowposition;

            if(delRow < 0)
        	{
                alert("선택된 항목이 없습니다.");
                return;
            }

        	// row 상태가 insert 인경우만 삭제 가능
        	if(this.dsList.getRowType(delRow) == 2) this.dsList.deleteRow(delRow);
        	else
        	{
        		alert("저장된 행은 삭제 할 수 없습니다. 사용여부를 'N'으로 변경하여 주십시오.");
        		return false;
        	}
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 닫기 버튼 클릭 이벤트 */
        this.fnClose = function()
        {
        	this.close();
        }

        /* 엑셀 다운로드 클릭 이벤트 */
        this.btnExcelDownload_onclick = function(obj,e)
        {
        	gFnExcelDown (this, this.divDetail.form.grdList, "품목코드_" + this.divSearch.form.cboCertFldCd.text);
        };

        /* 엑셀 업로드 클릭 이벤트 */
        this.btnExcelUpload_onclick = function(obj,e)
        {
        	gFnExcelUpload(this, this.dsExcelUpload, 2, this.fnExcelImport_onsuccess, this.fnExcelImport_onerror);

        };

        /* 인증종류 클릭시 필터 처리 */
        this.divDetail_grdList_oncellclick = function(obj,e)
        {
        	var strColNm = this.divDetail.form.grdList.getCellProperty( "head", e.col, "text" );
        	var strCertFldCd = this.dsList.getColumn(e.row,"REF1");
        	if(strColNm == "인증종류")
        	{
        		this.dsCertKndCd.filter("");
        		// 01 : 전기용품, 02 : 생활용품, 03 : 어린이제품
        		if(strCertFldCd == "03") this.dsCertKndCd.filter("REF1 == '" + this.dsList.getColumn(e.row, "REF1") + "'" );
        		else if(strCertFldCd == "02") this.dsCertKndCd.filter("REF2 == '" + this.dsList.getColumn(e.row, "REF1") + "'" );
        		else if(strCertFldCd == "01") this.dsCertKndCd.filter("REF3 == '" + this.dsList.getColumn(e.row, "REF1") + "'" );
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        /*
        	excel 업로드 성공
        */
        this.fnExcelImport_onsuccess = function(obj,  e)
        {
        	var nCnt = this.dsExcelUpload.rowcount;
            this.dsList.clearData();
        	var strMapp = gFnGetMappingString(this.divDetail.form.grdList);

        	for(var i = 0; i < nCnt; i++) {
        		var nRow = this.dsList.addRow();
        		this.dsList.copyRow(nRow,this.dsExcelUpload, i, strMapp);
        		this.dsList.setColumn(nRow, "GROUP_ID", "GDS_CD");
        		this.dsList.setColumn(nRow, "PARENT_KEY", "0004400172");

        		// 인증분야코드 처리
        		var sCertFldCd = gFnReplace(this.dsList.getColumn(nRow, "REF1"), /\s/g, "");
        		sCertFldCd = gFnGetCodeId(this.dsCertFldCd, sCertFldCd);
        		this.dsList.setColumn(nRow, "REF1", sCertFldCd);
        		// 인증종류코드 처리
        		var sCertKndCd = gFnReplace(this.dsList.getColumn(nRow, "REF2"), /\s/g, "");
        		sCertKndCd = gFnGetCodeId(this.dsCertKndCd, sCertKndCd);
        		this.dsList.setColumn(nRow, "REF2", sCertKndCd);
        	}

        	// 데이터셋 처리 : CODE_KEY가 있는 경우 update, 없는 경우 insert
        	this.dsList.set_updatecontrol(false);
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(take.isEmpty(this.dsList.getColumn(i, "CODE_KEY"))) this.dsList.setRowType(i, "I");
        		else  this.dsList.setRowType(i, "U");
        	}
        	this.dsList.set_updatecontrol(true);

        	this.divDetail.form.grdList.selectRow(0);
        }

        // 검색조건 엔터 값 조회
        this.divSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch();
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
        			alert("저장되었습니다.");
        			this.fnSearch();
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
            this.divSearch.form.cboCertFldCd.addEventHandler("onitemchanged",this.fnSearch,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.fnSearch,this);
            this.divSearch.form.edtGdsNm.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.grdList.addEventHandler("oncellclick",this.divDetail_grdList_oncellclick,this);
            this.divDetail.form.btnDelHarmInfo.addEventHandler("onclick",this.fnDelRow,this);
            this.divDetail.form.btnAddHarmInfo.addEventHandler("onclick",this.fnAddRow,this);
            this.divDetail.form.btnDownExcel.addEventHandler("onclick",this.btnExcelDownload_onclick,this);
            this.divDetail.form.btnUploadExcel.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.fnClose,this);
            this.btnEnter.addEventHandler("onclick",this.fnSave,this);
        };
        this.loadIncludeScript("BAS010P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
