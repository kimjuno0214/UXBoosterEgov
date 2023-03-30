(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DM010");
            this.set_titletext("문서관리_문서관리목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocumentGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"D_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"CYCLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocumentInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\">- 선택 -</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">.ppt</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">.pptx</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">.xls</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">.xlsx</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">.txt</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">.xml</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocDel", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENT_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"FOLDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_FOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"D_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/><Column id=\"CYCLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAtchFileId", this);
            obj._setContents("<ColumnInfo><Column id=\"ATCHFILEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCHFILEIDTYPECD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staUploadDateT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("업로드일자");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calUploadFrom","staUploadDateT:3","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMlGroupSearch01","calUploadFrom:0","10","15","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calUploadTo","staMlGroupSearch01:0","10","90","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFileNmT","calUploadTo:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("파일명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFileNm","staFileNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFileTypeT","edtFileNm:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("파일형식");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboFileType","staFileTypeT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsFileCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staFolderT","0","0","280","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("폴더");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDocument","310","0","250","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("파일목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDocumentGroup","0","30","290",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("dsDocumentGroup");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"244\"/><Column size=\"45\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:FOLDER_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\"/><Cell col=\"1\" displaytype=\"expr:(dataset.getColumn( currow, &apos;PARENT_FOLDER&apos; ) == &apos;0&apos;) ? &apos;none&apos; : &apos;buttoncontrol&apos;\" edittype=\"expr:(dataset.getColumn( currow, &apos;PARENT_FOLDER&apos; ) == &apos;0&apos;) ? &apos;none&apos; : &apos;button&apos;\" text=\"expr:(dataset.getRowType( currow ) == 2) ? &apos;&apos; : &apos;수정&apos;\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDocumentInfo","grdDocumentGroup:20","30",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsDocumentInfo");
            obj.set_autofittype("col");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"400\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"중요\"/><Cell col=\"2\" text=\"파일형식\"/><Cell col=\"3\" text=\"파일명\"/><Cell col=\"4\" text=\"파일크기(KB)\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:IMPORT_YN\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:FILE_TYPE\" edittype=\"none\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:FILE_NM\"/><Cell col=\"4\" text=\"bind:FILE_SIZE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" text=\"bind:REG_NM\" textAlign=\"center\"/><Cell col=\"6\" textAlign=\"CENTER\" text=\"bind:REG_DT\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"5","70","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("파일삭제");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDownloadSub",null,"5","70","21","btnDelete:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("다운로드");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUploadSub",null,"5","58","21","btnDownloadSub:3",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("업로드");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static27","290","0","20",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("red");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnNewSub","232","5","58","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("새폴더");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtFileNm","value","dsSearch","FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboFileType","value","dsSearch","FILE_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calUploadFrom","value","dsSearch","DATE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calUploadTo","value","dsSearch","DATE_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DM010.xfdl", function() {
        /**
        *  문서관리
        *
        *  @MenuPath    문서관리 > 문서관리 > 문서관리
        *  @FileName    DM010.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.08.21
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.21      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd 		= nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_objGdsUserInfo  = nexacro.getApplication().gdsUserInfo;
        this.fv_arrUserParam 	= null;
        this.fv_sImportYn 		= null;   //파일 중요 유무
        this.fv_sFolderDel 		= "N";   //파일 중요 유무
        this.fileConfig = {
                //TODO URL
                host         : nexacro.getEnvironment().services[take.nvl(take.SvcId,"SVC_LOC")].url,
                uploadUrl    : "dm/fileUpload.do",
                downloadUrl  : "fileDownload.do",
        		zipDownloadUrl  : "zipDownload.do",
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

            switch(sTranId)
            {
                case "Group" :
        			this.dsDocumentGroup.clearData();

        			var sParam = "sProjectCd='" + this.fv_sProjectCd + "' sMenuCd='" + this.ProgId + "'";

        			if( this.fv_arrUserParam.private_yn == "Y" )
        			{
        				sParam += "PRIVATE_YN='" + this.fv_arrUserParam.private_yn + "'";
        			}

        			take.tranSelect(this, sTranId, "DocumentManagement.documentInfoGroup", "", "dsDocumentGroup", sParam, "fnCallback");
                    break;
        		case "List" :
        			var objDsDg = this.dsDocumentGroup;
        			var objDsSc = this.dsSearch;
        			var nRowPos = objDsDg.rowposition;

        			var sCalFrom = objDsSc.getColumn(0, "DATE_FROM");
        			var sCalTo	 = objDsSc.getColumn(0, "DATE_TO");
        			if( !take.isEmpty(sCalFrom) && !take.isEmpty(sCalTo) ){
        				var bFromTo = take.isFromTo(sCalFrom, sCalTo);
        				if( !bFromTo ){
        					take.alert(this, "", "업로드일자 기간이 잘못되었습니다.");
        					return;
        				}
        			}

        			var sProjectCd 	= objDsDg.getColumn(nRowPos, "PROJECT_CD");
        			var sMenuCd 	= objDsDg.getColumn(nRowPos, "MENU_CD");
        			var sDocumentSeq = objDsDg.getColumn(nRowPos, "DOCUMENT_SEQ");

        			objDsSc.setColumn(0, "PROJECT_CD", sProjectCd);
        			objDsSc.setColumn(0, "MENU_CD", sMenuCd);
        			objDsSc.setColumn(0, "DOCUMENT_SEQ", sDocumentSeq);

        			var sPram = "";
        			if( this.fv_arrUserParam.private_yn == "Y" )
        			{
        				sParam = "PRIVATE_YN='" + this.fv_arrUserParam.private_yn + "'";
        			}

        			this.dsDocumentInfo.clearData();

        			take.tranSelect(this, sTranId, "DocumentManagement.documentInfoList", "dsSearch", "dsDocumentInfo", sParam, "fnCallback");

                    break;
                default :
                    break;
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
            // 공통 '신규' 버튼 -> 새폴더 버튼 이벤트
            var objDsDoc = this.dsDocumentGroup;
            var nRow = objDsDoc.rowposition;
        	var sSeq = objDsDoc.getColumn(nRow, "DOCUMENT_SEQ");
            var sFNm = objDsDoc.getColumn(nRow, "FOLDER_NM");
        	var sLoc = objDsDoc.getColumn(nRow, "FOLDER_LOCATION");
            var aAgrKey = {sTitle:"새폴더 등록", sProjectCd:this.fv_sProjectCd, sMenuCd:this.ProgId, nRow:nRow, sSeq:sSeq, sFNm:sFNm, sLoc:sLoc};

        	take.openPopup(this, "DM010P01" , "frm::mod/DM010P01.xfdl"
        									, aAgrKey
                                            //, "showtitlebar=true layered=true"
                                            , ""
        									, "", false);
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "DeleteDir";

            var objDsDoc = this.dsDocumentGroup;
            var sLev = objDsDoc.getColumn(objDsDoc.rowposition, "LEV");

        	if( sLev == "0" ) {
        		take.alert(this, "Info", "Root경로는 삭제할 수 없습니다..");
                return;
        	}

            switch(sGrdId)
            {
                case "DeleteDir" :  // 파일목록 삭제
                    this.dsDocDel.clearData();
                    var bRowDel = take.confirm(this, "question", "선택한 폴더를 삭제 하시겠습니까?");
                    if (bRowDel){
        				var objDsDoc    = this.dsDocumentGroup;
        				var objDsDocDel    = this.dsDocDel;
                        var nRowPos     = objDsDoc.rowposition;
                        var nAddRow     = objDsDocDel.addRow();
                        objDsDocDel.copyRow(nAddRow, objDsDoc, nRowPos);

                        objDsDoc.set_enableevent(false);
                        objDsDoc.set_updatecontrol(false);
                        objDsDoc.setRowType(nRowPos, "D");
                        objDsDoc.set_updatecontrol(true);
                        objDsDoc.set_enableevent(true);

                        var sParam = "ATTACH_CD='" + objDsDoc.getColumn(nRowPos,"DOCUMENT_ATTACH") + "'";

        				if( this.fv_arrUserParam.private_yn == "Y" )
        				{
        					sParam = "PRIVATE_YN='" + this.fv_arrUserParam.private_yn + "'";
        				}

        //                 take.tranSave(this, "attDel", "SystemCommon.attachInfoFile", "dsDocumentGroup", "", sParam, function()
        //                 {
        //                     objDsDocDel.set_enableevent(false);
        //                     objDsDocDel.set_updatecontrol(false);
        //                     objDsDocDel.setRowType(0, "D");
        //                     objDsDocDel.set_updatecontrol(true);
        //                     objDsDocDel.set_enableevent(true);
        //                     take.tranSave(this, "DeleteDir", "DocumentManagement.documentInfo", "dsDocDel", "", sParam, "fnCallback");
        //                 });

                        //파일삭제
                        take.transaction(this, "attDel", "SVC_LOC::sc/attachInfoFileSave.do", "dsFolder=dsDocumentGroup:U", "", sParam, function()
                        {
                            objDsDocDel.set_enableevent(false);
                            objDsDocDel.set_updatecontrol(false);
                            objDsDocDel.setRowType(0, "D");
                            objDsDocDel.set_updatecontrol(true);
                            objDsDocDel.set_enableevent(true);

                            //문서삭제
                            take.transaction(this, "DeleteDir", "SVC_LOC::dm/documentSave.do", "dsFolder=dsDocDel:U", "", sParam, "fnCallback");
                        });
                    }

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //grdDocumentInfo_onheadclick : 그리드 head cell 클릭
        this.grdDocumentInfo_onheadclick = function(obj,e)
        {
        	if(e.col == 0){
                //전체선택/해제
                take.fnGridCheckAll(obj, e.cell, "CHK");
        	}
        };

        //파일목록 그리드 cell 더블클릭
        this.divDetail_grdDocumentInfo_oncelldblclick = function(obj,e)
        {
        	var objDsDoc = this.dsDocumentInfo;
        	var nRowPos  = objDsDoc.rowposition;
        	var sFileType 	= objDsDoc.getColumn(nRowPos, "FILE_TYPE");
        	var sAttachCd 	= objDsDoc.getColumn(nRowPos, "ATTACH_CD");
        	var sFileSeq	= objDsDoc.getColumn(nRowPos, "FILE_SEQ");
            var sFileNm = "";
        	var nRowGroup;

        	if( sFileType == "DIR" ) {
                // 폴더일때 해당 폴더로 진입
        		sFileNm     = objDsDoc.getColumn(nRowPos, "FILE_NM");
                nRowGroup   = this.dsDocumentGroup.findRow("FOLDER_NM", sFileNm);
                this.dsDocumentGroup.set_rowposition(nRowGroup);
                this.fnSearch('List');
        	} else {
        		// 파일 다운로드
        		var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl
        							+ "?sAttachCd=" + sAttachCd
        							+ "&sFileSeq=" + sFileSeq;

        		this.FileDownTransfer00.set_url(downloadUrl);
        		this.FileDownTransfer00.download();
        	}
        };

        //새폴더 버튼 클릭
        this.btnNewSub_onclick = function(obj,e)
        {
            this.fnAddRow();
        };

        //문서관리 초기 리스트
        this.divDetail_grdDocumentGroup_onselectchanged = function(obj,e)
        {
        	if(e.oldrow == -1) {
                if(this.fv_sFolderDel == "N") {
                    this.fnSearch('List');
                }
            }
        };

        //btnUploadSub_onclick : 업로드 버튼 클릭
        this.btnUploadSub_onclick = function(obj,e)
        {
        	var objDsDoc = this.dsDocumentGroup;
        	var sLev = objDsDoc.getColumn(objDsDoc.rowposition, "LEV");

        	var sDoc = take.nvl(objDsDoc.getColumn(objDsDoc.rowposition, "DOCUMENT_SEQ"), "0000000000");
        	//if( sLev == "0" )
        	if( sDoc == "0000000000" )
        	{
        		take.alert(this, "Info", "Root경로에서는 파일 업로드를 할 수 없습니다.\n하위 폴더 진입후 업로드 해주세요.");
        	}
        	else
        	{
                this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        	}
        };

        //파일 다이얼로그 오픈이벤트
        this.FileDialog00_onclose = function(obj,e)
        {
            var bFileYn = take.confirm(this, "question", "업로드하는 파일의 '중요도'를 선택 하시겠습니까?");
            if (bFileYn){
                this.fv_sImportYn = "Y";
            } else {
                this.fv_sImportYn = "N";
            }

            this.addFileList(e.virtualfiles);
        };

        // 업로드 파일리스트
        this.addFileList = function(filelist)
        {
        	for (var i = 0, len = filelist.length, vFile; i < len; i++)
        	{
        		vFile = filelist[i];
        		vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        		vFile.addEventHandler("onerror", this.FileList_onerror , this);

        		vFile.open(null, 1);
        	}
        }

        //파일리스트 성공
        this.FileList_onsuccess = function(obj, e)
        {
        	var objDsDoc = this.dsDocumentGroup;
            var nDocRow = objDsDoc.rowposition;
            var sProjectCd 	= objDsDoc.getColumn(nDocRow, "PROJECT_CD");
        	var sMenuCd 	= objDsDoc.getColumn(nDocRow, "MENU_CD");
        	var sDocumentSeq= objDsDoc.getColumn(nDocRow, "DOCUMENT_SEQ");
        	var sAttachCd 	= objDsDoc.getColumn(nDocRow, "DOCUMENT_ATTACH");
            var sImportYn   = this.fv_sImportYn;

        	var url = this.fileConfig.host + this.fileConfig.uploadUrl
        				+ "?sProjectCd=" + sProjectCd
        				+ "&sMenuCd=" + sMenuCd
        				+ "&sDocumentSeq=" + sDocumentSeq
        				+ "&sAttachCd=" + sAttachCd
                        + "&sImportYn=" + sImportYn
        				+ "&sAttachType=DOC";

        	switch (e.reason)
        	{
        		case 1:
        			var bFileNm = false;    //파일이름 중복여부

                    for(var i=0; i<this.dsDocumentInfo.rowcount; i++){
                        if (obj.filename == this.dsDocumentInfo.getColumn(i, "FILE_NM"))
                        {
                            bFileNm = true;
                            break;
                        }
                    }

                    if(bFileNm) {
                        alert("이미 폴더에 중복된 파일명이 존재합니다.\n기존파일을 삭제해주세요.");
                        return;
                    } else {
                        obj.getFileSize();
                    }
        			break;
        		case 9:
                    var extName     = obj.filename.substr(obj.filename.lastIndexOf(".") + 1).toLowerCase()
                    var sFileSaveNm = this.fnGetUuId() + "." + extName

        			var nRowIdx = this.dsFile.addRow();
                    this.dsFile.setColumn(nRowIdx, "FILE_PATH", "DOC");
        			this.dsFile.setColumn(nRowIdx, "FILE_NM", obj.filename);
                    this.dsFile.setColumn(nRowIdx, "FILE_SAVE_NM", sFileSaveNm);
        			this.dsFile.setColumn(nRowIdx, "IMPORT_YN", this.fv_sImportYn);
        			this.dsFile.setColumn(nRowIdx, "FILE_TYPE", extName);
        			this.dsFile.setColumn(nRowIdx, "FILE_SIZE", e.filesize);
                    this.dsFile.setColumn(nRowIdx, "FILE_BLOB", e.binarydata);
                    this.dsFile.setColumn(nRowIdx, "ATTACH_CD", sAttachCd);
                    this.dsFile.setColumn(nRowIdx, "DELETE_YN", "N");

                    this.FileUpTransfer00.addFile(obj.filename, obj);
                    this.FileUpTransfer00.upload(url);
        			break;
        	}
        }

        //파일리스트 에러
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        // 업로드성공
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this.FileUpTransfer00.clearFileList();
        	//this.alert(e.code+":"+e.message);

            var sTranId = "saveAtchFile";
            var sUrl	= "SVC_LOC::file/saveAtchFile.do";
            var inDs	= "dsFile=dsFile:U";
            var outDs	= "dsFile=dsFile";
            var params	= "";

            take.transaction(
                this, sTranId, sUrl, inDs, outDs, params,
                function(sId, nErrCd, sErrMsg){
                     this.fnSearch('List');
                }
            );
        };

        //업로드 에러
        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this.alert(e.errormsg+":"+e.statuscode);
        };

        //btnDownloadSub_onclick : 다운로드 버튼 클릭
        this.btnDownloadSub_onclick = function(obj,e)
        {
            var sAttachCd = "";
            var sFileSeq = "";
            var arrAttachCd, arrFileSeq;
            var arrChkRow = take.getChkRow(this.dsDocumentInfo);
            var objDsDoc = this.dsDocumentInfo;

            if(arrChkRow.length == 0){
                alert("선택된 항목이 없습니다.");
                return;
            }

            for(var i=0; i<arrChkRow.length; i++) {
        		if( i == 0 )
        		{
        			sAttachCd = objDsDoc.getColumn(arrChkRow[i], "ATTACH_CD");
        		}
                sFileSeq += (i == 0 ? "" : "/") + objDsDoc.getColumn(arrChkRow[i], "FILE_SEQ");
            }

            if(arrChkRow.length > 1) {
                //다중건 zip파일 압축 다운로드
                //arrAttachCd = sAttachCd.split(",");
                //arrFileSeq = sFileSeq.split(",");
        		//alert(arrChkRow.length + "건 zip파일 압축 다운로드" + "\n" + arrFileSeq);

        		var downloadUrl = this.fileConfig.host + this.fileConfig.zipDownloadUrl
        							+ "?sAttachCd=" + sAttachCd
        							+ "&sFileSeq=" + sFileSeq;

        		this.FileDownTransfer00.set_url(downloadUrl);
        		this.FileDownTransfer00.download();
            } else {
        		// 단건 파일 다운로드
        		var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl
        							+ "?sAttachCd=" + sAttachCd
        							+ "&sFileSeq=" + sFileSeq;

        		this.FileDownTransfer00.set_url(downloadUrl);
        		this.FileDownTransfer00.download();
            }
        };

        //삭제버튼
        this.btnDelete_onclick = function(obj,e)
        {
        	//this.fnDelRow('ListDel');
            var sGrdId = "ListDel";
            var sAttachCd = "";
            var sfileSeq = "";
            var arrAttachCd, arrFileSeq;
            var arrChkRow = take.getChkRow(this.dsDocumentInfo);

            if(arrChkRow.length == 0){
               take.alert(this, "Info", "선택된 항목이 없습니다.");
                return;
            }

            var bRowDel = take.confirm(this, "question", "선택된 파일을 삭제 하시겠습니까?");
            if (bRowDel){
                var objDsDoc = this.dsDocumentInfo;
                for(var i=0; i<arrChkRow.length; i++) {
                    if (objDsDoc.getColumn(arrChkRow[i], "FILE_TYPE") == "DIR") {   // 폴더삭제할시 그룹 초기화
                        sGrdId = "DeleteFolder";
                        break;
                    }
                }
                take.transaction(this, sGrdId, "SVC_LOC::dm/delete.do", "dsDocumentInfo=dsDocumentInfo:U", "", "", "fnCallback");
            }
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화함수
         * @param  {String} sParam N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	var objProgInfo = take.getProgInfo(this);
        	this.fv_arrUserParam = objProgInfo.UserParam;

            var sParam = "PROJECT_CD='" + this.fv_sProjectCd + "' MENU_CD='" + this.ProgId + "'";

        	if( this.fv_arrUserParam.private_yn == "Y" )
        	{
        		sParam += " PRIVATE_YN='" + this.fv_arrUserParam.private_yn + "'";
        	}

            take.tranSelect(this, "FileTypeS", "DocumentManagement.fileTypeSelect", "", "dsFileCode", sParam,
            function(sId, nErrCd, sErrMsg)
                {
                    this.dsFileCode.insertRow(0);
                    this.dsFileCode.setColumn(0, "CODE", "");
                    this.dsFileCode.setColumn(0, "NAME", "전체");

                    this.divSearch.form.cboFileType.set_index(0);

                    this.fnSearch('Group');
                }
            );

            //this.divSearch.form.cboFileType.set_index(0);

            //this.fnSearch('Group');
        }

        // 폴더 리스트(그리드) 선택 버튼 : 폴더 상세 내역 / 수정 / 삭제
        this.grdDocumentGroup_oncellclick = function(obj,e)
        {
        	var nCellPos = obj.getCellPos();
        	var arrRowidx = parseInt(obj.getSelectedRows());
        	var selCellText = obj.getCellText( arrRowidx, nCellPos );

            if(e.clickitem == "") {
                if(e.oldrow != e.row) {
                    this.fnSearch('List');
                }
            } else if(e.clickitem == "control") {
                if(selCellText == "수정") {
                    this.fnModifyPop();
                } else {    // '삭제'
        //             var bRowDel = take.confirm(this, "question", "선택한 폴더를 삭제 하시겠습니까?");
        //             if (bRowDel){
        //                 this.fnDelRow("grdAddressbookGroup");
        //             }
                }
            }
        };

        /**
         * fnModifyPop : 폴더 수정 팝업 오픈
         * @param  {String} N/A 문자형 인자
         * @param  {Number} N/A 숫자형 인자
         * @example this.fnModifyPop();
         */
        this.fnModifyPop = function()
        {
            var objDsDoc    = this.dsDocumentGroup;
            var nRow        = objDsDoc.rowposition;
            var sDocSeq     = objDsDoc.getColumn(nRow, "DOCUMENT_SEQ");
            var sPSeq       = objDsDoc.getColumn(nRow, "PARENT_FOLDER");
            var nFindRow    = objDsDoc.findRow("DOCUMENT_SEQ", sPSeq);
            var sParentNm   = objDsDoc.getColumn(nFindRow, "FOLDER_NM");
            var aAgrKey     = {sTitle:"폴더 수정", sProjectCd:this.fv_sProjectCd, sMenuCd:this.ProgId, sDocSeq:sDocSeq, sParentNm:sParentNm};

            take.openPopup(this, "DM010P01" , "frm::mod/DM010P01.xfdl"
        									, aAgrKey
                                            //, "showtitlebar=true layered=true"
                                            , ""
        									, "", false);
        }

        /**
         * fnGetUuId : 랜덤 숫자 생성
         */
        this.fnGetUuId = function(){
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 3 | 8);
                return v.toString(16);
            });
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
                case "Group" : //조회 콜백
                    //this.divSearch.form.cboFolderNm.set_index(0);

                    break;
                case "List" : //조회 콜백
                    var nCnt = this.dsDocumentInfo.rowcount;
                    this.divDetail.form.staDocument.set_text("파일목록 (총 " + nCnt + "건)");

                    //this.dsSearch.clearData();
                    //this.dsSearch.addRow();
                    break;
                case "ListDel" : //삭제 콜백
                    this.fnSearch('List');
                    break;
                case "DeleteFolder" : //폴더삭제 콜백
                    //this.fnSearch('Group');
                    this.fv_sFolderDel = "Y";
                    var nRow = this.dsDocumentGroup.rowposition;

                    this.dsDocumentGroup.clearData();

                    var sParam = "sProjectCd='" + this.fv_sProjectCd + "' sMenuCd='" + this.ProgId + "'";

        			if( this.fv_arrUserParam.private_yn == "Y" )
        			{
        				sParam = "PRIVATE_YN='" + this.fv_arrUserParam.private_yn + "'";
        			}

                    take.tranSelect(this, "Group2", "DocumentManagement.documentInfoGroup", "", "dsDocumentGroup", sParam,
                        function(sId, nErrCd, sErrMsg)
                        {
                            this.dsDocumentGroup.set_rowposition(nRow);
                            this.fv_sFolderDel = "N";
                            this.fnSearch('List');
                    });
                    break;
                case "DeleteDir" : //삭제 콜백
                    take.alert(this, "Info", "폴더 삭제가 정상 처리 되었습니다.");
                    this.fnSearch('Group');
                    break;
                default :
                    break;
            }
        }

        /**
        * fnPopCallback : popup callback
        * @param  : N/A
        * @return : N/A
        * @example :
        */
        this.fnPopCallback = function(sPopId, sArg)
        {
            switch(sPopId)
            {
                case "DM010P01" :
                    this.fnSearch('Group');
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
            this.btnShowHide.addEventHandler("onclick",this.btnHide_onclick,this);
            this.divDetail.form.grdDocumentGroup.addEventHandler("oncellclick",this.grdDocumentGroup_oncellclick,this);
            this.divDetail.form.grdDocumentGroup.addEventHandler("onselectchanged",this.divDetail_grdDocumentGroup_onselectchanged,this);
            this.divDetail.form.grdDocumentInfo.addEventHandler("onheadclick",this.grdDocumentInfo_onheadclick,this);
            this.divDetail.form.grdDocumentInfo.addEventHandler("oncelldblclick",this.divDetail_grdDocumentInfo_oncelldblclick,this);
            this.divDetail.form.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.divDetail.form.btnDownloadSub.addEventHandler("onclick",this.btnDownloadSub_onclick,this);
            this.divDetail.form.btnUploadSub.addEventHandler("onclick",this.btnUploadSub_onclick,this);
            this.divDetail.form.btnNewSub.addEventHandler("onclick",this.btnNewSub_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.dsDocDel.addEventHandler("onrowposchanged",this.dsDocumentGroup_onrowposchanged,this);
        };
        this.loadIncludeScript("DM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
