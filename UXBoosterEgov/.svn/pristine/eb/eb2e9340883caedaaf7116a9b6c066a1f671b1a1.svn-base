(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comCalCustom");
            this.set_titletext("기간 달력");
            this.set_scrollbartype("none none");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,302);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calFDay","0","77","50%",null,null,"25",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Button("btnToday","0","0","24.50%","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("오늘");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnOne","btnToday:1","0","24.50%","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("어제/오늘");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnWeek","btnOne:1","0","24.50%","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1주일(7일)");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnMonth","btnWeek:1","0",null,"25","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1개월");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("stFrom","0","52","50%","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시작일");
            this.addChild(obj.name, obj);

            obj = new Static("stFrom00","stFrom:00","52","50%","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("종료일");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTDay","calFDay:00","77","50%",null,null,"25",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Button("btnThreeMonth","0","26","24.50%","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("3개월");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSixMonth","99","26","24.50%","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("6개월");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnNineMonth","198","26","24.50%","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9개월");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnYear","297","26",null,"25","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("12개월");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","203",null,"24.50%","25",null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","302",null,"24.50%","25",null,"0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("취소(닫기)");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Div("divMsgBg","500","0","400","300",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.divMsgBg.form);
            obj.set_taborder("0");
            obj.set_background("#000000");
            obj.set_opacity("0.8");
            this.divMsgBg.addChild(obj.name, obj);

            obj = new Div("divMsg","50","89","300","122",null,null,null,null,null,null,this.divMsgBg.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #032e52");
            obj.set_borderRadius("5px");
            this.divMsgBg.addChild(obj.name, obj);

            obj = new Static("staMsg","83","10",null,"51","22",null,null,null,null,null,this.divMsgBg.form.divMsg.form);
            obj.set_taborder("0");
            obj.set_text("메세지 입니다.");
            this.divMsgBg.form.divMsg.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"81","47","25","124",null,null,null,null,null,this.divMsgBg.form.divMsg.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divMsgBg.form.divMsg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMsgBg.form.divMsg.form
            obj = new Layout("default","",0,0,this.divMsgBg.form.divMsg.form,function(p){});
            this.divMsgBg.form.divMsg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMsgBg.form
            obj = new Layout("default","",0,0,this.divMsgBg.form,function(p){});
            this.divMsgBg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,302,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCalDayFT.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    common
        *  @FileName    comCalDay.xfdl
        *  @Creator     고영민
        *  @CreateDate  2021.01.24
        *  @Version     1.0
        *  @Description    기간커스텀 달력
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2021.01.24      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objComp      = null;  //그리드 컴포넌트    : 그리드형일 경우 사용
        this.fv_objDs        = null;  //데이터셋 컴포넌트  : 그리드형일 경우 사용
        this.fv_objParam     = null;  //파라메터            : 그리드형일 경우 사용
        this.fv_objFComp     = null;  //시작일 달력 컴포넌트
        this.fv_objTComp     = null;  //종료일 달력 컴포넌트
        this.fv_bPrev        = false; //버튼 클릭시 날짜를 미래로 할지 여부

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        //폼 onload 이벤트
        this.comCalCustom_onload = function(obj,e)
        {
            var sFDate, sTDate, sToDay;

            sToDay = take.getDate("date").date;

            this.fv_objComp = this.parent.objComp;

            if ( take.CompTypeName(this.fv_objComp)=="Grid")
            {
                this.fv_objDs = take.nvl(this.parent.objDs,this.fv_objComp.getBindDataset());
                this.fv_objParam = take.nvl(this.parent.objParam, "");
                this.fv_objFComp = take.nvl(this.fv_objParam.fromcol, "");
                this.fv_objTComp = take.nvl(this.fv_objParam.tocol, "");
                this.fv_bPrev    = take.nvl(this.fv_objParam.seltype, false);

                sFDate = take.nvl(this.fv_objDs.getColumn(this.fv_objParam.row,this.fv_objFComp), sToDay);
                sTDate = take.nvl(this.fv_objDs.getColumn(this.fv_objParam.row,this.fv_objTComp), sToDay);

                this.calFDay.set_value(sFDate);
                this.calTDay.set_value(sTDate);
            } else {
                this.fv_objFComp = take.nvl(this.parent.objFComp, "");
                this.fv_objTComp = take.nvl(this.parent.objTComp, "");
                this.fv_bPrev    = take.nvl(this.parent.seltype, false);

                sFDate = take.nvl(this.fv_objFComp.value, sToDay);
                sTDate = take.nvl(this.fv_objTComp.value, sToDay);

                this.calFDay.set_value(sFDate);
                this.calTDay.set_value(sTDate);
            }
            //console.dir(this.calFDay);
        };

        // 상위 컴포넌트로 이벤즈 전파 중지
        this.comCalCustom_onclose = function(obj,e)
        {
        	e.stopPropagation();
        };

        /*********************************************************
         * 2 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //당일, 2일, 7일, 1개월, 3개월, 6개월, 9개월, 12개월 버튼 클릭 이벤트
        this.btnDay_onclick = function(obj,e)
        {
        	var sBtnId;
            var objDay

            sBtnId = obj.name.substr(3);

            objDay = new Date();

            if (this.fv_bPrev==false)
            {
                this.calTDay.set_value(take.toDateString(objDay,"yyyyMMdd"));
                sRtnDay = this.fnRtnDay(objDay, sBtnId);
                this.calFDay.set_value(sRtnDay);
            } else {
                this.calFDay.set_value(take.toDateString(objDay,"yyyyMMdd"));
                sRtnDay = this.fnRtnDay(objDay, sBtnId);
                this.calTDay.set_value(sRtnDay);
            }

            this.fnSetValue();
        };

        //확인 버튼 클릭 이벤트
        this.btnOk_onclick = function(obj,e)
        {
        	this.fnSetValue();
        };

        //취소(닫기) 버튼 클릭 이벤트
        this.btnClose_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        //시작일 변경전 이벤트
        this.calFDay_canchange = function(obj,e)
        {
        	return this.fnValidate(e.postvalue, this.calTDay.value);
        };

        //종료일 변경전 이벤트
        this.calTDay_canchange = function(obj,e)
        {
        	return this.fnValidate(this.calFDay.value, e.postvalue);
        };

        //메세지 백그라운드 클릭 이벤트
        this.divMsgBg_staBg_onclick = function(obj,e)
        {
        	this.divMsgBg.set_visible(false);
        };

        //메세지 확인 버튼 클릭 이벤트
        this.divMsgBg_divMsg_btnOk_onclick = function(obj,e)
        {
        	this.divMsgBg.set_visible(false);
        };
        /*********************************************************
         * 3 사용자 FUNCTION 영역
         ********************************************************/
         /**
         * fnValidate : 날짜 유효성 체크
         * @param  {String}  sFDate 시작일
         * @param  {String}  sTDate 종료일
         * @param  {Boolean} true/false
         * @example this.fnValidate(sFDate, sTDate);
         */
        this.fnValidate = function(sFDate, sTDate)
        {
            if (this.fv_bPrev) //미래
            {
                if (nexacro.toNumber(sFDate) > nexacro.toNumber(sTDate))
                {
                    this.fnMessage("시작일이 종료일보다 큽니다.");
                    return false;
                }
            } else { //과거
                if (nexacro.toNumber(sFDate) < nexacro.toNumber(sTDate))
                {
                    this.fnMessage("종료일이 시작일보다 큽니다.");
                    return false;
                }
            }

            return true;
        };

         /**
         * fnMessage : 메세지
         * @param  {String}  sMsg  메세지
         * @param  N/A
         * @example this.fnMessage("메세지 입니다.");
         */
        this.fnMessage = function(sMsg)
        {
            var objDiv = this.divMsgBg;

            objDiv.move(0,0,null,null,0,0);
            objDiv.set_visible(true);
            objDiv.form.divMsg.form.staMsg.set_Text(sMsg);
        };

        /**
         * fnRtnDay : 날짜 계산
         * @param  {Object} objDay 문자형 인자
         * @param  {String} sGbn   숫자형 인자
         * @example this.fnRtnDay(objDay, sGbn);
         */
        this.fnRtnDay = function(objDay, sGbn)
        {
            var nPrev = this.fv_bPrev==true?1:-1;

            switch(sGbn) {
                case "Today":
                    //objDay = new Date();
                    break;
                case "One":
                    objDay.getAddDays(1*nPrev);
                    break;
                case "Week":
                    objDay.getAddDays(6*nPrev);
                    break;
                case "Month":
                    objDay.getAddMonths(1*nPrev);
                    objDay.getAddDays(-1*nPrev);
                    break;
                case "ThreeMonth":
                    objDay.getAddMonths(3*nPrev);
                    objDay.getAddDays(-1*nPrev);
                    break;
                case "SixMonth":
                    objDay.getAddMonths(6*nPrev);
                    objDay.getAddDays(-1*nPrev);
                    break;
                case "NineMonth":
                    objDay.getAddMonths(9*nPrev);
                    objDay.getAddDays(-1*nPrev);
                    break;
                case "Year":
                    objDay.getAddMonths(12*nPrev);
                    objDay.getAddDays(-1*nPrev);
                    break;
                default:
            }

            return take.toDateString(objDay,"yyyyMMdd");
        }

        /**
         * fnSetValue : 날짜 계산
         * @param  {Boolean} bClose 팝업 닫기 여부
         * @example this.fnSetValue(bClose);
         */
        this.fnSetValue = function(bClose)
        {
            var sFDate, sTDate;

            bClose = nexacro._nvl(bClose, true);

            sFDate = this.calFDay.value;
            sTDate = this.calTDay.value;

            if ( take.CompTypeName(this.fv_objComp)=="Grid")
            {
                this.fv_objDs.setColumn(this.fv_objParam.row,this.fv_objFComp,sFDate);
                this.fv_objDs.setColumn(this.fv_objParam.row,this.fv_objTComp,sTDate);

                trace("FromtoCalendar\n" +
                      "from : " + this.fv_objDs.name + "." + this.fv_objFComp+") return value --> " + sFDate + "\n" +
                      "to   : " + this.fv_objDs.name + "." + this.fv_objTComp+") return value --> " + sTDate);
            } else {
                sPreVal = this.fv_objFComp.value;

                this.fv_objFComp.set_value(sFDate);

                if (take.nvl(this.fv_objFComp.onchanged,"")!="")
                {
                    var objEvt = new nexacro.ChangedEventInfo(this.fv_objFComp, "onchanged", sPreVal, sPreVal, sFDate, sFDate);
                    this.fv_objFComp.onchanged._fireEvent(this.fv_objFComp, objEvt);
                }

                sPreVal = this.fv_objTComp.value;

                this.fv_objTComp.set_value(sTDate);

                if (take.nvl(this.fv_objTComp.onchanged,"")!="")
                {
                    var objEvt = new nexacro.ChangedEventInfo(this.fv_objTComp, "onchanged", sPreVal, sPreVal, sTDate, sTDate);
                    this.fv_objTComp.onchanged._fireEvent(this.fv_objTComp, objEvt);
                }

                trace("FromtoCalendar\n" +
                      "from : "+this.fv_objFComp.name+") return value --> " + sFDate + "\n" +
                      "to   : "+this.fv_objTComp.name+") return value --> " + sTDate);
            }
            if (bClose)
            {
                this.parent.closePopup();
            }
        };

        /*********************************************************
         * 4 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        // N/A



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comCalCustom_onload,this);
            this.addEventHandler("onclose",this.comCalCustom_onclose,this);
            this.calFDay.addEventHandler("canchange",this.calFDay_canchange,this);
            this.btnToday.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnOne.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnWeek.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnMonth.addEventHandler("onclick",this.btnDay_onclick,this);
            this.calTDay.addEventHandler("canchange",this.calTDay_canchange,this);
            this.btnThreeMonth.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnSixMonth.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnNineMonth.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnYear.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divMsgBg.form.staBg.addEventHandler("onclick",this.divMsgBg_staBg_onclick,this);
            this.divMsgBg.form.divMsg.form.btnOk.addEventHandler("onclick",this.divMsgBg_divMsg_btnOk_onclick,this);
        };
        this.loadIncludeScript("comCalDayFT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
