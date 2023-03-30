(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM010P03");
            this.set_titletext("공통시험항목 선택");
            this.set_cssclass("fm_work");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column26\" type=\"STRING\" size=\"256\"/><Column id=\"Column27\" type=\"STRING\" size=\"256\"/><Column id=\"Column28\" type=\"STRING\" size=\"256\"/><Column id=\"Column29\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">유해원소 용출</Col><Col id=\"Column1\">안티모니(Sb)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">60 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">유해원소 용출</Col><Col id=\"Column1\">비소(As)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">2 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">25 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">유해원소 용출</Col><Col id=\"Column1\">바륨(Ba)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">1 000 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">유해원소 용출</Col><Col id=\"Column1\">카드뮴(Cd)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">75 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">유해원소 용출</Col><Col id=\"Column1\">크로뮴(Cr)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">60 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">유해원소 용출</Col><Col id=\"Column1\">납(Pb)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">90 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">유해원소 용출</Col><Col id=\"Column1\">수은(Hg)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">2 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">60 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">유해원소 용출</Col><Col id=\"Column1\">셀레늄(Se)</Col><Col id=\"Column5\">유해원소 용출</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">500 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">금속 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">100 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">고분자 기질 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">100 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">90 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">총 납 함유량</Col><Col id=\"Column1\">기타 재료</Col><Col id=\"Column5\">총 납 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">100 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">금속 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">75 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">고분자 기질 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">75 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">페인트나 유사 코팅</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">75 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">총 카드뮴 함유량</Col><Col id=\"Column1\">기타 재료</Col><Col id=\"Column5\">총 카드뮴 함유량</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">10 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">75 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column1\">DEHP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.01 미만</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">총 합 0.1% 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column1\">DBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.01 미만</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">총 합 0.1% 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column1\">BBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.01 미만</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">총 합 0.1% 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column1\">DINP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.01 미만</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">총 합 0.1% 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column1\">DIDP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.01 미만</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">총 합 0.1% 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column1\">DnOP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.01 미만</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">총 합 0.1% 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">프탈레이트계 가소제</Col><Col id=\"Column1\">DIBP</Col><Col id=\"Column5\">프탈레이트계 가소제</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.01 미만</Col><Col id=\"Column8\">%</Col><Col id=\"Column9\">총 합 0.1% 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">니트로사민류(경구용)</Col><Col id=\"Column5\">니트로사민류(경구용)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.005 미만(합계)</Col><Col id=\"Column8\">-</Col><Col id=\"Column9\">0.01 이하(합계)</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">니트로사민류(비경구용)</Col><Col id=\"Column5\">니트로사민류(비경구용)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.005 미만(합계)</Col><Col id=\"Column8\">-</Col><Col id=\"Column9\">0.05 이하(합계)</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">니트로사민류 생성가능물질(경구용)</Col><Col id=\"Column5\">니트로사민류 생성가능물질(경구용)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.05 미만(합계)</Col><Col id=\"Column8\">-</Col><Col id=\"Column9\">0.1 이하(합계)</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">니트로사민류 생성가능물질(비경구용)</Col><Col id=\"Column5\">니트로사민류 생성가능물질(비경구용)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">0.05 미만(합계)</Col><Col id=\"Column8\">-</Col><Col id=\"Column9\">1.0 이하(합계)</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">폼알데하이드</Col><Col id=\"Column5\">폼알데하이드</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">검출안됨</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">75 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">biphenyl-4-ylamine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">benzidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">4-chloro-o-toluidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">2-naphthylamine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">o-aminoazotoluene</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">2-amino-4-nitrotoluene</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">4-chloroaniline</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">2,4-diaminoanisole</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">4,4&apos;-diamino-diphenylmethane</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">3,3&apos;-dichlorobenzidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">3,3&apos;-dimethoxybenzidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">3,3&apos;-dimethylbenzidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">4,4&apos;-methylenedi-o-toluidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">p-cresidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">4,4&apos;-methylene-bis-(2-chloroaniline)</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">4,4&apos;-oxydianiline</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">4,4&apos;-thiodianiline</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">o-toluidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">2,4-toluylenediamine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">2,4,5-trimethylaniline</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">o-anisidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">4-aminoazobenzene</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">2,4-xylidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column1\">2,6-xylidine</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">아릴아민(KS K 0739 : 2017)</Col><Col id=\"Column1\">4-aminoazobenzene</Col><Col id=\"Column5\">아릴아민(KS K 0147 : 2015)</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column7\">5 미만</Col><Col id=\"Column8\">mg/kg</Col><Col id=\"Column9\">30 이하</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">pH</Col><Col id=\"Column5\">pH</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column8\">-</Col><Col id=\"Column9\">4.0~7.5</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">사용금지 물질</Col><Col id=\"Column5\">사용금지 물질</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">석면을 사용하거나 석면이 검출되어서는 안 된다.</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.1 작은 부품</Col><Col id=\"Column1\">3.2.1.1 36개월 미만의 어린이제품</Col><Col id=\"Column5\">3.2.1 작은 부품</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.1 작은 부품</Col><Col id=\"Column1\">3.2.1.2 36개월 이상 72개월 미만의 어린이제품</Col><Col id=\"Column5\">3.2.1 작은 부품</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.2 가장자리</Col><Col id=\"Column1\">3.2.2.1 유리 또는 금속의 날카로운 가장자리</Col><Col id=\"Column2\">3.2.2.1.1</Col><Col id=\"Column5\">3.2.2 가장자리</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.2 가장자리</Col><Col id=\"Column1\">3.2.2.1 유리 또는 금속의 날카로운 가장자리</Col><Col id=\"Column2\">3.2.2.1.2</Col><Col id=\"Column5\">3.2.2 가장자리</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.2 가장자리</Col><Col id=\"Column1\">3.2.2.1 유리 또는 금속의 날카로운 가장자리</Col><Col id=\"Column2\">3.2.2.1.3</Col><Col id=\"Column5\">3.2.2 가장자리</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.2 가장자리</Col><Col id=\"Column1\">3.2.2.2 기능성 날카로운 가장자리</Col><Col id=\"Column2\">3.2.2.2.1 </Col><Col id=\"Column5\">3.2.2 가장자리</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.2 가장자리</Col><Col id=\"Column1\">3.2.2.2 기능성 날카로운 가장자리</Col><Col id=\"Column2\">3.2.2.2.2</Col><Col id=\"Column5\">3.2.2 가장자리</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.2 가장자리</Col><Col id=\"Column1\">3.2.2.3 금속 어린이제품에 대한 가장자리</Col><Col id=\"Column5\">3.2.2 가장자리</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.2 가장자리</Col><Col id=\"Column1\">3.2.2.4 성형 어린이제품에 대한 가장자리</Col><Col id=\"Column5\">3.2.2 가장자리</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.2 가장자리</Col><Col id=\"Column1\">3.2.2.5 나사못 또는 나선줄이 있는 막대의 가장자리</Col><Col id=\"Column5\">3.2.2 가장자리</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.3 날카로운 끝</Col><Col id=\"Column1\">3.2.3.1 접근 가능한 날카로운 끝</Col><Col id=\"Column2\">3.2.3.1.1</Col><Col id=\"Column5\">3.2.3 날카로운 끝</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.3 날카로운 끝</Col><Col id=\"Column1\">3.2.3.1 접근 가능한 날카로운 끝</Col><Col id=\"Column2\">3.2.3.1.2</Col><Col id=\"Column5\">3.2.3 날카로운 끝</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.3 날카로운 끝</Col><Col id=\"Column1\">3.2.3.1 접근 가능한 날카로운 끝</Col><Col id=\"Column2\">3.2.3.1.3</Col><Col id=\"Column5\">3.2.3 날카로운 끝</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.3 날카로운 끝</Col><Col id=\"Column1\">3.2.3.2 기능성 날카로운 끝</Col><Col id=\"Column2\">3.2.3.2.1</Col><Col id=\"Column5\">3.2.3 날카로운 끝</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.3 날카로운 끝</Col><Col id=\"Column1\">3.2.3.2 기능성 날카로운 끝</Col><Col id=\"Column2\">3.2.3.2.2</Col><Col id=\"Column5\">3.2.3 날카로운 끝</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.3 날카로운 끝</Col><Col id=\"Column1\">3.2.3.3 목재 어린이제품</Col><Col id=\"Column5\">3.2.3 날카로운 끝</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.4 자석과 자석부품</Col><Col id=\"Column1\">3.2.4.1 96개월 이상의 어린이용 자석/전기 실험 세트</Col><Col id=\"Column5\">3.2.4 자석과 자석부품</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.4 자석과 자석부품</Col><Col id=\"Column1\">3.2.4.2 자석과 자석부품을 포함하는 모든 어린이제품</Col><Col id=\"Column2\">3.2.4.2.1</Col><Col id=\"Column5\">3.2.4 자석과 자석부품</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.4 자석과 자석부품</Col><Col id=\"Column1\">3.2.4.2 자석과 자석부품을 포함하는 모든 어린이제품</Col><Col id=\"Column2\">3.2.4.2.2</Col><Col id=\"Column5\">3.2.4 자석과 자석부품</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.4 자석과 자석부품</Col><Col id=\"Column1\">3.2.4.2 자석과 자석부품을 포함하는 모든 어린이제품</Col><Col id=\"Column2\">3.2.4.2.3</Col><Col id=\"Column5\">3.2.4 자석과 자석부품</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.2.5 유리 </Col><Col id=\"Column5\">3.2.5 유리 </Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">3.3 전기적 안전요건</Col><Col id=\"Column5\">3.3 전기적 안전요건</Col><Col id=\"Column6\">취중결함</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조자명 또는 수입자명(수입품에 한함)</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">주소 및 전화번호</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조년월</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">제조국</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">사용연령(또는 권장사용연령)</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">크기·체중의 한계</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">필요시 사용상 주의사항 또는 사용 설명서</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row><Row><Col id=\"Column0\">표시사항</Col><Col id=\"Column1\">“KC마크는 이 제품이 공통안전기준에 적합하였음을 의미합니다.”  해당 문구를 제품에 눈에 띄게 표시하여야 한다. 또한 문구를 생략하려는 경우에는 소비자가 이를 즉시 확인할 수 있도록 제품에 홈페이지 주소 등을 기재하고, 이를 통해 소비자가 직접 확인이 가능함을 표시하여야 한다.&#10;&#10;</Col><Col id=\"Column5\">표시사항</Col><Col id=\"Column9\">이상없음</Col><Col id=\"Column10\">개별</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static22","0",null,null,"10","0","790",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","51","23","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","48",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","20","30","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09","545","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("W\r\n50");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static11","325","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","325","30","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode01","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("시험항목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMlInfoSearch00_00","110","10",null,"21","1199",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09_00","255","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("W\r\n50");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.85%","89","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","119",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("목품 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdProgList01","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.getSetter("takegrid").set("checkbox");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"분류1\"/><Cell col=\"1\" text=\"분류2\"/><Cell col=\"2\" text=\"분류3\"/><Cell col=\"3\" text=\"분류4\"/><Cell col=\"4\" text=\"분류5\"/><Cell col=\"5\" text=\"항목 표현명\"/><Cell col=\"6\" text=\"결함구분\"/><Cell col=\"7\" text=\"검출한계\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"기준치\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:Column4\" textAlign=\"left\"/><Cell col=\"4\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:Column6\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:Column7\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:Column8\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:Column9\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","43",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"57","23","btnCancel:3","20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("11");
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
            obj = new Layout("default","",1500,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PL010P03.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_bWebOnload = false;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = take.nvl(this.parent.sMenuCd, "");
        this.fv_sBoardSeq = take.nvl(this.parent.sBoardSeq, "");
        this.fv_sAttachCd = take.nvl(this.parent.sBoardAttach, "");
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_divFile;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.CM010P03_onload = function(obj, e)
        {

        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

            this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, "PROJECT_CD"	, this.fv_sProjectCd);
        	this.dsSearch.setColumn(0, "MENU_CD"	, this.fv_sMenuCd);
        	this.dsSearch.setColumn(0, "BOARD_SEQ"	, this.fv_sBoardSeq);

        	var sNamespaces = new Array();
        		sNamespaces.push("BoardManagement.boardInfoDetail");
        		sNamespaces.push("BoardManagement.boardTargetList");

        	var sInDs = ["dsSearch"];

        	var sOutDs = new Array();
        		sOutDs.push("dsNotice");
        		sOutDs.push("dsNotiTarget");

        	//Script
        	take.tranSelect(this, "Search", sNamespaces, sInDs, sOutDs, "", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	var sContents = this.wbWebEditor.getProperty("window").callMethod("getContents", 1);

        	this.dsNotice.setColumn(0, "PROJECT_CD"	, this.fv_sProjectCd);
        	this.dsNotice.setColumn(0, "MENU_CD"	, this.fv_sMenuCd);
         	this.dsNotice.setColumn(0, "BOARD_TXT"	, sContents);

        	this.dsPushInfo.setColumn(0, "BOARD_TITLE", this.edtTitle.value);
        	this.dsPushInfo.setColumn(0, "PROJECT_CD"	, this.fv_sProjectCd);
        	this.dsPushInfo.setColumn(0, "MENU_CD"		, this.fv_sMenuCd);
        	this.dsPushInfo.setColumn(0, "USER_NM"		, this.fv_objGdsUserInfo.getColumn(0,"USER_NM"));
        	this.dsPushInfo.setColumn(0, "TOKEN_VAL"	, "1");

        	var sCalFrom = this.divPopOption.form.calPopStartDt.value;
        	var sCalTo	 = this.divPopOption.form.calPopEndDt.value;
        	if( !take.isEmpty(sCalFrom) && !take.isEmpty(sCalTo) ){
        		var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        		if( !bFromTo ){
        			take.alert(this, "", "팝업공지일이 잘못되었습니다.");
        			return;
        		}
        	}

        	//공지사항에 "title" 글이 새로 올라왔습니다. (공지사항은 우선 하드코딩 --> 추후에 menu코드 가져와서 변경)
        	//작성자 : 이동건

        	//데이터변경 / 파일 수정 여부
        	if (!take.isDsModified(this.dsNotice)
        		&& !take.isDsModified(this.dsNotiTarget)
        		&& !this.fv_divFile.fn_isUpdate())
        	{
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	//파일 업로드 / 저장
        	this.fv_divFile.fnUploadSaveFileList(this,
        		function(rtnValue){
        			if(rtnValue.result){
        				take.transaction(this, "Save", "SVC_LOC::cm/boardSave.do", "dsNotice=dsNotice:U dsNotiTarget=dsNotiTarget:U dsPushInfo=dsPushInfo:U", "", "", "fnCallback");
        			}
        		}
        	);
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "";

        	take.transaction(this, "Delete", "SVC_LOC::cm/boardSave.do", "dsNotice=dsNotice", "", "", "fnCallback");
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.wbWebEditor_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("summer.html") != -1){
        		this.fv_bWebOnload = true;
        	}
        };

        this.wbWebEditor_onsize = function(obj,e)
        {
        	this.wbWebEditor.getProperty("window").callMethod("setHeight", (this.wbWebEditor.getOffsetHeight()-85));
        };

        this.CM010P03_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);
                    this.wbWebEditor.getProperty("window").callMethod("fnEditorReady", (this.wbWebEditor.getOffsetHeight()-65));

        			if(!take.isEmpty(this.fv_sBoardSeq)){
        				this.fnSearch();
        			}else{
        				this.dsNotice.addRow();

        				//첨부파일 코드가 없을시 기준에 맞게 코드 생성
        				this.fv_divFile.fnSearchAtchFileId(this,
        					function(rtnValue){
        						this.dsNotice.setColumn(0, 'BOARD_ATTACH', rtnValue.resultData);
        						this.fv_divFile.fn_setAtchFileId(rtnValue.resultData);
        						this.fv_divFile.fnSearchFileList(this);
        					}
        				);
        			}
        		}
        	}
        };

        this.btnSave_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	var bRowDel = take.confirm(this, "question", "삭제 하시겠습니까?");
        	if (!bRowDel) return;

        	this.fnDelRow();
        };

        this.btnPrev_onclick = function(obj,e)
        {
        	this.opener.fnCallPopup(this.fv_sBoardSeq, this.fv_sAttachCd, "CM010P02");
        	this.close();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        // 팝업공지대상자 조회
        this.divPopOption_btnSchPopTarget_onclick = function(obj,e)
        {
        	var arrParam = {};
        	take.openPopup(this, "CM050P01", "frm::mod/CM050P01.xfdl", arrParam, "resizable=false", "fnPopCallback", false);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        this.fnGoList = function()
        {
        	this.opener.fnSearch();
        	this.close();
        };

        // 초기 ui 세팅
        this.fnUISetting = function(objUserParam)
        {
        	var sAttachYn = "Y";

        	if(objUserParam){
        		if(objUserParam.attach_yn)
        			sAttachYn = take.nvl(objUserParam.attach_yn, "Y");
        	}

        	var nFormHeight = this.getOffsetHeight();
        	if( "N" == sAttachYn )
        	{
        		var nFileHegit = this.divFile.getOffsetHeight();
        		nFormHeight = nFormHeight - nFileHegit;

        		this.divFile.set_height(0);
        	}

        	this.set_height(nFormHeight);
        	this.resetScroll();
        };

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
                case "Save" : //저장 콜백
                    //Script
        			take.alert(this, "", "저장이 완료되었습니다.");
        			this.fnGoList();
                    break;
        		case "Delete" : //삭제 콜백
        			take.alert(this, "", "삭제가 완료되었습니다.");
        			this.fnGoList();

        			break;
                case "Search" :  //조회 콜백
                    //Script
        			var sContents = this.dsNotice.getColumn(0, "BOARD_TXT");
        			//20210118 정해원 게시판 내용 조회 불가
        			//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        			//this.wbWebEditor.getProperty("window").callMethod("setContents", sContents);
        			var docWeb = this.wbWebEditor.getProperty("document").getProperty("all");
        				docWeb.getProperty("inputData").setProperty("value", take.nvl(sContents, ""));

        			this.wbWebEditor.getProperty("window").callMethod("setContents");

        			//첨부파일 조회
        			var atchFileId = this.dsNotice.getColumn(0, 'BOARD_ATTACH');
        			this.fv_divFile.fn_setAtchFileId(atchFileId);
        			this.fv_divFile.fnSearchFileList();

        			var sTargets = "";
        			for( var i=0; i<this.dsNotiTarget.rowcount; i++ )
        			{
        				var sTargetNm = this.dsNotiTarget.getColumn(i, "TARGET_NM");
        				sTargets += "," + sTargetNm;
        			}
        			this.divPopOption.form.edtPopTarget.set_value(sTargets.substring(1));

                    break;
                default :
                    break;
            }
        };

        this.fnPopCallback = function(sPopId, sRtn)
        {
            switch(sPopId)
            {
                case "CM050P01" : // 공지대상추가 콜백
        			if( "" == take.nvl(sRtn, "") ) return false;

        			this.dsNotiTarget.deleteAll();
        			this.divPopOption.form.edtPopTarget.set_value("");

        			var arrTarget = sRtn.split("::");
        			var nTargetCnt = arrTarget.length;
        			var sPopTargets = take.nvl(this.divPopOption.form.edtPopTarget.value, "");

        			for( var i=0; i<nTargetCnt; i++ )
        			{
        				var arrInfo = arrTarget[i].split(",");
        				var sTargetCd = arrInfo[0];
        				var sTargetNm = arrInfo[1];
        				var sTargetType = arrInfo[2];

        				if( i > 0 ) sPopTargets += ",";

        				sPopTargets += sTargetNm;

        				var nRow = this.dsNotiTarget.addRow();
        				this.dsNotiTarget.setColumn(nRow, "TARGET_CD", sTargetCd);
        				this.dsNotiTarget.setColumn(nRow, "TARGET_NM", sTargetNm);
        				this.dsNotiTarget.setColumn(nRow, "TARGET_TYPE", sTargetType);
        				this.dsNotiTarget.setColumn(nRow, "PROJECT_CD", this.fv_sProjectCd);
        				this.dsNotiTarget.setColumn(nRow, "MENU_CD", this.fv_sMenuCd);
        				this.dsNotiTarget.setColumn(nRow, "BOARD_SEQ", this.dsNotice.getColumn(0, "BOARD_SEQ"));
        			}

        			this.divPopOption.form.edtPopTarget.set_value(sPopTargets);

                    break;
                default :
                    break;
            }
        };


        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CM010P03_onload,this);
            this.addEventHandler("ontimer",this.CM010P03_ontimer,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.edtMlInfoSearch00_00.addEventHandler("onkeyup",this.edtMlInfoSearch_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.grdProgList01.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.Static03.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
        };
        this.loadIncludeScript("PL010P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
