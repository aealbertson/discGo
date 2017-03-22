var app = angular.module('discGo');

app.controller('artistCtrl', function ($scope, discGoFactory){

  $scope.sendInfo = function() {

    var searchCriteria = {
      info: artist
    };

    discGoFactory.searchResults(searchCriteria);
  }

})
