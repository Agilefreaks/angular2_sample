import {Component, View, Input} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

import {PropertySearchResults} from '../../../models';

@Component({
	selector: 'landlord-search-results'
})
@View({
	templateUrl: 'results.html'
})
export class SearchResults {
	@Input() searchResults: Observable<PropertySearchResults>;
}
