var app = angular.module('discGo');

app.controller('printCtrl', function($scope, discGoFactory){

  var artist = discGoFactory.getArtistName();
  var tmURL = discGoFactory.getUrl();
  var tmURLFixed = encodeURI(tmURL);

  $scope.onTourUrl = tmURLFixed;


  $scope.artistInfo = discGoFactory.searchArtist(artist).then(function(resp){
    console.log(resp);
    $scope.artist = resp.artist.name;
    $scope.artistBio = resp.artist.bio.summary;
    $scope.artistImage = resp.artist.image[4]["#text"];
    $scope.onTourData = resp.artist.ontour;
  });

  $scope.albumInfo = discGoFactory.searchAlbum(artist).then(function(resp){
    console.log(resp);
    $scope.albumName1 = resp.topalbums.album["0"].name;
    $scope.albumName2 = resp.topalbums.album["1"].name;
    $scope.albumName3 = resp.topalbums.album["2"].name;
    $scope.albumName4 = resp.topalbums.album["3"].name;
    $scope.albumName5 = resp.topalbums.album["4"].name;
    $scope.albumName6 = resp.topalbums.album["5"].name;
    $scope.albumImage1 = resp.topalbums.album["0"].image[2]["#text"];
    $scope.albumImage2 = resp.topalbums.album["1"].image[2]["#text"];
    $scope.albumImage3 = resp.topalbums.album["2"].image[2]["#text"];
    $scope.albumImage4 = resp.topalbums.album["3"].image[2]["#text"];
    $scope.albumImage5 = resp.topalbums.album["4"].image[2]["#text"];
    $scope.albumImage6 = resp.topalbums.album["5"].image[2]["#text"];
    $scope.albumUrl1 = resp.topalbums.album["0"].url;
    $scope.albumUrl2 = resp.topalbums.album["1"].url;
    $scope.albumUrl3 = resp.topalbums.album["2"].url;
    $scope.albumUrl4 = resp.topalbums.album["3"].url;
    $scope.albumUrl5 = resp.topalbums.album["4"].url;
    $scope.albumUrl6 = resp.topalbums.album["5"].url;
  });

  $scope.tracksInfo = discGoFactory.searchTracks(artist).then(function(resp){
    console.log(resp);
    $scope.trackName1 = resp.toptracks.track["0"].name;
    $scope.trackName2 = resp.toptracks.track["1"].name;
    $scope.trackName3 = resp.toptracks.track["2"].name;
    $scope.trackName4 = resp.toptracks.track["3"].name;
    $scope.trackName5 = resp.toptracks.track["4"].name;
    $scope.trackName6 = resp.toptracks.track["5"].name;
    $scope.trackName7 = resp.toptracks.track["6"].name;
    $scope.trackName8 = resp.toptracks.track["7"].name;
    $scope.trackName9 = resp.toptracks.track["8"].name;
    $scope.trackName10 = resp.toptracks.track["9"].name;
    $scope.trackUrl1 = resp.toptracks.track["0"].url;
    $scope.trackUrl2 = resp.toptracks.track["1"].url;
    $scope.trackUrl3 = resp.toptracks.track["2"].url;
    $scope.trackUrl4 = resp.toptracks.track["3"].url;
    $scope.trackUrl5 = resp.toptracks.track["4"].url;
    $scope.trackUrl6 = resp.toptracks.track["5"].url;
    $scope.trackUrl7 = resp.toptracks.track["6"].url;
    $scope.trackUrl8 = resp.toptracks.track["7"].url;
    $scope.trackUrl9 = resp.toptracks.track["8"].url;
    $scope.trackUrl10 = resp.toptracks.track["9"].url;
  });

});

app.directive("onTour", function(){
  return {
    template: 'ON TOUR!'
  };
});

app.filter('unsafe', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };

});
