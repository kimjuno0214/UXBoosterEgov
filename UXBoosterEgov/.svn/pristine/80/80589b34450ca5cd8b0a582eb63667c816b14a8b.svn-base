(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpGoogleChart");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">Work</Col><Col id=\"VALUE\">10</Col></Row><Row><Col id=\"NAME\">Eat</Col><Col id=\"VALUE\">20</Col></Row><Row><Col id=\"NAME\">Commute</Col><Col id=\"VALUE\">30</Col></Row><Row><Col id=\"NAME\">Watch TV</Col><Col id=\"VALUE\">40</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnChart","11","10","119","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("데이터변경");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wbChart","10","76",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleGoogleChart.xfdl", function() {
        this.fv_bWebOnload = false;

        this.smpGoogleChart_onload = function(obj,e)
        {
            var sBaseUrl = take.getSvcUrl();

            this.wbChart.set_url(sBaseUrl + "_webkit/google/googleChart.html");
            this.setTimer(1,100);
        };

        this.btnChart_onclick = function(obj,e)
        {
            this.fnChart(this.dsData);
        };

        this.wbChart_onloadcompleted = function(obj,e)
        {
        	if (e.url.indexOf("googleChart.html") != -1)
        	{
        		this.fv_bWebOnload = true;
        	}
        };

        this.wbChart_onusernotify = function(obj,e)
        {
        	var sUserData = e.userdata;

            //넘어온 데이터가 detail인 경우
        	if (sUserData.indexOf("CallBack")>=0)
            {
                var sRtn = sUserData.substr(9);
                trace("Return --> " + sRtn);
                if(sRtn.substr(0,4)=="(-1)")
                {
                    trace("Google chart loading fail : " + sRtn);
                    return;
                } else if (sRtn.substr(0,4)=="(00)"){
                    trace("Google chart loading success");
                }
            }
        };

        this.smpGoogleChart_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                if (this.fv_bWebOnload == true)
        		{
                    this.killTimer(1);

                    this.fnChart(this.dsData);
        		}
        	}
        };

        this.fnChart = function(objDs)
        {
            var arrCol, arrData;
            var objOption;
            var nSelIdx;

            arrCol = [["string","NAME"], ["number","VALUE"]]; //값은 필히 number여야함
        	//arrData = [["Work", 10], ["Eat", 20], ["Commute", 30], ["Watch TV", 40]];
            //nSelIdx = 3;

            arrData = this.fnGetArrayDs(objDs, "NAME", "VALUE");
            objOption = {title:"Title Change", pieHole: 0.4}; // title, ect option

            nSelIdx = objDs.findRow("VALUE", objDs.getMax("VALUE"));

        //     trace("arrData --> " + arrData);
        //     trace("nSelIdx --> " + nSelIdx);
        	this.wbChart.getProperty("window").callMethod("fnCreateChart", arrCol, arrData, objOption, nSelIdx);
        }

        this.fnGetArrayDs = function(objDs, sKeyId, sValId)
        {
            var arrRtn = new Array();
            var nCnt, nVal;
            var sKey;

            nCnt = objDs.rowcount;

            for (var i=0;i<nCnt;i++)
            {
                sKey = objDs.getColumn(i, sKeyId);
                nVal = nexacro.toNumber(objDs.getColumn(i, sValId));
                arrRtn.push([sKey, nVal]);
            }

            return arrRtn;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpGoogleChart_onload,this);
            this.addEventHandler("ontimer",this.smpGoogleChart_ontimer,this);
            this.btnChart.addEventHandler("onclick",this.btnChart_onclick,this);
            this.wbChart.addEventHandler("onloadcompleted",this.wbChart_onloadcompleted,this);
            this.wbChart.addEventHandler("onusernotify",this.wbChart_onusernotify,this);
        };
        this.loadIncludeScript("sampleGoogleChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
