import {serializable} from '../decorators';

import {Collection} from './collection';
import {PropertySearchResult} from './property_search_result';

@serializable
export class PropertySearchResults extends Collection<PropertySearchResult> {
	public getModelType() {
		return PropertySearchResult;
	}
}