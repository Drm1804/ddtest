(function () {
  'use strict';

  angular
    .module('ddtest')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('variants', {
        url: '/variants',
        templateUrl: 'app/variants/variants.html',
        controller: 'VariantsController',
        controllerAs: 'ctrl'
      })
  }

})();
