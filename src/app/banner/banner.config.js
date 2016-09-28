(function () {
    'use strict';

  angular
    .module('ddtest')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('banner', {
        url: '/banner',
        templateUrl: 'app/banner/banner.html',
        controller: 'BannerController',
        controllerAs: 'ctrl'
      })
  }

})();
