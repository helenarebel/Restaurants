'use strict';

angular.module('restaurantsApp', ['restaurants','ngRoute'])
    .config(['$routeProvider', function($routeProvider, $rootScope) {
        $routeProvider
            .when('/list', {templateUrl: 'views/list.html', controller: "RestaurantsCtrl"})
            .when('/new', {templateUrl: 'views/edit.html', controller: "AddRestaurantCtrl"})
            .when('/edit/:id', {templateUrl: 'views/edit.html', controller: "EditRestaurantCtrl"})
            .when('/view/:id', {templateUrl: 'views/view.html', controller: "EditRestaurantCtrl"})
            .when('/login', {templateUrl: 'views/login.html', controller: "LoginCtrl"})
            .otherwise({redirectTo: '/list'});
    },
    ]);
