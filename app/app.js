/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module("app", ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/Registrations/Courses', { templateUrl: '/template/courses.html', controller: 'CoursesController' });
    $routeProvider.when('/Registrations/Instructors', { templateUrl: '/template/instructors.html', controller: 'InstructorsController' });
    $routeProvider.when('/Registrations/CreateAccount', { templateUrl: '/template/create-account.html', controller: 'AccountController' });
    $locationProvider.html5Mode(true);
});

