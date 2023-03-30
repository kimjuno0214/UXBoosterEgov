(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpDashCreate");
            this.set_titletext("대시보드 동적 생성기");
            this.set_background("");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,685);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDash", this);
            obj._setContents("<ColumnInfo><Column id=\"dashid\" type=\"STRING\" size=\"256\"/><Column id=\"dashnm\" type=\"STRING\" size=\"256\"/><Column id=\"dashtype\" type=\"STRING\" size=\"256\"/><Column id=\"dashurl\" type=\"STRING\" size=\"256\"/><Column id=\"progid\" type=\"STRING\" size=\"256\"/><Column id=\"helpurl\" type=\"STRING\" size=\"256\"/><Column id=\"reload\" type=\"STRING\" size=\"256\"/><Column id=\"refer\" type=\"STRING\" size=\"256\"/><Column id=\"basedt\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"options\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dashid\">D0000000001</Col><Col id=\"dashnm\">매출현황-1</Col><Col id=\"dashtype\">02</Col><Col id=\"dashurl\">frm::com/comChartBasic.xfdl</Col><Col id=\"progid\">P0000000001</Col><Col id=\"helpurl\">http://www.daum.net/</Col><Col id=\"reload\">1000</Col><Col id=\"refer\">단위 : 백만원</Col><Col id=\"basedt\">2020.01.30 10:27</Col><Col id=\"contents\">{contents:[{text:&quot;달성률(목표)&quot;,value:&quot;98%&quot;},{text:&quot;신장률(전년)&quot;,value:&quot;113%&quot;}]}</Col><Col id=\"options\">{options:{chart:&quot;&quot;,contents:{board:&quot;&quot;,categoryaxis:&quot;&quot;,valueaxes:&quot;&quot;,seriesset:&quot;&quot;,tooltip:&quot;&quot;}}}</Col></Row><Row><Col id=\"dashid\">D0000000002</Col><Col id=\"dashnm\">매출현황-2</Col><Col id=\"dashtype\">02</Col><Col id=\"dashurl\">frm::com/comChartBasic.xfdl</Col><Col id=\"progid\">P0000000001</Col><Col id=\"helpurl\">http://52.79.243.187/redmine/</Col><Col id=\"reload\">1000</Col><Col id=\"refer\">단위 : 원</Col><Col id=\"basedt\">2020.01.29 00:00</Col><Col id=\"contents\">{contents:[{text:&quot;실적&quot;,value:&quot;49,213&quot;}]}</Col><Col id=\"options\">{options:{chart:&quot;&quot;,contents:{board:&quot;&quot;,categoryaxis:&quot;&quot;,valueaxes:&quot;&quot;,seriesset:&quot;&quot;,tooltip:&quot;&quot;}}}</Col></Row><Row><Col id=\"dashid\">D0000000003</Col><Col id=\"dashnm\">매출현황-3</Col><Col id=\"dashtype\">02</Col><Col id=\"dashurl\">frm::com/comChartBasic.xfdl</Col><Col id=\"progid\">P0000000001</Col><Col id=\"helpurl\">http://52.79.243.187:8280/NexaBooster/</Col><Col id=\"reload\">1000</Col><Col id=\"refer\">참조 : 한국은행 고시</Col><Col id=\"basedt\">2020.01.01 12:01</Col><Col id=\"contents\"/><Col id=\"options\">{options:{chart:&quot;&quot;,contents:{board:&quot;&quot;,categoryaxis:&quot;&quot;,valueaxes:&quot;&quot;,seriesset:&quot;&quot;,tooltip:&quot;&quot;}}}</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDashType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"data\">Form</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"data\">Web</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"data\">Bar chart</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"data\">Static chart</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"data\">Line chart</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"data\">Bar/Line multi chart</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"data\">Static/Line multi chart</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"data\">Pie chart</Col></Row><Row><Col id=\"data\">Donut chart</Col><Col id=\"code\">08</Col></Row><Row><Col id=\"data\">Radar chart</Col><Col id=\"code\">09</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ListView("ListView00","10","10","400",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsDash");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"450\"><Cell id=\"Cell00\" left=\"10\" top=\"5\" width=\"120\" height=\"24\" text=\"대시보드아이디\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell01\" left=\"135\" top=\"5\" width=\"243\" height=\"24\" text=\"bind:dashid\" padding=\"0px\"/><Cell id=\"Cell02\" left=\"10\" top=\"34\" width=\"120\" height=\"24\" text=\"대시보드명\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell03\" left=\"135\" top=\"34\" width=\"243\" height=\"24\" text=\"bind:dashnm\" edittype=\"text\" padding=\"0px\"/><Cell id=\"Cell04\" left=\"10\" top=\"63\" width=\"120\" height=\"24\" text=\"대시보드타입\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell05\" left=\"135\" top=\"63\" width=\"243\" height=\"24\" text=\"bind:dashtype\" edittype=\"combo\" combodataset=\"dsDashType\" combocodecol=\"code\" combodatacol=\"data\" padding=\"0px\"/><Cell id=\"Cell06\" left=\"10\" top=\"92\" width=\"120\" height=\"24\" text=\"대시보드URL\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell07\" left=\"135\" top=\"92\" width=\"243\" height=\"24\" text=\"bind:dashurl\" edittype=\"expr:dashtype==&quot;00&quot; || dashtype==&quot;01&quot;?&quot;text&quot;:&quot;none&quot;\" padding=\"0px\"/><Cell id=\"Cell08\" left=\"10\" top=\"121\" width=\"120\" height=\"24\" text=\"상세프로그램\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell09\" left=\"135\" top=\"121\" width=\"243\" height=\"24\" text=\"bind:progid\" edittype=\"text\" padding=\"0px\"/><Cell id=\"Cell10\" left=\"10\" top=\"150\" width=\"120\" height=\"24\" text=\"도움말URL\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell11\" left=\"135\" top=\"150\" width=\"243\" height=\"24\" text=\"bind:helpurl\" edittype=\"text\" padding=\"0px\"/><Cell id=\"Cell12\" left=\"10\" top=\"179\" width=\"120\" height=\"24\" text=\"재조회주기\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell13\" left=\"135\" top=\"179\" width=\"200\" height=\"24\" text=\"bind:reload\" edittype=\"text\" padding=\"0px\"/><Cell id=\"Cell14\" left=\"10\" top=\"208\" width=\"120\" height=\"24\" text=\"참조/단위\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell15\" left=\"135\" top=\"208\" width=\"243\" height=\"24\" text=\"bind:refer\" edittype=\"text\" padding=\"0px\"/><Cell id=\"Cell16\" left=\"10\" top=\"237\" width=\"120\" height=\"24\" text=\"조회일시\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell17\" left=\"135\" top=\"237\" width=\"243\" height=\"24\" text=\"bind:basedt\" edittype=\"text\" padding=\"0px\"/><Cell id=\"Cell18\" left=\"10\" top=\"266\" width=\"120\" height=\"84\" text=\"컨텐츠\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell19\" left=\"135\" top=\"266\" width=\"243\" height=\"84\" text=\"bind:contents\" edittype=\"textarea\" verticalAlign=\"top\" padding=\"0px\" wordWrap=\"char\"/><Cell id=\"Cell20\" left=\"10\" top=\"355\" width=\"120\" height=\"84\" text=\"옵션\" border=\"0px solid #dbdee2\" font=\"bold 10pt/normal &quot;Malgun Gothic&quot;\"/><Cell id=\"Cell21\" left=\"135\" top=\"355\" width=\"243\" height=\"84\" text=\"bind:options\" edittype=\"textarea\" verticalAlign=\"top\" padding=\"0px\" wordWrap=\"char\"/><Cell id=\"Cell22\" left=\"338\" top=\"179\" width=\"40\" height=\"24\" text=\"m/s\" border=\"0px solid #dbdee2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtW","530","10","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("295");
            obj.set_textAlign("center");
            obj.set_text("295");
            this.addChild(obj.name, obj);

            obj = new Edit("edtH","630","10","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("320");
            obj.set_textAlign("center");
            obj.set_text("320");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","420","10","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화면 사이즈(W*H)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","610","10","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("X");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Noto Sans CJK KR\",\"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Div("divBase","420","45",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("whitesmoke");
            this.addChild(obj.name, obj);

            obj = new Button("btnW","295","0","5","320",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("1");
            obj.set_cursor("w-resize");
            obj.set_background("black");
            this.divBase.addChild(obj.name, obj);

            obj = new Button("btnH","0","320",null,"5","btnW:0",null,null,null,null,null,this.divBase.form);
            obj.set_taborder("2");
            obj.set_cursor("n-resize");
            obj.set_background("black");
            this.divBase.addChild(obj.name, obj);

            obj = new Div("divDashView","0","0",null,null,"btnW:0","btnH:0",null,null,null,null,this.divBase.form);
            obj.set_taborder("0");
            obj.set_text("대시보드 미리보기");
            obj.set_border("1px solid");
            this.divBase.addChild(obj.name, obj);

            obj = new Button("btnWH","btnH:0","btnW:0","5","5",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("3");
            obj.set_cursor("move");
            obj.set_background("green");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("Static00_01","720","10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Drag 또는 사이즈를 입력해서 리사이즈 해보세요.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBase.form.divDashView
            obj = new Layout("default","",0,0,this.divBase.form.divDashView.form,function(p){});
            this.divBase.form.divDashView.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBase.form
            obj = new Layout("default","",0,0,this.divBase.form,function(p){});
            this.divBase.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,685,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpDashCreate.xfdl", function() {

        this.divBase_btn_ondrag = function(obj,e)
        {
        	var sGbn = obj.name.substr(3);
            e.set_userdata(sGbn);
            return true;
        };

        this.divBase_ondragmove = function(obj,e)
        {
        	var sGbn;
            var objBase;

            sGbn = e.userdata;

            objBase = this.divBase.form;

            if (sGbn=="W")
            {
                objBase.btnW.set_left(e.clientx);
            } else if (sGbn=="H") {
                objBase.btnH.set_top(e.clienty);
                objBase.btnW.set_height(e.clienty);
            } else {
                objBase.btnW.set_left(e.clientx);
                objBase.btnH.set_top(e.clienty);
                objBase.btnW.set_height(e.clienty);
            }

            objBase.resetScroll();

            objDashView = this.divBase.form.divDashView;
            this.edtW.set_value(objDashView.getOffsetWidth());
            this.edtH.set_value(objDashView.getOffsetHeight());
        };

        this.edt_onkillfocus = function(obj,e)
        {
        	this.fnDashViewResize();
        };

        this.edt_onkeydown = function(obj,e)
        {
            if (e.keycode==13) this.fnDashViewResize();
        };

        this.fnDashViewResize = function()
        {
            var objDiv, objBase;
            var nW, nH, nMaxW, nMaxH;

            objDiv = this.divBase;
            objBase = objDiv.form;

            nW = nexacro.toNumber(this.edtW.value);
            nH = nexacro.toNumber(this.edtH.value);
            nMaxW = objDiv.getOffsetWidth()-nexacro.toNumber(objBase.btnW.width);
            nMaxH =objDiv.getOffsetHeight()-nexacro.toNumber(objBase.btnH.height);

            if (nW>nMaxW || nW<1)
            {
                alert("현재 가능한 Width는 1 ~ "+ nMaxW+" 입니다.");
                nW = nMaxW;
                this.edtW.set_value(nW);
            }

            objBase.btnW.set_left(nW);

            if (nH>nMaxH || nH<1)
            {
                alert("현재 가능한 Height는 1 ~ "+ nMaxH+" 입니다.");
                nH = nMaxH;
                this.edtH.set_value(nH);
            }

             objBase.btnH.set_top(nH);
             objBase.btnW.set_height(nH);

            objBase.resetScroll();
        }

        this.dsDash_onrowposchanged = function(obj,e)
        {
            var objDiv = this.divBase.form.divDashView;
            var sUrl = obj.getColumn(e.newrow, "dashurl");

        	objDiv.set_url("");
            objDiv.set_url(sUrl);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.edtW.addEventHandler("onkillfocus",this.edt_onkillfocus,this);
            this.edtW.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.edtH.addEventHandler("onkeydown",this.edt_onkeydown,this);
            this.edtH.addEventHandler("onkillfocus",this.edt_onkillfocus,this);
            this.divBase.addEventHandler("ondragmove",this.divBase_ondragmove,this);
            this.divBase.form.btnW.addEventHandler("ondrag",this.divBase_btn_ondrag,this);
            this.divBase.form.btnH.addEventHandler("ondrag",this.divBase_btn_ondrag,this);
            this.divBase.form.btnWH.addEventHandler("ondrag",this.divBase_btn_ondrag,this);
            this.dsDash.addEventHandler("onrowposchanged",this.dsDash_onrowposchanged,this);
        };
        this.loadIncludeScript("smpDashCreate.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
