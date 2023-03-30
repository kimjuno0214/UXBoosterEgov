(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpScrollPage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"255\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"255\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"255\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"255\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"TOTALCNT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"CURPAGE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ROWCNT\" type=\"STRING\" size=\"30\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_BIRTHDAY\" type=\"STRING\" size=\"255\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_MOBILE\" type=\"STRING\" size=\"255\"/><Column id=\"USER_TEL\" type=\"STRING\" size=\"255\"/><Column id=\"USER_FAX\" type=\"STRING\" size=\"255\"/><Column id=\"POST_CD\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS\" type=\"STRING\" size=\"255\"/><Column id=\"USER_STATUS_NM\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN_NM\" type=\"STRING\" size=\"255\"/><Column id=\"AGREE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_LOGIN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"PW_CHANGE_DT\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_BROWSER\" type=\"STRING\" size=\"255\"/><Column id=\"LOGIN_IP\" type=\"STRING\" size=\"255\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_START_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"VALID_END_DATE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","40","68","636","322",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.getSetter("takegrid").set("scroll");
            obj.getSetter("searchfunction").set("fnSearch");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"RNUM\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"USER_ID\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"USER_NM\" autosizerow=\"limitmin\"/><Cell col=\"3\" text=\"DEPT_NM\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"USER_STATUS_NM\" autosizerow=\"limitmin\"/><Cell col=\"5\" text=\"USE_YN_NM\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"AGREE_YN\" autosizerow=\"limitmin\"/><Cell col=\"7\" text=\"LOGIN_IP\" autosizerow=\"limitmin\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" autosizerow=\"limitmin\"/><Cell col=\"1\" text=\"bind:USER_ID\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:USER_NM\" autosizerow=\"limitmin\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:USER_STATUS_NM\" autosizerow=\"limitmin\"/><Cell col=\"5\" text=\"bind:USE_YN_NM\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"bind:AGREE_YN\" autosizerow=\"limitmin\"/><Cell col=\"7\" text=\"bind:LOGIN_IP\" autosizerow=\"limitmin\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","708","57","173","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpScrollPage.xfdl", function() {
        /*
         1. 그리드에 바인딩할 데이터셋 준비 (ex : dsList)
         2. 스크롤 페이징시 데이터를 가져올 데이터셋 준비 (ex : dsTemp)
         3. 스크롤 페이징 데이터셋에 페이징 관련 기본 값 세팅을 위해
            3개의콘스트 컬럼 추가 (ex : dsTemp)
            전체 조회 카운트 수       : "TOTALCNT"
            현재 페이지 수             : "CURPAGE"
            한 페이지에 표기할 행 수  : "ROWCNT"
         4. 그리드 스크롤이 마지막에 오면 데이터 조회 하도록 이벤트 추가 (ex : grdList)
            "this.grdList_onvscroll" 이벤트 확인
         5. 스크롤 페이징시 데이터를 가져올 데이터셋 조회 transation 처리 (ex: fnSearch)
            * 데이터를 처음부터 조회할 경우를 위해 초기화 처리 필수
         6. 조회 transaction callback 처리 (ex: fnCallBack)
            스크롤 페이징시 데이터를 가져올 데이터셋 데이터 조회가
            완료 되면 그리드에 바인딩 된 데이터셋에 데이터를 추가해준다.
        */

        //조회 버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
            //데이터 조회
        	this.fnSearch("selectScroll", true);
        };

        //그리드 스크롤이 마지막에 왔을때 발생하는 이벤트
        this.grdList_onvscroll = function(obj,e)
        {
        	if ((e.type == "lastover") || (e.type == "tracklastover") || (e.type == "wheellastover") || (e.type == "selectlastover"))
        	{
                var objDs;
                var nCurPage, nRowCnt;

                //데이터 조회용 데이터셋
                objDs = this.dsTemp;
                //필수 값 확인
                nCurPage = take.nvl(objDs.getConstColumn("CURPAGE"), ""); //현재 페이지
                nRowCnt = take.nvl(objDs.getConstColumn("TOTALCNT"), ""); //전체Row수

                if (nRowCnt!="")
                {
                    nRowCnt = nexacro.toNumber(nRowCnt);
                } else {
                    nRowCnt = 0;
                }

                //그리드에 바인딩 데이터셋의 row수와 전체 Row수 비교
                if (this.dsList.rowcount==nRowCnt)
                {
                    take.alert(this, "Info", "더이상 조회할 데이터가 없습니다.");
                    return;
                }

                //현재 페이지수 증가
                if (nCurPage!="")
                {
                    nCurPage = nexacro.toNumber(nCurPage);
                    nCurPage++;
                    objDs.setConstColumn("CURPAGE",nCurPage);
                }

        		this.fnSearch();
        	}

        };

        //데이터 조회
        this.fnSearch = function(sTranId, bInit)
        {
            var objDs;
            var sParam;
            var nRowCnt = 10; //한 스크롤 페이지에 표기할 Row수

            //트랜젝션 아이디 기본 값 세팅
            sTranId = take.nvl(sTranId,"selectScroll");
            //스크롤 페이징에 사용할 데이터셋
            objDs = this.dsTemp;
            //스크롤 페이징 초기화 여부 기본 값 세팅
            bInit = take.nvl(bInit, false);

            //초기화일 경우
            if (bInit)
            {
                //한 스크롤 페이지에 표기할 row수 세팅
                objDs.setConstColumn("ROWCNT",nRowCnt);

                //현재 페이지를 1로 세팅
                objDs.setConstColumn("CURPAGE",1);

                //그리드에 바인딩 된 데이터 지우기
                this.dsList.clearData();
            }

            //검색 파라메터 세팅
            sParam =   "";

            //데이터셋 비우기
            objDs.clearData();

            //페이징 처리 조회
            take.tranSelectPage(
                this,                              //현재 Form 객체
                sTranId,                           //Transaction Id
                "Sample.smpForm01JoinSelectCount",       //count sqlMapperId
                "Sample.smpForm01JoinSelectPage",  //list sqlMapperId
                "",                                //Indataset(서버로 보낼 dataset)
                "dsTemp",                          //Outdataset(서버에서 받을 dataset)
                sParam,                            //Parameter
                "fnCallBack",
                false);
        }

        //트랜젝션 콜백
        this.fnCallBack = function(sId, nErr, sMsg)
        {
            //스크롤 페이징에 사용할 데이터셋
            var objDs = this.dsTemp;

            //데이터가 있으면
            if (objDs.rowcount>0)
            {
                //그리드에 바인딩 된 데이터셋에 데이터 복사
                this.dsList.appendData(objDs, true);
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grdList.addEventHandler("onvscroll",this.grdList_onvscroll,this);
            this.grdList.addEventHandler("onsize",this.grdList_onsize,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("smpScrollPage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
