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
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
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
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeptNmT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","staDeptNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
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

            obj = new Static("Static07_00_00_01_00","20","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","355","31","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00","690","31","285","11",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","Static24:0",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staListT","0","0","214","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("부서목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDetailT","348","0",null,"21","10",null,null,null,null,null,this.divDetail.form);
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

            obj = new Static("Static41","467","146",null,null,"0","64",null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptCdT","348","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("부서ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("taDescTxt","475","151",null,null,"7","69",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static45","328","0","20","200",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("Static00");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptNmT","348","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("부서명(한글)");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static04","467","taDescTxt:4",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","703","Static41:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDescTxtT","348","146","120",null,null,"64",null,null,null,null,this.divDetail.form);
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

            obj = new Button("btnExcelDown","170",null,"100","23",null,"6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("Excel Download");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","26",null,null,"Static45:0","btnExcelDown:6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("dsDeptList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"271\"/><Column size=\"46\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LEVEL\"/><Cell col=\"1\" text=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;&apos; : &apos;삭제&apos;\" edittype=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;none&apos; : &apos;button&apos;\" displaytype=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;none&apos; : &apos;buttoncontrol&apos;\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","475","61","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnExcelUp","60",null,"100","23",null,"6",null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("Excel Upload");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","475","91","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptCd","476","31","110","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","476","Static04:-26","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","476","Static41:35","120","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","836","Static41:4","150","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","836","Static41:35","150","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptEngNm","475","121","200","21",null,null,null,null,null,null,this.divDetail.form);
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

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
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
        *  2021.05.17      신준민             tranSave -> transaction 변경
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objTree = this.divDetail.form.grdMain;

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
        	    case "Save" : //조회 콜백
                    //Script
        			take.alert(this, "Info", "부서를 저장하였습니다.");
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
        			//take.tranSave(this, sTranId, "UserManagement.deptInfo", "dsDeptList", "", "", "fnCallback");
                    take.transaction(this, sTranId, "SVC_LOC::um/deptInfoSave.do", "dsDeptList=dsDeptList:U", "", "", "fnCallback", false);
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

            var sTreeOpt = '{use:"all", treeindex:0, codecolid:"DEPT_CD", parentcolid:"PARENT_DEPT", ordercolid:"DEPT_ORDER", treecallback:"fnTreeCallBack"}';
            this.fv_objTree.setTakeTree(this,sTreeOpt);

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
        		if ( take.confirm(this, "Question", "하위부서를 추가하시겠습니까.?\n취소를 선택하시면 일반 부서로 추가됩니다. "))
        		{
        			this.divDetail.form.grdMain._takeTreeAddChild(this,0);
        		} else {
        			this.divDetail.form.grdMain._takeTreeAdd(this,0);
        		}
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
        };

        //트리 그리드 세팅
        this.fv_objTree._setTakeTreeGrid = function()
        {
            var pThis, opjTreeProp;
            var sTreeProp;
            var nCnt;

            sTreeProp = take.nvl(this.taketree,"");
            // taketree 항목
            // {
            //     use : {  //필수 기능 사용 옵션 all일 경우 전부 true로 인식
            //               add  : true  //(boolean) true or false 노드 추가 여부
            //               del  : true  //(boolean) true or false 노드 삭제 여부
            //               move : false //(boolean) true or false 노드 이동 여부
            //           }
            //   , treeindex    : 0               //(number) 옵션 : 트리 컬럼 인덱스 생략시 그리드의 첫번째 treeitemcontrol 컬럼 index
            //   , codecolid    : "MENU_CD"
            //   , parentcolid  : "PARENT_MENU"  //(string) 필수 : 트리 부모 컬럼 아이디
            //   , ordercolid   : "MENU_ORDER"   //(string) 옵션 : 트리 정렬 컬럼 아이디
            //   , treecallback : "fnTreeCallBack"  //(string) 옵션 : callback 함수명
            //}
            //
            //예제 1 :  {parentcolid:"parent_menu", ordercolid:"menu_order"}
            //예제 2 :  {use:"all", treeindex:0, parentcolid:"parent_menu", ordercolid:"menu_order"}
            //예제 3 :  {use:{add:true,del:true,move:false}, treeindex:0, treekeycolid:"MENU_CD", parentcolid:"parent_menu", ordercolid:"menu_order"}

            //parentform이 없을 경우 부모폼 세팅
            if (take.nvl(this.parentform,"")=="")
            {
                this.parentform = take.getParentForm(this,true);
                pThis = this.parentform;
            }

            //taketree에 값이 있는지 여부 확인
            if (sTreeProp=="")
            {
                take.debug(pThis, "taketree 프로퍼티에 값 없어 기능을 사용 할 수 없습니다.");
                return;
            }

            //taketree값이 Object인지 여부 확인후 Object화
            if (take.isObject(sTreeProp))
            {
                objTreeProp = sTreeProp;
            } else {
                objTreeProp = take.StringToObject(sTreeProp);
                this.taketree = objTreeProp;
            }

            //taketree가 정상적으로 Object화 가 안된경우 ""
            if (objTreeProp=="")
            {
                take.debug(pThis, "taketree 프로퍼티가 Object 형이 아닙니다. ex) {'key0':'value0', 'key1':'value1'...}");
                return;
            }

            //use 가 있는지 여부
            if (objTreeProp.hasOwnProperty("use")) //있을경우
            {
                //all 또는 "" 없을 경우 전체 true
                if (take.nvl(objTreeProp.use,"")=="all" || take.nvl(objTreeProp.use,"")=="")
                {
                    //objTreeProp.use = {add:true, del:true, move:true};
                    objTreeProp.use = {add:true, del:true};
                }
            } else { //없을경우 전체 true
                //objTreeProp["use"] = {add:true, del:true, move:true};
                objTreeProp["use"] = {add:true, del:true};
            }

            //use add, del 가 있는지 여부
            if (!objTreeProp.use.hasOwnProperty("add")) objTreeProp.use["add"] = true;
            if (!objTreeProp.use.hasOwnProperty("del")) objTreeProp.use["del"] = true;
        	//if (!objTreeProp.use.hasOwnProperty("move")) objTreeProp.use["move"] = true;

            //treeindex 가 있는지 여부
            if (!objTreeProp.hasOwnProperty("treeindex"))
            {
                //tree index 찾기
                nCnt = this.getCellCount("Body");

                if (nCnt>0)
                {
                    for (var i=0;i<nCnt;i++)
                    {
                        if (this.getCellProperty( "body", i, "displaytype" )=="treeitemcontrol")
                        {
                            this.treeindex = i;
                            break;
                        }
                    }
                } else {
                    take.debug(pThis, "트리형 그리드가 아닙니다.");
                }
            } else {
                this.treeindex = nexacro.toNumber(objTreeProp.treeindex);
            }

            //parentcolid 가 있는지 여부
            if (objTreeProp.hasOwnProperty("codecolid"))
            {
                this.codecolid = objTreeProp.codecolid;
            }

            //parentcolid 가 있는지 여부
            if (objTreeProp.hasOwnProperty("parentcolid"))
            {
                this.parentcolid = objTreeProp.parentcolid;
            }

            //ordercolid 가 있는지 여부
            if (objTreeProp.hasOwnProperty("ordercolid"))
            {
                this.ordercolid = objTreeProp.ordercolid;
            }

            //treekeycolid 가 있는지 여부
            //if (objTreeProp.hasOwnProperty("trrekeycolid"))
            //{
            //    this.treekeycolid = objTreeProp.treekeycolid;
            //}


            //treecallback 가 있는지 여부
            if (objTreeProp.hasOwnProperty("treecallback"))
            {
                this.treecallback = objTreeProp.treecallback;
            }

        	//treeprecheck 가 있는지 여부
            if (objTreeProp.hasOwnProperty("treeprecheck"))
            {
                this.treeprecheck = objTreeProp.treeprecheck;
            }

            // 추가, 삭제 기능 활성화
            if (objTreeProp.use.add==true || objTreeProp.use.del==true)
            {
                this.addEventHandler("onrbuttondown",  this.treeShowMenu,     pThis);
            }

            //이동 기능 활성화
            if (objTreeProp.use.move)
            {
                this.addEventHandler("ondrag",         this.treeOnDrag,       pThis);
                this.addEventHandler("ondragmove",     this.treeOnDragMove,   pThis);
                this.addEventHandler("ondrop",         this.treeOnDrop,       pThis);
                this.addEventHandler("ondragleave",    this.treeOnDragLeave,  pThis);
            }

        };

        //트리 그리드 스크립트 세팅
        this.fv_objTree.setTakeTree = function(pThis, sOption)
        {
            this.taketree = sOption;
            this.parentform = pThis;
            this._setTakeTreeGrid();
        };

        this.fv_objTree.treeShowMenu = function(obj, e)
        {
            var pThis, objTreePopMenu, objTreePopMenuDs, objTreeProp;
            var nFRow;
            var bShow;

            pThis = obj.parentform;
            objTreePopMenuDs = take.nvl(pThis.objects["_tdsTreePopMenu"],"");
            objTreeProp = obj.taketree;

            obj.getBindDataset().set_rowposition(e.row);

            if (objTreePopMenuDs == "")
            {
        		objTreePopMenuDs = new Dataset;
        		objTreePopMenuDs.load();
        		pThis.addChild("_tdsTreePopMenu", objTreePopMenuDs);

        		var sDsXml =  "<Dataset id=\"_tdsTreePopMenu\">                                  \n";
        			sDsXml += "  <ColumnInfo>                                                    \n";
        			sDsXml += "    <Column id=\"captioncolumn\"  type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"idcolumn\"       type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"levelcolumn\"    type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"enablecolumn\"   type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"userdatacolumn\" type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "    <Column id=\"visible\"        type=\"STRING\" size=\"256\"/>  \n";
        			sDsXml += "  </ColumnInfo>                                                   \n";
        			sDsXml += "  <Rows>                                                          \n";

                    if (objTreeProp.use.add)
                    {
                        sDsXml += "    <Row>                                                         \n";
                        sDsXml += "      <Col id=\"captioncolumn\">동일그룹(노드) 추가</Col>       \n";
                        sDsXml += "      <Col id=\"idcolumn\">addlevel</Col>                         \n";
                        sDsXml += "      <Col id=\"levelcolumn\">0</Col>                             \n";
                        sDsXml += "    </Row>                                                        \n";
                        sDsXml += "    <Row>                                                         \n";
                        sDsXml += "      <Col id=\"captioncolumn\">하위그룹(노드) 추가</Col>       \n";
                        sDsXml += "      <Col id=\"idcolumn\">addchildlevel</Col>                    \n";
                        sDsXml += "      <Col id=\"levelcolumn\">0</Col>                             \n";
                        sDsXml += "    </Row>                                                        \n";
                    }

                    if (objTreeProp.use.del)
                    {
                        sDsXml += "    <Row>                                                         \n";
                        sDsXml += "      <Col id=\"captioncolumn\">삭제</Col>                       \n";
                        sDsXml += "      <Col id=\"idcolumn\">deltree</Col>                         \n";
                        sDsXml += "      <Col id=\"levelcolumn\">0</Col>                            \n";
                        sDsXml += "    </Row>	                                                    \n";
                    }

                    sDsXml += "</Rows>                                                          \n";
        			sDsXml += "</Dataset>                                                       \n";

        		objTreePopMenuDs.loadXML(sDsXml);
        	}

            objTreePopMenu = take.nvl(pThis.components["pmTreePop"],"");

            if (objTreePopMenu=="")
        	{
        		objTreePopMenu = new PopupMenu();
        		objTreePopMenu.init("pmTreePop", "absolute", 0, 0, 60, 60, null, null);
        		pThis.addChild("pmTreePop", objTreePopMenu);

        		// Tree Grid 마우스 우측 메뉴 onmenuclickHandler Event
        		objTreePopMenu.addEventHandler("onmenuclick", obj.treeShowPopUp, pThis);

        		objTreePopMenu.set_innerdataset(objTreePopMenuDs.name);
        		objTreePopMenu.set_captioncolumn("captioncolumn");
        		objTreePopMenu.set_idcolumn("idcolumn");
        		objTreePopMenu.set_levelcolumn("levelcolumn");
        		objTreePopMenu.set_enablecolumn("enablecolumn");
        		objTreePopMenu.set_userdatacolumn("userdatacolumn");

                objTreePopMenu.set_itemheight(25);

        		objTreePopMenu.show();
        	}

            //head일 경우 동일노드 추가만 제공
            if (e.row<0)
            {
               bShow = false;
               if (e.row<-1) return false;
            } else { //body일경우 동일노드 추가, 하위노드 추가, 삭제 기능 제공
                bShow = true;
            }

            nFRow = objTreePopMenuDs.findRow(objTreePopMenu.idcolumn, "addchildlevel");
            if (nFRow >= 0) objTreePopMenuDs.setColumn(nFRow, objTreePopMenu.enablecolumn, bShow);
            nFRow = objTreePopMenuDs.findRow(objTreePopMenu.idcolumn, "deltree");
            if (nFRow >= 0) objTreePopMenuDs.setColumn(nFRow, objTreePopMenu.enablecolumn, bShow);

            objTreePopMenu.taketree = obj;
            //objTreePopMenu.trackPopupByComponent(obj, e.canvasx - 60, e.canvasy - 20);
            objTreePopMenu.trackPopupByComponent(obj, e.canvasx, e.canvasy);
        };

        //트리 팝업
        this.fv_objTree.treeShowPopUp = function(obj, e)
        {
            var objGrid, pThis;

            objGrid = obj.taketree;
            pThis = objGrid.parentform;

            switch(e.id)
            {
                case "addlevel" :
                    objGrid._takeTreeAdd(pThis);
                    break;

                case "addchildlevel" :
                    objGrid._takeTreeAddChild(pThis);
                    break;

                case "deltree" :
                    objGrid._takeTreeDel(pThis);
                    break;
            }
        };

        //트리 드래그 이벤트
        this.fv_objTree.treeOnDrag = function(obj, e)
        {
        	e.userdata = e.row;

        	if(e.cell != obj.treeindex) return false;

        	this.fv_objTree.treeDragInfo(obj, e.row, e.cell);
        	//this.fv_nMoveRow= e.row;
        	return true;
        };

        //트리 데이터
        this.fv_objTree.treeDragInfo = function(objGrid, nRow, nIdx)
        {
        	var pThis, objDs, objStaInfo, objStaPos, objStaLine, objRect;
            var sColumn, sText;

            objDs = objGrid.getBindDataset();
            sColumn = objGrid.getCellProperty("body", nIdx, "text");
            sColumn = sColumn.replace("bind:","");
            sText = objDs.getColumn(objGrid.getDatasetRow(nRow), sColumn);
            pThis = objGrid.parentform;
            objRect = objGrid.getCellRect(nRow, nIdx);

            objStaInfo = take.nvl(pThis["_staTreeItemInfo"], "");
            if (objStaInfo=="")
            {
                objStaInfo = new Static("_staTreeItemInfo", objGrid.getOffsetLeft(), objGrid.getOffsetTop(), objRect.width, objRect.height, null, null);
                pThis.addChild("_staTreeItemInfo", objStaInfo);
                objStaInfo.show();
                objStaInfo.set_background("#eeeeee");
                objStaInfo.set_border("2px dotted #bbbbbb");
                objStaInfo.set_usedecorate(true);
            }

            objStaInfo.set_text(sText);
            objStaInfo.treeitemtext = sText;
            objStaInfo.set_visible(true);
            objStaInfo.set_enable(true);

            objStaPos = take.nvl(pThis["_staTreeItemPos"], "");
            if (objStaPos=="")
            {
                objStaPos = new Static("_staTreeItemPos", objGrid.getOffsetLeft(), objGrid.getOffsetTop(), 10, 10, null, null);
                pThis.addChild("_staTreeItemPos", objStaPos);
                objStaPos.show();
                objStaPos.set_background("url('theme://images/ico_WF_group01.png') no-repeat left center");
                objStaPos.set_border("0px solid");
            }

            objStaPos.set_visible(true);
            objStaPos.set_enable(true);

            objStaLine = take.nvl(pThis["_staTreeItemLine"], "");
            if (objStaLine=="")
            {
                objStaLine = new Static("_staTreeItemLine", objGrid.getOffsetLeft(), objGrid.getOffsetTop(), 25, 1, null, null);
                pThis.addChild("_staTreeItemLine", objStaLine);
                objStaLine.show();
                objStaLine.set_border("1px solid #e55723");
                objStaLine.set_enableevent(true);
            }

            objStaLine.set_visible(true);
            objStaLine.set_enable(true);

        }

        //트리 드래그 무브 이벤트
        this.fv_objTree.treeOnDragMove = function(obj, e)
        {
            var nX, nTop, nGap, nHeadCnt, nDiff, nItemTop;
            var sNewGbn;
            var objItemInfo, objRect, objHeadInfo, pThis, objParentXY;

            pThis = obj.parentform;
            nGap = 15;
            objParentXY = take.getParentXY(obj);
            ////this._staTreeItemInfo.move(e.canvasx, e.canvasy + nexacro.toNumber(obj.getFormatRowProperty(0,"size")));
            //nTop = nexacro.toNumber(obj.top); //_getWindowPosition().y==>top, _getWindowPosition().x==>left
            nTop = objParentXY.y;
            objHeadInfo = take.getGridHeadInfo(obj);
            objRect = obj.getCellRect(e.row, 0);

            nX = objParentXY.x + e.canvasx;
            //nDiff = e.canvasy-(nexacro.toNumber(obj.top)+objRect.top);
            nDiff = e.canvasy-objRect.top;
            //trace("e.row --> " + e.row + " / diff --> " + nDiff + " / e.canvasy -->" + e.canvasy + " / nTop --> " + nTop + " / objRect.top --> " + objRect.top);

            if (nDiff<=(objRect.height*0.25))
            {
                nItemTop = objRect.top+nTop+2;
                //trace("Up --> " + nItemTop);
                sNewGbn = "prev";
                sText = "<fc v='#e55723'>(▲)</fc> ";
            } else if (nDiff>=(objRect.height*0.5)) {
                nItemTop = objRect.top+nTop+objRect.height-3;
                //trace("Down --> " + nItemTop);
                sNewGbn = "next";
                sText = "<fc v='#e55723'>(▼)</fc> ";
            } else {
                //nItemTop = e.canvasy;
                nItemTop = objRect.top+nTop+(objRect.height/2);
                //trace("Normal --> " + nItemTop);
                sNewGbn = "child";
                sText = "<fc v='#e55723'>(◆)</fc> ";
            }

            this._staTreeItemPos.move(objParentXY.x, nItemTop-4);
            this._staTreeItemLine.move(objParentXY.x, nItemTop);

            objItemInfo = this._staTreeItemInfo;

            objItemInfo.set_text(sText + objItemInfo.treeitemtext);
            //objItemInfo.move(nX+nGap, e.canvasy+nexacro.toNumber(obj.top)+nGap);
            objItemInfo.move(nX+nGap, e.canvasy+nTop+nGap);
            objItemInfo.treeinsinfo = {gubun:sNewGbn, row:e.row};

        };

        //트리 드롭 이벤트
        this.fv_objTree.treeOnDrop = function(obj, e)
        {
            var objInfo;
            var pThis = obj.parentform;
        	var bRtn;

            this._staTreeItemInfo.set_visible(false);
            this._staTreeItemInfo.set_enable(false);

            this._staTreeItemPos.set_visible(false);
            this._staTreeItemPos.set_enable(false);

            this._staTreeItemLine.set_visible(false);
            this._staTreeItemLine.set_visible(false);

            objInfo = this._staTreeItemInfo.treeinsinfo;

        	if (take.nvl(obj.treeprecheck, "")!="")
        	{
                if (take.isFunction(pThis[obj.treeprecheck]))
                {
                    bRtn =pThis[obj.treeprecheck].call(pThis, this.name, "drop", e.userdata, objInfo);
                } else {
                    take.debug(pThis.name + "." + this.name + ".treeprecheck(" + obj.treeprecheck + ")", "Tree pre check 함수가 없습니다.");
        		}
            }

        	if (bRtn==false) return false;

        	if (obj.iscellmove==true)
        	{
        		this.fv_objTree.treeDataMove(obj, {gubun:objInfo.gubun, beforerow:e.userdata, newrow:objInfo.row});
        		//obj.ismovecomplete= true;
            }
            objInfo = null;
        }

        //트리 드래그 리브 이벤트
        this.fv_objTree.treeOnDragLeave = function(obj, e)
        {
            //trace("dragleave");
        	this._staTreeItemInfo.set_visible(false);
            this._staTreeItemInfo.set_enable(false);

            this._staTreeItemPos.set_visible(false);
            this._staTreeItemPos.set_enable(false);

            this._staTreeItemLine.set_visible(false);
            this._staTreeItemLine.set_visible(false);

            this._staTreeItemInfo.treeinsinfo = null;

        }

        //트리데이터무브이벤트
        this.fv_objTree.treeDataMove = function(obj, objInfo)
        {
            var nNRow, nBRow, nIdx, nCurLev, nCnt, nDeffLev;
            var sGbn, sColumn, sPCode, sPKeyCode;
            var objDs;
            var arrChild;

            pThis = obj.parentform;
            objDs = obj.getBindDataset();
            nIdx = obj.treeindex;
            nNRow = objInfo.newrow;
            nBRow = objInfo.beforerow;
            sGbn = objInfo.gubun;
            sColumn = obj.getCellProperty("body", nIdx, "treelevel");
            sColumn = sColumn.replace("bind:","");
            nCurLev = nexacro.toNumber(objDs.getColumn(nNRow, sColumn));

            //sPCode = objDs.getColumn(nNRow, obj.parentcolid);

            if (sGbn=="child")
            {
                nCurLev++;
                if (nNRow<nBRow)
                {
                    nNRow++;
                }

                if (nNRow==nBRow) return false;

                sPCode = objDs.getColumn(nNRow, take.getBindColName(obj, nIdx));
                sPKeyCode = objDs.getColumn(nNRow, obj.parentcolid);

            } else if (sGbn=="prev") {
                if (nNRow>nBRow)
                {
                    nNRow--;
                }

                if (nNRow==nBRow) return false;

            } else if (sGbn=="next") {
                if (nCurLev != nexacro.toNumber(objDs.getColumn(nBRow, sColumn)))
                {
                    //take.debug(pThis, "동일 레벨만 이동 할 수있습니다.");
                    take.alert(pThis, "Info", "동일 레벨만 이동 할 수있습니다.");
                    return false;
                } else {
                    if(take.getTreeChildRows(obj, nIdx, nNRow)!=-1)
                    {
                        take.alert(pThis, "Info", "해당 위치로 이동 할 없습니다.");
                        return false;
                    }
                }

                if (nNRow<nBRow)
                {
                    nNRow++;
                }

                if (nNRow==nBRow) return false;
            }

            arrChild = take.getTreeFamilyRows(obj, nIdx, nBRow);

            if (arrChild!=-1)
            {
                if (arrChild.indexOf(nNRow)>=0)
                {
                    //take.debug(pThis, "선택한 그룹의 하위로 이동할 수 없습니다.");
                    take.alert(pThis, "Info", "선택한 그룹의 하위로 이동할 수 없습니다.");
                    return false;
                }
            }

            //trace("sGbn --> " + sGbn + " / before row --> " + nBRow + " / new row --> " + nNRow);
            nNRow = objDs.moveRow(nBRow, nNRow);

            if (nNRow>=0)
            {
                //nDeffLev = nexacro.toNumber(objDs.getColumn(nNRow, sColumn))-nCurLev;
                nDeffLev = nCurLev - nexacro.toNumber(objDs.getColumn(nNRow, sColumn));

        //        sPKeyCode = objDs.getColumn(obj.getTreeParentRow(nNRow), obj.codecolid);
        		objDs.setColumn(nNRow, sColumn, nCurLev);
                //sPKeyCode = objDs.getColumn(nNRow, obj.parentcolid);
                objDs.setColumn(nNRow, obj.parentcolid, sPKeyCode);
            } else {
                //take.debug(pThis, "이동 실패");
                take.alert(pThis, "Info", "이동 실패");
                return false;
            }

            if (arrChild!=-1)
            {
                nCnt = arrChild.length;
                if (nCnt>0)
                {
                    //nNRow++;
                    //nCurLev++;

                    for (var i=nCnt-1; i>=0; i--)
                    {
                        if (nNRow>arrChild[i]){
                            nBRow = arrChild[i]-1;
                        } else if (nNRow<arrChild[i]) {
                            nBRow = arrChild[i] + ((nCnt-1)-i);
                            if (nCnt-1==i)
                            {
                                nNRow++;
                            } else {
                                nNRow;
                            }
                        }

                        nNRow = objDs.moveRow(nBRow, nNRow);

                        if (nNRow>=0)
                        {
                            objDs.setColumn(nNRow, sColumn, nexacro.toNumber(objDs.getColumn(nNRow, sColumn)) + nDeffLev);
                            //objDs.setColumn(nNRow, obj.parentcolid, sPCode);
                        } else {
                            take.debug(pThis, "이동 실패");
                            return false;
                        }
                    }
                }
            }

            //obj.treeInitOrder(nCurLev);
            obj.treeInitOrder();

            if (take.nvl(obj.treecallback, "")!="")
        	{
                if (take.isFunction(pThis[obj.treecallback]))
                {
                    pThis[obj.treecallback].call(pThis, this.name, "move", "");
                } else {
                    take.debug(pThis.name + "." + this.name + ".treecallback(" + sCallBack + ")", "Tree CallBack 함수가 없습니다.");
        		}
            }

            return true;
        }

        //트리에 동일 레벨 추가
        this.fv_objTree._takeTreeAdd = function(pThis, nIdx)
        {
            var nRow, nNRow, nCurLev, nTRow, nRowType;
            var objDs, pThis;
            var arrRows;
            var sColumn;

            pThis = this.parentform;
            objDs = this.getBindDataset();
            nIdx = take.nvl(nIdx, this.treeindex);
            nRow = objDs.rowposition;
            nTRow = this.getTreeRow(nRow);
        	nRowType = objDs.getRowType(nRow);

        	//20210120 정해원
        	//노드추가 -> 노드추가 하면 저장 할 때
        	//상위노드의 MENU_CD가 생성되기 전이라 오류발생
        	//메세지 처리 추가 (저장 후 진행해주세요)
        	if (nRowType != Dataset.ROWTYPE_NORMAL && nRowType != Dataset.ROWTYPE_EMPTY) {
        		take.alert(pThis, "info", "저장 후 진행해주시기 바랍니다.");
        		return;
        	}

            this.selectRow(nTRow, false);

            arrRows = take.getTreeNodeRows(this, nIdx, nRow);
            if (arrRows!=-1)
            {
                nNRow = Math.max.apply(null, arrRows);
            }

            arrRows = take.getTreeFamilyRows(this, nIdx, nNRow);
            if (arrRows!=-1)
            {
                nNRow = Math.max.apply(null, arrRows);
            }

            nNRow = objDs.insertRow(nNRow+1);

            if (nNRow>=0)
            {
                sColumn = this.getCellProperty("body", nIdx, "treelevel");
                sColumn = sColumn.replace("bind:","");

                nCurLev = nexacro.toNumber(objDs.getColumn(nRow, sColumn), 0);

                objDs.setColumn(nNRow, sColumn, nCurLev);
                objDs.setColumn(nNRow, take.getBindColName(this, nIdx), "new item");
                objDs.setColumn(nNRow, this.parentcolid, objDs.getColumn(nRow, this.parentcolid));

                //this.treeInitOrder(nCurLev);
            }

            objDs.set_rowposition(nNRow);

            nTRow = this.getTreeRow(nNRow)
            this.selectRow(nTRow);

            this.treeInitOrder();

            if (take.nvl(this.treecallback, "")!="")
        	{
                if (take.isFunction(pThis[this.treecallback]))
                {
                    pThis[this.treecallback].call(pThis, this.name, "add", nNRow);
                } else {
                    take.debug(pThis.name + "." + this.name + ".treecallback(" + sCallBack + ")", "Tree CallBack 함수가 없습니다.");
        		}
            }

            return nNRow;
        };

        //트리에 하위 레벨 추가
        this.fv_objTree._takeTreeAddChild = function(pThis, nIdx)
        {
            var nRow, nNRow, nCurLev, nTRow, nRowType;
            var objDs, pThis;
            var sColumn;

            pThis = this.parentform;
            objDs = this.getBindDataset();
            nRow = objDs.rowposition;
            nIdx = take.nvl(nIdx, this.treeindex);
            nTRow = this.getTreeRow(nRow);
        	nRowType = objDs.getRowType(nRow);

        	//20210120 정해원
        	//노드추가 -> 노드추가 하면 저장 할 때
        	//상위노드의 MENU_CD가 생성되기 전이라 오류발생
        	//메세지 처리 추가 (저장 후 진행해주세요)
        	if (nRowType != Dataset.ROWTYPE_NORMAL && nRowType != Dataset.ROWTYPE_EMPTY) {
        		take.alert(pThis, "info", "저장 후 진행해주시기 바랍니다.");
        		return;
        	}

            this.selectRow(nTRow, false);

            if (this.isTreeLeafRow(nTRow, true))
            {
                nNRow = objDs.insertRow(nRow+1);
            } else {
                nNRow = objDs.insertRow(Math.max.apply(null, take.getTreeFamilyRows(this, nIdx, nRow))+1);
            }

            if (nNRow>=0)
            {
                sColumn = this.getCellProperty("body", nIdx, "treelevel");
                sColumn = sColumn.replace("bind:","");

                nCurLev = nexacro.toNumber(objDs.getColumn(nRow, sColumn), 0)+1;

                objDs.setColumn(nNRow,sColumn,nCurLev);
                objDs.setColumn(nNRow, take.getBindColName(this, nIdx), "new item");
                objDs.setColumn(nNRow, this.parentcolid, objDs.getColumn(nRow, this.parentcolid));

                //this.treeInitOrder(nCurLev);
            }

            nTRow = this.getTreeRow(nNRow);
            this.selectRow(nTRow);

            this.treeInitOrder();

            if (take.nvl(this.treecallback, "")!="")
        	{
                if (take.isFunction(pThis[this.treecallback]))
                {
                    pThis[this.treecallback].call(pThis, this.name, "add", nNRow);
                } else {
                    take.debug(pThis.name + "." + this.name + ".treecallback(" + sCallBack + ")", "Tree CallBack 함수가 없습니다.");
        		}
            }

            return nNRow;
        };

        //트리 아이템 삭제
        this.fv_objTree._takeTreeDel = function(pThis, nIdx)
        {
            var nCnt, nRow, nCurLev;
            var objDs, pThis;
            var arrRows;
            var sColumn;

            objDs = this.getBindDataset();
            nRow = objDs.rowposition;
            nIdx = take.nvl(nIdx, this.treeindex);
            //sColumn = obj.getCellProperty("body", nIdx, "treelevel");
            //sColumn = sColumn.replace("bind:","");
            //nCurLev = nexacro.toNumber(objDs.getColumn(nRow, sColumn));

            if (this.isTreeLeafRow(nRow, true))
            {
                objDs.deleteRow(nRow);
            } else {

                arrRows = take.getTreeFamilyRows(this, nIdx, nRow);

                nCnt = arrRows.length-1;

                //trace("arrRows --> " + arrRows);

                //반복 필요
                for (var i=nCnt; i>=0; i--)
                {
                    //trace("arrRows["+i+"] --> " + arrRows[i]);
                    objDs.deleteRow(arrRows[i]);
                }

                //trace("nRow --> " + nRow);
                objDs.deleteRow(nRow);
            }

            if (nRow==objDs.rowcount) nRow = nRow-1;
            this.selectRow(this.getTreeRow(nRow));

            //this.treeInitOrder(nCurLev);
            this.treeInitOrder();

            if (take.nvl(this.treecallback, "")!="")
        	{
                if (take.isFunction(pThis[this.treecallback]))
                {
                    pThis[this.treecallback].call(pThis, this.name, "del", "");
                } else {
                    take.debug(pThis.name + "." + this.name + ".treecallback(" + sCallBack + ")", "Tree CallBack 함수가 없습니다.");
        		}
            }
        };

        //this.fv_objTree.treeInitOrder = function(sLvl)
        //{
        //    this._setTreeOrder(sLvl);
        //}

        this.fv_objTree.treeInitOrder = function()
        {
            var objLvlInfo;

            objLvlInfo = take.getTreeLevelInfo(this, this.treeindex);

            for (var i=objLvlInfo.min;i<=objLvlInfo.max;i++)
            {
                this._setTreeOrder(i);
            }
        }

        this.fv_objTree._setTreeOrder = function(nLvl)
        {
            var arrRows;
            var nIdx, nCnt, nPRow, nNo=1;
            var objDs;
            var sColId, sPOrder, sOrder;

            nIdx = this.treeindex;
            arrRows = take.getTreeLevRows(this, nIdx, nLvl);
            nCnt = arrRows.length;

            if (nCnt<=0) return false;

            objDs = this.getBindDataset();
            sColId = this.ordercolid;

            objDs.set_enableevent(false);

            for (var i=0; i<nCnt; i++)
            {
                nPRow = this.getTreeParentRow(arrRows[i]);

                if (nPRow>=0)
                {
                    sPOrder = objDs.getColumn(nPRow,sColId);
                } else {
                    sPOrder ="";
                }

                if (nPRow!=this.getTreeParentRow(arrRows[i-1])) nNo=1;

                sOrder = (sPOrder==""?"": sPOrder+".") + nNo.toString().padLeft(3,"0");

                objDs.setColumn(arrRows[i],sColId,sOrder);

                nNo++;
            }

            objDs.set_enableevent(true);

        }

        // this.fv_objTree._setTreeOrder = function(nLvl)
        // {
        //     var arrRows;
        //     var nIdx, nCnt, nPRow, nNo=1;
        //     var objDs;
        //     var sColId, sPOrder, sOrder;
        //
        //     nIdx = this.treeindex;
        //     arrRows = take.getTreeLevRows(this, nIdx, nLvl);
        //     nCnt = arrRows.length;
        //
        //     if (nCnt<=0) return false;
        //
        //     objDs = this.getBindDataset();
        //     sColId = this.ordercolid;
        //
        //     objDs.set_enableevent(false);
        //
        //     for (var i=0; i<nCnt; i++)
        //     {
        //         nPRow = this.getTreeParentRow(arrRows[i]);
        //
        //         if (nPRow>=0)
        //         {
        //             sPOrder = objDs.getColumn(nPRow,sColId);
        //         } else {
        //             sPOrder ="";
        //         }
        //
        //         if (nPRow!=this.getTreeParentRow(arrRows[i-1])) nNo=1;
        //
        //         sOrder = (sPOrder==""?"": sPOrder+".") + nNo.toString().padLeft(3,"0");
        //
        //         objDs.setColumn(arrRows[i],sColId,sOrder);
        //
        //         nNo++;
        //     }
        //
        //     objDs.set_enableevent(true);
        //
        // }

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
