(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("UM010");
            this.set_titletext("사용자관리_부서관리_부서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDeptList", this);
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnAll", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDeptIdT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("부서ID");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptId","staDeptIdT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeptNmT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsUseYnAll");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","214","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("부서목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static20","348","0",null,"21","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("부서상세");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","467","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34","467","86",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static41","467","146",null,null,"0","60",null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptCdT","348","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("부서ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("taDescTxt","475","152",null,null,"7","69",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static45","328","26","20","200",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_background("red");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptNmT","348","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static04","467","Static41:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","703","Static41:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDescTxtT","348","146","120",null,null,"60",null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNmT","348","staDescTxtT:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static06","467","Static04:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","703","Static41:29","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNmT","348","staRegNmT:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","467","56",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static10","467","116",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptEngNmT","348","116","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("부서명(영문)");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","348","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","167",null,"100","21",null,"6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("Excel Download");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_DownloadExcel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","26","328",null,null,"btnExcelDown:0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("dsDeptList");
            obj.getSetter("taketree").set("{use:\"all\", treeindex:0, codecolid:\"DEPT_CD\", parentcolid:\"PARENT_DEPT\", ordercolid:\"DEPT_ORDER\", treecallback:\"fnTreeCallBack\"}");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"271\"/><Column size=\"46\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LEVEL\"/><Cell col=\"1\" text=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;&apos; : &apos;삭제&apos;\" edittype=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;none&apos; : &apos;button&apos;\" displaytype=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;none&apos; : &apos;buttoncontrol&apos;\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","475","61","237","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","64",null,"100","21",null,"6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("Excel Upload");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_UploadExcel");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","475","91","237","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptCd","476","31","110","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","475","Static04:-26","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","475","Static41:35","120","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","830","Static41:4","150","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","830","Static41:35","150","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptEngNm","475","121","237","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAdd","282","0","46","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_plus01");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
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
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.taDescTxt","value","dsDeptList","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.cboUseYn","value","dsDeptList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtDeptNm","value","dsDeptList","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.staDeptCd","text","dsDeptList","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.staRegNm","text","dsDeptList","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.staModNm","text","dsDeptList","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.staRegDt","text","dsDeptList","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.staModDt","text","dsDeptList","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.edtDeptEngNm","value","dsDeptList","DEPT_ENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UM010.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.formid_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		this.fnInit();
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
                case "Search" : //조회 콜백
                    //Script
        			this.dsDeptList.set_keystring("S:DEPT_ORDER+");
        // 			this.divDetail.form.grdMain.setBindDataset();
        // 			this.divDetail.form.grdMain.setBindDataset(dsDeptList);
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "DEPT_CD", this.divSearch.form.edtDeptId.value);
        	this.dsSearch.setColumn(0, "DEPT_NM", this.divSearch.form.edtDeptNm.value);
        	this.dsSearch.setColumn(0, "USE_YN", this.divSearch.form.cboUseYn.value);

        	this.dsDeptList.clearData();
        	take.transaction(this, sTranId, "SVC_LOC::um/deptSelect.do", "dsSearch=dsSearch", "dsDeptList=dsDeptList", "", "fnCallback");
            //take.tranSelect(this, sTranId, "UserManagement.deptInfoList", "dsSearch", "dsDeptList", "", "fnCallback");
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
        	var excel_yn = this.dsDeptList.getColumn(0, "EXCEL_YN");

        	var rtnBol = takeval.check(this, "Dataset");
        	if( !rtnBol )
        	{
        		return false;
        	}
        	else
        	{
        		if( "Y" != excel_yn )
        		{
        			take.tranSave(this, sTranId, "UserManagement.deptInfo", "dsDeptList", "", "", "fnCallback");
        		}
        		else
        		{
        			this.dsDeptList.set_updatecontrol(false);
        			for( var i=0; i<this.dsDeptList.rowcount; i++ ){
        				this.dsDeptList.setRowTypeNF(i, Dataset.ROWTYPE_INSERT);
        			}
        			this.dsDeptList.set_updatecontrol(true);
        			take.transaction(this, sTranId, "SVC_LOC::um/deptDelSave.do", "dsDeptList=dsDeptList:U", "", "", "fnCallback");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnInit = function()
        {
            //Script
        	var sOutDs = ["dsUseYnAll", "dsUseYn"];
            var sGroupCodes = ["00009", "00009"];
        	var sHearderTypes = ["ALL", "NO"];

            take.tranCode(this, sGroupCodes, sOutDs, sHearderTypes,
            function(sId, nErrCd, sErrMsg){
        		//callback
        		this.divSearch.form.cboUseYn.set_index(0);
        		this.fnSearch();
        	});

        	// 저장 벨리데이션 세팅
        	takeval.add(this, "Dataset", this.dsDeptList, "부서 명", "DEPT_NM", true, "string", "", "", true);
        }

        this.grdMain_oncellclick = function(obj,e)
        {
        	var nCellPos = obj.getCellPos();
        	var arrRowidx = parseInt(obj.getSelectedRows());
        	var selCellText = obj.getCellText( arrRowidx, nCellPos );

        	var selLvl = parseInt(take.nvl(this.dsDeptList.getColumn(arrRowidx, "DEPT_LEVEL"), "1"));
        	var selSeq = this.dsDeptList.getColumn(arrRowidx, "DEPT_CD");
        	var nMaxSeq = this.dsDeptList.getMaxNF("DEPT_CD");
        	nMaxSeq = take.nvl(nMaxSeq, "0");
        	nMaxSeq = parseInt(nMaxSeq.replace("D", ""));
        	var nSubMaxSeq = parseInt(this.dsDeptList.getCaseCountNF("DEPT_LEVEL == '"+(selLvl+1)+"' && PARENT_DEPT == '"+selSeq+"'"));

        	if( "삭제" == selCellText )
        	{
        		var nDelRows = new Array();
        		var nRow2 = this.dsDeptList.rowposition;
        		nDelRows.push(nRow2);

         		while( obj.getTreeChildRow(nRow2, -1) != -1 ){
        			for( var i=obj.getTreeChildRow(nRow2, 0); i<=obj.getTreeChildRow(nRow2, -1); i++ ){
        				nDelRows.push(i);
        			}
        			nRow2 = obj.getTreeChildRow(nRow2, -1);
         		}
        		this.dsDeptList.deleteMultiRows(nDelRows);

        		for( var i=0; i<this.dsDeptList.rowcount; i++ ){
        			obj.setTreeStatus(i, true);
        		}

        		if(this.dsDeptList.rowposition == -1){
        			this.dsDeptList.set_rowposition(0);
        		}
        	}
        };

        this.btnExcelDown_onclick = function(obj,e)
        {
        	for( var i=0; i<this.dsDeptList.rowcount; i++ )
        	{
        		this.dsDeptList.setColumn(i, "EXCEL_YN", "Y");
        	}

        	this.divDetail.form.grdMain.ExportExcelGrid("testexcelfile", "Sheet1", "TEST EXCEL", "ORG");

        	for( var i=0; i<this.dsDeptList.rowcount; i++ )
        	{
        		this.dsDeptList.setColumn(i, "EXCEL_YN", "N");
        	}
        };

        this.btnExcelUp_onclick = function(obj,e)
        {
        	this.dsDeptList.clearData();
        	var sUrl = take.getSvcUrl();
            var sSvcUrl = sUrl + "XImport.do";

        	if(this.importObj == null){
        		this.importObj = new nexacro.ExcelImportObject("Import00",this);
        		this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        		this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        		this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
        	}
        	this.importObj.set_importurl(sSvcUrl);
        	this.importObj.importData("","Sheet1!A1:L?","dsDeptList");
        };

        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	for( var i=0; i<this.dsDeptList.rowcount; i++ ){
        		this.divDetail.form.grdUserMain.setTreeStatus(i, true);
        	}

        	this.importObj = null;
        	trace("\n=========== onsuccess event start=============");
        	trace("\ne.eventid: " 				+ e.eventid			);
        	trace("\ne.fromobject: " 			+ e.fromobject		);
        	trace("\ne.fromreferenceobject: " 	+ e.fromreferenceobject);
        	trace("\ne.url: " 					+  e.url			);
        };

        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	trace("\n=========== onerror event start===============");
        	trace("\ne.eventid: " 				+ e.eventid			);
        	trace("\ne.fromobject: " 			+ e.fromobject		);
        	trace("\ne.fromreferenceobject: " 	+ e.fromreferenceobject);
        	trace("\ne.errorcode: " 			+  e.errorcode		);
        	trace("\ne.errormsg: " 				+ e.errormsg		);
        };

        this.edtDeptNm_onchanged = function(obj,e)
        {

        };

        this.divDetail_btnAdd_onclick = function(obj,e)
        {
        	if(this.dsDeptList.getRowCount() == 0){
        		this.divDetail.form.grdMain._takeTreeAdd(this,0);
        	}else{
        		this.divDetail.form.grdMain._takeTreeAddChild(this,0);
        	}
        };

        /*
        this.divDetail_btnAdd_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	var objGrd = this.divDetail.form.grdMain;
        	var arrRowidx = parseInt(objGrd.getSelectedRows());

        	var selLvl = parseInt(take.nvl(this.dsDeptList.getColumn(arrRowidx, "DEPT_LEVEL"), "1"));
        	var selSeq = this.dsDeptList.getColumn(arrRowidx, "DEPT_CD");
        	var selOrder = this.dsDeptList.getColumn(arrRowidx, "DEPT_ORDER");
        	var nMaxSeq = this.dsDeptList.getMaxNF("DEPT_CD");
        		nMaxSeq = take.nvl(nMaxSeq, "0");
        		nMaxSeq = parseInt(nMaxSeq.replace("D", ""));
        	var nSubMaxSeq = parseInt(this.dsDeptList.getCaseCountNF("DEPT_LEVEL == '"+(selLvl+1)+"' && PARENT_DEPT == '"+selSeq+"'"));

        	if( "0" == arrRowidx )
        	{
        		var nRow = this.dsDeptList.addRow();
        		this.dsDeptList.setColumn(nRow, "DEPT_CD", "D" + (nMaxSeq+1).toString().lpad(4,"0"));
        		this.dsDeptList.setColumn(nRow, "DEPT_NM", "임시부서" + selSeq + "_" + (nMaxSeq+1).toString().lpad(4,"0"));
        		this.dsDeptList.setColumn(nRow, "DEPT_LEVEL", selLvl+1);
        		this.dsDeptList.setColumn(nRow, "PARENT_DEPT", selSeq);
        		this.dsDeptList.setColumn(nRow, "USE_YN", "Y");

        		objGrd.setTreeStatus(arrRowidx, true);
        	}
        	else if( "0" != arrRowidx )
        	{
        		var nRow2 = this.dsDeptList.rowposition;
        		var nRow = objGrd.getTreeChildRow(nRow2, -1);
        		var nChildCnt = objGrd.getTreeChildCount(nRow2);

        		if( nRow == -1 ){
        			nRow = nRow2 + 1;
        		}
        		else{

        			while( objGrd.getTreeChildRow(nRow2, -1) != -1 ){
        				nRow2 = objGrd.getTreeChildRow(nRow2, -1);
        			}
        			nRow = nRow2 + 1;
        		}

        		this.dsDeptList.insertRow(nRow);
        		this.dsDeptList.setColumn(nRow, "DEPT_CD", "D" + (nMaxSeq+1).toString().lpad(4,"0"));
        		this.dsDeptList.setColumn(nRow, "DEPT_NM", "임시부서" + selSeq + "_" + (nMaxSeq+1).toString().lpad(4,"0"));
        		this.dsDeptList.setColumn(nRow, "DEPT_LEVEL", selLvl+1);
        		this.dsDeptList.setColumn(nRow, "PARENT_DEPT", selSeq);

        		var sChildCnt = (nChildCnt + 1);
        		sChildCnt = sChildCnt.toString().padLeft(3,"0");
        		selOrder = selOrder + "." + sChildCnt;

        		this.dsDeptList.setColumn(nRow, "DEPT_ORDER", selOrder);
        		this.dsDeptList.setColumn(nRow, "USE_YN", "Y");

                objGrd.setTreeStatus(arrRowidx, true);
        	}
        };
        */
        this.divSearch_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fnSearch();
        	}
        };

        /**
         * fnTreeCallBack : 트리공통 콜백 함수
         * @example this.fnTreeCallBack(sGrdId, sGbn, nRow);
         */
        this.fnTreeCallBack = function(sGrdId, sGbn, nRow)
        {
            switch(sGbn)
            {
                case "add":
        			var nTreeParentRow = this.divDetail.form.grdMain.getTreeParentRow(nRow);
        			var sParentDept = "0";
        			if(nTreeParentRow > -1){
        				sParentDept = this.dsDeptList.getColumn(nTreeParentRow, "DEPT_CD");
        			}

        			var nMaxSeq = this.dsDeptList.getMaxNF("DEPT_CD");
        				nMaxSeq = take.nvl(nMaxSeq, "0");
        				nMaxSeq = parseInt(nMaxSeq.replace("D", ""));

        			this.dsDeptList.setColumn(nRow, "DEPT_CD", "D" + (nMaxSeq+1).toString().lpad(4,"0"));
        			this.dsDeptList.setColumn(nRow, "DEPT_NM", "임시부서" + sParentDept + "_" + (nMaxSeq+1).toString().lpad(4,"0"));
        			this.dsDeptList.setColumn(nRow, "PARENT_DEPT", sParentDept);
        			this.dsDeptList.setColumn(nRow, "USE_YN", "Y");

                    break;

                case "del":

                    break;

                case "move":
        			nRow = this.dsDeptList.rowposition;
        			while(nRow != -1){
        				var nTreeParentRow = this.divDetail.form.grdMain.getTreeParentRow(nRow);

        				var sParentDept = "0";
        				if(nTreeParentRow > -1){
        					sParentDept = this.dsDeptList.getColumn(nTreeParentRow, "DEPT_CD");
        				}

        				this.dsDeptList.setColumn(nRow, "PARENT_DEPT", sParentDept);

        				nRow = nTreeParentRow;
        			}

                    break;

                default:
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formid_onload,this);
            this.divSearch.form.edtDeptId.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.edtDeptNm.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divDetail.form.btnExcelDown.addEventHandler("onclick",this.btnExcelDown_onclick,this);
            this.divDetail.form.grdMain.addEventHandler("oncellclick",this.grdMain_oncellclick,this);
            this.divDetail.form.btnExcelUp.addEventHandler("onclick",this.btnExcelUp_onclick,this);
            this.divDetail.form.btnAdd.addEventHandler("onclick",this.divDetail_btnAdd_onclick,this);
        };
        this.loadIncludeScript("UM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
