(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comMsg");
            this.set_titletext("New Form");
            this.set_cssclass("frm_MF_bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMsg","0","0","700","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("dvi_WF_popBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"49","0",null,null,null,null,null,this.divMsg.form);
            obj.set_taborder("0");
            obj.set_text("Alert");
            obj.set_cssclass("sta_TF_title");
            this.divMsg.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","99","99","0",null,null,null,null,null,this.divMsg.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_close");
            obj.set_visible("false");
            this.divMsg.addChild(obj.name, obj);

            obj = new Button("btnCancle","0",null,"349","96",null,"0",null,null,null,null,this.divMsg.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_BF_button01");
            this.divMsg.addChild(obj.name, obj);

            obj = new Button("btnSub","110",null,"349","96",null,"0",null,null,null,null,this.divMsg.form);
            obj.set_taborder("6");
            obj.set_text("서브");
            obj.set_cssclass("btn_BF_button01");
            obj.set_visible("false");
            this.divMsg.addChild(obj.name, obj);

            obj = new Static("staMsg","10","staTitle:0",null,null,"10","btnSub:0",null,null,null,null,this.divMsg.form);
            obj.set_taborder("3");
            obj.set_text("Alert Message text\r\n");
            obj.set_cssclass("sta_TF_title");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            this.divMsg.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"349","96","0","0",null,null,null,null,this.divMsg.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_BF_button01");
            this.divMsg.addChild(obj.name, obj);

            obj = new Static("staType","60","80","230","98",null,null,null,null,null,null,this.divMsg.form);
            obj.set_taborder("5");
            this.divMsg.addChild(obj.name, obj);

            obj = new Static("Static02","860","170","230","98",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_popAlertIcon02");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","860","278","230","98",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_popAlertIcon03");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","860","60","230","98",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_popAlertIcon01");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMsg.form
            obj = new Layout("default","",0,0,this.divMsg.form,function(p){});
            this.divMsg.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",350,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comMsg_bak.xfdl", function() {
        // sta_WF_popAlertIcon01 : X
        // sta_WF_popAlertIcon02 : !
        // sta_WF_popAlertIcon03 : ?
        //"error" 설정 시 빨간색 "X" 모양 아이콘이 표시됩니다.
        //"question" 설정 시 물음표("?") 모양 아이콘이 표시됩니다.
        //"warning" 설정 시 노랑색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다.
        //"information" 설정 시 파란색 바탕에 느낌표("!") 모양 아이콘이 표시됩니다.

        /**
        *  공통 메세지 팝업
        *
        *  @MenuPath    공통 메세지 팝업
        *  @FileName    comMsg.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.12.30
        *  @Version     1.0
        *  @Desction    공통 메세지 팝업
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.12.30      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_objFrame = this.getOwnerFrame();

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * comMsg_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.comMsg_onload = function(obj, e)
        {
            var sGbn, sTitle, sMsg, sCss;
            var arrBtnText, arrBtnObj;
            var nCnt;
            var objDiv, objCancle, objOk, objSub;

            objDiv = this.divMsg.form;
            objCancle = objDiv.btnCancle;
            objOk = objDiv.btnOk;
            objSub = objDiv.btnSub;

            sGbn = this.fv_objFrame.argGbn;
            sTitle = this.fv_objFrame.argTitle;
            sMsg = this.fv_objFrame.argMsg;
            sType = this.fv_objFrame.argType;
            arrBtnText = this.fv_objFrame.arrBtnText;

        	if(nexacro.trim(take.nvl(sTitle, "")) == "") {
        		objDiv.staTitle.set_text("알림메세지");
        	} else {
        		objDiv.staTitle.set_text(sTitle);
        	}

            if (!take.isNull(arrBtnText))
            {
        		//if (typeof(arrBtnText)=="object")
        		if (typeof(arrBtnText)=="array")
                {
                    nCnt = arrBtnText.length;

                    if (nCnt>0)
                    {
                        arrBtnObj = [objCancle,objOk,objSub];

                        for (var i=0;i<nCnt;i++)
                        {
                            //arrBtnObj[i].set_text(arrBtnText[i]);
        					arrBtnObj.set_text(arrBtnText[i]);
                        }
                    }
                }
            }

            if (sGbn=="alert")
            {
                objOk.set_left(0);
                objOk.set_right(0);
                objCancle.set_visible(false);
                objOk.set_visible(true);
                objSub.set_visible(false);
            } else if (sGbn=="confirm") {
                objCancle.set_visible(true);
                objOk.set_visible(true);
                objSub.set_visible(false);
            } else {
                objCancle.set_left(0);
                objCancle.set_width(120);
                objSub.set_left(120);
                objCancle.set_width(120);
                objOk.set_left(240);
                objCancle.set_width(120);

                objOk.set_cssclass("btn_WF_basic03");

                objCancle.set_visible(true);
                objOk.set_visible(true);
                objSub.set_visible(true);
            }

            switch(sType)
            {
                case "error":
                    sCss = "sta_WF_popAlertIcon01";
                    break;
                case "question":
                    sCss = "sta_WF_popAlertIcon04";
                    //objDiv.staType.set_text("(?)question"); //임시
                    break;
                case "warning":
                    sCss = "sta_WF_popAlertIcon05";
                    //objDiv.staType.set_text("Warning"); //임시
                    break;
                case "info":
                    sCss = "sta_WF_popAlertIcon02";
                    break;
                case "push":
                    sCss = "sta_WF_popAlertIcon03";
                    break;
                default:
            }

            objDiv.staType.set_cssclass(sCss);

            objDiv.staMsg.set_text(sMsg);
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnAddRow, fnSave, fnDelRow, fnExcel...)
        ********************************************************/
        //N/A

        /*********************************************************
        * 3 각 COMPONENT 별 EVENT 영역
        ********************************************************/
        //divMsg_btn_onclick : 취소, 서브, 확인 버튼 클릭 이벤트
        this.divMsg_btn_onclick = function(obj,e)
        {
        	var sGbn = obj.name.substr(3).toLowerCase();

            this.fnClose(sGbn);
        };

        //divMsg_btnClose_onclick : 닫기 버튼 클릭 이벤트
        this.divMsg_btnClose_onclick = function(obj,e)
        {
        	this.fnClose("close");
        };


        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnClose : 닫기 함수
         * @param  {String} sRtn return text
         * @example this.fnClose(sParam);
         */
        this.fnClose = function(sRtn)
        {
            take.trace(this.fv_objFrame.argProgInfo +".take."+ this.fv_objFrame.argType +".End", "INFO", this.fv_objFrame.argMsg + " return : " + sRtn);
            this.close(sRtn);
        }

        /*********************************************************
        * 5 TRANSACTION OR CALLBACK 콜백 처리부분
        ********************************************************/
        //N/A

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comMsg_onload,this);
            this.divMsg.form.btnClose.addEventHandler("onclick",this.divMsg_btnClose_onclick,this);
            this.divMsg.form.btnCancle.addEventHandler("onclick",this.divMsg_btn_onclick,this);
            this.divMsg.form.btnSub.addEventHandler("onclick",this.divMsg_btn_onclick,this);
            this.divMsg.form.btnOk.addEventHandler("onclick",this.divMsg_btn_onclick,this);
        };
        this.loadIncludeScript("comMsg_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
