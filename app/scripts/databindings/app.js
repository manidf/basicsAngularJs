'use strict';
// example 1
//function MyController($scope){
//  var updateClock = function() {
//      $scope.clock.now = new Date();
//  };
//  setInterval(function(){
//     $scope.$apply(updateClock);
//  }, 1000);
//    updateClock();
//}

// example 2
function MyController($scope) {
  $scope.clock = {
      now: new Date()
  };
  var updateClock = function() {
      $scope.clock.now = new Date();
  };
  setInterval(function(){
     $scope.$apply(updateClock);
  }, 1000);
  updateClock();
}
new MyController();