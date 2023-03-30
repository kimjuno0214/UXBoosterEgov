(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("srcMaker");
            this.set_titletext("UXBooster Source Maker");
            this.set_cssclass("fm_work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataset", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DATASET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QUERY_ID\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchLayout", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LABEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewLayout", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ALIGN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EDIT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BIND_DATASET\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC2\" type=\"STRING\" size=\"256\"/><Column id=\"ETC3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">Y</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComponentType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">Edit</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">Combo</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">Checkbox</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDisplayType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">normal</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">none</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">buttoncontrol</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">calendarcontrol</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">checkboxcontrol</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">combocontrol</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">combotext</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">currency</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">date</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">decoratetext</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\">editcontrol</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"NAME\">imagecontrol</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"NAME\">mask</Col></Row><Row><Col id=\"CODE\">14</Col><Col id=\"NAME\">maskeditcontrol</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"NAME\">number</Col></Row><Row><Col id=\"CODE\">16</Col><Col id=\"NAME\">progressbarcontrol</Col></Row><Row><Col id=\"CODE\">17</Col><Col id=\"NAME\">text</Col></Row><Row><Col id=\"CODE\">18</Col><Col id=\"NAME\">textareacontrol</Col></Row><Row><Col id=\"CODE\">19</Col><Col id=\"NAME\">treeitemcontrol</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEditType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"NAME\">normal</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"NAME\">none</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"NAME\">button</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"NAME\">checkbox</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"NAME\">combo</Col></Row><Row><Col id=\"CODE\">06</Col><Col id=\"NAME\">date</Col></Row><Row><Col id=\"CODE\">07</Col><Col id=\"NAME\">mask</Col></Row><Row><Col id=\"CODE\">08</Col><Col id=\"NAME\">readonly</Col></Row><Row><Col id=\"CODE\">09</Col><Col id=\"NAME\">text</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"NAME\">textarea</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"NAME\"> tree</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboSearchLayout", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">-선택-</Col></Row><Row><Col id=\"NAME\">1줄-1칸</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"NAME\">1줄-2칸</Col></Row><Row><Col id=\"NAME\">1줄-3칸</Col><Col id=\"CODE\">3</Col></Row><Row><Col id=\"NAME\">2줄-(상2, 중3)</Col><Col id=\"CODE\">5</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"NAME\">2줄-(상3, 중3)</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"NAME\">3줄-(상2, 중3, 하3)</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"NAME\">3줄-(상3, 중3, 하3)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_LAYOUT\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_LAYOUT\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"GENERATE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT2\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT3\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT4\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_LAYOUT5\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE1\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE2\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE3\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE4\" type=\"STRING\" size=\"256\"/><Column id=\"VIEW_NAMESPACE5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboAlign", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">left</Col><Col id=\"NAME\">Left</Col></Row><Row><Col id=\"CODE\">center</Col><Col id=\"NAME\">Center</Col></Row><Row><Col id=\"CODE\">right</Col><Col id=\"NAME\">Right</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInitInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SRC_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"GEN_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileSrcPath", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileGenPath", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDetail","1","36",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divDetail");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","6",null,"34","0%",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_td01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staFormId","0","6","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("화면ID");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","39",null,"34","0%",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_td01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","72",null,"34","0.00%",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_td01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLayout","0","71","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("화면 Layout");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdSub","0","151",null,"100","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsDataset");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"170\"/><Column size=\"55\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Dataset Name\"/><Cell col=\"2\" text=\"Code Y/N\"/><Cell col=\"3\" colspan=\"2\" text=\"Query ID or Code Group ID\"/><Cell col=\"5\" text=\"View선택\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:DATASET_NAME\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:CODE_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" combodataset=\"dsCboYn\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:QUERY_ID\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"미리보기\"/><Cell col=\"5\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:VIEW_LAYER\" combodataset=\"dsViewSelect\" combocodecol=\"CODE\" combodatacol=\"NAME\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"120","60","25","77",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_cm_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"120","60","25","147",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            obj.set_cssclass("btn_cm_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboPrefix","108","11","120","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsCboPrefix");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("선택1");
            obj.set_value("1");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staFormName00","507","-4","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_textAlign("left");
            obj.set_background("transparent");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtFormId","236","11","289","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_password("false");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnLayout","460","78","65","21",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("상세보기");
            obj.set_visible("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staFormName","0","39","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtFormNm","108","44","419","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_password("false");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable04","0","grdSub:7","154","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("Search Layer");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdSub00","0","staLable04:11",null,"55","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsSearchLayout");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"350\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Label ID\"/><Cell col=\"1\" text=\"Label Name\"/><Cell col=\"2\" text=\"Require\"/><Cell col=\"3\" text=\"Type\"/><Cell col=\"4\" text=\"Bind Dataset\"/><Cell col=\"5\" text=\"Remark\"/></Band><Band id=\"body\"><Cell text=\"bind:LABEL_ID\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:LABEL_NAME\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:REQ_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:SEARCH_TYPE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsComponentType\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"4\" text=\"bind:BIND_DATASET\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsDataset\" combocodecol=\"DATASET_NAME\" combodatacol=\"DATASET_NAME\"/><Cell col=\"5\" text=\"bind:ETC1\" edittype=\"text\" displaytype=\"text\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBgLine00","3","6",null,"1","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tableLine");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staViewLayout","0","grdSub00:7","154","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("View Layer");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staGenPath","537","72","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("Generate 경로");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staSrcPath","537","39","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("Source 경로");
            obj.set_cssclass("sta_WF_th01L");
            obj.set_textAlign("left");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtSrcPath","staSrcPath:10","44",null,"23","1.06%",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_password("false");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtGenPath","staGenPath:10","77",null,"23","1.06%",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_password("false");
            obj.set_text("TEXT");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboSearchLayer","grdSub:-190","268","111","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsCboSearchLayout");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01",null,"269","100","23","cboSearchLayer:0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("검색Layout 선택: ");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnLoad00",null,"268","60","25","11",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("Load");
            obj.set_cssclass("btn_cm_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboLayout","108","76","200","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divDetail_form_cboLayout_innerdataset = new nexacro.NormalDataset("divDetail_form_cboLayout_innerdataset", obj);
            divDetail_form_cboLayout_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">GRID 단순 조회</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">좌: GRID, 우: GRID</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">좌: GRID, 우: FORM</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">좌: GRID, 우상: GRID, 우하: FORM</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">좌: TREE, 우: GRID</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_cboLayout_innerdataset);
            obj.set_text("- 선택 -");
            obj.set_value("");
            obj.set_index("-1");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","313","76","76","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("CUD여부");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDel00",null,"120","60","25","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("적용");
            obj.set_cssclass("btn_cm_basic01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staLable02","1","1","154","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Form");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staLable00","1","149","154","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Dataset");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"8","100","30","12",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("화면 생성");
            obj.set_visible("true");
            obj.set_cssclass("btn_cm_basic02");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab00","1","426","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("View 1");
            obj.set_cssclass("btn_WF_tab02");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab01","92","426","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("View 2");
            obj.set_cssclass("btn_WF_tab01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTab02","183","426","90","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("View 3");
            obj.set_cssclass("btn_WF_tab01");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTab00","0","453",null,null,"1","17",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            obj.set_url("frm::mod/srcMaker_ViewLayout.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divTab01","0","697",null,null,"1","-227",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            obj.set_url("frm::mod/srcMaker_ViewLayout.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTab02","0","937",null,null,"1","-467",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("dvi_WF_tabBox01");
            obj.set_text("divTab00");
            obj.set_url("frm::mod/srcMaker_ViewLayout.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab00
            obj = new Layout("default","",0,0,this.divTab00.form,function(p){});
            this.divTab00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab01
            obj = new Layout("default","",0,0,this.divTab01.form,function(p){});
            this.divTab01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTab02
            obj = new Layout("default","",0,0,this.divTab02.form,function(p){});
            this.divTab02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1040,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frm::mod/srcMaker_ViewLayout.xfdl");
        };
        
        // User Script
        this.registerScript("srcMaker_copy0.xfdl", function() {
        /**
        *  SYSTEM FORM NAME
        *
        *  @MenuPath    1DEPTH > 2DEPTH
        *  @FileName    *.xfdl
        *  @Creator     홍길동
        *  @CreateDate  yyyy.MM.DD
        *  @Version     1.0
        *  @Desction    설명
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  YYYY.MM.DD      홍길동             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_SrcPath=null;
        this.oInfo = null;
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * sample2_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.sample2_onload = function(obj, e)
        {
           if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
                //Script
        		var objList = {
        							"btnTab00":this.divTab00
        							, "btnTab01":this.divTab01
        							, "btnTab02":this.divTab02
        						};
                var sTabId = "tab01";
                var objFirstLoad = this.btnTab00;
                var sTabOnCss = "btn_WF_tab02";
                var sTabOffCss = "btn_WF_tab01";

                take.TabSetting(this, sTabId, objList, objFirstLoad, sTabOnCss, sTabOffCss);

        		// dsViewSelect 초기화
        		this.dsViewSelect.clearData();
        		var nRow = this.dsViewSelect.addRow();
        		this.dsViewSelect.setColumn(nRow, "CODE", "1");
        		this.dsViewSelect.setColumn(nRow, "NAME", "View 1");

        		this.dsInitInfo.clearData(); // DataSet 데이터 초기화
        		take.transaction(this, "Init", "SVC_LOC::srcmaker/init.do", "", "dsInitInfo=dsInitInfo", ""
        			, function(sId, nErrCd, sErrMsg)
        			{

        			trace(this.dsInitInfo.saveXML());
        				//Script
        				//take.formRole(this); // 권한에 따른 세팅
        				this.fnGetPrefixId();  // PrefixID 콤보 세팅
        				this.divDetail.form.cboSearchLayer.set_index(0);
        				this.divDetail.form.cboLayout.set_index(0);
        				this.divDetail.form.edtSrcPath.set_value(this.dsInitInfo.getColumn(0, "SRC_PATH"));
        				this.divDetail.form.edtGenPath.set_value(this.dsInitInfo.getColumn(0, "GEN_PATH"));
        			});
           }
        }

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

            //변수선언
            var sCallBack  = "fnCallback" ;
            switch(sTranId)
            {
                case "Search" :  // 마스터 검색
                    this.dsDataset.clearData(); // DataSet 데이터 초기화
        			take.tranSelect(this, "Search", "namespace.QueryID", "dsSearch", "dsDataset", "", sCallBack);
                    //Script
                    break;
                case "Save" :  // 마스터 저장
                    take.tranSave(this, "Save", "namespace.QueryId(Inser|Update|Delete제외)", "dsList", "", "", sCallBack);
                    //Script
                    break;

                case "SubSearch00" : // Sub 조회
        			var subId = this.dsList.getColumn(this.dsList.rowposition, "Sub조회할 Key값");
                    this.dsSubList.clearData();
        			take.tranSelect(this, "SubSearch", "namespace.QueryID", "dsSearch", "dsSubList", "subId='"+subId+"'", sCallBack);
                    //Script
                    break;
                case "SubSave00" :  // Sub 저장
                    //Script
                    //take.tranSave(this, "SubSave", "namespace.QueryId(Inser|Update|Delete제외)", "dsSubList", "", "", sCallBack);
                    break;

        		case "SubSearch01" : // Sub 조회
        			var subId = this.dsList.getColumn(this.dsList.rowposition, "Sub조회할 Key값");
                    this.dsSubList.clearData();
        			take.tranSelect(this, "SubSearch", "namespace.QueryID", "dsSearch", "dsSubList", "subId='"+subId+"'", sCallBack);
                    //Script
                    break;
                case "SubSave01" :  // Sub 저장
                    //Script
                    take.tranSave(this, "SubSave", "namespace.QueryId(Inser|Update|Delete제외)", "dsSubList", "", "", sCallBack);
                    break;
        		case "Load" :  // Query Load
        			this.dsViewLayout.clearData();
        			var sQueryId = this.divDetail.form.cboViewDataset1.value;
                    take.transaction(this, sTranId, "SVC_LOC::srcmaker/load.do", "", "dsViewLayout=dsViewLayout", "sQueryId='"+sQueryId+"'", sCallBack);
                    break;
        		case "SourceMaker" :  // Query Load
                    take.transaction(this, sTranId, "SVC_LOC::srcmaker/save.do", "dsBaseInfo=dsBaseInfo dsDataset=dsDataset dsSearchLayout=dsSearchLayout dsViewLayout=dsViewLayout", "", "", sCallBack);
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
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
                case "Search" : //조회 콜백
        			// Debug용도
        			// trace(this.dsList.saveXML());
                    //Script
                    break;
                case "Save" :  //저장 콜백
                    //Script
                    break;

                case "SubSearch00" : //Sub 조회 콜백
        			// Debug용도
        			// trace(this.dsSubList.saveXML());
                    //Script
                    break;
                case "SubSave00" :  //Sub 저장 콜백
                    //Script
                    break;

        		case "SubSearch01" : //Sub 조회 콜백
        			// Debug용도
        			// trace(this.dsSubList.saveXML());
                    //Script
                    break;
                case "SubSave01" :  //Sub 저장 콜백
                    //Script
                    break;
        		case "Load" :  //Sub 저장 콜백
                    trace(this.dsViewLayout.saveXML());
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
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
            if (take.nvl(sTranId, "")=="") sTranId = "Search";

            this.fnTran(sTranId);
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
            if (take.nvl(sTranId, "")=="") sTranId = "Save";

            this.fnTran(sTranId);
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdSub";
        	var addRow;
        	var objDs;
        	//Script
        	if( sGrdId == "grdSub" )
        	{
        		objDs = this.dsDataset;
        		addRow = objDs.addRow();
        		objDs.setColumn(addRow, "CODE_YN", "0");	// CODE여부			Default:N
        	}
        	else if( sGrdId == "grdSub00" )
        	{
        		objDs = this.dsSearchLayout;
        		addRow = objDs.addRow();
        		objDs.setColumn(addRow, "LABEL_ID", objDs.rowposition+1);
        		objDs.setColumn(addRow, "CODE_YN", "0");	 // Label Name		Default:Static
        		objDs.setColumn(addRow, "SEARCH_TYPE", "05");// TYPE			Default:Static
        	}
        	else if( sGrdId == "grdSub01" )
        	{
        		objDs = this.dsViewLayout;
        		addRow = objDs.addRow();
        		objDs.setColumn(addRow, "DISPLAY_YN", "1");	// Display Y/N		Default:N
        		objDs.setColumn(addRow, "DISPLAY_TYPE", "01");	// Display Type	Default:normal
        		objDs.setColumn(addRow, "EDIT_YN", "1");	// Edit Y/N			Default:N
        		objDs.setColumn(addRow, "EDIT_TYPE", "01");	// Edit Type		Default:normal
        		objDs.setColumn(addRow, "INPUT_YN", "1");	// 필수입력여부	Default:N
        	}
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
            if (take.nvl(sGrdId, "")=="") sGrdId = "grdSub";

            //Script
        	var nRow = 0;
        	var objDs;
        	var arrRow = new Array();
        	if( sGrdId == "grdSub" )
        	{
        		// 삭제할 항목 Checkbox 여부
        		objDs = this.dsDataset;
        		for(var i=0; i< objDs.getRowCount(); i++)
        		{
        			if( "1" == objDs.getColumn(i, "CHK")) // DataSet의 항목에 CHK 필드가 있어야 함.
        			{
        				objDs.set_updatecontrol(false);
        				objDs.setRowType(i, Dataset.ROWTYPE_DELETE);
        				objDs.set_updatecontrol(true );
        				arrRow[i] = i;
        				nRow++;
        			}
        		}

        		if( nRow == 0 )
        		{
        			take.alert(this, "Info", "삭제할 항목을 선택 하세요!");
        			return;
        		}
        		this.fnSave("Save");
        	}
        	else if( sGrdId == "grdSub00" )
        	{
        		// 삭제할 항목 Checkbox 여부
        		objDs = this.dsSearchLayout;
        		for(var i=0; i< objDs.getRowCount(); i++)
        		{
        			if( "1" == objDs.getColumn(i, "CHK")) // DataSet의 항목에 CHK 필드가 있어야 함.
        			{
        				objDs.set_updatecontrol(false);
        				objDs.setRowType(i, Dataset.ROWTYPE_DELETE);
        				objDs.set_updatecontrol(true );
        				arrRow[i] = i;
        				nRow++;
        			}
        		}
        		if( nRow == 0 )
        		{
        			take.alert(this, "Info", "삭제할 Sub항목을 선택 하세요!");
        			return;
        		}
        		this.fnSave("SubSave00");
        	}
        	else if( sGrdId == "grdSub01" )
        	{
        		// 삭제할 항목 Checkbox 여부
        		objDs = this.dsViewLayout;
        		for(var i=0; i< objDs.getRowCount(); i++)
        		{
        			if( "1" == objDs.getColumn(i, "CHK")) // DataSet의 항목에 CHK 필드가 있어야 함.
        			{
        				objDs.set_updatecontrol(false);
        				objDs.setRowType(i, Dataset.ROWTYPE_DELETE);
        				objDs.set_updatecontrol(true );
        				arrRow[i] = i;
        				nRow++;
        			}
        		}

        		if( nRow == 0 )
        		{
        			take.alert(this, "Info", "삭제할 Sub항목을 선택 하세요!");
        			return;
        		}
        		this.fnSave("SubSave01");
        	}
        	objDs.deleteMultiRows(arrRow);
        }

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
          ********************************************************/
        /**
        * component_onclick : ~ 버튼 클릭
        */
        this.component_onclick = function(obj,e)
        {
            //Script
        };

        /**
        * 그리드 셀 클릭 시 - 데이터셋 이용
        */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.fnTran('SubSearch');
        };

        /**
        * 그리드 Checkbox 전체 선택/해지
        */
        this.grid_onheadclick = function(obj,e)
        {
        	var objDs;
        	var chk;
        	if( obj.name == "grdSub" )
        	{
        		objDs = this.dsDataset;
        	}
        	else if( obj.name == "grdSub00" )
        	{
        		objDs = this.dsSearchLayout;
        	}
        	else if( obj.name == "grdSub01" )
        	{
        		objDs = this.dsViewLayout;
        	}

        	if( e.col == 0 )
        	{
        		chk = obj.getCellProperty("head", 0, "text") == "0" ? "1" : "0";
        		obj.setCellProperty("head", 0, "text", chk);
        		for(var i=0; i<objDs.rowcount; i++ )
        		{
        			objDs.setColumn(i, "CHK", chk);
        		}
        	}
        };

        /**
         * Dataset 추가 버튼 클릭 시
         */
        this.divDetail_btnAdd_onclick = function(obj,e)
        {
        	//this.fnAddRow('grdSub');
        	this.oInfo = null;
        			var sOpt = "";
        			var oArg = {
        				  argInSearchText : ''
        				, argInMultiSel : true	//멀티체크여부
        			};

        	take.openPopup(this, "srcMaker_QCodeN", "frm::mod/srcMaker_QCodeN_Popup.xfdl", oArg, sOpt,
        		function(sId){
        			this.alert('a');
        			if(take.isEmpty(this.oInfo)){
        				this.alert('b');
        				return;
        			}

        			var isArray = Array.isArray(this.oInfo);
        			if(isArray){
        			this.alert('c');
        				for(var j = 0 ; j < this.oInfo.length ; j++){
        					var nRow = this.dsDataset.addRow();
        					this.dsDataset.setColumn(nRow, 'CHK'			, "1");
        					this.dsDataset.setColumn(nRow, 'DATASET_NAME'	, "dsCode"+j);
        					this.dsDataset.setColumn(nRow, 'CODE_YN'		, "Y");
        					this.dsDataset.setColumn(nRow, 'QUERY_ID'		, this.oInfo[j].CODE_ID);
        					this.dsDataset.setColumn(nRow, 'VIEW_LAYER'		, "");
        				}
        			}else{
        				var nRow = this.dsDataset.addRow();
        				this.dsDataset.setColumn(nRow, 'COMP_CD'		, "1");
        				this.dsDataset.setColumn(nRow, 'ITEM_CODE'		, this.oInfo[j].ITEM_CODE);
        				this.dsDataset.setColumn(nRow, 'ITEM_NAME'		, this.oInfo[j].ITEM_NAME);
        				this.dsDataset.setColumn(nRow, 'ITEM_SPEC'		, this.oInfo[j].ITEM_SPEC);
        			}
        		}
        	);
        };

        /**
         * Dataset 삭제 버튼 클릭 시
         */
        this.divDetail_btnDel_onclick = function(obj,e)
        {
        	this.fnDelRow('grdSub');
        };

        /**
        * divDetail_btnAdd00_onclick : Search Layer 추가 버튼 클릭 시
        */
        this.divDetail_btnAdd00_onclick = function(obj,e)
        {

        	// Dataset 그리드에 입력된 값이 중복,빈값 아니면 row생성.
        	if (this.fnIsDataSet()) this.fnAddRow('grdSub00');
        };


        /**
        * divDetail_btnDel00_onclick : Search Layer 삭제 버튼 클릭 시
        */
        this.divDetail_btnDel00_onclick = function(obj,e)
        {
        	this.fnDelRow('grdSub00');
        };


        /**
        * divDetail_btnAdd01_onclick : View Layer 추가 버튼 클릭 시
        */
        this.divDetail_btnAdd01_onclick = function(obj,e)
        {
        	this.fnAddRow('grdSub01');
        };

        /**
        * divDetail_btnDel01_onclick : View Layer 삭제 버튼 클릭 시
        */
        this.divDetail_btnDel01_onclick = function(obj,e)
        {
        	this.fnDelRow('grdSub01');
        };


        /**
        * divDetail_grdSub_oncellclick : cell 클릭 이벤트
        */
        this.divDetail_grdSub_oncellclick = function(obj,e)
        {
        	//var objDs   = this.dsDataset;
        	var sQuery;
        	var sDpType = this.divDetail.form.grdSub.getCellProperty("body", e.cell, "displaytype");
        	//1:Y , 2:0
        	var sCodeYn = this.dsDataset.getColumn(this.divDetail.form.grdSub.currentrow, "CODE_YN");

        	if (sDpType == "buttoncontrol")
        	{
        		if (e.cell == 4) // 선택 버튼
        		{
        			//sQuery = objDs.getColumn(e.row, "QUERY_ID");
        			//"코드여부 Y일 경우\n     - 코드그룹 선택할 수 있는 화면 구성\n코드여부 N일 경우\n     - 화면 Layout을 Category별로 선택할 수 있도록 화면 구성"
        			if (sCodeYn == 0) // 'N'
        			{
        				var oParam = {obj : ""};
        				take.openPopup(this, "PopUp", "frm::mod/srcMaker_QCodeN_Popup.xfdl", oParam, "", "", false);
        			}
        			else // 'Y' 공통코드 선택화면
        			{
        				var oParam = {obj : ""};
        				take.openPopup(this, "PopUp", "frm::mod/srcMaker_QCodeY_Popup.xfdl", oParam, "", "", false);
        			}
        		}
        		else if (e.cell == 5) // 미리보기 버튼
        		{
        			var oParam = {obj : ""};
        			take.openPopup(this, "PopUp", "frm::mod/srcMaker_QView_Popup.xfdl", oParam, "", "", false);
        		}
        	}
        };

        /**
        * FileDialog_onclose : Source Path FileDialog 닫힐때 이벤트
        */
        this.FileSrcPath_onclose = function(obj,e)
        {
        	this.divDetail.form.edtSrcPath.set_value(e.path);
        };

        /**
        * FileGenPath_onclose : FileGenPath FileDialog 닫힐때 이벤트
        */
        this.FileGenPath_onclose = function(obj,e)
        {
        	this.divDetail.form.edtGenPath.set_value(e.path);
        };

        /**
        * divDetail_cboSearchLayer_canitemchange : 콤보에서 아이템 변경후 발생 이벤트
        */
        this.divDetail_cboSearchLayer_onitemchanged = function(obj,e)
        {
        	// 콤보에 바인딩 되어있는 codecolumn id
        	var sCodeColumn   = this.divDetail.form.cboSearchLayer.codecolumn
        	var objDsCboSearh = this.dsCboSearchLayout;
        	var objDsSearch   = this.dsSearchLayout;
        	objDsSearch.clearData();

        	// 콤보 아이템 리스트 만큼 반복하여 조건에 맞게 레이아웃 row 생성
        	var nRow;
        	for (var i=0; i<e.postvalue; i++)
        	{
        		nRow = objDsSearch.addRow();
        		objDsSearch.setColumn(nRow, "SEARCH_TYPE", "01");
        		//objDsSearch.setColumn(objDsSearch.addRow(), "LABEL_ID", "Label"+Number(i+1));
        	}
        };

        /**
        * divDetail_btnLayout_onclick : 화면 Layout 선택 버튼 클릭
        */
        this.divDetail_btnLayout_onclick = function(obj,e)
        {
        	//var objDs   = this.dsDataset;
        	//var sQuery;
        	//var sDpType = this.divDetail.form.grdSub.getCellProperty("body", e.cell, "displaytype");
        	//if (sDpType == "buttoncontrol")
        	//{
        		//sQuery = objDs.getColumn(e.row, "QUERY_ID");
        		var oParam = {oText : '화면 Layout을 Category별로 선택할 수 있도록 화면 구성...'};
        		take.openPopup(this, "PopUp", "frm::mod/srcMaker_F_Popup.xfdl", oParam, "", "", false);
        	//}
        };

        /**
        * divDetail_btnSearchLayout_onclick : 검색 Layout 상세보기 버튼 클릭
        */
        this.divDetail_btnSearchLayout_onclick = function(obj,e)
        {
        	var oParam = {oText : '검색 Layout을 상세 조회 및 설명할 수 있는 화면 구성...'};
        	take.openPopup(this, "PopUp", "frm::mod/srcMaker_S_Popup.xfdl", oParam, "", "", false);
        };

        /**
        * divDetail_btnLoad_onclick : Load 버튼 클릭
        */
        this.divDetail_btnLoad_onclick = function(obj,e)
        {
        	//this.alert(this.divDetail.form.cboViewDataset1.value);
        	this.fnTran('Load');
        };

        /**
        * btnSave_onclick : 화면생성 버튼 클릭
        */
        this.btnSave_onclick = function(obj,e)
        {
        	var nRow = this.dsBaseInfo.addRow();
        	var objDs = this.dsBaseInfo;

        	var sPrefix 		= this.divDetail.form.cboPrefix.value;
        	var sFormId 		= this.divDetail.form.edtFormId.value;
        	var sFormNm 		= this.divDetail.form.edtFormNm.value;
        	var sFormLayout 	= "001";
        	var sSearchLayout 	= this.divDetail.form.cboSearchLayer.value;
        	var sSourcePath 	= this.divDetail.form.edtSrcPath.value;
        	var sGeneratePath 	= this.divDetail.form.edtGenPath.value;
        	var sViewDataset 	= this.divDetail.form.cboViewDataset1.text;
        	var sViewNamespace 	= this.divDetail.form.cboViewDataset1.value;

        	// validation check

        	objDs.setColumn(nRow, "PREFIX"			, sPrefix);
        	objDs.setColumn(nRow, "FORM_ID"			, sFormId);
        	objDs.setColumn(nRow, "FORM_NAME"		, sFormNm);
        	objDs.setColumn(nRow, "FORM_LAYOUT"		, sFormLayout);
        	objDs.setColumn(nRow, "SEARCH_LAYOUT"	, sSearchLayout);
        	objDs.setColumn(nRow, "SOURCE_PATH"		, sSourcePath);
        	objDs.setColumn(nRow, "GENERATE_PATH"	, sGeneratePath);
        	objDs.setColumn(nRow, "VIEW_LAYOUT1"	, sViewDataset);
        	objDs.setColumn(nRow, "VIEW_LAYOUT2"	, "");
        	objDs.setColumn(nRow, "VIEW_LAYOUT3"	, "");
        	objDs.setColumn(nRow, "VIEW_LAYOUT4"	, "");
        	objDs.setColumn(nRow, "VIEW_LAYOUT5"	, "");
        	objDs.setColumn(nRow, "VIEW_NAMESPACE1"	, sViewNamespace);
        	objDs.setColumn(nRow, "VIEW_NAMESPACE2"	, "");
        	objDs.setColumn(nRow, "VIEW_NAMESPACE3"	, "");
        	objDs.setColumn(nRow, "VIEW_NAMESPACE4"	, "");
        	objDs.setColumn(nRow, "VIEW_NAMESPACE5"	, "");

        	this.fnTran('SourceMaker');
        };
        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnDataSetText : Dataset그리드에 입력된 텍스트 값 중복체크
         * @example this.fnDataSetText();
         */
        this.fnIsDataSet = function()
        {
        	var objGrd  = this.divDetail.form.grdSub;
        	var objDs   = this.dsDataset;
        	var nRow    = objGrd.currentrow;
        	var nCnt 	= objGrd.rowcount;
        	var nFalg   = -1;
        	var sDataNm;

        	for(var i=0; i<nCnt; i++)
        	{
        		sDataNm = take.nvl(objGrd.getCellPropertyValue(i, 1, "text"), "");
        		// 빈값 체크
        		if ("" == sDataNm)
        		{
        			take.alert(this, "Info", "DATASET_NAME 값이 없습니다.", { });
        			objDs.set_rowposition(i);
        			objGrd.setCellPos(objGrd.getBindCellIndex("body", "DATASET_NAME"));
        			objGrd.showEditor(true);
        			nFalg   = -11
        			return false;
        		}
        		// 중복 체크
        		else if (objDs.findRow("DATASET_NAME", sDataNm) != i)
        		{
        			take.alert(this, "Info", "DATASET_NAME 값이 중복 되어있습니다.", { });
        			objDs.set_rowposition(i);
        			objGrd.setCellPos(objGrd.getBindCellIndex("body", "DATASET_NAME"));
        			objGrd.showEditor(true);
        			return false;
        		}
        	}
        	return true;
        }

        /**
         * fnGetPrefixId : TypeDefinition_Services_form_frefixID 가져오기
         * @example this.fnGetPrefixId();
         */
        this.fnGetPrefixId = function()
        {
        	var sType, sPfix;
        	var nNum=1;
        	var objDs		= this.dsCboPrefix;
        	var nCnt 		= nexacro.getEnvironment().services.length;
        	var arrType 	= new Array();
        	var arrPrefixId = new Array();

        	objDs.setColumn(objDs.addRow(), "CODE", "");
        	objDs.setColumn(objDs.rowposition, "NAME", "::Prefix 선택::");
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
        }

        /**
         * fnSetChildValue : 팝업에서 선택된 데이터 바인딩
         * @param  {String} name 그리드명칭
         * @param  {String} code 폼 구분 값
         * @example this.fnSetChildValue(name);
         */
        this.fnSetChildValue = function(name, code)
        {
        	switch(code) {
        	case "F":
        		this.divDetail.form.edtLayout.set_value(name);
        		//this.fnCreateTab(name);
        		break;

        	case "QCodeY":
        		this.dsDataset.setColumn(this.dsDataset.rowposition, "QUERY_ID", name);
        		break;

        	case "QCodeN":
        		this.dsDataset.setColumn(this.dsDataset.rowposition, "QUERY_ID", name);
        		break;
        	default:
        	}
        }
        //
        // this.fnCreateTab = function(name)
        // {
        // 	// Create Object
        // 	var objTab = new Tab();
        // 	objTab.init("Tab", "0px", "525px", null, null, "0px", "10px");
        // 	// Add Object to Parent Form
        // 	this.addChild("Tab00", objTab);
        // 	// Show Object
        // 	objTab.show();
        //
        // 	var arrName = new Array();
        // 	for(var i=0; i<3; i++)
        // 	{
        // 		arrName[i] = name.split(",", i)
        // 		this.Tab00.insertTabpage(arrName[i], i);
        //
        // 	}
        //
        // }
        this.divDetail_cboLayout_onitemchanged = function(obj,e)
        {
        	if( obj.value == "1" ){
        		this.btnTab00.set_visible(true);
        		this.btnTab01.set_visible(false);
        		this.btnTab02.set_visible(false);

        		this.dsViewSelect.clearData();
        		var nRow = this.dsViewSelect.addRow();
        		this.dsViewSelect.setColumn(nRow, "CODE", "1");
        		this.dsViewSelect.setColumn(nRow, "NAME", "View 1");
        	} else if( obj.value == "2" || obj.value == "3" || obj.value == "5" ){
        		this.btnTab00.set_visible(true);
        		this.btnTab01.set_visible(true);
        		this.btnTab02.set_visible(false);

        		this.dsViewSelect.clearData();
        		var nRow = this.dsViewSelect.addRow();
        		this.dsViewSelect.setColumn(nRow, "CODE", "1");
        		this.dsViewSelect.setColumn(nRow, "NAME", "View 1");

        		nRow = this.dsViewSelect.addRow();
        		this.dsViewSelect.setColumn(nRow, "CODE", "2");
        		this.dsViewSelect.setColumn(nRow, "NAME", "View 2");
        	} else if( obj.value == "4" ){
        		this.btnTab00.set_visible(true);
        		this.btnTab01.set_visible(true);
        		this.btnTab02.set_visible(true);

        		this.dsViewSelect.clearData();
        		var nRow = this.dsViewSelect.addRow();
        		this.dsViewSelect.setColumn(nRow, "CODE", "1");
        		this.dsViewSelect.setColumn(nRow, "NAME", "View 1");

        		nRow = this.dsViewSelect.addRow();
        		this.dsViewSelect.setColumn(nRow, "CODE", "2");
        		this.dsViewSelect.setColumn(nRow, "NAME", "View 2");

        		nRow = this.dsViewSelect.addRow();
        		this.dsViewSelect.setColumn(nRow, "CODE", "3");
        		this.dsViewSelect.setColumn(nRow, "NAME", "View 3");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sample2_onload,this);
            this.divDetail.form.grdSub.addEventHandler("onheadclick",this.grid_onheadclick,this);
            this.divDetail.form.grdSub.addEventHandler("oncellclick",this.divDetail_grdSub_oncellclick,this);
            this.divDetail.form.btnDel.addEventHandler("onclick",this.divDetail_btnDel_onclick,this);
            this.divDetail.form.btnAdd.addEventHandler("onclick",this.divDetail_btnAdd_onclick,this);
            this.divDetail.form.cboPrefix.addEventHandler("onitemchanged",this.divDetail_cboCustGbn_onitemchanged,this);
            this.divDetail.form.btnLayout.addEventHandler("onclick",this.divDetail_btnLayout_onclick,this);
            this.divDetail.form.grdSub00.addEventHandler("onheadclick",this.grid_onheadclick,this);
            this.divDetail.form.cboSearchLayer.addEventHandler("onitemchanged",this.divDetail_cboSearchLayer_onitemchanged,this);
            this.divDetail.form.btnLoad00.addEventHandler("onclick",this.divDetail_btnLoad_onclick,this);
            this.divDetail.form.cboLayout.addEventHandler("onitemchanged",this.divDetail_cboLayout_onitemchanged,this);
            this.divDetail.form.btnDel00.addEventHandler("onclick",this.divDetail_btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnTab00.addEventHandler("onclick",this.btnTab00_onclick,this);
            this.btnTab01.addEventHandler("onclick",this.btnTab01_onclick,this);
            this.btnTab02.addEventHandler("onclick",this.btnTab02_onclick,this);
            this.FileSrcPath.addEventHandler("onclose",this.FileSrcPath_onclose,this);
            this.FileGenPath.addEventHandler("onclose",this.FileGenPath_onclose,this);
        };
        this.loadIncludeScript("srcMaker_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
