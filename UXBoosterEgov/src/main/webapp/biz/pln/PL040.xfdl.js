(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GM030");
            this.set_titletext("계획관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsYear", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">2022</Col><Col id=\"NAME\">2022</Col></Row><Row><Col id=\"CODE\">2023</Col><Col id=\"NAME\">2023</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCha", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">전체</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">1차</Col><Col id=\"NAME\">1차</Col></Row><Row><Col id=\"CODE\">2차</Col><Col id=\"NAME\">2차</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">어린이</Col><Col id=\"NAME\">어린이</Col></Row><Row><Col id=\"CODE\">생활</Col><Col id=\"NAME\">생활</Col></Row><Row><Col id=\"CODE\">전기</Col><Col id=\"NAME\">전기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">전체</Col><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">정기</Col><Col id=\"NAME\">정기</Col></Row><Row><Col id=\"CODE\">수시</Col><Col id=\"NAME\">수시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022</Col><Col id=\"Column2\">1차</Col><Col id=\"Column1\">수시</Col><Col id=\"Column3\">어린이</Col><Col id=\"Column4\">기관검토중</Col></Row><Row><Col id=\"Column0\">2022</Col><Col id=\"Column2\">2차</Col><Col id=\"Column1\">수시</Col><Col id=\"Column3\">어린이</Col><Col id=\"Column4\">기관검토완료</Col></Row><Row><Col id=\"Column0\">2022</Col><Col id=\"Column1\">정기</Col><Col id=\"Column2\">2차</Col><Col id=\"Column3\">어린이</Col><Col id=\"Column4\">계획완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">공기주입 물놀이기구</Col><Col id=\"Column20\">1</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">수영보조용품(착용형)</Col><Col id=\"Column20\">1</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">수영보조용품(비착용형)</Col><Col id=\"Column20\">1</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">휴대용 유아침대</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">유아용좌석</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">부스터 좌석</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">하네스/조끼형 보호장치</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">외의류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">중의류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">내의류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">침구류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">신발류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">양말류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">장갑류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">모자류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">가방류(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">신생아용품(유섬)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">어린이용 침대가드</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">유아용 노리개젖꼭지</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">유아용 노리개젖꼭지 걸이</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">바닥매트</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스포츠 보호 용품(보호 장구 및 안전모)</Col><Col id=\"Column2\">보호장구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스케이트보드</Col><Col id=\"Column2\">A등급</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스케이트보드</Col><Col id=\"Column2\">B등급</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">아동용 이단침대</Col><Col id=\"Column2\">어린이용 이단침대</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">활동완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">미술공예 완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">퍼즐 완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">파티완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">봉제인형</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">기능성 완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">게임 완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">승용 완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">발사체 완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">역할놀이 완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">악기완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">운동완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">유아완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">블록완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">모형완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">자석완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">조종완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">가구완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">교육용 완구(교구)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">조립완구</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">기타완구(작동완구)</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 삼륜차</Col><Col id=\"Column2\">유아용 삼륜차</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 자전거</Col><Col id=\"Column2\">어린이용 자전거</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">크레용·크레파스</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">연필류·연필심</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">샤프연필·샤프연필심</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">지우개</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">파스텔</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">그림물감</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">분필</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">마킹펜류</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">연필깎이</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">필통</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">색종이</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">공책</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">스케치북</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">점토류</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">문구용 풀</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">악기류</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 캐리어</Col><Col id=\"Column2\">프레임 없는 캐리어</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 캐리어</Col><Col id=\"Column2\">프레임 있는 캐리어</Col><Col id=\"Column20\">2</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 안경테 및 선글라스</Col><Col id=\"Column2\">안경테</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 안경테 및 선글라스</Col><Col id=\"Column2\">선글라스</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">우산</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">양산</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">우산 겸용 양산</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 바퀴달린 운동화</Col><Col id=\"Column2\">어린이용 바퀴달린 운동화</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 장신구</Col><Col id=\"Column2\">어린이용 장신구</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 킥보드</Col><Col id=\"Column2\">수동식</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 킥보드</Col><Col id=\"Column2\">전동식</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">내의류(아섬)</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">중의류(아섬)</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">외의류(아섬)</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">침구류(아섬)</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col><Col id=\"Column5\">20220201</Col><Col id=\"Column6\">20221231</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">기타 제품류(아섬)</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">양말류(아섬)</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">장갑류(아섭)</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">모자류(아섬)</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">기타어린이제품</Col><Col id=\"Column2\">기타어린이제품</Col><Col id=\"Column20\">3</Col><Col id=\"Column3\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCha00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staPrefixT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPrefix","110","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYear");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("2022");
            obj.set_value("2022");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staProgNmT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPrefix00","445","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsCha");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("1차 정기");
            obj.set_value("1차");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","780","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsIn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("어린이");
            obj.set_value("어린이");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT00","1025","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("정시/수시");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn00","1115","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsIn00");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProgListTitle","0","0",null,"21","1329",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("안전성조사 차수");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSpliter00","375","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdProgList","0","26",null,null,"btnSpliter00:5","173",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"정기/수시\"/><Cell col=\"2\" text=\"차수\"/><Cell col=\"3\" text=\"인증분야\"/><Cell col=\"4\" text=\"진행상태\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("DivRight","btnSpliter00:5","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","0","staProgDetailT:5",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"94\"/><Column size=\"94\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"인증종류\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"2\" rowspan=\"2\" text=\"세부품목명\" autosizecol=\"limitmin\"/><Cell col=\"3\" rowspan=\"2\" text=\"가능여부\" autosizecol=\"limitmin\"/><Cell col=\"4\" rowspan=\"2\" text=\"최대가능수량\" autosizecol=\"limitmin\"/><Cell col=\"5\" colspan=\"2\" text=\"시험 불가 기간\" autosizecol=\"limitmin\"/><Cell col=\"7\" rowspan=\"2\" text=\"비고\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"5\" text=\"시작일\"/><Cell row=\"1\" col=\"6\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:Column3\" edittype=\"combo\" autosizecol=\"limitmin\" textAlign=\"center\" combodataset=\"dsCha00\" combodisplaynulltext=\"Y\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltype=\"nulltext\"/><Cell col=\"4\" text=\"bind:Column4\" edittype=\"normal\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:Column5\" edittype=\"date\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:Column6\" edittype=\"date\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:Column7\" edittype=\"normal\" autosizecol=\"limitmin\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

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

            obj = new Static("Static01_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form,function(p){});
            this.divDetail.form.DivRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboPrefix","value","dsSearch","PROGRAM_PREFIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboPrefix00","value","dsSearch","PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUseYn00","value","dsSearch","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PL040.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    GM030.xfdl
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
        this.fv_sMlCd="";
        this.fv_sMlNm="";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * GM030_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.GM030_onload = function(obj,e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter00);

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
        	//조회 시 prefix를 가져와서 프로그램 선택 시 비교해야 함
        	take.tranCode(this, ["00006"], ["dsProgPrefix"], "ALL", "fnCallback");

        };

        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "progOnload";

        	if(sTranId == "progOnload"){
        		var objDivSearch = this.divSearch.form;
        		take.tranSelect(this, "progOnload", "ProgramManagement.programInfoList", "dsSearch", "dsProgList"
        		,"PROGRAM_PREFIX='"+take.nvl(objDivSearch.cboPrefix.value, "")
        		  +"' PROGRAM_CD='"+take.nvl(objDivSearch.edtProgNm.value, "")+"'"
        		  +"' USE_YN='Y'", "fnCallback");

        	} else if(sTranId == "Language"){
        		this.dsProgMultiLangDetail.clearData();
        		var nRow  = this.dsMsgList.rowposition;
        		var sMlCd = take.nvl(this.dsMsgList.getColumn(nRow, "ML_CD"), "");
        		take.tranSelect(this, "Language", "SystemCommon.multilanguageDetailList", "", "dsProgMultiLangDetail", "sMlCd='" + sMlCd + "'", "fnCallback");

        	} else if(sTranId == "msgSelect"){
        		this.dsMsgList.clearData();
        		var nRow = this.dsProgList.rowposition;
        		var nProgCd = this.dsProgList.getColumn(nRow, "PROGRAM_CD");
        		take.tranSelect(this, "msgSelect", "ProgramManagement.programMessageList", "", "dsMsgList", "PROGRAM_CD='"+nProgCd+"'", "fnCallback");
        	}
        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "programMessageSave";

        	var nRow 		= this.dsProgList.rowposition;
        	var sProgType 	= this.dsProgList.getColumn(nRow, "PROGRAM_TYPE");	//프로그램 타입
        	var sProgCd 	= take.nvl(this.dsProgList.getColumn(nRow, "PROGRAM_CD"), "");	//프로그램 코드
        	var bolConfirm 	= take.confirm(this, "question", "{text} 하시겠습니까?", {text : "저장"});
        	if(bolConfirm) {
        		//take.tranSave(this, "programMessageSave", "ProgramManagement.programMessage", "dsMsgList", "", "PROGRAM_CD='"+sProgCd+"'", "fnCallback");
                take.transaction(this, "programMessageSave", "SVC_LOC::gm/programMessageSave.do", "dsMsgList=dsMsgList:U", "", "PROGRAM_CD='"+sProgCd+"'", "fnCallback");
        	}
        };

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

        	take.openPopup(this, "addMultiLanguage", "biz::sys/OM010P06.xfdl", "", "", "fnPopCallback");
        };

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
            var nSelRow= this.dsMsgList.rowposition;
        	this.dsMsgList.deleteRow(nSelRow);
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.divDetail_grdProgList_onselectchanged = function(obj,e)
        {
        	if(e.row != -1){
        		this.fnSearch("msgSelect");
        	}
        };

        this.dsMsgList_onrowposchanged = function(obj,e)
        {
        	if(e.row != -1){
        		this.fnSearch("Language");
        	}
        };

        this.divSearch_edtProgNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSearch("progOnload");
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

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
                case "progOnload" : //조회 콜백
                    //Script
                    break;
                case "msgSelect" :  //조회 콜백

                    break;
                case "codetran.multi" : //조회 콜백
        			this.divSearch.form.cboPrefix.set_index(0);
        			this.fnSearch();
                    break;
                case "programMessageSave" :  //저장 콜백
                    this.fnSearch("msgSelect");
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        };

        /**
         * fnPopCallback : 다국어팝업 콜백
         * @example this.fnPopCallback();
         */
        this.fnPopCallback = function (sId, nReturnVal)
        {
        	var objDs = this.dsMsgList;
        	var nRow;

        	if(!take.isEmpty(nReturnVal)){
        		sCd 	 = nReturnVal.split(",")[0];
        		sMsgNm   = nReturnVal.split(",")[1];
        		sDescTxt = nReturnVal.split(",")[2];
        		sTypeId  = nReturnVal.split(",")[3];
        		sTypeNm  = nReturnVal.split(",")[4];

        		objDs.set_enableevent(false);
        		nRow = objDs.addRow();
        		objDs.setColumn(nRow, "ML_CD"	  	, sCd);
        		objDs.setColumn(nRow, "MESSAGE_NM"	, sMsgNm);
        		objDs.setColumn(nRow, "DESC_TXT"	, sDescTxt);
        		objDs.setColumn(nRow, "ML_TYPE"	  	, sTypeId);
        		objDs.setColumn(nRow, "ML_TYPE_NM"	, sTypeNm);
        		objDs.setColumn(nRow, "MESSAGE_SEQ"	, "-자동생성-");
        		objDs.set_enableevent(true);
        	} else return;
        	this.fnSearch("Language");
        };

        this.divDetail_DivRight_Button27_onclick = function(obj,e)
        {
        	take.openPopup(this, "addMultiLanguage", "biz::pln/PL010P01.xfdl", "", "", "fnPopCallback");
        };

        this.divTab00_btnDeployAdd_onclick = function(obj,e)
        {
        	this.dsList00_00.addRow();
        };

        this.divDetail_DivRight_btnDeployAdd00_onclick = function(obj,e)
        {
        	take.openPopup(this, "addMultiLanguage", "biz::pln/PL010P02.xfdl", "", "", "fnPopCallback");
        };

        this.divDetail_DivRight_btnDeployAdd00_00_onclick = function(obj,e)
        {
        	take.openPopup(this, "addMultiLanguage", "biz::pln/PL010P03.xfdl", "", "", "fnPopCallback");
        };

        this.divDetail_DivRight_btnDeployAdd00_01_onclick = function(obj,e)
        {
        	take.openPopup(this, "addMultiLanguage", "biz::pln/PL010P01.xfdl", "", "", "fnPopCallback");
        };

        this.btnTab01_onclick = function(obj,e)
        {
        	this.divDetail.form.DivRight.form.divTab01.set_url("biz::pln/PL010S02.xfdl");
        };

        this.btnTab00_onclick = function(obj,e)
        {
        	this.divDetail.form.DivRight.form.divTab00.set_url("biz::pln/PL010S01.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GM030_onload,this);
            this.divSearch.form.cboPrefix.addEventHandler("onitemchanged",this.divSearch_cboPrefix_onitemchanged,this);
            this.divSearch.form.cboPrefix00.addEventHandler("onitemchanged",this.divSearch_cboPrefix_onitemchanged,this);
            this.divDetail.form.btnSpliter00.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.grdProgList.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
        };
        this.loadIncludeScript("PL040.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
