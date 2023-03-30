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
    mergeCell: function(context) {
      var self = this,
        ui = $.summernote.ui,
        options = context.options,
        $editor = context.layoutInfo.editor,
        $editable = context.layoutInfo.editable;
      editable = $editable[0];

      context.memo('button.mergeCell', function() {
        return ui
          .buttonGroup([
            ui.button({
              contents: '<b>행 병합<b>', //ui.icon(options.icons.bold),
              tooltip: '행 병합',
              click: function(e) {
                self.toggleMergeCell();
              }
            })
          ])
          .render();
      });
      let td;
      $('body').on('click', 'td', function() {
        td = $(this);
        return td;
      });
      $('body').on('click', 'th', function() {
        td = $(this);
        return td;
      });
      this.toggleMergeCell = function() {
        let pr = prompt('병합할 행의 갯수');
        td.attr('colspan', pr);
        if (pr == '' || pr == undefined || pr == '1' || pr == '0') {
          return;
        } else {
          for (let i = 1; pr > i; i++) {
            td.next().remove();
          }
        }
      };
    }
  });
});