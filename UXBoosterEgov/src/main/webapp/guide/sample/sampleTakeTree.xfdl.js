(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTakeTree");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,685);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTree", this);
            obj._setContents("<ColumnInfo><Column id=\"menu_cd\" type=\"STRING\" size=\"255\"/><Column id=\"device_type\" type=\"STRING\" size=\"255\"/><Column id=\"root_menu\" type=\"STRING\" size=\"255\"/><Column id=\"parent_menu\" type=\"STRING\" size=\"255\"/><Column id=\"menu_level\" type=\"STRING\" size=\"255\"/><Column id=\"menu_nm\" type=\"STRING\" size=\"255\"/><Column id=\"menu_type\" type=\"STRING\" size=\"255\"/><Column id=\"menu_url\" type=\"STRING\" size=\"255\"/><Column id=\"menu_order\" type=\"STRING\" size=\"255\"/><Column id=\"display_yn\" type=\"STRING\" size=\"255\"/><Column id=\"manual_url\" type=\"STRING\" size=\"255\"/><Column id=\"desc_txt\" type=\"STRING\" size=\"255\"/><Column id=\"program_prefix\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"menu_cd\">M0002</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0002</Col><Col id=\"parent_menu\">0</Col><Col id=\"menu_level\">0</Col><Col id=\"menu_nm\">시스템</Col><Col id=\"menu_type\">02</Col><Col id=\"menu_url\"/><Col id=\"menu_order\">001</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\"/></Row><Row><Col id=\"menu_cd\">M0003</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0002</Col><Col id=\"parent_menu\">M0002</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">시스템관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">SC010</Col><Col id=\"menu_order\">001.001</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">sc</Col></Row><Row><Col id=\"menu_cd\">M0004</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0002</Col><Col id=\"parent_menu\">M0002</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">다국어관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">SC020</Col><Col id=\"menu_order\">001.002</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">sc</Col></Row><Row><Col id=\"menu_cd\">M0005</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0002</Col><Col id=\"parent_menu\">M0002</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">코드관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">SC030</Col><Col id=\"menu_order\">001.002</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">sc</Col></Row><Row><Col id=\"menu_cd\">M0006</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0006</Col><Col id=\"parent_menu\">0</Col><Col id=\"menu_level\">0</Col><Col id=\"menu_nm\">프로젝트</Col><Col id=\"menu_type\">02</Col><Col id=\"menu_url\"/><Col id=\"menu_order\">002</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\"/></Row><Row><Col id=\"menu_cd\">M0007</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0006</Col><Col id=\"parent_menu\">M0006</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">프로젝트관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">PM010</Col><Col id=\"menu_order\">002.001</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">pm</Col></Row><Row><Col id=\"menu_cd\">M0008</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0006</Col><Col id=\"parent_menu\">M0006</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">메뉴관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">PM030</Col><Col id=\"menu_order\">002.002</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">pm</Col></Row><Row><Col id=\"menu_cd\">M0009</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0006</Col><Col id=\"parent_menu\">M0006</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">권한관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">PM040</Col><Col id=\"menu_order\">002.003</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">pm</Col></Row><Row><Col id=\"menu_cd\">M0010</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0006</Col><Col id=\"parent_menu\">M0006</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">사용자관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">PM050</Col><Col id=\"menu_order\">002.004</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">pm</Col></Row><Row><Col id=\"menu_cd\">M0012</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0006</Col><Col id=\"parent_menu\">M0006</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">양식관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">PM070</Col><Col id=\"menu_order\">002.006</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">pm</Col></Row><Row><Col id=\"menu_cd\">M0013</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0006</Col><Col id=\"parent_menu\">M0006</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">공휴일관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">PM080</Col><Col id=\"menu_order\">002.007</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">pm</Col></Row><Row><Col id=\"menu_cd\">M0028</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0006</Col><Col id=\"parent_menu\">M0006</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">공지사항</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">CM010</Col><Col id=\"menu_order\">002.008</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">cm</Col></Row><Row><Col id=\"menu_cd\">M0014</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0014</Col><Col id=\"parent_menu\">0</Col><Col id=\"menu_level\">0</Col><Col id=\"menu_nm\">프로그램</Col><Col id=\"menu_type\">02</Col><Col id=\"menu_url\"/><Col id=\"menu_order\">003</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\"/></Row><Row><Col id=\"menu_cd\">M0015</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0014</Col><Col id=\"parent_menu\">M0014</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">프로그램관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">GM010</Col><Col id=\"menu_order\">003.001</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">gm</Col></Row><Row><Col id=\"menu_cd\">M0016</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0014</Col><Col id=\"parent_menu\">M0014</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">컴포넌트관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">GM020</Col><Col id=\"menu_order\">003.002</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">gm</Col></Row><Row><Col id=\"menu_cd\">M0017</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0014</Col><Col id=\"parent_menu\">M0014</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">메세지관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">GM030</Col><Col id=\"menu_order\">003.003</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">gm</Col></Row><Row><Col id=\"menu_cd\">M0022</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0022</Col><Col id=\"parent_menu\">0</Col><Col id=\"menu_level\">0</Col><Col id=\"menu_nm\">사용자</Col><Col id=\"menu_type\">02</Col><Col id=\"menu_url\"/><Col id=\"menu_order\">005</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\"/></Row><Row><Col id=\"menu_cd\">M0023</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0022</Col><Col id=\"parent_menu\">M0022</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">사용자관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">UM020</Col><Col id=\"menu_order\">005.001</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">um</Col></Row><Row><Col id=\"menu_cd\">M0024</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0022</Col><Col id=\"parent_menu\">M0022</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">부서관리</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">UM010</Col><Col id=\"menu_order\">005.002</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">um</Col></Row><Row><Col id=\"menu_cd\">M0025</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0025</Col><Col id=\"parent_menu\">0</Col><Col id=\"menu_level\">0</Col><Col id=\"menu_nm\">통계</Col><Col id=\"menu_type\">02</Col><Col id=\"menu_url\"/><Col id=\"menu_order\">006</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\"/></Row><Row><Col id=\"menu_cd\">M0026</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0025</Col><Col id=\"parent_menu\">M0025</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">시스템사용이력</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">ST010</Col><Col id=\"menu_order\">006.001</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">st</Col></Row><Row><Col id=\"menu_cd\">M0027</Col><Col id=\"device_type\">01</Col><Col id=\"root_menu\">M0025</Col><Col id=\"parent_menu\">M0025</Col><Col id=\"menu_level\">1</Col><Col id=\"menu_nm\">접속자현황</Col><Col id=\"menu_type\">03</Col><Col id=\"menu_url\">ST020</Col><Col id=\"menu_order\">006.002</Col><Col id=\"display_yn\">Y</Col><Col id=\"manual_url\"/><Col id=\"desc_txt\"/><Col id=\"program_prefix\">st</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMenu","10","10","200",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsTree");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeuseexpandkey("true");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"일반 Tree\"/></Band><Band id=\"body\"><Cell text=\"bind:menu_nm\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:menu_level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","764","10","184","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","764","112","75","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("url(\'theme://images/ico_WF_group01.png\') no-repeat left center");
            obj.set_border("1px solid #e55723, 0px solid, 0px solid");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","764","190","180","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            obj.set_cssclass("btn_WF_basic01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTakeTree","250","10","200",null,null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsTree");
            obj.set_treeusebutton("use");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeuseexpandkey("true");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.getSetter("taketree").set("{use:\"all\", treeindex:0, parentcolid:\"parent_menu\", ordercolid:\"menu_order\"}");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Take Tree\"/></Band><Band id=\"body\"><Cell text=\"bind:menu_nm\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:menu_level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","490","10","234",null,null,"9",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsTree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"parent_menu\"/><Cell col=\"1\" text=\"menu_level\"/><Cell col=\"2\" text=\"menu_order\"/></Band><Band id=\"body\"><Cell text=\"bind:parent_menu\"/><Cell col=\"1\" text=\"bind:menu_level\"/><Cell col=\"2\" text=\"bind:menu_order\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1040,685,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleTakeTree.xfdl", function() {

        this.sampleTakeTree_onload = function(obj,e)
        {
            // taketree 항목
            // {
            //     use : {  //필수 기능 사용 옵션 all일 경우 전부 true로 인식
            //               add  : true  //(boolean) true or false 노드 추가 여부
            //               del  : true  //(boolean) true or false 노드 삭제 여부
            //               move : false //(boolean) true or false 노드 이동 여부
            //           }
            //   , treeindex  : 0               //(number) 옵션 : 트리 컬럼 인덱스 생략시 그리드의 첫번째 treeitemcontrol 컬럼 index
            //   , parentcolid : "parent_menu"  //(string) 필수 : 트리 부모 컬럼 아이디
            //   , ordercolid  : "menu_order"   //(string) 옵션 : 트리 정렬 컬럼 아이디
            //}
            //
            //예제 1 :  {parentcolid:"parent_menu", ordercolid:"menu_order"}
            //예제 2 :  {use:"all", treeindex:0, parentcolid:"parent_menu", ordercolid:"menu_order"}
            //예제 3 :  {use:{add:true,del:true,move:false}, treeindex:0, parentcolid:"parent_menu", ordercolid:"menu_order"}

            //- 적용 방법
            //
            //1. 그리드 User properties로 트리 옵션 세팅
            //   그리드에 'taketree' User properties 추가
            //   taketree User properties에 옵션 값 세팅
            //   {use:"all", treeindex:0, parentcolid:"parent_menu", ordercolid:"menu_order"}
            //
            //2. 스크립트로 User properties에 트리 옵션 세팅
            //  this.grdTakeTree.taketree = '{use:"all", treeindex:0, parentcolid:"parent_menu", ordercolid:"menu_order"}';
            //
            //3. 스크립트로 동적으로 트리 옵션 세팅
            //  this.grdTakeTree.setTakeTree(this, "{use:'all', treeindex:0, parentcolid:'parent_menu', ordercolid:'menu_order'}");
            //

        };




        this.Button00_onclick = function(obj,e)
        {
            var objGrid = this.grdMenu;
            var nRow = this.dsTree.rowposition;
            var objLevInfo = take.getTreeLevelInfo(objGrid, 0);

        //     //node level
        //     alert("node level count --> min : " + objLevInfo.min + " / max : " + objLevInfo.max);
        //
        //     //부모Row
        //     alert("부모 Rows --> " + objGrid.getTreeParentRow(nRow,true));
        //
        //     //자식 Rows
        // 	alert("자식 Rows --> " + take.getTreeChildRows(this, objGrid, 0, nRow));
        //
        //     //형제 Rows
        //     alert("형제 Rows --> " + take.getTreeNodeRows(this, objGrid, 0, nRow));

            //바로 다음 형재 로우
            alert(objGrid.getDatasetRow(objGrid.getTreeSiblingRow(nRow)));
        };




        this.Button01_onclick = function(obj,e)
        {
        	//alert(nexacro.toNumber(this.grdMenu00.getRealRowFullSize("head")));
            //alert(take.getGridHeadInfo(this, this.grdMenu).rowcount + " / " + take.getGridHeadInfo(this, this.grdMenu).height);

            //this.dsTree.insertRow(1);

            var strObj = '{ "name":"John Doe", age:33, favorites:{ sports:["hoops", "baseball"], movies:["star wars", "taxi driver"]  }}';

            var jsonStr = strObj.replace(/(\w+:)|(\w+ :)/g, function(s) {
              return '"' + s.substring(0, s.length-1) + '":';
            });

            trace(jsonStr);

            var obj = JSON.parse(jsonStr);
            trace(obj.favorites.movies[0]); // expected output: star wars


            this.grdMenu.getCellCount("Body")
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleTakeTree_onload,this);
            this.btn00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("sampleTakeTree.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
