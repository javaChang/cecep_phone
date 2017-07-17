(function() {
	'use strict';
	
	angular
		.module('app')
		/*
		 * footer
		 * Author:yjp
		 * Date:2017-4-18
		 */
		.directive('header', function() {
			return {
				restrict: 'AE',
				replace: true,
				templateUrl: 'template/header.html',
				link: function(scope, ele, attr) {

				}
			};
		})
        .directive('ngTissueTree',['dataService','$rootScope',function(dataService,$rootScope) {

            return {
                restrict: 'AE',
                replace: true,
                templateUrl: 'template/tree.html',
                scope: {
                    source: '=',
                    sourceJson: '=',
                    agencyId: '@',
                    agencyType: '@'
                },
                link: function(scope, ele, attr) {
                    //scope.$watch('source',function(){
                    //    scope.source = scope.source;
                    //})
                },
                controller: function($scope) {
                    var scope = $scope;
                    // console.log(scope.agencyType);
					/*
					 * 点击【+，-】事件,请求以及展开隐藏该节点
					 * nodeData 点击获取的节点数据
					 * $event 点击元素
					 * id 点击的id
					 */
                    // console.log(111)
                    scope.toggleEvent = function(nodeData,$event,id) {

                        if($event.target.style.background.indexOf('lose') >= 0){
                            $event.target.style.background = 'url(../img/icon-add.png) no-repeat';
                        }else{
                            $event.target.style.background = 'url(../img/icon-lose.png) no-repeat';
                        }


                        if(nodeData.children.length > 0){
                            nodeData.show_child = !nodeData.show_child;
                            return false;
                        }else{
                            nodeData.show_child = true;
                            scope.params = {
                                'agencyId.s': id,
                                'agencyCode.s':'001',
                                'updateTime.s':'1970-01-01 00:00:00',
                                'isChildUser.s':scope.agencyType,
                                'ssoTicket.s': $rootScope.ssoTickey

                            };
                            getTree(scope.params,function(data) {
                                nodeData.children = data;
                            });
                        }

                    };
                        /**
                         * 获取组织架构树
                         * nodeData 节点的数组
                         * param 请求报文
                         */
                        function getTree(param,callback) {

                            dataService.getUserTree(param, function(msg) {
                                var arr = [];
                                if(msg.data.res[1].b[0].agencys.length > 0){
                                    var objDep = msg.data.res[1].b[0].agencys;

                                    for(var i = 0; i < objDep.length ; i++){
                                        objDep[i].children = [];
                                        objDep[i].agencyId = objDep[i].UserAgency[0]['agencyId.s'];
                                        objDep[i].agencyType = scope.agencyType;
                                        objDep[i].sourceJson = scope.sourceJson;
                                        arr.push(objDep[i]);
                                    }
                                }

                                if(msg.data.res[1].b[1].users != undefined){
                                    if(msg.data.res[1].b[1].users.length > 0){
                                        var objPeo = msg.data.res[1].b[1].users;
                                        for(var n = 0; n < objPeo.length; n++){
                                            objPeo[n].children = [];
                                            objPeo[n].agencyId = objPeo[n].UserAccount[0]['userId.s'];
                                            objPeo[n].agencyType = scope.agencyType;
                                            objPeo[n].sourceJson = scope.sourceJson;
                                            arr.push(objPeo[n]);
                                        }
                                    }
                                }

                                if(callback){
                                    callback(arr);
                                }
                            },function (err) {

                            });
                        }

                    // };

					/*
					 * 点击【复选框】事件,选中或者取消选中
					 * $event 点击元素
					 * type 点击获取该条数据类型
					 * id 点击获取该条数据类型id
					 * text 点击获取该条数据文本
					 */
                    scope.selectClick = function(text,id,originalCurrentId,$event) {

                        if($event.target.style.background.indexOf('selected') >= 0){
                            $event.target.style.background = 'url(../img/icon-no.png) no-repeat';
                            for(var i = 0; i < scope.sourceJson.length ; i++){
                                if(id == scope.sourceJson[i].id){
                                    scope.sourceJson.splice(i - 1, 1);
                                }
                            }
                        }else{
                            $event.target.style.background = 'url(../img/icon-selected.png) no-repeat';
                            var pad = {
                                'id' : id,
                                'originalCurrentId' : originalCurrentId,
                                'userName' : text
                            };
                            scope.sourceJson.push(pad);
                        }
                    };
                    
                    scope.selectClickRy = function (realName,id,userName,$event) {

                        if($event.target.style.background.indexOf('selected') >= 0){
                            $event.target.style.background = 'url(../img/icon-no.png) no-repeat';
                            for(var i = 0; i < scope.sourceJson.length ; i++){
                                if(id == scope.sourceJson[i].id){
                                    scope.sourceJson.splice(i - 1, 1);
                                }
                            }
                        }else{
                            $event.target.style.background = 'url(../img/icon-selected.png) no-repeat';
                            var pad = {
                                'id' : id,
                                'realName' : realName,
                                'userName' : userName
                            };

                            scope.sourceJson.push(pad);
                        }
                    };
                    
                    // /*
					 // * 当删除选中的项时，接受到响应
					 // * event 响应元素
					 // * id 响应id
					 // * type 响应type
					 // */
                    // $scope.$on('delEle',function (event,id,type) {
                    //     // var eleArr = document.querySelector('.folderTree').getElementsByClassName('showDiv');
                    //     // for(var i=0;i<eleArr.length;i++) {
                    //     //     if(eleArr[i].attributes[0].value == type && eleArr[i].id == id){
                    //     //         eleArr[i].parentNode.children[1].checked = false;
                    //     //     }
                    //     // }
                    // });
                }
            };
        }]);

})();