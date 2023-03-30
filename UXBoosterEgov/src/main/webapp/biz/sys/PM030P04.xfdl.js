(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM030P04");
            this.set_titletext("프로젝트관리_메뉴관리_파라미터팝업");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,535);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"KEY\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"GUIDE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSchStartTime", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">00</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">07</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">08</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">09</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">17</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">18</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">19</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">20</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">22</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSchEndTime", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">00</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">07</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">08</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">09</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">12</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">13</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">14</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">16</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">17</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">18</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">19</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"NAME\">20</Col></Row><Row><Col id=\"CODE\">21</Col><Col id=\"NAME\">21</Col></Row><Row><Col id=\"CODE\">22</Col><Col id=\"NAME\">22</Col></Row><Row><Col id=\"CODE\">23</Col><Col id=\"NAME\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDocType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","472",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"57","23","80","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static24_00","20","20",null,"21","160",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("파라미터 관리");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"20","46","21","69",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_plus01");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_cancel02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","20","46",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsParam");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Key\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell text=\"bind:KEY\" textAlign=\"center\" displaytype=\"text\" edittype=\"text\" tooltiptext=\"bind:GUIDE\"/><Cell col=\"1\" text=\"bind:VALUE\" textAlign=\"center\" displaytype=\"text\" edittype=\"text\" tooltiptext=\"bind:GUIDE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,535,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM030P04.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * PM030P04_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM030P04_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                var sTitle = take.nvl(this.parent.sTitle, "");

                if (sTitle!="")
                {
                    this.set_titletext(sTitle);
                }

                this.fnInit(take.nvl(this.parent.sProgramCd, ""));
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnAddRow, fnSave, fnDelRow, fnExcel...)
        ********************************************************/
        //N/A

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //추가 버튼 클릭 이벤트
        this.btnAdd_onclick = function(obj,e)
        {
            var objDs = this.dsParam;
            var nRow;

        	nRow = objDs.addRow();
            objDs.setColumn(nRow,"KEY","");
            objDs.setColumn(nRow,"VALUE","");
            objDs.setColumn(nRow,"DISPLAYTYPE","text");
            objDs.setColumn(nRow,"EDITTYPE","text");
        };

        //삭제 버튼 클릭 이벤트
        this.btnDel_onclick = function(obj,e)
        {
            var objDs = this.dsParam;
            var nRow = objDs.rowposition;

        	objDs.deleteRow(nRow);
        };

        //btnConfirm_onclick 확인 버튼 클릭 이벤트
        this.btnConfirm_onclick = function(obj,e)
        {
            var objDs;
            var nCnt;
            var sRtn;

            objDs = this.dsParam;

            nCnt = objDs.rowcount;

            if (nCnt<=0)
            {
                sRtn = "";
            } else {

                sRtn = "{"
                for (var i=0;i<nCnt;i++)
                {
                    sKey = take.nvl(objDs.getColumn(i,"KEY"), "");
                    sVal = take.nvl(objDs.getColumn(i,"VALUE"), "");

                    if (sKey=="")
                    {
                        take.alert(this, "Info", "key 값은 필수입니다.");
                        sRtn = "";
                        break;
                    }

                    sRtn += nexacro.wrapQuote(sKey) + ":" + nexacro.wrapQuote(sVal) + (i==nCnt-1?"":", ");
                }

                if (sRtn!="")
                {
                    sRtn+="}";
                } else {
                    return;
                }
            }

            this.close(sRtn);
        };

        /**
        * btnCancel_onclick : 닫기 버튼 클릭
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnInit = function(sType)
        {
           //화면구분 프로그램코드 CODE->GM00000040   // NAME->게시판 목록
           //화면구분 프로그램코드 CODE->GM00000043   // NAME->일정관리 Main
           //화면구분 프로그램코드 CODE->GM00000057   // NAME->문서관리

            var objDs;
            var nRow;

            objDs = this.dsParam;

            if (sType=="") return;

            switch(sType)
            {
                case "GM00000040": //게시판
                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","attach_yn");
                    objDs.setColumn(nRow,"VALUE","Y");
                    objDs.setColumn(nRow,"GUIDE","첨부여부 Y / N");

                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","reply_yn");
                    objDs.setColumn(nRow,"VALUE","Y");
                    objDs.setColumn(nRow,"GUIDE","답글여부 Y / N");

                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","push_yn");
                    objDs.setColumn(nRow,"VALUE","Y");
                    objDs.setColumn(nRow,"GUIDE","Push여부 Y / N");

                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","template_cd");
                    objDs.setColumn(nRow,"VALUE","");
                    objDs.setColumn(nRow,"GUIDE","양식 코드");

                    break;

                case "GM00000057": //자료실
                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","document_type");
                    objDs.setColumn(nRow,"VALUE","");
                    objDs.setColumn(nRow,"GUIDE","문서유형 코드");

                    break;

                case "GM00000043": //일정

                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","schedule_start_time");
                    objDs.setColumn(nRow,"VALUE","07");
                    objDs.setColumn(nRow,"GUIDE","시작시간 01~24");

                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","schedule_end_time");
                    objDs.setColumn(nRow,"VALUE","19");
                    objDs.setColumn(nRow,"GUIDE","종료시간 01~24");

                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","breaking_txt");
                    objDs.setColumn(nRow,"VALUE","12시 ~ 13시 점심시간");
                    objDs.setColumn(nRow,"GUIDE","휴계시간 Text");

                    nRow = objDs.addRow();
                    objDs.setColumn(nRow,"KEY","concent_txt");
                    objDs.setColumn(nRow,"VALUE","10시 ~ 12시");
                    objDs.setColumn(nRow,"GUIDE","집중근무시간 Text");

                    break;

                default:
            }
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM030P04_onload,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
        };
        this.loadIncludeScript("PM030P04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
