import {Component, View, Input} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

import {PropertySearchResult} from '../../../models';

@Component({
	selector: 'landlord-search-details'
})
@View({
	templateUrl: 'details.html'
})
export class SearchDetails {
	@Input() searchResults: Observable<PropertySearchResult>;
}
