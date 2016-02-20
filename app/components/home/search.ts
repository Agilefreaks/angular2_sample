import {Component, View, ElementRef, AppViewManager, AfterViewInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';

import {ModalResult, ModalComponent, MODAL_DIRECTIVES} from '../shared/modal';
import {PropertySearch} from '../shared/property_search';
import {PropertySearchResult} from '../../models';

@Component({
	selector: 'home-search'
})
@View({
	templateUrl: 'search.html',
	directives: [CORE_DIRECTIVES, MODAL_DIRECTIVES, PropertySearch]
})
export class Search implements  AfterViewInit {
	public modal: ModalComponent;
	public propertySearch: PropertySearch;

	constructor(private element: ElementRef,
		private viewManager: AppViewManager,
		private router: Router) { }

	ngAfterViewInit() {
		var modalElement = this.viewManager.getNamedElementInComponentView(this.element, 'modal');
		var propertySearchElement = this.viewManager.getNamedElementInComponentView(this.element, 'propertySearch');
		this.modal = this.viewManager.getComponent(modalElement);
		this.propertySearch = this.viewManager.getComponent(propertySearchElement);
	}

	public open() {
		this.modal.open();
	}

	public onModalClosed(result: ModalResult) {
		if (result === ModalResult.Close) {
			this.onSearchSubmitted(this.propertySearch.searchTerm);
		}
	}

	public onResultSelected(result: PropertySearchResult) {
		this.modal.dismiss();
		var address = this.propertySearch.searchTerm;
		this.router.navigate(['/Shell', 'Landlord', 'Search', 'Details', { address: address, id: result.id }]);
	}

	public onSearchSubmitted(address: string) {
		this.modal.dismiss();
		this.router.navigate(['/Shell', 'Landlord', 'Search', { address: address }]);
	}
}
