(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OM010P07");
            this.set_titletext("매뉴얼작성팝업");
            this.set_cssclass("fm_work");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSave",null,"10","54","21","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_save02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","36",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("red");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbWebEditor","17","46",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","690",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("5");
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
        this.registerScript("OM010P07.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    om > OM010P07
        *  @FileName    OM010P07.xfdl
        *  @Creator     홍길동
        *  @CreateDate  2019.11.06
        *  @Version     1.0
        *  @Desction    메뉴관리 -> 메뉴얼작성 팝업
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.11.06      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_bWebOnload = false;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = take.nvl(this.parent.sMenuCd, "");

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.OM010P07_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		this.fnInit();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Save";
        	this.fnGoList();
        }


        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        this.wbWebEditor_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("summer.html") != -1)
        	{
        		this.fv_bWebOnload = true;
        	}
        };

        this.wbWebEditor_onsize = function(obj,e)
        {
        	obj.getProperty("window").callMethod("setHeight", (obj.getOffsetHeight()-85));
        };

        this.OM010P07_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);
                    this.wbWebEditor.getProperty("window").callMethod("fnEditorReady", (this.wbWebEditor.getOffsetHeight()-65));

        			var sContents = take.nvl(this.parent.sManualTxt, "");
        			//20210118 정해원 게시판 내용 조회 불가
        			//callMethod의 파라미터에 html태그 있을 경우 호출 안 됨
        			//this.wbWebEditor.getProperty("window").callMethod("setContents", sContents);
        			var docWeb = this.wbWebEditor.getProperty("document").getProperty("all");
        				docWeb.getProperty("inputData").setProperty("value", take.nvl(sContents, ""));

        			this.wbWebEditor.getProperty("window").callMethod("setContents");
        		}
        	}
        };

        // btnSave_onclick : 저장버튼 클릭
        this.btnSave_onclick = function(obj,e)
        {
        	this.fnSave("Save");
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	var sBaseUrl = take.getSvcUrl();
        	this.wbWebEditor.set_url(sBaseUrl + "editor/SummerNote/summer.html");
        	this.setTimer(1,100);
        }

        /**
         * fnGoList : 확인버튼시 입력값 리턴, 화면 닫기
         * @return {N/A}    N/A
         * @example this.fnGoList();
         */
        this.fnGoList = function()
        {
        	var sRtn = this.wbWebEditor.getProperty("window").callMethod("getContents");
        	this.close(sRtn);
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OM010P07_onload,this);
            this.addEventHandler("ontimer",this.OM010P07_ontimer,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.wbWebEditor.addEventHandler("onloadcompleted",this.wbWebEditor_onloadcompleted,this);
            this.wbWebEditor.addEventHandler("onsize",this.wbWebEditor_onsize,this);
        };
        this.loadIncludeScript("OM010P07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
