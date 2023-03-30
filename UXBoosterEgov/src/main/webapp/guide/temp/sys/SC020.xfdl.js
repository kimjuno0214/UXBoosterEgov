(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC020");
            this.set_titletext("시스템공통_다국어관리_다국어관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYnCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiLanguageDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"ML_LANG_txt\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultilanguageGroup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMlGroupCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultilanguageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ML_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"ML_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ML_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ML_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staMlInfoSearch","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("다국어명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMlInfoSearch","staMlInfoSearch:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnSearch","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYnSearch","staUseYnSearch:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsUseYnCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","43","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","73",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staMlGroupTitle","0","0",null,"21","1359",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("다국어그룹");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMlInfoTitle","300","0",null,"21","170",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("다국어목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageGroup","0","26","280",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_binddataset("dsMultilanguageGroup");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:CODE_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSpliter","300","444",null,"10","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_splitter2");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","300","26",null,null,"0","btnSpliter:5",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMultilanguageInfo");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.getSetter("takegrid").set("checkbox");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"190\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"다국어코드\"/><Cell col=\"1\" text=\"다국어명\" cssclass=\"cellImport\"/><Cell col=\"2\" text=\"기타\"/><Cell col=\"3\" text=\"상세설명\"/><Cell col=\"4\" text=\"사용\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"등록일\"/><Cell col=\"7\" text=\"수정자\"/><Cell col=\"8\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:ML_CD\" textAlign=\"center\" edittype=\"readonly\"/><Cell col=\"1\" text=\"bind:ML_NM\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:ML_ETC\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:DESC_TXT\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:USE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"5\" text=\"bind:REG_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:REG_DT\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:MOD_NM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:MOD_DT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMultilanguageDetailTitle","300","btnSpliter:5",null,"21","170",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("다국어정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultiLanguageDetail","300","staMultilanguageDetailTitle:5",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMultiLanguageDetail");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:ROWNUM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:LANG_NM\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ML_LANG_TXT\" edittype=\"text\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSaveSub",null,"btnSpliter:5","82","21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("다국어저장");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button00","559","163","83","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("일괄작업용");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","4",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","0","53",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
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
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtMlInfoSearch","value","dsSearch","ML_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboUseYnSearch","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SC020.xfdl", function() {
        /**
        *  다국어관리
        *
        *  @MenuPath    시스템공통 > 다국어관리 > 다국어관리
        *  @FileName    SC020.xfdl
        *  @Creator     천우성
        *  @CreateDate  2019.08.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.17      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_nOldRow = "";
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
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter);

        		take.tranCode(this, ["00009", "00011"], ["dsUseYnCode", "dsMlGroupCode"], "ALL,ALL",
        			function (){
        				this.divSearch.form.cboUseYnSearch.set_value("Y");
        				this.fnTran('Group');

        				this.divDetail.form.grdMultilanguageInfo.clearEventHandler("onkeydown");
        			}
        		);
        	}
        };

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
            if (take.nvl(sTranId, "")=="") sTranId = "Group";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "Group" :
        			this.dsMultilanguageGroup.clearData();

        			take.tranSelect(this, "Group", "SystemCommon.multilanguageInfoGroup", "", "dsMultilanguageGroup", "", sCallBack);

                    break;
        		case "List" :
        			this.dsMultilanguageInfo.clearData();

        			var nRow = this.dsMultilanguageGroup.rowposition;
        			var sMlGroup = this.dsMultilanguageGroup.getColumn(nRow, "CODE_ID");

                    this.dsSearch.setColumn(0, "ML_GROUP", sMlGroup);

        			//take.tranSelect(this, "List", "SystemCommon.multilanguageInfoList", "", "dsMultilanguageInfo", "sMlGroup='" + sMlGroup + "'", sCallBack);
                    take.tranSelect(this, "List", "SystemCommon.multilanguageInfoList", "dsSearch", "dsMultilanguageInfo", "", sCallBack);

                    break;
        		case "Language" :
        			this.dsMultiLanguageDetail.clearData();

        			var nRow = this.dsMultilanguageInfo.rowposition;
        			var sMlCd = this.dsMultilanguageInfo.getColumn(nRow, "ML_CD");

        			take.tranSelect(this, "Language", "SystemCommon.multilanguageDetailList", "", "dsMultiLanguageDetail", "sMlCd='" + sMlCd + "'", sCallBack);

                    break;
        		case "Save" :

        			take.tranSave(this, "Save", "SystemCommon.multilanguageInfo", "dsMultilanguageInfo", "", "", sCallBack);

                    break;
        		case "LanguageSave" :
        			var objGrid 	= this.divDetail.form.grdMultilanguageInfo;
        			var objDsDetail = this.dsMultiLanguageDetail;
        			var objDsInfo   = this.dsMultilanguageInfo;

        			if(objDsDetail.rowcount == 0 || objDsInfo.rowcount == 0){
        			    //take.alert(this, "info", "변경된 내역이 없습니다.");
        				take.alert(this, "Info", "MS00000001");
        				return;
        			}

        			for(var i=0; i<objDsDetail.rowcount; i++){
        				if( objDsDetail.getColumn(i, "IS_SAVE") == "N" ){
        					objDsDetail.set_updatecontrol(false);
        					if(take.isEmpty(objDsDetail.getColumn(i, "ML_CD"))){
        						objDsDetail.setColumn(i, "ML_CD",  take.nvl(objDsInfo.getColumn(objDsInfo.rowposition, "ML_CD"), ""));
        					}
        					objDsDetail.setRowType(i, Dataset.ROWTYPE_INSERT);
        					objDsDetail.set_updatecontrol(true );
        				}
        			}

        			if(!take.isDsModified(objDsDetail)){
        				//take.alert(this, "info", "변경된 내역이 없습니다.");
        				take.alert(this, "Info", "MS00000001");
        				return;
        			}

        			var arrFindRow = take.nvl(take.getFindRows(objDsDetail, "ML_CD", take.getWord(this, "ML00001513"), false), "");
        			var nIntLength = parseInt(arrFindRow.length);

         			if( nIntLength > 0 ){
         				//take.alert(this, "Info", "다국어목록 생성 후 가능합니다.");
        				take.alert(this, "Info", "MS00000006", {text:this.divDetail.form.staMlInfoTitle.text});
         				return;
         			}
        			take.tranSave(this, "LanguageSave", "SystemCommon.multilanguageDetail", "dsMultiLanguageDetail", "", "", sCallBack);

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
                case "Group" : 			//다국어그룹 콜백
                    this.fnTran('List');
                    break;
                case "List" :  			//다국어목록 콜백
        			if(parseInt(this.fv_nOldRow) > this.dsMultilanguageInfo.rowcount){
        				this.fv_nOldRow = "";
        			}
        			if(this.fv_nOldRow != ""){
        				this.dsMultilanguageInfo.set_rowposition(this.fv_nOldRow);
        			}
                    this.fnTran('Language');
                    break;
                case "Language" : 		//다국어정보 목록 콜백
                    //Script
                    break;
                case "Save" :  			//저장 콜백
                    this.fv_nOldRow = this.dsMultilanguageInfo.rowposition;
        			this.fnTran('List');
                    break;
        		case "LanguageSave" :	//다국어저장 콜백

        			this.fnTran('Language');
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
            if (take.nvl(sTranId, "")=="") sTranId = "List";

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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

        	if (   !take.isDsModified(this.dsMultilanguageGroup)
        		&& !take.isDsModified(this.dsMultilanguageInfo)
        		)
        	{
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        	// 다국어 등록 체크
        	var objDs = this.dsMultilanguageInfo;
        	var sRowType;
        	var arrFind="";
        	var sMlNm;

        	for(var i=0; i<objDs.rowcount; i++){
        		sRowType = objDs.getRowType(i);
        		if(sRowType == Dataset.ROWTYPE_INSERT || sRowType == Dataset.ROWTYPE_UPDATE){
        			sMlNm = take.nvl(objDs.getColumn(i, "ML_NM"), "");
        			arrFind = take.nvl(take.getFindRows(objDs, "ML_NM", sMlNm, false), "");
        			if(parseInt(arrFind.length) > 1){
        				//take.alert(this, "Info", "{text}", {text:"이미 등록된 다국어명 입니다."});
        				take.alert(this, "Info", "MS00000010", {text:this.divSearch.form.staMlInfoSearch.text});
        				return;
        			}
        		}

        		if(take.nvl(objDs.getColumn(i, "ML_NM"), "") == "") {
        			//take.alert(this, "Info", "{text}", {text:"다국어명은 필수 입력 입니다."});
        			take.alert(this, "Info", "MS00000014", {text:this.divSearch.form.staMlInfoSearch.text});
        			return;
        		}
        	}
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMultilanguageInfo";

            if( sGrdId == "grdMultilanguageInfo" )
        	{
                nRow = this.dsMultilanguageInfo.addRow();
        		var sMlGroup = this.dsMultilanguageGroup.getColumn(this.dsMultilanguageGroup.rowposition, "CODE_ID");

        		if( sMlGroup == "0" ){
        			take.alert(this, "String", "좌측에 다국어 그룹을 선택후 신규 저장하시기 바랍니다.", "");
        			return;
        		}
        		else
        		{
        			//기본 값 세팅(그룹아이디, 사용여부)
        			this.dsMultilanguageInfo.setColumn(nRow, "ML_CD", take.getWord(this, "ML00001513"));
        			this.dsMultilanguageInfo.setColumn(nRow, "ML_GROUP", sMlGroup);
        			this.dsMultilanguageInfo.setColumn(nRow, "USE_YN", "Y");

        			//신규 코드임으로 다국어 데이터 Clear
        			this.dsMultiLanguageDetail.clearData();
        		}
        	}
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMultilanguageInfo";

            var objDataset = this.dsMultilanguageInfo;
            var arrChkRow = take.getChkRow(objDataset);

            if(arrChkRow.length == 0){
                //take.alert(this, "Info", "선택된 항목이 없습니다.");
        		take.alert(this, "Info", "MS00000008");
                return;
            }

            var bRowDel = take.confirm(this, "question", "MS00000071");
        	//take.confirm(this, "question", "선택된 항목(들)을 삭제 하시겠습니까?");
            if (bRowDel){
                for(var i=0; i<arrChkRow.length; i++) {
                    objDataset.setColumn(arrChkRow[i], "USE_YN", "N");
                }

                this.fnTran("Save");
            }
        };

        this.fnPrint = function()
        {
        	var agrKey = {
        					sPdfType:"sys/SC020"
        					, sNamespace:"SystemCommon.multilanguageInfoList"
        				};
        	take.openPopup(this, "comPrintPop", "frm::com/comPrintPop.xfdl", agrKey, "",
        		function(sId, sRtn){
        		},
        	false);
        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        this.dsMultilanguageGroup_onrowposchanged = function(obj,e)
        {
            //0번로우 (주소록) 선택시 상단 로우 선택되게 처리.
            if( obj.rowposition == 0 ){
        		obj.set_rowposition(1);
        	}
        };

        this.btnSaveSub_onclick = function(obj,e)
        {
        	this.fnTran('LanguageSave');
        };

        this.grdMultilanguageInfo_onselectchanged = function(obj,e)
        {
        	if(e.col != 0){
                this.fnTran('Language');
        	}
        };

        this.dsMultilanguageInfo_onrowposchanged = function(obj,e)
        {
        	//this.fnTran('Language');
        };

        this.divDetail_grdMultilanguageGroup_oncellclick = function(obj,e)
        {
            if(e.clickitem == "") {
                this.fnSearch('List');
            }
        };

        this.divSearch_edtMlInfoSearch_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch("List");
        	}
        };

        //일괄작업용
        this.divDetail_Button00_onclick = function(obj,e)
        {
        	var nRow = this.dsMultilanguageInfo.rowposition;
        	var mlNm = this.dsMultilanguageInfo.getColumn(nRow, "ML_NM");

        	this.dsMultiLanguageDetail.setColumn(0, "ML_LANG_TXT", mlNm);
        	this.dsMultiLanguageDetail.setColumn(1, "ML_LANG_TXT", mlNm);

        	this.fnTran('LanguageSave');
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
        };
        this.divDetail_Static24_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.take_onload,this);
            this.divSearch.form.edtMlInfoSearch.addEventHandler("onkeyup",this.divSearch_edtMlInfoSearch_onkeyup,this);
            this.divDetail.form.grdMultilanguageGroup.addEventHandler("oncellclick",this.divDetail_grdMultilanguageGroup_oncellclick,this);
            this.divDetail.form.btnSpliter.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.btnSpliter.addEventHandler("onclick",this.divDetail_btnSpliter00_onclick,this);
            this.divDetail.form.grdMultilanguageInfo.addEventHandler("onselectchanged",this.grdMultilanguageInfo_onselectchanged,this);
            this.divDetail.form.btnSaveSub.addEventHandler("onclick",this.btnSaveSub_onclick,this);
            this.divDetail.form.Button00.addEventHandler("onclick",this.divDetail_Button00_onclick,this);
            this.dsMultilanguageGroup.addEventHandler("onrowposchanged",this.dsMultilanguageGroup_onrowposchanged,this);
        };
        this.loadIncludeScript("SC020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
