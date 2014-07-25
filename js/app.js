var myApp = angular.module('myApp', [
  'ngRoute',
  'artistControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html'
  }).
  when('/details/:itemId', {
    templateUrl: 'partials/details.html',
    controller: 'DetailsController'
  }).
  when('/details', {
    templateUrl: 'partials/gallery.html'
  });
}]);