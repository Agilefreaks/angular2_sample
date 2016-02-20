import {Collection} from '../models';

export function serializable(target: any) {
	'use strict';
	var original = target;

	function deserializeModel(json: any, model: any) {
		for (var key in json) {
			if (json.hasOwnProperty(key) && model.hasOwnProperty(key)) {
				model[key] = json[key];
			}
		}
	}

	function deserializeCollection(json: any, collection: any) {
		var modelConstructor = collection.getModelType();
		for (var i = 0; i < json.length; i++) {
			var item = new modelConstructor();
			item.deserialize(json[i]);
			collection.push(item);
		}
	}

	function deserialize(json: any) {
		var self = <any>this;
		if (self instanceof Collection) {
			deserializeCollection(json, self);
		} else {
			deserializeModel(json, self);
		}

		return self;
	}

	function construct(constructor: FunctionConstructor, args: Array<any>) {
		var boundConstructor: any = function () {
			return constructor.apply(this, args);
		};
		boundConstructor.prototype = constructor.prototype;
		boundConstructor.prototype.deserialize = boundConstructor.prototype.deserialize || deserialize;

		return new boundConstructor();
	}

	var newConstructor: any = function (...args: Array<any>) {
		return construct(original, args);
	};

	 // copy prototype so intanceof operator still works
	newConstructor.prototype = original.prototype;

	return newConstructor;
};
