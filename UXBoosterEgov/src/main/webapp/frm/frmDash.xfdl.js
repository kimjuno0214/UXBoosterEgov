(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmDash");
            this.set_titletext("Dash");
            if (Form == this.constructor)
            {
                this._setFormPosition(1490,658);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDash", this);
            obj._setContents("<ColumnInfo><Column id=\"GRID_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_PROG\" type=\"STRING\" size=\"256\"/><Column id=\"RELOAD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLEBAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDash_bak", this);
            obj._setContents("<ColumnInfo><Column id=\"GRID_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_URL\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_PROG\" type=\"STRING\" size=\"256\"/><Column id=\"MANUAL_TXT\" type=\"STRING\" size=\"256\"/><Column id=\"RELOAD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLEBAR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DASH_PARAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DETAIL_PROG\">P000000059</Col><Col id=\"DASH_PREFIX\">dbc</Col><Col id=\"DASH_URL\">dbcMainTop.xfdl</Col><Col id=\"DASH_TYPE\">42</Col><Col id=\"DASH_CD\">D000000001</Col><Col id=\"GRID_NO\">1</Col></Row><Row><Col id=\"DASH_PREFIX\">dbc</Col><Col id=\"DETAIL_PROG\">P000000053</Col><Col id=\"DASH_URL\">dbcNotice.xfdl</Col><Col id=\"DASH_TYPE\">22</Col><Col id=\"DASH_CD\">D000000003</Col><Col id=\"GRID_NO\">9</Col><Col id=\"DASH_NM\">공지사항</Col></Row><Row><Col id=\"DASH_PREFIX\">dbc</Col><Col id=\"DETAIL_PROG\">P000000052</Col><Col id=\"DASH_URL\">dbcDocument.xfdl</Col><Col id=\"DASH_TYPE\">22</Col><Col id=\"DASH_CD\">D000000002</Col><Col id=\"GRID_NO\">13</Col><Col id=\"DASH_NM\">자료실</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staCont01","0","0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staHSpace01","0","staCont01:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("H01");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staWSpace01","staCont01:0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("W01");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCont03","staWSpace01:0","0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCont02","0","staHSpace01:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staWSpace02","staCont03:0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("W02");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCont05","staWSpace02:0","0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staWSpace03","staCont05:0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W03");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCont07","staWSpace03:0","0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staHSpace02","0","staCont02:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("H02");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCont04","staWSpace01:0","staHSpace01:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont06","staWSpace02:0","staHSpace01:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont08","staWSpace03:0","staHSpace01:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont09","0","staHSpace02:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staHSpace03","0","staCont09:0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("H03");
            obj.set_cssclass("sta_GD_Square");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCont11","staWSpace01:0","staHSpace02:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont13","staWSpace02:0","staHSpace02:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont15","staWSpace03:0","staHSpace02:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont10","0","staHSpace03:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont12","staWSpace01:0","staHSpace03:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont14","staWSpace02:0","staHSpace03:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("staCont16","staWSpace03:0","staHSpace03:0","24.5%","23.86%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("700 36px/normal \"Gulim\"");
            obj.set_textAlign("center");
            obj.set_border("1px dotted");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Div("divDrag","5","665","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_visible("false");
            obj.set_border("1px dotted");
            this.addChild(obj.name, obj);

            obj = new Div("divClick","207","692","24.50%","23.71%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staOkBg","0","0","50%",null,null,"0",null,null,null,null,this.divClick.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MF_btnBg");
            this.divClick.addChild(obj.name, obj);

            obj = new Static("staCancleBg","staOkBg:1","0",null,null,"0","0",null,null,null,null,this.divClick.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_MF_btnBg");
            this.divClick.addChild(obj.name, obj);

            obj = new Button("btnOk","0","0","50%",null,null,"0",null,null,null,null,this.divClick.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_check");
            this.divClick.addChild(obj.name, obj);

            obj = new Button("btnCancle","btnOk:1","0",null,null,"0","0",null,null,null,null,this.divClick.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_cancel");
            obj.set_text("");
            this.divClick.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDrag
            obj = new Layout("default","",0,0,this.divDrag.form,function(p){});
            this.divDrag.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divClick.form
            obj = new Layout("default","",0,0,this.divClick.form,function(p){});
            this.divClick.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1490,658,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmDash.xfdl", function() {
        /**
        *  데쉬보드 4X4
        *
        *  @MenuPath    Home> Main > DashBoard
        *  @FileName    frmDash.xfdl
        *  @Creator     고영민
        *  @CreateDate  2019.11.25
        *  @Version     1.0
        *  @Desction    메인 데쉬보드 동적 화면
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2019.11.25      고영민             최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;

        this.fv_arrRect = [[  0,  0,365,157,null,null]    //1
                          ,[  0,167,365,157,null,null]    //2
                          ,[375,  0,365,157,null,null]    //3
                          ,[375,167,365,157,null,null]    //4
                          ,[750,  0,365,157,null,null]    //5
                          ,[750,167,365,157,null,null]    //6
                          ,[1125,  0,365,157,null,null]    //7
                          ,[1125,167,365,157,null,null]    //8
                          ,[  0,334,365,157,null,null]    //9
                          ,[  0,501,365,157,null,null]    //10
                          ,[375,334,365,157,null,null]    //11
                          ,[375,501,365,157,null,null]    //12
                          ,[750,334,365,157,null,null]    //13
                          ,[750,501,365,157,null,null]    //14
                          ,[1125,334,365,157,null,null]    //15
                          ,[1125,501,365,157,null,null]];  //16

        this.fv_objSize = {"11":[365,157]    //W1 X H1
                          ,"12":[365,324]    //W1 X H2
                          ,"13":[365,491]    //W1 X H3
                          ,"14":[365,658]    //W1 X H4
                          ,"21":[740,157]    //W2 X H1
                          ,"22":[740,324]    //W2 X H2
                          ,"23":[740,491]    //W2 X H3
                          ,"24":[740,658]    //W2 X H4
                          ,"31":[1115,157]    //W3 X H1
                          ,"32":[1115,324]    //W3 X H2
                          ,"33":[1115,491]    //W3 X H3
                          ,"34":[1115,658]    //W3 X H4
                          ,"41":[1490,157]   //W4 X H1
                          ,"42":[1490,324]   //W4 X H2
                          ,"43":[1490,491]   //W4 X H3
                          ,"44":[1490,658]}; //W4 X H4\

this.fv_arrGuideComp = [this.staCont01
                               ,this.staCont02
                               ,this.staCont03
                               ,this.staCont04
                               ,this.staCont05
                               ,this.staCont06
                               ,this.staCont07
                               ,this.staCont08
                               ,this.staCont09
                               ,this.staCont10
                               ,this.staCont11
                               ,this.staCont12
                               ,this.staCont13
                               ,this.staCont14
                               ,this.staCont15
                               ,this.staCont16];

        this.fv_arrXY = [[ 1,  3,  5,  7]
                        ,[ 2,  4,  6,  8]
                        ,[ 9, 11, 13, 15]
                        ,[10, 12, 14, 16]];

        this.fv_arrDashDiv = new Object();
        this.fv_sDashId = "";
        this.fv_sPageNo = "";
        this.fv_nFormWid = 1490;
        this.fv_nFormHet = 658;
        this.fv_nSpace = 10; //컨텐츠 사이 여백
        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * frmDash_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.frmDash_onload = function(obj, e)
        {
            if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
            {
                this.ProgNm = "nexa-Booster Main dashboard";

                this.fnSetSize();

                this.fnTran("DashInfo");

        //         if (this.fnSetDashBoard())
        //         {
        //             this.fnArrangement();
        //         }
            }
        }

        this.frmDash_onsize = function(obj,e)
        {
        	if (this.staCont01.visible==true) this.fnEditCancle();

            this.fnSetSize();
        };

        this.fnSetSize = function()
        {
            var objComp;
            var nWid,nHet, nWGap, nHGap;

            for (var i=0; i<16; i++)
            {
                objComp = this.components["staCont" + (i+1).toString().lpad(2,"0")];

                //this.fv_arrRect[i][0] = objComp.left ;
                //this.fv_arrRect[i][1] = objComp.top ;
                //this.fv_arrRect[i][2] = objComp.width ;
                //this.fv_arrRect[i][3] = objComp.height ;
                //this.fv_arrRect[i][4] = objComp.right ;
                //this.fv_arrRect[i][5] = objComp.bottom ;

                this.fv_arrRect[i][0] = objComp.getOffsetLeft() ;
                this.fv_arrRect[i][1] = objComp.getOffsetTop() ;
                this.fv_arrRect[i][2] = objComp.getOffsetWidth() ;
                this.fv_arrRect[i][3] = objComp.getOffsetHeight() ;
                this.fv_arrRect[i][4] = objComp.getOffsetRight() ;
                this.fv_arrRect[i][5] = objComp.getOffsetBottom() ;
            }

            this.fv_nSpace = parseInt(this.staWSpace01.width);
            //trace("init값 확인 --> " + this.fv_arrRect);

        //     nWid = this.staCont01.getOffsetWidth();
        //     nHet = this.staCont01.getOffsetHeight();
        //     nWGap = this.staWSpace01.getOffsetWidth();
        //     nHGap = this.staHSpace01.getOffsetHeight();
        //
        //     this.fv_objSize = {"11":[nWid, nHet]                   //W1 X H1
        //                       ,"12":[nWid, ((nHet*2)+(nHGap*1))]    //W1 X H2
        //                       ,"13":[nWid, ((nHet*3)+(nHGap*2))]    //W1 X H3
        //                       ,"14":[nWid, ((nHet*4)+(nHGap*3))]    //W1 X H4
        //                       ,"21":[((nWid*2)+(nWGap*1)), nHet]    //W2 X H1
        //                       ,"22":[((nWid*2)+(nWGap*1)), ((nHet*2)+(nHGap*1))]    //W2 X H2
        //                       ,"23":[((nWid*2)+(nWGap*1)), ((nHet*3)+(nHGap*2))]    //W2 X H3
        //                       ,"24":[((nWid*2)+(nWGap*1)), ((nHet*4)+(nHGap*3))]    //W2 X H4
        //                       ,"31":[((nWid*3)+(nWGap*2)), nHet]                   //W3 X H1
        //                       ,"32":[((nWid*3)+(nWGap*2)), ((nHet*2)+(nHGap*1))]    //W3 X H2
        //                       ,"33":[((nWid*3)+(nWGap*2)), ((nHet*3)+(nHGap*2))]    //W3 X H3
        //                       ,"34":[((nWid*3)+(nWGap*2)), ((nHet*4)+(nHGap*3))]    //W3 X H4
        //                       ,"41":[((nWid*4)+(nWGap*3)), nHet]                   //W4 X H1
        //                       ,"42":[((nWid*4)+(nWGap*3)), ((nHet*2)+(nHGap*1))]    //W4 X H2
        //                       ,"43":[((nWid*4)+(nWGap*3)), ((nHet*3)+(nHGap*2))]    //W4 X H3
        //                       ,"44":[((nWid*4)+(nWGap*3)), ((nHet*4)+(nHGap*3))]};  //W4 X H4

            //console.dir(this.fv_objSize);
        };

        //frmDash_onkeydown 폼 키 이벤트
        this.frmDash_onkeydown = function(obj,e)
        {
            //ESC버튼 클릭시 에디트 모드 해제
        	if (e.keycode==27)
            {
                //모든 컨텐츠 가이드가 같이 동작하기 때문에 하나만 현재 에디트 모드(visibe true면 에디트 모드)인지 확인한다.
                if (this.staCont01.visible==true) this.fnEditCancle();
            }
        };

        //frmDash_onmouseenter 폼에 마우스가 들어왔을때
        // this.frmDash_onmouseenter = function(obj:nexacro.Form,e:nexacro.MouseEventInfo)
        // {
        //
        // //     if(this.btnSelect.visible)
        // //     {
        // //         this.btnSelect.move(e.clientx-10, e.clienty-10);
        // //     }
        // };

        //frmDash_onmouseleave 폼에 마우스가 나갈때
        // this.frmDash_onmouseleave = function(obj:nexacro.Form,e:nexacro.MouseEventInfo)
        // {
        // //     if(this.btnSelect.visible)
        // //     {
        // //         this.btnSelect.move(e.clientx-10, e.clienty-10);
        // //     }
        // };

        /*********************************************************
        * 2.1 TRANSACTION 서비스 호출 처리
         ********************************************************/
        /**
         * fnTran : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnTran("ID");
         */
        this.fnTran = function(sTranId)
        {
            //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "DashInfo";

            switch(sTranId)
            {
                case "DashInfo" :
                    var sPageNo;

                    //웹브라우저 컴포넌트에서 실행되는지 여부 체크
                    sPageNo = this.parent.form.parent.form.parent.name.substr(7);
                    //trace("this.parent.form.parent.form.parent.name --> " + this.parent.form.parent.form.parent.name);
                    //trace("sPageNo-->" + sPageNo);
                    this.fv_sPageNo = sPageNo;
                    this.dsDash.clearData();
                    take.tranSelect(  this
                                      , sTranId
                                      , "UserManagement.userDashSelect"
                                      , ""
                                      , "dsDash"
                                      , "sProjectCd='" + this.fv_sProjectCd +"' sPageNo='" + nexacro.toNumber(sPageNo) +"'"
                                      , function(sId, nErrCd, sErrMsg) {
                                            if (nErrCd>=0)
                                            {
                                                take.debug(this, "User DashBoard ("+ this.fv_sPageNo + " page) 정보 조회 성공");
                                                //trace(this.fv_sPageNo + "-->" + this.dsDash.saveXML());
                                                this.fnSetDashBoard()
                                                //if (this.fnSetDashBoard())
                                                //{
                                                //    this.fnArrangement();
                                                //}

                                                //if (take.sysType()=="phone")
                                                //{
                                                //    this.fnSetDashBoardM();
                                                //} else {
                                                //    if (this.fnSetDashBoard())
                                                //    {
                                                //        //if (this.fv_sPageNo=="01") this.fnDashData();
                                                //    }
                                                //}
                                            }
                                        });
                    //Script
                    break;
                default :
                    break;
            }
        }

        /*********************************************************
         * 2.2 CALLBACK 콜백 처리부분
         ********************************************************/
        //N/A
        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAddRow, fnDelRow)
        ********************************************************/
        //N/A
        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/
        //대시보드 컨텐츠 마우스 우측 버튼 다운 이벤트
        // this.divCont_onrbuttondown = function(obj:nexacro.Div,e:nexacro.MouseEventInfo)
        // {
        //     //대시보드 컨텐츠 제거
        //     this.fnDelContents(obj);
        // };

        //가이드 마우스 엔터 이벤트
        this.staCont_onmouseenter = function(obj,e)
        {
            var objDiv, objDivClick;
            var nLeft, nTop, nWid, nHgt;

            objDiv  = this.divDrag;
            objDivClick = this.divClick;

            nLeft = obj.getOffsetLeft();
            nTop = obj.getOffsetTop();
            nWid = obj.getOffsetWidth();
            nHgt = obj.getOffsetHeight();

            if (!objDiv.visible) objDiv.set_visible(true);
            if (!objDivClick.visible) objDivClick.set_visible(true);

            //if (!this.btnSelect.visible) this.btnSelect.set_visible(true);

            //if ( nTop+nexacro.toNumber(objDiv.height)>nexacro.toNumber(nHgt))
            //{
            //    objDiv.set_top(nTop-(nTop+nexacro.toNumber(objDiv.height)-nexacro.toNumber(nHgt))-10);
            //} else {
            //    objDiv.set_top(nTop);
            //}

            //if ( nLeft+nexacro.toNumber(objDiv.width)>nexacro.toNumber(nWid))
            //{
            //    objDiv.set_left(nLeft-(nLeft+nexacro.toNumber(objDiv.width)-nexacro.toNumber(nWid)));
            //} else {
            //    objDiv.set_left(nLeft);
            //}
            objDiv.move(nLeft, nTop);

            //trace("objDiv.getOffsetWidth() --> " + objDiv.getOffsetWidth() + " / objDiv.getOffsetHeight() --> " + objDiv.getOffsetHeight());
            objDivClick.move(nLeft,nTop,objDiv.getOffsetWidth(),objDiv.getOffsetHeight());
            objDivClick.bringToFront();
        };

        //가이드 마우스 리브 이벤트
        this.staCont_onmouseleave = function(obj,e)
        {
            //trace("staCont_onmouseleave : " + e.clientx + " / " + e.clienty);
        };

        //에디트 모드의 가이드div 클릭 이벤트
        // this.btnSelect_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        //     //대시 컨텐츠 생성
        //     //this.fnSelect();
        // };

        //선택 취소 버튼 클릭 이벤트
        this.divClick_btnCancle_onclick = function(obj,e)
        {
            //모든 컨텐츠 가이드가 같이 동작하기 때문에 하나만 현재 에디트 모드(visibe true면 에디트 모드)인지 확인한다.
        	if (this.staCont01.visible==true) this.fnEditCancle();
        };

        //선택 버튼 클릭 이벤트
        this.divClick_btnOk_onclick = function(obj,e)
        {
            //대시 컨텐츠 생성
        	this.fnSelect();
        };
        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/
        /**
         * fnSelect : 데시보드 선택시 생성 함수
         * @param   {N/A} N/A
         * @return  {N/A} N/A
         * @example this.fnSelect();
         */
        this.fnSelect = function()
        {
        	var objDashData, objDashDiv, objDiv, objDivDrag, objDs;
            var nLeft, nTop, nGridNo, nCnt, nFRow, nRow, nFormInitWid, nFormInitHet;
            var sDivId, sUrl, sDashId, sDashType;
            var arrGrid, arrNewRect;
            var bSucc;

            objDivDrag = this.divDrag;

            objDashData = objDivDrag.dashdata;

            if (take.nvl(objDashData.dash_prefix, "")=="" || take.nvl(objDashData.dash_url, "")=="")
            {
                //데쉬보드가 URL이 없습니다. \n 시스템 관리자에게 문의 바랍니다.
                //take.alert(this, "Error", "S0007", {name:"E0009", text:"E0010"})
                take.alert(this, "Error", "{name}가 {text}이 없습니다. \n 시스템 관리자에게 문의 바랍니다.", {name:"데쉬보드", text:"URL"})
            }

            nLeft = nexacro.toNumber(objDivDrag.left);
            nTop = nexacro.toNumber(objDivDrag.top);

            arrGrid = this.fnCheckGrid(nLeft, nTop,  nexacro.toNumber(objDivDrag.width), nexacro.toNumber(objDivDrag.height));

            nCnt = arrGrid.length;
            //trace("arrGrid --> " + arrGrid);
            objDs = this.dsDash;

            if (nCnt>0)
            {
                //선택영역에 컨텐츠를 삭제 하시겠습니까?
                //bSucc = take.confirm(this, "question", "S0020", {text1:"E0022"});
                bSucc = take.confirm(this, "question", "{text1}에 컨텐츠를 삭제 하시겠습니까?", {text1:"선택영역"});

                if (bSucc)
                {
                    for (var i=0; i<nCnt; i++)
                    {
                        nGridNo = arrGrid[i];
                        nFRow = objDs.findRow("GRID_NO", nGridNo);
                        //trace("check --> " + nGridNo + " / this.fv_arrDashDiv[nGridNo] --> " + this.fv_arrDashDiv[nGridNo]);
                        objDiv = this.removeChild(this.fv_arrDashDiv[nGridNo].name);
                        objDiv.destroy();
                        objDiv=null;

                        this.fv_arrDashDiv[nGridNo]=null;
                        delete this.fv_arrDashDiv[nGridNo];
                        sDashId = objDs.getColumn(nFRow, "DASH_CD");
                        objDs.deleteRow(nFRow);
                        this.fnDashListCheck(false, sDashId);
                    }

                } else {
                    return;
                }
            }

            nGridNo = this.fnFindGridNo(nLeft, nTop);

            //만들기
            sDivId = "divCont_" + objDashData.dash_id + "_" + objDashData.dash_type;


            //리사이즈 적용
            nFormInitWid = this._init_width==0?this.fv_nFormWid:this._init_width;
            nFormInitHet = this._init_height==0?this.fv_nFormHet:this._init_height;

            nFormWid = this.getOffsetWidth();
            nFormHet = this.getOffsetHeight();

            arrNewRect = [
                this.fv_arrRect[nGridNo-1][0],
                this.fv_arrRect[nGridNo-1][1],
                this.fv_arrRect[nGridNo-1][2],
                this.fv_arrRect[nGridNo-1][3],
                this.fv_arrRect[nGridNo-1][4],
                this.fv_arrRect[nGridNo-1][5]];

            sDashType = objDashData.dash_type;

            arrNewRect[2] = Math.round(nexacro.toNumber(this.fv_objSize[sDashType][0]) / nFormInitWid * 100, 2) + "%";
            arrNewRect[3] = Math.round(nexacro.toNumber(this.fv_objSize[sDashType][1]) / nFormInitHet * 100, 2) + "%";

            objDiv = this.fnNewDiv(this, sDivId, "", arrNewRect);

            sUrl = objDashData.dash_prefix + "::" + objDashData.dash_url;

            //objDiv.addEventHandler( "onrbuttondown", this.divCont_onrbuttondown, this);

            objDiv.gridno = nGridNo;
            objDiv.dashid = objDashData.dash_id;
            objDiv.dashnm = objDashData.dash_nm;
            objDiv.progid = objDashData.detail_prog;
            objDiv.dashtype = sDashType;
            objDiv.reloadtime = objDashData.reload_cnt;
            objDiv.dashurl = sUrl;
            objDiv.dashparam = objDashData.dash_param;
            objDiv.btran = true;

        	//this.alert(objDiv.dashnm );

            if (objDashData.titlebar_yn=="N")
            {
                objDiv.set_url(sUrl);
            } else {
                objDiv.set_url("frm::dbc/dbcComDash.xfdl");
            }

            this.fv_arrDashDiv[objDiv.gridno] = objDiv;

            this.fnEditCancle("", false);

            this.fnArrangement();

            try {
                objDiv.form.fnSearch();
            } catch(e) {
                take.trace("frmDash.fnSelect", "Info", objDashData.dash_nm + "(" + sUrl + ")의 fnSearch 함수를 호출하지 못하였습니다.");
            }

            nRow = objDs.addRow();

            objDs.setColumn(nRow, "GRID_NO", objDiv.gridno);
            objDs.setColumn(nRow, "DASH_CD", objDiv.dashid);
            objDs.setColumn(nRow, "DASH_TYPE", objDiv.dashtype);

            //trace(this.dsDash.saveXML("all"));
            this.fv_sDashId = objDiv.dashid;
            take.transaction
        	(
        		this,
        		"addDash",
        		"SVC_LOC::mn/userDashConfigSave.do",
        		"dsDash=dsDash:U",
        		"",
        		"sProjectCd='" + this.fv_sProjectCd + "' sPageNo='" + nexacro.toNumber(this.fv_sPageNo) + "'",
        		function (sId, nErrCd, sErrMsg) {
                    if (nErrCd>=0)
                    {
        				this.alert("저장(추가)")
                        take.trace("frmDash.fnSelect", "Info", "User DashBoard 저장(추가) 성공");
                        this.fnDashListCheck(true, this.fv_sDashId);
                        this.fv_sDashId = "";

        				//20210126 정해원 대시보드 카운트 증가
        				UXBooster.TopFrame.form.fnGetDashCountAsync(this,
        					function(){
        						var nDashCount = UXBooster.TopFrame.form.dsDashCount.getColumn(0, "DASH_COUNT");
        						UXBooster.TopFrame.form.fnSetGdsDashCount(nDashCount);
        					}
        				);
                    }
        		}
        	);
        //     take.tranSave(
        //         this,
        //         "addDash",
        //         "Main.userDashConfig",
        //         "dsDash",
        //         "",
        //         "sProjectCd='" + this.fv_sProjectCd + "' sPageNo='" + nexacro.toNumber(this.fv_sPageNo) + "'",
        //         function (sId, nErrCd, sErrMsg) {
        //             if (nErrCd>=0)
        //             {
        //                 take.trace("frmDash.fnSelect", "Info", "User DashBoard 저장(추가) 성공");
        //                 this.fnDashListCheck(true, this.fv_sDashId);
        //                 this.fv_sDashId = "";
        //
        // 				//20210126 정해원 대시보드 카운트 증가
        // 				UXBooster.TopFrame.form.fnGetDashCountAsync(this,
        // 					function(){
        // 						var nDashCount = UXBooster.TopFrame.form.dsDashCount.getColumn(0, "DASH_COUNT");
        // 						UXBooster.TopFrame.form.fnSetGdsDashCount(nDashCount);
        // 					}
        // 				);
        //             }
        //         });
        };

        /**
         * fnSetDashBoard : 데쉬보드 세팅
         * @param  {N/A} N/A
         * @param  {N/A} N/A
         * @example this.fnSetDashBoard();
         */
        this.fnSetDashBoard = function()
        {
            var objDs;
            var nCnt;

            objDs = this.dsDash;
            nCnt = objDs.rowcount;

            for (var i=0;i<nCnt;i++)
            {
                this.fnSetDashBoardOne(i);
                //this.fnContentsCreate(i);
            }

            return true;
        }

        /**
         * fnSetDashBoardOne : 데쉬보드 하나씩 세팅 (타이머 처리용)
         * @param  {N/A} N/A
         * @param  {N/A} N/A
         * @example this.fnSetDashBoardOne();
         */
        this.fnSetDashBoardOne = function(nRow)
        {
            nexacro._OnceCallbackTimer.callonce
            (
                this,
                function ()
                {
                    this.fnContentsCreate(nRow);
                },
                1
            );
        }
        /**
         * fnContentsCreate : 데쉬보드 하나씩 세팅
         * @param  {N/A} N/A
         * @param  {N/A} N/A
         * @example this.fnContentsCreate();
         */
        this.fnContentsCreate = function(nRow)
        {
            var objDs, objDiv;
            var nGridNo, nFormWid, nFormHet, nFormInitWid, nFormInitHet, nCnt, nStep;
            var sDashId, sDashType, sUrl, sProgId, sMenual, sDivId;
            var arrNewRect;

            objDs = this.dsDash;
            nCnt = objDs.rowcount;

            nGridNo     = nexacro.toNumber(objDs.getColumn(nRow, "GRID_NO"));
            sDashId     = objDs.getColumn(nRow, "DASH_CD");
            sDashNm     = objDs.getColumn(nRow, "DASH_NM");
            sDashType   = objDs.getColumn(nRow, "DASH_TYPE");
            sUrl        = objDs.getColumn(nRow, "DASH_PREFIX") + "::" + objDs.getColumn(nRow, "DASH_URL");
            sProgId     = objDs.getColumn(nRow, "DETAIL_PROG");
            sReloadTime = objDs.getColumn(nRow, "RELOAD_CNT");
            sTitleYn    = objDs.getColumn(nRow, "TITLEBAR_YN");
            sParam      = objDs.getColumn(nRow, "DASH_PARAM");

            //sMenual   = objDs.getColumn(nRow, "MENUAL_URL");

            sDivId = "divCont_" + sDashId + "_" + sDashType;

            //trace("this.fv_arrRect[nGridNo-1]-->" + this.fv_arrRect[nGridNo-1]);
            //trace("this.fv_objSize["+sDashType+"]-->" + this.fv_objSize[sDashType]);

            //리사이즈 안함
            //this.fv_arrRect[nGridNo-1][2] = this.fv_objSize[sDashType][0];
            //this.fv_arrRect[nGridNo-1][3] = this.fv_objSize[sDashType][1];

            //리사이즈 적용
            nFormInitWid = this._init_width==0?this.fv_nFormWid:this._init_width;
            nFormInitHet = this._init_height==0?this.fv_nFormHet:this._init_height;

            nFormWid = this.getOffsetWidth();
            nFormHet = this.getOffsetHeight();

            arrNewRect = [
                this.fv_arrRect[nGridNo-1][0],
                this.fv_arrRect[nGridNo-1][1],
                this.fv_arrRect[nGridNo-1][2],
                this.fv_arrRect[nGridNo-1][3],
                this.fv_arrRect[nGridNo-1][4],
                this.fv_arrRect[nGridNo-1][5]];

            arrNewRect[2] = Math.round(nexacro.toNumber(this.fv_objSize[sDashType][0]) / nFormInitWid * 100, 2) + "%";
            arrNewRect[3] = Math.round(nexacro.toNumber(this.fv_objSize[sDashType][1]) / nFormInitHet * 100, 2) + "%";

            //trace("Size 확인 --> " + sDashId + " : "+ this.fv_arrRect[nGridNo-1]);

            objDiv = this.fnNewDiv(this, sDivId, "", arrNewRect);

            //objDiv.addEventHandler( "onrbuttondown", this.divCont_onrbuttondown, this);

            objDiv.gridno = nGridNo;
            objDiv.dashid = sDashId;
            objDiv.dashnm = sDashNm;
            objDiv.progid = sProgId;
            objDiv.dashtype = sDashType;
            objDiv.reloadtime = sReloadTime;
            objDiv.dashparam = sParam;
            objDiv.dashurl = sUrl;
            //objDiv.btran = true;
            //첫 화면만 데이터를 불러오도록 옵션 세팅
            nStep = this.parent.parent.getStepIndex();

            objDiv.btran = (parseInt(this.fv_sPageNo)==nStep?true:false);

            if (sTitleYn=="N")
            {
                objDiv.set_url(sUrl);
                objDiv.set_border("0px solid #ffffff");
            } else {
                objDiv.set_url("frm::dbc/dbcComDash.xfdl");
            }

            this.fv_arrDashDiv[nGridNo] = objDiv;
            this.fv_arrDashDiv["count"] = take.nvl(this.fv_arrDashDiv["count"],0)+1;

            objDiv.form.dashid = sDashId;
            //trace(objDiv.name + " --> " + objDiv.form.dashid);

            //console.dir(this.fv_arrDashDiv);
            if (nCnt==this.fv_arrDashDiv["count"]) this.fnArrangement();
        }

        /**
         * fnSetDashBoardM : 데쉬보드 세팅 모바일
         * @param  {N/A} N/A
         * @param  {N/A} N/A
         * @example this.fnSetDashBoardM();
         */
        this.fnSetDashBoardM = function()
        {
            var objDs, objDiv;
            var nCnt, nGridNo;
            var sDashId, sDashType, sUrl, sProgId, sMenual, sDivId, sPreDashType;
            var arrRect = [0,0,0,0,null,null];

            objDs = this.dsDash;
            nCnt = objDs.rowcount;

            for (var i=0;i<nCnt;i++)
            {
                nGridNo     = nexacro.toNumber(objDs.getColumn(i, "GRID_NO"));
                sDashId     = objDs.getColumn(i, "DASH_CD");
                sDashNm     = objDs.getColumn(i, "DASH_NM");
                sDashType   = objDs.getColumn(i, "DASH_TYPE");
                sUrl        = objDs.getColumn(i, "DASH_PREFIX") + "::" + objDs.getColumn(i, "DASH_URL");
                sProgId     = objDs.getColumn(i, "DETAIL_PROG");
                sReloadTime = objDs.getColumn(i, "RELOAD_CNT");

                //sMenual   = objDs.getColumn(i, "MENUAL_URL");

                sDivId = "divCont_" + sDashId + "_" + sDashType;

                arrRect[0] = 0; //데쉬보드 Left 좌표
                arrRect[2] = this.fv_objSize[sDashType][0];  //데쉬보드 width 좌표
                arrRect[3] = this.fv_objSize[sDashType][1];  //데쉬보드 height 좌표

                if (i==0)
                {
                    arrRect[1] = 0;  //데쉬보드 Top 좌표
                } else {
                    sPreDashType = objDs.getColumn(i-1, "dash_type");

                    arrRect[1] += this.fv_objSize[sPreDashType][1] +  10; //이전 데쉬보드 높이+ 여백
                }

                //trace(i + " --> " + arrRect)

                objDiv = this.fnNewDiv(this, sDivId, "", arrRect);

                //objDiv.addEventHandler( "onrbuttondown", this.divCont_onrbuttondown, this);

                objDiv.gridno = nGridNo;
                objDiv.dashid = sDashId;
                objDiv.dashnm = sDashNm;
                objDiv.progid = sProgId;
                objDiv.dashtype = sDashType;
                objDiv.reloadtime = sReloadTime;
                objDiv.set_url(sUrl);

                this.fv_arrDashDiv[nGridNo] = objDiv;

                //trace(objDiv.name + " --> " + objDiv.progid);
            }

            this.set_scrollbartype("fixed fixed");
            return true;
        }

        /**
         * fnNewDiv : Div Component 동적 생성
         * @param  {String} sScope  생성 위치
         * @param  {String} sDivId  Div Component Id
         * @param  {String} sUrl    Div Component Url
         * @param  {Array}  arrRect Div Component 생성 위치
         * @return {Object} objDiv  생성된 DIV Object
         * @example this.fnNewDiv(objScope, sDivId, sUrl, arrRect);
         */
        this.fnNewDiv = function(objScope, sDivId, sUrl, arrRect)
        {
            var sTopComp, sLeftComp;

        	//변수 선언 및 값 세팅
        	var objDiv = new Div();
        	objDiv.init(sDivId, arrRect[0], arrRect[1], arrRect[2], arrRect[3], arrRect[4], arrRect[5]);
        	objScope.addChild(sDivId, objDiv);
        	objDiv.show();  //보이기

        	//기본 값 세팅
        	objDiv.set_async(false);
            objDiv.form.set_scrollbartype("none");
        	objDiv.set_background("#ffffff");
            objDiv.set_border("1px solid #c9c9c9");
        	//objDiv.set_url(sUrl);

        	return objDiv;
        };

        /**
         * fnDashData : 해당 페이지의 데쉬보드 데이터 조회
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnDashData();
         */
        this.fnDashData = function()
        {
            var objDiv;
            //var nCnt;

            //trace("fnDashData --> 데이터 조회 하기");

            //nCnt = this.fv_arrDashDiv.length;

            for (var i in this.fv_arrDashDiv)
            {
                if (i!="count")
                {
                    objDiv = this.fv_arrDashDiv[i];
                    if (take.nvl(objDiv.form.fnSearch,"")!="")
                    {
                        objDiv.form.fnSearch();
                    }
                }
            }
        }

        /**
         * fnDashData : 해당 페이지의 데쉬보드 애니메이션 실행
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnReDraw();
         */
        this.fnReDraw = function()
        {
            var objDiv;
            //var nCnt;

            //trace("fnReDraw --> 애니메이션 실행 하기");

            //nCnt = this.fv_arrDashDiv.length;

            for (var i in this.fv_arrDashDiv)
            {
                if (i!="count")
                {
                    objDiv = this.fv_arrDashDiv[i];

                    if (take.nvl(objDiv.form.fnReDraw, "")!="")
                    {
                        objDiv.form.fnReDraw();
                    }
                }
            }
        }
        //
        // this.fnEditDashRuntime = function(sDashId, sDashNm, sDashType, sReloadCnt, sDashUrl, sDetailProg, sReloadTime, sCriterionType, sDashPrefix, bEdit)
        // {
        //     var objDashData = new Object();
        //
        //     objDashData.dash_id = sDashId;
        //     objDashData.dash_nm = sDashNm;
        //     objDashData.dash_type = sDashType;
        //     objDashData.reload_cnt = sReloadCnt;
        //     objDashData.dash_url = sDashUrl;
        //     objDashData.detail_prog = sDetailProg;
        //     objDashData.reloadtime =  sReloadTime;
        //     objDashData.criterion_type = sCriterionType;
        //     objDashData.dash_prefix = sDashPrefix;
        //
        //     this.fnEditDash(objDashData, bEdit);
        // }

        /**
         * fnEditDash : 데쉬 보드 편집
         * @param  {Number} nLeft
         * @param  {Number} nTop
         * @param  {Object} objDashData
         *                  objDashData.dash_id
         *                  objDashData.dash_nm
         *                  objDashData.dash_type
         *                  objDashData.reload_cnt
         *                  objDashData.dash_url
         *                  objDashData.detail_prog
         *                  objDashData.reloadtime
         *                  objDashData.dash_param
         *                  objDashData.dash_prefix
         * @return {N/A} N/A
         * @example this.fnEditDash(100, 200, objData);
         */
        this.fnEditDash = function(objDashData, bEdit)
        {
            //trace("divDrag Left : " + nLeft + " / Top : " + nTop + " / Width : " + this.fv_objSize[objDashData.dash_type][0] + " / Height : " + this.fv_objSize[objDashData.dash_type][1]);
            var objDiv, objCalSize;
            var nFRow, nWid, nHgt;
            var bRtn;
            var sUrl;

            //trace("bEdit --> " + bEdit);

            if (bEdit)
            {
                nFRow = this.dsDash.findRowExpr("DASH_CD=='" + objDashData.dash_id + "' && DASH_TYPE=='" + objDashData.dash_type + "'");

                if (nFRow>=0)
                {
                    //같은 데쉬보드가 이 페이지에 존재합니다.
                    //take.alert(this, "Info", "S0008", {text:"E0009" });
                    take.alert(this, "Info", "같은 {text}가 이 페이지에 존재합니다.", {text:"데시보드" });
                    this.fnEditCancle();
                    return;
                }
            }

            objDiv = this.divDrag;

            this.fnSetEdit(bEdit);
            objDiv.set_visible(false);
            this.divClick.set_visible(false);

            //this.btnSelect.set_visible(false);


        //     alert(  "objDashData.dash_id --> "        +  objDashData.dash_id       + "\n" +
        //             "objDashData.dash_nm --> "        + objDashData.dash_nm        + "\n" +
        //             "objDashData.dash_type --> "      + objDashData.dash_type      + "\n" +
        //             "objDashData.reload_cnt --> "     + objDashData.reload_cnt     + "\n" +
        //             "objDashData.dash_url --> "       + objDashData.dash_url       + "\n" +
        //             "objDashData.detail_prog --> "    + objDashData.detail_prog    + "\n" +
        //             "objDashData.reloadtime --> "     + objDashData.reloadtime     + "\n" +
        //             "objDashData.dash_param --> " + objDashData.dash_param + "\n" +
        //             "objDashData.dash_prefix --> "    + objDashData.dash_prefix   );

            if (bEdit)
            {
                sUrl = objDashData.dash_prefix+"::"+objDashData.dash_url;

                objDiv.dashnm = objDashData.dash_nm;
                objDiv.dashurl = sUrl;
                objDiv.btran = false;
                objDiv.dashparam = objDashData.dash_param;

                //URL 호출시 해당 페이지가 없어도 오류가 발생하지 않음
                if (objDashData.titlebar_yn=="N")
                {
                    bRtn = objDiv.set_url(sUrl);
                } else {
                    bRtn = objDiv.set_url("frm::dbc/dbcComDash.xfdl");
                }

                objDiv.set_enable(false);
                objDiv.form.set_scrolltype("none");
                objDiv.bringToFront();
                objDiv.dashdata = objDashData;

                objCalSize = this.fnDashCalSize(objDashData.dash_type);

                nWid = objCalSize.width;
                nHgt = objCalSize.height;

                objDiv.move(0, 0, nWid, nHgt);

                //objDiv.move(0, 0, this.fv_objSize[objDashData.dash_type][0], this.fv_objSize[objDashData.dash_type][1]);
                //trace("objDiv.url-->" + objDiv.url);
                //objDiv.form.fnSearch();

                //this.btnSelect.bringToFront();
            } else {
                objDiv.set_url("");
                objDiv.sendToBack();

                //this.btnSelect.sendToBack();
            }
        }

        /**
         * fnDashCalSize : 리사이즈된 대시보드 컨텐츠 사이즈 구하기
         * @param  {String} sType 대시보드 컨텐츠 타입
         * @return {N/A} N/A
         * @example this.fnDashCalSize("11");
         */
        this.fnDashCalSize = function(sType)
        {
            var nX, nY, nSpace, nWidth, nHeight, nStWid, nStHgt;
            var objStatic
            var sX, sY;

            objStatic = this.staCont01;
            nStWid = objStatic.getOffsetWidth();
            nStHgt = objStatic.getOffsetHeight();
            nSpace = this.fv_nSpace;

            sX = sType.substring(0,1);
            sY = sType.substring(1,2);
            nX = parseInt(sX);
            nY = parseInt(sY);

            nWidth = (nX*nStWid) + ((nX-1)*nSpace);
            nHeight = (nY*nStHgt) + ((nY-1)*nSpace);

            return {"width":nWidth, "height":nHeight};

        }

        /**
         * fnSetEdit : 에디트모드 여부에 따라 컴포넌트 세팅
         * @param  {Boolean} bEidt 에디트모드 여부
         * @return {N/A} N/A
         * @example this.fnSetEdit(true);
         */
        this.fnSetEdit = function(bEdit)
        {
            //투명도 세팅
            var nOpacity = 0.5;

            //enable 여부
            this.staCont01.set_enable(bEdit);
            this.staCont02.set_enable(bEdit);
            this.staCont03.set_enable(bEdit);
            this.staCont04.set_enable(bEdit);
            this.staCont05.set_enable(bEdit);
            this.staCont06.set_enable(bEdit);
            this.staCont07.set_enable(bEdit);
            this.staCont08.set_enable(bEdit);
            this.staCont09.set_enable(bEdit);
            this.staCont10.set_enable(bEdit);
            this.staCont11.set_enable(bEdit);
            this.staCont12.set_enable(bEdit);
            this.staCont13.set_enable(bEdit);
            this.staCont14.set_enable(bEdit);
            this.staCont15.set_enable(bEdit);
            this.staCont16.set_enable(bEdit);

            //visible 여부
            this.staCont01.set_visible(bEdit);
            this.staCont02.set_visible(bEdit);
            this.staCont03.set_visible(bEdit);
            this.staCont04.set_visible(bEdit);
            this.staCont05.set_visible(bEdit);
            this.staCont06.set_visible(bEdit);
            this.staCont07.set_visible(bEdit);
            this.staCont08.set_visible(bEdit);
            this.staCont09.set_visible(bEdit);
            this.staCont10.set_visible(bEdit);
            this.staCont11.set_visible(bEdit);
            this.staCont12.set_visible(bEdit);
            this.staCont13.set_visible(bEdit);
            this.staCont14.set_visible(bEdit);
            this.staCont15.set_visible(bEdit);
            this.staCont16.set_visible(bEdit);

            //투명도가 적용 되었는지 확인
            if (this.staCont01.opacity != nOpacity)
            {
                this.staCont01.set_opacity(nOpacity);
                this.staCont02.set_opacity(nOpacity);
                this.staCont03.set_opacity(nOpacity);
                this.staCont04.set_opacity(nOpacity);
                this.staCont05.set_opacity(nOpacity);
                this.staCont06.set_opacity(nOpacity);
                this.staCont07.set_opacity(nOpacity);
                this.staCont08.set_opacity(nOpacity);
                this.staCont09.set_opacity(nOpacity);
                this.staCont10.set_opacity(nOpacity);
                this.staCont11.set_opacity(nOpacity);
                this.staCont12.set_opacity(nOpacity);
                this.staCont13.set_opacity(nOpacity);
                this.staCont14.set_opacity(nOpacity);
                this.staCont15.set_opacity(nOpacity);
                this.staCont16.set_opacity(nOpacity);
            }

            //에디트 여부에 따라 컴포넌트를 최 상우로 올린다.
            if (bEdit)
            {
                this.staCont01.bringToFront();
                this.staCont02.bringToFront();
                this.staCont03.bringToFront();
                this.staCont04.bringToFront();
                this.staCont05.bringToFront();
                this.staCont06.bringToFront();
                this.staCont07.bringToFront();
                this.staCont08.bringToFront();
                this.staCont09.bringToFront();
                this.staCont10.bringToFront();
                this.staCont11.bringToFront();
                this.staCont12.bringToFront();
                this.staCont13.bringToFront();
                this.staCont14.bringToFront();
                this.staCont15.bringToFront();
                this.staCont16.bringToFront();
            }
        }

        /**
         * fnEditCancle : 에디트모드 취소
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnEditCancle();
         */
        this.fnEditCancle = function()
        {
            var objWinNx;
            //this.fnSetEdit(false);
            this.fnEditDash("", false);

            this.getOwnerFrame().form.divMain.form.fv_bEditMode=false;
        }

        /**
         * fnDashListCheck : 에디트모드 취소
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnEditCancle();
         */
        this.fnDashListCheck = function(bCheck, sDashId)
        {
            var objWinNx;
            //this.fnSetEdit(false);
            this.fnEditDash("", false);

            this.getOwnerFrame().form.divTop.form.fnDashCheck(bCheck, sDashId);
        }

        /**
         * fnFindGridNo : 좌표에 해당하는 데쉬보드 그리드(그리드 컴포넌트가 아니고 구역임) 번호 구하기
         * @param  {Number} nLeft Left 좌표
         * @param  {Number} nTop  Top 좌표
         * @return {Number} N/A
         * @example this.fnFindGridNo(nLeft, nTop);
         */
        this.fnFindGridNo = function(nLeft, nTop)
        {
            var nCnt = this.fv_arrRect.length;
            var nRtn;

            for (var i=0;i<nCnt;i++)
            {
                if (this.fv_arrRect[i][0]==nLeft && this.fv_arrRect[i][1]==nTop)
                {
                    nRtn = i+1;
                    break;
                }
            }

            return nRtn;
        }

        /**
         * fnArea : 좌표안에 포함된 그리드(그리드 컴포넌트가 아니고 구역임) 번호 리스트 구하기
         * @param  {Number} nLeft    Left 좌표
         * @param  {Number} nTop     Top 좌표
         * @param  {Number} nWidth   Width 좌표
         * @param  {Number} nHeight  Height 좌표
         * @return {Number} N/A
         * @example this.fnArea(nLeft, nTop, nWidth, nHeight);
         */
        this.fnArea = function(nLeft, nTop, nWidth, nHeight)
        {
            var nCnt, nFRow;
            var arrRtn = new Array();

            nCnt = this.fv_arrRect.length;

            for (var i=0;i<nCnt;i++)
            {
                if (this.fv_arrRect[i][0]>=nLeft && this.fv_arrRect[i][1]>=nTop)
                {
                    if(this.fv_arrRect[i][0]<=nLeft+nWidth && this.fv_arrRect[i][1]<=nTop+nHeight)
                    {
                        arrRtn.push(i+1);
                    }
                }
            }

            return arrRtn;
        }

        /**
         * fnCheckGrid : 좌표안에 포함된 데쉬보드 구하기
         * @param  {Number} nLeft    Left 좌표
         * @param  {Number} nTop     Top 좌표
         * @param  {Number} nWidth   Width 좌표
         * @param  {Number} nHeight  Height 좌표
         * @return {Number} N/A
         * @example this.fnCheckGrid(nLeft, nTop, nWidth, nHeight);
         */
        this.fnCheckGrid = function(nLeft, nTop, nWidth, nHeight)
        {
            var arrArea, arrTemp, arrRtn = new Array();
            var nCnt, nIdx;
            var objDiv, objDs;

            arrArea = this.fnArea(nLeft, nTop, nWidth, nHeight);
            nCnt = arrArea.length;

            //trace("arrArea --> " + arrArea);

            for (var i in this.fv_arrDashDiv)
            {
                if (i!="count")
                {
                    objDiv = this.fv_arrDashDiv[i];
                    arrTemp = this.fnArea(objDiv.getOffsetLeft(), objDiv.getOffsetTop(), objDiv.getOffsetWidth(), objDiv.getOffsetHeight());

                    for (var j=0;j<nCnt;j++)
                    {
                        nIdx = arrTemp.indexOf(arrArea[j]);

                        if (nIdx>=0)
                        {
                            //trace("arrTemp --> " + arrTemp[0] + " / " + arrTemp + " / arrArea[j] --> " + arrArea[j]);
                            if (arrRtn.indexOf(arrTemp[0])<0) arrRtn.push(arrTemp[0]);
                        }
                    }
                }
            }

            return arrRtn;
        }

        /**
         * fnArrangement : 대시보드 컨텐츠에 Arrangement를 적용
         * @param  {N/A} N/A
         * @return {N/A} N/A
         * @example this.fnArrangement();
         */
        this.fnArrangement = function()
        {
            var nGridNo;
            var objGuideComp, objDash, objXY;
            var nX, nY, nMax=4; //현재 대시 좌표(Grid)가 4*4이기 때문에 최대값은 4임

            for (var i in this.fv_arrDashDiv)
            {
                if (i!="count")
                {
                    objDash =  this.fv_arrDashDiv[i];
                    nGridNo = objDash.gridno;
                    sDashType = objDash.dashtype;

                    nX = parseInt(sDashType.substring(0,1));
                    nY = parseInt(sDashType.substring(1,2));

                    objGuideComp = this.fv_arrGuideComp[nGridNo-1];

                    objDash.set_left(objGuideComp.left);
                    objDash.set_top(objGuideComp.top);

                    objXY = this.fnfindXY(nGridNo);

                    nX += objXY.X;
                    nY += objXY.Y;

                    if (nX==nMax) {
                        objDash.set_right(0);
                    } else {
                        objDash.set_right("staWSpace0"+ nX +":0");
                    }

                    if (nY==nMax) {
                        objDash.set_bottom(0);
                    } else {
                        objDash.set_bottom("staHSpace0"+ nY +":0");
                    }
                }
                //console.dir(objDash);
            }

            this.resetScroll();
        }

        /**
         * fnfindXY : 대시보드 컨텐츠에 Arrangement를 적용
         * @param  {Number} Dash Grid No(Dash  좌표)
         * @return {Object} fv_arrXY X,Y 좌표값
         * @example this.fnfindXY();
         */
        this.fnfindXY = function(nGridNo)
        {
            var nXCnt, nYCnt;
            var sArrStr;
            var objRtn = {"X":null, "Y":null};


            nXCnt=this.fv_arrXY.length;
            nYCnt=this.fv_arrXY[0].length;

            for (var i=0; i<nXCnt; i++)
            {
                for (var j=0; j<nYCnt; j++)
                {
                    if (this.fv_arrXY[i][j]==nGridNo)
                    {
                        objRtn.Y=i;
                        objRtn.X=j;
                        break;
                    }
                }
            }

            return objRtn;
        }

        /**
         * fnDelContents : 대시보드 컨텐츠 제거
         * @param  {Object} objConts 대시보드 컨텐츠 Div
         * @return {N/A}    N/A
         * @example this.fnDelContents(this.divCont);
         */
        this.fnDelContents = function(objConts)
        {
            var bRtn, bSucc, objRtn, objDs;
            var nFRow, nGridNo;

            //데쉬보드 컨텐츠(을)를 삭제하시겠습니까?
        	//bRtn = take.confirm(this, "question", "S0019", {text:"E0021"});
            bRtn = take.confirm(this, "question", "{text}(을)를 삭제하시겠습니까?", {text:"대시보드 컨텐츠"});

            if (bRtn)
            {
                objDs = this.dsDash;

                nGridNo = objConts.gridno;

                nFRow = objDs.findRow("GRID_NO", nGridNo);

                this.fv_sDashId = objDs.getColumn(nFRow, "DASH_CD");

                if (nFRow>=0) bSucc = objDs.deleteRow(nFRow);

                if (bSucc)
                {
        			take.transaction
        			(
        				this,
        				"DASHDEL",
        				"SVC_LOC::mn/userDashConfigSave.do",
        				"dsDash=dsDash:U",
        				"",
        				"sProjectCd=" + this.fv_sProjectCd + " sPageNo='" + nexacro.toNumber(this.fv_sPageNo) + "'",
        				function (sId, nErrCd, sErrMsg) {
                            if (nErrCd>=0)
                            {
        						this.alert("저장(삭제)")
                                take.trace("frmDash.fnDelContents", "Info", "User DashBoard 저장(삭제) 성공");
                                this.fnDashListCheck(false, this.fv_sDashId);
                                this.fv_sDashId = "";
                            }
        				}
        			);
        //             take.tranSave(
        //                 this,
        //                 "DASHDEL",
        //                 "Main.userDashConfig",
        //                 "dsDash",
        //                 "",
        //                 "sProjectCd=" + this.fv_sProjectCd + " sPageNo='" + nexacro.toNumber(this.fv_sPageNo) + "'",
        //                 function (sId, nErrCd, sErrMsg) {
        //                     if (nErrCd>=0)
        //                     {
        //                         take.trace("frmDash.fnDelContents", "Info", "User DashBoard 저장(삭제) 성공");
        //                         this.fnDashListCheck(false, this.fv_sDashId);
        //                         this.fv_sDashId = "";
        //                     }
        //                 });

                    objRtn = this.removeChild(objConts.name);
                    objRtn.destroy();
                    objRtn = null;

                    this.fv_arrDashDiv[nGridNo]=null;
                    delete this.fv_arrDashDiv[nGridNo];

                }
            }
        };

        /**
         * fnSetTran : 대시보드 컨텐츠 제거
         * @param  {boolean} bTran 트래젝션 여부 (true/false)
         * @return {N/A}    N/A
         * @example this.fnSetTran(true);
         */
        this.fnSetTran = function(bTran)
        {
            for (var i in this.fv_arrDashDiv)
            {
                if (i!="count")
                {
                    objDiv = this.fv_arrDashDiv[i];
                    objDiv.btran = bTran;
        			if(objDiv.form.divCont){
        				objDiv.form.divCont.btran = bTran;
        			}
                }
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmDash_onload,this);
            this.addEventHandler("onkeydown",this.frmDash_onkeydown,this);
            this.addEventHandler("onsize",this.frmDash_onsize,this);
            this.staCont01.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont03.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont02.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont05.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont07.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont04.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont06.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont08.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont09.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont11.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont13.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont15.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont10.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont12.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont14.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.staCont16.addEventHandler("onmouseenter",this.staCont_onmouseenter,this);
            this.divClick.form.btnOk.addEventHandler("onclick",this.divClick_btnOk_onclick,this);
            this.divClick.form.btnCancle.addEventHandler("onclick",this.divClick_btnCancle_onclick,this);
        };
        this.loadIncludeScript("frmDash.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
