(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comBtnDiv");
            this.set_titletext("공통버튼 DIV");
            if (Form == this.constructor)
            {
                this._setFormPosition(260,43);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBtnRole", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_ROLE\" type=\"STRING\" size=\"256\"/><Column id=\"R_READ\" type=\"STRING\" size=\"256\"/><Column id=\"R_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"R_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"R_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"R_PRINT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"10","58","23","192",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"10","58","23","131",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_new00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"10","58","23","70",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_delete00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","58","23","9",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","10","0","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"4",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"0","10","100","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00_00","20",null,"100","10",null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",260,43,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comBtn.xfdl", function() {
        this.comBtnDiv_onload = function(obj,e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		this.fnBtnRole();
        	}
        };

        /**
         * commonbtn_onclick : ~ 공통 버튼 클릭
         */
        this.commonbtn_onclick = function(obj,e)
        {
        	var sBtnGbn;
            var objDivWork;

            sBtnGbn = obj.name.substr(3);
            objDivWork = take.getActiveForm(this).divForm.form;

            switch(sBtnGbn)
            {
                case "Add" :      //등록
                    objDivWork.fnAddRow();
                    break;

                case "Search" :   //조회
                    objDivWork.fnSearch();
                    break;

                case "Save" :     //수정
                    objDivWork.fnSave();
                    break;

                case "Del" :      //삭제
                    objDivWork.fnDelRow();
                    break;

                default :
                    break;
            }
        };

        this.getOwnerFormObject = function(objComp)
        {
            var sType = objComp.parent._type_name;
            if (sType!="ChildFrame")
            {
        		if(objComp.name.substring(0,8) =="divWork_") {
        			return objComp;
        		}else{
        			return arguments.callee(objComp.parent);
        		}
            } else {
                //현재 프레임 구조에 맞게 설정
                if (objComp.name.substring(0,8) =="divWork_") {
                    return objComp.form;
                } else {
                    return objComp;
                }
            }
        }

        /**
         * fnBtnRole : 공통버튼 권한 처리
         * @param  {N/A} N/A
         * @example this.fnBtnRole();
         */
        this.fnBtnRole = function()
        {
        	var sMenuCd = "";
        	var pForm = take.getActiveForm(this);
        	if(take.getActiveForm(this)){
        		sMenuCd = pForm.parent.ProgId;
        	}else{
        		sMenuCd = this.getOwnerFormObject(this).ProgId;
        	}

        	var sProjectCd = UXBooster.av_sProjectCd;

            if (sMenuCd=="")
            {
                trace("메뉴 아이디가 없습니다.");
                return;
            }

             take.tranSelect
                 (
                     this,  //Form 객체
                     "menuBtnRoleCom",
                     "Main.userButtonRoleSelect",
                     "",
                     "dsBtnRole",
                     "sMenuCd='" + sMenuCd +"' sProjectCd='" + sProjectCd + "'",
                     function (sId, nErr, sMsg) //sCallBack
                     {
                         if (sId=="menuBtnRoleCom")
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
            var arrBtn = {"INPUT":this.btnAdd, "READ":this.btnSearch, "SAVE":this.btnSave, "DELETE":this.btnDel};
        	var nRight = 10, nInterval = 3;
        	var arrBtnRole = ["SAVE", "DELETE", "INPUT", "READ"]; //조회, 신규, 삭제, 저장, 인쇄

        	for( var i=0; i<arrBtnRole.length; i++ )
        	{
        		var sId = arrBtnRole[i];
        		var sRole = take.nvl(this.dsBtnRole.getColumn(0,"R_"+sId),"");

            	sId = sId.toUpperCase();
        		var objBtn = arrBtn[sId];

        		if (sRole == "N")
        		{
        			objBtn.set_visible(false);
        			objBtn.set_width(0);
        		} else {
        			objBtn.set_right(nRight);
        			nRight = parseInt(objBtn.right) + parseInt(objBtn.width) + nInterval;

        			objBtn.set_visible(true);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comBtnDiv_onload,this);
            this.btnSearch.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnDel.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnSave.addEventHandler("onclick",this.commonbtn_onclick,this);
        };
        this.loadIncludeScript("comBtn.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
