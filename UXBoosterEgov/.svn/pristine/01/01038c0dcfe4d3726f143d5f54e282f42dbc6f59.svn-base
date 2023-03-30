(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MM010");
            this.set_titletext("메모관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMemo", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","10","63",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","30","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("메모 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1030","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new ListView("livMemo","10","120",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMemo");
            obj.set_cssclass("lst_WF_reply");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"126\"><Cell id=\"liv_staRegNm\" left=\"10\" top=\"10\" width=\"80\" height=\"23\" text=\"bind:REG_NM\"/><Cell id=\"liv_staRegDt\" left=\"89\" top=\"10\" width=\"110\" height=\"23\" text=\"bind:REG_DT\"/><Cell id=\"liv_txtMemo\" left=\"10\" top=\"35\" height=\"80\" text=\"bind:MEMO_TXT\" right=\"10\" displaytype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;textareacontrol&apos; : &apos;normal&apos; \" edittype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;textarea&apos; : &apos;none&apos; \"/><Cell id=\"liv_btnDel\" top=\"10\" width=\"60\" height=\"23\" text=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;삭제&apos; : &apos;&apos;\" right=\"10\" displaytype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;buttoncontrol&apos; : &apos;none&apos;\" edittype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;button&apos; : &apos;none&apos;\"/><Cell id=\"liv_btnMod\" top=\"10\" width=\"60\" height=\"23\" text=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;수정&apos; : &apos;&apos;\" right=\"75\" displaytype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;buttoncontrol&apos; : &apos;none&apos; \" edittype=\"expr:(REG_CD == nexacro.getApplication().gdsUserInfo.getColumn(0, &quot;USER_CD&quot;)) ? &apos;button&apos; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("taMemoTxt","10","10",null,"80","90",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnMemoReg",null,"10","80","80","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

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
        this.registerScript("MM010.xfdl", function() {
        /**
        *  메모관리
        *
        *  @MenuPath    게시판 > 메모관리
        *  @FileName    MM010.xfdl
        *  @Creator     천우성
        *  @CreateDate  2020.01.27
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.01.27      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.MM010_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		var objProgInfo = take.getProgInfo(this);
        		this.fv_sMenuCd = objProgInfo.ProgId;
        		this.fv_arrUserParam = objProgInfo.UserParam;
        		var objParam = objProgInfo.UserParam;
        		//alert("!@!@>> template_cd2:   " + objParam.template_cd);

        		this.fnSearch();
           }
        }

        /*********************************************************
         * 2.1 CALLBACK 콜백 처리부분
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

        	trace( this.dsMemo.saveXML() );

            switch(sId)
            {
        		case "Search" :
        			//trace("!@!@>> dsTemplate:  " + this.dsTemplate.saveXML());
        			break;
        		case "Save" : //메모 등록 콜백
        			take.alert(this, "", "메모 등록이 완료되었습니다.");

        			this.taMemoTxt.set_value("");
        			this.fnSearch();

        			break;
        		case "Delete" : //메모 삭제 콜백
        			take.alert(this, "", "메모 삭제가 완료되었습니다.");
        			this.fnSearch();

        			break;
        		case "Modify" : //메모 수정 콜백
        			take.alert(this, "", "메모 수정이 완료되었습니다.");
        			this.fnSearch();
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAdd, fnDelRow)
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

        	this.dsSearch.clearData();
        	this.dsMemo.clearData();

        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "PROJECT_CD", this.fv_sProjectCd);
        	this.dsSearch.setColumn(nRow, "MENU_CD", this.fv_sMenuCd);

            take.tranSelect(this, "Search"
        					, "BoardManagement.memoList"
        					, "dsSearch"
        					, "dsMemo"
        					, ""
        					, "fnCallback");
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

            //take.tranSave(this, sTranId, "BoardManagement.memo", "dsMemo", "", "", "fnCallback");
            take.transaction(this, sTranId, "SVC_LOC::cm/memoSave.do", "dsMemo=dsMemo:U", "", "", "fnCallback");
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
        * divDetail_gridMain_oncelldblclick : 메인 그리드 cell 더블클릭
        */

        this.divReplyReg_btnReplyReg_onclick = function(obj,e)
        {
        	var nRow = this.dsMemo.addRow();
        	this.dsMemo.setColumn(nRow, "PROJECT_CD", this.fv_sProjectCd);
        	this.dsMemo.setColumn(nRow, "MENU_CD", this.fv_sMenuCd);
        	this.dsMemo.setColumn(nRow, "MEMO_TXT", this.taMemoTxt.text);

        	this.fnSave('Save');
        };

        this.livMemo_oncellclick = function(obj,e)
        {
        	var nRow = obj.getSelectedRows();
        	var sCellTxt = obj.getCellText(nRow, "body", e.cellid);
        	if(sCellTxt == "삭제")
        	{
        		trace(nRow + "  삭제");
        		var bDel = take.confirm(this, "", "해당 메모를 삭제하시겠습니까?");
        		if(bDel)
        		{
        			this.dsMemo.deleteRow(nRow);
        			this.fnSave('Delete');
        		}
        	}
        	else if(sCellTxt == "수정")
        	{
        		trace(nRow + "  수정");
        		this.fnSave('Modify');
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.MM010_onload,this);
            this.livMemo.addEventHandler("oncellclick",this.livMemo_oncellclick,this);
            this.btnMemoReg.addEventHandler("onclick",this.divReplyReg_btnReplyReg_onclick,this);
        };
        this.loadIncludeScript("MM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
