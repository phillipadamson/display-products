var app = angular.module('DisplayModule');

app.controller('DisplayController', ['$scope', '$http', 'ProductService', function($scope, $http, ProductService) {
    $scope.getProducts = function() {
        ProductService.getProducts($scope.strSearch)
            .then(function(response) {
                $scope.products = response;
                console.log($scope.products);

            });
    }

}]);
