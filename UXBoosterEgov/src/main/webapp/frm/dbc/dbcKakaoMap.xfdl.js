(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcKakaoMap");
            this.set_titletext("카카오맵");
            if (Form == this.constructor)
            {
                this._setFormPosition(354,521);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staToday","0","0","135","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_time");
            obj.set_text("기준일 : 2020년 10월 20일");
            this.addChild(obj.name, obj);

            obj = new Static("stUnit",null,"0","120","20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Kakaomap API");
            obj.set_cssclass("sta_MF_Unit");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webMap","0","20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",354,521,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcKakaoMap.xfdl", function() {
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
        this.fv_nReload = 0;       //재 조회 주기

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        //Form 최초 로드시 발생되는 이벤트 (필수)
        this.dbcDaumMap_onload = function(obj, e)
        {
            //폼 초기화
            this.fnInit();
        }

        //Form 타이머 이벤트 (대시보드 필수)
        this.dbcKakaoMap_ontimer = function(obj,e)
        {
        	if (e.timerid==9999)
            {
                this.killTimer(9999);

                //맵 세팅
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
            //변수 세팅
            var sUrl;

            //Map Url
            sUrl = take.getSvcUrl() + "_webkit/kakao/openMapKakao.jsp";

            //재조회 주기
            this.fv_nReload = take.nvl(this.parent.reloadtime,0);

            //조회 여부
            if (this.parent.btran)
            {
                //웹브라우저 컴포넌트에 URL 초기화후 재 설정
                //trace("sUrl --> " + sUrl);
                this.webMap.set_url("");
                this.webMap.set_url(sUrl);

                //재조회 주기 맞춰 타이머 세팅
                if (this.fv_nReload>0)
                {
                    this.setTimer(9999,this.fv_nReload*1000);
                }
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function ()
        {
            this.setTimer(9999,500)
        };

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dbcDaumMap_onload,this);
            this.addEventHandler("ontimer",this.dbcKakaoMap_ontimer,this);
        };
        this.loadIncludeScript("dbcKakaoMap.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
