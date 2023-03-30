(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample1");
            this.set_titletext("Layout1");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/><Column id=\"col6\" type=\"STRING\" size=\"256\"/><Column id=\"col7\" type=\"STRING\" size=\"256\"/><Column id=\"col8\" type=\"STRING\" size=\"256\"/><Column id=\"col9\" type=\"STRING\" size=\"256\"/><Column id=\"col10\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"name\">사용</Col></Row><Row><Col id=\"name\">미사용</Col><Col id=\"code\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/><Column id=\"col6\" type=\"STRING\" size=\"256\"/><Column id=\"col7\" type=\"STRING\" size=\"256\"/><Column id=\"col8\" type=\"STRING\" size=\"256\"/><Column id=\"col9\" type=\"STRING\" size=\"256\"/><Column id=\"col10\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSample", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">-선택-</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">선택1</Col></Row><Row><Col id=\"NAME\">선택2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">선택3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staLable01","19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("키값");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtKey","staLable01:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staLable02","edtKey:19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("데이터1");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtText01","staLable02:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYn","edtText01:19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYn:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.08%","divSearch:0","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","30","500",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("checkbox,readonly");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"키값\"/><Cell col=\"1\" text=\"사용여부\"/><Cell col=\"2\" text=\"데이터1\"/><Cell col=\"3\" text=\"내용\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:key\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:use_yn\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:col1\"/><Cell col=\"3\" text=\"bind:col10\"/><Cell col=\"4\" text=\"bind:reg_cd\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:reg_dt\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","866",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("리스트타이틀");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static27","grdMain:0","0","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable06","510","0",null,"30","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("디테일타이틀");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","629","30",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable01","510","30","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","629","staBg01:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","629","staBg02:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","629","staBg03:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","629","staBg04:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06","629","staBg05:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable02","510","staLable01:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("데이터1");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable03","510","staLable02:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("데이터2");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable04","510","staLable03:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("데이터4");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable11","510","staLable04:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("데이터5");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable00","510","staLable11:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("데이터6");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData1","staLable02:6","65",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable08","765","30","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtRegCd","staLable01:6","35","123","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("주식회사 티플럭스");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBgLine","513","30",null,"1","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tableLine");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staLable08:6","35",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable09","765","staBg02:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("데이터3");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg07","629","staBg06:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable07","510","staLable00:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("데이터8");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable10","765","staBg06:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("데이터9");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData8","staLable07:6","215","123","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData5","staLable11:6","155",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_textAlign("left");
            obj.set_text("주식회사 티플럭스");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg08","629","staBg07:-1",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable12","510","staLable07:-1","120",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("데이터10");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtData10","staLable12:6","staLable10:6",null,null,"6","6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData9","staLable10:6","215",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData2","staLable03:6","95","123","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("주식회사 티플럭스");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData3","staLable09:6","95",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData4","staLable04:6","125",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_textAlign("left");
            obj.set_text("주식회사 티플럭스");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData6","staLable00:6","185","123","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable05","765","180","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_text("데이터7");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData7","staLable05:6","185",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1030","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item15","divDetail.form.edtRegCd","value","dsDetail","reg_cd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.cboUseYn","value","dsDetail","use_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtData1","value","dsDetail","col1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtData2","value","dsDetail","col2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.edtData3","value","dsDetail","col3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtData4","value","dsDetail","col4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtData5","value","dsDetail","col5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtData6","value","dsDetail","col6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.edtData7","value","dsDetail","col7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.edtData8","value","dsDetail","col8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.edtData9","value","dsDetail","col9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.txtData10","value","dsDetail","col10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.edtKey","value","dsSearch","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.edtText01","value","dsSearch","col1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboUseYn","value","dsSearch","use_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample01.xfdl", function() {
        /**
        *  sample1 템플릿
        *
        *  @MenuPath    guide > sample1
        *  @FileName    sample1.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.10.31
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.10.31      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sNew = "N";     //신규작성 확인값

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
                this.fnInit();
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
            if (take.nvl(sTranId, "")=="") sTranId = "List";

            switch(sTranId) {
                case "List":
                    this.dsList.clearData();

                    take.tranSelect(this, sTranId, "Sample.sample01Select", "dsSearch", "dsList", "", "fnCallback");
                    break;

                case "Detail":
                    var sSampleKey = this.dsList.getColumn(this.dsList.rowposition, "key");
                    var sParam = "sKey='" + sSampleKey + "'";

                    this.dsDetail.clearData();

                    take.tranSelect(this, sTranId, "Sample.sample01DetailSelect", "", "dsDetail", sParam, "fnCallback");
                    break;
                default:
                    break;
            }
        }
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

            if(this.fnCheckForm()) {
                //trace(this.dsDetail.getRowType(0));
                var nRowType = this.dsDetail.getRowType(0);

                if(nRowType == 2) {
                    //신규작성 신청
                    var bRowChange = take.confirm(this, "question", "신규 저장 하시겠습니까?");
                    if (bRowChange){
                        take.tranSave(this, "Save", "Sample.sample01", "dsDetail", "", "", "fnCallback");
                    }
                } else {
                    if(nRowType == 1) {
                       alert("선택한 신청건의 수정사항이 없습니다.");
                    } else {
                        // 리스트 (수정 -> 저장)
                        if (take.confirm(this, "question", "선택건을 수정 하시겠습니까?")){
                            //this.fnModifySet();

                            take.tranSave(this, "Modify", "Sample.sample01", "dsDetail", "", "", "fnCallback");
                        }
                    }
                }
            }
        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            //if (take.nvl(sGrdId, "")=="") sGrdId = "grdList";

            if(this.dsDetail.getRowType(this.dsDetail.rowposition) == 2) {
                alert("이미 신청 작성중입니다.");
                return false;
            }else{
                //this.fnAddRow("grdLeaveList", this.dsVacaList.addRow());
                var objDsDetail = this.dsDetail;

                objDsDetail.clearData();
                objDsDetail.addRow();

                objDsDetail.setColumn(0, "reg_cd", "U000000008");
                objDsDetail.setColumn(0, "use_yn", "Y");
                objDsDetail.setColumn(0, "col10", "신규작성 TEST !!!!!!!");

                this.fv_sNew = "Y";
            }
        }

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
            //if (take.nvl(sGrdId, "")=="") sGrdId = "LeaveList";

            var nRowType = this.dsDetail.getRowType(0);
            trace(nRowType);

            if(nRowType == 2) {
                if (take.confirm(this, "question", "작성중인 자료가 삭제됩니다.\n진행하시겠습니까?")){
                    this.dsDetail.clearData();
                    this.fv_sNew = "N";
                    this.fnSearch("List");
                }
            } else {
                if (take.confirm(this, "question", "선택한 신청건을 삭제하시겠습니까?")){
                    this.dsList.deleteRow(this.dsList.rowposition);
                    take.tranSave(this, "Delete", "Sample.sample01", "dsList", "", "", "fnCallback");
                }
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //리스트 클릭 이벤트
        this.divDetail_grdMain_onselectchanged = function(obj,e)
        {
            if (this.fv_sNew == "Y") { //신규작성 확인값
                //if (e.oldrow != e.row) {
                    var bRowChange = take.confirm(this, "question", "작성중인 데이터는 유지되지 않습니다.");

                    if (!bRowChange){
                        // 취소
                        //obj.selectRow(e.oldrow);  //신규 로우 유지
                    }else {
                        // 확인
                        this.dsDetail.clearData();
                        this.fv_sNew = "N";
                        this.fnSearch("Detail");
                    }
                //}
            } else {
            	this.fnSearch("Detail");
            }
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
            this.fnCommonCode();
        }

        /**
         * fnCommonCode : 코드호출 함수
         * @param  {String} N/A
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
            take.tranCode(this, "00009", "dsCboUseYn", "ALL",
        	function(sId, nErrCd, sErrMsg)
        	{
                if (this.dsCboUseYn.rowcount > 0){
                    this.divSearch.form.cboUseYn.set_index(1);  // 사용 셋팅
                }

                this.fnSearch("List");
            });
        };

        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var sRegCd = take.nvl(this.divDetail.form.edtRegCd.value, "");
            var sUseYn = take.nvl(this.divDetail.form.cboUseYn.value, "");

            if(sRegCd == ""){
                alert("필수값1을 작성해주세요.");
                return false;
            }

            if(sUseYn == ""){
                alert("필수값2를 작성해주세요.");
                return false;
            }

            return true;
        }

        /**
         * fnModifySet : 신규저장 / 수정
         * @param  {String} sParam N/A
         * @example this.fnModifySet();
         */
        this.fnModifySet = function()
        {
            //팝업으로 '템플릿 진행할 때' 포커스가 안빠져서 바인드된값이 업데이트가 안됨. -> 강제 data셋팅필요.
            var objDsDetail = this.dsDetail;
            var objDivDetail = this.divDetail.form;
            var sEdtText01  = take.nvl(objDivDetail.edtText01.value, "");
            var sCboType01  = take.nvl(objDivDetail.cboType01.value, "");
            var sEdtText02  = take.nvl(objDivDetail.edtText02.value, "");
            var sCboType02  = take.nvl(objDivDetail.cboType02.value, "");
            var sCboType03  = take.nvl(objDivDetail.cboType03.value, "");
            var sCboType04  = take.nvl(objDivDetail.cboType04.value, "");
            var sEdtText03  = take.nvl(objDivDetail.edtText03.value, "");
            var sEdtText04  = take.nvl(objDivDetail.edtText04.value, "");
            var sCboType05  = take.nvl(objDivDetail.cboType05.value, "");
            var sEdtText05  = take.nvl(objDivDetail.edtText05.value, "");
            var sTxaText01  = take.nvl(objDivDetail.txaText01.value, "");

            objDsDetail.setColumn(0, "reg_cd",  sEdtText01);
            objDsDetail.setColumn(0, "col1",    sCboType01);
            objDsDetail.setColumn(0, "col2",    sEdtText02);
            objDsDetail.setColumn(0, "use_yn",  sCboType02);
            objDsDetail.setColumn(0, "col4",    sCboType03);
            objDsDetail.setColumn(0, "col5",    sCboType04);
            objDsDetail.setColumn(0, "col6",    sEdtText03);
            objDsDetail.setColumn(0, "col7",    sEdtText04);
            objDsDetail.setColumn(0, "col8",    sCboType05);
            objDsDetail.setColumn(0, "col9",    sEdtText05);
            objDsDetail.setColumn(0, "col10",   sTxaText01);
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
                case "List" : //조회 콜백
                    this.divDetail.form.staTitle.set_text("Title (총 " + this.dsList.rowcount + "건)");
                    break;
                case "Detail" : //조회 콜백
                    //Script
                    break;
                case "Save" :  //저장 콜백
                    this.fv_sNew = "N";
                    this.fnSearch("List");
                    break;
                case "Delete" :  //삭제 콜백
                    this.fnSearch("List");
                    break;
                default :       // 수정 콜백
                    this.fnSearch("List");
                    break;
            }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divDetail.form.grdMain.addEventHandler("onselectchanged",this.divDetail_grdMain_onselectchanged,this);
            this.divDetail.form.edtRegCd.addEventHandler("onchanged",this.divDetail_edtProgId_onchanged,this);
            this.divDetail.form.edtData5.addEventHandler("onkeyup",this.divDetail_edtPProgNm_onkeyup,this);
            this.divDetail.form.edtData2.addEventHandler("onchanged",this.divDetail_edtProgId_onchanged,this);
            this.divDetail.form.edtData4.addEventHandler("onkeyup",this.divDetail_edtPProgNm_onkeyup,this);
        };
        this.loadIncludeScript("sample01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
