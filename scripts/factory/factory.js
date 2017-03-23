var app = angular.module('discGo',[]);

app.factory('discGoFactory', function($http) {

  var searchResult = {};

  return{
    searchResults : searchResults
  };
  function searchResults(searchCriteria) {
    var promise = $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&format=json',
        }).then(function successCallback(response) {
          console.log(response);
          // console.log(response.data.artist.name);
          var artistName = response.data.artist.name
          console.log(artistName);
          searchResult = response;
    });
  return promise;
}
  $('section').append(artistName);
});

// app.controller('test', function($scope, discGoFactory){
//   $scope.coolness = discGoFactory.searchResults();
//   console.log($scope.coolness);
// });
