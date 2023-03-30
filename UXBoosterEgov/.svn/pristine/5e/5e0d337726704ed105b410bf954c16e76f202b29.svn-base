(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comAreaPop");
            this.set_titletext("지역선택");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(680,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrdMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AREA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AREA_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staArea","20","20","150","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("지역 검색 목록");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","staArea:5",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staAreaNmT","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("지역명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAreaNm","staAreaNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
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

            obj = new Grid("grdMain","0","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsGrdMain");
            obj.set_autofittype("none");
            obj.getSetter("takegrid").set("no,status,sort,find,filter,move,hide,excel,pdf,fix,reset,personal");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"160\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"110\"/><Column size=\"170\"/><Column size=\"84\"/><Column size=\"84\"/></Columns><Rows><Row size=\"52\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"지역코드\"/><Cell col=\"1\" text=\"지역명\"/><Cell col=\"2\" text=\"시도코드\" expr=\"&apos;시도\\n코드&apos;\"/><Cell col=\"3\" text=\"시도명\"/><Cell col=\"4\" text=\"시군구코드\" expr=\"&apos;시군구\\n코드&apos;\"/><Cell col=\"5\" text=\"시군구명\"/><Cell col=\"6\" text=\"좌표\"/><Cell col=\"7\" text=\"위도\"/><Cell col=\"8\" text=\"경도\"/></Band><Band id=\"body\"><Cell text=\"bind:AREA_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:AREA_NM\"/><Cell col=\"2\" text=\"bind:SIDO_CD\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SIDO_NM\"/><Cell col=\"4\" text=\"bind:SIGUNGU_CD\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SIGUNGU_NM\"/><Cell col=\"6\" text=\"bind:COORD\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:LAT\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:LON\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","596",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","639",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"divDetail:20","57","23","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,"divDetail:20","57","23","btnCancle:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",680,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtAreaNm","value","dsSearch","AREA_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comAreaPop.xfdl", function() {
        /**
        *  대리점찾기팝업
        *
        *  @MenuPath    공통 > 대리점찾기팝업
        *  @FileName    comShopPop.xfdl
        *  @Creator     s.w.lee
        *  @CreateDate  2020.04.06
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.04.06      s.w.lee             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd  = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_sFormId     = null; // 화면ID
        this.fv_sUserDiv = UXBooster.gdsUserInfo.getColumn(0,"USER_DIV");  // USER_DIV 사용자구분(1:본사,2:지점,3:대리점)
        this.fv_sBranCd  = UXBooster.gdsUserInfo.getColumn(0,"BRAN_CD");   // USER_DIV='2' 일때 지점

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.comShopPop_onload = function(obj, e)
        {
        	this.ProgId = "GM00000265";
        	if (take.formOnLoad(this)) { //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        		var sFormId = this.opener.name;

        		if( take.isEmpty(this.parent.areaNm) == false ) {
        			this.divSearch.form.edtAreaNm.set_value(this.parent.areaNm);
        		}

        		this.divSearch.form.edtAreaNm.setFocus();
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

        this.grd_oncelldblclick = function(obj,e)
        {
        	this.btnEnter_onclick();
        };

        this.grd_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13 ) {
        		this.btnEnter_onclick();
        	}
        };


        // 조회버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	this.dsGrdMain.clearData();
        	take.tranSelect(  this
        					, "mainList"
        					, "Com.areaList"
        					, "dsSearch"
        					, "dsGrdMain"
        					, ""
        					, "fnCallback"
        					);
        };

        //확인버튼 클릭 이벤트
        this.btnEnter_onclick = function(obj,e)
        {
        	if( this.dsGrdMain.rowposition < 0 ) {
        		return;
        	}

        	var sName = this.opener.name;
        	switch(sName) {
        		case "SAOR010XXX":
        		case "SAOR020XXX":
        			break;
        		default:
        			var currow = this.dsGrdMain.rowposition;
        			var sRtn  =       this.dsGrdMain.getColumn(currow, "AREA_CD");
        				sRtn += ',' + this.dsGrdMain.getColumn(currow, "AREA_NM");

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
        				case "edtAreaNm":
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
                case "mainList":
        			if( this.dsGrdMain.rowcount > 0 ) {
        				takeEtc.focusCellByColId(this.divDetail.form.grdMain, "AREA_NM", 0);
        			}
        			else {
        				this.divSearch.form.edtAreaNm.setFocus();
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
        this.dsGrdMain_onload = function(obj,e)
        {
        	takeEtc.displayRowCount(this,this.staArea,obj.rowcount);
        };

        this.dsGrdMain_onrowsetchanged = function(obj,e)
        {
        	takeEtc.displayRowCount(this,this.staArea,obj.rowcount);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comShopPop_onload,this);
            this.divSearch.form.edtAreaNm.addEventHandler("onkeyup",this.fn_NextWhenEnter,this);
            this.divDetail.form.grdMain.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);
            this.divDetail.form.grdMain.addEventHandler("onkeydown",this.grd_onkeydown,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnEnter.addEventHandler("onclick",this.btnEnter_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.dsGrdMain.addEventHandler("onload",this.dsGrdMain_onload,this);
            this.dsGrdMain.addEventHandler("onrowsetchanged",this.dsGrdMain_onrowsetchanged,this);
        };
        this.loadIncludeScript("comAreaPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
