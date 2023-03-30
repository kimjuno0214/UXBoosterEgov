(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpQuery");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsQuery", this);
            obj._setContents("<ColumnInfo><Column id=\"QUERY_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResultTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtRowCnt","287","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("0");
            obj.set_textAlign("right");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtQuery","10","edtRowCnt:5","36.88%",null,null,"10","480",null,null,null,this);
            obj.set_taborder("0");
            obj.set_font("14px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnExec","txtQuery:-89","10","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("쿼리실행");
            this.addChild(obj.name, obj);

            obj = new Grid("grdResult","txtQuery:10","45",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsResult");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_wheelscrollrow("1");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkAll","10","10","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("페이징 사용여부");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","chkAll:30","10","132","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("한 페이지에 보여줄 행 수");
            this.addChild(obj.name, obj);

            obj = new Static("staTotal","txtQuery:10","10","132","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Total count : ");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comQuery.xfdl", function() {
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
        this.fv_nMinRow = 50;

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
                this.edtRowCnt.set_value(this.fv_nMinRow);
            }
        }

        /****************************************************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow, fnExcel, fnPrint)
        ****************************************************************************************/
        //N/A

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //chkAll_onchanged : 전체 행 체크 변경이벤트
        this.chkAll_onchanged = function(obj,e)
        {
            this.edtRowCnt.set_enable(!e.postvalue);
            this.edtPageNo.set_enable(!e.postvalue);
        };

        //btnExec_onclick : 쿼리 실행 버튼 클릭 이벤트
        this.btnExec_onclick = function(obj,e)
        {
            var sQuery = take.nvl(this.txtQuery.value,"");

            this.dsQuery.setColumn(0, "QUERY_STR", sQuery);

            if (sQuery!="")
            {
                take.debug(this, "Query : " + sQuery);
                this.fnSearch(true);
            } else {
                take.alert(this, "Info", "Query를 입력해 주세요.");
                this.txtQuery.setFocus();
                return false;
            }
        };

        this.grdResult_onvscroll = function(obj,e)
        {
            var bAllChk = take.isEmpty(this.chkAll.value)?false:this.chkAll.value;

            if (!bAllChk)
            {
                if ((e.type == "lastover")      ||
                    (e.type == "tracklastover") ||
                    (e.type == "wheellastover") ||
                    (e.type == "selectlastover"))
                {
                    var objDs;
                    var nRowTotalCnt;

                    objDs = this.dsResult;

                    nRowTotalCnt = take.nvl(take.nvl(objDs.getColumn(0,"tcnt"),objDs.getColumn(0,"TCNT")),0);

                    if (objDs.rowcount==nRowTotalCnt)
                    {
                        take.alert(this, "Info", "더이상 조회할 데이터가 없습니다.");
                        take.debug("grdResult_onvscroll", " 더이상 조회할 데이터가 없습니다.");
                        return;
                    }

                    objDs.pageno++;

                    this.fnSearch(false);
                }
            }
        };

        this.edtRowCnt_onchanged = function(obj,e)
        {
        	if (parseInt(e.postvalue)<this.fv_nMinRow)
            {
                take.alert(this, "Info", "최소 Row("+this.fv_nMinRow +") 보다 작은 값을 설정할 수 없습니다.");
                obj.setFocus();
                return false;
            }
        };

        this.txtQuery_onkeydown = function(obj,e)
        {
        	if (e.ctrlkey && e.keycode==13)
            {
                var sQuery = take.nvl(take.nvl(this.txtQuery.getSelectedText(), this.txtQuery.value),"");

                this.dsQuery.setColumn(0, "QUERY_STR", sQuery);

                if (sQuery!="")
                {
                    take.debug(this, "Query : " + sQuery);
                    this.fnSearch(true);
                } else {
                    take.alert(this, "Info", "Query를 입력해 주세요.");
                    this.txtQuery.setFocus();
                    return false;
                }
            }
        };

        this.dsResultTemp_onload = function(obj,e)
        {
        // 	if (e.reason==0)
        //     {
        //         if (obj.rowcount>0)
        //         {
        //             this.dsResult.appendData(obj, true);
        //         }
        //     }
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnSearch = function(bInit)
        {
            var sParam="", sRowCnt, sPageNo, sOutDs;
            var bAllChk;
            var objDs;

            objDs = this.dsResult;

            bAllChk = take.isEmpty(this.chkAll.value)?false:this.chkAll.value;
            sRowCnt = take.nvl(this.edtRowCnt.value, this.fv_nMinRow);

            if (parseInt(sRowCnt)<this.fv_nMinRow )
            {
                take.alert(this, "Info", "최소 Row("+this.fv_nMinRow +") 보다 작은 값을 설정할 수 없습니다.");
                this.edtRowCnt.setFocus();
                return false;
            }

            if (bInit==false)
            {
                if (bAllChk)
                {
                    //전체행 체크시 페이징 초기화
                    if (take.confirm(this, "Info", "전체행 조회로 변경되었습니다.\n페이징 초기화를 진행하시겠습니까.? "))
                    {
                        bInit=true;
                    } else {
                        this.chkAll.set_value(false);
                        return false;
                    }
                }

                if (parseInt(sRowCnt)!=objDs.rowcnt)
                {
                    //페이지 카운트 값 변경시 페이징 초기화
                    if (take.confirm(this, "Info", "행수가 변경되었습니다.\n페이징 초기화를 진행하시겠습니까.? "))
                    {
                        bInit=true;
                    } else {
                        this.edtRowCnt.set_value(objDs.rowcnt);
                        return false;
                    }
                }
            }

            //페이지 초기화 여부
            if (bInit) //초기화
            {
                objDs.clear();
                objDs.rowcnt = null;
                objDs.pageno = null;

                sOutDs = "dsResult=dsResult";

                if (bAllChk==false)
                {
                    sPageNo = "1";

                    objDs.rowcnt = parseInt(sRowCnt);
                    objDs.pageno = parseInt(sPageNo);

                    sParam += "sRowCnt='"  + sRowCnt + "'";
                    sParam += " sPageNo='" + sPageNo + "'";
                    sParam += " sAllYn='false'";
                } else {
                    sParam += "sAllYn='true'";
                }
            } else {
                sOutDs = "dsResultTemp=dsResult";
                sParam += "sRowCnt='"  + objDs.rowcnt + "'";
                sParam += " sPageNo='"  + objDs.pageno + "'";
                sParam += " sAllYn='false'";
            }

        	take.transaction(
                this,
        		"QueryExec",
        		"SVC_LOC::sample/queryExec.do",
        		"dsQuery=dsQuery",  //(Server=UI)
        		sOutDs, //(UI=Server)
        		sParam,
        		function (sId, nErr, sMsg)
                {
                    if (bInit)
                    {
                        //trace(this.dsResult.saveXML());
                        this.grdResult.setBindDataset(this.dsResult);
                        this.grdResult.createFormat();
                        this.grdResult.setTakeGrid("select");
                    } else {
                        this.dsResult.appendData(this.dsResultTemp, true);
                    }

                    if (bAllChk)
                    {
                        this.staTotal.set_text("Total count : </fc v='blue'>" + this.dsResult.rowcount + "</fc>");
                    } else {
                        this.staTotal.set_text("Total count : </fc v='blue'>" + take.nvl(take.nvl(this.dsResult.getColumn(0,'TCNT'),this.dsResult.getColumn(0,'tcnt')),"0") + "</fc>")
                    }
                },
                true);
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.edtRowCnt.addEventHandler("onchanged",this.edtRowCnt_onchanged,this);
            this.txtQuery.addEventHandler("onkeydown",this.txtQuery_onkeydown,this);
            this.btnExec.addEventHandler("onclick",this.btnExec_onclick,this);
            this.grdResult.addEventHandler("onvscroll",this.grdResult_onvscroll,this);
            this.chkAll.addEventHandler("onchanged",this.chkAll_onchanged,this);
            this.dsResultTemp.addEventHandler("onload",this.dsResultTemp_onload,this);
        };
        this.loadIncludeScript("comQuery.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
