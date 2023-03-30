(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL020S03");
            this.set_titletext("계획_기관검토");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1109,295);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">금속 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">고분자 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">기타 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">금속 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">고분자 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">기타 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column10\">공통</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.1 총론</Col><Col id=\"Column5\">5.1 총론</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.1 기구의 부양특성</Col><Col id=\"Column5\">5.2.1 기구의 부양특성</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.2 잔존부력</Col><Col id=\"Column5\">5.2.2 잔존부력</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.3 앉는 부분의 안전성</Col><Col id=\"Column5\">5.2.3 앉는 부분의 안전성</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.1 착용감 - 타입 B의 기구</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.2 버클 및 기타 부착물의 안전성</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.3 기능의 유지</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.1 가장자리, 모서리부분 및 끝부분</Col><Col id=\"Column5\">5.4.1 가장자리, 모서리부분 및 끝부분</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.2 작은 부품</Col><Col id=\"Column5\">5.4.2 작은 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">안티모니 (Sb)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">비소 (As)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">25 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">바륨 (Ba)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">1 000 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">카드뮴 (Cd)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">크로뮴 (Cr)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">납 (Pb)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">수은 (Hg)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">셀레늄 (Se)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">500 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">금속 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">고분자 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">기타 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">금속 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">고분자 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">기타 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DEHP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">BBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DINP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DIDP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DnOP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DIBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.1 착용하는 기구의 완제품 하중시험</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.2 봉사</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.3 밸브와 잠금장치</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.1 접합부분강도 및 공기를 넣는 보조용품의 내구성</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.2 펑크의 방지</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.3 폼 및 부력이 있는 물질이 물을 흡수하지 않는 정도</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.4 부력이 있는 물질이 압력을 견디는 정도</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.1 표시가 염소로 소독된 소금물에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.2 표시가 침의 영향에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.3 표시가 땀의 영향에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.8 표시의 접착강도</Col><Col id=\"Column5\">5.8 표시의 접착강도</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">모델명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조연월</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조자명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">수입자명 </Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">주소 및 전화번호</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조국명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">사용연령 및 체중범위</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">경고사항</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">사용상 주의사항</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">5.1 총론</Col><Col id=\"Column5\">5.1 총론</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.1 기구의 부양특성</Col><Col id=\"Column5\">5.2.1 기구의 부양특성</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.2 잔존부력</Col><Col id=\"Column5\">5.2.2 잔존부력</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.2 부양</Col><Col id=\"Column1\">5.2.3 앉는 부분의 안전성</Col><Col id=\"Column5\">5.2.3 앉는 부분의 안전성</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.1 착용감 - 타입 B의 기구</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.2 버클 및 기타 부착물의 안전성</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column1\">5.3.3 기능의 유지</Col><Col id=\"Column5\">5.3 착용 및 몸에 맞는 정도</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.1 가장자리, 모서리부분 및 끝부분</Col><Col id=\"Column5\">5.4.1 가장자리, 모서리부분 및 끝부분</Col><Col id=\"Column6\">중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.2 작은 부품</Col><Col id=\"Column5\">5.4.2 작은 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">안티모니 (Sb)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">비소 (As)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">25 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">바륨 (Ba)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">1 000 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">카드뮴 (Cd)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">크로뮴 (Cr)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">납 (Pb)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">수은 (Hg)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">60 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 용출</Col><Col id=\"Column3\">셀레늄 (Se)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">500 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">금속 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">고분자 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">90 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 납 함유량</Col><Col id=\"Column4\">기타 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">100 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">금속 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">고분자 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">유해원소 함유량</Col><Col id=\"Column3\">총 카드뮴 함유량</Col><Col id=\"Column4\">기타 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">75 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DEHP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">BBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DINP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DIDP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DnOP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.4 안전설계</Col><Col id=\"Column1\">5.4.3 유해물질</Col><Col id=\"Column2\">프탈레이트계 가소제</Col><Col id=\"Column3\">DIBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">총 합 0.1% 이하</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.1 착용하는 기구의 완제품 하중시험</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.2 봉사</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.5 조립 및 부품</Col><Col id=\"Column1\">5.5.3 밸브와 잠금장치</Col><Col id=\"Column5\">5.5 조립 및 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.1 접합부분강도 및 공기를 넣는 보조용품의 내구성</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.2 펑크의 방지</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.3 폼 및 부력이 있는 물질이 물을 흡수하지 않는 정도</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column1\">5.6.4 부력이 있는 물질이 압력을 견디는 정도</Col><Col id=\"Column5\">5.6 자재 - 기계적인 부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.1 표시가 염소로 소독된 소금물에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.2 표시가 침의 영향에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column1\">5.7.3 표시가 땀의 영향에 견디는 정도</Col><Col id=\"Column5\">5.7 자재 및 표시방법 - 화학적인부품</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">5.8 표시의 접착강도</Col><Col id=\"Column5\">5.8 표시의 접착강도</Col><Col id=\"Column6\">최중결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">모델명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조연월</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조자명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">수입자명 </Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">주소 및 전화번호</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조국명</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">사용연령 및 체중범위</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">경고사항</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">사용상 주의사항</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column6\">경결함</Col><Col id=\"Column9\">Y</Col><Col id=\"Column10\">개별</Col><Col id=\"Column11\">이상없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">KCL</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"CODE\">KTR</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"CODE\">KTC</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"CODE\">KATRI</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"CODE\">FITI</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"CODE\">KOTITI</Col><Col id=\"CHK\">1</Col></Row><Row><Col id=\"CODE\">KTL</Col></Row><Row><Col id=\"CODE\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">KCL</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">공기주입 물놀이기구</Col><Col id=\"Column20\">1</Col><Col id=\"Column3\">N</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">20230102</Col><Col id=\"Column6\">20231010</Col></Row><Row><Col id=\"Column0\">KTR</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">공기주입 물놀이기구</Col><Col id=\"Column20\">1</Col><Col id=\"Column3\">N</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">20230102</Col><Col id=\"Column6\">20230910</Col></Row><Row><Col id=\"Column0\">KATRI</Col><Col id=\"Column1\">어린이용 물놀이기구</Col><Col id=\"Column2\">공기주입 물놀이기구</Col><Col id=\"Column20\">1</Col><Col id=\"Column3\">N</Col><Col id=\"Column4\">0</Col><Col id=\"Column5\">20230102</Col><Col id=\"Column6\">20230310</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시험기관 검토");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","0","36",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"94\"/><Column size=\"94\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"품목명\"/><Cell col=\"1\" rowspan=\"2\" text=\"세부품목명\" autosizecol=\"limitmin\"/><Cell col=\"2\" rowspan=\"2\" text=\"시험기관\"/><Cell col=\"3\" rowspan=\"2\" text=\"가능여부\" autosizecol=\"limitmin\"/><Cell col=\"4\" rowspan=\"2\" text=\"최대가능수량\" autosizecol=\"limitmin\"/><Cell col=\"5\" colspan=\"2\" text=\"시험 불가 기간\" autosizecol=\"limitmin\"/><Cell col=\"7\" rowspan=\"2\" text=\"비고\" autosizecol=\"limitmin\"/><Cell row=\"1\" col=\"5\" text=\"시작일\"/><Cell row=\"1\" col=\"6\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:Column1\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column2\" edittype=\"none\" autosizecol=\"limitmin\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"3\" text=\"bind:Column3\" edittype=\"combo\" autosizecol=\"limitmin\" textAlign=\"center\" combodataset=\"dsCha00\" combodisplaynulltext=\"Y\" combocodecol=\"CODE\" combodatacol=\"NAME\" combodisplaynulltype=\"nulltext\"/><Cell col=\"4\" text=\"bind:Column4\" edittype=\"normal\" autosizecol=\"limitmin\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:Column5\" edittype=\"date\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"calendarcontrol\"/><Cell col=\"6\" text=\"bind:Column6\" edittype=\"date\" autosizecol=\"limitmin\" textAlign=\"center\" displaytype=\"calendarcontrol\"/><Cell col=\"7\" text=\"bind:Column7\" edittype=\"normal\" autosizecol=\"limitmin\" textAlign=\"left\"/></Band></Format></Formats>");
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
        this.registerScript("PL010P05.xfdl", function() {
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
        	take.openPopup(this, "111111", "biz::pln/PL010P03.xfdl", "", "", "fnPopCallback");
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
        };
        this.loadIncludeScript("PL010P05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
