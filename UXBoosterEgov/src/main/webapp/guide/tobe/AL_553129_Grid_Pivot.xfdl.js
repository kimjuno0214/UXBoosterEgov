(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Grid_Pivot");
            this.set_titletext("New Form");
            this.getSetter("classname").set("Grid_Pivot");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRANCH\" size=\"256\" type=\"STRING\"/><Column id=\"GUBUN\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200807\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200808\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200809\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200810\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200811\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200812\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200901\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200902\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200903\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200904\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200905\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200906\" size=\"256\" type=\"STRING\"/><Column id=\"COL_200907\" size=\"256\" type=\"STRING\"/><Column id=\"COL_TEST\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"BRANCH\">전체</Col><Col id=\"GUBUN\">A</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트1</Col></Row><Row><Col id=\"BRANCH\">전체</Col><Col id=\"GUBUN\">B</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트2</Col></Row><Row><Col id=\"BRANCH\">전체</Col><Col id=\"GUBUN\">C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트3</Col></Row><Row><Col id=\"BRANCH\">전체</Col><Col id=\"GUBUN\">B-C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트4</Col></Row><Row><Col id=\"BRANCH\">강남지점</Col><Col id=\"GUBUN\">A</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트5</Col></Row><Row><Col id=\"BRANCH\">강남지점</Col><Col id=\"GUBUN\">B</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트6</Col></Row><Row><Col id=\"BRANCH\">강남지점</Col><Col id=\"GUBUN\">C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트7</Col></Row><Row><Col id=\"BRANCH\">강남지점</Col><Col id=\"GUBUN\">B-C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트8</Col></Row><Row><Col id=\"BRANCH\">중앙지점</Col><Col id=\"GUBUN\">A</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트9</Col></Row><Row><Col id=\"BRANCH\">중앙지점</Col><Col id=\"GUBUN\">B</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트10</Col></Row><Row><Col id=\"BRANCH\">중앙지점</Col><Col id=\"GUBUN\">C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트11</Col></Row><Row><Col id=\"BRANCH\">중앙지점</Col><Col id=\"GUBUN\">B-C</Col><Col id=\"COL_200807\">1</Col><Col id=\"COL_200808\">2</Col><Col id=\"COL_200809\">3</Col><Col id=\"COL_200810\">4</Col><Col id=\"COL_200811\">5</Col><Col id=\"COL_200812\">6</Col><Col id=\"COL_200901\">7</Col><Col id=\"COL_200902\">8</Col><Col id=\"COL_200903\">9</Col><Col id=\"COL_200904\">10</Col><Col id=\"COL_200905\">11</Col><Col id=\"COL_200906\">12</Col><Col id=\"COL_200907\">13</Col><Col id=\"COL_TEST\">bind 테스트12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DispDate", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" size=\"256\" type=\"STRING\"/><Column id=\"DISP_HEAD1\" size=\"256\" type=\"STRING\"/><Column id=\"DISP_HEAD2\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"YYYYMM\">200807</Col><Col id=\"DISP_HEAD1\">08년 3분기</Col><Col id=\"DISP_HEAD2\">7월</Col></Row><Row><Col id=\"YYYYMM\">200808</Col><Col id=\"DISP_HEAD1\">08년 3분기</Col><Col id=\"DISP_HEAD2\">8월</Col></Row><Row><Col id=\"YYYYMM\">200809</Col><Col id=\"DISP_HEAD1\">08년 3분기</Col><Col id=\"DISP_HEAD2\">9월</Col></Row><Row><Col id=\"YYYYMM\">200810</Col><Col id=\"DISP_HEAD1\">08년 4분기</Col><Col id=\"DISP_HEAD2\">10월</Col></Row><Row><Col id=\"YYYYMM\">200811</Col><Col id=\"DISP_HEAD1\">08년 4분기</Col><Col id=\"DISP_HEAD2\">11월</Col></Row><Row><Col id=\"YYYYMM\">200812</Col><Col id=\"DISP_HEAD1\">08년 4분기</Col><Col id=\"DISP_HEAD2\">12월</Col></Row><Row><Col id=\"YYYYMM\">200901</Col><Col id=\"DISP_HEAD1\">09년 1분기</Col><Col id=\"DISP_HEAD2\">1월</Col></Row><Row><Col id=\"YYYYMM\">200902</Col><Col id=\"DISP_HEAD1\">09년 1분기</Col><Col id=\"DISP_HEAD2\">2월</Col></Row><Row><Col id=\"YYYYMM\">200903</Col><Col id=\"DISP_HEAD1\">09년 1분기</Col><Col id=\"DISP_HEAD2\">3월</Col></Row><Row><Col id=\"YYYYMM\">200904</Col><Col id=\"DISP_HEAD1\">09년 2분기</Col><Col id=\"DISP_HEAD2\">4월</Col></Row><Row><Col id=\"YYYYMM\">200905</Col><Col id=\"DISP_HEAD1\">09년 2분기</Col><Col id=\"DISP_HEAD2\">5월</Col></Row><Row><Col id=\"YYYYMM\">200906</Col><Col id=\"DISP_HEAD1\">09년 2분기</Col><Col id=\"DISP_HEAD2\">6월</Col></Row><Row><Col id=\"YYYYMM\">200907</Col><Col id=\"DISP_HEAD1\">09년 3분기</Col><Col id=\"DISP_HEAD2\">7월</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Sample","24","30","994","354",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" colspan=\"2\" text=\"구분\"/></Band><Band id=\"body\"><Cell text=\"bind:BRANCH\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:GUBUN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","42","392","111","49",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Click");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_List");
            this._addPreloadList("data","","ds_DispDate");
        };
        
        // User Script
        this.registerScript("AL_553129_Grid_Pivot.xfdl", function() {

        this.Button00_onclick = function(obj,  e)
        {
        	var v_Formats = "";
        	var v_Columns = "";
        	var v_Rows = "";
        	var v_BandHead = "";
        	var v_BandBody = "";

        	v_Columns += '<Column size="80" />\n';
        	v_Columns += '<Column size="100" />\n';

        	v_Rows += '<Row size="23" band="head" />\n';
        	v_Rows += '<Row size="23" band="head" />\n';
        	v_Rows += '<Row size="20" />\n';

        	v_BandHead += '<Cell rowspan="2" colspan="2" text="구분"/>\n';

        	v_BandBody += '<Cell text="bind:BRANCH" suppress="1"/>\n';
        	v_BandBody += '<Cell col="1" text="bind:GUBUN"/>\n';

        	// 포맷 생성
        	var v_HeadText = '';
        	var v_HeadColIdx = 2;
        	var v_BodyColIdx = 2;

        	for (var i=0; i< this.ds_DispDate.getRowCount(); i++) {

        		// Column 생성
        		v_Columns += '<Column size="60" />\n';

        		// Head 생성
        		if (v_HeadText != this.ds_DispDate.getColumn(i, "DISP_HEAD1")) {
        			v_HeadText = this.ds_DispDate.getColumn(i, "DISP_HEAD1");

        			var v_Colspan = this.ds_DispDate.getCaseCount("DISP_HEAD1=='" + v_HeadText + "'");
        		//	trace(v_Colspan);
        			// Row 1
        			v_BandHead += '<Cell col="'+v_HeadColIdx+'" colspan="'+v_Colspan+'" text="'+v_HeadText+'"/>\n';

        			// Row 2
        			for (var j=i; j< this.ds_DispDate.getRowCount(); j++) {
        				if (v_HeadText == this.ds_DispDate.getColumn(j, "DISP_HEAD1")) {
        					trace("headColindex====> " + v_HeadColIdx);
        					v_BandHead += '<Cell row="1" col="'+v_HeadColIdx+'" text="'+this.ds_DispDate.getColumn(j, "DISP_HEAD2")+'"/>\n';
        					v_HeadColIdx++;
        				}
        			}
        		}

        		// Body 생성
        		v_BandBody += '<Cell style="align:right;" col="'+v_BodyColIdx+'" displaytype="number" text="bind:COL_'+this.ds_DispDate.getColumn(i, "YYYYMM")+'"/>\n';
        		v_BodyColIdx++;
        	}

        	v_Formats = '<Formats>\n';
        	v_Formats += '<Format id="default">\n';
        	v_Formats += '<Columns>\n';
        	v_Formats += v_Columns;
        	v_Formats += '</Columns>\n';
        	v_Formats += '<Rows>\n';
        	v_Formats += v_Rows;
        	v_Formats += '</Rows>\n';
        	v_Formats += '<Band id="head">\n';
        	v_Formats += v_BandHead;
        	v_Formats += '</Band>\n';
        	v_Formats += '<Band id="body">\n';
        	v_Formats += v_BandBody;
        	v_Formats += '</Band>\n';
        	v_Formats += '</Format>\n';
        	v_Formats += '</Formats>\n';

        	//trace(v_Formats);
        	this.grd_Sample.set_enableredraw(false);
        	this.grd_Sample.set_formats(v_Formats);
        	this.grd_Sample.set_enableredraw(true);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("AL_553129_Grid_Pivot.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
