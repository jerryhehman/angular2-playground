import { Component, OnInit, Input } from '@angular/core';
import { GrandmotherCountObject } from './grandmother.component';

@Component({
    selector: 'my-aunt',
    styles: [`
               div {background-color: #3c5d4d; margin: 3px; padding: 10px; border-style: solid; border-width: 2px; 
                    border-radius: 8px; padding: 5px; border-color: #ffe6ff; }
               td {padding-right: 5px;border-style: dotted; border-width: 1px;}
            `],
    template: `
	  <div class="aunt">
        <p>This is the aunt component</p>
        <p>
           The aunt component is a child of grandmother and a sibling to daughter. It references the primitive value and the count object from grandmother. 
           If this component attenpts to update the primtiive value, the update is reflected only in this component -- it does not get updated in any other
           component that references the same value in the parent, including the parent itself. The count object, since it is an object, is updateable from
           this component. When updated here, the new value is reflected in every component that references the object.
        </p>
        <p>{{label}}</p>
        <table><tr>
          <td>
            Primitive count = {{auntCount}} 
              <button type="button" (click)="add()" class="btn btn-success btn-sm">+</button>
              <button type="button" (click)="subtract()" class="btn btn-warning btn-sm">-</button>
            <p>Note that these operations affect the value only in this component</p>
          </td>
          <td>
            Count object = {{auntCountObj.count}}
              <button type="button" (click)="addObj()" class="btn btn-success btn-sm">+</button>
              <button type="button" (click)="subtractObj()" class="btn btn-warning btn-sm">-</button>
            <p>Note that these operations affect the value in all components that reference the object.</p>
          </td>
        </tr></table>
	  </div>
    `
})
export class AuntComponent implements OnInit  {
    @Input() label: string;
    @Input('count') auntCount : number;  // 'count' is how the parent specified the reference in its template
    @Input('countObj') auntCountObj : GrandmotherCountObject;  // 'countObj' is how the parent specified the reference in its template

  constructor() {
  }

  ngOnInit() {
  }
  
  add() {
     this.auntCount++;
  }
  
  subtract() {
     this.auntCount--;
  }
  addObj() {
     this.auntCountObj.increment();
  }
  
  subtractObj() {
     this.auntCountObj.decrement();
  }
}
