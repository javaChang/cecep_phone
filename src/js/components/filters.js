(function() {
	'use strict';
	
	angular
		.module('app')
		.filter('formatDate', formatDate);

	function formatDate() {
		return function(input, format) {
			var date = new Date(input);
			if(date != 'Invalid Date') {
				var f = format;
				f = f.replace('yyyy', date.getFullYear());
				f = f.replace('yy', (date.getFullYear() + '').substring(2, 4));
				f = f.replace('MM', (date.getMonth() + 1));
				f = f.replace('dd', date.getDate());
				f = f.replace('HH', date.getHours());
				f = f.replace('mm', date.getMinutes());
				f = f.replace('ss', date.getSeconds());
				f = f.replace('fff', date.getMilliseconds());
				return f;
			} else {
				return input;
			}
		};
	}
}());