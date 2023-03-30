(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL010P02");
            this.set_titletext("품목선택팝업");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">공기주입 물놀이기구</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">수영보조용품(착용형)</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">수영보조용품(비착용형)</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">휴대용 유아침대</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">유아용좌석</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">부스터 좌석</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">하네스/조끼형 보호장치</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">외의류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">중의류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">내의류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">침구류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">신발류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">양말류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">장갑류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">모자류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">가방류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">신생아용품(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">어린이용 침대가드</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">유아용 노리개젖꼭지</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">유아용 노리개젖꼭지 걸이</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">바닥매트</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스포츠 보호 용품(보호 장구 및 안전모)</Col><Col id=\"Column2\">보호장구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스케이트보드</Col><Col id=\"Column2\">A등급</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스케이트보드</Col><Col id=\"Column2\">B등급</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">아동용 이단침대</Col><Col id=\"Column2\">어린이용 이단침대</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">활동완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">미술공예 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">퍼즐 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">파티완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">봉제인형</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">기능성 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">게임 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">승용 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">발사체 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">역할놀이 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">악기완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">운동완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">유아완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">블록완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">모형완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">자석완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">조종완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">가구완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">교육용 완구(교구)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">조립완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">기타완구(작동완구)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 삼륜차</Col><Col id=\"Column2\">유아용 삼륜차</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 자전거</Col><Col id=\"Column2\">어린이용 자전거</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">크레용·크레파스</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">연필류·연필심</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">샤프연필·샤프연필심</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">지우개</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">파스텔</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">그림물감</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">분필</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">마킹펜류</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">연필깎이</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">필통</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">색종이</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">공책</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">스케치북</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">점토류</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">문구용 풀</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">악기류</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 캐리어</Col><Col id=\"Column2\">프레임 없는 캐리어</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 캐리어</Col><Col id=\"Column2\">프레임 있는 캐리어</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 안경테 및 선글라스</Col><Col id=\"Column2\">안경테</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 안경테 및 선글라스</Col><Col id=\"Column2\">선글라스</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">우산</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">양산</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">우산 겸용 양산</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 바퀴달린 운동화</Col><Col id=\"Column2\">어린이용 바퀴달린 운동화</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 장신구</Col><Col id=\"Column2\">어린이용 장신구</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 킥보드</Col><Col id=\"Column2\">수동식</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 킥보드</Col><Col id=\"Column2\">전동식</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">내의류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">중의류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">외의류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">침구류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">기타 제품류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">양말류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">장갑류(아섭)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">모자류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">기타어린이제품</Col><Col id=\"Column2\">기타어린이제품</Col><Col id=\"Column20\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","48","23","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","48",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode","310","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode00","595","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("세부품목명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMlInfoSearch","staCode00:10","10",null,"21","8",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","20","30","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09","545","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("W\r\n50");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static11","325","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","325","30","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMlInfoSearch00","400","10",null,"21","293",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode01","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("인증종류");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMlInfoSearch00_00","110","10",null,"21","583",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09_00","255","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("W\r\n50");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","860","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.48%","89","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","62",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.getSetter("takegrid").set("checkbox");
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"인증종류\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"세부품목명\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("목품 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","42",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"Static03:0","57","23","80",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnSave:3",null,"57","23",null,"20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
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
            this.addEventHandler("onload",this.OM010P05_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.edtMlInfoSearch.addEventHandler("onkeyup",this.edtMlInfoSearch_onkeyup,this);
            this.divSearch.form.edtMlInfoSearch00.addEventHandler("onkeyup",this.edtMlInfoSearch_onkeyup,this);
            this.divSearch.form.edtMlInfoSearch00_00.addEventHandler("onkeyup",this.edtMlInfoSearch_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.Static03.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("PL010P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
