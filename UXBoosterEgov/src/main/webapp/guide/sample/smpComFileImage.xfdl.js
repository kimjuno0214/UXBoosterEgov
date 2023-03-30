(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleComFile");
            this.set_titletext("(샘플)파일업로드 공통");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"atchFileId\">AF00000600</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnInit","152","47","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(" 초기화");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","224","47","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAtchFileId","17","47","133","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgViewer","571","80","398","177",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Div("divComFileSingle","570","48","398","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("frm::com/comFileSingle.xfdl");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","367","47","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","296","47","69","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이미지뷰어 연동");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divComFileSingle
            obj = new Layout("default","",0,0,this.divComFileSingle.form,function(p){});
            this.divComFileSingle.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",530,25,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtAtchFileId","value","dsInfo","atchFileId");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comFileSingle.xfdl");
        };
        
        // User Script
        this.registerScript("smpComFileImage.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    -
         *  @FileName    comFileSingle.xfdl
         *  @Creator     정해원
         *  @CreateDate  2020.09.23
         *  @Version     1.0
         *  @Desction    첨부파일공통(일반) - ATTACH_INFO와 연동
         *
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2020.09.23      정해원             최초 생성
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        	this.fv_divFile;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        	/**
        	* Form_onload 최초 로드시 발생되는 이벤트 (필수)
        	*/
        	this.comFileSingle_onload = function(obj, e)
        	{
        		if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        		{
        			this.fnInit();
        		}
        	};

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        	this.fnInit = function(){
        	};

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/

        ////////////////////////////////////////테스트용 스크립트
        this.FILETYPE_ETC = "06";
        this.btnInit_onclick = function(obj,e)
        {
        	this.fv_divFile = this.divComFileSingle.form;
        	this.fv_divFile.fn_setAtchFileTypeCd(this.FILETYPE_ETC);

        	//용량제한 1Mbyte
        	this.fv_divFile.fn_setMaxLength(1 * 1024);

        	//이미지URL DataSet연결
        	this.fv_divFile.fn_setImageViewer(this.imgViewer);
        	this.fv_divFile.fnInitComponent(this);
        };

        this.btnNew_onclick = function(obj,e)
        {
        	//첨부파일 ID생성
        	this.fv_divFile.fnSearchAtchFileId(this,
        		function(rtnValue){
        			//첨부파일 ID 변경
        			this.fv_divFile.fn_setAtchFileId(rtnValue.resultData);

        			//조회
        			this.edtAtchFileId.set_value(rtnValue.resultData);
        			this.fv_divFile.fnSearchFileList(this);
        		}
        	);
        };

        this.btnSave_onclick = function(obj,e)
        {
        	//데이터변경 / 파일 수정 여부
        	if (!this.fv_divFile.fn_isUpdate()){
        		take.alert(this, "info", "변경된 내역이 없습니다.");
        		return;
        	}

        	//파일 업로드 / 저장
        	this.fv_divFile.fnUploadSaveFileList(this,
        		function(rtnValue){
        			if(rtnValue.result){
        				//reload하기
        			}
        		}
        	);
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fv_divFile.fn_setAtchFileId(this.edtAtchFileId.value);
        	this.fv_divFile.fnSearchFileList(this);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.comFileSingle_onload,this);
            this.btnInit.addEventHandler("onclick",this.btnInit_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("smpComFileImage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
