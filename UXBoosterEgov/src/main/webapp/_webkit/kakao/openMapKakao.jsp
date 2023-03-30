<!DOCTYPE html>
<html>
<head>
	<%@ page language="java" contentType="text/html; charset=UTF-8"    pageEncoding="UTF-8"%>
  	<meta charset="UTF-8">
    <title>카카오맵 </title>
    <style type="text/css">
/*     	.cluster-marker01 { width : 30px; height : 30px; background: rgba(51, 204, 255, .8); border-radius: 15px; color: #000; text-align: center; font-weight: bold; line-height: 31px }			         */
/* 		.cluster-marker02 { width : 40px; height : 40px; background: rgba(255, 153, 0, .8); border-radius: 20px; color: #000; text-align: center; font-weight: bold; line-height: 41px } */
		.cluster-marker01 { width : 57px; height : 57px; background: #09b8f9; opacity: 0.9; border-radius: 29px; border: 2px solid #ffffff; color: #ffffff; text-align: center; font-family: 'NanumGothic'; font-size: 12px; font-weight: 600; line-height: 16px } 			        
		.cluster-marker02 { width : 67px; height : 67px; background: #09b8f9; opacity: 0.9; border-radius: 34px; border: 2px solid #ffffff; color: #ffffff; text-align: center; font-family: 'NanumGothic'; font-size: 12px; font-weight: 600; line-height: 16px } 
/*		.cluster-marker01 { width : 60px; height : 60px; background: url('./circle.png') no-repeat center center; display:inline-block; color: #ffffff; text-align: center; font-family: 'NanumGothic'; font-size: 12px; font-weight: 600; line-height: 16px } */			        
/*		.cluster-marker02 { width : 60px; height : 60px; background: url('./circle.png') no-repeat center center; display:inline-block; color: #ffffff; text-align: center; font-family: 'NanumGothic'; font-size: 12px; font-weight: 600; line-height: 16px } */
		.cluster-marker03 { width : 50px; height : 50px; background: rgba(255, 51, 204, .8); border-radius: 25px; color: #000; text-align: center; font-weight: bold; line-height: 51px }			        
		.cluster-marker04 { width : 60px; height : 60px; background: rgba(255, 80, 80, .8); border-radius: 30px; color: #000; text-align: center; font-weight: bold; line-height: 61px }
		
		.wrap {position: absolute;left: 0;bottom: 40px;width: 288px;height: 132px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;}
	    .wrap * {padding: 0;margin: 0;}
	    .wrap .info {width: 286px;height: 120px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
	    .wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
	    .info .title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
	    .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
	    .info .close:hover {cursor: pointer;}
	    .info .body {position: relative;overflow: hidden;}
	    .info .desc {position: relative;margin: 13px 0 0 13px;height: 75px;}
	    .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
	    .desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
	    .info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
	    .info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
	    .info .link {color: #5085BB;}	        	        	        
    </style>
</head>
<body>
<div id="map" style="width:100%; height: 100%;"></div>

<!-- jQuery 별도 로드가 필요합니다! -->
<script src="/UXBooster/_extlib_/Extend/jquery-3.5.1.min.js"></script>
<script src="/UXBooster/_extlib_/Extend/jquery-ui.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9336fc8fefb725a80aa2543c2957d40d&libraries=clusterer"></script>
<script>
	var objMapData;
	var objMapSidoData;
	var objMapSiGunGuData;
	var objMapAllData;	
	var cluOverlay = new kakao.maps.CustomOverlay({});
	var markOverlay = new kakao.maps.CustomOverlay({});
	
	var map = new kakao.maps.Map(document.getElementById('map'), { // 지도를 표시할 div
	    center : new kakao.maps.LatLng(35.5683, 127.6358), // 지도의 중심좌표 
	    level : 13, // 지도의 확대 레벨
	    //minLevel: 7,
	    minLevel: 4,
	    maxLevel: 13
	});
	
	//줌콘트롤 추가
	var zoomControl = new kakao.maps.ZoomControl();
	map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
	
	// 마커 클러스터러를 생성합니다 
	var clusterer = new kakao.maps.MarkerClusterer({
	    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
	    gridSize : 10,
	    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
	    disableClickZoom: true,
	    minLevel: 10 // 클러스터 할 최소 지도 레벨         
	});

	$(document).ready(function() {
		$(window).resize(resizeContents);
		resizeContents();
		
   		dataSearch("13");
  	});
	
	function resizeContents() {
	    $("#map").height($(window).height()-16);
	    
	    map.relayout(); 
		map.setCenter(new kakao.maps.LatLng(35.5683, 127.6358));
	}
	
	function dataSearch(sLevel){
		var objParam = {level : sLevel};
		var options = {
				url: "/UXBooster/mapDataSearch.do",
				dataType: 'json',
				type: 'POST',
				data: objParam,
				success: function(data){
					
					if( null == data || "" == data ){
						return false;
					}
					
					objMapData = data;
					
					if( sLevel == '13' || sLevel == '12' ){
						objMapSidoData = data;
						setMap(data);
					}
					else if( sLevel == '11' || sLevel == '10' ){
						objMapSiGunGuData = data;
					}
					else{
						objMapAllData = data;
					}
				},
				error: function(){
					$.get("sample.json", function(data) {
						console.dir( JSON.stringify(data) );
						if( sLevel == '13' || sLevel == '12' ){
							objMapSidoData = data;
							setMap(data);
						}
						else if( sLevel == '11' || sLevel == '10' ){
							objMapSiGunGuData = data;
						}
						else{
							objMapAllData = data;
						}
					});
				}
			};

		$.ajax(options);
	}
	
	function setMap(mapData){
		var objData;
		var lv = map.getLevel();
		if( lv == '13' || lv == '12' ){
			objData = objMapSidoData;
		}
		else if( lv == '11' || lv == '10' ){
			objData = objMapSiGunGuData;
		}
		else{
			objData = objMapAllData;
		}
		
		clusterer.setGridSize(10);		
	    clusterer.setMinClusterSize(1);

	    // 데이터에서 좌표 값을 가지고 마커를 표시합니다
	    // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
	    $.get(null, function(data) {
		    var markers = $(objData[0]).map(function(i, position) {
		    	var marker = new kakao.maps.Marker({
		            position : new kakao.maps.LatLng(position.Y_POSITION, position.X_POSITION)
		        });
		    	
		    	marker.info = position;
		    	
		        return marker;
		    });
	
		    // 클러스터러에 마커들을 추가합니다
			clusterer.clear();
		    clusterer.addMarkers(markers);
	    });
	    
	    //zoom 이벤트
	    
	    kakao.maps.event.addListener(map, 'zoom_changed', function(){
	    	var objData;
			var nMapLevel = map.getLevel();
			if( nMapLevel == 13 || nMapLevel == 12 ){
				objData = objMapSidoData[0];				
				clusterer.setGridSize(10);
				closeOverlay("cluster");
			}
			else if( nMapLevel == 11 || nMapLevel == 10 ){
				objData = objMapSiGunGuData[0];
				//clusterer.setGridSize(30);
				clusterer.setGridSize(10);
				closeOverlay("cluster");
			}
			else{
				objData = objMapAllData[0];
				//clusterer.setGridSize(60);
				clusterer.setGridSize(10);
				closeOverlay("marker");
			}
			
			var markers = $(objData).map(function(i, position) {
		    	var marker = new kakao.maps.Marker({
		            position : new kakao.maps.LatLng(position.Y_POSITION, position.X_POSITION)
		        });
		    	
		    	marker.info = position;
		    	
		    	//핀에 들어갈 content
			    var iwContent = '<div class="wrap">' + 
			    '    <div class="info">' + 
			    '        <div class="title">' + 
			    '            '+marker.info.HOSPITAL_NM+'' +
			    '            <div class="close" onclick="closeOverlay(\'marker\')" title="닫기"></div>' + 
			    '        </div>' + 
			    '        <div class="body">' + 
			    '            <div class="desc">' + 
			    '                <div class="ellipsis">'+marker.info.ADDRESS+'</div>' + 
			    '                <div class="jibun ellipsis">'+marker.info.TEL_NO+'</div>' +
			    '                <div class="ellipsis">총 의사수: '+marker.info.TOTAL_CNT+'명</div>' +
			    '            </div>' + 
			    '        </div>' + 
			    '    </div>' +    
			    '</div>';
			    
			    var overlayMarker = new kakao.maps.CustomOverlay({
				    content: iwContent
				});
			    
		    	kakao.maps.event.addListener(marker, 'click', function() {
				  	// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
				  	closeOverlay("marker");
				  	var positionMarker = new daum.maps.LatLng(marker.info.Y_POSITION, marker.info.X_POSITION);
				  	overlayMarker.setPosition(positionMarker);
				  	overlayMarker.setMap(map);
				  	markOverlay = overlayMarker;
				});
		    	
// 		    	kakao.maps.event.addListener(marker, 'mouseout', function() {
// 				  	// 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
// 				  	overlayMarker.setMap(null);	    		  
// 				});
		    	
		        return marker;
		    });
			
			clusterer.clear();
	    	clusterer.addMarkers(markers);
	    	clusterer.setMap(null);
	    	clusterer.setMap(map);
 	    	
	   	});
	    
	    
	    kakao.maps.event.addListener( clusterer, 'clustered', function( clusters ) {
	    	   clusters.forEach(function(cluster) {
	    	      var sum = 0;
	    	      var center;
	    	      var nMarkerCnt = 0;
	    	      var sName = "";
	    	      var sHostCnt = "";
	    	      var sTotalDocCnt = "";
	    	      
	    	      var nLevel = map.getLevel();
	    	      
	    	      cluster.getMarkers().forEach(function(marker) {
	    	    	  sum += (parseInt(marker.info.TOTAL_CNT) || 0);
	    	    	  
	    	    	  if( nLevel == 13 || nLevel == 12 ){
	    	    	  	sName = marker.info.ADDRESS;
	    	    	  }
	    	    	  else if( nLevel == 11 || nLevel == 10 ){
	    	    		  sName = marker.info.SIGUNGU_NM;
	    	    	  }
	    	    	  else{
	    	    		  sName = marker.info.UPMYUNDONG_NM;
	    	    	  }
	    	    	  
	    	    	  sHostCnt = marker.info.HOSPITAL_CNT;
	    	    	  sTotalDocCnt = marker.info.TOTAL_CNT;
	    	    		  
	    	    	  nMarkerCnt++;
	    	      });
	    	      
	    	      if( nLevel > 9 ){
	    	    	  sum = numbeComma(sum);
	    	      }
	    	      
	    	      //클러스터에 들어갈 content
	    	      var overlay = new kakao.maps.CustomOverlay({});
	    	      
	    	      var iwContent2 = '<div class="wrap">' + 
	    	      '    <div class="info">' + 
	    	      '        <div class="title">' + 
	    	      '            '+sName+'' +
	    	      '            <div class="close" onclick="closeOverlay(\'cluster\');" title="닫기"></div>' + 
	    	      '        </div>' + 
	    	      '        <div class="body">' + 
	    	      '            <div class="desc">' + 
	    	      '                <div class="ellipsis">병원 수: '+numbeComma(sHostCnt)+'개</div>' + 
				  '                <div class="ellipsis">총의사 수: '+numbeComma(sTotalDocCnt)+'명</div>' +
	    	      '            </div>' + 
	    	      '        </div>' + 
	    	      '    </div>' +    
	    	      '</div>';
	    	      
	    	      overlay = new kakao.maps.CustomOverlay({
					    content: iwContent2
					});
	    	      
	    	      center = cluster.getCenter();
	    	      
	    	      var positionMe = new daum.maps.LatLng(center.Ha, center.Ga);
	    	      overlay.setPosition(positionMe);

	    	      var sCss = "cluster-marker01";
	    	      if( parseInt(sHostCnt) >= 1000 ){
	    	    	  sCss = "cluster-marker02";
	    	      }
	    	      
	    	      var content = document.createElement('div');
	    	      content.className = sCss;
	    	      var sContents = "<p style='vertical-align:middle;'>" + sName + "<br/>" + numbeComma(sHostCnt) + "</p>";
	    	      var text = document.createTextNode(sContents);
	    	      content.innerHTML = sContents;
	    	      content.onclick = (function(cluster) {
	    	          return function() {
	    	        	  closeOverlay("cluster");
	    	        	  cluOverlay = overlay;
	    	        	  overlay.setMap(map);
	    	          };
	    	      })(cluster);
	    	      
// 	    	      content.onmouseup = (function(cluster) {
// 	    	    	  return function() {
// 	    	    		  overlay.setMap(map);
// 	    	    	  }
	    	    	  
// 	    	      })(cluster);
// 	    	      content.onmouseleave = (function(cluster) {
// 	    	    	  return function() {
// 	    	    		  overlay.setMap(null);
// 	    	    	  }
	    	    	  
// 	    	      })(cluster);
	    	      
	    	      cluster.getClusterMarker().setContent(content);
	    	   });
	    	});
	    
	    dataSearch("11");
   		dataSearch("9");
	}
	
	function closeOverlay( sGubun ){
		var objOverlay;
		if( sGubun == "cluster" ){
			objOverlay = cluOverlay;
		}
		else{
			objOverlay = markOverlay; 
		}
		objOverlay.setMap(null);
	}
	
	function numbeComma(number) {
		var rtnData = "0";
		if( number != null && number != "undefined" && number != "" ){
			rtnData = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
	    return rtnData;
	}
</script>

</body>
</html>