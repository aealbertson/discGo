var app = angular.module('discGo');

app.controller('printCtrl', function($scope, discGoFactory){
  $scope.artistInfo = discGoFactory.returnResults();
  console.log($scope.artistInfo);
});

app.filter('unsafe', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };

});
