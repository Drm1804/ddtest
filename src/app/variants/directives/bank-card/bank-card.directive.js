(function () {
    'use strict';

  angular.module('ddtest')
    .directive('bankCard', function(){
      return{
        templateUrl: 'app/variants/directives/bank-card/bank-card.html',
        restrict: 'AE',
        controller: 'BankCardController',
        controllerAs: 'ctrl',
        scope: {
          cardData: '=',
          cardType: '@'
        }
      }
    })


})();
