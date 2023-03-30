(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpComCode");
            this.set_titletext("공통코드 조회(ds_combo)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_PurchaseType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_GoodType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Office", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DESC2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MdUser", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SizeRunGroup", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DetailSeason", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_POType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PkgType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj._setContents("<ColumnInfo><Column id=\"CDGUBN\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_DS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CDGUBN\">ME</Col><Col id=\"OUT_DS\">ds_OfficeTmp</Col></Row><Row><Col id=\"CDGUBN\">11</Col><Col id=\"OUT_DS\">ds_PurchaseTypeTmp</Col></Row><Row><Col id=\"CDGUBN\">13</Col><Col id=\"OUT_DS\">ds_GoodTypeTmp</Col></Row><Row><Col id=\"CDGUBN\">14</Col><Col id=\"OUT_DS\">ds_MdUser</Col></Row><Row><Col id=\"CDGUBN\">33</Col><Col id=\"OUT_DS\">ds_SizeRunGroup</Col></Row><Row><Col id=\"CDGUBN\">M7</Col><Col id=\"OUT_DS\">ds_DetailSeason</Col></Row><Row><Col id=\"CDGUBN\">M8</Col><Col id=\"OUT_DS\">ds_POType</Col></Row><Row><Col id=\"CDGUBN\">MJ</Col><Col id=\"OUT_DS\">ds_PkgType</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PurchaseTypeTmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_GoodTypeTmp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OfficeTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DESC2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","23","14","417","96",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기존 마이플랫폼에서 로그인 후 조회했던, 글로벌 데이터셋 (G_ds_XXX)는 각 화면에서 호출하여 사용하기로 하였습니다.");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","sta00:10","50","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공통코드 호출");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","39","134","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ds_Office");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","413","134","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ds_PurchaseType");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","796","134","210","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ds_GoodType");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","410","170","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_PurchaseType");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CD_FLAG\"/><Cell col=\"1\" text=\"CD_CODE\"/><Cell col=\"2\" text=\"CD_NAME\"/><Cell col=\"3\" text=\"CD_DESC\"/><Cell col=\"4\" text=\"CD_DESC2\"/><Cell col=\"5\" text=\"CD_GB\"/><Cell col=\"6\" text=\"CD_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_FLAG\"/><Cell col=\"1\" text=\"bind:CD_FLAG\"/><Cell col=\"2\" text=\"bind:CD_NAME\"/><Cell col=\"3\" text=\"bind:CD_DESC\"/><Cell col=\"4\" text=\"bind:CD_DESC2\"/><Cell col=\"5\" text=\"bind:CD_GB\"/><Cell col=\"6\" text=\"bind:CD_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_01","790","170","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_GoodType");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CD_FLAG\"/><Cell col=\"1\" text=\"CD_CODE\"/><Cell col=\"2\" text=\"CD_NAME\"/><Cell col=\"3\" text=\"CD_DESC\"/><Cell col=\"4\" text=\"CD_DESC2\"/><Cell col=\"5\" text=\"CD_GB\"/><Cell col=\"6\" text=\"CD_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_FLAG\"/><Cell col=\"1\" text=\"bind:CD_FLAG\"/><Cell col=\"2\" text=\"bind:CD_NAME\"/><Cell col=\"3\" text=\"bind:CD_DESC\"/><Cell col=\"4\" text=\"bind:CD_DESC2\"/><Cell col=\"5\" text=\"bind:CD_GB\"/><Cell col=\"6\" text=\"bind:CD_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00_00","30","170","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_Office");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CD_FLAG\"/><Cell col=\"1\" text=\"CD_CODE\"/><Cell col=\"2\" text=\"CD_NAME\"/><Cell col=\"3\" text=\"CD_DESC\"/><Cell col=\"4\" text=\"CD_DESC2\"/><Cell col=\"5\" text=\"CD_GB\"/><Cell col=\"6\" text=\"CD_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_FLAG\"/><Cell col=\"1\" text=\"bind:CD_CODE\"/><Cell col=\"2\" text=\"bind:CD_NAME\"/><Cell col=\"3\" text=\"bind:CD_DESC\"/><Cell col=\"4\" text=\"bind:CD_DESC2\"/><Cell col=\"5\" text=\"bind:CD_GB\"/><Cell col=\"6\" text=\"bind:CD_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpComCode.xfdl", function() {
        /*
        기존 dataset		|기존 dataset 설정 filter									|비고							|tobe
        					|															|								|ds_combo/CDGUBUN
        =========================================================================================================================================
        G_ds_shop_all		|ds_codeJMID.Filter("CD_GB='T'");// CSC 전체 매장정보		|[전체] 추가					|T
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_shop_cd		|ds_codeJMID.Filter("CD_GB='J'");//직영점					|								|J
        ds_shop
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_shop_sBs		|ds_codeJMID.Filter("CD_GB='K'");// CSC 조회용 매장		|[CD_GB='J']에 [전체] 추가		|K
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_shop_bs		|ds_codeJMBS.Filter("CD_GB='C'");							|								|C
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_shop_bs_M		|ds_codeJMID.Filter("CD_GB='L'");// MHW  매장				|[전체] 추가					|L
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_shop_cd_M		|ds_codeJMID.Filter("CD_GB='M'");// MHW 조회용 매장		|[전체] 추가					|M
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_shop_sBs_M		|ds_codeJMID.Filter("CD_GB='M'");// MHW 조회용 매장		|[전체] 추가					|M
        																				|G_ds_shop_cd_M 대체 가능
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_shop_all_M		|ds_codeJMID.Filter("CD_GB='N'");// CSC 전체 매장정보		|[전체] 추가					|N
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_dept			|ds_codeJMBS.Filter("CD_FLAG='92'");//조회용 매장			|								|92
        -----------------------------------------------------------------------------------------------------------------------------------------
        G_ds_code			|ds_codeJMBS.Filter("length(CD_GB)=0||substr(CD_GB,0,1) ='Z'");								|//분리해서 사용
        -----------------------------------------------------------------------------------------------------------------------------------------
        ds_Channel			|G_ds_code.Filter("CD_FLAG='CH'");							|								|CH
        -----------------------------------------------------------------------------------------------------------------------------------------
        ds_Manage			|G_ds_code.Filter("CD_FLAG='08'")							|								|08
        -----------------------------------------------------------------------------------------------------------------------------------------
        ds_Jmgbn1			|G_ds_code.Filter("CD_FLAG='32'");							|								|32
        -----------------------------------------------------------------------------------------------------------------------------------------

        */

        /**
        1. 필수 dataset : ds_combo
        <Dataset id="ds_combo">
        <ColumnInfo>
          <Column id="CDGUBN" type="STRING" size="256"/>
          <Column id="OUT_DS" type="STRING" size="256"/>
        </ColumnInfo>
        <Rows>
          <Row>
        	<Col id="CDGUBN">K</Col>
        	<Col id="OUT_DS">ds_Shop</Col>
          </Row>
          <Row>
        	<Col id="CDGUBN">CH</Col>
        	<Col id="OUT_DS">ds_Channel</Col>
          </Row>
          <Row>
        	<Col id="CDGUBN">DV</Col>
        	<Col id="OUT_DS">ds_Jmdvcd</Col>
          </Row>
        </Rows>
        </Dataset>

        2. 코드 기본값 [선택/전체] 는 callback 에서 구현
        */


        // 공통코드 호출
        this.fnGetCodeDs = function()
        {
        	var sParam;
            sParam += " appName=" + nexacro.wrapQuote("Common.Common");
            sParam += " method=" + nexacro.wrapQuote("getCommCodeArr");

            take.transaction(this,
                "GetCommCodeListArr",
                "SVC_LOC::process.do",
                "ds_combo=ds_combo",
                this.fnMakeCodeOutDs(),	//method 호출 및 [dataset=dataset dataset=dataset ... ]으로 명시 가능
                sParam,
                "fnCallBack");
        }


        //추후 공통함수 분리 여부 판단
        this.fnMakeCodeOutDs = function()
        {
        	var sRtn;
        	for(var i=0, iTotCnt=this.ds_combo.rowcount; i<iTotCnt; i++)
        	{
        		sRtn += " "+this.ds_combo.getColumn(i, "OUT_DS")+"="+this.ds_combo.getColumn(i, "OUT_DS");
        	}

        	return sRtn;
        }




        // callback

        this.fnCallBack = function(sId, nErrCd, sErrMsg)
        {
            //Transaction 에러는 공통에서 처리

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

        	//var objDivSearch = this.divSearch.form;
            switch(sId)
            {
                 case "GetCommCodeListArr" :
        			/*
        			현재 넥사크로N 버그로 인해,
        			여러개 데이터셋을 한꺼번에 조회했을 때,
        			그리드에 바로 표시가 안되는 현상이 있어, temp 데이터셋에 조회한 다음,
        			복사함.
        			*/
        			this.ds_Office.copyData(this.ds_OfficeTmp);
        			this.ds_PurchaseType.copyData(this.ds_PurchaseTypeTmp);
        			this.ds_GoodType.copyData(this.ds_GoodTypeTmp);

        			trace(this.ds_Office.saveXML());
        			trace(this.ds_PurchaseType.saveXML());
        			trace(this.ds_GoodType.saveXML());
        			//trace(this.ds_MdUser.saveXML());
        			//trace(this.ds_SizeRunGroup.saveXML());
        			//trace(this.ds_DetailSeason.saveXML());
        			//trace(this.ds_POType.saveXML());
        			//trace(this.ds_PkgType.saveXML());

        			//objDivSearch.cb_Channel.set_index(0);


        			///기존 코드
        			///G_ds_code + filter
        			///this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == 'DV'");
        			///this.ds_Jmdvcd.copyData(this.ds_codeJMBS, true);
        			/*
        			///G_ds_code // ds_codeJMBS.Filter("length(CD_GB)=0||substr(CD_GB,0,1) ='Z'");
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == 'CH'");
        			this.ds_Channel.copyData(this.ds_codeJMBS, true);
        			this.fnSetDataSetDefaule(this.ds_Channel);
        			objDivSearch.cb_Channel.set_index(0);

        			this.ds_Jmoxgb.copyData(this.ds_codeJMBS, true);
        			this.fnSetDataSetDefaule(this.ds_Jmoxgb, " ");

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '08'");
        			this.ds_Manage.copyData(this.ds_codeJMBS, true);
        			this.fnSetDataSetDefaule(this.ds_Manage);
        			objDivSearch.cb_Manage.set_index(0);

        			this.ds_Jmbncn.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '32'");
        			this.ds_Jmgbn1.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '03'");
        			this.ds_Jmbncd.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '44'");
        			this.ds_Jmshop.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '04'");
        			this.ds_Jmlvgb.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == 'DV'");
        			this.ds_Jmdvcd.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '07'");
        			this.ds_Jmgagb.copyData(this.ds_codeJMBS, true);


        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '43'");
        			this.ds_Etc.copyData(this.ds_codeJMBS, true);
        			this.fnSetDataSetDefaule(this.ds_Etc, "");
        			this.divDetail.form.Tab0.tab4.cb_Etc1.set_index(0);
        			this.divDetail.form.Tab0.tab4.cb_Etc2.set_index(0);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == 'T1'");
        			this.ds_EstGbn.copyData(this.ds_codeJMBS, true);
        			this.fnSetDataSetDefaule(this.ds_EstGbn, "");
        			this.divDetail.form.Tab0.tab4.cb_EstGbn1.set_index(0);
        			this.divDetail.form.Tab0.tab4.cb_EstGbn2.set_index(0);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == 'T2'");
        			this.ds_EstChk.copyData(this.ds_codeJMBS, true);
        			this.fnSetDataSetDefaule(this.ds_EstChk, "");
        			this.divDetail.form.Tab0.tab4.cb_EstChk1.set_index(0);
        			this.divDetail.form.Tab0.tab4.cb_EstChk2.set_index(0);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '75'");
        			this.ds_Export.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '74'");
        			this.ds_DptGroup.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == '06'");
        			this.ds_Jmarcd.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == 'S2'");
        			this.ds_Jmdrst.copyData(this.ds_codeJMBS, true);

        			///G_ds_code + filter
        			this.ds_codeJMBS.Filter("(length(CD_GB)==0 || substr(CD_GB,0,1) =='Z') && CD_FLAG == 'S3'");
        			this.ds_StoreComp.copyData(this.ds_codeJMBS, true);
        */
                    break;
                default :
                    break;
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.fnGetCodeDs,this);
        };
        this.loadIncludeScript("smpComCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
