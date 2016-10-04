(function () {
  'use strict';

  angular.module('lunchCheck', [])
  .controller('lunchCheckController', lunchCheckController);

  lunchCheckController.$inject = ['$scope'];

  function lunchCheckController ($scope) {
    $scope.lunchMenu="";
    $scope.checkOutput="";

    $scope.check = function () {
      var numberOfItems = $scope.lunchMenu.split(',').length;
      if ($scope.lunchMenu == "") {
        $scope.checkOutput = "Please enter data first";
      }
      else if (numberOfItems <= 3) {
        $scope.checkOutput = "Enjoy!";
      }
      else {
        $scope.checkOutput = "Too much!";
      }
    };
  }

})();
