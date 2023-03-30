(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM010P01");
            this.set_titletext("주소록 상세(등록)");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGroupCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddressbookInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_HOMEPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_POST\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_POST\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"LUNAR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ANNIVERSARY\" type=\"STRING\" size=\"256\"/><Column id=\"ANNIVERSARY_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBirthType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">- 선택 -</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">양력</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">음력</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGroupDel", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_HOMEPAGE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_POST\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_POST\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"HOME_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"LUNAR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ANNIVERSARY\" type=\"STRING\" size=\"256\"/><Column id=\"ANNIVERSARY_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","10",null,null,"10","53","460",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staGroupT","10","58","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("그룹");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","108","58",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNameT","10","88","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","108","88",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staEmailT","10","118","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","108","118",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"10","46","21","65",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_cancel02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSaveModify",null,"10","46","21","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_save02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMobileT","10","148","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","108","148",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMemoT","10","534","100",null,null,"10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","108","534",null,null,"10","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCompanyT","10","294","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static11","108","294",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staHomepageT","10","324","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("홈페이지");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static13","108","324",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGroup","115","63",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsGroupCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMobile","115","153",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_inputfilter("sign,space,symbol,dot,comma,alpha");
            obj.set_maxlength("13");
            obj.set_inputtype("number");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new TextArea("txtMemo","115","540",null,null,"16","16",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCompany","115","299",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtHomepage","115","329",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMainTitle","10","33",null,"21","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static25","108","178",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTel","115","183",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_maxlength("15");
            obj.set_inputtype("number");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTelT","10","178","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static27","108","208",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFax","115","213",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("15");
            obj.set_inputtype("number");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFaxT","10","208","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("FAX");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtEmail","115","123",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_inputfilter("space");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","115","93",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle","10","staFaxT:25","440","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("추가 정보(선택사항)");
            obj.set_cssclass("sta_WF_title02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staHomeAdressT","10","474","100","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("집주소");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static32","108","474",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnHomeAdress",null,"478","94","23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("우편번호찾기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdress1","115","479",null,"21","btnHomeAdress:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCompAdressT","10","414","100","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("회사주소");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBirthT","10","354","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("생일");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static35","108","354",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staEventT","10","384","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("기념일");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15","108","384",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calEvent","115","389","162","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static30","108","414",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnCompAdress",null,"418","94","23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("우편번호찾기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCompAdress1","115","419",null,"21","btnCompAdress:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static16","108","444",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCompAdress2","115","449",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static17","108","504",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtHomeAdress2","115","509",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCompPostCd","283","419",null,"21","115",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtHomePostCd","283","479",null,"21","115",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calBirth","115","360","162","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("52");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBirthType","calBirth:5","359",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_innerdataset("dsBirthType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtEvent","calEvent:5","389",null,"21","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"58","23","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboGroup","value","dsAddressbookInfo","GROUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtName","value","dsAddressbookInfo","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtEmail","value","dsAddressbookInfo","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtMobile","value","dsAddressbookInfo","USER_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtTel","value","dsAddressbookInfo","USER_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtFax","value","dsAddressbookInfo","USER_FAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtCompany","value","dsAddressbookInfo","COMPANY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtHomepage","value","dsAddressbookInfo","COMPANY_HOMEPAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.calEvent","value","dsAddressbookInfo","USER_ANNIVERSARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.edtCompAdress1","value","dsAddressbookInfo","COMPANY_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.edtCompAdress2","value","dsAddressbookInfo","COMPANY_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.edtHomeAdress1","value","dsAddressbookInfo","HOME_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.edtHomeAdress2","value","dsAddressbookInfo","HOME_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.txtMemo","value","dsAddressbookInfo","REMARK_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.edtCompPostCd","value","dsAddressbookInfo","COMPANY_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.edtHomePostCd","value","dsAddressbookInfo","HOME_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.cboBirthType","value","dsAddressbookInfo","LUNAR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.edtEvent","value","dsAddressbookInfo","ANNIVERSARY_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.calBirth","value","dsAddressbookInfo","USER_BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AM010P01.xfdl", function() {
        /**
        *  주소록상세(등록,수정)
        *
        *  @MenuPath    주소록 > 주소록상세/수정/등록
        *  @FileName    AM010P01.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.09.24
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.24      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_nBtnNm = null;     //용도

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
            if (take.nvl(sTranId, "")=="") sTranId = "Info";

            var objDsS = this.dsSearch;
        	var arrParent = this.parent;

            var sGroupCd = arrParent.sGroupCd;

            objDsS.setColumn(0, "GROUP_CD",      sGroupCd);
            objDsS.setColumn(0, "ADDRESS_SEQ",   arrParent.sAdressSeq);

            take.tranSelect(this, sTranId, "AddressbookManagement.addressbookInfoDetail", "dsSearch", "dsAddressbookInfo", "", "fnCallback");
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

        	var sGroupCd = take.nvl(this.parent.sGroupCd, "");

            //take.tranSave(this, sTranId, "AddressbookManagement.addressbookInfo", "dsAddressbookInfo", "", "sGroupCd='"+sGroupCd+"'", "fnCallback");
        	take.transaction(this, sTranId, "SVC_LOC::ar/addressbookInfoDelete.do", "dsAddressbookInfo=dsAddressbookInfo:U", "", "sGroupCd='"+sGroupCd+"'", "fnCallback");
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        //삭제 버튼 클릭 이벤트
        this.divSearch_btnDelete_onclick = function(obj,e)
        {
        	var bRowDel = take.confirm(this, "question", "해당 주소록을 삭제 하시겠습니까?");
            if (bRowDel){
                var objDsAddress = this.dsAddressbookInfo;
                objDsAddress.set_enableevent(false);
                objDsAddress.set_updatecontrol(false);
                objDsAddress.setRowType(0, "D");
                objDsAddress.set_updatecontrol(true);
                objDsAddress.set_enableevent(true);

                //take.tranSave(this, "Delete", "AddressbookManagement.addressbookInfo", "dsAddressbookInfo", "", "", "fnCallback");
        		trace(this.dsAddressbookInfo.saveXML())
        		take.transaction(this, "Delete", "SVC_LOC::ar/addressbookInfoDelete.do", "dsAddressbookInfo=dsAddressbookInfo:A", "", "", "fnCallback");
            }
        };

        //수정,저장버튼 클릭 이벤트
        this.divSearch_btnSaveModify_onclick = function(obj,e)
        {
        	if (this.fnCheckForm())
        	{
                if(this.dsAddressbookInfo.getRowType(0) == 1) {
                    take.alert(this, "Info", "수정한 항목이 존재하지 않습니다.");
                    return;
                }
                this.fnSave('Save');
        	}
        };

        //집주소/회사주소 버튼 클릭이벤트
        this.btnAdress_onclick = function(obj,e)
        {
        	this.fv_nBtnNm = (obj.name).substr(3,1)=='C' ? 'comp' : 'home';
            var sSearchAddress = this.divSearch.form.edtCompAdress1.value;

            take.openPopup(this, this.fv_nBtnNm, "frm::com/comPostPop.xfdl"
        									, {Title:"우편번호", Dataset:this.dsAddressbookInfo, sSvcId:take.SvcId, sAddress:sSearchAddress}
        									, ""
        									, "fnPostPopupCallback", true);
        };

        //btnPost_onclick : 주소찾기 버튼 클릭 콜백 이벤트
        this.fnPostPopupCallback = function (sPopId, sArg)
        {
        	if (take.nvl(sArg, "")=="") return;

        	var aArg = sArg.split("#");
         	var sAddrType = aArg[7];
         	var sAddr = ("J" == sAddrType) ? aArg[5] : aArg[4];

            switch(this.fv_nBtnNm) {
            case "comp":
                this.divSearch.form.edtCompPostCd.set_value(aArg[3]);	// 신규우편번호
                this.divSearch.form.edtCompAdress1.set_value(sAddr);
            	break;
            case 'home':
                this.divSearch.form.edtHomePostCd.set_value(aArg[3]);	// 신규우편번호
                this.divSearch.form.edtHomeAdress1.set_value(sAddr);
            	break;
            default:
            }
        }

        this.divSearch_edtMobile_oninput = function(obj,e)
        {
        	var sVal = obj.value;
            var sMobile = '';
            sVal = sVal.replace(/[^0-9]/g, '');

            if( sVal.length < 4){
                return sVal;
            }else if(sVal.length < 7){
                sMobile += sVal.substr(0, 3);
                sMobile += '-';
                sMobile += sVal.substr(3);
            }else if(sVal.length < 11){
                sMobile += sVal.substr(0, 3);
                sMobile += '-';
                sMobile += sVal.substr(3, 3);
                sMobile += '-';
                sMobile += sVal.substr(6);
            }else{
                sMobile += sVal.substr(0, 3);
                sMobile += '-';
                sMobile += sVal.substr(3, 4);
                sMobile += '-';
                sMobile += sVal.substr(7);
            }

            this.divSearch.form.edtMobile.set_value(sMobile);
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
            var objDsS = this.dsSearch;
        	var objParent = this.parent;

            objDsS.setColumn(0, "PROJECT_CD",    objParent.sProjectCd);
            objDsS.setColumn(0, "MENU_CD",       objParent.sMenuCd);

            take.tranSelect(this, "GroupCode", "AddressbookManagement.addressbookGroupCode", "dsSearch", "dsGroupCode", "", function()
            {
                this.fnForm();
            });
        }

        /**
         * fnForm : 폼 셋팅
         * @param  {String} N/A
         * @example this.fnForm();
         */
        this.fnForm = function()
        {
            var objDsGC = this.dsGroupCode;

            objDsGC.insertRow(0);
            objDsGC.setColumn(0, "CODE", "");
            objDsGC.setColumn(0, "NAME", "선택");

            if(this.parent.sEntry == "C"){
                var objDivSearch = this.divSearch.form;
                var objAdress = this.dsAddressbookInfo;
                var objParent = this.parent;

                objDivSearch.btnSaveModify.set_text("저장");
                objDivSearch.btnDelete.set_visible(false);
                objDivSearch.cboGroup.set_index(this.parent.nRow);
                objDivSearch.edtName.setFocus();

                objAdress.addRow();
                objAdress.setColumn(0,"PROJECT_CD"   , objParent.sProjectCd);
                objAdress.setColumn(0,"MENU_CD"      , objParent.sMenuCd);
                objAdress.setColumn(0,"GROUP_CD"     , objParent.sCode);
            } else {
                this.fnSearch('Info');
            }
        }

        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var objDivSearch = this.divSearch.form;
            var sGroup  = take.nvl(objDivSearch.cboGroup.value, "");
            var sName   = take.nvl(objDivSearch.edtName.text, "");
            var sEmail  = take.nvl(objDivSearch.edtEmail.text, "");
            var sMobile = take.nvl(objDivSearch.edtMobile.text, "");
            var sTel    = take.nvl(objDivSearch.edtTel.text, "");
            var sFax    = take.nvl(objDivSearch.edtFax.text, "");

            if(sGroup == ""){
                take.alert(this, "Info", "그룹을 선택해주세요.");
                return false;
            }

            if(sName == ""){
               take.alert(this, "Info", "이름을 작성해주세요.");
                objDivSearch.edtName.setFocus();
                return false;
            } else {
                if(take.getByteLength(sName) > 30){
                    take.alert(this, "Info", "이름을 10자 내외로 작성해주세요.");
                    objDivSearch.edtName.setFocus();
                    return false;
                }
            }

            if(sEmail == ""){
                take.alert(this, "Info", "이메일을 작성해주세요.");
                objDivSearch.edtEmail.setFocus();
                return false;
            } else {
        //         if(!take.isEmail(sEmail)){
        //             alert("이메일을 형식에 맞춰 주세요.");
        //             objDivSearch.edtEmail.setFocus();
        //             return false;
        //         }

                if(take.getByteLength(sEmail) > 100){
                    take.alert(this, "Info", "이메일을 100자 내외로 작성해주세요.");
                    objDivSearch.edtEmail.setFocus();
                    return false;
                }
            }

            if(sMobile == ""){
                take.alert(this, "Info", "휴대폰번호를 작성해주세요.");
                return false;
            }

        //     if(sTel == ""){
        //         alert("전화번호를 작성해주세요.");
        //         return false;
        //     }
        //
        //     if(sFax == ""){
        //         alert("FAX번호를 작성해주세요.");
        //         return false;
        //     }

            return true;
        }

        /**
         * fnPhoneChk : 핸드폰 번호 형식 체크
         * @param  {String} sValue 핸드폰번호
         * @example this.fnPhoneChk(sValue);
         */
        this.fnPhoneChk = function (sValue)
        {
            //sValue = sValue.replace(/[^0-9]/gi, "");
            var sRegExp = sValue;
            var sRegPattern = /^01([0|1|6|7|8|9]{1}?)-?([0-9]{3,4})-?([0-9]{4})$/;
            if(!sRegExp.match(sRegPattern)){
                take.alert(this, "Info", "핸드폰 번호 형식이 아닙니다.", "");
                this.Div00.form.edtPhone.setFocus();
                return false;
            }
        };

        //팝업 닫기
        this.fnGoList = function()
        {
        	this.opener.fnSearch('List');
        	this.close();
        }

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
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
                case "Save" :  //저장 콜백
                    take.alert(this, "Info", "주소록 " + this.divSearch.form.btnSaveModify.text + "이 완료되었습니다.");
                    this.opener.fnPopCallback("AM010P01");
                    this.close();
                    break;
                case "Delete" : //삭제(저장) 콜백
                    //alert("선택한 주소록이 삭제 되었습니다.");
        			this.fnGoList();
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
            this.divSearch.form.btnDelete.addEventHandler("onclick",this.divSearch_btnDelete_onclick,this);
            this.divSearch.form.btnSaveModify.addEventHandler("onclick",this.divSearch_btnSaveModify_onclick,this);
            this.divSearch.form.edtMobile.addEventHandler("oninput",this.divSearch_edtMobile_oninput,this);
            this.divSearch.form.btnHomeAdress.addEventHandler("onclick",this.btnAdress_onclick,this);
            this.divSearch.form.btnCompAdress.addEventHandler("onclick",this.btnAdress_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("AM010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
