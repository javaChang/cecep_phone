(function(){
	'use strict';

	angular
		.module('app')
		.controller('HistoryCtrl', HistoryCtrl);

    HistoryCtrl.$inject = ['$scope', '$rootScope','dataService','$ionicTabsDelegate','$state','$ionicLoading'];
	function HistoryCtrl($scope, $rootScope,dataService,$ionicTabsDelegate,$state,$ionicLoading) {
		var vm = this;
        
        vm.init = init; // 初始化函数
        vm.backPage = backPage; //返回指定列表


        // 调用初始化
        vm.init();
		
        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {
            vm.detialTitle = $rootScope.detailTitle;

			vm.historyList = $rootScope.optionInfos;
		}

        function backPage() {
            $state.go('main.' + $rootScope.backUrl);
        }
	}
})();