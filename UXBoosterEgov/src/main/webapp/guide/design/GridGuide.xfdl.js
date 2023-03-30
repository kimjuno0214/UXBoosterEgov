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
            this.set_titletext("GridGuide");
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


            obj = new Dataset("Grid06", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">35</Col><Col id=\"Column1\">15</Col></Row><Row><Col id=\"Column0\">55</Col><Col id=\"Column1\">40</Col></Row><Row><Col id=\"Column0\">78</Col><Col id=\"Column1\">85</Col></Row><Row><Col id=\"Column0\">90</Col><Col id=\"Column1\">100</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"53","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Pattern KIT");
            obj.set_textAlign("center");
            obj.set_background("#2a3b97");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","-181","698","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static237","0","48","111","720",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Description");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static238","110","48",null,"720","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static239","155","68","270","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("중요 사항을 입력하여 주시기 바랍니다.");
            obj.set_cssclass("sta_WF_Help");
            this.addChild(obj.name, obj);

            obj = new Div("Div04","153","364","500","75",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div04");
            obj.set_cssclass("div_WF_Help");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","7","95","20",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("0");
            obj.set_text("화면도움말");
            obj.set_cssclass("sta_WF_Help2");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static01","19","22","450","48",null,null,null,null,null,null,this.Div04.form);
            obj.set_taborder("1");
            obj.set_text("화면도움말입니다.화면도움말입니다.");
            this.Div04.addChild(obj.name, obj);

            obj = new Static("Static240","0","3459","111","350",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("No Data 이미지");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static241","110","3459",null,"350","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","373","3533","504","226",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Grid03");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_autoenter("select");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column01\"/><Cell col=\"2\" text=\"Column02\"/><Cell col=\"3\" text=\"Column03\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:순번\"/><Cell col=\"2\" text=\"bind:Column01\"/><Cell col=\"3\" text=\"bind:Column02\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static242","371","3493","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("활용예시");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static243","161","3534","160","41",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'theme://images/Alert_nodataimage.png\') no-repeat");
            this.addChild(obj.name, obj);

            obj = new Static("Static244","159","3493","110","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("No Data 이미지");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","0","767","111","2694",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Grid");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","153","113","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            obj.set_text("(Grid 예시)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","154","136","280","148",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"텍스트\"/><Cell col=\"1\" text=\"숫자\"/><Cell col=\"2\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"총합계\" textAlign=\"right\"/><Cell col=\"2\" text=\"2,754,532\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","154","294","270","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("중요 사항을 입력하여 주시기 바랍니다.");
            obj.set_cssclass("sta_WF_Help");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","154","284","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","135","280","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","146","68","7","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_Guide_Height");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","130","68","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("21");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","499","112","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            obj.set_text("(Input 예시)");
            this.addChild(obj.name, obj);

            obj = new Static("Static247","498","136","490","29",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static248","498","136","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static249","498","164","490","29",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static250","498","164","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit28","620","140","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("Static251","732","138","230","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("중요 사항을 입력하여 주시기 바랍니다.");
            obj.set_cssclass("sta_WF_Help");
            this.addChild(obj.name, obj);

            obj = new Static("Static252","720","129","12","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static253","716","113","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("12");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit29","620","168","360","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","156","484","280","148",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"텍스트\"/><Cell col=\"1\" text=\"숫자\"/><Cell col=\"2\" text=\"버튼\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" textAlign=\"right\"/><Cell col=\"2\" text=\"2,754,532\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static254","156","632","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static255","137","628","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static256","155","461","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            obj.set_text("(Grid 예시)");
            this.addChild(obj.name, obj);

            obj = new Static("Static257","501","460","86","15",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            obj.set_text("(Input 예시)");
            this.addChild(obj.name, obj);

            obj = new Static("Static258","500","484","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_DataLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static259","500","512","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_DataLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static260","500","484","490","29",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static261","500","512","490","29",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit30","620","516","360","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit31","620","488","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Div("Div05","156","642","280","75",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Div04");
            obj.set_cssclass("div_WF_Help");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","7","95","20",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("0");
            obj.set_text("화면도움말");
            obj.set_cssclass("sta_WF_Help2");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static01","19","22","250","48",null,null,null,null,null,null,this.Div05.form);
            obj.set_taborder("1");
            obj.set_text("화면도움말입니다.화면도움말입니다.");
            this.Div05.addChild(obj.name, obj);

            obj = new Static("Static262","500","484","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static263","500","512","115","29",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("가나다라마바");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static264","500","541","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","500","551","492","75",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Div04");
            obj.set_cssclass("div_WF_Help");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","7","95","20",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("화면도움말");
            obj.set_cssclass("sta_WF_Help2");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static01","19","22","250","48",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("화면도움말입니다.화면도움말입니다.");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static265","481","539","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static267","124","363","25","75",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("75");
            this.addChild(obj.name, obj);

            obj = new Static("Static268","110","767",null,"2694","0",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","156","1230","844","166",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("49");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Grid");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" style=\"align:center middle;\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"Column01\" cssclass=\"CellEssential\"/><Cell col=\"3\" text=\"Column02\"/><Cell col=\"4\" text=\"Column03\"/><Cell col=\"5\" text=\"Column04\"/><Cell col=\"6\" text=\"Column05\"/><Cell col=\"7\" text=\"Column06\"/><Cell col=\"8\" text=\"Column07\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"normal\" style=\"padding:3 3 3 3;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\" cssclass=\"lineL\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" style=\"padding:3 3 3 3;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"calendarcontrol\" edittype=\"date\" style=\"padding:3 3 3 3;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"normal\" style=\"padding:3 0 3 2;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\"/><Cell col=\"6\" style=\"padding:0 9 0 9;\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align:right middle;padding:0 9 0 9;\" text=\"bind:Column06\" mask=\"###,###,###\" displaytype=\"number\" maskeditformat=\"###,###\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" style=\"align:center middle;padding:3 3 3 3;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" style=\"align:center middle;\" text=\"합계\" displaytype=\"text\"/><Cell col=\"7\" colspan=\"2\" style=\"align:right middle;padding:0 9 0 9;\" text=\"321456789\" mask=\"###,###,###\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static270","130","1230","25","32",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("32");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","156","1470","844","208",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"150\"/><Column size=\"164\"/><Column size=\"400\"/><Column size=\"100\"/></Columns><Rows><Row size=\"52\" band=\"head\"/><Row size=\"48\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"Double&#13;&#10;Line\"/><Cell col=\"2\" text=\"Double&#13;&#10;Line\"/><Cell col=\"3\" text=\"Double&#13;&#10;Line\"/><Cell col=\"4\" text=\"Date\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"가나다라&#13;&#10;가나다라\" textAlign=\"left\"/><Cell col=\"2\" text=\"가나다라&#13;&#10;가나다라\" textAlign=\"left\"/><Cell col=\"3\" text=\"테스트테스트테스트&#13;&#10;테스트테스트테스트\" textAlign=\"left\"/><Cell col=\"4\" text=\"0000-00-00\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static275","157","1449","120","15",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            obj.set_text("(Head & Body 2줄일 때)");
            this.addChild(obj.name, obj);

            obj = new Static("Static277","128","1471","25","52",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("52");
            this.addChild(obj.name, obj);

            obj = new Static("Static285","796","767","22","50",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_Guide_Flag");
            this.addChild(obj.name, obj);

            obj = new Static("Static286","824","748","210","39",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Grid 필수영역은 Cell 안에 클래스 지정\r\r\nclass : grd_WF_essential");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_textAlign("left");
            obj.set_font("12PX/15PX \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","130","1261","25","30",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","128","1349","25","30",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static141","157","2354","120","15",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            obj.set_text("(셀고정)");
            this.addChild(obj.name, obj);

            obj = new Static("Static90_00","138","2623","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("cell class 샘플");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05_00","138","2646","963","123",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_binddataset("Grid04_00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"background\"/><Cell col=\"1\" text=\"border\"/><Cell col=\"2\" text=\"font-color\"/><Cell col=\"3\" text=\"font-size\"/><Cell col=\"4\" text=\"font-size_bold\"/><Cell col=\"5\" text=\"borderR\"/><Cell col=\"6\" text=\"borderL\"/><Cell col=\"7\" text=\"borderB\"/><Cell col=\"8\" text=\"borderT\"/><Cell col=\"9\" text=\"borderRL\"/><Cell col=\"10\" text=\"borderTB\"/><Cell col=\"11\" text=\"btn\"/><Cell col=\"12\" text=\"btn\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"grd_WF_Bg\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"grd_WF_Border\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"grd_WF_Fc\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"grd_WF_Fs14\"/><Cell col=\"4\" text=\"bind:Column4\" cssclass=\"grd_WF_Fs14B\"/><Cell col=\"5\" text=\"bind:Column0\" cssclass=\"grd_WF_borderR\"/><Cell col=\"6\" text=\"bind:Column1\" cssclass=\"grd_WF_borderL\"/><Cell col=\"7\" text=\"bind:Column2\" cssclass=\"grd_WF_borderB\"/><Cell col=\"8\" text=\"bind:Column3\" cssclass=\"grd_WF_borderT\"/><Cell col=\"9\" text=\"bind:Column4\" cssclass=\"grd_WF_borderRL\"/><Cell col=\"10\" text=\"bind:Column4\" cssclass=\"grd_WF_borderTB\"/><Cell col=\"11\" cssclass=\"grd_WF_trash\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"12\" cssclass=\"grd_WF_pencil\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid08","138","2819","1060","334",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_binddataset("Grid05");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"body essential\"/><Cell col=\"1\" text=\"SUM color\"/><Cell col=\"2\" text=\"SUM color\"/><Cell col=\"3\" text=\"orange\"/><Cell col=\"4\" text=\"red\"/><Cell col=\"5\" text=\"blue\"/><Cell col=\"6\" text=\"green\"/><Cell col=\"7\" text=\"gray\"/><Cell col=\"8\" text=\"purple\"/><Cell col=\"9\" text=\"skin\"/><Cell col=\"10\" text=\"mint\"/><Cell col=\"11\" text=\"sky\"/><Cell col=\"12\" text=\"pink\"/><Cell col=\"13\" text=\"coffee\"/><Cell col=\"14\" text=\"navy\"/></Band><Band id=\"body\"><Cell cssclass=\"grd_WF_essential\"/><Cell col=\"1\" text=\"bind:Column0\" cssclass=\"grd_WF_Bg2\"/><Cell col=\"2\" text=\"bind:Column0\" cssclass=\"grd_WF_Bg3\"/><Cell col=\"3\" text=\"bind:Column0\" cssclass=\"grd_WF_orange2\"/><Cell col=\"4\" text=\"bind:Column1\" cssclass=\"grd_WF_red2\"/><Cell col=\"5\" text=\"bind:Column2\" cssclass=\"grd_WF_blue2\"/><Cell col=\"6\" text=\"bind:Column3\" cssclass=\"grd_WF_green\"/><Cell col=\"7\" text=\"bind:Column4\" cssclass=\"grd_WF_gray\"/><Cell col=\"8\" text=\"bind:Column5\" cssclass=\"grd_WF_purple\"/><Cell col=\"9\" text=\"bind:Column6\" cssclass=\"grd_WF_skin\"/><Cell col=\"10\" text=\"bind:Column7\" cssclass=\"grd_WF_mint\"/><Cell col=\"11\" text=\"bind:Column8\" cssclass=\"grd_WF_sky\"/><Cell col=\"12\" text=\"bind:Column9\" cssclass=\"grd_WF_pink\"/><Cell col=\"13\" text=\"bind:Column10\" cssclass=\"grd_WF_coffee\"/><Cell col=\"14\" text=\"bind:Column11\" cssclass=\"grd_WF_navy\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" cssclass=\"grd_WF_orange2BD\"/><Cell row=\"1\" col=\"4\" cssclass=\"grd_WF_red2BD\"/><Cell row=\"1\" col=\"5\" cssclass=\"grd_WF_blue2BD\"/><Cell row=\"1\" col=\"6\" cssclass=\"grd_WF_greenBD\"/><Cell row=\"1\" col=\"7\" cssclass=\"grd_WF_grayBD\"/><Cell row=\"1\" col=\"8\" cssclass=\"grd_WF_purpleBD\"/><Cell row=\"1\" col=\"9\" cssclass=\"grd_WF_skinBD\"/><Cell row=\"1\" col=\"10\" cssclass=\"grd_WF_mintBD\"/><Cell row=\"1\" col=\"11\" cssclass=\"grd_WF_skyBD\"/><Cell row=\"1\" col=\"12\" cssclass=\"grd_WF_pinkBD\"/><Cell row=\"1\" col=\"13\" cssclass=\"grd_WF_coffeeBD\"/><Cell row=\"1\" col=\"14\" cssclass=\"grd_WF_navyBD\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\" cssclass=\"grd_WF_orange2FC\" text=\"가나다라\"/><Cell row=\"2\" col=\"4\" text=\"가나다라\" cssclass=\"grd_WF_red2FC\"/><Cell row=\"2\" col=\"5\" text=\"가나다라\" cssclass=\"grd_WF_blue2FC\"/><Cell row=\"2\" col=\"6\" text=\"가나다라\" cssclass=\"grd_WF_greenFC\"/><Cell row=\"2\" col=\"7\" text=\"가나다라\" cssclass=\"grd_WF_grayFC\"/><Cell row=\"2\" col=\"8\" text=\"가나다라\" cssclass=\"grd_WF_purpleFC\"/><Cell row=\"2\" col=\"9\" text=\"가나다라\" cssclass=\"grd_WF_skinFC\"/><Cell row=\"2\" col=\"10\" text=\"가나다라\" cssclass=\"grd_WF_mintFC\"/><Cell row=\"2\" col=\"11\" text=\"가나다라\" cssclass=\"grd_WF_skyFC\"/><Cell row=\"2\" col=\"12\" text=\"가나다라\" cssclass=\"grd_WF_pinkFC\"/><Cell row=\"2\" col=\"13\" text=\"가나다라\" cssclass=\"grd_WF_coffeeFC\"/><Cell row=\"2\" col=\"14\" text=\"가나다라\" cssclass=\"grd_WF_navyFC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05_00_00","138","3163","402","123",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_binddataset("Grid04_00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"font-size 14\"/><Cell col=\"1\" text=\"font-size 14 Bold\"/><Cell col=\"2\" text=\"font-size 16\"/><Cell col=\"3\" text=\"font-size 16 Bold\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"grd_WF_Fs14\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"grd_WF_Fs14B\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"grd_WF_Fs16\"/><Cell col=\"3\" text=\"bind:Column3\" cssclass=\"grd_WF_Fs16B\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05_00_00_00","590","3163","402","213",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_binddataset("Grid04_00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/><Row size=\"30\" band=\"summ\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"font-size 14\"/><Cell col=\"1\" text=\"font-size 14 Bold\"/><Cell col=\"2\" text=\"font-size 16\"/><Cell col=\"3\" text=\"font-size 16 Bold\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell cssclass=\"grd_WF_sum3\" text=\"123\"/><Cell col=\"1\" cssclass=\"grd_WF_sum3\"/><Cell col=\"2\" cssclass=\"grd_WF_sum3\"/><Cell col=\"3\" cssclass=\"grd_WF_sum3\"/><Cell row=\"1\" cssclass=\"grd_WF_sum2\" text=\"1234\"/><Cell row=\"1\" col=\"1\" cssclass=\"grd_WF_sum2\"/><Cell row=\"1\" col=\"2\" cssclass=\"grd_WF_sum2\"/><Cell row=\"1\" col=\"3\" cssclass=\"grd_WF_sum2\"/><Cell row=\"2\" text=\"12345\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","1014","3218","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("summary3");
            obj.set_background("#f3fbf3");
            obj.set_border("1px solid #b1cfaf");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00","1014","3247","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("summary2");
            obj.set_background("#fbf3f3");
            obj.set_border("1px solid #cfafaf");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00_00","1014","3276","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("summary (기본)");
            obj.set_background("#f3f9fb");
            obj.set_border("1px solid #afc0cf");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05_01","156","2080","844","208",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" text=\"텍스트\"/><Cell col=\"2\" colspan=\"2\" text=\"Column1\"/><Cell col=\"4\" colspan=\"3\" text=\"Column2\"/><Cell col=\"7\" rowspan=\"2\" text=\"Date\"/><Cell row=\"1\" col=\"2\" text=\"Column1-1\"/><Cell row=\"1\" col=\"3\" text=\"Column1-2\"/><Cell row=\"1\" col=\"4\" text=\"Column2-1\"/><Cell row=\"1\" col=\"5\" text=\"Column2-2\"/><Cell row=\"1\" col=\"6\" text=\"Column2-3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" textAlign=\"left\"/><Cell col=\"2\" textAlign=\"left\"/><Cell col=\"3\" textAlign=\"left\"/><Cell col=\"4\" textAlign=\"left\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static278","157","2057","120","15",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            obj.set_text("(Multiple Head)");
            this.addChild(obj.name, obj);

            obj = new Static("Static282","307","2080","25","33",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","130","2080","25","65",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("65");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","307","2112","25","33",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static277_00","128","1522","25","48",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("48");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","156","801","844","166",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("74");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Grid");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"71\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" style=\"align:center middle;\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"Column01\" cssclass=\"CellEssential\"/><Cell col=\"3\" text=\"Column02\"/><Cell col=\"4\" text=\"Column03\"/><Cell col=\"5\" text=\"Column04\"/><Cell col=\"6\" text=\"Column05\"/><Cell col=\"7\" text=\"Column06\" cssclass=\"grd_WF_essential\"/><Cell col=\"8\" text=\"Column07\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"normal\" style=\"padding:3 3 3 3;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" style=\"padding:3 3 3 3;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"calendarcontrol\" edittype=\"date\" style=\"padding:3 3 3 3;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"normal\" style=\"padding:3 0 3 2;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"21\"/><Cell col=\"6\" style=\"padding:0 9 0 9;\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align:right middle;padding:0 9 0 9;\" text=\"bind:Column06\" mask=\"###,###,###\" displaytype=\"number\" maskeditformat=\"###,###\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" style=\"align:center middle;padding:3 3 3 3;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" style=\"align:center middle;\" text=\"합계\" displaytype=\"text\"/><Cell col=\"7\" colspan=\"2\" style=\"align:right middle;padding:0 9 0 9;\" text=\"321456789\" mask=\"###,###,###\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","156","1017","182","156",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("grd_WF_Tree");
            obj.set_binddataset("Tree");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","156","993","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("Tree Grid");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static96","130","801","25","32",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("32");
            this.addChild(obj.name, obj);

            obj = new Static("Static98","130","832","25","30",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","375","1017","182","156",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("79");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Grid");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_Chk");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" style=\"align:center middle;\" edittype=\"checkbox\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static107","376","991","190","18",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("체크박스에 라인이 있는 Grid");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static286_00","544","991","210","18",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("class : grd_WF_Chk");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_textAlign("left");
            obj.set_font("12PX/15PX \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static100","130","920","25","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static275_00","157","1739","120","15",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_font("bold 9pt/normal \"Guliml\"");
            obj.set_text("(Head & Body 3줄일 때)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04_01","156","1760","844","227",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"150\"/><Column size=\"164\"/><Column size=\"400\"/><Column size=\"100\"/></Columns><Rows><Row size=\"72\" band=\"head\"/><Row size=\"68\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"Double&#13;&#10;Double&#13;&#10;Line\"/><Cell col=\"2\" text=\"Double&#13;&#10;Double&#13;&#10;Line\"/><Cell col=\"3\" text=\"Double&#13;&#10;Double&#13;&#10;Line\"/><Cell col=\"4\" text=\"Date\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"가나다라&#13;&#10;가나다라&#13;&#10;가나다라\" textAlign=\"left\"/><Cell col=\"2\" text=\"가나다라&#13;&#10;가나다라&#13;&#10;가나다라\" textAlign=\"left\"/><Cell col=\"3\" text=\"테스트테스트테스트&#13;&#10;테스트테스트테스트&#13;&#10;테스트테스트테스트\" textAlign=\"left\"/><Cell col=\"4\" text=\"0000-00-00\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static277_01","128","1761","25","72",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("72");
            this.addChild(obj.name, obj);

            obj = new Static("Static277_00_00","128","1832","25","68",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("68");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03_00","530","2384","464","166",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("87");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Grid06");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"220\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Progressbar_normal\"/><Cell col=\"1\" text=\"Progressbar_red\"/></Band><Band id=\"body\"><Cell style=\"padding:0 9 0 9;\" text=\"bind:Column0\" displaytype=\"progressbarcontrol\" edittype=\"normal\"/><Cell col=\"1\" style=\"align:right middle;padding:0 9 0 9;\" text=\"bind:Column1\" mask=\"###,###,###\" displaytype=\"progressbarcontrol\" maskeditformat=\"###,###\" edittype=\"normal\" cssclass=\"grd_WF_box\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid06_00","156","2384","324","120",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("87");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Dataset00");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"112\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"우측고정\"/><Cell col=\"1\" text=\"하단고정\"/><Cell col=\"2\" text=\"우측하단고정\"/></Band><Band id=\"body\"><Cell text=\"lineR\" cssclass=\"lineR\"/><Cell col=\"1\" text=\"lineB\" cssclass=\"lineB\"/><Cell col=\"2\" text=\"lineRB\" cssclass=\"lineRB\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static285_00","1039","2629","22","50",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_Guide_Flag");
            this.addChild(obj.name, obj);

            obj = new Static("Static286_01","1067","2610","126","39",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("body size 40px\r\r\nclass : grd_WF_trash");
            obj.set_cssclass("sta_Guide_Size");
            obj.set_textAlign("left");
            obj.set_font("12PX/15PX \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05_00_00_01","138","3296","202","123",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_binddataset("Grid04_00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ta : right\"/><Cell col=\"1\" text=\"ta : center\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"grd_WF_taR\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"grd_WF_taC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div04.form
            obj = new Layout("default","",0,0,this.Div04.form,function(p){});
            this.Div04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div05.form
            obj = new Layout("default","",0,0,this.Div05.form,function(p){});
            this.Div05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,function(p){});
            this.Div06.form.addLayout(obj.name, obj);

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
            this.Static237.addEventHandler("onclick",this.Static03_onclick,this);
            this.Static240.addEventHandler("onclick",this.Static03_onclick,this);
            this.Grid02.addEventHandler("onclick",this.Grid02_onclick,this);
            this.Static40.addEventHandler("onclick",this.Static03_onclick,this);
        };
        this.loadIncludeScript("GridGuide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
