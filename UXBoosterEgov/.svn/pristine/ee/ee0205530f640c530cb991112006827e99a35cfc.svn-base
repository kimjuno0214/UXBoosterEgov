(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC010T04");
            this.set_titletext("시스템공통_시스템관리_로그인정책");
            if (Form == this.constructor)
            {
                this._setFormPosition(1018,318);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSystemLoginPolicy", this);
            obj._setContents("<ColumnInfo><Column id=\"SYSTEM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POLICY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MIX_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_LENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RECENT_USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_CHANGE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"IMPOSSIBLE_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMixCdCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYnCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImpossibleTxt", this);
            obj._setContents("<ColumnInfo><Column id=\"IMPOSSIBLE_STR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSaveSub",null,"5","46","23","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","798","28","220","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMixCdTitle","10","37","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("문자숫자혼합체크");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","229","37",null,"31","518",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staMinLengthTitle","10","67","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("최소길이");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","229","67",null,"31","518",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staErrorCntTitle","10","97","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("오류입력접속제한");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","229","97",null,"31","518",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staRecentUseYnTitle","10","127","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("최근 사용한 비밀번호 사용금지");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","229","127",null,"31","518",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staFirstChangeYnTitle","10","157","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("최초 로그인 비밀번호 변경여부");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","229","157",null,"31","518",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staCheckCntTitle","10","187","220","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("비밀번호 체크일 수 (0~120일)");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","229","187",null,"31","518",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Static("staImpossibleTxtTitle","499","37","220",null,null,"100",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("비밀번호 포함 불가 문자열");
            obj.set_cssclass("sta_WF_th01Limport");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","718","36",null,null,"10","100",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMixCd","237","42","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("dsMixCdCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Spin("spnMinLength","237","72","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_increment("1");
            obj.set_min("6");
            obj.set_max("18");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboErrorCnt","237","102","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("CODECOLUMN");
            obj.set_datacolumn("DATACOLUMN");
            var cboErrorCnt_innerdataset = new nexacro.NormalDataset("cboErrorCnt_innerdataset", obj);
            cboErrorCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row></Rows>");
            obj.set_innerdataset(cboErrorCnt_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRecentUseYn","237","132","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsUseYnCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboFirstChangeYn","237","162","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("dsUseYnCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Spin("spnCheckCnt","237","192","250","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_min("0");
            obj.set_max("120");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Button("btnPlusSub",null,"159","23","23","16",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btnMinusSub",null,"189","23","23","16",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Grid("grdImpossibleTxt","725","42",null,"171","52",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("dsImpossibleTxt");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:IMPOSSIBLE_STR\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1018,318,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboMixCd","value","dsSystemLoginPolicy","MIX_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","spnMinLength","value","dsSystemLoginPolicy","MIN_LENGTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboErrorCnt","value","dsSystemLoginPolicy","ERROR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboRecentUseYn","value","dsSystemLoginPolicy","RECENT_USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboFirstChangeYn","value","dsSystemLoginPolicy","FIRST_CHANGE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","spnCheckCnt","value","dsSystemLoginPolicy","CHECK_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SC010T04.xfdl", function() {
        /**
        *  로그인정책
        *
        *  @MenuPath    시스템공통 > 시스템관리 > 로그인정책
        *  @FileName    SC010T04.xfdl
        *  @Creator     천우성
        *  @CreateDate  2019.08.16
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.16      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_nSystemId = 'S000000001';     //시스템ID

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.take_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                take.tranCode(this, ["00009","00010"], ["dsUseYnCode","dsMixCdCode"], ["SEL", "SEL"], function ()
        		{
        			trace(this.dsUseYnCode.saveXML());
        			trace(this.dsMixCdCode.saveXML());
        			this.fnTran('Detail');
        		});
           }
        }

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
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
            if (take.nvl(sTranId, "")=="") sTranId = "Detail";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "Detail" :
        			this.dsSystemLoginPolicy.clearData();

        			take.tranSelect(this, "Detail", "SystemCommon.systemLoginPolicyDetail", "", "dsSystemLoginPolicy", "SYSTEM_ID='" + this.fv_nSystemId + "'", sCallBack);

                    break;
        		case "Save" :

        			var sImpossibleTxt = "";
        			if( this.dsImpossibleTxt.rowcount > 0 ){
        				for(var i=0; i<this.dsImpossibleTxt.rowcount; i++){
        					sImpossibleTxt += this.dsImpossibleTxt.getColumn(i, "IMPOSSIBLE_STR") + "\n";
        				}
        			}
        			this.dsSystemLoginPolicy.setColumn(0, "IMPOSSIBLE_TXT", sImpossibleTxt);

        			take.tranSave(this, "Save", "SystemCommon.systemLoginPolicy", "dsSystemLoginPolicy", "", "", sCallBack);

                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
         ********************************************************/
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
                case "Detail" : //조회 콜백
                    // 비밀번포 포함 불가 문자열 split하여 grdImpossibleTxt에 추가
        			var sImpossibleTxt = this.dsSystemLoginPolicy.getColumn(0, "IMPOSSIBLE_TXT");
        			if (take.nvl(sImpossibleTxt, "") != "")
        			{
        				var arrImpossibleTxt = sImpossibleTxt.split("\n");
        				for( var i=0; i<arrImpossibleTxt.length-1; i++ )
        				{
        					var nRow = this.dsImpossibleTxt.addRow();
        					this.dsImpossibleTxt.setColumn(nRow, "IMPOSSIBLE_STR", arrImpossibleTxt[i]);
        				}
        			}
                    break;
                case "Save" :  //저장 콜백

        			this.dsImpossibleTxt.clearData();
                    this.fnTran('Detail');
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Transation id";

            this.fnTran(sTranId);
        }
        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Save transation id";

            this.fnTran(sTranId);
        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnUserFunction(sParam, nParam);
         */
        this.fnUserFunction = function(sParam, nParam)
        {
            //Script
        }

        this.btnSaveSub_onclick = function(obj,e)
        {
        	this.fnTran('Save');
        };

        this.btnPlusSub_onclick = function(obj,e)
        {
        	this.dsImpossibleTxt.addRow();
        };

        this.btnMinusSub_onclick = function(obj,e)
        {
        	var nRow = this.dsImpossibleTxt.rowposition;
        	this.dsImpossibleTxt.deleteRow(nRow);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.take_onload,this);
            this.btnSaveSub.addEventHandler("onclick",this.btnSaveSub_onclick,this);
            this.btnPlusSub.addEventHandler("onclick",this.btnPlusSub_onclick,this);
            this.btnMinusSub.addEventHandler("onclick",this.btnMinusSub_onclick,this);
        };
        this.loadIncludeScript("SC010T04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
