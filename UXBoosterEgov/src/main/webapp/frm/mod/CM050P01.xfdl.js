(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM050P01");
            this.set_titletext("팝업공지대상");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTarget", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00_00_01_00","20","41",null,"5","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H5");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","Static01_00_00_01_00:0",null,"72","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_searchBox01");
            this.addChild(obj.name, obj);

            obj = new Static("staCode","10","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("공지대상코드");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staName","10","staCode:8","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("공지대상명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCode","staCode:10","10",null,"21","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","staName:10","edtCode:8",null,"21","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","42.50%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","20","btnShowHide:20",null,null,"20","63",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsTarget");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_nodataimage("url(\'theme://images/Alert_nodataimage.png\')");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"90\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"아이디\"/><Cell col=\"3\" text=\"대상자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:TARGET_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TARGET_ID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TARGET_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"21","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("대상자 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,null,"57","23","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_cancel01");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnEnter",null,null,"57","23","btnCancle:3","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_check01");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","20",null,null,"20","20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20",null,null,"20","20","Static01_00_00_00:23",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","20","btnShowHide:0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("H20");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","46","21","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_search03");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtCode","value","dsSearch","USER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtName","value","dsSearch","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CM050P01.xfdl", function() {
        /**
        *  회의록 작성
        *
        *  @MenuPath    회의록 > 회의록 작성
        *  @FileName    MT010P02.xfdl
        *  @Creator     전영찬
        *  @CreateDate  2019.11.18
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.11.18      전영찬             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd  = nexacro.getApplication().av_sProjectCd;    // ProjectCd
        this.fv_nChkRow     = null;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
                this.fnInit();
            }
        };

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "targetList";

            this.dsTarget.clearData();
        	this.dsSearch.setColumn(0, "TARGET_CD", this.divSearch.form.edtCode.value);
        	this.dsSearch.setColumn(0, "TARGET_NM", this.divSearch.form.edtName.value);

            take.tranSelect(this, sTranId, "BoardManagement.popupTargetList", "dsSearch", "dsTarget", "", "fnCallback");
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // 조회버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e)
        {
            this.fnSearch('targetList');
        };

        //확인버튼 클릭 이벤트
        this.btnEnter_onclick = function(obj,e)
        {
        	var objDs  = this.dsTarget;
            var arrChkRow = take.getChkRow(objDs,"CHK");
            var sRtn = "";

            if(arrChkRow.length == 0){
                take.alert(this, "", "대상자 선택을 부탁드립니다.");
                return;
            }

            for(var i=0; i<arrChkRow.length; i++){
                if(i!=0){
                    sRtn += '::';
                }
                sRtn += this.dsTarget.getColumn(arrChkRow[i], "TARGET_CD");
        		sRtn += ','+ this.dsTarget.getColumn(arrChkRow[i], "TARGET_NM");
        		sRtn += ','+ this.dsTarget.getColumn(arrChkRow[i], "TARGET_GUBUN");
            }

            this.close(sRtn);
        };

        // Edit_onkeyup : 엔터로 강제 포커스아웃
        this.Edit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
                var sEdtId = obj.name.substr(3);

                switch(sEdtId) {
                case "Code":
                    this.divSearch.form.edtName.setFocus();
                	break;
                case "Name":
                    this.fnSearch('targetList');
                	break;
                default:
                    break;
                }
            }
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @param  {String} N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
            var objDivSearch = this.divSearch.form;
            var objParent = this.parent;

            objDivSearch.edtName.setFocus();
        };

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
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
                case "targetList" :  //조회 콜백
        			this.divDetail.form.staTitle.set_text("대상자 목록 (" + this.dsTarget.rowcount + "건)");

        			var objDs = this.opener.dsNotiTarget;
        			var objBindDs = this.divDetail.form.grdList.getBindDataset();

        			for( var i=0; i<objDs.rowcount; i++ )
        			{
        				var sTargetCd = objDs.getColumn(i, "TARGET_CD");
        				var nRow = objBindDs.findRowAsNF("TARGET_CD", sTargetCd);

        				if( nRow != -1 )
        				{
        					objBindDs.setColumn(nRow, "CHK", "1");
        				}
        			}

                    break;
                default :
                    break;
            }
        };

        // this.divSearch_grdList_onselectchanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        // {
        // 	var objDs = this.opener.dsNotiTarget;
        //     var objBindDs = this.divSearch.form.grdList.getBindDataset();
        //
        // 	for( var i=0; i<objDs.rowcount; i++ )
        // 	{
        // 		var sTargetCd = objDs.getColumn(i, "TARGET_CD");
        // 		var nRow = objBindDs.findRowAsNF("TARGET_CD", sTargetCd);
        //
        // 		if( nRow != -1 )
        // 		{
        // 			trace( "!@!@>> target_cd:  " + objBindDs.getColumn(nRow, "TARGET_CD") );
        //
        // 			objBindDs.setColumn(nRow, "TARGET_ID", "1000");
        // 			objBindDs.setColumn(nRow, "CHK", "1");
        // 		}
        // 	}
        // };

        this.divSearch_grdList_onheadclick = function(obj,e)
        {
        	var sHChk = obj.getCellProperty("head",0,"text");
        	var sVal = ( "0"  == sHChk ) ? "1" : "0";
        	obj.setCellProperty("head",0,"text", sVal);

        	for( var i=0; i<this.dsTarget.rowcount; i++ )
        	{
        		this.dsTarget.setColumn(i, "CHK", sVal);
        	}
        };

        this.btnCancle_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.edtCode.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divSearch.form.edtName.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.btnShowHide.addEventHandler("onclick",this.btnShowHide_onclick,this);
            this.divDetail.form.grdList.addEventHandler("onheadclick",this.divSearch_grdList_onheadclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnEnter.addEventHandler("onclick",this.btnEnter_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("CM050P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
