(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dbcMainImage");
            this.set_titletext("메인이미지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1850,392);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBg","0","0","1920","711",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_mainBg01");
            obj.set_text("");
            obj.set_fittocontents("none");
            this.addChild(obj.name, obj);

            obj = new Div("divInfo",null,"0","295",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrollbartype("none none");
            obj.set_opacity("0.8");
            this.addChild(obj.name, obj);

            obj = new Static("staInfoBg","0","0",null,null,"0","0",null,null,null,null,this.divInfo.form);
            obj.set_taborder("3");
            obj.set_background("#2d2f3b");
            this.divInfo.addChild(obj.name, obj);

            obj = new Static("staUniv","20","10%","270","50",null,null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("4");
            obj.set_text("소속\r\n<fs v=\'11\'>OOOO 대학교</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divInfo.addChild(obj.name, obj);

            obj = new Static("staUser","20","staUniv:35","270","51",null,null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("0");
            obj.set_text("사용자\r\n<fs v=\'11\'>hongkil (홍길동)</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divInfo.addChild(obj.name, obj);

            obj = new Static("staLoginDt","20","staUser:34","270","50",null,null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("1");
            obj.set_text("마지막 로그인 날짜\r\n<fs v=\'11\'>2019-08-31 14:30</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divInfo.addChild(obj.name, obj);

            obj = new Static("staIP","20","staLoginDt:35","270","50",null,null,null,null,null,null,this.divInfo.form);
            obj.set_taborder("2");
            obj.set_text("마지막 로그인 IP\r\n<fs v=\'11\'>000.000.000.000</fs>");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_mainInfo");
            this.divInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divInfo.form
            obj = new Layout("default","",0,0,this.divInfo.form,function(p){});
            this.divInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1850,392,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dbcMainTop.xfdl", function() {
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;

        this.dbcMainImage_onload = function(obj,e)
        {
        	this.fnTopBgCenter(this.staBg);
        	this.fnUserInfoSet(this.fv_objGdsUserInfo);
        };

        //divTopImg_onsize : Main Img Div 사이즈 변경 이벤트
        this.divTopImg_onsize = function(obj,e)
        {
        	this.fnTopBgCenter(obj);
        };

        /**
         * fnTopBgCenter : 리사이즈에 따라 탑 이미지 Left 좌표 변경
         * @param  {Object} objDiv Div
         * @return {N/A}    N/A
         * @example this.fnTopBgCenter(this.div00);
         */
        this.fnTopBgCenter = function(objComp)
        {
            var objStaBg;
            var nLeft, nTop;

            nLeft = (this.getOffsetWidth()-nexacro.toNumber(objComp.width))/2;
            nTop  = (this.getOffsetHeight()-nexacro.toNumber(objComp.height))/2;

        	objComp.set_left(nLeft);
            objComp.set_top(nTop);
        }

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

            objDiv = this.divInfo.form;

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
            this.addEventHandler("onload",this.dbcMainImage_onload,this);
        };
        this.loadIncludeScript("dbcMainTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
