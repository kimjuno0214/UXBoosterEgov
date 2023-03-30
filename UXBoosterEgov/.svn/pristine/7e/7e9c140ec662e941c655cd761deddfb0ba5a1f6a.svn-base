(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample2");
            this.set_titletext("Layout2");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"chk1\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"name\">사용</Col></Row><Row><Col id=\"name\">미사용</Col><Col id=\"code\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"chk1\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkBox", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">-선택-</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">선택1</Col></Row><Row><Col id=\"NAME\">선택2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">선택3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubList", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"seq\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grdMain","0","30","410",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("checkbox,readonly");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"키값\"/><Cell col=\"1\" text=\"데이터1\"/></Band><Band id=\"body\"><Cell text=\"bind:key\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:col1\"/></Band></Format></Formats>");
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

            obj = new Static("staLable06","420","0",null,"30","90",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("디테일타이틀");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","539","30",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable01","420","30","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","539","staBg01:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","539","staBg02:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","539","staBg03:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","539","staBg04:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06","539","staBg05:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable02","420","staLable01:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("데이터1");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable03","420","staLable02:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("데이터2");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable04","420","staLable03:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("데이터3");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable11","420","staLable04:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable00","420","staLable11:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("데이터4");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData1","staLable02:6","65",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBgLine","423","30",null,"1","90",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tableLine");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staLable11:6","155",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("선택1");
            obj.set_value("Y");
            obj.set_index("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtRegCd","staLable01:6","35",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_text("주식회사 티플럭스");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData2","staLable03:6","95",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData3","staLable04:6","125",null,"21","6",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chk01","staLable00:6","staBg05:4","114","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("체크1");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chk02","chk01:6","185","114","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("체크2");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static06","420","staLable00:0",null,"10","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staSubTitle","420","Static06:0",null,"30","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdSub","420","staSubTitle:0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_binddataset("dsSubList");
            obj.set_autofittype("col");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("both");
            obj.getSetter("takegrid").set("checkbox,readonly");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"275\"/><Column size=\"275\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"데이터1\"/><Cell col=\"1\" text=\"데이터2\"/></Band><Band id=\"body\"><Cell text=\"bind:col1\" textAlign=\"center\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:col2\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"225","46","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"225","46","23","btnSave:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"225","46","23","btnDel:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
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
            obj = new BindItem("item0","divDetail.form.edtRegCd","value","dsDetail","reg_cd");
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

            obj = new BindItem("item4","divDetail.form.cboUseYn","value","dsDetail","use_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtKey","value","dsSearch","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtText01","value","dsSearch","col1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboUseYn","value","dsSearch","use_yn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample02.xfdl", function() {
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

                    take.tranSelect(this, sTranId, "Sample.sample02Select", "dsSearch", "dsList", "", "fnCallback");
                    break;

                case "Detail":
                    var sSampleKey = this.dsList.getColumn(this.dsList.rowposition, "key");
                    var sParam = "sKey='" + sSampleKey + "'";

                    this.dsDetail.clearData();

                    take.tranSelect(this, sTranId, "Sample.sample02DetailSelect", "", "dsDetail", sParam, "fnCallback");
                    break;
                case "SubList":
                    var sSampleKey = this.dsList.getColumn(this.dsList.rowposition, "key");
                    var sParam = "sKey='" + sSampleKey + "'";

                    this.dsSubList.clearData();

                    take.tranSelect(this, sTranId, "Sample.sample02SubSelect", "", "dsSubList", sParam, "fnCallback");
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
                var nRowType = this.dsDetail.getRowType(0);
                var sChk;
                if (this.divDetail.form.chk01.value == "Y") sChk = "01";
                if (this.divDetail.form.chk02.value == "Y") sChk = "02";

                if(nRowType == 2) {
                    //신규작성 신청
                    var bRowChange = take.confirm(this, "question", "신규 저장 하시겠습니까?");
                    if (bRowChange){
                        this.dsDetail.setColumn(0,"chk1",sChk);
                        take.tranSave(this, "Save", "Sample.sample02", "dsDetail", "", "", "fnCallback");
                    }
                } else {
                    if(nRowType == 1) {
                       alert("선택한 신청건의 수정사항이 없습니다.");
                    } else {
                        // 리스트 (수정 -> 저장)
                        if (take.confirm(this, "question", "선택건을 수정 하시겠습니까?")){
                            take.tranSave(this, "Modify", "Sample.sample02", "dsDetail", "", "", "fnCallback");
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
                this.dsSubList.clearData();
                objDsDetail.addRow();

                this.divDetail.form.chk01.set_value("N");
                this.divDetail.form.chk02.set_value("N");

                objDsDetail.setColumn(0, "reg_cd", "U000000008");
                objDsDetail.setColumn(0, "use_yn", "Y");
                objDsDetail.setColumn(0, "col1", "신규작성 TEST !!!!!!!");

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
                    take.tranSave(this, "Delete", "Sample.sample02", "dsList", "", "", "fnCallback");
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

        // 디테일 체크박스 클릭 이벤트
        this.chkBox_canchange = function(obj,e)
        {
            var sChkId = obj.name.substr(3);

            if (sChkId == "01") {
                if (obj.value == "N") {
                    this.divDetail.form.chk02.set_value("N");
                }
            } else {
                if (obj.value == "N") {
                    this.divDetail.form.chk01.set_value("N");
                }
            }
        };

        //서브 리스트 추가/삭제/저장 버튼 클릭이벤트
        this.btn_onclick = function(obj,e)
        {
        	var sBtnGbn = obj.name.substr(3);

            switch(sBtnGbn)
            {
                case "Add" :      //등록
                    var nAddRow = this.dsSubList.addRow();

                    var sSampleKey = this.dsList.getColumn(this.dsList.rowposition, "key");

                    this.dsSubList.setColumn(nAddRow,"key", sSampleKey);
                    break;

                case "Save" :     //수정
                    var sDsType;
                    var objDsSub = this.dsSubList;
                    for(var i=0; i<objDsSub.rowcount; i++){
                        if(objDsSub.getRowType(i) != 1) {
                            sDsType = "Save";
                            break;
                        }
                    }

                    if(sDsType != "Save") {
                       alert("서브영역의 수정사항이 없습니다.");
                    } else {
                        take.tranSave(this, "SubSave", "Sample.sample02Sub", "dsSubList", "", "", "fnCallback");
                    }
                    break;

                case "Del" :      //삭제
                    var objDsSub = this.dsSubList;
                    var arrChkRow = take.getChkRow(objDsSub,"chk");

                    if(arrChkRow.length == 0){
                        alert("선택된 항목이 없습니다.");
                        return;
                    }

                    var bRowDel = take.confirm(this, "question", "선택된 항목들을 삭제 하시겠습니까?");
                    if (bRowDel){
                        for(var i=0; i<arrChkRow.length; i++) {
                            objDsSub.deleteRow(arrChkRow[i]);
                        }

                        take.tranSave(this, "SubDel", "Sample.sample02Sub", "dsSubList", "", "", "fnCallback");
                    }
                    break;

                default :
                    break;
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

            if(sRegCd == ""){
                alert("필수값을 작성해주세요.");
                this.divDetail.form.edtRegCd.setFocus();
                return false;
            }

            return true;
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
                    var sChk = this.dsDetail.getColumn(0,"chk1");
                    if(sChk == "01") {
                        this.divDetail.form.chk01.set_value("Y");
                        this.divDetail.form.chk02.set_value("N");
                    } else if(sChk == "02") {
                        this.divDetail.form.chk01.set_value("N");
                        this.divDetail.form.chk02.set_value("Y");
                    } else {
                        this.divDetail.form.chk01.set_value("N");
                        this.divDetail.form.chk02.set_value("N");
                    }

                    this.fnSearch("SubList");
                    break;

                case "Save" :  //저장 콜백
                    this.fv_sNew = "N";
                    this.fnSearch("List");
                    break;

                case "Delete" :  //삭제 콜백
                    this.fnSearch("List");
                    break;

                case "Modify" :  //수정 콜백
                    this.fnSearch("List");
                    break;

                case "SubList" : // 서브리스트 조회 콜백
                    this.divDetail.form.staSubTitle.set_text("서브 Title (총 " + this.dsSubList.rowcount + "건)");
                    break;

                case "SubSave" :  //저장 콜백
                    this.fnSearch("SubList");
                    break;

                case "SubDel" :  //저장 콜백
                    this.fnSearch("SubList");
                    break;

                default :
                    break;
            }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divDetail.form.grdMain.addEventHandler("onselectchanged",this.divDetail_grdMain_onselectchanged,this);
            this.divDetail.form.edtRegCd.addEventHandler("onkeyup",this.divDetail_edtPProgNm_onkeyup,this);
            this.divDetail.form.chk01.addEventHandler("canchange",this.chkBox_canchange,this);
            this.divDetail.form.chk02.addEventHandler("canchange",this.chkBox_canchange,this);
            this.divDetail.form.grdSub.addEventHandler("onheadclick",this.grid_onheadclick,this);
            this.divDetail.form.btnSave.addEventHandler("onclick",this.btn_onclick,this);
            this.divDetail.form.btnDel.addEventHandler("onclick",this.btn_onclick,this);
            this.divDetail.form.btnAdd.addEventHandler("onclick",this.btn_onclick,this);
        };
        this.loadIncludeScript("sample02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
