import {Injectable} from 'angular2/core';
import {SearchPropertiesApi} from '../../services';
import {Observable} from 'rxjs/Rx';

import {PropertySearchResults, PropertySearchResult} from '../../models';

@Injectable()
export class MockSearchPropertiesApi extends SearchPropertiesApi {
	private static sampleJSON = [
		{
			id: '1',
			name: 'Dolby Theatre',
			streetAddress: '6801 Hollywood Blvd',
			source: 'AppBase',
			coverImage: 'http://bit.do/bNUPf',
			images: ['http://bit.do/bNUPq'],
			city: 'Hollywood',
			state: 'CA',
			zipCode: '90028'
		}, {
			id: '2',
			name: 'Menara Kuala Lumpur',
			streetAddress: 'Jalan P Ramlee',
			source: 'Google',
			coverImage: 'http://bit.do/bNUQi',
			images: ['http://bit.do/bNUQt'],
			city: 'Kuala Lumpur',
			state: 'Wilayah Persekutuan Kuala Lumpur',
			zipCode: '50250'
		}];
	private static searchFileds = ['streetAddress', 'city', 'state', 'zipCode'];

	getByAddress(address: string): Observable<PropertySearchResults> {
		address = address.toLowerCase();
		let propertySearchResults = new PropertySearchResults();
		MockSearchPropertiesApi.sampleJSON.filter((item: any) => {
			return MockSearchPropertiesApi.searchFileds.filter((field: string) => {
				return item[field].toLowerCase().indexOf(address) !== -1;
			}).length > 0;
		}).forEach((jsonData: any) => {
			var deserializable = <any>new PropertySearchResult();
			propertySearchResults.push(deserializable.deserialize(jsonData));
		});

		return Observable.fromArray([propertySearchResults]);
	}
}
