(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_initvalueid("iv_Form0");
            this.set_name("dashSalesCategoryList");
            this.set_titletext("04 사업유형별 매출현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1162,705);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENT_RATIO\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"CRDT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_RATIO\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENT_RATIO\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_RATIO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YEARCD\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTooltip", this);
            obj._setContents("<ColumnInfo><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENT_RATIO\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_RATIO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","5","265","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_DashTitle");
            obj.set_text("00월");
            this.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","326",null,null,"7","0",null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"22\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell controlautosizingtype=\"both\" autosizerow=\"default\" cssclass=\"padding\" text=\"구분\"/><Cell col=\"1\" cssclass=\"padding\" text=\"매출금액\"/><Cell col=\"2\" cssclass=\"padding\" text=\"구성비\"/></Band><Band id=\"body\"><Cell text=\"bind:LEVEL_NM\" cssclass=\"gray\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL_CD\" treestartlevel=\"1\"/><Cell col=\"1\" text=\"expr:AMOUNT\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"2\" displaytype=\"normal\" textAlign=\"right\" maskeditlimitbymask=\"none\" edittype=\"none\" maskedittype=\"string\" maskeditmaskchar=\"0\" text=\"expr:( LEVEL_CD == &apos;1&apos; ) ? &apos;&apos; : parseFloat(component_ratio).toFixed(2)+&apos;%&apos;\"/></Band><Band id=\"summary\"><Cell text=\"총합계\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:dataset.getCaseSum(&quot;LEVEL_CD == 1&quot;, &quot;parseInt(AMOUNT)&quot;)\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"2\" displaytype=\"normal\" textAlign=\"right\" maskedittype=\"string\" maskeditmaskchar=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divChart","0","66",null,"250","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("divChart");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","560","0","50","66",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H66");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staToday",null,"5","98","22","44",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MF_Date");
            obj.set_text("00.00 00:00 기준");
            this.addChild(obj.name, obj);

            obj = new Button("btnReload",null,"5","22","22","7",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Grid("tooltipGrid","1078","130","342","280",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsTooltip");
            obj.set_autofittype("col");
            obj.set_scrolltype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"121\"/><Column size=\"102\"/><Column size=\"98\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"22\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"매출금액\"/><Cell col=\"2\" text=\"구성비\"/></Band><Band id=\"body\"><Cell text=\"bind:CATEGORY_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:AMOUNT\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:COMPONENT_RATIO\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staUnit",null,"5","82","22","140",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(단위 : 백만원)");
            obj.set_cssclass("sta_MF_Unit");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart.form
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1162,705,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcSalesCategoryList.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
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
        //this.fv_nFormVal = null;     //용도
        this.fv_sBusinessCd = null;
        this.fv_sTitle = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.dashSalesCategoryList_onload = function(obj, e)
        {
           if (takeit.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {

                this.fv_sTitle = takeit.nvl(this.parent.parent.parent.UserParam.split("&")[1], "사업 유형별 매출 현황");
                this.staTitle.set_text(this.fv_sTitle);

                //Script
                this.tooltipGrid.set_visible(false);
                this.fnCenter();
                //this.fv_sBusinessCd = this.parent.parent.parent.UserParam.split("&")[0];
                this.fnSearch("salesCategory");
           }
        }

        /**
        * formid_onsize form 사이즈 조절시 발생되는 이벤트
        */
        this.dashSalesCategoryList_onsize = function(obj,e)
        {
        	this.fnCenter();
            if (this.fnChartDelete()) this.fnChartCreate();
        };

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (takeit.nvl(sTranId, "")=="") sTranId = "Transation id";

            //변수선언
            var sBusinessCd = ( null != this.fv_sBusinessCd && "" != this.fv_sBusinessCd ) ? "business_cd='"+this.fv_sBusinessCd+"'" : "";
            var sTranId = sTranId,                                    //Transaction 아이디
                sUrl    = "SVC_LOC::dash/dashSalesCategoryListSelect.do",        //서비스 URL
                sInDs   = "dsSearch=dsSearch",                        //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs  = "dsList=dsList dsChart=dsChart",                            //데이터를 받아올 데이터셋 지정
                sParam  = sBusinessCd,                                         //파라메터 사용 안 할 경우
                sCallBack = "fnCallback" ;                            //콜백 처리 함수

            switch(sTranId)
            {
                case "salesCategory" :
                    this.dsList.clearData();
                    //Script
                    break;
                default :
                    break;
            }

            //트랜젝션 공통함수 호출 -->필수(모든 트랜젝션을 공통으로 처리)
            takeit.transaction(this,sTranId, sUrl, sInDs, sOutDs, sParam, sCallBack);
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
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
                case "salesCategory" : //조회 콜백
                    //Script
                    var sYear = this.dsList.getColumn(0, "BASE_YEAR");
                    var sMonth = this.dsList.getColumn(0, "BASE_MONTH");
                    var sTitle = sMonth + "월 " + this.fv_sTitle;
                    this.staTitle.set_text(sTitle);

                    var sDatetime = this.dsList.getColumn(0, "CRDT");
                    this.staToday.set_text( sDatetime + " 기준" );

                    //this.divChart.
                    this.fnChartCreate();

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
            if (takeit.nvl(sTranId, "")=="") sTranId = "Transation id";

            this.fnTran(sTranId);
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
            if (takeit.nvl(sTranId, "")=="") sTranId = "Save transation id";

            this.fnTran(sTranId);
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
            if (takeit.nvl(sGrdId, "")=="") sGrdId = "gridMain";

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
            if (takeit.nvl(sGrdId, "")=="") sGrdId = "gridMain";

            //Script
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * btnReload_onclick : 새로고침 버튼 클릭
        */
        this.btnReload_onclick = function(obj,e)
        {
        	//Script
            this.dsChart.clearData();
            this.dsList.clearData();
            this.fnCenter();
            this.fnSearch("salesCategory");
        };

        /**
        * gridMain_oncellclick : 그리드 cell 클릭
        */
        this.gridMain_oncellclick = function(obj,e)
        {
        	if( obj.getCellPos() == 0 )
        	{
                var objDs = this.dsList;

                if (this.treeStatus == 1)
                {
                    this.treeStatus = 0;
                    return;
                }

                var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);

                // 자식 노드가 존재할 경우
                if (childRow >= 0)
                {
                    var gridRow = obj.getTreeRow(objDs.rowposition);
                    if (obj.isTreeCollapsedRow(childRow, true))
                    {
                        obj.setTreeStatus(gridRow, true);
                    }
                    else
                    {
                        obj.setTreeStatus(gridRow, false);
                    }
                }
                this.treeStatus = 0;
            }
        };

        /**
        * gridMain_cantreestatuschange : 클릭 중복제거
        */
        this.gridMain_cantreestatuschange = function(obj,e)
        {
        	this.treeStatus = 1;
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnChartDelete = function(sParam, nParam)
        {
            var objFormComponents;
            objFormComponents = this.divChart.form.components;
            var objDiv;

            for( var i=0; i<this.dsChart.getRowCount(); i++ ){
                objDiv = this.divChart.removeChild("divBar"+i);
                objDiv.destroy();
                objDiv=null;
            }

            return true;
        }

        this.fnChartCreate = function(sParam, nParam)
        {
            //Script
            var nHeight = 20;
            var nBarCnt = 1;
            var sDivId = "";

            for( var i=0; i<this.dsChart.getRowCount(); i++ ){
                if( nBarCnt > 3 ){
                    nBarCnt = 1;
                }

                var objFormComponents, objDivTemp, nDivTop;

                objFormComponents = this.divChart.form.components;

                var nDivLeft = 80;

                if( i > 0 ){
                    objDivTemp = objFormComponents["divBar"+(i-1)];
                    nDivTop = nexacro.toNumber(objDivTemp.top) + nexacro.toNumber(objDivTemp.height) + 10;
                }
                else{
                    objDivTemp = objFormComponents["divBar"+i];

                    nDivTop = 0;
                }
                var nMainWidth = this.divChart.getOffsetWidth()-200;

                sDivId = "divBar"+i;
                var objDivBar = new Div("divBar"+i, nDivLeft, nDivTop, nMainWidth, nHeight, null, null);
                this.divChart.addChild("divBar"+i, objDivBar);
                objDivBar.show();
                //objDivBar.set_background("#ffffaa");

                var nCnt, nVar, nMaxWidth, nWidth, nLeft;
                var objComponents, objBar, objBarTemp;
                var sBarId;

                nCnt = this.dsList.rowcount;
                nMaxWidth = objDivBar.getOffsetWidth();
                objComponents = objDivBar.form.components;

                var totalAmt = this.dsChart.getColumn(i, "TOTAL_AMT");
                var jData = JSON.parse(this.dsChart.getColumn(i, "DATA"));

                // title Static 생성
                var sTitleId = "staTitle"+i;
                var nTitleWidth = 80;
                var objTitleStatic = new Static(sTitleId, 0, 0, nTitleWidth, nHeight, null, null);
                objDivBar.form.addChild(sTitleId, objTitleStatic);
                objTitleStatic.set_text(this.dsChart.getColumn(i, "PART_NM"));
                objTitleStatic.set_cssclass("sta_MF_SalesText01");

                objTitleStatic.show();

                // totalAmt Static 생성
                var sTAmtId = "staTAmt"+i;
                var nTAmtLeft = nTitleWidth;
                var nTAmtWidth = 65;
                var objTAmtStatic = new Static(sTAmtId, nTAmtLeft, 0, nTAmtWidth, nHeight, null, null);
                objDivBar.form.addChild(sTAmtId, objTAmtStatic);
                var totalAmt = parseInt(this.dsChart.getColumn(i, "TOTAL_AMT"));
                objTAmtStatic.set_text( takeit.setComma(totalAmt) );
                objTAmtStatic.set_cssclass("sta_MF_SalesText02");

                objTAmtStatic.show();

                // companyRate Static 생성
                var sCompanyRateId = "staCompanyRate"+i;
                var nCompRateLeft = nTAmtLeft + nTAmtWidth;
                var nCompRateWidth = 65;
                var objCompRateStatic = new Static(sCompanyRateId, nCompRateLeft, 0, nCompRateWidth, nHeight, null, null);
                objDivBar.form.addChild(sCompanyRateId, objCompRateStatic);
                var companyRatio = parseFloat(this.dsChart.getColumn(i, "COMPANY_RATIO")).toFixed(2);
                objCompRateStatic.set_text( companyRatio + "%" );
                objCompRateStatic.set_cssclass("sta_MF_SalesText02");

                objCompRateStatic.show();

                // divBar tooltip 추가
                var sTooltipTxt = "";

                // 차트 생성
                var jCnt = 0;
                var nBarMaxWidth = 0;

                for( key in jData ){
                    if( jCnt < jData.length ){
                        var valData = jData[key];

                        var jVal = parseInt(valData.value);
                        var nBarVal = ((jVal / totalAmt) * 100).toFixed(1);
                        nWidth = Math.round(((nMaxWidth-( nTAmtLeft +  nTAmtWidth + nCompRateWidth + 10)) * nBarVal) / 100);

                        if( jCnt > 0 ){
                            objBarTemp = objComponents["stBar"+(jCnt-1)];
                            nLeft = nexacro.toNumber(objBarTemp.left) + nexacro.toNumber(objBarTemp.width);
                        }
                        else{
                            nLeft = ( nCompRateLeft +  nCompRateWidth + 10);
                        }

                        sBarId = "stBar"+jCnt;

                        objBar = new Static(sBarId, nLeft, 0, nWidth, nHeight, null, null);
                        objDivBar.form.addChild(sBarId, objBar);
                        objBar.show();

                        var sObjBarCssclass = "sta_MF_Salescolor0"+(i+1);
                        objBar.set_cssclass(sObjBarCssclass);

                        objBar.set_opacity((parseFloat((nBarVal/100))+parseFloat(0.5)));
                        objBar.set_text(valData.key + " " + nBarVal + "%");

                        //sTooltipTxt += valData.key + "\t \t" + takeit.setComma(jVal) + "\t \t" + nBarVal + "%" + "\n";

                        jCnt++;
                    }
                }

                nBarCnt++;
                //objDivBar.set_tooltiptext("");

                objDivBar.addEventHandler( "onmouseenter", objDivBar_onmouseenter, this);
            }
        }

        objDivBar_onmouseenter = function( obj,  e) {
            // 수행할 스크립트
            this.dsTooltip.deleteAll();
            var idx = parseInt(obj.id.replace("divBar", ""));
            var jData = JSON.parse(this.dsChart.getColumn(idx, "DATA"));
            var totalAmt = parseInt(this.dsChart.getColumn(idx, "TOTAL_AMT"));
            var jCnt = 0;
            var nGridHeight = 30; // 헤더 높이
            for( key in jData ){
                if( jCnt < jData.length ){
                    var valData = jData[key];
                    var jVal = parseInt(valData.value);
                    var nBarVal = ((jVal / totalAmt) * 100).toFixed(1);
                    this.dsTooltip.addRow();
                    this.dsTooltip.setColumn(jCnt, "CATEGORY_NM", valData.key);
                    this.dsTooltip.setColumn(jCnt, "AMOUNT", takeit.setComma(jVal));
                    this.dsTooltip.setColumn(jCnt, "COMPONENT_RATIO", nBarVal+ " %");

                    nGridHeight += 23; // 기본 row 높이
                    jCnt++;
                }
            }

            var nGridTop = (idx*30)+100;

            this.tooltipGrid.selectRow(jCnt-1, false);
            this.tooltipGrid.set_height(nGridHeight);
            this.tooltipGrid.set_visible(true);
            this.tooltipGrid.set_left(e.clientx);
            this.tooltipGrid.set_top(nGridTop);
        };

        this.divChart_onmouseleave = function(obj,e)
        {
        	this.tooltipGrid.set_visible(false);
        };

        /**
         * fnCenter : Div 중앙배치
         * @param  {N/A} N/A
         * @example this.fnCenter();
         */
        this.fnCenter = function()
        {
            //변수선언 및 값 세팅
        	var objDiv = this.divChart;
            //var nHeight = this.getOffsetHeight() - this.gridMain.getOffsetHeight();
            //alert("1. " + nHeight + "  2. " + objDiv.getOffsetHeight());
        	var nTop = objDiv.getOffsetTop();
        	var nLeft = (this.getOffsetWidth() - objDiv.getOffsetWidth())/2;

            //0보다 작을 경우 0으로 세팅
        	//if (nTop<0) nTop=0;
        	if (nLeft<0) nLeft=0;

            //중앙배치
        	objDiv.move(nLeft, nTop);

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dashSalesCategoryList_onload,this);
            this.addEventHandler("onsize",this.dashSalesCategoryList_onsize,this);
            this.gridMain.addEventHandler("onselectchanged",this.Grid00_onselectchanged,this);
            this.gridMain.addEventHandler("onsummaryclick",this.Grid00_onsummaryclick,this);
            this.gridMain.addEventHandler("oncellclick",this.gridMain_oncellclick,this);
            this.gridMain.addEventHandler("cantreestatuschange",this.gridMain_cantreestatuschange,this);
            this.divChart.addEventHandler("onmouseleave",this.divChart_onmouseleave,this);
            this.btnReload.addEventHandler("onclick",this.btnReload_onclick,this);
        };
        this.loadIncludeScript("dbcSalesCategoryList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
