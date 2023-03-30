(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpGridReport");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsColInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"colid\" type=\"STRING\" size=\"256\"/><Column id=\"colnm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"colid\">DEPTNM</Col><Col id=\"colnm\">부서명</Col></Row><Row><Col id=\"colid\">POST</Col><Col id=\"colnm\">직위</Col></Row><Row><Col id=\"colid\">POSTDATE</Col><Col id=\"colnm\">직위임용일</Col></Row><Row><Col id=\"colid\">RANKS</Col><Col id=\"colnm\">직급</Col></Row><Row><Col id=\"colid\">RANKSDATE</Col><Col id=\"colnm\">직급임용일</Col></Row><Row><Col id=\"colid\">USERNAME</Col><Col id=\"colnm\">성명</Col></Row><Row><Col id=\"colid\">BIRTHDAY</Col><Col id=\"colnm\">생년월일</Col></Row><Row><Col id=\"colid\">EDUCATION</Col><Col id=\"colnm\">학력</Col></Row><Row><Col id=\"colid\">CAREER</Col><Col id=\"colnm\">주요경력</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSqlInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"seq\" type=\"STRING\" size=\"255\"/><Column id=\"groupId\" type=\"STRING\" size=\"255\"/><Column id=\"queryId\" type=\"STRING\" size=\"255\"/><Column id=\"fullId\" type=\"STRING\" size=\"255\"/><Column id=\"fileNm\" type=\"STRING\" size=\"255\"/><Column id=\"queryType\" type=\"STRING\" size=\"255\"/><Column id=\"regDt\" type=\"DATETIME\" size=\"17\"/><Column id=\"regCd\" type=\"STRING\" size=\"255\"/><Column id=\"modDt\" type=\"STRING\" size=\"255\"/><Column id=\"modCd\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSqlGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"groupId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"groupId\">kr.co.takeit.mapper.TakeCommonMapper</Col></Row><Row><Col id=\"groupId\">DashManagement</Col></Row><Row><Col id=\"groupId\">MeetingMinutesManagement</Col></Row><Row><Col id=\"groupId\">File</Col></Row><Row><Col id=\"groupId\">Message</Col></Row><Row><Col id=\"groupId\">ProgramManagement</Col></Row><Row><Col id=\"groupId\">ScheduleManagement</Col></Row><Row><Col id=\"groupId\">kr.co.takeit.mapper.TakeMapper</Col></Row><Row><Col id=\"groupId\">kr.co.takeit.mapper.TakeSystemMapper</Col></Row><Row><Col id=\"groupId\">ProjectManagement</Col></Row><Row><Col id=\"groupId\">AddressbookManagement</Col></Row><Row><Col id=\"groupId\">TimelineManagement</Col></Row><Row><Col id=\"groupId\">Main</Col></Row><Row><Col id=\"groupId\">Sample</Col></Row><Row><Col id=\"groupId\">PushCommon</Col></Row><Row><Col id=\"groupId\">UserManagement</Col></Row><Row><Col id=\"groupId\">BoardManagement</Col></Row><Row><Col id=\"groupId\">Basic</Col></Row><Row><Col id=\"groupId\">DocumentManagement</Col></Row><Row><Col id=\"groupId\">HumanResourceManagement</Col></Row><Row><Col id=\"groupId\">Statistics</Col></Row><Row><Col id=\"groupId\">SystemCommon</Col></Row><Row><Col id=\"groupId\">Order</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divColumns","10","60",null,"136","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btnNewColumn",null,"5","200","50","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("컬럼 가져오기");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSqlInfo","310","5","293","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSqlInfo");
            obj.set_codecolumn("fullId");
            obj.set_datacolumn("fullId");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmbSqlGrp","10","5","293","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSqlGrp");
            obj.set_codecolumn("groupId");
            obj.set_datacolumn("groupId");
            obj.set_text("");
            obj.set_value("Main");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","10","divColumns:10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divColumns
            obj = new Layout("default","",0,0,this.divColumns.form,function(p){});
            this.divColumns.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1024,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpGridReport.xfdl", function() {
        /*
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2021.11.16      신지수             transelect -> transaction으로 변경
        *******************************************************************************
        */

        this.smpGridReport_onload = function(obj,e)
        {
            this.fnGetSqlInfo();
        };

        this.fnGetSqlInfo = function()
        {
            this.dsSqlInfo.clearData();

            var sGrp = take.nvl(this.cmbSqlInfo.value,"Main");

            alert("sGrp --> " + sGrp);

            if (sGrp=="")
            {
                alert("쿼리그룹을 선택해주세요.");
                return;
            }

        //     take.tranSelect(
        //         this,
        //         "sqlInfoSelect",
        //         "Main.queryInfoSelect",
        //         "",
        //         "dsSqlInfo",
        //         "QUERY_TYPE='Select' GROUP_ID='"+ sGrp +"'",
        //         function(sId, nCd, sMsg)
        //         {
        //             var objDs = this.dsSqlInfo;
        //
        //             if (objDs.rowcount>0)
        //             {
        //                 this.cmbSqlInfo.set_index(0);
        //             }
        //         },
        //         false);

            take.transaction(
                this,
                "sqlInfoSelect",
                "SVC_LOC::sample/queryInfoSelect.do",
                "",  //(Server=UI)
                "dsSqlInfo=dsSqlInfo", //(UI=Server)
                "queryType='Select' groupId='"+ sGrp +"'",
                function(sId, nCd, sMsg){
                    var objDs = this.dsSqlInfo;

                    if (objDs.rowcount>0){
                        this.cmbSqlInfo.set_index(0);
                    }
                }
            , false);

        }


        this.cmbSqlGrp_onitemchanged = function(obj,e)
        {
        	this.fnGetSqlInfo();
        };

        this.btnNewColumn_onclick = function(obj,e)
        {
            this.fnColumnDel(this.divColumns.form);

            this.fnSearch();
        };

        this.fnSearch = function()
        {
            this.dsList.clearData()

        //     take.tranSelect(
        //         this,
        //         "selectList",
        //         this.cmbSqlInfo.value,
        //         "",
        //         "dsList",
        //         "",
        //         function(sId, nCd, sMsg)
        //         {
        //             var objDs = this.dsList;
        //
        //             if (objDs.rowcount>0)
        //             {
        //                 this.fnNewColumn(this.divColumns.form, objDs);
        //             } else {
        //                 take.alert(this, "Info", "데이터가 없습니다.");
        //             }
        //         },
        //         false);

            take.transaction(
                this,
                "selectList",
                "SVC_LOC::sample/sqlInfoSelect.do",
                "",  //(Server=UI)
                "dsList=dsList", //(UI=Server)
                "mapperName="+this.cmbSqlInfo.value,
                function(sId, nCd, sMsg){
                    var objDs = this.dsList;
                    if (objDs.rowcount>0){
                        this.fnNewColumn(this.divColumns.form, objDs);
                    }else{
                        take.alert(this, "Info", "데이터가 없습니다.");
                    }
                }, false);

        }

        this.fnColumnDel = function(objScope)
        {
            var objCompList;
            var arrCompList
            var nCompCnt;

            //대메뉴 생성 영역의 컴포넌트 확인
            objCompList = objScope.components;
            arrCompList = objCompList._idArray;

            nCompCnt = arrCompList.length;

            //이미 생성된 대메뉴가(컴포넌트) 있으면
            if (nCompCnt>0)
            {
                //초기화 (기존 대메뉴 컴포넌트 제거)
                for (var x=nCompCnt-1; x>=0; x--)
                {
                    objComp = objCompList[arrCompList[x]].destroy();
                    objComp = null;
                }
            }
        }


        this.fnNewColumn = function(objScope, objDs)
        {
            var objCol;
            var arrRect = new Array(), arrColId;
            var nCnt, nColCnt = 0, nLineMax = 5, nGap = 3, nWid = 150, nHeight = 25;
            var sColId, sColNm;

            objCol = take.nvl(objDs.colinfos,"");

            if (objCol != "")
            {
                arrColId = objCol._idArray;
                nCnt = arrColId.length;
            } else {
                take.trace(this, "Info", "데이터셋(" + objDs.name + ")에 컬럼 정보가 없습니다.");
                return false;
            }

            if (nCnt>0)
            {
                arrRect = [0,5,nWid,nHeight,null,null]; // left, top, width, height, right, bottom
                for (var i=0; i<nCnt; i++)
                {
                    nColCnt++;

                    sColId = arrColId[i];
                    sColNm = sColId; //실제 명을 가져올 방법 찾아야함

                    this.fnNewBtn(objScope, "btn_" + sColId, "", sColNm, this.fnColOnDrag, arrRect);

                    if (nColCnt==nLineMax)
                    {
                        nColCnt = 0;
                        arrRect[0] = 0;
                        arrRect[1] += nHeight + nGap;
                    } else {
                        arrRect[0] += nWid + nGap;
                    }
                }

                objScope.resetScroll();
            }
        }

        /**
         * fnNewSta : Static Component 동적 생성
         * @param  {String} sScope  생성 위치
         * @param  {String} sStaId  스테틱 아이디
         * @param  {String} sCss    CSS클래스
         * @param  {String} sStaTxt 스테틱 TEXT
         * @param  {String} sEvent  스테틱 이벤트
         * @param  {Array}  nRect   스테틱 생성 좌표
         * @return {Object} objSta  생성된 버튼 Object
         * @example this.fnNewSta(sParam, nParam);
         */
        this.fnNewSta = function(objScope, sStaId, sCss, sStaTxt, sEvent, arrRect)
        {
        	//스테틱 컴포넌트 생성
        	var objSta = new Static();
        	objSta.init(sStaId, arrRect[0], arrRect[1], arrRect[2], arrRect[3], arrRect[4], arrRect[5]);
        	objScope.addChild(sStaId, objSta);

            if (take.nvl(sEvent,"")!="")
            {
                objSta.addEventHandler("ondrag", sEvent, this); //스테틱에 부여할 이벤트
            }

        	objSta.show();

        	//CSS 클래스가 있을경우만 세팅
            //trace("sCss --> " + sCss);
        	if (take.nvl(sCss,"")!="")
            {
                objSta.set_cssclass(sCss);
            } else {
                objSta.set_background("#2a304b");
                objSta.set_color("#ffffff");
            }

        	//버튼 text 및 기본 값 세팅
        	objSta.set_tooltiptext(sStaTxt);
        	objSta.set_tooltiptype("hover");
        	objSta.set_enable(true);
        	objSta.set_text(sStaTxt);
        	objSta.set_visible(true);

        	//보이기
        	return objSta;
        };

        /**
         * fnNewBtn : Button Component 동적 생성
         * @param  {String} sScope  생성 위치
         * @param  {String} sBtnId  버튼 아이디
         * @param  {String} sCss    CSS클래스
         * @param  {String} sBtnTxt 버튼 TEXT
         * @param  {String} sEvent  버튼 이벤트
         * @param  {Array}  nRect   버튼 생성 좌표
         * @return {Object} objBtn  생성된 버튼 Object
         * @example this.fnNewBtn(sParam, nParam);
         */
        this.fnNewBtn = function(objScope, sBtnId, sCss, sBtnTxt, sEvent, arrRect)
        {
        	//변수 선언 및 값 세팅
        	var objBtn = new Button();
        	objBtn.init(sBtnId, arrRect[0], arrRect[1], arrRect[2], arrRect[3], arrRect[4], arrRect[5]);

        	objScope.addChild(sBtnId, objBtn);

            if (take.nvl(sEvent,"")!="")
            {
                objBtn.addEventHandler("ondrag", sEvent, this); //버튼에 부여할 이벤트
            }

        	objBtn.show();

        	//CSS 클래스가 있을경우만 세팅
            //trace("sCss --> " + sCss);
        	if (take.nvl(sCss,"")!="")
            {
                objBtn.set_cssclass(sCss);
            } else {
                objBtn.set_background("#2a304b");
                objBtn.set_color("#ffffff");
            }

        	//버튼 text 및 기본 값 세팅
        	objBtn.set_tooltiptext(sBtnTxt);
        	objBtn.set_tooltiptype("hover");
        	objBtn.set_enable(true);
        	objBtn.set_text(sBtnTxt);
        	objBtn.set_visible(true);

        	//보이기
        	return objBtn;
        };

        //트리 드래그 이벤트
        this.fnColOnDrag = function(obj, e)
        {
        	e.userdata = obj;

            trace(e.userdata);
            this.fnDragInfo(obj);
        	//this.fv_nMoveRow= e.row;
        	return true;
        };

        //트리 데이터
        this.fnDragInfo = function(objBtnCol)
        {
        	var objStaInfo, objRect;
            var sText, sId;

            sText = objBtnCol.text;
            sId = "_staColInfo";

            objStaInfo = take.nvl(pThis[sId], "");
            if (objStaInfo=="")
            {
                objStaInfo = new Static(sId, objBtnCol.getOffsetLeft(), objBtnCol.getOffsetTop(), objBtnCol.width, objBtnCol.height, null, null);
                this.addChild(sId, objStaInfo);
                objStaInfo.show();
                objStaInfo.set_background("#eeeeee");
                objStaInfo.set_border("2px dotted #bbbbbb");
                objStaInfo.set_usedecorate(true);
            }

            objStaInfo.set_text(sText);
            objStaInfo.set_visible(true);
            objStaInfo.set_enable(true);
        }

        this.smpGridReport_ondragmove = function(obj,e)
        {
            var nX, nTop, nGap;
            var objItemInfo, objParentXY;

            nGap = 15;
            objParentXY = take.getParentXY(obj);
            ////this._staTreeItemInfo.move(e.canvasx, e.canvasy + nexacro.toNumber(obj.getFormatRowProperty(0,"size")));
            //nTop = nexacro.toNumber(obj.top); //_getWindowPosition().y==>top, _getWindowPosition().x==>left
            nTop = objParentXY.y;

            nX = objParentXY.x + e.canvasx;

            objItemInfo = this._staColInfo;

            objItemInfo.move(nX, e.canvasy+nexacro.toNumber(obj.top)+nGap);
        };

        this.grdList_ondrop = function(obj,e)
        {

            this._staColInfo.set_visible(false);
            this._staColInfo.set_enable(false);

            this.fnGridSetting(obj, e.userdata);
        };

        this.fnGridSetting = function(objGrid, objBtnCol)
        {
            var sCol;
            var nCol;

            nCol = objGrid.appendContentsCol("body");
            sCol = objBtnCol.name.replace("btn_","");

            this.grdList.setFormatColProperty(nCol,"size","150");
            objGrid.setCellProperty("head",nCol, "text", sCol);
            objGrid.setCellProperty("body",nCol, "text", "bind:"+sCol);

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpGridReport_onload,this);
            this.addEventHandler("ondragmove",this.smpGridReport_ondragmove,this);
            this.btnNewColumn.addEventHandler("onclick",this.btnNewColumn_onclick,this);
            this.cmbSqlGrp.addEventHandler("onitemchanged",this.cmbSqlGrp_onitemchanged,this);
            this.grdList.addEventHandler("ondrop",this.grdList_ondrop,this);
        };
        this.loadIncludeScript("smpGridReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
