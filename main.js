var app = angular.module('eventManager', [])
app.controller('events', function($scope){
  $scope.addEvent = false;
  $scope.sortBy = '-date'
})
