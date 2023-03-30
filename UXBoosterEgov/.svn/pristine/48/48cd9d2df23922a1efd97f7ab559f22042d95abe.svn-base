(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OM010P01");
            this.set_titletext("오더 작성");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(757,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrderMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STYLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MATR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MATR_INPUT_EDT\" type=\"STRING\" size=\"256\"/><Column id=\"MATR_INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_KNIT_QC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_PROC_QC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_PLANT_KNIT_QC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_PLANT_PROC_QC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_KNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_PROC\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_ACCT_QC\" type=\"STRING\" size=\"256\"/><Column id=\"CORP_LOAD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_LOAD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DELI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"BRAND_ACT_DELI\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_LOAD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LOAD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELI_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORDER_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrderDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SERL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STYLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_95\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_100\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_105\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_110\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_115\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrderAddInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OA_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"OA_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileNo", this);
            obj._setContents("<ColumnInfo><Column id=\"MAX_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrderAddInfo1", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OA_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"OA_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrderAddInfo3", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OA_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"OA_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrderAddInfo2", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OA_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"OA_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddInfoType1", this);
            obj._setContents("<ColumnInfo><Column id=\"OA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OA_TYPE_NM\">시험 분석용</Col><Col id=\"OA_TYPE\">01</Col></Row><Row><Col id=\"OA_TYPE_NM\">공장초두</Col><Col id=\"OA_TYPE\">02</Col></Row><Row><Col id=\"OA_TYPE_NM\">수납</Col><Col id=\"OA_TYPE\">03</Col></Row><Row><Col id=\"OA_TYPE_NM\">완제품 테스트</Col><Col id=\"OA_TYPE\">04</Col></Row><Row><Col id=\"OA_TYPE\">05</Col><Col id=\"OA_TYPE_NM\">촬영용/모델용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddInfoType2", this);
            obj._setContents("<ColumnInfo><Column id=\"OA_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OA_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OA_TYPE_NM\">원사선적</Col><Col id=\"OA_TYPE\">01</Col></Row><Row><Col id=\"OA_TYPE_NM\">스판사</Col><Col id=\"OA_TYPE\">02</Col></Row><Row><Col id=\"OA_TYPE_NM\">와펜</Col><Col id=\"OA_TYPE\">03</Col></Row><Row><Col id=\"OA_TYPE_NM\">라벨/택류</Col><Col id=\"OA_TYPE\">04</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrderMeasurement", this);
            obj._setContents("<ColumnInfo><Column id=\"STYLE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SERL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ALPHABET\" type=\"STRING\" size=\"256\"/><Column id=\"SM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SM_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SM_95\" type=\"STRING\" size=\"256\"/><Column id=\"SM_100\" type=\"STRING\" size=\"256\"/><Column id=\"SM_105\" type=\"STRING\" size=\"256\"/><Column id=\"SM_110\" type=\"STRING\" size=\"256\"/><Column id=\"SM_115\" type=\"STRING\" size=\"256\"/><Column id=\"SM_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SM_TYPE\">LENGETH</Col><Col id=\"SM_95\">66</Col><Col id=\"SM_100\">68</Col><Col id=\"SM_105\">70</Col><Col id=\"SM_110\">72</Col><Col id=\"SM_115\">74</Col><Col id=\"SM_REMARK\">옆목점 ~ 밑단끝</Col><Col id=\"SM_TYPE_NM\">총기장</Col><Col id=\"ALPHABET\">A</Col></Row><Row><Col id=\"SM_TYPE\">SOULDER</Col><Col id=\"SM_95\">43.5</Col><Col id=\"SM_100\">45</Col><Col id=\"SM_105\">46.5</Col><Col id=\"SM_110\">48</Col><Col id=\"SM_115\">49.5</Col><Col id=\"SM_REMARK\">끝 ~ 끝</Col><Col id=\"SM_TYPE_NM\">어깨넓이</Col><Col id=\"ALPHABET\">B</Col></Row><Row><Col id=\"SM_TYPE\">CHEST</Col><Col id=\"SM_95\">50.5</Col><Col id=\"SM_100\">53</Col><Col id=\"SM_105\">55.5</Col><Col id=\"SM_110\">58</Col><Col id=\"SM_115\">60.5</Col><Col id=\"SM_REMARK\">겨드랑이에서 1cm 아래</Col><Col id=\"SM_TYPE_NM\">가슴둘레</Col><Col id=\"ALPHABET\">C</Col></Row><Row><Col id=\"SM_TYPE\">WAIST</Col><Col id=\"SM_REMARK\">옆목에서 38cm 아래</Col><Col id=\"SM_TYPE_NM\">허리</Col><Col id=\"ALPHABET\">D</Col></Row><Row><Col id=\"SM_TYPE\">B/T WIDTH</Col><Col id=\"SM_95\">40</Col><Col id=\"SM_100\">42</Col><Col id=\"SM_105\">44</Col><Col id=\"SM_110\">46</Col><Col id=\"SM_115\">48</Col><Col id=\"SM_REMARK\">밑단 끝 ~ 끝</Col><Col id=\"SM_TYPE_NM\">밑단넓이</Col><Col id=\"ALPHABET\">E</Col></Row><Row><Col id=\"SM_TYPE\">ARMHOLE</Col><Col id=\"SM_TYPE_NM\">A.H</Col><Col id=\"SM_95\">22</Col><Col id=\"SM_100\">23</Col><Col id=\"SM_105\">24</Col><Col id=\"SM_110\">25</Col><Col id=\"SM_115\">26</Col><Col id=\"SM_REMARK\">끝 ~ 끝</Col><Col id=\"ALPHABET\">F</Col></Row><Row><Col id=\"SM_TYPE\">S/LENGTH</Col><Col id=\"SM_TYPE_NM\">소매장</Col><Col id=\"SM_95\">60</Col><Col id=\"SM_100\">61</Col><Col id=\"SM_105\">62</Col><Col id=\"SM_110\">63</Col><Col id=\"SM_115\">64</Col><Col id=\"SM_REMARK\">어깨점 ~ 소매끝</Col><Col id=\"ALPHABET\">G</Col></Row><Row><Col id=\"SM_TYPE\">UPPER ARM</Col><Col id=\"SM_TYPE_NM\">소매통</Col><Col id=\"SM_95\">18</Col><Col id=\"SM_100\">18.5</Col><Col id=\"SM_105\">19</Col><Col id=\"SM_110\">20</Col><Col id=\"SM_115\">21</Col><Col id=\"SM_REMARK\">암홀 십자선 1cm 아래</Col><Col id=\"ALPHABET\">H</Col></Row><Row><Col id=\"SM_TYPE\">M/UPPER ARM</Col><Col id=\"SM_TYPE_NM\">소매중통</Col><Col id=\"SM_100\">15.2</Col><Col id=\"SM_REMARK\">소매끝에서 15cm 위</Col><Col id=\"ALPHABET\">I</Col></Row><Row><Col id=\"SM_TYPE\">CUFF OPENING</Col><Col id=\"SM_TYPE_NM\">소매부리</Col><Col id=\"SM_95\">8.5</Col><Col id=\"SM_100\">9</Col><Col id=\"SM_105\">9.5</Col><Col id=\"SM_110\">10</Col><Col id=\"SM_115\">10.5</Col><Col id=\"SM_REMARK\">소매단 끝 ~ 1cm 위</Col><Col id=\"ALPHABET\">J</Col></Row><Row><Col id=\"SM_TYPE\">CUFF RIB</Col><Col id=\"SM_TYPE_NM\">소매단</Col><Col id=\"SM_95\">5.5</Col><Col id=\"SM_100\">5.5</Col><Col id=\"SM_105\">5.5</Col><Col id=\"SM_110\">5.5</Col><Col id=\"SM_115\">5.5</Col><Col id=\"SM_REMARK\">소매단 폭</Col><Col id=\"ALPHABET\">K</Col></Row><Row><Col id=\"SM_TYPE\">B/T RIB</Col><Col id=\"SM_TYPE_NM\">밑단</Col><Col id=\"SM_95\">5.5</Col><Col id=\"SM_100\">5.5</Col><Col id=\"SM_105\">5.5</Col><Col id=\"SM_110\">5.5</Col><Col id=\"SM_115\">5.5</Col><Col id=\"SM_REMARK\">밑단 폭</Col><Col id=\"ALPHABET\">L</Col></Row><Row><Col id=\"SM_TYPE\">NECK ROUND</Col><Col id=\"SM_TYPE_NM\">목넓이</Col><Col id=\"SM_95\">18.5</Col><Col id=\"SM_100\">19</Col><Col id=\"SM_105\">19.5</Col><Col id=\"SM_110\">20</Col><Col id=\"SM_115\">20.5</Col><Col id=\"SM_REMARK\">사시 ~ 사시</Col><Col id=\"ALPHABET\">M</Col></Row><Row><Col id=\"SM_TYPE\">NECK DROP</Col><Col id=\"SM_TYPE_NM\">목깊이</Col><Col id=\"SM_95\">8.5</Col><Col id=\"SM_100\">9</Col><Col id=\"SM_105\">9.5</Col><Col id=\"SM_110\">10</Col><Col id=\"SM_115\">10.5</Col><Col id=\"SM_REMARK\">사시 ~ 사시</Col><Col id=\"ALPHABET\">N</Col></Row><Row><Col id=\"SM_TYPE_NM\">뒷목깊이</Col><Col id=\"SM_REMARK\">사시 ~ 사시</Col><Col id=\"ALPHABET\">O</Col></Row><Row><Col id=\"SM_TYPE\">NECK RIB</Col><Col id=\"SM_TYPE_NM\">애리단</Col><Col id=\"SM_95\">5.5</Col><Col id=\"SM_100\">5.5</Col><Col id=\"SM_105\">5.5</Col><Col id=\"SM_110\">5.5</Col><Col id=\"SM_115\">5.5</Col><Col id=\"SM_REMARK\">애리단 폭</Col><Col id=\"ALPHABET\">P</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAddInfo3","474","347","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("부자재");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Div("divStyle","10","374",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","10","0","280","30",null,null,null,null,null,null,this.divStyle.form);
            obj.set_taborder("0");
            obj.set_text("Style");
            obj.set_cssclass("sta_WF_title02");
            this.divStyle.addChild(obj.name, obj);

            obj = new Grid("grdStyle","10","Static25:0",null,null,"10","10",null,null,null,null,this.divStyle.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOrderDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"35\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"S/N\"/><Cell col=\"1\" rowspan=\"2\" text=\"C/#\"/><Cell col=\"2\" colspan=\"3\" text=\"COLOR\"/><Cell col=\"5\" rowspan=\"2\" text=\"95\"/><Cell col=\"6\" rowspan=\"2\" text=\"100\"/><Cell col=\"7\" rowspan=\"2\" text=\"105\"/><Cell col=\"8\" rowspan=\"2\" text=\"110\"/><Cell col=\"9\" rowspan=\"2\" text=\"115\"/><Cell col=\"10\" rowspan=\"2\" text=\"TOTAL\"/><Cell row=\"1\" col=\"2\" text=\"G\"/><Cell row=\"1\" col=\"3\" text=\"C1\"/><Cell row=\"1\" col=\"4\" text=\"C2\"/></Band><Band id=\"body\"><Cell text=\"bind:STYLE_NO\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:COLOR_NO\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"2\" edittype=\"text\"/><Cell col=\"3\" edittype=\"text\"/><Cell col=\"4\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:QTY_95\" edittype=\"mask\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:QTY_100\" edittype=\"mask\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" text=\"bind:QTY_105\" edittype=\"mask\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"8\" text=\"bind:QTY_110\" edittype=\"mask\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"9\" text=\"bind:QTY_115\" edittype=\"mask\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"10\" edittype=\"mask\" text=\"expr:parseInt((QTY_95==&apos;&apos;) ? 0 : QTY_95) +parseInt((QTY_100==&apos;&apos;)? 0 : QTY_100) +parseInt((QTY_105==&apos;&apos;) ? 0 : QTY_105)+parseInt((QTY_110==&apos;&apos;) ? 0 : QTY_110)+parseInt((QTY_115==&apos;&apos;) ? 0 : QTY_115)\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/></Band></Format></Formats>");
            this.divStyle.addChild(obj.name, obj);

            obj = new Button("btnDetailAdd",null,"4","46","23","61",null,null,null,null,null,this.divStyle.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            this.divStyle.addChild(obj.name, obj);

            obj = new Button("btnDetailDel",null,"4","46","23","10",null,null,null,null,null,this.divStyle.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.divStyle.addChild(obj.name, obj);

            obj = new Div("divOrder","10","10",null,null,"10","divStyle:35",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","10","0","280","30",null,null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("0");
            obj.set_text("오더작성");
            obj.set_cssclass("sta_WF_title02");
            this.divOrder.addChild(obj.name, obj);

            obj = new Button("btnPreOrder",null,"4","108","23","85",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("1");
            obj.set_text("이전오더불러오기");
            obj.set_cssclass("btn_WF_basic01");
            this.divOrder.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"4","70","23","10",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staDateT","10","Static18:0","118","31",null,null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("3");
            obj.set_text("DATE");
            obj.set_cssclass("sta_WF_th01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staOrderT","10","60","118","31",null,null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("4");
            obj.set_text("오더명");
            obj.set_cssclass("sta_WF_th01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staBrandNmT","10","90","118","31",null,null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("5");
            obj.set_text("BUYER/BRAND");
            obj.set_cssclass("sta_WF_th01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staBrandNm","127","90",null,"31","10",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staOrder","127","60",null,"31","10",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staDate","127","30",null,"31","10",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staRemarkT","10","240","118",null,null,"10",null,null,null,null,this.divOrder.form);
            obj.set_taborder("9");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_th01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staRemark","127","240",null,null,"10","10",null,null,null,null,this.divOrder.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staDeliDtT","10","120","118","31",null,null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("11");
            obj.set_text("납기일");
            obj.set_cssclass("sta_WF_th01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staDeliDt","127","120",null,"31","10",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staGG","127","150",null,"31","10",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staGGT","10","150","118","31",null,null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("14");
            obj.set_text("GG");
            obj.set_cssclass("sta_WF_th01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staSwtT","10","180","118","31",null,null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("15");
            obj.set_text("S.W/T");
            obj.set_cssclass("sta_WF_th01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staSwt","127","180",null,"31","10",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staAvWtT","10","210","118","31",null,null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("17");
            obj.set_text("AV W/T");
            obj.set_cssclass("sta_WF_th01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Static("staAvWt","127","210",null,"31","10",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_td01L");
            this.divOrder.addChild(obj.name, obj);

            obj = new Edit("edtSwt","134","185",null,"21","16",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("19");
            this.divOrder.addChild(obj.name, obj);

            obj = new Edit("edtOrderNm","134","65",null,"21","16",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("20");
            this.divOrder.addChild(obj.name, obj);

            obj = new Edit("edtBrandNm","134","95",null,"21","16",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("21");
            this.divOrder.addChild(obj.name, obj);

            obj = new Edit("edtGG","134","155",null,"21","16",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("22");
            this.divOrder.addChild(obj.name, obj);

            obj = new Edit("edtAvWt","134","215",null,"21","16",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("23");
            this.divOrder.addChild(obj.name, obj);

            obj = new TextArea("txtRemark","134","246",null,null,"16","16",null,null,null,null,this.divOrder.form);
            obj.set_taborder("24");
            this.divOrder.addChild(obj.name, obj);

            obj = new Calendar("calDeliDt","134","125",null,"21","16",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("25");
            this.divOrder.addChild(obj.name, obj);

            obj = new Calendar("calDate","134","35",null,"21","16",null,null,null,null,null,this.divOrder.form);
            obj.set_taborder("26");
            this.divOrder.addChild(obj.name, obj);

            obj = new Button("btnStyle","10","347","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("STYLE");
            obj.set_cssclass("btn_WF_tab02");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddInfo1","232","347","130","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생산 진행시 필요항목");
            obj.set_cssclass("btn_WF_tab01");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddInfo2","363","347","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("원/부자재 스케쥴");
            obj.set_cssclass("btn_WF_tab01");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnFile","565","347","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("첨부파일");
            obj.set_cssclass("btn_WF_tab01");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Div("divAddInfo1","10","1223",null,null,"10","-816",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","10","0","280","30",null,null,null,null,null,null,this.divAddInfo1.form);
            obj.set_taborder("3");
            obj.set_text("생산 진행시 필요항목(01)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_tooltiptext("ADD_TYPE = 01");
            this.divAddInfo1.addChild(obj.name, obj);

            obj = new Grid("grdAddinfo1","10","Static26:0",null,null,"10","10",null,null,null,null,this.divAddInfo1.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOrderAddInfo1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"600\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"내용\"/></Band><Band id=\"body\"><Cell text=\"bind:OA_TYPE_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:OA_DESC\" edittype=\"text\"/></Band></Format></Formats>");
            this.divAddInfo1.addChild(obj.name, obj);

            obj = new Button("btnAddInfoDel1",null,"4","46","23","10",null,null,null,null,null,this.divAddInfo1.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.divAddInfo1.addChild(obj.name, obj);

            obj = new Button("btnAddInfoAdd1",null,"4","46","23","61",null,null,null,null,null,this.divAddInfo1.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.divAddInfo1.addChild(obj.name, obj);

            obj = new Div("divAddInfo2","10","1626",null,null,"10","-1219",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","10","0","280","30",null,null,null,null,null,null,this.divAddInfo2.form);
            obj.set_taborder("0");
            obj.set_text("원/부자재 스케쥴(02)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_tooltiptext("ADD_TYPE = 02");
            this.divAddInfo2.addChild(obj.name, obj);

            obj = new Grid("grdAddinfo2","10","Static27:0",null,null,"10","10",null,null,null,null,this.divAddInfo2.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOrderAddInfo2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"600\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"내용\"/></Band><Band id=\"body\"><Cell text=\"bind:OA_TYPE_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:OA_DESC\" edittype=\"text\"/></Band></Format></Formats>");
            this.divAddInfo2.addChild(obj.name, obj);

            obj = new Button("btnAddInfoAdd2",null,"4","46","23","61",null,null,null,null,null,this.divAddInfo2.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.divAddInfo2.addChild(obj.name, obj);

            obj = new Button("btnAddInfoDel2",null,"4","46","23","10",null,null,null,null,null,this.divAddInfo2.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.divAddInfo2.addChild(obj.name, obj);

            obj = new Div("divAddInfo3","9","2027",null,"393","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","10","0","280","30",null,null,null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("0");
            obj.set_text("부자재(03)");
            obj.set_cssclass("sta_WF_title02");
            obj.set_tooltiptext("ADD_TYPE = 03");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new Button("btnAddInfoAdd3",null,"4","46","23","61",null,null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new Button("btnAddInfoDel3",null,"4","46","23","10",null,null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new Div("divAddInfo3_1","10","61",null,null,"10","10",null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("3");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new Static("staOaTypeT","59","31","119","31",null,null,null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_th01L");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new Static("staOaDescT","357","31",null,"31","10",null,null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_th01L");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new Static("staImgT","177","31","181","31",null,null,null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("6");
            obj.set_text("이미지");
            obj.set_cssclass("sta_WF_th01L");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new Static("staChkT","10","31","50","31",null,null,null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_th01L");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new CheckBox("chk","29","34","23","25",null,null,null,null,null,null,this.divAddInfo3.form);
            obj.set_taborder("8");
            this.divAddInfo3.addChild(obj.name, obj);

            obj = new Div("divFile","9","2431",null,"393","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divFile1","10","-3",null,null,"10","5",null,null,null,null,this.divFile.form);
            obj.set_taborder("0");
            obj.set_url("frm::com/comFileSYS.xfdl");
            obj.set_text("");
            obj.set_positionstep("10");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("Static28","10","2","280","30",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_title02");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divSample","769","0",null,null,"-749","384",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","10","0","280","30",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("0");
            obj.set_text("부자재");
            obj.set_cssclass("sta_WF_title02");
            this.divSample.addChild(obj.name, obj);

            obj = new Button("btnDetailAdd",null,"4","46","23","61",null,null,null,null,null,this.divSample.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            this.divSample.addChild(obj.name, obj);

            obj = new Button("btnDetailDel",null,"4","46","23","10",null,null,null,null,null,this.divSample.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("staDateT","59","30","119","31",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("3");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_visible("false");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("staOrderT","357","30","368","31",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_th01L");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static01","10","294","118","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static03","287","294","438","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("staOrderT00","177","30","181","31",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("7");
            obj.set_text("이미지");
            obj.set_cssclass("sta_WF_th01L");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static02","127","294","161","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("8");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new ImageViewer("imgPm","132","299","151","109",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("9");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_text("+");
            obj.set_font("normal 30pt/normal \"Arial\"");
            this.divSample.addChild(obj.name, obj);

            obj = new Edit("edtType00","292","299",null,"109","15",null,null,null,null,null,this.divSample.form);
            obj.set_taborder("10");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","10","176","118","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","127","176","598","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new Edit("edtType00_00","132","251","588","39",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("13");
            this.divSample.addChild(obj.name, obj);

            obj = new ImageViewer("imgPm00","132","181","588","66",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("14");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_text("+");
            obj.set_font("normal 30pt/normal \"Arial\"");
            this.divSample.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","15","299","108","109",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("15");
            this.divSample.addChild(obj.name, obj);

            obj = new Edit("edtType","15","181","108","109",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("16");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static01_00","59","58","119","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static03_00","357","58","368","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static02_00","177","58","181","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("19");
            obj.set_text("Static00");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new ImageViewer("imgPm01","182","63","131","109",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("20");
            obj.set_fittocontents("none");
            obj.set_stretch("fit");
            obj.set_text("+");
            obj.set_font("normal 30pt/normal \"Arial\"");
            this.divSample.addChild(obj.name, obj);

            obj = new Edit("edtType00_01","362","63","358","109",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("21");
            this.divSample.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","65","63","108","109",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("22");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("staDateT00","10","30","50","31",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_visible("false");
            this.divSample.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","10","58","50","119",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_td01L");
            this.divSample.addChild(obj.name, obj);

            obj = new CheckBox("chk","30","105","23","25",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("25");
            this.divSample.addChild(obj.name, obj);

            obj = new Button("Button00","317","64","36","27",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("26");
            obj.set_text("+");
            obj.set_cssclass("btn_WF_basic01");
            this.divSample.addChild(obj.name, obj);

            obj = new Button("Button00_00","317","95","36","27",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("27");
            obj.set_text("-");
            obj.set_cssclass("btn_WF_basic01");
            this.divSample.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","30","32","23","25",null,null,null,null,null,null,this.divSample.form);
            obj.set_taborder("28");
            this.divSample.addChild(obj.name, obj);

            obj = new Button("btnMeasurement","101","347","130","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("MEASUREMENT");
            obj.set_cssclass("btn_WF_tab01");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Div("divMeasurement","10","814",null,null,"10","-407",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMeasurementT","10","0","280","30",null,null,null,null,null,null,this.divMeasurement.form);
            obj.set_taborder("3");
            obj.set_text("MEASUREMENT");
            obj.set_cssclass("sta_WF_title02");
            this.divMeasurement.addChild(obj.name, obj);

            obj = new Grid("grdMeasurement","10","staMeasurementT:0",null,null,"10","10",null,null,null,null,this.divMeasurement.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOrderMeasurement");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"MEASUREMENT(cm)\"/><Cell col=\"3\" text=\"95\"/><Cell col=\"4\" text=\"100\"/><Cell col=\"5\" text=\"105\"/><Cell col=\"6\" text=\"110\"/><Cell col=\"7\" text=\"115\"/><Cell col=\"8\" text=\"REMARK\"/></Band><Band id=\"body\"><Cell text=\"bind:ALPHABET\"/><Cell col=\"1\" text=\"bind:SM_TYPE\"/><Cell col=\"2\" text=\"bind:SM_TYPE_NM\"/><Cell col=\"3\" text=\"bind:SM_95\"/><Cell col=\"4\" text=\"bind:SM_100\"/><Cell col=\"5\" text=\"bind:SM_105\"/><Cell col=\"6\" text=\"bind:SM_110\"/><Cell col=\"7\" text=\"bind:SM_115\"/><Cell col=\"8\" text=\"bind:SM_REMARK\"/></Band></Format></Formats>");
            this.divMeasurement.addChild(obj.name, obj);

            obj = new Button("btnAddInfoDel1",null,"4","46","23","10",null,null,null,null,null,this.divMeasurement.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.divMeasurement.addChild(obj.name, obj);

            obj = new Button("btnAddInfoAdd1",null,"4","46","23","61",null,null,null,null,null,this.divMeasurement.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.divMeasurement.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStyle.form
            obj = new Layout("default","",0,0,this.divStyle.form,function(p){});
            this.divStyle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divOrder.form
            obj = new Layout("default","",0,0,this.divOrder.form,function(p){});
            this.divOrder.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAddInfo1.form
            obj = new Layout("default","",0,0,this.divAddInfo1.form,function(p){});
            this.divAddInfo1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAddInfo2.form
            obj = new Layout("default","",0,0,this.divAddInfo2.form,function(p){});
            this.divAddInfo2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAddInfo3.form.divAddInfo3_1.form
            obj = new Layout("default","",0,0,this.divAddInfo3.form.divAddInfo3_1.form,function(p){});
            this.divAddInfo3.form.divAddInfo3_1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAddInfo3.form
            obj = new Layout("default","",0,0,this.divAddInfo3.form,function(p){});
            this.divAddInfo3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form.divFile1
            obj = new Layout("default","",0,0,this.divFile.form.divFile1.form,function(p){});
            this.divFile.form.divFile1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSample.form
            obj = new Layout("default","",0,0,this.divSample.form,function(p){});
            this.divSample.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMeasurement.form
            obj = new Layout("default","",0,0,this.divMeasurement.form,function(p){});
            this.divMeasurement.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",757,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divOrder.form.edtOrderNm","value","dsOrderMaster","ORDER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divOrder.form.edtBrandNm","value","dsOrderMaster","BRAND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divOrder.form.calDeliDt","value","dsOrderMaster","DELI_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divOrder.form.edtGG","value","dsOrderMaster","GG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divOrder.form.txtRemark","value","dsOrderMaster","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divOrder.form.calDate","value","dsOrderMaster","ORDER_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSample.form.imgPm","image","dsProjectInfoDetail","PROJECT_BLOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSample.form.imgPm00","image","dsProjectInfoDetail","PROJECT_BLOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSample.form.imgPm01","image","dsProjectInfoDetail","PROJECT_BLOB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comFileSYS.xfdl");
        };
        
        // User Script
        this.registerScript("OM010P01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    오더목록 > 오더 작성 팝업
        *  @FileName    OM010P01.xfdl
        *  @Creator     신준민
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      신준민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_divFile = "";
        this.fv_sFileNo = null;
        this.fv_sAttachNo = null;
        this.fv_bData = null;
        this.fv_sFileType = "USER";
        this.fv_sFileSize = "";
        this.fv_sImgViewerNm = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.OM010P01_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
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
        this.fnInit = function(){
        	// 첨부파일 활성화
        // 	this.fv_divFile = this.divFile.form.divFile1.form;
        // 	this.fv_divFile.fn_setSaveBtnEnable(false);
        // 	this.fv_divFile.fn_setAtchFileTypeCd("USER"); //추후 파일타입코드 변경
        // 	this.fv_divFile.fnInitComponent(this);

        	this.dsOrderMaster.addRow();

        	//탭세팅
        	var objList = {	"btnStyle"		    :this.divStyle, 	"btnMeasurement":this.divMeasurement,
        					"btnAddInfo1"		:this.divAddInfo1, 	"btnAddInfo2"	:this.divAddInfo2,
        					"btnAddInfo3"		:this.divAddInfo3, 	"btnFile"		:this.divFile
        					};
            var sTabId = "tab01";
            var objFirstLoad = this.btnStyle;
            var sTabOnCss = "btn_WF_tab02";
            var sTabOffCss = "btn_WF_tab01";

        	take.TabSetting(this, sTabId, objList, objFirstLoad, sTabOnCss, sTabOffCss);

        	this.fv_sFileNo = this.parent.sFileNo;
        	this.fv_sAttachNo = this.parent.sAttachNo;

        	if(take.nvl(this.fv_sFileNo, "") != ""){
        		//파일번호 있을경우 FILE_NO를 통해서 오더 목록 상세 세팅
        		var sNamespace, sInDs, sOutDs, sParam;
        		sNamespace 	= ["Order.orderList", "Order.orderDetailList", "Order.orderAddInfoList", "Order.orderAddInfoList", "Order.orderAddInfoList3"];
        		sOutDs 		= ["dsOrderMaster", "dsOrderDetail", "dsOrderAddInfo1", "dsOrderAddInfo2", "dsOrderAddInfo3"];
        		//sNamespace = ["Order.orderList", "Order.orderDetailList", "Order.orderAddInfoList"];
        		sInds = "";
        		//sOutDs = ["dsOrderMaster", "dsOrderDetail", "dsOrderAddInfo"];
        		sParam = "FILE_NO='"+this.fv_sFileNo+"' ATTACH_CD='"+this.fv_sAttachNo+"'";
        		take.tranSelect(this, "MultiSearch", sNamespace, sInds, sOutDs, sParam, "fnCallback");

        	}else{
        		//DATE 현재날짜로 세팅
        		this.fnYear();
        		//파일번호 없을경우 FILE_NO 가져오기
        		take.tranSelect(this, "FileNoSearch", "Order.maxFileNo", "", "dsFileNo", "", "fnCallback");
        	}
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
            if (take.nvl(sTranId, "")=="") sTranId = "search";

        	//이전오더불러오기 버튼 클릭 시
        	take.tranSelect(this,sTranId,"Namespace","sInDataset", "sOutDataset", "sParam", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "save";

        	//dsOrderMaster, dsOrderDetail, dsOrderAddInfo, 첨부파일 저장
        	//1. MNK_ORDER_ADDINFO에 들어갈 데이터셋을 하나의 데이터셋으로 한 후 저장한다
        	//2. MNK_ORDER_ADDINFO에 들어갈 데이터셋을 목록별로 하나씩 만든 후 하나의 데이터셋에 setColumn 시켜주고 저장한다

        // 	this.dsOrderAddInfo.clearData();
        //
        // 	this.dsOrderAddInfo.appendData(this.dsOrderAddInfo1);
        // 	this.dsOrderAddInfo.appendData(this.dsOrderAddInfo2);
        // 	this.dsOrderAddInfo.appendData(this.dsOrderAddInfo3);

        	var sTotal = "";
            var sOaType;
            var sTxtId1, sTxtId2, sTxtTypeNm, sTxtDescVal;
            var sDivId;
            var objComp, objDsAddInfo;
            var objGrd;
        	var nRowCntAddInfo3

            objComp         = this.divAddInfo3.form.divAddInfo3_1.form;
            objDsAddInfo    = this.dsOrderAddInfo3;
        	objGrd          = this.divStyle.form.grdStyle;
        	nRowCntAddInfo3 = objDsAddInfo.rowcount;

        	//TOTAL 값 세팅
        	for(var i = 0; i < objGrd.rowcount; i++){
        		sTotal = Number(sTotal) + Number(objGrd.getCellValue(i, 10));
        	}

        // 	if (this.fv_divFile.fn_isUpdate()){
        // 		//파일 업로드 / 저장
        // 		this.fv_divFile.fnUploadSaveFileList(function(rtnValue){
        // 			if(rtnValue.result){
        // 				trace("파일저장 업로드/저장 완료");
        // 			}
        // 		});
        // 	}

        	for(var i = 0; i < nRowCntAddInfo3; i++){
        		sOaType		= objDsAddInfo.getColumn(i, "OA_TYPE");
                sDivId      = "divAddInfo3_1" + i;
        		sTxtId1		= "txtType" + sOaType + "_" + i;
        		//var sImgId1 	= "img1_" + sOaType + "_" + i;
        		sTxtId2		= "txtDesc_" + sOaType + "_" + i;
                             //this.divAddInfo3.form.divAddInfo3_1.form.components[sDivId].form.components[sImgId1]
        		sTxtTypeNm  = objComp.components[sDivId].form.components[sTxtId1].value;
        		sTxtDescVal = objComp.components[sDivId].form.components[sTxtId2].value;

        		objDsAddInfo.setColumn(i, "OA_TYPE_NM", sTxtTypeNm);
        		objDsAddInfo.setColumn(i, "OA_DESC", sTxtDescVal);
        	}

        	take.transaction
        	(
        		this
        		, sTranId
        		, "SVC_LOC::or/orderInfoSave.do"
        		, "dsOrderMaster=dsOrderMaster:U dsOrderDetail=dsOrderDetail:U dsOrderAddInfo1=dsOrderAddInfo1:U dsOrderAddInfo2=dsOrderAddInfo2:U dsOrderAddInfo3=dsOrderAddInfo3:U dsFile=dsFile:U"
        		, ""
        		, "TOTAL='" + sTotal + "'"
        			, "fnCallback"
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
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };
        //btn_onclick : 버튼 클릭 이벤트
        this.btn_onclick = function(obj,e)
        {
        	var sName = obj.name.substring(3);

        	switch(sName) {
        	case "PreOrder": //이전오더 불러오기 버튼
        		//this.fnSearch("search");
        		break;
        	case "Save": //저장 버튼
        		if(obj.getDisplayText()== "저장"){
        			this.fnSave("save");
        		}
        		else{
        			this.fnSave("update");
        		}
        		break;
        	}
        };
        //btnAddInfo_onclick : 오더 기타항목 버튼 클릭이벤트
        this.btnAddInfo_onclick = function(obj,e)
        {
        	var sName;
            var objDsDetail, objDsAddInfo1, objDsAddInfo2, objDsAddInfo3, objDsFile;
            var objDivAddInfo3;


        	sName = obj.name.substring(3);

            objDsDetail = this.dsOrderDetail;
            objDsAddInfo1 = this.dsOrderAddInfo1;
            objDsAddInfo2 = this.dsOrderAddInfo2;
            objDsAddInfo3 = this.dsOrderAddInfo3;
            objDsFile   = this.dsFile;

            objDivAddInfo3 = this.divAddInfo3.form;

        	switch(sName) {
                case "DetailAdd": //Style 그리드의 추가 버튼

                    var nRow = objDsDetail.addRow();
                    objDsDetail.setColumn(nRow, "FILE_NO", this.fv_sFileNo);
                    objDsDetail.setColumn(nRow, "QTY_95", 0);
                    objDsDetail.setColumn(nRow, "QTY_100", 0);
                    objDsDetail.setColumn(nRow, "QTY_105", 0);
                    objDsDetail.setColumn(nRow, "QTY_110", 0);
                    objDsDetail.setColumn(nRow, "QTY_115", 0);

                    break;
                case "DetailDel": //Style 그리드의 삭제 버튼

                    if(objDsDetail.rowcount == 0){
                        alert("추가된 행이 없습니다.");
                        return;
                    }

                    var bRowDel = take.confirm(this, "question", "선택된 행을 삭제하시겠습니까?");
                    if(bRowDel){
                        objDsDetail.deleteRow(objDsDetail.rowposition);
                        return;
                    }

                    break;
                case "AddInfoAdd1": //생산 진행시 필요항목 그리드의 추가 버튼

                    var nRow = objDsAddInfo1.addRow();
                    objDsAddInfo1.setColumn(nRow, "FILE_NO", this.fv_sFileNo);
                    objDsAddInfo1.setColumn(nRow, "ADD_TYPE", "01");
                    //this.dsOrderAddInfo1.setColumn(nRow, "ADD_NO", nRow);
                    objDsAddInfo1.setColumn(nRow, "OA_TYPE", "01");

                    break;
                case "AddInfoDel1": //생산 진행시 필요항목 그리드의 삭제 버튼
                    if(objDsAddInfo1.rowcount == 0){
                        alert("추가된 행이 없습니다.");
                        return;
                    }

                    var bRowDel = take.confirm(this, "question", "선택된 행을 삭제하시겠습니까?");
                    if(bRowDel){
                        objDsAddInfo1.deleteRow(objDsAddInfo1.rowposition);
                        return;
                    }

                    break;

                case "AddInfoAdd2": //원/부자재 스케쥴 그리드의 추가 버튼
                    var nRow = objDsAddInfo2.addRow();
                    objDsAddInfo2.setColumn(nRow, "FILE_NO", this.fv_sFileNo);
                    objDsAddInfo2.setColumn(nRow, "ADD_TYPE", "02");
                    //this.dsOrderAddInfo2.setColumn(nRow, "ADD_NO", nRow);
                    objDsAddInfo2.setColumn(nRow, "OA_TYPE", "02");
                    break;

                case "AddInfoDel2": //원/부자재 스케쥴 그리드의 삭제 버튼
                    if(objDsAddInfo2.rowcount == 0){
                        alert("추가된 행이 없습니다.");
                        return;
                    }

                    var bRowDel = take.confirm(this, "question", "선택된 행을 삭제하시겠습니까?");
                    if(bRowDel){
                        objDsAddInfo2.deleteRow(objDsAddInfo2.rowposition);
                        return;
                    }

                    break;
                case "AddInfoAdd3": //부자재 그리드의 추가 버튼

                    var nRow = objDsAddInfo3.addRow();

                    objDsAddInfo3.setColumn(nRow, "FILE_NO", this.fv_sFileNo);
                    objDsAddInfo3.setColumn(nRow, "ADD_TYPE", "03");
                    //this.dsOrderAddInfo3.setColumn(nRow, "ADD_NO", nRow);
                    objDsAddInfo3.setColumn(nRow, "OA_TYPE", "03");

                    var nTop = 61; // 61 Top px 최상단 시작 div 좌표
                    this.fnSetDynamicDivInit(objDsAddInfo3, objDsFile, nTop);

                    break;
                case "AddInfoDel3": //부자재 그리드의 삭제 버튼

                    //동적생성한 div안에 checkbox들의 값을 확인한 후 체크된 div를 삭제한다.
                    //1. 체크한 항목이 없을 경우 : alert("체크된 행이 없습니다.")
                    //2. 헤드에 체크한 경우(this.divAddInfo.form.chk) : 모든 div 전체 체크

                    break;

                default :
        			break;
            }
        };
        //img_onclick : 동적 생성된 ImageViewer 클릭 이벤트
        this.img_onclick = function(obj,e)
        {
            //이미지뷰어 이름 설정
            this.fv_sImgViewerNm = obj.name;
            // 업로드 소스 작성
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };
        // FileDialog00_onclose : 파일 다이얼로그 닫힐 때 발생
        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };
        /**
         * addFileList : 멀티 파일 추가
         * @example this.addFileList();
         */
        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
         		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
         		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, nexacro.VirtualFile.openBinary);
        	}
        }
        // 파일추가 후처리 성공이벤트
        this.FileList_onsuccess = function(obj, e)
        {
            var objDsAddInfo3, objDsFile;
            var objDivAddInfo3;

            objDsAddInfo3   = this.dsOrderAddInfo3;
            objDsFile       = this.dsFile;

            objDivAddInfo3 = this.divAddInfo3.form;

        	switch (e.reason)
        	{
        		case 1:	//open() 메소드 실행시

                    var nDiv = this.fv_sImgViewerNm.substr(8,9);

                    var sImgId1 	= "img1_03_" + nDiv;
                    var sDivId      = "divAddInfo3_1" + nDiv;

        			this.divAddInfo3.form.divAddInfo3_1.form.components[sDivId].form.components[sImgId1].set_text("");
        			obj.getFileSize();


        			break;
        		case 3: // read() 실행시 추가 실행

        			//이미지 뷰어의 순서값 가져온후 이미지 바꿔주기
                    var nDiv = this.fv_sImgViewerNm.substr(8,9);

                    var sImgId1 	= "img1_03_" + nDiv;
                    var sDivId      = "divAddInfo3_1" + nDiv;
        			this.divAddInfo3.form.divAddInfo3_1.form.components[sDivId].form.components[sImgId1].set_image("data:image/png;base64," + e.binarydata);

        			this.fv_bData = e.binarydata;
        			objDsFile.clearData();
        			var addidx = objDsFile.addRow();
        			objDsFile.setColumn(addidx, "FILE_NM", nexacro.trim(obj.filename));
        			objDsFile.setColumn(addidx, "FILE_BLOB", this.fv_bData);
                    objDsFile.setColumn(addidx, "FILE_PATH", "");
        			objDsFile.setColumn(addidx, "IMPORT_YN", "N");
        			objDsFile.setColumn(addidx, "FILE_TYPE", this.fv_sFileType);
        			objDsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);

        			break;
        		case 9:	// getFileSize() 실행시 추가 실행
        			if( nexacro._Browser == "Runtime" )
        			{
        				//파일 바이너리데이터 생성
        				obj.read("utf-8");
        			}
        			else
        			{
        				var objIframe = window.document.getElementsByTagName('iframe');
        				var nIframeCnt = (objIframe.length - 1);
        				var objInput = objIframe[nIframeCnt].contentWindow.document.getElementsByTagName("input");

        				var objDsFile = this.dsFile;

        				for (var i = 0; i < objInput.length; i++) {
                            trace("objInput : " + objInput[i]);
                            //이미지를 추가할 ImageViewer를 찾은 후 그 곳에다가 set_image
        					var nDiv = this.fv_sImgViewerNm.substr(8,9);

                            var sImgId1 	= "img1_03_" + nDiv;
                            var sDivId      = "divAddInfo3_1" + nDiv;
        					var objImageView = this.divAddInfo3.form.divAddInfo3_1.form.components[sDivId].form.components[sImgId1];

        					if (objInput[i].type == "file") {
        						if( objInput[i].files.length > 0 )
        						{
        							var reader  = new FileReader();
        							reader.addEventListener("load", function(){
        								objImageView.set_image(reader.result);
        								trace("@@@@@@@@@@@@@@@@@@@@@@@ : " + reader.result);
        								objDsFile.setColumn(addidx, "FILE_BLOB", reader.result);
        								objDsFile.setColumn(addidx, "IMPORT_YN", "N");
        							});

        							reader.readAsDataURL(objInput[i].files[0], "EUC-KR");

        							var addidx = objDsFile.addRow();
                                    var sAttachCd = this.dsOrderMaster.getColumn(0, "ATTACH_CD");
                                    objDsFile.setColumn(addidx, "ATTACH_CD", sAttachCd);
        							objDsFile.setColumn(addidx, "FILE_NM", nexacro.trim(objInput[i].files[0].name));
        							objDsFile.setColumn(addidx, "FILE_TYPE", this.fv_sFileType);
        							objDsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);

        							objFileUpTransfer.addFile(obj.filename, obj);
        						}
        					}
        				}
        			}

        			break;
        		default :
        			break;
        	}
        }

        // 파일추가 후처리 실패이벤트
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }

        /**
         * fnYear : 오늘 날짜 세팅
         * @example this.fnYear();
         */
        this.fnYear = function()
        {
        	var nAddRow, nThisRow;
        	var objDs;
        	var nDate;

            objDs = this.dsOrderMaster;
            nDate = take.getTodayTime().date;

            objDs.setColumn(0, "ORDER_DT", nDate);
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallback = function(sId, nErrCd, sErrMsg)
        {
            var objDsAddInfo1, objDsAddInfo2, objDsAddInfo3;
            var objDsAddInfo1_1, objDsAddInfo2_1;
            var objDivAddInfo3;

            objDsAddInfo1 = this.dsOrderAddInfo1;
            objDsAddInfo2 = this.dsOrderAddInfo2;
            objDsAddInfo3 = this.dsOrderAddInfo3;

            objDsAddInfo1_1 = this.dsAddInfoType1;
            objDsAddInfo2_1 = this.dsAddInfoType2;

            objDivAddInfo3 = this.divAddInfo3.form;

            switch(sId)
            {
                case "search" : //조회 콜백
                    //Script
                    break;
                case "save" :  //저장 콜백
        			this.opener.fnSearch();
        			this.close();
                    break;
                case "FileNoSearch" : //조회 콜백

                	//파일번호 세팅
        			this.fv_sFileNo = this.dsFileNo.getColumn(0, "MAX_NO");

                	this.dsOrderMaster.setColumn(0, "FILE_NO", this.fv_sFileNo);

        			//첨부파일 코드가 없을시 기준에 맞게 코드 생성
        // 			this.fv_divFile.fnSearchAtchFileId(function(rtnValue){
        // 			this.dsOrderMaster.setColumn(0, 'ATTACH_CD', rtnValue.resultData);
        // 			this.fv_divFile.fn_setAtchFileId(rtnValue.resultData);
        // 			this.fv_divFile.fnSearchFileList();
        // 			});

        			//생산 진행시 필요항목, 원 부자재 스케쥴 OA_TYPE에 따라 setcolumn 해주기
                    for(var i = 0; i < objDsAddInfo1_1.rowcount; i++){
        				var nRow = objDsAddInfo1.addRow();
        				objDsAddInfo1.setColumn(nRow, "FILE_NO", this.fv_sFileNo);
        				objDsAddInfo1.setColumn(nRow, "ADD_TYPE", "01");
        				objDsAddInfo1.setColumn(nRow, "OA_TYPE", "01");
        				objDsAddInfo1.setColumn(nRow, "OA_TYPE_NM", objDsAddInfo1_1.getColumn(i, "OA_TYPE_NM"));
        			}
        			for(var i = 0; i < objDsAddInfo2_1.rowcount; i++){
        				var nRow = objDsAddInfo2.addRow();
        				objDsAddInfo2.setColumn(nRow, "FILE_NO", this.fv_sFileNo);
        				objDsAddInfo2.setColumn(nRow, "ADD_TYPE", "02");
        				objDsAddInfo2.setColumn(nRow, "OA_TYPE", "02");
        				objDsAddInfo2.setColumn(nRow, "OA_TYPE_NM", objDsAddInfo2_1.getColumn(i, "OA_TYPE_NM"));
        			}
        			break;
                case "MultiSearch" :
        			//첨부파일 reload
        // 			var atchFileId = this.dsOrderMaster.getColumn(0, 'ATTACH_ID');
        // 			this.fv_divFile.fn_setAtchFileId(atchFileId);
        // 			this.fv_divFile.fnSearchFileList();

        			//저장 버튼 text 수정으로 변경
        			this.divOrder.form.btnSave.set_text("수정");

        			//filter
        			objDsAddInfo1.filter("ADD_TYPE == '01'");
        			objDsAddInfo2.filter("ADD_TYPE == '02'");
        			objDsAddInfo3.filter("ADD_TYPE == '03'");

        			if(this.dsOrderAddInfo3.rowcount > 0){
                        var nTop = 61; // 109 Top px 최상단 시작 div 좌표
                        this.fnSetDynamicDivInit(this.dsOrderAddInfo3, this.dsFile, nTop);
        			}

                    break;
                case "update" :  //수정 콜백
                    //Script
        			this.opener.fnSearch();
        			this.close();
                    break;
                default :
                    break;
            }
        }
        /**
         * fnSetDynamicDivInit : 메인 Div 초기값 설정 동적생성 함수 호출
         * @example this.fnSetDynamicDivInit(objDs, objFileDs, nTop);
         */
        this.fnSetDynamicDivInit = function (objDs, objFileDs, nTop)
        {

            trace("데이터셋 로우카운트 : " + this.dsOrderAddInfo3.rowcount);
            // 컴포넌트 동적 생성전에 기존에 생성된 컴포넌트 삭제
        	var arrComp = take.ComponentList(this.divAddInfo3.form.divAddInfo3_1.form);

        	for(var i=0; i<objDs.rowcount; i++) {//초기화 작업

                trace("indexOf : " + arrComp.indexOf("divAddInfo3_1"+i));
        		if (arrComp.indexOf("divAddInfo3_1"+i) > -1) {// ""에 div
        			this.divAddInfo3.form.divAddInfo3_1.form.components["divAddInfo3_1"+i].destroy();
                    trace("삭제됨 : " + i);
        		}
        	}
        	var objDivNm  = "divAddInfo3_1";	// 메인Div ID
        	var objBaseDs = objDs;				// 베이스 DS (타임라인 디테일)

        	this.fnSetDivComp(objDivNm, objBaseDs, objFileDs, nTop);
        }
        /**
         * fnSetComp : 프레임 div 컴포넌트 동적 생성
         * @example this.fnSetDivComp(objDivNm, objBaseDs, objFileDs, nTop);
         */
        this.fnSetDivComp = function (objDivNm, objBaseDs, objFileDs, nTop)
        {
            //objDivNm : divAddInfo3_1
            //objBaseDs : this.dsOrderAddInfo3
            //objFileDs : this.dsFile
            //nTop : 61

            var divLeft, divTop, divWidth, divHeight, divRight, divBottom;
            var bFlag = true;
            this.fv_nImgDivCnt = 0;

            // 함수 호출시 인자로 넘어온 최초 생설될 div top 좌표
            nTop = parseInt(nTop);
            nTemp = 31;

            var nIntTop = (nTop+nTemp);
            nDivLeft    = 0;
            nDivTop     = 10; // 10
            nDivWidth   = null;
            nDivHeight  = 119; // 130 290
            nDivRight   = 0;
            nDivBottom  = null;

            var n140 = 140;

            var nNullImgCnt = 1;
            var sPreDetailImg;
            var nPreDivBottomPx = 0;
            var nTopInterval = 15;

            for(var i = 0; i< objBaseDs.rowcount; i++)
            {
                //최초 frame이 되는 Div를 생성
                var objDiv = new Div();

                // 0번째 Row
                if(i==0) {
                    trace("i가 1 일때 : " + objDivNm+i);
                    objDiv.init(objDivNm+i, nDivLeft, 0, nDivWidth, nDivHeight, nDivRight, nDivBottom);

                    } else if(i > 0) {
                    trace("i가 1이 아닐때 : " + objDivNm+i);
                    objDiv.init(objDivNm+i, nDivLeft, nDivHeight+(nDivHeight*(i-1)), nDivWidth, nDivHeight, nDivRight, nDivBottom);
                }

                this.divAddInfo3.form.divAddInfo3_1.form.addChild(objDivNm + i, objDiv);

                objDiv.show();

                // 0번째 Row를 제외한 나머지 Div은 생성될때 바로 이전 생성된 Row의 Bottom값을 찾아서
                nPreDivBottomPx = this.divAddInfo3.form.divAddInfo3_1.form.components[objDivNm + i].getOffsetBottom();

                // 내부 컴포넌트 동적 생성 호출
                this.fnInnerCompSet(objDivNm + i, objBaseDs, i, bFlag);

            }
            this.divAddInfo3.form.divAddInfo3_1.form.resetScroll();
        }
        /**
         * fnInnerCompSet : Div 내부에 들어갈 컴포넌트 생성
         * @example this.fnInnerCompSet(objDivNm, objBaseDs, nCnt, bFlag);
         */
        this.fnInnerCompSet = function (objDivNm, objBaseDs, nCnt, bFlag)
        {
            //objDivNm : objDivNm + "_" + i
            //objBaseDs : this.dsOrderAddInfo3
            //nCount : i
            //bFlag : true
            var objDsAddInfo1, objDsAddInfo2, objDsAddInfo3;
            var objDivAddInfo3;

            objDsAddInfo1 = this.dsOrderAddInfo1;
            objDsAddInfo2 = this.dsOrderAddInfo2;
            objDsAddInfo3 = this.dsOrderAddInfo3;

            objDivAddInfo3 = this.divAddInfo3.form;

            //static은 top, height 값이 같음

            //체크박스 static
            var nStaLeft1 = -1,  nStaTop1 = 0,  nStaWidth1 = 50,  nStaHeight1 = 119, nStaInterval1 = 10;
            //구분 static left : 48
            var nStaLeft2 = nStaLeft1 + nStaWidth1 - 1,  nStaTop2 = 0,  nStaWidth2 = 119, nStaHeight2 = 119, nStaInterval2 = 10;
            //이미지 static left : 166
            var nStaLeft3 = nStaLeft2 + nStaWidth2 - 1, nStaTop3 = 0,  nStaWidth3 = 181, nStaHeight3 = 119, nStaInterval3 = 10;
            //내용 static left : 346
            var nStaLeft4 = nStaLeft3 + nStaWidth3 - 1, nStaTop4 = 0,  nStaWidth4 = 368, nStaHeight4 = 119, nStaInterval4 = 10;
            //체크박스 checkbox
            var nChkLeft1 = 20,  nChkTop1 = 50, nChkWidth1 = 23,  nChkHeight1 = 25,  nChkInterval1 = 10;
            //구분 textArea
            var nTxtLeft1 = 54,  nTxtTop1 = 5,  nTxtWidth1 = 108, nTxtHeight1 = 109, nTxtInterval1 = 10;
            //이미지 imageViewer
            var nImgLeft1 = 171, nImgTop1 = 5,  nImgWidth1 = 131, nImgHeight1 = 109, nImgInterval1 = 10;
            //이미지 버튼 +
            var nBtnLeft1 = 306, nBtnTop1 = 5,  nBtnWidth1 = 36,  nBtnHeight1 = 27,  nBtnInterval1 = 10;
            //이미지 버튼 -
            var nBtnLeft2 = 306, nBtnTop2 = 36, nBtnWidth2 = 36,  nBtnHeight2 = 27,  nBtnInterval2 = 10;
            //내용 textarea
            var nTxtLeft2 = 352, nTxtTop2 = 5,  nTxtWidth2 = 358, nTxtHeight2 = 109, nTxtInterval2 = 10;


            //1. 구분, 이미지, 내용 순서의 동적 컴포넌트 위치 세팅(this.divAddInfo3)
            //var sFileNo 	= this.dsOrderAddInfo3.getColumn(i, "FILE_NO");
            //var sAddType 	= this.dsOrderAddInfo3.getColumn(i, "ADD_TYPE");
            var sOaType 	= objDsAddInfo3.getColumn(nCnt, "OA_TYPE");
            var sOaTypeNm 	= objDsAddInfo3.getColumn(nCnt, "OA_TYPE_NM");
            var sUserBlob 	= objDsAddInfo3.getColumn(nCnt, "USER_BLOB");
            var sOaDesc 	= objDsAddInfo3.getColumn(nCnt, "OA_DESC");

            // 	var a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNmM0YmNiMC0yOTczLTMyNDEtYTNmZC1lYjgwZjJjNjJlOTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjE5MTg2MzlDMjJFMTFFOEJBNUJFRjk0QkE3RTZFMjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjE5MTg2MzhDMjJFMTFFOEJBNUJFRjk0QkE3RTZFMjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWVkZTEzMGQtNWMyYy02NDQwLTg0ZWItNzJiYTI5ODllOGMzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YTgyOGY0ODMtZTMxMS1hZDQzLWIzZDMtNWZmMmM3NjNiZGY5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3BzsZgAAAU5JREFUeNrklD0vREEUhu+VVakky09AsXaFRvRURkOD2n4UQtz4F26xKtGLbKFxqahF42OzvqLwA5ZfoLmeSU4xGc5E4nYmeXKSc86+e2bmvRPneR4VuQaiglfhgiWtkKZpmbADizAm6Rc4hf0kST5+PSFiy4QnGII6lIUmDMOz9HxbsX8p0tgGwxR3yh9OEc5gi54TVZDGEcIjLNB4HzoremuEC6jQ29e2vAlHrliWZX3YgNhtpKdre2E7dIZL0PFydupDuEK05tU6cmmq4ATcKruchRtE95ycPePxv/rQvcVB+AwJWp9NK0LXMGOM2XVyFXgLCVrTrnm5d/HiHGJdr7YO5yHbjBIeYF5uMWSbKuEyaBsptKxpxbxRwNh2spYr9uOXIj9YIRyIz46hJ6VJ2eYqNPyvRBX0Hgcj1rC3+SqTtbXHIf5/D+yXAAMAE8iATUO8RDcAAAAASUVORK5CYII=";
            // 	this.dsOrderAddInfo3.setColumn(i,"USER_BLOB", a);
            var objStatic1 	= new Static();
            var objStatic2 	= new Static();
            var objStatic3 	= new Static();
            var objStatic4 	= new Static();
            var objChk1 	= new CheckBox();
            var objTxt1 	= new TextArea();
            var objImg1 	= new ImageViewer();
            var objBtn1		= new Button();
            var objBtn2		= new Button();
            var objTxt2 	= new TextArea();

            var sStaId1 	= "sta1_" + sOaType + "_" + nCnt;
            var sStaId2 	= "sta2_" + sOaType + "_" + nCnt;
            var sStaId3 	= "sta3_" + sOaType + "_" + nCnt;
            var sStaId4 	= "sta4_" + sOaType + "_" + nCnt;

            var sChkId1		= "chk1" + sOaType + "_" + nCnt;
            var sTxtId1 	= "txtType" + sOaType + "_" + nCnt;
            var sImgId1 	= "img1_" + sOaType + "_" + nCnt;
            var sBtnId1		= "btn1_" + sOaType + "_" + nCnt;
            var sBtnId2		= "btn2_" + sOaType + "_" + nCnt;
            var sTxtId2 	= "txtDesc_" + sOaType + "_" + nCnt;

            objStatic1.init(sStaId1, nStaLeft1, nStaTop1, nStaWidth1, nStaHeight1, null, null);
            objStatic1.set_cssclass("sta_WF_td01L");

            objStatic2.init(sStaId2, nStaLeft2, nStaTop2, nStaWidth2, nStaHeight2, null, null);
            objStatic2.set_cssclass("sta_WF_td01L");

            objStatic3.init(sStaId3, nStaLeft3, nStaTop3, nStaWidth3, nStaHeight3, null, null);
            objStatic3.set_cssclass("sta_WF_td01L");

            objStatic4.init(sStaId4, nStaLeft4, nStaTop4, null, nStaHeight4, 0, null);
            objStatic4.set_cssclass("sta_WF_td01L");

            objChk1.init(sChkId1, nChkLeft1, nChkTop1, nChkWidth1, nChkHeight1, null, null);

            //구분 항목의 textarea
            objTxt1.init(sTxtId1, nTxtLeft1, nTxtTop1, nTxtWidth1, nTxtHeight1, null, null);
            objTxt1.set_value(objDsAddInfo3.getColumn(nCnt, "OA_TYPE_NM"));

            var sUserBlob = take.nvl(objDsAddInfo3.getColumn(nCnt, "USER_BLOB"), "");
            var sIvUserTxt = ( "" == sUserBlob ) ? "+" : "";
            //이미지 항목의 img
            objImg1.init(sImgId1, nImgLeft1, nImgTop1, nImgWidth1, nImgHeight1, null, null);
            objImg1.set_font("normal 30pt/normal 'Arial'");
            objImg1.set_image(sUserBlob);
            objImg1.set_stretch("fit");
            objImg1.set_text(sIvUserTxt);

            objBtn1.init(sBtnId1, nBtnLeft1, nBtnTop1, nBtnWidth1, nBtnHeight1, null, null);
            objBtn1.set_cssclass("btn_WF_basic01");
            objBtn1.set_text("+");
            objBtn2.init(sBtnId2, nBtnLeft2, nBtnTop2, nBtnWidth2, nBtnHeight2, null, null);
            objBtn2.set_cssclass("btn_WF_basic01");
            objBtn2.set_text("-");
            //내용 항목의 textarea
            objTxt2.init(sTxtId2, nTxtLeft2, nTxtTop2, null, nTxtHeight2, 5, null);
            objTxt2.set_value(sOaDesc);

            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sStaId1, objStatic1);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sStaId2, objStatic2);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sStaId3, objStatic3);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sStaId4, objStatic4);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sChkId1, objChk1);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sTxtId1, objTxt1);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sImgId1, objImg1);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sBtnId1, objBtn1);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sBtnId2, objBtn2);
            objDivAddInfo3.divAddInfo3_1.form.components[objDivNm].addChild(sTxtId2, objTxt2);

            objStatic1.show();
            objStatic2.show();
            objStatic3.show();
            objStatic4.show();
            objChk1.show();
            objTxt1.show();
            objImg1.show();
            objBtn1.show();
            objBtn2.show();
            objTxt2.show();

            objImg1.addEventHandler( "onclick", this.img_onclick, this);
            objBtn1.addEventHandler( "onclick", this.img_onclick, this);
            objBtn2.addEventHandler( "onclick", this.btnMinus_onclick, this);

            objDivAddInfo3.divAddInfo3_1.form.resetScroll();

            nChkTop1 = nChkTop1 + (nStaHeight1);
            nStaTop1 = nStaTop1 + (nStaHeight1); // i가 0 -> 2번째 행의 top값을 만듬 i가 1 -> 3번째 행의 top값을 만듬
            nStaTop2 = nStaTop2 + (nStaHeight2);
            nStaTop3 = nStaTop3 + (nStaHeight3);
            nStaTop4 = nStaTop4 + (nStaHeight4);

            nTxtTop1 = nTxtTop1 + (nTxtHeight1+nTxtInterval1);
            nImgTop1 = nImgTop1 + (nImgHeight1+nImgInterval1);
            nBtnTop1 = nBtnTop1 + (nImgHeight1+nBtnInterval1);
            nBtnTop2 = nBtnTop2 + (nImgHeight1+nBtnInterval2);
            nTxtTop2 = nTxtTop2 + (nTxtHeight2+nTxtInterval2);

        }
        //btnPlus_onclick : 이미지 버튼 추가 클릭 이벤트
        this.btnPlus_onclick = function(obj,e)
        {
           // this.img_onclick();
        }
        //btnMinus_onclick : 이미지 버튼 삭제 클릭 이벤트
        this.btnMinus_onclick = function(obj,e)
        {

            var nDiv = obj.name.substr(8,9);
            var sImgId1 = "img1_03_" + nDiv;
            var sDivId = "divAddInfo3_1" + nDiv;

            var objComp = this.divAddInfo3.form.divAddInfo3_1.form.components[sDivId].form.components[sImgId1];

            objComp.set_image("");
            objComp.set_text("+");

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OM010P01_onload,this);
            this.divStyle.form.btnDetailAdd.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divStyle.form.btnDetailDel.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divOrder.form.btnPreOrder.addEventHandler("onclick",this.btn_onclick,this);
            this.divOrder.form.btnSave.addEventHandler("onclick",this.btn_onclick,this);
            this.divAddInfo1.form.btnAddInfoDel1.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divAddInfo1.form.btnAddInfoAdd1.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divAddInfo2.form.btnAddInfoAdd2.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divAddInfo2.form.btnAddInfoDel2.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divAddInfo3.form.btnAddInfoAdd3.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divAddInfo3.form.btnAddInfoDel3.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divSample.form.btnDetailAdd.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divSample.form.btnDetailDel.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divSample.form.imgPm.addEventHandler("onclick",this.divDetail_imgPm_onclick,this);
            this.divSample.form.imgPm00.addEventHandler("onclick",this.divDetail_imgPm_onclick,this);
            this.divSample.form.imgPm01.addEventHandler("onclick",this.divDetail_imgPm_onclick,this);
            this.divMeasurement.form.btnAddInfoDel1.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.divMeasurement.form.btnAddInfoAdd1.addEventHandler("onclick",this.btnAddInfo_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("OM010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
