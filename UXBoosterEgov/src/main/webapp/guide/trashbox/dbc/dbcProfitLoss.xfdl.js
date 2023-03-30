(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcProfitLoss");
            this.set_titletext("01 손익현황Main");
            if (Form == this.constructor)
            {
                this._setFormPosition(354,315);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">목표</Col><Col id=\"AMT\">49919</Col><Col id=\"SELECT\">false</Col></Row><Row><Col id=\"NAME\">실적</Col><Col id=\"AMT\">49213</Col><Col id=\"SELECT\">true</Col></Row><Row><Col id=\"NAME\">전년</Col><Col id=\"AMT\">43535</Col><Col id=\"SELECT\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"yearCd\" type=\"STRING\" size=\"256\"/><Column id=\"lastYearCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/><Column id=\"SERIES01\" type=\"STRING\" size=\"256\"/><Column id=\"SERIES02\" type=\"STRING\" size=\"256\"/><Column id=\"SERIES03\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SERIES01\">49919</Col><Col id=\"SERIES02\">49213</Col><Col id=\"SERIES03\">43535</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0","20",null,null,"0","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_enableanimation("true");
            obj._setContents({
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "12px \"NanumGothic\"",
            		"padding": "0px 0px 0px 10px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#838383",
            		"titletextfont": "12px \"NanumGothic\"",
            		"labeltextcolor": "#838383",
            		"labeltextfont": "12px \"NanumGothic\"",
            		"axislinestyle": "1px solid #f6f6f6",
            		"ticklinestyle": "1px solid #dcdcdc",
            		"boardlinestyle": "1px solid #f6f6f6",
            		"gap": "0",
            		"labelgap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"barvisible": true,
            			"barsize": "60",
            			"itemtextvisible": true,
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "normal 600 13px \"NanumGothic\"",
            			"valuecolumn": "bind:AMT",
            			"itemtext": "bind:AMT",
            			"itemtexttype": "number",
            			"tooltiptext": "bind:AMT",
            			"barfillstyle": "#81ddc6,#f35e58,#edc683",
            			"barlinestyle": "0px",
            			"tooltiptexttype": "number",
            			"selecttype": "unselect",
            			"barradius": "4"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px solid #f6f6f6",
            			"labeltextfont": "12px \"NanumGothic\"",
            			"titletextcolor": "#838383",
            			"titletextfont": "12px \"NanumGothic\"",
            			"axislinestyle": "0px",
            			"ticklinestyle": "0px",
            			"labeltextcolor": "#838383",
            			"labeltype": "number"
            		}
            	]
            });
            obj.set_categorycolumn("bind:NAME");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staToday","0","0","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Time");
            obj.set_text("2020년 10월 20일");
            this.addChild(obj.name, obj);

            obj = new Static("staUnit",null,"0","86","20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("(단위 : 백만원)");
            obj.set_cssclass("sta_MF_Unit");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",354,315,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcProfitLoss.xfdl", function() {
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
        var fv_sProfitLossFrame = "";
        this.fv_sTitle = "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.dashProfitLoss_onload = function(obj, e)
        {
            this.divMain.form.BasicChart00.runAnimation();
            //this.fnTran("profitLoss");
            console.dir(this.divMain.form.BasicChart00.tooltip);
        }

        // "titletextcolor": "#838383",
        // 		"titletextfont": "12px \"NanumGothic\"",
        // 		"labeltextcolor": "#838383",
        // 		"labeltextfont": "12px \"NanumGothic\"",
        // 		"axislinestyle": "1px solid #f6f6f6",
        // 		"ticklinestyle": "1px solid #dcdcdc",
        // 		"visible": true,
        // 		"gap": "0",
        // 		"labelgap": "5",
        // 		"boardlinestyle": "1px solid #f6f6f6"
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
            if (take.nvl(sTranId, "")=="") sTranId = "profitLoss";

            if(!this.objects["tgdsMsg"]){
                takedomain.LangService(this); // 다국어 설정
            }

            //변수선언
            var sTranId = "profitLoss",                                     //Transaction 아이디
                sUrl    = "SVC_LOC::dash/profitLossMainSelect.do",        //서비스 URL
                sInDs   = "dsSearch=dsSearch",                        //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs  = "dsList=dsList",                            //데이터를 받아올 데이터셋 지정
                sParam  = "",                                         //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "profitLoss" :

                    //reloadtime, manualurl
                    var reloadtime = this.parent.form.parent.reloadtime;
                    if( "" != reloadtime && null != reloadtime && "undefined" != reloadtime ){
                        var nMin = 60000;
                        var nTimeMin = nMin*parseInt(reloadtime);
                        this.setTimer(1,nTimeMin);
                    }
                    break;
                default :
                    break;
            }

            this.fnSetUsewaitcursor(false);
            //트랜젝션 공통함수 호출 -->필수(모든 트랜젝션을 공통으로 처리)
            take.transaction(this,sTranId, sUrl, sInDs, sOutDs, sParam, sCallBack);
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
                case "profitLoss" : //조회 콜백
                    //Script
                    if( this.dsList.getRowCount() > 0 ){
                        var sYear = this.dsList.getColumn(0, "BASE_YEAR");
                        var sMonth = this.dsList.getColumn(0, "BASE_MONTH");
                        var sTitle = sMonth + "월 " + this.fv_sTitle;
                        this.staTitle.set_text(sTitle);

                        var sDatetime = this.dsList.getColumn(0, "CRDT");
                        this.staToday.set_text( sDatetime + " 기준" );

                        var objData = [
                             {
                                   "title"      : "영업이익"
                                 , "goal"       : this.dsList.getColumn(0,"GOAL_OPERATIONG_PROFIT")
                                 , "result"     : this.dsList.getColumn(0,"RESULT_OPERATIONG_PROFIT")
                                 , "lastyear"   : this.dsList.getColumn(0,"LASTYEAR_OPERATIONG_PROFIT")
                             }
                            ,{
                                   "title"      : "매출이익"
                                 , "goal"       : this.dsList.getColumn(0,"GOAL_SALES_PROFIT")
                                 , "result"     : this.dsList.getColumn(0,"RESULT_SALES_PROFIT")
                                 , "lastyear"   : this.dsList.getColumn(0,"LASTYEAR_SALES_PROFIT")
                             }
                            ,{
                                   "title"      : "매출"
                                 , "goal"       : this.dsList.getColumn(0,"GOAL_SALES_AMT")
                                 , "result"     : this.dsList.getColumn(0,"RESULT_SALES_AMT")
                                 , "lastyear"   : this.dsList.getColumn(0,"LASTYEAR_SALES_AMT")
                             }
                        ]
                        this.fnChartCreate(objData);
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
            if (take.nvl(sTranId, "")=="") sTranId = "profitLoss";

            //this.fnTran(sTranId);
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * 상세버튼 클릭시 발생되는 이벤트
        */
        this.divMain_divTop_btnView_onclick = function(obj,e)
        {
        	var sProgId;
            var objWinNx;

            sProgId = this.parent.form.parent.progid;

            this.getOwnerFrame().form.divMain.form.fnDashMenu(sProgId);

        };

        /**
        * 새로고침 버튼 클릭시 발생되는 이벤트
        */
        this.divMain_divTop_btnReload_onclick = function(obj,e)
        {
            this.dsList.clearData();
            this.fnSearch("profitLoss");
        };

        /**
        * 도움말 버튼 클릭시 발생되는 이벤트
        */
        this.divMain_divTop_btnHelp_onclick = function(obj,e)
        {
            var manualurl = this.parent.form.parent.manualurl;
            window.open(manualurl, "Popmanual", "height=700,width=600");
        	//system.execBrowser(manualurl);
        };

        /**
        * 타이머 이벤트
        */
        this.dashProfitLoss_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
            {
                if (!this.getOwnerFrame().form.divMdi.visible)
                {
                    this.killTimer(1);
                    this.fnTran("profitLoss");
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
            nexacro.getEnvironment().set_usewaitcursor(rtn);

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
           takerchart.reDraw(this.divMain.form.divChart, "chart1");
        };

        /**
        * fnSetChartUnit - 차트 아이템 클릭 이벤트
        * @return : N/A
        * @example :
        */
        this.itemClickFunc = function(seriesId, displayText, index, data, values)
        {
            var sProgId;
            var objTemp;
            var objWinNx;
            objTemp = eval("window." + fv_sProfitLossFrame);
            sProgId = objTemp.parent.form.parent.progid;

            objTemp.getOwnerFrame().form.divMain.form.fnDashMenu(sProgId);

        }

        this.staToday_onclick = function(obj,e)
        {
            this.divMain.form.BasicChart00.set_enableanimation(false);
        	this.divMain.form.BasicChart00.set_enableanimation(true);

            this.divMain.form.BasicChart00.tooltip.set
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dashProfitLoss_onload,this);
            this.addEventHandler("ontimer",this.dashProfitLoss_ontimer,this);
            this.staToday.addEventHandler("onclick",this.staToday_onclick,this);
        };
        this.loadIncludeScript("dbcProfitLoss.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
