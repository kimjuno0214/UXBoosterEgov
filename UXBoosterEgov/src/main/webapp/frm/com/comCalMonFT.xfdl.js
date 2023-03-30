(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("월 기간달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(213,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("cal_FrYm","0","0","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.getSetter("chkData").set("");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_YM","0","25","378","281",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_cal");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","66","172","166",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #4d4d4d");
            obj.set_background("#ffffff");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Static("Static01","192","66","172","166",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("43");
            obj.set_border("1px solid #4d4d4d");
            obj.set_background("#ffffff");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Static("sta_FrYYYY","11","67","171","28",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("2");
            obj.set_text("9999");
            obj.set_cssclass("sta_cal_month");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Static("sta_ToYYYY","193","67","171","28",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("20");
            obj.set_text("9999");
            obj.set_cssclass("sta_cal_month");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_FrBefore","17","69","21","21",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_cal_prev");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_FrNext","159","69","21","21",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_cal_next");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr01","13","96","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("3");
            obj.set_text("01");
            obj.set_cssclass("btn_cal_01");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr02","55","96","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("4");
            obj.set_text("02");
            obj.set_cssclass("btn_cal_02");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr03","97","96","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("5");
            obj.set_text("03");
            obj.set_cssclass("btn_cal_03");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr04","139","96","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("6");
            obj.set_text("04");
            obj.set_cssclass("btn_cal_04");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr05","13","140","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("7");
            obj.set_text("05");
            obj.set_cssclass("btn_cal_05");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr06","55","140","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("8");
            obj.set_text("06");
            obj.set_cssclass("btn_cal_06");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr07","97","140","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("9");
            obj.set_text("07");
            obj.set_cssclass("btn_cal_07");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr08","139","140","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("10");
            obj.set_text("08");
            obj.set_cssclass("btn_cal_08");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr09","13","185","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("11");
            obj.set_text("09");
            obj.set_cssclass("btn_cal_09");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr10","55","185","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("btn_cal_10");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr11","97","185","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("13");
            obj.set_text("11");
            obj.set_cssclass("btn_cal_11");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Fr12","139","185","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("14");
            obj.set_text("12");
            obj.set_cssclass("btn_cal_12");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Ok","129","242","55","25",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("15");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_ok");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_Cancle","186","242","55","25",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_ok");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_ToBefore","199","69","21","21",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_cal_prev");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_ToNext","339","69","21","21",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_cal_next");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To01","195","97","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("21");
            obj.set_text("01");
            obj.set_cssclass("btn_cal_01");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To02","237","97","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("22");
            obj.set_text("02");
            obj.set_cssclass("btn_cal_02");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To03","279","97","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("23");
            obj.set_text("03");
            obj.set_cssclass("btn_cal_03");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To04","321","97","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("24");
            obj.set_text("04");
            obj.set_cssclass("btn_cal_04");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To05","195","141","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("25");
            obj.set_text("05");
            obj.set_cssclass("btn_cal_05");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To06","237","141","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("26");
            obj.set_text("06");
            obj.set_cssclass("btn_cal_06");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To07","279","141","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("27");
            obj.set_text("07");
            obj.set_cssclass("btn_cal_07");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To08","321","141","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("28");
            obj.set_text("08");
            obj.set_cssclass("btn_cal_08");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To09","195","186","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("29");
            obj.set_text("09");
            obj.set_cssclass("btn_cal_09");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To10","237","186","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("btn_cal_10");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To11","279","186","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("31");
            obj.set_text("11");
            obj.set_cssclass("btn_cal_11");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_To12","321","186","40","43",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("32");
            obj.set_text("12");
            obj.set_cssclass("btn_cal_12");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_PreYy","10","10","70","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("33");
            obj.set_text("전년");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_ToYy","10","34","70","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("34");
            obj.set_text("당년");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_ToMon","82","34","69","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("35");
            obj.set_text("당월");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_PreMon","82","10","69","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("36");
            obj.set_text("전월");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_FrHalf","153","10","70","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("37");
            obj.set_text("상반기");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_SeHalf","153","34","70","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("38");
            obj.set_text("하반기");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_TwoQuarter","225","34","68","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("39");
            obj.set_text("2/4분기");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_OneQuarter","225","10","68","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("40");
            obj.set_text("1/4분기");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_FourQuarter","295","34","68","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("41");
            obj.set_text("4/4분기");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Button("btn_TrheeQuarter","295","10","68","22",null,null,null,null,null,null,this.pdv_YM.form);
            obj.set_taborder("42");
            obj.set_text("3/4분기");
            this.pdv_YM.addChild(obj.name, obj);

            obj = new Static("Static00","102","1","8","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ToYm","113","0","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_popuptype("none");
            obj.getSetter("chkData").set("");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdv_YM.form
            obj = new Layout("default","",0,0,this.pdv_YM.form,function(p){});
            this.pdv_YM.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",213,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comCalMonFT.xfdl", function() {
        /******************************************************************************
        * Name     	: comCalMonFT.xfdl
        * Title    	: 월 기간달력
        * Desc     	:
        * 작성자	: hsi
        * 작성일	: 2018-04-17
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.04.17     	      hsi  	            	최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_YM = this.gfn_GetDate().substr(0, 6);
        this.fv_CalCallback;
        this.fv_Dbclick = "N";
        this.fv_PopYn = "N";
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /***************************************************************************
         * Even   : form_onload
         * Desc   : 초기화 영역
         ****************************************************************************/
        this.form_onload = function(obj,e)
        {

        };

        /***************************************************************************
         * Even   : comCalMon_ontimer
         * Desc   : ontimer 시간 함수
         ****************************************************************************/
        this.comCalMon_ontimer = function(obj,e)
        {
        	if(e.timerid== 0) {
        		this.fv_Dbclick = "N";
        		this.killTimer(0);
        	}
        };

        /***************************************************************************
         * Even   : fn_InitComp
         * Desc   : 날짜 컴포넌트 초기화
         ****************************************************************************/
        this.fn_InitComp = function(obj)
        {
        	if(obj.parent instanceof nexacro.ChildFrame) this.fv_PopYn = "Y";

        	// 바인딩 데이터셋 설정시 자동설정
        	if(!this.gfn_IsNull(this.parent.bindDataset)) {
        		var objDs = eval("obj." + this.parent.bindDataset);

        		if(this.gfn_IsNull(objDs) || this.gfn_IsNull(this.parent.bindFrCol) || this.gfn_IsNull(this.parent.bindToCol)) {
        			this.gfn_Alert("정확하지 않은 설정입니다.");
        			return false;
        		}

        		this.removeChild("FR_YM");
        		this.removeChild("TO_YM");

        		var objBindItem = new BindItem("FR_YM", "cal_FrYm", "value", objDs.name, this.parent.bindFrCol);
        		this.addChild("FR_YM", objBindItem);
        		objBindItem.bind();

        		objBindItem = new BindItem("TO_YM", "cal_ToYm", "value", objDs.name, this.parent.bindToCol);
        		this.addChild("TO_YM", objBindItem);
        		objBindItem.bind();
        	}

        	// 바인딩 콜백 설정시
        	if(!this.gfn_IsNull(this.parent.bindCallback)) this.fv_CalCallback = this.parent.bindCallback;

        	// readOnly 세팅
        	if(this.parent.calendarReadOnly) this.fn_SetEnable(false);

        	// 필수 세팅
        	if(!this.gfn_IsNull(this.parent.calendarRequired)) this.fn_SetRequired(true, this.parent.calendarRequired);

        	// 기초값 설정시
        	if(!this.gfn_IsNull(this.parent.calendarInitFrYm)) { /*
        		this.cal_FrYm.set_value(this.fv_YM);
        	} else { */
        		this.cal_FrYm.set_value(this.parent.calendarInitFrYm);
        	}

        	if(!this.gfn_IsNull(this.parent.calendarInitToYm)) { /*
        		this.cal_ToYm.set_value(this.fv_YM);
        	} else { */
        		this.cal_ToYm.set_value(this.parent.calendarInitToYm);
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /***************************************************************************
         * Even   : cal_ondropdown
         * Desc   : popDiv컴포넌트 띄우기
         ****************************************************************************/
        this.cal_ondropdown = function(obj,e)
        {
        	this.fv_YM = this.gfn_GetDate().substr(0, 6);
        	trace(this.fv_YM.substr(4, 2));
        	var sFrMon, sToMon, sForMon;

        	if (this.gfn_IsNull(this.cal_FrYm.value)) sFrMon = this.fv_YM.substr(4, 2);
        	else sFrMon = this.cal_FrYm.value.substr(4,2);

        	if (this.gfn_IsNull(this.cal_ToYm.value)) sToMon = this.fv_YM.substr(4, 2);
        	else sToMon = this.cal_ToYm.value.substr(4,2);

        	// 달력세팅
        	if (this.gfn_IsNull(this.cal_FrYm.value)) {
        		this.pdv_YM.form.sta_FrYYYY.set_text(this.fv_YM.substr(0, 4));
        		this.pdv_YM.form.sta_ToYYYY.set_text(this.fv_YM.substr(0, 4));
        	} else {
        		this.pdv_YM.form.sta_FrYYYY.set_text(this.cal_FrYm.value.substr(0, 4));
        		this.pdv_YM.form.sta_ToYYYY.set_text(this.cal_ToYm.value.substr(0, 4));
        	}

        	for(var i = 1; i < 13; i++) {
        		if(i < 10) sForMon = "0" + i;
        		else sForMon = i;

        		if(sForMon == sFrMon) eval("this.pdv_YM.form.btn_Fr" + sForMon).sData = "Y";
        		else eval("this.pdv_YM.form.btn_Fr" + sForMon).sData = "";
        	}

        	for(var i = 1; i < 13; i++) {
        		if(i < 10) sForMon = "0" + i;
        		else sForMon = i;

        		if(sForMon == sToMon) eval("this.pdv_YM.form.btn_To" + sForMon).sData = "Y";
        		else eval("this.pdv_YM.form.btn_To" + sForMon).sData = "";
        	}

        	var nTop = 24, nLeft = 0;

        	if(this.fv_PopYn == "N") {
        		// 상단 팝업
        		if ((system.clientToScreenY(this.cal_FrYm, this.getOwnerFrame().form.div_Work.getOffsetTop()) -
        			 system.clientToScreenY(this.getOwnerFrame().form.div_Work, 0) + this.pdv_YM.getOffsetHeight() - 40) > this.getOwnerFrame().form.div_Work.getOffsetHeight()) {
        			nTop = -1 * (this.pdv_YM.getOffsetHeight() + 1);
        		}

        		// 우측 정렬
        		if((this.getOwnerFrame().getOffsetWidth() + 280) < (system.clientToScreenX(this.cal_FrYm, this.getOwnerFrame().form.div_Work.getOffsetLeft()) +
        															this.pdv_YM.getOffsetWidth())) {
        			nLeft = -217;
        		}
        	} else {
        		// 상단 팝업
        		if ((system.clientToScreenY(this.cal_FrYm, this.getOwnerFrame().getOffsetTop()) -
        			 system.clientToScreenY(this.getOwnerFrame(), 0) + this.pdv_YM.getOffsetHeight() - 40) > this.getOwnerFrame().getOffsetHeight()) {
        			nTop = -1 * (this.pdv_YM.getOffsetHeight() + 1);
        		}

        		// 우측 정렬
        		if((this.getOwnerFrame().getOffsetWidth() + 280) < (system.clientToScreenX(this.cal_FrYm, this.getOwnerFrame().getOffsetLeft()) +
        															this.pdv_YM.getOffsetWidth())) {
        			nLeft = -217;
        		}
        	}

        	this.pdv_YM.trackPopupByComponent(this,nLeft,nTop);
        };

        /***************************************************************************
         * Even   : cal_onchanged
         * Desc   : 날짜 변경시.
         ****************************************************************************/
        this.cal_onchanged = function(obj,e)
        {
        	if(!this.gfn_IsNull(obj.value)) {
        		if(!this.gfn_IsYM(obj.value.substr(0, 6))) {
        			this.gfn_Alert("잘못된 날짜 형식입니다.");
        			obj.set_value(this.fv_YM);
        		}
        	}

        	// 콜백지정시 콜백함수 실행.
        	var oRtn = {};

        	oRtn.frYm = this.cal_FrYm.value.substr(0, 6);
        	oRtn.toYm = this.cal_ToYm.value.substr(0, 6);

         	try
        	{
         		//eval("this.getOwnerFrame().form.div_Work.form." + this.fv_CalCallback + "(oRtn)");
        		if (this.fv_PopYn=="Y")
        		{
        			var arrPopFrame = nexacro.getPopupFrames();
        			eval("arrPopFrame['"+this.getOwnerFrame().name+"'].form." + this.fv_CalCallback + "(oRtn)");

        		} else {
        			console.dir(eval('this.getOwnerFrame().form.div_Work.form'));
        			trace("fv_CalCallback --> " + this.fv_CalCallback);
        			eval("this.getOwnerFrame().form.div_Work.form." + this.fv_CalCallback + "(oRtn)");
        		}
         	} catch(e) {
        		trace("error --> " + e);
        		this.lookupFunc(this.fv_CalCallback).call(oRtn);
         	}

        };

        /***************************************************************************
         * Even   : btn_onclick
         * Desc   : 월 버튼 클릭시.
         ****************************************************************************/
        this.btn_onclick = function(obj,e)
        {
        	if(obj.name == "btn_FrBefore") {	// from <
        		this.pdv_YM.form.sta_FrYYYY.set_text(nexacro.toNumber(this.pdv_YM.form.sta_FrYYYY.text) - 1);
        	} else if(obj.name == "btn_ToBefore") {	// to <
        		this.pdv_YM.form.sta_ToYYYY.set_text(nexacro.toNumber(this.pdv_YM.form.sta_ToYYYY.text) - 1);
        	} else if(obj.name == "btn_FrNext") {	// from >
        		this.pdv_YM.form.sta_FrYYYY.set_text(nexacro.toNumber(this.pdv_YM.form.sta_FrYYYY.text) + 1);
        	} else if(obj.name == "btn_ToNext") {	// to >
        		this.pdv_YM.form.sta_ToYYYY.set_text(nexacro.toNumber(this.pdv_YM.form.sta_ToYYYY.text) + 1);
        	} else if(obj.name == "btn_PreMon") {			// 전월
        		this.fn_SetRtnVal(this.gfn_AddMonth(this.fv_YM + "01", -1), this.gfn_AddMonth(this.fv_YM + "01", -1));
        	} else if(obj.name == "btn_ToMon") {			// 당월
        		this.fn_SetRtnVal(this.fv_YM, this.fv_YM);
        	} else if(obj.name == "btn_PreYy") {			// 전년
        		this.fn_SetRtnVal(this.gfn_AddMonth(this.fv_YM + "01", -12).substr(0, 4) + "01", this.gfn_AddMonth(this.fv_YM + "01", -12).substr(0, 4) + "12");
        	} else if(obj.name == "btn_ToYy") {				// 당년
        		this.fn_SetRtnVal(this.fv_YM.substr(0, 4) + "01", this.fv_YM.substr(0, 4) + "12");
        	} else if(obj.name == "btn_FrHalf") {			// 상반기
        		this.fn_SetRtnVal(this.fv_YM.substr(0, 4) + "01", this.fv_YM.substr(0, 4) + "06");
        	} else if(obj.name == "btn_SeHalf") {			// 하반기
        		this.fn_SetRtnVal(this.fv_YM.substr(0, 4) + "07", this.fv_YM.substr(0, 4) + "12");
        	} else if(obj.name == "btn_OneQuarter") {		// 1분기
        		this.fn_SetRtnVal(this.fv_YM.substr(0, 4) + "01", this.fv_YM.substr(0, 4) + "03");
        	} else if(obj.name == "btn_TwoQuarter") {		// 2분기
        		this.fn_SetRtnVal(this.fv_YM.substr(0, 4) + "04", this.fv_YM.substr(0, 4) + "06");
        	} else if(obj.name == "btn_TrheeQuarter") {		// 3분기
        		this.fn_SetRtnVal(this.fv_YM.substr(0, 4) + "07", this.fv_YM.substr(0, 4) + "09");
        	} else if(obj.name == "btn_FourQuarter") {		// 4분기
        		this.fn_SetRtnVal(this.fv_YM.substr(0, 4) + "10", this.fv_YM.substr(0, 4) + "12");
        	} else if(obj.name.indexOf("btn_Fr") > -1) {
        		var sForMon, sMon = obj.name.replace("btn_Fr", "");

        		// 달력세팅
        		for(var i = 1; i < 13; i++) {
        			if(i < 10) sForMon = "0" + i;
        			else sForMon = i;

        			if(sForMon == sMon) eval("this.pdv_YM.form.btn_Fr" + sForMon).sData = "Y";
        			else eval("this.pdv_YM.form.btn_Fr" + sForMon).sData = "";
        		}
        		//this.fn_SetRtnVal(this.pdv_YM.form.sta_YYYY.text + sMon);
        	} else if(obj.name.indexOf("btn_To") > -1) {
        		var sForMon, sMon = obj.name.replace("btn_To", "");

        		// 달력세팅
        		for(var i = 1; i < 13; i++) {
        			if(i < 10) sForMon = "0" + i;
        			else sForMon = i;

        			if(sForMon == sMon) eval("this.pdv_YM.form.btn_To" + sForMon).sData = "Y";
        			else eval("this.pdv_YM.form.btn_To" + sForMon).sData = "";
        		}
        		//this.fn_SetRtnVal(this.pdv_YM.form.sta_YYYY.text + sMon);
        	}
        };

        /***************************************************************************
         * Even   : pdv_Ym_btn_Ok_onclick
         * Desc   : 확인
         ****************************************************************************/
        this.pdv_Ym_btn_Ok_onclick = function(obj,e)
        {
        	var sForMon, sFrMon, sToMon, sBtnId;

        	// 달력세팅
        	for(var k = 0; k < 2; k++) {
        		if(k == 0) sBtnId = "this.pdv_YM.form.btn_Fr";
        		else sBtnId = "this.pdv_YM.form.btn_To";

        		for(var i = 1; i < 13; i++) {
        			if(i < 10) sForMon = "0" + i;
        			else sForMon = i;

        			if(eval(sBtnId + sForMon).sData == "Y") {
        				if(k == 0) sFrMon = sForMon;
        				else sToMon = sForMon;

        				break;
        			}
        		}
        	}

        	this.fn_SetRtnVal(this.pdv_YM.form.sta_FrYYYY.text + sFrMon, this.pdv_YM.form.sta_ToYYYY.text + sToMon);
        };

        /***************************************************************************
         * Even   : pdv_Ym_btn_Cancle_onclick
         * Desc   : 취소
         ****************************************************************************/
        this.pdv_Ym_btn_Cancle_onclick = function(obj,e)
        {
        	this.pdv_YM.closePopup();
        };

        /***************************************************************************
         * Even   : pdv_YM_sta_YYYY_onclick
         * Desc   : 년도 당년으로 변경.
         ****************************************************************************/
        this.pdv_YM_sta_YYYY_onclick = function(obj,e)
        {
        	if(this.fv_Dbclick == "Y") {
        		this.fv_Dbclick = "N";

        		obj.set_text(this.fv_YM.substr(0, 4));
        	} else {
        		this.fv_Dbclick = "Y";

        		this.setTimer( 0, 1000 );
        	}
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /***************************************************************************
         * Even   : fn_SetVal
         * Desc   : 받은값 세팅
         ****************************************************************************/
        this.fn_SetVal = function(frYm, toym)
        {
        	if(!this.gfn_IsNull(frYm)) {
        		if(this.gfn_IsYM(frYm.replace("-", ""))) {
        			this.cal_FrYm.set_value(frYm);
        		} else {
        			this.gfn_Alert("날짜 형식이 아닙니다.");
        		}
        	} else {
        		this.cal_FrYm.set_value("");
        	}

        	if(!this.gfn_IsNull(toym)) {
        		if(this.gfn_IsYM(toym.replace("-", ""))) {
        			this.cal_ToYm.set_value(toym);
        		} else {
        			this.gfn_Alert("날짜 형식이 아닙니다.");
        		}
        	} else {
        		this.cal_ToYm.set_value("");
        	}
        };

        /***************************************************************************
         * Even   : fn_GetVal
         * Desc   : 현재값 리턴
         ****************************************************************************/
        this.fn_GetVal = function()
        {
        	var oRtn = {};

        	oRtn.frYm = this.cal_FrYm.value.substr(0, 6);
        	oRtn.toYm = this.cal_ToYm.value.substr(0, 6);

        	return oRtn;
        };

        /***************************************************************************
         * Even   : fn_SetRtnVal
         * Desc   : 값 지정하고 리턴
         ****************************************************************************/
        this.fn_SetRtnVal = function(frYm, toYm)
        {
        	this.cal_FrYm.set_value(frYm);
        	this.cal_ToYm.set_value(toYm);

        	this.cal_onchanged(this.cal_FrYm);

        	this.pdv_YM.closePopup();


        };

        /***************************************************************************
         * Even   : fn_SetEnable
         * Desc   : read only 설정.
         ****************************************************************************/
        this.fn_SetEnable = function(gubun)
        {
        	this.cal_FrYm.set_readonly(!gubun);
        	this.cal_ToYm.set_readonly(!gubun);
        };

        /***************************************************************************
         * Even   : fn_SetRequired
         * Desc   : 필수 설정.
         ****************************************************************************/
        this.fn_SetRequired = function(gubun, chkData)
        {
        	if(gubun == true) {
        		this.cal_FrYm.set_cssclass("essential");
        		this.cal_FrYm.chkData = chkData.split("|")[0];

        		this.cal_ToYm.set_cssclass("essential");
        		this.cal_ToYm.chkData = chkData.split("|")[1];
        	} else {
        		this.cal_FrYm.set_cssclass("");
        		this.cal_FrYm.chkData = "";

        		this.cal_ToYm.set_cssclass("");
        		this.cal_ToYm.chkData = "";
        	}
        };

        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.comCalMon_ontimer,this);
            this.cal_FrYm.addEventHandler("onchanged",this.cal_onchanged,this);
            this.cal_FrYm.addEventHandler("ondropdown",this.cal_ondropdown,this);
            this.pdv_YM.form.sta_FrYYYY.addEventHandler("onclick",this.pdv_YM_sta_YYYY_onclick,this);
            this.pdv_YM.form.sta_ToYYYY.addEventHandler("onclick",this.pdv_YM_sta_YYYY_onclick,this);
            this.pdv_YM.form.btn_FrBefore.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_FrNext.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr01.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr02.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr03.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr04.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr05.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr06.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr07.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr08.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr09.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr10.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr11.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Fr12.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_Ok.addEventHandler("onclick",this.pdv_Ym_btn_Ok_onclick,this);
            this.pdv_YM.form.btn_Cancle.addEventHandler("onclick",this.pdv_Ym_btn_Cancle_onclick,this);
            this.pdv_YM.form.btn_ToBefore.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_ToNext.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To01.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To02.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To03.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To04.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To05.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To06.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To07.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To08.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To09.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To10.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To11.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_To12.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_PreYy.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_ToYy.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_ToMon.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_PreMon.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_FrHalf.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_SeHalf.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_TwoQuarter.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_OneQuarter.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_FourQuarter.addEventHandler("onclick",this.btn_onclick,this);
            this.pdv_YM.form.btn_TrheeQuarter.addEventHandler("onclick",this.btn_onclick,this);
            this.cal_ToYm.addEventHandler("ondropdown",this.cal_ondropdown,this);
            this.cal_ToYm.addEventHandler("onchanged",this.cal_onchanged,this);
        };
        this.loadIncludeScript("comCalMonFT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
