angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('menu.login', {
      url: '/page5',
      views: {
        'side-menu21': {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.signup', {
      url: '/page6',
      views: {
        'side-menu21': {
          templateUrl: 'templates/signup.html',
          controller: 'signupCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.handyman1StopService', {
      url: '/page11',
      views: {
        'side-menu21': {
          templateUrl: 'templates/handyman1StopService.html',
          controller: 'handyman1StopServiceCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.browseServices', {
      url: '/page7',
      views: {
        'side-menu21': {
          templateUrl: 'templates/browseServices.html',
          controller: 'browseServicesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.myServices', {
      url: '/page9',
      views: {
        'side-menu21': {
          templateUrl: 'templates/myServices.html',
          controller: 'myServicesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.serviceEnquiry', {
      url: '/page8',
      views: {
        'side-menu21': {
          templateUrl: 'templates/serviceEnquiry.html',
          controller: 'serviceEnquiryCtrl'
        }
      }
    })
        
      
    
      
        
    .state('serviceDetail', {
      url: '/page10',
      templateUrl: 'templates/serviceDetail.html',
      controller: 'serviceDetailCtrl'
    })
        
      
    
      
        
    .state('menu.aboutUs', {
      url: '/page12',
      views: {
        'side-menu21': {
          templateUrl: 'templates/aboutUs.html',
          controller: 'aboutUsCtrl'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/page11');

});