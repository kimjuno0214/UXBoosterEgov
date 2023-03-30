(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SASD020");
            this.set_titletext("Job Schedule 이력");
            this.set_background("#FFFFFF");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrdMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHOP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SHOP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_SEQ_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_STR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_STR_TIME_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_END_TIME_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RESULT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"WRK_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_TIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"UPD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"UPD_TIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboJobKind", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calWrkDt2","239","10","110","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSaleMonT","10","40","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("프로시져");
            obj.set_cssclass("sta_WF_textRImport");
            obj.set_border("1px solid transparent");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProcId","staSaleMonT:3","40","246","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsCboJobKind");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrdDtT00","cboProcId:20","40","118","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("프로시져 명/설명");
            obj.set_cssclass("sta_WF_textR");
            obj.set_border("1px solid transparent");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProcNm","staOrdDtT00:3","40","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            obj.set_imemode("none");
            obj.set_maxlength("500");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staOrdDtT","10","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작업일자");
            obj.set_cssclass("sta_WF_textRImport");
            obj.set_border("1px solid transparent");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calWrkDt1","staOrdDtT:3","10","110","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","calWrkDt1:3","10","20","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.08%","divSearch:0","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_rtl("false");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("dsGrdMain");
            obj.set_selecttype("multiarea");
            obj.getSetter("takegrid").set("sort,excel,movetocell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"200\"/><Column size=\"40\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"220\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"280\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"26\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"code\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"작업일자\"/><Cell col=\"4\" text=\"프로시저ID\"/><Cell col=\"5\" text=\"프로시저명\"/><Cell col=\"6\" text=\"작업순번\" expr=\"&apos;작업\\n순번&apos;\"/><Cell col=\"7\" text=\"작업시작일시\"/><Cell col=\"8\" text=\"작업종료일시\"/><Cell col=\"9\" text=\"작업결과\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SHOP_CD\" displaytype=\"normal\" edittype=\"none\" comboautoselect=\"false\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SHOP_NM\" displaytype=\"normal\" edittype=\"text\" comboautoselect=\"false\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\" editautoselect=\"true\"/><Cell col=\"2\" textAlign=\"center\" expr=\"currow+1\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\"/><Cell col=\"3\" text=\"bind:WRK_DT\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@\" maskedittype=\"string\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\"/><Cell col=\"4\" text=\"bind:PROC_ID\" displaytype=\"normal\" edittype=\"none\" comboautoselect=\"false\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\"/><Cell col=\"5\" text=\"bind:PROC_NM\" displaytype=\"normal\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\" expandchar=\"...\" expandshow=\"show\" expandsize=\"22\" expandimage=\"url(&apos;theme://images/transparent.png&apos;)\"/><Cell col=\"6\" text=\"bind:WRK_SEQ_NO\" displaytype=\"normal\" textAlign=\"center\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\"/><Cell col=\"7\" text=\"bind:WRK_STR_TIME_NM\" textAlign=\"center\" displaytype=\"normal\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\"/><Cell col=\"8\" text=\"bind:WRK_END_TIME_NM\" textAlign=\"center\" displaytype=\"normal\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\"/><Cell col=\"9\" text=\"bind:WRK_RESULT_GB\" textAlign=\"center\" displaytype=\"decoratetext\" expr=\"WRK_RESULT_GB==&apos;OK&apos; ? WRK_RESULT_GB : &quot;&lt;b v=&apos;true&apos;&gt;&lt;fc v=&apos;#FF0000&apos;&gt;&quot;+WRK_RESULT_GB+&quot;&lt;/fc&gt;&lt;/b&gt;&quot;\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\"/><Cell col=\"10\" text=\"bind:WRK_RESULT\" displaytype=\"normal\" cssclass=\"expr:RNUM==&apos;0&apos;?&apos;&apos;:&apos;cellGrade07&apos;\"/></Band><Band id=\"summary\"><Cell expr=\"take.setComma(dataset.getRowCount()).toString()+&apos; 건&apos;\" textAlign=\"right\" padding=\"0px 3px\"/><Cell col=\"1\" expr=\"take.setComma(dataset.getRowCount()).toString()+&apos; 건&apos;\" textAlign=\"right\" padding=\"0px 3px\"/><Cell col=\"2\" textAlign=\"right\" padding=\"0px 3px\"/><Cell col=\"3\"/><Cell col=\"4\" expr=\"take.setComma(dataset.getRowCount()).toString()+&apos; 건&apos;\" textAlign=\"right\" padding=\"0px 3px\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px\"/><Cell col=\"8\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px\"/><Cell col=\"9\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px\"/><Cell col=\"10\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDesc","743","169","200","158",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_border("1px solid #c0c0c0");
            obj.set_background("#bfcddb");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","6","35","187","113",null,null,null,null,null,null,this.divDetail.form.divDesc.form);
            obj.set_taborder("1");
            obj.set_wordWrap("char");
            obj.set_border("1px solid #c0c0c0");
            this.divDetail.form.divDesc.addChild(obj.name, obj);

            obj = new Button("btnDescClose","164","4","28","25",null,null,null,null,null,null,this.divDetail.form.divDesc.form);
            obj.set_taborder("0");
            obj.set_text("x");
            obj.set_tabstop("false");
            this.divDetail.form.divDesc.addChild(obj.name, obj);

            obj = new Div("divTest","639","425","178","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_border("1px solid #808080");
            obj.set_visible("false");
            obj.set_background("#f2f2f2");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","9","37","76","23",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("0");
            obj.set_text("test");
            this.divTest.addChild(obj.name, obj);

            obj = new Button("Button00_00","93","37","74","23",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("1");
            obj.set_text("test2");
            this.divTest.addChild(obj.name, obj);

            obj = new Button("Button01","9","7","34","23",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("2");
            obj.set_text("sch");
            this.divTest.addChild(obj.name, obj);

            obj = new Button("Button01_00","51","7","34","23",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("3");
            obj.set_text("add");
            this.divTest.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","93","7","34","23",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("4");
            obj.set_text("del");
            this.divTest.addChild(obj.name, obj);

            obj = new Button("Button01_00_00_00","133","7","34","23",null,null,null,null,null,null,this.divTest.form);
            obj.set_taborder("5");
            obj.set_text("sav");
            this.divTest.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divDesc.form
            obj = new Layout("default","",0,0,this.divDetail.form.divDesc.form,function(p){});
            this.divDetail.form.divDesc.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTest.form
            obj = new Layout("default","",0,0,this.divTest.form,function(p){});
            this.divTest.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ST03.xfdl", function() {
        /*------------------------------------------------------------------------------------------
        |  SYSTEM FORM NAME
        |
        |  @MenuPath : sys > ST03.xfdl
        |  @FileName : ST03.xfdl
        |  @Desction : 시스템 > 통계 > Job Schedule 이력
        |
        |  History  :	1. Initial Release, 2020.07.23, s.w.Lee
        |					- 최초 작성
        |				2. Modification,
        |					-
        +-------------------------------------------------------------------------------------------*/

        //공통 라이브러리 호출

        //=========================================================
        // 1.1 FORM 변수 선언 영역
        //=========================================================
        this.fv_sGdsProjectCd  = UXBooster.av_sProjectCd;  // 글로변 변수_프로젝트코드

        //=========================================================
        // 1.2 FORM EVENT 영역(onload등)
        //=========================================================
        this.SASD020_onload = function(obj,e)
        {
        	if( take.formOnLoad(this) ) { //공통 온로드(필수)
        		if (nexacro._Browser == "Runtime") this.divTest.set_visible(true);

        		take.comBtnRoleAll(this, "YYYYNN");

        		// 지점
        		take.tranSelect( this
        						,"__jobDistinct"
        						,"Statistics.jobKind"
        						,""
        						,"dsCboJobKind"
        						,""
        						,	function(sId, nErrCd, sErrMsg) {
        								var iNewRow = this.dsCboJobKind.insertRow(0);
        								this.dsCboJobKind.setColumn(iNewRow,"CODE","");
        								this.dsCboJobKind.setColumn(iNewRow,"NAME","전체");
        								this.divSearch.form.cboProcId.set_index(0);
        							}
        						,false  // sync
        						);
        		// 년월
        		var sDt1 = takeEtc.getDtString(this,"TO_CHAR(SYSDATE-1,'YYYYMMDD')");
        		var sDt2 = takeEtc.getDtString(this,"TO_CHAR(SYSDATE,  'YYYYMMDD')");
        		this.divSearch.form.calWrkDt1.set_value(sDt1);
        		this.divSearch.form.calWrkDt2.set_value(sDt2);

        		this.divSearch.form.edtProcNm.setFocus();
        	}
        }


        //=========================================================================
        //  2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        //=========================================================================
        this.fnSearch = function(sTranId)
        {
        	var sDt1 = this.divSearch.form.calWrkDt1.value;
        	var sDt2 = this.divSearch.form.calWrkDt2.value;
        	if( take.isFromTo(sDt1,sDt2) == false ) {
        		take.alert(this, "info", "종료일이 시작일 이전입니다.");
        		this.divSearch.form.calWrkDt2.setFocus();
        		return;
        	}

        	var sPara  =  "WRK_DT1=" + nexacro.wrapQuote(take.nvl(this.divSearch.form.calWrkDt1.value, ""));
        		sPara += " WRK_DT2=" + nexacro.wrapQuote(take.nvl(this.divSearch.form.calWrkDt2.value, ""));
        		sPara += " PROC_ID=" + nexacro.wrapQuote(take.nvl(this.divSearch.form.cboProcId.value, ""));
        		sPara += " PROC_NM=" + nexacro.wrapQuote(take.nvl(this.divSearch.form.edtProcNm.value, ""));

        	this.dsGrdMain.clearData();
        	take.tranSelect( this
        					,"mainList"
        					,"Statistics.jobList"
        					,""
        					,"dsGrdMain"
        					,sPara
        					,"fnCallback"
        					);
        }

        this.fnAddRow = function(obj,e)
        {
        };

        //==================================================
        //  삭제
        //==================================================
        this.fnDelRow = function(obj,e)
        {
        };

        //==================================================
        //  저장
        //==================================================
        this.fnSave = function(obj,e)
        {
        };

        //=========================================================
        //  3 각 COMPONENT 별 EVENT 영역
        //=========================================================
        this.fnUserFunc = function(obj,e)
        {
        };

        //===========================================================
        //  포커스 이동(엔터시)
        //===========================================================
        this.fn_NextWhenEnter = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( obj.parent.parent.name=="divSearch" ) {
        			switch(obj.name) {
        				case "edtProcNm":
        					this.fnSearch();
        					break;
        				default:
        					trace(this.divSearch.form.getNextComponent(obj,false));
        					this.divSearch.form.getNextComponent(obj,false).setFocus();
        					break;
        			}
        		}
            }
        };

        //======================================
        //  Callback
        //======================================
        this.fnCallback = function(sSvcId, nErrCd, sErrMsg)
        {
        	if( sErrMsg == "SUCC" ) {
        	    //Success Script
        	}
        	else {
        	    //Etc Script
        	}

        	switch(sSvcId) {
        		case "mainList":
        // 			if( this.dsGrdMain.rowcount > 0 ) {
        // 				this.divDetail.form.grdMain.setFocus();
        // 			}
        			break;
        		default:
        			break;
        	}
        };


        this.divDetail_grdMain_onkeydown = function(obj,e)
        {
        	if( e.ctrlkey == true && e.keycode == 86 ) {
        		// trace("XXXXX");
        	}

        };

        this.divDetail_grdMain_onexpandup = function(obj,e)
        {
        	if( e.row < 0 || take.getBindColName(obj, e.cell) != "PROC_NM" ) { // 필터등의 head 부분을 클릭했다면 return; && colid 체크
        		return;
        	}

        	if( this.divDetail.form.divDesc.visible == true && this.fv_iExpandRow == e.row ) {
        		this.fv_iExpandRow = -1;
        		this.divDetail.form.divDesc.set_visible(false);
        		return;
        	}

        	this.fv_iExpandRow = e.row;

        	var cellRect = obj.getCellRect(e.row, e.cell);  //  "left", "top", "right", "bottom", "width", "height"
        	// var left = cellRect.left;  // cell 왼쪽 라인에 맞추기.
        	var left = cellRect.left + (cellRect.width - this.divDetail.form.divDesc.width) +1;  // cell 오른쪽 라인에 맞추기.
        	var top  = cellRect.top + cellRect.height;

        	if( top + this.divDetail.form.divDesc.getOffsetHeight() > this.divDetail.form.grdMain.getOffsetHeight() ) {
        		top = cellRect.top - this.divDetail.form.divDesc.getOffsetHeight();
        	}

        	var sTxt = obj.getCellText(e.row, e.cell);
        		sTxt = sTxt+sTxt+sTxt+sTxt+sTxt+sTxt;
        	this.divDetail.form.divDesc.form.txtDesc.set_value(sTxt);
        	this.divDetail.form.divDesc.set_left(left);
        	this.divDetail.form.divDesc.set_top(top);

        	this.divDetail.form.divDesc.set_visible(true);
        	this.divDetail.form.divDesc.form.txtDesc.setFocus();
        };

        this.divDesc_btnDescClose_onclick = function(obj,e)
        {
        	this.divDetail.form.divDesc.set_visible(false);
        };

        this.divDetail_grdMain_onvscroll = function(obj,e)
        {
        	if( this.divDetail.form.divDesc.visible == true ) {
        		this.fv_iExpandRow = -1;
        		this.divDetail.form.divDesc.set_visible(false);
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	take.alert(this, "Info", "MS00000031");
        	take.alert(this, "Info", "ML00000001");

        	return;
        	take.alert(this, "Info", "MS00000001");
        	take.alert(this, "Info", "ML00000046");
        	take.alert(this, "Info", "ML00000003");

        	// take.alert(this, "Info", "MS00000004", {text:take.getWord(this, "ML00000005") });
        	// take.alert(this, "Info", "MS00000010", {text:take.getWord(this, "ML00001377") });

        	// take.alert(this, "Info", "MS00000008");
        	// take.alert(this, "Info", "ML00000046");

        	//this.divDetail.form.divDesc.form.txtDesc.setFocus();
        };


        this.Button01_onclick = function(obj,e)
        {
        	alert(this.parent.parent.btnDel.visible);
        	this.divSearch.form.staOrdDtT._cell_elem.handle.setAttribute("class", "fa fa-cloud fa-5x");
        };

        this.dsGrdMain_cancolumnchange = function(obj,e)
        {
        	if( e.columnid == "SHOP_NM" ) {
        		if( take.isEmpty(e.newvalue) == true ) {
        			obj.set_enableevent(false);
        			obj.setColumn(e.row,"SHOP_CD","");
        			obj.setColumn(e.row,"SHOP_NM","");
        			obj.set_enableevent(true);
        			return false;
        		}
        		else {
        			this.dsTemp.clearData();
        			var sPara = "shopNm=" + nexacro.wrapQuote(take.nvl(e.newvalue, ""));
        			var bOk = false;
        			take.tranSelect(  this
        							, "shopList"
        							, "Com.shopList"
        							, ""
        							, "dsTemp"
        							, sPara
        							, function(sId, nErrCd, sErrMsg) {
        								if( this.dsTemp.rowcount == 0 ) {
        								}
        								else if( this.dsTemp.rowcount == 1 ) {
        									obj.set_enableevent(false);
        									obj.setColumn(e.row,"SHOP_CD",this.dsTemp.getColumn(0,"SHOP_CD"));
        									obj.setColumn(e.row,"SHOP_NM",this.dsTemp.getColumn(0,"SHOP_NM"));
        									obj.set_enableevent(true);
        								}
        								else {
        									take.openPopup(   this
        													, "comShopPop"
        													, "frm::com/comShopPop.xfdl"
        													, {shopNm:e.newvalue}
        													, ""
        													, 	function(sId, sRtn) {
        															if( take.isEmpty(sRtn) == true ) {
        																bOk = false;
        															}
        															else {
        																var sRtn = sRtn.split(",");
        																obj.set_enableevent(false);
        																obj.setColumn(e.row,"SHOP_CD",sRtn[0]);
        																obj.setColumn(e.row,"SHOP_NM",sRtn[1]);
        																obj.set_enableevent(true);
        																bOk = false;
        															}
        														}
        													, false
        													);
        								}
        							},false);
        			return false;
        		}
        	}
        	return true;
        };

        this.divTest_Button00_onclick = function(obj,e)
        {
        	this.divSearch.form.calWrkDt1.set_value('20200925');
        	this.divSearch.form.calWrkDt1.set_value('20200925');
        	this.fnSearch();
        };

        this.dsGrdMain_onrowposchanged = function(obj,e)
        {
        	trace('onrowposchanged >> ' + e.newrow);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SASD020_onload,this);
            this.divSearch.form.calWrkDt2.addEventHandler("onkeydown",this.fn_NextWhenEnter,this);
            this.divSearch.form.cboProcId.addEventHandler("onkeydown",this.fn_NextWhenEnter,this);
            this.divSearch.form.edtProcNm.addEventHandler("onkeyup",this.fn_NextWhenEnter,this);
            this.divSearch.form.calWrkDt1.addEventHandler("onkeydown",this.fn_NextWhenEnter,this);
            this.divDetail.form.grdMain.addEventHandler("onkeydown",this.divDetail_grdMain_onkeydown,this);
            this.divDetail.form.grdMain.addEventHandler("onmouseup",this.divDetail_grdMain_onmouseup,this);
            this.divDetail.form.grdMain.addEventHandler("onvscroll",this.divDetail_grdMain_onvscroll,this);
            this.divDetail.form.grdMain.addEventHandler("onexpandup",this.divDetail_grdMain_onexpandup,this);
            this.divDetail.form.divDesc.form.btnDescClose.addEventHandler("onclick",this.divDesc_btnDescClose_onclick,this);
            this.divTest.form.Button00.addEventHandler("onclick",this.divTest_Button00_onclick,this);
            this.divTest.form.Button00_00.addEventHandler("onclick",this.divTest_Button00_00_onclick,this);
            this.divTest.form.Button01.addEventHandler("onclick",this.fnSearch,this);
            this.divTest.form.Button01_00.addEventHandler("onclick",this.fnAddRow,this);
            this.divTest.form.Button01_00_00.addEventHandler("onclick",this.fnDelRow,this);
            this.divTest.form.Button01_00_00_00.addEventHandler("onclick",this.fnSave,this);
            this.dsGrdMain.addEventHandler("cancolumnchange",this.dsGrdMain_cancolumnchange,this);
            this.dsGrdMain.addEventHandler("onrowposchanged",this.dsGrdMain_onrowposchanged,this);
        };
        this.loadIncludeScript("ST03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
