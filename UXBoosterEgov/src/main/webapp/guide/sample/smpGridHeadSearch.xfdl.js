(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpForm01");
            this.set_titletext("Sample01");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_progressload("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"255\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"255\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"255\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"255\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj.set_progressload("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"255\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"255\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"255\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"255\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"USER_CD\">U000000001</Col><Col id=\"USER_ID\">admin</Col><Col id=\"USER_NM\">관리자</Col><Col id=\"USER_BIRTHDAY\">99990101</Col><Col id=\"USER_EMAIL\">takeit@take-it.co.kr</Col><Col id=\"USER_MOBILE\">01012345678</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">46760</Col><Col id=\"USER_ADDR\">부산 강서구 르노삼성대로 14 상세주소 1-1</Col><Col id=\"DEPT_CD\">D0002</Col><Col id=\"DEPT_NM\">대표이사</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-08-21 15:39</Col><Col id=\"PW_CHANGE_DT\"/><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">211.238.72.96</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000002</Col><Col id=\"USER_ID\">wschun</Col><Col id=\"USER_NM\">천우성</Col><Col id=\"USER_BIRTHDAY\">19800420</Col><Col id=\"USER_EMAIL\">wschun@take-it.co.kr</Col><Col id=\"USER_MOBILE\">01098081178</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">07348</Col><Col id=\"USER_ADDR\">서울 영등포구 도신로54길 5 1</Col><Col id=\"DEPT_CD\">D0002</Col><Col id=\"DEPT_NM\">대표이사</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-06-22 09:48</Col><Col id=\"PW_CHANGE_DT\">2020-04-02 10:49</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\">0:0:0:0:0:0:0:1</Col><Col id=\"JOIN_DATE\">20171222</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000003</Col><Col id=\"USER_ID\">dskim</Col><Col id=\"USER_NM\">김대승122</Col><Col id=\"USER_BIRTHDAY\">19920208</Col><Col id=\"USER_EMAIL\">kim2412@take-it.co.kr</Col><Col id=\"USER_MOBILE\">01024122396</Col><Col id=\"USER_TEL\">02-888-9999</Col><Col id=\"USER_FAX\">02-888-7777</Col><Col id=\"POST_CD\">06000</Col><Col id=\"USER_ADDR\">서울 영등포구 도신로54길 5 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123 123</Col><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-07-07 09:53</Col><Col id=\"PW_CHANGE_DT\">2020-04-03 01:12</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">0:0:0:0:0:0:0:1</Col><Col id=\"JOIN_DATE\">20180305</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000004</Col><Col id=\"USER_ID\">ycjeon</Col><Col id=\"USER_NM\">전영찬</Col><Col id=\"USER_BIRTHDAY\">19920307</Col><Col id=\"USER_EMAIL\">ycjeon@take-it.co.kr</Col><Col id=\"USER_MOBILE\">01091585360</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">22114</Col><Col id=\"USER_ADDR\">인천 미추홀구 숙골로112번길 11 </Col><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-08-14 16:41</Col><Col id=\"PW_CHANGE_DT\">2020-07-16 10:51</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">127.0.0.1</Col><Col id=\"JOIN_DATE\">20190101</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000005</Col><Col id=\"USER_ID\">takeit</Col><Col id=\"USER_NM\">테이크1</Col><Col id=\"USER_BIRTHDAY\">20171223</Col><Col id=\"USER_EMAIL\">takeit@take-it.co.kr</Col><Col id=\"USER_MOBILE\">01098081178</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-08-21 15:44</Col><Col id=\"PW_CHANGE_DT\">2020-04-22 00:00</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">58.142.33.183</Col><Col id=\"JOIN_DATE\">20171223</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000006</Col><Col id=\"USER_ID\">jmshin</Col><Col id=\"USER_NM\">신준민</Col><Col id=\"USER_BIRTHDAY\">19950731</Col><Col id=\"USER_EMAIL\">sjm4633@take-it.co.kr</Col><Col id=\"USER_MOBILE\">01046330728</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">22203</Col><Col id=\"USER_ADDR\">인천 미추홀구 매소홀로 340 </Col><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-07-02 08:58</Col><Col id=\"PW_CHANGE_DT\">2020-06-23 16:58</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">0:0:0:0:0:0:0:1</Col><Col id=\"JOIN_DATE\">20191101</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000008</Col><Col id=\"USER_ID\">kgdbsteel</Col><Col id=\"USER_NM\">KG동부제철</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-06-17 09:24</Col><Col id=\"PW_CHANGE_DT\">2020-06-17 09:24</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">211.117.116.56</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200617</Col><Col id=\"VALID_END_DATE\">20200717</Col></Row><Row><Col id=\"USER_CD\">U000000009</Col><Col id=\"USER_ID\">test01</Col><Col id=\"USER_NM\">테스트</Col><Col id=\"USER_BIRTHDAY\">111111</Col><Col id=\"USER_EMAIL\">1</Col><Col id=\"USER_MOBILE\">01011111111</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">08706</Col><Col id=\"USER_ADDR\">서울 관악구 신림동 808-152 </Col><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-08-20 14:05</Col><Col id=\"PW_CHANGE_DT\">2020-07-28 14:44</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\">223.38.17.79</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200618</Col><Col id=\"VALID_END_DATE\">20200718</Col></Row><Row><Col id=\"USER_CD\">U000000010</Col><Col id=\"USER_ID\">test02</Col><Col id=\"USER_NM\">테스트</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\">tt@tt.com</Col><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-06-18 16:53</Col><Col id=\"PW_CHANGE_DT\">2020-06-18 16:53</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">127.0.0.1</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200618</Col><Col id=\"VALID_END_DATE\">20200718</Col></Row><Row><Col id=\"USER_CD\">U000000012</Col><Col id=\"USER_ID\">tobe</Col><Col id=\"USER_NM\">투비소프트</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\"/><Col id=\"PW_CHANGE_DT\">2020-06-25 17:08</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\"/><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200625</Col><Col id=\"VALID_END_DATE\">20200725</Col></Row><Row><Col id=\"USER_CD\">U000000013</Col><Col id=\"USER_ID\">tobesoft</Col><Col id=\"USER_NM\">투비소프트</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-06-30 11:01</Col><Col id=\"PW_CHANGE_DT\">2020-06-25 17:09</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">222.98.164.253</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200625</Col><Col id=\"VALID_END_DATE\">20200725</Col></Row><Row><Col id=\"USER_CD\">U000000014</Col><Col id=\"USER_ID\">dglee</Col><Col id=\"USER_NM\">이동건</Col><Col id=\"USER_BIRTHDAY\">19900804</Col><Col id=\"USER_EMAIL\">leedg0804@take-it.co.kr</Col><Col id=\"USER_MOBILE\">01031255300</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">13951</Col><Col id=\"USER_ADDR\">경기 안양시 동안구 흥안대로517번길 46 </Col><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">01</Col><Col id=\"USER_STATUS_NM\">사용신청</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\"/><Col id=\"PW_CHANGE_DT\">2020-07-02 10:23</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\"/><Col id=\"JOIN_DATE\">20180305</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000015</Col><Col id=\"USER_ID\">dtto9</Col><Col id=\"USER_NM\">디토나인</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-07-06 14:11</Col><Col id=\"PW_CHANGE_DT\">2020-07-06 13:50</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">218.145.97.207</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200706</Col><Col id=\"VALID_END_DATE\">20200806</Col></Row><Row><Col id=\"USER_CD\">U000000016</Col><Col id=\"USER_ID\">mirae</Col><Col id=\"USER_NM\">미래에셋펀드서비스</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\"/><Col id=\"PW_CHANGE_DT\">2020-07-09 10:23</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\"/><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200709</Col><Col id=\"VALID_END_DATE\">20200809</Col></Row><Row><Col id=\"USER_CD\">U000000017</Col><Col id=\"USER_ID\">mirae</Col><Col id=\"USER_NM\">미래에셋펀드서비스</Col><Col id=\"USER_BIRTHDAY\">111111</Col><Col id=\"USER_EMAIL\">mirae@test.com</Col><Col id=\"USER_MOBILE\">01011111111</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">07376</Col><Col id=\"USER_ADDR\">서울 영등포구 대림동 611 </Col><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-07-13 15:43</Col><Col id=\"PW_CHANGE_DT\">2020-07-09 10:25</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\">192.168.35.29</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200709</Col><Col id=\"VALID_END_DATE\">20200809</Col></Row><Row><Col id=\"USER_CD\">U000000018</Col><Col id=\"USER_ID\">indg</Col><Col id=\"USER_NM\">이노다임</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-08-11 12:07</Col><Col id=\"PW_CHANGE_DT\">2020-07-22 15:48</Col><Col id=\"LOGIN_BROWSER\">Windows IE</Col><Col id=\"LOGIN_IP\">58.233.189.108</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200722</Col><Col id=\"VALID_END_DATE\">20201031</Col></Row><Row><Col id=\"USER_CD\">U000000019</Col><Col id=\"USER_ID\">mnk</Col><Col id=\"USER_NM\">엠엔케이</Col><Col id=\"USER_BIRTHDAY\">20200730</Col><Col id=\"USER_EMAIL\">a@x.com</Col><Col id=\"USER_MOBILE\">010-000-0000</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">07348</Col><Col id=\"USER_ADDR\">서울 영등포구 도신로54길 5 B1</Col><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-08-05 22:29</Col><Col id=\"PW_CHANGE_DT\">2020-07-30 09:34</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">116.255.93.171</Col><Col id=\"JOIN_DATE\"/><Col id=\"VALID_START_DATE\">20200730</Col><Col id=\"VALID_END_DATE\">20200830</Col></Row><Row><Col id=\"USER_CD\">U000000020</Col><Col id=\"USER_ID\">tgkim</Col><Col id=\"USER_NM\">김태규</Col><Col id=\"USER_BIRTHDAY\">790725</Col><Col id=\"USER_EMAIL\">tgkim@take-it.co.kr</Col><Col id=\"USER_MOBILE\">010-8877-1932</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">08391</Col><Col id=\"USER_ADDR\">서울 구로구 도림천로 477 </Col><Col id=\"DEPT_CD\">D0001</Col><Col id=\"DEPT_NM\">사업부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-08-19 16:32</Col><Col id=\"PW_CHANGE_DT\">2020-08-10 10:55</Col><Col id=\"LOGIN_BROWSER\">Windows Chrome</Col><Col id=\"LOGIN_IP\">223.39.218.232</Col><Col id=\"JOIN_DATE\">20180101</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000021</Col><Col id=\"USER_ID\">ymko</Col><Col id=\"USER_NM\">고영민</Col><Col id=\"USER_BIRTHDAY\">000000</Col><Col id=\"USER_EMAIL\">ymko@take-it.co.kr</Col><Col id=\"USER_MOBILE\">01091259053</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">08391</Col><Col id=\"USER_ADDR\">서울 구로구 도림천로 477 </Col><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\"/><Col id=\"PW_CHANGE_DT\">2020-08-10 09:18</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\"/><Col id=\"JOIN_DATE\">20180101</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000022</Col><Col id=\"USER_ID\">glorial</Col><Col id=\"USER_NM\">정해원</Col><Col id=\"USER_BIRTHDAY\">000000</Col><Col id=\"USER_EMAIL\">glorial@take-it.co.kr</Col><Col id=\"USER_MOBILE\">010-0000-0000</Col><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">08391</Col><Col id=\"USER_ADDR\">서울 구로구 도림천로 477 </Col><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\"/><Col id=\"PW_CHANGE_DT\">2020-08-10 09:20</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\"/><Col id=\"JOIN_DATE\">20200701</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000023</Col><Col id=\"USER_ID\">kjp3904</Col><Col id=\"USER_NM\">김진표</Col><Col id=\"USER_BIRTHDAY\">000000</Col><Col id=\"USER_EMAIL\">kjp3904@take-it.co.kr</Col><Col id=\"USER_MOBILE\">010-3751-3904</Col><Col id=\"USER_TEL\">4567</Col><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">08391</Col><Col id=\"USER_ADDR\">서울 구로구 도림천로 477  </Col><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\"/><Col id=\"PW_CHANGE_DT\">2020-08-10 09:22</Col><Col id=\"LOGIN_BROWSER\"/><Col id=\"LOGIN_IP\"/><Col id=\"JOIN_DATE\">20180701</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000025</Col><Col id=\"USER_ID\">test_012222</Col><Col id=\"USER_NM\">테스트</Col><Col id=\"USER_BIRTHDAY\">20200205</Col><Col id=\"USER_EMAIL\">test</Col><Col id=\"USER_MOBILE\">010-1111-111</Col><Col id=\"USER_TEL\">02-1111-1111</Col><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">00000</Col><Col id=\"USER_ADDR\">인천22   </Col><Col id=\"DEPT_CD\">D0008</Col><Col id=\"DEPT_NM\">임시부서D0006_0008</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">N</Col><Col id=\"LAST_LOGIN_DT\">2020-08-24 17:32</Col><Col id=\"PW_CHANGE_DT\">2020-08-24 17:32</Col><Col id=\"LOGIN_BROWSER\"> Chrome</Col><Col id=\"LOGIN_IP\">0.0.0.0</Col><Col id=\"JOIN_DATE\">20200824</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000026</Col><Col id=\"USER_ID\">test_02</Col><Col id=\"USER_NM\">테스트2</Col><Col id=\"USER_BIRTHDAY\">20200205</Col><Col id=\"USER_EMAIL\">test2</Col><Col id=\"USER_MOBILE\">010-2222-2222</Col><Col id=\"USER_TEL\">02-2222-2222</Col><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">00000</Col><Col id=\"USER_ADDR\">인천 22222  </Col><Col id=\"DEPT_CD\">D0003</Col><Col id=\"DEPT_NM\">영업부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-08-24 17:33</Col><Col id=\"PW_CHANGE_DT\">2020-08-24 17:33</Col><Col id=\"LOGIN_BROWSER\"> Chrome</Col><Col id=\"LOGIN_IP\">0.0.0.0</Col><Col id=\"JOIN_DATE\">20200824</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000029</Col><Col id=\"USER_ID\">testId</Col><Col id=\"USER_NM\">테스트이름</Col><Col id=\"USER_BIRTHDAY\">19920101</Col><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">821888</Col><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D0003</Col><Col id=\"DEPT_NM\">영업부</Col><Col id=\"USER_STATUS\">02</Col><Col id=\"USER_STATUS_NM\">사용중</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-10-22 10:57</Col><Col id=\"PW_CHANGE_DT\">2020-10-22 10:57</Col><Col id=\"LOGIN_BROWSER\"> Chrome</Col><Col id=\"LOGIN_IP\">0.0.0.0</Col><Col id=\"JOIN_DATE\">20201022</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000034</Col><Col id=\"USER_ID\">GGEGEG</Col><Col id=\"USER_NM\">aa22</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D0003</Col><Col id=\"DEPT_NM\">영업부</Col><Col id=\"USER_STATUS\">01</Col><Col id=\"USER_STATUS_NM\">사용신청</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-11-02 13:20</Col><Col id=\"PW_CHANGE_DT\">2020-11-02 13:20</Col><Col id=\"LOGIN_BROWSER\"> Chrome</Col><Col id=\"LOGIN_IP\">0.0.0.0</Col><Col id=\"JOIN_DATE\">20201102</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000035</Col><Col id=\"USER_ID\">ㅎㅁㄴㅇㄻ</Col><Col id=\"USER_NM\">ㄴㅁㅇㄻㄴㅇㄹ</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">01</Col><Col id=\"USER_STATUS_NM\">사용신청</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-11-02 14:22</Col><Col id=\"PW_CHANGE_DT\">2020-11-02 14:22</Col><Col id=\"LOGIN_BROWSER\"> Chrome</Col><Col id=\"LOGIN_IP\">0.0.0.0</Col><Col id=\"JOIN_DATE\">20201102</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000036</Col><Col id=\"USER_ID\">1121ㄹㄹ</Col><Col id=\"USER_NM\">ㅇㅇ</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">01</Col><Col id=\"USER_STATUS_NM\">사용신청</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-11-02 14:29</Col><Col id=\"PW_CHANGE_DT\">2020-11-02 14:29</Col><Col id=\"LOGIN_BROWSER\"> Chrome</Col><Col id=\"LOGIN_IP\">0.0.0.0</Col><Col id=\"JOIN_DATE\">20201102</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000038</Col><Col id=\"USER_ID\">ㅎㅇㄹㅇㄷHH</Col><Col id=\"USER_NM\">333ㅇㅇF</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\"/><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D9000</Col><Col id=\"DEPT_NM\">외부업체</Col><Col id=\"USER_STATUS\">01</Col><Col id=\"USER_STATUS_NM\">사용신청</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-11-02 14:30</Col><Col id=\"PW_CHANGE_DT\">2020-11-02 14:30</Col><Col id=\"LOGIN_BROWSER\"> Chrome</Col><Col id=\"LOGIN_IP\">0.0.0.0</Col><Col id=\"JOIN_DATE\">20201102</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row><Row><Col id=\"USER_CD\">U000000039</Col><Col id=\"USER_ID\">RRRR2</Col><Col id=\"USER_NM\">22</Col><Col id=\"USER_BIRTHDAY\"/><Col id=\"USER_EMAIL\"/><Col id=\"USER_MOBILE\"/><Col id=\"USER_TEL\"/><Col id=\"USER_FAX\"/><Col id=\"POST_CD\">821888</Col><Col id=\"USER_ADDR\"/><Col id=\"DEPT_CD\">D0004</Col><Col id=\"DEPT_NM\">기술부</Col><Col id=\"USER_STATUS\">01</Col><Col id=\"USER_STATUS_NM\">사용신청</Col><Col id=\"USE_YN\">Y</Col><Col id=\"USE_YN_NM\">사용</Col><Col id=\"AGREE_YN\">Y</Col><Col id=\"LAST_LOGIN_DT\">2020-11-02 15:07</Col><Col id=\"PW_CHANGE_DT\">2020-11-02 15:07</Col><Col id=\"LOGIN_BROWSER\"> Chrome</Col><Col id=\"LOGIN_IP\">0.0.0.0</Col><Col id=\"JOIN_DATE\">20201102</Col><Col id=\"VALID_START_DATE\"/><Col id=\"VALID_END_DATE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdDetail","0","60",null,null,"20","30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"모바일\"/><Cell col=\"5\" text=\"유선전화\"/><Cell col=\"6\" text=\"팩스\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" text=\"주소\"/><Cell col=\"9\" text=\"부서코드\"/><Cell col=\"10\" text=\"상태\"/><Cell col=\"11\" text=\"사용유무\"/><Cell col=\"12\" text=\"동의유무\"/><Cell col=\"13\" text=\"로그인일자\"/><Cell col=\"14\" text=\"비밀번호 변경일자\"/><Cell col=\"15\" text=\"로그인 브라우저\"/><Cell col=\"16\" text=\"로그인 IP\"/><Cell col=\"17\" text=\"가입 일자\"/><Cell col=\"18\" text=\"유효시작일자\"/><Cell col=\"19\" text=\"유효종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:USER_NM\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_BIRTHDAY\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:USER_EMAIL\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:USER_MOBILE\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:USER_TEL\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:USER_FAX\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:POST_CD\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"8\" text=\"bind:USER_ADDR\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"9\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\" combodataset=\"dsCboDeptGrid\" combodatacol=\"NAME\" combocodecol=\"CODE\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"10\" text=\"bind:USER_STATUS_NM\" combodataset=\"dsCboStatus\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"11\" text=\"bind:USE_YN_NM\" combodataset=\"dsCboUseYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"12\" text=\"bind:AGREE_YN\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"13\" text=\"bind:LAST_LOGIN_DT\" wordWrap=\"char\" autosizerow=\"limitmin\" calendardateformat=\"yyyy-MM-dd dd\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:PW_CHANGE_DT\" wordWrap=\"char\" autosizerow=\"limitmin\" calendardateformat=\"yyyy-MM-dd dd\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:LOGIN_BROWSER\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:LOGIN_IP\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"17\" text=\"bind:JOIN_DATE\" displaytype=\"expr:JOIN_DATE == &apos;&apos; || JOIN_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"18\" text=\"bind:VALID_START_DATE\" displaytype=\"expr:VALID_START_DATE == &apos;&apos; || VALID_START_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"19\" text=\"bind:VALID_END_DATE\" displaytype=\"expr:VALID_END_DATE == &apos;&apos; || VALID_END_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pDivSearchPop","827","76","440","327",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"5","120","50","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pDivSearchPop
            obj = new Layout("default","",0,0,this.pDivSearchPop.form,function(p){});
            this.pDivSearchPop.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpGridHeadSearch.xfdl", function() {

        //폼 온로드
        this.Form_onload = function(obj,e)
        {
            var objGrid = this.grdDetail;

            //필수 옵션 입력
            objGrid.readonly = false; //그리드 활성화
            objGrid.callbackfunction = "fnHeadTranInfo"; //조회할 데이터 검색조건 선택후 호출할 폼 함수명

            //초기 세팅
            this.fnSetGridHeader();

            //테스트용 데이터 세팅
            nexacro._OnceCallbackTimer.callonce
                (
                    this,
                    function ()
                    {
                        this.dsList.copyData(this.dsList00);
                    },
                    1
                );


        };

        //초기화 버튼 클릭
        this.btnInit_onclick = function(obj,e)
        {
            var objGrid =this.grdDetail;

            //초기 세팅
        	this.fnSetGridHeader();
        };

        //그리드 헤더의 버튼을 클릭할때 발생하는 이벤트
        this.grdDetail_onexpanddown = function(obj,e)
        {
            //팝업이 열려있으면 리턴
            if (this.pDivSearchPop.isPopup()) return;

            var objDs, objCellFilterInfo, objRect;
            var arrGridFilterInfo;
            var nBodyCell;
            var sDisplayType, sColId, sFilterType, sColType;

            //컬럼 정보
            arrGridFilterInfo	= obj["_filterInfo"];
            //클릭한 셀에 대한 정보
            objCellFilterInfo	= arrGridFilterInfo[e.cell];

            //정보가 있으면
            if (take.nvl(objCellFilterInfo,"")!="")
            {
                //데이터 타입 확인
                nBodyCell    = objCellFilterInfo["cell" ];
                sDisplayType = obj.getCellProperty("body", nBodyCell, "displaytype");
                sColId       = objCellFilterInfo["colid"];

                if      (sDisplayType == "combocontrol") sFilterType = "combocontrol";
                else if (sDisplayType == "combotext"   ) sFilterType = "combotext";
                else if (sDisplayType == "date"		   ) sFilterType = "date";
                else if (sDisplayType == "number" || sDisplayType == "currency") sFilterType = "number";
                else {
                    // 데이터셋 자료형에 맞게 검색 타입 지정
                    objDs = obj.getBindDataset();
                    sColType = objDs.getColumnInfo(sColId).type;

                    if (sColType == "INT" || sColType == "FLOAT" || sColType == "BIGDECIMAL")
                    {
                        sFilterType	= "number" ;
                    } else {
                        sFilterType	= "default";
                    }
                }

                //그리드 정보 세팅
                this.pDivSearchPop.gridInfo = {"grid" : obj, "cell" : e.cell, "filtertype" : sFilterType, "parentform" : this};

                //클릭한 셀의 좌표
                objRect = obj.getCellRect(-1, e.cell );

                //trace("objRect.left --> " + objRect.left +" / objRect.top+32 --> " + objRect.top+32);

                //URL세팅 및 폼 로드
                if (take.nvl(this.pDivSearchPop.url,"")=="")
                {
                    this.pDivSearchPop.set_url("frm::com/comFilter.xfdl");
                } else {
                    this.pDivSearchPop.form.reload();
                }

                //팝업 view
                this.pDivSearchPop.trackPopupByComponent(obj, objRect.left, objRect.top+32);
            }
        };

        //초기 세팅
        this.fnSetGridHeader = function()
        {
        	var objForm, objGrid, objDs, objColInfo, objCellFilterInfo, objCellFilterInfo;
        	var arrGridFilterInfo = new Array(), arrGridSelectInfo = new Array();
            var nCnt, nCellRow, nCellCol, nHeadCell, nExpandSize=20;
            var sCellText, sColType, sType;

            objForm = this;
            objGrid	= this.grdDetail;
        	objDs	= this.dsList;

            //바디 셀 만큼 반복
            nCnt = objGrid.getCellCount("body");

        	for (var i=0; i<nCnt; i++)
        	{
                //컬럼에 대한 정보를 세팅
        		/* head와 body의 column index가 다른경우 확인해야함 */
        		sCellText = take.getTrim(objGrid.getCellProperty("body", i, "text"));
        		nCellRow  = parseInt(take.getTrim(objGrid.getCellProperty("body", i, "row")));
        		nCellCol  = parseInt(take.getTrim(objGrid.getCellProperty("body", i, "col")));

        		if (sCellText.toLowerCase().indexOf("bind:") < 0) continue;
        			sCellText = sCellText.substr(5);

        		objColInfo= take.nvl(objDs.getColumnInfo(sCellText),"");

        		if (objColInfo=="") continue;

        		sColType = objColInfo.type.toUpperCase();

        		nHeadCell = objGrid._xfnGetHeadCell(objGrid, nCellCol, nCellRow);

        		if (nHeadCell < 0) continue;

                nHeadCell = take.nvl(nHeadCell, i);

        		sType = objGrid.getCellProperty("head", nHeadCell, "displaytype");
        		//if (sType == "treeitemcontrol" || sType == "checkboxcontrol" || sType == "combocontrol") continue;
                if (sType == "treeitemcontrol" || sType == "combocontrol") continue;

        		objCellFilterInfo =
                    {
                        headcell : nHeadCell ,
                        cell     : i         ,
                        colid    : sCellText ,
                        coltype  : sColType  ,
                    };

        		arrGridFilterInfo[nHeadCell] = objCellFilterInfo;
        	}

            //컬럼 정보 만큼 반복
            nCnt = arrGridFilterInfo.length;

        	if (nCnt > 0)
        	{
        		objGrid["_filterInfo"]	= arrGridFilterInfo;
        		objGrid["_filterData"]	= new Array(arrGridFilterInfo.length);
                objGrid["_selectData"]	= new Array(arrGridFilterInfo.length);

                objGrid.set_enableevent(false);

                //데이터 저보 세팅
        		for (var i=0; i<nCnt; i++)
        		{
        			objCellFilterInfo = arrGridFilterInfo[i];

        			if (take.nvl(objCellFilterInfo,"")=="") continue;

        			nHeadCell = objCellFilterInfo["headcell"];

        			objGrid.setCellProperty("head", nHeadCell, "expandshow" , "show"		);
        			objGrid.setCellProperty("head", nHeadCell, "expandsize" , nExpandSize	);
        			//objGrid.setCellProperty("head", nHeadCell, "expandimage", "theme://images/img_WF_Filter_S.png"		);	// default style 이 나타나지 않도록
                    objGrid.setFormatColProperty(nHeadCell,"size",objGrid.getRealColSize(nHeadCell)+nExpandSize);

                    objGrid.setCellProperty("head", nHeadCell, "expandimage", "url('theme://images/img_WF_Filter_S.png') no-repeat right bottom #5f5f5f");
        		}

                objGrid.set_enableevent(true);
        	}
        }

        //조회할 데이터 검색조건 선택후 호출할 폼 함수
        //그리드 아이디와 검색 조건 세팅 정보를 Object로 넘겨줌
        this.fnHeadTranInfo = function(sGridId, objInfo)
        {
            var sRtn;
            //trace("sGridId --> " + sGridId);
            //console.dir(objInfo);

            if (sGridId==this.grdDetail.name)
            {
                //검색 조건 세팅 정보를 가지고 검색 조건을 배열로 만든다.
                sRtn = this.fnProcSearGrid(objInfo.data,objInfo.info);
                //console.dir(sRtn);

                //sRtn 값을 가지고 데이터 조회를 위한 트랜잭션 파라메터로 넣는다.
            }
        }

        //선택된 검색 조건을 배열로 리턴 (선택된 데이터, 컬럼 정보)
        this.fnProcSearGrid = function(arrGridFilterData, arrGridFilterInfo)
        {
        	var sGridFilterExpr = "", sCellFilterExpr = "", sOperatorCd, sOperatorNm, sGridCode, sGridName;
            var nCnt, nDataCnt, nIdx=0;
            var arrCellFilterData, arrRtn = new Array();
            var objCellFilterInfo, objFilterData;

        	if (take.nvl(arrGridFilterData,"")!="" && take.nvl(arrGridFilterInfo,"")!="")
        	{
                nCnt = arrGridFilterData.length;

        		for (var i=0; i<nCnt; i++)
        		{
        			arrCellFilterData	= arrGridFilterData[i];
        			objCellFilterInfo	= arrGridFilterInfo[i];

                    //검색 조건이 있는 컬럼이면 처리
        			if (take.nvl(arrCellFilterData,"")=="") continue;

                    arrRtn.push();

                    // 데이터 수만큼 반복
                    nDataCnt = arrCellFilterData.length;

                    arrRtn[nIdx] = new Array();

        			for (var j=0; j<nDataCnt; j++)
        			{
                        arrRtn[nIdx].push();
        				objFilterData= arrCellFilterData[j];

        				sOperatorCd	 = objFilterData.operatorcode;
        				sOperatorNm  = objFilterData.operatorname;
        				sGridCode	 = objFilterData.code;
        				sGridName	 = (sGridCode!="empty" && take.nvl(sGridCode,"")!="") ? objFilterData.code : objFilterData.name;

        				if (sOperatorCd=="check")
                        {
                            arrRtn[nIdx][j] = this.fnMakeExpr(objCellFilterInfo["colid"], objCellFilterInfo["coltype"], (sGridCode=="empty" ? sGridCode : "equal"), sGridName);
        				} else {
        					arrRtn[nIdx][j] = this.fnMakeExpr(objCellFilterInfo["colid"], objCellFilterInfo["coltype"], sOperatorCd, sOperatorNm);
                        }
        			}

                    nIdx++;
        		}
        	}

            //리턴
            return arrRtn;
        }

        //검색 조건 만들기
        this.fnMakeExpr = function(sColId, sColType, sOperatorCd, sOperatorNm)
        {
        	var sFilterExpr	= "";

        	switch (sOperatorCd)
         	{
        		case "empty" 				: sFilterExpr	+= "!this.parent._xfnIsEmpty(" + sColId + ")"; 	  	  			  						  break;
         		case "equal" 				: sFilterExpr	+= sColId + "==" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
         		case "notEqual" 			: sFilterExpr	+= sColId + "!=" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
         		case "greaterThan" 			: sFilterExpr	+= sColId + ">"  + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
         		case "greaterThanOrEqual" 	: sFilterExpr	+= sColId + ">=" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
        		case "lessThan" 			: sFilterExpr	+= sColId + "<"  + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
        		case "lessThanOrEqual" 		: sFilterExpr	+= sColId + "<=" + (sColType == "STRING" ? nexacro.wrapQuote(sOperatorNm) : sOperatorNm); break;
        		case "like" 				: sFilterExpr	+= "new String("+ sColId + ").indexOf('" + sOperatorNm + "') != -1"; break;
        		case "notLike" 				: sFilterExpr	+= "new String("+ sColId + ").indexOf('" + sOperatorNm + "') == -1"; break;
        	}

        	return sFilterExpr;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grdDetail.addEventHandler("onexpanddown",this.grdDetail_onexpanddown,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
        };
        this.loadIncludeScript("smpGridHeadSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
