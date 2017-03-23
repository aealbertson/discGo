var app = angular.module('discGo');

app.controller('artistCtrl', function ($scope, discGoFactory){

  $scope.sendInfo = function(artist) {

    var searchCriteria = artist;

    discGoFactory.searchResults(searchCriteria);
  }

})
