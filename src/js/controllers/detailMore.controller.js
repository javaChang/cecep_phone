(function(){
	'use strict';

	angular
		.module('app')
		.controller('DetailMoreCtrl', DetailMoreCtrl);

	DetailMoreCtrl.$inject = ['$scope', '$stateParams','$state','dataService','$rootScope','$ionicLoading'];
	function DetailMoreCtrl($scope, $stateParams, $state, dataService, $rootScope, $ionicLoading) {
		var vm = this;
        
                vm.init = init; // 初始化函数

                vm.init();
                

                
                /*
                 * 初始化页面数据
                 * Author:yujp
                 * Date:2017-6-13
                 */
                function init() {
                }
	}
})();


