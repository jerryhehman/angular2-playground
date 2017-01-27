import { Component, OnInit, Input } from '@angular/core';
import { SimpleService, ServiceData, SingletonService, SingletonData } from '../../services';

@Component({
    selector: 'my-incrementer',
    template: `
    <div>
      <h2>{{label}}</h2>
      <table border="1">
       <tr>
        <td>
          <h3>Local Service</h3>
          <div style='padding-right:15px'>The counts in this column are independent, since the Services are unique</div>
          <h4>{{serviceData.totalCount}}</h4>
          <button type="button" (click)="add()" class="btn btn-success">+</button>
          <button type="button" (click)="subtract()" class="btn btn-warning">-</button>
        </td>
        <td>
          <h3>Singleton Service</h3>
          <div>All counts in this column are the same, since they are using the same Service instance</div>
          <h4>{{singletonData.totalCount}}</h4>
          <button type="button" (click)="addSingleton()" class="btn btn-success">+</button>
          <button type="button" (click)="subtractSingleton()" class="btn btn-warning">-</button>
        </td>
       </tr>
      </table>
    </div>
    `,
    // Note that SingletonService is not specified here. If it were, it would not be a Singleton and this component would get a unique instance.
    providers: [SimpleService]
})
export class IncrementerComponent implements OnInit  {
    @Input() label: string;
    serviceData: ServiceData;
    singletonData: SingletonData;

  constructor(private simpleService: SimpleService, private singletonService: SingletonService) {
  }

  ngOnInit() {
     this.serviceData = this.simpleService.serviceData;
     this.singletonData = this.singletonService.singletonData;
  }
  
  add() {
     this.simpleService.increment();
  }
  
  subtract() {
     this.simpleService.decrement();
  }
  addSingleton() {
     this.singletonService.increment();
  }
  
  subtractSingleton() {
     this.singletonService.decrement();
  }
}
