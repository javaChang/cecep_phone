(function(){
	'use strict';

	angular
		.module('app')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope', '$stateParams'];
	function MainCtrl($scope, $stateParams) {
		var vm = this;
        
        vm.init = init; // 初始化函数

        // 调用初始化
        vm.init();
		
        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {
            vm.name = '查看列表';
        }
	}
})();