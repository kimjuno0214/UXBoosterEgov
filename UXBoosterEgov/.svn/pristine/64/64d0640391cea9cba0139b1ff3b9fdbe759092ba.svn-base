(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample4");
            this.set_titletext("Layout4");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"255\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"255\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"255\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"255\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDept", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">- 전체 -</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row><Row><Col id=\"NAME\">미사용</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDeptGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staLable01","19","40","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("로그인일시");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDateFrom","staLable01:3","40","107","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDash","calDateFrom:-2","40","21","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDateTo","staDash:-2","40","107","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","435","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserNmT","edtUserId:19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","staUserNmT:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("TEXT");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDept","19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사용자 부서");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDept","staDept:3","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsCboDept");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserIdT","cboDept:19","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staStatusT","calDateTo:19","40","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboStatus","staStatusT:3","40","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYn","685","40","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","768","40","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.08%","divSearch:0","40","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","90",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("리스트타이틀");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0","staTitle:0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"모바일\"/><Cell col=\"5\" text=\"유선전화\"/><Cell col=\"6\" text=\"팩스\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" text=\"주소\"/><Cell col=\"9\" text=\"부서코드\"/><Cell col=\"10\" text=\"상태\"/><Cell col=\"11\" text=\"사용유무\"/><Cell col=\"12\" text=\"동의유무\"/><Cell col=\"13\" text=\"로그인일자\"/><Cell col=\"14\" text=\"비밀번호 변경일자\"/><Cell col=\"15\" text=\"로그인 브라우저\"/><Cell col=\"16\" text=\"로그인 IP\"/><Cell col=\"17\" text=\"가입 일자\"/><Cell col=\"18\" text=\"유효시작일자\"/><Cell col=\"19\" text=\"유효종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:USER_NM\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_BIRTHDAY\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:USER_EMAIL\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:USER_MOBILE\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:USER_TEL\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:USER_FAX\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:POST_CD\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:USER_ADDR\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"9\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\" combodataset=\"dsCboDeptGrid\" combodatacol=\"NAME\" combocodecol=\"CODE\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:USER_STATUS_NM\" combodataset=\"dsCboStatus\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:USE_YN_NM\" combodataset=\"dsCboUseYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:AGREE_YN\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:LAST_LOGIN_DT\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"14\" text=\"bind:PW_CHANGE_DT\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"15\" text=\"bind:LOGIN_BROWSER\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:LOGIN_IP\" autosizerow=\"limitmin\"/><Cell col=\"17\" text=\"bind:JOIN_DATE\" displaytype=\"expr:JOIN_DATE == &apos;&apos; || JOIN_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:VALID_START_DATE\" displaytype=\"expr:VALID_START_DATE == &apos;&apos; || VALID_START_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:VALID_END_DATE\" displaytype=\"expr:VALID_END_DATE == &apos;&apos; || VALID_END_DATE == null ? &apos;&apos; : &apos;date&apos;\" autosizerow=\"limitmin\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","btnShowHide:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1030","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtUserNm","value","dsSearch","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboStatus","value","dsSearch","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtUserId","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.calDateFrom","value","dsSearch","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calDateTo","value","dsSearch","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboDept","value","dsSearch","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sample04.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1Depth > 2Depth
        *  @FileName    sample04.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2020.08.24
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
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this, true)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
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
        	//var objDivSearch = this.divSearch.form;

        	this.fnCommonCode();

        	takeval.add(this, "Search", this.divSearch.form.cboDept, this.divSearch.form.staDept.text, "value", true, "string", "", "");
        }
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "List";

        	switch(sTranId) {
                case "deptList":
        			this.dsCboDept.clearData();

                    take.tranSelect(this, sTranId, "Sample.sample04DeptSelect", "", "dsCboDept", "", "fnCallback");
                    break;
                case "List":
                    if(!takeval.check(this, "Search")) return;

        			this.dsList.clearData();

        			take.tranSelect(this, sTranId, "Sample.sample04JoinSelect", "dsSearch", "dsList", "", "fnCallback");
                    break;
                default:
            }
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //N/A

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCommonCode : 코드호출 함수
         * @param  {String} N/A
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
            var sOutDs      = ["dsCboStatus", "dsCboUseYn"];
            var sGroupCodes = ["00017", "00009"];
            var sHeaderType = ["ALL", "ALL"];

            take.tranCode(this, sGroupCodes, sOutDs, sHeaderType,
            function(sId, nErrCd, sErrMsg)
            {
                if (this.dsCboStatus.rowcount > 0){
                    this.divSearch.form.cboStatus.set_index(0);
                }
        		if (this.dsCboUseYn.rowcount > 0){
                    this.divSearch.form.cboUseYn.set_index(0);
                }

                this.fnSearch("deptList");
            });
        };

        // 부서 그리드 사용 임시 복사
        this.fnCopyDept = function ()
        {
        	this.dsCboDeptGrid.copyData(this.dsCboDept);

        	return true;
        };
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
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
                case "deptList" :  //조회 콜백
                    var objDs = this.dsCboDept;
        			if (objDs.rowcount > 0){
        				if(this.fnCopyDept()) {
        					objDs.insertRow(0);
        					objDs.setColumn(0, "CODE", "");
        					objDs.setColumn(0, "NAME", "선택");
        					this.divSearch.form.cboDept.set_index(0);
        				}
        			}
        			//this.fnSearch("List");
                    break;
                case "List" : //조회 콜백
                    this.divDetail.form.staTitle.set_text("Title (총 " + this.dsList.rowcount + "건)");
                    break;
                default :
                    break;
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
        };
        this.loadIncludeScript("sample04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
