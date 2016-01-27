
var app = angular.module('eventManager', [])
app.controller('events',  function($scope, $http){
  $scope.show = false;
  $scope.overSat = 0
  $scope.addEvent = false;
  $scope.results = []
  $scope.sortBy = '-gsx$timestamp.$t'
  $scope.data = []
   $http.get('https://spreadsheets.google.com/feeds/list/1B15WFiVk21x2d90g0srXAGd-B7UXvdBAvrzgujASbLE/1/public/full?alt=json').then(function(results){
     var data = results.data.feed.entry;
     data.map(function(result){
      //  $scope.setup += result.gsx$howsatisfiedwereyouwiththeoverallaestheticofthesetup;
      //  $scope.overSat += result.gsx$overallsatisfaction;
      //  $scope.confident += result.gsx$howconfidentwereyouinthecrewsabilitytoaccommodatetheneedsoftheevent;
      //  $scope.rating += result.gsx$overallhowwouldyouratethevalueoftheservicesyoureceived;
       $scope.results.push(result);
       console.log($scope.setup)
     })
      // $scope.setup= ($scope.setup/data.length);
      // $scope.overSat= ($scope.overSat/data.length);
      // $scope.confident= ($scope.confident/data.length);
      // $scope.rating = ($scope.rating/data.length);
  })
  console.log($scope.setup)
})
