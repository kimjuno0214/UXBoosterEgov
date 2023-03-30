(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comSaEmpPop");
            this.set_titletext("영업담당자선택");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(525,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrdSaEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BRAN_CD\"/><Col id=\"USER_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboBranCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","46",null,"72","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("StaUserNm","10","39","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용자ID/명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staShopCdT","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("지점");
            obj.set_cssclass("sta_WF_textR");
            obj.set_border("1px solid transparent");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboBranCd","staShopCdT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboBranCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","StaUserNm:10","cboBranCd:8","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.10%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsGrdSaEmp");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("no,status,sort,find,filter,move,hide,excel,pdf,fix,reset,personal");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"173\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사용자코드\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"지점\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_ID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:USER_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:BRAN_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","596",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","639",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"616","57","23","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,"616","57","23","btnCancle:3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("staSaEmp","20","20","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("영업 담당자 목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",525,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtUserNm","value","dsSearch","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboBranCd","value","dsSearch","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comSaEmpPop.xfdl", function() {
        /**
        *  수출거래처찾기팝업
        *
        *  @MenuPath    공통 > 수출거래처찾기팝업
        *  @FileName    comDisCstPop.xfdl
        *  @Creator     s.w.lee
        *  @CreateDate  2020.09.24
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.09.24      j.h.choi             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd  = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_sFormId     = null; // 화면ID
        this.fv_sUserDiv = UXBooster.gdsUserInfo.getColumn(0,"USER_DIV");  // USER_DIV 사용자구분(1:본사,2:지점,3:거래처)
        this.fv_sBranCd  = UXBooster.gdsUserInfo.getColumn(0,"BRAN_CD");   // USER_DIV='2' 일때 지점

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.comShopPop_onload = function(obj, e)
        {
        	this.ProgId = "GM00000264";
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		// 지점
        		take.tranSelect( this
        						,"__branList"
        						,"Com.branList"
        						,""
        						,"dsCboBranCd"
        						,"ALL='전체'"
        						,	function(sId, nErrCd, sErrMsg) {
        								if( this.fv_sUserDiv == "1" ) {  // USER_DIV 사용자구분(1:본사,2:지점,3:대리점)
        									this.divSearch.form.cboBranCd.set_index(0);
        								}
        								else {
        									this.divSearch.form.cboBranCd.set_value(this.fv_sBranCd);
        									this.divSearch.form.cboBranCd.set_enable(false);
        								}
        							}
        						,false  // sync
        						);

        		var sFormId = this.opener.name;
        		if( take.isEmpty(this.parent.userNm) == false ) {
        			this.divSearch.form.edtUserNm.set_value(this.parent.userNm);
        		}

        		this.divSearch.form.edtUserNm.setFocus();
        		this.btnSearch_onclick();
        	}
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 그리드리스트 클릭이벤트(체크박스)

        this.divDetail_grdList_oncelldblclick = function(obj,e)
        {
        	this.btnEnter_onclick();
        };

        this.divDetail_grdList_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.btnEnter_onclick();
        	}
        };


        // 조회버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	this.dsGrdSaEmp.clearData();
        	take.tranSelect(  this
        					, "saEmpList"
        					, "Com.saEmpList"
        					, "dsSearch"
        					, "dsGrdSaEmp"
        					, ""
        					, "fnCallback"
        					);
        };

        //확인버튼 클릭 이벤트
        this.btnEnter_onclick = function(obj,e)
        {
        	if( this.dsGrdSaEmp.rowposition < 0 ) {
                take.alert(this, "info", "선택된 영업담당자가 없습니다.");
        		return;
            }

        	var sName = this.opener.name;
        	switch(sName) {

        // 		case "SAGR030":  // 장려금 > 매출목표대비실적
        // 			var currow = this.dsGrdSaEmp.rowposition;
        // 			var sRtn  =       this.dsGrdSaEmp.getColumn(currow, "SHOP_CD");
        // 				sRtn += ',' + this.dsGrdSaEmp.getColumn(currow, "SHOP_NM");
        // 				sRtn += ',' + this.dsGrdSaEmp.getColumn(currow, "WH_CD");
        //
        // 			this.close(sRtn);
        // 			break;

        		default:
        			var currow = this.dsGrdSaEmp.rowposition;
        			var sRtn  =  this.dsGrdSaEmp.getColumn(currow, "USER_CD");
        				sRtn += ',' + this.dsGrdSaEmp.getColumn(currow, "USER_ID");
        				sRtn += ',' + this.dsGrdSaEmp.getColumn(currow, "USER_NM");

        			this.close(sRtn);
        			break;
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        //===========================================================
        //  포커스 이동(엔터시)
        //===========================================================
        this.fn_NextWhenEnter = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		if( obj.parent.parent.name=="divSearch" ) {
        			switch(obj.name) {
        				case "edtUserNm":
        					this.btnSearch_onclick();
        					break;
        				default:
        					this.divSearch.form.getNextComponent(obj,false).setFocus();
        					break;
        			}
        		}
            }
        };

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : svcId   - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : errCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : errMsg   - 에러메세지 (공통 콜백에서 넘어옴)
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
                case "saEmpList":
        			if( this.dsGrdSaEmp.rowcount > 0 ) {
        				takeEtc.focusCellByColId(this.divDetail.form.grdList, "USER_NM", 0);
        			}
        			else {
        				this.divSearch.form.edtUserNm.setFocus();
        			}
        			break;
        		case "Save" :  //저장 콜백

                    break;
                default :
                    break;
            }
        }


        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };

        //===========================================================
        //  그리드 상단 제목 건수표시
        //===========================================================
        this.dsGrdSaEmp_onload = function(obj,e)
        {
        	takeEtc.displayRowCount(this,this.staSaEmp,obj.rowcount);
        };

        this.dsGrdSaEmp_onrowsetchanged = function(obj,e)
        {
        	takeEtc.displayRowCount(this,this.staSaEmp,obj.rowcount);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comShopPop_onload,this);
            this.divSearch.form.cboBranCd.addEventHandler("onkeyup",this.fn_NextWhenEnter,this);
            this.divSearch.form.edtUserNm.addEventHandler("onkeyup",this.fn_NextWhenEnter,this);
            this.divDetail.form.grdList.addEventHandler("oncelldblclick",this.divDetail_grdList_oncelldblclick,this);
            this.divDetail.form.grdList.addEventHandler("onkeydown",this.divDetail_grdList_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnEnter.addEventHandler("onclick",this.btnEnter_onclick,this);
            this.dsGrdSaEmp.addEventHandler("onload",this.dsGrdSaEmp_onload,this);
            this.dsGrdSaEmp.addEventHandler("onrowsetchanged",this.dsGrdSaEmp_onrowsetchanged,this);
        };
        this.loadIncludeScript("comSaEmpPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
