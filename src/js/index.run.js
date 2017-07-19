(function(){
	'use strict';

	angular
		.module('app')
		.run(init);

	function init($rootScope, $ionicLoading,dataService) {
		
		if(navigator.platform == 'Win32') {
			$rootScope.ssoTicket = 'ssoTicket';
		} else {
            ns.ready();
		}
	}
})();

