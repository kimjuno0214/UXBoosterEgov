(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comGridPagging");
            this.set_titletext("Takegrid pagging");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divPage","316","0","407",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnStart","0","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_pagingFirst");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnBack","29","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_pagingPrev");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn1","58","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn2","87","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("3");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn3","116","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn4","145","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn5","174","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn6","203","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn7","232","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn8","261","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn9","290","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btn10","319","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_paging");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnPrev","348","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_pagingNext");
            this.divPage.addChild(obj.name, obj);

            obj = new Button("btnEnd","377","0","30","30",null,null,null,null,null,null,this.divPage.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_pagingLast");
            this.divPage.addChild(obj.name, obj);

            obj = new Static("staEndPage",null,"0","20","30","0",null,"20",null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("1");
            obj.set_fittocontents("width");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staGbn",null,"0","10","30","staEndPage:0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPage",null,"4","60","21","staGbn:0",null,"30",null,null,null,this);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_value("1");
            obj.set_text("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPage.form
            obj = new Layout("default","",0,0,this.divPage.form,function(p){});
            this.divPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comGridPagging.xfdl", function() {
        /**
        *  그리드 페이징 공통
        *
        *  @MenuPath    com > comGridPagging
        *  @FileName    comGridPagging.xfdl
        *  @Creator     고영민
        *  @CreateDate  2020.09.09
        *  @Version     1.0
        *  @Desction    그리드 페이징 공통
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.09.09      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objGrid = null; //대상 그리드
        this.fv_objForm = null; //그리드가 있는 폼
        this.fv_sFunc = null;   //transaction 호출 함수
        this.fv_nCurPage = 1;   //현재 페이지
        this.fv_nTotalRow = -1; //전체Row 수
        this.fv_nRowCnt = 10;   //한 페이지에 표현할 row 수
        this.fv_arrBtn = null;  //페이지 버튼 배열

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload등)
         ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트
        */
        this.comGridPagging_onload = function(obj,e)
        {
            this.fnInit();
        };

        /**
        * comGridPagging_onsize 폼 사이즈 변경시 발생되는 이벤트
        */
        this.comGridPagging_onsize = function(obj,e)
        {
            //중앙배치
            this.fnCenter(e.cx);
        };

        /*********************************************************
         * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow, fnExcel, fnPrint)
         ********************************************************/
        //N/A

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //페이지 직접입력 에디터 변경 이벤트
        this.edtPage_onchanged = function(obj,e)
        {
            //변수 선언
            var nPage;
            var sPage;

            //페이지 값
            sPage = take.nvl(this.edtPage.value,"");

            //페이지 값 유무
            if (sPage=="")
            {
                nPage = 0;
            } else {
                //페이지 값을 int형으로 변환
                nPage = parseInt(sPage);
            }

            //0이거나 전체 페이지 수부타 클경우
            if (nPage <= 0 && nPage > parseInt(this.staEndPage.text))
            {
                take.debug("comFridPagging.edtPage.onchanged", "존재하지 않는 페이지입니다.");
                return;
            }

            //페이지 버튼 세팅
            this.fnSetPageBtn();
            //조회함수 호출
            this.fnSearchCall(nPage);
            //폼 리사이즈 적용을 위해 호출
            this.resetScroll();
        };

        //페이지 버튼 클릭 이벤트
        this.divPage_btnPage_onclick = function(obj,e)
        {
            //변수 선언
        	var sGbn, sVal, sEndPage;
            var nPage, nEndPage;

            //버튼 구분
            sGbn = (obj.name).substr(3);

            //마지막 페이지
            sEndPage = this.staEndPage.text;

            //마지막 페이지 세팅 여부
            if (sEndPage!="")
            {
                nEndPage = parseInt(sEndPage);
            } else {
                take.debug("comGridPagging.divPage.btnPage.onclick", "End page 값이 없습니다.");
                return false;
            }

            //버튼 구분
            switch(sGbn)
            {
                //<<,<,>,>> 버튼일 경우
                case "Start":
                case "End":
                case "Back":
                case "Prev":
                    //페이지 버튼 세팅
                    nPage = this.fnSetPageBtn(sGbn);

                    if (nPage<=0)
                    {
                        return false;
                    }

                    break;
                //1,2,3,4,5,6,7,8,9,10 버튼일 경우
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "10":
                    //버튼에 설정되어 있는 페이지 값
                    sVal = take.nvl(obj.text,"");

                    //페이지 값이 있는지 여부 체크
                    if (sVal!="")
                    {
                        nPage = parseInt(sVal);
                    } else {
                        take.debug("comGridPagging.divPage.btnPage.onclick", "Page 값이 없습니다.");
                        return false;
                    }

                    break;
                default:
            }

            //현재 페이지 설정
            this.fv_nCurPage = nPage;

            //현재 페이지 에디터에 세팅
            this.edtPage.set_enableevent(false);
            this.edtPage.set_value(nPage);
            this.edtPage.set_enableevent(true);

            //transacton을 위한 함수 호출
            this.fnSearchCall(nPage);

        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        //초기 온로드 함수
        this.fnInit = function()
        {
            var objDivForm;

            //페이징 초기화
            this.fnPageReset();

            //그리드 공통에서 넘어온 파라메터 세팅
            this.fv_objGrid = take.nvl(this.parent._takegrid,         "");
            this.fv_objForm = take.nvl(this.parent._takegridform,     "");
            this.fv_sFunc   = take.nvl(this.parent._takegridpagefunc, "");

            //그리드에 바로 연결해서 사용할 경우 처리
            //대상 그리드가 세팅 되었는지 여부
            if (this.fv_objGrid=="")
            {
                this.fv_objGrid = take.nvl(this.parent.pagegrid,"");

                if (this.fv_objGrid=="")
                {
                    take.debug("comGridPagging.onload", "Pagging 대상 그리드가 없어 pagging기능을 사용할 수 없습니다.\nGrid에 'pagegrid' userproperty를 추가 후 대상 그리드를 지정해 주세요.");

                    return false;
                }
            }

            //그리드의 폼
            if (this.fv_objForm=="")
            {
                this.fv_objForm = this.fv_objGrid._xfnGetActiveForm(); //현재 폼
            }

            //페이지 변경시 호출할 함수 세팅 여부
            if (this.fv_sFunc=="")
            {
                this.fv_sFunc = take.nvl(this.parent.pagefunction,"");

                if (this.fv_sFunc=="")
                {
                    take.debug("comGridPagging.onload", "Pagging 처리를 위한 함수가 없어 pagging기능을 사용할 수 없습니다.\nGrid에 'pagefunction' userproperty를 추가 후 페이징 처리를 위한 함수명을 지정해 주세요.");

                    return false;
                }
            }

            objDivForm = this.divPage.form;

            //페이징 버튼 세팅
            this.fv_arrBtn = [objDivForm.btn1, objDivForm.btn2, objDivForm.btn3, objDivForm.btn4, objDivForm.btn5,
                              objDivForm.btn6, objDivForm.btn7, objDivForm.btn8, objDivForm.btn9, objDivForm.btn10];

            //페이징 세팅
            this.fnSetting();
            //중앙배치
            this.fnCenter(this.getOffsetWidth());
        }

        this.parent.fnPageInit = function()
        {
            this.form.fnInit();
        }

        //페이지 버튼 세팅
        this.fnSetPageBtn = function(sGbn)
        {
            //변수 선언
            var objDivForm, objDs, objBtnEnd, objBtnStart, objBtnBack, objBtnPrev;
            var arrBtn;
            var sNo, sTotalRow;
            var nPage, nPageCnt, nTotalRow, nEndPage, nBtnCnt, nStart, nMod, nIdx, nTotalRow;

            //변수 세팅
            objDivForm = this.divPage.form;
            objBtnStart = this.divPage.form.btnStart;
            objBtnEnd = this.divPage.form.btnEnd;
            objBtnBack = this.divPage.form.btnBack;
            objBtnPrev = this.divPage.form.btnPrev;

            arrBtn = this.fv_arrBtn;

            nTotalRow = this.fv_nTotalRow;
            nEndPage = parseInt(this.staEndPage.text);
            nBtnCnt = arrBtn.length;

            //구분
            switch(sGbn)
            {
                case "Start": //처음으로 가야하기 때문에 0으로 세팅
                    nStart = 0;
                    break;
                case "End": //마지막으로 가야하기 때문에 마지막 페이지 값에 보여야할 첫번째 버튼값 세팅
                    //마지막 페이지가 몇번째 버튼인지 계산
                    nMod = nEndPage%nBtnCnt;

                    //마지막 페이지가 마지막 버튼일 경우 시작 버튼 값 계산
                    if (nMod==0)
                    {
                        nStart = ((nEndPage/nBtnCnt)-1)*nBtnCnt;
                    } else { //마지막 버턴이 아닐 경우 시작 버튼 값 계산
                        nStart = (Math.ceil(nEndPage/nBtnCnt)-1)*nBtnCnt;
                    }

                    break;

                case "Back": //바로 전
                    //첫번째 버튼값
                    nStart = parseInt(arrBtn[0].text);

                    //첫번째 버튼값이 1이거나 작을 경우 바로전으로 갈 수 없다
                    if (nStart<=1)
                    {
                        take.debug("comGridPagging.fnSetPageBtn","Back 할 수 있는 페이지가 없습니다.");
                        return -1;
                    }

                    //바로전 페이지 첫번째 버튼 계산
                    nStart = nStart-nBtnCnt-1;

                    break;

                case "Prev": //다음
                    //마지막 버튼이 사용 불가일 경우 다음 페이지로 갈 수 없게 처리
                    if (!arrBtn[9].enable)
                    {
                        take.debug("comGridPagging.fnSetPageBtn","Prev 할 수 있는 페이지가 없습니다.");
                        return -1;
                    }

                    //마지막 버튼의 값
                    nStart = parseInt(arrBtn[9].text);

                    break;

                default: //그 외 처리
                    //페이지 값
                    nPage = parseInt(this.edtPage.value);
                    //시작 페이지 계산
                    nStart = nPage-(nPage%nBtnCnt);
            }

            //페이지 버튼 수만 큼 반복
            for (var i=0; i<nBtnCnt; i++)
            {
                //버튼에 표기할 페이지 번호
                sNo = nStart+i+1;
                arrBtn[i].set_text(sNo);

                //없는 페이지일 경우 버튼을 enable처리
                if (sNo>nEndPage)
                {
                    arrBtn[i].set_enable(false);
                } else { //페이지가 있을 경우 마지막 페이지 값을 갱신
                    arrBtn[i].set_enable(true);
                    nEnd = sNo;
                }

            }

            //마지막 페이지 값과 페이지 버튼수보다 작을 경우
            if (nEnd<=nBtnCnt)
            {
                // <<,< 버튼 enable 처리
                objBtnStart.set_enable(false);
                objBtnBack.set_enable(false);
            } else {
                objBtnStart.set_enable(true);
                objBtnBack.set_enable(true);
            }

            //마지막 페이지 값이 전체 페이지 값보다 작을 경우
            if (nEnd<nEndPage)
            {
                objBtnEnd.set_enable(true);
                objBtnPrev.set_enable(true);
            } else {
                //>,>> 버튼 enable 처리
                objBtnEnd.set_enable(false);
                objBtnPrev.set_enable(false);
            }

            //현재 페이지 값 세팅
            if (sGbn=="Start")
            {
                nPage = 1;
            } else if (sGbn=="Prev"){
                nPage = nStart+1;
            } else if (sGbn=="Back"){
                nPage = nEnd;
            } else if(sGbn=="End") {
                nPage = nEnd;
            }

            //혀재 페이지에 해당하는 페이지 버튼을 구해서 포커스 처리
            nIdx = (nPage%10);

            if (nIdx<=0)
            {
                nIdx = 9;
            } else {
                nIdx--;
            }
            arrBtn[nIdx].setFocus();

            //페이지 입력 에디터를 쓸수 있도록 설정
            this.edtPage.set_enable(true);

            //현재 페이지 리턴
            return nPage;
        }

        //트랜젝션 호출
        this.fnSearchCall = function(nPage)
        {
            //변수 선언
            var objForm, objBindDs;
            var sFunc;
            var bRtn;

            //페이징을 쓰는 폼
            objForm = this.fv_objForm;
            //페이징 그리드에 바인딩 된 dataset
            objBindDs = this.fv_objGrid.getBindDataset();
            //transaction 처리를 위해 호출할 함수
            sFunc = this.fv_sFunc;

            //데이터셋 constcolumn에 현재 페이지 세팅
            bRtn = objBindDs.setConstColumn("CURPAGE", nPage);

            //세팅 성공 여부
            if (bRtn)
            {
                //function형일 경우
                if (take.isFunction(sFunc))
                {
                    sFunc.call(objForm);
                    take.debug("comGridPagging.fnSearchCall", " Function명을 지정해 주세요.");
                    return false;

                } else { //String일 경우:함수명을 세팅한 경우

                    //해당 함수가 있는지 여부 체크
                    if (objForm.hasOwnProperty(sFunc))
                    {
                        //함수 인지 여부 체크
                        if (take.isFunction(objForm[sFunc]))
                        {
                            //해당 함수 호출
                            objForm[sFunc].call(objForm);
                        } else {
                            take.debug("comGridPagging.fnSearchCall", objForm.name + "에 " + sFunc + "는 Function이 아닙니다.");
                            return false;
                        }
                    } else {
                        take.debug("comGridPagging.fnSearchCall", objForm.name + "에 " + sFunc + " Function이 존재하지 않습니다.");
                        return false;
                    }
                }
            } else {
                take.debug("comGridPagging.fnSearchCall", "바인드된 데이터셋("+ objBindDs.name+") 'CURPAGE' Constcolumn을 set하지 못하였습니다.");
                return false;
            }

        }

        //초기 세팅
        this.fnSetting = function()
        {
            //변수 선언
            var objDs, objStaEndPage;
            var sTotalRow, sRowCnt;
            var nEndPage;

            //변수에 값 세팅
            objStaEndPage = this.staEndPage;
            objDs = this.fv_objGrid.getBindDataset();

            //전체 row수
            sTotalRow = take.nvl(objDs.getConstColumn("TOTALCNT"), "");

            //전체 rows가 없으면 리턴
            if (sTotalRow=="")
            {
                take.debug("comGridPagging.fnSetting", "바인드된 데이터셋("+objDs.name+")에 TOTALCNT(Constcolumn)값이 없습니다.");
                this.fv_nTotalRow = -1;
                return false;

            } else {
                this.fv_nTotalRow = parseInt(sTotalRow);
            }

            //한페이지에 표기할 row수
            sRowCnt = take.nvl(objDs.getConstColumn("ROWCNT"), "");

            //한페이지에 표기할 row수가 없을 경우 리턴
            if (sRowCnt=="")
            {
                take.debug("comGridPagging.fnSetting", "바인드된 데이터셋("+objDs.name+")에 ROWCNT(Constcolumn)값이 없어 기본값(10)으로 세팅합니다.");
                this.fv_nRowCnt = 10;

            } else {
                this.fv_nRowCnt = parseInt(sRowCnt);
            }

            //마지막 페이지 계산
            nEndPage = Math.ceil(this.fv_nTotalRow/this.fv_nRowCnt);

            //마지막 페이지 세팅
            objStaEndPage.set_text(nEndPage);

            //페이지 버튼 세팅
            this.fnSetPageBtn();

            //리사이즈 적용을 위해 호출
            this.resetScroll();
        }

        //중앙배치
        this.fnCenter = function(nWid)
        {
            //trace("nWid --> " + nWid + " / this.divPage.getOffsetWidth --> " + this.divPage.getOffsetWidth());
            //var nMinWid = this.divPage.getOffsetWidth() + this.edtPage.getOffsetWidth() + this.staGbn.getOffsetWidth() + this.staEndPage.getOffsetWidth();
            //리사이즈 적용할 최소 사이즈
            var nMinWid = 600;

            //최소 사이즈보다 작을 경우 left를 0으로 처리
            if (nWid>=nMinWid)
            {
                take.formCenter(this.divPage, this.getOffsetWidth(), this.divPage.getOffsetWidth());
            } else {
                this.divPage.set_left(0);
            }
        }

        //페이지 버튼 초기화
        this.fnPageReset = function()
        {
            //transaction이 호출 되기 전에는 전체 enable 처리
            var objDivForm = this.divPage.form;

            objDivForm.btn1.set_enable(false);
            objDivForm.btn2.set_enable(false);
            objDivForm.btn3.set_enable(false);
            objDivForm.btn4.set_enable(false);
            objDivForm.btn5.set_enable(false);
            objDivForm.btn6.set_enable(false);
            objDivForm.btn7.set_enable(false);
            objDivForm.btn8.set_enable(false);
            objDivForm.btn9.set_enable(false);
            objDivForm.btn10.set_enable(false);

            objDivForm.btnStart.set_enable(false);
            objDivForm.btnEnd.set_enable(false);
            objDivForm.btnBack.set_enable(false);
            objDivForm.btnPrev.set_enable(false);

            this.edtPage.set_enable(false);
            this.staEndPage.set_text(0);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comGridPagging_onload,this);
            this.addEventHandler("onsize",this.comGridPagging_onsize,this);
            this.divPage.form.btnStart.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btnBack.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn1.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn2.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn3.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn4.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn5.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn6.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn7.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn8.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn9.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btn10.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btnPrev.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.divPage.form.btnEnd.addEventHandler("onclick",this.divPage_btnPage_onclick,this);
            this.edtPage.addEventHandler("onchanged",this.edtPage_onchanged,this);
        };
        this.loadIncludeScript("comGridPagging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
