var app = angular.module('discGo');

app.controller('printCtrl', function($scope, discGoFactory){
  $scope.albums = discGoFactory.returnAlbumData();
  $scope.artistInfo = discGoFactory.returnArtistData();
  $scope.artistInfo2 = discGoFactory.returnArtistInfo();
  console.log($scope.artistInfo);
  console.log($scope.albums);
  console.log($scope.artistInfo2);
  // $scope.topFive = [];
  // //var albums = discGoFactory.searchAlbum($scope.artistInfo.artistName).data.topAlbums.album;
  // //discGoFactory.searchAlbum($scope.artistInfo.artistName);
  // // $scope.albums = discGoFactory.returnAlbumData();
  //
  //
  // for (var i=0; i<5; i++){
  // }
});

app.filter('unsafe', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };

});


// albumData.albumName = albumArray[i].album.name;
// albumData.albumArtist = albumArray[i].album.artist.name;
// albumData.albumImage = albumArray[i].album.image[1]["#text"];
