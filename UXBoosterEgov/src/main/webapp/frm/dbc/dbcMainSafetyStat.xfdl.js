(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcMainSafetyStat");
            this.set_titletext("메인부품 안전재고현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(354,315);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">김해1공장</Col><Col id=\"Column1\">센서-01</Col><Col id=\"Column2\">-1</Col><Col id=\"Column3\">(5/6)</Col></Row><Row><Col id=\"Column0\">김해2공장</Col><Col id=\"Column1\">스위치-03</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">(3/6)</Col></Row><Row><Col id=\"Column0\">김해3공장</Col><Col id=\"Column1\">센서-01</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\">(2/6)</Col></Row><Row><Col id=\"Column0\">김해4공장</Col><Col id=\"Column1\">스위치-01</Col><Col id=\"Column2\">-2</Col><Col id=\"Column3\">(6/6)</Col></Row><Row><Col id=\"Column0\">김해5공장</Col><Col id=\"Column1\">센서-01</Col><Col id=\"Column2\">0</Col><Col id=\"Column3\">(3/2)</Col></Row><Row><Col id=\"Column0\">김해6공장</Col><Col id=\"Column1\">스위치-01</Col><Col id=\"Column2\">-1</Col><Col id=\"Column3\">(4/4)</Col></Row><Row><Col id=\"Column0\">김해7공장</Col><Col id=\"Column1\">스위치-02</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\">(5/6)</Col></Row><Row><Col id=\"Column0\">...</Col><Col id=\"Column1\">...</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">(5/6)</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staToday","0","0","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_MF_Time");
            obj.set_text("2020년 10월 20일");
            this.addChild(obj.name, obj);

            obj = new Static("staUnit",null,"0","86","20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("단위 : E/A");
            obj.set_cssclass("sta_MF_Unit");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","-1","30","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주의");
            obj.set_cssclass("sta_MF_orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","39","30","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("부족");
            obj.set_cssclass("sta_MF_red");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","55",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_MF_content2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"공장\"/><Cell col=\"1\" text=\"설비(부품)명\"/><Cell col=\"2\" text=\"부족재고&#13;&#10;(안전재고/현재고)\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"expr:&quot;&lt;b v=&apos;true&apos;&gt;&lt;fs v=&apos;14&apos;&gt;&quot; + Column2 + &quot;&lt;/fs&gt;&lt;/b&gt;&quot; +&quot;\\n&quot;+Column3\" cssclass=\"expr:parseInt(Column2)&lt;=0 ? &apos;grd_WF_orangeBg&apos; : &apos;grd_WF_redBg&apos;\" textAlign=\"center\" displaytype=\"decoratetext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",354,315,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcMainSafetyStat.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
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
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        // formid_onload 최초 로드시 발생되는 이벤트 (필수)
        this.Form_onload = function(obj, e)
        {
            if (take.nvl(this.parent.btran,false))
            {
                //this.fnTran("");
            }
        }

        //폼 타이머 이벤트
        this.Form_ontimer = function(obj,e)
        {
        	if (e.timerid==9999)
            {
                //if (!this.getOwnerFrame().form.divMdi.visible)
                //{
                    this.killTimer(9999);
                    this.fnTran("profitLoss");
                //}
            }
        };

        /*********************************************************
         * 2 필수 FUNCTION 영역 (fnSearch)
         ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "profitLoss";

            //this.fnTran(sTranId);
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //N/A

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/
        /**
        * fnTest - progress bar 세팅
        * @param  : sMsg   - 메세지
        * @param  : sCode   - 메세지 코드
        * @return : N/A
        * @example :
        */
        this.fnSetUsewaitcursor = function(rtn)
        {
            nexacro.getEnvironment().set_usewaitcursor(rtn);
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "profitLoss";

            this.fnSetUsewaitcursor(false);

            //트랜젝션 공통함수 호출 -->필수(모든 트랜젝션을 공통으로 처리)
            //take.transaction(this,sTranId, sUrl, sInDs, sOutDs, sParam, sCallBack);
        }

        /**
        * fnCallback : transaction callback
        * @param  : svcId   - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : errCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : errMsg   - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallback = function(sId, nErrCd, sErrMsg)
        {
            //Transaction 에러는 공통에서 처리

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

            switch(sId)
            {
                case "profitLoss" : //조회 콜백

                    var nReloadn, nCnt;

                    nCnt = this.dsList.getRowCount();

                    if( nCnt > 0 )
                    {

                    }

                    nReloadn = parseInt(take.nvl(this.parent.reloadtime,"0"));

                    if (nReloadn>0)
                    {
                        nReloadn = nReloadn*1000;
                        this.setTimer(9999,nReloadn);
                    }

                    break;
                default :
                    break;
            }

            this.fnSetUsewaitcursor(true);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.staToday.addEventHandler("onclick",this.staToday_onclick,this);
        };
        this.loadIncludeScript("dbcMainSafetyStat.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
