(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PM030");
            this.set_titletext("프로젝트관리_메뉴관리_메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProjectMenuList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"project_cd\" type=\"STRING\" size=\"256\"/><Column id=\"menu_cd\" type=\"STRING\" size=\"256\"/><Column id=\"menu_nm\" type=\"STRING\" size=\"256\"/><Column id=\"parent_menu\" type=\"STRING\" size=\"256\"/><Column id=\"m_path\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"cycle\" type=\"STRING\" size=\"256\"/><Column id=\"menu_type\" type=\"STRING\" size=\"256\"/><Column id=\"menu_order\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDeviceType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMenuType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProjectMenuDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"project_cd\" type=\"STRING\" size=\"255\"/><Column id=\"menu_cd\" type=\"STRING\" size=\"255\"/><Column id=\"menu_nm\" type=\"STRING\" size=\"255\"/><Column id=\"ml_cd\" type=\"STRING\" size=\"255\"/><Column id=\"menu_icon\" type=\"STRING\" size=\"255\"/><Column id=\"device_type\" type=\"STRING\" size=\"255\"/><Column id=\"menu_type\" type=\"STRING\" size=\"255\"/><Column id=\"menu_level\" type=\"STRING\" size=\"255\"/><Column id=\"menu_order\" type=\"STRING\" size=\"255\"/><Column id=\"parent_menu_nm\" type=\"STRING\" size=\"256\"/><Column id=\"parent_menu\" type=\"STRING\" size=\"255\"/><Column id=\"display_yn\" type=\"STRING\" size=\"255\"/><Column id=\"desc_txt\" type=\"STRING\" size=\"255\"/><Column id=\"schedule_start_time\" type=\"STRING\" size=\"255\"/><Column id=\"schedule_end_time\" type=\"STRING\" size=\"255\"/><Column id=\"breaking_txt\" type=\"STRING\" size=\"255\"/><Column id=\"concent_txt\" type=\"STRING\" size=\"255\"/><Column id=\"attach_yn\" type=\"STRING\" size=\"255\"/><Column id=\"reply_yn\" type=\"STRING\" size=\"255\"/><Column id=\"template_yn\" type=\"STRING\" size=\"255\"/><Column id=\"template_nm\" type=\"STRING\" size=\"256\"/><Column id=\"template_cd\" type=\"STRING\" size=\"255\"/><Column id=\"push_yn\" type=\"STRING\" size=\"255\"/><Column id=\"document_type\" type=\"STRING\" size=\"255\"/><Column id=\"use_yn\" type=\"STRING\" size=\"255\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"255\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"255\"/><Column id=\"reg_nm\" type=\"STRING\" size=\"255\"/><Column id=\"mod_dt\" type=\"STRING\" size=\"255\"/><Column id=\"mod_cd\" type=\"STRING\" size=\"255\"/><Column id=\"mod_nm\" type=\"STRING\" size=\"255\"/><Column id=\"root_menu\" type=\"STRING\" size=\"256\"/><Column id=\"manual_txt\" type=\"STRING\" size=\"256\"/><Column id=\"program_cd\" type=\"STRING\" size=\"256\"/><Column id=\"program_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMultiLanguageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ml_cd\" type=\"STRING\" size=\"255\"/><Column id=\"lang_cd\" type=\"STRING\" size=\"255\"/><Column id=\"lang_nm\" type=\"STRING\" size=\"255\"/><Column id=\"ml_lang_txt\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboMenuYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDetailMenuType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj._setContents("<ColumnInfo><Column id=\"project_cd\" type=\"STRING\" size=\"255\"/><Column id=\"menu_cd\" type=\"STRING\" size=\"255\"/><Column id=\"menu_nm\" type=\"STRING\" size=\"255\"/><Column id=\"ml_cd\" type=\"STRING\" size=\"255\"/><Column id=\"menu_icon\" type=\"STRING\" size=\"255\"/><Column id=\"device_type\" type=\"STRING\" size=\"255\"/><Column id=\"menu_type\" type=\"STRING\" size=\"255\"/><Column id=\"menu_level\" type=\"STRING\" size=\"255\"/><Column id=\"menu_order\" type=\"STRING\" size=\"255\"/><Column id=\"parent_menu\" type=\"STRING\" size=\"255\"/><Column id=\"display_yn\" type=\"STRING\" size=\"255\"/><Column id=\"desc_txt\" type=\"STRING\" size=\"255\"/><Column id=\"schedule_start_time\" type=\"STRING\" size=\"255\"/><Column id=\"schedule_end_time\" type=\"STRING\" size=\"255\"/><Column id=\"breaking_txt\" type=\"STRING\" size=\"255\"/><Column id=\"concent_txt\" type=\"STRING\" size=\"255\"/><Column id=\"attach_yn\" type=\"STRING\" size=\"255\"/><Column id=\"reply_yn\" type=\"STRING\" size=\"255\"/><Column id=\"template_yn\" type=\"STRING\" size=\"255\"/><Column id=\"template_cd\" type=\"STRING\" size=\"255\"/><Column id=\"push_yn\" type=\"STRING\" size=\"255\"/><Column id=\"document_type\" type=\"STRING\" size=\"255\"/><Column id=\"use_yn\" type=\"STRING\" size=\"255\"/><Column id=\"reg_dt\" type=\"STRING\" size=\"255\"/><Column id=\"reg_cd\" type=\"STRING\" size=\"255\"/><Column id=\"reg_nm\" type=\"STRING\" size=\"255\"/><Column id=\"mod_dt\" type=\"STRING\" size=\"255\"/><Column id=\"mod_cd\" type=\"STRING\" size=\"255\"/><Column id=\"mod_nm\" type=\"STRING\" size=\"255\"/><Column id=\"root_menu\" type=\"STRING\" size=\"256\"/><Column id=\"manual_txt\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProjectCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboProgramCd", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSchStartTime", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">00</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">02</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">03</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">04</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">05</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">06</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">07</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">08</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">09</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">10</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">11</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">12</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">13</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"name\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"name\">15</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"name\">16</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"name\">17</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"name\">18</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"name\">19</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"name\">20</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"name\">21</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"name\">22</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"name\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSchEndTime", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"name\">00</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"name\">01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">02</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">03</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">04</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">05</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">06</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"name\">07</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"name\">08</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"name\">09</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"name\">10</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"name\">11</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"name\">12</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"name\">13</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"name\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"name\">15</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"name\">16</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"name\">17</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"name\">18</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"name\">19</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"name\">20</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"name\">21</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"name\">22</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"name\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboDocType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"72","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectNmT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMenuT","353","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUseYnT","686","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeviceT","19","40","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("디바이스");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenu","436","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","769","10","229","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMenuTypeT","352","40","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("메뉴유형");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMenuType","436","40","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCboMenuType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDevice","102","40","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsCboDeviceType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProjectNm","102","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboProjectCd");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.73%","72","68","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","82","1040","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","678","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1019","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","92",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","0","30","308",null,null,"0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_binddataset("dsProjectMenuList");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_autoenter("select");
            obj.getSetter("taketree").set("{use:\"all\", treeindex:0, parentcolid:\"parent_menu\", ordercolid:\"menu_order\"}");
            obj.set_treeuseexpandkey("true");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"181\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"메뉴유형\"/></Band><Band id=\"body\"><Cell text=\"bind:menu_nm\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\" edittype=\"tree\" border=\"1px solid #d7d7d7, 0px solid #d7d7d7, 1px solid #d7d7d7, 1px solid #d7d7d7\"/><Cell col=\"1\" displaytype=\"expr:(dataset.getColumn( currow, &apos;lev&apos; ) == 0) ? &apos;buttoncontrol&apos; : &apos;none&apos; \" edittype=\"expr:(dataset.getColumn( currow, &apos;lev&apos; ) == 0) ? &apos;button&apos; : &apos;none&apos; \" text=\"expr:(dataset.getColumn( currow, &apos;lev&apos; ) == 0) ? &apos;수정&apos; : &apos;&apos; \" border=\"1px solid #d7d7d7, 1px solid #d7d7d7, 1px solid #d7d7d7, 0px solid #d7d7d7\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static33","437","30",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34","437","60",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static36","437","120",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDeviceT","669","30","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("디바이스");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuNmT","318","120","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuTypeT","318","60","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("메뉴유형");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","444","125",null,"21","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_maxlength("10");
            obj.set_inputfilter("symbol,space");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMultiLanguageT","308","396",null,"30","171",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("다국어 정보");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMultiLanguage",null,"396","100","23","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("다국어매핑");
            obj.set_cssclass("btn_WF_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static22","382","378","220","10",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboDevice","794","35",null,"21","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboDeviceType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboMenuType","444","65","218","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCboDetailMenuType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUseYnT","669","60","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","794","65",null,"21","7",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","437","90",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staScreenT","318","90","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static03","437","150",null,"31","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboMenuMark","444","155","218","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCboMenuYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuListT","10","0",null,"30","580",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("메뉴 목록");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnMenuAdd","177","4","100","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("대메뉴추가");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static02","308","30","10","300",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdMultilanguageInfo","318","426",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMultiLanguageInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"600\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"다국어\"/></Band><Band id=\"body\"><Cell text=\"bind:lang_nm\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ml_lang_txt\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuDetailT00","308","0",null,"30","171",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("메뉴 상세");
            obj.set_cssclass("sta_WF_title02");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staParentMenuT","318","30","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("상위메뉴");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staManual","669","150","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("메뉴얼");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staMenuMarkT","318","150","120","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("메뉴표시");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staManualLink","795","150","45","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("미등록");
            obj.set_textDecoration("underline");
            obj.set_cursor("pointer");
            obj.set_textAlign("center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtScreen","444","95","189","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnScreen","edtScreen:6","95","21","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_search02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divSch","318","180",null,"197","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static41","118","60",null,"77","0",null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","126","65",null,"66","7",null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("2");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRegDtT","351","136","120","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("7");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRegNmT","0","136","120","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("8");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staModDtT","351","166","120","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("11");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staModNmT","0","166","120","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("12");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staSchTimeT","0","0","120","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("13");
            obj.set_text("일정시간");
            obj.set_cssclass("sta_WF_th01Limport");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static09","119","0",null,"31","0",null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static12","471","30",null,"31","0",null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static14","119","30",null,"31","350",null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRecTimeT","0","30","120","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("18");
            obj.set_text("휴계시간");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staConcWorkT","351","30","120","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("16");
            obj.set_text("집중근무");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtRecTime","126","35","220","21",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("0");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staDescT","0","60","120","77",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("4");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Edit("edtConcWork","477","35",null,"21","7",null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("1");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("Static10","226","5","20","21",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_textC");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboSchFormTime","126","5","100","21",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsCboSchStartTime");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("08");
            obj.set_value("08");
            obj.set_index("8");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Combo("cboSchToTime","246","5","100","21",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsCboSchEndTime");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("14");
            obj.set_value("14");
            obj.set_index("14");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRegDt","470","136",null,"31","0",null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staModDt","470","166",null,"31","0",null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staRegNm","119","136","234","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Static("staModNm","119","166","234","31",null,null,null,null,null,null,this.divDetail.form.divSch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divSch.addChild(obj.name, obj);

            obj = new Div("divDefault","318","180",null,"197","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static41","118","0",null,"137","0",null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","126","7",null,"123","7",null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("0");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staRegDtT","351","136","120","31",null,null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staRegNmT","0","136","120","31",null,null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("6");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staModDtT","351","166","120","31",null,null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("9");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staModNmT","0","166","120","31",null,null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("10");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staDescT","0","0","120","137",null,null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("1");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staRegDt","470","136",null,"31","0",null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staRegNm","119","136","233","31",null,null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staModDt","470","166",null,"31","0",null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Static("staModNm","119","166","233","31",null,null,null,null,null,null,this.divDetail.form.divDefault.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDefault.addChild(obj.name, obj);

            obj = new Div("divBoard","318","180",null,"197","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staRegDtT","351","136","120","31",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("9");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staRegNmT","0","136","120","31",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("10");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staModDtT","351","166","120","31",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("13");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staModNmT","0","166","120","31",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("14");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staFuncSetT","0","0","120","61",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("15");
            obj.set_text("게시판\r\n기능설정");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("Static09","119","0",null,"61","0",null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_td01L");
            obj.set_text("");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new CheckBox("chkFileAddYn","135","7","150","21",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("0");
            obj.set_text("파일첨부여부");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new CheckBox("chkReplyYn","295","7","150","21",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("1");
            obj.set_text("댓글여부");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new CheckBox("chkPushYn","455","7","150","21",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("2");
            obj.set_text("푸쉬사용여부");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new CheckBox("chkFormatYn","135","34","90","21",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("3");
            obj.set_text("양식사용여부");
            obj.set_falsevalue("Y");
            obj.set_truevalue("N");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Edit("edtFormat","231","34","110","21",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Button("btnFormat","edtFormat:3","34","21","21",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_search02");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staDescT","0","60","120","77",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("17");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("Static41","119","60",null,"77","0",null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","126","65",null,"66","7",null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("6");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staRegDt","470","136",null,"31","0",null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staModDt","470","166",null,"31","0",null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staRegNm","119","136","233","31",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Static("staModNm","119","166","233","31",null,null,null,null,null,null,this.divDetail.form.divBoard.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divBoard.addChild(obj.name, obj);

            obj = new Div("divDocManagement","318","180",null,"197","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_background("white");
            obj.set_formscrollbartype("none none");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static41","118","30",null,"107","0",null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new TextArea("txtDesc","126","35",null,"96","7",null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("0");
            obj.set_maxlength("600");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staRegNm","119","136","233","31",null,null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staRegDtT","351","136","120","31",null,null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("5");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staModDt","470","166",null,"31","0",null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staRegNmT","0","136","120","31",null,null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("6");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staModNm","119","166","233","31",null,null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staModDtT","351","166","120","31",null,null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("9");
            obj.set_text("수정일");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staModNmT","0","166","120","31",null,null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("10");
            obj.set_text("수정자");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staDocRootT","0","0","120","31",null,null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("11");
            obj.set_text("문서유형");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("Static09","119","0",null,"31","0",null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staDescT","0","30","120","107",null,null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("1");
            obj.set_text("상세설명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staRegDt","470","136",null,"31","0",null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Static("staRegNm00","129","-52",null,"31","344",null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);

            obj = new Combo("cboDocType","126","5",null,"21","7",null,null,null,null,null,this.divDetail.form.divDocManagement.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsCboDocType");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("Combo00");
            this.divDetail.form.divDocManagement.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divSch.form
            obj = new Layout("default","",0,0,this.divDetail.form.divSch.form,function(p){});
            this.divDetail.form.divSch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divDefault.form
            obj = new Layout("default","",0,0,this.divDetail.form.divDefault.form,function(p){});
            this.divDetail.form.divDefault.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divBoard.form
            obj = new Layout("default","",0,0,this.divDetail.form.divBoard.form,function(p){});
            this.divDetail.form.divBoard.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divDocManagement.form
            obj = new Layout("default","",0,0,this.divDetail.form.divDocManagement.form,function(p){});
            this.divDetail.form.divDocManagement.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.edtMenuNm","value","dsProjectMenuDetail","menu_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.cboDevice","value","dsProjectMenuDetail","device_type");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.cboUseYn","value","dsProjectMenuDetail","use_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.cboMenuType","value","dsProjectMenuDetail","menu_type");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.divBoard.form.chkFileAddYn","value","dsProjectMenuDetail","attach_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.divBoard.form.chkReplyYn","value","dsProjectMenuDetail","reply_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.divBoard.form.chkPushYn","value","dsProjectMenuDetail","push_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.divBoard.form.chkFormatYn","value","dsProjectMenuDetail","template_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.divBoard.form.edtFormat","value","dsProjectMenuDetail","template_cd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.divBoard.form.txtDesc","value","dsProjectMenuDetail","desc_txt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.divDefault.form.txtDesc","value","dsProjectMenuDetail","desc_txt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.divDefault.form.staRegNm","text","dsProjectMenuDetail","reg_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.divDefault.form.staRegDt","text","dsProjectMenuDetail","reg_dt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.divDefault.form.staModNm","text","dsProjectMenuDetail","mod_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.divDefault.form.staModDt","text","dsProjectMenuDetail","mod_dt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.divDocManagement.form.txtDesc","value","dsProjectMenuDetail","desc_txt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.divDocManagement.form.staRegNm","text","dsProjectMenuDetail","reg_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.divDocManagement.form.staRegDt","text","dsProjectMenuDetail","reg_dt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDetail.form.divDocManagement.form.staModNm","text","dsProjectMenuDetail","mod_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDetail.form.divDocManagement.form.staModDt","text","dsProjectMenuDetail","mod_dt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDetail.form.divSch.form.edtRecTime","value","dsProjectMenuDetail","breaking_txt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divDetail.form.divSch.form.edtConcWork","value","dsProjectMenuDetail","concent_txt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divDetail.form.divSch.form.txtDesc","value","dsProjectMenuDetail","desc_txt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDetail.form.divSch.form.staRegNm","text","dsProjectMenuDetail","reg_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDetail.form.divSch.form.staRegDt","text","dsProjectMenuDetail","reg_dt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDetail.form.divSch.form.staModNm","text","dsProjectMenuDetail","mod_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDetail.form.divSch.form.staModDt","text","dsProjectMenuDetail","mod_dt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divDetail.form.cboMenuMark","value","dsProjectMenuDetail","display_yn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divDetail.form.divDocManagement.form.staRegNm00","text","dsProjectMenuDetail","reg_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divDetail.form.Static33","text","dsProjectMenuDetail","parent_menu_nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divDetail.form.divSch.form.cboSchFormTime","value","dsProjectMenuDetail","schedule_start_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divDetail.form.divSch.form.cboSchToTime","value","dsProjectMenuDetail","schedule_end_time");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.divDocManagement.form.cboDocType","value","dsProjectMenuDetail","document_type");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDetail.form.edtScreen","value","dsProjectMenuDetail","program_nm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PM030_bak.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    PM > PM030
        *  @FileName    PM030.xfdl
        *  @Creator     김대승
        *  @CreateDate  2019.08.21
        *  @Version     1.0
        *  @Desction    프로젝트 메뉴관리
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.08.21      김대승             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/

        this.fv_sSelectRow = "";
        this.fv_sProjectCd = "";
        this.fv_bMenuType  = true;

        this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "admin_yn"); 	 // gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;							 // 글로변 변수_프로젝트코드

        this.fv_sProgramCd = "";

        this.fv_nSaveBeforeRowType = 1; // 최소 RowType값 초기 행의 상태 Dataset.ROWTYPE_NORMAL
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.PM030_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                // 초기화
        		this.fnInIt();
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectMenuList";

        	objDivSearch = this.divSearch.form;

        	switch(sTranId) {
        		case "projectMenuList":			// 메뉴 목록 조회
        			this.dsProjectMenuDetail.clearData();
        			this.dsProjectMenuList.clearData();

        			// 벨리데이션
        			takeval.add(this, "Search", objDivSearch.cboProjectNm, "프로젝트", "value", true, "string", [0,100], "");
        			takeval.add(this, "Search", objDivSearch.cboDevice,    "디바이스", "value", true, "string", "", "");
        			takeval.add(this, "Search", this.divSearch.form.cboDevice,    "디바이스", "value", true, "string", "", "");
        			if(!takeval.check(this, "Search")) return;

        			var sMenuCd		= take.nvl(objDivSearch.edtMenu.value, "");		// 메뉴명
        			var sMenuType	= take.nvl(objDivSearch.cboMenuType.value, "");	// 메뉴유형
        			var sProjectCd  = take.nvl(objDivSearch.cboProjectNm.value, "");	// 프로젝트명
        			var sDeviceType	= take.nvl(objDivSearch.cboDevice.value, "");	// 디바이스유형
        			var sUseYn	    = take.nvl(objDivSearch.cboUseYn.value, "");		// 사용여부

        			// 임시사용 __ 프로젝트 그룹코드 만들어지면 변경
        			sProjectCd = take.nvl(objDivSearch.cboProjectNm.value, "");
        			take.tranSelect
        			(
        				this,
        				"projectMenuList",
        				"ProjectManagement.projectMenuList",
        				"",
        				"dsProjectMenuList",
        				"  menu_cd='"     + sMenuCd     +
        				"' menu_type='"   + sMenuType   +
        				"' project_cd ='" + sProjectCd  +
        				"' device_type='" + sDeviceType +
        				"' use_yn='" 	  + sUseYn 		+ "'",
        				"fnCallback"
        			)
        		break;
        	}
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
            if (take.nvl(sTranId, "")=="") sTranId = "projectMenuSave";

        	var bRowChange = true;
        	if(sTranId != "projectMenuDelete")
        	{
        		var sEditMenuNm = take.nvl(this.divDetail.form.edtMenuNm.value, "");
        		bRowChange = take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : sEditMenuNm, text : "저장"});
        	}
        	if (bRowChange)
        	{
        		var objDivDetail    = this.divDetail.form;			// Main Detail
        		var objDsMenuDetail = this.dsProjectMenuDetail;		// Left Detail Dataset

        		/*** 벨리데이션 ********************************************************************************/
        		// 메뉴유형 -> 03[화면] 일때만 '화면구분' 콤보 벨리데이션 체크 활성화

        		if (this.fv_bMenuType==true) {
        			takeval.add(this, "Save", objDivDetail.edtScreen, "프로그램", "value", true, "string", "", "");
        		}
        		takeval.add(this, "Save", objDivDetail.cboMenuType, "메뉴유형", "value", true, "string", "", "");
        		takeval.add(this, "Save", objDivDetail.edtMenuNm,   "메뉴명",   "value", true, "string", [0,100], "");
        		takeval.add(this, "Save", objDivDetail.cboUseYn, 	"사용여부", "value", true, "string", "", "");

        		if (objDivDetail.divSch.visible == true) {
        			takeval.add(this, "Save", objDivDetail.divSch.form.cboSchFormTime, 	"일정시간", "value", true, "string", "", "");
        			takeval.add(this, "Save", objDivDetail.divSch.form.cboSchToTime, 	"일정시간", "value", true, "string", "", "");
        		}
        		if(!takeval.check(this, "Save")) return;
        		/***********************************************************************************************/

        		switch(sTranId) {
        			case "projectMenuSave":
        				// 우측 그리드 '프로젝트 상세' 저장
        				objDsMenuDetail.setColumn(0, "project_cd", take.nvl(this.divSearch.form.cboProjectNm.value, ""));
        				this.fv_sProjectCd = objDsMenuDetail.getColumn(0, "projcet_cd");
        				this.fv_nSaveBeforeRowType = this.dsProjectMenuDetail.getRowType(0);
        				take.tranSave
        				(
        					this,
        					"projectMenuUpdate",
        					"ProjectManagement.projectMenu",
        					"dsProjectMenuList",
        					"",
        					"",
        					function(){
        						take.transaction
        						(
        							this,
        							"projectMenuSave",
        							"SVC_LOC::pm/projectMenuSave.do",
        							"dsProjectMenuDetail=dsProjectMenuDetail:U dsFile=dsFile:U",
        							"",
        							"sProjectCd='"+this.fv_sProjectCd+"'",
        							"fnCallback"
        						);
        					}
        				)


        				break;

        			case "projectMenuDelete":
        				var sProjectCd = objDsMenuDetail.getColumn(0, "project_cd");
        				var sMenuCd    = objDsMenuDetail.getColumn(0, "menu_cd");
        				take.tranSave
        				(
        					this,
        					"projectMenuDelete",
        					"ProjectManagement.projectMenu",
        					"dsProjectMenuDetail",
        					"",
        					"PROJECT_CD='" + sProjectCd + "' MENU_CD='" + sMenuCd + "'",
        					"fnCallback"
        				)
        				break;
        		}
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMenuList";

        	this.divDetail.form.grdMenuList.selectRow();
        	// 디테일 추가 함수 호출
        	this.fnDetailAddRow();
        }

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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdMenuList";

        	var nRow     = this.dsProjectMenuList.rowposition;
        	var nSelProj = this.dsProjectMenuList.getColumn(nRow, "menu_nm");
        	var bRowChange = take.confirm(this, "question", "{name}을(를) {text}하시겠습니까?", { name : nSelProj, text : "삭제"});

        	if (bRowChange)
        	{
        		var objDsProjDetail = this.dsProjectMenuDetail;

        		objDsProjDetail.set_enableevent(false);
        		objDsProjDetail.set_updatecontrol(false);
        		objDsProjDetail.setRowType(0, "D");
        		objDsProjDetail.set_updatecontrol(true);
        		objDsProjDetail.set_enableevent(true);

        		//alert(this.dsProjectInfoDetail.getRowType(0))
        		this.fnSave("projectMenuDelete");
        	}
        }

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        // grdMenuList_onselectchanged : 좌측 메뉴목록 메인 그리드 선택 값 변경시 발생
        this.grdMenuList_onselectchanged = function(obj,e)
        {
        	// 대메뉴에 들어오면 수정 불가한 컴포넌트 readonly 처리
        	if(this.dsProjectMenuList.getColumn(e.row, "lev") == "0"){
        		this.fnCompSetReadOnly(true);
        	}

        	var nPreSelRow  = parseInt(take.nvl(this.fv_sSelectRow, "-1"));
        	var nCurrSelRow = parseInt(take.nvl(this.divDetail.form.grdMenuList.getSelectedRows(), "-1"));

        	if( nCurrSelRow != -1 && (nPreSelRow != nCurrSelRow) )
        	{
        		var sRowType = this.dsProjectMenuDetail.getRowType(0);
        		var bRowChange = true;
        		if( "2" == sRowType || "4" == sRowType )
        		{
        			bRowChange = take.confirm(this, "String", "작업중인 데이터는 저장되지 않습니다.\n그래도 이동하시겠습니까?");
        		}
        		if(bRowChange)
        		{
        			this.fnDetailSearch();
        		}
        		else
        		{
        			nPreSelRow = ( "2" == sRowType ) ? -1 : nPreSelRow;
        			this.divDetail.form.grdMenuList.selectRow(nPreSelRow);
        		}
        	}
        	if (nPreSelRow == 0 && (nPreSelRow == nCurrSelRow) && this.fv_sProjectCd == "")
        	{
        		this.fnDetailSearch();
        	}
        };

        // btnMenuAdd_onclick : 대메뉴 추가 버튼 클릭
        this.btnMenuAdd_onclick = function(obj,e)
        {
        	var sProjectCd = take.nvl(this.divSearch.form.cboProjectNm.value, "");
        	this.dsDummy.clearData();

        	var objDsMenuList = this.dsProjectMenuList;
        	var nLevCnt = 0;	// 대메뉴 Row 갯수 담을 값
        	for(var i=0; i<objDsMenuList.rowcount; i++)
        	{
        		if(objDsMenuList.getColumn(i, "lev") == "0"){
        			Number(nLevCnt++);
        		}
        	}
        	var sMenuOrder = "00"+(nLevCnt+1);

        	// 프로젝트 그룹 코드 없어서 임시 사용
        	AgrKey = {sProjectCd:sProjectCd, objDs:this.dsDummy, sMenuOrder:sMenuOrder};

        	// 대메뉴등록 팝업 오픈 PM030P01
        	//AgrKey = {sProjectCd:sProjectCd, objDs:this.dsDummy};
        	take.openPopup(this, "PM030P01", "biz::sys/PM030P01.xfdl", AgrKey, "",
        		function(sId, sCloseGubun){
        			if (sCloseGubun <= -1)
        			{
        				return false;
        			}else {
        				this.fnSearch("projectMenuList");
        			}
        		},
        	false);
        };

        // Edit_onkeyup : Edit 컴포넌트 Enter 값 처리
        this.Edit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13){
        		switch(obj.id) {
        		case "cboProjectNm":
        			this.divSearch.form.edtMenu.setFocus();
        			break;
        		case "edtMenu":
        			this.divSearch.form.cboUseYn.setFocus();
        			break;
        		default:
        		}
        	}
        };

        // divDetail_grdMenuList_oncellclick : 그리드 셀 클릭_대메뉴 수정 버튼 클릭
        this.divDetail_grdMenuList_oncellclick = function(obj,e)
        {
        	if (e.cell == 1 && e.fromobject == "[object ButtonControl]")
        	{
        		var objDsMenuDetail = this.dsProjectMenuDetail;
        		var sDeviceType = objDsMenuDetail.getColumn(0, "device_type");
        		var sUseYn 	    = objDsMenuDetail.getColumn(0, "use_yn");
        		var sMenuNm     = objDsMenuDetail.getColumn(0, "menu_nm");
        		var sDisplayYn  = objDsMenuDetail.getColumn(0, "display_yn");
        		var sDescTxt    = objDsMenuDetail.getColumn(0, "desc_txt");
        		var sProjectCd  = objDsMenuDetail.getColumn(0, "project_cd");

        		this.dsDummy.copyData(this.dsProjectMenuDetail);

        		AgrKey = {
        			sDeviceType:sDeviceType, sUseYn:sUseYn,
        			sMenuNm:sMenuNm, sDisplayYn:sDisplayYn,
        			sDescTxt:sDescTxt, sProjectCd:sProjectCd,
        			objDs:this.dsDummy
        		};

        		take.openPopup(this, "PM030P01", "biz::sys/PM030P01.xfdl", AgrKey, "",
        			function(sId, sCloseGubun){
        				if (sCloseGubun <= -1)
        				{
        					return false;
        				}else {
        					this.fnSearch("projectMenuList");
        				}
        			},
        		false);
        	}
        };

        // dsProjectMenuList_canrowposchange : 좌측 트리 메뉴 rowposition 변경시 발생 이벤트___대메뉴 선택시 readonly처리
        this.dsProjectMenuList_canrowposchange = function(obj,e)
        {
        	var objDivDetail = this.divDetail.form;
        	var nLev = this.dsProjectMenuList.getColumn(e.newrow, "lev");

        	if (nLev == "0")
        	{
        		objDivDetail.cboDevice.set_readonly(true);
        		objDivDetail.cboUseYn.set_readonly(true);
        		objDivDetail.edtMenuNm.set_readonly(true);
        		objDivDetail.cboMenuMark.set_readonly(true);

        		// 메뉴유형별 div에 소속된 상세설명
        		objDivDetail.divBoard.form.txtDesc.set_readonly(true);
        		objDivDetail.divDefault.form.txtDesc.set_readonly(true);
        		objDivDetail.divDocManagement.form.txtDesc.set_readonly(true);
        		objDivDetail.divSch.form.txtDesc.set_readonly(true);
        	}else {
        		objDivDetail.cboDevice.set_readonly(false);
        		objDivDetail.cboUseYn.set_readonly(false);
        		objDivDetail.edtMenuNm.set_readonly(false);
        		objDivDetail.cboMenuMark.set_readonly(false);

        		// 메뉴유형별 div에 소속된 상세설명
        		objDivDetail.divBoard.form.txtDesc.set_readonly(false);
        		objDivDetail.divDefault.form.txtDesc.set_readonly(false);
        		objDivDetail.divDocManagement.form.txtDesc.set_readonly(false);
        		objDivDetail.divSch.form.txtDesc.set_readonly(false);
        	}
        };

        // divDetail_cboMenuType_onitemchanged : 메뉴유형 선택 값이 변경된 후 발생 이벤트
        this.divDetail_cboMenuType_onitemchanged = function(obj,e)
        {
        	// '메뉴' 선택시 '화면유형' 선택 불가 상태로 변경 함수 호출
        	this.fnSetCboMenuType();
        };

        // divDetail_divSch_edtSchFormTime_onkeyup : 변경되는 div 내부 값 포커스 이동
        this.divDetail_divSch_edtSchFormTime_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		switch(obj.id) {
        			// divSch
        			case "edtSchFormTime":
        				this.divDetail.form.divSch.form.edtSchToTime.setFocus();
        				break;
        			case "edtSchToTime":
        				this.divDetail.form.divSch.form.edtRecTime.setFocus();
        				break;
        			case "edtRecTime":
        				this.divDetail.form.divSch.form.edtConcWork.setFocus();
        				break;
        			case "edtConcWork":
        				this.divDetail.form.divSch.form.txtDesc.setFocus();
        				break;
        		}
        	}
        };

        // divDetail_divSch_cboSchFormTime_onitemchanged : 일정시간 시작시간 콤보 선택시 마감시간 이후 시간으로 표시되게 필터 적용
        this.divDetail_divSch_cboSchFormTime_onitemchanged = function(obj,e)
        {
        	// 시작시간 보다 이후의 시간만 나오게 셋팅
        	this.dsCboSchEndTime.set_filterstr("code>'"+obj.value+"'");
        };

        // divDetail_divBoard_btnFormat_onclick : 화면구분 '문서관리' 상태의 양식불러오기 팝업 버튼
        this.divDetail_divBoard_btnFormat_onclick = function(obj,e)
        {
        	var sProjectCd  = this.divSearch.form.cboProjectNm.value;
        	var sTemplateCd = "";
        	AgrKey = {sProjectCd:sProjectCd, sTemplateCd:sTemplateCd};

        	take.openPopup(this, "PM030P02", "biz::sys/PM030P02.xfdl", AgrKey, "",
        		function(sId, sRtn){
        			if (take.nvl(sRtn, "")!="")
        			{
        				var sCd = sRtn.split(",")[0];
        				var sNm = sRtn.split(",")[1];
        				this.dsProjectMenuDetail.setColumn(0, "template_cd", sCd);
        				this.dsProjectMenuDetail.setColumn(0, "template_nm", sNm);
        				this.divDetail.form.divBoard.form.edtFormat.set_value(sNm);
        			}
        		},
        	false);
        };

        // divDetail_staManualLink_onclick : 메뉴얼 팝업 _____ '등록됨','미등록' 링크 클릭시 팝업 오픈
        this.divDetail_staManualLink_onclick = function(obj,e)
        {
         	var sProjectCd  = this.divSearch.form.cboProjectNm.value;
         	var sTemplateCd = "";
        	var sManualTxt  = take.nvl(this.dsProjectMenuDetail.getColumn(0, "manual_txt"), "");

         	AgrKey = {sProjectCd:sProjectCd, sManualTxt:sManualTxt};

        	trace("sManualTxt::>> "+sManualTxt)

        	take.openPopup(this, "OM010P07", "biz::sys/OM010P07.xfdl", AgrKey, "",
        		function(sId, sRtn){
        			if(take.nvl(sRtn, "")!=""){
        				this.dsProjectMenuDetail.setColumn(0, "manual_txt", sRtn);
        				this.divDetail.form.staManualLink.set_text("등록됨");
        			}
        		},
        	false);
        };

        // btnDirector_onclick : 화면구분 , 프로그램선택 팝업 오픈
        this.btnDirector_onclick = function(obj,e)
        {
        	// 프로젝트 그룹 코드 없어서 임시 사용
        	//AgrKey = {sProjectCd:sProjectCd};

        	// 프로그램선택 팝업 오픈 PM030P03
        	take.openPopup(this, "PM030P03", "biz::sys/PM030P03.xfdl", "", "",
        		function(sId, sRtn){
        			if (take.nvl(sRtn, "")!="")
        			{
        				var sCd = sRtn.split(",")[0];
        				var sNm = sRtn.split(",")[1];
        				this.fv_sProgramCd = sCd
        				this.dsProjectMenuDetail.setColumn(0, "program_cd", sCd);
        				this.dsProjectMenuDetail.setColumn(0, "program_nm", sNm);
        				this.divDetail.form.edtScreen.set_value(sNm);
        			}
        			this.fnMenuTypeDiv();
        		},
        	false);
        };

        // divDetail_btnMultiLanguage_onclick : 다국어매핑 팝업 오픈
        this.divDetail_btnMultiLanguage_onclick = function(obj,e)
        {
        	take.openPopup(this, "addMultiLanguage", "frm::com/OM010P06.xfdl", {openDataset: this.dsProgMultiLangDetail}, "", "fnPopCallback", false);
        };
        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInIt : 초기화 함수
         * @example this.fnInIt();
         */
        this.fnInIt = function()
        {
        	// 공통 코드조회 함수 호출
            this.fnCommonCode();

        	// 접속한 사용자가 프로젝트 관리자인 경우에만 검색조건 프로젝트 선택 가능
        	this.divSearch.form.cboProjectNm.set_value(this.fv_sGdsProjectCd);
        	if(this.fv_sGdsAdminYn == "Y"){
        		this.divSearch.form.cboProjectNm.set_readonly(false);
        	}
        	//this.fnSearch("projectMenuList");
        }

        /**
         * fnCommonCode : 공통 코드조회
         * @example this.fnCommonCode();
         */
        this.fnCommonCode = function ()
        {
        	var arrGroupCodes = ["00003", "00009", "00005", "00009", "00005", "00026"];
        	var arrOutDs 	  = ["dsCboDeviceType", "dsCboUseYn", "dsCboMenuType", "dsCboMenuYn", "dsCboDetailMenuType", "dsCboDocType"];
        	var arrHeaderType = ["", "SEL", "ALL", "", "SEL"];

        	take.tranCode(this, arrGroupCodes, arrOutDs, arrHeaderType,
        	function(sId, nErrCd, sErrMsg)
        	{
        		if (this.dsCboDeviceType.rowcount > 0){
        			this.divSearch.form.cboDevice.set_index(0);
        		}
        		if (this.dsCboUseYn.rowcount > 0){
        			this.divSearch.form.cboUseYn.set_index(1);
        		}
        		if (this.dsCboMenuType.rowcount > 0){
        			this.divSearch.form.cboMenuType.set_index(0);
        		}

        		// 프로젝트 코드, 프로그램 코드 멀티 셀렉트
        		var arrSelectCodes  = ["projectInfoCode", "programInfoCode"];
        		var arrSelectNameSp = ["ProjectManagement.projectInfoCode", "ProjectManagement.programInfoCode"];
        		var arrSelectOutDs  = ["dsCboProjectCd", "dsCboProgramCd"];
        		take.tranSelect
        		(
        			this,
        			arrSelectCodes,
        			arrSelectNameSp,
        			"",
        			arrSelectOutDs,
        			"",
        			function(sId, nErrCd, sErrMsg)
        			{
        				var objDsCboProj = this.dsCboProjectCd;
        				if (objDsCboProj.rowcount>0)
        				{
        					var addInsertRow = objDsCboProj.insertRow(0)
        					objDsCboProj.setColumn(addInsertRow, "code", "");
        					objDsCboProj.setColumn(addInsertRow, "name", "선택");
        				}
        				//this.divSearch.form.cboProjectNm.set_index(0);

        				var objDsCboProgram = this.dsCboProgramCd;
        				if (objDsCboProgram.rowcount>0)
        				{
        					var addInsertRow1 = objDsCboProgram.insertRow(0)
        					objDsCboProgram.setColumn(addInsertRow1, "code", "");
        					objDsCboProgram.setColumn(addInsertRow1, "name", "선택");
        				}

        // 				var objDsCboDocType = this.dsCboDocType;
        // 				if (objDsCboDocType.rowcount>0)
        // 				{
        // 					var addInsertRow2 = objDsCboDocType.insertRow(0)
        // 					objDsCboDocType.setColumn(addInsertRow2, "code", "");
        // 					objDsCboDocType.setColumn(addInsertRow2, "name", "선택");
        // 				}
        			}
        		)
        		this.fnSearch("projectMenuList");
        	});
        };

        /**
         * fnMenuTypeDiv : 메뉴 유형별 중앙 템플릿 변경
         * @example this.fnCommonCode();
         */
        this.fnMenuTypeDiv = function ()
        {
        	var sMenuTypeValue = take.nvl(this.fv_sProgramCd, "");
        	/*
        	화면구분 프로그램코드 CODE->GM00000036   // NAME->공지사항 목록
        	화면구분 프로그램코드 CODE->GM00000040   // NAME->게시판 목록
        	화면구분 프로그램코드 CODE->GM00000043   // NAME->일정관리 Main
        	화면구분 프로그램코드 CODE->GM00000049   // NAME->타임라인 목록
        	화면구분 프로그램코드 CODE->GM00000054   // NAME->주소록 목록
        	화면구분 프로그램코드 CODE->GM00000057   // NAME->문서관리
        	화면구분 프로그램코드 CODE->GM00000061   // NAME->휴가관리목록
        	화면구분 프로그램코드 CODE->GM00000062   // NAME->휴가승인목록
        	화면구분 프로그램코드 CODE->GM00000063   // NAME->휴가관리대장
        	*/
        	var objDivDetail  		= this.divDetail.form;
        	var objDivDefault		= objDivDetail.divDefault;
        	var objDivBoard 		= objDivDetail.divBoard;
        	var objDivDocManagement = objDivDetail.divDocManagement;
        	var objDivSch  			= objDivDetail.divSch;

        	switch(sMenuTypeValue) {
        		case "GM00000036":	// 공지사항__기본
        			objDivDefault.set_visible(true);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;

        		case "GM00000036":	// 사용자생성__기본
        			objDivDefault.set_visible(true);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;

        		case "GM00000040":	// 게시판
        			objDivDefault.set_visible(false);
        			objDivBoard.set_visible(true);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;

        		case "GM00000043":	// 일정관리
        			objDivDefault.set_visible(false);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(true);
        			var sStartTime =  take.nvl(this.dsProjectMenuDetail.getColumn(0, "schedule_start_time"), "");
        			var sEndTime   =  take.nvl(this.dsProjectMenuDetail.getColumn(0, "schedule_end_time"), "");
        			break;

        		case "GM00000049":	// 타임라인
        			objDivDefault.set_visible(true);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;

        		case "GM00000054":	// 주소록__기본
        			objDivDefault.set_visible(true);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;

        		case "GM00000057":	// 문서관리
        			objDivDefault.set_visible(false);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(true);
        			objDivSch.set_visible(false);
        			break;

        		case "GM00000061":	//
        			objDivDefault.set_visible(true);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;

        		case "GM00000062":	//
        			objDivDefault.set_visible(true);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;

        		case "GM00000063":	//
        			objDivDefault.set_visible(true);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;

        		default :	// 공지사항__기본
        			objDivDefault.set_visible(true);
        			objDivBoard.set_visible(false);
        			objDivDocManagement.set_visible(false);
        			objDivSch.set_visible(false);
        			break;
        	}
        	this.fnSetCboMenuType();
        };

        /**
         * fnDetailSearch : 좌측 그리드 메뉴목록 선택시 우측 디테일 데이터 조회 트랜잭션
         * @example this.fnDetailSearch();
         */
        this.fnDetailSearch = function ()
        {
        	this.fv_sSelectRow = this.divDetail.form.grdMenuList.getSelectedRows();
        	var objDsMenuList  = this.dsProjectMenuList;
        	var sMenuCd		   = take.nvl(objDsMenuList.getColumn(objDsMenuList.rowposition, "menu_cd"), "");		// 메뉴명
        	var sProjectCd     = take.nvl(objDsMenuList.getColumn(objDsMenuList.rowposition, "project_cd"), "");	// 프로젝트명

        	this.dsProjectMenuDetail.clearData();
        	take.tranSelect
        	(
        		this,
        		"projectMenuDetail",
        		"ProjectManagement.projectMenuDetail",
        		"",
        		"dsProjectMenuDetail",
        		"menu_cd='" + sMenuCd + "' project_cd='" + sProjectCd + "'",
        		function(sId, nErrCd, sErrMsg){
        			this.dsMultiLanguageInfo.clearData();
        			// 하단 그리드 '다국어 정보' 조회
        			var sMlCd = take.nvl(this.dsProjectMenuDetail.getColumn(0, "ml_cd"), "");		// 다국어 코드
        			take.tranSelect
        			(
        				this,
        				"multilanguageDetailList",
        				"ProjectManagement.projectMenuLanguageList",
        				"",
        				"dsMultiLanguageInfo",
        				"sProjectCd='" + sProjectCd + "' sMenuCd='" + sMenuCd + "' sMlCd='" + sMlCd + "'",
        				"fnCallback"
        			)

        			if (this.dsProjectMenuDetail.rowcount > 0){
        				this.fv_sProgramCd = this.dsProjectMenuDetail.getColumn(0, "program_cd");
        				this.fnMenuTypeDiv();
                    }else {
        				this.dsProjectMenuDetail.addRow();
        				this.divDetail.form.cboDevice.set_index(0);
        				//this.cboMenuLevel.set_index(0);
        				this.divDetail.form.cboMenuType.set_index(0);
        				this.divDetail.form.cboUseYn.set_index(1);
        			}

        			var sManualTxt = take.nvl(this.dsProjectMenuDetail.getColumn(0, "manual_txt"), "");
                    if(sManualTxt != ""){
        				this.divDetail.form.staManualLink.set_enable(true);
        				this.divDetail.form.staManualLink.set_cursor("pointer");
        				this.divDetail.form.staManualLink.set_text("등록됨");
        			}else {
        // 				this.divDetail.form.staManualLink.set_enable(false);
        // 				this.divDetail.form.staManualLink.set_cursor("default");
        				this.divDetail.form.staManualLink.set_text("미등록");
        			}
        		}
        	);
        }

        /**
         * fnDetailAddRow : 공통 버튼 addRow 클릭시 호출
         * @example this.fnDetailAddRow();
         */
        this.fnDetailAddRow = function ()
        {
        	var objDsMenuList     = this.dsProjectMenuList;			// 좌측 트리 데이터셋
        	var objDsMenuDetail   = this.dsProjectMenuDetail;		// 우측 상세 데이터셋
        	var objDivDetail 	  = this.divDetail.form;			// 메인 Div

        	var nRowPosition      = objDsMenuList.rowposition;		// 트리 현재 Row
        	var nMenuListRowCount = objDsMenuList.rowcount;			// 트리 Rowcount

        	var nParentMenu 	  = objDsMenuList.getColumn(nRowPosition, "parent_menu");	// 트리: 현재 선택 Row의 부모메뉴
        	var nParentMenuCd     = objDsMenuList.getColumn(nRowPosition, "menu_cd");		// 트리: 현재 선택 Row의 메뉴코드
        	var nMenuLev 	      = objDsMenuDetail.getColumn(0, "menu_level");				// 상세: 현재 선택된 메뉴레벨
        	var nLev			  = objDsMenuList.getColumn(nRowPosition, "lev");			// 트리: 현재 선택 레벨
        	var sParentMenuNm     = objDsMenuList.getColumn(nRowPosition, "menu_nm");		// 트리: 현재 선택 Row의 메뉴명

        	// root_menu 값
        	var nRootMunu 	      = objDsMenuList.getColumn((nRowPosition-1), "menu_cd");				// 트리: 선택 바로 위 Row의 메뉴 코드
        	var nTreeParentRow    = objDivDetail.grdMenuList.getTreeParentRow(nRowPosition);		    // 트리: 선택된 Row의 부모 Row(트리구조만)
        	var sParentRootMenuCd = objDsMenuList.getColumn(nTreeParentRow, "menu_cd");

        	sParentRootMenuCd     = take.nvl(sParentRootMenuCd, "");
        	if (sParentRootMenuCd == "") sParentRootMenuCd = objDsMenuList.getColumn(nRowPosition, "menu_cd");


        	// 부모 menu_order, 형제 menu_order 찾아서 순서에 맞게 저장
        	var sMenuOrderCnt = 0;	// 동일한 menu_order값 갯수 담을 변수
        	var sMenuOrder;			// 선택된 Row의 menu_order 값
        	var sCreate;			// 최종 menu_order 컬럼에 들어갈 값

        	// 상위메뉴타입
        	// 메뉴 02 , 화면 03
        	var sParentMenuType = take.nvl(objDsMenuList.getColumn(nRowPosition, "menu_type"), "");
        	if (sParentMenuType == "03")
        	{
        		// 신규 row의 바로 상위 부모 row 메뉴타입
        		var sUpRowMenuNm = objDsMenuList.getColumn(nTreeParentRow, "menu_nm");
        		sParentMenuNm = sUpRowMenuNm;
        	}

        	var sParentMenuOrder = take.nvl(objDsMenuList.getColumn(nTreeParentRow, "menu_order"), "");
        	if (nMenuLev != "")
        	{
        		// addRow (공통추가) 동작시 readonly 처리
        		this.fnCompSetReadOnly(false);

        		// 대메뉴 밑으로 추가
        		if (nMenuLev == "0"  && sParentMenuOrder.length == 0)
        		{
        			sMenuOrder    = objDsMenuList.getColumn(nRowPosition, "menu_order");
        			for(var x=0; x<nMenuListRowCount; x++)
        			{
        				// 자식 Row 몇개인지 확인
        				var nChildRow = this.divDetail.form.grdMenuList.getTreeChildRow(nRowPosition, x);
        				if(nChildRow != -1){
        					Number(sMenuOrderCnt++);
        				}
        			}
        			if((sMenuOrderCnt+1) > 99) {
        				sCreate = sMenuOrder+"."+(sMenuOrderCnt+1);
        			}
        			else if((sMenuOrderCnt+1) > 9) {
        				sCreate = sMenuOrder+".0"+(sMenuOrderCnt+1);
        			}
        			else if ((sMenuOrderCnt+1) < 10){
        				sCreate = sMenuOrder+".00"+(sMenuOrderCnt+1);
        			}

        		}
        		// 중메뉴 밑으로 추가
        		else if (nMenuLev == "1"  && sParentMenuOrder.length == 3)
        		{
        			sMenuOrder    = objDsMenuList.getColumn(nRowPosition, "menu_order");
        			for(var x=0; x<nMenuListRowCount; x++)
        			{
        				// 자식 Row 몇개인지 확인
        				var nChildRow = this.divDetail.form.grdMenuList.getTreeChildRow(nRowPosition, x);
        				if(nChildRow != -1){
        					Number(sMenuOrderCnt++);
        				}
        			}
        			if((sMenuOrderCnt+1) > 99) {
        				sCreate = sMenuOrder+"."+(sMenuOrderCnt+1);
        			}
        			else if((sMenuOrderCnt+1) > 9) {
        				sCreate = sMenuOrder+".0"+(sMenuOrderCnt+1);
        			}
        			else if ((sMenuOrderCnt+1) < 10){
        				sCreate = sMenuOrder+".00"+(sMenuOrderCnt+1);
        			}
        		}
        	}

        	// 상위메뉴가 있을때만 Row 추가 가능
        	if (nParentMenu >= 0 || take.nvl(nParentMenu, "") != "")
        	{
        		if(nMenuLev == 2) {
        			return false;
        		}
        		this.dsProjectMenuDetail.clearData();
        		this.dsProjectMenuDetail.addRow();

        		this.divDetail.form.cboDevice.set_index(0);		// 디바이스 - 전체
        		this.divDetail.form.cboUseYn.set_index(1);		// 사용여부 - 사용
        		this.divDetail.form.cboMenuMark.set_index(0);	// 메뉴표시 - 사용
        		this.divDetail.form.cboMenuType.set_index(0);	// 메뉴유형 - 화면

        		this.fv_sSelectRow = "-1";
        		this.divDetail.form.grdMenuList.selectRow(-1);

        		// Tree 형태 그리드에서 자식 Row로 추가 되게 lev 지정
        		if(nMenuLev == 0)  {
        			//objDsMenuList.setColumn(objDsMenuList.rowposition, "lev", 1);
        			objDsMenuDetail.setColumn(0, "menu_level", 1);
        			objDsMenuDetail.setColumn(0, "parent_menu", nParentMenuCd);
        			objDsMenuDetail.setColumn(0, "root_menu", sParentRootMenuCd);
        			objDsMenuDetail.setColumn(0, "menu_order", sCreate);
        			objDsMenuDetail.setColumn(0, "parent_menu_nm", sParentMenuNm);
        		}
        		else if(nMenuLev >= 1) {
        			//objDsMenuList.setColumn(objDsMenuList.rowposition, "lev", 2);
        			objDsMenuDetail.setColumn(0, "menu_level", 2);
        			objDsMenuDetail.setColumn(0, "parent_menu", nParentMenuCd);
        			objDsMenuDetail.setColumn(0, "root_menu", sParentRootMenuCd);
        			objDsMenuDetail.setColumn(0, "menu_order", sCreate);
        			objDsMenuDetail.setColumn(0, "parent_menu_nm", sParentMenuNm);
        		}
        	}
        };

        /**
         * fnCompSetReadOnly : 대메뉴 선택시 수정불가 항목 readonly 변경
         * @example this.fnCompSetReadOnly();
         */
        this.fnCompSetReadOnly = function (bBoolen)
        {
        	var objDivDetail = this.divDetail.form;
        	// 대메뉴에서 addRow (공통추가) 버튼 클릭 되어도 수정 불가한 대메뉴 항목 readonly 유지
        	objDivDetail.cboDevice.set_readonly(bBoolen);
        	objDivDetail.cboUseYn.set_readonly(bBoolen);
        	objDivDetail.edtMenuNm.set_readonly(bBoolen);
        	objDivDetail.cboMenuMark.set_readonly(bBoolen);

        	// 메뉴유형별 div에 소속된 상세설명
        	objDivDetail.divBoard.form.txtDesc.set_readonly(bBoolen);
        	objDivDetail.divDefault.form.txtDesc.set_readonly(bBoolen);
        	objDivDetail.divDocManagement.form.txtDesc.set_readonly(bBoolen);
        	objDivDetail.divSch.form.txtDesc.set_readonly(bBoolen);
        };

        /**
         * fnSetCboMenuType : 메뉴유형 '메뉴' 선택시 화면유형 선택 불가
         * @example this.fnSetCboMenuType();
         */
        this.fnSetCboMenuType = function ()
        {
        	var sMenyType = take.nvl(this.divDetail.form.cboMenuType.value, "");
        	switch(sMenyType) {
        	case "02":
        		this.divDetail.form.btnScreen.set_enable(false);
        		this.fv_bMenuType = false;
        		break;
        	default:
        		this.divDetail.form.btnScreen.set_enable(true);
        		this.fv_bMenuType = true;
        	}
        };

        /**
         * fnPopCallback : 다국어팝업 콜백
         * @example this.fnPopCallback();
         */
        this.fnPopCallback = function (sId, nReturnVal)
        {
        	switch(sId) {
        	case "addMultiLanguage":
        		//팝업이 닫히면서 nReturnVal을 통해 값을 받을 수 있습니다
        		this.dsProjectMenuDetail.setColumn(0, "ml_cd", nReturnVal);
        		break;
        	default:
        	}
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
                case "projectMenuList" : 		// 좌측 '메뉴 목록 '조회 콜백
                    break;

                case "projectMenuDetail" : 		 // '메뉴 상세 '조회 콜백
        			trace("---->>>  "+this.dsProjectMenuDetail.getColumn(0, "manual_txt"))
                    if(take.nvl(this.dsProjectMenuDetail.getColumn(0, "manual_txt"), "") == ""){
        				this.divDetail.form.staManualLink.set_enable(false);
        				this.divDetail.form.staManualLink.set_cursor("default");
        			}else {
        				this.divDetail.form.staManualLink.set_enable(true);
        				this.divDetail.form.staManualLink.set_cursor("pointer");
        			}
                    break;

                case "multilanguageDetailList" : //다국어 조회 콜백
                    //Script
                    break;

                case "projectMenuSave" :  		// 메뉴정보 저장 콜백
        			var nMenuNm  = this.dsProjectMenuDetail.getColumn(0, "menu_nm");
        			trace("nRowType->  "+this.fv_nSaveBeforeRowType)

        			// RowType 값이 신규 추가된 Row의 상태 라면 권한 관리 이동 여부 메시지 표시
        			if(this.fv_nSaveBeforeRowType == 2)
        			{
        				var bRowChange = take.confirm(this, "question", "{name} 권한관리 화면으로 {text}하시겠습니까?", { name : nMenuNm, text : "이동"});
        				if(bRowChange)
        				{
        					// 권한관리 화면 이동 코드 작성
        					take.mdiOpenMenu(this, "PM040", "", "", true);
        				}
        			}
        			// 신규 추가된 Row가 아니라면 저장후 재조회
        			this.fnSearch("projectMenuList");
                    break;

                case "Save transation id 01" :  //저장 콜백
                    //Script
                    break;
        		case "projectMenuDelete" :   //삭제 콜백

        			this.fnSearch("projectMenuList");
                    break;

                default :
                    break;
            }
        }






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.PM030_onload,this);
            this.divSearch.form.edtMenu.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divDetail.form.grdMenuList.addEventHandler("onselectchanged",this.grdMenuList_onselectchanged,this);
            this.divDetail.form.grdMenuList.addEventHandler("oncellclick",this.divDetail_grdMenuList_oncellclick,this);
            this.divDetail.form.edtMenuNm.addEventHandler("onchanged",this.divDetail_edtMenuNm_onchanged,this);
            this.divDetail.form.btnMultiLanguage.addEventHandler("onclick",this.divDetail_btnMultiLanguage_onclick,this);
            this.divDetail.form.cboMenuType.addEventHandler("onitemchanged",this.divDetail_cboMenuType_onitemchanged,this);
            this.divDetail.form.staMenuListT.addEventHandler("onclick",this.divDetail_staMenuListT_onclick,this);
            this.divDetail.form.btnMenuAdd.addEventHandler("onclick",this.btnMenuAdd_onclick,this);
            this.divDetail.form.staManualLink.addEventHandler("onclick",this.divDetail_staManualLink_onclick,this);
            this.divDetail.form.btnScreen.addEventHandler("onclick",this.btnDirector_onclick,this);
            this.divDetail.form.divSch.form.cboSchFormTime.addEventHandler("onitemchanged",this.divDetail_divSch_cboSchFormTime_onitemchanged,this);
            this.divDetail.form.divSch.form.cboSchToTime.addEventHandler("onitemchanged",this.divDetail_divSch_cboSchToTime_onitemchanged,this);
            this.divDetail.form.divBoard.form.btnFormat.addEventHandler("onclick",this.divDetail_divBoard_btnFormat_onclick,this);
            this.dsProjectMenuList.addEventHandler("canrowposchange",this.dsProjectMenuList_canrowposchange,this);
        };
        this.loadIncludeScript("PM030_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
