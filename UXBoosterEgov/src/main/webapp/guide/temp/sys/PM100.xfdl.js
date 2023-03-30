(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM100");
            this.set_titletext("대시보드_대시보드 권한관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectRoleList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_ENG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"DESC_TXT\" type=\"STRING\" size=\"255\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"REG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_CD\" type=\"STRING\" size=\"255\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MAIN_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDashDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"R_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","staProjectNmT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
            obj.set_cssclass("cmb_WF_essential");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRoleT","cboProjectNm:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtRole","staRoleT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","edtRole:50","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staUseYnT:10","10","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","0","20",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","20","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_01","20","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","305","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","355","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_01","355","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_01","640","0","50",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("50");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","690","0","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","690","31","285","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("285");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","62",null,null,"10","10","1020",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSpliter","445","26","10",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_splitter");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdRoleList","0","26",null,null,"btnSpliter:5","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsProjectRoleList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"99\"/><Column size=\"100\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"권한코드\" autosizecol=\"default\"/><Cell col=\"2\" text=\"권한명\" displaytype=\"normal\" autosizecol=\"default\"/><Cell col=\"3\" text=\"권한영문명\" autosizecol=\"default\"/><Cell col=\"4\" text=\"사용\" autosizecol=\"default\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ROLE_CD\" autosizecol=\"default\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ROLE_NM\" displaytype=\"text\" edittype=\"text\" autosizecol=\"default\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:ROLE_ENG_NM\" autosizecol=\"default\" editmaxlength=\"15\"/><Cell col=\"4\" text=\"bind:USE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"default\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdRoleMenu","btnSpliter:5","26",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDashDetailList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\" edittype=\"none\" displaytype=\"normal\" autosizecol=\"default\"/><Cell col=\"1\" text=\"대시보드명\" autosizecol=\"default\"/><Cell col=\"2\" text=\"유형\" edittype=\"checkbox\" autosizecol=\"default\"/><Cell col=\"3\" text=\"View\" edittype=\"checkbox\" autosizecol=\"default\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"default\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DASH_NM\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"default\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DASH_TYPE_NM\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"default\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:R_USE\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\" autosizecol=\"default\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRoleListT","0","0",null,null,"1199","btnSpliter:5",null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("권한 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRoleMapT","btnSpliter:5","0",null,"21","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("대시보드 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnRoleSave",null,"0","46",null,"0","566",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_save02");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staProjectNmT.set_taborder("3");
                p.staProjectNmT.set_text("프로젝트");
                p.staProjectNmT.set_cssclass("sta_WF_textR");
                p.staProjectNmT.move("20","10","80","21",null,null);

                p.cboProjectNm.set_taborder("0");
                p.cboProjectNm.set_innerdataset("dsCboProjectCd");
                p.cboProjectNm.set_codecolumn("CODE");
                p.cboProjectNm.set_datacolumn("NAME");
                p.cboProjectNm.set_readonly("true");
                p.cboProjectNm.set_cssclass("cmb_WF_essential");
                p.cboProjectNm.set_text("Combo00");
                p.cboProjectNm.move("staProjectNmT:10","10","195","21",null,null);

                p.staRoleT.set_taborder("4");
                p.staRoleT.set_text("권한명");
                p.staRoleT.set_cssclass("sta_WF_textR");
                p.staRoleT.move("cboProjectNm:50","10","80","21",null,null);

                p.edtRole.set_taborder("1");
                p.edtRole.move("staRoleT:10","10","195","21",null,null);

                p.staUseYnT.set_taborder("5");
                p.staUseYnT.set_text("사용여부");
                p.staUseYnT.set_cssclass("sta_WF_textR");
                p.staUseYnT.move("edtRole:50","10","80","21",null,null);

                p.cboUseYn.set_taborder("2");
                p.cboUseYn.set_innerdataset("dsCboUseYn");
                p.cboUseYn.set_codecolumn("CODE");
                p.cboUseYn.set_datacolumn("NAME");
                p.cboUseYn.set_text("Combo00");
                p.cboUseYn.move("staUseYnT:10","10","195","21",null,null);

                p.Static07_00.set_taborder("6");
                p.Static07_00.set_text("20");
                p.Static07_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00.set_visible("false");
                p.Static07_00.set_color("#ff0000");
                p.Static07_00.set_textAlign("center");
                p.Static07_00.move("0","0","20",null,null,"0");

                p.Static07_00_00.set_taborder("7");
                p.Static07_00_00.set_text("285");
                p.Static07_00_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_00.set_visible("false");
                p.Static07_00_00.set_color("#ff0000");
                p.Static07_00_00.set_textAlign("center");
                p.Static07_00_00.move("20","0","285","10",null,null);

                p.Static07_00_00_01.set_taborder("8");
                p.Static07_00_00_01.set_text("285");
                p.Static07_00_00_01.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_00_01.set_visible("false");
                p.Static07_00_00_01.set_color("#ff0000");
                p.Static07_00_00_01.set_textAlign("center");
                p.Static07_00_00_01.move("20","31","285","10",null,null);

                p.Static07.set_taborder("9");
                p.Static07.set_text("50");
                p.Static07.set_background("rgba(255,0,0,0.4)");
                p.Static07.set_visible("false");
                p.Static07.set_color("#ff0000");
                p.Static07.set_textAlign("center");
                p.Static07.move("305","0","50",null,null,"0");

                p.Static07_00_00_00.set_taborder("10");
                p.Static07_00_00_00.set_text("285");
                p.Static07_00_00_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_00_00.set_visible("false");
                p.Static07_00_00_00.set_color("#ff0000");
                p.Static07_00_00_00.set_textAlign("center");
                p.Static07_00_00_00.move("355","0","285","10",null,null);

                p.Static07_00_00_00_01.set_taborder("11");
                p.Static07_00_00_00_01.set_text("285");
                p.Static07_00_00_00_01.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_00_00_01.set_visible("false");
                p.Static07_00_00_00_01.set_color("#ff0000");
                p.Static07_00_00_00_01.set_textAlign("center");
                p.Static07_00_00_00_01.move("355","31","285","10",null,null);

                p.Static07_01.set_taborder("12");
                p.Static07_01.set_text("50");
                p.Static07_01.set_background("rgba(255,0,0,0.4)");
                p.Static07_01.set_visible("false");
                p.Static07_01.set_color("#ff0000");
                p.Static07_01.set_textAlign("center");
                p.Static07_01.move("640","0","50",null,null,"0");

                p.Static07_00_00_00_00.set_taborder("13");
                p.Static07_00_00_00_00.set_text("285");
                p.Static07_00_00_00_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_00_00_00.set_visible("false");
                p.Static07_00_00_00_00.set_color("#ff0000");
                p.Static07_00_00_00_00.set_textAlign("center");
                p.Static07_00_00_00_00.move("690","0","285","10",null,null);

                p.Static07_00_00_00_00_00.set_taborder("14");
                p.Static07_00_00_00_00_00.set_text("285");
                p.Static07_00_00_00_00_00.set_background("rgba(255,0,0,0.4)");
                p.Static07_00_00_00_00_00.set_visible("false");
                p.Static07_00_00_00_00_00.set_color("#ff0000");
                p.Static07_00_00_00_00_00.set_textAlign("center");
                p.Static07_00_00_00_00_00.move("690","31","285","10",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("default0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staProjectNmT.set_taborder("2");
                p.staProjectNmT.set_text("프로젝트");
                p.staProjectNmT.set_cssclass("sta_WF_textRImport");
                p.staProjectNmT.move("20","10","80","21",null,null);

                p.staRoleT.set_taborder("3");
                p.staRoleT.set_text("권한");
                p.staRoleT.set_cssclass("sta_WF_textR");
                p.staRoleT.move("354","10","80","21",null,null);

                p.edtRole.set_taborder("0");
                p.edtRole.move("438","10","231","21",null,null);

                p.staUseYnT.set_taborder("4");
                p.staUseYnT.set_text("사용여부");
                p.staUseYnT.set_cssclass("sta_WF_textR");
                p.staUseYnT.move("688","10","80","21",null,null);

                p.cboUseYn.set_taborder("1");
                p.cboUseYn.set_innerdataset("dsCboUseYn");
                p.cboUseYn.set_codecolumn("CODE");
                p.cboUseYn.set_datacolumn("NAME");
                p.cboUseYn.set_text("Combo00");
                p.cboUseYn.move("772","10","227","21",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btnSpliter.set_taborder("5");
                p.btnSpliter.set_cssclass("btn_WF_splitter");
                p.btnSpliter.move("445","26","10",null,null,"0");

                p.grdRoleList.set_taborder("0");
                p.grdRoleList.set_binddataset("dsProjectRoleList");
                p.grdRoleList.set_autofittype("col");
                p.grdRoleList.move("0","26",null,null,"btnSpliter:5","0");

                p.grdRoleMenu.set_taborder("1");
                p.grdRoleMenu.set_autofittype("col");
                p.grdRoleMenu.set_treeusecheckbox("false");
                p.grdRoleMenu.set_treeinitstatus("expand,all");
                p.grdRoleMenu.set_cellclickbound("cell");
                p.grdRoleMenu.set_binddataset("dsDashDetailList");
                p.grdRoleMenu.move("btnSpliter:5","26",null,null,"0","0");

                p.staRoleListT.set_taborder("2");
                p.staRoleListT.set_text("권한 목록");
                p.staRoleListT.set_cssclass("sta_WF_title02");
                p.staRoleListT.move("0","0",null,null,"1199","btnSpliter:5");

                p.staRoleMapT.set_taborder("3");
                p.staRoleMapT.set_text("대시보드 목록");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move("btnSpliter:5","0",null,"21","10",null);

                p.btnRoleSave.set_taborder("4");
                p.btnRoleSave.set_text("저장");
                p.btnRoleSave.set_cssclass("btn_WF_save02");
                p.btnRoleSave.move(null,"0","46",null,"0","566");
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("default0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRoleMenu.set_taborder("0");
                p.grdRoleMenu.set_binddataset("dsProjectRoleMenuList");
                p.grdRoleMenu.set_autofittype("col");
                p.grdRoleMenu.set_treeusecheckbox("false");
                p.grdRoleMenu.set_autosizingtype("col");
                p.grdRoleMenu.set_oncellclick("grdRoleMenu_oncellclick");
                p.grdRoleMenu.move("320","30",null,null,"8","10");

                p.staRoleListT.set_taborder("1");
                p.staRoleListT.set_text("권한 목록");
                p.staRoleListT.set_cssclass("sta_WF_title02");
                p.staRoleListT.move("0","0","450","30",null,null);

                p.grdRoleList.set_taborder("2");
                p.grdRoleList.set_binddataset("dsProjectRoleList");
                p.grdRoleList.set_autosizingtype("col");
                p.grdRoleList.set_onselectchanged("grdRoleList_onselectchanged");
                p.grdRoleList.move("10","30","300",null,null,"10");

                p.staRoleMapT.set_taborder("3");
                p.staRoleMapT.set_text("권한 매핑");
                p.staRoleMapT.set_cssclass("sta_WF_title02");
                p.staRoleMapT.move("318","0",null,"30","162",null);

                p.btnRoleSave.set_taborder("4");
                p.btnRoleSave.set_text("저장");
                p.btnRoleSave.set_cssclass("btn_WF_basic01");
                p.btnRoleSave.set_onclick("btnRoleSave_onclick");
                p.btnRoleSave.move(null,"3","46","23","8",null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1659,659,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("대시보드_대시보드 권한관리");

                p.divSearch.set_taborder("0");
                p.divSearch.set_cssclass("div_WF_searchBox01");
                p.divSearch.set_text("");
                p.divSearch.set_minwidth("1020");
                p.divSearch.set_maxwidth("");
                p.divSearch.move("10","0",null,"43","10",null);

                p.btnShowHide.set_taborder("2");
                p.btnShowHide.set_cssclass("btn_WF_fold01");
                p.btnShowHide.move("48.16%","divSearch:0","60","10",null,null);

                p.divDetail.set_taborder("1");
                p.divDetail.set_text("");
                p.divDetail.set_minwidth("1020");
                p.divDetail.set_maxwidth("");
                p.divDetail.move("10","62",null,null,"10","10");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","",1040,659,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.set_taborder("0");
                p.divSearch.set_cssclass("div_WF_searchBox01");
                p.divSearch.set_text("");
                p.divSearch.move("10","0",null,"43","10",null);

                p.btnShowHide.set_taborder("1");
                p.btnShowHide.set_cssclass("btn_WF_fold01");
                p.btnShowHide.move("485","42","70","10",null,null);

                p.divDetail.set_taborder("2");
                p.divDetail.set_text("");
                p.divDetail.move("0","62",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboProjectNm","value","dsSearch","PROJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtRole","value","dsSearch","ROLE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM100.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    PM > PM100
        *  @FileNAME    PM100.xfdl
        *  @Creator     김대승
        *  @CreateDate  2020.09.08
        *  @Version     1.0
        *  @Desction    대시보드 권한관리
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.09.08      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sGdsAdminYn   = null; 	 // gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = null;	 // gds _ 프로젝트코드


        this.fv_sSelectRow = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM100_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		UXBooster.afnUseSpliter(this, this.divDetail.form.btnSpliter);

        		this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	 // gds _ 관리자권한 여부
        		this.fv_sGdsProjectCd = UXBooster.gdsUserInfo.getColumn(0, "PROJECT_CD");	 // gds _ 프로젝트코드

        		// 초기화
                this.fnInit();
           }
        }

        /*********************************************************
        * 2 필수 FUNCTION 영역 (fnInit, fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        /**
         * fnInit : 초기화 함수 검색조건 초기화 및 온로드 세팅
         * @return {N/A}    N/A
         * @example this.fnInit();
         */
        this.fnInit = function()
        {
        	var objDiv, objDivSearch;
        	objDiv = this.divSearch.form;

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	objDiv.cboProjectNm.set_value(this.fv_sGdsProjectCd);
        	if(this.fv_sGdsAdminYn == "Y"){
        		objDiv.cboProjectNm.set_readonly(false);
        	}

        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

        	//필수 검색조건 추가
        	takeval.add
        	(
                this,
                "Search",                  //벨리데이션 그룹 아이디(그룹별로 추가할 수 있음)
                objDiv.cboProjectNm,       //체크 대상 컴포넌트
                objDiv.staProjectNmT.text, //체크할 명칭(ex:"사용여부")
                "value",                   //체크대상 (컴포넌트:Properti, Grid:Cell, Dataset:Column 명)
                true,                      //null check
                "string",                  //타입(string, number, date등)체크
                "",                        //체크수(문자는 자릿수, 숫자는 구간[form,to])
                ""
        	);                      	   //체크 완료후 Call Back function 명(생략가능)
        }

        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "projectRoleList";

        	//벨리데이션 체크
        	if(!takeval.check(this, "Search")) return;

        	this.dsProjectRoleList.clearData();
        	this.dsDashDetailList.clearData();
        	//this.divDetail.form.staRoleListT.set_text("권한 목록");
        	take.tranSelect
        	(
        		this,
        		"projectRoleList",
        		"ProjectManagement.projectRoleList",
        		"dsSearch",
        		"dsProjectRoleList",
        		"",
        		"fnCallBack"
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectRoleListSave";

        	if ( !take.isDsModified(this.dsProjectRoleList) )
        	{
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        	var sProjectCd, sRoleCd;
        	var objDsRoleList = this.dsProjectRoleList;
        	var nRow		  = objDsRoleList.rowposition;

        	switch(sTranId) {
        		case "projectRoleListSave":	// 좌측 그리드 권한정보 저장,수정
        			take.tranSave
        			(
        				this,
        				"projectRoleListSave",
        				"ProjectManagement.projectRole",
        				"dsProjectRoleList",
        				"",
        				"",
        				"fnCallBack"
        			)
        			break;

        		case "projectRoleAllDelete":	// 권한,권한메뉴 전부 삭제
        			sProjectCd = take.nvl(objDsRoleList.getColumn(nRow, "PROJECT_CD"), "");
        			sRoleCd    = take.nvl(objDsRoleList.getColumn(nRow, "ROLE_CD"), "");
        			take.transaction
        			(
        				this,
        				"projectRoleAllDelete",
        				"SVC_LOC::dh/projectRoleAllDelete.do",
        				"",
        				"",
        				"PROJECT_CD='" + sProjectCd + "' ROLE_CD ='" + sRoleCd + "'",
        				"fnCallBack"
        			);
        			break;
        	}
        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdRoleList";

        	var objDs, objDiv, objGrd;
        	var nRowPosi, nRowType;

        	objDs  = this.dsProjectRoleList;
        	objDiv = this.divDetail.form;
        	objGrd = objDiv.grdRoleList;

        	nRowPosi = objDs.rowposition;
        	nRowType = objDs.getRowType(nRowPosi);
        	if (nRowType == Dataset.ROWTYPE_INSERT)
        	{
        		return;
        	}

        	switch(sGrdId)
        	{
        		case "grdRoleList":
        			nRow = objDs.addRow();
        			objDs.setColumn(nRow, "PROJECT_CD", this.divSearch.form.cboProjectNm.value);
        			objDs.setColumn(nRow, "USE_YN", "Y");
        			this.fv_sSelectRow = "-1";

        			objGrd.setFocus();
        			objGrd.setCellPos(1, nRow);
        			break;
        	}
        };

        /**
         * fnDelRow : 행 삭제 함수 (필수) --> 공통 행삭제에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number, Array} arrnRow    deleteRow 리턴값
         * @return {N/A} N/A
         * @example this.fnDelRow(sGrdId, nRow);
         */
        this.fnDelRow = function(sGrdId, arrnRow)
        {
            //공통 행추가에서 호출할 디폴트값 세팅
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdRoleMenu";

        	var objDsProjRoleList;
        	var nRow, nSelProj;
        	var bRowChange;

        	objDsProjRoleList = this.dsProjectRoleList;

        	if(objDsProjRoleList.rowcount <= 0) {
        		//take.alert(this, "info", "권한 목록이 없습니다.");
        		take.alert(this, "Info", "MS00000011", {text:this.divDetail.form.staRoleListT.text});
        		return;
        	}

        	nRow       = objDsProjRoleList.rowposition;
        	nSelProj   = objDsProjRoleList.getColumn(nRow, "ROLE_NM");
        	bRowChange = take.confirm(this, "question", "MS00000071");
        	//bRowChange = take.confirm(this, "question", "{NAME}을(를) {text}하시겠습니까?", { NAME : nSelProj, text : "삭제"});

        	if (bRowChange)
        	{
        		objDsProjRoleList.set_enableevent(false);
        		objDsProjRoleList.set_updatecontrol(false);
        		objDsProjRoleList.setRowType(nRow, "D");
        		objDsProjRoleList.set_updatecontrol(true);
        		objDsProjRoleList.set_enableevent(true);

        		this.fnSave("projectRoleAllDelete");
        	}
        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /*
        * grdRoleList_onselectchanged : 좌측 프로젝트목록 선택 값 변경시 선택된 row의 프로젝트 상세 정보 조회
        */
        this.grdRoleList_onselectchanged = function(obj,e)
        {
        	var objDiv 		= this.divDetail.form;
        	var nPreSelRow  = parseInt(take.nvl(this.fv_sSelectRow, "-1"));
        	var nCurrSelRow = parseInt(take.nvl(objDiv.grdRoleList.getSelectedRows(), "-1"));
        	var sRowType;
        	var bRowChange;

        	if( nCurrSelRow != -1 && (nPreSelRow != nCurrSelRow) )
        	{
        		sRowType   = this.dsProjectRoleList.getRowType(nPreSelRow);
        		bRowChange = true;

        		if( "2" == sRowType || "4" == sRowType )
        		{
        			bRowChange = take.confirm(this, "question", "MS00000074");
        			//bRowChange = take.confirm(this, "String", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?");
        		}

        		if(bRowChange)
        		{
        			this.fnDetailSearch();
        		}
        		else
        		{
        			//nPreSelRow = ( "2" == sRowType ) ? -1 : nPreSelRow;
        			objDiv.grdRoleList.selectRow(nPreSelRow);
        		}
        	}
        	if (nPreSelRow == 0 && (nPreSelRow == nCurrSelRow) && this.fv_sProjectCd != "")
        	{
        		this.fnDetailSearch();
        	}
        };

        /*
        * btnRoleSave_onclick : 권한메뉴목록 저장 버튼
        */
        this.btnRoleSave_onclick = function(obj,e)
        {
        	if (!take.isDsModified(this.dsDashDetailList))
        	{
        		//take.alert(this, "info", "변경된 내역이 없습니다.");
        		take.alert(this, "Info", "MS00000001");
        		return;
        	}

        	// 우측 그리드 권한목록 저장,수정
        	take.tranSave
        	(
        		this,
        		"dashRoleSave",
        		"DashManagement.dashRole",
        		"dsDashDetailList",
        		"",
        		"",
        		"fnCallBack"
        	)
        };

        /*
        * divSearch_edtRole_onkeyup : 검색조건 권한명 엔터 값
        */
        this.divSearch_edtRole_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fnSearch("projectRoleList");
        	}
        };

        /*
        * divSearch_Combo_onitemchanged : 검색조건 콤보 아이템 변경시 조회
        */
        this.divSearch_Combo_onitemchanged = function(obj,e)
        {
        	this.fnSearch("projectRoleList");
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	// 00009 검색조건  사용유무 	   (dsCboUseYn)
        	take.tranCode(this, "00009", "dsCboUseYn", "ALL",
        		function(sId, nErrCd, sErrMsg)
        		{
        			if (this.dsCboUseYn.rowcount > 0){
        				this.divSearch.form.cboUseYn.set_value("Y");
        			}
        			// 프로젝트 코드
        			take.tranSelect
        			(
        				this,
        				"projectInfoCode",
        				"ProjectManagement.projectInfoCode",
        				"",
        				"dsCboProjectCd",
        				"",
        				function(sId, nErrCd, sErrMsg)
        				{
        					var objDsCboProj = this.dsCboProjectCd;
        					if (objDsCboProj.rowcount>0)
        					{
        						var addInsertRow = objDsCboProj.insertRow(0)
        						objDsCboProj.setColumn(addInsertRow, "CODE", "");
        						//objDsCboProj.setColumn(addInsertRow, "NAME", "선택");
        						objDsCboProj.setColumn(addInsertRow, "NAME", take.getWord(this, "MS00000079"));
        					}
        				}
        			);
        			this.fnSearch("projectRoleList");
        		});
        };

        /**
         * fnDetailSearch : 좌측 그리드 메뉴목록 선택시 우측 디테일 데이터 조회 트랜잭션
         * @example this.fnDetailSearch();
         */
        this.fnDetailSearch = function ()
        {
        	this.dsDashDetailList.clearData();
        	this.fv_sSelectRow = this.divDetail.form.grdRoleList.getSelectedRows();

        	var objDsRoleList = this.dsProjectRoleList;
        	var nRow 	   	  = objDsRoleList.rowposition;
        	var sProjectCd 	  = take.nvl(objDsRoleList.getColumn(nRow, "PROJECT_CD"), "");	// 프로젝트명
        	var sRoleCd    	  = take.nvl(objDsRoleList.getColumn(nRow, "ROLE_CD"), "");		// 사용자코드

        	take.tranSelect
        	(
        		this,
        		"dashRoleList",
        		"DashManagement.dashRoleList",
        		"",
        		"dsDashDetailList",
        		"PROJECT_CD='" + sProjectCd + "' ROLE_CD='" + sRoleCd + "'",
        		"fnCallBack"
        	)
        }
        /*********************************************************
         * 5 TRANSACTION OR CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallBack : transaction callback
        * @param  : svcId   - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : errCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : errMsg   - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallBack = function(sId, nErrCd, sErrMsg)
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
                case "projectRoleList" :		// 좌측 권한목록 조회 콜백
        			var objDs 	     = this.dsProjectRoleList;
        			var objDivDetail = this.divDetail.form;
        			var nRowCount    = objDs.rowcount;

        			if (nRowCount > 0){
        				//objDivDetail.staRoleListT.set_text("권한 목록 ("+nRowCount+"건)");
        				objDivDetail.grdRoleList.selectRow(0);
        			} else {
        				//objDivDetail.staRoleListT.set_text("권한 목록 (0건)");
        			}
                    break;

        		case "projectRoleListSave" :  	// 좌측 권한목록 저장 콜백
        			this.fnSearch("projectRoleList");
                    break;

                case "dashRoleList" :			// 우측 권한목록 조회 콜백

                    break;

                case "dashRoleSave" : 			// 우측 권한목록 저장 콜백

                    break;

                case "projectRoleAllDelete" :  	// 삭제 콜백
                    this.fnSearch("projectRoleList");
                    break;

                default :
                    break;
            }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM100_onload,this);
            this.divSearch.form.cboProjectNm.addEventHandler("onitemchanged",this.divSearch_Combo_onitemchanged,this);
            this.divSearch.form.edtRole.addEventHandler("onkeyup",this.divSearch_edtRole_onkeyup,this);
            this.divSearch.form.cboUseYn.addEventHandler("onitemchanged",this.divSearch_Combo_onitemchanged,this);
            this.divDetail.form.btnSpliter.addEventHandler("ondrag",this.btnSpliter_ondrag,this);
            this.divDetail.form.grdRoleList.addEventHandler("onselectchanged",this.grdRoleList_onselectchanged,this);
            this.divDetail.form.btnRoleSave.addEventHandler("onclick",this.btnRoleSave_onclick,this);
            this.dsProjectRoleList.addEventHandler("onrowposchanged",this.dsProjectRoleList_onrowposchanged,this);
            this.dsProjectRoleList.addEventHandler("oncolumnchanged",this.dsProjectRoleList_oncolumnchanged,this);
        };
        this.loadIncludeScript("PM100.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
