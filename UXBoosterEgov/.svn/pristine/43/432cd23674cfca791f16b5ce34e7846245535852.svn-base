(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM070");
            this.set_titletext("프로젝트관리_양식관리_양식관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTemplateList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemplateDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProject", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnAll", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProject","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsProject");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTemplateNmT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("양식명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTemplateNm","staTemplateNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYn","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYn:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsUseYnAll");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","310","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("양식 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static20","330","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("양식 상세정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","26","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTemplateList");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"82\"/><Column size=\"175\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"양식ID\"/><Cell col=\"1\" text=\"양식명\"/></Band><Band id=\"body\"><Cell text=\"bind:TEMPLATE_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TEMPLATE_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","449","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34","449","56",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static36","449","86",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static41","449","116",null,"97","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTemplateIdT","330","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("양식ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","330","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:7","91","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTemplateNmT","330","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("양식명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtTemplateNm","staTemplateNmT:7","61","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDescTxtT","330","116","120","97",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("taDescTxt","staDescTxtT:7","122",null,"85","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            this.divDetail.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","330","217",null,null,"0","65",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static04","449","wbWebEditor:4",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNmT","330","wbWebEditor:4","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static06","449","Static04:-1",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNmT","330","staRegNmT:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","staRegNmT:7","wbWebEditor:9","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","staModNmT:7","staRegNm:9","200","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT00","664","wbWebEditor:4","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","staModNm:7","staRegDtT00:-1","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTemplateId","staTemplateIdT:7","31","110","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","staRegDtT00:7","wbWebEditor:9","120","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","staModDtT:7","staRegDt:9","120","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","310","26","20",null,null,"4",null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

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
            obj = new BindItem("item0","divDetail.form.cboUseYn","value","dsTemplateDetail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtTemplateNm","value","dsTemplateDetail","TEMPLATE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.taDescTxt","value","dsTemplateDetail","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.staTemplateId","text","dsTemplateDetail","TEMPLATE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.staRegNm","text","dsTemplateDetail","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.staModNm","text","dsTemplateDetail","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.staModDt","text","dsTemplateDetail","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.staRegDt","text","dsTemplateDetail","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM070.xfdl", function() {
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
        this.fv_bWebOnload = false;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sSelTemplateCd = "";
        this.fv_sSelectRow = "";
        this.fv_sSaveTemplateCd = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM070_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		var sBaseUrl = take.getSvcUrl();
        		this.divDetail.form.wbWebEditor.set_url(sBaseUrl + "editor/SummerNote/summer.html");
        		this.setTimer(1,100);
           }
        };

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

            //변수선언
        	var sUrl   = "",      //서비스 URL
                sInDs  = "",     //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",    //데이터를 받아올 데이터셋 지정
                sParam = "",    //파라메터 사용 안 할 경우
                sCallBack;       //콜백 처리 함수
            sCallBack  = "fnCallback" ;

        	var sParentKey, sCodeKey, sCodeId, sCodeNm, sLevel, sUseYn;
            var objDs;
        	var nCurRow, nCnt;

            switch(sTranId)
            {
                case "CodeSearch" :  // 코드조회
                    var sOutDs = ["dsUseYnAll", "dsProject"];
                    var sNameSpaces = ["Main.codeSimpleSelect", "ProjectManagement.projectInfoCode"];
        			var sParam = "sHeaderType=ALL sGroupId=00009";

                    take.tranSelect(this, "CodeSearch", sNameSpaces, "dsSearch", sOutDs, sParam,
                    function(sId, nErrCd, sErrMsg){
        				//callback
                        var nFindRow = this.dsProject.findRow("CODE", this.fv_sProjectCd);
        				this.divSearch.form.cboProject.set_index(nFindRow);
        				this.divSearch.form.cboUseYn.set_index(0);

                        // PM00000001 관리자 아닐시 콤보 변경 X 처리
                        if(this.fv_sProjectCd != "PM00000001") {
                            this.divSearch.form.cboProject.set_readonly();
                        }

        				this.dsUseYn.clearData();
        				for( var i=1; i<this.dsUseYnAll.rowcount; i++ )
        				{
        					var nRow = this.dsUseYn.addRow();
        					this.dsUseYn.copyRow(nRow, this.dsUseYnAll, i);
        				}

        				this.fnSearch();
        			});

                    break;
                case "Search" :   // 조회
                    take.tranSelect(this, "Search", "ProjectManagement.projectTemplateList", "dsSearch", "dsTemplateList", "", sCallBack);

                    break;
                case "DetailSearch" :    // 상세조회
        			this.dsSearch.clearData();
        			this.dsSearch.addRow();

        			this.fv_sSelectRow = this.divDetail.form.grdMain.getSelectedRows();
        			var nSelRow = this.dsTemplateList.rowposition;
        			var sProjectCd = this.dsTemplateList.getColumn(this.fv_sSelectRow, "PROJECT_CD");
        			var sTemplateCd =  this.dsTemplateList.getColumn(this.fv_sSelectRow, "TEMPLATE_CD");

        			if( take.nvl(this.fv_sSaveTemplateCd,"") != "" && this.fv_sSaveTemplateCd != sTemplateCd)
        			{
        				return false;
        			}
        			this.fv_sSaveTemplateCd = "";

        			this.dsSearch.setColumn(0, "PROJECT_CD", sProjectCd);
        			this.dsSearch.setColumn(0, "TEMPLATE_CD", sTemplateCd);

        			this.dsTemplateDetail.clearData();

        			take.tranSelect(this, "DetailSearch", "ProjectManagement.projectTemplateDetail", "dsSearch", "dsTemplateDetail", "", sCallBack);
                    break;

                default :
                    break;
            }
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
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
        			//20210118 정해원 게시판 내용 조회 불가
        			//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        			//this.divDetail.form.wbWebEditor.getProperty("window").callMethod("setContents", "");
        			var docWeb = this.divDetail.form.wbWebEditor.getProperty("document").getProperty("all");
        				docWeb.getProperty("inputData").setProperty("value", "");
        			this.divDetail.form.wbWebEditor.getProperty("window").callMethod("setContents");

        			var nFRow = this.dsTemplateList.findRowAsNF("TEMPLATE_CD", this.fv_sSaveTemplateCd);
        			if( nFRow != -1 )
        			{
        				this.divDetail.form.grdMain.selectRow(nFRow);
        			}
        // 			var sContents = this.dsTemplateDetail.getColumn(0, "TEMPLATE_TXT");
        // 			this.divDetail.form.wbWebEditor.getProperty("window").callMethod("setContents", sContents);

                    break;
                case "DetailSearch" :  //조회 콜백
                    //Script
        			var sContents = this.dsTemplateDetail.getColumn(0, "TEMPLATE_TXT");
        			//20210118 정해원 게시판 내용 조회 불가
        			//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        			//this.divDetail.form.wbWebEditor.getProperty("window").callMethod("setContents", sContents);
        			var docWeb = this.divDetail.form.wbWebEditor.getProperty("document").getProperty("all");
        				docWeb.getProperty("inputData").setProperty("value", take.nvl(sContents, ""));

        			this.divDetail.form.wbWebEditor.getProperty("window").callMethod("setContents");

                    break;
        		case "Save" : //저장 콜백
        			//Script
        			take.alert(this, "String", "저장이 완료되었습니다.", "");
        			this.fv_sSaveTemplateCd = this.dsTemplateDetail.getColumn(0, "TEMPLATE_CD");

        			this.fnSearch();

        			break;
        		case "Delete" : //삭제 콜백
        			//Script
        			take.alert(this, "String", "삭제가 완료되었습니다.", "");
        			this.fnSearch();

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

        	this.dsSearch.setColumn(0, "PROJECT_CD", this.divSearch.form.cboProject.value);
        	this.dsSearch.setColumn(0, "TEMPLATE_CD", this.divSearch.form.edtTemplateNm.value);
        	this.dsSearch.setColumn(0, "USE_YN", this.divSearch.form.cboUseYn.value);

        	this.dsTemplateList.clearData();
        	this.dsTemplateDetail.clearData();

            take.tranSelect(this,sTranId,"ProjectManagement.projectTemplateList","dsSearch", "dsTemplateList", "", "fnCallback");
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

        	takeval.add(this, "Save", this.divDetail.form.edtTemplateNm, "양식명", "value", true, "string", "", "");
        	//takeval.add(this, "Save", this.divDetail.form.taDescTxt, "상세설명", "text", true, "string", "", "");

        	var rtnBol = takeval.check(this, "Save");
        	if( !rtnBol )
        	{
        		return false;
        	}

        	var sContents = this.divDetail.form.wbWebEditor.getProperty("window").callMethod("getContents", 1);
        	this.dsTemplateDetail.setColumn(0, "TEMPLATE_TXT", sContents);

        	//tranSave -> transaction 변경 2021.05.17 전영찬
        	//take.tranSave(this, sTranId, "ProjectManagement.projectTemplate", "dsTemplateDetail", "dsTemplateDetail", "", "fnCallback");
        	take.transaction
        	(
        		this,
        		sTranId,
        		"SVC_LOC::pm/projectTemplateSave.do",
        		"dsTemplateDetail=dsTemplateDetail:U",
        		"",
        		"",
        		"fnCallback"
        	);
        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //Script
        	//var nRow = this.dsTemplateList.addRow();
        	this.dsTemplateDetail.clearData();
        	var nDetailRow = this.dsTemplateDetail.addRow();
        	this.dsTemplateDetail.setColumn(nDetailRow, "PROJECT_CD", this.divSearch.form.cboProject.value);
        	this.dsTemplateDetail.setColumn(nDetailRow, "USE_YN", "Y");

        	//20210118 정해원 게시판 내용 조회 불가
        	//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        	//this.divDetail.form.wbWebEditor.getProperty("window").callMethod("setContents", "");
        	var docWeb = this.divDetail.form.wbWebEditor.getProperty("document").getProperty("all");
        		docWeb.getProperty("inputData").setProperty("value", "");

        	this.divDetail.form.wbWebEditor.getProperty("window").callMethod("setContents");
        	this.divDetail.form.grdMain.selectRow(-1);
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
            //Script
        	var nRow = this.dsTemplateList.rowposition;
        	var sTemplateCd = take.nvl(this.dsTemplateList.getColumn(nRow, "TEMPLATE_CD"), "");

        	if( "" == sTemplateCd )
        	{
        		take.alert(this, "Info", "삭제할 양식이 존재하지않습니다.");
        		return false;
        	}

        	var bConfirm = take.confirm(this, "", "해당양식을 삭제 하시겠습니까?");
        	if(bConfirm)
        	{
        		this.dsTemplateDetail.deleteRow(0);

        		//tranSave -> transaction 변경 2021.05.17 전영찬
        		//take.tranSave(this, "Delete", "ProjectManagement.projectTemplate", "dsTemplateDetail", "", "", "fnCallback");
        		take.transaction
        		(
        			this,
        			"Delete",
        			"SVC_LOC::pm/projectTemplateSave.do",
        			"dsTemplateDetail=dsTemplateDetail:U",
        			"",
        			"",
        			"fnCallback"
        		);
        	}
        };

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
        this.grdMain_onselectchanged = function(obj,e)
        {
        	this.fnGridSelChange();
        };

        // 메인그리드 행 선택
        this.fnGridSelChange = function()
        {
        	this.fv_sSelTemplateCd = take.nvl(this.dsTemplateDetail.getColumn(0, "TEMPLATE_CD"), "");
        	var sPreContents = take.nvl(this.dsTemplateDetail.getColumn(0, "TEMPLATE_TXT"), "");
        	var sCurrContents = this.divDetail.form.wbWebEditor.getProperty("window").callMethod("getContents", 1);
        	var nPreSelRow = parseInt(take.nvl(this.fv_sSelectRow, "-1"));
        	var nCurrSelRow = parseInt(take.nvl(this.divDetail.form.grdMain.getSelectedRows(), "-1"));

        	//trace("!@!@>> nCurrSelRow:  " + nCurrSelRow + ",   nPreSelRow:  " + nPreSelRow + ",   this.fv_sSelTemplateCd:   " + this.fv_sSelTemplateCd);

        	var bRowChange = true;
        	if( nCurrSelRow != -1 && (nPreSelRow != nCurrSelRow) )
        	{
        		var sRowType = this.dsTemplateDetail.getRowType(0);

        		if( "2" == sRowType || "4" == sRowType || ( this.dsTemplateDetail.rowcount > 0 && sPreContents != sCurrContents) )
        		{
        			bRowChange = take.confirm(this, "String", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?");
        		}

        		if(bRowChange)
        		{
        			this.fnTran("DetailSearch");
        		}
        		else
        		{
        			nPreSelRow = ( "2" == sRowType ) ? -1 : nPreSelRow;
        			this.divDetail.form.grdMain.selectRow(nPreSelRow);
        		}
        	}
        	else if((nCurrSelRow == nPreSelRow) && (nCurrSelRow == 0) && ( "" == this.fv_sSelTemplateCd ))
        	{
        		this.fnTran("DetailSearch");
        	}
        }

        this.wbWebEditor_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("summer.html") != -1)
        	{
        		this.fv_bWebOnload = true;
        	}
        };

        this.divDetail_wbWebEditor_onsize = function(obj,e)
        {
        	this.divDetail.form.wbWebEditor.getProperty("window").callMethod("setHeight", (this.divDetail.form.wbWebEditor.getOffsetHeight()-85));
        };

        this.PM070_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);
                    this.divDetail.form.wbWebEditor.getProperty("window").callMethod("fnEditorReady", (this.divDetail.form.wbWebEditor.getOffsetHeight()-65));
        			//this.fnSearch();
        			this.fnTran("CodeSearch");
        		}
        	}
        };

        this.divSearch_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fnSearch();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM070_onload,this);
            this.addEventHandler("ontimer",this.PM070_ontimer,this);
            this.divSearch.form.edtTemplateNm.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divDetail.form.grdMain.addEventHandler("onselectchanged",this.grdMain_onselectchanged,this);
            this.divDetail.form.wbWebEditor.addEventHandler("onloadcompleted",this.wbWebEditor_onloadcompleted,this);
            this.divDetail.form.wbWebEditor.addEventHandler("onsize",this.divDetail_wbWebEditor_onsize,this);
        };
        this.loadIncludeScript("PM070.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
