(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("comPostPop");
            this.set_titletext("우편번호검색팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,455);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webPost","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comPostPop.xfdl", function() {
        /**
        *  @MenuPath    우편번호 검색 팝업
        *  @FileName    cmmPost.xfdl
        *  @Creator     JJH
        *  @CreateDate  2018.07.03
        *  @Version     1.0
        *  @Desction    우편번호를 검색한다.
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2018.07.03      JJH		           최초 생성
        *******************************************************************************
        */

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
         this.fv_load = "";
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * form_onload 최초 로드시 발생되는 이벤트
        * @return 	:
        * @example 	:
        */
        this.form_onload = function(obj, e)
        {
        	// Form Load 시 공통 기능 처리
        	// this.gfnFormOnLoad(obj);
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
        		this.fnInit();
        	}
        };

        /**
         * Web Page 설정 초기화
         * @param	N/A
         * @return  N/A
         */
        this.fnInit = function()
        {
        	var sSvcId = take.nvl(this.parent.sSvcId,"SVC_LOC");
        	var objEnv = nexacro.getEnvironment();
            var objSrv = objEnv.services;
        	var sUrl   = objSrv[sSvcId].url;

        	if (sSvcId == "SVC")
        		sUrl   = sUrl.replace("/SSYSTEM/", "/");

        	var sAddress = take.nvl(this.parent.sAddress, "");
        	var sZipNo   = take.nvl(this.parent.sZipNo  , "");
        	var sParam   = "";

        	if (sAddress!="")
        		sParam = sAddress;

        	// 기준은 주소로 검색하나 없다면 우편번호로라도 검색
        	if (sAddress=="" && sZipNo!="")
        		sParam = sZipNo;

        	sParam += "&sLocale=" + nexacro.getApplication().av_sLangCd;

        	this.webPost.set_url(sUrl + "post.jsp?sAddress=" + sParam);
        };

        this.webPost_onusernotify = function(obj,e)
        {
        	var strPost = e.userdata;
        	trace("strPost ==> " + strPost);

        	// e.userdata==>OK!!!:::서울특별시 송파구 백제고분로36가길 9, 101 (석촌동, 스카이타워):::서울특별시 송파구 백제고분로36가길 9:::(석촌동, 스카이타워):::9, Baekjegobun-ro 36ga-gil, Songpa-gu, Seoul:::서울특별시 송파구 석촌동 58-33 스카이타워:::05614:::101
        	if (strPost.indexOf("OK!!!:::") == 0)
        	{
        		/*
        		//e.userdata ==>(식별자 ::: 구우편번호 앞 3자1리 ::: 구우편번호 뒷 3자리 :::  신규우편번호 ::: 도로명주소 ::: 지번 주소 ::: 조합형 주소여부에 따른 주소)
        		*/
        		var aAddr = strPost.split(":::");
        		/*
        		trace("onusernotify --------------------------------------------");
        		trace("array[1]=>구우편번호 앞 3자리			==> " +	aAddr[1] );
        		trace("array[2]=>구우편번호 뒷 3자리			==> " +	aAddr[2] );
        		trace("array[3]=>신규우편번호					==> " +	aAddr[3] );
        		trace("array[4]=>도로명주소					==> " +	aAddr[4] );
        		trace("array[5]=>지번주소						==> " +	aAddr[5] );
        		trace("array[6]=>조합형 주소여부에 따른 주소	==> " +	aAddr[6] );
        		trace("array[7]=>선택주소 타입(R:도로명, J:지번)	==> " +	aAddr[7] );
        		trace("--------------------------------------------------------" );
        		*/
        		var sRetValue;

        		sRetValue = "Y";
        		sRetValue += "#" + aAddr[1];	// 구우편번호 앞 3자리
        		sRetValue += "#" + aAddr[2];	// 구우편번호 뒷 3자리
        		sRetValue += "#" + aAddr[3];	// 신규우편번호
        		sRetValue += "#" + aAddr[4];	// 도로명주소
        		sRetValue += "#" + aAddr[5];	// 지번주소
        		sRetValue += "#" + aAddr[6];	// 조합형 주소여부에 따른 주소
         		sRetValue += "#" + aAddr[7];	// 선택주소 타입(R:도로명, J:지번)
        // 		sRetValue += "#" + aAddr[8];	// y 좌표

        		trace(sRetValue);
         		//trace("this.parent._close_callback : " + this.parent._close_callback);

         		this.opener[this.parent._close_callback].call(this.opener, "post", sRetValue);
         		//this.webPost.set_url("about:blank");
                //this.webPost
                this.setTimer(1,100);
                //this.close();
        	}
        };

        this.cmmPost_ontimer = function(obj,e)
        {
        	if (e.timerid==1)
        	{
                var doc             = this.webPost.getProperty('document');
                var docId           = doc.callMethod("getElementById", "wrap");
                var docIdStyle      = docId.getProperty("style");
                var docIdStyleValue = docIdStyle.getProperty("display");


                if(doc && docId)
                {
                    doc.destroy();
                    doc = null;
                    docId.destroy();
                    docId = null;
                }

                if(docIdStyleValue == "none"){
                    this.close();
                }
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.cmmPost_ontimer,this);
            this.webPost.addEventHandler("onusernotify",this.webPost_onusernotify,this);
            this.webPost.addEventHandler("onloadcompleted",this.webPost_onloadcompleted,this);
        };
        this.loadIncludeScript("comPostPop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
