(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleSJM");
            this.set_titletext("(샘플)");
            this.set_enableevent("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"사업부\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"교재명\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"INT\" size=\"256\"/><Column id=\"금액\" type=\"INT\" size=\"256\"/><Column id=\"합계\" type=\"INT\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">강남길</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">37</Col><Col id=\"금액\">22000</Col><Col id=\"합계\">814000</Col><Col id=\"등록일\">20031213</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">강남길</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">2</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">66000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">강남길</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">3</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">99000</Col><Col id=\"등록일\">20031213</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">김길동</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">15000</Col><Col id=\"합계\">300000</Col><Col id=\"등록일\">20050622</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">김길동</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">2</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">68000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">김길동</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">14000</Col><Col id=\"합계\">420000</Col><Col id=\"등록일\">20050608</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">김재동</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">25</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">575000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">김재동</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">25</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">575000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">김재동</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">25</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">575000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">박수용</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">1</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">23000</Col><Col id=\"등록일\">20040831</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">박수용</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">3</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">69000</Col><Col id=\"등록일\">20040831</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">박수용</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">4</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">92000</Col><Col id=\"등록일\">20040831</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">박수용</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">9</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">207000</Col><Col id=\"등록일\">20040831</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">박수용</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">23</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">529000</Col><Col id=\"등록일\">20040831</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">이수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">10000</Col><Col id=\"합계\">300000</Col><Col id=\"등록일\">20050713</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">이수진</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1485000</Col><Col id=\"등록일\">20031127</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">이순신</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">66</Col><Col id=\"금액\">5000</Col><Col id=\"합계\">330000</Col><Col id=\"등록일\">20050518</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">이순신</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">55</Col><Col id=\"금액\">15000</Col><Col id=\"합계\">825000</Col><Col id=\"등록일\">20050705</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">조승우</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">120</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">3240000</Col><Col id=\"등록일\">20031009</Col></Row><Row><Col id=\"사업부\">강남사업부</Col><Col id=\"이름\">조승우</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">19</Col><Col id=\"금액\">400000</Col><Col id=\"합계\">7600000</Col><Col id=\"등록일\">20031016</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">강민규</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">22000</Col><Col id=\"합계\">440000</Col><Col id=\"등록일\">20031212</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">강민규</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">10</Col><Col id=\"금액\">14000</Col><Col id=\"합계\">140000</Col><Col id=\"등록일\">20050705</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">김영길</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">680000</Col><Col id=\"등록일\">20031207</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">김인하</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">14000</Col><Col id=\"합계\">1400000</Col><Col id=\"등록일\">20050622</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">김인하</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1360000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">김종오</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">13000</Col><Col id=\"합계\">520000</Col><Col id=\"등록일\">20050628</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">김종오</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">40000</Col><Col id=\"합계\">1800000</Col><Col id=\"등록일\">20031224</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">김진석</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031207</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">김진석</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031207</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">김진석</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031207</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">박수진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">77</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">2618000</Col><Col id=\"등록일\">20031117</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">박수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">77</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">2618000</Col><Col id=\"등록일\">20031117</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">박운석</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">45000</Col><Col id=\"합계\">1530000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">박운석</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">35</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1155000</Col><Col id=\"등록일\">20031127</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">안재원</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">782000</Col><Col id=\"등록일\">20030815</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">안재원</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">990000</Col><Col id=\"등록일\">20031113</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">안재원</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">12</Col><Col id=\"금액\">60000</Col><Col id=\"합계\">720000</Col><Col id=\"등록일\">20030916</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">이수영</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">990000</Col><Col id=\"등록일\">20031030</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">이수영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1122000</Col><Col id=\"등록일\">20031030</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">이수영</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">80</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">2640000</Col><Col id=\"등록일\">20031030</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">장강훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">22000</Col><Col id=\"합계\">440000</Col><Col id=\"등록일\">20031212</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">조승우</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">3444</Col><Col id=\"합계\">117096</Col><Col id=\"등록일\">20050610</Col></Row><Row><Col id=\"사업부\">강서사업부</Col><Col id=\"이름\">황명희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">460000</Col><Col id=\"등록일\">20031205</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"이름\">김호연</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031203</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"이름\">민병철</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">340</Col><Col id=\"금액\">24000</Col><Col id=\"합계\">8160000</Col><Col id=\"등록일\">20031009</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"이름\">이금형</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">3300000</Col><Col id=\"등록일\">20031112</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"이름\">이나영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">38</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1254000</Col><Col id=\"등록일\">20031113</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"이름\">이승헌</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">45000</Col><Col id=\"합계\">4500000</Col><Col id=\"등록일\">20031008</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"이름\">이승헌</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">39</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1287000</Col><Col id=\"등록일\">20031030</Col></Row><Row><Col id=\"사업부\">군자사업부</Col><Col id=\"이름\">이승헌</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">25</Col><Col id=\"금액\">13500</Col><Col id=\"합계\">337500</Col><Col id=\"등록일\">20050706</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"이름\">김기수</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">35</Col><Col id=\"금액\">35000</Col><Col id=\"합계\">1225000</Col><Col id=\"등록일\">20031202</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"이름\">송인용</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"이름\">신태영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20040204</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"이름\">이기자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">40000</Col><Col id=\"합계\">1600000</Col><Col id=\"등록일\">20031204</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"이름\">지진희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1122000</Col><Col id=\"등록일\">20030918</Col></Row><Row><Col id=\"사업부\">대구사업부</Col><Col id=\"이름\">지진희</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1122000</Col><Col id=\"등록일\">20030918</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"이름\">김정훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"금액\">10000</Col><Col id=\"합계\">390000</Col><Col id=\"등록일\">20040210</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"이름\">김정훈</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">810000</Col><Col id=\"등록일\">20031008</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"이름\">이동범</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">1000</Col><Col id=\"합계\">100000</Col><Col id=\"등록일\">20040501</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"이름\">이동범</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">1000000</Col><Col id=\"등록일\">20030710</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"이름\">이창진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">3000</Col><Col id=\"합계\">135000</Col><Col id=\"등록일\">20040408</Col></Row><Row><Col id=\"사업부\">대전사업부</Col><Col id=\"이름\">이창진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">50</Col><Col id=\"금액\">15000</Col><Col id=\"합계\">750000</Col><Col id=\"등록일\">20030717</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"이름\">김이규</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">75</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">1875000</Col><Col id=\"등록일\">20031209</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"이름\">김이규</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031002</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"이름\">이광섭</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">36</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">900000</Col><Col id=\"등록일\">20031209</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"이름\">이광섭</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">56</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1848000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"이름\">이종훈</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">782000</Col><Col id=\"등록일\">20040824</Col></Row><Row><Col id=\"사업부\">마포사업부</Col><Col id=\"이름\">이종훈</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">1035000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"이름\">강상진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">40000</Col><Col id=\"합계\">1800000</Col><Col id=\"등록일\">20050504</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"이름\">강상진</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031016</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"이름\">강상진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">40000</Col><Col id=\"합계\">1800000</Col><Col id=\"등록일\">20050504</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"이름\">강상진</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031016</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"이름\">문정주</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">90</Col><Col id=\"금액\">20000</Col><Col id=\"합계\">1800000</Col><Col id=\"등록일\">20030702</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"이름\">문정주</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">20000</Col><Col id=\"합계\">900000</Col><Col id=\"등록일\">20030702</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"이름\">박인식</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">690000</Col><Col id=\"등록일\">20030710</Col></Row><Row><Col id=\"사업부\">부산사업부</Col><Col id=\"이름\">박인식</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">690000</Col><Col id=\"등록일\">20030710</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">고선경</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">540000</Col><Col id=\"등록일\">20030806</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">고선경</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">80</Col><Col id=\"금액\">30000</Col><Col id=\"합계\">2400000</Col><Col id=\"등록일\">20030925</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">김기원</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">540000</Col><Col id=\"등록일\">20030806</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">김기원</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">80</Col><Col id=\"금액\">30000</Col><Col id=\"합계\">2400000</Col><Col id=\"등록일\">20030925</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">김홍철</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">60</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1980000</Col><Col id=\"등록일\">20031030</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">김홍철</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">230</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">7590000</Col><Col id=\"등록일\">20031030</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">우온식</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">1215000</Col><Col id=\"등록일\">20031009</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">임진경</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">36</Col><Col id=\"금액\">1000</Col><Col id=\"합계\">36000</Col><Col id=\"등록일\">20030804</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">임진경</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">36</Col><Col id=\"금액\">1000</Col><Col id=\"합계\">36000</Col><Col id=\"등록일\">20030804</Col></Row><Row><Col id=\"사업부\">성동사업부</Col><Col id=\"이름\">황인수</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">1215000</Col><Col id=\"등록일\">20031009</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">강인중</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">20000</Col><Col id=\"합계\">2000000</Col><Col id=\"등록일\">20040128</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">강인중</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">20000</Col><Col id=\"합계\">2000000</Col><Col id=\"등록일\">20040128</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">목진철</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">4000</Col><Col id=\"합계\">120000</Col><Col id=\"등록일\">20040212</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">목진철</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">50</Col><Col id=\"금액\">4900</Col><Col id=\"합계\">245000</Col><Col id=\"등록일\">20040212</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">박제준</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">990000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">박제준</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">990000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">90</Col><Col id=\"금액\">15000</Col><Col id=\"합계\">1350000</Col><Col id=\"등록일\">20031121</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">750000</Col><Col id=\"등록일\">20031121</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">안영희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">60</Col><Col id=\"금액\">66000</Col><Col id=\"합계\">3960000</Col><Col id=\"등록일\">20030717</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">안영희</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">60</Col><Col id=\"금액\">66000</Col><Col id=\"합계\">3960000</Col><Col id=\"등록일\">20030717</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">이미숙</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">990000</Col><Col id=\"등록일\">20031113</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">이미숙</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">990000</Col><Col id=\"등록일\">20031113</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">이미숙</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">990000</Col><Col id=\"등록일\">20031113</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">임수근</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1530000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">임수근</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1530000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">성수사업부</Col><Col id=\"이름\">임수근</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1530000</Col><Col id=\"등록일\">20031106</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">곽희정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">45000</Col><Col id=\"합계\">1800000</Col><Col id=\"등록일\">20030801</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">곽희정</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">45000</Col><Col id=\"합계\">1800000</Col><Col id=\"등록일\">20030801</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">곽희정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">45000</Col><Col id=\"합계\">1800000</Col><Col id=\"등록일\">20030801</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">권미자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">1000000</Col><Col id=\"등록일\">20030710</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">권미자</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">1000000</Col><Col id=\"등록일\">20030710</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">김길영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">5000</Col><Col id=\"합계\">100000</Col><Col id=\"등록일\">20050706</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">김길영</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">200</Col><Col id=\"금액\">3000</Col><Col id=\"합계\">600000</Col><Col id=\"등록일\">20030711</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">김길영</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">200</Col><Col id=\"금액\">3000</Col><Col id=\"합계\">600000</Col><Col id=\"등록일\">20030711</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">김길영</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">5000</Col><Col id=\"합계\">100000</Col><Col id=\"등록일\">20050706</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">김길자</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">1215000</Col><Col id=\"등록일\">20031007</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">김길자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">1215000</Col><Col id=\"등록일\">20031007</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">김홍길</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">70</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">2310000</Col><Col id=\"등록일\">20031023</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">김홍길</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">20</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">660000</Col><Col id=\"등록일\">20031023</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">박수인</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">40000</Col><Col id=\"합계\">1600000</Col><Col id=\"등록일\">20031009</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">박수인</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">40000</Col><Col id=\"합계\">1600000</Col><Col id=\"등록일\">20031009</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">배인덕</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">29000</Col><Col id=\"합계\">986000</Col><Col id=\"등록일\">20031127</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">배인덕</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">29000</Col><Col id=\"합계\">986000</Col><Col id=\"등록일\">20031127</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">심영수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">10000</Col><Col id=\"합계\">1000000</Col><Col id=\"등록일\">20040501</Col></Row><Row><Col id=\"사업부\">수유사업부</Col><Col id=\"이름\">심영수</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">15800</Col><Col id=\"합계\">1580000</Col><Col id=\"등록일\">20040501</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"이름\">방수진</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">810000</Col><Col id=\"등록일\">20031008</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"이름\">방수진</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">27000</Col><Col id=\"합계\">810000</Col><Col id=\"등록일\">20031008</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"이름\">유영락</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">10000</Col><Col id=\"합계\">400000</Col><Col id=\"등록일\">20040210</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"이름\">유영락</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">50</Col><Col id=\"금액\">10000</Col><Col id=\"합계\">500000</Col><Col id=\"등록일\">20040210</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"이름\">이미자</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">60000</Col><Col id=\"합계\">2700000</Col><Col id=\"등록일\">20030717</Col></Row><Row><Col id=\"사업부\">영동사업부</Col><Col id=\"이름\">이미자</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">30</Col><Col id=\"금액\">50000</Col><Col id=\"합계\">1500000</Col><Col id=\"등록일\">20030717</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">김도준</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">3000</Col><Col id=\"합계\">135000</Col><Col id=\"등록일\">20040408</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">김도준</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">3000</Col><Col id=\"합계\">135000</Col><Col id=\"등록일\">20040408</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">김인현</Col><Col id=\"교재명\">불어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">782000</Col><Col id=\"등록일\">20040824</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">김인현</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">782000</Col><Col id=\"등록일\">20040824</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">박인수</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">56</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1848000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">박인수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">1035000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">박인수</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">56</Col><Col id=\"금액\">33000</Col><Col id=\"합계\">1848000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">박인수</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">45</Col><Col id=\"금액\">23000</Col><Col id=\"합계\">1035000</Col><Col id=\"등록일\">20031201</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">이진영</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">90</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">2250000</Col><Col id=\"등록일\">20031209</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">이진영</Col><Col id=\"교재명\">한문교재</Col><Col id=\"수량\">40</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">1000000</Col><Col id=\"등록일\">20031209</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">이창희</Col><Col id=\"교재명\">영어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031002</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">이창희</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">34</Col><Col id=\"금액\">34000</Col><Col id=\"합계\">1156000</Col><Col id=\"등록일\">20031002</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">이화룡</Col><Col id=\"교재명\">일어교재</Col><Col id=\"수량\">75</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">1875000</Col><Col id=\"등록일\">20031209</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">이화룡</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">75</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">1875000</Col><Col id=\"등록일\">20031209</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">정인호</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">975000</Col><Col id=\"등록일\">20040207</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">정인호</Col><Col id=\"교재명\">국어교재</Col><Col id=\"수량\">39</Col><Col id=\"금액\">25000</Col><Col id=\"합계\">975000</Col><Col id=\"등록일\">20040207</Col></Row><Row><Col id=\"사업부\">울산사업부</Col><Col id=\"이름\">최수정</Col><Col id=\"교재명\">과학교재</Col><Col id=\"수량\">100</Col><Col id=\"금액\">45000</Col><Col id=\"합계\">4500000</Col><Col id=\"등록일\">20040519</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmbList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColList", this);
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdColList","550","10","200","258",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsColList");
            obj.set_cellclickbound("control");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"135\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:chk\"/><Cell col=\"1\" text=\"ALL\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:value\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","82","521","186",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업부\" textAlign=\"center\"/><Cell col=\"1\" text=\"이름\" edittype=\"normal\" textAlign=\"center\"/><Cell col=\"2\" text=\"교재명\" textAlign=\"center\"/><Cell col=\"3\" text=\"수량\" textAlign=\"center\"/><Cell col=\"4\" text=\"금액\" textAlign=\"center\"/><Cell col=\"5\" text=\"합계\" textAlign=\"center\"/><Cell col=\"6\" text=\"등록일\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:사업부\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:이름\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:교재명\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:수량\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:금액\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:합계\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:등록일\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbColList","20","10","320","62",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCmbList");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_displaynulltext("선택");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleSJM.xfdl", function() {
        /*

        */
        this.fv_bolSwitch = true;
        this.sampleSJM_onload = function(obj,e)
        {
        	// 변수 선언
        	var sColInfo, sColNm, nCmbRow, nCnt;
        	var objCmbDs , objList, objGrdColDs;  // 데이터 셋 선언

        	var objGrdColList;

        	objCmbDs 	= this.dsCmbList;
        	objList 	= this.dsList;
        	objGrdColDs = this.dsColList;

        	objGrdColList = this.grdColList;

        	nCnt = objList.getColCount();

        	for(var i = 0; i < nCnt; i++)
        	{

        		sColNm = objList.getColID(i);
        		nCmbRow = objCmbDs.addRow();
        		objCmbDs.setColumn(nCmbRow, "code", i);
        		objCmbDs.setColumn(nCmbRow, "name", sColNm);

        	}

        };

        this.cmbColList_canitemchange = function(obj,e)
        {
        	trace("start");
        	this.fv_dsColListInfo(obj, e);
        	trace("End");
        };

        this.grdList_onheadclick = function(obj,e)
        {

        	//변수 선언
        	var nColRow, nRow, sVal, nCnt, sColNm, nIdx, sColVal;
        	var arrAftVal = [];	//중복되지 않은 데이터 저장할 배열
        	var objColDs, objCmbDs, objGrdColDs;//데이터 셋 선언
        	var objGrdColList, objGrdCol;
        	objColDs	= this.dsList;
        	objCmbDs	= this.dsCmbList;
        	objGrdColDs = this.dsColList;

        	//그리드 선언
        	objGrdColList 	= this.grdColList;
        	objGrdCol		= this.grdList;
        	//콤보박스 선언
        	var cmbList = this.cmbColList;
        	sColVal = objGrdColDs.getColumnInfo(1);
        	nIdx = e.col;

        	sColNm = objGrdCol.getCellProperty("head", e.cell, "text");


        	//this.fv_dsColListInfo(objGrdColList, objGrdColDs, objColDs, sVal, nRow, sColNm, nCnt);
        	//아래부터 함수
        	//sColNm = objColDs.getColID(nIdx);

        	//콤보박스의 text 변경
        	cmbList.set_text(sColNm);

        	nCnt = objColDs.getRowCount();
        	//grdColList의 text 변경 : setCellProperty(enumBand, nCellIdx, strPropID, varValue)
        	//enumBand					: 속성값을 설정하려는 Cell 이 속한 밴드를 문자열로 설정합니다.(head, body, summary)
        	//nCellIdx					: 속성값을 설정할 Cell 의 Cell 인덱스를 설정합니다.
        	//strPropID					: 값을 설정하려는 속성명을 문자열로 설정합니다.
        	//varValue					: strPropID 파라미터값에 해당하는 속성에 설정할 속성값 입니다
        	objGrdColList.setCellProperty("head", 1, "text", sColNm);

        	objGrdColDs.clearData();	// 컬럼 정보 이외의 데이터(Row)를 삭제 : 안하면 데이터가 쌓임

        	objGrdColDs.set_enableevent(false);

        	//sColID에 해당하는 컬럼의 로우들을 dsColList에 바인딩
        	for(var i = 0; i < nCnt; i++)
        	{
        		var objChk = false;

        		if(sColNm == "등록일"){
        			sVal = objColDs.getColumn(i, sColNm);
        			sVal = sVal.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
        			//고정되있는 값 자르기(replace)
        			//yyyy-mm-dd 형식
        		}else{
        			sVal = objColDs.getColumn(i, sColNm);//세로, 가로(고정), 컬럼에 해당하는 로우값들
        		}

        		//배열의 길이가 0일때 sVal의 첫번째 값 입력 후 continue
        		if(arrAftVal.length==0)
        		{
        			arrAftVal.push(sVal);
        			nRow = objGrdColDs.addRow();
        			objGrdColDs.setColumn(nRow, "value", arrAftVal[i]);
        			continue;
        		}

        		//배열의 길이만큼 for문 돌리기
        		for(var j = 0; j < arrAftVal.length; j++)
        		{
        			//데이터 값과 배열에 저장되어있는 값이 같을 경우 break;
        			if(sVal==arrAftVal[j])
        			{
        				objChk = true;
        				break;
        			}
        		}
        		//false일때 arrAftVal에 데이터 추가(데이터 값이 일치하지 않는 경우, 중복 X)
        		if(!objChk)
        		{
        			arrAftVal.push(sVal);
        			nRow = objGrdColDs.addRow();
        			objGrdColDs.setColumn(nRow, "value", arrAftVal[j]);
        		}

        	}
        	switch(true) {
        	case sColNm=="수량" :

        		sColVal.set_type("INT");
        		break;

        	case sColNm=="금액" :

        		sColVal.set_type("INT");
        		break;

        	case sColNm=="합계" :

        		sColVal.set_type("INT");
        		break;

        	default: sColVal.set_type("STRING");
        	}

        	objGrdColDs.set_keystring("S:value");

        	objGrdColDs.set_enableevent(true);

        	objGrdColList.selectRow(0);//설정한 로우인덱스에 있는 로우 선택

        };

        //헤드의 cell 클릭시
        this.grdColList_onheadclick = function(obj,e)
        {
        	//인덱스 값이 0인 cell을 클릭시
        	if(e.cell == 0)
        	{
        		this.fv_objChkHd(obj, e);
        	}
        };

        //body의 cell 클릭시
        this.grdColList_oncellclick = function(obj,e)
        {
        	//인덱스 값이 0인 cell을 클릭시
        	if(e.cell == 0)
        	{
        		this.fv_objChkBd(obj, e);
        	}
        };

        /* 함수 */

        //바인딩
        this.fv_dsColListInfo = function(obj,e)
        {
        	var nCnt;			//데이터 셋의 로우갯수 변수
        	var arrAftVal = [];	//중복되지 않은 데이터 저장할 배열

        	//변수 선언
        	var nRow, sVal, nCnt, sColNm, nIdx;

        	var objColDs, objCmbDs, objGrdColDs;//데이터 셋 선언
        	var objGrdColList, objGrdCol;//그리드 선언

        	objColDs	= this.dsList;
        	objCmbDs	= this.dsCmbList;
        	objGrdColDs = this.dsColList;

        	objGrdColList 	= this.grdColList;
        	objGrdCol		= this.grdList;


        	//콤보 박스에서 선택한 값 찾기
        	nIdx = e.postindex;

        	sColNm = objColDs.getColID(nIdx);
        	nCnt = objColDs.getRowCount();

        	objGrdColList.setCellProperty("head", 1, "text", sColNm);

        	// 컬럼 정보 이외의 데이터(Row)를 삭제 : 안하면 데이터가 쌓임
        	objGrdColDs.clearData();

        	objGrdColDs.set_enableevent(false);

        	//sColNm에 해당하는 컬럼의 로우들을 dsColList에 바인딩
        	for(var i = 0; i < nCnt; i++)
        	{
        		var objChk = false;

        		if(sColNm == "등록일"){
        			sVal = objColDs.getColumn(i, sColNm);
        			sVal = sVal.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
        			//고정되있는 값 자르기(replace)
        			//yyyy-mm-dd 형식
        		}else{
        			sVal = objColDs.getColumn(i, sColNm);//세로, 가로(고정), 컬럼에 해당하는 로우값들
        		}

        		//배열의 길이가 0일때 sVal의 첫번째 값 입력 후 continue
        		if(arrAftVal.length==0)
        		{
        			arrAftVal.push(sVal);
        			nRow = objGrdColDs.addRow();
        			objGrdColDs.setColumn(nRow, "value", arrAftVal[i]);
        			continue;
        		}

        		//배열의 길이만큼 for문 돌리기
        		for(var j = 0; j < arrAftVal.length; j++)
        		{
        			//데이터 값과 배열에 저장되어있는 값이 같을 경우 break;
        			if(sVal==arrAftVal[j])
        			{
        				objChk = true;
        				break;
        			}
        		}
        		//false일때 arrAftVal에 데이터 추가(데이터 값이 일치하지 않는 경우, 중복 X)
        		if(!objChk)
        		{
        			arrAftVal.push(sVal);
        			nRow = objGrdColDs.addRow();
        			objGrdColDs.setColumn(nRow, "value", arrAftVal[j]);
        		}

        	}

        	this.fv_objColType(obj, e);

        	objGrdColDs.set_keystring("S:value");

        	objGrdColDs.set_enableevent(true);

        	objGrdColList.selectRow(0);//설정한 로우인덱스에 있는 로우 선택
        }

        this.fv_objCheckHd = false;
        //헤드 클릭 함수
        this.fv_objChkHd = function (obj, e)
        {
        	//변수
        	var sGrdColID, nGrdCnt;
        	//헤드 클릭 변수
        	var objCheckHd;
        	//데이터셋
        	var objGrdColDs;
        	//그리드
        	var objGrdColList;

        	objGrdColDs = this.dsColList;
        	objGrdColList = this.grdColList;


        	nGrdCnt = objGrdColDs.getRowCount();
        	//replace(/bind:/i, "") : (/a/, "") 일 때 a 값을 떼고 출력
        	sGrdColID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i, "");


        	//체크 O -> 체크 X
        	//체크 X -> 체크 O
        	this.fv_objCheckHd = (this.fv_objCheckHd ? false : true);

        	//body 체크
        	for(var i=0; i< nGrdCnt; i++)
        	{
        		objGrdColDs.setColumn(i, sGrdColID, this.fv_objCheckHd);
        	}

        	//head 체크
        	obj.setCellProperty("head", 0, "text", this.fv_objCheckHd);


        };


        //바디 클릭 함수
        this.fv_objChkBd =  function (obj, e)
        {
        	//변수
        	var nGrdCnt, nProVal;
        	//그리드 변수
        	var objGrdColList;
        	//데이터셋 변수
        	var objGrdColDs;

        	objGrdColDs = this.dsColList;
        	objGrdColList = this.grdColList;

        	nGrdCnt = objGrdColDs.getRowCount();

        	for(var i = 0; i < nGrdCnt; i++)
        	{
        		//this.fv_nBdChk 배열에 그리드의 속성값들을 입력
        		nProVal = objGrdColList.getCellPropertyValue(i, 0, "text");
        		//this.fv_nBdChk 배열의 i번째 값이 0인경우
        		//그리드의 헤드속성을 false로 리턴
        		if(nProVal==0)
        		{
        			return objGrdColList.setCellProperty("head", 0, "text", 0);
        		}
        		else if(nProVal==1)
        		{
        			objGrdColList.setCellProperty("head", 0, "text", 1);
        		}
        	}
        };

        //switch, case
        this.fv_objColType =  function (obj, e)
        {
        	var sColVal, nIdx, sColNm;
        	var objColDs, objGrdColDs;

        	objColDs 	= this.dsList;
        	objGrdColDs = this.dsColList;

        	nIdx = e.postindex;

        	sColNm = objColDs.getColID(nIdx);

        	sColVal = objGrdColDs.getColumnInfo(1);

        	switch(true) {				//sColNm값에 따라 데이터들의 속성값 분기
        	case sColNm=="수량" :

        		sColVal.set_type("INT");
        		break;

        	case sColNm=="금액" :

        		sColVal.set_type("INT");
        		break;

        	case sColNm=="합계" :

        		sColVal.set_type("INT");
        		break;

        	default: sColVal.set_type("STRING");
        	}
        };

        this.grdList_onheaddblclick = function(obj,e)
        {
        	var nColIdx, sColNm;
        	var objColDs;//데이터셋 선언
        	var objGrd;//그리드 선언

        	nColIdx = e.cell;

        	objColDs 	= this.dsList;
        	objGrdCol 	= this.grdList;

        	sColNm = objGrdCol.getCellProperty("head", nColIdx, "text");
        	trace("!@@# >> "+this.fv_bolSwitch);
        	if(this.fv_bolSwitch)
        	{
        		objColDs.set_keystring("S:+"+sColNm);
        		this.fv_bolSwitch = false;
        	}
        	else
        	{
        		objColDs.set_keystring("S:-"+sColNm);
        		this.fv_bolSwitch = true;
        	}

        	//objColDs.set_keystring("S:"+sColNm);
        	objGrdCol.selectRow(0);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleSJM_onload,this);
            this.grdColList.addEventHandler("onheadclick",this.grdColList_onheadclick,this);
            this.grdColList.addEventHandler("oncellclick",this.grdColList_oncellclick,this);
            this.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.grdList.addEventHandler("onheaddblclick",this.grdList_onheaddblclick,this);
            this.cmbColList.addEventHandler("canitemchange",this.cmbColList_canitemchange,this);
        };
        this.loadIncludeScript("sampleSJM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
