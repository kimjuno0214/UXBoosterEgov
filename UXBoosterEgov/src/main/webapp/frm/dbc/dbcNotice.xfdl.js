(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcNotice");
            this.set_titletext("공지사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(354,315);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_ATTACH\" type=\"STRING\" size=\"256\"/><Column id=\"IMPORT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReadUser", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"READ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FIRST_READ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_READ_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdNotice01","0","0",null,null,"0","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_WF_trans");
            obj.set_autofittype("col");
            obj.set_binddataset("dsNotice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.parent.parent.fnSetTitle( currow, dataset.getColumn(currow, &apos;BOARD_TITLE&apos;) )\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:BOARD_TITLE\" cssclass=\"expr:dataset.getColumn( currow, &apos;IMPORT_YN&apos; ) == &apos;Y&apos; ? &apos;import&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:REG_DT\" color=\"#555555\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",354,315,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcNotice.xfdl", function() {
        this.fv_sTitle = null;
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = "M0028";

        this.dbcNotice_onload = function(obj,e)
        {
            if (this.parent.btran)
            {
                this.fnSearch();
            }
        };

        this.fnSearch = function()
        {
        	var arrNamespace = new Array();
        	arrNamespace.push("BoardManagement.boardInfoList");
        	arrNamespace.push("BoardManagement.boardReaduserList");

        	var arrOutDs = new Array();
        	arrOutDs.push("dsNotice");
        	arrOutDs.push("dsReadUser");

        	var sParam = "PROJECT_CD="+this.fv_sProjectCd;
        	sParam += " MENU_CD="+this.fv_sMenuCd;

        	this.dsNotice.clearData();
        	this.dsReadUser.clearData();

            take.tranSelect(this,"SearchNotice",arrNamespace,"dsSearch", arrOutDs, sParam, "fnCallback");
        }

        this.grdNotice_oncellclick = function(obj,e)
        {
        	var objDs 			= obj.getBindDataset();
        	var sBoardSeq 		= objDs.getColumn( objDs.rowposition, "BOARD_SEQ" );
        	var sBoardAttach 	= objDs.getColumn( objDs.rowposition, "BOARD_ATTACH" );

        	this.fnCallPopup(sBoardSeq, sBoardAttach, "CM010P02");
        };

        this.fnCallPopup = function(sBoardSeq, sBoardAttach, sPopForm)
        {
        	var arrParam = {
        					sBoardSeq 	 : sBoardSeq
        				  , sBoardAttach : sBoardAttach
        				  , sProjectCd	 : this.fv_sProjectCd
        				  , sMenuCd		 : this.fv_sMenuCd
        				  };

        	take.openPopup(this, sPopForm, "frm::mod/"+sPopForm+".xfdl", arrParam, "resizable=true", "", false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dbcNotice_onload,this);
            this.divMain.form.grdNotice01.addEventHandler("oncellclick",this.grdNotice_oncellclick,this);
        };
        this.loadIncludeScript("dbcNotice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
