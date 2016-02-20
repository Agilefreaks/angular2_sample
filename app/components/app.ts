import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Shell} from './layout/shell';

var servicesProviders: any;
// @if isTest
import {MOCK_SERVICE_PROVIDERS} from '../mocks';
servicesProviders = MOCK_SERVICE_PROVIDERS;
// @endif
// @if !isTest
import {SERVICE_PROVIDERS} from '../services';
servicesProviders = SERVICE_PROVIDERS;
// @endif

@Component({
	selector: 'sample-app',
	providers: [servicesProviders]
})
@View({
	templateUrl: 'app.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/...', name: 'Shell', component: Shell, useAsDefault: true }
])
export class App { }
