import {provide, ElementRef, AppViewManager} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {describe, it, expect, beforeEachProviders, beforeEach, inject} from 'angular2/testing';

import {Search} from '../../../../../app/components/landlord/search/search';
import {PropertySearch} from '../../../../../app/components/shared/property_search';

describe('Search', () => {
	var subject: Function;
	var instance: Search;
	var mockRouteParams = <RouteParams>jasmine.createSpyObj('routeParams', ['get']);
	var mockPropertySearch = <PropertySearch>jasmine.createSpyObj('propertySearch', ['searchTerm']);;
	var mockRouter = <Router>jasmine.createSpyObj('router', ['navigate']);
	var mockViewManager = <AppViewManager>jasmine.createSpyObj('appViewManager', ['getNamedElementInComponentView', 'getComponent']);

	beforeEachProviders(() => [
		Search, ElementRef, AppViewManager,
		provide(Router, { useValue: mockRouter }),
		provide(AppViewManager, { useValue: mockViewManager }),
		provide(RouteParams,  {useFactory: () => {
			return mockRouteParams;
		}}),
	]);

	beforeEach(inject([Search], (search: Search) => {
		instance = search;
	}));

	describe('ngAfterViewInit', () => {
		beforeEach(() => {
			(<jasmine.Spy>mockViewManager.getComponent).and.returnValue(mockPropertySearch);
			subject = () => {
				instance.ngAfterViewInit();
			};
		});

		describe('route params contains an address parameter', () => {
			beforeEach(() => {
				(<jasmine.Spy>mockRouteParams.get).and.callFake((key: string) => {
					return key === 'address' ? 'testValue' : null;
				});
			});

			it('sets the property search search term to the value from the route params', () => {
				subject();

				expect(mockPropertySearch.searchTerm).toBe('testValue');
			});
		});
	});
});
