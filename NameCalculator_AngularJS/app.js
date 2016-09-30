(function () {
  'use strict';

  angular.module('NameCalculator', [])

  .controller('NameCalculatorController', function ($scope) {
    $scope.name="";
    $scope.totalValue=0;

    $scope.displayNumeric = function () {
      $scope.totalValue=0;
      for (var i = 0; i < $scope.name.length; i++) {
        $scope.totalValue += $scope.name.charCodeAt(i);
      }
    }
  });

})();
