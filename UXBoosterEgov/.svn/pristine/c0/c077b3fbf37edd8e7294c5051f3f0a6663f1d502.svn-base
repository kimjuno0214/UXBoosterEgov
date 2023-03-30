(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpSnippet");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"shortcut\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/><Column id=\"example\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staFileNm","5","5","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("js파일명 : ");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoad","342","5","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("js 파일 로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreate","btnLoad:3","5","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("생성");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtText",null,"40","600",null,"5","10",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","5","40",null,null,"txtText:5","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"345\"/><Column size=\"180\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"shortcut\"/><Cell col=\"2\" text=\"desc\"/><Cell col=\"3\" text=\"example\"/></Band><Band id=\"body\"><Cell text=\"bind:name\" autosizerow=\"limitmin\" wordWrap=\"char\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:shortcut\" autosizerow=\"limitmin\" wordWrap=\"char\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:desc\" autosizerow=\"limitmin\" wordWrap=\"char\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:example\" wordWrap=\"char\" autosizerow=\"limitmin\" edittype=\"text\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","btnCreate:3","5","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,832,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpSnippet.xfdl", function() {
        this.fv_sJsText = null;
        this.fv_sJsName = null;

        this.smpSnippet_onload = function(obj,e)
        {
        	//take.loadLibJs(this, "weberp.js");
        };

        this.btnCreate_onclick = function(obj,e)
        {
        	this.fnSnippets(this.dsList, this.fv_sJsName);
        };

        this.btnLoad_onclick = function(obj,e)
        {
        	this.FileDialog00.open("js load", FileDialog.LOAD);
        };

        this.FileDialog00_onclose = function(obj,e)
        {
            //for (var i=0, nLen=e.virtualfiles.length, objVFile; i<nLen; i++)
            //{
            //    objVFile = e.virtualfiles[i];
            //    objVFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);
            //    objVFile.open(null, VirtualFile.openRead);
            //}

            var objVFile = e.virtualfiles[0];
            objVFile.addEventHandler("onsuccess", this.FileDialog_VirtualFile_onsuccess, this);
            objVFile.open(null, VirtualFile.openRead);
        };

        this.FileDialog_VirtualFile_onsuccess = function(obj,e)
        {
            switch (e.reason)
            {
                case 1:
                    obj.read();
                    obj.getFileSize();
                    obj.close();
                    break;
                case 2:
                    trace("file close");
                    this.fnCreate(obj.filename.replace(".js",""));
                    break;
                case 3:
                    //obj.readLine();
                    this.fv_sJsText = e.textdata;
                    break;
                case 4:
                    obj.readLine();
                    break;
                case 9:
                    this.fv_sJsName = obj.filename.replace(".js","");
                    this.staFileNm.set_text("js파일명 : " + obj.filename);
                    break;
                default:
            }
        }

        this.btnDel_onclick = function(obj,e)
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        this.grdList_onkeydown = function(obj,e)
        {
        	if (e.keycode==46)
            {
                this.dsList.deleteRow(this.dsList.rowposition);
            }
        };

        this.fnCreate = function(objName)
        {
            var objFunc;
            var arrList = new Array();
            var sName, sDesc, sShortcut, sExample;
            var nSIdx, nEIdx;

            if (nexacro._Browser == "Runtime")
            {
                objFunc = eval(objName);
            } else {
                objFunc = window[objName];
            }

            for (var x in objFunc)
            {
                if (take.isFunction(objFunc[x]))
                {
                    sName = objName + "." + x;
                    sShortcut = objName + x;

                    nEIdx = this.fv_sJsText.indexOf(sName+" = function");
                    if (nEIdx<0)
                    {
                        trace("해당 파일에 " + sName + " 함수가 존재하지 않습니다. 다른 파일에 생성된 함수일 가능성이 있습니다.");
                        continue;
                    }

                    nSIdx = this.fv_sJsText.lastIndexOf("/*", nEIdx);
                    sDesc = this.fv_sJsText.substring(nSIdx, nEIdx);

                    nSIdx = nEIdx + sName.length + 11;
                    nEIdx = this.fv_sJsText.indexOf(")", nSIdx) + 1;
                    sExample = sName + this.fv_sJsText.substring(nSIdx, nEIdx)+";";
                    arrList.push([sName, sShortcut, sDesc, sExample]);
                }
            }

            this.fnSetDataset(arrList);
        };

        this.fnSnippets = function(objDs, sJsNm)
        {
            var nCnt;
            var sText;

            sText =  '<?xml version="1.0" encoding="utf-8"?>\n';
            sText += '<Snippets version="2.0">\n';
            sText += '  <Script>\n';
            sText += '    <Group name="'+ sJsNm.toUpperCase() +'">\n';

            nCnt = objDs.rowcount;

        //     for (var i=0; i<nCnt; i++)
        //     {
        //         sText += '      <Snippet ';
        //         sText += 'name="'        + arrList[i][0] + '" ';
        //         sText += 'shortcut="'    + arrList[i][1] + '" ';
        //         sText += 'description="' + arrList[i][2].replace(/"/g, "&quot;").replace(/\r/g, "&#13;").replace(/"/g, "&#10;") + '">\n';
        //         sText += arrList[i][3];
        //         sText += '</Snippet>\n';
        //     }

            for (var i=0; i<nCnt; i++)
            {
                sDesc = objDs.getColumn(i, "desc");
                sDesc = sDesc.replace(/&/g,  "&amp;")
                             .replace(/"/g,  "&quot;")
                             .replace(/'/g,  "&apos;")
                             .replace(/</g,  "&lt;")
                             .replace(/>/g,  "&gt;")
                             .replace(/\r/g, "&#13;")
                             .replace(/"/g,  "&#10;");

                sText += '      <Snippet ';
                sText += 'name="'        + objDs.getColumn(i, "name") + '" ';
                sText += 'shortcut="'    + objDs.getColumn(i, "shortcut") + '" ';
                sText += 'description="' + sDesc + '">';
                sText +=                   objDs.getColumn(i, "example") + '';
                sText +=       '</Snippet>\n';
            }

            sText += '    </Group>\n';
            sText += '      <Snippet name="do { } while();" shortcut="do" description="">';
            sText +=        'do {\n';
            sText +=        '$tab$$end$\n';
            sText +=        '} while();\n';
            sText +=       '</Snippet>\n';
            sText += '      <Snippet name="switch() { case : break..." shortcut="switch" description="">';
            sText +=        'switch($end$) {\n';
            sText +=        'case :\n';
            sText +=        '$tab$break;\n';
            sText +=        'case :\n';
            sText +=        '$tab$break;\n';
            sText +=        'default:\n';
            sText +=        '}\n';
            sText +=       '</Snippet>\n';
            sText += '      <Snippet name="while () {}" shortcut="while" description="">\n';
            sText +=        'while ($end$)\n';
            sText +=        '{\n';
            sText +=        '$tab$\n';
            sText +=        '}\n';
            sText +=     '</Snippet>\n';
            sText += '  </Script>\n';
            sText += '</Snippets>\n';

            this.txtText.set_value(sText);
        };

        this.fnSetDataset = function(arrList)
        {
            var nCnt, nRow;
            var objDs;

            nCnt = arrList.length;

            objDs = this.dsList;

            objDs.set_enableevent(false);

            for (var i=0; i<nCnt; i++)
            {
                nRow = objDs.addRow();
                objDs.setColumn(nRow, "name",     arrList[i][0]);
                objDs.setColumn(nRow, "shortcut", arrList[i][1]);
                objDs.setColumn(nRow, "desc",     arrList[i][2]);
                objDs.setColumn(nRow, "example",  arrList[i][3]);
            }

            objDs.set_rowposition(0);
            objDs.set_enableevent(true);

            alert(nCnt+"개 확인");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpSnippet_onload,this);
            this.btnLoad.addEventHandler("onclick",this.btnLoad_onclick,this);
            this.btnCreate.addEventHandler("onclick",this.btnCreate_onclick,this);
            this.grdList.addEventHandler("onkeydown",this.grdList_onkeydown,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
        };
        this.loadIncludeScript("smpSnippet.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
