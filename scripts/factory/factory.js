var app = angular.module('discGo');

app.factory('discGoFactory', function($http) {

  var artistData = {};
  var topAlbumData = {};
  var artistObject = {};

  return {
    artistData: artistData,  // this is the object holding artistName, artistBio, and artistImage
    searchArtist: searchArtist, // name of the function pulling the artist data from the api
    returnArtistData: returnArtistData, // name of the function that returns artistData

    returnArtistInfo: returnArtistInfo,
    searchArtist2: searchArtist2,
    topAlbumData: topAlbumData, // this is the object holding the top album results
    searchAlbum: searchAlbum, // name of the function pulling the top album data from the api
    returnAlbumData: returnAlbumData // name of the function that returns topAlbumData
  };

  function searchArtist2(searchCriteria) {
      var promise = $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&autocorrect=1&format=json'
      }).then(function successCallback(response) {
        console.log(response);
        artistObject = response;
      });
      return promise;
    }

  function returnArtistInfo() {
    return artistObject;
  }

  function searchArtist(searchCriteria) {
      $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&autocorrect=1&format=json'
      }).then(function successfulCallback(response) {
        console.log(response);
        artistData.artistName = response.data.artist.name;
        artistData.artistBio = response.data.artist.bio.summary;
        artistData.artistImage = response.data.artist.image[2]["#text"];
      }, function(error) {
        console.log(error);
      });
  }
  function returnArtistData() {
    return artistData;
  }


  function searchAlbum(searchCriteria) {
      $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&autocorrect=1&limit=5&format=json'
      }).then(function successfulCallback(response) {
        console.log(topAlbumData);
        topAlbumData.albumName1 = response.data.topalbums.album["0"].name;
        topAlbumData.albumImage1 = response.data.topalbums.album["0"].image[1]["#text"];
        topAlbumData.albumName2 = response.data.topalbums.album["1"].name;
        topAlbumData.albumImage2 = response.data.topalbums.album["1"].image[1]["#text"];
        topAlbumData.albumName3 = response.data.topalbums.album["2"].name;
        topAlbumData.albumImage3 = response.data.topalbums.album["2"].image[1]["#text"];
        topAlbumData.albumName4 = response.data.topalbums.album["3"].name;
        topAlbumData.albumImage4 = response.data.topalbums.album["3"].image[1]["#text"];
        topAlbumData.albumName5 = response.data.topalbums.album["4"].name;
        topAlbumData.albumImage5 = response.data.topalbums.album["4"].image[1]["#text"];
      }, function(error) {
        console.log(error);
      });
    }

    function returnAlbumData(){
      return topAlbumData;
    }
});
