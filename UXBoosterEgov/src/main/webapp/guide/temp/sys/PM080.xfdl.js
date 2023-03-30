(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM080");
            this.set_titletext("프로젝트관리_공휴일관리_공휴일관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHolidayList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"HOLIDAY_CD\" type=\"STRING\" size=\"255\"/><Column id=\"HOLIDAY_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"HOLIDAY_NM\" type=\"STRING\" size=\"255\"/><Column id=\"LUNAR_CD\" type=\"STRING\" size=\"255\"/><Column id=\"HOLIDAY_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"REPEAT_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHolidayDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"HOLIDAY_CD\" type=\"STRING\" size=\"255\"/><Column id=\"HOLIDAY_YMD\" type=\"STRING\" size=\"255\"/><Column id=\"HOLIDAY_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LUNAR_CD\" type=\"STRING\" size=\"255\"/><Column id=\"HOLIDAY_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"REPEAT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgMultiLangDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_LANG_TXT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHolidayType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"NAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"NAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLunar", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRepeatYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonth", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">선택</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">07</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">08</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">09</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDay", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">선택</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">07</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">08</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">09</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">17</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">18</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">19</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">20</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">22</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">23</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">24</Col></Row><Row><Col id=\"CODE\">25</Col><Col id=\"NAME\">25</Col></Row><Row><Col id=\"CODE\">26</Col><Col id=\"NAME\">26</Col></Row><Row><Col id=\"CODE\">27</Col><Col id=\"NAME\">27</Col></Row><Row><Col id=\"CODE\">28</Col><Col id=\"NAME\">28</Col></Row><Row><Col id=\"CODE\">29</Col><Col id=\"NAME\">29</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"NAME\">30</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">31</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUseYnT","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staHolidayT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("공휴일");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboFrHolidt","staHolidayT:10","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_autoselect("true");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDash","cboFrHolidt:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboToHolidt","staDash:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_autoselect("true");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staHolidayT00","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("월");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMonthSearch","staHolidayT00:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_autoselect("true");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsProjectInfo");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01_00","975","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_01","1025","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_01_00","1025","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
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

            obj = new Div("divDetail","0","73",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staHolidayListT","10","0","310","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("공휴일 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staHolidayDetailT","338","0",null,"21","142",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("공휴일 상세");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdHolidayList","10","26","310",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsHolidayList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"48\"/><Column size=\"54\"/><Column size=\"126\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"일자\"/><Cell col=\"1\" text=\"(양/음)\"/><Cell col=\"2\" text=\"반복여부\"/><Cell col=\"3\" text=\"공휴일명\"/></Band><Band id=\"body\"><Cell text=\"expr:comp.parent.parent.parent.fnSetDateFormat(currow,&quot;DATE&quot;)\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:comp.parent.parent.parent.fnSetDateFormat(currow,&quot;LUNAR&quot;)\" textAlign=\"center\"/><Cell col=\"2\" text=\"expr:REPEAT_YN==&quot;Y&quot;?&quot;O&quot;:(REPEAT_YN==&quot;N&quot;?&quot;X&quot;:&quot;&quot;)\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:HOLIDAY_NM\" edittype=\"text\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","456","26",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34","456","56",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static36","456","86",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static41","456","116",null,"153","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staHoliNmT","338","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("공휴일명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staHoliDtT","338","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("공휴일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboType","465","61","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsHolidayType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDetail","465","122",null,"142","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_maxlength("1000");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTypeTstaHoliDtT","338","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDt","813","268",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNm","456","268","239","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","695","268","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegNmT","338","268","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDetailT","338","116","120","153",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDt","813","298",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNm","456","298","239","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModDtT","695","298","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staModNmT","338","298","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","695","26","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtHoliNm","465","31","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_maxlength("10");
            obj.set_cssclass("edt_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRepeatT","695","56","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("반복여부");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","822","31","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboSolLun","822","91","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsLunar");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","340","329",null,"20","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMultiLangT","338","Static24:0",null,"21","142",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("다국어 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultiLang","340","staMultiLangT:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_binddataset("dsProgMultiLangDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:LANG_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ML_LANG_TXT\" edittype=\"text\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMultiLang",null,"349","100","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("다국어매핑");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staSolLunT","695","86","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("양/음력");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboRepeat","822","61","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsRepeatYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cmbHolMonth","464","91","92","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsMonth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staHolMonth","cmbHolMonth:3","90","16","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("월");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cmbHolDay","staHolMonth:3","91","90","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_innerdataset("dsDay");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staHolDay","cmbHolDay:3","90","16","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("일");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calHolidayYMD","465","91","223","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","320","26","20",null,null,"4",null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.edtHoliNm","value","dsHolidayDetail","HOLIDAY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.cboUseYn","value","dsHolidayDetail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.cboType","value","dsHolidayDetail","HOLIDAY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.txtDetail","value","dsHolidayDetail","DESC_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.staRegNm","text","dsHolidayDetail","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.staRegDt","text","dsHolidayDetail","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.staModNm","text","dsHolidayDetail","MOD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.staModDt","text","dsHolidayDetail","MOD_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.cboSolLun","value","dsHolidayDetail","LUNAR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.cboRepeat","value","dsHolidayDetail","REPEAT_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM080.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    PM080.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.08.16
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.16      이동건             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_sHoliCd = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * PM080_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM080_onload = function(obj,e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
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
        	//검색조건
        	var objDivSearch = this.divSearch.form;
        	take.tranSelect(this, "ProjectInfo", "ProjectManagement.projectInfoCode", "", "dsProjectInfo", "", "fnCallback");
        	take.tranCode(this, ["00009", "00009","00013","00012"], ["dsUseYn","dsRepeatYn","dsHolidayType","dsLunar"], "ALL", "fnCallback");
        };

        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            this.dsHolidayList.clearData();
        	this.dsHolidayDetail.clearData();

        	//공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Transation id";
        	var objDivSearch 			= this.divSearch.form;
        	var sProjectNm 				= take.nvl(objDivSearch.cboProjectNm.value,"");
        	var nHolidayFrom 			= take.nvl(objDivSearch.cboFrHolidt.value,"");
        	var nHolidayTo				= take.nvl(objDivSearch.cboToHolidt.value,"");
        	var schedule_search_month 	= take.nvl(objDivSearch.cboMonthSearch.value,"");
        	var bUseYn 					= take.nvl(objDivSearch.cboUseYn.value,"");

         	takeval.add(this, "Search", this.divSearch.form.cboProjectNm, "프로젝트명", "value", true, "string", "", "");
         	if(!takeval.check(this, "Search")) return;

            take.tranSelect(this
        		, "holidayList"
        		, "ProjectManagement.projectHolidayList"
        		, ""
        		, "dsHolidayList"
        		,"PROJECT_CD='"+sProjectNm
        		+"' START_DATE='"+nHolidayFrom
        		+"' END_DATE='"+nHolidayTo
        		+"' USE_YN='"+bUseYn
        		+"' SCHEDULE_SEARCH_MONTH ='"+schedule_search_month+"'"
        	, "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "saveHoliday";
        	this.dsSearch.clearData();
        	var objDivDetail = this.divDetail.form;
        	var sHolMonth, sHolDay, sOrgMd;

        	takeval.add(this, "Save", objDivDetail.cboType,  		this.divDetail.form.staTypeTstaHoliDtT.text		, "value", true, "string", "", "");
        	takeval.add(this, "Save", objDivDetail.cboRepeat,  		this.divDetail.form.staRepeatT.text				, "value", true, "string", "", "");
        	takeval.add(this, "Save", objDivDetail.edtHoliNm,  		this.divDetail.form.staHoliNmT.text				, "value", true, "string", "", "");

        	//this.dsHolidayDetail.setColumn(0,"ML_CD", sMl_cd);
        	//this.dsHolidayDetail.setColumn(0,"PROJECT_CD", "PM00000001");

        	//add 된 validation 날리기
        	//takeval.getGroupList()를 통해서 찾고 있다면 지우기
        	//takeval.getFindObjValidator를 통해서도 아이디를 찾을 수도 있음
        	//takeval.remove(); 사용하기

        	if(this.divDetail.form.cboRepeat.value == "Y"){
        		takeval.add(this, "Save", objDivDetail.cmbHolMonth,  	this.divDetail.form.staHoliDtT.text,		"value", true, "string", "", "");
        		takeval.add(this, "Save", objDivDetail.cmbHolDay,  		this.divDetail.form.staHoliDtT.text,		"value", true, "string", "", "");
        		sHolMonth 	= objDivDetail.cmbHolMonth.value;
        		sHolDay 	= objDivDetail.cmbHolDay.value;

        		//반복이 되면 매년 진행이기 때문에 "YYYY- > 9999"
        		sOrgMd = sHolMonth + sHolDay;
        		sOrgMd = "9999"+sOrgMd;
        		this.dsHolidayDetail.setColumn(0,"HOLIDAY_YMD", sOrgMd);

        		//일정관리 테이블에 넣기위한 데이터
        		this.dsSearch.addRow();
        		this.dsSearch.setColumn(0,"ALLDAY_YN"			,"Y"); //반복
        		this.dsSearch.setColumn(0,"CATEGORY_CD"			,"A"); // C:회사 , T: 팀, P:개인, A:공휴일(반복)
        		this.dsSearch.setColumn(0,"SCHEDULE_START_DATE"	,sOrgMd);
        		this.dsSearch.setColumn(0,"SCHEDULE_START_TIME"	,"9999");
        		this.dsSearch.setColumn(0,"SCHEDULE_END_DATE"	,sOrgMd);
        		this.dsSearch.setColumn(0,"SCHEDULE_END_TIME"	,"9999");
        		var sScheduleNm = objDivDetail.edtHoliNm.value;
        		this.dsSearch.setColumn(0,"SCHEDULE_TITLE"		,take.nvl(sScheduleNm, ""));
        		this.dsSearch.setColumn(0,"SCHEDULE_TXT"		,take.nvl(sScheduleNm, ""));
        		this.dsSearch.setColumn(0,"SCHEDULE_PLACE"		,"");
        		this.dsSearch.setColumn(0,"SCHEDULE_PARTICIPANT","");
        	}else{
        		takeval.add(this, "Save", objDivDetail.calHolidayYMD,  	this.divDetail.form.staHoliDtT.text,		"value", true, "string", "", "");
        		sOrgMd = objDivDetail.calHolidayYMD.value;
        		this.dsHolidayDetail.setColumn(0,"HOLIDAY_YMD", sOrgMd);
        	}

        	if(!takeval.check(this, "Save")) return;
        	//var sProjectCd 	= UXBooster.av_sProjectCd;
        	//var nRow 		= this.divDetail.form.grdHolidayList.getSelectedRows();
        	//var sProjectCd 	= this.dsHolidayList.getColumn(nRow, "PROJECT_CD");
        	var sProjectCd 	= take.nvl(this.divSearch.form.cboProjectNm.value,"");

        	//국가 공휴일 및 회사공휴일인 경우에는 캘린더 테이블에 데이터 저장 필요
        	if(true){
        		take.tranSave(this, sTranId, "ProjectManagement.projectHoliday", "dsHolidayDetail", "", "PROJECT_CD='"+sProjectCd+"'", "fnCallback");
        	}else{
        	//기타 공휴일인 경우
        		take.tranSave(this, sTranId, "ProjectManagement.projectHoliday", "dsHolidayDetail", "", "PROJECT_CD='"+sProjectCd+"'", "fnCallback");
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
            this.dsHolidayDetail.clearData();
        	this.dsHolidayDetail.addRow();
        	var objDivDetail = this.divDetail.form;
        	//objDivDetail.mskHolidt.set_value("");
        	objDivDetail.cboType.set_value("01");
        	objDivDetail.cboSolLun.set_value("S");
        	objDivDetail.cboUseYn.set_value("Y");
        	objDivDetail.cboRepeat.set_value("Y");
        	this.fnSwitchRepeat(true);
        	objDivDetail.cmbHolMonth.set_value("");
        	objDivDetail.cmbHolDay.set_value("");
        	objDivDetail.calHolidayYMD.set_value("")
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

        	var nRow = this.dsHolidayList.rowposition;
        	var nSelHoli = this.dsHolidayList.getColumn(nRow, "HOLIDAY_NM");
        	var bolConfirm = take.confirm(this, "question", "MS00000071");
        	//take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : nSelHoli, text : "삭제"});

        	var objDsHoliDetail = this.dsHolidayDetail;
        	if(bolConfirm){
        		objDsHoliDetail.set_enableevent(false);
        		objDsHoliDetail.set_updatecontrol(false);
        		objDsHoliDetail.setRowType(0, 8);
        		objDsHoliDetail.set_enableevent(true);
        		objDsHoliDetail.set_updatecontrol(true);
        		take.tranSave(this, "HoliDelete", "ProjectManagement.projectHoliday", "dsHolidayDetail", "", "HOLIDAY_CD='"+this.fv_sHoliCd+"'", "fnCallback");
        	}
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.grdHolidayList_onselectchanged = function(obj,e)
        {
        	var nRow = e.row;
        	var sProjCd = this.dsHolidayList.getColumn(nRow, "PROJECT_CD");
        	//var sHoliCd = this.dsHolidayList.getColumn(nRow, "HOLIDAY_CD");
        	this.fv_sHoliCd = this.dsHolidayList.getColumn(nRow, "HOLIDAY_CD");

        	take.tranSelect(this, "holidayDetail", "ProjectManagement.projectHolidayDetail", "", "dsHolidayDetail",
        		"PROJECT_CD='"+take.nvl(sProjCd, "")
        		+"' HOLIDAY_CD='"+take.nvl(this.fv_sHoliCd, "")+"'"
        	, "fnCallback"
        	);
        };

        this.divDetail_cboRepeat_onitemchanged = function(obj,e)
        {
        	var objDetailForm = this.divDetail.form;
        	var nMonth = take.getTodayTime().month;
        	var nDay = take.getTodayTime().day;
        	var nYMD = take.getTodayTime().date;

        	if(e.postvalue == "Y"){
        		this.fnSwitchRepeat(true);
        		this.divDetail.form.cmbHolMonth.set_value(nMonth);
        		this.divDetail.form.cmbHolDay.set_value(nDay);
        	}else{
        		this.fnSwitchRepeat(false);
        		this.divDetail.form.calHolidayYMD.set_value(nYMD);
        	}
        };

        this.dsHolidayList_onrowposchanged = function(obj,e)
        {
        	this.dsHolidayList.getColumn(this.dsHolidayList.rowposition, "");
        };

        this.divDetail_btnMultiLang_onclick = function(obj,e)
        {
        	take.openPopup(this, "addMultiLanguage", "biz::sys/OM010P06.xfdl", null, "", "fnPopCallback", false);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnSetDateFormat = function (nRow, sType)
        {
        	var sDate  	= this.dsHolidayList.getColumn(nRow, "HOLIDAY_YMD");
        	var sLunar  = this.dsHolidayList.getColumn(nRow, "LUNAR_CD");
        	sLunar = sLunar == "S" ? "양력" : "음력";

        	if(sDate.substr(0,4) == "9999"){
        		sDate		= sDate.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$2-$3');
        	}else{
        		sDate		= sDate.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
        	}

        	if(sType == "DATE"){
        		return sDate;
        	}else{
        		return sLunar;
        	}
        };

        this.fnSwitchRepeat = function (bolRepeat)
        {
        	var objDetailForm = this.divDetail.form;

        	if(bolRepeat){
        		objDetailForm.cmbHolMonth.set_visible(true);
        		objDetailForm.cmbHolDay.set_visible(true);
        		objDetailForm.staHolMonth.set_visible(true);
        		objDetailForm.staHolDay.set_visible(true);
        		objDetailForm.calHolidayYMD.set_visible(false);
        	}else{
        		objDetailForm.cmbHolMonth.set_visible(false);
        		objDetailForm.cmbHolDay.set_visible(false);
        		objDetailForm.staHolMonth.set_visible(false);
        		objDetailForm.staHolDay.set_visible(false);
        		objDetailForm.calHolidayYMD.set_visible(true);
        	}
        };
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
                case "ProjectInfo":
        			var bolAdminYn = UXBooster.gdsUserInfo.getColumn(0,"ADMIN_YN");
        			if(bolAdminYn == "Y"){
        				this.divSearch.form.cboProjectNm.set_enable(true);
        			}else{
        				this.divSearch.form.cboProjectNm.set_enable(false);
        			}
        			this.divSearch.form.cboProjectNm.set_value(UXBooster.av_sProjectCd);
        			this.fnSearch();
         		break;

        		case "holidayList" : //조회 콜백
                    this.dsHolidayDetail.clearData();
        			var nRow = 0;
        			var objDsHoliday = this.dsHolidayList;
        			var sProjCd = objDsHoliday.getColumn(nRow, "PROJECT_CD");
        			var sHoliCd = objDsHoliday.getColumn(nRow, "HOLIDAY_CD");
        			take.tranSelect(this, "holidayDetail", "ProjectManagement.projectHolidayDetail", "", "dsHolidayDetail",
        				"PROJECT_CD='"+take.nvl(sProjCd, "")
        				+"' HOLIDAY_CD='"+take.nvl(sHoliCd, "")+"'"
        				, "fnCallback");
                break;
        		case "holidayDetail":
        			var objDsHoliday = this.dsHolidayList;
        			var nDsCnt 	= objDsHoliday.rowcount;
        			var sHolMonth, sHolDay;
        			//this.divDetail.form.staHolidayListT.set_text("공휴일 목록 ("+nDsCnt+"건)");
        			var nRow 		= objDsHoliday.rowposition;
        			var bolRepeat 	= objDsHoliday.getColumn(nRow, "REPEAT_YN");
        			var nDt			= objDsHoliday.getColumn(nRow, "HOLIDAY_YMD");
        			var objDetailForm = this.divDetail.form;
        			if(bolRepeat == "Y"){
        				nDt = nDt.substr(4,4);
        				this.fnSwitchRepeat(true);
        				sHolMonth = nDt.substr(0,2);
        				sHolDay = nDt.substr(2,2);
        				this.divDetail.form.cmbHolMonth.set_value(sHolMonth);
        				this.divDetail.form.cmbHolDay.set_value(sHolDay);
        // 				objDetailForm.mskHolidt.set_format("##-##");
        // 				objDetailForm.mskHolidt.set_value(nDt);
        			}else{
        				this.fnSwitchRepeat(false);
        				this.divDetail.form.calHolidayYMD.set_value(nDt);
        // 				objDetailForm.mskHolidt.set_format("####-##-##");
        // 				objDetailForm.mskHolidt.set_value(nDt);
        			}
        			//다국어 셋팅
        			this.dsProgMultiLangDetail.clearData();
        			var sMlCd = this.dsHolidayDetail.getColumn(nRow, "ML_CD");
        			take.tranSelect(this, "multilanguageDetailList", "SystemCommon.multilanguageDetailList", "", "dsProgMultiLangDetail", "sMlCd='" + sMlCd + "'", "fnCallback");
        		break;

                case "saveHoliday" : //조회 콜백
        			//take.tranSave(this, "saveToCalendar", "ScheduleManagement.scheduleInfo", "dsSearch", "", "PROJECT_CD='"+sProjectCd+"'", "fnCallback");
        			this.fnSearch();
        			break;

                case "codetran.multi" :  //저장 콜백
        			this.divSearch.form.cboUseYn.set_index(0);
                    break;

                case "HoliDelete" :  //저장 콜백
                    this.fnSearch();
                    break;
        		case "saveToCalendar":
        			this.fnSearch();
        			break;
                default :
                    break;
            }
        }

        this.fnPopCallback = function (sId, nReturnVal)
        {
        	switch(sId) {
        	case "addMultiLanguage":
        		//팝업이 닫히면서 nReturnVal을 통해 값을 받을 수 있습니다
        		if(take.nvl(nReturnVal, "") != "") {
        			nReturnVal = nReturnVal.split(",")[0];
        			this.dsHolidayDetail.setColumn(0, "ML_CD", nReturnVal);
        		}else return;

        		// 선택된 row의 다국어 정보 조회
        		this.dsProgMultiLangDetail.clearData();
        		take.tranSelect(this, "multilanguageDetailList", "SystemCommon.multilanguageDetailList", "", "dsProgMultiLangDetail", "sMlCd='" + nReturnVal + "'", "fnCallback");

        		break;
        	default:
        	}
        };
        this.divSearch_cboUseYn_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM080_onload,this);
            this.divDetail.form.grdHolidayList.addEventHandler("onselectchanged",this.grdHolidayList_onselectchanged,this);
            this.divDetail.form.btnMultiLang.addEventHandler("onclick",this.divDetail_btnMultiLang_onclick,this);
            this.divDetail.form.cboRepeat.addEventHandler("onitemchanged",this.divDetail_cboRepeat_onitemchanged,this);
            this.dsHolidayList.addEventHandler("onrowposchanged",this.dsHolidayList_onrowposchanged,this);
        };
        this.loadIncludeScript("PM080.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
