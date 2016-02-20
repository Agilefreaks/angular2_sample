import {provide} from 'angular2/core';
import {describe, it, expect, beforeEachProviders, beforeEach, inject} from 'angular2/testing';

import {PropertySearch} from '../../../../../app/components/shared/property_search';
import {SearchPropertiesApi} from '../../../../../app/services';
import {PropertySearchResult} from '../../../../../app/models';

describe('PropertySearch', () => {
	var subject: Function;
	var instance: PropertySearch;
	var mockSearchApi: any = jasmine.createSpyObj('api', ['getByAddress']);

	beforeEachProviders(() => [
		PropertySearch,
		provide(SearchPropertiesApi, { useValue: mockSearchApi })
	]);

	beforeEach(inject([PropertySearch], (propertySearch: PropertySearch) => {
		instance = propertySearch;
	}));

	describe('onResultSelected', () => {
		var propertySearchResult: PropertySearchResult;

		beforeEach(() => {
			propertySearchResult = new PropertySearchResult();
			propertySearchResult.id = '13';
			subject = () => {
				instance.onResultSelected(propertySearchResult);
			};
		});

		it('emits a result selected event', (done: () => void) => {
			instance.resultSelected.subscribe((result: PropertySearchResult) => {
				expect(result).toBe(propertySearchResult);
				done();
			});

			subject();
		}, 1000);
	});

	describe('onKeyPressed', () => {
		var keyCode: number;

		beforeEach(() => {
			subject = () => {
				instance.onKeyPressed(keyCode);
			};
		});

		describe('keyCode represents Enter key', () => {
			beforeEach(() => {
				keyCode = 13;
			});

			it('emits a search submitted event', (done: () => void) => {
				instance.searchSubmitted.subscribe((address: string) => {
					expect(address).toBe(instance.searchTerm);
					done();
				});

				subject();
			}, 1000);
		});
	});
});
