var app = angular.module('eventManager', [])
app.controller('events', ['$resource', '$scope', function($scope){
  $scope.addEvent = false;
  $scope.sortBy = '-date'
  var data = $resource('https://spreadsheets.google.com/feeds/list/1B15WFiVk21x2d90g0srXAGd-B7UXvdBAvrzgujASbLE/1/public/full?alt=json').get();
  data.$promise.then(
      function(forms){
        console.log(forms);


        $scope.events = newDataStuff
      }
  )
}])
