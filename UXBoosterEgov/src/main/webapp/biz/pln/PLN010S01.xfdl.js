(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PLN010S01");
            this.set_background("#ffffff");
            this.set_titletext("기본정보/일정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1239,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdDivCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInstDdln", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"TEST_INST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRS_STTUS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgrsSttusCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCertFldCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchdul", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHDUL_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"SCHDUL_CD\" type=\"STRING\" size=\"255\"/><Column id=\"SCHDUL_NM\" type=\"STRING\" size=\"255\"/><Column id=\"PLAN_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"RM\" type=\"STRING\" size=\"255\"/><Column id=\"SN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MDFR_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static24","0","0",null,"10","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","0","10",null,"21","510",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("안전서조사 차수 상세");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staProgCd","0","36",null,"31","20",null,"560",null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","-1","66",null,"31","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staOdrYr","0","36","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staOdr","294","36","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOdr","421","41","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_essential");
            obj.set_text("1차");
            this.addChild(obj.name, obj);

            obj = new Static("staOdrDivCd","588","36","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("정기/수시");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cboOdrDivCd","715","41","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsOrdDivCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("staThema","0","66","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("테마");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtThema","127","71","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("신학기");
            this.addChild(obj.name, obj);

            obj = new Static("staTotQy","294","66","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("총수량");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTotQy","421","72","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("320");
            this.addChild(obj.name, obj);

            obj = new Static("staBgngYmd","588","66","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("시작일자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBgngYmd","715","71","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("cal_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00","0","120","75","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("세부일정");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("gridSchdul","0","146","840",null,null,"0",null,null,null,null,this);
            obj.getSetter("takegrid").set("no");
            obj.set_taborder("17");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSchdul");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"100\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"일정\" cssclass=\"cellImport\"/><Cell col=\"1\" text=\"계획일자\"/><Cell col=\"2\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHDUL_NM\" textAlign=\"left\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:PLAN_YMD\" textAlign=\"center\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:RM\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00","gridSchdul:20","120","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("시험기관 진행상태");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelSchedul",null,"120","105","21","staProgDetailT00_00:20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("  행삭제  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddSchedul",null,"120","105","21","btnDelSchedul:3",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("  행추가  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddSchedulCd",null,"120","105","21","btnAddSchedul:3",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("  일정코드등록  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("gridSchdul00","gridSchdul:20","146","310",null,null,"0",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_autofittype("col");
            obj.set_binddataset("dsInstDdln");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시험기관\"/><Cell col=\"1\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"bind:TEST_INST_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PROGRS_STTUS_CD\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsProgrsSttusCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboOdrYr","127","41","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("staCertFldCd","882","36","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCertFldCd00","882","66","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCertFldCd","1009","41","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("dsCertFldCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboProgrsSttusCd","1009","71","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_innerdataset("dsProgrsSttusCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOdrId","281","112","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_visible("false");
            obj.set_value("ODR_ID");
            obj.set_text("ODR_ID");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","cboOdrDivCd","value","dsOdr","ODR_DIV_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtThema","value","dsOdr","THEMA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtTotQy","value","dsOdr","TOTQY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calBgngYmd","value","dsOdr","BGNG_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboOdrYr","value","dsOdr","ODR_YR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboCertFldCd","value","dsOdr","CERT_FLD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboProgrsSttusCd","value","dsOdr","PROGRS_STTUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtOdr","value","dsOdr","ODR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtOdrId","value","dsOdr","ODR_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PLN010S01.xfdl", function() {
        /**
        *  안전성조사 계획관리 기본정보/일정
        *
        *  @MenuPath    안정성조사 > 계획관리 > 안전성조사계획 > 기본정비/일정
        *  @FileName    PLN010S01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.02.08
        *  @Version     1.0
        *  @Desction    설명
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
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_parentForm;
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
        		// 공통코드 조회
        		take.tranCode(this, ["YEAR"
        		                    ,"ODR_DIV_CD"
        							,"CERT_FLD_CD"
        							,"PROGRS_STTUS_CD"]
        		                  , ["dsYear"
        						    ,"dsOrdDivCd"
        							,"dsCertFldCd"
        							,"dsProgrsSttusCd"]
        						  , ["","","",""],
        		function(sId, nErrCd, sErrMsg)
        		{

        		});
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/

        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sOdrId 차수ID
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function()
        {
        	this.fv_sOdrId = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID");

        	this.dsSchdul.clearData();
        	this.dsInstDdln.clearData();

        	if(!take.isEmpty(this.fv_sOdrId))
        	{
        		this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        		// 일정조회
        		take.tranSelect(this, "Search", "safety.schdulSelect", "dsSearch", "dsSchdul", "", "fnCallback");
        		// 시험기관 진행상태 조회
        		take.tranSelect(this, "SearchInstDdln", "safety.instDdlnSelect", "dsSearch", "dsInstDdln", "", "fnCallback");
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

        /* 일정코드 등록 Click 이벤트 */
        this.btnAddSchedulCd_onclick = function(obj,e)
        {
        	var sOdrId = this.fv_parentForm.dsOdr.getColumn(this.fv_parentForm.dsOdr.rowposition, "ODR_ID");

        	var arrParam = {
        				sOdrId : sOdrId
        				};

        	take.openPopup(this, "addSchdulCd", "biz::pln/PLN010P01.xfdl",arrParam, "resizable=true",
        		function(){

        		}
        	);
        };

        /* 일정 행추가 버튼 Click 이벤트 */
        this.btnAddSchedul_onclick = function(obj,e)
        {
        	var nRow = 0;

        	if(this.gridSchdul.currentrow > -1) nRow = this.dsSchdul.insertRow(this.gridSchdul.currentrow + 1);
        	else nRow = this.dsSchdul.addRow();

        	// 순번 업데이트
        	for(var i = 0; i < this.dsSchdul.rowcount; i++)
        	{
        		this.dsSchdul.setColumn(i, "SN", i);
        	}

        	this.dsSchdul.setColumn(nRow, "ODR_ID", this.edtOdrId.value);
        	this.dsSchdul.setColumn(nRow, "SCHDUL_CD", "00000");
        };

        /* 일정 행삭제 버튼 Click 이벤트 */
        this.btnDelSchedul_onclick = function(obj,e)
        {
        	var nRow = this.dsSchdul.rowposition;

        	if(nRow > -1) this.dsSchdul.deleteRow(nRow);
        };

        /* 진행상태 변경 이벤트 처리  */
        this.cboProgrsSttusCd_onitemchanged = function(obj,e)
        {
        	var sProgrsSttusCd = e.postvalue;

        	for(var i = 0; i < this.dsInstDdln.rowcount; i++)
        	{
        		this.dsInstDdln.setColumn(i, "PROGRS_STTUS_CD", sProgrsSttusCd);
        	}
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
        	return;
            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

            switch(sId)
            {
                default :
                    break;
            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.gridSchdul.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.btnDelSchedul.addEventHandler("onclick",this.btnDelSchedul_onclick,this);
            this.btnAddSchedul.addEventHandler("onclick",this.btnAddSchedul_onclick,this);
            this.btnAddSchedulCd.addEventHandler("onclick",this.btnAddSchedulCd_onclick,this);
            this.gridSchdul00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.cboProgrsSttusCd.addEventHandler("onitemchanged",this.cboProgrsSttusCd_onitemchanged,this);
        };
        this.loadIncludeScript("PLN010S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
