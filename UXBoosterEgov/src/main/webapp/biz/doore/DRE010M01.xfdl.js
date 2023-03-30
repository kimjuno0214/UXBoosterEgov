(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRE010M01");
            this.set_titletext("SQLMAP 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1659,832);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"schema\" type=\"STRING\" size=\"256\"/><Column id=\"tableName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"tableName\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"ARPLN_END_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"EML\" type=\"STRING\" size=\"255\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"255\"/><Column id=\"FRST_RGTR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"FXNUM\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_MDFCN_DT\" type=\"STRING\" size=\"255\"/><Column id=\"LAST_MDFR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"MBTLNUM\" type=\"STRING\" size=\"255\"/><Column id=\"MNGR_NM\" type=\"STRING\" size=\"255\"/><Column id=\"MNGR_TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"OWNR_ADDR_1\" type=\"STRING\" size=\"255\"/><Column id=\"OWNR_ADDR_2\" type=\"STRING\" size=\"255\"/><Column id=\"OWNR_ARPLN_ID\" type=\"STRING\" size=\"255\"/><Column id=\"OWNR_ID\" type=\"STRING\" size=\"255\"/><Column id=\"OWNR_NM\" type=\"STRING\" size=\"255\"/><Column id=\"RM\" type=\"STRING\" size=\"255\"/><Column id=\"SMG_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SMG_TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"TELNO\" type=\"STRING\" size=\"255\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"255\"/><Column id=\"ZIP\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","0",null,"43","10",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_searchBox01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","332","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","665","0","2",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_color("#ff0000");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWtDivCd","360","11","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("테이블명");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("shEdtTableName","staWtDivCd:10","11","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("tb_arpln_reg_aply");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload","shEdtTableName:5","9","50","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_DownloadForm");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staModelNm","20","11","80","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("namespace");
            obj.set_cssclass("sta_WF_textR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("shEdtNameSpace","110","11","195","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnShowHide","48.16%","divSearch:0","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_fold01");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","btnShowHide:20",null,null,"10","10","1300",null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staListT","0","0","450","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("SQLMAP");
            obj.set_cssclass("sta_WF_title02");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","30",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","-1","btnShowHide:0",null,"20","1",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_background("rgba(255,0,0,0.4)");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1659,832,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.shEdtTableName","value","dsSearch","tableName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRE010M01.xfdl", function() {
        /**
        *  SQLMAP 생성
        *
        *  @MenuPath    SQLMAP 생성
        *  @FileName    SYS0010M01.xfdl
        *  @Creator     doore
        *  @CreateDate  2021.12.20
        *  @Version     1.0
        *  @Desction    SQLMAP 생성
        *
        ************** 소스 수정 이력 *************************************************
        *    date          Modifier            Description
        *******************************************************************************
        *  2021.12.29      doore               최초 생성
        *******************************************************************************
        */

        //공통 라이브러리 호출

        /*********************************************************
         * 1.1 FORM 변수 선언 영역
         ********************************************************/
        //this.fv_nFormVal = null;     //용도
        this.fv_objGdsUserInfo = nexacro.getApplication().gdsUserInfo;
        this.fv_sProjectCd = nexacro.getApplication().av_sProjectCd;
        this.fv_sMenuCd = "";
        this.fv_today = "";

        this.fv_objUserParam = null;

        /*********************************************************
        * 1.2 FORM EVENT 영역(onload)
        ********************************************************/
        /**
        * formid_onload 최초 로드시 발생되는 이벤트 (필수)
        */
        this.SYS0010M01_onload = function(obj, e)
        {
        	if (take.formOnLoad(this)) //공통 온로드(필수) : 최초 온로드시 공통으로 호출되는 함수 --> 필수
           {
        		//this.fnSearch();
        		var today = take.getTodayTime();
        		this.fv_today = take.toDateString(take.getConvertDate(today.date), "yyyy") + "." +
        						take.toDateString(take.getConvertDate(today.date), "MM")   + "." +
        						take.toDateString(take.getConvertDate(today.date), "dd");
           }
        };


        /*********************************************************
         * 2.1 CALLBACK 콜백 처리부분
         ********************************************************/
        /**
        * fnCallback : transaction callback
        * @param  : svcId   - 서비스 아이디 (공통 콜백에서 넘어옴)
        * @param  : errCd   - 에러코드 (공통 콜백에서 넘어옴)
        * @param  : errMsg   - 에러메세지 (공통 콜백에서 넘어옴)
        * @return : N/A
        * @example :
        */
        this.fnCallback = function(sId, nErrCd, sErrMsg)
        {
            //Transaction 에러는 공통에서 처리

            //Transaction은 성공이나 실제 처리된게 없을 경우 처리
            if( sErrMsg == "SUCC" )
            {
                //Success Script
            } else {
                //Etc Script
            }

            switch(sId)
            {
        		case "Search" :
        			if (this.dsMain.rowcount > 0) {
        				// SELECT
        				var priSql = '';
        				var paramSql = '';
        				var colName = '';
        				var colComm = '';
        				var tableName = '';
        				var tableSche = '';
        				var delSql = '';
        				var dataSetStr = '';
        				var colType = '';

        				tableName = this.dsMain.getColumn(i, "TABLE_NAME");
        				tableSche = this.dsMain.getColumn(i, "TABLE_SCHEMA");

        				var camelStr = this.gFn_getCamelString('1', tableName.substring(3));

        				var txtArStr = '	<select id="' + camelStr + 'Select" parameterType="map" timeout="0" resultType="map" useCache="false">\n';
        				txtArStr += '		<![CDATA[\n';
        				txtArStr += '		/*\n';
        				txtArStr += '		*\n';
        				txtArStr += '		* ' + this.divSearch.form.shEdtNameSpace.value + '.' + camelStr + 'Select \n';
        				txtArStr += '		* ' + tableName + ' 조회\n';
        				txtArStr += '		* @author dooresoft\n';
        				txtArStr += '		* @since ' + this.fv_today + '\n';
        				txtArStr += '		*/\n';
        				txtArStr += '		]]>\n';
        				for(var i = 0; i < this.dsMain.rowcount; i++) {
        					colName = this.dsMain.getColumn(i, "COLUMN_NAME");
        					colComm = this.dsMain.getColumn(i, "COLUMN_COMMENT");
        					colType = this.dsMain.getColumn(i, "COLUMN_TYPE").substring(0, 3);

        					dataSetStr += '          <Column id="' + colName + '" type="STRING" size="255"/>\n'

        					if(i == 0 ) txtArStr += '        SELECT  ' + this.gFn_rpad(colName, 50, " ")  + '-- ' + colComm + '\n';
        					else {
        						if(colName != "REG_DT" && colName != "RGTR_ID" && colName != "MDFCN_DT" && colName != "MDFR_ID")
        						txtArStr += '              , ' + this.gFn_rpad(colName, 50, " ")  + '-- ' + colComm + '\n';
        					}
        					if(this.dsMain.getColumn(i, "COLUMN_KEY") == "PRI") {
        							priSql  = '        <if test=" ' + colName + ' != null and ' + colName + ' != \'\' " >\n';
        							priSql += '        AND ' + colName + ' = #{' + colName + '}\n' ;
        							priSql += '        </if>\n' ;

        							delSql += '		AND ' + colName + ' = #{' + colName + '}\n' ;
        					}
        				}
        				//txtArStr += '        FROM ' + tableSche + '.' + tableName + '\n';
        				txtArStr += '        FROM ' + tableName + '\n';
        				txtArStr += '        WHERE 1 = 1\n';
        				txtArStr += priSql;
        				txtArStr += '        ORDER BY\n';
        				txtArStr += '	</select>\n';

        				txtArStr += '\n';
        				// INSERT
        				txtArStr += '	<insert id="' + camelStr + 'Insert" parameterType="map" timeout="0">\n';
        				txtArStr += '		<![CDATA[\n';
        				txtArStr += '		/*\n';
        				txtArStr += '		*\n';
        				txtArStr += '		* ' + this.divSearch.form.shEdtNameSpace.value + '.' + camelStr + 'Insert \n';
        				txtArStr += '		* ' + tableName + ' 등록\n';
        				txtArStr += '		* @author dooresoft\n';
        				txtArStr += '		* @since ' + this.fv_today + '\n';
        				txtArStr += '		*/\n';
        				txtArStr += '		]]>\n';
        				// txtArStr += '		INSERT INTO ' + tableSche + '.' + tableName + ' (\n';
        				txtArStr += '		INSERT INTO ' + tableName + ' (\n';
        				for(var i = 0; i < this.dsMain.rowcount; i++) {
        					colName = this.dsMain.getColumn(i, "COLUMN_NAME");
        					colComm = this.dsMain.getColumn(i, "COLUMN_COMMENT");

        					if(i == 0 ) {
        						txtArStr += '                ' + this.gFn_rpad(colName, 50, " ")  + '-- ' + colComm + '\n';
        						paramSql  = '                ' + this.gFn_rpad('#{' + colName + '}', 50, " ") + '-- ' + colComm + '\n';
        					}
        					else {
        						if(colName != "REG_DT" && colName != "RGTR_ID" && colName != "MDFCN_DT" && colName != "MDFR_ID") {
        							txtArStr += '              , ' +  this.gFn_rpad(colName, 50, " ")  + '-- ' + colComm + '\n';
        							paramSql  += '              , ' + this.gFn_rpad('#{' + colName + '}', 50, " ") + '-- ' + colComm + '\n';
        						}
        						else if(colName == "REG_DT") {
        							txtArStr += '              , ' +  this.gFn_rpad(colName, 50, " ")  + '-- ' + colComm + '\n';
        							paramSql  += '              , ' + this.gFn_rpad('NOW()', 50, " ")  + '-- ' + colComm + '\n';
        						}
        						else if(colName == "RGTR_ID") {
        							txtArStr += '              , ' +  this.gFn_rpad(colName+")", 50, " ")  + '-- ' + colComm + '\n';
        							paramSql  += '              , ' + this.gFn_rpad('#{_sessionUserCd}', 50, " ")  + '-- ' + colComm + '\n';
        						}
        					}
        				}
        				txtArStr += '		VALUES (\n';
        				txtArStr += paramSql;
        				txtArStr += '		)\n';
        				txtArStr += '	</insert>\n';
        				txtArStr += '\n';
        				// UPDATE
        				var updateSql = "";
        				txtArStr += '	<update id="' + camelStr + 'Update" parameterType="map" timeout="0">\n';
        				txtArStr += '		<![CDATA[\n';
        				txtArStr += '		/*\n';
        				txtArStr += '		*\n';
        				txtArStr += '		* ' + this.divSearch.form.shEdtNameSpace.value + '.' + camelStr + 'Update \n';
        				txtArStr += '		* ' + tableName + ' 수정\n';
        				txtArStr += '		* @author dooresoft\n';
        				txtArStr += '		* @since ' + this.fv_today + '\n';
        				txtArStr += '		*/\n';
        				txtArStr += '		]]>\n';
        				//txtArStr += '		UPDATE ' + tableSche + '.' + tableName + '\n';
        				txtArStr += '		UPDATE ' + tableName + '\n';

        				// txtArStr += '		SET    MDFCN_DT = DATE_FORMAT(NOW(), \'%Y%m%d%H%i%s\')\n';
        				txtArStr += '		SET    MDFCN_DT =NOW()\n';
        				txtArStr += '		     , MDFR_ID = #{_sessionUserCd}\n';
        				var checkPk = 0;
        				priSql = "";
        				for(var i = 0; i < this.dsMain.rowcount; i++) {
        					colName = this.dsMain.getColumn(i, "COLUMN_NAME");
        					colComm = this.dsMain.getColumn(i, "COLUMN_COMMENT");
        					colType = this.dsMain.getColumn(i, "COLUMN_TYPE").substring(0, 3);

        					if(this.dsMain.getColumn(i, "COLUMN_KEY") == "PRI" && checkPk == 0) {
        						checkPk = 1;
        						priSql += '		WHERE  ' + colName + ' = ' + '#{' +  colName  + '}\n';
        					}
        					else if(this.dsMain.getColumn(i, "COLUMN_KEY") == "PRI" && checkPk != 0) {
        						priSql += '		AND    ' + colName + ' = ' + '#{' +  colName  + '}\n';
        					}
        					else if(colName != "REG_DT" && colName != "RGTR_ID" && colName != "MDFCN_DT" && colName != "MDFR_ID") {
        					gFnTrace(colType);
        						if(colType != "int")
        						{
        							txtArStr += '		<if test=" ' + colName + ' != null and ' + colName + ' != \'\' ">\n';
        							txtArStr += '		     , ' + this.gFn_rpad(colName + ' = #{' +  colName  + '}', 80, ' ') +'-- ' + colComm + '\n';
        							txtArStr += '		</if>\n';
        						}
        						else
        						{
        							txtArStr += '		<if test=" ' + colName + ' != null ">\n';
        							txtArStr += '		     , ' + this.gFn_rpad(colName + ' = CASE WHEN LENGTH(#{' +  colName  + '}) = 0 THEN NULL ELSE #{'+  colName  + '} END', 120,  ' ') + '-- ' + colComm + '\n';
        							txtArStr += '		</if>\n';
        						}
        					}
        				}
        				txtArStr += priSql;
        				txtArStr += '	</update>\n';
        				txtArStr += '\n';
        				// DELETE
        				txtArStr += '	<delete id="' + camelStr + 'Delete" parameterType="map" timeout="0">\n';
        				txtArStr += '		<![CDATA[\n';
        				txtArStr += '		/*\n';
        				txtArStr += '		*\n';
        				txtArStr += '		* ' + this.divSearch.form.shEdtNameSpace.value + '.' + camelStr + 'Delete \n';
        				txtArStr += '		* ' + tableName + ' 삭제\n';
        				txtArStr += '		* @author dooresoft\n';
        				txtArStr += '		* @since ' + this.fv_today + '\n';
        				txtArStr += '		*/\n';
        				txtArStr += '		]]>\n';
        				// txtArStr += '		DELETE FROM ' + tableSche + '.' + tableName + '\n';
        				txtArStr += '		DELETE FROM ' + tableName + '\n';
        				txtArStr += '		WHERE  1 = 1\n';
        				txtArStr += delSql;
        				txtArStr +=  '	</delete>\n';
        				txtArStr += '\n';
        				// dataset
        				txtArStr += '      <Dataset id="ds' + this.gFn_getCamelString('0', tableName.substring(3)) + '">\n';
        				txtArStr += '        <ColumnInfo>\n';
        				txtArStr += dataSetStr;
        				txtArStr += '        </ColumnInfo>\n';
        				txtArStr += '      </Dataset>\n';

        				this.divDetail.form.TextArea00.set_value(txtArStr);

        			}
        			break;
        		case "Delete" : //삭제 콜백
                    //Script
        			take.alert(this, "", "삭제가 완료되었습니다.");
        			this.fnSearch();
                    break;
        		case "Save" : //저장 콜백
        			trace("\n\n############################################################### save 완\n\n");
        			take.alert(this, "", "저장이 완료되었습니다.");
        			this.fnSearch();
        			break;
                default :
                    break;
            }
        };

        /*********************************************************
        * 3 필수 FUNCTION 영역 (fnSearch, fnSave, fnAdd, fnDelRow)
        ********************************************************/
        /**
         * fnSearch : 조회 transaction (필수) --> 공통 조회에서 호출할 디폴트값 세팅 필요
         * @param  {String} sTranId 트랜젝션 아이디
         * @return {N/A}    N/A
         * @example this.fnSearch("ID");
         */
        this.fnSearch = function(sTranId)
        {
             //공통 조회에서 호출할 디폴트값 세팅 필요
            if (take.nvl(sTranId, "")=="") sTranId = "Search";
        	this.dsMain.clearData();
        	this.dsSearch.setColumn(0, "schema", "doore");
        	//this.dsSearch.setColumn(0, "tableName", "tb_arpln_reg_aply");
        	take.tranSelect(this, "Search", "Doore.selectColumnList", "dsSearch", "dsMain", "", "fnCallback");

        };

        /*********************************************************
         * 4 각 COMPONENT 별 EVENT 영역
         ********************************************************/

        this.divSearch_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13 )
        	{
        		this.fnSearch();
        	}
        };


        /*********************************************************
        * 5 사용자 FUNCTION 영역
        ********************************************************/

        /**
         * Camel String RETURN
         * @param {string}  reqType    		0 : 첫번째 문자 대문자로
         *        {string}  str				문자열
         * @return {string} returnStr
         */
        this.gFn_getCamelString = function(reqType, str) {

        	var returnStr = "";
        	if(typeof(str) == "string") {
        		returnStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
        		if(reqType == '0') returnStr =  returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
        		else returnStr;
        	}
        	else returnStr = str;
        	return returnStr;
        };

        /**
         * 좌측문자열채우기
         * @params
         *  - str : 원 문자열
         *  - padLen : 최대 채우고자 하는 길이
         *  - padStr : 채우고자하는 문자(char)
         */
        this.gFn_lpad = function(str, padLen, padStr) {
            if (padStr.length > padLen) {
                console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
                return str;
            }
            str += ""; // 문자로
            padStr += ""; // 문자로
            while (str.length < padLen)
                str = padStr + str;
            str = str.length >= padLen ? str.substring(0, padLen) : str;
            return str;
        };

        /**
         * 우측문자열채우기
         * @params
         *  - str : 원 문자열
         *  - padLen : 최대 채우고자 하는 길이
         *  - padStr : 채우고자하는 문자(char)
         */
        this.gFn_rpad = function(str, padLen, padStr) {
            if (padStr.length > padLen) {
                console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
                return str + "";
            }
            str += ""; // 문자로
            padStr += ""; // 문자로
            while (str.length < padLen)
                str += padStr;
            str = str.length >= padLen ? str.substring(0, padLen) : str;
            return str;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SYS0010M01_onload,this);
            this.divSearch.form.shEdtTableName.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.btnExcelUpload.addEventHandler("onclick",this.fnSearch,this);
        };
        this.loadIncludeScript("DRE010M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
