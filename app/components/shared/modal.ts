import { Type } from 'angular2/core';

import { ModalComponent } from './modal/components/modal';
import { ModalHeaderComponent } from './modal/components/modal_header';
import { ModalBodyComponent } from './modal/components/modal_body';
import { ModalFooterComponent } from './modal/components/modal_footer';

export * from './modal/models/modal_result';
export * from './modal/models/modal_size';
export * from './modal/services/unique_id';
export * from './modal/components/modal_body';
export * from './modal/components/modal_footer';
export * from './modal/components/modal_header';
export * from './modal/components/modal';

export const MODAL_DIRECTIVES: Type[] = [
	ModalComponent,
	ModalHeaderComponent,
	ModalBodyComponent,
	ModalFooterComponent
];
