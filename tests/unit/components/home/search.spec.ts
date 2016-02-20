import {provide, ElementRef, AppViewManager} from 'angular2/core';
import {Router} from 'angular2/router';
import {describe, it, expect, beforeEachProviders, beforeEach, inject} from 'angular2/testing';

import {Search} from '../../../../app/components/home/search';
import {ModalComponent, ModalResult} from '../../../../app/components/shared/modal';
import {PropertySearch} from '../../../../app/components/shared/property_search';
import {PropertySearchResult} from '../../../../app/models';

describe('Search', () => {
	var subject: Function;
	var instance: Search;
	var mockModal = <ModalComponent>jasmine.createSpyObj('modal', ['open', 'close', 'dismiss']);
	var mockPropertySearch = <PropertySearch>jasmine.createSpyObj('propertySearch', ['searchTerm']);
	var mockRouter: any = jasmine.createSpyObj('router', ['navigate']);

	beforeEachProviders(() => [
		Search, ElementRef, AppViewManager,
		provide(Router, { useValue: mockRouter })
	]);

	beforeEach(inject([Search], (search: Search) => {
		instance = search;
		instance.modal = mockModal;
		instance.propertySearch = mockPropertySearch;
	}));

	describe('open', () => {
		beforeEach(() => {
			subject = () => {
				instance.open();
			};
		});

		it('opens the search modal', () => {
			subject();

			expect(mockModal.open).toHaveBeenCalled();
		});
	});

	describe('onResultSelected', () => {
		var propertySearchResult: PropertySearchResult;

		beforeEach(() => {
			propertySearchResult = new PropertySearchResult();
			propertySearchResult.id = '13';
			subject = () => {
				instance.onResultSelected(propertySearchResult);
			};
		});

		it('dismisess the modal', () => {
			subject();

			expect(mockModal.dismiss).toHaveBeenCalled();
		});

		it('navigates to search details', () => {
			mockPropertySearch.searchTerm = 'test';

			subject();

			expect(mockRouter.navigate).toHaveBeenCalledWith(['/Shell', 'Landlord', 'Search', 'Details', { address: 'test', id: '13' }]);
		});
	});

	describe('onModalClosed', () => {
		var modalResult: ModalResult;

		beforeEach(() => {
			subject = () => {
				instance.onModalClosed(modalResult);
			};
		});

		describe('modal result is close', () => {
			beforeEach(() => {
				modalResult = ModalResult.Close;
			});

			it('dismisess the modal', () => {
				subject();

				expect(mockModal.dismiss).toHaveBeenCalled();
			});

			it('navigates to landlord search with the current address filter', () => {
				mockPropertySearch.searchTerm = 'test';
				subject();

				expect(mockRouter.navigate).toHaveBeenCalledWith(['/Shell', 'Landlord', 'Search', { address: 'test'}]);
			});
		});
	});

	describe('onSearchSubmitted', () => {
		var address: string;

		beforeEach(() => {
			subject = () => {
				instance.onSearchSubmitted(address);
			};
		});

		it('dismisess the modal', () => {
			subject();

			expect(mockModal.dismiss).toHaveBeenCalled();
		});

		it('navigates to landlord search with the current address filter', () => {
			mockPropertySearch.searchTerm = 'test';
			subject();

			expect(mockRouter.navigate).toHaveBeenCalledWith(['/Shell', 'Landlord', 'Search', { address: 'test' }]);
		});
	});
});
