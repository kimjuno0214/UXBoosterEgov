(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpForeach");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,659);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"userCd\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"255\"/><Column id=\"userNm\" type=\"STRING\" size=\"255\"/><Column id=\"userBirthday\" type=\"STRING\" size=\"255\"/><Column id=\"userEmail\" type=\"STRING\" size=\"255\"/><Column id=\"userMobile\" type=\"STRING\" size=\"255\"/><Column id=\"userTel\" type=\"STRING\" size=\"255\"/><Column id=\"userFax\" type=\"STRING\" size=\"255\"/><Column id=\"postCd\" type=\"STRING\" size=\"255\"/><Column id=\"userAddr\" type=\"STRING\" size=\"255\"/><Column id=\"deptCd\" type=\"STRING\" size=\"255\"/><Column id=\"userStatus\" type=\"STRING\" size=\"255\"/><Column id=\"useYn\" type=\"STRING\" size=\"255\"/><Column id=\"agreeYn\" type=\"STRING\" size=\"255\"/><Column id=\"lastLoginDt\" type=\"STRING\" size=\"255\"/><Column id=\"pwChangeDt\" type=\"STRING\" size=\"255\"/><Column id=\"loginBrowser\" type=\"STRING\" size=\"255\"/><Column id=\"loginIp\" type=\"STRING\" size=\"255\"/><Column id=\"joinDate\" type=\"STRING\" size=\"255\"/><Column id=\"validStartDate\" type=\"STRING\" size=\"255\"/><Column id=\"validEndDate\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"sDeptCd\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sDeptCd\">D0001</Col></Row><Row><Col id=\"sDeptCd\">D0002</Col></Row><Row><Col id=\"sDeptCd\">D0003</Col></Row><Row><Col id=\"sDeptCd\">D0004</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnParam","58","4","194","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Foreash Param");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","10","80",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autosizingtype("row");
            obj.set_autoenter("select");
            obj.getSetter("takegrid").set("all");
            obj.set_cellsizingtype("col");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"생년월일\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"모바일\"/><Cell col=\"5\" text=\"유선전화\"/><Cell col=\"6\" text=\"팩스\"/><Cell col=\"7\" text=\"우편번호\"/><Cell col=\"8\" text=\"주소\"/><Cell col=\"9\" text=\"부서코드\"/><Cell col=\"10\" text=\"상태\"/><Cell col=\"11\" text=\"사용유무\"/><Cell col=\"12\" text=\"동의유무\"/><Cell col=\"13\" text=\"로그인일자\"/><Cell col=\"14\" text=\"비밀번호 변경일자\"/><Cell col=\"15\" text=\"로그인 브라우저\"/><Cell col=\"16\" text=\"로그인 IP\"/><Cell col=\"17\" text=\"가입 일자\"/><Cell col=\"18\" text=\"유효시작일자\"/><Cell col=\"19\" text=\"유효종료일자\"/></Band><Band id=\"body\"><Cell text=\"bind:userId\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"1\" text=\"bind:userNm\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:userBirthday\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:userEmail\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:userMobile\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"5\" text=\"bind:userTel\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"6\" text=\"bind:userFax\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"7\" text=\"bind:postCd\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"8\" text=\"bind:userAddr\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"9\" text=\"bind:deptCd\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"10\" text=\"bind:userStatus\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"11\" text=\"bind:useYn\" autosizerow=\"limitmin\" wordWrap=\"char\"/><Cell col=\"12\" text=\"bind:agreeYn\" autosizerow=\"limitmin\" textAlign=\"center\" wordWrap=\"char\"/><Cell col=\"13\" text=\"bind:lastLoginDt\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"14\" text=\"bind:pwChangeDt\" wordWrap=\"char\" autosizerow=\"limitmin\"/><Cell col=\"15\" text=\"bind:loginBrowser\" wordWrap=\"char\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:loginIp\" autosizerow=\"limitmin\"/><Cell col=\"17\" text=\"bind:joinDate\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:validStartDate\" autosizerow=\"limitmin\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:validEndDate\" autosizerow=\"limitmin\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","10","50",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용자 목록");
            obj.set_cssclass("sta_WF_title02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDataset","270","4","194","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Foreash Dataset");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,659,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpTakeTranForeach.xfdl", function() {
        this.smpForeach_onload = function(obj,e)
        {
            if (take.formOnLoad(this))
            {

            }
        };

        this.btnParam_onclick = function(obj,e)
        {
            this.staTitle.set_text("사용자 목록");

            this.dsList.clearData();

            var sForeach = "";
            //sForeach = "{sDeptCd:[D0003,D0001,D0002,D0004]}";

            sForeach = take.getDsObjString(this.dsDept);

            trace("sForeach -->" + sForeach);
            this.dsList.clearData();

            this.staTitle.set_text("사용자 목록");

            take.tranSelect(
                this,
                "selForeachParam",
                "Sample.smpForeach",
                "",
                "dsList",
                "",
                function(sId, nErrCd, sMsg) {
                    return null;
                },
                false,
                "",
                false,
                sForeach);
         };

        this.btnDataset_onclick = function(obj,e)
        {
            this.dsList.clearData();

            this.staTitle.set_text("사용자 목록");

            take.tranSelect(
                this,
                "selForeachDataset",
                "Sample.smpForeach",
                "",
                "dsList",
                "",
                function(sId, nErrCd, sMsg) {
                    return null;
                },
                true,
                "",
                false,
                ["dsDept"]);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpForeach_onload,this);
            this.btnParam.addEventHandler("onclick",this.btnParam_onclick,this);
            this.btnDataset.addEventHandler("onclick",this.btnDataset_onclick,this);
        };
        this.loadIncludeScript("smpTakeTranForeach.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
