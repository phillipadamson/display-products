var app = angular.module('DisplayModule');

app.service('ProductService', ['$http', function($http) {
    var self = this;
    this.getProducts = function(strSearchTerm) {
        return $http({
                method: "GET",
                url: "http://dev.sandbox.com:5000/api/products/" + strSearchTerm
            })
            .then(function(response) {
                return self.checkProducts(response.data);

            }, function(response) {
                return response.statusText;
            });
    }
    this.addWishListProduct = function(product) {
        return $http({
                method: "POST",
                url: "http://dev.sandbox.com:5000/api/wishitem",
                data: product
            })
            .then(function(response) {
                return response.data;
            }, function(response) {
                return response.statusText;
            })
    }
    this.getWishlistProducts = function() {
        return $http({
                method: "GET",
                url: "http://dev.sandbox.com:5000/api/wishitem"
            })
            .then(function(response) {
                return response.data;
            }, function(response) {
                return response.statusText;
            })
    }
    this.removeWishListProduct = function(product) {
        return $http({
                method: "DELETE",
                url: "http://dev.sandbox.com:5000/api/wishitem/" + product.strProductSKU
            })
            .then(function(response) {
                return response.data;
            }, function(response) {
                return response.data;
            })
    }
    this.checkProducts = function(arrProducts) {
        return self.getWishlistProducts()
            .then(function(response) {
                var arrWishlistProducts = response;
                for (var i = 0; i < arrWishlistProducts.length; i++) {
                    for (var j = 0; j < arrProducts.length; j++) {
                        if (arrProducts[j].strProductSKU === arrWishlistProducts[i].strProductSKU) {
                            arrProducts[j].blnItemAdded = true;
                            break;
                        }
                    }
                }
                console.log(arrProducts);
                return arrProducts;
            });
    }
}]);
