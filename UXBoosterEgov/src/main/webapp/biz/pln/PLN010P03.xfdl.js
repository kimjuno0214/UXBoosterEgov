(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PLN010P03");
            this.set_titletext("시험항목 선택");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ODR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_GDS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"GROUP_ID\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ID\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_KEY\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REF1\" type=\"STRING\" size=\"255\"/><Column id=\"REF2\" type=\"STRING\" size=\"255\"/><Column id=\"REF3\" type=\"STRING\" size=\"255\"/><Column id=\"REF4\" type=\"STRING\" size=\"255\"/><Column id=\"REF5\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"CODE_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"196\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"시험항목\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"center\" edittype=\"checkbox\" suppress=\"0\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:TEST_DIV_NM\" textAlign=\"center\" edittype=\"none\" suppress=\"0\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:TEST_ITEM_NM\" textAlign=\"left\" edittype=\"none\" suppress=\"0\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01_01","0",null,null,"20","0","43",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,null,"57","23","btnCancel:3","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTitle.set_taborder("1");
                p.staTitle.set_text("");
                p.staTitle.set_cssclass("sta_WF_title02");
                p.staTitle.move("0","0",null,"21","0",null);

                p.gridMain.set_taborder("1");
                p.gridMain.set_autofittype("col");
                p.gridMain.set_binddataset("dsList");
                p.gridMain.move("0","26",null,null,"0","0");
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdList.set_taborder("0");
                p.grdList.set_autofittype("col");
                p.grdList.set_oncelldblclick("divSearch_grdList_oncelldblclick");
                p.grdList.set_binddataset("dsProgramCd");
                p.grdList.move("10","79",null,"350","10",null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",500,680,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PLN010P03.xfdl", function() {
        /**
        *  시험항목선택
        *
        *  @MenuPath    계획관리 > 안전성조사계획 > 시험항목 > 시험항목선택 팝업
        *  @FileName    PLN010P03.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.03.07
        *  @Version     1.0
        *  @Desction    시험항목선택 팝업
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.03.07      doore              최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_sOdrId = take.nvl(this.parent.sOdrId, "");
        this.fv_sDetailGdsId = take.nvl(this.parent.sDetailGdsId, "");
        this.fv_sTitle = take.nvl(this.parent.sTitle, "");

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
        		// 세부품목명 세팅
        		this.divDetail.form.staTitle.set_text(this.fv_sTitle);
        		// 적용일자 조회 :
        		this.fnSearch();
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

        	this.dsSearch.setColumn(0, "DETAIL_GDS_ID", this.fv_sDetailGdsId);
        	this.dsSearch.setColumn(0, "ODR_ID", this.fv_sOdrId);
        	this.dsList.clearData();

            take.tranSelect(this, "Search", "safety.odrTestGrpALLSelect", "dsSearch", "dsList", "", "fnCallback");
        }

        /**

         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {

        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function()
        {
        	var sTranId = "Save";
        	//데이터셋 수정 여부 확인
        	if (!take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        	this.dsList.set_updatecontrol(false);
        	for(var i = 0; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getRowType(i) == 4)
        		{
        			if(this.dsList.getColumn(i, "CHK")) this.dsList.setRowType(i, "I");
        			else this.dsList.setRowType(i, "D");
        		}
        	}
        	this.dsList.set_updatecontrol(true);

        	var sParam = "sNameSpace=safety.odrTestDetailGdsInsert|safety.odrTestUpdate|safety.odrTestDetailGdsDelete"
        			   + " sDataset=dsList";

        	take.transaction(this, sTranId, "SVC_LOC::doore/saveList.do", "dsList=dsList:U", "", sParam, "fnCallback");
        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {N/A} N/A
         * @return {N/A} N/A
         */
        this.fnDelRow = function()
        {

        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /* 닫기 버튼 클릭 이벤트 */
        this.fnClose = function()
        {
        	this.close();
        }

        /* 그리드 해더 클릭 시 전체선택, 전체해제 처리 */
        this.divDetail_gridMain_onheadclick = function(obj,e)
        {
        	if (e.col == 0) {
        		gFnClickHeadCheckBox(obj, "CHK");
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
                case "Save" : //저장 콜백
        			alert("저장되었습니다.");
        			this.fnClose();
        			break;
                case "Search" :  //조회 콜백
                    break;
                default :
                    break;
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divDetail.form.gridMain.addEventHandler("onexpandup",this.divDetail_gridMain_onexpandup,this);
            this.divDetail.form.gridMain.addEventHandler("onheadclick",this.divDetail_gridMain_onheadclick,this);
            this.btnCancel.addEventHandler("onclick",this.fnClose,this);
            this.btnEnter.addEventHandler("onclick",this.fnSave,this);
        };
        this.loadIncludeScript("PLN010P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
