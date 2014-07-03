'use strict';

var app = angular.module;
angular.module('myApp', [])
    .controller('MyController', function($scope, $parse){
       $scope.$watch('expr', function(newVal, oldVal, scope){
          if (newVal !== oldVal) {
              // lets setup our parsFun with expression
              var parseFun = $parse(newVal);
              // get the value of the parsed expression
              $scope.parsedExpr = parseFun(scope);
          }
       });
    });