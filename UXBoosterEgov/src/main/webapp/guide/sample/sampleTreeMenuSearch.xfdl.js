(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTreeMenuSearch");
            this.set_titletext("(샘플)트리메뉴검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTree", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_GRP\">00</Col><Col id=\"MENU_NM\">투비소프트</Col><Col id=\"MENU_ID\">1100</Col><Col id=\"MENU_LVL\">0</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">경영전략본부</Col><Col id=\"MENU_ID\">1110</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">사업본부</Col><Col id=\"MENU_ID\">1120</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">사업그룹</Col><Col id=\"MENU_ID\">1130</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">사업1팀</Col><Col id=\"MENU_ID\">1140</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">POC</Col><Col id=\"MENU_NM\">사업2팀</Col><Col id=\"MENU_ID\">1150</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">poc</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">사업3팀</Col><Col id=\"MENU_ID\">1200</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">사업4팀</Col><Col id=\"MENU_ID\">1210</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">기술융합그룹</Col><Col id=\"MENU_ID\">1211</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">프리세일즈팀</Col><Col id=\"MENU_ID\">1212</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">마케팅팀</Col><Col id=\"MENU_ID\">1213</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">교육서비스팀</Col><Col id=\"MENU_ID\">1220</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_ID\">1221</Col><Col id=\"MENU_NM\">기술융합팀</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1222</Col><Col id=\"MENU_NM\">사업전략팀</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_GRP\">SAMPLE</Col><Col id=\"MENU_NM\">사업지원팀</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_ID\">1223</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_NM\">기술지원본부</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_GRP\">CS</Col><Col id=\"MENU_ID\">0100</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_NM\">제품컨설팅그룹</Col><Col id=\"MENU_GRP\">CS</Col><Col id=\"MENU_ID\">0110</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_NM\">사업관리팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CS</Col><Col id=\"MENU_ID\">0111</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_NM\">제품컨설팅1팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CM</Col><Col id=\"MENU_ID\">0200</Col><Col id=\"MENU_TR\">sample</Col></Row><Row><Col id=\"MENU_NM\">제품컨설팅2팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CM</Col><Col id=\"MENU_ID\">0210</Col><Col id=\"MENU_TR\">cmcc</Col></Row><Row><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CM</Col><Col id=\"MENU_NM\">제품컨설팅3팀</Col><Col id=\"MENU_ID\">0211</Col><Col id=\"MENU_TR\">cmcc01</Col></Row><Row><Col id=\"MENU_NM\">UX디자인팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">GL</Col><Col id=\"MENU_ID\">0300</Col></Row><Row><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_NM\">기술지원그룹</Col><Col id=\"MENU_GRP\">GL</Col><Col id=\"MENU_ID\">0310</Col></Row><Row><Col id=\"MENU_NM\">고객지원팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_ID\">0400</Col></Row><Row><Col id=\"MENU_NM\">테크솔루션팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_ID\">0410</Col><Col id=\"MENU_TR\">dpsv</Col></Row><Row><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_NM\">일본사업지원팀</Col><Col id=\"MENU_ID\">0411</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">dpsv05</Col></Row><Row><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_NM\">기술지원팀</Col><Col id=\"MENU_ID\">0412</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">dpsv06</Col></Row><Row><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_NM\">솔루션사업본부</Col><Col id=\"MENU_ID\">0420</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_TR\">dpcb</Col></Row><Row><Col id=\"MENU_ID\">0430</Col><Col id=\"MENU_NM\">솔루션사업그룹</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">dpic</Col></Row><Row><Col id=\"MENU_NM\">솔루션사업팀</Col><Col id=\"MENU_ID\">0440</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">dptd</Col></Row><Row><Col id=\"MENU_NM\">WS개발팀</Col><Col id=\"MENU_ID\">0450</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_TR\">dpda</Col></Row><Row><Col id=\"MENU_NM\">오픈소스사업그룹</Col><Col id=\"MENU_ID\">0460</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">dptb</Col></Row><Row><Col id=\"MENU_NM\">루시드웤스솔루션그룹</Col><Col id=\"MENU_ID\">0470</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">dpsa</Col></Row><Row><Col id=\"MENU_NM\">솔루션사업지원팀</Col><Col id=\"MENU_ID\">0480</Col><Col id=\"MENU_GRP\">DP</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_TR\">dpba</Col></Row><Row><Col id=\"MENU_NM\">연구개발본부</Col><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_GRP\">FX</Col><Col id=\"MENU_ID\">0500</Col></Row><Row><Col id=\"MENU_NM\">제품구현1그룹</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_GRP\">FX</Col><Col id=\"MENU_ID\">0510</Col></Row><Row><Col id=\"MENU_NM\">nx17팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">EI</Col><Col id=\"MENU_ID\">0600</Col></Row><Row><Col id=\"MENU_NM\">nx14팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">EI</Col><Col id=\"MENU_ID\">0610</Col></Row><Row><Col id=\"MENU_NM\">제품구현2그룹</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_GRP\">DL</Col><Col id=\"MENU_ID\">0700</Col></Row><Row><Col id=\"MENU_NM\">런타임팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">DL</Col><Col id=\"MENU_ID\">0710</Col></Row><Row><Col id=\"MENU_NM\">개발환경팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CI</Col><Col id=\"MENU_ID\">0800</Col></Row><Row><Col id=\"MENU_NM\">제품구현3그룹</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_GRP\">CI</Col><Col id=\"MENU_ID\">0810</Col></Row><Row><Col id=\"MENU_NM\">융합기술개발팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">TF</Col><Col id=\"MENU_ID\">0900</Col></Row><Row><Col id=\"MENU_NM\">융합기술기획팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">TF</Col><Col id=\"MENU_ID\">0910</Col></Row><Row><Col id=\"MENU_NM\">품질보증그룹</Col><Col id=\"MENU_LVL\">2</Col><Col id=\"MENU_GRP\">CL</Col><Col id=\"MENU_ID\">1000</Col></Row><Row><Col id=\"MENU_NM\">품질보증팀</Col><Col id=\"MENU_LVL\">3</Col><Col id=\"MENU_GRP\">CL</Col><Col id=\"MENU_ID\">1010</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","19","50","330","383",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsTree");
            obj.set_treeuseexpandkey("true");
            obj.set_treeinitstatus("collapse,null");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"307\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" autosizecol=\"default\" controlautosizingtype=\"none\" treelevel=\"bind:MENU_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCode","19","20","255","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchPrev","277","20","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("prev");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchNext","314","20","35","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("next");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleTreeMenuSearch.xfdl", function() {
        /**
        *  techtip tree menu search sample
        *  @MenuPath    techtip > menusearch
        *  @FileName	menusearch.xfdl
        *  @Desction	tree menu search init form
        *******************************************************************************
        *  2019.04.22		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	/*
        	 menusearch 옵션 설정
        	 1. strSearchId -> tree text value column name (search)
        	 2. objGrid -> Grid component
        	 3. objEdit ->  search edit component
        	 4. objButton1 -> previous button component
        	 5. objButton2 -> next button component (생략가능, 생략시엔 objButton1이 next로 동작)
        	*/

        	var objConfig = {
        						strSearchId		: "MENU_NM",
        						objGrid			: this.Grid00,
        						objEdit			: this.edtCode,
        						objButton1		: this.btnSearchPrev,
        						objButton2		: this.btnSearchNext
        				    }
        	this.fnInitForm(this,objConfig);
        }

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
        /**
        * @description form onload --> define config object and addEventHandler (form, grid)
        * @param objForm : form,
        *		 objConfig : {strSearchId, objGrid, objEdit, objButton1, objButton2}
        * @return
        */
        this.fnInitForm = function(objForm,objConfig)
        {
        	//define config info.
        	objForm.config = objConfig;

        	objForm.config.strFilterId = "filter_temp";

        	objForm.config.objEdit.addEventHandler("onkeydown",this.edtCode_onkeydown,objForm);
        	objForm.config.objEdit.addEventHandler("onchanged",this.edtCode_onchanged,objForm);


        	//if not use prev button
        	if(take.isNull(objConfig.objButton2))
        	{
        		//only next button define
        		objForm.config.objNextButton = objConfig.objButton1;
        		objForm.config.objNextButton.type = "next";
        		objForm.config.objNextButton.addEventHandler("onclick",this.btnMove_onclick,objForm);
        	} else {

        		//prev & nexat button define
        		objForm.config.objPrevButton = objConfig.objButton1;
        		objForm.config.objNextButton = objConfig.objButton2;

        		objForm.config.objPrevButton.type = "prev";
        		objForm.config.objNextButton.type = "next";

        		objForm.config.objPrevButton.addEventHandler("onclick",this.btnMove_onclick,objForm);
        		objForm.config.objNextButton.addEventHandler("onclick",this.btnMove_onclick,objForm);
        	}

        	objForm.config.objDataset = objForm.objects[objConfig.objGrid.binddataset];

        	//create temp dataset
        	objForm.config.objTempDataset = this.fnCreateTempDataset(objForm,objForm.config.objDataset,objForm.config.strFilterId);

        	var nTreeCellIndex = this.fnGetTreeCellIndex(objForm.config.objGrid);

        	objForm.config.treeCellIndex  = nTreeCellIndex;
        	objForm.config.startTreeLevel = objForm.config.objGrid.getCellProperty("body",nTreeCellIndex,"treestartlevel");		//startlevel default:0
        };

        /**
        * @description get treecell index number
        * @param objGrid : menu grid
        * @return nCol : cell index
        */
        this.fnGetTreeCellIndex = function(objGrid)
        {
        	var nCellCount = objGrid.getCellCount("body");
        	var nCellType;
        	var nCol = 0;
        	for(nCol=0; nCol<nCellCount; nCol++)
        	{
        		nCellType = objGrid.getCellProperty("body",nCol,"displaytype");
        		//get first treecell num
        		if(nCellType = "treeitemcontrol")
        		{
        			break;
        		}
        	}

        	return nCol;
        }

        /**
        * @description create dataset (temp dataset)
        * @param obj : form, objDs:objDataset , sFilterId : 'filter_temp'
        * @return objTempDs : dataset 'dsTemp'
        */
        this.fnCreateTempDataset = function(obj, objDs, sFilterId)
        {
        	//create dataset name ('dsTemp' + random 4 number)
        	var sDatasetId = "dsTemp_" + nexacro.floor(Math.random(),4) * 10000;	// 0 ~ 9999

        	//create dataset
        	var objTempDs = new Dataset;
        	objTempDs.set_name(sDatasetId);
        	obj.addChild(sDatasetId, objTempDs);

        	var nColCnt = objDs.getColCount();

        	objTempDs.set_enableevent(false);
        	var nColId, sColInfo,sColSize,sColType;

        	//col information copy
        	for(var i=0; i<nColCnt; i++)
        	{
        		nColId	 = objDs.getColID(i);
        		sColInfo = objDs.getColumnInfo(i);
        		sColSize = sColInfo.size;
        		sColType = sColInfo.type;
        		objTempDs.addColumn(nColId,sColType,sColSize);
        	}

        	objTempDs.copyData(objDs);
        	objTempDs.set_enableevent(true);


        	//add filter column
        	objDs.addColumn(sFilterId,"String",256);

        	return objTempDs;
        }

        /**
        * @description find rowposition and set rowposition
        * @param obj : form, sType : button click type "prev or next"
        * @return
        */
        this.setFindeCodeRow = function (obj, sType)
        {

        	//get config info.
        	var edtValue = obj.config.objEdit.value;
        	var dsTree	 = obj.config.objDataset;
        	var grdTree	 = obj.config.objGrid;

        	var nStartLvl = obj.config.startTreeLevel;
        	var nCellIndex= obj.config.treeCellIndex;

        	var nRowPos	 = dsTree.rowposition;
        	var edtValue = obj.config.objEdit.value;

        	//find row position
        	if(!take.isNull(edtValue))
        	{
        		var sFilterstr = obj.config.strSearchId+".indexOf('"+edtValue+"') > -1";

        		var findRow = 0;
        		if(nRowPos > -1){
        			if(sType == "prev")
        			{
        				nRowPos--;

        				for(var n=nRowPos; n>-1; n--)
        				{
        					findRow = dsTree.findRowExpr(sFilterstr,n,n+1);

        					if(findRow > -1)
        					{
        						break;
        					}
        				}
        			}
        			else
        			{
        				nRowPos++;
        				findRow = dsTree.findRowExpr(sFilterstr,nRowPos);
        			}
        		}

        		if(findRow < 0)
        		{
        			findRow = dsTree.rowposition;
        		}
        	}

        	//parent row tree status update -> parent tree status "expand"
        	var nTreeRow = 0;
        	var nStartLvl = grdTree.getCellProperty("body",nCellIndex,"treestartlevel");
        	var nEndLvl = 0;

        	if(!grdTree.isTreeRootRow(findRow,true))
        	{
        		nEndLvl = grdTree.getCellPropertyValue(findRow,nCellIndex,"treelevel");

        		var parentsRow = 0;
        		for(var i=nStartLvl; i<nEndLvl; i++)
        		{
        			parentsRow = grdTree.getTreeParentRow(findRow);
        			grdTree.setTreeStatus(grdTree.getTreeRow(parentsRow),true);

        			if (!grdTree.isTreeRootRow(parentsRow,false))
        			{
        				parentsRow = grdTree.getTreeParentRow(parentsRow);
        				grdTree.setTreeStatus(grdTree.getTreeRow(parentsRow),true);
        			}
        			else
        			{
        				break;
        			}
        		}
        	}

        	//set_rowposition
        	dsTree.set_rowposition(findRow);
        };

        /**
        * @description dataset filtering on edit value
        * @param obj : form
        * @return
        */
        this.setFilterCode = function (obj)
        {

        	//config info.
        	var sFilterColumnId = obj.config.strFilterId;
        	var objTreeDataset	= obj.config.objDataset;
        	var objTempDataset	= obj.config.objTempDataset;
        	var objTreeGrid		= obj.config.objGrid;
        	var nCellIndex		= obj.config.treeCellIndex;


        	//init filter state
        	objTreeDataset.set_filterstr("");


        	//init filter value
        	for(var i=0; i<objTreeDataset.getRowCount(); i++)
        	{
        		objTreeDataset.setColumn(i,sFilterColumnId,0);
        	}

        	var edtValue = obj.config.objEdit.value;



        	if(take.isNull(edtValue))

        	{

        		return;

        	}

        	var nStartLvl = obj.config.startTreeLevel;
        	var nEndLvl	  = 0;
        	var nRow = 0, nTreeRow = 0, nParentRow = 0;



        	//make filterstr : columnid.indexOf('value') > -1

        	var sFilterstr = obj.config.strSearchId+".indexOf('"+edtValue+"') > -1";



        	//temp dataset set filterstr

        	objTempDataset.set_filterstr(sFilterstr);

        	for(var i=0; i<objTempDataset.getRowCount(); i++){
        		nRow = objTempDataset.findNFRowIndex(i);	//findNFRowIndex

        		nTreeRow = objTreeGrid.getTreeRow(nRow);	//getTreeRow
        		nEndLvl = objTreeGrid.getCellPropertyValue(nTreeRow,nCellIndex,"treelevel");	//get now row level

        		nParentRow = nTreeRow;
        		for(var k = nStartLvl; k <nEndLvl; k++)
        		{
        			nParentRow = objTreeGrid.getTreeParentRow(nParentRow);

        			if(nParentRow<0)
        			{
        				break;
        			}


        			//filter column set
        			if(objTreeDataset.getColumn(nParentRow,sFilterColumnId) != 1){
        				objTreeDataset.setColumn(nParentRow,sFilterColumnId,1);
        			}
        		}

        		objTreeDataset.setColumn(nRow,sFilterColumnId,1);
        	}


        	//make filterstr
        	var sTreefilter = sFilterColumnId + " == 1";

        	objTreeDataset.set_filterstr(sTreefilter);	//tree dataset set filterstr
        	objTempDataset.set_filterstr("");			//init filterstr 'temp dataset'
        };

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description edit onkeydown event --> this.setFilterCode(objForm)
        */
        this.edtCode_onkeydown = function(obj,e)
        {
        	var objForm = obj.parent;
        	if(e.keycode ==13){
        		this.setFilterCode(objForm);
        	}
        };

        /**
         * @description edit onchanged event --> set rowposion(0) // init row postion
        */
        this.edtCode_onchanged = function(obj,e)
        {
        	var objForm = obj.parent;
        	objForm.config.objDataset.set_rowposition(0);
        };

        /**
         * @description move button onclick event --> this.setFindeCodeRow(objForm,sType)
        */
        this.btnMove_onclick = function(obj,e)
        {
        	var objForm = obj.parent;
        	var sType	= obj.type;

        	this.setFindeCodeRow(objForm,sType);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.edtCode.addEventHandler("onkeydown",this.edtCode_onkeydown,this);
            this.btnSearchPrev.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnSearchNext.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("sampleTreeMenuSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
