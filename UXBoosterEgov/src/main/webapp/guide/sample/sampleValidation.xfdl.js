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
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","15","130","115","57",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","27","23","443","81",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTest01","42","19","166","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTest02","226","19","166","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("Grid00","206","122","208","96",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtTest01","value","Dataset00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtTest02","value","Dataset00","Column1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleValidation.xfdl", function() {
        // 1. 폼에 validation object 생성
        //    - object 구성
        //         체크그룹아이디,
        //         컴포넌트 object,
        //         Comp:Properti/Grid:Cell/Dataset:Column 명,
        //         null check,
        //         타입(number, date등)체크,
        //         체크수(문자는 자릿수, 숫자는 구간[form,to]),
        //         User function 명(생략가능)
        //      ex) this.takeval.add("Search", this.divSearch.edtTest01, "value", true, "number", [0,100], this.fnUserCheck01());
        //          this.takeval.add("Save", this.divSearch.edtTest02, "text", true, "string", [0,6], this.fnUserCheck02());
        //          this.takeval.add("Search", this.divList.grdList, "11", true, "string", [0,4] );
        //          this.takeval.add("Save", this.dsList, "Column01", true, "number", "" );
        //
        // 2. validation 실행 함수 인자로 validation 그룹아이디를 넣는다 없으면 모두 시행
        //    validtion 그룹이 있을경우 그룹별로 실행, 예를 들어 조회시면 그룹아이디는
        //    "Search"(임의 그룹 아이디) 저장시면 그룹아이디는 "Save"등으로 표현
        //    ex) this.takeval.check("Search");
        //        this.takeval.check("Save");
        //
        // 3. validation object 순서대로 순차적으로 체크
        //
        // 4. validation에 User function을 사용할 수 있도록하여 호출해줌
        //    User function이 있는경우 기본 체크 후 User function 호출

        this.form_onload = function(obj,e)
        {
        	takeval.add(this, "Search", this.divSearch.form.edtTest01, "검색조건01", "value", true, "number", [0,100], "fnUserCheck01", true);
            takeval.add(this, "Search", this.divSearch.form.edtTest02, "검색조건02", "value", true, "string", [2,6], "fnUserCheck02");

            takeval.add(this, "Save", this.divSearch.form.edtTest01, "저장체크01", "value", true, "string", "", "");
            takeval.add(this, "Save", this.divSearch.form.edtTest02, "저장체크02", "value", true, "string", "", "");

            takeval.add(this, "Grid", this.Grid00, "검색조건01", "0", true, "number", [0,100], "fnUserCheck01", true);
            takeval.add(this, "Grid", this.Grid00, "검색조건02", "1", true, "string", [2,6], "fnUserCheck02");

            takeval.add(this, "Dataset", this.Dataset00, "검색조건01", "Column0", true, "number", [0,100], "fnUserCheck01", true);
            takeval.add(this, "Dataset", this.Dataset00, "검색조건02", "Column1", true, "string", [2,6], "fnUserCheck02");
        };

        this.Button00_onclick = function(obj,e)
        {
         	takeval.print(this, "Search");
        //
        //     trace("getGroupList : " + takeval.getGroupList(this));
        //
        //     console.dir(takeval.getGroupArray(this, "Search"));
        //     trace("getGroupArray : " + takeval.getGroupArray(this, "Search"));

        //    takeval.check(this, "Search");

        //    takeval.check(this, "Grid");

              takeval.check(this, "Save");
        };

        this.fnUserCheck01 = function(objComp, sChkProp, sName)
        {
            alert("fnUserCheck01(" + objComp + "," + sChkProp + "," + sName + ")");

            return true;
        }

        this.fnUserCheck02 = function(objComp, sChkProp, sName)
        {
            alert("fnUserCheck02(" + objComp + "," + sChkProp + "," + sName + ")");

            return true;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("sampleValidation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
