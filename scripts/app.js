angular.module("contactApp", ['ui.router'])
  .config(function($stateProvider){

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/form.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
      })
      .state('msg', {
        url: '/home',
        templateUrl: 'views/successfullmsg.html'
      });
  });
