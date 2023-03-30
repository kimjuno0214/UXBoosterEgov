/**
 * DB value 리턴
 * @param {form}  	 pThis    	호출form
 *        {funtion}  fnCallBack 콜백함수
 *        {string}   sqlMapId   mybatis id
 *        {string}   param1     param
 *        {string}   param2     param
 *        {string}   param3     param
 *        {string}   param4     param
 *        {string}   param5     param
 * @return {string}  Database 조회 값
 */

gFn_getDbValue = function(pThis, fnCallBack,  sqlMapId, param1, param2, param3, param4, param5)
{
	var objdsNm = "dsOut";
	var objDsOut;
	
	if(pThis.all[objdsNm] == null) {
		objDsOut = new Dataset();
		objDsOut.set_name("dsOut");
		pThis.addChild("dsOut",objDsOut);
	}
	
	var sParam = "PARAM1=" + param1 + " PARAM2=" + param2 + " PARAM3=" + param3 + " PARAM4=" + param4 + " PARAM5=" + param5;
	
	take.tranSelect
	(
		  pThis
		, "gFnDbSearch" + Math.floor(Math.random() * 10000000)
		, sqlMapId
		, ""
		, "dsOut"
		, sParam
		, function(sId, nErrCd, sErrMsg){
		
			var rtnValue = new Object();
			rtnValue.sid 	= "getDbValue";
			rtnValue.result = (nErrCd == 0);
			rtnValue.resultMessage = sErrMsg;
			rtnValue.resultData = this.dsOut.getColumn(0, "RETURN_VALUE");
			fnCallBack.call(pThis, rtnValue);
		}
	);
};

/*
 * 데이터셋 선택된 row Return
 * @param  {obj} 대상 dataset, {nRow} 현재 row
 * @return {N/A}  objRtn
 */
gFn_dataset2Object = function(obj, nRow)
{
	var objRtn	= {};
	
	for (var i=0; i<obj.getColCount(); i++)
	{
		var strColId	 	= obj.getColID(i);
		objRtn[strColId] 	= obj.getColumn(nRow, strColId);
	}
	return objRtn;
};

/**
 * 엑셀다운로드
 * @param {object}  objForm    호출 Form 
 *		  {object}  objGrid    다운로드할 그리드
 *        {string}  sFileNm    엑셀파일명
 * @return {Array}   boolean
 */
gFnExcelDown = function (objForm, objGrid, sFileName)
{
	objForm.setWaitCursor(true);
	var fnBeforeUnload = (nexacro._Browser != "Runtime") ? window.onbeforeunload : null;
    var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";
	var exportObj = new ExcelExportObject("XExport", objForm);

	exportObj.addEventHandler("onsuccess", 
		function(obj, successEvent) {
			//다운로드 성공
			objForm.setWaitCursor(false);
			if (fnBeforeUnload != "null"){
				window.onbeforeunload = null;
				nexacro._OnceCallbackTimer.callonce(
					objForm,
					function(){
						window.onbeforeunload = fnBeforeUnload;
					},
					100
				);
			}
			return true;
		}, 
	objForm);
	
	exportObj.addEventHandler("onerror", 
		function (obj, errorEvent) {
			//다운로드 실패
			objForm.setWaitCursor(false);
			return false;
	   }, 
	this);
	
	exportObj.set_exporturl(sSvcUrl);
	exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	exportObj.set_exportfilename(sFileName);	
	exportObj.set_exporteventtype("itemrecord");
	exportObj.set_exportuitype("none");
	exportObj.set_exportmessageprocess("%d[%d/%d]");

	// 익스포트할 그리드 추가
	exportObj.addExportItem(nexacro.ExportItemTypes.GRID, objGrid, "Sheet1!A1", "allband", "allrecord");
	// 익스포트
	var result = exportObj.exportData();
};

/**
 * 엑셀업로드
 * @param {object}  	objForm    호출 Form 
 *		  {object}  	objGrid    업로드할 그리드
 *        {int}  		headCnt    헤더 row 수
 *        {fucntion}  	succFnc    성공 시 호출 함수
*        {fucntion}  	errFnc     실패 시 호출 함수 
 * @return {Array}  N/A
 */
gFnExcelUpload = function(objForm, objGrid, headCnt, succFnc, errFnc)
{
	if(objForm.all["XImport"])
	{
		var objDel = objForm.removeChild("XImport");
			objDel.destroy();
			objDel = null;
	}
    var objImport = new nexacro.ExcelImportObject("XImport", objForm); 
    var sSvcUrl   = take.getSvcUrl() + "XExportImport.do";
	
    objImport.set_importtype(nexacro.ImportTypes.EXCEL);
	objImport.addEventHandler("onsuccess", succFnc, objForm);
	objImport.addEventHandler("onerror", errFnc, objForm);	
	
	objImport.set_importurl(sSvcUrl);
	objImport.importData("", "[Command=getsheetdata;body=!A" + headCnt + "]", "dsExcelUpload");
	objImport = null;

};

/**
 * 엑셀업로드 Mapping Stirng  생성
 * @param {object}  	objGrid    업로드할 그리드
 * @return {String}  엑셀업로드 Mapping Stirng
 */
gFnGetMappingString = function(objGrid)
{
	var colCnt = objGrid.getCellCount("head");
	var strMap = "";
	
	for(var i = 0; i < colCnt; i++)
	{
		var strBindCol = objGrid.getCellProperty("body", i, "text");
		if(!take.isEmpty(strBindCol) && strBindCol.substr(0, 4) == "bind") strMap += strBindCol.substr(5) + "=Column" + i;
		else strMap += "DUMMY" + "=Column" + i
			
		if(i != (colCnt-1)) strMap += ",";
	}
	
	return strMap;
};
 
/**
 * replace 정규식 처리
 * @param {Stirng}  	obj     대상문자열변수
 * @param {Stirng}  	sExp    정규식
 * @param {Stirng}  	sRep    변한할 문자열
 * @return {String}  	변환된 문자열
 */
gFnReplace = function(obj, sExp, sRep)
{
	if(take.isEmpty(obj)) return null;
	else return (new String(obj)).replace(sExp, sRep);
};

/**
 * 코드명과 일치하는 코드ID 리턴
 * @param {dataset}  	objDs   대상데이터셋
 * @param {Stirng}  	codeNm  코드명
 * @return {String}  	코드명과 일치하는 코드ID
 */
gFnGetCodeId = function(objDs, codeNm)
{
	codeNm = gFnReplace(codeNm, /\s/g, "");
	
	for(var i = 0; i < objDs.rowcount; i++)
	{
		if(gFnReplace(objDs.getColumn(i, "NAME"), /\s/g, "") == codeNm) 
		{
			return objDs.getColumn(i, "CODE");
		}
	}
	return "";
};

/**
 * trace 출력
 * @param {Stirng}  	strTrace   
 */
gFnTrace = function(strTrace)
{ 
	trace("#########################################\n" + strTrace + "\n#########################################");
};

/******************************************************************************
 * Function명 : gFnclickHeadCheckBox
 * 설명       :  그리드헤더 checkbox 클릭 시 전체선택 전체해제 처리
 * Params     : obj  - 해당 그리드
 *              strColName - 체크박스에 바인드되어있는 컬럼명
 * 사용법    : 
 * 		if(e.col == 0){
 *          this.clickHeadCheckBox(this.grd00, "CHK");
 *      }
*******************************************************************************/
gFnClickHeadCheckBox = function (obj, strColName)
{		
	var headerCell = obj.getBindCellIndex("body", strColName);

	var checkValue = "1";
	if(obj.getCellProperty("Head", headerCell, "displaytype") == "checkboxcontrol") {
		if (obj.getCellProperty("Head", headerCell, "text") == "1") { //현재 체크박스 값과 반대되게
		    checkValue = "0";
		} else {
			checkValue = "1";
		}
	}
	
	obj.setCellProperty("Head", headerCell, "text", checkValue); //헤더 체크박스 값 변경
	
	var objDataset = obj.getBindDataset(); //그리드에 바인드되어있는 dataset 가져옴
	if(objDataset.getRowCount() > 0) {
		objDataset.set_enableevent(false); //이벤트 비활성화
		for (var i=0; i<objDataset.getRowCount(); i++) {			
		    objDataset.setColumn(i, strColName, checkValue); //체크박스를 checkValue로 설정
		}
		objDataset.set_enableevent(true); //이벤트 활성화
	}
};