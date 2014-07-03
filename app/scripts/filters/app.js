'use strict';
var app = angular.module('myApp', []);

app.controller('TextDemo', ['$scope', '$filter', function($scope, $filter){
  $scope.name = $filter('lowercase')('Manny');
}]);

app.controller('NumericDemo', ['$scope', '$filter', function($scope, $filter){
  $scope.numeric = $filter('number')('[]');
}]);

app.controller('CurrencyDemo', ['$scope', '$filter', function($scope, $filter){
  $scope.currencydemo = $filter('currency')('[]');
}]);

app.controller('DateDemo', ['$scope', '$filter', function($scope, $filter){
  $scope.today = $filter('date')('[]');
}]);