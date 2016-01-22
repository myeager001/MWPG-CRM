var app = angular.module('eventManager', []);

app.controller('events', ['$http', '$scope', function($http, $scope){
  $scope.addEvent = false;
  $scope.sortBy = '-date'
  var data = $http({
                method: 'GET',
                url: 'https://spreadsheets.google.com/feeds/list/1B15WFiVk21x2d90g0srXAGd-B7UXvdBAvrzgujASbLE/1/public/full?alt=json'
              }).then(function (response){
                // console.log(response);
                console.log('success');
                return response.data.feed.entry;
              }, function (response) {
                console.error('error');
              }

  );
  // console.log(data)
data.forEach()
  // data.$promise.then(
  //     function(forms){
  //       console.log(forms);
  //
  //
  //       $scope.events = newDataStuff
  //     }
  // )
}])
