(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM030P01");
            this.set_titletext("프로젝트관리_메뉴관리_대메뉴추가팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboDeviceType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMenuYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ICON\" type=\"STRING\" size=\"255\"/><Column id=\"DEVICE_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"breaking_txt\" type=\"STRING\" size=\"255\"/><Column id=\"CONCENT_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REPLY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"TEMPLATE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DOCUMENT_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ROOT_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectMenuDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ICON\" type=\"STRING\" size=\"255\"/><Column id=\"DEVICE_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_START_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"SCHEDULE_END_TIME\" type=\"STRING\" size=\"255\"/><Column id=\"BREAKING_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"CONCENT_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"ATTACH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REPLY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"TEMPLATE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PUSH_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DOCUMENT_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ROOT_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgMenuIcon","10","10",null,"214","10",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_stretch("fixaspectratio");
            obj.set_background("darkgray");
            this.divMain.addChild(obj.name, obj);

            obj = new Button("btnUpload","145","235","50","23",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_basic01");
            this.divMain.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"235","50","23","164",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic01");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.imgMenuIcon.set_taborder("1");
                p.imgMenuIcon.set_text("");
                p.imgMenuIcon.set_stretch("fixaspectratio");
                p.imgMenuIcon.set_background("darkgray");
                p.imgMenuIcon.move("10","10",null,"214","10",null);

                p.btnUpload.set_taborder("1");
                p.btnUpload.set_text("업로드");
                p.btnUpload.set_cssclass("btn_WF_basic01");
                p.btnUpload.move("145","235","50","23",null,null);

                p.btnAdd.set_taborder("2");
                p.btnAdd.set_text("확인");
                p.btnAdd.set_cssclass("btn_WF_basic01");
                p.btnAdd.move(null,"235","50","23","164",null);
            	}
            );
            this.divMain.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMain.form
            obj = new Layout("default0","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.imgMenuIcon.set_taborder("1");
                p.imgMenuIcon.set_text("");
                p.imgMenuIcon.set_stretch("fixaspectratio");
                p.imgMenuIcon.move("10","10",null,"224","10",null);

                p.btnUpload.set_taborder("1");
                p.btnUpload.set_text("업로드");
                p.btnUpload.set_cssclass("btn_WF_basic01");
                p.btnUpload.set_onclick("divMain_btnUpload_onclick");
                p.btnUpload.move("145","241","50","23",null,null);

                p.btnAdd.set_taborder("2");
                p.btnAdd.set_text("저장");
                p.btnAdd.set_cssclass("btn_WF_basic01");
                p.btnAdd.set_onclick("btnAdd_onclick");
                p.btnAdd.move(null,"241","50","23","164",null);
            	}
            );
            this.divMain.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMain.form
            obj = new Layout("default1","",0,0,this.divMain.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.imgMenuIcon.set_taborder("1");
                p.imgMenuIcon.set_text("");
                p.imgMenuIcon.set_stretch("fixaspectratio");
                p.imgMenuIcon.move("10","10",null,"224","10",null);

                p.btnUpload.set_taborder("1");
                p.btnUpload.set_text("업로드");
                p.btnUpload.set_cssclass("btn_WF_basic01");
                p.btnUpload.set_onclick("divMain_btnUpload_onclick");
                p.btnUpload.move("145","241","50","23",null,null);

                p.btnAdd.set_taborder("2");
                p.btnAdd.set_text("저장");
                p.btnAdd.set_cssclass("btn_WF_basic01");
                p.btnAdd.set_onclick("btnAdd_onclick");
                p.btnAdd.move(null,"241","50","23","164",null);
            	}
            );
            this.divMain.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",420,270,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("프로젝트관리_메뉴관리_대메뉴추가팝업");

                p.divMain.set_taborder("0");
                p.divMain.set_cssclass("dvi_WF_tabBox01");
                p.divMain.set_text("");
                p.divMain.move("0","0",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",420,271,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divMain.set_taborder("0");
                p.divMain.set_cssclass("dvi_WF_tabBox01");
                p.divMain.set_text("");
                p.divMain.move("0","0",null,null,"0","-2");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default1","",430,270,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divMain.set_taborder("0");
                p.divMain.set_cssclass("dvi_WF_tabBox01");
                p.divMain.set_text("");
                p.divMain.move("0","0",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM030P01_bak.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    PM > PM030P01
        *  @FileName    PM030P01.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.10.15
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.10.15      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sParentProjectCd  = take.nvl(this.parent.sProjectCd, "");
        this.fv_sParentMenuCd    = take.nvl(this.parent.sMenuCd, "");
        //
        // this.fv_sParentDeviceType = take.nvl(this.parent.sDeviceType, "");
        // this.fv_sParentUseYn 	  = take.nvl(this.parent.sUseYn, "");
        // this.fv_sParentMenuNm 	  = take.nvl(this.parent.sMenuNm, "");
        // this.fv_sParentDisplayYn  = take.nvl(this.parent.sDisplayYn, "");

        // 파일 업로드 관련
        this.fv_sFileSize  = "";
        this.fv_bData 	   = null;
        this.fv_sFileSize  = "";
        this.fv_sFileType  = "PJT";

        this.fv_sCloseGubun = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM030P01_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                // 초기화
        		this.fnInIt();
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectMenuDetail";

        	var sProjectCd = this.fv_sParentProjectCd;
        	var sMenuCd    = this.fv_sParentMenuCd;
            take.tranSelect
        	(
        		this,
        		"projectMenuDetail",
        		"ProjectManagement.projectMenuDetail",
        		"",
        		"dsProjectMenuDetail",
        		"MENU_CD='" + sMenuCd + "' PROJECT_CD='" + sProjectCd + "'",
        		"fnCallback"
        	)

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

        	var objDs   = this.dsProjectMenuList;
        	objDs.clearData();
        	objDs.addRow();
        	objDs.setColumn(0, "PROJECT_CD", this.fv_sParentProjectCd);
        	objDs.setColumn(0, "MENU_CD"   , this.fv_sParentMenuCd);

        	take.transaction
        	(
        		this,
        		"projectMenuSave",
        		"SVC_LOC::pm/projectMenuSave.do",
        		"dsProjectMenuList=dsProjectMenuList:U dsFile=dsFile:U",
        		"",
        		"sProjectCd='"+this.fv_sParentProjectCd+"' MENU_CD='"+this.fv_sParentMenuCd+"'",
        		"fnCallback"
        	);
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
        // X 버튼 클릭 __ 팝업 창 닫기
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close(-1);
        };

        // 추가 버튼 클릭
        this.btnAdd_onclick = function(obj,e)
        {
        	this.fnSave("Save");
        };

        // btnUpload_onclick : 업로드 버튼 클릭
        this.divMain_btnUpload_onclick = function(obj,e)
        {
        	// 업로드 소스 작성
        	this.FileDialog00.open('nexacro17', FileDialog.MULTILOAD);
        };

        // FileDialog00_onclose : 파일 다이얼로그 닫힐 때 발생
        this.FileDialog00_onclose = function(obj,e)
        {
        	this.addFileList(e.virtualfiles);
        };

        // 파일추가 후처리 성공이벤트
        this.FileList_onsuccess = function(obj, e)
        {
        	//trace("!@!@>> reason:  " + e.reason);
        	switch (e.reason)
        	{
        		case 1:
        			this.fv_sFileSize = obj.getFileSize();

        			break;
        		case 3: // read() 실행시 추가 실행
        			this.divMain.form.imgMenuIcon.set_image(e.binarydata);

        			this.fv_bData = e.binarydata;

        			this.dsFile.clearData();
        			var addidx = this.dsFile.addRow();
        			this.dsFile.setColumn(addidx, "FILE_NM", nexacro.trim(obj.filename));
        			this.dsFile.setColumn(addidx, "FILE_BLOB", this.fv_bData);
        			this.dsFile.setColumn(addidx, "IMPORT_YN", "N");
        			this.dsFile.setColumn(addidx, "FILE_PATH", this.fv_sFileType);
        			this.dsFile.setColumn(addidx, "FILE_SIZE", this.fv_sFileSize);
        			this.FileUpTransfer00.addFile(obj.filename, obj);

        			break;
        		case 9:	// getFileSize() 실행시 추가 실행
        			if( nexacro._Browser == "Runtime" )
        			{
        				//파일 바이너리데이터 생성
        				obj.read();
        			}
        			else
        			{
        				var objIframe    	  = window.document.getElementsByTagName('iframe');
        				var objInput     	  = objIframe[0].contentWindow.document.getElementsByTagName("input");
        				var objImageView 	  = this.divMain.form.imgMenuIcon;
        				var objDsFile    	  = this.dsFile;
        				var objFileUpTransfer = this.FileUpTransfer00;
        				objFileUpTransfer.clearFileList();

        				for (var i = 0; i < objInput.length; i++) {
        					if (objInput[i].type == "file") {
        						if( objInput[i].files.length > 0 )
        						{
        							var reader  = new FileReader();
        							reader.addEventListener("load", function(){
        								objImageView.set_image(reader.result);

        								objDsFile.setColumn(addidx, "FILE_BLOB", reader.result);
        								objDsFile.setColumn(addidx, "IMPORT_YN", "N");
        							});

        							reader.readAsDataURL(objInput[i].files[0], "EUC-KR");
        							objDsFile.clearData();
        							var addidx = objDsFile.addRow();
        							objDsFile.setColumn(addidx, "FILE_NM", nexacro.trim(objInput[i].files[0].name));
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

        // 파일추가 후처리 실패이벤트
        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInIt : 초기화 함수
         * @example this.fnInIt();
         */
        this.fnInIt = function()
        {
        	this.fnSearch("projectMenuDetail");
        }


        /**
         * addFileList : 멀티 파일 추가
         * @example this.addFileList();
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
                case "projectMenuSave" : // 저장 콜백
        			if( sErrMsg == "SUCC" )
        			{
        				this.fv_sCloseGubun = "save"
        				this.close(this.fv_sCloseGubun);
        			}
                    break;

                case "Transation id 02" :  //조회 콜백
                    //Script
                    break;
                case "Transation id 03" : //조회 콜백
                    //Script
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
            this.addEventHandler("onload",this.PM030P01_onload,this);
            this.divMain.form.btnUpload.addEventHandler("onclick",this.divMain_btnUpload_onclick,this);
            this.divMain.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
        };
        this.loadIncludeScript("PM030P01_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
