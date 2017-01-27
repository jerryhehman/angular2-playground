/* Copied from Angular 2 guide, https://angular.io/docs/ts/latest/guide/server-communication.html */

import { Component }        from '@angular/core';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';

import { WikipediaService } from '../../services/wikipedia.service';

@Component({
  selector: 'my-wiki-smart',
  template: `
    <p class="lead">Searches Wikipedia</p>
    <p>Fetches when typing stops</p>

    <input #term (keyup)="search(term.value)" class="form-control"/>

    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
  `,
  providers: [WikipediaService]
})
export class WikiSmartComponent {

  constructor (private wikipediaService: WikipediaService) { }

  private searchTermStream = new Subject<string>();

  search(term: string) { this.searchTermStream.next(term); }

  items: Observable<string[]> = this.searchTermStream
    .debounceTime(300)
    .distinctUntilChanged()
    .switchMap((term: string) => this.wikipediaService.search(term));
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
