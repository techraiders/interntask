angular.module("contactApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
      })

      $urlRouterProvider.otherwise('/home');

       $locationProvider.html5Mode(true);
  });
