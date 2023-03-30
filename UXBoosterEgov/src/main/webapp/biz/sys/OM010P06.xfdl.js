(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OM010P06");
            this.set_titletext("다국어매핑팝업");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMlGroupCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultilanguageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ML_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ML_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"ML_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ML_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ML_TYPE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch","814","20","46","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_search03");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","48",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("다국어그룹");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMlGroupSearch","staCode:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsMlGroupCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCode00","355","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("다국어");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMlInfoSearch","staCode00:10","10",null,"21","198",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","20","30","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("W\r\n50");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static11","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","355","30","285","11",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","860","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.48%","89","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","62",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMultilanguageInfo");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\" band=\"left\"/><Column size=\"200\"/><Column size=\"150\" band=\"right\"/><Column size=\"150\" band=\"right\"/><Column size=\"40\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"다국어코드\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"다국어명\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"기타\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"상세설명\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"사용\" autosizecol=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:ML_CD\" textAlign=\"center\" autosizecol=\"limitmin\"/><Cell col=\"1\" text=\"bind:ML_NM\" edittype=\"none\" autosizecol=\"limitmin\"/><Cell col=\"2\" text=\"bind:ML_ETC\" edittype=\"none\" autosizecol=\"limitmin\"/><Cell col=\"3\" text=\"bind:DESC_TXT\" edittype=\"none\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"bind:USE_YN\" displaytype=\"checkboxcontrol\" textAlign=\"center\" autosizecol=\"limitmin\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static24","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("다국어 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","42",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"Static03:0","57","23","80",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnSave:3","458","57","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OM010P06.xfdl", function() {
        /**
        *  다국어관리
        *
        *  @MenuPath    시스템공통 > 다국어관리 > 다국어관리
        *  @FileName    OM010P06.xfdl
        *  @Creator     이동건
        *  @CreateDate  2019.08.17
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.11.17      이동건             최초 생성
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
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.OM010P05_onload = function(obj,e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		if(!take.isEmpty(this.getOwnerFrame().argInSearchText)){
        			this.divSearch.form.edtMlInfoSearch.set_value(this.getOwnerFrame().argInSearchText);
        		}

                take.tranCode(this, ["00011"], ["dsMlGroupCode"], ["ALL"],
                function (sId, nErrCd, sErrMsg)
        		{
        			this.divSearch.form.cboMlGroupSearch.set_index(1);
        			this.fnTran('List');
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
        		case "List" :
        			this.dsMultilanguageInfo.clearData();

        			var sMlGroup = this.divSearch.form.cboMlGroupSearch.value;
        			var sMlNm    = take.nvl(this.divSearch.form.edtMlInfoSearch.value, "");
        			take.tranSelect
        			(
        				this,
        				"List",
        				"SystemCommon.multilanguageInfoList",
        				"",
        				"dsMultilanguageInfo",
        				"sMlGroup='" + sMlGroup + "' ML_NM='" + sMlNm + "'",
        				sCallBack
        			);

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
                case "List" :  			//다국어목록 콜백
                    //trace(this.dsMultilanguageInfo.saveXML());
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        //N/A

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //조회 버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnTran('List');
        };

        //선택 버튼 클릭 이벤트
        this.btnSelect_onclick = function(obj,e)
        {
        	this.fnSelect();
        };

        //다국어 리스트 더블 클릭 이벤트
        this.grdMultilanguageInfo_oncelldblclick = function(obj,e)
        {
        	this.fnSelect();
        };
        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnUserFunction : 사용자 함수
         * @param  {String} sParam 문자형 인자
         * @param  {Number} nParam 숫자형 인자
         * @example this.fnSelect(sParam, nParam);
         */
        this.fnSelect = function()
        {
            var objDs    = this.dsMultilanguageInfo;
            var nFromRow = objDs.rowposition;
        	if(nFromRow == -1) {
        		take.alert(this, "warn", "다국어를 선택해주세요", "");
        		return;
        	}

        	var sRtn 	 = objDs.getColumn(nFromRow, "ML_CD");
        		sRtn	+= ','+ objDs.getColumn(nFromRow, "ML_NM");
        		sRtn	+= ','+ objDs.getColumn(nFromRow, "DESC_TXT");
        		sRtn	+= ','+ objDs.getColumn(nFromRow, "ML_TYPE");
        		sRtn	+= ','+ objDs.getColumn(nFromRow, "ML_TYPE_NM");

        	//var sMlCd = this.dsMultilanguageInfo.getColumn(nFromRow, "ML_CD");

        	this.close(sRtn);
        }

        // 다국어명 검색
        this.edtMlInfoSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnTran("List");
        	}
        };
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.OM010P05_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.edtMlInfoSearch.addEventHandler("onkeyup",this.edtMlInfoSearch_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.grdMultilanguageInfo.addEventHandler("oncelldblclick",this.grdMultilanguageInfo_oncelldblclick,this);
            this.Static03.addEventHandler("onclick",this.Static01_01_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("OM010P06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
