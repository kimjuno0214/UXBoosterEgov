(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpTakeChart");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">목표</Col><Col id=\"AMT\">49919</Col><Col id=\"SELECT\">false</Col></Row><Row><Col id=\"NAME\">실적</Col><Col id=\"AMT\">49213</Col><Col id=\"SELECT\">true</Col></Row><Row><Col id=\"NAME\">전년</Col><Col id=\"AMT\">43535</Col><Col id=\"SELECT\">false</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"일\" type=\"STRING\" size=\"256\"/><Column id=\"이\" type=\"STRING\" size=\"256\"/><Column id=\"삼\" type=\"STRING\" size=\"256\"/><Column id=\"사\" type=\"STRING\" size=\"256\"/><Column id=\"오\" type=\"STRING\" size=\"256\"/><Column id=\"육\" type=\"STRING\" size=\"256\"/><Column id=\"칠\" type=\"STRING\" size=\"256\"/><Column id=\"팔\" type=\"STRING\" size=\"256\"/><Column id=\"구\" type=\"STRING\" size=\"256\"/><Column id=\"십\" type=\"STRING\" size=\"256\"/><Column id=\"SELECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"일\">2</Col><Col id=\"이\">4</Col><Col id=\"삼\">6</Col><Col id=\"SELECT\">false</Col><Col id=\"사\">8</Col><Col id=\"오\">10</Col><Col id=\"육\">12</Col><Col id=\"칠\">14</Col><Col id=\"팔\">16</Col><Col id=\"구\">18</Col><Col id=\"십\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnStepStart","52","74","93","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Start");
            this.addChild(obj.name, obj);

            obj = new Static("staStepBase","141","188","133","1",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#000000");
            this.addChild(obj.name, obj);

            obj = new Div("divStepChart","182",null,"50","119",null,"staStepBase:0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","0",null,null,"10","0","0",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("0");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta20","0",null,null,"10","0","11",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("1");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta40","0",null,null,"10","0","33",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("2");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta30","0",null,null,"10","0","22",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("3");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta50","0",null,null,"10","0","44",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("4");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta100","0",null,null,"10","0","99",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("5");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta90","0",null,null,"10","0","88",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("6");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta80","0",null,null,"10","0","77",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("7");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta70","0",null,null,"10","0","66",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("8");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Static("sta60","0",null,null,"10","0","55",null,null,null,null,this.divStepChart.form);
            obj.set_taborder("9");
            obj.set_background("indigo");
            this.divStepChart.addChild(obj.name, obj);

            obj = new Button("btnStepEnd","52","117","93","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Stop");
            this.addChild(obj.name, obj);

            obj = new Static("staStepValue","182",null,"50","20",null,"divStepChart:0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stStepTitle","18","3","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("- Step Chart");
            this.addChild(obj.name, obj);

            obj = new Static("staCol3DTitle","390","4","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("- Column 3D Chart");
            this.addChild(obj.name, obj);

            obj = new Button("btnCol3DEnd","420","117","93","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Stop");
            this.addChild(obj.name, obj);

            obj = new Button("btnCol3DStart","420","74","93","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Start");
            this.addChild(obj.name, obj);

            obj = new Static("staCol3DBase","532","208","90","1",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("staCol3DChart","562",null,"40","150",null,"staCol3DBase:0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("url(\'theme::UXBooster/images/img_Col3DFull.png\') no-repeat");
            this.addChild(obj.name, obj);

            obj = new Static("staCol3DValue","552",null,"50","20",null,"staCol3DChart:0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStepChart.form
            obj = new Layout("default","",0,0,this.divStepChart.form,function(p){});
            this.divStepChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpTakeChart.xfdl", function() {

        this.smpStepChart_ontimer = function(obj,e)
        {
            var nRandom, nSpace, nWid;

            nRandom = Math.round(Math.random()*100);

            if (e.timerid==1111) //Step Chart
            {
                nSpace = Math.round(nRandom/10);

                nWid = nRandom+nSpace;

                this.staStepValue.set_text("");
                this.staStepValue.set_text(nRandom);

                this.divStepChart.set_height(nWid);

            } else if (e.timerid==2222) {

                nSpace = 10;
                nWid = Math.round(nRandom/100*(150-nSpace))+nSpace;

                this.staCol3DValue.set_text("");
                this.staCol3DValue.set_text(nRandom);

                this.staCol3DChart.set_height(nWid);
            }

            this.resetScroll();
        };

        this.btnStepStart_onclick = function(obj,e)
        {
        	this.setTimer(1111,500);
        };

        this.btnStepEnd_onclick = function(obj,e)
        {
        	this.killTimer(1111);
        };

        this.btnCol3DStart_onclick = function(obj,e)
        {
        	this.setTimer(2222,500);
        };

        this.btnCol3DEnd_onclick = function(obj,e)
        {
        	this.killTimer(2222);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.smpStepChart_ontimer,this);
            this.btnStepStart.addEventHandler("onclick",this.btnStepStart_onclick,this);
            this.btnStepEnd.addEventHandler("onclick",this.btnStepEnd_onclick,this);
            this.btnCol3DEnd.addEventHandler("onclick",this.btnCol3DEnd_onclick,this);
            this.btnCol3DStart.addEventHandler("onclick",this.btnCol3DStart_onclick,this);
        };
        this.loadIncludeScript("smpTakeChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
