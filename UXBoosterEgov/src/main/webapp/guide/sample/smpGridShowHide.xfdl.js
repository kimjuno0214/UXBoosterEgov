(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpGridShowHide");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList02", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","10","10","700",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrid00",null,"10","80","25","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_up03");
            obj.set_text("접기");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList00","10","btnGrid00:5",null,"168","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGrid01",null,"grdList00:5","80","25","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_up03");
            obj.set_text("접기");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList01","10","btnGrid01:5",null,"168","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsList01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnGrid02",null,"grdList01:5","80","25","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_up03");
            obj.set_text("접기");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList02","10","btnGrid02:5",null,"168","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsList02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/><Cell col=\"11\" text=\"Column11\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleGrid00","10","10","140","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("그리드 00 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleGrid01","10","grdList00:5","140","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("그리드 01 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitleGrid02","10","grdList01:5","140","25",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("그리드 02 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAll","747","47","174","67",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체 접기/펴기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

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
        this.registerScript("smpGridShowHide.xfdl", function() {
        //////////////////////////////////////////////////////////
        // * 상대 좌표 설정을 위해 nexcro platform            //
        //   컴포넌트 어레이지먼트 기능 사용                 //
        //   컴포넌트 선택 후 + 표시를 드래그하여           //
        //   상대좌표로 설정할 컴포넌트에 드롭하여 설정    //
        //////////////////////////////////////////////////////////

        /*********************************************************
         * COMPONENT 별 EVENT 영역
         ********************************************************/
        //전체 접기/펼치기 버튼 클릭 이벤트
        this.btnAll_onclick = function(obj,e)
        {
            //전체 접기/펼치기 함수 호출
            this.fnGirdUpDownAll(obj);
        };

        //그리드 00 목록 접기/펼치기 버튼 클릭 이벤트
        this.divDetail_btnGrid00_onclick = function(obj,e)
        {
            //그리드 접기/펼치기 함수 호출
            this.fnGridUpDown(this.divDetail.form.grdList00, obj);
        };

        //그리드 01 목록 접기/펼치기 버튼 클릭 이벤트
        this.divDetail_btnGrid01_onclick = function(obj,e)
        {
            //그리드 접기/펼치기 함수 호출
        	this.fnGridUpDown(this.divDetail.form.grdList01, obj);
        };

        //그리드 02 목록 접기/펼치기 버튼 클릭 이벤트
        this.divDetail_btnGrid02_onclick = function(obj,e)
        {
            //그리드 접기/펼치기 함수 호출
        	this.fnGridUpDown(this.divDetail.form.grdList02, obj);
        };

        /*********************************************************
         * 사용자 FUNCTION 영역
         ********************************************************/
        /**
         * 전체 접기 펼치기
         * @param  {Object} objBtnAll 전체 접기/펼치기 버튼 컴포넌트
         * @return {N/A}    N/A
         * @example this.fnGirdUpDownAll(this.btnAll)
         */
        this.fnGirdUpDownAll = function(objBtnAll)
        {
            //변수 선언
            var objDivForm, objGrid, objBtn;
            var arrGrid, arrBtn;
            var sFlag;

            //변수값 주입
            objDivForm = this.divDetail.form; //그리드가 있는 form 객체
            arrGrid = [objDivForm.grdList00, objDivForm.grdList01, objDivForm.grdList02]; //대상 그리드
            arrBtn = [objDivForm.btnGrid00, objDivForm.btnGrid01, objDivForm.btnGrid02];  //대상 그리드의 버튼

            //접기,펼치기 구분값
            sFlag = take.nvl(objBtnAll._updownflag,"up");

            //접기 펼치기 구분값에 따라 분기
            if ( sFlag == "up")
            {
                //접필수 있도록 기본값 세팅
                nHeight = objDivForm.grdList00.height;
                //구분값 업데이트
                objBtnAll._updownflag = "down";
            } else {
                //펼칠수 있도록 기본값 세팅
                nHeight = 1;
                //구분값 업데이트
                objBtnAll._updownflag = "up";
            }

            //그리드 갯수
            nCnt = arrGrid.length;

            //갯수만큼 반복
            for (var i=0; i<nCnt; i++)
            {
                //대상 그리드 컴포넌트, 버튼
                objGrid = arrGrid[i];
                objBtn  = arrBtn[i];

                //접기 펼치기 실행
                this.fnGridUpDown(objGrid, objBtn, nHeight);
            }
        }

        /**
         * 접기 펼치기 개별 수행
         * @param  {Object} objGrid    대상 그리드 컴포넌트
         * @param  {Object} objBtn     대상 버튼 컴포넌트
         * @param  {Number} nGbnHeight 구분값(전체, 개별 구분)
         * @return {N/A}    N/A
         * @example this.fnGirdUpDownAll(this.btnAll)
         */
        this.fnGridUpDown = function(objGrid, objBtn, nGbnHeight)
        {
            //변수 선언
            var nHeight;
            var sCss, sText;

            //구분값 값이 없을경우에 개별 컴포넌트의 height 가져옴
            nGbnHeight = take.nvl(nGbnHeight, objGrid.height);

            //현재 접혀진 상태일 경우
            if (nGbnHeight==1)
            {
                //최초 그리드 hegiht를 받아옴
                nHeight = objGrid._userheight;
                sCss = "btn_WF_up03";
                sText = "접기";
            } else { //현재 펼쳐진 상태일 경우
                //그리드 최초 height 세팅
                objGrid._userheight = take.nvl(objGrid._userheight,"")==""?objGrid.height:objGrid._userheight;
                //그리드 height 세팅값을 1로
                nHeight = 1;
                sCss = "btn_WF_down03";
                sText = "펼치기";
            }

            //적용 (높이, css, text)
            objGrid.set_height(nHeight);
            objBtn.set_cssclass(sCss);
            objBtn.set_text(sText);

            //form 좌표를 갱신
            this.divDetail.form.resetScroll();
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divDetail.form.btnGrid00.addEventHandler("onclick",this.divDetail_btnGrid00_onclick,this);
            this.divDetail.form.btnGrid01.addEventHandler("onclick",this.divDetail_btnGrid01_onclick,this);
            this.divDetail.form.btnGrid02.addEventHandler("onclick",this.divDetail_btnGrid02_onclick,this);
            this.btnAll.addEventHandler("onclick",this.btnAll_onclick,this);
        };
        this.loadIncludeScript("smpGridShowHide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
