angular.module("contactApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/form.html'
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
  });
