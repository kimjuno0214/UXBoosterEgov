(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpTakeComComp");
            this.set_titletext("(샘플)공통컴포넌트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,1199);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">일</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">이</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">삼</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTreeCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"lvl\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lvl\">0</Col><Col id=\"code\">00</Col><Col id=\"name\">전체</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"code\">0000</Col><Col id=\"name\">숫자</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"code\">000001</Col><Col id=\"name\">일</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">이</Col><Col id=\"code\">000002</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">삼</Col><Col id=\"code\">000003</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">사</Col><Col id=\"code\">000004</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"name\">오</Col><Col id=\"code\">000005</Col></Row><Row><Col id=\"lvl\">1</Col><Col id=\"code\">1111</Col><Col id=\"name\">문자</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"code\">111101</Col><Col id=\"name\">가</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"code\">111102</Col><Col id=\"name\">나</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"code\">111103</Col><Col id=\"name\">다</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"code\">111104</Col><Col id=\"name\">라</Col></Row><Row><Col id=\"lvl\">2</Col><Col id=\"code\">111105</Col><Col id=\"name\">마</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCal", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"fromDate\" type=\"STRING\" size=\"256\"/><Column id=\"toDate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staDateTitle","10","5","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("달력");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("divCalSample","10","staDateTitle:0",null,"680","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("달력 샘플");
            this.addChild(obj.name, obj);

            obj = new Static("staMonthCalT","0","0","340","50",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>- 월 달력</b>\r\n\r\n   <fc v=\'red\'>\'calendartype\'</fc> user property 추가 후 <fc v=\'red\'>\'Month\'</fc> 입력");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("top");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Calendar("calMonth","15","staMonthCalT:15","110","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.getSetter("calendartype").set("Month");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("staCustomCalT","0","calMonth:15","340","50",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("2");
            obj.set_text("<b v=\'true\'>- 커스텀 달력</b>\r\n\r\n   <fc v=\'red\'>\'calendartype\'</fc> user property 추가 후 <fc v=\'red\'>\'Day\'</fc> 입력");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("top");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Calendar("calDay","15","staCustomCalT:15","110","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("3");
            obj.getSetter("calendartype").set("Day");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Button("btnCalSet","calDay:3","staCustomCalT:15","70","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("4");
            obj.set_text("날짜 세팅");
            obj.set_cssclass("btn_WF_basic01");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("staCalFromToT","0","calDay:15","470","195",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("5");
            obj.set_text("<b v=\'true\'>- Form~To</b>\r\n\r\n   <fc v=\'red\'>1. \'calendartype\'</fc> user property 추가 후 <fc v=\'red\'>\'fromto\'</fc> 입력\r\n   <fc v=\'red\'>2. \'fromcal\'</fc> user property 추가 후 <fc v=\'red\'>form 달력 컴포넌트 scope</fc> 입력\r\n     <fc v=\'red\'> \'tocal\'</fc> user property 추가 후 <fc v=\'red\'>to 달력 컴포넌트 scope</fc> 입력\r\n   <fc v=\'red\'>3.  \'seltype\'</fc> user property 추가 후 <fc v=\'red\'>미래일자 선택여부(true/false : 기본값 false)</fc> 입력\r\n\r\n* 시작일 달력 컴포넌트일 경우 종료일 달력 컴포넌트 (tocal) 추가\r\n    ex) tocal --> this.divCalendar.form.calTo\r\n   종료일 달력 컴포넌트일 경우 시작일 달력 컴포넌트(fromcal) 추가 \r\n   ex) fromcal --> this.divCalendar.form.calFrom\r\n   미래일자 기간으로 선택시 선택여부(seltype) 추가\r\n   ex) seltype --> true  ");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("top");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Calendar("calFrom","55","staCalFromToT:15","110","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("6");
            obj.getSetter("calendartype").set("fromto");
            obj.getSetter("tocal").set("this.divCalSample.form.calTo");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("Static00","165","staCalFromToT:15","15","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Calendar("calTo","Static00:0","staCalFromToT:15","110","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("7");
            obj.getSetter("calendartype").set("fromto");
            obj.getSetter("fromcal").set("this.divCalSample.form.calFrom");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Calendar("calFromAfter","55","calFrom:15","110","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("8");
            obj.getSetter("calendartype").set("fromto");
            obj.getSetter("tocal").set("this.divCalSample.form.calToAfter");
            obj.getSetter("seltype").set("true");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("Static00_00","calFromAfter:0","calTo:15","15","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Calendar("calToAfter","Static00_00:0","calTo:15","110","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("9");
            obj.getSetter("calendartype").set("fromto");
            obj.getSetter("fromcal").set("this.divCalSample.form.calFromAfter");
            obj.getSetter("seltype").set("true");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("staBeforeT","15","staCalFromToT:15","40","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("13");
            obj.set_text("과거");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("staAfterT","15","staBeforeT:15","40","25",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("12");
            obj.set_text("미래");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("staGridCalT","0","calFromAfter:15","450","80",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("14");
            obj.set_text("<b v=\'true\'>- 그리드 달력 사용</b>\r\n\r\n   <fc v=\'red\'>1. \'calendarpopuptype\' : \'none\'</fc>\r\n   <fc v=\'red\'>2. \'calendardateformat\' : 월, 일에 맞게 format세팅 (yyyy-MM, yyyy-MM-dd)</fc>\r\n   <fc v=\'red\'>3. cell click이벤트등 에서 ExtendComponent (그리드메소드) 호출</fc>");
            obj.set_usedecorate("true");
            obj.set_verticalAlign("top");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Grid("grdCal","15","staGridCalT:15","375","70",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("15");
            obj.set_binddataset("dsCal");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"month\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"fromDate\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"toDate\" autosizerow=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:month\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM\" calendarautoselect=\"true\" calendarpopuptype=\"none\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"bind:fromDate\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" calendarpopuptype=\"none\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:toDate\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\" calendarpopuptype=\"none\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("staGridCalInfoT","446","staGridCalT:-34","540","130",null,null,null,null,null,null,this.divCalSample.form);
            obj.set_taborder("16");
            obj.set_text(" * TakeGridComp : 그리드용 Take component\r\n * @param   {Object} pThis     현재폼\r\n * @param   {Object} objGrid   그리드\r\n * @param   {String} sCompType 컴포넌트 타입      --> calendar : 달력컴포넌트\r\n * @param   {String} sGubun    컴포넌트 세부 구분 --> month : 월력, fromto : 기간달력\r\n * @param   {Object} objParam  파라메터                --> row, cell [fromto일 경우 fromcol, tocol  추가], seltype\r\n * @example this.Grid00.TakeGridComp(this, obj, \"calendar\", \"month\", {row:e.row, cell:e.cell});");
            this.divCalSample.addChild(obj.name, obj);

            obj = new Static("staComboTitle","10","divCalSample:15","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("콤보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("divCboSample","10","staComboTitle:15",null,"315","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("콤보 샘플");
            this.addChild(obj.name, obj);

            obj = new Static("staComboT","0","0","110","25",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("3");
            obj.set_text("<b v=\'true\'>- 일반 콤보</b>");
            obj.set_usedecorate("true");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Combo("cmbCombo","15","staComboT:15","160","25",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCode01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Static("staMultiComboT","0","cmbCombo:15","440","60",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'>- 멀티 콤보</b>\r\n\r\n   <fc v=\'red\'>\'multicombo\'</fc> user property 추가 후 <fc v=\'red\'>\'true\'</fc> 입력");
            obj.set_usedecorate("true");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Combo("cmbMultiCombo","15","staMultiComboT:15","160","25",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("1");
            obj.set_type("search");
            obj.set_innerdataset("dsCode01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.getSetter("multicombo").set("true");
            obj.set_text("");
            obj.set_index("-1");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Button("btnGetCode","cmbMultiCombo:3","staMultiComboT:15","130","25",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("2");
            obj.set_text("멀티콤보값 가져오기");
            obj.set_cssclass("btn_WF_basic01");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Button("btnSetting","btnGetCode:3","staMultiComboT:15","130","25",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("5");
            obj.set_text("멀티콤보값 세팅");
            obj.set_cssclass("btn_WF_basic01");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Combo("cmbTreeCombo","15","270","160","25",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTreeCombo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.getSetter("treecombo").set("true");
            obj.getSetter("treelevel").set("");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Button("btnTreeGet","cmbTreeCombo:3","270","130","25",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("8");
            obj.set_text("트리콤보값 가져오기");
            obj.set_cssclass("btn_WF_basic01");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Button("btnTreeSet","btnTreeGet:3","270","130","25",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("7");
            obj.set_text("트리콤보값 세팅");
            obj.set_cssclass("btn_WF_basic01");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Static("staTreeComboT","0","btnGetCode:15","440","60",null,null,null,null,null,null,this.divCboSample.form);
            obj.set_taborder("9");
            obj.set_text("<b v=\'true\'>- 멀티 콤보</b>\r\n\r\n   <fc v=\'red\'>\'multicombo\'</fc> user property 추가 후 <fc v=\'red\'>\'true\'</fc> 입력");
            obj.set_usedecorate("true");
            this.divCboSample.addChild(obj.name, obj);

            obj = new Static("staHelpTitle","10","divCboSample:15","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static 도움말");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("DivHelpSample","10","staHelpTitle:15",null,"120","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("도움말 샘플");
            this.addChild(obj.name, obj);

            obj = new Static("staCombo00","0","0","440","20",null,null,null,null,null,null,this.DivHelpSample.form);
            obj.set_taborder("1");
            obj.set_text("- <fc v=\'red\'>\'help\'</fc> user property 추가 후 <fc v=\'red\'>안내할 도움말</fc> 입력");
            obj.set_usedecorate("true");
            this.DivHelpSample.addChild(obj.name, obj);

            obj = new Static("Static00","15","staCombo00:15","120","25",null,null,null,null,null,null,this.DivHelpSample.form);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.getSetter("help").set("도움말 입니다.");
            this.DivHelpSample.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCalSample.form
            obj = new Layout("default","",0,0,this.divCalSample.form,function(p){});
            this.divCalSample.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCboSample.form
            obj = new Layout("default","",0,0,this.divCboSample.form,function(p){});
            this.divCboSample.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivHelpSample.form
            obj = new Layout("default","",0,0,this.DivHelpSample.form,function(p){});
            this.DivHelpSample.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,1199,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpTakeComComp.xfdl", function() {
        this.smpTakeComComp_onload = function(obj,e)
        {
        	if (take.formOnLoad(this))
            {

        	};
        };

        /*-----------------------------------달력 샘플 시작-----------------------------------*/
        //날짜세팅 버튼 클릭 이벤트
        this.divCalSample_btnCalSet_onclick = function(obj,e)
        {
        	this.calDay.set_value("20200101");
        };

        //과거 from 달력 변경 이벤트
        this.divCalSample_calFrom_onchanged = function(obj,e)
        {
        	trace("///////////////////////////////////");
            trace("divCalendar_calFrom_onchanged event");
            trace("///////////////////////////////////");
        	trace("prevalue --> " + e.prevalue);
            trace("postvalue --> " + e.postvalue);
            trace("///////////////////////////////////");
        };

        //과거 to 달력 변경 이벤트
        this.divCalSample_calTo_onchanged = function(obj,e)
        {
        	trace("///////////////////////////////////");
            trace("divCalendar_calTo_onchanged event");
            trace("///////////////////////////////////");
        	trace("prevalue --> " + e.prevalue);
            trace("postvalue --> " + e.postvalue);
            trace("///////////////////////////////////");
        };

        //미래 from 달력 변경 이벤트
        this.divCalSample_calFromAfter_onchanged = function(obj,e)
        {
        	trace("///////////////////////////////////");
            trace("divCalendar_calFrom_onchanged event");
            trace("///////////////////////////////////");
        	trace("prevalue --> " + e.prevalue);
            trace("postvalue --> " + e.postvalue);
            trace("///////////////////////////////////");
        };

        //미래 to 달력 변경 이벤트
        this.divCalSample_calToAfter_onchanged = function(obj,e)
        {
        	trace("///////////////////////////////////");
            trace("divCalendar_calTo_onchanged event");
            trace("///////////////////////////////////");
        	trace("prevalue --> " + e.prevalue);
            trace("postvalue --> " + e.postvalue);
            trace("///////////////////////////////////");
        };

        //그리드 달력 셀 클릭 이벤트
        this.divCalSample_grdCal_oncellclick = function(obj,e)
        {
        	if ( e.clickitem=="control")
            {
                var sType = obj.getCellProperty("body", e.cell, "displaytype");

                //달력 컴포넌트여부
                if(sType.indexOf("calendar") == -1 && sType.indexOf("date") == -1)
                {
                    return;
                } else {
                    sCompType = "calendar";
                    if (e.cell==0)
                    {
                        sGubun = "month";
                        objParam = {row:e.row, cell:e.cell};
                    } else if (e.cell==1 || e.cell==2) {
                        sGubun = "fromto";
                        objParam = {row:e.row, cell:e.cell, fromcol:"fromDate",tocol:"toDate", seltype:true};
                    } else {
                        return;
                    }

                    obj.TakeGridComp(this, obj, sCompType, sGubun, objParam);
                }
            }
        };
        /*-----------------------------------달력 샘플 끝-----------------------------------*/

        /*-----------------------------------콤보 샘플 시작-----------------------------------*/
        //멀티콤보값 가져오기 버튼 클릭 이벤트
        this.divCboSample_btnGetCode_onclick = function(obj,e)
        {
        	alert("text --> " + this.divCboSample.form.cmbMultiCombo.text +" / value --> " + this.divCboSample.form.cmbMultiCombo.multivalue);
        };

        //멀티콤보 아이템 변경 후 이벤트
        this.divCboSample_cmbMultiCombo_onitemchanged = function(obj,e)
        {
        	var sTxt =  "prevalue --> " + e.prevalue + " / postvalue --> " + e.postvalue +"\n";
                sTxt += "pretext --> " + e.pretext + " / posttext --> " + e.posttext;

            trace("divCboSample_Combo00_onitemchanged\n" + sTxt);
        };

        //멀티콤보 값 세팅 버튼 클릭 이벤트
        this.divCboSample_btnSetting_onclick = function(obj,e)
        {
        	this.divCboSample.form.cmbMultiCombo.set_Multivalue("01,02,03");
        };

        //트리콤보 값 가져오기
        this.divCboSample_btnTreeGet_onclick = function(obj,e)
        {
        	this.alert("text --> " + this.divCboSample.form.cmbTreeCombo.text +" / value --> " + this.divCboSample.form.cmbTreeCombo.value + " / treevalue --> " + this.divCboSample.form.cmbTreeCombo.treevalue);
        };

        //트리콤보 아이템 변경 후 이벤트
        this.divCboSample_cmbTreeCombo_onitemchanged = function(obj,e)
        {
        	this.alert("text --> " + e.posttext + " / value --> " + e.postvalue );
        };

        //트리콤보 값 세팅
        this.divCboSample_btnTreeSet_onclick = function(obj,e)
        {
        	this.divCboSample.form.cmbTreeCombo.set_value("000002");
            this.divCboSample.form.cmbTreeCombo.set_treevalue("000002");
        };
        /*-----------------------------------콤보 샘플 끝-----------------------------------*/













        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpTakeComComp_onload,this);
            this.divCalSample.form.btnCalSet.addEventHandler("onclick",this.divCalSample_btnCalSet_onclick,this);
            this.divCalSample.form.calFrom.addEventHandler("onchanged",this.divCalSample_calFrom_onchanged,this);
            this.divCalSample.form.calTo.addEventHandler("onchanged",this.divCalSample_calTo_onchanged,this);
            this.divCalSample.form.calFromAfter.addEventHandler("onchanged",this.divCalSample_calFromAfter_onchanged,this);
            this.divCalSample.form.calToAfter.addEventHandler("onchanged",this.divCalSample_calToAfter_onchanged,this);
            this.divCalSample.form.grdCal.addEventHandler("oncellclick",this.divCalSample_grdCal_oncellclick,this);
            this.divCboSample.form.cmbMultiCombo.addEventHandler("onitemchanged",this.divCboSample_cmbMultiCombo_onitemchanged,this);
            this.divCboSample.form.btnGetCode.addEventHandler("onclick",this.divCboSample_btnGetCode_onclick,this);
            this.divCboSample.form.btnSetting.addEventHandler("onclick",this.divCboSample_btnSetting_onclick,this);
            this.divCboSample.form.cmbTreeCombo.addEventHandler("onitemchanged",this.divCboSample_cmbTreeCombo_onitemchanged,this);
            this.divCboSample.form.btnTreeGet.addEventHandler("onclick",this.divCboSample_btnTreeGet_onclick,this);
            this.divCboSample.form.btnTreeSet.addEventHandler("onclick",this.divCboSample_btnTreeSet_onclick,this);
        };
        this.loadIncludeScript("smpTakeComComp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
