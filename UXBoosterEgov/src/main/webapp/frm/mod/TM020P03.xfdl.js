(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TM020P03");
            this.set_titletext("타임라인상세등록");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,484);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTimeLineDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileResult", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransferTemp", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTimeLineReg","10","9","460","465",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staDateT","10","36","100","31",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("5");
            obj.set_text("일시");
            obj.set_cssclass("sta_WF_th01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("Static01","108","36",null,"31","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","46","21","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("staTitleT","10","staDateT:-1","100","31",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("7");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("Static06","108","Static01:-1",null,"31","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("staContentT","10","staTitleT:-1","100","201",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_th01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("Static08","108","Static06:-1",null,"201","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("staFile","10","staContentT:-1","100","31",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("11");
            obj.set_text("파일");
            obj.set_cssclass("sta_WF_th01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Static("Static11","108","Static08:-1",null,"31","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Calendar("calDate","115","41","110","21",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("0");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Edit("edtTitle","115","Static01:4","329","21",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("1");
            obj.set_maxlength("33");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new TextArea("txaContent","115","Static06:5","329","189",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("2");
            obj.set_maxlength("166");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Button("btnAddFile","116","Static08:4","46","21",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("3");
            obj.set_text("첨부");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new Grid("grdFile","101","344",null,"107","10",null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("13");
            obj.set_binddataset("dsFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"299\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NM\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" text=\"삭제\"/></Band></Format></Formats>");
            this.divTimeLineReg.addChild(obj.name, obj);

            obj = new MaskEdit("mskTime","calDate:6","41","64","21",null,null,null,null,null,null,this.divTimeLineReg.form);
            obj.set_taborder("14");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_trimtype("both");
            this.divTimeLineReg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTimeLineReg.form
            obj = new Layout("default","",0,0,this.divTimeLineReg.form,function(p){});
            this.divTimeLineReg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,484,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divTimeLineReg.form.calDate","value","dsTimeLineDetail","DETAIL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divTimeLineReg.form.edtTitle","value","dsTimeLineDetail","DETAIL_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divTimeLineReg.form.txaContent","value","dsTimeLineDetail","DETAIL_TXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divTimeLineReg.form.edtTitle","accessibilityaction","dsTimeLineInfo","TIMELINE_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TM020P03.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    tm > TM020P02
        *  @FileName    TM020P02.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.09.18
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.18      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sUserCd = "U000000007"; // 임시 유저코드 사용

        this.fv_sParentProjectCd   = this.parent.sProjectCd;
        this.fv_sParentMenuCd      = this.parent.sMenuCd;
        this.fv_sParentTimelineSeq = this.parent.sTimelineSeq;

        this.fv_bWebOnload = false;

        this.fv_nUploadIdx = 0;
        this.fv_nUpFileCnt = 0;
        this.fv_vFile = null;
        this.fv_bData = null;
        this.fv_sFileType = "TML";
        this.fv_objDsNotice = this.dsTimeLineDetail;

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
        this.TM020P02_onload = function(obj, e)
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
            if (take.nvl(sTranId, "")=="") sTranId = "TimeLineDetailSave";
        	switch(sTranId) {
        		case "TimeLineDetailSave":	// 타임라인 디테일 정보 저장
        			var sProjectCd   = take.nvl(this.fv_sParentProjectCd, "");
        			var sMenuCd	     = take.nvl(this.fv_sParentMenuCd, "");
        			var sTimelineSeq = take.nvl(this.fv_sParentTimelineSeq, "");

        			var sTime = take.nvl(this.divTimeLineReg.form.mskTime.value, "");
        			this.dsTimeLineDetail.setColumn(0, "DETAIL_TIME", sTime);

        			this.dsTimeLineDetail.setColumn(0, "PROJECT_CD"  , sProjectCd);
        			this.dsTimeLineDetail.setColumn(0, "MENU_CD"     , sMenuCd);
        			this.dsTimeLineDetail.setColumn(0, "TIMELINE_SEQ", sTimelineSeq);
        			take.transaction
        			(
        				this,
        				"TimeLineDetailSave",
        				"SVC_LOC::tm/timeLineInfoSave.do",
        				"dsTimeLineDetail=dsTimeLineDetail:U dsFile=dsFile:U",
        				"dsFileResult=dsFileResult",
        				"",
        				"fnCallback"
        			);
        	}
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // divTimeLineReg_btnDel_onclick : 삭제 버튼 클릭
        this.divTimeLineReg_btnDel_onclick = function(obj,e)
        {

        };

        // divTimeLineReg_btnDel_onclick : 저장 버튼 클릭
        this.divTimeLineReg_btnSave_onclick = function(obj,e)
        {
        	var sCalDate = take.nvl(this.divTimeLineReg.form.calDate.value, "");
        	var sTime	 = take.nvl(this.divTimeLineReg.form.mskTime.value, "");

        	if(sCalDate == "") {
        		take.alert(this, "Info", "일자를 확인 바랍니다.");
        		this.divTimeLineReg.form.calDate.setFocus();
        		return;
        	} else if(sCalDate.length < 4){
        		take.alert(this, "Info", "일자를 확인 바랍니다.");
        		this.divTimeLineReg.form.calDate.setFocus();
        		return;
        	}

        	if(sTime == "") {
        		take.alert(this, "Info", "시간을 확인 바랍니다.");
        		this.divTimeLineReg.form.mskTime.setFocus();
        		return;
        	} else if(sTime.length < 4){
        		take.alert(this, "Info", "시간을 확인 바랍니다.");
        		this.divTimeLineReg.form.mskTime.setFocus();
        		return;
        	}

        	var ret = take.isValidDate(this.divTimeLineReg.form.calDate.value + this.divTimeLineReg.form.mskTime.value, "yyyyMMddhhmm");
        	if(!ret){
        		take.alert(this, "Info", "시간을 확인 바랍니다.");
        		this.divTimeLineReg.form.mskTime.setFocus();
        	}else {
        		this.fnSave("TimeLineDetailSave");
        	}
        };

        // divTimeLineReg_btnAddFile_onclick : 파일첨부 버튼 클릭
        this.divTimeLineReg_btnAddFile_onclick = function(obj,e)
        {
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        // FileDialog00_onclose : 파일추가 후처리 이벤트
        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        // FileList_onsuccess : 파일추가 후처리 성공이벤트
        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();

        			break;
        		case 3: // read() 실행시 추가 실행
        			this.fv_bData = e.binarydata;

        			var addidx = this.dsFile.addRow();
        			this.dsFile.setColumn(addidx, "FILE_NM", nexacro.trim(obj.filename));
        			this.dsFile.setColumn(addidx, "FILE_BLOB", this.fv_bData);
        			this.dsFile.setColumn(addidx, "IMPORT_YN", "N");
        			this.dsFile.setColumn(addidx, "FILE_PATH", this.fv_sFileType);
        			this.dsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);
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
        				var objDsFile = this.dsFile;
        				var objFileUpTransfer = this.FileUpTransfer00;

        				for (var i = 0; i < objInput.length; i++) {
        					if (objInput[i].type == "file") {
        						if( objInput[i].files.length > 0 )
        						{
        							var reader  = new FileReader();
        							reader.addEventListener("load", function(){
        								objDsFile.setColumn(addidx, "FILE_BLOB", reader.result);
        								objDsFile.setColumn(addidx, "IMPORT_YN", "N");
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
        							objDsFile.setColumn(addidx, "FILE_NM", nexacro.trim(objFile.name));
        							objDsFile.setColumn(addidx, "FILE_PATH", this.fv_sFileType);
        							objDsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);

        							objFileUpTransfer.addFile(obj.filename, obj);
        						}
        					}
        				}
        			}
        			break;
        		default :
        			break;
        	}
        }

        // FileUpTransfer00_onsuccess : 업로드 성공이벤트
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	trace("succST-----------------------------------------------------------------");
        	this.fnTimeLineStatus();
        	this.fnGoList();

        	trace("succED-----------------------------------------------------------------");
        };

        // FileUpTransfer00_onerror : 업로드 실패이벤트
        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	trace("errorST-----------------------------------------------------------------");

        	trace("errorED-----------------------------------------------------------------");
        };

        // FileList_onerror : 파일추가 후처리 실패이벤트
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        // divTimeLineReg_grdFile_oncellclick : 첨부파일 삭제
        this.divTimeLineReg_grdFile_oncellclick = function(obj,e)
        {
        	if (e.cell == 1 && e.fromobject == "[object ButtonControl]")
        	{
        		this.dsFile.deleteRow(e.row);
        	}
        };

        // Common_onkeyup : Edit 컴포넌트 Enter 값 처리
        this.Common_onkeyup = function(obj,e)
        {
        	var objDivTimeLine = this.divTimeLineReg.form;
        	if (e.keycode == 13)
        	{
        		switch(obj.id) {
        		case "calDate":
        			objDivTimeLine.mskTime.setFocus();
        			break;
        		case "mskTime":
        			objDivTimeLine.edtTitle.setFocus();
        			break;
        		case "edtTitle":
        			objDivTimeLine.txaContent.setFocus();
        			break;
        		case "txaContent":
        			//objDivTimeLine.btnAddFile.setFocus();
        			break;
        		}
        	}
        };

        // btnCancel_onclick : X 버튼 클릭 __ 팝업 창 닫기
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	// 공통 코드조회 함수 호출
            //this.fnCommonCode();

        	this.dsTimeLineDetail.addRow();

        	// 오늘 날짜 적용
        	var objDate = take.getTodayTime();
        	var nYear   = objDate.year;
        	var nMonth  = objDate.month;
        	var nDay    = objDate.day;
        	var nHH     = objDate.hh;
        	var nMM     = objDate.mm;
        	var nToday  = nYear+nMonth+nDay;

        	this.divTimeLineReg.form.calDate.set_value(nToday);
        	this.divTimeLineReg.form.mskTime.set_value(nHH+nMM);

        }

        /**
         * addFileList :
         * @example this.addFileList(filelist);
         */
        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
         		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
         		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, nexacro.VirtualFile.openBinary);
        	}
        	// 파일다이얼로그 닫힌 후 저장 버튼으로 포커스
        	this.divTimeLineReg.form.btnSave.setFocus();
        }

        /**
         * fnGoList : 팝업 닫기
         * @example this.fnGoList();
         */
        this.fnGoList = function()
        {
        	this.close();
        }

        /**
         * fnUploadFiles : 파일업로드수행
         * @example this.fnUploadFiles();
         */
        this.fnUploadFiles = function ()
        {
        	var url = this.fileConfig.host + this.fileConfig.uploadUrl;

        	this.fv_nUpFileCnt = this.FileUpTransfer00.filelist.length;
        	this.fv_vFile = this.FileUpTransfer00.filelist;
        	var sAttachCd = this.dsFileResult.getColumn(0, "ATTACH_CD");

        	for( var i=0; i<this.dsFileResult.rowcount; i++ )
        	{
        		var sFileSeq = this.dsFileResult.getColumn(i, "FILE_SEQ");
        		var sFileNm = this.dsFileResult.getColumn(i, "FILE_NM");
        		this.FileUpTransfer00.setPostData(sFileNm, sFileSeq);
        	}

        	var sProjectCd = this.fv_sParentProjectCd;
        	var sMenuCd    = this.fv_sParentMenuCd;

        	this.FileUpTransfer00.setPostData("PROJECT_CD", sProjectCd);
        	this.FileUpTransfer00.setPostData("MENU_CD", sMenuCd);

        	url += "?sAttachCd="+sAttachCd + "&sFilePath="+this.fv_sFileType;

        	trace("!@!@>> url:   " + url);
        	this.FileUpTransfer00.upload(url);
        };

        /**
         * fnTimeLineStatus : 타임라인 상태 변경 트랜잭션 호출
         * @example this.fnTimeLineStatus();
         */
        this.fnTimeLineStatus = function ()
        {
        	var sTimeLineSeq = this.dsTimeLineDetail.getColumn(0, "TIMELINE_SEQ");
        	var sProjectCd   = this.dsTimeLineDetail.getColumn(0, "PROJECT_CD");
        	var sMenuCd      = this.dsTimeLineDetail.getColumn(0, "MENU_CD");
        	var sStatusCd	 = "02";

        	this.dsTemp.setColumn(0,"PROJECT_CD", sProjectCd);
        	this.dsTemp.setColumn(0,"MENU_CD", sMenuCd);
        	this.dsTemp.setColumn(0,"TIMELINE_SEQ", sTimeLineSeq);
        	this.dsTemp.setColumn(0,"TIMELINE_STATUS", sStatusCd);


        	// 최초 디테일 작성시 진행상태 - 진행중 으로 변경
        	//tranSave -> transaction 변경 2021.05.17 전영찬
        // 	take.tranSave(this, "TimeLineStatusSave", "TimelineManagement.timeLineStatus", "dsTemp", "",
        // 		"TIMELINE_SEQ='"+sTimeLineSeq+"' PROJECT_CD='"+sProjectCd+"' TIMELINE_STATUS='"+sStatusCd+"' MENU_CD='"+sMenuCd+"'",
        // 		"fnCallback"
        // 	)
        	take.transaction
        	(
        		this,
        		"TimeLineStatusSave",
        		"SVC_LOC::tm/timeLineStatusSave.do",
        		"dsTemp=dsTemp:U",
        		"",
        		"TIMELINE_SEQ='"+sTimeLineSeq+"' PROJECT_CD='"+sProjectCd+"' TIMELINE_STATUS='"+sStatusCd+"' MENU_CD='"+sMenuCd+"'",
        		"fnCallback"
        	);
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
                case "TimeLineDetailSave" :   // 마스터 저장 콜백
        			if(this.dsFile.rowcount>0){
        				this.fnUploadFiles();
        			}
        			else if (this.dsTimeLineDetail.rowcount>0)
        			{
        				this.fnTimeLineStatus();
        			}
                    break;

                case "TimeLineStatusSave" : //조회 콜백
        			this.close();
                    break;

                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;

                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;

                default :
                    break;
            }
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TM020P02_onload,this);
            this.divTimeLineReg.form.btnSave.addEventHandler("onclick",this.divTimeLineReg_btnSave_onclick,this);
            this.divTimeLineReg.form.calDate.addEventHandler("onkeyup",this.Common_onkeyup,this);
            this.divTimeLineReg.form.edtTitle.addEventHandler("onkeyup",this.Common_onkeyup,this);
            this.divTimeLineReg.form.txaContent.addEventHandler("onkeyup",this.Common_onkeyup,this);
            this.divTimeLineReg.form.btnAddFile.addEventHandler("onclick",this.divTimeLineReg_btnAddFile_onclick,this);
            this.divTimeLineReg.form.grdFile.addEventHandler("oncellclick",this.divTimeLineReg_grdFile_oncellclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransferTemp.addEventHandler("onsuccess",this.FileUpTransferTemp_onsuccess,this);
            this.FileUpTransferTemp.addEventHandler("onerror",this.FileUpTransferTemp_onerror,this);
        };
        this.loadIncludeScript("TM020P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
