import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {BaseApi} from './base_api';
import {PropertySearchResults} from '../models';

@Injectable()
export class SearchPropertiesApi extends BaseApi {
	private static ResourceEndpoint: string = 'search/properties';

	constructor(http: Http) { super(http); }

	getByAddress(address: string): Observable<PropertySearchResults> {
		const QUERY_PARAMETER_NAME = 'term';
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.set(QUERY_PARAMETER_NAME, address);

		return this.get(PropertySearchResults, SearchPropertiesApi.ResourceEndpoint, urlSearchParams);
	}
}
