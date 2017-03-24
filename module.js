var app = angular.module('discGo', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/search', {
      controller: 'artistCtrl',
      templateUrl: 'views/search-view.html'
    })
    .when('/result', {
      controller: 'printCtrl',
      templateUrl: 'views/result-view.html'
    });
$locationProvider.hashPrefix("");

});
