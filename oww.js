var owwApp = angular.module('owwApp', []);

owwApp.factory('dataService', function($http) {
  var myService = {
    async: function() {
      var promise = $http.get('https://api.twitch.tv/kraken/streams?game=Hearthstone: Heroes of Warcraft').then(function (response)
      {
        return response.data;
      });
      return promise;
    }
  };
  return myService;
});

owwApp.controller('StreamersController', ['$scope', 'dataService', function($scope, dataService)
{
  var streamers = this;
  streamers.list ={};
  dataService.async().then(function(d) {
    $scope.data = d;
    streamers.list = d.streams;
  });
}]);
