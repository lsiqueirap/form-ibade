'use strict';

var appModule = angular.module('smModule', ['ngRoute', 'ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'toastr', 'ngAnimate']);

appModule.run(function($rootScope, $timeout, $location, icdb, $http, alertService) {
    $rootScope.g = {};
    $rootScope.g.year = new Date().getFullYear();

    // ---------------- Date picker ----------------
    $rootScope.g.dtpObj = {};
    $rootScope.g.dtpObj.opened = false;
    $rootScope.g.dtpObj.format = 'dd-MM-yyyy';
    $rootScope.g.dtpObj.dateOptions = {
        'startingDay': 1
    };


    $rootScope.g.dtpObj.calObj = {};
    $rootScope.g.dtpObj.openDp = function(key) {
        $rootScope.g.dtpObj.calObj = {};
        $rootScope.g.dtpObj.calObj[key] = true;
    };

});

appModule.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});


appModule.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        }).hashPrefix('!');

        $stateProvider.state('index', {
            url: '/index',
            templateUrl: '/angular/views/index.html'
        });

        $stateProvider.state('11', {
            url: '/11',
            templateUrl: '/angular/views/11.html'
        });

        $urlRouterProvider.otherwise('/index');
    }
]);



