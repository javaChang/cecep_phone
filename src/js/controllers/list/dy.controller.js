/**
 * Created by changchang on 2017/6/26.
 */
(function(){
    'use strict';

    angular
        .module('app')
        .controller('DyCtrl', DyCtrl);

    DyCtrl.$inject = ['$scope', '$state', '$stateParams', '$rootScope', 'dataService', '$timeout', '$ionicLoading'];
    function DyCtrl($scope, $state, $stateParams, $rootScope, dataService,  $timeout, $ionicLoading) {
        var vm = this;

        vm.init = init; // 初始化函数
        vm.getDatas = getDatas;
        vm.pathReload = pathReload; // 下拉刷新
        vm.nextPage = nextPage; // 滚动加载
        vm.closeApply = closeApply; // 关闭轻应用
        vm.detailHref = detailHref;

        // 调用初始化
        vm.init();

        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {
            window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'true'},'');
            vm.listItem = null;
            vm.disabled = true; // 滚动加载开关
            vm.startRows = 0; // 数据起始值
            vm.rowsCount = 1; // 滚动加载次数
            vm.pageSize = 10; // 请求数据每页条数
            vm.dataTips = '';

            vm.getDatas();
        }

        /*
         * 待办列表信息
         * Author: CC
         * Date: 2017-5-10
         */
        /*
         * 获取列表数据
         * Author:zyh
         */
        function getDatas() {

            //获取代办列表
            var strJson = {
                'docType.s': 'dy_list',
                'ssoTicket.s': $rootScope.ssoTickey,
                'cnName.s': $rootScope.userName,
                'company.s':$rootScope.company,
                'start.s': vm.startRows,
                'size.s': vm.pageSize
            };
            dataService.post('com.cecic.moa.base.action.RestAction','findDocList',strJson,function (msg) {
                window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'false'},'');
                console.log(JSON.stringify(msg));
                vm.code = msg.data.res[0]['h'][0]['code.i'];

                if (vm.code == 0) {
                    vm.listData = JSON.parse(msg.data.res[1].b[0]['data.s']).datas;
                    vm.listItem = JSON.parse(msg.data.res[1].b[0]['data.s']).datas;


                    if(vm.listData.length < vm.pageSize) {
                        vm.disabled = false;

                        if(vm.listData.length == 0) {
                            vm.dataTips = '';
                        } else {
                            vm.dataTips = '数据已全部加载!';
                        }
                    } else {
                        vm.disabled = true;
                        vm.dataTips = '';
                    }
                } else {
                    // 模态框
                    $ionicLoading.show({
                        template: msg.data.res[1].b[0].error[0]['message.s'],
                        noBackdrop: true,
                        duration: 3000
                    });
                }
                $scope.$broadcast('scroll.refreshComplete');
            }, function(err) {
                window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'false'},'');
                // 模态框
                $ionicLoading.show({
                    template: '网络连接错误',
                    noBackdrop: true,
                    duration: 3000
                });
                $scope.$broadcast('scroll.refreshComplete');
            });
        }

        /**
         * 下拉刷新
         * Author:zyh
         */
        function pathReload() {
            //vm.listItem = null;
            $timeout(function() {
                vm.startRows = 0;
                vm.rowsCount = 1;
                vm.getDatas();
            }, 50);
            vm.disabled = true;
        }

        // 滚动加载
        function nextPage() {
            var strJson = {
                'docType.s': 'dy_list',
                'ssoTicket.s': $rootScope.ssoTickey,
                'cnName.s': $rootScope.userName,
                'company.s':$rootScope.company,
                'start.s': vm.rowsCount * vm.pageSize,
                'size.s': vm.pageSize
            };

            dataService.post('com.cecic.moa.base.action.RestAction','findDocList',strJson,function (msg) {
                vm.code = msg.data.res[0].h[0]['code.i'];
                if (vm.code == 0) {

                    vm.listData = JSON.parse(msg.data.res[1].b[0]['data.s']).datas;
                    var item = JSON.parse(msg.data.res[1].b[0]['data.s']).datas;
                    if (item.length > 0) {
                        for (var i = 0; i < item.length; i++) {
                            vm.listItem.push(item[i]);
                        }
                        vm.rowsCount++;
                    } else {
                        vm.disabled = false;
                        vm.dataTips = '数据已全部加载完成';
                    }

                    $scope.$broadcast('scroll.infiniteScrollComplete');
                } else {

                    // 模态框
                    $ionicLoading.show({
                        template: msg.data.res[1].b[0].error[0]['message.s'],
                        noBackdrop: true,
                        duration: 3000
                    });
                }
            }, function(err) {

                // 模态框
                $ionicLoading.show({
                    template: '网络连接错误',
                    noBackdrop: true,
                    duration: 3000
                });
            });
        }

        function closeApply() {
            window.WebViewJavascriptBridge.callHandler('goBackHome','','');
        }

        function detailHref(id,type,backUrl){
            // console.log(id+'_'+type+'_'+backUrl);
            //返回标识
            $rootScope.backUrl = backUrl;
            //表单ID
            $rootScope.fromId = id;
            //表单类型
            $rootScope.typeFrom = type;
            //是否请求数据
            $rootScope.isAjax = 'yes';

            $state.go('detail');
        }
    }
})();