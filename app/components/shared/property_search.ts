import { Type } from 'angular2/core';

import { PropertySearch } from './property_search/components/property_search';
import { SearchResult } from './property_search/components/search_result';

export * from './property_search/components/property_search';
export * from './property_search/components/search_result';

export const PROPERTY_SEARCH_DIRECTIVES: Type[] = [
	PropertySearch,
	SearchResult
];
