'use strict';

describe('Тестируем контроллер BannerController', function () {

  beforeEach(module('ddtest'));

  var ctrl;
  var $scope;
  var $state;

  beforeEach(inject(function ($rootScope, $controller, _$state_) {
    $scope = $rootScope.$new();
    ctrl = $controller('BannerController', {
      $scope: $scope
    });
    $state = _$state_;
    spyOn($state, 'go');
  }));

  it('Контроллер должне существовать', function () {
    expect(ctrl).toBeDefined();
  });

  describe('Тестируем методы контроллера', function () {

    describe('Тестируем метод goToVariants', function () {
      it('Должен быть вызван $state.go', function () {

        ctrl.goToVariants();
        expect($state.go).toHaveBeenCalledWith('variants')

      });
    });

  });

});
