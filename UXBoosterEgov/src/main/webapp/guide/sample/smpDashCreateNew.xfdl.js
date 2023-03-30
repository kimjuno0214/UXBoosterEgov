(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpDashCreateNew");
            this.set_titletext("대시보드 동적 생성기");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,685);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDashType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">1 X 1</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">1 X 2</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">1 X 3</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">1 X 4</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">2 X 1</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">2 X 2</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">2 X 3</Col></Row><Row><Col id=\"CODE\">24</Col><Col id=\"NAME\">2 X 4</Col></Row><Row><Col id=\"CODE\">31</Col><Col id=\"NAME\">3 X 1</Col></Row><Row><Col id=\"CODE\">32</Col><Col id=\"NAME\">3 X 2</Col></Row><Row><Col id=\"CODE\">33</Col><Col id=\"NAME\">3 X 3</Col></Row><Row><Col id=\"CODE\">34</Col><Col id=\"NAME\">3 X 4</Col></Row><Row><Col id=\"CODE\">41</Col><Col id=\"NAME\">4 X 1</Col></Row><Row><Col id=\"CODE\">42</Col><Col id=\"NAME\">4 X 2</Col></Row><Row><Col id=\"CODE\">43</Col><Col id=\"NAME\">4 X 3</Col></Row><Row><Col id=\"CODE\">44</Col><Col id=\"NAME\">4 X 4</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REF1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">선택</Col></Row><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">리스트(Grid)</Col><Col id=\"REF1\">grid</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">Web link</Col><Col id=\"REF1\">link</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">Bar chart</Col><Col id=\"REF1\">chart</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">Static chart</Col><Col id=\"REF1\">chart</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">Line chart</Col><Col id=\"REF1\">chart</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">Pie chart</Col><Col id=\"REF1\">chart</Col></Row><Row><Col id=\"NAME\">Donut chart</Col><Col id=\"CODE\">08</Col><Col id=\"REF1\">chart</Col></Row><Row><Col id=\"NAME\">Radar chart</Col><Col id=\"CODE\">09</Col><Col id=\"REF1\">chart</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTextCont", this);
            obj._setContents("<ColumnInfo><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfoType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">Mapper Id</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDateType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REF1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">현재일</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">전일</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">익일</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">당월</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">전월</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">익월</Col><Col id=\"REF1\"/></Row><Row><Col id=\"NAME\">당년</Col><Col id=\"REF1\"/><Col id=\"CODE\">06</Col></Row><Row><Col id=\"NAME\">전년</Col><Col id=\"REF1\"/><Col id=\"CODE\">07</Col></Row><Row><Col id=\"NAME\">익년</Col><Col id=\"REF1\"/><Col id=\"CODE\">08</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUnitType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REF1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">원</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">천원</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">만원</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">백만원</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">천만원</Col><Col id=\"REF1\"/></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">억원</Col><Col id=\"REF1\"/></Row><Row><Col id=\"NAME\">EA</Col><Col id=\"REF1\"/><Col id=\"CODE\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">g</Col></Row><Row><Col id=\"NAME\">kg</Col><Col id=\"REF1\"/><Col id=\"CODE\">08</Col></Row><Row><Col id=\"NAME\">m</Col><Col id=\"CODE\">09</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">km</Col></Row><Row><Col id=\"NAME\">l</Col><Col id=\"REF1\"/><Col id=\"CODE\">11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDashCont", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VIEWMAPID\" type=\"STRING\" size=\"256\"/><Column id=\"INFOMAPID\" type=\"STRING\" size=\"256\"/><Column id=\"INFODATE\" type=\"STRING\" size=\"256\"/><Column id=\"INFOUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXTCONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"OPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"7",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","0","2",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","0","45",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,null,"57","23","20","22",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnCheck",null,null,"57","23","80","22",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","540","0","20",null,null,"59",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","20","20","520",null,null,"64",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staInfoUnitBg","118","146","402","31",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staInfoDateBg","118","116","402","31",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staVewMapIdBg","118","56","402","31",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divLeft.addChild(obj.name, obj);

            obj = new Edit("edtVewMapId","126","61","389","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("16");
            obj.set_displaynulltext("Sample.sampleSelect");
            obj.set_cssclass("edt_WF_essential");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staVewMapIdT","0","56","120","31",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("19");
            obj.set_text("뷰 데이터");
            obj.set_cssclass("sta_WF_th01L");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staTitleL","0","0","400","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("0");
            obj.set_text("컨텐츠 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("Static32_00","-1","21","47","5",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("1");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staContTypeBg","118","26","402","31",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staContTypeT","0","26","120","31",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("3");
            obj.set_text("컨텐츠 유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staInfoGbnBg","118","86","402","31",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staTextContT","0","176","120","307",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("6");
            obj.set_text("텍스트 컨텐츠\r\n(최대 8개)\r\n\r\n가로 1 : 2개 이하\r\n가로 2 : 4개 이하\r\n가로 3 : 6개 이하\r\n가로 4 : 8개 이하");
            obj.set_cssclass("sta_WF_th01L");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staTextContBg","118","176","402","307",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staOptionT","0","482","120",null,null,"0",null,null,null,null,this.divLeft.form);
            obj.set_taborder("8");
            obj.set_text("Option");
            obj.set_cssclass("sta_WF_th01L");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staOptionBg","118","482","402",null,null,"0",null,null,null,null,this.divLeft.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divLeft.addChild(obj.name, obj);

            obj = new Grid("grdTextCont","126","205",null,"273","5",null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("10");
            obj.set_binddataset("dsTextCont");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"67\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"텍스트\"/><Cell col=\"2\" text=\"값\"/><Cell col=\"3\" text=\"단위\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TEXT\"/><Cell col=\"2\" text=\"bind:VALUE\"/><Cell col=\"3\" text=\"bind:UNIT\"/></Band></Format></Formats>");
            this.divLeft.addChild(obj.name, obj);

            obj = new TextArea("txtOption","126","487",null,null,"5","4",null,null,null,null,this.divLeft.form);
            obj.set_taborder("11");
            this.divLeft.addChild(obj.name, obj);

            obj = new Combo("cmbContType","126","31","150","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsContType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("리스트(Grid)");
            obj.set_index("1");
            this.divLeft.addChild(obj.name, obj);

            obj = new Edit("edtInfoMapId","279","91","236","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("13");
            obj.set_displaynulltext("Sample.sampleSelect");
            obj.set_enable("false");
            obj.set_text("ㅁㄶㄹㄴㅁㅎ");
            this.divLeft.addChild(obj.name, obj);

            obj = new Button("btnTextContUp","469","181","21","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_up");
            this.divLeft.addChild(obj.name, obj);

            obj = new Button("btnTextContDown","493","181","21","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_down");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staInfoDateT","126","121","60","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("18");
            obj.set_text("기준일");
            obj.set_enable("false");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staInfoUnitT","126","151","60","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("20");
            obj.set_text("단위/출처");
            obj.set_enable("false");
            this.divLeft.addChild(obj.name, obj);

            obj = new Edit("edtInfoDate","279","121","236","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.divLeft.addChild(obj.name, obj);

            obj = new Combo("cmbInfoGbn","196","91","80","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsInfoType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("직접선택");
            obj.set_value("00");
            obj.set_index("0");
            this.divLeft.addChild(obj.name, obj);

            obj = new Edit("edtInfoUnit","279","151","236","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.divLeft.addChild(obj.name, obj);

            obj = new Combo("cmbInfoDateType","196","121","80","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("24");
            obj.set_innerdataset("dsDateType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("현재일");
            obj.set_value("00");
            obj.set_index("0");
            this.divLeft.addChild(obj.name, obj);

            obj = new Combo("cmbInfoUnitType","196","151","80","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsUnitType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("천원");
            obj.set_value("01");
            obj.set_index("1");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staInfoGbnT","126","91","60","21",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("28");
            obj.set_text("구분");
            obj.set_enable("false");
            this.divLeft.addChild(obj.name, obj);

            obj = new Static("staInfoT","0","86","120","91",null,null,null,null,null,null,this.divLeft.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_text("기준 정보");
            this.divLeft.addChild(obj.name, obj);

            obj = new Div("divRight","560","20",null,null,"20","65",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("staSizeBg","130","26",null,"31","0",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("staTitleR","0","0","450","21",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("0");
            obj.set_text("미리보기");
            obj.set_cssclass("sta_WF_title02");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static32","0","41","47","5",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("1");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("staSizeT","0","26","132","31",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("2");
            obj.set_text("화면 사이즈 (W*H)");
            obj.set_cssclass("sta_WF_th01L");
            this.divRight.addChild(obj.name, obj);

            obj = new Edit("edtW","198","31","50","21",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("3");
            obj.set_value("396");
            obj.set_textAlign("center");
            obj.set_text("396");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("staSizeX","248","31","17","21",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("4");
            obj.set_text("X");
            obj.set_cssclass("sta_WF_AlignC");
            obj.set_textAlign("center");
            this.divRight.addChild(obj.name, obj);

            obj = new Edit("edtH","265","31","50","21",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("5");
            obj.set_value("410");
            obj.set_textAlign("center");
            obj.set_text("410");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("staSizeInfo","390","30",null,"21","0",null,null,null,null,null,this.divRight.form);
            obj.set_taborder("6");
            obj.set_text("Drag 또는 사이즈를 입력해서 리사이즈 해보세요.");
            this.divRight.addChild(obj.name, obj);

            obj = new Static("Static22_00_01","50","57","57","5",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("9");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divRight.addChild(obj.name, obj);

            obj = new Div("divBase","0","62",null,null,"0","0",null,null,null,null,this.divRight.form);
            obj.set_taborder("8");
            obj.set_background("whitesmoke");
            this.divRight.addChild(obj.name, obj);

            obj = new Button("btnW","396","0","5","410",null,null,null,null,null,null,this.divRight.form.divBase.form);
            obj.set_taborder("1");
            obj.set_cursor("w-resize");
            obj.set_background("black");
            this.divRight.form.divBase.addChild(obj.name, obj);

            obj = new Button("btnH","0","410",null,"5","btnW:0",null,null,null,null,null,this.divRight.form.divBase.form);
            obj.set_taborder("2");
            obj.set_cursor("n-resize");
            obj.set_background("black");
            this.divRight.form.divBase.addChild(obj.name, obj);

            obj = new Div("divDashView","0","0",null,null,"btnW:0","btnH:0",null,null,null,null,this.divRight.form.divBase.form);
            obj.set_taborder("0");
            obj.set_text("대시보드 미리보기");
            obj.set_border("1px solid");
            this.divRight.form.divBase.addChild(obj.name, obj);

            obj = new Button("btnWH","btnH:0","btnW:0","5","5",null,null,null,null,null,null,this.divRight.form.divBase.form);
            obj.set_taborder("3");
            obj.set_cursor("move");
            obj.set_background("green");
            this.divRight.form.divBase.addChild(obj.name, obj);

            obj = new Combo("cmbDashType","staSizeT:6","31","57","21",null,null,null,null,null,null,this.divRight.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDashType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("1 X 2");
            obj.set_value("12");
            obj.set_index("1");
            this.divRight.addChild(obj.name, obj);

            obj = new PopupDiv("pDivHelp","1216","133","374","227",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtHelp","6","4",null,null,"6","4",null,null,null,null,this.pDivHelp.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.pDivHelp.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLeft.form
            obj = new Layout("default","",0,0,this.divLeft.form,function(p){});
            this.divLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divBase.form.divDashView
            obj = new Layout("default","",0,0,this.divRight.form.divBase.form.divDashView.form,function(p){});
            this.divRight.form.divBase.form.divDashView.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form.divBase.form
            obj = new Layout("default","",0,0,this.divRight.form.divBase.form,function(p){});
            this.divRight.form.divBase.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRight.form
            obj = new Layout("default","",0,0,this.divRight.form,function(p){});
            this.divRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDivHelp.form
            obj = new Layout("default","",0,0,this.pDivHelp.form,function(p){});
            this.pDivHelp.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,685,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divLeft.form.cmbContType","value","dsDashCont","CONTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divLeft.form.edtVewMapId","value","dsDashCont","VIEWMAPID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divLeft.form.edtInfoMapId","value","dsDashCont","INFOMAPID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divLeft.form.txtOption","value","dsDashCont","OPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpDashCreateNew.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
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
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
           }
        }

        /****************************************************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow, fnExcel, fnPrint)
        ****************************************************************************************/
        //N/A

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //컨텐츠 타입 콤보 변경 이벤트
        this.divLeft_cmbContType_onitemchanged = function(obj,e)
        {
        	var nRow;
            var objStaOpt, objTxtOpt;
            var sType, sText, sCss;

            nRow = take.nvl(e.postindex, 0);

            if (nRow>0)
            {
                sType = take.nvl(obj.getInnerDataset().getColumn(nRow,"REF1"), "");

                objStaOpt = this.divLeft.form.staOptionT;
                objTxtOpt = this.divLeft.form.txtOption;

                if (sType!="")
                {
                    if (sType=="grid")
                    {
                        sText = "Grid\ncolumn";
                        sCss = "";
                    } else if (sType=="chart") {
                        sText = "Chart\noption";
                        sCss="";
                    } else if(sType=="link") {
                        sText = "Link url";
                        sCss = "txt_WF_essential";
                    }

                    objStaOpt.set_text(sText);
                    objTxtOpt.set_css(sCss);
                    objTxtOpt.set_displaynulltext(sSample);
                }


            }
        };

        //기준 정보 구분 콤보 변경 이벤트
        this.divLeft_cmbInfoGbn_onitemchanged = function(obj,e)
        {
        	var sGbn;
            var objMapId, objDate, objUnit;

            sGbn = take.nvl(e.postvalue,"");

            objMapId = this.divLeft.form.edtInfoMapId;
            objDate = this.divLeft.form.cmbInfoDateType;
            objUnit = this.divLeft.form.cmbInfoUnitType;

            if (sGbn!="")
            {
                objMapId.set_enable(true);
                objDate.set_enable(false);
                objUnit.set_enable(false);
            } else {
                objMapId.set_enable(false);
                objDate.set_enable(true);
                objUnit.set_enable(true);
            }


            this.divLeft.form.edtInfoDate.set_enable(false);
            this.divLeft.form.edtInfoUnit.set_enable(false);
        };

        //기준 정보 기준일,단위/출처 콤보 변경 이벤트
        this.divLeft_cmbInfoType_onitemchanged = function(obj,e)
        {
            var sGbn;
            var objEdt;

        	sGbn = take.nvl(e.postvalue,"");

            if (obj.name=="cmbInfoDateType")
            {
                objEdt = this.divLeft.form.edtInfoDate;
            } else {
                objEdt = this.divLeft.form.edtInfoUnit;
            }

            if (sGbn=="")
            {
                objEdt.set_enable(true);
            } else {
                objEdt.set_enable(false);
            }
        };

        //text contents 순서 이동 버튼 클릭 이벤트
        this.divLeft_btnTextCont_onclick = function(obj,e)
        {
            var sGbn;
        	var nCRow, nNRow, nCnt;
            var objGrid, objDs;

            sGbn = obj.name.substr(11);

            objGrid = this.divLeft.form.grdTextCont;
            objDs = this.dsTextCont;

            nCnt = objDs.rowcount;

            if (nCnt>0)
            {
                nCRow = objDs.rowposition;

                if (sGbn=="Up")
                {
                    if (nCRow>0) nNRow = nCRow--;
                } else {
                    if (nCRow<nCnt) nNRow = nCRow++;
                }

                objDs.set_rowpostion(nNRow);
            }
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
            var objBase;

            sGbn = e.userdata;

            objBase = this.divRight.form.divBase.form;

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

            objDashView = this.divRight.form.divBase.form.divDashView;
            this.divRight.form.edtW.set_value(objDashView.getOffsetWidth());
            this.divRight.form.edtH.set_value(objDashView.getOffsetHeight());
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

            this.divRight.form.edtW.set_value(nW);
            this.divRight.form.edtH.set_value(nH);

        	this.fnDashViewResize();
        };



        this.dsDashCont_oncolumnchanged = function(obj,e)
        {
        	var objDiv = this.divRight.form.divBase.form.divDashView;

        	objDiv.set_url("");
            objDiv.set_url("frm::dbc/dbcComDash.xfdl");
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnInit : 컨텐츠 미리보기 리사이즈
         * @param  {N/A}
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
            var objInfoTypeDs, objDateTypeDs, objUnitTypeDs;
            var sText;

            objInfoTypeDs = this.dsInfoType;
            objDateTypeDs = this.dsDateType;
            objUnitTypeDs = this.dsUnitType;

            sText = takedomain.getFindDomainId(this,"직접선택");

            //기준 정보 입력 구분
            nRow = objInfoTypeDs.insertRow(0);
            objInfoTypeDs.setColumn(nRow, "CODE", "");
            objInfoTypeDs.setColumn(nRow, "NAME", sText);

            sText = takedomain.getFindDomainId(this,"직접입력");

            //기준정보 기준일
            nRow = objDateTypeDs.addRow();
            objDateTypeDs.setColumn(nRow, "CODE", "");
            objDateTypeDs.setColumn(nRow, "NAME", sText);

            //기준정보 단위
            nRow = objUnitTypeDs.addRow();
            objUnitTypeDs.setColumn(nRow, "CODE", "");
            objUnitTypeDs.setColumn(nRow, "NAME", sText);
        }

        /**
         * fnDashViewResize : 컨텐츠 미리보기 리사이즈
         * @param  {N/A}
         * @example this.fnDashViewResize();
         */
        this.fnDashViewResize = function()
        {
            var objDiv, objBase;
            var nW, nH, nMaxW, nMaxH;

            objDiv = this.divRight.form.divBase;
            objBase = objDiv.form;

            nW = nexacro.toNumber(this.divRight.form.edtW.value);
            nH = nexacro.toNumber(this.divRight.form.edtH.value);
            nMaxW = objDiv.getOffsetWidth()-nexacro.toNumber(objBase.btnW.width);
            nMaxH =objDiv.getOffsetHeight()-nexacro.toNumber(objBase.btnH.height);

            if (nW>nMaxW || nW<1)
            {
                alert("현재 가능한 Width는 1 ~ "+ nMaxW+" 입니다.");
                nW = nMaxW;
                this.divRight.form.edtW.set_value(nW);
            }

            objBase.btnW.set_left(nW);

            if (nH>nMaxH || nH<1)
            {
                alert("현재 가능한 Height는 1 ~ "+ nMaxH+" 입니다.");
                nH = nMaxH;
                this.divRight.form.edtH.set_value(nH);
            }

             objBase.btnH.set_top(nH);
             objBase.btnW.set_height(nH);

            objBase.resetScroll();
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callBack
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
                case "Transation id 01" : //조회 콜백
                    //Script
                    break;
                case "Transation id 02" :  //조회 콜백
                    //Script
                    break;
                case "Transation id 03" : //조회 콜백
                    //Script
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




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divLeft.form.cmbContType.addEventHandler("onitemchanged",this.divLeft_cmbContType_onitemchanged,this);
            this.divLeft.form.btnTextContUp.addEventHandler("onclick",this.divLeft_btnTextCont_onclick,this);
            this.divLeft.form.btnTextContDown.addEventHandler("onclick",this.divLeft_btnTextCont_onclick,this);
            this.divLeft.form.cmbInfoGbn.addEventHandler("onitemchanged",this.divLeft_cmbInfoGbn_onitemchanged,this);
            this.divLeft.form.cmbInfoDateType.addEventHandler("onitemchanged",this.divLeft_cmbInfoType_onitemchanged,this);
            this.divLeft.form.cmbInfoUnitType.addEventHandler("onitemchanged",this.divLeft_cmbInfoType_onitemchanged,this);
            this.divRight.form.edtW.addEventHandler("onkeydown",this.divRight_edt_onkeydown,this);
            this.divRight.form.edtW.addEventHandler("onkillfocus",this.divRight_edt_onkillfocus,this);
            this.divRight.form.edtH.addEventHandler("onkeydown",this.divRight_edt_onkeydown,this);
            this.divRight.form.edtH.addEventHandler("onkillfocus",this.divRight_edt_onkillfocus,this);
            this.divRight.form.divBase.addEventHandler("ondragmove",this.divRight_divBase_ondragmove,this);
            this.divRight.form.divBase.form.btnW.addEventHandler("ondrag",this.divRight_divBase_btn_ondrag,this);
            this.divRight.form.divBase.form.btnH.addEventHandler("ondrag",this.divRight_divBase_btn_ondrag,this);
            this.divRight.form.divBase.form.btnWH.addEventHandler("ondrag",this.divRight_divBase_btn_ondrag,this);
            this.divRight.form.cmbDashType.addEventHandler("onitemchanged",this.divRight_cmbDashType_onitemchanged,this);
            this.dsDashType.addEventHandler("onrowposchanged",this.dsDash_onrowposchanged,this);
            this.dsDashCont.addEventHandler("oncolumnchanged",this.dsDashCont_oncolumnchanged,this);
        };
        this.loadIncludeScript("smpDashCreateNew.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
