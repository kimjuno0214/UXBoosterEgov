(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample1");
            this.set_titletext("Layout1");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/><Column id=\"col6\" type=\"STRING\" size=\"256\"/><Column id=\"col7\" type=\"STRING\" size=\"256\"/><Column id=\"col8\" type=\"STRING\" size=\"256\"/><Column id=\"col9\" type=\"STRING\" size=\"256\"/><Column id=\"col10\" type=\"STRING\" size=\"256\"/><Column id=\"use_yn\" type=\"STRING\" size=\"256\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"256\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"key\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","10","0","370","360",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","30","361","165",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("checkbox,readonly");
            obj.set_cellsizebandtype("allband");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"키값\"/><Cell col=\"1\" text=\"데이터1\"/><Cell col=\"2\" text=\"데이터2\"/><Cell col=\"3\" text=\"데이터3\"/></Band><Band id=\"body\"><Cell text=\"bind:key\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:col1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:col2\"/><Cell col=\"3\" text=\"bind:col3\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","866",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("리스트");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable06","1","195","299","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("디테일");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","70","225","291","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable01","1","225","70","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("키");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","70","staBg01:-1","291","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","70","staBg02:-1","291","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","70","staBg03:-1","291","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable02","1","staLable01:-1","70","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("데이터1");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable03","1","staLable02:-1","70","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("데이터2");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable04","1","staLable03:-1","70","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("데이터3");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData1","staLable02:6","260","278","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtKey","staLable01:6","230","278","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("주식회사 티플럭스");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBgLine","4","225",null,"1","509",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tableLine");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData2","staLable03:6","290","278","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("주식회사 티플럭스");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtData3","staLable04:6","320","278","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_text("주식회사 티플럭스");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSearch","208","5","149","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnNew","123","200","70","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("신규");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSave","283","200","70","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("저장");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDelete","203","200","70","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("삭제");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",380,380,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item15","divDetail.form.edtKey","value","dsDetail","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtData1","value","dsDetail","col1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtData2","value","dsDetail","col2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtData3","value","dsDetail","col3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("simpleTranSave.xfdl", function() {
        /**
        *  sample1 템플릿
        *
        *  @MenuPath    guide > sample1
        *  @FileName    sample1.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.10.31
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.10.31      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sNew = "N";     //신규작성 확인값

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
            if (take.nvl(sTranId, "")=="") sTranId = "List";

            switch(sTranId) {
                case "List":
                    this.dsList.clearData();

                    take.tranSelect(this, sTranId, "Sample.sample01Select", "", "dsList", "", "fnCallback");
                    break;

                case "Detail":
                    var sSampleKey = this.dsList.getColumn(this.dsList.rowposition, "key");
                    var sParam = "sKey='" + sSampleKey + "'";

                    this.dsDetail.clearData();

                    take.tranSelect(this, sTranId, "Sample.sample01DetailSelect", "", "dsDetail", sParam, "fnCallback");
                    break;
                default:
                    break;
            }
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

            var nRowType = this.dsDetail.getRowType(0);

            switch(nRowType) {
            case 1: //초기행의 상태
                alert("선택한 신청건의 수정사항이 없습니다.");
            	break;
            case 2: //추가된 행의 상태
                var bRowChange = take.confirm(this, "question", "신규 저장 하시겠습니까?");
                if (bRowChange){
                    take.tranSave(this, "Save", "Sample.sampleTran", "dsDetail", "", "", "fnCallback");
                }
            	break;
            case 4: //수정된 행의 상태
                if (take.confirm(this, "question", "선택건을 수정 하시겠습니까?")){
                    take.tranSave(this, "Modify", "Sample.sampleTran", "dsDetail", "", "", "fnCallback");
                }
                break;
            default:
            }
        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            if(this.dsDetail.getRowType(this.dsDetail.rowposition) == 2) {
                alert("이미 신청 작성중입니다.");
                return false;
            }else{
                var objDsDetail = this.dsDetail;

                objDsDetail.clearData();
                objDsDetail.addRow();
            }
        }

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {
            var nRowType = this.dsDetail.getRowType(0);
            trace(nRowType);

            switch(nRowType) {
            case 0: //존재하지 않는 행의 상태
                alert("선택한 데이터가 없습니다.");
            	break;
            case 2: //추가된 행의 상태
                if (take.confirm(this, "question", "작성중인 자료가 삭제됩니다.\n진행하시겠습니까?")){
                    this.dsDetail.clearData();
                    this.fnSearch("List");
                }
            	break;
            default:
                if (take.confirm(this, "question", "선택한 신청건을 삭제하시겠습니까?")){
                    this.dsList.deleteRow(this.dsList.rowposition);
                    take.tranSave(this, "Delete", "Sample.sampleTran", "dsDetail", "", "", "fnCallback");
                }
                break;
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //리스트 클릭 이벤트
        this.divDetail_grdMain_onselectchanged = function(obj,e)
        {
            this.fnSearch("Detail");
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

        }

        /**
         * fnModifySet : 신규저장 / 수정
         * @param  {String} sParam N/A
         * @example this.fnModifySet();
         */
        this.fnModifySet = function()
        {
            //팝업으로 '템플릿 진행할 때' 포커스가 안빠져서 바인드된값이 업데이트가 안됨. -> 강제 data셋팅필요.
            var objDsDetail = this.dsDetail;
            var objDivDetail = this.divDetail.form;
            var sEdtText01  = take.nvl(objDivDetail.edtData1.value, "");
            var sEdtText02  = take.nvl(objDivDetail.edtData2.value, "");
            var sEdtText03  = take.nvl(objDivDetail.edtData3.value, "");

            objDsDetail.setColumn(0, "col1", sEdtText01);
            objDsDetail.setColumn(0, "col2", sEdtText02);
            objDsDetail.setColumn(0, "col2", sEdtText03);
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
                case "List" : //조회 콜백
                    this.divDetail.form.staTitle.set_text("Title (총 " + this.dsList.rowcount + "건)");
                    break;
                case "Detail" : //조회 콜백
                    //Script
                    break;
                case "Save" :  //저장 콜백
                    this.fnSearch("List");
                    break;
                case "Delete" :  //삭제 콜백
                    this.fnSearch("List");
                    break;
                default :       // 수정 콜백
                    this.fnSearch("List");
                    break;
            }
        }

        this.divDetail_btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch('List');
        };

        //신규버튼
        this.divDetail_btnNew_onclick = function(obj,e)
        {
        	this.fnAddRow();
        };
        //삭제버튼
        this.divDetail_btnDelete_onclick = function(obj,e)
        {
        	this.fnDelRow();
        };
        //저장버튼
        this.divDetail_btnSave_onclick = function(obj,e)
        {
        	this.fnSave('Save');
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divDetail.form.grdMain.addEventHandler("onselectchanged",this.divDetail_grdMain_onselectchanged,this);
            this.divDetail.form.edtKey.addEventHandler("onchanged",this.divDetail_edtProgId_onchanged,this);
            this.divDetail.form.edtData2.addEventHandler("onchanged",this.divDetail_edtProgId_onchanged,this);
            this.divDetail.form.edtData3.addEventHandler("onkeyup",this.divDetail_edtPProgNm_onkeyup,this);
            this.divDetail.form.btnSearch.addEventHandler("onclick",this.divDetail_btnSearch_onclick,this);
            this.divDetail.form.btnNew.addEventHandler("onclick",this.divDetail_btnNew_onclick,this);
            this.divDetail.form.btnSave.addEventHandler("onclick",this.divDetail_btnSave_onclick,this);
            this.divDetail.form.btnDelete.addEventHandler("onclick",this.divDetail_btnDelete_onclick,this);
        };
        this.loadIncludeScript("simpleTranSave.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
