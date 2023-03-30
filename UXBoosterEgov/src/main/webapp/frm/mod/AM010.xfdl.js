(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM010");
            this.set_titletext("주소록_주소록_주소록목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAddressbookGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddressbookInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGroupCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_INITFROM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_INITTO\" type=\"STRING\" size=\"256\"/><Column id=\"NROW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGroupDel", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staGroupT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("그룹");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGroup","staGroupT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsGroupCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserNmT","cboGroup:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","staUserNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserMobileT","edtUserNm:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserMobile","staUserMobileT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_inputfilter("alpha,comma,dot,sign,space,symbol");
            obj.set_text("010");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserEmailT","edtUserMobile:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserEmail","staUserEmailT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleG","0","0","280","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("주소록그룹");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGroupAdd","240","4","70","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("그룹추가");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staAddressbook","btnGroupAdd:20","0","400","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("주소록목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdAddressbookGroup","0","30","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("dsAddressbookGroup");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"209\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:GROUP_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\"/><Cell col=\"1\" displaytype=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;none&apos; : &apos;buttoncontrol&apos;\" edittype=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;none&apos; : &apos;button&apos;\" text=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;&apos; : &apos;수정&apos;\"/><Cell col=\"2\" displaytype=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;none&apos; : &apos;buttoncontrol&apos;\" edittype=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;none&apos; : &apos;button&apos;\" text=\"expr:(dataset.getColumn( currow, &apos;LEV&apos; ) == 0  || dataset.getColumn( currow, &apos;EXCEL_YN&apos; ) == &apos;Y&apos;) ? &apos;&apos; : &apos;삭제&apos;\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdAddressbookInfo","grdAddressbookGroup:20","65",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAddressbookInfo");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"그룹\"/><Cell col=\"2\" text=\"회사명\"/><Cell col=\"3\" text=\"이름\"/><Cell col=\"4\" text=\"E-mail\"/><Cell col=\"5\" text=\"휴대폰\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"Fax\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:GROUP_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:COMPANY_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:USER_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USER_EMAIL\"/><Cell col=\"5\" text=\"bind:USER_MOBILE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:USER_TEL\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:USER_FAX\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAllSub","grdAddressbookGroup:20","32","50","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("전체");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnASub","btnAllSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("ㄱ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnBSub","btnASub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("ㄴ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnCSub","btnBSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("ㄷ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDSub","btnCSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("ㄹ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnESub","btnDSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("ㅁ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnFSub","btnESub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("ㅂ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGSub","btnFSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("ㅅ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnHSub","btnGSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("ㅇ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnISub","btnHSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("ㅈ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnJSub","btnISub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("ㅊ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnKSub","btnJSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("ㅋ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnLSub","btnKSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("ㅌ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMSub","btnLSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("ㅍ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnNSub","btnMSub:5","32","23","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("ㅎ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAlphabetSub","btnNSub:5","32","50","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("A - Z");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnNumberSub","btnAlphabetSub:5","32","50","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("숫자");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static27","310","0","20",null,null,"-29",null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static06","310","55",null,"10","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("10");
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

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
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

            obj = new Static("Static24","0","btnShowHide:0",null,"20","0",null,null,null,null,null,this);
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AM010.xfdl", function() {
        /**
        *  주소록목록
        *
        *  @MenuPath    주소록 > 주소록 > 주소록목록
        *  @FileName    AM010.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.08.20
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.20      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출
        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;    // ProjectCd

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
                this.fnInit();      // 초기화함수(Reload)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Group";

            this.dsAddressbookInfo.filter("");

            switch(sTranId) {
            case "Group":
                this.dsAddressbookGroup.clearData();

                var objDsSearch = this.dsSearch;
                var objDivS = this.divSearch.form;
                var sGroupCd, sUserNm, sMail, sMobile;

                sGroupCd    = take.nvl(objDivS.cboGroup.value, "");
                sUserNm     = take.nvl(objDivS.edtUserNm.value, "");
                sMail       = take.nvl(objDivS.edtUserEmail.value, "");
                sMobile     = take.nvl(objDivS.edtUserMobile.value, "");

                objDsSearch.setColumn(0, "PROJECT_CD",  this.fv_sProjectCd);
                objDsSearch.setColumn(0, "MENU_CD",     this.ProgId);
                objDsSearch.setColumn(0, "GROUP_CD",    sGroupCd);
                objDsSearch.setColumn(0, "USER_NM",     sUserNm);
                objDsSearch.setColumn(0, "USER_EMAIL",  sMail);
                objDsSearch.setColumn(0, "USER_MOBILE", sMobile);

                take.tranSelect(this, sTranId, "AddressbookManagement.addressbookGroupList", "dsSearch", "dsAddressbookGroup", "", "fnCallback");
            	break;
            case "List":
                var objDsGroup = this.dsAddressbookGroup;
                var nDsRow = objDsGroup.rowposition;
                var sProjectCd, sMenuCd, sGroupCd;

                this.dsAddressbookInfo.clearData();

                sProjectCd  = objDsGroup.getColumn(nDsRow, "PROJECT_CD");
                sMenuCd     = objDsGroup.getColumn(nDsRow, "MENU_CD");
                sGroupCd    = objDsGroup.getColumn(nDsRow, "GROUP_CD");

                this.dsSearch.setColumn(0, "PROJECT_CD", sProjectCd);
                this.dsSearch.setColumn(0, "MENU_CD", sMenuCd);
                this.dsSearch.setColumn(0, "GROUP_CD", sGroupCd);

                take.tranSelect(this, sTranId, "AddressbookManagement.addressbookInfoList", "dsSearch", "dsAddressbookInfo", "", "fnCallback");
            	break;
            default:
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
            //공통 버튼 실행
            //trace("rowcount : " + this.dsAddressbookGroup.rowcount);
            //trace("pos : " + this.dsAddressbookGroup.rowposition);
            //trace("xml : " + this.dsAddressbookGroup.saveXML());

            if(this.dsAddressbookGroup.rowcount > 1) {
                // 주소록 신규 작성 팝업창 오픈
                this.fnNewAddress();
            } else {
                take.alert(this, "", "주소록 그룹추가를 먼저 진행해주세요.", "");
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdAddressbookInfo";

            switch(sGrdId)
            {
                case "grdAddressbookGroup" : //그룹 삭제(그룹내 주소록 삭제)
                    this.dsGroupDel.clearData();

                    var objDsAddGr    = this.dsAddressbookGroup;
                    var objDsGrDel    = this.dsGroupDel;
                    var nRowPos     = objDsAddGr.rowposition;
                    var nAddRow     = objDsGrDel.addRow();
                    objDsGrDel.copyRow(nAddRow, objDsAddGr, nRowPos);

                    objDsGrDel.set_enableevent(false);
                    objDsGrDel.set_updatecontrol(false);
                    objDsGrDel.setRowType(nAddRow, "D");
                    objDsGrDel.set_updatecontrol(true);
                    objDsGrDel.set_enableevent(true);

                    //take.tranSave(this, "addDel", "AddressbookManagement.addressbookInfo", "dsGroupDel", "", "", function()
        			take.transaction(this, "addDel", "SVC_LOC::ar/addressbookInfoSave.do", "dsGroupDel=dsGroupDel:U", "", "", function()
                    {
                        objDsAddGr.deleteRow(nRowPos);
                        //take.tranSave(this, "DelGroup", "AddressbookManagement.addressbookGroup", "dsAddressbookGroup", "", "", "fnCallback");
        				take.transaction(this, "DelGroup", "SVC_LOC::ar/addressbookGroupSave.do", "dsAddressbookGroup=dsAddressbookGroup:U", "", "", "fnCallback");
                    });
                    break;
                case "grdAddressbookInfo" :  // 주소록정보 삭제
                    var arrChkRow = take.getChkRow(this.dsAddressbookInfo);
                    if(arrChkRow.length == 0){
                        alert("선택된 항목이 없습니다.");
                        return;
                    }

                    var bRowDel = take.confirm(this, "question", "선택된 주소록을 삭제 하시겠습니까?");
                    if (bRowDel){
                        //var arrChkRow = take.getChkRow(this.dsAddressbookInfo,"chk");
                        for(var i=0; i<arrChkRow.length; i++) {
                            this.dsAddressbookInfo.deleteRow(arrChkRow[i]);
                        }
                        this.dsAddressbookInfo.filter("");
                        //take.tranSave(this, "Delete", "AddressbookManagement.addressbookInfo", "dsAddressbookInfo", "", "", "fnCallback");
        				take.transaction(this, "addDel", "SVC_LOC::ar/addressbookInfoDelete.do", "dsAddressbookInfo=dsAddressbookInfo:U", "", "", "fnCallback");
                    }

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //그리트 헤더 클릭 Grid Sorting / 전체클릭
        this.grdAddressbookInfo_onheadclick = function(obj,e)
        {
        	if(e.col == 0){
                take.fnGridCheckAll(obj, e.cell, "CHK");
        	}
        };

        //grdAddressbookGroup_oncellclick : 그리트 cell 클릭
        this.grdAddressbookGroup_oncellclick = function(obj,e)
        {
            var nCellPos = obj.getCellPos();
        	var arrRowidx = parseInt(obj.getSelectedRows());
        	var selCellText = obj.getCellText( arrRowidx, nCellPos );

            if(e.clickitem == "") {
                if(e.oldrow != e.row) {
                    this.dsAddressbookInfo.filter("");
                    this.fnSearch('List');
                }
            } else if(e.clickitem == "control") {
                if(selCellText == "수정") {
                    this.fnGroupAdd("Modify");
                } else {    // '삭제'
                    var bRowDel = take.confirm(this, "question", "선택한 그룹을 삭제 하시겠습니까?");
                    if (bRowDel){
                        this.fnDelRow("grdAddressbookGroup");
                    }
                }
            }
        };

        //dsAddressbookGroup_onrowposchanged : 트리 선택 dsAddressbookGroup
        this.dsAddressbookGroup_onrowposchanged = function(obj,e)
        {
        	//0번로우 (주소록) 선택시 상단 로우 선택되게 처리.
            if( obj.rowposition == 0 ){
        		obj.set_rowposition(1);
        	}
        };

        //btnSub_onclick : sub버튼 클릭 이벤트(ㄱ,ㄴ,ㄷ....)
        this.btnSub_onclick = function(obj,e)
        {
            var objDivS = this.divSearch.form;
            var sValue = obj.text;  //버튼 텍스트값(ex. 전체)

            if(sValue == "A - Z") { // A-Z
                this.dsAddressbookInfo.filter("this.parent.fnAlphaCheck(String(USER_NM)) == 'Y'");
            } else if(sValue == "숫자") { // 숫자
                this.dsAddressbookInfo.filter("this.parent.fnNumberCheck(String(USER_NM)) == 'Y'");
            } else if(sValue == "전체"){    // 전체
                this.dsAddressbookInfo.filter("");
            } else {        // (ㄱ,ㄴ,ㄷ....)
                this.dsAddressbookInfo.filter("this.parent.fnHangul(String(USER_NM).substr(0,1)) == '" + sValue + "'");
            }
        };

        // 디테일영역 그리드 클릭 상세 팝업오픈
        this.grdAddressbookInfo_oncelldblclick = function(obj,e)
        {
        	if(e.col != 0) {
                var objDs	   = this.dsAddressbookInfo;
        		var nRow 	   = this.dsAddressbookGroup.rowposition;
        		var sEntry 	   = "U";
        		var sProjectCd = this.fv_sProjectCd;
        		var sMenuCd	   = this.ProgId;
        		var sGroupCd   = objDs.getColumn(objDs.rowposition, "GROUP_CD");
        		var sAdressSeq = objDs.getColumn(objDs.rowposition, "ADDRESS_SEQ");
                var aAgrKey    = {sEntry:sEntry, sProjectCd:sProjectCd, sMenuCd:sMenuCd, nRow:nRow, sAdressSeq:sAdressSeq, sGroupCd:sGroupCd};
                var sOptions   = "titletext='" + "주소록 상세(수정)" + "'";

                //var sOptions = "showtitlebar=true layered=true titletext='" + "주소록 상세(수정)" + "'";
                take.openPopup(this, "AM010P01" , "frm::mod/AM010P01.xfdl"
                                                , aAgrKey
                                                //, sOptions
                                                , ""
                                                , "", false);
            }
        };

        // 그룹추가 버튼
        this.btnGroupAdd_onclick = function(obj,e)
        {
            this.fnGroupAdd("Add");
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
            var objParam = "PROJECT_CD='" + this.fv_sProjectCd + "' MENU_CD='" + this.ProgId + "'";

            take.tranSelect(this, "GroupCode", "AddressbookManagement.addressbookGroupCode", "", "dsGroupCode", objParam, function()
            {
                this.dsGroupCode.insertRow(0);
                this.dsGroupCode.setColumn(0, "CODE", "G");
                this.dsGroupCode.setColumn(0, "NAME", "전체");
                this.divSearch.form.cboGroup.set_index(0);

                this.fnSearch('Group');  //그룹리스트
            });
        }

        // 그룹추가, 수정 팝업오픈 이벤트
        this.fnGroupAdd = function(sType)
        {
            var objDs 	= this.dsAddressbookGroup;
        	var sOrder	= objDs.getColumn((objDs.rowcount - 1),"GROUP_ORDER");
        	var aAgrKey;
        	//var sOptions;

            if(sType == "Add") {
                aAgrKey = {sTitle:sType, sProjectCd:this.fv_sProjectCd, sMenuCd:this.ProgId, sOrder:sOrder};
                //sOptions = "titletext='" + "그룹 추가" + "'";
            } else { // 수정
                var sGroupCd = objDs.getColumn(objDs.rowposition, "GROUP_CD");
                aAgrKey = {sTitle:sType, sProjectCd:this.fv_sProjectCd, sMenuCd:this.ProgId, sOrder:sOrder, sGroupCd:sGroupCd};
                //sOptions = "titletext='" + "그룹 수정" + "'";
            }

            //var sOptions = "showtitlebar=true layered=true titletext='" + "주소록 상세(수정)" + "'";

            take.openPopup(this, "AM010P02" , "frm::mod/AM010P02.xfdl"
        									, aAgrKey
                                            //, sOptions
                                            , ""
        									, "", false);
        }

        // 주소록 신규작성
        this.fnNewAddress = function()
        {
            var nRow = this.dsAddressbookGroup.rowposition;
            var sCode = this.dsAddressbookGroup.getColumn(nRow, "GROUP_CD");
            var aAgrKey = {sTitle:"주소록 등록", sEntry:"C", sProjectCd:this.fv_sProjectCd, sMenuCd:this.ProgId, nRow:nRow, sCode:sCode};
            var sOptions = "titletext='" + "주소록 신규작성" + "'";
            //var sOptions = "showtitlebar=true layered=true titletext='" + "주소록 상세(수정)" + "'";

        	take.openPopup(this, "AM010P01" , "frm::mod/AM010P01.xfdl"
        									, aAgrKey
                                            //, sOptions
                                            , ""
        									, "", false);
        }

        /**
         * fnHangul : 이니셜 버튼클릭 함수
         * @param  {String} sHangul 문자형 인자
         * @example this.fnHangul(sHangul);
         */
        this.fnHangul = function(sHangul)
        {
          var arrCho = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
          var sResult = "";
          for(i=0;i<sHangul.length;i++) {
            code = sHangul.charCodeAt(i)-44032;
            if(code>-1 && code<11172) sResult += arrCho[Math.floor(code/588)];
          }
          return sResult;
        }

        /**
         * fnNumberCheck : 숫자 버튼클릭 함수
         * @param  {String} sName 문자형 인자
         * @example this.fnNumberCheck(sName);
         */
        this.fnNumberCheck = function(sName)
        {
            var sFilter = sName.replace(/[^0-9]/g, '');

            if(!isNaN(sFilter)) {
                if(sFilter.length>0) {
                    return "Y";
                }
            }
        };

        /**
         * fnAlphaCheck : 알파벳 버튼클릭 함수
         * @param  {String} sName 문자형 인자
         * @example this.fnAlphaCheck(sName);
         */
        this.fnAlphaCheck = function(sName)
        {
            var sFilter = sName.replace(/[^a-zA-Z]/g, '');

            if(sFilter.length>0) {
                return "Y";
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
                case "Group" : //그룹코드 콜백
        			trace(this.dsAddressbookGroup.saveXML());
                     this.fnSearch('List');
                    break;
                case "List" :  //조회 콜백
                    //Script
                    var nCnt = this.dsAddressbookInfo.rowcount;
                    this.divDetail.form.staAddressbook.set_text("주소록목록 (총 " + nCnt + "건)");

                    this.dsSearch.clearData();
                    this.dsSearch.addRow();
                    break;
                case "Delete" : //삭제(저장) 콜백
                    take.alert(this, "Info", "선택한 주소록이 삭제 되었습니다.");
        			this.fnSearch('List');
                    break;
                case "DelGroup" : //그룹 삭제 콜백
                    take.alert(this, "Info", "그룹 삭제가 정상처리 되었습니다.");
        			//this.fnInit();
                    this.reload();
                    break;

                default :
                    break;
            }
        }

        /**
        * fnPopCallback : popup callback
        * @param  : N/A
        * @return : N/A
        * @example :
        */
        this.fnPopCallback = function(sPopId, sArg)
        {
            switch(sPopId)
            {
                case "AM010P01" : // 주소록추가 콜백
                     this.fnSearch('List');
                    break;
                case "AM010P02" :  //그룹추가 콜백
                    this.fnInit();
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
            this.btnShowHide.addEventHandler("onclick",this.btnHide_onclick,this);
            this.divDetail.form.btnGroupAdd.addEventHandler("onclick",this.btnGroupAdd_onclick,this);
            this.divDetail.form.grdAddressbookGroup.addEventHandler("oncellclick",this.grdAddressbookGroup_oncellclick,this);
            this.divDetail.form.grdAddressbookInfo.addEventHandler("onheadclick",this.grdAddressbookInfo_onheadclick,this);
            this.divDetail.form.grdAddressbookInfo.addEventHandler("oncelldblclick",this.grdAddressbookInfo_oncelldblclick,this);
            this.divDetail.form.btnAllSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnASub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnBSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnCSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnDSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnESub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnFSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnGSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnHSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnISub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnJSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnKSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnLSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnMSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnNSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnAlphabetSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.divDetail.form.btnNumberSub.addEventHandler("onclick",this.btnSub_onclick,this);
            this.dsAddressbookGroup.addEventHandler("onrowposchanged",this.dsAddressbookGroup_onrowposchanged,this);
        };
        this.loadIncludeScript("AM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
