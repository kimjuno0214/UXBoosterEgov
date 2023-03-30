(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpDatasetDistinct");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"pro_id\" type=\"STRING\" size=\"256\"/><Column id=\"sal_nm\" type=\"STRING\" size=\"256\"/><Column id=\"list_id\" type=\"STRING\" size=\"256\"/><Column id=\"sal_cnt\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"price\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"sal_sum\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"list_date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">37</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">814000</Col><Col id=\"list_date\">20031213</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">2</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">66000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">강남길</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">3</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">99000</Col><Col id=\"list_date\">20031213</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">300000</Col><Col id=\"list_date\">20050622</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">2</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">68000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김길동</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">420000</Col><Col id=\"list_date\">20050608</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">김재동</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">25</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">575000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">1</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">23000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">3</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">69000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">4</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">92000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">9</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">207000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">박수용</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">23</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">529000</Col><Col id=\"list_date\">20040831</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">300000</Col><Col id=\"list_date\">20050713</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이수진</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1485000</Col><Col id=\"list_date\">20031127</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이순신</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">66</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">330000</Col><Col id=\"list_date\">20050518</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">이순신</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">55</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">825000</Col><Col id=\"list_date\">20050705</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">120</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">3240000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">강남사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">19</Col><Col id=\"price\">400000</Col><Col id=\"sal_sum\">7600000</Col><Col id=\"list_date\">20031016</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">강민규</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">440000</Col><Col id=\"list_date\">20031212</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">강민규</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">10</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">140000</Col><Col id=\"list_date\">20050705</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김영길</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">680000</Col><Col id=\"list_date\">20031207</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김인하</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">14000</Col><Col id=\"sal_sum\">1400000</Col><Col id=\"list_date\">20050622</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김인하</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1360000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김종오</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">13000</Col><Col id=\"sal_sum\">520000</Col><Col id=\"list_date\">20050628</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김종오</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20031224</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031207</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031207</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">김진석</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031207</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박수진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">77</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">2618000</Col><Col id=\"list_date\">20031117</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">77</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">2618000</Col><Col id=\"list_date\">20031117</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박운석</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1530000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">박운석</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_cnt\">35</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1155000</Col><Col id=\"list_date\">20031127</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col><Col id=\"list_date\">20030815</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">안재원</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_cnt\">12</Col><Col id=\"price\">60000</Col><Col id=\"sal_sum\">720000</Col><Col id=\"list_date\">20030916</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">이수영</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">80</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">2640000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">장강훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">22000</Col><Col id=\"sal_sum\">440000</Col><Col id=\"list_date\">20031212</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">조승우</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">3444</Col><Col id=\"sal_sum\">117096</Col><Col id=\"list_date\">20050610</Col></Row><Row><Col id=\"pro_id\">강서사업부</Col><Col id=\"sal_nm\">황명희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">460000</Col><Col id=\"list_date\">20031205</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">김호연</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031203</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">민병철</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">340</Col><Col id=\"price\">24000</Col><Col id=\"sal_sum\">8160000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이금형</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">3300000</Col><Col id=\"list_date\">20031112</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이나영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">38</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1254000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">4500000</Col><Col id=\"list_date\">20031008</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_cnt\">39</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1287000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">군자사업부</Col><Col id=\"sal_nm\">이승헌</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">25</Col><Col id=\"price\">13500</Col><Col id=\"sal_sum\">337500</Col><Col id=\"list_date\">20050706</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">김기수</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">35</Col><Col id=\"price\">35000</Col><Col id=\"sal_sum\">1225000</Col><Col id=\"list_date\">20031202</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">송인용</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">신태영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20040204</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">이기자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col><Col id=\"list_date\">20031204</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">지진희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col><Col id=\"list_date\">20030918</Col></Row><Row><Col id=\"pro_id\">대구사업부</Col><Col id=\"sal_nm\">지진희</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1122000</Col><Col id=\"list_date\">20030918</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">김정훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">39</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">390000</Col><Col id=\"list_date\">20040210</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">김정훈</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col><Col id=\"list_date\">20031008</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이동범</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">100000</Col><Col id=\"list_date\">20040501</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이동범</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이창진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col><Col id=\"list_date\">20040408</Col></Row><Row><Col id=\"pro_id\">대전사업부</Col><Col id=\"sal_nm\">이창진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">50</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">750000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">김이규</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">김이규</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031002</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이광섭</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">36</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">900000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이광섭</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이종훈</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col><Col id=\"list_date\">20040824</Col></Row><Row><Col id=\"pro_id\">마포사업부</Col><Col id=\"sal_nm\">이종훈</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20050504</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031016</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20050504</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">강상진</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031016</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">문정주</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">90</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20030702</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">문정주</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">900000</Col><Col id=\"list_date\">20030702</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">박인식</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">690000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">부산사업부</Col><Col id=\"sal_nm\">박인식</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">690000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">고선경</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">540000</Col><Col id=\"list_date\">20030806</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">고선경</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">80</Col><Col id=\"price\">30000</Col><Col id=\"sal_sum\">2400000</Col><Col id=\"list_date\">20030925</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김기원</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">540000</Col><Col id=\"list_date\">20030806</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김기원</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">80</Col><Col id=\"price\">30000</Col><Col id=\"sal_sum\">2400000</Col><Col id=\"list_date\">20030925</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김홍철</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">60</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1980000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">김홍철</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">230</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">7590000</Col><Col id=\"list_date\">20031030</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">우온식</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">임진경</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">36</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">36000</Col><Col id=\"list_date\">20030804</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">임진경</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">36</Col><Col id=\"price\">1000</Col><Col id=\"sal_sum\">36000</Col><Col id=\"list_date\">20030804</Col></Row><Row><Col id=\"pro_id\">성동사업부</Col><Col id=\"sal_nm\">황인수</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">강인중</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">2000000</Col><Col id=\"list_date\">20040128</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">강인중</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">20000</Col><Col id=\"sal_sum\">2000000</Col><Col id=\"list_date\">20040128</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">목진철</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">4000</Col><Col id=\"sal_sum\">120000</Col><Col id=\"list_date\">20040212</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">목진철</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">50</Col><Col id=\"price\">4900</Col><Col id=\"sal_sum\">245000</Col><Col id=\"list_date\">20040212</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">박제준</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">박제준</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">90</Col><Col id=\"price\">15000</Col><Col id=\"sal_sum\">1350000</Col><Col id=\"list_date\">20031121</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">750000</Col><Col id=\"list_date\">20031121</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">60</Col><Col id=\"price\">66000</Col><Col id=\"sal_sum\">3960000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">안영희</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">60</Col><Col id=\"price\">66000</Col><Col id=\"sal_sum\">3960000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">이미숙</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">990000</Col><Col id=\"list_date\">20031113</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">성수사업부</Col><Col id=\"sal_nm\">임수근</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1530000</Col><Col id=\"list_date\">20031106</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20030801</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20030801</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">곽희정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">1800000</Col><Col id=\"list_date\">20030801</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">권미자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">권미자</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20030710</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">100000</Col><Col id=\"list_date\">20050706</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">200</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">600000</Col><Col id=\"list_date\">20030711</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">200</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">600000</Col><Col id=\"list_date\">20030711</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길영</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">5000</Col><Col id=\"sal_sum\">100000</Col><Col id=\"list_date\">20050706</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길자</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col><Col id=\"list_date\">20031007</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김길자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">1215000</Col><Col id=\"list_date\">20031007</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김홍길</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_cnt\">70</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">2310000</Col><Col id=\"list_date\">20031023</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">김홍길</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">20</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">660000</Col><Col id=\"list_date\">20031023</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">박수인</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">박수인</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">40000</Col><Col id=\"sal_sum\">1600000</Col><Col id=\"list_date\">20031009</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">배인덕</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">29000</Col><Col id=\"sal_sum\">986000</Col><Col id=\"list_date\">20031127</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">배인덕</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">29000</Col><Col id=\"sal_sum\">986000</Col><Col id=\"list_date\">20031127</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">심영수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20040501</Col></Row><Row><Col id=\"pro_id\">수유사업부</Col><Col id=\"sal_nm\">심영수</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">15800</Col><Col id=\"sal_sum\">1580000</Col><Col id=\"list_date\">20040501</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">방수진</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col><Col id=\"list_date\">20031008</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">방수진</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">27000</Col><Col id=\"sal_sum\">810000</Col><Col id=\"list_date\">20031008</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">유영락</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">400000</Col><Col id=\"list_date\">20040210</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">유영락</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">50</Col><Col id=\"price\">10000</Col><Col id=\"sal_sum\">500000</Col><Col id=\"list_date\">20040210</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">이미자</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">60000</Col><Col id=\"sal_sum\">2700000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">영동사업부</Col><Col id=\"sal_nm\">이미자</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">30</Col><Col id=\"price\">50000</Col><Col id=\"sal_sum\">1500000</Col><Col id=\"list_date\">20030717</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김도준</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col><Col id=\"list_date\">20040408</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김도준</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">3000</Col><Col id=\"sal_sum\">135000</Col><Col id=\"list_date\">20040408</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김인현</Col><Col id=\"list_id\">불어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col><Col id=\"list_date\">20040824</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">김인현</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">782000</Col><Col id=\"list_date\">20040824</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_cnt\">56</Col><Col id=\"price\">33000</Col><Col id=\"sal_sum\">1848000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">박인수</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">45</Col><Col id=\"price\">23000</Col><Col id=\"sal_sum\">1035000</Col><Col id=\"list_date\">20031201</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이진영</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">90</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">2250000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이진영</Col><Col id=\"list_id\">한문교재</Col><Col id=\"sal_cnt\">40</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1000000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이창희</Col><Col id=\"list_id\">영어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031002</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이창희</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">34</Col><Col id=\"price\">34000</Col><Col id=\"sal_sum\">1156000</Col><Col id=\"list_date\">20031002</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이화룡</Col><Col id=\"list_id\">일어교재</Col><Col id=\"sal_cnt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">이화룡</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">75</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">1875000</Col><Col id=\"list_date\">20031209</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">정인호</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">39</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">975000</Col><Col id=\"list_date\">20040207</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">정인호</Col><Col id=\"list_id\">국어교재</Col><Col id=\"sal_cnt\">39</Col><Col id=\"price\">25000</Col><Col id=\"sal_sum\">975000</Col><Col id=\"list_date\">20040207</Col></Row><Row><Col id=\"pro_id\">울산사업부</Col><Col id=\"sal_nm\">최수정</Col><Col id=\"list_id\">과학교재</Col><Col id=\"sal_cnt\">100</Col><Col id=\"price\">45000</Col><Col id=\"sal_sum\">4500000</Col><Col id=\"list_date\">20040519</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColData", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdData","610","63","180","427",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsColData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"139\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"ALL\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:DATA\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","17","63","583","423",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업부\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"교재명\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"금액\"/><Cell col=\"5\" text=\"합계\"/><Cell col=\"6\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:pro_id\"/><Cell col=\"1\" text=\"bind:sal_nm\"/><Cell col=\"2\" text=\"bind:list_id\"/><Cell col=\"3\" text=\"bind:sal_cnt\"/><Cell col=\"4\" text=\"bind:price\"/><Cell col=\"5\" text=\"bind:sal_sum\"/><Cell col=\"6\" text=\"bind:list_date\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbList","17","20","127","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsColumn");
            obj.set_codecolumn("ID");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpDatasetDistinct.xfdl", function() {

        this.smpDatasetDistinct_onload = function(obj,e)
        {
            //변수 선언
        	var objDsCol, objDsSmp, objGrid;
            var nCnt, nRow;
            var sColId, sColNm;

            //변수에 각 컴포넌트 세팅
            objDsCol = this.dsColumn;
            objDsSmp = this.dsList;
            objGrid = this.grdList;

            //그리드 컬럼 갯수
            nCnt = objGrid.getCellCount("head");

            //그리드 컬럼 갯수 만큼 반복
            for(var i=0;i<nCnt;i++)
            {
                //콤보용 데이터셋에 행 추가
                nRow = objDsCol.addRow();
                //그리드에서 헤더명 가져다가 콤보데이터셋에 넣기
                sColNm = objGrid.getCellText(-1,i);
                objDsCol.setColumn(nRow, "NAME", sColNm);
                //그리드에서 헤더에 맵핑된 컬럼명 가져다가 콤보데이터셋에 넣기
                sColId = objGrid.getCellProperty( "body", i, "text" );
                sColId = sColId.replace(/bind:/g, "");
                objDsCol.setColumn(nRow, "ID", sColId);
            }
        };

        //콤보값이 변경된후 발생되는 이벤트
        this.cmbList_onitemchanged = function(obj,e)
        {
            trace("start");
            //변수 선언
            var objDs, objGrid;
            var arrData;
            var sColIdx;

            //변수에 컴포넌트 맵핑
            objDsList = this.dsList;
            objDsCol = this.dsColData;
            objGrid = this.grdData;

            //데이터 초기화
            objDsCol.clearData();

            //그리드와 데이터셋의 이벤트가 발생하지 않도록 설정
            objGrid.set_enableevent(false);
            objDsCol.set_enableevent(false);
            //선택된 컬럼으로 그리드 리스트에서 컬럼 인덱스 구하기
            sColIdx = objDsList.getColIndex(obj.value);
            //배열에 그리드 리스트의 데이터셋 맵핑하기
            arrData = objDsList._rawRecords;
            //선택된 컬럼의 데이터만 축출하기
            arrData = this.fnPluck(arrData,sColIdx);
            //축출한 데이터의 중복을 제거한다
            arrData = this.fnUniqueDs(arrData);

            //중복이 제거된 데이터의 수 만큼 데이터셋 행수를 세팅
            objDsCol.rowcount=arrData.length;
            //데이터셋 원본 데이터에 배열데이터를 세팅
            objDsCol._rawRecords = arrData;
            //그리드에 데이터셋 바인딩
            objGrid.set_binddataset(objDsCol);
            //데이터셋 뷰데이터에 배열데이터를 세팅
            objDsCol._viewRecords = objDsCol._rawRecords;
            //데이터가 보여지도록 첫번째 Row 세팅
            //objGrid.createFormat();
            objDsCol.set_rowposition(0);

            //그리드의 이벤트가 발생하도록 세팅
            objDsCol.set_enableevent(true);
            objGrid.set_enableevent(true);
            trace("end");
        };

        //그리드 헤더가 클릭될때 발생되는 이벤트
        this.grdData_onheadclick = function(obj,e)
        {
            if (e.col==0) //헤더의 Check Box 컬럼(0번째 Cell)이 클릭될때
            {
                //변수선언
                var objDs;
                var nVal, nCnt;

                //데이터셋 선언
                objDs = this.dsColData;

                //그리드와 데이터셋의 이벤트가 발생하지 않도록 설정
                obj.set_enableevent(false);
                objDs.set_enableevent(false);

                //헤더 Check Box의 현재 값을 확인후 변경처리
                nVal = nexacro._nvl(obj.getCellText(-1,0), 0)==0?1:0;
                obj.setCellProperty("head", 0, "text", nVal);

                //데이터의 행수
                nCnt =objDs.rowcount;

                //행수 만큼 반복하여 Check Box값 변경
                for (var i=0; i<nCnt; i++)
                {
                    objDs.setColumn(i,"CHK", nVal);
                }

                //그리드와 데이터셋의 이벤트가 발생하도록 설정
                objDs.set_enableevent(true);
                obj.set_enableevent(true);
            }
        };

        //그리드의 Body 셀이 클릭될때 발생하는 이벤트
        this.grdData_oncellclick = function(obj,e)
        {
        	if (e.col==0) //body 영역의 Check Box(0번째 컬럼)이 클릭되었을경우
            {
                //변수 선언
                var objDs;
                var nVal;

                //데이터셋 선언
                objDs = this.dsColData;

                //그리드와 데이터셋의 이벤트가 발생하지 않도록 설정
                obj.set_enableevent(false);
                objDs.set_enableevent(false);

                //클릭하여 변경된 값 확인
                nVal = nexacro._nvl(this.dsColData.getColumn(e.row,"CHK"), 0);

                //체크가 해제(0)이고 헤더의 Check Box가 체크(1)되어 있을경우 헤더 Check Box 체크 해제
                if (nVal==0 && nexacro._nvl(obj.getCellText(-1,0), 0)!=0) obj.setCellProperty("head", 0, "text", 0);

                //그리드와 데이터셋의 이벤트가 발생하도록 설정
                objDs.set_enableevent(true);
                obj.set_enableevent(true);
            }
        };
        /**
        * this.fnPluck : 배열의 특정 위치의 값을 축출
        * @param   : arrData(Array) - 배열값
        *            key(Number)    - 축출할 배열 인덱스
        * @return  : Array
        * @example : arrData = new Array();
        *            this.fnPluck(arrData, 1);
        **/
        this.fnPluck = function(arrData, key)
        {
            return arrData.map(function(object) { return object[key]; });
        };

        /**
        * this.fnUniqueDs : 배열의 중복 제거후 2차원 배열로 리턴
        * @param   : arrData(Array) - 배열값
        * @return  : Array
        * @example : arrData = new Array();
        *            this.fnUniqueDs.(arrData);
        **/
        this.fnUniqueDs = function(arrData)
        {
            var arrTemp, arrRtn;
            var nIdx, nCnt

            nCnt = arrData.length;
            arrTemp = new Array();
            arrRtn = new Array();
            nIdx = 0;

            for (var i = 0; i < nCnt; i++)
            {
                arrTemp[arrData[i]] = arrData[i];
            }

            //arrRtn[0] = new Array("All");
            //nIdx++;

            for (var i in arrTemp)
            {
                arrRtn[nIdx]= new Array(0,arrTemp[i]);
                nIdx++;
            }

            return arrRtn;
        }

        /**
        * Array.prototype.pluck : 배열의 특정 위치의 값을 축출
        * @param   : N/A
        * @return  : Array
        * @example : testArray = testArray.pluck(1);

        Array.prototype.uniqueDs = function()
        {
            var o = new Array(), i, n=0, r = new Array();
           var l = this.length;

           for (i = 0; i < l; i++)
           {
              o[this[i]] = this[i];
           }

           for (i in o)
           {
              trace(o.typeof);
              r[n]= new Array(o[i]);
              n++;
           }

           return r;
        };
        **/
        /**
        * Array.prototype.unique : 배열에 중복제거 추가
        * @param   : N/A
        * @return  : N/A
        * @example : testArray = testArray.unique();

        Array.prototype.unique = function()
        {
           var o = {}, i, r = [];
           var l = this.length;

           for (i = 0; i < l; i++)
           {
              o[this[i]] = this[i];
           }

           for (i in o)
           {
              r.push(o[i]);
           }

           return r;
        };
        **/




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpDatasetDistinct_onload,this);
            this.grdData.addEventHandler("onheadclick",this.grdData_onheadclick,this);
            this.grdData.addEventHandler("oncellclick",this.grdData_oncellclick,this);
            this.cmbList.addEventHandler("onitemchanged",this.cmbList_onitemchanged,this);
        };
        this.loadIncludeScript("smpDatasetDistinct.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
