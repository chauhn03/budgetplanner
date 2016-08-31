'use strict';

/**
 * @ngdoc overview
 * @name budgetplannerApp
 * @description
 * # budgetplannerApp
 *
 * Main module of the application.
 */
var app = angular.module('budgetplannerApp', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/dashboard');
            $stateProvider.state('dashboard', {
                url: 'dashboard',
                templateUrl: 'views/dashboard-view.html',
                controller: 'DashBoardController',
                controllerAs: 'dashboard'
            })
                    .state('expense-list', {
                        url: 'expense-list',
                        templateUrl: 'views/expense-list-view.html',
                        controller: 'ExpenseListController',
                        controllerAs: 'expense-list'
                    })
                    .state('budget-by-month', {
                        url: '/budget-by-month',
                        templateUrl: 'views/budget-by-month-view.html',
                        controller: 'BudgetByMonthController',
                        controllerAs: 'budget-by-month'
                    })
                    .state('daily-spending', {
                        url: '/daily-spending',
                        templateUrl: 'views/daily-spending-view.html',
                        controller: 'DailySpendingController',
                        controllerAs: 'daily-spending'
                    })
                    .state('tracking', {
                        url: '/tracking',
                        templateUrl: 'views/tracking-view.html',
                        controller: 'TrackingController',
                        controllerAs: 'tracking'
                    })
                    .state('reports', {
                        url: '/reports',
                        templateUrl: 'views/reports-view.html',
                        controller: 'ReportsController',
                        controllerAs: 'reports'
                    })
                    .state('/dashboard', {
                        templateUrl: 'views/dashboard-view.html',
                        controller: 'MainCtrl',
                        controllerAs: 'main'
                    })
                    .state('/expense-list', {
                        templateUrl: 'views/about.html',
                        controller: 'AboutCtrl',
                        controllerAs: 'about'
                    });
        });
