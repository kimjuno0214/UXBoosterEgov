(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comGodPopM");
            this.set_titletext("품목멀티선택");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(525,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrdGod", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboGodDiv", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staGod","20","20","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("품목 목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","staGod:5",null,"72","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staGodNm","10","39","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("품목코드/명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGodNm","staGodNm:10","39","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGodDiv","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("품목구분");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGodDiv","staGodDiv:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboGodDiv");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
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
            obj.set_binddataset("dsGrdGod");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("no,status,sort,find,filter,move,hide,excel,pdf,fix,reset,personal");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"80\"/><Column size=\"173\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"품목구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:GOD_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:GOD_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:GOD_DIV_NM\" textAlign=\"center\"/></Band></Format></Formats>");
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

            obj = new Button("btnCancle",null,"divDetail:20","57","23","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,"divDetail:20","57","23","80",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comGodPopM.xfdl", function() {
        /**
        *  품목찾기팝업
        *
        *  @MenuPath    공통 > 품목찾기팝업
        *  @FileName    comGodPopM.xfdl
        *  @Creator     kds
        *  @CreateDate  2020.04.27
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.04.27      kds                 최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd  = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_sFormId     = null; // 화면ID

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.comGodPopM_onload = function(obj, e)
        {
        	this.ProgId = "GM00000259";
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		// 공통코드(품목구분 41S1)
        		take.tranCode(this
        					, "41S1"
        					, "dsCboGodDiv"
        					, "ALL"
        					, function(sId, nErrCd, sErrMsg) {
        						this.divSearch.form.cboGodDiv.set_index(0);  // 포커스
        					});

        		var sFormId = this.opener.name;
        		this.divSearch.form.edtGodNm.setFocus();
        		this.btnSearch_onclick();
        	}
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        this.divDetail_grdList_onheadclick = function(obj,e)
        {
        	if( takeEtc.getColIdFromCol(obj, e.col) == "CHK" ) {
        		take.fnGridCheckAll(obj, e.cell, "CHK");
        	}
        };

        // 조회버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
            takeEtc.arguClr(this.dsSearch);
        	takeEtc.arguAdd(this.dsSearch, "godDiv", take.nvl(this.divSearch.form.cboGodDiv.value, ""));
        	takeEtc.arguAdd(this.dsSearch, "godNm", take.nvl(this.divSearch.form.edtGodNm.value, ""));

        	this.dsGrdGod.clearData();
        	take.tranSelect(  this
        					, "godList"
        					, "Com.godList"
        					, "dsSearch"
        					, "dsGrdGod"
        					, ""
        					,	function(sId, nErrCd, sErrMsg) {
        							// 그리드 헤더 체크박스 체크 초기화
        							takeEtc.initHeaderCheckBox(this.divDetail.form.grdList, "CHK");
        							if( this.opener.name == "SACS040" ) {
        							/*
        								var iFindRow = this.dsGrdGod.findRow("GOD_CD",this.parent.sGodCd);
        								if( iFindRow > -1 ) {
        									this.dsGrdGod.deleteRow(iFindRow);
        								}
        							*/
        							}
        						}
        					);
        };

        //확인버튼 클릭 이벤트
        this.btnEnter_onclick = function(obj,e)
        {
        	if( this.dsGrdGod.rowposition < 0 ) {
                take.alert(this, "info", "선택된 품목이 없습니다.");
        		return;
            }

        	if( this.dsGrdGod.findRow("CHK","1") < 0 ) {
        	    take.alert(this, "info", "선택된 품목이 없습니다.");
        		return;
            }

            if( this.opener.name == "XXX" ) {
        		var currow = this.dsGrdGod.rowposition;
        		var sRtn  =       this.dsGrdGod.getColumn(currow, "GOD_CD");
        			sRtn += ',' + this.dsGrdGod.getColumn(currow, "GOD_NM");

        		this.close(sRtn);
        	}
        	else if( this.opener.name == "SACS040" ) {
        		/*
        		var bolConfirm 	= take.confirm(this, "question", "선택한 대리점으로 품목복사하시겠습니까?");
        		if( bolConfirm ) {
        			this.opener.fn_doCopy(this.dsGrdGod);
        			this.close();
        		}
        		*/
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/


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
                case "Save" :  //저장 콜백

                    break;
                default :
                    break;
            }
        }

        // Edit_onkeyup : 엔터로 강제 포커스아웃
        this.Edit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
                switch(obj.name) {
        			case "edtGodNm":
        				this.btnSearch_onclick();
        				break;
        			default:
        				break;
                }
            }
        };


        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };

        //===========================================================
        //  그리드 상단 제목 건수표시
        //===========================================================
        this.dsGrdGod_onload = function(obj,e)
        {
        	takeEtc.displayRowCount(this,this.staGod,obj.rowcount);
        };

        this.dsGrdGod_onrowsetchanged = function(obj,e)
        {
        	takeEtc.displayRowCount(this,this.staGod,obj.rowcount);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comGodPopM_onload,this);
            this.divSearch.form.edtGodNm.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divDetail.form.grdList.addEventHandler("onheadclick",this.divDetail_grdList_onheadclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnEnter.addEventHandler("onclick",this.btnEnter_onclick,this);
            this.dsGrdGod.addEventHandler("onload",this.dsGrdGod_onload,this);
            this.dsGrdGod.addEventHandler("onrowsetchanged",this.dsGrdGod_onrowsetchanged,this);
        };
        this.loadIncludeScript("comGodPopM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
