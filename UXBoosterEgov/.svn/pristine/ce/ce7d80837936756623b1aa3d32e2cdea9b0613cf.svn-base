(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM110");
            this.set_titletext("대시보드_대시보드 미리보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDashType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDashList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MINIMUM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RELOAD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_PROG\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_PROG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SVC_NAMESPACE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REFERENCE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLEBAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDashType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">1 X 1</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">1 X 2</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">1 X 3</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">1 X 4</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">2 X 1</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">2 X 2</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">2 X 3</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">2 X 4</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">3 X 1</Col></Row><Row><Col id=\"CODE\">32</Col><Col id=\"NAME\">3 X 2</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">3 X 3</Col></Row><Row><Col id=\"CODE\">34</Col><Col id=\"NAME\">3 X 4</Col></Row><Row><Col id=\"CODE\">41</Col><Col id=\"NAME\">4 X 1</Col></Row><Row><Col id=\"CODE\">42</Col><Col id=\"NAME\">4 X 2</Col></Row><Row><Col id=\"CODE\">43</Col><Col id=\"NAME\">4 X 3</Col></Row><Row><Col id=\"CODE\">44</Col><Col id=\"NAME\">4 X 4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDashTypeT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("대시보드 유형");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDashNameT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("대시보드명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDashType","staDashTypeT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCboDashType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDashName","staDashNameT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_01","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00","1025","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","42","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDashList","0","26","308",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj.getSetter("taketree").set("{use:\"all\", treeindex:0, parentcolid:\"PARENT_MENU\", ordercolid:\"MENU_ORDER\", treecallback:\"fnTreeCallBack\", codecolid:\"MENU_CD\"}");
            obj.set_binddataset("dsDashList");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"101\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"대시보드 ID\"/><Cell col=\"2\" text=\"대시보드명\"/><Cell col=\"3\" text=\"유형\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:DASH_CD\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:DASH_NM\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:DASH_TYPE_NM\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuListT","0","0","308","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("대시보드 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divRight","328","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Div01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staSizeBg","130","26",null,"31","0",null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Static("staTitleR","0","0","450","21",null,null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("0");
            obj.set_text("미리보기");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Static("Static32","0","41","47","5",null,null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("1");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Static("staSizeT","0","26","132","31",null,null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("2");
            obj.set_text("화면 사이즈 (W*H)");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Edit("edtW","218","31","50","21",null,null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("3");
            obj.set_value("396");
            obj.set_textAlign("center");
            obj.set_text("396");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Static("staSizeX","268","31","17","21",null,null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("4");
            obj.set_text("X");
            obj.set_cssclass("sta_WF_AlignC");
            obj.set_textAlign("center");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Edit("edtH","285","31","50","21",null,null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("5");
            obj.set_value("410");
            obj.set_textAlign("center");
            obj.set_text("410");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Static("staSizeInfo","410","30",null,"21","0",null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("6");
            obj.set_text("Drag 또는 사이즈를 입력해서 리사이즈 해보세요.");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Static("Static22_00_01","50","57","57","5",null,null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("9");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Div("divBase","0","62",null,null,"0","0",null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("8");
            obj.set_background("whitesmoke");
            this.divDetail.form.divRight.addChild(obj.name, obj);

            obj = new Button("btnW","396","0","5","410",null,null,null,null,null,null,this.divDetail.form.divRight.form.divBase.form);
            obj.set_taborder("1");
            obj.set_cursor("w-resize");
            obj.set_background("black");
            this.divDetail.form.divRight.form.divBase.addChild(obj.name, obj);

            obj = new Button("btnH","0","410",null,"5","btnW:0",null,null,null,null,null,this.divDetail.form.divRight.form.divBase.form);
            obj.set_taborder("2");
            obj.set_cursor("n-resize");
            obj.set_background("black");
            this.divDetail.form.divRight.form.divBase.addChild(obj.name, obj);

            obj = new Div("divDashView","0","0",null,null,"btnW:0","btnH:0",null,null,null,null,this.divDetail.form.divRight.form.divBase.form);
            obj.set_taborder("0");
            obj.set_text("대시보드 미리보기");
            obj.set_border("1px solid");
            this.divDetail.form.divRight.form.divBase.addChild(obj.name, obj);

            obj = new Button("btnWH","btnH:0","btnW:0","5","5",null,null,null,null,null,null,this.divDetail.form.divRight.form.divBase.form);
            obj.set_taborder("3");
            obj.set_cursor("move");
            obj.set_background("green");
            this.divDetail.form.divRight.form.divBase.addChild(obj.name, obj);

            obj = new Combo("cmbDashType","staSizeT:6","31","77","21",null,null,null,null,null,null,this.divDetail.form.divRight.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDashType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("1 X 2");
            obj.set_value("12");
            obj.set_index("1");
            this.divDetail.form.divRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divRight.form.divBase.form.divDashView
            obj = new Layout("default","",0,0,this.divDetail.form.divRight.form.divBase.form.divDashView.form,function(p){});
            this.divDetail.form.divRight.form.divBase.form.divDashView.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divRight.form.divBase.form
            obj = new Layout("default","",0,0,this.divDetail.form.divRight.form.divBase.form,function(p){});
            this.divDetail.form.divRight.form.divBase.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divRight.form
            obj = new Layout("default","",0,0,this.divDetail.form.divRight.form,function(p){});
            this.divDetail.form.divRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboProjectNm","value","dsSearch","PROJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboDashType","value","dsSearch","DASH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtDashName","value","dsSearch","DASH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM110.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    sys > pm110
        *  @FileName    pm110.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.11.23
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.11.23      김대승             최초 생성
        *******************************************************************************
        */
        this.fv_objSizeW = { "1":396
                            ,"2":807
                            ,"3":1349
                            ,"4":1619};

        this.fv_objSizeH = { "1":196
                            ,"2":410
                            ,"3":608
                            ,"4":822};

        // 1 X 1 : 354 * 113 396 * 196
        // 1 X 2 : 354 * 327 396 * 410
        // 1 X 3 : 354 * 525 396 * 608
        // 1 X 4 : 354 * 739 396 * 822

        // 2 X 1 : 765 * 113 807 * 196
        // 2 X 2 : 765 * 327 807 * 410
        // 2 X 3 : 765 * 525 807 * 608
        // 2 X 4 : 765 * 739 807 * 822

        // 3 X 1 : 1206 * 113 1349 * 196
        // 3 X 2 : 1206 * 327 1349 * 410
        // 3 X 3 : 1206 * 525 1349 * 608
        // 3 X 4 : 1206 * 739 1349 * 822

        // 4 X 1 : 1767 * 113 1619 * 196
        // 4 X 2 : 1767 * 327 1619 * 410
        // 4 X 3 : 1767 * 525 1619 * 608
        // 4 X 4 : 1767 * 739 1619 * 822

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sGdsAdminYn   = null; 	 // gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = null;	 // gds _ 프로젝트코드

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM110_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	 // gds _ 관리자권한 여부
        		this.fv_sGdsProjectCd = UXBooster.gdsUserInfo.getColumn(0, "PROJECT_CD");	 // gds _ 프로젝트코드

                this.fnInit();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	var objDiv;
        	this.dsDashList.clearData();

        	objDiv = this.divSearch.form;

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	objDiv.cboProjectNm.set_value(this.fv_sGdsProjectCd);
        	if(this.fv_sGdsAdminYn == "Y"){
        		objDiv.cboProjectNm.set_readonly(false);
        	}

        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

        	//필수 검색조건 추가
        	takeval.add
        	(
                this,
                "Search",                  //벨리데이션 그룹 아이디(그룹별로 추가할 수 있음)
                objDiv.cboProjectNm,       //체크 대상 컴포넌트
                objDiv.staProjectNmT.text, //체크할 명칭(ex:"사용여부")
                "value",                   //체크대상 (컴포넌트:Properti, Grid:Cell, Dataset:Column 명)
                true,                      //null check
                "string",                  //타입(string, number, date등)체크
                "",                        //체크수(문자는 자릿수, 숫자는 구간[form,to])
                ""
        	);                      	   //체크 완료후 Call Back function 명(생략가능)

        }
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "dashInfoList";

        	//벨리데이션 체크
        	if(!takeval.check(this, "Search")) return;

        	this.dsDashList.clearData();
        	this.divDetail.form.staMenuListT.set_text("대시보드 목록");
            take.tranSelect
            (
                this,
                "dashInfoList",
                "DashManagement.dashInfoList",
                "dsSearch",
                "dsDashList",
                "",
                "fnCallBack"
            )
        }

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {

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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMenuList";

        	var addRow;

        	addRow = this.dsDashList.addRow();
        	this.dsDashList.setColumn(addRow, "USE_YN", "Y");
            this.dsDashList.setColumn(addRow, "TITLEBAR_YN", "Y");
        	this.divDetail.form.cboDashType.set_index(0);

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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdDashList";

            var objDs;
        	var nRow;
        	var sNm;
        	var bRowChange;

        	objDs = this.dsDashList;
        	nRow  = objDs.rowposition;
        	sNm   = objDs.getColumn(nRow, "DASH_NM");

        	if(objDs.rowcount <= 0){
        		take.alert(this, "info", "메뉴 목록이 없습니다.");
        		return;
        	}

        	bRowChange = take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sNm, text : "삭제"});
        	if(bRowChange)
        	{
        		this.fnDashInfoDelete();
        	}
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /*
        * divDetail_grdDashList_onselectchanged : 메인 그리드 ROW 변경 이벤트
        */
        this.divDetail_grdDashList_onselectchanged = function(obj,e)
        {
        	var sUrl = take.nvl(this.dsDashList.getColumn(e.row, "MENU_URL"), "");
        	this.divDetail.form.divRight.form.divBase.form.divDashView.set_url(sUrl);
        };

        /*
        * divSearch_edtDashName_onkeyup : 검색조건 대시보드명 엔터 값
        */
        this.divSearch_edtDashName_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch("dashMenuList");
        	}
        };

        /*
        * divSearch_Combo_onitemchanged : 검색조건 콤보 아이템 변경시 조회
        */
        this.divSearch_Combo_onitemchanged = function(obj,e)
        {
        	this.fnSearch("dashMenuList");
        };

        //리사이즈 버튼 드래그 이벤트
        this.divRight_divBase_btn_ondrag = function(obj,e)
        {
        	var sGbn = obj.name.substr(3);
            e.set_userdata(sGbn);
            return true;
        };

        //divBase 드래그 무브이벤트
        this.divRight_divBase_ondragmove = function(obj,e)
        {
        	var sGbn;
            var objBase, objDivRight;

        	objDivRight = this.divDetail.form.divRight.form;
            sGbn = e.userdata;

            objBase = objDivRight.divBase.form;

            if (sGbn=="W")
            {
                objBase.btnW.set_left(e.clientx);
            } else if (sGbn=="H") {
                objBase.btnH.set_top(e.clienty);
                objBase.btnW.set_height(e.clienty);
            } else {
                objBase.btnW.set_left(e.clientx);
                objBase.btnH.set_top(e.clienty);
                objBase.btnW.set_height(e.clienty);
            }

            objBase.resetScroll();

            objDashView = objDivRight.divBase.form.divDashView;
            objDivRight.edtW.set_value(objDashView.getOffsetWidth());
            objDivRight.edtH.set_value(objDashView.getOffsetHeight());
        };

        //사이즈 입력에디터에 포거스 나갈때 이벤트
        this.divRight_edt_onkillfocus = function(obj,e)
        {
        	this.fnDashViewResize();
        };

        //사이즈 입력에디터에 키 다운 이벤트
        this.divRight_edt_onkeydown = function(obj,e)
        {
            if (e.keycode==13) this.fnDashViewResize();
        };

        //대시보드 타입 콤보 변경 이벤트
        this.divRight_cmbDashType_onitemchanged = function(obj,e)
        {
            var nW, nH;
            var arrType;

            arrType = e.postvalue;

            console.dir(arrType);

            nW = this.fv_objSizeW[arrType[0]];
            nH = this.fv_objSizeH[arrType[1]];

            this.divDetail.form.divRight.form.edtW.set_value(nW);
            this.divDetail.form.divRight.form.edtH.set_value(nH);

        	this.fnDashViewResize();
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var arrGroupCodes = ["00009", "00018"];
        	var arrOutDs 	  = ["dsCboUseYn", "dsCboDashType"];
        	var arrHeaderType = ["ALL", "ALL"];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        		function(sId, nErrCd, sErrMsg)
        		{
        			var objDiv = this.divSearch.form;
        			if (this.dsCboUseYn.rowcount > 0){
        				objDiv.cboUseYn.set_index(0);
        			}
        			if (this.dsCboDashType.rowcount > 0){
        				objDiv.cboDashType.set_index(0);
        			}

        			// 프로젝트 코드셀렉트
        			take.tranSelect
        			(
        				this,
        				"projectInfoCode",
        				"ProjectManagement.projectInfoCode",
        				"",
        				"dsCboProjectCd",
        				"",
        				function(sId, nErrCd, sErrMsg)
        				{
        					var objDs = this.dsCboProjectCd;
        					if (objDs.rowcount>0)
        					{
        						var nRow = objDs.insertRow(0)
        						objDs.setColumn(nRow, "CODE", "");
        						objDs.setColumn(nRow, "NAME", "선택");
        					}

        					this.fnSearch("dashInfoList");
        				}
        			)
        		});
        };

        /**
         * fnDashViewResize : 컨텐츠 미리보기 리사이즈
         * @param  {N/A}
         * @example this.fnDashViewResize();
         */
        this.fnDashViewResize = function()
        {
            var objDiv, objBase, objDivRight;
            var nW, nH, nMaxW, nMaxH;

        	objDivRight = this.divDetail.form.divRight.form;
            objDiv = objDivRight.divBase;
            objBase = objDiv.form;

            nW = nexacro.toNumber(objDivRight.edtW.value);
            nH = nexacro.toNumber(objDivRight.edtH.value);
            nMaxW = objDiv.getOffsetWidth()-nexacro.toNumber(objBase.btnW.width);
            nMaxH =objDiv.getOffsetHeight()-nexacro.toNumber(objBase.btnH.height);

            if (nW>nMaxW || nW<1)
            {
                alert("현재 가능한 Width는 1 ~ "+ nMaxW+" 입니다.");
                nW = nMaxW;
                objDivRight.edtW.set_value(nW);
            }

            objBase.btnW.set_left(nW);

            if (nH>nMaxH || nH<1)
            {
                alert("현재 가능한 Height는 1 ~ "+ nMaxH+" 입니다.");
                nH = nMaxH;
                objDivRight.edtH.set_value(nH);
            }

             objBase.btnH.set_top(nH);
             objBase.btnW.set_height(nH);

            objBase.resetScroll();
        }

        /**
        * fnValCallBack : validation callback
        * @param  : objComp      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnValCallBack = function(objComp)
        {
            //벨리데이션 성공 후 스크립트
            return;
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallBack : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallBack = function(sId, nErrCd, sErrMsg)
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
                case "dashInfoList" : 		//조회 콜백
        			var objDs 	     = this.dsDashList;
        			var objDivDetail = this.divDetail.form;
        			var nRowCount    = objDs.rowcount;

        			if (nRowCount > 0){
        				objDivDetail.staMenuListT.set_text("대시보드 목록 ("+nRowCount+"건)");
        				objDivDetail.grdDashList.selectRow(0);
        			} else {
        				objDivDetail.staMenuListT.set_text("대시보드 목록 (0건)");
        			}
                    break;

                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }

        this.fnPopCallback = function (sId, nReturnVal)
        {
        	switch(sId) {
        		case "addMultiLanguage":
        			var objDs = this.dsDashList;
        			var nRow  = objDs.rowposition;

        			//팝업이 닫히면서 nReturnVal을 통해 값을 받을 수 있습니다
        			if(take.nvl(nReturnVal, "") != "") {
        				nReturnVal = nReturnVal.split(",")[0];
        				objDs.setColumn(nRow, "ML_CD", nReturnVal);
        			} else return;

        			// 선택된 row의 다국어 정보 조회
        			this.dsMultiLanguageInfo.clearData();
        			take.tranSelect(this, "multilanguageDetailList", "SystemCommon.multilanguageDetailList", "", "dsMultiLanguageInfo", "sMlCd='" + nReturnVal + "'", "fnCallback");

        			break;
        		default:
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM110_onload,this);
            this.divSearch.form.cboProjectNm.addEventHandler("onitemchanged",this.divSearch_Combo_onitemchanged,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_Combo_onitemchanged,this);
            this.divSearch.form.cboDashType.addEventHandler("onitemchanged",this.divSearch_Combo_onitemchanged,this);
            this.divSearch.form.edtDashName.addEventHandler("onkeyup",this.divSearch_edtDashName_onkeyup,this);
            this.divDetail.form.grdDashList.addEventHandler("onselectchanged",this.divDetail_grdDashList_onselectchanged,this);
            this.divDetail.form.staMenuListT.addEventHandler("onclick",this.divDetail_staMenuListT_onclick,this);
            this.divDetail.form.divRight.form.edtW.addEventHandler("onkeydown",this.divRight_edt_onkeydown,this);
            this.divDetail.form.divRight.form.edtW.addEventHandler("onkillfocus",this.divRight_edt_onkillfocus,this);
            this.divDetail.form.divRight.form.edtH.addEventHandler("onkeydown",this.divRight_edt_onkeydown,this);
            this.divDetail.form.divRight.form.edtH.addEventHandler("onkillfocus",this.divRight_edt_onkillfocus,this);
            this.divDetail.form.divRight.form.divBase.addEventHandler("ondragmove",this.divRight_divBase_ondragmove,this);
            this.divDetail.form.divRight.form.divBase.form.btnW.addEventHandler("ondrag",this.divRight_divBase_btn_ondrag,this);
            this.divDetail.form.divRight.form.divBase.form.btnH.addEventHandler("ondrag",this.divRight_divBase_btn_ondrag,this);
            this.divDetail.form.divRight.form.divBase.form.btnWH.addEventHandler("ondrag",this.divRight_divBase_btn_ondrag,this);
            this.divDetail.form.divRight.form.cmbDashType.addEventHandler("onitemchanged",this.divRight_cmbDashType_onitemchanged,this);
            this.dsDashType.addEventHandler("onrowposchanged",this.dsDash_onrowposchanged,this);
        };
        this.loadIncludeScript("PM110.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
