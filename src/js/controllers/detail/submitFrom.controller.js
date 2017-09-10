(function(){
	'use strict';

	angular
		.module('app')
		.controller('SubmitFromCtrl', SubmitFromCtrl);

    SubmitFromCtrl.$inject = ['$scope', '$rootScope','dataService','$stateParams','$state','$ionicLoading','$ionicPopup'];
	function SubmitFromCtrl($scope, $rootScope,dataService,$stateParams,$state,$ionicLoading,$ionicPopup) {
		var vm = this;

        vm.init = init; // 初始化函数
        vm.backPage = backPage; //返回指定列表
        vm.divFlow = divFlow; //显示模块
        vm.submitFlow = submitFlow; //确认提交
        vm.popupScope = popupScope;
        vm.subSelectFlow = subSelectFlow;
        vm.submitRowFlow  = submitRowFlow;
        vm.nextname = '';
        vm.subBtn = true;
        vm.isWscz = false;
        // vm.divShow = false; //提交确认是否显示
        vm.submitData = '';
        vm.assigns = '';
        vm.nextNodeId = '';
        vm.opinStr = {};
        vm.agencyId = 'agency1';
        vm.tissueType = '0';

        vm.extension = '';

        vm.fldZhuSongDWSub = '';
        vm.fldZhiHuiRYSub = '';
        vm.fldEndHqbmSub = '';
        vm.fldZhiHuiRYSub = '';
        vm.fldChaoSongDWSub = '';
        vm.fldYueZhiSub = '';
        vm.fldYueZhiRySub = '';
        vm.stopFlow = '';
        vm.submitWsczFlow = [];
        vm.subDetailRow = '';
        vm.subXbfkYj = '';

        // 调用初始化
        vm.init();

        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {

            divFlow();
		}

		function divFlow() {
            vm.submitData = $rootScope.actionDocument;
            console.log(vm.submitData);
            switch ($stateParams.submitType){
                case 'tj':  //提交
                    vm.extension = '1';
                    vm.divShowSubmit = 'submitTj';
                    vm.assigns = vm.submitData.attinfo[0].personZW;
                    $rootScope.fromDetailJson.assigns = 'CN=' + vm.submitData.attinfo[0].personZW + '/O=cecic' ;
                    break;
                case 'hq': //会签
                    vm.extension = '3';
                    vm.fldZhuSongDWSub = $rootScope.fromDetailJson.fldZhuSongDW;
                    vm.fldZhiHuiRYSub = $rootScope.fromDetailJson.fldZhiHuiRY;
                    vm.divShowSubmit = 'submitHq';
                    break;
                case 'zzhq': //终止会签
                    vm.extension = '11';
                    vm.divShowSubmit = 'submitZzHq';
                    break;
                case 'syb': //送阅办
                    vm.extension = '6';
                    vm.fldZhuSongDWSub = $rootScope.fromDetailJson.fldZhuSongDW;
                    vm.fldChaoSongDWSub = $rootScope.fromDetailJson.fldChaoSongDW;
                    vm.fldYueZhiSub = $rootScope.fromDetailJson.fldYueZhi;
                    vm.fldYueZhiRySub = $rootScope.fromDetailJson.fldYueZhiRy;
                    vm.divShowSubmit = 'submitSyb';
                    break;
                case 'sbl': //送办理
                    vm.divShowSubmit = 'submitSbl';
                    break;
                case 'zzbl': //终止办理
                    vm.divShowSubmit = 'submitZzBl';
                    break;
                case 'back':
                    vm.extension = '2';
                    vm.divShowSubmit = 'submitBack';
                    break;
                case 'wscz':
                    vm.extension = '7';
                    for(var i = 0; i < vm.submitData.hfldNextflownum.length; i++) {
                        var folw = {
                            'id':vm.submitData.hfldNextflownum[i],
                            'name':vm.submitData.hfldNextflowstat[i],
                            'userId':vm.submitData.strNextStat_userid[i],
                            'user':vm.submitData.strNextStat_user[i]
                        };
                        vm.submitWsczFlow.push(folw);
                    }
                    vm.subBtn = false;
                    vm.divShowSubmit = 'submitWscz';
                    break;
                case 'xbfk':
                    vm.extension = '20';
                    vm.divShowSubmit = 'submitXbfk';
                    break;
            }


        }

        function submitFlow() {
            window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'true'},'');
            switch (parseInt(vm.extension)){
                case 1: //提交
                    // vm.assigns = ;
                    if($rootScope.fromDetailJson.assigns == ''){
                        $ionicLoading.show({
                            template: '请选择受理人！',
                            noBackdrop: true,
                            duration: 2000
                        });
                        return false;
                    }
                    if(vm.isWscz == false){
                        vm.nextNodeId = vm.submitData.attinfo[0].NextNodeId;
                    }
                    break;
                case 2: //返回上一级处理人
                    $rootScope.fromDetailJson.assigns = vm.submitData.attinfo[0].person;
                    vm.nextNodeId = vm.submitData.attinfo[0].NextNodeId;
                    break;
                case 3:  //会签
                    vm.opinStr = {
                        'fldZhuSongDW': vm.fldZhuSongDWSub,
                        'fldZhuSongDW_id': $rootScope.fromDetailJson.fldZhuSongDWSub_id,
                        'fldZhiHuiRY': $rootScope.fromDetailJson.fldZhiHuiRYSub
                    };
                    break;
                case 11:  //终止会签
                    vm.opinStr = {
                        'fldEndHqbm': vm.fldEndHqbmSub,
                        'fldEndHqbm_id': $rootScope.fromDetailJson.fldEndHqbm_id
                    };
                    break;
                case 6:  //送阅办
                    vm.opinStr = {
                        'fldZhuSongDW':vm.fldZhuSongDWSub,
                        'fldZhuSongDW_id': $rootScope.fromDetailJson.fldZhuSongDW_id,
                        'fldChaoSongDW': vm.fldChaoSongDWSub,
                        'fldChaoSongDW_id': $rootScope.fromDetailJson.fldChaoSongDW_id,
                        'fldYueZhi': vm.fldYueZhiSub,
                        'fldYueZhi_id': $rootScope.fromDetailJson.fldYueZhi_id,
                        'fldYueZhiRy': $rootScope.fromDetailJson.fldYueZhiRySub
                    };
                    vm.opinStr = JSON.stringify(vm.opinStr);
                    break;
                case 20:
                    if(vm.subXbfkYj == ''){
                        $ionicLoading.show({
                            template: '请填写反馈意见！',
                            noBackdrop: true,
                            duration: 2000
                        });
                        return false;
                    }
                    vm.extension = '12';
                    vm.opinStr = {
                        'fldBlJg':vm.subXbfkYj
                    }
                    break;
            }


            var strJson = {
                'requestId.s': vm.submitData.requestId,
                'unid.s': vm.submitData.unid,
                'dbpath.s': vm.submitData.dataPath,
                'curuser.s': $rootScope.userName,
                'nextuser.s': $rootScope.fromDetailJson.assigns,
                'flownum.s': vm.nextNodeId,
                'extension.s': vm.extension,
                'company.s':$rootScope.company,
                'opin.s': JSON.stringify(vm.opinStr)
            };
            
            dataService.post('com.cecic.moa.base.action.RestAction','submitFlow',strJson,function (msg) {
                window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'false'},'');
                if(parseInt(msg.data.res[0].h[0]['code.i']) == 0){
                    vm.stopFlow = JSON.parse(JSON.parse(msg.data.res[1].b[0]['data.s']).result);

                    if(parseInt(vm.stopFlow.flag) == 1){
                        $state.go('main.db');
                    }

                }
            },function (err) {
                // 模态框
                $ionicLoading.show({
                    template: 'Sorry，数据加载出错！',
                    noBackdrop: true,
                    duration: 3000
                });
            });


        }

        function popupScope($index,titleVal,titleId) {

            var titleName = '';
            vm.sourceJson = [];

            vm.tissueType = $index;

            if($index == 1){
                titleName = '选择人员';
            }else {
                titleName = '选择部门';
            }

            var params = {
                'agencyId.s': vm.agencyId,
                'agencyCode.s':'001',
                'updateTime.s':'1970-01-01 00:00:00',
                'isChildUser.s':$index,
                'ssoTicket.s': $rootScope.ssoTickey

            };

            dataService.getUserTree(params,function (msg) {
                var arr = [];
                if(msg.data.res[1].b[0].agencys.length > 0){
                    var objDep = msg.data.res[1].b[0].agencys;

                    for(var i = 0; i < objDep.length ; i++){
                        objDep[i].children = [];
                        objDep[i].agencyId = objDep[i].UserAgency[0]['agencyId.s'];
                        objDep[i].agencyType = $index;
                        objDep[i].sourceJson = vm.sourceJson;
                        arr.push(objDep[i]);
                    }
                }

                if(msg.data.res[1].b[1].users != undefined){
                    if(msg.data.res[1].b[1].users.length > 0){
                        var objPeo = msg.data.res[1].b[1].users;
                        for(var n = 0; n < objPeo.length; n++){
                            objPeo[n].children = [];
                            objPeo[n].agencyId = objPeo[n].UserAccount[0]['userId.s'];
                            objPeo[n].agencyType = $index;
                            objPeo[n].sourceJson = vm.sourceJson;
                            arr.push(objPeo[n]);
                        }
                    }
                }

                vm.source = arr;
            });

            var myPopup =  $ionicPopup.show({
                title: titleName,
                template: '<ng-tissue-tree agency-id="{{ vm.agencyId }}" source="vm.source"  agency-type="{{ vm.tissueType }}" source-json="vm.sourceJson"></ng-tissue-tree>',
                scope: $scope,
                buttons: [
                    {
                        text: '<b>提交</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if($index == 1){
                                var textName = '';
                                var textId = '';
                                for(var i = 0; i < vm.sourceJson.length ;i++ ){
                                    textName += vm.sourceJson[i].realName + ',';
                                    textId += 'CN=' + vm.sourceJson[i].realName + '/O=cecic,';
                                }

                                vm[titleVal] = textName.substring(0,textName.length - 1);

                                $rootScope.fromDetailJson[titleVal] = textId.substring(0,textId.length - 1);
                            }else{
                                var textName = '';
                                var textId = '';
                                for(var i = 0; i < vm.sourceJson.length ;i++ ){
                                    textName += vm.sourceJson[i].userName + ',';
                                    textId += vm.sourceJson[i].originalCurrentId + ',';
                                }

                                vm[titleVal] = textName.substring(0,textName.length - 1);
                                $rootScope.fromDetailJson[titleVal] = textName.substring(0,textName.length - 1);
                                $rootScope.fromDetailJson[titleId] = textId.substring(0,textId.length - 1);
                            }

                        }
                    },
                    {
                        text: '<b>取消</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            myPopup.close();
                        }
                    }
                ]
            });

        }

        function submitRowFlow(){
            vm.subBtn = true;
            vm.isWscz = true;
            $stateParams.submitType = 'tj';
            divFlow();
        }

        function subSelectFlow(id,name,userId,user) {
            // vm.subDetailRow 
            vm.nextname = name;
            vm.nextNodeId = id;
            vm.assigns = user.substring(3,user.indexOf('/'));
            $rootScope.fromDetailJson.assigns = user;
        }

        function backPage() {
            $state.go('detail.do');
        }

	}
})();