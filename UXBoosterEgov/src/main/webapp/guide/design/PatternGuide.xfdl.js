(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PatternGuide");
            this.set_titletext("PatternGuide");
            if (Form == this.constructor)
            {
                this._setFormPosition(1210,3400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Combo", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">전체</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">가</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">가나</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">가나다</Col><Col id=\"lev\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Grid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"STRING\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"순번\">1</Col><Col id=\"Column05\">가</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">전체</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">2</Col><Col id=\"Column05\">가나</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">3</Col><Col id=\"Column05\">가나다</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가나</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">4</Col><Col id=\"Column05\">가나다라</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가나다</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">5</Col><Col id=\"Column05\">가나다라마</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">6</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">7</Col><Col id=\"Column05\">가나다라마바사</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">8</Col><Col id=\"Column05\">가나다라마바사아</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">9</Col><Col id=\"Column05\">가나다라마바사아자</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row><Row><Col id=\"순번\">10</Col><Col id=\"Column05\">가나다라마바사아자차</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자차</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Tree", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Menu", this);
            obj._setContents("<ColumnInfo><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Caption\">2depth Menu01</Col><Col id=\"Id\">00001</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00002</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00003</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00004</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00005</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00006</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00007</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">2depth Menu02</Col><Col id=\"Id\">00008</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00009</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00010</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00011</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00012</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00013</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00014</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">2depth Menu03</Col><Col id=\"Id\">00015</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00016</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00017</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00018</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00019</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00020</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00021</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">2depth Menu04</Col><Col id=\"Id\">00022</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00023</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00024</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00025</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00026</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00027</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00028</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">2depth Menu05</Col><Col id=\"Id\">00029</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00030</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00031</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00032</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00033</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00034</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00035</Col><Col id=\"Level\">1</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("PopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idx\">1000</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1001</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1002</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1003</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"idx\">1004</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1005</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"idx\">1006</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1007</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1008</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1009</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1010</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1011</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1012</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1013</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"enable\">1</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나</Col><Col id=\"Column1\">12</Col></Row><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">123</Col></Row><Row><Col id=\"Column0\">가나다라</Col><Col id=\"Column1\">1234</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Grid04_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">가나다</Col><Col id=\"Column2\">가나다</Col><Col id=\"Column3\">가나다</Col><Col id=\"Column4\">가나다</Col></Row><Row><Col id=\"Column4\">가나다라</Col><Col id=\"Column3\">가나다라</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column0\">가나다라</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">가나다라마</Col><Col id=\"Column2\">가나다라마</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column4\">가나다라마</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Grid05", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static88","110","1150",null,"920","0",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","0","1150","111","920",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Detail");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","51","111","1100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Search");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","110","51",null,"1100","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"53","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Pattern KIT");
            obj.set_textAlign("center");
            obj.set_background("#2a3b97");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","2069","111","320",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Data Pattern");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","110","2069",null,"320","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","272","925","140","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("최소 width : 30px (2자)\r\n한 글자 늘어날 때 마다 +10px");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","150","2109","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(전화번호)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","-181","698","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","151","2135","61","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("010");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","215","2135","48","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","266","2135","48","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","151","2158","163","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("MIN W 163");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","203","2118","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","212","2135","3","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","253","2118","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","263","2135","3","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","368","2109","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("(달력)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","368","2135","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","566","2133","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","Calendar01:0","2133","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AlignC");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","Static14:0","2133","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","567","2157","219","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("MIN W219");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","566","2109","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("(기간)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","898","2109","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("(계좌번호)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","898","2133","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_value("1258");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","150","2207","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("(검색1)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","148","2227","128","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_value("search");
            obj.set_text("search");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","Edit01:2","2227","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_search04");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","Button00:2","2227","90","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","299","2227","3","21",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","289","2210","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","566","2205","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("(검색2)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","566","2225","128","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","Edit03:2","2225","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_search04");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","898","2205","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("(시간)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","898","2225","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_value("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","150","2292","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("(우편번호1)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","149","2315","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_value("123");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","222","2315","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_value("123");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","Edit06:3","2315","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_search04");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","368","2293","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("(우편번호2)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","368","2316","128","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_value("123");
            obj.set_text("123");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","Edit05:3","2316","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_search04");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","207","2315","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_AlignC");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","566","2293","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("(Dash정의)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","569","2316","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_AlignC");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","569","2340","15","25",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","597","2316","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AlignC");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","597","2340","15","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","626","2316","17","21",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_AlignC");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","626","2340","17","25",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("17");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","704","2292","109","16",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("(주민등록번호1)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","703","2316","75","21",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_value("885620");
            obj.set_text("885620");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","781","2316","75","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_value("******");
            obj.set_text("******");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","898","2292","109","16",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("(주민등록번호2)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","898","2316","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_value("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","164","920","30","21",null,null,"100",null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","164","946","40","21",null,null,"100",null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","164","972","50","21",null,null,"100",null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","164","998","60","21",null,null,"100",null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","164","1024","70","21",null,null,"100",null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","164","1050","80","21",null,null,"110",null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","151","140","1020","43",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("div_WF_searchBox02");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static00:-35","10","231","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","Combo00:50","10","80","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static05:-35","10","231","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static30","Edit11:50","10","80","21",null,null,"80",null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static30:30","10","218","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static33","296",null,"50","25",null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","622",null,"50","25",null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","296","0","50","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","622","0","50","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","1","0","20","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","1000",null,"20","25",null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("20");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","1000","0","20","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static31","151","117","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("- 1줄일때");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","152","158","20","25",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","206","156","10","25",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_Guide_Width2");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","196","189","30","15",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","360","135","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","339","141","25","10",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_Guide_Height2");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","149","225","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("- 2줄일때");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","149","340","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("- 3줄일때");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","125","140","25","43",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("43");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","151","184","1020","25",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_Guide_Width3");
            obj.set_text("1020");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","125","247","25","72",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("72");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","125","363","25","101",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("101");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","150","480","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("- 4줄일때");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","126","503","25","130",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("130");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","150","1185","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("- 1단일때");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static117","150","1343","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("- 2단일때");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static148","150","1474","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("- 3단일때");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static222","150","1729","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("가나");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static223","255","1734","200","15",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("7 글자 기준 최소Size (w120)");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_font("normal 11px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static224","150","1636","338","28",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("(Label Width Size 정의)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static225","158","1667","871","50",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("- 최소 8글자기준(w120)으로 한 글자씩 늘어날 때마다 12px가 늘어나며 예시 이외 글자 수가 많아질 경우 글자가 가려지지 않게 가변적으로 width값을 결정\r\n- 각 Label Width값은 다른줄의 Label Width값에 영향을 주지 않음 \r\r\n");
            obj.set_font("12px/18px normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static226","150","1768","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("가나다");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static227","150","1807","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("가나다라");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static228","150","1846","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("가나다라마");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static229","488","1729","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static230","488","1768","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("가나다라마바사");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static231","488","1807","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("가나다라마바사아");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static232","488","1846","132","29",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","665","1887","70","12",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("width : 144");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","339","171","25","11",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_Guide_Height2");
            this.addChild(obj.name, obj);

            obj = new Static("Static191","360","167","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("11");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","151","889","166","15",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("- 조회영역 텍스트(6자 이하)");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","151","247","1020","72",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("div_WF_searchBox02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","391","39","230","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","Edit01:51","39","110","21",null,null,"100",null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static01:0","39",null,"21","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","296",null,"50","25",null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static09","622",null,"50","25",null,"0",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","65","39","231","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","20","39","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06","Combo01:50","39","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo00","65","10","231","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","296","0","50","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","346","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit11","391","10","231","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","622","0","50","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static30","672","10","80","21",null,null,"80",null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","782","10","218","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","151","363","1020","101",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("div_WF_searchBox02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","391","10","231","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit01","391","39","231","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","65","10","231","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","346","10","80","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo01","65","39","231","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","20","39","80","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static06","346","39","80","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","20","68","80","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("12");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo02","65","68","231","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","346","68","80","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("14");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit03","391","68","231","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("15");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static11","672","68","110","21",null,null,"100",null,null,null,this.Div02.form);
            obj.set_taborder("16");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit04","782","68",null,"21","20",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("17");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static30","672","10","80","21",null,null,"80",null,null,null,this.Div02.form);
            obj.set_taborder("18");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit00","782","10","218","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("19");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","672","39","80","21",null,null,"80",null,null,null,this.Div02.form);
            obj.set_taborder("20");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div02.addChild(obj.name, obj);

            obj = new Edit("Edit02","782","39","218","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("21");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","296","0","50","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","296",null,"50","25",null,"0",null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static08","622","0","50","21",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static09","622",null,"50","25",null,"0",null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","151","503","1020","130",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("div_WF_searchBox02");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","65","10","231","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","Combo00:50","10","80","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit11","Static05:-35","10","231","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit01","391","39","231","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo01","65","39","231","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","20","39","80","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","346","39","80","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","20","68","80","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo02","65","68","231","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static10","346","68","80","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit03","391","68","231","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static11","672","68","110","21",null,null,"100",null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit04","782","68",null,"21","20",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static30","Edit11:50","10","80","21",null,null,"80",null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static30:30","11",null,"21","20",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("19");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","672","39","80","21",null,null,"80",null,null,null,this.Div03.form);
            obj.set_taborder("20");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit02","782","39",null,"21","20",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("21");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static12","20","97","80","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("22");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Combo("Combo03","65","97","231","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("23");
            obj.set_text("Combo00");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static13","346","97","80","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("24");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static14","672","97","110","21",null,null,"100",null,null,null,this.Div03.form);
            obj.set_taborder("25");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_textR");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit05","782","97",null,"21","20",null,null,null,null,null,this.Div03.form);
            obj.set_taborder("26");
            this.Div03.addChild(obj.name, obj);

            obj = new Edit("Edit06","391","97","231","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("27");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","296","0","50","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","296",null,"50","25",null,"0",null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","622","0","50","21",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static09","622",null,"50","25",null,"0",null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static79","156","77","369","25",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("1줄 추가 될때 28PX 씩 높이 증가");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","148","660","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("- 2단일때");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","124","682","26","72",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("72");
            this.addChild(obj.name, obj);

            obj = new Div("Div07","150","682","1020","72",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("div_WF_searchBox02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","391","10","231","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("9");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static30","Edit11:50","10","110","21",null,null,"100",null,null,null,this.Div07.form);
            obj.set_taborder("0");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_textR");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static30:0","10",null,"21","20",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("1");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit01","391","39","231","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("15");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static01","Edit01:50","39","110","21",null,null,"100",null,null,null,this.Div07.form);
            obj.set_taborder("2");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_textR");
            this.Div07.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static01:0","39",null,"21","20",null,null,null,null,null,this.Div07.form);
            obj.set_taborder("3");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("4");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div07.addChild(obj.name, obj);

            obj = new Combo("Combo00","65","10","231","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static03","296","0","50","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("6");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static04","296",null,"50","25",null,"0",null,null,null,null,this.Div07.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static05","346","10","80","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("8");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div07.addChild(obj.name, obj);

            obj = new Combo("Combo01","65","39","231","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("12");
            obj.set_text("Combo00");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static02","20","39","80","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("13");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static06","346","39","80","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("14");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static08","622","0","50","21",null,null,null,null,null,null,this.Div07.form);
            obj.set_taborder("10");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static09","622",null,"50","25",null,"0",null,null,null,null,this.Div07.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div07.addChild(obj.name, obj);

            obj = new Static("Static93","124","751","26","101",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("101");
            this.addChild(obj.name, obj);

            obj = new Div("Div08","150","751","1020","101",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("div_WF_searchBox03");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","391","10","231","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("0");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit01","391","39","231","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("1");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","80","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("2");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Combo("Combo00","65","10","231","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("3");
            obj.set_text("Combo00");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static03","296","0","50","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("4");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static04","296",null,"50","25",null,"0",null,null,null,null,this.Div08.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static05","346","10","80","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("6");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Combo("Combo01","65","39","231","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static02","20","39","80","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("10");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static06","346","39","80","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("11");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static07","20","68","80","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("12");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Combo("Combo02","65","68","231","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static10","346","68","80","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("14");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit03","391","68","231","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("15");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static11","672","68","110","21",null,null,"100",null,null,null,this.Div08.form);
            obj.set_taborder("16");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit04","782","68",null,"21","20",null,null,null,null,null,this.Div08.form);
            obj.set_taborder("17");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static30","672","10","80","21",null,null,"80",null,null,null,this.Div08.form);
            obj.set_taborder("18");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit00","782","10","218","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("19");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static01","672","39","80","21",null,null,"80",null,null,null,this.Div08.form);
            obj.set_taborder("20");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_textR");
            this.Div08.addChild(obj.name, obj);

            obj = new Edit("Edit02","782","39","218","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("21");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static08","622","0","50","21",null,null,null,null,null,null,this.Div08.form);
            obj.set_taborder("7");
            obj.set_text("여백");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static09","622",null,"50","25",null,"0",null,null,null,null,this.Div08.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("50");
            this.Div08.addChild(obj.name, obj);

            obj = new Static("Static84","145","1210","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","263","1210","900","31",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","271","1215","885","21",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            this.addChild(obj.name, obj);

            obj = new Static("Static105","125","1210","25","31",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static108","87","1230","50","23",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("1px 겹칩");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static109","144","1268","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("sta_Guide_Width3");
            obj.set_text("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static113","144","1288","1020","25",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_Guide_Width3");
            obj.set_text("1020");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","125","1240","25","31",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static86","264",null,"7","25",null,"2161",null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","1155",null,"7","25",null,"2161",null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","145","1240","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static94","263","1240","900","31",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","271","1245","885","21",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static100","335","1236","25","4",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_Guide_Height");
            this.addChild(obj.name, obj);

            obj = new Static("Static101","342","1227","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static95","335","1265","25","4",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("sta_Guide_Height");
            this.addChild(obj.name, obj);

            obj = new Static("Static96","342","1256","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("4");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","263","1368","900","31",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit10","271","1373","375","21",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","125","1368","25","31",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","125","1398","25","31",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","264",null,"7","25",null,"2003",null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static98","263","1398","900","31",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","271","1403","885","21",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            this.addChild(obj.name, obj);

            obj = new Static("Static112","145","1368","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","Edit10:7","1368","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","645",null,"7","25",null,"2002",null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","Static78:6","1373","377","21",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            this.addChild(obj.name, obj);

            obj = new Static("Static102","773",null,"7","25",null,"2002",null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static103","1156",null,"7","25",null,"2002",null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static111","144","1428","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("sta_Guide_Width3");
            obj.set_text("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static114","653","1428","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("sta_Guide_Width3");
            obj.set_text("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static104","263","1500","900","31",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","271","1505","208","21",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            this.addChild(obj.name, obj);

            obj = new Static("Static106","125","1500","25","31",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static107","125","1530","25","31",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_Guide_Height3");
            obj.set_text("31");
            this.addChild(obj.name, obj);

            obj = new Static("Static115","264",null,"7","25",null,"1871",null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static119","263","1530","900","31",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","271","1535","885","21",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            this.addChild(obj.name, obj);

            obj = new Static("Static120","Edit13:6","1500","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static121","478",null,"7","25",null,"1870",null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","Static120:6","1505","208","21",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            this.addChild(obj.name, obj);

            obj = new Static("Static122","605",null,"7","25",null,"1870",null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static123","1156",null,"7","25",null,"1870",null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static124","144","1560","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_cssclass("sta_Guide_Width3");
            obj.set_text("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static125","484","1560","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_cssclass("sta_Guide_Width3");
            obj.set_text("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static126","145","1500","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static129","Edit15:6","1500","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static128","818",null,"7","25",null,"1870",null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","Static129:6","1505","205","21",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            this.addChild(obj.name, obj);

            obj = new Static("Static127","944",null,"7","25",null,"1870",null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static130","826","1560","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_Guide_Width3");
            obj.set_text("120");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","488","1885","144","29",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("가나다라마바사아자차");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static110","665","1851","70","12",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("width : 132");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static116","326","278","25","8",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_cssclass("sta_Guide_Height2");
            this.addChild(obj.name, obj);

            obj = new Static("Static131","347","271","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("8");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","275","2227","3","21",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","265","2210","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static97","145","1398","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static118","145","1530","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static30_00","164","1076","90","21",null,null,"110",null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("가나다라마바사아");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static30_01","164","1102","100","21",null,null,"110",null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("가나다라마바사아자");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00","589","998","39","21",null,null,"100",null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("aaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","589","972","33","21",null,null,"100",null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("aaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","589","946","27","21",null,null,"100",null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("aaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","589","920","21","21",null,null,"100",null,null,null,this);
            obj.set_taborder("171");
            obj.set_text("aa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00","589","1024","45","21",null,null,"100",null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("aaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00","589","1050","51","21",null,null,"100",null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("aaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00","589","1076","57","21",null,null,"100",null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("aaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00","589","1102","63","21",null,null,"100",null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("aaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00","722","920","69","21",null,null,"100",null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("aaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00","722","946","75","21",null,null,"100",null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("aaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00","722","972","81","21",null,null,"100",null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("aaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00","722","998","87","21",null,null,"100",null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("aaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00_00","722","1024","93","21",null,null,"100",null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("aaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00_00_00","722","1050","99","21",null,null,"100",null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("aaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","722","1076","105","21",null,null,"100",null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("aaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","722","1102","111","21",null,null,"100",null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("aaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","903","920","117","21",null,null,"100",null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("aaaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","903","946","123","21",null,null,"100",null,null,null,this);
            obj.set_taborder("185");
            obj.set_text("aaaaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","903","972","129","21",null,null,"100",null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("aaaaaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new Static("Static82_00","903","1039","140","42",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("최소 width : 21px (2자)\r\n한 글자 늘어날 때 마다 +6px");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("Static231_00","150","1935","120","29",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("aaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static232_00","150","1974","126","29",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("aaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static232_00_00","150","2013","132","29",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_text("aaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static232_00_00_00","352","2013","150","29",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("aaaaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static232_00_01","352","1974","144","29",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("aaaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static231_00_00","352","1935","138","29",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("aaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static232_00_00_00_00","572","1935","156","29",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_text("aaaaaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static232_00_00_00_00_00","572","1974","158","29",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("Aaaaaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","903","998","131","21",null,null,"100",null,null,null,this);
            obj.set_taborder("196");
            obj.set_text("Aaaaaaaaaaaaaaaaaaaa");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div07.form
            obj = new Layout("default","",0,0,this.Div07.form,function(p){});
            this.Div07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div08.form
            obj = new Layout("default","",0,0,this.Div08.form,function(p){});
            this.Div08.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1210,3400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static80.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
            this.MaskEdit00.addEventHandler("onchanged",this.MaskEdit00_onchanged,this);
        };
        this.loadIncludeScript("PatternGuide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
