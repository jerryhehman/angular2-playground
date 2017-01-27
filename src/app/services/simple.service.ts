import { Injectable } from '@angular/core';

/*
 * A simple service that stores data. It will be injected into each component that uses it.
 * Each component gets its own instance of the service and the ServiceData object will not be shared
 * between those instances.
 */

@Injectable()
export class SimpleService {
    serviceData: ServiceData = new ServiceData();

    constructor() { }

    increment() {
        this.serviceData.totalCount++;
    }

    decrement() {
       this.serviceData.totalCount--;
    }
}

export class ServiceData {
    totalCount: number = 0;

    constructor() {
    }
}
