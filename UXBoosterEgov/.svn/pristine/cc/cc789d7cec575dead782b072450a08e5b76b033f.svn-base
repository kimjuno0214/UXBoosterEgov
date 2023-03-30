(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpJquery");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","15","10","105","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","130","10","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","250","10","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","185","65","835","415",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","40","69","107","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","23","152","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","46","231","119","94",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("naver news");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("smpJquery.xfdl", function() {

        this.smpJquery_onload = function(obj,e)
        {
            try {
                trace("jquery version --> " +  $.fn.jquery);
            } catch(e) {
                take.loadJs(this, "jquery", "./_extlib_/Extend/jquery-3.5.1.min.js");
            }
        };

        this.Button00_onclick = function(obj,e)
        {
        	$.ajax({
                //url: 'https://maps.googleapis.com/maps/api/timezone/jsonp?location=37.550216,126.997104&timestamp=1348000000&key=AIzaSyAaLPSsAljZ2VQD7W7KJHZW__Tikb_K0WY', //구글타임존
                url: 'http://ecos.bok.or.kr/api/StatisticSearch/7HDDAF96PICI5906W3LU/jsonp/kr/1/1/036Y001/DD/20200910/20200910/0000001',
                dataType : 'jsonp',
                jsonp : 'callback',
                success: function(data) {
                            console.log('성공 - ', data);
                        },
                error: function(xhr) {
                            console.log('실패 - ', xhr);
                        }
            });

        };

        this.Button01_onclick = function(obj,e)
        {
        	$.ajax({
                url: 'http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?serviceKey=9SdSHJyYxrS8XkdyziiShvJtDGuPyje8X5kmH2NxN1S8K9kXxlNIH%2BnJFmKDxc%2BoIpVYABHxaNDEOTzIJ0An4A%3D%3D&numOfRows=10&pageNo=1&base_date=20200914&base_time=1500&nx=55&ny=127&dataType=JSON',
                type: 'POST',
                crossDomain: true,
                data: '',
                dataType: 'jsonp',
                jsonp : 'callback',
                success: function(data) {
                            console.log('성공 - ', data);
                        }
                        ,
                error: function(xhr) {
                            console.log('실패 - ', xhr);
                        }
            });
        };


        this.Button02_onclick = function(obj,e)
        {
        	var settings = {
        	"async": true,
        	"crossDomain": true,
        	"url": "https://world-clock.p.rapidapi.com/json/est/now",
        	"method": "GET",
        	"headers": {
        		"x-rapidapi-host": "world-clock.p.rapidapi.com",
        		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
        	}
        }

        $.ajax(settings).done(function (response) {
        	console.log(response);
        });
        };

        this.Button03_onclick = function(obj,e)
        {
            var sEleId;
        	//sEleId = nexacro.replaceAll("#"+this.Div00._unique_id, ".", "\\.")+"\\:input";
            sEleId = nexacro.replaceAll("#"+this.Div00._unique_id+".form", ".", "\\.");
            trace(sEleId);
            console.dir($(sEleId));

            $(sEleId).promise().done(
                function() {
                    console.log("Finished..!!");
                });

            //this.Div00.set_url("guide::form/smpForm01.xfdl");


        };

        this.Button04_onclick = function(obj,e)
        {
        	this.Div00.set_url("guide::form/smpForm01.xfdl");
        };

        this.Button05_onclick = function(obj,e)
        {
        	var sSearchTxt = encodeURIComponent("크린랲", "UTF-8"); //검색어";

            trace("sSearchTxt --> " + sSearchTxt);

            var sUrl = "https://openapi.naver.com/v1/search/news.json?query="+ sSearchTxt + "&display=10&start=1&sort=date"; // 뉴스의 json 결과

            trace("sUrl --> "+ sUrl);

            $.ajax({
                url: sUrl,
                type: "POST",
                crossDomain: true,
                data: "",
                dataType: "jsonp",
                jsonp : "callback",
                success: function(data) {
                            console.log("성공 - ", data);
                        }
                        ,
                error: function(xhr) {
                            console.log("실패 - ", xhr);
                        }
            });
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpJquery_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };
        this.loadIncludeScript("smpJquery.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
