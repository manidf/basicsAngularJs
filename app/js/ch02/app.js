//angular.module('myApp', [])
//    .run(function($rootScope){
//       $rootScope.name = "World";
//    });

angular.module("myApp", [])
    .controller('MyController', function($scope){
        $scope.name = "Manny";
    });