(function(){
	'use strict';

	angular
		.module('app')
		.run(init);

	function init($rootScope, $state,$ionicLoading,dataService) {
		
		// alert(window.location.href);
		if(navigator.platform == 'Win32') {
			$rootScope.ssoTicket = 'ssoTicket';
		} else {
            ns.ready();
		}
		$rootScope.isDetailHref = 'no';
		var a = getUrlParms(window.location.href);
		if(a != null){
			$rootScope.detailUrl = a.url;
			$rootScope.detailBack = 'db';
			$rootScope.detailType = a.type;
			$rootScope.isDetailHref = 'yes';
		}
	}

	// 获取android端传递过来的URL中获取数据
	function getUrlParms(url) {
	 	var args = new Object(); 
	 	if(url.indexOf('?') < 0){
	 		return null;
	 	}
	 	var query = url.split('?');//获取查询串 
	 	var pairs = (query[1]).split('&');//在逗号处断开 
	 	for(var i = 0; i < pairs.length;i++) { 
	  		var pos = pairs[i].indexOf('=');//查找name=value 
	   		if(pos == -1){
	   			continue;//如果没有找到就跳过
	   		} 
	   		var argname = pairs[i].substring(0,pos);//提取name 
	   		var value = (pairs[i].substring(pos + 1)).split('#')[0];//提取value 
	   		if(i == 1){
	   			 argname = pairs[i].substring(0,pos);//提取name 
	   			 value = (pairs[i].substring(pos + 1)).split('#')[0];//提取value 
	   		}
	   		args[argname] = unescape(value);//存为属性 
	 	}
	 	return args;
	}
})();

