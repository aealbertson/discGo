var app = angular.module('discGo');

app.factory('discGoFactory', function($http) {

  var finalData = {};
  var albumData = {};

  return {
    //finalData: finalData,
    searchArtist: searchArtist,
    returnResults: returnResults,
    searchAlbum: searchAlbum,
    //albumData: albumData,
    returnAlbumData: returnAlbumData
  };

  function searchAlbum(searchCriteria) {
      $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&format=json'
      }).then(function successfulCallback(response) {
        albumData = response.data.topalbums.album[0];
        console.log(albumData);
      }, function(error) {
        console.log(error);
      });
    }

    function returnAlbumData(){
      return albumData;
    }

  function searchArtist(searchCriteria) {
      $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&format=json'
      }).then(function successfulCallback(response) {
        console.log(response);
        finalData.artistName = response.data.artist.name;
        finalData.artistBio = response.data.artist.bio.summary;
        finalData.artistImage = response.data.artist.image[2]["#text"];
      }, function(error) {
        console.log(error);
      });

  }

  function returnResults() {
    return finalData;
  }



});
