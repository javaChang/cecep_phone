(function(){
	'use strict';
	
	angular
		.module('app')
		.constant('serviceUrl', 'http://ntfront.cecep.cn:8090/nqsky-meap-front/service.jws?app.key=com.nqsky.rmad&appToken=40287f60565422fc01565a21b83000a9&format=json')
		// .constant('serviceUrlOa','http://ntfront.cecep.cn:8088/nqsky-meap-appnest-moa/service.jws');
		.constant('serviceUrlOa','http://ntfront.cecep.cn:8088/nqsky-meap-appnest-moa-unified/service.jws');
})();


