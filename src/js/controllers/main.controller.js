(function(){
	'use strict';

	angular
		.module('app')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope', '$rootScope','dataService','$ionicTabsDelegate','$state','$ionicLoading'];
	function MainCtrl($scope, $rootScope,dataService,$ionicTabsDelegate,$state,$ionicLoading) {
		var vm = this;
        
        vm.init = init; // 初始化函数
		vm.menuSelect = menuSelect; //点击显示公文菜单
		vm.hrefkip = hrefkip;
		vm.menuList = [{'deptName':'集团签报'},{'deptName':'集团收文'},{'deptName':'集团发文'}];

        // 调用初始化
        vm.init();
		
        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {
		}
		
		function menuSelect() {

            if($rootScope.deptName == undefined ){
                var strJson = {
                    'ssoTicket.s':$rootScope.ssoTickey,
                    'userCode.s': $rootScope.userName
                };

                dataService.post('com.cecic.moa.base.action.RestAction','gwUrl',strJson,function (msg) {
                    vm.menu = true;
                    vm.code = msg.data.res[0]['h'][0]['code.i'];
                    if (vm.code == 0) {

                        $rootScope.deptName = JSON.parse(msg.data.res[1].b[0]['data.s'])[0].menuName;
                        $rootScope.docDealUrl = JSON.parse(msg.data.res[1].b[0]['data.s'])[0].doc_deal_url;
                        $rootScope.docEndUrl = JSON.parse(msg.data.res[1].b[0]['data.s'])[0].doc_end_url;

                        var s = {
                            'deptName':JSON.parse(msg.data.res[1].b[0]['data.s'])[0].menuName
                        };
                        vm.menuList.push(s);
                    } else {
                        // 模态框
                        $ionicLoading.show({
                            template: 'Sorry，数据加载出错！',
                            noBackdrop: true,
                            duration: 3000
                        });
                    }
                },function (err) {

                });

            } else {
                vm.menu = true;
            }

            vm.listDept = vm.menuList;
            // $ionicTabsDelegate.select();


        }

        
        function hrefkip(deptName) {
            vm.menu = false;

            $ionicTabsDelegate.select(4);

            vm.deptType = 'jtqb';
            switch (deptName){
				case '集团签报':
                    $state.go('main.qb');
					break;
                case '集团收文':
                    $state.go('main.sw');
                    break;
                case '集团发文':
                    $state.go('main.fw');
                    break;
				default:
                    $state.go('main.dept');
			}

        }
	}
})();