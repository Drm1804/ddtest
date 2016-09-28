(function () {
    'use strict';


  angular.module('ddtest')
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider){

    $urlRouterProvider.otherwise('/banner');

  }

})();
