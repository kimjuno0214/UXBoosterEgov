(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleSha512");
            this.set_titletext("New Form");
            this.set_cssclass("frm_work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtInput","78","61","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchPopUp","27","10","283","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("- sha512 암호화");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","27","61","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaReturn","78","101","200","68",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","27","102","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("결과");
            this.addChild(obj.name, obj);

            obj = new Button("btnSha512","295","61","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("sha512 암호화");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchPopUp00","27","210","283","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("- AES 암호화");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","27","251","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput00","78","251","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","27","292","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("결과");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaReturn00","78","291","200","68",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btnAESD","295","251","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("AES 암호화(Decrypt)");
            this.addChild(obj.name, obj);

            obj = new Button("btnHEX","295","441","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("HEX");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchPopUp01","27","400","283","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("- String to HEX");
            obj.set_font("bold 11pt/normal \"Noto Sans CJK KR DemiLight\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","27","441","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("입력");
            this.addChild(obj.name, obj);

            obj = new Edit("edtInput01","78","441","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","27","482","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("결과");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaReturn01","78","481","200","68",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Button("btnAESE","445","251","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("AES 암호화(Encrypt)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","660","85","192","90",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("CryptoJS.AES암호화");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","660","202","192","90",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("CryptoJS.AES복호화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleSha512.xfdl", function() {
        take.loadJs(this, "sha512", "./_extlib_/Extend/sha512.js");
        take.loadJs(this, "aes", "./_extlib_/Extend/aes.js");

        this.fv_sVal = null;

        this.btnSha512_onclick = function(obj,e)
        {
        	var sVal, sRtn;

            sVal = this.edtInput.value;
            sRtn = hex_sha512(sVal);

            this.txaReturn.set_value(sRtn);
        };

        this.btnHEX_onclick = function(obj,e)
        {
            var sVal, sRtn;

        	sVal = this.edtInput01.value;
            sRtn = this.fnStrToHex(sVal);

            this.txaReturn01.set_value(sRtn);
        };

        this.btnAESD_onclick = function(obj,e)
        {
        	var sVal, sRtn;

        	sVal = this.edtInput00.value;
            sRtn = this.fnSecureData("D", "ab1b181d02abcd091234567823131017", "101112131415161718191a1b1c1d1e1f", sVal);

            this.txaReturn00.set_value(sRtn);
        };

        this.btnAESE_onclick = function(obj,e)
        {
        	var sVal, sRtn;

        	sVal = this.edtInput00.value;
            sRtn = this.fnSecureData("E", "ab1b181d02abcd091234567823131017", "101112131415161718191a1b1c1d1e1f", sVal);

            this.txaReturn00.set_value(sRtn);
        };

        this.fnSecureData = function (sGbn, sKey, sIv, sVal)
        {
        	var sTemp;
            var objDecrypt, objEncrypt;

        	if(sGbn == "D") //decrypted
            {
                //sTemp = CryptoJS.enc.Hex.parse("f90ea719fd70a5185dd4cfe57c7c53b9");//ciphertext를 hex=>base64화 하면 encrypted가 구해진다
        		//objDecrypt = CryptoJS.AES.decrypt(sTemp.toString(CryptoJS.enc.Base64), sKey, { iv: sIv });
                sVal = CryptoJS.enc.Hex.parse(sVal);
                sTemp = sVal.toString(CryptoJS.enc.Base64);
                console.log("decrypt --> " + sTemp);
                objDecrypt = CryptoJS.AES.decrypt(sTemp, sKey, { iv: sIv });
                console.log(objDecrypt.toString(CryptoJS.enc.Utf8));
        		return objDecrypt.toString(CryptoJS.enc.Utf8);

        	} else { //encrypted
        		objEncrypt = CryptoJS.AES.encrypt(sVal, sKey, { iv: sIv });

                console.log("edcrypt --> " + objEncrypt.toString());

        		return objEncrypt.ciphertext;
        	}
        }

        this.fnStrToHex = function(sVal)
        {
            var sHex = "";

            if (take.nvl(sVal,"")=="")
            {
                take.debug(this, "입력 데이터가 null 입니다.");
                return false;
            }

            for(var i=0;i<sVal.length;i++)
            {
                sHex += ''+sVal.charCodeAt(i).toString(16);
            }

            return sHex;
        }


        this.Button00_onclick = function(obj,e)
        {
        	var sVal = 'test';
            var sKey = 'ab1b181d02abcd091234567823131017';
            var sIv = '101112131415161718191a1b1c1d1e1f';
            var encrypted = CryptoJS.AES.encrypt(sVal, sKey, { iv: sIv });
            console.log(encrypted.toString());
            //will output something like:
            //U2FsdGVkX1/l/LqNSCQixd0iPv4neKAGZvbQDbYUovZE4OcM7l3ULNDgkZQmrweN
            this.fv_sVal = encrypted.toString();
        };

        this.Button01_onclick = function(obj,e)
        {
            var sKey = 'ab1b181d02abcd091234567823131017';
            var sIv = '101112131415161718191a1b1c1d1e1f';
            var encrypted = this.fv_sVal;
            var decrypted = CryptoJS.AES.decrypt(encrypted, sKey, { iv: sIv });
            console.log(decrypted.toString(CryptoJS.enc.Utf8));
        };

        this.sampleSha512_onload = function(obj,e)
        {
        	var fileref=document.createElement("script");

            fileref=document.createElement("script");
            fileref.id = "test";
            fileref.type = "text/javascript";
            fileref.src = "../SSYSTEM/nexacro17lib/component/ExtLib/aes.js";

            if (typeof fileref!="undefined")
                document.getElementsByTagName("head")[0].appendChild(fileref);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleSha512_onload,this);
            this.btnSha512.addEventHandler("onclick",this.btnSha512_onclick,this);
            this.btnAESD.addEventHandler("onclick",this.btnAESD_onclick,this);
            this.btnHEX.addEventHandler("onclick",this.btnHEX_onclick,this);
            this.btnAESE.addEventHandler("onclick",this.btnAESE_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("sampleSha512.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
