(function () {
  'use strict';

  angular.module('ddtest')
    .provider('$variants', function() {

      var urls = {
        allData: 'assets/data/variants.json'
      };

      return {
        returnConfig: function(){
          return urls;
        },
        $get: function ($http, $q, $config) {
          return {


            getVariants: function () {
              var dfd = $q.defer();

              $http.get($config.api + urls.allData)
                .then(function (resp) {
                  dfd.resolve(resp.data);
                }, function (resp) {
                  dfd.reject(resp);
                });

              return dfd.promise;
            }
          }
        }
      }
    });


})();
