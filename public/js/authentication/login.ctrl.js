var app = angular.module('DisplayAuthenticationModule');

app.controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
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
    }
    $scope.login = function() {
        UserService.login($scope.user)
            .then(function(response) {
                $location.path('/display');
            }, function(response) {
                toastr.error(response.data, 'Error Logging in!')
            })
    };
}]);
