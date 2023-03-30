(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcUserInfo");
            this.set_titletext("사용자 정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(295,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMain","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staInfoBg","0","0",null,null,"0","0",null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_background("#2d2f3b");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staUser","11","93","270","51",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_text("사용자\r\n<fs v=\'11\'>hongkil (홍길동)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staIP","11","263","270","50",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_text("마지막 로그인 IP\r\n<fs v=\'11\'>000.000.000.000</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staLoginDt","11","178","270","50",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_text("마지막 로그인 날짜\r\n<fs v=\'11\'>2019-08-31 14:30</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staUniv","11","8","270","50",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("4");
            obj.set_text("소속\r\n<fs v=\'11\'>OOOO</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",295,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcUserInfo.xfdl", function() {
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;

        this.dbcUserInfo_onload = function(obj,e)
        {
        	this.fnUserInfoSet(this.fv_objGdsUserInfo);
        };

        /**
         * fnUserInfoSet : 사용자 정보 세팅
         * @param  {Object} objDs UserInfo Dataset
         * @return {N/A}    N/A
         * @example this.fnUserInfoSet(nexacro.getApplication().gdsUserInfo);
         */
        this.fnUserInfoSet = function(objDs)
        {
            var sUniv, sUserId, sUserNm, sLastLoginDt, sLastLoginIp;
            var objDiv;

            objDiv = this.divMain.form;

            sDeptNm   	 = take.nvl(objDs.getColumn(0,"DEPT_NM")   ,"");
            sUserId      = take.nvl(objDs.getColumn(0,"USER_ID")    ,"");
            sUserNm      = take.nvl(objDs.getColumn(0,"USER_NM")    ,"");
            sLastLoginDt = take.nvl(objDs.getColumn(0,"LAST_LOGIN_DT") ,"");
            sLastLoginIp = take.nvl(objDs.getColumn(0,"LOGIN_IP")    ,"");

            objDiv.staUniv.set_text("소속\n<fs v='11'>" + (sDeptNm==""?"없음":sDeptNm+"") + "</fs>");
            objDiv.staUser.set_text("사용자\n<fs v='11'>" + sUserId + " (" + sUserNm + ")</fs>");
            objDiv.staLoginDt.set_text("마지막 로그인 날짜\n<fs v='11'>" + sLastLoginDt +"</fs>");
            objDiv.staIP.set_text("마지막 로그인 IP\n<fs v='11'>" + sLastLoginIp + "</fs>");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.dbcUserInfo_onload,this);
        };
        this.loadIncludeScript("dbcUserInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
