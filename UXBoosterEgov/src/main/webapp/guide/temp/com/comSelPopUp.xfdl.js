(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comSelPopUp");
            this.set_titletext("데이터 선택 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(520,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"temp\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">011</Col><Col id=\"name\">일일</Col><Col id=\"temp\">하나하나</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">일</Col><Col id=\"temp\">하나</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">이</Col><Col id=\"temp\">둘</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">삼</Col><Col id=\"temp\">셋</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">사</Col><Col id=\"temp\">넷</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","20","0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_async("false");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","20",null,"42","10",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_searchBox01");
            this.divPopup.addChild(obj.name, obj);

            obj = new TextArea("txtSearch","7","10",null,"21","7",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_wordWrap("char");
            obj.set_padding("0px");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","10","divSearch:20",null,"20","10",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_title02");
            obj.set_textAlign("left");
            obj.set_text("데이터 목록");
            this.divPopup.addChild(obj.name, obj);

            obj = new Grid("grdList","10","staPopupTitle:5",null,null,"10","63",null,null,null,null,this.divPopup.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.getSetter("extendgridoption").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"180\"/><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"code\"/><Cell col=\"2\" text=\"name\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static01_01","10","275",null,"20","10",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("Static01","10","318",null,"20","10",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"grdList:20","57","23","10",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"grdList:20","57","23","btnCancle:3",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.divPopup.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divSearch.form
            obj = new Layout("default","",0,0,this.divPopup.form.divSearch.form,function(p){});
            this.divPopup.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",520,340,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comSelPopUp.xfdl", function() {
        /**
        *  공통 코드 팝업
        *
        *  @MenuPath    공통 코드 팝업
        *  @FileName    comSelPopUp.xfdl
        *  @Creator     고영민
        *  @CreateDate  2018.05.14
        *  @Version     1.0
        *  @Desction    코드 공통 팝업
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2018.05.14      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objDs = null;          //부모창에서 넘어온 데이터셋
        this.fv_arrColInfo = null;     //부모창에서 넘어온 컬럼 정보
        this.fv_bMulti = false;        //부모창에서 넘어온 멀티 선택 여부
        this.fv_sChkId = "";           //임의로 추가한 체크용 데이터셋 아이디
        this.fv_sNameSpace = null;     //네임스페이스
        this.fv_sSearch = "";          //필터링 조건

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * comSelPopUp_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.comSelPopUp_onload = function(obj,e)
        {
            //변수 선언
            var objDs, objDsIn;
            var sTitle, sSearch, sNameSpace, sInDs, sParam;

            //팝업 타이틀 세팅
            sTitle = this.parent.Title || "Code";
            this.set_titletext(sTitle);

            this.divPopup.form.staPopupTitle.set_text(sTitle);

            //부모폼에서 넘어온 검색어 세팅
            this.fv_sSearch = take.nvl(this.parent.Text, "");
            if (this.fv_sSearch!="")
            {
                this.fv_sSearch = nexacro.replaceAll(this.fv_sSearch, ",", "\n")     //.replace(",", "\n");
            }

            //컬럼 정보
            this.fv_arrColInfo = this.parent.ColInfo;

            try
            {
                //네임스페이스 세팅
                sNameSpace = take.nvl(this.parent.NameSpace, "");
            } catch(e) {
                take.debug(this, "Multi Param이 없어 강제 지정");
                sNameSpace = "";
            }

             try
            {
                //네임스페이스 세팅
                objDsIn = take.nvl(this.parent.InDataset, "");
            } catch(e) {
                take.debug(this, "Multi Param이 없어 강제 지정");
                objDsIn = "";
            }

            //데이터셋 세팅
            objDs = take.nvl(this.parent.Dataset, "");

            trace("sNameSpace --> " + sNameSpace);
            //부모폼 데이터셋 확인
            if (objDs=="" && sNameSpace=="")
            {
                //take.alert(this, "Error", "{name}가 존재하지 않습니다.", {name:"Data"});
        		take.alert(this, "Error", "MS00000009", {text:"Data"});
                take.trace("System", "ERROR", "Dataset 또는 namespace가 없습니다.")
                this.close("Error");
                return;
            }

            //데이터셋이 넘어왔는지 여부 확인
            if (objDs!="") //데이터셋이 넘어온 경우
            {
                //폼 변수에 대상 데이터셋 저장
                this.fv_objDs = objDs;

                //데이터 셋 데이터가 많을경우 바로 올라오지 않아 타이머 처리
                this.setTimer(999, 500);
                this.fnSetting(objDs);

            } else {      //데이터셋이 넘어오지 않은 경우
                //네임스페이스로 데이터 조회
                //검색 조건 확인
                if (objDsIn=="")
                {
                    sInDs="";
                } else {
                    //검색조건이 있을경우 데이터셋 카피
                    this.dsSearch.clear();
                    this.dsSearch.copyData(objDsIn);
                    sInDs="dsSearch";
                }

                this.fv_objDs = this.dsList;

                sParam = take.nvl(this.parent.Param, "");

                this.dsList.clearData();
                //데이터 조회 트랜젝션
                take.tranSelect(this, "SELECT", sNameSpace, "dsSearch", "dsList", sParam,
                    function(sId, nErrCd, sErrMsg){
                        if (nErrCd<0)
                        {
                            //take.alert(this, "Error", "{text1}를 {text2}하지 못하였습니다.", {text1:"Data", text2:"조회"});
        					take.alert(this, "Error", "MS00000050");
                        } else {

                            if (this.dsList.rowcount<=0)
                            {
                                this.close();
                                return;
                            }

                            if (this.fv_objDs.rowcount>0)
                            {
                                this.fnCreateChk();
                            }
                            //데이터 세팅
                            this.fnSetting(this.dsList);
                        }
                    });

            }

            //멀티 선택 여부가 나중에 추가되어 해당 파람이 없을경우 처리
            try
            {
                //멀티 선택 여부
                this.fv_bMulti = take.nvl(this.parent.Multi,false);
            } catch(e) {
                take.debug(this, "Multi Param이 없어 강제 지정");
                this.fv_bMulti = false;
            }
        }

        /**
        * comSelPopUp_onclose 폼 닫기 이벤트
        */
        this.comSelPopUp_onclose = function(obj,e)
        {
            //멀티 선택일 경우 데이터셋에 추가한 check용 컬럼 삭제
        	if (this.fv_bMulti)
            {
                //데이터셋의 updatecontrol 속성 확인
                var bOrgUpdateControl = this.fv_objDs.updatecontrol;

                //updatecontrol속성이 true 일 경우 컬럼 삭제가 되지 않아 false로 변경
                if (bOrgUpdateControl==true) this.fv_objDs.set_updatecontrol(false);

                //데이터셋 이벤트가 발생하지 않도록 속성 변경
                this.fv_objDs.set_enableevent(false);

                //해당 컬럼 삭제
                if (this.fv_objDs.deleteColumn(this.fv_sChkId))
                {
                    take.debug(this, "체크박스 컬럼(" + this.fv_sChkId + ") 삭제 성공")
                } else {
                    take.debug(this, "체크박스 컬럼(" + this.fv_sChkId + ") 삭제 실패")
                }

                //데이터셋 이벤트가 발생하도록 속성 변경
                this.fv_objDs.set_enableevent(true);

                //데이터셋의 updatecontrol 속성 원복
                if (bOrgUpdateControl!=this.fv_objDs.updatecontrol) this.fv_objDs.set_updatecontrol(bOrgUpdateControl);
            }
        };

        this.comSelPopUp_ontimer = function(obj,e)
        {
                if (e.timerid==999)
                {
                    //데이터 셋 데이터가 많을경우 바로 올라오지 않아 타이머 처리
                    //데이터가 올라오면
                    if (this.fv_objDs.rowcount>0)
                    {
                        this.fnCreateChk();
                        this.killTimer(999);
                    } else {
                        this.close();
                        return;
                    }
                }
        };


        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        //N/A

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        //N/A

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * grdList_oncelldblclick : 그리드 더블클릭 이벤트
        */
        this.grdList_oncelldblclick = function(obj,e)
        {
            if (e.cell>0)
            {
                if (this.fv_bMulti)
                {
                    this.fv_objDs.setColumn(e.row, this.fv_sChkId, "1");
                }

                //닫기 버튼 클릭을 통해 팝업 닫기
                this.btnOk.click();
            }
        };

        /**
        * grdList_oncellclick : 그리드 클릭 이벤트
        */
        this.grdList_oncellclick = function(obj,e)
        {
            var objDs;
            var sVal;

        	if (e.cell==0 && this.fv_bMulti)
            {
                objDs = this.fv_objDs;

                sVal = take.nvl(objDs.getColumn(e.row, this.fv_sChkId), "0")=="0"?"1":"0";

                objDs.setColumn(e.row, this.fv_sChkId, sVal);
            }

        };

        /**
        * btnOk_onclick : 확인 버튼 클릭 이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
            //변수 선언
        	var objDs;
            var sRtn;
            var nRow, nCnt, nInfoCnt;

            sRtn = "";

            //그리드에 바인드된 데이터셋(부모폼의 데이터셋)
            objDs = this.fv_objDs;

            if (this.fv_bMulti)
            {
                //전체 Row 수
                nCnt = objDs.rowcount;

                for (var i=0;i<nCnt;i++)
                {
                    //trace("CHK --> " + i + " : " + take.nvl(objDs.getColumn(i, "CHK"), "0") );
                    if (take.nvl(objDs.getColumn(i, this.fv_sChkId), "0")=="1")
                    {
                        if (sRtn!="") sRtn+="|";

                        //부모폼에서 넘어온 컬럼 정보가 있으면
                        if (take.nvl(this.fv_arrColInfo, "")!="")
                        {
                            //팝업에 넘어온 컬럼 정보를 가지고 Return 값을 구성
                            nInfoCnt = this.fv_arrColInfo.length;

                            //컬럼 정보 만큼 반복
                            for (var j=0;j<nInfoCnt;j++)
                            {
                                //선택된 Row의 데이터 값을 Return값으로 구성
                                sRtn += (j==0?"":",") + objDs.getColumn(i, this.fv_arrColInfo[j][0]) ;
                            }
                        } else {
                            //code, name을 return 값으로 구성
                            sRtn += objDs.getColumn(i, objDs.getColID(0)) + "," + objDs.getColumn(i, objDs.getColID(1));
                        }
                    }
                }

            } else {
                //현재 선택된 Row
                nRow = objDs.rowposition;

                //부모폼에서 넘어온 컬럼 정보가 있으면
                if (take.nvl(this.fv_arrColInfo, "")!="")
                {
                    //팝업에 넘어온 컬럼 정보를 가지고 Return 값을 구성
                    nCnt = this.fv_arrColInfo.length;

                    //컬럼 정보 만큼 반복
                    for (var i=0;i<nCnt;i++)
                    {
                        //선택된 Row의 데이터 값을 Return값으로 구성
                        sRtn += (i==0?"":",") + objDs.getColumn(nRow, this.fv_arrColInfo[i][0]) ;
                    }
                } else {
                    //code, name을 return 값으로 구성
                    sRtn = objDs.getColumn(nRow, objDs.getColID(0)) + "," + objDs.getColumn(nRow, objDs.getColID(1));
                }
            }

            //trace(sRtn);
            objDs.set_filterstr("");
            //팝업을 닫으면서 리턴값을 넘긴다.
            this.close(sRtn);

        };

        /**
        * txtSearch_onchanged : 검색어가 변된후 발생하는 이벤트
        */
        this.txtSearch_onchanged = function(obj,e)
        {
        	this.fnFilter(e.postvalue);
        };

        /**
        * grdList_onkeydown : 그리드 엔터키
        */
        this.grdList_onkeydown = function(obj,e)
        {
        	if (e.keycode==13)  //Enter
            {
                //닫기 버튼 클릭을 통해 팝업 닫기
                this.btnOk.click();
            } else if (e.keycode==32) { //Space
                //멀티 선택일 경우 체크 박스 체크/해제
                if (this.fv_bMulti)
                {
                    objDs = this.fv_objDs;

                    sVal = take.nvl(objDs.getColumn(e.row, this.fv_sChkId), "0")=="0"?"1":"0";

                    objDs.setColumn(e.row, this.fv_sChkId, sVal);
                }
            }

        };

        /**
        * grdList_onkeydown : 그리드 헤더 클릭 이벤트
        */
        this.grdList_onheadclick = function(obj,e)
        {
            //변수 선언
            var objDs;
            var sChkVal, sColNm, sSortStr, sHeadTxt, sSortMark;
            var nCnt;

            //체크 클릭일 경우
        	if (e.cell==0)
            {
                if (!this.fv_bMulti) return;

                //체크값 확인 후 헤더에 세팅
                sChkVal = obj.getCellProperty("head", 0, "text")=="0"?"1":"0";
                obj.setCellProperty("head", 0, "text", sChkVal);

                objDs = this.fv_objDs;
                //데이터수 구하기
                nCnt = objDs.rowcount;

                //데이터가 잇으면
                if (nCnt>0)
                {
                    //그리드 이벤트 중지
                    obj.set_enableevent(false);
                    objDs.set_enableevent(false);
                    //데이터 row 수 만큼 반복
                    for (var i=0;i<nCnt;i++)
                    {
                        //체크값 주기
                        this.fv_objDs.setColumn(i, this.fv_sChkId, sChkVal);
                    }

                    //그리드 이벤트 시작
                    objDs.set_enableevent(true);
                    obj.set_enableevent(true);
                }
            } else { // 데이터 정렬
                //변수 값 세팅
                objDs = this.fv_objDs;

                //그리드 이벤트 시작
                objDs.set_enableevent(false);
                obj.set_enableevent(false);

                nCnt = obj.getCellCount("head");

                //정렬 초기화
                for (var i=1;i<nCnt;i++)
                {
                    //현재 클릭된 컬럼이 아니면
                    if (i!=e.cell)
                    {
                        //해당 컬럼 헤더 텍스트 가져오기
                        sHeadTxt = obj.getCellProperty("head", i, "text")
                        //텍스트에 마지막 값
                        sSortMark = sHeadTxt.rightstr(1);
                        //정렬 표시가 있는지 여부 확인
                        if (sSortMark=="▼" || sSortMark=="▲")
                        {
                            //정렬 표시가 있을경우 컬럼 헤더 텍스트 초기화
                            sHeadTxt = sHeadTxt.replace(/▼+$|▲+$/, "");
                            obj.setCellProperty("head", i, "text", sHeadTxt);
                        }
                    }
                }

                //해당 컬럼에 바인딩 된 컬럼 명
                sColNm = take.getBindColName(obj, e.cell);
                //해당 컬럼 헤더 텍스트
                sHeadTxt = obj.getCellProperty("head", e.cell, "text");
                //텍스트에 마지막 값
                sSortMark = sHeadTxt.rightstr(1);

                //정렬 표시가 있는지 확인
                if (sSortMark =="▼") //내림 차순일 경우 오름차순으로 변경
                {
                    sSortStr = "S:-" + sColNm;
                    sSortMark = "▲";
                    sHeadTxt = sHeadTxt.substr(0,sHeadTxt.length-1) + sSortMark;
                } else if (sSortMark =="▲") {  //오름차순일 정렬이 없는 상태로 변경
                    sSortStr = "";
                    sSortMark = "";
                    sHeadTxt = sHeadTxt.substr(0,sHeadTxt.length-1) + sSortMark;
                } else { //정렬이 없을경우 내림 차순으로
                    sSortStr = "S:+" + sColNm;
                    sSortMark = "▼";
                    sHeadTxt = sHeadTxt + sSortMark;
                }

                //헤더에 정렬 표시
                obj.setCellProperty("head", e.cell, "text", sHeadTxt);

                //데이터 정렬
                objDs.set_keystring(sSortStr);
                //초기 로우 포지션 지정
                objDs.set_rowposition(0);

                //그리드 이벤트 시작
                objDs.set_enableevent(true);
                obj.set_enableevent(true);
            }
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnFilter : 데이터 필터
         * @param  {String} sVal 필터링한 텍스트
         * @example this.fnFilter(sParam);
         */
        this.fnFilter = function(sVal)
        {
            //변수 선언
            var nCnt;
            var objDs;
            var sFilter = "", sRegExpr=/\n/g;
            var arrText;

            //바인드된 데이터셋
            objDs = this.fv_objDs;

            //필터링 텍스트 값이 없으면 필터링 초기화
            if (take.nvl(sVal, "") =="")
            {
                sFilter = "";
            } else {

                if (sRegExpr.test(sVal))
                {
                    sVal = nexacro.replaceAll(sVal, "\n", ",");
                    arrText = sVal.split(",");
                } else {
                    arrText = [sVal];
                }

                nValCnt = arrText.length;

                //필터링 텍스트 값이 있고 컬럼 정보가 있으면
                if (take.nvl(this.fv_arrColInfo, "")!="")
                {
                    //부모폼에서 넘어온 컬럼 정보 갯수 확인
                    nCnt = this.fv_arrColInfo.length;

                    //컬럼 정보 수 만큼 반복
                    for (var i=0;i<nCnt;i++)
                    {
                        for (var j=0;j<nValCnt;j++)
                        {
                            if (take.nvl(arrText[j], "")!="")
                            {
                                //필터링 텍스트를 만든다.
                                sFilter += (i==0?"":" || ") + this.fv_arrColInfo[i][0] + ".match('" + arrText[j] + "')" ;
                            }
                        }
                    }
                } else {
                    for (var j=0;j<nValCnt;j++)
                    {
                        if (take.nvl(arrText[j], "")!="")
                        {
                            //컬럼 정보가 없을경우 필터링 텍스를 code, name 컬럼 기준으로 만든다.
                            sFilter += (j==0?"":" || ") +objDs.getColID(0) + ".match('" + arrText[j] + "') || "+ objDs.getColID(1) + ".match('" + arrText[j] + "')";
                        }
                    }
                }
            }

            //trace("filter --> " + sFilter + " / \n" + objDs.saveXML());
            //trace("filter --> " + sFilter);

            //데이터셋 필터링
            objDs.set_filterstr(sFilter);
            objDs.set_rowposition(0);
        }

        /**
         * fnSetting : 팝업 데이터 세팅
         * @param  {Object} objDs 대상 데이터셋
         * @example this.fnSetting(objDs);
         */
        this.fnSetting = function(objDs)
        {
            //변수 선언
            var objGrid;
            var nCnt, nIdx;

            //그리드
            objGrid = this.divPopup.form.grdList;

            //그리드에 데이터셋을 바인드
            objGrid.set_binddataset(objDs);

        //     if (this.fv_bMulti)
        //     {
        //         this.fv_sChkId = "CHK";//take.getUniqueId("__TCHK_", "_");
        //
        //         objDs.addColumn(this.fv_sChkId, "string", "1");
        //
        //         objGrid.setCellProperty("body", 0, "text", "expr:"+this.fv_sChkId+"==1?'':currow+1");
        //         objGrid.setCellProperty("body", 0, "cssclass", "expr:"+this.fv_sChkId+"==1?'checkbox':''");
        //
        //         //trace(this.parent.Dataset.saveXML());
        //         //trace(objGrid.getCellProperty("body", 0, "text"));
        //         //trace(objGrid.getCellProperty("body", 0, "cssclass"));
        //     }

            //그리드 이벤트 중지
            objGrid.set_enableevent(false);

            //컬럼 정보가 있을경우
            if (take.nvl(this.fv_arrColInfo, "")!="")
            {
                //컬럼 정보 갯수
                nCnt = this.fv_arrColInfo.length;

                //그리드 autofittype을 초기화
                objGrid.set_autofittype("none");

                //기본으로 세팅된 code, name 그리드 컬럼 제거
                objGrid.deleteContentsCol("body", 2);
                objGrid.deleteContentsCol("body", 1);

                //컬럼 정보수 만큼  반복
                for (var i=0;i<nCnt;i++)
                {
                    //그리드에 컬럼 추가
                    nIdx = objGrid.appendContentsCol("body", false);

                    //추가된 컬럼에 사이즈 세팅
                    objGrid.setFormatColProperty(nIdx, "size", nexacro.toNumber(this.fv_arrColInfo[i][2]));
                    //추가된 컬럼의 header text
                    objGrid.setCellProperty("head", nIdx, "text", this.fv_arrColInfo[i][1]);
                    //추가된 컬럼에 데이터셋 컬럼 바인딩
                    objGrid.setCellProperty("body", nIdx, "text", "bind:" + this.fv_arrColInfo[i][0]);
                }
                //autofittype 원복
                objGrid.set_autofittype("col");
            } else {
                //컬럼 정보가 없을경우 데이터셋의 0번 1번을 code, name 으로 기본 세팅
                objGrid.setCellProperty("body", 1, "text", "bind:" + objDs.getColID(0));
                objGrid.setCellProperty("body", 2, "text", "bind:" + objDs.getColID(1));
            }

            if (this.fv_sSearch!="") this.divPopup.form.divSearch.form.txtSearch.set_value(this.fv_sSearch);

            //찾기 버튼을 클릭하여 데이터 필터링
            this.fnFind();

            //그리드 이벤트 실행
            objGrid.set_enableevent(true);
        }

        /**
         * fnCreateChk : 팝업 데이터 세팅
         * @param  {N/A} N/A 대상 데이터셋
         * @example this.fnCreateChk();
         */
        this.fnCreateChk = function()
        {
            var objGrid;
            objGrid = this.divPopup.form.grdList;

            //멀티선택일 경우
            if (this.fv_bMulti)
            {
                //체크 컬럼 uniqeid 생성
                this.fv_sChkId = take.getUniqueId("__TCHK_", "_");

                //멀티 체크용 컬럼 생성
                this.fv_objDs.addColumn(this.fv_sChkId, "string", "1");

                //그리드 멀티 체크 세팅
                objGrid.setCellProperty("body", 0, "text", "expr:"+this.fv_sChkId+"==1?'':currow+1");
                objGrid.setCellProperty("body", 0, "cssclass", "expr:"+this.fv_sChkId+"==1?'checkbox':''");

                //trace(this.parent.Dataset.saveXML());
                //trace(objGrid.getCellProperty("body", 0, "text"));
                //trace(objGrid.getCellProperty("body", 0, "cssclass"));
            } else {
                objGrid.setCellProperty("head", 0, "text", "No.");
                objGrid.setCellProperty("head", 0, "displaytype", "normal");
                objGrid.setCellProperty("head", 0, "eidttype", "none");
            }
        }

        /**
        * fnFind : 찾기 버튼 클릭 이벤트
        */
        this.fnFind = function()
        {
            //데이터 필터 함수 호출
        	this.fnFilter(this.divPopup.form.divSearch.form.txtSearch.value);

            if (this.fv_objDs.rowcount==1)
            {
                this.fv_objDs.set_rowposition(0)

                if (this.fv_bMulti)
                {
                    if (this.fv_objDs.setColumn(0, this.fv_sChkId, "1"))
                    {
                        //닫기 버튼 클릭을 통해 팝업 닫기
                        this.btnOk.click();
                    }
                } else {
                    //닫기 버튼 클릭을 통해 팝업 닫기
                    this.btnOk.click();
                }
            }
        };

        /**
        * fnCancle : 취소
        */
        this.fnCancle = function()
        {
            //필터 제거
            this.fv_objDs.set_filterstr("");

            //팝업 닫기
        	this.close();
        };

        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.comSelPopUp_onclose,this);
            this.addEventHandler("onload",this.comSelPopUp_onload,this);
            this.addEventHandler("ontimer",this.comSelPopUp_ontimer,this);
            this.divPopup.form.divSearch.form.txtSearch.addEventHandler("onchanged",this.txtSearch_onchanged,this);
            this.divPopup.form.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.divPopup.form.grdList.addEventHandler("onkeydown",this.grdList_onkeydown,this);
            this.divPopup.form.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divPopup.form.grdList.addEventHandler("onheadclick",this.grdList_onheadclick,this);
            this.divPopup.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divPopup.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("comSelPopUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
