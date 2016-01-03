angular
  .module('geohash-sample', ['Geohash'])
  .controller('MainController', ['$scope', 'Geohash', function($scope, Geohash) {
    $scope.encode = function() {
      if (!$scope.lat || !$scope.lng) {
        alert("You must fill latitude and longitude fields.");
        return;
      }

      $scope.encodeResult = Geohash.encode($scope.lat, $scope.lng);
    }
  }]);
