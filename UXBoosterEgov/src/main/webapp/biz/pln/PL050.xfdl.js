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
            this.set_titletext("시료등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"NAME\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">2022</Col><Col id=\"NAME\">2022</Col></Row><Row><Col id=\"CODE\">2023</Col><Col id=\"NAME\">2023</Col></Row></Rows>");
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


            obj = new Dataset("dsSearch00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">WOODEN TOY-MB22</Col><Col id=\"Column1\">완구</Col><Col id=\"Column2\">적합</Col><Col id=\"Column3\">CB063R10486-2002</Col><Col id=\"Column4\">한국기계전기전자시험연구원(KTC)</Col><Col id=\"Column5\">20221115</Col><Col id=\"Column6\">CHUANGYI FOREST ARTS&amp;CRAFTS CO., LTD.</Col><Col id=\"Column7\">중국</Col><Col id=\"Column8\">(주)토도리브로</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",470,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PL050.xfdl", function() {
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
        var objProgInfo = take.getProgInfo(this);
        this.fv_sMenuCd = objProgInfo.ProgId;
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
              take.openPopup(this, "addMultiLanguage", "biz::pln/PL050P02.xfdl", "", "autosize=false openstatus=maximize", function(){ take.mdiClose(this, this.fv_sMenuCd);});
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
        };
        this.loadIncludeScript("PL050.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
