// Create Angular App namespace
var agStatsApp = angular.module('agStats', []);

agStatsApp.controller('agStatsCtrl', ["$scope", "d3", "SimpleHttpLoader", function($scope, d3, SimpleHttpLoader) {
    $scope.players = {
      src: '/api',
      // data: [{playerID: "Myron", HR: 5, H: 10, RBI: 112}]
      data: []
    };
    SimpleHttpLoader($scope.players.src).then(function(response) {
      $scope.players.data = response.data;
      console.log($scope.players);
    });

  }]);

agStatsApp
    // D3 Factory
    .factory('d3', function() {
      return d3;
    })

    .directive('myScatterChart', ["d3", function(d3) {

      function draw(svg, width, height, data) {
       svg
         .attr('width', width)
         .attr('height', height);

       // Define a margin
       var margin = 30;

       // Define x scale
       var xScale = d3.scale.linear()
         .domain([0, d3.max(data, function(d) { return d.x; })])
         .range([margin, width-margin]);

       // Define x-axis
       var xAxis = d3.svg.axis()
         .scale(xScale)
         .orient('top')
         .tickFormat(d3.time.format('%S'));

       // Define y-scale
       var yScale = d3.scale.linear()
         .domain([0, d3.max(data, function(d) { return d.y; })])
         .range([margin, height-margin]);

       // Define y-axis
       var yAxis = d3.svg.axis()
         .scale(yScale)
         .orient('left')
         .tickFormat(d3.format('f'));

       // Draw the x-axis
       svg.select('.x-axis')
         .attr("transform", "translate(0, " + margin + ")")
         .call(xAxis);

       // Draw the y-axis
       svg.select('.y-axis')
         .attr("transform", "translate(" + margin + ")")
         .call(yAxis);

       // Add new the data points
       svg.select('.data')
         .selectAll('circle').data(data)
         .enter()
         .append('circle');
         console.log(data);
       // Updated all data points
       svg.select('.data')
         .selectAll('circle').data(data)
         .attr('r', 2.5)
         .attr('cx', function(d) { return xScale(d.x); })
         .attr('cy', function(d) { return yScale(d.y); });
     };

      return {
        restrict: 'EA'
        },

        compile = function( element, attrs, transclude ) {
          var svg  = d3.select(element[0]).append('svg');
          svg.append('g').attr('class', 'data');
          svg.append('g').attr('class', 'x-axis axis');
          svg.append('g').attr('class', 'y-axis axis');

          var width = 600, height = 300;

          return function(scope, element, attrs) {

            scope.$watch('data', function(newVal, oldVal, scope) {
              console.log(scope);
              var data = scope.players.data.map(function(d) {
                return {
                  x: d.HR,
                  y: d.H
                }
              });
              draw(svg, width, height, data);
              if (scope.players.data) {

              }


            }, true);
          };
        }
      }
    ])
    .factory('SimpleHttpLoader', ["$http", function($http) {
      return function(url) {
        return $http.get(url);
      }
    }]);
