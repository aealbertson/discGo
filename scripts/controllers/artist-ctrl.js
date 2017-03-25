var app = angular.module('discGo');

app.controller('artistCtrl', function ($scope, $location, discGoFactory){

  $scope.sendInfo = function(artist) {

    var searchCriteria = artist;

    discGoFactory.searchArtist(searchCriteria);
    discGoFactory.searchAlbum(searchCriteria);

    $location.path('/result');
  }

})


// var app = angular.module('discGo');
//
// app.controller('printCtrl', function ($scope, discGoFactory){
//
// function printCtrl() {
//     $scope.printToPage = [];
//     $scope.submit = function() {
//        $scope.printToPage.push({name : artistName, bio : artistBio });
//     }
//   }
//
// });
