(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC010P01");
            this.set_titletext("담당자선택");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsApprover", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","46",null,"72","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staName","10","39","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","staName:10","39",null,"21","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_imemode("alpha");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("담당자코드");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCode","staCode:10","10",null,"21","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","42.11%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsApprover");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"155\"/><Column size=\"143\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:USER_POSITION_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("담당자 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_search03");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","437",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,"divDetail:20","57","23","80",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"divDetail:20","57","23","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",380,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtName","value","dsSearch","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtCode","value","dsSearch","USER_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SC010P01.xfdl", function() {
        /**
        *  담당자선택 팝업
        *
        *  @MenuPath    시스템관리 > 담당자선택
        *  @FileName    SC010P01.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.11.05
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.27      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd  = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_nChkRow     = null;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
        	this.ProgId="GM00000116";
            this.ProgNm="GM00000116";

            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
                this.fnInit();
            }
        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "userList";

            this.dsApprover.clearData();
            this.dsSearch.setColumn(0,"PROJECT_CD", this.fv_sProjectCd);

            take.tranSelect(this, sTranId, "HumanResourceManagement.userList", "dsSearch", "dsApprover", "", "fnCallback");
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 그리드리스트 클릭이벤트(체크박스)
        this.grdList_oncellclick = function(obj,e)
        {
            var nOldrow = e.oldrow;
            if(e.col == 0){
                if(nOldrow != e.row) {
                    this.fv_nChkRow = e.row;
                    if(this.dsApprover.getColumn(nOldrow, "CHK") == '1') {
                        this.dsApprover.setColumn(nOldrow, "CHK", '0');
                    }
                } else {
                    this.fv_nChkRow = null;
                }
            }
        };

        // 조회버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        //     var sName = take.nvl(this.divSearch.form.edtName.text, "");
        //     var sCode = take.nvl(this.divSearch.form.edtCode.text, "");
        //
        //     if (sName != "" || sCode != "") {
        //
        //     }
        //     if(this.fnCheckForm()) {
        //         this.fnSearch('userList');
        //     }
            this.fnSearch('userList');
        };

        //확인버튼 클릭 이벤트
        this.btnEnter_onclick = function(obj,e)
        {
        	if(this.fv_nChkRow == null) {
                //alert("선택 부탁드립니다.");
        		take.alert(this, "Info", "MS00000008");
                return;
            }

            var sRtn = this.dsApprover.getColumn(this.fv_nChkRow, "USER_CD") +','+ this.dsApprover.getColumn(this.fv_nChkRow, "USER_NM");
            this.close(sRtn);
        };

        // 닫기 버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @param  {String} N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
            var objDivSearch = this.divSearch.form;
            var objParent = this.parent;

            objDivSearch.edtName.setFocus();
        }

        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var objDivSearch = this.divSearch.form;
            var sName   = take.nvl(objDivSearch.edtName.text, "");
            //var sCode   = take.nvl(objDivSearch.edtCode.text, "");

            if(sName == ""){
                //alert("담당자명을 작성해주세요.");
        		take.alert(this, "Info", "MS00000014", {text:this.divSearch.form.Static24.text});
                return false;
            }

        //     if(sGroupENm == ""){
        //         alert("그룹 영문명을 작성해주세요.");
        //         return false;
        //     }

            return true;
        }
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnEnter.addEventHandler("onclick",this.btnEnter_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };
        this.loadIncludeScript("SC010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
