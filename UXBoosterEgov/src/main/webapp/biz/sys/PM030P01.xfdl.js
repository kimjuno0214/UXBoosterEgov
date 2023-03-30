(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM030P01");
            this.set_titletext("프로젝트관리_메뉴관리_아이콘등록팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSystemIcon", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ICON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSystemIcon","10","10",null,null,"10","10",null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsSystemIcon");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"60\"/></Rows><Band id=\"head\"><Cell text=\"아이콘순번\"/><Cell col=\"1\" text=\"아이콘명\"/><Cell col=\"2\" text=\"이미지\"/><Cell col=\"3\" colspan=\"2\" text=\"선택\"/></Band><Band id=\"body\"><Cell text=\"bind:ICON_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ICON_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:FILE_NM\" textAlign=\"center\" displaytype=\"imagecontrol\"/><Cell col=\"3\" text=\"bind:CHK\" textAlign=\"center\"/><Cell col=\"4\" edittype=\"none\" displaytype=\"expr:CHK==&quot;Y&quot;?&quot;none&quot;:&quot;buttoncontrol&quot;\" text=\"expr:CHK==&quot;Y&quot;?&quot;&quot;:comp.parent.stcSelect.text\" textAlign=\"center\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("stcSelect","347","37","27","26",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_visible("false");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",420,430,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM030P01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    PM > PM030P01
        *  @FileName    PM030P01.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.10.15
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.10.15      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sParentProjectCd	= take.nvl(this.parent.sProjectCd, "");
        this.fv_sParentMenuCd		= take.nvl(this.parent.sMenuCd, "");
        this.fv_sMenuIcon			= "";

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM030P01_onload = function(obj, e)
        {
        	//다국어 때문에 추가해야 함
        	this.ProgId="GM00000111";
            this.ProgNm="GM00000111";

        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		// 초기화
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectMenuIconSelect";

        	var sUrl = take.getSvcUrl();
        	var sProjectCd = this.fv_sParentProjectCd;
        	var sMenuCd    = this.fv_sParentMenuCd;
            take.tranSelect
        	(
        		this,
        		"projectMenuIconSelect",
        		"ProjectManagement.projectMenuIconSelect",
        		"",
        		"dsSystemIcon",
        		"MENU_CD='" + sMenuCd + "' PROJECT_CD='" + sProjectCd + "' URL='" + sUrl + "'",
        		"fnCallback"
        	)

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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	take.transaction
        	(
        		this,
        		"projectMenuIconUpdate",
        		"SVC_LOC::pm/projectMenuIconUpdate.do",
        		"",
        		"",
        		"PROJECT_CD='"+this.fv_sParentProjectCd+"' MENU_CD='"+this.fv_sParentMenuCd+"' MENU_ICON='"+this.fv_sMenuIcon+"'",
        		"fnCallback"
        	);
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

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
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // X 버튼 클릭 __ 팝업 창 닫기
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close(-1);
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
        	this.fnSearch("projectMenuIconSelect");
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
                case "projectMenuIconUpdate" : // 저장 콜백
        			if( sErrMsg == "SUCC" )
        			{
        				this.fv_sCloseGubun = "save"
        				this.close(this.fv_sCloseGubun);
        			}
                    break;
                default :
                    break;
            }
        }



        this.divMain_grdSystemIcon_oncellclick = function(obj,e)
        {
        	if (e.cell == 4)
        	{
        		if( obj.getCellPropertyValue(obj.getSelectedRows(), 4, "displaytype") == "buttoncontrol")
        		{
        			this.fv_sMenuIcon = this.dsSystemIcon.getColumn(this.dsSystemIcon.rowposition, "ICON_SEQ");

        			this.fnSave("Save");
        		}
         	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM030P01_onload,this);
            this.divMain.form.grdSystemIcon.addEventHandler("oncellclick",this.divMain_grdSystemIcon_oncellclick,this);
        };
        this.loadIncludeScript("PM030P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
