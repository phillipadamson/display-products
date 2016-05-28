var app = angular.module('DisplayModule');

app.controller('DisplayController', ['$scope', '$http', 'ProductService', function($scope, $http, ProductService) {
  $scope.products = ProductService.getSession('products');
  console.log($scope.products);
    $scope.getProducts = function() {
        ProductService.getSession('products');
        ProductService.getProducts($scope.strSearch)
            .then(function(response) {
                $scope.products = response;
                ProductService.saveSession($scope.products, 'products');
            });
    }

}]);
