import {Component, View, Input, Output, EventEmitter, HostListener} from 'angular2/core';

import {PropertySearchResult} from '../../../../models';

@Component({
	selector: 'search-result'
})
@View({
	templateUrl: 'search_result.html'
})
export class SearchResult {
	@Input()
	result: PropertySearchResult;
	@Output()
	selected: EventEmitter<any> = new EventEmitter<any>();

	@HostListener('click', ['$event.target'])
	protected onClicked() {
		this.selected.next(null);
	}
}
