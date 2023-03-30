(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("MDI 업무화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1850,894);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBtnRole", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_ROLE\" type=\"STRING\" size=\"256\"/><Column id=\"R_READ\" type=\"STRING\" size=\"256\"/><Column id=\"R_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"R_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"R_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"R_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"R_EXCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","10","45",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","58","23","314",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","13",null,"19","372",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_title01");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"10","58","23","253",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_new01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"10","58","23","192",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_delete01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","58","23","131",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"10","58","23","70",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_print01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnManual",null,"10","22","23","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_advice00");
            obj.set_tabstop("true");
            obj.set_visible("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnReload",null,"10","22","23","45",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_reset00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1850,894,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmWork.xfdl", function() {
        /**
        *  Work
        *
        *  @MenuPath    MainFrame > Work
        *  @FileName    frmWork.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.09.10
        *  @Version     1.0
        *  @Desction    메인 화면
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.10      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //Save Transaction Callback용 필수
        //N/A

        //개발자용 폼 변수
        //N/A

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
            trace("frmWork.onload.success");

        	this.ProgId="GM00000140";
        	if (take.bDomain)
            {
                //다국어가져오기
                takedomain.LangService(this);
            }

            //this.staTitle.set_text(this.parent.ProgNm + "(" + this.parent.ProgId +")");
            this.fnBtnRole();
        };

        /*********************************************************
         * 2 각 COMPONENT 별 EVENT 영역
         *******************************************************/
        //commonbtn_onclick : ~ 공통 버튼 클릭
        this.commonbtn_onclick = function(obj,e)
        {
        	var sBtnGbn;
            var objDivWork;
            sBtnGbn = obj.name.substr(3);
            objDivWork = this.divForm.form;

            switch(sBtnGbn)
            {
                case "Add" :      //등록
        			try {
        				objDivWork.fnAddRow();
        			} catch(e) {
        				objDivWork.fnAdd();
        			}
                    break;

                case "Search" :   //조회
                    objDivWork.fnSearch();
                    break;

                case "Save" :     //수정
                    objDivWork.fnSave();
                    break;

                case "Del" :      //삭제
        			try{
        				objDivWork.fnDelRow();
        			} catch(e) {
        				trace(e);
        				objDivWork.fnDel();
        			}
                    break;

                case "Excel" :   //엑셀
                    objDivWork.fnExcel();
                    break;

                case "Print" :   //인쇄
        		    objDivWork.fnPrint();
                    break;

        		case "Reload" :   //새로고침
        			this.divForm.form.reload();
                    break;

        		case "Manual" :   //매뉴얼
                    var agrKey = {sMenuCd:take.nvl(this.parent.ProgId, "")};

        			take.openPopup(this, "comMenualPop", "frm::com/comMenualPop.xfdl", agrKey, "",
        				function(sId, sRtn){
        				},
        			false);
                    break;

                default :
                    break;
            }
        };

        /*********************************************************
        * 3 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnBtnRole : 공통버튼 권한 처리
         * @param  {N/A} N/A
         * @example this.fnBtnRole();
         */
        this.fnBtnRole = function()
        {
            var sMenuCd = take.nvl(this.parent.ProgId, "");

            if (this.getOwnerFrame()._is_popup_frame)
            {
                sMenuCd = take.nvl(this.getOwnerFrame().ProgId, "");
                //this.parent.parent.parent.ProgId
            }
            //trace("sMenuCd ---> " + sMenuCd);

        	var sProjectCd = UXBooster.av_sProjectCd;

            if (sMenuCd=="")
            {
                trace("메뉴 아이디가 없습니다.");
                return;
            }

        	//this.alert(sMenuCd + "," + UXBooster.av_sProjectCd);

             take.tranSelect
                 (
                     this,  //Form 객체
                     "menuBtnRole",
                     "Main.userButtonRoleSelect",
                     "",
                     "dsBtnRole",
                     "sMenuCd='" + sMenuCd +"' sProjectCd='" + sProjectCd + "'",
                     function (sId, nErr, sMsg) //sCallBack
                     {
                         if (sId=="menuBtnRole")
                         {
                             var sBtnRole;

                             sBtnRole = take.nvl(this.dsBtnRole.getColumn(0,"BTN_ROLE"),"");

                             if (sBtnRole=="")
                             {
                                 take.debug(this, "버튼 권한이 데이터를 불러오지 못하였습니다.");
                                 return;
                             }

                             this.fnBtnRoleSetting();
                         }
                     }
                 );
        };

        /**
         * fnBtnRoleSetting : 공통버튼 권한 처리
         * @param   {N/A} N/A 권한여부문자열
         * @example this.fnBtnRoleSetting();
         */
        this.fnBtnRoleSetting = function()
        {
            var arrBtn = {"INPUT":this.btnAdd, "READ":this.btnSearch, "SAVE":this.btnSave, "DELETE":this.btnDel, "EXCEL":this.btnExcel, "PRINT":this.btnPrint};
        	var nRight = 70, nInterval = 3;
        	var arrBtnRole = ["PRINT", "SAVE", "DELETE", "INPUT", "READ"]; //조회, 신규, 삭제, 저장, 인쇄

        	for( var i=0; i<arrBtnRole.length; i++ )
        	{
        		var sId = arrBtnRole[i];
        		var sRole = take.nvl(this.dsBtnRole.getColumn(0,"R_"+sId),"");

            	sId = sId.toUpperCase();
        		var objBtn = arrBtn[sId];

        		if (sRole == "N")
        		{
        			//nInterval = 0;
        			objBtn.set_visible(false);
        			objBtn.set_width(0);
        		} else {
        			//nInterval = 5;
        			objBtn.set_right(nRight);
        			nRight = parseInt(objBtn.right) + parseInt(objBtn.width) + nInterval;

        			objBtn.set_visible(true);
        		}
        	}

        	this.btnReload.set_visible(true);
        	this.btnManual.set_visible(true);
        };

        /**
         * fnBtnRoleSetting : 공통버튼 권한 처리
         * @param   {String} sBtnRole 권한여부문자열
         * @example this.fnBtnRoleSettingAll("YYYYN"); //등록,조회,수정,삭제,출력
         */
        this.fnBtnRoleSettingAll = function(sBtnRole)
        {
            var arrBtn = {"Add":this.btnAdd, "Search":this.btnSearch, "Save":this.btnSave, "Del":this.btnDel, "Print":this.btnPrint};
        	var nRight = 70, nInterval = 3, nWid=58, nCnt;
        	var arrBtnRole = ["Search", "Add", "Del", "Save", "Print" ]; //조회, 신규, 삭제, 저장, 출력

            nCnt = arrBtnRole.length-1;

        	for( var i=nCnt; i>=0; i-- )
        	{
        		var sId = arrBtnRole[i];
        		var sRole = sBtnRole.substr(i,1);

            	//sId = sId.toUpperCase();
        		var objBtn = arrBtn[sId];

        		if (sRole == "N")
        		{
        			//nInterval = 0;
        			objBtn.set_visible(false);
        			objBtn.set_width(0);
        		} else {
        			//nInterval = 5;
        			objBtn.set_right(nRight);
                    objBtn.set_width(nWid);
        			nRight = parseInt(objBtn.right) + parseInt(objBtn.width) + nInterval;

        			objBtn.set_visible(true);
        		}
        	}

        	this.btnReload.set_visible(true);
        	this.btnManual.set_visible(true);

            return true;
        };

        /**
         * fnBtnRoleSetting : 공통버튼 권한 처리
         * @param   {String}  sBtnId 버튼 아이디
         * @param   {boolean} bRole  권한 여부
         * @example this.fnBtnRoleSetting("YYYYN");
         */
        this.fnBtnRoleSettingOne = function(sBtnId, bRole)
        {
            if (take.nvl(sBtnId)=="") return false;

            var objBtn = {"SEARCH":this.btnSearch, "ADD":this.btnAdd, "DEL":this.btnDel, "SAVE":this.btnSave, "PRINT":this.btnPrint};
            var nCnt;
            var sRoleTxt="";

            sBtnId = sBtnId.toUpperCase();

            for (var x in objBtn)
            {
                if (x==sBtnId)
                {
                    sRoleTxt+="Y";
                } else {
                    if(objBtn[x].visible)
                    {
                        sRoleTxt+="Y";
                    } else {
                        sRoleTxt+="N";
                    }
                }
            }

            return this.fnBtnRoleSettingAll(sRoleTxt);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnDel.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnSave.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnPrint.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnManual.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnReload.addEventHandler("onclick",this.commonbtn_onclick,this);
        };
        this.loadIncludeScript("frmWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
