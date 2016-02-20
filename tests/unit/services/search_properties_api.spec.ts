import {beforeEachProviders, inject, describe, it, expect, beforeEach} from 'angular2/testing';
import {provide} from 'angular2/core';
import {BaseRequestOptions, ResponseOptions, Http, Response, ConnectionBackend, RequestOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {PropertySearchResults} from '../../../app/models';
import {SearchPropertiesApi} from '../../../app/services';

describe('SearchPropertiesApi', () => {
	var subject: Function;
	var instance: SearchPropertiesApi;

	beforeEachProviders(() => [
		MockBackend,
		BaseRequestOptions,
		provide(Http, {
			useFactory: (backend: ConnectionBackend, defaultOptions: RequestOptions) => new Http(backend, defaultOptions),
			deps: [MockBackend, BaseRequestOptions]
		}),
		SearchPropertiesApi
	]);

	beforeEach(inject([SearchPropertiesApi], (searchApi: SearchPropertiesApi) => {
		instance = searchApi;
	}));

	describe('getPropertiesByAddress', () => {
		var term: string;

		beforeEach(() => {
			subject = () => {
				return instance.getByAddress(term);
			};
		});

		describe('the api responds with valid data', () => {
			beforeEach(inject([MockBackend], (mockBackend: MockBackend) => {
				let jsonResults = [{ name: 'testN', address: 'testA' }, { name: 'testN1', address: 'testA2' }];
				let response = new Response(new ResponseOptions({ body: jsonResults }));

				mockBackend.connections.subscribe((connection: any) => connection.mockRespond(response));
			}));

			it('returns the search results', (done: () => void ) => {
				subject().subscribe((results: PropertySearchResults) => {
					expect(results.length).toBe(2);
					done();
				});
			});
		});
	});
});
