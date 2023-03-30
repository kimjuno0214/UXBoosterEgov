(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TM020P01");
            this.set_titletext("타임라인팝업조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTimeLineDatailDatil", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_IMG\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TIMELINE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMN0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_BLOB\" type=\"STRING\" size=\"256\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0","500","460",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("dvi_WF_tabBox01");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgMainViewer","10","10",null,"280","10",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_stretch("fixaspectratio");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divDetail","10","300","478","148",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_replyBox02");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divDetail.form
            obj = new Layout("default","",0,0,this.divMain.form.divDetail.form,function(p){});
            this.divMain.form.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",500,460,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divMain.form.imgMainViewer","image","dsTimeLineDatailDatil","TIMELINE_BLOB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TM020P01.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    tm > TM020P01
        *  @FileName    TM020P01.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.09.19
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.09.19      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sParentProjectCd   = this.parent.sProjectCd;
        this.fv_sParentMenuCd      = this.parent.sMenuCd;
        this.fv_sParentTimelineSeq = this.parent.sTimelineSeq;
        this.fv_sParentDetailSeq   = this.parent.nDetailSeq;
        this.fv_sParentDetailImg   = this.parent.sDetailImg;
        this.fv_sParentDetailImgNm = this.parent.sFileNm;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.TM020P01_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                this.fnInit();
           }
        }

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
            if (take.nvl(sTranId, "")=="") sTranId = "TimeLineDetailSearch";

        	this.fv_sParentProjectCd   = take.nvl(this.parent.sProjectCd, "");
        	this.fv_sParentMenuCd	   = take.nvl(this.parent.sMenuCd, "");
        	this.fv_sParentTimelineSeq = take.nvl(this.parent.sTimelineSeq, "");
        	this.fv_sParentDetailSeq   = take.nvl(this.parent.nDetailSeq, "");

        	take.tranSelect
        	(
        		this,
        		"TimeLineDetailSearch",
        		"TimelineManagement.timelineDetailDetail",
        		"",
        		"dsTimeLineDatailDatil",
        		"    PROJECT_CD='" 	 + this.fv_sParentProjectCd
        		+ "' MENU_CD='" 	 + this.fv_sParentMenuCd
        		+ "' TIMELINE_SEQ='" + this.fv_sParentTimelineSeq
        		+ "' DETAIL_SEQ='"   + this.fv_sParentDetailSeq
        		+ "'",
        		"fnCallback"
        	)
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
            take.tranSave(this, sTranId, "NAMESPACE", "sInDs", "sOutDs", "sParam", "fnCallback");
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * divDetail_ImageViewer_onclick : 하단 이미지 목록 클릭
        */
        this.divDetail_ImageViewer_onclick = function(obj,e)
        {
        	var sImgId    = obj.id
        	var nRow      = sImgId.split("Img")[1];
        	var sFileBolb = this.dsFile.getColumn(nRow, "FILE_BLOB");
        	this.divMain.form.imgMainViewer.set_image(sFileBolb);

        	var arrCompList = new Array();
        	arrCompList = take.ComponentList(this.divMain.form.divDetail.form);
        	for(var i=0; i<arrCompList.length; i++){
        		this.divMain.form.divDetail.form.components["Img"+i].set_border("");
        	}
        	obj.set_border("2px solid #425dd5");
        };

        /**
        * divDetail_ImageViewer_onclick : X 버튼 클릭 __ 팝업 창 닫기
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	// 동적 컴포넌트 생성 함수 호출
        	this.fnInnerCompSet("divDetail", this.parent.objFileDs);
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {

        };

        /**
         * fnInnerCompSet : Div 내부에 이미지,동영상 갯수 만큼 이미지뷰어 컴포넌트 동적 생성
         * @example this.fnInnerCompSet(objFileDs);
         */
        this.fnInnerCompSet = function (objDivNm, objFileDs)
        {
        	var sImgNm    = "Img";	// 이미지뷰어 ID
        	var nInterval = 15;		// 이미지뷰어 간격
        	var nFileCnt  = 0;		// 이미지 갯수 카운트

        	var objDs = this.dsFile;
        	objDs.copyData(objFileDs);

        	objDs.set_filterstr("ATTACH_CD == '"+this.fv_sParentDetailImg+"'");
        	for (var j=0; j<objDs.rowcount; j++){
        		if (objDs.getColumn(j, "ATTACH_CD") == this.fv_sParentDetailImg){
        			Number(nFileCnt++);
        		}
        	}
        	// 선택된 타임라인 이름으로 findRowExpr 사용하여 선택된 파일 값 찾아 메인 뷰어에 바인딩
        	var nFindRowImgNm = this.dsFile.findRowExpr("FILE_NM=='"+this.fv_sParentDetailImgNm+"'");
        	var sMainImgBlob  = objDs.getColumn(nFindRowImgNm, "FILE_BLOB");
        	this.divMain.form.imgMainViewer.set_image(sMainImgBlob);

        	for(var i = 0; i<nFileCnt; i++)
        	{
        		//  이미지뷰어 생성
        		var objImgViewer = new ImageViewer();

        		nImgLeft   = 9;
        		nImgTop    = 24;
        		nImgWidth  = 100;
        		nImgHeight = 100;

        		// 최초 left의 간격이 10 이후 20으로 변경됨
        		if(i==0) objImgViewer.init(sImgNm+i, 10, nImgTop,  nImgWidth, nImgHeight);
        		else objImgViewer.init(sImgNm+i, (nImgLeft*i)+(nImgWidth*i)+nInterval, nImgTop,  nImgWidth, nImgHeight);

        		// 이미지가 바인딩 될 상품별 이미지뷰어 생성
        		this.divMain.form.divDetail.form.addChild(sImgNm+i, objImgViewer);

        		objImgViewer.set_image(objDs.getColumn(i, "FILE_BLOB"));
        		objImgViewer.set_stretch("fit"); // fixaspectratio
        		objImgViewer.addEventHandler("onclick", this.divDetail_ImageViewer_onclick, this);

        		// 이미지뷰어 표시
        		objImgViewer.show();
        		//objImgViewer.setFocus();
        		this.divMain.form.divDetail.form.resetScroll();
        	}
        	// 부모 폼에서 선택된 이미지 row 포커스 선택
        	this.divMain.form.divDetail.form.components["Img"+nFindRowImgNm].setFocus();

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
                case "TimeLineDetailSearch" : //조회 콜백
        			/*this.fnInnerCompSet("divDetail", this.parent.objFileDs);*/
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TM020P01_onload,this);
        };
        this.loadIncludeScript("TM020P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
