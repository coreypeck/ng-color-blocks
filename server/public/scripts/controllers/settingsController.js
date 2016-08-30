colorBlocks.controller('SettingsController',['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");
  $scope.newBlockColor = '';
  $scope.dataFactory = DataFactory;
  $scope.addColor = function() {
    $scope.dataFactory.addColor($scope.newBlockColor);
    $scope.newBlockColor = '';
  }
}]);
