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
          var artistName = response.data.artist.name;
          var artistBio = response.data.artist.bio.content;
          var artistImage = response.data.artist.image[3]; // image is stored in an object. Need to be able to pull out the url.
          console.log(artistName);
          console.log(artistBio);
          console.log(artistImage); // will need to go in an image tag <img src = object.text />

          searchResult = response;
    });
  return promise;
  }

});
