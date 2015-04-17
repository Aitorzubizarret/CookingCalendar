var myApp = angular.module('CookingCalendarApp.controller', []);

myApp.controller('ProductsListCtrl', ['$scope', function($scope) {
  $scope.productos = [
    {
      id: 1,
      title: "Plato 1",
      description: "Descripción del plato 1",
      img: "img/plato1.jpg"
    },
    {
      id: 2,
      title: "Plato 2",
      description: "Descripción del plato 2",
      img: "img/plato2.jpg"
    },
    {
      id: 3,
      title: "Plato 3",
      description: "Descripción del plato 3",
      img: "img/plato3.jpg"
    },
    {
      id: 4,
      title: "Plato 4",
      description: "Descripción del plato 4",
      img: "img/plato4.jpg"
    },
    {
      id: 5,
      title: "Plato 5",
      description: "Descripción del plato 5",
      img: "img/plato5.jpg"
    },
    {
      id: 6,
      title: "Plato 6",
      description: "Descripción del plato 6",
      img: "img/plato6.jpg"
    }
  ];
}]);

myApp.controller('ProductInfo', ['$scope', function($scope) {
  $scope.datos = "Holaaa";
}]);