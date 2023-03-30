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
    mergeRow: function(context) {
      var self = this,
        ui = $.summernote.ui,
        options = context.options,
        $editor = context.layoutInfo.editor,
        $editable = context.layoutInfo.editable;
      editable = $editable[0];

      context.memo('button.mergeRow', function() {
        return ui
          .buttonGroup([
            ui.button({
              contents: '<b>열 병합<b>', //ui.icon(options.icons.bold),
              tooltip: '열 병합',
              click: function(e) {
                self.toggleMergeRow();
              }
            })
          ])
          .render();
      });
      let td;
      let tr;
      var rowIndex;
      var colIndex;

      $('body').on('click', 'td', function(e) {
        td = $(this);
        rowIndex = $(this).parent().parent().children().index($(this).parent());
        colIndex = $(this).parent().children().index($(this));        
        return td;
      });
      $('body').on('click', 'tr', function(e) {
        tr = $(this);
        var children = tr.children().length;
        return tr;
      });

      this.toggleMergeRow = function() {
        let pr = prompt('병합할 열의 갯수');
        td.attr('rowspan', pr);        
        let $num = tr.nextAll();
        var arr = [].slice.call($num);
        if (pr == '' || pr == undefined || pr == '1' || pr == '0') {
          return;
        } else {
          for (i = 0; pr - 1 > i; i++) {
        	  var newTr = arr[i];
//        	  var test = newTr.cells[colIndex].hasAttribute('colspan');
//        	  alert(test);
        	  //newTr.deleteCell(colIndex);
        	  newTr.cells[colIndex].style.display = "none";
        	  //eq(colIndex).style.display = "none";
        	  //newTr.children('td').eq(colIndex).remove();
          }
        }
      };
    }
  });
});