(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpBtnList");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsComp", this);
            obj._setContents("<ColumnInfo><Column id=\"btnId\" type=\"STRING\" size=\"256\"/><Column id=\"btnText\" type=\"STRING\" size=\"256\"/><Column id=\"comGbn\" type=\"STRING\" size=\"256\"/><Column id=\"scope\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtUrl","31","28","260","27",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoad","edtUrl:3","29","120","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("폼 불러오기");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetComp","btnLoad:3","29","120","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("버튼 컴포넌트 가져오기");
            this.addChild(obj.name, obj);

            obj = new Div("divForm","btnGetComp:3","31","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","36","76","813","369",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsComp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"버튼 아이디\"/><Cell col=\"1\" text=\"버튼명\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"Scope\"/></Band><Band id=\"body\"><Cell text=\"bind:btnId\"/><Cell col=\"1\" text=\"bind:btnText\"/><Cell col=\"2\" text=\"bind:comGbn\"/><Cell col=\"3\" text=\"bind:scope\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

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
        this.registerScript("smpBtnList.xfdl", function() {

        this.btnLoad_onclick = function(obj,e)
        {
        	//변수 선언 및 세팅
            var objDivForm;
            var sUrl;

            objDivForm = this.divForm;
            sUrl = this.edtUrl.value;

            //초기화
            objDivForm._bOnLoad = false;
            objDivForm.set_url("");
            this.dsComp.clearData();
            this.grdList.set_binddataset("");

            //메뉴 URL 연결
            if (this._orgurl==sUrl) //현재 폼 URL과 같을경우 처리
            {
                objDivForm.set_url("");
            } else {
                objDivForm.set_url(sUrl);
            }
        };

        this.btnGetComp_onclick = function(obj,e)
        {
        	var objMdiForm = kamco.getOwnerWorkForm(this);

            if (objMdiForm!="")
            {
                if (!take.isQuickView())
                {
                    this.fnCompInfo(this, objMdiForm.form, "Com");
                }
            }

            if (this.divForm.url=="")
            {
                this.fnCompInfo(this, this, "Form");
            } else {
                this.fnCompInfo(this, this.divForm.form, "Form");
            }

            this.grdList.setBindDataset(this.dsComp);
        };

        this.fnCompInfo = function(pThis, objForm, sGbn, sParent)
        {
            var arrComp = new Array();
            var objComp, objDs;
            var nCnt, nRow;
            var sType, sScope;

            sParent =take.nvl(sParent,"this");
            objDs = pThis.dsComp;

            if (objForm._type_name=="Tab")
            {
                arrComp = arrComp.concat(objForm.tabpages._idArray);
            } else if (objForm._type_name=="Div")
            {
                arrComp = arrComp.concat(objForm.form.components._idArray);
            } else {
                arrComp = arrComp.concat(objForm.components._idArray);
            }

            nCnt = arrComp.length;

            if (nCnt<=0) return ;

            objDs.set_enableevent(false);

            for (var i=0; i<nCnt; i++)
            {
                objComp = objForm[arrComp[i]];
                sScope = sParent + "." + objComp.name;
                sType = objComp._type_name;

                switch(sType)
                {
                    case "Tab":
                        if (sGbn!="Com") arguments.callee(pThis, objComp, sGbn, sScope);
                        break;
                    case "Div":
                    case "TabpageControl":
                    case "PopupDiv":
                        if (sGbn!="Com") arguments.callee(pThis, objComp.form, sGbn, sScope);
                        break;
                    case "Button":
                        nRow = objDs.addRow();
                        objDs.setColumn(nRow, "scope", sScope);
                        objDs.setColumn(nRow, "btnId", objComp.name);
                        objDs.setColumn(nRow, "btnText", objComp.text);
                        objDs.setColumn(nRow, "comGbn", sGbn);
                        break;
                    default:
                }
            }

            objDs.set_rowposition(0);
            objDs.set_enableevent(true);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnLoad.addEventHandler("onclick",this.btnLoad_onclick,this);
            this.btnGetComp.addEventHandler("onclick",this.btnGetComp_onclick,this);
        };
        this.loadIncludeScript("smpBtnList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
