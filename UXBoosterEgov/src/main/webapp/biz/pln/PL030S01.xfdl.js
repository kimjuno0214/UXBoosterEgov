(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL020S01");
            this.set_titletext("시험관리-시험");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REGN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_UNPR\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_FEE\" type=\"STRING\" size=\"256\"/><Column id=\"JGMT_RESULT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JGMT_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEST_NM\">총 납</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"CRTR_UNPR\">14400</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"JGMT_RESULT\"/><Col id=\"TEST_DIV_CD\">공통</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">총 카드뮴</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"CRTR_UNPR\">14400</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"JGMT_RESULT\"/><Col id=\"TEST_DIV_CD\">공통</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">프탈레이트계 가소제</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"CRTR_UNPR\">78000</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"JGMT_RESULT\"/><Col id=\"TEST_DIV_CD\">공통</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">표시사항</Col><Col id=\"CRTR_UNPR\">3000</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"TEST_DIV_CD\">공통</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">공기실의 용적</Col><Col id=\"CRTR_UNPR\">30000</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"TEST_DIV_CD\">개별</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">두께(mm)</Col><Col id=\"CRTR_UNPR\">13000</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"TEST_DIV_CD\">개별</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">인장절단하중(kg)</Col><Col id=\"CRTR_UNPR\">15000</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"TEST_DIV_CD\">개별</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">내압기밀성</Col><Col id=\"CRTR_UNPR\">15000</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"TEST_DIV_CD\">개별</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">공기마개</Col><Col id=\"CRTR_UNPR\">15000</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"TEST_DIV_CD\">개별</Col><Col id=\"REGN_CNT\">0</Col></Row><Row><Col id=\"TEST_NM\">로프부착부분의 인장강도</Col><Col id=\"CRTR_UNPR\">15000</Col><Col id=\"TEST_FEE\">적합</Col><Col id=\"JGMT_RESULT_CD\">적합</Col><Col id=\"TEST_DIV_CD\">개별</Col><Col id=\"REGN_CNT\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPart", this);
            obj._setContents("<ColumnInfo><Column id=\"REGN_SN\" type=\"STRING\" size=\"256\"/><Column id=\"REGN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSm", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022-정기01-01-001</Col><Col id=\"Column2\">부적합</Col><Col id=\"Column1\">어린이 물총</Col><Col id=\"Column3\">최중결함</Col><Col id=\"Column4\"/><Col id=\"Column6\">20220429</Col><Col id=\"Column8\">SK22-00059K</Col><Col id=\"Column10\">Y</Col><Col id=\"Column5\">KCL</Col><Col id=\"Column7\">3</Col><Col id=\"Column9\">1000000</Col><Col id=\"Column11\">어린이용 물놀이기구</Col><Col id=\"Column12\">공기주입 물놀이기구</Col><Col id=\"Column13\">1</Col><Col id=\"Column14\">1</Col></Row><Row><Col id=\"Column0\">2022-정기01-01-002</Col><Col id=\"Column2\">적합</Col><Col id=\"Column1\">어린이 물총</Col><Col id=\"Column3\"/><Col id=\"Column4\"/><Col id=\"Column5\">KTC</Col><Col id=\"Column6\">20220429</Col><Col id=\"Column7\">2</Col><Col id=\"Column8\">SK22-00060K</Col><Col id=\"Column9\">1000000</Col><Col id=\"Column11\">어린이용 물놀이기구</Col><Col id=\"Column13\">0</Col><Col id=\"Column14\">0</Col></Row><Row><Col id=\"Column0\">2022-정기01-01-003</Col><Col id=\"Column2\">적합</Col><Col id=\"Column1\">어린이 물총</Col><Col id=\"Column3\"/><Col id=\"Column6\">20220429</Col><Col id=\"Column7\">2</Col><Col id=\"Column8\">SK22-00061K</Col><Col id=\"Column4\"/><Col id=\"Column5\">KATRI</Col><Col id=\"Column9\">1000000</Col><Col id=\"Column11\">어린이용 물놀이기구</Col><Col id=\"Column14\">0</Col><Col id=\"Column13\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTd", this);
            obj._setContents("<ColumnInfo><Column id=\"TEST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CRTR_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PRPERT_JGMT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STD\" type=\"FLOAT\" size=\"256\"/><Column id=\"MEAS_VALUE\" type=\"FLOAT\" size=\"256\"/><Column id=\"JGMT_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"DIV\" type=\"STRING\" size=\"256\"/><Column id=\"DIV1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEST_NM\">DEHP</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"CRTR_VALUE\">총합 0.1% 이하</Col><Col id=\"MEAS_VALUE\"/><Col id=\"JGMT_RESULT\"/><Col id=\"DIV\">프</Col><Col id=\"STD\">0.1</Col></Row><Row><Col id=\"TEST_NM\">DBP</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"CRTR_VALUE\">총합 0.1% 이하</Col><Col id=\"MEAS_VALUE\"/><Col id=\"JGMT_RESULT\"/><Col id=\"DIV\">프</Col><Col id=\"STD\">0.1</Col></Row><Row><Col id=\"TEST_NM\">BBP</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"CRTR_VALUE\">총합 0.1% 이하</Col><Col id=\"MEAS_VALUE\"/><Col id=\"JGMT_RESULT\"/><Col id=\"DIV\">프</Col><Col id=\"STD\">0.1</Col></Row><Row><Col id=\"TEST_NM\">DINP</Col><Col id=\"CRTR_VALUE\">총합 0.1% 이하</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"JGMT_RESULT\"/><Col id=\"DIV\">프</Col><Col id=\"STD\">0.1</Col></Row><Row><Col id=\"TEST_NM\">DIDP</Col><Col id=\"CRTR_VALUE\">총합 0.1% 이하</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"JGMT_RESULT\"/><Col id=\"DIV\">프</Col><Col id=\"STD\">0.1</Col></Row><Row><Col id=\"TEST_NM\">DnOP</Col><Col id=\"CRTR_VALUE\">총합 0.1% 이하</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"JGMT_RESULT\"/><Col id=\"DIV\">프</Col><Col id=\"STD\">0.1</Col></Row><Row><Col id=\"TEST_NM\">DIBP</Col><Col id=\"CRTR_VALUE\">총합 0.1% 이하</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"JGMT_RESULT\"/><Col id=\"DIV\">프</Col><Col id=\"STD\">0.1</Col></Row><Row><Col id=\"TEST_NM\">금속 기질 재료</Col><Col id=\"CRTR_VALUE\">100 mg/kg 이하</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"DIV\">납</Col><Col id=\"DIV1\">금속</Col><Col id=\"STD\">100</Col></Row><Row><Col id=\"TEST_NM\">고분자 기질 재료</Col><Col id=\"CRTR_VALUE\">100 mg/kg 이하</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"DIV\">납</Col><Col id=\"DIV1\"/><Col id=\"STD\">100</Col></Row><Row><Col id=\"TEST_NM\">페인트나 유사 코팅</Col><Col id=\"CRTR_VALUE\">90 mg/kg 이하</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"DIV\">납</Col><Col id=\"DIV1\"/><Col id=\"STD\">90</Col></Row><Row><Col id=\"TEST_NM\">기타 재료</Col><Col id=\"CRTR_VALUE\">100 mg/kg 이하</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"DIV\">납</Col><Col id=\"DIV1\"/><Col id=\"STD\">100</Col></Row><Row><Col id=\"TEST_NM\">모델명</Col><Col id=\"DIV\">표</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col></Row><Row><Col id=\"TEST_NM\">제조년월</Col><Col id=\"DIV\">표</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col></Row><Row><Col id=\"TEST_NM\">제조자명</Col><Col id=\"DIV\">표</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col></Row><Row><Col id=\"TEST_NM\">수입자명</Col><Col id=\"DIV\">표</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col></Row><Row><Col id=\"TEST_NM\">주소 및 전화번호</Col><Col id=\"DIV\">표</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col></Row><Row><Col id=\"TEST_NM\">제조국명</Col><Col id=\"DIV\">표</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col></Row><Row><Col id=\"TEST_NM\">사용연력 및 체중범위</Col><Col id=\"DIV\">표</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col></Row><Row><Col id=\"TEST_NM\">사용상 주의사항</Col><Col id=\"DIV\">표</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col></Row><Row><Col id=\"TEST_NM\">이상유무</Col><Col id=\"PRPERT_JGMT_CD\">적합</Col><Col id=\"DIV\">나</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">적합</Col><Col id=\"NAME\">적합</Col></Row><Row><Col id=\"CODE\">부적합</Col><Col id=\"NAME\">부적합</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">사용상 주의사항 1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">사용상 주의사항 2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">사용상 주의사항 3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"NAME\">사용상 주의사항 4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"NAME\">사용상 주의사항 5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSpliter","0","350",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_splitter2");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00_00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divTop","0","10",null,null,"0","btnSpliter:10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00","0","0","255","21",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("시료 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divTop.addChild(obj.name, obj);

            obj = new Grid("grdProgList00","0","staProgDetailT00:5",null,null,"510","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsSm");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"129\"/><Column size=\"129\"/><Column size=\"129\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"220\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시료번호\"/><Cell col=\"1\" text=\"품목\"/><Cell col=\"2\" text=\"세부품목\"/><Cell col=\"3\" text=\"제품명\"/><Cell col=\"4\" text=\"적부판정\"/><Cell col=\"5\" text=\"최종판정&#13;&#10;(결함등급)\"/><Cell col=\"6\" text=\"최종판정결과(메모)\"/><Cell col=\"7\" text=\"성적서번호\"/><Cell col=\"8\" text=\"총시험비\" displaytype=\"normal\"/><Cell col=\"9\" text=\"동일성&#13;&#10;확인\" displaytype=\"normal\"/><Cell col=\"10\" text=\"불법의심&#13;&#10;여부\" displaytype=\"normal\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column11\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column12\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:Column1\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:Column3\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:Column4\" textAlign=\"left\" wordWrap=\"char\" edittype=\"textarea\" tooltiptext=\"bind:Column4\"/><Cell col=\"7\" text=\"bind:Column8\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:Column9\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:Column13\" textAlign=\"right\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"10\" text=\"bind:Column14\" textAlign=\"right\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00_00",null,"-5","255","26","245",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_title02");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divComFile",null,"-5","500",null,"0","-5",null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("frm::com/comFileSYS_copy0.xfdl");
            obj.getSetter("takefile").set("{\"isSingle\":false,\"isVisibleTypeCd\":false,\"addDelBtnEnable\":true,\"saveBtnEnable\":false,\"atchFileTypeCd\":\"04\"}");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("DivButtom","0","btnSpliter:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00","0","0","305","21",null,null,null,null,null,null,this.DivButtom.form);
            obj.set_taborder("0");
            obj.set_text("시험항목");
            obj.set_cssclass("sta_WF_title02");
            this.DivButtom.addChild(obj.name, obj);

            obj = new Grid("grdProgList00_00","0","staProgDetailT00_00:5","550",null,null,"0",null,null,null,null,this.DivButtom.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTest");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"180\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"시험항목\"/><Cell col=\"2\" text=\"부위수\"/><Cell col=\"3\" text=\"기준단가\"/><Cell col=\"4\" text=\"시험비\"/></Band><Band id=\"body\"><Cell text=\"bind:TEST_DIV_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TEST_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:REGN_CNT\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"3\" text=\"bind:CRTR_UNPR\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" textAlign=\"right\" displaytype=\"number\" text=\"bind:TEST_FEE\"/></Band></Format></Formats>");
            this.DivButtom.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00","grdProgList00_00:10","0","305","21",null,null,null,null,null,null,this.DivButtom.form);
            obj.set_taborder("2");
            obj.set_text("부위");
            obj.set_cssclass("sta_WF_title02");
            this.DivButtom.addChild(obj.name, obj);

            obj = new Grid("grdProgList00_00_00","grdProgList00_00:10","26","240",null,null,"0",null,null,null,null,this.DivButtom.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPart");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부위\"/><Cell col=\"1\" text=\"부위명\"/></Band><Band id=\"body\"><Cell text=\"bind:REGN_SN\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:REGN_NM\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.DivButtom.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00_00","grdProgList00_00_00:10","0","305","21",null,null,null,null,null,null,this.DivButtom.form);
            obj.set_taborder("4");
            obj.set_text("시험");
            obj.set_cssclass("sta_WF_title02");
            this.DivButtom.addChild(obj.name, obj);

            obj = new Grid("grdProgList00_00_00_00","grdProgList00_00_00:10","26",null,null,"0","0",null,null,null,null,this.DivButtom.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTd");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"350\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"시험명\"/><Cell col=\"1\" text=\"기준값\"/><Cell col=\"2\" text=\"판정\"/><Cell col=\"3\" text=\"측정값\"/><Cell col=\"4\" text=\"시험항목 판정결과\"/></Band><Band id=\"body\"><Cell text=\"bind:TEST_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CRTR_VALUE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRPERT_JGMT_CD\" textAlign=\"center\" edittype=\"combo\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:MEAS_VALUE\" textAlign=\"center\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:JGMT_RESULT\" textAlign=\"left\" edittype=\"expr:TEST_NM == &apos;사용상 주의사항&apos;?&apos;combo&apos;:&apos;normal&apos;\" textareaacceptsenter=\"true\" tooltiptext=\"bind:JGMT_RESULT\" verticalAlign=\"top\" combodataset=\"dsYn00\" combocodecol=\"CODE\" combodatacol=\"NAME\" displaytype=\"expr:TEST_NM == &apos;사용상 주의사항&apos;?&apos;combotext&apos;:&apos;normal&apos;\"/></Band></Format></Formats>");
            this.DivButtom.addChild(obj.name, obj);

            obj = new Button("Button18_00",null,"0","110","21","0",null,null,null,null,null,this.DivButtom.form);
            obj.set_taborder("6");
            obj.set_text("  시험 선택  ");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.DivButtom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form.divComFile
            obj = new Layout("default","",0,0,this.divTop.form.divComFile.form,function(p){});
            this.divTop.form.divComFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivButtom.form
            obj = new Layout("default","",0,0,this.DivButtom.form,function(p){});
            this.DivButtom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comFileSYS_copy0.xfdl");
        };
        
        // User Script
        this.registerScript("PL030S01.xfdl", function() {
        /**
        *  다국어관리
        *
        *  @MenuPath    시스템공통 > 다국어관리 > 다국어관리
        *  @FileName    OM010P06.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.08.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.11.17      이동건             최초 생성
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
        this.OM010P05_onload = function(obj,e)
        {
        	UXBooster.afnUseSpliter(this, this.btnSpliter);

        	this.dsTd.set_filterstr("TEST_NM == '999'");

        }


        this.dsTest_oncolumnchanged = function(obj,e)
        {

        	// 부위수 변경 처리
        	if(e.columnid == "REGN_CNT")
        	{
        		var nPartCnt = e.newvalue;
        		// 시험비 계산
        		var calcFee = this.dsTest.getColumn(e.row, "CRTR_UNPR") * nPartCnt;
        		this.dsTest.setColumn(e.row, "TEST_FEE", calcFee);

        		// 부위 처리
        		var nPartDsCnt = this.dsPart.rowcount;

        		// 입력부위수가 등록 부위수보다 큰 경우
        		if(nPartCnt > nPartDsCnt)
        		{
        			for(var i = 0; i < (nPartCnt - nPartDsCnt); i++)
        			{
        				var nRow = this.dsPart.addRow();
        				var nIdx = nPartDsCnt + i + 1;
        				this.dsPart.setColumn(nRow, "REGN_SN", nIdx);
        			}
        		}
        		// 입력부위수가 등록 부위수보다 작은 경우
        		if(nPartCnt < nPartDsCnt)
        		{
        			for(var i = (nPartDsCnt - 1); i >= nPartCnt; i--)
        			{
        				this.dsPart.deleteRow(i);
        			}
        		}
        	}
        };

        this.dsTest_onrowposchanged = function(obj,e)
        {

        	var nRow = this.dsTest.rowposition;
        	this.dsTd.set_filterstr("TEST_NM == '999'");
        	this.dsPart.clearData();

        };

        this.dsPart_onrowposchanged = function(obj,e)
        {
        	var nRow = this.dsTest.rowposition;

        	// 총납, 캬드뮴
        	if(nRow == "0" || nRow == "1")
        	{
        		this.dsTd.set_filterstr("DIV == '납'");
        	}
        	// 프탈레이트계 가소제
        	else if(nRow == "2")
        	{
        		this.dsTd.set_filterstr("DIV == '프'");
        	}
        	// 표시사항
        	else if(nRow == "3")
        	{
        		this.dsTd.set_filterstr("DIV == '표'");

        	}
        	else
        	{
        		this.dsTd.set_filterstr("DIV == '나'");
        	}
        };

        this.divDetail_DivRight_Button18_onclick = function(obj,e)
        {
        	var sTestNm = this.dsTest.getColumn(this.dsTest.rowposition, "TEST_NM");
        	gFnTrace(sTestNm);
        	var arrParam = {
        				sTestNm : sTestNm
        				};

        	take.openPopup(this, "addMultiLanguage", "biz::pln/PL010P09.xfdl", arrParam, "", function()

        		{
        			if(this.dsTest.getColumn(this.dsTest.rowposition, "TEST_NM") == "총 납"  || this.dsTest.getColumn(this.dsTest.rowposition, "TEST_NM") == "총 카드뮴") this.dsTd.set_filterstr("DIV1 == '금속'");
        		}

        	);
        };

        this.dsList1_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "MEAS_VALUE")
        	{
        		if(this.dsTd.getColumn(e.row, "TEST_NM") == "금속 기질 재료")
        		{
        			if(this.dsTd.getColumn(e.row, "STD") <= e.newvalue)
        			{
        				var sPart = this.dsPart.getColumn(this.dsPart.rowposition, "REGN_NM");
        				var str8 = "ㅇ 총 납 기준치 1.7 배 초과" + String.fromCharCode(10) + "  - 부위: " + sPart + String.fromCharCode(10) + "  - 측정값: " + e.newvalue + "mg/kg" + String.fromCharCode(10) + "  - 기준값: " + this.dsTd.getColumn(e.row, "STD") + " mg/kg";
        				this.dsTd.setColumn(e.row, "JGMT_RESULT", str8);
        				this.dsTd.setColumn(e.row, "PRPERT_JGMT_CD", "부적합");
        			}
        		}
        		gFnTrace(this.dsTd.getColumn(e.row, "TEST_NM"));
        		if(this.dsTd.getColumn(e.row, "TEST_NM") == "DEHP")
        		{

        			var tot = this.dsTd.getSum( "MEAS_VALUE" );

        			if(tot > 0.1)
        			{
        				var sPart = this.dsPart.getColumn(this.dsPart.rowposition, "REGN_NM");
        				var str1 = "ㅇ 프탈레이트계  가소제  기준치 185.5 배  초과" + String.fromCharCode(10) + "  - 부위: " + sPart +  String.fromCharCode(10) + "  - 측정값: " + e.newvalue + "%" + String.fromCharCode(10) + "  - 기준값: " + this.dsTd.getColumn(e.row, "STD") + " %";
        				this.dsTd.setColumn(0, "JGMT_RESULT", str1);

        				for(var i = 0; i < this.dsTd.rowcount; i++)
        				{
        					this.dsTd.setColumn(i, "PRPERT_JGMT_CD", "부적합");
        				}
        			}
        			else
        			{
        				this.dsTd.setColumn(0, "JGMT_RESULT", "");

        				for(var i = 0; i < this.dsTd.rowcount; i++)
        				{
        					this.dsTd.setColumn(i, "PRPERT_JGMT_CD", "적합");
        				}
        			}
        		}
        	}
        	else if(e.columnid == "PRPERT_JGMT_CD" && this.dsTest.getColumn(this.dsTest.rowposition, "TEST_NM") == "표시사항")
        	{
        		if(this.dsTd.getColumn(e.row, "TEST_NM") != "사용상 주의사항")
        		{
        			if(e.newvalue == "적합") this.dsTd.setColumn(e.row, "JGMT_RESULT", "");
        			if(e.newvalue == "부적합") this.dsTd.setColumn(e.row, "JGMT_RESULT", this.dsTd.getColumn(e.row, "TEST_NM") + " 누락");
        		}
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OM010P05_onload,this);
            this.btnSpliter.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divTop.form.grdProgList00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.DivButtom.form.grdProgList00_00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.DivButtom.form.grdProgList00_00_00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.DivButtom.form.grdProgList00_00_00_00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.DivButtom.form.Button18_00.addEventHandler("onclick",this.divDetail_DivRight_Button18_onclick,this);
            this.dsTest.addEventHandler("oncolumnchanged",this.dsTest_oncolumnchanged,this);
            this.dsTest.addEventHandler("onrowposchanged",this.dsTest_onrowposchanged,this);
            this.dsPart.addEventHandler("onrowposchanged",this.dsPart_onrowposchanged,this);
            this.dsSm.addEventHandler("oncolumnchanged",this.dsSm_oncolumnchanged,this);
            this.dsTd.addEventHandler("oncolumnchanged",this.dsList1_oncolumnchanged,this);
        };
        this.loadIncludeScript("PL030S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
