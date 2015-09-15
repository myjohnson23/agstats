// Create Angular App namespace
var agStatsApp = angular.module('agStats', ['nvd3']);

agStatsApp.controller('agStatsCtrl', function($scope, $http) {
  $http.get('/api').success(function(data) {
    // Chart options
    $scope.options = {
    chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 55
        },
        x: function(d){ return d.HR; },
        y: function(d){ return d.RBI; },
        showValues: true,
        valueFormat: function(d){
            return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
            axisLabel: 'X Axis'
        },
        yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
        }
    }
};
    // Chart data
    // $scope.data = data;
    $scope.data = [
      {"HR": "5"},
      {""}
    ]
  });
});

Commented out for testing above
agStatsApp.controller('agStatsCtrl', function($scope, $http) {
  $http.get('/api').success(function(data) {
    console.log(data);
    console.log(data[0]);
    console.log(data[0].HR);
    tempData = data;
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
        var data = attrs.tempData.split(',');
        var chart = d3.select(".test");
        chart.append("div").attr("class", "chart")
          .selectAll('div')
          .data(data).enter().append('div')
          .transition().ease("elastic")
          .style("width", function(d) { return d.HR + "%"; })
          .text(function(d) { return d.HR + "%"; });
        }
      };
      return directiveDefinitionObject;
    });
