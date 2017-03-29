var app = angular.module('discGo');

app.factory('discGoFactory', function($http) {

  var finalData = {};
  var albumData = {};
  var eventData = {};

  return {
    //finalData: finalData,
    searchArtist: searchArtist,
    returnResults: returnResults,
    searchAlbum: searchAlbum,
    //albumData: albumData,
    returnAlbumData: returnAlbumData,
    searchEvents: searchEvents,
    returnEvents: returnEvents
  };

  function searchAlbum(searchCriteria) {
      $http({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&autocorrect=1&limit=5&format=json'
      }).then(function successfulCallback(response) {
        console.log(albumData);
        albumData.albumName1 = response.data.topalbums.album["0"].name;
        albumData.albumImage1 = response.data.topalbums.album["0"].image[1]["#text"];
        albumData.albumName2 = response.data.topalbums.album["1"].name;
        albumData.albumImage2 = response.data.topalbums.album["1"].image[1]["#text"];
        albumData.albumName3 = response.data.topalbums.album["2"].name;
        albumData.albumImage3 = response.data.topalbums.album["2"].image[1]["#text"];
        albumData.albumName4 = response.data.topalbums.album["3"].name;
        albumData.albumImage4 = response.data.topalbums.album["3"].image[1]["#text"];
        albumData.albumName5 = response.data.topalbums.album["4"].name;
        albumData.albumImage5 = response.data.topalbums.album["4"].image[1]["#text"];
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
        url: 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + searchCriteria + '&api_key=2f32cf4dbf47aa1b214b2cb2d18f9e24&autocorrect=1&format=json'
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


  function searchEvents(searchCriteria) {
    $http({
      method: 'GET',
      url: "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=6skn9wemZW7Dmwi7eSPrBoRCwTj0A3QW&keyword=" + searchCriteria
    }).then(function successfulCallback(response) {
      console.log(response);
    },function(error) {
        console.log(error);
      });
  }

      function returnEvents() {
        return eventData;
    }

  });
