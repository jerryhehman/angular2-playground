import { Component, OnInit } from '@angular/core';
import { DaughterComponent } from './daughter.component';
import { AuntComponent } from './aunt.component';

@Component({
    selector: 'my-grandmother',
    styles: [`.grandmother { border-width: 2px; border-style: solid; border-radius: 10px; padding: 10px; margin: 5px;}
              td {padding: 3px;}
             `],
    template: `
    <div class="grandmother">
      <h4>This demonstrates sharing data across multiple levels of child components</h4>
      <p>This is the grandmother component, which owns the properties that are being shared.</p>
      <p>
         The takeaway from this is that primitive properties can be shared from a parent component to a child component in one direction
         only. If the children attempt to update a primitive property, the update will occur only within that component. Objects, however,
         can be updated across all components that reference them.<br/>
         A further takeaway is that primitive and object references can be passed down multiple levels of children.
      </p>
      <table><tr>
        <td>
           Primitive count = {{grandmotherCount}} 
            <button type="button" (click)="add()" class="btn btn-success">+</button>
            <button type="button" (click)="subtract()" class="btn btn-warning">-</button>
        </td>
        <td>
           Count object = {{grandmotherCountObject.count}}
            <button type="button" (click)="grandmotherCountObject.increment()" class="btn btn-success">+</button>
            <button type="button" (click)="grandmotherCountObject.decrement()" class="btn btn-warning">-</button>
        </td>
      </tr></table>
      <my-daughter [label]="'Daughter One'" [count]="grandmotherCount" [countObj]="grandmotherCountObject"></my-daughter>
      <my-daughter [label]="'Daughter Two'" [count]="grandmotherCount" [countObj]="grandmotherCountObject"></my-daughter>
      <my-aunt [label]="'Aunt'" [count]="grandmotherCount" [countObj]="grandmotherCountObject"></my-aunt>
    </div>
    `,
    providers: []
})
export class GrandmotherComponent implements OnInit  {
  grandmotherCount: number = 85;
  grandmotherCountObject : GrandmotherCountObject = new GrandmotherCountObject();

  constructor() {
  }

  ngOnInit() {
  }
  add() {
     this.grandmotherCount++;
  }
  
  subtract() {
     this.grandmotherCount--;
  }
}

export class GrandmotherCountObject {
  count: number = 17;
  
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  getCount() {
    return this.count;
  }
}
