(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpChartTest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">서울</Col><Col id=\"DATA\">100</Col></Row><Row><Col id=\"NAME\">경기</Col><Col id=\"DATA\">90</Col></Row><Row><Col id=\"NAME\">인천</Col><Col id=\"DATA\">30</Col></Row><Row><Col id=\"NAME\">강원</Col><Col id=\"DATA\">40</Col></Row><Row><Col id=\"NAME\">전라</Col><Col id=\"DATA\">80</Col></Row><Row><Col id=\"NAME\">경상</Col><Col id=\"DATA\">50</Col></Row><Row><Col id=\"NAME\">충청</Col><Col id=\"DATA\">50</Col></Row><Row><Col id=\"NAME\">제주</Col><Col id=\"DATA\">40</Col></Row><Row><Col id=\"NAME\">부산</Col><Col id=\"DATA\">60</Col></Row><Row><Col id=\"NAME\">대전</Col><Col id=\"DATA\">50</Col></Row><Row><Col id=\"NAME\">광주</Col><Col id=\"DATA\">70</Col></Row><Row><Col id=\"NAME\">대구</Col><Col id=\"DATA\">50</Col></Row><Row><Col id=\"NAME\">울산</Col><Col id=\"DATA\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divChart","21","26","500","500",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreate","690","35","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

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
        this.registerScript("smpChartTest.xfdl", function() {

        this.btnCreate_onclick = function(obj,e)
        {
        	var objDs, objDiv;
            var nCnt, nRow, nSum, nDiv, nPx, nData;
            var arrRect;

            objDiv = this.divChart;
            objDs = this.dsList;

            nDiv = objDiv.getOffsetWidth() * objDiv.getOffsetHeight();
            nSum = objDs.getSum("DATA");
            nPx = nDiv/nSum;

            nCnt = objDs.rowcount;

            objDs.set_keystring("DATA");
            arrRect = [0,0,0,0,0,0];

            for (var i=0;i<=nCnt;i++)
            {
                nData = parseInt(objDs.getColumn(i,"DATA")) / 2;

                arrRect[2] = nData*nPx;
                arrRect[3] = nData*nPx;



                arrRect[0] += arrRect[2];
                arrRect[1] += arrRect[3];
            }
        };

        this.fnNewStatic = function()
        {

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnCreate.addEventHandler("onclick",this.btnCreate_onclick,this);
        };
        this.loadIncludeScript("smpChartTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
