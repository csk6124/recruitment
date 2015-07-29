'use strict';

module.exports = function() {
	
}

/*
	condition
	1. "Good morning" if it is after 12am and just before 12pm
	2. "Good afternoon" if it is after 12pm and just before 6pm
	3. "Good evening" if it is after 6pm and just before 12am
*/
module.exports.prototype.getGreeting = function() {
	var now = new Date();
	var hour = now.getHours();
	
	if (hour > 0 && hour < 12) {
		return 'Good morning';
	} else if (hour > 12 && hour < 18) {
		return 'Good afternoon';
	} else if (hour > 18 && hour < 24) {
		return 'Good evening';
	} else {
		return 'None';
	}
};