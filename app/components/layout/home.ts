import {Component, View, AfterViewInit, AppViewManager, ElementRef} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {Search} from '../home/search';

@Component({
	selector: 'sample-home'
})
@View({
	templateUrl: 'home.html',
	directives: [ROUTER_DIRECTIVES, Search]
})
export class Home implements AfterViewInit {
	private search: Search = null;

	constructor(private element: ElementRef, private viewManager: AppViewManager) { }

	ngAfterViewInit() {
		var searchElement = this.viewManager.getNamedElementInComponentView(this.element, 'search');
		this.search = this.viewManager.getComponent(searchElement);
		this.openSearchDialog();
	}

	private openSearchDialog() {
		this.search.open();
	}
}
