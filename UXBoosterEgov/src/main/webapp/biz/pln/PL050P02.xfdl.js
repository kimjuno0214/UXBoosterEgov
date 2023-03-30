(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL");
            this.set_titletext("시료등록");
            this.set_cssclass("fm_work");
            this.set_background("#ffffff");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"conditionKey\" type=\"STRING\" size=\"256\"/><Column id=\"conditionValue\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"conditionKey\"/><Col id=\"conditionValue\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApiMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgrsSttusCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdr", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_YR\" type=\"STRING\" size=\"255\"/><Column id=\"ODR_DIV_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ODR\" type=\"STRING\" size=\"255\"/><Column id=\"CERT_FLD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"THEMA\" type=\"STRING\" size=\"255\"/><Column id=\"TOTQY\" type=\"STRING\" size=\"255\"/><Column id=\"BGNG_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRS_STTUS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_GDS_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOdrList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailGdsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApiDetail", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApiSim", this);
            obj._setContents("<ColumnInfo><Column id=\"certOrganName\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button82_00",null,"9","51","23","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_save01");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00","10","36",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd","10","36","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("연도");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbOdrYr","137","41",null,"21","22",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00","10","66",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00","10","66","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("차수/인증분야");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbOdr","137","71",null,"21","22",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsOdrList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00_00","10","126",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00_00","10","126","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00_00_00","10","156",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00_00_00","10","156","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("세부품목명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbDetailGdsCd","137","161",null,"21","22",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsDetailGdsCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00_00_00_00","10","186",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00_00_00_00","10","186","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("인증번호");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCertNo","137","191",null,"21","75",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_value("CA013R007-20003");
            obj.set_text("CA013R007-20003");
            this.addChild(obj.name, obj);

            obj = new Button("Button23",null,"191","50","21","23",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00_02","10","96",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00_02","10","96","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbProgrsCd","137","101",null,"21","22",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_innerdataset("dsProgrsSttusCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbGdsCd","137","131",null,"21","22",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsGdsCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_01","10","10","340","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00","10","227","340","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("gridMain","10","249",null,"100","10",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("22");
            obj.set_autofittype("col");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multiarea");
            obj.set_binddataset("dsApiMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"50\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"모델명\"/><Cell col=\"1\" text=\"인증현황\"/><Cell col=\"2\" text=\"인증번호\"/></Band><Band id=\"body\"><Cell text=\"bind:modelName\" displaytype=\"normal\" combodataset=\"dsArplnDivCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:certState\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"2\" text=\"bind:certNum\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00","11","359","340","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("인증정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00","10","385",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInst","11","385","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("인증기관");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInstNm","138","390",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_00","10","415",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertDiv","11","415","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("인증구분");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCertDivNm","138","420",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_00_00","10","445",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertYmd","11","445","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("인증일자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_00_00_00","10","475",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertChgYmd","11","475","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("일증변경일자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_00_00_01","10","505",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertChgRs","11","505","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("인증변경사유");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCertChgRsNm","138","510",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00_00","11","546","340","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("제품정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_01","10","572",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInst00","11","572","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staProductName","138","577",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_01_00","10","602",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInst00_00","11","602","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("모델명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInstNm00_00","138","607",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_01_00_00","10","632",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInst00_00_00","11","632","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInstNm00_00_00","138","637",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_01_00_01","10","662",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInst00_00_01","11","662","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("제품분류코드");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInstNm00_00_01","138","667",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00_00_00","11","703","340","21",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("제품정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_01_01","10","729",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInst00_01","11","729","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("제조사");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staProductName00","138","734",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_01_01_00","10","759",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInst00_01_00","11","759","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("제조국");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staProductName00_00","138","764",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_01_00_01_01_00_00","10","789",null,"31","10",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCertInst00_01_00_00","11","789","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("수입업체");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("staProductName00_00_00","138","794",null,"21","17",null,null,null,null,null,this);
            obj.set_taborder("59");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00_00_00_00","11","830","340","21",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("연관 인증 번호");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("gridSim","10","856",null,"100","10",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("61");
            obj.getSetter("takegrid").set("no");
            obj.set_autofittype("col");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multiarea");
            obj.set_binddataset("dsApiSim");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"인증번호\"/><Cell col=\"1\" text=\"인증상태\"/></Band><Band id=\"body\"><Cell text=\"bind:certNum\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:certState\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00_00_00_00_00","11","966","340","21",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("제품사진");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgGds","10","992",null,"215","10",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCertYmd","138","449",null,"22","17",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calCertChgYmd","138","479",null,"22","17",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cmbOdrYr","value","dsOdr","ODR_YR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","cmbDetailGdsCd","value","dsOdr","DETAIL_GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cmbProgrsCd","value","dsOdr","PROGRS_STTUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cmbGdsCd","value","dsOdr","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","staCertInstNm","text","dsApiMain","certOrganName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","staCertDivNm","text","dsApiMain","certDiv");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","staCertChgRsNm","text","dsApiMain","certChgReason");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","staProductName","text","dsApiMain","productName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","staCertInstNm00_00","text","dsApiMain","modelName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","staCertInstNm00_00_00","text","dsApiMain","remark");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","staCertInstNm00_00_01","text","dsApiMain","categoryName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","staProductName00","text","dsApiMain","makerName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","staProductName00_00","text","dsApiMain","makerCntryName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","staProductName00_00_00","text","dsApiMain","importerName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","calCertYmd","value","dsApiMain","certDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","calCertChgYmd","value","dsApiMain","certChgDate");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PL050P02.xfdl", function() {
        /**
        *  시료등록 팝업
        *
        *  @MenuPath    안전성조사 > 시료관리 > 시료등록(모바일)
        *  @FileName    PL050P02.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.03.03
        *  @Version     1.0
        *  @Desction    시료등록 모바일
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.03.03      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * GM010_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj,e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		// 공통코드 조회
        		take.tranCode(this, ["YEAR"
        							,"PROGRS_STTUS_CD"]
        		                  , ["dsYear"
        							,"dsProgrsSttusCd"]
        						  , ["",""],
        		function(sId, nErrCd, sErrMsg)
        		{
        			// 현재연도 조회
        			gFn_getDbValue(this, function(rtnValue) {

        				this.cmbOdrYr.set_value(rtnValue.resultData.substr(0, 4));

        				// 차수 / 인증분야 조회
        				take.tranSelect(this, "Search", "safety.odrComboList", "", "dsOdrList", "ODR_YR=" + this.cmbOdrYr.value,
        					function()
        					{
        						this.cmbOdr.set_index(0);
        						this.DivInfo_cmbOdr_onitemchanged();
        					}
        				);

        			}, "Doore.selectToDay");

        			//this.fnSearch();
        		});
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
        this.fnInit = function(){
           //검색조건
           //onload 공통 코드

        };

        this.fnSearch = function(sTranId)
        {
        	if(take.isEmpty(this.edtCertNo.value))
        	{
        		take.alert(this, "", "인증번호를 입력하여 주십시오.");
        		return false;
        	}

        	this.dsApiMain.clearData();
        	this.dsApiDetail.clearData();
        	this.dsApiSim.clearData();
        	this.imgGds.set_image('');

        	var sParam = "apiType=main conditionKey=certNum conditionValue=" + this.edtCertNo.value;
            take.transaction(this, "SearchMain", "SVC_LOC::doore/openApi.do", "","dsApiMain=dsApiMain", sParam, function(){
        			/*
        			if(this.dsApiMain.rowcount > 0)
        			{
        				var sParam = "apiType=detail conditionValue=" + this.dsApiMain.getColumn(0, "certNum");
        				take.transaction(this, "SearchDetail", "SVC_LOC::doore/openApi.do", "","dsApiDetail=dsApiDetail dsApiSim=dsApiSim", sParam, function(){
        							var imagUrl = this.dsApiDetail.getColumn(0, "certificationImageUrls");
        							if(!take.isEmpty(imagUrl))
        							{
        								var imgArry = imagUrl.substring(1, imagUrl.length-1).split(", ");
        								this.imgGds.set_image("url('" + imgArry[0] + "')");

        							}
        					});
        			}
        			else
        			{
        				take.alert(this, "", "검색된 인증정보가 없습니다.");
        			}
        			*/
        			if(this.dsApiMain.rowcount == 0)
        			{
        				take.alert(this, "", "검색된 인증정보가 없습니다.");
        			}
        		 });


        };

        /* 차수/인증분야 변경 이벤트 */
        this.fn_odrOnChange = function()
        {

        }

        /* 품목콤보 세팅 */
        this.fnSetGdsCombo = function()
        {
        	// 품목 조회
        	this.dsGdsCd.clearData();
        	take.tranSelect(this, "SearchGdsCombo", "safety.selectOdrGdsCombo", "", "dsGdsCd", "ODR_ID=" + this.cmbOdr.value,
        		function()
        		{
        		}
        	);

        	// 세부품목 조회
        	this.dsDetailGdsCd.clearData();
        	take.tranSelect(this, "SearchDetailGdsCombo", "safety.selectOdrDetailGdsCombo", "", "dsDetailGdsCd", "ODR_ID=" + this.cmbOdr.value,
        		function()
        		{
        		}
        	);
        }

        /* 품목콤보 변경 시 세부품목 필터 처리 */
        this.cmbGdsCd_onitemchanged = function(obj,e)
        {
        	this.dsDetailGdsCd.filter("GDS_CD == '" + e.postvalue + "'");
        };

        /* 인증정보 검색결과 onrowposchanged */
        this.dsApiMain_onrowposchanged = function(obj,e)
        {
        	if(this.dsApiMain.rowcount == 0) return false;
        	// 품목 세팅
        	var sClertFldCd = this.dsOdrList.getColumn(this.dsOdrList.rowposition, "CERT_FLD_CD");
        	var sGdsNm = this.dsApiMain.getColumn(e.newrow, "productName");

        	var sCategory = this.dsApiMain.getColumn(e.newrow, "categoryName");
        	var categoryArry = sCategory.split(">");
        	var sCodeId = gFnGetCodeId(this.dsGdsCd, categoryArry[1]);
        	this.cmbGdsCd.set_value(sCodeId);
        	this.dsDetailGdsCd.filter("GDS_CD == '" + sCodeId + "'");

        	if(sClertFldCd != "03")	// 어린이제품은 세부품목은 직접 선택
        	{
        		// 세부품목 선택
        		sCodeId = gFnGetCodeId(this.dsDetailGdsCd, categoryArry[2]);
        		this.cmbDetailGdsCd.set_value(sCodeId);
        	}


        	var sParam = "apiType=detail conditionKey=certNum conditionValue=" + this.dsApiMain.getColumn(e.newrow, "certNum");

        	take.transaction(this, "SearchDetail", "SVC_LOC::doore/openApi.do", "","dsApiDetail=dsApiDetail dsApiSim=dsApiSim", sParam, function(){
        				trace(this.dsApiDetail.saveXML());
        				var imagUrl = this.dsApiDetail.getColumn(0, "certificationImageUrls");
        				if(!take.isEmpty(imagUrl))
        				{
        					var imgArry = imagUrl.substring(1, imagUrl.length-1).split(", ");
        					this.imgGds.set_image("url('" + imgArry[0] + "')");

        				}
        		});
        };

        /* 차수/인증분야 변경 이벤트 */
        this.DivInfo_cmbOdr_onitemchanged = function(obj,e)
        {
        	var sOdrId = '';

        	if(typeof(e) == "undefined") sOdrId = this.dsOdrList.getColumn(this.dsOdrList.rowposition);
        	else sOdrId = e.postvalue;

        	// 진행상태 조회
        	gFn_getDbValue(this, function(rtnValue) {

        		this.cmbProgrsCd.set_value(rtnValue.resultData);
        		this.fnSetGdsCombo();
        		}, "safety.selectOdrProgrs", sOdrId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.CM010P03_ontimer,this);
            this.cmbOdr.addEventHandler("onitemchanged",this.DivInfo_cmbOdr_onitemchanged,this);
            this.Button23.addEventHandler("onclick",this.fnSearch,this);
            this.cmbProgrsCd.addEventHandler("onitemchanged",this.cmbArplnDivCd_onitemchanged,this);
            this.cmbGdsCd.addEventHandler("onitemchanged",this.cmbGdsCd_onitemchanged,this);
            this.staProgDetailT00_00_01.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.staProgDetailT00_00.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.gridMain.addEventHandler("oncelldblclick",this.divDetail_gridMain_oncelldblclick,this);
            this.staProgDetailT00_00_00.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.staProgDetailT00_00_00_00.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.staProgDetailT00_00_00_00_00.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.staProgDetailT00_00_00_00_00_00.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.gridSim.addEventHandler("oncelldblclick",this.divDetail_gridMain_oncelldblclick,this);
            this.staProgDetailT00_00_00_00_00_00_00.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.dsApiMain.addEventHandler("onrowposchanged",this.dsApiMain_onrowposchanged,this);
        };
        this.loadIncludeScript("PL050P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
