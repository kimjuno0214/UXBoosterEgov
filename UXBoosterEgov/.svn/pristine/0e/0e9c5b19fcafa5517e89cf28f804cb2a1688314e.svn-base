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
            this.set_titletext("DashboardGuide");
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


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">긍정</Col><Col id=\"Column1\">주문등록시 유의사항 안내</Col><Col id=\"Column2\">2020-01-01</Col><Col id=\"Column3\">관리자</Col></Row><Row><Col id=\"Column0\">부정</Col><Col id=\"Column1\">주문등록시 유의사항 안내</Col><Col id=\"Column2\">2020-01-01</Col><Col id=\"Column3\">관리자</Col></Row><Row><Col id=\"Column0\">긍정</Col><Col id=\"Column1\">주문등록시 유의사항 안내</Col><Col id=\"Column2\">2020-01-01</Col><Col id=\"Column3\">관리자</Col></Row><Row><Col id=\"Column0\">부정</Col><Col id=\"Column1\">주문등록시 유의사항 안내</Col><Col id=\"Column2\">2020-01-01</Col><Col id=\"Column3\">관리자</Col></Row><Row><Col id=\"Column0\">긍정</Col><Col id=\"Column1\">주문등록시 유의사항 안내</Col><Col id=\"Column2\">2020-01-01</Col><Col id=\"Column3\">관리자</Col></Row><Row><Col id=\"Column0\">부정</Col><Col id=\"Column1\">주문등록시 유의사항 안내</Col><Col id=\"Column2\">2020-01-01</Col><Col id=\"Column3\">관리자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset03", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">김해1공장</Col><Col id=\"Column1\">센서-01</Col><Col id=\"Column2\">-1</Col><Col id=\"Column3\">(100/101)</Col></Row><Row><Col id=\"Column0\">김해2공장</Col><Col id=\"Column1\">스위치-01</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">(100/100)</Col></Row><Row><Col id=\"Column0\">...</Col><Col id=\"Column1\">...</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">(100/99)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset04", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">김해1공장</Col><Col id=\"Column2\">100%</Col><Col id=\"Column1\">89/89</Col></Row><Row><Col id=\"Column0\">김해2공장</Col><Col id=\"Column2\">98.7%</Col><Col id=\"Column1\">78/79</Col></Row><Row><Col id=\"Column0\">...</Col><Col id=\"Column1\">...</Col><Col id=\"Column2\">0%</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset05", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column2\">123456789</Col><Col id=\"Column1\">동부지점</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column2\">102345678</Col><Col id=\"Column1\">서부지점</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">대구지점</Col><Col id=\"Column2\">91234567</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">경기지점</Col><Col id=\"Column2\">90123456</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">강원지점</Col><Col id=\"Column2\">89123456</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"53","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Dashboard Pattern");
            obj.set_textAlign("center");
            obj.set_background("#2a3b97");
            obj.set_color("#ffffff");
            obj.set_font("bold 11pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","0","52","111","390",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("DashBoard \r\nButton");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","110","52",null,"390","5",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button46","158","102","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Button("Button47","212","102","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MF_Help");
            this.addChild(obj.name, obj);

            obj = new Button("Button48","266","102","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MF_View");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","154","62","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("normal");
            obj.set_color("#2c4898");
            this.addChild(obj.name, obj);

            obj = new Button("Button50","568","102","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MF_Help");
            this.addChild(obj.name, obj);

            obj = new Button("Button49","622","102","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MF_View");
            this.addChild(obj.name, obj);

            obj = new Button("Button51","514","102","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","158","77","54","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_Guide_Width2");
            obj.set_text("54");
            this.addChild(obj.name, obj);

            obj = new Button("Button52","320","102","54","53",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_MF_Delete");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","132","102","25","53",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("53");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","1621","111","4631",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Static");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","110","1621",null,"4631","5",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00","116","1646","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_Guide_Height2");
            obj.set_text("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","144","1646","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("대타이틀");
            obj.set_cssclass("sta_MF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00","396","192","233","203",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_btnBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","162","192","233","203",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_btnBg");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","251","266","55","55",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_MF_check");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","485","266","55","55",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_MF_cancel");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00","144","1693","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("01-01 12:34 기준");
            obj.set_cssclass("sta_MF_Time");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_00","274","1693","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("단위 : 백만원");
            obj.set_cssclass("sta_MF_Unit");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_01","462","1693","52","23",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("오늘");
            obj.set_cssclass("sta_MF_WeatherText01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","148","1738","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("관리채권");
            obj.set_cssclass("sta_MF_count");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00","208","1756","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("6,460");
            obj.set_cssclass("sta_MF_numM");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_01","328","1738","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("부실채권");
            obj.set_cssclass("sta_MF_count2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00","388","1756","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("3,029");
            obj.set_cssclass("sta_MF_numR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_00","748","1756","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("3,029");
            obj.set_cssclass("sta_MF_numR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_01_00","688","1738","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("부실채권");
            obj.set_cssclass("sta_MF_money2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_01","567","1756","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("6,460");
            obj.set_cssclass("sta_MF_numM");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_02","508","1738","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("관리채권");
            obj.set_cssclass("sta_MF_money");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_02","144","2096","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("관리채권");
            obj.set_cssclass("sta_MF_icon01");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_02_00","224","2096","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("부실채권");
            obj.set_cssclass("sta_MF_icon02");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_02_00_00","384","2096","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("주문수량");
            obj.set_cssclass("sta_MF_icon04");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_02_01","304","2096","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("정상채권");
            obj.set_cssclass("sta_MF_icon03");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_02_00_00_00","464","2096","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("출고수량");
            obj.set_cssclass("sta_MF_icon05");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_03","144","2144","112","23",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("06/18 (차트 안 날짜)");
            obj.set_cssclass("sta_MF_gridNum");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_03_00","272","2144","112","23",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("42 (차트 안 숫자)");
            obj.set_cssclass("sta_MF_gridCount");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_02_00_00_01","544","2096","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("출지");
            obj.set_cssclass("sta_MF_icon06");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_02_00_00_00_00","624","2096","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("착지");
            obj.set_cssclass("sta_MF_icon07");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_00_00","388","1831","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("109");
            obj.set_cssclass("sta_MF_numO");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_01_00_00","328","1813","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("운송완료");
            obj.set_cssclass("sta_MF_car2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_01_00","208","1831","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("244");
            obj.set_cssclass("sta_MF_numB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_02_00","148","1813","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("배차");
            obj.set_cssclass("sta_MF_car");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","144","2197","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_MF_weather01");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","234","2197","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_MF_weather02");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","324","2197","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_MF_weather03");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","414","2197","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_MF_weather04");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_03","504","2197","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_MF_weather05");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_04","594","2197","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_MF_weather06");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_10","594","2296","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_MF_weather12");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_09","504","2296","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_MF_weather11");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_08","414","2296","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_MF_weather10");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_07","324","2296","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_MF_weather09");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_06","234","2296","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_MF_weather08");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_05","144","2296","70","70",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_MF_weather07");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03","144","2421","181","45",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("만료");
            obj.set_cssclass("sta_WF_numTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_02","260","2421","65","45",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_cssclass("sta_WF_numBlue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","512","1668","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("18<fs v=\'12\'><fc v=\'#333333\'>℃ </fc></fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_MF_WeatherText02");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_00","345","2421","181","45",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("~30일");
            obj.set_cssclass("sta_WF_numTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_02_00","461","2421","65","45",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("20");
            obj.set_cssclass("sta_WF_numBlue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_00_00","546","2421","181","45",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("~60일");
            obj.set_cssclass("sta_WF_numTitle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_02_00_00","662","2421","65","45",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("50");
            obj.set_cssclass("sta_WF_numBlue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","440","111","1182",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("Grid");
            obj.set_textAlign("center");
            obj.set_background("#f8f8f8");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","110","440",null,"1182","5",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_textAlign("center");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #767676");
            obj.set_font("bold 9pt \"Gulim\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","159","455","624","270",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("grd_MF_content");
            obj.set_autofittype("col");
            obj.set_binddataset("Dataset02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록일자\"/><Cell col=\"3\" text=\"게시자\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" cssclass=\"expr:Column0==&apos;긍정&apos;?&apos;grd_WF_blue&apos; :( Column0==&apos;부정&apos;?&apos;grd_WF_red&apos; :&apos;&apos;)\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"grd_WF_date\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"주문등록시\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","159","795","375","191",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("grd_MF_content2");
            obj.set_binddataset("Dataset03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"공장\"/><Cell col=\"1\" text=\"설비(부품)명\"/><Cell col=\"2\" text=\"부족재고&#13;&#10;(안전재고/현재고)\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"expr:&quot;&lt;b v=&apos;true&apos;&gt;&lt;fs v=&apos;14&apos;&gt;&quot; + Column2 + &quot;&lt;/fs&gt;&lt;/b&gt;&quot; +&quot;\\n&quot;+Column3\" cssclass=\"expr:parseInt(Column2)&lt;=0 ? &apos;grd_WF_orangeBg&apos; : &apos;grd_WF_redBg&apos;\" textAlign=\"center\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","159","770","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("주의");
            obj.set_cssclass("sta_MF_orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","199","770","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("부족");
            obj.set_cssclass("sta_MF_red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","574","795","375","191",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("grd_MF_content2");
            obj.set_binddataset("Dataset04");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"공장\"/><Cell col=\"1\" text=\"완료/대상\"/><Cell col=\"2\" text=\"완료율\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\" displaytype=\"progressbarcontrol\" progressbarblockgap=\"0\" progressbarblocksize=\"100\" progressbardirection=\"backward\" progressbarsmooth=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static61_00_00_00","434","772","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("단위 : EA");
            obj.set_cssclass("sta_MF_Unit");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_01","159","1055","375","251",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("grd_MF_content2");
            obj.set_binddataset("Dataset03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"35\"/><Row size=\"18\"/><Row size=\"30\"/></Rows><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:Column0\" font=\"bold 14px/normal &quot;NanumGothic&quot;\"/><Cell col=\"1\" rowspan=\"3\" text=\"bind:Column1\" font=\"bold 14px/normal &quot;NanumGothic&quot;\"/><Cell col=\"2\" cssclass=\"expr:parseInt(Column2)&lt;=0 ? &apos;grd_WF_orangeBg&apos; : &apos;grd_WF_redBg&apos;\" textAlign=\"center\" border=\"2px solid #f5f6f9,1px solid #f5f6f9,0px solid #f5f6f9\" text=\"bind:Column2\" font=\"bold 18px/normal &quot;NanumGothic&quot;\"/><Cell row=\"1\" col=\"2\" cssclass=\"expr:parseInt(Column2)&lt;=0 ? &apos;grd_WF_orangeBg&apos; : &apos;grd_WF_redBg&apos;\" border=\"0px solid #f5f6f9,1px solid #f5f6f9\" text=\"안전 : 1,000\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" cssclass=\"expr:parseInt(Column2)&lt;=0 ? &apos;grd_WF_orangeBg&apos; : &apos;grd_WF_redBg&apos;\" border=\"0px solid #f5f6f9,1px solid #f5f6f9,2px solid #f5f6f9\" text=\"현재 : 1,001\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00_00","199","1030","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("부족");
            obj.set_cssclass("sta_MF_red");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","159","1030","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("주의");
            obj.set_cssclass("sta_MF_orange");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_04","148","1908","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("관리채권");
            obj.set_cssclass("sta_MF_countC");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_03","258","1923","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("6,460");
            obj.set_cssclass("sta_MF_numM");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_01_01","350","1908","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("부실채권");
            obj.set_cssclass("sta_MF_count2C");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_01","461","1923","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("3,029");
            obj.set_cssclass("sta_MF_numR");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","248","1918","12","40",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_background("RGBA(255,0,0,0.40)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","244","1958","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("12");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_02_01","553","1908","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("관리채권");
            obj.set_cssclass("sta_MF_moneyC");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_01_01","663","1923","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("6,460");
            obj.set_cssclass("sta_MF_numM");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_00_01","865","1923","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("3,029");
            obj.set_cssclass("sta_MF_numR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_01_00_01","754","1908","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("부실채권");
            obj.set_cssclass("sta_MF_money2C");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_01_00_00","240","2008","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("244");
            obj.set_cssclass("sta_MF_numB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_02_00_00","148","1993","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("배차");
            obj.set_cssclass("sta_MF_carC");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_01_00_00_00","350","1993","160","60",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("운송완료");
            obj.set_cssclass("sta_MF_car2C");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00_00_00_00","460","2008","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("109");
            obj.set_cssclass("sta_MF_numO");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01","144","2954","445","203",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_background("url(\'theme://images/sta_MF_content1.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00","144","3177","445","416",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_background("url(\'theme://images/sta_MF_content2.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00_00","609","2741","445","416",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_background("url(\'theme://images/sta_MF_content3.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00_00_00","609","3177","445","416",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_background("url(\'theme://images/sta_MF_content4.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00_01","144","3613","899","842",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_background("url(\'theme://images/sta_MF_content5.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00_01_00","144","4475","900","416",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_background("url(\'theme://images/sta_MF_content6.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00_01_00_00","144","4911","900","416",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_background("url(\'theme://images/sta_MF_content7.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00_01_00_00_00","144","5347","900","416",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_background("url(\'theme://images/sta_MF_content8.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_01_00_01_00_00_00_00","144","5783","900","416",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_background("url(\'theme://images/sta_MF_content9.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_02","144","2521","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("동부지점");
            obj.set_cssclass("sta_WF_circle01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","206","2546","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("매출금액 123,456,789");
            obj.set_cssclass("sta_WF_circleT");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_01","194","2525","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_background("RGBA(255,0,0,0.40)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00_00","189","2565","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("10");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_02_00","364","2521","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("서부지점");
            obj.set_cssclass("sta_WF_circle02");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","426","2546","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("매출금액 123,456,789");
            obj.set_cssclass("sta_WF_circleT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_02_00_00","584","2521","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("대구지점");
            obj.set_cssclass("sta_WF_circle03");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","646","2546","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("매출금액 123,456,789");
            obj.set_cssclass("sta_WF_circleT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_02_01","144","2601","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("경기지점");
            obj.set_cssclass("sta_WF_circle04");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","206","2626","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("매출금액 123,456,789");
            obj.set_cssclass("sta_WF_circleT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_03_02_00_01","364","2601","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("강원지점");
            obj.set_cssclass("sta_WF_circle05");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","426","2626","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("매출금액 123,456,789");
            obj.set_cssclass("sta_WF_circleT");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","144","2711","285","60",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("환율 1145.6");
            obj.set_cssclass("sta_MF_NumberN");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_00","144","2781","285","60",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("환율 1145.6");
            obj.set_cssclass("sta_MF_NumberB");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02_00","158","1416","968","190",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_binddataset("Dataset04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"110\"/><Column size=\"62\"/><Column size=\"110\"/><Column size=\"62\"/><Column size=\"110\"/><Column size=\"62\"/><Column size=\"110\"/><Column size=\"62\"/><Column size=\"110\"/></Columns><Rows><Row size=\"25\"/><Row size=\"25\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" cssclass=\"grd_WF_circle01\"/><Cell col=\"1\" cssclass=\"grd_WF_circleT\" text=\"동부지점\"/><Cell col=\"2\" rowspan=\"2\" cssclass=\"grd_WF_circle02\"/><Cell col=\"3\" cssclass=\"grd_WF_circleT\" text=\"서부지점\"/><Cell col=\"4\" rowspan=\"2\" cssclass=\"grd_WF_circle03\"/><Cell col=\"5\" cssclass=\"grd_WF_circleT\" text=\"대구지점\"/><Cell col=\"6\" rowspan=\"2\" cssclass=\"grd_WF_circle04\"/><Cell col=\"7\" cssclass=\"grd_WF_circleT\" text=\"경기지점\"/><Cell col=\"8\" rowspan=\"2\" cssclass=\"grd_WF_circle05\"/><Cell col=\"9\" cssclass=\"grd_WF_circleT\" text=\"강원지점\"/><Cell row=\"1\" col=\"1\" cssclass=\"grd_WF_circleT2\" text=\"매출금액 123,456,789\"/><Cell row=\"1\" col=\"3\" cssclass=\"grd_WF_circleT2\" text=\"매출금액 123,456,789\"/><Cell row=\"1\" col=\"5\" cssclass=\"grd_WF_circleT2\" text=\"매출금액 123,456,789\"/><Cell row=\"1\" col=\"7\" cssclass=\"grd_WF_circleT2\" text=\"매출금액 123,456,789\"/><Cell row=\"1\" col=\"9\" cssclass=\"grd_WF_circleT2\" text=\"매출금액 123,456,789\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRank","588","1045","354","270",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_binddataset("Dataset05");
            obj.set_border("0px");
            obj.set_scrollbartype("none none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"115\"/></Columns><Rows><Row size=\"90\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:&quot;grd_WF_circle0&quot; + Column0\" border=\"0px none,0px none,1px solid #eaeaec\"/><Cell col=\"1\" cssclass=\"grd_WF_circleT\" text=\"bind:Column1\" border=\"0px none,0px none,1px solid #eaeaec\" verticalAlign=\"middle\" font=\"normal 600 20px/normal &quot;NanumGothic&quot;\"/><Cell col=\"2\" cssclass=\"grd_WF_circleT2\" text=\"매출금액\" border=\"0px none,0px none,1px solid #eaeaec\" verticalAlign=\"middle\" textAlign=\"right\"/><Cell col=\"3\" cssclass=\"grd_WF_circleT2\" text=\"bind:Column2\" border=\"0px none,0px none,1px solid #eaeaec\" displaytype=\"number\" padding=\"0px 20px 0px 0px\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
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

        };
        this.loadIncludeScript("04. Dashboard.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
