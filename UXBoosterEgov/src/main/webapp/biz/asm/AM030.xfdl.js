(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM030");
            this.set_titletext("UXBooster 화면생성기");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCboTemplate", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">템플릿01</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">템플릿02</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">템플릿03</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">템플릿04</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">템플릿05</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">템플릿06</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">템플릿07</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboCrud", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">미사용</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSearchLayer", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">1단</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">2단</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"NAME\">3단</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInitInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"GEN_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchLayout", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"MAPPER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewLayout1", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"MAPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_MAPPING_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ONE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewLayout2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"MAPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_MAPPING_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ONE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewLayout3", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"MAPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_MAPPING_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ONE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewLayout4", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"MAPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_MAPPING_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ONE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CRUD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_LAYOUT\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_LAYOUT\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"GENERATE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_TITLE1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_TITLE2\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_TITLE3\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_TITLE4\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_GRID1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_GRID2\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_GRID3\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_GRID4\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT2\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT3\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT4\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE2\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE3\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE4\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComponentType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">일반텍스트</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">콤보박스</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">체크박스</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">라디오박스</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">날짜(Single)</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">날짜(From~To)</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">팝업검색</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDisplayType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">normal</Col><Col id=\"NAME\">normal</Col></Row><Row><Col id=\"CODE\">none</Col><Col id=\"NAME\">none</Col></Row><Row><Col id=\"CODE\">buttoncontrol</Col><Col id=\"NAME\">buttoncontrol</Col></Row><Row><Col id=\"CODE\">calendarcontrol</Col><Col id=\"NAME\">calendarcontrol</Col></Row><Row><Col id=\"CODE\">checkboxcontrol</Col><Col id=\"NAME\">checkboxcontrol</Col></Row><Row><Col id=\"CODE\">combocontrol</Col><Col id=\"NAME\">combocontrol</Col></Row><Row><Col id=\"CODE\">combotext</Col><Col id=\"NAME\">combotext</Col></Row><Row><Col id=\"CODE\">currency</Col><Col id=\"NAME\">currency</Col></Row><Row><Col id=\"CODE\">date</Col><Col id=\"NAME\">date</Col></Row><Row><Col id=\"CODE\">decoratetext</Col><Col id=\"NAME\">decoratetext</Col></Row><Row><Col id=\"CODE\">editcontrol</Col><Col id=\"NAME\">editcontrol</Col></Row><Row><Col id=\"CODE\">imagecontrol</Col><Col id=\"NAME\">imagecontrol</Col></Row><Row><Col id=\"CODE\">mask</Col><Col id=\"NAME\">mask</Col></Row><Row><Col id=\"CODE\">maskeditcontrol</Col><Col id=\"NAME\">maskeditcontrol</Col></Row><Row><Col id=\"CODE\">number</Col><Col id=\"NAME\">number</Col></Row><Row><Col id=\"CODE\">progressbarcontrol</Col><Col id=\"NAME\">progressbarcontrol</Col></Row><Row><Col id=\"CODE\">text</Col><Col id=\"NAME\">text</Col></Row><Row><Col id=\"CODE\">textareacontrol</Col><Col id=\"NAME\">textareacontrol</Col></Row><Row><Col id=\"CODE\">treeitemcontrol</Col><Col id=\"NAME\">treeitemcontrol</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEditType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">normal</Col><Col id=\"NAME\">normal</Col></Row><Row><Col id=\"CODE\">none</Col><Col id=\"NAME\">none</Col></Row><Row><Col id=\"CODE\">button</Col><Col id=\"NAME\">button</Col></Row><Row><Col id=\"CODE\">checkbox</Col><Col id=\"NAME\">checkbox</Col></Row><Row><Col id=\"CODE\">combo</Col><Col id=\"NAME\">combo</Col></Row><Row><Col id=\"CODE\">date</Col><Col id=\"NAME\">date</Col></Row><Row><Col id=\"CODE\">mask</Col><Col id=\"NAME\">mask</Col></Row><Row><Col id=\"CODE\">readonly</Col><Col id=\"NAME\">readonly</Col></Row><Row><Col id=\"CODE\">text</Col><Col id=\"NAME\">text</Col></Row><Row><Col id=\"CODE\">textarea</Col><Col id=\"NAME\">textarea</Col></Row><Row><Col id=\"CODE\"> tree</Col><Col id=\"NAME\"> tree</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboAlign", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">left</Col><Col id=\"NAME\">Left</Col></Row><Row><Col id=\"CODE\">center</Col><Col id=\"NAME\">Center</Col></Row><Row><Col id=\"CODE\">right</Col><Col id=\"NAME\">Right</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataset", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DATASET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYOUT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QUERY_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComponentType2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"NAME\">None</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">Edit</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">Combo</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">Checkbox</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewLayout5", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"MAPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_MAPPING_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ONE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">No</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">1X1</Col><Col id=\"NAME\">1X1</Col></Row><Row><Col id=\"CODE\">1X2</Col><Col id=\"NAME\">1X2</Col></Row><Row><Col id=\"CODE\">1X3</Col><Col id=\"NAME\">1X3</Col></Row><Row><Col id=\"CODE\">2X1</Col><Col id=\"NAME\">2X1</Col></Row><Row><Col id=\"CODE\">2X2</Col><Col id=\"NAME\">2X2</Col></Row><Row><Col id=\"CODE\">2X3</Col><Col id=\"NAME\">2X3</Col></Row><Row><Col id=\"CODE\">3X1</Col><Col id=\"NAME\">3X1</Col></Row><Row><Col id=\"CODE\">3X2</Col><Col id=\"NAME\">3X2</Col></Row><Row><Col id=\"CODE\">3X3</Col><Col id=\"NAME\">3X3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchLayoutForView", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"MAPPER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1020",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTemplateT","20","10","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("템플릿");
            obj.set_cssclass("sta_WF_textRImport");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTemplate","104","10","231","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsCboTemplate");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","46.63%","42","70","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","52",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static03");
            obj.set_background("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","1","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","340","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","679","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","1018","-14","10","106",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Static23");
            obj.set_background("blue");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","62",null,null,"0","0","1020",null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTemplateT","10","0","320","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("템플릿");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static45","330","30","10","200",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("Static00");
            obj.set_background("red");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34","105","30","225","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staPrefixT","6","30","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("Prefix");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34_00","105","60","225","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtFormId","112","65","150","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staFormIdT","6","60","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("화면ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34_01","105","90","225","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtFormNm","112","95","211","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staFormNmT","6","90","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static34_02","105","120","225","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_td01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staCrudT","6","120","100","31",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("입력/수정/삭제");
            obj.set_cssclass("sta_WF_th01L");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboPrefix","112","35","211","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCboPrefix");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboCrudYn","112","125","211","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsCboCrud");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","263","65","50","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text(".xfdl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","130","30","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("화면생성");
            obj.set_cssclass("btn_WF_basic01");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divTab01","340","93",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSearch","10","30",null,null,"10","10",null,null,null,null,this.divTab01.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSearchLayout");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"사용\"/><Cell col=\"2\" text=\"ID\"/><Cell col=\"3\" text=\"Title\"/><Cell col=\"4\" text=\"Require\"/><Cell col=\"5\" text=\"컴포넌트\"/><Cell col=\"6\" text=\"공통코드\"/><Cell col=\"7\" text=\"Inner Dataset\"/><Cell col=\"8\" colspan=\"2\" text=\"Sql Mapper or 공통코드그룹키\"/></Band><Band id=\"body\"><Cell text=\"bind:GUBUN\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:LABEL_ID\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:LABEL_NAME\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:REQ_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" text=\"bind:SEARCH_TYPE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsComponentType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CODE_YN\"/><Cell col=\"7\" text=\"bind:BIND_DATASET\" displaytype=\"text\" edittype=\"text\" combodataset=\"dsDataset\" combocodecol=\"DATASET_NAME\" combodatacol=\"DATASET_NAME\"/><Cell col=\"8\" text=\"bind:MAPPER_ID\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"9\" displaytype=\"buttoncontrol\" edittype=\"none\" text=\"검색\"/></Band></Format></Formats>");
            this.divTab01.addChild(obj.name, obj);

            obj = new Static("staSearchLayerT","10","5","100","23",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("1");
            obj.set_text("* 검색Layout 선택: ");
            this.divTab01.addChild(obj.name, obj);

            obj = new Combo("cboSearchLayer","119","5","111","24",null,null,null,null,null,null,this.divTab01.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsCboSearchLayer");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divTab01.addChild(obj.name, obj);

            obj = new Div("divTab02","340","663",null,null,"10","-561",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            this.addChild(obj.name, obj);

            obj = new Static("staGridIdT","10","40","120","31",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("0");
            obj.set_text("Grid1 ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab02.addChild(obj.name, obj);

            obj = new Static("Static34_01","129","40",null,"31","10",null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab02.addChild(obj.name, obj);

            obj = new Edit("edtGridId","136","45","211","21",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("2");
            obj.set_inputfilter("space,symbol");
            obj.set_value("grdList1");
            obj.set_text("grdList1");
            this.divTab02.addChild(obj.name, obj);

            obj = new Static("staDatasetNmT","10","70","120","31",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("3");
            obj.set_text("Dataset 명");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab02.addChild(obj.name, obj);

            obj = new Static("Static34_01_00","129","70",null,"31","10",null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab02.addChild(obj.name, obj);

            obj = new Edit("edtDatasetNm","136","75","211","21",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("5");
            obj.set_inputfilter("space,symbol");
            obj.set_value("dsList1");
            obj.set_text("dsList1");
            this.divTab02.addChild(obj.name, obj);

            obj = new Static("staSqlMapperT","10","100","120","31",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("6");
            obj.set_text("Sql Mapper");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab02.addChild(obj.name, obj);

            obj = new Static("Static34_01_00_00","129","100",null,"31","10",null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab02.addChild(obj.name, obj);

            obj = new Edit("edtSqlMapper","136","105","211","21",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("8");
            obj.set_inputfilter("space,symbol");
            this.divTab02.addChild(obj.name, obj);

            obj = new Grid("grdGrid","10","137",null,null,"10","10",null,null,null,null,this.divTab02.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsViewLayout1");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"220\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼\"/><Cell col=\"1\" text=\"컬럼명\"/><Cell col=\"2\" text=\"View\"/><Cell col=\"3\" text=\"순서\"/><Cell col=\"4\" text=\"검색유형\"/><Cell col=\"5\" text=\"매핑\"/><Cell col=\"6\" text=\"Display Type\"/><Cell col=\"7\" text=\"Size\"/><Cell col=\"8\" text=\"정렬\"/><Cell col=\"9\" text=\"Edit Type\"/><Cell col=\"10\" text=\"필수\"/><Cell col=\"11\" text=\"코드\"/><Cell col=\"12\" text=\"Bind Dataset\"/><Cell col=\"13\" colspan=\"2\" text=\"Sql Mapper or 공통코드그룹키\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_ID\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_NAME\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:DISPLAY_YN\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:DISPLAY_ORDER\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:SEARCH_YN\" textAlign=\"center\" combodataset=\"dsCboSearchType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DTL_MAPPING_YN\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:DISPLAY_TYPE\" combodataset=\"dsDisplayType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:SIZE\"/><Cell col=\"8\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:ALIGN\" combodataset=\"dsCboAlign\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"9\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:EDIT_TYPE\" combodataset=\"dsEditType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:INPUT_YN\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CODE_YN\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BIND_DATASET\" combodataset=\"dsDataset\" combocodecol=\"DATASET_NAME\" combodatacol=\"DATASET_NAME\"/><Cell col=\"13\" text=\"bind:MAPPER_ID\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"14\" text=\"검색\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.divTab02.addChild(obj.name, obj);

            obj = new Button("btnExec","403","105","46","23",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("10");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab02.addChild(obj.name, obj);

            obj = new Static("staGridIdT00","10","10","120","31",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("11");
            obj.set_text("Grid1 제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab02.addChild(obj.name, obj);

            obj = new Static("Static34_01_01","129","10",null,"31","10",null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab02.addChild(obj.name, obj);

            obj = new Edit("edtGridTitle","136","15","211","21",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("13");
            obj.set_inputfilter("space,symbol");
            obj.set_text("grdList1");
            this.divTab02.addChild(obj.name, obj);

            obj = new Edit("edtEx","btnExec:6","105","211","21",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("14");
            obj.set_inputfilter("space,symbol");
            obj.set_value("예시) Sample.smpForm01JoinSelect");
            obj.set_border("0px none");
            obj.set_text("예시) Sample.smpForm01JoinSelect");
            this.divTab02.addChild(obj.name, obj);

            obj = new Button("btnFind02","353","105","46","23",null,null,null,null,null,null,this.divTab02.form);
            obj.set_taborder("15");
            obj.set_text("찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab02.addChild(obj.name, obj);

            obj = new Div("divTab03","340","1223",null,null,"10","-1121",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            this.addChild(obj.name, obj);

            obj = new Static("staGridIdT","10","40","120","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("0");
            obj.set_text("Grid2 ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static34_01","129","40",null,"31","10",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Edit("edtGridId","136","45","211","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("2");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            obj.set_value("grdList2");
            obj.set_text("grdList2");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staDatasetNmT","10","70","120","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("3");
            obj.set_text("Dataset 명");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static34_01_00","129","70",null,"31","10",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Edit("edtDatasetNm","136","75","211","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("5");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            obj.set_value("dsList2");
            obj.set_text("dsList2");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staSqlMapperT","10","100","120","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("6");
            obj.set_text("Sql Mapper");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static34_01_00_00","129","100",null,"31","10",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Edit("edtSqlMapper","136","105","211","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("8");
            obj.set_inputfilter("space,symbol");
            this.divTab03.addChild(obj.name, obj);

            obj = new Grid("grdGrid","10","137",null,null,"10","10",null,null,null,null,this.divTab03.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsViewLayout2");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"280\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼\"/><Cell col=\"1\" text=\"컬럼명\"/><Cell col=\"2\" text=\"View\"/><Cell col=\"3\" text=\"순서\"/><Cell col=\"4\" text=\"매핑\"/><Cell col=\"5\" text=\"Display Type\"/><Cell col=\"6\" text=\"Size\"/><Cell col=\"7\" text=\"정렬\"/><Cell col=\"8\" text=\"Edit Type\"/><Cell col=\"9\" text=\"필수\"/><Cell col=\"10\" text=\"코드\"/><Cell col=\"11\" text=\"Bind Dataset\"/><Cell col=\"12\" colspan=\"2\" text=\"Sql Mapper or 공통코드그룹키\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_ID\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_NAME\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:DISPLAY_YN\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:DISPLAY_ORDER\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:DTL_MAPPING_YN\"/><Cell col=\"5\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:DISPLAY_TYPE\" combodataset=\"dsDisplayType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:SIZE\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:ALIGN\" combodataset=\"dsCboAlign\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:EDIT_TYPE\" combodataset=\"dsEditType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:INPUT_YN\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CODE_YN\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BIND_DATASET\" combodataset=\"dsDataset\" combocodecol=\"DATASET_NAME\" combodatacol=\"DATASET_NAME\"/><Cell col=\"12\" text=\"bind:MAPPER_ID\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"13\" displaytype=\"buttoncontrol\" text=\"검색\"/></Band></Format></Formats>");
            this.divTab03.addChild(obj.name, obj);

            obj = new Button("btnExec","403","105","46","23",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("10");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("staGridIdT00","10","10","120","31",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("11");
            obj.set_text("Grid2 제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Static("Static34_01_01","129","10",null,"31","10",null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab03.addChild(obj.name, obj);

            obj = new Edit("edtGridTitle","136","15","211","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("13");
            obj.set_inputfilter("space,symbol");
            obj.set_text("grdList1");
            this.divTab03.addChild(obj.name, obj);

            obj = new Edit("edtEx","btnExec:5","105","211","21",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("14");
            obj.set_inputfilter("space,symbol");
            obj.set_value("예시) Sample.smpForm01JoinSelect");
            obj.set_border("0px none");
            obj.set_text("예시) Sample.smpForm01JoinSelect");
            this.divTab03.addChild(obj.name, obj);

            obj = new Button("btnFind03","353","105","46","23",null,null,null,null,null,null,this.divTab03.form);
            obj.set_taborder("15");
            obj.set_text("찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab03.addChild(obj.name, obj);

            obj = new Div("divTab04","340","1783",null,null,"10","-1681",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            this.addChild(obj.name, obj);

            obj = new Static("staGridIdT","10","40","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("0");
            obj.set_text("Grid3 ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static34_01","129","40",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtGridId","136","45","211","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("2");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            obj.set_value("grdList3");
            obj.set_text("grdList3");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staDatasetNmT","10","70","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("3");
            obj.set_text("Dataset 명");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static34_01_00","129","70",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtDatasetNm","136","75","211","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("5");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            obj.set_value("dsList3");
            obj.set_text("dsList3");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staSqlMapperT","10","100","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("6");
            obj.set_text("Sql Mapper");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static34_01_00_00","129","100",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtSqlMapper","136","105","211","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("8");
            obj.set_inputfilter("space,symbol");
            this.divTab04.addChild(obj.name, obj);

            obj = new Grid("grdGrid","10","137",null,null,"10","10",null,null,null,null,this.divTab04.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsViewLayout3");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"320\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼\"/><Cell col=\"1\" text=\"컬럼명\"/><Cell col=\"2\" text=\"View\"/><Cell col=\"3\" text=\"순서\"/><Cell col=\"4\" text=\"Display Type\"/><Cell col=\"5\" text=\"Size\"/><Cell col=\"6\" text=\"정렬\"/><Cell col=\"7\" text=\"Edit Type\"/><Cell col=\"8\" text=\"필수\"/><Cell col=\"9\" text=\"코드\"/><Cell col=\"10\" text=\"Bind Dataset\"/><Cell col=\"11\" colspan=\"2\" text=\"Sql Mapper or 공통코드그룹키\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_ID\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_NAME\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:DISPLAY_YN\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:DISPLAY_ORDER\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:DISPLAY_TYPE\" combodataset=\"dsDisplayType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:SIZE\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:ALIGN\" combodataset=\"dsCboAlign\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:EDIT_TYPE\" combodataset=\"dsEditType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:INPUT_YN\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CODE_YN\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BIND_DATASET\" combodataset=\"dsDataset\" combocodecol=\"DATASET_NAME\" combodatacol=\"DATASET_NAME\"/><Cell col=\"11\" text=\"bind:MAPPER_ID\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"12\" displaytype=\"buttoncontrol\" text=\"검색\"/></Band></Format></Formats>");
            this.divTab04.addChild(obj.name, obj);

            obj = new Button("btnExec","403","105","46","23",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("10");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("staGridIdT00","10","10","120","31",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("11");
            obj.set_text("Grid3 제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Static("Static34_01_01","129","10",null,"31","10",null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtGridTitle","136","15","211","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("13");
            obj.set_inputfilter("space,symbol");
            obj.set_text("grdList1");
            this.divTab04.addChild(obj.name, obj);

            obj = new Edit("edtEx","btnExec:5","105","211","21",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("14");
            obj.set_inputfilter("space,symbol");
            obj.set_value("예시) Sample.smpForm01JoinSelect");
            obj.set_border("0px none");
            obj.set_text("예시) Sample.smpForm01JoinSelect");
            this.divTab04.addChild(obj.name, obj);

            obj = new Button("btnFind04","353","105","46","23",null,null,null,null,null,null,this.divTab04.form);
            obj.set_taborder("15");
            obj.set_text("찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab04.addChild(obj.name, obj);

            obj = new Div("divTab05","340","2343",null,null,"10","-2241",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            this.addChild(obj.name, obj);

            obj = new Static("staDatasetNmT","10","40","120","31",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("0");
            obj.set_text("Dataset 명");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab05.addChild(obj.name, obj);

            obj = new Static("Static34_01_00","129","40",null,"31","10",null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab05.addChild(obj.name, obj);

            obj = new Edit("edtDatasetNm","136","45","211","21",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("2");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            obj.set_value("dsDetail");
            obj.set_text("dsDetail");
            this.divTab05.addChild(obj.name, obj);

            obj = new Static("staSqlMapperT","10","70","120","31",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("3");
            obj.set_text("Sql Mapper");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab05.addChild(obj.name, obj);

            obj = new Static("Static34_01_00_00","129","70",null,"31","10",null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab05.addChild(obj.name, obj);

            obj = new Edit("edtSqlMapper","136","75","211","21",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("5");
            obj.set_inputfilter("space,symbol");
            this.divTab05.addChild(obj.name, obj);

            obj = new Grid("grdGrid","10","106",null,null,"10","10",null,null,null,null,this.divTab05.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsViewLayout4");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"380\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼\"/><Cell col=\"1\" text=\"컬럼명\"/><Cell col=\"2\" text=\"View\"/><Cell col=\"3\" text=\"순서\"/><Cell col=\"4\" text=\"컴포넌트\"/><Cell col=\"5\" text=\"병합\"/><Cell col=\"6\" text=\"필수\"/><Cell col=\"7\" text=\"코드\"/><Cell col=\"8\" text=\"Bind Dataset\"/><Cell col=\"9\" colspan=\"2\" text=\"Sql Mapper or 공통코드그룹키\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_ID\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_NAME\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:DISPLAY_YN\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:DISPLAY_ORDER\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:DETAIL_TYPE\" combodataset=\"dsComponentType2\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:ONE_YN\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:INPUT_YN\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CODE_YN\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BIND_DATASET\" combodataset=\"dsDataset\" combocodecol=\"DATASET_NAME\" combodatacol=\"DATASET_NAME\"/><Cell col=\"9\" text=\"bind:MAPPER_ID\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"10\" displaytype=\"buttoncontrol\" text=\"검색\"/></Band></Format></Formats>");
            this.divTab05.addChild(obj.name, obj);

            obj = new Button("btnExec","403","75","46","23",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("7");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab05.addChild(obj.name, obj);

            obj = new Static("staGridIdT00","10","10","120","31",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("8");
            obj.set_text("Detail 제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab05.addChild(obj.name, obj);

            obj = new Static("Static34_01_01","129","10",null,"31","10",null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab05.addChild(obj.name, obj);

            obj = new Edit("edtDetailTitle","136","15","211","21",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("10");
            obj.set_inputfilter("space,symbol");
            obj.set_text("grdList1");
            this.divTab05.addChild(obj.name, obj);

            obj = new Edit("edtEx","btnExec:5","75","211","21",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("11");
            obj.set_inputfilter("space,symbol");
            obj.set_value("예시) Sample.smpForm01JoinSelect");
            obj.set_border("0px none");
            obj.set_text("예시) Sample.smpForm01JoinSelect");
            this.divTab05.addChild(obj.name, obj);

            obj = new Button("btnFind05","353","75","46","23",null,null,null,null,null,null,this.divTab05.form);
            obj.set_taborder("12");
            obj.set_text("찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab05.addChild(obj.name, obj);

            obj = new Button("btnTab01","340","66","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("검색영역");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab02","431","66","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Grid1");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab03","522","66","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Grid2");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab04","613","66","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Grid3");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab05","704","66","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Detail");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Div("divLayout01","6","222","324","318",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divLayout00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","20","10",null,"50","20",null,null,null,null,null,this.divLayout01.form);
            obj.set_taborder("0");
            obj.set_text("검색영역");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout01.addChild(obj.name, obj);

            obj = new Button("btnTab02","20","65",null,"150","20",null,null,null,null,null,this.divLayout01.form);
            obj.set_taborder("1");
            obj.set_text("Grid1");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout01.addChild(obj.name, obj);

            obj = new Static("staLayout01","20","220",null,null,"20","10",null,null,null,null,this.divLayout01.form);
            obj.set_taborder("2");
            obj.set_text("- 상단 검색조건\r\n- 하단 그리드\r\n\r\n* 검색조건은 하단 그리드");
            obj.set_verticalAlign("top");
            this.divLayout01.addChild(obj.name, obj);

            obj = new Div("divLayout02","6","542","324","318",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divLayout00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","20","10",null,"50","20",null,null,null,null,null,this.divLayout02.form);
            obj.set_taborder("0");
            obj.set_text("검색영역");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout02.addChild(obj.name, obj);

            obj = new Button("btnTab03","109","65",null,"150","20",null,null,null,null,null,this.divLayout02.form);
            obj.set_taborder("1");
            obj.set_text("Grid2");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout02.addChild(obj.name, obj);

            obj = new Button("btnTab02","20","65",null,"150","219",null,null,null,null,null,this.divLayout02.form);
            obj.set_taborder("2");
            obj.set_text("Grid1");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout02.addChild(obj.name, obj);

            obj = new Static("staLayout01","20","220",null,null,"20","10",null,null,null,null,this.divLayout02.form);
            obj.set_taborder("3");
            obj.set_text("- 상단 검색조건\r\n- 하단 좌측 그리드\r\n- 하단 우측 그리드(상세)\r\n\r\n*검색조건은 하단 좌측 그리드");
            obj.set_verticalAlign("top");
            this.divLayout02.addChild(obj.name, obj);

            obj = new Div("divLayout03","6","872","324","318",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divLayout00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","20","10",null,"50","20",null,null,null,null,null,this.divLayout03.form);
            obj.set_taborder("0");
            obj.set_text("검색영역");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout03.addChild(obj.name, obj);

            obj = new Button("btnTab03","109","65",null,"72","20",null,null,null,null,null,this.divLayout03.form);
            obj.set_taborder("1");
            obj.set_text("Grid2");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout03.addChild(obj.name, obj);

            obj = new Button("btnTab02","20","65",null,"150","219",null,null,null,null,null,this.divLayout03.form);
            obj.set_taborder("2");
            obj.set_text("Grid1");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout03.addChild(obj.name, obj);

            obj = new Button("btnTab04","109","145",null,"70","20",null,null,null,null,null,this.divLayout03.form);
            obj.set_taborder("3");
            obj.set_text("Grid3");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout03.addChild(obj.name, obj);

            obj = new Static("staLayout01","20","220",null,null,"20","10",null,null,null,null,this.divLayout03.form);
            obj.set_taborder("4");
            obj.set_text("- 상단 검색조건\r\n- 하단 좌측 그리드\r\n- 하단 우측 상단 그리드(상세)\r\n- 하단 우축 하단 그리드(상세-서브)\r\n\r\n* 검색조건은 하단 좌측 그리드");
            obj.set_verticalAlign("top");
            this.divLayout03.addChild(obj.name, obj);

            obj = new Div("divLayout04","6","1202","324","318",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divLayout00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","20","10",null,"50","20",null,null,null,null,null,this.divLayout04.form);
            obj.set_taborder("0");
            obj.set_text("검색영역");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout04.addChild(obj.name, obj);

            obj = new Button("btnTab05","109","65",null,"150","20",null,null,null,null,null,this.divLayout04.form);
            obj.set_taborder("1");
            obj.set_text("Detail");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout04.addChild(obj.name, obj);

            obj = new Button("btnTab02","20","65",null,"150","219",null,null,null,null,null,this.divLayout04.form);
            obj.set_taborder("2");
            obj.set_text("Grid1");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout04.addChild(obj.name, obj);

            obj = new Static("staLayout01","20","220",null,null,"20","10",null,null,null,null,this.divLayout04.form);
            obj.set_taborder("3");
            obj.set_text("- 상단 검색조건\r\n- 하단 좌측 그리드\r\n- 하단 우측 폼(상세)\r\n\r\n* 검색조건은 하단 촤측 그리드");
            obj.set_verticalAlign("top");
            this.divLayout04.addChild(obj.name, obj);

            obj = new Div("divLayout05","6","1532","324","318",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divLayout00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","20","10",null,"50","20",null,null,null,null,null,this.divLayout05.form);
            obj.set_taborder("0");
            obj.set_text("검색영역");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout05.addChild(obj.name, obj);

            obj = new Button("btnTab03","109","65",null,"72","20",null,null,null,null,null,this.divLayout05.form);
            obj.set_taborder("1");
            obj.set_text("Grid2");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout05.addChild(obj.name, obj);

            obj = new Button("btnTab02","20","65",null,"150","219",null,null,null,null,null,this.divLayout05.form);
            obj.set_taborder("2");
            obj.set_text("Grid1");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout05.addChild(obj.name, obj);

            obj = new Button("btnTab05","109","145",null,"70","20",null,null,null,null,null,this.divLayout05.form);
            obj.set_taborder("3");
            obj.set_text("Detail");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout05.addChild(obj.name, obj);

            obj = new Static("staLayout01","20","220",null,null,"20","10",null,null,null,null,this.divLayout05.form);
            obj.set_taborder("4");
            obj.set_text("- 상단 검색조건\r\n- 하단 좌측 그리드\r\n- 하단 우측 상단 그리드(상세)\r\n- 하단 우축 하단 폼(상세-서브)\r\n\r\n* 검색조건은 하단 좌측 그리드");
            obj.set_verticalAlign("top");
            this.divLayout05.addChild(obj.name, obj);

            obj = new Div("divLayout06","6","1862","324","318",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divLayout00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","20","10",null,"50","20",null,null,null,null,null,this.divLayout06.form);
            obj.set_taborder("0");
            obj.set_text("검색영역");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout06.addChild(obj.name, obj);

            obj = new Button("btnTab02","109","65",null,"150","20",null,null,null,null,null,this.divLayout06.form);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout06.addChild(obj.name, obj);

            obj = new Button("btnTab06","20","65",null,"150","219",null,null,null,null,null,this.divLayout06.form);
            obj.set_taborder("2");
            obj.set_text("Tree");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout06.addChild(obj.name, obj);

            obj = new Static("staLayout01","20","220",null,null,"20","10",null,null,null,null,this.divLayout06.form);
            obj.set_taborder("3");
            obj.set_text("- 상단 검색조건\r\n- 하단 좌측 트리\r\n- 하단 우측 상단 그리드(상세)\r\n\r\n* 검색조건은 하단 좌측 트리");
            obj.set_verticalAlign("top");
            this.divLayout06.addChild(obj.name, obj);

            obj = new Div("divLayout07","6","2192","324","318",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divLayout00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","20","10",null,"50","20",null,null,null,null,null,this.divLayout07.form);
            obj.set_taborder("0");
            obj.set_text("검색영역");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout07.addChild(obj.name, obj);

            obj = new Button("btnTab05","109","65",null,"150","20",null,null,null,null,null,this.divLayout07.form);
            obj.set_taborder("1");
            obj.set_text("Detail");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout07.addChild(obj.name, obj);

            obj = new Button("btnTab06","20","65",null,"150","219",null,null,null,null,null,this.divLayout07.form);
            obj.set_taborder("2");
            obj.set_text("Tree");
            obj.set_background("#959595");
            obj.set_color("#ffffff");
            this.divLayout07.addChild(obj.name, obj);

            obj = new Static("staLayout01","20","220",null,null,"20","10",null,null,null,null,this.divLayout07.form);
            obj.set_taborder("3");
            obj.set_text("- 상단 검색조건\r\n- 하단 좌측 트리\r\n- 하단 우측 상단 폼(상세)\r\n\r\n* 검색조건은 하단 좌측 트리");
            obj.set_verticalAlign("top");
            this.divLayout07.addChild(obj.name, obj);

            obj = new Button("btnTab06","795","66","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Tree");
            obj.set_cssclass("btn_WF_tab01");
            this.addChild(obj.name, obj);

            obj = new Div("divTab06","340","2903",null,null,"10","-2801",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            this.addChild(obj.name, obj);

            obj = new Static("staGridIdT","10","40","120","31",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("0");
            obj.set_text("Tree ID");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab06.addChild(obj.name, obj);

            obj = new Static("Static34_01","129","40",null,"31","10",null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab06.addChild(obj.name, obj);

            obj = new Edit("edtGridId","136","45","211","21",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("2");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            obj.set_value("grdTree");
            obj.set_text("grdTree");
            this.divTab06.addChild(obj.name, obj);

            obj = new Static("staDatasetNmT","10","70","120","31",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("3");
            obj.set_text("Dataset 명");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab06.addChild(obj.name, obj);

            obj = new Static("Static34_01_00","129","70",null,"31","10",null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab06.addChild(obj.name, obj);

            obj = new Edit("edtDatasetNm","136","75","211","21",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("5");
            obj.set_maxlength("15");
            obj.set_inputfilter("space,symbol");
            obj.set_value("dsTree");
            obj.set_text("dsTree");
            this.divTab06.addChild(obj.name, obj);

            obj = new Static("staSqlMapperT","10","100","120","31",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("6");
            obj.set_text("Sql Mapper");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab06.addChild(obj.name, obj);

            obj = new Static("Static34_01_00_00","129","100",null,"31","10",null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab06.addChild(obj.name, obj);

            obj = new Edit("edtSqlMapper","136","105","211","21",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("8");
            obj.set_inputfilter("space,symbol");
            this.divTab06.addChild(obj.name, obj);

            obj = new Grid("grdGrid","10","137",null,null,"10","10",null,null,null,null,this.divTab06.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsViewLayout5");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"180\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼\"/><Cell col=\"1\" text=\"컬럼명\"/><Cell col=\"2\" text=\"View\"/><Cell col=\"3\" text=\"검색유형\"/><Cell col=\"4\" text=\"매핑\"/><Cell col=\"5\" text=\"Level Y/N\"/><Cell col=\"6\" text=\"정렬\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_ID\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:COL_NAME\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" text=\"bind:DISPLAY_YN\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsCboSearchType\" combocodecol=\"CODE\" combodatacol=\"NAME\" text=\"bind:SEARCH_YN\"/><Cell col=\"4\" text=\"bind:DTL_MAPPING_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LEVEL_YN\"/><Cell col=\"6\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:ALIGN\" combodataset=\"dsCboAlign\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.divTab06.addChild(obj.name, obj);

            obj = new Button("btnExec","403","105","46","23",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("10");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab06.addChild(obj.name, obj);

            obj = new Static("staGridIdT00","10","10","120","31",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("11");
            obj.set_text("Tree 제목");
            obj.set_cssclass("sta_WF_th01L");
            this.divTab06.addChild(obj.name, obj);

            obj = new Static("Static34_01_01","129","10",null,"31","10",null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_td01L");
            this.divTab06.addChild(obj.name, obj);

            obj = new Edit("edtGridTitle","136","15","211","21",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("13");
            obj.set_inputfilter("space,symbol");
            obj.set_text("grdList1");
            this.divTab06.addChild(obj.name, obj);

            obj = new Edit("edtEx","btnExec:5","105","211","21",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("14");
            obj.set_inputfilter("space,symbol");
            obj.set_value("예시) Sample.smpForm01JoinSelect");
            obj.set_border("0px none");
            obj.set_text("예시) Sample.smpForm01JoinSelect");
            this.divTab06.addChild(obj.name, obj);

            obj = new Button("btnFind06","353","105","46","23",null,null,null,null,null,null,this.divTab06.form);
            obj.set_taborder("15");
            obj.set_text("찾기");
            obj.set_cssclass("btn_WF_basic01");
            this.divTab06.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staTemplateT.set_taborder("1");
                p.staTemplateT.set_text("템플릿");
                p.staTemplateT.set_cssclass("sta_WF_textRImport");
                p.staTemplateT.move("20","10","80","21",null,null);

                p.cboTemplate.set_taborder("0");
                p.cboTemplate.set_innerdataset("dsCboTemplate");
                p.cboTemplate.set_codecolumn("CODE");
                p.cboTemplate.set_datacolumn("NAME");
                p.cboTemplate.set_text("Combo00");
                p.cboTemplate.move("104","10","231","21",null,null);
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
                p.staTemplateT.set_taborder("1");
                p.staTemplateT.set_text("프로젝트");
                p.staTemplateT.set_cssclass("sta_WF_textRImport");
                p.staTemplateT.move("20","10","80","21",null,null);
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
                p.staTemplateT.set_taborder("0");
                p.staTemplateT.set_text("템플릿");
                p.staTemplateT.set_cssclass("sta_WF_title02");
                p.staTemplateT.move("10","0","320","30",null,null);

                p.Static45.set_taborder("1");
                p.Static45.set_text("Static00");
                p.Static45.set_background("red");
                p.Static45.set_visible("false");
                p.Static45.move("330","30","10","200",null,null);

                p.Static34.set_taborder("2");
                p.Static34.set_cssclass("sta_WF_td01L");
                p.Static34.move("105","30","225","31",null,null);

                p.staPrefixT.set_taborder("3");
                p.staPrefixT.set_text("Prefix");
                p.staPrefixT.set_cssclass("sta_WF_th01L");
                p.staPrefixT.move("6","30","100","31",null,null);

                p.Static34_00.set_taborder("4");
                p.Static34_00.set_cssclass("sta_WF_td01L");
                p.Static34_00.move("105","60","225","31",null,null);

                p.edtFormId.set_taborder("5");
                p.edtFormId.set_maxlength("15");
                p.edtFormId.set_inputfilter("space,symbol");
                p.edtFormId.move("112","65","150","21",null,null);

                p.staFormIdT.set_taborder("6");
                p.staFormIdT.set_text("화면ID");
                p.staFormIdT.set_cssclass("sta_WF_th01L");
                p.staFormIdT.move("6","60","100","31",null,null);

                p.Static34_01.set_taborder("7");
                p.Static34_01.set_cssclass("sta_WF_td01L");
                p.Static34_01.move("105","90","225","31",null,null);

                p.edtFormNm.set_taborder("8");
                p.edtFormNm.set_maxlength("15");
                p.edtFormNm.set_inputfilter("space,symbol");
                p.edtFormNm.move("112","95","211","21",null,null);

                p.staFormNmT.set_taborder("9");
                p.staFormNmT.set_text("화면명");
                p.staFormNmT.set_cssclass("sta_WF_th01L");
                p.staFormNmT.move("6","90","100","31",null,null);

                p.Static34_02.set_taborder("10");
                p.Static34_02.set_cssclass("sta_WF_td01L");
                p.Static34_02.move("105","120","225","31",null,null);

                p.staCrudT.set_taborder("11");
                p.staCrudT.set_text("입력/수정/삭제");
                p.staCrudT.set_cssclass("sta_WF_th01L");
                p.staCrudT.move("6","120","100","31",null,null);

                p.cboPrefix.set_taborder("12");
                p.cboPrefix.set_innerdataset("dsCboPrefix");
                p.cboPrefix.set_codecolumn("CODE");
                p.cboPrefix.set_datacolumn("NAME");
                p.cboPrefix.set_text("Combo00");
                p.cboPrefix.move("112","35","211","21",null,null);

                p.cboCrudYn.set_taborder("13");
                p.cboCrudYn.set_innerdataset("dsCboCrud");
                p.cboCrudYn.set_codecolumn("CODE");
                p.cboCrudYn.set_datacolumn("NAME");
                p.cboCrudYn.set_text("Combo00");
                p.cboCrudYn.move("112","125","211","21",null,null);

                p.Static01.set_taborder("14");
                p.Static01.set_text(".xfdl");
                p.Static01.move("263","65","50","23",null,null);

                p.btnSave.set_taborder("15");
                p.btnSave.set_text("화면생성");
                p.btnSave.set_cssclass("btn_WF_basic01");
                p.btnSave.set_font("normal 700 14pt/normal \"Arial\"");
                p.btnSave.move(null,"0","130","30","10",null);
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
                p.staTemplateT.set_taborder("0");
                p.staTemplateT.set_text("권한 목록");
                p.staTemplateT.set_cssclass("sta_WF_title02");
                p.staTemplateT.move("0","0","450","30",null,null);

                p.Static45.set_taborder("1");
                p.Static45.set_text("Static00");
                p.Static45.set_background("red");
                p.Static45.set_visible("false");
                p.Static45.move("310","30","10","200",null,null);
            	}
            );
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divTab01.form
            obj = new Layout("default","",0,0,this.divTab01.form,function(p){});
            this.divTab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab02.form
            obj = new Layout("default","",0,0,this.divTab02.form,function(p){});
            this.divTab02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab03.form
            obj = new Layout("default","",0,0,this.divTab03.form,function(p){});
            this.divTab03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab04.form
            obj = new Layout("default","",0,0,this.divTab04.form,function(p){});
            this.divTab04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab05.form
            obj = new Layout("default","",0,0,this.divTab05.form,function(p){});
            this.divTab05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLayout01.form
            obj = new Layout("default","",0,0,this.divLayout01.form,function(p){});
            this.divLayout01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLayout02.form
            obj = new Layout("default","",0,0,this.divLayout02.form,function(p){});
            this.divLayout02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLayout03.form
            obj = new Layout("default","",0,0,this.divLayout03.form,function(p){});
            this.divLayout03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLayout04.form
            obj = new Layout("default","",0,0,this.divLayout04.form,function(p){});
            this.divLayout04.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLayout05.form
            obj = new Layout("default","",0,0,this.divLayout05.form,function(p){});
            this.divLayout05.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLayout06.form
            obj = new Layout("default","",0,0,this.divLayout06.form,function(p){});
            this.divLayout06.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLayout07.form
            obj = new Layout("default","",0,0,this.divLayout07.form,function(p){});
            this.divLayout07.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab06.form
            obj = new Layout("default","",0,0,this.divTab06.form,function(p){});
            this.divTab06.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("UXBooster 화면생성기");

                p.divSearch.set_taborder("0");
                p.divSearch.set_cssclass("div_WF_searchBox01");
                p.divSearch.set_text("");
                p.divSearch.set_minwidth("1020");
                p.divSearch.set_maxwidth("");
                p.divSearch.move("10","0",null,"43","10",null);

                p.btnShowHide.set_taborder("2");
                p.btnShowHide.set_cssclass("btn_WF_fold01");
                p.btnShowHide.move("46.63%","42","70","10",null,null);

                p.Static09.set_taborder("3");
                p.Static09.set_text("Static03");
                p.Static09.set_background("red");
                p.Static09.set_visible("false");
                p.Static09.move("0","52",null,"10","0",null);

                p.Static23.set_taborder("4");
                p.Static23.set_text("Static23");
                p.Static23.set_background("blue");
                p.Static23.set_visible("false");
                p.Static23.move("1","-14","10","106",null,null);

                p.Static24.set_taborder("5");
                p.Static24.set_text("Static23");
                p.Static24.set_background("blue");
                p.Static24.set_visible("false");
                p.Static24.move("340","-14","10","106",null,null);

                p.Static25.set_taborder("6");
                p.Static25.set_text("Static23");
                p.Static25.set_background("blue");
                p.Static25.set_visible("false");
                p.Static25.move("679","-14","10","106",null,null);

                p.Static26.set_taborder("7");
                p.Static26.set_text("Static23");
                p.Static26.set_background("blue");
                p.Static26.set_visible("false");
                p.Static26.move("1018","-14","10","106",null,null);

                p.divDetail.set_taborder("1");
                p.divDetail.set_text("");
                p.divDetail.set_minwidth("1020");
                p.divDetail.set_maxwidth("");
                p.divDetail.move("0","62",null,null,"0","0");

                p.divTab01.set_taborder("8");
                p.divTab01.set_cssclass("dvi_WF_tabBox01");
                p.divTab01.set_text("divTab00");
                p.divTab01.move("340","93",null,null,"10","10");

                p.divTab02.set_taborder("9");
                p.divTab02.set_cssclass("dvi_WF_tabBox01");
                p.divTab02.set_text("divTab00");
                p.divTab02.move("340","663",null,null,"10","-561");

                p.divTab03.set_taborder("10");
                p.divTab03.set_cssclass("dvi_WF_tabBox01");
                p.divTab03.set_text("divTab00");
                p.divTab03.move("340","1223",null,null,"10","-1121");

                p.divTab04.set_taborder("11");
                p.divTab04.set_cssclass("dvi_WF_tabBox01");
                p.divTab04.set_text("divTab00");
                p.divTab04.move("340","1783",null,null,"10","-1681");

                p.divTab05.set_taborder("12");
                p.divTab05.set_cssclass("dvi_WF_tabBox01");
                p.divTab05.set_text("divTab00");
                p.divTab05.move("340","2343",null,null,"10","-2241");

                p.btnTab01.set_taborder("13");
                p.btnTab01.set_text("검색영역");
                p.btnTab01.set_cssclass("btn_WF_tab02");
                p.btnTab01.move("340","66","90","27",null,null);

                p.btnTab02.set_taborder("14");
                p.btnTab02.set_text("Grid1");
                p.btnTab02.set_cssclass("btn_WF_tab01");
                p.btnTab02.move("431","66","90","27",null,null);

                p.btnTab03.set_taborder("15");
                p.btnTab03.set_text("Grid2");
                p.btnTab03.set_cssclass("btn_WF_tab01");
                p.btnTab03.move("522","66","90","27",null,null);

                p.btnTab04.set_taborder("16");
                p.btnTab04.set_text("Grid3");
                p.btnTab04.set_cssclass("btn_WF_tab01");
                p.btnTab04.move("613","66","90","27",null,null);

                p.btnTab05.set_taborder("17");
                p.btnTab05.set_text("Detail");
                p.btnTab05.set_cssclass("btn_WF_tab01");
                p.btnTab05.move("704","66","90","27",null,null);

                p.divLayout01.set_taborder("18");
                p.divLayout01.set_cssclass("dvi_WF_tabBox01");
                p.divLayout01.set_text("divLayout00");
                p.divLayout01.set_visible("false");
                p.divLayout01.move("6","222","324","318",null,null);

                p.divLayout02.set_taborder("19");
                p.divLayout02.set_cssclass("dvi_WF_tabBox01");
                p.divLayout02.set_text("divLayout00");
                p.divLayout02.set_visible("false");
                p.divLayout02.move("6","542","324","318",null,null);

                p.divLayout03.set_taborder("20");
                p.divLayout03.set_cssclass("dvi_WF_tabBox01");
                p.divLayout03.set_text("divLayout00");
                p.divLayout03.set_visible("false");
                p.divLayout03.move("6","872","324","318",null,null);

                p.divLayout04.set_taborder("21");
                p.divLayout04.set_cssclass("dvi_WF_tabBox01");
                p.divLayout04.set_text("divLayout00");
                p.divLayout04.set_visible("false");
                p.divLayout04.move("6","1202","324","318",null,null);

                p.divLayout05.set_taborder("22");
                p.divLayout05.set_cssclass("dvi_WF_tabBox01");
                p.divLayout05.set_text("divLayout00");
                p.divLayout05.set_visible("false");
                p.divLayout05.move("6","1532","324","318",null,null);

                p.divLayout06.set_taborder("23");
                p.divLayout06.set_cssclass("dvi_WF_tabBox01");
                p.divLayout06.set_text("divLayout00");
                p.divLayout06.set_visible("false");
                p.divLayout06.move("6","1862","324","318",null,null);

                p.divLayout07.set_taborder("24");
                p.divLayout07.set_cssclass("dvi_WF_tabBox01");
                p.divLayout07.set_text("divLayout00");
                p.divLayout07.set_visible("false");
                p.divLayout07.move("6","2192","324","318",null,null);

                p.btnTab06.set_taborder("25");
                p.btnTab06.set_text("Tree");
                p.btnTab06.set_cssclass("btn_WF_tab01");
                p.btnTab06.move("795","66","90","27",null,null);

                p.divTab06.set_taborder("26");
                p.divTab06.set_cssclass("dvi_WF_tabBox01");
                p.divTab06.set_text("divTab00");
                p.divTab06.move("340","2903",null,null,"10","-2801");
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

                p.Static09.set_taborder("2");
                p.Static09.set_text("Static03");
                p.Static09.set_background("red");
                p.Static09.set_visible("false");
                p.Static09.move("0","52",null,"10","0",null);

                p.Static23.set_taborder("3");
                p.Static23.set_text("Static23");
                p.Static23.set_background("blue");
                p.Static23.set_visible("false");
                p.Static23.move("1","-14","10","106",null,null);

                p.Static24.set_taborder("4");
                p.Static24.set_text("Static23");
                p.Static24.set_background("blue");
                p.Static24.set_visible("false");
                p.Static24.move("340","-14","10","106",null,null);

                p.Static25.set_taborder("5");
                p.Static25.set_text("Static23");
                p.Static25.set_background("blue");
                p.Static25.set_visible("false");
                p.Static25.move("679","-14","10","106",null,null);

                p.Static26.set_taborder("6");
                p.Static26.set_text("Static23");
                p.Static26.set_background("blue");
                p.Static26.set_visible("false");
                p.Static26.move("1018","-14","10","106",null,null);

                p.divDetail.set_taborder("7");
                p.divDetail.set_text("");
                p.divDetail.move("0","62",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("AM030.xfdl", function() {
        /**
        *  화면 자동 생성기
        *
        *  @MenuPath    화면생성 > 화면생성기
        *  @FileNAME    AM030.xfdl
        *  @Creator     천우성
        *  @CreateDate  2020.08.30
        *  @Version     1.0
        *  @Desction    UXBooster 템플릿에 따른 자동 화면 생성기
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2020.08.30      천우성             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sGdsAdminYn   = UXBooster.gdsUserInfo.getColumn(0, "ADMIN_YN"); 	// gds _ 관리자권한 여부
        this.fv_sGdsProjectCd = UXBooster.av_sProjectCd;  		 // 글로변 변수_프로젝트코드

        this.fv_sProjectCd = "";// 권한 목록의 선택된 row 프로젝트코드
        this.fv_sRoleCd = "";	// 권한 목록의 선택된 row 권한코드
        this.fv_sRoleCd = "";	// 권한 목록의 선택된 row 메뉴코드

        this.fv_nRAllIndex;

        this.fv_sSelectRow = "";
        this.fv_sProjectCd = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * Form_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.take_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		// 초기화
                this.fnInit();
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

        }
        /**
         * fnSave : 저장 transaction (필수) -->공통 저장에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSave("ID");
         */
        this.fnSave = function(sTranId)
        {

        }
        /**
         * fnAddRow : 행 추가 함수 (필수)--> 공통 행추가에서 호출할 디폴트값 세팅 필요
         * @param  {String} sGridId 그리드 아이디
         * @param  {Number} nRow    addRow 리턴값(추가된 행 위치)
         * @example this.fnAddRow(sGrdId, nRow);
         */
        this.fnAddRow = function(sGrdId, nRow)
        {

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

        };

        /*********************************************************
         * 3 각 COMPONENT 별 EVENT 영역
          ********************************************************/

        /*
         * this.divSearch_cboTemplate_onitemchanged: 템플릿 변경시
         */
        this.divSearch_cboTemplate_onitemchanged = function(obj,e)
        {
        	this.fnSetTemplate();
        };

        /*
         * this.divLayout_btn_onclick: 레이아웃에 있는 버튼을 클릭시
         */
        this.divLayout_btn_onclick = function(obj,e)
        {
        	var objId 		= obj.name;
        	this.components[objId].click();
        };

        /*
         * this.btnTab_onclick: 탭 버튼을 클릭시
         */
        this.btnTab_onclick = function(obj,e)
        {
        	var sTemplate	= this.divSearch.form.cboTemplate.value;

        	if( this.components["divLayout" + sTemplate].form.btnTab01 != null && this.components["divLayout" + sTemplate].form.btnTab01 != "" ){
        		this.components["divLayout" + sTemplate].form.btnTab01.set_background( (obj.id == "btnTab01")?"#f4553b":"#959595");
        	}
        	if( this.components["divLayout" + sTemplate].form.btnTab02 != null && this.components["divLayout" + sTemplate].form.btnTab02 != "" ){
        		this.components["divLayout" + sTemplate].form.btnTab02.set_background( (obj.id == "btnTab02")?"#f4553b":"#959595");
        	}
        	if( this.components["divLayout" + sTemplate].form.btnTab03 != null && this.components["divLayout" + sTemplate].form.btnTab03 != "" ){
        		this.components["divLayout" + sTemplate].form.btnTab03.set_background( (obj.id == "btnTab03")?"#f4553b":"#959595");
        	}
        	if( this.components["divLayout" + sTemplate].form.btnTab04 != null && this.components["divLayout" + sTemplate].form.btnTab04 != "" ){
        		this.components["divLayout" + sTemplate].form.btnTab04.set_background( (obj.id == "btnTab04")?"#f4553b":"#959595");
        	}
        	if( this.components["divLayout" + sTemplate].form.btnTab05 != null && this.components["divLayout" + sTemplate].form.btnTab05 != "" ){
        		this.components["divLayout" + sTemplate].form.btnTab05.set_background( (obj.id == "btnTab05")?"#f4553b":"#959595");
        	}
        	if( this.components["divLayout" + sTemplate].form.btnTab06 != null && this.components["divLayout" + sTemplate].form.btnTab06 != "" ){
        		this.components["divLayout" + sTemplate].form.btnTab06.set_background( (obj.id == "btnTab06")?"#f4553b":"#959595");
        	}

        	// 검색조건 클릭시
        	var objDsList;
        	var nRow;
        	var bRow1 = false;
        	var bRow2 = false;
        	var bRow3 = false;
        	if( obj.name == "btnTab01" ){

        		if( sTemplate == "06" || sTemplate == "07" ){
        			objDsList = this.dsViewLayout5;
        		}else{
        			objDsList = this.dsViewLayout1;
        		}

        		if( objDsList != null && objDsList.rowcount > 0 ){
        			for( var i=0; i<objDsList.rowcount; i++ ){
        				if( objDsList.getColumn(i, "SEARCH_YN") != "" ){
        					nRow = this.dsSearchLayoutForView.addRow();
        					this.dsSearchLayoutForView.setColumn(nRow, "GUBUN"			, objDsList.getColumn(i, "SEARCH_YN"));
        					this.dsSearchLayoutForView.setColumn(nRow, "LABEL_ID"		, objDsList.getColumn(i, "COL_ID"));
        					this.dsSearchLayoutForView.setColumn(nRow, "LABEL_NAME"		, objDsList.getColumn(i, "COL_NAME"));
        					this.dsSearchLayoutForView.setColumn(nRow, "SEARCH_TYPE"	, "01");
        					this.dsSearchLayoutForView.setColumn(nRow, "CODE_YN"		, "0");
        					this.dsSearchLayoutForView.setColumn(nRow, "BIND_DATASET"	, "");
        					this.dsSearchLayoutForView.setColumn(nRow, "MAPPER_ID"		, "");

        					if( (objDsList.getColumn(i, "SEARCH_YN")).indexOf('1X') >=0 )			bRow1 = true;
        					else if( (objDsList.getColumn(i, "SEARCH_YN")).indexOf('2X') >=0 )		bRow2 = true;
        					else if( (objDsList.getColumn(i, "SEARCH_YN")).indexOf('3X') >=0 )		bRow3 - true;
        				}
        			}

        			this.divTab01.form.cboSearchLayer.set_value(bRow3?"3":(bRow2?"2":(bRow1?"1":"")));
        		}else{
        			this.divTab01.form.cboSearchLayer.set_value("1");
        		}

        		this.fnSetSearchLayer();
        	}
        };

        /*********************************************************
        * 4 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnInit : 초기화 함수
         * @example this.fnUserFunction();
         */
        this.fnInit = function()
        {
        	this.divSearch.form.cboTemplate.set_index(0);
        	this.divDetail.form.cboCrudYn.set_index(0);
        	this.divTab01.form.cboSearchLayer.set_index(0);

        	var objList = {"btnTab01":this.divTab01, "btnTab02":this.divTab02,
                               "btnTab03":this.divTab03, "btnTab04":this.divTab04,
                               "btnTab05":this.divTab05, "btnTab06":this.divTab06};
        	var sTabId = "tab01";
        	var objFirstLoad = this.btnTab01;
        	var sTabOnCss = "btn_WF_tab02";
        	var sTabOffCss = "btn_WF_tab01";

        	take.TabSetting(this, sTabId, objList, objFirstLoad, sTabOnCss, sTabOffCss);

        	// 초기 환경 세팅
            this.fnSetEnv();
        }

        /**
         * fnSetPrefixId : TypeDefinition_Services_form_frefixID 가져오기
         * @example this.fnSetPrefixId();
         */
        this.fnSetPrefixId = function()
        {
        	var sType, sPfix;
        	var nNum=1;
        	var objDs		= this.dsCboPrefix;
        	var nCnt 		= nexacro.getEnvironment().services.length;
        	var arrType 	= new Array();
        	var arrPrefixId = new Array();

        	objDs.setColumn(objDs.addRow(), "CODE", "");
        	objDs.setColumn(objDs.rowposition, "NAME", "- 선택 -");
        	// type=form 으로 등록된 prefixid 값 찾기
        	for (var i=1; i<nCnt; i++)
        	{
        		sType = nexacro.getEnvironment().services[i].type;
        		sPfix = nexacro.getEnvironment().services[i].prefixid;

        		if(take.nvl(sType, "") != "") arrType[i] = sType;
        		if(take.nvl(sPfix, "") != "") arrPrefixId[i] = sPfix;
        		if (arrType[i] == "form")
        		{
        			objDs.setColumn(objDs.addRow(), "CODE", arrPrefixId[i]);
        			objDs.setColumn(objDs.rowposition, "NAME", arrPrefixId[i]);
        			nNum++;
        		}
        	}

        	this.divDetail.form.cboPrefix.set_index(0);
        };

        /**
         * fnSetEnv : 초기 환경 세팅
         * @example this.fnSetEnv();
         */
        this.fnSetEnv = function ()
        {
        	this.dsInitInfo.clearData(); // DataSet 데이터 초기화
        	take.transaction(this, "Init", "SVC_LOC::srcmaker/init.do", "", "dsInitInfo=dsInitInfo", ""
        		, function(sId, nErrCd, sErrMsg)
        		{
        			// Prefix 세팅
        			this.fnSetPrefixId();
        			// 최초실행은 템플릿 첫번째
        			this.fnSetTemplate();

        			//this.divDetail.form.edtSrcPath.set_value(this.dsInitInfo.getColumn(0, "SRC_PATH"));
        			//this.divDetail.form.edtGenPath.set_value(this.dsInitInfo.getColumn(0, "GEN_PATH"));
        		});
        };

        /**
         * fnSetTemplate : 템플릿에 따른 화면 구성
         * @example this.fnSetTemplate();
         */
        this.fnSetTemplate = function()
        {
        	var sTemplate	= this.divSearch.form.cboTemplate.value;

        	this.divDetail.form.staTemplateT.set_text("템플릿" + sTemplate);

        	// dataset clear
        	this.dsSearchLayout.clearData();
        	this.dsViewLayout1.clearData();
        	this.dsViewLayout2.clearData();
        	this.dsViewLayout3.clearData();
        	this.dsViewLayout4.clearData();

        	// Layout Setting
        	for(var i=1; i<=7; i++)
        	{
        		this.components["divLayout0" + i].set_visible(false);
                this.components["divLayout0" + i].set_enable(false);
        	}
        	this.components["divLayout" + sTemplate].set_visible(true);
            this.components["divLayout" + sTemplate].set_enable(true);
        	this.components["divLayout" + sTemplate].set_top(252);

        	// Tab Init Setting
        	//this.btnTab01.set_visible(true);	this.divTab01.set_visible(true);
        	//this.btnTab01.click();
        	this.components["divLayout" + sTemplate].form.btnTab01.click();
        	for(var i=2; i <=6; i++)
        	{
        		this.components["btnTab0" + i].set_visible(false);
        		this.components["divTab0" + i].set_visible(false);

        		if( i != 5 ){
        			this.components["divTab0" + i].form.edtGridTitle.set_value("");
        		}
        		this.components["divTab0" + i].form.edtSqlMapper.set_value("");
        	}
        	this.components["divTab05"].form.edtDetailTitle.set_value("");

        	switch( sTemplate )
            {
                case "01" :		// 템플릿01
        			this.btnTab02.set_visible(true);
        			this.btnTab02.set_left(431);

        			this.divTab02.form.edtGridId.set_value("grdList");
        			this.divTab02.form.edtDatasetNm.set_value("dsList");
        			this.divTab02.form.edtEx.set_value("예시) Sample.smpForm01JoinSelect");

        			this.btnTab02.click();

                    break;

        		case "02" :		// 템플릿02
        			this.btnTab02.set_visible(true);
        			this.btnTab03.set_visible(true);

        			this.btnTab02.set_left(431);
        			this.btnTab03.set_left(522);

        			this.divTab02.form.edtGridId.set_value("grdList");
        			this.divTab02.form.edtDatasetNm.set_value("dsList");
        			this.divTab02.form.edtEx.set_value("예시) Sample.smpForm02DeptSelect");

        			this.divTab03.form.edtGridId.set_value("grdDetailList");
        			this.divTab03.form.edtDatasetNm.set_value("dsDetailList");
        			this.divTab03.form.edtEx.set_value("예시) Sample.smpForm02Select");

        			this.btnTab02.click();

                    break;

                case "03" :		// 템플릿03
        			this.btnTab02.set_visible(true);
        			this.btnTab03.set_visible(true);
        			this.btnTab04.set_visible(true);

        			this.btnTab02.set_left(431);
        			this.btnTab03.set_left(522);
        			this.btnTab04.set_left(613);

        			this.divTab02.form.edtGridId.set_value("grdList");
        			this.divTab02.form.edtDatasetNm.set_value("dsList");
        			this.divTab02.form.edtEx.set_value("예시) Sample.smpForm03DeptSelect");

        			this.divTab03.form.edtGridId.set_value("grdDetail");
        			this.divTab03.form.edtDatasetNm.set_value("dsDetail");
        			this.divTab03.form.edtEx.set_value("예시) Sample.smpForm03Select");

        			this.divTab04.form.edtGridId.set_value("grdSub");
        			this.divTab04.form.edtDatasetNm.set_value("dsSub");
        			this.divTab04.form.edtEx.set_value("예시) Sample.smpForm03SubSelect");

        			this.btnTab02.click();

                    break;

                case "04" :		// 템플릿04
        			this.btnTab02.set_visible(true);
        			this.btnTab05.set_visible(true);

        			this.btnTab02.set_left(431);
        			this.btnTab05.set_left(522);

        			this.divTab02.form.edtGridId.set_value("grdList");
        			this.divTab02.form.edtDatasetNm.set_value("dsList");
        			this.divTab02.form.edtEx.set_value("예시) Sample.smpForm04UserListSelect");

        			this.divTab05.form.edtDatasetNm.set_value("dsDetail");
        			this.divTab05.form.edtEx.set_value("예시) Sample.smpForm04Select");

        			this.btnTab02.click();

                    break;

                case "05" :		// 템플릿05
        			this.btnTab02.set_visible(true);
        			this.btnTab03.set_visible(true);
        			this.btnTab05.set_visible(true);

        			this.btnTab02.set_left(431);
        			this.btnTab03.set_left(522);
        			this.btnTab05.set_left(613);

        			this.divTab02.form.edtGridId.set_value("grdList");
        			this.divTab02.form.edtDatasetNm.set_value("dsList");
        			this.divTab02.form.edtEx.set_value("예시) Sample.smpForm05DeptSelect");

        			this.divTab03.form.edtGridId.set_value("grdDetailList");
        			this.divTab03.form.edtDatasetNm.set_value("dsDetailList");
        			this.divTab03.form.edtEx.set_value("예시) Sample.smpForm05Select");

        			this.divTab05.form.edtDatasetNm.set_value("dsSub");
        			this.divTab05.form.edtEx.set_value("예시) Sample.smpForm05Select");

        			this.btnTab02.click();

                    break;

        		case "06" :		// 템플릿06
        			this.btnTab02.set_visible(true);
        			this.btnTab06.set_visible(true);

        			this.btnTab06.set_left(431);
        			this.btnTab02.set_left(522);

        			this.divTab06.form.edtGridId.set_value("grdTree");
        			this.divTab06.form.edtDatasetNm.set_value("dsTree");
        			this.divTab06.form.edtEx.set_value("예시) Sample.smpForm06DeptSelect");

        			this.divTab02.form.edtGridId.set_value("grdDetail");
        			this.divTab02.form.edtDatasetNm.set_value("dsDetail");
        			this.divTab02.form.edtEx.set_value("예시) Sample.smpForm06Select");

        			this.btnTab06.click();

                    break;

        		case "07" :		// 템플릿07
        			this.btnTab05.set_visible(true);
        			this.btnTab06.set_visible(true);

        			this.btnTab06.set_left(431);
        			this.btnTab05.set_left(522);

        			this.divTab06.form.edtGridId.set_value("grdTree");
        			this.divTab06.form.edtDatasetNm.set_value("dsTree");
        			this.divTab06.form.edtEx.set_value("예시) Sample.smpForm07UserListSelect");

        			this.divTab05.form.edtDatasetNm.set_value("dsDetail");
        			this.divTab05.form.edtEx.set_value("예시) Sample.smpForm07Select");

        			this.btnTab06.click();

                    break;

                default :
                    break;
            }

        	// 검색 Layout 1단으로 세팅
        	this.fnSetSearchLayer();
        }

        /**
         * fnSetSearchLayer : 템플릿에 따른 화면 구성
         * @example this.fnSetSearchLayer();
         */
        this.fnSetSearchLayer = function()
        {
        	var sSearchLayer	= this.divTab01.form.cboSearchLayer.value;
        	this.dsSearchLayout.clearData();
        	var nRow, nFindRow;

        	var x = 0;
        	var sGubun;
        	for(var i=1; i<=parseInt(sSearchLayer)*3; i++)
        	{
        		nRow = this.dsSearchLayout.addRow();
        		sGubun = Math.ceil(i/3) + "X" + (i-(x*3));

        		if( this.dsSearchLayoutForView.rowcount > 0 ){
        			nFindRow = this.dsSearchLayoutForView.findRowExpr( "GUBUN == '" + sGubun + "'" );

        			this.dsSearchLayout.setColumn(nRow, "GUBUN"			, sGubun );
        			this.dsSearchLayout.setColumn(nRow, "CHK"			, (nFindRow>=0?"1":"0"));
        			this.dsSearchLayout.setColumn(nRow, "LABEL_ID"		, (nFindRow>=0?this.dsSearchLayoutForView.getColumn(nFindRow, "LABEL_ID"):""));
        			this.dsSearchLayout.setColumn(nRow, "LABEL_NAME"	, (nFindRow>=0?this.dsSearchLayoutForView.getColumn(nFindRow, "LABEL_NAME"):""));
        			this.dsSearchLayout.setColumn(nRow, "REQ_YN"		, (nFindRow>=0?this.dsSearchLayoutForView.getColumn(nFindRow, "REQ_YN"):""));
        			this.dsSearchLayout.setColumn(nRow, "SEARCH_TYPE"	, (nFindRow>=0?this.dsSearchLayoutForView.getColumn(nFindRow, "SEARCH_TYPE"):""));
        			this.dsSearchLayout.setColumn(nRow, "CODE_YN"		, (nFindRow>=0?this.dsSearchLayoutForView.getColumn(nFindRow, "CODE_YN"):""));
        			this.dsSearchLayout.setColumn(nRow, "BIND_DATASET"	, (nFindRow>=0?this.dsSearchLayoutForView.getColumn(nFindRow, "BIND_DATASET"):""));
        			this.dsSearchLayout.setColumn(nRow, "REMARK"		, "");
        		}else{
        			this.dsSearchLayout.setColumn(nRow, "GUBUN"			, sGubun );
        			this.dsSearchLayout.setColumn(nRow, "CHK"			, "1");
        			this.dsSearchLayout.setColumn(nRow, "LABEL_ID"		, "");
        			this.dsSearchLayout.setColumn(nRow, "LABEL_NAME"	, "");
        			this.dsSearchLayout.setColumn(nRow, "REQ_YN"		, "");
        			this.dsSearchLayout.setColumn(nRow, "SEARCH_TYPE"	, "01");
        			this.dsSearchLayout.setColumn(nRow, "CODE_YN"		, "0");
        			this.dsSearchLayout.setColumn(nRow, "BIND_DATASET"	, "");
        			this.dsSearchLayout.setColumn(nRow, "REMARK"		, "");
        		}

        		if( i == 3 || i == 6 || i == 9 )
        		{
        			x++;
        		}
        	}
        	this.dsSearchLayoutForView.clearData();

        	this.dsSearchLayout.set_rowposition(0);
        }

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
                case "SourceMaker" :		// 화면생성
        			take.alert(this, "Info", "화면생성이 완료되었습니다.\nCRUD의 경우 Controller, Service Java가 생성되니 서버를 Re-Start한후 확인하세요.", "");
                    break;
                default :
                    break;
            }
        };

        this.divTab01_cboSearchLayer_onitemchanged = function(obj,e)
        {
        	this.fnSetSearchLayer();
        };

        this.divTab02_btnExec_onclick = function(obj,e)
        {
        	this.dsViewLayout1.clearData();
        	var sTemplate= this.divSearch.form.cboTemplate.value;
        	var sCrudYn	 = this.divDetail.form.cboCrudYn.value;
        	var sQueryId = this.divTab02.form.edtSqlMapper.value;

        	if( sTemplate == "02" || sTemplate == "03" || sTemplate == "04" || sTemplate == "05" ){
        		sCrudYn = "N";
        	}
        	take.transaction(this, "Exec1", "SVC_LOC::srcmaker/load.do", "", "dsViewLayout1=dsViewLayout", "sCrudYn='"+sCrudYn+"' sQueryId='"+sQueryId+"'", "fnCallback");
        };

        this.divTab03_btnExec_onclick = function(obj,e)
        {
        	this.dsViewLayout2.clearData();
        	var sTemplate= this.divSearch.form.cboTemplate.value;
        	var sCrudYn	 = this.divDetail.form.cboCrudYn.value;
        	var sQueryId = this.divTab03.form.edtSqlMapper.value;

        	if( sTemplate == "03" || sTemplate == "05" ){
        		sCrudYn = "N";
        	}
        	take.transaction(this, "Exec2", "SVC_LOC::srcmaker/load.do", "", "dsViewLayout2=dsViewLayout", "sCrudYn='"+sCrudYn+"' sQueryId='"+sQueryId+"'", "fnCallback");
        };

        this.divTab04_btnExec_onclick = function(obj,e)
        {
        	this.dsViewLayout3.clearData();
        	var sCrudYn	 = this.divDetail.form.cboCrudYn.value;
        	var sQueryId = this.divTab04.form.edtSqlMapper.value;
        	take.transaction(this, "Exec3", "SVC_LOC::srcmaker/load.do", "", "dsViewLayout3=dsViewLayout", "sCrudYn='"+sCrudYn+"' sQueryId='"+sQueryId+"'", "fnCallback");
        };

        this.divTab05_btnExec_onclick = function(obj,e)
        {
        	this.dsViewLayout4.clearData();
        	var sTemplate= this.divSearch.form.cboTemplate.value;
        	var sCrudYn	 = this.divDetail.form.cboCrudYn.value;
        	var sQueryId = this.divTab05.form.edtSqlMapper.value;

        	//if( sTemplate == "03" ){
        	//	sCrudYn = "N";
        	//}
        	take.transaction(this, "Exec4", "SVC_LOC::srcmaker/load.do", "", "dsViewLayout4=dsViewLayout", "sCrudYn='"+sCrudYn+"' sQueryId='"+sQueryId+"'", "fnCallback");
        };

        this.divTab06_btnExec_onclick = function(obj,e)
        {
        	this.dsViewLayout5.clearData();
        	var sTemplate= this.divSearch.form.cboTemplate.value;
        	var sCrudYn	 = this.divDetail.form.cboCrudYn.value;
        	var sQueryId = this.divTab06.form.edtSqlMapper.value;

        	//if( sTemplate == "03" ){
        	//	sCrudYn = "N";
        	//}
        	take.transaction(this, "Exec5", "SVC_LOC::srcmaker/load.do", "", "dsViewLayout5=dsViewLayout", "sCrudYn='"+sCrudYn+"' sQueryId='"+sQueryId+"'", "fnCallback");
        };

        this.divDetail_btnSave_onclick = function(obj,e)
        {
        	this.dsBaseInfo.clearData();
        	var nRow	= this.dsBaseInfo.addRow();
        	var objDs	= this.dsBaseInfo;

        	var sTemplate		= this.divSearch.form.cboTemplate.value;
        	var sPrefix 		= this.divDetail.form.cboPrefix.value;
        	var sFormId 		= take.nvl(this.divDetail.form.edtFormId.value, "");
        	var sFormNm 		= take.nvl(this.divDetail.form.edtFormNm.value, "");
        	var sCrudYn			= this.divDetail.form.cboCrudYn.value;
        	var sFormLayout 	= this.divSearch.form.cboTemplate.value;
        	var sSearchLayout 	= this.divTab01.form.cboSearchLayer.value;
        	var sSourcePath 	= this.dsInitInfo.getColumn(0, "SRC_PATH");
        	var sGeneratePath 	= this.dsInitInfo.getColumn(0, "GEN_PATH");

        	//validation check
        	if( sPrefix == "" ){
        		this.alert("Prefix를 선택해 주세요.");
        		return;
        	}
        	if( sFormId == "" ){
        		this.alert("화면ID를 선택해 주세요.");
        		return;
        	}
        	if( sFormNm == "" ){
        		this.alert("화면명을 선택해 주세요.");
        		return;
        	}

        	var sTitle1, sTitle2, sTitle3;
        	var sViewId1, sViewId2, sViewId3;
        	var sViewDataset1, sViewDataset2, sViewDataset3;
        	var sViewNamespace1, sViewNamespace2, sViewNamespace3;

        	// dsDataset 세팅
        	var nDsRow = 0;
        	var sInDataset = "";
        	this.dsDataset.clearData();

        	// 1번째 그리드: sTemplate : 01 ~ 07
        	if( sTemplate == "01" || sTemplate == "02" || sTemplate == "03" || sTemplate == "04" || sTemplate == "05" ){
        		sTitle1			= take.nvl(this.divTab02.form.edtGridTitle.value, "");
        		sViewId1		= take.nvl(this.divTab02.form.edtGridId.value, "");
        		sViewDataset1 	= take.nvl(this.divTab02.form.edtDatasetNm.value, "");
        		sViewNamespace1 = take.nvl(this.divTab02.form.edtSqlMapper.value, "");

        		nDsRow = this.dsDataset.addRow();
        		this.dsDataset.setColumn(nDsRow, "DATASET_NAME"	, sViewDataset1);
        		this.dsDataset.setColumn(nDsRow, "LAYOUT_TYPE"	, "Grid");
        		this.dsDataset.setColumn(nDsRow, "QUERY_ID"		, sViewNamespace1);

        		sInDataset += " dsViewLayout1=dsViewLayout1";

        	}else if( sTemplate == "06" || sTemplate == "07" ){
        		sTitle1			= take.nvl(this.divTab06.form.edtGridTitle.value, "");
        		sViewId1		= take.nvl(this.divTab06.form.edtGridId.value, "");
        		sViewDataset1 	= take.nvl(this.divTab06.form.edtDatasetNm.value, "");
        		sViewNamespace1 = take.nvl(this.divTab06.form.edtSqlMapper.value, "");

        		nDsRow = this.dsDataset.addRow();
        		this.dsDataset.setColumn(nDsRow, "DATASET_NAME"	, sViewDataset1);
        		this.dsDataset.setColumn(nDsRow, "LAYOUT_TYPE"	, "Tree");
        		this.dsDataset.setColumn(nDsRow, "QUERY_ID"		, sViewNamespace1);

        		sInDataset += " dsViewLayout1=dsViewLayout5";

        	}

        	// 2번째 그리드: sTemplate : 02, 03, 05, 06
        	if( sTemplate == "02" || sTemplate == "03" || sTemplate == "05" ){
        		sTitle2			= take.nvl(this.divTab03.form.edtGridTitle.value, "");
        		sViewId2		= take.nvl(this.divTab03.form.edtGridId.value, "");
        		sViewDataset2 	= take.nvl(this.divTab03.form.edtDatasetNm.value, "");
        		sViewNamespace2 = take.nvl(this.divTab03.form.edtSqlMapper.value, "");

        		nDsRow = this.dsDataset.addRow();
        		this.dsDataset.setColumn(nDsRow, "DATASET_NAME"	, sViewDataset2);
        		this.dsDataset.setColumn(nDsRow, "LAYOUT_TYPE"	, "Grid");
        		this.dsDataset.setColumn(nDsRow, "QUERY_ID"		, sViewNamespace2);

        		sInDataset += " dsViewLayout2=dsViewLayout2";
        	}else if( sTemplate == "06" ){
        		sTitle2			= take.nvl(this.divTab02.form.edtGridTitle.value, "");
        		sViewId2		= take.nvl(this.divTab02.form.edtGridId.value, "");
        		sViewDataset2 	= take.nvl(this.divTab02.form.edtDatasetNm.value, "");
        		sViewNamespace2 = take.nvl(this.divTab02.form.edtSqlMapper.value, "");

        		nDsRow = this.dsDataset.addRow();
        		this.dsDataset.setColumn(nDsRow, "DATASET_NAME"	, sViewDataset2);
        		this.dsDataset.setColumn(nDsRow, "LAYOUT_TYPE"	, "Grid");
        		this.dsDataset.setColumn(nDsRow, "QUERY_ID"		, sViewNamespace2);

        		sInDataset += " dsViewLayout2=dsViewLayout1";
        	}else if( sTemplate == "04" || sTemplate == "07" ){	// 2번째 디테일뷰 : 04, 07
        		sTitle2			= take.nvl(this.divTab05.form.edtDetailTitle.value, "");
        		sViewId2		= "";
        		sViewDataset2 	= take.nvl(this.divTab05.form.edtDatasetNm.value, "");
        		sViewNamespace2 = take.nvl(this.divTab05.form.edtSqlMapper.value, "");

        		nDsRow = this.dsDataset.addRow();
        		this.dsDataset.setColumn(nDsRow, "DATASET_NAME"	, sViewDataset2);
        		this.dsDataset.setColumn(nDsRow, "LAYOUT_TYPE"	, "Detail");
        		this.dsDataset.setColumn(nDsRow, "QUERY_ID"		, sViewNamespace2);

        		sInDataset += " dsViewLayout2=dsViewLayout4";
        	}

        	// 3번째 그리드 : sTemplate : 03
        	if( sTemplate == "03" ){
        		sTitle3			= take.nvl(this.divTab04.form.edtGridTitle.value, "");
        		sViewId3		= take.nvl(this.divTab04.form.edtGridId.value, "");
        		sViewDataset3 	= take.nvl(this.divTab04.form.edtDatasetNm.value, "");
        		sViewNamespace3 = take.nvl(this.divTab04.form.edtSqlMapper.value, "");

        		nDsRow = this.dsDataset.addRow();
        		this.dsDataset.setColumn(nDsRow, "DATASET_NAME"	, sViewDataset3);
        		this.dsDataset.setColumn(nDsRow, "LAYOUT_TYPE"	, "Grid");
        		this.dsDataset.setColumn(nDsRow, "QUERY_ID"		, sViewNamespace3);

        		sInDataset += " dsViewLayout3=dsViewLayout3";
        	}else if( sTemplate == "05" ){	// 3번째 디테일뷰 : 05
        		sTitle3			= take.nvl(this.divTab05.form.edtDetailTitle.value, "");
        		sViewId3		= "";
        		sViewDataset3 	= take.nvl(this.divTab05.form.edtDatasetNm.value, "");
        		sViewNamespace3 = take.nvl(this.divTab05.form.edtSqlMapper.value, "");

        		nDsRow = this.dsDataset.addRow();
        		this.dsDataset.setColumn(nDsRow, "DATASET_NAME"	, sViewDataset3);
        		this.dsDataset.setColumn(nDsRow, "LAYOUT_TYPE"	, "Detail");
        		this.dsDataset.setColumn(nDsRow, "QUERY_ID"		, sViewNamespace3);

        		sInDataset += " dsViewLayout3=dsViewLayout4";
        	}

        	objDs.setColumn(nRow, "TEMPLATE"		, sTemplate);
        	objDs.setColumn(nRow, "PREFIX"			, sPrefix);
        	objDs.setColumn(nRow, "FORM_ID"			, sFormId);
        	objDs.setColumn(nRow, "FORM_NAME"		, sFormNm);
        	objDs.setColumn(nRow, "FORM_LAYOUT"		, sFormLayout);
        	objDs.setColumn(nRow, "CRUD_YN"			, sCrudYn);
        	objDs.setColumn(nRow, "SEARCH_LAYOUT"	, sSearchLayout);
        	objDs.setColumn(nRow, "SOURCE_PATH"		, sSourcePath);
        	objDs.setColumn(nRow, "GENERATE_PATH"	, sGeneratePath);

        	objDs.setColumn(nRow, "VIEW_TITLE1"		, sTitle1);
        	objDs.setColumn(nRow, "VIEW_TITLE2"		, sTitle2);
        	objDs.setColumn(nRow, "VIEW_TITLE3"		, sTitle3);
        	//objDs.setColumn(nRow, "VIEW_TITLE4"		, "");

        	objDs.setColumn(nRow, "VIEW_GRID1"		, sViewId1);
        	objDs.setColumn(nRow, "VIEW_GRID2"		, sViewId2);
        	objDs.setColumn(nRow, "VIEW_GRID3"		, sViewId3);
        	//objDs.setColumn(nRow, "VIEW_GRID4"		, "");

        	objDs.setColumn(nRow, "VIEW_LAYOUT1"	, sViewDataset1);
        	objDs.setColumn(nRow, "VIEW_LAYOUT2"	, sViewDataset2);
        	objDs.setColumn(nRow, "VIEW_LAYOUT3"	, sViewDataset3);
        	//objDs.setColumn(nRow, "VIEW_LAYOUT4"	, sViewDataset4);

        	objDs.setColumn(nRow, "VIEW_NAMESPACE1"	, sViewNamespace1);
        	objDs.setColumn(nRow, "VIEW_NAMESPACE2"	, sViewNamespace2);
        	objDs.setColumn(nRow, "VIEW_NAMESPACE3"	, sViewNamespace3);
        	//objDs.setColumn(nRow, "VIEW_NAMESPACE4"	, sViewNamespace4);

        	trace(this.dsSearchLayout.saveXML());

        	if( this.dsSearchLayout.rowcount == 0 ){
        		this.alert("검색영역을 설정해 주세요.");
        		return;
        	}

        	take.transaction(this, "SourceMaker"
        						, "SVC_LOC::srcmaker/save.do"
        						, "dsBaseInfo=dsBaseInfo dsDataset=dsDataset dsSearchLayout=dsSearchLayout" + sInDataset
        						, ""
        						, ""
        						, "fnCallback");
        };

        this.dsViewLayout_cancolumnchange = function(obj,e)
        {
        	if( e.columnid == "SEARCH_YN" ){
        		if( e.newvalue != ""){
        			for(var i=0; i<obj.rowcount; i++){
        				if( obj.getColumn(i, "SEARCH_YN") == e.newvalue ){
        					this.alert("이미 사용되고 있는 컬럼이 있습니다.");
        					return false;
        				}
        			}
        		}
        		return true;
        	}
        };

        this.dsSearchLayout_oncolumnchanged = function(obj,e)
        {
        	if( e.columnid == "SEARCH_TYPE" ){
        		if( e.newvalue == "02" ){
        			// convertId
        			//Col ID를 Camel방식으로 변경
        			var convertColId = "";
        			var sViewColId		= obj.getColumn(e.row, "LABEL_ID");
        			var arrSplitStr = sViewColId.split("_");

        			for (var xx = 0; xx < arrSplitStr.length; xx++) {
        				var splitStr = arrSplitStr[xx];
        				splitStr = splitStr.substring(0,1).toUpperCase() + splitStr.substring(1).toLowerCase();

        				convertColId += splitStr;
        			}

        			obj.setColumn(e.row, "CODE_YN"		, "1");
        			obj.setColumn(e.row, "BIND_DATASET"	, "ds" + convertColId);
        		}
        	}
        };

        this.objRtn = null;
        this.divTab_btnFind_onclick = function(obj,e)
        {
        	var divTabIdx = obj.name.replace("btnFind", "");
        	this.objRtn = null;
        	// 파라메터 팝업 오픈 AM030P01
        	take.openPopup(this, "AM030P01", "biz::asm/AM030P01.xfdl", "", "",
        		function(sId, sRtn) {
        			if(!take.isEmpty(this.objRtn)){
        				this.components["divTab" + divTabIdx].form.edtSqlMapper.set_value(this.objRtn.QUERY_NM);
        			}
        		}
        	);
        };

        this.divTab_grid_oncellclick = function(obj,e)
        {
        	var idx = 0;
        	var objDs = obj.getBindDataset();

        	if( obj.binddataset == "dsSearchLayout" ){
        		idx = 9;
        	}else if( obj.binddataset == "dsViewLayout1" ){
        		idx = 14;
        	}else if( obj.binddataset == "dsViewLayout2" ){
        		idx = 13;
        	}else if( obj.binddataset == "dsViewLayout3" ){
        		idx = 12;
        	}else if( obj.binddataset == "dsViewLayout4" ){
        		idx = 10;
        	}
        	//
        	if( e.col == idx ){
        		this.objRtn = null;
        		if( objDs.getColumn(e.row, "CODE_YN") == "0" ){
        			// 쿼리조회 팝업
        			take.openPopup(this, "AM030P01", "biz::asm/AM030P01.xfdl", "", "",
        				function(sId, sRtn) {
        					if(!take.isEmpty(this.objRtn)){
        						objDs.setColumn(e.row, "MAPPER_ID", this.objRtn.QUERY_NM);
        					}
        				}
        			);
        		}else{
        			// 코드조회 팝업
        			take.openPopup(this, "AM030P02", "biz::asm/AM030P02.xfdl", "", "",
        				function(sId, sRtn) {
        					if(!take.isEmpty(this.objRtn)){
        						objDs.setColumn(e.row, "MAPPER_ID", this.objRtn.CODE_ID);
        					}
        				}
        			);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.take_onload,this);
            this.divSearch.form.cboTemplate.addEventHandler("onitemchanged",this.divSearch_cboTemplate_onitemchanged,this);
            this.divDetail.form.cboPrefix.addEventHandler("onitemchanged",this.divDetail_cboSearchLayer_onitemchanged,this);
            this.divDetail.form.cboCrudYn.addEventHandler("onitemchanged",this.divDetail_cboSearchLayer_onitemchanged,this);
            this.divDetail.form.btnSave.addEventHandler("onclick",this.divDetail_btnSave_onclick,this);
            this.divTab01.form.grdSearch.addEventHandler("oncellclick",this.divTab_grid_oncellclick,this);
            this.divTab01.form.cboSearchLayer.addEventHandler("onitemchanged",this.divTab01_cboSearchLayer_onitemchanged,this);
            this.divTab02.form.grdGrid.addEventHandler("oncellclick",this.divTab_grid_oncellclick,this);
            this.divTab02.form.btnExec.addEventHandler("onclick",this.divTab02_btnExec_onclick,this);
            this.divTab02.form.btnFind02.addEventHandler("onclick",this.divTab_btnFind_onclick,this);
            this.divTab03.form.grdGrid.addEventHandler("oncellclick",this.divTab_grid_oncellclick,this);
            this.divTab03.form.btnExec.addEventHandler("onclick",this.divTab03_btnExec_onclick,this);
            this.divTab03.form.btnFind03.addEventHandler("onclick",this.divTab_btnFind_onclick,this);
            this.divTab04.form.grdGrid.addEventHandler("oncellclick",this.divTab_grid_oncellclick,this);
            this.divTab04.form.btnExec.addEventHandler("onclick",this.divTab04_btnExec_onclick,this);
            this.divTab04.form.btnFind04.addEventHandler("onclick",this.divTab_btnFind_onclick,this);
            this.divTab05.form.grdGrid.addEventHandler("oncellclick",this.divTab_grid_oncellclick,this);
            this.divTab05.form.btnExec.addEventHandler("onclick",this.divTab05_btnExec_onclick,this);
            this.divTab05.form.btnFind05.addEventHandler("onclick",this.divTab_btnFind_onclick,this);
            this.btnTab01.addEventHandler("onclick",this.btnTab_onclick,this);
            this.btnTab02.addEventHandler("onclick",this.btnTab_onclick,this);
            this.btnTab03.addEventHandler("onclick",this.btnTab_onclick,this);
            this.btnTab04.addEventHandler("onclick",this.btnTab_onclick,this);
            this.btnTab05.addEventHandler("onclick",this.btnTab_onclick,this);
            this.divLayout01.form.btnTab01.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout01.form.btnTab02.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout02.form.btnTab01.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout02.form.btnTab03.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout02.form.btnTab02.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout03.form.btnTab01.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout03.form.btnTab03.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout03.form.btnTab02.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout03.form.btnTab04.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout04.form.btnTab01.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout04.form.btnTab05.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout04.form.btnTab02.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout05.form.btnTab01.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout05.form.btnTab03.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout05.form.btnTab02.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout05.form.btnTab05.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout06.form.btnTab01.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout06.form.btnTab02.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout06.form.btnTab06.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout07.form.btnTab01.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout07.form.btnTab05.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.divLayout07.form.btnTab06.addEventHandler("onclick",this.divLayout_btn_onclick,this);
            this.btnTab06.addEventHandler("onclick",this.btnTab_onclick,this);
            this.divTab06.form.btnExec.addEventHandler("onclick",this.divTab06_btnExec_onclick,this);
            this.divTab06.form.btnFind06.addEventHandler("onclick",this.divTab_btnFind_onclick,this);
            this.dsSearchLayout.addEventHandler("oncolumnchanged",this.dsSearchLayout_oncolumnchanged,this);
            this.dsViewLayout1.addEventHandler("cancolumnchange",this.dsViewLayout_cancolumnchange,this);
        };
        this.loadIncludeScript("AM030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
