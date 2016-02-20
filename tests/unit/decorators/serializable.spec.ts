import {describe, beforeEach, it, expect} from 'angular2/testing';

import {serializable} from '../../../app/decorators';
import {Collection} from '../../../app/models';

describe('serializable', () => {
	var subject: Function;

	describe('the decorated class does not have a deserialize method on the prototype', () => {
		@serializable
		class Decorated {
			public name: string = '';
			public address: string = '';
		};

		var decorated: Decorated;

		beforeEach(() => {
			decorated = new Decorated();
			subject = () => {
				return decorated;
			};
		});

		it('adds a deserialize method to the prototype', () => {
			expect((<any>subject()).deserialize).not.toBeUndefined();
		});

		describe('deserialize', () => {
			var json: any;

			beforeEach(() => {
				json = {};
				subject = () => {
					return (<any>decorated).deserialize(json);
				};
			});

			it('copies the values of properties from the given json that exist on self', () => {
				json.name = 'test';

				subject();

				expect(decorated.name).toBe('test');
			});

			it('does not copy the values of properties from the given json that do exist on self', () => {
				json.test = 'test';

				subject();

				expect((<any>decorated).test).toBeUndefined();
			});

			it('returns a reference to the object on which it was called', () => {
				expect(subject()).toBe(decorated);
			});
		});

		describe('the decorated class extends Collection', () => {
			@serializable
			class DecoratedCollection extends Collection<Decorated> {
				public getModelType() {
					return Decorated;
				}
			};

			var decoratedCollection: DecoratedCollection;

			beforeEach(() => {
				decoratedCollection = new DecoratedCollection();
				subject = () => {
					return decoratedCollection;
				};
			});

			describe('deserialize', () => {
				var json: any;

				beforeEach(() => {
					json = [];
					subject = () => {
						return (<any>decoratedCollection).deserialize(json);
					};
				});

				it('deserializes the item correctly', () => {
					json.push({ name: 'test' });

					subject();

					expect(decoratedCollection[0].name).toBe('test');
				});
			});
		});
	});

	describe('the decorated class has a deserialize method on the prototype', () => {
		@serializable
		class Decorated {
			public name: string = '';
			public address: string = '';

			public deserialize(json: any) {
				this.name = json.name + 'suffix';
				this.address = json.address + 'suffix';
			}
		};

		var decorated: Decorated;

		beforeEach(() => {
			decorated = new Decorated();
			subject = () => {
				return decorated;
			};
		});

		it('it does not override the existing deserialize method', () => {
			decorated.deserialize({ name: 'test', address: 'test2' });

			expect(decorated.name).toBe('testsuffix');
			expect(decorated.address).toBe('test2suffix');
		});
	});
});
