(function(){
	'use strict';
	
	angular
		.module('app')
		.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
			//配置状态机的各个状态
			$stateProvider
				.state('main', {
					url: '/main',
					templateUrl: 'template/main.html',
					controller: 'MainCtrl',
					controllerAs: 'vm'
				})
				.state('list', {
					url: '/list',
					templateUrl: 'template/list.html',
					controller: 'ListCtrl',
					controllerAs: 'vm'
				})
				.state('detail', {
					url: '/detail',
					templateUrl: 'template/detail.html',
					controller: 'DetailCtrl',
					controllerAs: 'vm'
				});

			$urlRouterProvider.otherwise('/main');
		}]);
})();

