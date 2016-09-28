(function () {
    'use strict';


  function VariantsController($variants){
    var vm = this;
    vm.data = null;

    activate();
    function activate(){
      return $variants.getVariants()
        .then(function(resp){
          vm.data = resp;
        })
    }
  }

  angular.module('ddtest')
    .controller('VariantsController', VariantsController);

  VariantsController.$inject = ['$variants'];

})();
