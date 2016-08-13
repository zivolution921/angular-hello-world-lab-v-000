function MainController($scope) {
  $scope.name = 'Ziv Zamechek';
  $scope.email = 'ziv921@example.com';
  $scope.phone = '800-800-9000';
}

angular
  .module('app')
  .controller('MainController', MainController);