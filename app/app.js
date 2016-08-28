/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("app", ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/budgetplanner/dashboard', { templateUrl: 'app/dashboard/dashboard-view.html', controller: 'DashBoardController' });
    $routeProvider.when('/budgetplanner/expense-list', { templateUrl: 'app/expense-list/expense-list-view.html', controller: 'ExpenseListController' });
    $routeProvider.when('/Registrations/CreateAccount', { templateUrl: '/template/create-account.html', controller: 'AccountController' });
    $locationProvider.html5Mode(true);
});

