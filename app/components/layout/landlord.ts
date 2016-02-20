import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Search} from './../landlord/search/search';

@Component({
	selector: 'sample-landlord'
})
@View({
	templateUrl: 'landlord.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/search/...', component: Search, name: 'Search', useAsDefault: true }
])
export class Landlord {
}
