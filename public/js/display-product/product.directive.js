var app = angular.module('DisplayModule');

app.directive('productDisplay', ['ProductService', function(ProductService) {
    return {
        restrict: 'E',
        scope: {
            'blnAddItem': '=addItem',
            'arrProducts': '=products'
        },
        templateUrl: 'js/display-product/product.html',
        link: function(scope) {
            toastr.options = {
                "closeButton": false,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": "toast-top-center",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "3000",
                "hideDuration": "1000",
                "timeOut": "3000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            };
            scope.addItem = function(product) {
                ProductService.addWishListProduct(product)
                    .then(function(response) {
                        scope.arrProducts[arrayObjectIndexOf(scope.arrProducts, product.strProductSKU, 'strProductSKU')].blnItemAdded = true;
                        ProductService.saveSession(scope.arrProducts, 'products');
                        toastr.success('Item has been added to Wishlist.');
                    }, function(response) {
                        toastr.error(response.data, 'Error adding item to Wishlist!');
                    })
            };
            scope.removeItem = function(product) {
                ProductService.removeWishListProduct(product)
                    .then(function(response) {
                        if (response.n == 1) {
                            if (scope.blnAddItem) {
                                scope.arrProducts[arrayObjectIndexOf(scope.arrProducts, product.strProductSKU, 'strProductSKU')].blnItemAdded = false;
                                ProductService.saveSession(scope.arrProducts,'products');
                            } else {
                                scope.arrProducts.splice(arrayObjectIndexOf(scope.arrProducts, product.strProductSKU, 'strProductSKU'), 1);
                            }
                            toastr.success('Item has been removed!');
                        }
                    }, function(response) {
                        toastr.error(response.data, 'Error removing item!');
                    })
            };
            var arrayObjectIndexOf = function(myArray, searchTerm, property) {
                index = -1;
                for (var i = 0; i < myArray.length; i++) {
                    if (myArray[i][property] === searchTerm) {
                        return i;
                    }
                }
                return -1
            }
        }
    };
}]);
