let id: number = 0;
export function uniqueId(prefix: string): string {
	'use strict';

	return prefix + ++id;
}
