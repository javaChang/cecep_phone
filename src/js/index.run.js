(function(){
	'use strict';

	angular
		.module('app')
		.run(init);

	function init($rootScope, $ionicLoading,dataService) {
		
		if(navigator.platform == 'Win32') {
			$rootScope.ssoTicket = 'ssoTicket';
		} else {

            // ns.ready({
            //     pluginInit: function() {
            //         ns.runtime.userinfo({
            //             onSuccess: function(data) {
            //                 $rootScope.ssoTickey = data.obj.ssoTicket;
            //                 $rootScope.realName = data.obj.user.realName;
            //                 $rootScope.userName = data.obj.user.userName;
            //             },
            //             onFail: function(msg) {
            //                 console.log('推送异常：获取ssoTicket失败', JSON.stringify(msg));
            //                 $ionicLoading.show({
            //                     template: '推送异常：获取ssoTicket失败',
            //                     noBackdrop: true,
            //                     duration: 3000
            //                 });
            //             }
            //         });
            //     }
            // });


			//模拟登陆
            var dataStr = {
                'agencyCode.s': '001',
                'password.s': '1234qwer',
                'userName.s': 'mengweiqiang'
            };

            dataService.post('com.nqsky.meap.api.sso.service.ISsoAPIService','login',dataStr,function (msg) {
                if (parseInt(msg.data.res[0].h[0]['code.i']) == 0) {
                    $rootScope.ssoTickey = msg.data.res[1].b[3]['ssoCertification'][0]['access_token.s'];
                    $rootScope.realName = msg.data.res[1].b[1]['UserAccount'][0]['realName.s'];
                    $rootScope.userName = msg.data.res[1].b[1]['UserAccount'][0]['userName.s'];
                } else {
                    $ionicLoading.show({
                        template: '登陆失败！',
                        noBackdrop: true,
                        duration: 3000
                    });
                }
            },function (err) {

            });
		}
	}
})();

