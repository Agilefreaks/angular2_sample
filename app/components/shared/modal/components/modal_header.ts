import { Component, Input } from 'angular2/core';
import { ModalComponent } from './modal';

@Component({
	selector: 'modal-header',
	templateUrl: 'modal_header.html'
})
export class ModalHeaderComponent {
	@Input()
	showClose: boolean = false;

	constructor(private modal: ModalComponent) { }
}
