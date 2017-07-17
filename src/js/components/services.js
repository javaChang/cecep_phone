(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataService', dataService)
		.factory('toolService', toolService);

	/* dataService */
	function dataService($http, serviceUrl,serviceUrlOa) {

		var service = {
			get: get, //get
			post: post, //post
            getUserTree :getUserTree //获取组织架构树
		};

		return service;

		/*
		 * ajax请求
		 */
		function ajaxReq(type , interfaceName ,method, params, successCallback, errCallback) {
            var obj;
            var urlName = '';
            if(method == 'login' || method == 'getChlidInfoByAgencyId'){
                urlName = serviceUrl;
            }else{
                urlName = serviceUrlOa;
            }
            if (type == 'post') {
                obj = {
                    method: type ,
                    url: urlName ,
                    data: {
                        'req': [{
                            'h': [{
                                'u.s': '?i=' + interfaceName + '&m=' + method
                            }]
                        },
                            {
                                'b': [params]
                            }
                        ]},
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                };
            } else {
                obj = {
                    method: type ,
                    url: urlName ,
                    params: {
                        'req': [{
                            'h': [{
                                'u.s': '?i=' + interfaceName + '&m=' + method
                            }]
                        },
                            {
                                'b': [params]
                            }
                        ]
                    }
                };
            }

			return $http(obj).then(function(data) {
				// console.log("响应报文：" + JSON.stringify(data));
                // console.log(data)
				if(successCallback) {
					successCallback(data);
				}
			}).catch(function(data, status, headers, config) {
				if(errCallback) {
					errCallback(data);
				}
				//console.error('服务器错误，请稍后再试！' + status);
			});
		}

		/*
		 * 获取下拉菜单列表
		 */
		function get(interfaceName ,method, params, success, err) {
			return ajaxReq('get', interfaceName, method, params, success, err);
		}

		/*
		 * 提交操作
		 */
		function post( interfaceName, method, param, success, err, file) {
			return ajaxReq('post', interfaceName, method, param, success, err);
		}

        /*
         * 获取组织架构树
         */
        function getUserTree(param,success,err) {
            return ajaxReq('post', 'com.nqsky.meap.api.user.service.IUserCenterAPIService', 'getChlidInfoByAgencyId', param, success, err);
        }
	}

    /* toolService */
    function toolService() {
        var toolFn = {
            setLocalStorage: setLocalStorage, //存储数据到local
            getLocalStorage: getLocalStorage, //获取local存储数据
            delLocalStorage: delLocalStorage, //删除local数据
            delAllLocalStorage: delAllLocalStorage //清空local数据
        };

        return toolFn;

        function setLocalStorage(name, value) {
            try {
                localStorage.setItem(name, JSON.stringify(value));
            } catch(oException) {
                if(oException.name == 'QuotaExceededError') {
                    console.log('超出本地存储限额！');
                    //如果历史信息不重要了，可清空后再设置
                    localStorage.clear();
                    localStorage.setItem(name, JSON.stringify(value));
                }
            }
        }

        function getLocalStorage(name) {
            var jsonObj = localStorage.getItem(name);
            try {
                return JSON.parse(jsonObj);
            } catch(e) {
                return jsonObj;
            }
        }

        function delLocalStorage(name) {
            localStorage.removeItem(name);
        }

        function delAllLocalStorage() {
            localStorage.clear();
        }
	}

})();