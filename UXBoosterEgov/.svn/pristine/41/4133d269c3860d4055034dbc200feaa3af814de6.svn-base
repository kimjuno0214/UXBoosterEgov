(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpNewFile");
            this.set_titletext("(샘플)파일UI기능");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"fullName\" type=\"STRING\" size=\"256\"/><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"extName\" type=\"STRING\" size=\"256\"/><Column id=\"filePath\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/><Column id=\"fileType\" type=\"STRING\" size=\"256\"/><Column id=\"lastModified\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransferM", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransferS", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnFileMulti","428","30","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일 선택 [멀티]");
            this.addChild(obj.name, obj);

            obj = new Button("btnDragFileMulti","541","30","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일 drag&drop 세팅 [멀티]");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFile","5","btnFileMulti:3","696","278",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsFile");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"288\"/><Column size=\"239\"/><Column size=\"80\"/><Column size=\"244\"/><Column size=\"115\"/><Column size=\"137\"/><Column size=\"165\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"파일전체명\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\" text=\"파일 경로\"/><Cell col=\"4\" text=\"파일 사이즈(M)\"/><Cell col=\"5\" text=\"파일 타입\"/><Cell col=\"6\" text=\"마지막 수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:fullName\"/><Cell col=\"1\" text=\"bind:fileName\"/><Cell col=\"2\" text=\"bind:extName\"/><Cell col=\"3\" text=\"bind:filePath\"/><Cell col=\"4\" text=\"bind:fileSize\"/><Cell col=\"5\" text=\"bind:fileType\"/><Cell col=\"6\" text=\"bind:lastModified\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFile","98","390","327","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSingle","428","390","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일 선택 [단건]");
            this.addChild(obj.name, obj);

            obj = new Button("btnDragFileSingle","541","390","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일 drag&drop 세팅 [단건]");
            this.addChild(obj.name, obj);

            obj = new Static("staFile","5","390","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("파일명");
            obj.set_cssclass("sta_WF_textR");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgView","5","edtFile:3","422","330",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("미리보기");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("첨부파일 [멀티]");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00","0","350","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("첨부파일 [단건]");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpTakeNewFile.xfdl", function() {
        //멀티 파일 선택
        this.btnFileMulti_onclick = function(obj,e)
        {
        	var objOption = {"multi":true, "size":10, "accept":["doc","pptx","xlsx"]};

            this.FileUpTransferM.takeOpenFile(this, "fileAddMulti01", "fnFileMultiCallBack", this.dsFile, objOption);
        };

        //멀티 파일 drag&drop 세팅
        this.btnDragFileMulti_onclick = function(obj,e)
        {
        	var objOption = {"multi":true, "size":10, "accept":["doc","pptx","xlsx"]};

            this.FileUpTransferM.setTakeDragFile(this, "fileAddMulti01", "fnFileMultiCallBack", this.grdFile, this.dsFile, objOption);
        };

        //멀티 파일 콜백
        this.fnFileMultiCallBack = function(sId, objRtn)
        {
            trace(sId + " / " + objRtn.result);

            if (objRtn.result)
            {
                trace(objRtn.message);
                console.dir(objRtn);
            } else {
                take.alert(this, "info", objRtn.message, "");
                return;
            }
        }

        //싱글[단건] 파일 선택
        this.btnFileSingle_onclick = function(obj,e)
        {
        	var objOption = {"multi":false, "size":10, "accept":["png"]};

            this.FileUpTransferS.takeOpenFile(this, "fileAddSingle01", "fnFileSingleCallBack", this.dsFile, objOption);
        };

        //싱글[단건] 파일 drag&drop 세팅
        this.btnDragFileSingle_onclick = function(obj,e)
        {
        	var objOption = {"multi":false, "size":10, "accept":["png"]};

            this.FileUpTransferS.setTakeDragFile(this, "fileAddSingle01", "fnFileSingleCallBack", this.imgView, this.dsFile, objOption);
        };

        //싱글[단건] 파일 콜백
        this.fnFileSingleCallBack = function(sId, objRtn)
        {
            trace(sId + " / " + objRtn.result);

            if (objRtn.result)
            {
                trace(objRtn.message);
                console.dir(objRtn);

                if (take.nvl(objRtn[0].fullName,"")!="")
                {
                    //에디터에 파일명 표기
                    this.edtFile.set_value(objRtn[0].fullName);

                    //바이너리파일 가져오기
                    this.FileUpTransferS.getBinary(this, objRtn[0].fullName, "fnBinaryCallBack");
                }
            } else {
                take.alert(this, "info", objRtn.message, "");
                return;
            }
        }

        //바이너리 가져오기 콜백
        this.fnBinaryCallBack = function(sFullName, objRtn)
        {
            trace("파일명 : " + sFullName);

            if (objRtn.result)
            {
                trace(objRtn.binary);

                //바이너리 세팅
                this.imgView.set_image(objRtn.binary);
            } else {
                take.alert(this, "info", objRtn.message, "");
                return;
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnFileMulti.addEventHandler("onclick",this.btnFileMulti_onclick,this);
            this.btnDragFileMulti.addEventHandler("onclick",this.btnDragFileMulti_onclick,this);
            this.btnFileSingle.addEventHandler("onclick",this.btnFileSingle_onclick,this);
            this.btnDragFileSingle.addEventHandler("onclick",this.btnDragFileSingle_onclick,this);
        };
        this.loadIncludeScript("smpTakeNewFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
