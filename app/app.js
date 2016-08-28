/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("app", ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/budgetplanner/dashboard', { templateUrl: 'app/dashboard/dashboard-view.html', controller: 'DashBoardController' });
    $routeProvider.when('/budgetplanner/expense-list', { templateUrl: 'app/expense-list/expense-list-view.html', controller: 'ExpenseListController' });
    $routeProvider.when('/budgetplanner/budget-by-month', { templateUrl: 'app/budget-by-month/budget-by-month-view.html', controller: 'BudgetByMonthController' });
    $routeProvider.when('/budgetplanner/tracking', { templateUrl: 'app/tracking/tracking-view.html', controller: 'TrackingController' });
    $routeProvider.when('/budgetplanner/daily-spending', { templateUrl: 'app/daily-spending/daily-spending-view.html', controller: 'DailySpendingController' });
    $routeProvider.when('/budgetplanner/reports', { templateUrl: 'app/reports/reports-view.html', controller: 'ReportsController' });
    $locationProvider.html5Mode(true);
});

