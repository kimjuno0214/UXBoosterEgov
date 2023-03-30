(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TMP010M01");
            this.set_titletext("기본조회화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"test\" type=\"STRING\" size=\"256\"/><Column id=\"content\" type=\"STRING\" size=\"256\"/><Column id=\"doc_id\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","staTitleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staListT","0","0","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("자주쓰는 문구 목록조회");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","30",null,null,"-1","321",null,null,null,null,this.divDetail.form);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMain");
            obj.getSetter("takegrid").set("sort");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_autosizebandtype("body");
            obj.set_scrollbarsize("15");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"500\"/><Column size=\"760\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"제목\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"내용\" edittype=\"none\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SJ\" textAlign=\"left\" displaytype=\"normal\" cssclass=\"expr:IMPORT_YN == &apos;Y&apos; ? &apos;import&apos; : &apos;&apos;\" padding=\"0px 0px 0px 0px\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:CN\" textAlign=\"left\" edittype=\"textarea\" autosizerow=\"limitmin\" textareaautoselect=\"false\" autosizecol=\"default\" displaytype=\"normal\" controlautosizingtype=\"both\" textareaacceptsenter=\"true\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSearch","-5","gridMain:10",null,"43","5",null,"1300",null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeptIdT","0","10","80","21",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("문서ID");
            obj.set_cssclass("sta_WF_textR");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNo","staDeptIdT:10","10","175","21",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("1");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01","305","0","50",null,null,"0",null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeptNmT","355","10","80","21",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_textR");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle2","staDeptNmT:10","10","195","21",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("2");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_01_00","640","0","50",null,null,"0",null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","690","10","80","21",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_textR");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00","20","31","285","11",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00","355","31","285","11",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01_00_00_00","690","31","285","11",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCn","780","10","195","21",null,null,null,null,null,null,this.divDetail.form.divSearch.form);
            obj.set_taborder("14");
            this.divDetail.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_00",null,"0","10",null,"0","0",null,null,null,null,this);
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

            //-- Default Layout : this.divDetail.form.divSearch.form
            obj = new Layout("default","",0,0,this.divDetail.form.divSearch.form,function(p){});
            this.divDetail.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.divSearch.form.edtTitle2","value","dsSearch","test");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtTitle","value","dsSearch","test");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.divSearch.form.edtCn","value","dsSearch","content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.divSearch.form.cboUseYn","value","dsMain","CN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.divSearch.form.edtNo","value","dsSearch","doc_id");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRE020M01.xfdl", function() {
        /**
        *  기본조회화면
        *
        *  @MenuPath    시스템 > 두레소프트 > 자주쓰는 문구
        *  @FileName    TMP010M01.xfdl
        *  @Creator     doore
        *  @CreateDate  2023.01.04
        *  @Version     1.0
        *  @Desction    설명 : 조회화면 템플릿
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2023.01.04      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출




        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = "";
        this.fv_objProgInfo;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
           if (take.formOnLoad(this))
           {
        		this.fnSearch();
           }

        };

        /*********************************************************
         * 2.1 CALLBACK 콜백 처리부분
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
        		case "Search" :
        			trace(this.dsMain.saveXML());
        			break;
        		case "Save":
        			take.alert(this,"","저장되었습니다.");
        			this.fnSearch();
        			break;
                case "Delete" : //삭제 콜백
                    //Script
        			take.alert(this, "", "삭제가 완료되었습니다.");
        			this.fnSearch();
                    break;
                default :
                    break;
            }
        };


        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAdd, fnDelRow)
        ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
        	trace(this.dsMain.saveXML());
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Search";
         	//var sSj = ''; 만약 이 방법으로 하면 "" 빈공백의 파라미터 안에 sSj를 넘겨주면 됨...
         	//if(!take.isEmpty(this.divSearch.form.edtTitle.value)) sSj = "test=" + this.divSearch.form.edtTitle.value;
        	this.dsMain.clearData();
        	trace(this.dsMain.saveXML());

        	take.tranSelect(this, sTranId, "Doore.docmSelect", "dsSearch", "dsMain","","fnCallback");//dsSearch의 데이터셋에 id가 test인 값을 찾아서 mapper의 sql문장에 test의 값을 넣어줘서 select
        	//take.transaction(this, sTranId, "SVC_LOC::test/saveList.do", "dsMain=dsMain:U dsMain1=dsMain1:U", "", sParam, "fnCallback", false);
        	//this.transaction("aaaa", "http://localhost:8080/UXBooster?test/saveList.do", "dsSearch", "dsMain", '');
        };

        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {
           if (take.nvl(sTranId, "")=="") sTranId = "Save";

           //데이터셋 수정 여부 확인
           if (!take.isDsModified(this.dsMain))
            {
                take.alert(this, "Info", "변경된 데이터가 없습니다.");
                return false;
            }

        // 	var srtrCheck = this.dsMain.getColumn(this.dsMain.rowposition, "SJ");
        // 	if(take.isEmpty(srtrCheck)) {
        // 		alert("제[목입력해 주세요.");
        // 		return false;
        // 	}
        	//저장 전 벨리데이션 체크
            var bRtn = takeval.checkComp(
                    this,                           //현재 Form Object
                    this.divDetail.form.gridMain,	//벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    "cellImport",                   //필수 입력 css값
                    "fnValCallBack",                //성공 Call Back 함수
                    true);                          //동기 여부

            //벨리데이션 체크 완료 후
            if (bRtn)
        	{
        	   var sParam = "sNameSpace=Doore.docmInsert|Doore.docmUpdate|Doore.docmDelete" + " sDataset=dsMain";
        	   take.transaction(this, sTranId, "SVC_LOC::doore/saveList.do", "dsMain=dsMain:U", "", sParam, "fnCallback", false);
            }
        };
        /**
         * fnAdd : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            this.dsMain.addRow();
        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {
        	this.dsMain.deleteRow(this.dsMain.rowposition);
        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        this.divSearch_edtTitle_onkeyup = function(obj, e)
        {
        	if( e.keycode == 13 )//enter를 눌렀을 때 keycode값이 13.
        	{
        		this.fnSearch();
        	}
        };


        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
        * fnValCallBack : validation callback
        * @param  : objComp      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnValCallBack = function(objComp)
        {
            //벨리데이션 성공 후 스크립트
            return;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtTitle.addEventHandler("onkeyup",this.divSearch_edtTitle_onkeyup,this);
            this.divDetail.form.gridMain.addEventHandler("oncelldblclick",this.divDetail_gridMain_oncelldblclick,this);
            this.divDetail.form.divSearch.form.staDeptIdT.addEventHandler("onclick",this.divDetail_divSearch_staDeptIdT_onclick,this);
            this.divDetail.form.divSearch.form.edtNo.addEventHandler("onkeyup",this.divSearch_edtTitle_onkeyup,this);
            this.divDetail.form.divSearch.form.edtTitle2.addEventHandler("onkeyup",this.divSearch_edtTitle_onkeyup,this);
            this.divDetail.form.divSearch.form.edtCn.addEventHandler("onkeyup",this.divSearch_edtTitle_onkeyup,this);
        };
        this.loadIncludeScript("DRE020M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
