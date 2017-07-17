(function(){
	'use strict';

	angular
		.module('app')
		.controller('ListCtrl', ListCtrl);

	ListCtrl.$inject = ['$scope', '$stateParams'];
	function ListCtrl($scope, $stateParams) {
		var vm = this;
        
        vm.init = init; // 初始化函数
        vm.getDatas = getDatas; // 获取数据

        // 调用初始化
        vm.init();
        
        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {
            vm.id = $stateParams.id; // 获取参数

            // 调用获取数据
            vm.getDatas();
        }

        /*
         * 获取数据
         * Author:yujp
         * Date:2017-6-13
         */
        function getDatas() {
            vm.items = ['AAA', 'BBB', 'CCC'];
        }
	}
})();


