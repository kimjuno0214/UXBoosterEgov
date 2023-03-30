(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleGrid");
            this.set_titletext("Take 그리드 기능");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"rnum\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","760","100",null,null,"5","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("- 그룹 옵션\r\n\r\n  paggingall        : checkbox,no,status,move,hide,excel,fix,reset\r\n\r\n   paggingselect  : no,move,hide,excel,fix,reset\r\n\r\n   paggingcrud    : checkbox,no,status,move,hide,excel,fix,reset\r\n\r\n- 개별 옵션\r\n\r\n   checkbox    : 공통 체크 박스 기능 사용 [주의 : 그리드의 첫번째 셀에 자동 생성]\r\n\r\n   no                : 순번 기능 사용 [주의 : 그리드의 두번째 셀에 자동 생성]\r\n\r\n   status          : Row 상태값 I(추가), U(수정), D(삭제) 보기 기능 사용\r\n\r\n   move          : 컬럼(cell) 이동 기능 사용  [주의 : 드래그하여 셀 이동]\r\n\r\n   hide             : 컬럼 숨기기 기능 사용\r\n\r\n   excel           : 엑셀 다운로드 기능 사용\r\n\r\n   fix                : 행/열 틀고정 기능 사용\r\n\r\n   reset            : 그리드를 기능이 적용되기 전으로 초기화하는 기능 사용\r\n\r\n   find              : 그리드에서 데이터 찾기 기능 사용\r\n\r\n   filter             : 그리드 데이터 필터 기능 사용 \r\n                         [주의 : 페이징시 사용자 오해 소지가 있어 되도록 사용하지 않음]\r\n\r\n   sort              : 정렬 기능 사용 (헤더 클릭시 정렬, 헤더 시프트 클릭시 멀티정렬, 팝업으 정렬)\r\n                          [주의:페이징시 사용자 오해 소지가 있어 되도록 사용하지 않음]\r\n\r\n   pagging     : 그리드 페이징 기능 사용\r\n                         페이지 번호 클릭시 데이터를 조회 ");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Grid("gridList","5","110",null,"41.77%","Static01:20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_selecttype("area");
            obj.set_binddataset("dsList");
            obj.getSetter("searchfunction").set("fnGetData");
            obj.getSetter("takegrid").set("paggingall");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Rownum\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:rnum\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnPSel","115","43","105","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("paggingselect");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("btnPCrud","225","43","105","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("paggingcrud");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport","335","43","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("script로 엑셀받기 샘플");
            obj.set_cssclass("btn_WF_excel01");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchPopUp","5","5","410","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그리드 공통 기능  : 페이징");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","gridList:20","40",null,"50","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("\'takegrid\' User Property 추가 후 사용할 그리드 기능 세팅\r\n\r\n페이징 기능 사용시 \'pagefunction\' User Property 추가 후 페이징 조회 함수 세팅 ");
            obj.set_font("11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            obj.set_color("crimson");
            this.addChild(obj.name, obj);

            obj = new Button("btnPAll","5","43","105","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("paggingall");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("btnTakeGrid","5","73","530","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("동적으로 그리드기능 부여 (그리드 포멧이 동적으로 변경되는 경우 필수)");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","550","43","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("gridList00","5","gridList:50",null,null,"Static01:20","10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_selecttype("area");
            obj.set_binddataset("dsList");
            obj.getSetter("searchfunction").set("fnGetData");
            obj.getSetter("takegrid").set("paggingall");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"150\"/><Column size=\"500\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Rownum\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/></Band><Band id=\"body\"><Cell text=\"bind:rnum\"/><Cell col=\"1\" text=\"bind:code\"/><Cell col=\"2\" text=\"bind:name\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,790,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpTakeGridNewPaggingOption.xfdl", function() {
        this.fv_sGridFormat = "";

        this.sampleGrid_onload = function(obj,e)
        {
        	take.formOnLoad(this, false);

             nexacro._OnceCallbackTimer.callonce
            (
                this,
                function ()
                {
                    this.fv_sGridFormat = this.gridList.getFormatString();
                },
                1
            );
        };

        //그리드 기능 적용 버튼 클릭 이벤트
        this.btnCom_onclick = function(obj,e)
        {
        	var objGrid = this.gridList;
            var sTakeGrid = obj.text;

            if (objGrid.takegrid!=sTakeGrid)
            {
                objGrid.searchfunction = "fnGetData";
                objGrid.set_formats(this.fv_sGridFormat);
                objGrid.setTakeGrid(sTakeGrid);
            }

            take.alert(this, "Info", sTakeGrid + " 적용 완료");
        };

        //동적 기능 부여 버튼 클릭 이벤트
        this.btnTakeGrid_onclick = function(obj,e)
        {
            var objGrid = this.gridList;

            objGrid.set_formats(this.fv_sGridFormat);
        	objGrid.setTakeGrid("paggingall");
        };

        //Excel export 버튼 클릭 이벤트
        this.btnExport_onclick = function(obj,e)
        {
            //스크립트로 엑셀 Export --> (파일명, 시트명, 타이틀명)
            this.gridList.ExportExcelGrid("testexcelfile", "sheet01", "테스트 엑셀");
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnGetData(true);
        };

        //조회 함수
        this.fnGetData = function(bInit)
        {
            //신규 조회시 페이징 초기화를 위해
            if(take.nvl(bInit,false)==true)
            {
                this.gridList.initPage();
            }

            var sParam = "clCd='DTY_CL_CD'";

            var sUrl = "SVC_LOC::com/syst/selectMultiCodeList.do";

            take.transaction(
                this,
                "selectpopcode",
                sUrl,
                "",
                "dsList=dsList",
                sParam + " sDataset='dsList'",
                function(sId, nErrCd, sErrMsg){
                    //
                },
                false);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleGrid_onload,this);
            this.addEventHandler("oninit",this.sampleGrid_oninit,this);
            this.btnPSel.addEventHandler("onclick",this.btnCom_onclick,this);
            this.btnPCrud.addEventHandler("onclick",this.btnCom_onclick,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
            this.btnPAll.addEventHandler("onclick",this.btnCom_onclick,this);
            this.btnTakeGrid.addEventHandler("onclick",this.btnTakeGrid_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("smpTakeGridNewPaggingOption.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
