(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM030P02");
            this.set_titletext("프로젝트관리_메뉴관리_양식팝업");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTemplateList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TEMPLATE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","46",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","0",null,null,"0","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTemplateList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"155\"/><Column size=\"143\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"양식ID\"/><Cell col=\"1\" text=\"명칭\"/></Band><Band id=\"body\"><Cell text=\"bind:TEMPLATE_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TEMPLATE_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static24","20","20",null,"21","22",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("양식정보");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"-2",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00",null,"0","20",null,"0","-2",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","divSearch:0",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"20","0","-2",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"Static01_01:0","57","23","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,"Static01_01:0","57","23","btnCancle:3",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",380,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM030P02.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    PM > PM030P02
        *  @FileName    PM030P02.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.11.06
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        * 2019.11.06      김대승             최초 생성
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
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		this.fnInIt();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

        	var sProjectCd  = take.nvl(this.parent.sProjectCd, "");
        	var sTemplateCd = take.nvl(this.parent.sTemplateCd, "");
        	if (sProjectCd != "") this.dsSearch.setColumn(0, "PROJECT_CD" , sProjectCd);
        	if (sTemplateCd != "") this.dsSearch.setColumn(0, "TEMPLATE_CD", sTemplateCd);

            take.tranSelect
        	(
        		this,
        		"Search",
        		"ProjectManagement.projectTemplateList",
        		"dsSearch",
        		"dsTemplateList",
        		"",
        		"fnCallback"
        	);
        }


        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // divSearch_grdList_oncelldblclick : 그리드 셀 더블 클릭
        this.divSearch_grdList_oncelldblclick = function(obj,e)
        {
        	this.fnSendData();
        };

        // btnEnter_onclick : 확인 클릭
        this.btnEnter_onclick = function(obj,e)
        {
        	this.fnSendData();
        };

        // btnCancle_onclick : 닫기 버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInIt : 초기화 함수
         * @example this.fnInIt();
         */
        this.fnInIt = function()
        {
        	this.fnSearch();
        }

        /**
         * fnSendData : 그리드의 선택된 데이터 값 넘기기
         * @param  {String} N/A
         * @example this.fnSendData();
         */
        this.fnSendData = function()
        {
        	var objDsTemplate = this.dsTemplateList;
        	var sRtn = objDsTemplate.getColumn(objDsTemplate.rowposition, "TEMPLATE_CD") +','+ objDsTemplate.getColumn(objDsTemplate.rowposition, "TEMPLATE_NM");
        	this.close(sRtn);
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
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
                case "Transation id 01" : //조회 콜백
                    //Script
                    break;
                case "Transation id 02" :  //조회 콜백
                    //Script
                    break;
                case "Transation id 03" : //조회 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                default :
                    break;
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.grdList.addEventHandler("oncelldblclick",this.divSearch_grdList_oncelldblclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnEnter.addEventHandler("onclick",this.btnEnter_onclick,this);
        };
        this.loadIncludeScript("PM030P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
