"use strict"

var app = angular.module('fljApp', ['ngRoute', 'ui.bootstrap', 'alj.controllers', 'alj.directives', 'alj.services']);

app.config(function($routeProvider, $httpProvider){
	//$httpProvider.interceptors.push('httpRequestInterceptor');
	$routeProvider
		.when('/home', {templateUrl: 'templates/partials/aboutus.html'})
		.when('/ourparty', {templateUrl: 'templates/partials/weddingparty.html'})
		.when('/locations', {templateUrl: 'templates/partials/eventlocations.html'})
		.when('/contact', {templateUrl: 'templates/partials/contactus.html'})
		.otherwise({ redirectTo : '/home', templateUrl: 'templates/partials/aboutus.html'});
});