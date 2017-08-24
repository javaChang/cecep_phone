/**
 * Created by changchang on 2017/6/26.
 */
(function(){
    'use strict';

    angular
        .module('app')
        .controller('DbCtrl', DbCtrl);

    DbCtrl.$inject = ['$scope', '$state', '$stateParams', '$rootScope', 'dataService', '$timeout', '$ionicLoading'];
    function DbCtrl($scope, $state, $stateParams, $rootScope, dataService,  $timeout, $ionicLoading) {
        var vm = this;

        vm.init = init; // 初始化函数
        vm.getDatas = getDatas;
        vm.pathReload = pathReload; // 下拉刷新
        vm.nextPage = nextPage; // 滚动加载
        vm.closeApply = closeApply; // 关闭轻应用
        vm.menuSelect = menuSelect;
        vm.detailHref = detailHref;

        // 调用初始化
        vm.init();

        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {

            vm.listItem = null;
            vm.disabled = true; // 滚动加载开关
            vm.startRows = 0; // 数据起始值
            vm.rowsCount = 1; // 滚动加载次数
            vm.pageSize = 10; // 请求数据每页条数
            vm.dataTips = '';


            window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'true'},'');



            if($rootScope.ssoTickey == '' && sessionStorage.getItem('ssoTicket') == '') {
                ns.runtime.userinfo({
                    onSuccess: function(data) {
                        $rootScope.ssoTickey = data.obj.ssoTicket;
                        $rootScope.realName = data.obj.user.realName;
                        $rootScope.userName = data.obj.user.userName;
                        if($rootScope.isDetailHref == 'no'){
                             vm.getDatas();
                        }else{
                            $rootScope.isDetailHref = 'no';
                            $state.go('detail',{'id':$rootScope.detailUrl,'type':$rootScope.detailType,'backUrl':$rootScope.detailBack});     
                        }
                        
                    },
                    onFail: function(msg) {
                        console.log('推送异常：获取ssoTicket失败', JSON.stringify(msg));
                        $ionicLoading.show({
                            template: '推送异常：获取ssoTicket失败',
                            noBackdrop: true,
                            duration: 3000
                        });
                    }
                });

            }else {
                ns.runtime.userinfo({
                    onSuccess: function(data) {
                        $rootScope.ssoTickey = data.obj.ssoTicket;
                        $rootScope.realName = data.obj.user.realName;
                        $rootScope.userName = data.obj.user.userName;
                        $rootScope.company = data.obj.user.partTiemJob;
                        vm.menuSelect();
                        if($rootScope.isDetailHref == 'no'){
                             vm.getDatas();
                        }else{
                            $rootScope.isDetailHref = 'no';
                            vm.detailHref($rootScope.detailUrl,$rootScope.detailType,$rootScope.detailBack);
                        }
                    },
                    onFail: function(msg) {
                        console.log('推送异常：获取ssoTicket失败', JSON.stringify(msg));
                        $ionicLoading.show({
                            template: '推送异常：获取ssoTicket失败',
                            noBackdrop: true,
                            duration: 3000
                        });
                    }
                });
                //模拟登陆
                // var dataStr = {
                //     'agencyCode.s': '001',
                //     // 'password.s': 'sc123456',
                //     // 'userName.s': 'shanchun'
                //     // 'password.s': 'yangxing123',
                //     // 'userName.s': 'yangxing1'
                //     'password.s': 'mq456789',
                //     'userName.s': 'mengqian'
                //     // 'password.s': 'wangzhang12345',
                //     // 'userName.s': 'wanglijuan'
                //     // 'password.s': '1234qwer',
                //     // 'userName.s': 'mengweiqiang'
                //     // 'password.s': 'lele940329',
                //     // 'userName.s': 'wangzining1'
                // };

                // dataService.post('com.nqsky.meap.api.sso.service.ISsoAPIService', 'login', dataStr, function (msg) {
                //     if (parseInt(msg.data.res[0].h[0]['code.i']) == 0) {
                //         $rootScope.ssoTickey = msg.data.res[1].b[4]['ssoCertification'][0]['access_token.s'];
                //         $rootScope.realName = msg.data.res[1].b[1]['UserAccount'][0]['realName.s'];
                //         $rootScope.userName = msg.data.res[1].b[1]['UserAccount'][0]['userName.s'];
                //         $rootScope.company = msg.data.res[1].b[3]['company'][0]['company.s'];
                //         vm.menuSelect();
                //         if($rootScope.isDetailHref == 'no'){
                //              vm.getDatas();
                //         }else{
                //             $rootScope.isDetailHref = 'no';
                //             vm.detailHref($rootScope.detailUrl,$rootScope.detailType,$rootScope.detailBack);
                //         }

                //     } else {
                //         $ionicLoading.show({
                //             template: '登陆失败！',
                //             noBackdrop: true,
                //             duration: 3000
                //         });
                //     }
                // }, function (err) {

                // });

                if ($rootScope.ssoTicket == '') {
                    $rootScope.ssoTicket = sessionStorage.getItem('ssoTicket');
                }



            }
        }

        /*
         * 待办列表信息
         * Author: CC
         */

        function getDatas() {

            //获取代办列表
            var strJson = {
                'docType.s': 'db_list',
                'ssoTicket.s': $rootScope.ssoTickey,
                'cnName.s': $rootScope.userName,
                'company.s':$rootScope.company,
                'start.s': vm.startRows,
                'size.s': vm.pageSize
            };
            dataService.post('com.cecic.moa.base.action.RestAction','findDocList',strJson,function (msg) {
                window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'false'},'');
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
                        template: 'Sorry，数据加载出错！',
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
                'docType.s': 'db_list',
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
                        template: 'Sorry，数据加载出错！',
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

        function menuSelect() {
            var strJson = {
                'ssoTicket.s':$rootScope.ssoTickey,
                'company.s':$rootScope.company,
                'userCode.s': $rootScope.userName
            };

            dataService.post('com.cecic.moa.base.action.RestAction','gwUrl',strJson,function (msg) {
                vm.menu = true;
                vm.code = msg.data.res[0]['h'][0]['code.i'];
                if (vm.code == 0) {

                    $rootScope.deptName = JSON.parse(msg.data.res[1].b[0]['data.s'])[0].menuName;
                    $rootScope.docDealUrl = JSON.parse(msg.data.res[1].b[0]['data.s'])[0].doc_deal_url;
                    $rootScope.docEndUrl = JSON.parse(msg.data.res[1].b[0]['data.s'])[0].doc_end_url;
                    // console.log();
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
        }
    }
})();