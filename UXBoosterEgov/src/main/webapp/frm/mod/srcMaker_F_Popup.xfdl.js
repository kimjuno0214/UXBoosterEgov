(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("srcMaker_Popup");
            this.set_titletext("EasyBAM Source Maker_PopUp");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\"/><Col id=\"IMAGE\"/><Col id=\"NAME\">일반그리드</Col></Row><Row><Col id=\"IMAGE\"/><Col id=\"NAME\">마스터,디테일</Col></Row><Row><Col id=\"IMAGE\"/><Col id=\"NAME\">카테고리,그리드</Col></Row><Row><Col id=\"IMAGE\"/><Col id=\"NAME\">그리드3개</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTree", this);
            obj._setContents("<ColumnInfo><Column id=\"GRID_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"LEV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRID_TYPE\">그리드종류</Col><Col id=\"LEV\">0</Col><Col id=\"CONTENTS\">이미지1</Col></Row><Row><Col id=\"LEV\">1</Col><Col id=\"GRID_TYPE\">메인</Col><Col id=\"CONTENTS\">이미지2</Col></Row><Row><Col id=\"LEV\">1</Col><Col id=\"GRID_TYPE\">메인,서브</Col><Col id=\"CONTENTS\">이미지3</Col></Row><Row><Col id=\"LEV\">1</Col><Col id=\"GRID_TYPE\">마스터,디테일</Col><Col id=\"CONTENTS\">이미지4</Col></Row><Row><Col id=\"LEV\">1</Col><Col id=\"GRID_TYPE\">메인,서브,서브</Col><Col id=\"CONTENTS\">이미지5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMain","0","40",null,null,"720","10",null,null,null,null,this);
            obj.set_initvalueid("iv_Grid1");
            obj.set_taborder("0");
            obj.set_binddataset("dsTree");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusebutton("noclick");
            obj.set_treeuseline("false");
            obj.set_cssclass("gid_WF_Noborder");
            obj.set_treeuseimage("true");
            obj.set_treeasynctoggle("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:GRID_TYPE\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSub","grdMain:20","40",null,null,"0","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"250\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"Image\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:NAME\" displaytype=\"text\" imagestretch=\"fixaspectratio\"/><Cell row=\"1\" col=\"1\" text=\"bind:IMAGE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","910","10",null,"22","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("staLable02","1","1","154","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화면 Layout");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("srcMaker_F_Popup.xfdl", function() {
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
        this.fv_sGrdNm = null;	// 선택된 그리드종류
        this.fv_sFlag  = "F"	// 폼 구분 값

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.srcMaker_Popup_onload = function(obj, e)
        {
           if (takeit.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		//this.txaQuery.set_value(this.parent.oText);
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
            if (takeit.nvl(sTranId, "")=="") sTranId = "Transation id";

            //변수선언
            var sUrl   = "",      //서비스 URL
                sInDs  = "",      //데이터셋을 검색조건으로 보낼경우 사용 -->선택
                sOutDs = "",      //데이터를 받아올 데이터셋 지정
                sParam = "",      //파라메터 사용 안 할 경우
                sCallBack = "";        //콜백 처리 함수

            sCallBack  = "fnCallback" ;

            switch(sTranId)
            {
                case "Transaction id 01" :
                    Dataset.clearData();
                    //Script
                    break;
                case "Transaction id 02" :  //코드 조회
                    Dataset.clearData();//Script
                    //Script
                    break;
                case "Transaction id 03" : //다국어 조회
                    Dataset.clearData();//Script
                    //Script
                    break;
                case "Save transation id 01" :
                    //Script
                    break;
                case "Save transation id 01" :  //코드저장
                    //Script
                    break;
                default :
                    break;
            }

            //트랜젝션 공통함수 호출 -->필수(모든 트랜젝션을 공통으로 처리)
            takeit.transaction(this,sTranId, sUrl, sInDs, sOutDs, sParam, sCallBack);
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
                case "Transation id 01" : //조회 콜백
                    //Script
                    break;
                case "Transation id 02" :  //조회 콜백
                    //Script
                    break;
                case "Transation id 03" : //조회 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
                case "Save transation id 01" :  //저장 콜백
                    //Script
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
            if (takeit.nvl(sTranId, "")=="") sTranId = "Transation id";

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
            if (takeit.nvl(sTranId, "")=="") sTranId = "Save transation id";

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
            if (takeit.nvl(sGrdId, "")=="") sGrdId = "Grid00";

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
            if (takeit.nvl(sGrdId, "")=="") sGrdId = "Grid00";

            //Script
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * btnOk_onclick : 확인 버튼 클릭
        */
        this.btnOk_onclick = function(obj,e)
        {
        	var objDs = this.dsInfo;

        	for (var i=0; i<objDs.rowcount; i++)
        	{
        		if (objDs.getColumn(i, "CHK") == 1)
        		{
        			var index = i;
        			this.fv_sGrdNm = objDs.getColumn(i, "NAME");
        		}
        	}
        	this.fnSendChildValue(this.fv_sGrdNm,this.fv_sFlag);
        };

        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnSendChildValue : 부모창으로 선택한 그리드명칭을 전달
         * @param  {String} name 선택한 그리드 명칭
         * @param  {String} code 폼 구분 값
         * @example this.fnSendChildValue(name);
         */
        this.fnSendChildValue = function(name,code)
        {
        	this.opener.fnSetChildValue(name,code);
            this.close();
        }



        this.grdSub_oncellclick = function(obj,e)
        {
        	// 체크박스를 라디오 처럼
        	var objDs 	= this.dsInfo;
        	if (e.cell == 0)
        	{
        		for(var i=0; i<objDs.rowcount; i++)
        		{
        			objDs.setColumn(i, "CHK", 0);
        		}
        		objDs.setColumn(e.row, "CHK", 1);
        	}


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.srcMaker_Popup_onload,this);
            this.grdSub.addEventHandler("oncellclick",this.grdSub_oncellclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("srcMaker_F_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
