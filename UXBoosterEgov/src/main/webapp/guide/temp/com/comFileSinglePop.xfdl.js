(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comFileSinglePop");
            this.set_background("#ffffff");
            this.set_titletext("파일첨부");
            if (Form == this.constructor)
            {
                this._setFormPosition(608,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static09_00_01","0","0","400","10",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_01_00","0",null,"400","10",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","0","0","10","240",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("RGBA(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00",null,"0","10","240","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n1\r\n0");
            obj.set_background("rgba(224,159,30,0.40)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divFile","10","10","530","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_url("frm::com/comFileSingle.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSave","divFile:2","10","46","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_save02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divFile
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::com/comFileSingle.xfdl");
        };
        
        // User Script
        this.registerScript("comFileSinglePop.xfdl", function() {
        /**
         *  SYSTEM FORM NAME
         *
         *  @MenuPath    com
         *  @FileName    comFileSinglePop.xfdl
         *  @Creator
         *  @CreateDate  2020.10.07
         *  @Version     1.0
         *  @Desction    단일 첨부파일 팝업
         *
         * 	var sOpt = "";
         * 	var oArg = {
         * 		  argInDsPopup		: this.dsGuarantee
         * 		, argInColIdPopup	: 'ATTACH_ID'
         * 		, argInAtchFileTypeCd	: 'WBETC'
         * 		, argInAtchFileId		: this.attachFileId
         * 	};
         *
         * 	take.openPopup(this, "comFileSinglePop", "frm::com/comFileSinglePop.xfdl", oArg, sOpt,
         * 		function(sId, oArgs){
         * 			//return
         * 		}
         * 	);
         *
         ************** 소스 수정 이력 *************************************************
         *    date          Modifier            Description
         *******************************************************************************
         *  2020.10.07                          최초 생성
         *******************************************************************************
         */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_divFile;
        this.fv_attachFileId;
        this.fv_objDs		= null;
        this.fv_colId		= "";

        /*********************************************************
         * 1.2 FORM EVENT 영역(onload등)
         ********************************************************/
        /**
         * Form_onload 최초 로드시 발생되는 이벤트 (필수)
         */
        this.form_onload = function(obj, e)
        {
        	this.fnInit();
        };


        /*********************************************************
         * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
         ********************************************************/
        /**
         * fnInit : 초기화
         * @example this.fnInit();
         */
        this.fnInit = function(){
        	//바로 binding하려 할 경우
        	if(!take.isEmpty(this.getOwnerFrame().argInDsPopup))
        		this.fv_objDs = this.getOwnerFrame().argInDsPopup;
        	if(!take.isEmpty(this.getOwnerFrame().argInColIdPopup))
        		this.fv_colId = this.getOwnerFrame().argInColIdPopup;

        	// 첨부파일 활성화
        	this.fv_divFile = this.divFile.form;

        	//파일구분코드세팅
        	if(!take.isEmpty(this.getOwnerFrame().argInAtchFileTypeCd)){
        		this.fv_divFile.fn_setAtchFileTypeCd(this.getOwnerFrame().argInAtchFileTypeCd);
        	}

        	//읽기전용여부
        	//TODO comFileSingle 도 고쳐야함
        // 	if(!take.isEmpty(this.getOwnerFrame().argInIsReadOnly)){
        // 		var isReadOnly = this.getOwnerFrame().argInIsReadOnly;
        // 		this.fv_divFile.fn_setAddDelBtnEnable(!isReadOnly);
        // 		this.fv_divFile.fn_setSaveBtnEnable(!isReadOnly);
        // 	}

        	//첨부파일컴퍼넌트 초기화
        	this.fv_divFile.fnInitComponent(this);

        	//부모창 설정
        	//this.fv_divFile.fn_setObjForm(this.getOwnerFrame().opener);

        	//파일ID세팅
        	if(!take.isEmpty(this.getOwnerFrame().argInAtchFileId)){
        		var attachFileId = this.getOwnerFrame().argInAtchFileId;
        		this.fv_divFile.fn_setAtchFileId(attachFileId);
        		this.fv_divFile.fnSearchFileList();
        		this.divFile.set_visible(true);
        	}else{
        		//파일ID생성 후 데이터셋 세팅
        		this.fv_divFile.fnSearchAtchFileId(function(rtnValue){
        			if(this.fv_objDs != null){
        				this.fv_objDs.setColumn(this.fv_objDs.rowposition, this.fv_colId, rtnValue.resultData);
        			}
        			this.fv_divFile.fnSearchFileList();
        			this.divFile.set_visible(true);
        		});
        	}
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/

        /*********************************************************
         * 4 사용자 FUNCTION 영역
         ********************************************************/

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/


        this.btnFileSave_onclick = function(obj,e)
        {
        	this.fv_divFile.fnUploadSaveFileList(function(rtnValue){
        		this.close(true, rtnValue);
        	});
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFileSave.addEventHandler("onclick",this.btnFileSave_onclick,this);
        };
        this.loadIncludeScript("comFileSinglePop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
