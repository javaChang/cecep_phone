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
                    cache: false ,
                    controllerAs: 'vm'

				})
                .state('main.db', {
                    url: '/db',
                    views : {
                        'tab-db' : {
                            templateUrl : 'template/list/db.html',
                            controller: 'DbCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('main.yb', {
                    url: '/yb',
                    views : {
                        'tab-yb' : {
                            templateUrl : 'template/list/yb.html',
                            controller: 'YbCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('main.dy', {
                    url: '/dy',
                    views : {
                        'tab-dy' : {
                            templateUrl : 'template/list/dy.html',
                            controller: 'DyCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('main.yy', {
                    url: '/yy',
                    views : {
                        'tab-yy' : {
                            templateUrl : 'template/list/yy.html',
                            controller: 'YyCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('detail', {
                    url: '/detail/:id/:type/:backUrl',
                    // params:{'id':'','type':'','backUrl':''},
                    templateUrl: 'template/detail.html',
                    controller: 'DetailCtrl',
                    cache: false ,
                    controllerAs: 'vm'
                })
                .state('detail.detailFrom', {
                    url: '/detailFrom',
                    views : {
                        'tab-detail-table' : {
                            templateUrl : 'template/detail/fromDetail.html',
                            controller: 'FromDetailCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('detail.fileList', {
                    url: '/fileList',
                    views : {
                        'tab-detail-table' : {
                            templateUrl : 'template/detail/fileList.html',
                            controller: 'FileListCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('detail.history', {
                    url: '/history',
                    views : {
                        'tab-detail-table' : {
                            templateUrl : 'template/detail/history.html',
                            controller: 'HistoryCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('detail.process', {
                    url: '/process',
                    views : {
                        'tab-detail-table' : {
                            templateUrl : 'template/detail/process.html',
                            controller: 'ProcessCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('detail.record', {
                    url: '/record',
                    views : {
                        'tab-detail-table' : {
                            templateUrl : 'template/detail/record.html',
                            controller: 'RecordCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('detail.do', {
                    url: '/do',
                    views : {
                        'tab-detail-table' : {
                            templateUrl : 'template/detail/do.html',
                            controller: 'DoCtrl',
                            cache: false ,
                            controllerAs: 'vm'
                        }
                    }
                })
                .state('submitFrom', {
                    url: '/submitFrom/:submitType',
                    templateUrl: 'template/detail/submitFrom.html',
                    controller: 'SubmitFromCtrl',
                    cache: false ,
                    controllerAs: 'vm'
                });

			$urlRouterProvider.otherwise('/main');
		}]);
})();

