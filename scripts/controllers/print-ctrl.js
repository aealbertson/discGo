var app = angular.module('discGo');

app.controller('printCtrl', function($scope, discGoFactory){
  $scope.albums = discGoFactory.returnAlbumData();
  $scope.artistInfo = discGoFactory.returnResults();
  console.log($scope.artistInfo);

  $scope.topFive = [];
  //var albums = discGoFactory.searchAlbum($scope.artistInfo.artistName).data.topAlbums.album;
  //discGoFactory.searchAlbum($scope.artistInfo.artistName);
  // $scope.albums = discGoFactory.returnAlbumData();
  console.log($scope.albums);

  for (var i=0; i<5; i++){
  }
});

app.filter('unsafe', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };

});


// albumData.albumName = albumArray[i].album.name;
// albumData.albumArtist = albumArray[i].album.artist.name;
// albumData.albumImage = albumArray[i].album.image[1]["#text"];
