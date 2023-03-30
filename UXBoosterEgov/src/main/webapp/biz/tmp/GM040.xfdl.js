(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GM040");
            this.set_titletext("프로그램_프로그램관리_NONMENU");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_ID\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022</Col><Col id=\"Column1\">정기 1차 어린이</Col><Col id=\"Column2\">어런이용 물놀이기구</Col><Col id=\"Column3\">공기주입 물놀이기구</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">정기 1차 어린이</Col><Col id=\"NAME\">정기 1차 어린이</Col></Row><Row><Col id=\"CODE\">수시 1차 어린이</Col><Col id=\"NAME\">수시 1차 어린이</Col></Row><Row><Col id=\"CODE\">수시 2차 어린이</Col><Col id=\"NAME\">수시 2차 어린이</Col></Row><Row><Col id=\"CODE\">정기 2차 어린이</Col><Col id=\"NAME\">정기 2차 어린이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">어런이용 물놀이기구</Col><Col id=\"NAME\">어런이용 물놀이기구</Col></Row><Row><Col id=\"CODE\">자동차용 어린이 보호장치</Col><Col id=\"NAME\">자동차용 어린이 보호장치</Col></Row><Row><Col id=\"CODE\">유아용 섬유제품</Col><Col id=\"NAME\">유아용 섬유제품</Col></Row><Row><Col id=\"CODE\">합성수지제 어린이용품</Col><Col id=\"NAME\">합성수지제 어린이용품</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode00_00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">공기주입 물놀이기구</Col><Col id=\"NAME\">공기주입 물놀이기구</Col></Row><Row><Col id=\"CODE\">수영보조용품(착용형)</Col><Col id=\"NAME\">수영보조용품(착용형)</Col></Row><Row><Col id=\"CODE\">수영보조용품(비착용형)</Col><Col id=\"NAME\">수영보조용품(비착용형)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode00_00_00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">리콜대상여부</Col><Col id=\"NAME\">대상아님</Col></Row><Row><Col id=\"CODE\">당해연도구입여부</Col><Col id=\"NAME\">2022-정기-1차 구입</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static58_00_00","0","0",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd","0","0","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("연도");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbArplnDivCd","125","5",null,"31","7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00","0","40",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00","0","40","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("차수/인증분야");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbArplnDivCd00","125","45",null,"31","7",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCode00");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00_00","0","80",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00_00","0","80","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbArplnDivCd00_00","125","85",null,"31","7",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsCode00_00");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00_00_00","0","120",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00_00_00","0","120","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("세부품목명");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbArplnDivCd00_00_00","125","125",null,"31","7",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("dsCode00_00_00");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("false");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static58_00_00_00_00_00_00","0","160",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staArplnDivCd00_00_00_00","0","160","120","41",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("인증번호");
            obj.set_cssclass("sta_WF_th01L");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOwnrTelno","125","165",null,"31","7",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","199",null,"200","0",null,null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("15");
            obj.set_autofittype("col");
            obj.getSetter("takegrid").set("sort,no");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"159\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"점검결과\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\" displaytype=\"normal\" combodataset=\"dsArplnDivCd\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"1\" text=\"bind:NAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button82",null,"gridMain:10","51","23","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_save01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cmbArplnDivCd","value","dsSearch","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cmbArplnDivCd00","value","dsSearch","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cmbArplnDivCd00_00","value","dsSearch","Column2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cmbArplnDivCd00_00_00","value","dsSearch","Column3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtOwnrTelno","value","dsArplnInfo","OWNR_TELNO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("GM040.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    GM040.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2021.06.01
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2021.06.01      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_sProgId = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * GM010_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.GM010_onload = function(obj,e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
              this.fnInit();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function(){
           //검색조건
           //onload 공통 코드
           take.tranCode(this, ["USE_YEAR"], ["dsCode"], "ALL", "fnCallback");

        };

        this.fnSearch = function(sTranId)
        {
            this.gridMain.set_binddataset(this.dsCode00_00_00_00);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GM010_onload,this);
            this.cmbArplnDivCd.addEventHandler("onitemchanged",this.cmbArplnDivCd_onitemchanged,this);
            this.cmbArplnDivCd00.addEventHandler("onitemchanged",this.cmbArplnDivCd_onitemchanged,this);
            this.cmbArplnDivCd00_00.addEventHandler("onitemchanged",this.cmbArplnDivCd_onitemchanged,this);
            this.cmbArplnDivCd00_00_00.addEventHandler("onitemchanged",this.cmbArplnDivCd_onitemchanged,this);
            this.gridMain.addEventHandler("oncelldblclick",this.divDetail_gridMain_oncelldblclick,this);
        };
        this.loadIncludeScript("GM040.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
