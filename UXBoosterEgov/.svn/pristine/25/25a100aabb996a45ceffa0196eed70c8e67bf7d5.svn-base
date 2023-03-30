(function(factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
})(function($) {
  $.extend($.summernote.plugins, {
	  mergeCancel: function(context) {
      var self = this,
        ui = $.summernote.ui,
        options = context.options,
        $editor = context.layoutInfo.editor,
        $editable = context.layoutInfo.editable;
      editable = $editable[0];

      context.memo('button.mergeCancel', function() {
        return ui
          .buttonGroup([
            ui.button({
              contents: '<b>병합취소<b>', //ui.icon(options.icons.bold),
              tooltip: '병합취소',
              click: function(e) {
                //self.toggleMergeRow();
            	  self.setMergeCancel();
              }
            })
          ])
          .render();
      });
      let td;
      let tr;
      var rowIndex;
      var colIndex;

      $('body').on('click', 'td', function() {
        td = $(this);
        rowIndex = $(this).parent().parent().children().index($(this).parent());
        colIndex = $(this).parent().children().index($(this));
        return td;
      });
      $('body').on('click', 'tr', function() {
        tr = $(this);

        return tr;
      });
      
      this.setMergeCancel = function(){
    	  var nRowspanCnt = parseInt(td.attr('rowspan'), 10);
    	  if( nRowspanCnt > 0 ){
    		  td.removeAttr('rowspan');
        	  let $num = tr.nextAll();
              var arr = [].slice.call($num);
              td.removeAttr('height');
              td[0].style.height = "0pt";
              for (i = 0; nRowspanCnt - 1 > i; i++) {
            	  var td1 = td.clone()[0];
            	  var sDisplay = arr[i].cells[colIndex].style.display;
            	  if( "none" != sDisplay ){            		  
            		  arr[i].insertBefore(td1, arr[i].cells[colIndex]);
            	  }
            	  else{
            		  arr[i].cells[colIndex].style.display = "";
            	  }
              }
    	  }
    	  
    	  var nColspanCnt = parseInt(td.attr('colspan'), 10);
    	  if( nColspanCnt > 0 ){
    		  td.removeAttr('colspan');    		  
    		  tr = td.parent()[0];    		  
    		  for (i = 0; nColspanCnt - 1 > i; i++) {
    			  var td1 = td.clone()[0];
    			  td.after(td1);
    		  }
    	  }
      }
    }
  });
});