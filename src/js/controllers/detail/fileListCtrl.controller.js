(function(){
	'use strict';

	angular
		.module('app')
		.controller('FileListCtrl', FileListCtrl);

    FileListCtrl.$inject = ['$scope', '$rootScope','dataService','$ionicTabsDelegate','$state','$ionicLoading'];
	function FileListCtrl($scope, $rootScope,dataService,$ionicTabsDelegate,$state,$ionicLoading) {
		var vm = this;
        
        vm.init = init; // 初始化函数
		vm.downloadFile = downloadFile; //附件下载方法
        vm.backPage = backPage; //返回指定列表
        vm.isFile = false;

        // 调用初始化
        vm.init();
		
        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {

            if($rootScope.fiels == undefined){
                return false;
            }

            if($rootScope.fiels.length <= 0){
                vm.isFile = false;
            }else{
                vm.isFile = true;
            }
            vm.detialTitle = $rootScope.detailTitle;
        	//展示数据
            vm.fileIetm = $rootScope.fiels;
		}


        function downloadFile(url) {
            ns.runtime.downloadFile({
                'url': url,
                'dowloadCallBack': function(msg) {
                    // var msg = JSON.parse(msg);
                },
                'onSuccess': function(msg) {
                    // _this.find('img').attr('src', 'img/icon_ready.png');
                    window.WebViewJavascriptBridge.callHandler('openWpsFile', {
                        'filePath': msg.obj.filePath
                    }, '', '');
                },
                'onFail': function(msg) {
                    // 模态框
                    $ionicLoading.show({
                        template: '下载失败,请重新下载！',
                        noBackdrop: true,
                        duration: 3000
                    });
                }
            });
        }

        function backPage() {
            $state.go('main.' + $rootScope.backUrl);
        }

	}
})();