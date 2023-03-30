(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NM010T01");
            this.set_titletext("일정관리_월간일정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,632);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Cal", this);
            obj._setContents("<ColumnInfo><Column id=\"DAY0\" type=\"STRING\" size=\"256\"/><Column id=\"DAY1\" type=\"STRING\" size=\"256\"/><Column id=\"DAY2\" type=\"STRING\" size=\"256\"/><Column id=\"DAY3\" type=\"STRING\" size=\"256\"/><Column id=\"DAY4\" type=\"STRING\" size=\"256\"/><Column id=\"DAY5\" type=\"STRING\" size=\"256\"/><Column id=\"DAY6\" type=\"STRING\" size=\"256\"/><Column id=\"DAYSC0\" type=\"STRING\" size=\"256\"/><Column id=\"DAYSC1\" type=\"STRING\" size=\"256\"/><Column id=\"DAYSC2\" type=\"STRING\" size=\"256\"/><Column id=\"DAYSC3\" type=\"STRING\" size=\"256\"/><Column id=\"DAYSC4\" type=\"STRING\" size=\"256\"/><Column id=\"DAYSC5\" type=\"STRING\" size=\"256\"/><Column id=\"DAYSC6\" type=\"STRING\" size=\"256\"/><Column id=\"HOL0\" type=\"STRING\" size=\"256\"/><Column id=\"HOL1\" type=\"STRING\" size=\"256\"/><Column id=\"HOL2\" type=\"STRING\" size=\"256\"/><Column id=\"HOL3\" type=\"STRING\" size=\"256\"/><Column id=\"HOL4\" type=\"STRING\" size=\"256\"/><Column id=\"HOL5\" type=\"STRING\" size=\"256\"/><Column id=\"HOL6\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE0\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE4\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE5\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DAY0\">31</Col><Col id=\"DAY1\">1</Col><Col id=\"DAY2\">2</Col><Col id=\"DAY3\">3</Col><Col id=\"DAY4\">4</Col><Col id=\"DAY5\">5</Col><Col id=\"DAY6\">6</Col><Col id=\"HOL0\"/><Col id=\"HOL1\"/><Col id=\"HOL2\"/><Col id=\"HOL3\"/><Col id=\"HOL4\"/><Col id=\"HOL5\"/><Col id=\"HOL6\"/><Col id=\"TYPE0\"/><Col id=\"TYPE1\"/><Col id=\"TYPE2\"/><Col id=\"TYPE3\"/><Col id=\"TYPE4\"/><Col id=\"TYPE5\"/><Col id=\"TYPE6\"/><Col id=\"DAYSC0\"/></Row><Row><Col id=\"DAY0\">7</Col><Col id=\"DAY1\">8</Col><Col id=\"DAY2\">9</Col><Col id=\"DAY3\">10</Col><Col id=\"DAY4\">11</Col><Col id=\"DAY5\">12</Col><Col id=\"DAY6\">13</Col><Col id=\"HOL0\"/><Col id=\"HOL1\"/><Col id=\"HOL2\"/><Col id=\"HOL3\"/><Col id=\"HOL4\"/><Col id=\"HOL5\"/><Col id=\"HOL6\"/><Col id=\"TYPE0\"/><Col id=\"TYPE1\"/><Col id=\"TYPE2\"/><Col id=\"TYPE3\"/><Col id=\"TYPE4\"/><Col id=\"TYPE5\"/><Col id=\"TYPE6\"/><Col id=\"DAYSC0\"/></Row><Row><Col id=\"DAY0\">14</Col><Col id=\"DAY1\">15</Col><Col id=\"DAY2\">16</Col><Col id=\"DAY3\">17</Col><Col id=\"DAY4\">18</Col><Col id=\"DAY5\">19</Col><Col id=\"DAY6\">20</Col><Col id=\"HOL0\"/><Col id=\"HOL1\"/><Col id=\"HOL2\"/><Col id=\"HOL3\"/><Col id=\"HOL4\"/><Col id=\"HOL5\"/><Col id=\"HOL6\"/><Col id=\"TYPE0\"/><Col id=\"TYPE1\"/><Col id=\"TYPE2\"/><Col id=\"TYPE3\"/><Col id=\"TYPE4\"/><Col id=\"TYPE5\"/><Col id=\"TYPE6\"/><Col id=\"DAYSC0\"/></Row><Row><Col id=\"DAY0\">21</Col><Col id=\"DAY1\">22</Col><Col id=\"DAY2\">23</Col><Col id=\"DAY3\">24</Col><Col id=\"DAY4\">25</Col><Col id=\"DAY5\">26</Col><Col id=\"DAY6\">27</Col><Col id=\"HOL0\"/><Col id=\"HOL1\"/><Col id=\"HOL2\"/><Col id=\"HOL3\"/><Col id=\"HOL4\"/><Col id=\"HOL5\"/><Col id=\"HOL6\"/><Col id=\"TYPE0\"/><Col id=\"TYPE1\"/><Col id=\"TYPE2\"/><Col id=\"TYPE3\"/><Col id=\"TYPE4\"/><Col id=\"TYPE5\"/><Col id=\"TYPE6\"/></Row><Row><Col id=\"DAY0\">28</Col><Col id=\"DAY1\">29</Col><Col id=\"DAY2\">30</Col><Col id=\"DAY3\">1</Col><Col id=\"DAY4\">2</Col><Col id=\"DAY5\">3</Col><Col id=\"DAY6\">4</Col><Col id=\"HOL0\"/><Col id=\"HOL1\"/><Col id=\"HOL2\"/><Col id=\"HOL3\"/><Col id=\"HOL4\"/><Col id=\"HOL5\"/><Col id=\"HOL6\"/><Col id=\"TYPE0\"/><Col id=\"TYPE1\"/><Col id=\"TYPE2\"/><Col id=\"TYPE3\"/><Col id=\"TYPE4\"/><Col id=\"TYPE5\"/><Col id=\"TYPE6\"/></Row><Row><Col id=\"DAY0\">5</Col><Col id=\"DAY1\">6</Col><Col id=\"DAY2\">7</Col><Col id=\"DAY3\">8</Col><Col id=\"DAY4\">9</Col><Col id=\"DAY5\">10</Col><Col id=\"DAY6\">11</Col><Col id=\"HOL0\"/><Col id=\"HOL1\"/><Col id=\"HOL2\"/><Col id=\"HOL3\"/><Col id=\"HOL4\"/><Col id=\"HOL5\"/><Col id=\"HOL6\"/><Col id=\"TYPE0\"/><Col id=\"TYPE1\"/><Col id=\"TYPE2\"/><Col id=\"TYPE3\"/><Col id=\"TYPE4\"/><Col id=\"TYPE5\"/><Col id=\"TYPE6\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Holiday", this);
            obj._setContents("<ColumnInfo><Column id=\"MDATE\" type=\"string\" size=\"255\"/><Column id=\"WEEKDAY\" type=\"string\" size=\"255\"/><Column id=\"SHIFT\" type=\"string\" size=\"255\"/><Column id=\"HOLYN\" type=\"string\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"MDATE\">06-06</Col><Col id=\"WEEKDAY\">4</Col><Col id=\"SHIFT\">(DAY,현충일)</Col><Col id=\"HOLYN\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DocType", this);
            obj._setContents("<ColumnInfo><Column id=\"MDATE\" type=\"string\" size=\"255\"/><Column id=\"BEGDA\" type=\"string\" size=\"255\"/><Column id=\"TDATA\" type=\"string\" size=\"255\"/><Column id=\"DOCSTAT\" type=\"string\" size=\"255\"/><Column id=\"DOCURL\" type=\"string\" size=\"255\"/><Column id=\"SCHKZ\" type=\"string\" size=\"255\"/><Column id=\"ATEXT\" type=\"string\" size=\"255\"/><Column id=\"PERIOD\" type=\"string\" size=\"255\"/><Column id=\"LUNCH\" type=\"string\" size=\"255\"/><Column id=\"ABSYN\" type=\"string\" size=\"255\"/><Column id=\"HNAME\" type=\"string\" size=\"255\"/><Column id=\"RSNDA\" type=\"string\" size=\"255\"/><Column id=\"PLACE\" type=\"string\" size=\"255\"/><Column id=\"NOTES\" type=\"string\" size=\"255\"/><Column id=\"DOCSTATT\" type=\"string\" size=\"255\"/><Column id=\"TAOT\" type=\"string\" size=\"255\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN4\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN5\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN6\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN7\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN8\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN9\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN10\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN11\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN12\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN13\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN14\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN15\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MDATE\">07-07</Col><Col id=\"BEGDA\">2019-07-07(일)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">C</Col><Col id=\"DOCURL\"/><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"LUNCH\"/><Col id=\"ABSYN\"/><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"PLACE\"/><Col id=\"NOTES\"/><Col id=\"DOCSTATT\">승인</Col><Col id=\"TAOT\"/></Row><Row><Col id=\"MDATE\">07-08</Col><Col id=\"BEGDA\">2019-07-08(월)</Col><Col id=\"DOCSTAT\">C</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">승인</Col><Col id=\"HNAME\">김대승</Col><Col id=\"PERIOD\">07</Col></Row><Row><Col id=\"MDATE\">07-09</Col><Col id=\"BEGDA\">2019-07-09(화)</Col><Col id=\"DOCSTAT\">C</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">승인</Col><Col id=\"HNAME\">전영찬</Col><Col id=\"PERIOD\">07</Col></Row><Row><Col id=\"MDATE\">07-11</Col><Col id=\"BEGDA\">2019-07-11(목)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">P</Col><Col id=\"DOCURL\"/><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"LUNCH\"/><Col id=\"ABSYN\"/><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"PLACE\"/><Col id=\"NOTES\"/><Col id=\"DOCSTATT\">기안</Col><Col id=\"TAOT\"/></Row><Row><Col id=\"MDATE\">07-15</Col><Col id=\"BEGDA\">2019-07-15(월)</Col><Col id=\"DOCSTAT\">I</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">기안</Col><Col id=\"HNAME\">김대승</Col><Col id=\"PERIOD\">07</Col></Row><Row><Col id=\"MDATE\">07-16</Col><Col id=\"BEGDA\">2019-07-16(화)</Col><Col id=\"DOCSTAT\">I</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">기안</Col><Col id=\"HNAME\">전영찬</Col><Col id=\"PERIOD\">07</Col></Row><Row><Col id=\"MDATE\">07-17</Col><Col id=\"BEGDA\">2019-07-17(수)</Col><Col id=\"TDATA\">연중휴가1</Col><Col id=\"DOCSTAT\">C</Col><Col id=\"DOCURL\"/><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"LUNCH\"/><Col id=\"ABSYN\"/><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"PLACE\"/><Col id=\"NOTES\"/><Col id=\"DOCSTATT\">승인</Col><Col id=\"TAOT\"/></Row><Row><Col id=\"MDATE\">07-17</Col><Col id=\"BEGDA\">2019-07-17(수)</Col><Col id=\"TDATA\">연중휴가2</Col><Col id=\"DOCSTAT\">P</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">승인</Col></Row><Row><Col id=\"MDATE\">07-17</Col><Col id=\"BEGDA\">2019-07-17(수)</Col><Col id=\"TDATA\">연중휴가3</Col><Col id=\"DOCSTAT\">I</Col><Col id=\"DOCURL\"/><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"LUNCH\"/><Col id=\"ABSYN\"/><Col id=\"HNAME\">김대승</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"PLACE\"/><Col id=\"NOTES\"/><Col id=\"DOCSTATT\">기안</Col><Col id=\"TAOT\"/></Row><Row><Col id=\"MDATE\">07-22</Col><Col id=\"BEGDA\">2019-07-22(월)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">C</Col><Col id=\"DOCURL\"/><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"LUNCH\"/><Col id=\"ABSYN\"/><Col id=\"HNAME\">전영찬</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"PLACE\"/><Col id=\"NOTES\"/><Col id=\"DOCSTATT\">승인</Col><Col id=\"TAOT\"/></Row><Row><Col id=\"MDATE\">07-22</Col><Col id=\"BEGDA\">2019-07-22(월)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">I</Col><Col id=\"DOCURL\"/><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"LUNCH\"/><Col id=\"ABSYN\"/><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"PLACE\"/><Col id=\"NOTES\"/><Col id=\"DOCSTATT\">기안</Col><Col id=\"TAOT\"/></Row><Row><Col id=\"MDATE\">07-23</Col><Col id=\"BEGDA\">2019-07-23(화)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">C</Col><Col id=\"DOCURL\"/><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"LUNCH\"/><Col id=\"ABSYN\"/><Col id=\"HNAME\">김대승</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"PLACE\"/><Col id=\"NOTES\"/><Col id=\"DOCSTATT\">승인</Col><Col id=\"TAOT\"/></Row><Row><Col id=\"MDATE\">07-23</Col><Col id=\"BEGDA\">2019-07-23(화)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">I</Col><Col id=\"DOCURL\"/><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"PERIOD\">07</Col><Col id=\"LUNCH\"/><Col id=\"ABSYN\"/><Col id=\"HNAME\">전영찬</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"PLACE\"/><Col id=\"NOTES\"/><Col id=\"DOCSTATT\">기안</Col><Col id=\"TAOT\"/></Row><Row><Col id=\"MDATE\">06-11</Col><Col id=\"BEGDA\">2019-06-11(화)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">I</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">기안</Col><Col id=\"PERIOD\">06</Col></Row><Row><Col id=\"MDATE\">06-12</Col><Col id=\"BEGDA\">2019-06-12(수)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">C</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">기안</Col><Col id=\"PERIOD\">06</Col></Row><Row><Col id=\"MDATE\">06-13</Col><Col id=\"BEGDA\">2019-06-13(목)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">I</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">기안</Col><Col id=\"PERIOD\">06</Col></Row><Row><Col id=\"MDATE\">06-20</Col><Col id=\"BEGDA\">2019-06-20(목)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">I</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">기안</Col><Col id=\"PERIOD\">06</Col></Row><Row><Col id=\"MDATE\">06-20</Col><Col id=\"BEGDA\">2019-06-20(목)</Col><Col id=\"TDATA\">연중휴가</Col><Col id=\"DOCSTAT\">C</Col><Col id=\"SCHKZ\">일근근무 (DAY)</Col><Col id=\"ATEXT\">연중휴가</Col><Col id=\"HNAME\">이동건</Col><Col id=\"RSNDA\">2019-05-27</Col><Col id=\"DOCSTATT\">기안</Col><Col id=\"PERIOD\">06</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DaySchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"MDATE\" type=\"string\" size=\"255\"/><Column id=\"BEGDA\" type=\"string\" size=\"255\"/><Column id=\"TDATA\" type=\"string\" size=\"255\"/><Column id=\"DOCSTAT\" type=\"string\" size=\"255\"/><Column id=\"DOCURL\" type=\"string\" size=\"255\"/><Column id=\"SCHKZ\" type=\"string\" size=\"255\"/><Column id=\"ATEXT\" type=\"string\" size=\"255\"/><Column id=\"PERIOD\" type=\"string\" size=\"255\"/><Column id=\"LUNCH\" type=\"string\" size=\"255\"/><Column id=\"ABSYN\" type=\"string\" size=\"255\"/><Column id=\"HNAME\" type=\"string\" size=\"255\"/><Column id=\"RSNDA\" type=\"string\" size=\"255\"/><Column id=\"PLACE\" type=\"string\" size=\"255\"/><Column id=\"NOTES\" type=\"string\" size=\"255\"/><Column id=\"DOCSTATT\" type=\"string\" size=\"255\"/><Column id=\"TAOT\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizDay", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizFullDay", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_ORIGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBizSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ALLDAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DIVISION_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_ORIGIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHEDULE_PARTICIPANT\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PUSH_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"NAME\">회사</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"NAME\">팀</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">개인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","4","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("범주");
            this.addChild(obj.name, obj);

            obj = new Static("staSelectDay","43.04%","10","241","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_usedecorate("true");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCalendar","10","37",null,null,"57.84%","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_Cal");
            obj.set_autofittype("col");
            obj.set_useselcolor("true");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_WF_calendar01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"64\"/><Column size=\"64\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"35\" band=\"head\"/><Row size=\"20\"/><Row size=\"90\"/></Rows><Band id=\"head\"><Cell cssclass=\"cellLeft\"/><Cell col=\"1\" colspan=\"5\" text=\"2019.04\" cssclass=\"cell_WF_CalYear\"/><Cell col=\"6\" cssclass=\"cellRight\"/><Cell row=\"1\" text=\"일\" cssclass=\"cell_WF_Sun\" color=\"#f4553b\"/><Cell row=\"1\" col=\"1\" text=\"월\" cssclass=\"cell_WF_CalWeek\"/><Cell row=\"1\" col=\"2\" text=\"화\" cssclass=\"cell_WF_CalWeek\"/><Cell row=\"1\" col=\"3\" text=\"수\" cssclass=\"cell_WF_CalWeek\"/><Cell row=\"1\" col=\"4\" text=\"목\" cssclass=\"cell_WF_CalWeek\"/><Cell row=\"1\" col=\"5\" text=\"금\" cssclass=\"cell_WF_CalWeek\"/><Cell row=\"1\" col=\"6\" text=\"토\" cssclass=\"cell_WF_Sat\" color=\"#0066ff\"/></Band><Band id=\"body\"><Cell rowspan=\"2\"><Cell text=\"bind:DAY0\" displaytype=\"text\" cssclass=\"expr:comp._arrCssInfo[currow][this.col]\" border=\"1px solid #c7c7c7,1px solid #c7c7c7,0px none\" textAlign=\"right\" borderRadius=\"3px\" color=\"#f4553b\"/><Cell row=\"1\" text=\"bind:DAYSC0\" displaytype=\"decoratetext\" borderRadius=\"3px\" textAlign=\"left\"/></Cell><Cell col=\"1\" rowspan=\"2\"><Cell text=\"bind:DAY1\" displaytype=\"text\" cssclass=\"expr:comp._arrCssInfo[currow][this.col]\" border=\"1px solid #c7c7c7,1px solid #c7c7c7,0px none\" textAlign=\"right\" borderRadius=\"3px\"/><Cell row=\"1\" text=\"bind:DAYSC1\" displaytype=\"decoratetext\" textAlign=\"left\" borderRadius=\"3px\"/></Cell><Cell col=\"2\" rowspan=\"2\"><Cell text=\"bind:DAY2\" displaytype=\"text\" cssclass=\"expr:comp._arrCssInfo[currow][this.col]\" border=\"1px solid #c7c7c7,1px solid #c7c7c7,0px none\" textAlign=\"right\" borderRadius=\"3px\"/><Cell row=\"1\" text=\"bind:DAYSC2\" displaytype=\"decoratetext\" textAlign=\"left\" borderRadius=\"3px\"/></Cell><Cell col=\"3\" rowspan=\"2\"><Cell text=\"bind:DAY3\" displaytype=\"text\" cssclass=\"expr:comp._arrCssInfo[currow][this.col]\" border=\"1px solid #c7c7c7,1px solid #c7c7c7,0px none\" textAlign=\"right\" borderRadius=\"3px\"/><Cell row=\"1\" text=\"bind:DAYSC3\" displaytype=\"decoratetext\" textAlign=\"left\" borderRadius=\"3px\"/></Cell><Cell col=\"4\" rowspan=\"2\"><Cell text=\"bind:DAY4\" displaytype=\"text\" cssclass=\"expr:comp._arrCssInfo[currow][this.col]\" border=\"1px solid #c7c7c7,1px solid #c7c7c7,0px none\" textAlign=\"right\" borderRadius=\"3px\"/><Cell row=\"1\" text=\"bind:DAYSC4\" displaytype=\"decoratetext\" textAlign=\"left\" borderRadius=\"3px\"/></Cell><Cell col=\"5\" rowspan=\"2\"><Cell text=\"bind:DAY5\" displaytype=\"text\" cssclass=\"expr:comp._arrCssInfo[currow][this.col]\" border=\"1px solid #c7c7c7,1px solid #c7c7c7,0px none\" textAlign=\"right\" borderRadius=\"3px\"/><Cell row=\"1\" text=\"bind:DAYSC5\" displaytype=\"decoratetext\" textAlign=\"left\" borderRadius=\"3px\"/></Cell><Cell col=\"6\" rowspan=\"2\"><Cell displaytype=\"text\" text=\"bind:DAY6\" cssclass=\"expr:comp._arrCssInfo[currow][this.col]\" border=\"1px solid #c7c7c7,1px solid #c7c7c7,0px none\" textAlign=\"right\" borderRadius=\"3px\" color=\"#0066ff\"/><Cell row=\"1\" text=\"bind:DAYSC6\" displaytype=\"decoratetext\" borderRadius=\"3px\" textAlign=\"left\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSelectGubun",null,"10","120","22","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsGubun");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new ListView("lstSelectDay","43.24%","37",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsBizSelect");
            obj.set_cssclass("lst_WF_schedule");
            obj.set_nodatatext("일정이 없습니다");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"150\"><Cell id=\"Cell01\" left=\"19\" top=\"10\" width=\"380\" height=\"50\" text=\"bind:SCHEDULE_TITLE\" cssclass=\"cellTitle\" tooltiptext=\"bind:SCHEDULE_TXT\" font=\"normal 20pt/normal &quot;나눔고딕 ExtraBold&quot;\"/><Cell id=\"Cell03\" top=\"100\" height=\"24\" text=\"bind:SCHEDULE_PLACE\" width=\"150\" right=\"17\"/><Cell id=\"Cell05\" left=\"19\" top=\"70\" width=\"80\" height=\"24\" text=\"expr:comp.parent.fnDateFormat(currow, &quot;SCHEDULE_START_DATE&quot;, &quot;select&quot;, &quot;date&quot;)\"/><Cell id=\"Cell07\" left=\"104\" top=\"70\" width=\"65\" height=\"24\" text=\"expr:comp.parent.fnDateFormat(currow, &quot;SCHEDULE_START_TIME&quot;, &quot;select&quot;, &quot;time&quot;)\"/><Cell id=\"Cell09\" left=\"284\" top=\"70\" width=\"115\" height=\"24\" text=\"expr:comp.parent.fnDateFormat(currow, &quot;SCHEDULE_END_TIME&quot;, &quot;select&quot;, &quot;time&quot;)\"/><Cell id=\"Cell11\" top=\"70\" width=\"150\" height=\"24\" text=\"bind:SCHEDULE_PARTICIPANT\" right=\"17\" tooltiptext=\"bind:SCHEDULE_PARTICIPANT\"/><Cell id=\"Cell00\" left=\"174\" top=\"70\" width=\"15\" height=\"24\" text=\"~\"/><Cell id=\"Cell02\" left=\"199\" top=\"70\" width=\"80\" height=\"24\" text=\"expr:comp.parent.fnDateFormat(currow, &quot;SCHEDULE_END_DATE&quot;, &quot;select&quot;, &quot;date&quot;)\"/><Cell id=\"Cell04\" top=\"100\" width=\"380\" height=\"40\" text=\"bind:SCHEDULE_TXT\" wordWrap=\"char\" left=\"19\"/><Cell id=\"Cell06\" left=\"1\" top=\"-1\" width=\"39\" height=\"11\" cssclass=\"expr:(dataset.getColumn( currow, &apos;CATEGORY_CD&apos; ) == &quot;C&quot;) ? &quot;cellCategory01&quot; : (dataset.getColumn( currow, &apos;CATEGORY_CD&apos; ) == &quot;T&quot;) ? &quot;cellCategory02&quot; : &quot;cellCategory03&quot;\"/><Cell id=\"Cell08\" top=\"36\" width=\"150\" height=\"24\" text=\"expr: REG_NM != &quot;&quot; ?  &quot;작성자 : &quot;+REG_NM : &quot;&quot;\" right=\"17\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","45","10","35","19",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#f24428");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","80","10","50","19",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("회사");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","115","10","35","19",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#3082f2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","150","10","50","19",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("팀");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","220","10","50","19",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("개인");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","185","10","35","19",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("#7929f2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,632,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("NM010T01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    NM010T01.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.09.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.09.17      이동건             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sYyyyMm = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.NM010T01_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInit();
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
        	this.dsBizDay.clearData();
        	this.dsBizFullDay.clearData();
        	this.dsBizSelect.clearData();

        	var nYear = take.getTodayTime().year;
        	var nMonth = take.getTodayTime().month;
        	//var nYMD = take.getTodayTime().date;

        	var sProjectCd 	= UXBooster.av_sProjectCd;
        	var sEndDate = nYear+nMonth;
        	var sHoliDate = take.nvl("9999"+nMonth, "");
        	//최초 조회시 현재 프로젝트 & 날짜 일정 조회
        	take.tranSelect(this, "onLoad", "ScheduleManagement.scheduleInfoList", "", "dsBizDay",
        					"PROJECT_CD='"+sProjectCd
        					+"' SCHEDULE_SEARCH_DATE='"+sEndDate
        					+"' SCHEDULE_HOLIDAY_DATE='"+sHoliDate
        					+"' MONTH_CALENDAR='"+ "MONTH_CALENDAR"+"'", "fnCallback");
        	var objGrid = this.grdCalendar;
        	this.fv_sYyyyMm = nYear.toString() + nMonth.toString();
        }

        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            this.dsBizDay.clearData();
        	this.dsBizFullDay.clearData();
        	this.dsBizSelect.clearData();
        	//공통 조회에서 호출할 디폴트값 세팅 필요
        	var sProjectCd 	= UXBooster.av_sProjectCd;
            if (take.nvl(sTranId, "")=="") sTranId = "onLoad";

        	if(sTranId == "onLoad") this.fnInit();

        	var sHoliDate = take.nvl("9999"+this.fv_sYyyyMm.substr(4,2), "");
        	//이전 달 일정검색
        	if(sTranId == "before"){
        		take.tranSelect(this, "before", "ScheduleManagement.scheduleInfoList", "", "dsBizDay",
        						"PROJECT_CD='"+sProjectCd
        						+"' SCHEDULE_SEARCH_DATE='"+this.fv_sYyyyMm
        						+"' SCHEDULE_HOLIDAY_DATE='"+sHoliDate
        						+"' MONTH_CALENDAR='"+ "MONTH_CALENDAR"+"'", "fnCallback");

        	}else if(sTranId = "after"){
        	//다음 달 일정검색
        		take.tranSelect(this, "after", "ScheduleManagement.scheduleInfoList", "", "dsBizDay",
        						"PROJECT_CD='"+sProjectCd
        						+"' SCHEDULE_SEARCH_DATE='"+this.fv_sYyyyMm
        						+"' SCHEDULE_HOLIDAY_DATE='"+sHoliDate
        						+"' MONTH_CALENDAR='"+ "MONTH_CALENDAR"+"'", "fnCallback");
        	}
        }

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Save transation id";
            take.tranSave(this, sTranId, "NAMESPACE", "sInDs", "sOutDs", "sParam", "fnCallback");
        }

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

            //Script
        }

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

            //Script
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
         * grdCalendar_onheadclick : 달력 화살표 선택시 이벤트
         */
        this.grdCalendar_onheadclick = function(obj,e)
        {
        	if (e.cell==0)
            {
        		//이전 달 일정 검색
        		this.fv_sYyyyMm = this.fn_addMonth(this.fv_sYyyyMm+"01", -1).substr(0,6);
        		this.fnSearch("before");

            } else if (e.cell==2) {
        		//이전 달 일정 검색
        		this.fv_sYyyyMm = this.fn_addMonth(this.fv_sYyyyMm+"01", 1).substr(0,6);
        		this.fnSearch("after");
            } else if (e.cell==1) {

            }
        };

        /**
         * cboSelectGubun_onitemchanged : 오른쪽 상단 구분선택 시 이벤트
         */
        this.cboSelectGubun_onitemchanged = function(obj,e)
        {
        	var nRow 		= e.postindex;
        	var sSelectCd 	= this.dsGubun.getColumn(nRow, "CODE");
        	if(sSelectCd == null || sSelectCd == "") {
        		this.dsBizSelect.set_filterstr("");
        	}else{
        		this.dsBizSelect.set_filterstr( "CATEGORY_CD =='"+sSelectCd+"'" );
        	}
        };

        /**
         * grdCalendar_oncellclick : 달력에서 날짜 선택 시 이벤트
         */
        this.grdCalendar_oncellclick = function(obj,e)
        {
        	this.fnSetSelectData();
        };

        this.lstSelectDay_oncellclick = function(obj,e)
        {

        };

        this.lstSelectDay_onbanddblclick = function(obj,e)
        {
        	take.openPopup(this, "addPopUp", "frm::mod/NM010P01.xfdl",  {bolSearch: true, nSelRow : e.row}, "", "fnPopCallback", false);
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnSetSelectData : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnSetSelectData = function ()
        {
        	this.dsBizFullDay.set_keystring("G:SCHEDULE_START_DATE");
        	var nCell = this.grdCalendar.getCellPos();
        	var nRow = this.grdCalendar.getSelectedRows();
        	var nDayWeek, sData = "";
        	var objDs = this.grdCalendar.getBindDataset();
        	var sCellId = objDs.getColID(nCell);
        	sCellId = sCellId.substr(sCellId .length - 1, sCellId.length);

        	var nDayWeek = this.fn_SetDayWeek(sCellId);
        	var nDay = objDs.getColumn(nRow, sCellId);
        	var sYyyyMm = this.fv_sYyyyMm;
        	var sFocusDay = this.ds_Cal.getColumn(nRow, sCellId);

        	if(sFocusDay == null) return;
        	var sDate = sYyyyMm+this.fn_lpad(sFocusDay.toString(),2);

        	var nFRow = this.dsBizFullDay.findRowExpr("SCHEDULE_START_DATE=='" + sDate +"' && (CATEGORY_CD=='C'||CATEGORY_CD=='T'||CATEGORY_CD=='P'||CATEGORY_CD=='A'||CATEGORY_CD=='N')");
        	var nRowCnt =  this.dsBizFullDay.getCaseCount( "SCHEDULE_START_DATE == '"+sDate+"'");
        	this.dsBizSelect.clearData();
        	var nAddRow;
        	var objBizSelect 	= this.dsBizSelect;
        	var objBizFull 		= this.dsBizFullDay;

        	if (nFRow>=0){
        		for(var i = 0 ; i< nRowCnt; i++){
        			nAddRow =this.dsBizSelect.addRow();
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_SEQ", 		objBizFull.getColumn(nFRow,"SCHEDULE_SEQ"));
        			objBizSelect.setColumn(nAddRow, "ALLDAY_YN",			objBizFull.getColumn(nFRow,"ALLDAY_YN"));
        			objBizSelect.setColumn(nAddRow, "CATEGORY_CD",			objBizFull.getColumn(nFRow,"CATEGORY_CD"));
        			objBizSelect.setColumn(nAddRow, "DIVISION_CD",			objBizFull.getColumn(nFRow,"DIVISION_CD"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_ORIGIN_DATE",	objBizFull.getColumn(nFRow,"SCHEDULE_ORIGIN_DATE"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_START_DATE",	objBizFull.getColumn(nFRow,"SCHEDULE_START_DATE"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_START_TIME",	objBizFull.getColumn(nFRow,"SCHEDULE_START_TIME"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_END_DATE",	objBizFull.getColumn(nFRow,"SCHEDULE_END_DATE"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_END_TIME",	objBizFull.getColumn(nFRow,"SCHEDULE_END_TIME"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_TITLE",		objBizFull.getColumn(nFRow,"SCHEDULE_TITLE"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_TXT",			objBizFull.getColumn(nFRow,"SCHEDULE_TXT"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_PLACE",		objBizFull.getColumn(nFRow,"SCHEDULE_PLACE"));
        			objBizSelect.setColumn(nAddRow, "SCHEDULE_PARTICIPANT", objBizFull.getColumn(nFRow,"SCHEDULE_PARTICIPANT"));
        			objBizSelect.setColumn(nAddRow, "REG_NM", objBizFull.getColumn(nFRow,"REG_NM"));
        			objBizSelect.setColumn(nAddRow, "MOD_NM", objBizFull.getColumn(nFRow,"MOD_NM"));
        			nFRow += 1;
        		}
        	}
        	this.dsBizFullDay.set_keystring("");
        	sDate	= sDate.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$2월 $3일');
        	this.staSelectDay.set_text(sDate +" "+nDayWeek+" 일정목록</fc></fs>");
        };

        this.fnDrawCalendar = function(objDs, objGrid, sYyyyMm)
        {
        	this.fv_sYyyyMm = sYyyyMm;
        	var nDay, nRow, nStartDay, nEndDay, nFRow;
            var sDate, sStat="", sCss;
            var objHolDs, objDocTypeDs, objPosInfo = {row:0,col:0};
            var arrCss= [["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]];

        	// Grid Header설정
        	objGrid.setCellProperty("Head",1,"text", sYyyyMm.substr(0, 4) + "." + sYyyyMm.substr(4,2) );

            objHolDs = this.ds_Holiday;
            objDocTypeDs = this.ds_DocType;

        	// Dataset 만들기
        	objDs.clearData();
        	nStartDay = this.fn_getDay(sYyyyMm+"01");
        	nEndDay = this.fn_getLastDate(sYyyyMm+"01").substr(6,2);

            nDay = nStartDay;

            objGrid.set_enableevent(false);
            objDs.set_enableevent(false);

            nRow = objDs.addRow();

        	var nToDay = take.getTodayTime().day;
        	for(var i=1; i<=nEndDay; i++)
        	{
        		// 달력 Data (날자)
        		objDs.setColumn(nRow, "DAY"+nDay, i);
                //오늘날자를 yyyy-mm으로 변수에 저장
        		var nRepeatDay = i.toString();
        		sDate = sYyyyMm.substr(4,2) + "-" + nRepeatDay.lpad(2,"0")

        		//데이터 셋팅
        		var nDataDay = this.fv_sYyyyMm+ i.toString().lpad(2,"0");
        		var nDataRow = this.dsBizFullDay.findRowExpr("SCHEDULE_START_DATE=='" + nDataDay +"'");
        		var arrDataRow = take.getFindRowsExpr(this.dsBizFullDay, "SCHEDULE_START_DATE=='"+nDataDay+"'", false);
        		var arrRow, sDataTitle;

        		sDataTitle = this.fnSettingTest(arrDataRow, nDataRow);
        		sDataTitle = take.nvl(sDataTitle, "");
        		if(sDataTitle == null || sDataTitle == ""){

        		}
        		else{
        			this.ds_Cal.setColumn(nRow, "DAYSC"+nDay, sDataTitle);
        		}


                //일반 휴일(토,일) Css세팅
        //         if (nDay==0)
        //         {
        //             sCss = "cell_WF_Sun";
        //         } else if (nDay==6) {
        //             sCss = "cell_WF_Sat";
        //         }

        		// 기타 휴일 세팅(CSS포함)
                nFRow = objHolDs.findRowExpr("MDATE=='" + sDate +"' && HOLYN=='X'");
                if (nFRow>=0)
                {
                    objDs.setColumn(nRow, "HOL"+nDay, objHolDs.getColumn(nFRow, "SHIFT"));
                    //sCss = "cell_WF_Sun";
                } else {
                    objDs.setColumn(nRow, "HOL"+nDay, "");
                }

                //회사 셋팅
                nFRow = objDocTypeDs.findRowExpr("MDATE=='" + sDate +"' && DOCSTAT=='C'");
                if (nFRow>=0) sStat+="C";

                //팀
                nFRow = objDocTypeDs.findRowExpr("MDATE=='" + sDate +"' && DOCSTAT=='T'");
                if (nFRow>=0) sStat+="T";

        		//개인
        		nFRow = objDocTypeDs.findRowExpr("MDATE=='" + sDate +"' && DOCSTAT=='P'");
                if (nFRow>=0) sStat+="P";

                 objDs.setColumn(nRow, "TYPE"+nDay, sStat);

                 //css세팅
                if(sStat =="CTP"){
        			sCss = take.nvl(sCss,"cell_WF_") + "ALL";
        		}
        		else if (sStat=="CT")
                {
                    //sCss = this.fn_nvl(sCss,"cell_WF_") + "AD";
        			sCss = take.nvl(sCss,"cell_WF_") + "AD";
                } else if (sStat=="C") {
                    sCss = take.nvl(sCss,"cell_WF_") + "Approve";
                } else if (sStat=="T") {
                    sCss = take.nvl(sCss,"cell_WF_") + "Draft";
                } else if (sStat =="P"){
        			sCss = take.nvl(sCss,"cell_WF_") + "Personal";
        		} else if (sStat =="N"){
        			sCss = take.nvl(sCss,"cell_WF_") + "Approve";
        		}

                //각 Row, Col별로 CSS 저장
                //trace("[" + nRow + "][" + nDay + "] --> " + sCss);
                arrCss[nRow][nDay]=sCss;

                //변수 초기화
                sStat = "";
                sCss = "";



                //오늘 날짜 위치 변수 저장
        		if(i == nToDay)
                {
                    objPosInfo.row = nRow;
                    objPosInfo.col = nDay;
                }

        		// 달력 Data Row추가
        		nDay = (nDay+1)%7;
        		if( nDay == 0 && i != nEndDay )
        			nRow = objDs.addRow();
        	}

            //CSS를 Grid 내부에 임의로 저장
            objGrid._arrCssInfo = arrCss;

            objDs.set_enableevent(true);
        	objGrid.set_enableevent(true);

            //trace(this.ds_Cal.saveXML());
            objDs.set_rowposition(objPosInfo.row);
            objGrid.setCellPos(objPosInfo.col);
        	this.grdCalendar.selectRow(objPosInfo.row);

            objGrid.redrawExprCell();

         	var sSelYyyyMm = sYyyyMm;
        	this.fv_sYyyyMm = sYyyyMm;
         	sYyyyMm = sYyyyMm.substr(4,2);
         	this.ds_DocType.filter("PERIOD == '"+sYyyyMm+"'");
        };

        /****** */
        this.fnSettingTest = function (arrDataRow, nDataRow)
        {
        	var arrRow, sGetDataTitle, sCategory, sDataTitle="";
        	if(arrDataRow != null){
        		for(var i = 0 ; i <arrDataRow.length; i++){
        			arrRow = arrDataRow[i];
        			if(i < 5){
        				sGetDataTitle = this.dsBizFullDay.getColumn(arrRow, "SCHEDULE_TITLE");
        				sCategory	  = this.dsBizFullDay.getColumn(arrRow, "CATEGORY_CD");
        				sGetDataTitle = sGetDataTitle.cutbytes(8);
        				sCategory 	  = sCategory == "C" ? "red" : (sCategory=="T"? "blue": (sCategory=="P" ? "purple" : "red"));
        				sDataTitle += "<fc v='"+sCategory+"'>"+sGetDataTitle+"</fc>"+"\n";
        			}else{
        				sDataTitle += "외 " +(arrDataRow.length-i)+"건";
        			}
        		}
        	}else{
        		sDataTitle = this.dsBizFullDay.getColumn(nDataRow, "SCHEDULE_TITLE");
        	}

        	return sDataTitle;
        };

        this.fn_SetDayWeek = function (nCellPos)
        {
        	var nPos = nCellPos.toString();
        	var nDayWeek;
        	switch(nPos) {
        	case "0":
        		nDayWeek = "일요일";
        		break;
        	case "1":
        		nDayWeek = "월요일";
        		break;
        	case "2":
        		nDayWeek = "화요일";
        		break;
        	case "3":
        		nDayWeek = "수요일";
        		break;
        	case "4":
        		nDayWeek = "목요일";
        		break;
        	case "5":
        		nDayWeek = "금요일";
        		break;
        	case "6":
        		nDayWeek = "토요일";
        		break;
        	default:
        	}
        	return nDayWeek;
        };

        // this.fn_nvl = function(strValue, strRepValue) {
        //     //if (this.fn_isNull(strValue)) return strRepValue;
        // 	if (take.isNull(strValue)) return strRepValue;
        //     else return strValue;
        // };

        this.fn_addMonth = function(strDate, nOffSet) {
        	var objDate	= this.fn_getObjDate(strDate);
        	var objNewDate = this.fn_getObjDate(strDate);

        	if (!take.isNull(nOffSet)) {
        		objNewDate.addMonth(nOffSet);
        		//같은 달로 나올경우 첫날에 하루를 빼서 이전달 날짜가 나오도록 한다.
        		if( objDate.getMonth() === objNewDate.getMonth() ){
        			var tempDate = new Date(objNewDate.getFullYear(), objNewDate.getMonth(), 1);
        			tempDate.addDate(-1);
        			objNewDate = tempDate;
        		}
        	}

        	var strRetDate  = objNewDate.getFullYear() + "";
        		strRetDate += this.fn_right("0" + (objNewDate.getMonth() + 1), 2);
        		strRetDate += this.fn_right("0" + objNewDate.getDate(), 2);
        	return strRetDate;
        };

        this.fn_right = function(sOrg, nSize) {
        	//if ( this.utlf_isNull(sOrg) || this.utlf_isNull(nSize) )	return "";
        	if ( take.isNull(sOrg) || take.isNull(nSize) )	return "";

        	if ( sOrg.length < nSize ) return sOrg;
        	else return sOrg.substr(sOrg.length-nSize, nSize);
        };

        this.fn_lpad = function(nNum, nCnt){
        	var nNum = nNum +'';

        	return nNum.length >= nCnt ? nNum : new Array(nCnt - nNum.length + 1).join('0') + nNum;
        }
         /**
         * fnSetFullSchedule : 검색된 일정을 통해 전체 일정을 만드는 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fn_getDay = function(strDate){
        	strDate = this.fn_getObjDate(strDate);
        	return strDate.getDay();
        }
         /**
         * fnSetFullSchedule : 검색된 일정을 통해 전체 일정을 만드는 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fn_getObjDate = function(strDate){
        	var nYear	= parseInt(strDate.substr(0, 4), 10);
        	var nMonth	= parseInt(strDate.substr(4, 2), 10)-1;
        	var nDate	= parseInt(strDate.substr(6, 2), 10);

        	return new Date(nYear, nMonth, nDate);
        }

        this.fn_getLastDate = function(strDate){
        	var nRetValue;
        	var nMonth = parseInt(strDate.substr(4,2), 10);
        	var nYear;
        	if (nMonth == 4 || nMonth == 6 || nMonth == 9 || nMonth == 11) {
        		nRetValue = 30;
        	} else if (nMonth == 2) {
        		nYear = parseInt(strDate.substring(0,4), 10);
        		if (take.isLeapYear(nYear) == true) {
        			nRetValue = 29;
        		} else {
        			nRetValue = 28;
        		}
        	} else {
        		nRetValue = 31;
        	}

        	return strDate.substr(0,6) + nRetValue.toString();
        }

        /**
         * fnSetFullSchedule : 검색된 일정을 통해 전체 일정을 만드는 함수
         * @example this.fnSetFullSchedule();
         */
        this.fnSetFullSchedule = function ()
        {
        	var sStartDate, sEndDate, sDaySpace, nAddRow, originDate;
        	var objDsBizDay = this.dsBizDay;
        	for(var i = 0 ; i < objDsBizDay.rowcount; i++){
        		sStartDate 	= objDsBizDay.getColumn(i, "SCHEDULE_START_DATE");
        		sEndDate 	= objDsBizDay.getColumn(i, "SCHEDULE_END_DATE");
        		//일정시작과 종료일이 다른경우
        		if(sStartDate != sEndDate){
        			originDate = sStartDate;
        			//YYYY-MM-DD 형식으로 변경
        			sStartDate	= sStartDate.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
        			sEndDate	= sEndDate.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1-$2-$3');
        			//시작일과 종료일간의 일정 차이를 구하는 함수
        			sDaySpace 	= this.fnDateDiff(sStartDate, sEndDate);

        			//일정 차이만큼 반복해 전체 일정을 만듬
        			for(var y= 0 ; y <= sDaySpace ; y++){
        				// sStartDate + y  == sEndDate까지
        				sStartDate = sStartDate.toString();
        				var sDate = new Date(sStartDate);
        				//차이값을 더하여 setting
        				sDate.setDate(sDate.getDate() + y);
        				var year = sDate.getFullYear();
        				var month = sDate.getMonth() + 1;
        				month = month.toString().lpad(2,"0");
        				var day = sDate.getDate();
        				day = day.toString().lpad(2,"0");
        				//전체적으로 데이터를 넣어놔야 함
        				this.fnSelectSetColumn(false, i, originDate ,year,month,day);
        			}
        		}else{
        			//일정시작과 종료일이 같은경우 데이터 제작
        			this.fnSelectSetColumn(true, i, sStartDate);
        		}
        	}
        };

        this.fnSelectSetColumn = function (bolDuplicate, searchRow, originDate, year,month,day)
        {
        	var nAddRow = this.dsBizFullDay.addRow();
        	var objBizFull = this.dsBizFullDay;
        	var objBizDay = this.dsBizDay;
        	var sCurrentYear;
        	var sStarDate = objBizDay.getColumn(searchRow,"SCHEDULE_START_DATE");
        	objBizFull.setColumn(nAddRow, "SCHEDULE_SEQ", 			objBizDay.getColumn(searchRow,"SCHEDULE_SEQ"));
        	objBizFull.setColumn(nAddRow, "ALLDAY_YN",				objBizDay.getColumn(searchRow,"ALLDAY_YN"));
        	objBizFull.setColumn(nAddRow, "CATEGORY_CD",			objBizDay.getColumn(searchRow,"CATEGORY_CD"));
        	objBizFull.setColumn(nAddRow, "DIVISION_CD",			objBizDay.getColumn(searchRow,"DIVISION_CD"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_ORIGIN_DATE",	originDate);
        	if(bolDuplicate) {
        		if(sStarDate.substr(0,4) == "9999"){
        			sCurrentYear = this.fv_sYyyyMm.substr(0,4);
        			sStarDate = sStarDate.replace("9999",sCurrentYear);
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_DATE",	sStarDate);
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_DATE",		sStarDate);
        		}else{
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_DATE",	objBizDay.getColumn(searchRow,"SCHEDULE_START_DATE"));
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_DATE",		objBizDay.getColumn(searchRow,"SCHEDULE_END_DATE"));
        		}
        	}else{
        		if(sStarDate.substr(0,4) == "9999"){
        			sCurrentYear = this.fv_sYyyyMm.substr(0,4);
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_DATE",	sCurrentYear+month+day);
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_DATE",		sCurrentYear+month+day);
        		}else{
        			objBizFull.setColumn(nAddRow, "SCHEDULE_START_DATE",	year+month+day);
        			objBizFull.setColumn(nAddRow, "SCHEDULE_END_DATE",		objBizDay.getColumn(searchRow,"SCHEDULE_END_DATE"));
        		}
        	}
        	objBizFull.setColumn(nAddRow, "SCHEDULE_START_TIME",	objBizDay.getColumn(searchRow,"SCHEDULE_START_TIME"));
        	//objBizFull.setColumn(nAddRow, "SCHEDULE_END_DATE",		objBizDay.getColumn(searchRow,"SCHEDULE_END_DATE"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_END_TIME",		objBizDay.getColumn(searchRow,"SCHEDULE_END_TIME"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_TITLE",			objBizDay.getColumn(searchRow,"SCHEDULE_TITLE"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_TXT",			objBizDay.getColumn(searchRow,"SCHEDULE_TXT"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_PLACE",			objBizDay.getColumn(searchRow,"SCHEDULE_PLACE"));
        	objBizFull.setColumn(nAddRow, "SCHEDULE_PARTICIPANT",	objBizDay.getColumn(searchRow,"SCHEDULE_PARTICIPANT"));
        	objBizFull.setColumn(nAddRow, "REG_NM",					objBizDay.getColumn(searchRow,"REG_NM"));
        	objBizFull.setColumn(nAddRow, "MOD_NM",					objBizDay.getColumn(searchRow,"MOD_NM"));

        };

        //날짜간 차이 구하기
        this.fnDateDiff = function dateDiff(_date1, _date2) {
        	var sdt = new Date(_date1);
        	var edt = new Date(_date2);
        	var dateDiff = Math.ceil((edt.getTime()-sdt.getTime())/(1000*3600*24));
        	return dateDiff;
        }

        this.fnSetMonthSchedule = function (nYyyymm)
        {
        	var nYear 	= nYyyymm.substr(0,4);
        	var nMonth 	= nYyyymm.substr(4,2);
        	return nYear+"년 "+nMonth+"월";
        };

        this.fnDateFormat = function(currow, sColId, objType, dateType)
        {
        	if(objType == "select"){
        		var sDate = this.dsBizSelect.getColumn(currow, sColId);
        	}else if(objType == "month"){
        		var sDate = this.dsBizDay.getColumn(currow, sColId);
        	}

        	if(sDate == "" || sDate == null)
        	{
        		return;
        	}else{
        		if(dateType == "date"){
        			sDate = sDate.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$2월 $3일');
        			return sDate;
        		}else if(dateType == "time"){
        			sDate = sDate.replace(/(\d\d)(\d\d)/g, '$1:$2');
        			sHour = parseInt(sDate.substr(0,2));
        			//sDate = sHour >= 12 ? sDate + "pm": sDate + "am";
        			sDate = sHour==99 ? "종일" : sHour >=12 ? sDate + "pm" : sDate + "am";
        			return sDate;
        		}

        	}
        }

        this.fnSetCategoryColor = function(nRow, CATEGORY_CD){

        	if(CATEGORY_CD == "C" ) return "cellCategory01";
        	if(CATEGORY_CD == "T" ) return "cellCategory02";
        	if(CATEGORY_CD == "P" ) return "cellCategory03";
        }

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
                case "onLoad" :  //저장 콜백
                    //전체 일정만들기
        			this.fnSetFullSchedule();
        			var nRowCnt = this.dsBizDay.rowcount;
        			var nSelectMonth = this.fnSetMonthSchedule(this.fv_sYyyyMm);

        			this.fnDrawCalendar(this.ds_Cal, this.grdCalendar, this.fv_sYyyyMm);
        			this.fnSetSelectData();
                    break;
        		case "before" : //조회 콜백
        			this.fnSetFullSchedule();
        			var nRowCnt = this.dsBizDay.rowcount;
        			//this.staSelectMonth.set_text("<fs v='10'><fc v='#151515'>"+this.fv_sYyyyMm +" 총 "+nRowCnt+"건"+"</fc></fs>");
        			this.fnDrawCalendar(this.ds_Cal, this.grdCalendar, this.fv_sYyyyMm);
        			this.fnSetSelectData();
        			//this.ds_DaySchedule.clearData();
                    break;
                case "after" :  //조회 콜백
                    this.fnSetFullSchedule();
        			var nRowCnt = this.dsBizDay.rowcount;
        			//this.staSelectMonth.set_text("<fs v='10'><fc v='#151515'>"+this.fv_sYyyyMm +" 총 "+nRowCnt+"건"+"</fc></fs>");
        			this.fnDrawCalendar(this.ds_Cal, this.grdCalendar, this.fv_sYyyyMm);
        			this.fnSetSelectData();
                    break;
                case "Transation id 03" : //조회 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;

                default :
                    break;
            }
        }

        this.fnPopCallback = function (sId, nErrCd, sErrMsg)
        {
        	this.reload();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.NM010T01_onload,this);
            this.grdCalendar.addEventHandler("onheadclick",this.grdCalendar_onheadclick,this);
            this.grdCalendar.addEventHandler("oncellclick",this.grdCalendar_oncellclick,this);
            this.grdCalendar.addEventHandler("onselectchanged",this.grdCalendar_onselectchanged,this);
            this.cboSelectGubun.addEventHandler("onitemchanged",this.cboSelectGubun_onitemchanged,this);
            this.lstSelectDay.addEventHandler("oncellclick",this.lstSelectDay_oncellclick,this);
            this.lstSelectDay.addEventHandler("onbanddblclick",this.lstSelectDay_onbanddblclick,this);
        };
        this.loadIncludeScript("NM010T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
