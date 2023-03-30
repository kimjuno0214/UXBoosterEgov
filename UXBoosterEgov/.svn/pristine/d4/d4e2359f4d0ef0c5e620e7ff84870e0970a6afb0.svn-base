(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM040");
            this.set_titletext("대량생성기");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CRUD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_LAYOUT\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_TITLE01\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE01\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MAPPING_COL01\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_TITLE02\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE02\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_MAPPING_COL02\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_TITLE03\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE03\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelDataImport", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">1단</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">2단</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">3단</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboTemplate", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">템플릿01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">템플릿02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">템플릿03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">템플릿04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">템플릿05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">템플릿06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">템플릿07</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staCOL_IDT","20","10",null,"21","20",null,null,null,null,null,this.divSearch.form);
            obj.set_text("대량생성은 정의된 엑셀양식대로 화면을 생성합니다.");
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","74",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","150","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("엑셀 업로드 결과");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsExcelDataImport");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("col");
            obj.getSetter("takegrid").set("crud");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"1\" rowspan=\"2\" text=\"템플릿\"/><Cell col=\"2\" rowspan=\"2\" text=\"Prefix\"/><Cell col=\"3\" rowspan=\"2\" text=\"화면ID\"/><Cell col=\"4\" rowspan=\"2\" text=\"화면명\"/><Cell col=\"5\" rowspan=\"2\" text=\"CUD\"/><Cell col=\"6\" rowspan=\"2\" text=\"검색\"/><Cell col=\"7\" colspan=\"3\" text=\"Grid1 (또는 Tree)\"/><Cell col=\"10\" colspan=\"3\" text=\"Grid2 (또는 Detail)\"/><Cell col=\"13\" colspan=\"2\" text=\"Grid3 (또는 Detail)\"/><Cell row=\"1\" col=\"7\" text=\"제목\"/><Cell row=\"1\" col=\"8\" text=\"Sql Mapper\"/><Cell row=\"1\" col=\"9\" text=\"매핑필드\"/><Cell row=\"1\" col=\"10\" text=\"제목\"/><Cell row=\"1\" col=\"11\" text=\"Sql Mapper\"/><Cell row=\"1\" col=\"12\" text=\"매핑필드\"/><Cell row=\"1\" col=\"13\" text=\"제목\"/><Cell row=\"1\" col=\"14\" text=\"Sql Mapper\"/></Band><Band id=\"body\"><Cell text=\"bind:ERROR_MSG\"/><Cell col=\"1\" text=\"bind:TEMPLATE_CD\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCboTemplate\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" text=\"bind:PREFIX\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCboPrefix\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:FORM_ID\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:FORM_NM\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:CRUD_YN\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"6\" text=\"bind:SEARCH_LAYOUT\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCboSearchType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"7\" text=\"bind:VIEW_TITLE01\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:VIEW_NAMESPACE01\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:VIEW_MAPPING_COL01\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:VIEW_TITLE02\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:VIEW_NAMESPACE02\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"12\" text=\"bind:VIEW_MAPPING_COL02\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:VIEW_TITLE03\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"14\" text=\"bind:VIEW_NAMESPACE03\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnUpload",null,"2","80","21","90",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"2","80","21","173",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("양식다운로드");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnCreate",null,"2","80","21","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("화면생성");
            this.divDetail.addChild(obj.name, obj);
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AM040.xfdl", function() {

        /**
        *  엑셀 업로드
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    AM040.xfdl
        *  @Creator     Take
        *  @CreateDate  2021.06.06
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2021.06.06      Take             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload등)
         ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //초기화
                this.fnInit();
           }
        }

        /*********************************************************
         * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow, fnExcel, fnPrint)
         ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	//변수 선언
            var objDivForm;

        	//공통코드
        	this.fnCommonCode();

            objDivForm = this.divSearch.form;

            this.fnSetPrefixId();

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
            if (take.nvl(sTranId, "")=="") sTranId = "List";

        	switch(sTranId) {
                case "List":

                    //변수 선언
                    var sParam;
                    var objDivForm;

                    //벨리데이션 체크


                    //검색조건 영역
                    objDivForm = this.divSearch.form;

                    //에디터형 컴포넌트 데이터셋 업데이트
                    //objDivForm.edtUserId.updateToDataset(); //사용자 아이디 --> (Question)이건 무슨 기능이죠?

                    //검색 파라메터 세팅
                    sParam =   "sCOL_ID="  + take.nvl(objDivForm.edtCOL_ID.value,"");   //용어ID
                    sParam +=   " sCOL_NM="  + take.nvl(objDivForm.edtCOL_NM.value,"");   //용어명
                    sParam +=   " sUSE_YN="  + take.nvl(objDivForm.cboUSE_YN.value,"");   //사용여부


                    //데이터셋 비우기
        			this.dsList.clearData();

                    //타이틀 초기화
                    this.divDetail.form.staTitle.set_text("용어사전");

                    //조회
        			take.tranSelect(
                        this,                      //현재 Form 객체
                        sTranId,                   //Transaction Id
                        "AutoSourceMaker.columnInfoSelect",  //sqlMapperId
                        "",                        //Indataset(서버로 보낼 dataset)
                        "dsList",                  //Outdataset(서버에서 받을 dataset)
                        sParam,                    //Parameter
                        "fnCallBack");             //Call Back 함수명 (함수를 바로 사용 가능)

                    break;
                default:
            }
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

            //데이터셋 수정 여부 확인
            if (!take.isDsModified(this.dsList))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

            //저장 전 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,                            //현재 Form Object
                    this.divDetail.form.grdList,   //벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    "cellImport",                    //필수 입력 css값
                    "fnValCallBack",                 //성공 Call Back 함수
                    true);                           //동기 여부

            //벨리데이션 체크 완료 후
            if (bRtn)
        	{
                //데이터 저장
                //take.tranSave(
                //    this,                //현재 Form 객체
                //    sTranId,             //Transaction Id
                //    "AutoSourceMaker.columnInfo",  //sqlMapperId (___$TAKE_SAVE_NAMESPACE$___Insert, ___$TAKE_SAVE_NAMESPACE$___Delete, ___$TAKE_SAVE_NAMESPACE$___Update 3개가 있어야 하고 뒤에 insert, delete, update는 자동으로 호출됨)
                //    "dsList",            //Indataset(서버로 보낼 dataset)
                //    "",                  //Outdataset(서버에서 받을 dataset)
                //    "",                  //Parameter
                //    "fnCallBack"         //Call Back 함수명 (함수를 바로 사용 가능)
                //);

                take.transaction(this, sTranId, "SVC_LOC::asm/AM010Save.do", "dsList=dsList:U", "", "", "fnCallBack");
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
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdList";

            //변수 선언
        	var objDs;
        	var nAddRow;

            //변수에 값 세팅
            objDs = this.dsList;       //행 추가할 데이터셋

            //넘어온 Row값이 없으면 : 공통 등록 버튼을 통해 호출된 경우
            if (take.nvl(nRow,"")=="")
            {
                nRow = objDs.addRow();
            }

            //행 추가
            if (nRow>=0)
            {
                //행 추가 성공 후 추가 로직 있을 경우

                //첫번째 컬럼으로 이동
                //this.divDetail.form.grdList.setCellPos(2); // (Question) 이건 항상 이렇게??

                //사용 유무를 기본 사용으로 세팅
                //objDs.setColumn(nRow,"USE_YN","Y");	// (Question) 확인??

            } else { //행 추가 실패
                take.alert(this, "Info", "행 추가에 실패하였습니다.", "");
                return;
            }
        }

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Anonymous} aRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, aRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdList";

            //변수 선언
        	var objDs;
        	var bRtn = true;
            var nCnt, nRow;

            //변수에 값 세팅
            objDs = this.dsList;       //행 삭제할 데이터셋

            //그리드 기능에서 행 삭제시 삭제된 행이 넘어온다
            if (take.nvl(aRow, "")!="")
            {
                //삭제 성공후 추가 로직 있을경우
                bRtn = true;
            } else if(aRow==false) {
                bRtn = false;
                nRow = objDs.rowposition;

            } else { //null이면 공통 버튼에서 삭제 처리를 요청한 것임

                //현재 체크된 row, 체크된 row가 없으면 현재 위치
                aRow = take.nvl(take.getChkRow(objDs, "CHK"), objDs.rowposition);

                //배열의 갯수
                nCnt = aRow.length;

                //배열 수 만큼 반복
                for (var i=0; i<nCnt; i++)
                {
                    //행
                    nRow = aRow[i];

                    //행 삭제
                    bRtn = objDs.deleteRow(nRow);

                    //행 삭제 실패시 for문 중지
                    if (bRtn==false) break;
                }
            }

            //행 삭제 성공
            if (bRtn)
            {
                //삭제 성공후 추가 로직 있을경우
            } else { //삭제 실패
                take.alert(this, "Info", nRow + "행 삭제에 실패하였습니다.", "");
                //삭제 실패 행으로 이동
                objDs.set_rowposition(nRow);

                return false;
            }
        }


        /**
         * fnExcel : 엑셀 다운로드 함수 (필수) --> 공통 엑셀 다운로드에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @return {N/A} N/A
         * @example this.fnExcel(sGrdId, nRow);
         */
        this.fnExcel = function(sGrdId)
        {
            //ExportExcelGrid 파일명, 시트명, 타이틀명
        	this.divDetail.form.grdList.ExportExcelGrid(
                "List",
        		"List",
        		"용어사전");
        }

        /**
         * fnPrint : 출력 함수 (필수)
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnPrint();
         */
        this.fnPrint = function()
        {
            //출력없음
            return false;
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //용어ID 입력창 키 다운 이벤트
        this.divSearch_edtCOL_ID_onkeydown = function(obj,e)
        {
            //엔터키 다운
            if (e.keycode==13)
            {
                //용어사전 조회
                this.fnSearch("List");
            }
        };

        //용어명 입력창 키 다운 이벤트
        this.divSearch_edtCOL_NM_onkeydown = function(obj,e)
        {
            //엔터키 다운
            if (e.keycode==13)
            {
                //용어사전 조회
                this.fnSearch("List");
            }
        };

        //사용여부 검색조건 콤보 변경 이벤트
        this.divSearch_cboUSE_YN_onitemchanged = function(obj,e)
        {
            //용어사전 조회
            this.fnSearch("List");
        };



        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnCommonCode : 코드호출 함수
         * @param  {String} N/A
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {

        };

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallBack : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallBack = function(sId, nErrCd, sErrMsg)
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


                case "List" : //조회 콜백

                    //타이틀에 조회 건수 표기
                    //this.divDetail.form.staTitle.set_text("엑셀 업로드 결과 (총 " + this.dsList.rowcount + "건)");

                    break;

                case "Save" :  //저장 콜백

                    //성공 메세지
                    take.alert(this, "Info", "저장 성공하였습니다.", "");

                    //데이터 초기화
                    this.dsList.clearData();

                    //저장 후 데이터 조회
                    this.fnSearch("List");

                    break;

        		case "Create" :
        			take.alert(this, "Info", "대량 생성 완료하였습니다.", "");
        			this.dsExcelDataImport.clearData();

                default :
                    break;
            }
        }

        /**
        * fnValCallBack : validation callback
        * @param  : objComp      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnValCallBack = function(objComp)
        {
            //벨리데이션 성공 후 스크립트
            return;
        }

        this.divDetail_btnUpload_onclick = function(obj,e)
        {
        	this.dsExcelDataImport.clear();

        	if(this.all["XImport"])
        	{
        		var objDel = this.removeChild("XImport");
        			objDel.destroy();
        			objDel = null;
        	}
            var objImport = new nexacro.ExcelImportObject("XImport", this);
            var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";

            objImport.set_importtype(nexacro.ImportTypes.EXCEL);
            objImport.addEventHandler("onsuccess",
        		function(obj, successEvent) {
        			this.divDetail.form.staTitle.set_text("엑셀 업로드 결과 (총 " + this.dsExcelDataImport.rowcount + "건)");
        			//take.alert(this, "Info", "엑셀 업로드 성공\n서버로 전송합니다.");

        			this.grdUpload.createFormat();

        			//서버로 전송
        			/*take.transaction
        			(
        				this
        				, "saveExcel"
        				, "SVC_LOC::sample/saveExcel.do"
        				, "dsExcelDataImport=dsExcelDataImport"
        				, "dsExcelData=outDs"
        				, "PARAMETER1='1' PARAMETER2='2'"
        				, function(sId, nErrCd, sErrMsg){
        					if( sErrMsg == "SUCC" )
        					{
        						take.alert(this, "Info", "완료");
        					} else {
        						take.alert(this, "Error", sErrMsg);
        					}
        				}
        			);*/
        		},
        	this);

            objImport.addEventHandler("onerror",
        		function(obj, errorEvent) {
        			take.alert(this, "Info", "엑셀 업로드 실패" + errorEvent.errormsg);
        		},
        	this);

        	objImport.set_importurl(sSvcUrl);
        	objImport.importData("", "[Command=getsheetdata;head=대량생성!A6:P6;body=대량생성!A7]", "dsExcelDataImport");
        	objImport = null;
        };

        /**
         * fnSetPrefixId : TypeDefinition_Services_form_frefixID 가져오기
         * @example this.fnSetPrefixId();
         */
        this.fnSetPrefixId = function()
        {
        	var sType, sPfix;
        	var nNum=1;
        	var objDs		= this.dsCboPrefix;
        	var nCnt 		= nexacro.getEnvironment().services.length;
        	var arrType 	= new Array();
        	var arrPrefixId = new Array();

        	objDs.setColumn(objDs.addRow(), "CODE", "");
        	objDs.setColumn(objDs.rowposition, "NAME", "- 선택 -");
        	// type=form 으로 등록된 prefixid 값 찾기
        	for (var i=1; i<nCnt; i++)
        	{
        		sType = nexacro.getEnvironment().services[i].type;
        		sPfix = nexacro.getEnvironment().services[i].prefixid;

        		if(take.nvl(sType, "") != "") arrType[i] = sType;
        		if(take.nvl(sPfix, "") != "") arrPrefixId[i] = sPfix;
        		if (arrType[i] == "form")
        		{
        			objDs.setColumn(objDs.addRow(), "CODE", arrPrefixId[i]);
        			objDs.setColumn(objDs.rowposition, "NAME", arrPrefixId[i]);
        			nNum++;
        		}
        	}
        };

        this.divDetail_btnCreate_onclick = function(obj,e)
        {
        	var sParam = "";
        	take.transaction(
        	    this,
        	    "Create",
        	    "SVC_LOC::asm/AM040Save.do",
        	    "dsExcelDataImport=dsExcelDataImport:A",
        	    "", //(UI=Server)
        	    sParam,
        	    "fnCallBack");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divDetail.form.btnUpload.addEventHandler("onclick",this.divDetail_btnUpload_onclick,this);
            this.divDetail.form.btnCreate.addEventHandler("onclick",this.divDetail_btnCreate_onclick,this);
        };
        this.loadIncludeScript("AM040.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
