(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM010");
            this.set_titletext("용어사전");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COL_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COL_RMK\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsColType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">일반텍스트</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">숫자</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">날짜</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">체크박스</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">콤보박스</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">텍스트박스</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staCOL_IDT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("용어ID");
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCOL_ID","staCOL_IDT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCOL_NMT","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("용어명");
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCOL_NM","staCOL_NMT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUSE_YNT","690","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("사용여부");
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUSE_YN","staUSE_YNT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","74",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("용어사전");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("col");
            obj.getSetter("takegrid").set("crud");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"400\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"용어ID\"/><Cell col=\"1\" text=\"용어명\"/><Cell col=\"2\" text=\"데이터유형\"/><Cell col=\"3\" text=\"용어크기\"/><Cell col=\"4\" text=\"사용여부\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"등록일\"/><Cell col=\"7\" text=\"등록자\"/><Cell col=\"8\" text=\"수정일\"/><Cell col=\"9\" text=\"수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_ID\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:COL_NM\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:COL_TYPE\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsColType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:COL_SIZE\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:USE_YN\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/><Cell col=\"5\" text=\"bind:COL_RMK\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\" displaytype=\"normal\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:REG_DT\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:REG_NM\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MOD_DT\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"9\" text=\"bind:MOD_NM\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/></Band></Format></Formats>");
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
        this.registerScript("AM010.xfdl", function() {

        /**
        *  용어사전
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    AM010.xfdl
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

            //벨리데이션 등록

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
            take.tranCode(
                this,                                          			//현재 Form 객체
                ["00009"],                   //CODE_INFO TABLE의 그룹키 값 (배열로 여러개 가능)
                ["dsUseYn"],  //Indataset : 서버에서 받을 데이터셋 (배열로 여러개 가능 그룹키 값과 배열갯수가 동일해야함)
                ["ALL"],                                   	//콤보등에 사용될 경우 첫번째 세팅 값("ALL":전체, "SEL":선택, "":사용안함)(배열로 여러개 가능 그룹키 값과 배열갯수가 동일해야함)
                function(sId, nErrCd, sErrMsg)  						//Call Back 함수(함수 명으로도 사용 가능 ex:"fnCallBack")
                {
                    //sId     : Transaction Id
                    //nErrCd  : Return Code (0보다 작으면 오류)
                    //sErrMsg : Return Message

                    //사용여부 공통코드 데이터가 있는지 여부
                    if (this.dsUseYn.rowcount > 0)
                    {
                        //사용여부 검색조건 콤보에 첫번째 값 세팅
                        this.divSearch.form.cboUSE_YN.set_index(0);
                    }



                },
                false                                  //동기(false),비동기(true) 여부 기본값은 비동기
            );
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
                    this.divDetail.form.staTitle.set_text("용어사전 (총 " + this.dsList.rowcount + "건)");

                    break;

                case "Save" :  //저장 콜백

                    //성공 메세지
                    take.alert(this, "Info", "저장 성공하였습니다.", "");

                    //데이터 초기화
                    this.dsList.clearData();

                    //저장 후 데이터 조회
                    this.fnSearch("List");

                    break;
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtCOL_ID.addEventHandler("onkeydown",this.divSearch_edtCOL_ID_onkeydown,this);
            this.divSearch.form.edtCOL_NM.addEventHandler("onkeydown",this.divSearch_edtCOL_NM_onkeydown,this);
            this.divSearch.form.cboUSE_YN.addEventHandler("onitemchanged",this.divSearch_cboUSE_YN_onitemchanged,this);
        };
        this.loadIncludeScript("AM010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
