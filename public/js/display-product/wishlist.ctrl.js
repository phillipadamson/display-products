var app = angular.module('DisplayModule');

app.controller('WishlistController', ['$scope', 'ProductService', function($scope, ProductService){
  ProductService.getWishlistProducts()
    .then(function(response){
      $scope.products = response;
      console.log(response);
    })
}]);
