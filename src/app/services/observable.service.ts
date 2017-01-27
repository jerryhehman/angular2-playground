import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
 * A service that returns Observables.
 */

@Injectable()
export class ObservableService {

    constructor() { 
	}

    /*
	 * This method returns an Observable with a sorted array copy of the input array.
	 * This method has a built-in delay to mimic an expensive service call. It serves
	 * all requests, even if new requests come in while it is serving an existing request.
	 */
    simpleDelayedSorter(inVal: string[], requestId: number): Observable<ObsServiceReturn> {
        // turn the sorted array into an Observable and build in a delay
		return new Observable<ObsServiceReturn>((observer: any) => {
			setTimeout(() => {
				observer.next(new ObsServiceReturn(requestId, this.sortIntoNewArray(inVal)));
			}, 5000);
		});
	}

	private sortIntoNewArray(inVal: string[]): string[] {
		let rval: string[] = [];

		for (let x of inVal) {
			rval.push(x);
		}

        rval.sort();

        return rval;
	}
}

export class ObsServiceReturn {
	requestId: number;
	data: string[];
	constructor(id: number, inData: string[]) {
		this.requestId = id;
		this.data = inData;
	}
}
