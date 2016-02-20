import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Home} from './home';
import {Landlord} from './landlord';

@Component({
	selector: 'sample-shell'
})

@View({
	templateUrl: 'shell.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{ path: '/', component: Home, name: 'Home', useAsDefault: true },
	{ path: '/landlord/...', component: Landlord, name: 'Landlord' }
])

export class Shell {
}
