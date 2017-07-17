(function(){
	'use strict';

	angular
		.module('app')
		.controller('RecordCtrl', RecordCtrl);

    RecordCtrl.$inject = ['$scope', '$rootScope','dataService','$ionicTabsDelegate','$state','$ionicLoading'];
	function RecordCtrl($scope, $rootScope,dataService,$ionicTabsDelegate,$state,$ionicLoading) {
		var vm = this;
        
        vm.init = init; // 初始化函数
        vm.isContent = false;
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

        	vm.notifyRecord = $rootScope.notifyRecord;

            vm.notifyUser = vm.notifyRecord.notifyUser;
            vm.readUser = vm.notifyRecord.readUser;

        	if(vm.notifyRecord == ''){
                vm.isContent = false;
			}else {
                vm.isContent = true;
			}

		}

        function backPage() {
            $state.go('main.' + $rootScope.backUrl);
        }
	}
})();