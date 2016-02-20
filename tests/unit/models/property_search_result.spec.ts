import {describe, beforeEach, it, expect} from 'angular2/testing';

import {PropertySearchResult} from '../../../app/models';

describe('PropertySearchResult', () => {
	var subject: PropertySearchResult;

	beforeEach(() => {
		subject = new PropertySearchResult();
	});

	it('can create instance', () => {
		expect(subject).not.toBeNull();
	});

	it('has a Deserialize method', () => {
		expect((<any>subject).deserialize).not.toBeUndefined();
	});
});