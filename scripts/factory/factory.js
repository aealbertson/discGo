var app = angular.module('discGo',[]);

app.factory('discGoFactory', function($http) {

  var searchResult = {};

  return{
    searchResults : searchResults
  };
  function searchResults() {
    var promise = $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&format=json',
        }).then(function successCallback(response) {
          console.log(response);
          searchResult = response;
    });
  return promise;
}
});

app.controller('test', function($scope, discGoFactory){
  discGoFactory.searchResults();
});
