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
            this.set_titletext("시료관리");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022</Col><Col id=\"Column2\">1차</Col><Col id=\"Column1\">정기</Col><Col id=\"Column3\">어린이</Col></Row><Row><Col id=\"Column0\">2022</Col><Col id=\"Column2\">1차</Col><Col id=\"Column1\">수시</Col><Col id=\"Column3\">어린이</Col></Row><Row><Col id=\"Column0\">2022</Col><Col id=\"Column2\">2차</Col><Col id=\"Column1\">수시</Col><Col id=\"Column3\">어린이</Col></Row><Row><Col id=\"Column0\">2022</Col><Col id=\"Column1\">정기</Col><Col id=\"Column2\">2차</Col><Col id=\"Column3\">어린이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj.set_keystring("G:+Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column6\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column9\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column12\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column15\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column18\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column21\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"INT\" size=\"256\" prop=\"SUM\"/><Column id=\"Column24\" type=\"INT\" size=\"256\" prop=\"SUM\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">어린이용 물놀이 기구</Col><Col id=\"Column2\">6</Col><Col id=\"Column1\">수용보조용품(착용형)</Col><Col id=\"Column3\"/><Col id=\"Column4\">Y</Col><Col id=\"Column6\"/><Col id=\"Column8\"/><Col id=\"Column10\">Y</Col><Col id=\"Column5\"/><Col id=\"Column11\">3</Col><Col id=\"Column12\">3</Col><Col id=\"Column13\">Y</Col><Col id=\"Column14\">3</Col><Col id=\"Column15\">3</Col><Col id=\"Column9\"/></Row><Row><Col id=\"Column0\">어린이용 물놀이 기구</Col><Col id=\"Column2\">6</Col><Col id=\"Column1\">공기주입 물놀이 기구</Col><Col id=\"Column3\">Y</Col><Col id=\"Column4\">Y</Col><Col id=\"Column5\">3</Col><Col id=\"Column6\">3</Col><Col id=\"Column16\"/><Col id=\"Column17\"/><Col id=\"Column18\"/><Col id=\"Column8\">3</Col><Col id=\"Column9\">3</Col></Row><Row><Col id=\"Column0\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">3</Col><Col id=\"Column1\">휴대용 유아침대</Col><Col id=\"Column3\"/><Col id=\"Column6\"/><Col id=\"Column7\">Y</Col><Col id=\"Column8\"/><Col id=\"Column9\"/><Col id=\"Column10\">Y</Col><Col id=\"Column11\"/><Col id=\"Column12\"/></Row><Row><Col id=\"Column0\">자동차용 어린이 보호장치</Col><Col id=\"Column1\">카시트 보호매트</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\"/><Col id=\"Column4\">Y</Col><Col id=\"Column5\"/><Col id=\"Column6\"/><Col id=\"Column7\">Y</Col><Col id=\"Column8\"/><Col id=\"Column9\"/><Col id=\"Column13\">Y</Col><Col id=\"Column14\"/><Col id=\"Column15\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">실무회의 참석요청(온나라)</Col><Col id=\"Column2\"/><Col id=\"Column1\">20220302</Col><Col id=\"Column3\"/><Col id=\"Column4\">Y</Col><Col id=\"Column6\">Y</Col><Col id=\"Column8\">Y</Col><Col id=\"Column10\">Y</Col></Row><Row><Col id=\"Column0\">실무회의 자료작성(이메일 공유)</Col><Col id=\"Column2\">6</Col><Col id=\"Column1\">20220325</Col><Col id=\"Column3\">Y</Col><Col id=\"Column4\">Y</Col><Col id=\"Column5\">Y</Col></Row><Row><Col id=\"Column0\">실무회의(착수회의)</Col><Col id=\"Column2\">2</Col><Col id=\"Column1\">20220402</Col><Col id=\"Column3\"/><Col id=\"Column6\">Y</Col><Col id=\"Column7\">Y</Col><Col id=\"Column8\">Y</Col></Row><Row><Col id=\"Column0\">실무회의결과보고(온나라)</Col><Col id=\"Column1\">20220412</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\"/><Col id=\"Column4\">Y</Col><Col id=\"Column5\">Y</Col><Col id=\"Column6\">Y</Col><Col id=\"Column7\">Y</Col></Row><Row><Col id=\"Column0\">시료구립요청(온나라)</Col><Col id=\"Column1\">20220413</Col></Row><Row><Col id=\"Column0\">시료구입계획보고</Col><Col id=\"Column1\">20220422</Col></Row><Row><Col id=\"Column0\">시료구입계획승인(온나라)</Col><Col id=\"Column1\">20220425</Col></Row><Row><Col id=\"Column0\">계획보고(온나라)</Col><Col id=\"Column1\">20220428</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">안전인증</Col><Col id=\"NAME\">안전인증</Col></Row><Row><Col id=\"CODE\">안전확인</Col><Col id=\"NAME\">안전확인</Col></Row><Row><Col id=\"CODE\">공급자적합성</Col><Col id=\"NAME\">공급자적합성</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00_00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">총납</Col><Col id=\"Column2\">총 함유량 100 mg/kg 이하 (페인트 및 표면코팅의 경우 90 mg/kg 이하)</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column3\"/><Col id=\"Column4\">Y</Col><Col id=\"Column6\">Y</Col><Col id=\"Column8\">Y</Col><Col id=\"Column10\">Y</Col></Row><Row><Col id=\"Column0\">총카드뮴</Col><Col id=\"Column2\">총 함유량 75 mg/kg 이하</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column3\">Y</Col><Col id=\"Column4\">Y</Col><Col id=\"Column5\">Y</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column2\">총 합 0.1% 이하(DEHP, DBP, BBP, DINP, DIDP, DnOP, DIBP)</Col><Col id=\"Column1\">최중결함</Col><Col id=\"Column3\"/><Col id=\"Column6\">Y</Col><Col id=\"Column7\">Y</Col><Col id=\"Column8\">Y</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">경결함</Col><Col id=\"Column2\"/><Col id=\"Column3\"/><Col id=\"Column4\">Y</Col><Col id=\"Column5\">Y</Col><Col id=\"Column6\">Y</Col><Col id=\"Column7\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00_00_00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022-정기01-01-001</Col><Col id=\"Column2\">20220405</Col><Col id=\"Column1\">물총</Col><Col id=\"Column3\">어린이 물총</Col><Col id=\"Column4\">1</Col><Col id=\"Column6\">20220429</Col><Col id=\"Column8\">https://www.coupang.com/vp/products/6741488409?itemId=3475551094&amp;vendorItemId=71461872786&amp;sourceType=cmgoms&amp;isAddedCart=</Col><Col id=\"Column10\">Y</Col><Col id=\"Column5\">KCL</Col><Col id=\"Column7\">K0021-20123-1231</Col></Row><Row><Col id=\"Column0\">2022-정기01-01-002</Col><Col id=\"Column2\">20220406</Col><Col id=\"Column1\">물총</Col><Col id=\"Column3\">어린이 물총</Col><Col id=\"Column4\">1</Col><Col id=\"Column5\">KTC</Col><Col id=\"Column6\">20220429</Col><Col id=\"Column7\">K0021-20123-1231</Col><Col id=\"Column8\">https://www.coupang.com/vp/products/6741488409?itemId=3475551094&amp;vendorItemId=71461872786&amp;sourceType=cmgoms&amp;isAddedCart=</Col></Row><Row><Col id=\"Column0\">2022-정기01-01-003</Col><Col id=\"Column2\">20220407</Col><Col id=\"Column1\">물총</Col><Col id=\"Column3\">어린이 물총</Col><Col id=\"Column6\">20220429</Col><Col id=\"Column7\">K0021-20123-1231</Col><Col id=\"Column8\">https://www.coupang.com/vp/products/6741488409?itemId=3475551094&amp;vendorItemId=71461872786&amp;sourceType=cmgoms&amp;isAddedCart=</Col><Col id=\"Column4\">1</Col><Col id=\"Column5\">KATRI</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022</Col><Col id=\"Column2\">1차</Col><Col id=\"Column1\">정기</Col><Col id=\"Column3\">어린이</Col><Col id=\"Column4\">안전인증</Col></Row><Row><Col id=\"Column0\">2022</Col><Col id=\"Column2\">1차</Col><Col id=\"Column1\">수시</Col><Col id=\"Column3\">어린이</Col><Col id=\"Column4\">안전확인</Col></Row><Row><Col id=\"Column0\">2022</Col><Col id=\"Column2\">2차</Col><Col id=\"Column1\">수시</Col><Col id=\"Column3\">어린이</Col><Col id=\"Column4\">안전인증</Col></Row><Row><Col id=\"Column0\">2022</Col><Col id=\"Column1\">정기</Col><Col id=\"Column2\">2차</Col><Col id=\"Column3\">어린이</Col><Col id=\"Column4\">공급자적합성</Col></Row></Rows>");
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

            obj = new Button("btnSpliter00","374","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("DivRight","btnSpliter00:5","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divTab01","0","124",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("20");
            obj.set_text("dfadfadfdaf");
            obj.set_url("biz::pln/PL020S01.xfdl");
            obj.set_visible("false");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("0");
            obj.set_text("안전서조사 차수 상세");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgCd","0","26",null,"31","0",null,"560",null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("Static34","0","56",null,"31","0",null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgCdT","0","26","120","31",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("3");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Edit("edtProgNm00","127","31","160","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_essential");
            obj.set_value("2022");
            obj.set_text("2022");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgTypeT00","edtProgNm00:7","26","120","31",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("5");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Edit("edtProgNm00_00","staProgTypeT00:7","31","160","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("6");
            obj.set_cssclass("edt_WF_essential");
            obj.set_value("1차");
            obj.set_text("1차");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Combo("cboProgType00","715","31","160","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsIn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("");
            obj.set_value("어린이");
            obj.set_index("-1");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgTypeT00_00","cboProgType00:7","26","120","31",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("7");
            obj.set_text("정기/수시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgTypeT00_02","edtProgNm00_00:7","26","120","31",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("16");
            obj.set_text("인증분야");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Combo("cboProgType00_00","staProgTypeT00_00:7","31","160","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsIn00");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("정기");
            obj.set_value("정기");
            obj.set_index("1");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgTypeT00_01","0","56","120","31",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("10");
            obj.set_text("테마");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Edit("edtProgNm01","127","61","160","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("11");
            obj.set_value("신학기");
            obj.set_text("신학기");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgTypeT00_00_01","294","56","120","31",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("12");
            obj.set_text("총수량");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Edit("edtProgNm01_00","staProgTypeT00_00_01:7","62","160","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("13");
            obj.set_value("320");
            obj.set_text("320");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgTypeT00_00_00_00","588","56","120","31",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("14");
            obj.set_text("시작일자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","715","61","160","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("15");
            obj.set_value("20220302");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Button("btnTab00","0","97","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("17");
            obj.set_text("품목/시료배부");
            obj.set_cssclass("btn_WF_tab02");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab00","0","124",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("19");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            obj.set_visible("true");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Static("staProgDetailT","10","10","500","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form.divTab00.form);
            obj.set_taborder("1");
            obj.set_text("시료관리");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.form.DivRight.form.divTab00.addChild(obj.name, obj);

            obj = new Grid("grdProgList00","10","staProgDetailT:5",null,null,"10","300",null,null,null,null,this.divDetail.form.DivRight.form.divTab00.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"폼목명\"/><Cell col=\"1\" rowspan=\"3\" text=\"세부품목명\"/><Cell col=\"2\" rowspan=\"3\" text=\"계획수량\"/><Cell col=\"3\" rowspan=\"3\" text=\"우선인계\"/><Cell col=\"4\" colspan=\"14\" text=\"시험기관\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"KCL\"/><Cell row=\"1\" col=\"6\" colspan=\"2\" text=\"KTR\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" text=\"KTC\"/><Cell row=\"1\" col=\"10\" colspan=\"2\" text=\"KATRI\"/><Cell row=\"1\" col=\"12\" colspan=\"2\" text=\"FITI\"/><Cell row=\"1\" col=\"14\" colspan=\"2\" text=\"KOTITI\"/><Cell row=\"1\" col=\"16\" colspan=\"2\" text=\"KTL\"/><Cell row=\"2\" col=\"4\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"5\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"6\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"7\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"8\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"9\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"10\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"11\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"12\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"13\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"14\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"15\" text=\"배부&#13;&#10;수량\"/><Cell row=\"2\" col=\"16\" text=\"계획&#13;&#10;수량\"/><Cell row=\"2\" col=\"17\" text=\"배부&#13;&#10;수량\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"1\" text=\"expr:dataset.getRowLevel(currow)==1 ? &apos;소계&apos; : Column1\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" textAlign=\"center\" edittype=\"checkbox\" text=\"bind:Column3\" displaytype=\"expr:dataset.getRowLevel(currow) == 0 ? &apos;checkboxcontrol&apos; :&apos;none&apos;\"/><Cell col=\"4\" text=\"bind:Column5\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:Column6\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:Column8\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:Column9\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:Column11\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:Column12\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:Column14\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:Column15\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:Column17\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:Column18\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:Column20\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:Column21\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:Column23\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:Column24\" textAlign=\"center\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"normal\" text=\"expr:dataset.getSum(&quot;Column2&quot;)\" textAlign=\"center\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;Column5&quot;)\" textAlign=\"center\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;Column6&quot;)\" textAlign=\"center\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;Column8&quot;)\" textAlign=\"center\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;Column9&quot;)\" textAlign=\"center\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;Column11&quot;)\" textAlign=\"center\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;Column12&quot;)\" textAlign=\"center\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;Column14&quot;)\" textAlign=\"center\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;Column15&quot;)\" textAlign=\"center\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;Column17&quot;)\" textAlign=\"center\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;Column18&quot;)\" textAlign=\"center\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;Column20&quot;)\" textAlign=\"center\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;Column21&quot;)\" textAlign=\"center\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;Column23&quot;)\" textAlign=\"center\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;Column24&quot;)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.form.DivRight.form.divTab00.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00","10","grdProgList00:10","500","21",null,null,null,null,null,null,this.divDetail.form.DivRight.form.divTab00.form);
            obj.set_taborder("2");
            obj.set_text("시료 등록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.form.DivRight.form.divTab00.addChild(obj.name, obj);

            obj = new Grid("grdProgList","10","staProgDetailT00:5",null,null,"10","10",null,null,null,null,this.divDetail.form.DivRight.form.divTab00.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00_00_00_00");
            obj.set_extendsizetype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시료번호\"/><Cell col=\"1\" text=\"세세부품명\"/><Cell col=\"2\" text=\"구입일자\"/><Cell col=\"3\" text=\"제품명\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"인계기관\"/><Cell col=\"6\" text=\"인계일자\"/><Cell col=\"7\" text=\"제조번호\"/><Cell col=\"8\" text=\"URL\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\" displaytype=\"calendarcontrol\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:Column6\" textAlign=\"center\" displaytype=\"calendarcontrol\"/><Cell col=\"7\" text=\"bind:Column7\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:Column8\" textAlign=\"left\" wordWrap=\"none\"/></Band></Format></Formats>");
            this.divDetail.form.DivRight.form.divTab00.addChild(obj.name, obj);

            obj = new Button("btnDeployAdd",null,"grdProgList00:9","46","23","10",null,null,null,null,null,this.divDetail.form.DivRight.form.divTab00.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.form.DivRight.form.divTab00.addChild(obj.name, obj);

            obj = new Button("btnTab01","179","97","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("18");
            obj.set_text("시료인계");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Button("btnTab02","90","97","90","27",null,null,null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("21");
            obj.set_text("시료관리");
            obj.set_cssclass("btn_WF_tab01");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Div("divTab02","0","124",null,null,"0","0",null,null,null,null,this.divDetail.form.DivRight.form);
            obj.set_taborder("22");
            obj.set_text("dfadfadfdaf");
            obj.set_url("biz::pln/PL020S02.xfdl");
            obj.set_visible("false");
            this.divDetail.form.DivRight.addChild(obj.name, obj);

            obj = new Grid("grdProgList","0","26",null,null,"btnSpliter00:5","173",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"정기/수시\"/><Cell col=\"2\" text=\"차수\"/><Cell col=\"3\" text=\"인증분야\"/><Cell col=\"4\" text=\"인증종류\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"center\"/></Band></Format></Formats>");
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

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab01
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab01.form,function(p){});
            this.divDetail.form.DivRight.form.divTab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab00.form
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab00.form,function(p){});
            this.divDetail.form.DivRight.form.divTab00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.DivRight.form.divTab02
            obj = new Layout("default","",0,0,this.divDetail.form.DivRight.form.divTab02.form,function(p){});
            this.divDetail.form.DivRight.form.divTab02.form.addLayout(obj.name, obj);

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
            obj = new BindItem("item2","divDetail.form.DivRight.form.staProgCd","text","dsProgDetail","PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboPrefix","value","dsSearch","PROGRAM_PREFIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboPrefix00","value","dsSearch","PROGRAM_PREFIX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboUseYn00","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","biz::pln/PL020S01.xfdl");
            this._addPreloadList("fdl","biz::pln/PL020S02.xfdl");
        };
        
        // User Script
        this.registerScript("PL020.xfdl", function() {
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

        		//UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter);
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter00);

        	   var objList = {"this.divDetail.form.DivRight.form.btnTab00" : this.divDetail.form.DivRight.form.divTab00,
        	                  "this.divDetail.form.DivRight.form.btnTab01" : this.divDetail.form.DivRight.form.divTab01,
        					  "this.divDetail.form.DivRight.form.btnTab02" : this.divDetail.form.DivRight.form.divTab02};
                var sTabId = "tab01";
                var objFirstLoad = this.divDetail.form.DivRight.form.btnTab00;
                var sTabOnCss = "btn_WF_tab02";
                var sTabOffCss = "btn_WF_tab01";

                take.TabSetting(this, sTabId, objList, objFirstLoad, sTabOnCss, sTabOffCss);

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GM030_onload,this);
            this.divSearch.form.cboPrefix.addEventHandler("onitemchanged",this.divSearch_cboPrefix_onitemchanged,this);
            this.divSearch.form.cboPrefix00.addEventHandler("onitemchanged",this.divSearch_cboPrefix_onitemchanged,this);
            this.divDetail.form.btnSpliter00.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.DivRight.form.btnTab00.addEventHandler("onclick",this.btnTab00_onclick,this);
            this.divDetail.form.DivRight.form.divTab00.form.grdProgList00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.DivRight.form.divTab00.form.grdProgList.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.divDetail.form.DivRight.form.divTab00.form.btnDeployAdd.addEventHandler("onclick",this.divTab00_btnDeployAdd_onclick,this);
            this.divDetail.form.DivRight.form.btnTab01.addEventHandler("onclick",this.btnTab01_onclick,this);
            this.divDetail.form.DivRight.form.btnTab02.addEventHandler("onclick",this.btnTab01_onclick,this);
            this.divDetail.form.grdProgList.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
        };
        this.loadIncludeScript("PL020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
