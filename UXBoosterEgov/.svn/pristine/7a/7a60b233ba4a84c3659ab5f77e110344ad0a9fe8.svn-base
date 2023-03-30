(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLeft");
            this.set_titletext("메인 좌측 메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,734);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEVICE_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"ROOT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MYMENU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEVICE_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"ROOT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/><Column id=\"MYMENU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRecent", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEVICE_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"ROOT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"PARENT_MENU\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_ORDER\" type=\"STRING\" size=\"255\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"PROGRAM_PREFIX\" type=\"STRING\" size=\"255\"/><Column id=\"MENU_PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtnRole", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_ROLE\" type=\"STRING\" size=\"256\"/><Column id=\"R_READ\" type=\"STRING\" size=\"256\"/><Column id=\"R_INPUT\" type=\"STRING\" size=\"256\"/><Column id=\"R_DELETE\" type=\"STRING\" size=\"256\"/><Column id=\"R_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"R_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"R_EXCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMenu","60","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_formscrollbartype("autoindicator");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuBg","0","0",null,null,"0","0",null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_menuBg");
            this.divMenu.addChild(obj.name, obj);

            obj = new Grid("grdMenu","8","67",null,null,"0","0",null,null,null,null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_LF_menu");
            obj.set_binddataset("dsMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeusebutton("no");
            obj.set_treeinitstatus("expand,all");
            obj.set_nodatatext("메뉴가 존재하지 않습니다.");
            obj.set_scrollbartype("autoindicator");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"165\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" treestartlevel=\"1\" treestate=\"bind:MENU_STATUS\" text=\"bind:MENU_NM\" cssclass=\"expr:/*comp.binddataset==&apos;dsMenu&apos;?((MENU_TYPE == &apos;02&apos; ? (MENU_STATUS==0?&apos;close&apos;:&apos;open&apos;) : &apos;sub&apos;) + MENU_LEVEL) : &apos;sub1&apos;*/\"/></Band></Format></Formats>");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuSeachBg","0","7",null,"60","0",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("3");
            obj.set_background("#2a304b");
            this.divMenu.addChild(obj.name, obj);

            obj = new Edit("edtSearch","7","26",null,"23","7",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("2");
            obj.set_cssclass("ed_LF_search01");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("Button00",null,"26","23","23","7",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_search");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staBg","0","0","60",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_LF_iconBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnHisMenu","0","67","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("최근메뉴");
            obj.set_cssclass("btn_LF_recent");
            obj.set_tooltiptext("최근메뉴");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","0","7","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_mymenu");
            obj.set_text("마이메뉴");
            obj.set_tooltiptext("마이메뉴");
            this.addChild(obj.name, obj);

            obj = new Div("divGrp","0","127","60",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("autoindicator");
            this.addChild(obj.name, obj);

            obj = new Static("staTopBg","0","0",null,"7","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#f2f7fa");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pDivMyMenu","497","77","82","44",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenuAdd","0","0","80","21",null,null,null,null,null,null,this.pDivMyMenu.form);
            obj.set_taborder("0");
            obj.set_text("즐겨찾기 등록");
            obj.set_cssclass("btn_WF_menu2");
            this.pDivMyMenu.addChild(obj.name, obj);

            obj = new Button("btnMyMenuDel","0","20","80","21",null,null,null,null,null,null,this.pDivMyMenu.form);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기 삭제");
            obj.set_cssclass("btn_WF_menu2");
            this.pDivMyMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrp.form
            obj = new Layout("default","",0,0,this.divGrp.form,function(p){});
            this.divGrp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pDivMyMenu.form
            obj = new Layout("default","",0,0,this.pDivMyMenu.form,function(p){});
            this.pDivMyMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",250,734,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        /**
        *  Left Frame
        *
        *  @MenuPath    Main Frame > Left Frame
        *  @FileName    frmLeft.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.09.04
        *  @Version     1.0
        *  @Desction    좌측 프레임(메뉴 영역)
        *
        ************** 소스 수정 이력 *************************************************
        *    Date          Modifier            Description
        *******************************************************************************
        *  2019.09.04      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //개발자용 폼 변수
        this.fv_sGrpMenuId = null; //그룹메뉴아이디
        this.fv_objClickIcon = null;
        this.fv_sMyMenuSelected = null; //마이메뉴 클릭상태

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload 등)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.Form_onload = function(obj, e)
        {
        	//this.ProgId = "GM00000095";
            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
                //메뉴 리스트 가져오기
        		this.fnGetMenuList();
        	}
        };


        /*********************************************************
         * 2 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        //btnMyMenu_onclick : 마이메뉴 버튼 클릭 이벤트
        this.btnMyMenu_onclick = function(obj,e)
        {
            this.fv_sMyMenuSelected = "Y"; //마이메뉴 상태
            this.fnResetMenuCss(); // 메뉴그룹 CSS초기화
        	this.fnGetMyMenuList(); //마이메뉴 리스트 가져오기
        };

        //btnHisMenu_onclick : 최근 열어본 메뉴 버튼 클릭 이벤트
        this.btnHisMenu_onclick = function(obj,e)
        {
        	this.fv_sMyMenuSelected = null; //마이메뉴 상태
            this.fnResetMenuCss(); // 메뉴그룹 CSS초기화
        	this.fnGetRecentMenuList(); //최근 열어본 메뉴리스트 가져오기
        };

        //divMenu_grdMenu_oncellclick : 메뉴 클릭 이벤트
        this.divMenu_grdMenu_oncellclick = function(obj,e)
        {
            //TODO 즐겨찾기 방식 변경
        // 	if( e.col == 1 )
        // 	{
        // 		var sTranId, sUrl, sParam;
        // 		var objDs 		= obj.getBindDataset();
        // 		var sMenuCd 	= objDs.getColumn(e.row, "MENU_CD");
        // 		var sMyMenuYn	= objDs.getColumn(e.row, "MYMENU_YN");
        // 		var sParam = "PROJECT_CD='" + UXBooster.av_sProjectCd + "' GROUP_CD='G0001' MENU_CD='" + sMenuCd + "'";
        //
        // 		if( sMyMenuYn == "Y" )
        // 		{
        // 			var bRow = take.confirm(this, "question", "MS00000065");//take.confirm(this, "question", "해당 메뉴를 마이메뉴에 삭제하시겠습니까?");
        // 			if (bRow){
        // 				sTranId 	= "MyMenuDelete";
        // 				sUrl		= "SVC_LOC::myMenuDelete.do";
        // 			}else{
        // 				return;
        // 			}
        // 		}
        // 		else
        // 		{
        // 			var bRow = take.confirm(this, "question", "MS00000066");//take.confirm(this, "question", "해당 메뉴를 마이메뉴에 추가하시겠습니까?");
        // 			if (bRow){
        // 				sTranId = "MyMenuInsert";
        // 				sUrl	= "SVC_LOC::myMenuInsert.do";
        // 			}else{
        // 				return;
        // 			}
        // 		}
        //
        // 		take.transaction(this, sTranId, sUrl, "", "", sParam,
        //             function (sId, nErr, sMsg) {
        //                 //this.fnGetMenuList();
        //                 if(take.nvl(this.fv_sMyMenuSelected, "")!="") {
        //                     this.fnGetMenuReset();
        //                     this.fnGetMyMenuTran();
        //                 } else {
        //                     this.fnGetMenuReset();
        //                 }
        //             });
        // 	}

            if( e.col == 0 )
         	{
                var objDs 		= obj.getBindDataset();
         		var sMenuType 	= objDs.getColumn(e.row, "MENU_TYPE");

                if (sMenuType=="02")
                {
                    if (take.nvl(objDs.getColumnInfo("MENU_STATUS"),"")!="")
                    {
                        //초기 설정이 펼침이기 때문에 null일 경우 펼침 상태로 처리
                        if(take.nvl(objDs.getColumn(e.row, "MENU_STATUS"),"1") == "1")
                        {
                            objDs.setColumn(e.row, "MENU_STATUS", "0");
                        } else {
                            objDs.setColumn(e.row, "MENU_STATUS", "1");
                        }
                    }
                } else {
                    //메뉴 아이디 가져오기
                    this.fnGetMenuId(obj.getBindDataset(), e.row);
                }
        	}
        };

        //그룹 메뉴 클릭
        this.fnBtnMenu_onclick = function(obj, e)
        {
            this.fv_sMyMenuSelected = null; //마이메뉴 상태

            //그룹 메뉴 아이디 세팅
        	this.fnResetMenuCss();

        	var objBtn = obj;
        	var sId = objBtn.id;

        	if( sId.indexOf("btnMenuT_") != -1 )
        	{
        		var arrId = sId.split("_");
        		var objBtnComps = this.divGrp.form.components;
        		objBtn = objBtnComps["btnMenu_"+arrId[1]];
        	}

        	var sBackground = objBtn.background;
        	sBackground = sBackground.replace(".png", "_D.png");
        	sBackground = sBackground.replace("transparent", "#353c5e");

        	objBtn.set_background( sBackground);

        	this.fv_objClickIcon = objBtn;

            this.fv_sGrpMenuId = objBtn.menuId;
            //그룹 메뉴에 해당하는 메뉴 세팅
            this.fnSetMenu(this.fv_sGrpMenuId);
        }

        //그룹 메뉴 버튼 마우스엔터이벤트
        this.fnBtnMenu_onmouseenter = function(obj, e)
        {
        	//그룹 메뉴 아이디 세팅
        	this.fnSetMenuCss(obj, "enter");
        }

        //그룹 메뉴 버튼 마우스리브 이벤트
        this.fnBtnMenu_onmouseleave = function(obj, e)
        {
        	//그룹 메뉴 아이디 세팅
        	this.fnSetMenuCss(obj, "leave");
        }

        //메뉴 조회 에디터 키 다운 이벤트
        this.divMenu_edtSearch_onkeydown = function(obj,e)
        {
        	var sUrl = take.nvl(this.divMenu.form.edtSearch.value, "");
            var objDs = this.dsMenu;

        	if( e.keycode == 13 ) {
        		if (sUrl=="") {
                    if (objDs.filterstr.indexOf(".match")>=0) {
                        //검색을 초기화 했을 경우
        				//20210112 정해원 이전 메뉴그룹으로 복원
        				if(this.fv_sMyMenuSelected == 'Y'){
        					//마이메뉴일 경우
        					//this.fv_sMyMenuSelected = "Y"; //마이메뉴 상태
        					this.fnResetMenuCss(); // 메뉴그룹 CSS초기화
        					this.fnGetMyMenuList(); //마이메뉴 리스트 가져오기
        					//objDs.filter();
        				}else{
        					this.fnGetMenuReset();
        				}
                    } else {
                        take.alert(this, "", "검색할 메뉴명 또는 메뉴 코드를 입력해 주세요.");
                        return false;
                    }
        		} else if( sUrl.indexOf("open:") != -1 ) {
        			var sParam = "";
        			sUrl = sUrl.replace("open:", "");
        			take.mdiOpenMenu(this, sUrl, sParam, "", true, "");
        		} else {
        			this.fnResetMenuCss(); // 메뉴그룹 CSS초기화
        			//this.fnGetSearchMenuList(); //검색한 메뉴 리스트 가져오기
                    this.fnMenuFilter();
        		}
        	}
        };

        this.divMenu_edtSearch_oninput = function(obj,e)
        {
            var sText;

            //trace("value : " + obj.value);
        	sText = take.nvl(obj.value,"");
            //trace("sText : " + sText);

            if (sText=="" && this.dsMenu.filterstr.indexOf(".match")>=0) {
                //검색을 초기화 했을 경우
        		//20210112 정해원 이전 메뉴그룹으로 복원
        		if(this.fv_sMyMenuSelected == 'Y'){
        			//마이메뉴일 경우
        			//this.fv_sMyMenuSelected = "Y"; //마이메뉴 상태
        			this.fnResetMenuCss(); // 메뉴그룹 CSS초기화
        			this.fnGetMyMenuList(); //마이메뉴 리스트 가져오기
        			//objDs.filter();
        		}else{
        			this.fnGetMenuReset();
        		}
            } else {
                if (sText!="")
                {
                    this.fnResetMenuCss(); // 메뉴그룹 CSS초기화
                    //this.fnGetSearchMenuList(); //검색한 메뉴 리스트 가져오기
                    this.fnMenuFilter(sText);
                }
            }

            return true;
        };

        //메뉴 그리드 오른쪽 버튼 클릭 이벤트
        this.divMenu_grdMenu_onrbuttondown = function(obj,e)
        {
            var objPdiv;

            obj.getBindDataset().set_rowposition(e.row);

            objPdiv = this.pDivMyMenu;

            if (!objPdiv.isPopup())
            {
                objPdiv.trackPopupByComponent(obj, e.canvasx, e.canvasy, 82, 44);	// before 81, 41 _ mod: kds
            }

        };

        //마이메뉴 추가/삭제 버튼 클릭 이벤트
        this.pDivMyMenu_btnMyMenu_onclick = function(obj,e)
        {
            var bRtn;
            var objDs;
            var sGbn, sUrl, sMenuCd, sParam, sMyMenuYn;
            var nRow;

            sGbn = obj.name.substr(9);
            objDs = this.divMenu.form.grdMenu.getBindDataset();
            nRow = objDs.rowposition;
            sMenuCd	= objDs.getColumn(nRow, "MENU_CD");
            sMenuNm	= objDs.getColumn(nRow, "MENU_NM");
            sMyMenuYn = take.nvl(objDs.getColumn(nRow, "MYMENU_YN"),"");
            sParam = "PROJECT_CD='" + UXBooster.av_sProjectCd + "' GROUP_CD='G0001' MENU_CD='" + sMenuCd + "'";

        	if (sGbn=="Add")
            {
                if (sMyMenuYn=="Y")
                {
                    take.alert(this, "Info", "메뉴는 마이메뉴에 등록 된 메뉴입니다.");
                    return;
                }

                bRtn = take.confirm(this, "question", "메뉴를 마이메뉴에 추가하시겠습니까?");
                sUrl = "SVC_LOC::myMenuInsert.do";

            } else {

                if (sMyMenuYn=="N")
                {
                    take.alert(this, "Info", "메뉴는 마이메뉴에 미등록 된 메뉴입니다.");
                    return;
                }
                bRtn = take.confirm(this, "question", "메뉴를 마이메뉴에 삭제하시겠습니까?");
                sUrl = "SVC_LOC::myMenuDelete.do";
            }

            this.pDivMyMenu.closePopup();

            if (bRtn)
            {
                take.transaction
                (
                    this,
                    "MyMenu"+sGbn,
                    sUrl,
                    "",
                    "",
                    sParam,
                    function (sId, nErr, sMsg)
                    {
                        if (nErr>=0)
                        {
                            //마이메뉴 초기화
                            //this.fnGetMenuReset();
                            this.fnGetMyMenuTran();

                            //마이메뉴 그룹 선택 여부
                            if(take.nvl(this.fv_sMyMenuSelected, "")!="")
                            {
                                //마이메뉴 그룹 세팅
                                this.fnGetMyMenuList();
                            }

                            objDs.setColumn(nRow, "MYMENU_YN", sGbn=="Add"?"Y":"N");
                        }
                    });
            } else {
                return;
            }
        };
        /*********************************************************
        * 3 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnSetMenuCss : 메뉴그룹 CSS 설정
         * @param  {} N/A
         * @example this.fnGetMyMenuList();
         */
        this.fnSetMenuCss = function( obj, sGubun )
        {
        	var objBtn = obj;
        	var sId = objBtn.id;

        	if( sId.indexOf("btnMenuT_") != -1 )
        	{
        		var objBtnComps = this.divGrp.form.components;
        		var arrId = sId.split("_");
        		objBtn = objBtnComps["btnMenu_"+arrId[1]];
        	}

        	if( null != this.fv_objClickIcon && objBtn.id == this.fv_objClickIcon.id )
        	{
        		return false;
        	}

        	var sBackground = objBtn.background;
        	if("enter" == sGubun)
        	{
        		sBackground = sBackground.replace(".png", "_D.png");
        		sBackground = sBackground.replace("transparent", "#353c5e");
        	}
        	else
        	{
        		sBackground = sBackground.replace("_D.png", ".png");
        		sBackground = sBackground.replace("#353c5e", "transparent");
        	}

        	objBtn.set_background( sBackground );
        }

        /**
         * fnResetMenuCss : 메뉴그룹CSS 초기화
         * @param  {} N/A
         * @example this.fnResetMenuCss();
         */
        this.fnResetMenuCss = function()
        {
        	var objBtnComps = this.divGrp.form.components;
        	for( var i=0; i<objBtnComps.length; i++ )
        	{
        		var objBtn = objBtnComps[i];
        		var sBtnId = objBtn.id;
        		if( sBtnId.indexOf("btnMenu_") != -1 )
        		{
        			var sBackground2 = objBtn.background;
        			sBackground2 = sBackground2.replace(/_D/gi, "");
        			sBackground2 = sBackground2.replace("#353c5e", "transparent");
        			objBtn.set_background( sBackground2 );
        		}
        	}
        }

        /**
         * fnGetMyMenuList : 마이 메뉴리스트 가져오기
         * @param  {} N/A
         * @example this.fnGetMyMenuList();
         */
        this.fnGetMyMenuList = function()
        {
            //변수 선언 및 세팅
            var objMyMenuDs, objMenuGrid;

            objMyMenuDs = this.dsMyMenu;
            objMenuGrid = this.divMenu.form.grdMenu;

            //마이 메뉴는 0depth 부터 시작
            objMenuGrid.setCellProperty("body",0,"treestartlevel",0);

            //메뉴 그리드에 마이 메뉴 데이터셋 바인딩
            objMenuGrid.set_enableevent(false);
            objMenuGrid.setBindDataset(objMyMenuDs);
            objMenuGrid.set_enableevent(true);

            //마이메뉴 추가 삭제시 가져오게 수정
            //마이메뉴 데이터가 없으면
            if (objMyMenuDs.rowcount<=0)
            {
                //마이메뉴 서비스 조회
               this.fnGetMyMenuTran();
            }

            //Left 메뉴가 보이도록 처리
            UXBooster.FoldButton.fnShowHide(true);
        }

        this.fnGetMyMenuTran = function()
        {
        	//20210112 정해원 마이메뉴 초기화
        	this.dsMyMenu.clearData();

            //마이메뉴 서비스 조회
            take.tranSelect(
                this,
                "userMyMenuSelect",
                "Main.userMymenuList",
                "",
                "dsMyMenu",
                "sProjectCd='" + UXBooster.av_sProjectCd + "'",
                function (sId, nErr, sMsg) {
                    //trace(this.dsMyMenu.saveXML());
                },
                false);
        }
        /**
         * fnGetRecentMenuList : 최근 열어본 메뉴리스트 가져오기
         * @param  {} N/A
         * @example this.fnGetRecentMenuList();
         */
        this.fnGetRecentMenuList = function()
        {
            //변수 선언 및 세팅
            var objRecentDs, objMenuGrid;

            objRecentDs = this.dsRecent;
            objMenuGrid = this.divMenu.form.grdMenu;

            //최근 열어본 메뉴는 0depth 부터 시작
            objMenuGrid.setCellProperty("body",0,"treestartlevel",0);

            //메뉴 그리드에 최근 열어본 메뉴 데이터셋 바인딩
            objMenuGrid.set_enableevent(false);
            objMenuGrid.setBindDataset(objRecentDs);
            objMenuGrid.set_enableevent(true);

        	//20210120 정해원 클릭시 조회처리
            //최근 열어본 메뉴 데이터가 없으면
            //if (objRecentDs.rowcount<=0)
            //{
                //최근 열어본 메뉴 서비스 조회
                take.tranSelect(
                    this,
                    "userRecentMenuSelect",
                    "Main.userRecentmenuList",
                    "",
                    "dsRecent",
                    "sProjectCd='" + UXBooster.av_sProjectCd + "'",
                    function (sId, nErr, sMsg) {
                        //trace(this.dsRecent.saveXML());
                    },
                    false);
            //}

            //Left 메뉴가 보이도록 처리
            UXBooster.FoldButton.fnShowHide(true);
        }

        /**
         * fnGetMenuList : 메뉴리스트 가져오기
         * @param  {} N/A
         * @example this.fnGetMenuList();
         */
        this.fnGetMenuList = function()
        {
            //메뉴 서비스 조회
        	take.tranSelect(
                this,
                "userMenuSelect",
                "Main.userMenuSelect",
                "",
                "dsMenu",
                "sProjectCd='" + UXBooster.av_sProjectCd + "'",
                function (sId, nErr, sMsg) {

                    //메뉴 그룹 생성
                    this.fnSetGroup();
                },
                false);
        }

        /**
         * fnGetMenuReset : 메뉴리스트 리셋
         * @param  {} N/A
         * @example this.fnGetMenuReset();
         */
        this.fnGetMenuReset = function()
        {
            //this.dsMenu.clearData();
            //메뉴 서비스 조회
            take.tranSelect(
                this,
                "userMenuSelect",
                "Main.userMenuSelect",
                "",
                "dsMenu",
                "sProjectCd='" + UXBooster.av_sProjectCd + "'",
                function (sId, nErr, sMsg) {
                    //trace(this.dsMenu.saveXML());
                    //메뉴 그리드 리셋
                    if(take.nvl(this.fv_sGrpMenuId, "")!="") {
                        this.fnSetMenu(this.fv_sGrpMenuId);
                    } else {
                        this.fnSetMenu(this.dsMenu.getColumn(0,"ROOT_MENU"));
                    }
                },
                false);
        }

        /**
         * fnSetGroup : 메뉴 그룹 생성
         * @param  {} N/A
         * @example this.fnSetGroup();
         */
        this.fnSetGroup = function()
        {
            //변수 선언 및 세팅
            var objScope, objMenuDs, objBtnMenu, objBtnMenuT, objCompList, objComp, objImg;
            var arrRows, arrBtnRect, arrBtnTRect, arrCompList;
            var nRow, nCnt, nGap, nCompCnt;
            var sMenuId, sMenuNm;

            //대메뉴 생성 영역
            objScope = this.divGrp.form;
            //메뉴 데이터셋
            objMenuDs = this.dsMenu;

            //기본 좌표 값
            nGap = 22; //버튼과 스테틱과의 간격
            arrBtnRect = [0, 0, 60, 61,null,null];     //기본 버튼
            arrBtnTRect = [0, nGap, 58, 39,null,null]; //텍스트 버튼

            //대메뉴인 행 가져오기
            arrRows = take.getFindRowsExpr(objMenuDs, "MENU_LEVEL=='0'");
            //대메뉴 갯수
            nCnt = arrRows.length;

            //대메뉴가 있으면
            if (nCnt<=0)
            {
                take.debug(this, "대메뉴가 없습니다.");
                return;
            }

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

            //대메뉴 컴포넌트 생성
            for (var i=0; i<nCnt; i++)
            {
                nRow = arrRows[i];

                //대 메뉴 정보
                sMenuId = objMenuDs.getColumn(nRow, "MENU_CD");
                sMenuNm = objMenuDs.getColumn(nRow, "MENU_NM");
                objImg = take.nvl(objMenuDs.getColumn(nRow, "MENU_ICON"), "icoTakeMenu05.png");

                //대 메뉴 생성 (각 대 메뉴별로 이미지버튼, 텍스트버튼 2개 생성)
                objBtnMenu = this.fnNewBtn(objScope, "btnMenu_"+sMenuId,  "btn_LF_icon", objImg, "", this.fnBtnMenu_onclick, arrBtnRect);
                objBtnMenuT = this.fnNewBtn(objScope, "btnMenuT_"+sMenuId, "btn_LF_text", "", sMenuNm, this.fnBtnMenu_onclick, arrBtnTRect);

                //대 메뉴 아이디 저장
                objBtnMenu.menuId = sMenuId, objBtnMenuT.menuId = sMenuId;

                //좌표 재 설정, left를 그룹 메뉴 버튼 넓이 만큼 증가(여백-1)
                arrBtnRect[1]+=(arrBtnRect[3]-1);
                arrBtnTRect[1]+=(arrBtnTRect[3]+nGap-1);
            }

            //최상위 대메뉴를 보여준다.
            this.fnSetMenu(objMenuDs.getColumn(arrRows[0], "MENU_CD"), false);

        	//20210126 정해원 autoindicator가 최초 작동 안하는 버그 수정
        	this.divGrp.form.resetScroll();
        }

        /**
         * fnSetMenu : 그룹 메뉴에 해당하는 메뉴 세팅
         * @param  {String} sGrpMenuId 그룹 메뉴 아이디
         * @example this.fnSetMenu("G1001");
         */
        this.fnSetMenu = function(sGrpMenuId, bShowHide)
        {
            //변수 선언 및 세팅
            var objMenuDs, objMenuGrid;

            bShowHide = take.nvl(bShowHide,true);

            objMenuDs = this.dsMenu;
            objMenuGrid = this.divMenu.form.grdMenu;

            //그룹 메뉴의 하위 리스트만 보이기 때문에 스타트 트리 레벨을 1로 세팅
            objMenuGrid.setCellProperty("body",0,"treestartlevel",1);

            //메뉴 데이터셋 바인딩
            objMenuGrid.set_enableevent(false);
            objMenuGrid.setBindDataset(objMenuDs);
            objMenuGrid.set_enableevent(true);

            objMenuDs.filter("N/A");

            nexacro._OnceCallbackTimer.callonce
            (
                this,
                function ()
                {
                    objMenuGrid.set_enableevent(false);
                    objMenuDs.set_enableevent(false);

                    //해당 그룹 메뉴만 보이도록 데이터 필터링 (그룹메뉴가 아니고 보이는 메뉴인 데이터)
                    objMenuDs.filter("MENU_LEVEL!='0' && DISPLAY_YN=='Y' && ROOT_MENU=='"+sGrpMenuId+"'");

                    objMenuDs.set_enableevent(true);
                    objMenuGrid.set_enableevent(true);
                },
                1
            );

            //Left 메뉴가 보이도록 처리
            if (bShowHide) UXBooster.FoldButton.fnShowHide(true);
        }

        /**
         * fnMenuFilter : 메뉴 조회
         * @param  {N/A} N/A
         * @example this.fnMenuFilter();
         */
        this.fnMenuFilter = function(sText)
        {
            var sSearchTxt, sMenuCd, sMenuNm, sFilterStr;
            var nCnt;
            var bRtn;
            var objMenuGrid, objMenuDs;

            objMenuGrid = this.divMenu.form.grdMenu;
            objMenuDs = this.dsMenu;

            sSearchTxt = take.nvl(sText, this.divMenu.form.edtSearch.value);

            //메뉴 그리드에 최근 열어본 메뉴 데이터셋 바인딩
            objMenuGrid.setBindDataset(objMenuDs);

            //검색 메뉴는 0depth 부터 시작
            objMenuGrid.setCellProperty("body",0,"treestartlevel",1);
            sFilterStr = "MENU_TYPE!='01' && MENU_TYPE!='02' && MENU_TYPE!='06' && (MENU_NM.match('"+sSearchTxt+"')=='"+sSearchTxt+"' || MENU_CD.match('"+sSearchTxt+"')=='"+sSearchTxt+"')";

            objMenuDs.filter(sFilterStr);

        //     nCnt = objMenuDs.rowcount;
        //
        //     if (nCnt==1)
        //     {
        //         sMenuCd = objMenuDs.getColumn(0, "MENU_CD");
        //         sMenuNm = objMenuDs.getColumn(0, "MENU_NM");
        //
        //         bRtn = take.confirm(this, "question", sMenuNm + "(" + sMenuCd + ")를 오픈하시겠습니까.?");
        //
        //         if (bRtn)
        //         {
        //             take.mdiOpenMenu(this, sMenuCd, "", "", true, sMenuNm);
        //         }
        //     }
        }
        /**
         * fnGetSearchMenuList : 메뉴 조회
         * @param  {N/A} N/A
         * @example this.fnGetSearchMenuList();
         */
        this.fnGetSearchMenuList = function()
        {
            var sProjectCd, sParam, sSearchTxt, sMenuCd, sMenuNm;
            var objMenuSearchDs, objMenuGrid;
            var nCnt;
            var bRtn;

            sProjectCd = nexacro.getApplication().av_sProjectCd;
            sSearchTxt = this.divMenu.form.edtSearch.value;
            sParam = "sProjectCd=" + sProjectCd +" sSearchTxt=" + sSearchTxt;
            objMenuGrid = this.divMenu.form.grdMenu;
            objMenuSearchDs = this.dsSearchMenu;

            objMenuSearchDs.clearData();

            //검색 메뉴는 0depth 부터 시작
            objMenuGrid.setCellProperty("body",0,"treestartlevel",0);

            //메뉴 그리드에 최근 열어본 메뉴 데이터셋 바인딩
            objMenuGrid.setBindDataset(objMenuSearchDs);

            take.tranSelect(
                this,
                "MenuSelect",
                "Main.userMenuSelect",
                "",
                "dsSearchMenu",
                sParam,
                function(sId, nErrCd, sErrMsg)
                {
                    //trace(this.dsSearchMenu.saveXML());
                },
                false
            );

            nCnt = objMenuSearchDs.rowcount;

            if (nCnt==1)
            {
                sMenuCd = this.dsSearchMenu.getColumn(0, "MENU_CD");
                sMenuNm = this.dsSearchMenu.getColumn(0, "MENU_NM");

                bRtn = take.confirm(this, "question", sMenuNm + "(" + sMenuCd + ")를 오픈하시겠습니까.?");

                if (bRtn)
                {
                    take.mdiOpenMenu(this, sMenuCd, "", "", true, sMenuNm);
                }
            }
        }

        /**
         * fnNewBtn : Button Component 동적 생성
         * @param  {String} sScope  생성 위치
         * @param  {String} sBtnId  버튼 아이디
         * @param  {String} sCss    CSS클래스
         * @param  {String} sImg    버튼 이미지
         * @param  {String} sBtnTxt 버튼 TEXT
         * @param  {String} sEvent  버튼 이벤트
         * @param  {Array}  nRect   버튼 생성 좌표
         * @return {Object} objBtn  생성된 버튼 Object
         * @example this.fnNewBtn(sParam, nParam);
         */
        this.fnNewBtn = function(objScope, sBtnId, sCss, sImg, sBtnTxt, sEvent, arrRect)
        {
        	//버튼 컴포넌트 생성
        	var objBtn = new Button();
        	objBtn.init(sBtnId, arrRect[0], arrRect[1], arrRect[2], arrRect[3], arrRect[4], arrRect[5]);
        	objScope.addChild(sBtnId, objBtn);
        	if (take.nvl(sEvent,"")!="") objBtn.addEventHandler("onclick", sEvent, this); //버튼에 부여할 이벤트

        	objBtn.addEventHandler("onmouseleave", this.fnBtnMenu_onmouseleave, this);
        	objBtn.addEventHandler("onmouseenter", this.fnBtnMenu_onmouseenter, this);
        	objBtn.addEventHandler("onsetfocus", this.fnBtnMenu_onsetfocus, this);

        	objBtn.show();

        	//CSS 클래스가 있을경우만 세팅
        	if (sCss!="") objBtn.set_cssclass(sCss);

            //Image가 있을경우만 세팅
        	var sUrl = take.getSvcUrl();
        	if (sImg!="") objBtn.set_background( 'url("'+sUrl+'images/icon/'+ sImg +'") no-repeat center top transparent');

        	//버튼 text 및 기본 값 세팅
        	objBtn.set_tooltiptext(sBtnTxt);
        	objBtn.set_tooltiptype("hover");
        	objBtn.set_enable(true);
        	objBtn.set_text(sBtnTxt);
        	objBtn.set_visible(true);

        	//보이기
        	return objBtn;
        };

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
            if (take.nvl(sEvent,"")!="") objSta.addEventHandler("onclick", sEvent, this); //스테틱에 부여할 이벤트
        	objSta.show();

        	//CSS 클래스가 있을경우만 세팅
            //trace("sCss --> " + sCss);
        	if (sCss!="") objSta.set_cssclass(sCss);

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
         * fnGetMenuId : 메뉴 아이디 찾기
         * @param  {Object} objDsMenu Dataset
         * @param  {Number} 메뉴 코드
         * @example this.fnGetMenuId(this.dataset00, 0);
         */
        this.fnGetMenuId = function(objDs, nRow)
        {
            var sMenuCd, sUserParam;

            //메뉴 코드 확인
            sMenuCd = objDs.getColumn(nRow, "MENU_CD");

        	if (take.nvl(sUserParam, "")=="") sUserParam = objDs.getColumn(nRow,"MENU_PARAM");
        	var objUserParam = take.StringToObject(sUserParam);

            //메뉴 선택
            this.fnMenuSelect(objDs, sMenuCd, objUserParam);
        }

        /**
         * fnMenuSelect : 메뉴 선택
         * @param  {Object} objDsMenu Dataset
         * @param  {String} 메뉴 코드
         * @param  {String} sUserParam 화면에 전달할 파라메터
         * @param  {String} sCallFunc 메뉴 오픈 후 실행될 콜백 함수
         * @param  {boolean} bPopUp 팝업여부
         * @param  {String}  sPopOption 팝업옵션
         * @example this.fnMenuSelect(objDs, 0, "", "fnCallBack", false, "showtitle=true");
         */
        this.fnMenuSelect = function(objDsMenu, sMenuCd, sUserParam, sCallFunc, bPopUp, sPopOption)
        {
            //변수선언
            var sType;
            var objDs, objDsMenu, objGrid, objMdiForm, objWorkForm;
            var bSucc;
            var nFRow, nNRow, nMdiCnt = parseInt(nexacro.getApplication().av_nMdiCnt);

            //메뉴 리스트 데이터셋 체크
            if (take.nvl(objDsMenu,"")=="")
            {
                take.error(this, "System Error(Dataset은 필수 인자 입니다.)");
                return;
            }

            //선택된 메뉴 Row 찾기
            nRow = objDsMenu.findRowNF("MENU_CD",sMenuCd);

            if (nRow<0)
            {
                //해당 메뉴를 오픈할 수 없습니다. 권한을 확인해 주세요.
                take.alert(this, "Info", "해당 메뉴를 오픈할 수 없습니다. 권한을 확인해 주세요.");	//0080: 해당 메뉴를 오픈할 수 없습니다. 권한을 확인해 주세요.
            } else {

        		// 20210203 메뉴 권한여부 확인 by cws
        		take.tranSelect(
        			this,  //Form 객체
                    "menuBtnRole",
                    "Main.userButtonRoleSelect",
                    "",
                    "dsBtnRole",
                    "sMenuCd='" + sMenuCd +"' sProjectCd='" + UXBooster.av_sProjectCd + "'",
        			function (sId, nErr, sMsg) {
        				var sBtnRole;
        				sBtnRole = take.nvl(this.dsBtnRole.getColumn(0,"BTN_ROLE"),"NNNNN");

        				if (sBtnRole == "NNNNN")
        				{
        					take.alert(this, "Info", "해당 메뉴를 오픈할 수 없습니다. 권한을 확인해 주세요.");	//0080: 해당 메뉴를 오픈할 수 없습니다. 권한을 확인해 주세요.
        				}else{
        					//메뉴 타입 확인
        					sType = take.nvl(objDsMenu.getColumnNF(nRow, "MENU_TYPE"), "02");

        					//팝업으로 띄울 경우 (개발자 옵션)
        					if (bPopUp) sType="06";

        					//오픈 메뉴 데이터 셋
        					objDs = UXBooster.MdiFrame.form.dsOpenMenu;

        					//이미 열려잇는 화면이 있는지 확인
        					nFRow = objDs.findRow("MENU_CD", sMenuCd);

        					//메뉴 타입에 따라 분기 처리
        					switch (sType)
        					{
        						case "03": //화면
        						case "04": //데쉬보드
        						case "05": //링크
        							//이미 열려있는 화면이 있을경우 해당 화면을 Active
        							if (nFRow>=0)
        							{
        								objWorkForm = (UXBooster.MainFrame.form.fnActiveMenu(objDs, nFRow)).form.divForm;
        			//                     objWorkForm.UserParam = sUserParam;
        			//                     objWorkForm.form.UserParam = sUserParam;

        								if (take.nvl(sCallFunc,"")!="")
        								{
        									if (take.isFunction(objWorkForm.form[sCallFunc]))
        									{
        										objWorkForm.form[sCallFunc].call(objWorkForm.form, sUserParam);
        									}
        								}
        								return;
        							} else {
        								if (objDs.rowcount>=nMdiCnt)
        								{
        									//MDI Tab은 {count}개 까지만 생성이 가능합니다. 열려있는 Tab을 닫고 오픈해 주세요.
        									take.alert(this, "Info", "MDI Tab은 "+nMdiCnt+"개 까지만 생성이 가능합니다. 열려있는 Tab을 닫고 오픈해 주세요.");	//0081: MDI Tab은 8개 까지만 생성이 가능합니다. 열려있는 Tab을 닫고 오픈해 주세요.
        									return ;
        								} else {
        									//메뉴 데이터를 오픈 데이터셋에 복사
        									nNRow = this.fnCopyMenuData(objDs, objDsMenu, nRow);

        									//성공일 경우 해당 메뉴 오픈
        									if (nNRow>=0)
        									{
        										UXBooster.MainFrame.form.fnMenuOpen(objDs, sType, nNRow, sUserParam);
        									} else {
        										take.error(this, "System Error(MdiFrame dsOpenMenu에 Dataset Copy 실패)");
        									}
        								}
        							}

        							break;
        						case "01": //시스템
        						case "02": //메뉴
        							///N/A
        							break;
        						case "06": //팝업

        							//이미 열려있는 화면이 있을경우 해당 화면을 Active
        							if (nFRow>=0)
        							{
        								 /// TODO 열려있는 팝업 찾기 추가 필요
        							} else {
        								//메뉴 데이터를 오픈 데이터셋에 복사
        								//nNRow = this.fnCopyMenuData(objDs, objDsMenu, nRow);

        								//메뉴정보 : 메뉴아이디, 메뉴명
        								var objMenuInfo = {
        									  prefix 	: objDsMenu.getColumnNF(nRow, "PROGRAM_PREFIX")
        									, progId 	: objDsMenu.getColumnNF(nRow, "MENU_CD")
        									, progNm 	: objDsMenu.getColumnNF(nRow, "MENU_NM")
        									, menuUrl	: objDsMenu.getColumnNF(nRow, "MENU_URL")
        								};

        								UXBooster.MainFrame.form.fnMenuOpenPopUp(objMenuInfo, sUserParam, sCallFunc, sPopOption);
        							}

        							break;
        						default:
        							break;
        					}
        				}
        			},
        			false);
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////
        /**
         * fnProgMenu : 프로그램 아이디에 해당하는 메뉴 오픈
         * @param  {String}  sProgId
         * @param  {String}  sUserParam 화면에 전달할 파라메터
         * @param  {String}  sCallFunc  화면에 호출할 함수
         * @param  {Boolean} bNewOpen 신규 화면 오픈 여부(true면 닫고 오픈)
         * @return {N/A}    N/A
         * @example this.fnProgMenu("P123456789", "test|01");
         */
        this.fnProgMenu = function(sProgId, sUserParam, sCallFunc, bNewOpen)
        {
            //변수 선언
            var nFRow, nOpenFRow;
            var objDiv, objDsOpenMenu, objMdiForm, objWorkForm;
            var bSucc;
            var sGbn, sMenuCd;

            sGbn = "Menu";

            //메뉴에서 해당 프로그램아이디 찾기
        	//trace(this.dsMenu.saveXML());
            //nFRow = this.dsMenu.findRowAsNF("MENU_URL", sProgId);
        	nFRow = this.dsMenu.findRowAsNF("MENU_CD", sProgId);
        	sMenuCd = sProgId; //this.dsMenu.getColumnNF(nFRow,"MENU_CD");

            //해당 아이디의 메뉴가 있을경우
            if (nFRow>=0)
            {
                objDsOpenMenu = UXBooster.MdiFrame.form.dsOpenMenu;//nexacro.getApplication().gdsOpenMenu;

                //이미 오픈되어 있는 화면일 경우
                //nOpenFRow = objDsOpenMenu.findRow("MENU_URL", sProgId);
        		nOpenFRow = objDsOpenMenu.findRow("MENU_CD", sMenuCd);
                if (nOpenFRow>=0)
                {
                    objDiv = this.getOwnerFrame().form.components["divWork_" + objDsOpenMenu.getColumn(nOpenFRow, "PROGRAM_PREFIX") + "_" + objDsOpenMenu.getColumn(nOpenFRow, "MENU_CD")];
                    if (bNewOpen)
                    {
                        if (this.getOwnerFrame().form.fnMdiDestroy(objDiv))
                        {
                            bSucc=true;
                        } else {
                            bSucc=false;
                            take.trace("System", "ERROR", "MDI 제거 실패");
                        }
                    } else {
                        objMdiForm = this.getOwnerFrame().form.fnActiveMenu(objDsOpenMenu,nOpenFRow);
                        objWorkForm = objMdiForm.form.divForm;

                        objWorkForm.UserParam = sUserParam;
                        objWorkForm.form.UserParam = sUserParam;

                        if (take.nvl(sCallFunc,"")!="")
                        {
                            if (take.isFunction(objWorkForm.form[sCallFunc]))
                            {
                                //비동기라 열려있는 화면에서만 적용 가능
                                objWorkForm.form[sCallFunc].call(objWorkForm.form,sParam);
                            }
                        }
                        return;
                    }
                } else {
                    bSucc=true;
                }

                //메뉴Div에 메뉴 선택 함수 호출
                if (take.nvl(sUserParam, "")=="") sUserParam = this.dsMenu.getColumn(nFRow,"MENU_PARAM");

                if (bSucc) this.fnMenuSelect(this.dsMenu, sMenuCd, sUserParam);

            } else {
                //안내
                //해당 메뉴가 없습니다.
                take.alert(this, "Info", "해당 메뉴가 존재하지 않습니다. 권한을 확인해 주세요.");
            }
        };


        /**
         * fnCopyMenuData : 메뉴 정보를 Open Dataset에 세팅
         * @param  {Object} 오픈 메뉴 Dataset
         * @param  {Object} 메뉴 Dataset
         * @param  {Number} 메뉴로 선택된 행
         * @example this.fnCopyMenuData(this.dsOpenMenu, this.dsMenu, 0);
         */
        this.fnCopyMenuData = function(objOpenDs, objMenuDs, nRow)
        {
            try {
                //오픈 메뉴 데이터셋 이벤트 중지
                objOpenDs.set_enableevent(false);

                //오픈 메뉴 데이터셋에 행 추가
                nNRow = objOpenDs.addRow();

                //오픈 메뉴 데이터셋 메뉴 정보 세팅
                if(!objOpenDs.setColumn(nNRow, "MENU_CD",        objMenuDs.getColumnNF(nRow, "MENU_CD")))        throw "menu_cd setcolumn error";
                if(!objOpenDs.setColumn(nNRow, "MENU_NM",        objMenuDs.getColumnNF(nRow, "MENU_NM")))        throw "menu_nm setcolumn error";
                if(!objOpenDs.setColumn(nNRow, "MENU_URL",       objMenuDs.getColumnNF(nRow, "MENU_URL")))       throw "menu_url setcolumn error";
                if(!objOpenDs.setColumn(nNRow, "MENU_TYPE",      objMenuDs.getColumnNF(nRow, "MENU_TYPE")))      throw "menu_type setcolumn error";
                if(!objOpenDs.setColumn(nNRow, "PROGRAM_PREFIX", objMenuDs.getColumnNF(nRow, "PROGRAM_PREFIX"))) throw "program_prefix setcolumn error";
                if(!objOpenDs.setColumn(nNRow, "OPEN_GBN",       objMenuDs.name))                                throw "open_gbn setcolumn error";

                //오픈 메뉴 데이터셋 이벤트 실행
                objOpenDs.set_enableevent(true);

                return nNRow;
            } catch(e) {
                //에러 처리
                take.error(this, e);
                objOpenDs.set_enableevent(true);
                return -1;
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divMenu.form.grdMenu.addEventHandler("oncellclick",this.divMenu_grdMenu_oncellclick,this);
            this.divMenu.form.grdMenu.addEventHandler("onrbuttondown",this.divMenu_grdMenu_onrbuttondown,this);
            this.divMenu.form.edtSearch.addEventHandler("onkeydown",this.divMenu_edtSearch_onkeydown,this);
            this.divMenu.form.edtSearch.addEventHandler("oninput",this.divMenu_edtSearch_oninput,this);
            this.btnHisMenu.addEventHandler("onclick",this.btnHisMenu_onclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.pDivMyMenu.form.btnMyMenuAdd.addEventHandler("onclick",this.pDivMyMenu_btnMyMenu_onclick,this);
            this.pDivMyMenu.form.btnMyMenuDel.addEventHandler("onclick",this.pDivMyMenu_btnMyMenu_onclick,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
