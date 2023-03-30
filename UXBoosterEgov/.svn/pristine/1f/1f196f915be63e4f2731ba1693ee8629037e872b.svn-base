(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MT010P03");
            this.set_titletext("참석자선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsApprover", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_POSITION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","10",null,"20","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode","10","40","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("참석자코드");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","108","40",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staName","10","70","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("참석자명");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","108","70",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCode","115","44",null,"23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","115","74",null,"23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","10","staName:5",null,"23","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","10","btnSearch:10",null,"320","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsApprover");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("checkbox,readonly");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"110\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_POSITION_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnEnter","10",null,null,"23","10","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic01");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",380,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtCode","value","dsSearch","USER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtName","value","dsSearch","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MT010P03.xfdl", function() {
        /**
        *  회의록 작성
        *
        *  @MenuPath    회의록 > 회의록 작성
        *  @FileName    MT010P02.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.11.18
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.11.18      전영찬             최초 생성
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
            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
                this.fnInit();
            }
        }

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

            take.tranSelect(this, sTranId, "MeetingMinutesManagement.userList", "dsSearch", "dsApprover", "", "fnCallback");
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
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
        	var objDsApp  = this.dsApprover;
            var arrChkRow = take.getChkRow(objDsApp,"CHK");
            var sRtn = "";

            if(arrChkRow.length == 0){
                alert("참석자 선택을 부탁드립니다.");
                return;
            }

            for(var i=0; i<arrChkRow.length; i++){
                if(i!=0){
                    sRtn += ',';
                }
                sRtn += this.dsApprover.getColumn(arrChkRow[i], "USER_CD") +','+ this.dsApprover.getColumn(arrChkRow[i], "USER_NM");
            }

            //var arrRtn = this.dsApprover.getColumn(this.fv_nChkRow, "USER_CD") +','+ this.dsApprover.getColumn(this.fv_nChkRow, "USER_NM");
            this.close(sRtn);
        };

        // Edit_onkeyup : 엔터로 강제 포커스아웃
        this.Edit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
                var sEdtId = obj.name.substr(3);

                switch(sEdtId) {
                case "Code":
                    this.divSearch.form.edtName.setFocus();
                	break;
                case "Name":
                    this.fnSearch('userList');
                	break;
                default:
                    break;
                }
            }
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
                alert("참석자명을 작성해주세요.");
                return false;
            }

        //     if(sCode == ""){
        //         alert("참석자 코드를 작성해주세요.");
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
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtCode.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divSearch.form.edtName.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.btnEnter.addEventHandler("onclick",this.btnEnter_onclick,this);
        };
        this.loadIncludeScript("MT010P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
