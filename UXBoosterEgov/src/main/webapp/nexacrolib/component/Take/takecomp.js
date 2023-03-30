/***************************************************************************
 *  2021.01.13 made by take ymko                                           *
 *  take javascript Library                                                *
 *  www.take.co.kr                                                       *
 ***************************************************************************/
//==============================================================================
// take nexacro.Edit
//==============================================================================
var _tEdit = nexacro.Edit.prototype;
var _tOnEditCreatContents = nexacro.Edit.prototype.on_create_contents;
var _tOnEditApplyReadonly = nexacro.Edit.prototype.on_apply_readonly;

_tEdit.on_create_contents = function ()
{
    // 기존 스크립트 실행
    _tOnEditCreatContents.apply(this, arguments);

    if (take.nvl(this.poptype, "")!="" || take.nvl(this.codepop, "")!="" )
    {
        var objEditNm;
        var sId, sEditNmId;
        
        //코드명이 표시될 컴포넌트
        sEditNmId = this.namecomp;
        
        if (this.multipop=="true"||this.multipop==true)
        {
            this.multipop = true;        
        } else {
            this.multipop = false;
        }
        
        //unique 아이디 생성
        sId =  "_btnEdt" + this.name.replace("edt","") + "Pop";
    
        //향후 스콥에 대한 부분 확인 필요
        objEditNm = take.nvl(this.parent[sEditNmId],"");
        
        if (objEditNm!="")
        {
            objEditNm.addEventHandler(
                "onchanged", 
                function (obj, e) 
                { 
                    if (take.nvl(obj.vale, "")!="")
                    {
                        //향후 스콥에 대한 부분 확인 필요
                        obj.parent.parent.parent.getNextComponent(obj.parent.parent).setFocus();
                    }
                }
            )
        } else {
            this.addEventHandler(
                "onchanged", 
                function (obj, e) 
                { 
                    if (take.nvl(obj.vale, "")!="")
                    {
                        //향후 스콥에 대한 부분 확인 필요
                        var objPopBtn = obj._tfnGetPopBtn(obj.parent, obj);
                        obj.parent.parent.parent.getNextComponent(objPopBtn).setFocus();
                    }
                }
            )
        }
        
    
        this.addEventHandler(
            "onkeydown", 
            function (obj, e) 
            { 
                var bKeydown;
                    
                bKeydown = take.nvl(obj.setkeydown, "true");
                
                if(bKeydown == "false" || bKeydown == false){
                    return;
                }
                
                if( e.keycode == 13)
                {   
                    obj.showPopup(obj, sId, objEditNm);
                    
                } else if (e.keycode==8 || e.keycode == 46) {
                
                    var sPreText, sPreValue, sPostText, sPostValue;
                    
                    //이전 값 저장
                    sPreText = obj.value;
                    sPreValue = obj.codevalue;
                    
                    //데이터 초기화
                    obj.set_value("");
                    obj.codevalue  = "";
                    obj.userdata   = "";
                    
                    //현재 값
                    sPostText  = "";
                    sPostValue = "";
                    
                    //이벤트 발생
                    obj._tfnSetEvent(sPreText, sPreValue, sPostText, sPostValue); 

                    if (objEditNm!="")
                    {
                        if (take.nvl(objEditNm.value, "")!="")
                        {
                            objEditNm.set_value("");
                        }
                    }
                }
            }
        );
        
        this.addEventHandler(
            "onkeyup", 
            function (obj, e) 
            { 
                if (objEditNm!="")
                {
                    objEditNm.set_value("");
                }
            }
        );
        
        this._tfnAddBtn(this, sId, objEditNm);
    }
}

//readonly 이벤트가 발생할때
_tEdit.on_apply_readonly = function (readonly) 
{
    // 기존 스크립트 실행
    _tOnEditApplyReadonly.apply(this, arguments);
    
    var objPopBtn = this._tfnGetPopBtn(this.parent, this);
    
    if (objPopBtn!="")
    {
        objPopBtn.set_enable(!readonly);
    }
};

/**
* 팝업 버튼 가져오기
* @param  : N/A
* @return : N/A
* @example :  _tEdit._tfnGetPopBtn()
*/
_tEdit._tfnGetPopBtn = function(objForm, objComp)
{
    var sId;
    var objPopBtn = "";
        
    if (take.nvl(objComp.poptype, "")!="" || take.nvl(objComp.codepop, "")!="" )
    {
        //아이디 (자동 생성 규칙에 의해서 만들어짐)
        sId =  "_btnEdt" + objComp.name.replace("edt","") + "Pop";
        objPopBtn = take.nvl(objForm[sId],"");
    }
    
    return objPopBtn;
}

/**
* 팝업 버튼 추가
* @param  : N/A
* @return : N/A
* @example :  _tEdit._tfnAddBtn()
*/
_tEdit._tfnAddBtn = function (objEdit, sId, objEditNm)
{
    var objForm, objBtn;
    var nLeft, nWidth, nRight, nBottom, nTop, nHeight;
    
    objForm = this.parent;
    
    //그리드의 현재 좌표값을 페이징을 위한 div의 좌표에 적용하기 위해 세팅
    nLeft   = this.left;
    nWidth  = this.getOffsetHeight(); //width, height를 동일하게 세팅
    nRight  = this.right;
    nBottom = this.bottom;
    nTop    = this.top;
    nHeight = nWidth; //width, height를 동일하게 세팅
    
    //div 생성
    objBtn = new Button(sId, nLeft, nTop, nWidth, nHeight, nRight, nBottom);
    
    //top 을 그리드에 연경
    objBtn.set_left(this.name+":-"+nWidth);
        
    //폼에 페이징 div 추가
    objForm.addChild(sId, objBtn);
    
    objBtn.addEventHandler(
        "onclick", 
        function (obj, e) 
        { 
            nexacro._OnceCallbackTimer.callonce
            (
                this,
                function () 
                {
                    _tEdit.showPopup(objEdit, sId, objEditNm);
                },
                1
            ); 
        }
    );

    objBtn.set_cssclass("btn_WF_search04");    
    objBtn.show();
    
    if (this.poptype=="post")
    {
        objBtn.set_text("주소찾기");
        objBtn.set_width(83);
        objBtn.set_left(this.name+":-83");
        objBtn.set_border("1px solid #dddddd");
        this.set_padding("0px "+ (83+2) +"px 0px 10px");
    } else {    
        //팝업 버튼 만큼 패딩 생성
        this.set_padding("0px "+ (nWidth+2) +"px 0px 10px");
    }
    objBtn.set_taborder(this.taborder);
    
    //폼에 리사이즈 적용을 위해 호출
    objForm.resetScroll();
    
    objBtn.set_visible(objEdit.visible);
    objBtn.set_enable(objEdit.enable);
}

/**
* 팝업 띄우기
* @param  : N/A
* @return : N/A
* @example :  _tEdit.showPopup()
*/
_tEdit.showPopup = function (objEdit, sId, objEditNm)
{
    var objPForm;
    var aPreFunc;
    
    //objPForm = objEdit.parent.parent;
    objPForm = take.getOwnerForm(objEdit);
    
    _tEdit._tObjEdit = objEdit;
    
    //팝업 오픈전 사전 체크 함수 호출
    aPreFunc = take.nvl(objEdit.prefunction,"");
    
    if (aPreFunc!="")
    {
        if (take.isFunction(aPreFunc))
        {
            bRtn = aPreFunc.call(objPForm, objEdit);            
        } else if (take.isFunction(objPForm[aPreFunc])) {
            bRtn = objPForm[aPreFunc].call(objPForm, objEdit);
        } else {
            take.debug(objPForm, "해당 함수를 찾을 수 없습니다.");
        }
        
        if (take.nvl(bRtn,"").toString()!="")
        {
            if (!bRtn)
            {
                take.debug(objPForm, "사전 체크 함수 Return false 처리");
                return false;
            }
        }
    }
    
    if (objEdit.poptype=="sawon") { //사원
        take.openPopup(
            objPForm, 
            sId, 
            "SCC::SCC00043P.xfdl", 
            {Title:"", Text:objEdit.value, Param:take.nvl(objEdit.userparam,""), Multi:objEdit.multipop}, 
            "showtitlebar=true layered=false", 
            function(sPopId, sRtn) {   
                objEdit._tfnPopReturn(objEdit, sRtn, objEditNm, {code:"SABUN",name:"NM_KOR"});
            }, 
            false
        );
    } else if (objEdit.poptype=="jumpo") {//점포
        take.openPopup(
            objPForm, 
            sId, 
            "SCC::SCC00044P.xfdl", 
            {Title:"", Text:objEdit.value, Param:take.nvl(objEdit.userparam,""), Multi:objEdit.multipop}, 
            "showtitlebar=true layered=false", 
            function(sPopId, sRtn) {   
                objEdit._tfnPopReturn(objEdit, sRtn, objEditNm, {code:"UPJANG",name:"UPJANGNM"});
            }, 
            false
        );
    } else if (objEdit.poptype=="team") {//팀
        take.openPopup(
            objPForm, 
            sId, 
            "SCC::SCC00045P.xfdl", 
            {Title:"", Text:objEdit.value, Param:take.nvl(objEdit.userparam,""), Multi:objEdit.multipop}, 
            "showtitlebar=true layered=false", 
            function(sPopId, sRtn) {   
                objEdit._tfnPopReturn(objEdit, sRtn, objEditNm, {code:"TM_CD",name:"TM_NM"});
            }, 
            false
        );
    } else if (objEdit.poptype=="user") {//사용자
        take.openPopup(
            objPForm, 
            sId, 
            "SCC::SCC00100P.xfdl", 
            {Title:"", Text:objEdit.value, Param:take.nvl(objEdit.userparam,""), Multi:objEdit.multipop}, 
            "showtitlebar=true layered=false", 
            function(sPopId, sRtn) {   
                objEdit._tfnPopReturn(objEdit, sRtn, objEditNm, {code:"SABUN",name:"NM_KOR"});
            }, 
            false
        );
    } else {
        //기타
        take.debug(objPForm, "해당 하는 공통 팝업이 없습니다.");
    }
};

//리턴 처리 
_tEdit._tfnPopReturn = function(objEdit, sRtn, objEditNm, objRtnCol)
{
    var sPreText, sPreValue, sPostText, sPostvalue;
    var arrRtnVal;
    var objRtn;
    var aCode, aName;
    
    if (take.nvl(sRtn, "")=="") return;
    if (sRtn=="cancel") return;
    
    //String으로 넘어온 팝업 Return값을 Object로 변환
    if (typeof(sRtn) === "object")
    {
        objRtn = sRtn;
    } else {
        objRtn = take.StringToObject(sRtn);
    }
    
    //필요한 컬럼 가져오기
    aCode = take.nvl(objRtn[objRtnCol.code],""); //코드컬럼
    aName = take.nvl(objRtn[objRtnCol.name],""); //명칭컬럼
    
    sPreText = objEdit.text;
    sPreValue = objEdit.codevalue;
    
    sPostText = aName.toString();
    sPostValue = aCode.toString(); 
    
    objEdit.codevalue = sPostValue;
    objEdit.userdata  = sPostValue;
    objEdit.set_value(sPostText);
    
    objEdit.resultdata = objRtn;
    
    if (objEditNm!="") objEditNm.set_value(sPostText);
    
    objEdit._tfnSetEvent(sPreText, sPreValue, sPostText, sPostValue);    
}
            
//이벤트 발생
_tEdit._tfnSetEvent = function(sPreText, sPreValue, sPostText, sPostValue)
{
    //var evt = new nexacro.ChangedEventInfo(this, "onchanged", 0, sPreText, sPreValue, 1, sPostText, sPostValue);
    var evt = new nexacro.ChangedEventInfo(this, "onchanged", sPreText, sPreValue, sPostText, sPostValue);
    this.onchanged._fireEvent(this, evt);
}

//리턴 벨류 정리
_tEdit._tfnReturnVal = function(sRtn)
{
    var nMultiIdx, nIdx, nCnt;
    var arrData = new Array();
    var sValue, sCodeVal = "", sNameVal = "";
    
    if (take.nvl(sRtn,"")=="")
    {
        trace("takeedit(_tfnReturnVal) : 선택된 데이터에 값이 없습니다.");
        return false;
    }
    
    nMultiIdx = sRtn.indexOf("|");
    
    if (nMultiIdx>=0)
    {
        arrData = sRtn.split("|");
        
        nCnt = arrData.length;
    
        if (nCnt>0)
        {
            for (var i=0; i<nCnt; i++)
            {
                sValue = arrData[i];
                
                nIdx = sValue.indexOf(",");
        
                if (nIdx>=0)
                {
                    sCodeVal += (i==0?"":",") + sValue.substr(0, nIdx);
                    sNameVal += (i==0?"":",") + sValue.substr(nIdx+1);
                }
            }
        } 
    
    } else {
        nIdx = sRtn.indexOf(",");
        
        sCodeVal = sRtn.substr(0, nIdx);
        sNameVal = sRtn.substr(nIdx+1);
    }
    
    return [sCodeVal,sNameVal];
}

//리턴 벨류 정리
_tEdit.openEditPopUp = function()
{
    var objEdit = this;
    var objPopBtn = this._tfnGetPopBtn(objEdit.parent, objEdit);
    objPopBtn.click();
}

//==============================================================================
// take nexacro.MaskEdit calendar
//==============================================================================
var _tMask = nexacro.MaskEdit.prototype;
var _tOnMaskCreatContents = nexacro.MaskEdit.prototype.on_create_contents;
var _tOnMaskApplyReadonly = nexacro.MaskEdit.prototype.on_apply_readonly;

_tMask.on_create_contents = function ()
{
    // 기존 스크립트 실행
    _tOnMaskCreatContents.apply(this, arguments);

    if (take.nvl(this.calendartype, "")!="" )
    {
        var sId;
        
        sCalType = this.calendartype.toLowerCase();
    
        this.set_type("string");
        
        if (sCalType=="month") { //월력
            this.popupurl = "frm::com/comCalMonth.xfdl";
            this.set_format("####-##");
        } else if (sCalType=="day") {//달력
            this.popupurl = "frm::com/comSccCal.xfdl";
            this.set_format("####-##-##");
        } else {
            //기타
            take.debug(objPForm, "해당 하는 달력 타입이 없습니다.");
        }
        
        //전체 선택되게 강제 처리
        this.set_autoselect(true);
        
        //unique 아이디 생성
        sId =  "_btnMsk" + this.name.replace("msk","") + "Pop";
    
        this.addEventHandler(
            "canchange", 
            function (obj, e) 
            { 
                if (take.nvl(e.postvalue, "")!="")
                {
                    var sVal;
                    
                    sVal = e.postvalue;
                    
                    if (obj.calendartype.toLowerCase()=="month")
                    {
                        sVal += "01";
                    }
                    
                    if (take.isDate(sVal))
                    {
                        //향후 스콥에 대한 부분 확인 필요(스마일 기준)
                        //obj.parent.parent.parent.getNextComponent(obj.parent.parent).setFocus();
                        var objPopBtn = obj._tfnGetPopBtn(obj.parent, obj);
                        obj.parent.getNextComponent(objPopBtn).setFocus();
                        //TODO : Tab으로 이동시 focus변경이 안되고 잇음 수정 필요
                    } else {    
                        //obj.set_value("");
                        obj.setFocus();
                        return false;
                    }
                }
            }
        )
    
        this.addEventHandler(
            "onkeydown", 
            function (obj, e) 
            { 
                if( e.keycode == 13)
                {   
                    //obj.showPopup(obj, sId, objMaskNm);
                    
                } else if (e.keycode==8 || e.keycode == 46) {
                    
                    //obj.set_value("");
                    //obj.setFocus();
                }
            }
        );
        
        this._tfnAddBtn(this, sId);
    }
}

//readonly 이벤트가 발생할때
_tMask.on_apply_readonly = function (readonly) 
{
    // 기존 스크립트 실행
    _tOnMaskApplyReadonly.apply(this, arguments);
    
    var objPopBtn = this._tfnGetPopBtn(this.parent, this);
    
    if (objPopBtn!="")
    {
        objPopBtn.set_enable(!readonly);
    }
};

/**
* 팝업 버튼 가져오기
* @param  : N/A
* @return : N/A
* @example :  _tMask._tfnGetPopBtn()
*/
_tMask._tfnGetPopBtn = function(objForm, objComp)
{
    var sId;
    var objPopBtn = "";
        
    if (take.nvl(objComp.calendartype, "")!="")
    {
        //아이디 (자동 생성 규칙에 의해서 만들어짐)
        sId =  "_btnMsk" + objComp.name.replace("msk","") + "Pop";
        objPopBtn = take.nvl(objForm[sId],"");
    }
    
    return objPopBtn;
}

/**
* 팝업 버튼 추가
* @param  : N/A
* @return : N/A
* @example :  _tMask._tfnAddBtn()
*/
_tMask._tfnAddBtn = function (objMask, sId)
{
    var objForm, objBtn;
    var nLeft, nWidth, nRight, nBottom, nTop, nHeight;
    
    objForm = this.parent;
    
    //그리드의 현재 좌표값을 페이징을 위한 div의 좌표에 적용하기 위해 세팅
    nLeft   = this.left;
    nWidth  = this.getOffsetHeight(); //width, height를 동일하게 세팅
    nRight  = this.right;
    nBottom = this.bottom;
    nTop    = this.top;
    nHeight = nWidth; //width, height를 동일하게 세팅
    
    //div 생성
    objBtn = new Button(sId, nLeft, nTop, nWidth, nHeight, nRight, nBottom);
    
    //top 을 그리드에 연경
    objBtn.set_left(this.name+":-"+nWidth);
	objBtn.set_tabstop(false);	//220418 정해원 탭키 입력에 의한 포커스 취소
        
    //폼에 버튼 추가
    objForm.addChild(sId, objBtn);
    
    objBtn.addEventHandler(
        "onclick", 
        function (obj, e) 
        { 
            nexacro._OnceCallbackTimer.callonce
            (
                this,
                function () 
                {
                    objMask._tfnPopUp(objMask, objMask.popupurl);
                },
                1
            ); 
        }
    );

    objBtn.set_cssclass("btn_WF_calendar");    
    objBtn.show();
       
    //팝업 버튼 만큼 패딩 생성
    this.set_padding("0px "+ (nWidth+2) +"px 0px 7px");
    
    objBtn.set_taborder(this.taborder);
    
    //폼에 리사이즈 적용을 위해 호출
    objForm.resetScroll();
    
    objBtn.set_visible(objMask.visible);
    objBtn.set_enable(objMask.enable);
}

//월 달력 팝업 띄우기
_tMask._tfnPopUp = function (objMask, sUrl)
{
    //변수에 기본 값 세팅
    var pThis, pForm, objPopupDiv; 
    var sUrl;

    pThis = this.parent;
    
    //PopupDiv 컴포넌트 체크
    objPopupDiv = nexacro._nvl(pThis.pDivMaskSccCal, "");
    
    //PopupDiv가 생성이 안된경우 생성
    if (objPopupDiv=="")  
    {
        //PopupDiv 동적 생성
        objPopupDiv = new PopupDiv();  
        objPopupDiv.init("pDivMaskSccCal", 0, 0, 200, 181, null, null);

        pThis.addChild("pDivMaskSccCal", objPopupDiv); 

        //PopupDiv closeup 이벤트 생성
        objPopupDiv.addEventHandler("oncloseup", function(obj ,e) {
                                                    this._tfnPopupDiv_oncloseup(obj, e);
                                                }, this);
        
        //PopupDiv Show Object  
        objPopupDiv.show(); 
        objPopupDiv.set_border("1px solid #dddddd");
        objPopupDiv.set_async(false);
    }

    //리턴대상 달력 컴포넌트
    objPopupDiv.objComp = objMask;
        
	//컴포넌트에 입력된 날짜 가져오기
    objPopupDiv.data = objMask.value;
    
    //popupdiv size
    objPopupDiv.set_height(181);
    objPopupDiv.set_width(200);

    //PopupDiv Url 세팅
    objPopupDiv.set_url(sUrl);

    //월 달력 PopupDiv 띄우기
    objPopupDiv.trackPopupByComponent(this, 0, this.getOffsetHeight());
};

//Object 타입확인 이벤트
_tMask._tfnIsObject= function(objVal)
{
	if (objVal === null || objVal === undefined) return false;

	// nexacro Component
	if (objVal instanceof nexacro.Component) return true;

	// nexacro Object (e.g. Dataset)
	if (objVal instanceof nexacro.Object) return true;

	return typeof objVal == "object" && 'constructor' in objVal && objVal.constructor === Object;
}

//PopupDiv closeup 이벤트
_tMask._tfnPopupDiv_oncloseup = function(obj, e)
{
    ////PopupDiv 초기화
	obj.set_url("");
    obj.data = null;
};

// //리턴 처리 
// _tMask._tfnPopReturn = function(objMask, sRtn)
// {
//     var sPreText, sPreValue, sPostText, sPostvalue;
//     var aCode, aName;
//     
//     if (take.nvl(sRtn, "")=="") return;
//     if (sRtn=="cancel") return;
//         
//     //필요한 컬럼 가져오기
//     sPreText = objMask.value;
//     sPreValue = objMask.value;
//     
//     sPostText = sRtn;
//     sPostValue = sRtn; 
//     
//     objMask.set_value(sPostValue);
//     
//     objMask._tfnSetEvent(sPreText, sPreValue, sPostText, sPostValue);    
// }
//             
// //이벤트 발생
// _tMask._tfnSetEvent = function(sPreText, sPreValue, sPostText, sPostValue)
// {
//     var evt = new nexacro.ChangedEventInfo(this, "onchanged", 0, sPreText, sPreValue, 1, sPostText, sPostValue);
//     this.onchanged._fireEvent(this, evt);
// }

//==============================================================================
// take nexacro.Component
//==============================================================================
var _pComponent = nexacro.Component.prototype;
var _tOnComponentSetEnable = nexacro.Component.prototype.set_enable;
var _tOnComponentSetVisble = nexacro.Component.prototype.set_visible;

//set_enable 이벤트가 발생할때
_pComponent.set_enable = function (v) 
{
    // 기존 스크립트 실행
    _tOnComponentSetEnable.apply(this, arguments);
    
    if (this.__proto__.hasOwnProperty("_type_name"))
    {
        if (take.nvl(this.__proto__._type_name,"")=="Edit" || take.nvl(this.__proto__._type_name,"")=="MaskEdit")
        {
            var objPopBtn = this._tfnGetPopBtn(this.parent, this);
            
            if (objPopBtn!="")
            {
                objPopBtn.set_enable(v);
            }
        }
    }
};

//set_visible 이벤트가 발생할때
_pComponent.set_visible = function (v) 
{
    // 기존 스크립트 실행
    _tOnComponentSetVisble.apply(this, arguments);
    
    if (this.__proto__.hasOwnProperty("_type_name"))
    {
        if (take.nvl(this.__proto__._type_name,"")=="Edit" || take.nvl(this.__proto__._type_name,"")=="MaskEdit")
        {
            var objPopBtn = this._tfnGetPopBtn(this.parent, this);
            
            if (objPopBtn!="")
            {
                objPopBtn.set_visible(v);
            }
        }
    }
};

//==============================================================================
// take nexacro.Static
//==============================================================================
var _tStatic = nexacro.Static.prototype;
var _tOnStaticCreatContents = nexacro.Static.prototype.on_create_contents;


_tStatic.on_create_contents = function ()
{
    // 기존 스크립트 실행
    _tOnStaticCreatContents.apply(this, arguments);

    if (take.nvl(this.help, "")!="")
    {
        var sId;
        
        //unique 아이디 생성
        sId =  "_btn" + this.name.replace("sta","") + "Help";
           
		this._tfnAddBtn(this, sId, this.help);
    }
}

/**
* 도움말 팝업 버튼 추가
* @param  : N/A
* @return : N/A
* @example :  _tStatic._tfnAddBtn()
*/
_tStatic._tfnAddBtn = function (objStatic, sId, sHelp)
{
    var objForm, objBtn;
    var nLeft, nWidth, nRight, nBottom, nTop, nHeight;
    
    objForm = this.parent;
    
    //그리드의 현재 좌표값을 페이징을 위한 div의 좌표에 적용하기 위해 세팅
    nLeft   = this.left;
    nWidth  = 20;
    nRight  = this.right;
    nBottom = this.bottom;
    nTop    = this.top;
    nHeight = this.height; //height를 동일하게 세팅
    
    //div 생성
    objBtn = new Button(sId, nLeft, nTop, nWidth, nHeight, nRight, nBottom);
    
    //top 을 그리드에 연경
    objBtn.set_left(this.name+":-"+nWidth);
    objBtn.set_visible(objStatic.visible);
        
    //폼에 페이징 div 추가
    objForm.addChild(sId, objBtn);
    
    objBtn.addEventHandler(
        "onclick", 
        function (obj, e) 
        { 
            nexacro._OnceCallbackTimer.callonce
            (
                this,
                function () 
                {
                    _tStatic.showPopup(objForm, objBtn, sId, sHelp);
                },
                1
            ); 
        }
    );

    objBtn.set_cssclass("btn_WF_help02");    
    objBtn.show();
	
	objStatic["help"] = objBtn;
    
    //폼에 리사이즈 적용을 위해 호출
    objForm.resetScroll();
}

/**
* 팝업 Div 띄우기
* @param  : N/A
* @return : N/A
* @example :  _tStatic.showPopup()
*/
_tStatic.showPopup = function (objPForm, objBtn, sId, sHelp)
{
    var objPopupDiv, objSta;
    var nHeight, nWid = 200, nPadding=10, nTextHeight=17, nTextWid, nIco=20;
    
    objPopupDiv = take.nvl(objPForm["_tpDivHelp"], "");
    
    //PopupDiv가 생성이 안된경우 생성
    if (objPopupDiv=="")  
    {
        //PopupDiv 동적 생성
        objPopupDiv = new PopupDiv();  
        objPopupDiv.init("_tpDivHelp", 0, 0, nWid, 100, null, null);

        objPForm.addChild("_tpDivHelp", objPopupDiv);
        
        //PopupDiv Show Object  
        objPopupDiv.show(); 
        objPopupDiv.set_cssclass("pdiv_WF_help");
        
        objSta = new Static();
        objSta.init("_tStaHelp", 0, 0, null, null, 0, 0);
        
        objPopupDiv.form.addChild("_tStaHelp", objSta);
        
        objSta.show(); 
        objSta.set_cssclass("sta_WF_helpBg");
        objSta.set_textAlign("left");
        objSta.set_padding("5px");
        objSta.set_wordWrap("char");
        
    } else {
        objSta = objPopupDiv.form["_tStaHelp"];
    }
    
    //도움말
    objSta.set_text(sHelp);
    
    //popupdiv width(200보다 작을 경우 사이즈에 맞춤)
    nTextWid = take.getTextSize(sHelp)+nPadding;
    nWid = nTextWid<nWid?nTextWid:nWid;
    objPopupDiv.set_width(nWid);
    
    //popupdiv height(wordwrap 될 경우 text height 처리)
    nHeight = (nexacro.ceil(nTextWid/nWid)*nTextHeight)+nPadding;
    objPopupDiv.set_height(nHeight);
    
    objPForm.resetScroll();
    
    //PopupDiv 띄우기
    objPopupDiv.trackPopupByComponent(objBtn, 0, (objBtn.getOffsetHeight()/2)+(nIco/2));
};

//==============================================================================
// take nexacro.Div
//==============================================================================
var _tDiv = nexacro.Div.prototype ;
var _tOnDivCreatContents = nexacro.Div.prototype.on_create_contents;

_tDiv.on_create_contents = function ()
{
    // 기존 스크립트 실행
    _tOnDivCreatContents.apply(this, arguments);

    if (take.nvl(this.formscrollbarsize,"")=="") this.set_formscrollbarsize(10);
    this.set_formscrollbarincbuttonsize(0);
    this.set_formscrollbardecbuttonsize(0);
    
    if (take.nvl(this.keycomp,"")!=="" && take.nvl(this.keyvalue,"")!=="")
    {
        this._tfnSetCopyPaste(this);
    }
}

/**
* Div에 복사 / 붙혀넣기 기능 주입
* @param  {Object} objComp : Div 컴포넌트
* @return : N/A
* @example :  _tDiv._tfnSetCopyPaste()
*/
_tDiv._tfnSetCopyPaste = function(objComp)
{
    var pThis = take.nvl(objComp._objParent,"");
    
    if (pThis=="")
    {
        objComp._objParent = take.nvl(take.getOwnerForm(objComp),"");
        if (objComp._objParent=="")
        {
            take.debug(pThis, "부모폼을 찾을수 없습니다.");
            return;
        }
        
        pThis = objComp._objParent;
    }
    
    take.addEventHandler(
        objComp,
        "onrbuttondown", 
        function (obj, e) 
        { 
            nexacro._OnceCallbackTimer.callonce
            (
                this,
                function () 
                {
                    _tDiv._tfnCopyPaste(obj, e);
                },
                1
            ); 
        },
        pThis
    );
}

/**
* Div에 복사 / 붙혀넣기
* @param  {Object} objComp : Div 컴포넌트
* @param  {Object} objEvt  : Event info Object
* @return {Boolean} true/false : 성공/실패
* @example _tDiv._tfnCopyPaste()
*/
_tDiv._tfnCopyPaste = function(objComp, objEvt)
{
    var pThis = objComp._objParent;
    var sId, sDsataset;
    var objPmenu, objDs;
    var nMenuCnt, nPasteRow;
    
    sId      = "_pmn_" + objComp.name;
    objPmenu = take.nvl(pThis[sId],"")

    objDs = _application.tgdsCopy;
    objDs.filter("");
    
    nMenuCnt = objDs.findRow("idcolumn", "lineend")+1;
    
    if (nMenuCnt<0)
    {
        take.debug(pThis, "tgdsCopy에 'lineend' row는 필수 입니다.");
        return;
    }
    
    objComp._nMenuCnt = nMenuCnt;
    
    nPasteRow = objDs.findRow("idcolumn", "paste");
    
    if (nPasteRow<0)
    {
        take.debug(pThis, "tgdsCopy에 'paste' row는 필수 입니다.");
        return;
    }
    
    //붙혀넣기할 데이터가 있는지 여부에 따라서 팝업 메뉴 enable처리
    if (objDs.rowcount>nMenuCnt)
    {
        objDs.setColumn(nPasteRow, "enablecolumn", "true");
    } else {
        objDs.setColumn(nPasteRow, "enablecolumn", "false");
    }
    
    if (take.nvl(objPmenu,"")=="")
    {
        objPmenu	= new PopupMenu();
        objPmenu.init(sId, "absolute", 0, 0, 0, 0, null, null);
        pThis.addChild(sId, objPmenu);

        // Grid 공통 마우스 우측 메뉴 onmenuclickHandler Event
        objPmenu.addEventHandler(
            "onmenuclick", function (obj, e)
            {
                switch(e.id)
                {
                    case "copy" : 
                        objComp._tfnCopy(objComp);
                        break;
                    case "paste": 
                        objComp._tfnPaste(objComp);
                        break;
                    case "userpopup":
                        objComp._tfnUserPopup(objComp);                        
                        break;
                }
            },
            pThis);

        objPmenu.set_innerdataset(objDs.name);
        objPmenu.set_captioncolumn("captioncolumn");
        objPmenu.set_idcolumn("idcolumn");
        objPmenu.set_levelcolumn("levelcolumn");
        objPmenu.set_enablecolumn("enablecolumn");
        objPmenu.set_userdatacolumn("userdatacolumn");

        objPmenu.set_itemheight(30);

        objPmenu.show();
    }
    
    if (take.nvl(objComp._objKeyComp,"")=="")
    {
        //데이터셋 컴포넌트부터 확인
        objComp._objKeyComp = take.nvl(take.getFormCompByPathName(pThis, objComp.keycomp),"");
        
        if (objComp._objKeyComp=="")
        {
            //데이터셋이 아닐경우 해당 div에 컴포넌트 확인
            objComp._objKeyComp = take.nvl(take.getFormCompByPathName(objComp.form, objComp.keycomp),"");
            if (objComp._objKeyComp=="")
            {
                take.debug(pThis, "key 컴포넌트를 찾을수 없습니다.");
                return;
            } else {
                objComp._sKeyCompType = take.nvl(take.CompTypeName(objComp._objKeyComp),"");
            }
        } else {
            objComp._sKeyCompType = take.nvl(take.CompTypeName(objComp._objKeyComp),"");
        }
    }
    
    objDs.filter("visible!='false'");
    
    objPmenu.trackPopupByComponent(objComp, objEvt.canvasx, objEvt.canvasy);
}

/**
* Div 복사 기능
* @param  {Object} objComp : Div 컴포넌트
* @return {Boolean} true/false : 성공/실패
* @example _tDiv._tfnCopy()
*/
_tDiv._tfnCopy = function(objComp)
{
    var pThis = objComp._objParent;
    var objKeyComp;
    var sKeyValue, sVal, sType;
    
    objKeyComp = objComp._objKeyComp;    
    sType = objComp._sKeyCompType;    
    sKeyValue = objComp.keyvalue;
    
    if (sType=="Dataset")
    {
        sVal = objKeyComp.getColumn(0, sKeyValue);
        if (sVal=="undefined")
        {
            take.debug(pThis, "key 컬럼(" + sKeyValue + ")에서 데이터 가져오기 실패");
            return false;
        }
        
        sVal = take.nvl(sVal,"");
    } else {
        if (objKeyComp.hasOwnProperty(sKeyValue))
        {
            sVal = take.nvl(objKeyComp[sKeyValue],"");
        } else {
            take.debug(pThis, "key 프러퍼티(" + sKeyValue + ")에서 데이터 가져오기 실패");
            return false;
        }
    }
    
    if (sVal=="")
    {
        take.alert(pThis, "Info", "복사할 값이 없습니다.", "", "xfnCopyAlert0");
        return false;
    }
    
    //데이터 복사
    _tDiv._tfnCopyData(objComp, sVal);
}

/**
* 데이터셋에 데이터 추가
* @param  {String}  sVal : 복사할 값
* @return {Boolean} true/false : 성공/실패
* @example _tDiv._tfnCopyData()
*/
_tDiv._tfnCopyData = function(objComp, sVal)
{
    var pThis = objComp._objParent;
    var objDs;
    var nRow, nCnt, nHisCnt=5, nIdx, nMenuCnt;
    
    nMenuCnt = objComp._nMenuCnt;
    
    objDs = _application.tgdsCopy;
    objDs.filter("");
    
    nRow = objDs.insertRow(nMenuCnt); //3번째 row부터 삽입
    
    objDs.setColumn(nRow, "captioncolumn", sVal);
    nIdx = objDs.setColumn(nRow, "idcolumn", sVal);
    nIdx = objDs.setColumn(nRow, "levelcolumn", "0");
    objDs.setColumn(nRow, "enablecolumn", "false");
    //objDs.setColumn(nRow, "visiblecolumn", "true");
    objDs.setColumn(nRow, "visible", "false");
    
    nCnt = objDs.rowcount;
    
    if (nCnt>nHisCnt+nMenuCnt)
    {
        objDs.deleteRow(nCnt-1);
    }
    
    objDs.filter("visible!='false'");
    
    if (nIdx<0)
    {
        take.debug(pThis, "데이터 복사 실패");
        return false;
    } else {
        return true;
    }
}

/**
* Div 붙혀넣기 기능
* @param  {Object} objComp : Div 컴포넌트
* @return {Boolean} true/false : 성공/실패
* @example _tDiv._tfnCopy()
*/
_tDiv._tfnPaste = function(objComp)
{
    var pThis = objComp._objParent;
    var objDs, objKeyComp;
    var sVal, sType, sKeyValue;
    var nIdx, nMenuCnt;
    
    objDs = _application.tgdsCopy;
    objDs.filter("");
    nMenuCnt = objComp._nMenuCnt;
    
    if (objDs.rowcount<=nMenuCnt)
    {
        take.alert(pThis, "Info", "붙혀 넣기할 데이터가 없습니다.", "", "xfnPasteAlert0");
        return false;
    }
    
    objKeyComp = objComp._objKeyComp;
    sType = objComp._sKeyCompType;
    
    sKeyValue = objComp.keyvalue;
    sVal = objDs.getColumn(nMenuCnt, "idcolumn");
    
    if (sVal=="")
    {
        take.alert(pThis, "Info", "붙혀 넣기할 값이 없습니다.", "", "xfnPasteAlert1");
        return false;
    }
    
    if (sType=="Dataset")
    {
        nIdx = objKeyComp.setColumn(objKeyComp.rowpostion, sKeyValue, sVal);
        if (nIdx==-1)
        {
            take.debug(pThis, "key 컬럼(" + sKeyValue + ")에서 데이터 붙혀넣기 실패");
            return false;
        }
    } else {
        //if (objKeyComp.hasOwnProperty(sKeyValue))
        //{
        try {
            if (sKeyValue=="value")
            {
                objKeyComp.set_value(sVal);
                objKeyComp.updateToDataset();
            } else if (sKeyValue=="text") {
                objKeyComp.set_text(sVal);
            } else {
                objKeyComp[sKeyValue] = sVal;
            }
        } catch(e) {
            take.debug(pThis, "key 프러퍼티(" + sKeyValue + ")에서 데이터 붙혀넣기 실패");
            return false;
        }
        //} else {
        //    take.debug(pThis, "key 프러퍼티(" + sKeyValue + ")에서 데이터 붙혀넣기 실패");
        //    return false;
        //}
    }
    
    return true;
}

/**
* 사용자 찾기 팝업 호출후 키값 복사하기
* @param  {Object} objComp : Div 컴포넌트
* @return {N/A}    N/A
* @example _tDiv._tfnUserPopup()
*/
_tDiv._tfnUserPopup = function(objComp)
{
    take.openPopup(
        objComp._objParent, 
        "copyPasteUserPop", 
        "frm::com/comUserPopUp.xfdl", 
        {Title: "사용자 팝업", Text:"", Param:"", Multi:null},
        "showtitlebar=true layered=false", 
        function(sPopId, sRtn) {   
            var objRtn;
            var sVal; //aCode, aName
            
            if (take.nvl(sRtn, "")=="") return;
            if (sRtn=="cancel") return;
            
            //String으로 넘어온 팝업 Return값을 Object로 변환
            if (typeof(sRtn) === "object")
            {
                objRtn = sRtn;
            } else {
                objRtn = take.StringToObject(sRtn);
            }
            
            //필요한 컬럼 가져오기
            //aCode = take.nvl(objRtn["code"],""); //코드컬럼
            //aName = take.nvl(objRtn["name"],""); //명칭컬럼
            sVal = take.nvl(objRtn["code"],"");
            
            objComp._tfnCopyData(objComp, sVal);
            objComp._tfnPaste(objComp);
        }, 
        false
    );
}

//=============================================
// take nexacro.FileUpTransfer
//=============================================
var _tFileTransUp = nexacro.FileUpTransfer.prototype;
var _tOnFileTransUpCreatContents = nexacro. FileUpTransfer.prototype.on_create_contents;

///_tFileTransUp.on_create_contents = function ()
//{
//    //기존 스크립트 실행
//    _tOnFileTransUpCreatcontents.apply(this, arguments);
//}

//테이크 파일 드래그앤드롭 세팅
_tFileTransUp.setTakeDragFile = function(pThis, sId, sCallBack, objComp, objDs, objOption)
{
    var objFileTran = this;

    if (take.nvl(objComp, "")=="")
    {
        take.debug(pThis, "drop 대상 컴포넌트가 없습니다.");
        return false;
    }
    
    if (!objFileTran._initFile(pThis, sId, sCallBack, objDs, objOption))
    {
        return false;
    }
    
    take.addEventHandler(
        objComp,
        "ondrop",
        function(obj, e)
        {
            var objEvent = new Object();
            objEvent.path = "";
            objEvent.reason = objFileTran._nReason;
            objEvent.virtualfiles = e.filelist;

            if (nexacro._Browser == "Runtime")
            {
                objFileTran._openFileRuntime(objFileTran, objEvent);
            } else {
                objFileTran._openFileHtml5(objFileTran, objEvent);
            }
        },
        pThis);
};

//테이크 파일 오픈
_tFileTransUp.takeOpenFile = function(pThis, sId, sCallBack, objDs, objOption)
{
    var objFileComp;
    
    if (!this._initFile(pThis, sId, sCallBack, objDs, objOption))
    {
        return false;
    }
    
    //파일 다이얼로그 컴포넌트 생성 및 세팅
    objFileComp = take.nvl(pThis[sId], "");
    
    if (objFileComp=="")
    {
        objFileComp = new FileDialog();
        
        pThis.addChild(sId, objFileComp);
        
        objFileComp.addEventHandler(
            "onclose",
            function(obj, e) {
                if (nexacro._Browser == "Runtine")
                {
                    obj._objFileTran._openFileRuntime(obj, e);
                } else {
                    obj._objFileTran._openFileHtml5(obj, e);
                }
            },
            pThis);
    }
    
    objFileComp._objFileTran = this;
    objFileComp.set_accept(this._sAccept);
    objFileComp.open("파일열기", this._sMode, "%MYDOCUMENT%");
};

//take file 초기화
_tFileTransUp._initFile = function (pThis, sId, sCallBack, objDs, objOption)
{
    this._pThis     = take.nvl(pThis, "");
    this._sId       = take.nvl(sId, "");
    this._sCallBack = take.nvl(sCallBack, "");
    this._objDs     = take.nvl(objDs, "");
    this._arrAccept = null;
    this._nReason   = null;
    this._nSize     = null;
    this._sAccept   = "";
    this._sMode     = null;
    
    var nDefaultSize=100, nLens;
    var bMulti;
    
    if (this._pThis=="")
    {
        take.debug("", "폼 인자값은 필수입니다.");
        return false;
    }
    
    if (this._sId=="")
    {
        take.debug(this._pThis, "파일 컴포넌트 아이디는 필수입니다.");
        return false;
    }
    
    if (this._sCallBack=="")
    {
        take.debug(this._pThis, "Call back 함수는 필수입니다.");
        return false;
    }
    
    //옵션값 세팅
    if (take.nvl(objOption,"")=="")
    {
        bMulti = false;
        this._arrAccept = ["*"];
        this._sAccept = "";
        this._nSize = nDefaultSize;
    } else {
        if (take.isEmpty(objOption.multi))
        {
            bMulti = false;
        } else {
            bMulti = objOption.multi;
        }
        
        this._arrAccept = take.nvl(objOption.accept,"");
        
        if (this._arrAccept=="")
        {
            this._arrAccept = ["*"];
            this._sAccept = "";
        } else {
            nLens = this._arrAccept.length;
            
            if (nLens>0)
            {
                for (var j=0;j<nLens;j++)
                {
                    this._sAccept += (this._sAccept=="."?"":",.") + this._arrAccept[j];
                }
            } else {
                this._arrAccept = ["*"];
                this._sAccept = "";
            }
        }
        
        this._nSize = take.nvl(objOption.size, nDefaultSize);
    }
    
    if (bMulti==true)
    {
        this._nReason = 3; //멀티 파일 선택 Reason 값
        this._sMode = FileDialog.MULTILOAD;
    } else {
        this._nReason = 1; //멀티 파일 선택 Reason 값
        this._sMode = FileDialog.LOAD;
        
        // console.dir(this);
        this.clearFileList();
        take.debug(this._pThis, "FileUpTransfer 컴포넌트 File list 초기화");
        
        if (this._objDs!="")
        {
            this._objDs.clearData();
            take.debug(this._pThis, "Dataset 데이터 초기화");
        }
    }
    
    return true;
}

//FileDialog 오픈 success html5
_tFileTransUp._openFileHtml5 = function(obj, e)
{
    var pThis, objDs, objFileList, objFileTran, objFile, objFileHandle, objRtnFiles = {};
    var arrFileInfo, arrAccept;
    var nFilCnt, nRow, nFileSize, nSize;
    var sId, sCallBack, sLocalPath, sMsg="", sFileFullNm;
    var bSize, bExt;

    objFileTran = this;
    
    pThis     = objFileTran._pThis;
    sId       = objFileTran._sId;
    sCallBack = objFileTran._sCallBack;
    objDs     = objFileTran._objDs;
    arrAccept = objFileTran._arrAccept;
    nSize     = objFileTran._nSize;

    //FileDialog.MULTILOAD 옵션으로 open() 메소드를 실행하며 파일을 한개 이상 선택
    if (e.reason==objFileTran._nReason)
    {
        sLocalPath = e.path;
        objFileList = e.virtualfiles;
        nFileCnt = objFileList.length;
        
        objRtnFiles["length"] = nFileCnt;
        
        if (take.nvl(objFileTran.url, "") == "")
        {
            objFileTran.set_url(take.getSvcUrl()+"fileupload.do");
        }
        
        for (var i=0; i<nFileCnt; i++)
        {
            objFile = objFileList[i];
            objFileHandle = objFile._handle;
            arrFileInfo = take.getFileInfo(objFile.filename);
            
            nFileSize = objFileHandle.size/1024;
            
            if ((arrAccept.indexOf(arrFileInfo[1]) >= arrAccept.indexOf("*")>=0))
            {
                bExt = true;
            } else {
                bExt = false;
                sMsg+= "[" + objFile.filename + "]은(는) 허용하지 않는 확장자 파일입니다.\n";
            }
            
            if ((nFileSize/1024)<=nSize)
            {
                bSize = true;
            } else {
                bSize = false;
                sMsg+= "[" + objFile.filename + "] 파일의 사이즈가 허용사이즈(" + nSize + "M) 보다 큽니다.\n";
            }
            
            if (bSize && bExt)
            {
                if (objFileTran.filelist._idArray.indexOf(objFile.filename)>=0)
                {
                    arrFileInfo[0] += " - 복사본(" + new nexacro.Date().toString() + ")";
                    sFileFullNm = arrFileInfo[0] + "." + arrFileInfo[1];
                } else {
                    sFileFullNm = objFile.filename;
                }
                
                objRtnFiles[i] = new Object();
                objRtnFiles[i]["fullName"]     = sFileFullNm;
                objRtnFiles[i]["fileName"]     = arrFileInfo[0];
                objRtnFiles[i]["extName"]      = arrFileInfo[1];
                objRtnFiles[i]["filePath"]     = e.path;
                objRtnFiles[i]["fileSize"]     = nFileSize;
                objRtnFiles[i]["fileType"]     = objFileHandle.type;
                objRtnFiles[i]["lastModified"] = objFileHandle.lastModified;
                
                //fileuptnansper 파일 객체 넣기
                objFile["filename"] = sFileFullNm;
                objFileTran.addFile(sFileFullNm, objFile);
                
                if (take.nvl(objDs,"")!="")
                {
                    nRow = objDs.addRow();
                    objDs.setColumn(nRow, "fullName",     sFileFullNm);
                    objDs.setColumn(nRow, "fileName",     arrFileInfo[0]);
                    objDs.setColumn(nRow, "extName",      arrFileInfo[1]);
                    objDs.setColumn(nRow, "filePath",     e.path);
                    objDs.setColumn(nRow, "fileSize",     nFileSize);
                    objDs.setColumn(nRow, "fileType",     objFileHandle.type);
                    objDs.setColumn(nRow, "lastModified", objFileHandle.lastModified);
                }
            } else {
                objRtnFiles["result"] = false;
                objRtnFiles["message"] = sMsg;                
                pThis[sCallBack].call(pThis, sId, objRtnFiles);
                return false;
            }
        }
        
        objRtnFiles["result"] = true;
        objRtnFiles["message"] = "파일 선택 성공";                
        pThis[sCallBack].call(pThis, sId, objRtnFiles);
        return true;
    }
    
    return;
};

//FileDialog 오픈 success runtime
_tFileTransUp._openFileRuntime = function(obj, e)
{
    var pThis, objFileList, objFileTran, objFile, objRtnFiles = {};
    var nFileCnt;
    var sId, sCallBack;
    
    objFileTran = this;
    
    pThis = objFileTran._pThis;
    sId = objFileTran._sId;
    sCallBack = objFileTran._sCallback;
    
    //FileDialog.MULTILOAD 옵션으로 open() 메소드를 실행하여 파일을 한개 이상 선택하였을 경우
    if (e.reason==objFileTran._nReason)
    {
        objFileList = e.virtualfiles;
        nFileCnt = objFileList.length;
        
        objRtnFiles["length"] = nFileCnt;
        
        if (take.nvl(objFileTran.url,"")=="")
        {
            objFileTran.set_url(take.getSvcUrl() + "fileupload.do");
        }
        
        for (var i=0; i<nFileCnt; i++)
        {
            objFile = objFileList[i];
            objFile._objRtnFiles = objRtnFiles;
            objFile._nFileListNo = i;
            objFile._bSize       = null;
            objFile._bExt        = null;
            objFile._sMsg        = "";
            objFile._nFileSize   = null;
            objFile._objFileTran = objFileTran;
            
            objFile.removeEventHandler(
                "onsuccess",
                objFileTran._VFileOpen_onsuccess,
                pThis);
                
            objFile.addEventHandler(
                "onsuccess",
                objFileTran._VFileOpen_onsuccess,
                pThis);
                
            objFile.removeEventHandler(
                "onerror",
                objFileTran._VFileOpen_onerror,
                pThis);
                
            objFile.addEventHandler(
                "onerror",
                objFileTran._VFileOpen_onerror,
                pThis);
            
            objFile.open(null, nexacro.VirtualFile.openBinary);
        }
    }
    
    return;
}

//v file open onsuccess
_tFileTransUp._VFileOpen_onsuccess = function (obj,e)
{
    var pThis, objRtns, objFileTran, objDs;
    var nSize, nFileSize, nRow, nIdx;
    var bSize, bExt;
    var arrFileInfo, arrAccept;
    var sFileFullNm, sCallBack, sId, sOrgFileFullNm;
    
    objRtns     = obj._objRtnFiles;
    objFileTran = obj._objFileTran;
    pThis       = objFileTran._pThis;
    sCallBack   = objFileTran._sCallBack;
    sId         = objFileTran._sId;
    
    // 1(open) --> 3(read) --> 9(filesize) --> 2(close) 순서로 발생
    trace("_VFileOpen_onsuccess reason----------->" + e.reason);
    
    if (e.reason==1)
    {
        obj.read();
        obj.getFileSize();
        obj.close();
    } else if (e.reason==9) {
        arrFileInfo = take.getFileInfo(obj.filename);
        arrAccept = objFileTran._arrAccept;
        
        //확장자 체크
        if ((arrAccept.indexOf(arrFileInfo[1]) >=0 || arrAccept.indexOf("*")>=0))
        {
            obj._bExt = true;
        } else {
            obj._bExt = false;
            obj._sMsg += "[" + obj.filename + "]은(는) 허용하지 않는 확장자입니다.\n";
        }
        
        //사이즈 체크
        nSize = objFileTran._nSize;
        nFileSize = (e.filesize / 1024).toFixed();
        obj._nFileSize = nFileSize;
        
        if (nFileSize/1024<=nSize)
        {
            obj._bSize = true;
        } else {
            obj._bSize = false;
            obj._sMsg+= "[" + obj.filename + "] 파일의 사이즈가 허용사이즈(" + nSize + "M)보다 큽니다.\n";
        }
    } else if (e.reason==2) {
        if (obj._bSize && obj._bExt)
        {
            arrFileInfo = take.getFileInfo(obj.filename);
            
            if (objFileTran.filelist._idArray.indexOf(obj.filename)>=0)
            {
                arrFileInfo[0] +=" - 복사본(" + new nexacro.Date().toString()+")";
                sFileFullNm = arrFileInfo[0] + "." + arrFileInfo[1];
            } else {
                sFileFullNm = obj.filename;
            }
            
            //fileuptransper에 파일 객체 넣기
            sOrgFileFullNm = obj.filename;
            obj["filename"] = sFileFullNm;
            
            nIdx = objFileTran.addFile(sFileFullNm, obj);
            
            if (nIdx>=0)
            {
                objRtns[obj._nFileListNo] = new Object();
                objRtns[obj._nFileListNo]["fullName"]     = sFileFullNm;
                objREns[obj._nFileListNo]["fileName"]     = arrFileInfo[0];
                objRtns[obj._nFileListNo]["extName"]      = arrFileInfo[1];
                objRtns[obj._nFileListNo]["filePath"]     = obj.fullpath;
                objRtns[obj._nFileListNo]["fileSize"]     = obj._nFileSize;
                objRtns[obj._nFileListNo]["fileType"]     = "";
                objRtns[obj._nFileListNo]["lastModified"] = "";
                
                objDs = objFileTran._objDs;
                if (take.nvl(objDs,"")!="")
                {
                    nRow = objDs.addRow();
                    objDs.setColumn(nRow, "fullName", sFileFullNm);
                    objDs.setColumn(nRow, "fileName", arrFileInfo[0]);
                    objDs.setColumn(nRow, "extName",  arrFileInfo[1]);
                    objDs.setColumn(nRow, "filePath", obj.fullpath);
                    objDs.setColumn(nRow, "fileSize", nFileSize);
                    objDs.setColumn(nRow, "fileType", "");
                    objDs.setColumn(nRow, "lastModified", "");
                }
            } else {
                objRtns["result"] = false;
                objRtns["message"] = "[" + sOrgFileFullNm + "] 파일 추가에 실패하였습니다.";
                
                pThis[sCallBack].call(pThis, sId, objRtns);
                return false;
            }
        } else {
            objRtns["result"] = false;
            objRtns["message"] = obj._sMsg;
            
            pThis[sCallBack].call(pThis, sId, objRtns);
            return false;
        }
        
        objRtns["result"] = true;
        objRtns["message"] = "파일 선택 성공";
        
        pThis[sCallBack].call(pThis, sId, objRtns);
        return true;
        
    } else if (e.reason==3) {
        obj._sBinary = e.binarydata;
    }
}

//v file open error
_tFileTransUp._VFileOpen_onerror = function (obj,e)
{
    var objFileTran, objRtns;
    
    objFileTran = obj._objFileTran;
    objRtns = obj._objRtnFiles;
    objRtns["result"] = false;
    objRtns["message"] = e.errormsg;
    
    objFileTran._pThis[objFileTran._sCallBack].call(objFileTran._pThis, objFileTran._sId, objRtns);
    return false;
}

//바이너리 데이터 리턴
_tFileTransUp.getBinary = function(pThis, sFullFileNm, aCallBack)
{
    var objFileTran, objVFile, objReader;
    
    objFileTran = this;
    
    objVFile = take.nvl(this.filelist[sFullFileNm],"");
    
    if (objVFile=="")
    {
        take.debug(pThis, "해당 파일 객체가 존재하지 않습니다.");
        pThis[aCallBack].call(pThis, sFullFileNm, "");
        return;
    }
    
    if (nexacro._Browser == "Runtime" )
    {
        pThis[aCallBack].call(pThis, sFullFileNm, {"result":true, "message":"파일 읽기 성공", "binary":objFileTran.filelist[sFullFileNm]["_sBinary"]});
    } else {
        objReader = new FileReader();
        objReader.readAsDataURL(objVFile._handle);
        
        //로드 후
        objReader.onload = function()
        {
            // console.dir(objReader);
            pThis[aCallBack].call(pThis, sFullFileNm, {"result":true, "message":"파일 읽기 성공", "binary":objReader.result});
        };
        
        objReader.onerror = function()
        {
            pThis[aCallBack].call(pThis, sFullFileNm, {"result":false, "message":"파일 읽기 실패(" + objReader.result + ")", "binary":""});
        }
    }
};

var _tForm = nexacro.Form.prototype;
var _tFormClose = _tForm.close;

_tForm.close = function ()
{
    var bPop, bModeless=false;
    var pThis, objPopFrames, objFrame;
    var sId;
    var aRtn;
    
    bPop = take.isPopUpForm(this);
    
    if (bPop)
    {
        pThis = this.opener;
        sId = this.parent.name;
        
        objPopFrames = take.nvl(nexacro.getApplication().popupframes,"");
        
        if (objPopFrames!="")
        {
            objFrame = take.nvl(objPopFrames[objPopFrams[sId]],"");
            
            if (objFrame!="")
            {
                bModeless = true;
            }
        }
        
        bModeless = take.nvl(this.getOwnerFrame().getOwnerFrame()._frames[sId]._tbModal,"");
		if (bModeless=="" ) bModeless = true;
        
        if (!bModeless)
        {
            aRtn = arguments[0];
            
            if (take.isObject(aRtn))
            {
                //Object형일 경우 복사해서 리턴한다.
                pThis["_tv_objRtn"][sId] = new Object();
                pThis["_tv_objRtn"][sId] = take.getCopyObject(aRtn, pThis["_tv_objRtn"][sId]);
            } else {
                //그외 텍스트이거나 nexacro 컴포넌트 형일 경우 그래로 리턴
                //주의 : 컴포넌트 형일 경우 팝업 close하면 해당 팝업의 컴포넌트는 없음 주의
                if (take.CompTypeName(aRtn)!="")
                {
                    trace("주의 : 컴포넌트 형일 경우 팝업 close이 후 해당 팝업의 컴포넌트는 이미 소멸되고 없습니다.");
                }
                pThis["_tv_objRtn"][sId] = aRtn;
            }
        }
    }
    
    // 기존 스크립트 실행
    _tFormClose.apply(this, arguments);
    
}

//==============================================================================
// Object : nexacro.Calendar
// Group : Component
//==============================================================================
var _tCalendar = nexacro.Calendar.prototype;
var _tOnCalendarCreatContents = nexacro.Calendar.prototype.on_create_contents;

//var onCreatedContents = nexacro.Calendar.prototype.on_created_contents;

_tCalendar.on_create_contents = function ()
{
    // 기존 스크립트 실행
    _tOnCalendarCreatContents.apply(this, arguments);

    if (take.nvl(this.calendartype, "")!="")
    {
        //사용 User Property
        //calendartype  {String} ==> 표현할 데이터 정보

        this.calendartype = this.calendartype.toLowerCase();
        
        if (this.calendartype=="month")
        {
            //기본 월 달력사용을 위한 프로퍼티 세팅
            this.set_dateformat("yyyy-MM");
            this.set_editformat("yyyy-MM");
            this.popupurl = "frm::com/comCalMonth.xfdl";
        } else if (this.calendartype=="year") {
            //기본 월 달력사용을 위한 프로퍼티 세팅
            this.set_dateformat("yyyy");
            this.set_editformat("yyyy");
            this.popupurl = "frm::com/comCalYear.xfdl";
        } else if (this.calendartype=="day") {
            this.popupurl = "frm::com/comCalCustom.xfdl";
        } else if (this.calendartype=="fromto") {
            if (take.nvl(this.fromcal,"")=="" && take.nvl(this.tocal,"")=="")
            {
                trace("Dev message : takecalendar 기간달력(this.calendartype==fromto)에는 from 달력컴포넌트 또는 to 달력컴포넌트를 지정해야합니다.");
                return;
            } else {
                this.popupurl = "frm::com/comCalDayFT.xfdl";
            }
        } 
        
        //엔터키 입력시 달력 팝업 오픈
  	    this.addEventHandler(
            "onkeydown", 
            function(obj, e) {
                if (e.keycode==13)
                {
                    this._tfnPopUp();
                }
            }, 
            this);

        //달력 컴포넌트의 달력 드롭다운 이벤트시 달력 팝업 오픈
        this.addEventHandler(
            "ondropdown", 
            function(obj ,e) {
                //trace("onCreatContents_ondropdown");
                this._tfnPopUp();
            }, this);

        this.set_popuptype("none");
    }
}

/** 
_tCalendar.on_created_contents = function ()
{
    // 기존 스크립트 실행
    onCreatedContents.apply(this, arguments);    

    if (take.nvl(this.calendartype, "")=="Month")
    {
         //사용 User Property
         //calendartype  {String} ==> 표현할 데이터 정보

  	     this.addEventHandler("onkeydown", function(obj, e) {
                                                 if (e.keycode==13)
                                                 {
                                             	    this._tfnPopUp();
                                                 }
                                             }, this);
         this.addEventHandler("ondropdown", function(obj ,e) {
                                                  trace("onCreatedContents_ondropdown");
                                                  this._tfnPopUp();
                                             }, this);
                                             
         this.set_dateformat("yyyy-MM");
         this.set_editformat("yyyy-MM");
         this.set_popuptype("none");
    }
};
**/

//월 달력 팝업 띄우기
_tCalendar._tfnPopUp = function ()
{
    //변수에 기본 값 세팅
    var pThis, pForm, objPopupDiv; 
    var sUrl;

    pThis = this.parent;

    sUrl = this.popupurl;
    
    //PopupDiv 컴포넌트 체크
    objPopupDiv = nexacro._nvl(pThis.pDivCalMonth, "");
    
    //PopupDiv가 생성이 안된경우 생성
    if (objPopupDiv=="")  
    {
        //PopupDiv 동적 생성
        objPopupDiv = new PopupDiv();  
        objPopupDiv.init("pDivCalMonth", 0, 0, 197, 191, null, null);

        pThis.addChild("pDivCalMonth", objPopupDiv); 

        //PopupDiv closeup 이벤트 생성
        objPopupDiv.addEventHandler("oncloseup", function(obj ,e) {
                                                    this._tfnPopupDiv_oncloseup(obj, e);
                                                }, this);
        
        //PopupDiv Show Object  
        objPopupDiv.show(); 
        objPopupDiv.set_border("1px solid #dddddd");
        objPopupDiv.set_async(false);
    }

    //리턴대상 달력 컴포넌트
    objPopupDiv.objComp = this;
        
	//달력컴포넌트에 입력된 값 가져오기
    objPopupDiv.data = this.calendaredit.text;
    
    if (this.calendartype=="fromto")
    {
        if (take.nvl(this._tOwnerForm,"")=="")
        {
            this._tOwnerForm = take.getOwnerForm(this);
        }
        
        //From
        if (take.nvl(this.fromcal, "")=="")
        {
            this.fromcal = this;
        } else {
        
            if (this._tfnIsObject(this.fromcal)==false)
            {
                if (this.fromcal.substring(0,4)=="this")
                {
                    //this.fromcal = pThis._xfnGetCompByPathName(this.fromcal.replace("this.",""), this._tOwnerForm);
                    this.fromcal = take.getFormCompByPathName(this._tOwnerForm, this.fromcal.replace("this.",""));
                } else {
                    //this.fromcal = pThis._xfnGetCompByPathName(this.fromcal, pThis);
                    this.fromcal = take.getFormCompByPathName(pThis, this.fromcal);
                }
                
            }
        }
        
        objPopupDiv.objFComp = this.fromcal;
        //objPopupDiv.sFData = this.fromcal.calendaredit.text;
        
        //To
        if (take.nvl(this.tocal, "")=="")
        {
            this.tocal = this;
        } else {
            if (this._tfnIsObject(this.tocal)==false)
            {
                if (this.tocal.substring(0,4)=="this")
                {
                    //this.tocal = pThis._xfnGetCompByPathName(this.tocal.replace("this.",""), this._tOwnerForm);
                    this.tocal = take.getFormCompByPathName(this._tOwnerForm, this.tocal.replace("this.",""));
                } else {
                    //this.tocal = pThis._xfnGetCompByPathName(this.tocal, pThis);
                    this.tocal = take.getFormCompByPathName(pThis, this.tocal);
                }
            }
        }
        
        objPopupDiv.objTComp = this.tocal;
        objPopupDiv.seltype = take.nvl(this.seltype,"")=="true"?true:false ;
        //objPopupDiv.sTData = this.tocal.calendaredit.text;
        
        //popupdiv size
        objPopupDiv.set_height(302);
        objPopupDiv.set_width(400);
    } else {
        //popupdiv size
        objPopupDiv.set_height(185);
        objPopupDiv.set_width(200);
    }


    //PopupDiv Url 세팅
    objPopupDiv.set_url(sUrl);

    //월 달력 PopupDiv 띄우기
    objPopupDiv.trackPopupByComponent( this, 0, this.getOffsetHeight() );
};

//PopupDiv closeup 이벤트
_tCalendar._tfnIsObject= function(objVal)
{
	if (objVal === null || objVal === undefined) return false;

	// nexacro Component
	if (objVal instanceof nexacro.Component) return true;

	// nexacro Object (e.g. Dataset)
	if (objVal instanceof nexacro.Object) return true;

	return typeof objVal == "object" && 'constructor' in objVal && objVal.constructor === Object;
}

//PopupDiv closeup 이벤트
_tCalendar._tfnPopupDiv_oncloseup = function(obj, e)
{
    ////PopupDiv 초기화
	obj.set_url("");
    obj.data = null;
    //obj.sFData = null;
    //obj.sTData = null;
    obj.objComp = null;
    obj.objFComp = null;
    obj.objTComp = null;
};

//==============================================================================
// Object : nexacro._ChartBase
//
// Group : Component
//==============================================================================

var _tChartBase = nexacro._ChartBase.prototype;
var _tBasicChart = nexacro.BasicChart.prototype;

// var _tChartAxisControl = nexacro.ChartAxisControl.prototype;
// var _tChartTooltipControl = nexacro.ChartTooltipControl.prototype;
// var _tChartBoardControl = nexacro.ChartBoardControl.prototype;
// var _tChartLegendControl = nexacro.ChartLegendControl.prototype;
// 
nexacro._ChartColorset.colorCategory[0] = "takecolor";
  
// nexacro._ChartColorset.takecolor = [
//     "#7cb5ec",  // (하늘)
//     "#8085e9",  // (진하늘)
//     "#515edf",  // (파랑)
//     "#007db6",  // (청록)
//     "#45436c",  // (남색)
//     "#81ddc6",  // (민트)
//     "#88b14b",  // (어두운 초록)
//     "#d1af94",  // (헤이즐넛)
//     "#edc683",  // (살색)
//     "#f7a35c",  // (살구)
//     "#fe8c68",  // (살몬)
//     "#f35e58",  // (다홍)
//     "#ff7314",  // (주황)
//     "#694e23",  // (갈색)
//     "#fe9ab2",  // (연분홍)
//     "#f15c80",  // (분홍)
//     "#f82e19",  // (빨강)
//     "#bc51df",  // (보라)
//     "#8c8c91",  // (회색)
//     "#434348",  // (어두운 회색)    
// ];

nexacro._ChartColorset.takecolor = [
    "#81ddc6",  //민트
    "#f35e58",  //다홍
    "#edc683",  //살색
    "#fe9ab2",  //연분홍    
    "#fe8c68",  //살몬
    "#7cb5ec",  //하늘
    "#8085e9",  //진하늘
    "#f15c80",  //분홍
    "#f7a35c",  //살구
    "#d1af94",  //헤이즐넛
    "#515edf",  //파랑
    "#bc51df",  //보라
    "#88b14b",  //어두운 초록
    "#45436c",  //남색
    "#007db6",  //청록
    "#8c8c91",  //회색
    "#f82e19",  //빨강
    "#694e23",  //갈색    
    "#ff7314",  //주황
    "#434348"   //어두운 회색
];
_tChartBase._colorset = "takecolor";

var _tUserTextColor = "#838383";
var _tUserTextFont  = '12px "NanumGothic"';
var _tUserLineStyle = "1px solid #f6f6f6";

// _tChartBase.on_create_contents = function()
// {
//     _tChartBase.on_create_contents.apply(this, arguments);
//     
// //     this.tooltip.background = "#4b4b4b";
// //     this.tooltip.linestyle  = "0px none";
// //     this.tooltip.textcolor  = "#ffffff";
// //     this.tooltip.textfont   = _tUserTextFont;
// //     this.tooltip.padding    = "0px 0px 0px 10px";
//     
// //     this.tooltip.set_background("#4b4b4b");
// //     this.tooltip.set_linestyle("0px none");
// //     this.tooltip.set_textcolor("#ffffff");
// //     this.tooltip.set_textfont(_tUserTextFont);
// //     this.tooltip.set_padding("0px 0px 0px 10px");
//     
// }

//==============================================================================
// Object : nexacro.NormalDataset
//
// Group : Object
//==============================================================================
//Dataset prototype
var _tDataset = _tDataset || nexacro.NormalDataset.prototype;

////////////////////////////////피봇 관련 /////////////////////////////////
/**
* 피봇 실행
* @param   {Object} objDs   피봇 대상 데이터가 있는 데이터셋
* @param   {Object} objGrid 피봇을 표현할 그리드
* @return  N/A
* @example dataset.takePivot(this.dsList, this.grdPivotList)
*/
_tDataset.takePivot = function(objDs, objGrid)
{
    //사용법
    //1. 데이터셋에 'groupkey' userproperty 생성 후 그룹키 설정 (':'으로 요러개 설정 가능)
    //2. 데이터셋에 'pivotkey' userproperty 생성 후 피봇키 설정 (현재 단일키만 허용)
    //3. 피봇을 표현할 그리드에 그리드 포멧 만들기 
    //   - 피봇을 통해 다중으로 보여줄 부분을 body에 생성(해당 영역이 반복됨)
    //4. 데이터셋 컬럼 prop에 피봇 수식을 설정(avg, min, max, sum, count)
    //5. 제공 메서드
    //   - takePivot --> 피봇 실행
    //   - pivotAvg,   PivotAvg   --> 피봇데이터 평균 구하기 
    //   - pivotCount, PivotCount --> 피봇데이터 갯수 구하기 
    //   - pivotMax,   PivotMax   --> 피봇데이터 최고값 구하기 
    //   - pivotMin,   PivotMin   --> 피봇데이터 최저값 구하기 
    //   - pivotSum,   PivotSum   --> 피봇데이터 합계 구하기 
    
    var pThis = objDs.parent;
    
    //초기화
    if (take.nvl(this._orgXML,"")=="")
    {
        this._orgXML = this.saveXML();
        this._orgFormat = objGrid.getCurFormatString();
    } else {
        objGrid.set_enableevent(false);
        this.set_enableevent(false);
        this.clear();
        this.loadXML(this._orgXML);
        objGrid.set_formats(this._orgFormat);
        this.set_enableevent(true);
        objGrid.set_enableevent(true);
    }
    
    //필터 데이터는 허용하지 않아 필터 초기화
    objDs.filter("");    
    //피봇 대상 데이터가 있는 데이터셋
    this._objDataDs = objDs;
    
    take.debug(pThis, "Pivot 초기화 완료");
    
    //피봇 데이터셋 만들기
    this._setDsPivot(objDs);
    take.debug(pThis, "Pivot 데이터셋 생성 완료");
    
    //피봇 적용된 데이터 만들기
    this._setDataPivot(objDs);
    take.debug(pThis, "Pivot 피봇 데이터 생성 완료");
    
    //피봇 그릳드 포멧 만들기
    this._setGridPivot(objGrid);
    take.debug(pThis, "Pivot 그리드 포멧 생성 완료");
    //trace(this.saveXML());
}

//피봇 데이터셋 만들기
_tDataset._setDsPivot = function(objDs)
{
    var pThis, objPivotDs, objColInfos = new Object();
    var sPivotKey, sGroupKey;
    var arrGroupKey, arrColInfo;
    var nGroupCnt, nCnt, nColCnt, nIdx;
    
    objPivotDs=this;
    pThis = objPivotDs.parent;
    
    sPivotKey = take.nvl(objPivotDs.pivotkey,"");
    sGroupKey = take.nvl(objPivotDs.groupkey,"");
    objPivotDs._tArrGroupKey = sGroupKey.split(":");
    arrGroupKey = objPivotDs._tArrGroupKey;
    nGroupCnt = arrGroupKey.length;
    
    if (sPivotKey=="") return false;
    
    //컬럼 정보 복사
    objColInfos = objPivotDs._getCopyColInfo(objPivotDs, objColInfos);
    //컬럼 아이디 정보 복사
    objPivotDs._tArrColInfo = objPivotDs.colinfos._idArray.slice();
    arrColInfo = objPivotDs._tArrColInfo;
    
    objPivotDs.set_enableevent(false);
    //데이터 컬럼 및 데이터 삭제
    objPivotDs.clear();
    
    //그룹키 정보 확인 후 컬럼 생성
    for (var i=0; i<nGroupCnt; i++)
    {
        if (take.nvl(objColInfos[arrGroupKey[i]],"")!="")
        {
            nIdx = take.addDsColumn(objPivotDs, arrGroupKey[i], objColInfos[arrGroupKey[i]].type, objColInfos[arrGroupKey[i]].size);
            objPivotDs.colinfos[nIdx].prop = objColInfos[arrGroupKey[i]].prop;
            arrColInfo.splice(take.ArrayIndexOf(arrColInfo, arrGroupKey[i]),1);
        } else {
            take.debug(pThis, "'" + arrGroupKey[i] + "' 그룹키 컬럼 정보가 없습니다.");
        }
    }
    
    //피봇키 정보 확인 후 컬럼 생성
    if (take.nvl(objColInfos[sPivotKey],"")!="")
    {
        nIdx = take.addDsColumn(objPivotDs, sPivotKey, objColInfos[sPivotKey].type, objColInfos[sPivotKey].size);
        objPivotDs.colinfos[nIdx].prop = objColInfos[sPivotKey].prop;
        arrColInfo.splice(take.ArrayIndexOf(arrColInfo, sPivotKey),1);
    } else {
        take.debug(pThis, "Info : '" + sPivotKey + "' 피벗키 컬럼 정보가 없습니다.");
    }
    
    nColCnt = arrColInfo.length;
    //console.dir(arrColInfo);
    
    //피봇키에 해당하는 데이터 중복 제거
    objPivotDs._tArrPivotKeyData = take.ArrayUnique(take.ArrayPluck(objDs._rawRecords,objDs.getColIndex(sPivotKey)));
    arrPivotKeyData = objPivotDs._tArrPivotKeyData;
    
    nCnt = arrPivotKeyData.length;
    
    //피봇 키 데이터 만큼 반복하여 컬럼 생성
    for (var j=0; j<nCnt; j++)
    {
        for (var k=0; k<nColCnt; k++)
        {
            if (take.nvl(objColInfos[arrColInfo[k]],"")!="")
            {
                nIdx = take.addDsColumn(objPivotDs, arrPivotKeyData[j] + "____" + arrColInfo[k], objColInfos[arrColInfo[k]].type, objColInfos[arrColInfo[k]].size);
                objPivotDs.colinfos[nIdx].prop = objColInfos[arrColInfo[k]].prop;
            } else {
                take.debug(pThis, "'" + arrColInfo[k] + "' 컬럼 정보가 없습니다.");
            }
        }
    }
    objPivotDs.set_enableevent(true);
}

//피봇 적용된 데이터 만들기
_tDataset._setDataPivot = function(objDs)
{
    var pThis, objPivotDs, objColInfos;
    var sPivotKey, sGroupKey, sExpr, sCol, sType, sProp, sColId, sPivotExpr;
    var arrGroupKey, arrColInfo,arrPivotKeyData;
    var nCnt, nColCnt, nPivotCnt;
    var aVal;
    
    objPivotDs = this;
    pThis = objPivotDs.parent;
    
    sPivotKey = take.nvl(objPivotDs.pivotkey,"");
    sGroupKey = take.nvl(objPivotDs.groupkey,"");
    arrGroupKey = objPivotDs._tArrGroupKey;
    objColInfos = objPivotDs.colinfos;
    
    //그룹 데이터 중복 제거
    arrGroupData = objPivotDs._getGroupData(objDs, arrGroupKey);
    //console.dir(arrGroupData);
    
    nCnt = arrGroupData.length;
    nLen = arrGroupKey.length;
    
    objPivotDs.set_enableevent(false);
    //그룹 데이터 만큼 row 추가후 데이터 넣기
    for (var i=0; i<nCnt; i++)
    {
        nRow = this.addRow();
        
        for (var j=0; j<nLen;j++)
        {
            objPivotDs.setColumn(nRow, arrGroupKey[j], arrGroupData[i][j]); 
        }
    }
    
    //피복키 데이터에 맞게 데이터 생성
    arrColInfo = objPivotDs._tArrColInfo;
    nColCnt = arrColInfo.length;
    
    arrPivotKeyData = objPivotDs._tArrPivotKeyData;
    nPivotCnt = arrPivotKeyData.length;
        
    for (var k=0; k<nCnt; k++)
    {
        sExpr="";
        
        for (var m=0; m<nLen;m++)
        {
            sExpr += (m==0?"":" && ") + arrGroupKey[m] + "=='" + this.getColumn(k,arrGroupKey[m]) + "'";
        }
        
        for (var n=0; n<nPivotCnt; n++)
        {
            sPivotExpr = sExpr + (sExpr==""?"":" && ") + sPivotKey + "=='" + arrPivotKeyData[n] + "'";
            //trace( k + " --> " + sExpr);
            
            for (var l=0; l<nColCnt; l++)
            {
                sColId = arrColInfo[l];
                sCol = arrPivotKeyData[n] + "____" + sColId;
                sType = objColInfos[sCol].type.toUpperCase();
                sProp = take.nvl(objColInfos[sCol].prop,"");
                
                if (sProp=="")
                {
                    if (sType=="STRING" || sType=="DATE" || sType=="TIME" || sType=="DATETIME" || sType=="BLOB")
                    {
                        sProp = "MIN";
                    } else {
                        sProp = "SUM";
                    }
                } 
                
                if (sProp=="AVG")
                {
                    aVal = objDs.getCaseAvg(sPivotExpr, sColId);
                } else if (sProp=="COUNT") {
                    aVal = objDs.getCaseCount(sPivotExpr, sColId);
                } else if (sProp=="MAX") {
                    aVal = objDs.getCaseMax(sPivotExpr, sColId);
                } else if (sProp=="MIN") {
                    aVal = objDs.getCaseMin(sPivotExpr, sColId);
                } else if (sProp=="SUM") {
                    aVal = objDs.getCaseSum(sPivotExpr, sColId);
                } else {
                    aVal = null;
                }                
                
                objPivotDs.setColumn(k, sCol, aVal);
            }
        }
    }
    
    objPivotDs.set_enableevent(true);
    
    //trace(this.saveXML());
}

//그룹 데이터 중복 제거후 리턴
_tDataset._getGroupData = function(objDs, arrGroupKey)
{
    var arrRaw, arrTemp = new Array(), arrRtn = new Array();
    var nCnt, nRowCnt;
    var sTemp;
    
    arrRaw = objDs._rawRecords;
    //console.dir(arrRaw)
    nRowCnt = arrRaw.length;
    nCnt = arrGroupKey.length;
    
    for (var j=0; j<nRowCnt; j++)
    {
        sTemp = "";
        for (var k=0; k<nCnt; k++)
        {
            sTemp += (k==0?"":take.separator) + arrRaw[j][objDs.getColIndex(arrGroupKey[k])];
        }
        
        arrTemp.push(sTemp);
    }
    
    arrUni = take.ArrayUnique(arrTemp);
    //console.dir(arrUni);
    nUniCnt = arrUni.length;
    
    for (var i=0; i<nUniCnt; i++)
    {
        arrRtn.push(arrUni[i].split(take.separator));
    }
    
    return arrRtn;
}

//피봇 대상 그리드 포멧 생성
_tDataset._setGridPivot = function(objGrid)
{
    var objPivotDs, objBodyInfo, objFormat, objFormatCols, objFormatBody;
    var arrGridHead, arrGridBody, arrGridSumm, arrPivotKeyData, arrColInfo, arrPivotBody, arrPivotHead, arrHeadCol, arrBodyCol;
    var sFormat, sColText="", sBody, sPivotBody, sHead, sPivotHead;
    var nMin, nMax, nPivotCnt, nColCnt, nSIdx, nEIdx;
    
    objPivotDs = this;
    
    //각 영역 정보
    arrGridHead = objPivotDs._tArrGridHead = objPivotDs._getCellInfo(objGrid, "head");
    arrGridBody = objPivotDs._tArrGridBody = objPivotDs._getCellInfo(objGrid, "body");
    arrGridSumm = objPivotDs._tArrGridSumm = objPivotDs._getCellInfo(objGrid, "summ");
    
    sFormat = objGrid.getCurFormatString();
    objFormat = objGrid.body.parent;
    objFormatCols = objFormat._cols;
    
    arrPivotKeyData = objPivotDs._tArrPivotKeyData;
    nPivotCnt = arrPivotKeyData.length;
    
    arrColInfo = objPivotDs._tArrColInfo;
    nColCnt = arrColInfo.length;
    
    //body 포멧 영역
    nSIdx = sFormat.indexOf('<Band id="body">');
    nEIdx = sFormat.indexOf('</Band>',nSIdx);
    sBody = sFormat.substring(nSIdx, nEIdx+('</Band>').length);

    objInfo = objPivotDs._getBodyInfo(arrGridBody);
    nMin = objInfo[0];   
    
    //body 부분(반복될 부분만) 축출
    nSIdx = sBody.indexOf(nMin==0?'<Cell':'<Cell col="' + nMin + '"');
    nEIdx = sBody.indexOf('</Band>',nSIdx);
    sPivotBody = sBody.substring(nSIdx,nEIdx);
    
    //임시로 치환
    sFormat = sFormat.replace(sPivotBody,'<!-- Body -->');
    
    //각 Cell별로 배열로 나눠서 치환
    arrPivotBody = sPivotBody.split("/>");    
    nCnt = arrPivotBody.length-1;
    arrBodyCol = objPivotDs._getCellColVal(arrPivotBody, nCnt);
    sBodyText = "";
    
    for (var n=0; n<nPivotCnt; n++)
    {
        for (var l=0; l<nCnt; l++)
        {
            sBodyText +=  arrPivotBody[l].replace("bind:","bind:"+arrPivotKeyData[n]+"____")
                                         //.replace((nMin==0?'<Cell':' col="' + ((nMin+l)+(n*nColCnt)) + '"'), (nMin==0?'<Cell col="' + ((nMin+l)+(n*nColCnt)) + '"':' col="' + ((nMin+l)+(n*nColCnt)) + '"'));
                                         //.replace((nMin==0?'<Cell':' col="' + (nMin+l) + '"'), (nMin==0?'<Cell col="' + ((nMin+l)+(n*nCnt)) + '"':' col="' + ((nMin+l)+(n*nCnt)) + '"'));
                                         .replace((arrBodyCol[l]==0?'<Cell':' col="' + arrBodyCol[l] + '"'),(arrBodyCol[l]==0?'<Cell col="' + (arrBodyCol[l]+(n*nCnt)) + '"':' col="' + (arrBodyCol[l]+(n*nCnt)) + '"')); //(arrBodyCol[l]+(n*nCnt))
            sBodyText += '/>';
        }
    }

    //변경된 body로 치환
    sFormat = sFormat.replace("<!-- Body -->",sBodyText);
    
    //column 포멧 영역 (body 셀 수만큼 컬럼을 추가)
    for (var n=0; n<nPivotCnt-1; n++)
    {
        for (var l=0; l<objInfo.length; l++)
        {
            sColText += '<Column size="'+ objFormatCols[nMin+l].size +'"/>\n';
        }
    }

    sColText += "</Columns>";
    
    sFormat = sFormat.replace("</Columns>",sColText);
    
    //head 포멧 영역
    nSIdx = sFormat.indexOf('<Band id="head">');
    nEIdx = sFormat.indexOf('</Band>',nSIdx);
    sHead = sFormat.substring(nSIdx, nEIdx+('</Band>').length);
        
    objInfo = objPivotDs._getBodyInfo(arrGridHead);
    nMin = objInfo[0];   
    
    //반복된 head 부분만 축출
    nSIdx = sHead.indexOf(nMin==0?'<Cell':'<Cell col="' + nMin + '"');
    nEIdx = sHead.indexOf('</Band>',nSIdx);
    sPivotHead = sHead.substring(nSIdx,nEIdx);
    
    //임시로 치환
    sFormat = sFormat.replace(sPivotHead, '<!-- Head -->');
    
    //각 Cell별로 배열로 나눠서 치환
    arrPivotHead = sPivotHead.split("/>");
    nCnt = arrPivotHead.length-1;
    arrHeadCol = objPivotDs._getCellColVal(arrPivotHead, nCnt);
    sHeadText = "";
    
    nBodyColCnt = arrBodyCol.length;
    for (var n=0; n<nPivotCnt; n++)
    {
        for (var l=0; l<nCnt; l++)
        {
            sHeadText += arrPivotHead[l].replace("bind:","bind:"+arrPivotKeyData[n]+"____")
                                        //.replace((nMin==0?'<Cell':' col="' + ((nMin+l)+(n*nColCnt)) + '"'), (nMin==0?'<Cell col="' + ((nMin+l)+(n*nColCnt)) + '"':' col="' + ((nMin+l)+(n*nColCnt)) + '"'))
                                        //.replace((nMin==0?'<Cell':' col="' + (nMin+l) + '"'), (nMin==0?'<Cell col="' + ((nMin+l)+(n*nCnt)) + '"':' col="' + ((nMin+l)+(n*nCnt)) + '"'))
                                        .replace((arrHeadCol[l]==0?'<Cell':' col="' + arrHeadCol[l] + '"'), (arrHeadCol[l]==0?'<Cell col="' + (arrHeadCol[l]+(n*nBodyColCnt)) + '"':' col="' + (arrHeadCol[l]+(n*nBodyColCnt)) + '"'))
                                        .replace('text="'+ objPivotDs.pivotkey +'"','text="'+ arrPivotKeyData[n] +'"');
            sHeadText += '/>';
        }
    }
    
    //변경된 head로 치환
    sFormat = sFormat.replace("<!-- Head -->",sHeadText);
    
    objGrid.set_enableevent(false);
    
    //변경된 포멧 적용
    //trace(sFormat);    
    objGrid.set_formats(sFormat);
    
    objGrid.set_enableevent(true);
}

_tDataset._getCellColVal = function(arrPivotBody, nCnt)
{
    var arrRtn = new Array();
    
    for (var i=0; i<nCnt; i++)
    {
        nSIdx = arrPivotBody[i].indexOf('col="');
        if (nSIdx>=0)
        {
            nSIdx+=5;
            nEIdx = arrPivotBody[i].indexOf('"', nSIdx);
            arrRtn.push(parseInt(arrPivotBody[i].substring(nSIdx,nEIdx)));
        } else {
            arrRtn.push(0);
        }
    }
    
    return arrRtn.slice();
}

// _tDataset.gridPivot = function(objGrid)
// {
//     var objPivotDs, objBodyInfo, objFormat, objFormatCols, objFormatBody;
//     var arrGridHead, arrGridBody, arrGridSumm, arrPivotKeyData, arrColInfo;
//     var sFormat, sColText="", sBody;
//     var nMin, nMax, nPivotCnt, nColCnt;
//     
//     objPivotDs = this;
//     
//     arrGridHead = objPivotDs._tArrGridHead = objPivotDs._getCellInfo(objGrid, "head");
//     arrGridBody = objPivotDs._tArrGridBody = objPivotDs._getCellInfo(objGrid, "body");
//     arrGridSumm = objPivotDs._tArrGridSumm = objPivotDs._getCellInfo(objGrid, "summ");
//     
//     sFormat = objGrid.getCurFormatString();
//     objFormat = objGrid.body.parent;
//     objFormatCols = objFormat._cols;
//     
//     arrPivotKeyData = objPivotDs._tArrPivotKeyData;
//     nPivotCnt = arrPivotKeyData.length;
//     
//     arrColInfo = objPivotDs._tArrColInfo;
//     
//     //body
//     nSIdx = sFormat.indexOf('<Band id="body">');
//     nEIdx = sFormat.indexOf('</Band>',nSIdx);
//     sBody = sFormat.substring(nSIdx, nEIdx);
//     
//     sFormat.replace(sBody, '<!-- Body -->');
//     
//     objInfo = this._getBodyInfo(arrGridBody);
//     nMin = objInfo.min;
//     nMax = objInfo.max;
//     
//     for (var n=0; n<nPivotCnt; n++)
//     {
//         for (var l=0; l<nColCnt; l++)
//         {
//             objBodyInfo = arrGridBody[nMin+l];
//             sBodyText += '<Cell row="'+ objBodyInfo.row + '" rowspan="' + objBodyInfo.rowspan + '" col="' + objBodyInfo.col + '" colspan="' + objBodyInfo.colspan + "'";
//             
//             for (var m=0; m<objBodyInfo.prop.length; m++)
//             {
//                 sBodyText += m==0?'':' ' + objBodyInfo.prop[m][0] + '="' + objBodyInfo.prop[m][1].replace("band:","band:"+arrPivotKeyData[n]+"____") + '"';
//             }
//             
//             sBodyText += '/>';
//         }
//     }
//     
//     sBodyText += "</Band>";
//     
//     sBody = sBody.replace("</Band>",sBodyText);
//     sFormat = sFormat.replace("<!-- Body -->",sBody);
//     
//     //column
//     for (var n=0; n<nPivotCnt; n++)
//     {
//         for (var l=0; l<nColCnt; l++)
//         {
//             sColText += '<Column size="'+ objFormatCols[nMin+l].size +'"/>';
//         }
//     }
// 
//     sColText += "</Columns>";
//     
//     sFormat = sFormat.replace("</Columns>",sColText);
//     
//     //head
//     nSIdx = sFormat.indexOf('<Band id="head">');
//     nEIdx = sFormat.indexOf('</Band>',nSIdx);
//     sHead = sFormat.substring(nSIdx, nEIdx);
//     
//     sFormat.replace(sHead, '<!-- Head -->');
//     
//     objInfo = this._getBodyInfo(arrGridBody);
//     nMin = objInfo.min;
//     nMax = objInfo.max;
//     
// //     for (var n=0; n<nPivotCnt; n++)
// //     {
// //         for (var l=0; l<nColCnt; l++)
// //         {
// //             objBodyInfo = arrGridBody[nMin+l];
// //             sBodyText += '<Cell row="'+ objBodyInfo.row + '" rowspan="' + objBodyInfo.rowspan + '" col="' + objBodyInfo.col + '" colspan="' + objBodyInfo.colspan + "'";
// //             
// //             for (var m=0; m<objBodyInfo.prop.length; m++)
// //             {
// //                 sBodyText += m==0?'':' ' + objBodyInfo.prop[m][0] + '="' + objBodyInfo.prop[m][1].replace("band:","band:"+arrPivotKeyData[n]+"____") + '"';
// //             }
// //             
// //             sBodyText += '/>';
// //         }
// //     }    
//     
//     sHeadText += "</Band>";
//     
//     sHead = sHead.replace("</Band>",sHeadText);
//     sFormat = sFormat.replace("<!-- Head -->",sHead);
//     
//     //<Cell col="4"/>
//     //  <Cell col="5" text="bind:NOT_FIT"/>
//     //  <Cell col="6" text="bind:FAIL"/>
//     //  <Cell col="7" text="bind:SCORE"/>
//     //  <Cell col="8" text="bind:GRADE"/>
//     //  <Cell col="9" text="bind:NOT_FIT"/>
//     //  <Cell col="10" text="bind:FAIL"/>
//     
//     
//     
//     
// }

//밴드 타입이 body인 cell 아이디만 축출
_tDataset._getBodyInfo = function(arrData)
{
    var nCnt;
    var arrRtn = new Array();
    
    nCnt = arrData.length;
    
    for (var i=0; i<nCnt; i++)
    {
        if (arrData[i].band=="body")
        {
            arrRtn.push(i);
        }
    }
    
    return arrRtn.slice();
}

//각 영역의 셀 정보를 반환
_tDataset._getCellInfo = function(objGrid, sGbn)
{
    var objFormat, objProto, objCells, objCell;
    var aCellVal, aProtoVal;
    var arrGridFormat = new Array();
    var nCnt;
    
    objFormat  = objGrid.body.parent;    
    objProto = new nexacro.GridCellInfo;
    
    nCnt = objGrid.getCellCount(sGbn);
    
    if (sGbn=="head")
    {
        objCells = objFormat._headcells;
    } else if (sGbn=="body") {
        objCells = objFormat._bodycells;
    } else {
        objCells = objFormat._summcells;
    }
    
    for (var nCell=0; nCell<nCnt; nCell++)
    {
        //셀 기본 정보
        objCell = objCells[nCell];
        arrGridFormat.push({gubun:sGbn, band:objCell._area, cell:nCell, col:objCell._col, colspan:objCell._colspan, row:objCell._row, rowspan:objCell._rowspan, prop:[]});
        
        //셀에 기본 값이 아닌 변경된 값 정보만 축출
        for (var z in objCell)
        {
            if (!nexacro._isFunction(objCell[z]) && z.substr(0,1)!="_")
            {
                if (typeof(objCell[z]) === "object")
                {
                    try {
                        aCellVal = objCell[z]._value;
                        aProtoVal = objProto[z]._value;
                    } catch (e) {
                       //trace(z + " --> " + e);
                       aCellVal = take.nvl(objCell[z],"");
                       aProtoVal = take.nvl(objProto[z],"");
                    }
                } else {
                    aCellVal = take.nvl(objCell[z],"");
                    aProtoVal = take.nvl(objProto[z],"");
                }
                
                if (aCellVal!=aProtoVal && z!="name" && z!="id" && z!="parent")
                {
                    //trace("\t" + z + "\t --> \t" + objCell[z] + "\t" + typeof(objCell[z]) + "\t" + objProto[z] + "\t" + typeof(objProto[z]));
                    //console.dir(objCell[z]);
                    arrGridFormat[nCell].prop.push([z, aCellVal]);
                }
            }
        }
    }
    
    return arrGridFormat.slice();
}

//피봇 값 계산
_tDataset._pivotCal = function(sGbn, sColId, nRow)
{
    var objDs, objPivotDs;
    var arrGroupKey;
    var sExpr="";
    var nRtn, nCnt;
    
    objPivotDs = this;
    objDs = objPivotDs._objDataDs;
    
    arrGroupKey = objPivotDs._tArrGroupKey;
    nCnt = arrGroupKey.length;
    
    //그룹키에 해당하는 expr 조건 만들기
    for (var i=0; i<nCnt; i++)
    {
        sExpr += (i==0?"":" && ") + arrGroupKey[i] + "=='" + objPivotDs.getColumn(nRow,arrGroupKey[i])+ "'";
    }
    
    //trace("sExpr --> " + sExpr);
    //구분에 따라 계산
    switch (sGbn) 
    {
        case "avg":
            nRtn = objDs.getCaseAvg(sExpr, sColId);
            break;
        case "count":
            nRtn = objDs.getCaseACount(sExpr, sColId);
            break;
        case "max":
            nRtn = objDs.getCaseMax(sExpr, sColId);
            break;
        case "min":
            nRtn = objDs.getCaseAMin(sExpr, sColId);
            break;
        case "sum":
            nRtn = objDs.getCaseSum(sExpr, sColId);
            break;
        default:
    }
    
    return nRtn;
}

/**
* 피봇 그룹 데이터 평균
* @param   {String} sColId  계산할 컬럼
* @param   {Number} nRow    계산할 row(해당 row의 그룹키 정보 축출용)
* @return  N/A
* @example dataset.pivotAvg("CNT", 1)
*/
_tDataset.pivotAvg = function(sColId, nRow)
{
    return this._pivotCal("avg", sColId, nRow);
}
_tDataset.PivotAvg = function(sColId, nRow)
{
    return this.pivotAvg(sColId, nRow);
}

/**
* 피봇 그룹 데이터 캣수
* @param   {String} sColId  계산할 컬럼
* @param   {Number} nRow    계산할 row(해당 row의 그룹키 정보 축출용)
* @return  N/A
* @example dataset.pivotCount("CNT", 1)
*/
_tDataset.pivotCount = function(sColId, nRow)
{
    return this._pivotCal("count", sColId, nRow);
}
_tDataset.PivotCount = function(sColId, nRow)
{
    return this.pivotCount(sColId, nRow);
}

/**
* 피봇 그룹 데이터 최대값
* @param   {String} sColId  계산할 컬럼
* @param   {Number} nRow    계산할 row(해당 row의 그룹키 정보 축출용)
* @return  N/A
* @example dataset.pivotMax("CNT", 1)
*/
_tDataset.pivotMax = function(sColId, nRow)
{
    return this._pivotCal("max", sColId, nRow);
}
_tDataset.PivotMax = function(sColId, nRow)
{
    return this.pivotMax(sColId, nRow);
}

/**
* 피봇 그룹 데이터 최소값
* @param   {String} sColId  계산할 컬럼
* @param   {Number} nRow    계산할 row(해당 row의 그룹키 정보 축출용)
* @return  N/A
* @example dataset.pivotMin("CNT", 1)
*/
_tDataset.pivotMin = function(sColId, nRow)
{
    return this._pivotCal("min", sColId, nRow);
}
_tDataset.PivotMin = function(sColId, nRow)
{
    return this.pivotMin(sColId, nRow);
}

/**
* 피봇 그룹 데이터 합계
* @param   {String} sColId  계산할 컬럼
* @param   {Number} nRow    계산할 row(해당 row의 그룹키 정보 축출용)
* @return  N/A
* @example dataset.pivotSum("CNT", 1)
*/
_tDataset.pivotSum = function(sColId, nRow)
{
    return this._pivotCal("sum", sColId, nRow);
}
_tDataset.PivotSum = function(sColId, nRow)
{
    return this.pivotSum(sColId, nRow);
}

//컬럼정보 복사 후 리턴
_tDataset._getCopyColInfo = function(objDs, objRtn)
{
    var arrColInfos;
    var nCnt;
    
    if (take.nvl(objDs,"")=="")
    {
        take.debug(this.parent, "데이터셋은 필수입니다.");
        return objRtn;
    }
    
    if (!typeof objRtn === "object")
    {
        objRtn = new object();
    }
    
    objColInfos = objDs.colinfos;
    arrColInfos = objColInfos._idArray;
    nCnt = arrColInfos.length;
    
    for(var i=0; i<nCnt; i++)
    {
        objRtn[arrColInfos[i]] = objColInfos[arrColInfos[i]]
    }
    
    return objRtn;
}

/**
* 데이터셋 단일 (쿼리)데이터 조회
* @param   {Anonymous} aCallBack  콜백함수
* @param   {Boolean}   bAsync     동기/비동기 (기본 true)
* @param   {Boolean}   bErrRtn    에러 리턴 여부 (기본 false)
* @return  N/A
* @example dataset.takeselect("fnCallBack", false, false)
*/
_tDataset.takeselect = function(aCallBack, bAsync, bErrRtn)
{
    var sNameSpace, sInDs, sParam;
    var pThis;

    pThis = this.parent;

    sNameSpace = take.nvl(this.url,"");
    sInDs = take.nvl(this.serverdatasetid,"");
    sParam = take.nvl(this.arguments, "");
    aCallBack = take.nvl(aCallBack,"");

    if (sNameSpace=="")
    {
        take.error(pThis, pThis.name + "." + this.name + ".tranSelect.system.error : namespace가 없습니다. \n 시스템관리자에게 문의해주세요." );
        return false;
    }

    if (aCallBack=="")
    {
        if (take.nvl(this.selectcallback,"")=="")
        {
            take.error(pThis, pThis.name + "." + this.name + ".tranSelect.system.error : callback 함수를 지정되지 않았습니다. \n 시스템관리자에게 문의해주세요." );
            return false;
        }
    } else {
        this.selectcallback = aCallBack;
    }

    if (take.nvl(bAsync,"")=="")
    {
        bAsync = this.selectasync;
    } else {
        this.selectasync = bAsync;
    }

    if (take.nvl(bErrRtn,"")=="")
    {
        bErrRtn = this.selecterrrtn;
    } else {
        this.selecterrrtn = bErrRtn;
    }

    take.tranSelect
    (
        pThis,
        this.name+".select",
        sNameSpace,
        sInDs,
        this.name,
        sParam,
        this.selectcallback,
        this.selectasync,
        "",
        this.selecterrrtn
    )
};

/**
* 데이터셋 단일 (쿼리)데이터 저장
* @param   {Anonymous} aCallBack  콜백함수
* @param   {Boolean}   bAsync     동기/비동기 (기본 true)
* @param   {Boolean}   bErrRtn    에러 리턴 여부 (기본 false)
* @return  N/A
* @example dataset.takesave("fnCallBack", false, false)
*/
_tDataset.takesave = function(aCallBack, bAsync, bErrRtn)
{
    var pThis;

    pThis = this.parent;

    sNameSpace = take.nvl(this.saveurl,"");
    sParam = take.nvl(this.saveparam, "");
    aCallBack = take.nvl(aCallBack,"");

    if (sNameSpace=="")
    {
        if (take.nvl(this.url,"")!="")
        {
            sNameSpace = this.url;
            take.debug(pThis, pThis.name + "." + this.name + ".takesave.system.info : saveurl(namespace) Properties 가 없어 url Properties로 대체합니다.");
        } else {
            take.error(pThis, pThis.name + "." + this.name + ".takesave.system.error : url(namespace) Properties 가 null입니다. \n 시스템관리자에게 문의해주세요." );
            return false;
        }
    }

    if (aCallBack=="")
    {
        if (take.nvl(this.savecallback,"")=="")
        {
            take.error(pThis, pThis.name + "." + this.name + ".tranSelect.system.error : callback 함수를 지정되지 않았습니다. \n 시스템관리자에게 문의해주세요." );
            return false;
        }
    } else {
        this.savecallback = aCallBack;
    }

    if (take.nvl(bAsync,"")=="")
    {
        bAsync = this.saveasync;
    } else {
        this.saveasync = bAsync;
    }

    if (take.nvl(bErrRtn,"")=="")
    {
        bErrRtn = this.saveerrrtn;
    } else {
        this.saveerrrtn = bErrRtn;
    }

    take.tranSave
    (
        pThis,
        this.name+".save",
        sNameSpace,
        this.name,
        "",
        sParam,
        this.savecallback,
        this.saveasync,
        this.saveerrrtn
    );
};

//==============================================================================
// take nexacro.Button
//==============================================================================
var _tButton = nexacro.Button.prototype;
var _tOnButtonCreatContents = nexacro.Button.prototype.on_create_contents;

_tButton.on_create_contents = function ()
{
    // 기존 스크립트 실행
    _tOnButtonCreatContents.apply(this, arguments);

    this.addEventHandler(
        "onkeydown", 
        function (obj, e) 
        { 
            if(e.keycode == 13) this.click();
        }
    );
}

//==============================================================================
// Object : nexacro.Combo
// Group : Component
//==============================================================================
var _tCombo = nexacro.Combo.prototype;
var onComboCreatedContents = nexacro.Combo.prototype.on_created_contents;
var onComboCreatContents = nexacro.Combo.prototype.on_create_contents;

//웹으로 나중에 실행 (웹 서비스시 필수)
_tCombo.on_create_contents = function ()
{
    // 기존 스크립트 실행
    onComboCreatContents.apply(this, arguments);

	//콤보로 열리는 데이터 갯수 제한시 사용
    //this.set_displayrowcount(10);
    
    if (take.nvl(this.multicombo, "")!="") 
    {
        if (this.multicombo=="true")
        {
            this.multicombo=true;
        } else {
            this.multicombo=false;
        }
    }
    
    if (take.nvl(this.treecombo, "")!="") 
    {
        if (this.treecombo=="true")
        {
            this.treecombo=true;
        } else {
            this.treecombo=false;
        }
    }
     
    if (this.treecombo && this.multicombo)
    {
        trace("트리 콤보와 멀티 콤보는 같이 사용할 수 없습니다.");
        return;
    }

    if (take.nvl(this.header, "")!="") 
    {
        if (this.header=="false")
        {
            this.header=false;
        } else {
            this.header=true;
        }
    } else {
        this.header=true;
    }
    
    if (this.multicombo || this.treecombo)
    {
        this._tComboComp = this;
        
        this.addEventHandler(
            "ondropdown", 
            function(obj ,e) {
                this._tfnView(this);
                return false;
            }, 
            this);
            
        //this.dropbutton.set_icon("url('theme://images/btn_WF_Drop.png')")
        if (this.codecolumn!="")
        {
            this._tCodeCol = this.codecolumn;
            this._tDataCol = this.datacolumn;
        }
        
        this.set_codecolumn("");
        this.set_datacolumn("");
        this.set_type("search");
        
        this.getInnerDataset().addColumn("_CHK", "int", 1);
        
        if (this.treecombo)
        {
            this._tLevleCol = take.nvl(this.treelevel,"lvl");
        }
    }
}

// //전용브라우저에서 올라올때 나중에 실행 (전용브라우저 서비스시 필수)
// _tCombo.on_created_contents = function ()
// {
//     // 기존 스크립트 실행
//     onComboCreatedContents.apply(this, arguments);
// 
//     if (take.nvl(this.multicombo, false))
//     {
//         this.addEventHandler("ondropdown", function(obj ,e) {
//                                                 this._tfnView();
//                                                 return false;
//                                             }, this);
//         //this.dropbutton.set_icon("url('theme://images/btn_WF_Drop.png')")
//         if (this.codecolumn!="")
//         {
//             this._tCodeCol = this.codecolumn;
//             this._tDataCol = this.datacolumn;
//         }
//          
//         this.set_codecolumn("");
//         this.set_datacolumn("");
//         this.set_type("search");
//          
//         this.getInnerDataset().addColumn("_CHK", "int", 1);
//     }
// };

// /**
//  * 컬럼 정보 배열로 반환
//  * @param  : N/A
//  * @return : {Array}  arrColInfo  배열로 변환된 컬럼 정보
//  * @example : _tCombo._tfnGetArrayInfo();
//  */
// _tCombo._tfnGetArrayInfo = function(objComp)
// {
//     //변수 선언
//     var arrTemp, arrColInfo = new Array();
//     var nCnt;
//     var sColInfo;
//     //var objComp = this;
// 
//     //컴포넌트에 컬럼 정보 가져오기
//     sColInfo = take.nvl(objComp.listcolinfo, "");
// 
//     //columnid,columnname,size|columnid,columnname,size|....
//     //컬럼 정보가 있으면
//     if (sColInfo!="")
//     {
//         //행 구분자가 있으면
//         if (sColInfo.indexOf("|")>=0)
//         {
//             //행단위로 배열 만들기
//             arrTemp = sColInfo.split("|");
//             nCnt = arrTemp.length;
//             //행 수 만큼 반복
//             for (var i=0; i<nCnt; i++)
//             {
//                 //컬럼 단위로 배열 만들어서 배열에 넣기
//                 arrColInfo.push(arrTemp[i].split(","));
//             }
//         } else {
//             //컬럼 단위로 배열 만들어서 배열에 넣기
//             arrColInfo.push(sColInfo.split(","));
//         }
// 
//         return arrColInfo;
//     }
// 
//     return "";
// 
// }

/**
 * 선택된 데이터 보여주기
 * @param   : {N/A} N/A
 * @return  : {N/A}    N/A
 * @example : _tCombo._tfnView();
 */
_tCombo._tfnView = function(objComp)
{
    var objDs, objPopupDiv;
    var arrPopSize;
    var nCnt, nLeft, nTop, nWidth, nHeight;
    
    //컴포넌트에 데이터셋 가져오기
    objDs = objComp.getInnerDataset();
    
    //데이터셋 행 수
    nCnt = objDs.rowcount;

    //행 수가 0보다 크면
    if (nCnt>0)
    { 
        //popupdiv 생성 여부 확인 및 생성
        objPopupDiv = objComp._tfnCreatePop(objComp, objDs);
    
        //팝업이 떠있지 않을경우
        if (!objPopupDiv.isPopup())
        {
            nLeft = 0;
            nTop = objComp.getOffsetHeight();

            //팝업 오픈
            //objPopupDiv.trackPopupByComponent( objComp, nLeft, nTop, nWidth, nHeight);
            objPopupDiv.trackPopupByComponent( objComp, nLeft, nTop);
        }
    }
}

_tCombo._tfnCreatePop = function(objComp, objDs)
{
     //변수 선언
    var objPopupDiv, objGrid, objCloseBtn;
    var arrPopSize, arrChkRow;
    var sId, sChkVal, sFormat;
    var nWidth, nHeight, nDisplayCnt, nRowHeight=30;
    var pThis;

    pThis = this.parent;
    
    //컴포넌트에 세팅된 팝업 사이즈 확인
    arrPopSize = take.nvl(objComp.popupsize, "");
    if (arrPopSize!="") //사이즈가 세팅 되어 있을경우 값을 세팅
    {
        arrPopSize = arrPopSize.split(" ");
        nWidth = arrPopSize[0];
        nHeight = arrPopSize[1];
    } else {
        //사이즈가 세팅 안 되어 있을경우 기본 값 세팅
        nWidth = objComp.getOffsetWidth();
        
        nDisplayCnt = nexacro.toNumber(this.displayrowcount)
        
        if (nDisplayCnt>0)
        {
            nDisplayCnt++; //헤더 높이 만큼 추가
            nHeight = nDisplayCnt*nRowHeight; //디스플레이 로우 수만큼 Height 설정
        } else {            
            nCnt = objDs.rowcount;
            nCnt++; //헤더 높이 만큼 추가
            //nHeight = 20*nRowHeight; //기본값으로 20행수 만큼 Height 설정
            if (nCnt<20)
            {
                nHeight = (nCnt+1)*nRowHeight; //행수+1만큼 Height 설정
            } else {
                nHeight = 20 * nRowHeight; //기본값으로 20행수 만큼 Height 설정
            }
        }
    }
    
    //PopUp Div 아이디 만들기
    sId = "__tpdivDataView_" + objComp.name;
    //해당 컴포넌트가 있는지 확인
    objPopupDiv = take.nvl(pThis.lookup(sId), "");

    //해당 컴포넌트가 없으면
    if (objPopupDiv=="")
    {
        //PopUp Div 추가
        objPopupDiv = new PopupDiv(sId, 0, 0, nWidth, nHeight, null, null);
        pThis.addChild(sId, objPopupDiv);
        objPopupDiv.show();
        
        objPopupDiv.addEventHandler("oncloseup", _tCombo._tfnPopClose, this);

        // 닫기 버튼 컴포넌트 추가
        sId = "__tbtnClose" + objComp.name;
        
        objCloseBtn = new Button(sId, null, 3, 20, 20, 0, null);
        objPopupDiv.addChild(sId, objCloseBtn);
        objCloseBtn.show();
        objCloseBtn.set_cssclass("btn_WF_close01");
        
        //닫기 버튼 클릭 이벤트 추가
        objCloseBtn.addEventHandler("onclick", _tCombo._tfnCloseBtnClick, this);
        
        //Grid 아이디 만들기
        sId = "__tgrdDataView" + objComp.name;
        
        //Grid 컴포넌트 만들기
        objGrid = new Grid(sId, 0, 0, null, null, 0, 0);
        objPopupDiv.addChild(sId, objGrid);
        objGrid.show();
        
        //닫기 버튼을 위로 올린다.
        objCloseBtn.bringToFront();
        
        // Grid onbodyclick Event
        objGrid.addEventHandler("oncellclick", _tCombo._tfnBodyClick, this);
        
        //autofittype을 col로 설정
        objGrid.set_autofittype("col");
        
        take.addDsColumn(objDs,"_CHK", "int", 1);
        
        if (objComp.header)
        {
            // Grid onheadclick Event
            objGrid.addEventHandler("onheadclick", _tCombo._tfnHeadClick, this);
        }
        
        objComp._tObjPopGrid = objGrid;
        
        if (objComp.multicombo)
        {
            sFormat = '<Formats>' +
            '<Format id="default">' +
            '  <Columns>' +
            '    <Column size="40" band="left" />' +
            '    <Column size="100"  />' +             
            '  </Columns>' +
            '  <Rows>' ;
            
            if (objComp.header)
            {
                sFormat += '    <Row size="'+nRowHeight+'" band="head"/>' ;
            }
            
            sFormat += '    <Row size="'+nRowHeight+'" />' +
            '  </Rows>' ;
            
            if (objComp.header)
            {
                sFormat += '  <Band id="head">'+
                '    <Cell displaytype="checkboxcontrol"/>'+
                '    <Cell col="1" text="전체"/>' +
                '  </Band>' ;
            }
            
            sFormat += '  <Band id="body">' +
            '    <Cell displaytype="checkboxcontrol" edittype="checkbox" text="bind:_CHK"/>' +
            '    <Cell col="1" displaytype="normal" edittype="none" text="bind:'+ this._tDataCol +'"/>' +
            '  </Band>' +
            '</Format>' +
            '</Formats>';
            
        } else if (objComp.treecombo) {
        
            //autofittype을 col로 설정
            objGrid.set_treeinitstatus("expand,all");
            objGrid.set_treeusebutton("use");
            objGrid.set_treeusecheckbox("true");
        
            sFormat = '<Formats>' +
            '<Format id="default">' +
            '  <Columns>' +
            '    <Column size="40"   />' +
            '    <Column size="100"  />' +             
            '  </Columns>' +
            '  <Rows>' ;
            
            if (objComp.header)
            {
                sFormat += '    <Row size="'+nRowHeight+'" band="head"/>' ;
            }
            
            sFormat += '    <Row size="'+nRowHeight+'" />' +
            '  </Rows>' ;
            
            if (objComp.header)
            {
                sFormat += '  <Band id="head">' +
                '    <Cell displaytype="checkboxcontrol" edittype="checkbox"/>' +
                '    <Cell col="1" text="전체"/>' +
                '  </Band>';
            }
            
            sFormat += '  <Band id="body">' +
            '    <Cell colspan="2" displaytype="treeitemcontrol" edittype="tree" text="bind:'+ this._tDataCol +'" treecheck="bind:_CHK" treelevel="bind:'+ this._tLevleCol+'" />' +
            '  </Band>' +
            '</Format>' +
            '</Formats>';
            
            objGrid.set_formats(sFormat);

            //데이터셋 바인딩
            objGrid.setBindDataset(objDs);
        }
        
         objGrid.set_formats(sFormat);

        //데이터셋 바인딩
        objGrid.setBindDataset(objDs);
        
        arrChkRow = take.getChkRow(objDs, "_CHK");

        if (take.nvl(arrChkRow,"")=="")
        {
            sChkVal = "0";
        } else {
        
            trace("arrChkRow.length --> " + arrChkRow.length + " / objDs.rowcount --> " + objDs.rowcount);
            
            if (arrChkRow.length==objDs.rowcount) //체크 Row가 없을 경우
            {
                sChkVal = "1";
            } else {
                sChkVal = "0";
            }
        }
        
        if (objComp.header)
        {
            objGrid.setCellProperty("head", 0, "text", sChkVal);
        }
        //포멧 생성
        //objGrid.createFormat();
        //헤더 삭제
        //objGrid.deleteContentsRow("head", 0);
        
        
    } else {
        //PopUp Div가 이미 생성되어 있을 경우
        sId = "__tgrdDataView" + objComp.name;
        objGrid = take.nvl(objPopupDiv.form.lookup(sId), "");
        //높이 다시 세팅
        objPopupDiv.set_height(nHeight);
        //데이터 바인딩
        objGrid.setBindDataset(objDs);
        take.debug(pThis, "멀티 팝업용 PopUp Div(" + objPopupDiv.name + ")가 이미 생성됨");
    }

    //트랜젝션 후 데이터셋이 갱신되는 경우 대비하여 처리
    //if (objComp.multicombo) take.addDsColumn(objDs,"_CHK", "int", 1);
    take.addDsColumn(objDs,"_CHK", "int", 1);
    
    return objPopupDiv;
}
/**
 * Head Click Event
 * @param   : {N/A} N/A
 * @return  : {N/A}    N/A
 * @example : _tCombo._tfnHeadClick();
 */
_tCombo._tfnHeadClick = function (objGrid, e)
{
    var sRtnTxt="", sRtnVal="", sVal;
    var nCnt;
    var objDs;
    
    if (e.cell == 0 && e.clickitem =="control" )
    {
        objDs = objGrid.getBindDataset();
        nCnt = objDs.getRowCount();
        
        //this._tpretext = take.nvl(this.text,"");
        //this._tpreval = this.multivalue;
        
        sVal = objGrid.getCellProperty("head", e.cell, "text");
        if (sVal == "1")
        {
            sVal="0";
            //sRtnTxt = "";
            //sRtnVal = "";  
        } else {
            sVal="1";            
            //sRtnTxt = take.ArrayPluck(objDs._rawRecords, objDs.getColIndex(this._tDataCol));
            //sRtnTxt = "전체";
            //sRtnVal = take.ArrayPluck(objDs._rawRecords, objDs.getColIndex(this._tCodeCol));
        }
        
        // Head 셋팅                                                        
        objGrid.setCellProperty("head", e.cell, "text", sVal);

        if (nCnt < 1) return;
        
        // Body셋팅
        objDs.set_enableevent(false);
        for (var i=0 ; i<nCnt; i++)
        {
            objDs.setColumn(i, "_CHK", sVal);
        }
        objDs.set_enableevent(true);
 
        if (this.multicombo==true)
        {
            this._tfnSetData(objGrid, e.cell, "multi");
        } else if (this.treecombo==true) {
            this._tfnSetData(objGrid, e.cell, "tree");
        }
        
        //return text
        //this.set_text(sRtnTxt);
        //this.multivalue = sRtnVal;
        
        //var evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", 0, this._tpretext, this._tpreval, 1, sRtnTxt, sRtnVal);
		//this.onitemchanged._fireEvent(this, evt);
    } 
}

/**
 * Body Click Event
 * @param   : {N/A} N/A
 * @return  : {N/A}    N/A
 * @example : _tCombo._tfnBodyClick();
 */
_tCombo._tfnBodyClick = function (objGrid, e)
{
    var arrChkRow, arrFamilyRow, arrAncestorRow;
    var nRow, nCnt;
    var objDs;
    var sChkVal;
    
    if (this.multicombo==true)
    {
        //첫번째 컬럼일 경우(첫번째 컬럼이 checkbox 컬럼)
        if (e.cell == 0 && e.clickitem =="control" )
        {
            this._tfnSetData(objGrid, e.cell, "multi");
        } 
    }
    
    if (this.treecombo==true) 
    {
        if (e.cell == 0 && e.clickitem =="treeitemcheckbox" ) //트리 콤보일 경우 처리
        {
            objDs = objGrid.getBindDataset();
            
            //체크된 Row
            //nRow = objGrid.getDatasetRow(e.row);
            nRow = e.row;
            
            sChkVal = objDs.getColumn(nRow,"_CHK");
            
            //자손 노드를 찾아서 처리
            arrFamilyRow = take.getTreeFamilyRows(objGrid, 0, nRow);
            nCnt = arrFamilyRow.length;
            
            for (var i=0; i<nCnt ;i++)
            {
                nFRow = arrFamilyRow[i];
                objDs.setColumn(nFRow, "_CHK", sChkVal);
            }
    
            //부모 노드를 찾아서 처리            
            arrAncestorRow = take.getTreeAncestorRows(objGrid, 0, nRow);
            nCnt = arrAncestorRow.length;
            
            for (var j=0; j<nCnt ;j++)
            {
                nFRow = arrAncestorRow[j];
                
                if (sChkVal==1)
                {
                    //체크일 경우 
                    //현재 노드를 포함한 형제 노드가 모두 체크일 경우 부모 자동 체크
                    this._tCheckNode(objGrid, 0, nRow, nFRow, sChkVal);
                    nRow = nFRow;
                    //부모체크시 부모의 형제 체크의 더 상위 부모 자동 체크 필요
                    
                } else {
                    objDs.setColumn(nFRow, "_CHK", 0);
                }
            }
            
            this._tfnSetData(objGrid, e.cell, "tree");
        }
    }

//     if (this.multicombo==true)
//     {
//         //첫번째 컬럼일 경우(첫번째 컬럼이 checkbox 컬럼)
//         if (e.cell == 0 && e.clickitem =="control" )
//         {
//             this._tfnSetData(objGrid, e.cell, "multi");
//         } else {
//             return;
//         }
//     } else if (this.treecombo==true) {
//         //
//         if (e.cell==0)
//         {
//             this._tfnSetData(objGrid, e.cell, "tree");
//         }
//     }
}


/**
 * Close 버튼 클릭 이벤트
 * @param   : {N/A} N/A
 * @return  : {N/A} N/A
 * @example : _tCombo._tfnCloseBtnClick();
 */
_tCombo._tfnCloseBtnClick = function(obj,e)
{
    obj.parent.parent.closePopup();
}
/**
 * Node 체크
 * @param   : {Object} objGrid Grid
 * @param   : {Number} nIdx  컬럼 인덱스
 * @param   : {Number} nRow  현재Row
 * @param   : {Number} nFRow 상위 부모 Row
 * @param   : {sVal}   체크값
 * @return  : {N/A}    N/A
 * @example : _tCombo._tCheckNode();
 */
_tCombo._tCheckNode = function(objGrid, nIdx, nRow, nFRow, sVal)
{
    var arrNode;
    var nCnt;
    var bRtn = true;
    var objDs;
    
    objDs = objGrid.getBindDataset();
    
    arrNode = take.getTreeNodeRows(objGrid, nIdx, nRow);
    nCnt = arrNode.length;
    
    for (var i=0;i<nCnt;i++)
    {
        if (sVal!= objDs.getColumn(arrNode[i],"_CHK"))
        {
            bRtn = false;
            break;
        }        
    }
    
    if (bRtn)
    {
        objDs.setColumn(nFRow,"_CHK",sVal);
    }
}

/**
 * 코드 세팅
 * @param   : {N/A} N/A
 * @return  : {N/A}    N/A
 * @example : _tCombo.fnSetCode();
 */
_tCombo._tfnSetData = function (objGrid, nCell, sGbn)
{
    //변수 선언
    var sRtnTxt="",sRtnVal="", sVal;  
    var arrChkRow;    
    var objDs;
    var nCnt, nRow;

    objDs = objGrid.getBindDataset();    
    
    this._tpretext = take.nvl(this.text,"");
    
    //체크된 Row
    arrChkRow = take.getChkRow(objDs, "_CHK");
    //trace("arrChkRow --> " + arrChkRow);
    //체크된 Row가 있는지 여부 체크
    if (arrChkRow=="") //체크 Row가 없을 경우
    {
        sRtnTxt = "";
        sRtnVal="";
        sVal = "0"; //Header Checkbox 값
    } else { //체크된 Row가 있을 경우
        //체크된 Row 수
        nCnt = arrChkRow.length;
        
        //체크된 Row와 데이터셋 전체 Row수가 같은지 체크
        if (nCnt==objDs.rowcount) //같은경우 전체 값 
        {
            sVal = "1"; //Header Checkbox 값
            
            //sRtnTxt = take.ArrayPluck(objDs._rawRecords, objDs.getColIndex(this._tDataCol));
            sRtnTxt = "전체";
            sRtnVal = take.ArrayPluck(objDs._rawRecords, objDs.getColIndex(this._tCodeCol));
        } else { //다를경우 체크된 Row 데이터 가져오기
            
            for (var i=0;i<nCnt;i++)
            {                
                nRow = arrChkRow[i];
                //sRtnTxt += (i==0?"":",") + objDs.getColumn(nRow, this._tDataCol);
                sRtnTxt += (i==0?objDs.getColumn(nRow, this._tDataCol):"")
                sRtnVal += (i==0?"":",") + objDs.getColumn(nRow, this._tCodeCol);
            }
            
            if (nCnt>1) sRtnTxt += " 외 " + (nCnt-1) + "건";
            
            sVal = "0"; //Header Checkbox 값
        }
    }
    
    if (this.header)
    {
        //Header Checkbox 값 셋팅
        if (objGrid._type_name=="Grid") objGrid.setCellProperty("head", nCell, "text", sVal);
    }
    
    if (sGbn=="multi") 
    {
        this._tpreval = this.multivalue;
        
        //멀티 콤보에 코드, 데이터 세팅
        this.set_value(sRtnVal);
        this.set_text(sRtnTxt);
        this.multivalue=sRtnVal;
        
    } else if (sGbn=="tree") {
     
        this._tpreval = this.treevalue;
        
        //멀티 콤보에 코드, 데이터 세팅        
        this.set_value(sRtnVal);
        this.set_text(sRtnTxt);
        this.treevalue=sRtnVal;
        
        //objGrid.parent.parent.closePopup();
    }
    //var evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", 0, this._tpretext, this._tpreval, 1, sRtnTxt, sRtnVal);
    //this.onitemchanged._fireEvent(this, evt);
}

_tCombo.set_multivalue = function(sVal)
{
    if (this.multicombo==true)
    {
        var sTxt = "", sRtnVal="", sChkVal;
        var arrVal;
        var nIdx, nCnt;
        var objDs;
        
        this.set_enableevent(false);
        
        nIdx=sVal.indexOf(",");
        
        if (nIdx>0)
        {
            arrVal = sVal.split(",");
        } else {
            arrVal = new Array();
            arrVal.push(sVal);
        }
        
        nCnt = arrVal.length;
        
        //데이터가 없으면 리턴
        if (nCnt<=0) return;
        
        objDs = this.getInnerDataset();
        
        take.addDsColumn(objDs,"_CHK", "int", 1);
        
        //데이터 초기화
        if (take.nvl(this._tObjPopGrid,"")!="")
        {
            if (this.header)
            {
                this._tObjPopGrid.setCellProperty("head", 0, "text", "0");
            }
        }
        
        take.allSetColumn(objDs, "_CHK", "0");
        
        for (var i=0;i<nCnt;i++)
        {
            nRow = objDs.findRow(this._tCodeCol, arrVal[i]);
            if (nRow>=0)
            {
                objDs.setColumn(nRow, "_CHK", "1");
                //sTxt += (i==0?"":",") + objDs.getColumn(nRow, this._tDataCol);
                sTxt += (i==0?objDs.getColumn(nRow, this._tDataCol):"");
                sRtnVal += (i==0?"":",") + objDs.getColumn(nRow, this._tCodeCol);
            }
        }
        
        if (nCnt==objDs.rowcount)
        {
            sTxt = "전체";
            if (take.nvl(this._tObjPopGrid,"")!="")
            {
                if (this.header)
                {
                    this._tObjPopGrid.setCellProperty("head", 0, "text", "1");
                }
            }
        } else if (nCnt>1) {
            sTxt += " 외 " + (nCnt-1) + "건";
        }
        
        this._tpretext = this.text;
        this._tpreval = this.multivalue;
        
        this.multivalue=sRtnVal;
        this.set_value(sRtnVal);
        this.set_text(sTxt);
        
        var evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", 0, this._tpretext, this._tpreval, 1, this.text, this.multivalue);
        
        this.set_enableevent(true);

        if (take.nvl(evt,"")!="")
        {
            if (take.nvl(this.onitemchanged,"")!="")
            {
                this.onitemchanged._fireEvent(this, evt);    
            }
        }
    }
}

_tCombo.set_treevalue = function(sVal)
{
    if (this.treecombo==true) 
    {
        var objPopDiv, objGrid, objDs;
        var sTxt = "", sRtnVal="", sChkVal;
        var arrVal, arrFamilyRow, arrAncestorRow;
        var nIdx, nCnt, nFamilyCnt, nAncestorCnt;
                
        this.set_enableevent(false);
        
        nIdx=sVal.indexOf(",");
        
        if (nIdx>0)
        {
            arrVal = sVal.split(",");
        } else {
            arrVal = new Array();
            arrVal.push(sVal);
        }
        
        nCnt = arrVal.length;
        
        //데이터가 없으면 리턴
        if (nCnt<=0) return;
        
        objDs = this.getInnerDataset();
        
        objPopDiv = this._tfnCreatePop(this, objDs); //this._tComboComp
        
        //take.addDsColumn(objDs,"_CHK", "int", 1);
        objGrid = take.nvl(this._tObjPopGrid,"");
        
        //데이터 초기화
        if (objGrid!="")
        {
            if (this.header)
            {
                objGrid.setCellProperty("head", 0, "text", "0");
            }
        }
        
        take.allSetColumn(objDs, "_CHK", "0");
        
        for (var i=0;i<nCnt;i++)
        {
            nRow = objDs.findRow(this._tCodeCol, arrVal[i]);
            if (nRow>=0)
            {
                //체크 세팅
                objDs.setColumn(nRow, "_CHK", "1");
                
                //자손 노드를 찾아서 처리
                arrFamilyRow = take.getTreeFamilyRows(objGrid, 0, nRow);
                nFamilyCnt = arrFamilyRow.length;
                
                for (var k=0; k<nFamilyCnt ;k++)
                {
                    objDs.setColumn(arrFamilyRow[k], "_CHK", "1");
                }
                
                //부모 노드를 찾아서 처리            
                arrAncestorRow = take.getTreeAncestorRows(objGrid, 0, nRow);
                nAncestorCnt = arrAncestorRow.length;
                
                for (var j=0; j<nAncestorCnt ;j++)
                {
                    //체크일 경우 
                    //현재 노드를 포함한 형제 노드가 모두 체크일 경우 부모 자동 체크
                    this._tCheckNode(objGrid, 0, nRow, arrAncestorRow[j], "1");
                }
            }
        }   
            
//         for (var i=0;i<nCnt;i++)
//         {
//             nRow = objDs.findRow(this._tCodeCol, arrVal[i]);
//             if (nRow>=0)
//             {
//                 objDs.setColumn(nRow, "_CHK", "1");
//                 //sTxt += (i==0?"":",") + objDs.getColumn(nRow, this._tDataCol);
//                 sTxt += (i==0?objDs.getColumn(nRow, this._tDataCol):"");
//                 sRtnVal += (i==0?"":",") + objDs.getColumn(nRow, this._tCodeCol);
//             }
//         }
//         
//         if (nCnt==objDs.rowcount)
//         {
//             sTxt = "전체";
//             //데이터 초기화
//             if (take.nvl(this._tObjPopGrid,"")!="")
//             {
//                 if (this.header)
//                 {
//                     this._tObjPopGrid.setCellProperty("head", 0, "text", "1");
//                 }
//             }
//         } else if (nCnt>1) {
//             sTxt += " 외 " + (nCnt-1) + "건";
//         }
//         
//         this._tpretext = this.text;
//         this._tpreval = this.treevalue;
//         
//         this.treevalue=sRtnVal;
//         this.set_value(sRtnVal);
//         this.set_text(sTxt);
        
        this.set_enableevent(true);
        
        this._tfnSetData(objGrid, 0, "tree");
        
        var evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", 0, this._tpretext, this._tpreval, 1, this.text, this.treevalue);
        
        if (take.nvl(evt,"")!="")
        {
            if (take.nvl(this.onitemchanged,"")!="")
            {
                this.onitemchanged._fireEvent(this, evt);   
            }
        }
    }
}
/**
 * DivPopUp Close Click Event
 * @param   : {N/A} N/A
 * @return  : {N/A}    N/A
 * @example : _tCombo._tfnPopClose();
 */
_tCombo._tfnPopClose = function (objPopupDiv, e)
{
    var evt;
    
    if (this.multicombo==true)
    {
        if (this._tpreval!=this.multivalue)
        {
            evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", 0, this._tpretext, this._tpreval, 1, this.text, this.multivalue);
        }
    }
    
    if (this.treecombo==true)
    {
        if (this._tpreval!=this.treevalue)
        {
            evt = new nexacro.ItemChangeEventInfo(this, "onitemchanged", 0, this._tpretext, this._tpreval, 1, this.text, this.treevalue);
        }
    }    
    
    if (take.nvl(evt,"")!="")
    {
        if (take.nvl(this.onitemchanged,"")!="")
        {
            this.onitemchanged._fireEvent(this, evt);
        }
    }
}
