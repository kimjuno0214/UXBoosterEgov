(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DashboardCommon");
            this.set_titletext("dashboard common");
            if (Form == this.constructor)
            {
                this._setFormPosition(432,195);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnDel",null,"0","42","41","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_MF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btnView",null,"0","42","41","btnDel:0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_View");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp",null,"0","42","41","btnView:0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_Help");
            this.addChild(obj.name, obj);

            obj = new Button("btnReload",null,"0","42","41","btnHelp:0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_Refresh");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0",null,"41","btnReload:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_MF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("divCont","20","61",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("staLine","0","41",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#dde0e5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCont.form
            obj = new Layout("default","",0,0,this.divCont.form,function(p){});
            this.divCont.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",432,195,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcComDash.xfdl", function() {
        /**
        *  DashbozrdCommon
        *
        *  @MenuPath    가이드 > DashbozrdCommon
        *  @FileName    DashbozrdCommon.xfdl
        *  @Creator     고영민
        *  @CreateDate  2020.09.01
        *  @Version     1.0
        *  @Desction    대시보드 컨텐츠 공통
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2020.09.01      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
            //변수 선언
            var sUrl, sTtitle;
            var bTran;

            //대시보드 URL가져오기
            sUrl = this.parent.dashurl;
            sTtitle = this.parent.dashnm;

            this.divCont.btran      = this.parent.btran;
            this.divCont.dashid     = this.parent.dashid;
            this.divCont.dashtype   = this.parent.dashtype;
            this.divCont.reloadtime = this.parent.reloadtime;
            this.divCont.dashparam  = this.parent.dashparam;
        	this.divCont.progid  = this.parent.progid;

            this.staTitle.set_text(sTtitle);
            //trace("URL --> " + sUrl);
            //대시보드 컨텐츠 div url 초기화
            this.divCont.set_url("");

            //대시보드 컨텐츠 url 세팅
            this.divCont.set_url(sUrl);
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnReload, fnInfo, fnDetail)
        ********************************************************/
        //

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        this.commonbtn_onclick = function(obj,e)
        {
        	var sBtnGbn;
            sBtnGbn = obj.name.substr(3);

            switch(sBtnGbn)
            {
        		case "Reload" :   //데이터 새로고침
        			this.fnSearch();
                    break;

        		case "Help" :   //매뉴얼
                    var agrKey = {sDashCd:take.nvl(this.parent.dashid, ""),sMenuGbn:"Dash"};

        			take.openPopup(
                        this,
                        "comMenualPop",
                        "frm::com/comMenualPop.xfdl",
                        agrKey,
                        "",
        				function(sId, sRtn){
                            //script is null
        				},
                        false);
                    break;

                case "View" :   //더보기
        			take.mdiOpenMenu(this, this.parent.progid, "", "", true);
                    break;

        		case "Del" :   //컨텐츠 제거
        			this.parent.parent.parent.form.fnDelContents(this.parent);
                    break;

                default :
                    break;
            }
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnSearch : 데이터 조회 함수
         * @param  {N/A}
         * @example this.fnSearch();
         */
        this.fnSearch = function()
        {
        	if(this.divCont.form.fnSearch){
        		this.divCont.form.fnSearch();
        	}
        }

        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : sId      - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : nErrCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : sErrMsg  - 에러메세지 (공통 콜백에서 넘어옴)
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btnDel.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnView.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnHelp.addEventHandler("onclick",this.commonbtn_onclick,this);
            this.btnReload.addEventHandler("onclick",this.commonbtn_onclick,this);
        };
        this.loadIncludeScript("dbcComDash.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
