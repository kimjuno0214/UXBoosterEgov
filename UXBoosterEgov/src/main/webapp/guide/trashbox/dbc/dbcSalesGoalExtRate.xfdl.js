(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcSalesGoalExtRate");
            this.set_titletext("매출현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(295,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"CRDT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_YEAR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_DashboardTop");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","5","0",null,"40","80",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_text("00월");
            obj.set_cssclass("sta_MF_Title");
            obj.set_verticalAlign("middle");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnReload",null,"10","20","20","55",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_reset01");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnHelp",null,"10","20","20","30",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_advice01");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnView",null,"10","20","20","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_more");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divMain","0","40",null,null,"0","100",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("bottom");
            obj.set_cssclass("div_MF_DashboardMid");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","282","450","6",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_GD_Square");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divChart","5","25",null,null,"5","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staUnit",null,"5","80","15","5",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("(단위 백만원)");
            obj.set_cssclass("sta_MF_Unit");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staToday","5","0","100","15",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_Date");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divBottom","0",null,null,"100","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("bottom");
            obj.set_cssclass("div_MF_DashboardBot");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","672","450","6",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_GD_Square");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("staAchieveRate","10","40",null,null,"150","5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("0<fs v=\'20\'>%</fs>");
            obj.set_cssclass("sta_MF_NumberB");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("staAchieveRateTitle","10","5","135","30",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("2");
            obj.set_text("달성률(목표)");
            obj.set_cssclass("sta_MF_TitleS01");
            obj.set_textAlign("center");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("staElongationTitle",null,"5","135","30","10",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("3");
            obj.set_text("신장률(전년)");
            obj.set_cssclass("sta_MF_TitleS01");
            obj.set_textAlign("center");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("Static04","222","6","1","56",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("4");
            obj.set_text("Static03");
            obj.set_cssclass("sta_MF_Vline");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("staElongation","150","40",null,null,"10","5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("5");
            obj.set_text("0<fs v=\'20\'>%</fs>");
            obj.set_cssclass("sta_MF_NumberB");
            obj.set_usedecorate("true");
            obj.set_textAlign("center");
            this.divBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divChart
            obj = new Layout("default","",0,0,this.divMain.form.divChart.form,function(p){});
            this.divMain.form.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",295,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcSalesGoalExtRate.xfdl", function() {
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
        var fv_sSalesGoalExtRateFrame = "";
        this.fv_sTitle = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.dbcSalesGoalExtRate_onload = function(obj, e)
        {
        //    if (takeit.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        //    {
                this.fv_sTitle = takeit.nvl(this.parent.form.parent.dashnm, "매출 현황");
                this.divTop.form.staTitle.set_text(this.fv_sTitle);

                var dashtype = this.parent.form.parent.dashtype;
                //alert(dashtype); //10 --0.5
                if( "10" == dashtype ){
                    this.divMain.form.divChart.set_enable(false);
                    this.divMain.form.divChart.set_visible(false);
                }

                //this.fnTran("salesGoalExtRate");
        //    }
        }

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
            if (takeit.nvl(sTranId, "")=="") sTranId = "salesGoalExtRate";

            if(!this.objects["tgdsMsg"]){
                takedomain.LangService(this); // 다국어 설정
            }

            //변수선언
            var sTranId = sTranId,                                     //Transaction 아이디
                sUrl    = "SVC_LOC::dash/salesGoalExtRateSelect.do",        //서비스 URL
                sInDs   = "dsSearch=dsSearch",                        //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs  = "dsList=dsList",                            //데이터를 받아올 데이터셋 지정
                sParam  = "",                                         //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "salesGoalExtRate" :
                    //Script
                    var reloadtime = this.parent.form.parent.reloadtime;
                    if( "" != reloadtime && null != reloadtime && "undefined" != reloadtime ){
                        var nMin = 60000;
                        var nTimeMin = nMin*parseInt(reloadtime);
                        this.setTimer(5,nTimeMin);
                    }

                    break;
                default :
                    break;
            }

            this.fnSetUsewaitcursor(false);
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
                case "salesGoalExtRate" : //조회 콜백
                    //Script
                    var sBaseDt = this.dsList.getColumn(0, "BASE_DT");
                    if( "undefined" != sBaseDt && "" != sBaseDt && null != sBaseDt ){
                        var sYear = this.dsList.getColumn(0, "BASE_YEAR");
                        var sMonth = this.dsList.getColumn(0, "BASE_MONTH");
                        var sTitle = sMonth + "월 " + this.fv_sTitle;
                        this.divTop.form.staTitle.set_text(sTitle);

                        var sDatetime = this.dsList.getColumn(0, "CRDT");
                        this.divTop.form.staToday.set_text( sDatetime + " 기준" );

                        this.fnChartCreate( takerchart.getChartData(this.dsList) );
                        var sAchieveRate = (parseInt(this.dsList.getColumn(2,"AMT")) / parseInt(this.dsList.getColumn(0,"AMT"))) * 100; // (실적/목표)*100
                        this.divBottom.form.staAchieveRate.set_text( parseInt(sAchieveRate) + "<fs v='20'>%</fs>");              // 달성률(목표)

                        var sElongation = (parseInt(this.dsList.getColumn(2,"AMT")) / parseInt(this.dsList.getColumn(3,"AMT"))) * 100; // (실적/전년)*100
                        this.divBottom.form.staElongation.set_text( parseInt(sElongation) + "<fs v='20'>%</fs>");               //  신장률(전년)
                    }

                    break;
                default :
                    break;
            }

            this.fnSetUsewaitcursor(true);
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
            if (takeit.nvl(sTranId, "")=="") sTranId = "salesGoalExtRate";

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
            if (takeit.nvl(sGrdId, "")=="") sGrdId = "Grid00";

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
            if (takeit.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * 새로고침 버튼 클릭시 발생되는 이벤트
        */
        this.divTop_btnReload_onclick = function(obj,e)
        {
        	var dashtype = this.parent.form.parent.dashtype;
                //alert(dashtype); //10 --0.5
                if( "10" == dashtype ){
                    this.divMain.form.divChart.set_enable(false);
                    this.divMain.form.divChart.set_visible(false);
                }

                this.fnSearch("salesGoalExtRate");
        };

        /**
        * 상세버튼 클릭시 발생되는 이벤트
        */
        this.divTop_btnView_onclick = function(obj,e)
        {
        	var sProgId;
            var objWinNx;

            sProgId = this.parent.form.parent.progid;

            if (window.document.title=="GAON")  //웹브라우저로 실행시
            {
                this.getOwnerFrame().form.divMain.form.fnDashMenu(sProgId);
            } else {
                objWinNx = window.NEXACROWEBBROWSER;

                if (objWinNx) {
                    objWinNx.on_fire_onusernotify(objWinNx, "detail:" + sProgId);
                } else {
                    window.document.title = "detail:" + sProgId;
                }
            }
        };

        /**
        * 도움말버튼 클릭시 발생되는 이벤트
        */
        this.divTop_btnHelp_onclick = function(obj,e)
        {
        	var manualurl = this.parent.form.parent.manualurl;
            window.open(manualurl, "Popmanual", "height=700,width=600");
        	//system.execBrowser(manualurl);
        };

        /**
        * 타이머 이벤트
        */
        this.dbcSalesGoalExtRate_ontimer = function(obj,e)
        {
        	if (e.timerid==5)
            {
                if (!this.getOwnerFrame().form.divMdi.visible)
                {
                    this.killTimer(5);
                    var dashtype = this.parent.form.parent.dashtype;
                    //alert(dashtype); //10 --0.5
                    if( "10" == dashtype ){
                        this.divMain.form.divChart.set_enable(false);
                        this.divMain.form.divChart.set_visible(false);
                    }

                    this.fnSearch("salesGoalExtRate");
                }
            }
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
        * fnTest - progress bar 세팅
        * @param  : sMsg   - 메세지
        * @param  : sCode   - 메세지 코드
        * @return : N/A
        * @example :
        */
        this.fnSetUsewaitcursor = function(rtn)
        {
            if( window.document.title == "GAON" )
            {
                nexacro.getEnvironment().set_usewaitcursor(rtn);
            }
        }

        /**
        * fnTest - 차트 새로고침
        * @param  : sMsg   - 메세지
        * @param  : sCode   - 메세지 코드
        * @return : N/A
        * @example :
        */
        this.fnReDraw = function()
        {
            var dashtype = this.parent.form.parent.dashtype;
            if( "10" != dashtype ){
                takerchart.reDraw(this.divMain.form.divChart, "chart1");
            }
        };

        /**
        * fnTest - 차트생성
        * @param  : sMsg   - 메세지
        * @param  : sCode   - 메세지 코드
        * @return : N/A
        * @example :
        */
        this.fnChartCreate = function(oData){
            var sTitle = "";
            var sLayout, sWidth, sHeight;

            //objData = takerchart.getChartData(this.dsList2);
            sLayout = this.fnChartLayout(sTitle, ["title"], ["amt"]);
            sWidth = "100%";
            sHeight = "100%";
            objFuncList = {itemClickJsFunction : "fnChartClick"};

            takerchart.ChartCreate("chart1", this.divMain.form.divChart, oData, sLayout, sWidth, sHeight, objFuncList);
        }

        //차트 레이아웃 생성
        this.fnChartLayout = function(sType, arrKeys, arrVals)
        {
            var sFrame = takeit.ObjectPath(this);
            if( window.document.title == "GAON" )
            {
                if ( takeit.isQuickView()==false)
                {
                    sFrame = sFrame.replace('frmHome', 'form');
                    sFrame = sFrame.replace('frmDash', 'form');
                    var lastFormNm = sFrame.split('.');
                    sFrame = sFrame.replace(lastFormNm[9], 'form');
                }
            }
            else
            {
                var lastFormNm = sFrame.split('.');
                sFrame = sFrame.replace(lastFormNm[5], 'form');
            }

            fv_sSalesGoalExtRateFrame = sFrame.substring(0, sFrame.lastIndexOf("."));

            //기본 레이아웃
            var sLayoutStr ='<rMateChart backgroundColor="#FFFFFF"  borderStyle="none">'
                           +'  <Options>'
                           +'       <Caption text=""/>'
                           +'       <SubCaption text="" textAlign="center" />'
                           +'   </Options>'
                           +'   <CurrencyFormatter id="fmt" currencySymbol="" useThousandsSeparator="true"/>'
                           +'   <Column2DChart showDataTips="true" buttonMode="true" columnWidthRatio="0.55" selectionMode="single" itemClickJsFunction="window.'+ sFrame +'itemClickFunc" >'
                           +'       <horizontalAxis>'
                           +'           <CategoryAxis id="hAxis" categoryField="'+arrKeys[0]+'"/>'
                           +'       </horizontalAxis>'
                           +'       <verticalAxis>'
                           +'           <LinearAxis id="vAxis1" interval="20000"  formatter="{fmt}"/>'
                           +'       </verticalAxis>'
                           +'       <series>'
                           +'           <Column2DSeries  labelPosition="inside" yField="'+arrVals[0]+'" styleName="insideLabel">'
                           +'               <fills>'
                           +'                  <SolidColor color="#1c419d" alpha="1"/>'
                           +'                  <SolidColor color="#4cacf6" alpha="1"/>'
                           +'                  <SolidColor color="#8cd254" alpha="1"/>'
                           +'                  <SolidColor color="#faad05" alpha="1"/>'
                           +'               </fills>'
                           +'               <showDataEffect>'
                           +'                   <SeriesInterpolate/>'
                           +'               </showDataEffect>'
                           +'           </Column2DSeries>'
                           +'       </series>'
                                    /* style로 정의한 axisLabel을 styleName으로 설정 합니다. */
                           +'      <verticalAxisRenderers>'
                           +'          <Axis2DRenderer axis="{vAxis1}" styleName="axisLabel" showLine="true"/>'
                           +'      </verticalAxisRenderers>'
                           +'      <horizontalAxisRenderers>'
                           +'        <Axis2DRenderer axis="{hAxis}" styleName="axisLabel" showLine="true"/>'
                           +'      </horizontalAxisRenderers>'
                           +'   </Column2DChart>'
        //                    +'        <Style>'
        //                    +'              .axisLabel{fontFamily:Malgun Gothic;colorFill:#ff0000;}'
        //                    +'        </Style>'
                           +'</rMateChart>';
            //rgba(61, 148, 225, 1)
            //차트레이아웃 리텅
            return sLayoutStr;
        }

        /**
        * fnSetChartUnit - 차트 아이템 클릭 이벤트
        * @return : N/A
        * @example :
        */
        this.itemClickFunc = function(seriesId, displayText, index, data, values){
            var sProgId;
            var objTemp;
            var objWinNx;
            objTemp = eval("window." + fv_sSalesGoalExtRateFrame);
            sProgId = objTemp.parent.form.parent.progid;

            if (window.document.title=="GAON")  //웹브라우저로 실행시
            {
                objTemp.getOwnerFrame().form.divMain.form.fnDashMenu(sProgId);
            } else {
                objWinNx = window.NEXACROWEBBROWSER;

                if (objWinNx) {
                    objWinNx.on_fire_onusernotify(objWinNx, "detail:" + sProgId);
                } else {
                    window.document.title = "detail:" + sProgId;
                }
            }
        }

        function seriesLabelFunc(seriesID, index, data, values){

        	return "!" + values[1];
        }








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dbcSalesGoalExtRate_onload,this);
            this.addEventHandler("ontimer",this.dbcSalesGoalExtRate_ontimer,this);
            this.divTop.form.btnReload.addEventHandler("onclick",this.divTop_btnReload_onclick,this);
            this.divTop.form.btnHelp.addEventHandler("onclick",this.divTop_btnHelp_onclick,this);
            this.divTop.form.btnView.addEventHandler("onclick",this.divTop_btnView_onclick,this);
        };
        this.loadIncludeScript("dbcSalesGoalExtRate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
