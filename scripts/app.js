
(function(window){
'use strict';

window.Abhi = angular
  .module('instasearcherApp', [
    'ngRoute', 'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}(window));

