(function(){
	'use strict';

	angular
		.module('app')
		.controller('DetailCtrl', DetailCtrl);

	DetailCtrl.$inject = ['$scope', '$stateParams','$state','dataService','$rootScope','$ionicLoading'];
	function DetailCtrl($scope, $stateParams, $state, dataService, $rootScope, $ionicLoading) {
		var vm = this;
        
        vm.init = init; // 初始化函数
		// vm.tabSelectCss = tabSelectCss; //判断点击的

        // 调用初始化
        // $scope.$on('$ionicView.afterEnter',function () {
            vm.init();
        // });

        
        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {
        }
	}
})();


