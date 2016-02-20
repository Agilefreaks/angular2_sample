import { Component, Input} from 'angular2/core';
import { ModalComponent } from './modal';

@Component({
	selector: 'modal-footer',
	templateUrl: 'modal_footer.html'
})
export class ModalFooterComponent {
	@Input()
	showDefaultButtons: boolean = false;

	constructor(private modal: ModalComponent) { }
}
