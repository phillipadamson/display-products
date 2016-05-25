var app = angular.module('DisplayModule', ['ngRoute', 'DisplayAuthenticationModule']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/display', {
            templateUrl: 'views/display.html',
            controller: 'DisplayController'
        })
        .when('/wishlist', {
            templateUrl: 'views/wishlist.html',
            controller: 'WishlistController'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignupController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/login'
        });
});
