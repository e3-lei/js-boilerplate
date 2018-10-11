let assert = require('assert');

import {Person, hello} from './demo.js';

describe('test for hello function', function() {
	it('should return hello + the parameter as name', function() {
		assert.equal(hello('world'), 'hello world');
	});
});

it('should set name for a person', function() {
	let person = new Person('demo');
	assert.equal(person.name, 'demo');
});
