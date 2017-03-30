var app = angular.module('discGo');

app.controller('artistCtrl', function ($scope, $location, discGoFactory){

  $scope.sendInfo = function(artist) {

    var searchCriteria = artist;

    discGoFactory.searchArtist(searchCriteria);
    discGoFactory.searchAlbum(searchCriteria);
    discGoFactory.searchArtist2(searchCriteria);


    $location.path('/result');
  }

})
