(function(){
	'use strict';

	angular
		.module('app')
		.controller('DoCtrl', DoCtrl);

    DoCtrl.$inject = ['$scope', '$rootScope','dataService','$ionicTabsDelegate','$state','$ionicLoading','$ionicActionSheet'];
	function DoCtrl($scope, $rootScope,dataService,$ionicTabsDelegate,$state,$ionicLoading,$ionicActionSheet) {
		var vm = this;

        vm.init = init; // 初始化函数
		vm.infoChange = infoChange; // 审批意见
        vm.selectDate = ['不同意','通过','同意','已阅']; //当意见为空时处理
        vm.selectDiv = true; //意见栏是否显示
        vm.selectFlow = selectFlow; //选择提交流程
        vm.actionDocument = actionDocument; //提交
        vm.backPage = backPage; //返回指定列表
        vm.docmentBtn = true; //判断是否有意见
        vm.jsonArryString = jsonArryString; //由于后台无法处理数组，需要将数组转换为字符串
        vm.sheetShow = sheetShow; //下拉框
        vm.detailRow = '';
        vm.selDat = '';
        vm.opinJson = '';

        // 调用初始化
        vm.init();

        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {

            vm.detialTitle = $rootScope.detailTitle;

        	if($rootScope.selectOptions != ''){
                // $rootScope.selectOptions.unshift('请选择');
                vm.selectDate = $rootScope.selectOptions;
			}


			vm.actionDocBtn = $rootScope.operate;

            vm.documentFlow = [];
			// 流程id及名称组合
            for(var i = 0; i < vm.actionDocBtn.hfldNextflownum.length; i++) {
				var folw = {
					'id':vm.actionDocBtn.hfldNextflownum[i],
					'name':vm.actionDocBtn.hfldNextflowstat[i]
				};
                vm.documentFlow.push(folw);
            }

            if($rootScope.backUrl == 'yb' || $rootScope.backUrl == 'yy'){
                vm.selectDiv = false;
            }

            if( vm.documentFlow.length <= 0 ){
                vm.docmentBtn = false;
            }


            // vm.opinJson = ;

		}

        function infoChange() {
			vm.selData = vm.selectedName;

        }

        function selectFlow(val) {

            vm.detailRow = val;
        }

        function actionDocument(num) {
            window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'true'},'');
            switch (parseInt(num)) {
                case 1:
                    if(vm.selData == '' || vm.selData == null){
                        $ionicLoading.show({
                            template: '请填写意见！',
                            noBackdrop: true,
                            duration: 2000
                        });
                        return false;
                    }

                    if(vm.detailRow == ''){
                        $ionicLoading.show({
                            template: '请选择公文流转！',
                            noBackdrop: true,
                            duration: 2000
                        });
                        return false;
                    }

                    $rootScope.fromDetailJson.fldAttitude = vm.selData;
                    $rootScope.fromDetailJson.fldselect = vm.detailRow;
                    break;
                case 2:
                case 7:
                    if(vm.selData != '' || vm.selData != null){
                        $rootScope.fromDetailJson.fldAttitude = vm.selData;
                    }
                    break;
                case 3:
                    
                    switch((vm.actionDocBtn.dataPath).split('/')[2]){
                        case 'fwgl_1.nsf':
                        case 'fwgl_142.nsf':
                            if($rootScope.fromDetailJson.fldHuiQian == undefined || $rootScope.fromDetailJson.fldHuiQian.length <= 0){
                                $ionicLoading.show({
                                    template: '请选择会签部门！',
                                    noBackdrop: true,
                                    duration: 2000
                                });
                                return false;
                            }
                            break;
                        case 'qsbg_1':
                        case 'qsbg_142':
                            if($rootScope.fromDetailJson.fldZhuSongDW == undefined || $rootScope.fromDetailJson.fldZhuSongDW.length <= 0){
                                $ionicLoading.show({
                                    template: '请选择会签部门！',
                                    noBackdrop: true,
                                    duration: 2000
                                });
                                return false;
                            }
                            break;
                    }

                    break;
                case 6:
                    if($rootScope.fromDetailJson.fldZhuSongDW.length <= 0){
                        $ionicLoading.show({
                            template: '请选择主办单位！',
                            noBackdrop: true,
                            duration: 2000
                        });
                        return false;
                    }
                    break;
                case 14:
                    if(vm.selData == ''){
                        $ionicLoading.show({
                            template: '请填写反馈意见！',
                            noBackdrop: true,
                            duration: 2000
                        });
                        return false;
                    }
                    $rootScope.fromDetailJson.strAction = 'fankui';
                    $rootScope.fromDetailJson.fldAttitude = vm.selData;
                    break;
                case 142:
                    if(vm.selData == ''){
                        $ionicLoading.show({
                            template: '请填写反馈意见！',
                            noBackdrop: true,
                            duration: 2000
                        });
                        return false;
                    }
                    num = 14;
                    $rootScope.fromDetailJson.strAction = 'ybfankui';
                    $rootScope.fromDetailJson.fldAttitude = vm.selData;
                    break;
                case 19:
                    if($rootScope.detailJson.fldHuiQian.length <= 0){
                        $ionicLoading.show({
                            template: '请选择主送部门/抄送部门！',
                            noBackdrop: true,
                            duration: 2000
                        });
                        return false;
                    }
                    break;

            }


            $rootScope.fromDetailJson = vm.jsonArryString($rootScope.fromDetailJson);

            var strJson = {
                    'requestId.s': vm.actionDocBtn.requestId,
                    'unid.s': vm.actionDocBtn.unid,
                    'dbpath.s': vm.actionDocBtn.dataPath,
                    'curuser.s': $rootScope.userName,
                    'extension.s': num,
                    'company.s':$rootScope.company,
                    'opin.s': JSON.stringify($rootScope.fromDetailJson)
            };

            dataService.post('com.cecic.moa.base.action.RestAction','actionDocument',strJson,function (msg) {
                window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'false'},'');
                if(parseInt(msg.data.res[0].h[0]['code.i']) == 0){

                    try{
                        $rootScope.actionDocument = JSON.parse(JSON.parse(msg.data.res[1].b[0]['data.s']).result);
                    } catch (e) {
                        $rootScope.actionDocument = JSON.parse(msg.data.res[1].b[0]['data.s']).result;
                        console.log(e)
                    }
                    //流程结束
                    if(parseInt(vm.detailRow) == 9999){
                        $state.go('main.' + $rootScope.backUrl);
                        return true;
                    }

                    if(parseInt($rootScope.actionDocument.flag) == 1){
                        switch (parseInt(num)){
                            case 1: // 提交
                                $state.go('submitFrom',{'submitType':'tj'});
                                break;
                            case 2: //返回上一级处理人
                                $state.go('submitFrom',{'submitType':'back'});
                                break;
                            case 3: // 会签
                                $state.go('submitFrom',{'submitType':'hq'});
                                break;
                            case 5: // 终止会签
                                $state.go('submitFrom',{'submitType':'zzhq'});
                                break;
                            case 6: // 送阅办
                                $state.go('submitFrom',{'submitType':'syb'});
                                break;
                            case 7: //文书撤转
                                $state.go('submitFrom',{'submitType':'wscz'});
                                break;
                            case 8: //保存退出
                            case 9: //撤回
                            case 13: //已阅
                            case 14:  //部门反馈
                                $ionicLoading.show({
                                    template: '文件已自动提交！',
                                    noBackdrop: true,
                                    duration: 1000
                                });
                                $state.go('main.' + $rootScope.backUrl);
                                break;
                            case 15: // 送办理(协办单)
                                $state.go('submitFrom',{'submitType':'sbl'});
                                break;
                            case 16: // 终止办理(协办单)
                                $state.go('submitFrom',{'submitType':'zzbl'});
                                break;
                            case 20: //协办反馈(财务公司)
                                $state.go('submitFrom',{'submitType':'xbfk'});
                                break;
                            default:
                                $state.go('main.' + $rootScope.backUrl);
                                break;
                        }
                    }
                }
            },function (err) {

            });
        }

        function jsonArryString(data) {
                for(var key in data){
                    if(typeof data[key] === 'object' &&
                        typeof data[key].length === 'number' &&
                        typeof data[key].splice === 'function'){
                        data[key] = data[key].join(',');
                    }
                }
                return data;
        }


        function sheetShow(){
            var actionSheetJson = [];
           for(var i = 0; i < vm.selectDate.length ; i++ ){
                var  buttonsText = {
                    'text':vm.selectDate[i]
                };
                actionSheetJson.push(buttonsText);
           }


           var hideSheet = $ionicActionSheet.show({
                 buttons: actionSheetJson,
                 titleText: '请选择',
                 cancelText: '取消',
                 cancel: function() {

                      // add cancel code..
                 },
                 buttonClicked: function(index) {
                    vm.selData = actionSheetJson[index].text;
                   return true;
                 }
             });
        }

        function backPage() {
            $state.go('main.' + $rootScope.backUrl);
        }

	}
})();