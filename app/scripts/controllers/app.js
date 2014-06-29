//function FirstController($scope) {
//    $scope.message = "Hello there!";
//}

//var app = angular.module('app', []);
//app.controller('FirstController', function($scope) {
//   $scope.message = "there my boy";
//});
'use strict';

var app = angular.module('app', []);
app.controller('FirstController', function($scope){
   $scope.counter = 0;
   $scope.add = function(amount) { $scope.counter += amount; };
   $scope.subtract = function(amount) { $scope.counter -= amount; };
});

app.controller('MyPersonController', function($scope){
   $scope.person = {
       name: 'Manny Ferreira'
   };
});

app.controller('ParentController', function($scope){
    $scope.person = { greeted: false };
});

app.controller('ChildController', function($scope){
   $scope.sayHello = function() {
       $scope.person.name = 'Manny Ferreira';
       $scope.person.greeted = true;
   };
});