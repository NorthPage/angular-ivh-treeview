
/**
 * Toggle logic for treeview nodes
 *
 * Handles expand/collapse on click. Does nothing for leaf nodes.
 *
 * @private
 * @package ivh.treeview
 * @copyright 2014 iVantage Health Analytics, Inc.
 */

angular.module('ivh.treeview').directive('ivhTreeviewToggle', [function() {
  'use strict';
  return {
    restrict: 'A',
    require: '^ivhTreeview',
    link: function(scope, element, attrs, trvw) {
      var node = scope.node;

      element.addClass('ivh-treeview-toggle');

      element.bind('click', function() {
        scope.$apply(function() {
          trvw.onNodeClick(node);
          if(trvw.opts().expandOnLabelClick || (!trvw.opts().expandOnLabelClick && !element.hasClass('ivh-treeview-node-label'))) {
            trvw.toggleExpanded(node);
          }
        });
      });
    }
  };
}]);
