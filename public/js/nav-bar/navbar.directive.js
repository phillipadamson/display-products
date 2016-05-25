var app = angular.module('DisplayModule');

app.directive('navBar', ['$location', 'UserService', function($location, UserService) {
    return {
        templateUrl: 'js/nav-bar/navbar.html',
        link: function(scope) {
            scope.isActive = function(strViewLocation) {
                return strViewLocation === $location.path();
            };
            scope.blnIsAuthenticated = UserService.isAuthenticated();
            scope.logout = function() {
                UserService.logout();
                scope.blnIsAuthenticated = UserService.isAuthenticated();
                $location.path('/login');
            }
            scope.$watch(UserService.isAuthenticated, function(newValue) {
                scope.blnIsAuthenticated = newValue;
            });
        }
    };
}]);
