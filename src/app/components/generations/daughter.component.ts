import { Component, OnInit, Input } from '@angular/core';
import { GrandmotherCountObject } from './grandmother.component';

@Component({
    selector: 'my-daughter',
    styles: [`
               div {margin: 3px; padding: 5px; border-style: solid; border-width: 2px; 
                    border-radius: 8px; padding: 5px; border-color: #c3dA96; background-color: #4C6676; }
               td {padding-right: 5px;}
             `],
    template: `
	  <div>
        <p>This is the daughter component</p>
        <p>The daughter component is a child of grandmother and a sibling of aunt. It passes property references from Grandmother to Granddaughter</p>
        <table><tr>
          <td><strong>Label</strong> = {{label}}</td>
          <td><strong>Primitive Count value</strong> = {{daughterCount}}</td>
          <td><strong>Object Count value</strong> = {{daughterCountObj.count}}</td>
        </tr></table>
	      <my-granddaughter [label]="'Granddaughter One'" [count]="daughterCount" [countObj]="daughterCountObj"></my-granddaughter>
	      <my-granddaughter [label]="'Granddaughter Two'" [count]="daughterCount" [countObj]="daughterCountObj"></my-granddaughter>
	  </div>
    `
})
export class DaughterComponent implements OnInit  {
    @Input() label: string;
    @Input('count') daughterCount : number;  // 'count' is how the parent specified the reference in its template
    @Input('countObj') daughterCountObj : GrandmotherCountObject;  // 'countObj' is how the parent specified the reference in its template

  constructor() {
  }

  ngOnInit() {
  }
  
}
