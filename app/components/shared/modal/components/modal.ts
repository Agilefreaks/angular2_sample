import { Component, AfterViewInit, Input, Output, EventEmitter } from 'angular2/core';

import {ModalResult} from '../models/modal_result';
import {ModalSize} from '../models/modal_size';
import {uniqueId} from '../services/unique_id';

declare var jQuery: JQueryStatic;

@Component({
	selector: 'modal',
	templateUrl: 'modal.html'
})
export class ModalComponent implements AfterViewInit {
	id: string = uniqueId('modal_');
	$modal: JQuery;
	result: ModalResult = ModalResult.None;
	hiding: boolean = false;
	overrideSize: string = null;
	@Input()
	animation: boolean = true;
	@Input()
	size: string;
	@Output()
	onClose: EventEmitter<ModalResult> = new EventEmitter(false);

	ngAfterViewInit() {
		this.$modal = jQuery('#' + this.id);
		this.$modal.modal({ show: false });
		this.$modal.on('hide.bs.modal', this.onModalHide.bind(this))
			.on('hidden.bs.modal', this.onModalHidden.bind(this));
	}

	open(size?: string) {
		if (ModalSize.validSize(size)) {
			this.overrideSize = size;
		}

		this.$modal.modal('show');
	}

	close() {
		this.result = ModalResult.Close;
		this.onClose.next(this.result);
		this.hide();
	}

	dismiss() {
		this.result = ModalResult.Dismiss;
		this.onClose.next(this.result);
		this.hide();
	}

	private hide() {
		if (!this.hiding) {
			this.$modal.modal('hide');
		}
	}

	public isSmall() {
		return this.overrideSize !== ModalSize.Large && this.size === ModalSize.Small ||
			this.overrideSize === ModalSize.Small;
	}

	public isLarge() {
		return this.overrideSize !== ModalSize.Small && this.size === ModalSize.Large ||
			this.overrideSize === ModalSize.Large;
	}

	private onModalHide(event: Event) {
		this.hiding = true;
		if (this.result === ModalResult.None) {
			this.dismiss();
		}

		this.result = ModalResult.None;
	}

	private onModalHidden(event: Event) {
		this.hiding = false;
		this.overrideSize = null;
	}
}
