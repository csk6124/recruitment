'use strict';

var assert = require('assert');
var MyGreeter = require('../src/MyGreeter.js');

it('instance', function() {
    var greeter = new MyGreeter.Client();
    assert.ok(greeter instanceof MyGreeter.Client);
});

it('getGreeting', function() {
    var greeter = new MyGreeter.Client();

    var now = new Date();
		var hour = now.getHours();
		
		if (hour > 0 && hour < 12) {
			assert.strictEqual(greeter.getGreeting(), 'Good morning');
		} else if (hour > 12 && hour < 18) {
			assert.strictEqual(greeter.getGreeting(), 'Good afternoon');
		} else if (hour > 18 && hour < 24) {
			assert.strictEqual(greeter.getGreeting(), 'Good evening');
		} else {
			assert.strictEqual(greeter.getGreeting(), 'None');
		}

});
