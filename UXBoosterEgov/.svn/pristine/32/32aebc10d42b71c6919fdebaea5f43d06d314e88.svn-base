(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcStockStatus");
            this.set_titletext("월별보유재고현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(765,327);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"PREYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"NOWYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PREYEAR\">49919</Col><Col id=\"MONTH\">1월</Col><Col id=\"NOWYEAR\">49222</Col></Row><Row><Col id=\"PREYEAR\">49213</Col><Col id=\"MONTH\">2월</Col><Col id=\"NOWYEAR\">39213</Col></Row><Row><Col id=\"PREYEAR\">43535</Col><Col id=\"MONTH\">3월</Col><Col id=\"NOWYEAR\">33535</Col></Row><Row><Col id=\"MONTH\">4월</Col><Col id=\"PREYEAR\">42000</Col><Col id=\"NOWYEAR\">32000</Col></Row><Row><Col id=\"MONTH\">5월</Col><Col id=\"PREYEAR\">43000</Col><Col id=\"NOWYEAR\">33000</Col></Row><Row><Col id=\"MONTH\">6월</Col><Col id=\"PREYEAR\">43690</Col><Col id=\"NOWYEAR\">33690</Col></Row><Row><Col id=\"MONTH\">7월</Col><Col id=\"PREYEAR\">44893</Col><Col id=\"NOWYEAR\">34893</Col></Row><Row><Col id=\"MONTH\">8월</Col><Col id=\"PREYEAR\">45461</Col><Col id=\"NOWYEAR\">35461</Col></Row><Row><Col id=\"MONTH\">9월</Col><Col id=\"PREYEAR\">56544</Col><Col id=\"NOWYEAR\">46544</Col></Row><Row><Col id=\"MONTH\">10월</Col><Col id=\"PREYEAR\">54123</Col><Col id=\"NOWYEAR\">44123</Col></Row><Row><Col id=\"MONTH\">11월</Col><Col id=\"PREYEAR\">47542</Col><Col id=\"NOWYEAR\">37542</Col></Row><Row><Col id=\"MONTH\">12월</Col><Col id=\"PREYEAR\">39994</Col><Col id=\"NOWYEAR\">49994</Col></Row></Rows>");
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
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "12px 'NanumGothic'",
            		"itemtextcolor": "#333333",
            		"markertype": "circle",
            		"markersize": "9",
            		"markertextgap": "5"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "12px 'NanumGothic'",
            		"padding": "0px 0px 0px 10px"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletext": "",
            		"titletextcolor": "#838383",
            		"titletextfont": "12px 'NanumGothic'",
            		"labeltextcolor": "#838383",
            		"labeltextfont": "12px 'NanumGothic'",
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
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "normal 600 13px 'NanumGothic'",
            			"valuecolumn": "bind:PREYEAR",
            			"tooltiptext": "bind:PREYEAR",
            			"barlinestyle": "0px",
            			"tooltiptexttype": "number",
            			"selecttype": "unselect",
            			"barradius": "4",
            			"highlightbaropacity": "0.2",
            			"highlightbarvisible": "true",
            			"selectcolumn": "bind:SELECT",
            			"itemtexttype": "number",
            			"titletext": "2019년 월별재고"
            		},
            		{
            			"id": "series1",
            			"barvisible": true,
            			"barsize": "60",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "normal 600 13px 'NanumGothic'",
            			"valuecolumn": "bind:NOWYEAR",
            			"itemtexttype": "number",
            			"tooltiptext": "bind:NOWYEAR",
            			"barlinestyle": "0px",
            			"tooltiptexttype": "number",
            			"selecttype": "unselect",
            			"barradius": "4",
            			"highlightbaropacity": "0.2",
            			"highlightbarvisible": "true",
            			"selectcolumn": "bind:SELECT",
            			"titletext": "2020년 월별재고"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f6f6f6",
            			"labeltextfont": "12px 'NanumGothic'",
            			"titletextcolor": "#838383",
            			"titletextfont": "12px 'NanumGothic'",
            			"axislinestyle": "0px",
            			"ticklinestyle": "0px",
            			"labeltextcolor": "#838383",
            			"labeltype": "number"
            		}
            	],
            	"board": {
            		"id": "board",
            		"visible": false
            	}
            });
            obj.set_categorycolumn("bind:MONTH");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staToday","0","0","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Time");
            obj.set_text("2020년 10월 20일");
            this.addChild(obj.name, obj);

            obj = new Static("staUnit",null,"0","86","20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("단위 : E/A");
            obj.set_cssclass("sta_MF_Unit");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",765,327,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcStockStatus.xfdl", function() {
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

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        // formid_onload 최초 로드시 발생되는 이벤트 (필수)
        this.Form_onload = function(obj, e)
        {
            this.divMain.form.BasicChart00.runAnimation();

            if (take.nvl(this.parent.btran,false))
            {
                //this.fnTran("");
            }
        }

        //폼 타이머 이벤트
        this.Form_ontimer = function(obj,e)
        {
        	if (e.timerid==9999)
            {
                //if (!this.getOwnerFrame().form.divMdi.visible)
                //{
                    this.killTimer(9999);
                    this.fnTran("profitLoss");
                //}
            }
        };

        /*********************************************************
         * 2 필수 FUNCTION 영역 (fnSearch)
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
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        // series 클릭 이벤트
        this.divMain_BasicChart00_onseriesclick = function(obj,e)
        {
        	this.alert("클릭 이벤트입니다.");

        	// 상세이동 있을때
        	if(take.nvl(this.parent.progid, "") != "") {
        		// 이동할 메뉴ID, 파라메터, 호출 함수를 세팅해서 상세 보기로 이동
        		//take.mdiOpenMenu(this, this.parent.progid, this.parent.dashparam, sCallFunc{String});
        	}
        };

        /*********************************************************
         * 4 사용자 FUNCTION 영역
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

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
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

            this.fnSetUsewaitcursor(false);

            //트랜젝션 공통함수 호출 -->필수(모든 트랜젝션을 공통으로 처리)
            //take.transaction(this,sTranId, sUrl, sInDs, sOutDs, sParam, sCallBack);
        }

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

                    var nReloadn, nCnt;

                    nCnt = this.dsList.getRowCount();

                    if( nCnt > 0 )
                    {

                    }

                    nReloadn = parseInt(take.nvl(this.parent.reloadtime,"0"));

                    if (nReloadn>0)
                    {
                        nReloadn = nReloadn*1000;
                        this.setTimer(9999,nReloadn);
                    }

                    break;
                default :
                    break;
            }

            this.fnSetUsewaitcursor(true);
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.divMain.form.BasicChart00.addEventHandler("onseriesclick",this.divMain_BasicChart00_onseriesclick,this);
            this.staToday.addEventHandler("onclick",this.staToday_onclick,this);
        };
        this.loadIncludeScript("dbcStockStatus.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
