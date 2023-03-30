(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompnentGuide");
            this.set_titletext("CompnentGuide");
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


            obj = new Dataset("Grid04", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">가나다</Col><Col id=\"Column2\">가나다</Col><Col id=\"Column3\">가나다</Col><Col id=\"Column4\">가나다</Col></Row><Row><Col id=\"Column4\">가나다라</Col><Col id=\"Column3\">가나다라</Col><Col id=\"Column2\">가나다라</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column0\">가나다라</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">가나다라마</Col><Col id=\"Column2\">가나다라마</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column4\">가나다라마</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static102","110","784",null,"95","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","51","111","320",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","110","51",null,"320","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"53","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Component KIT");
            obj.set_textAlign("center");
            obj.set_background("#2a3b97");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","370","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Edit");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","110","370",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","463","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("MaskEdit");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","110","463",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","556","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TextArea");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","110","556",null,"136","5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","691","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Button");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","110","691",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","784","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Combo");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0","877","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("ListBox");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","110","877",null,"136","5",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","1012","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Spin");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","110","1012",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","1105","111","400",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Calendar");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","110","1105",null,"400","5",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","0","1504","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("CheckBox");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","110","1504",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","1597","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","110","1597",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","0","1689","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("GroupBox");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","110","1689",null,"136","5",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","0","1824","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("ImageViewer");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","110","1824",null,"136","5",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","0","1959","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Menu");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","110","1959",null,"136","5",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","2094","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("PopupDiv");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","110","2094",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","2187","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("PopupMenu");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","110","2187",null,"136","5",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","0","2322","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("ProgressBar");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","110","2322",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","2415","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Radio");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","110","2415",null,"94","5",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","0","2508","111","151",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Tab");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","110","2508",null,"151","5",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","138","387","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","365","387","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","562","387","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","138","411","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_value("가나다라마바사");
            obj.set_text("가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","138","708","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","352","708","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","138","732","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","352","732","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("버튼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","138","1521","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","365","1521","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","138","1545","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_value("true");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","365","1544","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_enable("false");
            obj.set_value("true");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","138","1624","343","41",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Div는 일반적으로 Form을 로드할 때 사용한다.\r\n디자인 요소가 필요 할 경우 Class로 지정해서 사용한다.");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","138","82","232","60",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("가나다라마바사\r\nABCDEFGHIJKLMNOP\r\n0123456789");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","138","144","232","21",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("※ usedecorate =\"<b v=\'true\'>true</b>\"");
            obj.set_usedecorate("true");
            obj.set_color("#e37a0c");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","138","166","562","120",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("fs 글자의 크기(fontsize)를 지정합니다.  ex)<fs v=\'12\'></fs>\r\nfc 글자의 색상(fontcolor)를 지정합니다.  ex)<fc v=\'red\'></fc><fc v=\'#FF00FF\'></fc>\r\nff 글자의 종류(fontface)를 지정합니다.  ex)<ff v=\'굴림\'></ff>\r\nb 굵은글씨를(bold)를 지정합니다. ex)<b v=\'true\'></b>\r\ni 이텔릭체를 (italic)를 지정합니다.  ex)<i v=\'true\'></i>\r\nu 언더라인을(underline)를 지정합니다.  ex)<u v=\'true\'></u>\r\ns 취소선(strike)를 지정합니다.  ex)<s v=\'true\'></s>");
            obj.set_usedecorate("false");
            obj.set_color("#e37a0c");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","138","480","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","365","480","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","562","480","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","138","504","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_value("17");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","365","504","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_value("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","562","504","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_value("17");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","138","573","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","365","573","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","562","573","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","138","597","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_value("가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","365","597","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_value("가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","562","597","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_value("가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","138","801","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","365","801","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","562","801","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","138","830","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","365","830","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_enable("false");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","562","830","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_readonly("true");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","137","894","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","353","894","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","138","921","127","74",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_text("가");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","353","916","127","74",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_enable("false");
            obj.set_text("가");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","138","2432","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","365","2432","122","25",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","138","2461","185","21",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","365","2462","185","21",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","134","1706","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","347","1706","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","134","1841","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","347","1841","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","134","1873","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","347","1873","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","138","2121","343","41",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("PopupDiv는 일반적으로 Form을 로드할 때 사용한다.\r\n디자인 요소가 필요 할 경우 Class로 지정해서 사용한다.");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","143","2556","514","56",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tab 01");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tab 02");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Tab 03");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static75","138","1122","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","365","1122","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","562","1122","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","138","1146","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","365","1146","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","562","1146","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","365","1187","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","562","1187","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar07","138","1187","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","137","1221","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("monthonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08","138","1245","210","231",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","365","1029","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","562","1029","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","138","1029","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","138","1053","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","365","1053","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_enable("false");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02","562","1053","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_readonly("true");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","138","2346","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","138","2370","260","14",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_step("1");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static86","598","2346","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("disabled");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01","598","2370","260","14",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","138","2000","830","38",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_innerdataset("Menu");
            obj.set_captioncolumn("Caption");
            obj.set_idcolumn("Id");
            obj.set_levelcolumn("Level");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","128","2217","110","50",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("PopupMenu");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","246","2217","220","80",null,null,null,null,null,null,this);
            obj.set_innerdataset("PopupMenu");
            obj.set_captioncolumn("Caption");
            obj.set_enablecolumn("enable");
            obj.set_idcolumn("idx");
            obj.set_levelcolumn("lev");
            obj.set_userdatacolumn("UserData");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","218","1545","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","445","1544","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_enable("false");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","365","411","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_value("가나다라마바사");
            obj.set_enable("false");
            obj.set_text("가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","562","411","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_readonly("true");
            obj.set_value("가나다라마바사");
            obj.set_text("가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","759","387","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("essential");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","759","411","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_value("가나다라마바사");
            obj.set_cssclass("edt_WF_essential");
            obj.set_text("가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","759","479","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("essential");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","759","504","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_value("17");
            obj.set_cssclass("msk_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","562","1521","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("essential");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","562","1544","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_value("true");
            obj.set_text("nexacro");
            obj.set_cssclass("chk_WF_essential");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","642","1544","70","21",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("nexacro");
            obj.set_cssclass("chk_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","144","305","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("대타이틀");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","302","305","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("중타이틀");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","490","305","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("소타이틀");
            obj.set_cssclass("sta_WF_title03");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","658","305","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("조회라벨");
            obj.set_cssclass("sta_WFSA_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static84","759","567","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("essential");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","759","597","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_value("가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사");
            obj.set_cssclass("txt_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","759","1121","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("essential");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","759","1145","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","759","1186","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            obj.set_cssclass("cal_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static88","759","1029","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("essential");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03","759","1053","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("spn_WF_essential");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","759","830","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static89","759","801","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("essential");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","116","305","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static92","274","305","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static95","461","305","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static97","631","305","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","267","411","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static101","268","504","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static103","184","732","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static105","267","830","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static126","139","830","2","21",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("sta_GD_Square");
            this.addChild(obj.name, obj);

            obj = new Static("Static135","352","1245","25","231",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("231");
            this.addChild(obj.name, obj);

            obj = new Static("Static136","138","1478","210","25",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("210");
            this.addChild(obj.name, obj);

            obj = new Static("Static140","113","2459","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static142","114","2556","25","28",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("28");
            this.addChild(obj.name, obj);

            obj = new Static("Static144","404","2370","25","14",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("14");
            this.addChild(obj.name, obj);

            obj = new Static("Static91","267","1053","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static93","267","1146","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static94","111","1545","25","21",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("21");
            this.addChild(obj.name, obj);

            obj = new Static("Static104","956","801","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("essential_readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","956","830","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_readonly("true");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static39_00","0","2658","111","151",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("Spliter");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static40_00","110","2658",null,"151","5",null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static109","586","82","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("기본 12px");
            this.addChild(obj.name, obj);

            obj = new Static("Static109_00","706","82","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("볼드 12px (컬러값)");
            obj.set_cssclass("sta_WF_black");
            this.addChild(obj.name, obj);

            obj = new Static("Static109_01","586","112","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("기본 14px");
            obj.set_cssclass("sta_WF_fs14");
            this.addChild(obj.name, obj);

            obj = new Static("Static109_00_00","706","112","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_text("볼드 14px (볼드처리)");
            obj.set_cssclass("sta_WF_fs14B");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01_00","562","2462","185","21",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("rdo_WF_essential");
            var Radio01_00_innerdataset = new nexacro.NormalDataset("Radio01_00_innerdataset", obj);
            Radio01_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_00_innerdataset);
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static69_00","562","2432","122","25",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_text("essential");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","208","2728","120","10",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_cssclass("btn_WF_splitter2");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","144","2673","10","120",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_cssclass("btn_WF_splitter");
            this.addChild(obj.name, obj);

            obj = new Static("Static44_00","956","387","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_text("essential_readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02_00","956","411","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_value("가나다라마바사");
            obj.set_cssclass("edt_WF_essential");
            obj.set_readonly("true");
            obj.set_text("가나다라마바사");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03_00","956","504","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_value("17");
            obj.set_cssclass("msk_WF_essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_00","956","479","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_text("essential_readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03_00","956","597","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_value("가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사\n가나다라마바사");
            obj.set_cssclass("txt_WF_essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static84_00","956","567","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("essential_readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Static("Static88_00","956","1029","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("essential_readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03_00","956","1053","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_cssclass("spn_WF_essential");
            obj.set_readonly("true");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Static("Static87_00","956","1121","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_text("essential_readonly");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03_00","956","1145","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("cal_WF_essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar06_00","956","1186","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_value("20180101");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            obj.set_cssclass("cal_WF_essential");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

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
        this.registerScript("CompnentGuide.xfdl", function() {

        this.Calendar08_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static15.addEventHandler("onclick",this.Static15_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.Calendar08.addEventHandler("onchanged",this.Calendar08_onchanged,this);
            this.Button16.addEventHandler("onclick",this.Button16_onclick,this);
        };
        this.loadIncludeScript("CompnentGuide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
