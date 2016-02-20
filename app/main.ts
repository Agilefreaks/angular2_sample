import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import {provide} from 'angular2/core';
import {enableProdMode} from 'angular2/core';

import {App} from './components/app';

// @if isProduction
enableProdMode();
// @endif

bootstrap(
	App,
	[
		HTTP_PROVIDERS,
		ROUTER_PROVIDERS,
		provide(APP_BASE_HREF, { useValue: '/' })
	]
).catch((err: any) => console.error(err));
