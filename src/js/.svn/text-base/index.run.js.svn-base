(function(){
	'use strict';

	angular
		.module('app')
		.run(init);

	function init($rootScope, $ionicLoading) {
		
		if(navigator.platform == 'Win32') {
			$rootScope.ssoTicket = 'ssoTicket';
		} else {
			ns.ready({
				pluginInit: function() {
					ns.runtime.appAuthorization({
						onSuccess: function(data) {								
							$rootScope.ssoTicket = data.obj.ssoTicket;
						},
						onFail: function(msg) {
							console.log('推送异常：获取ssoTicket失败', JSON.stringify(msg));
							alert('推送异常：获取ssoTicket失败', JSON.stringify(msg));
							
							/*$ionicLoading.show({
						    	template: '推送异常：获取ssoTicket失败',
						    	noBackdrop: true,
						    	duration: 3000
						    });*/
						}
					});
				}
			});
	    }
	}
})();

