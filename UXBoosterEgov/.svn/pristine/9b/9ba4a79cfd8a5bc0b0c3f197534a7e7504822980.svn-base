(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpButtonRole");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_tdsBtnRole", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","38","150","547","280",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("_tdsBtnRole");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"257\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"BTN_ID\"/><Cell col=\"1\" text=\"USE_YN\"/></Band><Band id=\"body\"><Cell text=\"bind:BTN_ID\"/><Cell col=\"1\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","794","48","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","40","24","549","123",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow","50","11","120","50",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("btnAddRow");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnRoleCopy","200","11","120","50",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("btnRoleCopy");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpButtonRole.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
            this.ProgId = "M0036";
        	take.formBtnRole(this);
        };

        take.formBtnRole = function(pThis)
        {
        	if (take.nvl(pThis,"")=="") return;

        	var objGridDs, objRoleDs;
        	var sProgId = take.nvl(pThis.ProgId, "");

        	//sProgId = "M0036"; //테스트 아이디
        	//trace("ProgId-->" + sProgId);

        	if (sProgId=="") return; //최상위 부모폼에만 프로그램 아이디가 존재하여 리턴 처리

        	if(!pThis.objects["_tdsBtnRole"])
        	{
        		//다국어용 데이터셋 생성
        		objRoleDs = new Dataset;
        		objRoleDs.set_name("_tdsBtnRole"); //데이터 셋 명

        		//해당 폼에 추가
        		pThis.addChild(objRoleDs.name, objRoleDs);

        	} else {
        		take.trace(pThis.name + "take.formBtnRole.DatasetCreate(_tdsBtnRole)", "INFO", "버튼 권한 데이터셋이 존재합니다.");
        		objRoleDs = pThis.objects["_tdsBtnRole"];
        	}

        	take.tranSelect(
        	    pThis,
                "selectUserFormRoleBtn",
                "Main.selectUserFormRoleBtn",
                "",
                "_tdsBtnRole", "sMenuId='" + sProgId +"'",
        		function(sId, nCd, sMsg)
        		{
                    take.debug(this, "프로그램 사용자 정보 및 권한 [" + sId + "] 데이터 가져오기 성공");
                    //trace(this._tdsBtnRole.saveXML());

                    var sFormBtn, sCompNm, sCompType;
                    var arrFormBtn;
                    var nCnt;
                    var objRtn, objComp, objDs;

                    objDs = take.nvl(this._tdsBtnRole,"");

                    if (objDs=="") return;

                    nCnt = objDs.rowcount;

                    if (nCnt > 0)
                    {
                        for (var i=0; i<nCnt; i++)
                        {
                            sCompNm = objDs.getColumn(i,"BTN_ID");

                            objRtn = take.nvl(take.CompType(this, sCompNm), "");

                            if (objRtn=="")
                            {
                                take.debug(this, this.name + "폼에 "+  sCompNm + " 컴포넌트가 존재하지 않음.");
                                return;
                            }

                            sCompType = objRtn.type;
                            objComp = objRtn.comp;

                            //if (sCompType!="Button")
                            //{
                            //    take.debug(this, "버튼이 아닙니다. 버튼만 적용됩니다.");
                            //    return;
                            //}

                            objComp.set_enable(false);
                            //objComp.set_tooltiptext("권한이 없습니다.");
                        }
                    }
        		}, false);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("smpButtonRole.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
