(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ButtonGuide");
            this.set_titletext("ButtonGuide");
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


            obj = new Dataset("Grid03", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"STRING\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","51","111","320",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Common \r\nButton");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","110","51",null,"320","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"53","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button KIT");
            obj.set_textAlign("center");
            obj.set_background("#2a3b97");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","519","111","150",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Grid Button");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","110","519",null,"150","5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","668","111","150",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("검색조건 제어\r\nButton");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","110","668",null,"150","5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","817","111","160",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Search Button");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","110","817",null,"160","5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","154","847","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","254","847","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","146","86","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","146","140","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("가나");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","361","86","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","360","140","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("가나");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","146","114","46","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","188","140","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","146","171","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("가나다");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","146","202","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("가나다라");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","146","233","82","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("가나다라마");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","146","264","94","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("가나다라마바");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","146","295","106","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","360","171","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("가나다");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","360","202","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("가나다라");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","360","233","82","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("가나다라마");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","360","264","94","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("가나다라마바");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","360","295","106","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("가나다라마바사");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","268","144","70","12",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("width : 46");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","268","175","70","12",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("width : 58");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static88","268","206","70","12",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("width  : 70");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static89","268","237","70","12",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("width : 82");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","268","268","70","12",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("width : 94");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","268","299","70","12",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("width : 106");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","518","272","369","66",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("※ 한글자당 12px씩 증가(기본 46px)");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","342","563","82","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("엑셀받기");
            obj.set_cssclass("btn_WF_DownloadExcel");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","648","563","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_Extend");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","245","563","94","21",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("엑셀올리기");
            obj.set_cssclass("btn_WF_UploadExcel");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","147","563","95","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("양식지받기");
            obj.set_cssclass("btn_WF_DownloadForm");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","696","563","99","21",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Custom Button");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","427","563","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_AddCell");
            this.addChild(obj.name, obj);

            obj = new Button("Button20","497","563","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_DeleteCell");
            this.addChild(obj.name, obj);

            obj = new Button("Button21","672","563","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_Downsize");
            this.addChild(obj.name, obj);

            obj = new Button("Button22","567","563","78","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_Download");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","210","584","537","66",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("※ Width값 정의 : Custom 버튼은 Default버튼 정의와 같으며 나머지 기능버튼의 Width값은 고정");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","121","563","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","242","563","3","21",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","233","546","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Button("Button23","158","890","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Button("Button24","454","895","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_search04");
            this.addChild(obj.name, obj);

            obj = new Button("Button25","254","890","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            obj.set_enable("false");
            obj.set_escapebutton("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","158","862","46","25",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("46");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","-181","698","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","532","847","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button26","543","893","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_search04");
            obj.set_enableevent("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","797","894","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("btn_WF_search04");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","635","894","160","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","635","847","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("활용예시");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","794","894","3","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","786","877","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","258","685","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("펼침버튼");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","255","710","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("60");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","228","737","25","10",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","438","847","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","441","684","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("닫힘버튼");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","976","111","160",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("Popup Button");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","110","976",null,"160","5",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","154","1005","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","252","1005","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button42","158","1060","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_check01");
            this.addChild(obj.name, obj);

            obj = new Button("Button43","254","1060","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_check01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","158","1034","58","25",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("58");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","132","1060","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("23");
            this.addChild(obj.name, obj);

            obj = new Button("Button44","376","1060","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_check01");
            this.addChild(obj.name, obj);

            obj = new Button("Button45","437","1060","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_cancel01");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","425","1043","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","434","1060","3","25",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","381","1005","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("활용예시");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","0","1135","111","150",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("DashBoard \r\nButton");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","110","1135",null,"150","5",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button46","158","1185","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("btn_MF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Button("Button47","212","1185","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("btn_MF_Help");
            this.addChild(obj.name, obj);

            obj = new Button("Button48","266","1185","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("btn_MF_View");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","154","1145","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button50","568","1185","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("btn_MF_Help");
            this.addChild(obj.name, obj);

            obj = new Button("Button49","Button50:0","1185","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("btn_MF_View");
            this.addChild(obj.name, obj);

            obj = new Button("Button51","514","1185","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("btn_MF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","158","1160","54","25",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("54");
            this.addChild(obj.name, obj);

            obj = new Button("Button52","320","1185","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("btn_MF_Delete");
            this.addChild(obj.name, obj);

            obj = new Static("Static97","0","1283","111","200",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("Tab \r\nButton");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static98","110","1283",null,"200","5",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","689","1377","400","79",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("div_WF_Tab");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","692","1311","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("활용예시");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static100","154","1311","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static101","374","1311","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("선택시");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static107","663","1347","25","27",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_Guide_Height2");
            this.addChild(obj.name, obj);

            obj = new Static("Static108","544","1366","132","25",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("Button과 Div가 1px 겹칩");
            obj.set_color("crimson");
            this.addChild(obj.name, obj);

            obj = new Static("Static104","663","1373","25","97",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_Guide_Height2");
            this.addChild(obj.name, obj);

            obj = new Static("Static105","0","1482","111","190",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("\r\nOpen/Fold\r\nButton");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static106","110","1482",null,"190","5",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static109","154","1502","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static110","382","1502","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static111","690","1502","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("활용예시");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button66","156","1534","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("펼침버튼");
            obj.set_cssclass("btn_WF_Open");
            this.addChild(obj.name, obj);

            obj = new Button("Button67","382","1534","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("펼침버튼");
            obj.set_cssclass("btn_WF_Open");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button68","694","1534","400","27",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("펼침버튼");
            obj.set_cssclass("btn_WF_Open");
            this.addChild(obj.name, obj);

            obj = new Button("Button69","694","1564","400","27",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("펼침버튼");
            obj.set_cssclass("btn_WF_Open");
            this.addChild(obj.name, obj);

            obj = new Button("Button70","694","1594","400","27",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("펼침버튼");
            obj.set_cssclass("btn_WF_Open");
            this.addChild(obj.name, obj);

            obj = new Static("Static114","694","1561","23","3",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static115","675","1557","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Button("Button71","156","1582","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("닫힘버튼");
            obj.set_cssclass("btn_WF_Fold");
            this.addChild(obj.name, obj);

            obj = new Button("Button72","382","1582","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("닫힘버튼");
            obj.set_cssclass("btn_WF_Fold");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static116","0","1671","111","140",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("\rList &\r\r\nAttachedFile\r\r\nButton");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static117","110","1671",null,"140","5",null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button73","156","1736","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("btn_WF_AttachedFile");
            this.addChild(obj.name, obj);

            obj = new Static("Static118","154","1690","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static119","240","1690","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button74","241","1736","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("btn_WF_AttachedFile");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static124","341","1690","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("활용예시");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static125","482","1735","218","25",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("※ Edit  위에 겹쳐 사용");
            this.addChild(obj.name, obj);

            obj = new Static("Static126","759","1688","117","21",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("공지 첨부파일 ");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button76","785","1734","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_cssclass("btn_WF_AttachedFile");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","132","1185","25","53",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("53");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","228","766","25","10",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","131","890","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","454","869","21","25",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","429","895","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","130","1347","25","27",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","130","1534","25","27",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("27");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","130","1736","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","156","1709","21","25",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","785","1707","21","25",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","757","1734","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","344","1736","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            this.addChild(obj.name, obj);

            obj = new Button("Button75","450","1737","20","19",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("btn_WF_AttachedFile");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","0","370","111","150",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("공통 Button");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","110","370",null,"150","5",null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button79","166","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search01");
            this.addChild(obj.name, obj);

            obj = new Button("Button80","227","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_new01");
            this.addChild(obj.name, obj);

            obj = new Button("Button81","Button80:3","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_delete01");
            this.addChild(obj.name, obj);

            obj = new Button("Button82","349","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save01");
            this.addChild(obj.name, obj);

            obj = new Button("Button83","410","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_print01");
            this.addChild(obj.name, obj);

            obj = new Button("Button84","471","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_cssclass("btn_WF_reset01");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","166","419","58","25",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("58");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","141","444","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("23");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","711","444","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("23");
            this.addChild(obj.name, obj);

            obj = new Button("btnHideSub","438","766","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("btn_WF_fold02");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowSub","255","766","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_cssclass("btn_WF_expand02");
            this.addChild(obj.name, obj);

            obj = new Button("btnShow","255","737","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_cssclass("btn_WF_expand01");
            this.addChild(obj.name, obj);

            obj = new Button("btnHide","439","736","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","440","710","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("60");
            this.addChild(obj.name, obj);

            obj = new Button("Button28","372","1347","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("TabButton");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("Button29","157","1347","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("TabButton");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("Button54","688","1346","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("TabButton00");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("Button53","Button54:0","1346","100","27",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("TabButton01");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("Button55","Button53:0","1346","110","27",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("TabButton02");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","752","419","420","66",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("※ 공통버튼은 최초 세팅되는 버전으로 고객사 정책에 맞게 커스터마이징 하여 사용");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","534","709","155","66",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("버튼 ID : btnShowHide");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","789","1332","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("0");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","798","1348","1","22",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","280","429","20","15",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("3");
            obj.set_cssclass("sta_Guide_Size");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","287","446","3","23",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Button("Button56",null,"139","46","21","638",null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_plus01");
            this.addChild(obj.name, obj);

            obj = new Button("Button57","Button56:3","139","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_cancel02");
            this.addChild(obj.name, obj);

            obj = new Button("Button58",null,"139","46","21","540",null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","572","105","27","30",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("3");
            obj.set_color("red");
            obj.set_font("normal 11px/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","572","129","3","40",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","156","722","66","66",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("1단 검색\r\n\r\n2단 검색");
            this.addChild(obj.name, obj);

            obj = new Button("Button58_00",null,"139","46","21","491",null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Button("Button85","532","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_cssclass("btn_WF_advice01");
            obj.set_text("매뉴얼");
            this.addChild(obj.name, obj);

            obj = new Button("Button86","593","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("Button87","654","445","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00","765","1005","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","765","1061","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("즐겨찾기 등록");
            obj.set_cssclass("btn_WF_menu");
            this.addChild(obj.name, obj);

            obj = new Static("Static45_00","602","976","111","160",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("Popup Button");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static60_00_00","895","1005","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("selected");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","895","1061","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("즐겨찾기 등록");
            obj.set_cssclass("btn_WF_menu_S");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","1018","1072","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("즐겨찾기 삭제");
            obj.set_cssclass("btn_WF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","1018","1052","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("즐겨찾기 등록");
            obj.set_cssclass("btn_WF_menu_S");
            this.addChild(obj.name, obj);

            obj = new Static("Static116_00","0","1810","111","140",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("기타 버튼");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static117_00","110","1810",null,"140","5",null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","156","1870","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_cssclass("btn_WF_up");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","197","1870","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_cssclass("btn_WF_down");
            this.addChild(obj.name, obj);

            obj = new Static("Static30_00","130","1870","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static31_00","156","1843","21","25",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","268","1870","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_cssclass("btn_WF_pencil");
            this.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","242","1870","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static31_00_00","268","1843","21","25",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("21");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("ButtonGuide.xfdl", function() {

        this.Static45_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static03_onclick,this);
            this.Static05.addEventHandler("onclick",this.Static05_onclick,this);
            this.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.Static39.addEventHandler("onclick",this.Static09_onclick,this);
            this.Static49.addEventHandler("onclick",this.Static03_onclick,this);
        };
        this.loadIncludeScript("ButtonGuide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
