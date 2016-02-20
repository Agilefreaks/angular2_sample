import {Component, View, Input, Output, EventEmitter} from 'angular2/core';
import {CORE_DIRECTIVES, Control} from 'angular2/common';
import {Observable} from 'rxjs/Rx';

import {SearchPropertiesApi} from '../../../../services';
import {PropertySearchResult, PropertySearchResults} from '../../../../models';

import {SearchResult} from './search_result';

@Component({
	selector: 'property-search'
})
@View({
	templateUrl: 'property_search.html',
	directives: [CORE_DIRECTIVES, SearchResult]
})
export class PropertySearch {
	private static ENTER_KEY_CODE= 13;
	private static DEFAULT_DEBOUNCE_INTERVAL = 400;

	@Input()
	searchResults: Observable<PropertySearchResults>;

	@Output('result-selected')
	resultSelected: EventEmitter<PropertySearchResult>;

	@Output('search-submitted')
	searchSubmitted: EventEmitter<string>;

	private address: Control = new Control();

	constructor(private searchApi: SearchPropertiesApi) {
		this.resultSelected = new EventEmitter<PropertySearchResult>();
		this.searchSubmitted = new EventEmitter<string>();
		this.searchResults = this.address.valueChanges
			.debounceTime(PropertySearch.DEFAULT_DEBOUNCE_INTERVAL)
			.distinctUntilChanged()
			.switchMap((address: string) => this.searchApi.getByAddress(address));
	}

	public get searchTerm(): string {
		return this.address.value;
	}

	public set searchTerm(value: string) {
		this.address.updateValue(value, { emitEvent: false });
	}

	public onResultSelected(result: PropertySearchResult) {
		this.resultSelected.next(result);
	}

	public onKeyPressed(keyCode: number) {
		if (keyCode === PropertySearch.ENTER_KEY_CODE) {
			this.searchSubmitted.next(this.searchTerm);
		}
	}
}
