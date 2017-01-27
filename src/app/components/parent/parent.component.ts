import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-parent',
    template: `
    <p class="lead">This page shows the difference between a local service versus a singleton service.</p>
    <p>Two instances of the sub-component are included on this page. The left column shows the result of the
       local service. The local service is specified as a provider for the component, meaning that each instance of
       the component will get a unique instance of the service. Note that changing the counter for one has no effect on the other, since the services
       that contain the variable holding the counter are local to each component.</p>
    <p>The right column shows the result of the singleton service. It is specified in the app.module and is injected to the component, meaning that
      all instances of the component get the same instance of the service. Note that changing the counter affects the other component, since
      the service that contains the variable holding the counter is the same for both.</p>
    <div>
      <my-incrementer [label]="'One'"></my-incrementer>
      <my-incrementer [label]="'Two'"></my-incrementer>
    </div>
    `,
    providers: []
})
export class ParentComponent implements OnInit  {

  constructor() {
  }

  ngOnInit() {
  }
}
