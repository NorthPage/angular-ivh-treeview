
/**
 * Click logic for treeview nodes
 *
 * Handles node click on element click
 *
 * @private
 * @package ivh.treeview
 */

angular.module('ivh.treeview').directive('ivhTreeviewClick', [function() {
  'use strict';
  return {
    restrict: 'A',
    require: '^ivhTreeview',
    link: function(scope, element, attrs, trvw) {
      var node = scope.node;

      element.addClass('ivh-treeview-click');

      element.bind('click', function() {
        scope.$apply(function() {
          trvw.onNodeClick(node);
        });
      });
    }
  };
}]);
