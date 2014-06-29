'use strict';

angular.module('myApp', [])
    .controller('MyController', function($scope, $interpolate){
       //setup watch
       $scope.$watch('emailBody', function(body){
          if (body) {
              var template = $interpolate(body);
              $scope.previewText = template({ to: $scope.to });
          }
       });
    });