(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleOZReport");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEstimate2", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_VEN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RETAILPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"RETAILSUMPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"WAGEPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_GBN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CUST_VEN_NAME\">4000</Col><Col id=\"ITEMNAME\">타이어 교체2046-1</Col><Col id=\"ITEMQTY\">4</Col><Col id=\"PROD_GBN_NM\">A</Col><Col id=\"RETAILPRICE\">11000</Col><Col id=\"RETAILSUMPRICE\">44000</Col><Col id=\"RNUM\">1</Col><Col id=\"UNIT\">EA</Col><Col id=\"WAGEPRICE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsShopInfo2", this);
            obj._setContents("<ColumnInfo><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"BIZNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPRESENTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"TEL\" type=\"STRING\" size=\"256\"/><Column id=\"FAX\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"BIZTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZCOND\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"DAY\" type=\"STRING\" size=\"256\"/><Column id=\"OKNO\" type=\"STRING\" size=\"256\"/><Column id=\"CARNO\" type=\"STRING\" size=\"256\"/><Column id=\"CARNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTAMT\" type=\"STRING\" size=\"256\"/><Column id=\"ESTTAX\" type=\"STRING\" size=\"256\"/><Column id=\"ESTTOTALAMT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_URL\" type=\"STRING\" size=\"256\"/><Column id=\"TUNEUP_MGR\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTR3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ADDR\">서울 강남구 역삼동  </Col><Col id=\"ADDRESS\">대구 서구 평리동 721-6</Col><Col id=\"ATTR1\"/><Col id=\"ATTR2\">CARSERIALNO</Col><Col id=\"ATTR3\">C</Col><Col id=\"BIZCOND\">도.소매</Col><Col id=\"BIZNAME\">티스테이션대구서구점</Col><Col id=\"BIZNO\">503-47-67922</Col><Col id=\"BIZTYPE\">타이어외 경정비</Col><Col id=\"CARNAME\">아반떼 MD</Col><Col id=\"CARNO\">서울2고5744</Col><Col id=\"CREDATE\">2013-02-20</Col><Col id=\"CUSTNAME\">김형래2</Col><Col id=\"DAY\">22</Col><Col id=\"DISTANCE\">10000</Col><Col id=\"ESTAMT\">290909</Col><Col id=\"ESTDATE\">2013-03-22</Col><Col id=\"ESTTAX\">29090</Col><Col id=\"ESTTOTALAMT\">320000</Col><Col id=\"FAX\">053-559-6950</Col><Col id=\"MOBILE\">010-9217-9722</Col><Col id=\"MONTH\">03</Col><Col id=\"OKNO\">111-222-333</Col><Col id=\"PRINT_DATE\">2013년 03월 22일</Col><Col id=\"REPRESENTIVE\">최종은2</Col><Col id=\"SIGN_URL\">cm/1351931794547_07776_0</Col><Col id=\"TEL\">053-559-6955</Col><Col id=\"TUNEUP_MGR\"/><Col id=\"YEAR\">2013</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_VEN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RETAILPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"RETAILSUMPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"WAGEPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_GBN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RNUM\">1</Col><Col id=\"ITEMNAME\">타이어 교체2046</Col><Col id=\"UNIT\">EA</Col><Col id=\"CUST_VEN_NAME\">4000</Col><Col id=\"ITEMQTY\">4</Col><Col id=\"RETAILPRICE\">11000</Col><Col id=\"RETAILSUMPRICE\">44000</Col><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\">A</Col></Row><Row><Col id=\"RNUM\">2</Col><Col id=\"ITEMNAME\">타이어교체7399</Col><Col id=\"UNIT\">EA</Col><Col id=\"CUST_VEN_NAME\">4000</Col><Col id=\"ITEMQTY\">4</Col><Col id=\"RETAILPRICE\">11000</Col><Col id=\"RETAILSUMPRICE\">44000</Col><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\">A</Col></Row><Row><Col id=\"RNUM\">3</Col><Col id=\"ITEMNAME\">타이어교체2171</Col><Col id=\"UNIT\">EA</Col><Col id=\"CUST_VEN_NAME\">2000</Col><Col id=\"ITEMQTY\">4</Col><Col id=\"RETAILPRICE\">5500</Col><Col id=\"RETAILSUMPRICE\">22000</Col><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\">A</Col></Row><Row><Col id=\"RNUM\">4</Col><Col id=\"ITEMNAME\">엔진오일 교환2450</Col><Col id=\"UNIT\">EA</Col><Col id=\"CUST_VEN_NAME\">3636</Col><Col id=\"ITEMQTY\">4</Col><Col id=\"RETAILPRICE\">40000</Col><Col id=\"RETAILSUMPRICE\">40000</Col><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\">A</Col></Row><Row><Col id=\"RNUM\">5</Col><Col id=\"ITEMNAME\">타이어교체2450</Col><Col id=\"UNIT\">EA</Col><Col id=\"CUST_VEN_NAME\">2000</Col><Col id=\"ITEMQTY\">4</Col><Col id=\"RETAILPRICE\">5500</Col><Col id=\"RETAILSUMPRICE\">22000</Col><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\">A</Col></Row><Row><Col id=\"RNUM\">6</Col><Col id=\"ITEMNAME\">엔진오일교환2171</Col><Col id=\"UNIT\">EA</Col><Col id=\"CUST_VEN_NAME\">3636</Col><Col id=\"ITEMQTY\">1</Col><Col id=\"RETAILPRICE\">40000</Col><Col id=\"RETAILSUMPRICE\">40000</Col><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\">A</Col></Row><Row><Col id=\"RNUM\"/><Col id=\"ITEMNAME\"/><Col id=\"UNIT\"/><Col id=\"CUST_VEN_NAME\"/><Col id=\"ITEMQTY\"/><Col id=\"RETAILPRICE\"/><Col id=\"RETAILSUMPRICE\"/><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\"/></Row><Row><Col id=\"RNUM\"/><Col id=\"ITEMNAME\"/><Col id=\"UNIT\"/><Col id=\"CUST_VEN_NAME\"/><Col id=\"ITEMQTY\"/><Col id=\"RETAILPRICE\"/><Col id=\"RETAILSUMPRICE\"/><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\"/></Row><Row><Col id=\"RNUM\"/><Col id=\"ITEMNAME\"/><Col id=\"UNIT\"/><Col id=\"CUST_VEN_NAME\"/><Col id=\"ITEMQTY\"/><Col id=\"RETAILPRICE\"/><Col id=\"RETAILSUMPRICE\"/><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\"/></Row><Row><Col id=\"RNUM\"/><Col id=\"ITEMNAME\"/><Col id=\"UNIT\"/><Col id=\"CUST_VEN_NAME\"/><Col id=\"ITEMQTY\"/><Col id=\"RETAILPRICE\"/><Col id=\"RETAILSUMPRICE\"/><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\"/></Row><Row><Col id=\"RNUM\"/><Col id=\"ITEMNAME\"/><Col id=\"UNIT\"/><Col id=\"CUST_VEN_NAME\"/><Col id=\"ITEMQTY\"/><Col id=\"RETAILPRICE\"/><Col id=\"RETAILSUMPRICE\"/><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\"/></Row><Row><Col id=\"RNUM\"/><Col id=\"ITEMNAME\"/><Col id=\"UNIT\"/><Col id=\"CUST_VEN_NAME\"/><Col id=\"ITEMQTY\"/><Col id=\"RETAILPRICE\"/><Col id=\"RETAILSUMPRICE\"/><Col id=\"WAGEPRICE\"/><Col id=\"PROD_GBN_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnOZReport","566","120","228","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("출력(오즈리포트)");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEstimate","5","120","240",null,null,"15",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsEstimate2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"RNUM\"/><Cell col=\"1\" text=\"bind:RNUM\"/><Cell row=\"1\" text=\"ITEMNAME\"/><Cell row=\"1\" col=\"1\" text=\"bind:ITEMNAME\"/><Cell row=\"2\" text=\"UNIT\"/><Cell row=\"2\" col=\"1\" text=\"bind:UNIT\"/><Cell row=\"3\" text=\"CUST_VEN_NAME\"/><Cell row=\"3\" col=\"1\" text=\"bind:CUST_VEN_NAME\"/><Cell row=\"4\" text=\"ITEMQTY\"/><Cell row=\"4\" col=\"1\" text=\"bind:ITEMQTY\"/><Cell row=\"5\" text=\"RETAILPRICE\"/><Cell row=\"5\" col=\"1\" text=\"bind:RETAILPRICE\"/><Cell row=\"6\" text=\"RETAILSUMPRICE\"/><Cell row=\"6\" col=\"1\" text=\"bind:RETAILSUMPRICE\"/><Cell row=\"7\" text=\"WAGEPRICE\"/><Cell row=\"7\" col=\"1\" text=\"bind:WAGEPRICE\"/><Cell row=\"8\" text=\"PROD_GBN_NM\"/><Cell row=\"8\" col=\"1\" text=\"bind:PROD_GBN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchPopUp","5","85","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("정비 내역");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchPopUp00","255","85","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("매장 정보");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEstimate00","255","120","240",null,null,"15",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsShopInfo2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"BIZNO\"/><Cell col=\"1\" text=\"bind:BIZNO\"/><Cell row=\"1\" text=\"BIZNAME\"/><Cell row=\"1\" col=\"1\" text=\"bind:BIZNAME\"/><Cell row=\"2\" text=\"REPRESENTIVE\"/><Cell row=\"2\" col=\"1\" text=\"bind:REPRESENTIVE\"/><Cell row=\"3\" text=\"TEL\"/><Cell row=\"3\" col=\"1\" text=\"bind:TEL\"/><Cell row=\"4\" text=\"FAX\"/><Cell row=\"4\" col=\"1\" text=\"bind:FAX\"/><Cell row=\"5\" text=\"ADDRESS\"/><Cell row=\"5\" col=\"1\" text=\"bind:ADDRESS\"/><Cell row=\"6\" text=\"BIZTYPE\"/><Cell row=\"6\" col=\"1\" text=\"bind:BIZTYPE\"/><Cell row=\"7\" text=\"BIZCOND\"/><Cell row=\"7\" col=\"1\" text=\"bind:BIZCOND\"/><Cell row=\"8\" text=\"YEAR\"/><Cell row=\"8\" col=\"1\" text=\"bind:YEAR\"/><Cell row=\"9\" text=\"MONTH\"/><Cell row=\"9\" col=\"1\" text=\"bind:MONTH\"/><Cell row=\"10\" text=\"DAY\"/><Cell row=\"10\" col=\"1\" text=\"bind:DAY\"/><Cell row=\"11\" text=\"OKNO\"/><Cell row=\"11\" col=\"1\" text=\"bind:OKNO\"/><Cell row=\"12\" text=\"CARNO\"/><Cell row=\"12\" col=\"1\" text=\"bind:CARNO\"/><Cell row=\"13\" text=\"CARNAME\"/><Cell row=\"13\" col=\"1\" text=\"bind:CARNAME\"/><Cell row=\"14\" text=\"DISTANCE\"/><Cell row=\"14\" col=\"1\" text=\"bind:DISTANCE\"/><Cell row=\"15\" text=\"CUSTNAME\"/><Cell row=\"15\" col=\"1\" text=\"bind:CUSTNAME\"/><Cell row=\"16\" text=\"ADDR\"/><Cell row=\"16\" col=\"1\" text=\"bind:ADDR\"/><Cell row=\"17\" text=\"CREDATE\"/><Cell row=\"17\" col=\"1\" text=\"bind:CREDATE\"/><Cell row=\"18\" text=\"ESTDATE\"/><Cell row=\"18\" col=\"1\" text=\"bind:ESTDATE\"/><Cell row=\"19\" text=\"MOBILE\"/><Cell row=\"19\" col=\"1\" text=\"bind:MOBILE\"/><Cell row=\"20\" text=\"ESTAMT\"/><Cell row=\"20\" col=\"1\" text=\"bind:ESTAMT\"/><Cell row=\"21\" text=\"ESTTAX\"/><Cell row=\"21\" col=\"1\" text=\"bind:ESTTAX\"/><Cell row=\"22\" text=\"ESTTOTALAMT\"/><Cell row=\"22\" col=\"1\" text=\"bind:ESTTOTALAMT\"/><Cell row=\"23\" text=\"PRINT_DATE\"/><Cell row=\"23\" col=\"1\" text=\"bind:PRINT_DATE\"/><Cell row=\"24\" text=\"SIGN_URL\"/><Cell row=\"24\" col=\"1\" text=\"bind:SIGN_URL\"/><Cell row=\"25\" text=\"TUNEUP_MGR\"/><Cell row=\"25\" col=\"1\" text=\"bind:TUNEUP_MGR\"/><Cell row=\"26\" text=\"ATTR1\"/><Cell row=\"26\" col=\"1\" text=\"bind:ATTR1\"/><Cell row=\"27\" text=\"ATTR2\"/><Cell row=\"27\" col=\"1\" text=\"bind:ATTR2\"/><Cell row=\"28\" text=\"ATTR3\"/><Cell row=\"28\" col=\"1\" text=\"bind:ATTR3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","565","173","227","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("OZXml확인");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchPopUp01","5","5","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("- 오즈리포트 출력 샘플");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","40","1243","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("-->take.OZReportOpen\r\n    (현재폼, ODI파일명, 리포트파일명, report type, 데이터, 페이지 수, 서버수신여부, 기타 옵션, 콜백함수)");
            obj.set_font("11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            obj.set_color("crimson");
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
        this.registerScript("sampleOZReport.xfdl", function() {

        this.btnOZReport_onclick = function(obj,e)
        {
            var sOdiNm,        //Odi Name
                sViewerMode,   //print, preview
                sReportFile,   //오즈리포트 파일명 ex) dsEstimateInfo2.ozr
                sPage,         //한번에 보여줄 페이지수
                sFromServer,   //서버에서 데이터를 가져올지 여부 false/true 기본 false
                sOZData;       //오즈로 보낼 데이터 XML 형식은 필히 "xmlData=" 추가 필요
            var objArg = new Object();        //기타 추가 옵션 설정

            //기본 옵션
            sOdiNm = "dsEstimateInfo2";  //Odi 명
            sViewerMode = "preview";     //report type --> print : 출력, preview : 보기
            sOZData = take.OZXml([this.dsEstimate2, this.dsShopInfo2]); //데이터
        	sReportFile = "/xml/dsEstimateInfo2.ozr";  //리포트 파일 경로 (레파지토리 기준으로 명시)
            sFromServer = "false";      //서버 수신 여부
            sPage = "100";              //보여줄 페이지 수

            objArg["odi.odinames"] = sOdiNm;
            objArg["connection.reportname"] = sReportFile;
            objArg["viewer.mode"] = sViewerMode;
            objArg["odi." + sOdiNm + ".args1"] = sOZData;
            objArg["odi." + sOdiNm + ".pcount"] = sPage;
            objArg["connection.datafromserver"] = sFromServer;
            objArg["information.debug"] = "true";

            //""로 처리가 안될 경우
            //objArg['odi.odinames'] = sOdiNm;
            //objArg['connection.reportname'] = sReportFile;
            //objArg['viewer.mode'] = sViewerMode;
            //objArg['odi.' + sOdiNm + '.args1'] = sOZData;
            //objArg['odi.' + sOdiNm + '.pcount'] = sPage;
            //objArg['connection.datafromserver'] = sFromServer;
            //objArg['information.debug'] = "true";  //기타 오즈리포트 옵션을 세팅합니다.
            //args 옵션의 경우 args2부터 세팅이 가능합니다.(중요 : args1는 오즈로 보낼 데이터가 세팅됩니다.)
            //objArg["odi.dsEstimateInfo2.args2"];  //args2부터 사용 가능 (args1는 오즈로 보낼 데이터가 세팅됨)

            //리포트 팝업 호출
            take.openReport(this, "popid", objArg, "fnCallBack", "OZ");
        };

        //콜백함수
        this.fnCallBack = function(sId, sRtn)
        {
            trace("fnCallBack --> " + sId);
        }

        //OZ XML 확인
        this.Button00_onclick = function(obj,e)
        {
            trace("ozxml --> " + take.OZXml([this.dsEstimate2,this.dsShopInfo2]));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnOZReport.addEventHandler("onclick",this.btnOZReport_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("sampleOZReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
