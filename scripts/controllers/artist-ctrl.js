var app = angular.module('discGo');

app.controller('artistCtrl', function ($scope, discGoFactory){

  $scope.sendInfo = function(artist) {

    var searchCriteria = artist;

    discGoFactory.searchResults(searchCriteria);
  }

})


var app = angular.module('discGo');

app.controller('printCtrl', function ($scope, discGoFactory){

function printCtrl() {
    $scope.printToPage = [];
    $scope.submit = function() {
       $scope.printToPage.push({name : artistName, bio : artistBio });
    }
  }

});
