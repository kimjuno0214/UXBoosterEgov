(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFileSYS");
            this.set_titletext("ATTACH_INFO");
            if (Form == this.constructor)
            {
                this._setFormPosition(630,175);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FILE_TYPE\">100</Col><Col id=\"FILE_TYPE_NM\">성적서</Col></Row><Row><Col id=\"FILE_TYPE\">101</Col><Col id=\"FILE_TYPE_NM\">제품사진1</Col></Row><Row><Col id=\"FILE_TYPE\">102</Col><Col id=\"FILE_TYPE_NM\">제품사진2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileId", this);
            obj._setContents("<ColumnInfo><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileTypeCd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileTypeCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fileDialog", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fileUpTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTransfer", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("zipFileDownTransfer", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnFileDel",null,"6","70","21","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_cancel02");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileAdd",null,"6","70","21","btnFileDel:3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_plus01");
            this.addChild(obj.name, obj);

            obj = new Button("btnFilleSave",null,"6","46","21","btnFileDel:76",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_save02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFile","0","32",null,null,"0","6",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_autoenter("select");
            obj.set_nodataimage("url(\'theme://images/btn_normal_N.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"104\"/><Column size=\"500\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" border=\"0px none,0px none,1px solid #afb8cf\"/><Cell col=\"1\" text=\"파일구분\" border=\"0px none,0px none,1px solid #afb8cf\"/><Cell col=\"2\" text=\"파일명\" border=\"0px none,0px none,1px solid #afb8cf\"/><Cell col=\"3\" text=\"파일크기(KB)\" border=\"0px none,0px none,1px solid #afb8cf\"/><Cell col=\"4\" text=\"등록일\" border=\"0px none,0px none,1px solid #afb8cf\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" border=\"0px none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsAtchFileTypeCd\" combocodecol=\"CODE\" combodatacol=\"NAME\" text=\"bind:FILE_TYPE_NM\" border=\"0px none\"/><Cell col=\"2\" text=\"bind:FILE_NM\" cursor=\"pointer\" color=\"blue\" border=\"0px none\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" displaytype=\"number\" textAlign=\"right\" border=\"0px none\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:REG_DT\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" calendardisplaynulltype=\"none\" border=\"0px none\"/></Band><Band id=\"summary\"><Cell border=\"1px solid #afb8cf,0px none,\"/><Cell col=\"1\" text=\"다운로드\" cursor=\"pointer\" border=\"1px solid #afb8cf,0px none,\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"2px 10px\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;nexacro.toNumber(FILE_SIZE)&quot;)\" border=\"1px solid #afb8cf,0px none,\"/><Cell col=\"4\" text=\"다운로드\" cursor=\"pointer\" border=\"1px solid #afb8cf,0px none,\" displaytype=\"buttoncontrol\" edittype=\"button\" padding=\"2px 10px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comFileSYS_copy0.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    -
         *  @FileName    comFileSYS.xfdl
         *  @Creator     정해원
         *  @CreateDate  2019.12.19
         *  @Version     1.0
         *  @Desction    첨부파일공통(일반) - ATTACH_INFO와 연동
         *
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2019.12.19      정해원             최초 생성
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objForm;									//부모frame 세팅
        this.fv_atchFileId = "AF00000050";		//첨부파일ID
        this.fv_isDirectUpload = false;				//바로업로드여부
        this.fv_isDirectDelete = false;				//바로삭제여부
        this.fv_atchFileCommCd = "00007"; 		//공통코드(첨부파일유형), 다른코드로 대체가능
        this.fv_atchFileTypeCd = ""; 				//첨부파일유형
        this.fv_atchFileTypeCdDefault = "06";	//첨부파일유형(06:기타)
        this.fv_isVisibleTypeCd = false;			//파일구분코드 노출여부
        this.fv_typeCdFilter = "";						//특정파일구분코드의 row만 노출(filtering) .fn_setTypeCdFilter('ETC1,ETC2']);
        this.fv_isReadOnly = false;					//읽기전용여부
        this.fv_isSingle = false;						//(탐색기에서)단일파일,멀티파일 선택가능여부
        this.fv_uploadUrl;								//업로드url설정
        this.fv_downloadUrl;							//다운로드url설정
        this.fv_objParams;								//업무에필요한 추가파라미터 세팅
        this.fv_restirctExtNames;						//확장자제한대상('doc,ppt,txt,gif,jpeg')
        this.fv_maxLength = -1; 						//업로드파일크기제한 KByte 기준(size * 1024 ==> KByte)
        this.fv_callback;									//업무화면으로의 콜백처리(파일추가시,파일삭제시,파일저장시)
        this.fv_localCallback;							//내부화면으로의 콜백처리(파일추가시,파일삭제시,파일저장시)
        this.fv_isGrid = true;							//그리드모드(true[atchFileId:파일 = 1:N], false[(atchFileId:파일 = 1:1]) -> 네이밍 변경필요
        this.fv_blob;										//현재 추가된 파일의 BLOB(이미지 미리보기용)

        this.fv_gridScroll = false;						//그리드 스크롤 전파 중지

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.form_onload = function(obj, e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		//this.fnInit();
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

        	//탐색기 단일선택 모드, 다중선택모드 구분
        	if (objTakefile.hasOwnProperty("isSingle")) {
                this.fn_setSingle(objTakefile.isSingle);
            }

        	//파일구분 노출여부
        	if (objTakefile.hasOwnProperty("isVisibleTypeCd")) {
                this.fn_setVisibleTypeCd(objTakefile.isVisibleTypeCd);
            }

        	//추가,삭제 버튼 노출여부
        	if (objTakefile.hasOwnProperty("addDelBtnEnable")) {
                this.fn_setAddDelBtnEnable(objTakefile.addDelBtnEnable);
            }

        	//저장 버튼 노출여부
        	if (objTakefile.hasOwnProperty("saveBtnEnable")) {
                this.fn_setSaveBtnEnable(objTakefile.saveBtnEnable);
            }

        	//파일타입 공통코드
        	if (objTakefile.hasOwnProperty("atchFileTypeCd")) {
                this.fn_setAtchFileTypeCd(objTakefile.atchFileTypeCd);
            }

        	//파일용량 제한
        	if (objTakefile.hasOwnProperty("maxLength")) {
                this.fn_setMaxLength(objTakefile.maxLength);
            }

        	this.fnInitComponent();
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        /**
         * 파일첨부 버튼
         */
        this.btnFileAdd_onclick = function(obj,e)
        {
        	this.fn_browseFile(this, function(rtnValue){
        		if(rtnValue.result){
        			if(this.fn_getDirectUpload()){
        				//첨부 후 바로 업로드 처리일 경우
         				this.fnUploadSaveFileList(function(rtnValue){
        					if(!rtnValue.result){
        						take.alert(pThis, "error", rtnValue.resultMessage);
        					}
         				});
        			}
        		}
        	});
        };

        /**
         * 파일삭제 버튼
         */
        this.btnFileDel_onclick = function(obj,e)
        {
        	this.fn_deleteFile(this, function(rtnValue){
        		if(!rtnValue.result){
        			take.alert(this, "error", rtnValue.resultMessage);
        		}
        	});
        };

        /**
         * 저장 버튼
         */
        this.btnFilleSave_onclick = function(obj,e)
        {
        	if(!this.fn_isUpdate()){
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	//파일 업로드 / 저장
        	this.fnUploadSaveFileList(this, function(rtnValue){
        		if(!rtnValue.result){
        			take.alert(this, "error", rtnValue.resultMessage);
        		}
        	});
        };

        /**
         * 그리드 클릭 이벤트
         */
        this.grdFile_oncelldblclick = function(obj, e)
        {
        	var bindName = take.getBindColName(obj, e.cell);
        	if(bindName == "FILE_NM"){
        		//첨부파일 클릭 시 다운로드
        		this.fn_downloadFile(e.row);
        	}
        };

        /**
         * 그리드 클릭 이벤트
         */
        this.grdFile_oncellclick = function(obj, e)
        {
        	var sBindName = take.getBindColName(obj, e.cell);
        	if(sBindName == "FILE_TYPE"){
        		obj.dropdownCombo();
        	} else if(sBindName == "CHK") {
        		if(obj.getBindDataset().findRow("CHK", "0") > -1){
        			obj.setCellProperty("Head", e.cell, "text", "0");
        		}else{
        			obj.setCellProperty("Head", e.cell, "text", "1");
        		}
        	}
        };

        /**
         * 그리드 드래그&드랍 이벤트
         */
        this.grdFile_ondrop = function(obj,e)
        {
        	if(!this.fn_getReadOnly()){
        		//읽기전용이 아닐 경우
        		if(e.filelist){
        			var filelist 	= e.filelist;
        			var nOrgFileCnt = this.dsFile.rowcount;
        			var nAddFileCnt = filelist.length;

        			for (var i = 0, len = filelist.length, vFile; i < len; i++)
        			{
        				vFile = filelist[i];
        				vFile.addEventHandler("onsuccess"	, this.virtualFile_onsuccess, this );
        				vFile.addEventHandler("onerror"		, function(obj, e)
        													  {
        														  var rtnValue = new Object();
        															  rtnValue.sid 			 = 'OPENFILE';
        															  rtnValue.result 		 = false;
        															  rtnValue.resultMessage = "파일 로드 실패 - " + e.errormsg;

        														  this.fn_CallBack(rtnValue);
        													  }
        													, this);

        				vFile.open(null, nexacro.VirtualFile.openBinary);
        			}
        		}
        	}
        };

        /**
         * 그리드 헤더 클릭
         */
        this.grdFile_onheadclick = function(obj,e)
        {
        	//전체선택
        	take.fnGridCheckAll(obj, e.col, 'CHK');
        	//gFnClickHeadCheckBox(obj, "CHK");
        };

        /**
         * 그리드 선택 다운로드
         */
        this.grdFile_onsummaryclick = function(obj,e)
        {
        	if(e.col == 4){
        		var arrChkRow = gFnClickHeadCheckBox(obj, "CHK");
        		if(arrChkRow.length == 0){
        			take.alert(this, "Info", "선택된 항목이 없습니다.");
        			return;
        		}

        		var fileSeqs = [];
        		for (var i=0; i < arrChkRow.length ; i++){
        			if (this.dsFile.getRowType(arrChkRow[i]) == Dataset.ROWTYPE_INSERT) {
        				take.alert(this, "error", "Upload 되지 않은 파일입니다. 다운로드 할 수 없습니다.");
        				return;
        			}

        			var fileSeq = this.dsFile.getColumn(arrChkRow[i], 'FILE_SEQ');
        			fileSeqs.push(fileSeq);
        		}

        		var downloadUrl = take.getSvcUrl() + "file/downloadZipAtchFile.do";
        		this.zipFileDownTransfer.setPostData("atchFileId" 	, this.fn_getAtchFileId());
        		this.zipFileDownTransfer.setPostData("fileSeq"  	, fileSeqs.join(','));
        		this.zipFileDownTransfer.set_url(downloadUrl);
        		this.zipFileDownTransfer.download();
        	}
        };

        /**
         * 그리드 스크롤 전파 중지
         */
        this.grdFile_onvscroll = function(obj,e)
        {
        	this.fv_gridScroll = true;
        };

        /**
         * 그리드 스크롤 전파 중지
         */
        this.grdFile_onmouseleave = function(obj,e)
        {
        	this.fv_gridScroll = false;
        };

        /**
         * 그리드 스크롤 전파 중지
         */
        this.comFileSYS_onmousewheel = function(obj,e)
        {
        	return this.fv_gridScroll;
        };

        /**
         * FileDialog close 이벤트
         */
        this.fileDialog_onclose = function(obj,e)
        {
        	if( FileDialog.MULTILOAD == e.reason || FileDialog.LOAD == e.reason )
        	{
        		var filelist 	= e.virtualfiles;
        		var nOrgFileCnt = this.dsFile.rowcount;
        		var nAddFileCnt = filelist.length;

        		for (var i = 0, len = filelist.length, vFile; i < len; i++)
        		{
        			vFile = filelist[i];
        			vFile.addEventHandler("onsuccess"	, this.virtualFile_onsuccess, this );
        			vFile.addEventHandler("onerror"		, function(obj, e)
        												  {
        													  console.log("errortype: "	+ e.errortype);
        													  console.log("errormsg: "	+ e.errormsg);
        													  console.log("statuscode: "+ e.statuscode);

        													  var rtnValue = new Object();
        													  	  rtnValue.sid 			 = 'OPENFILE';
        														  rtnValue.result 		 = false;
        														  rtnValue.resultMessage = "파일 로드 실패 - " + e.errormsg;

        													  this.fn_CallBack(rtnValue);
        												  }
        												, this);

        			//210407 정해원 마지막 파일 여부 체크
        			vFile.isLast = (i == len-1);
        			vFile.open(null, nexacro.VirtualFile.openBinary);
        		}
        	}
        };

        /**
         * virtualFile_onsuccess 이벤트
         */
        this.virtualFile_onsuccess = function(obj, e)
        {
        	trace(this.dsFile.saveXML());

        	switch (e.reason)
        	{
        		case 1:
        			//open()
        			this.fv_blob = null;
        			if( nexacro._Browser == "Runtime" &&
        				(this.parent.parent.name == 'sampleComFile' || this.parent.parent.name == 'comFileSingle')
        			){
        				obj.read();
        			}
        			obj.getFileSize();
        			break;

        		case 3:
        			// read()
        			this.fv_blob = e.binarydata;

        			break;
        		case 9:
        			//getFileSize()
        			var objDsFile = this.dsFile;

        			//파일 용량 체크
        			var filesize = (e.filesize / 1024).toFixed();
        			if(this.fn_getMaxLength() != -1){
        				if(filesize > this.fn_getMaxLength()){
        					take.alert(this, "error", "파일 크기가 너무 큽니다.");

        					var rtnValue = new Object();
        					rtnValue.sid = 'OPENFILE';
        					rtnValue.result = false;
        					rtnValue.resultMessage = "파일 크기가 너무 큽니다.";
        					this.fn_CallBack(rtnValue);

        					break;
        				}
        			}

        			//파일 확장자 체크
        			var extName 			= this.fn_getExtName(obj.filename);
        			var restrictExtNames 	= this.fn_getRestrictExtNames();

        			this.fv_extName = extName;

        			if(!take.isEmpty(restrictExtNames)){
        				if(restrictExtNames.indexOf(extName+"|") > -1){
        					take.alert(this, "error", "허용되지 않은 확장자입니다.");

        					var rtnValue = new Object();
        					rtnValue.sid = 'OPENFILE';
        					rtnValue.result = false;
        					rtnValue.resultMessage = "허용되지 않은 확장자입니다.";
        					this.fn_CallBack(rtnValue);

        					break;
        				}
        			}

        			//서버 저장용 파일명 생성
        			var file_save_nm = this.fn_getUuId() + "." + extName;
        			var sOriFileName = obj.filename;

        			var nRow = -1;
        			if(!this.fv_isGrid){
        				if(objDsFile.getRowCount() == 0)
        					nRow = objDsFile.addRow();
        				else
        					nRow = 0;
        			}else{
        				//nRow = objDsFile.addRow();
        			}

        			//2023.02.28 김준오 _ 처음들어오는 첨부파일3개는 성적서-제품사진1-제품사진2에 차례로 넣어주기.
        			if(take.isEmpty(objDsFile.getColumn(0,"FILE_NM"))){//성적서
        				nRow=0;
        				this.fv_atchFileTypeCd='100';
        			}else if(take.isEmpty(objDsFile.getColumn(1,"FILE_NM"))){//제품사진1
        				nRow=1;
        				this.fv_atchFileTypeCd='101';
        			}else if(take.isEmpty(objDsFile.getColumn(2,"FILE_NM"))){//제품사진2
        				nRow=2;
        				this.fv_atchFileTypeCd='102';
        			}else{
        				nRow = objDsFile.addRow();
        				objDsFile.setColumn(nRow, "FILE_TYPE_NM","기타");
        				this.fv_atchFileTypeCd=this.fv_atchFileTypeCdDefault;
        			}
        			objDsFile.setColumn(nRow, "FILE_TYPE"		, this.fn_getAtchFileTypeCd());
        			objDsFile.setColumn(nRow, "ATTACH_CD"		, this.fn_getAtchFileId());
        			objDsFile.setColumn(nRow, "FILE_NM"			, sOriFileName);
        			objDsFile.setColumn(nRow, "FILE_SAVE_NM"	, file_save_nm);
        			objDsFile.setColumn(nRow, "IMPORT_YN"		, "N");
        			objDsFile.setColumn(nRow, "FILE_SIZE"		, filesize );

        			//upload대상에 추가
        			//this.fileUpTransfer.addFile(nexacro.trim(obj.filename), obj);
        			var nIdx = this.fileUpTransfer.addFile(file_save_nm, obj);

        			if(nIdx == -1){
        				var rtnValue = new Object();
        					rtnValue.sid = 'OPENFILE';
        					rtnValue.result = false;
        					rtnValue.resultMessage = "업로드 대상에 추가 실패";
        					this.fn_CallBack(rtnValue);
        			}else{
        				//마지막 파일일 경우만 콜백처리
        				console.log('obj.isLast', obj.isLast);

        				if(obj.isLast){
        					var rtnValue = new Object();
        						rtnValue.sid = 'OPENFILE';
        						rtnValue.result = true;
        						rtnValue.resultMessage = "업로드 대상 추가 성공";
        						trace(this.dsFile.saveXML());
        						rtnValue.resultData = {fileName:obj.filename, fileSize:filesize, fileBlob:this.fv_blob};
        						this.fn_CallBack(rtnValue);
        				}
        			}
        			break;
        		default :
        			break;
        	}
        };

        //업로드 성공이벤트
        this.fileUpTransfer_onsuccess = function(obj,e)
        {
        	var rtnValue = new Object();
        	rtnValue.sid 	= 'upload';
        	rtnValue.result = false;

        	if(take.isNull(e.datasets)){
        		rtnValue.resultMessage = "업로드 실패";
        	} else {
        		if(e.datasets.length == 0){
        			rtnValue.resultMessage = "업로드 실패";
        		} else {
        			var dsResult = e.datasets[0];

        			//데이터 복사
        			for(var i = 0 ; i < dsResult.getRowCount(); i++){
        				var file_nm 		= dsResult.getColumn(i, 'FILE_NM');
        				var file_input_nm 	= dsResult.getColumn(i, 'FILE_INPUT_NM');
        				var file_save_nm 	= dsResult.getColumn(i, 'FILE_SAVE_NM');
        				var file_path 		= dsResult.getColumn(i, 'FILE_PATH');

        				/*
        				210325 정해원
        				1. 원래는 FILE_SAVE_NM을 파일첨부 시점에 생성해서 서버에 그대로 파일저장하고 있었음
        				2. FILE_SAVE_NM을 변조할 가능성 때문에 ('../' 등을 삽입) 서버에서 UUID를 생성하도록 변경 함
        				3. dsResult와 dsFile의 row가 다를 수도 있기 때문에
        				   파일첨부 시 임시로 넣어둔 dsFile.FILE_SAVE_NM 과 dsResult.FILE_INPUT_NM을 비교하여 row를 찾도록 처리
        				*/
        				var nRow = this.dsFile.findRow('FILE_SAVE_NM', file_input_nm);
        				if(nRow != -1){
        					//서버에서 생성한 파일명으로 대체
        					this.dsFile.setColumn(nRow, 'FILE_SAVE_NM'	, file_save_nm);
        					this.dsFile.setColumn(nRow, 'FILE_NM'		, file_nm);
        					this.dsFile.setColumn(nRow, 'FILE_PATH'		, file_path);
        					this.dsFile.setColumn(nRow, 'DELETE_YN'		, 'N');
        				}
        			}

        			/*
        			support.tobesoft.com 440810번 글
        			처음에 upload 를 한 뒤에 FileuploadTransfer 에 있는 내용을 clear 을 하지 않을 경우에는 처음에 선택한 파일들이 남아 있습니다.
        			저장을 한뒤에 clearFileList() 를 통하여 초기화를 해주시기 바랍니다.
        			*/
        			obj.clearFileList();
        			rtnValue.result = true;
        		}
        	}

        	//업무단으로 리턴
        	this.fn_localCallBack(rtnValue);
        };

        //업로드 실패이벤트
        this.fileUpTransfer_onerror = function(obj,e)
        {
        	//업무단으로 리턴
        	var rtnValue = new Object();
        	rtnValue.sid 	= 'upload';
        	rtnValue.result = false;
        	rtnValue.resultMessage = e.errormsg;

        	this.fn_localCallBack(rtnValue);
        };


        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /*
         * 첨부파일 초기화
         */
        this.fnInitComponent = function(objThis){
        	//부모 폼 설정
        	//this.fn_setObjForm(objThis);

        	//초기화
        	this.dsAtchFileId.clearData();
        	this.dsFile.clearData();
        	this.dsSearch.clearData();
        	this.dsAtchFileTypeCd.clearData();

        	//기본URL세팅
        	this.fn_setUploadUrl(take.getSvcUrl() + "file/uploadAtchFile.do");
        	this.fn_setDownloadUrl(take.getSvcUrl() + "file/downloadAtchFile.do");

        	//기본파일 확장자 세팅
        	this.fn_setRestrictExtNames("ade|adp|asp|aspx|application|bas|bat|cgi|chm|cmd|com|cpl|docm|dotm|crt|dll|exe|gadget|hlp|hta|htm|html|inf|ins|isp|jar|js|jse|jsp|lnk|mdb|mde|msc|msh|msh1|msh1xml|msh2|msh2xml|mshxmlm|msi|msp|mst|ocx|pcd|php|php3|pif|pot|potm|ppam|ppsm|pptm|ps1|ps1xml|ps2|ps2xml|psc1|psc2|reg|scf|scr|sct|shb|shs|shtm|shtml|sys|url|vb|vbe|vbs|ws|wsc|wsf|wsh|xlam|xlsm|xltm|");

        	//기본파일 용량 제한 세팅
        	if(this.fn_getMaxLength() == -1){
        		//200메가로 세팅
        		this.fn_setMaxLength(200 * 1024);
        	}

        	//multi여부
        	this.fn_setSingle(this.fv_isSingle);

        	//파일타입 컬럼
        	this.fn_setVisibleTypeCd(this.fv_isVisibleTypeCd);

        	//파일상세타입코드 조회
        	//세부 첨부파일 코드를 세팅한다!!!!
        	var atchFileTypeCd = this.fn_getAtchFileTypeCd();
        	if(take.isEmpty(atchFileTypeCd)){
        		this.fn_setAtchFileTypeCd(this.fv_atchFileTypeCdDefault);
        		atchFileTypeCd = this.fv_atchFileTypeCdDefault;
        	}

        	take.tranSelect
        	(
        		  this
        		, "selectCmFileAtchCd" + nexacro.round((Math.random()*1000))
        		, "File.typeInfo"
        		, ""
        		, "dsAtchFileTypeCd"
        		, "code='" + this.fv_atchFileCommCd + "'"/* + " sRef1='" + atchFileTypeCd + "'"*/
        		, function(sId, nErrCd, sErrMsg){
        			this.dsAtchFileTypeCd.insertRow(0);
        			this.dsAtchFileTypeCd.setColumn(0, 'CODE', '');
        			this.dsAtchFileTypeCd.setColumn(0, 'NAME', '선택');
        		}
        	);
        };

        /*
         * 첨부파일 초기화
         */
        this.fn_clear = function(){
        	//초기화
        	this.dsAtchFileId.clearData();
        	this.dsFile.clearData();
        	this.dsSearch.clearData();

        	this.fileUpTransfer.clearFileList();

        	this.fn_setAtchFileId(null);
        };

        /*필수기능*/
        //파일 찾아보기
        this.fn_browseFile = function(pThis, fnCallBack){
        	this.fn_setObjForm(pThis);
        	this.fn_setCallback(fnCallBack);
        	if(take.isEmpty(this.fn_getAtchFileId())){
        		take.alert(this, "error", "첨부파일코드가 없습니다.");

        		var rtnValue = new Object();
        			rtnValue.sid 	= 'BROWSEFILE';
        			rtnValue.result = false;
        			rtnValue.resultMessage = "첨부파일코드가 없습니다.";

        		this.fn_CallBack(rtnValue);
        	} else {
        		// -> this.fileDialog_onclose
        		// -> this.VirtualFile_onsuccess
        		this.fileDialog.open('파일첨부', (this.fn_getSingle() ? FileDialog.LOAD : FileDialog.MULTILOAD));
        	}
        };

        //첨부파일삭제(설정값에 따라 바로삭제 가능)
        this.fn_deleteFile = function(pThis, fnCallBack){
        		this.fn_setObjForm(pThis);
        		this.fn_setCallback(fnCallBack);

        		var rtnValue = new Object();
        		rtnValue.sid 	= 'DELETEFILE';
        		rtnValue.result = false;

        		var arrChkRow = gFn_getChkRow(this.dsFile, "CHK", this.dsFile.rowposition);
        		if(arrChkRow.length == 0){
        			take.alert(this, "Info", "선택된 항목이 없습니다.");

        			rtnValue.resultMessage = "선택된 항목이 없습니다.";
        			this.fn_CallBack(rtnValue);

        			return;
        		}

        		var bRowDel = take.confirm(this, "question", "삭제 하시겠습니까?");
        		if (bRowDel){
        			for (var i=0; i < arrChkRow.length ; i++){
        				//저장 전 추가한 파일인 경우 업로드 대상에서 제거
        				var delFileName = this.dsFile.getColumn(arrChkRow[i], 'FILE_SAVE_NM');
        				this.fileUpTransfer.removeFile(delFileName);

        				this.dsFile.deleteRow(arrChkRow[i]);
        			}

        			if(this.fn_getDirectDelete()){
        				//삭제 후 바로 서버 처리일 경우
        				this.fnUploadSaveFileList(pThis, function(rtnValue){
        					if(!rtnValue.result){
        						take.alert(this, "error", rtnValue.resultMessage);
        					}else{
        						//rtnValue.result = true;
        						//this.fn_CallBack(rtnValue);
        						//direct는 콜백이 불가함
        					}
        				});
        			}else{
        				rtnValue.result = true;
        				this.fn_CallBack(rtnValue);
        			}

        		} else {
        			//rtnValue.resultMessage = "선택된 항목이 없습니다.";
        			//this.fn_CallBack(rtnValue);
        		}
        	};

        //특정 ROW 첨부파일삭제
        this.fn_deleteFileRow = function(pThis, nRow, fnCallBack){
        		this.fn_setObjForm(pThis);
        		this.fn_setCallback(fnCallBack);

        		var nRow = this.dsFile.rowposition;
        		if(!take.isNull(nRow)){
        			//특정행을 삭제하려 할 때
        			arrChkRow = [nRow];
        		}

        		var rtnValue = new Object();
        		rtnValue.sid 	= 'DELETEFILE';
        		rtnValue.result = false;

        		if(arrChkRow.length == 0){
        			rtnValue.resultMessage = "선택된 항목이 없습니다.";
        			take.alert(this, "Info", rtnValue.resultMessage);
        			this.fn_CallBack(rtnValue);

        			return;
        		}

        		var bRowDel = take.confirm(this, "question", "삭제 하시겠습니까?");
        		if (bRowDel){
        			for (var i=0; i < arrChkRow.length ; i++){
        				//저장전 추가한 파일인 경우 업로드 대상에서 제거
        				var delFileName = this.dsFile.getColumn(arrChkRow[i], 'FILE_SAVE_NM');
        				this.fileUpTransfer.removeFile(delFileName);

        				this.dsFile.deleteRow(arrChkRow[i]);
        			}

        			rtnValue.result = true;
        			this.fn_CallBack(rtnValue);
        		}
        };

        //첨부파일전체삭제(설정값에 따라 바로삭제 가능)
        this.fn_deleteFileList = function(){
        		this.dsFile.deleteAll();
        };

        //첨부파일업로드(현재추가된 파일을 업로드처리)
        this.fn_uploadFile = function(pThis, fnCallBack){
        	this.fn_setLocalCallback(fnCallBack);

        	if(!this.fn_isUploadFileExist()){
        		var rtnValue = new Object();
        			rtnValue.sid 	= 'upload';
        			rtnValue.result = true;

        		this.fn_localCallBack(rtnValue);

        		return;
        	}

        	this.fileUpTransfer.clearPostDataList();
        	this.fileUpTransfer.setPostData("projectCd", nexacro.getApplication().av_sProjectCd);

        	var menuCd = take.getProgInfo(pThis).ProgId;
        	if(this.getOwnerFrame().opener != null){
        		menuCd = this.getOwnerFrame().opener.ProgId;
        	}

        	this.fileUpTransfer.setPostData("menuCd"		, menuCd);
        	this.fileUpTransfer.setPostData("atchFileId"	, this.fn_getAtchFileId());

        	//업로드
        	this.fileUpTransfer.upload(this.fn_getUploadUrl());
        };

        //업로드 대상 파일 존재여부
        this.fn_isUploadFileExist = function(){
        	return this.fileUpTransfer.filelist.length > 0 ;
        };

        //첨부파일다운로드
        this.fn_downloadFile = function(nRow){
        	var chkRow = this.dsFile.rowposition;
        	if(!take.isNull(nRow)){
        		chkRow = nRow;
        	}
        	//업로드 후 가능 메세지 출력
        	if (this.dsFile.getRowType(nRow) == Dataset.ROWTYPE_INSERT) {
        			take.alert(this, "error", "Upload 되지 않은 파일입니다. 다운로드 할 수 없습니다.");
        			return;
        		}

        		var atchFileId 	= this.dsFile.getColumn(chkRow, "ATTACH_CD");
        		var fileSeq 			= this.dsFile.getColumn(chkRow, "FILE_SEQ");
        		var downloadUrl 	= this.fn_getDownloadUrl();

        		this.fileDownTransfer.setPostData("atchFileId" 	, atchFileId);
        		this.fileDownTransfer.setPostData("fileSeq"  	, fileSeq);
        		this.fileDownTransfer.setPostData("isDirect"  	, "N");
        		this.fileDownTransfer.set_url(downloadUrl);
        		this.fileDownTransfer.download();
        };

        /*조회기능*/
        //전체목록 리스트업(Object Array형태)
        this.fn_getFileList = function(){
        	return take.getChartData(this.dsFile);
        };
        //전체목록 리스트업(DataSet 형태)
        this.fn_getFileListDs = function(){
        	return this.dsFile;
        };
        //첨부파일존재여부
        this.fn_getIsExistFile = function(){
        	this.dsFile.getRowcount() > 0;
        };
        //첨부파일 수정여부 리턴
        this.fn_isUpdate = function(){
        	return take.isDsModified(this.dsFile);
        };

        /*각종세팅*/
        //바로업로드여부
        this.fn_setDirectUpload = function(isDirectUpload){
        	this.fv_isDirectUpload = isDirectUpload;
        };
        this.fn_getDirectUpload = function(){
        	return this.fv_isDirectUpload;
        };
        //바로삭제여부
        this.fn_setDirectDelete = function(isDirectDelete){
        	this.fv_isDirectDelete = isDirectDelete;
        };
        this.fn_getDirectDelete = function(){
        	return this.fv_isDirectDelete;
        };
        //파일구분코드설정(업무별로 다를수 있음)
        this.fn_setAtchFileTypeCd = function(sTypeCd){
        	this.fv_atchFileTypeCd = sTypeCd;
        };
        this.fn_getAtchFileTypeCd = function(){
        	return this.fv_atchFileTypeCd;
        };
        //파일구분코드 노출여부
        this.fn_setVisibleTypeCd = function(isVisibleTypeCd){
        	this.fv_isVisibleTypeCd = isVisibleTypeCd;
        	if(!isVisibleTypeCd){
        		this.grdFile.setRealColSize( "head", 1, 0 );
        	}else{
        		this.grdFile.setRealColSize( "head", 1, 104 );
        	}
        };
        this.fn_getVisibleTypeCd = function(){
        	return this.fv_isVisibleTypeCd;
        };
        //특정파일구분코드의 row만 노출(filtering) .fn_setTypeCdFilter('ETC1,ETC2']);
        this.fn_setTypeCdFilter = function(sTypeCdFilter){
        	this.fv_typeCdFilter = sTypeCdFilter;
        };
        this.fn_getTypeCdFilter = function(){
        	 return this.fv_typeCdFilter;
        };
        //읽기전용여부
        this.fn_setReadOnly = function(isReadOnly){
        	this.fv_isReadOnly =  isReadOnly;

        	//추가,삭제
        	this.fn_setAddDelBtnEnable(!this.fv_isReadOnly);
        	//그리드 조절
        	this.grdFile.set_readonly(this.fv_isReadOnly);
        };
        this.fn_getReadOnly = function(){
        	return this.fv_isReadOnly;
        };
        //파일추가/삭제 버튼 활성화 / 비활성화
        this.fn_setAddDelBtnEnable = function(isEnable){
        	this.btnFileAdd.set_visible(isEnable);
        	this.btnFileDel.set_visible(isEnable);
        };
        //저장 버튼 활성화 / 비활성화
        this.fn_setSaveBtnEnable = function(isEnable){
        	this.btnFilleSave.set_visible(isEnable);
        };

        //단일파일,멀티파일 첨부가능여부
        this.fn_setSingle = function(isSingle){
        	this.fv_isSingle =  isSingle;
        };
        this.fn_getSingle = function(){
        	return this.fv_isSingle;
        };
        //부모frame 세팅
        this.fn_setObjForm = function(objForm){
        	this.fv_objForm =  objForm;
        };
        //첨부파일ID세팅
        this.fn_setAtchFileId = function(sAtchFileId){
        	this.fv_atchFileId = sAtchFileId;
        };
        this.fn_getAtchFileId = function(){
        	 return this.fv_atchFileId;
        };
        //업로드url설정
        this.fn_setUploadUrl = function(sUploadUrl){
        	this.fv_uploadUrl = sUploadUrl;
        };
        this.fn_getUploadUrl = function(){
        	 return this.fv_uploadUrl;
        };
        //다운로드url설정
        this.fn_setDownloadUrl = function(sDownloadUrl){
        	this.fv_downloadUrl = sDownloadUrl;
        };
        this.fn_getDownloadUrl = function(){
        	return this.fv_downloadUrl;
        };
        //업무에필요한 추가파라미터 세팅
        this.fn_setParams = function(objParams){
        	this.fv_objParams = objParams;
        };
        this.fn_getParams = function(){
        	return this.fv_objParams;
        };
        //확장자제한대상
        this.fn_setRestrictExtNames = function(sExtNames){
        	this.fv_restirctExtNames = sExtNames;
        };
        this.fn_getRestrictExtNames = function(){
        	return this.fv_restirctExtNames;
        };
        //업로드파일크기제한
        this.fn_setMaxLength = function(nMaxLength){
        	this.fv_maxLength = nMaxLength;
        };
        this.fn_getMaxLength = function(){
        	return this.fv_maxLength;
        };
        //업무화면으로의 콜백처리(파일추가시,파일삭제시,파일저장시)
        this.fn_setCallback = function(fnCallback){
        	this.fv_callback = fnCallback;
        };
        this.fn_getCallback = function(){
        	return this.fv_callback;
        };
        //현재 콜백처리(파일추가시,파일삭제시,파일저장시)
        this.fn_setLocalCallback = function(fnCallback){
        	this.fv_localCallback = fnCallback;
        };
        this.fn_getLocalCallback = function(){
        	return this.fv_localCallback;
        };
        this.fn_getUuId = function(){
        	return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
        		return v.toString(16);
        	});
        };
        this.fn_getExtName = function(fileName){
        	return fileName.substr(fileName.lastIndexOf(".") + 1).toLowerCase();
        };


        /*transaction*/
        //첨부파일ID로 정보조회
        this.fnSearchFileList = function(pThis, fnCallBack){
        	this.fn_setObjForm(pThis);
        	this.fn_setCallback(fnCallBack);

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, 'atchFileId', this.fn_getAtchFileId() );

        	this.dsFile.clearData();

        	if(take.isEmpty(this.fn_getAtchFileId())){
        		return;
        	}

        	var sTranId = "getAtchFileList";
        	var sUrl	= "SVC_LOC::file/getAtchFileList.do";
        	var inDs	= "dsSearch=dsSearch";
        	var outDs	= "dsFile=dsFile";
        	var params	= "";

        	take.transaction(
        		this, sTranId, sUrl, inDs, outDs, params,
        		function(sId, nErrCd, sErrMsg){
        			//업무단으로 리턴
        			var rtnValue = new Object();
        			rtnValue.sid 	= sId;
        			rtnValue.result = (nErrCd == 0);
        			rtnValue.resultMessage = sErrMsg;
        			rtnValue.resultData = this.fn_getFileList();

        			this.fn_CallBack(rtnValue);
        		}
        	);
        };

        //첨부파일ID신규생성
        this.fnSearchAtchFileId = function(pThis, fnCallBack){
        	this.fn_setObjForm(pThis);
        	this.fn_setCallback(fnCallBack);

        	var atchFileTypeCd = this.fn_getAtchFileTypeCd();
        	//atchFileTypeCd = (take.isEmpty(atchFileTypeCd) ? this.fv_atchFileTypeCdDefault : atchFileTypeCd);

        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.dsSearch.setColumn(0, 'atchFileTypeCd', atchFileTypeCd );

        	this.dsAtchFileId.clearData();

        	var sTranId = "getAtchFileId";
        	var sUrl	= "SVC_LOC::file/getAtchFileId.do";
        	var inDs	= "dsSearch=dsSearch";
        	var outDs	= "dsAtchFileId=dsAtchFileId";
        	var params	= "";

        	take.transaction(this, sTranId, sUrl, inDs, outDs, params,
        		function(sId, nErrCd, sErrMsg){
        			if(this.dsAtchFileId.getRowCount() > 0){
        				var atchilFileId = this.dsAtchFileId.getColumn(0, 'ATCHFILEID');
        				this.fn_setAtchFileId(atchilFileId);
        			}

        			//업무단으로 리턴
        			var rtnValue = new Object();
        			rtnValue.sid 	= sId;
        			rtnValue.result = (nErrCd == 0);
        			rtnValue.resultMessage = sErrMsg;
        			rtnValue.resultData = this.fn_getAtchFileId();

        			this.fn_CallBack(rtnValue);
        		}
        	);
        };

        //첨부파일결과저장(추가 또는 삭제한것 transaction)
        this.fnUploadSaveFileList = function(pThis, fnCallBack){
        	this.fn_setObjForm(pThis);
        	this.fn_setCallback(fnCallBack);

        	this.fn_uploadFile(pThis, function(rtnValue){
        		if(rtnValue.result){
        			this.fnSaveFileList();
        		}else{
        			this.fn_CallBack(rtnValue);
        		}
        	});
        };

        //파일 정보 저장
        this.fnSaveFileList = function(){
        	var sTranId = "saveAtchFile";
        	var sUrl	= "SVC_LOC::file/saveAtchFile.do";
        	var inDs	= "dsFile=dsFile:U";
        	var outDs	= "dsFile=dsFile";
        	var params	= "";

        	if(!this.fn_isUpdate()){
        		//변경정보 없을 경우 업무단으로 return
        		var rtnValue = new Object();
        			rtnValue.sid 	= sTranId;
        			rtnValue.result = true;

        		this.fn_CallBack(rtnValue);
        		return;
        	}

        	take.transaction(
        		this, sTranId, sUrl, inDs, outDs, params,
        		function(sId, nErrCd, sErrMsg){
        			//업무단으로 리턴
        			var rtnValue = new Object();
        			rtnValue.sid 	= sId;
        			rtnValue.result = (nErrCd == 0);
        			rtnValue.resultMessage = sErrMsg;

        			this.fn_CallBack(rtnValue);
        		}
        	);
        };

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /***************************************************************************
         * Even   : fn_CallBack
         * Desc   : 단위 이벤트별 공통콜백.
         ****************************************************************************/
        this.fn_CallBack = function(oRtn){
        	var fnCallBack = this.fn_getCallback();
        	if(take.isNull(fnCallBack)){
        		return;
        	}else{
        		if(oRtn.sid){
        			take.debug(this, "file component callback sid : " + oRtn.sid );
        		}
        		this.fn_setCallback(null);
        	}

        	try {
        		var objForm = take.nvl(this.fv_objForm, this);

        		if (typeof fnCallBack == "function") {
        			fnCallBack.call(objForm, oRtn);
        		} else if(typeof fnCallBack == "string") {
        			if (!take.isFunction(objForm[fnCallBack])){
        				return;
        			} else {
        				objForm[fnCallBack].call(objForm, oRtn);
        			}
        		}
        	} catch(e) {
        		console.dir(e);
        	}
        };

        /***************************************************************************
         * Even   : fn_localCallBack
         * Desc   : 단위 이벤트별 현재 페이지 내로 콜백.
         ****************************************************************************/
        this.fn_localCallBack = function(oRtn){
        	var fnCallBack = this.fn_getLocalCallback();
        	if(take.isNull(fnCallBack)){
        		return;
        	}else{
        		if(oRtn.sid){
        			take.debug(this, "file component callback sid : " + oRtn.sid );
        		}
        		this.fn_setLocalCallback(null);
        	}

        	try {
        		var objForm = this;

        		if (typeof fnCallBack == "function") {
        			fnCallBack.call(objForm, oRtn);
        		} else if(typeof fnCallBack == "string") {
        			if (!take.isFunction(objForm[fnCallBack])){
        				return;
        			} else {
        				objForm[fnCallBack].call(objForm, oRtn);
        			}
        		}
        	} catch(e) {
        		console.dir(e);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onmousewheel",this.comFileSYS_onmousewheel,this);
            this.btnFileDel.addEventHandler("onclick",this.btnFileDel_onclick,this);
            this.btnFileAdd.addEventHandler("onclick",this.btnFileAdd_onclick,this);
            this.btnFilleSave.addEventHandler("onclick",this.btnFilleSave_onclick,this);
            this.grdFile.addEventHandler("oncelldblclick",this.grdFile_oncelldblclick,this);
            this.grdFile.addEventHandler("oncellclick",this.grdFile_oncellclick,this);
            this.grdFile.addEventHandler("ondrop",this.grdFile_ondrop,this);
            this.grdFile.addEventHandler("onheadclick",this.grdFile_onheadclick,this);
            this.grdFile.addEventHandler("onvscroll",this.grdFile_onvscroll,this);
            this.grdFile.addEventHandler("onmouseleave",this.grdFile_onmouseleave,this);
            this.grdFile.addEventHandler("onsummaryclick",this.grdFile_onsummaryclick,this);
            this.fileDialog.addEventHandler("onclose",this.fileDialog_onclose,this);
            this.fileUpTransfer.addEventHandler("onerror",this.fileUpTransfer_onerror,this);
            this.fileUpTransfer.addEventHandler("onsuccess",this.fileUpTransfer_onsuccess,this);
        };
        this.loadIncludeScript("comFileSYS_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
