/***************************************************************************
 *  2019.07.01 made by take ymko                                           *
 *  take domain javascript Library                                         *
 *  www.take.co.kr                                                         *
 ***************************************************************************/

/**
 * @namespace
 * @name create the root namespace and making sure we're not overwriting it
 * @memberof! <global>
 */
var createNS = createNS || function namespace(namespace) {
	var object = this, tokens = namespace.split("."), token;
	while (tokens.length > 0) {
		token = tokens.shift();
		if (typeof object[token] === "undefined") {
			object[token] = {};
		}
		object = object[token];
	}
	return object;
};

var takevalidator = createNS("takeval");

////////////////////////////////////////////////////////////////////////////
// START               벨리데이션 처리 공통 함수(전용)                //
////////////////////////////////////////////////////////////////////////////
takeval.pThis = undefined;       //Form
takeval.cssclass = "essential";  //필수 입력 CSS

/**
 * Validator 추가 
 * @param  {object}  pThis    폼
 *         {string}  sValGId  체크그룹아이디
 *         {object}  objComp  컴포넌트 object
 *         {string}  sName    명칭(ex:주민번호)
 *         {string}  sChkVal  Comp:Properti/Grid:Cell/Dataset:Column 명
 *         {boolean} bNullChk null check
 *         {string}  sType    타입(number, date등)체크
 *         {array}   arrTerm  체크수(문자는 자릿수, 숫자는 구간[form,to])
 *         {boolean} bByte    Byte로 체크여부 (생략가능) 
 *         {string}  sChkFunc User function 명(생략가능)
 *         {boolean} bSync    싱크 여부 (생략가능) --> 무조건 동기 체크 
 * @return {Array}   그룹 아이디, 인덱스
 */
takeval.add = function (pThis, sValGId, objComp, sName, sChkVal, bNullChk, sType, arrTerm, bByte, sChkFunc, bSync)
{
    try 
    {
        //변수 선언
        var objVal;
        var objValGrp, objValData;
        var nIdx, nFind;
        
        //필수 입력 체크 (폼)
        if (take.nvl(pThis,"")=="")
        {
            take.trace("takeval.add", "Info", "폼은 필수입니다.");
            return false;
        }
        //필수 입력 체크 (그룹 아이디)
        if (take.nvl(sValGId,"")=="")
        {
            take.trace("takeval.add", "Info", "그룹아이디는 필수입니다.");
            return false;
        }
        //필수 입력 체크 (체크 대상 명)
        if (take.nvl(sName,"")=="")
        {
            take.trace("takeval.add", "Info", "명칭은 필수입니다.");
            return false;
        }
        //그룹 아이디 예약어 체크
        if (sValGId=="length")
        {
            take.trace("takeval.add", "Info", "length는 그룹아이디로 사용할 수 없습니다.");
            return false;
        }
        
        if (take.nvl(objComp,"")=="")
        {
            take.trace("takeval.add", "Info", "대상 컴포넌트가 없습니다.");
            return false;
        }
        
        if (take.nvl(pThis["objValidator"],"")=="")
        {
            //폼에 objValidator Object 추가
            pThis["objValidator"] = new Object();
        }
        
        objVal = pThis.objValidator;
        
        //length 속성이 있는지 여부
        if (!objVal.hasOwnProperty("length"))
        {
            //length 속성 추가
            objVal.length = 0;
        }

        nFind = takeval.getFindObjValidator(pThis, sValGId, objComp._unique_id, sChkVal);
        
        if (nFind>=0)
        {
            takeval.remove(pThis, sValGId, nFind);
        }
        
        //Object 선언
        objValData = new Object();
        
        //Object에 값 세팅
        objValData.groupid = sValGId;
        objValData.comp    = objComp;
        objValData.name    = sName;
        objValData.prop    = sChkVal;
        objValData.nullchk = bNullChk;
        objValData.type    = sType;
        objValData.term    = arrTerm;
        //objValData.chkFunc = sChkFunc;
        objValData.chkFunc = ""; //옵션 사용 금지
        //objValData.sync    = take.nvl(bSync,false);
        objValData.sync    = false; //옵션 사용 금지
        objValData.isbyte    = take.nvl(bByte,false);
        
        //그룹 아이디가 있으면 해당 그룹 아이디에 추가
        if (take.nvl(objVal[sValGId],"")=="")
        {            
            objVal[sValGId] = new Array();           
            objVal.length++;
            
        }
        
        nIdx = objVal[sValGId].push(objValData);
        
        //리턴 그룹 아이디, 인덱스
        return [sValGId, nIdx];
    
    } catch(e) {
        return false;
    }   
}

/**
 * Vlidator 실행 
 * @param  {object}  pThis      폼
 *         {string}  sValGId    체크그룹아이디
           {boolean} bDsModify  수정된 데이터만 체크할지 여부
 * @return {boolean} true/false 설공 실패 여부
 */
takeval.check = function(pThis, sValGId, bDsModify)
{
    //변수 선언
    var arrValGrp, arrTerm;
    var nCnt;
    var objValData, objComp;
    var bNullChk, bSync, bRtn=true, bByte;
    var sName, sChkVal, sType, sChkFunc;
    
     //필수 입력 체크 (폼)
    if (take.nvl(pThis,"")=="")
    {
        take.trace("takeval.check", "Info", "폼은 필수입니다.")
        return false;
    }
    
     //필수 입력 체크 (그룹아이디)
    if (take.nvl(sValGId,"")=="")
    {
        take.trace("takeval.check", "Info", "그룹아이디는 필수입니다.");
        return false;
    }

    pThis["__tVal_" + sValGId + "_bDsModify"] = take.nvl(bDsModify,true);
    
    //해당 그룹 벨리데이터 대상
    arrValGrp = take.nvl(pThis.objValidator[sValGId],"");
    
    if (arrValGrp=="") 
    {
        take.trace("takeval.check", "Info", "벨리데이션 체크 대상이 없습니다.");
        return false;
    }
    
    //해당 그룹 벨리데이터 대상 수
    nCnt = arrValGrp.length;
    
    //대상수 만큼 반복
    for (var i=0;i<nCnt;i++)
    {
        //trace(i);
        //베리데이터 대상
        objValData = arrValGrp[i];
        //벨리데이터 속성값
        objComp  = objValData.comp;
        sName    = objValData.name;
        sChkVal  = objValData.prop;
        bNullChk = objValData.nullchk;
        sType    = (objValData.type).toLowerCase();
        arrTerm  = objValData.term;
        sChkFunc = objValData.chkFunc;
        bSync    = objValData.sync;
        bByte    = objValData.isbyte;
        
        //벨리 데이션 체크 후 False 일경우 멈춤
        if (!takeval.checkValidation(pThis, objComp, sName, sChkVal, bNullChk, sType, arrTerm, sChkFunc, bSync, sValGId, bByte))
        {
            bRtn=false;
            break;            
        };
    }
    
    return bRtn;
}

/**
 * Vlidator 건별 체크 
 * @param  {object}  pThis    폼
 *         {object}  objComp  컴포넌트 object
 *         {string}  sName    명칭(ex:주민번호)
 *         {string}  sChkVal  Comp:Properti/Grid:Cell/Dataset:Column 명
 *         {boolean} bNullChk null check
 *         {string}  sType    타입(number, date등)체크
 *         {array}   arrTerm  체크수(문자는 자릿수, 숫자는 구간[form,to])
 *         {string}  sChkFunc User function 명(생략가능)
 *         {boolean} bSync    싱크 여부
 *         {string}  sValGId  벨리데이션 그룹
 * @return {boolean} true/false 설공 실패 여부
 */
takeval.checkValidation = function(pThis, objComp, sName, sChkVal, bNullChk, sType, arrTerm, sChkFunc, bSync, sValGId, bByte)
{
    //변수 선언
    var objBindDataset;
    var arrTerm;
    var nCnt, nLength, nRowCnt, nColIdx;
    var aVal, aStart, aEnd;
    var sCompType, sChkColNm;
    var bRtn = true;
    
    //컴포넌트 타입
    sCompType = objComp._type_name; 

    //그리드일 경우
    if (sCompType=="Grid") 
    {
        //데이터셋 업데이트
        objComp.updateToDataset();
        //그리드에 바인드 된 데이터셋
        objBindDataset = objComp.getBindDataset();
        //컬럼 인덱스
        nColIdx = "";
        //데이터셋 행수
        nRowCnt = objBindDataset.rowcount;
        
        //숫자 입력 여부
        //if (/\d/.test(sChkVal.substr(0,1)))
        if (takeval.isNumber(sChkVal))
        {
            //숫자형으로 변경
            nColIdx = nexacro.toNumber(sChkVal);
            
            nColIdx = objComp._xfnGridGetBodyCellIndex(objComp, nColIdx);
            
            //해당 인덱스의 컬럼명
            sChkColNm = take.getBindColName(objComp, nColIdx);
        } else {
            //숫자형이 아니면 컬럼명으로 간주
            sChkColNm = sChkVal;
        }            
        
        //행수 만큼 반복
        for (var i=0;i<nRowCnt;i++)
        {
            //수정된 데이터만 수행할지 여부
            if (pThis["__tVal_"+sValGId+"_bDsModify"])
            {
                 //수정된 행만 수행
                if (take.isDsModified(objBindDataset,i))
                {
                    //해당 컬럼의 값
                    aVal = objBindDataset.getColumn(i,sChkColNm);
                   // trace("objBindDataset --> " + objBindDataset.name + " / row --> " + i + " / sChkColNm --> " + sChkColNm + " / aVal --> " + aVal);
                    //벨리데이션 체크 후 실패시
                    if (!takeval.validation(pThis, sName, sType, aVal, bNullChk, arrTerm, bByte))
                    {
                        //해당 로우
                        objBindDataset.set_rowposition(i);
                        //컬럼 인덱스 값이 없으면 인덱스 구하기
                        //if (nColIdx == "") sChkVal = objComp.getBindCellIndex("body", sChkColNm);
                        sChkVal = objComp.getBindCellIndex("body", sChkColNm);
                        //해당 컬럼에 위치시키기
                        objComp.setCellPos(0);
                        //objComp.setCellPos(nColIdx);
                        objComp.setCellPos(sChkVal);
                        objComp.showEditor(true);
                        //false 리턴
                        bRtn = false;
                        break;
                    }
                }
            } else { 
                //해당 컬럼의 값
                aVal = objBindDataset.getColumn(i,sChkColNm);
                // trace("objBindDataset --> " + objBindDataset.name + " / row --> " + i + " / sChkColNm --> " + sChkColNm + " / aVal --> " + aVal);
                //벨리데이션 체크 후 실패시
                if (!takeval.validation(pThis, sName, sType, aVal, bNullChk, arrTerm, bByte))
                {
                    //해당 로우
                    objBindDataset.set_rowposition(i);
                    //컬럼 인덱스 값이 없으면 인덱스 구하기
                    //if (nColIdx == "") sChkVal = objComp.getBindCellIndex("body", sChkColNm);
                    sChkVal = objComp.getBindCellIndex("body", sChkColNm);
                    //해당 컬럼에 위치시키기
                    objComp.setCellPos(0);
                    //objComp.setCellPos(nColIdx);
                    objComp.setCellPos(sChkVal);
                    objComp.showEditor(true);
                    //false 리턴
                    bRtn = false;
                    break;
                }               
            }
        }
        
    } else if (sCompType=="Dataset") { //데이터셋일 경우
        //행수
        nRowCnt = objComp.rowcount;
        //행수 만큼 반복
        for (var i=0;i<nRowCnt;i++)
        {
            //수정된 데이터만 수행할지 여부
            if (pThis["__tVal_"+sValGId+"_bDsModify"])
            {
                //수정된 행만 체크
                if (take.isDsModified(objComp,i))
                {
                    //해당 컬럼 값
                    aVal = objComp.getColumn(i,sChkVal);
                    //벨리데이션 체크후 실패시
                    if (!takeval.validation(pThis, sName, sType, aVal, bNullChk, arrTerm, bByte))
                    {
                        //해당 로우에 위치하기
                        objComp.set_rowposition(i);
                        
                        //데이터셋에 바인드 된 컴포넌트를 
                        //찾기가 어려움
                        //var objBindGrid = ? ;//바인드된 그리드
                        //nColIdx = objBindGrid.getBindCellIndex("body", sChkVal);                    				
                        //objBindGrid.setCellPos(0);
                        //objBindGrid.setCellPos(nColIdx);
                        //objBindGrid.showEditor(true);
                        bRtn = false;
                        break;
                    }
                }
            } else {
                //해당 컬럼 값
                aVal = objComp.getColumn(i,sChkVal);
                //벨리데이션 체크후 실패시
                if (!takeval.validation(pThis, sName, sType, aVal, bNullChk, arrTerm, bByte))
                {
                    //해당 로우에 위치하기
                    objComp.set_rowposition(i);
                    
                    //데이터셋에 바인드 된 컴포넌트를 
                    //찾기가 어려움
                    //var objBindGrid = ? ;//바인드된 그리드
                    //nColIdx = objBindGrid.getBindCellIndex("body", sChkVal);                    				
                    //objBindGrid.setCellPos(0);
                    //objBindGrid.setCellPos(nColIdx);
                    //objBindGrid.showEditor(true);
                    bRtn = false;
                    break;
                }
            }
        }
    } else { //일반 컴포넌트일 경우
        
        if (objComp.hasOwnProperty("updateToDataset"))
        {
            //데이터셋 업데이트
            objComp.updateToDataset();
        }
        
        //컴포넌트 Value 값
        if (objComp.hasOwnProperty(sChkVal))
        {
            aVal = objComp[sChkVal];
        } else {
            //스테틱 컴포넌트류는 체크 안함
            //향후 체크 필요시 주석해제
            //if (objComp.hasOwnProperty("text"))
            //{
            //     aVal = objComp.text;
            //} else {
            //    aVal = "";
            //}

            try {
                 aVal = objComp[sChkVal];
            } catch(e) {
                return false;
            }
        }

        if (!takeval.validation(pThis, sName, sType, aVal, bNullChk, arrTerm, bByte))
        {
            //해당 컴포넌트에 포커스
            objComp.setFocus();
            bRtn = false;
        }
    }
    
//     //벨리데이터 통과시 
//     if (bRtn==true)
//     {
//         //리턴 함수 여부
//         if (nexacro._nvl(sChkFunc, "")!="")
//         {
//             //리턴 함수가 해당 폼에 있을경우
//             if (take.isFunction(pThis[sChkFunc])) 
//             {
//                 //동기일 경우
//                 if (bSync)
//                 {
//                     //리턴 값 확인
//                     if (!pThis[sChkFunc].call(pThis, objComp, sChkVal, sName)) return false;
//                 } else {   
//                     //비동일 경우 리턴 값 없이 호출
//                     pThis[sChkFunc].call(pThis, objComp, sChkVal, sName);
//                 }
//             } else {
//                 take.debug(pThis.name + ".takeval.check", pThis.name + "폼에 " + sChkFunc + " 함수가 없습니다.");
//             }
//         }
//    }
    
    return bRtn;
}

/**
 * Vlidator 수행 함수
 * @param  {string}    sName    명칭(ex:주민번호)
 *         {string}    sType    타입(number, date등)체크
 *         {anonymous} aVal     체크대상 값
 *         {boolean}   bNullChk Null Check 여부
 *         {anonymous} arrTerm  체크수(문자는 자릿수, 숫자는 구간[form,to])
 * @return {boolean} true/false 설공 실패 여부
 */
takeval.validation = function(pThis, sName, sType, aVal, bNullChk, arrTerm, bByte)
{
    //변수 선언
    var aStart, aEnd;
    //필수값 (Null) 체크 여부
    if (bNullChk)
    {
        //Null값 체크
        if(nexacro._isNull(aVal)||nexacro._nvl(aVal, "")=="")
        {
            //take.alert(pThis, "", sName + "는(은) 필수 입력입니다.", "", "takevalValidation00");
            take.alert(pThis, "", sName + "는(은) 필수 입력입니다.");
            //if (sCompType!="Dataset") objComp.setFocus();
            return false;
        }
    } else {
        aVal = nexacro._nvl(aVal, "");
        
        if(aVal == "")
        {
            //필수값이 아닌데 Null인 경우 벨리데이션 체크 X
            take.debug(pThis.name + ".takeval.check", pThis.name + "폼에 " + sName + " 값이 없습니다.");
            return true;
        }
    }
    
    bByte = take.nvl(bByte,false);
    
    //날짜 형식 체크
    if (sType=="date")
    {
        //값 데이트 형식 여부
        if (!take.isDate(aVal, false))
        {
            //take.alert(pThis, "", sName + "는(은) 날짜 형식이 아닙니다.", "", "takevalValidation02");
            take.alert(pThis, "", sName + "는(은) 날짜 형식이 아닙니다.");
            //if (sCompType!="Dataset") objComp.setFocus();
            return false;
        }
     }       
     
    //값이 숫자형인지 확인
    if (sType=="number")
    {
        if (!takeval.isNumber(aVal))
        {
            //take.alert(pThis, "", sName + "는(은) 숫자 형식이 아닙니다.", "", "takevalValidation03");
            take.alert(pThis, "", sName + "는(은) 숫자 형식이 아닙니다.");
            //if (sCompType!="Dataset") objComp.setFocus();
            return false;
        }
    }
    
    //조건값(from~to)이 있을경우
    if (nexacro._nvl(arrTerm, "")!="")
    {
        //값 가져오기
        aStart = arrTerm[0];
        aEnd = arrTerm[1];
        //데이트 형일 경우
        if (sType=="date")
        {
            //값 데이트 형식 여부
            if (!take.isDate(aVal, false))
            {
                //take.alert(pThis, "", sName + "는(은) 날짜 형식이 아닙니다.", "", "takevalValidation04");
                take.alert(pThis, "", sName + "는(은) 날짜 형식이 아닙니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }
            //조건 데이트 형식 여부
            if (!take.isDate(aStart, false)||!take.isDate(aEnd, false))
            {
                //take.alert(pThis, "Info", "날짜 형식의 조건이 아닙니다.", "", "takevalValidation05");
                take.alert(pThis, "Info", "날짜 형식의 조건이 아닙니다.");
                return false;
            }
            //From to 조건 체크
            if (!take.isFromTo(aStart, aEnd))
            {
                take.trace("takeval.validation", "Info", "종료일이 시작일 보다 큽니다.");
                return false;
            }
            //시작일 체크
            if (aVal<aStart)
            {
                //take.alert(pThis, "", sName + "이 시작일("+ aStart +") 보다 작습니다.", "", "takevalValidation06");
                take.alert(pThis, "", sName + "이 시작일("+ aStart +") 보다 작습니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }
            //종료일 체크
            if (aVal>aEnd)
            {
                //take.alert(pThis, "", sName + "이 종료일("+ aEnd +") 보다 큽니다.", "", "takevalValidation07");
                take.alert(pThis, "", sName + "이 종료일("+ aEnd +") 보다 큽니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }
            
        } else if (sType=="number") {  //숫자형일 경우
            //trace("takeval.validation number type 1--> " + takeval.isNumber(aVal));
            //값이 숫자형인지 확인
            if (!takeval.isNumber(aVal))
            {
                //take.alert(pThis, "", sName + "는(은) 숫자 형식이 아닙니다.", "", "takevalValidation08");
                take.alert(pThis, "", sName + "는(은) 숫자 형식이 아닙니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }
            //trace("takeval.validation number type 2--> " + nexacro._isNumber(aVal));
            //문자형 숫자일경우 숫자형으로 변환
            if (!nexacro._isNumber(aVal)) aVal = nexacro.toNumber(aVal);
            
            //trace("takeval.validation number type 3--> aStart : " + takeval.isNumber(aStart) + " / aEnd : " + takeval.isNumber(aEnd));
            //조건이 숫자형인지 체크
            if (!takeval.isNumber(aStart)||!takeval.isNumber(aEnd))
            {
                take.trace("takeval.validation", "Info", "숫자 형식의 조건이 아닙니다.");
                return false;
            }
            //문자형 숫자인 경우 숫자형으로 변환
            if (!nexacro._isNumber(aStart)) aStart = nexacro.toNumber(aStart);            
            if (!nexacro._isNumber(aEnd)) aEnd = nexacro.toNumber(aEnd);
            
            //trace("takeval.validation number type 4 --> aVal : " + aVal + " / aStart : " + aStart)
            //시작값 체크
            if (aVal<aStart)
            {
                //take.alert(pThis, "", sName + "이(가) " + aStart +" 보다 작습니다.", "", "takevalValidation09");
                take.alert(pThis, "", sName + "이(가) " + aStart +" 보다 작습니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }
            
            //trace("takeval.validation number type 5 --> aVal : " + aVal + " / aEnd : " + aEnd)
            //종료값 체크
            if (aVal>aEnd)
            {
                //take.alert(pThis, "", sName + "이(가) " + aEnd +" 보다 큽니다.", "", "takevalValidation10");
                take.alert(pThis, "", sName + "이(가) " + aEnd +" 보다 큽니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }                    
            
        } else if (sType=="string") { //문자형일 경우
            //문자형인지 체크
            if (!nexacro._isString(aVal))
            {
                //take.alert(pThis, "", sName + "는(은) 문자 형식이 아닙니다.", "", "takevalValidation11");
                take.alert(pThis, "", sName + "는(은) 문자 형식이 아닙니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }
            //조건이 숫자형인지 체크
            if (!takeval.isNumber(aStart)||!takeval.isNumber(aEnd))
            {
                take.trace("takeval.validation", "Info", "숫자 형식의 조건이 아닙니다.");
                return false;
            }
            //문자형 숫자일 경우 숫자형으로 변형
            if (!nexacro._isNumber(aStart)) aStart = nexacro.toNumber(aStart);            
            if (!nexacro._isNumber(aEnd)) aEnd = nexacro.toNumber(aEnd);
            
            //문자열 길이
            if (bByte)
            {
                nLength = take.getByteLength(aVal);
            } else {
                nLength = aVal.length;
            }            
            
            //문자열 시작 길이 체크
            if (nLength<aStart)
            {
                //take.alert(pThis, "", sName + "이(가) " + aStart + (bByte?"Byte":"자") + " 보다 작습니다.\n(영문 1byte, 한글 3byte)", "", "takevalValidation12");
                take.alert(pThis, "", sName + "이(가) " + aStart + (bByte?"Byte":"자") + " 보다 작습니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }
            //문자열 종료 길이 체크
            if (nLength>aEnd)
            {
                //take.alert(pThis, "", sName + "이(가) " + aEnd + (bByte?"Byte":"자") + " 보다 큽니다.\n(영문 1byte, 한글 3byte)", "", "takevalValidation13");
                take.alert(pThis, "", sName + "이(가) " + aEnd + (bByte?"Byte":"자") + " 보다 큽니다.");
                //if (sCompType!="Dataset") objComp.setFocus();
                return false;
            }
            
        } else {
            take.trace("takeval.validation", "Info", "지원하지 않는 형식입니다. \n 'string, number, date' 형식만 지원합니다. ");
            return false;
        }
    }
    
    return true;
}

/**
 * Vlidator 오브젝트 삭제 
 * @param  {object}  pThis      폼
 *         {string}  sValGId    체크그룹아이디
 *         {number}  nIdx       오브젝트 인덱스
 * @return {boolean} true/false 설공 실패 여부
 */
takeval.remove = function(pThis, sValGId, nIdx)
{
    //변수 선언
    var objVal;
    var arrValGrp;
    
    //필수 값 체크(폼)
    if (take.nvl(pThis,"")=="")
    {
        take.trace("takeval.remove", "Info", "폼은 필수입니다.");
        return false;
    }
    //필수 값 체크(그룹아이디)
    if (take.nvl(sValGId,"")=="")
    {
        take.trace("takeval.remove", "Info", "그룹아이디는 필수입니다.");
        return false;
    }
    
    //벨리데이터 오브젝트
    objVal = take.nvl(pThis.objValidator, "");
    
    if (objVal!="")
    {
        if (objVal.hasOwnProperty(sValGId))
        {
            //대상 그룹 데이터
            arrValGrp = objVal[sValGId];
            
            //인덱스 값이 있으면 해당 인덱스만 삭제
            //if (take.nvl(nIdx,"")!="")
            if (takeval.isNumber(nIdx))
            {
                arrValGrp.splice(nIdx,1);
            } else {
                if (take.nvl(nIdx,"")!="")
                {
                    //인덱스가 없으면 그룹 삭제
                    pThis.objValidator[sValGId] = null;        
                    delete pThis.objValidator[sValGId];        
                    pThis.objValidator.length--;
                }
            }
        }
    }
    return true;
}

/**
 * Vlidator 그룹 리스트
 * @param  {object}  pThis  폼
 * @return {array}   arrRtn Vlidator 그룹 리스트
 */
takeval.getGroupList = function(pThis)
{
    //변수 선언 및 세팅
    var objVal = pThis.objValidator; //벨리데이터 오브젝트
    var arrRtn = new Array();
    
    //벨리데이터 그룹 수 만큼 반복
    for (var i in objVal)
    {
        //Length가 아닐경우 배열에 그룹 넣기
        if (i!="length")
        {
            arrRtn.push(i);
        }
    }
    //그룹 리스트 반환
    return arrRtn;
}

/**
 * Vlidation 그룹에서 항목 찾기
 * @param  {object}  pThis  폼
 * @param  {string}  sValGId  그룹아이디
 * @param  {string}  sCompId  컴포넌트 아이디
 * @param  {string}  sChkVal  체크할 프러퍼티
 * @return {number}  array index 
 */
takeval.getFindObjValidator = function(pThis, sValGId, sCompId, sChkVal)
{
    //변수 선언 및 세팅
    var objVal = pThis.objValidator, objValOne; //벨리데이터 오브젝트
    var arrValGrp;
    var nCnt, nRtn = -1;
    
    if (take.nvl(objVal[sValGId],"")=="") return nRtn;
    
    arrValGrp = objVal[sValGId];
    
    nCnt = arrValGrp.length;
    
    if (nCnt<=0) return nRtn;
    
    for (var i=0;i<nCnt;i++)
    {
        objValOne = arrValGrp[i];
        if (objValOne.comp._unique_id+objValOne.prop==sCompId+sChkVal)
        {
            nRtn = i;
            break;
        }
    }
    
    return nRtn;
}

/**
 * Vlidator 그룹 오브젝트
 * @param  {object}  pThis    폼
 * @param  {string}  sValGId  그룹아이디
 * @return {object}  Vlidator 그룹 오브젝트
 */
takeval.getGroupArray = function(pThis, sValGId)
{
    if (take.nvl(pThis["objValidator"],"")=="")
    {
        return "";
    }
    return take.nvl(pThis.objValidator[sValGId], "");
}

/**
 * Vlidator 출력
 * @param  {object}  pThis    폼
 * @param  {string}  sValGId  그룹아이디
 * @return {N/A}     N/A
 */
takeval.print = function (pThis, sValGId)
{
    //trace("argument-->" +  argument);
    //변수 선언 및 세팅
    var arrValGrp = take.nvl(pThis.objValidator[sValGId],"");   //벨리데이터 오브젝트에서 해당 그룹의 리스트
    var sPrint;
    
    take.trace("takeval.print", "Info", "######"+ sValGId +"######");
    take.trace("takeval.print", "Info", "######"+ pThis.objValidator +"######");
    
    console.dir(pThis.objValidator);
    console.dir(arrValGrp);
    
    if (arrValGrp=="") return "";
    
    //데이터 수
    var nCnt = arrValGrp.length;
    //데이터 수 만큼 반복
    for (var i=0;i<nCnt;i++)
    {
        //데이터 출력
        sPrint = i + " --> ";
        for (var j in  arrValGrp[i])
        {
            sPrint += j + " : " + arrValGrp[i][j] + " , ";
        }
        
        take.trace("takeval.print", "Info", sPrint.substr(0, sPrint.length-3));
    }
    
    return arrValGrp;
}

/**
 * Vlidator 그룹 체크 : Form, Div, Tab, Tabpage에서 필수입력 css확인 후 체크
 * @param  {object}  pThis       폼
 * @param  {object}  objCompGrp  그룹아이디
 * @param  {string}  sCssId      필수 입력 CSS
 * @param  {string}  sChkFunc    User function 명(생략가능)
 * @param  {boolean} bSync       동기 여부
 * @return {N/A}     N/A
 */
takeval.checkComp = function(pThis, objCompGrp, sCssId, sChkFunc, bSync)
{
    //변수 선언
    var sCompType, sName, sChkVal, sType, sChkFunc;
    var nCnt;
    var objTabPages, objCompList, objComp, objValInfo, objTextComp;
    var arrTerm, arrCompList;
    var bNullChk, bRtn=true;
    
    //필수 값 체크(폼)
    if (take.nvl(pThis,"")=="")
    {
        take.trace("takeval.checkComp", "Info", "폼은 필수입니다.");
        return false;
    }
    //필수값 체크(그룹 아이디)
    if (take.nvl(objCompGrp,"")=="")
    {
        take.trace("takeval.checkComp", "Info","그룹아이디는 필수입니다.");
        return false;
    }
    //컴포넌트 타입
    sCompType = objCompGrp._type_name;
    
    //CSS가 없으면
    if (take.nvl(sCssId,"")=="")
    {
        //기본 CSS로 세팅
        sCssId = takeval.cssclass;
        
        //그리드일 경우 그리드 값 붙이기
        //if (sCompType=="Grid")
        //{
        //    sCssId = "Grd_"+ sCssId;
        //}
    }
    //동기 여부 없을경우 비동기
    bSync = nexacro._nvl(bSync, true);
    
    //폼일 경우
    if (sCompType=="Form")
    {
        objCompList = objCompGrp.components; //컴포넌트 목록 Object
        arrCompList = objCompList._idArray;  //컴포넌트 목록 Array
        nCnt = arrCompList.length; //컴포넌트 수
        
        //컴포넌트 수 만큼 반복
        for (var i=0;i<nCnt;i++)
        {
            //컴포넌트
            objComp = objCompList[i];
            
            //Div, Tabpage 일경우
            if (objComp._type_name=="Div" || objComp._type_name=="Tabpage")
            {
                //폼으로 변환후 재귀 호출
                if (!takeval.checkComp(pThis, objComp.form, sCssId, sChkFunc, bSync))
				{
					if (bSync)
                    {
						return false;
					}
				}
                //break;
            } else if (objComp._type_name=="Tab") { //Tab일 경우
                //Tab으로 재귀 호출
                if (!takeval.checkComp(pThis, objComp, sCssId, sChkFunc, bSync))
				{
					if (bSync)
                    {
						return false;
					}
				}
                //break;
            } else if (objComp._type_name=="Grid") { //Grid일 경우
                //그리드로 재귀 호출
                if (!takeval.checkComp(pThis, objComp, sCssId, sChkFunc, bSync))
				{
					if (bSync)
                    {
						return false;
					}
				}
            }
            
            //해당 CSS를 포함할 경우
            if (objComp.cssclass.indexOf(sCssId)>=0)
            {
                //해당 컴포넌트에 'validation' user properties가 있으면
                if (nexacro._nvl(objComp.validation,"")!="")
                {
                    //Object 형이면
                    if( typeof(objComp.validation) === "object")
                    {
                        objValInfo = objComp.validation;
                    } else {
                        //Object 형이 아니면 Object로 변환
                        //objValInfo = eval(objComp.validation);
                        objValInfo = take.StringToObject(objComp.validation);
                    }
                    //벨리데이션 세팅 값 가져오기
                    sName = objValInfo.name;
                    sChkVal = objValInfo.prop;
                    bNullChk = objValInfo.nullchk; 
                    sType = (objValInfo.type).toLowerCase();
                    arrTerm = objValInfo.term;
                    sChkFunc = objValInfo.chkFunc;                    
                } else {  //User Properties가 없으면 
                    //기본 값 세팅
					//objTextComp = take.nvl(objComp.parent["sta" + objComp.name.substr(3) + "T"],"");					
					objTextComp = take.nvl(objCompList["sta" + objComp.name.substr(3) + "T"],"");					
                    sName = objTextComp!=""?take.nvl(objTextComp.text,""):take.nvl(objComp.valname,"");
                    
                    if (objComp._type_name=="Static")
                    {
                        sChkVal = "text";
                        sType = typeof(objComp.text);
                    } else {
                        sChkVal = "value";
                        sType = typeof(objComp.value);
                    }
                    
                    bNullChk = true; 
                    arrTerm = "";
                    sChkFunc = "";
                }
                //벨리데이션 체크
                bRtn = takeval.checkValidation(pThis, objComp, sName, sChkVal, bNullChk, sType, arrTerm, sChkFunc, bSync);
                
                //false일 경우
                if (!bRtn)
                {
                    //동기면
                    if (bSync)
                    {
						return false;
                        break;
						
                    }
                }
            }
        }
    } else if (sCompType=="Grid") { //그리드일 경우
        //헤더에 컬럼수 
        nCnt = objCompGrp.getCellCount("Head");
        //헤더 수 만큼 반복
        for (var i=0;i<nCnt;i++)
        {
            //필수입력 CSS가 있으면
            if (objCompGrp.getCellProperty("Head", i, "cssclass").indexOf(sCssId) >= 0)
            {
                //Grid에는 각 셀 별로 User Properties가 없기 때문에 일단 null값만 체크
                //헤더의 컬럼명
                sName = objCompGrp.getCellProperty("Head", i, "text");
                //체크할 헤더 인덱스
                sChkVal = i;
                //null여부 체크
                bNullChk = true; 
                //컬럼 타입
                sType = typeof(objCompGrp.getCellValue(0, i));
                arrTerm = "";
                sChkFunc = "";
                //벨리데이션 체크
                bRtn = takeval.checkValidation(pThis, objCompGrp, sName, sChkVal, bNullChk, sType, arrTerm, sChkFunc, bSync);
                
                //False일 경우
                if (!bRtn)
                {
                    //동기면
                    if (bSync)
                    {
						return false;
                        break;						
                    }
                }
            }        
        }
    } else { //Div, Tabpage, Tab일 경우
        if (sCompType=="Div"||sCompType=="Tabpage") //Div, Tappage
        {
            //폼으로 변경후 재귀 호출
            if (!takeval.checkComp(pThis, objCompGrp.form, sCssId, sChkFunc, bSync))
			{
				if (bSync)
                {
					return false;
				}
			}
        } else if (sCompType=="Tab") {    //Tab
            //해당 Tab에 Tabpage 수
            objTabPages = objCompGrp.tabpages;
            nCnt = objTabPages.length;
            //Tabpage 수 만큼 반복
            for (var i=0;i<nCnt;i++)
            {
                objComp = objTabPages[i];
                //폼으로 변경후 재귀 호출
                if (!takeval.checkComp(pThis, objComp.form, sCssId, sChkFunc, bSync))
				{
					if (bSync)
                    {
						return false;
					}
				}
            }
        }
    }
    
//     //벨리데이터 통과시 
//     if (bRtn==true)
//     {
//         //리턴 함수 여부
//         if (nexacro._nvl(sChkFunc, "")!="")
//         {
//             //리턴 함수가 해당 폼에 있을경우
//             if (take.isFunction(pThis[sChkFunc])) 
//             {
//                 //동기일 경우
//                 if (bSync)
//                 {
//                     //리턴 값 확인
//                     if (!pThis[sChkFunc].call(pThis, objCompGrp)) return false;
//                 } else {   
//                     //비동일 경우 리턴 값 없이 호출
//                     pThis[sChkFunc].call(pThis, objCompGrp);
//                 }
//             } else {
//                 take.debug(pThis.name + ".takeval.checkComp", pThis.name + "폼에 " + sChkFunc + " 함수가 없습니다.");
//             }
//         }
//    }
    
    return bRtn;
}

/**
 * 숫자 여부 확인
 * @param  {anonymous}  aVal 확인 대상 값
 * @return {boolean}    true/false 숫자 여부
 */
takeval.isNumber = function(aVal)
{   
    //문자형 숫자, 숫자 패턴
    var objReg = /^-?\d+\.?\d*$/;
    
    return objReg.test(aVal); 
}
////////////////////////////////////////////////////////////////////////////
// END               벨리데이션 처리 공통 함수                         //
////////////////////////////////////////////////////////////////////////////
