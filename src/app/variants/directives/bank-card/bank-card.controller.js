(function () {
  'use strict';

  angular.module('ddtest')
    .controller('BankCardController', BankCardController);

  BankCardController.$inject = ['$scope'];

  function BankCardController($scope) {
    var vm = this;
    vm.data = null;
    vm.type = null;

    activate();
    function activate(){
      vm.data = $scope.cardData;
      vm.type = $scope.cardType;
    }
  }

})
();
