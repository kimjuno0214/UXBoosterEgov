(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFile");
            this.set_titletext("파일 업/다운로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1779,894);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"file_path\" type=\"STRING\" size=\"256\"/><Column id=\"file_nm\" type=\"STRING\" size=\"256\"/><Column id=\"file_save_nm\" type=\"STRING\" size=\"256\"/><Column id=\"import_yn\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/><Column id=\"file_size\" type=\"STRING\" size=\"256\"/><Column id=\"file_blob\" type=\"STRING\" size=\"256\"/><Column id=\"desc_txt\" type=\"STRING\" size=\"256\"/><Column id=\"delete_yn\" type=\"STRING\" size=\"256\"/><Column id=\"user_cd\" type=\"STRING\" size=\"256\"/><Column id=\"file_del_yn\" type=\"STRING\" size=\"256\"/><Column id=\"attach_cd\" type=\"STRING\" size=\"256\"/><Column id=\"file_seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileResult", this);
            obj._setContents("<ColumnInfo><Column id=\"file_path\" type=\"STRING\" size=\"256\"/><Column id=\"file_nm\" type=\"STRING\" size=\"256\"/><Column id=\"file_save_nm\" type=\"STRING\" size=\"256\"/><Column id=\"import_yn\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/><Column id=\"file_size\" type=\"STRING\" size=\"256\"/><Column id=\"file_blob\" type=\"STRING\" size=\"256\"/><Column id=\"desc_txt\" type=\"STRING\" size=\"256\"/><Column id=\"delete_yn\" type=\"STRING\" size=\"256\"/><Column id=\"user_cd\" type=\"STRING\" size=\"256\"/><Column id=\"file_del_yn\" type=\"STRING\" size=\"256\"/><Column id=\"attach_cd\" type=\"STRING\" size=\"256\"/><Column id=\"file_seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"file_path\" type=\"STRING\" size=\"256\"/><Column id=\"file_nm\" type=\"STRING\" size=\"256\"/><Column id=\"file_save_nm\" type=\"STRING\" size=\"256\"/><Column id=\"import_yn\" type=\"STRING\" size=\"256\"/><Column id=\"file_type\" type=\"STRING\" size=\"256\"/><Column id=\"user_cd\" type=\"STRING\" size=\"256\"/><Column id=\"file_del_yn\" type=\"STRING\" size=\"256\"/><Column id=\"attach_cd\" type=\"STRING\" size=\"256\"/><Column id=\"file_seq\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransferTemp", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","45","33","95","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","145","33","95","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","45","82","558","193",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("sort,find,filter,move,hide,excel,fix,reset,readonly,visible,personal");
            obj.getSetter("gridTitle").set("sampleFile,1");
            obj.set_binddataset("dsFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"426\"/><Column size=\"82\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"사이즈\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:file_nm\"/><Cell col=\"2\" text=\"bind:ATCH_FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","245","33","95","41",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ivTest","48","296","551","231",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","345","33","95","41",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","445","33","95","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀다운로드");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1779,894,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpFile.xfdl", function() {
        /**
        *  Menu Name
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_nUploadIdx = 0;
        this.fv_nUpFileCnt = 0;
        this.fv_vFile = null;
        this.fv_bData = null;
        this.fv_nFileCnt = 0;
        this.fv_sFileDelYn = "N";
        this.fv_sFileType = "TEST";

        this.fileConfig = {
                //TODO URL
                host         : nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC_LOC")].url,
                uploadUrl    : "fileUpload.do",
                downloadUrl  : "fileDownload.do",
                deleteUrl    : "delete.do",
        //         downImage    : "theme://images/img_file.png",
        //         delImage     : "theme://images/btn_del.png",
                allowTypes   : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"],
                maxCount     : 10,
                maxSize      : "200MB",
                maxTotalSize : "200MB"
            };


        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.sampleFile_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		take.formRole(this);
                this.fnSearch();
           }
        }

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
            switch(sId)
            {
                case "Search" : //조회 콜백
                    //Script

                    break;
                case "Save" : //조회 콜백
                    //Script
        			this.fnUploadFiles();

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "file_path", this.fv_sFileType);
        	take.tranSelect(this, "Search", "SystemCommon.fileInfoList", "dsSearch", "dsFile", "", "fnCallback");
        }

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {N/A}    N/A
         * @return {N/A}    N/A
         * @example this.fnSave();
         */
        this.fnSave = function()
        {
            this.fnTran("Save")
        }

        /**
         * fnDel : 삭제 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {N/A}    N/A
         * @return {N/A}    N/A
         * @example this.fnDel();
         */
        this.fnDel = function()
        {
            this.fnTran("Del")
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //파일추가버튼
        this.Button00_onclick = function(obj,e)
        {
        	this.fv_nFileCnt = 0;
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        //업로드버튼
        this.Button01_onclick = function(obj,e)
        {
        	this.dsFile.setColumn(0, "file_del_yn", this.fv_sFileDelYn);
        	take.transaction(this, "Save", "SVC_LOC::um/imgSave.do", "dsFile=dsFile:U", "dsFileResult=dsFileResult", "", "fnCallback");
        	//take.tranSave(this, "Save", "TakeSystemMapper.file", "dsFile", "dsFileResult", "", "fnCallback");
        };

        //다운로드버튼
        this.Button02_onclick = function(obj,e)
        {
        	//this.downloadFile();
        	var sAttachCd = this.dsFile.getColumn(this.dsFile.rowposition, "attach_cd");
        	var sFileSeq = this.dsFile.getColumn(this.dsFile.rowposition, "file_seq");
        // 	this.FileDownTransfer00.setPostData("sAttachCd", sAttachCd);
        // 	this.FileDownTransfer00.setPostData("sFileSeq", file_seq);
        	var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl;
        	downloadUrl += "?sAttachCd="+sAttachCd+"&sFileSeq="+sFileSeq;
        	trace( "!@!@>> downloadUrl:   " + downloadUrl );
        	this.FileDownTransfer00.set_url(downloadUrl);
            this.FileDownTransfer00.download();
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/

        /*********************************************************
        * 5.1 TRANSACTION 서비스 호출 처리
         ********************************************************/

        /*********************************************************
         * 5.2 CALLBACK 콜백 처리부분
         ********************************************************/

        //=======================================================================================================================================
        //              ExtFileUpload Event
        //=======================================================================================================================================

        this.downloadFile = function ()
        {
        	var dsDownload = this.dsFile;
        	var	fileName = dsDownload.getColumn(this.dsFile.rowposition, "FILE_NM");
        	var	filePath = "TEMP";//dsDownload.getColumn(0, "FILE_FULL_PATH");
        	//fileName = escape(encodeURIComponent("한글한글"));
        	var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl+"?directory="+filePath+"&filename="+fileName;

        	//download file
        	//@param {=string} url 다운로드 fullPath url
        	//@param {string} filename 파일저장시 적용할 file name.(지원가능한 브라우저만 적용됨. 런타임 미지원)
        	//@return {boolean} 다운로드 성공여부

            this.FileDownload00.set_downloadurl(downloadUrl);
            if( system.navigatorname =="nexacro"){
                this.FileDownload00.set_downloadfilename(fileName);
            }
            this.FileDownload00.download();

        };

        //파일추가 후처리 이벤트
        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
         		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
         		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, nexacro.VirtualFile.openBinary);
        	}
        }

        //파일추가 후처리 성공이벤트
        this.FileList_onsuccess = function(obj, e)
        {
        	trace("!@!@>> reason:  " + e.reason);
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();

        			break;
        		case 3: // read() 실행시 추가 실행
        			this.divDetail.form.ivUser.set_image(e.binarydata);
        			this.fv_bData = e.binarydata;

        			this.dsFile.clearData();
        			var addidx = this.dsFile.addRow();
        			this.dsFile.setColumn(addidx, "file_nm", nexacro.trim(obj.filename));
        			this.dsFile.setColumn(addidx, "file_blob", this.fv_bData);
        			this.dsFile.setColumn(addidx, "import_yn", "N");
        			this.dsFile.setColumn(addidx, "file_path", this.fv_sFileType);
        			this.dsFile.setColumn(addidx, "file_size", this.fv_sFileSize);
        			this.FileUpTransfer00.addFile(obj.filename, obj);

        			break;
        		case 9:	// getFileSize() 실행시 추가 실행
        			this.fv_sFileSize = e.filesize;
        			if( nexacro._Browser == "Runtime" )
        			{
        				//파일 바이너리데이터 생성
        				obj.read();
        			}
        			else
        			{
        				var objIframe = window.document.getElementsByTagName('iframe');
        				var objInput = objIframe[0].contentWindow.document.getElementsByTagName("input");
        				var objImageView = this.ivTest;
        				var objDsFile = this.dsFile;
        				var objFileUpTransfer = this.FileUpTransfer00;

        				for (var i = 0; i < objInput.length; i++) {
        					if (objInput[i].type == "file") {
        						var reader  = new FileReader();
        						reader.addEventListener("load", function(){
        							objImageView.set_image(reader.result);

        							objDsFile.setColumn(addidx, "file_blob", reader.result);
        							objDsFile.setColumn(addidx, "import_yn", "N");
        						});

        						var objFile = null;
        						for( var j=0; j<objInput[i].files.length; j++ )
        						{
        							if( obj.filename == objInput[i].files[j].name )
        							{
        								objFile = objInput[i].files[j];
        							}
        						}
        						reader.readAsDataURL(objFile, "EUC-KR");
        						var addidx = objDsFile.addRow();
        						objDsFile.setColumn(addidx, "file_nm", nexacro.trim(objFile.name));
        						objDsFile.setColumn(addidx, "file_path", this.fv_sFileType);
        						objDsFile.setColumn(addidx, "file_size", this.fv_sFileSize);

        						objFileUpTransfer.addFile(obj.filename, obj);
        					}
        				}
        			}

        			break;
        		default :
        			break;
        	}
        }

        //파일추가 후처리 실패이벤트
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        /**
         * @description 파일업로드수행
        */
        this.fnUploadFiles = function ()
        {
            var url = this.fileConfig.host + this.fileConfig.uploadUrl;

        	this.fv_nUpFileCnt = this.FileUpTransfer00.filelist.length;

        	this.FileUpTransferTemp.clearFileList();
        	this.fv_vFile = this.FileUpTransfer00.filelist;
        	trace("!@!@>> filelist.length:    " + this.FileUpTransfer00.filelist.length);

        	this.FileUpTransferTemp.addFile(this.fv_vFile[0].filename, this.fv_vFile[0]);

        	var nFileRow = this.dsFileResult.findRowNF("file_nm", this.fv_vFile[0].filename);
        	var sAttachCd = this.dsFileResult.getColumn(nFileRow, "attach_cd");
        	var sFileSeq = this.dsFileResult.getColumn(nFileRow, "file_seq");
            url += "?sAttachCd="+sAttachCd + "&sFileSeq="+sFileSeq + "&sFilePath="+this.fv_sFileType;

        	trace("!@!@>> url:   " + url);
        	this.FileUpTransferTemp.upload(url);
        };

        //업로드 성공이벤트
        this.FileUpTransferTemp_onsuccess = function(obj,e)
        {
        	trace("succST-----------------------------------------------------------------");
        	this.fv_nUploadIdx++;

        	var vfile = this.fv_vFile[this.fv_nUploadIdx];

        	if (vfile && (this.fv_nUploadIdx < this.fv_nUpFileCnt))
        	{
        		//초기화 해줘야됨
        		this.FileUpTransferTemp.clearFileList();

        		this.FileUpTransferTemp.addFile(vfile.filename, vfile);

        		var sFileName = escape(encodeURIComponent(vfile.filename));
        		var upUrl = this.fileConfig.host + this.fileConfig.uploadUrl;

        		var nFileRow = this.dsFileResult.findRowNF("file_nm", sFileName);
        		var sAttachCd = this.dsFileResult.getColumn(nFileRow, "attach_cd");
        		var sFileSeq = this.dsFileResult.getColumn(nFileRow, "file_seq");
        		upUrl += "?sAttachCd="+sAttachCd + "&sFileSeq="+sFileSeq + "&sFilePath="+this.fv_sFileType;

        		trace("!@!@>> url:   " + upUrl);

        		this.FileUpTransferTemp.upload(upUrl);
        	}
        	if( this.fv_nUploadIdx == this.fv_nUpFileCnt ) this.fv_nUploadIdx = 0;

        	this.fnSearch();
        	trace("succED-----------------------------------------------------------------");
        };

        //업로드 실패이벤트
        this.FileUpTransferTemp_onerror = function(obj,e)
        {
        	trace("errorST-----------------------------------------------------------------");

        	trace("errorED-----------------------------------------------------------------");
        };

        this.Grid00_onselectchanged = function(obj,e)
        {
        	var sBlobData = this.dsFile.getColumn(e.row, "file_blob");
        	this.ivTest.set_image(sBlobData);
        };

        // 엑셀업로드 버튼 클릭
        this.Button03_onclick = function(obj,e)
        {
        	this.dsFile.clearData();
        	var sUrl = nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC_LOC")].url;//take.getSvcUrl();
            var sSvcUrl = sUrl + "XImport.do";

        	if(this.importObj == null){
        		this.importObj = new nexacro.ExcelImportObject("Import00",this);
        		this.importObj.set_importtype(nexacro.ImportTypes.EXCEL);
        		this.importObj.addEventHandler("onsuccess", this.Import00_onsuccess, this);
        		this.importObj.addEventHandler("onerror", this.Import00_onerror, this);
        	}
        	this.importObj.set_importurl(sSvcUrl);
        	this.importObj.importData("","Sheet1!A1:C?","dsFile");
        };

        // 엑셀다운로드 버튼 클릭
        this.Button04_onclick = function(obj,e)
        {
        	this.Grid00.ExportExcelGrid("samplefileTempleat", "Sheet1", "TEST EXCEL", "ORG");
        };

        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	this.importObj = null;
        	trace("\n=========== onsuccess event start=============");
        	trace("\ne.eventid: " 				+ e.eventid			);
        	trace("\ne.fromobject: " 			+ e.fromobject		);
        	trace("\ne.fromreferenceobject: " 	+ e.fromreferenceobject);
        	trace("\ne.url: " 					+  e.url			);
        };

        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	trace("\n=========== onerror event start===============");
        	trace("\ne.eventid: " 				+ e.eventid			);
        	trace("\ne.fromobject: " 			+ e.fromobject		);
        	trace("\ne.fromreferenceobject: " 	+ e.fromreferenceobject);
        	trace("\ne.errorcode: " 			+  e.errorcode		);
        	trace("\ne.errormsg: " 				+ e.errormsg		);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleFile_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Grid00.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransferTemp.addEventHandler("onsuccess",this.FileUpTransferTemp_onsuccess,this);
            this.FileUpTransferTemp.addEventHandler("onerror",this.FileUpTransferTemp_onerror,this);
        };
        this.loadIncludeScript("smpFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
