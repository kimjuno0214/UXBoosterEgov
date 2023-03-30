(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpSearchSize");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"73","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","435","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeptT","19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용자 부서");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDept","staDeptT:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsCboDept");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserIdT","cboDept:19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","685","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textLImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","768","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId00","435","38","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeptT00","689","38","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사용자 부서");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDept00","768","38","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsCboDept");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserIdT00","352","38","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT00","19","38","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textLImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn00","102","38","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00","998","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT01","1018","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textLImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn01","1101","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","1331","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","divSearch:30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","73","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("정의");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtUserId","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboDept","value","dsSearch","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtUserId00","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboDept00","value","dsSearch","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboUseYn00","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboUseYn01","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpSearchSize.xfdl", function() {


        this.smpSearchSize_onload = function(obj,e)
        {
        	take.setCondInfo(this);
        };

        this.divSearch_onsize = function(obj,e)
        {
        	if (obj._tOrgWid != e.cx)
            {
                take.setLayout(this, obj, e.cx);
            }
        };

        this.Button00_onclick = function(obj,e)
        {

        };

        take.setCondInfo = function(pThis, objDiv)
        {
            if (take.nvl(pThis,"")=="") return false;

            var objDiv, objCompList, objComp, arrCond;
            var arrComps;
            var nCnt;

            objDiv = take.nvl(objDiv, take.nvl(pThis["divSearch"],""));

            objDiv._tOrgWid = objDiv.getOffsetWidth();

            if (objDiv=="") return false;

            objCompList = objDiv.form.components;
            arrComps = objCompList._idArray;

            nCnt = arrComps.length;

            if (nCnt<=0) return false;

            arrCond = pThis["_tArrCondInfo"] = new Array();

            for (var i=0; i<nCnt; i++)
            {
                objComp = objCompList[arrComps[i]];

                arrCond.push();
                arrCond[i] = {
                    "id"    : objComp.name,
                    "order" : objComp.getOffsetTop().toString() + objComp.getOffsetLeft().toString(),
                    "comp"  : objComp,
                    "start" : objComp.getOffsetLeft(),
                    "end"   : objComp.getOffsetLeft() + objComp.getOffsetWidth()
                };
            }

            arrCond = arrCond.sort(function(a, b) {
                //return a["order"] - b["order"];  // 숫자일 경우
                return a.order < b.order ? -1 : a.order > b.order ? 1 : 0;
            });

            nCnt = arrCond.length;

            for (var j=0;j<nCnt;j++)
            {
                arrCond[j].order = j;
            }

            //console.dir(arrCond);

        }

        take.setLayout = function(pThis, objDiv, nWid)
        {

        }

        take.condFind = function(arrCond, nWid)
        {
            var nCnt;

            nCnt=arrCond.length;


        }

        // this.divSearch_onsize = function(obj:nexacro.Div,e:nexacro.SizeEventInfo)
        // {
        // //     if (obj.setOffsetWidth()==e.cx) return;
        // //
        // //     var nCnt, nFormWid, nFormHeight, nHGap=8, nWGap=20, nCompGap=-3;
        // //     var objPForm, objCompList, objComp, objCompT;
        // //     var arrCompsId;
        // //     var sTempId;
        // //
        // //     objPForm = obj.parent;
        // //     objCompList = obj.form.components;
        // //     arrCompsId = objCompList._idArray;
        // //
        // //     nFormWid = e.cx;
        // //     nFormHeight = e.cy
        // //     nCnt = arrCompsId.length;
        // //
        // //     for (var i=0; i<nCnt; i++)
        // //     {
        // //         sTempId = arrCompsId[i];
        // //         objComp = objCompList[sTempId];
        // //
        // //         if (/^sta.*T$/.test(sTempId)) continue;
        // //         if (!objComp.visible) continue;
        // //
        // //         if (objComp.getOffsetLeft()+objComp.getOffsetWidth()+nWGap>=e.cx)
        // //         {
        // //             nMoveTop = objComp.getOffsetTop()+objComp.getOffsetHeight()+nHGap;
        // //             sTempId = "sta"+sTempId.substr(take.indexOfUpperCase(sTempId))+"T";
        // //
        // //             if (arrCompsId.indexOf(sTempId)>=0)
        // //             {
        // //                 objCompT = objCompList[sTempId];
        // //                 objCompT.set_left(nWGap);
        // //                 objCompT.set_top(nMoveTop);
        // //
        // //                 trace("objCompT : " + objCompT.name+".left --> " + nWGap + " / top --> " + nMoveTop);
        // //
        // //                 objComp.set_left(objCompT.getOffsetLeft()+objCompT.getOffsetWidth()-nCompGap);
        // //                 objComp.set_top(nMoveTop);
        // //
        // //                 trace("objComp : " + objComp.name+".left --> " + (objCompT.getOffsetLeft()+objCompT.getOffsetWidth()-nCompGap) + " / top --> " + nMoveTop);
        // //             } else {
        // //                 objComp.set_left(nWGap);
        // //                 objComp.set_top(nMoveTop);
        // //
        // //                 trace("objComp : " + objComp.name+".left --> " + nWGap + " / top --> " + nMoveTop);
        // //             }
        // //
        // //             nFormHeight+=objComp.getOffsetHeight()+nHGap;
        // //
        // //             trace("nFormHeight --> " + nFormHeight);
        // //
        // //             obj.set_height(nFormHeight);
        // //         }
        // //
        // //     }
        // //
        //
        //     //obj.form.resetScroll();
        //     //objPForm.resetScroll();
        // };
        //
        // take.indexOfUpperCase = function(sText)
        // {
        //     var nLen = sText.length;
        //     var sTxt;
        //
        //     for (var i=0;i<nLen;i++)
        //     {
        //         sTxt = sText.charAt(i);
        //
        //         if (!/[a-z]/.test(sTxt) && /[A-Z]/.test(sTxt)) return i;
        //     }
        //
        //     return -1;
        // }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpSearchSize_onload,this);
            this.divSearch.addEventHandler("onsize",this.divSearch_onsize,this);
            this.divSearch.form.edtUserId.addEventHandler("onkeydown",this.divSearch_edtUserId_onkeydown,this);
            this.divSearch.form.cboDept.addEventHandler("onitemchanged",this.divSearch_cboDept_onitemchanged,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_cboUseYn_onitemchanged,this);
            this.divSearch.form.edtUserId00.addEventHandler("onkeydown",this.divSearch_edtUserId_onkeydown,this);
            this.divSearch.form.cboDept00.addEventHandler("onitemchanged",this.divSearch_cboDept_onitemchanged,this);
            this.divSearch.form.cboUseYn00.addEventHandler("onitemchanged",this.divSearch_cboUseYn_onitemchanged,this);
            this.divSearch.form.cboUseYn01.addEventHandler("onitemchanged",this.divSearch_cboUseYn_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("smpSearchSize.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
