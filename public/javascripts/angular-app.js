// Init App
var app = angular.module('agStats', []);

// angular.module('routingApp', ['angular-route']);
// // angular.module('routingApp', ['ngRoute']);
//
// // Route Configuration
// angular.module('routingApp').config(function ($routeProvider, $locationProvider) {
//
//   $routeProvider
//     .when('/', {
//       render: 'angular',
//       redirectTo: '/angular'
//       //
//       // templateUrl: 'angular-batting.ejs',
//       // controller: 'agStatsController'
//     })
//     .when('/angular', {
//       templateUrl: 'angular-index.ejs',
//       controller: 'agStatsController'
//     })
//     .when('/angular/batting', {
//       templateUrl: 'batting.ejs',
//       controller: 'agStatsController'
//     })
//     .otherwise({
//       // redirectTo: '/angular'
//       redirectTo: '/'
//     });
//
//   $locationProvider.html5Mode(true);
// });
//
// angular.module('routingApp').run(['$location',functionAppRun($location) {}]);


// The factory
app.factory('d3', function() {
      return d3;
    });

app.factory('SimpleHttpLoader', ["$http", function($http) {
      return function(url) {
        return $http.get(url);
      }
    }]);

// Controller
app.controller('agStatsController', ["$scope", "d3", "SimpleHttpLoader", function($scope, d3, SimpleHttpLoader) {
    $scope.sortType = 'HR'; // default sort type
    $scope.sortReverse = true; // default sort order
    $scope.searchFilter = '';   // default search/filter term
    $scope.players = {
      src: '/api/batting',
      data: []
    };

    SimpleHttpLoader($scope.players.src).then(function(response) {
      $scope.players.data = response.data;
      // console.log($scope.players);
      //This below is how I was able to access the data
      // console.log($scope.players.data[0].HR);
    });
  }]);

// Directives
// myScatterChart
app.directive('myScatterChart', [ "d3", "$window", function(d3, $window, data) {

      function draw(svg, width, height, data) {
        // console.log('first');
        // console.log(data);
       svg
         .attr('width', width)
         .attr('height', height);


       // Define a margin
       var margin = 30;


       // Define x scale
       var xScale = d3.scale.linear()
         .domain([10, d3.max(data, function(d) { return d.HR; })])
         .range([margin, width-margin]);

       // Define x-axis
       var xAxis = d3.svg.axis()
         .scale(xScale)
         .orient('top');


       // Define y-scale
       var yScale = d3.scale.linear()
         .domain([0, d3.max(data, function(d) { return d.AB; })])
         .range([margin, height-margin]);

       // Define y-axis
       var yAxis = d3.svg.axis()
         .scale(yScale)
         .orient('left');


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

       // Updated all data points
       svg.select('.data')
         .selectAll('circle').data(data)
         .attr('r', function(d) { return d.HR; })
         .attr('cx', function(d) { return xScale(d.HR); })
         .attr('cy', function(d) { return yScale(d.AB); })
         .attr('fill', c20);

     }
      return {
        restrict: 'E',
        scope: true,

        compile: function( element, attrs, transclude) {
          var svg  = d3.select(element[0]).append('svg');
            svg.style('width', '100%');
            svg.append('g').attr('class', 'data');
            svg.append('g').attr('class', 'x-axis axis');
            svg.append('g').attr('class', 'y-axis axis');

            $window.onresize = function() {
            };

          var height = $window.innerHeight;
          var width = $window.innerWidth;
          return function(scope, element, attrs) {

            scope.$watch(function(scope) {
              // console.log(scope.players.data);
              return scope.players.data },

              function(newVal, oldVal, scope) {
                if (scope.players.data) {
                  draw(svg, width, height, scope.players.data);
              }

            }, true);

            // scope.render = function(scope.players.data) {
            //   svg.selectAll('*').remove();
            //
            //   if(!scope.players.data) return;
            //
            //   var width = d3.select(element[0].node().offsetWidth -margin,
            //     height = scope.players.data.length * ()
            //     )
            // }

            // scope.$watch('scope.players.data', function(newVals, oldVals) {
            //   console.log("watch new and old");
            //   return draw(newVals);
            // }, false);

            // console.log(scope.players.data);
            scope.$watch(function() {
              return width = $window.innerWidth;
            }, function() {
                draw(svg, width, height, scope.players.data);
            }, true);
          };
        }
      }
    }])

// myBarChart
app.directive('myBarChart', ["d3", "$window", function(d3, $window, data) {

        function draw(svg, width, height, data) {

          svg
            .attr('width', width)
            .attr('height', height);

          // Define a margin
          var margin = 30;

          // // Define x scale
          // var xScale = d3.scale.linear()
          //   .domain(d3.extent(data, function(d) { return d.HR; }))
          //   .range([margin, width-margin]);

          var xScale = d3.scale.linear()
            .domain([10, d3.max(data, function(d) { return d.HR; })])
            .range([margin, width-margin]);

          // Define x-axis
          var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient('bottom');

          // Define y-scale
          var yScale = d3.scale.linear()
            .domain([0, d3.max(data, function(d) { return d.AB; })])
            .range([height-margin, margin]);

          // Define y-axis
          var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient('left');

          // Draw the x-axis
          svg.select('.x-axis')
            .attr("transform", "translate(0, " + (height-margin) + ")")
            .call(xAxis);

          // Draw the y-axis
          svg.select('.y-axis')
            .attr("transform", "translate(" + margin + ")")
            .call(yAxis);

          // Draw the x-grid
          svg.select('.x-grid')
            .attr("transform", "translate(0, " + margin + ")")
            .call(xAxis
                .tickSize(height - 2*margin, 0, 0)
                .tickFormat("")
            );

          // Draw the y-grid
          svg.select('.y-grid')
            .attr("transform", "translate(" + margin + ")")
            .call(yAxis
                .tickSize(-width + 2*margin, 0, 0)
                .tickFormat("")
            );

           /* ---- Draw bars ---- */

          // var barWidth = (width-2*margin)/data.length;
          var barWidth = 5;

          svg.select('.data')
            .selectAll('rect').data(data)
            .enter()
            .append('rect')
            .attr('class', 'data-bar');

          var easing = d3.ease('cubic');
          var ease_type = 'cubic';
          var max = d3.max(data, function(d){ return d.AB; });
          // var duration = 2500;
          var duration = 250;

          svg.select('.data')
            .selectAll('rect').data(data)
            .attr('r', 2.5)
            .attr('x', function(d) { return xScale(d.HR) - barWidth*0.5; })
            .attr('y', function(d) { return yScale(0); })
            .attr('width', function(d) { return barWidth; })
            .attr('height', 0)
            .transition()
            .duration(function(d, i){ return duration*(d.AB/max); })
            .ease('cubic')
            //.delay(function(d,i) { return 100*i; })
            .delay(function(d,i) { return duration*easing((i+1)/data.length); })
            .attr('y', function(d) { return yScale(d.AB); })
            .attr('height', function(d) { return yScale(0) - yScale(d.AB); });

          svg.select('.data')
            .selectAll('rect').data(data)
            .exit()
            .remove();
        }

        return {
          restrict: 'E',

          compile: function( element, attrs, transclude ) {

            // Create a SVG root element
            var svg = d3.select(element[0]).append('svg');
            svg.style('width', '100%');
            /* Create container */
            var axis_container = svg.append('g').attr('class', 'axis');
            var data_container = svg.append('g').attr('class', 'data');

            axis_container.append('g').attr('class', 'x-grid grid');
            axis_container.append('g').attr('class', 'y-grid grid');

            axis_container.append('g').attr('class', 'x-axis axis');
            axis_container.append('g').attr('class', 'y-axis axis');

            data_container.append('path').attr('class', 'data-line');
            data_container.append('path').attr('class', 'data-area');

            // Define the dimensions for the chart
            // var width = 960, height = 500;
            var height = $window.innerHeight;
            var width = $window.innerWidth;
            // Return the link function
            return function(scope, element, attrs) {

              // Watch the data attribute of the scope
              scope.$watch(function(scope) {
                // console.log(scope.players.data);
                return scope.players.data },

                function(newVal, oldVal, scope) {

                // Update the chart
                if (scope.players.data) {
                  draw(svg, width, height, scope.players.data);
                }
              }, true);
              scope.$watch(function(scope) {
                return width = $window.innerWidth;
              }, function() {
                  draw(svg, width, height, scope.players.data);
              }, true);
            };
          }
        };
    }]);

var c10 = d3.scale.category10();
var c20 = d3.scale.category20();
var c20b = d3.scale.category20b();
var c20c = d3.scale.category20c();
