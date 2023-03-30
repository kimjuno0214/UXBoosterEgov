(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleValidation");
            this.set_titletext("validation");
            if (Form == this.constructor)
            {
                this._setFormPosition(1140,1020);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnComp","30","900","190","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("takeval.checkComp(폼류)");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","15","229","585","71",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("staTest01T","7","19","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("입력 1");
            obj.set_cssclass("sta_WF_th01_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTest01","staTest01T:3","19","90","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("Div00","168","18","170","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTest02T","7","0","50","25",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("입력 2");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","staTest02T:3","0","80","25",null,null,null,null,null,null,this.divSearch.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.form.Div00.addChild(obj.name, obj);

            obj = new Static("staTest02T","337","19","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("입력 3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTest02","staTest02T:3","20","80","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("edt_WF_essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTest03","480","20","80","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("edt_WF_essential");
            obj.getSetter("valname").set("입력4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","83","505","96",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Column0\" cssclass=\"grd_WF_essential\"/><Cell col=\"1\" colspan=\"2\" text=\"확인\"/><Cell row=\"1\" col=\"1\" cssclass=\"grd_WF_essential\" text=\"Column01\"/><Cell row=\"1\" col=\"2\" cssclass=\"grd_WF_essential\" text=\"Column02\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","380",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("벨리데이션");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint","30","525","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("takeval.print()");
            this.addChild(obj.name, obj);

            obj = new Static("staPrintT","10","455","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("- 벨리데이션 항목 확인");
            this.addChild(obj.name, obj);

            obj = new Static("staAddT","10","325","190","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("- 벨리데이션 개별 항목 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","30","395","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("takeval.add()");
            this.addChild(obj.name, obj);

            obj = new Static("staPrintInfo","24","485","466","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("takeval.print(현재폼, 벨리데이션그룹아이디)  ex) takeval.print(this, \"Search\");");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","195","354","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("벨리데이션 대상 (검색 or 디테일 입력)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","15","49","354","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("그리드");
            this.addChild(obj.name, obj);

            obj = new Static("staPrintInfo00","24","355","466","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("takeval.print(현재폼, 벨리데이션그룹아이디)  ex) takeval.print(this, \"Search\");");
            this.addChild(obj.name, obj);

            obj = new Static("staInfo","640","50","494","360",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("1. 폼에 validation object 생성\r\n   - object 구성\r\n        체크그룹아이디,\r\n        컴포넌트 object,\r\n        Comp:Properti/Grid:Cell/Dataset:Column 명,\r\n        null check,\r\n        타입(number, date등)체크,\r\n        체크수(문자는 자릿수, 숫자는 구간[form,to])\r\n     ex) takeval.add(\"Search\", this.divSearch.edtTest01, \"value\", true, \"number\", [0,100]);\r\n         takeval.add(\"Save\", this.divSearch.edtTest02, \"text\", true, \"string\", [0,6]);\r\n         takeval.add(\"Search\", this.divList.grdList, \"11\", true, \"string\", [0,4] );\r\n         takeval.add(\"Save\", this.dsList, \"Column01\", true, \"number\", \"\" );\r\n \r\n2. validation 실행 함수 인자로 validation 그룹아이디를 넣는다 없으면 모두 시행\r\n   validtion 그룹이 있을경우 그룹별로 실행, 예를 들어 조회시면 그룹아이디는\r\n   \"Search\"(임의 그룹 아이디) 저장시면 그룹아이디는 \"Save\"등으로 표현\r\n   ex) this.takeval.check(\"Search\");\r\n       this.takeval.check(\"Save\");\r\n        \r\n3. validation object 순서대로 순차적으로 체크");
            obj.set_wordWrap("char");
            obj.set_cssclass("edt_WF_essential");
            this.addChild(obj.name, obj);

            obj = new Static("staPrintT00","10","585","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("- 벨리데이션 체크");
            this.addChild(obj.name, obj);

            obj = new Static("staPrintInfo01","24","615","466","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("takeval.check(현재폼, 벨리데이션그룹아이디)  ex) takeval.check(this, \"Search\");");
            this.addChild(obj.name, obj);

            obj = new Button("btnCheck","30","655","140","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("takeval.check()");
            this.addChild(obj.name, obj);

            obj = new Static("staPrintT00_00","10","715","260","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("- 폼(Div, Form), Grid류 벨리데이션 전체 체크");
            this.addChild(obj.name, obj);

            obj = new Static("staPrintInfo01_00","24","745","526","135",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("takeval.checkComp(현재폼, 벨리데이션 체크할 폼[div,form]류 또는 그리드 컴포넌트)  \r\n\r\n폼형 컴포넌트의 내부(자식) 컴포넌트중 필수 CSS가 적용된 컴포넌트의 벨리데이션 체크\r\n\r\nex) takeval.checkComp(this, this.divSearch);\r\n      takeval.checkComp(this, this.Grid00);");
            this.addChild(obj.name, obj);

            obj = new Button("btnCompGrid","230","900","190","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("takeval.checkComp(그리드)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.Div00.form
            obj = new Layout("default","",0,0,this.divSearch.form.Div00.form,function(p){});
            this.divSearch.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1140,1020,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtTest01","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.Div00.form.Edit00","value","Dataset00","Column2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtTest02","value","Dataset00","Column1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtTest03","value","Dataset00","Column3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpValidation.xfdl", function() {
        // 1. 폼에 validation object 생성
        //    - object 구성
        //         체크그룹아이디,
        //         컴포넌트 object,
        //         Comp:Properti/Grid:Cell/Dataset:Column 명,
        //         null check,
        //         타입(number, date등)체크,
        //         체크수(문자는 자릿수, 숫자는 구간[form,to]),
        //         Byte 체크 여부 (true,false) 생략가능
        //
        //      ex) takeval.add("Search", this.divSearch.edtTest01, "value", true, "number", [0,100]);
        //          takeval.add("Save", this.divSearch.edtTest02, "text", true, "string", [0,6]);
        //          takeval.add("Search", this.divList.grdList, "11", true, "string", [0,4] );
        //          takeval.add("Save", this.dsList, "Column01", true, "number", "" );
        //
        // 2. validation 실행 함수 인자로 validation 그룹아이디를 넣는다 없으면 모두 시행
        //    validtion 그룹이 있을경우 그룹별로 실행, 예를 들어 조회시면 그룹아이디는
        //    "Search"(임의 그룹 아이디) 저장시면 그룹아이디는 "Save"등으로 표현
        //    ex) this.takeval.check("Search");
        //        this.takeval.check("Save");
        //
        // 3. validation object 순서대로 순차적으로 체크

        this.form_onload = function(obj,e)
        {
            //Onload 또는 fnInit에서 추가하는 것을 추천합니다.

            //Search 그룹
        	//takeval.add(this, "Search", this.divSearch.form.edtTest01, "검색조건01", "value", true, "number", [0,100]);
            //takeval.add(this, "Search", this.divSearch.form.edtTest02, "검색조건02", "value", true, "string", [2,6]);

            //Save 그룹
            //takeval.add(this, "Save", this.divSearch.form.edtTest01, "저장체크01", "value", true, "string", "");
            //takeval.add(this, "Save", this.divSearch.form.edtTest02, "저장체크02", "value", true, "string", "");

            //Grid 그룹
            //takeval.add(this, "Grid", this.Grid00, "검색조건01", "0", true, "number", [0,100]);
            //takeval.add(this, "Grid", this.Grid00, "검색조건02", "1", true, "string", [2,6]);

            //Dataset 그룹
            //takeval.add(this, "Dataset", this.Dataset00, "검색조건01", "Column0", true, "number", [0,100]);
            //takeval.add(this, "Dataset", this.Dataset00, "검색조건02", "Column1", true, "string", [2,6]);
        };


        this.btnAdd_onclick = function(obj,e)
        {
            //그룹내에 컴포넌트는 조합 하여 사용 가능합니다.

            //Search 그룹
        	takeval.add(this, "Search", this.divSearch.form.edtTest01, "검색조건01", "value", true, "number", [0,100]);
            takeval.add(this, "Search", this.divSearch.form.edtTest02, "검색조건02", "value", true, "string", [2,6],true);

            //Save 그룹
            //takeval.add(this, "Save", this.divSearch.form.edtTest01, "저장체크01", "value", true, "string", "");
            //takeval.add(this, "Save", this.divSearch.form.edtTest02, "저장체크02", "value", true, "string", "");

            //Grid 그룹
            //takeval.add(this, "Grid", this.Grid00, "검색조건01", "0", true, "number", [0,100]);
            //takeval.add(this, "Grid", this.Grid00, "검색조건02", "1", true, "string", [2,6]);

            //Dataset 그룹
            //takeval.add(this, "Dataset", this.Dataset00, "검색조건01", "Column0", true, "number", [0,100]);
            //takeval.add(this, "Dataset", this.Dataset00, "검색조건02", "Column1", true, "string", [2,6]);
        };

        this.btnPrint_onclick = function(obj,e)
        {
            //Search 그룹
        	takeval.print(this, "Search");

            //Save 그룹
        	//takeval.print(this, "Save");

            //Grid 그룹
        	//takeval.print(this, "Grid");

            //Dataset 그룹
        	//takeval.print(this, "Dataset");

        };

        this.btnCheck_onclick = function(obj,e)
        {
            //Search 그룹 체크 : true/false로 리턴
            if (takeval.check(this, "Search"))
            {
                alert("벨리데이션 성공");
            } else {
                alert("벨리데이션 실패");
            }

            //Save 그룹 체크 : true/false로 리턴
            //if (takeval.check(this, "Save"))
            //{
            //    alert("벨리데이션 성공");
            //} else {
            //    alert("벨리데이션 실패");
            //}


            //Grid 그룹 체크 : true/false로 리턴
            //if (takeval.check(this, "Grid"))
            //{
            //    alert("벨리데이션 성공");
            //} else {
            //    alert("벨리데이션 실패");
            //}

            //Dataset 그룹 체크 : true/false로 리턴
            //if (takeval.check(this, "Dataset"))
            //{
            //    alert("벨리데이션 성공");
            //} else {
            //    alert("벨리데이션 실패");
            //}
        };

        this.btnComp_onclick = function(obj,e)
        {
        	//폼형 컴포넌트의 내부(자식) 컴포넌트중 필수 CSS가 적용된 컴포넌트의 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,            //현재 Form Object
                    this.divSearch,	 //벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    ""           	 //필수 입력 css값
                );

            if (bRtn)
            {
                alert("divSearch 벨리데이션 성공");
            } else {
                alert("divSearch 벨리데이션 실패");
            }

            //user프로퍼티로 세팅할경우
            //edtTest03.validation='{"name":"test", "prop":"text","nullchk":true, "type":"string"}';
        };

        this.btnCompGrid_onclick = function(obj,e)
        {
        	//폼형 컴포넌트의 내부(자식) 컴포넌트중 필수 CSS가 적용된 컴포넌트의 벨리데이션 체크
            var bRtn =
                takeval.checkComp(
                    this,            //현재 Form Object
                    this.Grid00,	 //벨리데이션 대상 컴포넌트 (Grid 및 Form류[this,div,tabpase])
                    ""           	 //필수 입력 css값
                );

            if (bRtn)
            {
                alert("Grid00 벨리데이션 성공");
            } else {
                alert("Grid00 벨리데이션 실패");
            }
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnComp.addEventHandler("onclick",this.btnComp_onclick,this);
            this.btnPrint.addEventHandler("onclick",this.btnPrint_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnCheck.addEventHandler("onclick",this.btnCheck_onclick,this);
            this.btnCompGrid.addEventHandler("onclick",this.btnCompGrid_onclick,this);
        };
        this.loadIncludeScript("smpValidation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
