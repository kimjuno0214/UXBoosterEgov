(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("treegrid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOrg", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"160\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"1\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">투비소프트</Col><Col id=\"LEVEL\">0</Col></Row><Row><Col id=\"NAME\">사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">사업그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업1팀(제조)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업2팀(공공)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업3팀(금융)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">프리세일즈팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술융합팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">교육서비스팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">마케팅팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">사업전략팀</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업지원팀</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">기술지원본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">제품컨설팅그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">사업관리팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">UX디자인팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅1팀(제조)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅2팀(공공)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">제품컨설팅3팀(금융)</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">기술지원그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"NAME\">기술지원팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">테크솔루션팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">일본사업지원팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">서버솔루션팀</Col><Col id=\"LEVEL\">3</Col></Row><Row><Col id=\"NAME\">솔루션사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">솔루션사업그룹</Col><Col id=\"LEVEL\">2</Col></Row><Row><Col id=\"LEVEL\">2</Col><Col id=\"NAME\">오픈소스사업그룹</Col></Row><Row><Col id=\"NAME\">솔루션사업본부</Col><Col id=\"LEVEL\">1</Col></Row><Row><Col id=\"NAME\">신규사업팀</Col><Col id=\"LEVEL\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdTree","50","70","370","420",null,null,null,null,null,null,this);
            obj.set_binddataset("dsOrg");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"301\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:NAME\" treelevel=\"bind:LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","457","70","323","420",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("_smpTreeGrid.xfdl", function() {
        /**
        *  techtip paging sample
        *  @MenuPath    techtip > treegrid
        *  @FileName	treegrid.xfdl
        *  @Desction	tree grid init form
        *******************************************************************************
        *  2019.04.05		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * include 영역
         **************************************************************************/

        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */

        this.form_onload = function(obj,e)
        {
        	/*
        	 treegrid 옵션 설정
        	 1. orgGrid -> 원본 Grid
        	 2. targetGrid -> 이동하거나 복사될 Grid
        	 3. levelColumn -> treelevel column name
        	 4. option ->  복사 : c or "" , 이동 : m
        	*/

        	var objForm = obj;
        	var objConfig = {
        						orgGrid		: this.grdTree,
        						targetGrid	: this.Grid00,
        						levelColumn : "LEVEL",
        						option		: "m"
        				    }
        	this.fnInitForm(objForm,objConfig);
        }

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
        /**
        * @description form onload --> define config object and drag & drop addEventHandler (form, grid)
        * @param objDiv	: objForm form, objConfig object
        *		 objConfig : {orgGrid, targetGrid, levelColumn, option}
        * @return
        */
        this.fnInitForm = function(objForm,objConfig)
        {
        	//define config info.
        	objForm.config = objConfig;

        	/* define component List
        	-----------------------------------------------------
        	obj.config ---> form object.config
        	.orgGrid 		---> drag process grid (original tree)
        	.targetGrid		---> drop process grid (target tree)
        	.orgDs			---> orgGrid bind dataset
        	.targetDs		---> targetGrid bind dataset
        	.tempDs			---> drag tree copy dataset (temp data)
        	.stImg			---> move static (drag & drop view)
        	*/

        	var objOrgGrid	  = objForm.config.orgGrid;
        	var objTargetGrid = objForm.config.targetGrid;
        	objOrgGrid.gridFormatInfo = objOrgGrid.formats;

        	var strTargetId	  = objTargetGrid.binddataset;	//target dataset name

        	objForm.config.orgDs    = objForm.all[objOrgGrid.binddataset];
        	objForm.config.targetDs	= objForm.all[strTargetId];

        	if(take.isNull(objForm.config.targetDs))
        	{
        		//create target dataset
        		objForm.config.targetDs = this.fnCreateTempDataset(objForm,objOrgGrid,"Target");
        	}

        	//create temp dataset
        	objForm.config.tempDs = this.fnCreateTempDataset(objForm,objOrgGrid,"Temp");

        	//create move static
        	objForm.config.staticClass = "";	//css class id
        	objForm.config.stImg	   = this.fnCreateMoveStatic(objForm,"stDragImg");

        	/* addEventHandler List
        	-----------------------------------------------------
        	form		---> ondragmove , ondrop
        	orgGrid		---> ondrag
        	targetGrid	---> ondrop
        	*/
        	objForm.addEventHandler("ondragmove",this.form_ondragmove,objForm);
        	objForm.addEventHandler("ondrop",this.form_ondrop,objForm);
        	objOrgGrid.addEventHandler("ondrag",this.grd_ondrag,objForm);
        	objTargetGrid.addEventHandler("ondrop",this.grd_ondrop,objForm);
        }

        /**
        * @description create static component (visible when use dragmove event)
        * @param obj : form, staticId : static name
        * @return objStatic : static 'stDragImg'
        */
        this.fnCreateMoveStatic = function(obj,staticId)
        {
        	var objStatic = new Static();
        	objStatic.init(staticId,0,0,100,30,null,null);
        	objStatic.set_cssclass(obj.config.staticClass);
        	objStatic.set_visible(false);

        	obj.addChild(staticId,objStatic);
        	objStatic.show();

        	return objStatic;
        }

        /**
        * @description create dataset (temp dataset or target dataset)
        * @param obj : form, objGrid : drag grid, type : 'Temp' or 'Target'
        * @return objTempDs : dataset 'dsTemp' or 'dsTarget'
        */
        this.fnCreateTempDataset = function(obj,objGrid,type)
        {
        	//create dataset name ('ds' + type + random 4 number)
        	var sDatasetId = "ds" + type + nexacro.floor(Math.random(),4) * 10000;	// 0 ~ 9999

        	var objDs	= obj.config.orgDs;
        	var nColCnt = objDs.getColCount();

        	//create dataset
        	var objTempDs = new Dataset;
        	objTempDs.set_name(sDatasetId);
        	obj.addChild(sDatasetId, objTempDs);

        	objTempDs.set_enableevent(false);
        	var nColId, sColInfo,sColSize,sColType;
        	for(var i=0; i<nColCnt; i++)
        	{
        		nColId	 = objDs.getColID(i);
        		sColInfo = objDs.getColumnInfo(i);
        		sColSize = sColInfo.size;
        		sColType = sColInfo.type;
        		objTempDs.addColumn(nColId,sColType,sColSize);
        	}
        	objTempDs.set_enableevent(true);

        	var objTargetGrid = obj.config.targetGrid;

        	if(type == "Target")
        	{
        		objTargetGrid.set_enableevent(false);
        		objTargetGrid.set_binddataset(sDatasetId);
        		objTargetGrid.set_formats(objGrid.gridFormatInfo);
        		objTargetGrid.set_treeinitstatus("expand,all");
        		objTargetGrid.set_enableevent(true);
        	}else
        	{
        		//targetDs addColumn org level Info :  current level VS original level
        		var sOrgName = "orgLvl";
        		obj.config.targetDs.orgLevel = sOrgName;
        		obj.config.targetDs.addColumn(sOrgName,"String",256);
        	}

        	return objTempDs;
        }

        /**
        * @description tree grid drop --> tree copy to temp dataset
        * @param objGrid : drop grid, eRow : e.row
        * @return
        */
        this.fnCopyDropData = function(objGrid,eRow)
        {
        	var obj		 = objGrid.parent;
        	var dsOrg	 = obj.config.orgDs;
        	var dsTarget = obj.config.targetDs;
        	var dsTemp	 = obj.config.tempDs;
        	var grdTree	 = obj.config.orgGrid;
        	var grdTarget = obj.config.targetGrid;
        	var stDragImg = obj.config.stImg;

        	var i = 0;
        	var nRow = 0, nStart, nEnd = 0;

        	stDragImg.set_visible(false);

        	nStart = nEnd = grdTree.selectedRow;

        	//drop row position
        	grdTarget.targetStartRow	= eRow;

        	var nChildCount = nexacro.toNumber(grdTree.getTreeChildCount(nStart));
        	if (nChildCount > 0)
        	{
        		var sLvl = dsOrg.getColumn(nStart, obj.config.levelColumn);
        		var nSiblingRow = grdTree.getTreeSiblingRow(nStart);		//search the row of the same tree level

        		if (nSiblingRow > -1)
        		{
        			nSiblingRow--;
        		}else
        		{
        			nSiblingRow = dsOrg.getRowCount() - 1;
        		}
        		nEnd = nSiblingRow;
        	}

        	dsTemp.clearData();
        	dsTemp.set_enableevent(false);
        	for (i = nStart; i <= nEnd; i++)
        	{
        		nRow = dsTemp.addRow();
        		dsTemp.copyRow(nRow, dsOrg, i);
        	}
        	dsTemp.set_enableevent(true);

        	//copy to target dataset (insert row)
        	this.fnInsertDropData(obj);
        }

        /**
        * @description insert temp data to target grid
        * @param obj : form
        * @return
        */
        this.fnInsertDropData = function(obj)
        {
        	var dsOrg	  = obj.config.orgDs;
        	var dsTarget  = obj.config.targetDs;
        	var dsTemp	  = obj.config.tempDs;
        	var grdTree	  = obj.config.orgGrid;
        	var grdTarget = obj.config.targetGrid;

        	var nSelectedRow = grdTree.selectedRow;
        	var nTargetStart = grdTarget.targetStartRow;
        	var nTargetEnd	 = 0;

        	var nDeleteRow = 0;


        	//delete original dataset row 'm' : move (delete) , 'c' : copy (not original data remove)
        	if(obj.config.option == "m")
        	{
        		nDeleteRow = this.fnDeleteDropData(obj);
        	}

        	if(nSelectedRow < nTargetStart)
        	{
        		nTargetStart = nTargetStart - nDeleteRow;
        	}



        	//start target row rearrange

        	if(nTargetStart < -2)

        	{	//e.row < -2 : -9

        		if(dsTarget.getRowCount() < 1)

        		{	//row count 0 (no data)

        			nTargetStart = 0;

        		}else

        		{

        			nTargetStart = dsTarget.getRowCount();

        		}

        	}else if(nTargetStart < -2 && nTargetStart >= 0)

        	{	//e.row : -1 or -2

        		return;

        	}


        	nTargetEnd = nTargetStart + dsTemp.getRowCount();

        	var nLvl = dsTemp.getColumn(0,obj.config.levelColumn);						//current node level
        	var nTargetLv = dsTarget.getColumn(nTargetStart, obj.config.levelColumn);	//target node level

        	if(grdTree == grdTarget)
        	{	//same grid
        		if(!grdTarget.isTreeLeafRow(nTargetStart,false))
        		{
        			if(nLvl != nTargetLv)
        			{
        				nTargetLv ++;
        				nTargetStart ++;
        			}
        		}
        	}else
        	{	//other grid
        		var nOrgLvl;

        		if(take.isNull(nTargetLv))
        		{	//init level
        			nTargetLv = 0;
        			nOrgLvl	  = 0;
        		}else
        		{
        			nOrgLvl = dsTarget.getColumn(nTargetStart, dsTarget.orgLevel);
        		}

        		if(nTargetLv > nOrgLvl)
        		{
        			nTargetLv ++;
        			nTargetStart ++;
        		}
        	}

        	var nLvlGap = nLvl-nTargetLv;	//target level and temp(original) level gap

        	var nRow, nTargetRow;
        	dsTarget.set_enableevent(false);
        	for(var i = 0; i<dsTemp.getRowCount(); i++)
        	{
        		nTargetLv  = dsTemp.getColumn(i,obj.config.levelColumn);

        		nTargetRow = nTargetStart+i;

        		nRow = dsTarget.insertRow(nTargetRow);
        		dsTarget.copyRow(nRow, dsTemp, i);
        		dsTarget.setColumn(nRow, obj.config.levelColumn, nTargetLv - nLvlGap);
        		dsTarget.setColumn(nRow, dsTarget.orgLevel, nTargetLv);
        	}
        	dsTarget.set_enableevent(true);
        }

        /**
        * @description delete drag grid row (selected tree data)
        * @param obj : form
        * @return
        */
        this.fnDeleteDropData = function(obj)
        {
        	var dsOrg	  = obj.config.orgDs;
        	var dsTemp	  = obj.config.tempDs;
        	var grdTree	  = obj.config.orgGrid;

        	var nSelectedRow = grdTree.selectedRow;
        	var nRowGap		 = dsTemp.getRowCount();

        	var nDeleteStart = nSelectedRow;
        	var nDeleteEnd	 = nDeleteStart + nRowGap -1;
        	var nCount = 0;
        	for(var i = nDeleteEnd; i >= nDeleteStart; i--)
        	{
        		dsOrg.deleteRow(i);
        		nCount ++;
        	}

        	return nCount;
        }

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description form ondragmove event --> static component move with the mouse movement(position)
        */
        this.form_ondragmove = function(obj,e)
        {
        	obj.config.stImg.move(e.clientx + 15, e.clienty + 15);
        }

        /**
         * @description form ondrop event --> static component visible false
        */
        this.form_ondrop = function(obj,e)
        {
        	obj.config.stImg.set_visible(false);
        }

        /**
         * @description grid ondrag event --> save current seleced rowposition (obj.selectedRow)
        */
        this.grd_ondrag = function(obj,e)
        {
        	var objForm = obj.parent;
        	if (e.row > -1)
        	{
        		objForm.config.stImg.bringToFront();
        		objForm.config.stImg.set_text(obj.getCellText(e.row, e.cell));
        		objForm.config.stImg.set_visible(true);

        		obj.selectedRow = nexacro.toNumber(obj.selectstartrow);

        		return true;
        	}
        	return false;
        };

        /**
         * @description target grid ondrop event--> this.fnCopyDropData()
        */
        this.grd_ondrop = function(obj,e)
        {

        	/**	e.row information

        	-----------------------------------------------------

        	-9	: outside body row (empty space)

        	-2	: summary band

        	-1	: head band

        	0 ~	: selected row postion

        	*/


        	this.fnCopyDropData(obj,e.row);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("_smpTreeGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
