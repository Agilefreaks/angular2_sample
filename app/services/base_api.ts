import {Injectable} from 'angular2/core';
import {Http, URLSearchParams, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {Config} from './config';

@Injectable()
export abstract class BaseApi {
	constructor(private http: Http) { }

	protected get<TResult>(
		constructor: { new (): TResult },
		path: string,
		params: URLSearchParams
	): Observable<TResult> {
		let url = `${Config.API_BASE_URL}/${path}`;
		return this.http.get(url, { search: params })
			.map((response: Response) => {
				var result = new constructor();
				(<any>result).deserialize(response.json());

				return result;
			})
			.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
