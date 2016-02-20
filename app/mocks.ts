import {provide} from 'angular2/core';

import {SearchPropertiesApi} from './services/search_properties_api';
import {MockSearchPropertiesApi} from './mocks/services/search_properties_api';

export const MOCK_SERVICE_PROVIDERS: any[] = [
	provide(SearchPropertiesApi, { useClass: MockSearchPropertiesApi })
];
