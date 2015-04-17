angular.module('CookingCalendarApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/main.html'
  });

  $stateProvider.state('info', {
    url: '/info/:productId',
    templateUrl: 'templates/info.html'
  });
});