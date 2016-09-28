'use strict';

describe('Тестирем провайдер $variants', function () {


  var $config;
  var $variants;
  var $httpBackend;
  var $variantsProvider;


  beforeEach(function () {
    module('ddtest', function (_$variantsProvider_) {
      $variantsProvider = _$variantsProvider_;
    });
  });

  beforeEach(module('ddtest'));

  beforeEach(inject(function (_$variants_, _$httpBackend_, _$config_) {
    $variants = _$variants_;
    $httpBackend = _$httpBackend_;
    $config = _$config_;
  }));


  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe("Тестируем методы провайдера", function () {

    describe('Тестируем метод getVariants', function () {

      it('Должен произойти вызов по определенному URL и должны вернуться заготовленные данные', function () {
        var configs = $variantsProvider.returnConfig();
        $httpBackend.expectGET($config.api + configs.allData).respond('');
        $variants.getVariants();
        $httpBackend.flush()
      });

    });

  });
});
