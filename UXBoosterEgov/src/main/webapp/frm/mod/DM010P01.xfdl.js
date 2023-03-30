(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DM010P01");
            this.set_titletext("새폴더 등록");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,183);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFolder", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_ATTACH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFolder2", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_ENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_ATTACH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileId", this);
            obj._setContents("<ColumnInfo><Column id=\"ATCHFILEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCHFILEIDTYPECD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","20","380","153",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","10","50","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staParentNm","108","50",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staName","10","80","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("새폴더명");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","108","80",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFolderNm","115","84",null,"23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","46","21","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtParentCd","309","54",null,"23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staEngName","10","110","100","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("새폴더영문명");
            obj.set_cssclass("sta_WF_th01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","108","110",null,"31","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFolderEngNm","115","114",null,"23","16",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_imemode("alpha");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","46","21","btnSave:3",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_cancel02");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","10","26",null,"21","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("폴더 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,183,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtParentCd","value","dsFolder","PARENT_FOLDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtFolderNm","value","dsFolder","FOLDER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtFolderEngNm","value","dsFolder","FOLDER_ENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DM010P01.xfdl", function() {
        /**
        *  새폴더등록
        *
        *  @MenuPath    문서관리 > 새폴더등록
        *  @FileName    DM010P01.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.10.10
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.10.10      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;

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
            if (take.nvl(sTranId, "")=="") sTranId = "docFolderInfo";

            switch(sTranId)
            {
                case "docFolderInfo" :  //폴더검색
                    var objParent = this.parent;
                    var sParam = "PROJECT_CD='" + objParent.sProjectCd + "' MENU_CD='" + objParent.sMenuCd + "' DOCUMENT_SEQ='" + objParent.sDocSeq + "'";

                    take.tranSelect(this, sTranId, "DocumentManagement.documentFolderInfo", "", "dsFolder", sParam, "fnCallback");
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 저장버튼 클릭
        this.divSearch_btnSave_onclick = function(obj,e)
        {
            if(this.fnCheckForm()) {
                var sTranId, sConfirm;

                if (this.divSearch.form.btnSave.text == "저장") {
                    sTranId = "FolderAdd";
                    sConfirm = "새폴더를 생성하시겠습니까?";
                } else {    //수정
                	sTranId = "Modify";
                    sConfirm = "폴더를 수정하시겠습니까?";
                }

                if (take.confirm(this, "question", sConfirm)){
                    //take.tranSave(this, sTranId, "DocumentManagement.documentInfo", "dsFolder", "", "", "fnCallback");
                    take.transaction(this, sTranId, "SVC_LOC::dm/documentSave.do", "dsFolder=dsFolder:U", "", "", "fnCallback");
                }
            }
        };

        //삭제버튼
        this.divSearch_btnDelete_onclick = function(obj,e)
        {
            if (take.confirm(this, "question", "해당 폴더를 삭제하시겠습니까?")){
                var objDs = this.dsFolder;
                var objDs2 = this.dsFolder2;
                objDs2.copyData(objDs);

                objDs.set_enableevent(false);
                objDs.set_updatecontrol(false);
                objDs.setRowType(0, "D");
                objDs.set_updatecontrol(true);
                objDs.set_enableevent(true);

                var sParam = "_sessionUserCd='" + this.fv_objGdsUserInfo.getColumn(0, "USER_CD") + "' ATTACH_CD='" + objDs.getColumn(0,"DOCUMENT_ATTACH") + "'";

        //         take.tranSave(this, "attDel", "SystemCommon.attachInfoFile", "dsFolder", "", sParam, function()
        //         {
        //             objDs2.set_enableevent(false);
        //             objDs2.set_updatecontrol(false);
        //             objDs2.setRowType(0, "D");
        //             objDs2.set_updatecontrol(true);
        //             objDs2.set_enableevent(true);
        //             take.tranSave(this, "Delete", "DocumentManagement.documentInfo", "dsFolder2", "", sParam, "fnCallback");
        //         });

                take.transaction(this, "attDel", "SVC_LOC::sc/attachInfoFileSave.do", "dsFolder=dsFolder:U", "", sParam, function()
                {
                    objDs2.set_enableevent(false);
                    objDs2.set_updatecontrol(false);
                    objDs2.setRowType(0, "D");
                    objDs2.set_updatecontrol(true);
                    objDs2.set_enableevent(true);
                    take.transaction(this, "Delete", "SVC_LOC::dm/documentSave.do", "dsFolder=dsFolder2:U", "", sParam, "fnCallback");
                });
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

            if (take.nvl(this.parent.sFNm, "")=="") {
                //폴더 수정
                objDivSearch.btnSave.set_text("수정");
                objDivSearch.staName.set_text("폴더명");
                objDivSearch.staEngName.set_text("폴더영문명");
                objDivSearch.staParentNm.set_text(this.parent.sParentNm);   // 부모폴더
                objDivSearch.edtFolderNm.setFocus();

                this.fnSearch("docFolderInfo");
            } else {
                //새폴더
                this.fnSetData();

                objDivSearch.btnDelete.set_visible(false);
                objDivSearch.staParentNm.set_text(this.parent.sFNm);        // 현재 폴더
                objDivSearch.edtFolderNm.setFocus();
            }
        }

        /**
         * fnCheckForm : 저장전 유효성 체크
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnCheckForm = function()
        {
            var objDivSearch = this.divSearch.form;
            var sName   = take.nvl(objDivSearch.edtFolderNm.text, "");
            var sEngName   = take.nvl(objDivSearch.edtFolderEngNm.text, "");

            if(sName == ""){
                take.alert(this, "Info", "폴더명을 작성해주세요.");
                objDivSearch.edtFolderNm.setFocus();
                return false;
            } else {
                if(take.getByteLength(sName) > 50){
                    take.alert(this, "Info", "폴더명을 15자 내외로 작성해주세요.");
                    objDivSearch.edtFolderNm.setFocus();
                    return false;
                }
            }

            if(this.opener.dsDocumentGroup.findRow("FOLDER_NM", sName) != -1)
            {
                take.alert(this, "Info", "폴더명을 확인해주세요.\n동일한 폴더명이 존재합니다.");
                objDivSearch.edtFolderNm.setFocus();
                return false;
            }

            if(sEngName != "" && take.getByteLength(sEngName) > 150){
                take.alert(this, "Info", "폴더영문명이 최대길이를 초과했습니다.\n확인해주세요.");
                objDivSearch.edtFolderEngNm.setFocus();
                return false;
            }

            return true;
        }

        /**
         * fnSetData : 데이터 입력
         * @param  {String} sParam N/A
         * @example this.fnCheckForm();
         */
        this.fnSetData = function()
        {
            var objDsFolder = this.dsFolder;
            //dsFolder set
            objDsFolder.clearData();
            objDsFolder.addRow();

            objDsFolder.setColumn(0,"PROJECT_CD",      this.fv_sProjectCd);
            objDsFolder.setColumn(0,"MENU_CD",         this.opener.ProgId);
            objDsFolder.setColumn(0,"FOLDER_NM",       this.divSearch.form.edtFolderNm.text);
            objDsFolder.setColumn(0,"FOLDER_ENG_NM",   this.divSearch.form.edtFolderEngNm.text);
            objDsFolder.setColumn(0,"PARENT_FOLDER",   this.parent.sSeq);

            var sAttachCd = objDsFolder.getColumn(objDsFolder.rowposition, "DOCUMENT_ATTACH");

            if(take.nvl(sAttachCd, "") == ""){
                var sTranId = "getAtchFileId";
                var sUrl	= "SVC_LOC::file/getAtchFileId.do";
                var inDs	= "";
                var outDs	= "dsAtchFileId=dsAtchFileId";
                var params	= "atchFileTypeCd='DOC'";

                take.transaction(
                    this, sTranId, sUrl, inDs, outDs, params,
                    function(sId, nErrCd, sErrMsg){
                        if(this.dsAtchFileId.getRowCount() > 0){
                            var atchilFileId = this.dsAtchFileId.getColumn(0, 'ATCHFILEID');
                            objDsFolder.setColumn(objDsFolder.rowposition, "DOCUMENT_ATTACH", atchilFileId);
                        }
                    }
                );
            }

        }

        // 팝업닫기 -> 사용자지정 팝업콜백함수
        this.fnGoList = function()
        {
        	this.opener.fnPopCallback("DM010P01");
        	this.close();
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
                case "FolderAdd" :  //저장 콜백
                    take.alert(this, "Info", "새폴더 생성이 정상 처리 되었습니다.");
                    this.fnGoList();
                    break;
                case "Modify" :  //저장 콜백
                    take.alert(this, "Info", "폴더 수정이 정상 처리 되었습니다.");
                    this.fnGoList();
                    break;
                case "Delete" :  //저장 콜백
                    take.alert(this, "Info", "폴더 삭제가 정상 처리 되었습니다.");
                    this.fnGoList();
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
            this.divSearch.form.btnSave.addEventHandler("onclick",this.divSearch_btnSave_onclick,this);
            this.divSearch.form.btnDelete.addEventHandler("onclick",this.divSearch_btnDelete_onclick,this);
        };
        this.loadIncludeScript("DM010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
