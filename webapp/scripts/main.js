requirejs.config({
    baseUrl: 'scripts',
    paths: {
        domReady: 'https://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady',
        angular:'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min',
        ngRoute: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route',
        app: './angularapp/ngapp',
        router: './angularapp/ngrouter/ngrouter',
        jquery: "https://code.jquery.com/jquery-3.3.1.slim.min",
        jqueryui:'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min',
        bootstrap:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.bundle.min",
        numeral:'https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min',
        moment: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min',
        dbctrl:'./angularapp/controllers/dbctrl',
    },
    shim : {
        bootstrap : ["jquery","jqueryui"],
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        ngRoute:{
            exports: 'ngRoute',
            deps: ['angular']
        },
      },
      
});

define([
    'require',
    'angular',
    'app'
], function (require, angular,app) {
    'use strict';
    require(['domReady!'], function (domReady) {
        console.log(domReady);
        console.log(angular)
        console.log(app)
        angular.bootstrap(domReady, ['QlikExtGen']);
        console.log('Open!')    
    });

})