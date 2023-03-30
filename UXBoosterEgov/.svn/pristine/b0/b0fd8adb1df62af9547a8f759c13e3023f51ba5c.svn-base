(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMenualPop");
            this.set_titletext("Manual");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsManual", this);
            obj._setContents("<ColumnInfo><Column id=\"MANUAL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","50",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static16",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","17","60",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00","0","40",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comMenualPop.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Description    설명
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

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        //Form_onload 최초 로드시 발생되는 이벤트 (필수)
        this.comMenualPop_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		var sBaseUrl = take.getSvcUrl();
        		this.wbWebEditor.set_url(sBaseUrl + "editor/SummerNote/boardDetail.html");
        		this.setTimer(1,100);

           }
        }

        //폼 타이머 이멘트
        this.comMenualPop_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                var sNamespaces, sInDs, sOutDs, sParam;

                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);

                    if (take.nvl(this.parent.sMenuGbn,"")=="Dash")
                    {
        				sNamespaces = "SystemCommon.dashManualSelect";
                        sParam = "sProjectCd='"+nexacro.getApplication().av_sProjectCd+"' sDashCd='"+take.nvl(this.parent.sDashCd, "")+"'";
                    } else {
        				sNamespaces = "SystemCommon.manualSelect";
        				sParam = "sProjectCd='"+nexacro.getApplication().av_sProjectCd+"' sMenuCd='"+take.nvl(this.parent.sMenuCd, "")+"'";
                    }
        			sInDs = "";
        			sOutDs = "dsManual";

        			take.tranSelect(this, "Search", sNamespaces, sInDs, sOutDs, sParam, "fnCallback");
        		}
        	}
        };
        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){
        	//검색조건
        	var objDivSearch = this.divSearch.form;
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
            if (take.nvl(sTranId, "")=="") sTranId = "Transation id";
            take.tranSelect(this,sTranId,"Namespace","sInDataset", "sOutDataset", "sParam", "fnCallback");
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.wbWebEditor_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("boardDetail.html") != -1)
        	{
        		this.fv_bWebOnload = true;
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
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
                case "Search" : //조회 콜백

                    //Script
                    var sTitle, sContents;

                    sTitle = this.dsManual.getColumn(0, "MANUAL_NM");
        			sContents = this.dsManual.getColumn(0, "MANUAL_TXT");

                    this.staTitle.set_text(sTitle);

        			//20210118 정해원 게시판 내용 조회 불가
        			//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        			//this.wbWebEditor.getProperty("window").callMethod("fn_setHtml", sContents);
        			var docWeb = this.wbWebEditor.getProperty("document").getProperty("all");
        				docWeb.getProperty("inputData").setProperty("value", take.nvl(sContents, ""));

        			this.wbWebEditor.getProperty("window").callMethod("fn_setHtml");

                    break;
                default :
                    break;
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comMenualPop_onload,this);
            this.addEventHandler("ontimer",this.comMenualPop_ontimer,this);
            this.wbWebEditor.addEventHandler("onloadcompleted",this.wbWebEditor_onloadcompleted,this);
        };
        this.loadIncludeScript("comMenualPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
