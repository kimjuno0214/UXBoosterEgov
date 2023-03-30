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
            this.set_titletext("커스텀 달력 Pop");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(199,223);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calDay","0","0",null,null,"0","23",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new Button("btnToday","0",null,"24.62%","23",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("오늘");
            this.addChild(obj.name, obj);

            obj = new Button("btnYesterday","btnToday:1",null,"24.62%","23",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("어제");
            this.addChild(obj.name, obj);

            obj = new Button("btnWeek","btnYesterday:1",null,"24.62%","23",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1주일");
            this.addChild(obj.name, obj);

            obj = new Button("btnMonth","btnWeek:1",null,null,"23","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1개월");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",199,223,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCalCustom.xfdl", function() {
        this.fv_objComp = null;

        //폼 onload 이벤트
        this.comCalCustom_onload = function(obj,e)
        {
        	this.btnToday.set_text(take.getWord(this.parent, "MS00000107"));
        	this.btnYesterday.set_text(take.getWord(this.parent, "MS00000108"));
        	this.btnWeek.set_text(take.getWord(this.parent, "MS00000109"));
        	this.btnMonth.set_text(take.getWord(this.parent, "MS00000110"));

            this.fv_objComp = nexacro._nvl(this.parent.objComp, "");
            this.calDay.set_value(this.parent.data);
        };

        //오늘/어제/1주일/1개월 클릭 이벤트
        this.btnDay_onclick = function(obj,e)
        {
        	var sBtnId;
            var objDay = new Date();
            var nDay;

            sBtnId = obj.name.substr(3);

            switch(sBtnId) {
                case "Today":
                    break;
                case "Yesterday":
                    objDay.getAddDays(-1);
                    break;
                case "Week":
                    objDay.getAddDays(-7);
                    break;
                case "Month":
                    objDay.getAddMonths(-1);
                    break;
                default:
            }

            this.calDay.set_value( take.toDateString(objDay,"yyyyMMdd"));

            this.fnSetValue();
        };

        //날짜 변경 이벤트
        this.calDay_onchanged = function(obj,e)
        {
        	this.fnSetValue();
        };

        //값 세팅
        this.fnSetValue = function(bClose)
        {
            var sDate;

            bClose = nexacro._nvl(bClose, true);

            sDate = this.calDay.value;

            this.fv_objComp.set_value(sDate);

            trace("CustomCalendar("+this.fv_objComp.name+") return value --> " + sDate);

            if (bClose)
            {
        //       //별도 조건이 필요할 경우
        //       if(this.parent.parent.parent.parent.name == "SSCW3Q30" || this.parent.parent.parent.parent.name =="SSCW3Q20")
        //       {
        // 		 this.parent.parent.parent.parent.fnGetIrnCode();
        //       }
                this.parent.closePopup();
            }
        };


        /**
         * @class 현재일자를 구한다. <br>
         * @param {String} [sFormat] - yyyymmdd/null : 일자, yyyymm : 년월, mmdd : 월일, yyyy : 년, mm : 월, dd : 일
         * @return {String} 8자리 날짜(YYYYMMMDD)문자열
         */
        this.fnGetDate = function(objDay, sFormat)
        {
            var sYyyy, sMm, sDd;

            if (nexacro._nvl(sFormat, "")=="") sFormat = "yyyymmdd";

        	sYyyy = objDay.getFullYear();

            if (sFormat=="yyyy") return sYyyy;

            sMm = ((objDay.getMonth() + 1) + "").padLeft(2, '0');

            if (sFormat=="mm") return sMm;
            if (sFormat=="yyyymm") return sYyyy + sMm;

            sDd = (objDay.getDate() + "").padLeft(2, '0');

            if (sFormat=="dd") return sDd;
            if (sFormat=="mmdd") return sMm + sDd;

        	return sYyyy + sMm + sDd;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comCalCustom_onload,this);
            this.calDay.addEventHandler("onchanged",this.calDay_onchanged,this);
            this.btnToday.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnYesterday.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnWeek.addEventHandler("onclick",this.btnDay_onclick,this);
            this.btnMonth.addEventHandler("onclick",this.btnDay_onclick,this);
        };
        this.loadIncludeScript("comCalCustom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
