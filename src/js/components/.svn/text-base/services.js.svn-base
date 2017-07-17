(function() {
	'use strict';

	angular
		.module('app')
		.factory('dataService', dataService)
		.factory('toolService', toolService);

	/* dataService */
	function dataService($http, serviceUrl) {

		var service = {
			get: get, //get
			post: post //post
		};

		return service;

		/*
		 * ajax请求
		 */
		function ajaxReq(type, method, params, successCallback, errCallback) {
            var obj;
            if(type == 'post'){
                obj = {
                    method: method,
                    url: serviceUrl,
                    data: params,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                };
            } else {
                obj = {
                    method: method,
                    url: serviceUrl,
                    params: params
                };
            }
			//console.log("请求：" + url + JSON.stringify(params));
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
		function get(method, params, success, err) {
			return ajaxReq('get', method, params, success, err);
		}

		/*
		 * 提交操作
		 */
		function post(method, param, success, err, file) {
			return ajaxReq('post', method, param, success, err);
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