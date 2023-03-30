(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL020S01");
            this.set_titletext("계획_시험항목");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,625);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">금속 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">고분자 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">기타 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">금속 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">고분자 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">기타 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.1 총론</Col><Col id=\"Column5\">5.1 총론</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.1 기구의 부양특성</Col><Col id=\"Column5\">5.2.1 기구의 부양특성</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.2 잔존부력</Col><Col id=\"Column5\">5.2.2 잔존부력</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.3 앉는 부분의 안전성</Col><Col id=\"Column5\">5.2.3 앉는 부분의 안전성</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.1 착용감 - 타입 B의 기구</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.2 버클 및 기타 부착물의 안전성</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.3 기능의 유지</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.1 가장자리, 모서리부분 및 끝부분</Col><Col id=\"Column5\">5.4.1 가장자리, 모서리부분 및 끝부분</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.2 작은 부품</Col><Col id=\"Column5\">5.4.2 작은 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">안티모니 (Sb)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">비소 (As)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">25 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">바륨 (Ba)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">1 000 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">카드뮴 (Cd)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">크로뮴 (Cr)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">납 (Pb)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">수은 (Hg)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">셀레늄 (Se)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">500 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">금속 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">고분자 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">기타 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">금속 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">고분자 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">기타 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DEHP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">BBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DINP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DIDP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DnOP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DIBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.1 착용하는 기구의 완제품 하중시험</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.2 봉사</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.3 밸브와 잠금장치</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.1 접합부분강도 및 공기를 넣는 보조용품의 내구성</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.2 펑크의 방지</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.3 폼 및 부력이 있는 물질이 물을 흡수하지 않는 정도</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.4 부력이 있는 물질이 압력을 견디는 정도</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.1 표시가 염소로 소독된 소금물에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.2 표시가 침의 영향에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.3 표시가 땀의 영향에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.8 표시의 접착강도</Col><Col id=\"Column5\">5.8 표시의 접착강도</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">모델명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조연월</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조자명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">수입자명 </Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">주소 및 전화번호</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조국명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">사용연령 및 체중범위</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">경고사항</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">사용상 주의사항</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">금속 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">고분자 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">기타 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">공기주입 물놀이기구</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">수영보조용품(착용형)</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column0\">안전인증</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">수영보조용품(비착용형)</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">휴대용 유아침대</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">유아용좌석</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">자동차용 어린이 보호장치</Col><Col id=\"Column2\">부스터 좌석</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">하네스/조끼형 보호장치</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">외의류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">중의류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">내의류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">침구류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">신발류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">양말류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">장갑류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">모자류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">가방류(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 섬유제품</Col><Col id=\"Column2\">신생아용품(유섬)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">어린이용 침대가드</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">유아용 노리개젖꼭지</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">유아용 노리개젖꼭지 걸이</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">합성수지제 어린이용품</Col><Col id=\"Column2\">바닥매트</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스포츠 보호 용품(보호 장구 및 안전모)</Col><Col id=\"Column2\">보호장구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스케이트보드</Col><Col id=\"Column2\">A등급</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 스케이트보드</Col><Col id=\"Column2\">B등급</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">아동용 이단침대</Col><Col id=\"Column2\">어린이용 이단침대</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">활동완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">미술공예 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">퍼즐 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">파티완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">봉제인형</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">기능성 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">게임 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">승용 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">발사체 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">역할놀이 완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">악기완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">운동완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">유아완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">블록완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">모형완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">자석완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">조종완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">가구완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">교육용 완구(교구)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">조립완구</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">기타완구(작동완구)</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 삼륜차</Col><Col id=\"Column2\">유아용 삼륜차</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">어린이용 자전거</Col><Col id=\"Column2\">어린이용 자전거</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">크레용·크레파스</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">연필류·연필심</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">샤프연필·샤프연필심</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">지우개</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">파스텔</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">그림물감</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">분필</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">마킹펜류</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">연필깎이</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">필통</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">색종이</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">공책</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">스케치북</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">점토류</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">문구용 풀</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">학용품</Col><Col id=\"Column2\">악기류</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 캐리어</Col><Col id=\"Column2\">프레임 없는 캐리어</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">안전확인</Col><Col id=\"Column1\">유아용 캐리어</Col><Col id=\"Column2\">프레임 있는 캐리어</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 안경테 및 선글라스</Col><Col id=\"Column2\">안경테</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 안경테 및 선글라스</Col><Col id=\"Column2\">선글라스</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">우산</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">양산</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 우산 및 양산</Col><Col id=\"Column2\">우산 겸용 양산</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 바퀴달린 운동화</Col><Col id=\"Column2\">어린이용 바퀴달린 운동화</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 장신구</Col><Col id=\"Column2\">어린이용 장신구</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 킥보드</Col><Col id=\"Column2\">수동식</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">어린이용 킥보드</Col><Col id=\"Column2\">전동식</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">내의류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">중의류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">외의류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">침구류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">기타 제품류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">양말류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">장갑류(아섭)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">아동용 섬유제품</Col><Col id=\"Column2\">모자류(아섬)</Col><Col id=\"Column20\">3</Col></Row><Row><Col id=\"Column0\">공급자적합성</Col><Col id=\"Column1\">기타어린이제품</Col><Col id=\"Column2\">기타어린이제품</Col><Col id=\"Column20\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">공통</Col><Col id=\"Column2\">공기주입 물놀이기구</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column1\">공통</Col><Col id=\"Column0\">총 카드뮴 함유량</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column1\">공통</Col><Col id=\"Column2\">수영보조용품(착용형)</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column1\">공통</Col><Col id=\"Column0\">표시사항</Col></Row><Row><Col id=\"Column0\">공기실의 용적</Col><Col id=\"Column1\">개별</Col><Col id=\"Column2\">수영보조용품(비착용형)</Col><Col id=\"Column20\">1</Col></Row><Row><Col id=\"Column0\">두께(mm)</Col><Col id=\"Column1\">개별</Col><Col id=\"Column2\">휴대용 유아침대</Col><Col id=\"Column20\">2</Col></Row><Row><Col id=\"Column0\">인장절단하중(Kg)</Col><Col id=\"Column1\">개별</Col></Row><Row><Col id=\"Column0\">내압기밀성</Col><Col id=\"Column1\">개별</Col></Row><Row><Col id=\"Column0\">공기마개</Col><Col id=\"Column1\">개별</Col></Row><Row><Col id=\"Column0\">로프부착부분의인장강도</Col><Col id=\"Column1\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">개별</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList01_00","10","36","430",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"61\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"인증종류\"/><Cell col=\"1\" text=\"품목명\"/><Cell col=\"2\" text=\"세부품목명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList01_01","grdProgList01_00:10","36","240",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00_00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"시험항목\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column0\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList01","grdProgList01_01:10","36",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"분류1\"/><Cell col=\"1\" text=\"분류2\"/><Cell col=\"2\" text=\"분류3\"/><Cell col=\"3\" text=\"분류4\"/><Cell col=\"4\" text=\"분류5\"/><Cell col=\"5\" text=\"결함구분\"/><Cell col=\"6\" text=\"검출한계\"/><Cell col=\"7\" text=\"단위\"/><Cell col=\"8\" text=\"기준치\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"4\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column6\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:Column7\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:Column8\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:Column11\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeployAdd00",null,"9","90","23","grdProgList01:10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시험항목추가");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00","grdProgList01_00:10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("시험항목");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00_00","grdProgList01_01:10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("시험세부항목");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("PL010S02.xfdl", function() {
        /**
        *  다국어관리
        *
        *  @MenuPath    시스템공통 > 다국어관리 > 다국어관리
        *  @FileName    OM010P06.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.08.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.11.17      이동건             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.OM010P05_onload = function(obj,e)
        {
        	UXBooster.afnUseSpliter(this, this.btnSpliter00);
        }

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Group";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
        		case "List" :
        			this.dsMultilanguageInfo.clearData();

        			var sMlGroup = this.divSearch.form.cboMlGroupSearch.value;
        			var sMlNm    = take.nvl(this.divSearch.form.edtMlInfoSearch.value, "");
        			take.tranSelect
        			(
        				this,
        				"List",
        				"SystemCommon.multilanguageInfoList",
        				"",
        				"dsMultilanguageInfo",
        				"sMlGroup='" + sMlGroup + "' ML_NM='" + sMlNm + "'",
        				sCallBack
        			);

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : svcId   - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : errCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : errMsg   - 에러메세지 (공통 콜백에서 넘어옴)
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
                case "List" :  			//다국어목록 콜백
                    //trace(this.dsMultilanguageInfo.saveXML());
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        //N/A

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //조회 버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnTran('List');
        };

        //선택 버튼 클릭 이벤트
        this.btnSelect_onclick = function(obj,e)
        {
        	this.fnSelect();
        };

        //다국어 리스트 더블 클릭 이벤트
        this.grdMultilanguageInfo_oncelldblclick = function(obj,e)
        {
        	this.fnSelect();
        };
        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnSelect(sParam, nParam);
         */
        this.fnSelect = function()
        {
            var objDs    = this.dsMultilanguageInfo;
            var nFromRow = objDs.rowposition;
        	if(nFromRow == -1) {
        		take.alert(this, "warn", "다국어를 선택해주세요", "");
        		return;
        	}

        	var sRtn 	 = objDs.getColumn(nFromRow, "ML_CD");
        		sRtn	+= ','+ objDs.getColumn(nFromRow, "ML_NM");
        		sRtn	+= ','+ objDs.getColumn(nFromRow, "DESC_TXT");
        		sRtn	+= ','+ objDs.getColumn(nFromRow, "ML_TYPE");
        		sRtn	+= ','+ objDs.getColumn(nFromRow, "ML_TYPE_NM");

        	//var sMlCd = this.dsMultilanguageInfo.getColumn(nFromRow, "ML_CD");

        	this.close(sRtn);
        }

        // 다국어명 검색
        this.edtMlInfoSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnTran("List");
        	}
        };
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnDeployAdd00_onclick = function(obj,e)
        {
        	//take.openPopup(this, "addMultiLanguage", "biz::pln/PL010P04.xfdl", "", "", "fnPopCallback");
        	take.openPopup(this, "111111", "biz::pln/PL010P07.xfdl", "", "", "fnPopCallback");
        };

        this.staProgDetailT00_00_onclick = function(obj,e)
        {
        	this.grdProgList01.set_binddataset(this.dsList1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OM010P05_onload,this);
            this.staProgDetailT00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.grdProgList01_00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.grdProgList01_01.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.grdProgList01.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.btnDeployAdd00.addEventHandler("onclick",this.btnDeployAdd00_onclick,this);
            this.staProgDetailT00_00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
            this.staProgDetailT00_00_00_00.addEventHandler("onclick",this.staProgDetailT00_00_onclick,this);
        };
        this.loadIncludeScript("PL010S02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
