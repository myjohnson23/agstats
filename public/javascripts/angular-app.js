// Init App
angular.module('agStats', []);

// The factory
angular.module('agStats').factory('d3', function() {
      return d3;
    });

angular.module('agStats').factory('SimpleHttpLoader', ["$http", function($http) {
      return function(url) {
        return $http.get(url);
      }
    }]);

// Controller
angular.module('agStats').controller('agStatsCtrl', ["$scope", "d3", "SimpleHttpLoader", function($scope, d3, SimpleHttpLoader) {
    $scope.players = {
      src: '/api',
      data: []
    };
    SimpleHttpLoader($scope.players.src).then(function(response) {
      $scope.players.data = response.data;
      console.log($scope.players);
      //This below is how I was able to access the data
      console.log($scope.players.data[0].HR);
    });
  }]);

// Directives
angular.module('agStats').directive('myScatterChart', ["d3", function(d3) {

      function draw(svg, width, height, data) {
        console.log('first');
        console.log(data);
       svg
         .attr('width', width)
         .attr('height', height);

         console.log("inside-draw");
         console.log(data.length);
         for (var i = 0; i < data.length; i++) {
           for(var ind in data[i]) {
              console.log(ind);
              for(var vals in data[i][ind]) {
                console.log(vals, data[i][ind][vals]);
              }
           }
         };
       // Define a margin
       var margin = 30;

       // Define x scale
       var xScale = d3.scale.linear()
         .domain([0, d3.max(data, function(d) { return d.HR; })])
         .range([margin, width-margin]);

       // Define x-axis
      //  var xAxis = d3.svg.axis()
      //    .scale(xScale)
      //    .orient('top')
      //    .tickFormat(d3.time.format('%S'));

       // Define y-scale
       var yScale = d3.scale.linear()
         .domain([0, d3.max(data, function(d) { return d.AB; })])
         .range([margin, height-margin]);

       // Define y-axis
      //  var yAxis = d3.svg.axis()
      //    .scale(yScale)
      //    .orient('left')
      //    .tickFormat(d3.format('f'));

       // Draw the x-axis
      //  svg.select('.x-axis')
      //    .attr("transform", "translate(0, " + margin + ")")
      //    .call(xAxis);

       // Draw the y-axis
      //  svg.select('.y-axis')
      //    .attr("transform", "translate(" + margin + ")")
      //    .call(yAxis);

       // Add new the data points
       svg.select('.data')
         .selectAll('circle').data(data)
         .enter()
         .append('circle');

       // Updated all data points
       svg.select('.data')
         .selectAll('circle').data(data)
         .attr('r', 2.5)
         .attr('cx', function(d) { return xScale(d.HR); })
         .attr('cy', function(d) { return yScale(d.AB); });
     }
      return {
        restrict: 'EA',

        compile: function( element, attrs, transclude ) {
          var svg  = d3.select(element[0]).append('svg');
          svg.append('g').attr('class', 'data');
          svg.append('g').attr('class', 'x-axis axis');
          svg.append('g').attr('class', 'y-axis axis');

          var width = 600, height = 300;

          return function(scope, element, attrs) {

            scope.$watch(function(scope) {
              console.log(scope.players.data);
              return scope.players.data },

              function(newVal, oldVal, scope) {
              console.log("$watch");
              // var data = scope.players.map(function(d) {
              //   return {
              //     x: d.HR,
              //     y: d.H
              //   }
              // });
              if (scope.players.data) {
                  draw(svg, width, height, scope.players.data);
              }

            }, true);
          };
        }
      }
    }])
