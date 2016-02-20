import { Component } from 'angular2/core';
import { ModalComponent } from './modal';

@Component({
	selector: 'modal-body',
	templateUrl: 'modal_body.html'
})
export class ModalBodyComponent {
	constructor(private modal: ModalComponent) { }
}
