(function(){
	'use strict';

	angular
		.module('app')
		.controller('ProcessCtrl', ProcessCtrl);

    ProcessCtrl.$inject = ['$scope', '$rootScope' ,'$ionicTabsDelegate','$state','$ionicLoading'];
	function ProcessCtrl($scope, $rootScope,$ionicTabsDelegate,$state,$ionicLoading) {
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

        	vm.DocumentAuthors = ($rootScope.DocumentAuthors).join(',');
        	vm.stat = $rootScope.stat;
        	vm.processList = $rootScope.historyEntities;
		}

        function backPage() {
             //是否请求数据
            $rootScope.isAjax = 'no';

            $state.go('detail');
        }
	}
})();