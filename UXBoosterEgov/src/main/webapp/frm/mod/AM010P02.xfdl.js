(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM010P02");
            this.set_titletext("그룹추가/수정");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,222);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAddressbookGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","20",null,"182","10",null,"440",null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staGroupNmT","10","48","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","108","48",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGroupENmT","10","78","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("그룹영문명");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","108","78",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staGroupOrderT","10","108","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("그룹정렬순서");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","108","108",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,null,"58","23","10","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","46","21","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","10","25",null,"21","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("기본 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGroupNm","115","52",null,"23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_inputfilter("space");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGroupENm","115","82",null,"23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_inputfilter("space");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGroupOrder","115","112",null,"23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_inputtype("digit");
            obj.set_inputfilter("space");
            obj.set_maxlength("2");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",460,222,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtGroupNm","value","dsAddressbookGroup","GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtGroupENm","value","dsAddressbookGroup","GROUP_ENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtGroupOrder","value","dsAddressbookGroup","GROUP_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AM010P02.xfdl", function() {
        /**
        *  그룹추가
        *
        *  @MenuPath    주소록 > 그룹추가
        *  @FileName    AM010P02.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.09.27
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
        //this.fv_nFormVal = null;     //용도

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
            if (take.nvl(sTranId, "")=="") sTranId = "Select";

            var objParent = this.parent;
            var sParam = "PROJECT_CD='" + objParent.sProjectCd + "' MENU_CD='" + objParent.sMenuCd + "' GROUP_CD='" + objParent.sGroupCd + "'";

            take.tranSelect(this, sTranId, "AddressbookManagement.addressbookGroupDetail", "", "dsAddressbookGroup", sParam, "fnCallback");
        }

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	var objParent = this.parent;

        	var sParam    = "PROJECT_CD='" + objParent.sProjectCd + "' MENU_CD='" + objParent.sMenuCd + "' GROUP_CD='" + objParent.sGroupCd + "'";
            //take.tranSave(this, sTranId, "AddressbookManagement.addressbookGroup", "dsAddressbookGroup", "", sParam, "fnCallback");
        	take.transaction(this, sTranId, "SVC_LOC::ar/addressbookGroupSave.do", "dsAddressbookGroup=dsAddressbookGroup:U", "", sParam, "fnCallback");
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 그룹추가 버튼 클릭이벤트
        this.btnAdd_onclick = function(obj,e)
        {
        	if (this.fnCheckForm()) {
                this.fnSave();
        	}
        };

        //취소버튼 클릭 이벤트
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
            this.divSearch.form.btnAdd.setFocus();

            if(this.parent.sTitle == "Add") {
                this.dsAddressbookGroup.addRow();
        		this.dsAddressbookGroup.setColumn(0, "PROJECT_CD",  this.parent.sProjectCd);
        		this.dsAddressbookGroup.setColumn(0, "MENU_CD",     this.parent.sMenuCd);
        		this.divSearch.form.edtGroupNm.setFocus()
            } else {
                this.divSearch.form.btnAdd.set_text("수정");
                this.fnSearch("Select");
            }
        };

        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var objDivSearch = this.divSearch.form;
            var sGroupNm    = take.nvl(objDivSearch.edtGroupNm.text, "");
            var sGroupENm   = take.nvl(objDivSearch.edtGroupENm.text, "");
            var sGroupOrder = take.nvl(objDivSearch.edtGroupOrder.text, "");

            if(sGroupNm == ""){
                take.alert(this, "Info", "그룹명을 작성해주세요.");
                objDivSearch.edtGroupNm.setFocus();
                return false;
            } else {
                if(take.getByteLength(sGroupNm) > 50){
                    take.alert(this, "Info", "그룹명을 15자 내외로 작성해주세요.");
                    objDivSearch.edtGroupNm.setFocus();
                    return false;
                }
            }

            if(sGroupENm != "" && take.getByteLength(sGroupENm) > 150){
                take.alert(this, "Info", "그룹영문명 최대 길이를 초과했습니다.\n확인해주세요.");
                objDivSearch.edtGroupENm.setFocus();
                return false;
            }

            if(sGroupOrder == ""){
                var nOrder = parseInt(this.parent.sOrder) + 1;
                this.dsAddressbookGroup.setColumn(0, "GROUP_ORDER", nOrder);
            } else {
                if(take.getByteLength(sGroupOrder) > 2){
                    take.alert(this, "Info", "그룹정렬순서를 확인해주세요.");
                    objDivSearch.edtGroupOrder.setFocus();
                    return false;
                }
            }

            return true;
        };

        // 팝업닫기 -> 사용자지정 팝업콜백함수
        this.fnGoList = function()
        {
        	this.opener.fnPopCallback("AM010P02");
        	this.close();
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
                case "Select" : //조회 콜백
                    //Script
                    break;
                case "Save" :  //저장 콜백
                    take.alert(this, "Info", "그룹 저장이 완료되었습니다.");
                    this.fnGoList();
                    break;
                default :
                    break;
            }
        };

        this.divSearch_edtGroupOrder_onchanged = function(obj,e)
        {
        	if(obj.value == "0") {
                obj.set_value(1);
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divSearch.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.divSearch.form.edtGroupOrder.addEventHandler("onchanged",this.divSearch_edtGroupOrder_onchanged,this);
        };
        this.loadIncludeScript("AM010P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
