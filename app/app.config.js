(function () {
    'use strict';

    angular
        .module('helloWorldApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/hello');
        $stateProvider

            .state('hello', {
                name: 'hello',
                url: '/hello',
                template: 'hello world'
            })

            .state('bye', {
                name: 'bye',
                url: '/bye',
                template: 'bye world'
            })          

            // .state('home', {
            //     url: '/home',
            //     views: {
            //         '': {
            //             templateUrl: 'home/home.html'
            //         },
            //         'carousel@home': {
            //             templateUrl: 'home/home-one.html'
            //         },
            //         'services@home': {
            //             templateUrl: 'home/home-two.html'
            //         },
            //         'testimonial@home': {
            //             templateUrl: 'home/home-three.html'
            //         }
            //     }
            // })
            // .state('helloWorld', {
            //     url: '/helloWorld',
            //     templateUrl: 'hello-world.html',
            //     controller: 'helloWorldController as hello'
            // })

    }
})();