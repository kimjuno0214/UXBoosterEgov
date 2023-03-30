(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PL020S01");
            this.set_titletext("시료인계");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1110,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022-06-02</Col><Col id=\"Column2\">33</Col><Col id=\"Column1\">KTL</Col><Col id=\"Column3\">작성중</Col><Col id=\"Column4\">생성</Col></Row><Row><Col id=\"Column0\">2022-05-30</Col><Col id=\"Column1\">KCT</Col><Col id=\"Column2\">20</Col><Col id=\"Column3\">작성중</Col><Col id=\"Column4\">재생성</Col></Row><Row><Col id=\"Column0\">2022-05-30</Col><Col id=\"Column1\">KATRI</Col><Col id=\"Column2\">20</Col><Col id=\"Column3\">작성중</Col><Col id=\"Column4\">재생성</Col></Row><Row><Col id=\"Column0\">2022-04-11</Col><Col id=\"Column1\">KTL</Col><Col id=\"Column2\">30</Col><Col id=\"Column3\">완료</Col></Row><Row><Col id=\"Column0\">2022-04-11</Col><Col id=\"Column1\">KCT</Col><Col id=\"Column2\">30</Col><Col id=\"Column3\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList00_00_00_00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2022-정기01-01-001</Col><Col id=\"Column2\">20220405</Col><Col id=\"Column1\">물총</Col><Col id=\"Column3\">어린이 물총</Col><Col id=\"Column4\">1</Col><Col id=\"Column6\">20220429</Col><Col id=\"Column8\">https://www.coupang.com/vp/products/6741488409?itemId=3475551094&amp;vendorItemId=71461872786&amp;sourceType=cmgoms&amp;isAddedCart=</Col><Col id=\"Column10\">Y</Col><Col id=\"Column5\">KCL</Col><Col id=\"Column7\">K0021-20123-1231</Col></Row><Row><Col id=\"Column0\">2022-정기01-01-002</Col><Col id=\"Column2\">20220406</Col><Col id=\"Column1\">물총</Col><Col id=\"Column3\">어린이 물총</Col><Col id=\"Column4\">1</Col><Col id=\"Column5\">KTC</Col><Col id=\"Column6\">20220429</Col><Col id=\"Column7\">K0021-20123-1231</Col><Col id=\"Column8\">https://www.coupang.com/vp/products/6741488409?itemId=3475551094&amp;vendorItemId=71461872786&amp;sourceType=cmgoms&amp;isAddedCart=</Col></Row><Row><Col id=\"Column0\">2022-정기01-01-003</Col><Col id=\"Column2\">20220407</Col><Col id=\"Column1\">물총</Col><Col id=\"Column3\">어린이 물총</Col><Col id=\"Column6\">20220429</Col><Col id=\"Column7\">K0021-20123-1231</Col><Col id=\"Column8\">https://www.coupang.com/vp/products/6741488409?itemId=3475551094&amp;vendorItemId=71461872786&amp;sourceType=cmgoms&amp;isAddedCart=</Col><Col id=\"Column4\">1</Col><Col id=\"Column5\">KATRI</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staProgDetailT00_00","10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("시료인계");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList","10","staProgDetailT00_00:5",null,null,"800","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("takegrid").set("no");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"93\"/><Column size=\"72\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"인계일자\"/><Cell col=\"1\" text=\"인계기관\"/><Cell col=\"2\" text=\"인계수량\"/><Cell col=\"3\" text=\"진행상태\"/><Cell col=\"4\" text=\"생성\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"center\"/><Cell col=\"4\" textAlign=\"center\" displaytype=\"expr:Column4 == &apos;생성&apos;?&apos;buttoncontrol&apos;:Column4 == &apos;재생성&apos;?&apos;buttoncontrol&apos;:&apos;none&apos;\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staProgDetailT00_00_00","grdProgList:10","10","125","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("인계시료");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdProgList00","grdProgList:10","36",null,null,"10","270",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList00_00_00_00");
            obj.set_extendsizetype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"시료번호\"/><Cell col=\"1\" text=\"세세부품명\"/><Cell col=\"2\" text=\"구입일자\"/><Cell col=\"3\" text=\"제품명\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"인계기관\"/><Cell col=\"6\" text=\"인계일자\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:Column1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:Column2\" textAlign=\"center\" displaytype=\"calendarcontrol\"/><Cell col=\"3\" text=\"bind:Column3\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Column4\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:Column5\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:Column6\" textAlign=\"center\" displaytype=\"calendarcontrol\"/></Band></Format></Formats>");
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
        this.registerScript("PL020S01.xfdl", function() {
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
            this.grdProgList.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
            this.grdProgList00.addEventHandler("onselectchanged",this.grdProgList_onselectchanged,this);
        };
        this.loadIncludeScript("PL020S01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
