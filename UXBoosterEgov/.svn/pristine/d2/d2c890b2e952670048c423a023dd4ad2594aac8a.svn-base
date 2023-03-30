(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcExchange");
            this.set_titletext("환율");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(354,113);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExchange", this);
            obj._setContents("<ColumnInfo><Column id=\"DATA_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExchangeCode", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">미국달러(매매기준율)</Col><Col id=\"CODE\">0000001</Col></Row><Row><Col id=\"NAME\">위안(매매기준율)</Col><Col id=\"CODE\">0000053</Col></Row><Row><Col id=\"NAME\">일본엔(100엔)</Col><Col id=\"CODE\">0000002</Col></Row><Row><Col id=\"NAME\">유로</Col><Col id=\"CODE\">0000003</Col></Row><Row><Col id=\"NAME\">영국파운드</Col><Col id=\"CODE\">0000012</Col></Row><Row><Col id=\"NAME\">캐나다달러</Col><Col id=\"CODE\">0000013</Col></Row><Row><Col id=\"NAME\">스위스프랑</Col><Col id=\"CODE\">0000014</Col></Row><Row><Col id=\"NAME\">호주달러</Col><Col id=\"CODE\">0000017</Col></Row><Row><Col id=\"NAME\">뉴질랜드달러</Col><Col id=\"CODE\">0000026</Col></Row><Row><Col id=\"NAME\">홍콩달러</Col><Col id=\"CODE\">0000015</Col></Row><Row><Col id=\"NAME\">대만달러</Col><Col id=\"CODE\">0000031</Col></Row><Row><Col id=\"NAME\">몽골투그릭</Col><Col id=\"CODE\">0000032</Col></Row><Row><Col id=\"NAME\">카자흐스탄텡게</Col><Col id=\"CODE\">0000033</Col></Row><Row><Col id=\"NAME\">태국바트</Col><Col id=\"CODE\">0000028</Col></Row><Row><Col id=\"NAME\">싱가폴달러</Col><Col id=\"CODE\">0000024</Col></Row><Row><Col id=\"NAME\">인도네시아루피아(100루피아)</Col><Col id=\"CODE\">0000029</Col></Row><Row><Col id=\"NAME\">말레이지아링기트</Col><Col id=\"CODE\">0000025</Col></Row><Row><Col id=\"NAME\">필리핀페소</Col><Col id=\"CODE\">0000034</Col></Row><Row><Col id=\"NAME\">베트남동(100동)</Col><Col id=\"CODE\">0000035</Col></Row><Row><Col id=\"NAME\">브루나이달러</Col><Col id=\"CODE\">0000036</Col></Row><Row><Col id=\"NAME\">인도루피</Col><Col id=\"CODE\">0000037</Col></Row><Row><Col id=\"NAME\">파키스탄루피</Col><Col id=\"CODE\">0000038</Col></Row><Row><Col id=\"NAME\">방글라데시타카</Col><Col id=\"CODE\">0000039</Col></Row><Row><Col id=\"NAME\">멕시코 페소</Col><Col id=\"CODE\">0000040</Col></Row><Row><Col id=\"NAME\">브라질 헤알</Col><Col id=\"CODE\">0000041</Col></Row><Row><Col id=\"NAME\">아르헨티나페소</Col><Col id=\"CODE\">0000042</Col></Row><Row><Col id=\"NAME\">스웨덴크로나</Col><Col id=\"CODE\">0000016</Col></Row><Row><Col id=\"NAME\">덴마크크로네</Col><Col id=\"CODE\">0000018</Col></Row><Row><Col id=\"NAME\">노르웨이크로네</Col><Col id=\"CODE\">0000019</Col></Row><Row><Col id=\"NAME\">러시아루블</Col><Col id=\"CODE\">0000043</Col></Row><Row><Col id=\"NAME\">헝가리포린트</Col><Col id=\"CODE\">0000044</Col></Row><Row><Col id=\"NAME\">폴란트즈워티</Col><Col id=\"CODE\">0000045</Col></Row><Row><Col id=\"NAME\">체코코루나</Col><Col id=\"CODE\">0000046</Col></Row><Row><Col id=\"NAME\">사우디아라비아리알</Col><Col id=\"CODE\">0000020</Col></Row><Row><Col id=\"NAME\">카타르리얄</Col><Col id=\"CODE\">0000047</Col></Row><Row><Col id=\"NAME\">이스라엘셰켈</Col><Col id=\"CODE\">0000048</Col></Row><Row><Col id=\"NAME\">요르단디나르</Col><Col id=\"CODE\">0000049</Col></Row><Row><Col id=\"NAME\">쿠웨이트디나르</Col><Col id=\"CODE\">0000021</Col></Row><Row><Col id=\"NAME\">바레인디나르</Col><Col id=\"CODE\">0000022</Col></Row><Row><Col id=\"NAME\">아랍연방토후국 더히람</Col><Col id=\"CODE\">0000023</Col></Row><Row><Col id=\"NAME\">터키리라</Col><Col id=\"CODE\">0000050</Col></Row><Row><Col id=\"NAME\">남아프리카공화국랜드</Col><Col id=\"CODE\">0000051</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staToday","5","0",null,"20","130",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Time");
            this.addChild(obj.name, obj);

            obj = new Static("staUnit",null,"0","130","20","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Unit");
            obj.set_textAlign("right");
            obj.set_text("출처 : 한국은행 환율 데이터");
            this.addChild(obj.name, obj);

            obj = new Combo("cboExchange","365","20",null,"20","-175",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsExchangeCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("10");
            obj.set_visible("false");
            obj.set_text("미국달러(매매기준율)");
            obj.set_value("0000001");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staExchange","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_NumberB");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",354,113,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","staExchange","text","dsExchange","DATA_VALUE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcExchange.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    dbcExchange.xfdl
        *  @Creator     신준민
        *  @CreateDate  2019.12.30
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.12.30      신준민             최초 생성
        *  2020.09.28      김대승             개발표준 및 로직수정
        *  2020.10.22      고영민             대시보드용 개발 표준 및 로직수정
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sToday = null;     //오늘 날짜(dbtime)
        this.fv_sCode = null;      //조회 환률 코드
        this.fv_nReload = 0;       //재 조회 주기
        this.fv_nReSerchCnt = 0;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        //Form 최초 로드시 발생되는 이벤트 (필수)
        this.dbcExchange_onload = function(obj, e)
        {
            //폼 초기화
            this.fnInit();
        }

        //Form 타이머 이벤트 (대시보드 필수)
        this.dbcExchange_ontimer = function(obj,e)
        {
        	if (e.timerid==9999)
            {
                this.killTimer(9999);
                //데이터 조회
                this.fnSearch();
            }
        };

        /*********************************************************
         * 2 대시보드 필수 FUNCTION 영역 (fnSearch)
         ********************************************************/
        /**
         * fnSearch : 데이터 조회 함수 (대시보드 새로고침시 호출)
         * @return {N/A}    N/A
         * @example this.fnSearch();
         */
        this.fnSearch = function()
        {
            //데이터 조회 여부
            if (this.parent.btran)
            {
                //환률 데이터 조회
                this.fnExchange();
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //cboExchange_onitemchanged : 콤보박스 목록 변경
        this.cboExchange_onitemchanged = function(obj,e)
        {
            //환률코드 세팅
            this.fv_sCode = e.postvalue;

            //데이터 조회
        	this.fnExchange();
        };

        /*********************************************************
         * 4 사용자 Function 영역
         ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
            //변수 선언
        	var objDate, objParam;

            //파라메터값 (환률 코드를 세팅)
            objParam = take.StringToObject(this.parent.dashparam);

            //재조회 주기
            this.fv_nReload = take.nvl(this.parent.reloadtime,0);

            //파라메터가 있으면
            if (objParam!="")
            {
                //Object 인지 체크
                if (take.isObject(objParam))
                {
                    //환률 코드 파람이 있는지 체크
                    if (objParam.hasOwnProperty("sExcCode"))
                    {
                        //환률 코드 세팅
                        this.fv_sCode = objParam.sExcCode;
                        this.cboExchange.set_value(this.fv_sCode);
                    }
                }
            } else {
                //파라메터가 없으면 미국달러 환률로 기본 세팅
                this.fv_sCode = "0000001";
            }

            //데이터 조회용 타이머 세팅(성능을 위해서 데이터 조회를 타이머를 이용하여 비동기로 처리
            this.setTimer(9999,500);
        }

        /**
         * fnExchange : Api 받아와서 Date 객체에 넣기
         * @return {N/A}    N/A
         * @example this.fnExchange();
         */
        this.fnExchange = function()
        {
            //변수 선언
            var sName, sCode, sParam;
            var objDate, objcboExchange, objDsSelCode, objExchangeCode;
            var nFRow;

            //변수 세팅
            objDsSelCode = this.dsSelectCode;
            objExchangeCode = this.dsExchangeCode;
            objcboExchange = this.cboExchange;

            //현재일자
            if (take.nvl(this.fv_sToday,"") == "")
            {
                objDate = UXBooster.av_objDateTime;
                this.fv_sToday = objDate.date;
            }

            //현재일자 기준일자로 세팅
            this.staToday.set_text(this.fv_sToday.substr(0,4) + "년 " + this.fv_sToday.substring(4,6) + "월 " + this.fv_sToday.substr(6) + "일");

            //검색 파라메터 세팅
            sName = objcboExchange.text;  //조회 환률 명
            sCode = objcboExchange.value; //조회 환률 코드
            sParam = "NAME=" + sName + " CODE=" + sCode + " DATE=" + this.fv_sToday;

            //중요 : Waitcursor 중지
            take.setUseWaitCursor(false);

            //조회 횟수 카운트
            this.fv_nReSerchCnt++;

            //데이터조회
        	take.transaction
        	(
        		this,								//pThis		: nexacro form object
        		"ExchangeRate",						//sTranId	: 서비스아이디
        		"SVC_LOC::dash/Exchange.do",		//sUrl		: 서비스 URL
        		"",		                            //sInDs		: 서버로 보낼 데이터셋
        		"dsExchange=dsExchange",			//sOutDs	: 서버에서 받을 데이터셋
        		sParam,								//sParam	: 파라메터
        		"fnCallBack",						//sCallBack	: 트랜젝션 완료후 실행할 CallBack 함수
        		false,								//bAsync	: 동기 비동기 여부
        		true								//bErrRtn	: 트랜잭션 에러를 화면단에서 받을지 여부
        	);
        }

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
            try {
                //변수 선언
                var objDsSelCode, objDsExCh, objNewDate, objDate;
                var sDate;
                var nYear, nMonth, nDay, sDay, nHours, nMin;

                //변수 세팅
                objDsExCh = this.dsExchange;

                //트랜젝션 아이디 체크
                if (sId == "ExchangeRate") //환률 조회 콜백
                {
                    //당일 고시된 환률이 없을 경우 처리
                    if(take.nvl(objDsExCh.getColumn(0,"DATA_VALUE"),"")=="")
                    {
                        //sDate = this.fv_sToday.replace(/(\d\d\d\d)(\d\d)(\d\d)/g, '$1/$2/$3');

                        //objNewDate = new Date();
                        //nHours 	   = objNewDate.getHours();
                        //nMin 	   = objNewDate.getMinutes();

                        //sDate = sDate + " " + nHours + ":" + nMin;

                        //objDate = new Date(sDate);

                        ////하루만큼의 시간을 밀리초로 뺀값
                        //sDate = objDate.getTime()-86400000;

                        //objDate = new Date(sDate);

                        //nYear 	= objDate.getYear();
                        //nMonth 	= objDate.getMonth()+1;
                        //nDay 	= objDate.getDate();

                        //sDay = 	nYear.toString().lpad(2,"0") +
                        //        nMonth.toString().lpad(2,"0") +
                        //        nDay.toString().lpad(2,"0");

                        if (this.fv_nReSerchCnt<=5)
                        {
                            sDate = take.getStrData(take.getAddDays(this.fv_sToday,-1)).date;

                            this.fv_sToday = sDate;

                            return this.fnExchange();
                        }
                    }
                }

                if (this.fv_nReload>0)
                {
                    this.setTimer(9999,this.fv_nReload*1000);
                }

            } catch(e) {
                take.debug(this, e);
            } finally {
                //중요 : Waitcursor 초기화
                take.setUseWaitCursor(true);
            }

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dbcExchange_onload,this);
            this.addEventHandler("ontimer",this.dbcExchange_ontimer,this);
            this.staUnit.addEventHandler("onclick",this.divMain_staUnit_onclick,this);
            this.cboExchange.addEventHandler("onitemchanged",this.cboExchange_onitemchanged,this);
        };
        this.loadIncludeScript("dbcExchange.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
