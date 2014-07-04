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

angular.module('myApp.filters', [])
  .filter('capitalize', function(){
    return function(input) {
      // input will be the string we pass in
      if  (input)
        return input[0].toUpperCase() + input.slice(1);
    }
  });

// Custom variables
angular.module('validationExample', [])
  .directive('ensureUnique', function($http){
    require: 'ngModel',
      link: function(scope, ele, attrs, c) {
        scope.$watch(attrs.ngModel, function(){
           $http({
             method: 'POST',
             url: '/api/check/' + attrs.ensureUnique,
             data: {'field': attrs.ensureUnique }
           }).success(function(data,status,headers,cfg){
             c.$setValidity('unique', data.isUnique);
           }).error(function(data,status,headers,cfg){
             c.$setValidity('unique',false);
           })
        });
    }
  });