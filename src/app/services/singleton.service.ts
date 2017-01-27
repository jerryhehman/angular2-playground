import { Injectable } from '@angular/core';

/*
 * A singleton service that stores data. It will be defined only in the root NgModule. 
 * Any component that injects this service will get the single instance at the root level.
 * An expection to this is if this service is specified in the providers of a component. For that component,
 * a unique instance will be created.
 *
 * I haven't confirmed this, but it appears that for pre-RC.5 versions of Angular2, one had to include the Service
 * in the bootstrap in order for it to be a Singleton.
 */

@Injectable()
export class SingletonService {
    singletonData: SingletonData = new SingletonData();

    constructor() { }

    increment() {
        this.singletonData.totalCount++;
    }

    decrement() {
       this.singletonData.totalCount--;
    }
}

export class SingletonData {
    totalCount: number = 0;

    constructor() {
    }
}
