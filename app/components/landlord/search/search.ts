import {Component, View, AfterViewInit, ElementRef, AppViewManager} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PropertySearch} from '../../shared/property_search';
import {SearchResults} from './results';
import {SearchDetails} from './details';
import {NoResults} from './no_results';
import {PropertySearchResult} from '../../../models';

@Component({
	selector: 'sample-search'
})
@View({
	templateUrl: 'search.html',
	directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, PropertySearch]
})
@RouteConfig([
	{ path: '/', component: SearchResults, name: 'Results', useAsDefault: true },
	{ path: '/details', component: SearchDetails, name: 'Details' },
	{ path: '/no_results', component: NoResults, name: 'NoResults' }
])
export class Search implements AfterViewInit {
	public propertySearch: PropertySearch;

	constructor(private element: ElementRef,
		private viewManager: AppViewManager,
		private router: Router,
		private routeParams: RouteParams) { }

	ngAfterViewInit() {
		var propertySearchElement = this.viewManager.getNamedElementInComponentView(this.element, 'propertySearch');
		this.propertySearch = this.viewManager.getComponent(propertySearchElement);
		var addressParam = this.routeParams.get('address');
		if (addressParam) {
			this.propertySearch.searchTerm = addressParam;
		}
	}

	public onResultSelected(result: PropertySearchResult) {
		this.router.navigate(['/Shell', 'Landlord', 'SearchDetails', { id: result.id }]);
	}

	public onSearchSubmitted(address: string) {
		this.router.navigate(['/Shell', 'Landlord', 'Search', { address: address }]);
	}
}
