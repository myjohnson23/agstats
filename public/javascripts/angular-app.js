// Create Angular App namespace
var agStatsApp = angular.module('agStats', []);

agStatsApp.controller('agStatsCtrl', function($scope, $http) {
  $http.get('/api').success(function(data) {
    $scope.players = data;
  });
});

agStatsApp
  .directive('barsChart', function() {
    var directiveDefinitionObject = {
      restrict: 'E',
      replace: false,
      // scope: {data: '=chartData'},
      link: function(scope, element, attrs) {
        var data = attrs.chartData.split(',');
        var chart = d3.select(element[0]);
        chart.append("div").attr("class", "chart")
          .selectAll('div')
          .data(data).enter().append('div')
          .transition().ease("elastic")
          .style("width", "10px")
          // .style("width", function(d, i) { return d[i].HR + "%"; })
          // .text(function(d, i) { return d[i].HR + "%"; });
        }
      };
      return directiveDefinitionObject;
    });
