(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFile");
            this.set_titletext("파일공통");
            if (Form == this.constructor)
            {
                this._setFormPosition(512,110);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileResult", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnFileAdd",null,"0","70","21","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일첨부");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_plus01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFile","0","btnFileAdd:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"200\"/><Column size=\"139\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일경로\"/><Cell col=\"3\" text=\"파일크기(KB)\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\" text=\"등록일\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:FILE_NM\"/><Cell col=\"2\" text=\"bind:FILE_PATH\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:REG_NM\" textAlign=\"center\"/><Cell col=\"5\" textAlign=\"center\" text=\"bind:REG_DT\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
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
        this.registerScript("comFile.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_objParent = this.getOwnerFrame();
        this.fv_objParentDsFile = this.fv_objParent.form.dsFile;
        this.fv_sDelFileNms = "";

        this.fileConfig = {};

        // this.fileConfig = {
        //         //TODO URL
        //         host         : nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC_LOC")].url,
        //         uploadUrl    : this.fv_objParent.form.fileConfig.uploadUrl,
        //         downloadUrl  : "fileDownload.do",
        //         deleteUrl    : "delete.do",
        // //         downImage    : "theme://images/img_file.png",
        // //         delImage     : "theme://images/btn_del.png",
        //         allowTypes   : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf"],
        //         maxCount     : this.fv_objParent.form.fileConfig.maxCount,
        //         maxSize      : "200MB",
        //         maxTotalSize : "200MB"
        //     };

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           //this.fnInit();
           this.fileConfig = this.fv_objParent.form.fileConfig;
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){
        	this.dsFile.clearData();
        	for( var i=0; i<this.fv_objParentDsFile.rowcount; i++ )
        	{
        		var nRow = this.dsFile.addRow();
        		this.dsFile.copyRow(nRow, this.fv_objParentDsFile, i);
        	}
        	this.grdFile.set_binddataset(this.dsFile);
        }
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Transation id";
            take.tranSelect(this,sTranId,"Namespace","sInDataset", "sOutDataset", "sParam", "fnCallback");
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save transation id";
            take.tranSave(this, sTranId, "NAMESPACE", "sInDs", "sOutDs", "sParam", "fnCallback");
        }

        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
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
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
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
                case "Transation id 01" : //조회 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }

        // 파일첨부 버튼 클릭
        this.btnFileAdd_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        //파일추가 후처리 이벤트
        this.FileDialog00_onclose = function(obj,e)
        {
        	if( 3 == e.reason )
        	{
        		this.addFileList(e.virtualfiles);
        	}
        };

        this.addFileList = function(filelist)
        {
        	var nOrgFileCnt = this.dsFile.rowcount;
        	var nAddFileCnt = filelist.length;
        	if( (nOrgFileCnt + nAddFileCnt) > this.fileConfig.maxCount )
        	{
        		take.alert(this, "", "파일첨부는 최대 " + this.fileConfig.maxCount + "개 까지 가능합니다.");
        		return false;
        	}

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
        	//alert("FileList_onsuccess");
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();

        			break;
        		case 9:	// getFileSize() 실행시 추가 실행
        			var sFileName = escape(encodeURIComponent(nexacro.trim(obj.filename)));

        			var addidx = this.dsFile.addRow();
        			var sBoardAttach = take.nvl(this.fv_objParent.form.fv_sAttachCd, "");
        			this.dsFile.setColumn(addidx, "ATTACH_CD", sBoardAttach);
        			this.dsFile.setColumn(addidx, "FILE_NM", nexacro.trim(obj.filename));
        			this.dsFile.setColumn(addidx, "IMPORT_YN", "N");
        			this.dsFile.setColumn(addidx, "FILE_PATH", this.fv_objParent.form.fv_sFileType);
        			this.dsFile.setColumn(addidx, "FILE_SIZE", e.filesize);
        			this.FileUpTransfer00.addFile(nexacro.trim(obj.filename), obj);

        			break;
        		default :
        			break;
        	}
        }

        //파일추가 후처리 실패이벤트
        this.FileList_onerror = function(obj, e)
        {
        	//alert("FileList_onerror");
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        //업로드 성공이벤트
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	trace("succST-----------------------------------------------------------------");

        	try{
        		this.fv_objParent.form.fnUploadCallback(obj, e);
        	}
        	catch(e){
        		this.fv_objParent.form.close();
        	}


        	trace("succED-----------------------------------------------------------------");
        };

        //업로드 실패이벤트
        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	trace("errorST-----------------------------------------------------------------");

        	this.fv_objParent.form.fnUploadCallback(obj, e, "ERROR");

        	trace("errorED-----------------------------------------------------------------");
        };

        this.grdFile_oncellclick = function(obj,e)
        {
        	var nCellPos = obj.getCellPos();
        	var arrRowidx = parseInt(obj.getSelectedRows());
        	var selCellText = obj.getCellText( arrRowidx, nCellPos );

        	if( "삭제" == selCellText )
        	{
        		var sFileSaveNm = take.nvl(this.dsFile.getColumn( this.dsFile.rowposition, "FILE_SAVE_NM" ), "");
        		this.fv_sDelFileNms = take.nvl(this.fv_sDelFileNms, "");

        		if( "" == this.fv_sDelFileNms )
        		{
        			this.fv_sDelFileNms = sFileSaveNm;
        		}
        		else
        		{
        			this.fv_sDelFileNms += "," + sFileSaveNm;
        		}

        		this.dsFile.deleteRow(this.dsFile.rowposition);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.cmmPost_ontimer,this);
            this.btnFileAdd.addEventHandler("onclick",this.btnFileAdd_onclick,this);
            this.grdFile.addEventHandler("oncellclick",this.grdFile_oncellclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("comFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
