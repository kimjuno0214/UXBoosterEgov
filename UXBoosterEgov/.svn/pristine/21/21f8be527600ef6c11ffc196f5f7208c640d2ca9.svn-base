(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comCalMonth");
            this.set_titletext("월 달력 Pop");
            this.set_scrollbartype("none none");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,185);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","0","35",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_calBox02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_calBox01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYyyy","25","0",null,"35","25",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_value("9999");
            obj.set_cssclass("ed_WF_calEdit");
            obj.set_text("9999");
            this.addChild(obj.name, obj);

            obj = new Button("btnBefore","0","0","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_calPrev");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"0","35","35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_calNext");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","10","45","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","btn01:5","45","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","btn02:5","45","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","btn03:5","45","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","10","btn01:5","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","btn05:5","btn02:5","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("6월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","btn06:5","btn03:5","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn08","btn07:5","btn04:5","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","10","btn05:5","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","btn09:5","btn06:5","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","btn10:5","btn07:5","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("11월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","btn11:5","btn08:5","20%","21.62%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("12월");
            obj.getSetter("sData").set("");
            obj.set_cssclass("btn_WF_calMonth");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,185,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCalMonth.xfdl", function() {
        this.fv_sYyyy = null;
        this.fv_sMm = null;
        this.fv_objComp = null;
        this.fv_sPreVal = null;

        this.comCalMonth_onload = function(obj,e)
        {
            var sYyyyMm, sBtnId;
            var arrYyyyMm, arrMonths;
            var objBtn, objLocalInfo;

        	//20200602 정해원 locale에 따른 다국어처리
        	objLocalInfo = nexacro.Locale.getLocaleInfo(take.nvl(nexacro.getApplication().av_sLangCd,"ko_KR"));

        	if(!take.isEmpty(objLocalInfo))
            {
        		arrMonths = objLocalInfo.month_names_narrow;

        		for(keys in arrMonths)
                {
        			sBtnId = (parseInt(keys)+1) + "";
        			sBtnId = sBtnId.padLeft(2,"0");

        			this["btn"+sBtnId].set_text(arrMonths[keys]);
        		}

                sBtnId = "";
        	}

            this.fv_objComp = take.nvl(this.parent.objComp, "");

            sYyyyMm = nexacro.trim(take.nvl(this.parent.data, "-"));

            if (sYyyyMm.length<=1)
            {
                this.fv_sYyyy = this.fn_GetDate("yyyy");
                this.fv_sMm = this.fn_GetDate("mm");
                this.fv_sPreVal = "";
            } else {
                if (sYyyyMm.indexOf("-")>=0)
                {
                    arrYyyyMm = sYyyyMm.split("-");

                    this.fv_sYyyy = arrYyyyMm[0];
                    this.fv_sMm = arrYyyyMm[1];
                } else {
                    this.fv_sYyyy = sYyyyMm.substr(0,4);
                    this.fv_sMm = sYyyyMm.substr(4);
                }

                this.fv_sPreVal = this.fv_sYyyy + this.fv_sMm;
            }

            this.edtYyyy.set_value(this.fv_sYyyy);

            sBtnId = "btn" + this.fv_sMm;
            objBtn = this.components[sBtnId];

            objBtn.set_background("#005f96");
            objBtn.set_color("#ffffff");

            //this.fnSetValue(false);
        };

        this.btnYear_onclick = function(obj,e)
        {
            var sGbn;
            var nYyyy;

            sGbn = obj.name.substr(3);
            nYyyy = nexacro.toNumber(this.fv_sYyyy);

        	if (sGbn=="Before")
            {
                nYyyy--;
            } else {
                nYyyy++;
            }

            this.fv_sYyyy = (nYyyy + "").padLeft(4, "0");
            this.edtYyyy.set_value(this.fv_sYyyy);

            //this.fnSetValue();
        };

        this.btnMonth_onclick = function(obj,e)
        {
            var sBtnId;
            //var objBtn;

            this.fv_sMm = obj.name.substr(3);

            //sBtnId = "btn" + this.fv_sMm;
            //objBtn = this.components[sBtnId];

            //objBtn.set_background("");
            //objBtn.set_cssclass("");
            obj.set_background("");
            obj.set_background("#005f96");
            obj.set_color("#ffffff");
            //obj.set_cssclass("");

            this.fnSetValue();

            //선택되지 않은 버튼 초기화
            //this.fnInitStyle(obj)

        };

        this.fnInitStyle = function(objComp)
        {
            var objBtn;
            var sBtnId;

            for (var i=1; i<=12; i++)
            {
                sBtnId = "btn" + i.toString().padLeft(2,"0");

                if (objComp.name!=sBtnId)
                {
                    objBtn = this.components[sBtnId];
                    objBtn.set_background("");
                    objBtn.set_color("");
                }
            }
        }


        this.fnSetValue = function(bClose)
        {
            var objGrid, objDs, objParam;
            var sColNm, sPreVal, sRtnVal;

            bClose = nexacro._nvl(bClose, true);

            this.fv_sYyyy = this.edtYyyy.value;

            if ( take.CompTypeName(this.fv_objComp)=="Grid")
            {
                objGrid = this.fv_objComp;
                objDs = this.parent.objDataset;
                objParam = this.parent.objParam;

                sColNm = take.getBindColName(objGrid, objParam.cell);
                objDs.setColumn(objParam.row, sColNm, this.fv_sYyyy+this.fv_sMm);
            } else {
                sRtnVal = this.fv_sYyyy+this.fv_sMm;

                this.fv_objComp.set_value(sRtnVal);

                if (take.nvl(this.fv_objComp.onchanged,"")!="")
                {
                    var objEvt = new nexacro.ChangedEventInfo(this.fv_objComp, "onchanged", this.fv_sPreVal, this.fv_sPreVal, sRtnVal, sRtnVal);
                    this.fv_objComp.onchanged._fireEvent(this.fv_objComp, objEvt);
                }
            }

            if (bClose)
            {
        	  this.parent.closePopup();
           }
        };

        /**
         * @class 현재일자를 구한다. <br>
         * @param {String} [sFormat] - yyyymmdd/null : 일자, yyyymm : 년월, mmdd : 월일, yyyy : 년, mm : 월, dd : 일
         * @return {String} 8자리 날짜(YYYYMMMDD)문자열
         */
        this.fn_GetDate = function(sFormat)
        {
            if (nexacro._nvl(sFormat, "")=="") sFormat = "yyyymmdd";

        	var d = new Date();

        	var sYyyy, sMm, sDd;

        	sYyyy = d.getFullYear();

            if (sFormat=="yyyy") return sYyyy;

            sMm = ((d.getMonth() + 1) + "").padLeft(2, '0');

            if (sFormat=="mm") return sMm;
            if (sFormat=="yyyymm") return sYyyy + sMm;

            sDd = (d.getDate() + "").padLeft(2, '0');

            if (sFormat=="dd") return sDd;
            if (sFormat=="mmdd") return sMm + sDd;

        	return sYyyy + sMm + sDd;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comCalMonth_onload,this);
            this.addEventHandler("onclose",this.comCalMonth_onclose,this);
            this.btnBefore.addEventHandler("onclick",this.btnYear_onclick,this);
            this.btnNext.addEventHandler("onclick",this.btnYear_onclick,this);
            this.btn01.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn02.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn03.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn04.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn05.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn06.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn07.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn08.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn09.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn10.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn11.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.btn12.addEventHandler("onclick",this.btnMonth_onclick,this);
        };
        this.loadIncludeScript("comCalMonth.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
