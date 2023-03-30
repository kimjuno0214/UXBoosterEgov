/***************************************************************************
 *  2019.07.01 made by take ymko                                           *
 *  take javascript Library                                                *
 *  www.take.co.kr                                                       *
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

var takeEcma6 = createNS("takeEcma6");
////////////////////////////////////////////////////////////////////////////
// START                   시스템 기능 변수 모음                       //
////////////////////////////////////////////////////////////////////////////
//
/////////////////////////////////////////////////////////////////////////////
//END                      시스템 기능 변수 모음                        //
////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
// START                      Take ECMA6 전용 Script                     //
////////////////////////////////////////////////////////////////////////////

/**
 * 캡쳐
 * @param  {Object} objComp    Form류 컴포넌트
 * @param  {Object} objDs      리턴받을 데이터 셋
 * @param  {String} sColumn    리턴받을 데이터셋 컬럼
 * @param  {Number} nRow       리턴 행
 * @return {Object} image uri
 * @example  takeEcma6.formCapture(this.div00, this.dsData, "CAPTURE", 0) 
 */
takeEcma6.formCapture = function(objComp, objDs, sColumn, nRow)
{
    var sEleId="#";
    var objRtn;
    
    sEleId += objComp._unique_id;    
    sEleId = nexacro.replaceAll(sEleId, ".", "\\.");
    
    //sEleId = "#mainframe\\.QuickViewFrame\\.form\\.divDetail\\.form\\.divForm";
    html2canvas(document.querySelector(sEleId)).then(canvas => {
            document.body.appendChild(canvas);
            //alert("test");
            //console.dir(canvas);
            var url = canvas.toDataURL();
            //console.dir(url);
            objDs.setColumn(nRow, sColumn, url);
            
            //console.dir(objDs);
    });
}

/**
 * 캡쳐
 * @param  {Object} pThis      폼 객체
 * @param  {String} sId        아이디
 * @param  {Object} objComp    Form류 컴포넌트
 * @param  {String} sFunc      리턴받을 함수
 * @param  {Object} objInfo    기타 필요한 정보값(프로그램명, 프리픽스)
 * @return {Object} image uri
 * @example  takeEcma6.getCapture("SC010", this.div00, this.fnTest, "test") 
 */
takeEcma6.getCapture = function(pThis, sId, objComp, sFunc, objInfo)
{
    var sEleId="#";
    var objRtn;
    
    sEleId += objComp._unique_id;    
    sEleId = nexacro.replaceAll(sEleId, ".", "\\.");
    
    //sEleId = "#mainframe\\.QuickViewFrame\\.form\\.divDetail\\.form\\.divForm";
    html2canvas(document.querySelector(sEleId)).then(canvas => {
            document.body.appendChild(canvas);
            var objUri = canvas.toDataURL();    
            pThis[sFunc].call(pThis,sId, objUri, objInfo);
    });
}

/////////////////////////////////////////////////////////////////////////////
//END                        Take ECMA6 전용 Script                       //
////////////////////////////////////////////////////////////////////////////
