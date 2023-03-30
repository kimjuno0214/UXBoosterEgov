(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("smpCrypto");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTextT","10","85","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("평문");
            this.addChild(obj.name, obj);

            obj = new Edit("edtText","staTextT:3","85","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("bmV4aW512349qc0tleQ==");
            this.addChild(obj.name, obj);

            obj = new Button("btnEncrypt","edtText:3","85","112","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("-- 암호화 -->");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEcryptData00","btnEncrypt:3","85","300","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"30","560",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("암호화");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staBase64KeyT","10","45","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("암호화키");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBase64Key","staBase64KeyT:3","45","618","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("test");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDecrypt","93","125","200","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Button("btnDecrypt","296","125","112","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<-- 복호화 --");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEcryptData01","411","125","300","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static18_00","0","190",null,"30","560",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("라이센스키발급");
            obj.set_cssclass("sta_WF_title02");
            this.addChild(obj.name, obj);

            obj = new Static("staTakeKeyT","10","230","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("take key");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTakeKey","90","230","618","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("take");
            obj.set_text("take");
            this.addChild(obj.name, obj);

            obj = new Static("staCustT","10","260","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("customer key");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCust","90","260","618","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Static("staLicType","10","320","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("License type");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLicType","90","320","618","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Static("staProjectKey","10","350","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Project key");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProjectKey","90","350","618","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("test");
            this.addChild(obj.name, obj);

            obj = new Static("staSDateT","10","380","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Use term");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSDate","90","380","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEDate","210","380","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("staDateGbn","195","380","10","25",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLicEnc","90","410","620","80",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("staLicEnc","10","410","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("License");
            this.addChild(obj.name, obj);

            obj = new Static("staLicDec","10","495","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("License");
            this.addChild(obj.name, obj);

            obj = new TextArea("taLicDec","90","495","620","80",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Button("btnKey","730","230","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("발급");
            this.addChild(obj.name, obj);

            obj = new Static("staKeyT","10","290","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Key");
            this.addChild(obj.name, obj);

            obj = new Edit("edtKey","90","290","618","25",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("test");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("smpCrypto.xfdl", function() {

        this.smpCrypto_onload = function(obj,e)
        {
            take.loadLib(
                this,
                "cryptojs",
                "./_extlib_/Take/crypto-js.min.js",
                function() {
                    take.debug(this, "cryptojs load");
                });

                //['DEV','ssts','20221010','20221231']
                //take --> ssts ==> KzhaeFpwYURjaXhZUC9waFdrcHU0Zz09
                //KzhaeFpwYURjaXhZUC9waFdrcHU0Zz09 --> ['DEV','ssts','20221010','20221231'] ==>

        };

        //암호화
        this.btnEncrypt_onclick = function(obj,e)
        {
            var sBaseKey, sText, sEncryptData;

            sBaseKey =this.edtBase64Key.value;
            sText = this.edtText.value;

            sEncryptData = take.Crypto.getDataEncrypt(sText, sBaseKey);

            this.edtEcryptData00.set_value(sEncryptData);
            this.edtEcryptData01.set_value(sEncryptData);
        };

        //복호화
        this.btnDecrypt_onclick = function(obj,e)
        {
            var sBaseKey, sEncryptData, sVal;

            sBaseKey =this.edtBase64Key.value;
            sEncryptData = this.edtEcryptData01.value;

        	sVal = take.Crypto.getDataDecrypt(sEncryptData, sBaseKey);
            alert(sVal);
            this.edtDecrypt.set_value(sVal);
        };


        this.btnKey_onclick = function(obj,e)
        {
        	var sTakeKey, sCust, sKey, sLicText, sLic;
            var objLic;

            sTakeKey =this.edtTakeKey.value;
            sCust = this.edtCust.value;

            sKey = take.Crypto.getDataEncrypt(sCust, sTakeKey);

            this.edtKey.set_value(sKey);

            objLic = {
                'licenseType' : this.edtLicType.value,
                'subject'     : this.edtProjectKey.value,
                'issuedTime'  : this.calSDate.value,
                'expiryTime'  : this.calEDate.value
            };

            sLicText = JSON.stringify(objLic);

            sLic = take.Crypto.getDataEncrypt(sLicText, sKey);

            sLicText = "";

            this.taLicEnc.set_value(sLic);

            sLicText = take.Crypto.getDataDecrypt(sLic, sKey);

            this.taLicDec.set_value(sLicText);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.smpCrypto_onload,this);
            this.btnEncrypt.addEventHandler("onclick",this.btnEncrypt_onclick,this);
            this.btnDecrypt.addEventHandler("onclick",this.btnDecrypt_onclick,this);
            this.btnKey.addEventHandler("onclick",this.btnKey_onclick,this);
        };
        this.loadIncludeScript("smpCrypto.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
