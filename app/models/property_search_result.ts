import {serializable} from '../decorators';

@serializable
export class PropertySearchResult {
	id: string = '';
	name: string = '';
	streetAddress: string = '';
	source: string = '';
	coverImage: string = '';
	images: string[] = [];
	city: string = '';
	state: string = '';
	zipCode: string = '';
}
