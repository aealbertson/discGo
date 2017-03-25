var app = angular.module('discGo');

app.factory('discGoFactory', function($http) {

  var finalData = {};

  return {
    finalData: finalData,
    searchResults: searchResults,
    returnResults: returnResults
  };

  function searchResults(searchCriteria) {
      $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&format=json'
      }).then(function successfulCallback(response) {
        console.log(response);
        finalData.artistName = response.data.artist.name;
        finalData.artistBio = response.data.artist.bio.content;
      }, function(error) {
        console.log(error);
      });

  }

  function returnResults() {
    return finalData;
  }


});
