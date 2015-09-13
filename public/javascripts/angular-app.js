// Create Angular App namespace
var agStatsApp = angular.module('agStats', []);

agStatsApp.controller('agStatsCtrl', function($scope, $http) {
  $http.get('/api').success(function(data) {
    $scope.players = data;
    console.log("scope-test");
    console.log(data);
  });
});
