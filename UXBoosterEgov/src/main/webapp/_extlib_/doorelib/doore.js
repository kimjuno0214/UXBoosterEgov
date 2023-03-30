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
}

gFn_tets = function() 
{
	alert("AAAAAAAAAAAA");
}