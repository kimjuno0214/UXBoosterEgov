(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsWeather", this);
            obj._setContents("<ColumnInfo><Column id=\"baseDate\" type=\"STRING\" size=\"256\"/><Column id=\"baseTime\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"fcstDate\" type=\"STRING\" size=\"256\"/><Column id=\"fcstTime\" type=\"STRING\" size=\"256\"/><Column id=\"fcstValue\" type=\"STRING\" size=\"256\"/><Column id=\"nx\" type=\"STRING\" size=\"256\"/><Column id=\"ny\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurWeather", this);
            obj._setContents("<ColumnInfo><Column id=\"baseDate\" type=\"STRING\" size=\"256\"/><Column id=\"baseTime\" type=\"STRING\" size=\"256\"/><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"nx\" type=\"STRING\" size=\"256\"/><Column id=\"ny\" type=\"STRING\" size=\"256\"/><Column id=\"obsrValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","10","6","228","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("dsWeather");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","60",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsWeather");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"baseDate\"/><Cell col=\"1\" text=\"baseTime\"/><Cell col=\"2\" text=\"category\"/><Cell col=\"3\" text=\"fcstDate\"/><Cell col=\"4\" text=\"fcstTime\"/><Cell col=\"5\" text=\"fcstValue\"/><Cell col=\"6\" text=\"nx\"/><Cell col=\"7\" text=\"ny\"/></Band><Band id=\"body\"><Cell text=\"bind:baseDate\"/><Cell col=\"1\" text=\"bind:baseTime\"/><Cell col=\"2\" text=\"bind:category\"/><Cell col=\"3\" text=\"bind:fcstDate\"/><Cell col=\"4\" text=\"bind:fcstTime\"/><Cell col=\"5\" text=\"bind:fcstValue\"/><Cell col=\"6\" text=\"bind:nx\"/><Cell col=\"7\" text=\"bind:ny\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","246","6","228","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("dsCurrentWeather");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","552","11","117","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
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
        this.registerScript("smpApiTest.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.dsWeather.clearData();

            var sUrl   = "SVC_LOC::dash/weatherGetInfo.do",     			//서비스 URL
                sInDs  = "",      												//데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "dsWeather=dsWeather",     							//데이터를 받아올 데이터셋 지정
                sParam = "sX='61' sY='125'";   //파라메터 사용 안 할 경우

            takeit.transaction(this, "WEATHERSEARCH", sUrl, sInDs, sOutDs, sParam, "fnCallBack", false);
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.dsCurWeather.clearData();

            var sUrl   = "SVC_LOC::dash/weatherGetCurInfo.do",     			//서비스 URL
                sInDs  = "",      												//데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "dsCurWeather=dsCurWeather",     							//데이터를 받아올 데이터셋 지정
                sParam = "sX='61' sY='125' sTime='0500'";   //파라메터 사용 안 할 경우
            takeit.transaction(this, "CURRENTWEATHERSEARCH", sUrl, sInDs, sOutDs, sParam, "fnCallBack", false);
        };

        this.fnCallBack = function(sId, nErr, sMsg)
        {
            if (sId=="WEATHERSEARCH")
            {
                this.Grid00.setBindDataset(this.dsWeather);
                this.Grid00.createFormat();
                //trace(this.dsWeather.saveXML());
            } else if (sId=="CURRENTWEATHERSEARCH") {
                this.Grid00.setBindDataset(this.dsCurWeather);
                this.Grid00.createFormat();
                trace(this.dsCurWeather.saveXML());
            }
        }




        this.Button02_onclick = function(obj,e)
        {
        	//this.dsWeather.filter("fcstDate=='20190306' && (category=='TMN' || category=='TMX')");
            this.dsWeather.filter("category=='TMN' || category=='TMX'");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("smpApiTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
