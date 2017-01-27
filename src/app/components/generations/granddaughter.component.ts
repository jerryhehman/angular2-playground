import { Component, OnInit, Input } from '@angular/core';
import { GrandmotherCountObject } from './grandmother.component';

@Component({
    selector: 'my-granddaughter',
    styles: ['div {background-color: #737373; color: white; padding: 5px; border-style: solid; border-width: 1px; border-radius: 8px; }'],
    template: `
	  <div>
        <p>The granddaughter</p>
        <table><tr>
          <td>
            <strong>Primitive count</strong> = {{granddaughterCount}} 
              <button type="button" (click)="add()" class="btn btn-success btn-sm">+</button>
              <button type="button" (click)="subtract()" class="btn btn-warning btn-sm">-</button>
          </td>
          <td>
            <strong>Count object</strong> = {{granddaughterCountObj.count}}
              <button type="button" (click)="addObj()" class="btn btn-success btn-sm">+</button>
              <button type="button" (click)="subtractObj()" class="btn btn-warning btn-sm">-</button>
          </td>
        </tr></table>
	  </div>
    `
})
export class GranddaughterComponent implements OnInit  {
    @Input() label: string;
    @Input('count') granddaughterCount : number;  // 'count' is how the parent specified the reference in its template
    @Input('countObj') granddaughterCountObj : GrandmotherCountObject;  // 'countObj' is how the parent specified the reference in its template

  constructor() {
  }

  ngOnInit() {
  }
  
  add() {
     this.granddaughterCount++;
  }
  
  subtract() {
     this.granddaughterCount--;
  }
  addObj() {
     this.granddaughterCountObj.increment();
  }
  
  subtractObj() {
     this.granddaughterCountObj.decrement();
  }
}
