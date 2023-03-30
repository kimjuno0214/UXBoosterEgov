(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC010");
            this.set_titletext("시스템공통_시스템관리_시스템관리 Main");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSystemInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DSSYSTEMINFO\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_DEPLOY_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOGO_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"BANNER_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"POLICY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEM_VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEM_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_EXCEL\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_MANUAL\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSystemDeploy", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPLOY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPLOY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPLOY_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPLOY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPLOY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPLOY_type\" type=\"STRING\" size=\"256\"/><Column id=\"DEPLOY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeploytypeCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSystemPolicy", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POLICY_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVACY_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSystemLoginPolicy", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POLICY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MIX_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RECENT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_CHANGE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"IMPOSSIBLE_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMixCdCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImpossibleTxt", this);
            obj._setContents("<ColumnInfo><Column id=\"IMPOSSIBLE_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSystemButton", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_EXCEL\" type=\"STRING\" size=\"256\"/><Column id=\"SHORTCUT_MANUAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_size\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SYSTEM_ID\">S000000001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("LoginFileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("TopFileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("BannerFileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staSystemNmTitle","10","40","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시스템 명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staSystemVersionTitle","10","70","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Version");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staSystemLicenseTitle","10","100","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("License 정보");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","128","40",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","128","70",null,"31","529",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staSystemLicense","128","100",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("License 정보");
            this.addChild(obj.name, obj);

            obj = new Static("staManagerNmTitle","510","40","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSystemNm","136","45","354","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("edt_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSystemVersion","136","75","354","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Static("staDescTxtTitle","10","130","120","94",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","128","130",null,"94","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Button("btnManager",null,"45","21","21","20",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_search02");
            this.addChild(obj.name, obj);

            obj = new Edit("edtManagerNm","636","45",null,"21","btnManager:3",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("edt_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Static("staLastDeployDtTitle","510","70","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("최종배포일시");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staLastDeployDt","629","70",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("최종배포일시");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtDescTxt","138","135",null,"85","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab02","192","234","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("약관등록");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","101","234","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("이미지등록");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab00","10","234","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("배포이력");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Div("divTab00","10","261",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","798","28","220","3",null,null,null,null,null,null,this.divTab00.form);
            obj.set_taborder("4");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.divTab00.addChild(obj.name, obj);

            obj = new Grid("gridSystemDeploy","10","31",null,null,"10","28",null,null,null,null,this.divTab00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSystemDeploy");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"500\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"배포일자\"/><Cell col=\"2\" text=\"시간\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"배포내용\"/><Cell col=\"5\" text=\"배포자\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:ROWNUM\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:DEPLOY_DATE\" displaytype=\"normal\" edittype=\"date\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:DEPLOY_TIME\" edittype=\"text\"/><Cell col=\"3\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsDeploytypeCode\" combocodecol=\"CODE\" combodatacol=\"NAME\" text=\"bind:DEPLOY_TYPE\"/><Cell col=\"4\" text=\"bind:DEPLOY_DESC\" edittype=\"text\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:DEPLOY_NM\" edittype=\"text\"/></Band></Format></Formats>");
            this.divTab00.addChild(obj.name, obj);

            obj = new Button("btnDeploySave",null,"5","46","23","10",null,null,null,null,null,this.divTab00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab00.addChild(obj.name, obj);

            obj = new Button("btnDeployDel",null,"5","46","23","60",null,null,null,null,null,this.divTab00.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab00.addChild(obj.name, obj);

            obj = new Button("btnDeployAdd",null,"5","46","23","110",null,null,null,null,null,this.divTab00.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab00.addChild(obj.name, obj);

            obj = new Button("btnTab03","283","234","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("로그인정책");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab04","374","234","140","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("공통버튼단축키관리");
            obj.set_cssclass("btn_WF_tab01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTab01","10","671",null,null,"10","-350",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab01");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","408","62","200","246",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("Static06","607","62","200","246",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("Static07","806","62",null,"246","10",null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab01.addChild(obj.name, obj);

            obj = new Button("btnSaveSub",null,"5","46","23","10",null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("Static17","798","28","220","3",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("4");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("staLogo1","10","31","200","31",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("5");
            obj.set_text("LOGIN LOGO");
            obj.set_cssclass("sta_WF_th01Limport");
            obj.set_textAlign("center");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("staLogo2","209","31","200","31",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("6");
            obj.set_text("TOP LOGO");
            obj.set_cssclass("sta_WF_th01Limport");
            obj.set_textAlign("center");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("staBanner","408","31",null,"31","10",null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("7");
            obj.set_text("LOGIN 배너");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("center");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("Static02","10","62","200","246",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("Static04","209","62","200","246",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab01.addChild(obj.name, obj);

            obj = new ImageViewer("imgLogin","25","80","169","144",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("10");
            obj.set_stretch("fit");
            this.divTab01.addChild(obj.name, obj);

            obj = new ImageViewer("imgTop","226","80","169","144",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("11");
            obj.set_stretch("fit");
            this.divTab01.addChild(obj.name, obj);

            obj = new ImageViewer("imgBanner01","422","80","169","144",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("12");
            obj.set_stretch("fit");
            this.divTab01.addChild(obj.name, obj);

            obj = new ImageViewer("imgBanner02","623","80","169","144",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("13");
            obj.set_stretch("fit");
            this.divTab01.addChild(obj.name, obj);

            obj = new ImageViewer("imgBanner03","822","80","169","144",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("14");
            obj.set_stretch("fit");
            this.divTab01.addChild(obj.name, obj);

            obj = new Button("btnLogoUploadSub1","75","imgLogin:55","69","23",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("15");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab01.addChild(obj.name, obj);

            obj = new Button("btnLogoUploadSub2","275","imgTop:55","69","23",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("16");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab01.addChild(obj.name, obj);

            obj = new Button("btnBannerUploadSub2","677","imgBanner02:55","69","23",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("17");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab01.addChild(obj.name, obj);

            obj = new Button("btnBannerUploadSub1","474","imgBanner01:55","69","23",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("18");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab01.addChild(obj.name, obj);

            obj = new Button("btnBannerUploadSub3","874","imgBanner03:55","69","23",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("19");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab01.addChild(obj.name, obj);

            obj = new Div("divTab02","10","1031",null,null,"10","-710",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab02");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","798","28","220","10",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("0");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.divTab02.addChild(obj.name, obj);

            obj = new Tab("tabPolicy","10","12",null,null,"10","28",null,null,null,null,this.divTab02.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.divTab02.addChild(obj.name, obj);

            obj = new Tabpage("tpgPolicyInfo",this.divTab02.form.tabPolicy);
            obj.set_text("시스템이용약관");
            this.divTab02.form.tabPolicy.addChild(obj.name, obj);

            obj = new TextArea("txtPolicyInfo","10","10",null,null,"10","10",null,null,null,null,this.divTab02.form.tabPolicy.tpgPolicyInfo.form);
            obj.set_taborder("0");
            this.divTab02.form.tabPolicy.tpgPolicyInfo.addChild(obj.name, obj);

            obj = new Tabpage("tpgPrivacyInfo",this.divTab02.form.tabPolicy);
            obj.set_text("개인정보처리방침");
            this.divTab02.form.tabPolicy.addChild(obj.name, obj);

            obj = new TextArea("txtPrivacyInfo","10","10",null,null,"10","10",null,null,null,null,this.divTab02.form.tabPolicy.tpgPrivacyInfo.form);
            obj.set_taborder("0");
            this.divTab02.form.tabPolicy.tpgPrivacyInfo.addChild(obj.name, obj);

            obj = new Button("btnPolicySave",null,"5","46","23","10",null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab02.addChild(obj.name, obj);

            obj = new Div("divTab03","10","1391",null,null,"10","-1070",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab03");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoginPolicySave",null,"5","46","23","10",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static17","798","28","220","10",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("1");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staMixCdTitle","10","37","220","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("2");
            obj.set_text("문자숫자혼합체크");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static10","229","37","271","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staMinLengthTitle","10","67","220","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("4");
            obj.set_text("최소길이");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static11","229","67","271","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staErrorCntTitle","10","97","220","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("6");
            obj.set_text("오류입력접속제한");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static13","229","97","271","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staRecentUseYnTitle","10","127","220","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("8");
            obj.set_text("최근 사용한 비밀번호 사용금지");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static12","229","127","271","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staFirstChangeYnTitle","10","157","220","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("10");
            obj.set_text("최초 로그인 비밀번호 변경여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static15","229","157","271","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staCheckCntTitle","10","187","220","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("12");
            obj.set_text("비밀번호 체크일 수 (0~120일)");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static14","229","187","271","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staImpossibleTxtTitle","499","37","220","181",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("14");
            obj.set_text("비밀번호 포함 불가 문자열");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static00","718","37",null,"181","10",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Combo("cboMixCd","237","42","250","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsMixCdCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divTab03.addChild(obj.name, obj);

            obj = new Spin("spnMinLength","237","72","250","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("17");
            obj.set_increment("1");
            obj.set_cssclass("spn_WF_essential");
            obj.set_min("6");
            obj.set_max("18");
            obj.set_value("");
            this.divTab03.addChild(obj.name, obj);

            obj = new Combo("cboErrorCnt","237","102","250","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("18");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            obj.set_cssclass("cmb_WF_essential");
            var divTab03_form_cboErrorCnt_innerdataset = new nexacro.NormalDataset("divTab03_form_cboErrorCnt_innerdataset", obj);
            divTab03_form_cboErrorCnt_innerdataset._setContents("<ColumnInfo><Column id=\"CODECOLUMN\" size=\"256\"/><Column id=\"DATACOLUMN\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODECOLUMN\">0</Col><Col id=\"DATACOLUMN\">0</Col></Row><Row><Col id=\"CODECOLUMN\">1</Col><Col id=\"DATACOLUMN\">1</Col></Row><Row><Col id=\"CODECOLUMN\">2</Col><Col id=\"DATACOLUMN\">2</Col></Row><Row><Col id=\"CODECOLUMN\">3</Col><Col id=\"DATACOLUMN\">3</Col></Row><Row><Col id=\"CODECOLUMN\">4</Col><Col id=\"DATACOLUMN\">4</Col></Row><Row><Col id=\"CODECOLUMN\">5</Col><Col id=\"DATACOLUMN\">5</Col></Row></Rows>");
            obj.set_innerdataset(divTab03_form_cboErrorCnt_innerdataset);
            obj.set_text("Combo00");
            this.divTab03.addChild(obj.name, obj);

            obj = new Combo("cboRecentUseYn","237","132","250","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsUseYnCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divTab03.addChild(obj.name, obj);

            obj = new Combo("cboFirstChangeYn","237","162","250","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsUseYnCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divTab03.addChild(obj.name, obj);

            obj = new Spin("spnCheckCnt","237","192","250","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("21");
            obj.set_cssclass("spn_WF_essential");
            obj.set_min("0");
            obj.set_max("120");
            obj.set_value("");
            this.divTab03.addChild(obj.name, obj);

            obj = new Button("btnLoginPolicyPlus",null,"159","23","23","16",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_text("+");
            this.divTab03.addChild(obj.name, obj);

            obj = new Button("btnLoginPolicyMinus",null,"189","23","23","16",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_text("-");
            this.divTab03.addChild(obj.name, obj);

            obj = new Grid("grdImpossibleTxt","725","42",null,"171","52",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("24");
            obj.set_binddataset("dsImpossibleTxt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:IMPOSSIBLE_STR\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.divTab03.addChild(obj.name, obj);

            obj = new Div("divTab04","10","1751",null,null,"10","-1430",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab04");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnButtonSave",null,"5","46","23","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static17","798","28","220","10",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("1");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staShortcutInputTitle","10","37","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("2");
            obj.set_text("입력");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static10","129","37",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staShortcutDeleteTitle","10","67","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static11","129","67",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staShortcutSaveTitle","10","97","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static13","129","97",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staShortcutPrintTitle","10","127","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("8");
            obj.set_text("인쇄");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static12","129","127",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staShortcutExcelTitle","10","157","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("10");
            obj.set_text("엑셀");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static15","129","157",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staShortcutManualTitle","10","187","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("12");
            obj.set_text("매뉴얼");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static14","129","187",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtShortcutInput","136","42","354","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("14");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtShortcutDelete","136","72","354","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("15");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtShortcutSave","136","102","354","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("16");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtShortcutPrint","136","132","354","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("17");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtShortcutExcel","136","162","354","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("18");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtShortcutManual","136","192","354","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("19");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtManagerCd",null,"45","80","21","btnManager:3",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staHolidayListT","10","10","303","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnDemoId",null,"10","80","23","10",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("데모ID생성");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFwDownload",null,"10","130","22","93",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Framework다운로드");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTab00.form
            obj = new Layout("default","",0,0,this.divTab00.form,function(p){});
            this.divTab00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab01.form
            obj = new Layout("default","",0,0,this.divTab01.form,function(p){});
            this.divTab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab02.form.tabPolicy.tpgPolicyInfo.form
            obj = new Layout("default","",0,0,this.divTab02.form.tabPolicy.tpgPolicyInfo.form,function(p){});
            this.divTab02.form.tabPolicy.tpgPolicyInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab02.form.tabPolicy.tpgPrivacyInfo.form
            obj = new Layout("default","",0,0,this.divTab02.form.tabPolicy.tpgPrivacyInfo.form,function(p){});
            this.divTab02.form.tabPolicy.tpgPrivacyInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab02.form
            obj = new Layout("default","",0,0,this.divTab02.form,function(p){});
            this.divTab02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab03.form
            obj = new Layout("default","",0,0,this.divTab03.form,function(p){});
            this.divTab03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab04.form
            obj = new Layout("default","",0,0,this.divTab04.form,function(p){});
            this.divTab04.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSystemNm","value","dsSystemInfo","SYSTEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtManagerNm","value","dsSystemInfo","MANAGER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtSystemVersion","value","dsSystemInfo","SYSTEM_VERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","staLastDeployDt","text","dsSystemInfo","LAST_DEPLOY_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","staSystemLicense","text","dsSystemInfo","SYSTEM_LICENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txtDescTxt","value","dsSystemInfo","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divTab02.form.tabPolicy.tpgPolicyInfo.form.txtPolicyInfo","value","dsSystemPolicy","POLICY_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divTab02.form.tabPolicy.tpgPrivacyInfo.form.txtPrivacyInfo","value","dsSystemPolicy","PRIVACY_INFO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divTab03.form.cboMixCd","value","dsSystemLoginPolicy","MIX_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divTab03.form.spnMinLength","value","dsSystemLoginPolicy","MIN_LENGTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divTab03.form.cboErrorCnt","value","dsSystemLoginPolicy","ERROR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divTab03.form.cboRecentUseYn","value","dsSystemLoginPolicy","RECENT_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divTab03.form.cboFirstChangeYn","value","dsSystemLoginPolicy","FIRST_CHANGE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divTab03.form.spnCheckCnt","value","dsSystemLoginPolicy","CHECK_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divTab04.form.edtShortcutInput","value","dsSystemButton","SHORTCUT_INPUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divTab04.form.edtShortcutDelete","value","dsSystemButton","SHORTCUT_DELETE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divTab04.form.edtShortcutSave","value","dsSystemButton","SHORTCUT_SAVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divTab04.form.edtShortcutPrint","value","dsSystemButton","SHORTCUT_PRINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divTab04.form.edtShortcutExcel","value","dsSystemButton","SHORTCUT_EXCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divTab04.form.edtShortcutManual","value","dsSystemButton","SHORTCUT_MANUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtManagerCd","value","dsSystemInfo","MANAGER_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SC010.xfdl", function() {
        /**
        *  시스템관리 Main
        *
        *  @MenuPath    시스템공통 > 시스템관리 > 시스템관리 Main
        *  @FileName    SC010.xfdl
        *  @Creator     천우성
        *  @CreateDate  2019.08.14
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.14      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	// gds _ 관리자권한 여부
        this.fv_nSystemId = 'S000000001';     //시스템ID
        this.fv_sFileType = "IMG";
        this.fv_sUploadGubun = "";
        this.fileConfig = {
                //TODO URL
                host         : take.getSvcUrl(),
                uploadUrl    : "sc/sysImageSave.do",
                downloadUrl  : "file/download.do",
                deleteUrl    : "delete.do",
        //         downImage    : "theme://images/img_file.png",
        //         delImage     : "theme://images/btn_del.png",
                allowTypes   : ["jpg","jpeg","gif","png","bmp"],
                maxCount     : 10,
                maxSize      : "200MB",
                maxTotalSize : "200MB"
            };

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.take_onload = function(obj, e)
        {
            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
        		var objList = {"btnTab00":this.divTab00, "btnTab01":this.divTab01,
                               "btnTab02":this.divTab02, "btnTab03":this.divTab03,
                               "btnTab04":this.divTab04};
                var sTabId = "tab01";
                var objFirstLoad = this.btnTab00;
                var sTabOnCss = "btn_WF_tab02";
                var sTabOffCss = "btn_WF_tab01";

                take.TabSetting(this, sTabId, objList, objFirstLoad, sTabOnCss, sTabOffCss);

        		if( this.fv_sGdsAdminYn == "Y" ){
        			this.btnFwDownload.set_visible(true);
        			this.btnDemoId.set_visible(true);
        		}

        		take.tranCode(this, ["00008", "00009","00010"], ["dsDeploytypeCode", "dsUseYnCode","dsMixCdCode"], ["", "SEL", "SEL"], function ()
        		{
        			this.fnTran('Detail');
        		});
            }
        }

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
            if (take.nvl(sTranId, "")=="") sTranId = "Detail";

            //변수선언
            var sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "Detail" :
        			this.dsSystemInfo.clearData();
        			this.dsSystemDeploy.clearData();
        			this.dsSystemPolicy.clearData();
        			this.dsSystemLoginPolicy.clearData();
        			this.dsSystemButton.clearData();

        			var sOutDs 		= ["dsSystemInfo", "dsSystemDeploy", "dsSystemPolicy", "dsSystemLoginPolicy", "dsSystemButton"];
        			var sNameSpaces 	= ["SystemCommon.systemInfoDetail"
        									, "SystemCommon.systemDeployList"
        									, "SystemCommon.systemInfoDetail"
        									, "SystemCommon.systemLoginPolicyDetail"
        									, "SystemCommon.systemInfoDetail"];
        			var sParam 		= "SYSTEM_ID='" + this.fv_nSystemId + "'";

        			take.tranSelect(this, "MultiSelect", sNameSpaces, "", sOutDs, sParam,
        				function(sId, nErrCd, sErrMsg){
        					var sImpossibleTxt = this.dsSystemLoginPolicy.getColumn(0, "IMPOSSIBLE_TXT");
        					if (take.nvl(sImpossibleTxt, "") != "")
        					{
        						var arrImpossibleTxt = sImpossibleTxt.split("\n");
        						this.dsImpossibleTxt.set_updatecontrol(false);
        						for( var i=0; i<arrImpossibleTxt.length-1; i++ )
        						{
        							var nRow = this.dsImpossibleTxt.addRow();
        							this.dsImpossibleTxt.setColumn(nRow, "IMPOSSIBLE_STR", arrImpossibleTxt[i]);
        						}
        						this.dsImpossibleTxt.set_updatecontrol(true);
        					}

        					this.fnImgSetting();
        				});

                    break;
        		case "Save" :

        			//take.tranSave(this, "Save", "SystemCommon.systemInfoMain", "dsSystemInfo", "", "", sCallBack);
        			take.transaction(this, "Save", "SVC_LOC::sc/systemInfoMainSave.do", "dsSystemInfo=dsSystemInfo:U", "", "", sCallBack);
                    break;

        		case "DeploySave" :

        			//take.tranSave(this, "DeploySave", "SystemCommon.systemDeploy", "dsSystemDeploy", "", "", sCallBack);
        			take.transaction(this, "DeploySave", "SVC_LOC::sc/systemDeploySave.do", "dsSystemDeploy=dsSystemDeploy:U", "", "", sCallBack);
                    break;

        		case "PolicySave" :

        			//take.tranSave(this, "PolicySave", "SystemCommon.systemInfoPolicy", "dsSystemPolicy", "", "", sCallBack);
        			take.transaction(this, "PolicySave", "SVC_LOC::sc/systemInfoPolicySave.do", "dsSystemPolicy=dsSystemPolicy:U", "", "", sCallBack);
                    break;

        		case "LoginPolicySave" :

        			var sImpossibleTxt = "";
        			if( this.dsImpossibleTxt.rowcount > 0 ){
        				for(var i=0; i<this.dsImpossibleTxt.rowcount; i++){
        					var impossibleTxt = take.nvl(this.dsImpossibleTxt.getColumn(i, "IMPOSSIBLE_STR"), "");
        					if(!take.isEmpty(impossibleTxt)) {
        						sImpossibleTxt += impossibleTxt + "\n";
        					}
        				}
        			}
        			this.dsSystemLoginPolicy.setColumn(0, "IMPOSSIBLE_TXT", sImpossibleTxt);

        			//take.tranSave(this, "LoginPolicySave", "SystemCommon.systemLoginPolicy", "dsSystemLoginPolicy", "", "", sCallBack);
        			take.transaction(this, "LoginPolicySave", "SVC_LOC::sc/systemLoginPolicySave.do", "dsSystemLoginPolicy=dsSystemLoginPolicy:A", "", "", sCallBack);
                    break;

        		case "ButtonSave" :

        			//take.tranSave(this, "Save", "SystemCommon.systemInfoButton", "dsSystemButton", "", "", sCallBack);
        			take.transaction(this, "LoginPolicySave", "SVC_LOC::sc/systemInfoButtonSave.do", "dsSystemButton=dsSystemButton:U", "", "", sCallBack);

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
                //case "Detail" : //조회 콜백
                    //this.tabSystemInfo.tpgDeploy.set_url("biz::sys/SC010T01.xfdl");
                //    break;
        		case "Save" : //조회 콜백

        			this.fnTran('Detail');
                    break;
        		case "DeploySave" :

        			this.fnTran('Detail');
        			break;
        		case "PolicySave" :

        			this.fnTran('Detail');
        			break;
        		case "LoginPolicySave" :

        			this.dsImpossibleTxt.clearData();
        			this.fnTran('Detail');
        			break;
        		case "ButtonSave" :

        			this.fnTran('Detail');
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
        this.fnPopCallback = function(sPopId, sRtn)
        {
            switch(sPopId)
            {
                case "SC010P01" : // 주소록추가 콜백
                    //trace("sRtn : " + sRtn);
                    var arrRtn = sRtn.split(',');
                    this.edtManagerCd.set_value(arrRtn[0]);
                    this.edtManagerNm.set_value(arrRtn[1]);
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
            if (take.nvl(sTranId, "")=="") sTranId = "Detail";

            if (sTranId == "Detail") {
            	if(this.fnCheckForm()) {
                    this.fnTran(sTranId);
                }
            } else {
            	this.fnTran(sTranId);
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

            this.fnTran(sTranId);
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

        this.fnPrint = function()
        {
        	var agrKey = {
        					sPdfType:"sys/SC010"
        					, sNamespace:"SystemCommon.systemInfoDetail,SystemCommon.systemDeployList,SystemCommon.systemInfoDetail,SystemCommon.systemLoginPolicyDetail,SystemCommon.systemInfoDetail"
        				};
        	take.openPopup(this, "comPrintPop", "frm::com/comPrintPop.xfdl", agrKey, "",
        		function(sId, sRtn){
        		},
        	false);
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 배포 이력 추가 버튼 클릭시
        this.divTab00_btnDeployAdd_onclick = function(obj,e)
        {
        	var objDateTime = take.getTodayTime();

        	var nRow = this.dsSystemDeploy.addRow();
        	this.dsSystemDeploy.setColumn(nRow, "SYSTEM_ID", this.fv_nSystemId);
        	this.dsSystemDeploy.setColumn(nRow, "DEPLOY_DATE", objDateTime.date);
        	this.dsSystemDeploy.setColumn(nRow, "DEPLOY_TIME", objDateTime.hh + objDateTime.mm);
        	this.dsSystemDeploy.setColumn(nRow, "DEPLOY_TYPE", "01");
        };
        // 배포이력 삭제 버튼 클릭시
        this.divTab00_btnDeployDel_onclick = function(obj,e)
        {
        	this.dsSystemDeploy.deleteRow(this.dsSystemDeploy.rowposition);
        };
        // 배포이력 저장 버튼 클릭시
        this.divTab00_btnDeploySave_onclick = function(obj,e)
        {
        	this.fnTran('DeploySave');
        };

        // 약관등록 저장 버튼 클릭시
        this.divTab02_btnPolicySave_onclick = function(obj,e)
        {
        	this.fnTran('PolicySave');
        };
        // 로그인정책 저장 버튼 클릭시
        this.divTab03_btnLoginPolicySave_onclick = function(obj,e)
        {
        	if(!take.isDsModified(this.dsSystemLoginPolicy) && !take.isDsModified(this.dsImpossibleTxt)){
        		return;
        	}
        	this.fnTran('LoginPolicySave');
        };
        // 로그인정책 플러스 버튼 클릭시
        this.divTab03_btnLoginPolicyPlus_onclick = function(obj,e)
        {
        	this.dsImpossibleTxt.addRow();
        };
        // 로그인정책 마이너스 버튼 클릭시
        this.divTab03_btnLoginPolicyMinus_onclick = function(obj,e)
        {
        	var nRow = this.dsImpossibleTxt.rowposition;
        	this.dsImpossibleTxt.deleteRow(nRow);
        };
        // 공통버튼단축키관리 저장 버튼 클릭시
        this.divTab04_btnButtonSave_onclick = function(obj,e)
        {
        	this.fnTran('ButtonSave');
        };

        //담당자 선택 버튼 클릭 팝업오픈
        this.btnManager_onclick = function(obj,e)
        {
        	take.openPopup(this, "SC010P01", "biz::sys/SC010P01.xfdl", "", "showtitlebar=true layered=true", "fnPopCallback", false);
        };

        //담당자 이름 빈칸일때 담당자코드 리셋
        this.edtManagerNm_onchanged = function(obj,e)
        {
        	var sValue = take.nvl(obj.value, "");

            if (sValue == "")
        	{
        		this.edtManagerCd.set_value("");
        	}
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var sSystemNm   = take.nvl(this.edtSystemNm.text, "");
            var sManagerNm  = take.nvl(this.edtManagerNm.text, "");
            var sVersionNm  = take.nvl(this.edtSystemVersion.text, "");

            if(sSystemNm == ""){
                take.alert(this, "Info", "시스템명을 작성해주세요.");
                this.edtSystemNm.setFocus();
                return false;
            }

            if(sManagerNm == ""){
                take.alert(this, "Info", "담당자명을 작성해주세요.");
                this.edtManagerNm.setFocus();
                return false;
            }

            if(sVersionNm == ""){
                take.alert(this, "Info", "시스템 버전명을 작성해주세요.");
                this.edtSystemVersion.setFocus();
                return false;
            }

            return true;
        }

        // Login Logo업로드 버튼 클릭
        this.divTab01_btnLogoUploadSub1_onclick = function(obj,e)
        {
        	this.fv_sUploadGubun = "Login";
        	this.LoginFileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // TOP Logo업로드 버튼 클릭
        this.divTab01_btnLogoUploadSub2_onclick = function(obj,e)
        {
        	this.fv_sUploadGubun = "Top";
        	this.TopFileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // Banner Logo1업로드 버튼 클릭
        this.divTab01_btnBannerUploadSub1_onclick = function(obj,e)
        {
        	this.fv_sUploadGubun = "Banner01";
        	this.BannerFileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // Banner Logo2업로드 버튼 클릭
        this.divTab01_btnBannerUploadSub2_onclick = function(obj,e)
        {
        	this.fv_sUploadGubun = "Banner02";
        	this.BannerFileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        // Banner Logo3업로드 버튼 클릭
        this.divTab01_btnBannerUploadSub3_onclick = function(obj,e)
        {
        	this.fv_sUploadGubun = "Banner03";
        	this.BannerFileDialog.open('nexacro17', FileDialog.MULTILOAD);
        };

        //파일추가 후처리 이벤트
        this.FileDialog_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles, obj);
        };

        this.addFileList = function(filelist, objDialog)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
         		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
         		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, nexacro.VirtualFile.openBinary);
        	}
        }

        //파일추가 후처리 성공이벤트
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();

        			break;
        		case 3: // read() 실행시 추가 실행
        			this.divDetail.form.ivUser.set_image(e.binarydata);
        			this.fv_bData = e.binarydata;

        			this.dsFile.clearData();
        			var addidx = this.dsFile.addRow();
        			this.dsFile.setColumn(addidx, "FILE_NM", nexacro.trim(obj.filename));
        			this.dsFile.setColumn(addidx, "FILE_BLOB", this.fv_bData);
        			this.dsFile.setColumn(addidx, "IMPORT_YN", "N");
        			this.dsFile.setColumn(addidx, "FILE_TYPE", this.fv_sFileType);
        			this.dsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);
        			this.FileUpTransfer00.addFile(obj.filename, obj);

        			break;
        		case 9:	// getFileSize() 실행시 추가 실행
        			if( nexacro._Browser == "Runtime" )
        			{
        				//파일 바이너리데이터 생성
        				obj.read();
        			}
        			else
        			{
        				var objIframe = window.document.getElementsByTagName('iframe');
        				var nIframeCnt = (objIframe.length - 1);
        				var objInput = objIframe[nIframeCnt].contentWindow.document.getElementsByTagName("input");
        				var objImageView = this.divTab01.form.components["img"+this.fv_sUploadGubun];
        				var sImageNm = "imgTake" + this.fv_sUploadGubun + ".png";

        				var objDsFile = this.dsFile;
        				var objFileUpTransfer = this.FileUpTransfer00;
        				//objFileUpTransfer.clearFileList();

        				trace("!@!@>> objInput.length:   " + objInput.length);
        				for (var i = 0; i < objInput.length; i++) {
        					if (objInput[i].type == "file") {
        						if( objInput[i].files.length > 0 )
        						{
        							var reader  = new FileReader();
        							reader.addEventListener("load", function(){
        								objImageView.set_image(reader.result);
        								//objDsFile.setColumn(addidx, "FILE_BLOB", reader.result);
        							});

        							reader.readAsDataURL(objInput[i].files[0], "EUC-KR");
        							var nFindRow = objDsFile.findRowAsNF("FILE_TYPE",this.fv_sUploadGubun);
        							if( nFindRow != -1 )
        							{
        								var sDelFileNm = objDsFile.getColumn(nFindRow, "FILE_NM");
        								objFileUpTransfer.removeFile(sDelFileNm);
        								objDsFile.deleteRow(nFindRow);
        							}
        							var addidx = objDsFile.addRow();
        							objDsFile.setColumn(addidx, "FILE_NM", sImageNm);
        							//objDsFile.setColumn(addidx, "FILE_PATH", this.fv_sFileType);
        							objDsFile.setColumn(addidx, "FILE_TYPE", this.fv_sUploadGubun);
        							objDsFile.setColumn(addidx, "FILE_SIZE", e.filesize);
        							objDsFile.setColumn(addidx, "IMPORT_YN", "N");

        							objFileUpTransfer.addFile(sImageNm, obj);
        						}
        					}
        				}
        			}

        			break;
        		default :
        			break;
        	}
        }

        this.divTab01_btnSaveSub_onclick = function(obj,e)
        {
        	//trace("!@!@>> dsFile:  " + this.dsFile.saveXML());
        	this.fnUploadFiles();
        };

        // 파일업로드수행
        this.fnUploadFiles = function ()
        {
        	var url = this.fileConfig.host + this.fileConfig.uploadUrl;

        	this.FileUpTransfer00.upload(url);
        };

        //업로드 성공이벤트
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	trace("succST-----------------------------------------------------------------");
        	var sMsg = "저장이 ";

        	take.alert(this, "", "{param1}완료되었습니다.", {param1 : sMsg});

        // 	var sUrl = nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC_LOC")].url;
        // 	var sImg = "imgTakeLogin.png";
        // 	UXBooster.TopFrame.form.staTopLogo.set_background('url("'+sUrl+'/images/logo/'+ sImg +'") no-repeat left center');
        //
        // 	var sImg = "imgTakeTop.png";
        // 	UXBooster.TopFrame.form.staTopLogo.set_background('url("'+sUrl+'/images/logo/'+ sImg +'") no-repeat left center');

        	trace("succED-----------------------------------------------------------------");
        };

        //업로드 실패이벤트
        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	trace("errorST-----------------------------------------------------------------");

        	trace("errorED-----------------------------------------------------------------");
        };

        this.fnImgSetting = function()
        {

            var sUrl, sDateTime;
            var objDateTime = take.getTodayTime();

            sDateTime = objDateTime.date + objDateTime.time;

        	sUrl = take.getSvcUrl() + "images";

        	this.divTab01.form.imgLogin.set_image('url("'+sUrl+'/logo/imgTakeLogin.png?'+ sDateTime +'")');
        	this.divTab01.form.imgTop.set_image('url("'+sUrl+'/logo/imgTakeTop.png?'+ sDateTime +'")');
        	this.divTab01.form.imgBanner01.set_image('url("'+sUrl+'/banner/imgTakeBanner01.png?'+ sDateTime +'")');
        	this.divTab01.form.imgBanner02.set_image('url("'+sUrl+'/banner/imgTakeBanner02.png?'+ sDateTime +'")');
        	this.divTab01.form.imgBanner03.set_image('url("'+sUrl+'/banner/imgTakeBanner03.png?'+ sDateTime +'")');
        }

        this.btnFwDownload_onclick = function(obj,e)
        {
        	this.alert("작업중입니다.");
        };

        this.btnDemoId_onclick = function(obj,e)
        {
        	take.openPopup(this, "SC010P02", "biz::sys/SC010P02.xfdl", "", "", "fnPopCallback", false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.take_onload,this);
            this.btnManager.addEventHandler("onclick",this.btnManager_onclick,this);
            this.edtManagerNm.addEventHandler("onchanged",this.edtManagerNm_onchanged,this);
            this.btnTab02.addEventHandler("onclick",this.btnTab02_onclick,this);
            this.btnTab01.addEventHandler("onclick",this.btnTab01_onclick,this);
            this.btnTab00.addEventHandler("onclick",this.btnTab00_onclick,this);
            this.divTab00.form.btnDeploySave.addEventHandler("onclick",this.divTab00_btnDeploySave_onclick,this);
            this.divTab00.form.btnDeployDel.addEventHandler("onclick",this.divTab00_btnDeployDel_onclick,this);
            this.divTab00.form.btnDeployAdd.addEventHandler("onclick",this.divTab00_btnDeployAdd_onclick,this);
            this.divTab01.form.btnSaveSub.addEventHandler("onclick",this.divTab01_btnSaveSub_onclick,this);
            this.divTab01.form.btnLogoUploadSub1.addEventHandler("onclick",this.divTab01_btnLogoUploadSub1_onclick,this);
            this.divTab01.form.btnLogoUploadSub2.addEventHandler("onclick",this.divTab01_btnLogoUploadSub2_onclick,this);
            this.divTab01.form.btnBannerUploadSub2.addEventHandler("onclick",this.divTab01_btnBannerUploadSub2_onclick,this);
            this.divTab01.form.btnBannerUploadSub1.addEventHandler("onclick",this.divTab01_btnBannerUploadSub1_onclick,this);
            this.divTab01.form.btnBannerUploadSub3.addEventHandler("onclick",this.divTab01_btnBannerUploadSub3_onclick,this);
            this.divTab02.form.tabPolicy.tpgPolicyInfo.form.txtPolicyInfo.addEventHandler("onchanged",this.divTab02_tabPolicy_tpgPolicyInfo_txtPolicyInfo_onchanged,this);
            this.divTab02.form.btnPolicySave.addEventHandler("onclick",this.divTab02_btnPolicySave_onclick,this);
            this.divTab03.form.btnLoginPolicySave.addEventHandler("onclick",this.divTab03_btnLoginPolicySave_onclick,this);
            this.divTab03.form.btnLoginPolicyPlus.addEventHandler("onclick",this.divTab03_btnLoginPolicyPlus_onclick,this);
            this.divTab03.form.btnLoginPolicyMinus.addEventHandler("onclick",this.divTab03_btnLoginPolicyMinus_onclick,this);
            this.divTab04.form.btnButtonSave.addEventHandler("onclick",this.divTab04_btnButtonSave_onclick,this);
            this.btnDemoId.addEventHandler("onclick",this.btnDemoId_onclick,this);
            this.btnFwDownload.addEventHandler("onclick",this.btnFwDownload_onclick,this);
            this.LoginFileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.TopFileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.BannerFileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("SC010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
