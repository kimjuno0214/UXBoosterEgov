(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comDashBar01");
            this.set_titletext("바차트(바 색상이 다를경우)");
            if (Form == this.constructor)
            {
                this._setFormPosition(354,315);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><ConstColumn id=\"BASEDT\" type=\"STRING\" size=\"30\" value=\"2020.01.29 23:38\"/><ConstColumn id=\"REFER\" type=\"STRING\" size=\"30\" value=\"단위 : 백만원\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">49919</Col><Col id=\"TEXT\">목표</Col><Col id=\"SELECT\">false</Col></Row><Row><Col id=\"TEXT\">예측</Col><Col id=\"VALUE\">48645</Col><Col id=\"SELECT\">false</Col></Row><Row><Col id=\"TEXT\">실적</Col><Col id=\"VALUE\">49213</Col><Col id=\"SELECT\">false</Col></Row><Row><Col id=\"TEXT\">전년</Col><Col id=\"VALUE\">43535</Col><Col id=\"SELECT\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBottom","0","226",null,"89","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staValue","5","25",null,null,"5","5",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_cssclass("sta_MF_NumDec");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("staText","5","0",null,"25","5",null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("text");
            obj.set_cssclass("sta_MF_TitleS06");
            obj.set_visible("false");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divMain","0","20",null,null,"0","divBottom:0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new BasicChart("chart","5","20",null,null,"5","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_enableanimation("true");
            obj.set_duration("700");
            obj._setContents({
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"visible": true,
            		"axislinestyle": "#c5c5c5",
            		"axislineopacity": "0.4",
            		"ticklineopacity": "0",
            		"labeltextfont": "12px \"NanumGothic\"",
            		"labelgap": "0",
            		"ticksize": "10"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "true",
            			"visible": "true",
            			"labeltextfont": "12px \"NanumGothic\"",
            			"labeltype": "number",
            			"labelmask": "#,###,##0",
            			"axislinestyle": "#c5c5c5",
            			"boardlinestyle": "#c5c5c5",
            			"axislineopacity": "0.4",
            			"boardlineopacity": "0.4",
            			"ticklineopacity": "0",
            			"gap": "0",
            			"labelgap": "0",
            			"ticksize": "0",
            			"autotickscale": "1"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"barvisible": true,
            			"barsize": "80",
            			"itemtextvisible": "true",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "12px \"NanumGothic\"",
            			"valuecolumn": "bind:VALUE",
            			"selecttype": "bind",
            			"selectcolumn": "bind:SELECT",
            			"selectbarfillstyle": "aliceblue",
            			"itemtexttype": "number",
            			"tooltiptext": "expr:TEXT + \":\" + VALUE",
            			"itemtextmask": "#,###,##0",
            			"baritemtextposition": "",
            			"baropacity": "1",
            			"linetype": "",
            			"tooltiptexttype": "text",
            			"barlinestyle": "0px solid transparent",
            			"barfillstyle": "#81ddc6,#f35e58,#edc683,#fe8c68"
            		}
            	],
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px",
            		"textcolor": "#ffffff",
            		"textfont": "12px \"NanumGothic\"",
            		"padding": "0px 0px 0px 10px"
            	}
            });
            obj.set_categorycolumn("bind:TEXT");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staToday","5","0","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_Time");
            obj.set_text("기준날짜(년,월,일)");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staUnit",null,"0","100","20","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기준(단위, 출처등)");
            obj.set_cssclass("sta_MF_Unit");
            obj.set_textAlign("right");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",354,315,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comChartBasic.xfdl", function() {
        // 1. bar에서 static 차트 변경
        // bar : this.divMain.form.chart.set_rotateaxis(false);
        // static : chart.set_rotateaxis(false);
        //
        // 2. bar에서 line 차트 변경
        // this.divMain.form.chart.seriesset0.set_barvisible(false);
        // this.divMain.form.chart.seriesset0.set_linevisible(true);
        // this.divMain.form.chart.seriesset0.set_linetype("curve");
        //
        // 3. 라인 차트 체우기
        // this.divMain.form.chart.seriesset0.set_lineareavisible(true);
        //
        // 3. point 차트
        // this.divMain.form.chart.seriesset0.set_barvisible(false);
        // this.divMain.form.chart.seriesset0.set_linevisible(false);
        // this.divMain.form.chart.seriesset0.set_lineareavisible(false);
        // this.divMain.form.chart.seriesset0.set_pointvisible(true);
        // - point 모양 : "circle", "square", "diamond", "triangle", "cross"
        // - 모양 변경시 : this.divMain.form.chart.seriesset0.set_pointshape("circle");
        //
        // 4. 차트그룹핑
        // this.divMain.form.chart.set_bargrouping(true);

        this.fv_nReload = null;
        this.fv_sDashId = null;
        this.fv_sDashType = null;
        this.fv_objUserParam = null;

        //dsList에 contents 값을 변경하여 테스트
        //값이 없을 경우         : 차트만 보여짐
        //값이 한개일 경우       : {contents:[{text:"실적",value:"49,213"}]}
        //값이 한개 이상일 경우 : {contents:[{text:"달성률(목표)",value:"98%"},{text:"신장률(전년)",value:"113%"}]}

        this.comDashBar01_onload = function(obj,e)
        {
            var sDashParam = take.nvl(this.parent.dashparam,"");

            sDashParam = '{contents:[{text:"달성률(목표)",value:"98%"},{text:"신장률(전년)",value:"113%"}]}';

            if (sDashParam!="")
            {
                this.fv_objUserParam = take.StringToObject(sDashParam);
                console.dir(this.fv_objUserParam);
            }

            this.fv_sDashId      = this.parent.dashid;
            this.fv_sDashType    = this.parent.dashtype;
            this.fv_nReload      = parseInt(take.nvl(this.parent.reloadtime,"0"));

            if (this.parent.btran)
            {
                this.fnSearch();
            } else {
                this.fnInit();
            }
        };

        this.fnInit = function()
        {

            var objDs, objMain, objBottom, objContents;
            var sTitle, sBaseDt, sRefer, sReload, sContents, sWid;
            var arrConts, arrRectText, arrRectVal;
            var nHet = 25;

            objMain = this.divMain.form;
            objBottom = this.divBottom.form;
            objDs = this.dsList;


            sBaseDt = objDs.getConstColumn("BASEDT");
            sRefer = objDs.getConstColumn("REFER");
            objMain.staToday.set_text("기준 일시: " + sBaseDt);
            objMain.staUnit.set_text(sRefer);
            this.divMain.form.resetScroll();

            try {
                objContents = this.fv_objUserParam;;
                console.dir(objContents);

                if (objContents!="")
                {
                    if(objContents.hasOwnProperty("contents"))
                    {
                        arrConts = objContents.contents;
                        if (arrConts.constructor === Array)
                        {
                            nCnt = arrConts.length;
                            if (nCnt>0)
                            {
                                objBottom.staText.set_visible(false);
                                objBottom.staValue.set_visible(false);
                                if (nCnt==1)
                                {
                                    this.fnNewSta(objBottom, "staText0", "sta_MF_TitleS06", arrConts[0].text, "", [5,0,null,nHet,5,null]);
                                    this.fnNewSta(objBottom, "staValue0", "sta_MF_NumDec", arrConts[0].value, "", [5,nHet,null,null,5,5]);
                                } else {
                                    sWid = nexacro.round((100/nCnt),0) + "%";
                                    for (var i=0; i<nCnt; i++)
                                    {
                                        if (i==0)
                                        {
                                            arrRectText = [5,0,sWid,nHet,null,null];
                                            arrRectvalue = [5,nHet,sWid,null,null,5];
                                        } else {
                                            arrRectText = ["staText"+(i-1)+":0",0,sWid,nHet,null,null];
                                            arrRectvalue = ["staValue"+(i-1)+":0",nHet,sWid,null,null,5];
                                        }
                                        this.fnNewSta(objBottom, "staText"+i, "sta_MF_TitleS06", arrConts[i].text, "", arrRectText);
                                        this.fnNewSta(objBottom, "staValue"+i, "sta_MF_NumDec", arrConts[i].value, "", arrRectvalue);
                                        if (i>0 && i<nCnt)
                                        {
                                            this.fnNewSta(objBottom, "staLine"+i, "sta_MF_Vline", arrConts[i].value, "", ["staText"+(i-1)+":0",0,1,null,null,5]);
                                        }
                                    }
                                }
                            } else {
                                throw "Contents count is zero.";
                            }
                        } else {
                            throw "Contents value is not Array.";
                        }
                    } else {
                        throw "Contents not found.";
                    }
                } else {
                    throw "dashparam object is null.";
                }
                console.dir(objContents);
            } catch (e) {
                trace(e);
                this.divBottom.set_height(0);
            }
            this.resetScroll();
        }

        this.fnSearch = function()
        {
        //     take.tranSelect(
        //         this,
        //         "dashSelect"+this.fv_sDashId,
        //         this.fv_objUserParam.mapperid,
        //         "",
        //         "dsList",
        //         "",
        //         function(sId, sErr, sMsg)
        //         {
                    var objMain, objDs;

                    objMain = this.divMain.form;
                    objDs = this.dsList;

                    objMain.staToday.set_text("기준 일시: " + objDs.getConstColumn("BASEDT"));
                    objMain.staUnit.set_text(objDs.getConstColumn("REFER"));
                    objMain.resetScroll();
        //         },
        //         false
        //     );
        }
        /**
         * fnNewSta : Static Component 동적 생성
         * @param  {String} sScope  생성 위치
         * @param  {String} sStaId  스테틱 아이디
         * @param  {String} sCss    CSS클래스
         * @param  {String} sStaTxt 스테틱 TEXT
         * @param  {String} sEvent  스테틱 이벤트
         * @param  {Array}  nRect   스테틱 생성 좌표
         * @return {Object} objSta  생성된 버튼 Object
         * @example this.fnNewSta(sParam, nParam);
         */
        this.fnNewSta = function(objScope, sStaId, sCss, sStaTxt, sEvent, arrRect)
        {
        	//스테틱 컴포넌트 생성
        	var objSta = new Static();
        	objSta.init(sStaId, arrRect[0], arrRect[1], arrRect[2], arrRect[3], arrRect[4], arrRect[5]);
        	objScope.addChild(sStaId, objSta);
            if (take.nvl(sEvent,"")!="") objSta.addEventHandler("onclick", sEvent, this); //스테틱에 부여할 이벤트
        	objSta.show();

        	//CSS 클래스가 있을경우만 세팅
            //trace("sCss --> " + sCss);
        	if (sCss!="") objSta.set_cssclass(sCss);

        	//버튼 text 및 기본 값 세팅
        	objSta.set_tooltiptext(sStaTxt);
        	objSta.set_tooltiptype("hover");
        	objSta.set_enable(true);
        	objSta.set_text(sStaTxt);
        	objSta.set_visible(true);

        	//보이기
        	return objSta;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comDashBar01_onload,this);
        };
        this.loadIncludeScript("comChartBasic.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
