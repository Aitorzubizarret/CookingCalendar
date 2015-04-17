angular.module('CookingCalendarApp.services', [])

.factory('getProductsData', function($http) {
  var datos = {};
  datos.get = funtion() {
    return $http({
      method: 'JSON',
      url: '../data/products.json'
    });
  }
  return datos;
});