(function(){
	'use strict';

	angular
		.module('app')
		.controller('FromDetailCtrl', FromDetailCtrl);

    FromDetailCtrl.$inject = ['$scope', '$rootScope','dataService','$state','$ionicLoading','$ionicPopup'];
	function FromDetailCtrl($scope, $rootScope,dataService,$state,$ionicLoading,$ionicPopup) {
		var vm = this;
        
        vm.init = init; // 初始化函数
		vm.detailFromSelect = detailFromSelect;
        vm.isActive = false; // 数据加载loading是否显示
		vm.hrefDetail = hrefDetail; //判断展示表单
		vm.backPage = backPage; //返回指定列表
        vm.agencyId = 'agency1';
        vm.tissueType = '0';
        vm.popupScope = popupScope;
        vm.hrefpage = '';
        vm.source = '';
        vm.companyTitle = companyTitle; //公司title

        // 调用初始化
        vm.init();
		
        /*
         * 初始化页面数据
         * Author:yujp
         * Date:2017-6-13
         */
        function init() {
            window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'true'},'');
            vm.hrefDetail($rootScope.fromId,'n');
            vm.detialTitle = $rootScope.detailTitle;
		}
		
		function detailFromSelect() {
            var strJson = {
                'url.s': $rootScope.fromId,
                'ssoTicket.s': $rootScope.ssoTickey,
                'company.s':$rootScope.company,
                'cnName.s': $rootScope.userName
            };

            dataService.post('com.cecic.moa.sign.action.SignAction','findGsign',strJson,function (msg) {
                console.log(JSON.stringify(msg));
                window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'false'},'');
                if (parseInt(msg.data.res[0].h[0]['code.i']) == 0) {

                    
                    var detailJson = JSON.parse(msg.data.res[1].b[0]['data.s']);

                    $rootScope.detailfrom = detailJson;
                    //正文/附件
                    $rootScope.fiels = detailJson.fiels == undefined ? '' : detailJson.fiels;

                    //历史意见
                    $rootScope.optionInfos = detailJson.optionInfos == undefined ? '' : detailJson.optionInfos;

                    //流程跟踪
                    $rootScope.historyEntities = detailJson.historyEntities == undefined ? '' : detailJson.historyEntities;
                    //当前处理人
                    $rootScope.DocumentAuthors = detailJson.DocumentAuthors == '' ? '' :  detailJson.DocumentAuthors;
                    //当前处理状态
                    $rootScope.stat = detailJson.stat == '' ? '' :  detailJson.stat;

                    //传阅记录
                    $rootScope.notifyRecord = detailJson.notifyRecord == undefined ? '' : detailJson.notifyRecord;

                    //办理意见
                    $rootScope.selectOptions = detailJson.selectOptions == undefined ? '' : detailJson.selectOptions;

                    //文件办理
                    $rootScope.operate = JSON.parse(detailJson.operate == undefined ? '' : detailJson.operate);
                    //办理意见
                    $rootScope.selectOptions = detailJson.selectOptions == undefined ? '' : detailJson.selectOptions;

                    vm.fromType = vm.hrefpage;
                    vm.detailfrom  = detailJson;

                    vm.hrefDetail($rootScope.fromId,'y');
                    
                    if($rootScope.operate.msg != undefined){
                         // 模态框
                        $ionicLoading.show({
                            template: $rootScope.operate.msg,
                            noBackdrop: true,
                            duration: 1500
                        });
                        setTimeout(function(){
                            backPage();
                        },1800);
                        
                    }


                }else{
                    // 模态框
                    $ionicLoading.show({
                        template: msg.data.res[1].b[0].error[0]['message.s'],
                        noBackdrop: true,
                        duration: 3000
                    });
                }

            },function (err) {
                window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'false'},'');
                // 模态框
                $ionicLoading.show({
                    template: '网络连接错误，请重新打开！',
                    noBackdrop: true,
                    duration: 3000
                });
            });
        }
        
        
        function hrefDetail(id,staut) {

            switch(id.split('/')[5]){
                case 'qsbg_1.nsf':
                case 'qsbg_142.nsf':
                    if(staut == 'n'){
                        vm.hrefpage = 'jtqb';
                        $rootScope.detailTitle = vm.companyTitle() + '签报';
                    }else{
                        $rootScope.fromDetailJson = {
                            'fldSubject': vm.detailfrom.fldSubject
                        };
                    }
                    break;
                case 'swgl_2.nsf':
                    if(staut == 'n'){
                        vm.hrefpage = 'jtldsw';
                        $rootScope.detailTitle =  vm.companyTitle() + '领导收文';
                    }else{
                        $rootScope.fromDetailJson = {
                            'fldSubject': vm.detailfrom.fldSubject,
                            'fldswrq': vm.detailfrom.fldswrq,
                            'fldLwjg': vm.detailfrom.fldLwjg ,
                            'fldLwzh': vm.detailfrom.fldLwzh,
                            'Fldjinji': vm.detailfrom.Fldjinji,
                            'Fldmiji': vm.detailfrom.Fldmiji
                        }
                    }
                    break;
                case 'swgl_1.nsf': //集团收文
                case 'swgl_142.nsf': //集团收文
                    if(id.split('/')[5] == 'swgl_142.nsf' && $rootScope.typeFrom == 'sfrmgaozhiXbd'){
                        if(staut == 'n'){
                            vm.hrefpage = 'xbdsw';
                            $rootScope.detailTitle = vm.companyTitle() + '协办单';
                        }else{
                            $rootScope.fromDetailJson = {
                                'fldFwbh' : vm.detailfrom.fldFwbh,
                                'fldSubject' : vm.detailfrom.fldSubject,
                                'fldJinJi' : vm.detailfrom.fldJinJi,
                                'fldNiGaoDW' : vm.detailfrom.fldNiGaoDW,
                                'fldNiGaoRen' : vm.detailfrom.fldNiGaoRen,
                                'fldQiCaoRQ' : vm.detailfrom.fldQiCaoRQ,
                                'fldDh' : vm.detailfrom.fldDh,
                                'fldZhuSongDW_1' : vm.detailfrom.fldZhuSongDW_1,
                                'fldSjYq' : vm.detailfrom.fldSjYq,
                                'fldZhaiYao' : vm.detailfrom.fldZhaiYao
                        };
                        }
                        
                        
                    }else{
                        if(staut == 'n'){
                            vm.hrefpage = 'jtsw'; 
                            $rootScope.detailTitle = vm.companyTitle() + '收文';
                        }else{
                           $rootScope.fromDetailJson = {
                                'Fldfwbh': vm.detailfrom.Ffldfwbh,
                                'Fldjinji': vm.detailfrom.Fldjinji,
                                'fldSubject': vm.detailfrom.fldSubject,
                                'fldLwjg': vm.detailfrom.fldLwjg,
                                'fldswlx': vm.detailfrom.fldswlx,
                                'fldLwzh': vm.detailfrom.fldLwzh,
                                'fldLwqd': vm.detailfrom.fldLwqd,
                                'fldFaSongRY': vm.detailfrom.fldFaSongRY,
                                'fldFaSongRY_id': vm.detailfrom.fldFaSongRY_id,
                                'fldZhuSongDW': vm.detailfrom.fldZhuSongDW,
                                'fldZhuSongDW_id': vm.detailfrom.fldZhuSongDW_id,
                                'fldChaoSong': vm.detailfrom.fldChaoSong,
                                'fldChaoSong_id': vm.detailfrom.fldChaoSong_id,
                                'fldYueZhi': vm.detailfrom.fldYueZhi,
                                'fldYueZhi_id':  vm.detailfrom.fldYueZhi_id,
                                'fldYueZhiRy':  vm.detailfrom.fldYueZhiRy,
                                'fldYueZhiRy_id':  vm.detailfrom.fldYueZhiRy_id,
                                'fldIsCsbm':  vm.detailfrom.fldIsCsbm,
                                'fldIsSb':  vm.detailfrom.fldIsSb,
                                'fldSbsx':  vm.detailfrom.fldSbsx,
                                'fldGdQx':  vm.detailfrom.fldGdQx,
                                'fldSwBeiZhu':   vm.detailfrom.fldSwBeiZhu.data
                            };
                        }
                        
                        
                        }
                    break;
                case 'fwgl_1.nsf': //集团发文
                case 'fwgl_142.nsf': //集团发文
                    if(staut == 'n'){
                        vm.hrefpage = 'jtfw';
                        $rootScope.detailTitle = vm.companyTitle() + '发文';
                    }else {
                        $rootScope.fromDetailJson = {
                            'Fldfwbh': vm.detailfrom.Fldfwbh,
                            'Fldjinji': vm.detailfrom.Fldjinji,
                            'fldSubject': vm.detailfrom.fldSubject,
                            'fldZhuSongDW_fw': vm.detailfrom.fldZhuSongDW_fw,
                            'fldChaoSongDW_fw': vm.detailfrom.fldChaoSongDW_fw,
                            'fldFaSongRY': vm.detailfrom.fldFaSongRY,
                            'fldNiGaoDW': vm.detailfrom.fldNiGaoDW,
                            'fldNiGaoRen': vm.detailfrom.fldNiGaoRen,
                            'fldQiCaoRQ': vm.detailfrom.fldQiCaoRQ,
                            'fldFaWenRQ': vm.detailfrom.fldFaWenRQ,
                            'fldQianFaLD': vm.detailfrom.fldQianFaLD,
                            'fldHuiQian': vm.detailfrom.fldHuiQian,
                            'fldHuiQian_id': vm.detailfrom.fldHuiQian_id,
                            'fldSwBeiZhu': vm.detailfrom.fldSwBeiZhu.data
                        };
                    }
                    break;
                case 'jthyjy_1.nsf': //会议纪要
                case 'jthyjy_142.nsf': //会议纪要
                    vm.hrefpage = 'jthyjy';
                    $rootScope.detailTitle = '会议纪要';
                    break;
                case 'xbd_1.nsf': //协办单
                case 'xbd_142.nsf': //协办单
                    vm.hrefpage = 'xbd';
                    $rootScope.detailTitle = vm.companyTitle() + '协办单';
                    break;
                case 'qtwj_1.nsf': //白头文
                case 'qtwj_142.nsf': //白头文
                    vm.hrefpage = 'qtwj';
                    $rootScope.detailTitle = vm.companyTitle() + '白头文';
                    break;
                default:
                    switch($rootScope.typeFrom){
                        case 'sfrmGongWenSXQb':  //签报收文
                            if(staut == 'n'){
                                vm.hrefpage = 'qbsw';
                            }else {
                                $rootScope.fromDetailJson = {
                                        'fldSubject' : vm.detailfrom.fldSubject,
                                        'fldFwbh' : vm.detailfrom.fldFwbh,
                                        'fldJinJi' : vm.detailfrom.fldJinJi,
                                        'fldQiXian' : vm.detailfrom.fldQiXian,
                                        'fldcsld' : vm.detailfrom.fldcsld,
                                        'fldNiGaoDW' : vm.detailfrom.fldNiGaoDW,
                                        'fldNiGaoDW_id' : vm.detailfrom.fldNiGaoDW_id,
                                        'fldNiGaoRen' : vm.detailfrom.fldNiGaoRen,
                                        'fldQiCaoRQ' : vm.detailfrom.fldQiCaoRQ,
                                        'fldDh' : vm.detailfrom.fldDh,
                                        'fldYueZhiBM' : vm.detailfrom.fldYueZhiBM,
                                        'fldYueZhiBM_id' : vm.detailfrom.fldYueZhiBM_id,
                                        'fldQianFaLD' : vm.detailfrom.fldQianFaLD,
                                        'fldZhuSongDW' : vm.detailfrom.fldZhuSongDW,
                                        'fldZhuSongDW_id' : vm.detailfrom.fldZhuSongDW_id
                                };
                            }
                            break;
                        case 'sfrmGongWenSXFw':  //发文会签收文
                            if(staut == 'n'){
                                vm.hrefpage = 'fwhq';
                            }else {
                                $rootScope.fromDetailJson = {
                                    'fldSubject' : vm.detailfrom.fldSubject,
                                    'fldFwbh' : vm.detailfrom.fldFwbh,
                                    'fldJinJi' : vm.detailfrom.fldJinJi,
                                    'fldFwxh' : vm.detailfrom.fldFwxh,
                                    'fldZhuSongDW_fw' : vm.detailfrom.fldZhuSongDW_fw,
                                    'fldZhuSongDW_id' : vm.detailfrom.fldZhuSongDW_id,
                                    'fldChaoSong_disp' : vm.detailfrom.fldChaoSong_disp,
                                    'fldChaoSong_id' : vm.detailfrom.fldChaoSong_id,
                                    'fldNiGaoDW' : vm.detailfrom.fldNiGaoDW,
                                    'fldQiCaoRQ' : vm.detailfrom.fldQiCaoRQ,
                                    'fldNiGaoRen' : vm.detailfrom.fldNiGaoRen,
                                    'fldHeGao' : vm.detailfrom.fldHeGao,
                                    'fldJiaoDui_1' : vm.detailfrom.fldJiaoDui_1,
                                    'fldFaWenRQ' : vm.detailfrom.fldFaWenRQ,
                                    'fldQianFaLD' : vm.detailfrom.fldQianFaLD,
                                    'fldHuiQian' : vm.detailfrom.fldHuiQian,
                                    'fldHuiQian_id' : vm.detailfrom.fldHuiQian_id
                                };
                            }

                            break;
                        case 'sfrmGongWenSXnew':
                        case 'sfrmGongWenSX':  //下行发文收文
                            if(staut == 'n'){
                                vm.hrefpage = 'fwsw';
                            }else {
                                $rootScope.fromDetailJson = {
                                    'fldSubject' : vm.detailfrom.fldSubject,
                                    'fldFwbh' : vm.detailfrom.fldFwbh,
                                    'fldJinJi' : vm.detailfrom.fldJinJi,
                                    'fldLwjg' : vm.detailfrom.fldLwjg,
                                    'fldswrq' : vm.detailfrom.fldswrq,
                                    'fldLwzh' : vm.detailfrom.fldLwzh,
                                    'fldswlx' : vm.detailfrom.fldswlx,
                                    'fldFaSongRY' : vm.detailfrom.fldFaSongRY,
                                    'fldZhuSongDW' : vm.detailfrom.fldZhuSongDW,
                                    'fldZhuSongDW_id' : vm.detailfrom.fldZhuSongDW_id,
                                    'fldChaoSong' : vm.detailfrom.fldChaoSong,
                                    'fldChaoSong_id' : vm.detailfrom.fldChaoSong_id,
                                    'fldYueZhi' : vm.detailfrom.fldYueZhi,
                                    'fldYueZhi_id' : vm.detailfrom.fldYueZhi_id,
                                    'fldSbsx' : vm.detailfrom.fldSbsx,
                                    'fldWcsx' : vm.detailfrom.fldWcsx,
                                    'fldCyFw' : vm.detailfrom.fldCyFw
                                };
                            }
                            break;
                        case 'sfrmBtw':  //白头文收文
                            vm.hrefpage = 'btw';
                            break;
                        case 'sfrmgaozhiXbd':  //协办单收文

                            if(staut == 'n'){
                                vm.hrefpage = 'xbdsw';
                            }else {
                                $rootScope.fromDetailJson = {
                                    'fldFwbh' : vm.detailfrom.fldFwbh,
                                    'fldSubject' : vm.detailfrom.fldSubject,
                                    'fldJinJi' : vm.detailfrom.fldJinJi,
                                    'fldNiGaoDW' : vm.detailfrom.fldNiGaoDW,
                                    'fldNiGaoRen' : vm.detailfrom.fldNiGaoRen,
                                    'fldQiCaoRQ' : vm.detailfrom.fldQiCaoRQ,
                                    'fldDh' : vm.detailfrom.fldDh,
                                    'fldZhuSongDW_1' : vm.detailfrom.fldZhuSongDW_1,
                                    'fldSjYq' : vm.detailfrom.fldSjYq,
                                    'fldZhaiYao' : vm.detailfrom.fldZhaiYao
                                };
                            }
                            break;
                        default:
                            vm.hrefpage = '';
                    }
                    $rootScope.detailTitle = $rootScope.deptName;
            }

            if($rootScope.isAjax == 'yes' && staut == 'n'){
                detailFromSelect();
            }
            if($rootScope.isAjax == 'no'){
                window.WebViewJavascriptBridge.callHandler('progressbar',{'popLoadding':'false'},'');
                vm.fromType = vm.hrefpage;
                vm.detailfrom  = $rootScope.detailfrom;
            }
        }


        function popupScope($index,titleVal,titleId) {

            if(vm.detailfrom.editable == 'no' || vm.detailfrom.editable == 'NO'){
                return false ;
            }

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

                                vm.detailfrom[titleVal] = textName.substring(0,textName.length - 1);

                                $rootScope.fromDetailJson[titleVal] = textId.substring(0,textId.length - 1);
                            }else{
                                var textName = '';
                                var textId = '';
                                for(var i = 0; i < vm.sourceJson.length ;i++ ){
                                    textName += vm.sourceJson[i].userName + ',';
                                    textId += vm.sourceJson[i].originalCurrentId + ',';
                                }

                                vm.detailfrom[titleVal] = textName.substring(0,textName.length - 1);
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
        
        function backPage() {

            if($rootScope.operate == undefined){
                $state.go('main.' + $rootScope.backUrl);
                return false;
            }

            var strJson = {
                    'requestId.s': $rootScope.operate.requestId,
                    'unid.s': $rootScope.operate.unid  | '',
                    'dbpath.s': $rootScope.operate.dataPath  | '',
                    'curuser.s': $rootScope.userName  | '',
                    'extension.s': '12',
                    'company.s':$rootScope.company,
                    'opin.s': ''
            };


            dataService.post('com.cecic.moa.base.action.RestAction','actionDocument',strJson,function (msg) {
                 $state.go('main.' + $rootScope.backUrl);
             },function(err){
                 $state.go('main.' + $rootScope.backUrl);
            });
        }

        function companyTitle(){
            if($rootScope.company == 'jtzb'){
                return '集团';
            }else{
                return '公司';
            }
           
        }
        
	}
})();