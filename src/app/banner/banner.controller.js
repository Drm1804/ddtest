(function(){
  'use strict';

  angular
    .module('ddtest')
    .controller('BannerController', BannerController);

  BannerController.$inject = ['$state'];

  function BannerController($state){
    var vm = this;

    vm.goToVariants = goToVariants;

    function goToVariants(){
      $state.go('variants')
    }

  }
})();
