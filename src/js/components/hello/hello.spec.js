let assert = require('assert');

import hello from './hello.js';

describe('test for demo components', function() {
	it('should return hello + the parameter as name', function() {
		assert.equal(hello('world'), 'hello world');
	});
});
