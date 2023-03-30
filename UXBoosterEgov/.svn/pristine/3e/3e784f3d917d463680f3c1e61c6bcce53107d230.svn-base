(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("genForm");
            this.set_titletext("MP-NP XML 변환 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("taMyDsInfo","20","27","620","161",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("taToboDsInfo","20","230","620","161",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","-2","170","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Miplatform");
            obj.set_cssclass("sta_WF_detailL");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","20","201","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("nexacro");
            obj.set_cssclass("sta_WF_detailL");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"27","103","50","517",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("변환");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleDsConv.xfdl", function() {
        this.Button03_onclick = function(obj,e)
        {
            var arrVal = this.taMyDsInfo.value;
            var vDsNm, vColNm, vType, vSize, arrSize = "" , arrColNm = "", arrCol="", arrType="";

            arrVal = arrVal.split("\n");

            for(var i =0; i < arrVal.length; i++ ){

                if( arrVal[i].indexOf("<Dataset") > -1  ){
                    vDsNm = arrVal[i].substr(arrVal[i].indexOf("Id=") + 4, arrVal[i].length );
                    vDsNm = vDsNm.substr( 0 , vDsNm.indexOf('"') );
                }

                if( arrVal[i].indexOf("<colinfo id=") > -1  ){
                    vColNm = arrVal[i].substr(arrVal[i].indexOf("<colinfo id=") + 13, arrVal[i].length );
                    arrColNm += vColNm.substr( 0 , vColNm.indexOf('"') ) +",";
                }
                if( arrVal[i].indexOf(" type=") > -1  ){
                    vType = arrVal[i].substr(arrVal[i].indexOf(" type=") + 7, arrVal[i].length );
                    arrType += vType.substr( 0 , vType.indexOf('"') ) +",";
                }

                if( arrVal[i].indexOf(" size=") > -1  ){
                    vSize = arrVal[i].substr(arrVal[i].indexOf(" size=") + 7, arrVal[i].length );
                    arrSize += vSize.substr( 0 , vSize.indexOf('"') ) +",";
                }

            }
            this.removeChild( vDsNm );

            var objDs = new Dataset;
            var vDsScript = "", arrCols = "";
            arrCols = arrColNm.split(",");
            arrType = arrType.split(",");
            arrSize = arrSize.split(",");
            for(var i =0; i < arrCols.length-1; i++ ){
                arrCol = arrCols[i];
                trace(" arrCol  : " + arrCol);
                trace(" arrType : " + arrType[i]);
                trace(" arrSize : " + arrSize[i]);
                objDs.addColumn(arrCol.toUpperCase()==="DATA" ? "NAME" : arrCol.toUpperCase(), arrType[i] == "DECIMAL" ? "BIGDECIMAL" : arrType[i], arrType[i] == "STRING" ? "255" : arrSize[i]);

            }


            //arrCols = arrColNm.split(",");
            var nLength =0, nRow=0;
            for(var i =0; i < arrVal.length-1; i++ ){
                if( arrVal[i].indexOf("<record>") > -1  ){
                    nRow = objDs.addRow();
                }
                for(var j =0; j < arrCols.length-1; j++ ){
                    arrCol = arrCols[j];
                    //trace(" arrCol  : " + arrCol);
                    if( arrVal[i].indexOf(arrCol+">") > -1  ){
                        nLength = arrVal[i].indexOf(">") + 1 ;
                        nLength = nexacro.toNumber(arrVal[i].indexOf("</") ) - nLength;
                        trace(arrCol + " :: " + arrVal[i].substr(arrVal[i].indexOf(">") + 1, nLength ));
                        objDs.setColumn(nRow, arrCol.toUpperCase()==="DATA" ? "NAME" : arrCol.toUpperCase(), arrVal[i].substr(arrVal[i].indexOf(">") + 1, nLength ));
                    }
                }

            }

            this.addChild(vDsNm, objDs);

            vDsScript = objDs.saveXML();

            vDsScript = nexacro.replaceAll( vDsScript, "<Rows>", "" );
            vDsScript = nexacro.replaceAll( vDsScript, "</Rows>", "" );

            this.taToboDsInfo.set_value(vDsScript);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("sampleDsConv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
