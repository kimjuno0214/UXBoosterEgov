(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFileSingle");
            this.set_titletext("ATTACH_INFO(SINGLE)");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnFileDel",null,"0","70","21","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일삭제");
            obj.set_cssclass("btn_WF_cancel02");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileAdd",null,"0","70","21","btnFileDel:2",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일추가");
            obj.set_cssclass("btn_WF_plus01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFile","0","0",null,"21","btnFileAdd:2",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Div("divComFile","78","40","452",null,null,"-165",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("frm::com/comFileSYS.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divComFile
            obj = new Layout("default","",0,0,this.divComFile.form,function(p){});
            this.divComFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",530,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comFileSYS.xfdl");
        };
        
        // User Script
        this.registerScript("comFileSingle.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    -
         *  @FileName    comFileSingle.xfdl
         *  @Creator     정해원
         *  @CreateDate  2020.09.23
         *  @Version     1.0
         *  @Desction    첨부파일공통(일반) - ATTACH_INFO와 연동
         *
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2020.09.23      정해원             최초 생성
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        	this.fv_divFile;
        	this.fv_atchFileTypeCd;
        	this.fv_blob;
        	this.fv_objDs;
        	this.fv_sColumnId;
        	this.fv_objViewer;
        	this.fv_maxLength = -1; 				//업로드파일크기제한 KByte 기준(size / 1024 / 1024 ==> MByte)

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.comFileSingle_onload = function(obj, e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		this.fnInit();
        	}
        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        this.fnInit = function(){
        	//userproperty 로드
        	var sTakefile = this.parent.takefile;
        	if(take.isEmpty(sTakefile) || sTakefile == "false"){
        		return;
        	}

        	this.fnInitTakefile(sTakefile);
        };

        this.fnInitTakefile = function(sTakefile){
        	var objTakefile = null;
        	if (take.isObject(sTakefile)){
                objTakefile = sTakefile;
            } else {
                objTakefile = take.StringToObject(sTakefile);
                this.takefile = objTakefile;
            }

        	//추가,삭제 버튼 노출여부
        	if (objTakefile.hasOwnProperty("addDelBtnEnable")) {
                this.fn_setAddDelBtnEnable(objTakefile.addDelBtnEnable);
            }

        	//파일타입 공통코드
        	if (objTakefile.hasOwnProperty("atchFileTypeCd")) {
                this.fn_setAtchFileTypeCd(objTakefile.atchFileTypeCd);
            }

        	//파일용량 제한
        	if (objTakefile.hasOwnProperty("maxLength")) {
                this.fn_setMaxLength(objTakefile.maxLength);
            }

        	this.fnInitComponent(this);
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        	/**
        	 * 파일첨부 버튼
        	 */
        	this.btnFileAdd_onclick = function(obj,e){
        		this.fv_blob = null;
        		var objThis = this;
        		this.fv_divFile.fn_browseFile(objThis,
        			function(rtnValue){
        				if(rtnValue.result){
        					var resultData = rtnValue.resultData;
        					objThis.edtFile.set_value(resultData.fileName);
        					if( nexacro._Browser == "Runtime" ){
        						objThis.alert('runtime에서 미리보기가 되지 않고 있음');
        						objThis.fv_blob = "data:image/png;base64," + resultData.fileBlob;
        						objThis.fn_setBlobData();
        					} else {
        						var objFile = objThis.fv_divFile.fileDialog._handle.ownerDocument.getElementById(objThis.fv_divFile.fileDialog._handle.id);
        						if(objFile.files.length > 0){
        							//로드
        							var reader = new FileReader();
        							reader.readAsDataURL(objFile.files[0]);

        							//로드 후
        							reader.onload = function(){
        								objThis.fv_blob = reader.result;
        								objThis.fn_setBlobData();
        							};
        						}
        					}
        				}
        			}
        		);
        	};

        	/**
        	 * 파일삭제 버튼
        	 */
        	this.btnFileDel_onclick = function(obj,e)
        	{
        		var objThis = this;
        		this.fv_divFile.fn_deleteFileRow(objThis, 0, function(rtnValue){
        			if(!rtnValue.result){
        				take.alert(this, "error", rtnValue.resultMessage);
        			}else{
        				objThis.edtFile.set_value(null);
        				if(!take.isEmpty(objThis.fv_objViewer)) {
        					objThis.fv_objViewer.set_image(null);
        				}
        			}
        		});
        	};

        	/**
        	 * 파일다운로드
        	 */
        	this.edtFile_oneditclick = function(obj,e)
        	{
        		if(this.fv_divFile.dsFile.getRowCount() > 0)
        			this.fv_divFile.fn_downloadFile(0);
        	};

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        	/*
        	 * 첨부파일 초기화
        	 */
        	this.fnInitComponent = function(objThis){
        		// 첨부파일 활성화
        		this.fv_divFile = this.divComFile.form;
        		this.fv_divFile.fn_setAtchFileTypeCd(this.fn_getAtchFileTypeCd());
        		this.fv_divFile.fv_isGrid = false;	//싱글모드
        		this.fv_divFile.fn_setSingle(true);	//첨부파일 단일선택 모드
        		this.fv_divFile.fn_setMaxLength(this.fn_getMaxLength());	//용량제한
        		this.fv_divFile.fnInitComponent(objThis);
        	};

        	this.fn_setAtchFileTypeCd = function(sTypeCd){
        		this.fv_atchFileTypeCd = sTypeCd;
        	};
        	this.fn_getAtchFileTypeCd = function(){
        		return this.fv_atchFileTypeCd;
        	};

        	//파일추가/삭제 버튼 활성화 / 비활성화
        	this.fn_setAddDelBtnEnable = function(isEnable){
        		if(!this.btnFileAdd.preWidth)
        			this.btnFileAdd.preWidth = this.btnFileAdd.width;
        		if(!this.btnFileDel.preWidth)
        			this.btnFileDel.preWidth = this.btnFileDel.width;

        		this.btnFileAdd.set_width(isEnable ? this.btnFileAdd.preWidth : 0);
        		this.btnFileDel.set_width(isEnable ? this.btnFileDel.preWidth : 0);

        		this.resetScroll();
        	};

        	//첨부파일ID세팅
        	this.fn_setAtchFileId = function(sAtchFileId){
        		this.fv_divFile.fn_setAtchFileId(sAtchFileId);
        	};

        	this.fnSearchAtchFileId = function(pThis, fnCallback){
        		this.fv_divFile.fnSearchAtchFileId(pThis, fnCallback);
        	};

        	//첨부파일ID로 정보조회
        	this.fnSearchFileList = function(fnCallBack){
        		var objThis = this;
        		this.fv_divFile.fnSearchFileList(objThis,
        			function(rtnValue){
        				if(!take.isEmpty(objThis.fv_objViewer)) {
        					objThis.fv_objViewer.set_image(objThis.fn_getDownloadUrl());
        				}
        				objThis.edtFile.set_value(objThis.fv_divFile.dsFile.getColumn(0, "FILE_NM"));
        			}
        		);
        	}

        	this.fn_isUpdate = function(){
        		return this.fv_divFile.fn_isUpdate();
        	};

        	this.fnUploadSaveFileList = function(pThis, fnCallback){
        		this.fv_divFile.fnUploadSaveFileList(pThis, fnCallback);
        	};

        	//업로드파일크기제한
        	this.fn_setMaxLength = function(nMaxLength){
        		this.fv_maxLength = nMaxLength;
        	};

        	this.fn_getMaxLength = function(){
        		return this.fv_maxLength;
        	};

        	this.fn_setImageViewerDataset = function(objDs, sColumnId){
        		this.fv_objDs = objDs;
        		this.fv_sColumnId = sColumnId;
        	};

        	this.fn_setImageViewer = function(objViewer){
        		this.fv_objViewer = objViewer;
        	};

        	this.fn_setBlobData = function(){
        		if(!take.isEmpty(this.fv_objDs)) {
        			this.fv_objDs.setColumn(this.fv_objDs.rowposition, this.fv_sColumnId, this.fv_blob);
        		}

        		if(!take.isEmpty(this.fv_objViewer)) {
        			this.fv_objViewer.set_image(this.fv_blob);
        		}
        	};

        	this.fn_getDownloadUrl = function(){
        		var atchFileId 	= this.fv_divFile.dsFile.getColumn(0, "ATTACH_CD");
        		var fileSeq 	= this.fv_divFile.dsFile.getColumn(0, "FILE_SEQ");
        		var downloadUrl = this.fv_divFile.fn_getDownloadUrl();

        		return downloadUrl + "?atchFileId=" + atchFileId + "&fileSeq=" + fileSeq;
        	};
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comFileSingle_onload,this);
            this.btnFileDel.addEventHandler("onclick",this.btnFileDel_onclick,this);
            this.btnFileAdd.addEventHandler("onclick",this.btnFileAdd_onclick,this);
            this.edtFile.addEventHandler("oneditclick",this.edtFile_oneditclick,this);
        };
        this.loadIncludeScript("comFileSingle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
