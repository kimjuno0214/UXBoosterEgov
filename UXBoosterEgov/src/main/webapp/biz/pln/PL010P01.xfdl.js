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
            this.set_titletext("시험기관선택팝업");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,190);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">어린이용 물놀이 기구</Col><Col id=\"Column2\">3</Col><Col id=\"Column1\">수용보조용품(착용형)</Col><Col id=\"Column3\"/><Col id=\"Column4\">Y</Col><Col id=\"Column6\">Y</Col><Col id=\"Column8\">Y</Col><Col id=\"Column10\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W\r\n20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00","22","24","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시험기관 선택");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList00","20","50",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"7\" text=\"시험기관\"/><Cell row=\"1\" text=\"KCL\"/><Cell row=\"1\" col=\"1\" text=\"KTR\"/><Cell row=\"1\" col=\"2\" text=\"KTC\"/><Cell row=\"1\" col=\"3\" text=\"KATRI\"/><Cell row=\"1\" col=\"4\" text=\"FITI\"/><Cell row=\"1\" col=\"5\" text=\"KOTITI\"/><Cell row=\"1\" col=\"6\" text=\"KTL\"/></Band><Band id=\"body\"><Cell text=\"bind:Column4\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column5\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Column6\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:Column7\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:Column8\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" text=\"bind:Column9\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"6\" text=\"bind:Column10\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button44","451","155","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_check01");
            this.addChild(obj.name, obj);

            obj = new Button("Button45","512","155","58","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel01");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("PL010P01.xfdl", function() {
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
            this.grdProgList00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
        };
        this.loadIncludeScript("PL010P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
