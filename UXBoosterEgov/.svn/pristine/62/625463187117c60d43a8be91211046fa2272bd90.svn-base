(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleCopy");
            this.set_titletext("(샘플)그리드복사");
            if (Form == this.constructor)
            {
                this._setFormPosition(990,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">2107003</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">2134012</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">2</Col></Row><Row><Col id=\"Column0\">2147004</Col><Col id=\"Column1\">3</Col><Col id=\"Column2\">한글테스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmpty", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMat", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdClip","10","36","292","129",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsExcel");
            obj.getSetter("takegrid").set("empty");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"아이템코드\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:Column1\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMlGroupTitle","10","0","280","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("단순복사 takegrid = empty");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staMlGroupTitle00","349","0","292","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("multirow takegrid = empty");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdClip00","349","36","292","129",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsExcel");
            obj.getSetter("takegrid").set("empty");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"아이템코드\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:Column1\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMlGroupTitle00_00","689","0","286","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("multiarea takegrid = empty");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdClip00_00","688","36","292","129",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsExcel");
            obj.getSetter("takegrid").set("empty");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"아이템코드\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:Column1\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:Column2\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMlGroupTitle01","10","420","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀 붙여넣기 takegrid = empty (Dataset onrowsetchanged 사용)");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdClip01","10","458","460",null,null,"10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsEmpty");
            obj.getSetter("takegrid").set("empty");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"49\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"아이템코드&#13;&#10;(수정가능)\"/><Cell col=\"1\" text=\"Column2&#13;&#10;(읽기전용)\"/><Cell col=\"2\" text=\"Column3&#13;&#10;(수정가능)\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CD\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:USER_ID\" edittype=\"readonly\"/><Cell col=\"2\" text=\"bind:USER_NM\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","8","246","462","148",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsExcel");
            obj.getSetter("takegrid").set("empty");
            obj.set_selecttype("multiarea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"아이템코드\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMlGroupTitle00_00_00","8","214","450","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("multiarea takegrid = empty + transaction (Grid.onlbuttonup 사용)");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","480","247","500","147",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsMat");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"USER_CD\"/><Cell col=\"1\" text=\"USER_ID\"/><Cell col=\"2\" text=\"USER_NM\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_CD\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","480","458","409","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("take.grid 에러 발생\r\n붙혀넣기 기능 대기");
            obj.set_background("#dbdbdb");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",990,690,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleCopy.xfdl", function() {
        this.sampleCopy_onload = function(obj,e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
        	{
        		//this.divDetail.form.grdMultilanguageInfo.clearEventHandler("onkeydown");
        	}
        };

        this.dsEmpty_onrowsetchanged = function(obj,e)
        {
        	if(obj.getRowCount() > 0){
        		this.fnSearchMatNm();
        	}
        };

        this.fnSearchMatNm = function(){

        	//UserManagement.userInfoList
        	take.tranSelect
        	(
        		this,
        		"Empty",
        		"UserManagement.userInfoList",
        		"dsEmpty",
        		"dsEmpty",
        		"",
        		"fnCallback"
        	);
        };

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
                case "searchMatNm" : //조회 콜백
        			//this.alert("엑셀 검증 완료");
                    break;
        		case "Empty" : //조회 콜백
        			//this.alert("조회 완료");
                    break;
            }
        };

        this.dsExcel_onrowposchanged = function(obj,e)
        {
        	trace('dsExcel_onrowposchanged');
        	this.fnSearchMatNm();
        };

        this.fvFnChanged = null;
        this.grdClip00_00_ondrag = function(obj,e)
        {
        	trace('drag true');
        	this.dsExcel.set_enableevent(false);
        	trace('drag ======>' + this.dsExcel.enableevent);

        	return true;
        };

        this.grdClip00_00_ondrop = function(obj,e)
        {
        	trace('drop');
        	this.dsExcel.set_enableevent(true);
        	trace('drop ======>' + this.dsExcel.enableevent);

        	return true;
        };

        this.grdClip00_00_00_onlbuttonup = function(obj,e)
        {
        	this.fnSearchMatNm();
        };

        this.Grid00_onlbuttonup = function(obj,e)
        {
        	this.fnSearchMat();
        };

        this.fnSearchMat = function(){
        	take.tranSelect
        	(
        		this,
        		"Empty",
        		"UserManagement.userInfoList",
        		"",
        		"dsMat",
        		"",
        		"fnCallback"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleCopy_onload,this);
            this.Grid00.addEventHandler("onlbuttonup",this.Grid00_onlbuttonup,this);
            this.dsEmpty.addEventHandler("onrowsetchanged",this.dsEmpty_onrowsetchanged,this);
        };
        this.loadIncludeScript("sampleCopy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
